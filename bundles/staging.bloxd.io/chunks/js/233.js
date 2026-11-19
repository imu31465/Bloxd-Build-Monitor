export const id = 233;
export const ids = [233];
export const modules = {
  37882: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => RY
    });
    var FY = DY(37886);
    const AY = [0, 0, 0];
    class IY {
      constructor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AY;
        this.pool = YY, this.origin = rY, this.count = 0, this.free = []
      }
      take() {
        var YY;
        const rY = null !== (YY = this.free.pop()) && void 0 !== YY ? YY : this.count++;
        return rY >= this.pool.gu && this.pool.grow(Math.max(2 * this.pool.gu, rY + 1)), this.hide(rY), rY
      }
      release(YY) {
        this.hide(YY), this.free.push(YY)
      }
      write(YY, rY, DY, AY) {
        const {
          records: IY
        } = this.pool, {
          origin: RY
        } = this, OY = YY * FY.b;
        IY[OY] = rY - RY[0], IY[OY + 1] = DY - RY[1], IY[OY + 2] = AY - RY[2], IY[OY + FY.d] = 0, this.pool.markDirty(YY)
      }
      hide(YY) {
        this.pool.records[YY * FY.b + FY.d] = 1, this.pool.markDirty(YY)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class RY {
      constructor(YY, rY, DY) {
        this.api = YY, this.model = rY, this.initialCapacity = DY, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(YY) {
        let rY = this.kinds.get(YY);
        if (void 0 === rY) {
          const DY = this.api.createInstancePool({
            ...this.model,
            item: YY
          }, this.initialCapacity);
          null === DY || void 0 === DY || DY.setOrigin(this.origin[0], this.origin[1], this.origin[2]), rY = DY && new IY(DY, this.origin), this.kinds.set(YY, rY)
        }
        return rY
      }
      follow(YY) {
        const {
          origin: rY
        } = this;
        if (Math.abs(YY[0] - rY[0]) <= 512 && Math.abs(YY[1] - rY[1]) <= 512 && Math.abs(YY[2] - rY[2]) <= 512) return !1;
        rY[0] = Math.floor(YY[0]), rY[1] = Math.floor(YY[1]), rY[2] = Math.floor(YY[2]);
        for (const DY of this.kinds.values()) null === DY || void 0 === DY || DY.pool.setOrigin(rY[0], rY[1], rY[2]);
        return !0
      }
      commit() {
        for (const YY of this.kinds.values()) null === YY || void 0 === YY || YY.commit()
      }
      dispose() {
        for (const YY of this.kinds.values()) null === YY || void 0 === YY || YY.dispose();
        this.kinds.clear()
      }
    }
  },
  37894: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => RY,
      f: () => OY,
      g: () => gY
    });
    const FY = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      AY = [0, 1, 2, 0, 2, 3],
      IY = [4, 5];

    function RY(YY, rY, DY, FY, AY) {
      for (let RY = 0; RY < 6; RY++) IY.includes(RY) === AY && aY(YY, rY, DY, FY, RY)
    }

    function OY(YY, rY, DY, FY) {
      for (let AY = 0; AY < 6; AY++) aY(YY, rY, DY, FY, AY)
    }

    function gY(YY, rY, DY, IY, RY) {
      for (let OY = 0; OY < 6; OY++)
        for (const gY of [0, 1]) {
          const [aY, vY, uY] = [gY + 2, gY + 1, (gY + 3) % 4], sY = YY.length / 3;
          for (const [rY, AY] of [
              [gY, vY],
              [aY, vY],
              [aY, uY],
              [gY, uY]
            ])
            for (let gY = 0; gY < 3; gY++) {
              const aY = FY[3 * (4 * OY + rY) + gY],
                vY = FY[3 * (4 * OY + AY) + gY];
              YY.push((aY + (vY - aY) * RY) * IY / 2 + DY[gY])
            }
          for (const YY of AY) rY.push(sY + YY)
        }
    }

    function aY(YY, rY, DY, IY, RY) {
      let [OY, gY, aY] = DY, [vY, uY, sY] = IY;
      const iY = YY.length / 3;
      for (let AY = 4 * RY; AY < 4 * RY + 4; AY++) YY.push(FY[3 * AY] * vY / 2 + OY, FY[3 * AY + 1] * uY / 2 + gY, FY[3 * AY + 2] * sY / 2 + aY);
      for (const FY of AY) rY.push(iY + FY)
    }
  },
  37876: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      default: () => uE
    });
    var FY = DY(61);
    const AY = [{
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
      IY = 10;
    let RY = !0;

    function OY() {
      return RY
    }

    function gY(YY) {
      RY = YY
    }
    const aY = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function vY() {
      return RY ? AY.length : IY
    }

    function uY(YY) {
      var rY, DY;
      return null !== (rY = null === (DY = AY[YY - 1]) || void 0 === DY ? void 0 : DY.reactorTier) && void 0 !== rY ? rY : 0
    }

    function sY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : uY(YY) > 0;
      return DY && !RY ? "hidden" : YY <= rY ? "open" : DY ? rY < 5 ? "hidden" : rY < IY ? "teaser" : "locked" : "locked"
    }

    function iY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: FY,
        n: AY
      } = oY(YY);
      return {
        key: rY[FY],
        params: {
          [FY]: DY ? String(AY) : AY
        }
      }
    }
    const yY = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function QY(YY, rY) {
      return uY(YY) > 0 && rY < IY
    }

    function oY(YY) {
      const rY = uY(YY);
      if (rY > 0) return {
        kind: "atomic",
        n: rY,
        short: `A${rY}`
      };
      const DY = function(YY) {
        return YY >= 6 && YY <= 10 ? YY - 6 + 1 : 0
      }(YY);
      return DY > 0 ? {
        kind: "stage",
        n: DY,
        short: `S${DY}`
      } : {
        kind: "tier",
        n: YY,
        short: String(YY)
      }
    }

    function WY(YY) {
      return AY[Math.max(1, Math.min(YY, AY.length)) - 1]
    }

    function EY(YY, rY) {
      return YY < rY ? function(YY) {
        var rY;
        return null !== (rY = AY[YY]) && void 0 !== rY ? rY : null
      }(YY) : null
    }
    const mY = "baf2coresubmit",
      VY = "baf2corebankpause",
      SY = "baf2coredeposit",
      lY = "baf2corechargepause";

    function TY(YY) {
      var rY;
      return null !== (rY = YY.baf2CoreOpen) && void 0 !== rY ? rY : IY
    }
    const eY = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function NY(YY) {
      return eY.includes(YY)
    }
    const BY = (YY, rY) => rY.map((rY => [rY, [YY]])),
      cY = Object.fromEntries([...BY("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...BY("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...BY("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...BY("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...BY("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...BY("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...BY("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...BY("Parts Bench", ["Focus Lens"]), ...BY("Machine Bench", ["Laser", "Collider"]), ...BY("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb", "Nova Bomb"]), ...BY("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...BY("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...BY("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...BY("Tool Bench", ["Mob Cage"]), ...BY("Tool Bench", ["Pocket Terminal"]), ...BY("Tool Bench", ["Comet Beacon"]), ...BY("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function KY(YY) {
      var rY;
      return null !== (rY = cY[YY]) && void 0 !== rY ? rY : ["Workbench"]
    }

    function HY(YY) {
      return KY(YY)[0]
    }
    AY.slice(1).map(((YY, rY) => `Core Tier ${rY+2}`));
    var zY = DY(8830);
    const ZY = ["on", "hud", "off"];

    function CY(YY) {
      return "on" === YY
    }
    var fY = DY(341);
    const jY = "Mob Farm",
      hY = {
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
      dY = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      JY = {
        1: 20,
        2: 60,
        3: 120
      },
      MY = "baf2farmvoid",
      wY = "Caged ",
      bY = " Spawner Block";

    function XY(YY) {
      return `lifeform:${(0,fY.te)(YY)}`
    }

    function qY(YY) {
      if (!YY) return null;
      if (YY.startsWith(wY)) {
        const rY = YY.slice(6);
        return dY.includes(rY) ? rY : null
      }
      if (YY.endsWith(bY)) {
        const rY = YY.slice(0, -14);
        return void 0 !== hY[rY] ? rY : null
      }
      return null
    }

    function pY(YY) {
      return !0 === YY.mobFarm
    }

    function kY(YY, rY) {
      return JY[hY[rY]] * YY.opMs / 1e3
    }
    const GY = new Map;
    const xY = "baf2islands",
      nY = "baf2islandnew";

    function PY(YY) {
      const rY = AY.findIndex((rY => rY.unlocks.includes(YY)));
      return rY < 0 ? 1 : rY + 1
    }

    function UY(YY) {
      return Math.floor(YY).toLocaleString("en-US")
    }
    var LY = DY(37812);
    const tY = "baf2terminaltake",
      Yr = ["one", "stack", "fill"];

    function rr(YY, rY, DY) {
      return `${tY} ${YY} ${rY} ${DY}`
    }

    function Dr(YY) {
      const [rY, DY, ...FY] = YY.trim().split(" "), AY = Number(rY), IY = function(YY) {
        if (Yr.includes(YY)) return YY;
        const rY = Number(YY);
        return /^\d+$/.test(YY) && Number.isSafeInteger(rY) && rY > 0 ? rY : null
      }(null !== DY && void 0 !== DY ? DY : "");
      return !Number.isSafeInteger(AY) || AY <= 0 || null === IY || 0 === FY.length ? null : {
        seq: AY,
        mode: IY,
        item: FY.join(" ")
      }
    }
    const Fr = "baf2rx";

    function Ar(YY, rY) {
      for (var DY = arguments.length, FY = new Array(DY > 2 ? DY - 2 : 0), AY = 2; AY < DY; AY++) FY[AY - 2] = arguments[AY];
      return [Fr, YY[0], YY[1], YY[2], rY, ...FY].join(" ")
    }
    const Ir = 2,
      Rr = 4,
      Or = 8,
      gr = 16,
      ar = 32,
      vr = 64,
      ur = 128,
      sr = 256,
      ir = 512,
      yr = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      Qr = [{
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
    const or = "Biomass",
      Wr = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function Er(YY) {
      return {
        input: or,
        inputAmount: 1,
        output: YY,
        outputAmount: 1
      }
    }
    const mr = "baf2synth",
      Vr = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      Sr = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      lr = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      Tr = function(YY, rY) {
        return {
          input: YY,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: rY,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      er = function(YY, rY) {
        return {
          ...Tr(YY, rY, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      Nr = Sr.map((YY => er(YY, "Biomass", 2))),
      Br = {
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
          recipes: [Tr("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), Tr("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), Tr("Raw Gold", "Gold Grit", 2), Tr("Messy Stone", "Sand"), Tr("Gravel", "Sand"), Tr("Raw Voltite", "Voltite Dust", 2), Tr("Moonstone", "Moonstone Dust", 4), Tr("Wheat Seeds", "Fertiliser"), Tr("Raw Uranium", "Uranium Grit", 2), er("Mossy Messy Stone", "Sand"), ...Nr],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [Tr("Iron Grit", "Iron Bar"), Tr("Copper Grit", "Copper Bar"), Tr("Gold Grit", "Gold Bar"), Tr("Raw Iron", "Iron Bar"), Tr("Raw Copper", "Copper Bar"), Tr("Raw Gold", "Gold Bar"), Tr("Sand", "Glass"), Tr("Messy Stone", "Stone"), ...fY.Sc.map((YY => Tr(YY, "Charcoal", 1, 4))), Tr("Wheat", "Bread", 1, 2), ...Sr.map(((YY, rY) => er(YY, lr[rY])))],
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
          recipes: [Tr("Iron Bar", "Iron Plate"), Tr("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [Tr("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [Tr("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [Tr("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), Tr("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), Tr("Raw Gold", "Gold Grit", 3), Tr("Raw Voltite", "Voltite Dust", 3), Tr("Messy Stone", "Sand", 2), Tr("Gravel", "Sand", 2), Tr("Moonstone", "Moonstone Dust", 6), Tr("Raw Uranium", "Uranium Grit", 3), er("Mossy Messy Stone", "Sand", 2), ...Nr],
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
          table: yr
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [Tr("Coal", "Diamond", 1, 24), Tr("Voltite Dust", "Moonstone", 1, 12)],
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
        ...LY.h
      },
      cr = {
        Crusher: [Tr("Spent Pellet", "Glow Dust"), Tr("Wheat Seeds", "Biomass"), Tr("Wheat", "Biomass"), Tr("Dead Bush", "Biomass"), Tr("Dusk Moss", "Biomass"), Tr("Rotten Flesh", "Biomass"), Tr("Bone", "Biomass", 2)],
        "Shatter Mill": [Tr("Spent Pellet", "Glow Dust"), Tr("Wheat Seeds", "Biomass"), Tr("Wheat", "Biomass"), Tr("Dead Bush", "Biomass"), Tr("Dusk Moss", "Biomass"), Tr("Rotten Flesh", "Biomass"), Tr("Bone", "Biomass", 2), ...fY.Sc.map((YY => Tr(YY, "Biomass")))],
        Smelter: [Tr("Biomass", "Fertiliser", 2)],
        Press: [Tr("Coal", "Graphite", 1, 4)]
      },
      Kr = "Power Coupler",
      Hr = "Advanced Coupler",
      zr = "Nova Coupler",
      Zr = [{
        item: Kr,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: Hr,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: zr,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const Cr = new Map;

    function fr(YY) {
      var rY, DY;
      return null !== (rY = null !== (DY = YY.fuelSlot) && void 0 !== DY ? DY : YY.couplerSlot) && void 0 !== rY ? rY : null
    }

    function jr(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!YY.couplable) throw new Error(`${YY.kind} takes no Power Coupler`);
      let DY = Cr.get(YY);
      DY || (DY = [], Cr.set(YY, DY));
      let FY = DY[rY];
      if (!FY) {
        var AY;
        const {
          divisor: IY,
          powerPerS: RY
        } = Zr[rY - 1], OY = YY.opMs / IY, gY = void 0 !== YY.fluidMade || void 0 !== YY.cryoMade ? YY.powerPerOp : RY * OY / 1e3;
        FY = {
          ...YY,
          fuelSlot: null,
          couplerSlot: null !== (AY = fr(YY)) && void 0 !== AY ? AY : void 0,
          opMs: OY,
          powerPerOp: gY,
          coupled: !0
        }, rY > 1 && (FY = {
          ...FY,
          couplerLevel: rY
        }), DY[rY] = FY
      }
      return FY
    }
    const hr = new Map;
    const dr = new Map;

    function Jr(YY, rY) {
      if (null === rY || (DY = rY, !Wr.includes(DY))) return YY;
      var DY;
      let FY = dr.get(rY);
      return FY || (FY = {
        ...YY,
        recipes: [Er(rY)]
      }, dr.set(rY, FY)), FY
    }

    function Mr(YY) {
      return !0 === YY.synth
    }
    const wr = (YY, rY, DY, FY) => ({
        output: YY,
        outputAmount: rY,
        tier: DY,
        inputs: FY.map((YY => {
          let [rY, DY] = YY;
          return {
            item: rY,
            amount: DY
          }
        }))
      }),
      br = Object.fromEntries([wr("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), wr("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), wr("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), wr("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), wr("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), wr("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), wr("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), wr("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), wr("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), wr("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), wr("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), wr("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), wr("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), wr("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), wr("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), wr("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), wr("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), wr("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), wr("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), wr("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), wr("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), wr("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), wr("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), wr("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), wr("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), wr("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), wr("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), wr("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), wr("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), wr("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((YY => [YY.output, YY]))),
      Xr = new Map;

    function qr(YY, rY) {
      let DY = Br[YY];
      if (rY.atomic && (DY = function(YY) {
          const rY = cr[YY.kind];
          if (!rY) return YY;
          let DY = hr.get(YY.kind);
          if (!DY) {
            const FY = new Set(rY.map((YY => YY.input))),
              AY = YY.recipes.filter((YY => !FY.has(YY.input)));
            DY = {
              ...YY,
              recipes: [...AY, ...rY]
            }, hr.set(YY.kind, DY)
          }
          return DY
        }(DY)), DY.synth) return Jr(DY, rY.taught);
      if (rY.coupled && DY.couplable) return jr(DY, rY.level);
      const FY = DY.inputSlots && null !== rY.taught ? br[rY.taught] : void 0;
      if (!FY) return DY;
      const AY = `${YY}|${FY.output}`;
      let IY = Xr.get(AY);
      return IY || (IY = {
        ...DY,
        bench: FY
      }, Xr.set(AY, IY)), IY
    }
    const pr = ["Diamond", "Moonstone"];

    function kr(YY) {
      return new Set(YY.flatMap((YY => YY.bonus ? [YY.output, YY.bonus.item] : [YY.output])).filter((YY => !pr.includes(YY))))
    }
    const Gr = Object.values(Br).flatMap((YY => YY.recipes));
    kr(Gr.filter((YY => !0 !== YY.nuclear))), kr([...Gr.filter((YY => !0 === YY.nuclear)), ...Object.values(cr).flat()]);

    function xr(YY) {
      return null === YY.inputSlot && void 0 === YY.inputSlots && void 0 === YY.powerMade && void 0 === YY.fluidMade && !YY.treeCutter && void 0 === YY.table
    }

    function nr(YY) {
      return !0 === YY.treeCutter
    }
    const Pr = ["Voltite Cell"];

    function Ur(YY) {
      var rY, DY;
      return null !== (rY = null === (DY = YY.fuels) || void 0 === DY ? void 0 : DY.some((YY => Pr.includes(YY)))) && void 0 !== rY && rY
    }
    const Lr = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(fY.Sc.map((YY => [YY, 8e3]))),
        ...Object.fromEntries(fY.vd.map((YY => [YY, 2e3]))),
        "Voltite Cell": 12e4
      },
      tr = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      YD = {
        "Uranium Deposit": 4e3
      };

    function rD(YY) {
      var rY;
      return null !== (rY = Object.keys(tr).find((rY => tr[rY] === YY))) && void 0 !== rY ? rY : null
    }

    function DD(YY) {
      return Vr.includes(YY)
    }

    function FD(YY) {
      return !0 !== YY.nuclear || OY()
    }
    var AD = DY(332);
    var ID = DY(8900),
      RD = DY(8836),
      OD = DY(8903),
      gD = DY(8898);
    const aD = "Reactor Controller",
      vD = "Reactor Port",
      uD = "Battery Cell",
      sD = ["fuel", "water", "waste"],
      iD = {
        fuel: vD,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      yD = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      QD = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      oD = "Reactor Frame",
      WD = "Reactor Glass",
      ED = {
        edge: [oD],
        cap: [WD, vD],
        wall: [WD, vD],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [aD]
      },
      mD = {
        edge: [uD],
        cap: [uD],
        wall: [uD],
        inside: [uD],
        ctrl: [uD]
      },
      VD = ["edge", "cap", "wall", "inside"],
      SD = ["Reactor Slag"];

    function lD(YY) {
      return SD.includes(TD(YY))
    }

    function TD(YY) {
      const rY = YY.indexOf("|");
      return rY < 0 ? YY : YY.slice(0, rY)
    }

    function eD(YY) {
      return TD(YY) === aD ? "reactor" : null
    }

    function ND(YY) {
      return TD(YY) !== vD ? null : YY.endsWith("|Water") ? "water" : YY.endsWith("|Waste") ? "waste" : "fuel"
    }

    function BD(YY) {
      const rY = ND(YY);
      return null === rY ? null : HD(iD[sD[(sD.indexOf(rY) + 1) % sD.length]], function(YY) {
        return YY.includes(cD)
      }(YY))
    }
    const cD = "|meta|rot1|Formed",
      KD = new Set([oD, WD, vD]);

    function HD(YY, rY) {
      var DY;
      const FY = TD(YY);
      if (!KD.has(FY)) return YY;
      if (FY !== vD) return rY ? FY + cD : FY;
      const AY = null !== (DY = ND(YY)) && void 0 !== DY ? DY : "fuel";
      return rY ? "fuel" === AY ? FY + cD : `${FY}${cD}|${"water"===AY?"Water":"Waste"}` : iD[AY]
    }

    function zD(YY, rY) {
      const DY = PD(YY, rY);
      if ("Air" === DY) return !1;
      const FY = "reactor" === YY ? ED : mD;
      return VD.some((YY => FY[YY].includes(DY))) || "reactor" === YY && SD.includes(DY)
    }

    function ZD(YY) {
      return QD[YY]
    }

    function CD(YY) {
      var rY;
      return null !== (rY = yD[YY]) && void 0 !== rY ? rY : yD[1]
    }

    function fD(YY) {
      const [rY, , DY] = CD(YY);
      return [DY, 0, -rY]
    }

    function jD(YY, rY, DY, FY, AY, IY) {
      return {
        ctrl: [YY[0], YY[1], YY[2]],
        rot: yD[rY] ? rY : 1,
        w: DY,
        h: FY,
        d: AY,
        cu: IY[0],
        cv: IY[1]
      }
    }

    function hD(YY, rY) {
      return "reactor" === YY ? [Math.floor((rY - 1) / 2), 0] : [0, 0]
    }

    function dD(YY, rY, DY, FY, AY) {
      let IY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : YY.rot;
      if (DY === YY.w && FY === YY.h && AY === YY.d && IY === YY.rot) return YY;
      const [RY] = hD(rY, YY.w);
      if (YY.cu === RY && YY.cv <= 1) return jD(YY.ctrl, IY, DY, FY, AY, hD(rY, DY));
      const OY = (YY, rY) => Math.max(1, Math.min(rY, YY));
      return jD(YY.ctrl, IY, DY, FY, AY, [OY(YY.cu, DY - 2), 0 === YY.cv ? 0 : OY(YY.cv, FY - 2)])
    }
    const JD = 11,
      MD = 2 * JD + 1;
    new Uint8Array(MD * MD * MD);

    function wD(YY) {
      return YY.w * YY.h * YY.d
    }

    function bD(YY) {
      const rY = fD(YY.rot);
      return [YY.ctrl[0] - rY[0] * YY.cu, YY.ctrl[1] - YY.cv, YY.ctrl[2] - rY[2] * YY.cu]
    }

    function XD(YY) {
      return YY.cv * YY.d * YY.w + YY.cu
    }

    function qD(YY, rY) {
      const DY = rY % YY.w,
        FY = Math.floor(rY / YY.w) % YY.d;
      return [DY, Math.floor(rY / (YY.w * YY.d)), FY]
    }

    function pD(YY, rY) {
      const [DY, FY, AY] = qD(YY, rY), IY = bD(YY), RY = CD(YY.rot), OY = fD(YY.rot);
      return [IY[0] + OY[0] * DY - RY[0] * AY, IY[1] + FY, IY[2] + OY[2] * DY - RY[2] * AY]
    }

    function kD(YY, rY) {
      const DY = bD(YY),
        FY = CD(YY.rot),
        AY = fD(YY.rot),
        IY = rY[0] - DY[0],
        RY = rY[2] - DY[2],
        OY = IY * AY[0] + RY * AY[2],
        gY = -(IY * FY[0] + RY * FY[2]),
        aY = rY[1] - DY[1];
      return OY < 0 || OY >= YY.w || aY < 0 || aY >= YY.h || gY < 0 || gY >= YY.d ? -1 : (aY * YY.d + gY) * YY.w + OY
    }

    function GD(YY, rY) {
      if (rY === XD(YY)) return "ctrl";
      const [DY, FY, AY] = qD(YY, rY), IY = 0 === FY || FY === YY.h - 1, RY = Number(0 === DY || DY === YY.w - 1) + Number(IY) + Number(0 === AY || AY === YY.d - 1);
      return RY >= 2 ? "edge" : 1 === RY ? IY ? "cap" : "wall" : "inside"
    }

    function xD(YY, rY) {
      const [DY, FY, AY] = qD(YY, rY);
      return 0 === DY || DY === YY.w - 1 || 0 === FY || FY === YY.h - 1 || 0 === AY || AY === YY.d - 1 ? -1 : ((FY - 1) * (YY.d - 2) + (AY - 1)) * (YY.w - 2) + (DY - 1)
    }

    function nD(YY, rY) {
      const DY = YY.w - 2,
        FY = YY.d - 2,
        AY = rY % DY + 1,
        IY = Math.floor(rY / DY) % FY + 1;
      return ((Math.floor(rY / (DY * FY)) + 1) * YY.d + IY) * YY.w + AY
    }

    function PD(YY, rY) {
      const DY = TD(rY);
      return "reactor" === YY && DY === aD ? oD : DY
    }

    function UD(YY, rY, DY) {
      const FY = "ctrl" === rY ? TD(DY) : PD(YY, DY);
      return ("reactor" === YY ? ED : mD)[rY].includes(FY) ? "ok" : "Air" === FY ? "missing" : zD(YY, DY) ? "wrong" : "blocked"
    }

    function LD(YY, rY) {
      return "battery" === YY ? uD : "inside" === rY ? null : function(YY, rY) {
        if ("inside" === rY || "ctrl" === rY || "battery" === YY) return null;
        return "edge" === rY ? oD : WD
      }(YY, rY)
    }
    const tD = {
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
      YF = "Collider",
      rF = "Laser",
      DF = "Star Alloy",
      FF = "Glow Dust",
      AF = [YF, "_Collider Focus"];

    function IF(YY) {
      return AF.indexOf(TD(YY))
    }

    function RF(YY) {
      return TD(YY) === rF
    }

    function OF(YY) {
      return [
        [YY[0], YY[1], YY[2]],
        [YY[0], YY[1] + 1, YY[2]]
      ]
    }
    const gF = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function aF(YY, rY, DY) {
      const FY = gF[rY];
      return [YY[0] + FY[0] * DY, YY[1], YY[2] + FY[2] * DY]
    }

    function vF(YY, rY) {
      if (rY[1] !== YY[1]) return null;
      const DY = rY[0] - YY[0],
        FY = rY[2] - YY[2];
      if (0 !== DY === (0 !== FY)) return null;
      const AY = Math.abs(DY + FY);
      if (AY > tD.LASER_D) return null;
      return {
        dir: FY < 0 ? 0 : DY > 0 ? 1 : FY > 0 ? 2 : 3,
        Ua: AY
      }
    }

    function uF(YY, rY, DY) {
      const FY = rY => Math.abs(YY[0] - rY[0]) <= 1 && Math.abs(YY[1] - rY[1]) <= 1;
      return FY(rY) || FY(DY)
    }

    function sF(YY, rY) {
      return function(YY, rY, DY, FY) {
        return [0, 1, 2, 3].map((AY => {
          for (let IY = 1; IY <= tD.LASER_D; IY++) {
            const RY = aF(YY, AY, IY);
            if (uF([RY[0], RY[2]], rY, DY) || !FY(RY)) return !1
          }
          return !0
        }))
      }(OF(YY)[1], rY.spawnXZ, rY.coreXZ, (YY => YY[1] >= ID.s && YY[1] < ID.s + ID.v && YY[0] >= rY.minXZ[0] && YY[0] <= rY.maxXZ[0] && YY[2] >= rY.minXZ[1] && YY[2] <= rY.maxXZ[1]))
    }
    const iF = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function yF(YY) {
      return Math.max(48 + 16 * YY, WY(YY).machineAllowance)
    }
    const QF = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function oF(YY) {
      const rY = YY.split("|")[0];
      return QF.includes(rY) ? "Solar Panel" : rY === OD.c ? "Fluid Pipe" : IF(rY) >= 0 ? "Collider" : (DY = rY, iF.includes(DY) ? rY : null);
      var DY
    }
    const WF = "buildAFactory2Game:solarPanelDescription";
    const EF = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function mF(YY, rY) {
      var DY;
      return null !== (DY = EF.find((DY => {
        var FY;
        return (null !== (FY = YY.level(DY)) && void 0 !== FY ? FY : 0) >= rY
      }))) && void 0 !== DY ? DY : null
    }
    const VF = "buildAFactory2Game:";
    let SF = null;
    const lF = {
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
      TF = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      eF = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      NF = {
        "Loot Chest": `${VF}lookRuinChestName`
      };

    function BF(YY) {
      return "object" === typeof YY && null !== YY && "translationKey" in YY && "string" === typeof YY.translationKey ? YY.translationKey : null
    }

    function cF(YY, rY) {
      var DY;
      return null !== (DY = BF(YY.displayName(rY))) && void 0 !== DY ? DY : `item:${(0,fY.te)(rY)}`
    }

    function KF(YY, rY) {
      var DY, FY, AY, IY;
      let RY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rY;
      if ("Solar Panel" === oF(rY)) return {
        name: BF(YY.displayName("Solar Panel")),
        detail: WF,
        detailItem: null
      };
      const gY = rY.endsWith(" Ore"),
        aY = (SF ??= new Set([...Object.keys((0, RD.h)()), ...Object.keys((0, OD.n)())].map((YY => YY.split("|")[0]))), SF).has(rY),
        vY = gY || aY ? null : function(YY) {
          var rY;
          return YY.endsWith(" Log") && !YY.startsWith("Barkless ") ? "lookLog" : YY.endsWith(" Sapling") ? "lookSapling" : YY.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (rY = lF[YY]) && void 0 !== rY ? rY : null
        }(rY);
      if (!YY.isBlock(rY) || !gY && !aY && null === vY) return null;
      const uY = null !== (DY = null !== (FY = NF[rY]) && void 0 !== FY ? FY : BF(null !== (AY = YY.displayName(RY)) && void 0 !== AY ? AY : YY.displayName(rY))) && void 0 !== DY ? DY : `item:${(0,fY.te)(rY)}`;
      if (null !== vY) return {
        name: uY,
        detail: `${VF}${vY}`,
        detailItem: null
      };
      const sY = null !== (IY = TF[rY]) && void 0 !== IY ? IY : OY() ? eF[rY] : void 0;
      if (aY && void 0 !== sY) return {
        name: uY,
        detail: `${VF}${sY}`,
        detailItem: null
      };
      const iY = tr[rY];
      if (void 0 !== iY) return {
        name: uY,
        detail: `${VF}lookDeposit`,
        detailItem: cF(YY, iY)
      };
      const yY = YY.harvestLevel(rY);
      if (gY && "rock" === YY.harvestType(rY) && 0 !== yY) {
        const rY = mF(YY, null !== yY && void 0 !== yY ? yY : 0);
        if (rY === EF[0]) return {
          name: uY,
          detail: `${VF}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== rY) return {
          name: uY,
          detail: `${VF}lookPickaxe`,
          detailItem: cF(YY, rY)
        }
      }
      return {
        name: uY,
        detail: BF(YY.description(rY)),
        detailItem: null
      }
    }

    function HF(YY) {
      return YY < ID.s - 24
    }
    const zF = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const ZF = "Wrench",
      CF = "Nova Wrench";

    function fF(YY) {
      return YY === ZF || YY === CF
    }
    const jF = [...ID.P, "Belt Lift", "Belt Drop"];
    const hF = ["Belt Lift", "Belt Drop"],
      dF = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function JF(YY) {
      return YY.split("|")[0]
    }

    function MF(YY) {
      const rY = /\|rot(\d)/.exec(YY);
      return rY ? Number(rY[1]) : 1
    }

    function wF(YY) {
      return YY % 4 + 1
    }

    function bF(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === rY && "" === DY ? YY : `${YY}|meta|rot${rY}${DY}`
    }

    function XF(YY) {
      return JF(YY) === ID.E ? (0, ID.W)(YY) ? "gateRight" : "gateLeft" : (0, ID.Z)(YY)
    }

    function qF(YY) {
      const rY = JF(YY),
        DY = MF(YY);
      if (ID.P.includes(rY)) return (0, ID.R)(rY, wF(DY), null);
      if (rY === ID.k) return (0, ID.cb)(wF(DY), (0, ID.Y)(YY));
      if (rY === ID.H) {
        const FY = dF[(0, ID.Z)(YY)];
        return null === FY ? bF(rY, wF(DY)) : bF(rY, DY, ID.I[FY])
      }
      return rY === ID.E ? (0, ID.W)(YY) ? bF(rY, wF(DY)) : bF(rY, DY, ID.p) : gD.e.includes(rY) && !hF.includes(rY) || DD(rY) ? bF(rY, wF(DY)) : null
    }

    function pF(YY) {
      return gD.e.includes(YY) || DD(YY) || null !== oF(YY)
    }

    function kF(YY) {
      return "Solar Panel" === oF(YY)
    }
    const GF = "buildAFactory2Game:",
      xF = {
        leftFront: `${GF}lookSplitDetail_leftFront`,
        frontRight: `${GF}lookSplitDetail_frontRight`,
        gateRight: `${GF}lookGateDetail_gateRight`
      };

    function nF(YY, rY) {
      var DY;
      let FY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const AY = XF(YY),
        IY = null === AY ? null : `${GF}${AY.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${AY}`,
        RY = null === AY ? null : null !== (DY = xF[AY]) && void 0 !== DY ? DY : null;
      if (fF(rY) && FY) {
        const DY = JF(YY);
        return rY === CF && OY() && function(YY) {
          return jF.includes(JF(YY))
        }(YY) ? {
          mode: IY,
          detail: RY,
          next: `${GF}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: IY,
          detail: RY,
          next: pF(DY) && !kF(DY) ? `${GF}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const gY = fF(rY) ? qF(YY) : null;
      if (null === gY) return {
        mode: IY,
        detail: RY,
        next: null,
        nextState: null
      };
      const aY = XF(gY);
      return null === aY || MF(gY) !== MF(YY) ? {
        mode: IY,
        detail: RY,
        next: `${GF}lookWrenchTurn`,
        nextState: null
      } : {
        mode: IY,
        detail: RY,
        next: `${GF}lookWrenchNext`,
        nextState: `${GF}lookWrenchState_${aY}`
      }
    }
    const PF = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
    const UF = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function LF(YY) {
      return [0, 1, 2, 3].map((rY => 0 !== (YY & 1 << rY)))
    }

    function tF(YY) {
      const rY = [];
      for (let DY = 8; DY + 2 < YY.length; DY += 3) rY.push([YY[DY], YY[DY + 1], YY[DY + 2]]);
      return {
        focus: [YY[0], YY[1], YY[2]],
        lasers: LF(YY[3]),
        open: LF(YY[4]),
        live: LF(YY[5]),
        on: 1 === YY[6],
        state: UF[YY[7]],
        blockers: rY
      }
    }
    const YA = "Arc Caster",
      rA = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      DA = (Object.values(rA), "Jet Chestplate"),
      FA = "Nova Jet Chestplate",
      AA = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      IA = Object.values(AA);

    function RA(YY, rY, DY) {
      return Math.min(function(YY) {
        return OY() && uY(YY) >= 5 ? 20 : 10
      }(DY), Math.floor(function(YY, rY) {
        return Math.max(0, YY) + (OY() ? Math.max(0, rY) : 0)
      }(YY, rY) / 5))
    }

    function OA(YY, rY, DY) {
      const FY = RA(rY, DY, YY),
        AY = uY(YY),
        IY = (AY >= 3 ? 55 : AY >= 1 ? 50 : YY >= 8 ? 45 : 30) + FY,
        RY = Math.max(100 + FY, 2 * IY);
      return {
        arcDamage: IY,
        arcPierce: YY >= 7 ? 2 : 1,
        arcChain: YY >= 10,
        barrierMax: (AY >= 4 ? 100 : AY >= 2 ? 90 : YY >= 9 ? 80 : YY >= 6 ? 60 : 40) + 5 * FY,
        barrierRegenPerS: AY >= 5 ? 20 : YY >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * FY,
        novaShieldRegenPerS: 32,
        bladeDamage: RY,
        bladePunch: Math.round(.5 * RY),
        forgeRank: FY
      }
    }
    const gA = {
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
    var aA = DY(36206),
      vA = DY(36034),
      uA = DY(36032),
      sA = DY(19),
      iA = DY(1619),
      yA = DY(1092),
      QA = DY.n(yA);

    function oA(YY) {
      return !0 === YY.field
    }
    const WA = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function EA(YY) {
      return WA.has(YY) ? `buildAFactory2Game:itemPlural_${(0,fY.te)(YY)}` : null
    }
    var mA = DY(1211),
      VA = DY(1098),
      SA = DY(1793),
      lA = DY(1778),
      TA = DY(36193),
      eA = DY(36199),
      NA = DY(25),
      BA = DY(36189);
    const cA = "baf2QuestView",
      KA = "baf2PlayerY",
      HA = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class zA {
      constructor() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
        this.requestBook = YY, this.view = {
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
      set(YY, rY) {
        var DY, FY, AY, IY, RY, OY, gY, aY;
        const vY = JSON.stringify(YY.baf2QuestName) === JSON.stringify(this.view.name),
          uY = new Set(this.view.rows.filter((YY => YY.done)).map((YY => YY.id))),
          sY = new Set(this.view.rows.filter((YY => YY.justFinished)).map((YY => YY.id))),
          iY = YY.baf2QuestSide,
          yY = null !== iY && !0 === YY.baf2QuestSideFocus;
        let QY = !1,
          oY = 0;
        const WY = YY.baf2QuestSteps.map((YY => {
            const rY = MA(YY, HA.has(YY[0]) ? YY[0] : "" + oY++),
              DY = vY && rY.done && !uY.has(rY.id);
            return rY.justFinished = DY || vY && rY.done && sY.has(rY.id), QY ||= DY, rY
          })),
          EY = JA(WY);
        EY >= 0 && !yY && (WY[EY].current = !0);
        const mY = !vY && null !== YY.baf2QuestName,
          VY = JSON.stringify(iY && [iY[0], iY[1]]),
          SY = VY === JSON.stringify(null !== (DY = null === (FY = this.view.side) || void 0 === FY ? void 0 : FY.name) && void 0 !== DY ? DY : null),
          lY = null !== iY && !this.sidesSeen.has(VY);
        lY && this.sidesSeen.add(VY), this.serverTutorial = null !== (AY = YY.baf2QuestTutorial) && void 0 !== AY ? AY : "on", (null !== (IY = YY.baf2QuestTutorialSeq) && void 0 !== IY ? IY : 0) >= this.pickSeq && this.endPick();
        const TY = !vY || !SY || YY.baf2QuestTier !== this.view.tier;
        this.view = {
          name: YY.baf2QuestName,
          rows: WY,
          reward: YY.baf2QuestReward,
          goal: YY.baf2QuestGoal,
          pulse: this.view.pulse + (QY || mY ? 1 : 0),
          itemNames: rY,
          side: iY && {
            name: [iY[0], iY[1]],
            row: {
              ...MA(iY[2], "side"),
              current: yY
            },
            goal: null !== (RY = iY[3]) && void 0 !== RY ? RY : null
          },
          sideCameUpAt: lY ? Date.now() : this.view.sideCameUpAt,
          tier: YY.baf2QuestTier,
          core: YY.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (OY = YY.baf2QuestAlso) && void 0 !== OY ? OY : [],
          depth: null !== (gY = YY.baf2QuestDepth) && void 0 !== gY ? gY : null,
          tutorial: null !== (aY = this.pickedTutorial) && void 0 !== aY ? aY : this.serverTutorial,
          tutorialKnown: !0
        }, this.vo(), QY && this.scheduleClear(), TY && this.requestBook()
      }
      setTutorial(YY) {
        return this.endPick(), this.pickedTutorial = YY, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.vo()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: YY
        }, this.vo(), this.pickSeq
      }
      onPlayerY(YY) {
        const rY = Math.floor(YY);
        rY !== this.playerY && (this.playerY = rY, this.view.depth && NA.g.vo(KA, rY))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(YY) {
        this.view = {
          ...this.view,
          chapters: YY.baf2BookChapters
        }, this.vo()
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
            rows: this.view.rows.map((YY => YY.justFinished ? {
              ...YY,
              justFinished: !1
            } : YY))
          }, this.vo()
        }), 2400)
      }
      vo() {
        NA.g.vo(cA, this.view, !0)
      }
    }

    function ZA(YY, rY) {
      return YY.sideCameUpAt > 0 && rY - YY.sideCameUpAt < 2400
    }

    function CA(YY) {
      return (null === YY.name || fA(YY)) && null === YY.side && null !== YY.chapters
    }

    function fA(YY) {
      var rY;
      return "quest_forgeOngoing" === (null === (rY = YY.name) || void 0 === rY ? void 0 : rY[0])
    }

    function jA(YY) {
      return YY.filter((YY => !HA.has(YY.key)))
    }

    function hA(YY) {
      return YY.key.startsWith("stepCraft")
    }

    function dA(YY, rY) {
      const DY = new Set,
        FY = YY.side ? [...YY.rows, YY.side.row] : YY.rows;
      for (const IY of FY)
        if (!IY.done) {
          !IY.item || rY && !hA(IY) || DY.add(IY.item);
          for (const [YY, rY, FY] of null !== (AY = IY.chips) && void 0 !== AY ? AY : []) {
            var AY;
            rY < FY && DY.add(YY)
          }
        } return DY
    }

    function JA(YY) {
      const rY = YY.findIndex((YY => !YY.done && !YY.away));
      return rY >= 0 ? rY : YY.findIndex((YY => !YY.done))
    }

    function MA(YY, rY) {
      let [DY, FY, AY, IY, RY, OY, gY, aY, vY, uY] = YY;
      return {
        id: rY,
        key: DY,
        params: FY,
        item: AY,
        amount: IY,
        total: RY,
        done: OY,
        chips: null !== gY && void 0 !== gY ? gY : null,
        current: !1,
        away: !0 === aY,
        madeFor: null !== vY && void 0 !== vY ? vY : [],
        also: null !== uY && void 0 !== uY ? uY : [],
        justFinished: !1
      }
    }
    const wA = "baf2QuestItems",
      bA = new Set;
    let XA = new Set,
      qA = null;

    function pA(YY) {
      const rY = CY(YY.tutorial),
        DY = rY ? dA(YY, !0) : bA;
      "inventory" === sA.b.get("openInGameMenuName") ? (qA = null, (0, BA.l)(DY)) : qA = DY;
      const FY = rY ? dA(YY, !1) : bA;
      (0, eA.c)(FY, XA) || (XA = FY, NA.g.vo(wA, XA))
    }

    function kA() {
      return (0, TA.d)(wA, (() => XA))
    }
    var GA = DY(8770),
      xA = DY(2864);

    function nA(YY) {
      const rY = (0, xA.b)(YY),
        DY = void 0 === rY ? void 0 : (0, GA.displayNameOf)(rY);
      return "object" === typeof DY && null !== DY && "translationKey" in DY && "string" === typeof DY.translationKey ? DY.translationKey : `item:${(0,fY.te)(YY)}`
    }

    function PA(YY, rY) {
      return YY(nA(rY))
    }
    const UA = [{
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

    function LA(YY, rY) {
      return [`Deposit Seed (${YY})`, {
        item: tr[`${YY} Deposit`],
        amount: rY
      }]
    }
    const tA = Object.fromEntries([LA("Coal", 8), LA("Iron", 8), LA("Copper", 8), LA("Gold", 6), LA("Voltite", 4), LA("Uranium", 4)]),
      YI = "Relay Coil",
      rI = new Map;

    function DI(YY) {
      let rY = rI.get(YY);
      if (!rY) {
        const DY = Math.max(1, YY);
        rY = UA.filter((YY => {
          var rY;
          return DY >= YY.fromTier && DY <= (null !== (rY = YY.untilTier) && void 0 !== rY ? rY : 1 / 0)
        })).map((YY => YY.later && DY >= YY.later.tier ? {
          ...YY,
          weight: YY.later.weight
        } : YY)), rI.set(YY, rY)
      }
      return rY
    }

    function FI(YY) {
      return DI(YY).some((YY => {
        let {
          item: rY
        } = YY;
        return rY === YI
      }))
    }

    function AI(YY) {
      return YY.startsWith("Deposit Seed (")
    }

    function II(YY, rY) {
      const DY = DI(YY);
      return rY ? DY.filter((YY => rY(YY.item))) : DY
    }

    function RI(YY) {
      return YY.reduce(((YY, rY) => YY + rY.weight), 0)
    }

    function OI(YY, rY) {
      const DY = II(YY, rY),
        FY = RI(DY);
      return DY.map((YY => ({
        find: YY,
        chance: YY.weight / FY
      })))
    }
    const gI = 6e4,
      aI = new Intl.NumberFormat("en-US");

    function vI(YY, rY) {
      const DY = YY >= 10 ? Math.round(YY) : Math.round(10 * YY) / 10;
      return 0 === DY ? "0" : `${rY}${aI.format(DY)}`
    }

    function uI(YY) {
      return YY < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? aI.format(YY) : YY < 1e6 ? `${YY<1e5?Math.floor(YY/100)/10:Math.floor(YY/1e3)}k` : Math.floor(YY / 1e5) / 10 + "M"
    }

    function sI(YY) {
      return YY < 0 ? "\u2212" + -YY : String(YY)
    }

    function iI(YY, rY) {
      const DY = Math.max(1, Math.round(rY));
      if (DY < 60) return YY("buildAFactory2Game:durationSeconds", {
        seconds: String(DY)
      });
      const FY = Math.round(DY / 60);
      if (FY < 60) return YY("buildAFactory2Game:durationMinutes", {
        minutes: String(FY)
      });
      const AY = String(Math.floor(FY / 60));
      return FY % 60 === 0 ? YY("buildAFactory2Game:durationWholeHours", {
        hours: AY
      }) : YY("buildAFactory2Game:durationHours", {
        hours: AY,
        minutes: String(FY % 60)
      })
    }
    const yI = "(max-height: 420px), (max-width: 650px)";

    function QI() {
      return "undefined" !== typeof window && window.matchMedia(yI).matches
    }

    function oI(YY) {
      const rY = window.matchMedia(yI),
        DY = () => {
          YY(rY.matches)
        };
      return rY.addEventListener("change", DY), () => {
        rY.removeEventListener("change", DY)
      }
    }
    var WI = DY(1125);

    function EI(YY, rY) {
      return null !== YY && YY > rY + 1
    }

    function mI(YY) {
      const rY = 100 * YY;
      return String(rY <= 0 || rY >= 1 ? Math.round(rY) : Math.max(.1, Math.round(10 * rY) / 10))
    }

    function VI(YY) {
      let {
        item: rY,
        amount: DY
      } = YY;
      return (0, WI.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, WI.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, WI.jsx)(SA.c, {
            itemName: rY,
            amount: 0
          })
        }), DY > 1 && (0, WI.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", DY]
        })]
      })
    }

    function SI(YY) {
      let {
        label: rY,
        names: DY
      } = YY;
      const [AY, IY] = (0, FY.useState)(!1), RY = DY.join(" / ");
      return (0, WI.jsxs)(WI.Fragment, {
        children: [(0, WI.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: RY,
          "aria-expanded": AY,
          onClick: () => {
            IY(!AY)
          },
          children: rY
        }), AY && (0, WI.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: RY
        })]
      })
    }

    function lI(YY) {
      let {
        tier: rY
      } = YY;
      const {
        t: DY
      } = (0, mA.C)(), {
        key: FY,
        params: AY
      } = iY(rY, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), IY = DY(`buildAFactory2Game:${FY}`, AY);
      return (0, WI.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, WI.jsx)(VA.e, {
          name: "lock"
        }), IY]
      })
    }
    const TI = (0, FY.createContext)(null);

    function eI() {
      const {
        t: YY
      } = (0, mA.C)(), rY = (0, FY.useContext)(TI);
      return (0, FY.useEffect)((() => null === rY || void 0 === rY ? void 0 : rY()), [rY]), (0, WI.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: YY("buildAFactory2Game:recipeForQuest"),
        "aria-label": YY("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function NI(YY) {
      let {
        title: rY,
        count: DY,
        children: AY,
        startOpen: IY = !0
      } = YY;
      const {
        t: RY
      } = (0, mA.C)(), [OY, gY] = (0, FY.useState)((() => IY && !QI())), [aY, vY] = (0, FY.useState)(0), uY = (0, FY.useCallback)((() => (vY((YY => YY + 1)), () => {
        vY((YY => YY - 1))
      })), []);
      return (0, WI.jsxs)("div", {
        className: QA()("Baf2Recipes", {
          Open: OY
        }),
        children: [(0, WI.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            gY(!OY)
          },
          "aria-expanded": OY,
          children: [RY("buildAFactory2Game:recipesToggle", {
            title: rY,
            count: String(DY)
          }), (0, WI.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: OY ? "\u25be" : "\u25b8"
          })]
        }), OY && (0, WI.jsxs)(TI.Provider, {
          value: uY,
          children: [(0, WI.jsx)("ul", {
            className: "Baf2RecipeList",
            children: AY
          }), aY > 0 && (0, WI.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, WI.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), RY("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const BI = "buildAFactory2Game:",
      cI = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const KI = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      HI = {
        "Uranium Grit": IY,
        "Raw Uranium": IY
      };

    function zI(YY) {
      var rY;
      return null !== (rY = HI[YY]) && void 0 !== rY ? rY : Math.max(PY(YY), KI[YY] ? PY(KI[YY]) : 1, function(YY) {
        const rY = AY.findIndex((rY => rY.cost.some((rY => rY.item === YY))));
        return rY > IY ? rY : 1
      }(YY))
    }

    function ZI(YY, rY) {
      return CI(rY) ? zI(rY) : function(YY) {
        if (cI.has(YY)) return 1;
        const rY = AY.findIndex((rY => rY.newDeposits.some((rY => {
          let {
            block: DY
          } = rY;
          return DY === YY
        }))));
        return rY < 0 ? 1 : rY + 1
      }(YY)
    }

    function CI(YY) {
      return YY in HI || uY(zI(YY)) > 0
    }

    function fI(YY, rY) {
      return qr(YY, {
        coupled: !1,
        taught: null,
        atomic: OY() && rY >= 11
      }).recipes
    }

    function jI(YY, rY) {
      const DY = sY(YY, rY, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : uY(YY) > 0);
      return "open" === DY || "locked" === DY
    }

    function hI(YY, rY) {
      return YY.map(((YY, DY) => ({
        value: YY,
        idx: DY,
        tier: rY(YY)
      }))).sort(((YY, rY) => YY.tier - rY.tier || YY.idx - rY.idx)).map((YY => {
        let {
          value: rY
        } = YY;
        return rY
      }))
    }

    function dI(YY, rY, DY) {
      const FY = sY(YY, rY);
      if ("hidden" === FY || "open" === FY) return null;
      if ("teaser" === FY) return {
        tag: {
          translationKey: `${BI}${DY?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${BI}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const AY = iY(YY, {
          tier: DY ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        IY = iY(YY, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${BI}${AY.key}`,
          params: AY.params
        },
        reason: {
          translationKey: `${BI}${IY.key}`,
          params: IY.params
        }
      }
    }

    function JI(YY) {
      return !AI(YY)
    }

    function MI(YY) {
      let {
        seconds: rY
      } = YY;
      const {
        t: DY
      } = (0, mA.C)();
      return (0, WI.jsx)(NI, {
        title: DY("buildAFactory2Game:recipesCuts", {
          seconds: rY
        }),
        count: 1,
        children: (0, WI.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, WI.jsx)(VI, {
            item: "Maple Sapling",
            amount: 1
          }), (0, WI.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, WI.jsx)(VI, {
            item: "Maple Log",
            amount: 1
          }), (0, WI.jsx)("span", {
            className: "Baf2RecipeName",
            children: DY("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function wI(YY) {
      let {
        fertilised: rY
      } = YY;
      const {
        t: DY
      } = (0, mA.C)();
      return (0, WI.jsxs)(NI, {
        title: DY("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, WI.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, WI.jsx)(VI, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, WI.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, WI.jsx)(VI, {
            item: "Wheat",
            amount: 1
          }), (0, WI.jsx)(VI, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, WI.jsx)("span", {
            className: "Baf2RecipeName",
            children: DY("buildAFactory2Game:recipeField")
          })]
        }), (0, WI.jsxs)("li", {
          className: QA()("Baf2Recipe", {
            InUse: rY
          }),
          children: [(0, WI.jsx)(VI, {
            item: "Fertiliser",
            amount: 1
          }), (0, WI.jsx)("span", {
            className: "Baf2RecipeName",
            children: DY("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function bI(YY) {
      let {
        tier: rY,
        seconds: DY
      } = YY;
      const {
        t: FY
      } = (0, mA.C)(), AY = function(YY) {
        return YY >= 5 ? Qr : yr
      }(rY);
      return (0, WI.jsx)(NI, {
        title: FY("buildAFactory2Game:recipesBringsUp", {
          seconds: DY
        }),
        count: AY.length,
        children: AY.map((YY => {
          let {
            item: rY,
            chance: DY
          } = YY;
          return (0, WI.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, WI.jsx)(VI, {
              item: rY,
              amount: 1
            }), (0, WI.jsx)("span", {
              className: "Baf2RecipeName",
              children: PA(FY, rY)
            }), (0, WI.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: FY("buildAFactory2Game:recipeChance", {
                percent: mI(DY)
              })
            })]
          }, rY)
        }))
      })
    }

    function XI(YY) {
      let {
        tier: rY,
        seconds: DY,
        noSeeds: FY
      } = YY;
      const {
        t: AY
      } = (0, mA.C)(), IY = kA(), RY = OI(rY, FY ? JI : void 0), OY = FY && OI(rY).length > RY.length, gY = FI(rY);
      return (0, WI.jsxs)(NI, {
        title: AY("buildAFactory2Game:recipesRecycles", {
          seconds: DY
        }),
        count: RY.length,
        children: [RY.map((YY => {
          let {
            find: rY,
            chance: DY
          } = YY;
          return (0, WI.jsxs)("li", {
            className: "Baf2Recipe",
            children: [IY.has(rY.item) && (0, WI.jsx)(eI, {}), (0, WI.jsx)(VI, {
              item: rY.item,
              amount: rY.amount
            }), (0, WI.jsx)("span", {
              className: "Baf2RecipeName",
              children: PA(AY, rY.item)
            }), (0, WI.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: AY("buildAFactory2Game:recipeChance", {
                percent: mI(DY)
              })
            })]
          }, rY.item)
        })), OY && (0, WI.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, WI.jsx)("span", {
            className: "Baf2RecipeName",
            children: AY("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), gY && (0, WI.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, WI.jsx)("span", {
            className: "Baf2RecipeName",
            children: AY("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function qI(YY) {
      let {
        tier: rY,
        seconds: DY
      } = YY;
      const {
        t: FY
      } = (0, mA.C)(), AY = Object.entries(tA).filter((YY => {
        let [, {
          item: DY
        }] = YY;
        return jI(zI(DY), rY, CI(DY))
      }));
      return (0, WI.jsx)(NI, {
        title: FY("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: DY
        }),
        count: AY.length,
        children: AY.map((YY => {
          let [rY, {
            item: DY,
            amount: AY
          }] = YY;
          return (0, WI.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, WI.jsx)(VI, {
              item: rY,
              amount: 1
            }), (0, WI.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, WI.jsx)(VI, {
              item: DY,
              amount: AY
            }), (0, WI.jsx)("span", {
              className: "Baf2RecipeName",
              children: PA(FY, DY)
            })]
          }, rY)
        }))
      })
    }

    function pI(YY) {
      let {
        tier: rY,
        seconds: DY
      } = YY;
      const {
        t: FY
      } = (0, mA.C)(), AY = kA(), IY = hI(Object.entries(tr).filter((YY => {
        let [DY, FY] = YY;
        return jI(ZI(DY, FY), rY, CI(FY))
      })), (YY => {
        let [rY, DY] = YY;
        return ZI(rY, DY)
      }));
      return (0, WI.jsx)(NI, {
        title: FY("buildAFactory2Game:recipesDigs", {
          seconds: DY
        }),
        count: IY.length,
        children: IY.map((YY => {
          let [DY, IY] = YY;
          const RY = ZI(DY, IY),
            OY = RY > rY ? RY : null,
            gY = YD[DY],
            aY = null === OY && AY.has(IY);
          return (0, WI.jsxs)("li", {
            className: QA()("Baf2Recipe", {
              Locked: null !== OY,
              Far: EI(OY, rY)
            }),
            children: [aY && (0, WI.jsx)(eI, {}), (0, WI.jsx)(VI, {
              item: DY,
              amount: 1
            }), (0, WI.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, WI.jsx)(VI, {
              item: IY,
              amount: 1
            }), (0, WI.jsx)("span", {
              className: "Baf2RecipeName",
              children: PA(FY, IY)
            }), void 0 !== gY && (0, WI.jsx)("span", {
              className: "Baf2RecipeMore",
              children: FY("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / gY)
              })
            }), null !== OY && (0, WI.jsx)(lI, {
              tier: OY
            })]
          }, DY)
        }))
      })
    }

    function kI(YY) {
      var rY;
      let {
        def: DY,
        seconds: FY
      } = YY;
      const {
        t: AY
      } = (0, mA.C)();
      return (0, WI.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, WI.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (rY = DY.fuels) && void 0 !== rY ? rY : []).map((YY => (0, WI.jsx)(VI, {
            item: YY,
            amount: 1
          }, YY))), (0, WI.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, WI.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, WI.jsx)(VA.e, {
              name: "bolt"
            }), AY("buildAFactory2Game:recipePower", {
              power: UY(DY.powerMade),
              seconds: FY
            })]
          })]
        })
      })
    }

    function GI(YY) {
      let {
        def: rY
      } = YY;
      const {
        t: DY
      } = (0, mA.C)();
      return (0, WI.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, WI.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, WI.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, WI.jsx)(VA.e, {
              name: "bolt"
            }), DY("buildAFactory2Game:recipeMixer", {
              cryo: vI((0, LY.G)(rY, rY.cryoMade), "")
            })]
          })
        })
      })
    }

    function xI(YY) {
      let {
        def: rY
      } = YY;
      const {
        t: DY
      } = (0, mA.C)();
      return (0, WI.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, WI.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, WI.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, WI.jsx)(VA.e, {
              name: "bolt"
            }), DY("buildAFactory2Game:recipeCondenser", {
              power: vI((0, LY.G)(rY, rY.powerPerOp), ""),
              water: vI((0, LY.G)(rY, rY.fluidMade), "")
            })]
          })
        })
      })
    }

    function nI(YY) {
      let {
        kind: rY,
        def: DY,
        input: FY,
        tier: AY,
        noSeeds: IY = !1
      } = YY;
      const RY = String(DY.opMs / 1e3);
      return nr(DY) ? (0, WI.jsx)(MI, {
        seconds: RY
      }) : DY.field ? (0, WI.jsx)(wI, {
        fertilised: null !== FY
      }) : DY.table ? (0, WI.jsx)(bI, {
        tier: AY,
        seconds: RY
      }) : DY.recycles ? (0, WI.jsxs)(WI.Fragment, {
        children: [(0, WI.jsx)(XI, {
          tier: AY,
          seconds: RY,
          noSeeds: IY
        }), (0, WI.jsx)(qI, {
          tier: AY,
          seconds: RY
        })]
      }) : xr(DY) ? (0, WI.jsx)(pI, {
        tier: AY,
        seconds: RY
      }) : void 0 !== DY.fluidMade ? (0, WI.jsx)(xI, {
        def: DY
      }) : void 0 !== DY.cryoMade ? (0, WI.jsx)(GI, {
        def: DY
      }) : void 0 !== DY.powerMade ? (0, WI.jsx)(kI, {
        def: DY,
        seconds: RY
      }) : (0, WI.jsx)(PI, {
        kind: rY,
        input: FY,
        tier: AY,
        seconds: RY
      })
    }

    function PI(YY) {
      let {
        kind: rY,
        input: DY,
        tier: FY,
        seconds: AY
      } = YY;
      const {
        t: IY
      } = (0, mA.C)(), RY = kA(), OY = hI(function(YY) {
        const rY = new Map;
        for (const AY of YY) {
          var DY, FY;
          const YY = [AY.output, AY.outputAmount, AY.inputAmount, null === (DY = AY.bonus) || void 0 === DY ? void 0 : DY.item, null === (FY = AY.bonus) || void 0 === FY ? void 0 : FY.chance].join("|"),
            IY = rY.get(YY);
          IY ? IY.inputs.push(AY.input) : rY.set(YY, {
            inputs: [AY.input],
            inputAmount: AY.inputAmount,
            output: AY.output,
            outputAmount: AY.outputAmount,
            bonus: AY.bonus
          })
        }
        return [...rY.values()]
      }(fI(rY, FY).filter(FD)), (YY => zI(YY.output))).filter((YY => jI(zI(YY.output), FY, CI(YY.output))));
      return (0, WI.jsx)(NI, {
        title: IY("buildAFactory2Game:recipesEach", {
          seconds: AY
        }),
        count: OY.length,
        children: OY.map((YY => {
          const rY = null !== DY && YY.inputs.includes(DY),
            AY = YY.inputs.length > 3 ? [rY ? DY : YY.inputs[0]] : YY.inputs,
            OY = zI(YY.output) > FY ? zI(YY.output) : null,
            gY = null === OY && RY.has(YY.output);
          return (0, WI.jsxs)("li", {
            className: QA()("Baf2Recipe", {
              InUse: rY,
              Locked: null !== OY,
              Far: EI(OY, FY)
            }),
            children: [gY && (0, WI.jsx)(eI, {}), AY.map(((rY, DY) => (0, WI.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [DY > 0 && (0, WI.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, WI.jsx)(VI, {
                item: rY,
                amount: YY.inputAmount
              })]
            }, rY))), AY.length < YY.inputs.length && (0, WI.jsx)(SI, {
              label: IY("buildAFactory2Game:recipeMore", {
                count: String(YY.inputs.length - AY.length)
              }),
              names: YY.inputs.filter((YY => !AY.includes(YY))).map((YY => PA(IY, YY)))
            }), (0, WI.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, WI.jsx)(VI, {
              item: YY.output,
              amount: YY.outputAmount
            }), (0, WI.jsx)("span", {
              className: "Baf2RecipeName",
              children: PA(IY, YY.output)
            }), YY.bonus && (0, WI.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [IY("buildAFactory2Game:recipeBonus", {
                percent: mI(YY.bonus.chance)
              }), (0, WI.jsx)(VI, {
                item: YY.bonus.item,
                amount: 1
              })]
            }), null !== OY && (0, WI.jsx)(lI, {
              tier: OY
            })]
          }, `${YY.output}|${YY.inputs[0]}`)
        }))
      })
    }

    function UI(YY) {
      let {
        taught: rY,
        tier: DY
      } = YY;
      const {
        t: FY
      } = (0, mA.C)(), AY = kA(), IY = hI(Object.values(br), (YY => YY.tier)).filter((YY => jI(YY.tier, DY)));
      return (0, WI.jsx)(NI, {
        title: FY("buildAFactory2Game:benchCanMake"),
        count: IY.length,
        startOpen: !1,
        children: IY.map((YY => {
          const IY = YY.tier > DY,
            RY = !IY && AY.has(YY.output);
          return (0, WI.jsxs)("li", {
            className: QA()("Baf2Recipe", {
              InUse: YY.output === rY,
              Locked: IY,
              Far: EI(IY ? YY.tier : null, DY)
            }),
            children: [RY && (0, WI.jsx)(eI, {}), (0, WI.jsx)(VI, {
              item: YY.output,
              amount: YY.outputAmount
            }), (0, WI.jsx)("span", {
              className: "Baf2RecipeName",
              children: PA(FY, YY.output)
            }), (0, WI.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), YY.inputs.map((YY => (0, WI.jsx)(VI, {
              item: YY.item,
              amount: YY.amount
            }, YY.item))), IY && (0, WI.jsx)(lI, {
              tier: YY.tier
            })]
          }, YY.output)
        }))
      })
    }
    var LI, tI, YR, rR, DR;
    const FR = Br.Generator,
      AR = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      IR = 1e3 * (null !== (LI = FR.powerMade) && void 0 !== LI ? LI : 0) / FR.opMs,
      RR = Math.min(...(null !== (tI = FR.fuels) && void 0 !== tI ? tI : []).map((YY => Lr[YY]))) / 1e3,
      OR = Br["Volt Engine"],
      gR = 1e3 * (null !== (YR = OR.powerMade) && void 0 !== YR ? YR : 0) / OR.opMs,
      aR = Lr[null !== (rR = null === (DR = OR.fuels) || void 0 === DR ? void 0 : DR[0]) && void 0 !== rR ? rR : ""] / 1e3;

    function vR(YY) {
      let {
        item: rY,
        label: DY,
        value: FY,
        note: AY,
        dim: IY
      } = YY;
      return (0, WI.jsxs)("li", {
        className: QA()("Baf2PowerRow", {
          Dim: IY
        }),
        children: [(0, WI.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, WI.jsx)(SA.c, {
            itemName: rY,
            amount: 0
          })
        }), (0, WI.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, WI.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: DY
          }), AY && (0, WI.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: AY
          })]
        }), (0, WI.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: FY
        })]
      })
    }

    function uR(YY, rY, DY, FY) {
      var AY;
      const IY = void 0 === FY ? Br[YY] : function(YY, rY) {
          if (null === rY) return YY;
          let DY = GY.get(rY);
          return DY || (DY = {
            ...YY,
            powerPerOp: kY(YY, rY),
            farmMob: rY
          }, GY.set(rY, DY)), DY
        }(Br[YY], FY),
        RY = rY && IY.couplable ? jr(IY, DY) : IY;
      return 1e3 * (null !== (AY = RY.powerPerOp) && void 0 !== AY ? AY : 0) / RY.opMs
    }

    function sR(YY) {
      var rY, DY, FY, AY, IY, RY, OY, gY;
      let {
        message: aY
      } = YY;
      const {
        t: vY
      } = (0, mA.C)(), uY = (YY, rY) => vY("buildAFactory2Game:powerPerSecond", {
        rate: vI(YY, rY)
      }), [sY, iY] = aY.baf2PowerGenerators, yY = aY.baf2PowerGeneratorFuel, QY = aY.baf2PowerSunPanels, oY = null !== (rY = aY.baf2PowerSunShare) && void 0 !== rY ? rY : 1, WY = aY.baf2PowerVaults, EY = aY.baf2PowerUsers, [mY, VY] = null !== (DY = aY.baf2PowerEngines) && void 0 !== DY ? DY : [0, 0], SY = null !== (FY = aY.baf2PowerEngineCells) && void 0 !== FY ? FY : 0, lY = null !== (AY = aY.baf2PowerPads) && void 0 !== AY ? AY : 0, TY = null !== (IY = aY.baf2PowerCharge) && void 0 !== IY ? IY : 0, [eY, NY] = null !== (RY = aY.baf2PowerReactors) && void 0 !== RY ? RY : [0, 0], [BY, cY] = null !== (OY = aY.baf2PowerBatteries) && void 0 !== OY ? OY : [0, 0];
      let KY = vY("buildAFactory2Game:powerEngineCells", {
        amount: String(SY)
      });
      SY > 0 && VY > 0 && (KY = vY("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(SY),
        time: iI(vY, SY * aR / VY)
      }));
      let HY = vY("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(yY)
      });
      yY > 0 && iY > 0 && (HY = vY("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(yY),
        time: iI(vY, yY * RR / iY)
      }));
      const zY = sY + mY + QY + eY;
      return (0, WI.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, WI.jsxs)("section", {
          children: [(0, WI.jsxs)("h3", {
            children: [vY("buildAFactory2Game:powerMaking"), (0, WI.jsx)("span", {
              children: uY(aY.baf2PowerMadePerS, "+")
            })]
          }), (0, WI.jsxs)("ul", {
            children: [0 === zY && (0, WI.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: vY("buildAFactory2Game:powerNoMakers")
            }), sY > 0 && (0, WI.jsx)(vR, {
              item: "Generator",
              label: `${PA(vY,"Generator")} \xd7${sY}`,
              note: `${vY("buildAFactory2Game:powerRunning",{amount:String(iY)})} \xb7 ${HY}`,
              value: uY(iY * IR, "+"),
              dim: 0 === iY
            }), mY > 0 && (0, WI.jsx)(vR, {
              item: "Volt Engine",
              label: `${PA(vY,"Volt Engine")} \xd7${mY}`,
              note: `${vY("buildAFactory2Game:powerRunning",{amount:String(VY)})} \xb7 ${KY}`,
              value: uY(VY * gR, "+"),
              dim: 0 === VY
            }), QY > 0 && (0, WI.jsx)(vR, {
              item: "Solar Panel",
              label: `${PA(vY,"Solar Panel")} \xd7${QY}`,
              note: vY(oY < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: uY(4 * QY * oY, "+")
            }), eY > 0 && (0, WI.jsx)(vR, {
              item: "Reactor Frame",
              label: `${vY("buildAFactory2Game:powerReactors")} \xd7${eY}`,
              note: vY("buildAFactory2Game:powerRunning", {
                amount: String(NY)
              }),
              value: uY(null !== (gY = aY.baf2PowerReactorPerS) && void 0 !== gY ? gY : 0, "+"),
              dim: 0 === NY
            })]
          })]
        }), (0, WI.jsxs)("section", {
          children: [(0, WI.jsxs)("h3", {
            children: [vY("buildAFactory2Game:powerStorage"), (0, WI.jsx)("span", {
              children: UY(aY.baf2PowerCap)
            })]
          }), (WY > 0 || BY > 0) && (0, WI.jsxs)("ul", {
            children: [WY > 0 && (0, WI.jsx)(vR, {
              item: "Charge Vault",
              label: `${PA(vY,"Charge Vault")} \xd7${WY}`,
              value: `+${UY(8e3*WY)}`
            }), BY > 0 && (0, WI.jsx)(vR, {
              item: "Battery Cell",
              label: `${vY("buildAFactory2Game:powerBatteries")} \xd7${BY}`,
              value: `+${UY(cY)}`
            })]
          })]
        }), (0, WI.jsxs)("section", {
          children: [(0, WI.jsxs)("h3", {
            children: [vY("buildAFactory2Game:powerUsing"), (0, WI.jsx)("span", {
              children: uY(aY.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, WI.jsxs)("ul", {
            children: [0 === EY.length && 0 === lY && 0 === TY && (0, WI.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: vY("buildAFactory2Game:powerNoUsers")
            }), EY.map((YY => {
              let [rY, DY, FY, AY, IY = 1, RY] = YY, OY = DY ? vY(AR[IY - 1], {
                name: PA(vY, rY)
              }) : PA(vY, rY);
              return void 0 !== RY && (OY = vY("buildAFactory2Game:powerFarmName", {
                name: OY,
                mob: vY(XY(RY))
              })), (0, WI.jsx)(vR, {
                item: rY,
                label: `${OY} \xd7${FY}`,
                note: vY("buildAFactory2Game:powerRunning", {
                  amount: String(AY)
                }),
                value: AY > 0 ? uY(AY * uR(rY, DY, IY, RY), "\u2212") : vY("buildAFactory2Game:powerIdle"),
                dim: 0 === AY
              }, `${rY}|${DY}|${IY}|${RY}`)
            })), lY > 0 && (0, WI.jsx)(vR, {
              item: "Charging Pad",
              label: `${PA(vY,"Charging Pad")} \xd7${lY}`,
              value: vY("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), TY > 0 && (0, WI.jsx)(vR, {
              item: "Homestead Core",
              label: vY("buildAFactory2Game:powerCharge"),
              value: uY(TY, "\u2212")
            }), aY.baf2PowerStarved > 0 && (0, WI.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, WI.jsx)(VA.e, {
                name: "triangle-exclamation"
              }), vY("buildAFactory2Game:powerStarved", {
                amount: String(aY.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var iR = DY(4086),
      yR = DY(1437);
    class QR {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(YY) {
        this.message = YY;
        for (const rY of this.listeners) rY()
      }
      get() {
        return this.message
      }
      subscribe(YY) {
        return this.listeners.add(YY), () => {
          this.listeners.delete(YY)
        }
      }
    }
    class oR extends QR {}

    function WR(YY, rY) {
      const DY = () => {
          const DY = YY.get();
          if (!DY || !rY) return DY;
          const [FY, AY, IY] = DY.baf2PowerAt;
          return FY === rY[0] && AY === rY[1] && IY === rY[2] ? DY : null
        },
        [AY, IY] = (0, FY.useState)(DY);
      return (0, FY.useEffect)((() => (IY(DY()), YY.subscribe((() => {
        IY(DY())
      })))), [YY, ...null !== rY && void 0 !== rY ? rY : []]), AY
    }

    function ER(YY) {
      return {
        stored: YY.baf2PowerStored,
        cap: YY.baf2PowerCap,
        madePerS: YY.baf2PowerMadePerS,
        usedPerS: YY.baf2PowerUsedPerS
      }
    }

    function mR(YY) {
      let {
        stored: rY,
        cap: DY
      } = YY;
      return (0, WI.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, WI.jsx)("div", {
          style: {
            width: `${Math.min(100,100*rY/Math.max(1,DY))}%`
          }
        })
      })
    }

    function VR(YY) {
      let {
        figures: rY,
        labelled: DY = !1
      } = YY;
      const {
        t: FY
      } = (0, mA.C)(), AY = rY.madePerS - rY.usedPerS, {
        text: IY,
        draining: RY
      } = function(YY, rY) {
        let {
          stored: DY,
          cap: FY,
          madePerS: AY,
          usedPerS: IY
        } = rY;
        const RY = AY - IY;
        return DY >= FY ? {
          text: YY("buildAFactory2Game:powerFull"),
          draining: !1
        } : RY > .05 ? {
          text: YY("buildAFactory2Game:powerFullIn", {
            time: iI(YY, (FY - DY) / RY)
          }),
          draining: !1
        } : RY < -.05 ? {
          text: YY("buildAFactory2Game:powerEmptyIn", {
            time: iI(YY, DY / -RY)
          }),
          draining: !0
        } : {
          text: YY("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(FY, rY);
      return (0, WI.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, WI.jsx)(mR, {
          stored: rY.stored,
          cap: rY.cap
        }), (0, WI.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, WI.jsx)("span", {
            children: FY(DY ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: UY(rY.stored),
              cap: UY(rY.cap)
            })
          }), (0, WI.jsxs)("span", {
            className: QA()("Baf2PowerNet", {
              Draining: RY
            }),
            children: [FY("buildAFactory2Game:powerPerSecond", {
              rate: vI(Math.abs(AY), AY < 0 ? "\u2212" : "+")
            }), " \xb7 ", IY]
          })]
        })]
      })
    }

    function SR(YY) {
      let {
        stored: rY,
        cap: DY,
        rates: FY
      } = YY;
      const {
        t: AY
      } = (0, mA.C)();
      return FY ? (0, WI.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, WI.jsx)(VR, {
          figures: {
            stored: rY,
            cap: DY,
            madePerS: FY[0],
            usedPerS: FY[1]
          },
          labelled: !0
        })
      }) : (0, WI.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, WI.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, WI.jsx)(mR, {
            stored: rY,
            cap: DY
          }), (0, WI.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, WI.jsx)("span", {
              children: AY("buildAFactory2Game:powerStoredLabelled", {
                stored: UY(rY),
                cap: UY(DY)
              })
            })
          })]
        })
      })
    }

    function lR(YY) {
      let {
        store: rY,
        close: DY
      } = YY;
      const {
        t: FY
      } = (0, mA.C)(), AY = WR(rY);
      return (0, WI.jsx)(iR.e, {
        close: DY,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, WI.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, WI.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, WI.jsxs)("div", {
              children: [(0, WI.jsx)("h2", {
                id: "baf2PowerTitle",
                children: FY("buildAFactory2Game:powerTitle")
              }), (0, WI.jsx)("p", {
                children: FY("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, WI.jsx)(yR.k, {
              onClick: DY
            })]
          }), AY && (0, WI.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, WI.jsx)(VR, {
              figures: ER(AY)
            }), (0, WI.jsx)(sR, {
              message: AY
            })]
          })]
        })
      })
    }

    function TR(YY) {
      var rY;
      let {
        kind: DY,
        def: AY,
        lF: IY,
        power: RY,
        stored: OY,
        cap: gY
      } = YY;
      const {
        t: aY
      } = (0, mA.C)(), vY = WR(RY, IY), [uY, sY] = (0, FY.useState)(!1);
      return (0, WI.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, WI.jsx)(nI, {
          kind: DY,
          def: AY,
          input: null,
          tier: null !== (rY = null === vY || void 0 === vY ? void 0 : vY.baf2PowerTier) && void 0 !== rY ? rY : 1
        }), (0, WI.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: aY("buildAFactory2Game:powerTitle")
        }), vY && (0, WI.jsx)(VR, {
          figures: ER(vY)
        }), !vY && (0, WI.jsx)(SR, {
          stored: OY,
          cap: gY,
          rates: null
        }), vY && (0, WI.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            sY(!uY)
          },
          "aria-expanded": uY,
          children: aY(uY ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), vY && uY && (0, WI.jsx)(sR, {
          message: vY
        })]
      })
    }
    const eR = 2500,
      NR = 17500,
      BR = `${SY} `;
    const cR = ["plan", "throttle"];

    function KR(YY) {
      if (YY.startsWith(`${mr} `)) return YY.slice(0, YY.lastIndexOf(" "));
      const rY = YY.split(" ");
      return rY[0] === Fr && cR.includes(rY[4]) ? rY.slice(0, 5).join(" ") : null
    }
    class HR {
      constructor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = YY, this.now = rY, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.HFY = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = rY()
      }
      enqueue(YY) {
        this.queue(YY, this.nextTicket());
        const rY = this.HFY + this.pending.length;
        return this.flush(), rY
      }
      track(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const DY = this.nextTicket();
        if (!rY.urgent) return this.queue(YY, DY), this.flush(), DY;
        const {
          supersedes: FY
        } = rY;
        for (let IY = this.pending.length - 1; IY >= this.urgent; IY--) {
          const rY = this.pending[IY];
          (rY.command === YY || null !== FY && void 0 !== FY && FY(rY.command)) && (this.pending.splice(IY, 1), this.markLeft(rY.tickets))
        }
        const AY = this.pending.findIndex((rY => {
          let {
            command: DY
          } = rY;
          return DY === YY
        }));
        return -1 !== AY ? this.pending[AY].tickets.push(DY) : (this.pending.splice(this.urgent, 0, {
          command: YY,
          tickets: [DY]
        }), this.urgent += 1), this.flush(), DY
      }
      leftAt(YY) {
        const rY = this.leftTimes.get(YY);
        return void 0 !== rY ? rY : this.pending.some((rY => {
          let {
            tickets: DY
          } = rY;
          return DY.includes(YY)
        })) ? null : -1 / 0
      }
      holdReserve() {
        this.reserves += 1;
        let YY = !0;
        return () => {
          YY && (YY = !1, this.reserves -= 1, this.flush())
        }
      }
      isWaitingLast(YY) {
        var rY;
        return (null === (rY = this.pending.at(-1)) || void 0 === rY ? void 0 : rY.command) === YY
      }
      sent() {
        return this.HFY
      }
      clear() {
        for (const {
            tickets: YY
          }
          of this.pending) this.markLeft(YY);
        this.pending.length = 0, this.urgent = 0, null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      nextTicket() {
        return this.lastTicket += 1, this.lastTicket
      }
      markLeft(YY) {
        const rY = this.now();
        for (const DY of YY) this.leftTimes.set(DY, rY);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(YY, rY) {
        const DY = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === DY || void 0 === DY ? void 0 : DY.command) === YY) return void(! function(YY) {
          return YY === lY || YY.startsWith(`${VY} `) || YY.startsWith(`${MY} `)
        }(YY) ? DY.tickets.push(rY) : (this.pending.pop(), this.markLeft([...DY.tickets, rY])));
        const FY = void 0 === DY ? null : function(YY, rY) {
          const DY = `${tY} `;
          if (!YY.startsWith(DY) || !rY.startsWith(DY)) return null;
          const FY = Dr(YY.slice(DY.length)),
            AY = Dr(rY.slice(DY.length));
          return FY && AY && FY.item === AY.item ? rr(AY.seq, function(YY, rY) {
            const DY = YY => "number" === typeof YY ? YY : "one" === YY ? 1 : 99;
            return "fill" === YY || "fill" === rY ? "fill" : DY(YY) + DY(rY)
          }(FY.mode, AY.mode), AY.item) : null
        }(DY.command, YY);
        if (null !== FY && void 0 !== DY) return DY.command = FY, void DY.tickets.push(rY);
        const AY = KR(YY);
        if (null !== AY && void 0 !== DY && KR(DY.command) === AY) return DY.command = YY, void DY.tickets.push(rY);
        if (null !== DY && void 0 !== DY && DY.command.startsWith(BR) && YY.startsWith(BR)) {
          const FY = YY.slice(BR.length);
          if (DY.command.slice(BR.length).split(",").includes(FY)) return void DY.tickets.push(rY);
          const AY = `${DY.command},${FY}`;
          if (AY.length <= 119) return DY.command = AY, void DY.tickets.push(rY)
        }
        this.pending.push({
          command: YY,
          tickets: [rY]
        })
      }
      flush() {
        const YY = this.now();
        for (this.tokens = Math.min(5, this.tokens + (YY - this.refilledAt) / eR), this.refilledAt = YY; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.HFY += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: YY,
            tickets: rY
          } = this.pending.shift();
          this.markLeft(rY), this.send(YY)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * eR)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class zR {
      constructor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new HR(YY, rY)
      }
      send(YY) {
        return this.queue.enqueue(YY)
      }
      sent() {
        return this.queue.sent()
      }
      track(YY, rY) {
        return this.queue.track(YY, rY)
      }
      leftAt(YY) {
        return this.queue.leftAt(YY)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(YY) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = rY, this.send(YY), this.islandEdits.count
      }
      syncIslandEdits(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: DY
        } = this, FY = rY - DY.lastAtMs < NR;
        DY.count = FY ? Math.max(DY.count, YY) : YY
      }
      clear() {
        this.queue.clear()
      }
    }
    const ZR = (0, FY.createContext)(null);

    function CR() {
      const YY = (0, FY.useContext)(ZR);
      if (!YY) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return YY
    }

    function fR(YY, rY) {
      return null !== rY && void 0 !== rY ? rY : 1 === YY
    }

    function jR(YY, rY) {
      return YY.every((YY => {
        var DY;
        let [FY, , AY] = YY;
        return !fR(AY, null === (DY = rY.get(FY)) || void 0 === DY ? void 0 : DY.Mi)
      }))
    }

    function hR(YY, rY, DY) {
      if (0 === YY.size) return YY;
      const FY = new Map(YY);
      for (const [AY, IY] of YY) {
        const YY = rY.find((YY => {
          let [rY] = YY;
          return rY === AY
        }));
        (!YY || IY.Mi === (1 === YY[2]) || IY.atMs < DY) && FY.delete(AY)
      }
      return FY
    }

    function dR(YY) {
      var rY;
      let {
        lF: DY,
        input: AY,
        drops: IY,
        seconds: RY
      } = YY;
      const {
        t: OY
      } = (0, mA.C)(), gY = CR(), [aY, vY] = (0, FY.useState)(new Map);
      (0, FY.useEffect)((() => {
        IY && vY((YY => hR(YY, IY, Date.now() - NR)))
      }), [IY]), (0, FY.useEffect)((() => {
        const YY = function(YY, rY) {
          let DY = null;
          for (const {
              atMs: FY
            }
            of YY.values()) DY = null === DY ? FY : Math.min(DY, FY);
          return null === DY ? null : DY + rY
        }(aY, NR);
        if (null === YY || !IY) return;
        const rY = setTimeout((() => {
          vY((YY => hR(YY, IY, Date.now() - NR)))
        }), Math.max(0, YY - Date.now()) + 1);
        return () => {
          clearTimeout(rY)
        }
      }), [aY, IY]);
      const uY = qY(AY),
        sY = null !== uY && null !== IY && jR(IY, aY),
        iY = function(YY, rY, DY) {
          return null === YY || null === rY || jR(rY, DY) ? 0 : JY[hY[YY]]
        }(uY, IY, aY);
      return (0, WI.jsxs)(NI, {
        title: OY("buildAFactory2Game:farmDropsTitle", {
          seconds: RY
        }),
        count: null !== (rY = null === IY || void 0 === IY ? void 0 : IY.length) && void 0 !== rY ? rY : 0,
        children: [iY > 0 && (0, WI.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: OY("buildAFactory2Game:farmDropsPower", {
            power: String(iY)
          })
        }), (null === uY || !IY) && (0, WI.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: OY("buildAFactory2Game:farmDropsEmpty")
        }), sY && (0, WI.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: OY("buildAFactory2Game:farmDropsAllVoided")
        }), null !== uY && (null === IY || void 0 === IY ? void 0 : IY.map((YY => {
          var rY;
          let [FY, AY, IY] = YY;
          const RY = AY < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            uY = fR(IY, null === (rY = aY.get(FY)) || void 0 === rY ? void 0 : rY.Mi);
          return (0, WI.jsxs)("li", {
            className: QA()("Baf2Recipe Baf2FarmDrop", {
              Voided: !uY
            }),
            children: [(0, WI.jsx)(VI, {
              item: FY,
              amount: 1
            }), (0, WI.jsx)("span", {
              className: "Baf2RecipeName",
              children: PA(OY, FY)
            }), (0, WI.jsx)("span", {
              className: "Baf2FarmRate",
              children: OY(RY, {
                amount: String(AY)
              })
            }), (0, WI.jsx)("button", {
              type: "button",
              className: QA()("Baf2FarmToggle SmallTextBold", {
                Kept: uY
              }),
              "aria-pressed": uY,
              onClick: () => {
                vY(new Map(aY).set(FY, {
                  Mi: !uY,
                  atMs: Date.now()
                })), gY.send(function(YY, rY, DY, FY) {
                  return `${MY} ${YY} ${rY} ${DY} ${FY}`
                }(DY[0], DY[1], DY[2], FY))
              },
              children: OY(uY ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, FY)
        })))]
      })
    }
    var JR;
    const MR = String(null !== (JR = Br.Synthesizer.waterPerOp) && void 0 !== JR ? JR : 0);

    function wR(YY) {
      let {
        lF: rY,
        taught: DY
      } = YY;
      const {
        t: AY
      } = (0, mA.C)(), IY = CR(), [RY, OY] = (0, FY.useState)(null);
      (0, FY.useEffect)((() => {
        null !== RY && DY === RY && OY(null)
      }), [RY, DY]);
      const gY = null !== RY && void 0 !== RY ? RY : DY;
      let aY = AY("buildAFactory2Game:synthPick");
      return null !== gY && (aY = AY("buildAFactory2Game:synthGrows", {
        name: PA(AY, gY),
        input: PA(AY, or),
        water: MR
      })), (0, WI.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, WI.jsx)("div", {
          className: QA()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === gY
          }),
          children: aY
        }), (0, WI.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: Wr.map(((YY, DY) => {
            const FY = PA(AY, YY),
              RY = YY === gY;
            return (0, WI.jsx)("li", {
              children: (0, WI.jsx)("button", {
                type: "button",
                className: QA()("Baf2SynthTile", {
                  Selected: RY
                }),
                title: FY,
                "aria-label": FY,
                "aria-pressed": RY,
                onClick: () => {
                  RY || (OY(YY), IY.send(`${mr} ${rY[0]} ${rY[1]} ${rY[2]} ${DY}`))
                },
                children: (0, WI.jsx)(SA.c, {
                  itemName: YY,
                  amount: 0
                })
              })
            }, YY)
          }))
        })]
      })
    }
    const bR = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function XR(YY) {
      let {
        kind: rY,
        tier: DY,
        coupled: FY,
        level: AY,
        slot: IY
      } = YY;
      const {
        t: RY
      } = (0, mA.C)(), gY = PY(Kr);
      if (!FY && null !== DY && DY < gY) return (0, WI.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, WI.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, WI.jsx)(VA.e, {
            name: "lock"
          })
        }), (0, WI.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: RY("buildAFactory2Game:upgradeLocked")
        }), (0, WI.jsx)("span", {
          className: "Baf2TierTag",
          children: RY("buildAFactory2Game:tierTag", {
            tier: String(gY)
          })
        })]
      });
      const aY = function(YY, rY) {
          if (OY() && "Crusher" !== YY && null !== rY) {
            if (qR(zr, rY)) return {
              item: zr,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (qR(Hr, rY)) return {
              item: Hr,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: Kr,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(rY, DY),
        vY = RY(FY ? bR[AY - 1] : aY.emptyKey),
        uY = null !== DY ? function(YY, rY, DY, FY) {
          if (!OY() || !DY || "Crusher" === YY || rY < 10) return null;
          const AY = PY(zr);
          if (FY < 3 && AY > 1 && (2 === FY || rY >= AY)) return {
            tier: AY,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const IY = PY(Hr);
          if (1 === FY && IY > 1) return {
            tier: IY,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(rY, DY, FY, AY) : null;
      return (0, WI.jsxs)("div", {
        className: QA()("Baf2UpgradeSocket", {
          Fitted: FY
        }),
        children: [(0, WI.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [FY && IY, !FY && (0, WI.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, WI.jsx)(SA.c, {
              itemName: aY.item,
              amount: 0
            })
          })]
        }), (0, WI.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, WI.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: RY("buildAFactory2Game:upgradeTitle")
          }), (0, WI.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: vY
          }), FY && AY >= 2 && "Crusher" === rY && (0, WI.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: RY("buildAFactory2Game:couplerCrusherHint")
          }), uY && null !== DY && DY < uY.tier && (0, WI.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, WI.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, WI.jsx)(VA.e, {
                name: "lock"
              })
            }), RY(uY.lockedKey), (0, WI.jsx)("span", {
              className: "Baf2TierTag",
              children: RY("buildAFactory2Game:tierTag", {
                tier: String(uY.tier)
              })
            })]
          }), uY && null !== DY && DY >= uY.tier && (0, WI.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: RY(uY.nextKey)
          })]
        })]
      })
    }

    function qR(YY, rY) {
      const DY = PY(YY);
      return DY > 1 && rY >= DY
    }
    var pR = DY(36400);
    const kR = (0, LY.G)(Br.Condenser, Br.Condenser.fluidMade),
      GR = .05;
    class xR extends QR {}

    function nR(YY) {
      return vI(YY, "")
    }

    function PR(YY, rY, DY) {
      return YY(rY ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: DY
      })
    }

    function UR(YY, rY, DY, FY) {
      return DY <= GR && FY <= GR ? null : FY <= GR || DY <= GR ? PR(YY, rY, FY <= GR ? vI(DY, "+") : vI(FY, "\u2212")) : YY(rY ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: nR(DY),
        used: nR(FY)
      })
    }

    function LR(YY, rY) {
      return Math.min(100, 100 * YY / Math.max(1, rY))
    }

    function tR(YY) {
      let {
        stored: rY,
        cap: DY,
        netPerS: FY,
        rates: AY,
        cryo: IY
      } = YY;
      const {
        t: RY
      } = (0, mA.C)(), OY = function(YY, rY, DY, FY) {
        return DY <= 0 ? YY("buildAFactory2Game:waterNoStorage") : rY >= DY ? YY("buildAFactory2Game:powerFull") : FY > GR ? YY("buildAFactory2Game:powerFullIn", {
          time: iI(YY, (DY - rY) / FY)
        }) : FY < -.05 ? rY <= 0 ? YY("buildAFactory2Game:waterEmpty") : YY("buildAFactory2Game:powerEmptyIn", {
          time: iI(YY, rY / -FY)
        }) : YY("buildAFactory2Game:powerSteady")
      }(RY, rY, DY, FY), gY = DY > 0 && rY < DY && Math.abs(FY) <= GR, aY = RY(IY ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), vY = null !== AY ? `${AY} \xb7 ${OY}` : gY ? aY : `${aY} \xb7 ${OY}`;
      return (0, WI.jsxs)(WI.Fragment, {
        children: [(0, WI.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, WI.jsx)("div", {
            style: {
              width: `${LR(rY,DY)}%`
            }
          })
        }), (0, WI.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, WI.jsx)("span", {
            children: DY > 0 && RY("buildAFactory2Game:powerStored", {
              stored: (0, LY.Q)(rY),
              cap: (0, LY.Q)(DY)
            })
          }), (0, WI.jsx)("span", {
            className: QA()("Baf2WaterNet", {
              Draining: FY < -.05
            }),
            children: vY
          })]
        })]
      })
    }

    function YO(YY) {
      let {
        water: rY,
        at: DY,
        side: FY = null
      } = YY;
      const {
        t: AY
      } = (0, mA.C)(), IY = CR(), [RY, OY, gY] = rY;
      return (0, WI.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, WI.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, WI.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: AY(null === FY ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${FY}`)
          }), (0, WI.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              IY.send(`${LY.D} ${DY[0]} ${DY[1]} ${DY[2]}${"cryoOut"===FY?" cryo":""}`)
            },
            children: AY("buildAFactory2Game:waterDetails")
          })]
        }), (0, WI.jsx)(tR, {
          stored: RY,
          cap: OY,
          netPerS: gY,
          rates: PR(AY, "cryoOut" === FY, vI(Math.abs(gY), gY < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === FY
        })]
      })
    }

    function rO(YY, rY) {
      var DY, FY, AY;
      const IY = !0 === rY.baf2WaterCryo,
        RY = null !== (DY = null === (FY = rY.baf2WaterMakers.find((YY => YY[0] === (IY ? LY.b : "Condenser")))) || void 0 === FY ? void 0 : FY[1]) && void 0 !== DY ? DY : 0,
        OY = [],
        gY = (rY, DY, FY) => {
          rY > 0 && OY.push(YY(1 === rY ? DY : FY, {
            count: String(rY)
          }))
        };
      return IY ? gY(RY, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : gY(RY, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), gY(null !== (AY = rY.baf2WaterPipes) && void 0 !== AY ? AY : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), gY(rY.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), OY.join(" \xb7 ")
    }

    function DO(YY, rY) {
      if (!0 === rY.baf2WaterCryo) return function(YY, rY) {
        const DY = Br[LY.b];
        switch (rY.baf2WaterThis) {
          case "pipe":
            return {
              text: YY("buildAFactory2Game:cryoThisPipe"), bad: !1
            };
          case "condenserFull":
            return {
              text: YY("buildAFactory2Game:cryoThisMixerFull"), bad: !1
            };
          case "condenserNoPower":
            return {
              text: YY("buildAFactory2Game:cryoThisMixerNoPower"), bad: !0
            };
          case "condenserNoOutlet":
            return {
              text: YY("buildAFactory2Game:cryoThisMixerNoOutlet"), bad: !0
            };
          case "mixerNoInput":
            return {
              text: YY("buildAFactory2Game:cryoThisMixerNoInput"), bad: !0
            };
          case "mixerBadInput":
            return {
              text: YY("buildAFactory2Game:cryoThisMixerBadInput"), bad: !0
            };
          case "mixerNoWater":
            return {
              text: YY("buildAFactory2Game:cryoThisMixerNoWater"), bad: !0
            };
          case "condenser": {
            var FY;
            const [AY, IY] = null !== (FY = rY.baf2WaterThisRates) && void 0 !== FY ? FY : [(0, LY.G)(DY, DY.cryoMade), (0, LY.G)(DY, DY.powerPerOp)];
            return !0 === rY.baf2WaterDriven ? {
              text: YY("buildAFactory2Game:cryoThisMixerDriven", {
                rate: nR(AY)
              }),
              bad: !1
            } : {
              text: YY("buildAFactory2Game:cryoThisMixer", {
                rate: nR(AY),
                power: nR(IY)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: YY("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(YY, rY);
      const DY = !0 === rY.baf2WaterDriven,
        FY = Br.Condenser;
      switch (rY.baf2WaterThis) {
        case "pipe":
          return {
            text: YY("buildAFactory2Game:waterThisPipe"), bad: !1
          };
        case "condenserFull":
          return {
            text: YY("buildAFactory2Game:waterThisCondenserFull"), bad: !1
          };
        case "condenserNoPower":
          return {
            text: YY("buildAFactory2Game:waterThisCondenserNoPower"), bad: !0
          };
        case "condenserNoOutlet":
          return {
            text: YY("buildAFactory2Game:waterThisCondenserNoOutlet"), bad: !0
          };
        case "tank":
          return {
            text: YY("buildAFactory2Game:waterThisTank", {
              tank: (0, LY.Q)(LY.s),
              cap: (0, LY.Q)(rY.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var AY;
          const [IY, RY] = null !== (AY = rY.baf2WaterThisRates) && void 0 !== AY ? AY : [kR, (0, LY.G)(FY, FY.powerPerOp)];
          return DY ? {
            text: YY("buildAFactory2Game:waterThisCondenserDriven", {
              rate: nR(IY)
            }),
            bad: !1
          } : {
            text: YY("buildAFactory2Game:waterThisCondenser", {
              rate: nR(IY),
              power: nR(RY)
            }),
            bad: !1
          }
        }
        default:
          return {
            text: YY("buildAFactory2Game:waterThisUser"), bad: !1
          }
      }
    }

    function FO(YY, rY) {
      const DY = rY.baf2WaterMakers.some((YY => !0 === YY[5]));
      if (!0 === rY.baf2WaterCryo) {
        const FY = rY.baf2WaterUsedPerS - rY.baf2WaterMadePerS,
          AY = DY || FY <= GR ? 0 : (0, LY.F)(FY);
        return 0 === AY ? null : AY > 1 ? YY("buildAFactory2Game:cryoNextMixers", {
          mixers: String(AY)
        }) : YY("buildAFactory2Game:cryoNextOne")
      }
      const FY = DY ? null : function(YY, rY) {
        const DY = rY - YY;
        return DY <= GR ? null : Math.ceil(DY / kR)
      }(rY.baf2WaterMadePerS, rY.baf2WaterUsedPerS);
      return null === FY ? null : FY > 1 ? YY("buildAFactory2Game:waterNextCondensers", {
        condensers: String(FY)
      }) : YY("buildAFactory2Game:waterNextOne")
    }

    function AO(YY) {
      let {
        item: rY,
        label: DY,
        note: FY,
        value: AY,
        dim: IY,
        bad: RY
      } = YY;
      return (0, WI.jsxs)("li", {
        className: QA()("Baf2WaterRow", {
          Dim: IY,
          Bad: RY
        }),
        children: [(0, WI.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, WI.jsx)(SA.c, {
            itemName: rY,
            amount: 0
          })
        }), (0, WI.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, WI.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: DY
          }), FY && (0, WI.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: FY
          })]
        }), (0, WI.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: AY
        })]
      })
    }

    function IO(YY) {
      return pR.o[YY] ? YY : "Reactor Port"
    }

    function RO(YY) {
      let {
        message: rY
      } = YY;
      const {
        t: DY
      } = (0, mA.C)(), FY = !0 === rY.baf2WaterCryo, AY = (YY, rY) => PR(DY, FY, vI(YY, rY));
      return (0, WI.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, WI.jsxs)("section", {
          children: [(0, WI.jsxs)("h3", {
            children: [DY("buildAFactory2Game:waterMakes"), (0, WI.jsx)("span", {
              children: AY(rY.baf2WaterMadePerS, "+")
            })]
          }), (0, WI.jsxs)("ul", {
            children: [0 === rY.baf2WaterMakers.length && (0, WI.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: DY(FY ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), rY.baf2WaterMakers.map((YY => {
              let [rY, FY, IY, RY, OY, gY] = YY;
              const aY = DY("buildAFactory2Game:powerRunning", {
                amount: String(IY)
              });
              let vY = OY > 0 ? DY("buildAFactory2Game:waterMakerPower", {
                running: aY,
                power: nR(OY)
              }) : aY;
              return gY && (vY = DY(0 === IY && RY <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, WI.jsx)(AO, {
                item: rY,
                label: `${PA(DY,rY)} \xd7${FY}`,
                note: vY,
                value: IY > 0 || gY && RY > 0 ? AY(RY, "+") : DY("buildAFactory2Game:powerIdle"),
                dim: 0 === IY && !gY,
                bad: gY
              }, rY)
            }))]
          })]
        }), (0, WI.jsxs)("section", {
          children: [(0, WI.jsxs)("h3", {
            children: [DY("buildAFactory2Game:waterUses"), (0, WI.jsx)("span", {
              children: AY(rY.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, WI.jsxs)("ul", {
            children: [0 === rY.baf2WaterUsers.length && (0, WI.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: DY(FY ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), rY.baf2WaterUsers.map((YY => {
              let [rY, FY, IY, RY] = YY;
              const OY = pR.o[rY] ? PA(DY, rY) : rY;
              return (0, WI.jsx)(AO, {
                item: IO(rY),
                label: FY > 1 ? `${OY} \xd7${FY}` : OY,
                note: RY ? DY("buildAFactory2Game:waterPortFirst") : void 0,
                value: IY > 0 ? AY(IY, "\u2212") : DY("buildAFactory2Game:powerIdle"),
                dim: 0 === IY
              }, rY)
            }))]
          })]
        })]
      })
    }

    function OO(YY) {
      var rY, DY, AY, IY, RY;
      let {
        store: OY,
        close: gY
      } = YY;
      const {
        t: aY
      } = (0, mA.C)(), vY = function(YY) {
        const [rY, DY] = (0, FY.useState)((() => YY.get()));
        return (0, FY.useEffect)((() => (DY(YY.get()), YY.subscribe((() => {
          DY(YY.get())
        })))), [YY]), rY
      }(OY), uY = null !== (rY = null === vY || void 0 === vY ? void 0 : vY.baf2WaterStored) && void 0 !== rY ? rY : 0, sY = null !== (DY = null === vY || void 0 === vY ? void 0 : vY.baf2WaterCap) && void 0 !== DY ? DY : 0, iY = null !== (AY = null === vY || void 0 === vY ? void 0 : vY.baf2WaterMadePerS) && void 0 !== AY ? AY : 0, yY = null !== (IY = null === vY || void 0 === vY ? void 0 : vY.baf2WaterUsedPerS) && void 0 !== IY ? IY : 0, QY = null !== (RY = null === vY || void 0 === vY ? void 0 : vY.baf2WaterNetPerS) && void 0 !== RY ? RY : iY - yY, oY = vY && DO(aY, vY), WY = vY && FO(aY, vY), EY = !0 === (null === vY || void 0 === vY ? void 0 : vY.baf2WaterCryo);
      return (0, WI.jsx)(iR.e, {
        close: gY,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, WI.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, WI.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, WI.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== vY && sY <= 0 ? (0, WI.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, WI.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, WI.jsx)(SA.c, {
                  itemName: EY ? OD.e : LY.l,
                  amount: 0
                })
              }), (0, WI.jsxs)("div", {
                children: [(0, WI.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: aY(EY ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), vY && (0, WI.jsx)("p", {
                  children: rO(aY, vY)
                })]
              })]
            }), (0, WI.jsx)(yR.k, {
              onClick: gY
            })]
          }), vY && oY && (0, WI.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, WI.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, WI.jsx)(tR, {
                stored: uY,
                cap: sY,
                netPerS: QY,
                cryo: EY,
                rates: UR(aY, EY, iY, yY)
              })
            }), (0, WI.jsx)("div", {
              className: QA()("Baf2WaterThis", {
                Bad: oY.bad
              }),
              children: oY.text
            }), vY.baf2WaterDriven && (0, WI.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, WI.jsx)(VA.e, {
                name: "bolt"
              }), aY(EY ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), WY && (0, WI.jsx)("p", {
              className: "Baf2WaterNext",
              children: WY
            }), (0, WI.jsx)(RO, {
              message: vY
            })]
          })]
        })
      })
    }
    class gO {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(YY, rY) {
        const DY = this.get(YY);
        DY && null === rY.opLeftMs && null === rY.fuelLeftMs && rY.status === DY.status ? rY = {
          ...rY,
          opLeftMs: DY.opLeftMs,
          fuelLeftMs: DY.fuelLeftMs,
          burning: DY.burning
        } : this.updates++, this.pos = YY, this.view = rY;
        for (const FY of this.listeners) FY()
      }
      get(YY) {
        return null !== this.pos && this.pos[0] === YY[0] && this.pos[1] === YY[1] && this.pos[2] === YY[2] ? this.view : null
      }
      forget(YY) {
        null !== this.get(YY) && (this.pos = null, this.view = null)
      }
      get updateCount() {
        return this.updates
      }
      subscribe(YY) {
        return this.listeners.add(YY), () => {
          this.listeners.delete(YY)
        }
      }
    }

    function aO(YY, rY, DY, FY) {
      return "noFuel" === rY && FY && !Ur(Br[YY]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === rY && !0 === (null === DY || void 0 === DY ? void 0 : DY.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === rY && !0 === (null === DY || void 0 === DY ? void 0 : DY.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === rY && !0 === (null === DY || void 0 === DY ? void 0 : DY.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === rY && !0 === (null === DY || void 0 === DY ? void 0 : DY.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : vO(rY, DY) ? "buildAFactory2Game:machineStatus_noInputShort" : function(YY, rY) {
        const DY = Br[YY];
        if ("noFuel" === rY && void 0 !== DY.fuels) return Ur(DY) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (DY.mobFarm && ("noInput" === rY || "badInput" === rY)) return `buildAFactory2Game:machineStatus_${rY}MobFarm`;
        if ("outputFull" === rY && (void 0 !== DY.table || DY.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === rY && Mr(DY)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== DY.cryoMade && ("noInput" === rY || "noOutlet" === rY || "fluidFull" === rY)) return `buildAFactory2Game:machineStatus_${rY}Mixer`;
        return `buildAFactory2Game:machineStatus_${rY}`
      }(YY, rY)
    }

    function vO(YY, rY) {
      return "noInput" === YY && null !== rY && void 0 !== rY && rY.input && rY.inputShort ? {
        input: rY.input,
        short: rY.inputShort
      } : null
    }

    function uO(YY) {
      return oA(YY) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== YY.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function sO(YY) {
      const rY = (0, fY.te)(YY);
      return `Baf2Pane Baf2Pane${rY.charAt(0).toUpperCase()}${rY.slice(1)}`
    }

    function iO(YY, rY) {
      const [DY, AY] = (0, FY.useState)((() => YY.get(rY)));
      return (0, FY.useEffect)((() => {
        AY(YY.get(rY));
        const DY = YY.subscribe((() => {
          AY(YY.get(rY))
        }));
        return () => {
          DY(), YY.forget(rY)
        }
      }), [YY, ...rY]), DY
    }

    function yO(YY, rY, DY, FY) {
      const AY = Br[YY],
        IY = rY && AY.couplable ? jr(AY, DY) : AY,
        RY = null !== FY && xr(IY) ? function(YY, rY) {
          var DY;
          return null !== (DY = null !== rY && xr(YY) ? YD[rY] : void 0) && void 0 !== DY ? DY : YY.opMs
        }(IY, rD(FY)) : IY.opMs;
      return RY === IY.opMs ? IY : {
        ...IY,
        opMs: RY
      }
    }

    function QO(YY) {
      let {
        running: rY,
        opMs: DY,
        opLeftMs: FY,
        updateCount: AY
      } = YY;
      return (0, WI.jsx)("div", {
        className: QA()("Baf2MachineProgress", {
          Running: rY
        }),
        children: (0, WI.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: DY / 1e3 + "s",
            animationDelay: null === FY ? void 0 : (FY - DY) / 1e3 + "s"
          }
        }, AY)
      })
    }

    function oO(YY) {
      let {
        running: rY,
        leftMs: DY,
        periodMs: FY,
        updateCount: AY
      } = YY;
      const {
        t: IY
      } = (0, mA.C)(), RY = Math.min(Math.max(null !== DY && void 0 !== DY ? DY : 0, 0), FY), OY = rY && RY > 0, gY = IY("buildAFactory2Game:machineBarFuel");
      return (0, WI.jsx)("div", {
        className: QA()("Baf2FuelBurn", {
          Draining: OY
        }),
        role: "img",
        title: gY,
        "aria-label": gY,
        children: (0, WI.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: OY ? {
            animationDuration: FY / 1e3 + "s",
            animationDelay: (RY - FY) / 1e3 + "s"
          } : {
            transform: `scaleY(${RY/FY})`
          }
        }, AY)
      })
    }

    function WO(YY, rY, DY) {
      let [FY, AY] = DY;
      const IY = 1 !== FY ? EA(rY) : null;
      return {
        amount: FY,
        have: AY,
        item: YY(IY || nA(rY))
      }
    }

    function EO(YY) {
      return xr(YY) ? "buildAFactory2Game:machineBarMining" : nr(YY) ? "buildAFactory2Game:machineBarCutting" : void 0 !== YY.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function mO(YY) {
      var rY, DY, FY, AY, IY, RY, OY, gY, aY, vY, uY, sY, iY, yY, QY, oY, WY, EY, mY;
      let {
        kind: VY,
        lF: SY,
        store: lY,
        power: TY,
        renderSlot: eY
      } = YY;
      const {
        t: NY
      } = (0, mA.C)(), BY = iO(lY, SY), cY = Br[VY], KY = null !== (rY = null === BY || void 0 === BY ? void 0 : BY.coupled) && void 0 !== rY && rY, HY = null !== (DY = null === BY || void 0 === BY ? void 0 : BY.couplerLevel) && void 0 !== DY ? DY : 1, zY = yO(VY, KY, HY, null !== (FY = null === BY || void 0 === BY || null === (AY = BY.dug) || void 0 === AY ? void 0 : AY.item) && void 0 !== FY ? FY : null), ZY = null !== (IY = null === BY || void 0 === BY ? void 0 : BY.status) && void 0 !== IY ? IY : null, CY = null !== (RY = null === BY || void 0 === BY ? void 0 : BY.power) && void 0 !== RY ? RY : null, fY = null !== (OY = null === BY || void 0 === BY ? void 0 : BY.opLeftMs) && void 0 !== OY ? OY : null, jY = null !== (gY = null === BY || void 0 === BY ? void 0 : BY.dug) && void 0 !== gY ? gY : null, hY = null !== jY && xr(cY) ? YD[null !== (aY = rD(jY.item)) && void 0 !== aY ? aY : ""] : void 0, dY = void 0 === hY ? null : 6e4 / hY, JY = null !== (vY = null === BY || void 0 === BY ? void 0 : BY.powerCap) && void 0 !== vY ? vY : 4e3, MY = null !== (uY = null === BY || void 0 === BY ? void 0 : BY.tier) && void 0 !== uY ? uY : null, wY = void 0 !== zY.powerMade, bY = null !== cY.fuelSlot ? eY(cY.fuelSlot) : null, XY = fr(cY), qY = !KY && !0 === (null === BY || void 0 === BY ? void 0 : BY.fuelFed), kY = !KY && !0 === (null === BY || void 0 === BY ? void 0 : BY.fuelFeeds), GY = null !== cY.fuelSlot && !KY, xY = null !== (sY = null === BY || void 0 === BY ? void 0 : BY.fuelLeftMs) && void 0 !== sY ? sY : null, nY = function(YY, rY, DY) {
        var FY;
        const AY = null === rY ? void 0 : Lr[rY];
        return Math.max(null !== (FY = null !== AY && void 0 !== AY ? AY : DY) && void 0 !== FY ? FY : 0, YY.opMs)
      }(zY, null !== (iY = null === BY || void 0 === BY ? void 0 : BY.burning) && void 0 !== iY ? iY : null, xY), PY = null !== (yY = null === BY || void 0 === BY ? void 0 : BY.fuelKeep) && void 0 !== yY ? yY : null, UY = null === ZY ? null : aO(VY, ZY, BY, qY), LY = null === ZY ? null : vO(ZY, BY);
      return (0, WI.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, WI.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, WI.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: NY(nA(VY))
          }), jY && (0, WI.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [NY("Tree Cutter" === VY ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, WI.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, WI.jsx)(SA.c, {
                itemName: jY.item,
                amount: 0
              })
            }), (0, WI.jsx)(lA.b, {
              text: jY.name
            })]
          }), null !== dY && (0, WI.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: NY("buildAFactory2Game:machineDigsFixed", {
              perMin: String(dY)
            })
          }), (null === BY || void 0 === BY ? void 0 : BY.field) && (0, WI.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, WI.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, WI.jsx)(SA.c, {
                itemName: "Wheat",
                amount: 0
              })
            }), NY("buildAFactory2Game:machineField", {
              planted: String(BY.field[0]),
              ripe: String(BY.field[1])
            })]
          }), (0, WI.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, WI.jsxs)("div", {
              className: QA()("Baf2MachineColumn", {
                Baf2Burns: GY
              }),
              children: [null !== zY.inputSlot && (0, WI.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, WI.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: NY(uO(zY))
                }), eY(zY.inputSlot)]
              }), null !== cY.fuelSlot && !KY && (0, WI.jsxs)("div", {
                className: QA()("Baf2MachineSlot", {
                  Baf2FuelFed: qY
                }),
                children: [(0, WI.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [qY && (0, WI.jsx)(VA.e, {
                    name: "fire"
                  }), NY("buildAFactory2Game:machineFuel")]
                }), (0, WI.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, WI.jsx)(oO, {
                    running: "running" === ZY,
                    leftMs: xY,
                    periodMs: nY,
                    updateCount: lY.updateCount
                  }), bY]
                })]
              }), null !== cY.fuelSlot && KY && (0, WI.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, WI.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: NY("buildAFactory2Game:machineFuel")
                }), (0, WI.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: NY("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": NY("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, WI.jsx)(VA.e, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, WI.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, WI.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: NY(EO(zY))
              }), (0, WI.jsx)(QO, {
                running: "running" === ZY,
                opMs: zY.opMs,
                opLeftMs: fY,
                updateCount: lY.updateCount
              })]
            }), zY.outputSlots.length > 0 && (0, WI.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, WI.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: NY("buildAFactory2Game:machineOutput")
              }), (0, WI.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: zY.outputSlots.map((YY => (0, WI.jsx)("div", {
                  children: eY(YY)
                }, YY)))
              })]
            }), null !== CY && wY && (0, WI.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, WI.jsx)("div", {
                style: {
                  height: 100 * CY / JY + "%"
                }
              })
            })]
          }), GY && null !== PY && (0, WI.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, WI.jsx)(VA.e, {
              name: "arrows-rotate"
            }), NY(nr(zY) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(PY)
            })]
          }), (qY || kY) && (0, WI.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, WI.jsx)(VA.e, {
              name: "fire"
            }), NY(qY ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), cY.couplable && (0, WI.jsx)(XR, {
            kind: VY,
            tier: MY,
            coupled: KY,
            level: HY,
            slot: XY === cY.fuelSlot ? bY : null !== XY ? eY(XY) : null
          }), null !== CY && !wY && !0 === (null === BY || void 0 === BY ? void 0 : BY.reactorPowered) && (0, WI.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: NY("buildAFactory2Game:machineReactorPowered")
          }), null !== CY && !wY && !0 !== (null === BY || void 0 === BY ? void 0 : BY.reactorPowered) && (0, WI.jsx)(SR, {
            stored: CY,
            cap: JY,
            rates: null !== (QY = null === BY || void 0 === BY ? void 0 : BY.powerRates) && void 0 !== QY ? QY : null
          }), (null === BY || void 0 === BY ? void 0 : BY.water) && (0, WI.jsx)(YO, {
            water: BY.water,
            at: SY,
            side: BY.cryo ? "waterIn" : null
          }), (null === BY || void 0 === BY ? void 0 : BY.cryo) && (0, WI.jsx)(YO, {
            water: BY.cryo,
            at: SY,
            side: "cryoOut"
          }), null !== BY && void 0 !== BY && BY.inertCoupler ? (0, WI.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: NY("buildAFactory2Game:machineStatus_couplerOff", {
              item: PA(NY, BY.inertCoupler)
            })
          }) : null !== UY && (0, WI.jsx)("div", {
            className: QA()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== ZY
            }),
            children: NY(UY, LY ? WO(NY, LY.input, LY.short) : void 0)
          })]
        }), (0, WI.jsxs)("div", {
          className: QA()("Baf2MachineSide", {
            Baf2SynthSide: Mr(cY)
          }),
          children: [Mr(cY) && (0, WI.jsx)(wR, {
            lF: SY,
            taught: null !== (oY = null === BY || void 0 === BY ? void 0 : BY.taught) && void 0 !== oY ? oY : null
          }, SY.join(",")), wY && (0, WI.jsx)(TR, {
            kind: VY,
            def: zY,
            lF: SY,
            power: TY,
            stored: null !== CY && void 0 !== CY ? CY : 0,
            cap: JY
          }), pY(cY) && (0, WI.jsx)(dR, {
            lF: SY,
            input: null !== (WY = null === BY || void 0 === BY ? void 0 : BY.input) && void 0 !== WY ? WY : null,
            drops: null !== (EY = null === BY || void 0 === BY ? void 0 : BY.farm) && void 0 !== EY ? EY : null,
            seconds: String(zY.opMs / 1e3)
          }), !wY && !pY(cY) && !Mr(cY) && (0, WI.jsx)(nI, {
            kind: VY,
            def: zY,
            input: null !== (mY = null === BY || void 0 === BY ? void 0 : BY.input) && void 0 !== mY ? mY : null,
            tier: null !== MY && void 0 !== MY ? MY : 1,
            noSeeds: !0 === (null === BY || void 0 === BY ? void 0 : BY.noSeeds)
          })]
        })]
      })
    }

    function VO(YY, rY, DY, FY) {
      var AY;
      const IY = Br[YY],
        RY = [IY.inputSlot, IY.fuelSlot, ...null !== (AY = IY.inputSlots) && void 0 !== AY ? AY : []].filter((YY => null !== YY));
      return {
        render: AY => {
          let {
            lF: IY,
            renderSlot: RY
          } = AY;
          return (0, WI.jsx)(ZR.Provider, {
            value: FY,
            children: (0, WI.jsx)(mO, {
              kind: YY,
              lF: IY,
              store: rY,
              power: DY,
              renderSlot: RY
            })
          })
        },
        quickMoveRange: RY.length > 0 ? [Math.min(...RY), Math.max(...RY) + 1] : [0, 0],
        className: sO(YY)
      }
    }
    const SO = "Assembler";

    function lO(YY) {
      var rY, DY, FY, AY, IY, RY, OY, gY, aY;
      let {
        lF: vY,
        store: uY,
        renderSlot: sY
      } = YY;
      const {
        t: iY
      } = (0, mA.C)(), yY = iO(uY, vY), QY = null !== (rY = null === yY || void 0 === yY ? void 0 : yY.tier) && void 0 !== rY ? rY : 1, oY = null !== (DY = null === yY || void 0 === yY ? void 0 : yY.taught) && void 0 !== DY ? DY : null, WY = qr(SO, {
        coupled: !1,
        taught: oY
      }), EY = null !== (FY = WY.bench) && void 0 !== FY ? FY : null, mY = null !== (AY = null === yY || void 0 === yY ? void 0 : yY.status) && void 0 !== AY ? AY : null, VY = null !== (IY = null === yY || void 0 === yY ? void 0 : yY.power) && void 0 !== IY ? IY : null, SY = null !== (RY = null === yY || void 0 === yY ? void 0 : yY.powerCap) && void 0 !== RY ? RY : 4e3;
      return (0, WI.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, WI.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, WI.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: iY(nA(SO))
          }), EY && (0, WI.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [iY("buildAFactory2Game:benchMakes"), (0, WI.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, WI.jsx)(SA.c, {
                itemName: EY.output,
                amount: 0
              })
            }), (null === yY || void 0 === yY ? void 0 : yY.taughtName) && (0, WI.jsx)(lA.b, {
              text: yY.taughtName
            }), EY.outputAmount > 1 && (0, WI.jsxs)("span", {
              children: ["\xd7", EY.outputAmount]
            })]
          }), !EY && (0, WI.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: iY("buildAFactory2Game:benchTeachHint")
          }), (0, WI.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, WI.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (OY = WY.inputSlots) && void 0 !== OY ? OY : []).map(((YY, rY) => {
                const DY = null === EY || void 0 === EY ? void 0 : EY.inputs[rY];
                return (0, WI.jsxs)("div", {
                  className: QA()("Baf2BenchInput", {
                    Spare: !DY
                  }),
                  children: [(0, WI.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [sY(YY), DY && (0, WI.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, WI.jsx)(SA.c, {
                        itemName: DY.item,
                        amount: 0
                      })
                    })]
                  }), (0, WI.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: DY ? `\xd7${DY.amount}` : "\xa0"
                  })]
                }, YY)
              }))
            }), (0, WI.jsx)(QO, {
              running: "running" === mY,
              opMs: WY.opMs,
              opLeftMs: null !== (gY = null === yY || void 0 === yY ? void 0 : yY.opLeftMs) && void 0 !== gY ? gY : null,
              updateCount: uY.updateCount
            }), (0, WI.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, WI.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: iY("buildAFactory2Game:machineOutput")
              }), (0, WI.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: WY.outputSlots.map((YY => (0, WI.jsx)("div", {
                  children: sY(YY)
                }, YY)))
              })]
            })]
          }), null !== VY && (0, WI.jsx)(SR, {
            stored: VY,
            cap: SY,
            rates: null !== (aY = null === yY || void 0 === yY ? void 0 : yY.powerRates) && void 0 !== aY ? aY : null
          }), null !== mY && (0, WI.jsx)("div", {
            className: QA()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== mY
            }),
            children: iY(aO(SO, mY, yY, !1))
          }), EY && EY.inputs.length > 1 && (0, WI.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: iY("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, WI.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, WI.jsx)(UI, {
            taught: oY,
            tier: QY
          }), EY && (0, WI.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: iY("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function TO(YY) {
      var rY;
      const DY = null !== (rY = Br[SO].inputSlots) && void 0 !== rY ? rY : [];
      return {
        render: rY => {
          let {
            lF: DY,
            renderSlot: FY
          } = rY;
          return (0, WI.jsx)(lO, {
            lF: DY,
            store: YY,
            renderSlot: FY
          })
        },
        quickMoveRange: [Math.min(...DY), Math.max(...DY) + 1],
        className: sO(SO)
      }
    }
    var eO = DY(99),
      NO = DY(1152),
      BO = DY(3815);
    const cO = 600,
      KO = .5,
      HO = 4,
      zO = 1200,
      ZO = 140,
      CO = 100,
      fO = 32,
      jO = 16,
      hO = 100.5,
      dO = 90,
      JO = 1.5,
      MO = 50;

    function wO(YY) {
      switch (TD(YY)) {
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
    const bO = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function XO(YY) {
      const rY = Math.ceil(60 * YY / CO);
      return {
        fuel: Math.max(fO, rY),
        waste: Math.max(jO, rY)
      }
    }

    function qO(YY, rY, DY) {
      const [FY, AY, IY] = [YY - 2, rY - 2, DY - 2];
      return 2 * (FY * AY + AY * IY + IY * FY) * ZO
    }

    function pO(YY, rY, DY) {
      return Math.max(0, YY - 2) * Math.max(0, rY - 2) * Math.max(0, DY - 2)
    }

    function kO(YY, rY) {
      const [DY, FY, AY] = YY, IY = DY * FY * AY, RY = new Float32Array(IY);
      let OY = 0,
        gY = 0,
        aY = 0,
        vY = 0,
        uY = 0;
      const sY = (YY, IY, RY) => YY < 0 || YY >= DY || IY < 0 || IY >= FY || RY < 0 || RY >= AY ? 0 : rY[(IY * AY + RY) * DY + YY];
      for (let oY = 0; oY < FY; oY++)
        for (let YY = 0; YY < AY; YY++)
          for (let FY = 0; FY < DY; FY++) {
            const IY = (oY * AY + YY) * DY + FY,
              iY = rY[IY];
            if (1 === iY) {
              OY++;
              let rY = 0;
              for (const [DY, AY, IY] of bO) {
                const RY = sY(FY + DY, oY + AY, YY + IY);
                1 !== RY && 2 !== RY || rY++
              }
              RY[IY] = cO * (1 + KO * Math.min(rY, HO)), vY += RY[IY]
            } else if (2 === iY) gY++;
            else if (3 === iY) {
              aY++;
              bO.some((rY => {
                let [DY, AY, IY] = rY;
                return 1 === sY(FY + DY, oY + AY, YY + IY)
              })) && (uY += zO)
            }
          }
      const iY = qO(DY + 2, FY + 2, AY + 2),
        yY = Math.min(vY, uY, iY),
        QY = OY > 0 ? vY * CO / OY : 0;
      return {
        rods: OY,
        graphite: gY,
        channels: aY,
        fuelHeat: vY,
        cooling: uY,
        size: iY,
        max: yY,
        vol: IY,
        powerPerUnit: QY,
        pelletsPerMin: QY > 0 ? yY / QY * 60 : 0,
        waterPerS: yY * LY.r,
        rodHeat: RY
      }
    }
    const GO = 0,
      xO = 1,
      nO = 6,
      PO = 7,
      UO = 8;

    function LO(YY, rY) {
      const [DY, FY, AY] = YY, IY = new Uint8Array(DY * FY * AY), RY = (YY, IY, RY) => YY < 0 || YY >= DY || IY < 0 || IY >= FY || RY < 0 || RY >= AY ? 0 : rY[(IY * AY + RY) * DY + YY];
      for (let OY = 0; OY < FY; OY++)
        for (let YY = 0; YY < AY; YY++)
          for (let FY = 0; FY < DY; FY++) {
            const gY = (OY * AY + YY) * DY + FY,
              aY = rY[gY];
            if (1 === aY) {
              let rY = 0;
              for (const [DY, AY, IY] of bO) {
                const gY = RY(FY + DY, OY + AY, YY + IY);
                rY += 1 === gY || 2 === gY ? 1 : 0
              }
              IY[gY] = xO + Math.min(rY, HO)
            } else if (3 === aY) {
              const rY = bO.some((rY => {
                let [DY, AY, IY] = rY;
                return 1 === RY(FY + DY, OY + AY, YY + IY)
              }));
              IY[gY] = rY ? nO : PO
            } else 2 === aY && (IY[gY] = UO)
          }
      return IY
    }

    function tO(YY) {
      return YY.fuelHeat <= YY.cooling && YY.fuelHeat <= YY.size ? "fuel" : YY.cooling <= YY.size ? "cooling" : "size"
    }
    const Yg = dO;

    function rg(YY, rY, DY) {
      return Math.round(YY * rY * DY * 25e3 * (1 + .25 * (Math.min(YY, rY, DY) - 2)))
    }

    function Dg(YY) {
      return Math.max(0, Math.min(LY.e, YY))
    }

    function Fg(YY, rY, DY) {
      const FY = rY * Dg(DY);
      return YY <= 0 ? 0 : FY > 0 ? Math.min(200, 100 * YY / FY) : 200
    }

    function Ag(YY, rY) {
      const DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? JO : 1;
      return Math.min(YY.fuelHeat * DY, YY.cooling * Dg(rY), YY.size * DY)
    }

    function Ig(YY) {
      return 2 + YY / 10
    }
    const Rg = "buildAFactory2Game:";

    function Og(YY) {
      var rY;
      return null !== (rY = YY.baf2RxMood) && void 0 !== rY ? rY : function(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const DY = [
          ["calm", 50],
          ["warm", Yg],
          ["hot", hO]
        ];
        for (const [FY, AY] of DY)
          if (YY < AY + (FY === rY ? 3 : 0)) return FY;
        return "alarm"
      }(YY.baf2RxHeat)
    }
    const gg = 120;

    function ag(YY) {
      const rY = YY.baf2RxState;
      if ("running" === rY && YY.baf2RxHeat > hO) return {
        label: `${Rg}rxState_tooHot`,
        tone: "bad",
        fix: `${Rg}rxFix_tooHot`
      };
      switch (rY) {
        case "running":
          return {
            label: `${Rg}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${Rg}rxState_idle`, tone: "off", fix: `${Rg}rxFix_idle`
          };
        case "scram":
          return {
            label: `${Rg}rxState_scram`, tone: "off", fix: YY.baf2RxHeat < MO ? `${Rg}rxFix_scramCool` : `${Rg}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${Rg}rxState_${rY}`, tone: "off", fix: `${Rg}rxFix_${rY}`
          };
        case "melted":
          return {
            label: `${Rg}rxState_melted`, tone: "bad", fix: `${Rg}rxFix_melted`
          };
        default:
          return {
            label: `${Rg}rxState_${rY}`, tone: "warn", fix: `${Rg}rxFix_${rY}`
          }
      }
    }

    function vg(YY) {
      const [rY, DY, FY] = YY.baf2RxStats;
      return {
        fuelHeat: rY,
        cooling: DY * (YY.baf2RxCryo ? Math.max(1, Dg(YY.baf2RxWater / 100)) : 1),
        size: FY
      }
    }

    function ug(YY) {
      var rY;
      const DY = "idle" === YY.baf2RxState || "running" === YY.baf2RxState && YY.baf2RxHeat <= hO || "scram" === YY.baf2RxState && YY.baf2RxHeat < MO;
      if (0 === (YY.baf2RxFlags & ir) || !YY.baf2RxFormed || !DY) return null;
      const {
        fuelHeat: FY,
        cooling: AY,
        size: IY
      } = vg(YY), RY = Math.min(FY, AY, IY), OY = tO({
        fuelHeat: FY,
        cooling: AY,
        size: IY
      }), gY = "cooling" === OY && !0 === YY.baf2RxCryoOpen && !YY.baf2RxCryo, aY = null !== (rY = YY.baf2RxCells) && void 0 !== rY ? rY : "", vY = ("fuel" === OY || "cooling" === OY && !0 === YY.baf2RxCryo) && aY.length > 0 && !aY.includes(String(0)), uY = gY ? "Cryo" : "scram" === YY.baf2RxState ? "Off" : "";
      return RY < 12e3 ? {
        key: `${Rg}rxGrow_${vY?"full":OY}${uY}`,
        amount: RY
      } : null
    }

    function sg(YY, rY) {
      return YY[0] === rY[0] && YY[1] === rY[1] && YY[2] === rY[2]
    }

    function ig(YY) {
      return [...YY].sort(((YY, rY) => Number(rY[2] < rY[1]) - Number(YY[2] < YY[1])))
    }

    function yg(YY, rY) {
      return rY.some((rY => {
        let [DY, FY] = rY;
        return !(FY <= 0) && ["edge", "cap", "wall", "inside"].some((rY => DY === LD(YY, rY)))
      }))
    }

    function Qg(YY, rY, DY) {
      const FY = YY.baf2RxFuel - YY.baf2RxPu > 0 ? DY : 0;
      return {
        full: YY.baf2RxWaste > rY - 3,
        fullInS: FY > 0 ? Math.max(0, rY - YY.baf2RxWaste) / FY : null
      }
    }
    const og = {
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

    function Wg(YY) {
      return Eg[YY]
    }
    const Eg = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function mg(YY) {
      let [rY, DY, FY] = YY;
      return Math.ceil(qO(rY, DY, FY) * LY.r)
    }

    function Vg(YY, rY) {
      return "battery" === YY ? rY[0] * rY[1] * rY[2] : function(YY) {
        let [rY, DY, FY] = YY;
        return rY * DY * FY - Math.max(0, rY - 2) * Math.max(0, DY - 2) * Math.max(0, FY - 2)
      }(rY) - 1
    }

    function Sg(YY) {
      const rY = Math.max(0, YY);
      if (rY < 10) return String(Math.round(10 * rY) / 10);
      if (rY < 1e4) return Math.round(rY).toLocaleString("en-US");
      if (rY < 1e6) return `${rY<1e5?(Math.floor(rY/100)/10).toFixed(1):Math.floor(rY/1e3)}k`;
      const DY = rY / 1e6;
      return `${DY<10?(Math.floor(100*DY)/100).toFixed(2):DY<100?(Math.floor(10*DY)/10).toFixed(1):Math.floor(DY)}M`
    }

    function lg(YY) {
      return YY <= 0 ? "0" : YY >= 10 ? String(Math.round(YY)) : YY.toFixed(YY >= 1 ? 1 : 2)
    }

    function Tg(YY) {
      const rY = pD(YY, 0),
        DY = pD(YY, wD(YY) - 1);
      return {
        lo: [Math.min(rY[0], DY[0]), Math.min(rY[1], DY[1]), Math.min(rY[2], DY[2])],
        hi: [Math.max(rY[0], DY[0]) + 1, Math.max(rY[1], DY[1]) + 1, Math.max(rY[2], DY[2]) + 1]
      }
    }

    function eg(YY, rY, DY) {
      const FY = [rY[0] - YY[0], rY[1] - YY[1], rY[2] - YY[2]],
        AY = [(YY[0] + rY[0]) / 2, (YY[1] + rY[1]) / 2, (YY[2] + rY[2]) / 2],
        IY = [];
      for (let RY = 0; RY < 3; RY++) {
        const OY = (RY + 1) % 3,
          gY = (RY + 2) % 3;
        for (const aY of [YY[OY], rY[OY]])
          for (const vY of [YY[gY], rY[gY]]) {
            const YY = [0, 0, 0],
              rY = [DY, DY, DY];
            YY[RY] = AY[RY], rY[RY] = FY[RY] + DY, YY[OY] = aY, YY[gY] = vY, IY.push([YY, rY])
          }
      }
      return IY
    }
    const Ng = "buildAFactory2Game:",
      Bg = [`${Ng}colNorth`, `${Ng}colEast`, `${Ng}colSouth`, `${Ng}colWest`];

    function cg(YY, rY) {
      const [DY, FY, AY] = YY.baf2ColAt;
      return `baf2col ${DY} ${FY} ${AY} ${rY}`
    }

    function Kg(YY) {
      return function(YY) {
        if (!Number.isFinite(YY)) return "";
        const rY = Math.max(1, Math.round(YY));
        if (rY < 60) return `${rY}s`;
        const DY = rY % 60;
        return 0 === DY ? rY / 60 + "m" : `${Math.floor(rY/60)}m ${DY}s`
      }(function(YY) {
        const rY = tD.FOCUS_BY_LASERS[Math.max(0, Math.min(4, YY))];
        return rY > 0 ? tD.NOVA_FOCUS / rY : 1 / 0
      }(YY))
    }

    function Hg(YY) {
      const rY = Math.abs(Math.round(YY));
      return rY < 1e3 ? Math.round(YY).toLocaleString("en-US") : rY < 1e6 ? `${rY<1e5?(YY/1e3).toFixed(1).replace(/\.0$/,""):Math.round(YY/1e3)}k` : `${(YY/1e6).toFixed(rY<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function zg(YY, rY, DY) {
      if (IF(rY) >= 0) {
        const rY = function(YY, rY) {
          return YY.find((YY => {
            let {
              focus: DY
            } = YY;
            return DY[0] === rY[0] && DY[2] === rY[2] && (rY[1] === DY[1] || rY[1] === DY[1] - 1)
          }))
        }(YY, DY);
        if (!rY) return null;
        const AY = function(YY) {
          let rY = 0,
            DY = 0;
          for (let FY = 0; FY < 4; FY++) rY += YY.laser[FY] ? 1 : 0, DY += YY.live[FY] ? 1 : 0;
          return {
            lasers: rY,
            live: DY,
            focusPerS: tD.FOCUS_BY_LASERS[DY],
            drawPerS: tD.LASER_DRAW * DY
          }
        }({
          laser: rY.lasers,
          live: rY.live
        });
        if (0 === AY.lasers || "noLasers" === rY.state) return {
          key: `${Ng}lookColNoLasers`
        };
        if (0 === AY.live) return {
          key: `${Ng}lookColOff_blocked`
        };
        if (!(rY.on && AY.live > 0) && ("running" !== (FY = rY.state) && "slowed" !== FY)) return {
          key: `${Ng}lookColOff_${rY.state}`
        };
        if (AY.live < AY.lasers) return {
          key: `${Ng}lookColLasersSome`,
          params: {
            lasers: String(AY.lasers),
            live: String(AY.live)
          }
        };
        const IY = rY.open.filter(Boolean).length;
        return IY < 4 ? {
          key: `${Ng}lookColLasersSpots`,
          params: {
            live: String(AY.live),
            spots: String(IY),
            time: Kg(AY.live)
          }
        } : {
          key: `${Ng}lookColLasers`,
          params: {
            live: String(AY.live),
            time: Kg(AY.live)
          }
        }
      }
      var FY;
      if (!RF(rY)) return null;
      const AY = function(YY, rY) {
        for (const DY of YY) {
          const YY = vF(DY.focus, [rY[0], rY[1], rY[2]]);
          if (YY && YY.Ua === tD.LASER_D && DY.lasers[YY.dir]) return {
            entry: DY,
            dir: YY.dir
          }
        }
        return null
      }(YY, DY);
      if (!AY) return {
        key: `${Ng}lookLaserNoCollider`
      };
      const {
        entry: IY,
        dir: RY
      } = AY;
      return IY.open[RY] ? IY.live[RY] ? {
        key: IY.on ? `${Ng}lookLaserFiring` : `${Ng}lookLaserReady`
      } : {
        key: `${Ng}lookLaserBlocked`
      } : {
        key: `${Ng}lookLaserClosed`
      }
    }

    function Zg(YY, rY) {
      const DY = [];
      for (let FY = 1; FY < tD.LASER_D; FY++) YY & 1 << rY * (tD.LASER_D - 1) + FY - 1 && DY.push(FY);
      return DY
    }
    const Cg = {
      firing: `${Ng}colSlotFiring`,
      ready: `${Ng}colSlotReady`,
      blocked: `${Ng}colSlotBlocked`,
      empty: `${Ng}colSlotEmpty`,
      closed: `${Ng}colSlotClosed`
    };

    function fg(YY, rY, DY, FY) {
      let AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const IY = LF(YY),
        RY = LF(rY),
        OY = LF(DY),
        gY = OY.filter(Boolean).length,
        aY = IY.filter(Boolean).length,
        vY = [0, 1, 2, 3].map((YY => RY[YY] ? IY[YY] ? OY[YY] ? FY ? "firing" : "ready" : "blocked" : (YY => Zg(AY, YY).length > 0)(YY) ? "blocked" : "empty" : "closed")),
        uY = vY.indexOf("blocked"),
        sY = uY < 0 && aY > 0 ? vY.indexOf("empty") : -1;
      return vY.map(((YY, rY) => {
        const DY = rY === uY ? {
          key: `${Ng}colSlotClear`
        } : rY === sY ? {
          key: `${Ng}colSlotAdd`,
          params: {
            time: Kg(Math.min(4, gY + 1))
          }
        } : null;
        return {
          dir: rY,
          tone: YY,
          title: {
            key: "blocked" !== YY || IY[rY] ? Cg[YY] : `${Ng}colSlotGap`,
            keys: {
              dir: Bg[rY]
            }
          },
          hint: DY
        }
      }))
    }

    function jg(YY) {
      var rY;
      return "noPower" === YY.baf2ColState && YY.baf2ColRxState ? ag({
        baf2RxState: YY.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (rY = YY.baf2ColRxHeat) && void 0 !== rY ? rY : 0
      }) : null
    }

    function hg(YY) {
      const rY = LF(YY.baf2ColSpots).filter(Boolean).length,
        DY = LF(YY.baf2ColLive);
      let FY = 0,
        AY = 0;
      return LF(YY.baf2ColLasers).forEach(((YY, rY) => {
        YY && (FY++, AY += DY[rY] ? 0 : 1)
      })), AY > 0 ? {
        key: `${Ng}colSubSome`,
        params: {
          blocked: String(AY),
          lasers: String(FY)
        }
      } : rY < 4 ? {
        key: `${Ng}colSubSpots`,
        params: {
          lasers: String(FY),
          spots: String(rY)
        }
      } : {
        key: `${Ng}colSub`,
        params: {
          lasers: String(FY)
        }
      }
    }

    function dg(YY) {
      const rY = jg(YY);
      if ("idle" === YY.baf2ColRxState && rY) return {
        key: `${Ng}colState_noPowerIdle`
      };
      if (rY) return {
        key: `${Ng}colState_noPowerReactor`,
        keys: {
          state: rY.label
        }
      };
      if ("noInput" !== YY.baf2ColState) return {
        key: `${Ng}colState_${YY.baf2ColState}`
      };
      const DY = String(Math.max(0, tD.NOVA_SA - YY.baf2ColSa)),
        FY = String(Math.max(0, tD.NOVA_GD - YY.baf2ColGd));
      return "0" !== DY && "0" !== FY ? {
        key: `${Ng}colState_noInput`,
        params: {
          sa: DY,
          gd: FY
        }
      } : "0" !== DY ? {
        key: `${Ng}colState_noStarAlloy`,
        params: {
          sa: DY
        }
      } : "0" !== FY ? {
        key: `${Ng}colState_noGlowDust`,
        params: {
          gd: FY
        }
      } : {
        key: `${Ng}colState_running`
      }
    }

    function Jg(YY) {
      return YY.baf2ColP < 0 ? `${Ng}colNext` : function(YY) {
        const rY = YY.baf2ColState;
        return YY.baf2ColP >= 0 && ("blocked" === rY || "noLasers" === rY || "noPower" === rY)
      }(YY) ? `${Ng}colStalled` : null === Mg(YY) ? `${Ng}colMaking` : `${Ng}colNovaIn`
    }

    function Mg(YY) {
      if (YY.baf2ColP < 0 || YY.baf2ColWant <= 0) return null;
      const rY = YY.baf2ColFocusPerS * Math.min(1, YY.baf2ColDraw / YY.baf2ColWant);
      return rY > 0 ? Math.max(0, tD.NOVA_FOCUS - YY.baf2ColP) / rY : null
    }

    function wg(YY, rY) {
      const DY = [];
      for (let FY = 1; FY <= 3; FY++) {
        const AY = [YY[0], YY[1] - FY, YY[2]];
        if (!rY(AY)) return DY;
        DY.push(AY)
      }
      return []
    }

    function bg(YY, rY) {
      const DY = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let FY = 0; FY < 4; FY++) {
        const AY = FY,
          IY = aF(YY.focus, AY, tD.LASER_D);
        if (YY.lasers[FY] || !YY.open[FY] || !rY(IY)) continue;
        const RY = [];
        for (let DY = 1; DY < tD.LASER_D; DY++) {
          const FY = aF(YY.focus, AY, DY);
          rY(FY) || RY.push(FY)
        }
        DY.supports.push(...wg(IY, rY)), 0 === RY.length ? DY.free.push(IY) : (DY.blocked.push(IY), DY.gaps.push(...RY))
      }
      return DY
    }
    const Xg = tD.LASER_D - .25,
      qg = 4,
      pg = 2,
      kg = 16;
    const Gg = {
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
        blendMode: BO.g.Standard,
        soft: !0
      },
      xg = {
        green: Gg,
        pink: {
          ...Gg,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function ng(YY, rY) {
      const DY = {
        ...rY.params
      };
      for (const [AY, IY] of Object.entries(null !== (FY = rY.keys) && void 0 !== FY ? FY : {})) {
        var FY;
        DY[AY] = YY(IY)
      }
      return DY
    }
    const Pg = "buildAFactory2Game:",
      Ug = 2 * tD.LASER_D + 1,
      Lg = tD.LASER_D;

    function tg(YY) {
      return YY(`${Pg}colFocusTip`, {
        need: Hg(tD.NOVA_FOCUS)
      })
    }

    function Ya(YY, rY) {
      return YY(rY.key, ng(YY, rY))
    }

    function ra(YY) {
      const rY = YY.getStatus();
      return {
        status: rY,
        entry: rY ? YY.entryAtRoot(rY.baf2ColAt) : void 0
      }
    }

    function Da(YY, rY) {
      return {
        left: 100 * (Lg + YY) / Ug + "%",
        top: 100 * (Lg + rY) / Ug + "%"
      }
    }

    function Fa(YY) {
      let {
        status: rY,
        entry: DY
      } = YY;
      const FY = LF(rY.baf2ColLasers),
        AY = LF(rY.baf2ColSpots),
        IY = LF(rY.baf2ColLive),
        RY = !0 === (null === DY || void 0 === DY ? void 0 : DY.on),
        OY = tD.LASER_D,
        gY = [];
      for (let iY = 0; iY < 4; iY++) {
        const [YY, , rY] = gF[iY];
        if (IY[iY]) {
          const DY = 100 * (OY - 1) / Ug,
            FY = YY + rY > 0 ? 100 * (Lg + 1) / Ug : 100 * (Lg - (OY - 1)) / Ug,
            AY = 100 * (Lg + .35) / Ug,
            IY = 30 / Ug,
            aY = 0 !== YY ? {
              left: `${FY}%`,
              width: `${DY}%`,
              top: `${AY}%`,
              height: `${IY}%`
            } : {
              top: `${FY}%`,
              height: `${DY}%`,
              left: `${AY}%`,
              width: `${IY}%`
            };
          gY.push((0, WI.jsx)("i", {
            className: QA()("Baf2ColDiagramBeam", {
              Off: !RY
            }),
            style: aY
          }, `beam${iY}`))
        }
        const DY = FY[iY] ? "Baf2ColDiagramLaser" : AY[iY] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        gY.push((0, WI.jsx)("i", {
          className: DY,
          style: Da(YY * OY, rY * OY)
        }, `spot${iY}`))
      }
      for (let iY = 0; iY < 4; iY++) {
        if (FY[iY] || !AY[iY]) continue;
        const [YY, , DY] = gF[iY];
        for (const FY of Zg(null !== (aY = rY.baf2ColGaps) && void 0 !== aY ? aY : 0, iY)) {
          var aY;
          gY.push((0, WI.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: Da(YY * FY, DY * FY)
          }, `gap${iY},${FY}`))
        }
      }
      for (const [iY, , yY] of null !== (vY = null === DY || void 0 === DY ? void 0 : DY.blockers) && void 0 !== vY ? vY : []) {
        var vY, uY, sY;
        const YY = iY - (null !== (uY = null === DY || void 0 === DY ? void 0 : DY.focus[0]) && void 0 !== uY ? uY : 0),
          rY = yY - (null !== (sY = null === DY || void 0 === DY ? void 0 : DY.focus[2]) && void 0 !== sY ? sY : 0);
        gY.push((0, WI.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: Da(YY, rY)
        }, `block${YY},${rY}`))
      }
      return (0, WI.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [gY, (0, WI.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function Aa(YY) {
      let {
        status: rY
      } = YY;
      const {
        t: DY
      } = (0, mA.C)(), FY = LF(rY.baf2ColLive).filter(Boolean).length;
      return (0, WI.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, WI.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: tg(DY),
          children: DY(`${Pg}colLadder`)
        }), (0, WI.jsx)("ul", {
          children: [1, 2, 3, 4].map((YY => (0, WI.jsx)("li", {
            className: QA()({
              On: YY === FY
            }),
            children: DY(`${Pg}colLadderChip`, {
              lasers: String(YY),
              time: Kg(YY)
            })
          }, YY)))
        })]
      })
    }

    function Ia(YY) {
      let {
        item: rY,
        ja: DY,
        need: FY,
        cap: AY
      } = YY;
      const {
        t: IY
      } = (0, mA.C)(), RY = Math.min(DY, FY);
      return (0, WI.jsxs)("li", {
        className: QA()("Baf2ColTile", {
          Short: DY < FY
        }),
        children: [(0, WI.jsx)(Ra, {
          item: rY
        }), (0, WI.jsx)("b", {
          className: "Baf2ColTileValue",
          children: IY(`${Pg}colOutOf`, {
            amount: String(RY),
            cap: String(FY)
          })
        }), (0, WI.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, WI.jsx)("i", {
            style: {
              width: 100 * RY / FY + "%"
            }
          })
        }), DY > FY && (0, WI.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: IY(`${Pg}colIntakeHeld`, {
            amount: String(DY),
            cap: String(AY)
          })
        })]
      })
    }

    function Ra(YY) {
      let {
        item: rY
      } = YY;
      const {
        t: DY
      } = (0, mA.C)();
      return (0, WI.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, WI.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, WI.jsx)(SA.c, {
            itemName: rY,
            amount: 0
          })
        }), (0, WI.jsx)("span", {
          className: "Baf2ColTileName",
          children: PA(DY, rY)
        })]
      })
    }

    function Oa(YY) {
      switch (YY.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function ga(YY) {
      var rY, DY, AY;
      let {
        store: IY,
        close: RY
      } = YY;
      const {
        t: OY
      } = (0, mA.C)(), gY = CR(), {
        status: aY,
        entry: vY
      } = function(YY) {
        const [rY, DY] = (0, FY.useState)((() => ra(YY)));
        return (0, FY.useEffect)((() => (DY(ra(YY)), YY.subscribe((() => {
          DY(ra(YY))
        })))), [YY]), rY
      }(IY), [uY, sY] = (0, FY.useState)(null), iY = null === aY || void 0 === aY ? void 0 : aY.baf2ColHold;
      (0, FY.useEffect)((() => {
        sY(null)
      }), [iY]);
      const yY = (0, FY.useRef)({
          p: -1,
          n: 0
        }),
        QY = null !== (rY = null === aY || void 0 === aY ? void 0 : aY.baf2ColP) && void 0 !== rY ? rY : -1;
      QY < yY.current.p && yY.current.n++, yY.current.p = QY;
      const oY = (0, FY.useRef)(null),
        [WY] = (0, FY.useState)((() => {
          return (YY = IY.heldAtOpen()) === DF || YY === FF ? {
            key: `${Ng}colBeltItIn`,
            item: YY
          } : null;
          var YY
        }));
      if (!aY) return null;
      const EY = aY.baf2ColMember,
        mY = aY.baf2ColP >= 0,
        VY = function(YY, rY) {
          if (YY.baf2ColP >= 0 && YY.baf2ColDraw > 0) {
            const rY = YY.baf2ColWant > 0 ? Math.min(1, YY.baf2ColDraw / YY.baf2ColWant) : 0;
            return {
              focus: YY.baf2ColFocusPerS * rY,
              draw: YY.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === YY.baf2ColState && rY && rY.draw > 0 ? {
            ...rY,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(aY, oY.current);
      oY.current = VY.draw > 0 ? VY : null;
      const SY = "slowed" === aY.baf2ColState || "noPower" === aY.baf2ColState,
        lY = Mg(aY),
        TY = null !== uY && void 0 !== uY ? uY : aY.baf2ColHold,
        eY = function(YY) {
          var rY, DY;
          return "idle" === YY.baf2ColRxState ? null : null !== (rY = null === (DY = jg(YY)) || void 0 === DY ? void 0 : DY.fix) && void 0 !== rY ? rY : null
        }(aY),
        NY = null === eY && null === WY ? function(YY) {
          var rY;
          const DY = YY.baf2ColSentTo;
          if (!DY) return null;
          const FY = null !== (rY = YY.baf2ColSentHeld) && void 0 !== rY ? rY : null;
          return {
            key: null === FY ? `${Ng}colNovaSentToMachine` : `${Ng}colNovaSentTo`,
            target: DY,
            ja: FY
          }
        }(aY) : null,
        BY = mY ? OY(`${Pg}colFocusOf`, {
          focus: Hg(aY.baf2ColP),
          need: Hg(tD.NOVA_FOCUS)
        }) : null;
      return (0, WI.jsx)(iR.e, {
        close: RY,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, WI.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, WI.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, WI.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, WI.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, WI.jsx)(SA.c, {
                  itemName: YF,
                  amount: 0
                })
              }), (0, WI.jsxs)("div", {
                children: [(0, WI.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: PA(OY, YF)
                }), (0, WI.jsx)("p", {
                  children: Ya(OY, hg(aY))
                })]
              })]
            }), (0, WI.jsx)(yR.k, {
              onClick: RY
            })]
          }), (0, WI.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, WI.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, WI.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, WI.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: OY(Jg(aY), {
                    time: null === lY ? "" : iI(OY, lY)
                  })
                }), (0, WI.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, WI.jsx)("i", {
                    style: {
                      width: (mY ? 100 * aY.baf2ColP / tD.NOVA_FOCUS : 0) + "%"
                    }
                  }, yY.current.n)
                }), (0, WI.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, WI.jsxs)("span", {
                    title: tg(OY),
                    children: [(0, WI.jsx)("b", {
                      children: Hg(VY.focus)
                    }), " ", OY(`${Pg}colFocusPerS`)]
                  }), (0, WI.jsxs)("span", {
                    className: QA()("Baf2ColDraw", {
                      Short: SY
                    }),
                    children: [(0, WI.jsx)(VA.e, {
                      name: "bolt"
                    }), SY ? OY(`${Pg}colDrawOf`, {
                      draw: Hg(aY.baf2ColDraw),
                      want: Hg(aY.baf2ColWant)
                    }) : OY(`${Pg}colPowerPerS`, {
                      rate: Hg(VY.draw)
                    })]
                  }), null !== BY && (0, WI.jsx)("span", {
                    className: "Soft",
                    children: BY
                  })]
                })]
              }), (0, WI.jsx)("p", {
                className: QA()("Baf2ColState", Oa(aY)),
                children: Ya(OY, dg(aY))
              }), null !== eY && (0, WI.jsx)("p", {
                className: "Baf2ColStateFix",
                children: OY(eY)
              }), null === eY && null !== WY && (0, WI.jsx)("p", {
                className: "Baf2ColStateFix",
                children: OY(WY.key, {
                  item: PA(OY, WY.item)
                })
              }), NY && (0, WI.jsx)("p", {
                className: "Baf2ColStateFix",
                children: OY(NY.key, {
                  target: PA(OY, NY.target),
                  amount: String(null !== (DY = NY.ja) && void 0 !== DY ? DY : 0)
                })
              }), (0, WI.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, WI.jsx)(Ia, {
                  item: DF,
                  ja: aY.baf2ColSa,
                  need: tD.NOVA_SA,
                  cap: tD.SA_CAP
                }), (0, WI.jsx)(Ia, {
                  item: FF,
                  ja: aY.baf2ColGd,
                  need: tD.NOVA_GD,
                  cap: tD.GD_CAP
                }), (0, WI.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, WI.jsx)(Ra, {
                    item: "Nova Matter"
                  }), (0, WI.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: OY(`${Pg}colNovaHeld`, {
                      amount: String(aY.baf2ColOut),
                      cap: String(tD.OUT_CAP)
                    })
                  }), EY && (0, WI.jsx)(yR.n, {
                    className: "Baf2ColTake",
                    disabled: 0 === aY.baf2ColOut,
                    onClick: () => {
                      gY.send(cg(aY, "take"))
                    },
                    children: OY(`${Pg}colTake`)
                  })]
                })]
              }), EY && (0, WI.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": TY,
                className: QA()("Baf2ColHold", {
                  On: TY
                }),
                onClick: YY => {
                  YY.detail > 0 && YY.currentTarget.blur(), sY(!TY), gY.send(cg(aY, "hold " + (TY ? 0 : 1)))
                },
                children: [(0, WI.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, WI.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, WI.jsx)("b", {
                    children: OY(`${Pg}colHold`)
                  }), (0, WI.jsx)("span", {
                    children: OY(`${Pg}colHoldNote`)
                  })]
                })]
              })]
            }), (0, WI.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, WI.jsx)(Fa, {
                status: aY,
                entry: vY
              }), (0, WI.jsx)("ul", {
                className: "Baf2ColSlots",
                children: fg(aY.baf2ColLasers, aY.baf2ColSpots, aY.baf2ColLive, VY.beamsOn, null !== (AY = aY.baf2ColGaps) && void 0 !== AY ? AY : 0).map((YY => (0, WI.jsxs)("li", {
                  className: YY.tone,
                  children: [(0, WI.jsx)("b", {
                    children: Ya(OY, YY.title)
                  }), null !== YY.hint && (0, WI.jsx)("span", {
                    children: Ya(OY, YY.hint)
                  })]
                }, YY.dir)))
              }), (0, WI.jsx)(Aa, {
                status: aY
              })]
            })]
          })]
        })
      })
    }
    const aa = "buildAFactory2Game:",
      va = 36e5,
      ua = 864e5;

    function sa(YY, rY, DY) {
      return Math.max(0, Math.ceil((YY + rY - Math.max(DY, YY)) / 1e3))
    }

    function ia(YY) {
      return YY.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function ya(YY) {
      return "Homestead" === YY
    }

    function Qa(YY) {
      return function(YY) {
        let rY = 0;
        for (const DY of YY) {
          const YY = /^Island ([1-9]\d{0,5})$/.exec(DY);
          YY && (rY = Math.max(rY, Number(YY[1])))
        }
        return `Island ${rY+1}`
      }(YY.map((YY => YY.baf2IslandName)))
    }

    function oa(YY, rY) {
      return function(YY) {
        return `${aa}islandsBlocked${YY[0].toUpperCase()}${YY.slice(1)}`
      }("degraded" === YY && 0 === rY ? "stuck" : YY)
    }

    function Wa(YY) {
      return YY.filter((YY => {
        var rY;
        return !YY.baf2IslandActive && void 0 === YY.baf2IslandUnreadable && void 0 === (null === (rY = YY.baf2IslandCoop) || void 0 === rY ? void 0 : rY.baf2CoopState)
      })).length
    }

    function Ea(YY) {
      return "coopMoving" === YY || "coopUnreachable" === YY
    }

    function ma(YY, rY) {
      const DY = rY > 0;
      return {
        change: null === YY && !DY,
        switch: (null === YY || "degraded" === YY || Ea(YY)) && !DY,
        rename: "loading" !== YY && "degraded" !== YY && "stuck" !== YY
      }
    }

    function Va(YY, rY) {
      return void 0 === YY || "corrupt" === YY && rY
    }
    const Sa = NR;

    function la(YY, rY, DY) {
      if (null !== YY && void 0 !== YY && YY.untilGone) {
        var FY;
        return !("dismiss" === YY.untilGone && void 0 === (null === (FY = rY.baf2IslandCoop) || void 0 === FY ? void 0 : FY.baf2CoopState)) && DY - YY.atMs < 32500
      }
      return void 0 !== YY && DY - YY.atMs < Sa && rY.baf2IslandName === YY.from
    }
    const Ta = NR;

    function ea(YY) {
      return "core" === (null === YY || void 0 === YY ? void 0 : YY.kind) ? YY.core : "islands" === (null === YY || void 0 === YY ? void 0 : YY.kind) ? YY.backToCore : void 0
    }

    function Na(YY) {
      return `\0${YY}\0`
    }

    function Ba(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const FY = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const IY of Object.keys(DY)) FY[IY] = Na(IY);
      let AY = Object.keys(FY).length > 0 ? YY(rY, FY) : YY(rY);
      for (const [IY, RY] of Object.entries(DY)) AY = AY.split(Na(IY)).join(RY);
      return AY
    }

    function ca(YY, rY) {
      return YY ? rY ? "enabled" : "disabled" : "hidden"
    }
    const Ka = {
      removed: `${aa}islandsCoopRemoved`,
      deleted: `${aa}islandsCoopDeleted`,
      notReady: `${aa}islandsCoopNotReady`,
      gone: `${aa}islandsCoopGone`
    };

    function Ha(YY) {
      var rY;
      return "member" !== (null === (rY = YY.baf2IslandCoop) || void 0 === rY ? void 0 : rY.baf2CoopRole) && "newer" !== YY.baf2IslandUnreadable
    }

    function za(YY, rY, DY, FY, AY) {
      const IY = YY.baf2IslandActive,
        RY = YY.baf2IslandUnreadable,
        OY = YY.baf2IslandCoop,
        gY = function(YY, rY, DY) {
          return {
            switch: YY.switch && void 0 === rY,
            delete: YY.change && Va(rY, DY)
          }
        }(rY, RY, FY),
        aY = {
          switch: ca(!IY && void 0 === RY, gY.switch),
          rename: ca(!0, rY.rename),
          delete: ca(!IY, gY.delete),
          deleteWaits: !IY && Va(RY, FY),
          people: ca(void 0 !== YY.baf2IslandInvitable || AY && IY && void 0 === RY && void 0 === OY, !0),
          peopleLabel: "invite",
          leave: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        vY = !IY && gY.delete;
      if (void 0 === OY) return DY ? {
        ...aY,
        delete: ca(!IY, !1),
        deleteWaits: !1,
        note: vY ? {
          key: `${aa}islandsCoopKeepOwn`
        } : null
      } : aY;
      const uY = OY.baf2CoopState,
        sY = OY.baf2CoopMembers.length > 1,
        iY = {
          ...aY,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== uY && "member" === OY.baf2CoopRole) return {
        ...iY,
        dismiss: ca(!0, rY.rename),
        note: {
          key: Ka[uY],
          names: {
            owner: OY.baf2CoopOwner
          }
        }
      };
      if (void 0 !== uY) {
        let YY = {
          key: `${aa}islandsCoopOwnLost`
        };
        return vY && sY ? YY = {
          key: `${aa}islandsCoopDeleteMembers`
        } : vY && DY && (YY = {
          key: `${aa}islandsCoopKeepOwn`
        }), {
          ...iY,
          delete: ca(!IY, gY.delete && !sY && !DY),
          deleteWaits: aY.deleteWaits && !sY && !DY,
          note: YY
        }
      }
      if ("member" === OY.baf2CoopRole) return {
        ...aY,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        leave: ca(!0, IY ? rY.switch : rY.rename)
      };
      const yY = OY.baf2CoopManageHere;
      let QY = null;
      var oY;
      yY ? vY && sY ? QY = {
        key: `${aa}islandsCoopDeleteMembers`
      } : vY && DY && (QY = {
        key: `${aa}islandsCoopKeepOwn`
      }) : QY = {
        key: null !== (oY = OY.baf2CoopLeft) && void 0 !== oY && oY.length ? `${aa}islandsCoopManageThereClaim` : `${aa}islandsCoopManageThere`
      };
      return {
        ...aY,
        rename: ca(!0, rY.rename && yY),
        delete: ca(!IY, gY.delete && !sY && !DY),
        deleteWaits: aY.deleteWaits && !sY && !DY,
        people: "enabled",
        peopleLabel: "players",
        unshare: ca(yY && IY && !sY, rY.change),
        remove: yY,
        note: QY
      }
    }

    function Za(YY) {
      var rY;
      const DY = YY.baf2IslandCoop;
      if ("owner" !== (null === DY || void 0 === DY ? void 0 : DY.baf2CoopRole) || void 0 !== DY.baf2CoopState || null === (rY = DY.baf2CoopLeft) || void 0 === rY || !rY.length) return null;
      const FY = YY.baf2IslandActive && DY.baf2CoopManageHere;
      return {
        left: DY.baf2CoopLeft,
        claim: FY,
        goThere: !FY && DY.baf2CoopManageHere
      }
    }

    function Ca(YY) {
      return YY.baf2CoopMembers.length >= YY.baf2CoopMax
    }

    function fa(YY, rY, DY) {
      return void 0 !== YY && rY < YY.answer && DY - YY.atMs < Sa
    }
    const ja = "buildAFactory2Game:";

    function ha(YY, rY) {
      return {
        onKeyDown: DY => {
          DY.stopPropagation(), DY.nativeEvent.isComposing || 229 === DY.nativeEvent.keyCode || ("Enter" === DY.key ? (DY.preventDefault(), YY()) : "Escape" === DY.key && (DY.preventDefault(), rY()))
        }
      }
    }

    function da(YY) {
      return {
        onKeyDown: rY => {
          "Escape" !== rY.key || rY.nativeEvent.isComposing || (rY.preventDefault(), rY.stopPropagation(), YY())
        }
      }
    }

    function Ja(YY) {
      YY.currentTarget.select()
    }

    function Ma(YY, rY) {
      (0, FY.useEffect)((() => {
        var DY;
        YY && (null === (DY = rY.current) || void 0 === DY || DY.scrollIntoView({
          block: "nearest"
        }))
      }), [YY, rY])
    }

    function wa(YY) {
      const [rY, DY] = (0, FY.useState)(null);
      return (0, FY.useEffect)((() => {
        const rY = document.querySelector(".UiRequests"),
          FY = YY.current;
        if (!rY || !FY || "undefined" === typeof ResizeObserver) return;
        const AY = () => {
          const YY = rY.getBoundingClientRect(),
            AY = FY.getBoundingClientRect(),
            IY = FY.parentElement,
            RY = IY && parseFloat(getComputedStyle(IY).paddingTop) || 0,
            OY = function(YY, rY, DY, FY) {
              if (!YY || YY.height <= 0 || YY.right <= rY.left || YY.left >= rY.right) return null;
              const AY = Math.max(FY, YY.bottom + 8);
              return {
                marginTop: Math.round(AY - FY),
                maxHeight: Math.max(0, Math.floor(DY - AY - FY))
              }
            }(YY, AY, window.innerHeight, RY);
          DY((YY => (null === YY || void 0 === YY ? void 0 : YY.marginTop) === (null === OY || void 0 === OY ? void 0 : OY.marginTop) && (null === YY || void 0 === YY ? void 0 : YY.maxHeight) === (null === OY || void 0 === OY ? void 0 : OY.maxHeight) ? YY : OY))
        };
        AY();
        const IY = new ResizeObserver(AY);
        return IY.observe(rY), window.addEventListener("resize", AY), () => {
          IY.disconnect(), window.removeEventListener("resize", AY)
        }
      }), [YY]), rY
    }

    function ba(YY) {
      (0, FY.useEffect)((() => {
        var rY;
        null === (rY = YY.current) || void 0 === rY || rY.focus()
      }), [YY])
    }

    function Xa(YY) {
      const [rY, DY] = (0, FY.useState)(Date.now);
      return (0, FY.useEffect)((() => {
        const rY = window.setInterval((() => {
          DY(Date.now())
        }), YY);
        return () => {
          window.clearInterval(rY)
        }
      }), [YY]), rY
    }

    function qa(YY) {
      let {
        tier: rY,
        t: DY
      } = YY;
      const {
        kind: FY,
        short: AY
      } = oY(rY), IY = iY(rY, yY), RY = DY(`${ja}${IY.key}`, {
        ...IY.params,
        name: DY(`${ja}${WY(rY).nameKey}`)
      });
      return (0, WI.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, WI.jsx)("span", {
          className: QA()("Baf2IslandTierPip", {
            Stage: "tier" !== FY
          }),
          "aria-hidden": "true",
          children: AY
        }), RY]
      })
    }

    function pa(YY) {
      let {
        note: rY,
        className: DY,
        t: FY
      } = YY;
      return (0, WI.jsx)("p", {
        className: QA()("Baf2IslandNote", DY),
        children: Ba(FY, rY.key, rY.names, rY.params)
      })
    }
    const ka = "buildAFactory2Game:";

    function Ga(YY) {
      let {
        message: rY,
        arrivedAtMs: DY,
        close: AY,
        leave: IY
      } = YY;
      const RY = CR(),
        {
          t: OY
        } = (0, mA.C)(),
        gY = Xa(1e3),
        aY = (0, FY.useRef)(null);
      (0, FY.useEffect)((() => {
        var YY;
        null === (YY = aY.current) || void 0 === YY || YY.focus()
      }), []);
      const vY = sa(DY, rY.baf2TransferInMs, gY),
        uY = DY + rY.baf2TransferInMs - 1e3,
        [sY, iY] = (0, FY.useState)(null);
      (0, FY.useEffect)((() => {
        const YY = window.setTimeout((() => {
          iY(uY)
        }), Math.max(0, uY - Date.now()));
        return () => {
          window.clearTimeout(YY)
        }
      }), [uY]);
      const yY = sY === uY || gY >= uY,
        QY = rY.baf2TransferIsland,
        oY = rY.baf2TransferOwner;
      return (0, WI.jsx)(iR.e, {
        close: AY,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, WI.jsxs)("section", {
          ref: aY,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, WI.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, WI.jsxs)("div", {
              children: [(0, WI.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === oY ? Ba(OY, `${ka}islandsTransferOwn`, {
                  island: QY
                }) : Ba(OY, `${ka}islandsTransfer`, {
                  island: QY,
                  owner: oY
                })
              }), (0, WI.jsx)("p", {
                children: yY ? OY(`${ka}islandsTransferNow`) : OY(`${ka}islandsTransferIn`, {
                  time: iI(OY, vY)
                })
              })]
            }), (0, WI.jsx)(yR.k, {
              ariaLabel: OY(`${ka}islandsClose`),
              onClick: AY
            })]
          }), !yY && (0, WI.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, WI.jsx)("p", {
              className: "Baf2TransferNote",
              children: OY(`${ka}islandsTransferNote`)
            }), (0, WI.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, WI.jsx)(yR.f, {
                onClick: () => {
                  RY.send("baf2coopstay"), IY()
                },
                children: OY(`${ka}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var xa = DY(1430),
      na = DY(36116),
      Pa = DY.n(na);
    const Ua = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const La = "buildAFactory2Game:",
      ta = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function Yv(YY, rY, DY) {
      return void 0 === rY ? DY : "string" === typeof rY ? rY : Array.isArray(rY) ? rY.map((rY => "string" === typeof rY ? rY : "translationKey" in rY ? YY(rY.translationKey) : "")).join("") : YY(rY.translationKey)
    }

    function rv(YY) {
      const rY = {};
      for (const [DY, FY] of Object.entries(null !== YY && void 0 !== YY ? YY : {})) rY[DY] = FY < 0 ? sI(FY) : FY.toLocaleString("en-US");
      return rY
    }

    function Dv(YY, rY) {
      const DY = rY ? "touch" : "mouse";
      return {
        use: YY(`${La}lookUse_${DY}`),
        Use: YY(`${La}lookUseStart_${DY}`)
      }
    }
    const Fv = (0, FY.memo)((function(YY) {
      let {
        item: rY
      } = YY;
      return (0, WI.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, WI.jsx)(SA.c, {
          itemName: rY,
          amount: 0
        })
      })
    }));

    function Av(YY) {
      let {
        label: rY,
        percent: DY,
        progress: FY
      } = YY;
      return (0, WI.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, WI.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${rY}: ${FY}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": DY,
          children: (0, WI.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${DY}%`
            }
          })
        }), (0, WI.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: FY
        })]
      })
    }

    function Iv(YY) {
      let {
        chips: rY
      } = YY;
      return (0, WI.jsx)("span", {
        className: "Baf2QuestChips",
        children: rY.map((YY => {
          let [rY, DY, FY] = YY;
          const AY = DY >= FY;
          return (0, WI.jsxs)("span", {
            className: QA()("Baf2QuestChip", {
              Met: AY
            }),
            children: [(0, WI.jsx)(Fv, {
              item: rY
            }), (0, WI.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: AY ? `\u2713${FY}` : `${DY}/${FY}`
            })]
          }, rY)
        }))
      })
    }

    function Rv(YY, rY) {
      const {
        key: DY,
        params: FY
      } = iY(rY, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return YY(`${La}${DY}`, {
        ...FY,
        name: YY(`${La}${WY(rY).nameKey}`)
      })
    }

    function Ov(YY) {
      let {
        core: rY,
        t: DY
      } = YY;
      const [FY, AY] = rY, IY = AY > 0 ? Math.floor(100 * FY / AY) : 100;
      return (0, WI.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": DY(`${La}questCoreLabel`, {
          have: String(FY),
          need: String(AY)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": IY,
        children: [(0, WI.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: DY(`${La}questCore`, {
            percent: String(IY)
          })
        }), (0, WI.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, WI.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${IY}%`
            }
          })
        })]
      })
    }

    function gv(YY) {
      let {
        rows: rY,
        t: DY
      } = YY;
      const FY = rY.filter((YY => YY.done)).length;
      return (0, WI.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": DY(`${La}questStepsProgress`, {
          done: String(FY),
          total: String(rY.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": rY.length,
        "aria-valuenow": FY,
        children: rY.map((YY => (0, WI.jsx)("span", {
          className: QA()("Baf2QuestSegment", {
            Done: YY.done,
            Current: YY.current
          })
        }, YY.id)))
      })
    }
    const av = (0, FY.memo)(uv, vv);

    function vv(YY, rY) {
      const DY = DY => YY.view.itemNames[DY] === rY.view.itemNames[DY];
      return YY.t === rY.t && YY.extra === rY.extra && (null === YY.row.item || DY(YY.row.item)) && YY.row.madeFor.every(DY) && YY.row.also.every(DY) && Pa()(YY.row, rY.row)
    }

    function uv(YY) {
      let {
        row: rY,
        view: DY,
        t: FY,
        extra: AY
      } = YY;
      const {
        isTouchScreen: IY
      } = (0, sA.j)(["isTouchScreen"]), RY = rY.item ? function(YY, rY, DY) {
        return 1 !== DY && Ua.has(YY) ? EA(rY) : null
      }(rY.key, rY.item, rY.total) : null, OY = RY ? FY(RY) : rY.item ? Yv(FY, DY.itemNames[rY.item], rY.item) : "", gY = rY.also.map((YY => Yv(FY, DY.itemNames[YY], YY))), aY = gY.join(", "), vY = function(YY, rY) {
        var DY;
        return rY.length < 2 ? null !== (DY = rY[0]) && void 0 !== DY ? DY : "" : YY(`${La}listAnd`, {
          rest: rY.slice(0, -1).join(YY(`${La}listComma`)),
          last: rY[rY.length - 1]
        })
      }(FY, [OY, ...gY]), uY = FY(`${La}${rY.key}`, {
        ...Dv(FY, IY),
        ...rv(rY.params),
        item: OY,
        also: aY,
        itemList: vY,
        total: String(rY.total)
      }), [sY, ...iY] = uY.split("\n"), yY = rY.total > 1 && !rY.done && !rY.away;
      return (0, WI.jsxs)("li", {
        className: QA()("Baf2QuestStep", {
          Done: rY.done,
          Current: rY.current,
          JustFinished: rY.justFinished,
          Away: rY.away
        }),
        children: [!rY.done && null !== rY.item && (0, WI.jsx)(Fv, {
          item: rY.item
        }), (rY.done || null === rY.item) && (0, WI.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: rY.done ? "\u2713" : "\u25cb"
        }), (0, WI.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, WI.jsx)("strong", {
            children: sY
          }), iY.length > 0 && (0, WI.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: iY.join(" ")
          }), !rY.done && rY.madeFor.length > 0 && (0, WI.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: FY("buildAFactory2Game:questRowFor", {
              items: rY.madeFor.map((YY => Yv(FY, DY.itemNames[YY], YY))).join(" \u2192 ")
            })
          }), yY && (0, WI.jsx)(Av, {
            label: sY,
            percent: Math.round(100 * rY.amount / rY.total),
            progress: `${rY.amount.toLocaleString("en-US")}/${rY.total.toLocaleString("en-US")}`
          }), !rY.done && !rY.away && rY.chips && rY.chips.length > 0 && (0, WI.jsx)(Iv, {
            chips: rY.chips
          }), AY]
        })]
      })
    }

    function sv(YY, rY) {
      let [DY, FY] = rY;
      return YY(`${La}${DY}`, rv(FY))
    }

    function iv(YY) {
      let [rY, DY] = YY;
      return rY + JSON.stringify(DY)
    }

    function yv(YY) {
      let {
        goal: rY,
        t: DY
      } = YY;
      return rY ? (0, WI.jsx)("span", {
        className: "Baf2BookGoal",
        children: DY(`${La}${rY}`)
      }) : null
    }

    function Qv(YY) {
      let {
        view: rY,
        t: DY
      } = YY;
      if (!rY.name) return null;
      const FY = jA(rY.rows);
      return (0, WI.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, WI.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: DY(`${La}currentQuest`)
        }), (0, WI.jsx)("strong", {
          className: "Baf2BookTitle",
          children: sv(DY, rY.name)
        }), (0, WI.jsx)(yv, {
          goal: rY.goal,
          t: DY
        }), FY.length > 1 && (0, WI.jsx)(gv, {
          rows: FY,
          t: DY
        }), (0, WI.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: rY.rows.map((YY => (0, WI.jsx)(av, {
            row: YY,
            view: rY,
            t: DY
          }, YY.id)))
        }), rY.reward && (0, WI.jsxs)("span", {
          className: "Baf2BookReward",
          children: [DY(`${La}questReward`), (0, WI.jsx)(Fv, {
            item: rY.reward
          }), Yv(DY, rY.itemNames[rY.reward], rY.reward)]
        })]
      })
    }

    function ov(YY) {
      let {
        quest: rY,
        upcoming: DY,
        t: FY
      } = YY;
      return (0, WI.jsxs)("li", {
        className: QA()("Baf2BookQuest", {
          Done: rY[3],
          Upcoming: DY
        }),
        children: [(0, WI.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: rY[3] ? "\u2713" : "\u25cb"
        }), (0, WI.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, WI.jsx)("strong", {
            className: "Baf2BookTitle",
            children: sv(FY, rY)
          }), (0, WI.jsx)(yv, {
            goal: rY[2],
            t: FY
          })]
        })]
      })
    }

    function Wv(YY) {
      let {
        done: rY,
        total: DY,
        t: FY
      } = YY;
      const AY = DY > 0 ? Math.round(100 * rY / DY) : 0,
        IY = FY(`${La}questBookChapterProgress`, {
          done: String(rY),
          total: String(DY)
        });
      return (0, WI.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, WI.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": IY,
          "aria-valuemin": 0,
          "aria-valuemax": DY,
          "aria-valuenow": rY,
          children: (0, WI.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${AY}%`
            }
          })
        }), (0, WI.jsx)("span", {
          className: "Baf2BookProgressText",
          children: IY
        })]
      })
    }

    function Ev(YY) {
      let {
        view: rY,
        tier: DY,
        quests: FY,
        t: AY
      } = YY;
      const IY = DY === rY.tier,
        RY = (null !== FY && void 0 !== FY ? FY : []).filter((YY => !YY[4])),
        OY = (null !== FY && void 0 !== FY ? FY : []).filter((YY => YY[4])),
        gY = RY.filter((YY => YY[3])).length,
        aY = IY && rY.name ? iv(rY.name) : null,
        vY = RY.findIndex((YY => !YY[3] && iv(YY) === aY));
      return (0, WI.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, WI.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, WI.jsx)("h3", {
            children: Rv(AY, DY)
          }), RY.length > 0 && (0, WI.jsx)(Wv, {
            done: gY,
            total: RY.length,
            t: AY
          }), IY && rY.core && (0, WI.jsx)(Ov, {
            core: rY.core,
            t: AY
          })]
        }), (0, WI.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === FY && IY && (0, WI.jsx)(Qv, {
            view: rY,
            t: AY
          }), RY.map(((YY, DY) => DY === vY ? (0, WI.jsx)(Qv, {
            view: rY,
            t: AY
          }, iv(YY)) : (0, WI.jsx)(ov, {
            quest: YY,
            upcoming: !YY[3],
            t: AY
          }, iv(YY))))]
        }), IY && rY.side && (0, WI.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, WI.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: AY(`${La}questSide`)
          }), (0, WI.jsx)("strong", {
            className: "Baf2BookTitle",
            children: sv(AY, rY.side.name)
          }), (0, WI.jsx)(yv, {
            goal: rY.side.goal,
            t: AY
          }), (0, WI.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, WI.jsx)(av, {
              row: rY.side.row,
              view: rY,
              t: AY
            })
          })]
        }), OY.length > 0 && (0, WI.jsxs)(WI.Fragment, {
          children: [(0, WI.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: AY(`${La}questBookSidesDone`)
          }), (0, WI.jsx)("ol", {
            className: "Baf2BookQuests",
            children: OY.map((YY => (0, WI.jsx)(ov, {
              quest: YY,
              upcoming: !1,
              t: AY
            }, iv(YY))))
          })]
        })]
      })
    }

    function mv(YY) {
      var rY, DY, IY;
      let {
        store: RY,
        close: OY
      } = YY;
      const {
        t: gY
      } = (0, mA.C)(), aY = (0, xa.k)(cA, RY.get()), uY = null !== (rY = aY.tier) && void 0 !== rY ? rY : 1, [sY, iY] = (0, FY.useState)(null), yY = (null === sY || void 0 === sY ? void 0 : sY.at) === uY ? sY.tier : uY, WY = (0, FY.useRef)(null), EY = null !== aY.chapters;
      (0, FY.useEffect)((() => {
        var YY;
        WY.current && (WY.current.scrollTop = 0);
        const rY = null === (YY = WY.current) || void 0 === YY ? void 0 : YY.querySelector(".Baf2BookQuest.Current");
        if (WY.current && rY) {
          const YY = rY.getBoundingClientRect().bottom - WY.current.getBoundingClientRect().bottom;
          YY > 0 && (WY.current.scrollTop += Math.min(YY, rY.getBoundingClientRect().top - WY.current.getBoundingClientRect().top))
        }
      }), [yY, EY]);
      const mY = null === (DY = aY.chapters) || void 0 === DY ? void 0 : DY.find((YY => {
        let [rY] = YY;
        return rY === yY
      }));
      return (0, WI.jsx)(iR.e, {
        close: OY,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, WI.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: ta,
          children: [(0, WI.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, WI.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: gY(`${La}questBookTitle`)
            }), (0, WI.jsx)(yR.k, {
              onClick: OY
            })]
          }), (0, WI.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": gY(`${La}questBookChapters`),
            children: AY.slice(0, vY()).map(((YY, rY) => {
              const DY = rY + 1,
                {
                  kind: FY,
                  short: AY
                } = oY(DY),
                IY = QY(DY, uY),
                RY = IY ? gY(`${La}coreAtomicHidden`) : Rv(gY, DY);
              return (0, WI.jsx)("li", {
                children: (0, WI.jsx)("button", {
                  type: "button",
                  className: QA()({
                    Stage: "tier" !== FY,
                    Atomic: "atomic" === FY,
                    Current: DY === uY,
                    Selected: DY === yY
                  }),
                  disabled: DY > uY,
                  "aria-pressed": DY === yY,
                  "aria-label": RY,
                  title: IY ? void 0 : RY,
                  onClick: () => {
                    iY({
                      tier: DY,
                      at: uY
                    })
                  },
                  children: IY ? "?" : AY
                })
              }, YY.nameKey)
            }))
          }), (0, WI.jsxs)("div", {
            ref: WY,
            className: "Baf2BookBody",
            children: [CA(aY) && yY === uY && (0, WI.jsx)("p", {
              className: "Baf2BookEmpty",
              children: gY(`${La}questBookAllDone`)
            }), (0, WI.jsx)(Ev, {
              view: aY,
              tier: yY,
              quests: null !== (IY = null === mY || void 0 === mY ? void 0 : mY[1]) && void 0 !== IY ? IY : null,
              t: gY
            })]
          })]
        })
      })
    }
    const Vv = "buildAFactory2Game:";

    function Sv(YY) {
      let {
        tiers: rY,
        from: DY,
        tier: FY,
        shown: AY,
        Ps: IY
      } = YY;
      const {
        t: RY
      } = (0, mA.C)(), OY = rY.map(((YY, rY) => {
        const OY = DY + rY,
          {
            kind: gY,
            short: aY
          } = oY(OY),
          vY = QY(OY, FY);
        return (0, WI.jsx)("li", {
          children: (0, WI.jsx)("button", {
            type: "button",
            className: QA()({
              Stage: "tier" !== gY,
              Silhouette: vY,
              Reached: OY <= FY,
              Current: OY === FY,
              Next: OY === FY + 1,
              Selected: OY === AY
            }),
            disabled: vY,
            "aria-pressed": OY === AY,
            "aria-label": vY ? RY(`${Vv}coreAtomicHidden`) : void 0,
            title: vY ? void 0 : RY(`${Vv}${YY.nameKey}`),
            onClick: () => {
              IY(OY)
            },
            children: vY ? "?" : aY
          })
        }, YY.nameKey)
      }));
      return (0, WI.jsx)(WI.Fragment, {
        children: OY
      })
    }

    function lv(YY) {
      let {
        id: rY,
        label: DY,
        tiers: FY,
        from: AY,
        ...IY
      } = YY;
      return (0, WI.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, WI.jsx)("span", {
          id: rY,
          className: "Baf2CoreLadderLabel",
          children: DY
        }), (0, WI.jsx)("ol", {
          "aria-labelledby": rY,
          children: (0, WI.jsx)(Sv, {
            ...IY,
            tiers: FY,
            from: AY
          })
        })]
      })
    }

    function Tv(YY) {
      const {
        t: rY
      } = (0, mA.C)(), DY = AY.findIndex((YY => void 0 !== YY.stage)), FY = AY.findIndex((YY => void 0 !== YY.reactorTier)), IY = DY < 0 ? AY : AY.slice(0, DY), RY = DY < 0 ? [] : AY.slice(DY, FY < 0 ? void 0 : FY), gY = FY < 0 || !OY() ? [] : AY.slice(FY);
      return (0, WI.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, WI.jsx)(lv, {
          ...YY,
          id: "baf2CoreTiersLabel",
          label: rY(`${Vv}coreTiersLabel`),
          tiers: IY,
          from: 1
        }), RY.length > 0 && (0, WI.jsx)(lv, {
          ...YY,
          id: "baf2CoreStagesLabel",
          label: rY(`${Vv}coreStagesLabel`),
          tiers: RY,
          from: DY + 1
        }), gY.length > 0 && (0, WI.jsx)(lv, {
          ...YY,
          id: "baf2CoreAtomicLabel",
          label: rY(`${Vv}coreAtomicLabel`),
          tiers: gY,
          from: FY + 1
        })]
      })
    }
    const ev = "buildAFactory2Game:";

    function Nv(YY) {
      let {
        item: rY,
        itemNames: DY,
        children: FY
      } = YY;
      return (0, WI.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, WI.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, WI.jsx)(SA.c, {
            itemName: rY,
            amount: 0
          })
        }), (0, WI.jsx)(lA.b, {
          text: DY[rY]
        }), FY]
      })
    }

    function Bv(YY) {
      const rY = new Map;
      for (const {
          block: FY
        }
        of YY.newDeposits) {
        var DY;
        rY.set(FY, (null !== (DY = rY.get(FY)) && void 0 !== DY ? DY : 0) + 1)
      }
      return [...rY]
    }

    function cv(YY) {
      let {
        value: rY,
        label: DY,
        more: FY
      } = YY;
      return (0, WI.jsxs)("li", {
        children: [(0, WI.jsx)("strong", {
          children: rY
        }), (0, WI.jsx)("span", {
          children: DY
        }), FY > 0 && (0, WI.jsxs)("em", {
          children: ["+", FY]
        })]
      })
    }

    function Kv(YY) {
      let {
        items: rY,
        itemNames: DY
      } = YY;
      const {
        t: AY
      } = (0, mA.C)(), [IY, RY] = (0, FY.useState)(null), OY = null !== IY && rY.includes(IY) ? IY : null;
      return (0, WI.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, WI.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: AY(`${ev}coreRewardUnlocks`)
        }), (0, WI.jsx)("ul", {
          children: rY.map((YY => (0, WI.jsx)("li", {
            children: (0, WI.jsx)("button", {
              type: "button",
              className: QA()("Baf2PanelIcon", {
                Picked: YY === OY
              }),
              title: PA(AY, YY),
              "aria-label": PA(AY, YY),
              "aria-pressed": YY === OY,
              onClick: () => {
                RY(YY === OY ? null : YY)
              },
              children: (0, WI.jsx)(SA.c, {
                itemName: YY,
                amount: 0
              })
            })
          }, YY)))
        }), (0, WI.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== OY && (0, WI.jsxs)(WI.Fragment, {
            children: [(0, WI.jsx)(lA.b, {
              text: DY[OY]
            }), " \xb7 ", (0, WI.jsx)(lA.b, {
              text: DY[HY(OY)]
            })]
          }), null === OY && AY(`${ev}coreRecipeTap`)]
        })]
      })
    }

    function Hv(YY) {
      var rY, DY;
      let {
        def: FY,
        tier: AY,
        itemNames: IY
      } = YY;
      const {
        t: RY
      } = (0, mA.C)(), OY = AY > 1 ? WY(AY - 1) : void 0, gY = Math.round(2 * FY.islandRadius), aY = OY ? Math.round(2 * OY.islandRadius) : gY, vY = AY >= 3 ? yF(AY) : null;
      return (0, WI.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, WI.jsxs)("ul", {
          className: QA()("Baf2CoreStats", {
            Four: null !== vY
          }),
          children: [(0, WI.jsx)(cv, {
            value: `${gY}\xd7${gY}`,
            label: RY(`${ev}coreStatIsland`),
            more: gY - aY
          }), (0, WI.jsx)(cv, {
            value: String(FY.machineAllowance),
            label: RY(`${ev}coreStatMachines`),
            more: FY.machineAllowance - (null !== (rY = null === OY || void 0 === OY ? void 0 : OY.machineAllowance) && void 0 !== rY ? rY : FY.machineAllowance)
          }), (0, WI.jsx)(cv, {
            value: String(FY.beltAllowance),
            label: RY(`${ev}coreStatBelts`),
            more: FY.beltAllowance - (null !== (DY = null === OY || void 0 === OY ? void 0 : OY.beltAllowance) && void 0 !== DY ? DY : FY.beltAllowance)
          }), null !== vY && (0, WI.jsx)(cv, {
            value: String(vY),
            label: RY(`${ev}coreStatStorage`),
            more: vY - (OY ? yF(AY - 1) : vY)
          })]
        }), FY.reward && (0, WI.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, WI.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: RY(`${ev}coreRewardItem`)
          }), (0, WI.jsx)(Nv, {
            item: FY.reward,
            itemNames: IY
          })]
        }), FY.newDeposits.length > 0 && (0, WI.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, WI.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: RY(FY.newDeposits.length > 1 ? `${ev}coreRewardDeposits` : `${ev}coreRewardDeposit`)
          }), Bv(FY).map((YY => {
            let [rY, DY] = YY;
            return (0, WI.jsx)(Nv, {
              item: rY,
              itemNames: IY,
              children: DY > 1 && ` \xd7${DY}`
            }, rY)
          }))]
        }), FY.unlocks.length > 0 && (0, WI.jsx)(Kv, {
          items: FY.unlocks,
          itemNames: IY
        }), (0, WI.jsx)(zv, {
          tier: AY
        })]
      })
    }

    function zv(YY) {
      let {
        tier: rY
      } = YY;
      const {
        t: DY
      } = (0, mA.C)(), FY = gA[rY];
      if (!FY) return null;
      const AY = OA(rY, 0, 0).barrierMax !== OA(rY - 1, 0, 0).barrierMax;
      return (0, WI.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, WI.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, WI.jsx)(SA.c, {
            itemName: AY ? rA.Chestplate : YA,
            amount: 0
          })
        }), DY(`${ev}gearPerkLine`, {
          perk: DY(`${ev}${FY}`)
        })]
      })
    }

    function Zv(YY, rY) {
      return null === YY ? rY : YY.value
    }

    function Cv(YY, rY, DY, FY) {
      let AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === YY || DY - YY.atMs >= FY ? null : AY(YY.value, rY) ? YY.armed ? null : YY : YY.armed ? YY : {
        ...YY,
        armed: !0
      }
    }

    function fv(YY, rY) {
      const DY = rY.filter((rY => {
        var DY;
        return !1 !== (null === (DY = YY.get(rY)) || void 0 === DY ? void 0 : DY.value)
      }));
      for (const [FY, AY] of YY) AY.value && !rY.includes(FY) && DY.push(FY);
      return DY
    }

    function jv(YY, rY, DY, AY) {
      const [IY, RY] = (0, FY.useState)((() => new Map)), OY = () => {
        RY((rY => function(YY, rY, DY, FY) {
          var AY;
          let IY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            RY = null;
          for (const [OY, gY] of YY) {
            const AY = Cv(gY, rY(OY), DY, FY, IY);
            AY !== gY && (RY ??= new Map(YY), null === AY ? RY.delete(OY) : RY.set(OY, AY))
          }
          return null !== (AY = RY) && void 0 !== AY ? AY : YY
        }(rY, YY, Date.now(), DY, AY)))
      };
      (0, FY.useEffect)((() => {
        OY()
      }), [rY, DY]), (0, FY.useEffect)((() => {
        if (0 === IY.size) return;
        const YY = Math.min(...[...IY.values()].map((YY => YY.atMs))),
          rY = setTimeout(OY, Math.max(0, YY + DY - Date.now()) + 1);
        return () => {
          clearTimeout(rY)
        }
      }), [IY, rY, DY]);
      return [IY, (rY, DY) => {
        RY((FY => {
          const IY = new Map(FY);
          return IY.set(rY, function(YY, rY, DY) {
            return {
              value: YY,
              atMs: DY,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(YY, rY)
            }
          }(DY, YY(rY), Date.now(), AY)), IY
        }))
      }]
    }
    const hv = "buildAFactory2Game:";

    function dv(YY) {
      let {
        message: rY,
        itemNames: DY
      } = YY;
      const AY = CR(),
        {
          t: IY
        } = (0, mA.C)(),
        [RY, OY] = (0, FY.useState)(!1),
        [gY, aY] = function(YY) {
          let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NR;
          const [DY, FY] = jv((rY => YY.includes(rY)), YY, rY, Object.is);
          return [fv(DY, YY), FY]
        }(rY.baf2CoreBankPaused),
        vY = new Set(gY),
        uY = [...rY.baf2CoreBanked];
      for (const FY of vY) uY.some((YY => {
        let [rY] = YY;
        return rY === FY
      })) || uY.push([FY, 0]);
      return 0 === uY.length ? null : (0, WI.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, WI.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": RY,
          onClick: () => {
            OY(!RY)
          },
          children: [(0, WI.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: IY(`${hv}coreBankedLater`)
          }), (0, WI.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: uY.map((YY => {
              let [rY, DY] = YY;
              const FY = vY.has(rY);
              return (0, WI.jsxs)("span", {
                className: QA()({
                  Paused: FY
                }),
                title: FY ? IY(`${hv}coreBankPausedTag`) : void 0,
                children: [(0, WI.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, WI.jsx)(SA.c, {
                    itemName: rY,
                    amount: 0
                  })
                }), DY, FY && (0, WI.jsx)(VA.e, {
                  name: "pause"
                })]
              }, rY)
            }))
          }), (0, WI.jsx)(VA.e, {
            name: RY ? "angle-up" : "angle-down"
          })]
        }), RY && (0, WI.jsxs)(WI.Fragment, {
          children: [(0, WI.jsx)("ul", {
            children: uY.map((YY => {
              let [rY, FY] = YY;
              const RY = vY.has(rY);
              return (0, WI.jsxs)("li", {
                children: [(0, WI.jsxs)(Nv, {
                  item: rY,
                  itemNames: DY,
                  children: [(0, WI.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: FY
                  }), RY && (0, WI.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: IY(`${hv}coreBankPausedTag`)
                  })]
                }), (0, WI.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, WI.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === FY,
                    onClick: () => {
                      AY.send(`baf2corewithdraw ${FY} ${rY}`)
                    },
                    children: IY(`${hv}coreTake`)
                  }), (0, WI.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      AY.send(`${VY} ${rY}`), aY(rY, !RY)
                    },
                    children: IY(RY ? `${hv}coreBankResume` : `${hv}coreBankStop`)
                  })]
                })]
              }, rY)
            }))
          }), (0, WI.jsx)("p", {
            className: "Baf2CoreHint",
            children: IY(`${hv}coreBankNote`)
          })]
        })]
      })
    }
    const Jv = "buildAFactory2Game:";

    function Mv(YY) {
      const rY = Math.max(0, Math.floor(YY));
      return `${Math.floor(rY/60)}:${String(rY%60).padStart(2,"0")}`
    }

    function wv(YY) {
      let {
        item: rY
      } = YY;
      return (0, WI.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, WI.jsx)(SA.c, {
          itemName: rY,
          amount: 0
        })
      })
    }

    function bv() {
      return (0, WI.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, WI.jsx)(VA.e, {
          name: "bolt"
        })
      })
    }

    function Xv(YY) {
      let {
        charge: rY,
        hint: DY,
        itemNames: FY
      } = YY;
      const AY = CR(),
        {
          t: IY
        } = (0, mA.C)(),
        [RY, OY, gY, aY, vY, uY, sY] = rY,
        [iY, yY] = function(YY) {
          var rY;
          let DY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NR,
            FY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [AY, IY] = jv((() => YY), YY, DY, FY);
          return [Zv(null !== (rY = AY.get("")) && void 0 !== rY ? rY : null, YY), YY => {
            IY("", YY)
          }]
        }(sY),
        QY = iY === sY ? uY : !iY,
        oY = aY >= vY,
        WY = RY.find((YY => {
          let [, rY, DY] = YY;
          return DY < .9 * rY
        }));
      let EY = `${Jv}coreChargeWaiting`,
        mY = {};
      return oY ? EY = `${Jv}coreChargeDone` : iY ? EY = `${Jv}coreChargeStopped` : QY && DY ? (EY = `${Jv}${DY[0]}`, mY = {
        item: PA(IY, DY[1])
      }) : QY && WY ? (EY = `${Jv}coreChargeShort`, mY = {
        item: PA(IY, WY[0])
      }) : QY && OY > 0 && !gY ? EY = `${Jv}coreChargePower` : QY && (EY = `${Jv}coreChargeRunning`), (0, WI.jsxs)("div", {
        className: QA()("Baf2CoreCharge", {
          Waiting: !QY && !oY,
          Done: oY
        }),
        children: [(0, WI.jsxs)("h4", {
          children: [IY(`${Jv}coreChargeTitle`), (0, WI.jsx)("span", {
            children: IY(`${Jv}coreChargeProgress`, {
              done: Mv(aY),
              need: Mv(vY)
            })
          })]
        }), (0, WI.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, WI.jsx)("div", {
            style: {
              width: 100 * Math.min(aY, vY) / vY + "%"
            }
          })
        }), (0, WI.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [RY.map((YY => {
            var rY;
            let [DY, AY, RY] = YY;
            const OY = RY >= .9 * AY;
            return (0, WI.jsxs)("li", {
              className: QA()({
                Done: OY,
                Short: QY && !OY
              }),
              children: [(0, WI.jsx)(wv, {
                item: DY
              }), (0, WI.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, WI.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, WI.jsx)(lA.b, {
                    text: null !== (rY = FY[DY]) && void 0 !== rY ? rY : DY
                  }), (0, WI.jsx)("span", {
                    children: IY(`${Jv}coreChargeItem`, {
                      now: String(RY),
                      need: String(AY)
                    })
                  })]
                }), (0, WI.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, WI.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*RY/AY)}%`
                    }
                  })
                })]
              })]
            }, DY)
          })), OY > 0 && (0, WI.jsxs)("li", {
            className: QA()("Baf2CoreChargePower", {
              Short: QY && !gY
            }),
            children: [(0, WI.jsx)(bv, {}), (0, WI.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, WI.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, WI.jsx)("span", {
                  children: IY(`${Jv}coreChargePowerRow`, {
                    power: UY(OY)
                  })
                })
              })
            })]
          })]
        }), (0, WI.jsx)("p", {
          className: "Baf2CoreHint",
          children: IY(EY, mY)
        }), !oY && (QY || iY) && (0, WI.jsx)("button", {
          type: "button",
          className: QA()("Baf2CoreChargeToggle", {
            Stopped: iY
          }),
          onClick: () => {
            AY.send(lY), yY(!iY)
          },
          children: IY(iY ? `${Jv}coreChargeRestart` : `${Jv}coreChargeStop`)
        })]
      })
    }

    function qv(YY) {
      let {
        charge: rY,
        reached: DY,
        itemNames: FY
      } = YY;
      const {
        t: AY
      } = (0, mA.C)();
      return (0, WI.jsxs)("div", {
        className: QA()("Baf2CoreCharge", {
          Done: DY
        }),
        children: [(0, WI.jsxs)("h4", {
          children: [AY(`${Jv}coreChargeTitle`), (0, WI.jsx)("span", {
            children: AY(`${Jv}coreChargeSpecTime`, {
              time: Mv(rY.seconds)
            })
          })]
        }), (0, WI.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [rY.items.map((YY => {
            var rY;
            let {
              item: IY,
              amount: RY
            } = YY;
            return (0, WI.jsxs)("li", {
              className: QA()({
                Done: DY
              }),
              children: [(0, WI.jsx)(wv, {
                item: IY
              }), (0, WI.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, WI.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, WI.jsx)(lA.b, {
                    text: null !== (rY = FY[IY]) && void 0 !== rY ? rY : IY
                  }), (0, WI.jsx)("span", {
                    children: AY(`${Jv}coreChargeSpecItem`, {
                      need: String(RY)
                    })
                  })]
                })
              })]
            }, IY)
          })), rY.powerPerS > 0 && (0, WI.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, WI.jsx)(bv, {}), (0, WI.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, WI.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, WI.jsx)("span", {
                  children: AY(`${Jv}coreChargePowerRow`, {
                    power: UY(rY.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const pv = "buildAFactory2Game:";

    function kv(YY) {
      let {
        def: rY,
        reached: DY,
        banked: FY,
        itemNames: AY
      } = YY;
      const {
        t: IY
      } = (0, mA.C)();
      return (0, WI.jsx)("ul", {
        className: "Baf2CoreCost",
        children: rY.cost.map((YY => {
          let {
            item: rY,
            amount: RY
          } = YY;
          const OY = DY ? 0 : FY(rY);
          return (0, WI.jsx)("li", {
            children: (0, WI.jsx)(Nv, {
              item: rY,
              itemNames: AY,
              children: (0, WI.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: OY > 0 ? IY(`${pv}coreBankedFor`, {
                  amount: String(OY),
                  total: String(RY)
                }) : `\xd7${RY}`
              })
            })
          }, rY)
        }))
      })
    }

    function Gv(YY, rY) {
      if (rY >= vY()) return YY(`${pv}coreMaxTier`);
      const DY = aY[rY + 1];
      return DY && !DY.startsWith("upgradeCore") ? YY(`${pv}coreGateQuest`, {
        quest: YY(`${pv}quest_${DY}`)
      }) : YY(`${pv}coreGateClosed`)
    }

    function xv() {
      const {
        t: YY
      } = (0, mA.C)(), rY = CR(), DY = (0, FY.useRef)(null), AY = (0, FY.useRef)(Date.now());
      return Ma(!0, DY), (0, WI.jsx)("div", {
        ref: DY,
        className: "Baf2CoreGrow",
        children: (0, WI.jsx)(yR.n, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - AY.current >= 600 && rY.send(mY)
          },
          children: YY(`${pv}coreGrow`)
        })
      })
    }

    function nv(YY) {
      let {
        message: rY,
        itemNames: DY,
        next: FY
      } = YY;
      const AY = CR(),
        {
          t: IY
        } = (0, mA.C)(),
        RY = rY.baf2CoreTier,
        OY = rY.baf2CoreReady,
        gY = rY.baf2CoreNeeds.filter((YY => {
          let [, rY, DY, FY] = YY;
          return FY > 0 && rY < DY
        })),
        aY = rY.baf2CoreNeeds.every((YY => {
          let [, rY, DY] = YY;
          return rY >= DY
        })),
        vY = rY.baf2CoreKeep;
      return (0, WI.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, WI.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [OY && (0, WI.jsx)(xv, {}), (0, WI.jsx)("h3", {
            children: IY(`${pv}coreBring`)
          }), (0, WI.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: rY.baf2CoreNeeds.map((YY => {
              let [rY, FY, RY, OY] = YY;
              return (0, WI.jsxs)("li", {
                className: QA()({
                  Done: FY >= RY
                }),
                children: [(0, WI.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, WI.jsx)(SA.c, {
                    itemName: rY,
                    amount: 0
                  })
                }), (0, WI.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, WI.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, WI.jsx)(lA.b, {
                      text: DY[rY]
                    }), (0, WI.jsxs)("span", {
                      children: [FY, "/", RY]
                    })]
                  }), (0, WI.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, WI.jsx)("div", {
                      style: {
                        width: 100 * FY / RY + "%"
                      }
                    }), OY > 0 && (0, WI.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * OY / RY + "%"
                      }
                    })]
                  })]
                }), OY > 0 && FY < RY && (0, WI.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    AY.send(`${SY} ${rY}`)
                  },
                  children: IY(`${pv}coreDeposit`, {
                    amount: String(OY)
                  })
                })]
              }, rY)
            }))
          }), rY.baf2CoreCharge && (0, WI.jsx)(Xv, {
            charge: rY.baf2CoreCharge,
            hint: rY.baf2CoreChargeHint,
            itemNames: DY
          }), !OY && gY.length > 1 && (0, WI.jsx)(yR.n, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              AY.send(mY)
            },
            children: IY(`${pv}coreHandOver`)
          }), !OY && void 0 !== vY && (0, WI.jsx)("p", {
            className: "Baf2CoreHint",
            children: IY(`${pv}coreKeepRest`, {
              item: PA(IY, vY)
            })
          }), !OY && !aY && 0 === gY.length && void 0 === vY && (0, WI.jsx)("p", {
            className: "Baf2CoreHint",
            children: IY(`${pv}coreNothingHeld`)
          }), (0, WI.jsx)(dv, {
            message: rY,
            itemNames: DY
          })]
        }), (0, WI.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, WI.jsx)("h3", {
            children: IY(`${pv}coreRewards`)
          }), (0, WI.jsx)(Hv, {
            def: FY,
            tier: RY + 1,
            itemNames: DY
          })]
        })]
      })
    }

    function Pv(YY) {
      let {
        message: rY,
        itemNames: DY,
        shown: FY
      } = YY;
      const {
        t: AY
      } = (0, mA.C)(), IY = rY.baf2CoreTier, RY = WY(FY), OY = FY <= IY, gY = new Map(rY.baf2CoreBanked), aY = !EY(IY, TY(rY)) && FY === IY;
      return (0, WI.jsxs)("div", {
        className: QA()("Baf2CoreBody", {
          Locked: !OY
        }),
        children: [(0, WI.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, WI.jsx)("h3", {
            children: AY(OY ? `${pv}coreItTook` : `${pv}coreItNeeds`)
          }), 0 === RY.cost.length && (0, WI.jsx)("p", {
            className: "Baf2CoreHint",
            children: AY(`${pv}coreTierStart`)
          }), RY.cost.length > 0 && (0, WI.jsx)(kv, {
            def: RY,
            reached: OY,
            banked: YY => {
              var rY;
              return function(YY, rY, DY, FY) {
                let AY = YY;
                for (let RY = rY + 2; RY <= DY; RY++) {
                  var IY;
                  const YY = WY(RY).cost.find((YY => YY.item === FY)),
                    rY = Math.min(AY, null !== (IY = null === YY || void 0 === YY ? void 0 : YY.amount) && void 0 !== IY ? IY : 0);
                  if (RY === DY) return rY;
                  AY -= rY
                }
                return 0
              }(null !== (rY = gY.get(YY)) && void 0 !== rY ? rY : 0, IY, FY, YY)
            },
            itemNames: DY
          }), RY.charge && (0, WI.jsx)(qv, {
            charge: RY.charge,
            reached: OY,
            itemNames: DY
          }), aY && (0, WI.jsxs)(WI.Fragment, {
            children: [(0, WI.jsx)("p", {
              className: "Baf2CoreHint",
              children: Gv(AY, IY)
            }), (0, WI.jsx)(dv, {
              message: rY,
              itemNames: DY
            })]
          })]
        }), (0, WI.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, WI.jsx)("h3", {
            children: AY(OY ? `${pv}coreGave` : `${pv}coreLockedRewards`)
          }), (0, WI.jsx)(Hv, {
            def: RY,
            tier: FY,
            itemNames: DY
          })]
        })]
      })
    }

    function Uv(YY, rY) {
      const {
        key: DY,
        params: FY
      } = iY(rY - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return YY(`${pv}${DY}`, FY)
    }
    const Lv = "buildAFactory2Game:",
      tv = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      Yu = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function ru(YY) {
      let {
        view: rY,
        close: DY,
        askIslands: AY
      } = YY;
      const {
        t: IY
      } = (0, mA.C)(), [RY, OY] = (0, FY.useState)(!1);
      (0, FY.useEffect)((() => {
        if (!RY) return;
        const YY = window.setTimeout((() => {
          OY(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(YY)
        }
      }), [RY]);
      const {
        message: gY,
        itemNames: aY
      } = rY, vY = gY.baf2CoreTier, uY = WY(vY), sY = EY(vY, TY(gY)), [QY, oY] = gY.baf2CoreMachines, [mY, VY] = gY.baf2CoreBelts, SY = gY.baf2CoreStorage, lY = gY.baf2CoreReady, [eY, NY] = (0, FY.useState)(null), BY = (null === eY || void 0 === eY ? void 0 : eY.at) === vY && eY.ready === lY ? eY.tier : sY ? vY + 1 : vY;
      let cY = "coreTierLocked";
      BY <= vY ? cY = "coreTierReached" : BY === vY + 1 && (cY = "coreTierNext");
      const KY = IY(`${Lv}${WY(BY).nameKey}`),
        HY = BY === vY + 1 ? sY : null,
        zY = iY(BY, {
          tier: cY,
          stage: tv[cY],
          atomic: Yu[cY]
        }),
        ZY = IY(`${Lv}${zY.key}`, {
          ...zY.params,
          name: KY
        }),
        CY = iY(vY, yY),
        fY = IY(`${Lv}${CY.key}`, {
          ...CY.params,
          name: IY(`${Lv}${uY.nameKey}`)
        });
      return (0, WI.jsx)(iR.e, {
        close: DY,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, WI.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, WI.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, WI.jsxs)("div", {
              children: [(0, WI.jsx)("h2", {
                id: "baf2CoreTitle",
                children: IY(`${Lv}coreTitle`)
              }), void 0 !== gY.baf2CoreIslandName && (0, WI.jsx)("p", {
                className: "Baf2CoreIsland",
                children: gY.baf2CoreIslandName
              }), (0, WI.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, WI.jsx)("span", {
                  children: fY
                }), (0, WI.jsx)("span", {
                  className: QA()({
                    Full: QY >= oY
                  }),
                  children: IY(`${Lv}coreMachineCount`, {
                    amount: String(QY),
                    total: String(oY)
                  })
                }), (0, WI.jsx)("span", {
                  className: QA()({
                    Full: mY >= VY
                  }),
                  children: IY(`${Lv}coreBeltCount`, {
                    amount: String(mY),
                    total: String(VY)
                  })
                }), void 0 !== SY && (0, WI.jsx)("span", {
                  className: QA()({
                    Full: SY[0] >= SY[1]
                  }),
                  children: IY(`${Lv}coreStorageCount`, {
                    amount: String(SY[0]),
                    total: String(SY[1])
                  })
                })]
              })]
            }), (0, WI.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [gY.baf2CoreIslands && (0, WI.jsx)(yR.f, {
                className: "Baf2CoreIslandsButton",
                disabled: RY,
                onClick: () => {
                  OY(!0), AY()
                },
                children: IY(`${Lv}islandsOpenButton`)
              }), (0, WI.jsx)(yR.k, {
                onClick: DY
              })]
            })]
          }), (0, WI.jsx)(Tv, {
            tier: vY,
            shown: BY,
            Ps: YY => {
              NY({
                tier: YY,
                at: vY,
                ready: lY
              })
            }
          }), (0, WI.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [ZY, BY > vY + 1 && (0, WI.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: Uv(IY, BY)
            })]
          }), 6 === BY && BY > vY && (0, WI.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: IY(`${Lv}coreStagesNote`)
          }), 11 === BY && BY > vY && (0, WI.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: IY(`${Lv}coreAtomicNote`)
          }), HY && (0, WI.jsx)(nv, {
            message: gY,
            itemNames: aY,
            next: HY
          }), !HY && (0, WI.jsx)(Pv, {
            message: gY,
            itemNames: aY,
            shown: BY
          })]
        })
      })
    }
    const Du = {
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
    const Fu = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: YI,
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

    function Au(YY) {
      return YY.baf2DropCometOreOnly ? "dropCometOre" : YY.baf2DropCometIsotope ? "seed" === YY.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function Iu(YY) {
      let {
        message: rY,
        quests: DY,
        close: AY,
        leave: IY
      } = YY;
      const RY = CR(),
        {
          t: OY
        } = (0, mA.C)(),
        gY = (0, xa.k)(cA, DY.get()),
        aY = function(YY) {
          var rY;
          if (!CY(YY.tutorial)) return null;
          const DY = YY.rows.find((YY => YY.current)),
            FY = DY ? Du[DY.key] : void 0;
          return null !== (rY = null !== FY && void 0 !== FY ? FY : YY.side ? Du[YY.side.row.key] : void 0) && void 0 !== rY ? rY : null
        }(gY),
        vY = null === gY.tier || FI(gY.tier),
        uY = vY ? Fu : Fu.filter((YY => {
          let {
            item: rY
          } = YY;
          return rY !== YI
        })),
        [sY, iY] = (0, FY.useState)(null),
        yY = null !== sY && void 0 !== sY ? sY : !rY.baf2DropFoundSalvage && vY,
        QY = rY.baf2DropRuinDistance,
        oY = rY.baf2DropComet,
        WY = rY.baf2DropOldWorks,
        EY = rY.baf2DropGrove,
        mY = function(YY) {
          return 2 + Number(void 0 !== YY.baf2DropComet) + Number(!!YY.baf2DropOwedComet || void 0 !== YY.baf2DropOwedWaitMinutes) + Number(void 0 !== YY.baf2DropDigDistance) + Number(void 0 !== YY.baf2DropOldWorks) + Number(void 0 !== YY.baf2DropGrove)
        }(rY),
        VY = YY => {
          RY.send(function(YY) {
            return `baf2drop ${YY}`
          }(YY)), IY()
        };
      let SY = OY("buildAFactory2Game:dropRuinNone");
      if (null !== QY) {
        let YY = rY.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        rY.baf2DropRuinOldWorks && (YY = "dropRuinOldWorks");
        const DY = void 0 === rY.baf2DropRuinCluster ? OY("buildAFactory2Game:dropRuinOpen") : OY("buildAFactory2Game:dropRuinCluster", {
          count: String(rY.baf2DropRuinCluster)
        });
        SY = `${OY(`buildAFactory2Game:${YY}`,{distance:String(QY)})} ${DY}`
      }
      let lY = OY("buildAFactory2Game:dropBelowDescription");
      void 0 !== rY.baf2DropBelowLook && (lY = OY("buildAFactory2Game:dropBelowLook", {
        look: OY(rY.baf2DropBelowLook)
      }));
      const TY = "buildAFactory2Game:wildsRegion_survivorGrove" === rY.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        eY = iI(OY, 60 * function(YY) {
          const [rY, DY] = (0, FY.useState)((() => Date.now())), [AY, IY] = (0, FY.useState)(rY);
          return (0, FY.useEffect)((() => {
            const YY = Date.now();
            DY(YY), IY(YY)
          }), [YY]), (0, FY.useEffect)((() => {
            const YY = window.setInterval((() => {
              IY(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(YY)
            }
          }), []), Math.max(1, YY.baf2DropRenewMinutes - Math.floor((AY - rY) / 6e4))
        }(rY)),
        NY = function(YY, rY, DY) {
          return "ruin" === YY && !DY || "owed" === YY && !rY.baf2DropOwedComet ? null : YY
        }(aY, rY, null !== QY),
        BY = function(YY) {
          for (var rY = arguments.length, DY = new Array(rY > 1 ? rY - 1 : 0), FY = 1; FY < rY; FY++) DY[FY - 1] = arguments[FY];
          return QA()("Baf2DropTile", ...DY, {
            Wanted: NY === YY
          })
        };
      return (0, WI.jsx)(iR.e, {
        close: AY,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, WI.jsxs)("section", {
          className: QA()("Baf2Panel Baf2DropMap", {
            Many: mY >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, WI.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, WI.jsxs)("div", {
              children: [(0, WI.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: OY("buildAFactory2Game:dropMapTitle")
              }), (0, WI.jsx)("p", {
                children: OY("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, WI.jsx)(yR.k, {
              onClick: AY
            })]
          }), (0, WI.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== oY && (0, WI.jsxs)(yR.u, {
              className: BY("comet", "Baf2DropComet"),
              onClick: () => {
                VY("comet")
              },
              children: [(0, WI.jsx)("strong", {
                children: OY("buildAFactory2Game:dropComet")
              }), (0, WI.jsx)("span", {
                children: OY(`buildAFactory2Game:${Au(rY)}`, {
                  distance: String(oY)
                })
              })]
            }), rY.baf2DropOwedComet && (0, WI.jsxs)(yR.u, {
              className: BY("owed", "Baf2DropComet"),
              onClick: () => {
                VY("owed")
              },
              children: [(0, WI.jsx)("strong", {
                children: OY("buildAFactory2Game:dropOwedComet")
              }), (0, WI.jsx)("span", {
                children: rY.baf2DropOwedIsotope ? OY("buildAFactory2Game:dropOwedIsotopeDescription") : OY("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== rY.baf2DropOwedWaitMinutes && (0, WI.jsxs)(yR.u, {
              className: BY("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, WI.jsx)("strong", {
                children: OY("buildAFactory2Game:dropOwedComet")
              }), (0, WI.jsx)("span", {
                children: OY("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(rY.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, WI.jsxs)(yR.f, {
              className: BY("below"),
              onClick: () => {
                VY("below")
              },
              children: [(0, WI.jsx)("strong", {
                children: OY("buildAFactory2Game:dropBelow")
              }), (0, WI.jsx)("span", {
                children: lY
              })]
            }), void 0 !== rY.baf2DropDigDistance && (0, WI.jsxs)(yR.p, {
              className: BY("dig"),
              onClick: () => {
                VY("dig")
              },
              children: [(0, WI.jsx)("strong", {
                children: OY("buildAFactory2Game:dropDig")
              }), (0, WI.jsx)("span", {
                children: OY("buildAFactory2Game:dropDigDescription", {
                  distance: String(rY.baf2DropDigDistance),
                  y: sI(rY.baf2DropDigY)
                })
              })]
            }), void 0 !== EY && (0, WI.jsxs)(yR.p, {
              className: BY("grove", "Baf2DropGrove"),
              onClick: () => {
                VY("grove")
              },
              children: [(0, WI.jsx)("strong", {
                children: OY("buildAFactory2Game:dropGrove")
              }), (0, WI.jsx)("span", {
                children: OY(`buildAFactory2Game:${TY}`, {
                  distance: String(EY)
                })
              })]
            }), (0, WI.jsxs)(yR.n, {
              className: BY("ruin"),
              disabled: null === QY,
              onClick: () => {
                VY("ruin")
              },
              children: [(0, WI.jsx)("strong", {
                children: OY("buildAFactory2Game:dropRuin")
              }), (0, WI.jsx)("span", {
                children: SY
              })]
            }), void 0 !== WY && (0, WI.jsxs)(yR.D, {
              className: BY("works"),
              onClick: () => {
                VY("works")
              },
              children: [(0, WI.jsx)("strong", {
                children: OY("buildAFactory2Game:dropOldWorks")
              }), (0, WI.jsx)("span", {
                children: OY("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(WY)
                })
              })]
            })]
          }), (0, WI.jsx)("p", {
            className: "Baf2DropRenew",
            children: OY("buildAFactory2Game:dropRenew", {
              time: eY
            })
          }), (0, WI.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: yY,
            onToggle: YY => {
              YY.currentTarget.open !== yY && iY(YY.currentTarget.open)
            },
            children: [(0, WI.jsx)("summary", {
              children: OY("buildAFactory2Game:dropSalvageWhat")
            }), (0, WI.jsx)("p", {
              children: OY("buildAFactory2Game:dropSalvageIntro")
            }), (0, WI.jsx)("ul", {
              children: uY.map((YY => {
                let {
                  item: rY,
                  nameKey: DY,
                  useKey: FY,
                  params: AY
                } = YY;
                return (0, WI.jsxs)("li", {
                  children: [(0, WI.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, WI.jsx)(SA.c, {
                      itemName: rY,
                      amount: 0
                    })
                  }), (0, WI.jsxs)("span", {
                    children: [(0, WI.jsx)("strong", {
                      children: OY(DY)
                    }), ": ", OY(FY, AY)]
                  })]
                }, rY)
              }))
            })]
          })]
        })
      })
    }
    const Ru = "buildAFactory2Game:";

    function Ou(YY, rY) {
      return YY.sendIslandEdit(`baf2coopleave ${rY.baf2IslandId}`)
    }

    function gu(YY) {
      let {
        card: rY,
        canRename: DY,
        done: AY,
        t: IY
      } = YY;
      const RY = CR(),
        [OY, gY] = (0, FY.useState)(rY.baf2IslandName),
        aY = ia(OY),
        vY = "" === aY || ya(aY),
        uY = () => {
          !vY && DY && (aY !== rY.baf2IslandName ? AY(RY.sendIslandEdit(`baf2islandrename ${rY.baf2IslandId} ${aY}`)) : AY(null))
        },
        sY = () => {
          AY(null)
        };
      return (0, WI.jsxs)("div", {
        className: "Baf2IslandForm",
        ...da(sY),
        children: [(0, WI.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [IY(`${Ru}islandsRenameLabel`), (0, WI.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: OY,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: Ja,
            onChange: YY => {
              gY(YY.target.value)
            },
            ...ha(uY, sY)
          })]
        }), "" === aY && (0, WI.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: IY(`${Ru}islandsRenameEmpty`)
        }), ya(aY) && (0, WI.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: IY(`${Ru}islandsNameReserved`)
        }), (0, WI.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, WI.jsx)(yR.p, {
            disabled: vY || !DY,
            onClick: uY,
            children: IY(`${Ru}islandsRenameSave`)
          }), (0, WI.jsx)(yR.f, {
            onClick: sY,
            children: IY(`${Ru}islandsCancel`)
          })]
        })]
      })
    }

    function au(YY) {
      let {
        card: rY,
        canDelete: DY,
        done: AY,
        t: IY
      } = YY;
      const RY = CR(),
        [OY, gY] = (0, FY.useState)(""),
        aY = function(YY, rY) {
          return ia(YY).toLowerCase() === ia(rY).toLowerCase()
        }(OY, rY.baf2IslandName),
        vY = () => {
          aY && DY && AY(RY.sendIslandEdit(`baf2islanddelete ${rY.baf2IslandId}`))
        },
        uY = () => {
          AY(null)
        },
        sY = Na("name"),
        [iY, yY = ""] = IY(`${Ru}islandsDeleteConfirm`, {
          name: sY
        }).split(sY);
      return (0, WI.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...da(uY),
        children: [(0, WI.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, WI.jsxs)("span", {
            children: [iY, (0, WI.jsx)("strong", {
              children: rY.baf2IslandName
            }), yY]
          }), (0, WI.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: OY,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: Ja,
            onChange: YY => {
              gY(YY.target.value)
            },
            ...ha(vY, uY)
          })]
        }), Za(rY) && (0, WI.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: IY(`${Ru}islandsDeleteLeftBack`)
        }), (0, WI.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, WI.jsx)(yR.D, {
            disabled: !aY || !DY,
            onClick: vY,
            children: IY(`${Ru}islandsDeleteForGood`)
          }), (0, WI.jsx)(yR.f, {
            onClick: uY,
            children: IY(`${Ru}islandsCancel`)
          })]
        })]
      })
    }

    function vu(YY) {
      let {
        members: rY,
        t: DY
      } = YY;
      const FY = rY.length;
      return (0, WI.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, WI.jsxs)("span", {
          children: [1 === FY ? DY(`${Ru}islandsPlayersOne`) : DY(`${Ru}islandsPlayers`, {
            count: String(FY)
          }), " "]
        }), rY.map(((YY, rY) => (0, WI.jsxs)("span", {
          className: QA()("Baf2IslandMember", {
            Here: YY.baf2MemberHere
          }),
          title: YY.baf2MemberHere ? DY(`${Ru}islandsPlayerHere`) : void 0,
          children: [YY.baf2MemberName, rY < FY - 1 ? ", " : ""]
        }, YY.baf2MemberKey)))]
      })
    }

    function uu(YY) {
      let {
        card: rY,
        answered: DY,
        nowMs: AY,
        t: IY
      } = YY;
      const RY = CR(),
        [OY, gY] = (0, FY.useState)(new Map),
        aY = Za(rY);
      if (!aY) return null;
      return (0, WI.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, WI.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: IY(`${Ru}islandsLeftTitle`)
        }), (0, WI.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: aY.left.map((YY => {
            const FY = YY.baf2LeftKey,
              vY = fa(OY.get(FY), DY, AY),
              uY = function(YY) {
                return 1 === YY ? [`${aa}islandsLeftItemsOne`] : [`${aa}islandsLeftItems`, {
                  count: String(YY)
                }]
              }(YY.baf2LeftItems);
            return (0, WI.jsx)("li", {
              className: QA()("Baf2IslandPerson", {
                Pending: vY
              }),
              children: (0, WI.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, WI.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: YY.baf2LeftName
                }), (0, WI.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: IY(uY[0], uY[1])
                }), aY.claim && (0, WI.jsx)(yR.p, {
                  className: "Baf2IslandPersonButton",
                  disabled: vY,
                  onClick: () => {
                    (YY => {
                      const DY = RY.sendIslandEdit(`baf2coopclaim ${rY.baf2IslandId} ${YY}`);
                      gY((rY => new Map(rY).set(YY, {
                        atMs: Date.now(),
                        answer: DY
                      })))
                    })(FY)
                  },
                  children: IY(`${Ru}islandsClaim`)
                })]
              })
            }, FY)
          }))
        }), aY.goThere && (0, WI.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: IY(`${Ru}islandsClaimGoThere`)
        })]
      })
    }

    function su(YY) {
      let {
        card: rY,
        view: DY,
        blocked: AY,
        maxIslands: IY,
        answered: RY,
        nowMs: OY,
        done: gY,
        openSocial: aY,
        t: vY
      } = YY;
      const uY = CR(),
        [sY, iY] = (0, FY.useState)(new Map),
        [yY, QY] = (0, FY.useState)(new Map),
        [oY, WY] = (0, FY.useState)(null),
        EY = (0, FY.useRef)(null);
      ba(EY);
      const mY = rY.baf2IslandId,
        VY = rY.baf2IslandCoop,
        SY = null !== VY && void 0 !== VY && VY.baf2CoopMembers.some((YY => YY.baf2MemberKey === oY)) ? oY : null,
        lY = function(YY, rY) {
          const DY = YY.baf2IslandCoop;
          return DY && Ca(DY) || null !== rY ? void 0 : YY.baf2IslandInvitable
        }(rY, AY),
        TY = function(YY, rY) {
          const DY = YY.baf2IslandCoop;
          return DY && Ca(DY) ? {
            key: `${aa}islandsCoopFull`,
            params: {
              max: String(DY.baf2CoopMax)
            }
          } : void 0 !== YY.baf2IslandInvitable && null === rY || DY && !DY.baf2CoopManageHere ? null : "degraded" === rY || "stuck" === rY ? {
            key: `${aa}islandsInviteNotLoaded`
          } : null === rY || function(YY) {
            return "notHome" === YY || "wilds" === YY || "visiting" === YY
          }(rY) || Ea(rY) ? {
            key: `${aa}islandsInviteGoThere`
          } : {
            key: `${aa}islandsInviteBusy`
          }
        }(rY, AY),
        eY = () => {
          var YY;
          WY(null), null === (YY = EY.current) || void 0 === YY || YY.focus()
        };
      return (0, WI.jsxs)("div", {
        ref: EY,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...da(null === SY ? gY : eY),
        children: [VY && (0, WI.jsxs)(WI.Fragment, {
          children: [(0, WI.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: vY(`${Ru}islandsPlayersTitle`, {
              count: String(VY.baf2CoopMembers.length),
              max: String(VY.baf2CoopMax)
            })
          }), (0, WI.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: VY.baf2CoopMembers.map(((YY, rY) => {
              const FY = YY.baf2MemberKey,
                AY = fa(sY.get(FY), RY, OY);
              return (0, WI.jsxs)("li", {
                className: QA()("Baf2IslandPerson", {
                  Pending: AY
                }),
                children: [(0, WI.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, WI.jsx)("span", {
                    className: QA()("Baf2IslandPersonName", {
                      Here: YY.baf2MemberHere
                    }),
                    children: YY.baf2MemberName
                  }), YY.baf2MemberHere && (0, WI.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: vY(`${Ru}islandsPlayerHere`)
                  }), 0 === rY && (0, WI.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: vY(`${Ru}islandsPlayerOwner`)
                  }), DY.remove && rY > 0 && !AY && SY !== FY && (0, WI.jsx)(yR.E, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var YY;
                      WY(FY), null === (YY = EY.current) || void 0 === YY || YY.focus()
                    },
                    children: vY(`${Ru}islandsRemove`)
                  })]
                }), SY === FY && (0, WI.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, WI.jsx)("p", {
                    children: Ba(vY, `${Ru}islandsRemoveConfirm`, {
                      player: YY.baf2MemberName
                    })
                  }), (0, WI.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, WI.jsx)(yR.D, {
                      onClick: () => {
                        (YY => {
                          const rY = uY.sendIslandEdit(`baf2coopremove ${mY} ${YY.baf2MemberKey}`);
                          iY((DY => new Map(DY).set(YY.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: rY
                          }))), eY()
                        })(YY)
                      },
                      children: vY(`${Ru}islandsRemoveYes`)
                    }), (0, WI.jsx)(yR.f, {
                      onClick: eY,
                      children: vY(`${Ru}islandsCancel`)
                    })]
                  })]
                })]
              }, FY)
            }))
          })]
        }), (void 0 !== lY || null !== TY) && (0, WI.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: vY(`${Ru}islandsInviteTitle`)
        }), !VY && (void 0 !== lY || null !== TY) && (0, WI.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: vY(`${Ru}islandsInviteShareNote`)
        }), 0 === (null === lY || void 0 === lY ? void 0 : lY.length) && (0, WI.jsx)(iu, {
          openSocial: aY,
          t: vY
        }), void 0 !== lY && lY.length > 0 && (0, WI.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: lY.map((YY => {
            const rY = !0 === YY.baf2InvitableSent || fa(yY.get(YY.baf2InvitableId), RY, OY);
            return (0, WI.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, WI.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, WI.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: YY.baf2InvitableName
                }), YY.baf2InvitableFull && !rY && (0, WI.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: vY(`${Ru}islandsInviteTheirFull`, {
                    max: String(IY)
                  })
                }), (rY || !YY.baf2InvitableFull) && (0, WI.jsx)(yR.p, {
                  className: "Baf2IslandPersonButton",
                  disabled: rY,
                  onClick: () => {
                    (YY => {
                      const rY = uY.sendIslandEdit(`baf2coopinvite ${mY} ${YY}`);
                      QY((DY => new Map(DY).set(YY, {
                        atMs: Date.now(),
                        answer: rY
                      })))
                    })(YY.baf2InvitableId)
                  },
                  children: vY(rY ? `${Ru}islandsInvited` : `${Ru}islandsInvite`)
                })]
              })
            }, YY.baf2InvitableId)
          }))
        }), TY && (0, WI.jsx)(pa, {
          note: TY,
          t: vY
        }), (0, WI.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, WI.jsx)(yR.f, {
            onClick: gY,
            children: vY(`${Ru}islandsDone`)
          })
        })]
      })
    }

    function iu(YY) {
      let {
        openSocial: rY,
        t: DY
      } = YY;
      return (0, WI.jsxs)(WI.Fragment, {
        children: [(0, WI.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: DY(rY ? `${Ru}islandsInviteNobody` : `${Ru}islandsInviteNobodyGuest`)
        }), rY && (0, WI.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, WI.jsx)(yR.f, {
            onClick: rY,
            children: DY("socialBar:social")
          })
        })]
      })
    }

    function yu(YY) {
      let {
        className: rY,
        text: DY,
        ConfirmButton: AY,
        confirmLabel: IY,
        canConfirm: RY,
        send: OY,
        done: gY,
        t: aY
      } = YY;
      const vY = (0, FY.useRef)(null);
      ba(vY);
      const uY = () => {
        gY(null)
      };
      return (0, WI.jsxs)("div", {
        ref: vY,
        tabIndex: -1,
        className: QA()("Baf2IslandForm", rY),
        ...da(uY),
        children: [(0, WI.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: DY
        }), (0, WI.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, WI.jsx)(AY, {
            disabled: !RY,
            onClick: () => {
              RY && gY(OY())
            },
            children: IY
          }), (0, WI.jsx)(yR.f, {
            onClick: uY,
            children: aY(`${Ru}islandsCancel`)
          })]
        })]
      })
    }

    function Qu(YY) {
      return "hidden" !== YY
    }

    function ou(YY) {
      var rY, DY;
      let {
        card: AY,
        keepOwn: IY,
        blocked: RY,
        maxIslands: OY,
        serverNowMs: gY,
        nowMs: aY,
        actions: vY,
        full: uY,
        waits: sY,
        answered: iY,
        mode: yY,
        setMode: QY,
        pending: oY,
        onSent: WY,
        switchTo: EY,
        leave: mY,
        coopOn: VY,
        openSocial: SY,
        t: lY
      } = YY;
      const TY = CR(),
        eY = AY.baf2IslandActive,
        NY = eY ? null : function(YY, rY) {
          if (YY <= 0) return null;
          const DY = rY - YY;
          if (DY < gI) return [`${aa}islandsPlayedJustNow`];
          if (DY < va) return [`${aa}islandsPlayedMinutes`, {
            minutes: String(Math.floor(DY / gI))
          }];
          if (DY < ua) return [`${aa}islandsPlayedHours`, {
            hours: String(Math.floor(DY / va))
          }];
          const FY = Math.floor(DY / ua);
          return 1 === FY ? [`${aa}islandsPlayedDay`] : [`${aa}islandsPlayedDays`, {
            days: String(FY)
          }]
        }(AY.baf2IslandLastPlayedMs, gY),
        BY = void 0 === (cY = AY.baf2IslandItems) ? null : 0 === cY ? [`${aa}islandsItemsNone`] : 1 === cY ? [`${aa}islandsItemsOne`] : [`${aa}islandsItems`, {
          count: String(cY)
        }];
      var cY;
      const KY = function(YY) {
          return YY ? 1 === YY ? [`${aa}islandsWaitingOne`] : [`${aa}islandsWaiting`, {
            count: String(YY)
          }] : null
        }(AY.baf2IslandWaiting),
        HY = AY.baf2IslandUnreadable,
        zY = AY.baf2IslandCoop,
        ZY = za(AY, vY, IY, uY, VY),
        CY = (0, FY.useRef)(null);
      Ma(null !== yY, CY);
      const fY = () => {
          var YY;
          QY(null), null === (YY = CY.current) || void 0 === YY || YY.focus()
        },
        jY = (YY, rY) => {
          fY(), null !== YY && WY(YY, rY)
        },
        hY = (YY, rY) => lY(`${Ru}${YY}`, {
          time: iI(lY, rY)
        });
      return (0, WI.jsxs)("li", {
        ref: CY,
        tabIndex: -1,
        className: QA()("Baf2IslandCard", {
          Active: eY,
          Pending: oY,
          Shared: void 0 !== zY
        }),
        children: [(0, WI.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, WI.jsx)("strong", {
            className: "Baf2IslandName",
            children: AY.baf2IslandName
          }), eY && (0, WI.jsx)("span", {
            className: "Baf2IslandBadge",
            children: lY(`${Ru}islandsOnThis`)
          }), zY && (0, WI.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: lY(`${Ru}islandsShared`)
          })]
        }), "member" === (null === zY || void 0 === zY ? void 0 : zY.baf2CoopRole) && (0, WI.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: Ba(lY, `${Ru}islandsSharedBy`, {
            owner: zY.baf2CoopOwner
          })
        }), void 0 !== HY && (0, WI.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: lY("newer" === HY ? `${Ru}islandsUnreadable` : `${Ru}islandsDamaged`)
        }), "corrupt" === HY && uY && (0, WI.jsx)("p", {
          className: "Baf2IslandStats",
          children: lY(`${Ru}islandsDamagedFull`)
        }), void 0 === HY && (0, WI.jsxs)(WI.Fragment, {
          children: [(0, WI.jsx)(qa, {
            tier: AY.baf2IslandTier,
            t: lY
          }), (0, WI.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, WI.jsx)("span", {
              children: 1 === AY.baf2IslandQuestsDone ? lY(`${Ru}islandsQuestsDoneOne`) : lY(`${Ru}islandsQuestsDone`, {
                count: String(AY.baf2IslandQuestsDone)
              })
            }), (0, WI.jsx)("span", {
              children: 1 === AY.baf2IslandMachines ? lY(`${Ru}islandsMachinesOne`) : lY(`${Ru}islandsMachines`, {
                count: String(AY.baf2IslandMachines)
              })
            }), BY && (0, WI.jsx)("span", {
              children: lY(BY[0], BY[1])
            }), KY && (0, WI.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: lY(KY[0], KY[1])
            }), NY && (0, WI.jsx)("span", {
              children: lY(NY[0], NY[1])
            })]
          })]
        }), zY && void 0 === zY.baf2CoopState && "people" !== yY && (0, WI.jsx)(vu, {
          members: zY.baf2CoopMembers,
          t: lY
        }), null === yY && (0, WI.jsx)(uu, {
          card: AY,
          answered: iY,
          nowMs: aY,
          t: lY
        }), ZY.note && (0, WI.jsx)(pa, {
          note: ZY.note,
          className: QA()({
            Unreachable: void 0 !== (null === zY || void 0 === zY ? void 0 : zY.baf2CoopState)
          }),
          t: lY
        }), "rename" === yY && (0, WI.jsx)(gu, {
          card: AY,
          canRename: "enabled" === ZY.rename,
          done: jY,
          t: lY
        }), "delete" === yY && (0, WI.jsx)(au, {
          card: AY,
          canDelete: "enabled" === ZY.delete,
          done: YY => {
            jY(YY, zY ? "delete" : void 0)
          },
          t: lY
        }), "people" === yY && (0, WI.jsx)(su, {
          card: AY,
          view: ZY,
          blocked: RY,
          maxIslands: OY,
          answered: iY,
          nowMs: aY,
          done: fY,
          openSocial: SY,
          t: lY
        }), "leave" === yY && (0, WI.jsx)(yu, {
          className: "Leave",
          text: Ba(lY, `${Ru}islandsLeaveConfirm`, {
            island: AY.baf2IslandName,
            owner: null !== (rY = null === (DY = AY.baf2IslandCoop) || void 0 === DY ? void 0 : DY.baf2CoopOwner) && void 0 !== rY ? rY : ""
          }),
          ConfirmButton: yR.D,
          confirmLabel: lY(`${Ru}islandsLeaveYes`),
          canConfirm: "enabled" === ZY.leave,
          send: () => Ou(TY, AY),
          done: YY => {
            jY(YY, "leave"), null !== YY && eY && mY()
          },
          t: lY
        }), "unshare" === yY && (0, WI.jsx)(yu, {
          className: "Unshare",
          text: Ba(lY, `${Ru}islandsStopSharingConfirm`, {
            island: AY.baf2IslandName
          }),
          ConfirmButton: yR.p,
          confirmLabel: lY(`${Ru}islandsStopSharing`),
          canConfirm: "enabled" === ZY.unshare,
          send: () => TY.sendIslandEdit(`baf2coopunshare ${AY.baf2IslandId}`),
          done: YY => {
            jY(YY), null !== YY && mY()
          },
          t: lY
        }), null === yY && !oY && (0, WI.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": AY.baf2IslandName,
          children: [Qu(ZY.switch) && (0, WI.jsx)(yR.p, {
            disabled: "enabled" !== ZY.switch,
            onClick: EY,
            children: sY.switch > 0 ? hY("islandsSwitchIn", sY.switch) : lY(`${Ru}islandsSwitch`)
          }), Qu(ZY.rename) && (0, WI.jsx)(yR.f, {
            disabled: "enabled" !== ZY.rename,
            onClick: () => {
              QY("rename")
            },
            children: lY(`${Ru}islandsRename`)
          }), Qu(ZY.people) && (0, WI.jsx)(yR.f, {
            disabled: "enabled" !== ZY.people,
            onClick: () => {
              QY("people")
            },
            children: lY("players" === ZY.peopleLabel ? `${Ru}islandsPlayersButton` : `${Ru}islandsInviteButton`)
          }), Qu(ZY.unshare) && (0, WI.jsx)(yR.f, {
            disabled: "enabled" !== ZY.unshare,
            onClick: () => {
              QY("unshare")
            },
            children: lY(`${Ru}islandsStopSharing`)
          }), Qu(ZY.dismiss) && (0, WI.jsx)(yR.f, {
            disabled: "enabled" !== ZY.dismiss,
            onClick: () => {
              WY(Ou(TY, AY), "dismiss"), eY && mY()
            },
            children: lY(`${Ru}islandsDismiss`)
          }), Qu(ZY.leave) && (0, WI.jsx)(yR.E, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== ZY.leave,
            onClick: () => {
              QY("leave")
            },
            children: eY && sY.switch > 0 ? hY("islandsLeaveIn", sY.switch) : lY(`${Ru}islandsLeave`)
          }), Qu(ZY.delete) && (0, WI.jsx)(yR.E, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== ZY.delete,
            onClick: () => {
              QY("delete")
            },
            children: sY.change > 0 && ZY.deleteWaits ? hY("islandsDeleteIn", sY.change) : lY(`${Ru}islandsDelete`)
          })]
        })]
      })
    }
    const Wu = "buildAFactory2Game:";

    function Eu(YY) {
      let {
        invite: rY,
        actions: DY,
        full: AY,
        maxIslands: IY,
        waitSeconds: RY,
        focus: OY,
        focused: gY,
        join: aY,
        decline: vY,
        t: uY
      } = YY;
      const [sY, iY] = (0, FY.useState)(!1), yY = (0, FY.useRef)(null);
      Ma(sY, yY), (0, FY.useEffect)((() => {
        var YY;
        OY && (iY(!0), null === (YY = yY.current) || void 0 === YY || YY.focus(), gY())
      }), [OY, gY]);
      const QY = function(YY, rY, DY, FY, AY) {
          return DY ? {
            join: !1,
            note: {
              key: `${aa}islandsJoinTooMany`,
              params: {
                max: String(FY)
              }
            }
          } : YY.baf2InvitePlayers >= AY ? {
            join: !1,
            note: {
              key: `${aa}islandsJoinFull`
            }
          } : {
            join: rY.switch,
            note: null
          }
        }(rY, DY, AY, IY, 10),
        oY = rY.baf2InviteIsland,
        WY = rY.baf2InvitePlayers,
        EY = () => {
          var YY;
          iY(!1), null === (YY = yY.current) || void 0 === YY || YY.focus()
        },
        mY = RY > 0 && null === QY.note ? uY(`${Wu}islandsJoinIn`, {
          time: iI(uY, RY)
        }) : uY(`${Wu}islandsJoin`);
      return (0, WI.jsxs)("li", {
        ref: yY,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...sY ? da(EY) : {},
        children: [(0, WI.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, WI.jsx)("strong", {
            className: "Baf2IslandName",
            children: oY
          })
        }), (0, WI.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: Ba(uY, `${Wu}islandsInvitedBy`, {
            owner: rY.baf2InviteOwner
          })
        }), (0, WI.jsx)(qa, {
          tier: rY.baf2InviteTier,
          t: uY
        }), (0, WI.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, WI.jsx)("span", {
            children: 1 === WY ? uY(`${Wu}islandsPlayersCountOne`) : uY(`${Wu}islandsPlayersCount`, {
              count: String(WY)
            })
          })
        }), QY.note && (0, WI.jsx)(pa, {
          note: QY.note,
          t: uY
        }), sY && (0, WI.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: Ba(uY, `${Wu}islandsJoinConfirm`, {
            island: oY
          })
        }), !sY && (0, WI.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": oY,
          children: [(0, WI.jsx)(yR.p, {
            disabled: !QY.join,
            onClick: () => {
              var YY;
              iY(!0), null === (YY = yY.current) || void 0 === YY || YY.focus()
            },
            children: mY
          }), (0, WI.jsx)(yR.f, {
            onClick: vY,
            children: uY(`${Wu}islandsDecline`)
          })]
        }), sY && (0, WI.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, WI.jsx)(yR.p, {
            disabled: !QY.join,
            onClick: aY,
            children: uY(`${Wu}islandsJoinYes`)
          }), (0, WI.jsx)(yR.f, {
            onClick: EY,
            children: uY(`${Wu}islandsCancel`)
          })]
        })]
      })
    }

    function mu(YY) {
      let {
        invites: rY,
        actions: DY,
        full: FY,
        maxIslands: AY,
        waitSeconds: IY,
        focus: RY,
        focused: OY,
        leave: gY,
        declined: aY,
        t: vY
      } = YY;
      const uY = CR();
      return (0, WI.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, WI.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: vY(`${Wu}islandsInvitesTitle`)
        }), (0, WI.jsx)("ul", {
          className: "Baf2IslandCards",
          children: rY.map((YY => {
            const rY = YY.baf2InviteId;
            return (0, WI.jsx)(Eu, {
              invite: YY,
              actions: DY,
              full: FY,
              maxIslands: AY,
              waitSeconds: IY,
              focus: RY === rY,
              focused: OY,
              join: () => {
                uY.send(`baf2coopaccept ${rY}`), gY()
              },
              decline: () => {
                uY.send(`baf2coopdecline ${rY}`), aY(rY)
              },
              t: vY
            }, rY)
          }))
        })]
      })
    }
    const Vu = "buildAFactory2Game:";

    function Su(YY) {
      let {
        cards: rY,
        activeName: DY,
        canStart: AY,
        waitSeconds: IY,
        leave: RY,
        t: OY
      } = YY;
      const gY = CR(),
        [aY, vY] = (0, FY.useState)(!1),
        [uY, sY] = (0, FY.useState)(""),
        iY = (0, FY.useRef)(null);
      Ma(aY, iY), (0, FY.useEffect)((() => {
        var YY;
        aY && (null === (YY = iY.current) || void 0 === YY || YY.focus())
      }), [aY]);
      const yY = Qa(rY),
        QY = ia(uY),
        oY = ya(QY),
        WY = () => {
          AY && !oY && (gY.send("" === QY || QY === yY ? nY : `${nY} ${QY}`), RY())
        },
        EY = () => {
          var YY;
          vY(!1), null === (YY = iY.current) || void 0 === YY || YY.focus()
        };
      return (0, WI.jsxs)("li", {
        ref: iY,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...aY ? da(EY) : {},
        children: [(0, WI.jsx)("strong", {
          className: "Baf2IslandName",
          children: OY(`${Vu}islandsNewTitle`)
        }), !aY && (0, WI.jsx)("p", {
          className: "Baf2IslandStats",
          children: OY(`${Vu}islandsNewNote`)
        }), aY && (0, WI.jsxs)(WI.Fragment, {
          children: [(0, WI.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: Ba(OY, `${Vu}islandsNewConfirm`, {
              name: DY
            })
          }), (0, WI.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [OY(`${Vu}islandsNewNameLabel`), (0, WI.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: uY,
              placeholder: yY,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: Ja,
              onChange: YY => {
                sY(YY.target.value)
              },
              ...ha(WY, EY)
            })]
          }), oY && (0, WI.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: OY(`${Vu}islandsNameReserved`)
          })]
        }), (0, WI.jsxs)("div", {
          className: QA()("Baf2IslandButtons", {
            Stacked: aY
          }),
          children: [(0, WI.jsx)(yR.p, {
            disabled: !AY || aY && oY,
            onClick: () => {
              if (!aY) return sY(yY), void vY(!0);
              WY()
            },
            children: IY > 0 ? OY(`${Vu}islandsNewIn`, {
              time: iI(OY, IY)
            }) : OY(aY ? `${Vu}islandsNewConfirmButton` : `${Vu}islandsNew`)
          }), aY && (0, WI.jsx)(yR.f, {
            onClick: EY,
            children: OY(`${Vu}islandsCancel`)
          })]
        })]
      })
    }

    function lu(YY) {
      var rY, DY;
      let {
        message: AY,
        arrivedAtMs: IY,
        close: RY,
        leave: OY,
        openSocial: gY
      } = YY;
      const aY = CR(),
        {
          t: vY
        } = (0, mA.C)(),
        uY = Xa(1e3),
        [sY, iY] = (0, FY.useState)(null),
        [yY, QY] = (0, FY.useState)(new Map),
        [oY, WY] = (0, FY.useState)(new Set),
        EY = AY.baf2IslandCards,
        mY = function(YY, rY, DY, FY) {
          return (null !== YY && void 0 !== YY ? YY : []).filter((YY => rY + YY.baf2InviteLeftMs > DY && !FY.has(YY.baf2InviteId)))
        }(AY.baf2IslandsInvites, IY, uY, oY),
        VY = mY.map((YY => YY.baf2InviteId)).join(" "),
        SY = (0, FY.useRef)(null),
        lY = wa(SY);
      (0, FY.useEffect)((() => {
        var YY, rY;
        null !== (YY = SY.current) && void 0 !== YY && YY.contains(document.activeElement) || (null === (rY = SY.current) || void 0 === rY || rY.focus())
      }), [AY, VY]), (0, FY.useEffect)((() => {
        QY((YY => function(YY, rY, DY, FY) {
          const AY = new Map;
          for (const IY of rY) {
            const rY = YY.get(IY.baf2IslandId);
            rY && (void 0 !== rY.untilGone || FY < rY.answer) && la(rY, IY, DY) && AY.set(IY.baf2IslandId, rY)
          }
          return AY.size === YY.size ? YY : AY
        }(YY, AY.baf2IslandCards, Date.now(), AY.baf2IslandsAnswered)))
      }), [AY]);
      const TY = sa(IY, AY.baf2IslandsWaitMs, uY),
        eY = AY.baf2IslandsBlocked,
        NY = ma(eY, TY),
        BY = function(YY, rY) {
          const DY = ma(YY, 0);
          return {
            switch: DY.switch ? rY : 0,
            change: DY.change ? rY : 0
          }
        }(eY, TY),
        cY = EY.length >= AY.baf2IslandsMax,
        KY = EY.length > 0,
        HY = function(YY, rY, DY) {
          return YY + Math.max(0, DY - rY)
        }(AY.baf2IslandsNowMs, IY, uY),
        zY = null !== (rY = null === (DY = EY.find((YY => YY.baf2IslandActive))) || void 0 === DY ? void 0 : DY.baf2IslandName) && void 0 !== rY ? rY : "",
        ZY = function(YY) {
          const rY = YY.filter(Ha).length;
          return rY <= 1 && rY < YY.length
        }(EY),
        CY = !0 === AY.baf2IslandsCoop,
        fY = function(YY, rY) {
          const DY = YY.find((YY => YY.baf2IslandActive)),
            FY = null === DY || void 0 === DY ? void 0 : DY.baf2IslandCoop;
          return DY && "member" === (null === FY || void 0 === FY ? void 0 : FY.baf2CoopRole) ? {
            key: `${aa}islandsKeepOwnMember`,
            names: {
              owner: FY.baf2CoopOwner,
              island: DY.baf2IslandName
            }
          } : {
            key: rY ? `${aa}islandsKeepOwn` : `${aa}islandsKeepOwnSolo`
          }
        }(EY, CY),
        [jY, hY] = (0, FY.useState)(null);
      (0, FY.useEffect)((() => {
        void 0 !== AY.baf2IslandsFocusInvite && hY(AY.baf2IslandsFocusInvite)
      }), [AY]);
      const dY = (0, FY.useCallback)((() => {
          hY(null)
        }), []),
        JY = sY ? EY.find((YY => YY.baf2IslandId === sY.id)) : void 0,
        MY = sY && JY && "hidden" !== za(JY, NY, ZY, cY, CY)[sY.mode] ? sY : null;
      return (0, WI.jsx)(iR.e, {
        close: RY,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, WI.jsxs)("section", {
          ref: SY,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: lY ? {
            marginTop: `${lY.marginTop}px`,
            maxHeight: `${lY.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, WI.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, WI.jsxs)("div", {
              children: [(0, WI.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: vY(`${Vu}islandsTitle`)
              }), KY && (0, WI.jsx)("p", {
                children: vY(`${Vu}islandsSubtitle`, {
                  count: String(EY.length),
                  max: String(AY.baf2IslandsMax)
                })
              })]
            }), (0, WI.jsx)(yR.k, {
              ariaLabel: vY(`${Vu}islandsClose`),
              onClick: RY
            })]
          }), (0, WI.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== eY && (0, WI.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: Ba(vY, oa(eY, Wa(EY)), {
                island: zY
              })
            }), KY && mY.length > 0 && (0, WI.jsx)(mu, {
              invites: mY,
              actions: NY,
              full: cY,
              maxIslands: AY.baf2IslandsMax,
              waitSeconds: BY.switch,
              focus: jY,
              focused: dY,
              leave: OY,
              declined: YY => {
                WY((rY => new Set(rY).add(YY)))
              },
              t: vY
            }), KY && (0, WI.jsxs)(WI.Fragment, {
              children: [cY && (0, WI.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: vY(`${Vu}islandsFull`, {
                  max: String(AY.baf2IslandsMax)
                })
              }), (0, WI.jsx)("p", {
                className: "Baf2IslandsNote",
                children: Ba(vY, fY.key, fY.names)
              }), (0, WI.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [EY.map((YY => {
                  const rY = YY.baf2IslandId;
                  return (0, WI.jsx)(ou, {
                    card: YY,
                    keepOwn: ZY,
                    coopOn: CY,
                    openSocial: gY,
                    blocked: eY,
                    maxIslands: AY.baf2IslandsMax,
                    serverNowMs: HY,
                    nowMs: uY,
                    actions: NY,
                    full: cY,
                    waits: BY,
                    answered: AY.baf2IslandsAnswered,
                    mode: (null === MY || void 0 === MY ? void 0 : MY.id) === rY ? MY.mode : null,
                    setMode: YY => {
                      iY(null === YY ? null : {
                        id: rY,
                        mode: YY
                      })
                    },
                    pending: la(yY.get(rY), YY, uY),
                    onSent: (DY, FY) => {
                      QY((AY => {
                        const IY = {
                          atMs: Date.now(),
                          from: YY.baf2IslandName,
                          answer: DY
                        };
                        return new Map(AY).set(rY, FY ? {
                          ...IY,
                          untilGone: FY
                        } : IY)
                      }))
                    },
                    leave: OY,
                    switchTo: () => {
                      aY.send(`baf2islandswitch ${rY}`), OY()
                    },
                    t: vY
                  }, rY)
                })), !cY && (0, WI.jsx)(Su, {
                  cards: EY,
                  activeName: zY,
                  canStart: NY.change,
                  waitSeconds: BY.change,
                  leave: OY,
                  t: vY
                })]
              })]
            })]
          })]
        })
      })
    }
    const Tu = {
        all: "buildAFactory2Game:terminalChip_all",
        recent: "buildAFactory2Game:terminalChip_recent",
        YI: "buildAFactory2Game:terminalChip_ores",
        bars: "buildAFactory2Game:terminalChip_bars",
        parts: "buildAFactory2Game:terminalChip_parts",
        nuclear: "buildAFactory2Game:terminalChip_nuclear",
        farm: "buildAFactory2Game:terminalChip_farm",
        other: "buildAFactory2Game:terminalChip_other"
      },
      eu = Object.keys(Tu),
      Nu = new Set([...Object.keys(br), ...[...Br.Press.recipes, ...Br["Wire Mill"].recipes].map((YY => YY.output))]),
      Bu = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      cu = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      Ku = / Bar$|Alloy$/,
      Hu = /Porkchop|Beef|Mutton|Venison|Steak/,
      zu = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;

    function Zu(YY) {
      let {
        item: rY,
        name: DY,
        amount: FY,
        selected: AY,
        small: IY,
        onPick: RY
      } = YY;
      return (0, WI.jsxs)("button", {
        type: "button",
        className: QA()("Baf2TermTile", {
          On: AY,
          Small: IY
        }),
        "aria-label": `${DY}: ${FY}`,
        "aria-pressed": AY,
        onClick: RY,
        children: [(0, WI.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, WI.jsx)(SA.c, {
            itemName: rY,
            amount: 0
          })
        }), (0, WI.jsx)("span", {
          className: "Baf2TermCount",
          children: uI(FY, 1e4)
        }), !IY && (0, WI.jsx)("span", {
          className: "Baf2TermName",
          children: DY
        })]
      })
    }

    function Cu(YY) {
      let {
        store: rY,
        close: DY,
        send: AY
      } = YY;
      const {
        t: IY
      } = (0, mA.C)(), {
        isTouchScreen: RY
      } = (0, sA.j)(["isTouchScreen"]);
      ! function(YY) {
        const [rY, DY] = (0, FY.useState)(YY.version);
        (0, FY.useEffect)((() => (DY(YY.version), YY.subscribe((() => {
          DY(YY.version)
        })))), [YY])
      }(rY);
      const [OY, gY] = (0, FY.useState)("all"), [aY, vY] = (0, FY.useState)(!1), [uY, sY] = (0, FY.useState)(""), [iY, yY] = (0, FY.useState)(""), [QY, oY] = (0, FY.useState)(null), [WY, EY, mY] = function() {
        const YY = (0, FY.useRef)(null),
          [rY, DY] = (0, FY.useState)(!1),
          AY = () => {
            const rY = YY.current;
            DY(null !== rY && rY.scrollLeft + rY.clientWidth < rY.scrollWidth - 1)
          };
        return (0, FY.useEffect)(AY), (0, FY.useEffect)((() => {
          const rY = YY.current;
          if (!rY) return;
          const DY = new ResizeObserver(AY);
          return DY.observe(rY), () => {
            DY.disconnect()
          }
        }), []), [YY, rY, AY]
      }(), VY = (0, FY.useMemo)((() => new Map), [IY]), SY = YY => {
        let rY = VY.get(YY);
        return void 0 === rY && (rY = function(YY, rY) {
          const DY = /^(.+) \((.+)\)$/.exec(YY);
          return DY ? rY(DY[2], DY[1]) : YY
        }(PA(IY, YY), ((YY, rY) => IY("buildAFactory2Game:terminalTileKind", {
          kind: YY,
          base: rY
        }))), VY.set(YY, rY)), rY
      }, lY = rY.isReadOnly(), TY = rY.recent(), eY = rY.items(), NY = iY.trim().toLowerCase(), BY = ("recent" === OY ? TY : eY).filter((YY => {
        const rY = SY(YY);
        return ("all" === OY || "recent" === OY || function(YY) {
          return AI(YY) ? "farm" : Bu.test(YY) ? "nuclear" : Ku.test(YY) ? "bars" : Hu.test(YY) ? "farm" : cu.test(YY) ? "YI" : Nu.has(YY) ? "parts" : zu.test(YY) ? "farm" : "other"
        }(YY) === OY) && ("" === NY || rY.toLowerCase().includes(NY)) && ("" === uY || rY.toUpperCase().startsWith(uY))
      })), cY = new Set(eY.map((YY => SY(YY).charAt(0).toUpperCase()))), KY = "recent" !== OY && TY.length > 0, HY = function(YY, rY) {
        return null !== YY && rY.includes(YY) ? YY : null
      }(QY, KY ? [...BY, ...TY] : BY), zY = null === HY ? 0 : rY.amount(HY), ZY = YY => {
        oY(HY === YY ? null : YY)
      }, CY = YY => {
        null !== HY && zY > 0 && AY(rY.take(YY, HY))
      }, fY = "" !== uY ? IY("buildAFactory2Game:terminalEmptyLetter", {
        letter: uY
      }) : "" !== NY ? IY("buildAFactory2Game:terminalEmptySearch", {
        query: iY
      }) : IY("buildAFactory2Game:terminalEmpty");
      return (0, WI.jsx)(iR.e, {
        close: DY,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, WI.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, WI.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, WI.jsxs)("div", {
              children: [(0, WI.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: IY(rY.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, WI.jsx)("p", {
                children: IY("buildAFactory2Game:terminalSubtitle", {
                  count: String(rY.siloCount())
                })
              })]
            }), (0, WI.jsx)(yR.k, {
              onClick: DY
            })]
          }), (0, WI.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, WI.jsxs)("div", {
              className: "Baf2TermTools",
              children: [(0, WI.jsx)("div", {
                ref: WY,
                className: QA()("Baf2TermChips", {
                  MoreRight: EY
                }),
                onScroll: mY,
                children: aY ? (0, WI.jsxs)(WI.Fragment, {
                  children: [(0, WI.jsx)("button", {
                    type: "button",
                    "aria-label": IY("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      vY(!1), sY("")
                    },
                    children: "\u2190"
                  }), [...cY].sort().map((YY => (0, WI.jsx)("button", {
                    type: "button",
                    className: QA()({
                      On: uY === YY
                    }),
                    onClick: () => {
                      sY(uY === YY ? "" : YY)
                    },
                    children: YY
                  }, YY)))]
                }) : (0, WI.jsxs)(WI.Fragment, {
                  children: [(0, WI.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      vY(!0)
                    },
                    children: IY("buildAFactory2Game:terminalLetters")
                  }), eu.map((YY => (0, WI.jsx)("button", {
                    type: "button",
                    className: QA()({
                      On: OY === YY
                    }),
                    onClick: () => {
                      gY(YY)
                    },
                    children: IY(Tu[YY])
                  }, YY)))]
                })
              }), !RY && (0, WI.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: iY,
                placeholder: IY("buildAFactory2Game:terminalSearch"),
                "aria-label": IY("buildAFactory2Game:terminalSearch"),
                onChange: YY => {
                  yY(YY.target.value)
                },
                onKeyDown: YY => {
                  YY.stopPropagation()
                }
              }), (0, WI.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": IY("buildAFactory2Game:terminalResort"),
                title: IY("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  rY.resort()
                },
                children: "\u21c5"
              })]
            }), KY && (0, WI.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, WI.jsx)("span", {
                children: IY(Tu.recent)
              }), TY.map((YY => (0, WI.jsx)(Zu, {
                item: YY,
                name: SY(YY),
                amount: rY.amount(YY),
                selected: HY === YY,
                small: !0,
                onPick: () => {
                  ZY(YY)
                }
              }, YY)))]
            }), (0, WI.jsx)("div", {
              className: "Baf2TermTiles",
              children: BY.length > 0 ? BY.map((YY => (0, WI.jsx)(Zu, {
                item: YY,
                name: SY(YY),
                amount: rY.amount(YY),
                selected: HY === YY,
                onPick: () => {
                  ZY(YY)
                }
              }, YY))) : (0, WI.jsx)("p", {
                className: "Baf2TermEmpty",
                children: fY
              })
            }), (0, WI.jsxs)("div", {
              className: "Baf2TermActions",
              children: [(0, WI.jsx)("span", {
                className: "Baf2TermPicked",
                children: lY ? (0, WI.jsxs)(WI.Fragment, {
                  children: [null !== HY && zY > 0 ? SY(HY) : IY("buildAFactory2Game:terminalVisiting"), (0, WI.jsx)("small", {
                    children: IY("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== HY && zY > 0 ? (0, WI.jsxs)(WI.Fragment, {
                  children: [SY(HY), (0, WI.jsx)("small", {
                    children: IY("buildAFactory2Game:terminalStored", {
                      amount: zY.toLocaleString()
                    })
                  })]
                }) : IY("buildAFactory2Game:terminalPick")
              }), !lY && (0, WI.jsxs)(WI.Fragment, {
                children: [(0, WI.jsx)(yR.f, {
                  className: "Baf2TermTake",
                  disabled: 0 === zY,
                  onClick: () => {
                    CY("one")
                  },
                  children: IY("buildAFactory2Game:terminalTakeOne")
                }), (0, WI.jsx)(yR.f, {
                  className: "Baf2TermTake",
                  disabled: 0 === zY,
                  onClick: () => {
                    CY("stack")
                  },
                  children: IY("buildAFactory2Game:terminalTakeStack", {
                    amount: String(99)
                  })
                }), (0, WI.jsx)(yR.n, {
                  className: "Baf2TermTake",
                  disabled: 0 === zY,
                  onClick: () => {
                    CY("fill")
                  },
                  children: IY("buildAFactory2Game:terminalFill")
                })]
              })]
            })]
          })]
        })
      })
    }

    function fu(YY) {
      let {
        kind: rY,
        icon: DY,
        label: FY,
        number: AY,
        preview: IY,
        note: RY,
        tone: OY = null,
        share: gY,
        onExplain: aY
      } = YY;
      return (0, WI.jsxs)("button", {
        type: "button",
        className: QA()("NxLane", rY, {
          Warn: "warn" === OY,
          Danger: "danger" === OY
        }),
        onClick: aY,
        children: [(0, WI.jsxs)("span", {
          className: "NxLaneHead",
          children: [DY, (0, WI.jsx)("span", {
            className: "NxLaneLabel",
            children: FY
          })]
        }), (0, WI.jsxs)("span", {
          className: "NxLaneNum",
          children: [AY, IY && (0, WI.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", IY]
          })]
        }), (0, WI.jsx)("span", {
          className: "NxLaneNote",
          children: RY
        }), void 0 !== gY && (0, WI.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, gY)) + "%"
          }
        })]
      })
    }

    function ju(YY) {
      let {
        kind: rY,
        step: DY,
        short: FY,
        planned: AY
      } = YY;
      return (0, WI.jsx)("i", {
        className: QA()("NxPipe", rY, `Step${DY}`, {
          Short: FY,
          Planned: AY
        }),
        "aria-hidden": "true"
      })
    }

    function hu(YY) {
      let {
        max: rY,
        bands: DY,
        ticks: FY,
        now: AY,
        settle: IY,
        settleTone: RY,
        onExplain: OY
      } = YY;
      const gY = YY => Math.max(0, Math.min(rY, YY)) / rY * 100 + "%";
      let aY = 0;
      return (0, WI.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: OY,
        children: [(0, WI.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [DY.map((YY => {
            const rY = {
              bottom: gY(aY),
              height: `calc(${gY(YY.upTo)} - ${gY(aY)})`
            };
            return aY = YY.upTo, (0, WI.jsx)("i", {
              className: QA()("NxGaugeBand", YY.kind),
              style: rY
            }, YY.kind)
          })), null !== AY && (0, WI.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: gY(AY)
            }
          }), void 0 !== IY && null !== IY && (0, WI.jsx)("i", {
            className: QA()("NxGaugeSettle", {
              Bad: "bad" === RY
            }),
            style: {
              bottom: gY(IY)
            }
          })]
        }), (0, WI.jsx)("span", {
          className: "NxGaugeTicks",
          children: FY.map((YY => (0, WI.jsx)("small", {
            style: {
              bottom: gY(YY)
            },
            children: YY
          }, YY)))
        })]
      })
    }

    function du(YY) {
      const [rY, DY] = (0, FY.useState)(null), [AY, IY] = (0, FY.useState)((() => {
        try {
          return null === window.localStorage.getItem(YY)
        } catch {
          return !1
        }
      })), RY = (0, FY.useRef)(null);
      (0, FY.useEffect)((() => () => {
        null !== RY.current && clearTimeout(RY.current)
      }), []);
      const OY = (0, FY.useCallback)((rY => {
          DY(rY), IY(!1);
          try {
            window.localStorage.setItem(YY, "1")
          } catch {}
          null !== RY.current && clearTimeout(RY.current), RY.current = setTimeout((() => {
            RY.current = null, DY(null)
          }), 5e3)
        }), [YY]),
        gY = (0, FY.useCallback)(((rY, DY) => {
          const FY = `${YY}:${rY}`;
          try {
            if (null !== window.localStorage.getItem(FY)) return;
            window.localStorage.setItem(FY, "1")
          } catch {
            return
          }
          OY(DY)
        }), [OY, YY]);
      return {
        explained: rY,
        hinting: AY,
        explain: OY,
        explainOnce: gY
      }
    }

    function Ju(YY) {
      let {
        text: rY,
        tone: DY,
        explained: FY
      } = YY;
      return (0, WI.jsxs)("p", {
        className: QA()("NxStatus", null === FY ? DY : "Explain"),
        "aria-live": "polite",
        children: [null !== FY && (0, WI.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== FY && void 0 !== FY ? FY : rY]
      })
    }
    const Mu = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function wu(YY, rY) {
      const DY = Number(YY[rY]);
      return 1 === DY || 2 === DY || 3 === DY ? DY : 0
    }

    function bu(YY) {
      return !!yg("reactor", YY.baf2RxNeed) || void 0 !== YY.baf2RxLayout && YY.baf2RxNeed.some((YY => {
        let [rY, DY] = YY;
        return DY > 0 && Mu.includes(rY)
      }))
    }
    const Xu = "buildAFactory2Game:";

    function qu(YY) {
      let {
        status: rY,
        store: DY,
        busy: FY
      } = YY;
      const {
        t: AY
      } = (0, mA.C)();
      return function(YY) {
        return 0 !== (YY.baf2RxFlags & gr) && (!YY.baf2RxFormed || void 0 !== YY.baf2RxLayout)
      }(rY) ? (0, WI.jsx)(yR.n, {
        disabled: !bu(rY) || FY,
        onClick: () => {
          DY.tap("fill", (() => {
            DY.send("fill")
          }))
        },
        children: AY(void 0 !== rY.baf2RxLayout ? `${Xu}rxFillLayout` : `${Xu}rxFill`)
      }) : null
    }

    function pu(YY) {
      let {
        status: rY,
        store: DY,
        readOnly: AY,
        bare: IY = !1
      } = YY;
      const {
        t: RY
      } = (0, mA.C)(), OY = rY.baf2RxLayout, [gY, aY, vY] = rY.baf2RxDims, uY = (0, FY.useMemo)((() => {
        if (void 0 === OY) return 0;
        const YY = Uint8Array.from(OY, ((YY, rY) => wu(OY, rY)));
        return kO([gY - 2, aY - 2, vY - 2], YY).max
      }), [OY, gY, aY, vY]);
      return void 0 === OY ? null : (0, WI.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!IY && (0, WI.jsx)("span", {
          className: "Baf2RxHint",
          children: RY(`${Xu}rxLayoutLine`, {
            amount: Sg(uY)
          })
        }), !AY && (0, WI.jsx)(yR.f, {
          onClick: () => {
            DY.send("layout", 0)
          },
          children: RY(`${Xu}rxLayoutHide`)
        })]
      })
    }
    const ku = "buildAFactory2Game:",
      Gu = {
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

    function xu(YY) {
      let {
        id: rY,
        title: DY,
        body: FY,
        bodyParams: AY,
        yes: IY,
        cancel: RY,
        confirm: OY
      } = YY;
      const {
        t: gY
      } = (0, mA.C)();
      return (0, WI.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": rY,
        children: [(0, WI.jsx)("h3", {
          id: rY,
          children: gY(DY)
        }), (0, WI.jsx)("p", {
          children: gY(FY, AY)
        }), (0, WI.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, WI.jsx)(yR.j, {
            onClick: RY,
            children: gY(`${ku}rxCancel`)
          }), (0, WI.jsx)(yR.D, {
            onClick: OY,
            children: gY(IY)
          })]
        })]
      })
    }

    function nu(YY) {
      const [rY, DY] = (0, FY.useState)((() => YY.get()));
      return (0, FY.useEffect)((() => (DY(YY.get()), YY.subscribe((() => {
        DY(YY.get())
      })))), [YY]), rY
    }

    function Pu(YY) {
      let {
        kind: rY,
        cap: DY,
        busy: AY = !1,
        whyNot: IY = null,
        apart: RY
      } = YY;
      const {
        t: OY
      } = (0, mA.C)(), [gY, aY] = (0, FY.useState)(!1), vY = null !== IY, uY = (0, FY.useRef)(null);
      if ((0, FY.useEffect)((() => {
          vY && aY(!1)
        }), [vY]), (0, FY.useLayoutEffect)((() => {
          var YY;
          const rY = null === (YY = uY.current) || void 0 === YY ? void 0 : YY.firstElementChild;
          vY ? null === rY || void 0 === rY || rY.setAttribute("aria-disabled", "true") : AY || null === rY || void 0 === rY || rY.removeAttribute("aria-disabled")
        })), !gY || vY) return (0, WI.jsx)("span", {
        ref: uY,
        className: "Baf2RxApartWrap",
        children: (0, WI.jsx)(yR.j, {
          disabled: AY,
          className: QA()({
            Baf2RxNotYet: vY
          }),
          onClick: () => {
            IY ? IY() : aY(!0)
          },
          children: OY(`${ku}rxApart`)
        })
      });
      const sY = "battery" === rY,
        iY = void 0 === DY ? `${ku}batApartConfirmBodyPlan` : `${ku}batApartConfirmBody`;
      return (0, WI.jsx)(xu, {
        id: `baf2ApartTitle_${rY}`,
        title: sY ? `${ku}batApartConfirmTitle` : `${ku}rxApartConfirmTitle`,
        body: sY ? iY : `${ku}rxApartConfirmBody`,
        bodyParams: void 0 === DY ? void 0 : {
          cap: DY
        },
        yes: `${ku}rxApart`,
        cancel: () => {
          aY(!1)
        },
        confirm: () => {
          aY(!1), RY()
        }
      })
    }

    function Uu(YY) {
      let {
        mood: rY,
        big: DY
      } = YY;
      const FY = Gu[rY],
        AY = [];
      return FY.rows.forEach(((YY, rY) => {
        for (let DY = 0; DY < YY.length; DY++) "." !== YY[DY] && AY.push((0, WI.jsx)("rect", {
          x: DY + 1,
          y: rY + 1,
          width: 1,
          height: 1,
          fill: "w" === YY[DY] ? "#8fd3ff" : FY.colour
        }, `${DY},${rY}`))
      })), (0, WI.jsxs)("svg", {
        className: QA()("Baf2RxFace", {
          Big: DY,
          Alarm: "alarm" === rY
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, WI.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, WI.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), AY]
      })
    }

    function Lu(YY) {
      return vI(YY, "+").replace("+", "")
    }

    function tu(YY) {
      let {
        kind: rY,
        dims: DY,
        cap: FY,
        disabled: AY,
        compact: IY,
        resize: RY
      } = YY;
      const {
        t: OY
      } = (0, mA.C)(), {
        min: gY,
        max: aY
      } = ZD(rY), vY = Math.min(FY, aY), uY = [`${ku}rxWide`, `${ku}rxTall`, `${ku}rxDeep`], sY = {
        w: String(DY[0]),
        h: String(DY[1]),
        d: String(DY[2]),
        blocks: String(Vg(rY, DY))
      };
      return (0, WI.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, WI.jsx)("div", {
          className: "Baf2RxSteppers",
          children: DY.map(((YY, rY) => {
            const IY = FY => {
                const AY = [DY[0], DY[1], DY[2]];
                AY[rY] = YY + FY, RY(AY)
              },
              sY = YY >= vY;
            return (0, WI.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, WI.jsx)("button", {
                type: "button",
                "aria-label": OY(`${ku}rxSmaller`),
                disabled: AY || YY <= gY,
                onClick: () => {
                  IY(-1)
                },
                children: "\u2212"
              }), (0, WI.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [YY, (0, WI.jsx)("small", {
                  children: OY(uY[rY])
                })]
              }), (0, WI.jsx)("button", {
                type: "button",
                "aria-label": OY(`${ku}rxBigger`),
                disabled: AY || sY,
                onClick: () => {
                  IY(1)
                },
                children: sY && FY < aY ? "\ud83d\udd12" : "+"
              })]
            }, uY[rY])
          }))
        }), !IY && (0, WI.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === rY ? OY(`${ku}rxSizeLine`, {
            ...sY,
            water: String(mg(DY))
          }) : OY(`${ku}batSizeLine`, sY)
        })]
      })
    }

    function Ys(YY) {
      let {
        on: rY,
        label: DY,
        disabled: FY,
        locked: AY,
        pending: IY,
        toggle: RY
      } = YY;
      return (0, WI.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": rY,
        disabled: FY,
        "aria-disabled": AY || void 0,
        className: QA()("Baf2RxSwitch", {
          On: rY,
          Locked: AY,
          Pending: IY
        }),
        onClick: RY,
        children: [(0, WI.jsx)("span", {
          className: "Baf2RxKnob"
        }), DY]
      })
    }
    const rs = "buildAFactory2Game:",
      Ds = .95;

    function Fs(YY, rY) {
      return 0 !== (YY.baf2RxFlags & rY)
    }

    function As(YY) {
      return "cryo" === YY ? LY.o : LY.r
    }

    function Is(YY) {
      var rY, DY, FY, AY, IY, RY, OY, gY, aY;
      return YY.baf2RxCryo ? {
        ui: "cryo",
        usePerS: null !== (AY = YY.baf2RxCryoUse) && void 0 !== AY ? AY : 0,
        needPerS: null !== (IY = YY.baf2RxCryoNeed) && void 0 !== IY ? IY : 0,
        inPerS: null !== (RY = YY.baf2RxCryoIn) && void 0 !== RY ? RY : 0,
        stored: null !== (OY = YY.baf2RxCryoStored) && void 0 !== OY ? OY : 0,
        makersShort: null !== (gY = YY.baf2RxMixersShort) && void 0 !== gY ? gY : 0,
        waterBeside: null !== (aY = YY.baf2RxWaterUse) && void 0 !== aY ? aY : 0,
        pct: YY.baf2RxWater
      } : {
        ui: "water",
        usePerS: null !== (rY = YY.baf2RxWaterUse) && void 0 !== rY ? rY : 0,
        needPerS: null !== (DY = YY.baf2RxWaterNeed) && void 0 !== DY ? DY : 0,
        inPerS: YY.baf2RxWaterIn,
        stored: YY.baf2RxWaterStored,
        makersShort: null !== (FY = YY.baf2RxCondensersShort) && void 0 !== FY ? FY : 0,
        waterBeside: 0,
        pct: YY.baf2RxWater
      }
    }

    function Rs(YY) {
      const rY = "running" === YY.baf2RxState || "idle" === YY.baf2RxState;
      return YY.baf2RxFormed && YY.baf2RxTarget !== YY.baf2RxThrottle && rY ? Os(YY, YY.baf2RxTarget) : null
    }

    function Os(YY, rY) {
      const [DY, FY, AY, , , , IY, , RY] = YY.baf2RxStats, OY = Fs(YY, Rr), gY = Is(YY), aY = gY.pct / 100, {
        gen: vY,
        out: uY,
        load: sY
      } = function(YY, rY, DY, FY) {
        const AY = DY ? JO : 1,
          IY = Math.min(YY.fuelHeat * AY * Math.max(0, Math.min(1, rY)), YY.size * AY);
        return {
          gen: IY,
          out: IY,
          load: Fg(IY, YY.cooling, FY)
        }
      }({
        fuelHeat: DY,
        cooling: FY,
        size: AY
      }, rY / 100, OY, aY), iY = Ig(IY || pO(...YY.baf2RxDims)), yY = YY.baf2RxHeat, QY = Math.abs(sY - yY), oY = function(YY, rY, DY, FY) {
        let AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : LY.r;
        const IY = DY ? JO : 1,
          RY = Math.min(YY.fuelHeat * IY * rY / 100, YY.size * IY),
          OY = RY,
          gY = YY.fuelHeat * IY,
          aY = YY.cooling * Dg(FY.pct / 100),
          vY = gY > 0 && aY < YY.size * IY ? Math.floor(100 * aY / gY) : 100,
          uY = RY * AY - FY.inPerS;
        return {
          out: OY,
          hotAbove: vY >= 100 ? null : Math.max(0, vY),
          waterSecs: FY.pct >= 100 && uY > 1e-6 ? Math.max(0, FY.stored) / uY : null
        }
      }({
        fuelHeat: DY,
        cooling: FY,
        size: AY
      }, rY, OY, {
        pct: gY.pct,
        inPerS: gY.inPerS,
        stored: gY.stored
      }, As(gY.ui));
      return {
        pct: rY,
        out: uY,
        coolPerS: vY * As(gY.ui),
        pelletsPerMin: RY > 0 ? uY / RY * 60 : 0,
        settle: sY,
        settleS: QY > 2 ? iY * Math.log(QY / 2) : 0,
        overheatS: sY > 100 && yY < 100 ? iY * Math.log((sY - yY) / (sY - 100)) : null,
        hotAbove: oY.hotAbove,
        coolantSecs: oY.waterSecs
      }
    }

    function gs(YY) {
      return YY.baf2RxThrottle <= 0 && "running" !== YY.baf2RxState ? 0 : Os(YY, YY.baf2RxTarget).pelletsPerMin / 60
    }

    function as(YY, rY) {
      if (YY <= 0 || rY <= 0) return 0;
      const DY = YY / rY;
      return DY < .25 ? 1 : DY < .5 ? 2 : DY < .8 ? 3 : 4
    }

    function vs(YY, rY) {
      const DY = {};
      for (const [FY, AY] of Object.entries(rY.params)) DY[FY] = "time" === FY ? iI(YY, AY) : "amount" === FY ? Sg(AY) : String(Math.round(AY));
      return YY(rY.key, DY)
    }

    function us(YY, rY) {
      return {
        key: `${rs}${YY}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: rY
      }
    }

    function ss(YY) {
      var rY;
      const DY = Fs(YY, Rr),
        FY = "running" === YY.baf2RxState,
        AY = ag(YY),
        IY = YY.baf2RxHeat;
      var RY;
      if (FY && IY > hO) return {
        key: null !== (RY = AY.fix) && void 0 !== RY ? RY : `${rs}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const OY = FY ? Os(YY, YY.baf2RxTarget).coolantSecs : null,
        gY = "cryo" === Is(YY).ui;
      if (null !== OY && OY >= 1 && OY <= 30) return us(gY ? "rxWarnCryo" : "rxWarnWater", "bad");
      const aY = XO(pO(...YY.baf2RxDims)).waste,
        vY = FY ? Qg(YY, aY, gs(YY)).fullInS : null;
      if (null !== vY && vY <= 120 && YY.baf2RxWaste >= .5 * aY) return us("rxWarnWaste", "warn");
      if (null !== OY && OY >= 1) return us(gY ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: OY
      });
      const uY = "noWater" === YY.baf2RxState && IY > hO;
      if (YY.baf2RxDamage >= 1 && !uY) return us("rxDamagedHeals", "warn", {
        pct: YY.baf2RxDamage
      });
      if (YY.baf2RxCryoCut) return us("rxFix_cryoCut", "warn");
      const sY = Is(YY);
      if ("noWater" === YY.baf2RxState && "cryo" === sY.ui) return us("noWater" === YY.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const iY = AY.fix === `${rs}rxFix_scramCool` || "idle" === YY.baf2RxState && YY.baf2RxTarget <= 0;
      if (iY && YY.baf2RxFuel <= 0) return us("rxFix_noFuel", "warn");
      if (iY && YY.baf2RxWaterIn <= 0 && (null !== (rY = YY.baf2RxCryoIn) && void 0 !== rY ? rY : 0) <= 0) return us("rxFix_noWater", "warn");
      const yY = AY.fix === `${rs}rxFix_scramCool` ? ug(YY) : null;
      if (null !== yY) return {
        key: yY.key,
        params: {
          amount: yY.amount
        },
        tone: "info"
      };
      if ("running" !== YY.baf2RxState && "idle" !== YY.baf2RxState && null !== AY.fix) return {
        key: AY.fix,
        params: {},
        tone: "scram" === YY.baf2RxState ? "info" : uY ? "bad" : "warn"
      };
      var QY;
      if ("idle" === YY.baf2RxState && YY.baf2RxTarget <= 0) return {
        key: null !== (QY = AY.fix) && void 0 !== QY ? QY : `${rs}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const oY = YY.baf2RxCryoStarved;
      if ("cryo" === sY.ui && oY && sY.needPerS > 0 && sY.usePerS < Ds * sY.needPerS) return us("noWater" === oY ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const WY = "cryo" === sY.ui,
        EY = sY.needPerS > 0 && sY.usePerS < Ds * sY.needPerS;
      if (WY ? EY || sY.makersShort > 0 && sY.pct < 100 : sY.pct < 100) {
        const rY = WY && EY ? Math.floor(100 * sY.usePerS / sY.needPerS) : Math.min(100, sY.pct);
        if (sY.makersShort > 0) {
          return us(`${WY?"rxCryoShortLine":"rxWaterShortLine"}${1===sY.makersShort?"One":""}${!WY&&YY.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: rY,
            count: sY.makersShort
          })
        }
        return us(WY ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: rY
        })
      }
      const mY = function(YY) {
        const [rY, DY, FY] = YY.baf2RxStats, AY = Is(YY), IY = Ag({
          fuelHeat: rY,
          cooling: DY,
          size: FY
        }, "cryo" === AY.ui ? LY.e : 1, !0);
        return Math.max(0, IY * As(AY.ui) - AY.inPerS)
      }(YY);
      if (DY && mY > 0) return us("cryo" === sY.ui ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(mY)
      });
      if (IY >= Yg) return us("rxHotLine", "warn");
      const VY = Os(YY, YY.baf2RxTarget);
      var SY;
      if (null !== VY.overheatS) return us("rxWillOverheat", "bad", {
        pct: YY.baf2RxTarget,
        time: VY.overheatS,
        safe: null !== (SY = VY.hotAbove) && void 0 !== SY ? SY : 100
      });
      if (Math.abs(VY.settle - IY) >= 3) return us("rxSettling", "info", {
        pct: YY.baf2RxTarget,
        heat: Math.round(VY.settle),
        time: VY.settleS
      });
      const lY = ug(YY);
      if (null !== lY) return {
        key: lY.key,
        params: {
          amount: lY.amount
        },
        tone: "info"
      };
      const TY = function(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== rY && ("running" !== rY || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === YY.rods ? `${Rg}rxLimitNoRods` : `${Rg}rxLimit_${tO(YY)}`
      }({
        rods: YY.baf2RxStats[3],
        ...vg(YY)
      }, YY.baf2RxState, YY.baf2RxOut >= Ds * YY.baf2RxMaxNow, !1);
      if (TY === `${rs}rxLimit_size`) {
        const [rY, , DY, FY] = YY.baf2RxStats, AY = FY > 0 && rY > 0 ? Math.ceil(DY / (rY / FY) - 1e-9) : FY, IY = YY.baf2RxDims.every((YY => YY >= ZD("reactor").max));
        if (AY < FY) return us(IY ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: AY,
          have: FY
        });
        if (IY) return us("rxLimit_sizeMax", "info")
      }
      return null !== TY ? {
        key: TY,
        params: {},
        tone: "info"
      } : us("rxSteady", "ok", {
        pct: YY.baf2RxTarget
      })
    }

    function is(YY) {
      var rY;
      if (YY.melted) return us("rxMeltedBody", "bad");
      if (-1 === YY.bad) return us("rxFix_noRoom", "warn");
      if (YY.bad > 0) return us(1 === YY.bad ? "rxBadOne" : "rxBad", "warn", {
        count: YY.bad
      });
      if (YY.left > 0) {
        const rY = 1 === YY.left ? "One" : "";
        return us(YY.canFill ? `rxPlanLeft${rY}` : `rxPlanLeftNoFill${rY}`, "info", {
          count: YY.left
        })
      }
      if (0 === YY.rods) return us("rxLimitNoRods", "warn");
      const DY = null !== (rY = YY.idle) && void 0 !== rY ? rY : 0;
      return DY > 0 ? us(1 === DY ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: DY
      }) : us("rxPlanReady", "ok")
    }

    function ys(YY) {
      return Math.floor(Math.max(0, YY[1] - 1) / 2)
    }

    function Qs(YY) {
      if (YY >= xO && YY < nO) {
        const rY = YY - xO;
        return {
          key: 0 === rY ? `${rs}rxWhy_rodAlone` : 1 === rY ? `${rs}rxWhy_rodOne` : `${rs}rxWhy_rod`,
          params: {
            count: String(rY),
            heat: String(cO * (1 + KO * rY))
          }
        }
      }
      return YY === nO ? {
        key: `${rs}rxWhy_channel`,
        params: {
          amount: String(zO)
        }
      } : YY === PO ? {
        key: `${rs}rxWhy_deadChannel`,
        params: {}
      } : YY === UO ? {
        key: `${rs}rxWhy_graphite`,
        params: {}
      } : {
        key: `${rs}rxWhy_core`,
        params: {}
      }
    }
    const os = "buildAFactory2Game:";

    function Ws(YY, rY) {
      return 0 !== (YY.baf2RxFlags & rY)
    }

    function Es(YY) {
      let {
        status: rY,
        pending: DY,
        store: FY,
        explain: AY
      } = YY;
      const {
        t: IY
      } = (0, mA.C)(), RY = Ws(rY, Ir), OY = rY.baf2RxTarget, gY = rY.baf2RxThrottle, aY = function(YY) {
        return {
          press: () => {
            YY.throttlePress()
          },
          drag: rY => {
            YY.throttleDrag(rY)
          },
          release: () => {
            YY.throttleRelease()
          }
        }
      }(FY), vY = null === (uY = Os(rY, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, uY - 10),
        red: uY
      };
      var uY;
      return (0, WI.jsxs)("div", {
        className: QA()("Baf2RxThrottle", {
          Off: RY
        }),
        onClick: () => {
          RY && AY(`${os}rxWhy_startFirst`)
        },
        children: [(0, WI.jsx)("span", {
          className: "HideNarrow",
          children: IY(`${os}rxThrottle`)
        }), (0, WI.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, WI.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: OY,
            disabled: RY,
            style: RY ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": IY(`${os}rxThrottle`),
            onPointerDown: () => {
              aY.press();
              const YY = () => {
                window.removeEventListener("pointerup", YY), window.removeEventListener("pointercancel", YY), aY.release()
              };
              window.addEventListener("pointerup", YY), window.addEventListener("pointercancel", YY)
            },
            onKeyUp: aY.release,
            onChange: YY => {
              aY.drag(Number(YY.target.value))
            }
          }), (0, WI.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${vY.amber}%, #ffb020 ${vY.amber}% ${vY.red}%, #ff3b30 ${vY.red}%)`
            },
            "aria-hidden": "true"
          }), (0, WI.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${gY}% + ${8*(1-gY/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, WI.jsxs)("b", {
          children: [`${OY}%`, (0, WI.jsx)("i", {
            className: QA()("Baf2RxPendingDot", {
              On: DY
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function ms(YY) {
      let {
        status: rY
      } = YY;
      const {
        t: DY
      } = (0, mA.C)(), FY = Os(rY, rY.baf2RxTarget), AY = Is(rY).ui, IY = DY("cryo" === AY ? `${os}rxRateCryo` : `${os}rxRateWater`, {
        rate: Lu(FY.coolPerS)
      }), RY = DY(`${os}rxChain`, {
        pct: String(rY.baf2RxTarget),
        out: Sg(FY.out),
        heat: String(Math.round(FY.settle)),
        coolant: IY
      }), OY = null !== FY.coolantSecs ? FY.coolantSecs >= 1 ? DY("cryo" === AY ? `${os}rxThrottleCryoOut` : `${os}rxThrottleWaterOut`, {
        time: iI(DY, FY.coolantSecs)
      }) : DY("cryo" === AY ? `${os}rxThrottleCryoDry` : `${os}rxThrottleWaterDry`) : null;
      return (0, WI.jsxs)("p", {
        className: "Baf2RxChain",
        children: [RY, null !== OY ? (0, WI.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", OY]
        }) : (0, WI.jsxs)("span", {
          children: [" \xb7 ", DY(`${os}rxChainPellets`, {
            amount: lg(FY.pelletsPerMin)
          })]
        })]
      })
    }

    function Vs(YY) {
      let {
        view: rY,
        store: DY,
        explain: AY,
        explainOnce: IY
      } = YY;
      const {
        t: RY
      } = (0, mA.C)(), {
        status: OY
      } = rY, [gY, aY] = (0, FY.useState)(!1), vY = Ws(OY, Ir), sY = Ws(OY, Rr), iY = !Ws(OY, ar), yY = OY.baf2RxHeat > 100;
      return (0, WI.jsxs)(WI.Fragment, {
        children: [(0, WI.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, WI.jsx)(Es, {
            status: OY,
            pending: rY.throttlePending,
            store: DY,
            explain: AY
          }), (0, WI.jsx)(Ys, {
            on: sY,
            label: sY ? RY(`${os}rxOdLeft`, {
              time: iI(RY, OY.baf2RxOdLeft)
            }) : RY(`${os}rxOverdrive`),
            locked: iY,
            pending: 0 !== (rY.pendingFlags & Rr),
            toggle: () => {
              iY ? AY(`${os}rxOverdriveTier`, {
                amount: String(uY(13))
              }) : sY ? DY.setFlag(Rr, !1) : rY.odConfirmed ? DY.setFlag(Rr, !0) : aY(!0)
            }
          }), vY || rY.startGuard ? (0, WI.jsx)(yR.p, {
            disabled: rY.busy.has("start") || rY.startGuard,
            onClick: () => {
              DY.tap("start", (() => {
                DY.setFlag(Ir, !1)
              }))
            },
            children: RY(rY.startGuard ? `${os}rxStarting` : `${os}rxStart`)
          }) : (0, WI.jsx)("span", {
            className: QA()("Baf2RxScram", {
              Pulse: yY
            }),
            children: (0, WI.jsx)(yR.D, {
              onClick: () => {
                DY.shutDown()
              },
              children: RY(`${os}rxScram`)
            })
          })]
        }), (0, WI.jsx)(ms, {
          status: OY
        }), gY && (0, WI.jsx)(xu, {
          id: "baf2RxOdTitle",
          title: `${os}rxOdConfirmTitle`,
          body: `${os}rxOdConfirmBody`,
          yes: `${os}rxOdConfirm`,
          cancel: () => {
            aY(!1)
          },
          confirm: () => {
            aY(!1), DY.tap("odConfirm", (() => {
              DY.confirmOverdrive(), DY.setFlag(Rr, !0)
            })), IY(`${os}rxWhy_overdrive`)
          }
        })]
      })
    }

    function Ss(YY) {
      let {
        view: rY,
        store: DY,
        keepSize: FY
      } = YY;
      const {
        t: AY
      } = (0, mA.C)(), {
        status: IY
      } = rY;
      return (0, WI.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, WI.jsx)(tu, {
          kind: "reactor",
          dims: rY.dims,
          cap: IY.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: YY => {
            DY.resize(YY)
          }
        }), FY ? (0, WI.jsx)(yR.j, {
          onClick: FY,
          children: AY(`${os}rxKeepSize`)
        }) : (0, WI.jsxs)(WI.Fragment, {
          children: [(0, WI.jsx)(Ys, {
            on: rY.guide,
            label: AY(`${os}rxGuide`),
            toggle: () => {
              DY.toggleGuide()
            }
          }), Ws(IY, ur) && (0, WI.jsx)(Ys, {
            on: rY.starter,
            label: AY(`${os}rxStarter`),
            toggle: () => {
              DY.toggleStarter()
            }
          }), (0, WI.jsx)(qu, {
            status: IY,
            store: DY,
            busy: rY.busy.has("fill")
          })]
        })]
      })
    }

    function ls(YY) {
      let {
        need: rY,
        kind: DY = "reactor",
        explain: FY
      } = YY;
      const {
        t: AY
      } = (0, mA.C)(), IY = rY.length <= 3, RY = rY.reduce(((YY, rY) => {
        let [, DY] = rY;
        return YY + DY
      }), 0);
      return (0, WI.jsxs)("div", {
        className: QA()("Baf2RxParts", {
          Compact: !IY
        }),
        onClick: () => {
          FY("battery" === DY ? `${os}batWhy_store` : `${os}rxShellHint`)
        },
        children: [RY > 0 && (0, WI.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === RY ? AY(`${os}rxBlocksOne`) : AY(`${os}rxBlocks`, {
            blocks: String(RY)
          })
        }), 0 === rY.length ? (0, WI.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: AY("battery" === DY ? `${os}batPartsDone` : `${os}rxShellDone`)
        }) : ig(rY).map((YY => {
          let [rY, DY, FY] = YY;
          const RY = function(YY) {
            const rY = Eg[YY];
            if (void 0 === rY) return null;
            const [DY, FY, AY] = og[rY].colour.map((YY => Math.round(255 * YY)));
            return `rgb(${DY}, ${FY}, ${AY})`
          }(rY);
          return (0, WI.jsxs)("span", {
            className: "Baf2RxChip",
            title: PA(AY, rY),
            children: [(0, WI.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === RY ? {
                visibility: "hidden"
              } : {
                background: RY
              },
              title: AY(`${os}rxShopGhost`)
            }), (0, WI.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, WI.jsx)(SA.c, {
                itemName: rY,
                amount: 0
              })
            }), (0, WI.jsx)("span", {
              className: "Baf2RxChipName",
              children: IY ? `${DY} ${OY=PA(AY,rY),OY.replace(/^(Reactor|Battery) (?=\S)/,"")}` : DY
            }), FY >= DY ? (0, WI.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, WI.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: IY ? AY(`${os}rxShopShort`, {
                count: String(DY - FY)
              }) : "\u2212" + (DY - FY)
            })]
          }, rY);
          var OY
        }))]
      })
    }
    const Ts = "buildAFactory2Game:";

    function es(YY) {
      var rY, DY, AY, IY, RY, OY, gY;
      let {
        store: aY,
        close: vY
      } = YY;
      const {
        t: uY
      } = (0, mA.C)(), sY = CR(), iY = nu(aY), {
        explained: yY,
        explain: QY
      } = du("baf2RxExplained"), oY = (0, FY.useCallback)(((YY, rY) => {
        QY(uY(YY, rY))
      }), [QY, uY]), WY = null === iY || void 0 === iY ? void 0 : iY.status, EY = !0 === (null === WY || void 0 === WY ? void 0 : WY.baf2BatReadOnly), mY = YY => {
        WY && sY.send(Ar(WY.baf2BatAt, YY))
      }, [VY, SY, lY] = null !== (rY = null === iY || void 0 === iY ? void 0 : iY.dims) && void 0 !== rY ? rY : [0, 0, 0], TY = Sg(null !== (DY = null === iY || void 0 === iY ? void 0 : iY.gu) && void 0 !== DY ? DY : 0), eY = !0 === (null === WY || void 0 === WY ? void 0 : WY.baf2BatFormed), NY = null !== (AY = null === WY || void 0 === WY ? void 0 : WY.baf2BatStored) && void 0 !== AY ? AY : 0, BY = Math.max(1, null !== (IY = null === WY || void 0 === WY ? void 0 : WY.baf2BatIslandCap) && void 0 !== IY ? IY : 1), cY = Math.min(100, 100 * NY / BY), KY = null === WY || void 0 === WY ? void 0 : WY.baf2BatNetPerS, HY = function(YY, rY, DY) {
        return DY > 0 && rY >= DY ? "full" : void 0 !== YY && YY >= .05 ? "charging" : void 0 !== YY && YY <= -.05 && rY > 0 ? "draining" : "steady"
      }(KY, NY, null !== (RY = null === WY || void 0 === WY ? void 0 : WY.baf2BatIslandCap) && void 0 !== RY ? RY : 0), zY = null !== (OY = null === WY || void 0 === WY ? void 0 : WY.baf2BatMadePerS) && void 0 !== OY ? OY : 0, ZY = null !== (gY = null === WY || void 0 === WY ? void 0 : WY.baf2BatUsedPerS) && void 0 !== gY ? gY : 0;
      let CY, fY = {},
        jY = "info";
      if (WY)
        if (eY) "charging" === HY ? (CY = `${Ts}batLine_charging`, fY = {
          time: iI(uY, (BY - NY) / Math.max(.05, null !== KY && void 0 !== KY ? KY : 0))
        }, jY = "ok") : "draining" === HY ? (CY = `${Ts}batLine_draining`, fY = {
          time: iI(uY, NY / Math.max(.05, -(null !== KY && void 0 !== KY ? KY : 0)))
        }, jY = "warn") : CY = "full" === HY ? `${Ts}batLine_full` : NY <= 0 && ZY > 0 ? `${Ts}batLine_empty` : `${Ts}batLine_steady`;
        else {
          var hY;
          const YY = is({
            left: WY.baf2BatNeed.reduce(((YY, rY) => {
              let [, DY] = rY;
              return YY + DY
            }), 0),
            bad: WY.baf2BatBad,
            rods: 1,
            canFill: !0 === WY.baf2BatCanFill,
            melted: !1
          });
          CY = YY.key, fY = {
            count: String(null !== (hY = YY.params.count) && void 0 !== hY ? hY : 0)
          }, jY = YY.tone
        }
      else CY = `${Ts}batLine_steady`;
      const dY = Math.max(zY, ZY, 1);
      return (0, WI.jsx)(iR.e, {
        close: vY,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, WI.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, WI.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, WI.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, WI.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, WI.jsx)(SA.c, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, WI.jsxs)("div", {
                children: [(0, WI.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: uY(`${Ts}batTitle`)
                }), WY && (0, WI.jsxs)("p", {
                  className: QA()("Baf2RxSubtitle", {
                    good: eY && "charging" === HY,
                    warn: eY && "draining" === HY
                  }),
                  children: [VY, "\xd7", SY, "\xd7", lY, " \xb7 ", uY(eY ? `${Ts}batState_${HY}` : `${Ts}rxSubPlanShort`)]
                })]
              })]
            }), (0, WI.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [WY && !EY && (0, WI.jsx)(Pu, {
                kind: "battery",
                cap: eY ? TY : void 0,
                busy: null === iY || void 0 === iY ? void 0 : iY.busy.has("apart"),
                apart: () => {
                  aY.tap("apart", (() => {
                    mY("apart")
                  }))
                }
              }), (0, WI.jsx)(yR.k, {
                onClick: vY
              })]
            })]
          }), iY && WY && (0, WI.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, WI.jsxs)("div", {
              className: QA()("Baf2RxFlow Baf2BatFlow", {
                Plan: !eY
              }),
              children: [(0, WI.jsx)(fu, {
                kind: "Power",
                label: uY(`${Ts}batMade`),
                number: eY ? `\u26a1 ${Sg(zY)}/s` : "\u2014",
                note: uY(`${Ts}batMadeNote`),
                share: eY ? zY / dY : void 0,
                onExplain: () => {
                  oY(`${Ts}batWhy_made`)
                }
              }), (0, WI.jsx)(ju, {
                kind: "Power",
                step: eY ? as(zY, dY) : 0,
                planned: !eY
              }), (0, WI.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  oY(`${Ts}batWhy_store`)
                },
                children: [(0, WI.jsx)(hu, {
                  max: 100,
                  bands: [{
                    upTo: eY ? cY : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, WI.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, WI.jsx)("b", {
                    className: "Baf2BatStored",
                    children: eY ? uY(`${Ts}batStoredOf`, {
                      amount: Sg(NY),
                      cap: Sg(WY.baf2BatIslandCap)
                    }) : uY(`${Ts}batWillHold`, {
                      cap: TY
                    })
                  }), (0, WI.jsx)("span", {
                    children: uY(`${Ts}batAdds`, {
                      cap: TY
                    })
                  }), eY && (0, WI.jsx)("small", {
                    children: uY(`${Ts}batBreakNote`, {
                      cap: TY
                    })
                  })]
                })]
              }), (0, WI.jsx)(ju, {
                kind: "Power",
                step: eY ? as(ZY, dY) : 0,
                planned: !eY
              }), (0, WI.jsx)(fu, {
                kind: "Power",
                label: uY(`${Ts}batUsed`),
                number: eY ? `\u26a1 ${Sg(ZY)}/s` : "\u2014",
                note: uY(`${Ts}batUsedNote`),
                share: eY ? ZY / dY : void 0,
                onExplain: () => {
                  oY(`${Ts}batWhy_used`)
                }
              })]
            }), (0, WI.jsx)(Ju, {
              text: uY(CY, fY),
              tone: jY,
              explained: yY
            }), EY ? (0, WI.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: uY(`${Ts}rxNotYours`)
            }) : !eY && (0, WI.jsxs)(WI.Fragment, {
              children: [(0, WI.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, WI.jsx)(tu, {
                  kind: "battery",
                  dims: iY.dims,
                  cap: WY.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: YY => {
                    aY.resize(YY)
                  }
                }), (0, WI.jsx)(Ys, {
                  on: iY.guide,
                  label: uY(`${Ts}rxGuide`),
                  toggle: () => {
                    aY.toggleGuide()
                  }
                }), WY.baf2BatCanFill && (0, WI.jsx)(yR.n, {
                  disabled: !yg("battery", WY.baf2BatNeed) || iY.busy.has("fill"),
                  onClick: () => {
                    aY.tap("fill", (() => {
                      mY("fill")
                    }))
                  },
                  children: uY(`${Ts}rxFill`)
                })]
              }), (0, WI.jsx)(ls, {
                need: WY.baf2BatNeed,
                kind: "battery",
                explain: oY
              })]
            })]
          })]
        })
      })
    }
    const Ns = "buildAFactory2Game:",
      Bs = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function cs(YY, rY) {
      return YY === GO ? null : rY ? "#4a4440" : YY < nO ? Bs[YY - xO] : YY === nO ? "#3fd0f0" : YY === PO ? "#2c3e4c" : "#55585e"
    }

    function Ks(YY) {
      let {
        inner: rY,
        looks: DY,
        layer: FY,
        setLayer: AY,
        glow: IY,
        melted: RY,
        explain: OY
      } = YY;
      const {
        t: gY
      } = (0, mA.C)(), [aY, vY, uY] = rY, sY = Math.max(0, Math.min(vY - 1, FY)), iY = [];
      for (let QY = 0; QY < uY; QY++)
        for (let YY = 0; YY < aY; YY++) {
          var yY;
          const rY = null !== (yY = DY[(sY * uY + QY) * aY + YY]) && void 0 !== yY ? yY : GO,
            FY = cs(rY, RY),
            AY = rY >= xO && rY < nO;
          iY.push(null === FY ? (0, WI.jsx)("circle", {
            cx: YY + .5,
            cy: QY + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${YY},${QY}`) : (0, WI.jsx)("rect", {
            x: YY + .06,
            y: QY + .06,
            width: .88,
            height: .88,
            fill: FY,
            opacity: AY && !RY ? .5 + .5 * IY : 1,
            onClick: YY => {
              YY.stopPropagation();
              const DY = Qs(rY);
              OY(DY.key, DY.params)
            }
          }, `${YY},${QY}`))
        }
      return (0, WI.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, WI.jsx)("svg", {
          className: QA()("Baf2RxMapGrid", {
            Melted: RY
          }),
          viewBox: `0 0 ${Math.max(1,aY)} ${Math.max(1,uY)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": gY(`${Ns}rxWhy_core`),
          onClick: () => {
            OY(`${Ns}rxWhy_core`, {})
          },
          children: iY
        }), vY > 1 && (0, WI.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, WI.jsx)("button", {
            type: "button",
            "aria-label": gY(`${Ns}rxLayerDown`),
            disabled: sY <= 0,
            onClick: () => {
              AY(sY - 1)
            },
            children: "\u25bc"
          }), (0, WI.jsxs)("span", {
            children: [(0, WI.jsx)("span", {
              className: "HideNarrow",
              children: gY(`${Ns}rxLayer`, {
                n: String(sY + 1),
                of: String(vY)
              })
            }), (0, WI.jsx)("span", {
              className: "ShowNarrow",
              children: gY(`${Ns}rxLayerShort`, {
                n: String(sY + 1),
                of: String(vY)
              })
            })]
          }), (0, WI.jsx)("button", {
            type: "button",
            "aria-label": gY(`${Ns}rxLayerUp`),
            disabled: sY >= vY - 1,
            onClick: () => {
              AY(sY + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const Hs = "buildAFactory2Game:",
      zs = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: dO,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: gg,
        kind: "red"
      }],
      Zs = [50, dO, 100];

    function Cs(YY) {
      let {
        stats: rY,
        t: DY,
        explain: FY
      } = YY;
      const AY = tO(rY),
        IY = Math.max(1, rY.fuelHeat, rY.cooling, rY.size),
        RY = [
          ["fuel", `${Hs}rxBarRods`, rY.fuelHeat],
          ["cooling", `${Hs}rxBarCooling`, rY.cooling],
          ["size", `${Hs}rxBarSize`, rY.size]
        ];
      return (0, WI.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          FY(`${Hs}rxWhy_bars`)
        },
        children: [(0, WI.jsx)("span", {
          className: "Baf2RxMostLine",
          children: DY(`${Hs}rxMost`, {
            amount: Sg(Math.min(rY.fuelHeat, rY.cooling, rY.size))
          })
        }), (0, WI.jsx)("span", {
          className: "Baf2RxMostBars",
          children: RY.map((YY => {
            let [rY, FY, RY] = YY;
            return (0, WI.jsxs)("span", {
              className: QA()("Baf2RxMostBar", rY, {
                Low: rY === AY
              }),
              children: [(0, WI.jsx)("small", {
                children: DY(FY)
              }), (0, WI.jsx)("i", {
                children: (0, WI.jsx)("b", {
                  style: {
                    width: 100 * RY / IY + "%"
                  }
                })
              })]
            }, rY)
          }))
        })]
      })
    }

    function fs(YY) {
      var rY;
      let {
        view: DY,
        heat: AY,
        settle: IY,
        settleLine: RY,
        settleBad: OY,
        explain: gY
      } = YY;
      const {
        t: aY
      } = (0, mA.C)(), {
        status: vY
      } = DY, uY = vY.baf2RxAt.join(","), [sY, iY] = (0, FY.useState)((() => ys(DY.inner)));
      (0, FY.useEffect)((() => {
        iY(ys(DY.inner))
      }), [uY, DY.inner[1]]);
      const yY = null !== (rY = DY.plan) && void 0 !== rY ? rY : vg(vY),
        QY = DY.plan ? DY.plan.powerPerUnit : vY.baf2RxStats[8],
        oY = null === AY ? null : "alarm" === (WY = Og(vY)) ? "red" : "hot" === WY ? "hot" : "warm" === WY ? "warm" : "cold";
      var WY;
      const EY = !vY.baf2RxFormed && function(YY, rY) {
          return 0 !== (YY.baf2RxFlags & rY)
        }(vY, Or),
        mY = vY.baf2RxDamage,
        VY = vY.baf2RxDamageTrend;
      return (0, WI.jsxs)("div", {
        className: QA()("Baf2RxCore", null !== oY && void 0 !== oY ? oY : "plan"),
        children: [(0, WI.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, WI.jsx)(Ks, {
            inner: DY.inner,
            looks: DY.looks,
            layer: sY,
            setLayer: iY,
            glow: vY.baf2RxFormed ? vY.baf2RxThrottle / 100 : 1,
            melted: EY,
            explain: gY
          }), (0, WI.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              gY(`${Hs}rxWhy_heat`)
            },
            children: [null !== AY ? (0, WI.jsxs)(WI.Fragment, {
              children: [(0, WI.jsx)("b", {
                children: aY(`${Hs}rxHeatPct`, {
                  pct: String(AY)
                })
              }), (0, WI.jsx)("span", {
                className: QA()("Baf2RxBand", oY),
                children: aY(`${Hs}rxBand_${oY}`)
              })]
            }) : (0, WI.jsx)("b", {
              children: aY(`${Hs}rxHeat`)
            }), null !== RY && (0, WI.jsx)("span", {
              className: QA()("Baf2RxSettle", {
                Bad: OY
              }),
              children: RY
            }), mY >= 1 && (0, WI.jsxs)("span", {
              className: QA()("Baf2RxDamage", VY),
              children: [aY(`${Hs}rxDamageLine`, {
                pct: String(mY)
              }), " \xb7 ", aY(`${Hs}rxDamage_${VY}`), (0, WI.jsx)("i", {
                children: (0, WI.jsx)("b", {
                  style: {
                    width: `${Math.min(100,mY)}%`
                  }
                })
              })]
            })]
          }), (0, WI.jsx)(hu, {
            max: gg,
            bands: zs,
            ticks: Zs,
            now: AY,
            settle: IY,
            settleTone: OY ? "bad" : null,
            onExplain: () => {
              gY(`${Hs}rxWhy_heat`)
            }
          })]
        }), (0, WI.jsx)(Cs, {
          stats: yY,
          t: aY,
          explain: gY
        }), QY > 0 && (0, WI.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            gY(`${Hs}rxWhy_perPellet`)
          },
          children: aY(`${Hs}rxPerPellet`, {
            amount: Sg(QY)
          })
        })]
      })
    }

    function hs(YY, rY) {
      var DY;
      if (!YY.baf2RxStore) return {
        note: rY(`${Hs}rxUpTo`, {
          amount: Sg(YY.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [FY, AY] = YY.baf2RxStore, IY = AY > 0 ? FY / AY : 0, RY = String(Math.floor(100 * IY)), OY = null !== (DY = YY.baf2RxStoreNetPerS) && void 0 !== DY ? DY : 0, gY = function(YY) {
        var rY, DY;
        const [FY, AY] = null !== (rY = YY.baf2RxStore) && void 0 !== rY ? rY : [0, 0], IY = null !== (DY = YY.baf2RxStoreNetPerS) && void 0 !== DY ? DY : 0;
        return AY > 0 && FY >= AY - 1 ? "running" === YY.baf2RxState ? `${rs}rxStoreFull` : `${rs}rxStoreFullOnly` : IY > .05 ? `${rs}rxStoreLine` : IY < -.05 ? "running" === YY.baf2RxState ? `${rs}rxStoreUsesMore` : `${rs}rxStoreDraining` : `${rs}rxStorePct`
      }(YY);
      return {
        note: rY(gY, gY === `${Hs}rxStoreLine` ? {
          pct: RY,
          time: iI(rY, (AY - FY) / OY)
        } : {
          pct: RY
        }),
        share: IY
      }
    }

    function ds(YY) {
      let {
        view: rY,
        explain: DY,
        preview: FY
      } = YY;
      const {
        t: AY
      } = (0, mA.C)(), {
        status: IY
      } = rY, RY = XO(pO(...rY.dims)), OY = gs(IY), gY = Math.min(Math.round(IY.baf2RxFuel), RY.fuel), aY = "running" === IY.baf2RxState, vY = aY ? as(IY.baf2RxOut, IY.baf2RxMaxNow) : 0, uY = function(YY, rY, DY) {
        const FY = Is(YY),
          AY = "cryo" === FY.ui,
          IY = DY ? DY.coolantSecs : FY.pct >= 100 && YY.baf2RxOut >= 1 ? Os(YY, YY.baf2RxThrottle).coolantSecs : null;
        let RY, OY = !1;
        if (FY.pct < 100) {
          const DY = 1 === FY.makersShort,
            IY = !AY && YY.baf2RxCryoOpen ? "OrCryo" : "";
          RY = FY.makersShort > 0 ? rY(AY ? `${Hs}rxCryoAddMixer${DY?"":"s"}` : `${Hs}rxWaterAddCondenser${DY?"":"s"}${IY}`, {
            count: String(FY.makersShort)
          }) : rY(`${Hs}rxWaterNeeds`, {
            rate: Lu(FY.needPerS)
          })
        } else if (null !== IY) RY = rY(`${Hs}rxWaterRunsOut`, {
          time: iI(rY, IY)
        });
        else if (FY.waterBeside > 0) RY = rY(`${Hs}rxCryoPlusWater`, {
          rate: Lu(FY.waterBeside)
        });
        else {
          const YY = function(YY) {
            return YY.inPerS <= 0 ? "rxWaterNoSupply" : YY.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(FY);
          OY = "rxWaterNoSupply" === YY, RY = rY(`${Hs}${YY}`, {
            amount: Sg(FY.stored)
          })
        }
        return {
          kind: AY ? "Cryo" : "Water",
          label: rY(AY ? `${Hs}rxCryo` : `${Hs}rxWater`),
          number: `${Lu(FY.usePerS)}/s`,
          preview: DY ? `${Lu(DY.coolPerS)}/s` : null,
          note: RY,
          tone: "noWater" === YY.baf2RxState ? "danger" : OY ? "warn" : (gY = FY.pct, aY = IY, gY < 100 ? "danger" : null === aY ? null : aY < 300 ? "danger" : "warn"),
          share: FY.pct / 100,
          why: AY ? `${Hs}rxWhy_cryo` : `${Hs}rxWhy_water`,
          short: FY.pct < 100
        };
        var gY, aY
      }(IY, AY, FY), sY = Qg(IY, RY.waste, OY), iY = hs(IY, AY), yY = Os(IY, IY.baf2RxTarget), QY = aY && Math.abs(yY.settle - IY.baf2RxHeat) >= 3, oY = FY ? FY.pelletsPerMin / 60 : null;
      return (0, WI.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, WI.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, WI.jsx)(fu, {
            kind: "Fuel",
            label: AY(`${Hs}rxFuel`),
            number: String(gY),
            preview: null !== oY && oY > 0 && IY.baf2RxFuel > 0 ? iI(AY, IY.baf2RxFuel / oY) : null,
            note: IY.baf2RxFuel <= 0 ? AY(`${Hs}rxFuelEmpty`) : OY > 0 ? AY(`${Hs}rxFuelLeft`, {
              time: iI(AY, IY.baf2RxFuel / OY)
            }) : AY(1 === gY ? `${Hs}rxFuelPellet` : `${Hs}rxFuelPellets`),
            tone: "noFuel" === IY.baf2RxState ? "danger" : IY.baf2RxFuel < 2 ? "warn" : null,
            share: IY.baf2RxFuel / RY.fuel,
            onExplain: () => {
              DY(`${Hs}rxWhy_fuel`)
            }
          }), (0, WI.jsx)(fu, {
            kind: uY.kind,
            label: uY.label,
            number: uY.number,
            preview: uY.preview,
            note: uY.note,
            tone: uY.tone,
            share: uY.share,
            onExplain: () => {
              DY(uY.why)
            }
          })]
        }), (0, WI.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, WI.jsx)(ju, {
            kind: "Fuel",
            step: vY,
            short: "noFuel" === IY.baf2RxState
          }), (0, WI.jsx)(ju, {
            kind: uY.kind,
            step: vY,
            short: uY.short || "noWater" === IY.baf2RxState
          })]
        }), (0, WI.jsx)(fs, {
          view: rY,
          heat: IY.baf2RxHeat,
          settle: Math.min(gg, yY.settle),
          settleLine: QY ? AY(`${Hs}rxHeatSettles`, {
            pct: String(Math.round(yY.settle)),
            time: iI(AY, yY.settleS)
          }) : null,
          settleBad: yY.settle > 100,
          explain: DY
        }), (0, WI.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, WI.jsx)(ju, {
            kind: "Power",
            step: vY
          }), (0, WI.jsx)(ju, {
            kind: "Waste",
            step: aY && IY.baf2RxFuel - IY.baf2RxPu > 0 ? vY : 0,
            short: sY.full
          })]
        }), (0, WI.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, WI.jsx)(fu, {
            kind: "Power",
            label: AY(`${Hs}rxPowerOut`),
            number: `\u26a1 ${Sg(IY.baf2RxOut)}/s`,
            preview: FY ? Sg(FY.out) : null,
            note: iY.note,
            share: iY.share,
            onExplain: () => {
              DY(`${Hs}rxWhy_power`)
            }
          }), (0, WI.jsx)(fu, {
            kind: "Waste",
            label: AY(`${Hs}rxWaste`),
            number: `${Math.floor(IY.baf2RxWaste)}/${RY.waste}`,
            note: sY.full ? AY(`${Hs}rxWasteFull`) : null !== sY.fullInS ? AY(`${Hs}rxWasteFullIn`, {
              time: iI(AY, sY.fullInS)
            }) : AY(`${Hs}rxWasteSpent`),
            tone: "wasteFull" === IY.baf2RxState ? "danger" : sY.full ? "warn" : null,
            share: IY.baf2RxWaste / RY.waste,
            onExplain: () => {
              DY(`${Hs}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function Ms(YY) {
      let {
        view: rY,
        explain: DY
      } = YY;
      const {
        t: FY
      } = (0, mA.C)(), AY = rY.plan;
      if (!AY) return null;
      const IY = AY.fuelHeat <= 0 ? null : AY.cooling > 0 ? Math.min(gg, 100 * AY.fuelHeat / AY.cooling) : gg,
        RY = FY(`${Hs}rxPlanAtFull`);
      return (0, WI.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, WI.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, WI.jsx)(fu, {
            kind: "Fuel",
            label: FY(`${Hs}rxFuel`),
            number: FY(`${Hs}rxPlanPerMin`, {
              amount: lg(AY.pelletsPerMin)
            }),
            note: FY(`${Hs}rxPlanPellets`),
            onExplain: () => {
              DY(`${Hs}rxWhy_fuel`)
            }
          }), (0, WI.jsx)(fu, {
            kind: "Water",
            label: FY(`${Hs}rxWater`),
            number: `${Lu(AY.waterPerS)}/s`,
            note: rY.status.baf2RxCryoOpen && AY.waterPerS > 0 ? FY(`${Hs}rxPlanOrCryo`, {
              rate: Lu(Ag(AY, LY.e) * LY.o)
            }) : RY,
            onExplain: () => {
              DY(`${Hs}rxWhy_water`)
            }
          })]
        }), (0, WI.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, WI.jsx)(ju, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, WI.jsx)(ju, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, WI.jsx)(fs, {
          view: rY,
          heat: null,
          settle: IY,
          settleLine: null === IY ? null : FY(`${Hs}rxPlanHeat`, {
            pct: String(Math.round(IY))
          }),
          settleBad: null !== IY && IY > 100,
          explain: DY
        }), (0, WI.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, WI.jsx)(ju, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, WI.jsx)(ju, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, WI.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, WI.jsx)(fu, {
            kind: "Power",
            label: FY(`${Hs}rxPowerOut`),
            number: `\u26a1 ${Sg(AY.max)}/s`,
            note: RY,
            onExplain: () => {
              DY(`${Hs}rxWhy_power`)
            }
          }), (0, WI.jsx)(fu, {
            kind: "Waste",
            label: FY(`${Hs}rxWaste`),
            number: FY(`${Hs}rxPlanPerMin`, {
              amount: lg(AY.pelletsPerMin)
            }),
            note: FY(`${Hs}rxWasteSpent`),
            onExplain: () => {
              DY(`${Hs}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const ws = "buildAFactory2Game:",
      bs = {
        key: `${ws}rxWaiting`,
        params: {},
        tone: "info"
      };

    function Xs(YY, rY) {
      return 0 !== (YY.baf2RxFlags & rY)
    }

    function qs(YY) {
      var rY, DY;
      let {
        store: AY,
        close: IY
      } = YY;
      const {
        t: RY
      } = (0, mA.C)(), OY = nu(AY), {
        explained: gY,
        hinting: aY,
        explain: vY,
        explainOnce: uY
      } = du("baf2RxExplained"), sY = (0, FY.useCallback)(((YY, rY) => {
        vY(RY(YY, rY))
      }), [vY, RY]), iY = (0, FY.useCallback)(((YY, rY) => {
        uY(YY, RY(YY, rY))
      }), [uY, RY]), [yY, QY] = (0, FY.useState)(!1), [oY, WY] = (0, FY.useState)(!1), EY = null === OY || void 0 === OY ? void 0 : OY.status, mY = null === EY || void 0 === EY ? void 0 : EY.baf2RxAt.join(","), VY = !0 === (null === EY || void 0 === EY ? void 0 : EY.baf2RxFormed);
      (0, FY.useEffect)((() => {
        WY(!1), QY(!1)
      }), [mY, VY]), (0, FY.useEffect)((() => (AY.opened(), () => {
        AY.closed()
      })), [AY]);
      const SY = void 0 !== EY && Xs(EY, vr),
        lY = EY ? VY ? Og(EY) : null !== OY && void 0 !== OY && OY.plan ? function(YY, rY) {
          if (YY <= 0) return "off";
          if (rY <= 0) return "alarm";
          const DY = 100 * YY / rY;
          return DY < 50 ? "calm" : DY < Yg ? "warm" : DY <= 100 ? "hot" : "alarm"
        }(OY.plan.fuelHeat, OY.plan.cooling) : "off" : "off",
        TY = EY ? ag(EY) : null,
        eY = OY ? OY.waiting ? bs : VY ? ss(OY.status) : function(YY) {
          var rY, DY;
          const {
            status: FY
          } = YY;
          return is({
            left: FY.baf2RxNeed.reduce(((YY, rY) => {
              let [, DY] = rY;
              return YY + DY
            }), 0),
            bad: FY.baf2RxBad,
            rods: null !== (rY = null === (DY = YY.plan) || void 0 === DY ? void 0 : DY.rods) && void 0 !== rY ? rY : 0,
            canFill: Xs(FY, gr),
            melted: Xs(FY, Or),
            idle: YY.looks.reduce(((YY, rY) => YY + (rY === PO ? 1 : 0)), 0)
          })
        }(OY) : null,
        NY = aY && null !== eY && ("ok" === eY.tone || "info" === eY.tone),
        BY = EY ? function(YY) {
          const rY = 0 !== (YY.baf2RxFlags & Ir),
            DY = YY.baf2RxHeat < MO;
          return 0 !== (YY.baf2RxFlags & Or) || DY && (rY || !YY.baf2RxFormed) ? null : YY.baf2RxFormed && !rY ? {
            key: `${Rg}rxApartScram`,
            params: {}
          } : {
            key: `${Rg}rxApartCooling`,
            params: {
              pct: String(MO)
            }
          }
        }(EY) : null,
        [cY, KY, HY] = null !== (rY = null === OY || void 0 === OY ? void 0 : OY.dims) && void 0 !== rY ? rY : [0, 0, 0],
        zY = `${cY}\xd7${KY}\xd7${HY}`;
      return (0, WI.jsx)(iR.e, {
        close: IY,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, WI.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, WI.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, WI.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, WI.jsx)(Uu, {
                mood: lY
              }), (0, WI.jsxs)("div", {
                children: [(0, WI.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: RY(`${ws}rxTitle`)
                }), OY && (0, WI.jsxs)("p", {
                  className: QA()("Baf2RxSubtitle", VY && (null === TY || void 0 === TY ? void 0 : TY.tone)),
                  children: [VY && !SY ? (0, WI.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": RY(`${ws}rxChangeSize`),
                    onClick: () => {
                      if (!EY) return;
                      const YY = Xs(EY, Ir);
                      var rY;
                      (rY = {
                        scram: YY,
                        heat: EY.baf2RxHeat
                      }).scram && rY.heat < MO ? QY(!0) : sY(YY ? `${ws}rxResizeCooling` : `${ws}rxResizeHot`, {
                        pct: String(MO)
                      })
                    },
                    children: [zY, " \u270e"]
                  }) : zY, " \xb7 ", RY(VY ? null !== (DY = null === TY || void 0 === TY ? void 0 : TY.label) && void 0 !== DY ? DY : `${ws}rxState_running` : `${ws}rxSubPlanShort`)]
                })]
              })]
            }), (0, WI.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [OY && !SY && (0, WI.jsx)(Pu, {
                kind: "reactor",
                busy: OY.busy.has("apart"),
                whyNot: BY ? () => {
                  sY(BY.key, BY.params)
                } : null,
                apart: () => {
                  AY.tap("apart", (() => {
                    AY.send("apart")
                  }))
                }
              }), (0, WI.jsx)(yR.k, {
                onClick: IY
              })]
            })]
          }), OY && eY && (0, WI.jsxs)("div", {
            className: "Baf2RxBody",
            children: [VY ? (0, WI.jsx)(ds, {
              view: OY,
              explain: sY,
              preview: Rs(OY.status)
            }) : (0, WI.jsx)(Ms, {
              view: OY,
              explain: sY
            }), (0, WI.jsx)(Ju, {
              text: NY ? `${vs(RY,eY)} ${RY(`${ws}rxTapHint`)}` : vs(RY, eY),
              tone: eY.tone,
              explained: gY
            }), SY ? (0, WI.jsxs)(WI.Fragment, {
              children: [(0, WI.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: RY(`${ws}rxNotYours`)
              }), (0, WI.jsx)(pu, {
                status: OY.status,
                store: AY,
                readOnly: !0
              })]
            }) : VY && !oY ? (0, WI.jsxs)(WI.Fragment, {
              children: [(0, WI.jsx)(Vs, {
                view: OY,
                store: AY,
                explain: sY,
                explainOnce: iY
              }), void 0 !== OY.status.baf2RxLayout && bu(OY.status) && (0, WI.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, WI.jsx)(pu, {
                  status: OY.status,
                  store: AY,
                  readOnly: !1,
                  bare: !0
                }), (0, WI.jsx)(qu, {
                  status: OY.status,
                  store: AY,
                  busy: OY.busy.has("fill")
                })]
              })]
            }) : (0, WI.jsxs)(WI.Fragment, {
              children: [(0, WI.jsx)(Ss, {
                view: OY,
                store: AY,
                keepSize: VY ? () => {
                  WY(!1)
                } : void 0
              }), sg(OY.dims, OY.status.baf2RxDims) && (0, WI.jsx)(ls, {
                need: OY.status.baf2RxNeed,
                explain: sY
              }), (0, WI.jsx)(pu, {
                status: OY.status,
                store: AY,
                readOnly: !1
              })]
            }), yY && (0, WI.jsx)(xu, {
              id: "baf2ResizeTitle",
              title: `${ws}rxResizeConfirmTitle`,
              body: `${ws}rxResizeConfirmBody`,
              yes: `${ws}rxChangeSize`,
              cancel: () => {
                QY(!1)
              },
              confirm: () => {
                QY(!1), WY(!0)
              }
            })]
          })]
        })
      })
    }
    class ps {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(YY) {
        this.view = YY;
        for (const rY of this.listeners) rY()
      }
      get() {
        return this.view
      }
      subscribe(YY) {
        return this.listeners.add(YY), () => {
          this.listeners.delete(YY)
        }
      }
    }

    function ks(YY) {
      let {
        commands: rY,
        store: DY,
        power: AY,
        water: IY,
        reactor: RY,
        battery: OY,
        collider: gY,
        terminal: aY,
        quests: vY,
        close: uY,
        leave: sY,
        askIslands: iY,
        showCore: yY,
        openSocial: QY
      } = YY;
      const {
        userContext: oY
      } = (0, NO.d)(), WY = eO.featureFlags.useSocialFeatures && oY.isLoggedIn(), [EY, mY] = (0, FY.useState)((() => DY.get()));
      (0, FY.useEffect)((() => DY.subscribe((() => {
        mY(DY.get())
      }))), [DY]);
      const VY = "islands" === (null === EY || void 0 === EY ? void 0 : EY.kind) ? EY.backToCore : void 0;
      return (0, WI.jsxs)(ZR.Provider, {
        value: rY,
        children: ["core" === (null === EY || void 0 === EY ? void 0 : EY.kind) && (0, WI.jsx)(ru, {
          view: EY.core,
          close: uY,
          askIslands: iY
        }), "dropMap" === (null === EY || void 0 === EY ? void 0 : EY.kind) && (0, WI.jsx)(Iu, {
          message: EY.dropMap,
          quests: vY,
          close: uY,
          leave: sY
        }), "islands" === (null === EY || void 0 === EY ? void 0 : EY.kind) && (0, WI.jsx)(lu, {
          message: EY.islands,
          arrivedAtMs: EY.arrivedAtMs,
          close: VY ? () => {
            yY(VY)
          } : uY,
          leave: sY,
          openSocial: WY ? QY : null
        }), "quests" === (null === EY || void 0 === EY ? void 0 : EY.kind) && (0, WI.jsx)(mv, {
          store: vY,
          close: uY
        }), "transfer" === (null === EY || void 0 === EY ? void 0 : EY.kind) && (0, WI.jsx)(Ga, {
          message: EY.transfer,
          arrivedAtMs: EY.arrivedAtMs,
          close: uY,
          leave: sY
        }), "power" === (null === EY || void 0 === EY ? void 0 : EY.kind) && (0, WI.jsx)(lR, {
          store: AY,
          close: uY
        }), "water" === (null === EY || void 0 === EY ? void 0 : EY.kind) && (0, WI.jsx)(OO, {
          store: IY,
          close: uY
        }), "reactor" === (null === EY || void 0 === EY ? void 0 : EY.kind) && (0, WI.jsx)(qs, {
          store: RY,
          close: uY
        }), "battery" === (null === EY || void 0 === EY ? void 0 : EY.kind) && (0, WI.jsx)(es, {
          store: OY,
          close: uY
        }), "collider" === (null === EY || void 0 === EY ? void 0 : EY.kind) && (0, WI.jsx)(ga, {
          store: gY,
          close: uY
        }), "terminal" === (null === EY || void 0 === EY ? void 0 : EY.kind) && (0, WI.jsx)(Cu, {
          store: aY,
          close: uY,
          send: YY => {
            rY.send(YY)
          }
        })]
      })
    }
    var Gs = DY(37879);

    function xs(YY, rY) {
      return YY.distSq - rY.distSq
    }
    class ns {
      constructor() {
        this.list = [], this.pool = []
      }
      add(YY, rY, DY, FY) {
        let AY = this.pool[this.list.length];
        AY || (AY = {
          x: 0,
          y: 0,
          distSq: 0,
          element: rY,
          liftRem: DY,
          dot: FY
        }, this.pool.push(AY)), AY.x = YY.x, AY.y = YY.y, AY.distSq = YY.distSq, AY.element = rY, AY.liftRem = DY, AY.dot = FY, this.list.push(AY)
      }
    }
    class Ps {
      constructor() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = YY, this.sizes = new WeakMap, this.observer = new ResizeObserver((YY => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const rY of YY) {
            const YY = rY.borderBoxSize[0];
            "dot" !== rY.target.dataset.crowded && 0 !== YY.inlineSize && 0 !== YY.blockSize && this.sizes.set(rY.target, {
              width: YY.inlineSize,
              height: YY.blockSize
            })
          }
        })), this.remPx = 16, this.Mi = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.QE = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.QE)
      }
      observe(YY) {
        this.observer.observe(YY)
      }
      unobserve(YY) {
        this.observer.unobserve(YY)
      }
      run(YY) {
        const rY = YY.list;
        rY.sort(xs);
        const DY = this.pxPerVw,
          FY = this.pxPerVh;
        this.Mi.length = 0, this.hud && this.Mi.push(...this.hud.boxes(performance.now()));
        for (const IY of rY) {
          var AY;
          const YY = this.sizes.get(IY.element);
          let rY = "no";
          if (YY && YY.width > 0) {
            const AY = IY.x * DY,
              RY = IY.y * FY - IY.liftRem * this.remPx;
            this.fit(AY, RY, YY.width, YY.height) || (rY = IY.dot && this.fit(AY, RY, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (AY = IY.element.dataset.crowded) && void 0 !== AY ? AY : "no") !== rY && ("no" === rY ? delete IY.element.dataset.crowded : IY.element.dataset.crowded = rY), "hidden" !== rY && (0, Gs.c)(IY.element, IY.x, IY.y)
        }
        rY.length = 0
      }
      fit(YY, rY, DY, FY) {
        const AY = YY - DY / 2,
          IY = YY + DY / 2,
          RY = rY - FY,
          OY = this.Mi;
        for (let gY = 0; gY < OY.length; gY += 4)
          if (AY < OY[gY + 1] - 2 && IY > OY[gY] + 2 && RY < OY[gY + 3] - 2 && rY > OY[gY + 2] + 2) return !1;
        return OY.push(AY, IY, RY, rY), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.QE)
      }
    }
    const Us = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class Ls {
      constructor() {
        this.cards = Us.map((YY => document.getElementsByClassName(YY))), this.watched = Us.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(YY) {
        YY - this.refreshedAt > 1e3 && (this.refreshedAt = YY, this.stale = !0);
        for (let DY = 0; DY < this.cards.length; DY++) {
          var rY;
          const YY = null !== (rY = this.cards[DY][0]) && void 0 !== rY ? rY : null;
          YY !== this.watched[DY] && this.watch(DY, YY)
        }
        return this.stale && (this.stale = !1, this.measure()), this.list
      }
      dispose() {
        for (let YY = 0; YY < this.watched.length; YY++) this.watch(YY, null);
        this.sizes.disconnect(), window.removeEventListener("resize", this.onChange)
      }
      measure() {
        const YY = this.list;
        YY.length = 0;
        for (const rY of this.watched) {
          if (!rY || rY.closest(".NoRoom")) continue;
          const DY = rY.getBoundingClientRect();
          let FY = DY.top,
            AY = DY.bottom;
          if (rY === this.watched[0] && this.hud) {
            const YY = this.hud.getBoundingClientRect();
            FY = Math.max(FY, YY.top), AY = Math.min(AY, YY.bottom)
          }
          DY.width > 0 && AY > FY && YY.push(DY.left, DY.right, FY, AY)
        }
      }
      watch(YY, rY) {
        const DY = this.watched[YY];
        var FY, AY;
        (DY && this.sizes.unobserve(DY), this.watched[YY] = rY, this.stale = !0, rY && this.sizes.observe(rY), 0 === YY) && (null === (FY = this.hud) || void 0 === FY || FY.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (AY = null === rY || void 0 === rY ? void 0 : rY.closest(".Baf2QuestHud")) && void 0 !== AY ? AY : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    const ts = [0, 0, 0],
      Yi = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function ri(YY, rY, DY, FY, AY, IY) {
      let [RY, OY, gY] = FY;
      const aY = (RY + .5 - DY[0]) ** 2 + (OY - DY[1]) ** 2 + (gY + .5 - DY[2]) ** 2;
      let vY = null;
      aY <= IY ** 2 && (ts[0] = RY + .5, ts[1] = OY + AY, ts[2] = gY + .5, vY = rY.projectWorldPosToViewport(ts));
      const uY = null !== vY && vY.x > -5 && vY.x < 105 && vY.y > -5 && vY.y < 105;
      return (0, Gs.g)(YY, !uY), uY ? (Yi.x = vY.x, Yi.y = vY.y, Yi.distSq = aY, Yi) : null
    }
    class Di {
      constructor(YY) {
        this.onElement = YY, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(YY) {
        const rY = [];
        for (let DY = 0; DY + 4 < YY.length; DY += 5) {
          const FY = [YY[DY], YY[DY + 1], YY[DY + 2]];
          rY.push({
            key: FY.join(","),
            pos: FY,
            status: PF[YY[DY + 3]],
            kind: Vr[YY[DY + 4]]
          })
        }
        this.markers = rY, this.keys = new Set(rY.map((YY => {
          let {
            key: rY
          } = YY;
          return rY
        }))), this.notify()
      }
      covers(YY) {
        return this.keys.has(YY)
      }
      get() {
        return this.markers
      }
      subscribe(YY) {
        return this.listeners.add(YY), () => {
          this.listeners.delete(YY)
        }
      }
      bind(YY) {
        let rY = this.refs.get(YY);
        return rY || (rY = rY => {
          const DY = this.elements.get(YY);
          var FY, AY;
          DY && (null === (FY = this.onElement) || void 0 === FY || FY.call(this, DY, !1));
          rY ? (this.elements.set(YY, rY), null === (AY = this.onElement) || void 0 === AY || AY.call(this, rY, !0)) : (this.elements.delete(YY), this.refs.delete(YY))
        }, this.refs.set(YY, rY)), rY
      }
      onAfterRender(YY, rY, DY) {
        for (const FY of this.markers) {
          const AY = this.elements.get(FY.key);
          if (!AY) continue;
          const IY = ri(AY, YY, rY, FY.pos, 1.05, 24);
          IY && DY.add(IY, AY, .45, !0)
        }
      }
      notify() {
        for (const YY of this.listeners) YY()
      }
    }
    const Fi = {
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
    const Ai = (0, FY.memo)((function(YY) {
        let {
          status: rY,
          kind: DY,
          bindRef: FY
        } = YY;
        const {
          t: AY
        } = (0, mA.C)(), IY = function(YY, rY) {
          var DY;
          if ("noFuel" === YY) {
            var FY, AY;
            const YY = null === (FY = Br[rY]) || void 0 === FY || null === (AY = FY.fuels) || void 0 === AY ? void 0 : AY.find((YY => Pr.includes(YY)));
            return null !== YY && void 0 !== YY ? YY : Fi.noFuel
          }
          return void 0 !== (null === (DY = Br[rY]) || void 0 === DY ? void 0 : DY.cryoMade) ? "noOutlet" === YY ? "Fluid Pipe" : "noInput" === YY ? "Biomass" : Fi[YY] : Fi[YY]
        }(rY, DY);
        return (0, WI.jsxs)("div", {
          className: QA()("Baf2StallMarker", rY),
          ref: FY,
          hidden: !0,
          children: [IY && (0, WI.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, WI.jsx)(SA.c, {
              itemName: IY,
              amount: 0
            })
          }), (0, WI.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === rY ? "?" : "!"
          }), (0, WI.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: AY(`buildAFactory2Game:stallTag_${rY}`)
          })]
        })
      })),
      Ii = (0, FY.memo)((function(YY) {
        let {
          controller: rY
        } = YY;
        const [DY, AY] = (0, FY.useState)((() => rY.get()));
        return (0, FY.useEffect)((() => (AY(rY.get()), rY.subscribe((() => {
          AY(rY.get())
        })))), [rY]), (0, WI.jsx)("div", {
          className: "Baf2StallMarkers",
          children: DY.map((YY => (0, WI.jsx)(Ai, {
            status: YY.status,
            kind: YY.kind,
            bindRef: rY.bind(YY.key)
          }, YY.key)))
        })
      })),
      Ri = gD.m + 150;
    class Oi {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(YY, rY) {
        const DY = rY - YY;
        null === this.offset || DY < this.offset ? this.offset = DY : this.offset = Math.min(DY, this.offset + .02 * (rY - this.sampledAt)), this.sampledAt = rY
      }
      toLocal(YY) {
        var rY;
        return YY + (null !== (rY = this.offset) && void 0 !== rY ? rY : 0) + Ri
      }
    }
    var gi = DY(37882);
    const ai = 15 * Math.PI / 180,
      vi = Math.SQRT2,
      ui = [4, 2];

    function si(YY, rY) {
      const DY = [1 / 0, 1 / 0, 1 / 0],
        FY = [-1 / 0, -1 / 0, -1 / 0];
      for (const gY of YY)
        for (let YY = 0; YY < 3; YY++) DY[YY] = Math.min(DY[YY], gY[YY]), FY[YY] = Math.max(FY[YY], gY[YY]);
      const AY = (DY[0] + FY[0]) / 2,
        IY = (DY[1] + FY[1]) / 2,
        RY = (DY[2] + FY[2]) / 2;
      let OY = 0;
      for (const gY of YY) OY = Math.max(OY, Math.hypot(gY[0] - AY, gY[1] - IY, gY[2] - RY));
      return {
        x: AY,
        y: IY,
        z: RY,
        r: OY + rY
      }
    }

    function ii(YY, rY, DY) {
      const FY = rY.x - YY.x,
        AY = rY.y - YY.y,
        IY = rY.z - YY.z,
        RY = Math.sqrt(FY * FY + AY * AY + IY * IY);
      if (RY <= rY.r + 8) return 1;
      const OY = rY.r / RY,
        gY = Math.sqrt(1 - OY * OY),
        aY = gY < -YY.cosHalf,
        vY = (FY * YY.dx + AY * YY.dy + IY * YY.dz) / RY;
      if (!aY && vY < YY.cosHalf * gY - YY.sinHalf * OY) return 0;
      const uY = DY * vi * YY.frameMs * YY.pxPerBlock / (RY - rY.r);
      for (let sY = 0; sY < ui.length; sY++)
        if (uY * ui[sY] <= 1) return ui[sY];
      return 1
    }

    function yi(YY, rY) {
      return {
        name: YY,
        at: rY,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const Qi = [0, 0, 0];

    function oi(YY, rY, DY) {
      let [, FY, AY, IY, RY, OY] = rY;
      const gY = gD.h * (null !== RY && void 0 !== RY ? RY : 1),
        aY = [];
      for (let iY = 0; iY < FY.length; iY += 3) aY.push([FY[iY] + .5, FY[iY + 1] + .65, FY[iY + 2] + .5]);
      const vY = [];
      for (let iY = 0; iY < aY.length - 1; iY++) {
        const [YY, rY] = [aY[iY], aY[iY + 1]];
        vY.push([(YY[0] + rY[0]) / 2, (YY[1] + rY[1]) / 2, (YY[2] + rY[2]) / 2])
      }
      const uY = aY.slice(1, -1),
        sY = new Uint8Array(uY.length);
      for (const iY of null !== OY && void 0 !== OY ? OY : []) sY[iY >> 1] |= 1 & iY ? 2 : 1;
      return {
        island: YY,
        length: uY.length,
        loop: IY,
        cellsPerMs: gY,
        edges: vY,
        uv: uY,
        bounds: si([...vY, ...uY], .3),
        changed: !0,
        culled: !1,
        hide: sY,
        items: AY.map((YY => {
          let [rY, FY] = YY;
          return yi(rY, (0, gD.E)(rY, FY, DY, gY).at)
        }))
      }
    }

    function Wi(YY, rY) {
      const {
        items: DY
      } = YY;
      if (0 === DY.length) return;
      const FY = YY.length / YY.cellsPerMs,
        AY = Math.floor((rY - DY[0].at) / FY) - 1;
      if (AY > 0)
        for (const IY of DY) IY.at += AY * FY
    }

    function Ei(YY, rY) {
      const DY = Math.min(Math.floor(rY), YY.length - 1),
        FY = YY.hide[DY];
      return 0 !== FY && 0 !== (FY & (rY - DY < .5 ? 1 : 2))
    }

    function mi(YY, rY) {
      const DY = Math.min(Math.floor(rY), YY.length - 1),
        FY = rY - DY,
        AY = FY < .5,
        IY = AY ? YY.edges[DY] : YY.uv[DY],
        RY = AY ? YY.uv[DY] : YY.edges[DY + 1],
        OY = AY ? 2 * FY : 2 * FY - 1;
      Qi[0] = IY[0] + (RY[0] - IY[0]) * OY, Qi[1] = IY[1] + (RY[1] - IY[1]) * OY, Qi[2] = IY[2] + (RY[2] - IY[2]) * OY
    }
    const Vi = Math.PI / 4;
    class Si {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new Oi, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.QE = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(YY) {
        const rY = performance.now();
        this.clock.sample(YY.baf2BeltLinesAt, rY), this.queue(YY.baf2BeltLinesAt, YY, 0, null, null, 0), this.applyDue(rY)
      }
      onMoves(YY) {
        const rY = performance.now(),
          DY = YY.baf2BeltMovesAt;
        this.clock.sample(DY, rY);
        for (const [FY, AY, IY, RY] of YY.baf2BeltMoveList) null === AY ? this.queue(DY - IY, null, FY, null, null, null !== RY && void 0 !== RY ? RY : 0) : this.queue(DY - IY, null, FY, AY, null !== RY && void 0 !== RY ? RY : null, 0);
        this.applyDue(rY)
      }
      start(YY) {
        this.pool = new gi.d(YY, {
          scale: .3,
          yaw: Vi
        }, 64), this.QE(), window.addEventListener("resize", this.QE)
      }
      onAfterRender(YY) {
        const {
          pool: rY
        } = this;
        if (!rY) return;
        const DY = performance.now(),
          FY = DY - this.lastRenderAt;
        this.lastRenderAt = DY, FY < 100 && (this.frameMs += .1 * (FY - this.frameMs));
        const AY = DY + this.frameMs;
        this.applyDue(AY);
        const IY = YY.cameraPosition,
          RY = rY.follow(IY);
        this.setView(YY, IY);
        const OY = this.frame++;
        for (let gY = 0; gY < this.shown.length; gY++) {
          const YY = this.shown[gY],
            DY = ii(this.view, YY.bounds, YY.cellsPerMs),
            FY = YY.culled && 0 !== DY;
          if (YY.culled = 0 === DY, !RY && !YY.changed && !FY && (0 === DY || (OY + gY) % DY !== 0)) continue;
          YY.changed = !1, YY.loop && (Wi(YY, AY), (0, gD.B)(YY.items, YY.length, AY, YY.cellsPerMs));
          let IY = YY.length;
          for (let OY = 0; OY < YY.items.length; OY++) {
            const DY = YY.items[OY],
              FY = (0, gD.F)(DY.at, IY, AY, YY.cellsPerMs);
            if (IY = FY - gD.r, Ei(YY, FY)) {
              null === DY.kind || DY.hidden || (DY.kind.hide(DY.slot), DY.hidden = !0);
              continue
            }
            let gY = DY.kind;
            if (null === gY) {
              if (gY = rY.kindOf(DY.name), null === gY) continue;
              DY.kind = gY, DY.slot = gY.take(), DY.hidden = !0, DY.drawn = NaN
            } else if (FY === DY.drawn && !DY.hidden && !RY) continue;
            mi(YY, FY), gY.write(DY.slot, Qi[0], Qi[1], Qi[2]), DY.hidden = !1, DY.drawn = FY
          }
        }
        rY.commit()
      }
      dispose() {
        var YY;
        window.removeEventListener("resize", this.QE), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (YY = this.pool) || void 0 === YY || YY.dispose(), this.pool = null
      }
      setView(YY, rY) {
        const {
          cameraDir: DY,
          lastDir: FY
        } = this, AY = YY.cameraDirection;
        for (let vY = 0; vY < 3; vY++) FY[vY] = DY[vY], DY[vY] = AY[vY];
        const IY = DY[0] * FY[0] + DY[1] * FY[1] + DY[2] * FY[2],
          RY = Number.isNaN(IY) ? 0 : Math.acos(Math.min(1, Math.max(-1, IY))),
          {
            width: OY,
            height: gY
          } = this,
          aY = YY.tanHalfFovX;
        ! function(YY, rY, DY, FY, AY, IY, RY) {
          let OY = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          YY.x = rY[0], YY.y = rY[1], YY.z = rY[2], YY.dx = DY[0], YY.dy = DY[1], YY.dz = DY[2];
          const gY = Math.min(Math.PI, Math.atan(Math.sqrt(FY * FY + AY * AY)) + ai + OY);
          YY.cosHalf = Math.cos(gY), YY.sinHalf = Math.sin(gY), YY.pxPerBlock = IY / (2 * AY), YY.frameMs = RY
        }(this.view, rY, DY, aY, aY * gY / OY, gY * window.devicePixelRatio, this.frameMs, RY)
      }
      queue(YY, rY, DY, FY, AY, IY) {
        const RY = Math.max(this.clock.toLocal(YY), this.lastPendingAt);
        this.lastPendingAt = RY, this.pending.push({
          at: RY,
          lines: rY,
          line: DY,
          name: FY,
          pos: AY,
          idx: IY
        })
      }
      applyDue(YY) {
        const {
          pending: rY
        } = this;
        for (; this.pendingHead < rY.length && rY[this.pendingHead].at <= YY;) {
          const YY = rY[this.pendingHead++];
          if (YY.lines) this.applyLines(YY.lines, YY.at), YY.lines = null;
          else {
            const rY = this.lines.get(YY.line);
            rY && this.applyMove(rY, YY, YY.at)
          }
        }
        this.pendingHead === rY.length ? (rY.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > rY.length && (rY.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(YY, rY) {
        this.clearIsland(YY.baf2BeltIsland);
        for (const DY of YY.baf2BeltLineList) this.lines.set(DY[0], oi(YY.baf2BeltIsland, DY, rY));
        this.shown = [...this.lines.values()]
      }
      applyMove(YY, rY, DY) {
        let {
          name: FY,
          pos: AY,
          idx: IY
        } = rY;
        YY.changed = !0, YY.loop && (Wi(YY, DY), (0, gD.B)(YY.items, YY.length, DY, YY.cellsPerMs)), null !== FY && null !== AY ? (0, gD.D)(YY.items, YY.length, yi(FY, DY), AY, DY, YY.cellsPerMs) : null !== FY ? YY.items.push(yi(FY, DY)) : YY.items.length > IY && this.release((0, gD.G)(YY.items, YY.length, DY, YY.cellsPerMs, IY))
      }
      clearIsland(YY) {
        for (const [rY, DY] of this.lines)
          if (DY.island === YY) {
            for (const YY of DY.items) this.release(YY);
            this.lines.delete(rY)
          }
      }
      release(YY) {
        null !== YY.kind && (YY.kind.release(YY.slot), YY.kind = null, YY.slot = -1, YY.hidden = !0, YY.drawn = NaN)
      }
    }
    var li = DY(36025),
      Ti = DY(37888);

    function ei(YY) {
      let {
        depth: rY,
        store: DY,
        t: AY
      } = YY;
      const IY = function(YY) {
        const [rY, DY] = (0, FY.useState)(YY.lastPlayerY());
        return (0, xa.g)(KA, DY), (0, FY.useEffect)((() => {
          DY(YY.lastPlayerY())
        }), [YY]), rY
      }(DY);
      if (null === IY) return null;
      const [RY, OY] = rY, gY = IY > RY ? RY : null !== OY && IY < OY ? OY : null, aY = {
        y: sI(IY),
        target: null === gY ? "" : sI(gY)
      };
      return (0, WI.jsx)("span", {
        className: QA()("Baf2QuestDepth", {
          Reached: null === gY
        }),
        children: AY(`${La}${null===gY?"questDepthReached":"questDepth"}`, aY)
      })
    }

    function Ni(YY) {
      let {
        also: rY,
        view: DY,
        t: FY
      } = YY;
      return (0, WI.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, WI.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, WI.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, WI.jsx)("strong", {
            children: FY(`${La}questAlsoDownHere`)
          }), (0, WI.jsx)("span", {
            className: "Baf2QuestChips",
            children: rY.map((YY => {
              let [rY, AY, IY, RY] = YY;
              return (0, WI.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": FY(`${La}questAlsoItem`, {
                  item: Yv(FY, DY.itemNames[rY], rY),
                  have: String(AY),
                  need: String(IY)
                }),
                children: [(0, WI.jsx)(Fv, {
                  item: rY
                }), (0, WI.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${AY}/${IY}`
                }), null !== RY && (0, WI.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: FY(`${La}questAlsoDepth`, {
                    y: sI(RY)
                  })
                })]
              }, rY)
            }))
          })]
        })]
      })
    }
    var Bi = DY(2971);

    function ci(YY) {
      let {
        expanded: rY,
        inventoryOpen: DY,
        children: AY
      } = YY;
      const IY = (0, FY.useRef)(null);
      return (0, FY.useEffect)((() => {
        const YY = IY.current,
          rY = null === YY || void 0 === YY ? void 0 : YY.closest(".RightElements"),
          FY = null === YY || void 0 === YY ? void 0 : YY.firstElementChild;
        if (!YY || !rY || !FY) return;
        return (0, Ti.c)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [rY, FY], (() => {
          const AY = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === AY.length) return;
          const IY = Math.max(...AY.map((YY => YY.getBoundingClientRect().bottom))),
            RY = rY.getBoundingClientRect(),
            OY = DY ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (OY) {
            const rY = parseFloat(getComputedStyle(FY).marginLeft) + parseFloat(getComputedStyle(FY).marginRight),
              DY = RY.right - OY.getBoundingClientRect().right - 8 - rY;
            YY.style.setProperty("--baf2-quest-room", `${DY}px`), YY.classList.toggle("NoRoom", DY < 150)
          } else YY.style.removeProperty("--baf2-quest-room"), YY.classList.remove("NoRoom");
          const gY = IY - RY.top + 8,
            aY = function(YY, rY, DY) {
              const FY = rY.getBoundingClientRect(),
                AY = YY.getBoundingClientRect(),
                IY = (0, Bi.i)(AY.left, AY.right, FY.top + DY);
              if (null !== IY && IY < FY.bottom) return IY - FY.top;
              return FY.height - (parseFloat(getComputedStyle(rY).paddingBottom) || 0)
            }(YY, rY, gY) - 8,
            vY = window.innerHeight / 2 - RY.top,
            {
              top: uY,
              maxHeight: sY
            } = function(YY, rY, DY, FY, AY) {
              const IY = Math.min(DY, Math.max(0, rY - YY)),
                RY = AY ? YY : Math.max(YY, Math.min(FY - IY / 2, rY - IY));
              return {
                top: RY,
                maxHeight: Math.max(0, rY - RY)
              }
            }(gY, aY, function(YY) {
              const rY = YY.firstElementChild,
                DY = rY ? rY.scrollHeight - rY.clientHeight : 0;
              return YY.getBoundingClientRect().height + Math.max(0, DY)
            }(FY), vY, QI());
          YY.style.top = `${uY}px`, YY.style.maxHeight = `${sY}px`
        }))
      }), [DY]), (0, WI.jsx)("div", {
        ref: IY,
        className: QA()("Baf2QuestHud", {
          Expanded: rY
        }),
        children: AY
      })
    }

    function Ki(YY) {
      let {
        amount: rY,
        t: DY
      } = YY;
      return (0, WI.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, WI.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, WI.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: DY(`${La}questStepsDone`, {
            amount: String(rY)
          })
        })]
      })
    }

    function Hi(YY) {
      let {
        pulse: rY
      } = YY;
      return 0 === rY ? null : (0, WI.jsx)("span", {
        className: "Baf2QuestTrackerPulse",
        "aria-hidden": "true"
      }, rY)
    }

    function zi(YY) {
      var rY;
      let {
        store: DY
      } = YY;
      const AY = (0, xa.k)(cA, DY.get()),
        [IY, RY] = (0, FY.useState)(!1),
        {
          t: OY
        } = (0, mA.C)(),
        gY = function() {
          const [YY, rY] = (0, FY.useState)(QI);
          return (0, FY.useEffect)((() => (rY(QI()), oI(rY))), []), YY
        }(),
        {
          openInGameMenuName: aY,
          openEverythingMenuName: vY
        } = (0, sA.j)(["openInGameMenuName", "openEverythingMenuName"]),
        uY = "inventory" === aY && null === vY,
        sY = null !== aY && !uY || null !== vY;
      if (! function(YY) {
          return null !== YY.name || null !== YY.side
        }(AY) || sY || "off" === AY.tutorial) return null;
      const iY = jA(AY.rows),
        yY = iY.filter((YY => YY.done)).length,
        QY = function(YY, rY) {
          const DY = JA(YY);
          let FY = 0;
          return YY.filter(((YY, AY) => !!YY.justFinished || !(YY.done || AY < DY || FY > rY) && (FY++, !0)))
        }(AY.rows, gY ? 0 : 2),
        oY = gY ? QY : function(YY, rY) {
          const DY = rY.filter((YY => !YY.justFinished));
          if (DY.length < 2) return [...rY];
          const FY = YY.indexOf(DY[0]),
            AY = YY.indexOf(DY[DY.length - 1]),
            IY = new Set(jA(YY));
          return YY.filter(((YY, DY) => rY.includes(YY) || YY.done && IY.has(YY) && DY > FY && DY < AY))
        }(AY.rows, QY),
        WY = IY ? AY.rows : oY,
        EY = IY || gY ? [] : function(YY, rY) {
          const DY = new Array(rY.length + 1).fill(0),
            FY = new Set(jA(YY));
          let AY = 0;
          for (const IY of YY) AY < rY.length && IY === rY[AY] ? AY++ : IY.done && FY.has(IY) && DY[AY]++;
          return DY
        }(AY.rows, oY),
        mY = IY || oY.length < AY.rows.length || null !== AY.reward,
        VY = fA(AY),
        SY = VY ? OY(`${La}questLineComplete`) : AY.tier ? Rv(OY, AY.tier) : OY(`${La}currentQuest`),
        lY = function(YY) {
          var rY, DY;
          if (fA(YY)) return null;
          const FY = null === (rY = YY.chapters) || void 0 === rY ? void 0 : rY.find((rY => {
            let [DY] = rY;
            return DY === YY.tier
          }));
          if (!FY) return null;
          const AY = FY[1].filter((YY => !YY[4]));
          if (0 === AY.length) return null;
          const IY = null === (DY = YY.name) || void 0 === DY ? void 0 : DY[0],
            RY = YY => AY.findIndex((rY => rY[0] === IY && (!YY || !rY[3]))),
            OY = RY(!0),
            gY = OY >= 0 ? OY : RY(!1);
          if (gY >= 0) return [gY + 1, AY.length];
          const aY = AY.filter((YY => YY[3])).length;
          return [Math.min(aY + 1, AY.length), AY.length]
        }(AY);
      return (0, WI.jsx)(li.e, {
        placement: "topRight",
        children: (0, WI.jsx)(ci, {
          expanded: IY,
          inventoryOpen: uY,
          children: (0, WI.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: ta,
            children: [null !== AY.name && (0, WI.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [(0, WI.jsx)(Hi, {
                pulse: AY.pulse
              }), (0, WI.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, WI.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [SY, lY && (0, WI.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": OY(`${La}questPlaceLabel`, {
                      n: String(lY[0]),
                      total: String(lY[1])
                    }),
                    children: OY(`${La}questPlace`, {
                      n: String(lY[0]),
                      total: String(lY[1])
                    })
                  }), AY.tier && AY.core && !VY && (0, WI.jsx)(Ov, {
                    core: AY.core,
                    t: OY
                  })]
                })
              }), (0, WI.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: OY(`${La}${AY.name[0]}`, rv(AY.name[1]))
              }), (iY.length > 1 || mY) && (0, WI.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [iY.length > 1 && (0, WI.jsx)(gv, {
                  rows: iY,
                  t: OY
                }), mY && (0, WI.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": IY,
                  onClick: () => {
                    RY(!IY)
                  },
                  children: [(0, WI.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: OY(`${La}questStepsToggle`, {
                      done: String(yY),
                      total: String(iY.length)
                    })
                  }), (0, WI.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: IY ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, WI.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [WY.map(((YY, rY) => {
                  var IY;
                  const RY = YY.current && AY.depth;
                  return (0, WI.jsxs)(FY.Fragment, {
                    children: [(null !== (IY = EY[rY]) && void 0 !== IY ? IY : 0) > 0 && (0, WI.jsx)(Ki, {
                      amount: EY[rY],
                      t: OY
                    }), (0, WI.jsx)(av, {
                      row: YY,
                      view: AY,
                      t: OY,
                      extra: RY && (0, WI.jsx)(ei, {
                        depth: RY,
                        store: DY,
                        t: OY
                      })
                    })]
                  }, YY.id)
                })), (null !== (rY = EY[WY.length]) && void 0 !== rY ? rY : 0) > 0 && (0, WI.jsx)(Ki, {
                  amount: EY[WY.length],
                  t: OY
                }), AY.also.length > 0 && (0, WI.jsx)(Ni, {
                  also: AY.also,
                  view: AY,
                  t: OY
                })]
              }), IY && AY.reward && (0, WI.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [OY(`${La}questReward`), (0, WI.jsx)(Fv, {
                  item: AY.reward
                }), Yv(OY, AY.itemNames[AY.reward], AY.reward)]
              })]
            }), AY.side && (0, WI.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [ZA(AY, Date.now()) && (0, WI.jsx)(Hi, {
                pulse: AY.sideCameUpAt
              }), (0, WI.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: OY(`${La}questSide`)
              }), (0, WI.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: OY(`${La}${AY.side.name[0]}`, rv(AY.side.name[1]))
              }), (0, WI.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, WI.jsx)(av, {
                  row: AY.side.row,
                  view: AY,
                  t: OY
                })
              })]
            })]
          })
        })
      })
    }
    const Zi = "baf2ToastView";
    class Ci {
      constructor() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = YY, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: YY,
          holdMs: rY
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const YY = this.dropCovered();
          YY && this.show(YY.message, YY.holdMs)
        }), 250));
        const DY = this.dropCovered();
        null !== DY && (DY.holdMs > 0 || "baf2ToastCelebrate" === DY.message.baf2ToastStyle) && "baf2ToastCelebrate" !== YY.baf2ToastStyle && this.show(DY.message, DY.holdMs);
        const FY = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== YY.baf2ToastStyle && FY > 0) return this.pending = {
          message: YY,
          holdMs: rY
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const YY = this.pending;
          this.pending = null, YY && this.present(YY.message, YY.holdMs)
        }), FY));
        this.present(YY, rY)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(YY, rY) {
        this.clearTimers(), this.pending = null;
        const DY = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: YY.baf2ToastText,
          style: YY.baf2ToastStyle,
          swapped: DY,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === YY.baf2ToastStyle ? 1500 : rY), this.vo();
        const FY = Math.min(8e3, Math.max(1e3, YY.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.leave()
        }), FY)
      }
      leave() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.vo(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.vo()
        }), 200))
      }
      clearTimers() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), null !== this.pendingTimer && (clearTimeout(this.pendingTimer), this.pendingTimer = null)
      }
      dropCovered() {
        null !== this.coveredTimer && (clearInterval(this.coveredTimer), this.coveredTimer = null);
        const YY = this.covering;
        return this.covering = null, YY
      }
      vo() {
        NA.g.vo(Zi, this.view, !0)
      }
    }
    var fi = DY(76);
    const ji = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function di(YY) {
      let {
        store: rY
      } = YY;
      const DY = (0, xa.k)(Zi, rY.get()),
        {
          openInGameMenuName: FY,
          openEverythingMenuName: AY
        } = (0, sA.j)(["openInGameMenuName", "openEverythingMenuName"]),
        IY = DY && (0, WI.jsxs)("div", {
          className: QA()("Baf2Toast", ji[DY.style], {
            Swapped: DY.swapped,
            Leaving: DY.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === DY.style && (0, WI.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, WI.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, WI.jsx)(lA.b, {
              text: DY.text
            })
          })]
        }, DY.id);
      return null !== FY && null === AY ? (0, fi.createPortal)((0, WI.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: IY
      }), document.body) : (0, WI.jsx)(li.e, {
        children: IY
      })
    }
    const Ji = "baf2AreaView";
    class Mi {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.ja = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.ja = null
      }
      arrive(YY, rY) {
        rY && function(YY) {
          return "home" === YY.baf2AreaPlace && void 0 !== YY.baf2AreaNameText
        }(YY) ? this.ja = YY : this.show(YY)
      }
      release() {
        const YY = this.ja;
        null !== YY && this.show(YY)
      }
      show(YY) {
        this.clearTimer(), this.ja = null;
        const rY = void 0 === YY.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: YY,
          ms: rY
        }, this.vo(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.vo()
        }), rY)
      }
      dispose() {
        this.clearTimer(), this.ja = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      vo() {
        NA.g.vo(Ji, this.view, !0)
      }
    }

    function wi(YY) {
      var rY;
      let {
        store: DY
      } = YY;
      const {
        t: FY
      } = (0, mA.C)(), AY = (0, xa.k)(Ji, DY.get());
      if (!AY) return null;
      const {
        area: IY
      } = AY, RY = IY.baf2AreaResetMinutes;
      return (0, WI.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": IY.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${AY.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, WI.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), IY.baf2AreaHeading && (0, WI.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: FY(IY.baf2AreaHeading)
        }), (0, WI.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (rY = IY.baf2AreaNameText) && void 0 !== rY ? rY : FY(IY.baf2AreaName)
        }), IY.baf2AreaNote && (0, WI.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: FY(IY.baf2AreaNote)
        }), void 0 !== RY && (0, WI.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: FY("buildAFactory2Game:areaWildsReset", {
            time: iI(FY, 60 * RY)
          })
        })]
      }, AY.id)
    }
    const bi = "baf2GearGauge";
    class Xi {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      ZE(YY) {
        var rY;
        if (this.clearLinger(), null === YY.gearPowerKind) return void this.set(null);
        const DY = "jetpack" === YY.gearPowerKind && (FY = YY.gearChargeState, AY = YY.gearCharge, "flying" === FY || "charging" === FY || "outOfCharge" === FY || "ceiling" === FY || "offPlot" === FY || "noPower" === FY && AY <= 0);
        var FY, AY;
        const IY = !0 === (null === (rY = this.view) || void 0 === rY ? void 0 : rY.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          RY = DY || "jetpack" === YY.gearPowerKind && IY;
        this.set({
          gauge: YY,
          jetShown: RY
        }), RY && !DY && (this.lingerTimer = setTimeout((() => {
          this.lingerTimer = null, this.view && this.set({
            ...this.view,
            jetShown: !1
          })
        }), 1500))
      }
      dispose() {
        this.clearLinger(), this.view = null
      }
      set(YY) {
        this.view = YY, NA.g.vo(bi, YY, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const qi = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function ki(YY) {
      let {
        store: rY
      } = YY;
      const DY = (0, xa.k)(bi, rY.get());
      return DY ? "jetpack" === DY.gauge.gearPowerKind ? (0, WI.jsx)(Gi, {
        view: DY
      }) : (0, WI.jsx)(xi, {
        gauge: DY.gauge
      }) : null
    }

    function Gi(YY) {
      let {
        view: rY
      } = YY;
      const {
        t: DY
      } = (0, mA.C)(), {
        gauge: FY
      } = rY, AY = FY.gearChargeMax > 0 ? Math.max(0, Math.min(1, FY.gearCharge / FY.gearChargeMax)) : 0, IY = qi[FY.gearChargeState], RY = IY ? DY(IY) : null;
      return (0, WI.jsxs)("div", {
        className: QA()("Baf2JetArc", {
          Shown: rY.jetShown,
          Low: AY < .2,
          Warm: AY >= .2 && AY < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - AY)
        },
        "aria-hidden": !rY.jetShown,
        children: [(0, WI.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, WI.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: ni,
            pathLength: 100
          }), (0, WI.jsx)("path", {
            className: "Baf2JetArcFill",
            d: ni,
            pathLength: 100
          })]
        }), (0, WI.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * AY), "%"]
        }), RY && (0, WI.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: RY
        })]
      })
    }

    function xi(YY) {
      let {
        gauge: rY
      } = YY;
      const {
        t: DY
      } = (0, mA.C)(), FY = function(YY, rY) {
        switch (rY.gearPowerKind) {
          case "skyPack":
            return YY("buildAFactory2Game:gearSkyPack", {
              charge: rY.gearCharge,
              max: rY.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return YY("buildAFactory2Game:gearIslandDraw", {
              power: UY(rY.gearIslandPower),
              cost: UY(rY.gearCostPerUse)
            });
          case "barrier":
            return YY("buildAFactory2Game:gearBarrier", {
              shield: Math.round(rY.gearCharge),
              max: rY.gearChargeMax,
              power: UY(rY.gearIslandPower)
            });
          default:
            return null
        }
      }(DY, rY);
      return null === FY ? null : (0, WI.jsx)(li.e, {
        children: (0, WI.jsx)("div", {
          className: QA()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === rY.gearChargeState || "outOfCharge" === rY.gearChargeState
          }),
          role: "status",
          children: FY
        })
      })
    }
    const ni = (() => {
      const YY = YY => {
        const rY = YY * Math.PI / 180;
        return `${(40*Math.cos(rY)).toFixed(2)} ${(40*Math.sin(rY)).toFixed(2)}`
      };
      return `M ${YY(160)} A 40 40 0 1 1 ${YY(380)}`
    })();
    class Pi {
      constructor(YY) {
        this.onElement = YY, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      ZE(YY) {
        let rY = YY.baf2LabelsReset || YY.baf2LabelsIsland !== this.island;
        rY && (this.labels.clear(), this.island = YY.baf2LabelsIsland);
        for (const [DY, FY, AY, IY, RY] of YY.baf2LabelsList) {
          const YY = `${DY},${FY},${AY}`,
            OY = this.labels.get(YY);
          null === IY ? rY = this.labels.delete(YY) || rY : OY && OY.item === IY && (OY.count === RY || OY.count >= 0 && RY >= 0) ? OY.count !== RY && (OY.count = RY, this.writeCount(YY, RY)) : (this.labels.set(YY, {
            key: YY,
            pos: [DY, FY, AY],
            item: IY,
            count: RY
          }), this.writeCount(YY, RY), rY = !0)
        }
        if (this.changes++, rY) {
          this.snapshot = [...this.labels.values()];
          for (const YY of this.listeners) YY()
        }
      }
      bindCount(YY) {
        const rY = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${YY}`;
        let DY = this.countRefs.get(rY);
        return DY || (DY = DY => {
          var FY, AY;
          DY ? (this.countElements.set(rY, DY), this.writeCount(YY, null !== (FY = null === (AY = this.labels.get(YY)) || void 0 === AY ? void 0 : AY.count) && void 0 !== FY ? FY : -1)) : (this.countElements.delete(rY), this.countRefs.delete(rY))
        }, this.countRefs.set(rY, DY)), DY
      }
      setCountWords(YY) {
        this.countWords = YY;
        for (const [rY, DY] of this.labels) this.writePart(`words|${rY}`, YY(DY.count), DY.count)
      }
      writeCount(YY, rY) {
        this.writePart(`bare|${YY}`, uI(rY), rY), this.countElements.has(`words|${YY}`) && this.writePart(`words|${YY}`, this.countWords(rY), rY)
      }
      writePart(YY, rY, DY) {
        const FY = this.countElements.get(YY);
        if (!FY || DY < 0) return;
        const AY = FY.firstChild;
        AY && 3 === AY.nodeType && !AY.nextSibling ? AY.nodeValue !== rY && (AY.nodeValue = rY) : FY.textContent !== rY && (FY.textContent = rY)
      }
      list() {
        return this.snapshot
      }
      at(YY) {
        return this.labels.get(`${YY[0]},${YY[1]},${YY[2]}`)
      }
      version() {
        return this.changes
      }
      subscribe(YY) {
        return this.listeners.add(YY), () => {
          this.listeners.delete(YY)
        }
      }
      bind(YY) {
        let rY = this.refs.get(YY);
        return rY || (rY = rY => {
          const DY = this.elements.get(YY);
          var FY, AY;
          DY && (null === (FY = this.onElement) || void 0 === FY || FY.call(this, DY, !1));
          rY ? (this.elements.set(YY, rY), null === (AY = this.onElement) || void 0 === AY || AY.call(this, rY, !0)) : (this.elements.delete(YY), this.refs.delete(YY))
        }, this.refs.set(YY, rY)), rY
      }
      onAfterRender(YY, rY, DY, FY) {
        for (const AY of this.snapshot) {
          const IY = this.elements.get(AY.key);
          if (!IY) continue;
          if (FY(AY.key)) {
            (0, Gs.g)(IY, !0);
            continue
          }
          const RY = ri(IY, YY, rY, AY.pos, 1.1, 24);
          RY && DY.add(RY, IY, 0, !1)
        }
      }
    }
    const Ui = (0, FY.memo)((function(YY) {
        let {
          item: rY
        } = YY;
        return (0, WI.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, WI.jsx)(SA.c, {
            itemName: rY,
            amount: 0
          })
        })
      })),
      Li = (0, FY.memo)((function(YY) {
        let {
          label: rY,
          bindRef: DY,
          countRef: FY,
          wordsRef: AY
        } = YY;
        return (0, WI.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: DY,
          hidden: !0,
          children: [(0, WI.jsx)(Ui, {
            item: rY.item
          }), rY.count >= 0 && (0, WI.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, WI.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: AY
            }), (0, WI.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: FY
            })]
          })]
        })
      })),
      ti = (0, FY.memo)((function(YY) {
        let {
          store: rY
        } = YY;
        const {
          t: DY
        } = (0, mA.C)(), [AY, IY] = (0, FY.useState)((() => rY.list()));
        return (0, FY.useEffect)((() => (IY(rY.list()), rY.subscribe((() => {
          IY(rY.list())
        })))), [rY]), (0, FY.useEffect)((() => {
          rY.setCountWords((YY => DY("buildAFactory2Game:labelSiloCount", {
            count: uI(YY)
          })))
        }), [rY, DY]), (0, WI.jsx)("div", {
          className: "Baf2IslandLabels",
          children: AY.map((YY => -2 === YY.count ? null : (0, WI.jsx)(Li, {
            label: YY,
            bindRef: rY.bind(YY.key),
            countRef: rY.bindCount(YY.key),
            wordsRef: rY.bindCount(YY.key, "words")
          }, YY.key)))
        })
      })),
      Yy = {
        read: () => !0,
        write: () => {}
      };

    function ry(YY) {
      return `${YY[0]},${YY[1]},${YY[2]}`
    }

    function Dy(YY) {
      let [rY, DY, FY, AY, IY, RY, OY, gY, aY, vY, uY, sY] = YY;
      const iY = void 0 === uY || void 0 === sY ? function(YY) {
        return [Math.floor((YY - 1) / 2), 0]
      }(IY) : [uY, sY];
      return {
        kind: 0 === gY ? "reactor" : "battery",
        box: jD([rY, DY, FY], AY, IY, RY, OY, iY),
        formed: 1 === aY,
        level: vY
      }
    }
    class Fy {
      constructor() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yy;
        this.guideSetting = YY, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = YY.read()
      }
      ZE(YY) {
        var rY;
        const DY = new Map;
        for (const FY of YY.baf2RxPlanList) {
          const YY = Dy(FY);
          DY.set(ry(YY.box.ctrl), YY)
        }
        this.plans = DY, this.layouts = new Map((null !== (rY = YY.baf2RxLayouts) && void 0 !== rY ? rY : []).map((YY => {
          let [rY, DY, FY, AY] = YY;
          return [ry([rY, DY, FY]), AY]
        }))), this.predicted.clear(), YY.baf2RxFormedAt && (this.formed = {
          ctrl: YY.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const FY of [...this.startersOff]) {
          const YY = DY.get(FY);
          YY && !YY.formed || this.startersOff.delete(FY)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((YY => this.planByKey(YY)))
      }
      planAt(YY) {
        return this.planByKey(ry(YY))
      }
      predictSize(YY, rY) {
        this.predicted.set(ry(YY), rY), this.changed()
      }
      unpredict(YY) {
        this.predicted.delete(ry(YY)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(YY) {
        var rY;
        const DY = ry(YY);
        return this.predicted.has(DY) ? null : null !== (rY = this.layouts.get(DY)) && void 0 !== rY ? rY : null
      }
      showsStarter(YY) {
        return !this.startersOff.has(ry(YY))
      }
      setStarter(YY, rY) {
        const DY = ry(YY);
        rY ? this.startersOff.delete(DY) : this.startersOff.add(DY), this.changed()
      }
      guideOn() {
        return this.guide
      }
      setGuide(YY) {
        this.guide = YY, this.guideSetting.write(YY), this.changed()
      }
      getVersion() {
        return this.version
      }
      subscribe(YY) {
        return this.listeners.add(YY), () => {
          this.listeners.delete(YY)
        }
      }
      dispose() {
        this.plans.clear(), this.predicted.clear(), this.startersOff.clear(), this.layouts.clear(), this.listeners.clear(), this.formed = null
      }
      planByKey(YY) {
        const rY = this.plans.get(YY);
        if (!rY) return null;
        const DY = this.predicted.get(YY);
        return DY ? {
          ...rY,
          box: dD(rY.box, rY.kind, DY[0], DY[1], DY[2])
        } : rY
      }
      changed() {
        this.version++;
        for (const YY of this.listeners) YY()
      }
    }
    var Ay = DY(213);
    const Iy = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function Ry(YY, rY, DY, FY) {
      const AY = YY.length / 3;
      for (let IY = 0; IY < Iy.length / 3; IY++) YY.push(Iy[3 * IY] * FY[0] / 2 + DY[0], Iy[3 * IY + 1] * FY[1] / 2 + DY[1], Iy[3 * IY + 2] * FY[2] / 2 + DY[2]);
      for (let IY = AY; IY < AY + 24; IY += 4) rY.push(IY, IY + 1, IY + 2, IY, IY + 2, IY + 3)
    }

    function Oy(YY, rY, DY) {
      const FY = rY[0][0],
        AY = [],
        IY = [];
      for (const [RY, OY] of rY) Ry(AY, IY, [RY[0] - FY[0], RY[1] - FY[1], RY[2] - FY[2]], OY);
      return YY.createGameMesh({
        positions: AY,
        indices: IY
      }, DY, FY)
    }

    function gy(YY, rY) {
      const DY = YY.w - 2,
        FY = YY.d - 2;
      return 1 === function(YY, rY, DY, FY) {
        const [AY, IY, RY] = YY;
        if (Number(AY <= 2) + Number(IY <= 2) + Number(RY <= 2) >= 2) return function(YY, rY, DY) {
          return (YY + rY + DY) % 2 === 0 ? 1 : 3
        }(rY, DY, FY);
        const [OY, gY] = AY >= IY && AY >= RY ? [DY, FY] : IY >= RY ? [rY, FY] : [rY, DY];
        return OY % 2 === 0 && gY % 2 === 0 ? 1 : 3
      }([DY, YY.h - 2, FY], rY % DY, Math.floor(rY / (DY * FY)), Math.floor(rY / DY) % FY) ? "rod" : "channel"
    }

    function ay(YY, rY, DY) {
      if ("reactor" !== YY.kind || YY.formed || !rY) return !1;
      const FY = wD(YY.box);
      for (let AY = 0; AY < FY; AY++) {
        const YY = DY(AY);
        if (null !== YY && lD(YY)) return !1
      }
      return !0
    }

    function vy(YY, rY, DY, FY, AY) {
      var IY;
      let RY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const OY = GD(YY.box, rY),
        gY = UD(YY.kind, OY, DY);
      if ("wrong" === gY || "blocked" === gY) return "wrong";
      if (!AY) return null;
      if ("inside" === OY && "reactor" === YY.kind && "Air" === TD(DY)) {
        if (null !== RY) {
          var aY;
          const DY = Mu[wu(RY, xD(YY.box, rY))];
          return DY && null !== (aY = Wg(DY)) && void 0 !== aY ? aY : null
        }
        if (FY) return gy(YY.box, xD(YY.box, rY))
      }
      if ("missing" !== gY) return null;
      const vY = LD(YY.kind, OY);
      return null === vY ? null : null !== (IY = Wg(vY)) && void 0 !== IY ? IY : null
    }
    const uy = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function sy(YY, rY, DY) {
      const FY = DY => {
        const FY = rY(pD(YY.box, DY));
        return null !== FY && function(YY, rY) {
          return "reactor" !== YY.kind || rY !== XD(YY.box) && "inside" !== GD(YY.box, rY)
        }(YY, DY) && "ok" !== UD(YY.kind, GD(YY.box, DY), FY)
      };
      if (DY) {
        const IY = kD(YY.box, [Math.floor(DY[0]), Math.floor(DY[1]), Math.floor(DY[2])]);
        if (IY >= 0 && (FY(IY) || (AY = IY, "reactor" === YY.kind && "inside" === GD(YY.box, AY) && "Air" === rY(pD(YY.box, AY))))) return IY
      }
      var AY;
      const IY = wD(YY.box);
      for (let RY = 0; RY < IY; RY++)
        if (FY(RY)) return RY;
      return -1
    }

    function iy(YY, rY) {
      return Math.floor(rY / (YY.w * YY.d))
    }

    function yy(YY, rY, DY) {
      return DY >= 0 && iy(YY, rY) > iy(YY, DY)
    }

    function Qy(YY, rY) {
      return rY >= 0 && YY.h >= 3 && iy(YY, rY) === YY.h - 1
    }

    function oy(YY) {
      const rY = TD(YY);
      return rY === uD || "Collider" === rY || "Laser" === rY || rY.startsWith("_Collider ")
    }

    function Wy(YY, rY, DY, FY) {
      if (FY(YY)) return null;
      if (!uy.every((rY => {
          let [FY, AY, IY] = rY;
          const RY = DY([YY[0] + FY, YY[1] + AY, YY[2] + IY]);
          return null !== RY && !zD("reactor", RY) && "reactor" !== eD(RY)
        }))) return null;
      const AY = ZD("reactor").min,
        IY = jD([YY[0], YY[1], YY[2]], function(YY, rY) {
          const DY = rY[0] - (YY[0] + .5),
            FY = rY[2] - (YY[2] + .5);
          return Math.abs(DY) >= Math.abs(FY) ? DY >= 0 ? 2 : 4 : FY >= 0 ? 1 : 3
        }(YY, rY), AY, AY, AY, hD("reactor", AY)),
        RY = XD(IY);
      let OY = !0;
      for (let gY = 0; gY < wD(IY) && OY; gY++) {
        if (gY === RY) continue;
        const YY = pD(IY, gY),
          rY = DY(YY);
        OY = !FY(YY) && (null === rY || !oy(rY))
      }
      return {
        box: IY,
        fits: OY
      }
    }
    const Ey = og,
      my = "baf2Goal",
      Vy = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      Sy = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      ly = .4;

    function Ty(YY, rY) {
      let [DY, FY, AY] = YY;
      const IY = eg([DY - .02, FY - .02, AY - .02], [DY + 1.02, FY + 1.02, AY + 1.02], .07);
      return rY && (IY.push([
        [DY + .5, FY + 1 + .7, AY + .5],
        [.08, 1.4, .08]
      ]), IY.push([
        [DY + .5, FY + 1 + 1.4 + .2, AY + .5],
        [ly, ly, ly]
      ])), IY
    }

    function ey(YY, rY) {
      let [DY, FY, AY] = rY;
      return YY.isBlockInLoadedChunk(DY, FY, AY) ? YY.blockIdToBlockName(YY.getBlockId(DY, FY, AY)) : null
    }
    let Ny = null;
    const By = new Set;
    let cy = null;

    function Ky(YY) {
      Ny = YY;
      for (const rY of By) rY(YY)
    }
    class Hy {
      constructor(YY) {
        var rY;
        this.plans = YY, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (rY = YY => {
          var rY, DY;
          this.setGoal(null !== (rY = null === YY || void 0 === YY ? void 0 : YY.goal) && void 0 !== rY ? rY : null, null !== (DY = null === YY || void 0 === YY ? void 0 : YY.startsBattery) && void 0 !== DY && DY)
        }, cy ??= [NA.g.subscribe("setDirectionArrow", (YY => {
          let {
            id: rY,
            position: DY,
            text: FY
          } = YY;
          rY === my && Ky({
            goal: [Math.floor(DY[0]), Math.floor(DY[1]), Math.floor(DY[2])],
            startsBattery: JSON.stringify(null !== FY && void 0 !== FY ? FY : null).includes("arrowStartBattery")
          })
        })), NA.g.subscribe("clearDirectionArrow", (YY => {
          let {
            id: rY
          } = YY;
          null !== rY && rY !== my || Ky(null)
        }))], By.add(rY), rY(Ny), () => {
          By.delete(rY)
        })
      }
      onAfterRender(YY, rY) {
        const DY = performance.now();
        if (this.cues.length > 0) {
          const rY = .55 + .45 * Math.sin(DY / 1100 * Math.PI * 2);
          for (const DY of this.cues) YY.setGameMesh(DY, {
            visibility: rY
          })
        }
        if (DY - this.lastCheckMs < 150) return;
        this.lastCheckMs = DY;
        const FY = this.plans.all().filter((YY => {
            const [DY, FY, AY] = YY.box.ctrl;
            return (!YY.formed || null !== this.plans.layoutOf(YY.box.ctrl)) && (DY - rY[0]) ** 2 + (FY - rY[1]) ** 2 + (AY - rY[2]) ** 2 <= 2304
          })),
          AY = function(YY, rY) {
            const DY = Ay.d.Jy,
              FY = new Map;
            for (const IY of rY) {
              const rY = pD(IY.box, 0),
                RY = pD(IY.box, wD(IY.box) - 1),
                OY = [Math.min(rY[0], RY[0]), Math.min(rY[1], RY[1]), Math.min(rY[2], RY[2])].map((YY => Math.floor(YY / DY))),
                gY = [Math.max(rY[0], RY[0]), Math.max(rY[1], RY[1]), Math.max(rY[2], RY[2])].map((YY => Math.floor(YY / DY)));
              for (let DY = OY[0]; DY <= gY[0]; DY++)
                for (let rY = OY[1]; rY <= gY[1]; rY++)
                  for (let IY = OY[2]; IY <= gY[2]; IY++) {
                    var AY;
                    FY.set(`${DY},${rY},${IY}`, null !== (AY = YY.getChunkVersion(DY, rY, IY)) && void 0 !== AY ? AY : -1)
                  }
            }
            return FY
          }(YY, FY);
        this.plans.getVersion() === this.storeVersion && (function(YY, rY) {
          if (YY.size !== rY.size) return !1;
          for (const [DY, FY] of YY)
            if (rY.get(DY) !== FY) return !1;
          return !0
        }(AY, this.chunkVersions) || DY - this.lastRescanMs < 600) || (this.lastRescanMs = DY, this.storeVersion = this.plans.getVersion(), this.chunkVersions = AY, this.redraw(YY, FY))
      }
      dispose(YY) {
        this.unwatch(), Ny = null, this.clearMeshes(YY), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(YY, rY) {
        var DY;
        (null === YY || void 0 === YY ? void 0 : YY.join()) === (null === (DY = this.goal) || void 0 === DY ? void 0 : DY.join()) && rY === this.startsBattery || (this.goal = YY, this.startsBattery = rY, this.storeVersion = -1)
      }
      redraw(YY, rY) {
        const DY = rY => ey(YY, rY),
          FY = new Map,
          AY = [],
          IY = this.plans.guideOn();
        for (const aY of rY) {
          const YY = IY && ay(aY, this.plans.showsStarter(aY.box.ctrl), (YY => DY(pD(aY.box, YY)))),
            rY = "reactor" === aY.kind ? this.plans.layoutOf(aY.box.ctrl) : null,
            RY = IY && !aY.formed ? sy(aY, DY, this.goal) : -1;
          RY >= 0 && AY.push([pD(aY.box, RY), Qy(aY.box, RY)]);
          const OY = wD(aY.box);
          for (let AY = 0; AY < OY; AY++) {
            const OY = pD(aY.box, AY),
              gY = DY(OY),
              vY = null === gY ? null : vy(aY, AY, gY, YY, IY, rY);
            if (null !== vY) {
              const YY = "wrong" !== vY && yy(aY.box, AY, RY),
                rY = YY ? `${vY}Dim` : vY;
              let DY = FY.get(rY);
              DY || (DY = {
                draw: {
                  ghost: vY,
                  dim: YY
                },
                list: []
              }, FY.set(rY, DY)), DY.list.push(OY)
            }
          }
        }
        if (IY && this.startsBattery && this.goal) {
          const [YY, rY, AY] = this.goal, IY = [];
          for (const [FY, RY, OY] of Vy) {
            const gY = [YY + FY, rY + RY, AY + OY];
            "Air" === DY(gY) && IY.push(gY)
          }
          if (IY.length > 0) {
            var RY;
            const YY = null !== (RY = FY.get("cell")) && void 0 !== RY ? RY : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            YY.list.push(...IY), FY.set("cell", YY)
          }
        }
        const OY = [...FY.keys()].sort(),
          gY = [...OY.map((YY => `${YY}:${FY.get(YY).list.join(";")}`)), `cue:${AY.join(";")}`].join("|");
        if (gY !== this.shownKey) {
          this.shownKey = gY, this.clearMeshes(YY);
          for (const rY of OY) {
            const {
              draw: DY,
              list: AY
            } = FY.get(rY);
            this.meshes.push(this.build(YY, DY, AY))
          }
          for (const [rY, DY] of AY) this.cues.push(Oy(YY, Ty(rY, DY), Sy))
        }
      }
      build(YY, rY, DY) {
        let {
          ghost: FY,
          dim: AY
        } = rY;
        const {
          size: IY,
          colour: RY,
          alpha: OY
        } = Ey[FY], gY = DY[0], aY = [], vY = [];
        for (const [uY, sY, iY] of DY) Ry(aY, vY, [uY - gY[0] + .5, sY - gY[1] + .5, iY - gY[2] + .5], [IY, IY, IY]);
        return YY.createGameMesh({
          positions: aY,
          indices: vY
        }, {
          rgb: RY,
          alpha: OY * (AY ? .3 : 1)
        }, gY)
      }
      clearMeshes(YY) {
        for (const rY of [...this.meshes, ...this.cues]) YY.disposeGameMesh(rY);
        this.meshes = [], this.cues = []
      }
    }
    const zy = [.56, .83, 1],
      Zy = [1, .3, .25];
    class Cy {
      constructor(YY) {
        this.plans = YY, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(YY, rY, DY) {
        var FY;
        const AY = performance.now();
        if (AY - this.lastCheckMs < 150) return;
        this.lastCheckMs = AY;
        const IY = rY => ey(YY, rY),
          RY = null === (FY = YY.rrY(rY)) || void 0 === FY ? void 0 : FY.name,
          OY = RY && "Reactor Frame" === TD(RY) ? YY.getTargetedBlock() : null,
          gY = OY ? [OY.bu[0], OY.bu[1], OY.bu[2]] : null,
          aY = null !== gY && "Air" === IY(gY) && gY.every(((YY, rY) => Math.abs(YY + .5 - DY[rY]) <= 8)) ? Wy(gY, DY, IY, (YY => this.inPlan(YY))) : null,
          vY = aY ? `${aY.box.ctrl.join()}|${aY.box.rot}|${aY.fits}` : "";
        vY !== this.shownKey && this.show(YY, vY, aY)
      }
      dispose(YY) {
        this.clear(YY), this.shownKey = ""
      }
      inPlan(YY) {
        return this.plans.all().some((rY => kD(rY.box, YY) >= 0))
      }
      show(YY, rY, DY) {
        if (this.clear(YY), this.shownKey = rY, !DY) return;
        const {
          box: FY,
          fits: AY
        } = DY, IY = AY ? zy : Zy, {
          lo: RY,
          hi: OY
        } = Tg(FY);
        this.meshes.push(Oy(YY, eg(RY, OY, .05), {
          rgb: IY,
          alpha: 1
        }));
        const gY = [],
          aY = pD(FY, 0)[1];
        for (let vY = 0; vY < FY.w * FY.d; vY++) {
          const [YY, , rY] = pD(FY, vY);
          gY.push([
            [YY + .5, aY + .02 + .01, rY + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(Oy(YY, gY, {
          rgb: IY,
          alpha: .25
        }))
      }
      clear(YY) {
        for (const rY of this.meshes) YY.disposeGameMesh(rY);
        this.meshes = []
      }
    }
    const fy = "buildAFactory2Game:";

    function jy(YY, rY, DY) {
      const FY = YY => {
          const [DY, FY, AY] = YY.box.ctrl;
          return DY === rY[0] && FY === rY[1] && AY === rY[2]
        },
        AY = YY.find((YY => FY(YY) || kD(YY.box, rY) >= 0));
      if (!AY) return null;
      const IY = function(YY, rY, DY) {
        const {
          w: FY,
          h: AY,
          d: IY
        } = YY.box, RY = "reactor" === YY.kind ? `${fy}rxTitle` : `${fy}batTitle`;
        if (YY.formed) return {
          key: `${fy}lookPlanFormed`,
          kindKey: RY,
          w: FY,
          h: AY,
          d: IY,
          count: 0
        };
        let OY = 0,
          gY = 0;
        for (let vY = 0; vY < wD(YY.box); vY++) {
          const rY = DY(pD(YY.box, vY)),
            FY = null === rY ? "ok" : UD(YY.kind, GD(YY.box, vY), rY);
          OY += "missing" === FY ? 1 : 0, gY += "wrong" === FY || "blocked" === FY ? 1 : 0
        }
        const aY = function(YY, rY, DY) {
          if (rY < 0 || null === DY) return;
          const FY = GD(YY.box, rY),
            AY = UD(YY.kind, FY, DY);
          return "blocked" === AY ? `${fy}lookWhy_blocked` : "wrong" === AY ? "ctrl" === FY ? `${fy}lookWhy_ctrl` : `${fy}lookWhy_reactor_${FY}` : void 0
        }(YY, kD(YY.box, rY), DY([rY[0], rY[1], rY[2]]));
        if (OY > 0) return {
          key: `${fy}lookPlanToBuild`,
          kindKey: RY,
          w: FY,
          h: AY,
          d: IY,
          count: OY,
          why: aY
        };
        if (gY > 0) return {
          key: `${fy}lookPlanTakeOut`,
          kindKey: RY,
          w: FY,
          h: AY,
          d: IY,
          count: gY,
          why: aY
        };
        return {
          key: "reactor" === YY.kind ? `${fy}lookPlanNoRods` : `${fy}lookPlanDone`,
          kindKey: RY,
          w: FY,
          h: AY,
          d: IY,
          count: 0
        }
      }(AY, rY, DY);
      return "reactor" === AY.kind && FY(AY) ? {
        ...IY,
        ctrl: !0
      } : IY
    }

    function hy(YY, rY) {
      return YY === rY || null !== YY && null !== rY && YY.key === rY.key && YY.kindKey === rY.kindKey && YY.w === rY.w && YY.h === rY.h && YY.d === rY.d && YY.count === rY.count && YY.why === rY.why && YY.ctrl === rY.ctrl
    }

    function dy() {
      return performance.now()
    }
    class Jy {
      constructor(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : dy;
        this.ticket = YY, this.sent = rY, this.backstopMs = DY, this.now = FY, this.queuedAt = void 0, this.queuedAt = FY()
      }
      answered() {
        const YY = this.now(),
          rY = this.sent.leftAt(this.ticket);
        return null !== rY && YY - rY > 4e3 || YY - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class My {
      constructor() {
        this.echoes = []
      }
      add(YY) {
        this.echoes = this.echoes.filter((YY => !YY.answered())), this.echoes.push(YY)
      }
      answered() {
        var YY, rY;
        return null === (YY = null === (rY = this.echoes.at(-1)) || void 0 === rY ? void 0 : rY.answered()) || void 0 === YY || YY
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((YY => YY.answered()))
      }
      age() {
        var YY, rY;
        return null !== (YY = null === (rY = this.echoes.at(-1)) || void 0 === rY ? void 0 : rY.age()) && void 0 !== YY ? YY : null
      }
      clear() {
        this.echoes = []
      }
    }
    class wy {
      constructor(YY) {
        this.send = YY, this.value = null, this.sent = null, this.echoes = new My, this.down = !1, this.timer = null
      }
      shown(YY) {
        return null === this.value ? YY : this.down || this.value !== this.sent ? this.value : YY === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), YY) : this.value
      }
      pendingFor(YY) {
        return null !== this.value && this.value === this.sent && YY !== this.value ? this.echoes.age() : null
      }
      assume(YY, rY) {
        this.disarm(), this.down = !1, this.value = YY, this.sent = YY, this.echoes.clear(), this.echoes.add(rY)
      }
      press() {
        this.down = !0
      }
      drag(YY) {
        this.value = YY, this.arm(this.down ? 1e3 : 400)
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
      arm(YY) {
        this.disarm(), this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), YY)
      }
      disarm() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
    class by {
      constructor() {
        this.pending = new Map
      }
      set(YY, rY, DY) {
        var FY;
        const AY = null !== (FY = this.pending.get(YY)) && void 0 !== FY ? FY : {
          on: rY,
          echoes: new My
        };
        AY.on = rY, AY.echoes.add(DY), this.pending.set(YY, AY)
      }
      shown(YY) {
        let rY = YY;
        for (const [DY, {
            on: FY,
            echoes: AY
          }] of this.pending) 0 !== (YY & DY) === FY && AY.agreeCounts() || AY.answered() ? this.pending.delete(DY) : rY = FY ? rY | DY : rY & ~DY;
        return rY
      }
      pendingMask() {
        let YY = 0;
        for (const rY of this.pending.keys()) YY |= rY;
        return YY
      }
      pendingFor(YY) {
        let rY = null;
        for (const [FY, {
            on: AY,
            echoes: IY
          }] of this.pending) {
          if (void 0 !== YY && 0 !== (YY & FY) === AY) continue;
          const RY = IY.age();
          var DY;
          if (null !== RY) rY = Math.max(null !== (DY = rY) && void 0 !== DY ? DY : 0, RY)
        }
        return rY
      }
      clear() {
        this.pending.clear()
      }
    }
    class Xy {
      constructor() {
        this.dims = null, this.echoes = new My, this.unmet = null
      }
      shown(YY) {
        var rY;
        return this.dims && (qy(this.dims, YY) && this.echoes.agreeCounts() || this.echoes.answered()) && (qy(this.dims, YY) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (rY = this.dims) && void 0 !== rY ? rY : YY
      }
      takeUnmet() {
        const YY = this.unmet;
        return this.unmet = null, YY
      }
      set(YY, rY) {
        this.dims = YY, this.echoes.add(rY)
      }
      pendingFor(YY) {
        return null === this.dims || YY && qy(this.dims, YY) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function qy(YY, rY) {
      return YY[0] === rY[0] && YY[1] === rY[1] && YY[2] === rY[2]
    }
    class py {
      constructor() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dy;
        this.now = YY, this.taps = new Map
      }
      tap(YY, rY, DY) {
        return !this.busy(YY) && (this.taps.set(YY, {
          at: this.now(),
          done: rY
        }), DY(), !0)
      }
      settle(YY) {
        for (const [rY, DY] of [...this.taps]) DY.done(YY) && this.taps.delete(rY)
      }
      busy(YY) {
        const rY = this.taps.get(YY);
        return !!rY && (!(this.now() - rY.at >= 3e3) || (this.taps.delete(YY), !1))
      }
      busyIds() {
        const YY = new Set;
        for (const rY of [...this.taps.keys()]) this.busy(rY) && YY.add(rY);
        return YY
      }
      clear() {
        this.taps.clear()
      }
    }

    function ky(YY) {
      return {
        send: rY => YY.track(rY),
        sendUrgent: (rY, DY) => YY.track(rY, {
          urgent: !0,
          supersedes: DY
        }),
        leftAt: rY => YY.leftAt(rY),
        holdReserve: () => YY.holdUrgentReserve(),
        answerMs: NR
      }
    }

    function Gy() {
      return performance.now()
    }

    function xy(YY) {
      const rY = YY.baf2RxNeed.map((YY => {
        let [rY, DY] = YY;
        return [rY, DY]
      }));
      return JSON.stringify([YY.baf2RxFormed, rY, YY.baf2RxBad, YY.baf2RxCells])
    }

    function ny(YY, rY) {
      const DY = 0 !== (rY & Ir),
        FY = 0 !== (YY.baf2RxFlags & Ir);
      return !DY || FY || "running" !== YY.baf2RxState && "idle" !== YY.baf2RxState ? !DY && FY && "scram" === YY.baf2RxState && YY.baf2RxFuel > 0 ? "idle" : YY.baf2RxState : "scram"
    }

    function Py(YY) {
      return JSON.stringify([YY.baf2BatFormed, YY.baf2BatNeed, YY.baf2BatBad])
    }

    function Uy(YY) {
      return YY.join(",")
    }
    class Ly {
      constructor() {
        this.listeners = new Set
      }
      subscribe(YY) {
        return this.listeners.add(YY), () => {
          this.listeners.delete(YY)
        }
      }
      notify() {
        for (const YY of this.listeners) YY()
      }
      clear() {
        this.listeners.clear()
      }
    }
    class ty {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(YY, rY) {
        this.lastAt = YY, this.lastUntil = YY + rY
      }
      answered(YY) {
        return this.lastAt >= YY || YY < this.lastUntil
      }
    }
    class YQ {
      constructor(YY, rY) {
        this.link = YY, this.now = rY, this.hold = new Xy, this.picked = null, this.notTaken = null
      }
      shown(YY) {
        const rY = this.hold.shown(YY);
        if (this.hold.takeUnmet() && this.picked) {
          var DY;
          const {
            plans: rY,
            ctrl: FY,
            at: AY
          } = this.picked;
          this.picked = null, rY.unpredict(FY), null === (DY = this.notTaken) || void 0 === DY || DY.call(this, YY, AY)
        }
        return rY
      }
      pendingFor(YY) {
        return this.hold.pendingFor(YY)
      }
      Ps(YY, rY, DY) {
        YY.predictSize(rY, DY), this.picked = {
          plans: YY,
          ctrl: rY,
          at: this.now()
        };
        const FY = this.link.send(Ar(rY, "plan", ...DY));
        this.hold.set(DY, new Jy(FY, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class rQ {
      constructor(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Gy;
        this.plans = YY, this.readInterior = rY, this.link = DY, this.now = FY, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new by, this.throttle = void 0, this.oneShots = void 0, this.listeners = new Ly, this.redraw = null, this.releaseReserve = null, this.size = new YQ(DY, FY), this.oneShots = new py(FY), this.throttle = new wy((YY => this.echo(this.link.send(this.command("throttle", YY)))))
      }
      set(YY) {
        !YY.baf2RxOpen && this.raw && Uy(this.raw.baf2RxAt) === Uy(YY.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(YY), this.vo(YY)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(YY) {
        this.size.notTaken = YY
      }
      resize(YY) {
        this.raw && (this.size.Ps(this.plans, this.raw.baf2RxAt, YY), this.vo(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const YY = this.raw.baf2RxAt;
        this.plans.setStarter(YY, !this.plans.showsStarter(YY)), this.vo(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.vo(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.vo(this.raw)
      }
      send(YY) {
        if (this.raw) {
          for (var rY = arguments.length, DY = new Array(rY > 1 ? rY - 1 : 0), FY = 1; FY < rY; FY++) DY[FY - 1] = arguments[FY];
          this.link.send(this.command(YY, ...DY))
        }
      }
      tap(YY, rY) {
        this.raw && this.oneShots.tap(YY, function(YY, rY) {
          if ("start" === YY) return YY => 0 === (YY.baf2RxFlags & Ir);
          if ("odConfirm" === YY) return YY => 0 !== (YY.baf2RxFlags & Rr);
          const DY = xy(rY);
          return YY => xy(YY) !== DY
        }(YY, this.raw), rY) && ("start" === YY && (this.startedAt = this.now()), this.vo(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(Ir, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(YY, rY) {
        if (!this.raw) return;
        const DY = YY === Ir ? this.command(rY ? "scram" : "start") : this.command("od", rY ? 1 : 0),
          FY = rY && YY === Ir,
          AY = `${Fr} ${this.raw.baf2RxAt.join(" ")} `,
          IY = this.echo(FY ? this.link.sendUrgent(DY, (YY => {
            const rY = YY.startsWith(AY) ? YY.slice(AY.length).split(" ")[0] : null;
            return "throttle" === rY || "start" === rY
          })) : this.link.send(DY));
        this.flags.set(YY, rY, IY), FY && this.throttle.assume(0, IY), this.vo(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(YY) {
        this.throttle.drag(YY), this.raw && this.vo(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.vo(this.raw)
      }
      subscribe(YY) {
        return this.listeners.subscribe(YY)
      }
      opened() {
        this.releaseReserve ??= this.link.holdReserve()
      }
      closed() {
        var YY;
        this.throttle.release(), null === (YY = this.releaseReserve) || void 0 === YY || YY.call(this), this.releaseReserve = null
      }
      dispose() {
        this.closed(), this.throttle.clear(), this.flags.clear(), this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.raw = null, this.looksOf = null, this.listeners.clear()
      }
      command(YY) {
        for (var rY = arguments.length, DY = new Array(rY > 1 ? rY - 1 : 0), FY = 1; FY < rY; FY++) DY[FY - 1] = arguments[FY];
        return Ar(this.raw.baf2RxAt, YY, ...DY)
      }
      echo(YY) {
        return new Jy(YY, this.link, this.link.answerMs, this.now)
      }
      vo(YY) {
        var rY;
        this.raw = YY;
        const DY = this.flags.shown(YY.baf2RxFlags),
          FY = {
            ...YY,
            baf2RxFlags: DY,
            baf2RxTarget: this.throttle.shown(YY.baf2RxTarget),
            baf2RxState: ny(YY, DY)
          },
          AY = this.size.shown(FY.baf2RxDims),
          IY = this.throttle.pendingFor(),
          RY = [this.throttle.pendingFor(YY.baf2RxTarget), this.flags.pendingFor(YY.baf2RxFlags), this.size.pendingFor(YY.baf2RxDims)].filter((YY => null !== YY)),
          OY = RY.length > 0 ? Math.max(...RY) : null,
          gY = this.oneShots.busyIds(),
          aY = FY.baf2RxAt;
        let vY, uY, sY = null,
          iY = [Math.max(0, AY[0] - 2), Math.max(0, AY[1] - 2), Math.max(0, AY[2] - 2)];
        if (FY.baf2RxFormed) {
          const [YY, rY, DY] = FY.baf2RxDims;
          iY = [Math.max(0, YY - 2), Math.max(0, rY - 2), Math.max(0, DY - 2)], vY = Array.from(FY.baf2RxCells, Number), uY = `${iY.join(",")}:${FY.baf2RxCells}`
        } else {
          var yY;
          const YY = null === (yY = this.plans.planAt(aY)) || void 0 === yY ? void 0 : yY.box,
            rY = YY ? dD(YY, "reactor", ...AY) : jD(aY, 1, ...AY, hD("reactor", AY[0])),
            DY = this.readInterior(rY);
          sY = kO(iY, DY), vY = DY, uY = `${iY.join(",")}:${DY.join("")}`
        }(null === (rY = this.looksOf) || void 0 === rY ? void 0 : rY.key) !== uY && (this.looksOf = {
          key: uY,
          looks: LO(iY, vY)
        }), this.view = {
          status: FY,
          dims: AY,
          plan: sY,
          inner: iY,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(aY),
          odConfirmed: this.odConfirmed || 0 !== (FY.baf2RxFlags & sr),
          guide: this.plans.guideOn(),
          throttlePending: null !== IY,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== OY && OY >= 5e3,
          busy: gY,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== OY || gY.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.vo(this.raw)
        }), 250))
      }
    }
    class DQ {
      constructor(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Gy;
        this.plans = YY, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new Ly, this.redraw = null, this.size = new YQ(rY, DY), this.oneShots = new py(DY)
      }
      set(YY) {
        !YY.baf2BatOpen && this.view && Uy(this.view.status.baf2BatAt) === Uy(YY.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(YY), this.vo(YY)
      }
      tap(YY, rY) {
        if (!this.view) return;
        const DY = Py(this.view.status);
        this.oneShots.tap(YY, (YY => Py(YY) !== DY), rY) && this.vo(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(YY) {
        this.size.notTaken = YY
      }
      resize(YY) {
        this.view && (this.size.Ps(this.plans, this.view.status.baf2BatAt, YY), this.vo(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.vo(this.view.status)
      }
      subscribe(YY) {
        return this.listeners.subscribe(YY)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      vo(YY) {
        const rY = this.size.shown(YY.baf2BatDims),
          DY = this.oneShots.busyIds();
        this.view = {
          status: YY,
          dims: rY,
          gu: sg(rY, YY.baf2BatDims) ? YY.baf2BatCapacity : rg(...rY),
          guide: this.plans.guideOn(),
          busy: DY
        }, this.listeners.notify(), DY.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.vo(this.view.status)
        }), 250))
      }
    }
    const FQ = "buildAFactory2Game:";

    function AQ() {
      var YY;
      const rY = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!rY) return null;
      const DY = rY.querySelector(".ExitButton");
      return function(YY, rY) {
        const DY = rY ? rY.left - 8 : YY.right;
        return {
          left: YY.left,
          top: YY.top,
          width: Math.max(0, DY - YY.left),
          height: YY.height
        }
      }(rY.getBoundingClientRect(), null !== (YY = null === DY || void 0 === DY ? void 0 : DY.getBoundingClientRect()) && void 0 !== YY ? YY : null)
    }
    const IQ = (0, FY.memo)((function(YY) {
      let {
        store: rY
      } = YY;
      const {
        t: DY
      } = (0, mA.C)(), [AY, IY] = (0, FY.useState)((() => rY.get())), [RY, OY] = (0, FY.useState)((() => performance.now()));
      (0, FY.useEffect)((() => (IY(rY.get()), rY.subscribe((() => {
        IY(rY.get()), OY(performance.now())
      })))), [rY]);
      const {
        alarm: gY,
        boomAt: aY
      } = AY, vY = null !== gY && null !== gY.secs, [uY, sY] = (0, FY.useState)(null);
      (0, FY.useEffect)((() => {
        if (!vY) return;
        sY(AQ());
        const YY = setInterval((() => {
          OY(performance.now()), sY(AQ())
        }), 250);
        return () => {
          clearInterval(YY)
        }
      }), [vY]);
      const [iY, yY] = (0, FY.useState)(!1);
      return (0, FY.useEffect)((() => {
        if (aY === -1 / 0) return;
        yY(!0);
        const YY = setTimeout((() => {
          yY(!1)
        }), 1300);
        return () => {
          clearTimeout(YY)
        }
      }), [aY]), (0, WI.jsxs)(WI.Fragment, {
        children: [null !== gY && (0, WI.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: DY(gY.hot ? `${FQ}rxAlarmSiren` : `${FQ}rxAlarmDamaged`, {
            amount: String(gY.damage)
          })
        }), null !== gY && null !== gY.secs && (0, WI.jsx)("div", {
          className: uY ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== uY && void 0 !== uY ? uY : void 0,
          "aria-live": "assertive",
          children: DY(`${FQ}rxAlarmCountdown`, {
            amount: String((QY = gY.secs, oY = RY - gY.receivedAt, Math.max(1, Math.ceil(QY - oY / 1e3))))
          })
        }), iY && (0, WI.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var QY, oY
    }));
    class RQ {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      ZE(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const DY = YY.baf2RxAlarmAt.join(",");
        let FY = this.snapshot.boomAt;
        if (YY.baf2RxAlarmBoom) this.byReactor.delete(DY), FY = rY;
        else if (YY.baf2RxAlarmDamage <= 0) this.byReactor.delete(DY);
        else {
          var AY;
          this.byReactor.set(DY, {
            damage: YY.baf2RxAlarmDamage,
            secs: null !== (AY = YY.baf2RxAlarmSecs) && void 0 !== AY ? AY : null,
            hot: !0 === YY.baf2RxAlarmHot,
            receivedAt: rY
          })
        }
        this.vo(FY)
      }
      retain(YY) {
        let rY = !1;
        for (const DY of [...this.byReactor.keys()]) YY.has(DY) || (this.byReactor.delete(DY), rY = !0);
        rY && this.vo(this.snapshot.boomAt)
      }
      has(YY) {
        return this.byReactor.has(YY)
      }
      get() {
        return this.snapshot
      }
      subscribe(YY) {
        return this.listeners.add(YY), () => {
          this.listeners.delete(YY)
        }
      }
      dispose() {
        this.listeners.clear(), this.byReactor.clear()
      }
      vo(YY) {
        let rY = null;
        for (const DY of this.byReactor.values())(!rY || DY.damage > rY.damage) && (rY = DY);
        this.snapshot = {
          alarm: rY,
          boomAt: YY
        };
        for (const DY of this.listeners) DY()
      }
    }
    const OQ = {
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

    function gQ(YY) {
      return [YY[0], YY[1], YY[2]]
    }

    function aQ(YY) {
      return `${YY[0]},${YY[1]},${YY[2]}`
    }
    class vQ {
      constructor(YY) {
        if (this.plans = YY, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var YY;
            return {
              active: this.glows.flatMap((YY => {
                let {
                  record: rY
                } = YY;
                return rY ? [rY] : []
              })),
              log: [...null !== (YY = this.devLog) && void 0 !== YY ? YY : []]
            }
          }, this.devLog && "undefined" !== typeof window) {
          window.baf2Glows = this.devAccessor
        }
      }
      glowLog() {
        var YY;
        return null !== (YY = this.devLog) && void 0 !== YY ? YY : []
      }
      check(YY, rY, DY) {
        const FY = new Set(rY.map((YY => aQ(YY.box.ctrl))));
        for (const RY of function(YY, rY) {
            const DY = [],
              FY = new Map(YY);
            YY.clear();
            for (const AY of rY) {
              const rY = ry(AY.box.ctrl),
                IY = AY.formed ? AY.level : 0;
              YY.set(rY, IY), IY > 0 && 0 === FY.get(rY) && DY.push(AY)
            }
            return DY
          }(this.levels, this.plans.all())) FY.has(aQ(RY.box.ctrl)) && this.show(YY, RY, "on", DY);
        const AY = this.plans.lastFormed();
        if (null === AY || AY.receivedAt <= this.flashedAt) return null;
        this.flashedAt = AY.receivedAt;
        const IY = function(YY, rY) {
          var DY;
          const FY = ry(YY);
          return null !== (DY = rY.find((YY => ry(YY.box.ctrl) === FY))) && void 0 !== DY ? DY : null
        }(AY.ctrl, rY);
        return IY && this.show(YY, IY, "formed", DY), IY
      }
      fade(YY, rY) {
        0 !== this.glows.length && (this.glows = this.glows.filter((DY => {
          let {
            mesh: FY,
            glow: AY,
            startMs: IY,
            record: RY
          } = DY;
          const OY = (rY - IY) / OQ[AY].ms;
          return OY >= 1 ? (YY.disposeGameMesh(FY), RY && (RY.endMs = rY), !1) : (YY.setGameMesh(FY, {
            visibility: "formed" === AY ? 1 - OY : Math.sin(Math.PI * OY)
          }), !0)
        })))
      }
      dispose(YY) {
        for (const {
            mesh: DY
          }
          of this.glows) YY.disposeGameMesh(DY);
        this.glows = [], this.levels.clear();
        const rY = "undefined" !== typeof window ? window : null;
        (null === rY || void 0 === rY ? void 0 : rY.baf2Glows) === this.devAccessor && delete rY.baf2Glows
      }
      show(YY, rY, DY, FY) {
        const {
          lo: AY,
          hi: IY
        } = Tg(rY.box);
        let RY = null;
        this.devLog && (RY = {
          glow: DY,
          ctrl: gQ(rY.box.ctrl),
          lo: gQ(AY),
          hi: gQ(IY),
          startMs: FY,
          endMs: null
        }, this.devLog.push(RY), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(YY, DY, eg(AY, IY, OQ[DY].thick)),
          glow: DY,
          startMs: FY,
          record: RY
        })
      }
      build(YY, rY, DY) {
        const FY = Oy(YY, DY, {
          rgb: OQ[rY].colour,
          alpha: 1
        });
        return YY.setGameMesh(FY, {
          visibility: 0
        }), FY
      }
    }
    const uQ = 1 / .6,
      sQ = {
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
        blendMode: BO.g.Standard,
        soft: !0
      },
      iQ = {
        ...sQ,
        size: [.25, .4],
        count: 2
      };

    function yQ(YY) {
      return {
        colours: [YY, YY],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: BO.g.Add,
        soft: !1
      }
    }
    const QQ = yQ([150, 225, 255]),
      oQ = yQ([185, 145, 255]),
      WQ = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function EQ(YY) {
      const rY = Br[YY];
      return null === rY.fuelSlot || Ur(rY) ? WQ.includes(YY) ? oQ : QQ : sQ
    }
    const mQ = {
        kind: "smokePuff"
      },
      VQ = [.2, .025, .2];

    function SQ(YY, rY) {
      const [
        [DY, FY, AY],
        [IY, RY, OY]
      ] = YY.colours;
      return {
        texture: YY.soft ? mQ : "square_particle",
        gu: rY,
        minLifeTime: YY.life[0] / uQ,
        maxLifeTime: YY.life[1] / uQ,
        minEmitPower: YY.power[0] * uQ,
        maxEmitPower: YY.power[1] * uQ,
        minSize: YY.size[0],
        maxSize: YY.size[1],
        emitRate: 0,
        gravity: [0, YY.lift * uQ * uQ, 0],
        dir1: [-YY.spread, 1, -YY.spread],
        dir2: [YY.spread, 1, YY.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [DY, FY, AY, YY.alpha],
          maxColor: [IY, RY, OY, YY.alpha]
        }, {
          timeFraction: 1,
          minColor: [DY, FY, AY, 0],
          maxColor: [IY, RY, OY, 0]
        }],
        blendMode: YY.blendMode
      }
    }
    class lQ {
      constructor(YY) {
        this.fixed = YY, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(YY, rY, DY) {
        var FY;
        if (DY === this.lastFrame) return !1;
        this.lastFrame = DY;
        const AY = this.at;
        AY[0] = rY[0] + .5, AY[1] = rY[1] + 1.025, AY[2] = rY[2] + .5;
        const IY = null !== (FY = this.fixed) && void 0 !== FY ? FY : OY() ? iQ : sQ;
        let RY = this.particles.get(IY);
        return RY || (RY = YY.createParticles(function(YY) {
          return SQ(YY, Math.ceil(12 * YY.count * YY.life[1]) + YY.count)
        }(IY), {
          pos: AY,
          half: VQ
        }), this.particles.set(IY, RY)), RY.moveTo(AY), RY.emit(IY.count), !0
      }
      dispose() {
        for (const YY of this.particles.values()) YY.stop();
        this.particles.clear()
      }
    }
    class TQ {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(YY) {
        this.indexed = !0;
        for (const rY of Vr) {
          const DY = EQ(rY);
          for (let FY = 1; FY <= 4; FY++) {
            const AY = YY.blockNameToBlockId(`${rY}|meta|rot${FY}|Running`, !0);
            if (null === AY) continue;
            let IY = this.pufferIndexByStyle.get(DY);
            void 0 === IY && (IY = this.pufferList.push(new lQ(DY === sQ ? null : DY)) - 1, this.pufferIndexByStyle.set(DY, IY)), this.pufferIndexById[AY] = IY + 1
          }
        }
      }
      onAfterRender(YY, rY) {
        this.indexed || this.index(YY);
        const DY = performance.now(),
          FY = 0 === this.lastMs ? 0 : Math.min(DY - this.lastMs, 250) / 1e3;
        this.lastMs = DY, this.frame++, YY.particlesEnabled() ? (this.scan(YY, rY), this.puff(YY, FY)) : this.sources = []
      }
      dispose() {
        for (const YY of this.pufferList) YY.dispose();
        this.sources = [], this.found = []
      }
      scan(YY, rY) {
        0 === this.scanRow && (this.origin = [Math.floor(rY[0]) - 12, Math.floor(rY[1]) - 6, Math.floor(rY[2]) - 12]);
        const DY = Math.min(this.scanRow + 16, 325),
          [FY, AY, IY] = this.origin,
          RY = this.hits;
        RY.length = 0;
        for (let OY = this.scanRow; OY < DY; OY++) {
          const rY = FY + OY % 25,
            DY = AY + Math.floor(OY / 25);
          YY.scanBlocks(rY, DY, IY, rY + 1, DY + 1, IY + 25, this.pufferIndexById, RY)
        }
        for (let OY = 0; OY < RY.length; OY += 4) {
          const YY = RY[OY + 3];
          this.found.push({
            pos: [RY[OY], RY[OY + 1], RY[OY + 2]],
            rv: YY,
            puffer: this.pufferList[this.pufferIndexById[YY] - 1]
          })
        }
        this.scanRow = DY, 325 === DY && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(YY, rY) {
        const DY = this.sources.length;
        if (0 !== DY) {
          this.budget = Math.min(this.budget + Math.min(DY / 1.2, 12) * rY, 2);
          for (let rY = 0; rY < DY && this.budget >= 1; rY++) {
            const rY = this.sources[this.cursor % DY];
            this.cursor = (this.cursor + 1) % DY, YY.getBlockId(rY.pos[0], rY.pos[1], rY.pos[2]) === rY.rv && (rY.puffer.puff(YY, rY.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const eQ = {
        ...yQ([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      NQ = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function BQ(YY) {
      return 0 === YY.spots.length ? 0 : Math.min(1 * YY.level, 4)
    }

    function cQ(YY) {
      return 0 === YY.glass.length ? 0 : Math.min(.75 * YY.level, 3)
    }

    function KQ(YY) {
      return `${YY.ctrl.join(",")}:${YY.rot}:${YY.cu},${YY.cv}:${YY.w},${YY.h},${YY.d}`
    }

    function HQ(YY, rY) {
      const DY = rY.w - 2,
        FY = rY.h - 2,
        AY = rY.d - 2,
        IY = [];
      for (let RY = 0; RY < DY * FY * AY; RY++) {
        const OY = RY % DY,
          gY = Math.floor(RY / DY) % AY,
          aY = Math.floor(RY / (DY * AY));
        if (OY > 0 && OY < DY - 1 && gY > 0 && gY < AY - 1 && aY > 0 && aY < FY - 1) continue;
        const vY = pD(rY, nD(rY, RY)),
          uY = ey(YY, vY);
        if (null !== uY && "Fuel Rod" === TD(uY))
          for (const rY of NQ) {
            const DY = [vY[0] + rY[0], vY[1] + rY[1], vY[2] + rY[2]];
            ZQ(YY, DY) && IY.push(CQ(DY, rY))
          }
      }
      return IY
    }

    function zQ(YY, rY) {
      const {
        lo: DY,
        hi: FY
      } = Tg(rY), AY = [];
      for (let IY = DY[0]; IY < FY[0]; IY++)
        for (let rY = DY[1]; rY < FY[1]; rY++) {
          const RY = IY === DY[0] || IY === FY[0] - 1 || rY === DY[1] || rY === FY[1] - 1 ? 1 : Math.max(1, FY[2] - 1 - DY[2]);
          for (let OY = DY[2]; OY < FY[2]; OY += RY) {
            const RY = [IY, rY, OY];
            if (!ZQ(YY, RY)) continue;
            const gY = IY === DY[0] ? NQ[1] : IY === FY[0] - 1 ? NQ[0] : OY === DY[2] ? NQ[5] : OY === FY[2] - 1 ? NQ[4] : rY === DY[1] ? NQ[3] : NQ[2];
            AY.push(CQ(RY, gY))
          }
        }
      return AY
    }

    function ZQ(YY, rY) {
      const DY = ey(YY, rY);
      return null !== DY && "Reactor Glass" === TD(DY)
    }

    function CQ(YY, rY) {
      return [
        [YY[0] + .5 + .55 * rY[0], YY[1] + .5 + .55 * rY[1], YY[2] + .5 + .55 * rY[2]],
        [0 === rY[0] ? .4 : .02, 0 === rY[1] ? .4 : .02, 0 === rY[2] ? .4 : .02]
      ]
    }
    class fQ {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(YY, rY, DY, FY) {
        const AY = [],
          IY = new Set;
        for (const aY of rY) {
          var RY, OY, gY;
          const {
            box: rY
          } = aY;
          if ("reactor" !== aY.kind || aY.level <= 0 || (rY.ctrl[0] - DY[0]) ** 2 + (rY.ctrl[1] - DY[1]) ** 2 + (rY.ctrl[2] - DY[2]) ** 2 > 576) continue;
          const vY = KQ(rY);
          IY.add(vY);
          let uY = this.spots.get(vY);
          if ((!uY || FY - uY.at > 3e3) && (uY = {
              at: FY,
              spots: HQ(YY, rY),
              glass: zQ(YY, rY)
            }, this.spots.set(vY, uY)), 0 === uY.spots.length && 0 === uY.glass.length) continue;
          const sY = this.sparking.find((YY => YY.key === vY));
          AY.push({
            key: vY,
            level: aY.level,
            spots: uY.spots,
            glass: uY.glass,
            budget: null !== (RY = null === sY || void 0 === sY ? void 0 : sY.budget) && void 0 !== RY ? RY : 0,
            cursor: null !== (OY = null === sY || void 0 === sY ? void 0 : sY.cursor) && void 0 !== OY ? OY : 0,
            glassBudget: null !== (gY = null === sY || void 0 === sY ? void 0 : sY.glassBudget) && void 0 !== gY ? gY : 0
          })
        }
        for (const aY of this.spots.keys()) IY.has(aY) || this.spots.delete(aY);
        this.sparking = AY
      }
      emit(YY, rY, DY) {
        var FY;
        if (0 === this.sparking.length || !YY.particlesEnabled() || DY === this.lastFrame) return;
        this.lastFrame = DY;
        let AY = 0,
          IY = 0;
        for (const yY of this.sparking) AY += BQ(yY), IY += cQ(yY);
        const RY = AY > 8 ? 8 / AY : 1,
          OY = IY > 6 ? 6 / IY : 1;
        let gY, aY = null,
          vY = null;
        for (const yY of this.sparking) yY.budget = Math.min(yY.budget + BQ(yY) * RY * rY, 2), yY.budget >= 1 && (!aY || yY.budget > aY.budget) && (aY = yY), yY.glassBudget = Math.min(yY.glassBudget + cQ(yY) * OY * rY, 2), yY.glassBudget >= 1 && (!vY || yY.glassBudget > vY.glassBudget) && (vY = yY);
        if (aY) aY.budget--, gY = aY.spots[aY.cursor++ % aY.spots.length];
        else {
          if (!vY) return;
          vY.glassBudget--, gY = vY.glass[Math.floor(Math.random() * vY.glass.length)]
        }
        const [uY, sY] = gY, iY = null !== (FY = this.emitter) && void 0 !== FY ? FY : this.create(YY, uY, sY);
        iY.moveTo(uY, sY), iY.emit(eQ.count)
      }
      dispose() {
        var YY;
        null === (YY = this.emitter) || void 0 === YY || YY.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(YY, rY, DY) {
        const FY = Math.ceil(14 * eQ.count * eQ.life[1]) + eQ.count;
        return this.emitter = YY.createParticles(SQ(eQ, FY), {
          pos: rY,
          half: DY
        }), this.emitter
      }
    }
    const jQ = [2, 3.2],
      hQ = 1 / 3,
      dQ = 1 / .6,
      JQ = {
        texture: mQ,
        gu: Math.ceil(18 * jQ[1]) + 4,
        minLifeTime: jQ[0] / dQ,
        maxLifeTime: jQ[1] / dQ,
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
        blendMode: BO.g.Standard
      };
    class MQ {
      constructor(YY) {
        this.plans = YY, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new fQ, this.frame = 0, this.outline = new vQ(YY)
      }
      onAfterRender(YY, rY, DY) {
        const FY = performance.now(),
          AY = 0 === this.lastMs ? 0 : Math.min(FY - this.lastMs, 250) / 1e3;
        if (this.lastMs = FY, this.outline.fade(YY, FY), this.puff(YY, AY, DY), this.sparks.emit(YY, AY, this.frame++), FY - this.lastCheckMs < 150) return;
        this.lastCheckMs = FY;
        const IY = this.plans.all().filter((YY => YY.formed && wQ(YY.box.ctrl, DY) <= 4096));
        this.plumes = IY.filter((YY => "reactor" === YY.kind && YY.level > 0)).map((YY => ({
          box: YY.box,
          level: YY.level
        }))), this.updateHums(YY, rY, IY, DY), this.sparks.update(YY, IY, DY, FY), this.chimeFormed(YY, rY, IY, FY)
      }
      dispose(YY) {
        var rY;
        this.outline.dispose(YY), null === (rY = this.steam) || void 0 === rY || rY.dispose(), this.steam = null, this.sparks.dispose();
        for (const DY of this.hums.values()) DY.stop();
        this.hums.clear()
      }
      chimeFormed(YY, rY, DY, FY) {
        const AY = this.outline.check(YY, DY, FY);
        AY && YY.playSound(rY, "exp_levelup", .6, 1, {
          zY: [AY.box.ctrl[0] + .5, AY.box.ctrl[1], AY.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(YY, rY, DY) {
        const FY = this.plumes;
        if (0 === FY.length || !YY.particlesEnabled()) return void(this.plumeBudget = 0);
        const AY = FY.reduce(((YY, rY) => YY + 3 * rY.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + AY * rY, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let IY = this.plumeCursor % (AY / 3);
        this.plumeCursor++;
        let RY = FY[0];
        for (const uY of FY) {
          if (IY < uY.level) {
            RY = uY;
            break
          }
          IY -= uY.level
        }
        const {
          lo: OY,
          hi: gY
        } = Tg(RY.box);
        if (function(YY, rY, DY) {
            const FY = Math.max(YY[0] - DY[0], 0, DY[0] - rY[0]),
              AY = Math.max(YY[2] - DY[2], 0, DY[2] - rY[2]);
            return Math.hypot(FY, DY[1] - rY[1], AY)
          }(OY, gY, DY) < 6 && Math.random() > hQ) return;
        const aY = [(OY[0] + gY[0]) / 2, gY[1] + .05, (OY[2] + gY[2]) / 2],
          vY = [(gY[0] - OY[0]) / 2 - .5, .05, (gY[2] - OY[2]) / 2 - .5];
        this.steam ??= YY.createParticles(JQ, {
          pos: aY,
          half: vY
        }), this.steam.moveTo(aY, vY), this.steam.emit(1)
      }
      updateHums(YY, rY, DY, FY) {
        const AY = new Map;
        for (const RY of DY) "reactor" === RY.kind && RY.level > 0 && wQ(RY.box.ctrl, FY) <= 576 && AY.set(`${IY=RY.box.ctrl,`${IY[0]},${IY[1]},${IY[2]}`}:${RY.level}`, RY);
        var IY;
        for (const [RY, OY] of this.hums) AY.has(RY) || (OY.stop(), this.hums.delete(RY));
        for (const [RY, OY] of AY) {
          if (this.hums.has(RY)) continue;
          const {
            lo: DY,
            hi: FY
          } = Tg(OY.box), AY = [(DY[0] + FY[0]) / 2, DY[1], (DY[2] + FY[2]) / 2], IY = YY.playSound(rY, "rocketEngineLoop", .08 + .06 * OY.level, .55, {
            zY: AY,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          IY && this.hums.set(RY, IY)
        }
      }
    }

    function wQ(YY, rY) {
      return (YY[0] - rY[0]) ** 2 + (YY[1] - rY[1]) ** 2 + (YY[2] - rY[2]) ** 2
    }
    class bQ {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      ZE(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const FY = [YY.baf2BombAt[0], YY.baf2BombAt[1], YY.baf2BombAt[2]],
          AY = YY.baf2BombR;
        if (YY.baf2BombBoom) {
          const YY = Math.hypot(rY[0] - FY[0], rY[1] - FY[1], rY[2] - FY[2]);
          this.vo({
            fuse: null,
            blast: {
              at: FY,
              r: AY,
              receivedAt: DY,
              distance: YY,
              flash: YY <= 3 * AY
            }
          })
        } else this.vo({
          ...this.snapshot,
          fuse: YY.baf2BombMs > 0 ? {
            at: FY,
            r: AY,
            endsAt: DY + YY.baf2BombMs
          } : null
        })
      }
      get() {
        return this.snapshot
      }
      subscribe(YY) {
        return this.listeners.add(YY), () => {
          this.listeners.delete(YY)
        }
      }
      dispose() {
        this.listeners.clear(), this.snapshot = {
          fuse: null,
          blast: null
        }
      }
      vo(YY) {
        this.snapshot = YY;
        for (const rY of this.listeners) rY()
      }
    }
    const XQ = (0, FY.memo)((function(YY) {
      var rY;
      let {
        store: DY
      } = YY;
      const {
        t: AY
      } = (0, mA.C)(), [IY, RY] = (0, FY.useState)((() => DY.get())), [OY, gY] = (0, FY.useState)((() => performance.now()));
      (0, FY.useEffect)((() => (RY(DY.get()), DY.subscribe((() => {
        RY(DY.get()), gY(performance.now())
      })))), [DY]);
      const {
        fuse: aY,
        blast: vY
      } = IY;
      (0, FY.useEffect)((() => {
        if (!aY) return;
        const YY = setInterval((() => {
          gY(performance.now())
        }), 250);
        return () => {
          clearInterval(YY)
        }
      }), [aY]);
      const [uY, sY] = (0, FY.useState)(!1);
      (0, FY.useEffect)((() => {
        if (null === vY || void 0 === vY || !vY.flash) return;
        sY(!0);
        const YY = setTimeout((() => {
          sY(!1)
        }), 2500);
        return () => {
          clearTimeout(YY)
        }
      }), [vY]);
      const iY = aY ? function(YY, rY) {
        return YY.endsAt <= rY ? 0 : Math.ceil((YY.endsAt - rY) / 1e3)
      }(aY, OY) : 0;
      return (0, WI.jsxs)(WI.Fragment, {
        children: [iY > 0 && (0, WI.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: AY("buildAFactory2Game:bombCountdown", {
            amount: String(iY),
            radius: String(null !== (rY = null === aY || void 0 === aY ? void 0 : aY.r) && void 0 !== rY ? rY : 0)
          })
        }), uY && (0, WI.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function qQ(YY) {
      const rY = Math.min(4, Math.max(1, YY / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * YY / 4)),
        capSpread: Math.min(5 * YY / 8, 24 * rY),
        capThick: 6 * rY,
        stemHalfWidth: 3 * rY,
        puffScale: rY
      }
    }
    class pQ {
      constructor() {
        this.ja = !1
      }
      hold(YY) {
        YY.getCameraFar() < 1e3 && (YY.setCameraFar(1e3), this.ja = !0)
      }
      release(YY) {
        this.ja && (this.ja = !1, YY.setCameraFar(null))
      }
    }
    const kQ = 1 / .6,
      GQ = [.2, .1, .2],
      xQ = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      nQ = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: BO.g.Standard,
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
      PQ = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: BO.g.Standard,
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
      UQ = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: BO.g.Standard,
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
      LQ = {
        texture: mQ,
        gu: Math.ceil(120) + 4,
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
        blendMode: BO.g.Add
      };
    class tQ {
      constructor(YY) {
        this.store = YY, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new pQ, this.timers = []
      }
      onAfterRender(YY, rY) {
        const DY = performance.now(),
          FY = 0 === this.lastMs ? 0 : Math.min(DY - this.lastMs, 250) / 1e3;
        this.lastMs = DY;
        const {
          fuse: AY,
          blast: IY
        } = this.store.get();
        null !== IY && IY !== this.shownBlast && (this.shownBlast = IY, this.startBlast(YY, rY, IY, DY));
        const RY = YY.particlesEnabled();
        null !== AY && AY.endsAt > DY && RY ? this.emitBeacon(YY, AY, FY, DY) : this.beaconBudget = 0, null !== this.cloud && (DY - this.cloud.startMs > 33e3 ? this.disposeCloud(YY) : (this.far.hold(YY), RY && this.emitCloud(YY, FY, DY)))
      }
      dispose(YY) {
        var rY;
        null === (rY = this.beacon) || void 0 === rY || rY.dispose(), this.beacon = null, this.disposeCloud(YY);
        for (const DY of this.timers) clearTimeout(DY);
        this.timers.length = 0
      }
      emitBeacon(YY, rY, DY, FY) {
        const AY = rY.endsAt - FY < 5e3 ? 350 : 1e3,
          IY = .5 + .5 * Math.sin(2 * Math.PI * FY / AY);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * IY * DY, 4), this.beaconBudget < 1) return;
        const RY = Math.floor(this.beaconBudget);
        this.beaconBudget -= RY;
        const [OY, gY, aY] = rY.at, vY = [OY + .5, gY + 1.1, aY + .5];
        this.beacon ??= YY.createParticles(LQ, {
          pos: vY,
          half: GQ
        }), this.beacon.moveTo(vY), this.beacon.emit(RY)
      }
      startBlast(YY, rY, DY, FY) {
        var AY;
        null === (AY = this.beacon) || void 0 === AY || AY.dispose(), this.beacon = null, this.disposeCloud(YY);
        const IY = (0, eO.isMobile)() ? .5 : 1;
        this.streams = [nQ, PQ, UQ].map((YY => {
          const rY = Math.round(YY.count * IY);
          return {
            spec: YY,
            particles: null,
            rate: rY / ((YY.toMs - YY.fromMs) / 1e3),
            budget: 0,
            left: rY
          }
        })), this.cloud = {
          blast: DY,
          startMs: FY
        };
        const RY = Math.max(.25, 1 - DY.distance / (6 * DY.r)),
          OY = DY.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [DY, FY, AY] of xQ) ro(YY, rY, DY, RY * FY, AY)
        }), OY))
      }
      emitCloud(YY, rY, DY) {
        const {
          blast: FY,
          startMs: AY
        } = this.cloud, IY = DY - AY, [RY, OY, gY] = FY.at, aY = qQ(FY.r);
        for (const vY of this.streams) {
          const {
            spec: DY
          } = vY;
          if (vY.left <= 0 || IY < DY.fromMs) continue;
          vY.budget += vY.rate * rY;
          const AY = Math.min(Math.floor(vY.budget), vY.left);
          if (AY < 1) continue;
          vY.budget -= AY, vY.left -= AY;
          const uY = vY.particles ??= this.createStream(YY, DY, FY);
          if (DY === nQ) {
            const YY = aY.stemHalfWidth;
            uY.moveTo([RY, OY + 1, gY], [YY, 1, YY])
          } else if (DY === PQ) {
            const YY = aY.capSpread * Math.min(1, (IY - DY.fromMs) / 3e3),
              rY = Math.sqrt(Math.random()),
              FY = 2 * Math.random() * Math.PI,
              AY = Math.cos(FY) * rY,
              vY = Math.sin(FY) * rY,
              sY = RY + AY * YY,
              iY = gY + vY * YY,
              yY = aY.capThick,
              QY = OY + aY.capHeight + yY * (1 - rY * rY) * 2;
            uY.setDirections([.7 * AY, .05, .7 * vY], [AY, .2, vY]), uY.moveTo([sY, QY, iY], [yY, yY, yY])
          } else {
            this.ringAngle += 2.39996;
            const YY = Math.cos(this.ringAngle),
              rY = Math.sin(this.ringAngle);
            uY.setDirections([YY, .05, rY], [YY, .1, rY]), uY.moveTo([RY + 2 * YY, OY + .5, gY + 2 * rY], [0, .5, 0])
          }
          uY.emit(AY)
        }
      }
      createStream(YY, rY, DY) {
        const {
          r: FY
        } = DY, AY = Math.max(rY.life[0], FY / 25), IY = rY === UQ ? [.9 * AY, AY] : rY.life, RY = qQ(FY), OY = rY === UQ ? 1 : RY.puffScale, gY = {
          texture: mQ,
          gu: rY.count + 4,
          minLifeTime: IY[0] / kQ,
          maxLifeTime: IY[1] / kQ,
          minSize: rY.size[0] * OY,
          maxSize: rY.size[1] * OY,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, rY.gravity * kQ * kQ, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: rY.from[0],
            maxColor: rY.from[1]
          }, {
            timeFraction: .6,
            minColor: Yo(rY.from[0], rY.to[0]),
            maxColor: Yo(rY.from[1], rY.to[1])
          }, {
            timeFraction: 1,
            minColor: rY.to[0],
            maxColor: rY.to[1]
          }],
          blendMode: rY.blend
        };
        if (rY === nQ) {
          const YY = RY.capHeight / ((IY[0] + IY[1]) / 2);
          gY.minEmitPower = .9 * YY * kQ, gY.maxEmitPower = 1.05 * YY * kQ, gY.dir1 = [-.1, 1, -.1], gY.dir2 = [.1, 1, .1]
        } else rY === PQ ? (gY.minEmitPower = 1.2, gY.maxEmitPower = 2, gY.dir1 = [-1, .05, -1], gY.dir2 = [1, .2, 1]) : (gY.minEmitPower = 39.583333333333336, gY.maxEmitPower = 41.66666666666667, gY.dir1 = [1, 0, 0], gY.dir2 = [1, 0, 0]);
        return YY.createParticles(gY, {
          pos: DY.at
        })
      }
      disposeCloud(YY) {
        for (const DY of this.streams) {
          var rY;
          null === (rY = DY.particles) || void 0 === rY || rY.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(YY)
      }
    }

    function Yo(YY, rY) {
      return [(YY[0] + rY[0]) / 2, (YY[1] + rY[1]) / 2, (YY[2] + rY[2]) / 2, .75 * YY[3]]
    }

    function ro(YY, rY, DY, FY, AY) {
      try {
        YY.playSound(rY, DY, FY, AY)
      } catch (IY) {
        console.error(IY)
      }
    }
    const Do = {
        gu: 720,
        perS: 100
      },
      Fo = {
        gu: 320,
        perS: 44
      };
    class Ao {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(YY, rY) {
        this.zone = {
          centre: [...YY.centre],
          r: YY.r,
          band: YY.band ? [YY.band[0], YY.band[1]] : void 0
        }, this.endsAt = rY
      }
      stop() {
        this.zone = null
      }
      ZE(YY, rY) {
        const {
          baf2FalloutMs: DY,
          baf2FalloutAt: FY,
          baf2FalloutR: AY,
          baf2FalloutY: IY
        } = YY;
        DY > 0 && FY && void 0 !== AY ? this.start({
          centre: FY,
          r: AY,
          band: IY
        }, rY + DY) : this.stop()
      }
      perS(YY, rY, DY) {
        const FY = this.zone;
        if (!FY) return 0;
        const AY = this.endsAt - YY;
        return AY <= 0 ? (this.zone = null, 0) : FY.band && (rY[1] < FY.band[0] || rY[1] > FY.band[1]) || Math.hypot(rY[0] - FY.centre[0], rY[2] - FY.centre[2]) > FY.r ? 0 : DY.perS * Math.min(1, AY / 5e3)
      }
    }
    const Io = [5, 7],
      Ro = [24, 8, 24],
      Oo = .5,
      go = 1 / .6,
      ao = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class vo {
      constructor() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, eO.isMobile)();
        this.state = new Ao, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(YY) {
          return YY ? Fo : Do
        }(YY)
      }
      startFallout(YY, rY) {
        this.state.start(YY, rY)
      }
      stopFallout() {
        this.state.stop()
      }
      ZE(YY) {
        this.state.ZE(YY, performance.now())
      }
      onAfterRender(YY, rY) {
        var DY;
        const FY = performance.now(),
          AY = 0 === this.lastMs ? 0 : Math.min(FY - this.lastMs, 250) / 1e3;
        this.lastMs = FY;
        const IY = this.state.perS(FY, rY, this.tier);
        if (IY <= 0 || !YY.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + IY * AY, IY / 4);
        const RY = Math.floor(this.budget);
        if (RY < 1) return;
        this.budget -= RY;
        const OY = this.at;
        OY[0] = rY[0], OY[1] = rY[1] + 12, OY[2] = rY[2];
        const gY = null !== (DY = this.systems) && void 0 !== DY ? DY : this.create(YY, OY),
          aY = this.amounts;
        aY[0] = 0, aY[1] = 0;
        for (let vY = 0; vY < RY; vY++) aY[Math.random() < .3 ? 1 : 0]++;
        for (let vY = 0; vY < gY.length; vY++) aY[vY] > 0 && (gY[vY].moveTo(OY, Ro), gY[vY].emit(aY[vY]))
      }
      dispose() {
        for (const rY of null !== (YY = this.systems) && void 0 !== YY ? YY : []) {
          var YY;
          rY.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(YY, rY) {
        return this.systems = ao.map((DY => {
          let {
            rgba: [FY, AY, IY, RY],
            share: OY
          } = DY;
          const gY = {
            texture: "square_particle",
            gu: Math.ceil(this.tier.gu * OY),
            minLifeTime: Io[0] / go,
            maxLifeTime: Io[1] / go,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [Oo, -1, Oo],
            colorGradients: [{
              timeFraction: 0,
              minColor: [FY, AY, IY, 0]
            }, {
              timeFraction: .15,
              minColor: [FY, AY, IY, RY]
            }, {
              timeFraction: .8,
              minColor: [FY, AY, IY, RY]
            }, {
              timeFraction: 1,
              minColor: [FY, AY, IY, 0]
            }],
            blendMode: BO.g.Standard
          };
          return YY.createParticles(gY, {
            pos: rY,
            half: Ro
          })
        })), this.systems
      }
    }
    const uo = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function so(YY) {
      const rY = /\|rot(\d)/.exec(YY);
      return uo[rY ? Number(rY[1]) : 1]
    }
    var io = DY(616),
      yo = DY(37858);
    const Qo = new Set(io.k);

    function oo(YY) {
      if (-2 !== YY.count) return null;
      const rY = qY(YY.item);
      return null !== rY && Qo.has(rY) ? rY : null
    }

    function Wo(YY) {
      const {
        width: rY,
        height: DY
      } = (0, yo.e)(YY).hitBoxDimensions;
      return .55 / Math.max(rY, DY)
    }

    function Eo(YY, rY, DY) {
      if (!DY) return !1;
      const FY = YY[0] + .5 - rY[0],
        AY = YY[1] + .5 - rY[1],
        IY = YY[2] + .5 - rY[2];
      return FY * FY + AY * AY + IY * IY <= 576
    }

    function mo(YY, rY) {
      return Math.atan2(YY[0], YY[2]) + Math.PI + rY
    }

    function Vo(YY, rY) {
      const DY = 2 * Math.PI;
      return (YY + DY * rY / 1e4) % DY
    }
    class So {
      constructor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = YY, this.now = rY, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = YY.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(YY, rY) {
        if (0 === this.farms.size) return;
        const DY = this.now(),
          FY = Number.isNaN(this.frameMs) ? 0 : Math.min(DY - this.frameMs, 100);
        this.frameMs = DY, DY - this.checkedMs >= 1e3 && (this.checkedMs = DY, this.check(YY, rY));
        for (const AY of this.farms.values()) AY.shown && AY.running && null !== AY.model && FY > 0 && (AY.spin = Vo(AY.spin, FY), AY.model.setPose(AY.feet, mo(AY.front, AY.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const YY of this.farms.values()) this.drop(YY);
        this.farms.clear()
      }
      sync() {
        const YY = new Set;
        for (const rY of this.labels.list()) {
          const DY = oo(rY);
          if (null === DY) continue;
          YY.add(rY.key);
          const FY = this.farms.get(rY.key);
          if ((null === FY || void 0 === FY ? void 0 : FY.mob) === DY) continue;
          FY && this.drop(FY);
          const [AY, IY, RY] = rY.pos;
          this.farms.set(rY.key, {
            pos: rY.pos,
            feet: [AY + .5, IY + 1, RY + .5],
            mob: DY,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [rY, DY] of this.farms) YY.has(rY) || (this.drop(DY), this.farms.delete(rY));
        this.checkedMs = -1 / 0
      }
      check(YY, rY) {
        for (const DY of this.farms.values()) {
          const [FY, AY, IY] = DY.pos, RY = ey(YY, DY.pos);
          null !== RY && TD(RY) === jY && Eo(DY.pos, rY, "Air" === ey(YY, [FY, AY + 1, IY])) ? (DY.running = RY.endsWith("|Running"), DY.front = so(RY), null === DY.model && (DY.model = YY.createMobModel(DY.mob, Wo(DY.mob)), null === DY.model) || (DY.model.setPose(DY.feet, mo(DY.front, DY.spin)), DY.shown || (DY.model.setVisible(!0), DY.shown = !0))) : (DY.shown && null !== DY.model && DY.model.setVisible(!1), DY.shown = !1)
        }
      }
      drop(YY) {
        var rY;
        null === (rY = YY.model) || void 0 === rY || rY.dispose(), YY.model = null, YY.shown = !1
      }
    }
    class To {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(YY) {
        var rY;
        this.island = YY.baf2ColIsland, this.islandSite = (rY = YY.baf2ColSite) && 8 === rY.length ? {
          spawnXZ: [rY[0], rY[1]],
          coreXZ: [rY[2], rY[3]],
          minXZ: [rY[4], rY[5]],
          maxXZ: [rY[6], rY[7]]
        } : null, this.views = YY.baf2ColList.map((YY => ({
          entry: tF(YY)
        }))), this.beamsVersion++, this.emit()
      }
      onStatus(YY) {
        this.status = YY, this.emit()
      }
      onOpen(YY) {
        this.openHeld = YY
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
        return this.views.map((YY => YY.entry))
      }
      entryAtRoot(YY) {
        var rY;
        return null === (rY = this.views.find((rY => {
          let {
            entry: DY
          } = rY;
          return DY.focus[0] === YY[0] && DY.focus[1] === YY[1] + 1 && DY.focus[2] === YY[2]
        }))) || void 0 === rY ? void 0 : rY.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(YY, rY) {
        return zg(this.entries(), YY, rY)
      }
      lookSource() {
        return {
          handles: YY => IF(YY) >= 0 || RF(YY),
          line: (YY, rY) => this.lookLine(YY, rY),
          version: () => this.beamsVersion
        }
      }
      subscribe(YY) {
        return this.listeners.add(YY), () => {
          this.listeners.delete(YY)
        }
      }
      dispose() {
        this.listeners.clear(), this.island = null, this.views = [], this.status = null, this.openHeld = null
      }
      emit() {
        for (const YY of this.listeners) YY()
      }
    }
    const eo = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((YY => YY / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((YY => [YY, YY + 1, YY + 2, YY, YY + 2, YY + 3]))
    };

    function No(YY, rY, DY, FY, AY, IY, RY) {
      let OY = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const gY = Math.cos(OY),
        aY = Math.sin(OY),
        vY = YY.positions.length / 3,
        {
          positions: uY,
          indices: sY
        } = eo;
      for (let iY = 0; iY < uY.length; iY += 3) {
        const OY = uY[iY] * AY,
          vY = uY[iY + 2] * RY;
        YY.positions.push(rY + OY * gY + vY * aY, DY + uY[iY + 1] * IY, FY - OY * aY + vY * gY)
      }
      for (const iY of sY) YY.indices.push(vY + iY)
    }

    function Bo(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return rY < 1 ? {
        rgb: YY,
        alpha: rY
      } : {
        rgb: YY,
        alpha: 1,
        opaque: !0
      }
    }
    class co {
      constructor(YY, rY) {
        this.style = YY, this.perSource = rY, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(YY) {
        this.sources = YY, 0 === YY.length && (this.budget = 0)
      }
      Zu(YY, rY, DY) {
        const FY = this.sources.length;
        if (0 !== FY) {
          var AY, IY;
          this.budget = Math.min(this.budget + (AY = FY, IY = this.perSource, Math.min(AY * IY, kg) * rY), 2);
          for (let rY = 0; rY < FY && this.budget >= 1; rY++) {
            const rY = this.sources[this.cursor % FY];
            this.cursor = (this.cursor + 1) % FY;
            if (!(Math.max(Math.abs(rY.x - DY[0]), Math.abs(rY.y - DY[1]), Math.abs(rY.z - DY[2])) > 32)) return this.puff(YY, rY), void this.budget--
          }
        }
      }
      dispose() {
        var YY;
        null === (YY = this.particles) || void 0 === YY || YY.dispose(), this.particles = null, this.sources = []
      }
      puff(YY, rY) {
        let {
          x: DY,
          y: FY,
          z: AY,
          h: IY,
          faces: RY
        } = rY;
        const OY = function(YY, rY, DY, FY, AY) {
            const [IY, RY, OY] = AY[Math.floor(Math.random() * AY.length)], gY = .04, aY = (YY, rY, DY) => YY > 0 ? rY + DY + gY : YY < 0 ? rY - gY : rY + .1, vY = (YY, rY, DY) => YY > 0 ? rY + DY + gY : YY < 0 ? rY - gY : rY + DY - .1, uY = [aY(IY, YY, 1), aY(RY, rY, FY), aY(OY, DY, 1)], sY = [vY(IY, YY, 1), vY(RY, rY, FY), vY(OY, DY, 1)];
            return {
              pos: [(uY[0] + sY[0]) / 2, (uY[1] + sY[1]) / 2, (uY[2] + sY[2]) / 2],
              half: [(sY[0] - uY[0]) / 2, (sY[1] - uY[1]) / 2, (sY[2] - uY[2]) / 2],
              out: [IY, RY, OY]
            }
          }(DY, FY, AY, IY, RY),
          {
            style: gY
          } = this,
          aY = this.particles ??= YY.createParticles(SQ(gY, Math.ceil(gY.count * kg * gY.life[1]) + 4), OY);
        aY.moveTo(OY.pos, OY.half);
        const [vY, uY, sY] = OY.out, iY = gY.spread;
        aY.setDirections([vY - iY, .6 + uY, sY - iY], [vY + iY, 1 + uY, sY + iY]), aY.emit(gY.count)
      }
    }
    const Ko = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class Ho {
      constructor() {
        this.green = new co(xg.green, qg), this.pink = new co(xg.pink, pg), this.colliders = [], this.lastMs = 0
      }
      setSources(YY) {
        this.colliders = YY;
        const rY = [],
          DY = [];
        for (const FY of YY) {
          const [YY, AY, IY] = FY.focus;
          rY.push({
            x: YY,
            y: AY - 1,
            z: IY,
            h: 2,
            faces: Ko
          });
          for (let rY = 0; rY < 4; rY++) {
            if (!FY.live[rY]) continue;
            const [YY, AY, IY] = aF(FY.focus, rY, tD.LASER_D), [RY, , OY] = gF[rY], gY = Ko.filter((YY => YY[0] !== RY || YY[2] !== OY || 0 !== YY[1]));
            DY.push({
              x: YY,
              y: AY,
              z: IY,
              h: 1,
              faces: gY
            })
          }
        }
        this.green.setSources(rY), this.pink.setSources(DY)
      }
      onAfterRender(YY) {
        const rY = performance.now(),
          DY = 0 === this.lastMs ? 0 : Math.min(rY - this.lastMs, 250) / 1e3;
        if (this.lastMs = rY, 0 === this.colliders.length || !YY.particlesEnabled()) return;
        const FY = YY.getCameraPosition();
        this.green.Zu(YY, DY, FY), this.pink.Zu(YY, DY, FY)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const zo = 1.04,
      Zo = Bo([1, 120 / 255, 220 / 255]),
      Co = Bo([1, .25, .25], .35);
    class fo {
      constructor(YY) {
        this.store = YY, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new Ho
      }
      onAfterRender(YY) {
        this.store.version() !== this.builtVersion && this.rebuild(YY);
        const rY = performance.now();
        for (const DY of this.beams) {
          const FY = 1 + .35 * Math.sin(rY / 700 * Math.PI * 2 + DY.phase);
          YY.setGameMesh(DY.mesh, {
            scale: [DY.alongX ? 1 : FY, FY, DY.alongX ? FY : 1]
          })
        }
        this.glow.onAfterRender(YY)
      }
      dispose(YY) {
        this.clear(YY), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(YY) {
        this.clear(YY), this.builtVersion = this.store.version();
        const rY = [];
        for (const {
            entry: DY
          }
          of this.store.colliders()) DY.on && DY.live.some(Boolean) && (this.addBeams(YY, DY), rY.push(DY)), DY.blockers.length > 0 && this.addMarkers(YY, DY);
        this.glow.setSources(rY)
      }
      addBeams(YY, rY) {
        const [DY, FY, AY] = rY.focus, IY = Xg - .25, RY = (.25 + Xg) / 2;
        for (let OY = 0; OY < 4; OY++) {
          if (!rY.live[OY]) continue;
          const [gY, , aY] = gF[OY], vY = 0 !== gY, uY = {
            positions: [],
            indices: []
          };
          No(uY, 0, 0, 0, vY ? IY : .2, .2, vY ? .2 : IY);
          const sY = [DY + .5 + gY * RY, FY + .5, AY + .5 + aY * RY],
            iY = YY.createGameMesh(uY, Zo, sY);
          this.meshes.push(iY), this.beams.push({
            mesh: iY,
            alongX: vY,
            phase: OY * Math.PI / 2
          })
        }
      }
      addMarkers(YY, rY) {
        const DY = rY.blockers[0],
          FY = {
            positions: [],
            indices: []
          };
        for (const [AY, IY, RY] of rY.blockers) No(FY, AY - DY[0] + .5, IY - DY[1] + .5, RY - DY[2] + .5, zo, zo, zo);
        this.meshes.push(YY.createGameMesh(FY, Co, DY))
      }
      clear(YY) {
        for (const rY of this.meshes) YY.disposeGameMesh(rY);
        this.meshes = [], this.beams = []
      }
    }
    const jo = [.56, .83, 1],
      ho = [1, .73, .08],
      Jo = [1, .25, .25],
      Mo = [.85, .85, .85],
      wo = [.3, .45, .6];

    function bo(YY, rY, DY, FY) {
      let AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        IY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const RY = AY / 2,
        OY = AY + IY;
      for (const gY of [-RY, RY])
        for (const AY of [-RY, RY]) No(YY, rY, DY + gY, FY + AY, OY, IY, IY), No(YY, rY + gY, DY, FY + AY, IY, OY, IY), No(YY, rY + gY, DY + AY, FY, IY, IY, OY)
    }

    function Xo(YY) {
      return rY => YY.isBlockInLoadedChunk(rY[0], rY[1], rY[2]) && 0 === YY.getBlockId(rY[0], rY[1], rY[2])
    }

    function qo(YY) {
      return YY.map((YY => {
        let {
          free: rY,
          blocked: DY,
          gaps: FY,
          supports: AY
        } = YY;
        return `${rY.join(";")}|${DY.join(";")}|${FY.join(";")}|${AY.join(";")}`
      })).join("/")
    }

    function po(YY, rY, DY) {
      let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const IY = rY[0],
        RY = {
          positions: [],
          indices: []
        };
      for (const [OY, gY, aY] of rY) bo(RY, OY - IY[0] + .5, gY - IY[1] + .5, aY - IY[2] + .5, FY, AY);
      return YY.createGameMesh(RY, DY, IY)
    }
    class ko {
      constructor(YY) {
        this.store = YY, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(YY, rY, DY) {
        var FY;
        const AY = null === (FY = YY.rrY(rY)) || void 0 === FY ? void 0 : FY.name;
        if (AY !== rF && AY !== YF) return void("" !== this.shownKey && this.show(YY, "", []));
        const IY = performance.now();
        if (IY - this.lastCheckMs >= 200 && (this.lastCheckMs = IY, AY === rF ? this.check(YY, DY) : this.preview(YY, DY)), this.pulses.length > 0) {
          const rY = 1 + .12 * Math.sin(IY / 1e3 * 1.25 * Math.PI * 2),
            DY = [rY, rY, rY];
          for (const FY of this.pulses) YY.setGameMesh(FY, {
            scale: DY
          })
        }
      }
      dispose(YY) {
        this.clear(YY), this.shownKey = ""
      }
      check(YY, rY) {
        const DY = Xo(YY),
          FY = [];
        for (const {
            entry: IY
          }
          of this.store.colliders()) {
          IY.focus.every(((YY, DY) => Math.abs(YY + .5 - rY[DY]) <= tD.GHOST_REACH)) && FY.push(bg(IY, DY))
        }
        const AY = qo(FY);
        AY !== this.shownKey && this.show(YY, AY, FY)
      }
      preview(YY, rY) {
        const DY = YY.getTargetedBlock(),
          FY = DY ? [DY.bu[0], DY.bu[1], DY.bu[2]] : null,
          AY = null !== FY && FY.every(((YY, DY) => Math.abs(YY + .5 - rY[DY]) <= 8)),
          IY = this.store.site(),
          RY = AY && IY ? function(YY, rY, DY) {
            const FY = OF(YY);
            if (!FY.every(rY)) return null;
            const AY = sF(YY, DY);
            return {
              column: FY,
              spots: bg({
                focus: FY[1],
                lasers: [!1, !1, !1, !1],
                open: AY,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, rY),
              fits: AY.filter(Boolean).length >= tD.MIN_SPOTS
            }
          }(FY, Xo(YY), IY) : null,
          OY = RY ? [RY.spots] : [],
          gY = RY ? `preview ${FY.join(",")}|${RY.fits}|${qo(OY)}` : "";
        var aY, vY;
        gY !== this.shownKey && this.show(YY, gY, OY, null !== (aY = null === RY || void 0 === RY ? void 0 : RY.column) && void 0 !== aY ? aY : [], null === (vY = null === RY || void 0 === RY ? void 0 : RY.fits) || void 0 === vY || vY)
      }
      show(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          AY = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(YY), this.shownKey = rY, FY.length > 0 && this.meshes.push(po(YY, FY, Bo(AY ? Mo : Jo)));
        for (const {
            free: IY,
            blocked: RY,
            gaps: OY,
            supports: gY
          }
          of DY) {
          for (const [rY, DY, FY] of IY) {
            const AY = {
              positions: [],
              indices: []
            };
            bo(AY, 0, 0, 0);
            const IY = YY.createGameMesh(AY, Bo(jo), [rY + .5, DY + .5, FY + .5]);
            this.meshes.push(IY), this.pulses.push(IY)
          }
          RY.length > 0 && this.meshes.push(po(YY, RY, Bo(ho))), OY.length > 0 && this.meshes.push(po(YY, OY, Bo(Jo), 1.06, .07)), gY.length > 0 && this.meshes.push(po(YY, gY, Bo(wo)))
        }
      }
      clear(YY) {
        for (const rY of this.meshes) YY.disposeGameMesh(rY);
        this.meshes = [], this.pulses = []
      }
    }
    class Go {
      constructor() {
        this.stored = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(YY) {
        if (!YY.baf2TermOpen) return !1;
        YY.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [rY, DY] of YY.baf2TermItems) DY > 0 ? this.stored.set(rY, DY) : this.stored.delete(rY);
        if (this.pending = this.pending.filter((rY => rY.seq > YY.baf2TermAcked)), this.silos = YY.baf2TermSilos, this.readOnly = YY.baf2TermReadOnly, this.pocket = !0 === YY.baf2TermPocket, YY.baf2TermReset) this.resort();
        else
          for (const rY of this.stored.keys()) this.order.includes(rY) || this.order.push(rY);
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((YY, rY) => this.amount(rY) - this.amount(YY) || YY.localeCompare(rY))), this.changed()
      }
      take(YY, rY) {
        const DY = function(YY, rY) {
          const DY = "number" === typeof YY ? YY : "one" === YY ? 1 : "stack" === YY ? 99 : rY;
          return Math.min(rY, DY)
        }(YY, this.amount(rY));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: rY,
          amount: DY
        }), this.recents = [rY, ...this.recents.filter((YY => YY !== rY))].slice(0, 6), this.changed(), rr(this.seq, YY, rY)
      }
      amount(YY) {
        var rY;
        let DY = null !== (rY = this.stored.get(YY)) && void 0 !== rY ? rY : 0;
        for (const FY of this.pending) FY.item === YY && (DY -= FY.amount);
        return Math.max(0, DY)
      }
      items() {
        return this.order.filter((YY => this.amount(YY) > 0))
      }
      recent() {
        return this.recents.filter((YY => this.amount(YY) > 0))
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
      subscribe(YY) {
        return this.listeners.add(YY), () => {
          this.listeners.delete(YY)
        }
      }
      changed() {
        this.version++;
        for (const YY of this.listeners) YY()
      }
    }
    var xo = DY(37805);
    const no = {
      isBlock: YY => void 0 !== zY.h[YY],
      harvestType: YY => {
        var rY;
        return null === (rY = zY.h[YY]) || void 0 === rY ? void 0 : rY.harvestType
      },
      harvestLevel: YY => {
        var rY;
        return null === (rY = zY.h[YY]) || void 0 === rY ? void 0 : rY.harvestLevel
      },
      dropsNothing: YY => {
        var rY;
        return null === (null === (rY = zY.h[YY]) || void 0 === rY ? void 0 : rY.drops)
      },
      displayName: YY => {
        var rY;
        return null === (rY = pR.o[YY]) || void 0 === rY ? void 0 : rY.displayName
      },
      description: YY => {
        var rY;
        return null === (rY = pR.o[YY]) || void 0 === rY ? void 0 : rY.description
      },
      harvests: YY => {
        var rY;
        return null === (rY = pR.o[YY]) || void 0 === rY ? void 0 : rY.harvests
      },
      level: YY => {
        var rY;
        return null === (rY = pR.o[YY]) || void 0 === rY ? void 0 : rY.level
      }
    };

    function Po(YY, rY, DY) {
      return function(YY, rY, DY, FY) {
        var AY, IY;
        const RY = rY.split("|")[0],
          OY = YY.isBlock(rY) ? rY : YY.isBlock(RY) ? RY : null;
        if (null === OY || "rock" !== YY.harvestType(OY) || YY.dropsNothing(OY) && !zF.has(RY)) return null;
        const gY = DY && "rock" === YY.harvests(DY) ? null !== (AY = YY.level(DY)) && void 0 !== AY ? AY : 0 : null,
          aY = null !== (IY = null !== FY && void 0 !== FY ? FY : YY.harvestLevel(OY)) && void 0 !== IY ? IY : 0;
        return (null !== gY ? aY <= gY : 0 === YY.harvestLevel(OY)) ? null : mF(YY, aY)
      }(no, YY, rY, DY)
    }

    function Uo(YY, rY) {
      return function(YY, rY, DY) {
        if (rY === EF[0]) return [(0, fY.Ud)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, fY.K.whiteUiText)];
        const FY = DY.split("|")[0],
          AY = YY.isBlock(FY) ? YY.displayName(FY) : void 0,
          IY = "string" === typeof AY ? AY : AY && "translationKey" in AY ? `$t(${AY.translationKey})` : FY;
        return [(0, fY.Ud)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: IY
          }
        }, fY.K.whiteUiText), (0, fY.Ud)({
          translationKey: `item:${(0,fY.te)(rY)}`
        }, fY.K.yellowUiText)]
      }(no, YY, rY)
    }
    const Lo = "buildAFactory2Game:";
    const to = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function YW(YY) {
      return YY.endsWith(" Ore")
    }
    const rW = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      DW = [],
      FW = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: rW,
        plan: null,
        atomic: DW
      },
      AW = "buildAFactory2Game:",
      IW = new Set(["Splitter", "Sorting Gate"]),
      RW = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class OW {
      constructor() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = YY, this.planAt = rY, this.tierOf = DY, this.rv = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.ja = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = FW, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(YY, rY, DY) {
        var FY, AY, IY;
        let RY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const OY = null !== (FY = null === (AY = YY.rrY(rY)) || void 0 === AY ? void 0 : AY.name) && void 0 !== FY ? FY : null,
          gY = YY.isPlayerCrouching(rY),
          aY = 0 === DY ? null : this.resolve(YY, DY),
          vY = null !== aY && null !== RY && IW.has(aY.rootName) && function(YY, rY) {
            return RW.some((DY => {
              let [FY, AY] = DY;
              const IY = YY.getBlockId(rY[0] + FY, rY[1], rY[2] + AY);
              return 0 !== IY && "Express Belt" === YY.getMetaInfo(IY).rootName
            }))
          }(YY, RY),
          uY = this.updatePlan(0 === DY ? null : RY),
          sY = this.tierOf(),
          iY = null === RY ? null : (0, xo.g)(DY),
          yY = null !== iY && null !== RY && (0, xo.h)(function(YY) {
            return (rY, DY, FY) => YY.getBlockId(rY, DY, FY)
          }(YY), RY[0], RY[1], RY[2], iY),
          QY = this.readAfloat(YY, DY, RY);
        if (DY === this.rv && yY === this.missesMaker && QY === this.afloat && OY === this.ja && gY === this.crouching && vY === this.express && sY === this.tier && !uY && (!this.targetsLive || !this.liveMoved(RY))) return;
        this.rv = DY, this.missesMaker = yY, this.afloat = QY, this.ja = OY, this.crouching = gY, this.express = vY;
        const oY = vY && aY ? function(YY) {
          if (null === YY.info) return null;
          return YY.express ??= {
            ...YY.info,
            detail: `${AW}lookKeepsUpExpress`,
            detailItem: null
          }, YY.express
        }(aY) : null !== aY && yY && null !== iY ? this.besideMaker(aY, DY, iY) : null !== aY && QY ? this.hanging(aY) : null !== (IY = null === aY || void 0 === aY ? void 0 : aY.info) && void 0 !== IY ? IY : null;
        this.tier = sY;
        const WY = aY && oY ? function(YY, rY) {
          var DY, FY;
          const AY = zY.h[YY];
          if (!YY.endsWith(" Ore") || "rock" !== (null === AY || void 0 === AY ? void 0 : AY.harvestType) || 0 === AY.harvestLevel) return null;
          const IY = null !== (DY = AY.harvestLevel) && void 0 !== DY ? DY : 0,
            RY = rY ? pR.o[rY] : void 0;
          if ("rock" === (null === RY || void 0 === RY ? void 0 : RY.harvests) && (null !== (FY = RY.level) && void 0 !== FY ? FY : 0) >= IY) return null;
          const OY = (gY = IY, mF(no, gY));
          var gY;
          if (null === OY) return null;
          const aY = nA(OY),
            vY = /^[AEIOU]/.test(OY) ? "An" : "";
          if ("rock" === (null === RY || void 0 === RY ? void 0 : RY.harvests) && rY) return {
            key: `${AW}lookToolTooWeak${vY}`,
            ja: nA(rY),
            needed: aY
          };
          return {
            key: OY === EF[0] ? `${AW}lookNeedAnyPickaxe` : `${AW}lookNeedPickaxe${vY}`,
            ja: null,
            needed: aY
          }
        }(aY.rootName, OY) : null;
        this.targetsLive = !0 === (null === aY || void 0 === aY ? void 0 : aY.live) && null !== RY;
        let EY = null;
        this.targetsLive && aY && RY && this.live && (this.livePos[0] = RY[0], this.livePos[1] = RY[1], this.livePos[2] = RY[2], this.liveVersion = this.live.version(), EY = this.live.line(aY.rootName, RY));
        const mY = null === oY ? rW : function(YY, rY, DY) {
            const FY = function(YY, rY, DY) {
              const FY = ND(YY);
              if (null === FY) return null;
              const AY = `${Lo}lookPortMode_${FY}`,
                IY = fF(rY);
              if (IY && DY) return {
                mode: null,
                detail: AY,
                next: `${Lo}lookWrenchPickUp`,
                nextState: null
              };
              const RY = BD(YY),
                OY = null === RY ? null : ND(RY);
              return null === OY ? {
                mode: null,
                detail: AY,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: AY,
                next: IY ? `${Lo}lookWrenchNext` : `${Lo}lookPortWrench`,
                nextState: `${Lo}lookPortState_${OY}`
              }
            }(YY, rY, DY);
            if (null !== FY) return FY;
            const AY = nF(YY, rY, DY);
            return null === AY.mode && null === AY.next ? rW : AY
          }(YY.blockIdToBlockName(DY), OY, gY),
          VY = this.plan,
          SY = aY && oY ? this.rowsOf(aY.rootName, sY) : DW,
          lY = this.snapshot;
        if (!(null === oY ? !lY.visible : lY.visible && oY === lY.info && (TY = WY, eY = lY.tool, TY === eY || null !== TY && null !== eY && TY.key === eY.key && TY.ja === eY.ja && TY.needed === eY.needed) && function(YY, rY) {
            return YY === rY || null !== YY && null !== rY && YY.key === rY.key && JSON.stringify([YY.params, YY.keys]) === JSON.stringify([rY.params, rY.keys])
          }(EY, lY.live) && function(YY, rY) {
            return YY.mode === rY.mode && YY.detail === rY.detail && YY.next === rY.next && YY.nextState === rY.nextState
          }(mY, lY.wrench) && hy(VY, lY.plan) && SY === lY.atomic)) {
          var TY, eY;
          this.snapshot = null === oY ? {
            ...lY,
            visible: !1
          } : {
            info: oY,
            visible: !0,
            tool: WY,
            live: EY,
            wrench: mY,
            plan: VY,
            atomic: SY
          };
          for (const YY of this.listeners) YY()
        }
      }
      get() {
        return this.snapshot
      }
      subscribe(YY) {
        return this.listeners.add(YY), () => {
          this.listeners.delete(YY)
        }
      }
      dispose() {
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = FW, this.rv = 0, this.ja = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(YY, rY, DY) {
        if (null === DY || 0 === rY || !OY() || !YW(this.resolve(YY, rY).rootName)) return !1;
        const FY = `${DY[0]},${DY[1]},${DY[2]},${rY}`,
          AY = performance.now();
        return FY === this.afloatKey && AY - this.afloatAt < gW ? this.afloat : (this.afloatKey = FY, this.afloatAt = AY, function(YY, rY) {
          for (const [DY, FY, AY] of to) {
            const IY = rY(YY[0] + DY, YY[1] + FY, YY[2] + AY);
            if (void 0 === IY || null !== IY && !YW(IY)) return !1
          }
          return !0
        }(DY, ((rY, DY, FY) => function(YY, rY, DY, FY) {
          if (!YY.isBlockInLoadedChunk(rY, DY, FY)) return;
          const AY = YY.getBlockId(rY, DY, FY);
          return 0 === AY ? null : YY.getMetaInfo(AY).rootName
        }(YY, rY, DY, FY))))
      }
      liveMoved(YY) {
        var rY;
        const {
          livePos: DY
        } = this;
        return null === YY || YY[0] !== DY[0] || YY[1] !== DY[1] || YY[2] !== DY[2] || (null === (rY = this.live) || void 0 === rY ? void 0 : rY.version()) !== this.liveVersion
      }
      updatePlan(YY) {
        const rY = null === YY ? "" : YY.join(","),
          DY = performance.now();
        if (rY === this.planPos && DY - this.planMs < 250) return !1;
        this.planPos = rY, this.planMs = DY;
        const FY = null === YY ? null : this.planAt([YY[0], YY[1], YY[2]]),
          AY = !hy(FY, this.plan);
        return this.plan = FY, AY
      }
      besideMaker(YY, rY, DY) {
        let {
          info: FY
        } = YY;
        if (null === FY) return null;
        let AY = this.besideMakerById.get(rY);
        if (void 0 === AY) {
          const YY = "cryo" === DY ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          AY = {
            ...FY,
            detail: `${AW}${YY}`,
            detailItem: null
          }, this.besideMakerById.set(rY, AY)
        }
        return AY
      }
      hanging(YY) {
        let {
          info: rY,
          rootName: DY
        } = YY;
        if (null === rY) return null;
        let FY = this.afloatByRoot.get(DY);
        return void 0 === FY && (FY = {
          ...rY,
          detail: `${AW}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(DY, FY)), FY
      }
      rowsOf(YY, rY) {
        if (null === rY) return DW;
        const DY = `${YY}|${rY}`;
        let FY = this.rowsByKey.get(DY);
        if (void 0 === FY) {
          const AY = function(YY, rY) {
            var DY;
            if (!(YY in Br)) return [];
            const FY = null !== (DY = cr[YY]) && void 0 !== DY ? DY : [],
              AY = new Map;
            for (const RY of fI(YY, rY))
              if ((FY.includes(RY) || CI(RY.output) && zI(RY.output) > PY(YY)) && zI(RY.output) <= rY) {
                var IY;
                const YY = null !== (IY = AY.get(RY.output)) && void 0 !== IY ? IY : [];
                YY.push(RY.input), AY.set(RY.output, YY)
              } return hI([...AY], (YY => {
              let [rY] = YY;
              return -zI(rY)
            })).map((YY => {
              let [rY, DY] = YY;
              return {
                output: rY,
                inputs: DY
              }
            }))
          }(YY, rY);
          FY = AY.length > 0 ? AY : DW, this.rowsByKey.set(DY, FY)
        }
        return FY
      }
      resolve(YY, rY) {
        const {
          rootId: DY,
          rootName: FY
        } = YY.getMetaInfo(rY), AY = (0, OD.h)(FY) ? rY : DY;
        let IY = this.byRootId.get(AY);
        const RY = OY();
        if (void 0 === IY || IY.nuclear !== RY) {
          var gY;
          const DY = function(YY) {
            return KF(no, YY, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YY)
          }(FY, YY.blockIdToBlockName(rY));
          IY = {
            info: DY,
            rootName: FY,
            live: null !== DY && !0 === (null === (gY = this.live) || void 0 === gY ? void 0 : gY.handles(FY)),
            nuclear: RY
          }, this.byRootId.set(AY, IY)
        }
        return IY
      }
    }
    const gW = 500;
    const aW = (0, FY.memo)((function(YY) {
      var rY, DY;
      let {
        store: AY
      } = YY;
      const {
        t: IY
      } = (0, mA.C)(), [RY, OY] = (0, FY.useState)((() => AY.get()));
      (0, FY.useEffect)((() => (OY(AY.get()), AY.subscribe((() => {
        OY(AY.get())
      })))), [AY]);
      const {
        openInGameMenuName: gY,
        openEverythingMenuName: aY,
        isTouchScreen: vY
      } = (0, sA.j)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
        info: uY,
        tool: sY,
        live: iY,
        wrench: yY,
        atomic: QY
      } = RY, oY = RY.visible && null === gY && null === aY;
      if (null === uY) return null;
      const WY = null !== yY.detail ? IY(yY.detail) : null !== (rY = RY.plan) && void 0 !== rY && rY.ctrl ? IY("buildAFactory2Game:lookPlanCtrl") : null !== uY.detail ? IY(uY.detail, null === uY.detailItem ? void 0 : {
        item: IY(uY.detailItem)
      }) : null;
      return (0, WI.jsxs)("div", {
        className: QA()("Baf2LookTarget", {
          Visible: oY
        }),
        "aria-hidden": !oY,
        children: [(0, WI.jsx)("div", {
          className: "Baf2LookTargetName SmallTextBold",
          children: IY(uY.name)
        }), null !== RY.plan && (0, WI.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: IY(RY.plan.key, {
            kind: IY(RY.plan.kindKey),
            w: String(RY.plan.w),
            h: String(RY.plan.h),
            d: String(RY.plan.d),
            count: String(RY.plan.count)
          })
        }), void 0 !== (null === (DY = RY.plan) || void 0 === DY ? void 0 : DY.why) && (0, WI.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: IY(RY.plan.why)
        }), null !== yY.mode && (0, WI.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: IY(yY.mode)
        }), null !== sY ? (0, WI.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: IY(sY.key, {
            item: IY(sY.needed),
            ja: null === sY.ja ? "" : IY(sY.ja)
          })
        }) : null !== iY ? (0, WI.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: IY(iY.key, ng(IY, iY))
        }) : null !== WY && (0, WI.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: WY
        }), QY.length > 0 && (0, WI.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: IY("buildAFactory2Game:lookAtomicRecipes", {
            list: QY.map((YY => {
              let {
                output: rY,
                inputs: DY
              } = YY;
              const FY = DY.length > 1 ? ` ${IY("buildAFactory2Game:recipeMore",{count:String(DY.length-1)})}` : "";
              return `${IY(nA(DY[0]))}${FY} \u2192 ${IY(nA(rY))}`
            })).join(", ")
          })
        }), null !== yY.next && (0, WI.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: IY(yY.next, {
            state: null === yY.nextState ? "" : IY(yY.nextState),
            use: IY(vY ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
          })
        })]
      })
    }));
    var vW = DY(37894);
    const uW = [],
      sW = [
        [0, -1, 0]
      ];

    function iW(YY) {
      const rY = [YY];
      for (let DY = 1; DY <= 4; DY++) DY > 1 && rY.push(`${YY}|meta|rot${DY}`), rY.push(`${YY}|meta|rot${DY}|Running`);
      return rY
    }

    function yW(YY, rY) {
      return [Math.floor(YY[0] / rY), Math.floor(YY[1] / rY), Math.floor(YY[2] / rY)]
    }

    function QW(YY, rY, DY) {
      return `${YY},${rY},${DY}`
    }

    function oW(YY) {
      const rY = YY.split("|")[0];
      if (!DD(rY)) return uW;
      const DY = Br[rY];
      if (xr(DY)) return sW;
      const FY = so(YY);
      return nr(DY) ? [
        [-FY[0], -FY[1], -FY[2]]
      ] : oA(DY) ? function(YY, rY) {
        const DY = YY[0] - 2 * rY[0],
          FY = YY[2] - 2 * rY[2],
          AY = [];
        for (let IY = -1; IY <= 1; IY++)
          for (let rY = -1; rY <= 1; rY++) AY.push([DY + IY, YY[1], FY + rY]);
        return AY
      }([0, 0, 0], FY) : uW
    }
    const WW = [.5, .5, .5],
      EW = [.2, .8, .3],
      mW = [.45, 1, .5];
    class VW {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(YY) {
        this.indexed = !0;
        for (const rY of Vr)
          for (const DY of iW(rY)) {
            const rY = YY.blockNameToBlockId(DY, !0),
              FY = oW(DY);
            null !== rY && FY.length > 0 && (this.offsetsList.push(FY), this.offsetsIndexById[rY] = this.offsetsList.length)
          }
      }
      onAfterRender(YY, rY) {
        this.indexed || this.index(YY);
        const DY = performance.now();
        if (DY - this.lastCheckMs < 100) return;
        this.lastCheckMs = DY, this.checks++;
        const FY = Ay.d.Jy,
          [AY, IY, RY] = yW(rY, FY);
        let OY = !1;
        const gY = [];
        let aY = 0;
        for (let vY = AY - 2; vY <= AY + 2; vY++)
          for (let rY = IY - 1; rY <= IY + 1; rY++)
            for (let AY = RY - 2; AY <= RY + 2; AY++) {
              const IY = aY++,
                RY = QW(vY, rY, AY),
                uY = YY.getChunkVersion(vY, rY, AY);
              let sY = this.chunks.get(RY);
              null !== uY ? (sY || (sY = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(RY, sY)), sY.seenAt = this.checks, sY.checkedVersion !== uY && (sY.checkedVersion = uY, OY = !0), sY.scannedVersion !== uY && DY - sY.scannedAt >= 500 && gY.push({
                slot: IY,
                entry: sY,
                origin: [vY * FY, rY * FY, AY * FY]
              })) : (OY ||= void 0 !== sY, this.chunks.delete(RY))
            }
        this.scanDue(YY, gY) && (OY = !0);
        for (const [vY, uY] of this.chunks) uY.seenAt !== this.checks && (OY ||= uY.machines.length > 0, this.chunks.delete(vY));
        for (const vY of this.chunks.values())
          for (const [rY, DY, FY] of vY.cellChunks)(Math.abs(rY - AY) > 2 || Math.abs(DY - IY) > 1 || Math.abs(FY - RY) > 2) && this.watchCellChunk(YY, rY, DY, FY) && (OY = !0);
        for (const [vY, uY] of this.cellChunks) uY.seenAt !== this.checks && this.cellChunks.delete(vY);
        OY && this.refresh(YY)
      }
      dispose(YY) {
        this.clearMeshes(YY), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(YY, rY) {
        const DY = Math.max(rY.findIndex((YY => {
          let {
            slot: rY
          } = YY;
          return rY >= this.scanFrom
        })), 0);
        let FY = 96;
        for (let AY = 0; AY < rY.length; AY++) {
          const {
            slot: IY,
            entry: RY,
            origin: OY
          } = rY[(DY + AY) % rY.length];
          if (FY -= this.scan(YY, RY, OY), FY <= 0) {
            this.scanFrom = IY + 1;
            break
          }
        }
        return rY.length > 0
      }
      scan(YY, rY, DY) {
        let [FY, AY, IY] = DY;
        const RY = Ay.d.Jy,
          OY = this.hits;
        OY.length = 0;
        const gY = YY.scanBlocks(FY, AY, IY, FY + RY, AY + RY, IY + RY, this.offsetsIndexById, OY),
          aY = [];
        for (let vY = 0; vY < OY.length; vY += 4) aY.push({
          pos: [OY[vY], OY[vY + 1], OY[vY + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[OY[vY + 3]] - 1]
        });
        return rY.machines = aY, rY.cellChunks = function(YY, rY) {
          const DY = new Set,
            FY = [];
          for (const {
              pos: AY,
              offsets: IY
            }
            of YY)
            for (const [YY, RY, OY] of IY) {
              const IY = yW([AY[0] + YY, AY[1] + RY, AY[2] + OY], rY),
                gY = QW(...IY);
              DY.has(gY) || (DY.add(gY), FY.push(IY))
            }
          return FY
        }(aY, RY), rY.scannedVersion = rY.checkedVersion, rY.scannedAt = performance.now(), Math.max(gY, 1)
      }
      watchCellChunk(YY, rY, DY, FY) {
        const AY = QW(rY, DY, FY),
          IY = YY.getChunkVersion(rY, DY, FY),
          RY = this.cellChunks.get(AY);
        return null === IY ? this.cellChunks.delete(AY) : (null === RY || void 0 === RY ? void 0 : RY.version) === IY ? (RY.seenAt = this.checks, !1) : (this.cellChunks.set(AY, {
          version: IY,
          seenAt: this.checks
        }), !0)
      }
      refresh(YY) {
        const rY = function(YY, rY) {
            const DY = new Set,
              FY = [];
            for (const {
                pos: AY,
                offsets: IY
              }
              of YY)
              for (const [YY, RY, OY] of IY) {
                const IY = AY[0] + YY,
                  gY = AY[1] + RY,
                  aY = AY[2] + OY,
                  vY = `${IY},${gY},${aY}`;
                DY.has(vY) || (DY.add(vY), rY(IY, gY, aY) && FY.push([IY, gY, aY]))
              }
            return FY
          }([...this.chunks.values()].flatMap((YY => YY.machines)), ((rY, DY, FY) => YY.isBlockInLoadedChunk(rY, DY, FY) && 0 === YY.getBlockId(rY, DY, FY))),
          DY = rY.join(";");
        DY !== this.shownKey && (this.shownKey = DY, this.clearMeshes(YY), rY.length > 0 && (this.meshes = [this.build(YY, rY, !1), this.build(YY, rY, !0)]))
      }
      build(YY, rY, DY) {
        const FY = rY[0],
          AY = [],
          IY = [];
        for (const [RY, OY, gY] of rY)(0, vW.c)(AY, IY, [RY - FY[0] + .5, OY - FY[1] + .5, gY - FY[2] + .5], WW, DY);
        return YY.createGameMesh({
          positions: AY,
          indices: IY
        }, {
          rgb: DY ? mW : EW,
          alpha: .4
        }, FY)
      }
      clearMeshes(YY) {
        for (const rY of this.meshes) YY.disposeGameMesh(rY);
        this.meshes = []
      }
    }
    const SW = 1 / .6,
      lW = 200,
      TW = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      eW = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      NW = 2 * Math.PI / 3;
    class BW {
      constructor() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : TW;
        this.style = YY, this.particles = null, this.points = new Float32Array(800), this.budget = lW, this.lastMs = 0
      }
      static blade() {
        return new BW(eW)
      }
      ZE(YY, rY) {
        const DY = Math.min(rY.arcStruck, rY.arcPoints.length);
        this.draw(YY, [rY.arcFrom, ...rY.arcPoints], rY.arcPoints.slice(0, DY))
      }
      onBlade(YY, rY) {
        const [DY, FY, AY] = rY.bladeCentre, [IY, RY] = rY.bladeFacing, OY = DY - 1.5 * IY, gY = AY - 1.5 * RY, aY = Math.atan2(RY, IY), vY = [];
        for (let uY = 0; uY <= 8; uY++) {
          const YY = aY - NW / 2 + NW * uY / 8;
          vY.push([OY + 2.5 * Math.cos(YY), FY, gY + 2.5 * Math.sin(YY)])
        }
        this.draw(YY, vY, rY.bladeStruck)
      }
      dispose() {
        var YY;
        null === (YY = this.particles) || void 0 === YY || YY.stop(), this.particles = null
      }
      draw(YY, rY, DY) {
        if (!YY.particlesEnabled() || rY.length < 2) return;
        const FY = performance.now();
        this.budget = Math.min(lW, this.budget + (FY - this.lastMs) / 1e3 * lW), this.lastMs = FY;
        const AY = [];
        let IY = 0,
          RY = rY[0];
        for (const WY of rY.slice(1)) {
          const YY = Math.min(48, Math.round(Math.hypot(WY[0] - RY[0], WY[1] - RY[1], WY[2] - RY[2]) * this.style.perBlock));
          AY.push([RY, WY, YY]), IY += YY, RY = WY
        }
        const OY = DY.length;
        IY += 10 * OY;
        const gY = IY > this.budget ? this.budget / IY : 1;
        if (0 === IY || gY * IY < 1) return;
        const aY = rY[0],
          [vY, uY, sY] = aY,
          iY = this.points;
        let yY = 0;
        const QY = (YY, rY, DY, FY) => {
          const AY = 4 * yY;
          iY[AY] = YY - vY, iY[AY + 1] = rY - uY, iY[AY + 2] = DY - sY, iY[AY + 3] = FY, yY++
        };
        AY.forEach(((YY, rY) => {
          let [DY, FY, AY] = YY;
          const IY = Math.min(Math.floor(AY * gY), lW - yY),
            RY = Math.hypot(FY[0] - DY[0], FY[1] - DY[1], FY[2] - DY[2]),
            OY = 0 === rY && RY > 0 ? Math.min(.5, .1 * RY) / RY : 0;
          for (let gY = 0; gY < IY; gY++) {
            const YY = OY + (gY + .5) / IY * (1 - OY);
            QY(DY[0] + (FY[0] - DY[0]) * YY, DY[1] + (FY[1] - DY[1]) * YY, DY[2] + (FY[2] - DY[2]) * YY, .15)
          }
        }));
        const oY = Math.floor(10 * gY);
        for (let WY = 0; WY < OY; WY++) {
          const [YY, rY, FY] = DY[WY];
          for (let DY = 0; DY < oY && yY < lW; DY++) QY(YY, rY, FY, 2.5)
        }
        this.budget -= yY, this.particles ??= YY.createParticles(function(YY) {
          const [rY, DY] = YY.colours;
          return {
            texture: "square_particle",
            gu: 400,
            minLifeTime: YY.life[0] / SW,
            maxLifeTime: YY.life[1] / SW,
            minSize: YY.size[0],
            maxSize: YY.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [rY[0], rY[1], rY[2], 1],
              maxColor: [DY[0], DY[1], DY[2], 1]
            }, {
              timeFraction: 1,
              minColor: [rY[0], rY[1], rY[2], 0],
              maxColor: [DY[0], DY[1], DY[2], 0]
            }],
            blendMode: BO.g.Add
          }
        }(this.style), {
          pos: aY
        }), this.particles.emitPoints(aY, iY, yY)
      }
    }
    const cW = new Set(["Sky Spring"]);

    function KW(YY, rY, DY) {
      const FY = YY.split("|")[0];
      return "Air" !== rY || DY || ! function(YY) {
        const rY = YY.split("|")[0];
        return void 0 !== tr[rY] || cW.has(rY)
      }(FY) ? null : YY
    }
    class HW {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(YY) {
        const rY = YY - this.lastTapAt >= 300;
        return this.lastTapAt = YY, rY
      }
    }
    class zW {
      constructor() {
        this.presses = new HW, this.predicted = null
      }
      tap(YY, rY) {
        const DY = this.presses.isNewPress(rY);
        return DY && (this.predicted = {
          station: YY,
          at: rY
        }), DY
      }
      consumeServerOpen(YY, rY) {
        const DY = this.predicted;
        return !(null === DY || DY.station !== YY || rY - DY.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class ZW {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(YY, rY) {
        return YY && (this.thrustAt = rY), rY - this.thrustAt < 200
      }
    }
    const CW = [.1, .05, .1],
      fW = {
        texture: "effect_5",
        gu: Math.ceil(48),
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
        blendMode: BO.g.OneOne
      };
    class jW {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new ZW, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      ZE(YY, rY) {
        for (const [DY, FY] of rY.baf2JetFlames) YY.isLocalPlayer(DY) || (FY ? this.lit.add(DY) : this.lit.delete(DY))
      }
      onAfterRender(YY, rY) {
        const DY = performance.now(),
          FY = this.hold.lit(this.selfThrusting(YY, rY), DY);
        for (const [AY, IY] of this.flames)(AY === rY ? FY : this.lit.has(AY)) || this.setEmitting(IY, !1), AY === rY || YY.getPositionView(AY) ? !IY.emitting && DY - IY.offAt >= 1300 && (IY.particles.stop(), this.flames.delete(AY)) : (IY.particles.dispose(), this.flames.delete(AY), this.lit.delete(AY));
        FY && this.draw(YY, rY, rY);
        for (const AY of this.lit) this.draw(YY, rY, AY)
      }
      dispose() {
        for (const YY of this.flames.values()) YY.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(YY, rY) {
        var DY;
        const FY = YY.getLocalPlayerMovement();
        return !!FY && (null !== (AY = {
          option: null !== (DY = YY.getClientOption(rY, "jumpHoldThrust")) && void 0 !== DY ? DY : null,
          jumping: FY.jumpHeld,
          onGround: FY.onGround,
          alive: YY.isAlive(rY)
        }).option && AY.option.maxUpSpeed >= 0 && AY.jumping && !AY.onGround && AY.alive);
        var AY
      }
      draw(YY, rY, DY) {
        var FY, AY;
        const IY = this.pos;
        if (!YY.readDrawnPosition(DY, IY)) return;
        const RY = YY.readDrawnPosition(rY, this.camera) ? this.camera : IY;
        if (!((IY[0] - RY[0]) ** 2 + (IY[1] - RY[1]) ** 2 + (IY[2] - RY[2]) ** 2 < 1600) || !YY.particlesEnabled()) {
          const YY = this.flames.get(DY);
          return void(YY && this.setEmitting(YY, !1))
        }
        const OY = null !== (FY = this.flames.get(DY)) && void 0 !== FY ? FY : this.create(YY, DY, IY),
          gY = null !== (AY = YY.getDrawnHeading(DY)) && void 0 !== AY ? AY : 0,
          aY = this.at;
        aY[0] = IY[0] - .35 * Math.sin(gY), aY[1] = IY[1] + 1.05, aY[2] = IY[2] - .35 * Math.cos(gY), OY.particles.moveTo(aY), this.setEmitting(OY, !0)
      }
      setEmitting(YY, rY) {
        YY.emitting !== rY && (YY.emitting = rY, rY || (YY.offAt = performance.now()), YY.particles.setEmitRate(rY ? 60 : 0))
      }
      create(YY, rY, DY) {
        const FY = {
          particles: YY.createParticles(fW, {
            pos: DY,
            half: CW
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(rY, FY), FY
      }
    }

    function hW(YY) {
      return "Reactor Frame" === PD("reactor", YY)
    }

    function dW(YY) {
      return zD("reactor", YY) && !hW(YY) && (YY.startsWith("Reactor Glass") || YY.startsWith("Reactor Port"))
    }
    const JW = "baf2Goal";
    class MW {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [NA.g.subscribe("setDirectionArrow", (YY => {
          let {
            id: rY,
            position: DY
          } = YY;
          rY === JW && (this.goal = DY, this.checkedAt = -1 / 0)
        })), NA.g.subscribe("clearDirectionArrow", (YY => {
          let {
            id: rY
          } = YY;
          null !== rY && rY !== JW || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const YY of this.subs) NA.g.unsubscribe(YY)
      }
      sideOf(YY, rY, DY, FY) {
        const AY = this.goal;
        if (!AY) return 0;
        DY - this.checkedAt > 1e3 && (this.checkedAt = DY, this.open = function(YY, rY) {
          const [DY, FY, AY] = YY.map(Math.floor);
          if (!dW(rY(DY, FY, AY))) return null;
          for (const [IY, RY] of [
              [1, 0],
              [0, 1]
            ]) {
            const YY = rY(DY + IY, FY, AY + RY),
              OY = rY(DY - IY, FY, AY - RY);
            if (hW(OY) && dW(YY)) return [IY, 0, RY];
            if (hW(YY) && dW(OY)) return [0 - IY, 0, 0 - RY]
          }
          return null
        }(AY, ((rY, DY, FY) => YY.blockIdToBlockName(YY.getBlockId(rY, DY, FY)))));
        const IY = this.open;
        if (!IY) return 0;
        const RY = FY(AY);
        if (Math.abs(RY.x - rY.x) > .05 || Math.abs(RY.y - rY.y) > .05) return 0;
        const OY = FY([AY[0] + IY[0], AY[1], AY[2] + IY[2]]).x - RY.x;
        return Math.abs(OY) < .3 ? 0 : OY > 0 ? 1 : -1
      }
    }
    class wW {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new MW, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.Ky = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.QE = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((YY => {
          for (const rY of YY) rY.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(rY.target, rY.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.Ky || this.clear()
        }, window.addEventListener("resize", this.QE)
      }
      onAfterRender(YY, rY) {
        var DY;
        this.api = YY, this.project = null !== (DY = null === rY || void 0 === rY ? void 0 : rY.projectWorldPosToScreenPos) && void 0 !== DY ? DY : null, this.queued || this.Ky || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.Ky = !0;
        for (const YY of this.moved.keys()) YY.style.transform = "";
        this.moved.clear();
        for (const YY of this.sideLabels.keys()) YY.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.QE)
      }
      clear() {
        for (const IY of this.moved.keys()) IY.isConnected || this.moved.delete(IY);
        for (const IY of this.sideLabels.keys()) IY.isConnected || this.sideLabels.delete(IY);
        if (0 === this.arrows.length) return;
        const YY = performance.now(),
          rY = YY - this.refreshedAt > 1e3;
        rY && (this.refreshedAt = YY, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const DY = this.trackerBox(),
          FY = this.barsBox(),
          AY = this.toastBox(rY);
        (DY || FY || AY) && rY && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let IY = 0; IY < this.arrows.length; IY++) {
          const rY = this.arrows[IY];
          this.labelOffsets.set(rY, this.runLabelAside(rY, YY));
          const RY = (DY ? this.shiftLeftOf(rY, DY) : 0) || this.shiftOnScreen(rY),
            OY = Math.min(FY ? this.liftAbove(rY, FY, RY) : 0, AY ? this.liftAbove(rY, AY, RY) : 0),
            gY = this.moved.get(rY);
          if (0 !== RY || 0 !== OY) {
            const YY = 0 === OY ? `translateX(${RY}px)` : `translate(${RY}px, ${OY}px)`;
            gY !== YY && (rY.style.transform = YY, this.moved.set(rY, YY))
          } else void 0 !== gY && (rY.style.transform = "", this.moved.delete(rY))
        }
      }
      trackerBox() {
        var YY, rY;
        const DY = null !== (YY = this.tracker) && void 0 !== YY && YY.isConnected ? this.tracker : null !== (rY = this.trackers[0]) && void 0 !== rY ? rY : null;
        if (DY !== this.tracker && this.watch(DY), this.boxStale && DY) {
          var FY, AY, IY;
          this.boxStale = !1;
          const YY = DY.closest(".NoRoom") ? null : DY.getBoundingClientRect(),
            rY = YY && YY.width > 0 ? null === (FY = this.hud) || void 0 === FY ? void 0 : FY.getBoundingClientRect() : void 0,
            RY = YY && rY ? Math.max(YY.top, rY.top) : null !== (AY = null === YY || void 0 === YY ? void 0 : YY.top) && void 0 !== AY ? AY : 0,
            OY = YY && rY ? Math.min(YY.bottom, rY.bottom) : null !== (IY = null === YY || void 0 === YY ? void 0 : YY.bottom) && void 0 !== IY ? IY : 0;
          this.box = YY && YY.width > 0 && OY > RY ? {
            left: YY.left,
            top: RY,
            right: YY.right,
            bottom: OY
          } : null
        }
        return DY ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var YY;
          this.barsStale = !1;
          const rY = null === (YY = this.statBars[0]) || void 0 === YY ? void 0 : YY.getBoundingClientRect();
          this.bars = rY && rY.width > 0 && rY.height > 0 ? {
            left: rY.left,
            top: rY.top,
            right: rY.right,
            bottom: rY.bottom
          } : null
        }
        return this.bars
      }
      toastBox(YY) {
        var rY;
        const DY = null !== (rY = this.toasts[0]) && void 0 !== rY ? rY : null;
        if (DY !== this.toastEl || YY && DY) {
          this.toastEl = DY;
          const YY = null === DY || void 0 === DY ? void 0 : DY.getBoundingClientRect();
          this.toast = YY && YY.width > 0 && YY.height > 0 ? {
            left: YY.left,
            top: YY.top,
            right: YY.right,
            bottom: YY.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(YY, rY, DY) {
        var FY;
        const AY = this.anchorOf(YY);
        if (!AY) return 0;
        const IY = AY.x + DY + (null !== (FY = this.labelOffsets.get(YY)) && void 0 !== FY ? FY : 0),
          {
            halfWidth: RY,
            labelled: OY
          } = this.extentOf(YY),
          gY = AY.y + this.em * (OY ? 6.2 : 3);
        return gY < rY.top - 6 || IY + RY < rY.left - 6 || IY - RY > rY.right + 6 ? 0 : rY.top - 6 - gY
      }
      watch(YY) {
        var rY, DY;
        this.tracker && this.sizes.unobserve(this.tracker), null === (rY = this.hud) || void 0 === rY || rY.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = YY, this.hud = null !== (DY = null === YY || void 0 === YY ? void 0 : YY.closest(".Baf2QuestHud")) && void 0 !== DY ? DY : null, this.box = null, this.boxStale = !0, YY && this.sizes.observe(YY), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(YY, rY) {
        var DY;
        const FY = this.anchorOf(YY);
        if (!FY) return 0;
        const {
          y: AY
        } = FY, IY = FY.x + (null !== (DY = this.labelOffsets.get(YY)) && void 0 !== DY ? DY : 0), RY = this.em, {
          halfWidth: OY,
          labelled: gY
        } = this.extentOf(YY), aY = AY - RY, vY = IY + OY;
        return AY + RY * (gY ? 6.2 : 3) < rY.top || aY > rY.bottom || vY < rY.left - 6 || IY - OY > rY.right ? 0 : Math.max(rY.left - 6 - vY, 6 - (IY - OY))
      }
      shiftOnScreen(YY) {
        var rY;
        const DY = this.anchorOf(YY);
        if (!DY) return 0;
        const {
          halfWidth: FY
        } = this.extentOf(YY), AY = DY.x + (null !== (rY = this.labelOffsets.get(YY)) && void 0 !== rY ? rY : 0), IY = AY + FY - (this.innerWidth - 6);
        return IY > 0 ? -IY : Math.max(0, 6 - (AY - FY))
      }
      runLabelAside(YY, rY) {
        var DY;
        let FY = null;
        for (let RY = 0; RY < YY.children.length; RY++) YY.children[RY].classList.contains("DirectionArrowLabel") && (FY = YY.children[RY]);
        if (!FY) return 0;
        const AY = YY.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(YY) : null,
          IY = (AY && this.api ? this.side.sideOf(this.api, {
            x: AY.x / this.innerWidth * 100,
            y: AY.y / this.innerHeight * 100
          }, rY, this.project) : 0) * this.halfWidthOf(FY);
        return IY !== (null !== (DY = this.sideLabels.get(FY)) && void 0 !== DY ? DY : 0) && (FY.style.transform = 0 === IY ? "" : `translateX(-50%) translateX(${IY}px)`, 0 === IY ? this.sideLabels.delete(FY) : this.sideLabels.set(FY, IY)), IY
      }
      extentOf(YY) {
        let rY = this.em,
          DY = !1;
        for (let FY = 0; FY < YY.children.length; FY++) {
          const AY = YY.children[FY],
            IY = AY.classList.contains("DirectionArrowLabel");
          DY ||= IY, (IY || AY.classList.contains("DirectionArrowDistance")) && (rY = Math.max(rY, this.halfWidthOf(AY)))
        }
        return {
          halfWidth: rY,
          labelled: DY
        }
      }
      halfWidthOf(YY) {
        let rY = this.halfWidths.get(YY);
        return void 0 === rY && (rY = YY.offsetWidth / 2, this.halfWidths.set(YY, rY), this.sizes.observe(YY), this.labels.add(YY)), rY
      }
      forgetGoneLabels() {
        for (const YY of this.labels) YY.isConnected || (this.sizes.unobserve(YY), this.halfWidths.delete(YY), this.labels.delete(YY))
      }
      anchorOf(YY) {
        const rY = YY.style.translate,
          DY = this.anchors.get(YY);
        if (DY && DY.translate === rY && DY.innerWidth === this.innerWidth && DY.innerHeight === this.innerHeight) return DY;
        const FY = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(rY);
        if (!FY) return null;
        const AY = {
          translate: rY,
          x: parseFloat(FY[1]) / 100 * this.innerWidth,
          y: parseFloat(FY[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(YY, AY), AY
      }
    }
    const bW = "Baf2ArrowText";

    function XW(YY, rY) {
      const DY = YY.rows.find((YY => YY.current));
      return CY(YY.tutorial) && null !== DY && void 0 !== DY && DY.item && hA(DY) && KY(DY.item).includes(rY) ? DY.item : null
    }
    const qW = new class {
      constructor(YY) {
        this.select = YY, this.picks = new Map
      }
      open(YY, rY, DY) {
        const FY = XW(rY, YY);
        null !== FY && this.Ps(YY, FY, DY)
      }
      follow(YY, rY) {
        if (OY())
          for (const [DY, {
              item: FY,
              had: AY
            }] of this.picks) {
            const IY = XW(YY, DY);
            IY !== FY && (null !== IY && rY(FY) > AY ? this.Ps(DY, IY, rY) : this.picks.delete(DY))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      Ps(YY, rY, DY) {
        this.picks.set(YY, {
          item: rY,
          had: DY(rY)
        }), this.select(YY, rY)
      }
    }(BA.j);

    function pW(YY) {
      return rY => {
        let DY = 0;
        for (const FY of YY.getInventoryItems())(null === FY || void 0 === FY ? void 0 : FY.name) === rY && (DY += null === FY.amount ? 1 : Math.max(FY.amount, 0));
        return DY
      }
    }

    function kW(YY, rY, DY, FY) {
      YY.getClientOption(rY, "canCraft") && "inventory" !== sA.b.get("openInGameMenuName") && (qW.open(DY, FY.get(), pW(YY)), NA.g.vo("toggleMenu", `inventory|${DY}`))
    }
    let GW = null,
      xW = !1;

    function nW(YY) {
      const rY = QI();
      YY === GW && rY === xW || (GW = YY, xW = rY, (0, BA.k)(function(YY, rY) {
        const DY = new Map;
        for (let FY = YY + 1; FY <= AY.length; FY++) {
          const AY = dI(FY, YY, rY);
          if (AY)
            for (const rY of WY(FY).unlocks) DY.set(rY, {
              ...AY,
              stepsAway: FY - YY
            })
        }
        return DY
      }(YY, rY)))
    }

    function PW() {
      return (0, BA.o)(hI(Object.keys(cY), zI)), () => {
        (0, BA.o)([])
      }
    }
    const UW = "buildAFactory2Game:",
      LW = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      tW = {
        on: `${UW}tutorialButtonOn`,
        hud: `${UW}tutorialButtonHud`,
        off: `${UW}tutorialButtonOff`
      },
      YE = {
        on: `${UW}tutorialPickedOn`,
        hud: `${UW}tutorialPickedHud`,
        off: `${UW}tutorialPickedOff`
      };

    function rE(YY, rY, DY) {
      let FY = null,
        AY = () => {};
      const IY = IY => {
        var RY;
        let {
          tutorial: OY,
          tutorialKnown: gY
        } = IY;
        (null === (RY = FY) || void 0 === RY ? void 0 : RY.tutorial) === OY && FY.tutorialKnown === gY || (FY = {
          tutorial: OY,
          tutorialKnown: gY
        }, AY = (0, vA.x)({
          id: "baf2Tutorial",
          order: -1,
          labelKey: tW[OY],
          icon: {
            kind: "icon",
            name: LW[OY]
          },
          iconOnly: !0,
          disabled: !gY,
          className: "Baf2TutorialButton",
          onClick: () => {
            var FY;
            (FY => {
              const AY = rY.setTutorial(FY);
              YY.send(`baf2tutorial ${FY} ${AY}`), DY.show({
                baf2ToastText: [(0, fY.Ud)({
                  translationKey: YE[FY]
                }, fY.K.whiteUiText)],
                baf2ToastMs: 3e3,
                baf2ToastStyle: "baf2ToastInfo"
              })
            })((FY = rY.get().tutorial, ZY[(ZY.indexOf(FY) + 1) % ZY.length]))
          }
        }))
      };
      IY(rY.get());
      const RY = NA.g.subscribe(cA, IY);
      return () => {
        NA.g.unsubscribe(RY), AY()
      }
    }

    function DE(YY, rY, DY) {
      var FY, AY;
      const IY = YY.getTargetedBlock();
      if (!IY || ! function(YY, rY, DY) {
          if ("Chest" !== rY) return !1;
          const FY = YY.split("|")[0];
          if (!DD(FY) || 0 === Br[FY].outputSlots.length) return !1;
          const AY = so(YY);
          return DY[0] === AY[0] && DY[1] === AY[1] && DY[2] === AY[2]
        }(DY, null === (FY = YY.rrY(rY)) || void 0 === FY ? void 0 : FY.name, IY.normal)) return !1;
      const [RY, OY, gY] = IY.bu, aY = YY.getBlockId(RY, OY, gY);
      return 0 === aY || !0 === (null === (AY = zY.h[aY]) || void 0 === AY ? void 0 : AY.canBePlacedOver)
    }
    var FE = DY(36151);
    const AE = new Set(gD.e);
    class IE {
      constructor(YY) {
        this.toasts = YY, this.lastAt = -1 / 0
      }
      onAltAction(YY, rY, DY) {
        const FY = YY.getTargetedBlock();
        if (!FY || function(YY) {
            const rY = YY.split("|")[0];
            return DD(rY) || null !== oF(rY) || NY(rY) || gD.e.includes(rY)
          }(DY) && !AE.has(DY.split("|")[0])) return;
        const AY = YY.rrY(rY);
        if (!AY || !AE.has(AY.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const IY = AY.typeObj.id,
          [RY, OY, gY] = FY.bu,
          aY = YY.getBlockId(RY, OY, gY),
          vY = zY.h[aY];
        (0 === aY || null !== vY && void 0 !== vY && vY.ui || null !== vY && void 0 !== vY && vY.canBePlacedOver) && YY.isSolidToPlayerBlockId(IY) && YY.canModifyBlockAt(RY, OY, gY) && YY.SYY(RY, OY, gY, IY) && !YY.SYY(RY, OY, gY, IY, rY) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, fY.Ud)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, fY.K.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class RE {
      constructor(YY) {
        this.show = YY, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(YY, rY, DY) {
        var FY;
        if (!rY) return this.started = null, void this.gatedThisHold.clear();
        if (!YY) return void(this.started = null);
        const AY = `${YY.x},${YY.y},${YY.z},${YY.ja}`;
        if (AY === this.started) return;
        this.started = AY;
        const IY = HF(YY.y) ? Po(YY.block, YY.ja, YY.level) : null;
        if (null === IY || this.gatedThisHold.has(AY)) return;
        this.gatedThisHold.add(AY);
        const RY = YY.block.split("|")[0];
        DY - (null !== (FY = this.hintedAt.get(RY)) && void 0 !== FY ? FY : -1 / 0) < 5e3 || (this.hintedAt.set(RY, DY), this.show({
          baf2ToastText: Uo(IY, YY.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var OE = DY(40);

    function gE(YY, rY) {
      const DY = [...YY.baf2CoreBankPaused];
      for (const [AY] of YY.baf2CoreBanked) DY.push(AY);
      for (const RY of AY) {
        for (const {
            item: YY
          }
          of RY.cost) DY.push(YY);
        for (const YY of RY.newDeposits) DY.push(YY.block);
        for (const YY of RY.unlocks) DY.push(YY, HY(YY));
        RY.reward && DY.push(RY.reward);
        for (const {
            item: YY
          }
          of null !== (FY = null === (IY = RY.charge) || void 0 === IY ? void 0 : IY.items) && void 0 !== FY ? FY : []) {
          var FY, IY;
          DY.push(YY)
        }
      }
      return {
        message: YY,
        itemNames: rY([...new Set(DY)])
      }
    }
    const aE = "baf2MultiblockGuide";
    const vE = new Map;
    const uE = function(YY, rY, DY, AY) {
      let {
        localPlayerId: IY
      } = AY;
      const RY = new gO,
        OY = new ps,
        aY = new Ls,
        vY = new Ps(aY),
        uY = (YY, rY) => {
          rY ? vY.observe(YY) : vY.unobserve(YY)
        },
        sY = new ns,
        iY = new Di(uY),
        yY = YY => iY.covers(YY),
        QY = new Si;
      let oY;
      const WY = new zR((YY => {
          oY.sendCommand(YY)
        })),
        EY = () => {
          WY.send("baf2questbook")
        },
        mY = YY => function(YY, rY, DY) {
          const FY = {};
          for (const AY of DY) {
            let DY = vE.get(AY);
            void 0 === DY && (DY = YY.getItemStat(rY, AY, "displayName"), vE.set(AY, DY)), FY[AY] = DY
          }
          return FY
        }(oY, IY, YY),
        VY = new zA(EY),
        SY = new Ci((() => sA.b.get("loadingOverlayVisible"))),
        lY = new Mi,
        TY = new IE(SY),
        eY = new RE((YY => {
          SY.show(YY, YY.baf2ToastMs)
        })),
        BY = new Pi(uY),
        cY = new So(BY),
        KY = new oR,
        HY = new Go,
        ZY = new xR,
        CY = new Fy({
          read: () => !1 !== OE.m.getItem(aE),
          write: YY => {
            OE.m.setItem(aE, YY)
          }
        }),
        hY = new Hy(CY),
        dY = new Cy(CY),
        JY = new rQ(CY, (YY => function(YY, rY) {
          const DY = pO(rY.w, rY.h, rY.d),
            FY = new Uint8Array(DY);
          for (let AY = 0; AY < DY; AY++) {
            const DY = ey(YY, pD(rY, nD(rY, AY)));
            FY[AY] = null === DY ? 0 : wO(DY)
          }
          return FY
        }(oY, YY)), ky(WY)),
        MY = new DQ(CY, ky(WY)),
        wY = new ty,
        bY = (YY, rY) => {
          let [DY, FY, AY] = YY;
          wY.answered(rY) || SY.show({
            baf2ToastText: [(0, fY.Ud)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: DY,
                h: FY,
                d: AY
              }
            }, fY.K.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      JY.onSizeNotTaken(bY), MY.onSizeNotTaken(bY);
      const pY = new RQ,
        kY = new MQ(CY),
        GY = new bQ,
        nY = new tQ(GY),
        PY = new vo,
        UY = new To,
        tY = new fo(UY),
        Yr = new ko(UY),
        rr = UY.lookSource(),
        Dr = new OW({
          handles: YY => rr.handles(YY) || YY === jY,
          line: (YY, rY) => YY === jY ? function(YY, rY, DY) {
            var FY;
            const AY = qY(null === (FY = rY.at(DY)) || void 0 === FY ? void 0 : FY.item);
            return null === AY ? {
              key: `${AW}lookFarmEmpty`
            } : {
              key: YY.blockIdToBlockName(YY.getBlockId(DY[0], DY[1], DY[2])).endsWith("|Running") ? `${AW}lookFarmRunning` : `${AW}lookFarmWaiting`,
              keys: {
                mob: XY(AY)
              }
            }
          }(oY, BY, rY) : rr.line(YY, rY),
          version: () => rr.version() + BY.version()
        }, (YY => jy(CY.all(), YY, (YY => ey(oY, YY)))), (() => VY.get().tier)),
        Fr = new TQ,
        Ir = new VW,
        Rr = new BW,
        Or = BW.blade(),
        gr = new jW,
        ar = new Xi,
        vr = new wW,
        ur = new zW,
        sr = new HW;
      let ir = -1 / 0,
        yr = 0,
        Qr = -1 / 0,
        or = -1 / 0;
      const Wr = () => {
          WY.send("baf2islandsclose"), or = Date.now()
        },
        Er = [];

      function mr(YY) {
        var rY, DY, FY, AY, IY, RY, gY;
        "core" === (null === (rY = OY.get()) || void 0 === rY ? void 0 : rY.kind) && "core" !== (null === YY || void 0 === YY ? void 0 : YY.kind) && WY.send("baf2coreclose"), "power" === (null === (DY = OY.get()) || void 0 === DY ? void 0 : DY.kind) && "power" !== (null === YY || void 0 === YY ? void 0 : YY.kind) && WY.send("baf2powerclose"), "water" === (null === (FY = OY.get()) || void 0 === FY ? void 0 : FY.kind) && "water" !== (null === YY || void 0 === YY ? void 0 : YY.kind) && WY.send(LY.w), "terminal" === (null === (AY = OY.get()) || void 0 === AY ? void 0 : AY.kind) && "terminal" !== (null === YY || void 0 === YY ? void 0 : YY.kind) && WY.send("baf2terminalclose"), "islands" === (null === (IY = OY.get()) || void 0 === IY ? void 0 : IY.kind) && "islands" !== (null === YY || void 0 === YY ? void 0 : YY.kind) && Wr();
        const aY = UY.getStatus();
        "collider" === (null === (RY = OY.get()) || void 0 === RY ? void 0 : RY.kind) && "collider" !== (null === YY || void 0 === YY ? void 0 : YY.kind) && aY && WY.send(cg(aY, "close"));
        const vY = YY => "reactor" === YY || "battery" === YY;
        if (vY(null === (gY = OY.get()) || void 0 === gY ? void 0 : gY.kind) && !vY(null === YY || void 0 === YY ? void 0 : YY.kind)) {
          var uY, sY, iY;
          const YY = "reactor" === (null === (uY = OY.get()) || void 0 === uY ? void 0 : uY.kind) ? null === (sY = JY.get()) || void 0 === sY ? void 0 : sY.status.baf2RxAt : null === (iY = MY.get()) || void 0 === iY ? void 0 : iY.status.baf2BatAt;
          YY && WY.send(Ar(YY, "close"))
        }
        "quests" === (null === YY || void 0 === YY ? void 0 : YY.kind) && EY(), OY.set(YY), null === YY && lY.release()
      }

      function Sr() {
        (0, uA.f)(), mr(null)
      }
      let lr = new Set,
        Tr = !1;
      const er = {
        onCreate: YY => {
          oY = YY, oY.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const rY of Vr) {
            const YY = Br[rY].inputSlots ? TO(RY) : VO(rY, RY, KY, WY);
            Er.push((0, aA.f)(rY, YY))
          }
          Er.push((0, uA.q)((0, FY.createElement)(FY.Fragment, null, (0, FY.createElement)(Ii, {
            controller: iY
          }), (0, FY.createElement)(ti, {
            store: BY
          }), (0, FY.createElement)(aW, {
            store: Dr
          }), (0, FY.createElement)(zi, {
            store: VY
          }), (0, FY.createElement)(di, {
            store: SY
          }), (0, FY.createElement)(wi, {
            store: lY
          }), (0, FY.createElement)(ki, {
            store: ar
          }), (0, FY.createElement)(IQ, {
            store: pY
          }), (0, FY.createElement)(XQ, {
            store: GY
          })), {
            content: (0, FY.createElement)(ks, {
              commands: WY,
              store: OY,
              power: KY,
              water: ZY,
              reactor: JY,
              battery: MY,
              collider: UY,
              terminal: HY,
              quests: VY,
              close: uA.h,
              leave: () => {
                lY.dropHeld(), (0, uA.f)()
              },
              askIslands: () => {
                or = -1 / 0, ir = Date.now(), yr = WY.send(xY)
              },
              openSocial: () => {
                (0, uA.f)(), sA.b.set({
                  openEverythingMenuName: AD.t.SOCIAL
                })
              },
              showCore: YY => {
                mr({
                  kind: "core",
                  core: YY
                }), WY.send("baf2corereopen")
              }
            }),
            onClose: () => {
              mr(null)
            }
          })), Er.push((0, vA.x)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              mr({
                kind: "quests"
              }), (0, uA.o)()
            }
          })), Er.push(rE(WY, VY, SY)), Tr = !1, Er.push(oI((() => {
            null !== GW && nW(GW)
          }))), Er.push(PW()), Er.push(function() {
            const YY = NA.g.subscribe(cA, pA),
              rY = () => {
                if (qA) {
                  const YY = qA;
                  qA = null, (0, BA.l)(YY)
                }
              },
              DY = NA.g.subscribe("toggleMenu", (YY => {
                "inventory" === (null === YY || void 0 === YY ? void 0 : YY.split("|")[0]) && rY()
              })),
              FY = NA.g.subscribe("appManagerUpdated|openInGameMenuName", (YY => {
                "inventory" === YY && rY()
              }));
            return () => {
              NA.g.unsubscribe(YY), NA.g.unsubscribe(DY), NA.g.unsubscribe(FY)
            }
          }()), Er.push(function(YY) {
            const rY = pW(YY),
              DY = NA.g.subscribe(cA, (YY => {
                qW.follow(YY, rY)
              }));
            return () => {
              NA.g.unsubscribe(DY), qW.clear()
            }
          }(oY)), Er.push(function() {
            const YY = document.documentElement,
              rY = (0, Ti.c)(".InvenBodyRight", [], (() => {
                const rY = document.querySelector(".InvenBodyRight");
                rY && YY.style.setProperty("--baf2-backpack-width", `${rY.offsetWidth}px`)
              }));
            return () => {
              rY(), YY.style.removeProperty("--baf2-backpack-width")
            }
          }()), Er.push(function() {
            const YY = document.documentElement;
            return YY.classList.add(bW), () => {
              YY.classList.remove(bW)
            }
          }()), Er.push((() => {
            vY.dispose(), aY.dispose()
          })), QY.start(oY), Er.push((() => {
            QY.dispose(), gr.dispose(), cY.dispose()
          }))
        },
        onClose: () => {
          (0, BA.l)([]), qA = null, XA = new Set, GW = null, (0, BA.k)(new Map), vE.clear();
          for (const YY of Er) YY();
          VY.dispose(), Dr.dispose(), SY.dispose(), lY.dispose(), Fr.dispose(), Ir.dispose(oY), hY.dispose(oY), dY.dispose(oY), kY.dispose(oY), nY.dispose(oY), GY.dispose(), PY.dispose(), CY.dispose(), JY.dispose(), MY.dispose(), pY.dispose(), Rr.dispose(), Or.dispose(), ar.dispose(), tY.dispose(oY), Yr.dispose(oY), UY.dispose(), vr.dispose(), WY.clear()
        },
        onAfterRender: (YY, rY) => {
          var DY, FY, AY;
          try {
            QY.onAfterRender(rY)
          } catch (aY) {
            console.error("Error drawing BAF2 belt items", aY)
          }
          try {
            gr.onAfterRender(oY, IY)
          } catch (aY) {
            console.error("Error drawing BAF2 jet flames", aY)
          }
          Tr || (Tr = !0, WY.send("baf2clientready"));
          const RY = oY.getPositionView(IY);
          iY.onAfterRender(rY, RY, sY), BY.onAfterRender(rY, RY, sY, yY), vY.run(sY), Fr.onAfterRender(oY, RY), Ir.onAfterRender(oY, RY), cY.onAfterRender(oY, RY), hY.onAfterRender(oY, RY), dY.onAfterRender(oY, IY, RY), kY.onAfterRender(oY, IY, RY), nY.onAfterRender(oY, IY), PY.onAfterRender(oY, RY), VY.onPlayerY(RY[1]), tY.onAfterRender(oY), Yr.onAfterRender(oY, IY, RY);
          const gY = oY.getTargetedBlock();
          Dr.onAfterRender(oY, IY, null !== (DY = null === gY || void 0 === gY ? void 0 : gY.aG) && void 0 !== DY ? DY : 0, null !== (FY = null === gY || void 0 === gY ? void 0 : gY.position) && void 0 !== FY ? FY : null), vr.onAfterRender(oY, rY), eY.onMining(function(YY, rY) {
            var DY, FY;
            const AY = YY.getMiningBlock();
            if (!AY) return null;
            const IY = (0, zY.f)(YY.getBlockId(AY[0], AY[1], AY[2])),
              RY = null !== (DY = null === (FY = YY.rrY(rY)) || void 0 === FY ? void 0 : FY.name) && void 0 !== DY ? DY : null,
              OY = YY.getItemStat(rY, IY.split("|")[0], "harvestLevel");
            return {
              block: IY,
              x: AY[0],
              y: AY[1],
              z: AY[2],
              ja: RY,
              level: OY
            }
          }(oY, IY), oY.isMining(), performance.now()), "dropMap" === (null === (AY = OY.get()) || void 0 === AY ? void 0 : AY.kind) && HF(RY[1]) && Sr()
        },
        onPlayerChangeBlock: (YY, rY, DY, FY, AY, RY) => {
          YY === IY && function(YY, rY, DY, FY, AY, IY, RY) {
            const OY = KW(IY, RY, YY.isPlayerCrouching(rY));
            if (null === OY) return;
            if (YY.Rl(DY, FY, AY, OY), !YY.getClientOption(rY, "canPickUpItems")) return;
            const gY = tr[OY.split("|")[0]];
            var aY, vY, uY;
            void 0 !== gY && (aY = YY.getInventoryItems(), vY = gY, uY = Ay.d.maxItemStackSize, YY.getInventoryFreeSlotCount(rY) > 0 || aY.some((YY => null !== YY && YY.name === vY && null !== YY.amount && YY.amount < uY))) && YY.playSound(rY, (0, FE.d)("pickUp"), .5, 1)
          }(oY, YY, rY, DY, FY, AY, RY)
        },
        onPlayerAltAction: (YY, rY, DY, FY, AY) => {
          var RY, OY;
          if (!oY.getClientOption(IY, "canPickUpItems")) return;
          const gY = null !== (RY = null === (OY = oY.rrY(IY)) || void 0 === OY ? void 0 : OY.name) && void 0 !== RY ? RY : null,
            aY = function(YY, rY) {
              const DY = YY.split("|")[0];
              return NY(DY) && rY !== YA && "Sky Pack" !== rY ? DY : null
            }(AY, gY);
          if (null !== aY) return void(ur.tap(aY, performance.now()) && kW(oY, IY, aY, VY));
          if (!fF(gY)) return;
          const vY = sr.isNewPress(performance.now()),
            uY = function(YY, rY, DY) {
              return !fF(rY) || DY ? null : qF(YY)
            }(AY, gY, oY.isPlayerCrouching(IY));
          null !== uY && vY && oY.Rl(rY, DY, FY, uY)
        },
        onPlayerAttemptAltAction: (YY, rY, DY, FY, AY) => {
          if (function(YY, rY, DY, FY, AY) {
              "Workbench" === FY.split("|")[0] && YY.getClientOption(DY, "canCraft") && (qW.open("Workbench", AY.get(), pW(YY)), rY.send("baf2station Workbench"))
            }(oY, WY, IY, AY, VY), DE(oY, IY, AY)) return "preventAction";
          TY.onAltAction(oY, IY, AY)
        },
        onReceivedMessageFromServer: (YY, rY) => {
          if ("baf2MachineStatus" === YY) {
            var DY, FY, AY, aY, vY, uY, sY, yY, EY, TY, eY, NY, cY, zY, fY, jY;
            const YY = rY,
              IY = YY.baf2MachineTaught;
            RY.set(YY.baf2MachinePos, {
              status: YY.baf2MachineStatus,
              power: null !== (DY = YY.baf2MachinePower) && void 0 !== DY ? DY : null,
              opLeftMs: null !== (FY = YY.baf2MachineOpLeftMs) && void 0 !== FY ? FY : null,
              dug: YY.baf2MachineYield ? {
                item: YY.baf2MachineYield,
                name: mY([YY.baf2MachineYield])[YY.baf2MachineYield]
              } : null,
              powerCap: null !== (AY = YY.baf2MachinePowerCap) && void 0 !== AY ? AY : null,
              powerRates: null !== (aY = YY.baf2MachinePowerRates) && void 0 !== aY ? aY : null,
              coupled: !0 === YY.baf2MachineCoupled,
              couplerLevel: null !== (vY = YY.baf2MachineCoupler) && void 0 !== vY ? vY : 1,
              taught: IY,
              taughtName: IY ? mY([IY])[IY] : null,
              tier: null !== (uY = YY.baf2MachineTier) && void 0 !== uY ? uY : null,
              input: null !== (sY = YY.baf2MachineInput) && void 0 !== sY ? sY : null,
              inertCoupler: null !== (yY = YY.baf2MachineInertCoupler) && void 0 !== yY ? yY : null,
              inputShort: null !== (EY = YY.baf2MachineInputShort) && void 0 !== EY ? EY : null,
              field: null !== (TY = YY.baf2MachineField) && void 0 !== TY ? TY : null,
              noSeeds: !0 === YY.baf2MachineNoSeeds,
              fuelFed: !0 === YY.baf2MachineFuelFed,
              fuelFeeds: !0 === YY.baf2MachineFuelFeeds,
              coreFull: !0 === YY.baf2MachineCoreFull,
              waterUnpowered: !0 === YY.baf2MachineWaterUnpowered,
              powerShort: !0 === YY.baf2MachinePowerShort,
              powerWait: !0 === YY.baf2MachinePowerWait,
              reactorPowered: !0 === YY.baf2MachineReactorPowered,
              fuelLeftMs: null !== (eY = YY.baf2MachineFuelLeftMs) && void 0 !== eY ? eY : null,
              burning: null !== (NY = YY.baf2MachineBurning) && void 0 !== NY ? NY : null,
              fuelKeep: null !== (cY = YY.baf2MachineFuelKeep) && void 0 !== cY ? cY : null,
              water: null !== (zY = YY.baf2MachineWater) && void 0 !== zY ? zY : null,
              farm: null !== (fY = YY.baf2MachineFarm) && void 0 !== fY ? fY : null,
              cryo: null !== (jY = YY.baf2MachineCryo) && void 0 !== jY ? jY : null
            })
          } else if ("baf2StationOpen" === YY) {
            const YY = rY.baf2Station;
            ur.consumeServerOpen(YY, performance.now()) || kW(oY, IY, YY, VY)
          } else if ("baf2Power" === YY) {
            const YY = rY;
            KY.set(YY), YY.baf2PowerOpen && (mr({
              kind: "power"
            }), (0, uA.o)())
          } else if (YY === LY.C) {
            const YY = rY;
            ZY.set(YY), YY.baf2WaterOpen && (mr({
              kind: "water"
            }), (0, uA.o)())
          } else if ("baf2RxPlans" === YY) {
            var hY, dY, bY;
            const YY = rY;
            CY.ZE(YY);
            const DY = new Set(YY.baf2RxPlanList.map((YY => {
              let [rY, DY, FY] = YY;
              return `${rY},${DY},${FY}`
            })));
            pY.retain(DY);
            const FY = null === (hY = OY.get()) || void 0 === hY ? void 0 : hY.kind,
              AY = "reactor" === FY ? null === (dY = JY.get()) || void 0 === dY ? void 0 : dY.status.baf2RxAt : "battery" === FY ? null === (bY = MY.get()) || void 0 === bY ? void 0 : bY.status.baf2BatAt : void 0;
            AY && lr.has(AY.join(",")) && !DY.has(AY.join(",")) && Sr(), lr = DY
          } else if ("baf2RxStatus" === YY) {
            const YY = rY;
            JY.set(YY), YY.baf2RxOpen && (mr({
              kind: "reactor"
            }), (0, uA.o)())
          } else if ("baf2BatStatus" === YY) {
            const YY = rY;
            MY.set(YY), YY.baf2BatOpen && (mr({
              kind: "battery"
            }), (0, uA.o)())
          } else if ("baf2RxAlarm" === YY) pY.ZE(rY);
          else if ("baf2Bomb" === YY) GY.ZE(rY, oY.getPositionView(IY));
          else if ("baf2Fallout" === YY) PY.ZE(rY);
          else if ("baf2ColBeams" === YY) UY.onBeams(rY);
          else if ("baf2ColStatus" === YY) {
            const YY = rY;
            var XY, qY;
            if (UY.onStatus(YY), YY.baf2ColOpen) UY.onOpen(null !== (XY = null === (qY = oY.rrY(IY)) || void 0 === qY ? void 0 : qY.name) && void 0 !== XY ? XY : null), mr({
              kind: "collider"
            }), (0, uA.o)()
          } else if ("baf2Terminal" === YY) {
            const YY = rY;
            var kY;
            if (HY.apply(YY)) YY.baf2TermReset && (mr({
              kind: "terminal"
            }), (0, uA.o)());
            else "terminal" === (null === (kY = OY.get()) || void 0 === kY ? void 0 : kY.kind) && (OY.set(null), (0, uA.f)())
          } else if ("baf2Core" === YY) {
            var nY;
            const YY = rY;
            if (gY(!0 === YY.baf2CoreNuclear), function(YY, rY) {
                return "core" === (null === YY || void 0 === YY ? void 0 : YY.kind) && rY.baf2CoreTier > YY.core.message.baf2CoreTier
              }(OY.get(), YY)) return void(0, uA.f)();
            if (YY.baf2CoreRefresh && "core" !== (null === (nY = OY.get()) || void 0 === nY ? void 0 : nY.kind)) return;
            mr({
              kind: "core",
              core: gE(YY, mY)
            }), YY.baf2CoreRefresh || (0, uA.o)()
          } else if ("baf2WrenchUndo" === YY) {
            const {
              baf2WrenchPos: YY,
              baf2WrenchBlock: DY
            } = rY;
            oY.Rl(YY[0], YY[1], YY[2], DY)
          } else if ("baf2Toast" === YY) {
            const YY = rY;
            wY.heard(performance.now(), YY.baf2ToastMs), SY.show(YY)
          } else if ("baf2Area" === YY) lY.arrive(rY, null !== OY.get());
          else if ("baf2Quest" === YY) {
            const YY = rY;
            gY(!0 === YY.baf2QuestNuclear), VY.set(YY, function(YY, rY) {
              var DY, FY, AY, IY, RY;
              const OY = [];
              for (const [, , vY, , , , , , uY, sY] of YY.baf2QuestSteps) null !== vY && OY.push(vY), OY.push(...null !== uY && void 0 !== uY ? uY : [], ...null !== sY && void 0 !== sY ? sY : []);
              YY.baf2QuestReward && OY.push(YY.baf2QuestReward);
              const gY = null === (DY = YY.baf2QuestSide) || void 0 === DY ? void 0 : DY[2][2];
              gY && OY.push(gY), OY.push(...null !== (FY = null === (AY = YY.baf2QuestSide) || void 0 === AY ? void 0 : AY[2][8]) && void 0 !== FY ? FY : [], ...null !== (IY = null === (RY = YY.baf2QuestSide) || void 0 === RY ? void 0 : RY[2][9]) && void 0 !== IY ? IY : []);
              for (const [vY] of null !== (aY = YY.baf2QuestAlso) && void 0 !== aY ? aY : []) {
                var aY;
                OY.push(vY)
              }
              return rY(OY)
            }(YY, mY)), nW(YY.baf2QuestTier)
          } else if ("baf2Route" === YY) ! function(YY, rY) {
            let {
              baf2RouteCells: DY,
              baf2RouteInto: FY
            } = rY;
            0 !== DY.length && FY ? YY.setRouteChevrons({
              cells: DY.map(((YY, rY) => {
                const [AY, , IY] = function(YY, rY, DY) {
                  const FY = DY + 1 < YY.length ? YY[DY + 1] : rY;
                  return [FY[0] - YY[DY][0], 0, FY[2] - YY[DY][2]]
                }(DY, FY, rY);
                return {
                  pos: YY,
                  way: [AY, IY]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : YY.setRouteChevrons(null)
          }(oY, rY);
          else if ("baf2QuestBook" === YY) VY.setBook(rY);
          else if ("baf2Stalls" === YY) iY.set(rY.baf2StallCells);
          else if (YY === gD.o) QY.onMoves(rY);
          else if (YY === gD.l) QY.onLines(rY);
          else if ("baf2Labels" === YY) BY.ZE(rY);
          else if ("baf2DropMap" === YY) mr({
            kind: "dropMap",
            dropMap: rY
          }), (0, uA.o)();
          else if ("baf2Islands" === YY) {
            var tY, Yr;
            const YY = rY;
            if (WY.syncIslandEdits(YY.baf2IslandsAnswered), !YY.baf2IslandsOpen && "islands" !== (null === (tY = OY.get()) || void 0 === tY ? void 0 : tY.kind)) return;
            if (YY.baf2IslandsOpen) {
              var rr, Dr;
              const rY = sA.b.get("openEverythingMenuName"),
                DY = WY.sent() >= yr,
                FY = "other" !== (Er = {
                  askedAtMs: ir,
                  askSent: DY,
                  reaskedAtMs: Qr,
                  nowMs: Date.now(),
                  panel: null !== (rr = null === (Dr = OY.get()) || void 0 === Dr ? void 0 : Dr.kind) && void 0 !== rr ? rr : null,
                  inGameMenu: sA.b.get("openInGameMenuName"),
                  everythingMenu: null === rY ? null : rY === AD.t.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== YY.baf2IslandsFocusInvite
                }).everythingMenu && (!!Er.focusInvite || "islands" === Er.panel && "clientGame" === Er.inGameMenu || !(Er.nowMs - Er.reaskedAtMs < Ta) && (Er.askSent && Er.nowMs - Er.askedAtMs < Ta ? "core" === Er.panel && "clientGame" === Er.inGameMenu && null === Er.everythingMenu : "shop" === Er.everythingMenu || null === Er.inGameMenu));
              if (DY && (ir = -1 / 0), Qr = -1 / 0, !FY) return void Wr()
            }
            const DY = (Ar = YY.baf2IslandsOpen, Ir = "islands" === (null === (Yr = OY.get()) || void 0 === Yr ? void 0 : Yr.kind), vr = or, sr = Date.now(), Ar && !Ir && sr - vr < Ta);
            mr({
              kind: "islands",
              islands: YY,
              arrivedAtMs: Date.now(),
              backToCore: ea(OY.get())
            }), DY && (or = -1 / 0, Qr = Date.now(), WY.send(xY)), YY.baf2IslandsOpen && ("clientGame" !== sA.b.get("openInGameMenuName") && (0, iA.e)(), (0, uA.o)())
          } else if ("baf2CoopTransfer" === YY) {
            var Fr;
            const YY = rY;
            YY.baf2TransferOn ? (mr({
              kind: "transfer",
              transfer: YY,
              arrivedAtMs: Date.now()
            }), (0, uA.o)()) : "transfer" === (null === (Fr = OY.get()) || void 0 === Fr ? void 0 : Fr.kind) && (0, uA.f)()
          } else "baf2IslandLeft" === YY ? (lY.dropHeld(), null !== OY.get() && Sr(), "inventory" === sA.b.get("openInGameMenuName") && (0, iA.e)()) : "baf2Arc" === YY ? Rr.ZE(oY, rY) : "baf2Blade" === YY ? Or.onBlade(oY, rY) : "baf2JetFlame" === YY ? gr.ZE(oY, rY) : "baf2GearPower" === YY && ar.ZE(rY);
          var Ar, Ir, vr, sr, Er
        }
      };
      return er
    }
  },
  37888: (YY, rY, DY) => {
    function FY(YY, rY, DY) {
      const FY = new Set,
        AY = new ResizeObserver(DY),
        IY = () => {
          const rY = new Set(document.querySelectorAll(YY));
          let IY = !1;
          for (const YY of FY) rY.has(YY) || (AY.unobserve(YY), FY.delete(YY), IY = !0);
          for (const YY of rY) FY.has(YY) || (AY.observe(YY), RY.observe(YY, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), FY.add(YY));
          IY && DY()
        },
        RY = new MutationObserver((rY => {
          rY.some((YY => "attributes" === YY.type)) && DY(), rY.some((rY => function(YY, rY, DY) {
            if ("childList" !== YY.type) return !1;
            for (const FY of YY.addedNodes)
              if (FY instanceof Element && (FY.matches(rY) || FY.querySelector(rY))) return !0;
            for (const FY of YY.removedNodes)
              if (FY instanceof Element)
                for (const YY of DY)
                  if (FY.contains(YY)) return !0;
            return !1
          }(rY, YY, FY))) && IY()
        }));
      RY.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const OY of rY) AY.observe(OY);
      return window.addEventListener("resize", DY), IY(), DY(), () => {
        AY.disconnect(), RY.disconnect(), window.removeEventListener("resize", DY)
      }
    }
    DY.d(rY, {
      c: () => FY
    })
  },
  37879: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => RY,
      g: () => IY
    });
    const FY = new WeakMap;

    function AY(YY) {
      let rY = FY.get(YY);
      return rY || (rY = {
        hidden: YY.hidden,
        x: NaN,
        y: NaN
      }, FY.set(YY, rY)), rY
    }

    function IY(YY, rY) {
      const DY = AY(YY);
      DY.hidden !== rY && (DY.hidden = rY, YY.hidden = rY)
    }

    function RY(YY, rY, DY) {
      const FY = AY(YY);
      FY.x === rY && FY.y === DY || (FY.x = rY, FY.y = DY, YY.style.translate = `${rY}vw ${DY}vh`)
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);