export const id = 263;
export const ids = [263];
export const modules = {
  39285: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => AU
    });
    var cU = zU(39293);
    const yU = [0, 0, 0];
    class QU {
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yU;
        this.pool = UU, this.origin = XU, this.count = 0, this.free = []
      }
      take() {
        var UU;
        const XU = null !== (UU = this.free.pop()) && void 0 !== UU ? UU : this.count++;
        return XU >= this.pool.xY && this.pool.grow(Math.max(2 * this.pool.xY, XU + 1)), this.hide(XU), XU
      }
      release(UU) {
        this.hide(UU), this.free.push(UU)
      }
      write(UU, XU, zU, yU) {
        const {
          records: QU
        } = this.pool, {
          origin: AU
        } = this, FU = UU * cU.e;
        QU[FU] = XU - AU[0], QU[FU + 1] = zU - AU[1], QU[FU + 2] = yU - AU[2], QU[FU + cU.h] = 0, this.pool.markDirty(UU)
      }
      hide(UU) {
        this.pool.records[UU * cU.e + cU.h] = 1, this.pool.markDirty(UU)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class AU {
      constructor(UU, XU, zU) {
        this.api = UU, this.model = XU, this.initialCapacity = zU, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(UU) {
        let XU = this.kinds.get(UU);
        if (void 0 === XU) {
          const zU = this.api.createInstancePool({
            ...this.model,
            item: UU
          }, this.initialCapacity);
          null === zU || void 0 === zU || zU.setOrigin(this.origin[0], this.origin[1], this.origin[2]), XU = zU && new QU(zU, this.origin), this.kinds.set(UU, XU)
        }
        return XU
      }
      follow(UU) {
        const {
          origin: XU
        } = this;
        if (Math.abs(UU[0] - XU[0]) <= 512 && Math.abs(UU[1] - XU[1]) <= 512 && Math.abs(UU[2] - XU[2]) <= 512) return !1;
        XU[0] = Math.floor(UU[0]), XU[1] = Math.floor(UU[1]), XU[2] = Math.floor(UU[2]);
        for (const zU of this.kinds.values()) null === zU || void 0 === zU || zU.pool.setOrigin(XU[0], XU[1], XU[2]);
        return !0
      }
      commit() {
        for (const UU of this.kinds.values()) null === UU || void 0 === UU || UU.commit()
      }
      dispose() {
        for (const UU of this.kinds.values()) null === UU || void 0 === UU || UU.dispose();
        this.kinds.clear()
      }
    }
  },
  39299: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => AU,
      d: () => FU,
      g: () => oU
    });
    const cU = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      yU = [0, 1, 2, 0, 2, 3],
      QU = [4, 5];

    function AU(UU, XU, zU, cU, yU) {
      for (let AU = 0; AU < 6; AU++) QU.includes(AU) === yU && DU(UU, XU, zU, cU, AU)
    }

    function FU(UU, XU, zU, cU) {
      for (let yU = 0; yU < 6; yU++) DU(UU, XU, zU, cU, yU)
    }

    function oU(UU, XU, zU, QU, AU) {
      for (let FU = 0; FU < 6; FU++)
        for (const oU of [0, 1]) {
          const [DU, EU, YU] = [oU + 2, oU + 1, (oU + 3) % 4], NU = UU.length / 3;
          for (const [XU, yU] of [
              [oU, EU],
              [DU, EU],
              [DU, YU],
              [oU, YU]
            ])
            for (let oU = 0; oU < 3; oU++) {
              const DU = cU[3 * (4 * FU + XU) + oU],
                EU = cU[3 * (4 * FU + yU) + oU];
              UU.push((DU + (EU - DU) * AU) * QU / 2 + zU[oU])
            }
          for (const UU of yU) XU.push(NU + UU)
        }
    }

    function DU(UU, XU, zU, QU, AU) {
      let [FU, oU, DU] = zU, [EU, YU, NU] = QU;
      const IU = UU.length / 3;
      for (let yU = 4 * AU; yU < 4 * AU + 4; yU++) UU.push(cU[3 * yU] * EU / 2 + FU, cU[3 * yU + 1] * YU / 2 + oU, cU[3 * yU + 2] * NU / 2 + DU);
      for (const cU of yU) XU.push(IU + cU)
    }
  },
  39269: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      default: () => Ik
    });
    var cU = zU(61);
    const yU = [{
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
      QU = 10;
    let AU = !0;

    function FU() {
      return AU
    }

    function oU(UU) {
      AU = UU
    }
    const DU = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function EU() {
      return AU ? yU.length : QU
    }

    function YU(UU) {
      var XU, zU;
      return null !== (XU = null === (zU = yU[UU - 1]) || void 0 === zU ? void 0 : zU.reactorTier) && void 0 !== XU ? XU : 0
    }

    function NU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : YU(UU) > 0;
      return zU && !AU ? "hidden" : UU <= XU ? "open" : zU ? XU < 5 ? "hidden" : XU < QU ? "teaser" : "locked" : "locked"
    }

    function IU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: cU,
        n: yU
      } = tU(UU);
      return {
        key: XU[cU],
        params: {
          [cU]: zU ? String(yU) : yU
        }
      }
    }
    const pU = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function aU(UU, XU) {
      return YU(UU) > 0 && XU < QU
    }

    function tU(UU) {
      const XU = YU(UU);
      if (XU > 0) return {
        kind: "atomic",
        n: XU,
        short: `A${XU}`
      };
      const zU = function(UU) {
        return UU >= 6 && UU <= 10 ? UU - 6 + 1 : 0
      }(UU);
      return zU > 0 ? {
        kind: "stage",
        n: zU,
        short: `S${zU}`
      } : {
        kind: "tier",
        n: UU,
        short: String(UU)
      }
    }

    function gU(UU) {
      return yU[Math.max(1, Math.min(UU, yU.length)) - 1]
    }

    function kU(UU, XU) {
      return UU < XU ? function(UU) {
        var XU;
        return null !== (XU = yU[UU]) && void 0 !== XU ? XU : null
      }(UU) : null
    }
    const GU = "baf2coresubmit",
      BU = "baf2corebankpause",
      ZU = "baf2coredeposit",
      RU = "baf2corechargepause";

    function PU(UU) {
      var XU;
      return null !== (XU = UU.baf2CoreOpen) && void 0 !== XU ? XU : QU
    }
    const WU = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function dU(UU) {
      return WU.includes(UU)
    }
    const LU = (UU, XU) => XU.map((XU => [XU, [UU]])),
      eU = Object.fromEntries([...LU("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...LU("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...LU("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...LU("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...LU("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...LU("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...LU("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...LU("Parts Bench", ["Focus Lens"]), ...LU("Machine Bench", ["Laser", "Collider"]), ...LU("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb", "Nova Bomb"]), ...LU("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...LU("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...LU("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...LU("Tool Bench", ["Mob Cage"]), ...LU("Tool Bench", ["Pocket Terminal"]), ...LU("Tool Bench", ["Comet Beacon"]), ...LU("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function CU(UU) {
      var XU;
      return null !== (XU = eU[UU]) && void 0 !== XU ? XU : ["Workbench"]
    }

    function wU(UU) {
      return CU(UU)[0]
    }
    yU.slice(1).map(((UU, XU) => `Core Tier ${XU+2}`));
    var qU = zU(9782);
    const OU = ["on", "hud", "off"];

    function SU(UU) {
      return "on" === UU
    }
    var rU = zU(344);
    const uU = "Mob Farm",
      fU = {
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
      iU = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      HU = {
        1: 20,
        2: 60,
        3: 120
      },
      MU = "baf2farmvoid",
      vU = "Caged ",
      VU = " Spawner Block";

    function sU(UU) {
      return `lifeform:${(0,rU.Ie)(UU)}`
    }

    function nU(UU) {
      if (!UU) return null;
      if (UU.startsWith(vU)) {
        const XU = UU.slice(6);
        return iU.includes(XU) ? XU : null
      }
      if (UU.endsWith(VU)) {
        const XU = UU.slice(0, -14);
        return void 0 !== fU[XU] ? XU : null
      }
      return null
    }

    function mU(UU) {
      return !0 === UU.mobFarm
    }

    function lU(UU, XU) {
      return HU[fU[XU]] * UU.opMs / 1e3
    }
    const xU = new Map;
    const JU = "baf2islands",
      jU = "baf2islandnew";

    function KU(UU) {
      const XU = yU.findIndex((XU => XU.unlocks.includes(UU)));
      return XU < 0 ? 1 : XU + 1
    }

    function bU(UU) {
      return Math.floor(UU).toLocaleString("en-US")
    }
    var TU = zU(39203);
    const hU = "baf2terminaltake",
      UX = "baf2terminalput",
      XX = ["one", "stack", "fill"];

    function zX(UU, XU, zU) {
      return `${hU} ${UU} ${XU} ${zU}`
    }

    function cX(UU, XU, zU) {
      return `${UX} ${UU} ${XU} ${zU}`
    }

    function yX(UU) {
      return `${UX} ${UU}`
    }
    const QX = [
      [`${hU} `, "take"],
      [`${UX} `, "put"]
    ];

    function AX(UU) {
      const XU = QX.find((XU => {
        let [zU] = XU;
        return UU.startsWith(zU)
      }));
      if (!XU) return null;
      const [zU, cU] = XU, [yU, QU, ...AU] = UU.slice(zU.length).trim().split(" "), FU = Number(yU);
      if (!Number.isSafeInteger(FU) || FU <= 0) return null;
      if ("put" === cU && void 0 === QU) return {
        kind: "putAll",
        seq: FU
      };
      const oU = function(UU) {
        if (XX.includes(UU)) return UU;
        const XU = Number(UU);
        return /^\d+$/.test(UU) && Number.isSafeInteger(XU) && XU > 0 ? XU : null
      }(null !== QU && void 0 !== QU ? QU : "");
      return null === oU || 0 === AU.length ? null : {
        kind: cU,
        seq: FU,
        mode: oU,
        item: AU.join(" ")
      }
    }

    function FX(UU, XU) {
      const zU = "number" === typeof UU ? UU : "one" === UU ? 1 : "stack" === UU ? 99 : XU;
      return Math.min(XU, zU)
    }

    function oX(UU, XU) {
      const zU = UU => "number" === typeof UU ? UU : "one" === UU ? 1 : 99;
      return "fill" === UU || "fill" === XU ? "fill" : zU(UU) + zU(XU)
    }

    function DX(UU, XU) {
      const zU = AX(UU),
        cU = AX(XU),
        yU = zU && cU ? function(UU, XU) {
          return "take" === UU.kind || "take" === XU.kind ? "take" === UU.kind && "take" === XU.kind && UU.item === XU.item ? {
            ...XU,
            mode: oX(UU.mode, XU.mode)
          } : null : "putAll" === UU.kind || "putAll" === XU.kind ? {
            kind: "putAll",
            seq: XU.seq
          } : UU.item === XU.item ? {
            ...XU,
            mode: oX(UU.mode, XU.mode)
          } : null
        }(zU, cU) : null;
      return yU ? "putAll" === (QU = yU).kind ? yX(QU.seq) : "put" === QU.kind ? cX(QU.seq, QU.mode, QU.item) : zX(QU.seq, QU.mode, QU.item) : null;
      var QU
    }
    const EX = "baf2rx";

    function YX(UU, XU) {
      for (var zU = arguments.length, cU = new Array(zU > 2 ? zU - 2 : 0), yU = 2; yU < zU; yU++) cU[yU - 2] = arguments[yU];
      return [EX, UU[0], UU[1], UU[2], XU, ...cU].join(" ")
    }
    const NX = 2,
      IX = 4,
      pX = 8,
      aX = 16,
      tX = 32,
      gX = 64,
      kX = 128,
      GX = 256,
      BX = 512,
      ZX = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      RX = [{
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
    const PX = "Biomass",
      WX = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function dX(UU) {
      return {
        input: PX,
        inputAmount: 1,
        output: UU,
        outputAmount: 1
      }
    }
    const LX = "baf2synth",
      eX = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      CX = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      wX = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      qX = function(UU, XU) {
        return {
          input: UU,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: XU,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      OX = function(UU, XU) {
        return {
          ...qX(UU, XU, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      SX = CX.map((UU => OX(UU, "Biomass", 2))),
      rX = {
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
          recipes: [qX("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), qX("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), qX("Raw Gold", "Gold Grit", 2), qX("Messy Stone", "Sand"), qX("Gravel", "Sand"), qX("Raw Voltite", "Voltite Dust", 2), qX("Moonstone", "Moonstone Dust", 4), qX("Wheat Seeds", "Fertiliser"), qX("Raw Uranium", "Uranium Grit", 2), OX("Mossy Messy Stone", "Sand"), ...SX],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [qX("Iron Grit", "Iron Bar"), qX("Copper Grit", "Copper Bar"), qX("Gold Grit", "Gold Bar"), qX("Raw Iron", "Iron Bar"), qX("Raw Copper", "Copper Bar"), qX("Raw Gold", "Gold Bar"), qX("Sand", "Glass"), qX("Messy Stone", "Stone"), ...rU._c.map((UU => qX(UU, "Charcoal", 1, 4))), qX("Wheat", "Bread", 1, 2), ...CX.map(((UU, XU) => OX(UU, wX[XU])))],
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
          recipes: [qX("Iron Bar", "Iron Plate"), qX("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [qX("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [qX("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [qX("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), qX("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), qX("Raw Gold", "Gold Grit", 3), qX("Raw Voltite", "Voltite Dust", 3), qX("Messy Stone", "Sand", 2), qX("Gravel", "Sand", 2), qX("Moonstone", "Moonstone Dust", 6), qX("Raw Uranium", "Uranium Grit", 3), OX("Mossy Messy Stone", "Sand", 2), ...SX],
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
          table: ZX
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [qX("Coal", "Diamond", 1, 24), qX("Voltite Dust", "Moonstone", 1, 12)],
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
        ...TU.h
      },
      uX = {
        Crusher: [qX("Spent Pellet", "Glow Dust"), qX("Wheat Seeds", "Biomass"), qX("Wheat", "Biomass"), qX("Dead Bush", "Biomass"), qX("Dusk Moss", "Biomass"), qX("Rotten Flesh", "Biomass"), qX("Bone", "Biomass", 2)],
        "Shatter Mill": [qX("Spent Pellet", "Glow Dust"), qX("Wheat Seeds", "Biomass"), qX("Wheat", "Biomass"), qX("Dead Bush", "Biomass"), qX("Dusk Moss", "Biomass"), qX("Rotten Flesh", "Biomass"), qX("Bone", "Biomass", 2), ...rU._c.map((UU => qX(UU, "Biomass")))],
        Smelter: [qX("Biomass", "Fertiliser", 2)],
        Press: [qX("Coal", "Graphite", 1, 4)]
      },
      fX = "Power Coupler",
      iX = "Advanced Coupler",
      HX = "Nova Coupler",
      MX = [{
        item: fX,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: iX,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: HX,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const vX = new Map;

    function VX(UU) {
      var XU, zU;
      return null !== (XU = null !== (zU = UU.fuelSlot) && void 0 !== zU ? zU : UU.couplerSlot) && void 0 !== XU ? XU : null
    }

    function sX(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!UU.couplable) throw new Error(`${UU.kind} takes no Power Coupler`);
      let zU = vX.get(UU);
      zU || (zU = [], vX.set(UU, zU));
      let cU = zU[XU];
      if (!cU) {
        var yU;
        const {
          divisor: QU,
          powerPerS: AU
        } = MX[XU - 1], FU = UU.opMs / QU, oU = void 0 !== UU.fluidMade || void 0 !== UU.cryoMade ? UU.powerPerOp : AU * FU / 1e3;
        cU = {
          ...UU,
          fuelSlot: null,
          couplerSlot: null !== (yU = VX(UU)) && void 0 !== yU ? yU : void 0,
          opMs: FU,
          powerPerOp: oU,
          coupled: !0
        }, XU > 1 && (cU = {
          ...cU,
          couplerLevel: XU
        }), zU[XU] = cU
      }
      return cU
    }
    const nX = new Map;
    const mX = new Map;

    function lX(UU, XU) {
      if (null === XU || (zU = XU, !WX.includes(zU))) return UU;
      var zU;
      let cU = mX.get(XU);
      return cU || (cU = {
        ...UU,
        recipes: [dX(XU)]
      }, mX.set(XU, cU)), cU
    }

    function xX(UU) {
      return !0 === UU.synth
    }
    const JX = (UU, XU, zU, cU) => ({
        output: UU,
        outputAmount: XU,
        tier: zU,
        inputs: cU.map((UU => {
          let [XU, zU] = UU;
          return {
            item: XU,
            amount: zU
          }
        }))
      }),
      jX = Object.fromEntries([JX("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), JX("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), JX("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), JX("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), JX("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), JX("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), JX("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), JX("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), JX("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), JX("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), JX("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), JX("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), JX("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), JX("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), JX("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), JX("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), JX("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), JX("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), JX("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), JX("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), JX("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), JX("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), JX("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), JX("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), JX("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), JX("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), JX("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), JX("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), JX("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), JX("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((UU => [UU.output, UU]))),
      KX = new Map;

    function bX(UU, XU) {
      let zU = rX[UU];
      if (XU.atomic && (zU = function(UU) {
          const XU = uX[UU.kind];
          if (!XU) return UU;
          let zU = nX.get(UU.kind);
          if (!zU) {
            const cU = new Set(XU.map((UU => UU.input))),
              yU = UU.recipes.filter((UU => !cU.has(UU.input)));
            zU = {
              ...UU,
              recipes: [...yU, ...XU]
            }, nX.set(UU.kind, zU)
          }
          return zU
        }(zU)), zU.synth) return lX(zU, XU.taught);
      if (XU.coupled && zU.couplable) return sX(zU, XU.level);
      const cU = zU.inputSlots && null !== XU.taught ? jX[XU.taught] : void 0;
      if (!cU) return zU;
      const yU = `${UU}|${cU.output}`;
      let QU = KX.get(yU);
      return QU || (QU = {
        ...zU,
        bench: cU
      }, KX.set(yU, QU)), QU
    }
    const TX = ["Diamond", "Moonstone"];

    function hX(UU) {
      return new Set(UU.flatMap((UU => UU.bonus ? [UU.output, UU.bonus.item] : [UU.output])).filter((UU => !TX.includes(UU))))
    }
    const Uz = Object.values(rX).flatMap((UU => UU.recipes));
    hX(Uz.filter((UU => !0 !== UU.nuclear))), hX([...Uz.filter((UU => !0 === UU.nuclear)), ...Object.values(uX).flat()]);

    function Xz(UU) {
      return null === UU.inputSlot && void 0 === UU.inputSlots && void 0 === UU.powerMade && void 0 === UU.fluidMade && !UU.treeCutter && void 0 === UU.table
    }

    function zz(UU) {
      return !0 === UU.treeCutter
    }
    const cz = ["Voltite Cell"];

    function yz(UU) {
      var XU, zU;
      return null !== (XU = null === (zU = UU.fuels) || void 0 === zU ? void 0 : zU.some((UU => cz.includes(UU)))) && void 0 !== XU && XU
    }
    const Qz = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(rU._c.map((UU => [UU, 8e3]))),
        ...Object.fromEntries(rU.Md.map((UU => [UU, 2e3]))),
        "Voltite Cell": 12e4
      },
      Az = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      Fz = {
        "Uranium Deposit": 4e3
      };

    function oz(UU) {
      var XU;
      return null !== (XU = Object.keys(Az).find((XU => Az[XU] === UU))) && void 0 !== XU ? XU : null
    }

    function Dz(UU) {
      return eX.includes(UU)
    }

    function Ez(UU) {
      return !0 !== UU.nuclear || FU()
    }
    var Yz = zU(320);
    var Nz = zU(9867),
      Iz = zU(9792),
      pz = zU(9874),
      az = zU(9864);
    const tz = "Reactor Controller",
      gz = "Reactor Port",
      kz = "Battery Cell",
      Gz = ["fuel", "water", "waste"],
      Bz = {
        fuel: gz,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      Zz = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      Rz = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      Pz = "Reactor Frame",
      Wz = "Reactor Glass",
      dz = {
        edge: [Pz],
        cap: [Wz, gz],
        wall: [Wz, gz],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [tz]
      },
      Lz = {
        edge: [kz],
        cap: [kz],
        wall: [kz],
        inside: [kz],
        ctrl: [kz]
      },
      ez = ["edge", "cap", "wall", "inside"],
      Cz = ["Reactor Slag"];

    function wz(UU) {
      return Cz.includes(qz(UU))
    }

    function qz(UU) {
      const XU = UU.indexOf("|");
      return XU < 0 ? UU : UU.slice(0, XU)
    }

    function Oz(UU) {
      return qz(UU) === tz ? "reactor" : null
    }

    function Sz(UU) {
      return qz(UU) !== gz ? null : UU.endsWith("|Water") ? "water" : UU.endsWith("|Waste") ? "waste" : "fuel"
    }

    function rz(UU) {
      const XU = Sz(UU);
      return null === XU ? null : iz(Bz[Gz[(Gz.indexOf(XU) + 1) % Gz.length]], function(UU) {
        return UU.includes(uz)
      }(UU))
    }
    const uz = "|meta|rot1|Formed",
      fz = new Set([Pz, Wz, gz]);

    function iz(UU, XU) {
      var zU;
      const cU = qz(UU);
      if (!fz.has(cU)) return UU;
      if (cU !== gz) return XU ? cU + uz : cU;
      const yU = null !== (zU = Sz(UU)) && void 0 !== zU ? zU : "fuel";
      return XU ? "fuel" === yU ? cU + uz : `${cU}${uz}|${"water"===yU?"Water":"Waste"}` : Bz[yU]
    }

    function Hz(UU, XU) {
      const zU = cc(UU, XU);
      if ("Air" === zU) return !1;
      const cU = "reactor" === UU ? dz : Lz;
      return ez.some((UU => cU[UU].includes(zU))) || "reactor" === UU && Cz.includes(zU)
    }

    function Mz(UU) {
      return Rz[UU]
    }

    function vz(UU) {
      var XU;
      return null !== (XU = Zz[UU]) && void 0 !== XU ? XU : Zz[1]
    }

    function Vz(UU) {
      const [XU, , zU] = vz(UU);
      return [zU, 0, -XU]
    }

    function sz(UU, XU, zU, cU, yU, QU) {
      return {
        ctrl: [UU[0], UU[1], UU[2]],
        rot: Zz[XU] ? XU : 1,
        w: zU,
        h: cU,
        d: yU,
        cu: QU[0],
        cv: QU[1]
      }
    }

    function nz(UU, XU) {
      return "reactor" === UU ? [Math.floor((XU - 1) / 2), 0] : [0, 0]
    }

    function mz(UU, XU, zU, cU, yU) {
      let QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : UU.rot;
      if (zU === UU.w && cU === UU.h && yU === UU.d && QU === UU.rot) return UU;
      const [AU] = nz(XU, UU.w);
      if (UU.cu === AU && UU.cv <= 1) return sz(UU.ctrl, QU, zU, cU, yU, nz(XU, zU));
      const FU = (UU, XU) => Math.max(1, Math.min(XU, UU));
      return sz(UU.ctrl, QU, zU, cU, yU, [FU(UU.cu, zU - 2), 0 === UU.cv ? 0 : FU(UU.cv, cU - 2)])
    }
    const lz = 11,
      xz = 2 * lz + 1;
    new Uint8Array(xz * xz * xz);

    function Jz(UU) {
      return UU.w * UU.h * UU.d
    }

    function jz(UU) {
      const XU = Vz(UU.rot);
      return [UU.ctrl[0] - XU[0] * UU.cu, UU.ctrl[1] - UU.cv, UU.ctrl[2] - XU[2] * UU.cu]
    }

    function Kz(UU) {
      return UU.cv * UU.d * UU.w + UU.cu
    }

    function bz(UU, XU) {
      const zU = XU % UU.w,
        cU = Math.floor(XU / UU.w) % UU.d;
      return [zU, Math.floor(XU / (UU.w * UU.d)), cU]
    }

    function Tz(UU, XU) {
      const [zU, cU, yU] = bz(UU, XU), QU = jz(UU), AU = vz(UU.rot), FU = Vz(UU.rot);
      return [QU[0] + FU[0] * zU - AU[0] * yU, QU[1] + cU, QU[2] + FU[2] * zU - AU[2] * yU]
    }

    function hz(UU, XU) {
      const zU = jz(UU),
        cU = vz(UU.rot),
        yU = Vz(UU.rot),
        QU = XU[0] - zU[0],
        AU = XU[2] - zU[2],
        FU = QU * yU[0] + AU * yU[2],
        oU = -(QU * cU[0] + AU * cU[2]),
        DU = XU[1] - zU[1];
      return FU < 0 || FU >= UU.w || DU < 0 || DU >= UU.h || oU < 0 || oU >= UU.d ? -1 : (DU * UU.d + oU) * UU.w + FU
    }

    function Uc(UU, XU) {
      if (XU === Kz(UU)) return "ctrl";
      const [zU, cU, yU] = bz(UU, XU), QU = 0 === cU || cU === UU.h - 1, AU = Number(0 === zU || zU === UU.w - 1) + Number(QU) + Number(0 === yU || yU === UU.d - 1);
      return AU >= 2 ? "edge" : 1 === AU ? QU ? "cap" : "wall" : "inside"
    }

    function Xc(UU, XU) {
      const [zU, cU, yU] = bz(UU, XU);
      return 0 === zU || zU === UU.w - 1 || 0 === cU || cU === UU.h - 1 || 0 === yU || yU === UU.d - 1 ? -1 : ((cU - 1) * (UU.d - 2) + (yU - 1)) * (UU.w - 2) + (zU - 1)
    }

    function zc(UU, XU) {
      const zU = UU.w - 2,
        cU = UU.d - 2,
        yU = XU % zU + 1,
        QU = Math.floor(XU / zU) % cU + 1;
      return ((Math.floor(XU / (zU * cU)) + 1) * UU.d + QU) * UU.w + yU
    }

    function cc(UU, XU) {
      const zU = qz(XU);
      return "reactor" === UU && zU === tz ? Pz : zU
    }

    function yc(UU, XU, zU) {
      const cU = "ctrl" === XU ? qz(zU) : cc(UU, zU);
      return ("reactor" === UU ? dz : Lz)[XU].includes(cU) ? "ok" : "Air" === cU ? "missing" : Hz(UU, zU) ? "wrong" : "blocked"
    }

    function Qc(UU, XU) {
      return "battery" === UU ? kz : "inside" === XU ? null : function(UU, XU) {
        if ("inside" === XU || "ctrl" === XU || "battery" === UU) return null;
        return "edge" === XU ? Pz : Wz
      }(UU, XU)
    }
    const Ac = {
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
      Fc = "Collider",
      oc = "Laser",
      Dc = "Star Alloy",
      Ec = "Glow Dust",
      Yc = [Fc, "_Collider Focus"];

    function Nc(UU) {
      return Yc.indexOf(qz(UU))
    }

    function Ic(UU) {
      return qz(UU) === oc
    }

    function pc(UU) {
      return [
        [UU[0], UU[1], UU[2]],
        [UU[0], UU[1] + 1, UU[2]]
      ]
    }
    const ac = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function tc(UU, XU, zU) {
      const cU = ac[XU];
      return [UU[0] + cU[0] * zU, UU[1], UU[2] + cU[2] * zU]
    }

    function gc(UU, XU) {
      if (XU[1] !== UU[1]) return null;
      const zU = XU[0] - UU[0],
        cU = XU[2] - UU[2];
      if (0 !== zU === (0 !== cU)) return null;
      const yU = Math.abs(zU + cU);
      if (yU > Ac.LASER_D) return null;
      return {
        dir: cU < 0 ? 0 : zU > 0 ? 1 : cU > 0 ? 2 : 3,
        OD: yU
      }
    }

    function kc(UU, XU, zU) {
      const cU = XU => Math.abs(UU[0] - XU[0]) <= 1 && Math.abs(UU[1] - XU[1]) <= 1;
      return cU(XU) || cU(zU)
    }

    function Gc(UU, XU) {
      return function(UU, XU, zU, cU) {
        return [0, 1, 2, 3].map((yU => {
          for (let QU = 1; QU <= Ac.LASER_D; QU++) {
            const AU = tc(UU, yU, QU);
            if (kc([AU[0], AU[2]], XU, zU) || !cU(AU)) return !1
          }
          return !0
        }))
      }(pc(UU)[1], XU.spawnXZ, XU.coreXZ, (UU => UU[1] >= Nz.n && UU[1] < Nz.n + Nz.r && UU[0] >= XU.minXZ[0] && UU[0] <= XU.maxXZ[0] && UU[2] >= XU.minXZ[1] && UU[2] <= XU.maxXZ[1]))
    }
    const Bc = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function Zc(UU) {
      return Math.max(48 + 16 * UU, gU(UU).machineAllowance)
    }
    const Rc = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function Pc(UU) {
      const XU = UU.split("|")[0];
      return Rc.includes(XU) ? "Solar Panel" : XU === pz.e ? "Fluid Pipe" : Nc(XU) >= 0 ? "Collider" : (zU = XU, Bc.includes(zU) ? XU : null);
      var zU
    }
    const Wc = "buildAFactory2Game:solarPanelDescription";
    const dc = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function Lc(UU, XU) {
      var zU;
      return null !== (zU = dc.find((zU => {
        var cU;
        return (null !== (cU = UU.level(zU)) && void 0 !== cU ? cU : 0) >= XU
      }))) && void 0 !== zU ? zU : null
    }
    const ec = "buildAFactory2Game:";
    let Cc = null;
    const wc = {
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
      qc = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      Oc = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      Sc = {
        "Loot Chest": `${ec}lookRuinChestName`
      };

    function rc(UU, XU) {
      var zU, cU, yU;
      let QU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : XU;
      if ("Solar Panel" === Pc(XU)) return {
        name: (0, rU.Se)(UU.displayName("Solar Panel")),
        detail: Wc,
        detailItem: null
      };
      const AU = XU.endsWith(" Ore"),
        oU = (Cc ??= new Set([...Object.keys((0, Iz.g)()), ...Object.keys((0, pz.v)())].map((UU => UU.split("|")[0]))), Cc).has(XU),
        DU = AU || oU ? null : function(UU) {
          var XU;
          return UU.endsWith(" Log") && !UU.startsWith("Barkless ") ? "lookLog" : UU.endsWith(" Sapling") ? "lookSapling" : UU.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (XU = wc[UU]) && void 0 !== XU ? XU : null
        }(XU);
      if (!UU.isBlock(XU) || !AU && !oU && null === DU) return null;
      const EU = null !== (zU = Sc[XU]) && void 0 !== zU ? zU : (0, rU.Wb)(XU, null !== (cU = UU.displayName(QU)) && void 0 !== cU ? cU : UU.displayName(XU));
      if (null !== DU) return {
        name: EU,
        detail: `${ec}${DU}`,
        detailItem: null
      };
      const YU = null !== (yU = qc[XU]) && void 0 !== yU ? yU : FU() ? Oc[XU] : void 0;
      if (oU && void 0 !== YU) return {
        name: EU,
        detail: `${ec}${YU}`,
        detailItem: null
      };
      const NU = Az[XU];
      if (void 0 !== NU) return {
        name: EU,
        detail: `${ec}lookDeposit`,
        detailItem: (0, rU.Wb)(NU, UU.displayName(NU))
      };
      const IU = UU.harvestLevel(XU);
      if (AU && "rock" === UU.harvestType(XU) && 0 !== IU) {
        const XU = Lc(UU, null !== IU && void 0 !== IU ? IU : 0);
        if (XU === dc[0]) return {
          name: EU,
          detail: `${ec}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== XU) return {
          name: EU,
          detail: `${ec}lookPickaxe`,
          detailItem: (0, rU.Wb)(XU, UU.displayName(XU))
        }
      }
      return {
        name: EU,
        detail: (0, rU.Se)(UU.description(XU)),
        detailItem: null
      }
    }

    function uc(UU) {
      return UU < Nz.n - 24
    }
    const fc = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const ic = "Wrench",
      Hc = "Nova Wrench";

    function Mc(UU) {
      return UU === ic || UU === Hc
    }
    const vc = [...Nz.J, "Belt Lift", "Belt Drop"];
    const Vc = ["Belt Lift", "Belt Drop"],
      sc = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function nc(UU) {
      return UU.split("|")[0]
    }

    function mc(UU) {
      const XU = /\|rot(\d)/.exec(UU);
      return XU ? Number(XU[1]) : 1
    }

    function lc(UU) {
      return UU % 4 + 1
    }

    function xc(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === XU && "" === zU ? UU : `${UU}|meta|rot${XU}${zU}`
    }

    function Jc(UU) {
      return nc(UU) === Nz.y ? (0, Nz.Q)(UU) ? "gateRight" : "gateLeft" : (0, Nz.U)(UU)
    }

    function jc(UU) {
      const XU = nc(UU),
        zU = mc(UU);
      if (Nz.J.includes(XU)) return (0, Nz.L)(XU, lc(zU), null);
      if (XU === Nz.h) return (0, Nz._)(lc(zU), (0, Nz.T)(UU));
      if (XU === Nz.B) {
        const cU = sc[(0, Nz.U)(UU)];
        return null === cU ? xc(XU, lc(zU)) : xc(XU, zU, Nz.E[cU])
      }
      return XU === Nz.y ? (0, Nz.Q)(UU) ? xc(XU, lc(zU)) : xc(XU, zU, Nz.l) : az.d.includes(XU) && !Vc.includes(XU) || Dz(XU) ? xc(XU, lc(zU)) : null
    }

    function Kc(UU) {
      return az.d.includes(UU) || Dz(UU) || null !== Pc(UU)
    }

    function bc(UU) {
      return "Solar Panel" === Pc(UU)
    }
    const Tc = "buildAFactory2Game:",
      hc = {
        leftFront: `${Tc}lookSplitDetail_leftFront`,
        frontRight: `${Tc}lookSplitDetail_frontRight`,
        gateRight: `${Tc}lookGateDetail_gateRight`
      };

    function Uy(UU, XU) {
      var zU;
      let cU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const yU = Jc(UU),
        QU = null === yU ? null : `${Tc}${yU.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${yU}`,
        AU = null === yU ? null : null !== (zU = hc[yU]) && void 0 !== zU ? zU : null;
      if (Mc(XU) && cU) {
        const zU = nc(UU);
        return XU === Hc && FU() && function(UU) {
          return vc.includes(nc(UU))
        }(UU) ? {
          mode: QU,
          detail: AU,
          next: `${Tc}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: QU,
          detail: AU,
          next: Kc(zU) && !bc(zU) ? `${Tc}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const oU = Mc(XU) ? jc(UU) : null;
      if (null === oU) return {
        mode: QU,
        detail: AU,
        next: null,
        nextState: null
      };
      const DU = Jc(oU);
      return null === DU || mc(oU) !== mc(UU) ? {
        mode: QU,
        detail: AU,
        next: `${Tc}lookWrenchTurn`,
        nextState: null
      } : {
        mode: QU,
        detail: AU,
        next: `${Tc}lookWrenchNext`,
        nextState: `${Tc}lookWrenchState_${DU}`
      }
    }
    const Xy = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
    const zy = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function cy(UU) {
      return [0, 1, 2, 3].map((XU => 0 !== (UU & 1 << XU)))
    }

    function yy(UU) {
      const XU = [];
      for (let zU = 8; zU + 2 < UU.length; zU += 3) XU.push([UU[zU], UU[zU + 1], UU[zU + 2]]);
      return {
        focus: [UU[0], UU[1], UU[2]],
        lasers: cy(UU[3]),
        open: cy(UU[4]),
        live: cy(UU[5]),
        on: 1 === UU[6],
        state: zy[UU[7]],
        blockers: XU
      }
    }
    const Qy = "Arc Caster",
      Ay = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      Fy = (Object.values(Ay), "Jet Chestplate"),
      oy = "Nova Jet Chestplate",
      Dy = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      Ey = Object.values(Dy);

    function Yy(UU, XU, zU) {
      return Math.min(function(UU) {
        return FU() && YU(UU) >= 5 ? 20 : 10
      }(zU), Math.floor(function(UU, XU) {
        return Math.max(0, UU) + (FU() ? Math.max(0, XU) : 0)
      }(UU, XU) / 5))
    }

    function Ny(UU, XU, zU) {
      const cU = Yy(XU, zU, UU),
        yU = YU(UU),
        QU = (yU >= 3 ? 55 : yU >= 1 ? 50 : UU >= 8 ? 45 : 30) + cU,
        AU = Math.max(100 + cU, 2 * QU);
      return {
        arcDamage: QU,
        arcPierce: UU >= 7 ? 2 : 1,
        arcChain: UU >= 10,
        barrierMax: (yU >= 4 ? 100 : yU >= 2 ? 90 : UU >= 9 ? 80 : UU >= 6 ? 60 : 40) + 5 * cU,
        barrierRegenPerS: yU >= 5 ? 20 : UU >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * cU,
        novaShieldRegenPerS: 32,
        bladeDamage: AU,
        bladePunch: Math.round(.5 * AU),
        forgeRank: cU
      }
    }
    const Iy = {
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
    var py = zU(37550),
      ay = zU(37334),
      ty = zU(37325),
      gy = zU(27),
      ky = zU(1680),
      Gy = zU(1106),
      By = zU.n(Gy);

    function Zy(UU) {
      return !0 === UU.field
    }
    const Ry = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function Py(UU) {
      return Ry.has(UU) ? `buildAFactory2Game:itemPlural_${(0,rU.Ie)(UU)}` : null
    }
    var Wy = zU(1193),
      dy = zU(1390),
      Ly = zU(1993),
      ey = zU(1978),
      Cy = zU(1447),
      wy = zU(37545),
      qy = zU(31),
      Oy = zU(37540);
    const Sy = "baf2QuestView",
      ry = "baf2PlayerY",
      uy = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class fy {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
        this.requestBook = UU, this.view = {
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
      set(UU, XU) {
        var zU, cU, yU, QU, AU, FU, oU, DU;
        const EU = JSON.stringify(UU.baf2QuestName) === JSON.stringify(this.view.name),
          YU = new Set(this.view.rows.filter((UU => UU.done)).map((UU => UU.id))),
          NU = new Set(this.view.rows.filter((UU => UU.justFinished)).map((UU => UU.id))),
          IU = UU.baf2QuestSide,
          pU = null !== IU && !0 === UU.baf2QuestSideFocus;
        let aU = !1,
          tU = 0;
        const gU = UU.baf2QuestSteps.map((UU => {
            const XU = my(UU, uy.has(UU[0]) ? UU[0] : "" + tU++),
              zU = EU && XU.done && !YU.has(XU.id);
            return XU.justFinished = zU || EU && XU.done && NU.has(XU.id), aU ||= zU, XU
          })),
          kU = ny(gU);
        kU >= 0 && !pU && (gU[kU].current = !0);
        const GU = !EU && null !== UU.baf2QuestName,
          BU = JSON.stringify(IU && [IU[0], IU[1]]),
          ZU = BU === JSON.stringify(null !== (zU = null === (cU = this.view.side) || void 0 === cU ? void 0 : cU.name) && void 0 !== zU ? zU : null),
          RU = null !== IU && !this.sidesSeen.has(BU);
        RU && this.sidesSeen.add(BU), this.serverTutorial = null !== (yU = UU.baf2QuestTutorial) && void 0 !== yU ? yU : "on", (null !== (QU = UU.baf2QuestTutorialSeq) && void 0 !== QU ? QU : 0) >= this.pickSeq && this.endPick();
        const PU = !EU || !ZU || UU.baf2QuestTier !== this.view.tier;
        this.view = {
          name: UU.baf2QuestName,
          rows: gU,
          reward: UU.baf2QuestReward,
          goal: UU.baf2QuestGoal,
          pulse: this.view.pulse + (aU || GU ? 1 : 0),
          itemNames: XU,
          side: IU && {
            name: [IU[0], IU[1]],
            row: {
              ...my(IU[2], "side"),
              current: pU
            },
            goal: null !== (AU = IU[3]) && void 0 !== AU ? AU : null
          },
          sideCameUpAt: RU ? Date.now() : this.view.sideCameUpAt,
          tier: UU.baf2QuestTier,
          core: UU.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (FU = UU.baf2QuestAlso) && void 0 !== FU ? FU : [],
          depth: null !== (oU = UU.baf2QuestDepth) && void 0 !== oU ? oU : null,
          tutorial: null !== (DU = this.pickedTutorial) && void 0 !== DU ? DU : this.serverTutorial,
          tutorialKnown: !0
        }, this.UY(), aU && this.scheduleClear(), PU && this.requestBook()
      }
      setTutorial(UU) {
        return this.endPick(), this.pickedTutorial = UU, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.UY()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: UU
        }, this.UY(), this.pickSeq
      }
      onPlayerY(UU) {
        const XU = Math.floor(UU);
        XU !== this.playerY && (this.playerY = XU, this.view.depth && qy.k.UY(ry, XU))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(UU) {
        this.view = {
          ...this.view,
          chapters: UU.baf2BookChapters
        }, this.UY()
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
            rows: this.view.rows.map((UU => UU.justFinished ? {
              ...UU,
              justFinished: !1
            } : UU))
          }, this.UY()
        }), 2400)
      }
      UY() {
        qy.k.UY(Sy, this.view, !0)
      }
    }

    function iy(UU, XU) {
      return UU.sideCameUpAt > 0 && XU - UU.sideCameUpAt < 2400
    }

    function Hy(UU) {
      return (null === UU.name || My(UU)) && null === UU.side && null !== UU.chapters
    }

    function My(UU) {
      var XU;
      return "quest_forgeOngoing" === (null === (XU = UU.name) || void 0 === XU ? void 0 : XU[0])
    }

    function vy(UU) {
      return UU.filter((UU => !uy.has(UU.key)))
    }

    function Vy(UU) {
      return UU.key.startsWith("stepCraft")
    }

    function sy(UU, XU) {
      const zU = new Set,
        cU = UU.side ? [...UU.rows, UU.side.row] : UU.rows;
      for (const QU of cU)
        if (!QU.done) {
          !QU.item || XU && !Vy(QU) || zU.add(QU.item);
          for (const [UU, XU, cU] of null !== (yU = QU.chips) && void 0 !== yU ? yU : []) {
            var yU;
            XU < cU && zU.add(UU)
          }
        } return zU
    }

    function ny(UU) {
      const XU = UU.findIndex((UU => !UU.done && !UU.away));
      return XU >= 0 ? XU : UU.findIndex((UU => !UU.done))
    }

    function my(UU, XU) {
      let [zU, cU, yU, QU, AU, FU, oU, DU, EU, YU] = UU;
      return {
        id: XU,
        key: zU,
        params: cU,
        item: yU,
        amount: QU,
        total: AU,
        done: FU,
        chips: null !== oU && void 0 !== oU ? oU : null,
        current: !1,
        away: !0 === DU,
        madeFor: null !== EU && void 0 !== EU ? EU : [],
        also: null !== YU && void 0 !== YU ? YU : [],
        justFinished: !1
      }
    }
    const ly = "baf2QuestItems",
      xy = new Set;
    let Jy = new Set,
      jy = null;

    function Ky(UU) {
      const XU = SU(UU.tutorial),
        zU = XU ? sy(UU, !0) : xy;
      "inventory" === gy.e.get("openInGameMenuName") ? (jy = null, (0, Oy.t)(zU)) : jy = zU;
      const cU = XU ? sy(UU, !1) : xy;
      (0, wy.e)(cU, Jy) || (Jy = cU, qy.k.UY(ly, Jy))
    }

    function by() {
      return (0, Cy.c)(ly, (() => Jy))
    }
    var Ty = zU(39271);
    const hy = [{
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

    function UQ(UU, XU) {
      return [`Deposit Seed (${UU})`, {
        item: Az[`${UU} Deposit`],
        amount: XU
      }]
    }
    const XQ = Object.fromEntries([UQ("Coal", 8), UQ("Iron", 8), UQ("Copper", 8), UQ("Gold", 6), UQ("Voltite", 4), UQ("Uranium", 4)]),
      zQ = "Relay Coil",
      cQ = new Map;

    function yQ(UU) {
      let XU = cQ.get(UU);
      if (!XU) {
        const zU = Math.max(1, UU);
        XU = hy.filter((UU => {
          var XU;
          return zU >= UU.fromTier && zU <= (null !== (XU = UU.untilTier) && void 0 !== XU ? XU : 1 / 0)
        })).map((UU => UU.later && zU >= UU.later.tier ? {
          ...UU,
          weight: UU.later.weight
        } : UU)), cQ.set(UU, XU)
      }
      return XU
    }

    function QQ(UU) {
      return yQ(UU).some((UU => {
        let {
          item: XU
        } = UU;
        return XU === zQ
      }))
    }

    function AQ(UU) {
      return UU.startsWith("Deposit Seed (")
    }

    function FQ(UU, XU) {
      const zU = yQ(UU);
      return XU ? zU.filter((UU => XU(UU.item))) : zU
    }

    function oQ(UU) {
      return UU.reduce(((UU, XU) => UU + XU.weight), 0)
    }

    function DQ(UU, XU) {
      const zU = FQ(UU, XU),
        cU = oQ(zU);
      return zU.map((UU => ({
        find: UU,
        chance: UU.weight / cU
      })))
    }
    const EQ = 6e4,
      YQ = new Intl.NumberFormat("en-US");

    function NQ(UU, XU) {
      const zU = UU >= 10 ? Math.round(UU) : Math.round(10 * UU) / 10;
      return 0 === zU ? "0" : `${XU}${YQ.format(zU)}`
    }

    function IQ(UU) {
      return UU < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? YQ.format(UU) : UU < 1e6 ? `${UU<1e5?Math.floor(UU/100)/10:Math.floor(UU/1e3)}k` : Math.floor(UU / 1e5) / 10 + "M"
    }

    function pQ(UU) {
      return UU < 0 ? "\u2212" + -UU : String(UU)
    }

    function aQ(UU, XU) {
      const zU = Math.max(1, Math.round(XU));
      if (zU < 60) return UU("buildAFactory2Game:durationSeconds", {
        seconds: String(zU)
      });
      const cU = Math.round(zU / 60);
      if (cU < 60) return UU("buildAFactory2Game:durationMinutes", {
        minutes: String(cU)
      });
      const yU = String(Math.floor(cU / 60));
      return cU % 60 === 0 ? UU("buildAFactory2Game:durationWholeHours", {
        hours: yU
      }) : UU("buildAFactory2Game:durationHours", {
        hours: yU,
        minutes: String(cU % 60)
      })
    }
    var tQ = zU(2663);
    const gQ = "(max-height: 420px), (max-width: 650px)";

    function kQ() {
      return (0, tQ.e)(gQ)
    }
    var GQ = zU(1305);

    function BQ(UU, XU) {
      return null !== UU && UU > XU + 1
    }

    function ZQ(UU) {
      const XU = 100 * UU;
      return String(XU <= 0 || XU >= 1 ? Math.round(XU) : Math.max(.1, Math.round(10 * XU) / 10))
    }

    function RQ(UU) {
      let {
        item: XU,
        amount: zU
      } = UU;
      return (0, GQ.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, GQ.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, GQ.jsx)(Ly.c, {
            itemName: XU,
            amount: 0
          })
        }), zU > 1 && (0, GQ.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", zU]
        })]
      })
    }

    function PQ(UU) {
      let {
        label: XU,
        names: zU
      } = UU;
      const [yU, QU] = (0, cU.useState)(!1), AU = zU.join(" / ");
      return (0, GQ.jsxs)(GQ.Fragment, {
        children: [(0, GQ.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: AU,
          "aria-expanded": yU,
          onClick: () => {
            QU(!yU)
          },
          children: XU
        }), yU && (0, GQ.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: AU
        })]
      })
    }

    function WQ(UU) {
      let {
        tier: XU
      } = UU;
      const {
        t: zU
      } = (0, Wy.I)(), {
        key: cU,
        params: yU
      } = IU(XU, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), QU = zU(`buildAFactory2Game:${cU}`, yU);
      return (0, GQ.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, GQ.jsx)(dy.d, {
          name: "lock"
        }), QU]
      })
    }
    const dQ = (0, cU.createContext)(null);

    function LQ() {
      const {
        t: UU
      } = (0, Wy.I)(), XU = (0, cU.useContext)(dQ);
      return (0, cU.useEffect)((() => null === XU || void 0 === XU ? void 0 : XU()), [XU]), (0, GQ.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: UU("buildAFactory2Game:recipeForQuest"),
        "aria-label": UU("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function eQ(UU) {
      let {
        title: XU,
        count: zU,
        children: yU,
        startOpen: QU = !0
      } = UU;
      const {
        t: AU
      } = (0, Wy.I)(), [FU, oU] = (0, cU.useState)((() => QU && !kQ())), [DU, EU] = (0, cU.useState)(0), YU = (0, cU.useCallback)((() => (EU((UU => UU + 1)), () => {
        EU((UU => UU - 1))
      })), []);
      return (0, GQ.jsxs)("div", {
        className: By()("Baf2Recipes", {
          Open: FU
        }),
        children: [(0, GQ.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            oU(!FU)
          },
          "aria-expanded": FU,
          children: [AU("buildAFactory2Game:recipesToggle", {
            title: XU,
            count: String(zU)
          }), (0, GQ.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: FU ? "\u25be" : "\u25b8"
          })]
        }), FU && (0, GQ.jsxs)(dQ.Provider, {
          value: YU,
          children: [(0, GQ.jsx)("ul", {
            className: "Baf2RecipeList",
            children: yU
          }), DU > 0 && (0, GQ.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, GQ.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), AU("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const CQ = "buildAFactory2Game:",
      wQ = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const qQ = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      OQ = {
        "Uranium Grit": QU,
        "Raw Uranium": QU
      };

    function SQ(UU) {
      var XU;
      return null !== (XU = OQ[UU]) && void 0 !== XU ? XU : Math.max(KU(UU), qQ[UU] ? KU(qQ[UU]) : 1, function(UU) {
        const XU = yU.findIndex((XU => XU.cost.some((XU => XU.item === UU))));
        return XU > QU ? XU : 1
      }(UU))
    }

    function rQ(UU, XU) {
      return uQ(XU) ? SQ(XU) : function(UU) {
        if (wQ.has(UU)) return 1;
        const XU = yU.findIndex((XU => XU.newDeposits.some((XU => {
          let {
            block: zU
          } = XU;
          return zU === UU
        }))));
        return XU < 0 ? 1 : XU + 1
      }(UU)
    }

    function uQ(UU) {
      return UU in OQ || YU(SQ(UU)) > 0
    }

    function fQ(UU, XU) {
      return bX(UU, {
        coupled: !1,
        taught: null,
        atomic: FU() && XU >= 11
      }).recipes
    }

    function iQ(UU, XU) {
      const zU = NU(UU, XU, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : YU(UU) > 0);
      return "open" === zU || "locked" === zU
    }

    function HQ(UU, XU) {
      return UU.map(((UU, zU) => ({
        value: UU,
        idx: zU,
        tier: XU(UU)
      }))).sort(((UU, XU) => UU.tier - XU.tier || UU.idx - XU.idx)).map((UU => {
        let {
          value: XU
        } = UU;
        return XU
      }))
    }

    function MQ(UU, XU, zU) {
      const cU = NU(UU, XU);
      if ("hidden" === cU || "open" === cU) return null;
      if ("teaser" === cU) return {
        tag: {
          translationKey: `${CQ}${zU?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${CQ}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const yU = IU(UU, {
          tier: zU ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        QU = IU(UU, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${CQ}${yU.key}`,
          params: yU.params
        },
        reason: {
          translationKey: `${CQ}${QU.key}`,
          params: QU.params
        }
      }
    }

    function vQ(UU) {
      return !AQ(UU)
    }

    function VQ(UU) {
      let {
        seconds: XU
      } = UU;
      const {
        t: zU
      } = (0, Wy.I)();
      return (0, GQ.jsx)(eQ, {
        title: zU("buildAFactory2Game:recipesCuts", {
          seconds: XU
        }),
        count: 1,
        children: (0, GQ.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, GQ.jsx)(RQ, {
            item: "Maple Sapling",
            amount: 1
          }), (0, GQ.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, GQ.jsx)(RQ, {
            item: "Maple Log",
            amount: 1
          }), (0, GQ.jsx)("span", {
            className: "Baf2RecipeName",
            children: zU("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function sQ(UU) {
      let {
        fertilised: XU
      } = UU;
      const {
        t: zU
      } = (0, Wy.I)();
      return (0, GQ.jsxs)(eQ, {
        title: zU("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, GQ.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, GQ.jsx)(RQ, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, GQ.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, GQ.jsx)(RQ, {
            item: "Wheat",
            amount: 1
          }), (0, GQ.jsx)(RQ, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, GQ.jsx)("span", {
            className: "Baf2RecipeName",
            children: zU("buildAFactory2Game:recipeField")
          })]
        }), (0, GQ.jsxs)("li", {
          className: By()("Baf2Recipe", {
            InUse: XU
          }),
          children: [(0, GQ.jsx)(RQ, {
            item: "Fertiliser",
            amount: 1
          }), (0, GQ.jsx)("span", {
            className: "Baf2RecipeName",
            children: zU("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function nQ(UU) {
      let {
        tier: XU,
        seconds: zU
      } = UU;
      const {
        t: cU
      } = (0, Wy.I)(), yU = function(UU) {
        return UU >= 5 ? RX : ZX
      }(XU);
      return (0, GQ.jsx)(eQ, {
        title: cU("buildAFactory2Game:recipesBringsUp", {
          seconds: zU
        }),
        count: yU.length,
        children: yU.map((UU => {
          let {
            item: XU,
            chance: zU
          } = UU;
          return (0, GQ.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, GQ.jsx)(RQ, {
              item: XU,
              amount: 1
            }), (0, GQ.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, Ty.h)(cU, XU)
            }), (0, GQ.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: cU("buildAFactory2Game:recipeChance", {
                percent: ZQ(zU)
              })
            })]
          }, XU)
        }))
      })
    }

    function mQ(UU) {
      let {
        tier: XU,
        seconds: zU,
        noSeeds: cU
      } = UU;
      const {
        t: yU
      } = (0, Wy.I)(), QU = by(), AU = DQ(XU, cU ? vQ : void 0), FU = cU && DQ(XU).length > AU.length, oU = QQ(XU);
      return (0, GQ.jsxs)(eQ, {
        title: yU("buildAFactory2Game:recipesRecycles", {
          seconds: zU
        }),
        count: AU.length,
        children: [AU.map((UU => {
          let {
            find: XU,
            chance: zU
          } = UU;
          return (0, GQ.jsxs)("li", {
            className: "Baf2Recipe",
            children: [QU.has(XU.item) && (0, GQ.jsx)(LQ, {}), (0, GQ.jsx)(RQ, {
              item: XU.item,
              amount: XU.amount
            }), (0, GQ.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, Ty.h)(yU, XU.item)
            }), (0, GQ.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: yU("buildAFactory2Game:recipeChance", {
                percent: ZQ(zU)
              })
            })]
          }, XU.item)
        })), FU && (0, GQ.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, GQ.jsx)("span", {
            className: "Baf2RecipeName",
            children: yU("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), oU && (0, GQ.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, GQ.jsx)("span", {
            className: "Baf2RecipeName",
            children: yU("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function lQ(UU) {
      let {
        tier: XU,
        seconds: zU
      } = UU;
      const {
        t: cU
      } = (0, Wy.I)(), yU = Object.entries(XQ).filter((UU => {
        let [, {
          item: zU
        }] = UU;
        return iQ(SQ(zU), XU, uQ(zU))
      }));
      return (0, GQ.jsx)(eQ, {
        title: cU("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: zU
        }),
        count: yU.length,
        children: yU.map((UU => {
          let [XU, {
            item: zU,
            amount: yU
          }] = UU;
          return (0, GQ.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, GQ.jsx)(RQ, {
              item: XU,
              amount: 1
            }), (0, GQ.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, GQ.jsx)(RQ, {
              item: zU,
              amount: yU
            }), (0, GQ.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, Ty.h)(cU, zU)
            })]
          }, XU)
        }))
      })
    }

    function xQ(UU) {
      let {
        tier: XU,
        seconds: zU
      } = UU;
      const {
        t: cU
      } = (0, Wy.I)(), yU = by(), QU = HQ(Object.entries(Az).filter((UU => {
        let [zU, cU] = UU;
        return iQ(rQ(zU, cU), XU, uQ(cU))
      })), (UU => {
        let [XU, zU] = UU;
        return rQ(XU, zU)
      }));
      return (0, GQ.jsx)(eQ, {
        title: cU("buildAFactory2Game:recipesDigs", {
          seconds: zU
        }),
        count: QU.length,
        children: QU.map((UU => {
          let [zU, QU] = UU;
          const AU = rQ(zU, QU),
            FU = AU > XU ? AU : null,
            oU = Fz[zU],
            DU = null === FU && yU.has(QU);
          return (0, GQ.jsxs)("li", {
            className: By()("Baf2Recipe", {
              Locked: null !== FU,
              Far: BQ(FU, XU)
            }),
            children: [DU && (0, GQ.jsx)(LQ, {}), (0, GQ.jsx)(RQ, {
              item: zU,
              amount: 1
            }), (0, GQ.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, GQ.jsx)(RQ, {
              item: QU,
              amount: 1
            }), (0, GQ.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, Ty.h)(cU, QU)
            }), void 0 !== oU && (0, GQ.jsx)("span", {
              className: "Baf2RecipeMore",
              children: cU("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / oU)
              })
            }), null !== FU && (0, GQ.jsx)(WQ, {
              tier: FU
            })]
          }, zU)
        }))
      })
    }

    function JQ(UU) {
      var XU;
      let {
        def: zU,
        seconds: cU
      } = UU;
      const {
        t: yU
      } = (0, Wy.I)();
      return (0, GQ.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, GQ.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (XU = zU.fuels) && void 0 !== XU ? XU : []).map((UU => (0, GQ.jsx)(RQ, {
            item: UU,
            amount: 1
          }, UU))), (0, GQ.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, GQ.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, GQ.jsx)(dy.d, {
              name: "bolt"
            }), yU("buildAFactory2Game:recipePower", {
              power: bU(zU.powerMade),
              seconds: cU
            })]
          })]
        })
      })
    }

    function jQ(UU) {
      let {
        def: XU
      } = UU;
      const {
        t: zU
      } = (0, Wy.I)();
      return (0, GQ.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, GQ.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, GQ.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, GQ.jsx)(dy.d, {
              name: "bolt"
            }), zU("buildAFactory2Game:recipeMixer", {
              cryo: NQ((0, TU.E)(XU, XU.cryoMade), "")
            })]
          })
        })
      })
    }

    function KQ(UU) {
      let {
        def: XU
      } = UU;
      const {
        t: zU
      } = (0, Wy.I)();
      return (0, GQ.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, GQ.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, GQ.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, GQ.jsx)(dy.d, {
              name: "bolt"
            }), zU("buildAFactory2Game:recipeCondenser", {
              power: NQ((0, TU.E)(XU, XU.powerPerOp), ""),
              water: NQ((0, TU.E)(XU, XU.fluidMade), "")
            })]
          })
        })
      })
    }

    function bQ(UU) {
      let {
        kind: XU,
        def: zU,
        input: cU,
        tier: yU,
        noSeeds: QU = !1
      } = UU;
      const AU = String(zU.opMs / 1e3);
      return zz(zU) ? (0, GQ.jsx)(VQ, {
        seconds: AU
      }) : zU.field ? (0, GQ.jsx)(sQ, {
        fertilised: null !== cU
      }) : zU.table ? (0, GQ.jsx)(nQ, {
        tier: yU,
        seconds: AU
      }) : zU.recycles ? (0, GQ.jsxs)(GQ.Fragment, {
        children: [(0, GQ.jsx)(mQ, {
          tier: yU,
          seconds: AU,
          noSeeds: QU
        }), (0, GQ.jsx)(lQ, {
          tier: yU,
          seconds: AU
        })]
      }) : Xz(zU) ? (0, GQ.jsx)(xQ, {
        tier: yU,
        seconds: AU
      }) : void 0 !== zU.fluidMade ? (0, GQ.jsx)(KQ, {
        def: zU
      }) : void 0 !== zU.cryoMade ? (0, GQ.jsx)(jQ, {
        def: zU
      }) : void 0 !== zU.powerMade ? (0, GQ.jsx)(JQ, {
        def: zU,
        seconds: AU
      }) : (0, GQ.jsx)(TQ, {
        kind: XU,
        input: cU,
        tier: yU,
        seconds: AU
      })
    }

    function TQ(UU) {
      let {
        kind: XU,
        input: zU,
        tier: cU,
        seconds: yU
      } = UU;
      const {
        t: QU
      } = (0, Wy.I)(), AU = by(), FU = HQ(function(UU) {
        const XU = new Map;
        for (const yU of UU) {
          var zU, cU;
          const UU = [yU.output, yU.outputAmount, yU.inputAmount, null === (zU = yU.bonus) || void 0 === zU ? void 0 : zU.item, null === (cU = yU.bonus) || void 0 === cU ? void 0 : cU.chance].join("|"),
            QU = XU.get(UU);
          QU ? QU.inputs.push(yU.input) : XU.set(UU, {
            inputs: [yU.input],
            inputAmount: yU.inputAmount,
            output: yU.output,
            outputAmount: yU.outputAmount,
            bonus: yU.bonus
          })
        }
        return [...XU.values()]
      }(fQ(XU, cU).filter(Ez)), (UU => SQ(UU.output))).filter((UU => iQ(SQ(UU.output), cU, uQ(UU.output))));
      return (0, GQ.jsx)(eQ, {
        title: QU("buildAFactory2Game:recipesEach", {
          seconds: yU
        }),
        count: FU.length,
        children: FU.map((UU => {
          const XU = null !== zU && UU.inputs.includes(zU),
            yU = UU.inputs.length > 3 ? [XU ? zU : UU.inputs[0]] : UU.inputs,
            FU = SQ(UU.output) > cU ? SQ(UU.output) : null,
            oU = null === FU && AU.has(UU.output);
          return (0, GQ.jsxs)("li", {
            className: By()("Baf2Recipe", {
              InUse: XU,
              Locked: null !== FU,
              Far: BQ(FU, cU)
            }),
            children: [oU && (0, GQ.jsx)(LQ, {}), yU.map(((XU, zU) => (0, GQ.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [zU > 0 && (0, GQ.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, GQ.jsx)(RQ, {
                item: XU,
                amount: UU.inputAmount
              })]
            }, XU))), yU.length < UU.inputs.length && (0, GQ.jsx)(PQ, {
              label: QU("buildAFactory2Game:recipeMore", {
                count: String(UU.inputs.length - yU.length)
              }),
              names: UU.inputs.filter((UU => !yU.includes(UU))).map((UU => (0, Ty.h)(QU, UU)))
            }), (0, GQ.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, GQ.jsx)(RQ, {
              item: UU.output,
              amount: UU.outputAmount
            }), (0, GQ.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, Ty.h)(QU, UU.output)
            }), UU.bonus && (0, GQ.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [QU("buildAFactory2Game:recipeBonus", {
                percent: ZQ(UU.bonus.chance)
              }), (0, GQ.jsx)(RQ, {
                item: UU.bonus.item,
                amount: 1
              })]
            }), null !== FU && (0, GQ.jsx)(WQ, {
              tier: FU
            })]
          }, `${UU.output}|${UU.inputs[0]}`)
        }))
      })
    }

    function hQ(UU) {
      let {
        taught: XU,
        tier: zU
      } = UU;
      const {
        t: cU
      } = (0, Wy.I)(), yU = by(), QU = HQ(Object.values(jX), (UU => UU.tier)).filter((UU => iQ(UU.tier, zU)));
      return (0, GQ.jsx)(eQ, {
        title: cU("buildAFactory2Game:benchCanMake"),
        count: QU.length,
        startOpen: !1,
        children: QU.map((UU => {
          const QU = UU.tier > zU,
            AU = !QU && yU.has(UU.output);
          return (0, GQ.jsxs)("li", {
            className: By()("Baf2Recipe", {
              InUse: UU.output === XU,
              Locked: QU,
              Far: BQ(QU ? UU.tier : null, zU)
            }),
            children: [AU && (0, GQ.jsx)(LQ, {}), (0, GQ.jsx)(RQ, {
              item: UU.output,
              amount: UU.outputAmount
            }), (0, GQ.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, Ty.h)(cU, UU.output)
            }), (0, GQ.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), UU.inputs.map((UU => (0, GQ.jsx)(RQ, {
              item: UU.item,
              amount: UU.amount
            }, UU.item))), QU && (0, GQ.jsx)(WQ, {
              tier: UU.tier
            })]
          }, UU.output)
        }))
      })
    }
    var UA, XA, zA, cA, yA;
    const QA = rX.Generator,
      AA = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      FA = 1e3 * (null !== (UA = QA.powerMade) && void 0 !== UA ? UA : 0) / QA.opMs,
      oA = Math.min(...(null !== (XA = QA.fuels) && void 0 !== XA ? XA : []).map((UU => Qz[UU]))) / 1e3,
      DA = rX["Volt Engine"],
      EA = 1e3 * (null !== (zA = DA.powerMade) && void 0 !== zA ? zA : 0) / DA.opMs,
      YA = Qz[null !== (cA = null === (yA = DA.fuels) || void 0 === yA ? void 0 : yA[0]) && void 0 !== cA ? cA : ""] / 1e3;

    function NA(UU) {
      let {
        item: XU,
        label: zU,
        value: cU,
        note: yU,
        dim: QU
      } = UU;
      return (0, GQ.jsxs)("li", {
        className: By()("Baf2PowerRow", {
          Dim: QU
        }),
        children: [(0, GQ.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, GQ.jsx)(Ly.c, {
            itemName: XU,
            amount: 0
          })
        }), (0, GQ.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, GQ.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: zU
          }), yU && (0, GQ.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: yU
          })]
        }), (0, GQ.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: cU
        })]
      })
    }

    function IA(UU, XU, zU, cU) {
      var yU;
      const QU = void 0 === cU ? rX[UU] : function(UU, XU) {
          if (null === XU) return UU;
          let zU = xU.get(XU);
          return zU || (zU = {
            ...UU,
            powerPerOp: lU(UU, XU),
            farmMob: XU
          }, xU.set(XU, zU)), zU
        }(rX[UU], cU),
        AU = XU && QU.couplable ? sX(QU, zU) : QU;
      return 1e3 * (null !== (yU = AU.powerPerOp) && void 0 !== yU ? yU : 0) / AU.opMs
    }

    function pA(UU) {
      var XU, zU, cU, yU, QU, AU, FU, oU;
      let {
        message: DU
      } = UU;
      const {
        t: EU
      } = (0, Wy.I)(), YU = (UU, XU) => EU("buildAFactory2Game:powerPerSecond", {
        rate: NQ(UU, XU)
      }), [NU, IU] = DU.baf2PowerGenerators, pU = DU.baf2PowerGeneratorFuel, aU = DU.baf2PowerSunPanels, tU = null !== (XU = DU.baf2PowerSunShare) && void 0 !== XU ? XU : 1, gU = DU.baf2PowerVaults, kU = DU.baf2PowerUsers, [GU, BU] = null !== (zU = DU.baf2PowerEngines) && void 0 !== zU ? zU : [0, 0], ZU = null !== (cU = DU.baf2PowerEngineCells) && void 0 !== cU ? cU : 0, RU = null !== (yU = DU.baf2PowerPads) && void 0 !== yU ? yU : 0, PU = null !== (QU = DU.baf2PowerCharge) && void 0 !== QU ? QU : 0, [WU, dU] = null !== (AU = DU.baf2PowerReactors) && void 0 !== AU ? AU : [0, 0], [LU, eU] = null !== (FU = DU.baf2PowerBatteries) && void 0 !== FU ? FU : [0, 0];
      let CU = EU("buildAFactory2Game:powerEngineCells", {
        amount: String(ZU)
      });
      ZU > 0 && BU > 0 && (CU = EU("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(ZU),
        time: aQ(EU, ZU * YA / BU)
      }));
      let wU = EU("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(pU)
      });
      pU > 0 && IU > 0 && (wU = EU("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(pU),
        time: aQ(EU, pU * oA / IU)
      }));
      const qU = NU + GU + aU + WU;
      return (0, GQ.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, GQ.jsxs)("section", {
          children: [(0, GQ.jsxs)("h3", {
            children: [EU("buildAFactory2Game:powerMaking"), (0, GQ.jsx)("span", {
              children: YU(DU.baf2PowerMadePerS, "+")
            })]
          }), (0, GQ.jsxs)("ul", {
            children: [0 === qU && (0, GQ.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: EU("buildAFactory2Game:powerNoMakers")
            }), NU > 0 && (0, GQ.jsx)(NA, {
              item: "Generator",
              label: `${(0,Ty.h)(EU,"Generator")} \xd7${NU}`,
              note: `${EU("buildAFactory2Game:powerRunning",{amount:String(IU)})} \xb7 ${wU}`,
              value: YU(IU * FA, "+"),
              dim: 0 === IU
            }), GU > 0 && (0, GQ.jsx)(NA, {
              item: "Volt Engine",
              label: `${(0,Ty.h)(EU,"Volt Engine")} \xd7${GU}`,
              note: `${EU("buildAFactory2Game:powerRunning",{amount:String(BU)})} \xb7 ${CU}`,
              value: YU(BU * EA, "+"),
              dim: 0 === BU
            }), aU > 0 && (0, GQ.jsx)(NA, {
              item: "Solar Panel",
              label: `${(0,Ty.h)(EU,"Solar Panel")} \xd7${aU}`,
              note: EU(tU < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: YU(4 * aU * tU, "+")
            }), WU > 0 && (0, GQ.jsx)(NA, {
              item: "Reactor Frame",
              label: `${EU("buildAFactory2Game:powerReactors")} \xd7${WU}`,
              note: EU("buildAFactory2Game:powerRunning", {
                amount: String(dU)
              }),
              value: YU(null !== (oU = DU.baf2PowerReactorPerS) && void 0 !== oU ? oU : 0, "+"),
              dim: 0 === dU
            })]
          })]
        }), (0, GQ.jsxs)("section", {
          children: [(0, GQ.jsxs)("h3", {
            children: [EU("buildAFactory2Game:powerStorage"), (0, GQ.jsx)("span", {
              children: bU(DU.baf2PowerCap)
            })]
          }), (gU > 0 || LU > 0) && (0, GQ.jsxs)("ul", {
            children: [gU > 0 && (0, GQ.jsx)(NA, {
              item: "Charge Vault",
              label: `${(0,Ty.h)(EU,"Charge Vault")} \xd7${gU}`,
              value: `+${bU(8e3*gU)}`
            }), LU > 0 && (0, GQ.jsx)(NA, {
              item: "Battery Cell",
              label: `${EU("buildAFactory2Game:powerBatteries")} \xd7${LU}`,
              value: `+${bU(eU)}`
            })]
          })]
        }), (0, GQ.jsxs)("section", {
          children: [(0, GQ.jsxs)("h3", {
            children: [EU("buildAFactory2Game:powerUsing"), (0, GQ.jsx)("span", {
              children: YU(DU.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, GQ.jsxs)("ul", {
            children: [0 === kU.length && 0 === RU && 0 === PU && (0, GQ.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: EU("buildAFactory2Game:powerNoUsers")
            }), kU.map((UU => {
              let [XU, zU, cU, yU, QU = 1, AU] = UU, FU = zU ? EU(AA[QU - 1], {
                name: (0, Ty.h)(EU, XU)
              }) : (0, Ty.h)(EU, XU);
              return void 0 !== AU && (FU = EU("buildAFactory2Game:powerFarmName", {
                name: FU,
                mob: EU(sU(AU))
              })), (0, GQ.jsx)(NA, {
                item: XU,
                label: `${FU} \xd7${cU}`,
                note: EU("buildAFactory2Game:powerRunning", {
                  amount: String(yU)
                }),
                value: yU > 0 ? YU(yU * IA(XU, zU, QU, AU), "\u2212") : EU("buildAFactory2Game:powerIdle"),
                dim: 0 === yU
              }, `${XU}|${zU}|${QU}|${AU}`)
            })), RU > 0 && (0, GQ.jsx)(NA, {
              item: "Charging Pad",
              label: `${(0,Ty.h)(EU,"Charging Pad")} \xd7${RU}`,
              value: EU("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), PU > 0 && (0, GQ.jsx)(NA, {
              item: "Homestead Core",
              label: EU("buildAFactory2Game:powerCharge"),
              value: YU(PU, "\u2212")
            }), DU.baf2PowerStarved > 0 && (0, GQ.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, GQ.jsx)(dy.d, {
                name: "triangle-exclamation"
              }), EU("buildAFactory2Game:powerStarved", {
                amount: String(DU.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var aA = zU(4968),
      tA = zU(1494);
    class gA {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(UU) {
        this.message = UU;
        for (const XU of this.listeners) XU()
      }
      get() {
        return this.message
      }
      subscribe(UU) {
        return this.listeners.add(UU), () => {
          this.listeners.delete(UU)
        }
      }
    }
    class kA extends gA {}

    function GA(UU, XU) {
      const zU = () => {
          const zU = UU.get();
          if (!zU || !XU) return zU;
          const [cU, yU, QU] = zU.baf2PowerAt;
          return cU === XU[0] && yU === XU[1] && QU === XU[2] ? zU : null
        },
        [yU, QU] = (0, cU.useState)(zU);
      return (0, cU.useEffect)((() => (QU(zU()), UU.subscribe((() => {
        QU(zU())
      })))), [UU, ...null !== XU && void 0 !== XU ? XU : []]), yU
    }

    function BA(UU) {
      return {
        stored: UU.baf2PowerStored,
        cap: UU.baf2PowerCap,
        madePerS: UU.baf2PowerMadePerS,
        usedPerS: UU.baf2PowerUsedPerS
      }
    }

    function ZA(UU) {
      let {
        stored: XU,
        cap: zU
      } = UU;
      return (0, GQ.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, GQ.jsx)("div", {
          style: {
            width: `${Math.min(100,100*XU/Math.max(1,zU))}%`
          }
        })
      })
    }

    function RA(UU) {
      let {
        figures: XU,
        labelled: zU = !1
      } = UU;
      const {
        t: cU
      } = (0, Wy.I)(), yU = XU.madePerS - XU.usedPerS, {
        text: QU,
        draining: AU
      } = function(UU, XU) {
        let {
          stored: zU,
          cap: cU,
          madePerS: yU,
          usedPerS: QU
        } = XU;
        const AU = yU - QU;
        return zU >= cU ? {
          text: UU("buildAFactory2Game:powerFull"),
          draining: !1
        } : AU > .05 ? {
          text: UU("buildAFactory2Game:powerFullIn", {
            time: aQ(UU, (cU - zU) / AU)
          }),
          draining: !1
        } : AU < -.05 ? {
          text: UU("buildAFactory2Game:powerEmptyIn", {
            time: aQ(UU, zU / -AU)
          }),
          draining: !0
        } : {
          text: UU("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(cU, XU);
      return (0, GQ.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, GQ.jsx)(ZA, {
          stored: XU.stored,
          cap: XU.cap
        }), (0, GQ.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, GQ.jsx)("span", {
            children: cU(zU ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: bU(XU.stored),
              cap: bU(XU.cap)
            })
          }), (0, GQ.jsxs)("span", {
            className: By()("Baf2PowerNet", {
              Draining: AU
            }),
            children: [cU("buildAFactory2Game:powerPerSecond", {
              rate: NQ(Math.abs(yU), yU < 0 ? "\u2212" : "+")
            }), " \xb7 ", QU]
          })]
        })]
      })
    }

    function PA(UU) {
      let {
        stored: XU,
        cap: zU,
        rates: cU
      } = UU;
      const {
        t: yU
      } = (0, Wy.I)();
      return cU ? (0, GQ.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, GQ.jsx)(RA, {
          figures: {
            stored: XU,
            cap: zU,
            madePerS: cU[0],
            usedPerS: cU[1]
          },
          labelled: !0
        })
      }) : (0, GQ.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, GQ.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, GQ.jsx)(ZA, {
            stored: XU,
            cap: zU
          }), (0, GQ.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, GQ.jsx)("span", {
              children: yU("buildAFactory2Game:powerStoredLabelled", {
                stored: bU(XU),
                cap: bU(zU)
              })
            })
          })]
        })
      })
    }

    function WA(UU) {
      let {
        store: XU,
        close: zU
      } = UU;
      const {
        t: cU
      } = (0, Wy.I)(), yU = GA(XU);
      return (0, GQ.jsx)(aA.c, {
        close: zU,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, GQ.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, GQ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, GQ.jsxs)("div", {
              children: [(0, GQ.jsx)("h2", {
                id: "baf2PowerTitle",
                children: cU("buildAFactory2Game:powerTitle")
              }), (0, GQ.jsx)("p", {
                children: cU("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, GQ.jsx)(tA.k, {
              onClick: zU
            })]
          }), yU && (0, GQ.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, GQ.jsx)(RA, {
              figures: BA(yU)
            }), (0, GQ.jsx)(pA, {
              message: yU
            })]
          })]
        })
      })
    }

    function dA(UU) {
      var XU;
      let {
        kind: zU,
        def: yU,
        jU: QU,
        power: AU,
        stored: FU,
        cap: oU
      } = UU;
      const {
        t: DU
      } = (0, Wy.I)(), EU = GA(AU, QU), [YU, NU] = (0, cU.useState)(!1);
      return (0, GQ.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, GQ.jsx)(bQ, {
          kind: zU,
          def: yU,
          input: null,
          tier: null !== (XU = null === EU || void 0 === EU ? void 0 : EU.baf2PowerTier) && void 0 !== XU ? XU : 1
        }), (0, GQ.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: DU("buildAFactory2Game:powerTitle")
        }), EU && (0, GQ.jsx)(RA, {
          figures: BA(EU)
        }), !EU && (0, GQ.jsx)(PA, {
          stored: FU,
          cap: oU,
          rates: null
        }), EU && (0, GQ.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            NU(!YU)
          },
          "aria-expanded": YU,
          children: DU(YU ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), EU && YU && (0, GQ.jsx)(pA, {
          message: EU
        })]
      })
    }
    const LA = 2500,
      eA = 17500,
      CA = `${ZU} `;
    const wA = ["plan", "throttle"];

    function qA(UU) {
      if (UU.startsWith(`${LX} `)) return UU.slice(0, UU.lastIndexOf(" "));
      const XU = UU.split(" ");
      return XU[0] === EX && wA.includes(XU[4]) ? XU.slice(0, 5).join(" ") : null
    }
    class OA {
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = UU, this.now = XU, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.aQU = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = XU()
      }
      enqueue(UU) {
        this.queue(UU, this.nextTicket());
        const XU = this.aQU + this.pending.length;
        return this.flush(), XU
      }
      track(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const zU = this.nextTicket();
        if (!XU.urgent) return this.queue(UU, zU), this.flush(), zU;
        const {
          supersedes: cU
        } = XU;
        for (let QU = this.pending.length - 1; QU >= this.urgent; QU--) {
          const XU = this.pending[QU];
          (XU.command === UU || null !== cU && void 0 !== cU && cU(XU.command)) && (this.pending.splice(QU, 1), this.markLeft(XU.tickets))
        }
        const yU = this.pending.findIndex((XU => {
          let {
            command: zU
          } = XU;
          return zU === UU
        }));
        return -1 !== yU ? this.pending[yU].tickets.push(zU) : (this.pending.splice(this.urgent, 0, {
          command: UU,
          tickets: [zU]
        }), this.urgent += 1), this.flush(), zU
      }
      leftAt(UU) {
        const XU = this.leftTimes.get(UU);
        return void 0 !== XU ? XU : this.pending.some((XU => {
          let {
            tickets: zU
          } = XU;
          return zU.includes(UU)
        })) ? null : -1 / 0
      }
      holdReserve() {
        this.reserves += 1;
        let UU = !0;
        return () => {
          UU && (UU = !1, this.reserves -= 1, this.flush())
        }
      }
      isWaitingLast(UU) {
        var XU;
        return (null === (XU = this.pending.at(-1)) || void 0 === XU ? void 0 : XU.command) === UU
      }
      sent() {
        return this.aQU
      }
      clear() {
        for (const {
            tickets: UU
          }
          of this.pending) this.markLeft(UU);
        this.pending.length = 0, this.urgent = 0, null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      nextTicket() {
        return this.lastTicket += 1, this.lastTicket
      }
      markLeft(UU) {
        const XU = this.now();
        for (const zU of UU) this.leftTimes.set(zU, XU);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(UU, XU) {
        const zU = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === zU || void 0 === zU ? void 0 : zU.command) === UU) return void(! function(UU) {
          return UU === RU || UU.startsWith(`${BU} `) || UU.startsWith(`${MU} `)
        }(UU) ? zU.tickets.push(XU) : (this.pending.pop(), this.markLeft([...zU.tickets, XU])));
        const cU = void 0 === zU ? null : DX(zU.command, UU);
        if (null !== cU && void 0 !== zU) return zU.command = cU, void zU.tickets.push(XU);
        const yU = qA(UU);
        if (null !== yU && void 0 !== zU && qA(zU.command) === yU) return zU.command = UU, void zU.tickets.push(XU);
        if (null !== zU && void 0 !== zU && zU.command.startsWith(CA) && UU.startsWith(CA)) {
          const cU = UU.slice(CA.length);
          if (zU.command.slice(CA.length).split(",").includes(cU)) return void zU.tickets.push(XU);
          const yU = `${zU.command},${cU}`;
          if (yU.length <= 119) return zU.command = yU, void zU.tickets.push(XU)
        }
        this.pending.push({
          command: UU,
          tickets: [XU]
        })
      }
      flush() {
        const UU = this.now();
        for (this.tokens = Math.min(5, this.tokens + (UU - this.refilledAt) / LA), this.refilledAt = UU; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.aQU += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: UU,
            tickets: XU
          } = this.pending.shift();
          this.markLeft(XU), this.send(UU)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * LA)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class SA {
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new OA(UU, XU)
      }
      send(UU) {
        return this.queue.enqueue(UU)
      }
      sent() {
        return this.queue.sent()
      }
      track(UU, XU) {
        return this.queue.track(UU, XU)
      }
      leftAt(UU) {
        return this.queue.leftAt(UU)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(UU) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = XU, this.send(UU), this.islandEdits.count
      }
      syncIslandEdits(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: zU
        } = this, cU = XU - zU.lastAtMs < eA;
        zU.count = cU ? Math.max(zU.count, UU) : UU
      }
      clear() {
        this.queue.clear()
      }
    }
    const rA = (0, cU.createContext)(null);

    function uA() {
      const UU = (0, cU.useContext)(rA);
      if (!UU) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return UU
    }

    function fA(UU, XU) {
      return null !== XU && void 0 !== XU ? XU : 1 === UU
    }

    function iA(UU, XU) {
      return UU.every((UU => {
        var zU;
        let [cU, , yU] = UU;
        return !fA(yU, null === (zU = XU.get(cU)) || void 0 === zU ? void 0 : zU.cY)
      }))
    }

    function HA(UU, XU, zU) {
      if (0 === UU.size) return UU;
      const cU = new Map(UU);
      for (const [yU, QU] of UU) {
        const UU = XU.find((UU => {
          let [XU] = UU;
          return XU === yU
        }));
        (!UU || QU.cY === (1 === UU[2]) || QU.atMs < zU) && cU.delete(yU)
      }
      return cU
    }

    function MA(UU) {
      var XU;
      let {
        jU: zU,
        input: yU,
        drops: QU,
        seconds: AU
      } = UU;
      const {
        t: FU
      } = (0, Wy.I)(), oU = uA(), [DU, EU] = (0, cU.useState)(new Map);
      (0, cU.useEffect)((() => {
        QU && EU((UU => HA(UU, QU, Date.now() - eA)))
      }), [QU]), (0, cU.useEffect)((() => {
        const UU = function(UU, XU) {
          let zU = null;
          for (const {
              atMs: cU
            }
            of UU.values()) zU = null === zU ? cU : Math.min(zU, cU);
          return null === zU ? null : zU + XU
        }(DU, eA);
        if (null === UU || !QU) return;
        const XU = setTimeout((() => {
          EU((UU => HA(UU, QU, Date.now() - eA)))
        }), Math.max(0, UU - Date.now()) + 1);
        return () => {
          clearTimeout(XU)
        }
      }), [DU, QU]);
      const YU = nU(yU),
        NU = null !== YU && null !== QU && iA(QU, DU),
        IU = function(UU, XU, zU) {
          return null === UU || null === XU || iA(XU, zU) ? 0 : HU[fU[UU]]
        }(YU, QU, DU);
      return (0, GQ.jsxs)(eQ, {
        title: FU("buildAFactory2Game:farmDropsTitle", {
          seconds: AU
        }),
        count: null !== (XU = null === QU || void 0 === QU ? void 0 : QU.length) && void 0 !== XU ? XU : 0,
        children: [IU > 0 && (0, GQ.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: FU("buildAFactory2Game:farmDropsPower", {
            power: String(IU)
          })
        }), (null === YU || !QU) && (0, GQ.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: FU("buildAFactory2Game:farmDropsEmpty")
        }), NU && (0, GQ.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: FU("buildAFactory2Game:farmDropsAllVoided")
        }), null !== YU && (null === QU || void 0 === QU ? void 0 : QU.map((UU => {
          var XU;
          let [cU, yU, QU] = UU;
          const AU = yU < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            YU = fA(QU, null === (XU = DU.get(cU)) || void 0 === XU ? void 0 : XU.cY);
          return (0, GQ.jsxs)("li", {
            className: By()("Baf2Recipe Baf2FarmDrop", {
              Voided: !YU
            }),
            children: [(0, GQ.jsx)(RQ, {
              item: cU,
              amount: 1
            }), (0, GQ.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, Ty.h)(FU, cU)
            }), (0, GQ.jsx)("span", {
              className: "Baf2FarmRate",
              children: FU(AU, {
                amount: String(yU)
              })
            }), (0, GQ.jsx)("button", {
              type: "button",
              className: By()("Baf2FarmToggle SmallTextBold", {
                Kept: YU
              }),
              "aria-pressed": YU,
              onClick: () => {
                EU(new Map(DU).set(cU, {
                  cY: !YU,
                  atMs: Date.now()
                })), oU.send(function(UU, XU, zU, cU) {
                  return `${MU} ${UU} ${XU} ${zU} ${cU}`
                }(zU[0], zU[1], zU[2], cU))
              },
              children: FU(YU ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, cU)
        })))]
      })
    }
    var vA;
    const VA = String(null !== (vA = rX.Synthesizer.waterPerOp) && void 0 !== vA ? vA : 0);

    function sA(UU) {
      let {
        jU: XU,
        taught: zU
      } = UU;
      const {
        t: yU
      } = (0, Wy.I)(), QU = uA(), [AU, FU] = (0, cU.useState)(null);
      (0, cU.useEffect)((() => {
        null !== AU && zU === AU && FU(null)
      }), [AU, zU]);
      const oU = null !== AU && void 0 !== AU ? AU : zU;
      let DU = yU("buildAFactory2Game:synthPick");
      return null !== oU && (DU = yU("buildAFactory2Game:synthGrows", {
        name: (0, Ty.h)(yU, oU),
        input: (0, Ty.h)(yU, PX),
        water: VA
      })), (0, GQ.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, GQ.jsx)("div", {
          className: By()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === oU
          }),
          children: DU
        }), (0, GQ.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: WX.map(((UU, zU) => {
            const cU = (0, Ty.h)(yU, UU),
              AU = UU === oU;
            return (0, GQ.jsx)("li", {
              children: (0, GQ.jsx)("button", {
                type: "button",
                className: By()("Baf2SynthTile", {
                  Selected: AU
                }),
                title: cU,
                "aria-label": cU,
                "aria-pressed": AU,
                onClick: () => {
                  AU || (FU(UU), QU.send(`${LX} ${XU[0]} ${XU[1]} ${XU[2]} ${zU}`))
                },
                children: (0, GQ.jsx)(Ly.c, {
                  itemName: UU,
                  amount: 0
                })
              })
            }, UU)
          }))
        })]
      })
    }
    const nA = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function mA(UU) {
      let {
        kind: XU,
        tier: zU,
        coupled: cU,
        level: yU,
        slot: QU
      } = UU;
      const {
        t: AU
      } = (0, Wy.I)(), oU = KU(fX);
      if (!cU && null !== zU && zU < oU) return (0, GQ.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, GQ.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, GQ.jsx)(dy.d, {
            name: "lock"
          })
        }), (0, GQ.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: AU("buildAFactory2Game:upgradeLocked")
        }), (0, GQ.jsx)("span", {
          className: "Baf2TierTag",
          children: AU("buildAFactory2Game:tierTag", {
            tier: String(oU)
          })
        })]
      });
      const DU = function(UU, XU) {
          if (FU() && "Crusher" !== UU && null !== XU) {
            if (lA(HX, XU)) return {
              item: HX,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (lA(iX, XU)) return {
              item: iX,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: fX,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(XU, zU),
        EU = AU(cU ? nA[yU - 1] : DU.emptyKey),
        YU = null !== zU ? function(UU, XU, zU, cU) {
          if (!FU() || !zU || "Crusher" === UU || XU < 10) return null;
          const yU = KU(HX);
          if (cU < 3 && yU > 1 && (2 === cU || XU >= yU)) return {
            tier: yU,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const QU = KU(iX);
          if (1 === cU && QU > 1) return {
            tier: QU,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(XU, zU, cU, yU) : null;
      return (0, GQ.jsxs)("div", {
        className: By()("Baf2UpgradeSocket", {
          Fitted: cU
        }),
        children: [(0, GQ.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [cU && QU, !cU && (0, GQ.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, GQ.jsx)(Ly.c, {
              itemName: DU.item,
              amount: 0
            })
          })]
        }), (0, GQ.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, GQ.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: AU("buildAFactory2Game:upgradeTitle")
          }), (0, GQ.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: EU
          }), cU && yU >= 2 && "Crusher" === XU && (0, GQ.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: AU("buildAFactory2Game:couplerCrusherHint")
          }), YU && null !== zU && zU < YU.tier && (0, GQ.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, GQ.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, GQ.jsx)(dy.d, {
                name: "lock"
              })
            }), AU(YU.lockedKey), (0, GQ.jsx)("span", {
              className: "Baf2TierTag",
              children: AU("buildAFactory2Game:tierTag", {
                tier: String(YU.tier)
              })
            })]
          }), YU && null !== zU && zU >= YU.tier && (0, GQ.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: AU(YU.nextKey)
          })]
        })]
      })
    }

    function lA(UU, XU) {
      const zU = KU(UU);
      return zU > 1 && XU >= zU
    }
    var xA = zU(37756);
    const JA = (0, TU.E)(rX.Condenser, rX.Condenser.fluidMade),
      jA = .05;
    class KA extends gA {}

    function bA(UU) {
      return NQ(UU, "")
    }

    function TA(UU, XU, zU) {
      return UU(XU ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: zU
      })
    }

    function hA(UU, XU, zU, cU) {
      return zU <= jA && cU <= jA ? null : cU <= jA || zU <= jA ? TA(UU, XU, cU <= jA ? NQ(zU, "+") : NQ(cU, "\u2212")) : UU(XU ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: bA(zU),
        used: bA(cU)
      })
    }

    function UF(UU, XU) {
      return Math.min(100, 100 * UU / Math.max(1, XU))
    }

    function XF(UU) {
      let {
        stored: XU,
        cap: zU,
        netPerS: cU,
        rates: yU,
        cryo: QU
      } = UU;
      const {
        t: AU
      } = (0, Wy.I)(), FU = function(UU, XU, zU, cU) {
        return zU <= 0 ? UU("buildAFactory2Game:waterNoStorage") : XU >= zU ? UU("buildAFactory2Game:powerFull") : cU > jA ? UU("buildAFactory2Game:powerFullIn", {
          time: aQ(UU, (zU - XU) / cU)
        }) : cU < -.05 ? XU <= 0 ? UU("buildAFactory2Game:waterEmpty") : UU("buildAFactory2Game:powerEmptyIn", {
          time: aQ(UU, XU / -cU)
        }) : UU("buildAFactory2Game:powerSteady")
      }(AU, XU, zU, cU), oU = zU > 0 && XU < zU && Math.abs(cU) <= jA, DU = AU(QU ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), EU = null !== yU ? `${yU} \xb7 ${FU}` : oU ? DU : `${DU} \xb7 ${FU}`;
      return (0, GQ.jsxs)(GQ.Fragment, {
        children: [(0, GQ.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, GQ.jsx)("div", {
            style: {
              width: `${UF(XU,zU)}%`
            }
          })
        }), (0, GQ.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, GQ.jsx)("span", {
            children: zU > 0 && AU("buildAFactory2Game:powerStored", {
              stored: (0, TU.K)(XU),
              cap: (0, TU.K)(zU)
            })
          }), (0, GQ.jsx)("span", {
            className: By()("Baf2WaterNet", {
              Draining: cU < -.05
            }),
            children: EU
          })]
        })]
      })
    }

    function zF(UU) {
      let {
        water: XU,
        at: zU,
        side: cU = null
      } = UU;
      const {
        t: yU
      } = (0, Wy.I)(), QU = uA(), [AU, FU, oU] = XU;
      return (0, GQ.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, GQ.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, GQ.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: yU(null === cU ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${cU}`)
          }), (0, GQ.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              QU.send(`${TU.B} ${zU[0]} ${zU[1]} ${zU[2]}${"cryoOut"===cU?" cryo":""}`)
            },
            children: yU("buildAFactory2Game:waterDetails")
          })]
        }), (0, GQ.jsx)(XF, {
          stored: AU,
          cap: FU,
          netPerS: oU,
          rates: TA(yU, "cryoOut" === cU, NQ(Math.abs(oU), oU < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === cU
        })]
      })
    }

    function cF(UU, XU) {
      var zU, cU, yU;
      const QU = !0 === XU.baf2WaterCryo,
        AU = null !== (zU = null === (cU = XU.baf2WaterMakers.find((UU => UU[0] === (QU ? TU.b : "Condenser")))) || void 0 === cU ? void 0 : cU[1]) && void 0 !== zU ? zU : 0,
        FU = [],
        oU = (XU, zU, cU) => {
          XU > 0 && FU.push(UU(1 === XU ? zU : cU, {
            count: String(XU)
          }))
        };
      return QU ? oU(AU, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : oU(AU, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), oU(null !== (yU = XU.baf2WaterPipes) && void 0 !== yU ? yU : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), oU(XU.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), FU.join(" \xb7 ")
    }

    function yF(UU, XU) {
      if (!0 === XU.baf2WaterCryo) return function(UU, XU) {
        const zU = rX[TU.b];
        switch (XU.baf2WaterThis) {
          case "pipe":
            return {
              text: UU("buildAFactory2Game:cryoThisPipe"), bad: !1
            };
          case "condenserFull":
            return {
              text: UU("buildAFactory2Game:cryoThisMixerFull"), bad: !1
            };
          case "condenserNoPower":
            return {
              text: UU("buildAFactory2Game:cryoThisMixerNoPower"), bad: !0
            };
          case "condenserNoOutlet":
            return {
              text: UU("buildAFactory2Game:cryoThisMixerNoOutlet"), bad: !0
            };
          case "mixerNoInput":
            return {
              text: UU("buildAFactory2Game:cryoThisMixerNoInput"), bad: !0
            };
          case "mixerBadInput":
            return {
              text: UU("buildAFactory2Game:cryoThisMixerBadInput"), bad: !0
            };
          case "mixerNoWater":
            return {
              text: UU("buildAFactory2Game:cryoThisMixerNoWater"), bad: !0
            };
          case "condenser": {
            var cU;
            const [yU, QU] = null !== (cU = XU.baf2WaterThisRates) && void 0 !== cU ? cU : [(0, TU.E)(zU, zU.cryoMade), (0, TU.E)(zU, zU.powerPerOp)];
            return !0 === XU.baf2WaterDriven ? {
              text: UU("buildAFactory2Game:cryoThisMixerDriven", {
                rate: bA(yU)
              }),
              bad: !1
            } : {
              text: UU("buildAFactory2Game:cryoThisMixer", {
                rate: bA(yU),
                power: bA(QU)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: UU("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(UU, XU);
      const zU = !0 === XU.baf2WaterDriven,
        cU = rX.Condenser;
      switch (XU.baf2WaterThis) {
        case "pipe":
          return {
            text: UU("buildAFactory2Game:waterThisPipe"), bad: !1
          };
        case "condenserFull":
          return {
            text: UU("buildAFactory2Game:waterThisCondenserFull"), bad: !1
          };
        case "condenserNoPower":
          return {
            text: UU("buildAFactory2Game:waterThisCondenserNoPower"), bad: !0
          };
        case "condenserNoOutlet":
          return {
            text: UU("buildAFactory2Game:waterThisCondenserNoOutlet"), bad: !0
          };
        case "tank":
          return {
            text: UU("buildAFactory2Game:waterThisTank", {
              tank: (0, TU.K)(TU.r),
              cap: (0, TU.K)(XU.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var yU;
          const [QU, AU] = null !== (yU = XU.baf2WaterThisRates) && void 0 !== yU ? yU : [JA, (0, TU.E)(cU, cU.powerPerOp)];
          return zU ? {
            text: UU("buildAFactory2Game:waterThisCondenserDriven", {
              rate: bA(QU)
            }),
            bad: !1
          } : {
            text: UU("buildAFactory2Game:waterThisCondenser", {
              rate: bA(QU),
              power: bA(AU)
            }),
            bad: !1
          }
        }
        default:
          return {
            text: UU("buildAFactory2Game:waterThisUser"), bad: !1
          }
      }
    }

    function QF(UU, XU) {
      const zU = XU.baf2WaterMakers.some((UU => !0 === UU[5]));
      if (!0 === XU.baf2WaterCryo) {
        const cU = XU.baf2WaterUsedPerS - XU.baf2WaterMadePerS,
          yU = zU || cU <= jA ? 0 : (0, TU.C)(cU);
        return 0 === yU ? null : yU > 1 ? UU("buildAFactory2Game:cryoNextMixers", {
          mixers: String(yU)
        }) : UU("buildAFactory2Game:cryoNextOne")
      }
      const cU = zU ? null : function(UU, XU) {
        const zU = XU - UU;
        return zU <= jA ? null : Math.ceil(zU / JA)
      }(XU.baf2WaterMadePerS, XU.baf2WaterUsedPerS);
      return null === cU ? null : cU > 1 ? UU("buildAFactory2Game:waterNextCondensers", {
        condensers: String(cU)
      }) : UU("buildAFactory2Game:waterNextOne")
    }

    function AF(UU) {
      let {
        item: XU,
        label: zU,
        note: cU,
        value: yU,
        dim: QU,
        bad: AU
      } = UU;
      return (0, GQ.jsxs)("li", {
        className: By()("Baf2WaterRow", {
          Dim: QU,
          Bad: AU
        }),
        children: [(0, GQ.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, GQ.jsx)(Ly.c, {
            itemName: XU,
            amount: 0
          })
        }), (0, GQ.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, GQ.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: zU
          }), cU && (0, GQ.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: cU
          })]
        }), (0, GQ.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: yU
        })]
      })
    }

    function FF(UU) {
      return xA.n[UU] ? UU : "Reactor Port"
    }

    function oF(UU) {
      let {
        message: XU
      } = UU;
      const {
        t: zU
      } = (0, Wy.I)(), cU = !0 === XU.baf2WaterCryo, yU = (UU, XU) => TA(zU, cU, NQ(UU, XU));
      return (0, GQ.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, GQ.jsxs)("section", {
          children: [(0, GQ.jsxs)("h3", {
            children: [zU("buildAFactory2Game:waterMakes"), (0, GQ.jsx)("span", {
              children: yU(XU.baf2WaterMadePerS, "+")
            })]
          }), (0, GQ.jsxs)("ul", {
            children: [0 === XU.baf2WaterMakers.length && (0, GQ.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: zU(cU ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), XU.baf2WaterMakers.map((UU => {
              let [XU, cU, QU, AU, FU, oU] = UU;
              const DU = zU("buildAFactory2Game:powerRunning", {
                amount: String(QU)
              });
              let EU = FU > 0 ? zU("buildAFactory2Game:waterMakerPower", {
                running: DU,
                power: bA(FU)
              }) : DU;
              return oU && (EU = zU(0 === QU && AU <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, GQ.jsx)(AF, {
                item: XU,
                label: `${(0,Ty.h)(zU,XU)} \xd7${cU}`,
                note: EU,
                value: QU > 0 || oU && AU > 0 ? yU(AU, "+") : zU("buildAFactory2Game:powerIdle"),
                dim: 0 === QU && !oU,
                bad: oU
              }, XU)
            }))]
          })]
        }), (0, GQ.jsxs)("section", {
          children: [(0, GQ.jsxs)("h3", {
            children: [zU("buildAFactory2Game:waterUses"), (0, GQ.jsx)("span", {
              children: yU(XU.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, GQ.jsxs)("ul", {
            children: [0 === XU.baf2WaterUsers.length && (0, GQ.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: zU(cU ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), XU.baf2WaterUsers.map((UU => {
              let [XU, cU, QU, AU] = UU;
              const FU = xA.n[XU] ? (0, Ty.h)(zU, XU) : XU;
              return (0, GQ.jsx)(AF, {
                item: FF(XU),
                label: cU > 1 ? `${FU} \xd7${cU}` : FU,
                note: AU ? zU("buildAFactory2Game:waterPortFirst") : void 0,
                value: QU > 0 ? yU(QU, "\u2212") : zU("buildAFactory2Game:powerIdle"),
                dim: 0 === QU
              }, XU)
            }))]
          })]
        })]
      })
    }

    function DF(UU) {
      var XU, zU, yU, QU, AU;
      let {
        store: FU,
        close: oU
      } = UU;
      const {
        t: DU
      } = (0, Wy.I)(), EU = function(UU) {
        const [XU, zU] = (0, cU.useState)((() => UU.get()));
        return (0, cU.useEffect)((() => (zU(UU.get()), UU.subscribe((() => {
          zU(UU.get())
        })))), [UU]), XU
      }(FU), YU = null !== (XU = null === EU || void 0 === EU ? void 0 : EU.baf2WaterStored) && void 0 !== XU ? XU : 0, NU = null !== (zU = null === EU || void 0 === EU ? void 0 : EU.baf2WaterCap) && void 0 !== zU ? zU : 0, IU = null !== (yU = null === EU || void 0 === EU ? void 0 : EU.baf2WaterMadePerS) && void 0 !== yU ? yU : 0, pU = null !== (QU = null === EU || void 0 === EU ? void 0 : EU.baf2WaterUsedPerS) && void 0 !== QU ? QU : 0, aU = null !== (AU = null === EU || void 0 === EU ? void 0 : EU.baf2WaterNetPerS) && void 0 !== AU ? AU : IU - pU, tU = EU && yF(DU, EU), gU = EU && QF(DU, EU), kU = !0 === (null === EU || void 0 === EU ? void 0 : EU.baf2WaterCryo);
      return (0, GQ.jsx)(aA.c, {
        close: oU,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, GQ.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, GQ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, GQ.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== EU && NU <= 0 ? (0, GQ.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, GQ.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, GQ.jsx)(Ly.c, {
                  itemName: kU ? pz.i : TU.j,
                  amount: 0
                })
              }), (0, GQ.jsxs)("div", {
                children: [(0, GQ.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: DU(kU ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), EU && (0, GQ.jsx)("p", {
                  children: cF(DU, EU)
                })]
              })]
            }), (0, GQ.jsx)(tA.k, {
              onClick: oU
            })]
          }), EU && tU && (0, GQ.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, GQ.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, GQ.jsx)(XF, {
                stored: YU,
                cap: NU,
                netPerS: aU,
                cryo: kU,
                rates: hA(DU, kU, IU, pU)
              })
            }), (0, GQ.jsx)("div", {
              className: By()("Baf2WaterThis", {
                Bad: tU.bad
              }),
              children: tU.text
            }), EU.baf2WaterDriven && (0, GQ.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, GQ.jsx)(dy.d, {
                name: "bolt"
              }), DU(kU ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), gU && (0, GQ.jsx)("p", {
              className: "Baf2WaterNext",
              children: gU
            }), (0, GQ.jsx)(oF, {
              message: EU
            })]
          })]
        })
      })
    }
    class EF {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(UU, XU) {
        const zU = this.get(UU);
        zU && null === XU.opLeftMs && null === XU.fuelLeftMs && XU.status === zU.status ? XU = {
          ...XU,
          opLeftMs: zU.opLeftMs,
          fuelLeftMs: zU.fuelLeftMs,
          burning: zU.burning
        } : this.updates++, this.pos = UU, this.view = XU;
        for (const cU of this.listeners) cU()
      }
      get(UU) {
        return null !== this.pos && this.pos[0] === UU[0] && this.pos[1] === UU[1] && this.pos[2] === UU[2] ? this.view : null
      }
      forget(UU) {
        null !== this.get(UU) && (this.pos = null, this.view = null)
      }
      get updateCount() {
        return this.updates
      }
      subscribe(UU) {
        return this.listeners.add(UU), () => {
          this.listeners.delete(UU)
        }
      }
    }

    function YF(UU, XU, zU, cU) {
      return "noFuel" === XU && cU && !yz(rX[UU]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === XU && !0 === (null === zU || void 0 === zU ? void 0 : zU.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === XU && !0 === (null === zU || void 0 === zU ? void 0 : zU.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === XU && !0 === (null === zU || void 0 === zU ? void 0 : zU.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === XU && !0 === (null === zU || void 0 === zU ? void 0 : zU.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : NF(XU, zU) ? "buildAFactory2Game:machineStatus_noInputShort" : function(UU, XU) {
        const zU = rX[UU];
        if ("noFuel" === XU && void 0 !== zU.fuels) return yz(zU) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (zU.mobFarm && ("noInput" === XU || "badInput" === XU)) return `buildAFactory2Game:machineStatus_${XU}MobFarm`;
        if ("outputFull" === XU && (void 0 !== zU.table || zU.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === XU && xX(zU)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== zU.cryoMade && ("noInput" === XU || "noOutlet" === XU || "fluidFull" === XU)) return `buildAFactory2Game:machineStatus_${XU}Mixer`;
        return `buildAFactory2Game:machineStatus_${XU}`
      }(UU, XU)
    }

    function NF(UU, XU) {
      return "noInput" === UU && null !== XU && void 0 !== XU && XU.input && XU.inputShort ? {
        input: XU.input,
        short: XU.inputShort
      } : null
    }

    function IF(UU) {
      return Zy(UU) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== UU.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function pF(UU) {
      const XU = (0, rU.Ie)(UU);
      return `Baf2Pane Baf2Pane${XU.charAt(0).toUpperCase()}${XU.slice(1)}`
    }

    function aF(UU, XU) {
      const [zU, yU] = (0, cU.useState)((() => UU.get(XU)));
      return (0, cU.useEffect)((() => {
        yU(UU.get(XU));
        const zU = UU.subscribe((() => {
          yU(UU.get(XU))
        }));
        return () => {
          zU(), UU.forget(XU)
        }
      }), [UU, ...XU]), zU
    }

    function tF(UU, XU, zU, cU) {
      const yU = rX[UU],
        QU = XU && yU.couplable ? sX(yU, zU) : yU,
        AU = null !== cU && Xz(QU) ? function(UU, XU) {
          var zU;
          return null !== (zU = null !== XU && Xz(UU) ? Fz[XU] : void 0) && void 0 !== zU ? zU : UU.opMs
        }(QU, oz(cU)) : QU.opMs;
      return AU === QU.opMs ? QU : {
        ...QU,
        opMs: AU
      }
    }

    function gF(UU) {
      let {
        running: XU,
        opMs: zU,
        opLeftMs: cU,
        updateCount: yU
      } = UU;
      return (0, GQ.jsx)("div", {
        className: By()("Baf2MachineProgress", {
          Running: XU
        }),
        children: (0, GQ.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: zU / 1e3 + "s",
            animationDelay: null === cU ? void 0 : (cU - zU) / 1e3 + "s"
          }
        }, yU)
      })
    }

    function kF(UU) {
      let {
        running: XU,
        leftMs: zU,
        periodMs: cU,
        updateCount: yU
      } = UU;
      const {
        t: QU
      } = (0, Wy.I)(), AU = Math.min(Math.max(null !== zU && void 0 !== zU ? zU : 0, 0), cU), FU = XU && AU > 0, oU = QU("buildAFactory2Game:machineBarFuel");
      return (0, GQ.jsx)("div", {
        className: By()("Baf2FuelBurn", {
          Draining: FU
        }),
        role: "img",
        title: oU,
        "aria-label": oU,
        children: (0, GQ.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: FU ? {
            animationDuration: cU / 1e3 + "s",
            animationDelay: (AU - cU) / 1e3 + "s"
          } : {
            transform: `scaleY(${AU/cU})`
          }
        }, yU)
      })
    }

    function GF(UU, XU, zU) {
      let [cU, yU] = zU;
      const QU = 1 !== cU ? Py(XU) : null;
      return {
        amount: cU,
        have: yU,
        item: UU(QU || (0, Ty.e)(XU))
      }
    }

    function BF(UU) {
      return Xz(UU) ? "buildAFactory2Game:machineBarMining" : zz(UU) ? "buildAFactory2Game:machineBarCutting" : void 0 !== UU.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function ZF(UU) {
      var XU, zU, cU, yU, QU, AU, FU, oU, DU, EU, YU, NU, IU, pU, aU, tU, gU, kU, GU;
      let {
        kind: BU,
        jU: ZU,
        store: RU,
        power: PU,
        renderSlot: WU
      } = UU;
      const {
        t: dU
      } = (0, Wy.I)(), LU = aF(RU, ZU), eU = rX[BU], CU = null !== (XU = null === LU || void 0 === LU ? void 0 : LU.coupled) && void 0 !== XU && XU, wU = null !== (zU = null === LU || void 0 === LU ? void 0 : LU.couplerLevel) && void 0 !== zU ? zU : 1, qU = tF(BU, CU, wU, null !== (cU = null === LU || void 0 === LU || null === (yU = LU.dug) || void 0 === yU ? void 0 : yU.item) && void 0 !== cU ? cU : null), OU = null !== (QU = null === LU || void 0 === LU ? void 0 : LU.status) && void 0 !== QU ? QU : null, SU = null !== (AU = null === LU || void 0 === LU ? void 0 : LU.power) && void 0 !== AU ? AU : null, rU = null !== (FU = null === LU || void 0 === LU ? void 0 : LU.opLeftMs) && void 0 !== FU ? FU : null, uU = null !== (oU = null === LU || void 0 === LU ? void 0 : LU.dug) && void 0 !== oU ? oU : null, fU = null !== uU && Xz(eU) ? Fz[null !== (DU = oz(uU.item)) && void 0 !== DU ? DU : ""] : void 0, iU = void 0 === fU ? null : 6e4 / fU, HU = null !== (EU = null === LU || void 0 === LU ? void 0 : LU.powerCap) && void 0 !== EU ? EU : 4e3, MU = null !== (YU = null === LU || void 0 === LU ? void 0 : LU.tier) && void 0 !== YU ? YU : null, vU = void 0 !== qU.powerMade, VU = null !== eU.fuelSlot ? WU(eU.fuelSlot) : null, sU = VX(eU), nU = !CU && !0 === (null === LU || void 0 === LU ? void 0 : LU.fuelFed), lU = !CU && !0 === (null === LU || void 0 === LU ? void 0 : LU.fuelFeeds), xU = null !== eU.fuelSlot && !CU, JU = null !== (NU = null === LU || void 0 === LU ? void 0 : LU.fuelLeftMs) && void 0 !== NU ? NU : null, jU = function(UU, XU, zU) {
        var cU;
        const yU = null === XU ? void 0 : Qz[XU];
        return Math.max(null !== (cU = null !== yU && void 0 !== yU ? yU : zU) && void 0 !== cU ? cU : 0, UU.opMs)
      }(qU, null !== (IU = null === LU || void 0 === LU ? void 0 : LU.burning) && void 0 !== IU ? IU : null, JU), KU = null !== (pU = null === LU || void 0 === LU ? void 0 : LU.fuelKeep) && void 0 !== pU ? pU : null, bU = null === OU ? null : YF(BU, OU, LU, nU), TU = null === OU ? null : NF(OU, LU);
      return (0, GQ.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, GQ.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, GQ.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: dU((0, Ty.e)(BU))
          }), uU && (0, GQ.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [dU("Tree Cutter" === BU ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, GQ.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, GQ.jsx)(Ly.c, {
                itemName: uU.item,
                amount: 0
              })
            }), (0, GQ.jsx)(ey.d, {
              text: uU.name
            })]
          }), null !== iU && (0, GQ.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: dU("buildAFactory2Game:machineDigsFixed", {
              perMin: String(iU)
            })
          }), (null === LU || void 0 === LU ? void 0 : LU.field) && (0, GQ.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, GQ.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, GQ.jsx)(Ly.c, {
                itemName: "Wheat",
                amount: 0
              })
            }), dU("buildAFactory2Game:machineField", {
              planted: String(LU.field[0]),
              ripe: String(LU.field[1])
            })]
          }), (0, GQ.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, GQ.jsxs)("div", {
              className: By()("Baf2MachineColumn", {
                Baf2Burns: xU
              }),
              children: [null !== qU.inputSlot && (0, GQ.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, GQ.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: dU(IF(qU))
                }), WU(qU.inputSlot)]
              }), null !== eU.fuelSlot && !CU && (0, GQ.jsxs)("div", {
                className: By()("Baf2MachineSlot", {
                  Baf2FuelFed: nU
                }),
                children: [(0, GQ.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [nU && (0, GQ.jsx)(dy.d, {
                    name: "fire"
                  }), dU("buildAFactory2Game:machineFuel")]
                }), (0, GQ.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, GQ.jsx)(kF, {
                    running: "running" === OU,
                    leftMs: JU,
                    periodMs: jU,
                    updateCount: RU.updateCount
                  }), VU]
                })]
              }), null !== eU.fuelSlot && CU && (0, GQ.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, GQ.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: dU("buildAFactory2Game:machineFuel")
                }), (0, GQ.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: dU("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": dU("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, GQ.jsx)(dy.d, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, GQ.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, GQ.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: dU(BF(qU))
              }), (0, GQ.jsx)(gF, {
                running: "running" === OU,
                opMs: qU.opMs,
                opLeftMs: rU,
                updateCount: RU.updateCount
              })]
            }), qU.outputSlots.length > 0 && (0, GQ.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, GQ.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: dU("buildAFactory2Game:machineOutput")
              }), (0, GQ.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: qU.outputSlots.map((UU => (0, GQ.jsx)("div", {
                  children: WU(UU)
                }, UU)))
              })]
            }), null !== SU && vU && (0, GQ.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, GQ.jsx)("div", {
                style: {
                  height: 100 * SU / HU + "%"
                }
              })
            })]
          }), xU && null !== KU && (0, GQ.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, GQ.jsx)(dy.d, {
              name: "arrows-rotate"
            }), dU(zz(qU) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(KU)
            })]
          }), (nU || lU) && (0, GQ.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, GQ.jsx)(dy.d, {
              name: "fire"
            }), dU(nU ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), eU.couplable && (0, GQ.jsx)(mA, {
            kind: BU,
            tier: MU,
            coupled: CU,
            level: wU,
            slot: sU === eU.fuelSlot ? VU : null !== sU ? WU(sU) : null
          }), null !== SU && !vU && !0 === (null === LU || void 0 === LU ? void 0 : LU.reactorPowered) && (0, GQ.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: dU("buildAFactory2Game:machineReactorPowered")
          }), null !== SU && !vU && !0 !== (null === LU || void 0 === LU ? void 0 : LU.reactorPowered) && (0, GQ.jsx)(PA, {
            stored: SU,
            cap: HU,
            rates: null !== (aU = null === LU || void 0 === LU ? void 0 : LU.powerRates) && void 0 !== aU ? aU : null
          }), (null === LU || void 0 === LU ? void 0 : LU.water) && (0, GQ.jsx)(zF, {
            water: LU.water,
            at: ZU,
            side: LU.cryo ? "waterIn" : null
          }), (null === LU || void 0 === LU ? void 0 : LU.cryo) && (0, GQ.jsx)(zF, {
            water: LU.cryo,
            at: ZU,
            side: "cryoOut"
          }), null !== LU && void 0 !== LU && LU.inertCoupler ? (0, GQ.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: dU("buildAFactory2Game:machineStatus_couplerOff", {
              item: (0, Ty.h)(dU, LU.inertCoupler)
            })
          }) : null !== bU && (0, GQ.jsx)("div", {
            className: By()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== OU
            }),
            children: dU(bU, TU ? GF(dU, TU.input, TU.short) : void 0)
          })]
        }), (0, GQ.jsxs)("div", {
          className: By()("Baf2MachineSide", {
            Baf2SynthSide: xX(eU)
          }),
          children: [xX(eU) && (0, GQ.jsx)(sA, {
            jU: ZU,
            taught: null !== (tU = null === LU || void 0 === LU ? void 0 : LU.taught) && void 0 !== tU ? tU : null
          }, ZU.join(",")), vU && (0, GQ.jsx)(dA, {
            kind: BU,
            def: qU,
            jU: ZU,
            power: PU,
            stored: null !== SU && void 0 !== SU ? SU : 0,
            cap: HU
          }), mU(eU) && (0, GQ.jsx)(MA, {
            jU: ZU,
            input: null !== (gU = null === LU || void 0 === LU ? void 0 : LU.input) && void 0 !== gU ? gU : null,
            drops: null !== (kU = null === LU || void 0 === LU ? void 0 : LU.farm) && void 0 !== kU ? kU : null,
            seconds: String(qU.opMs / 1e3)
          }), !vU && !mU(eU) && !xX(eU) && (0, GQ.jsx)(bQ, {
            kind: BU,
            def: qU,
            input: null !== (GU = null === LU || void 0 === LU ? void 0 : LU.input) && void 0 !== GU ? GU : null,
            tier: null !== MU && void 0 !== MU ? MU : 1,
            noSeeds: !0 === (null === LU || void 0 === LU ? void 0 : LU.noSeeds)
          })]
        })]
      })
    }

    function RF(UU, XU, zU, cU) {
      var yU;
      const QU = rX[UU],
        AU = [QU.inputSlot, QU.fuelSlot, ...null !== (yU = QU.inputSlots) && void 0 !== yU ? yU : []].filter((UU => null !== UU));
      return {
        render: yU => {
          let {
            jU: QU,
            renderSlot: AU
          } = yU;
          return (0, GQ.jsx)(rA.Provider, {
            value: cU,
            children: (0, GQ.jsx)(ZF, {
              kind: UU,
              jU: QU,
              store: XU,
              power: zU,
              renderSlot: AU
            })
          })
        },
        quickMoveRange: AU.length > 0 ? [Math.min(...AU), Math.max(...AU) + 1] : [0, 0],
        className: pF(UU)
      }
    }
    const PF = "Assembler";

    function WF(UU) {
      var XU, zU, cU, yU, QU, AU, FU, oU, DU;
      let {
        jU: EU,
        store: YU,
        renderSlot: NU
      } = UU;
      const {
        t: IU
      } = (0, Wy.I)(), pU = aF(YU, EU), aU = null !== (XU = null === pU || void 0 === pU ? void 0 : pU.tier) && void 0 !== XU ? XU : 1, tU = null !== (zU = null === pU || void 0 === pU ? void 0 : pU.taught) && void 0 !== zU ? zU : null, gU = bX(PF, {
        coupled: !1,
        taught: tU
      }), kU = null !== (cU = gU.bench) && void 0 !== cU ? cU : null, GU = null !== (yU = null === pU || void 0 === pU ? void 0 : pU.status) && void 0 !== yU ? yU : null, BU = null !== (QU = null === pU || void 0 === pU ? void 0 : pU.power) && void 0 !== QU ? QU : null, ZU = null !== (AU = null === pU || void 0 === pU ? void 0 : pU.powerCap) && void 0 !== AU ? AU : 4e3;
      return (0, GQ.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, GQ.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, GQ.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: IU((0, Ty.e)(PF))
          }), kU && (0, GQ.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [IU("buildAFactory2Game:benchMakes"), (0, GQ.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, GQ.jsx)(Ly.c, {
                itemName: kU.output,
                amount: 0
              })
            }), (null === pU || void 0 === pU ? void 0 : pU.taughtName) && (0, GQ.jsx)(ey.d, {
              text: pU.taughtName
            }), kU.outputAmount > 1 && (0, GQ.jsxs)("span", {
              children: ["\xd7", kU.outputAmount]
            })]
          }), !kU && (0, GQ.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: IU("buildAFactory2Game:benchTeachHint")
          }), (0, GQ.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, GQ.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (FU = gU.inputSlots) && void 0 !== FU ? FU : []).map(((UU, XU) => {
                const zU = null === kU || void 0 === kU ? void 0 : kU.inputs[XU];
                return (0, GQ.jsxs)("div", {
                  className: By()("Baf2BenchInput", {
                    Spare: !zU
                  }),
                  children: [(0, GQ.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [NU(UU), zU && (0, GQ.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, GQ.jsx)(Ly.c, {
                        itemName: zU.item,
                        amount: 0
                      })
                    })]
                  }), (0, GQ.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: zU ? `\xd7${zU.amount}` : "\xa0"
                  })]
                }, UU)
              }))
            }), (0, GQ.jsx)(gF, {
              running: "running" === GU,
              opMs: gU.opMs,
              opLeftMs: null !== (oU = null === pU || void 0 === pU ? void 0 : pU.opLeftMs) && void 0 !== oU ? oU : null,
              updateCount: YU.updateCount
            }), (0, GQ.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, GQ.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: IU("buildAFactory2Game:machineOutput")
              }), (0, GQ.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: gU.outputSlots.map((UU => (0, GQ.jsx)("div", {
                  children: NU(UU)
                }, UU)))
              })]
            })]
          }), null !== BU && (0, GQ.jsx)(PA, {
            stored: BU,
            cap: ZU,
            rates: null !== (DU = null === pU || void 0 === pU ? void 0 : pU.powerRates) && void 0 !== DU ? DU : null
          }), null !== GU && (0, GQ.jsx)("div", {
            className: By()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== GU
            }),
            children: IU(YF(PF, GU, pU, !1))
          }), kU && kU.inputs.length > 1 && (0, GQ.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: IU("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, GQ.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, GQ.jsx)(hQ, {
            taught: tU,
            tier: aU
          }), kU && (0, GQ.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: IU("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function dF(UU) {
      var XU;
      const zU = null !== (XU = rX[PF].inputSlots) && void 0 !== XU ? XU : [];
      return {
        render: XU => {
          let {
            jU: zU,
            renderSlot: cU
          } = XU;
          return (0, GQ.jsx)(WF, {
            jU: zU,
            store: UU,
            renderSlot: cU
          })
        },
        quickMoveRange: [Math.min(...zU), Math.max(...zU) + 1],
        className: pF(PF)
      }
    }
    var LF = zU(97),
      eF = zU(1129),
      CF = zU(4608);
    const wF = 600,
      qF = .5,
      OF = 4,
      SF = 1200,
      rF = 140,
      uF = 100,
      fF = 32,
      iF = 16,
      HF = 100.5,
      MF = 90,
      vF = 1.5,
      VF = 50;

    function sF(UU) {
      switch (qz(UU)) {
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
    const nF = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function mF(UU) {
      const XU = Math.ceil(60 * UU / uF);
      return {
        fuel: Math.max(fF, XU),
        waste: Math.max(iF, XU)
      }
    }

    function lF(UU, XU, zU) {
      const [cU, yU, QU] = [UU - 2, XU - 2, zU - 2];
      return 2 * (cU * yU + yU * QU + QU * cU) * rF
    }

    function xF(UU, XU, zU) {
      return Math.max(0, UU - 2) * Math.max(0, XU - 2) * Math.max(0, zU - 2)
    }

    function JF(UU, XU) {
      const [zU, cU, yU] = UU, QU = zU * cU * yU, AU = new Float32Array(QU);
      let FU = 0,
        oU = 0,
        DU = 0,
        EU = 0,
        YU = 0;
      const NU = (UU, QU, AU) => UU < 0 || UU >= zU || QU < 0 || QU >= cU || AU < 0 || AU >= yU ? 0 : XU[(QU * yU + AU) * zU + UU];
      for (let tU = 0; tU < cU; tU++)
        for (let UU = 0; UU < yU; UU++)
          for (let cU = 0; cU < zU; cU++) {
            const QU = (tU * yU + UU) * zU + cU,
              IU = XU[QU];
            if (1 === IU) {
              FU++;
              let XU = 0;
              for (const [zU, yU, QU] of nF) {
                const AU = NU(cU + zU, tU + yU, UU + QU);
                1 !== AU && 2 !== AU || XU++
              }
              AU[QU] = wF * (1 + qF * Math.min(XU, OF)), EU += AU[QU]
            } else if (2 === IU) oU++;
            else if (3 === IU) {
              DU++;
              nF.some((XU => {
                let [zU, yU, QU] = XU;
                return 1 === NU(cU + zU, tU + yU, UU + QU)
              })) && (YU += SF)
            }
          }
      const IU = lF(zU + 2, cU + 2, yU + 2),
        pU = Math.min(EU, YU, IU),
        aU = FU > 0 ? EU * uF / FU : 0;
      return {
        rods: FU,
        graphite: oU,
        channels: DU,
        fuelHeat: EU,
        cooling: YU,
        size: IU,
        max: pU,
        vol: QU,
        powerPerUnit: aU,
        pelletsPerMin: aU > 0 ? pU / aU * 60 : 0,
        waterPerS: pU * TU.p,
        rodHeat: AU
      }
    }
    const jF = 0,
      KF = 1,
      bF = 6,
      TF = 7,
      hF = 8;

    function Uo(UU, XU) {
      const [zU, cU, yU] = UU, QU = new Uint8Array(zU * cU * yU), AU = (UU, QU, AU) => UU < 0 || UU >= zU || QU < 0 || QU >= cU || AU < 0 || AU >= yU ? 0 : XU[(QU * yU + AU) * zU + UU];
      for (let FU = 0; FU < cU; FU++)
        for (let UU = 0; UU < yU; UU++)
          for (let cU = 0; cU < zU; cU++) {
            const oU = (FU * yU + UU) * zU + cU,
              DU = XU[oU];
            if (1 === DU) {
              let XU = 0;
              for (const [zU, yU, QU] of nF) {
                const oU = AU(cU + zU, FU + yU, UU + QU);
                XU += 1 === oU || 2 === oU ? 1 : 0
              }
              QU[oU] = KF + Math.min(XU, OF)
            } else if (3 === DU) {
              const XU = nF.some((XU => {
                let [zU, yU, QU] = XU;
                return 1 === AU(cU + zU, FU + yU, UU + QU)
              }));
              QU[oU] = XU ? bF : TF
            } else 2 === DU && (QU[oU] = hF)
          }
      return QU
    }

    function Xo(UU) {
      return UU.fuelHeat <= UU.cooling && UU.fuelHeat <= UU.size ? "fuel" : UU.cooling <= UU.size ? "cooling" : "size"
    }
    const zo = MF;

    function co(UU, XU, zU) {
      return Math.round(UU * XU * zU * 25e3 * (1 + .25 * (Math.min(UU, XU, zU) - 2)))
    }

    function yo(UU) {
      return Math.max(0, Math.min(TU.d, UU))
    }

    function Qo(UU, XU, zU) {
      const cU = XU * yo(zU);
      return UU <= 0 ? 0 : cU > 0 ? Math.min(200, 100 * UU / cU) : 200
    }

    function Ao(UU, XU) {
      const zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? vF : 1;
      return Math.min(UU.fuelHeat * zU, UU.cooling * yo(XU), UU.size * zU)
    }

    function Fo(UU) {
      return 2 + UU / 10
    }
    const oo = "buildAFactory2Game:";

    function Do(UU) {
      var XU;
      return null !== (XU = UU.baf2RxMood) && void 0 !== XU ? XU : function(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const zU = [
          ["calm", 50],
          ["warm", zo],
          ["hot", HF]
        ];
        for (const [cU, yU] of zU)
          if (UU < yU + (cU === XU ? 3 : 0)) return cU;
        return "alarm"
      }(UU.baf2RxHeat)
    }
    const Eo = 120;

    function Yo(UU) {
      const XU = UU.baf2RxState;
      if ("running" === XU && UU.baf2RxHeat > HF) return {
        label: `${oo}rxState_tooHot`,
        tone: "bad",
        fix: `${oo}rxFix_tooHot`
      };
      switch (XU) {
        case "running":
          return {
            label: `${oo}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${oo}rxState_idle`, tone: "off", fix: `${oo}rxFix_idle`
          };
        case "scram":
          return {
            label: `${oo}rxState_scram`, tone: "off", fix: UU.baf2RxHeat < VF ? `${oo}rxFix_scramCool` : `${oo}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${oo}rxState_${XU}`, tone: "off", fix: `${oo}rxFix_${XU}`
          };
        case "melted":
          return {
            label: `${oo}rxState_melted`, tone: "bad", fix: `${oo}rxFix_melted`
          };
        default:
          return {
            label: `${oo}rxState_${XU}`, tone: "warn", fix: `${oo}rxFix_${XU}`
          }
      }
    }

    function No(UU) {
      const [XU, zU, cU] = UU.baf2RxStats;
      return {
        fuelHeat: XU,
        cooling: zU * (UU.baf2RxCryo ? Math.max(1, yo(UU.baf2RxWater / 100)) : 1),
        size: cU
      }
    }

    function Io(UU) {
      var XU;
      const zU = "idle" === UU.baf2RxState || "running" === UU.baf2RxState && UU.baf2RxHeat <= HF || "scram" === UU.baf2RxState && UU.baf2RxHeat < VF;
      if (0 === (UU.baf2RxFlags & BX) || !UU.baf2RxFormed || !zU) return null;
      const {
        fuelHeat: cU,
        cooling: yU,
        size: QU
      } = No(UU), AU = Math.min(cU, yU, QU), FU = Xo({
        fuelHeat: cU,
        cooling: yU,
        size: QU
      }), oU = "cooling" === FU && !0 === UU.baf2RxCryoOpen && !UU.baf2RxCryo, DU = null !== (XU = UU.baf2RxCells) && void 0 !== XU ? XU : "", EU = ("fuel" === FU || "cooling" === FU && !0 === UU.baf2RxCryo) && DU.length > 0 && !DU.includes(String(0)), YU = oU ? "Cryo" : "scram" === UU.baf2RxState ? "Off" : "";
      return AU < 12e3 ? {
        key: `${oo}rxGrow_${EU?"full":FU}${YU}`,
        amount: AU
      } : null
    }

    function po(UU, XU) {
      return UU[0] === XU[0] && UU[1] === XU[1] && UU[2] === XU[2]
    }

    function ao(UU) {
      return [...UU].sort(((UU, XU) => Number(XU[2] < XU[1]) - Number(UU[2] < UU[1])))
    }

    function to(UU, XU) {
      return XU.some((XU => {
        let [zU, cU] = XU;
        return !(cU <= 0) && ["edge", "cap", "wall", "inside"].some((XU => zU === Qc(UU, XU)))
      }))
    }

    function go(UU, XU, zU) {
      const cU = UU.baf2RxFuel - UU.baf2RxPu > 0 ? zU : 0;
      return {
        full: UU.baf2RxWaste > XU - 3,
        fullInS: cU > 0 ? Math.max(0, XU - UU.baf2RxWaste) / cU : null
      }
    }
    const ko = {
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

    function Go(UU) {
      return Bo[UU]
    }
    const Bo = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function Zo(UU) {
      let [XU, zU, cU] = UU;
      return Math.ceil(lF(XU, zU, cU) * TU.p)
    }

    function Ro(UU, XU) {
      return "battery" === UU ? XU[0] * XU[1] * XU[2] : function(UU) {
        let [XU, zU, cU] = UU;
        return XU * zU * cU - Math.max(0, XU - 2) * Math.max(0, zU - 2) * Math.max(0, cU - 2)
      }(XU) - 1
    }

    function Po(UU) {
      const XU = Math.max(0, UU);
      if (XU < 10) return String(Math.round(10 * XU) / 10);
      if (XU < 1e4) return Math.round(XU).toLocaleString("en-US");
      if (XU < 1e6) return `${XU<1e5?(Math.floor(XU/100)/10).toFixed(1):Math.floor(XU/1e3)}k`;
      const zU = XU / 1e6;
      return `${zU<10?(Math.floor(100*zU)/100).toFixed(2):zU<100?(Math.floor(10*zU)/10).toFixed(1):Math.floor(zU)}M`
    }

    function Wo(UU) {
      return UU <= 0 ? "0" : UU >= 10 ? String(Math.round(UU)) : UU.toFixed(UU >= 1 ? 1 : 2)
    }

    function Lo(UU) {
      const XU = Tz(UU, 0),
        zU = Tz(UU, Jz(UU) - 1);
      return {
        lo: [Math.min(XU[0], zU[0]), Math.min(XU[1], zU[1]), Math.min(XU[2], zU[2])],
        hi: [Math.max(XU[0], zU[0]) + 1, Math.max(XU[1], zU[1]) + 1, Math.max(XU[2], zU[2]) + 1]
      }
    }

    function eo(UU, XU, zU) {
      const cU = [XU[0] - UU[0], XU[1] - UU[1], XU[2] - UU[2]],
        yU = [(UU[0] + XU[0]) / 2, (UU[1] + XU[1]) / 2, (UU[2] + XU[2]) / 2],
        QU = [];
      for (let AU = 0; AU < 3; AU++) {
        const FU = (AU + 1) % 3,
          oU = (AU + 2) % 3;
        for (const DU of [UU[FU], XU[FU]])
          for (const EU of [UU[oU], XU[oU]]) {
            const UU = [0, 0, 0],
              XU = [zU, zU, zU];
            UU[AU] = yU[AU], XU[AU] = cU[AU] + zU, UU[FU] = DU, UU[oU] = EU, QU.push([UU, XU])
          }
      }
      return QU
    }
    const Co = "buildAFactory2Game:",
      wo = [`${Co}colNorth`, `${Co}colEast`, `${Co}colSouth`, `${Co}colWest`];

    function qo(UU, XU) {
      const [zU, cU, yU] = UU.baf2ColAt;
      return `baf2col ${zU} ${cU} ${yU} ${XU}`
    }

    function Oo(UU) {
      return function(UU) {
        if (!Number.isFinite(UU)) return "";
        const XU = Math.max(1, Math.round(UU));
        if (XU < 60) return `${XU}s`;
        const zU = XU % 60;
        return 0 === zU ? XU / 60 + "m" : `${Math.floor(XU/60)}m ${zU}s`
      }(function(UU) {
        const XU = Ac.FOCUS_BY_LASERS[Math.max(0, Math.min(4, UU))];
        return XU > 0 ? Ac.NOVA_FOCUS / XU : 1 / 0
      }(UU))
    }

    function So(UU) {
      const XU = Math.abs(Math.round(UU));
      return XU < 1e3 ? Math.round(UU).toLocaleString("en-US") : XU < 1e6 ? `${XU<1e5?(UU/1e3).toFixed(1).replace(/\.0$/,""):Math.round(UU/1e3)}k` : `${(UU/1e6).toFixed(XU<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function ro(UU, XU, zU) {
      if (Nc(XU) >= 0) {
        const XU = function(UU, XU) {
          return UU.find((UU => {
            let {
              focus: zU
            } = UU;
            return zU[0] === XU[0] && zU[2] === XU[2] && (XU[1] === zU[1] || XU[1] === zU[1] - 1)
          }))
        }(UU, zU);
        if (!XU) return null;
        const yU = function(UU) {
          let XU = 0,
            zU = 0;
          for (let cU = 0; cU < 4; cU++) XU += UU.laser[cU] ? 1 : 0, zU += UU.live[cU] ? 1 : 0;
          return {
            lasers: XU,
            live: zU,
            focusPerS: Ac.FOCUS_BY_LASERS[zU],
            drawPerS: Ac.LASER_DRAW * zU
          }
        }({
          laser: XU.lasers,
          live: XU.live
        });
        if (0 === yU.lasers || "noLasers" === XU.state) return {
          key: `${Co}lookColNoLasers`
        };
        if (0 === yU.live) return {
          key: `${Co}lookColOff_blocked`
        };
        if (!(XU.on && yU.live > 0) && ("running" !== (cU = XU.state) && "slowed" !== cU)) return {
          key: `${Co}lookColOff_${XU.state}`
        };
        if (yU.live < yU.lasers) return {
          key: `${Co}lookColLasersSome`,
          params: {
            lasers: String(yU.lasers),
            live: String(yU.live)
          }
        };
        const QU = XU.open.filter(Boolean).length;
        return QU < 4 ? {
          key: `${Co}lookColLasersSpots`,
          params: {
            live: String(yU.live),
            spots: String(QU),
            time: Oo(yU.live)
          }
        } : {
          key: `${Co}lookColLasers`,
          params: {
            live: String(yU.live),
            time: Oo(yU.live)
          }
        }
      }
      var cU;
      if (!Ic(XU)) return null;
      const yU = function(UU, XU) {
        for (const zU of UU) {
          const UU = gc(zU.focus, [XU[0], XU[1], XU[2]]);
          if (UU && UU.OD === Ac.LASER_D && zU.lasers[UU.dir]) return {
            entry: zU,
            dir: UU.dir
          }
        }
        return null
      }(UU, zU);
      if (!yU) return {
        key: `${Co}lookLaserNoCollider`
      };
      const {
        entry: QU,
        dir: AU
      } = yU;
      return QU.open[AU] ? QU.live[AU] ? {
        key: QU.on ? `${Co}lookLaserFiring` : `${Co}lookLaserReady`
      } : {
        key: `${Co}lookLaserBlocked`
      } : {
        key: `${Co}lookLaserClosed`
      }
    }

    function uo(UU, XU) {
      const zU = [];
      for (let cU = 1; cU < Ac.LASER_D; cU++) UU & 1 << XU * (Ac.LASER_D - 1) + cU - 1 && zU.push(cU);
      return zU
    }
    const fo = {
      firing: `${Co}colSlotFiring`,
      ready: `${Co}colSlotReady`,
      blocked: `${Co}colSlotBlocked`,
      empty: `${Co}colSlotEmpty`,
      closed: `${Co}colSlotClosed`
    };

    function io(UU, XU, zU, cU) {
      let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const QU = cy(UU),
        AU = cy(XU),
        FU = cy(zU),
        oU = FU.filter(Boolean).length,
        DU = QU.filter(Boolean).length,
        EU = [0, 1, 2, 3].map((UU => AU[UU] ? QU[UU] ? FU[UU] ? cU ? "firing" : "ready" : "blocked" : (UU => uo(yU, UU).length > 0)(UU) ? "blocked" : "empty" : "closed")),
        YU = EU.indexOf("blocked"),
        NU = YU < 0 && DU > 0 ? EU.indexOf("empty") : -1;
      return EU.map(((UU, XU) => {
        const zU = XU === YU ? {
          key: `${Co}colSlotClear`
        } : XU === NU ? {
          key: `${Co}colSlotAdd`,
          params: {
            time: Oo(Math.min(4, oU + 1))
          }
        } : null;
        return {
          dir: XU,
          tone: UU,
          title: {
            key: "blocked" !== UU || QU[XU] ? fo[UU] : `${Co}colSlotGap`,
            keys: {
              dir: wo[XU]
            }
          },
          hint: zU
        }
      }))
    }

    function Ho(UU) {
      var XU;
      return "noPower" === UU.baf2ColState && UU.baf2ColRxState ? Yo({
        baf2RxState: UU.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (XU = UU.baf2ColRxHeat) && void 0 !== XU ? XU : 0
      }) : null
    }

    function Mo(UU) {
      const XU = cy(UU.baf2ColSpots).filter(Boolean).length,
        zU = cy(UU.baf2ColLive);
      let cU = 0,
        yU = 0;
      return cy(UU.baf2ColLasers).forEach(((UU, XU) => {
        UU && (cU++, yU += zU[XU] ? 0 : 1)
      })), yU > 0 ? {
        key: `${Co}colSubSome`,
        params: {
          blocked: String(yU),
          lasers: String(cU)
        }
      } : XU < 4 ? {
        key: `${Co}colSubSpots`,
        params: {
          lasers: String(cU),
          spots: String(XU)
        }
      } : {
        key: `${Co}colSub`,
        params: {
          lasers: String(cU)
        }
      }
    }

    function vo(UU) {
      const XU = Ho(UU);
      if ("idle" === UU.baf2ColRxState && XU) return {
        key: `${Co}colState_noPowerIdle`
      };
      if (XU) return {
        key: `${Co}colState_noPowerReactor`,
        keys: {
          state: XU.label
        }
      };
      if ("noInput" !== UU.baf2ColState) return {
        key: `${Co}colState_${UU.baf2ColState}`
      };
      const zU = String(Math.max(0, Ac.NOVA_SA - UU.baf2ColSa)),
        cU = String(Math.max(0, Ac.NOVA_GD - UU.baf2ColGd));
      return "0" !== zU && "0" !== cU ? {
        key: `${Co}colState_noInput`,
        params: {
          sa: zU,
          gd: cU
        }
      } : "0" !== zU ? {
        key: `${Co}colState_noStarAlloy`,
        params: {
          sa: zU
        }
      } : "0" !== cU ? {
        key: `${Co}colState_noGlowDust`,
        params: {
          gd: cU
        }
      } : {
        key: `${Co}colState_running`
      }
    }

    function Vo(UU) {
      return UU.baf2ColP < 0 ? `${Co}colNext` : function(UU) {
        const XU = UU.baf2ColState;
        return UU.baf2ColP >= 0 && ("blocked" === XU || "noLasers" === XU || "noPower" === XU)
      }(UU) ? `${Co}colStalled` : null === so(UU) ? `${Co}colMaking` : `${Co}colNovaIn`
    }

    function so(UU) {
      if (UU.baf2ColP < 0 || UU.baf2ColWant <= 0) return null;
      const XU = UU.baf2ColFocusPerS * Math.min(1, UU.baf2ColDraw / UU.baf2ColWant);
      return XU > 0 ? Math.max(0, Ac.NOVA_FOCUS - UU.baf2ColP) / XU : null
    }

    function no(UU, XU) {
      const zU = [];
      for (let cU = 1; cU <= 3; cU++) {
        const yU = [UU[0], UU[1] - cU, UU[2]];
        if (!XU(yU)) return zU;
        zU.push(yU)
      }
      return []
    }

    function mo(UU, XU) {
      const zU = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let cU = 0; cU < 4; cU++) {
        const yU = cU,
          QU = tc(UU.focus, yU, Ac.LASER_D);
        if (UU.lasers[cU] || !UU.open[cU] || !XU(QU)) continue;
        const AU = [];
        for (let zU = 1; zU < Ac.LASER_D; zU++) {
          const cU = tc(UU.focus, yU, zU);
          XU(cU) || AU.push(cU)
        }
        zU.supports.push(...no(QU, XU)), 0 === AU.length ? zU.free.push(QU) : (zU.blocked.push(QU), zU.gaps.push(...AU))
      }
      return zU
    }
    const xo = Ac.LASER_D - .25,
      Jo = 4,
      jo = 2,
      Ko = 16;
    const bo = {
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
        blendMode: CF.f.Standard,
        soft: !0
      },
      To = {
        green: bo,
        pink: {
          ...bo,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function ho(UU, XU) {
      const zU = {
        ...XU.params
      };
      for (const [yU, QU] of Object.entries(null !== (cU = XU.keys) && void 0 !== cU ? cU : {})) {
        var cU;
        zU[yU] = UU(QU)
      }
      return zU
    }
    const UD = "buildAFactory2Game:",
      XD = 2 * Ac.LASER_D + 1,
      zD = Ac.LASER_D;

    function cD(UU) {
      return UU(`${UD}colFocusTip`, {
        need: So(Ac.NOVA_FOCUS)
      })
    }

    function yD(UU, XU) {
      return UU(XU.key, ho(UU, XU))
    }

    function QD(UU) {
      const XU = UU.getStatus();
      return {
        status: XU,
        entry: XU ? UU.entryAtRoot(XU.baf2ColAt) : void 0
      }
    }

    function AD(UU, XU) {
      return {
        left: 100 * (zD + UU) / XD + "%",
        top: 100 * (zD + XU) / XD + "%"
      }
    }

    function FD(UU) {
      let {
        status: XU,
        entry: zU
      } = UU;
      const cU = cy(XU.baf2ColLasers),
        yU = cy(XU.baf2ColSpots),
        QU = cy(XU.baf2ColLive),
        AU = !0 === (null === zU || void 0 === zU ? void 0 : zU.on),
        FU = Ac.LASER_D,
        oU = [];
      for (let IU = 0; IU < 4; IU++) {
        const [UU, , XU] = ac[IU];
        if (QU[IU]) {
          const zU = 100 * (FU - 1) / XD,
            cU = UU + XU > 0 ? 100 * (zD + 1) / XD : 100 * (zD - (FU - 1)) / XD,
            yU = 100 * (zD + .35) / XD,
            QU = 30 / XD,
            DU = 0 !== UU ? {
              left: `${cU}%`,
              width: `${zU}%`,
              top: `${yU}%`,
              height: `${QU}%`
            } : {
              top: `${cU}%`,
              height: `${zU}%`,
              left: `${yU}%`,
              width: `${QU}%`
            };
          oU.push((0, GQ.jsx)("i", {
            className: By()("Baf2ColDiagramBeam", {
              Off: !AU
            }),
            style: DU
          }, `beam${IU}`))
        }
        const zU = cU[IU] ? "Baf2ColDiagramLaser" : yU[IU] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        oU.push((0, GQ.jsx)("i", {
          className: zU,
          style: AD(UU * FU, XU * FU)
        }, `spot${IU}`))
      }
      for (let IU = 0; IU < 4; IU++) {
        if (cU[IU] || !yU[IU]) continue;
        const [UU, , zU] = ac[IU];
        for (const cU of uo(null !== (DU = XU.baf2ColGaps) && void 0 !== DU ? DU : 0, IU)) {
          var DU;
          oU.push((0, GQ.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: AD(UU * cU, zU * cU)
          }, `gap${IU},${cU}`))
        }
      }
      for (const [IU, , pU] of null !== (EU = null === zU || void 0 === zU ? void 0 : zU.blockers) && void 0 !== EU ? EU : []) {
        var EU, YU, NU;
        const UU = IU - (null !== (YU = null === zU || void 0 === zU ? void 0 : zU.focus[0]) && void 0 !== YU ? YU : 0),
          XU = pU - (null !== (NU = null === zU || void 0 === zU ? void 0 : zU.focus[2]) && void 0 !== NU ? NU : 0);
        oU.push((0, GQ.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: AD(UU, XU)
        }, `block${UU},${XU}`))
      }
      return (0, GQ.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [oU, (0, GQ.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function oD(UU) {
      let {
        status: XU
      } = UU;
      const {
        t: zU
      } = (0, Wy.I)(), cU = cy(XU.baf2ColLive).filter(Boolean).length;
      return (0, GQ.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, GQ.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: cD(zU),
          children: zU(`${UD}colLadder`)
        }), (0, GQ.jsx)("ul", {
          children: [1, 2, 3, 4].map((UU => (0, GQ.jsx)("li", {
            className: By()({
              On: UU === cU
            }),
            children: zU(`${UD}colLadderChip`, {
              lasers: String(UU),
              time: Oo(UU)
            })
          }, UU)))
        })]
      })
    }

    function DD(UU) {
      let {
        item: XU,
        uD: zU,
        need: cU,
        cap: yU
      } = UU;
      const {
        t: QU
      } = (0, Wy.I)(), AU = Math.min(zU, cU);
      return (0, GQ.jsxs)("li", {
        className: By()("Baf2ColTile", {
          Short: zU < cU
        }),
        children: [(0, GQ.jsx)(ED, {
          item: XU
        }), (0, GQ.jsx)("b", {
          className: "Baf2ColTileValue",
          children: QU(`${UD}colOutOf`, {
            amount: String(AU),
            cap: String(cU)
          })
        }), (0, GQ.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, GQ.jsx)("i", {
            style: {
              width: 100 * AU / cU + "%"
            }
          })
        }), zU > cU && (0, GQ.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: QU(`${UD}colIntakeHeld`, {
            amount: String(zU),
            cap: String(yU)
          })
        })]
      })
    }

    function ED(UU) {
      let {
        item: XU
      } = UU;
      const {
        t: zU
      } = (0, Wy.I)();
      return (0, GQ.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, GQ.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, GQ.jsx)(Ly.c, {
            itemName: XU,
            amount: 0
          })
        }), (0, GQ.jsx)("span", {
          className: "Baf2ColTileName",
          children: (0, Ty.h)(zU, XU)
        })]
      })
    }

    function YD(UU) {
      switch (UU.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function ND(UU) {
      var XU, zU, yU;
      let {
        store: QU,
        close: AU
      } = UU;
      const {
        t: FU
      } = (0, Wy.I)(), oU = uA(), {
        status: DU,
        entry: EU
      } = function(UU) {
        const [XU, zU] = (0, cU.useState)((() => QD(UU)));
        return (0, cU.useEffect)((() => (zU(QD(UU)), UU.subscribe((() => {
          zU(QD(UU))
        })))), [UU]), XU
      }(QU), [YU, NU] = (0, cU.useState)(null), IU = null === DU || void 0 === DU ? void 0 : DU.baf2ColHold;
      (0, cU.useEffect)((() => {
        NU(null)
      }), [IU]);
      const pU = (0, cU.useRef)({
          p: -1,
          n: 0
        }),
        aU = null !== (XU = null === DU || void 0 === DU ? void 0 : DU.baf2ColP) && void 0 !== XU ? XU : -1;
      aU < pU.current.p && pU.current.n++, pU.current.p = aU;
      const tU = (0, cU.useRef)(null),
        [gU] = (0, cU.useState)((() => {
          return (UU = QU.heldAtOpen()) === Dc || UU === Ec ? {
            key: `${Co}colBeltItIn`,
            item: UU
          } : null;
          var UU
        }));
      if (!DU) return null;
      const kU = DU.baf2ColMember,
        GU = DU.baf2ColP >= 0,
        BU = function(UU, XU) {
          if (UU.baf2ColP >= 0 && UU.baf2ColDraw > 0) {
            const XU = UU.baf2ColWant > 0 ? Math.min(1, UU.baf2ColDraw / UU.baf2ColWant) : 0;
            return {
              focus: UU.baf2ColFocusPerS * XU,
              draw: UU.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === UU.baf2ColState && XU && XU.draw > 0 ? {
            ...XU,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(DU, tU.current);
      tU.current = BU.draw > 0 ? BU : null;
      const ZU = "slowed" === DU.baf2ColState || "noPower" === DU.baf2ColState,
        RU = so(DU),
        PU = null !== YU && void 0 !== YU ? YU : DU.baf2ColHold,
        WU = function(UU) {
          var XU, zU;
          return "idle" === UU.baf2ColRxState ? null : null !== (XU = null === (zU = Ho(UU)) || void 0 === zU ? void 0 : zU.fix) && void 0 !== XU ? XU : null
        }(DU),
        dU = null === WU && null === gU ? function(UU) {
          var XU;
          const zU = UU.baf2ColSentTo;
          if (!zU) return null;
          const cU = null !== (XU = UU.baf2ColSentHeld) && void 0 !== XU ? XU : null;
          return {
            key: null === cU ? `${Co}colNovaSentToMachine` : `${Co}colNovaSentTo`,
            target: zU,
            uD: cU
          }
        }(DU) : null,
        LU = GU ? FU(`${UD}colFocusOf`, {
          focus: So(DU.baf2ColP),
          need: So(Ac.NOVA_FOCUS)
        }) : null;
      return (0, GQ.jsx)(aA.c, {
        close: AU,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, GQ.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, GQ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, GQ.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, GQ.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, GQ.jsx)(Ly.c, {
                  itemName: Fc,
                  amount: 0
                })
              }), (0, GQ.jsxs)("div", {
                children: [(0, GQ.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: (0, Ty.h)(FU, Fc)
                }), (0, GQ.jsx)("p", {
                  children: yD(FU, Mo(DU))
                })]
              })]
            }), (0, GQ.jsx)(tA.k, {
              onClick: AU
            })]
          }), (0, GQ.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, GQ.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, GQ.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, GQ.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: FU(Vo(DU), {
                    time: null === RU ? "" : aQ(FU, RU)
                  })
                }), (0, GQ.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, GQ.jsx)("i", {
                    style: {
                      width: (GU ? 100 * DU.baf2ColP / Ac.NOVA_FOCUS : 0) + "%"
                    }
                  }, pU.current.n)
                }), (0, GQ.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, GQ.jsxs)("span", {
                    title: cD(FU),
                    children: [(0, GQ.jsx)("b", {
                      children: So(BU.focus)
                    }), " ", FU(`${UD}colFocusPerS`)]
                  }), (0, GQ.jsxs)("span", {
                    className: By()("Baf2ColDraw", {
                      Short: ZU
                    }),
                    children: [(0, GQ.jsx)(dy.d, {
                      name: "bolt"
                    }), ZU ? FU(`${UD}colDrawOf`, {
                      draw: So(DU.baf2ColDraw),
                      want: So(DU.baf2ColWant)
                    }) : FU(`${UD}colPowerPerS`, {
                      rate: So(BU.draw)
                    })]
                  }), null !== LU && (0, GQ.jsx)("span", {
                    className: "Soft",
                    children: LU
                  })]
                })]
              }), (0, GQ.jsx)("p", {
                className: By()("Baf2ColState", YD(DU)),
                children: yD(FU, vo(DU))
              }), null !== WU && (0, GQ.jsx)("p", {
                className: "Baf2ColStateFix",
                children: FU(WU)
              }), null === WU && null !== gU && (0, GQ.jsx)("p", {
                className: "Baf2ColStateFix",
                children: FU(gU.key, {
                  item: (0, Ty.h)(FU, gU.item)
                })
              }), dU && (0, GQ.jsx)("p", {
                className: "Baf2ColStateFix",
                children: FU(dU.key, {
                  target: (0, Ty.h)(FU, dU.target),
                  amount: String(null !== (zU = dU.uD) && void 0 !== zU ? zU : 0)
                })
              }), (0, GQ.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, GQ.jsx)(DD, {
                  item: Dc,
                  uD: DU.baf2ColSa,
                  need: Ac.NOVA_SA,
                  cap: Ac.SA_CAP
                }), (0, GQ.jsx)(DD, {
                  item: Ec,
                  uD: DU.baf2ColGd,
                  need: Ac.NOVA_GD,
                  cap: Ac.GD_CAP
                }), (0, GQ.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, GQ.jsx)(ED, {
                    item: "Nova Matter"
                  }), (0, GQ.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: FU(`${UD}colNovaHeld`, {
                      amount: String(DU.baf2ColOut),
                      cap: String(Ac.OUT_CAP)
                    })
                  }), kU && (0, GQ.jsx)(tA.l, {
                    className: "Baf2ColTake",
                    disabled: 0 === DU.baf2ColOut,
                    onClick: () => {
                      oU.send(qo(DU, "take"))
                    },
                    children: FU(`${UD}colTake`)
                  })]
                })]
              }), kU && (0, GQ.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": PU,
                className: By()("Baf2ColHold", {
                  On: PU
                }),
                onClick: UU => {
                  UU.detail > 0 && UU.currentTarget.blur(), NU(!PU), oU.send(qo(DU, "hold " + (PU ? 0 : 1)))
                },
                children: [(0, GQ.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, GQ.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, GQ.jsx)("b", {
                    children: FU(`${UD}colHold`)
                  }), (0, GQ.jsx)("span", {
                    children: FU(`${UD}colHoldNote`)
                  })]
                })]
              })]
            }), (0, GQ.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, GQ.jsx)(FD, {
                status: DU,
                entry: EU
              }), (0, GQ.jsx)("ul", {
                className: "Baf2ColSlots",
                children: io(DU.baf2ColLasers, DU.baf2ColSpots, DU.baf2ColLive, BU.beamsOn, null !== (yU = DU.baf2ColGaps) && void 0 !== yU ? yU : 0).map((UU => (0, GQ.jsxs)("li", {
                  className: UU.tone,
                  children: [(0, GQ.jsx)("b", {
                    children: yD(FU, UU.title)
                  }), null !== UU.hint && (0, GQ.jsx)("span", {
                    children: yD(FU, UU.hint)
                  })]
                }, UU.dir)))
              }), (0, GQ.jsx)(oD, {
                status: DU
              })]
            })]
          })]
        })
      })
    }
    const ID = "buildAFactory2Game:",
      pD = 36e5,
      aD = 864e5;

    function tD(UU, XU, zU) {
      return Math.max(0, Math.ceil((UU + XU - Math.max(zU, UU)) / 1e3))
    }

    function gD(UU) {
      return UU.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function kD(UU) {
      return "Homestead" === UU
    }

    function GD(UU) {
      return function(UU) {
        let XU = 0;
        for (const zU of UU) {
          const UU = /^Island ([1-9]\d{0,5})$/.exec(zU);
          UU && (XU = Math.max(XU, Number(UU[1])))
        }
        return `Island ${XU+1}`
      }(UU.map((UU => UU.baf2IslandName)))
    }

    function BD(UU, XU) {
      return function(UU) {
        return `${ID}islandsBlocked${UU[0].toUpperCase()}${UU.slice(1)}`
      }("degraded" === UU && 0 === XU ? "stuck" : UU)
    }

    function ZD(UU) {
      return UU.filter((UU => {
        var XU;
        return !UU.baf2IslandActive && void 0 === UU.baf2IslandUnreadable && void 0 === (null === (XU = UU.baf2IslandCoop) || void 0 === XU ? void 0 : XU.baf2CoopState)
      })).length
    }

    function RD(UU) {
      return "coopMoving" === UU || "coopUnreachable" === UU
    }

    function PD(UU, XU) {
      const zU = XU > 0;
      return {
        change: null === UU && !zU,
        switch: (null === UU || "degraded" === UU || RD(UU)) && !zU,
        rename: "loading" !== UU && "degraded" !== UU && "stuck" !== UU
      }
    }

    function WD(UU, XU) {
      return void 0 === UU || "corrupt" === UU && XU
    }
    const dD = eA;

    function LD(UU, XU, zU) {
      if (null !== UU && void 0 !== UU && UU.untilGone) {
        var cU;
        return !("dismiss" === UU.untilGone && void 0 === (null === (cU = XU.baf2IslandCoop) || void 0 === cU ? void 0 : cU.baf2CoopState)) && zU - UU.atMs < 32500
      }
      return void 0 !== UU && zU - UU.atMs < dD && XU.baf2IslandName === UU.from
    }
    const eD = eA;

    function CD(UU) {
      return "core" === (null === UU || void 0 === UU ? void 0 : UU.kind) ? UU.core : "islands" === (null === UU || void 0 === UU ? void 0 : UU.kind) ? UU.backToCore : void 0
    }

    function wD(UU) {
      return `\0${UU}\0`
    }

    function qD(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const cU = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const QU of Object.keys(zU)) cU[QU] = wD(QU);
      let yU = Object.keys(cU).length > 0 ? UU(XU, cU) : UU(XU);
      for (const [QU, AU] of Object.entries(zU)) yU = yU.split(wD(QU)).join(AU);
      return yU
    }

    function OD(UU, XU) {
      return UU ? XU ? "enabled" : "disabled" : "hidden"
    }
    const SD = {
      removed: `${ID}islandsCoopRemoved`,
      deleted: `${ID}islandsCoopDeleted`,
      notReady: `${ID}islandsCoopNotReady`,
      gone: `${ID}islandsCoopGone`
    };

    function rD(UU) {
      var XU;
      return "member" !== (null === (XU = UU.baf2IslandCoop) || void 0 === XU ? void 0 : XU.baf2CoopRole) && "newer" !== UU.baf2IslandUnreadable
    }

    function uD(UU, XU, zU, cU, yU, QU) {
      const AU = UU.baf2IslandActive,
        FU = UU.baf2IslandUnreadable,
        oU = UU.baf2IslandCoop,
        DU = function(UU, XU, zU) {
          return {
            switch: UU.switch && void 0 === XU,
            delete: UU.change && WD(XU, zU)
          }
        }(XU, FU, cU),
        EU = AU && void 0 !== oU && void 0 === oU.baf2CoopState && "coopUnreachable" === QU,
        YU = {
          switch: OD((!AU || EU) && void 0 === FU, EU || DU.switch),
          switchLabel: EU ? "tryAgain" : "switch",
          rename: OD(!0, XU.rename),
          delete: OD(!AU, DU.delete),
          deleteWaits: !AU && WD(FU, cU),
          people: OD(void 0 !== UU.baf2IslandInvitable || yU && AU && void 0 === FU && void 0 === oU, !0),
          peopleLabel: "invite",
          leave: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        NU = !AU && DU.delete;
      if (void 0 === oU) return zU ? {
        ...YU,
        delete: OD(!AU, !1),
        deleteWaits: !1,
        note: NU ? {
          key: `${ID}islandsCoopKeepOwn`
        } : null
      } : YU;
      const IU = oU.baf2CoopState,
        pU = oU.baf2CoopMembers.length > 1,
        aU = {
          ...YU,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== IU && "member" === oU.baf2CoopRole) return {
        ...aU,
        dismiss: OD(!0, XU.rename),
        note: {
          key: SD[IU],
          names: {
            owner: oU.baf2CoopOwner
          }
        }
      };
      if (void 0 !== IU) {
        let UU = {
          key: `${ID}islandsCoopOwnLost`
        };
        return NU && pU ? UU = {
          key: `${ID}islandsCoopDeleteMembers`
        } : NU && zU && (UU = {
          key: `${ID}islandsCoopKeepOwn`
        }), {
          ...aU,
          delete: OD(!AU, DU.delete && !pU && !zU),
          deleteWaits: YU.deleteWaits && !pU && !zU,
          note: UU
        }
      }
      if ("member" === oU.baf2CoopRole) return {
        ...YU,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        leave: OD(!0, AU ? XU.switch : XU.rename)
      };
      const tU = oU.baf2CoopManageHere;
      let gU = null;
      var kU;
      tU || AU ? NU && pU ? gU = {
        key: `${ID}islandsCoopDeleteMembers`
      } : NU && zU && (gU = {
        key: `${ID}islandsCoopKeepOwn`
      }) : gU = {
        key: null !== (kU = oU.baf2CoopLeft) && void 0 !== kU && kU.length ? `${ID}islandsCoopManageThereClaim` : `${ID}islandsCoopManageThere`
      };
      return {
        ...YU,
        rename: OD(!0, XU.rename && tU),
        delete: OD(!AU, DU.delete && !pU && !zU),
        deleteWaits: YU.deleteWaits && !pU && !zU,
        people: "enabled",
        peopleLabel: "players",
        unshare: OD(tU && AU && !pU, XU.change),
        remove: tU,
        note: gU
      }
    }

    function fD(UU) {
      var XU;
      const zU = UU.baf2IslandCoop;
      if ("owner" !== (null === zU || void 0 === zU ? void 0 : zU.baf2CoopRole) || void 0 !== zU.baf2CoopState || null === (XU = zU.baf2CoopLeft) || void 0 === XU || !XU.length) return null;
      const cU = UU.baf2IslandActive && zU.baf2CoopManageHere;
      return {
        left: zU.baf2CoopLeft,
        claim: cU,
        goThere: !cU && zU.baf2CoopManageHere
      }
    }

    function iD(UU) {
      return UU.baf2CoopMembers.length >= UU.baf2CoopMax
    }

    function HD(UU, XU, zU) {
      return void 0 !== UU && XU < UU.answer && zU - UU.atMs < dD
    }
    const MD = "buildAFactory2Game:";

    function vD(UU, XU) {
      return {
        onKeyDown: zU => {
          zU.stopPropagation(), zU.nativeEvent.isComposing || 229 === zU.nativeEvent.keyCode || ("Enter" === zU.key ? (zU.preventDefault(), UU()) : "Escape" === zU.key && (zU.preventDefault(), XU()))
        }
      }
    }

    function VD(UU) {
      return {
        onKeyDown: XU => {
          "Escape" !== XU.key || XU.nativeEvent.isComposing || (XU.preventDefault(), XU.stopPropagation(), UU())
        }
      }
    }

    function sD(UU) {
      UU.currentTarget.select()
    }

    function nD(UU, XU) {
      (0, cU.useEffect)((() => {
        var zU;
        UU && (null === (zU = XU.current) || void 0 === zU || zU.scrollIntoView({
          block: "nearest"
        }))
      }), [UU, XU])
    }

    function mD(UU) {
      const [XU, zU] = (0, cU.useState)(null);
      return (0, cU.useEffect)((() => {
        const XU = document.querySelector(".UiRequests"),
          cU = UU.current;
        if (!XU || !cU || "undefined" === typeof ResizeObserver) return;
        const yU = () => {
          const UU = XU.getBoundingClientRect(),
            yU = cU.getBoundingClientRect(),
            QU = cU.parentElement,
            AU = QU && parseFloat(getComputedStyle(QU).paddingTop) || 0,
            FU = function(UU, XU, zU, cU) {
              if (!UU || UU.height <= 0 || UU.right <= XU.left || UU.left >= XU.right) return null;
              const yU = Math.max(cU, UU.bottom + 8);
              return {
                marginTop: Math.round(yU - cU),
                maxHeight: Math.max(0, Math.floor(zU - yU - cU))
              }
            }(UU, yU, window.innerHeight, AU);
          zU((UU => (null === UU || void 0 === UU ? void 0 : UU.marginTop) === (null === FU || void 0 === FU ? void 0 : FU.marginTop) && (null === UU || void 0 === UU ? void 0 : UU.maxHeight) === (null === FU || void 0 === FU ? void 0 : FU.maxHeight) ? UU : FU))
        };
        yU();
        const QU = new ResizeObserver(yU);
        return QU.observe(XU), window.addEventListener("resize", yU), () => {
          QU.disconnect(), window.removeEventListener("resize", yU)
        }
      }), [UU]), XU
    }

    function lD() {
      (0, cU.useLayoutEffect)((() => (document.documentElement.classList.add("Baf2IslandsOverlayShown"), () => {
        document.documentElement.classList.remove("Baf2IslandsOverlayShown")
      })), [])
    }

    function xD(UU) {
      (0, cU.useEffect)((() => {
        var XU;
        null === (XU = UU.current) || void 0 === XU || XU.focus()
      }), [UU])
    }

    function JD(UU) {
      const [XU, zU] = (0, cU.useState)(Date.now);
      return (0, cU.useEffect)((() => {
        const XU = window.setInterval((() => {
          zU(Date.now())
        }), UU);
        return () => {
          window.clearInterval(XU)
        }
      }), [UU]), XU
    }

    function jD(UU) {
      let {
        tier: XU,
        t: zU
      } = UU;
      const {
        kind: cU,
        short: yU
      } = tU(XU), QU = IU(XU, pU), AU = zU(`${MD}${QU.key}`, {
        ...QU.params,
        name: zU(`${MD}${gU(XU).nameKey}`)
      });
      return (0, GQ.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, GQ.jsx)("span", {
          className: By()("Baf2IslandTierPip", {
            Stage: "tier" !== cU
          }),
          "aria-hidden": "true",
          children: yU
        }), AU]
      })
    }

    function KD(UU) {
      let {
        note: XU,
        className: zU,
        t: cU
      } = UU;
      return (0, GQ.jsx)("p", {
        className: By()("Baf2IslandNote", zU),
        children: qD(cU, XU.key, XU.names, XU.params)
      })
    }
    const bD = "buildAFactory2Game:";

    function TD(UU) {
      let {
        message: XU,
        arrivedAtMs: zU,
        close: yU,
        leave: QU
      } = UU;
      const AU = uA(),
        {
          t: FU
        } = (0, Wy.I)(),
        oU = JD(1e3),
        DU = (0, cU.useRef)(null);
      lD(), (0, cU.useEffect)((() => {
        var UU;
        null === (UU = DU.current) || void 0 === UU || UU.focus()
      }), []);
      const EU = tD(zU, XU.baf2TransferInMs, oU),
        YU = zU + XU.baf2TransferInMs - 1e3,
        [NU, IU] = (0, cU.useState)(null);
      (0, cU.useEffect)((() => {
        const UU = window.setTimeout((() => {
          IU(YU)
        }), Math.max(0, YU - Date.now()));
        return () => {
          window.clearTimeout(UU)
        }
      }), [YU]);
      const pU = NU === YU || oU >= YU,
        aU = XU.baf2TransferIsland,
        tU = XU.baf2TransferOwner;
      return (0, GQ.jsx)(aA.c, {
        close: yU,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, GQ.jsxs)("section", {
          ref: DU,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, GQ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, GQ.jsxs)("div", {
              children: [(0, GQ.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === tU ? qD(FU, `${bD}islandsTransferOwn`, {
                  island: aU
                }) : qD(FU, `${bD}islandsTransfer`, {
                  island: aU,
                  owner: tU
                })
              }), (0, GQ.jsx)("p", {
                children: pU ? FU(`${bD}islandsTransferNow`) : FU(`${bD}islandsTransferIn`, {
                  time: aQ(FU, EU)
                })
              })]
            }), (0, GQ.jsx)(tA.k, {
              ariaLabel: FU(`${bD}islandsClose`),
              onClick: yU
            })]
          }), !pU && (0, GQ.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, GQ.jsx)("p", {
              className: "Baf2TransferNote",
              children: FU(`${bD}islandsTransferNote`)
            }), (0, GQ.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, GQ.jsx)(tA.f, {
                onClick: () => {
                  AU.send("baf2coopstay"), QU()
                },
                children: FU(`${bD}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var hD = zU(1492),
      UE = zU(1138),
      XE = zU.n(UE);
    const zE = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const cE = "buildAFactory2Game:",
      yE = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function QE(UU, XU, zU) {
      return void 0 === XU ? zU : "string" === typeof XU ? XU : Array.isArray(XU) ? XU.map((XU => "string" === typeof XU ? XU : "translationKey" in XU ? UU(XU.translationKey) : "")).join("") : UU(XU.translationKey)
    }

    function AE(UU) {
      const XU = {};
      for (const [zU, cU] of Object.entries(null !== UU && void 0 !== UU ? UU : {})) XU[zU] = cU < 0 ? pQ(cU) : cU.toLocaleString("en-US");
      return XU
    }

    function FE(UU, XU) {
      const zU = XU ? "touch" : "mouse";
      return {
        use: UU(`${cE}lookUse_${zU}`),
        Use: UU(`${cE}lookUseStart_${zU}`)
      }
    }
    const oE = (0, cU.memo)((function(UU) {
      let {
        item: XU
      } = UU;
      return (0, GQ.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, GQ.jsx)(Ly.c, {
          itemName: XU,
          amount: 0
        })
      })
    }));

    function DE(UU) {
      let {
        label: XU,
        percent: zU,
        progress: cU
      } = UU;
      return (0, GQ.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, GQ.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${XU}: ${cU}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": zU,
          children: (0, GQ.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${zU}%`
            }
          })
        }), (0, GQ.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: cU
        })]
      })
    }

    function EE(UU) {
      let {
        chips: XU
      } = UU;
      return (0, GQ.jsx)("span", {
        className: "Baf2QuestChips",
        children: XU.map((UU => {
          let [XU, zU, cU] = UU;
          const yU = zU >= cU;
          return (0, GQ.jsxs)("span", {
            className: By()("Baf2QuestChip", {
              Met: yU
            }),
            children: [(0, GQ.jsx)(oE, {
              item: XU
            }), (0, GQ.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: yU ? `\u2713${cU}` : `${zU}/${cU}`
            })]
          }, XU)
        }))
      })
    }

    function YE(UU, XU) {
      const {
        key: zU,
        params: cU
      } = IU(XU, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return UU(`${cE}${zU}`, {
        ...cU,
        name: UU(`${cE}${gU(XU).nameKey}`)
      })
    }

    function NE(UU) {
      let {
        core: XU,
        t: zU
      } = UU;
      const [cU, yU] = XU, QU = yU > 0 ? Math.floor(100 * cU / yU) : 100;
      return (0, GQ.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": zU(`${cE}questCoreLabel`, {
          have: String(cU),
          need: String(yU)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": QU,
        children: [(0, GQ.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: zU(`${cE}questCore`, {
            percent: String(QU)
          })
        }), (0, GQ.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, GQ.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${QU}%`
            }
          })
        })]
      })
    }

    function IE(UU) {
      let {
        rows: XU,
        t: zU
      } = UU;
      const cU = XU.filter((UU => UU.done)).length;
      return (0, GQ.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": zU(`${cE}questStepsProgress`, {
          done: String(cU),
          total: String(XU.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": XU.length,
        "aria-valuenow": cU,
        children: XU.map((UU => (0, GQ.jsx)("span", {
          className: By()("Baf2QuestSegment", {
            Done: UU.done,
            Current: UU.current
          })
        }, UU.id)))
      })
    }
    const pE = (0, cU.memo)(tE, aE);

    function aE(UU, XU) {
      const zU = zU => UU.view.itemNames[zU] === XU.view.itemNames[zU];
      return UU.t === XU.t && UU.extra === XU.extra && (null === UU.row.item || zU(UU.row.item)) && UU.row.madeFor.every(zU) && UU.row.also.every(zU) && XE()(UU.row, XU.row)
    }

    function tE(UU) {
      let {
        row: XU,
        view: zU,
        t: cU,
        extra: yU
      } = UU;
      const {
        isTouchScreen: QU
      } = (0, gy.q)(["isTouchScreen"]), AU = XU.item ? function(UU, XU, zU) {
        return 1 !== zU && zE.has(UU) ? Py(XU) : null
      }(XU.key, XU.item, XU.total) : null, FU = AU ? cU(AU) : XU.item ? QE(cU, zU.itemNames[XU.item], XU.item) : "", oU = XU.also.map((UU => QE(cU, zU.itemNames[UU], UU))), DU = oU.join(", "), EU = function(UU, XU) {
        var zU;
        return XU.length < 2 ? null !== (zU = XU[0]) && void 0 !== zU ? zU : "" : UU(`${cE}listAnd`, {
          rest: XU.slice(0, -1).join(UU(`${cE}listComma`)),
          last: XU[XU.length - 1]
        })
      }(cU, [FU, ...oU]), YU = cU(`${cE}${XU.key}`, {
        ...FE(cU, QU),
        ...AE(XU.params),
        item: FU,
        also: DU,
        itemList: EU,
        total: String(XU.total)
      }), [NU, ...IU] = YU.split("\n"), pU = XU.total > 1 && !XU.done && !XU.away;
      return (0, GQ.jsxs)("li", {
        className: By()("Baf2QuestStep", {
          Done: XU.done,
          Current: XU.current,
          JustFinished: XU.justFinished,
          Away: XU.away
        }),
        children: [!XU.done && null !== XU.item && (0, GQ.jsx)(oE, {
          item: XU.item
        }), (XU.done || null === XU.item) && (0, GQ.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: XU.done ? "\u2713" : "\u25cb"
        }), (0, GQ.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, GQ.jsx)("strong", {
            children: NU
          }), IU.length > 0 && (0, GQ.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: IU.join(" ")
          }), !XU.done && XU.madeFor.length > 0 && (0, GQ.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: cU("buildAFactory2Game:questRowFor", {
              items: XU.madeFor.map((UU => QE(cU, zU.itemNames[UU], UU))).join(" \u2192 ")
            })
          }), pU && (0, GQ.jsx)(DE, {
            label: NU,
            percent: Math.round(100 * XU.amount / XU.total),
            progress: `${XU.amount.toLocaleString("en-US")}/${XU.total.toLocaleString("en-US")}`
          }), !XU.done && !XU.away && XU.chips && XU.chips.length > 0 && (0, GQ.jsx)(EE, {
            chips: XU.chips
          }), yU]
        })]
      })
    }
    const gE = "buildAFactory2Game:",
      kE = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      GE = {
        on: `${gE}tutorialButtonOn`,
        hud: `${gE}tutorialButtonHud`,
        off: `${gE}tutorialButtonOff`
      },
      BE = {
        on: `${gE}tutorialPickedOn`,
        hud: `${gE}tutorialPickedHud`,
        off: `${gE}tutorialPickedOff`
      };
    class ZE {
      constructor(UU, XU, zU) {
        this.commands = UU, this.quests = XU, this.toasts = zU
      }
      next() {
        const UU = function(UU) {
            return OU[(OU.indexOf(UU) + 1) % OU.length]
          }(this.quests.get().tutorial),
          XU = this.quests.setTutorial(UU);
        this.commands.send(`baf2tutorial ${UU} ${XU}`), this.toasts.show({
          baf2ToastText: [(0, rU.ie)({
            translationKey: BE[UU]
          }, rU.H.whiteUiText)],
          baf2ToastMs: 3e3,
          baf2ToastStyle: "baf2ToastInfo"
        })
      }
    }

    function RE(UU, XU) {
      let [zU, cU] = XU;
      return UU(`${cE}${zU}`, AE(cU))
    }

    function PE(UU) {
      let [XU, zU] = UU;
      return XU + JSON.stringify(zU)
    }

    function WE(UU) {
      let {
        goal: XU,
        t: zU
      } = UU;
      return XU ? (0, GQ.jsx)("span", {
        className: "Baf2BookGoal",
        children: zU(`${cE}${XU}`)
      }) : null
    }

    function dE(UU) {
      let {
        view: XU,
        t: zU
      } = UU;
      if (!XU.name) return null;
      const cU = vy(XU.rows);
      return (0, GQ.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, GQ.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: zU(`${cE}currentQuest`)
        }), (0, GQ.jsx)("strong", {
          className: "Baf2BookTitle",
          children: RE(zU, XU.name)
        }), (0, GQ.jsx)(WE, {
          goal: XU.goal,
          t: zU
        }), cU.length > 1 && (0, GQ.jsx)(IE, {
          rows: cU,
          t: zU
        }), (0, GQ.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: XU.rows.map((UU => (0, GQ.jsx)(pE, {
            row: UU,
            view: XU,
            t: zU
          }, UU.id)))
        }), XU.reward && (0, GQ.jsxs)("span", {
          className: "Baf2BookReward",
          children: [zU(`${cE}questReward`), (0, GQ.jsx)(oE, {
            item: XU.reward
          }), QE(zU, XU.itemNames[XU.reward], XU.reward)]
        })]
      })
    }

    function LE(UU) {
      let {
        quest: XU,
        upcoming: zU,
        t: cU
      } = UU;
      return (0, GQ.jsxs)("li", {
        className: By()("Baf2BookQuest", {
          Done: XU[3],
          Upcoming: zU
        }),
        children: [(0, GQ.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: XU[3] ? "\u2713" : "\u25cb"
        }), (0, GQ.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, GQ.jsx)("strong", {
            className: "Baf2BookTitle",
            children: RE(cU, XU)
          }), (0, GQ.jsx)(WE, {
            goal: XU[2],
            t: cU
          })]
        })]
      })
    }

    function eE(UU) {
      let {
        done: XU,
        total: zU,
        t: cU
      } = UU;
      const yU = zU > 0 ? Math.round(100 * XU / zU) : 0,
        QU = cU(`${cE}questBookChapterProgress`, {
          done: String(XU),
          total: String(zU)
        });
      return (0, GQ.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, GQ.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": QU,
          "aria-valuemin": 0,
          "aria-valuemax": zU,
          "aria-valuenow": XU,
          children: (0, GQ.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${yU}%`
            }
          })
        }), (0, GQ.jsx)("span", {
          className: "Baf2BookProgressText",
          children: QU
        })]
      })
    }

    function CE(UU) {
      let {
        view: XU,
        tier: zU,
        quests: cU,
        t: yU
      } = UU;
      const QU = zU === XU.tier,
        AU = (null !== cU && void 0 !== cU ? cU : []).filter((UU => !UU[4])),
        FU = (null !== cU && void 0 !== cU ? cU : []).filter((UU => UU[4])),
        oU = AU.filter((UU => UU[3])).length,
        DU = QU && XU.name ? PE(XU.name) : null,
        EU = AU.findIndex((UU => !UU[3] && PE(UU) === DU));
      return (0, GQ.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, GQ.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, GQ.jsx)("h3", {
            children: YE(yU, zU)
          }), AU.length > 0 && (0, GQ.jsx)(eE, {
            done: oU,
            total: AU.length,
            t: yU
          }), QU && XU.core && (0, GQ.jsx)(NE, {
            core: XU.core,
            t: yU
          })]
        }), (0, GQ.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === cU && QU && (0, GQ.jsx)(dE, {
            view: XU,
            t: yU
          }), AU.map(((UU, zU) => zU === EU ? (0, GQ.jsx)(dE, {
            view: XU,
            t: yU
          }, PE(UU)) : (0, GQ.jsx)(LE, {
            quest: UU,
            upcoming: !UU[3],
            t: yU
          }, PE(UU))))]
        }), QU && XU.side && (0, GQ.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, GQ.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: yU(`${cE}questSide`)
          }), (0, GQ.jsx)("strong", {
            className: "Baf2BookTitle",
            children: RE(yU, XU.side.name)
          }), (0, GQ.jsx)(WE, {
            goal: XU.side.goal,
            t: yU
          }), (0, GQ.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, GQ.jsx)(pE, {
              row: XU.side.row,
              view: XU,
              t: yU
            })
          })]
        }), FU.length > 0 && (0, GQ.jsxs)(GQ.Fragment, {
          children: [(0, GQ.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: yU(`${cE}questBookSidesDone`)
          }), (0, GQ.jsx)("ol", {
            className: "Baf2BookQuests",
            children: FU.map((UU => (0, GQ.jsx)(LE, {
              quest: UU,
              upcoming: !1,
              t: yU
            }, PE(UU))))
          })]
        })]
      })
    }

    function wE(UU) {
      var XU, zU, QU;
      let {
        store: AU,
        tutorial: FU,
        close: oU
      } = UU;
      const {
        t: DU
      } = (0, Wy.I)(), YU = (0, hD.j)(Sy, AU.get()), NU = null !== (XU = YU.tier) && void 0 !== XU ? XU : 1, [IU, pU] = (0, cU.useState)(null), gU = (null === IU || void 0 === IU ? void 0 : IU.at) === NU ? IU.tier : NU, kU = (0, cU.useRef)(null), GU = null !== YU.chapters;
      (0, cU.useEffect)((() => {
        var UU;
        kU.current && (kU.current.scrollTop = 0);
        const XU = null === (UU = kU.current) || void 0 === UU ? void 0 : UU.querySelector(".Baf2BookQuest.Current");
        if (kU.current && XU) {
          const UU = XU.getBoundingClientRect().bottom - kU.current.getBoundingClientRect().bottom;
          UU > 0 && (kU.current.scrollTop += Math.min(UU, XU.getBoundingClientRect().top - kU.current.getBoundingClientRect().top))
        }
      }), [gU, GU]);
      const BU = null === (zU = YU.chapters) || void 0 === zU ? void 0 : zU.find((UU => {
        let [XU] = UU;
        return XU === gU
      }));
      return (0, GQ.jsx)(aA.c, {
        close: oU,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, GQ.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: yE,
          children: [(0, GQ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, GQ.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: DU(`${cE}questBookTitle`)
            }), (0, GQ.jsx)(tA.l, {
              className: "Baf2BookTutorialButton",
              disabled: !YU.tutorialKnown,
              ariaLabel: DU(GE[YU.tutorial]),
              title: DU(GE[YU.tutorial]),
              onClick: () => {
                FU.next()
              },
              children: (0, GQ.jsx)(dy.d, {
                name: kE[YU.tutorial]
              })
            }), (0, GQ.jsx)(tA.k, {
              onClick: oU
            })]
          }), (0, GQ.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": DU(`${cE}questBookChapters`),
            "data-pad-initial-area": !0,
            children: yU.slice(0, EU()).map(((UU, XU) => {
              const zU = XU + 1,
                {
                  kind: cU,
                  short: yU
                } = tU(zU),
                QU = aU(zU, NU),
                AU = QU ? DU(`${cE}coreAtomicHidden`) : YE(DU, zU);
              return (0, GQ.jsx)("li", {
                children: (0, GQ.jsx)("button", {
                  type: "button",
                  className: By()({
                    Stage: "tier" !== cU,
                    Atomic: "atomic" === cU,
                    Current: zU === NU,
                    Selected: zU === gU
                  }),
                  disabled: zU > NU,
                  "aria-pressed": zU === gU,
                  "aria-label": AU,
                  title: QU ? void 0 : AU,
                  onClick: () => {
                    pU({
                      tier: zU,
                      at: NU
                    })
                  },
                  children: QU ? "?" : yU
                })
              }, UU.nameKey)
            }))
          }), (0, GQ.jsxs)("div", {
            ref: kU,
            className: "Baf2BookBody",
            children: [Hy(YU) && gU === NU && (0, GQ.jsx)("p", {
              className: "Baf2BookEmpty",
              children: DU(`${cE}questBookAllDone`)
            }), (0, GQ.jsx)(CE, {
              view: YU,
              tier: gU,
              quests: null !== (QU = null === BU || void 0 === BU ? void 0 : BU[1]) && void 0 !== QU ? QU : null,
              t: DU
            })]
          })]
        })
      })
    }
    const qE = "buildAFactory2Game:";

    function OE(UU) {
      let {
        tiers: XU,
        from: zU,
        tier: cU,
        shown: yU,
        DI: QU
      } = UU;
      const {
        t: AU
      } = (0, Wy.I)(), FU = XU.map(((UU, XU) => {
        const FU = zU + XU,
          {
            kind: oU,
            short: DU
          } = tU(FU),
          EU = aU(FU, cU);
        return (0, GQ.jsx)("li", {
          children: (0, GQ.jsx)("button", {
            type: "button",
            className: By()({
              Stage: "tier" !== oU,
              Silhouette: EU,
              Reached: FU <= cU,
              Current: FU === cU,
              Next: FU === cU + 1,
              Selected: FU === yU
            }),
            disabled: EU,
            "aria-pressed": FU === yU,
            "aria-label": EU ? AU(`${qE}coreAtomicHidden`) : void 0,
            title: EU ? void 0 : AU(`${qE}${UU.nameKey}`),
            onClick: () => {
              QU(FU)
            },
            children: EU ? "?" : DU
          })
        }, UU.nameKey)
      }));
      return (0, GQ.jsx)(GQ.Fragment, {
        children: FU
      })
    }

    function SE(UU) {
      let {
        id: XU,
        label: zU,
        tiers: cU,
        from: yU,
        ...QU
      } = UU;
      return (0, GQ.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, GQ.jsx)("span", {
          id: XU,
          className: "Baf2CoreLadderLabel",
          children: zU
        }), (0, GQ.jsx)("ol", {
          "aria-labelledby": XU,
          children: (0, GQ.jsx)(OE, {
            ...QU,
            tiers: cU,
            from: yU
          })
        })]
      })
    }

    function rE(UU) {
      const {
        t: XU
      } = (0, Wy.I)(), zU = yU.findIndex((UU => void 0 !== UU.stage)), cU = yU.findIndex((UU => void 0 !== UU.reactorTier)), QU = zU < 0 ? yU : yU.slice(0, zU), AU = zU < 0 ? [] : yU.slice(zU, cU < 0 ? void 0 : cU), oU = cU < 0 || !FU() ? [] : yU.slice(cU);
      return (0, GQ.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, GQ.jsx)(SE, {
          ...UU,
          id: "baf2CoreTiersLabel",
          label: XU(`${qE}coreTiersLabel`),
          tiers: QU,
          from: 1
        }), AU.length > 0 && (0, GQ.jsx)(SE, {
          ...UU,
          id: "baf2CoreStagesLabel",
          label: XU(`${qE}coreStagesLabel`),
          tiers: AU,
          from: zU + 1
        }), oU.length > 0 && (0, GQ.jsx)(SE, {
          ...UU,
          id: "baf2CoreAtomicLabel",
          label: XU(`${qE}coreAtomicLabel`),
          tiers: oU,
          from: cU + 1
        })]
      })
    }
    const uE = "buildAFactory2Game:";

    function fE(UU) {
      let {
        item: XU,
        itemNames: zU,
        children: cU
      } = UU;
      return (0, GQ.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, GQ.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, GQ.jsx)(Ly.c, {
            itemName: XU,
            amount: 0
          })
        }), (0, GQ.jsx)(ey.d, {
          text: zU[XU]
        }), cU]
      })
    }

    function iE(UU) {
      const XU = new Map;
      for (const {
          block: cU
        }
        of UU.newDeposits) {
        var zU;
        XU.set(cU, (null !== (zU = XU.get(cU)) && void 0 !== zU ? zU : 0) + 1)
      }
      return [...XU]
    }

    function HE(UU) {
      let {
        value: XU,
        label: zU,
        more: cU
      } = UU;
      return (0, GQ.jsxs)("li", {
        children: [(0, GQ.jsx)("strong", {
          children: XU
        }), (0, GQ.jsx)("span", {
          children: zU
        }), cU > 0 && (0, GQ.jsxs)("em", {
          children: ["+", cU]
        })]
      })
    }

    function ME(UU) {
      let {
        items: XU,
        itemNames: zU
      } = UU;
      const {
        t: yU
      } = (0, Wy.I)(), [QU, AU] = (0, cU.useState)(null), FU = null !== QU && XU.includes(QU) ? QU : null;
      return (0, GQ.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, GQ.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: yU(`${uE}coreRewardUnlocks`)
        }), (0, GQ.jsx)("ul", {
          children: XU.map((UU => (0, GQ.jsx)("li", {
            children: (0, GQ.jsx)("button", {
              type: "button",
              className: By()("Baf2PanelIcon", {
                Picked: UU === FU
              }),
              title: (0, Ty.h)(yU, UU),
              "aria-label": (0, Ty.h)(yU, UU),
              "aria-pressed": UU === FU,
              onClick: () => {
                AU(UU === FU ? null : UU)
              },
              children: (0, GQ.jsx)(Ly.c, {
                itemName: UU,
                amount: 0
              })
            })
          }, UU)))
        }), (0, GQ.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== FU && (0, GQ.jsxs)(GQ.Fragment, {
            children: [(0, GQ.jsx)(ey.d, {
              text: zU[FU]
            }), " \xb7 ", (0, GQ.jsx)(ey.d, {
              text: zU[wU(FU)]
            })]
          }), null === FU && yU(`${uE}coreRecipeTap`)]
        })]
      })
    }

    function vE(UU) {
      var XU, zU;
      let {
        def: cU,
        tier: yU,
        itemNames: QU
      } = UU;
      const {
        t: AU
      } = (0, Wy.I)(), FU = yU > 1 ? gU(yU - 1) : void 0, oU = Math.round(2 * cU.islandRadius), DU = FU ? Math.round(2 * FU.islandRadius) : oU, EU = yU >= 3 ? Zc(yU) : null;
      return (0, GQ.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, GQ.jsxs)("ul", {
          className: By()("Baf2CoreStats", {
            Four: null !== EU
          }),
          children: [(0, GQ.jsx)(HE, {
            value: `${oU}\xd7${oU}`,
            label: AU(`${uE}coreStatIsland`),
            more: oU - DU
          }), (0, GQ.jsx)(HE, {
            value: String(cU.machineAllowance),
            label: AU(`${uE}coreStatMachines`),
            more: cU.machineAllowance - (null !== (XU = null === FU || void 0 === FU ? void 0 : FU.machineAllowance) && void 0 !== XU ? XU : cU.machineAllowance)
          }), (0, GQ.jsx)(HE, {
            value: String(cU.beltAllowance),
            label: AU(`${uE}coreStatBelts`),
            more: cU.beltAllowance - (null !== (zU = null === FU || void 0 === FU ? void 0 : FU.beltAllowance) && void 0 !== zU ? zU : cU.beltAllowance)
          }), null !== EU && (0, GQ.jsx)(HE, {
            value: String(EU),
            label: AU(`${uE}coreStatStorage`),
            more: EU - (FU ? Zc(yU - 1) : EU)
          })]
        }), cU.reward && (0, GQ.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, GQ.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: AU(`${uE}coreRewardItem`)
          }), (0, GQ.jsx)(fE, {
            item: cU.reward,
            itemNames: QU
          })]
        }), cU.newDeposits.length > 0 && (0, GQ.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, GQ.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: AU(cU.newDeposits.length > 1 ? `${uE}coreRewardDeposits` : `${uE}coreRewardDeposit`)
          }), iE(cU).map((UU => {
            let [XU, zU] = UU;
            return (0, GQ.jsx)(fE, {
              item: XU,
              itemNames: QU,
              children: zU > 1 && ` \xd7${zU}`
            }, XU)
          }))]
        }), cU.unlocks.length > 0 && (0, GQ.jsx)(ME, {
          items: cU.unlocks,
          itemNames: QU
        }), (0, GQ.jsx)(VE, {
          tier: yU
        })]
      })
    }

    function VE(UU) {
      let {
        tier: XU
      } = UU;
      const {
        t: zU
      } = (0, Wy.I)(), cU = Iy[XU];
      if (!cU) return null;
      const yU = Ny(XU, 0, 0).barrierMax !== Ny(XU - 1, 0, 0).barrierMax;
      return (0, GQ.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, GQ.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, GQ.jsx)(Ly.c, {
            itemName: yU ? Ay.Chestplate : Qy,
            amount: 0
          })
        }), zU(`${uE}gearPerkLine`, {
          perk: zU(`${uE}${cU}`)
        })]
      })
    }

    function sE(UU, XU) {
      return null === UU ? XU : UU.value
    }

    function nE(UU, XU, zU, cU) {
      let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === UU || zU - UU.atMs >= cU ? null : yU(UU.value, XU) ? UU.armed ? null : UU : UU.armed ? UU : {
        ...UU,
        armed: !0
      }
    }

    function mE(UU, XU) {
      const zU = XU.filter((XU => {
        var zU;
        return !1 !== (null === (zU = UU.get(XU)) || void 0 === zU ? void 0 : zU.value)
      }));
      for (const [cU, yU] of UU) yU.value && !XU.includes(cU) && zU.push(cU);
      return zU
    }

    function lE(UU, XU, zU, yU) {
      const [QU, AU] = (0, cU.useState)((() => new Map)), FU = () => {
        AU((XU => function(UU, XU, zU, cU) {
          var yU;
          let QU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            AU = null;
          for (const [FU, oU] of UU) {
            const yU = nE(oU, XU(FU), zU, cU, QU);
            yU !== oU && (AU ??= new Map(UU), null === yU ? AU.delete(FU) : AU.set(FU, yU))
          }
          return null !== (yU = AU) && void 0 !== yU ? yU : UU
        }(XU, UU, Date.now(), zU, yU)))
      };
      (0, cU.useEffect)((() => {
        FU()
      }), [XU, zU]), (0, cU.useEffect)((() => {
        if (0 === QU.size) return;
        const UU = Math.min(...[...QU.values()].map((UU => UU.atMs))),
          XU = setTimeout(FU, Math.max(0, UU + zU - Date.now()) + 1);
        return () => {
          clearTimeout(XU)
        }
      }), [QU, XU, zU]);
      return [QU, (XU, zU) => {
        AU((cU => {
          const QU = new Map(cU);
          return QU.set(XU, function(UU, XU, zU) {
            return {
              value: UU,
              atMs: zU,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(UU, XU)
            }
          }(zU, UU(XU), Date.now(), yU)), QU
        }))
      }]
    }
    const xE = "buildAFactory2Game:";

    function JE(UU) {
      let {
        message: XU,
        itemNames: zU
      } = UU;
      const yU = uA(),
        {
          t: QU
        } = (0, Wy.I)(),
        [AU, FU] = (0, cU.useState)(!1),
        [oU, DU] = function(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eA;
          const [zU, cU] = lE((XU => UU.includes(XU)), UU, XU, Object.is);
          return [mE(zU, UU), cU]
        }(XU.baf2CoreBankPaused),
        EU = new Set(oU),
        YU = [...XU.baf2CoreBanked];
      for (const cU of EU) YU.some((UU => {
        let [XU] = UU;
        return XU === cU
      })) || YU.push([cU, 0]);
      return 0 === YU.length ? null : (0, GQ.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, GQ.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": AU,
          onClick: () => {
            FU(!AU)
          },
          children: [(0, GQ.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: QU(`${xE}coreBankedLater`)
          }), (0, GQ.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: YU.map((UU => {
              let [XU, zU] = UU;
              const cU = EU.has(XU);
              return (0, GQ.jsxs)("span", {
                className: By()({
                  Paused: cU
                }),
                title: cU ? QU(`${xE}coreBankPausedTag`) : void 0,
                children: [(0, GQ.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, GQ.jsx)(Ly.c, {
                    itemName: XU,
                    amount: 0
                  })
                }), zU, cU && (0, GQ.jsx)(dy.d, {
                  name: "pause"
                })]
              }, XU)
            }))
          }), (0, GQ.jsx)(dy.d, {
            name: AU ? "angle-up" : "angle-down"
          })]
        }), AU && (0, GQ.jsxs)(GQ.Fragment, {
          children: [(0, GQ.jsx)("ul", {
            children: YU.map((UU => {
              let [XU, cU] = UU;
              const AU = EU.has(XU);
              return (0, GQ.jsxs)("li", {
                children: [(0, GQ.jsxs)(fE, {
                  item: XU,
                  itemNames: zU,
                  children: [(0, GQ.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: cU
                  }), AU && (0, GQ.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: QU(`${xE}coreBankPausedTag`)
                  })]
                }), (0, GQ.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, GQ.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === cU,
                    onClick: () => {
                      yU.send(`baf2corewithdraw ${cU} ${XU}`)
                    },
                    children: QU(`${xE}coreTake`)
                  }), (0, GQ.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      yU.send(`${BU} ${XU}`), DU(XU, !AU)
                    },
                    children: QU(AU ? `${xE}coreBankResume` : `${xE}coreBankStop`)
                  })]
                })]
              }, XU)
            }))
          }), (0, GQ.jsx)("p", {
            className: "Baf2CoreHint",
            children: QU(`${xE}coreBankNote`)
          })]
        })]
      })
    }
    const jE = "buildAFactory2Game:";

    function KE(UU) {
      const XU = Math.max(0, Math.floor(UU));
      return `${Math.floor(XU/60)}:${String(XU%60).padStart(2,"0")}`
    }

    function bE(UU) {
      let {
        item: XU
      } = UU;
      return (0, GQ.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, GQ.jsx)(Ly.c, {
          itemName: XU,
          amount: 0
        })
      })
    }

    function TE() {
      return (0, GQ.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, GQ.jsx)(dy.d, {
          name: "bolt"
        })
      })
    }

    function hE(UU) {
      let {
        charge: XU,
        hint: zU,
        itemNames: cU
      } = UU;
      const yU = uA(),
        {
          t: QU
        } = (0, Wy.I)(),
        [AU, FU, oU, DU, EU, YU, NU] = XU,
        [IU, pU] = function(UU) {
          var XU;
          let zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eA,
            cU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [yU, QU] = lE((() => UU), UU, zU, cU);
          return [sE(null !== (XU = yU.get("")) && void 0 !== XU ? XU : null, UU), UU => {
            QU("", UU)
          }]
        }(NU),
        aU = IU === NU ? YU : !IU,
        tU = DU >= EU,
        gU = AU.find((UU => {
          let [, XU, zU] = UU;
          return zU < .9 * XU
        }));
      let kU = `${jE}coreChargeWaiting`,
        GU = {};
      return tU ? kU = `${jE}coreChargeDone` : IU ? kU = `${jE}coreChargeStopped` : aU && zU ? (kU = `${jE}${zU[0]}`, GU = {
        item: (0, Ty.h)(QU, zU[1])
      }) : aU && gU ? (kU = `${jE}coreChargeShort`, GU = {
        item: (0, Ty.h)(QU, gU[0])
      }) : aU && FU > 0 && !oU ? kU = `${jE}coreChargePower` : aU && (kU = `${jE}coreChargeRunning`), (0, GQ.jsxs)("div", {
        className: By()("Baf2CoreCharge", {
          Waiting: !aU && !tU,
          Done: tU
        }),
        children: [(0, GQ.jsxs)("h4", {
          children: [QU(`${jE}coreChargeTitle`), (0, GQ.jsx)("span", {
            children: QU(`${jE}coreChargeProgress`, {
              done: KE(DU),
              need: KE(EU)
            })
          })]
        }), (0, GQ.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, GQ.jsx)("div", {
            style: {
              width: 100 * Math.min(DU, EU) / EU + "%"
            }
          })
        }), (0, GQ.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [AU.map((UU => {
            var XU;
            let [zU, yU, AU] = UU;
            const FU = AU >= .9 * yU;
            return (0, GQ.jsxs)("li", {
              className: By()({
                Done: FU,
                Short: aU && !FU
              }),
              children: [(0, GQ.jsx)(bE, {
                item: zU
              }), (0, GQ.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, GQ.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, GQ.jsx)(ey.d, {
                    text: null !== (XU = cU[zU]) && void 0 !== XU ? XU : zU
                  }), (0, GQ.jsx)("span", {
                    children: QU(`${jE}coreChargeItem`, {
                      now: String(AU),
                      need: String(yU)
                    })
                  })]
                }), (0, GQ.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, GQ.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*AU/yU)}%`
                    }
                  })
                })]
              })]
            }, zU)
          })), FU > 0 && (0, GQ.jsxs)("li", {
            className: By()("Baf2CoreChargePower", {
              Short: aU && !oU
            }),
            children: [(0, GQ.jsx)(TE, {}), (0, GQ.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, GQ.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, GQ.jsx)("span", {
                  children: QU(`${jE}coreChargePowerRow`, {
                    power: bU(FU)
                  })
                })
              })
            })]
          })]
        }), (0, GQ.jsx)("p", {
          className: "Baf2CoreHint",
          children: QU(kU, GU)
        }), !tU && (aU || IU) && (0, GQ.jsx)("button", {
          type: "button",
          className: By()("Baf2CoreChargeToggle", {
            Stopped: IU
          }),
          onClick: () => {
            yU.send(RU), pU(!IU)
          },
          children: QU(IU ? `${jE}coreChargeRestart` : `${jE}coreChargeStop`)
        })]
      })
    }

    function UY(UU) {
      let {
        charge: XU,
        reached: zU,
        itemNames: cU
      } = UU;
      const {
        t: yU
      } = (0, Wy.I)();
      return (0, GQ.jsxs)("div", {
        className: By()("Baf2CoreCharge", {
          Done: zU
        }),
        children: [(0, GQ.jsxs)("h4", {
          children: [yU(`${jE}coreChargeTitle`), (0, GQ.jsx)("span", {
            children: yU(`${jE}coreChargeSpecTime`, {
              time: KE(XU.seconds)
            })
          })]
        }), (0, GQ.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [XU.items.map((UU => {
            var XU;
            let {
              item: QU,
              amount: AU
            } = UU;
            return (0, GQ.jsxs)("li", {
              className: By()({
                Done: zU
              }),
              children: [(0, GQ.jsx)(bE, {
                item: QU
              }), (0, GQ.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, GQ.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, GQ.jsx)(ey.d, {
                    text: null !== (XU = cU[QU]) && void 0 !== XU ? XU : QU
                  }), (0, GQ.jsx)("span", {
                    children: yU(`${jE}coreChargeSpecItem`, {
                      need: String(AU)
                    })
                  })]
                })
              })]
            }, QU)
          })), XU.powerPerS > 0 && (0, GQ.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, GQ.jsx)(TE, {}), (0, GQ.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, GQ.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, GQ.jsx)("span", {
                  children: yU(`${jE}coreChargePowerRow`, {
                    power: bU(XU.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const XY = "buildAFactory2Game:";

    function zY(UU) {
      let {
        def: XU,
        reached: zU,
        banked: cU,
        itemNames: yU
      } = UU;
      const {
        t: QU
      } = (0, Wy.I)();
      return (0, GQ.jsx)("ul", {
        className: "Baf2CoreCost",
        children: XU.cost.map((UU => {
          let {
            item: XU,
            amount: AU
          } = UU;
          const FU = zU ? 0 : cU(XU);
          return (0, GQ.jsx)("li", {
            children: (0, GQ.jsx)(fE, {
              item: XU,
              itemNames: yU,
              children: (0, GQ.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: FU > 0 ? QU(`${XY}coreBankedFor`, {
                  amount: String(FU),
                  total: String(AU)
                }) : `\xd7${AU}`
              })
            })
          }, XU)
        }))
      })
    }

    function cY(UU, XU) {
      if (XU >= EU()) return UU(`${XY}coreMaxTier`);
      const zU = DU[XU + 1];
      return zU && !zU.startsWith("upgradeCore") ? UU(`${XY}coreGateQuest`, {
        quest: UU(`${XY}quest_${zU}`)
      }) : UU(`${XY}coreGateClosed`)
    }

    function yY() {
      const {
        t: UU
      } = (0, Wy.I)(), XU = uA(), zU = (0, cU.useRef)(null), yU = (0, cU.useRef)(Date.now());
      return nD(!0, zU), (0, GQ.jsx)("div", {
        ref: zU,
        className: "Baf2CoreGrow",
        children: (0, GQ.jsx)(tA.l, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - yU.current >= 600 && XU.send(GU)
          },
          children: UU(`${XY}coreGrow`)
        })
      })
    }

    function QY(UU) {
      let {
        message: XU,
        itemNames: zU,
        next: cU
      } = UU;
      const yU = uA(),
        {
          t: QU
        } = (0, Wy.I)(),
        AU = XU.baf2CoreTier,
        FU = XU.baf2CoreReady,
        oU = XU.baf2CoreNeeds.filter((UU => {
          let [, XU, zU, cU] = UU;
          return cU > 0 && XU < zU
        })),
        DU = XU.baf2CoreNeeds.every((UU => {
          let [, XU, zU] = UU;
          return XU >= zU
        })),
        EU = XU.baf2CoreKeep;
      return (0, GQ.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, GQ.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [FU && (0, GQ.jsx)(yY, {}), (0, GQ.jsx)("h3", {
            children: QU(`${XY}coreBring`)
          }), (0, GQ.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: XU.baf2CoreNeeds.map((UU => {
              let [XU, cU, AU, FU] = UU;
              return (0, GQ.jsxs)("li", {
                className: By()({
                  Done: cU >= AU
                }),
                children: [(0, GQ.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, GQ.jsx)(Ly.c, {
                    itemName: XU,
                    amount: 0
                  })
                }), (0, GQ.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, GQ.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, GQ.jsx)(ey.d, {
                      text: zU[XU]
                    }), (0, GQ.jsxs)("span", {
                      children: [cU, "/", AU]
                    })]
                  }), (0, GQ.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, GQ.jsx)("div", {
                      style: {
                        width: 100 * cU / AU + "%"
                      }
                    }), FU > 0 && (0, GQ.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * FU / AU + "%"
                      }
                    })]
                  })]
                }), FU > 0 && cU < AU && (0, GQ.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    yU.send(`${ZU} ${XU}`)
                  },
                  children: QU(`${XY}coreDeposit`, {
                    amount: String(FU)
                  })
                })]
              }, XU)
            }))
          }), XU.baf2CoreCharge && (0, GQ.jsx)(hE, {
            charge: XU.baf2CoreCharge,
            hint: XU.baf2CoreChargeHint,
            itemNames: zU
          }), !FU && oU.length > 1 && (0, GQ.jsx)(tA.l, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              yU.send(GU)
            },
            children: QU(`${XY}coreHandOver`)
          }), !FU && void 0 !== EU && (0, GQ.jsx)("p", {
            className: "Baf2CoreHint",
            children: QU(`${XY}coreKeepRest`, {
              item: (0, Ty.h)(QU, EU)
            })
          }), !FU && !DU && 0 === oU.length && void 0 === EU && (0, GQ.jsx)("p", {
            className: "Baf2CoreHint",
            children: QU(`${XY}coreNothingHeld`)
          }), (0, GQ.jsx)(JE, {
            message: XU,
            itemNames: zU
          })]
        }), (0, GQ.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, GQ.jsx)("h3", {
            children: QU(`${XY}coreRewards`)
          }), (0, GQ.jsx)(vE, {
            def: cU,
            tier: AU + 1,
            itemNames: zU
          })]
        })]
      })
    }

    function AY(UU) {
      let {
        message: XU,
        itemNames: zU,
        shown: cU
      } = UU;
      const {
        t: yU
      } = (0, Wy.I)(), QU = XU.baf2CoreTier, AU = gU(cU), FU = cU <= QU, oU = new Map(XU.baf2CoreBanked), DU = !kU(QU, PU(XU)) && cU === QU;
      return (0, GQ.jsxs)("div", {
        className: By()("Baf2CoreBody", {
          Locked: !FU
        }),
        children: [(0, GQ.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, GQ.jsx)("h3", {
            children: yU(FU ? `${XY}coreItTook` : `${XY}coreItNeeds`)
          }), 0 === AU.cost.length && (0, GQ.jsx)("p", {
            className: "Baf2CoreHint",
            children: yU(`${XY}coreTierStart`)
          }), AU.cost.length > 0 && (0, GQ.jsx)(zY, {
            def: AU,
            reached: FU,
            banked: UU => {
              var XU;
              return function(UU, XU, zU, cU) {
                let yU = UU;
                for (let AU = XU + 2; AU <= zU; AU++) {
                  var QU;
                  const UU = gU(AU).cost.find((UU => UU.item === cU)),
                    XU = Math.min(yU, null !== (QU = null === UU || void 0 === UU ? void 0 : UU.amount) && void 0 !== QU ? QU : 0);
                  if (AU === zU) return XU;
                  yU -= XU
                }
                return 0
              }(null !== (XU = oU.get(UU)) && void 0 !== XU ? XU : 0, QU, cU, UU)
            },
            itemNames: zU
          }), AU.charge && (0, GQ.jsx)(UY, {
            charge: AU.charge,
            reached: FU,
            itemNames: zU
          }), DU && (0, GQ.jsxs)(GQ.Fragment, {
            children: [(0, GQ.jsx)("p", {
              className: "Baf2CoreHint",
              children: cY(yU, QU)
            }), (0, GQ.jsx)(JE, {
              message: XU,
              itemNames: zU
            })]
          })]
        }), (0, GQ.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, GQ.jsx)("h3", {
            children: yU(FU ? `${XY}coreGave` : `${XY}coreLockedRewards`)
          }), (0, GQ.jsx)(vE, {
            def: AU,
            tier: cU,
            itemNames: zU
          })]
        })]
      })
    }

    function FY(UU, XU) {
      const {
        key: zU,
        params: cU
      } = IU(XU - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return UU(`${XY}${zU}`, cU)
    }
    const oY = "buildAFactory2Game:",
      DY = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      EY = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function YY(UU) {
      let {
        view: XU,
        close: zU,
        askIslands: yU
      } = UU;
      const {
        t: QU
      } = (0, Wy.I)(), [AU, FU] = (0, cU.useState)(!1);
      (0, cU.useEffect)((() => {
        if (!AU) return;
        const UU = window.setTimeout((() => {
          FU(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(UU)
        }
      }), [AU]);
      const {
        message: oU,
        itemNames: DU
      } = XU, EU = oU.baf2CoreTier, YU = gU(EU), NU = kU(EU, PU(oU)), [aU, tU] = oU.baf2CoreMachines, [GU, BU] = oU.baf2CoreBelts, ZU = oU.baf2CoreStorage, RU = oU.baf2CoreReady, [WU, dU] = (0, cU.useState)(null), LU = (null === WU || void 0 === WU ? void 0 : WU.at) === EU && WU.ready === RU ? WU.tier : NU ? EU + 1 : EU;
      let eU = "coreTierLocked";
      LU <= EU ? eU = "coreTierReached" : LU === EU + 1 && (eU = "coreTierNext");
      const CU = QU(`${oY}${gU(LU).nameKey}`),
        wU = LU === EU + 1 ? NU : null,
        qU = IU(LU, {
          tier: eU,
          stage: DY[eU],
          atomic: EY[eU]
        }),
        OU = QU(`${oY}${qU.key}`, {
          ...qU.params,
          name: CU
        }),
        SU = IU(EU, pU),
        rU = QU(`${oY}${SU.key}`, {
          ...SU.params,
          name: QU(`${oY}${YU.nameKey}`)
        });
      return (0, GQ.jsx)(aA.c, {
        close: zU,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, GQ.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, GQ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, GQ.jsxs)("div", {
              children: [(0, GQ.jsx)("h2", {
                id: "baf2CoreTitle",
                children: QU(`${oY}coreTitle`)
              }), void 0 !== oU.baf2CoreIslandName && (0, GQ.jsx)("p", {
                className: "Baf2CoreIsland",
                children: oU.baf2CoreIslandName
              }), (0, GQ.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, GQ.jsx)("span", {
                  children: rU
                }), (0, GQ.jsx)("span", {
                  className: By()({
                    Full: aU >= tU
                  }),
                  children: QU(`${oY}coreMachineCount`, {
                    amount: String(aU),
                    total: String(tU)
                  })
                }), (0, GQ.jsx)("span", {
                  className: By()({
                    Full: GU >= BU
                  }),
                  children: QU(`${oY}coreBeltCount`, {
                    amount: String(GU),
                    total: String(BU)
                  })
                }), void 0 !== ZU && (0, GQ.jsx)("span", {
                  className: By()({
                    Full: ZU[0] >= ZU[1]
                  }),
                  children: QU(`${oY}coreStorageCount`, {
                    amount: String(ZU[0]),
                    total: String(ZU[1])
                  })
                })]
              })]
            }), (0, GQ.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [oU.baf2CoreIslands && (0, GQ.jsx)(tA.f, {
                className: "Baf2CoreIslandsButton",
                disabled: AU,
                onClick: () => {
                  FU(!0), yU()
                },
                children: QU(`${oY}islandsOpenButton`)
              }), (0, GQ.jsx)(tA.k, {
                onClick: zU
              })]
            })]
          }), (0, GQ.jsx)(rE, {
            tier: EU,
            shown: LU,
            DI: UU => {
              dU({
                tier: UU,
                at: EU,
                ready: RU
              })
            }
          }), (0, GQ.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [OU, LU > EU + 1 && (0, GQ.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: FY(QU, LU)
            })]
          }), 6 === LU && LU > EU && (0, GQ.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: QU(`${oY}coreStagesNote`)
          }), 11 === LU && LU > EU && (0, GQ.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: QU(`${oY}coreAtomicNote`)
          }), wU && (0, GQ.jsx)(QY, {
            message: oU,
            itemNames: DU,
            next: wU
          }), !wU && (0, GQ.jsx)(AY, {
            message: oU,
            itemNames: DU,
            shown: LU
          })]
        })
      })
    }
    const NY = {
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
    const IY = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: zQ,
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

    function pY(UU) {
      return UU.baf2DropCometOreOnly ? "dropCometOre" : UU.baf2DropCometIsotope ? "seed" === UU.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function aY(UU) {
      let {
        message: XU,
        quests: zU,
        close: yU,
        leave: QU
      } = UU;
      const AU = uA(),
        {
          t: FU
        } = (0, Wy.I)(),
        oU = (0, hD.j)(Sy, zU.get()),
        DU = function(UU) {
          var XU;
          if (!SU(UU.tutorial)) return null;
          const zU = UU.rows.find((UU => UU.current)),
            cU = zU ? NY[zU.key] : void 0;
          return null !== (XU = null !== cU && void 0 !== cU ? cU : UU.side ? NY[UU.side.row.key] : void 0) && void 0 !== XU ? XU : null
        }(oU),
        EU = null === oU.tier || QQ(oU.tier),
        YU = EU ? IY : IY.filter((UU => {
          let {
            item: XU
          } = UU;
          return XU !== zQ
        })),
        [NU, IU] = (0, cU.useState)(null),
        pU = null !== NU && void 0 !== NU ? NU : !XU.baf2DropFoundSalvage && EU,
        aU = XU.baf2DropRuinDistance,
        tU = XU.baf2DropComet,
        gU = XU.baf2DropOldWorks,
        kU = XU.baf2DropGrove,
        GU = function(UU) {
          return 2 + Number(void 0 !== UU.baf2DropComet) + Number(!!UU.baf2DropOwedComet || void 0 !== UU.baf2DropOwedWaitMinutes) + Number(void 0 !== UU.baf2DropDigDistance) + Number(void 0 !== UU.baf2DropOldWorks) + Number(void 0 !== UU.baf2DropGrove)
        }(XU),
        BU = UU => {
          AU.send(function(UU) {
            return `baf2drop ${UU}`
          }(UU)), QU()
        };
      let ZU = FU("buildAFactory2Game:dropRuinNone");
      if (null !== aU) {
        let UU = XU.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        XU.baf2DropRuinOldWorks && (UU = "dropRuinOldWorks");
        const zU = void 0 === XU.baf2DropRuinCluster ? FU("buildAFactory2Game:dropRuinOpen") : FU("buildAFactory2Game:dropRuinCluster", {
          count: String(XU.baf2DropRuinCluster)
        });
        ZU = `${FU(`buildAFactory2Game:${UU}`,{distance:String(aU)})} ${zU}`
      }
      let RU = FU("buildAFactory2Game:dropBelowDescription");
      void 0 !== XU.baf2DropBelowLook && (RU = FU("buildAFactory2Game:dropBelowLook", {
        look: FU(XU.baf2DropBelowLook)
      }));
      const PU = "buildAFactory2Game:wildsRegion_survivorGrove" === XU.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        WU = aQ(FU, 60 * function(UU) {
          const [XU, zU] = (0, cU.useState)((() => Date.now())), [yU, QU] = (0, cU.useState)(XU);
          return (0, cU.useEffect)((() => {
            const UU = Date.now();
            zU(UU), QU(UU)
          }), [UU]), (0, cU.useEffect)((() => {
            const UU = window.setInterval((() => {
              QU(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(UU)
            }
          }), []), Math.max(1, UU.baf2DropRenewMinutes - Math.floor((yU - XU) / 6e4))
        }(XU)),
        dU = function(UU, XU, zU) {
          return "ruin" === UU && !zU || "owed" === UU && !XU.baf2DropOwedComet ? null : UU
        }(DU, XU, null !== aU),
        LU = function(UU) {
          for (var XU = arguments.length, zU = new Array(XU > 1 ? XU - 1 : 0), cU = 1; cU < XU; cU++) zU[cU - 1] = arguments[cU];
          return By()("Baf2DropTile", ...zU, {
            Wanted: dU === UU
          })
        };
      return (0, GQ.jsx)(aA.c, {
        close: yU,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, GQ.jsxs)("section", {
          className: By()("Baf2Panel Baf2DropMap", {
            Many: GU >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, GQ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, GQ.jsxs)("div", {
              children: [(0, GQ.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: FU("buildAFactory2Game:dropMapTitle")
              }), (0, GQ.jsx)("p", {
                children: FU("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, GQ.jsx)(tA.k, {
              onClick: yU
            })]
          }), (0, GQ.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== tU && (0, GQ.jsxs)(tA.r, {
              className: LU("comet", "Baf2DropComet"),
              onClick: () => {
                BU("comet")
              },
              children: [(0, GQ.jsx)("strong", {
                children: FU("buildAFactory2Game:dropComet")
              }), (0, GQ.jsx)("span", {
                children: FU(`buildAFactory2Game:${pY(XU)}`, {
                  distance: String(tU)
                })
              })]
            }), XU.baf2DropOwedComet && (0, GQ.jsxs)(tA.r, {
              className: LU("owed", "Baf2DropComet"),
              onClick: () => {
                BU("owed")
              },
              children: [(0, GQ.jsx)("strong", {
                children: FU("buildAFactory2Game:dropOwedComet")
              }), (0, GQ.jsx)("span", {
                children: XU.baf2DropOwedIsotope ? FU("buildAFactory2Game:dropOwedIsotopeDescription") : FU("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== XU.baf2DropOwedWaitMinutes && (0, GQ.jsxs)(tA.r, {
              className: LU("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, GQ.jsx)("strong", {
                children: FU("buildAFactory2Game:dropOwedComet")
              }), (0, GQ.jsx)("span", {
                children: FU("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(XU.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, GQ.jsxs)(tA.f, {
              className: LU("below"),
              onClick: () => {
                BU("below")
              },
              children: [(0, GQ.jsx)("strong", {
                children: FU("buildAFactory2Game:dropBelow")
              }), (0, GQ.jsx)("span", {
                children: RU
              })]
            }), void 0 !== XU.baf2DropDigDistance && (0, GQ.jsxs)(tA.n, {
              className: LU("dig"),
              onClick: () => {
                BU("dig")
              },
              children: [(0, GQ.jsx)("strong", {
                children: FU("buildAFactory2Game:dropDig")
              }), (0, GQ.jsx)("span", {
                children: FU("buildAFactory2Game:dropDigDescription", {
                  distance: String(XU.baf2DropDigDistance),
                  y: pQ(XU.baf2DropDigY)
                })
              })]
            }), void 0 !== kU && (0, GQ.jsxs)(tA.n, {
              className: LU("grove", "Baf2DropGrove"),
              onClick: () => {
                BU("grove")
              },
              children: [(0, GQ.jsx)("strong", {
                children: FU("buildAFactory2Game:dropGrove")
              }), (0, GQ.jsx)("span", {
                children: FU(`buildAFactory2Game:${PU}`, {
                  distance: String(kU)
                })
              })]
            }), (0, GQ.jsxs)(tA.l, {
              className: LU("ruin"),
              disabled: null === aU,
              onClick: () => {
                BU("ruin")
              },
              children: [(0, GQ.jsx)("strong", {
                children: FU("buildAFactory2Game:dropRuin")
              }), (0, GQ.jsx)("span", {
                children: ZU
              })]
            }), void 0 !== gU && (0, GQ.jsxs)(tA.G, {
              className: LU("works"),
              onClick: () => {
                BU("works")
              },
              children: [(0, GQ.jsx)("strong", {
                children: FU("buildAFactory2Game:dropOldWorks")
              }), (0, GQ.jsx)("span", {
                children: FU("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(gU)
                })
              })]
            })]
          }), (0, GQ.jsx)("p", {
            className: "Baf2DropRenew",
            children: FU("buildAFactory2Game:dropRenew", {
              time: WU
            })
          }), (0, GQ.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: pU,
            onToggle: UU => {
              UU.currentTarget.open !== pU && IU(UU.currentTarget.open)
            },
            children: [(0, GQ.jsx)("summary", {
              children: FU("buildAFactory2Game:dropSalvageWhat")
            }), (0, GQ.jsx)("p", {
              children: FU("buildAFactory2Game:dropSalvageIntro")
            }), (0, GQ.jsx)("ul", {
              children: YU.map((UU => {
                let {
                  item: XU,
                  nameKey: zU,
                  useKey: cU,
                  params: yU
                } = UU;
                return (0, GQ.jsxs)("li", {
                  children: [(0, GQ.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, GQ.jsx)(Ly.c, {
                      itemName: XU,
                      amount: 0
                    })
                  }), (0, GQ.jsxs)("span", {
                    children: [(0, GQ.jsx)("strong", {
                      children: FU(zU)
                    }), ": ", FU(cU, yU)]
                  })]
                }, XU)
              }))
            })]
          })]
        })
      })
    }
    const tY = "buildAFactory2Game:";

    function gY(UU, XU) {
      return UU.sendIslandEdit(`baf2coopleave ${XU.baf2IslandId}`)
    }

    function kY(UU) {
      let {
        card: XU,
        canRename: zU,
        done: yU,
        t: QU
      } = UU;
      const AU = uA(),
        [FU, oU] = (0, cU.useState)(XU.baf2IslandName),
        DU = gD(FU),
        EU = "" === DU || kD(DU),
        YU = () => {
          !EU && zU && (DU !== XU.baf2IslandName ? yU(AU.sendIslandEdit(`baf2islandrename ${XU.baf2IslandId} ${DU}`)) : yU(null))
        },
        NU = () => {
          yU(null)
        };
      return (0, GQ.jsxs)("div", {
        className: "Baf2IslandForm",
        ...VD(NU),
        children: [(0, GQ.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [QU(`${tY}islandsRenameLabel`), (0, GQ.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: FU,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: sD,
            onChange: UU => {
              oU(UU.target.value)
            },
            ...vD(YU, NU)
          })]
        }), "" === DU && (0, GQ.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: QU(`${tY}islandsRenameEmpty`)
        }), kD(DU) && (0, GQ.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: QU(`${tY}islandsNameReserved`)
        }), (0, GQ.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, GQ.jsx)(tA.n, {
            disabled: EU || !zU,
            onClick: YU,
            children: QU(`${tY}islandsRenameSave`)
          }), (0, GQ.jsx)(tA.f, {
            onClick: NU,
            children: QU(`${tY}islandsCancel`)
          })]
        })]
      })
    }

    function GY(UU) {
      let {
        card: XU,
        canDelete: zU,
        done: yU,
        t: QU
      } = UU;
      const AU = uA(),
        [FU, oU] = (0, cU.useState)(""),
        DU = function(UU, XU) {
          return gD(UU).toLowerCase() === gD(XU).toLowerCase()
        }(FU, XU.baf2IslandName),
        EU = () => {
          DU && zU && yU(AU.sendIslandEdit(`baf2islanddelete ${XU.baf2IslandId}`))
        },
        YU = () => {
          yU(null)
        },
        NU = wD("name"),
        [IU, pU = ""] = QU(`${tY}islandsDeleteConfirm`, {
          name: NU
        }).split(NU);
      return (0, GQ.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...VD(YU),
        children: [(0, GQ.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, GQ.jsxs)("span", {
            children: [IU, (0, GQ.jsx)("strong", {
              children: XU.baf2IslandName
            }), pU]
          }), (0, GQ.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: FU,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: sD,
            onChange: UU => {
              oU(UU.target.value)
            },
            ...vD(EU, YU)
          })]
        }), fD(XU) && (0, GQ.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: QU(`${tY}islandsDeleteLeftBack`)
        }), (0, GQ.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, GQ.jsx)(tA.G, {
            disabled: !DU || !zU,
            onClick: EU,
            children: QU(`${tY}islandsDeleteForGood`)
          }), (0, GQ.jsx)(tA.f, {
            onClick: YU,
            children: QU(`${tY}islandsCancel`)
          })]
        })]
      })
    }

    function BY(UU) {
      let {
        members: XU,
        t: zU
      } = UU;
      const cU = XU.length;
      return (0, GQ.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, GQ.jsxs)("span", {
          children: [1 === cU ? zU(`${tY}islandsPlayersOne`) : zU(`${tY}islandsPlayers`, {
            count: String(cU)
          }), " "]
        }), XU.map(((UU, XU) => (0, GQ.jsxs)("span", {
          className: By()("Baf2IslandMember", {
            Here: UU.baf2MemberHere
          }),
          title: UU.baf2MemberHere ? zU(`${tY}islandsPlayerHere`) : void 0,
          children: [UU.baf2MemberName, XU < cU - 1 ? ", " : ""]
        }, UU.baf2MemberKey)))]
      })
    }

    function ZY(UU) {
      let {
        card: XU,
        answered: zU,
        nowMs: yU,
        t: QU
      } = UU;
      const AU = uA(),
        [FU, oU] = (0, cU.useState)(new Map),
        DU = fD(XU);
      if (!DU) return null;
      return (0, GQ.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, GQ.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: QU(`${tY}islandsLeftTitle`)
        }), (0, GQ.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: DU.left.map((UU => {
            const cU = UU.baf2LeftKey,
              EU = HD(FU.get(cU), zU, yU),
              YU = function(UU) {
                return 1 === UU ? [`${ID}islandsLeftItemsOne`] : [`${ID}islandsLeftItems`, {
                  count: String(UU)
                }]
              }(UU.baf2LeftItems);
            return (0, GQ.jsx)("li", {
              className: By()("Baf2IslandPerson", {
                Pending: EU
              }),
              children: (0, GQ.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, GQ.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: UU.baf2LeftName
                }), (0, GQ.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: QU(YU[0], YU[1])
                }), DU.claim && (0, GQ.jsx)(tA.n, {
                  className: "Baf2IslandPersonButton",
                  disabled: EU,
                  onClick: () => {
                    (UU => {
                      const zU = AU.sendIslandEdit(`baf2coopclaim ${XU.baf2IslandId} ${UU}`);
                      oU((XU => new Map(XU).set(UU, {
                        atMs: Date.now(),
                        answer: zU
                      })))
                    })(cU)
                  },
                  children: QU(`${tY}islandsClaim`)
                })]
              })
            }, cU)
          }))
        }), DU.goThere && (0, GQ.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: QU(`${tY}islandsClaimGoThere`)
        })]
      })
    }

    function RY(UU) {
      let {
        card: XU,
        view: zU,
        blocked: yU,
        maxIslands: QU,
        answered: AU,
        nowMs: FU,
        done: oU,
        openSocial: DU,
        t: EU
      } = UU;
      const YU = uA(),
        [NU, IU] = (0, cU.useState)(new Map),
        [pU, aU] = (0, cU.useState)(new Map),
        [tU, gU] = (0, cU.useState)(null),
        kU = (0, cU.useRef)(null);
      xD(kU);
      const GU = XU.baf2IslandId,
        BU = XU.baf2IslandCoop,
        ZU = null !== BU && void 0 !== BU && BU.baf2CoopMembers.some((UU => UU.baf2MemberKey === tU)) ? tU : null,
        RU = function(UU, XU) {
          const zU = UU.baf2IslandCoop;
          return zU && iD(zU) || null !== XU ? void 0 : UU.baf2IslandInvitable
        }(XU, yU),
        PU = function(UU, XU) {
          const zU = UU.baf2IslandCoop;
          return zU && iD(zU) ? {
            key: `${ID}islandsCoopFull`,
            params: {
              max: String(zU.baf2CoopMax)
            }
          } : void 0 !== UU.baf2IslandInvitable && null === XU || zU && !zU.baf2CoopManageHere ? null : "degraded" === XU || "stuck" === XU ? {
            key: `${ID}islandsInviteNotLoaded`
          } : null === XU || function(UU) {
            return "notHome" === UU || "wilds" === UU || "visiting" === UU
          }(XU) || RD(XU) ? {
            key: `${ID}islandsInviteGoThere`
          } : {
            key: `${ID}islandsInviteBusy`
          }
        }(XU, yU),
        WU = () => {
          var UU;
          gU(null), null === (UU = kU.current) || void 0 === UU || UU.focus()
        };
      return (0, GQ.jsxs)("div", {
        ref: kU,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...VD(null === ZU ? oU : WU),
        children: [BU && (0, GQ.jsxs)(GQ.Fragment, {
          children: [(0, GQ.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: EU(`${tY}islandsPlayersTitle`, {
              count: String(BU.baf2CoopMembers.length),
              max: String(BU.baf2CoopMax)
            })
          }), (0, GQ.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: BU.baf2CoopMembers.map(((UU, XU) => {
              const cU = UU.baf2MemberKey,
                yU = HD(NU.get(cU), AU, FU);
              return (0, GQ.jsxs)("li", {
                className: By()("Baf2IslandPerson", {
                  Pending: yU
                }),
                children: [(0, GQ.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, GQ.jsx)("span", {
                    className: By()("Baf2IslandPersonName", {
                      Here: UU.baf2MemberHere
                    }),
                    children: UU.baf2MemberName
                  }), UU.baf2MemberHere && (0, GQ.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: EU(`${tY}islandsPlayerHere`)
                  }), 0 === XU && (0, GQ.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: EU(`${tY}islandsPlayerOwner`)
                  }), zU.remove && XU > 0 && !yU && ZU !== cU && (0, GQ.jsx)(tA.K, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var UU;
                      gU(cU), null === (UU = kU.current) || void 0 === UU || UU.focus()
                    },
                    children: EU(`${tY}islandsRemove`)
                  })]
                }), ZU === cU && (0, GQ.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, GQ.jsx)("p", {
                    children: qD(EU, `${tY}islandsRemoveConfirm`, {
                      player: UU.baf2MemberName
                    })
                  }), (0, GQ.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, GQ.jsx)(tA.G, {
                      onClick: () => {
                        (UU => {
                          const XU = YU.sendIslandEdit(`baf2coopremove ${GU} ${UU.baf2MemberKey}`);
                          IU((zU => new Map(zU).set(UU.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: XU
                          }))), WU()
                        })(UU)
                      },
                      children: EU(`${tY}islandsRemoveYes`)
                    }), (0, GQ.jsx)(tA.f, {
                      onClick: WU,
                      children: EU(`${tY}islandsCancel`)
                    })]
                  })]
                })]
              }, cU)
            }))
          })]
        }), (void 0 !== RU || null !== PU) && (0, GQ.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: EU(`${tY}islandsInviteTitle`)
        }), !BU && (void 0 !== RU || null !== PU) && (0, GQ.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: EU(`${tY}islandsInviteShareNote`)
        }), 0 === (null === RU || void 0 === RU ? void 0 : RU.length) && (0, GQ.jsx)(PY, {
          openSocial: DU,
          t: EU
        }), void 0 !== RU && RU.length > 0 && (0, GQ.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: RU.map((UU => {
            const XU = !0 === UU.baf2InvitableSent || HD(pU.get(UU.baf2InvitableId), AU, FU);
            return (0, GQ.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, GQ.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, GQ.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: UU.baf2InvitableName
                }), UU.baf2InvitableFull && !XU && (0, GQ.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: EU(`${tY}islandsInviteTheirFull`, {
                    max: String(QU)
                  })
                }), (XU || !UU.baf2InvitableFull) && (0, GQ.jsx)(tA.n, {
                  className: "Baf2IslandPersonButton",
                  disabled: XU,
                  onClick: () => {
                    (UU => {
                      const XU = YU.sendIslandEdit(`baf2coopinvite ${GU} ${UU}`);
                      aU((zU => new Map(zU).set(UU, {
                        atMs: Date.now(),
                        answer: XU
                      })))
                    })(UU.baf2InvitableId)
                  },
                  children: EU(XU ? `${tY}islandsInvited` : `${tY}islandsInvite`)
                })]
              })
            }, UU.baf2InvitableId)
          }))
        }), PU && (0, GQ.jsx)(KD, {
          note: PU,
          t: EU
        }), (0, GQ.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, GQ.jsx)(tA.f, {
            onClick: oU,
            children: EU(`${tY}islandsDone`)
          })
        })]
      })
    }

    function PY(UU) {
      let {
        openSocial: XU,
        t: zU
      } = UU;
      return (0, GQ.jsxs)(GQ.Fragment, {
        children: [(0, GQ.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: zU(XU ? `${tY}islandsInviteNobody` : `${tY}islandsInviteNobodyGuest`)
        }), XU && (0, GQ.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, GQ.jsx)(tA.f, {
            onClick: XU,
            children: zU("socialBar:social")
          })
        })]
      })
    }

    function WY(UU) {
      let {
        className: XU,
        text: zU,
        ConfirmButton: yU,
        confirmLabel: QU,
        canConfirm: AU,
        send: FU,
        done: oU,
        t: DU
      } = UU;
      const EU = (0, cU.useRef)(null);
      xD(EU);
      const YU = () => {
        oU(null)
      };
      return (0, GQ.jsxs)("div", {
        ref: EU,
        tabIndex: -1,
        className: By()("Baf2IslandForm", XU),
        ...VD(YU),
        children: [(0, GQ.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: zU
        }), (0, GQ.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, GQ.jsx)(yU, {
            disabled: !AU,
            onClick: () => {
              AU && oU(FU())
            },
            children: QU
          }), (0, GQ.jsx)(tA.f, {
            onClick: YU,
            children: DU(`${tY}islandsCancel`)
          })]
        })]
      })
    }

    function dY(UU) {
      return "hidden" !== UU
    }

    function LY(UU) {
      var XU, zU;
      let {
        card: yU,
        keepOwn: QU,
        blocked: AU,
        maxIslands: FU,
        serverNowMs: oU,
        nowMs: DU,
        actions: EU,
        full: YU,
        waits: NU,
        answered: IU,
        mode: pU,
        setMode: aU,
        pending: tU,
        onSent: gU,
        switchTo: kU,
        leave: GU,
        coopOn: BU,
        openSocial: ZU,
        t: RU
      } = UU;
      const PU = uA(),
        WU = yU.baf2IslandActive,
        dU = WU ? null : function(UU, XU) {
          if (UU <= 0) return null;
          const zU = XU - UU;
          if (zU < EQ) return [`${ID}islandsPlayedJustNow`];
          if (zU < pD) return [`${ID}islandsPlayedMinutes`, {
            minutes: String(Math.floor(zU / EQ))
          }];
          if (zU < aD) return [`${ID}islandsPlayedHours`, {
            hours: String(Math.floor(zU / pD))
          }];
          const cU = Math.floor(zU / aD);
          return 1 === cU ? [`${ID}islandsPlayedDay`] : [`${ID}islandsPlayedDays`, {
            days: String(cU)
          }]
        }(yU.baf2IslandLastPlayedMs, oU),
        LU = void 0 === (eU = yU.baf2IslandItems) ? null : 0 === eU ? [`${ID}islandsItemsNone`] : 1 === eU ? [`${ID}islandsItemsOne`] : [`${ID}islandsItems`, {
          count: String(eU)
        }];
      var eU;
      const CU = function(UU) {
          return UU ? 1 === UU ? [`${ID}islandsWaitingOne`] : [`${ID}islandsWaiting`, {
            count: String(UU)
          }] : null
        }(yU.baf2IslandWaiting),
        wU = yU.baf2IslandUnreadable,
        qU = yU.baf2IslandCoop,
        OU = uD(yU, EU, QU, YU, BU, AU),
        SU = (0, cU.useRef)(null);
      nD(null !== pU, SU);
      const rU = () => {
          var UU;
          aU(null), null === (UU = SU.current) || void 0 === UU || UU.focus()
        },
        uU = (UU, XU) => {
          rU(), null !== UU && gU(UU, XU)
        },
        fU = (UU, XU) => RU(`${tY}${UU}`, {
          time: aQ(RU, XU)
        });
      return (0, GQ.jsxs)("li", {
        ref: SU,
        tabIndex: -1,
        className: By()("Baf2IslandCard", {
          Active: WU,
          Pending: tU,
          Shared: void 0 !== qU
        }),
        children: [(0, GQ.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, GQ.jsx)("strong", {
            className: "Baf2IslandName",
            children: yU.baf2IslandName
          }), WU && (0, GQ.jsx)("span", {
            className: "Baf2IslandBadge",
            children: RU(`${tY}islandsOnThis`)
          }), qU && (0, GQ.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: RU(`${tY}islandsShared`)
          })]
        }), "member" === (null === qU || void 0 === qU ? void 0 : qU.baf2CoopRole) && (0, GQ.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: qD(RU, `${tY}islandsSharedBy`, {
            owner: qU.baf2CoopOwner
          })
        }), void 0 !== wU && (0, GQ.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: RU("newer" === wU ? `${tY}islandsUnreadable` : `${tY}islandsDamaged`)
        }), "corrupt" === wU && YU && (0, GQ.jsx)("p", {
          className: "Baf2IslandStats",
          children: RU(`${tY}islandsDamagedFull`)
        }), void 0 === wU && (0, GQ.jsxs)(GQ.Fragment, {
          children: [(0, GQ.jsx)(jD, {
            tier: yU.baf2IslandTier,
            t: RU
          }), (0, GQ.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, GQ.jsx)("span", {
              children: 1 === yU.baf2IslandQuestsDone ? RU(`${tY}islandsQuestsDoneOne`) : RU(`${tY}islandsQuestsDone`, {
                count: String(yU.baf2IslandQuestsDone)
              })
            }), (0, GQ.jsx)("span", {
              children: 1 === yU.baf2IslandMachines ? RU(`${tY}islandsMachinesOne`) : RU(`${tY}islandsMachines`, {
                count: String(yU.baf2IslandMachines)
              })
            }), LU && (0, GQ.jsx)("span", {
              children: RU(LU[0], LU[1])
            }), CU && (0, GQ.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: RU(CU[0], CU[1])
            }), dU && (0, GQ.jsx)("span", {
              children: RU(dU[0], dU[1])
            })]
          })]
        }), qU && void 0 === qU.baf2CoopState && "people" !== pU && (0, GQ.jsx)(BY, {
          members: qU.baf2CoopMembers,
          t: RU
        }), null === pU && (0, GQ.jsx)(ZY, {
          card: yU,
          answered: IU,
          nowMs: DU,
          t: RU
        }), OU.note && (0, GQ.jsx)(KD, {
          note: OU.note,
          className: By()({
            Unreachable: void 0 !== (null === qU || void 0 === qU ? void 0 : qU.baf2CoopState)
          }),
          t: RU
        }), "rename" === pU && (0, GQ.jsx)(kY, {
          card: yU,
          canRename: "enabled" === OU.rename,
          done: uU,
          t: RU
        }), "delete" === pU && (0, GQ.jsx)(GY, {
          card: yU,
          canDelete: "enabled" === OU.delete,
          done: UU => {
            uU(UU, qU ? "delete" : void 0)
          },
          t: RU
        }), "people" === pU && (0, GQ.jsx)(RY, {
          card: yU,
          view: OU,
          blocked: AU,
          maxIslands: FU,
          answered: IU,
          nowMs: DU,
          done: rU,
          openSocial: ZU,
          t: RU
        }), "leave" === pU && (0, GQ.jsx)(WY, {
          className: "Leave",
          text: qD(RU, `${tY}islandsLeaveConfirm`, {
            island: yU.baf2IslandName,
            owner: null !== (XU = null === (zU = yU.baf2IslandCoop) || void 0 === zU ? void 0 : zU.baf2CoopOwner) && void 0 !== XU ? XU : ""
          }),
          ConfirmButton: tA.G,
          confirmLabel: RU(`${tY}islandsLeaveYes`),
          canConfirm: "enabled" === OU.leave,
          send: () => gY(PU, yU),
          done: UU => {
            uU(UU, "leave"), null !== UU && WU && GU()
          },
          t: RU
        }), "unshare" === pU && (0, GQ.jsx)(WY, {
          className: "Unshare",
          text: qD(RU, `${tY}islandsStopSharingConfirm`, {
            island: yU.baf2IslandName
          }),
          ConfirmButton: tA.n,
          confirmLabel: RU(`${tY}islandsStopSharing`),
          canConfirm: "enabled" === OU.unshare,
          send: () => PU.sendIslandEdit(`baf2coopunshare ${yU.baf2IslandId}`),
          done: UU => {
            uU(UU), null !== UU && GU()
          },
          t: RU
        }), null === pU && !tU && (0, GQ.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": yU.baf2IslandName,
          children: [dY(OU.switch) && (0, GQ.jsx)(tA.n, {
            disabled: "enabled" !== OU.switch,
            onClick: kU,
            children: "tryAgain" === OU.switchLabel ? RU(`${tY}islandsTryAgain`) : NU.switch > 0 ? fU("islandsSwitchIn", NU.switch) : RU(`${tY}islandsSwitch`)
          }), dY(OU.rename) && (0, GQ.jsx)(tA.f, {
            disabled: "enabled" !== OU.rename,
            onClick: () => {
              aU("rename")
            },
            children: RU(`${tY}islandsRename`)
          }), dY(OU.people) && (0, GQ.jsx)(tA.f, {
            disabled: "enabled" !== OU.people,
            onClick: () => {
              aU("people")
            },
            children: RU("players" === OU.peopleLabel ? `${tY}islandsPlayersButton` : `${tY}islandsInviteButton`)
          }), dY(OU.unshare) && (0, GQ.jsx)(tA.f, {
            disabled: "enabled" !== OU.unshare,
            onClick: () => {
              aU("unshare")
            },
            children: RU(`${tY}islandsStopSharing`)
          }), dY(OU.dismiss) && (0, GQ.jsx)(tA.f, {
            disabled: "enabled" !== OU.dismiss,
            onClick: () => {
              gU(gY(PU, yU), "dismiss"), WU && GU()
            },
            children: RU(`${tY}islandsDismiss`)
          }), dY(OU.leave) && (0, GQ.jsx)(tA.K, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== OU.leave,
            onClick: () => {
              aU("leave")
            },
            children: WU && NU.switch > 0 ? fU("islandsLeaveIn", NU.switch) : RU(`${tY}islandsLeave`)
          }), dY(OU.delete) && (0, GQ.jsx)(tA.K, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== OU.delete,
            onClick: () => {
              aU("delete")
            },
            children: NU.change > 0 && OU.deleteWaits ? fU("islandsDeleteIn", NU.change) : RU(`${tY}islandsDelete`)
          })]
        })]
      })
    }
    const eY = "buildAFactory2Game:";

    function CY(UU) {
      let {
        invite: XU,
        actions: zU,
        full: yU,
        maxIslands: QU,
        waitSeconds: AU,
        focus: FU,
        focused: oU,
        join: DU,
        decline: EU,
        t: YU
      } = UU;
      const [NU, IU] = (0, cU.useState)(!1), pU = (0, cU.useRef)(null);
      nD(NU, pU), (0, cU.useEffect)((() => {
        var UU;
        FU && (IU(!0), null === (UU = pU.current) || void 0 === UU || UU.focus(), oU())
      }), [FU, oU]);
      const aU = function(UU, XU, zU, cU, yU) {
          return zU ? {
            join: !1,
            note: {
              key: `${ID}islandsJoinTooMany`,
              params: {
                max: String(cU)
              }
            }
          } : UU.baf2InvitePlayers >= yU ? {
            join: !1,
            note: {
              key: `${ID}islandsJoinFull`
            }
          } : {
            join: XU.switch,
            note: null
          }
        }(XU, zU, yU, QU, 10),
        tU = XU.baf2InviteIsland,
        gU = XU.baf2InvitePlayers,
        kU = () => {
          var UU;
          IU(!1), null === (UU = pU.current) || void 0 === UU || UU.focus()
        },
        GU = AU > 0 && null === aU.note ? YU(`${eY}islandsJoinIn`, {
          time: aQ(YU, AU)
        }) : YU(`${eY}islandsJoin`);
      return (0, GQ.jsxs)("li", {
        ref: pU,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...NU ? VD(kU) : {},
        children: [(0, GQ.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, GQ.jsx)("strong", {
            className: "Baf2IslandName",
            children: tU
          })
        }), (0, GQ.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: qD(YU, `${eY}islandsInvitedBy`, {
            owner: XU.baf2InviteOwner
          })
        }), (0, GQ.jsx)(jD, {
          tier: XU.baf2InviteTier,
          t: YU
        }), (0, GQ.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, GQ.jsx)("span", {
            children: 1 === gU ? YU(`${eY}islandsPlayersCountOne`) : YU(`${eY}islandsPlayersCount`, {
              count: String(gU)
            })
          })
        }), aU.note && (0, GQ.jsx)(KD, {
          note: aU.note,
          t: YU
        }), NU && (0, GQ.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: qD(YU, `${eY}islandsJoinConfirm`, {
            island: tU
          })
        }), !NU && (0, GQ.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": tU,
          children: [(0, GQ.jsx)(tA.n, {
            disabled: !aU.join,
            onClick: () => {
              var UU;
              IU(!0), null === (UU = pU.current) || void 0 === UU || UU.focus()
            },
            children: GU
          }), (0, GQ.jsx)(tA.f, {
            onClick: EU,
            children: YU(`${eY}islandsDecline`)
          })]
        }), NU && (0, GQ.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, GQ.jsx)(tA.n, {
            disabled: !aU.join,
            onClick: DU,
            children: YU(`${eY}islandsJoinYes`)
          }), (0, GQ.jsx)(tA.f, {
            onClick: kU,
            children: YU(`${eY}islandsCancel`)
          })]
        })]
      })
    }

    function wY(UU) {
      let {
        invites: XU,
        actions: zU,
        full: cU,
        maxIslands: yU,
        waitSeconds: QU,
        focus: AU,
        focused: FU,
        leave: oU,
        declined: DU,
        t: EU
      } = UU;
      const YU = uA();
      return (0, GQ.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, GQ.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: EU(`${eY}islandsInvitesTitle`)
        }), (0, GQ.jsx)("ul", {
          className: "Baf2IslandCards",
          children: XU.map((UU => {
            const XU = UU.baf2InviteId;
            return (0, GQ.jsx)(CY, {
              invite: UU,
              actions: zU,
              full: cU,
              maxIslands: yU,
              waitSeconds: QU,
              focus: AU === XU,
              focused: FU,
              join: () => {
                YU.send(`baf2coopaccept ${XU}`), oU()
              },
              decline: () => {
                YU.send(`baf2coopdecline ${XU}`), DU(XU)
              },
              t: EU
            }, XU)
          }))
        })]
      })
    }
    const qY = "buildAFactory2Game:";

    function OY(UU) {
      let {
        cards: XU,
        activeName: zU,
        canStart: yU,
        waitSeconds: QU,
        leave: AU,
        t: FU
      } = UU;
      const oU = uA(),
        [DU, EU] = (0, cU.useState)(!1),
        [YU, NU] = (0, cU.useState)(""),
        IU = (0, cU.useRef)(null);
      nD(DU, IU), (0, cU.useEffect)((() => {
        var UU;
        DU && (null === (UU = IU.current) || void 0 === UU || UU.focus())
      }), [DU]);
      const pU = GD(XU),
        aU = gD(YU),
        tU = kD(aU),
        gU = () => {
          yU && !tU && (oU.send("" === aU || aU === pU ? jU : `${jU} ${aU}`), AU())
        },
        kU = () => {
          var UU;
          EU(!1), null === (UU = IU.current) || void 0 === UU || UU.focus()
        };
      return (0, GQ.jsxs)("li", {
        ref: IU,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...DU ? VD(kU) : {},
        children: [(0, GQ.jsx)("strong", {
          className: "Baf2IslandName",
          children: FU(`${qY}islandsNewTitle`)
        }), !DU && (0, GQ.jsx)("p", {
          className: "Baf2IslandStats",
          children: FU(`${qY}islandsNewNote`)
        }), DU && (0, GQ.jsxs)(GQ.Fragment, {
          children: [(0, GQ.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: qD(FU, `${qY}islandsNewConfirm`, {
              name: zU
            })
          }), (0, GQ.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [FU(`${qY}islandsNewNameLabel`), (0, GQ.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: YU,
              placeholder: pU,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: sD,
              onChange: UU => {
                NU(UU.target.value)
              },
              ...vD(gU, kU)
            })]
          }), tU && (0, GQ.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: FU(`${qY}islandsNameReserved`)
          })]
        }), (0, GQ.jsxs)("div", {
          className: By()("Baf2IslandButtons", {
            Stacked: DU
          }),
          children: [(0, GQ.jsx)(tA.n, {
            disabled: !yU || DU && tU,
            onClick: () => {
              if (!DU) return NU(pU), void EU(!0);
              gU()
            },
            children: QU > 0 ? FU(`${qY}islandsNewIn`, {
              time: aQ(FU, QU)
            }) : FU(DU ? `${qY}islandsNewConfirmButton` : `${qY}islandsNew`)
          }), DU && (0, GQ.jsx)(tA.f, {
            onClick: kU,
            children: FU(`${qY}islandsCancel`)
          })]
        })]
      })
    }

    function SY(UU) {
      var XU, zU;
      let {
        message: yU,
        arrivedAtMs: QU,
        close: AU,
        leave: FU,
        openSocial: oU
      } = UU;
      const DU = uA(),
        {
          t: EU
        } = (0, Wy.I)(),
        YU = JD(1e3),
        [NU, IU] = (0, cU.useState)(null),
        [pU, aU] = (0, cU.useState)(new Map),
        [tU, gU] = (0, cU.useState)(new Set),
        kU = yU.baf2IslandCards,
        GU = function(UU, XU, zU, cU) {
          return (null !== UU && void 0 !== UU ? UU : []).filter((UU => XU + UU.baf2InviteLeftMs > zU && !cU.has(UU.baf2InviteId)))
        }(yU.baf2IslandsInvites, QU, YU, tU),
        BU = GU.map((UU => UU.baf2InviteId)).join(" "),
        ZU = (0, cU.useRef)(null),
        RU = mD(ZU);
      lD(), (0, cU.useEffect)((() => {
        var UU, XU;
        null !== (UU = ZU.current) && void 0 !== UU && UU.contains(document.activeElement) || (null === (XU = ZU.current) || void 0 === XU || XU.focus())
      }), [yU, BU]), (0, cU.useEffect)((() => {
        aU((UU => function(UU, XU, zU, cU) {
          const yU = new Map;
          for (const QU of XU) {
            const XU = UU.get(QU.baf2IslandId);
            XU && (void 0 !== XU.untilGone || cU < XU.answer) && LD(XU, QU, zU) && yU.set(QU.baf2IslandId, XU)
          }
          return yU.size === UU.size ? UU : yU
        }(UU, yU.baf2IslandCards, Date.now(), yU.baf2IslandsAnswered)))
      }), [yU]);
      const PU = tD(QU, yU.baf2IslandsWaitMs, YU),
        WU = yU.baf2IslandsBlocked,
        dU = PD(WU, PU),
        LU = function(UU, XU) {
          const zU = PD(UU, 0);
          return {
            switch: zU.switch ? XU : 0,
            change: zU.change ? XU : 0
          }
        }(WU, PU),
        eU = kU.length >= yU.baf2IslandsMax,
        CU = kU.length > 0,
        wU = function(UU, XU, zU) {
          return UU + Math.max(0, zU - XU)
        }(yU.baf2IslandsNowMs, QU, YU),
        qU = null !== (XU = null === (zU = kU.find((UU => UU.baf2IslandActive))) || void 0 === zU ? void 0 : zU.baf2IslandName) && void 0 !== XU ? XU : "",
        OU = function(UU) {
          const XU = UU.filter(rD).length;
          return XU <= 1 && XU < UU.length
        }(kU),
        SU = !0 === yU.baf2IslandsCoop,
        rU = function(UU, XU) {
          const zU = UU.find((UU => UU.baf2IslandActive)),
            cU = null === zU || void 0 === zU ? void 0 : zU.baf2IslandCoop;
          return zU && "member" === (null === cU || void 0 === cU ? void 0 : cU.baf2CoopRole) ? {
            key: `${ID}islandsKeepOwnMember`,
            names: {
              owner: cU.baf2CoopOwner,
              island: zU.baf2IslandName
            }
          } : {
            key: XU ? `${ID}islandsKeepOwn` : `${ID}islandsKeepOwnSolo`
          }
        }(kU, SU),
        [uU, fU] = (0, cU.useState)(null);
      (0, cU.useEffect)((() => {
        void 0 !== yU.baf2IslandsFocusInvite && fU(yU.baf2IslandsFocusInvite)
      }), [yU]);
      const iU = (0, cU.useCallback)((() => {
          fU(null)
        }), []),
        HU = NU ? kU.find((UU => UU.baf2IslandId === NU.id)) : void 0,
        MU = NU && HU && "hidden" !== uD(HU, dU, OU, eU, SU, WU)[NU.mode] ? NU : null;
      return (0, GQ.jsx)(aA.c, {
        close: AU,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, GQ.jsxs)("section", {
          ref: ZU,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: RU ? {
            marginTop: `${RU.marginTop}px`,
            maxHeight: `${RU.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, GQ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, GQ.jsxs)("div", {
              children: [(0, GQ.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: EU(`${qY}islandsTitle`)
              }), CU && (0, GQ.jsx)("p", {
                children: EU(`${qY}islandsSubtitle`, {
                  count: String(kU.length),
                  max: String(yU.baf2IslandsMax)
                })
              })]
            }), (0, GQ.jsx)(tA.k, {
              ariaLabel: EU(`${qY}islandsClose`),
              onClick: AU
            })]
          }), (0, GQ.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== WU && (0, GQ.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: qD(EU, BD(WU, ZD(kU)), {
                island: qU
              })
            }), CU && GU.length > 0 && (0, GQ.jsx)(wY, {
              invites: GU,
              actions: dU,
              full: eU,
              maxIslands: yU.baf2IslandsMax,
              waitSeconds: LU.switch,
              focus: uU,
              focused: iU,
              leave: FU,
              declined: UU => {
                gU((XU => new Set(XU).add(UU)))
              },
              t: EU
            }), CU && (0, GQ.jsxs)(GQ.Fragment, {
              children: [eU && (0, GQ.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: EU(`${qY}islandsFull`, {
                  max: String(yU.baf2IslandsMax)
                })
              }), (0, GQ.jsx)("p", {
                className: "Baf2IslandsNote",
                children: qD(EU, rU.key, rU.names)
              }), (0, GQ.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [kU.map((UU => {
                  const XU = UU.baf2IslandId;
                  return (0, GQ.jsx)(LY, {
                    card: UU,
                    keepOwn: OU,
                    coopOn: SU,
                    openSocial: oU,
                    blocked: WU,
                    maxIslands: yU.baf2IslandsMax,
                    serverNowMs: wU,
                    nowMs: YU,
                    actions: dU,
                    full: eU,
                    waits: LU,
                    answered: yU.baf2IslandsAnswered,
                    mode: (null === MU || void 0 === MU ? void 0 : MU.id) === XU ? MU.mode : null,
                    setMode: UU => {
                      IU(null === UU ? null : {
                        id: XU,
                        mode: UU
                      })
                    },
                    pending: LD(pU.get(XU), UU, YU),
                    onSent: (zU, cU) => {
                      aU((yU => {
                        const QU = {
                          atMs: Date.now(),
                          from: UU.baf2IslandName,
                          answer: zU
                        };
                        return new Map(yU).set(XU, cU ? {
                          ...QU,
                          untilGone: cU
                        } : QU)
                      }))
                    },
                    leave: FU,
                    switchTo: () => {
                      DU.send(`baf2islandswitch ${XU}`), FU()
                    },
                    t: EU
                  }, XU)
                })), !eU && (0, GQ.jsx)(OY, {
                  cards: kU,
                  activeName: qU,
                  canStart: dU.change,
                  waitSeconds: LU.change,
                  leave: FU,
                  t: EU
                })]
              })]
            })]
          })]
        })
      })
    }
    var rY = zU(5581);
    const uY = {
        all: "buildAFactory2Game:terminalChip_all",
        recent: "buildAFactory2Game:terminalChip_recent",
        GQ: "buildAFactory2Game:terminalChip_ores",
        bars: "buildAFactory2Game:terminalChip_bars",
        parts: "buildAFactory2Game:terminalChip_parts",
        nuclear: "buildAFactory2Game:terminalChip_nuclear",
        farm: "buildAFactory2Game:terminalChip_farm",
        other: "buildAFactory2Game:terminalChip_other"
      },
      fY = Object.keys(uY),
      iY = new Set([...Object.keys(jX), ...[...rX.Press.recipes, ...rX["Wire Mill"].recipes].map((UU => UU.output))]),
      HY = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      MY = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      vY = / Bar$|Alloy$/,
      VY = /Porkchop|Beef|Mutton|Venison|Steak/,
      sY = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;
    const nY = (0, cU.memo)((function(UU) {
      let {
        item: XU,
        name: zU,
        amount: cU,
        selected: yU,
        small: QU,
        onPick: AU
      } = UU;
      return (0, GQ.jsxs)("button", {
        type: "button",
        className: By()("Baf2TermTile", {
          On: yU,
          Small: QU
        }),
        "aria-label": `${zU}: ${cU}`,
        "aria-pressed": yU,
        onClick: () => {
          AU(XU)
        },
        children: [(0, GQ.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, GQ.jsx)(Ly.c, {
            itemName: XU,
            amount: 0
          })
        }), (0, GQ.jsx)("span", {
          className: "Baf2TermCount",
          children: IQ(cU, 1e4)
        }), !QU && (0, GQ.jsx)("span", {
          className: "Baf2TermName",
          children: zU
        })]
      })
    }));

    function mY(UU) {
      let {
        store: XU,
        close: zU,
        send: yU
      } = UU;
      const {
        t: QU
      } = (0, Wy.I)(), {
        isTouchScreen: AU
      } = (0, gy.q)(["isTouchScreen"]);
      ! function(UU) {
        const [XU, zU] = (0, cU.useState)(UU.version);
        (0, cU.useEffect)((() => (zU(UU.version), UU.subscribe((() => {
          zU(UU.version)
        })))), [UU])
      }(XU);
      const [FU, oU] = (0, cU.useState)("all"), [DU, EU] = (0, cU.useState)(!1), [YU, NU] = (0, cU.useState)(""), [IU, pU] = (0, cU.useState)(""), [aU, tU] = (0, cU.useState)(null), [gU, kU] = (0, cU.useState)(!1), [GU, BU, ZU] = function() {
        const UU = (0, cU.useRef)(null),
          [XU, zU] = (0, cU.useState)(!1),
          yU = () => {
            const XU = UU.current;
            zU(null !== XU && XU.scrollLeft + XU.clientWidth < XU.scrollWidth - 1)
          };
        return (0, cU.useEffect)(yU), (0, cU.useEffect)((() => {
          const XU = UU.current;
          if (!XU) return;
          const zU = new ResizeObserver(yU);
          return zU.observe(XU), () => {
            zU.disconnect()
          }
        }), []), [UU, XU, yU]
      }(), RU = (0, cU.useMemo)((() => new Map), [QU]), PU = UU => {
        let XU = RU.get(UU);
        return void 0 === XU && (XU = function(UU, XU) {
          const zU = /^(.+) \((.+)\)$/.exec(UU);
          return zU ? XU(zU[2], zU[1]) : UU
        }((0, Ty.h)(QU, UU), ((UU, XU) => QU("buildAFactory2Game:terminalTileKind", {
          kind: UU,
          base: XU
        }))), RU.set(UU, XU)), XU
      }, WU = XU.isReadOnly(), dU = gU && !WU, LU = XU.recent(), eU = XU.items(), CU = IU.trim().toLowerCase(), wU = dU ? XU.heldItems(aU) : ("recent" === FU ? LU : eU).filter((UU => {
        const XU = PU(UU);
        return ("all" === FU || "recent" === FU || function(UU) {
          return AQ(UU) ? "farm" : HY.test(UU) ? "nuclear" : vY.test(UU) ? "bars" : VY.test(UU) ? "farm" : MY.test(UU) ? "GQ" : iY.has(UU) ? "parts" : sY.test(UU) ? "farm" : "other"
        }(UU) === FU) && ("" === CU || XU.toLowerCase().includes(CU)) && ("" === YU || XU.toUpperCase().startsWith(YU))
      })), qU = new Set(eU.map((UU => PU(UU).charAt(0).toUpperCase()))), OU = UU => dU ? XU.heldAmount(UU) : XU.amount(UU), SU = !dU && "recent" !== FU && LU.length > 0, rU = function(UU, XU) {
        return null !== UU && XU.includes(UU) ? UU : null
      }(aU, SU ? [...wU, ...LU] : wU), uU = null === rU ? 0 : XU.amount(rU), fU = null === rU ? 0 : OU(rU), iU = (0, cU.useCallback)((UU => {
        tU((XU => XU === UU ? null : UU))
      }), []), HU = UU => fU > 0 || dU && null === rU && "fill" === UU && wU.length > 0, MU = dU ? [
        ["one", QU("buildAFactory2Game:terminalStoreOne")],
        ["stack", QU("buildAFactory2Game:terminalStoreStack", {
          amount: String(99)
        })],
        ["fill", QU(null === rU ? "buildAFactory2Game:terminalStoreEverything" : "buildAFactory2Game:terminalStoreAll")]
      ] : [
        ["one", QU("buildAFactory2Game:terminalTakeOne")],
        ["stack", QU("buildAFactory2Game:terminalTakeStack", {
          amount: String(99)
        })],
        ["fill", QU("buildAFactory2Game:terminalFill")]
      ], vU = dU ? QU("buildAFactory2Game:terminalStoreEmpty") : "" !== YU ? QU("buildAFactory2Game:terminalEmptyLetter", {
        letter: YU
      }) : "" !== CU ? QU("buildAFactory2Game:terminalEmptySearch", {
        query: IU
      }) : QU("buildAFactory2Game:terminalEmpty");
      return (0, GQ.jsx)(aA.c, {
        close: zU,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2TermOverlay",
        children: (0, GQ.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, GQ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, GQ.jsxs)("div", {
              children: [(0, GQ.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: QU(XU.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, GQ.jsxs)("p", {
                className: "Baf2TermSubtitle",
                children: [(0, GQ.jsx)("span", {
                  className: By()({
                    Off: dU
                  }),
                  children: QU("buildAFactory2Game:terminalSubtitle", {
                    count: String(XU.siloCount())
                  })
                }), !WU && (0, GQ.jsx)("span", {
                  className: By()({
                    Off: !dU
                  }),
                  children: QU("buildAFactory2Game:terminalStoreSubtitle")
                })]
              })]
            }), !WU && (0, GQ.jsx)(rY.d, {
              className: "Baf2TermModes",
              options: [{
                value: "take",
                label: QU("buildAFactory2Game:terminalModeTake")
              }, {
                value: "store",
                label: QU("buildAFactory2Game:terminalModeStore")
              }],
              value: dU ? "store" : "take",
              onChange: UU => {
                kU("store" === UU), tU(null)
              },
              ariaLabel: QU("buildAFactory2Game:terminalModes")
            }), (0, GQ.jsx)(tA.k, {
              onClick: zU
            })]
          }), (0, GQ.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, GQ.jsxs)("div", {
              className: By()("Baf2TermTools", {
                Hidden: dU
              }),
              children: [(0, GQ.jsx)("div", {
                ref: GU,
                className: By()("Baf2TermChips", {
                  MoreRight: BU
                }),
                onScroll: ZU,
                children: DU ? (0, GQ.jsxs)(GQ.Fragment, {
                  children: [(0, GQ.jsx)("button", {
                    type: "button",
                    "aria-label": QU("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      EU(!1), NU("")
                    },
                    children: "\u2190"
                  }), [...qU].sort().map((UU => (0, GQ.jsx)("button", {
                    type: "button",
                    className: By()({
                      On: YU === UU
                    }),
                    onClick: () => {
                      NU(YU === UU ? "" : UU)
                    },
                    children: UU
                  }, UU)))]
                }) : (0, GQ.jsxs)(GQ.Fragment, {
                  children: [(0, GQ.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      EU(!0)
                    },
                    children: QU("buildAFactory2Game:terminalLetters")
                  }), fY.map((UU => (0, GQ.jsx)("button", {
                    type: "button",
                    className: By()({
                      On: FU === UU
                    }),
                    onClick: () => {
                      oU(UU)
                    },
                    children: QU(uY[UU])
                  }, UU)))]
                })
              }), !AU && (0, GQ.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: IU,
                placeholder: QU("buildAFactory2Game:terminalSearch"),
                "aria-label": QU("buildAFactory2Game:terminalSearch"),
                onChange: UU => {
                  pU(UU.target.value)
                },
                onKeyDown: UU => {
                  UU.stopPropagation()
                }
              }), (0, GQ.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": QU("buildAFactory2Game:terminalResort"),
                title: QU("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  XU.resort()
                },
                children: "\u21c5"
              })]
            }), SU && (0, GQ.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, GQ.jsx)("span", {
                children: QU(uY.recent)
              }), LU.map((UU => (0, GQ.jsx)(nY, {
                item: UU,
                name: PU(UU),
                amount: XU.amount(UU),
                selected: rU === UU,
                small: !0,
                onPick: iU
              }, UU)))]
            }), (0, GQ.jsx)("div", {
              className: "Baf2TermTiles",
              children: wU.length > 0 ? wU.map((UU => (0, GQ.jsx)(nY, {
                item: UU,
                name: PU(UU),
                amount: OU(UU),
                selected: rU === UU,
                onPick: iU
              }, UU))) : (0, GQ.jsx)("p", {
                className: "Baf2TermEmpty",
                children: vU
              })
            }), (0, GQ.jsxs)("div", {
              className: By()("Baf2TermActions", {
                Hidden: dU && 0 === wU.length
              }),
              children: [(0, GQ.jsx)("span", {
                className: "Baf2TermPicked",
                children: WU ? (0, GQ.jsxs)(GQ.Fragment, {
                  children: [null !== rU && uU > 0 ? PU(rU) : QU("buildAFactory2Game:terminalVisiting"), (0, GQ.jsx)("small", {
                    children: QU("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== rU ? (0, GQ.jsxs)(GQ.Fragment, {
                  children: [PU(rU), (0, GQ.jsx)("small", {
                    children: QU("buildAFactory2Game:terminalStored", {
                      amount: uU.toLocaleString()
                    })
                  })]
                }) : QU(dU ? "buildAFactory2Game:terminalStorePick" : "buildAFactory2Game:terminalPick")
              }), !WU && MU.map((UU => {
                let [zU, cU] = UU;
                const QU = "fill" === zU ? tA.l : tA.f;
                return (0, GQ.jsx)(QU, {
                  className: "Baf2TermTake",
                  disabled: !HU(zU),
                  onClick: () => {
                    (UU => {
                      HU(UU) && yU(null === rU ? XU.putAll() : dU ? XU.put(UU, rU) : XU.take(UU, rU))
                    })(zU)
                  },
                  children: cU
                }, zU)
              }))]
            })]
          })]
        })
      })
    }

    function lY(UU) {
      let {
        kind: XU,
        icon: zU,
        label: cU,
        number: yU,
        preview: QU,
        note: AU,
        tone: FU = null,
        share: oU,
        onExplain: DU
      } = UU;
      return (0, GQ.jsxs)("button", {
        type: "button",
        className: By()("NxLane", XU, {
          Warn: "warn" === FU,
          Danger: "danger" === FU
        }),
        onClick: DU,
        children: [(0, GQ.jsxs)("span", {
          className: "NxLaneHead",
          children: [zU, (0, GQ.jsx)("span", {
            className: "NxLaneLabel",
            children: cU
          })]
        }), (0, GQ.jsxs)("span", {
          className: "NxLaneNum",
          children: [yU, QU && (0, GQ.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", QU]
          })]
        }), (0, GQ.jsx)("span", {
          className: "NxLaneNote",
          children: AU
        }), void 0 !== oU && (0, GQ.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, oU)) + "%"
          }
        })]
      })
    }

    function xY(UU) {
      let {
        kind: XU,
        step: zU,
        short: cU,
        planned: yU
      } = UU;
      return (0, GQ.jsx)("i", {
        className: By()("NxPipe", XU, `Step${zU}`, {
          Short: cU,
          Planned: yU
        }),
        "aria-hidden": "true"
      })
    }

    function JY(UU) {
      let {
        max: XU,
        bands: zU,
        ticks: cU,
        now: yU,
        settle: QU,
        settleTone: AU,
        onExplain: FU
      } = UU;
      const oU = UU => Math.max(0, Math.min(XU, UU)) / XU * 100 + "%";
      let DU = 0;
      return (0, GQ.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: FU,
        children: [(0, GQ.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [zU.map((UU => {
            const XU = {
              bottom: oU(DU),
              height: `calc(${oU(UU.upTo)} - ${oU(DU)})`
            };
            return DU = UU.upTo, (0, GQ.jsx)("i", {
              className: By()("NxGaugeBand", UU.kind),
              style: XU
            }, UU.kind)
          })), null !== yU && (0, GQ.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: oU(yU)
            }
          }), void 0 !== QU && null !== QU && (0, GQ.jsx)("i", {
            className: By()("NxGaugeSettle", {
              Bad: "bad" === AU
            }),
            style: {
              bottom: oU(QU)
            }
          })]
        }), (0, GQ.jsx)("span", {
          className: "NxGaugeTicks",
          children: cU.map((UU => (0, GQ.jsx)("small", {
            style: {
              bottom: oU(UU)
            },
            children: UU
          }, UU)))
        })]
      })
    }

    function jY(UU) {
      const [XU, zU] = (0, cU.useState)(null), [yU, QU] = (0, cU.useState)((() => {
        try {
          return null === window.localStorage.getItem(UU)
        } catch {
          return !1
        }
      })), AU = (0, cU.useRef)(null);
      (0, cU.useEffect)((() => () => {
        null !== AU.current && clearTimeout(AU.current)
      }), []);
      const FU = (0, cU.useCallback)((XU => {
          zU(XU), QU(!1);
          try {
            window.localStorage.setItem(UU, "1")
          } catch {}
          null !== AU.current && clearTimeout(AU.current), AU.current = setTimeout((() => {
            AU.current = null, zU(null)
          }), 5e3)
        }), [UU]),
        oU = (0, cU.useCallback)(((XU, zU) => {
          const cU = `${UU}:${XU}`;
          try {
            if (null !== window.localStorage.getItem(cU)) return;
            window.localStorage.setItem(cU, "1")
          } catch {
            return
          }
          FU(zU)
        }), [FU, UU]);
      return {
        explained: XU,
        hinting: yU,
        explain: FU,
        explainOnce: oU
      }
    }

    function KY(UU) {
      let {
        text: XU,
        tone: zU,
        explained: cU
      } = UU;
      return (0, GQ.jsxs)("p", {
        className: By()("NxStatus", null === cU ? zU : "Explain"),
        "aria-live": "polite",
        children: [null !== cU && (0, GQ.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== cU && void 0 !== cU ? cU : XU]
      })
    }
    const bY = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function TY(UU, XU) {
      const zU = Number(UU[XU]);
      return 1 === zU || 2 === zU || 3 === zU ? zU : 0
    }

    function hY(UU) {
      return !!to("reactor", UU.baf2RxNeed) || void 0 !== UU.baf2RxLayout && UU.baf2RxNeed.some((UU => {
        let [XU, zU] = UU;
        return zU > 0 && bY.includes(XU)
      }))
    }
    const UN = "buildAFactory2Game:";

    function XN(UU) {
      let {
        status: XU,
        store: zU,
        busy: cU
      } = UU;
      const {
        t: yU
      } = (0, Wy.I)();
      return function(UU) {
        return 0 !== (UU.baf2RxFlags & aX) && (!UU.baf2RxFormed || void 0 !== UU.baf2RxLayout)
      }(XU) ? (0, GQ.jsx)(tA.l, {
        disabled: !hY(XU) || cU,
        onClick: () => {
          zU.tap("fill", (() => {
            zU.send("fill")
          }))
        },
        children: yU(void 0 !== XU.baf2RxLayout ? `${UN}rxFillLayout` : `${UN}rxFill`)
      }) : null
    }

    function zN(UU) {
      let {
        status: XU,
        store: zU,
        readOnly: yU,
        bare: QU = !1
      } = UU;
      const {
        t: AU
      } = (0, Wy.I)(), FU = XU.baf2RxLayout, [oU, DU, EU] = XU.baf2RxDims, YU = (0, cU.useMemo)((() => {
        if (void 0 === FU) return 0;
        const UU = Uint8Array.from(FU, ((UU, XU) => TY(FU, XU)));
        return JF([oU - 2, DU - 2, EU - 2], UU).max
      }), [FU, oU, DU, EU]);
      return void 0 === FU ? null : (0, GQ.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!QU && (0, GQ.jsx)("span", {
          className: "Baf2RxHint",
          children: AU(`${UN}rxLayoutLine`, {
            amount: Po(YU)
          })
        }), !yU && (0, GQ.jsx)(tA.f, {
          onClick: () => {
            zU.send("layout", 0)
          },
          children: AU(`${UN}rxLayoutHide`)
        })]
      })
    }
    const cN = "buildAFactory2Game:",
      yN = {
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

    function QN(UU) {
      let {
        id: XU,
        title: zU,
        body: cU,
        bodyParams: yU,
        yes: QU,
        cancel: AU,
        confirm: FU
      } = UU;
      const {
        t: oU
      } = (0, Wy.I)();
      return (0, GQ.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": XU,
        children: [(0, GQ.jsx)("h3", {
          id: XU,
          children: oU(zU)
        }), (0, GQ.jsx)("p", {
          children: oU(cU, yU)
        }), (0, GQ.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, GQ.jsx)(tA.j, {
            onClick: AU,
            children: oU(`${cN}rxCancel`)
          }), (0, GQ.jsx)(tA.G, {
            onClick: FU,
            children: oU(QU)
          })]
        })]
      })
    }

    function AN(UU) {
      const [XU, zU] = (0, cU.useState)((() => UU.get()));
      return (0, cU.useEffect)((() => (zU(UU.get()), UU.subscribe((() => {
        zU(UU.get())
      })))), [UU]), XU
    }

    function FN(UU) {
      let {
        kind: XU,
        cap: zU,
        busy: yU = !1,
        whyNot: QU = null,
        apart: AU
      } = UU;
      const {
        t: FU
      } = (0, Wy.I)(), [oU, DU] = (0, cU.useState)(!1), EU = null !== QU, YU = (0, cU.useRef)(null);
      if ((0, cU.useEffect)((() => {
          EU && DU(!1)
        }), [EU]), (0, cU.useLayoutEffect)((() => {
          var UU;
          const XU = null === (UU = YU.current) || void 0 === UU ? void 0 : UU.firstElementChild;
          EU ? null === XU || void 0 === XU || XU.setAttribute("aria-disabled", "true") : yU || null === XU || void 0 === XU || XU.removeAttribute("aria-disabled")
        })), !oU || EU) return (0, GQ.jsx)("span", {
        ref: YU,
        className: "Baf2RxApartWrap",
        children: (0, GQ.jsx)(tA.j, {
          disabled: yU,
          className: By()({
            Baf2RxNotYet: EU
          }),
          onClick: () => {
            QU ? QU() : DU(!0)
          },
          children: FU(`${cN}rxApart`)
        })
      });
      const NU = "battery" === XU,
        IU = void 0 === zU ? `${cN}batApartConfirmBodyPlan` : `${cN}batApartConfirmBody`;
      return (0, GQ.jsx)(QN, {
        id: `baf2ApartTitle_${XU}`,
        title: NU ? `${cN}batApartConfirmTitle` : `${cN}rxApartConfirmTitle`,
        body: NU ? IU : `${cN}rxApartConfirmBody`,
        bodyParams: void 0 === zU ? void 0 : {
          cap: zU
        },
        yes: `${cN}rxApart`,
        cancel: () => {
          DU(!1)
        },
        confirm: () => {
          DU(!1), AU()
        }
      })
    }

    function oN(UU) {
      let {
        mood: XU,
        big: zU
      } = UU;
      const cU = yN[XU],
        yU = [];
      return cU.rows.forEach(((UU, XU) => {
        for (let zU = 0; zU < UU.length; zU++) "." !== UU[zU] && yU.push((0, GQ.jsx)("rect", {
          x: zU + 1,
          y: XU + 1,
          width: 1,
          height: 1,
          fill: "w" === UU[zU] ? "#8fd3ff" : cU.colour
        }, `${zU},${XU}`))
      })), (0, GQ.jsxs)("svg", {
        className: By()("Baf2RxFace", {
          Big: zU,
          Alarm: "alarm" === XU
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, GQ.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, GQ.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), yU]
      })
    }

    function DN(UU) {
      return NQ(UU, "+").replace("+", "")
    }

    function EN(UU) {
      let {
        kind: XU,
        dims: zU,
        cap: cU,
        disabled: yU,
        compact: QU,
        resize: AU
      } = UU;
      const {
        t: FU
      } = (0, Wy.I)(), {
        min: oU,
        max: DU
      } = Mz(XU), EU = Math.min(cU, DU), YU = [`${cN}rxWide`, `${cN}rxTall`, `${cN}rxDeep`], NU = {
        w: String(zU[0]),
        h: String(zU[1]),
        d: String(zU[2]),
        blocks: String(Ro(XU, zU))
      };
      return (0, GQ.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, GQ.jsx)("div", {
          className: "Baf2RxSteppers",
          children: zU.map(((UU, XU) => {
            const QU = cU => {
                const yU = [zU[0], zU[1], zU[2]];
                yU[XU] = UU + cU, AU(yU)
              },
              NU = UU >= EU;
            return (0, GQ.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, GQ.jsx)("button", {
                type: "button",
                "aria-label": FU(`${cN}rxSmaller`),
                disabled: yU || UU <= oU,
                onClick: () => {
                  QU(-1)
                },
                children: "\u2212"
              }), (0, GQ.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [UU, (0, GQ.jsx)("small", {
                  children: FU(YU[XU])
                })]
              }), (0, GQ.jsx)("button", {
                type: "button",
                "aria-label": FU(`${cN}rxBigger`),
                disabled: yU || NU,
                onClick: () => {
                  QU(1)
                },
                children: NU && cU < DU ? "\ud83d\udd12" : "+"
              })]
            }, YU[XU])
          }))
        }), !QU && (0, GQ.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === XU ? FU(`${cN}rxSizeLine`, {
            ...NU,
            water: String(Zo(zU))
          }) : FU(`${cN}batSizeLine`, NU)
        })]
      })
    }

    function YN(UU) {
      let {
        on: XU,
        label: zU,
        disabled: cU,
        locked: yU,
        pending: QU,
        toggle: AU
      } = UU;
      return (0, GQ.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": XU,
        disabled: cU,
        "aria-disabled": yU || void 0,
        className: By()("Baf2RxSwitch", {
          On: XU,
          Locked: yU,
          Pending: QU
        }),
        onClick: AU,
        children: [(0, GQ.jsx)("span", {
          className: "Baf2RxKnob"
        }), zU]
      })
    }
    const NN = "buildAFactory2Game:",
      IN = .95;

    function pN(UU, XU) {
      return 0 !== (UU.baf2RxFlags & XU)
    }

    function aN(UU) {
      return "cryo" === UU ? TU.m : TU.p
    }

    function tN(UU) {
      var XU, zU, cU, yU, QU, AU, FU, oU, DU;
      return UU.baf2RxCryo ? {
        BI: "cryo",
        usePerS: null !== (yU = UU.baf2RxCryoUse) && void 0 !== yU ? yU : 0,
        needPerS: null !== (QU = UU.baf2RxCryoNeed) && void 0 !== QU ? QU : 0,
        inPerS: null !== (AU = UU.baf2RxCryoIn) && void 0 !== AU ? AU : 0,
        stored: null !== (FU = UU.baf2RxCryoStored) && void 0 !== FU ? FU : 0,
        makersShort: null !== (oU = UU.baf2RxMixersShort) && void 0 !== oU ? oU : 0,
        waterBeside: null !== (DU = UU.baf2RxWaterUse) && void 0 !== DU ? DU : 0,
        pct: UU.baf2RxWater
      } : {
        BI: "water",
        usePerS: null !== (XU = UU.baf2RxWaterUse) && void 0 !== XU ? XU : 0,
        needPerS: null !== (zU = UU.baf2RxWaterNeed) && void 0 !== zU ? zU : 0,
        inPerS: UU.baf2RxWaterIn,
        stored: UU.baf2RxWaterStored,
        makersShort: null !== (cU = UU.baf2RxCondensersShort) && void 0 !== cU ? cU : 0,
        waterBeside: 0,
        pct: UU.baf2RxWater
      }
    }

    function gN(UU) {
      const XU = "running" === UU.baf2RxState || "idle" === UU.baf2RxState;
      return UU.baf2RxFormed && UU.baf2RxTarget !== UU.baf2RxThrottle && XU ? kN(UU, UU.baf2RxTarget) : null
    }

    function kN(UU, XU) {
      const [zU, cU, yU, , , , QU, , AU] = UU.baf2RxStats, FU = pN(UU, IX), oU = tN(UU), DU = oU.pct / 100, {
        gen: EU,
        out: YU,
        load: NU
      } = function(UU, XU, zU, cU) {
        const yU = zU ? vF : 1,
          QU = Math.min(UU.fuelHeat * yU * Math.max(0, Math.min(1, XU)), UU.size * yU);
        return {
          gen: QU,
          out: QU,
          load: Qo(QU, UU.cooling, cU)
        }
      }({
        fuelHeat: zU,
        cooling: cU,
        size: yU
      }, XU / 100, FU, DU), IU = Fo(QU || xF(...UU.baf2RxDims)), pU = UU.baf2RxHeat, aU = Math.abs(NU - pU), tU = function(UU, XU, zU, cU) {
        let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : TU.p;
        const QU = zU ? vF : 1,
          AU = Math.min(UU.fuelHeat * QU * XU / 100, UU.size * QU),
          FU = AU,
          oU = UU.fuelHeat * QU,
          DU = UU.cooling * yo(cU.pct / 100),
          EU = oU > 0 && DU < UU.size * QU ? Math.floor(100 * DU / oU) : 100,
          YU = AU * yU - cU.inPerS;
        return {
          out: FU,
          hotAbove: EU >= 100 ? null : Math.max(0, EU),
          waterSecs: cU.pct >= 100 && YU > 1e-6 ? Math.max(0, cU.stored) / YU : null
        }
      }({
        fuelHeat: zU,
        cooling: cU,
        size: yU
      }, XU, FU, {
        pct: oU.pct,
        inPerS: oU.inPerS,
        stored: oU.stored
      }, aN(oU.BI));
      return {
        pct: XU,
        out: YU,
        coolPerS: EU * aN(oU.BI),
        pelletsPerMin: AU > 0 ? YU / AU * 60 : 0,
        settle: NU,
        settleS: aU > 2 ? IU * Math.log(aU / 2) : 0,
        overheatS: NU > 100 && pU < 100 ? IU * Math.log((NU - pU) / (NU - 100)) : null,
        hotAbove: tU.hotAbove,
        coolantSecs: tU.waterSecs
      }
    }

    function GN(UU) {
      return UU.baf2RxThrottle <= 0 && "running" !== UU.baf2RxState ? 0 : kN(UU, UU.baf2RxTarget).pelletsPerMin / 60
    }

    function BN(UU, XU) {
      if (UU <= 0 || XU <= 0) return 0;
      const zU = UU / XU;
      return zU < .25 ? 1 : zU < .5 ? 2 : zU < .8 ? 3 : 4
    }

    function ZN(UU, XU) {
      const zU = {};
      for (const [cU, yU] of Object.entries(XU.params)) zU[cU] = "time" === cU ? aQ(UU, yU) : "amount" === cU ? Po(yU) : String(Math.round(yU));
      return UU(XU.key, zU)
    }

    function RN(UU, XU) {
      return {
        key: `${NN}${UU}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: XU
      }
    }

    function PN(UU) {
      var XU;
      const zU = pN(UU, IX),
        cU = "running" === UU.baf2RxState,
        yU = Yo(UU),
        QU = UU.baf2RxHeat;
      var AU;
      if (cU && QU > HF) return {
        key: null !== (AU = yU.fix) && void 0 !== AU ? AU : `${NN}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const FU = cU ? kN(UU, UU.baf2RxTarget).coolantSecs : null,
        oU = "cryo" === tN(UU).BI;
      if (null !== FU && FU >= 1 && FU <= 30) return RN(oU ? "rxWarnCryo" : "rxWarnWater", "bad");
      const DU = mF(xF(...UU.baf2RxDims)).waste,
        EU = cU ? go(UU, DU, GN(UU)).fullInS : null;
      if (null !== EU && EU <= 120 && UU.baf2RxWaste >= .5 * DU) return RN("rxWarnWaste", "warn");
      if (null !== FU && FU >= 1) return RN(oU ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: FU
      });
      const YU = "noWater" === UU.baf2RxState && QU > HF;
      if (UU.baf2RxDamage >= 1 && !YU) return RN("rxDamagedHeals", "warn", {
        pct: UU.baf2RxDamage
      });
      if (UU.baf2RxCryoCut) return RN("rxFix_cryoCut", "warn");
      const NU = tN(UU);
      if ("noWater" === UU.baf2RxState && "cryo" === NU.BI) return RN("noWater" === UU.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const IU = yU.fix === `${NN}rxFix_scramCool` || "idle" === UU.baf2RxState && UU.baf2RxTarget <= 0;
      if (IU && UU.baf2RxFuel <= 0) return RN("rxFix_noFuel", "warn");
      if (IU && UU.baf2RxWaterIn <= 0 && (null !== (XU = UU.baf2RxCryoIn) && void 0 !== XU ? XU : 0) <= 0) return RN("rxFix_noWater", "warn");
      const pU = yU.fix === `${NN}rxFix_scramCool` ? Io(UU) : null;
      if (null !== pU) return {
        key: pU.key,
        params: {
          amount: pU.amount
        },
        tone: "info"
      };
      if ("running" !== UU.baf2RxState && "idle" !== UU.baf2RxState && null !== yU.fix) return {
        key: yU.fix,
        params: {},
        tone: "scram" === UU.baf2RxState ? "info" : YU ? "bad" : "warn"
      };
      var aU;
      if ("idle" === UU.baf2RxState && UU.baf2RxTarget <= 0) return {
        key: null !== (aU = yU.fix) && void 0 !== aU ? aU : `${NN}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const tU = UU.baf2RxCryoStarved;
      if ("cryo" === NU.BI && tU && NU.needPerS > 0 && NU.usePerS < IN * NU.needPerS) return RN("noWater" === tU ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const gU = "cryo" === NU.BI,
        kU = NU.needPerS > 0 && NU.usePerS < IN * NU.needPerS;
      if (gU ? kU || NU.makersShort > 0 && NU.pct < 100 : NU.pct < 100) {
        const XU = gU && kU ? Math.floor(100 * NU.usePerS / NU.needPerS) : Math.min(100, NU.pct);
        if (NU.makersShort > 0) {
          return RN(`${gU?"rxCryoShortLine":"rxWaterShortLine"}${1===NU.makersShort?"One":""}${!gU&&UU.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: XU,
            count: NU.makersShort
          })
        }
        return RN(gU ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: XU
        })
      }
      const GU = function(UU) {
        const [XU, zU, cU] = UU.baf2RxStats, yU = tN(UU), QU = Ao({
          fuelHeat: XU,
          cooling: zU,
          size: cU
        }, "cryo" === yU.BI ? TU.d : 1, !0);
        return Math.max(0, QU * aN(yU.BI) - yU.inPerS)
      }(UU);
      if (zU && GU > 0) return RN("cryo" === NU.BI ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(GU)
      });
      if (QU >= zo) return RN("rxHotLine", "warn");
      const BU = kN(UU, UU.baf2RxTarget);
      var ZU;
      if (null !== BU.overheatS) return RN("rxWillOverheat", "bad", {
        pct: UU.baf2RxTarget,
        time: BU.overheatS,
        safe: null !== (ZU = BU.hotAbove) && void 0 !== ZU ? ZU : 100
      });
      if (Math.abs(BU.settle - QU) >= 3) return RN("rxSettling", "info", {
        pct: UU.baf2RxTarget,
        heat: Math.round(BU.settle),
        time: BU.settleS
      });
      const RU = Io(UU);
      if (null !== RU) return {
        key: RU.key,
        params: {
          amount: RU.amount
        },
        tone: "info"
      };
      const PU = function(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== XU && ("running" !== XU || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === UU.rods ? `${oo}rxLimitNoRods` : `${oo}rxLimit_${Xo(UU)}`
      }({
        rods: UU.baf2RxStats[3],
        ...No(UU)
      }, UU.baf2RxState, UU.baf2RxOut >= IN * UU.baf2RxMaxNow, !1);
      if (PU === `${NN}rxLimit_size`) {
        const [XU, , zU, cU] = UU.baf2RxStats, yU = cU > 0 && XU > 0 ? Math.ceil(zU / (XU / cU) - 1e-9) : cU, QU = UU.baf2RxDims.every((UU => UU >= Mz("reactor").max));
        if (yU < cU) return RN(QU ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: yU,
          have: cU
        });
        if (QU) return RN("rxLimit_sizeMax", "info")
      }
      return null !== PU ? {
        key: PU,
        params: {},
        tone: "info"
      } : RN("rxSteady", "ok", {
        pct: UU.baf2RxTarget
      })
    }

    function WN(UU) {
      var XU;
      if (UU.melted) return RN("rxMeltedBody", "bad");
      if (-1 === UU.bad) return RN("rxFix_noRoom", "warn");
      if (UU.bad > 0) return RN(1 === UU.bad ? "rxBadOne" : "rxBad", "warn", {
        count: UU.bad
      });
      if (UU.left > 0) {
        const XU = 1 === UU.left ? "One" : "";
        return RN(UU.canFill ? `rxPlanLeft${XU}` : `rxPlanLeftNoFill${XU}`, "info", {
          count: UU.left
        })
      }
      if (0 === UU.rods) return RN("rxLimitNoRods", "warn");
      const zU = null !== (XU = UU.idle) && void 0 !== XU ? XU : 0;
      return zU > 0 ? RN(1 === zU ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: zU
      }) : RN("rxPlanReady", "ok")
    }

    function dN(UU) {
      return Math.floor(Math.max(0, UU[1] - 1) / 2)
    }

    function LN(UU) {
      if (UU >= KF && UU < bF) {
        const XU = UU - KF;
        return {
          key: 0 === XU ? `${NN}rxWhy_rodAlone` : 1 === XU ? `${NN}rxWhy_rodOne` : `${NN}rxWhy_rod`,
          params: {
            count: String(XU),
            heat: String(wF * (1 + qF * XU))
          }
        }
      }
      return UU === bF ? {
        key: `${NN}rxWhy_channel`,
        params: {
          amount: String(SF)
        }
      } : UU === TF ? {
        key: `${NN}rxWhy_deadChannel`,
        params: {}
      } : UU === hF ? {
        key: `${NN}rxWhy_graphite`,
        params: {}
      } : {
        key: `${NN}rxWhy_core`,
        params: {}
      }
    }
    const eN = "buildAFactory2Game:";

    function CN(UU, XU) {
      return 0 !== (UU.baf2RxFlags & XU)
    }

    function wN(UU) {
      let {
        status: XU,
        pending: zU,
        store: cU,
        explain: yU
      } = UU;
      const {
        t: QU
      } = (0, Wy.I)(), AU = CN(XU, NX), FU = XU.baf2RxTarget, oU = XU.baf2RxThrottle, DU = function(UU) {
        return {
          press: () => {
            UU.throttlePress()
          },
          drag: XU => {
            UU.throttleDrag(XU)
          },
          release: () => {
            UU.throttleRelease()
          }
        }
      }(cU), EU = null === (YU = kN(XU, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, YU - 10),
        red: YU
      };
      var YU;
      return (0, GQ.jsxs)("div", {
        className: By()("Baf2RxThrottle", {
          Off: AU
        }),
        onClick: () => {
          AU && yU(`${eN}rxWhy_startFirst`)
        },
        children: [(0, GQ.jsx)("span", {
          className: "HideNarrow",
          children: QU(`${eN}rxThrottle`)
        }), (0, GQ.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, GQ.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: FU,
            disabled: AU,
            style: AU ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": QU(`${eN}rxThrottle`),
            onPointerDown: () => {
              DU.press();
              const UU = () => {
                window.removeEventListener("pointerup", UU), window.removeEventListener("pointercancel", UU), DU.release()
              };
              window.addEventListener("pointerup", UU), window.addEventListener("pointercancel", UU)
            },
            onKeyUp: DU.release,
            onChange: UU => {
              DU.drag(Number(UU.target.value))
            }
          }), (0, GQ.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${EU.amber}%, #ffb020 ${EU.amber}% ${EU.red}%, #ff3b30 ${EU.red}%)`
            },
            "aria-hidden": "true"
          }), (0, GQ.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${oU}% + ${8*(1-oU/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, GQ.jsxs)("b", {
          children: [`${FU}%`, (0, GQ.jsx)("i", {
            className: By()("Baf2RxPendingDot", {
              On: zU
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function qN(UU) {
      let {
        status: XU
      } = UU;
      const {
        t: zU
      } = (0, Wy.I)(), cU = kN(XU, XU.baf2RxTarget), yU = tN(XU).BI, QU = zU("cryo" === yU ? `${eN}rxRateCryo` : `${eN}rxRateWater`, {
        rate: DN(cU.coolPerS)
      }), AU = zU(`${eN}rxChain`, {
        pct: String(XU.baf2RxTarget),
        out: Po(cU.out),
        heat: String(Math.round(cU.settle)),
        coolant: QU
      }), FU = null !== cU.coolantSecs ? cU.coolantSecs >= 1 ? zU("cryo" === yU ? `${eN}rxThrottleCryoOut` : `${eN}rxThrottleWaterOut`, {
        time: aQ(zU, cU.coolantSecs)
      }) : zU("cryo" === yU ? `${eN}rxThrottleCryoDry` : `${eN}rxThrottleWaterDry`) : null;
      return (0, GQ.jsxs)("p", {
        className: "Baf2RxChain",
        children: [AU, null !== FU ? (0, GQ.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", FU]
        }) : (0, GQ.jsxs)("span", {
          children: [" \xb7 ", zU(`${eN}rxChainPellets`, {
            amount: Wo(cU.pelletsPerMin)
          })]
        })]
      })
    }

    function ON(UU) {
      let {
        view: XU,
        store: zU,
        explain: yU,
        explainOnce: QU
      } = UU;
      const {
        t: AU
      } = (0, Wy.I)(), {
        status: FU
      } = XU, [oU, DU] = (0, cU.useState)(!1), EU = CN(FU, NX), NU = CN(FU, IX), IU = !CN(FU, tX), pU = FU.baf2RxHeat > 100;
      return (0, GQ.jsxs)(GQ.Fragment, {
        children: [(0, GQ.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, GQ.jsx)(wN, {
            status: FU,
            pending: XU.throttlePending,
            store: zU,
            explain: yU
          }), (0, GQ.jsx)(YN, {
            on: NU,
            label: NU ? AU(`${eN}rxOdLeft`, {
              time: aQ(AU, FU.baf2RxOdLeft)
            }) : AU(`${eN}rxOverdrive`),
            locked: IU,
            pending: 0 !== (XU.pendingFlags & IX),
            toggle: () => {
              IU ? yU(`${eN}rxOverdriveTier`, {
                amount: String(YU(13))
              }) : NU ? zU.setFlag(IX, !1) : XU.odConfirmed ? zU.setFlag(IX, !0) : DU(!0)
            }
          }), EU || XU.startGuard ? (0, GQ.jsx)(tA.n, {
            disabled: XU.busy.has("start") || XU.startGuard,
            onClick: () => {
              zU.tap("start", (() => {
                zU.setFlag(NX, !1)
              }))
            },
            children: AU(XU.startGuard ? `${eN}rxStarting` : `${eN}rxStart`)
          }) : (0, GQ.jsx)("span", {
            className: By()("Baf2RxScram", {
              Pulse: pU
            }),
            children: (0, GQ.jsx)(tA.G, {
              onClick: () => {
                zU.shutDown()
              },
              children: AU(`${eN}rxScram`)
            })
          })]
        }), (0, GQ.jsx)(qN, {
          status: FU
        }), oU && (0, GQ.jsx)(QN, {
          id: "baf2RxOdTitle",
          title: `${eN}rxOdConfirmTitle`,
          body: `${eN}rxOdConfirmBody`,
          yes: `${eN}rxOdConfirm`,
          cancel: () => {
            DU(!1)
          },
          confirm: () => {
            DU(!1), zU.tap("odConfirm", (() => {
              zU.confirmOverdrive(), zU.setFlag(IX, !0)
            })), QU(`${eN}rxWhy_overdrive`)
          }
        })]
      })
    }

    function SN(UU) {
      let {
        view: XU,
        store: zU,
        keepSize: cU
      } = UU;
      const {
        t: yU
      } = (0, Wy.I)(), {
        status: QU
      } = XU;
      return (0, GQ.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, GQ.jsx)(EN, {
          kind: "reactor",
          dims: XU.dims,
          cap: QU.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: UU => {
            zU.resize(UU)
          }
        }), cU ? (0, GQ.jsx)(tA.j, {
          onClick: cU,
          children: yU(`${eN}rxKeepSize`)
        }) : (0, GQ.jsxs)(GQ.Fragment, {
          children: [(0, GQ.jsx)(YN, {
            on: XU.guide,
            label: yU(`${eN}rxGuide`),
            toggle: () => {
              zU.toggleGuide()
            }
          }), CN(QU, kX) && (0, GQ.jsx)(YN, {
            on: XU.starter,
            label: yU(`${eN}rxStarter`),
            toggle: () => {
              zU.toggleStarter()
            }
          }), (0, GQ.jsx)(XN, {
            status: QU,
            store: zU,
            busy: XU.busy.has("fill")
          })]
        })]
      })
    }

    function rN(UU) {
      let {
        need: XU,
        kind: zU = "reactor",
        explain: cU
      } = UU;
      const {
        t: yU
      } = (0, Wy.I)(), QU = XU.length <= 3, AU = XU.reduce(((UU, XU) => {
        let [, zU] = XU;
        return UU + zU
      }), 0);
      return (0, GQ.jsxs)("div", {
        className: By()("Baf2RxParts", {
          Compact: !QU
        }),
        onClick: () => {
          cU("battery" === zU ? `${eN}batWhy_store` : `${eN}rxShellHint`)
        },
        children: [AU > 0 && (0, GQ.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === AU ? yU(`${eN}rxBlocksOne`) : yU(`${eN}rxBlocks`, {
            blocks: String(AU)
          })
        }), 0 === XU.length ? (0, GQ.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: yU("battery" === zU ? `${eN}batPartsDone` : `${eN}rxShellDone`)
        }) : ao(XU).map((UU => {
          let [XU, zU, cU] = UU;
          const AU = function(UU) {
            const XU = Bo[UU];
            if (void 0 === XU) return null;
            const [zU, cU, yU] = ko[XU].colour.map((UU => Math.round(255 * UU)));
            return `rgb(${zU}, ${cU}, ${yU})`
          }(XU);
          return (0, GQ.jsxs)("span", {
            className: "Baf2RxChip",
            title: (0, Ty.h)(yU, XU),
            children: [(0, GQ.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === AU ? {
                visibility: "hidden"
              } : {
                background: AU
              },
              title: yU(`${eN}rxShopGhost`)
            }), (0, GQ.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, GQ.jsx)(Ly.c, {
                itemName: XU,
                amount: 0
              })
            }), (0, GQ.jsx)("span", {
              className: "Baf2RxChipName",
              children: QU ? `${zU} ${FU=(0,Ty.h)(yU,XU),FU.replace(/^(Reactor|Battery) (?=\S)/,"")}` : zU
            }), cU >= zU ? (0, GQ.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, GQ.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: QU ? yU(`${eN}rxShopShort`, {
                count: String(zU - cU)
              }) : "\u2212" + (zU - cU)
            })]
          }, XU);
          var FU
        }))]
      })
    }
    const uN = "buildAFactory2Game:";

    function fN(UU) {
      var XU, zU, yU, QU, AU, FU, oU;
      let {
        store: DU,
        close: EU
      } = UU;
      const {
        t: YU
      } = (0, Wy.I)(), NU = uA(), IU = AN(DU), {
        explained: pU,
        explain: aU
      } = jY("baf2RxExplained"), tU = (0, cU.useCallback)(((UU, XU) => {
        aU(YU(UU, XU))
      }), [aU, YU]), gU = null === IU || void 0 === IU ? void 0 : IU.status, kU = !0 === (null === gU || void 0 === gU ? void 0 : gU.baf2BatReadOnly), GU = UU => {
        gU && NU.send(YX(gU.baf2BatAt, UU))
      }, [BU, ZU, RU] = null !== (XU = null === IU || void 0 === IU ? void 0 : IU.dims) && void 0 !== XU ? XU : [0, 0, 0], PU = Po(null !== (zU = null === IU || void 0 === IU ? void 0 : IU.xY) && void 0 !== zU ? zU : 0), WU = !0 === (null === gU || void 0 === gU ? void 0 : gU.baf2BatFormed), dU = null !== (yU = null === gU || void 0 === gU ? void 0 : gU.baf2BatStored) && void 0 !== yU ? yU : 0, LU = Math.max(1, null !== (QU = null === gU || void 0 === gU ? void 0 : gU.baf2BatIslandCap) && void 0 !== QU ? QU : 1), eU = Math.min(100, 100 * dU / LU), CU = null === gU || void 0 === gU ? void 0 : gU.baf2BatNetPerS, wU = function(UU, XU, zU) {
        return zU > 0 && XU >= zU ? "full" : void 0 !== UU && UU >= .05 ? "charging" : void 0 !== UU && UU <= -.05 && XU > 0 ? "draining" : "steady"
      }(CU, dU, null !== (AU = null === gU || void 0 === gU ? void 0 : gU.baf2BatIslandCap) && void 0 !== AU ? AU : 0), qU = null !== (FU = null === gU || void 0 === gU ? void 0 : gU.baf2BatMadePerS) && void 0 !== FU ? FU : 0, OU = null !== (oU = null === gU || void 0 === gU ? void 0 : gU.baf2BatUsedPerS) && void 0 !== oU ? oU : 0;
      let SU, rU = {},
        uU = "info";
      if (gU)
        if (WU) "charging" === wU ? (SU = `${uN}batLine_charging`, rU = {
          time: aQ(YU, (LU - dU) / Math.max(.05, null !== CU && void 0 !== CU ? CU : 0))
        }, uU = "ok") : "draining" === wU ? (SU = `${uN}batLine_draining`, rU = {
          time: aQ(YU, dU / Math.max(.05, -(null !== CU && void 0 !== CU ? CU : 0)))
        }, uU = "warn") : SU = "full" === wU ? `${uN}batLine_full` : dU <= 0 && OU > 0 ? `${uN}batLine_empty` : `${uN}batLine_steady`;
        else {
          var fU;
          const UU = WN({
            left: gU.baf2BatNeed.reduce(((UU, XU) => {
              let [, zU] = XU;
              return UU + zU
            }), 0),
            bad: gU.baf2BatBad,
            rods: 1,
            canFill: !0 === gU.baf2BatCanFill,
            melted: !1
          });
          SU = UU.key, rU = {
            count: String(null !== (fU = UU.params.count) && void 0 !== fU ? fU : 0)
          }, uU = UU.tone
        }
      else SU = `${uN}batLine_steady`;
      const iU = Math.max(qU, OU, 1);
      return (0, GQ.jsx)(aA.c, {
        close: EU,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, GQ.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, GQ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, GQ.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, GQ.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, GQ.jsx)(Ly.c, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, GQ.jsxs)("div", {
                children: [(0, GQ.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: YU(`${uN}batTitle`)
                }), gU && (0, GQ.jsxs)("p", {
                  className: By()("Baf2RxSubtitle", {
                    good: WU && "charging" === wU,
                    warn: WU && "draining" === wU
                  }),
                  children: [BU, "\xd7", ZU, "\xd7", RU, " \xb7 ", YU(WU ? `${uN}batState_${wU}` : `${uN}rxSubPlanShort`)]
                })]
              })]
            }), (0, GQ.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [gU && !kU && (0, GQ.jsx)(FN, {
                kind: "battery",
                cap: WU ? PU : void 0,
                busy: null === IU || void 0 === IU ? void 0 : IU.busy.has("apart"),
                apart: () => {
                  DU.tap("apart", (() => {
                    GU("apart")
                  }))
                }
              }), (0, GQ.jsx)(tA.k, {
                onClick: EU
              })]
            })]
          }), IU && gU && (0, GQ.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, GQ.jsxs)("div", {
              className: By()("Baf2RxFlow Baf2BatFlow", {
                Plan: !WU
              }),
              children: [(0, GQ.jsx)(lY, {
                kind: "Power",
                label: YU(`${uN}batMade`),
                number: WU ? `\u26a1 ${Po(qU)}/s` : "\u2014",
                note: YU(`${uN}batMadeNote`),
                share: WU ? qU / iU : void 0,
                onExplain: () => {
                  tU(`${uN}batWhy_made`)
                }
              }), (0, GQ.jsx)(xY, {
                kind: "Power",
                step: WU ? BN(qU, iU) : 0,
                planned: !WU
              }), (0, GQ.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  tU(`${uN}batWhy_store`)
                },
                children: [(0, GQ.jsx)(JY, {
                  max: 100,
                  bands: [{
                    upTo: WU ? eU : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, GQ.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, GQ.jsx)("b", {
                    className: "Baf2BatStored",
                    children: WU ? YU(`${uN}batStoredOf`, {
                      amount: Po(dU),
                      cap: Po(gU.baf2BatIslandCap)
                    }) : YU(`${uN}batWillHold`, {
                      cap: PU
                    })
                  }), (0, GQ.jsx)("span", {
                    children: YU(`${uN}batAdds`, {
                      cap: PU
                    })
                  }), WU && (0, GQ.jsx)("small", {
                    children: YU(`${uN}batBreakNote`, {
                      cap: PU
                    })
                  })]
                })]
              }), (0, GQ.jsx)(xY, {
                kind: "Power",
                step: WU ? BN(OU, iU) : 0,
                planned: !WU
              }), (0, GQ.jsx)(lY, {
                kind: "Power",
                label: YU(`${uN}batUsed`),
                number: WU ? `\u26a1 ${Po(OU)}/s` : "\u2014",
                note: YU(`${uN}batUsedNote`),
                share: WU ? OU / iU : void 0,
                onExplain: () => {
                  tU(`${uN}batWhy_used`)
                }
              })]
            }), (0, GQ.jsx)(KY, {
              text: YU(SU, rU),
              tone: uU,
              explained: pU
            }), kU ? (0, GQ.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: YU(`${uN}rxNotYours`)
            }) : !WU && (0, GQ.jsxs)(GQ.Fragment, {
              children: [(0, GQ.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, GQ.jsx)(EN, {
                  kind: "battery",
                  dims: IU.dims,
                  cap: gU.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: UU => {
                    DU.resize(UU)
                  }
                }), (0, GQ.jsx)(YN, {
                  on: IU.guide,
                  label: YU(`${uN}rxGuide`),
                  toggle: () => {
                    DU.toggleGuide()
                  }
                }), gU.baf2BatCanFill && (0, GQ.jsx)(tA.l, {
                  disabled: !to("battery", gU.baf2BatNeed) || IU.busy.has("fill"),
                  onClick: () => {
                    DU.tap("fill", (() => {
                      GU("fill")
                    }))
                  },
                  children: YU(`${uN}rxFill`)
                })]
              }), (0, GQ.jsx)(rN, {
                need: gU.baf2BatNeed,
                kind: "battery",
                explain: tU
              })]
            })]
          })]
        })
      })
    }
    const iN = "buildAFactory2Game:",
      HN = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function MN(UU, XU) {
      return UU === jF ? null : XU ? "#4a4440" : UU < bF ? HN[UU - KF] : UU === bF ? "#3fd0f0" : UU === TF ? "#2c3e4c" : "#55585e"
    }

    function vN(UU) {
      let {
        inner: XU,
        looks: zU,
        layer: cU,
        setLayer: yU,
        glow: QU,
        melted: AU,
        explain: FU
      } = UU;
      const {
        t: oU
      } = (0, Wy.I)(), [DU, EU, YU] = XU, NU = Math.max(0, Math.min(EU - 1, cU)), IU = [];
      for (let aU = 0; aU < YU; aU++)
        for (let UU = 0; UU < DU; UU++) {
          var pU;
          const XU = null !== (pU = zU[(NU * YU + aU) * DU + UU]) && void 0 !== pU ? pU : jF,
            cU = MN(XU, AU),
            yU = XU >= KF && XU < bF;
          IU.push(null === cU ? (0, GQ.jsx)("circle", {
            cx: UU + .5,
            cy: aU + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${UU},${aU}`) : (0, GQ.jsx)("rect", {
            x: UU + .06,
            y: aU + .06,
            width: .88,
            height: .88,
            fill: cU,
            opacity: yU && !AU ? .5 + .5 * QU : 1,
            onClick: UU => {
              UU.stopPropagation();
              const zU = LN(XU);
              FU(zU.key, zU.params)
            }
          }, `${UU},${aU}`))
        }
      return (0, GQ.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, GQ.jsx)("svg", {
          className: By()("Baf2RxMapGrid", {
            Melted: AU
          }),
          viewBox: `0 0 ${Math.max(1,DU)} ${Math.max(1,YU)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": oU(`${iN}rxWhy_core`),
          onClick: () => {
            FU(`${iN}rxWhy_core`, {})
          },
          children: IU
        }), EU > 1 && (0, GQ.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, GQ.jsx)("button", {
            type: "button",
            "aria-label": oU(`${iN}rxLayerDown`),
            disabled: NU <= 0,
            onClick: () => {
              yU(NU - 1)
            },
            children: "\u25bc"
          }), (0, GQ.jsxs)("span", {
            children: [(0, GQ.jsx)("span", {
              className: "HideNarrow",
              children: oU(`${iN}rxLayer`, {
                n: String(NU + 1),
                of: String(EU)
              })
            }), (0, GQ.jsx)("span", {
              className: "ShowNarrow",
              children: oU(`${iN}rxLayerShort`, {
                n: String(NU + 1),
                of: String(EU)
              })
            })]
          }), (0, GQ.jsx)("button", {
            type: "button",
            "aria-label": oU(`${iN}rxLayerUp`),
            disabled: NU >= EU - 1,
            onClick: () => {
              yU(NU + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const VN = "buildAFactory2Game:",
      sN = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: MF,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: Eo,
        kind: "red"
      }],
      nN = [50, MF, 100];

    function mN(UU) {
      let {
        stats: XU,
        t: zU,
        explain: cU
      } = UU;
      const yU = Xo(XU),
        QU = Math.max(1, XU.fuelHeat, XU.cooling, XU.size),
        AU = [
          ["fuel", `${VN}rxBarRods`, XU.fuelHeat],
          ["cooling", `${VN}rxBarCooling`, XU.cooling],
          ["size", `${VN}rxBarSize`, XU.size]
        ];
      return (0, GQ.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          cU(`${VN}rxWhy_bars`)
        },
        children: [(0, GQ.jsx)("span", {
          className: "Baf2RxMostLine",
          children: zU(`${VN}rxMost`, {
            amount: Po(Math.min(XU.fuelHeat, XU.cooling, XU.size))
          })
        }), (0, GQ.jsx)("span", {
          className: "Baf2RxMostBars",
          children: AU.map((UU => {
            let [XU, cU, AU] = UU;
            return (0, GQ.jsxs)("span", {
              className: By()("Baf2RxMostBar", XU, {
                Low: XU === yU
              }),
              children: [(0, GQ.jsx)("small", {
                children: zU(cU)
              }), (0, GQ.jsx)("i", {
                children: (0, GQ.jsx)("b", {
                  style: {
                    width: 100 * AU / QU + "%"
                  }
                })
              })]
            }, XU)
          }))
        })]
      })
    }

    function lN(UU) {
      var XU;
      let {
        view: zU,
        heat: yU,
        settle: QU,
        settleLine: AU,
        settleBad: FU,
        explain: oU
      } = UU;
      const {
        t: DU
      } = (0, Wy.I)(), {
        status: EU
      } = zU, YU = EU.baf2RxAt.join(","), [NU, IU] = (0, cU.useState)((() => dN(zU.inner)));
      (0, cU.useEffect)((() => {
        IU(dN(zU.inner))
      }), [YU, zU.inner[1]]);
      const pU = null !== (XU = zU.plan) && void 0 !== XU ? XU : No(EU),
        aU = zU.plan ? zU.plan.powerPerUnit : EU.baf2RxStats[8],
        tU = null === yU ? null : "alarm" === (gU = Do(EU)) ? "red" : "hot" === gU ? "hot" : "warm" === gU ? "warm" : "cold";
      var gU;
      const kU = !EU.baf2RxFormed && function(UU, XU) {
          return 0 !== (UU.baf2RxFlags & XU)
        }(EU, pX),
        GU = EU.baf2RxDamage,
        BU = EU.baf2RxDamageTrend;
      return (0, GQ.jsxs)("div", {
        className: By()("Baf2RxCore", null !== tU && void 0 !== tU ? tU : "plan"),
        children: [(0, GQ.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, GQ.jsx)(vN, {
            inner: zU.inner,
            looks: zU.looks,
            layer: NU,
            setLayer: IU,
            glow: EU.baf2RxFormed ? EU.baf2RxThrottle / 100 : 1,
            melted: kU,
            explain: oU
          }), (0, GQ.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              oU(`${VN}rxWhy_heat`)
            },
            children: [null !== yU ? (0, GQ.jsxs)(GQ.Fragment, {
              children: [(0, GQ.jsx)("b", {
                children: DU(`${VN}rxHeatPct`, {
                  pct: String(yU)
                })
              }), (0, GQ.jsx)("span", {
                className: By()("Baf2RxBand", tU),
                children: DU(`${VN}rxBand_${tU}`)
              })]
            }) : (0, GQ.jsx)("b", {
              children: DU(`${VN}rxHeat`)
            }), null !== AU && (0, GQ.jsx)("span", {
              className: By()("Baf2RxSettle", {
                Bad: FU
              }),
              children: AU
            }), GU >= 1 && (0, GQ.jsxs)("span", {
              className: By()("Baf2RxDamage", BU),
              children: [DU(`${VN}rxDamageLine`, {
                pct: String(GU)
              }), " \xb7 ", DU(`${VN}rxDamage_${BU}`), (0, GQ.jsx)("i", {
                children: (0, GQ.jsx)("b", {
                  style: {
                    width: `${Math.min(100,GU)}%`
                  }
                })
              })]
            })]
          }), (0, GQ.jsx)(JY, {
            max: Eo,
            bands: sN,
            ticks: nN,
            now: yU,
            settle: QU,
            settleTone: FU ? "bad" : null,
            onExplain: () => {
              oU(`${VN}rxWhy_heat`)
            }
          })]
        }), (0, GQ.jsx)(mN, {
          stats: pU,
          t: DU,
          explain: oU
        }), aU > 0 && (0, GQ.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            oU(`${VN}rxWhy_perPellet`)
          },
          children: DU(`${VN}rxPerPellet`, {
            amount: Po(aU)
          })
        })]
      })
    }

    function xN(UU, XU) {
      var zU;
      if (!UU.baf2RxStore) return {
        note: XU(`${VN}rxUpTo`, {
          amount: Po(UU.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [cU, yU] = UU.baf2RxStore, QU = yU > 0 ? cU / yU : 0, AU = String(Math.floor(100 * QU)), FU = null !== (zU = UU.baf2RxStoreNetPerS) && void 0 !== zU ? zU : 0, oU = function(UU) {
        var XU, zU;
        const [cU, yU] = null !== (XU = UU.baf2RxStore) && void 0 !== XU ? XU : [0, 0], QU = null !== (zU = UU.baf2RxStoreNetPerS) && void 0 !== zU ? zU : 0;
        return yU > 0 && cU >= yU - 1 ? "running" === UU.baf2RxState ? `${NN}rxStoreFull` : `${NN}rxStoreFullOnly` : QU > .05 ? `${NN}rxStoreLine` : QU < -.05 ? "running" === UU.baf2RxState ? `${NN}rxStoreUsesMore` : `${NN}rxStoreDraining` : `${NN}rxStorePct`
      }(UU);
      return {
        note: XU(oU, oU === `${VN}rxStoreLine` ? {
          pct: AU,
          time: aQ(XU, (yU - cU) / FU)
        } : {
          pct: AU
        }),
        share: QU
      }
    }

    function JN(UU) {
      let {
        view: XU,
        explain: zU,
        preview: cU
      } = UU;
      const {
        t: yU
      } = (0, Wy.I)(), {
        status: QU
      } = XU, AU = mF(xF(...XU.dims)), FU = GN(QU), oU = Math.min(Math.round(QU.baf2RxFuel), AU.fuel), DU = "running" === QU.baf2RxState, EU = DU ? BN(QU.baf2RxOut, QU.baf2RxMaxNow) : 0, YU = function(UU, XU, zU) {
        const cU = tN(UU),
          yU = "cryo" === cU.BI,
          QU = zU ? zU.coolantSecs : cU.pct >= 100 && UU.baf2RxOut >= 1 ? kN(UU, UU.baf2RxThrottle).coolantSecs : null;
        let AU, FU = !1;
        if (cU.pct < 100) {
          const zU = 1 === cU.makersShort,
            QU = !yU && UU.baf2RxCryoOpen ? "OrCryo" : "";
          AU = cU.makersShort > 0 ? XU(yU ? `${VN}rxCryoAddMixer${zU?"":"s"}` : `${VN}rxWaterAddCondenser${zU?"":"s"}${QU}`, {
            count: String(cU.makersShort)
          }) : XU(`${VN}rxWaterNeeds`, {
            rate: DN(cU.needPerS)
          })
        } else if (null !== QU) AU = XU(`${VN}rxWaterRunsOut`, {
          time: aQ(XU, QU)
        });
        else if (cU.waterBeside > 0) AU = XU(`${VN}rxCryoPlusWater`, {
          rate: DN(cU.waterBeside)
        });
        else {
          const UU = function(UU) {
            return UU.inPerS <= 0 ? "rxWaterNoSupply" : UU.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(cU);
          FU = "rxWaterNoSupply" === UU, AU = XU(`${VN}${UU}`, {
            amount: Po(cU.stored)
          })
        }
        return {
          kind: yU ? "Cryo" : "Water",
          label: XU(yU ? `${VN}rxCryo` : `${VN}rxWater`),
          number: `${DN(cU.usePerS)}/s`,
          preview: zU ? `${DN(zU.coolPerS)}/s` : null,
          note: AU,
          tone: "noWater" === UU.baf2RxState ? "danger" : FU ? "warn" : (oU = cU.pct, DU = QU, oU < 100 ? "danger" : null === DU ? null : DU < 300 ? "danger" : "warn"),
          share: cU.pct / 100,
          why: yU ? `${VN}rxWhy_cryo` : `${VN}rxWhy_water`,
          short: cU.pct < 100
        };
        var oU, DU
      }(QU, yU, cU), NU = go(QU, AU.waste, FU), IU = xN(QU, yU), pU = kN(QU, QU.baf2RxTarget), aU = DU && Math.abs(pU.settle - QU.baf2RxHeat) >= 3, tU = cU ? cU.pelletsPerMin / 60 : null;
      return (0, GQ.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, GQ.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, GQ.jsx)(lY, {
            kind: "Fuel",
            label: yU(`${VN}rxFuel`),
            number: String(oU),
            preview: null !== tU && tU > 0 && QU.baf2RxFuel > 0 ? aQ(yU, QU.baf2RxFuel / tU) : null,
            note: QU.baf2RxFuel <= 0 ? yU(`${VN}rxFuelEmpty`) : FU > 0 ? yU(`${VN}rxFuelLeft`, {
              time: aQ(yU, QU.baf2RxFuel / FU)
            }) : yU(1 === oU ? `${VN}rxFuelPellet` : `${VN}rxFuelPellets`),
            tone: "noFuel" === QU.baf2RxState ? "danger" : QU.baf2RxFuel < 2 ? "warn" : null,
            share: QU.baf2RxFuel / AU.fuel,
            onExplain: () => {
              zU(`${VN}rxWhy_fuel`)
            }
          }), (0, GQ.jsx)(lY, {
            kind: YU.kind,
            label: YU.label,
            number: YU.number,
            preview: YU.preview,
            note: YU.note,
            tone: YU.tone,
            share: YU.share,
            onExplain: () => {
              zU(YU.why)
            }
          })]
        }), (0, GQ.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, GQ.jsx)(xY, {
            kind: "Fuel",
            step: EU,
            short: "noFuel" === QU.baf2RxState
          }), (0, GQ.jsx)(xY, {
            kind: YU.kind,
            step: EU,
            short: YU.short || "noWater" === QU.baf2RxState
          })]
        }), (0, GQ.jsx)(lN, {
          view: XU,
          heat: QU.baf2RxHeat,
          settle: Math.min(Eo, pU.settle),
          settleLine: aU ? yU(`${VN}rxHeatSettles`, {
            pct: String(Math.round(pU.settle)),
            time: aQ(yU, pU.settleS)
          }) : null,
          settleBad: pU.settle > 100,
          explain: zU
        }), (0, GQ.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, GQ.jsx)(xY, {
            kind: "Power",
            step: EU
          }), (0, GQ.jsx)(xY, {
            kind: "Waste",
            step: DU && QU.baf2RxFuel - QU.baf2RxPu > 0 ? EU : 0,
            short: NU.full
          })]
        }), (0, GQ.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, GQ.jsx)(lY, {
            kind: "Power",
            label: yU(`${VN}rxPowerOut`),
            number: `\u26a1 ${Po(QU.baf2RxOut)}/s`,
            preview: cU ? Po(cU.out) : null,
            note: IU.note,
            share: IU.share,
            onExplain: () => {
              zU(`${VN}rxWhy_power`)
            }
          }), (0, GQ.jsx)(lY, {
            kind: "Waste",
            label: yU(`${VN}rxWaste`),
            number: `${Math.floor(QU.baf2RxWaste)}/${AU.waste}`,
            note: NU.full ? yU(`${VN}rxWasteFull`) : null !== NU.fullInS ? yU(`${VN}rxWasteFullIn`, {
              time: aQ(yU, NU.fullInS)
            }) : yU(`${VN}rxWasteSpent`),
            tone: "wasteFull" === QU.baf2RxState ? "danger" : NU.full ? "warn" : null,
            share: QU.baf2RxWaste / AU.waste,
            onExplain: () => {
              zU(`${VN}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function jN(UU) {
      let {
        view: XU,
        explain: zU
      } = UU;
      const {
        t: cU
      } = (0, Wy.I)(), yU = XU.plan;
      if (!yU) return null;
      const QU = yU.fuelHeat <= 0 ? null : yU.cooling > 0 ? Math.min(Eo, 100 * yU.fuelHeat / yU.cooling) : Eo,
        AU = cU(`${VN}rxPlanAtFull`);
      return (0, GQ.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, GQ.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, GQ.jsx)(lY, {
            kind: "Fuel",
            label: cU(`${VN}rxFuel`),
            number: cU(`${VN}rxPlanPerMin`, {
              amount: Wo(yU.pelletsPerMin)
            }),
            note: cU(`${VN}rxPlanPellets`),
            onExplain: () => {
              zU(`${VN}rxWhy_fuel`)
            }
          }), (0, GQ.jsx)(lY, {
            kind: "Water",
            label: cU(`${VN}rxWater`),
            number: `${DN(yU.waterPerS)}/s`,
            note: XU.status.baf2RxCryoOpen && yU.waterPerS > 0 ? cU(`${VN}rxPlanOrCryo`, {
              rate: DN(Ao(yU, TU.d) * TU.m)
            }) : AU,
            onExplain: () => {
              zU(`${VN}rxWhy_water`)
            }
          })]
        }), (0, GQ.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, GQ.jsx)(xY, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, GQ.jsx)(xY, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, GQ.jsx)(lN, {
          view: XU,
          heat: null,
          settle: QU,
          settleLine: null === QU ? null : cU(`${VN}rxPlanHeat`, {
            pct: String(Math.round(QU))
          }),
          settleBad: null !== QU && QU > 100,
          explain: zU
        }), (0, GQ.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, GQ.jsx)(xY, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, GQ.jsx)(xY, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, GQ.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, GQ.jsx)(lY, {
            kind: "Power",
            label: cU(`${VN}rxPowerOut`),
            number: `\u26a1 ${Po(yU.max)}/s`,
            note: AU,
            onExplain: () => {
              zU(`${VN}rxWhy_power`)
            }
          }), (0, GQ.jsx)(lY, {
            kind: "Waste",
            label: cU(`${VN}rxWaste`),
            number: cU(`${VN}rxPlanPerMin`, {
              amount: Wo(yU.pelletsPerMin)
            }),
            note: cU(`${VN}rxWasteSpent`),
            onExplain: () => {
              zU(`${VN}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const KN = "buildAFactory2Game:",
      bN = {
        key: `${KN}rxWaiting`,
        params: {},
        tone: "info"
      };

    function TN(UU, XU) {
      return 0 !== (UU.baf2RxFlags & XU)
    }

    function hN(UU) {
      var XU, zU;
      let {
        store: yU,
        close: QU
      } = UU;
      const {
        t: AU
      } = (0, Wy.I)(), FU = AN(yU), {
        explained: oU,
        hinting: DU,
        explain: EU,
        explainOnce: YU
      } = jY("baf2RxExplained"), NU = (0, cU.useCallback)(((UU, XU) => {
        EU(AU(UU, XU))
      }), [EU, AU]), IU = (0, cU.useCallback)(((UU, XU) => {
        YU(UU, AU(UU, XU))
      }), [YU, AU]), [pU, aU] = (0, cU.useState)(!1), [tU, gU] = (0, cU.useState)(!1), kU = null === FU || void 0 === FU ? void 0 : FU.status, GU = null === kU || void 0 === kU ? void 0 : kU.baf2RxAt.join(","), BU = !0 === (null === kU || void 0 === kU ? void 0 : kU.baf2RxFormed);
      (0, cU.useEffect)((() => {
        gU(!1), aU(!1)
      }), [GU, BU]), (0, cU.useEffect)((() => (yU.opened(), () => {
        yU.closed()
      })), [yU]);
      const ZU = void 0 !== kU && TN(kU, gX),
        RU = kU ? BU ? Do(kU) : null !== FU && void 0 !== FU && FU.plan ? function(UU, XU) {
          if (UU <= 0) return "off";
          if (XU <= 0) return "alarm";
          const zU = 100 * UU / XU;
          return zU < 50 ? "calm" : zU < zo ? "warm" : zU <= 100 ? "hot" : "alarm"
        }(FU.plan.fuelHeat, FU.plan.cooling) : "off" : "off",
        PU = kU ? Yo(kU) : null,
        WU = FU ? FU.waiting ? bN : BU ? PN(FU.status) : function(UU) {
          var XU, zU;
          const {
            status: cU
          } = UU;
          return WN({
            left: cU.baf2RxNeed.reduce(((UU, XU) => {
              let [, zU] = XU;
              return UU + zU
            }), 0),
            bad: cU.baf2RxBad,
            rods: null !== (XU = null === (zU = UU.plan) || void 0 === zU ? void 0 : zU.rods) && void 0 !== XU ? XU : 0,
            canFill: TN(cU, aX),
            melted: TN(cU, pX),
            idle: UU.looks.reduce(((UU, XU) => UU + (XU === TF ? 1 : 0)), 0)
          })
        }(FU) : null,
        dU = DU && null !== WU && ("ok" === WU.tone || "info" === WU.tone),
        LU = kU ? function(UU) {
          const XU = 0 !== (UU.baf2RxFlags & NX),
            zU = UU.baf2RxHeat < VF;
          return 0 !== (UU.baf2RxFlags & pX) || zU && (XU || !UU.baf2RxFormed) ? null : UU.baf2RxFormed && !XU ? {
            key: `${oo}rxApartScram`,
            params: {}
          } : {
            key: `${oo}rxApartCooling`,
            params: {
              pct: String(VF)
            }
          }
        }(kU) : null,
        [eU, CU, wU] = null !== (XU = null === FU || void 0 === FU ? void 0 : FU.dims) && void 0 !== XU ? XU : [0, 0, 0],
        qU = `${eU}\xd7${CU}\xd7${wU}`;
      return (0, GQ.jsx)(aA.c, {
        close: QU,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, GQ.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, GQ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, GQ.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, GQ.jsx)(oN, {
                mood: RU
              }), (0, GQ.jsxs)("div", {
                children: [(0, GQ.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: AU(`${KN}rxTitle`)
                }), FU && (0, GQ.jsxs)("p", {
                  className: By()("Baf2RxSubtitle", BU && (null === PU || void 0 === PU ? void 0 : PU.tone)),
                  children: [BU && !ZU ? (0, GQ.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": AU(`${KN}rxChangeSize`),
                    onClick: () => {
                      if (!kU) return;
                      const UU = TN(kU, NX);
                      var XU;
                      (XU = {
                        scram: UU,
                        heat: kU.baf2RxHeat
                      }).scram && XU.heat < VF ? aU(!0) : NU(UU ? `${KN}rxResizeCooling` : `${KN}rxResizeHot`, {
                        pct: String(VF)
                      })
                    },
                    children: [qU, " \u270e"]
                  }) : qU, " \xb7 ", AU(BU ? null !== (zU = null === PU || void 0 === PU ? void 0 : PU.label) && void 0 !== zU ? zU : `${KN}rxState_running` : `${KN}rxSubPlanShort`)]
                })]
              })]
            }), (0, GQ.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [FU && !ZU && (0, GQ.jsx)(FN, {
                kind: "reactor",
                busy: FU.busy.has("apart"),
                whyNot: LU ? () => {
                  NU(LU.key, LU.params)
                } : null,
                apart: () => {
                  yU.tap("apart", (() => {
                    yU.send("apart")
                  }))
                }
              }), (0, GQ.jsx)(tA.k, {
                onClick: QU
              })]
            })]
          }), FU && WU && (0, GQ.jsxs)("div", {
            className: "Baf2RxBody",
            children: [BU ? (0, GQ.jsx)(JN, {
              view: FU,
              explain: NU,
              preview: gN(FU.status)
            }) : (0, GQ.jsx)(jN, {
              view: FU,
              explain: NU
            }), (0, GQ.jsx)(KY, {
              text: dU ? `${ZN(AU,WU)} ${AU(`${KN}rxTapHint`)}` : ZN(AU, WU),
              tone: WU.tone,
              explained: oU
            }), ZU ? (0, GQ.jsxs)(GQ.Fragment, {
              children: [(0, GQ.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: AU(`${KN}rxNotYours`)
              }), (0, GQ.jsx)(zN, {
                status: FU.status,
                store: yU,
                readOnly: !0
              })]
            }) : BU && !tU ? (0, GQ.jsxs)(GQ.Fragment, {
              children: [(0, GQ.jsx)(ON, {
                view: FU,
                store: yU,
                explain: NU,
                explainOnce: IU
              }), void 0 !== FU.status.baf2RxLayout && hY(FU.status) && (0, GQ.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, GQ.jsx)(zN, {
                  status: FU.status,
                  store: yU,
                  readOnly: !1,
                  bare: !0
                }), (0, GQ.jsx)(XN, {
                  status: FU.status,
                  store: yU,
                  busy: FU.busy.has("fill")
                })]
              })]
            }) : (0, GQ.jsxs)(GQ.Fragment, {
              children: [(0, GQ.jsx)(SN, {
                view: FU,
                store: yU,
                keepSize: BU ? () => {
                  gU(!1)
                } : void 0
              }), po(FU.dims, FU.status.baf2RxDims) && (0, GQ.jsx)(rN, {
                need: FU.status.baf2RxNeed,
                explain: NU
              }), (0, GQ.jsx)(zN, {
                status: FU.status,
                store: yU,
                readOnly: !1
              })]
            }), pU && (0, GQ.jsx)(QN, {
              id: "baf2ResizeTitle",
              title: `${KN}rxResizeConfirmTitle`,
              body: `${KN}rxResizeConfirmBody`,
              yes: `${KN}rxChangeSize`,
              cancel: () => {
                aU(!1)
              },
              confirm: () => {
                aU(!1), gU(!0)
              }
            })]
          })]
        })
      })
    }
    class UI {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(UU) {
        this.view = UU;
        for (const XU of this.listeners) XU()
      }
      get() {
        return this.view
      }
      subscribe(UU) {
        return this.listeners.add(UU), () => {
          this.listeners.delete(UU)
        }
      }
    }

    function XI(UU) {
      let {
        commands: XU,
        store: zU,
        power: yU,
        water: QU,
        reactor: AU,
        battery: FU,
        collider: oU,
        terminal: DU,
        quests: EU,
        tutorial: YU,
        close: NU,
        leave: IU,
        askIslands: pU,
        showCore: aU,
        openSocial: tU
      } = UU;
      const {
        userContext: gU
      } = (0, eF.d)(), kU = LF.featureFlags.useSocialFeatures && gU.isLoggedIn(), [GU, BU] = (0, cU.useState)((() => zU.get()));
      (0, cU.useEffect)((() => zU.subscribe((() => {
        BU(zU.get())
      }))), [zU]);
      const ZU = "islands" === (null === GU || void 0 === GU ? void 0 : GU.kind) ? GU.backToCore : void 0;
      return (0, GQ.jsxs)(rA.Provider, {
        value: XU,
        children: ["core" === (null === GU || void 0 === GU ? void 0 : GU.kind) && (0, GQ.jsx)(YY, {
          view: GU.core,
          close: NU,
          askIslands: pU
        }), "dropMap" === (null === GU || void 0 === GU ? void 0 : GU.kind) && (0, GQ.jsx)(aY, {
          message: GU.dropMap,
          quests: EU,
          close: NU,
          leave: IU
        }), "islands" === (null === GU || void 0 === GU ? void 0 : GU.kind) && (0, GQ.jsx)(SY, {
          message: GU.islands,
          arrivedAtMs: GU.arrivedAtMs,
          close: ZU ? () => {
            aU(ZU)
          } : NU,
          leave: IU,
          openSocial: kU ? tU : null
        }), "quests" === (null === GU || void 0 === GU ? void 0 : GU.kind) && (0, GQ.jsx)(wE, {
          store: EU,
          tutorial: YU,
          close: NU
        }), "transfer" === (null === GU || void 0 === GU ? void 0 : GU.kind) && (0, GQ.jsx)(TD, {
          message: GU.transfer,
          arrivedAtMs: GU.arrivedAtMs,
          close: NU,
          leave: IU
        }), "power" === (null === GU || void 0 === GU ? void 0 : GU.kind) && (0, GQ.jsx)(WA, {
          store: yU,
          close: NU
        }), "water" === (null === GU || void 0 === GU ? void 0 : GU.kind) && (0, GQ.jsx)(DF, {
          store: QU,
          close: NU
        }), "reactor" === (null === GU || void 0 === GU ? void 0 : GU.kind) && (0, GQ.jsx)(hN, {
          store: AU,
          close: NU
        }), "battery" === (null === GU || void 0 === GU ? void 0 : GU.kind) && (0, GQ.jsx)(fN, {
          store: FU,
          close: NU
        }), "collider" === (null === GU || void 0 === GU ? void 0 : GU.kind) && (0, GQ.jsx)(ND, {
          store: oU,
          close: NU
        }), "terminal" === (null === GU || void 0 === GU ? void 0 : GU.kind) && (0, GQ.jsx)(mY, {
          store: DU,
          close: NU,
          send: UU => {
            XU.send(UU)
          }
        })]
      })
    }
    var zI = zU(39278);

    function cI(UU, XU) {
      return UU.distSq - XU.distSq
    }
    class yI {
      constructor() {
        this.list = [], this.pool = []
      }
      add(UU, XU, zU, cU) {
        let yU = this.pool[this.list.length];
        yU || (yU = {
          x: 0,
          y: 0,
          distSq: 0,
          element: XU,
          liftRem: zU,
          dot: cU
        }, this.pool.push(yU)), yU.x = UU.x, yU.y = UU.y, yU.distSq = UU.distSq, yU.element = XU, yU.liftRem = zU, yU.dot = cU, this.list.push(yU)
      }
    }
    class QI {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = UU, this.sizes = new WeakMap, this.observer = new ResizeObserver((UU => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const XU of UU) {
            const UU = XU.borderBoxSize[0];
            "dot" !== XU.target.dataset.crowded && 0 !== UU.inlineSize && 0 !== UU.blockSize && this.sizes.set(XU.target, {
              width: UU.inlineSize,
              height: UU.blockSize
            })
          }
        })), this.remPx = 16, this.cY = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.QG = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.QG)
      }
      observe(UU) {
        this.observer.observe(UU)
      }
      unobserve(UU) {
        this.observer.unobserve(UU)
      }
      run(UU) {
        const XU = UU.list;
        XU.sort(cI);
        const zU = this.pxPerVw,
          cU = this.pxPerVh;
        this.cY.length = 0, this.hud && this.cY.push(...this.hud.boxes(performance.now()));
        for (const QU of XU) {
          var yU;
          const UU = this.sizes.get(QU.element);
          let XU = "no";
          if (UU && UU.width > 0) {
            const yU = QU.x * zU,
              AU = QU.y * cU - QU.liftRem * this.remPx;
            this.fit(yU, AU, UU.width, UU.height) || (XU = QU.dot && this.fit(yU, AU, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (yU = QU.element.dataset.crowded) && void 0 !== yU ? yU : "no") !== XU && ("no" === XU ? delete QU.element.dataset.crowded : QU.element.dataset.crowded = XU), "hidden" !== XU && (0, zI.d)(QU.element, QU.x, QU.y)
        }
        XU.length = 0
      }
      fit(UU, XU, zU, cU) {
        const yU = UU - zU / 2,
          QU = UU + zU / 2,
          AU = XU - cU,
          FU = this.cY;
        for (let oU = 0; oU < FU.length; oU += 4)
          if (yU < FU[oU + 1] - 2 && QU > FU[oU] + 2 && AU < FU[oU + 3] - 2 && XU > FU[oU + 2] + 2) return !1;
        return FU.push(yU, QU, AU, XU), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.QG)
      }
    }
    const AI = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class FI {
      constructor() {
        this.cards = AI.map((UU => document.getElementsByClassName(UU))), this.watched = AI.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(UU) {
        UU - this.refreshedAt > 1e3 && (this.refreshedAt = UU, this.stale = !0);
        for (let zU = 0; zU < this.cards.length; zU++) {
          var XU;
          const UU = null !== (XU = this.cards[zU][0]) && void 0 !== XU ? XU : null;
          UU !== this.watched[zU] && this.watch(zU, UU)
        }
        return this.stale && (this.stale = !1, this.measure()), this.list
      }
      dispose() {
        for (let UU = 0; UU < this.watched.length; UU++) this.watch(UU, null);
        this.sizes.disconnect(), window.removeEventListener("resize", this.onChange)
      }
      measure() {
        const UU = this.list;
        UU.length = 0;
        for (const XU of this.watched) {
          if (!XU || XU.closest(".NoRoom")) continue;
          const zU = XU.getBoundingClientRect();
          let cU = zU.top,
            yU = zU.bottom;
          if (XU === this.watched[0] && this.hud) {
            const UU = this.hud.getBoundingClientRect();
            cU = Math.max(cU, UU.top), yU = Math.min(yU, UU.bottom)
          }
          zU.width > 0 && yU > cU && UU.push(zU.left, zU.right, cU, yU)
        }
      }
      watch(UU, XU) {
        const zU = this.watched[UU];
        var cU, yU;
        (zU && this.sizes.unobserve(zU), this.watched[UU] = XU, this.stale = !0, XU && this.sizes.observe(XU), 0 === UU) && (null === (cU = this.hud) || void 0 === cU || cU.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (yU = null === XU || void 0 === XU ? void 0 : XU.closest(".Baf2QuestHud")) && void 0 !== yU ? yU : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    var oI = zU(39283);
    class DI {
      constructor(UU) {
        this.onElement = UU, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(UU) {
        const XU = [];
        for (let zU = 0; zU + 4 < UU.length; zU += 5) {
          const cU = [UU[zU], UU[zU + 1], UU[zU + 2]];
          XU.push({
            key: cU.join(","),
            pos: cU,
            status: Xy[UU[zU + 3]],
            kind: eX[UU[zU + 4]]
          })
        }
        this.markers = XU, this.keys = new Set(XU.map((UU => {
          let {
            key: XU
          } = UU;
          return XU
        }))), this.notify()
      }
      covers(UU) {
        return this.keys.has(UU)
      }
      get() {
        return this.markers
      }
      subscribe(UU) {
        return this.listeners.add(UU), () => {
          this.listeners.delete(UU)
        }
      }
      bind(UU) {
        let XU = this.refs.get(UU);
        return XU || (XU = XU => {
          const zU = this.elements.get(UU);
          var cU, yU;
          zU && (null === (cU = this.onElement) || void 0 === cU || cU.call(this, zU, !1));
          XU ? (this.elements.set(UU, XU), null === (yU = this.onElement) || void 0 === yU || yU.call(this, XU, !0)) : (this.elements.delete(UU), this.refs.delete(UU))
        }, this.refs.set(UU, XU)), XU
      }
      onAfterRender(UU, XU, zU) {
        for (const cU of this.markers) {
          const yU = this.elements.get(cU.key);
          if (!yU) continue;
          const QU = (0, oI.b)(yU, UU, XU, cU.pos, 1.05, 24);
          QU && zU.add(QU, yU, .45, !0)
        }
      }
      notify() {
        for (const UU of this.listeners) UU()
      }
    }
    const EI = {
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
    const YI = (0, cU.memo)((function(UU) {
        let {
          status: XU,
          kind: zU,
          bindRef: cU
        } = UU;
        const {
          t: yU
        } = (0, Wy.I)(), QU = function(UU, XU) {
          var zU;
          if ("noFuel" === UU) {
            var cU, yU;
            const UU = null === (cU = rX[XU]) || void 0 === cU || null === (yU = cU.fuels) || void 0 === yU ? void 0 : yU.find((UU => cz.includes(UU)));
            return null !== UU && void 0 !== UU ? UU : EI.noFuel
          }
          return void 0 !== (null === (zU = rX[XU]) || void 0 === zU ? void 0 : zU.cryoMade) ? "noOutlet" === UU ? "Fluid Pipe" : "noInput" === UU ? "Biomass" : EI[UU] : EI[UU]
        }(XU, zU);
        return (0, GQ.jsxs)("div", {
          className: By()("Baf2StallMarker", XU),
          ref: cU,
          hidden: !0,
          children: [QU && (0, GQ.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, GQ.jsx)(Ly.c, {
              itemName: QU,
              amount: 0
            })
          }), (0, GQ.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === XU ? "?" : "!"
          }), (0, GQ.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: yU(`buildAFactory2Game:stallTag_${XU}`)
          })]
        })
      })),
      NI = (0, cU.memo)((function(UU) {
        let {
          controller: XU
        } = UU;
        const [zU, yU] = (0, cU.useState)((() => XU.get()));
        return (0, cU.useEffect)((() => (yU(XU.get()), XU.subscribe((() => {
          yU(XU.get())
        })))), [XU]), (0, GQ.jsx)("div", {
          className: "Baf2StallMarkers",
          children: zU.map((UU => (0, GQ.jsx)(YI, {
            status: UU.status,
            kind: UU.kind,
            bindRef: XU.bind(UU.key)
          }, UU.key)))
        })
      })),
      II = az.k + 150;
    class pI {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(UU, XU) {
        const zU = XU - UU;
        null === this.offset || zU < this.offset ? this.offset = zU : this.offset = Math.min(zU, this.offset + .02 * (XU - this.sampledAt)), this.sampledAt = XU
      }
      toLocal(UU) {
        var XU;
        return UU + (null !== (XU = this.offset) && void 0 !== XU ? XU : 0) + II
      }
    }
    var aI = zU(39285);
    const tI = 15 * Math.PI / 180,
      gI = Math.SQRT2,
      kI = [4, 2];

    function GI(UU, XU) {
      const zU = [1 / 0, 1 / 0, 1 / 0],
        cU = [-1 / 0, -1 / 0, -1 / 0];
      for (const oU of UU)
        for (let UU = 0; UU < 3; UU++) zU[UU] = Math.min(zU[UU], oU[UU]), cU[UU] = Math.max(cU[UU], oU[UU]);
      const yU = (zU[0] + cU[0]) / 2,
        QU = (zU[1] + cU[1]) / 2,
        AU = (zU[2] + cU[2]) / 2;
      let FU = 0;
      for (const oU of UU) FU = Math.max(FU, Math.hypot(oU[0] - yU, oU[1] - QU, oU[2] - AU));
      return {
        x: yU,
        y: QU,
        z: AU,
        r: FU + XU
      }
    }

    function BI(UU, XU, zU) {
      const cU = XU.x - UU.x,
        yU = XU.y - UU.y,
        QU = XU.z - UU.z,
        AU = Math.sqrt(cU * cU + yU * yU + QU * QU);
      if (AU <= XU.r + 8) return 1;
      const FU = XU.r / AU,
        oU = Math.sqrt(1 - FU * FU),
        DU = oU < -UU.cosHalf,
        EU = (cU * UU.dx + yU * UU.dy + QU * UU.dz) / AU;
      if (!DU && EU < UU.cosHalf * oU - UU.sinHalf * FU) return 0;
      const YU = zU * gI * UU.frameMs * UU.pxPerBlock / (AU - XU.r);
      for (let NU = 0; NU < kI.length; NU++)
        if (YU * kI[NU] <= 1) return kI[NU];
      return 1
    }

    function ZI(UU, XU) {
      return {
        name: UU,
        at: XU,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const RI = [0, 0, 0];

    function PI(UU, XU, zU) {
      let [, cU, yU, QU, AU, FU] = XU;
      const oU = az.g * (null !== AU && void 0 !== AU ? AU : 1),
        DU = [];
      for (let IU = 0; IU < cU.length; IU += 3) DU.push([cU[IU] + .5, cU[IU + 1] + .65, cU[IU + 2] + .5]);
      const EU = [];
      for (let IU = 0; IU < DU.length - 1; IU++) {
        const [UU, XU] = [DU[IU], DU[IU + 1]];
        EU.push([(UU[0] + XU[0]) / 2, (UU[1] + XU[1]) / 2, (UU[2] + XU[2]) / 2])
      }
      const YU = DU.slice(1, -1),
        NU = new Uint8Array(YU.length);
      for (const IU of null !== FU && void 0 !== FU ? FU : []) NU[IU >> 1] |= 1 & IU ? 2 : 1;
      return {
        island: UU,
        length: YU.length,
        loop: QU,
        cellsPerMs: oU,
        edges: EU,
        Ut: YU,
        bounds: GI([...EU, ...YU], .3),
        changed: !0,
        culled: !1,
        hide: NU,
        items: yU.map((UU => {
          let [XU, cU] = UU;
          return ZI(XU, (0, az.A)(XU, cU, zU, oU).at)
        }))
      }
    }

    function WI(UU, XU) {
      const {
        items: zU
      } = UU;
      if (0 === zU.length) return;
      const cU = UU.length / UU.cellsPerMs,
        yU = Math.floor((XU - zU[0].at) / cU) - 1;
      if (yU > 0)
        for (const QU of zU) QU.at += yU * cU
    }

    function dI(UU, XU) {
      const zU = Math.min(Math.floor(XU), UU.length - 1),
        cU = UU.hide[zU];
      return 0 !== cU && 0 !== (cU & (XU - zU < .5 ? 1 : 2))
    }

    function LI(UU, XU) {
      const zU = Math.min(Math.floor(XU), UU.length - 1),
        cU = XU - zU,
        yU = cU < .5,
        QU = yU ? UU.edges[zU] : UU.Ut[zU],
        AU = yU ? UU.Ut[zU] : UU.edges[zU + 1],
        FU = yU ? 2 * cU : 2 * cU - 1;
      RI[0] = QU[0] + (AU[0] - QU[0]) * FU, RI[1] = QU[1] + (AU[1] - QU[1]) * FU, RI[2] = QU[2] + (AU[2] - QU[2]) * FU
    }
    const eI = Math.PI / 4;
    class CI {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new pI, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.QG = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(UU) {
        const XU = performance.now();
        this.clock.sample(UU.baf2BeltLinesAt, XU), this.queue(UU.baf2BeltLinesAt, UU, 0, null, null, 0), this.applyDue(XU)
      }
      onMoves(UU) {
        const XU = performance.now(),
          zU = UU.baf2BeltMovesAt;
        this.clock.sample(zU, XU);
        for (const [cU, yU, QU, AU] of UU.baf2BeltMoveList) null === yU ? this.queue(zU - QU, null, cU, null, null, null !== AU && void 0 !== AU ? AU : 0) : this.queue(zU - QU, null, cU, yU, null !== AU && void 0 !== AU ? AU : null, 0);
        this.applyDue(XU)
      }
      start(UU) {
        this.pool = new aI.d(UU, {
          scale: .3,
          yaw: eI
        }, 64), this.QG(), window.addEventListener("resize", this.QG)
      }
      onAfterRender(UU) {
        const {
          pool: XU
        } = this;
        if (!XU) return;
        const zU = performance.now(),
          cU = zU - this.lastRenderAt;
        this.lastRenderAt = zU, cU < 100 && (this.frameMs += .1 * (cU - this.frameMs));
        const yU = zU + this.frameMs;
        this.applyDue(yU);
        const QU = UU.cameraPosition,
          AU = XU.follow(QU);
        this.setView(UU, QU);
        const FU = this.frame++;
        for (let oU = 0; oU < this.shown.length; oU++) {
          const UU = this.shown[oU],
            zU = BI(this.view, UU.bounds, UU.cellsPerMs),
            cU = UU.culled && 0 !== zU;
          if (UU.culled = 0 === zU, !AU && !UU.changed && !cU && (0 === zU || (FU + oU) % zU !== 0)) continue;
          UU.changed = !1, UU.loop && (WI(UU, yU), (0, az.v)(UU.items, UU.length, yU, UU.cellsPerMs));
          let QU = UU.length;
          for (let FU = 0; FU < UU.items.length; FU++) {
            const zU = UU.items[FU],
              cU = (0, az.C)(zU.at, QU, yU, UU.cellsPerMs);
            if (QU = cU - az.m, dI(UU, cU)) {
              null === zU.kind || zU.hidden || (zU.kind.hide(zU.slot), zU.hidden = !0);
              continue
            }
            let oU = zU.kind;
            if (null === oU) {
              if (oU = XU.kindOf(zU.name), null === oU) continue;
              zU.kind = oU, zU.slot = oU.take(), zU.hidden = !0, zU.drawn = NaN
            } else if (cU === zU.drawn && !zU.hidden && !AU) continue;
            LI(UU, cU), oU.write(zU.slot, RI[0], RI[1], RI[2]), zU.hidden = !1, zU.drawn = cU
          }
        }
        XU.commit()
      }
      dispose() {
        var UU;
        window.removeEventListener("resize", this.QG), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (UU = this.pool) || void 0 === UU || UU.dispose(), this.pool = null
      }
      setView(UU, XU) {
        const {
          cameraDir: zU,
          lastDir: cU
        } = this, yU = UU.cameraDirection;
        for (let EU = 0; EU < 3; EU++) cU[EU] = zU[EU], zU[EU] = yU[EU];
        const QU = zU[0] * cU[0] + zU[1] * cU[1] + zU[2] * cU[2],
          AU = Number.isNaN(QU) ? 0 : Math.acos(Math.min(1, Math.max(-1, QU))),
          {
            width: FU,
            height: oU
          } = this,
          DU = UU.tanHalfFovX;
        ! function(UU, XU, zU, cU, yU, QU, AU) {
          let FU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          UU.x = XU[0], UU.y = XU[1], UU.z = XU[2], UU.dx = zU[0], UU.dy = zU[1], UU.dz = zU[2];
          const oU = Math.min(Math.PI, Math.atan(Math.sqrt(cU * cU + yU * yU)) + tI + FU);
          UU.cosHalf = Math.cos(oU), UU.sinHalf = Math.sin(oU), UU.pxPerBlock = QU / (2 * yU), UU.frameMs = AU
        }(this.view, XU, zU, DU, DU * oU / FU, oU * window.devicePixelRatio, this.frameMs, AU)
      }
      queue(UU, XU, zU, cU, yU, QU) {
        const AU = Math.max(this.clock.toLocal(UU), this.lastPendingAt);
        this.lastPendingAt = AU, this.pending.push({
          at: AU,
          lines: XU,
          line: zU,
          name: cU,
          pos: yU,
          idx: QU
        })
      }
      applyDue(UU) {
        const {
          pending: XU
        } = this;
        for (; this.pendingHead < XU.length && XU[this.pendingHead].at <= UU;) {
          const UU = XU[this.pendingHead++];
          if (UU.lines) this.applyLines(UU.lines, UU.at), UU.lines = null;
          else {
            const XU = this.lines.get(UU.line);
            XU && this.applyMove(XU, UU, UU.at)
          }
        }
        this.pendingHead === XU.length ? (XU.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > XU.length && (XU.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(UU, XU) {
        this.clearIsland(UU.baf2BeltIsland);
        for (const zU of UU.baf2BeltLineList) this.lines.set(zU[0], PI(UU.baf2BeltIsland, zU, XU));
        this.shown = [...this.lines.values()]
      }
      applyMove(UU, XU, zU) {
        let {
          name: cU,
          pos: yU,
          idx: QU
        } = XU;
        UU.changed = !0, UU.loop && (WI(UU, zU), (0, az.v)(UU.items, UU.length, zU, UU.cellsPerMs)), null !== cU && null !== yU ? (0, az.z)(UU.items, UU.length, ZI(cU, zU), yU, zU, UU.cellsPerMs) : null !== cU ? UU.items.push(ZI(cU, zU)) : UU.items.length > QU && this.release((0, az.G)(UU.items, UU.length, zU, UU.cellsPerMs, QU))
      }
      clearIsland(UU) {
        for (const [XU, zU] of this.lines)
          if (zU.island === UU) {
            for (const UU of zU.items) this.release(UU);
            this.lines.delete(XU)
          }
      }
      release(UU) {
        null !== UU.kind && (UU.kind.release(UU.slot), UU.kind = null, UU.slot = -1, UU.hidden = !0, UU.drawn = NaN)
      }
    }
    var wI = zU(37318),
      qI = zU(39296);

    function OI(UU) {
      let {
        depth: XU,
        store: zU,
        t: yU
      } = UU;
      const QU = function(UU) {
        const [XU, zU] = (0, cU.useState)(UU.lastPlayerY());
        return (0, hD.f)(ry, zU), (0, cU.useEffect)((() => {
          zU(UU.lastPlayerY())
        }), [UU]), XU
      }(zU);
      if (null === QU) return null;
      const [AU, FU] = XU, oU = QU > AU ? AU : null !== FU && QU < FU ? FU : null, DU = {
        y: pQ(QU),
        target: null === oU ? "" : pQ(oU)
      };
      return (0, GQ.jsx)("span", {
        className: By()("Baf2QuestDepth", {
          Reached: null === oU
        }),
        children: yU(`${cE}${null===oU?"questDepthReached":"questDepth"}`, DU)
      })
    }

    function SI(UU) {
      let {
        also: XU,
        view: zU,
        t: cU
      } = UU;
      return (0, GQ.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, GQ.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, GQ.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, GQ.jsx)("strong", {
            children: cU(`${cE}questAlsoDownHere`)
          }), (0, GQ.jsx)("span", {
            className: "Baf2QuestChips",
            children: XU.map((UU => {
              let [XU, yU, QU, AU] = UU;
              return (0, GQ.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": cU(`${cE}questAlsoItem`, {
                  item: QE(cU, zU.itemNames[XU], XU),
                  have: String(yU),
                  need: String(QU)
                }),
                children: [(0, GQ.jsx)(oE, {
                  item: XU
                }), (0, GQ.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${yU}/${QU}`
                }), null !== AU && (0, GQ.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: cU(`${cE}questAlsoDepth`, {
                    y: pQ(AU)
                  })
                })]
              }, XU)
            }))
          })]
        })]
      })
    }
    var rI = zU(3796);

    function uI(UU) {
      let {
        expanded: XU,
        inventoryOpen: zU,
        children: yU
      } = UU;
      const QU = (0, cU.useRef)(null);
      return (0, cU.useEffect)((() => {
        const UU = QU.current,
          XU = null === UU || void 0 === UU ? void 0 : UU.closest(".RightElements"),
          cU = null === UU || void 0 === UU ? void 0 : UU.firstElementChild;
        if (!UU || !XU || !cU) return;
        return (0, qI.e)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [XU, cU], (() => {
          const yU = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === yU.length) return;
          const QU = Math.max(...yU.map((UU => UU.getBoundingClientRect().bottom))),
            AU = XU.getBoundingClientRect(),
            FU = zU ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (FU) {
            const XU = parseFloat(getComputedStyle(cU).marginLeft) + parseFloat(getComputedStyle(cU).marginRight),
              zU = AU.right - FU.getBoundingClientRect().right - 8 - XU;
            UU.style.setProperty("--baf2-quest-room", `${zU}px`), UU.classList.toggle("NoRoom", zU < 150)
          } else UU.style.removeProperty("--baf2-quest-room"), UU.classList.remove("NoRoom");
          const oU = QU - AU.top + 8,
            DU = function(UU, XU, zU) {
              const cU = XU.getBoundingClientRect(),
                yU = UU.getBoundingClientRect(),
                QU = (0, rI.j)(yU.left, yU.right, cU.top + zU);
              if (null !== QU && QU < cU.bottom) return QU - cU.top;
              return cU.height - (parseFloat(getComputedStyle(XU).paddingBottom) || 0)
            }(UU, XU, oU) - 8,
            EU = window.innerHeight / 2 - AU.top,
            {
              top: YU,
              maxHeight: NU
            } = function(UU, XU, zU, cU, yU) {
              const QU = Math.min(zU, Math.max(0, XU - UU)),
                AU = yU ? UU : Math.max(UU, Math.min(cU - QU / 2, XU - QU));
              return {
                top: AU,
                maxHeight: Math.max(0, XU - AU)
              }
            }(oU, DU, function(UU) {
              const XU = UU.firstElementChild,
                zU = XU ? XU.scrollHeight - XU.clientHeight : 0;
              return UU.getBoundingClientRect().height + Math.max(0, zU)
            }(cU), EU, kQ());
          UU.style.top = `${YU}px`, UU.style.maxHeight = `${NU}px`
        }))
      }), [zU]), (0, GQ.jsx)("div", {
        ref: QU,
        className: By()("Baf2QuestHud", {
          Expanded: XU
        }),
        children: yU
      })
    }

    function fI(UU) {
      let {
        amount: XU,
        t: zU
      } = UU;
      return (0, GQ.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, GQ.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, GQ.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: zU(`${cE}questStepsDone`, {
            amount: String(XU)
          })
        })]
      })
    }

    function iI(UU) {
      let {
        pulse: XU
      } = UU;
      return 0 === XU ? null : (0, GQ.jsx)("span", {
        className: "Baf2QuestTrackerPulse",
        "aria-hidden": "true"
      }, XU)
    }

    function HI(UU) {
      var XU;
      let {
        store: zU
      } = UU;
      const yU = (0, hD.j)(Sy, zU.get()),
        [QU, AU] = (0, cU.useState)(!1),
        {
          t: FU
        } = (0, Wy.I)(),
        oU = (0, tQ.g)(gQ),
        {
          openInGameMenuName: DU,
          openEverythingMenuName: EU
        } = (0, gy.q)(["openInGameMenuName", "openEverythingMenuName"]),
        YU = "inventory" === DU && null === EU,
        NU = null !== DU && !YU || null !== EU;
      if (! function(UU) {
          return null !== UU.name || null !== UU.side
        }(yU) || NU || "off" === yU.tutorial) return null;
      const IU = vy(yU.rows),
        pU = IU.filter((UU => UU.done)).length,
        aU = function(UU, XU) {
          const zU = ny(UU);
          let cU = 0;
          return UU.filter(((UU, yU) => !!UU.justFinished || !(UU.done || yU < zU || cU > XU) && (cU++, !0)))
        }(yU.rows, oU ? 0 : 2),
        tU = oU ? aU : function(UU, XU) {
          const zU = XU.filter((UU => !UU.justFinished));
          if (zU.length < 2) return [...XU];
          const cU = UU.indexOf(zU[0]),
            yU = UU.indexOf(zU[zU.length - 1]),
            QU = new Set(vy(UU));
          return UU.filter(((UU, zU) => XU.includes(UU) || UU.done && QU.has(UU) && zU > cU && zU < yU))
        }(yU.rows, aU),
        gU = QU ? yU.rows : tU,
        kU = QU || oU ? [] : function(UU, XU) {
          const zU = new Array(XU.length + 1).fill(0),
            cU = new Set(vy(UU));
          let yU = 0;
          for (const QU of UU) yU < XU.length && QU === XU[yU] ? yU++ : QU.done && cU.has(QU) && zU[yU]++;
          return zU
        }(yU.rows, tU),
        GU = QU || tU.length < yU.rows.length || null !== yU.reward,
        BU = My(yU),
        ZU = BU ? FU(`${cE}questLineComplete`) : yU.tier ? YE(FU, yU.tier) : FU(`${cE}currentQuest`),
        RU = function(UU) {
          var XU, zU;
          if (My(UU)) return null;
          const cU = null === (XU = UU.chapters) || void 0 === XU ? void 0 : XU.find((XU => {
            let [zU] = XU;
            return zU === UU.tier
          }));
          if (!cU) return null;
          const yU = cU[1].filter((UU => !UU[4]));
          if (0 === yU.length) return null;
          const QU = null === (zU = UU.name) || void 0 === zU ? void 0 : zU[0],
            AU = UU => yU.findIndex((XU => XU[0] === QU && (!UU || !XU[3]))),
            FU = AU(!0),
            oU = FU >= 0 ? FU : AU(!1);
          if (oU >= 0) return [oU + 1, yU.length];
          const DU = yU.filter((UU => UU[3])).length;
          return [Math.min(DU + 1, yU.length), yU.length]
        }(yU);
      return (0, GQ.jsx)(wI.e, {
        placement: "topRight",
        children: (0, GQ.jsx)(uI, {
          expanded: QU,
          inventoryOpen: YU,
          children: (0, GQ.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: yE,
            children: [null !== yU.name && (0, GQ.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [(0, GQ.jsx)(iI, {
                pulse: yU.pulse
              }), (0, GQ.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, GQ.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [ZU, RU && (0, GQ.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": FU(`${cE}questPlaceLabel`, {
                      n: String(RU[0]),
                      total: String(RU[1])
                    }),
                    children: FU(`${cE}questPlace`, {
                      n: String(RU[0]),
                      total: String(RU[1])
                    })
                  }), yU.tier && yU.core && !BU && (0, GQ.jsx)(NE, {
                    core: yU.core,
                    t: FU
                  })]
                })
              }), (0, GQ.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: FU(`${cE}${yU.name[0]}`, AE(yU.name[1]))
              }), (IU.length > 1 || GU) && (0, GQ.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [IU.length > 1 && (0, GQ.jsx)(IE, {
                  rows: IU,
                  t: FU
                }), GU && (0, GQ.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": QU,
                  onClick: () => {
                    AU(!QU)
                  },
                  children: [(0, GQ.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: FU(`${cE}questStepsToggle`, {
                      done: String(pU),
                      total: String(IU.length)
                    })
                  }), (0, GQ.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: QU ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, GQ.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [gU.map(((UU, XU) => {
                  var QU;
                  const AU = UU.current && yU.depth;
                  return (0, GQ.jsxs)(cU.Fragment, {
                    children: [(null !== (QU = kU[XU]) && void 0 !== QU ? QU : 0) > 0 && (0, GQ.jsx)(fI, {
                      amount: kU[XU],
                      t: FU
                    }), (0, GQ.jsx)(pE, {
                      row: UU,
                      view: yU,
                      t: FU,
                      extra: AU && (0, GQ.jsx)(OI, {
                        depth: AU,
                        store: zU,
                        t: FU
                      })
                    })]
                  }, UU.id)
                })), (null !== (XU = kU[gU.length]) && void 0 !== XU ? XU : 0) > 0 && (0, GQ.jsx)(fI, {
                  amount: kU[gU.length],
                  t: FU
                }), yU.also.length > 0 && (0, GQ.jsx)(SI, {
                  also: yU.also,
                  view: yU,
                  t: FU
                })]
              }), QU && yU.reward && (0, GQ.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [FU(`${cE}questReward`), (0, GQ.jsx)(oE, {
                  item: yU.reward
                }), QE(FU, yU.itemNames[yU.reward], yU.reward)]
              })]
            }), yU.side && (0, GQ.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [iy(yU, Date.now()) && (0, GQ.jsx)(iI, {
                pulse: yU.sideCameUpAt
              }), (0, GQ.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: FU(`${cE}questSide`)
              }), (0, GQ.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: FU(`${cE}${yU.side.name[0]}`, AE(yU.side.name[1]))
              }), (0, GQ.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, GQ.jsx)(pE, {
                  row: yU.side.row,
                  view: yU,
                  t: FU
                })
              })]
            })]
          })
        })
      })
    }
    const MI = "baf2ToastView";
    class vI {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = UU, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: UU,
          holdMs: XU
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const UU = this.dropCovered();
          UU && this.show(UU.message, UU.holdMs)
        }), 250));
        const zU = this.dropCovered();
        null !== zU && (zU.holdMs > 0 || "baf2ToastCelebrate" === zU.message.baf2ToastStyle) && "baf2ToastCelebrate" !== UU.baf2ToastStyle && this.show(zU.message, zU.holdMs);
        const cU = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== UU.baf2ToastStyle && cU > 0) return this.pending = {
          message: UU,
          holdMs: XU
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const UU = this.pending;
          this.pending = null, UU && this.present(UU.message, UU.holdMs)
        }), cU));
        this.present(UU, XU)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(UU, XU) {
        this.clearTimers(), this.pending = null;
        const zU = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: UU.baf2ToastText,
          style: UU.baf2ToastStyle,
          swapped: zU,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === UU.baf2ToastStyle ? 1500 : XU), this.UY();
        const cU = Math.min(8e3, Math.max(1e3, UU.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.leave()
        }), cU)
      }
      leave() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.UY(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.UY()
        }), 200))
      }
      clearTimers() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), null !== this.pendingTimer && (clearTimeout(this.pendingTimer), this.pendingTimer = null)
      }
      dropCovered() {
        null !== this.coveredTimer && (clearInterval(this.coveredTimer), this.coveredTimer = null);
        const UU = this.covering;
        return this.covering = null, UU
      }
      UY() {
        qy.k.UY(MI, this.view, !0)
      }
    }
    var VI = zU(73);
    const sI = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function nI(UU) {
      let {
        store: XU
      } = UU;
      const zU = (0, hD.j)(MI, XU.get()),
        {
          openInGameMenuName: cU,
          openEverythingMenuName: yU
        } = (0, gy.q)(["openInGameMenuName", "openEverythingMenuName"]),
        QU = zU && (0, GQ.jsxs)("div", {
          className: By()("Baf2Toast", sI[zU.style], {
            Swapped: zU.swapped,
            Leaving: zU.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === zU.style && (0, GQ.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, GQ.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, GQ.jsx)(ey.d, {
              text: zU.text
            })
          })]
        }, zU.id);
      return null !== cU && null === yU ? (0, VI.createPortal)((0, GQ.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: QU
      }), document.body) : (0, GQ.jsx)(wI.e, {
        children: QU
      })
    }
    const mI = "baf2AreaView";
    class lI {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.uD = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.uD = null
      }
      arrive(UU, XU) {
        XU && function(UU) {
          return "home" === UU.baf2AreaPlace && void 0 !== UU.baf2AreaNameText
        }(UU) ? this.uD = UU : this.show(UU)
      }
      release() {
        const UU = this.uD;
        null !== UU && this.show(UU)
      }
      show(UU) {
        this.clearTimer(), this.uD = null;
        const XU = void 0 === UU.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: UU,
          ms: XU
        }, this.UY(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.UY()
        }), XU)
      }
      dispose() {
        this.clearTimer(), this.uD = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      UY() {
        qy.k.UY(mI, this.view, !0)
      }
    }

    function xI(UU) {
      var XU;
      let {
        store: zU
      } = UU;
      const {
        t: cU
      } = (0, Wy.I)(), yU = (0, hD.j)(mI, zU.get());
      if (!yU) return null;
      const {
        area: QU
      } = yU, AU = QU.baf2AreaResetMinutes;
      return (0, GQ.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": QU.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${yU.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, GQ.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), QU.baf2AreaHeading && (0, GQ.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: cU(QU.baf2AreaHeading)
        }), (0, GQ.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (XU = QU.baf2AreaNameText) && void 0 !== XU ? XU : cU(QU.baf2AreaName)
        }), QU.baf2AreaNote && (0, GQ.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: cU(QU.baf2AreaNote)
        }), void 0 !== AU && (0, GQ.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: cU("buildAFactory2Game:areaWildsReset", {
            time: aQ(cU, 60 * AU)
          })
        })]
      }, yU.id)
    }
    const JI = "baf2GearGauge";
    class jI {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      iG(UU) {
        var XU;
        if (this.clearLinger(), null === UU.gearPowerKind) return void this.set(null);
        const zU = "jetpack" === UU.gearPowerKind && (cU = UU.gearChargeState, yU = UU.gearCharge, "flying" === cU || "charging" === cU || "outOfCharge" === cU || "ceiling" === cU || "offPlot" === cU || "noPower" === cU && yU <= 0);
        var cU, yU;
        const QU = !0 === (null === (XU = this.view) || void 0 === XU ? void 0 : XU.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          AU = zU || "jetpack" === UU.gearPowerKind && QU;
        this.set({
          gauge: UU,
          jetShown: AU
        }), AU && !zU && (this.lingerTimer = setTimeout((() => {
          this.lingerTimer = null, this.view && this.set({
            ...this.view,
            jetShown: !1
          })
        }), 1500))
      }
      dispose() {
        this.clearLinger(), this.view = null
      }
      set(UU) {
        this.view = UU, qy.k.UY(JI, UU, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const KI = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function bI(UU) {
      let {
        store: XU
      } = UU;
      const zU = (0, hD.j)(JI, XU.get());
      return zU ? "jetpack" === zU.gauge.gearPowerKind ? (0, GQ.jsx)(TI, {
        view: zU
      }) : (0, GQ.jsx)(hI, {
        gauge: zU.gauge
      }) : null
    }

    function TI(UU) {
      let {
        view: XU
      } = UU;
      const {
        t: zU
      } = (0, Wy.I)(), {
        gauge: cU
      } = XU, yU = cU.gearChargeMax > 0 ? Math.max(0, Math.min(1, cU.gearCharge / cU.gearChargeMax)) : 0, QU = KI[cU.gearChargeState], AU = QU ? zU(QU) : null;
      return (0, GQ.jsxs)("div", {
        className: By()("Baf2JetArc", {
          Shown: XU.jetShown,
          Low: yU < .2,
          Warm: yU >= .2 && yU < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - yU)
        },
        "aria-hidden": !XU.jetShown,
        children: [(0, GQ.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, GQ.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: Up,
            pathLength: 100
          }), (0, GQ.jsx)("path", {
            className: "Baf2JetArcFill",
            d: Up,
            pathLength: 100
          })]
        }), (0, GQ.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * yU), "%"]
        }), AU && (0, GQ.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: AU
        })]
      })
    }

    function hI(UU) {
      let {
        gauge: XU
      } = UU;
      const {
        t: zU
      } = (0, Wy.I)(), cU = function(UU, XU) {
        switch (XU.gearPowerKind) {
          case "skyPack":
            return UU("buildAFactory2Game:gearSkyPack", {
              charge: XU.gearCharge,
              max: XU.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return UU("buildAFactory2Game:gearIslandDraw", {
              power: bU(XU.gearIslandPower),
              cost: bU(XU.gearCostPerUse)
            });
          case "barrier":
            return UU("buildAFactory2Game:gearBarrier", {
              shield: Math.round(XU.gearCharge),
              max: XU.gearChargeMax,
              power: bU(XU.gearIslandPower)
            });
          default:
            return null
        }
      }(zU, XU);
      return null === cU ? null : (0, GQ.jsx)(wI.e, {
        children: (0, GQ.jsx)("div", {
          className: By()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === XU.gearChargeState || "outOfCharge" === XU.gearChargeState
          }),
          role: "status",
          children: cU
        })
      })
    }
    const Up = (() => {
      const UU = UU => {
        const XU = UU * Math.PI / 180;
        return `${(40*Math.cos(XU)).toFixed(2)} ${(40*Math.sin(XU)).toFixed(2)}`
      };
      return `M ${UU(160)} A 40 40 0 1 1 ${UU(380)}`
    })();
    class Xp {
      constructor(UU) {
        this.onElement = UU, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      iG(UU) {
        let XU = UU.baf2LabelsReset || UU.baf2LabelsIsland !== this.island;
        XU && (this.labels.clear(), this.island = UU.baf2LabelsIsland);
        for (const [zU, cU, yU, QU, AU] of UU.baf2LabelsList) {
          const UU = `${zU},${cU},${yU}`,
            FU = this.labels.get(UU);
          null === QU ? XU = this.labels.delete(UU) || XU : FU && FU.item === QU && (FU.count === AU || FU.count >= 0 && AU >= 0) ? FU.count !== AU && (FU.count = AU, this.writeCount(UU, AU)) : (this.labels.set(UU, {
            key: UU,
            pos: [zU, cU, yU],
            item: QU,
            count: AU
          }), this.writeCount(UU, AU), XU = !0)
        }
        if (this.changes++, XU) {
          this.snapshot = [...this.labels.values()];
          for (const UU of this.listeners) UU()
        }
      }
      bindCount(UU) {
        const XU = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${UU}`;
        let zU = this.countRefs.get(XU);
        return zU || (zU = zU => {
          var cU, yU;
          zU ? (this.countElements.set(XU, zU), this.writeCount(UU, null !== (cU = null === (yU = this.labels.get(UU)) || void 0 === yU ? void 0 : yU.count) && void 0 !== cU ? cU : -1)) : (this.countElements.delete(XU), this.countRefs.delete(XU))
        }, this.countRefs.set(XU, zU)), zU
      }
      setCountWords(UU) {
        this.countWords = UU;
        for (const [XU, zU] of this.labels) this.writePart(`words|${XU}`, UU(zU.count), zU.count)
      }
      writeCount(UU, XU) {
        this.writePart(`bare|${UU}`, IQ(XU), XU), this.countElements.has(`words|${UU}`) && this.writePart(`words|${UU}`, this.countWords(XU), XU)
      }
      writePart(UU, XU, zU) {
        const cU = this.countElements.get(UU);
        if (!cU || zU < 0) return;
        const yU = cU.firstChild;
        yU && 3 === yU.nodeType && !yU.nextSibling ? yU.nodeValue !== XU && (yU.nodeValue = XU) : cU.textContent !== XU && (cU.textContent = XU)
      }
      list() {
        return this.snapshot
      }
      at(UU) {
        return this.labels.get(`${UU[0]},${UU[1]},${UU[2]}`)
      }
      version() {
        return this.changes
      }
      subscribe(UU) {
        return this.listeners.add(UU), () => {
          this.listeners.delete(UU)
        }
      }
      bind(UU) {
        let XU = this.refs.get(UU);
        return XU || (XU = XU => {
          const zU = this.elements.get(UU);
          var cU, yU;
          zU && (null === (cU = this.onElement) || void 0 === cU || cU.call(this, zU, !1));
          XU ? (this.elements.set(UU, XU), null === (yU = this.onElement) || void 0 === yU || yU.call(this, XU, !0)) : (this.elements.delete(UU), this.refs.delete(UU))
        }, this.refs.set(UU, XU)), XU
      }
      onAfterRender(UU, XU, zU, cU) {
        for (const yU of this.snapshot) {
          const QU = this.elements.get(yU.key);
          if (!QU) continue;
          if (cU(yU.key)) {
            (0, zI.g)(QU, !0);
            continue
          }
          const AU = (0, oI.b)(QU, UU, XU, yU.pos, 1.1, 24);
          AU && zU.add(AU, QU, 0, !1)
        }
      }
    }
    const zp = (0, cU.memo)((function(UU) {
        let {
          item: XU
        } = UU;
        return (0, GQ.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, GQ.jsx)(Ly.c, {
            itemName: XU,
            amount: 0
          })
        })
      })),
      cp = (0, cU.memo)((function(UU) {
        let {
          label: XU,
          bindRef: zU,
          countRef: cU,
          wordsRef: yU
        } = UU;
        return (0, GQ.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: zU,
          hidden: !0,
          children: [(0, GQ.jsx)(zp, {
            item: XU.item
          }), XU.count >= 0 && (0, GQ.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, GQ.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: yU
            }), (0, GQ.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: cU
            })]
          })]
        })
      })),
      yp = (0, cU.memo)((function(UU) {
        let {
          store: XU
        } = UU;
        const {
          t: zU
        } = (0, Wy.I)(), [yU, QU] = (0, cU.useState)((() => XU.list()));
        return (0, cU.useEffect)((() => (QU(XU.list()), XU.subscribe((() => {
          QU(XU.list())
        })))), [XU]), (0, cU.useEffect)((() => {
          XU.setCountWords((UU => zU("buildAFactory2Game:labelSiloCount", {
            count: IQ(UU)
          })))
        }), [XU, zU]), (0, GQ.jsx)("div", {
          className: "Baf2IslandLabels",
          children: yU.map((UU => -2 === UU.count ? null : (0, GQ.jsx)(cp, {
            label: UU,
            bindRef: XU.bind(UU.key),
            countRef: XU.bindCount(UU.key),
            wordsRef: XU.bindCount(UU.key, "words")
          }, UU.key)))
        })
      })),
      Qp = {
        read: () => !0,
        write: () => {}
      };

    function Ap(UU) {
      return `${UU[0]},${UU[1]},${UU[2]}`
    }

    function Fp(UU) {
      let [XU, zU, cU, yU, QU, AU, FU, oU, DU, EU, YU, NU] = UU;
      const IU = void 0 === YU || void 0 === NU ? function(UU) {
        return [Math.floor((UU - 1) / 2), 0]
      }(QU) : [YU, NU];
      return {
        kind: 0 === oU ? "reactor" : "battery",
        box: sz([XU, zU, cU], yU, QU, AU, FU, IU),
        formed: 1 === DU,
        level: EU
      }
    }
    class op {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qp;
        this.guideSetting = UU, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = UU.read()
      }
      iG(UU) {
        var XU;
        const zU = new Map;
        for (const cU of UU.baf2RxPlanList) {
          const UU = Fp(cU);
          zU.set(Ap(UU.box.ctrl), UU)
        }
        this.plans = zU, this.layouts = new Map((null !== (XU = UU.baf2RxLayouts) && void 0 !== XU ? XU : []).map((UU => {
          let [XU, zU, cU, yU] = UU;
          return [Ap([XU, zU, cU]), yU]
        }))), this.predicted.clear(), UU.baf2RxFormedAt && (this.formed = {
          ctrl: UU.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const cU of [...this.startersOff]) {
          const UU = zU.get(cU);
          UU && !UU.formed || this.startersOff.delete(cU)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((UU => this.planByKey(UU)))
      }
      planAt(UU) {
        return this.planByKey(Ap(UU))
      }
      predictSize(UU, XU) {
        this.predicted.set(Ap(UU), XU), this.changed()
      }
      unpredict(UU) {
        this.predicted.delete(Ap(UU)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(UU) {
        var XU;
        const zU = Ap(UU);
        return this.predicted.has(zU) ? null : null !== (XU = this.layouts.get(zU)) && void 0 !== XU ? XU : null
      }
      showsStarter(UU) {
        return !this.startersOff.has(Ap(UU))
      }
      setStarter(UU, XU) {
        const zU = Ap(UU);
        XU ? this.startersOff.delete(zU) : this.startersOff.add(zU), this.changed()
      }
      guideOn() {
        return this.guide
      }
      setGuide(UU) {
        this.guide = UU, this.guideSetting.write(UU), this.changed()
      }
      getVersion() {
        return this.version
      }
      subscribe(UU) {
        return this.listeners.add(UU), () => {
          this.listeners.delete(UU)
        }
      }
      dispose() {
        this.plans.clear(), this.predicted.clear(), this.startersOff.clear(), this.layouts.clear(), this.listeners.clear(), this.formed = null
      }
      planByKey(UU) {
        const XU = this.plans.get(UU);
        if (!XU) return null;
        const zU = this.predicted.get(UU);
        return zU ? {
          ...XU,
          box: mz(XU.box, XU.kind, zU[0], zU[1], zU[2])
        } : XU
      }
      changed() {
        this.version++;
        for (const UU of this.listeners) UU()
      }
    }
    var Dp = zU(212);
    const Ep = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function Yp(UU, XU, zU, cU) {
      const yU = UU.length / 3;
      for (let QU = 0; QU < Ep.length / 3; QU++) UU.push(Ep[3 * QU] * cU[0] / 2 + zU[0], Ep[3 * QU + 1] * cU[1] / 2 + zU[1], Ep[3 * QU + 2] * cU[2] / 2 + zU[2]);
      for (let QU = yU; QU < yU + 24; QU += 4) XU.push(QU, QU + 1, QU + 2, QU, QU + 2, QU + 3)
    }

    function Np(UU, XU, zU) {
      const cU = XU[0][0],
        yU = [],
        QU = [];
      for (const [AU, FU] of XU) Yp(yU, QU, [AU[0] - cU[0], AU[1] - cU[1], AU[2] - cU[2]], FU);
      return UU.createGameMesh({
        positions: yU,
        indices: QU
      }, zU, cU)
    }

    function Ip(UU, XU) {
      const zU = UU.w - 2,
        cU = UU.d - 2;
      return 1 === function(UU, XU, zU, cU) {
        const [yU, QU, AU] = UU;
        if (Number(yU <= 2) + Number(QU <= 2) + Number(AU <= 2) >= 2) return function(UU, XU, zU) {
          return (UU + XU + zU) % 2 === 0 ? 1 : 3
        }(XU, zU, cU);
        const [FU, oU] = yU >= QU && yU >= AU ? [zU, cU] : QU >= AU ? [XU, cU] : [XU, zU];
        return FU % 2 === 0 && oU % 2 === 0 ? 1 : 3
      }([zU, UU.h - 2, cU], XU % zU, Math.floor(XU / (zU * cU)), Math.floor(XU / zU) % cU) ? "rod" : "channel"
    }

    function pp(UU, XU, zU) {
      if ("reactor" !== UU.kind || UU.formed || !XU) return !1;
      const cU = Jz(UU.box);
      for (let yU = 0; yU < cU; yU++) {
        const UU = zU(yU);
        if (null !== UU && wz(UU)) return !1
      }
      return !0
    }

    function ap(UU, XU, zU, cU, yU) {
      var QU;
      let AU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const FU = Uc(UU.box, XU),
        oU = yc(UU.kind, FU, zU);
      if ("wrong" === oU || "blocked" === oU) return "wrong";
      if (!yU) return null;
      if ("inside" === FU && "reactor" === UU.kind && "Air" === qz(zU)) {
        if (null !== AU) {
          var DU;
          const zU = bY[TY(AU, Xc(UU.box, XU))];
          return zU && null !== (DU = Go(zU)) && void 0 !== DU ? DU : null
        }
        if (cU) return Ip(UU.box, Xc(UU.box, XU))
      }
      if ("missing" !== oU) return null;
      const EU = Qc(UU.kind, FU);
      return null === EU ? null : null !== (QU = Go(EU)) && void 0 !== QU ? QU : null
    }
    const tp = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function gp(UU, XU, zU) {
      const cU = zU => {
        const cU = XU(Tz(UU.box, zU));
        return null !== cU && function(UU, XU) {
          return "reactor" !== UU.kind || XU !== Kz(UU.box) && "inside" !== Uc(UU.box, XU)
        }(UU, zU) && "ok" !== yc(UU.kind, Uc(UU.box, zU), cU)
      };
      if (zU) {
        const QU = hz(UU.box, [Math.floor(zU[0]), Math.floor(zU[1]), Math.floor(zU[2])]);
        if (QU >= 0 && (cU(QU) || (yU = QU, "reactor" === UU.kind && "inside" === Uc(UU.box, yU) && "Air" === XU(Tz(UU.box, yU))))) return QU
      }
      var yU;
      const QU = Jz(UU.box);
      for (let AU = 0; AU < QU; AU++)
        if (cU(AU)) return AU;
      return -1
    }

    function kp(UU, XU) {
      return Math.floor(XU / (UU.w * UU.d))
    }

    function Gp(UU, XU, zU) {
      return zU >= 0 && kp(UU, XU) > kp(UU, zU)
    }

    function Bp(UU, XU) {
      return XU >= 0 && UU.h >= 3 && kp(UU, XU) === UU.h - 1
    }

    function Zp(UU) {
      const XU = qz(UU);
      return XU === kz || "Collider" === XU || "Laser" === XU || XU.startsWith("_Collider ")
    }

    function Rp(UU, XU, zU, cU) {
      if (cU(UU)) return null;
      if (!tp.every((XU => {
          let [cU, yU, QU] = XU;
          const AU = zU([UU[0] + cU, UU[1] + yU, UU[2] + QU]);
          return null !== AU && !Hz("reactor", AU) && "reactor" !== Oz(AU)
        }))) return null;
      const yU = Mz("reactor").min,
        QU = sz([UU[0], UU[1], UU[2]], function(UU, XU) {
          const zU = XU[0] - (UU[0] + .5),
            cU = XU[2] - (UU[2] + .5);
          return Math.abs(zU) >= Math.abs(cU) ? zU >= 0 ? 2 : 4 : cU >= 0 ? 1 : 3
        }(UU, XU), yU, yU, yU, nz("reactor", yU)),
        AU = Kz(QU);
      let FU = !0;
      for (let oU = 0; oU < Jz(QU) && FU; oU++) {
        if (oU === AU) continue;
        const UU = Tz(QU, oU),
          XU = zU(UU);
        FU = !cU(UU) && (null === XU || !Zp(XU))
      }
      return {
        box: QU,
        fits: FU
      }
    }
    const Pp = ko,
      Wp = "baf2Goal",
      dp = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      Lp = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      ep = .4;

    function Cp(UU, XU) {
      let [zU, cU, yU] = UU;
      const QU = eo([zU - .02, cU - .02, yU - .02], [zU + 1.02, cU + 1.02, yU + 1.02], .07);
      return XU && (QU.push([
        [zU + .5, cU + 1 + .7, yU + .5],
        [.08, 1.4, .08]
      ]), QU.push([
        [zU + .5, cU + 1 + 1.4 + .2, yU + .5],
        [ep, ep, ep]
      ])), QU
    }

    function wp(UU, XU) {
      let [zU, cU, yU] = XU;
      return UU.isBlockInLoadedChunk(zU, cU, yU) ? UU.blockIdToBlockName(UU.getBlockId(zU, cU, yU)) : null
    }
    let qp = null;
    const Op = new Set;
    let Sp = null;

    function rp(UU) {
      qp = UU;
      for (const XU of Op) XU(UU)
    }
    class fp {
      constructor(UU) {
        var XU;
        this.plans = UU, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (XU = UU => {
          var XU, zU;
          this.setGoal(null !== (XU = null === UU || void 0 === UU ? void 0 : UU.goal) && void 0 !== XU ? XU : null, null !== (zU = null === UU || void 0 === UU ? void 0 : UU.startsBattery) && void 0 !== zU && zU)
        }, Sp ??= [qy.k.subscribe("setDirectionArrow", (UU => {
          let {
            id: XU,
            position: zU,
            text: cU
          } = UU;
          XU === Wp && rp({
            goal: [Math.floor(zU[0]), Math.floor(zU[1]), Math.floor(zU[2])],
            startsBattery: JSON.stringify(null !== cU && void 0 !== cU ? cU : null).includes("arrowStartBattery")
          })
        })), qy.k.subscribe("clearDirectionArrow", (UU => {
          let {
            id: XU
          } = UU;
          null !== XU && XU !== Wp || rp(null)
        }))], Op.add(XU), XU(qp), () => {
          Op.delete(XU)
        })
      }
      onAfterRender(UU, XU) {
        const zU = performance.now();
        if (this.cues.length > 0) {
          const XU = .55 + .45 * Math.sin(zU / 1100 * Math.PI * 2);
          for (const zU of this.cues) UU.setGameMesh(zU, {
            visibility: XU
          })
        }
        if (zU - this.lastCheckMs < 150) return;
        this.lastCheckMs = zU;
        const cU = this.plans.all().filter((UU => {
            const [zU, cU, yU] = UU.box.ctrl;
            return (!UU.formed || null !== this.plans.layoutOf(UU.box.ctrl)) && (zU - XU[0]) ** 2 + (cU - XU[1]) ** 2 + (yU - XU[2]) ** 2 <= 2304
          })),
          yU = function(UU, XU) {
            const zU = Dp.f.aY,
              cU = new Map;
            for (const QU of XU) {
              const XU = Tz(QU.box, 0),
                AU = Tz(QU.box, Jz(QU.box) - 1),
                FU = [Math.min(XU[0], AU[0]), Math.min(XU[1], AU[1]), Math.min(XU[2], AU[2])].map((UU => Math.floor(UU / zU))),
                oU = [Math.max(XU[0], AU[0]), Math.max(XU[1], AU[1]), Math.max(XU[2], AU[2])].map((UU => Math.floor(UU / zU)));
              for (let zU = FU[0]; zU <= oU[0]; zU++)
                for (let XU = FU[1]; XU <= oU[1]; XU++)
                  for (let QU = FU[2]; QU <= oU[2]; QU++) {
                    var yU;
                    cU.set(`${zU},${XU},${QU}`, null !== (yU = UU.getChunkVersion(zU, XU, QU)) && void 0 !== yU ? yU : -1)
                  }
            }
            return cU
          }(UU, cU);
        this.plans.getVersion() === this.storeVersion && (function(UU, XU) {
          if (UU.size !== XU.size) return !1;
          for (const [zU, cU] of UU)
            if (XU.get(zU) !== cU) return !1;
          return !0
        }(yU, this.chunkVersions) || zU - this.lastRescanMs < 600) || (this.lastRescanMs = zU, this.storeVersion = this.plans.getVersion(), this.chunkVersions = yU, this.redraw(UU, cU))
      }
      dispose(UU) {
        this.unwatch(), qp = null, this.clearMeshes(UU), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(UU, XU) {
        var zU;
        (null === UU || void 0 === UU ? void 0 : UU.join()) === (null === (zU = this.goal) || void 0 === zU ? void 0 : zU.join()) && XU === this.startsBattery || (this.goal = UU, this.startsBattery = XU, this.storeVersion = -1)
      }
      redraw(UU, XU) {
        const zU = XU => wp(UU, XU),
          cU = new Map,
          yU = [],
          QU = this.plans.guideOn();
        for (const DU of XU) {
          const UU = QU && pp(DU, this.plans.showsStarter(DU.box.ctrl), (UU => zU(Tz(DU.box, UU)))),
            XU = "reactor" === DU.kind ? this.plans.layoutOf(DU.box.ctrl) : null,
            AU = QU && !DU.formed ? gp(DU, zU, this.goal) : -1;
          AU >= 0 && yU.push([Tz(DU.box, AU), Bp(DU.box, AU)]);
          const FU = Jz(DU.box);
          for (let yU = 0; yU < FU; yU++) {
            const FU = Tz(DU.box, yU),
              oU = zU(FU),
              EU = null === oU ? null : ap(DU, yU, oU, UU, QU, XU);
            if (null !== EU) {
              const UU = "wrong" !== EU && Gp(DU.box, yU, AU),
                XU = UU ? `${EU}Dim` : EU;
              let zU = cU.get(XU);
              zU || (zU = {
                draw: {
                  ghost: EU,
                  dim: UU
                },
                list: []
              }, cU.set(XU, zU)), zU.list.push(FU)
            }
          }
        }
        if (QU && this.startsBattery && this.goal) {
          const [UU, XU, yU] = this.goal, QU = [];
          for (const [cU, AU, FU] of dp) {
            const oU = [UU + cU, XU + AU, yU + FU];
            "Air" === zU(oU) && QU.push(oU)
          }
          if (QU.length > 0) {
            var AU;
            const UU = null !== (AU = cU.get("cell")) && void 0 !== AU ? AU : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            UU.list.push(...QU), cU.set("cell", UU)
          }
        }
        const FU = [...cU.keys()].sort(),
          oU = [...FU.map((UU => `${UU}:${cU.get(UU).list.join(";")}`)), `cue:${yU.join(";")}`].join("|");
        if (oU !== this.shownKey) {
          this.shownKey = oU, this.clearMeshes(UU);
          for (const XU of FU) {
            const {
              draw: zU,
              list: yU
            } = cU.get(XU);
            this.meshes.push(this.build(UU, zU, yU))
          }
          for (const [XU, zU] of yU) this.cues.push(Np(UU, Cp(XU, zU), Lp))
        }
      }
      build(UU, XU, zU) {
        let {
          ghost: cU,
          dim: yU
        } = XU;
        const {
          size: QU,
          colour: AU,
          alpha: FU
        } = Pp[cU], oU = zU[0], DU = [], EU = [];
        for (const [YU, NU, IU] of zU) Yp(DU, EU, [YU - oU[0] + .5, NU - oU[1] + .5, IU - oU[2] + .5], [QU, QU, QU]);
        return UU.createGameMesh({
          positions: DU,
          indices: EU
        }, {
          rgb: AU,
          alpha: FU * (yU ? .3 : 1)
        }, oU)
      }
      clearMeshes(UU) {
        for (const XU of [...this.meshes, ...this.cues]) UU.disposeGameMesh(XU);
        this.meshes = [], this.cues = []
      }
    }
    const ip = [.56, .83, 1],
      Hp = [1, .3, .25];
    class Mp {
      constructor(UU) {
        this.plans = UU, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(UU, XU, zU) {
        var cU;
        const yU = performance.now();
        if (yU - this.lastCheckMs < 150) return;
        this.lastCheckMs = yU;
        const QU = XU => wp(UU, XU),
          AU = null === (cU = UU.HzU(XU)) || void 0 === cU ? void 0 : cU.name,
          FU = AU && "Reactor Frame" === qz(AU) ? UU.getTargetedBlock() : null,
          oU = FU ? [FU.yt[0], FU.yt[1], FU.yt[2]] : null,
          DU = null !== oU && "Air" === QU(oU) && oU.every(((UU, XU) => Math.abs(UU + .5 - zU[XU]) <= 8)) ? Rp(oU, zU, QU, (UU => this.inPlan(UU))) : null,
          EU = DU ? `${DU.box.ctrl.join()}|${DU.box.rot}|${DU.fits}` : "";
        EU !== this.shownKey && this.show(UU, EU, DU)
      }
      dispose(UU) {
        this.clear(UU), this.shownKey = ""
      }
      inPlan(UU) {
        return this.plans.all().some((XU => hz(XU.box, UU) >= 0))
      }
      show(UU, XU, zU) {
        if (this.clear(UU), this.shownKey = XU, !zU) return;
        const {
          box: cU,
          fits: yU
        } = zU, QU = yU ? ip : Hp, {
          lo: AU,
          hi: FU
        } = Lo(cU);
        this.meshes.push(Np(UU, eo(AU, FU, .05), {
          rgb: QU,
          alpha: 1
        }));
        const oU = [],
          DU = Tz(cU, 0)[1];
        for (let EU = 0; EU < cU.w * cU.d; EU++) {
          const [UU, , XU] = Tz(cU, EU);
          oU.push([
            [UU + .5, DU + .02 + .01, XU + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(Np(UU, oU, {
          rgb: QU,
          alpha: .25
        }))
      }
      clear(UU) {
        for (const XU of this.meshes) UU.disposeGameMesh(XU);
        this.meshes = []
      }
    }
    const vp = "buildAFactory2Game:";

    function Vp(UU, XU, zU) {
      const cU = UU => {
          const [zU, cU, yU] = UU.box.ctrl;
          return zU === XU[0] && cU === XU[1] && yU === XU[2]
        },
        yU = UU.find((UU => cU(UU) || hz(UU.box, XU) >= 0));
      if (!yU) return null;
      const QU = function(UU, XU, zU) {
        const {
          w: cU,
          h: yU,
          d: QU
        } = UU.box, AU = "reactor" === UU.kind ? `${vp}rxTitle` : `${vp}batTitle`;
        if (UU.formed) return {
          key: `${vp}lookPlanFormed`,
          kindKey: AU,
          w: cU,
          h: yU,
          d: QU,
          count: 0
        };
        let FU = 0,
          oU = 0;
        for (let EU = 0; EU < Jz(UU.box); EU++) {
          const XU = zU(Tz(UU.box, EU)),
            cU = null === XU ? "ok" : yc(UU.kind, Uc(UU.box, EU), XU);
          FU += "missing" === cU ? 1 : 0, oU += "wrong" === cU || "blocked" === cU ? 1 : 0
        }
        const DU = function(UU, XU, zU) {
          if (XU < 0 || null === zU) return;
          const cU = Uc(UU.box, XU),
            yU = yc(UU.kind, cU, zU);
          return "blocked" === yU ? `${vp}lookWhy_blocked` : "wrong" === yU ? "ctrl" === cU ? `${vp}lookWhy_ctrl` : `${vp}lookWhy_reactor_${cU}` : void 0
        }(UU, hz(UU.box, XU), zU([XU[0], XU[1], XU[2]]));
        if (FU > 0) return {
          key: `${vp}lookPlanToBuild`,
          kindKey: AU,
          w: cU,
          h: yU,
          d: QU,
          count: FU,
          why: DU
        };
        if (oU > 0) return {
          key: `${vp}lookPlanTakeOut`,
          kindKey: AU,
          w: cU,
          h: yU,
          d: QU,
          count: oU,
          why: DU
        };
        return {
          key: "reactor" === UU.kind ? `${vp}lookPlanNoRods` : `${vp}lookPlanDone`,
          kindKey: AU,
          w: cU,
          h: yU,
          d: QU,
          count: 0
        }
      }(yU, XU, zU);
      return "reactor" === yU.kind && cU(yU) ? {
        ...QU,
        ctrl: !0
      } : QU
    }

    function sp(UU, XU) {
      return UU === XU || null !== UU && null !== XU && UU.key === XU.key && UU.kindKey === XU.kindKey && UU.w === XU.w && UU.h === XU.h && UU.d === XU.d && UU.count === XU.count && UU.why === XU.why && UU.ctrl === XU.ctrl
    }

    function np() {
      return performance.now()
    }
    class mp {
      constructor(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : np;
        this.ticket = UU, this.sent = XU, this.backstopMs = zU, this.now = cU, this.queuedAt = void 0, this.queuedAt = cU()
      }
      answered() {
        const UU = this.now(),
          XU = this.sent.leftAt(this.ticket);
        return null !== XU && UU - XU > 4e3 || UU - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class lp {
      constructor() {
        this.echoes = []
      }
      add(UU) {
        this.echoes = this.echoes.filter((UU => !UU.answered())), this.echoes.push(UU)
      }
      answered() {
        var UU, XU;
        return null === (UU = null === (XU = this.echoes.at(-1)) || void 0 === XU ? void 0 : XU.answered()) || void 0 === UU || UU
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((UU => UU.answered()))
      }
      age() {
        var UU, XU;
        return null !== (UU = null === (XU = this.echoes.at(-1)) || void 0 === XU ? void 0 : XU.age()) && void 0 !== UU ? UU : null
      }
      clear() {
        this.echoes = []
      }
    }
    class xp {
      constructor(UU) {
        this.send = UU, this.value = null, this.sent = null, this.echoes = new lp, this.down = !1, this.timer = null
      }
      shown(UU) {
        return null === this.value ? UU : this.down || this.value !== this.sent ? this.value : UU === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), UU) : this.value
      }
      pendingFor(UU) {
        return null !== this.value && this.value === this.sent && UU !== this.value ? this.echoes.age() : null
      }
      assume(UU, XU) {
        this.disarm(), this.down = !1, this.value = UU, this.sent = UU, this.echoes.clear(), this.echoes.add(XU)
      }
      press() {
        this.down = !0
      }
      drag(UU) {
        this.value = UU, this.arm(this.down ? 1e3 : 400)
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
      arm(UU) {
        this.disarm(), this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), UU)
      }
      disarm() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
    class Jp {
      constructor() {
        this.pending = new Map
      }
      set(UU, XU, zU) {
        var cU;
        const yU = null !== (cU = this.pending.get(UU)) && void 0 !== cU ? cU : {
          on: XU,
          echoes: new lp
        };
        yU.on = XU, yU.echoes.add(zU), this.pending.set(UU, yU)
      }
      shown(UU) {
        let XU = UU;
        for (const [zU, {
            on: cU,
            echoes: yU
          }] of this.pending) 0 !== (UU & zU) === cU && yU.agreeCounts() || yU.answered() ? this.pending.delete(zU) : XU = cU ? XU | zU : XU & ~zU;
        return XU
      }
      pendingMask() {
        let UU = 0;
        for (const XU of this.pending.keys()) UU |= XU;
        return UU
      }
      pendingFor(UU) {
        let XU = null;
        for (const [cU, {
            on: yU,
            echoes: QU
          }] of this.pending) {
          if (void 0 !== UU && 0 !== (UU & cU) === yU) continue;
          const AU = QU.age();
          var zU;
          if (null !== AU) XU = Math.max(null !== (zU = XU) && void 0 !== zU ? zU : 0, AU)
        }
        return XU
      }
      clear() {
        this.pending.clear()
      }
    }
    class jp {
      constructor() {
        this.dims = null, this.echoes = new lp, this.unmet = null
      }
      shown(UU) {
        var XU;
        return this.dims && (Kp(this.dims, UU) && this.echoes.agreeCounts() || this.echoes.answered()) && (Kp(this.dims, UU) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (XU = this.dims) && void 0 !== XU ? XU : UU
      }
      takeUnmet() {
        const UU = this.unmet;
        return this.unmet = null, UU
      }
      set(UU, XU) {
        this.dims = UU, this.echoes.add(XU)
      }
      pendingFor(UU) {
        return null === this.dims || UU && Kp(this.dims, UU) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function Kp(UU, XU) {
      return UU[0] === XU[0] && UU[1] === XU[1] && UU[2] === XU[2]
    }
    class bp {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : np;
        this.now = UU, this.taps = new Map
      }
      tap(UU, XU, zU) {
        return !this.busy(UU) && (this.taps.set(UU, {
          at: this.now(),
          done: XU
        }), zU(), !0)
      }
      settle(UU) {
        for (const [XU, zU] of [...this.taps]) zU.done(UU) && this.taps.delete(XU)
      }
      busy(UU) {
        const XU = this.taps.get(UU);
        return !!XU && (!(this.now() - XU.at >= 3e3) || (this.taps.delete(UU), !1))
      }
      busyIds() {
        const UU = new Set;
        for (const XU of [...this.taps.keys()]) this.busy(XU) && UU.add(XU);
        return UU
      }
      clear() {
        this.taps.clear()
      }
    }

    function Tp(UU) {
      return {
        send: XU => UU.track(XU),
        sendUrgent: (XU, zU) => UU.track(XU, {
          urgent: !0,
          supersedes: zU
        }),
        leftAt: XU => UU.leftAt(XU),
        holdReserve: () => UU.holdUrgentReserve(),
        answerMs: eA
      }
    }

    function hp() {
      return performance.now()
    }

    function Ua(UU) {
      const XU = UU.baf2RxNeed.map((UU => {
        let [XU, zU] = UU;
        return [XU, zU]
      }));
      return JSON.stringify([UU.baf2RxFormed, XU, UU.baf2RxBad, UU.baf2RxCells])
    }

    function Xa(UU, XU) {
      const zU = 0 !== (XU & NX),
        cU = 0 !== (UU.baf2RxFlags & NX);
      return !zU || cU || "running" !== UU.baf2RxState && "idle" !== UU.baf2RxState ? !zU && cU && "scram" === UU.baf2RxState && UU.baf2RxFuel > 0 ? "idle" : UU.baf2RxState : "scram"
    }

    function za(UU) {
      return JSON.stringify([UU.baf2BatFormed, UU.baf2BatNeed, UU.baf2BatBad])
    }

    function ca(UU) {
      return UU.join(",")
    }
    class ya {
      constructor() {
        this.listeners = new Set
      }
      subscribe(UU) {
        return this.listeners.add(UU), () => {
          this.listeners.delete(UU)
        }
      }
      notify() {
        for (const UU of this.listeners) UU()
      }
      clear() {
        this.listeners.clear()
      }
    }
    class Qa {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(UU, XU) {
        this.lastAt = UU, this.lastUntil = UU + XU
      }
      answered(UU) {
        return this.lastAt >= UU || UU < this.lastUntil
      }
    }
    class Aa {
      constructor(UU, XU) {
        this.link = UU, this.now = XU, this.hold = new jp, this.picked = null, this.notTaken = null
      }
      shown(UU) {
        const XU = this.hold.shown(UU);
        if (this.hold.takeUnmet() && this.picked) {
          var zU;
          const {
            plans: XU,
            ctrl: cU,
            at: yU
          } = this.picked;
          this.picked = null, XU.unpredict(cU), null === (zU = this.notTaken) || void 0 === zU || zU.call(this, UU, yU)
        }
        return XU
      }
      pendingFor(UU) {
        return this.hold.pendingFor(UU)
      }
      DI(UU, XU, zU) {
        UU.predictSize(XU, zU), this.picked = {
          plans: UU,
          ctrl: XU,
          at: this.now()
        };
        const cU = this.link.send(YX(XU, "plan", ...zU));
        this.hold.set(zU, new mp(cU, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class Fa {
      constructor(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : hp;
        this.plans = UU, this.readInterior = XU, this.link = zU, this.now = cU, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new Jp, this.throttle = void 0, this.oneShots = void 0, this.listeners = new ya, this.redraw = null, this.releaseReserve = null, this.size = new Aa(zU, cU), this.oneShots = new bp(cU), this.throttle = new xp((UU => this.echo(this.link.send(this.command("throttle", UU)))))
      }
      set(UU) {
        !UU.baf2RxOpen && this.raw && ca(this.raw.baf2RxAt) === ca(UU.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(UU), this.UY(UU)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(UU) {
        this.size.notTaken = UU
      }
      resize(UU) {
        this.raw && (this.size.DI(this.plans, this.raw.baf2RxAt, UU), this.UY(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const UU = this.raw.baf2RxAt;
        this.plans.setStarter(UU, !this.plans.showsStarter(UU)), this.UY(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.UY(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.UY(this.raw)
      }
      send(UU) {
        if (this.raw) {
          for (var XU = arguments.length, zU = new Array(XU > 1 ? XU - 1 : 0), cU = 1; cU < XU; cU++) zU[cU - 1] = arguments[cU];
          this.link.send(this.command(UU, ...zU))
        }
      }
      tap(UU, XU) {
        this.raw && this.oneShots.tap(UU, function(UU, XU) {
          if ("start" === UU) return UU => 0 === (UU.baf2RxFlags & NX);
          if ("odConfirm" === UU) return UU => 0 !== (UU.baf2RxFlags & IX);
          const zU = Ua(XU);
          return UU => Ua(UU) !== zU
        }(UU, this.raw), XU) && ("start" === UU && (this.startedAt = this.now()), this.UY(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(NX, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(UU, XU) {
        if (!this.raw) return;
        const zU = UU === NX ? this.command(XU ? "scram" : "start") : this.command("od", XU ? 1 : 0),
          cU = XU && UU === NX,
          yU = `${EX} ${this.raw.baf2RxAt.join(" ")} `,
          QU = this.echo(cU ? this.link.sendUrgent(zU, (UU => {
            const XU = UU.startsWith(yU) ? UU.slice(yU.length).split(" ")[0] : null;
            return "throttle" === XU || "start" === XU
          })) : this.link.send(zU));
        this.flags.set(UU, XU, QU), cU && this.throttle.assume(0, QU), this.UY(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(UU) {
        this.throttle.drag(UU), this.raw && this.UY(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.UY(this.raw)
      }
      subscribe(UU) {
        return this.listeners.subscribe(UU)
      }
      opened() {
        this.releaseReserve ??= this.link.holdReserve()
      }
      closed() {
        var UU;
        this.throttle.release(), null === (UU = this.releaseReserve) || void 0 === UU || UU.call(this), this.releaseReserve = null
      }
      dispose() {
        this.closed(), this.throttle.clear(), this.flags.clear(), this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.raw = null, this.looksOf = null, this.listeners.clear()
      }
      command(UU) {
        for (var XU = arguments.length, zU = new Array(XU > 1 ? XU - 1 : 0), cU = 1; cU < XU; cU++) zU[cU - 1] = arguments[cU];
        return YX(this.raw.baf2RxAt, UU, ...zU)
      }
      echo(UU) {
        return new mp(UU, this.link, this.link.answerMs, this.now)
      }
      UY(UU) {
        var XU;
        this.raw = UU;
        const zU = this.flags.shown(UU.baf2RxFlags),
          cU = {
            ...UU,
            baf2RxFlags: zU,
            baf2RxTarget: this.throttle.shown(UU.baf2RxTarget),
            baf2RxState: Xa(UU, zU)
          },
          yU = this.size.shown(cU.baf2RxDims),
          QU = this.throttle.pendingFor(),
          AU = [this.throttle.pendingFor(UU.baf2RxTarget), this.flags.pendingFor(UU.baf2RxFlags), this.size.pendingFor(UU.baf2RxDims)].filter((UU => null !== UU)),
          FU = AU.length > 0 ? Math.max(...AU) : null,
          oU = this.oneShots.busyIds(),
          DU = cU.baf2RxAt;
        let EU, YU, NU = null,
          IU = [Math.max(0, yU[0] - 2), Math.max(0, yU[1] - 2), Math.max(0, yU[2] - 2)];
        if (cU.baf2RxFormed) {
          const [UU, XU, zU] = cU.baf2RxDims;
          IU = [Math.max(0, UU - 2), Math.max(0, XU - 2), Math.max(0, zU - 2)], EU = Array.from(cU.baf2RxCells, Number), YU = `${IU.join(",")}:${cU.baf2RxCells}`
        } else {
          var pU;
          const UU = null === (pU = this.plans.planAt(DU)) || void 0 === pU ? void 0 : pU.box,
            XU = UU ? mz(UU, "reactor", ...yU) : sz(DU, 1, ...yU, nz("reactor", yU[0])),
            zU = this.readInterior(XU);
          NU = JF(IU, zU), EU = zU, YU = `${IU.join(",")}:${zU.join("")}`
        }(null === (XU = this.looksOf) || void 0 === XU ? void 0 : XU.key) !== YU && (this.looksOf = {
          key: YU,
          looks: Uo(IU, EU)
        }), this.view = {
          status: cU,
          dims: yU,
          plan: NU,
          inner: IU,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(DU),
          odConfirmed: this.odConfirmed || 0 !== (cU.baf2RxFlags & GX),
          guide: this.plans.guideOn(),
          throttlePending: null !== QU,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== FU && FU >= 5e3,
          busy: oU,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== FU || oU.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.UY(this.raw)
        }), 250))
      }
    }
    class oa {
      constructor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : hp;
        this.plans = UU, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new ya, this.redraw = null, this.size = new Aa(XU, zU), this.oneShots = new bp(zU)
      }
      set(UU) {
        !UU.baf2BatOpen && this.view && ca(this.view.status.baf2BatAt) === ca(UU.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(UU), this.UY(UU)
      }
      tap(UU, XU) {
        if (!this.view) return;
        const zU = za(this.view.status);
        this.oneShots.tap(UU, (UU => za(UU) !== zU), XU) && this.UY(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(UU) {
        this.size.notTaken = UU
      }
      resize(UU) {
        this.view && (this.size.DI(this.plans, this.view.status.baf2BatAt, UU), this.UY(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.UY(this.view.status)
      }
      subscribe(UU) {
        return this.listeners.subscribe(UU)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      UY(UU) {
        const XU = this.size.shown(UU.baf2BatDims),
          zU = this.oneShots.busyIds();
        this.view = {
          status: UU,
          dims: XU,
          xY: po(XU, UU.baf2BatDims) ? UU.baf2BatCapacity : co(...XU),
          guide: this.plans.guideOn(),
          busy: zU
        }, this.listeners.notify(), zU.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.UY(this.view.status)
        }), 250))
      }
    }
    const Da = "buildAFactory2Game:";

    function Ea() {
      var UU;
      const XU = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!XU) return null;
      const zU = XU.querySelector(".ExitButton");
      return function(UU, XU) {
        const zU = XU ? XU.left - 8 : UU.right;
        return {
          left: UU.left,
          top: UU.top,
          width: Math.max(0, zU - UU.left),
          height: UU.height
        }
      }(XU.getBoundingClientRect(), null !== (UU = null === zU || void 0 === zU ? void 0 : zU.getBoundingClientRect()) && void 0 !== UU ? UU : null)
    }
    const Ya = (0, cU.memo)((function(UU) {
      let {
        store: XU
      } = UU;
      const {
        t: zU
      } = (0, Wy.I)(), [yU, QU] = (0, cU.useState)((() => XU.get())), [AU, FU] = (0, cU.useState)((() => performance.now()));
      (0, cU.useEffect)((() => (QU(XU.get()), XU.subscribe((() => {
        QU(XU.get()), FU(performance.now())
      })))), [XU]);
      const {
        alarm: oU,
        boomAt: DU
      } = yU, EU = null !== oU && null !== oU.secs, [YU, NU] = (0, cU.useState)(null);
      (0, cU.useEffect)((() => {
        if (!EU) return;
        NU(Ea());
        const UU = setInterval((() => {
          FU(performance.now()), NU(Ea())
        }), 250);
        return () => {
          clearInterval(UU)
        }
      }), [EU]);
      const [IU, pU] = (0, cU.useState)(!1);
      return (0, cU.useEffect)((() => {
        if (DU === -1 / 0) return;
        pU(!0);
        const UU = setTimeout((() => {
          pU(!1)
        }), 1300);
        return () => {
          clearTimeout(UU)
        }
      }), [DU]), (0, GQ.jsxs)(GQ.Fragment, {
        children: [null !== oU && (0, GQ.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: zU(oU.hot ? `${Da}rxAlarmSiren` : `${Da}rxAlarmDamaged`, {
            amount: String(oU.damage)
          })
        }), null !== oU && null !== oU.secs && (0, GQ.jsx)("div", {
          className: YU ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== YU && void 0 !== YU ? YU : void 0,
          "aria-live": "assertive",
          children: zU(`${Da}rxAlarmCountdown`, {
            amount: String((aU = oU.secs, tU = AU - oU.receivedAt, Math.max(1, Math.ceil(aU - tU / 1e3))))
          })
        }), IU && (0, GQ.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var aU, tU
    }));
    class Na {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      iG(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const zU = UU.baf2RxAlarmAt.join(",");
        let cU = this.snapshot.boomAt;
        if (UU.baf2RxAlarmBoom) this.byReactor.delete(zU), cU = XU;
        else if (UU.baf2RxAlarmDamage <= 0) this.byReactor.delete(zU);
        else {
          var yU;
          this.byReactor.set(zU, {
            damage: UU.baf2RxAlarmDamage,
            secs: null !== (yU = UU.baf2RxAlarmSecs) && void 0 !== yU ? yU : null,
            hot: !0 === UU.baf2RxAlarmHot,
            receivedAt: XU
          })
        }
        this.UY(cU)
      }
      retain(UU) {
        let XU = !1;
        for (const zU of [...this.byReactor.keys()]) UU.has(zU) || (this.byReactor.delete(zU), XU = !0);
        XU && this.UY(this.snapshot.boomAt)
      }
      has(UU) {
        return this.byReactor.has(UU)
      }
      get() {
        return this.snapshot
      }
      subscribe(UU) {
        return this.listeners.add(UU), () => {
          this.listeners.delete(UU)
        }
      }
      dispose() {
        this.listeners.clear(), this.byReactor.clear()
      }
      UY(UU) {
        let XU = null;
        for (const zU of this.byReactor.values())(!XU || zU.damage > XU.damage) && (XU = zU);
        this.snapshot = {
          alarm: XU,
          boomAt: UU
        };
        for (const zU of this.listeners) zU()
      }
    }
    const Ia = {
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

    function pa(UU) {
      return [UU[0], UU[1], UU[2]]
    }

    function aa(UU) {
      return `${UU[0]},${UU[1]},${UU[2]}`
    }
    class ta {
      constructor(UU) {
        if (this.plans = UU, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var UU;
            return {
              active: this.glows.flatMap((UU => {
                let {
                  record: XU
                } = UU;
                return XU ? [XU] : []
              })),
              log: [...null !== (UU = this.devLog) && void 0 !== UU ? UU : []]
            }
          }, this.devLog && "undefined" !== typeof window) {
          window.baf2Glows = this.devAccessor
        }
      }
      glowLog() {
        var UU;
        return null !== (UU = this.devLog) && void 0 !== UU ? UU : []
      }
      check(UU, XU, zU) {
        const cU = new Set(XU.map((UU => aa(UU.box.ctrl))));
        for (const AU of function(UU, XU) {
            const zU = [],
              cU = new Map(UU);
            UU.clear();
            for (const yU of XU) {
              const XU = Ap(yU.box.ctrl),
                QU = yU.formed ? yU.level : 0;
              UU.set(XU, QU), QU > 0 && 0 === cU.get(XU) && zU.push(yU)
            }
            return zU
          }(this.levels, this.plans.all())) cU.has(aa(AU.box.ctrl)) && this.show(UU, AU, "on", zU);
        const yU = this.plans.lastFormed();
        if (null === yU || yU.receivedAt <= this.flashedAt) return null;
        this.flashedAt = yU.receivedAt;
        const QU = function(UU, XU) {
          var zU;
          const cU = Ap(UU);
          return null !== (zU = XU.find((UU => Ap(UU.box.ctrl) === cU))) && void 0 !== zU ? zU : null
        }(yU.ctrl, XU);
        return QU && this.show(UU, QU, "formed", zU), QU
      }
      fade(UU, XU) {
        0 !== this.glows.length && (this.glows = this.glows.filter((zU => {
          let {
            mesh: cU,
            glow: yU,
            startMs: QU,
            record: AU
          } = zU;
          const FU = (XU - QU) / Ia[yU].ms;
          return FU >= 1 ? (UU.disposeGameMesh(cU), AU && (AU.endMs = XU), !1) : (UU.setGameMesh(cU, {
            visibility: "formed" === yU ? 1 - FU : Math.sin(Math.PI * FU)
          }), !0)
        })))
      }
      dispose(UU) {
        for (const {
            mesh: zU
          }
          of this.glows) UU.disposeGameMesh(zU);
        this.glows = [], this.levels.clear();
        const XU = "undefined" !== typeof window ? window : null;
        (null === XU || void 0 === XU ? void 0 : XU.baf2Glows) === this.devAccessor && delete XU.baf2Glows
      }
      show(UU, XU, zU, cU) {
        const {
          lo: yU,
          hi: QU
        } = Lo(XU.box);
        let AU = null;
        this.devLog && (AU = {
          glow: zU,
          ctrl: pa(XU.box.ctrl),
          lo: pa(yU),
          hi: pa(QU),
          startMs: cU,
          endMs: null
        }, this.devLog.push(AU), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(UU, zU, eo(yU, QU, Ia[zU].thick)),
          glow: zU,
          startMs: cU,
          record: AU
        })
      }
      build(UU, XU, zU) {
        const cU = Np(UU, zU, {
          rgb: Ia[XU].colour,
          alpha: 1
        });
        return UU.setGameMesh(cU, {
          visibility: 0
        }), cU
      }
    }
    const ga = 1 / .6,
      ka = {
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
        blendMode: CF.f.Standard,
        soft: !0
      },
      Ga = {
        ...ka,
        size: [.25, .4],
        count: 2
      };

    function Ba(UU) {
      return {
        colours: [UU, UU],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: CF.f.Add,
        soft: !1
      }
    }
    const Za = Ba([150, 225, 255]),
      Ra = Ba([185, 145, 255]),
      Pa = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function Wa(UU) {
      const XU = rX[UU];
      return null === XU.fuelSlot || yz(XU) ? Pa.includes(UU) ? Ra : Za : ka
    }
    const da = {
        kind: "smokePuff"
      },
      La = [.2, .025, .2];

    function ea(UU, XU) {
      const [
        [zU, cU, yU],
        [QU, AU, FU]
      ] = UU.colours;
      return {
        texture: UU.soft ? da : "square_particle",
        xY: XU,
        minLifeTime: UU.life[0] / ga,
        maxLifeTime: UU.life[1] / ga,
        minEmitPower: UU.power[0] * ga,
        maxEmitPower: UU.power[1] * ga,
        minSize: UU.size[0],
        maxSize: UU.size[1],
        emitRate: 0,
        gravity: [0, UU.lift * ga * ga, 0],
        dir1: [-UU.spread, 1, -UU.spread],
        dir2: [UU.spread, 1, UU.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [zU, cU, yU, UU.alpha],
          maxColor: [QU, AU, FU, UU.alpha]
        }, {
          timeFraction: 1,
          minColor: [zU, cU, yU, 0],
          maxColor: [QU, AU, FU, 0]
        }],
        blendMode: UU.blendMode
      }
    }
    class Ca {
      constructor(UU) {
        this.fixed = UU, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(UU, XU, zU) {
        var cU;
        if (zU === this.lastFrame) return !1;
        this.lastFrame = zU;
        const yU = this.at;
        yU[0] = XU[0] + .5, yU[1] = XU[1] + 1.025, yU[2] = XU[2] + .5;
        const QU = null !== (cU = this.fixed) && void 0 !== cU ? cU : FU() ? Ga : ka;
        let AU = this.particles.get(QU);
        return AU || (AU = UU.createParticles(function(UU) {
          return ea(UU, Math.ceil(12 * UU.count * UU.life[1]) + UU.count)
        }(QU), {
          pos: yU,
          half: La
        }), this.particles.set(QU, AU)), AU.moveTo(yU), AU.emit(QU.count), !0
      }
      dispose() {
        for (const UU of this.particles.values()) UU.stop();
        this.particles.clear()
      }
    }
    class wa {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(UU) {
        this.indexed = !0;
        for (const XU of eX) {
          const zU = Wa(XU);
          for (let cU = 1; cU <= 4; cU++) {
            const yU = UU.blockNameToBlockId(`${XU}|meta|rot${cU}|Running`, !0);
            if (null === yU) continue;
            let QU = this.pufferIndexByStyle.get(zU);
            void 0 === QU && (QU = this.pufferList.push(new Ca(zU === ka ? null : zU)) - 1, this.pufferIndexByStyle.set(zU, QU)), this.pufferIndexById[yU] = QU + 1
          }
        }
      }
      onAfterRender(UU, XU) {
        this.indexed || this.index(UU);
        const zU = performance.now(),
          cU = 0 === this.lastMs ? 0 : Math.min(zU - this.lastMs, 250) / 1e3;
        this.lastMs = zU, this.frame++, UU.particlesEnabled() ? (this.scan(UU, XU), this.puff(UU, cU)) : this.sources = []
      }
      dispose() {
        for (const UU of this.pufferList) UU.dispose();
        this.sources = [], this.found = []
      }
      scan(UU, XU) {
        0 === this.scanRow && (this.origin = [Math.floor(XU[0]) - 12, Math.floor(XU[1]) - 6, Math.floor(XU[2]) - 12]);
        const zU = Math.min(this.scanRow + 16, 325),
          [cU, yU, QU] = this.origin,
          AU = this.hits;
        AU.length = 0;
        for (let FU = this.scanRow; FU < zU; FU++) {
          const XU = cU + FU % 25,
            zU = yU + Math.floor(FU / 25);
          UU.scanBlocks(XU, zU, QU, XU + 1, zU + 1, QU + 25, this.pufferIndexById, AU)
        }
        for (let FU = 0; FU < AU.length; FU += 4) {
          const UU = AU[FU + 3];
          this.found.push({
            pos: [AU[FU], AU[FU + 1], AU[FU + 2]],
            yF: UU,
            puffer: this.pufferList[this.pufferIndexById[UU] - 1]
          })
        }
        this.scanRow = zU, 325 === zU && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(UU, XU) {
        const zU = this.sources.length;
        if (0 !== zU) {
          this.budget = Math.min(this.budget + Math.min(zU / 1.2, 12) * XU, 2);
          for (let XU = 0; XU < zU && this.budget >= 1; XU++) {
            const XU = this.sources[this.cursor % zU];
            this.cursor = (this.cursor + 1) % zU, UU.getBlockId(XU.pos[0], XU.pos[1], XU.pos[2]) === XU.yF && (XU.puffer.puff(UU, XU.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const qa = {
        ...Ba([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      Oa = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function Sa(UU) {
      return 0 === UU.spots.length ? 0 : Math.min(1 * UU.level, 4)
    }

    function ra(UU) {
      return 0 === UU.glass.length ? 0 : Math.min(.75 * UU.level, 3)
    }

    function ua(UU) {
      return `${UU.ctrl.join(",")}:${UU.rot}:${UU.cu},${UU.cv}:${UU.w},${UU.h},${UU.d}`
    }

    function fa(UU, XU) {
      const zU = XU.w - 2,
        cU = XU.h - 2,
        yU = XU.d - 2,
        QU = [];
      for (let AU = 0; AU < zU * cU * yU; AU++) {
        const FU = AU % zU,
          oU = Math.floor(AU / zU) % yU,
          DU = Math.floor(AU / (zU * yU));
        if (FU > 0 && FU < zU - 1 && oU > 0 && oU < yU - 1 && DU > 0 && DU < cU - 1) continue;
        const EU = Tz(XU, zc(XU, AU)),
          YU = wp(UU, EU);
        if (null !== YU && "Fuel Rod" === qz(YU))
          for (const XU of Oa) {
            const zU = [EU[0] + XU[0], EU[1] + XU[1], EU[2] + XU[2]];
            Ha(UU, zU) && QU.push(Ma(zU, XU))
          }
      }
      return QU
    }

    function ia(UU, XU) {
      const {
        lo: zU,
        hi: cU
      } = Lo(XU), yU = [];
      for (let QU = zU[0]; QU < cU[0]; QU++)
        for (let XU = zU[1]; XU < cU[1]; XU++) {
          const AU = QU === zU[0] || QU === cU[0] - 1 || XU === zU[1] || XU === cU[1] - 1 ? 1 : Math.max(1, cU[2] - 1 - zU[2]);
          for (let FU = zU[2]; FU < cU[2]; FU += AU) {
            const AU = [QU, XU, FU];
            if (!Ha(UU, AU)) continue;
            const oU = QU === zU[0] ? Oa[1] : QU === cU[0] - 1 ? Oa[0] : FU === zU[2] ? Oa[5] : FU === cU[2] - 1 ? Oa[4] : XU === zU[1] ? Oa[3] : Oa[2];
            yU.push(Ma(AU, oU))
          }
        }
      return yU
    }

    function Ha(UU, XU) {
      const zU = wp(UU, XU);
      return null !== zU && "Reactor Glass" === qz(zU)
    }

    function Ma(UU, XU) {
      return [
        [UU[0] + .5 + .55 * XU[0], UU[1] + .5 + .55 * XU[1], UU[2] + .5 + .55 * XU[2]],
        [0 === XU[0] ? .4 : .02, 0 === XU[1] ? .4 : .02, 0 === XU[2] ? .4 : .02]
      ]
    }
    class va {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(UU, XU, zU, cU) {
        const yU = [],
          QU = new Set;
        for (const DU of XU) {
          var AU, FU, oU;
          const {
            box: XU
          } = DU;
          if ("reactor" !== DU.kind || DU.level <= 0 || (XU.ctrl[0] - zU[0]) ** 2 + (XU.ctrl[1] - zU[1]) ** 2 + (XU.ctrl[2] - zU[2]) ** 2 > 576) continue;
          const EU = ua(XU);
          QU.add(EU);
          let YU = this.spots.get(EU);
          if ((!YU || cU - YU.at > 3e3) && (YU = {
              at: cU,
              spots: fa(UU, XU),
              glass: ia(UU, XU)
            }, this.spots.set(EU, YU)), 0 === YU.spots.length && 0 === YU.glass.length) continue;
          const NU = this.sparking.find((UU => UU.key === EU));
          yU.push({
            key: EU,
            level: DU.level,
            spots: YU.spots,
            glass: YU.glass,
            budget: null !== (AU = null === NU || void 0 === NU ? void 0 : NU.budget) && void 0 !== AU ? AU : 0,
            cursor: null !== (FU = null === NU || void 0 === NU ? void 0 : NU.cursor) && void 0 !== FU ? FU : 0,
            glassBudget: null !== (oU = null === NU || void 0 === NU ? void 0 : NU.glassBudget) && void 0 !== oU ? oU : 0
          })
        }
        for (const DU of this.spots.keys()) QU.has(DU) || this.spots.delete(DU);
        this.sparking = yU
      }
      emit(UU, XU, zU) {
        var cU;
        if (0 === this.sparking.length || !UU.particlesEnabled() || zU === this.lastFrame) return;
        this.lastFrame = zU;
        let yU = 0,
          QU = 0;
        for (const pU of this.sparking) yU += Sa(pU), QU += ra(pU);
        const AU = yU > 8 ? 8 / yU : 1,
          FU = QU > 6 ? 6 / QU : 1;
        let oU, DU = null,
          EU = null;
        for (const pU of this.sparking) pU.budget = Math.min(pU.budget + Sa(pU) * AU * XU, 2), pU.budget >= 1 && (!DU || pU.budget > DU.budget) && (DU = pU), pU.glassBudget = Math.min(pU.glassBudget + ra(pU) * FU * XU, 2), pU.glassBudget >= 1 && (!EU || pU.glassBudget > EU.glassBudget) && (EU = pU);
        if (DU) DU.budget--, oU = DU.spots[DU.cursor++ % DU.spots.length];
        else {
          if (!EU) return;
          EU.glassBudget--, oU = EU.glass[Math.floor(Math.random() * EU.glass.length)]
        }
        const [YU, NU] = oU, IU = null !== (cU = this.emitter) && void 0 !== cU ? cU : this.create(UU, YU, NU);
        IU.moveTo(YU, NU), IU.emit(qa.count)
      }
      dispose() {
        var UU;
        null === (UU = this.emitter) || void 0 === UU || UU.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(UU, XU, zU) {
        const cU = Math.ceil(14 * qa.count * qa.life[1]) + qa.count;
        return this.emitter = UU.createParticles(ea(qa, cU), {
          pos: XU,
          half: zU
        }), this.emitter
      }
    }
    const Va = [2, 3.2],
      sa = 1 / 3,
      na = 1 / .6,
      ma = {
        texture: da,
        xY: Math.ceil(18 * Va[1]) + 4,
        minLifeTime: Va[0] / na,
        maxLifeTime: Va[1] / na,
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
        blendMode: CF.f.Standard
      };
    class la {
      constructor(UU) {
        this.plans = UU, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new va, this.frame = 0, this.outline = new ta(UU)
      }
      onAfterRender(UU, XU, zU) {
        const cU = performance.now(),
          yU = 0 === this.lastMs ? 0 : Math.min(cU - this.lastMs, 250) / 1e3;
        if (this.lastMs = cU, this.outline.fade(UU, cU), this.puff(UU, yU, zU), this.sparks.emit(UU, yU, this.frame++), cU - this.lastCheckMs < 150) return;
        this.lastCheckMs = cU;
        const QU = this.plans.all().filter((UU => UU.formed && xa(UU.box.ctrl, zU) <= 4096));
        this.plumes = QU.filter((UU => "reactor" === UU.kind && UU.level > 0)).map((UU => ({
          box: UU.box,
          level: UU.level
        }))), this.updateHums(UU, XU, QU, zU), this.sparks.update(UU, QU, zU, cU), this.chimeFormed(UU, XU, QU, cU)
      }
      dispose(UU) {
        var XU;
        this.outline.dispose(UU), null === (XU = this.steam) || void 0 === XU || XU.dispose(), this.steam = null, this.sparks.dispose();
        for (const zU of this.hums.values()) zU.stop();
        this.hums.clear()
      }
      chimeFormed(UU, XU, zU, cU) {
        const yU = this.outline.check(UU, zU, cU);
        yU && UU.playSound(XU, "exp_levelup", .6, 1, {
          qy: [yU.box.ctrl[0] + .5, yU.box.ctrl[1], yU.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(UU, XU, zU) {
        const cU = this.plumes;
        if (0 === cU.length || !UU.particlesEnabled()) return void(this.plumeBudget = 0);
        const yU = cU.reduce(((UU, XU) => UU + 3 * XU.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + yU * XU, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let QU = this.plumeCursor % (yU / 3);
        this.plumeCursor++;
        let AU = cU[0];
        for (const YU of cU) {
          if (QU < YU.level) {
            AU = YU;
            break
          }
          QU -= YU.level
        }
        const {
          lo: FU,
          hi: oU
        } = Lo(AU.box);
        if (function(UU, XU, zU) {
            const cU = Math.max(UU[0] - zU[0], 0, zU[0] - XU[0]),
              yU = Math.max(UU[2] - zU[2], 0, zU[2] - XU[2]);
            return Math.hypot(cU, zU[1] - XU[1], yU)
          }(FU, oU, zU) < 6 && Math.random() > sa) return;
        const DU = [(FU[0] + oU[0]) / 2, oU[1] + .05, (FU[2] + oU[2]) / 2],
          EU = [(oU[0] - FU[0]) / 2 - .5, .05, (oU[2] - FU[2]) / 2 - .5];
        this.steam ??= UU.createParticles(ma, {
          pos: DU,
          half: EU
        }), this.steam.moveTo(DU, EU), this.steam.emit(1)
      }
      updateHums(UU, XU, zU, cU) {
        const yU = new Map;
        for (const AU of zU) "reactor" === AU.kind && AU.level > 0 && xa(AU.box.ctrl, cU) <= 576 && yU.set(`${QU=AU.box.ctrl,`${QU[0]},${QU[1]},${QU[2]}`}:${AU.level}`, AU);
        var QU;
        for (const [AU, FU] of this.hums) yU.has(AU) || (FU.stop(), this.hums.delete(AU));
        for (const [AU, FU] of yU) {
          if (this.hums.has(AU)) continue;
          const {
            lo: zU,
            hi: cU
          } = Lo(FU.box), yU = [(zU[0] + cU[0]) / 2, zU[1], (zU[2] + cU[2]) / 2], QU = UU.playSound(XU, "rocketEngineLoop", .08 + .06 * FU.level, .55, {
            qy: yU,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          QU && this.hums.set(AU, QU)
        }
      }
    }

    function xa(UU, XU) {
      return (UU[0] - XU[0]) ** 2 + (UU[1] - XU[1]) ** 2 + (UU[2] - XU[2]) ** 2
    }
    class Ja {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      iG(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const cU = [UU.baf2BombAt[0], UU.baf2BombAt[1], UU.baf2BombAt[2]],
          yU = UU.baf2BombR;
        if (UU.baf2BombBoom) {
          const UU = Math.hypot(XU[0] - cU[0], XU[1] - cU[1], XU[2] - cU[2]);
          this.UY({
            fuse: null,
            blast: {
              at: cU,
              r: yU,
              receivedAt: zU,
              distance: UU,
              flash: UU <= 3 * yU
            }
          })
        } else this.UY({
          ...this.snapshot,
          fuse: UU.baf2BombMs > 0 ? {
            at: cU,
            r: yU,
            endsAt: zU + UU.baf2BombMs
          } : null
        })
      }
      get() {
        return this.snapshot
      }
      subscribe(UU) {
        return this.listeners.add(UU), () => {
          this.listeners.delete(UU)
        }
      }
      dispose() {
        this.listeners.clear(), this.snapshot = {
          fuse: null,
          blast: null
        }
      }
      UY(UU) {
        this.snapshot = UU;
        for (const XU of this.listeners) XU()
      }
    }
    const ja = (0, cU.memo)((function(UU) {
      var XU;
      let {
        store: zU
      } = UU;
      const {
        t: yU
      } = (0, Wy.I)(), [QU, AU] = (0, cU.useState)((() => zU.get())), [FU, oU] = (0, cU.useState)((() => performance.now()));
      (0, cU.useEffect)((() => (AU(zU.get()), zU.subscribe((() => {
        AU(zU.get()), oU(performance.now())
      })))), [zU]);
      const {
        fuse: DU,
        blast: EU
      } = QU;
      (0, cU.useEffect)((() => {
        if (!DU) return;
        const UU = setInterval((() => {
          oU(performance.now())
        }), 250);
        return () => {
          clearInterval(UU)
        }
      }), [DU]);
      const [YU, NU] = (0, cU.useState)(!1);
      (0, cU.useEffect)((() => {
        if (null === EU || void 0 === EU || !EU.flash) return;
        NU(!0);
        const UU = setTimeout((() => {
          NU(!1)
        }), 2500);
        return () => {
          clearTimeout(UU)
        }
      }), [EU]);
      const IU = DU ? function(UU, XU) {
        return UU.endsAt <= XU ? 0 : Math.ceil((UU.endsAt - XU) / 1e3)
      }(DU, FU) : 0;
      return (0, GQ.jsxs)(GQ.Fragment, {
        children: [IU > 0 && (0, GQ.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: yU("buildAFactory2Game:bombCountdown", {
            amount: String(IU),
            radius: String(null !== (XU = null === DU || void 0 === DU ? void 0 : DU.r) && void 0 !== XU ? XU : 0)
          })
        }), YU && (0, GQ.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function Ka(UU) {
      const XU = Math.min(4, Math.max(1, UU / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * UU / 4)),
        capSpread: Math.min(5 * UU / 8, 24 * XU),
        capThick: 6 * XU,
        stemHalfWidth: 3 * XU,
        puffScale: XU
      }
    }
    class ba {
      constructor() {
        this.uD = !1
      }
      hold(UU) {
        UU.getCameraFar() < 1e3 && (UU.setCameraFar(1e3), this.uD = !0)
      }
      release(UU) {
        this.uD && (this.uD = !1, UU.setCameraFar(null))
      }
    }
    const Ta = 1 / .6,
      ha = [.2, .1, .2],
      Ut = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      Xt = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: CF.f.Standard,
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
      zt = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: CF.f.Standard,
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
      ct = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: CF.f.Standard,
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
      yt = {
        texture: da,
        xY: Math.ceil(120) + 4,
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
        blendMode: CF.f.Add
      };
    class Qt {
      constructor(UU) {
        this.store = UU, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new ba, this.timers = []
      }
      onAfterRender(UU, XU) {
        const zU = performance.now(),
          cU = 0 === this.lastMs ? 0 : Math.min(zU - this.lastMs, 250) / 1e3;
        this.lastMs = zU;
        const {
          fuse: yU,
          blast: QU
        } = this.store.get();
        null !== QU && QU !== this.shownBlast && (this.shownBlast = QU, this.startBlast(UU, XU, QU, zU));
        const AU = UU.particlesEnabled();
        null !== yU && yU.endsAt > zU && AU ? this.emitBeacon(UU, yU, cU, zU) : this.beaconBudget = 0, null !== this.cloud && (zU - this.cloud.startMs > 33e3 ? this.disposeCloud(UU) : (this.far.hold(UU), AU && this.emitCloud(UU, cU, zU)))
      }
      dispose(UU) {
        var XU;
        null === (XU = this.beacon) || void 0 === XU || XU.dispose(), this.beacon = null, this.disposeCloud(UU);
        for (const zU of this.timers) clearTimeout(zU);
        this.timers.length = 0
      }
      emitBeacon(UU, XU, zU, cU) {
        const yU = XU.endsAt - cU < 5e3 ? 350 : 1e3,
          QU = .5 + .5 * Math.sin(2 * Math.PI * cU / yU);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * QU * zU, 4), this.beaconBudget < 1) return;
        const AU = Math.floor(this.beaconBudget);
        this.beaconBudget -= AU;
        const [FU, oU, DU] = XU.at, EU = [FU + .5, oU + 1.1, DU + .5];
        this.beacon ??= UU.createParticles(yt, {
          pos: EU,
          half: ha
        }), this.beacon.moveTo(EU), this.beacon.emit(AU)
      }
      startBlast(UU, XU, zU, cU) {
        var yU;
        null === (yU = this.beacon) || void 0 === yU || yU.dispose(), this.beacon = null, this.disposeCloud(UU);
        const QU = (0, LF.isMobile)() ? .5 : 1;
        this.streams = [Xt, zt, ct].map((UU => {
          const XU = Math.round(UU.count * QU);
          return {
            spec: UU,
            particles: null,
            rate: XU / ((UU.toMs - UU.fromMs) / 1e3),
            budget: 0,
            left: XU
          }
        })), this.cloud = {
          blast: zU,
          startMs: cU
        };
        const AU = Math.max(.25, 1 - zU.distance / (6 * zU.r)),
          FU = zU.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [zU, cU, yU] of Ut) Ft(UU, XU, zU, AU * cU, yU)
        }), FU))
      }
      emitCloud(UU, XU, zU) {
        const {
          blast: cU,
          startMs: yU
        } = this.cloud, QU = zU - yU, [AU, FU, oU] = cU.at, DU = Ka(cU.r);
        for (const EU of this.streams) {
          const {
            spec: zU
          } = EU;
          if (EU.left <= 0 || QU < zU.fromMs) continue;
          EU.budget += EU.rate * XU;
          const yU = Math.min(Math.floor(EU.budget), EU.left);
          if (yU < 1) continue;
          EU.budget -= yU, EU.left -= yU;
          const YU = EU.particles ??= this.createStream(UU, zU, cU);
          if (zU === Xt) {
            const UU = DU.stemHalfWidth;
            YU.moveTo([AU, FU + 1, oU], [UU, 1, UU])
          } else if (zU === zt) {
            const UU = DU.capSpread * Math.min(1, (QU - zU.fromMs) / 3e3),
              XU = Math.sqrt(Math.random()),
              cU = 2 * Math.random() * Math.PI,
              yU = Math.cos(cU) * XU,
              EU = Math.sin(cU) * XU,
              NU = AU + yU * UU,
              IU = oU + EU * UU,
              pU = DU.capThick,
              aU = FU + DU.capHeight + pU * (1 - XU * XU) * 2;
            YU.setDirections([.7 * yU, .05, .7 * EU], [yU, .2, EU]), YU.moveTo([NU, aU, IU], [pU, pU, pU])
          } else {
            this.ringAngle += 2.39996;
            const UU = Math.cos(this.ringAngle),
              XU = Math.sin(this.ringAngle);
            YU.setDirections([UU, .05, XU], [UU, .1, XU]), YU.moveTo([AU + 2 * UU, FU + .5, oU + 2 * XU], [0, .5, 0])
          }
          YU.emit(yU)
        }
      }
      createStream(UU, XU, zU) {
        const {
          r: cU
        } = zU, yU = Math.max(XU.life[0], cU / 25), QU = XU === ct ? [.9 * yU, yU] : XU.life, AU = Ka(cU), FU = XU === ct ? 1 : AU.puffScale, oU = {
          texture: da,
          xY: XU.count + 4,
          minLifeTime: QU[0] / Ta,
          maxLifeTime: QU[1] / Ta,
          minSize: XU.size[0] * FU,
          maxSize: XU.size[1] * FU,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, XU.gravity * Ta * Ta, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: XU.from[0],
            maxColor: XU.from[1]
          }, {
            timeFraction: .6,
            minColor: At(XU.from[0], XU.to[0]),
            maxColor: At(XU.from[1], XU.to[1])
          }, {
            timeFraction: 1,
            minColor: XU.to[0],
            maxColor: XU.to[1]
          }],
          blendMode: XU.blend
        };
        if (XU === Xt) {
          const UU = AU.capHeight / ((QU[0] + QU[1]) / 2);
          oU.minEmitPower = .9 * UU * Ta, oU.maxEmitPower = 1.05 * UU * Ta, oU.dir1 = [-.1, 1, -.1], oU.dir2 = [.1, 1, .1]
        } else XU === zt ? (oU.minEmitPower = 1.2, oU.maxEmitPower = 2, oU.dir1 = [-1, .05, -1], oU.dir2 = [1, .2, 1]) : (oU.minEmitPower = 39.583333333333336, oU.maxEmitPower = 41.66666666666667, oU.dir1 = [1, 0, 0], oU.dir2 = [1, 0, 0]);
        return UU.createParticles(oU, {
          pos: zU.at
        })
      }
      disposeCloud(UU) {
        for (const zU of this.streams) {
          var XU;
          null === (XU = zU.particles) || void 0 === XU || XU.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(UU)
      }
    }

    function At(UU, XU) {
      return [(UU[0] + XU[0]) / 2, (UU[1] + XU[1]) / 2, (UU[2] + XU[2]) / 2, .75 * UU[3]]
    }

    function Ft(UU, XU, zU, cU, yU) {
      try {
        UU.playSound(XU, zU, cU, yU)
      } catch (QU) {
        console.error(QU)
      }
    }
    const ot = {
        xY: 720,
        perS: 100
      },
      Dt = {
        xY: 320,
        perS: 44
      };
    class Et {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(UU, XU) {
        this.zone = {
          centre: [...UU.centre],
          r: UU.r,
          band: UU.band ? [UU.band[0], UU.band[1]] : void 0
        }, this.endsAt = XU
      }
      stop() {
        this.zone = null
      }
      iG(UU, XU) {
        const {
          baf2FalloutMs: zU,
          baf2FalloutAt: cU,
          baf2FalloutR: yU,
          baf2FalloutY: QU
        } = UU;
        zU > 0 && cU && void 0 !== yU ? this.start({
          centre: cU,
          r: yU,
          band: QU
        }, XU + zU) : this.stop()
      }
      perS(UU, XU, zU) {
        const cU = this.zone;
        if (!cU) return 0;
        const yU = this.endsAt - UU;
        return yU <= 0 ? (this.zone = null, 0) : cU.band && (XU[1] < cU.band[0] || XU[1] > cU.band[1]) || Math.hypot(XU[0] - cU.centre[0], XU[2] - cU.centre[2]) > cU.r ? 0 : zU.perS * Math.min(1, yU / 5e3)
      }
    }
    const Yt = [5, 7],
      Nt = [24, 8, 24],
      It = .5,
      pt = 1 / .6,
      tt = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class gt {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, LF.isMobile)();
        this.state = new Et, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(UU) {
          return UU ? Dt : ot
        }(UU)
      }
      startFallout(UU, XU) {
        this.state.start(UU, XU)
      }
      stopFallout() {
        this.state.stop()
      }
      iG(UU) {
        this.state.iG(UU, performance.now())
      }
      onAfterRender(UU, XU) {
        var zU;
        const cU = performance.now(),
          yU = 0 === this.lastMs ? 0 : Math.min(cU - this.lastMs, 250) / 1e3;
        this.lastMs = cU;
        const QU = this.state.perS(cU, XU, this.tier);
        if (QU <= 0 || !UU.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + QU * yU, QU / 4);
        const AU = Math.floor(this.budget);
        if (AU < 1) return;
        this.budget -= AU;
        const FU = this.at;
        FU[0] = XU[0], FU[1] = XU[1] + 12, FU[2] = XU[2];
        const oU = null !== (zU = this.systems) && void 0 !== zU ? zU : this.create(UU, FU),
          DU = this.amounts;
        DU[0] = 0, DU[1] = 0;
        for (let EU = 0; EU < AU; EU++) DU[Math.random() < .3 ? 1 : 0]++;
        for (let EU = 0; EU < oU.length; EU++) DU[EU] > 0 && (oU[EU].moveTo(FU, Nt), oU[EU].emit(DU[EU]))
      }
      dispose() {
        for (const XU of null !== (UU = this.systems) && void 0 !== UU ? UU : []) {
          var UU;
          XU.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(UU, XU) {
        return this.systems = tt.map((zU => {
          let {
            rgba: [cU, yU, QU, AU],
            share: FU
          } = zU;
          const oU = {
            texture: "square_particle",
            xY: Math.ceil(this.tier.xY * FU),
            minLifeTime: Yt[0] / pt,
            maxLifeTime: Yt[1] / pt,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [It, -1, It],
            colorGradients: [{
              timeFraction: 0,
              minColor: [cU, yU, QU, 0]
            }, {
              timeFraction: .15,
              minColor: [cU, yU, QU, AU]
            }, {
              timeFraction: .8,
              minColor: [cU, yU, QU, AU]
            }, {
              timeFraction: 1,
              minColor: [cU, yU, QU, 0]
            }],
            blendMode: CF.f.Standard
          };
          return UU.createParticles(oU, {
            pos: XU,
            half: Nt
          })
        })), this.systems
      }
    }
    const kt = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function Gt(UU) {
      const XU = /\|rot(\d)/.exec(UU);
      return kt[XU ? Number(XU[1]) : 1]
    }
    var Bt = zU(638),
      Zt = zU(39250);
    const Rt = new Set(Bt.o);

    function Pt(UU) {
      if (-2 !== UU.count) return null;
      const XU = nU(UU.item);
      return null !== XU && Rt.has(XU) ? XU : null
    }

    function Wt(UU) {
      const {
        width: XU,
        height: zU
      } = (0, Zt.b)(UU).hitBoxDimensions;
      return .55 / Math.max(XU, zU)
    }

    function dt(UU, XU, zU) {
      if (!zU) return !1;
      const cU = UU[0] + .5 - XU[0],
        yU = UU[1] + .5 - XU[1],
        QU = UU[2] + .5 - XU[2];
      return cU * cU + yU * yU + QU * QU <= 576
    }

    function Lt(UU, XU) {
      return Math.atan2(UU[0], UU[2]) + Math.PI + XU
    }

    function et(UU, XU) {
      const zU = 2 * Math.PI;
      return (UU + zU * XU / 1e4) % zU
    }
    class Ct {
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = UU, this.now = XU, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = UU.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(UU, XU) {
        if (0 === this.farms.size) return;
        const zU = this.now(),
          cU = Number.isNaN(this.frameMs) ? 0 : Math.min(zU - this.frameMs, 100);
        this.frameMs = zU, zU - this.checkedMs >= 1e3 && (this.checkedMs = zU, this.check(UU, XU));
        for (const yU of this.farms.values()) yU.shown && yU.running && null !== yU.model && cU > 0 && (yU.spin = et(yU.spin, cU), yU.model.setPose(yU.feet, Lt(yU.front, yU.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const UU of this.farms.values()) this.drop(UU);
        this.farms.clear()
      }
      sync() {
        const UU = new Set;
        for (const XU of this.labels.list()) {
          const zU = Pt(XU);
          if (null === zU) continue;
          UU.add(XU.key);
          const cU = this.farms.get(XU.key);
          if ((null === cU || void 0 === cU ? void 0 : cU.mob) === zU) continue;
          cU && this.drop(cU);
          const [yU, QU, AU] = XU.pos;
          this.farms.set(XU.key, {
            pos: XU.pos,
            feet: [yU + .5, QU + 1, AU + .5],
            mob: zU,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [XU, zU] of this.farms) UU.has(XU) || (this.drop(zU), this.farms.delete(XU));
        this.checkedMs = -1 / 0
      }
      check(UU, XU) {
        for (const zU of this.farms.values()) {
          const [cU, yU, QU] = zU.pos, AU = wp(UU, zU.pos);
          null !== AU && qz(AU) === uU && dt(zU.pos, XU, "Air" === wp(UU, [cU, yU + 1, QU])) ? (zU.running = AU.endsWith("|Running"), zU.front = Gt(AU), null === zU.model && (zU.model = UU.createMobModel(zU.mob, Wt(zU.mob)), null === zU.model) || (zU.model.setPose(zU.feet, Lt(zU.front, zU.spin)), zU.shown || (zU.model.setVisible(!0), zU.shown = !0))) : (zU.shown && null !== zU.model && zU.model.setVisible(!1), zU.shown = !1)
        }
      }
      drop(UU) {
        var XU;
        null === (XU = UU.model) || void 0 === XU || XU.dispose(), UU.model = null, UU.shown = !1
      }
    }
    class wt {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(UU) {
        var XU;
        this.island = UU.baf2ColIsland, this.islandSite = (XU = UU.baf2ColSite) && 8 === XU.length ? {
          spawnXZ: [XU[0], XU[1]],
          coreXZ: [XU[2], XU[3]],
          minXZ: [XU[4], XU[5]],
          maxXZ: [XU[6], XU[7]]
        } : null, this.views = UU.baf2ColList.map((UU => ({
          entry: yy(UU)
        }))), this.beamsVersion++, this.emit()
      }
      onStatus(UU) {
        this.status = UU, this.emit()
      }
      onOpen(UU) {
        this.openHeld = UU
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
        return this.views.map((UU => UU.entry))
      }
      entryAtRoot(UU) {
        var XU;
        return null === (XU = this.views.find((XU => {
          let {
            entry: zU
          } = XU;
          return zU.focus[0] === UU[0] && zU.focus[1] === UU[1] + 1 && zU.focus[2] === UU[2]
        }))) || void 0 === XU ? void 0 : XU.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(UU, XU) {
        return ro(this.entries(), UU, XU)
      }
      lookSource() {
        return {
          handles: UU => Nc(UU) >= 0 || Ic(UU),
          line: (UU, XU) => this.lookLine(UU, XU),
          version: () => this.beamsVersion
        }
      }
      subscribe(UU) {
        return this.listeners.add(UU), () => {
          this.listeners.delete(UU)
        }
      }
      dispose() {
        this.listeners.clear(), this.island = null, this.views = [], this.status = null, this.openHeld = null
      }
      emit() {
        for (const UU of this.listeners) UU()
      }
    }
    const qt = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((UU => UU / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((UU => [UU, UU + 1, UU + 2, UU, UU + 2, UU + 3]))
    };

    function Ot(UU, XU, zU, cU, yU, QU, AU) {
      let FU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const oU = Math.cos(FU),
        DU = Math.sin(FU),
        EU = UU.positions.length / 3,
        {
          positions: YU,
          indices: NU
        } = qt;
      for (let IU = 0; IU < YU.length; IU += 3) {
        const FU = YU[IU] * yU,
          EU = YU[IU + 2] * AU;
        UU.positions.push(XU + FU * oU + EU * DU, zU + YU[IU + 1] * QU, cU - FU * DU + EU * oU)
      }
      for (const IU of NU) UU.indices.push(EU + IU)
    }

    function St(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return XU < 1 ? {
        rgb: UU,
        alpha: XU
      } : {
        rgb: UU,
        alpha: 1,
        opaque: !0
      }
    }
    class rt {
      constructor(UU, XU) {
        this.style = UU, this.perSource = XU, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(UU) {
        this.sources = UU, 0 === UU.length && (this.budget = 0)
      }
      LY(UU, XU, zU) {
        const cU = this.sources.length;
        if (0 !== cU) {
          var yU, QU;
          this.budget = Math.min(this.budget + (yU = cU, QU = this.perSource, Math.min(yU * QU, Ko) * XU), 2);
          for (let XU = 0; XU < cU && this.budget >= 1; XU++) {
            const XU = this.sources[this.cursor % cU];
            this.cursor = (this.cursor + 1) % cU;
            if (!(Math.max(Math.abs(XU.x - zU[0]), Math.abs(XU.y - zU[1]), Math.abs(XU.z - zU[2])) > 32)) return this.puff(UU, XU), void this.budget--
          }
        }
      }
      dispose() {
        var UU;
        null === (UU = this.particles) || void 0 === UU || UU.dispose(), this.particles = null, this.sources = []
      }
      puff(UU, XU) {
        let {
          x: zU,
          y: cU,
          z: yU,
          h: QU,
          faces: AU
        } = XU;
        const FU = function(UU, XU, zU, cU, yU) {
            const [QU, AU, FU] = yU[Math.floor(Math.random() * yU.length)], oU = .04, DU = (UU, XU, zU) => UU > 0 ? XU + zU + oU : UU < 0 ? XU - oU : XU + .1, EU = (UU, XU, zU) => UU > 0 ? XU + zU + oU : UU < 0 ? XU - oU : XU + zU - .1, YU = [DU(QU, UU, 1), DU(AU, XU, cU), DU(FU, zU, 1)], NU = [EU(QU, UU, 1), EU(AU, XU, cU), EU(FU, zU, 1)];
            return {
              pos: [(YU[0] + NU[0]) / 2, (YU[1] + NU[1]) / 2, (YU[2] + NU[2]) / 2],
              half: [(NU[0] - YU[0]) / 2, (NU[1] - YU[1]) / 2, (NU[2] - YU[2]) / 2],
              out: [QU, AU, FU]
            }
          }(zU, cU, yU, QU, AU),
          {
            style: oU
          } = this,
          DU = this.particles ??= UU.createParticles(ea(oU, Math.ceil(oU.count * Ko * oU.life[1]) + 4), FU);
        DU.moveTo(FU.pos, FU.half);
        const [EU, YU, NU] = FU.out, IU = oU.spread;
        DU.setDirections([EU - IU, .6 + YU, NU - IU], [EU + IU, 1 + YU, NU + IU]), DU.emit(oU.count)
      }
    }
    const ut = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class ft {
      constructor() {
        this.green = new rt(To.green, Jo), this.pink = new rt(To.pink, jo), this.colliders = [], this.lastMs = 0
      }
      setSources(UU) {
        this.colliders = UU;
        const XU = [],
          zU = [];
        for (const cU of UU) {
          const [UU, yU, QU] = cU.focus;
          XU.push({
            x: UU,
            y: yU - 1,
            z: QU,
            h: 2,
            faces: ut
          });
          for (let XU = 0; XU < 4; XU++) {
            if (!cU.live[XU]) continue;
            const [UU, yU, QU] = tc(cU.focus, XU, Ac.LASER_D), [AU, , FU] = ac[XU], oU = ut.filter((UU => UU[0] !== AU || UU[2] !== FU || 0 !== UU[1]));
            zU.push({
              x: UU,
              y: yU,
              z: QU,
              h: 1,
              faces: oU
            })
          }
        }
        this.green.setSources(XU), this.pink.setSources(zU)
      }
      onAfterRender(UU) {
        const XU = performance.now(),
          zU = 0 === this.lastMs ? 0 : Math.min(XU - this.lastMs, 250) / 1e3;
        if (this.lastMs = XU, 0 === this.colliders.length || !UU.particlesEnabled()) return;
        const cU = UU.getCameraPosition();
        this.green.LY(UU, zU, cU), this.pink.LY(UU, zU, cU)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const it = 1.04,
      Ht = St([1, 120 / 255, 220 / 255]),
      Mt = St([1, .25, .25], .35);
    class vt {
      constructor(UU) {
        this.store = UU, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new ft
      }
      onAfterRender(UU) {
        this.store.version() !== this.builtVersion && this.rebuild(UU);
        const XU = performance.now();
        for (const zU of this.beams) {
          const cU = 1 + .35 * Math.sin(XU / 700 * Math.PI * 2 + zU.phase);
          UU.setGameMesh(zU.mesh, {
            scale: [zU.alongX ? 1 : cU, cU, zU.alongX ? cU : 1]
          })
        }
        this.glow.onAfterRender(UU)
      }
      dispose(UU) {
        this.clear(UU), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(UU) {
        this.clear(UU), this.builtVersion = this.store.version();
        const XU = [];
        for (const {
            entry: zU
          }
          of this.store.colliders()) zU.on && zU.live.some(Boolean) && (this.addBeams(UU, zU), XU.push(zU)), zU.blockers.length > 0 && this.addMarkers(UU, zU);
        this.glow.setSources(XU)
      }
      addBeams(UU, XU) {
        const [zU, cU, yU] = XU.focus, QU = xo - .25, AU = (.25 + xo) / 2;
        for (let FU = 0; FU < 4; FU++) {
          if (!XU.live[FU]) continue;
          const [oU, , DU] = ac[FU], EU = 0 !== oU, YU = {
            positions: [],
            indices: []
          };
          Ot(YU, 0, 0, 0, EU ? QU : .2, .2, EU ? .2 : QU);
          const NU = [zU + .5 + oU * AU, cU + .5, yU + .5 + DU * AU],
            IU = UU.createGameMesh(YU, Ht, NU);
          this.meshes.push(IU), this.beams.push({
            mesh: IU,
            alongX: EU,
            phase: FU * Math.PI / 2
          })
        }
      }
      addMarkers(UU, XU) {
        const zU = XU.blockers[0],
          cU = {
            positions: [],
            indices: []
          };
        for (const [yU, QU, AU] of XU.blockers) Ot(cU, yU - zU[0] + .5, QU - zU[1] + .5, AU - zU[2] + .5, it, it, it);
        this.meshes.push(UU.createGameMesh(cU, Mt, zU))
      }
      clear(UU) {
        for (const XU of this.meshes) UU.disposeGameMesh(XU);
        this.meshes = [], this.beams = []
      }
    }
    const Vt = [.56, .83, 1],
      st = [1, .73, .08],
      nt = [1, .25, .25],
      mt = [.85, .85, .85],
      lt = [.3, .45, .6];

    function xt(UU, XU, zU, cU) {
      let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const AU = yU / 2,
        FU = yU + QU;
      for (const oU of [-AU, AU])
        for (const yU of [-AU, AU]) Ot(UU, XU, zU + oU, cU + yU, FU, QU, QU), Ot(UU, XU + oU, zU, cU + yU, QU, FU, QU), Ot(UU, XU + oU, zU + yU, cU, QU, QU, FU)
    }

    function Jt(UU) {
      return XU => UU.isBlockInLoadedChunk(XU[0], XU[1], XU[2]) && 0 === UU.getBlockId(XU[0], XU[1], XU[2])
    }

    function jt(UU) {
      return UU.map((UU => {
        let {
          free: XU,
          blocked: zU,
          gaps: cU,
          supports: yU
        } = UU;
        return `${XU.join(";")}|${zU.join(";")}|${cU.join(";")}|${yU.join(";")}`
      })).join("/")
    }

    function Kt(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const QU = XU[0],
        AU = {
          positions: [],
          indices: []
        };
      for (const [FU, oU, DU] of XU) xt(AU, FU - QU[0] + .5, oU - QU[1] + .5, DU - QU[2] + .5, cU, yU);
      return UU.createGameMesh(AU, zU, QU)
    }
    class bt {
      constructor(UU) {
        this.store = UU, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(UU, XU, zU) {
        var cU;
        const yU = null === (cU = UU.HzU(XU)) || void 0 === cU ? void 0 : cU.name;
        if (yU !== oc && yU !== Fc) return void("" !== this.shownKey && this.show(UU, "", []));
        const QU = performance.now();
        if (QU - this.lastCheckMs >= 200 && (this.lastCheckMs = QU, yU === oc ? this.check(UU, zU) : this.preview(UU, zU)), this.pulses.length > 0) {
          const XU = 1 + .12 * Math.sin(QU / 1e3 * 1.25 * Math.PI * 2),
            zU = [XU, XU, XU];
          for (const cU of this.pulses) UU.setGameMesh(cU, {
            scale: zU
          })
        }
      }
      dispose(UU) {
        this.clear(UU), this.shownKey = ""
      }
      check(UU, XU) {
        const zU = Jt(UU),
          cU = [];
        for (const {
            entry: QU
          }
          of this.store.colliders()) {
          QU.focus.every(((UU, zU) => Math.abs(UU + .5 - XU[zU]) <= Ac.GHOST_REACH)) && cU.push(mo(QU, zU))
        }
        const yU = jt(cU);
        yU !== this.shownKey && this.show(UU, yU, cU)
      }
      preview(UU, XU) {
        const zU = UU.getTargetedBlock(),
          cU = zU ? [zU.yt[0], zU.yt[1], zU.yt[2]] : null,
          yU = null !== cU && cU.every(((UU, zU) => Math.abs(UU + .5 - XU[zU]) <= 8)),
          QU = this.store.site(),
          AU = yU && QU ? function(UU, XU, zU) {
            const cU = pc(UU);
            if (!cU.every(XU)) return null;
            const yU = Gc(UU, zU);
            return {
              column: cU,
              spots: mo({
                focus: cU[1],
                lasers: [!1, !1, !1, !1],
                open: yU,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, XU),
              fits: yU.filter(Boolean).length >= Ac.MIN_SPOTS
            }
          }(cU, Jt(UU), QU) : null,
          FU = AU ? [AU.spots] : [],
          oU = AU ? `preview ${cU.join(",")}|${AU.fits}|${jt(FU)}` : "";
        var DU, EU;
        oU !== this.shownKey && this.show(UU, oU, FU, null !== (DU = null === AU || void 0 === AU ? void 0 : AU.column) && void 0 !== DU ? DU : [], null === (EU = null === AU || void 0 === AU ? void 0 : AU.fits) || void 0 === EU || EU)
      }
      show(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          yU = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(UU), this.shownKey = XU, cU.length > 0 && this.meshes.push(Kt(UU, cU, St(yU ? mt : nt)));
        for (const {
            free: QU,
            blocked: AU,
            gaps: FU,
            supports: oU
          }
          of zU) {
          for (const [XU, zU, cU] of QU) {
            const yU = {
              positions: [],
              indices: []
            };
            xt(yU, 0, 0, 0);
            const QU = UU.createGameMesh(yU, St(Vt), [XU + .5, zU + .5, cU + .5]);
            this.meshes.push(QU), this.pulses.push(QU)
          }
          AU.length > 0 && this.meshes.push(Kt(UU, AU, St(st))), FU.length > 0 && this.meshes.push(Kt(UU, FU, St(nt), 1.06, .07)), oU.length > 0 && this.meshes.push(Kt(UU, oU, St(lt)))
        }
      }
      clear(UU) {
        for (const XU of this.meshes) UU.disposeGameMesh(XU);
        this.meshes = [], this.pulses = []
      }
    }
    class Tt {
      constructor() {
        this.stored = new Map, this.uD = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(UU) {
        if (!UU.baf2TermOpen) return !1;
        UU.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [XU, zU] of UU.baf2TermItems) zU > 0 ? this.stored.set(XU, zU) : this.stored.delete(XU);
        if (UU.baf2TermHeld && (this.uD = new Map(UU.baf2TermHeld)), this.pending = this.pending.filter((XU => XU.seq > UU.baf2TermAcked)), this.silos = UU.baf2TermSilos, this.readOnly = UU.baf2TermReadOnly, this.pocket = !0 === UU.baf2TermPocket, UU.baf2TermReset) this.resort();
        else {
          const UU = new Set(this.order);
          for (const XU of this.stored.keys()) UU.has(XU) || this.order.push(XU)
        }
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((UU, XU) => this.amount(XU) - this.amount(UU) || UU.localeCompare(XU))), this.changed()
      }
      take(UU, XU) {
        const zU = FX(UU, this.amount(XU));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: XU,
          amount: zU,
          put: !1
        }), this.recents = [XU, ...this.recents.filter((UU => UU !== XU))].slice(0, 6), this.changed(), zX(this.seq, UU, XU)
      }
      put(UU, XU) {
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: XU,
          amount: FX(UU, this.heldAmount(XU)),
          put: !0
        }), this.changed(), cX(this.seq, UU, XU)
      }
      putAll() {
        this.seq++;
        for (const UU of this.heldItems()) this.pending.push({
          seq: this.seq,
          item: UU,
          amount: this.heldAmount(UU),
          put: !0
        });
        return this.changed(), yX(this.seq)
      }
      amount(UU) {
        var XU;
        let zU = null !== (XU = this.stored.get(UU)) && void 0 !== XU ? XU : 0;
        for (const cU of this.pending) cU.item === UU && (zU += cU.put ? cU.amount : -cU.amount);
        return Math.max(0, zU)
      }
      heldAmount(UU) {
        var XU;
        let zU = null !== (XU = this.uD.get(UU)) && void 0 !== XU ? XU : 0;
        for (const cU of this.pending) cU.put && cU.item === UU && (zU -= cU.amount);
        return Math.max(0, zU)
      }
      heldItems() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return this.order.filter((XU => XU === UU || this.heldAmount(XU) > 0))
      }
      items() {
        return this.order.filter((UU => this.amount(UU) > 0))
      }
      recent() {
        return this.recents.filter((UU => this.amount(UU) > 0))
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
      subscribe(UU) {
        return this.listeners.add(UU), () => {
          this.listeners.delete(UU)
        }
      }
      changed() {
        this.version++;
        for (const UU of this.listeners) UU()
      }
    }
    var ht = zU(39200);
    const Ug = {
      isBlock: UU => void 0 !== qU.h[UU],
      harvestType: UU => {
        var XU;
        return null === (XU = qU.h[UU]) || void 0 === XU ? void 0 : XU.harvestType
      },
      harvestLevel: UU => {
        var XU;
        return null === (XU = qU.h[UU]) || void 0 === XU ? void 0 : XU.harvestLevel
      },
      dropsNothing: UU => {
        var XU;
        return null === (null === (XU = qU.h[UU]) || void 0 === XU ? void 0 : XU.drops)
      },
      displayName: UU => {
        var XU;
        return null === (XU = xA.n[UU]) || void 0 === XU ? void 0 : XU.displayName
      },
      description: UU => {
        var XU;
        return null === (XU = xA.n[UU]) || void 0 === XU ? void 0 : XU.description
      },
      harvests: UU => {
        var XU;
        return null === (XU = xA.n[UU]) || void 0 === XU ? void 0 : XU.harvests
      },
      level: UU => {
        var XU;
        return null === (XU = xA.n[UU]) || void 0 === XU ? void 0 : XU.level
      }
    };

    function Xg(UU, XU, zU) {
      return function(UU, XU, zU, cU) {
        var yU, QU;
        const AU = XU.split("|")[0],
          FU = UU.isBlock(XU) ? XU : UU.isBlock(AU) ? AU : null;
        if (null === FU || "rock" !== UU.harvestType(FU) || UU.dropsNothing(FU) && !fc.has(AU)) return null;
        const oU = zU && "rock" === UU.harvests(zU) ? null !== (yU = UU.level(zU)) && void 0 !== yU ? yU : 0 : null,
          DU = null !== (QU = null !== cU && void 0 !== cU ? cU : UU.harvestLevel(FU)) && void 0 !== QU ? QU : 0;
        return (null !== oU ? DU <= oU : 0 === UU.harvestLevel(FU)) ? null : Lc(UU, DU)
      }(Ug, UU, XU, zU)
    }

    function zg(UU, XU) {
      return function(UU, XU, zU) {
        if (XU === dc[0]) return [(0, rU.ie)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, rU.H.whiteUiText)];
        const cU = zU.split("|")[0],
          yU = UU.isBlock(cU) ? UU.displayName(cU) : void 0,
          QU = "string" === typeof yU ? yU : yU && "translationKey" in yU ? `$t(${yU.translationKey})` : cU;
        return [(0, rU.ie)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: QU
          }
        }, rU.H.whiteUiText), (0, rU.ie)({
          translationKey: `item:${(0,rU.Ie)(XU)}`
        }, rU.H.yellowUiText)]
      }(Ug, UU, XU)
    }
    const cg = "buildAFactory2Game:";
    const yg = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Qg(UU) {
      return UU.endsWith(" Ore")
    }
    const Ag = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      Fg = [],
      og = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: Ag,
        plan: null,
        atomic: Fg
      },
      Dg = "buildAFactory2Game:",
      Eg = new Set(["Splitter", "Sorting Gate"]),
      Yg = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class Ng {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = UU, this.planAt = XU, this.tierOf = zU, this.yF = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.uD = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = og, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(UU, XU, zU) {
        var cU, yU, QU;
        let AU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const FU = null !== (cU = null === (yU = UU.HzU(XU)) || void 0 === yU ? void 0 : yU.name) && void 0 !== cU ? cU : null,
          oU = UU.isPlayerCrouching(XU),
          DU = 0 === zU ? null : this.resolve(UU, zU),
          EU = null !== DU && null !== AU && Eg.has(DU.rootName) && function(UU, XU) {
            return Yg.some((zU => {
              let [cU, yU] = zU;
              const QU = UU.getBlockId(XU[0] + cU, XU[1], XU[2] + yU);
              return 0 !== QU && "Express Belt" === UU.getMetaInfo(QU).rootName
            }))
          }(UU, AU),
          YU = this.updatePlan(0 === zU ? null : AU),
          NU = this.tierOf(),
          IU = null === AU ? null : (0, ht.e)(zU),
          pU = null !== IU && null !== AU && (0, ht.g)(function(UU) {
            return (XU, zU, cU) => UU.getBlockId(XU, zU, cU)
          }(UU), AU[0], AU[1], AU[2], IU),
          aU = this.readAfloat(UU, zU, AU);
        if (zU === this.yF && pU === this.missesMaker && aU === this.afloat && FU === this.uD && oU === this.crouching && EU === this.express && NU === this.tier && !YU && (!this.targetsLive || !this.liveMoved(AU))) return;
        this.yF = zU, this.missesMaker = pU, this.afloat = aU, this.uD = FU, this.crouching = oU, this.express = EU;
        const tU = EU && DU ? function(UU) {
          if (null === UU.info) return null;
          return UU.express ??= {
            ...UU.info,
            detail: `${Dg}lookKeepsUpExpress`,
            detailItem: null
          }, UU.express
        }(DU) : null !== DU && pU && null !== IU ? this.besideMaker(DU, zU, IU) : null !== DU && aU ? this.hanging(DU) : null !== (QU = null === DU || void 0 === DU ? void 0 : DU.info) && void 0 !== QU ? QU : null;
        this.tier = NU;
        const gU = DU && tU ? function(UU, XU) {
          var zU, cU;
          const yU = qU.h[UU];
          if (!UU.endsWith(" Ore") || "rock" !== (null === yU || void 0 === yU ? void 0 : yU.harvestType) || 0 === yU.harvestLevel) return null;
          const QU = null !== (zU = yU.harvestLevel) && void 0 !== zU ? zU : 0,
            AU = XU ? xA.n[XU] : void 0;
          if ("rock" === (null === AU || void 0 === AU ? void 0 : AU.harvests) && (null !== (cU = AU.level) && void 0 !== cU ? cU : 0) >= QU) return null;
          const FU = (oU = QU, Lc(Ug, oU));
          var oU;
          if (null === FU) return null;
          const DU = (0, Ty.e)(FU),
            EU = /^[AEIOU]/.test(FU) ? "An" : "";
          if ("rock" === (null === AU || void 0 === AU ? void 0 : AU.harvests) && XU) return {
            key: `${Dg}lookToolTooWeak${EU}`,
            uD: (0, Ty.e)(XU),
            needed: DU
          };
          return {
            key: FU === dc[0] ? `${Dg}lookNeedAnyPickaxe` : `${Dg}lookNeedPickaxe${EU}`,
            uD: null,
            needed: DU
          }
        }(DU.rootName, FU) : null;
        this.targetsLive = !0 === (null === DU || void 0 === DU ? void 0 : DU.live) && null !== AU;
        let kU = null;
        this.targetsLive && DU && AU && this.live && (this.livePos[0] = AU[0], this.livePos[1] = AU[1], this.livePos[2] = AU[2], this.liveVersion = this.live.version(), kU = this.live.line(DU.rootName, AU));
        const GU = null === tU ? Ag : function(UU, XU, zU) {
            const cU = function(UU, XU, zU) {
              const cU = Sz(UU);
              if (null === cU) return null;
              const yU = `${cg}lookPortMode_${cU}`,
                QU = Mc(XU);
              if (QU && zU) return {
                mode: null,
                detail: yU,
                next: `${cg}lookWrenchPickUp`,
                nextState: null
              };
              const AU = rz(UU),
                FU = null === AU ? null : Sz(AU);
              return null === FU ? {
                mode: null,
                detail: yU,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: yU,
                next: QU ? `${cg}lookWrenchNext` : `${cg}lookPortWrench`,
                nextState: `${cg}lookPortState_${FU}`
              }
            }(UU, XU, zU);
            if (null !== cU) return cU;
            const yU = Uy(UU, XU, zU);
            return null === yU.mode && null === yU.next ? Ag : yU
          }(UU.blockIdToBlockName(zU), FU, oU),
          BU = this.plan,
          ZU = DU && tU ? this.rowsOf(DU.rootName, NU) : Fg,
          RU = this.snapshot;
        if (!(null === tU ? !RU.visible : RU.visible && tU === RU.info && (PU = gU, WU = RU.tool, PU === WU || null !== PU && null !== WU && PU.key === WU.key && PU.uD === WU.uD && PU.needed === WU.needed) && function(UU, XU) {
            return UU === XU || null !== UU && null !== XU && UU.key === XU.key && JSON.stringify([UU.params, UU.keys]) === JSON.stringify([XU.params, XU.keys])
          }(kU, RU.live) && function(UU, XU) {
            return UU.mode === XU.mode && UU.detail === XU.detail && UU.next === XU.next && UU.nextState === XU.nextState
          }(GU, RU.wrench) && sp(BU, RU.plan) && ZU === RU.atomic)) {
          var PU, WU;
          this.snapshot = null === tU ? {
            ...RU,
            visible: !1
          } : {
            info: tU,
            visible: !0,
            tool: gU,
            live: kU,
            wrench: GU,
            plan: BU,
            atomic: ZU
          };
          for (const UU of this.listeners) UU()
        }
      }
      get() {
        return this.snapshot
      }
      subscribe(UU) {
        return this.listeners.add(UU), () => {
          this.listeners.delete(UU)
        }
      }
      dispose() {
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = og, this.yF = 0, this.uD = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(UU, XU, zU) {
        if (null === zU || 0 === XU || !FU() || !Qg(this.resolve(UU, XU).rootName)) return !1;
        const cU = `${zU[0]},${zU[1]},${zU[2]},${XU}`,
          yU = performance.now();
        return cU === this.afloatKey && yU - this.afloatAt < Ig ? this.afloat : (this.afloatKey = cU, this.afloatAt = yU, function(UU, XU) {
          for (const [zU, cU, yU] of yg) {
            const QU = XU(UU[0] + zU, UU[1] + cU, UU[2] + yU);
            if (void 0 === QU || null !== QU && !Qg(QU)) return !1
          }
          return !0
        }(zU, ((XU, zU, cU) => function(UU, XU, zU, cU) {
          if (!UU.isBlockInLoadedChunk(XU, zU, cU)) return;
          const yU = UU.getBlockId(XU, zU, cU);
          return 0 === yU ? null : UU.getMetaInfo(yU).rootName
        }(UU, XU, zU, cU))))
      }
      liveMoved(UU) {
        var XU;
        const {
          livePos: zU
        } = this;
        return null === UU || UU[0] !== zU[0] || UU[1] !== zU[1] || UU[2] !== zU[2] || (null === (XU = this.live) || void 0 === XU ? void 0 : XU.version()) !== this.liveVersion
      }
      updatePlan(UU) {
        const XU = null === UU ? "" : UU.join(","),
          zU = performance.now();
        if (XU === this.planPos && zU - this.planMs < 250) return !1;
        this.planPos = XU, this.planMs = zU;
        const cU = null === UU ? null : this.planAt([UU[0], UU[1], UU[2]]),
          yU = !sp(cU, this.plan);
        return this.plan = cU, yU
      }
      besideMaker(UU, XU, zU) {
        let {
          info: cU
        } = UU;
        if (null === cU) return null;
        let yU = this.besideMakerById.get(XU);
        if (void 0 === yU) {
          const UU = "cryo" === zU ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          yU = {
            ...cU,
            detail: `${Dg}${UU}`,
            detailItem: null
          }, this.besideMakerById.set(XU, yU)
        }
        return yU
      }
      hanging(UU) {
        let {
          info: XU,
          rootName: zU
        } = UU;
        if (null === XU) return null;
        let cU = this.afloatByRoot.get(zU);
        return void 0 === cU && (cU = {
          ...XU,
          detail: `${Dg}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(zU, cU)), cU
      }
      rowsOf(UU, XU) {
        if (null === XU) return Fg;
        const zU = `${UU}|${XU}`;
        let cU = this.rowsByKey.get(zU);
        if (void 0 === cU) {
          const yU = function(UU, XU) {
            var zU;
            if (!(UU in rX)) return [];
            const cU = null !== (zU = uX[UU]) && void 0 !== zU ? zU : [],
              yU = new Map;
            for (const AU of fQ(UU, XU))
              if ((cU.includes(AU) || uQ(AU.output) && SQ(AU.output) > KU(UU)) && SQ(AU.output) <= XU) {
                var QU;
                const UU = null !== (QU = yU.get(AU.output)) && void 0 !== QU ? QU : [];
                UU.push(AU.input), yU.set(AU.output, UU)
              } return HQ([...yU], (UU => {
              let [XU] = UU;
              return -SQ(XU)
            })).map((UU => {
              let [XU, zU] = UU;
              return {
                output: XU,
                inputs: zU
              }
            }))
          }(UU, XU);
          cU = yU.length > 0 ? yU : Fg, this.rowsByKey.set(zU, cU)
        }
        return cU
      }
      resolve(UU, XU) {
        const {
          rootId: zU,
          rootName: cU
        } = UU.getMetaInfo(XU), yU = (0, pz.o)(cU) ? XU : zU;
        let QU = this.byRootId.get(yU);
        const AU = FU();
        if (void 0 === QU || QU.nuclear !== AU) {
          var oU;
          const zU = function(UU) {
            return rc(Ug, UU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UU)
          }(cU, UU.blockIdToBlockName(XU));
          QU = {
            info: zU,
            rootName: cU,
            live: null !== zU && !0 === (null === (oU = this.live) || void 0 === oU ? void 0 : oU.handles(cU)),
            nuclear: AU
          }, this.byRootId.set(yU, QU)
        }
        return QU
      }
    }
    const Ig = 500;
    const pg = (0, cU.memo)((function(UU) {
      var XU, zU;
      let {
        store: yU
      } = UU;
      const {
        t: QU
      } = (0, Wy.I)(), [AU, FU] = (0, cU.useState)((() => yU.get()));
      (0, cU.useEffect)((() => (FU(yU.get()), yU.subscribe((() => {
        FU(yU.get())
      })))), [yU]);
      const {
        openInGameMenuName: oU,
        openEverythingMenuName: DU,
        isTouchScreen: EU
      } = (0, gy.q)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
        info: YU,
        tool: NU,
        live: IU,
        wrench: pU,
        atomic: aU
      } = AU, tU = AU.visible && null === oU && null === DU;
      if (null === YU) return null;
      const gU = null !== pU.detail ? QU(pU.detail) : null !== (XU = AU.plan) && void 0 !== XU && XU.ctrl ? QU("buildAFactory2Game:lookPlanCtrl") : null !== YU.detail ? QU(YU.detail, null === YU.detailItem ? void 0 : {
        item: QU(YU.detailItem)
      }) : null;
      return (0, GQ.jsxs)("div", {
        className: By()("Baf2LookTarget", {
          Visible: tU
        }),
        "aria-hidden": !tU,
        children: [(0, GQ.jsx)("div", {
          className: "Baf2LookTargetName SmallTextBold",
          children: QU(YU.name)
        }), null !== AU.plan && (0, GQ.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: QU(AU.plan.key, {
            kind: QU(AU.plan.kindKey),
            w: String(AU.plan.w),
            h: String(AU.plan.h),
            d: String(AU.plan.d),
            count: String(AU.plan.count)
          })
        }), void 0 !== (null === (zU = AU.plan) || void 0 === zU ? void 0 : zU.why) && (0, GQ.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: QU(AU.plan.why)
        }), null !== pU.mode && (0, GQ.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: QU(pU.mode)
        }), null !== NU ? (0, GQ.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: QU(NU.key, {
            item: QU(NU.needed),
            uD: null === NU.uD ? "" : QU(NU.uD)
          })
        }) : null !== IU ? (0, GQ.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: QU(IU.key, ho(QU, IU))
        }) : null !== gU && (0, GQ.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: gU
        }), aU.length > 0 && (0, GQ.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: QU("buildAFactory2Game:lookAtomicRecipes", {
            list: aU.map((UU => {
              let {
                output: XU,
                inputs: zU
              } = UU;
              const cU = zU.length > 1 ? ` ${QU("buildAFactory2Game:recipeMore",{count:String(zU.length-1)})}` : "";
              return `${QU((0,Ty.e)(zU[0]))}${cU} \u2192 ${QU((0,Ty.e)(XU))}`
            })).join(", ")
          })
        }), null !== pU.next && (0, GQ.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: QU(pU.next, {
            state: null === pU.nextState ? "" : QU(pU.nextState),
            use: QU(EU ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
          })
        })]
      })
    }));
    var ag = zU(39299);
    const tg = [],
      gg = [
        [0, -1, 0]
      ];

    function kg(UU) {
      const XU = [UU];
      for (let zU = 1; zU <= 4; zU++) zU > 1 && XU.push(`${UU}|meta|rot${zU}`), XU.push(`${UU}|meta|rot${zU}|Running`);
      return XU
    }

    function Gg(UU, XU) {
      return [Math.floor(UU[0] / XU), Math.floor(UU[1] / XU), Math.floor(UU[2] / XU)]
    }

    function Bg(UU, XU, zU) {
      return `${UU},${XU},${zU}`
    }

    function Zg(UU) {
      const XU = UU.split("|")[0];
      if (!Dz(XU)) return tg;
      const zU = rX[XU];
      if (Xz(zU)) return gg;
      const cU = Gt(UU);
      return zz(zU) ? [
        [-cU[0], -cU[1], -cU[2]]
      ] : Zy(zU) ? function(UU, XU) {
        const zU = UU[0] - 2 * XU[0],
          cU = UU[2] - 2 * XU[2],
          yU = [];
        for (let QU = -1; QU <= 1; QU++)
          for (let XU = -1; XU <= 1; XU++) yU.push([zU + QU, UU[1], cU + XU]);
        return yU
      }([0, 0, 0], cU) : tg
    }
    const Rg = [.5, .5, .5],
      Pg = [.2, .8, .3],
      Wg = [.45, 1, .5];
    class dg {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(UU) {
        this.indexed = !0;
        for (const XU of eX)
          for (const zU of kg(XU)) {
            const XU = UU.blockNameToBlockId(zU, !0),
              cU = Zg(zU);
            null !== XU && cU.length > 0 && (this.offsetsList.push(cU), this.offsetsIndexById[XU] = this.offsetsList.length)
          }
      }
      onAfterRender(UU, XU) {
        this.indexed || this.index(UU);
        const zU = performance.now();
        if (zU - this.lastCheckMs < 100) return;
        this.lastCheckMs = zU, this.checks++;
        const cU = Dp.f.aY,
          [yU, QU, AU] = Gg(XU, cU);
        let FU = !1;
        const oU = [];
        let DU = 0;
        for (let EU = yU - 2; EU <= yU + 2; EU++)
          for (let XU = QU - 1; XU <= QU + 1; XU++)
            for (let yU = AU - 2; yU <= AU + 2; yU++) {
              const QU = DU++,
                AU = Bg(EU, XU, yU),
                YU = UU.getChunkVersion(EU, XU, yU);
              let NU = this.chunks.get(AU);
              null !== YU ? (NU || (NU = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(AU, NU)), NU.seenAt = this.checks, NU.checkedVersion !== YU && (NU.checkedVersion = YU, FU = !0), NU.scannedVersion !== YU && zU - NU.scannedAt >= 500 && oU.push({
                slot: QU,
                entry: NU,
                origin: [EU * cU, XU * cU, yU * cU]
              })) : (FU ||= void 0 !== NU, this.chunks.delete(AU))
            }
        this.scanDue(UU, oU) && (FU = !0);
        for (const [EU, YU] of this.chunks) YU.seenAt !== this.checks && (FU ||= YU.machines.length > 0, this.chunks.delete(EU));
        for (const EU of this.chunks.values())
          for (const [XU, zU, cU] of EU.cellChunks)(Math.abs(XU - yU) > 2 || Math.abs(zU - QU) > 1 || Math.abs(cU - AU) > 2) && this.watchCellChunk(UU, XU, zU, cU) && (FU = !0);
        for (const [EU, YU] of this.cellChunks) YU.seenAt !== this.checks && this.cellChunks.delete(EU);
        FU && this.refresh(UU)
      }
      dispose(UU) {
        this.clearMeshes(UU), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(UU, XU) {
        const zU = Math.max(XU.findIndex((UU => {
          let {
            slot: XU
          } = UU;
          return XU >= this.scanFrom
        })), 0);
        let cU = 96;
        for (let yU = 0; yU < XU.length; yU++) {
          const {
            slot: QU,
            entry: AU,
            origin: FU
          } = XU[(zU + yU) % XU.length];
          if (cU -= this.scan(UU, AU, FU), cU <= 0) {
            this.scanFrom = QU + 1;
            break
          }
        }
        return XU.length > 0
      }
      scan(UU, XU, zU) {
        let [cU, yU, QU] = zU;
        const AU = Dp.f.aY,
          FU = this.hits;
        FU.length = 0;
        const oU = UU.scanBlocks(cU, yU, QU, cU + AU, yU + AU, QU + AU, this.offsetsIndexById, FU),
          DU = [];
        for (let EU = 0; EU < FU.length; EU += 4) DU.push({
          pos: [FU[EU], FU[EU + 1], FU[EU + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[FU[EU + 3]] - 1]
        });
        return XU.machines = DU, XU.cellChunks = function(UU, XU) {
          const zU = new Set,
            cU = [];
          for (const {
              pos: yU,
              offsets: QU
            }
            of UU)
            for (const [UU, AU, FU] of QU) {
              const QU = Gg([yU[0] + UU, yU[1] + AU, yU[2] + FU], XU),
                oU = Bg(...QU);
              zU.has(oU) || (zU.add(oU), cU.push(QU))
            }
          return cU
        }(DU, AU), XU.scannedVersion = XU.checkedVersion, XU.scannedAt = performance.now(), Math.max(oU, 1)
      }
      watchCellChunk(UU, XU, zU, cU) {
        const yU = Bg(XU, zU, cU),
          QU = UU.getChunkVersion(XU, zU, cU),
          AU = this.cellChunks.get(yU);
        return null === QU ? this.cellChunks.delete(yU) : (null === AU || void 0 === AU ? void 0 : AU.version) === QU ? (AU.seenAt = this.checks, !1) : (this.cellChunks.set(yU, {
          version: QU,
          seenAt: this.checks
        }), !0)
      }
      refresh(UU) {
        const XU = function(UU, XU) {
            const zU = new Set,
              cU = [];
            for (const {
                pos: yU,
                offsets: QU
              }
              of UU)
              for (const [UU, AU, FU] of QU) {
                const QU = yU[0] + UU,
                  oU = yU[1] + AU,
                  DU = yU[2] + FU,
                  EU = `${QU},${oU},${DU}`;
                zU.has(EU) || (zU.add(EU), XU(QU, oU, DU) && cU.push([QU, oU, DU]))
              }
            return cU
          }([...this.chunks.values()].flatMap((UU => UU.machines)), ((XU, zU, cU) => UU.isBlockInLoadedChunk(XU, zU, cU) && 0 === UU.getBlockId(XU, zU, cU))),
          zU = XU.join(";");
        zU !== this.shownKey && (this.shownKey = zU, this.clearMeshes(UU), XU.length > 0 && (this.meshes = [this.build(UU, XU, !1), this.build(UU, XU, !0)]))
      }
      build(UU, XU, zU) {
        const cU = XU[0],
          yU = [],
          QU = [];
        for (const [AU, FU, oU] of XU)(0, ag.c)(yU, QU, [AU - cU[0] + .5, FU - cU[1] + .5, oU - cU[2] + .5], Rg, zU);
        return UU.createGameMesh({
          positions: yU,
          indices: QU
        }, {
          rgb: zU ? Wg : Pg,
          alpha: .4
        }, cU)
      }
      clearMeshes(UU) {
        for (const XU of this.meshes) UU.disposeGameMesh(XU);
        this.meshes = []
      }
    }
    const Lg = 1 / .6,
      eg = 200,
      Cg = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      wg = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      qg = 2 * Math.PI / 3;
    class Og {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cg;
        this.style = UU, this.particles = null, this.points = new Float32Array(800), this.budget = eg, this.lastMs = 0
      }
      static blade() {
        return new Og(wg)
      }
      iG(UU, XU) {
        const zU = Math.min(XU.arcStruck, XU.arcPoints.length);
        this.draw(UU, [XU.arcFrom, ...XU.arcPoints], XU.arcPoints.slice(0, zU))
      }
      onBlade(UU, XU) {
        const [zU, cU, yU] = XU.bladeCentre, [QU, AU] = XU.bladeFacing, FU = zU - 1.5 * QU, oU = yU - 1.5 * AU, DU = Math.atan2(AU, QU), EU = [];
        for (let YU = 0; YU <= 8; YU++) {
          const UU = DU - qg / 2 + qg * YU / 8;
          EU.push([FU + 2.5 * Math.cos(UU), cU, oU + 2.5 * Math.sin(UU)])
        }
        this.draw(UU, EU, XU.bladeStruck)
      }
      dispose() {
        var UU;
        null === (UU = this.particles) || void 0 === UU || UU.stop(), this.particles = null
      }
      draw(UU, XU, zU) {
        if (!UU.particlesEnabled() || XU.length < 2) return;
        const cU = performance.now();
        this.budget = Math.min(eg, this.budget + (cU - this.lastMs) / 1e3 * eg), this.lastMs = cU;
        const yU = [];
        let QU = 0,
          AU = XU[0];
        for (const gU of XU.slice(1)) {
          const UU = Math.min(48, Math.round(Math.hypot(gU[0] - AU[0], gU[1] - AU[1], gU[2] - AU[2]) * this.style.perBlock));
          yU.push([AU, gU, UU]), QU += UU, AU = gU
        }
        const FU = zU.length;
        QU += 10 * FU;
        const oU = QU > this.budget ? this.budget / QU : 1;
        if (0 === QU || oU * QU < 1) return;
        const DU = XU[0],
          [EU, YU, NU] = DU,
          IU = this.points;
        let pU = 0;
        const aU = (UU, XU, zU, cU) => {
          const yU = 4 * pU;
          IU[yU] = UU - EU, IU[yU + 1] = XU - YU, IU[yU + 2] = zU - NU, IU[yU + 3] = cU, pU++
        };
        yU.forEach(((UU, XU) => {
          let [zU, cU, yU] = UU;
          const QU = Math.min(Math.floor(yU * oU), eg - pU),
            AU = Math.hypot(cU[0] - zU[0], cU[1] - zU[1], cU[2] - zU[2]),
            FU = 0 === XU && AU > 0 ? Math.min(.5, .1 * AU) / AU : 0;
          for (let oU = 0; oU < QU; oU++) {
            const UU = FU + (oU + .5) / QU * (1 - FU);
            aU(zU[0] + (cU[0] - zU[0]) * UU, zU[1] + (cU[1] - zU[1]) * UU, zU[2] + (cU[2] - zU[2]) * UU, .15)
          }
        }));
        const tU = Math.floor(10 * oU);
        for (let gU = 0; gU < FU; gU++) {
          const [UU, XU, cU] = zU[gU];
          for (let zU = 0; zU < tU && pU < eg; zU++) aU(UU, XU, cU, 2.5)
        }
        this.budget -= pU, this.particles ??= UU.createParticles(function(UU) {
          const [XU, zU] = UU.colours;
          return {
            texture: "square_particle",
            xY: 400,
            minLifeTime: UU.life[0] / Lg,
            maxLifeTime: UU.life[1] / Lg,
            minSize: UU.size[0],
            maxSize: UU.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [XU[0], XU[1], XU[2], 1],
              maxColor: [zU[0], zU[1], zU[2], 1]
            }, {
              timeFraction: 1,
              minColor: [XU[0], XU[1], XU[2], 0],
              maxColor: [zU[0], zU[1], zU[2], 0]
            }],
            blendMode: CF.f.Add
          }
        }(this.style), {
          pos: DU
        }), this.particles.emitPoints(DU, IU, pU)
      }
    }
    const Sg = new Set(["Sky Spring"]);

    function rg(UU, XU, zU) {
      const cU = UU.split("|")[0];
      return "Air" !== XU || zU || ! function(UU) {
        const XU = UU.split("|")[0];
        return void 0 !== Az[XU] || Sg.has(XU)
      }(cU) ? null : UU
    }
    class ug {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(UU) {
        const XU = UU - this.lastTapAt >= 300;
        return this.lastTapAt = UU, XU
      }
    }
    class fg {
      constructor() {
        this.presses = new ug, this.predicted = null
      }
      tap(UU, XU) {
        const zU = this.presses.isNewPress(XU);
        return zU && (this.predicted = {
          station: UU,
          at: XU
        }), zU
      }
      consumeServerOpen(UU, XU) {
        const zU = this.predicted;
        return !(null === zU || zU.station !== UU || XU - zU.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class ig {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(UU, XU) {
        return UU && (this.thrustAt = XU), XU - this.thrustAt < 200
      }
    }
    const Hg = [.1, .05, .1],
      Mg = {
        texture: "effect_5",
        xY: Math.ceil(48),
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
        blendMode: CF.f.OneOne
      };
    class vg {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new ig, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      iG(UU, XU) {
        for (const [zU, cU] of XU.baf2JetFlames) UU.isLocalPlayer(zU) || (cU ? this.lit.add(zU) : this.lit.delete(zU))
      }
      onAfterRender(UU, XU) {
        const zU = performance.now(),
          cU = this.hold.lit(this.selfThrusting(UU, XU), zU);
        for (const [yU, QU] of this.flames)(yU === XU ? cU : this.lit.has(yU)) || this.setEmitting(QU, !1), yU === XU || UU.getPositionView(yU) ? !QU.emitting && zU - QU.offAt >= 1300 && (QU.particles.stop(), this.flames.delete(yU)) : (QU.particles.dispose(), this.flames.delete(yU), this.lit.delete(yU));
        cU && this.draw(UU, XU, XU);
        for (const yU of this.lit) this.draw(UU, XU, yU)
      }
      dispose() {
        for (const UU of this.flames.values()) UU.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(UU, XU) {
        var zU;
        const cU = UU.getLocalPlayerMovement();
        return !!cU && (null !== (yU = {
          option: null !== (zU = UU.getClientOption(XU, "jumpHoldThrust")) && void 0 !== zU ? zU : null,
          jumping: cU.jumpHeld,
          onGround: cU.onGround,
          alive: UU.isAlive(XU)
        }).option && yU.option.maxUpSpeed >= 0 && yU.jumping && !yU.onGround && yU.alive);
        var yU
      }
      draw(UU, XU, zU) {
        var cU, yU;
        const QU = this.pos;
        if (!UU.readDrawnPosition(zU, QU)) return;
        const AU = UU.readDrawnPosition(XU, this.camera) ? this.camera : QU;
        if (!((QU[0] - AU[0]) ** 2 + (QU[1] - AU[1]) ** 2 + (QU[2] - AU[2]) ** 2 < 1600) || !UU.particlesEnabled()) {
          const UU = this.flames.get(zU);
          return void(UU && this.setEmitting(UU, !1))
        }
        const FU = null !== (cU = this.flames.get(zU)) && void 0 !== cU ? cU : this.create(UU, zU, QU),
          oU = null !== (yU = UU.getDrawnHeading(zU)) && void 0 !== yU ? yU : 0,
          DU = this.at;
        DU[0] = QU[0] - .35 * Math.sin(oU), DU[1] = QU[1] + 1.05, DU[2] = QU[2] - .35 * Math.cos(oU), FU.particles.moveTo(DU), this.setEmitting(FU, !0)
      }
      setEmitting(UU, XU) {
        UU.emitting !== XU && (UU.emitting = XU, XU || (UU.offAt = performance.now()), UU.particles.setEmitRate(XU ? 60 : 0))
      }
      create(UU, XU, zU) {
        const cU = {
          particles: UU.createParticles(Mg, {
            pos: zU,
            half: Hg
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(XU, cU), cU
      }
    }

    function Vg(UU) {
      return "Reactor Frame" === cc("reactor", UU)
    }

    function sg(UU) {
      return Hz("reactor", UU) && !Vg(UU) && (UU.startsWith("Reactor Glass") || UU.startsWith("Reactor Port"))
    }
    const ng = "baf2Goal";
    class mg {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [qy.k.subscribe("setDirectionArrow", (UU => {
          let {
            id: XU,
            position: zU
          } = UU;
          XU === ng && (this.goal = zU, this.checkedAt = -1 / 0)
        })), qy.k.subscribe("clearDirectionArrow", (UU => {
          let {
            id: XU
          } = UU;
          null !== XU && XU !== ng || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const UU of this.subs) qy.k.unsubscribe(UU)
      }
      sideOf(UU, XU, zU, cU) {
        const yU = this.goal;
        if (!yU) return 0;
        zU - this.checkedAt > 1e3 && (this.checkedAt = zU, this.open = function(UU, XU) {
          const [zU, cU, yU] = UU.map(Math.floor);
          if (!sg(XU(zU, cU, yU))) return null;
          for (const [QU, AU] of [
              [1, 0],
              [0, 1]
            ]) {
            const UU = XU(zU + QU, cU, yU + AU),
              FU = XU(zU - QU, cU, yU - AU);
            if (Vg(FU) && sg(UU)) return [QU, 0, AU];
            if (Vg(UU) && sg(FU)) return [0 - QU, 0, 0 - AU]
          }
          return null
        }(yU, ((XU, zU, cU) => UU.blockIdToBlockName(UU.getBlockId(XU, zU, cU)))));
        const QU = this.open;
        if (!QU) return 0;
        const AU = cU(yU);
        if (Math.abs(AU.x - XU.x) > .05 || Math.abs(AU.y - XU.y) > .05) return 0;
        const FU = cU([yU[0] + QU[0], yU[1], yU[2] + QU[2]]).x - AU.x;
        return Math.abs(FU) < .3 ? 0 : FU > 0 ? 1 : -1
      }
    }
    class lg {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new mg, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.kp = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.QG = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((UU => {
          for (const XU of UU) XU.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(XU.target, XU.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.kp || this.clear()
        }, window.addEventListener("resize", this.QG)
      }
      onAfterRender(UU, XU) {
        var zU;
        this.api = UU, this.project = null !== (zU = null === XU || void 0 === XU ? void 0 : XU.projectWorldPosToScreenPos) && void 0 !== zU ? zU : null, this.queued || this.kp || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.kp = !0;
        for (const UU of this.moved.keys()) UU.style.transform = "";
        this.moved.clear();
        for (const UU of this.sideLabels.keys()) UU.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.QG)
      }
      clear() {
        for (const QU of this.moved.keys()) QU.isConnected || this.moved.delete(QU);
        for (const QU of this.sideLabels.keys()) QU.isConnected || this.sideLabels.delete(QU);
        if (0 === this.arrows.length) return;
        const UU = performance.now(),
          XU = UU - this.refreshedAt > 1e3;
        XU && (this.refreshedAt = UU, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const zU = this.trackerBox(),
          cU = this.barsBox(),
          yU = this.toastBox(XU);
        (zU || cU || yU) && XU && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let QU = 0; QU < this.arrows.length; QU++) {
          const XU = this.arrows[QU];
          this.labelOffsets.set(XU, this.runLabelAside(XU, UU));
          const AU = (zU ? this.shiftLeftOf(XU, zU) : 0) || this.shiftOnScreen(XU),
            FU = Math.min(cU ? this.liftAbove(XU, cU, AU) : 0, yU ? this.liftAbove(XU, yU, AU) : 0),
            oU = this.moved.get(XU);
          if (0 !== AU || 0 !== FU) {
            const UU = 0 === FU ? `translateX(${AU}px)` : `translate(${AU}px, ${FU}px)`;
            oU !== UU && (XU.style.transform = UU, this.moved.set(XU, UU))
          } else void 0 !== oU && (XU.style.transform = "", this.moved.delete(XU))
        }
      }
      trackerBox() {
        var UU, XU;
        const zU = null !== (UU = this.tracker) && void 0 !== UU && UU.isConnected ? this.tracker : null !== (XU = this.trackers[0]) && void 0 !== XU ? XU : null;
        if (zU !== this.tracker && this.watch(zU), this.boxStale && zU) {
          var cU, yU, QU;
          this.boxStale = !1;
          const UU = zU.closest(".NoRoom") ? null : zU.getBoundingClientRect(),
            XU = UU && UU.width > 0 ? null === (cU = this.hud) || void 0 === cU ? void 0 : cU.getBoundingClientRect() : void 0,
            AU = UU && XU ? Math.max(UU.top, XU.top) : null !== (yU = null === UU || void 0 === UU ? void 0 : UU.top) && void 0 !== yU ? yU : 0,
            FU = UU && XU ? Math.min(UU.bottom, XU.bottom) : null !== (QU = null === UU || void 0 === UU ? void 0 : UU.bottom) && void 0 !== QU ? QU : 0;
          this.box = UU && UU.width > 0 && FU > AU ? {
            left: UU.left,
            top: AU,
            right: UU.right,
            bottom: FU
          } : null
        }
        return zU ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var UU;
          this.barsStale = !1;
          const XU = null === (UU = this.statBars[0]) || void 0 === UU ? void 0 : UU.getBoundingClientRect();
          this.bars = XU && XU.width > 0 && XU.height > 0 ? {
            left: XU.left,
            top: XU.top,
            right: XU.right,
            bottom: XU.bottom
          } : null
        }
        return this.bars
      }
      toastBox(UU) {
        var XU;
        const zU = null !== (XU = this.toasts[0]) && void 0 !== XU ? XU : null;
        if (zU !== this.toastEl || UU && zU) {
          this.toastEl = zU;
          const UU = null === zU || void 0 === zU ? void 0 : zU.getBoundingClientRect();
          this.toast = UU && UU.width > 0 && UU.height > 0 ? {
            left: UU.left,
            top: UU.top,
            right: UU.right,
            bottom: UU.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(UU, XU, zU) {
        var cU;
        const yU = this.anchorOf(UU);
        if (!yU) return 0;
        const QU = yU.x + zU + (null !== (cU = this.labelOffsets.get(UU)) && void 0 !== cU ? cU : 0),
          {
            halfWidth: AU,
            labelled: FU
          } = this.extentOf(UU),
          oU = yU.y + this.em * (FU ? 6.2 : 3);
        return oU < XU.top - 6 || QU + AU < XU.left - 6 || QU - AU > XU.right + 6 ? 0 : XU.top - 6 - oU
      }
      watch(UU) {
        var XU, zU;
        this.tracker && this.sizes.unobserve(this.tracker), null === (XU = this.hud) || void 0 === XU || XU.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = UU, this.hud = null !== (zU = null === UU || void 0 === UU ? void 0 : UU.closest(".Baf2QuestHud")) && void 0 !== zU ? zU : null, this.box = null, this.boxStale = !0, UU && this.sizes.observe(UU), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(UU, XU) {
        var zU;
        const cU = this.anchorOf(UU);
        if (!cU) return 0;
        const {
          y: yU
        } = cU, QU = cU.x + (null !== (zU = this.labelOffsets.get(UU)) && void 0 !== zU ? zU : 0), AU = this.em, {
          halfWidth: FU,
          labelled: oU
        } = this.extentOf(UU), DU = yU - AU, EU = QU + FU;
        return yU + AU * (oU ? 6.2 : 3) < XU.top || DU > XU.bottom || EU < XU.left - 6 || QU - FU > XU.right ? 0 : Math.max(XU.left - 6 - EU, 6 - (QU - FU))
      }
      shiftOnScreen(UU) {
        var XU;
        const zU = this.anchorOf(UU);
        if (!zU) return 0;
        const {
          halfWidth: cU
        } = this.extentOf(UU), yU = zU.x + (null !== (XU = this.labelOffsets.get(UU)) && void 0 !== XU ? XU : 0), QU = yU + cU - (this.innerWidth - 6);
        return QU > 0 ? -QU : Math.max(0, 6 - (yU - cU))
      }
      runLabelAside(UU, XU) {
        var zU;
        let cU = null;
        for (let AU = 0; AU < UU.children.length; AU++) UU.children[AU].classList.contains("DirectionArrowLabel") && (cU = UU.children[AU]);
        if (!cU) return 0;
        const yU = UU.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(UU) : null,
          QU = (yU && this.api ? this.side.sideOf(this.api, {
            x: yU.x / this.innerWidth * 100,
            y: yU.y / this.innerHeight * 100
          }, XU, this.project) : 0) * this.halfWidthOf(cU);
        return QU !== (null !== (zU = this.sideLabels.get(cU)) && void 0 !== zU ? zU : 0) && (cU.style.transform = 0 === QU ? "" : `translateX(-50%) translateX(${QU}px)`, 0 === QU ? this.sideLabels.delete(cU) : this.sideLabels.set(cU, QU)), QU
      }
      extentOf(UU) {
        let XU = this.em,
          zU = !1;
        for (let cU = 0; cU < UU.children.length; cU++) {
          const yU = UU.children[cU],
            QU = yU.classList.contains("DirectionArrowLabel");
          zU ||= QU, (QU || yU.classList.contains("DirectionArrowDistance")) && (XU = Math.max(XU, this.halfWidthOf(yU)))
        }
        return {
          halfWidth: XU,
          labelled: zU
        }
      }
      halfWidthOf(UU) {
        let XU = this.halfWidths.get(UU);
        return void 0 === XU && (XU = UU.offsetWidth / 2, this.halfWidths.set(UU, XU), this.sizes.observe(UU), this.labels.add(UU)), XU
      }
      forgetGoneLabels() {
        for (const UU of this.labels) UU.isConnected || (this.sizes.unobserve(UU), this.halfWidths.delete(UU), this.labels.delete(UU))
      }
      anchorOf(UU) {
        const XU = UU.style.translate,
          zU = this.anchors.get(UU);
        if (zU && zU.translate === XU && zU.innerWidth === this.innerWidth && zU.innerHeight === this.innerHeight) return zU;
        const cU = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(XU);
        if (!cU) return null;
        const yU = {
          translate: XU,
          x: parseFloat(cU[1]) / 100 * this.innerWidth,
          y: parseFloat(cU[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(UU, yU), yU
      }
    }
    const xg = "Baf2ArrowText";

    function Jg(UU, XU) {
      const zU = UU.rows.find((UU => UU.current));
      return SU(UU.tutorial) && null !== zU && void 0 !== zU && zU.item && Vy(zU) && CU(zU.item).includes(XU) ? zU.item : null
    }
    const jg = new class {
      constructor(UU) {
        this.select = UU, this.picks = new Map
      }
      open(UU, XU, zU) {
        const cU = Jg(XU, UU);
        null !== cU && this.DI(UU, cU, zU)
      }
      follow(UU, XU) {
        if (FU())
          for (const [zU, {
              item: cU,
              had: yU
            }] of this.picks) {
            const QU = Jg(UU, zU);
            QU !== cU && (null !== QU && XU(cU) > yU ? this.DI(zU, QU, XU) : this.picks.delete(zU))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      DI(UU, XU, zU) {
        this.picks.set(UU, {
          item: XU,
          had: zU(XU)
        }), this.select(UU, XU)
      }
    }(Oy.p);

    function Kg(UU) {
      return XU => {
        let zU = 0;
        for (const cU of UU.getInventoryItems())(null === cU || void 0 === cU ? void 0 : cU.name) === XU && (zU += null === cU.amount ? 1 : Math.max(cU.amount, 0));
        return zU
      }
    }

    function bg(UU, XU, zU, cU) {
      UU.getClientOption(XU, "canCraft") && "inventory" !== gy.e.get("openInGameMenuName") && (jg.open(zU, cU.get(), Kg(UU)), qy.k.UY("toggleMenu", `inventory|${zU}`))
    }
    let Tg = null,
      hg = !1;

    function Uk(UU) {
      const XU = kQ();
      UU === Tg && XU === hg || (Tg = UU, hg = XU, (0, Oy.s)(function(UU, XU) {
        const zU = new Map;
        for (let cU = UU + 1; cU <= yU.length; cU++) {
          const yU = MQ(cU, UU, XU);
          if (yU)
            for (const XU of gU(cU).unlocks) zU.set(XU, {
              ...yU,
              stepsAway: cU - UU
            })
        }
        return zU
      }(UU, XU)))
    }

    function Xk() {
      return UU = () => {
        null !== Tg && Uk(Tg)
      }, (0, tQ.h)(gQ, UU);
      var UU
    }

    function zk() {
      return (0, Oy.x)(HQ(Object.keys(eU), SQ)), () => {
        (0, Oy.x)([])
      }
    }

    function ck(UU, XU, zU) {
      var cU, yU;
      const QU = UU.getTargetedBlock();
      if (!QU || ! function(UU, XU, zU) {
          if ("Chest" !== XU) return !1;
          const cU = UU.split("|")[0];
          if (!Dz(cU) || 0 === rX[cU].outputSlots.length) return !1;
          const yU = Gt(UU);
          return zU[0] === yU[0] && zU[1] === yU[1] && zU[2] === yU[2]
        }(zU, null === (cU = UU.HzU(XU)) || void 0 === cU ? void 0 : cU.name, QU.normal)) return !1;
      const [AU, FU, oU] = QU.yt, DU = UU.getBlockId(AU, FU, oU);
      return 0 === DU || !0 === (null === (yU = qU.h[DU]) || void 0 === yU ? void 0 : yU.canBePlacedOver)
    }
    var yk = zU(37480);
    const Qk = new Set(az.d);
    class Ak {
      constructor(UU) {
        this.toasts = UU, this.lastAt = -1 / 0
      }
      onAltAction(UU, XU, zU) {
        const cU = UU.getTargetedBlock();
        if (!cU || function(UU) {
            const XU = UU.split("|")[0];
            return Dz(XU) || null !== Pc(XU) || dU(XU) || az.d.includes(XU)
          }(zU) && !Qk.has(zU.split("|")[0])) return;
        const yU = UU.HzU(XU);
        if (!yU || !Qk.has(yU.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const QU = yU.typeObj.id,
          [AU, FU, oU] = cU.yt,
          DU = UU.getBlockId(AU, FU, oU),
          EU = qU.h[DU];
        (0 === DU || null !== EU && void 0 !== EU && EU.BI || null !== EU && void 0 !== EU && EU.canBePlacedOver) && UU.isSolidToPlayerBlockId(QU) && UU.canModifyBlockAt(AU, FU, oU) && UU.AzU(AU, FU, oU, QU) && !UU.AzU(AU, FU, oU, QU, XU) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, rU.ie)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, rU.H.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class Fk {
      constructor(UU) {
        this.show = UU, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(UU, XU, zU) {
        var cU;
        if (!XU) return this.started = null, void this.gatedThisHold.clear();
        if (!UU) return void(this.started = null);
        const yU = `${UU.x},${UU.y},${UU.z},${UU.uD}`;
        if (yU === this.started) return;
        this.started = yU;
        const QU = uc(UU.y) ? Xg(UU.block, UU.uD, UU.level) : null;
        if (null === QU || this.gatedThisHold.has(yU)) return;
        this.gatedThisHold.add(yU);
        const AU = UU.block.split("|")[0];
        zU - (null !== (cU = this.hintedAt.get(AU)) && void 0 !== cU ? cU : -1 / 0) < 5e3 || (this.hintedAt.set(AU, zU), this.show({
          baf2ToastText: zg(QU, UU.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var Dk = zU(42);

    function Ek(UU, XU) {
      const zU = [...UU.baf2CoreBankPaused];
      for (const [yU] of UU.baf2CoreBanked) zU.push(yU);
      for (const AU of yU) {
        for (const {
            item: UU
          }
          of AU.cost) zU.push(UU);
        for (const UU of AU.newDeposits) zU.push(UU.block);
        for (const UU of AU.unlocks) zU.push(UU, wU(UU));
        AU.reward && zU.push(AU.reward);
        for (const {
            item: UU
          }
          of null !== (cU = null === (QU = AU.charge) || void 0 === QU ? void 0 : QU.items) && void 0 !== cU ? cU : []) {
          var cU, QU;
          zU.push(UU)
        }
      }
      return {
        message: UU,
        itemNames: XU([...new Set(zU)])
      }
    }
    const Yk = "baf2MultiblockGuide";
    const Nk = new Map;
    const Ik = function(UU, XU, zU, yU) {
      let {
        localPlayerId: QU
      } = yU;
      const AU = new EF,
        FU = new UI,
        DU = new FI,
        EU = new QI(DU),
        YU = (UU, XU) => {
          XU ? EU.observe(UU) : EU.unobserve(UU)
        },
        NU = new yI,
        IU = new DI(YU),
        pU = UU => IU.covers(UU),
        aU = new CI;
      let tU;
      const gU = new SA((UU => {
          tU.sendCommand(UU)
        })),
        kU = () => {
          gU.send("baf2questbook")
        },
        GU = UU => function(UU, XU, zU) {
          const cU = {};
          for (const yU of zU) {
            let zU = Nk.get(yU);
            void 0 === zU && (zU = UU.getItemStat(XU, yU, "displayName"), Nk.set(yU, zU)), cU[yU] = zU
          }
          return cU
        }(tU, QU, UU),
        BU = new fy(kU),
        ZU = new vI((() => gy.e.get("loadingOverlayVisible"))),
        RU = new ZE(gU, BU, ZU),
        PU = new lI,
        WU = new Ak(ZU),
        LU = new Fk((UU => {
          ZU.show(UU, UU.baf2ToastMs)
        })),
        eU = new Xp(YU),
        CU = new Ct(eU),
        wU = new kA,
        OU = new Tt,
        SU = new KA,
        fU = new op({
          read: () => !1 !== Dk.k.getItem(Yk),
          write: UU => {
            Dk.k.setItem(Yk, UU)
          }
        }),
        iU = new fp(fU),
        HU = new Mp(fU),
        MU = new Fa(fU, (UU => function(UU, XU) {
          const zU = xF(XU.w, XU.h, XU.d),
            cU = new Uint8Array(zU);
          for (let yU = 0; yU < zU; yU++) {
            const zU = wp(UU, Tz(XU, zc(XU, yU)));
            cU[yU] = null === zU ? 0 : sF(zU)
          }
          return cU
        }(tU, UU)), Tp(gU)),
        vU = new oa(fU, Tp(gU)),
        VU = new Qa,
        mU = (UU, XU) => {
          let [zU, cU, yU] = UU;
          VU.answered(XU) || ZU.show({
            baf2ToastText: [(0, rU.ie)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: zU,
                h: cU,
                d: yU
              }
            }, rU.H.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      MU.onSizeNotTaken(mU), vU.onSizeNotTaken(mU);
      const lU = new Na,
        xU = new la(fU),
        jU = new Ja,
        KU = new Qt(jU),
        bU = new gt,
        hU = new wt,
        UX = new vt(hU),
        XX = new bt(hU),
        zX = hU.lookSource(),
        cX = new Ng({
          handles: UU => zX.handles(UU) || UU === uU,
          line: (UU, XU) => UU === uU ? function(UU, XU, zU) {
            var cU;
            const yU = nU(null === (cU = XU.at(zU)) || void 0 === cU ? void 0 : cU.item);
            return null === yU ? {
              key: `${Dg}lookFarmEmpty`
            } : {
              key: UU.blockIdToBlockName(UU.getBlockId(zU[0], zU[1], zU[2])).endsWith("|Running") ? `${Dg}lookFarmRunning` : `${Dg}lookFarmWaiting`,
              keys: {
                mob: sU(yU)
              }
            }
          }(tU, eU, XU) : zX.line(UU, XU),
          version: () => zX.version() + eU.version()
        }, (UU => Vp(fU.all(), UU, (UU => wp(tU, UU)))), (() => BU.get().tier)),
        yX = new wa,
        QX = new dg,
        AX = new Og,
        FX = Og.blade(),
        oX = new vg,
        DX = new jI,
        EX = new lg,
        NX = new fg,
        IX = new ug;
      let pX = -1 / 0,
        aX = 0,
        tX = -1 / 0,
        gX = -1 / 0;
      const kX = () => {
          gU.send("baf2islandsclose"), gX = Date.now()
        },
        GX = [];

      function BX(UU) {
        var XU, zU, cU, yU, QU, AU, oU;
        "core" === (null === (XU = FU.get()) || void 0 === XU ? void 0 : XU.kind) && "core" !== (null === UU || void 0 === UU ? void 0 : UU.kind) && gU.send("baf2coreclose"), "power" === (null === (zU = FU.get()) || void 0 === zU ? void 0 : zU.kind) && "power" !== (null === UU || void 0 === UU ? void 0 : UU.kind) && gU.send("baf2powerclose"), "water" === (null === (cU = FU.get()) || void 0 === cU ? void 0 : cU.kind) && "water" !== (null === UU || void 0 === UU ? void 0 : UU.kind) && gU.send(TU.s), "terminal" === (null === (yU = FU.get()) || void 0 === yU ? void 0 : yU.kind) && "terminal" !== (null === UU || void 0 === UU ? void 0 : UU.kind) && gU.send("baf2terminalclose"), "islands" === (null === (QU = FU.get()) || void 0 === QU ? void 0 : QU.kind) && "islands" !== (null === UU || void 0 === UU ? void 0 : UU.kind) && kX();
        const DU = hU.getStatus();
        "collider" === (null === (AU = FU.get()) || void 0 === AU ? void 0 : AU.kind) && "collider" !== (null === UU || void 0 === UU ? void 0 : UU.kind) && DU && gU.send(qo(DU, "close"));
        const EU = UU => "reactor" === UU || "battery" === UU;
        if (EU(null === (oU = FU.get()) || void 0 === oU ? void 0 : oU.kind) && !EU(null === UU || void 0 === UU ? void 0 : UU.kind)) {
          var YU, NU, IU;
          const UU = "reactor" === (null === (YU = FU.get()) || void 0 === YU ? void 0 : YU.kind) ? null === (NU = MU.get()) || void 0 === NU ? void 0 : NU.status.baf2RxAt : null === (IU = vU.get()) || void 0 === IU ? void 0 : IU.status.baf2BatAt;
          UU && gU.send(YX(UU, "close"))
        }
        "quests" === (null === UU || void 0 === UU ? void 0 : UU.kind) && kU(), FU.set(UU), null === UU && PU.release()
      }

      function ZX() {
        (0, ty.j)(), BX(null)
      }
      let RX = new Set,
        PX = !1;
      const WX = {
        onCreate: UU => {
          tU = UU, tU.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const XU of eX) {
            const UU = rX[XU].inputSlots ? dF(AU) : RF(XU, AU, wU, gU);
            GX.push((0, py.f)(XU, UU))
          }
          GX.push((0, ty.u)((0, cU.createElement)(cU.Fragment, null, (0, cU.createElement)(NI, {
            controller: IU
          }), (0, cU.createElement)(yp, {
            store: eU
          }), (0, cU.createElement)(pg, {
            store: cX
          }), (0, cU.createElement)(HI, {
            store: BU
          }), (0, cU.createElement)(nI, {
            store: ZU
          }), (0, cU.createElement)(xI, {
            store: PU
          }), (0, cU.createElement)(bI, {
            store: DX
          }), (0, cU.createElement)(Ya, {
            store: lU
          }), (0, cU.createElement)(ja, {
            store: jU
          })), {
            content: (0, cU.createElement)(XI, {
              commands: gU,
              store: FU,
              power: wU,
              water: SU,
              reactor: MU,
              battery: vU,
              collider: hU,
              terminal: OU,
              quests: BU,
              tutorial: RU,
              close: ty.l,
              leave: () => {
                PU.dropHeld(), (0, ty.j)()
              },
              askIslands: () => {
                gX = -1 / 0, pX = Date.now(), aX = gU.send(JU)
              },
              openSocial: () => {
                (0, ty.j)(), gy.e.set({
                  openEverythingMenuName: Yz.s.SOCIAL
                })
              },
              showCore: UU => {
                BX({
                  kind: "core",
                  core: UU
                }), gU.send("baf2corereopen")
              }
            }),
            onClose: () => {
              BX(null)
            }
          })), GX.push((0, ay.w)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              BX({
                kind: "quests"
              }), (0, ty.r)()
            }
          })), GX.push(function(UU, XU) {
            let zU = null,
              cU = () => {};
            const yU = XU => {
              var yU;
              let {
                tutorial: QU,
                tutorialKnown: AU
              } = XU;
              (null === (yU = zU) || void 0 === yU ? void 0 : yU.tutorial) === QU && zU.tutorialKnown === AU || (zU = {
                tutorial: QU,
                tutorialKnown: AU
              }, cU = (0, ay.w)({
                id: "baf2Tutorial",
                order: -1,
                labelKey: GE[QU],
                icon: {
                  kind: "icon",
                  name: kE[QU]
                },
                iconOnly: !0,
                disabled: !AU,
                className: "Baf2TutorialButton",
                onClick: () => {
                  UU.next()
                }
              }))
            };
            yU(XU.get());
            const QU = qy.k.subscribe(Sy, yU);
            return () => {
              qy.k.unsubscribe(QU), cU()
            }
          }(RU, BU)), PX = !1, GX.push(Xk()), GX.push(zk()), GX.push(function() {
            const UU = qy.k.subscribe(Sy, Ky),
              XU = () => {
                if (jy) {
                  const UU = jy;
                  jy = null, (0, Oy.t)(UU)
                }
              },
              zU = qy.k.subscribe("toggleMenu", (UU => {
                "inventory" === (null === UU || void 0 === UU ? void 0 : UU.split("|")[0]) && XU()
              })),
              cU = qy.k.subscribe("appManagerUpdated|openInGameMenuName", (UU => {
                "inventory" === UU && XU()
              }));
            return () => {
              qy.k.unsubscribe(UU), qy.k.unsubscribe(zU), qy.k.unsubscribe(cU)
            }
          }()), GX.push(function(UU) {
            const XU = Kg(UU),
              zU = qy.k.subscribe(Sy, (UU => {
                jg.follow(UU, XU)
              }));
            return () => {
              qy.k.unsubscribe(zU), jg.clear()
            }
          }(tU)), GX.push(function() {
            const UU = document.documentElement,
              XU = (0, qI.e)(".InvenBodyRight", [], (() => {
                const XU = document.querySelector(".InvenBodyRight");
                XU && UU.style.setProperty("--baf2-backpack-width", `${XU.offsetWidth}px`)
              }));
            return () => {
              XU(), UU.style.removeProperty("--baf2-backpack-width")
            }
          }()), GX.push(function() {
            const UU = document.documentElement;
            return UU.classList.add(xg), () => {
              UU.classList.remove(xg)
            }
          }()), GX.push((() => {
            EU.dispose(), DU.dispose()
          })), aU.start(tU), GX.push((() => {
            aU.dispose(), oX.dispose(), CU.dispose()
          }))
        },
        onClose: () => {
          (0, Oy.t)([]), jy = null, Jy = new Set, Tg = null, (0, Oy.s)(new Map), Nk.clear();
          for (const UU of GX) UU();
          BU.dispose(), cX.dispose(), ZU.dispose(), PU.dispose(), yX.dispose(), QX.dispose(tU), iU.dispose(tU), HU.dispose(tU), xU.dispose(tU), KU.dispose(tU), jU.dispose(), bU.dispose(), fU.dispose(), MU.dispose(), vU.dispose(), lU.dispose(), AX.dispose(), FX.dispose(), DX.dispose(), UX.dispose(tU), XX.dispose(tU), hU.dispose(), EX.dispose(), gU.clear()
        },
        onAfterRender: (UU, XU) => {
          var zU, cU, yU;
          try {
            aU.onAfterRender(XU)
          } catch (DU) {
            console.error("Error drawing BAF2 belt items", DU)
          }
          try {
            oX.onAfterRender(tU, QU)
          } catch (DU) {
            console.error("Error drawing BAF2 jet flames", DU)
          }
          PX || (PX = !0, gU.send("baf2clientready"));
          const AU = tU.getPositionView(QU);
          IU.onAfterRender(XU, AU, NU), eU.onAfterRender(XU, AU, NU, pU), EU.run(NU), yX.onAfterRender(tU, AU), QX.onAfterRender(tU, AU), CU.onAfterRender(tU, AU), iU.onAfterRender(tU, AU), HU.onAfterRender(tU, QU, AU), xU.onAfterRender(tU, QU, AU), KU.onAfterRender(tU, QU), bU.onAfterRender(tU, AU), BU.onPlayerY(AU[1]), UX.onAfterRender(tU), XX.onAfterRender(tU, QU, AU);
          const oU = tU.getTargetedBlock();
          cX.onAfterRender(tU, QU, null !== (zU = null === oU || void 0 === oU ? void 0 : oU.O4) && void 0 !== zU ? zU : 0, null !== (cU = null === oU || void 0 === oU ? void 0 : oU.position) && void 0 !== cU ? cU : null), EX.onAfterRender(tU, XU), LU.onMining(function(UU, XU) {
            var zU, cU;
            const yU = UU.getMiningBlock();
            if (!yU) return null;
            const QU = (0, qU.f)(UU.getBlockId(yU[0], yU[1], yU[2])),
              AU = null !== (zU = null === (cU = UU.HzU(XU)) || void 0 === cU ? void 0 : cU.name) && void 0 !== zU ? zU : null,
              FU = UU.getItemStat(XU, QU.split("|")[0], "harvestLevel");
            return {
              block: QU,
              x: yU[0],
              y: yU[1],
              z: yU[2],
              uD: AU,
              level: FU
            }
          }(tU, QU), tU.isMining(), performance.now()), "dropMap" === (null === (yU = FU.get()) || void 0 === yU ? void 0 : yU.kind) && uc(AU[1]) && ZX()
        },
        onPlayerChangeBlock: (UU, XU, zU, cU, yU, AU) => {
          UU === QU && function(UU, XU, zU, cU, yU, QU, AU) {
            const FU = rg(QU, AU, UU.isPlayerCrouching(XU));
            if (null === FU) return;
            if (UU.Jw(zU, cU, yU, FU), !UU.getClientOption(XU, "canPickUpItems")) return;
            const oU = Az[FU.split("|")[0]];
            var DU, EU, YU;
            void 0 !== oU && (DU = UU.getInventoryItems(), EU = oU, YU = Dp.f.maxItemStackSize, UU.getInventoryFreeSlotCount(XU) > 0 || DU.some((UU => null !== UU && UU.name === EU && null !== UU.amount && UU.amount < YU))) && UU.playSound(XU, (0, yk.f)("pickUp"), .5, 1)
          }(tU, UU, XU, zU, cU, yU, AU)
        },
        onPlayerAltAction: (UU, XU, zU, cU, yU) => {
          var AU, FU;
          if (!tU.getClientOption(QU, "canPickUpItems")) return;
          const oU = null !== (AU = null === (FU = tU.HzU(QU)) || void 0 === FU ? void 0 : FU.name) && void 0 !== AU ? AU : null,
            DU = function(UU, XU) {
              const zU = UU.split("|")[0];
              return dU(zU) && XU !== Qy && "Sky Pack" !== XU ? zU : null
            }(yU, oU);
          if (null !== DU) return void(NX.tap(DU, performance.now()) && bg(tU, QU, DU, BU));
          if (!Mc(oU)) return;
          const EU = IX.isNewPress(performance.now()),
            YU = function(UU, XU, zU) {
              return !Mc(XU) || zU ? null : jc(UU)
            }(yU, oU, tU.isPlayerCrouching(QU));
          null !== YU && EU && tU.Jw(XU, zU, cU, YU)
        },
        onPlayerAttemptAltAction: (UU, XU, zU, cU, yU) => {
          if (function(UU, XU, zU, cU, yU) {
              "Workbench" === cU.split("|")[0] && UU.getClientOption(zU, "canCraft") && (jg.open("Workbench", yU.get(), Kg(UU)), XU.send("baf2station Workbench"))
            }(tU, gU, QU, yU, BU), ck(tU, QU, yU)) return "preventAction";
          WU.onAltAction(tU, QU, yU)
        },
        onReceivedMessageFromServer: (UU, XU) => {
          if ("baf2MachineStatus" === UU) {
            var zU, cU, yU, DU, EU, YU, NU, pU, kU, RU, WU, dU, LU, CU, qU, rU;
            const UU = XU,
              QU = UU.baf2MachineTaught;
            AU.set(UU.baf2MachinePos, {
              status: UU.baf2MachineStatus,
              power: null !== (zU = UU.baf2MachinePower) && void 0 !== zU ? zU : null,
              opLeftMs: null !== (cU = UU.baf2MachineOpLeftMs) && void 0 !== cU ? cU : null,
              dug: UU.baf2MachineYield ? {
                item: UU.baf2MachineYield,
                name: GU([UU.baf2MachineYield])[UU.baf2MachineYield]
              } : null,
              powerCap: null !== (yU = UU.baf2MachinePowerCap) && void 0 !== yU ? yU : null,
              powerRates: null !== (DU = UU.baf2MachinePowerRates) && void 0 !== DU ? DU : null,
              coupled: !0 === UU.baf2MachineCoupled,
              couplerLevel: null !== (EU = UU.baf2MachineCoupler) && void 0 !== EU ? EU : 1,
              taught: QU,
              taughtName: QU ? GU([QU])[QU] : null,
              tier: null !== (YU = UU.baf2MachineTier) && void 0 !== YU ? YU : null,
              input: null !== (NU = UU.baf2MachineInput) && void 0 !== NU ? NU : null,
              inertCoupler: null !== (pU = UU.baf2MachineInertCoupler) && void 0 !== pU ? pU : null,
              inputShort: null !== (kU = UU.baf2MachineInputShort) && void 0 !== kU ? kU : null,
              field: null !== (RU = UU.baf2MachineField) && void 0 !== RU ? RU : null,
              noSeeds: !0 === UU.baf2MachineNoSeeds,
              fuelFed: !0 === UU.baf2MachineFuelFed,
              fuelFeeds: !0 === UU.baf2MachineFuelFeeds,
              coreFull: !0 === UU.baf2MachineCoreFull,
              waterUnpowered: !0 === UU.baf2MachineWaterUnpowered,
              powerShort: !0 === UU.baf2MachinePowerShort,
              powerWait: !0 === UU.baf2MachinePowerWait,
              reactorPowered: !0 === UU.baf2MachineReactorPowered,
              fuelLeftMs: null !== (WU = UU.baf2MachineFuelLeftMs) && void 0 !== WU ? WU : null,
              burning: null !== (dU = UU.baf2MachineBurning) && void 0 !== dU ? dU : null,
              fuelKeep: null !== (LU = UU.baf2MachineFuelKeep) && void 0 !== LU ? LU : null,
              water: null !== (CU = UU.baf2MachineWater) && void 0 !== CU ? CU : null,
              farm: null !== (qU = UU.baf2MachineFarm) && void 0 !== qU ? qU : null,
              cryo: null !== (rU = UU.baf2MachineCryo) && void 0 !== rU ? rU : null
            })
          } else if ("baf2StationOpen" === UU) {
            const UU = XU.baf2Station;
            NX.consumeServerOpen(UU, performance.now()) || bg(tU, QU, UU, BU)
          } else if ("baf2Power" === UU) {
            const UU = XU;
            wU.set(UU), UU.baf2PowerOpen && (BX({
              kind: "power"
            }), (0, ty.r)())
          } else if (UU === TU.A) {
            const UU = XU;
            SU.set(UU), UU.baf2WaterOpen && (BX({
              kind: "water"
            }), (0, ty.r)())
          } else if ("baf2RxPlans" === UU) {
            var uU, iU, HU;
            const UU = XU;
            fU.iG(UU);
            const zU = new Set(UU.baf2RxPlanList.map((UU => {
              let [XU, zU, cU] = UU;
              return `${XU},${zU},${cU}`
            })));
            lU.retain(zU);
            const cU = null === (uU = FU.get()) || void 0 === uU ? void 0 : uU.kind,
              yU = "reactor" === cU ? null === (iU = MU.get()) || void 0 === iU ? void 0 : iU.status.baf2RxAt : "battery" === cU ? null === (HU = vU.get()) || void 0 === HU ? void 0 : HU.status.baf2BatAt : void 0;
            yU && RX.has(yU.join(",")) && !zU.has(yU.join(",")) && ZX(), RX = zU
          } else if ("baf2RxStatus" === UU) {
            const UU = XU;
            MU.set(UU), UU.baf2RxOpen && (BX({
              kind: "reactor"
            }), (0, ty.r)())
          } else if ("baf2BatStatus" === UU) {
            const UU = XU;
            vU.set(UU), UU.baf2BatOpen && (BX({
              kind: "battery"
            }), (0, ty.r)())
          } else if ("baf2RxAlarm" === UU) lU.iG(XU);
          else if ("baf2Bomb" === UU) jU.iG(XU, tU.getPositionView(QU));
          else if ("baf2Fallout" === UU) bU.iG(XU);
          else if ("baf2ColBeams" === UU) hU.onBeams(XU);
          else if ("baf2ColStatus" === UU) {
            const UU = XU;
            var sU, nU;
            if (hU.onStatus(UU), UU.baf2ColOpen) hU.onOpen(null !== (sU = null === (nU = tU.HzU(QU)) || void 0 === nU ? void 0 : nU.name) && void 0 !== sU ? sU : null), BX({
              kind: "collider"
            }), (0, ty.r)()
          } else if ("baf2Terminal" === UU) {
            const UU = XU;
            var mU;
            if (OU.apply(UU)) UU.baf2TermReset && (BX({
              kind: "terminal"
            }), (0, ty.r)());
            else "terminal" === (null === (mU = FU.get()) || void 0 === mU ? void 0 : mU.kind) && (FU.set(null), (0, ty.j)())
          } else if ("baf2Core" === UU) {
            var xU;
            const UU = XU;
            if (oU(!0 === UU.baf2CoreNuclear), function(UU, XU) {
                return "core" === (null === UU || void 0 === UU ? void 0 : UU.kind) && XU.baf2CoreTier > UU.core.message.baf2CoreTier
              }(FU.get(), UU)) return void(0, ty.j)();
            if (UU.baf2CoreRefresh && "core" !== (null === (xU = FU.get()) || void 0 === xU ? void 0 : xU.kind)) return;
            BX({
              kind: "core",
              core: Ek(UU, GU)
            }), UU.baf2CoreRefresh || (0, ty.r)()
          } else if ("baf2WrenchUndo" === UU) {
            const {
              baf2WrenchPos: UU,
              baf2WrenchBlock: zU
            } = XU;
            tU.Jw(UU[0], UU[1], UU[2], zU)
          } else if ("baf2Toast" === UU) {
            const UU = XU;
            VU.heard(performance.now(), UU.baf2ToastMs), ZU.show(UU)
          } else if ("baf2Area" === UU) PU.arrive(XU, null !== FU.get());
          else if ("baf2Quest" === UU) {
            const UU = XU;
            oU(!0 === UU.baf2QuestNuclear), BU.set(UU, function(UU, XU) {
              var zU, cU, yU, QU, AU;
              const FU = [];
              for (const [, , EU, , , , , , YU, NU] of UU.baf2QuestSteps) null !== EU && FU.push(EU), FU.push(...null !== YU && void 0 !== YU ? YU : [], ...null !== NU && void 0 !== NU ? NU : []);
              UU.baf2QuestReward && FU.push(UU.baf2QuestReward);
              const oU = null === (zU = UU.baf2QuestSide) || void 0 === zU ? void 0 : zU[2][2];
              oU && FU.push(oU), FU.push(...null !== (cU = null === (yU = UU.baf2QuestSide) || void 0 === yU ? void 0 : yU[2][8]) && void 0 !== cU ? cU : [], ...null !== (QU = null === (AU = UU.baf2QuestSide) || void 0 === AU ? void 0 : AU[2][9]) && void 0 !== QU ? QU : []);
              for (const [EU] of null !== (DU = UU.baf2QuestAlso) && void 0 !== DU ? DU : []) {
                var DU;
                FU.push(EU)
              }
              return XU(FU)
            }(UU, GU)), Uk(UU.baf2QuestTier)
          } else if ("baf2Route" === UU) ! function(UU, XU) {
            let {
              baf2RouteCells: zU,
              baf2RouteInto: cU
            } = XU;
            0 !== zU.length && cU ? UU.setRouteChevrons({
              cells: zU.map(((UU, XU) => {
                const [yU, , QU] = function(UU, XU, zU) {
                  const cU = zU + 1 < UU.length ? UU[zU + 1] : XU;
                  return [cU[0] - UU[zU][0], 0, cU[2] - UU[zU][2]]
                }(zU, cU, XU);
                return {
                  pos: UU,
                  way: [yU, QU]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : UU.setRouteChevrons(null)
          }(tU, XU);
          else if ("baf2QuestBook" === UU) BU.setBook(XU);
          else if ("baf2Stalls" === UU) IU.set(XU.baf2StallCells);
          else if (UU === az.l) aU.onMoves(XU);
          else if (UU === az.h) aU.onLines(XU);
          else if ("baf2Labels" === UU) eU.iG(XU);
          else if ("baf2DropMap" === UU) BX({
            kind: "dropMap",
            dropMap: XU
          }), (0, ty.r)();
          else if ("baf2Islands" === UU) {
            var KU, UX;
            const UU = XU;
            if (gU.syncIslandEdits(UU.baf2IslandsAnswered), !UU.baf2IslandsOpen && "islands" !== (null === (KU = FU.get()) || void 0 === KU ? void 0 : KU.kind)) return;
            if (UU.baf2IslandsOpen) {
              var XX, zX;
              const XU = gy.e.get("openEverythingMenuName"),
                zU = gU.sent() >= aX,
                cU = "other" !== (IX = {
                  askedAtMs: pX,
                  askSent: zU,
                  reaskedAtMs: tX,
                  nowMs: Date.now(),
                  panel: null !== (XX = null === (zX = FU.get()) || void 0 === zX ? void 0 : zX.kind) && void 0 !== XX ? XX : null,
                  inGameMenu: gy.e.get("openInGameMenuName"),
                  everythingMenu: null === XU ? null : XU === Yz.s.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== UU.baf2IslandsFocusInvite
                }).everythingMenu && (!!IX.focusInvite || "islands" === IX.panel && "clientGame" === IX.inGameMenu || !(IX.nowMs - IX.reaskedAtMs < eD) && (IX.askSent && IX.nowMs - IX.askedAtMs < eD ? "core" === IX.panel && "clientGame" === IX.inGameMenu && null === IX.everythingMenu : "shop" === IX.everythingMenu || null === IX.inGameMenu));
              if (zU && (pX = -1 / 0), tX = -1 / 0, !cU) return void kX()
            }
            const zU = (yX = UU.baf2IslandsOpen, QX = "islands" === (null === (UX = FU.get()) || void 0 === UX ? void 0 : UX.kind), EX = gX, YX = Date.now(), yX && !QX && YX - EX < eD);
            BX({
              kind: "islands",
              islands: UU,
              arrivedAtMs: Date.now(),
              backToCore: CD(FU.get())
            }), zU && (gX = -1 / 0, tX = Date.now(), gU.send(JU)), UU.baf2IslandsOpen && ("clientGame" !== gy.e.get("openInGameMenuName") && (0, ky.f)(), (0, ty.r)())
          } else if ("baf2CoopTransfer" === UU) {
            var cX;
            const UU = XU;
            UU.baf2TransferOn ? (BX({
              kind: "transfer",
              transfer: UU,
              arrivedAtMs: Date.now()
            }), (0, ty.r)()) : "transfer" === (null === (cX = FU.get()) || void 0 === cX ? void 0 : cX.kind) && (0, ty.j)()
          } else "baf2IslandLeft" === UU ? (PU.dropHeld(), null !== FU.get() && ZX(), "inventory" === gy.e.get("openInGameMenuName") && (0, ky.f)()) : "baf2Arc" === UU ? AX.iG(tU, XU) : "baf2Blade" === UU ? FX.onBlade(tU, XU) : "baf2JetFlame" === UU ? oX.iG(tU, XU) : "baf2GearPower" === UU && DX.iG(XU);
          var yX, QX, EX, YX, IX
        }
      };
      return WX
    }
  },
  39271: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => AU,
      h: () => FU
    });
    var cU = zU(344),
      yU = zU(34884),
      QU = zU(3660);

    function AU(UU) {
      const XU = (0, QU.c)(UU);
      return (0, cU.Wb)(UU, void 0 === XU ? void 0 : (0, yU.displayNameOf)(XU))
    }

    function FU(UU, XU) {
      return UU(AU(XU))
    }
  },
  39296: (UU, XU, zU) => {
    function cU(UU, XU, zU) {
      const cU = new Set,
        yU = new ResizeObserver(zU),
        QU = () => {
          const XU = new Set(document.querySelectorAll(UU));
          let QU = !1;
          for (const UU of cU) XU.has(UU) || (yU.unobserve(UU), cU.delete(UU), QU = !0);
          for (const UU of XU) cU.has(UU) || (yU.observe(UU), AU.observe(UU, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), cU.add(UU));
          QU && zU()
        },
        AU = new MutationObserver((XU => {
          XU.some((UU => "attributes" === UU.type)) && zU(), XU.some((XU => function(UU, XU, zU) {
            if ("childList" !== UU.type) return !1;
            for (const cU of UU.addedNodes)
              if (cU instanceof Element && (cU.matches(XU) || cU.querySelector(XU))) return !0;
            for (const cU of UU.removedNodes)
              if (cU instanceof Element)
                for (const UU of zU)
                  if (cU.contains(UU)) return !0;
            return !1
          }(XU, UU, cU))) && QU()
        }));
      AU.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const FU of XU) yU.observe(FU);
      return window.addEventListener("resize", zU), QU(), zU(), () => {
        yU.disconnect(), AU.disconnect(), window.removeEventListener("resize", zU)
      }
    }
    zU.d(XU, {
      e: () => cU
    })
  },
  39283: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => FU
    });
    var cU = zU(39278);
    const yU = 5,
      QU = [0, 0, 0],
      AU = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function FU(UU, XU, zU, FU, oU, DU) {
      let [EU, YU, NU] = FU;
      const IU = (EU + .5 - zU[0]) ** 2 + (YU - zU[1]) ** 2 + (NU + .5 - zU[2]) ** 2;
      let pU = null;
      IU <= DU ** 2 && (QU[0] = EU + .5, QU[1] = YU + oU, QU[2] = NU + .5, pU = XU.projectWorldPosToViewport(QU));
      const aU = null !== pU && pU.x > -yU && pU.x < 100 + yU && pU.y > -yU && pU.y < 100 + yU;
      return (0, cU.g)(UU, !aU), aU ? (AU.x = pU.x, AU.y = pU.y, AU.distSq = IU, AU) : null
    }
  },
  39278: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => AU,
      g: () => QU
    });
    const cU = new WeakMap;

    function yU(UU) {
      let XU = cU.get(UU);
      return XU || (XU = {
        hidden: UU.hidden,
        x: NaN,
        y: NaN
      }, cU.set(UU, XU)), XU
    }

    function QU(UU, XU) {
      const zU = yU(UU);
      zU.hidden !== XU && (zU.hidden = XU, UU.hidden = XU)
    }

    function AU(UU, XU, zU) {
      const cU = yU(UU);
      cU.x === XU && cU.y === zU || (cU.x = XU, cU.y = zU, UU.style.translate = `${XU}vw ${zU}vh`)
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);