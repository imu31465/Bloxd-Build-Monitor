export const id = 235;
export const ids = [235];
export const modules = {
  38048: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => PU
    });
    var tU = gU(38052);
    const pU = [0, 0, 0];
    class EU {
      constructor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pU;
        this.pool = UU, this.origin = RU, this.count = 0, this.free = []
      }
      take() {
        var UU;
        const RU = null !== (UU = this.free.pop()) && void 0 !== UU ? UU : this.count++;
        return RU >= this.pool.hG && this.pool.grow(Math.max(2 * this.pool.hG, RU + 1)), this.hide(RU), RU
      }
      release(UU) {
        this.hide(UU), this.free.push(UU)
      }
      write(UU, RU, gU, pU) {
        const {
          records: EU
        } = this.pool, {
          origin: PU
        } = this, TU = UU * tU.d;
        EU[TU] = RU - PU[0], EU[TU + 1] = gU - PU[1], EU[TU + 2] = pU - PU[2], EU[TU + tU.g] = 0, this.pool.markDirty(UU)
      }
      hide(UU) {
        this.pool.records[UU * tU.d + tU.g] = 1, this.pool.markDirty(UU)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class PU {
      constructor(UU, RU, gU) {
        this.api = UU, this.model = RU, this.initialCapacity = gU, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(UU) {
        let RU = this.kinds.get(UU);
        if (void 0 === RU) {
          const gU = this.api.createInstancePool({
            ...this.model,
            item: UU
          }, this.initialCapacity);
          null === gU || void 0 === gU || gU.setOrigin(this.origin[0], this.origin[1], this.origin[2]), RU = gU && new EU(gU, this.origin), this.kinds.set(UU, RU)
        }
        return RU
      }
      follow(UU) {
        const {
          origin: RU
        } = this;
        if (Math.abs(UU[0] - RU[0]) <= 512 && Math.abs(UU[1] - RU[1]) <= 512 && Math.abs(UU[2] - RU[2]) <= 512) return !1;
        RU[0] = Math.floor(UU[0]), RU[1] = Math.floor(UU[1]), RU[2] = Math.floor(UU[2]);
        for (const gU of this.kinds.values()) null === gU || void 0 === gU || gU.pool.setOrigin(RU[0], RU[1], RU[2]);
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
  38069: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => PU,
      f: () => TU,
      j: () => qU
    });
    const tU = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      pU = [0, 1, 2, 0, 2, 3],
      EU = [4, 5];

    function PU(UU, RU, gU, tU, pU) {
      for (let PU = 0; PU < 6; PU++) EU.includes(PU) === pU && KU(UU, RU, gU, tU, PU)
    }

    function TU(UU, RU, gU, tU) {
      for (let pU = 0; pU < 6; pU++) KU(UU, RU, gU, tU, pU)
    }

    function qU(UU, RU, gU, EU, PU) {
      for (let TU = 0; TU < 6; TU++)
        for (const qU of [0, 1]) {
          const [KU, cU, GU] = [qU + 2, qU + 1, (qU + 3) % 4], jU = UU.length / 3;
          for (const [RU, pU] of [
              [qU, cU],
              [KU, cU],
              [KU, GU],
              [qU, GU]
            ])
            for (let qU = 0; qU < 3; qU++) {
              const KU = tU[3 * (4 * TU + RU) + qU],
                cU = tU[3 * (4 * TU + pU) + qU];
              UU.push((KU + (cU - KU) * PU) * EU / 2 + gU[qU])
            }
          for (const UU of pU) RU.push(jU + UU)
        }
    }

    function KU(UU, RU, gU, EU, PU) {
      let [TU, qU, KU] = gU, [cU, GU, jU] = EU;
      const uU = UU.length / 3;
      for (let pU = 4 * PU; pU < 4 * PU + 4; pU++) UU.push(tU[3 * pU] * cU / 2 + TU, tU[3 * pU + 1] * GU / 2 + qU, tU[3 * pU + 2] * jU / 2 + KU);
      for (const tU of pU) RU.push(uU + tU)
    }
  },
  38041: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      default: () => hW
    });
    var tU = gU(56);
    const pU = [{
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
      EU = 10;
    let PU = !0;

    function TU() {
      return PU
    }

    function qU(UU) {
      PU = UU
    }
    const KU = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function cU() {
      return PU ? pU.length : EU
    }

    function GU(UU) {
      var RU, gU;
      return null !== (RU = null === (gU = pU[UU - 1]) || void 0 === gU ? void 0 : gU.reactorTier) && void 0 !== RU ? RU : 0
    }

    function jU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : GU(UU) > 0;
      return gU && !PU ? "hidden" : UU <= RU ? "open" : gU ? RU < 5 ? "hidden" : RU < EU ? "teaser" : "locked" : "locked"
    }

    function uU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: tU,
        n: pU
      } = QU(UU);
      return {
        key: RU[tU],
        params: {
          [tU]: gU ? String(pU) : pU
        }
      }
    }
    const CU = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function hU(UU, RU) {
      return GU(UU) > 0 && RU < EU
    }

    function QU(UU) {
      const RU = GU(UU);
      if (RU > 0) return {
        kind: "atomic",
        n: RU,
        short: `A${RU}`
      };
      const gU = function(UU) {
        return UU >= 6 && UU <= 10 ? UU - 6 + 1 : 0
      }(UU);
      return gU > 0 ? {
        kind: "stage",
        n: gU,
        short: `S${gU}`
      } : {
        kind: "tier",
        n: UU,
        short: String(UU)
      }
    }

    function eU(UU) {
      return pU[Math.max(1, Math.min(UU, pU.length)) - 1]
    }

    function WU(UU, RU) {
      return UU < RU ? function(UU) {
        var RU;
        return null !== (RU = pU[UU]) && void 0 !== RU ? RU : null
      }(UU) : null
    }
    const fU = "baf2coresubmit",
      xU = "baf2corebankpause",
      mU = "baf2coredeposit",
      IU = "baf2corechargepause";

    function JU(UU) {
      var RU;
      return null !== (RU = UU.baf2CoreOpen) && void 0 !== RU ? RU : EU
    }
    const wU = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function nU(UU) {
      return wU.includes(UU)
    }
    const bU = (UU, RU) => RU.map((RU => [RU, [UU]])),
      oU = Object.fromEntries([...bU("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...bU("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...bU("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...bU("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...bU("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...bU("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...bU("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...bU("Parts Bench", ["Focus Lens"]), ...bU("Machine Bench", ["Laser", "Collider"]), ...bU("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb", "Nova Bomb"]), ...bU("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...bU("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...bU("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...bU("Tool Bench", ["Mob Cage"]), ...bU("Tool Bench", ["Pocket Terminal"]), ...bU("Tool Bench", ["Comet Beacon"]), ...bU("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function ZU(UU) {
      var RU;
      return null !== (RU = oU[UU]) && void 0 !== RU ? RU : ["Workbench"]
    }

    function aU(UU) {
      return ZU(UU)[0]
    }
    pU.slice(1).map(((UU, RU) => `Core Tier ${RU+2}`));
    var YU = gU(9078);
    const BU = ["on", "hud", "off"];

    function VU(UU) {
      return "on" === UU
    }
    var rU = gU(311);
    const XU = "Mob Farm",
      vU = {
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
      dU = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      HU = {
        1: 20,
        2: 60,
        3: 120
      },
      SU = "baf2farmvoid",
      sU = "Caged ",
      yU = " Spawner Block";

    function kU(UU) {
      return `lifeform:${(0,rU.Ne)(UU)}`
    }

    function FU(UU) {
      if (!UU) return null;
      if (UU.startsWith(sU)) {
        const RU = UU.slice(6);
        return dU.includes(RU) ? RU : null
      }
      if (UU.endsWith(yU)) {
        const RU = UU.slice(0, -14);
        return void 0 !== vU[RU] ? RU : null
      }
      return null
    }

    function iU(UU) {
      return !0 === UU.mobFarm
    }

    function AU(UU, RU) {
      return HU[vU[RU]] * UU.opMs / 1e3
    }
    const zU = new Map;
    const MU = "baf2islands",
      DU = "baf2islandnew";

    function LU(UU) {
      const RU = pU.findIndex((RU => RU.unlocks.includes(UU)));
      return RU < 0 ? 1 : RU + 1
    }

    function NU(UU) {
      return Math.floor(UU).toLocaleString("en-US")
    }
    var lU = gU(37989);
    const OU = "baf2terminaltake",
      UR = "baf2terminalput",
      RR = ["one", "stack", "fill"];

    function gR(UU, RU, gU) {
      return `${OU} ${UU} ${RU} ${gU}`
    }

    function tR(UU, RU, gU) {
      return `${UR} ${UU} ${RU} ${gU}`
    }

    function pR(UU) {
      return `${UR} ${UU}`
    }
    const ER = [
      [`${OU} `, "take"],
      [`${UR} `, "put"]
    ];

    function PR(UU) {
      const RU = ER.find((RU => {
        let [gU] = RU;
        return UU.startsWith(gU)
      }));
      if (!RU) return null;
      const [gU, tU] = RU, [pU, EU, ...PU] = UU.slice(gU.length).trim().split(" "), TU = Number(pU);
      if (!Number.isSafeInteger(TU) || TU <= 0) return null;
      if ("put" === tU && void 0 === EU) return {
        kind: "putAll",
        seq: TU
      };
      const qU = function(UU) {
        if (RR.includes(UU)) return UU;
        const RU = Number(UU);
        return /^\d+$/.test(UU) && Number.isSafeInteger(RU) && RU > 0 ? RU : null
      }(null !== EU && void 0 !== EU ? EU : "");
      return null === qU || 0 === PU.length ? null : {
        kind: tU,
        seq: TU,
        mode: qU,
        item: PU.join(" ")
      }
    }

    function TR(UU, RU) {
      const gU = "number" === typeof UU ? UU : "one" === UU ? 1 : "stack" === UU ? 99 : RU;
      return Math.min(RU, gU)
    }

    function qR(UU, RU) {
      const gU = UU => "number" === typeof UU ? UU : "one" === UU ? 1 : 99;
      return "fill" === UU || "fill" === RU ? "fill" : gU(UU) + gU(RU)
    }

    function KR(UU, RU) {
      const gU = PR(UU),
        tU = PR(RU),
        pU = gU && tU ? function(UU, RU) {
          return "take" === UU.kind || "take" === RU.kind ? "take" === UU.kind && "take" === RU.kind && UU.item === RU.item ? {
            ...RU,
            mode: qR(UU.mode, RU.mode)
          } : null : "putAll" === UU.kind || "putAll" === RU.kind ? {
            kind: "putAll",
            seq: RU.seq
          } : UU.item === RU.item ? {
            ...RU,
            mode: qR(UU.mode, RU.mode)
          } : null
        }(gU, tU) : null;
      return pU ? "putAll" === (EU = pU).kind ? pR(EU.seq) : "put" === EU.kind ? tR(EU.seq, EU.mode, EU.item) : gR(EU.seq, EU.mode, EU.item) : null;
      var EU
    }
    const cR = "baf2rx";

    function GR(UU, RU) {
      for (var gU = arguments.length, tU = new Array(gU > 2 ? gU - 2 : 0), pU = 2; pU < gU; pU++) tU[pU - 2] = arguments[pU];
      return [cR, UU[0], UU[1], UU[2], RU, ...tU].join(" ")
    }
    const jR = 2,
      uR = 4,
      CR = 8,
      hR = 16,
      QR = 32,
      eR = 64,
      WR = 128,
      fR = 256,
      xR = 512,
      mR = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      IR = [{
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
    const JR = "Biomass",
      wR = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function nR(UU) {
      return {
        input: JR,
        inputAmount: 1,
        output: UU,
        outputAmount: 1
      }
    }
    const bR = "baf2synth",
      oR = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      ZR = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      aR = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      YR = function(UU, RU) {
        return {
          input: UU,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: RU,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      BR = function(UU, RU) {
        return {
          ...YR(UU, RU, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      VR = ZR.map((UU => BR(UU, "Biomass", 2))),
      rR = {
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
          recipes: [YR("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), YR("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), YR("Raw Gold", "Gold Grit", 2), YR("Messy Stone", "Sand"), YR("Gravel", "Sand"), YR("Raw Voltite", "Voltite Dust", 2), YR("Moonstone", "Moonstone Dust", 4), YR("Wheat Seeds", "Fertiliser"), YR("Raw Uranium", "Uranium Grit", 2), BR("Mossy Messy Stone", "Sand"), ...VR],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [YR("Iron Grit", "Iron Bar"), YR("Copper Grit", "Copper Bar"), YR("Gold Grit", "Gold Bar"), YR("Raw Iron", "Iron Bar"), YR("Raw Copper", "Copper Bar"), YR("Raw Gold", "Gold Bar"), YR("Sand", "Glass"), YR("Messy Stone", "Stone"), ...rU.Uc.map((UU => YR(UU, "Charcoal", 1, 4))), YR("Wheat", "Bread", 1, 2), ...ZR.map(((UU, RU) => BR(UU, aR[RU])))],
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
          recipes: [YR("Iron Bar", "Iron Plate"), YR("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [YR("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [YR("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [YR("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), YR("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), YR("Raw Gold", "Gold Grit", 3), YR("Raw Voltite", "Voltite Dust", 3), YR("Messy Stone", "Sand", 2), YR("Gravel", "Sand", 2), YR("Moonstone", "Moonstone Dust", 6), YR("Raw Uranium", "Uranium Grit", 3), BR("Mossy Messy Stone", "Sand", 2), ...VR],
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
          table: mR
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [YR("Coal", "Diamond", 1, 24), YR("Voltite Dust", "Moonstone", 1, 12)],
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
        ...lU.l
      },
      XR = {
        Crusher: [YR("Spent Pellet", "Glow Dust"), YR("Wheat Seeds", "Biomass"), YR("Wheat", "Biomass"), YR("Dead Bush", "Biomass"), YR("Dusk Moss", "Biomass"), YR("Rotten Flesh", "Biomass"), YR("Bone", "Biomass", 2)],
        "Shatter Mill": [YR("Spent Pellet", "Glow Dust"), YR("Wheat Seeds", "Biomass"), YR("Wheat", "Biomass"), YR("Dead Bush", "Biomass"), YR("Dusk Moss", "Biomass"), YR("Rotten Flesh", "Biomass"), YR("Bone", "Biomass", 2), ...rU.Uc.map((UU => YR(UU, "Biomass")))],
        Smelter: [YR("Biomass", "Fertiliser", 2)],
        Press: [YR("Coal", "Graphite", 1, 4)]
      },
      vR = "Power Coupler",
      dR = "Advanced Coupler",
      HR = "Nova Coupler",
      SR = [{
        item: vR,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: dR,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: HR,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const sR = new Map;

    function yR(UU) {
      var RU, gU;
      return null !== (RU = null !== (gU = UU.fuelSlot) && void 0 !== gU ? gU : UU.couplerSlot) && void 0 !== RU ? RU : null
    }

    function kR(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!UU.couplable) throw new Error(`${UU.kind} takes no Power Coupler`);
      let gU = sR.get(UU);
      gU || (gU = [], sR.set(UU, gU));
      let tU = gU[RU];
      if (!tU) {
        var pU;
        const {
          divisor: EU,
          powerPerS: PU
        } = SR[RU - 1], TU = UU.opMs / EU, qU = void 0 !== UU.fluidMade || void 0 !== UU.cryoMade ? UU.powerPerOp : PU * TU / 1e3;
        tU = {
          ...UU,
          fuelSlot: null,
          couplerSlot: null !== (pU = yR(UU)) && void 0 !== pU ? pU : void 0,
          opMs: TU,
          powerPerOp: qU,
          coupled: !0
        }, RU > 1 && (tU = {
          ...tU,
          couplerLevel: RU
        }), gU[RU] = tU
      }
      return tU
    }
    const FR = new Map;
    const iR = new Map;

    function AR(UU, RU) {
      if (null === RU || (gU = RU, !wR.includes(gU))) return UU;
      var gU;
      let tU = iR.get(RU);
      return tU || (tU = {
        ...UU,
        recipes: [nR(RU)]
      }, iR.set(RU, tU)), tU
    }

    function zR(UU) {
      return !0 === UU.synth
    }
    const MR = (UU, RU, gU, tU) => ({
        output: UU,
        outputAmount: RU,
        tier: gU,
        inputs: tU.map((UU => {
          let [RU, gU] = UU;
          return {
            item: RU,
            amount: gU
          }
        }))
      }),
      DR = Object.fromEntries([MR("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), MR("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), MR("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), MR("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), MR("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), MR("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), MR("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), MR("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), MR("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), MR("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), MR("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), MR("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), MR("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), MR("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), MR("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), MR("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), MR("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), MR("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), MR("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), MR("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), MR("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), MR("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), MR("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), MR("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), MR("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), MR("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), MR("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), MR("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), MR("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), MR("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((UU => [UU.output, UU]))),
      LR = new Map;

    function NR(UU, RU) {
      let gU = rR[UU];
      if (RU.atomic && (gU = function(UU) {
          const RU = XR[UU.kind];
          if (!RU) return UU;
          let gU = FR.get(UU.kind);
          if (!gU) {
            const tU = new Set(RU.map((UU => UU.input))),
              pU = UU.recipes.filter((UU => !tU.has(UU.input)));
            gU = {
              ...UU,
              recipes: [...pU, ...RU]
            }, FR.set(UU.kind, gU)
          }
          return gU
        }(gU)), gU.synth) return AR(gU, RU.taught);
      if (RU.coupled && gU.couplable) return kR(gU, RU.level);
      const tU = gU.inputSlots && null !== RU.taught ? DR[RU.taught] : void 0;
      if (!tU) return gU;
      const pU = `${UU}|${tU.output}`;
      let EU = LR.get(pU);
      return EU || (EU = {
        ...gU,
        bench: tU
      }, LR.set(pU, EU)), EU
    }
    const lR = ["Diamond", "Moonstone"];

    function OR(UU) {
      return new Set(UU.flatMap((UU => UU.bonus ? [UU.output, UU.bonus.item] : [UU.output])).filter((UU => !lR.includes(UU))))
    }
    const Ug = Object.values(rR).flatMap((UU => UU.recipes));
    OR(Ug.filter((UU => !0 !== UU.nuclear))), OR([...Ug.filter((UU => !0 === UU.nuclear)), ...Object.values(XR).flat()]);

    function Rg(UU) {
      return null === UU.inputSlot && void 0 === UU.inputSlots && void 0 === UU.powerMade && void 0 === UU.fluidMade && !UU.treeCutter && void 0 === UU.table
    }

    function gg(UU) {
      return !0 === UU.treeCutter
    }
    const tg = ["Voltite Cell"];

    function pg(UU) {
      var RU, gU;
      return null !== (RU = null === (gU = UU.fuels) || void 0 === gU ? void 0 : gU.some((UU => tg.includes(UU)))) && void 0 !== RU && RU
    }
    const Eg = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(rU.Uc.map((UU => [UU, 8e3]))),
        ...Object.fromEntries(rU.Jd.map((UU => [UU, 2e3]))),
        "Voltite Cell": 12e4
      },
      Pg = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      Tg = {
        "Uranium Deposit": 4e3
      };

    function qg(UU) {
      var RU;
      return null !== (RU = Object.keys(Pg).find((RU => Pg[RU] === UU))) && void 0 !== RU ? RU : null
    }

    function Kg(UU) {
      return oR.includes(UU)
    }

    function cg(UU) {
      return !0 !== UU.nuclear || TU()
    }
    var Gg = gU(299);
    var jg = gU(9149),
      ug = gU(9090),
      Cg = gU(9152),
      hg = gU(9147);
    const Qg = "Reactor Controller",
      eg = "Reactor Port",
      Wg = "Battery Cell",
      fg = ["fuel", "water", "waste"],
      xg = {
        fuel: eg,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      mg = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      Ig = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      Jg = "Reactor Frame",
      wg = "Reactor Glass",
      ng = {
        edge: [Jg],
        cap: [wg, eg],
        wall: [wg, eg],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [Qg]
      },
      bg = {
        edge: [Wg],
        cap: [Wg],
        wall: [Wg],
        inside: [Wg],
        ctrl: [Wg]
      },
      og = ["edge", "cap", "wall", "inside"],
      Zg = ["Reactor Slag"];

    function ag(UU) {
      return Zg.includes(Yg(UU))
    }

    function Yg(UU) {
      const RU = UU.indexOf("|");
      return RU < 0 ? UU : UU.slice(0, RU)
    }

    function Bg(UU) {
      return Yg(UU) === Qg ? "reactor" : null
    }

    function Vg(UU) {
      return Yg(UU) !== eg ? null : UU.endsWith("|Water") ? "water" : UU.endsWith("|Waste") ? "waste" : "fuel"
    }

    function rg(UU) {
      const RU = Vg(UU);
      return null === RU ? null : dg(xg[fg[(fg.indexOf(RU) + 1) % fg.length]], function(UU) {
        return UU.includes(Xg)
      }(UU))
    }
    const Xg = "|meta|rot1|Formed",
      vg = new Set([Jg, wg, eg]);

    function dg(UU, RU) {
      var gU;
      const tU = Yg(UU);
      if (!vg.has(tU)) return UU;
      if (tU !== eg) return RU ? tU + Xg : tU;
      const pU = null !== (gU = Vg(UU)) && void 0 !== gU ? gU : "fuel";
      return RU ? "fuel" === pU ? tU + Xg : `${tU}${Xg}|${"water"===pU?"Water":"Waste"}` : xg[pU]
    }

    function Hg(UU, RU) {
      const gU = tt(UU, RU);
      if ("Air" === gU) return !1;
      const tU = "reactor" === UU ? ng : bg;
      return og.some((UU => tU[UU].includes(gU))) || "reactor" === UU && Zg.includes(gU)
    }

    function Sg(UU) {
      return Ig[UU]
    }

    function sg(UU) {
      var RU;
      return null !== (RU = mg[UU]) && void 0 !== RU ? RU : mg[1]
    }

    function yg(UU) {
      const [RU, , gU] = sg(UU);
      return [gU, 0, -RU]
    }

    function kg(UU, RU, gU, tU, pU, EU) {
      return {
        ctrl: [UU[0], UU[1], UU[2]],
        rot: mg[RU] ? RU : 1,
        w: gU,
        h: tU,
        d: pU,
        cu: EU[0],
        cv: EU[1]
      }
    }

    function Fg(UU, RU) {
      return "reactor" === UU ? [Math.floor((RU - 1) / 2), 0] : [0, 0]
    }

    function ig(UU, RU, gU, tU, pU) {
      let EU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : UU.rot;
      if (gU === UU.w && tU === UU.h && pU === UU.d && EU === UU.rot) return UU;
      const [PU] = Fg(RU, UU.w);
      if (UU.cu === PU && UU.cv <= 1) return kg(UU.ctrl, EU, gU, tU, pU, Fg(RU, gU));
      const TU = (UU, RU) => Math.max(1, Math.min(RU, UU));
      return kg(UU.ctrl, EU, gU, tU, pU, [TU(UU.cu, gU - 2), 0 === UU.cv ? 0 : TU(UU.cv, tU - 2)])
    }
    const Ag = 11,
      zg = 2 * Ag + 1;
    new Uint8Array(zg * zg * zg);

    function Mg(UU) {
      return UU.w * UU.h * UU.d
    }

    function Dg(UU) {
      const RU = yg(UU.rot);
      return [UU.ctrl[0] - RU[0] * UU.cu, UU.ctrl[1] - UU.cv, UU.ctrl[2] - RU[2] * UU.cu]
    }

    function Lg(UU) {
      return UU.cv * UU.d * UU.w + UU.cu
    }

    function Ng(UU, RU) {
      const gU = RU % UU.w,
        tU = Math.floor(RU / UU.w) % UU.d;
      return [gU, Math.floor(RU / (UU.w * UU.d)), tU]
    }

    function lg(UU, RU) {
      const [gU, tU, pU] = Ng(UU, RU), EU = Dg(UU), PU = sg(UU.rot), TU = yg(UU.rot);
      return [EU[0] + TU[0] * gU - PU[0] * pU, EU[1] + tU, EU[2] + TU[2] * gU - PU[2] * pU]
    }

    function Og(UU, RU) {
      const gU = Dg(UU),
        tU = sg(UU.rot),
        pU = yg(UU.rot),
        EU = RU[0] - gU[0],
        PU = RU[2] - gU[2],
        TU = EU * pU[0] + PU * pU[2],
        qU = -(EU * tU[0] + PU * tU[2]),
        KU = RU[1] - gU[1];
      return TU < 0 || TU >= UU.w || KU < 0 || KU >= UU.h || qU < 0 || qU >= UU.d ? -1 : (KU * UU.d + qU) * UU.w + TU
    }

    function Ut(UU, RU) {
      if (RU === Lg(UU)) return "ctrl";
      const [gU, tU, pU] = Ng(UU, RU), EU = 0 === tU || tU === UU.h - 1, PU = Number(0 === gU || gU === UU.w - 1) + Number(EU) + Number(0 === pU || pU === UU.d - 1);
      return PU >= 2 ? "edge" : 1 === PU ? EU ? "cap" : "wall" : "inside"
    }

    function Rt(UU, RU) {
      const [gU, tU, pU] = Ng(UU, RU);
      return 0 === gU || gU === UU.w - 1 || 0 === tU || tU === UU.h - 1 || 0 === pU || pU === UU.d - 1 ? -1 : ((tU - 1) * (UU.d - 2) + (pU - 1)) * (UU.w - 2) + (gU - 1)
    }

    function gt(UU, RU) {
      const gU = UU.w - 2,
        tU = UU.d - 2,
        pU = RU % gU + 1,
        EU = Math.floor(RU / gU) % tU + 1;
      return ((Math.floor(RU / (gU * tU)) + 1) * UU.d + EU) * UU.w + pU
    }

    function tt(UU, RU) {
      const gU = Yg(RU);
      return "reactor" === UU && gU === Qg ? Jg : gU
    }

    function pt(UU, RU, gU) {
      const tU = "ctrl" === RU ? Yg(gU) : tt(UU, gU);
      return ("reactor" === UU ? ng : bg)[RU].includes(tU) ? "ok" : "Air" === tU ? "missing" : Hg(UU, gU) ? "wrong" : "blocked"
    }

    function Et(UU, RU) {
      return "battery" === UU ? Wg : "inside" === RU ? null : function(UU, RU) {
        if ("inside" === RU || "ctrl" === RU || "battery" === UU) return null;
        return "edge" === RU ? Jg : wg
      }(UU, RU)
    }
    const Pt = {
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
      Tt = "Collider",
      qt = "Laser",
      Kt = "Star Alloy",
      ct = "Glow Dust",
      Gt = [Tt, "_Collider Focus"];

    function jt(UU) {
      return Gt.indexOf(Yg(UU))
    }

    function ut(UU) {
      return Yg(UU) === qt
    }

    function Ct(UU) {
      return [
        [UU[0], UU[1], UU[2]],
        [UU[0], UU[1] + 1, UU[2]]
      ]
    }
    const ht = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function Qt(UU, RU, gU) {
      const tU = ht[RU];
      return [UU[0] + tU[0] * gU, UU[1], UU[2] + tU[2] * gU]
    }

    function et(UU, RU) {
      if (RU[1] !== UU[1]) return null;
      const gU = RU[0] - UU[0],
        tU = RU[2] - UU[2];
      if (0 !== gU === (0 !== tU)) return null;
      const pU = Math.abs(gU + tU);
      if (pU > Pt.LASER_D) return null;
      return {
        dir: tU < 0 ? 0 : gU > 0 ? 1 : tU > 0 ? 2 : 3,
        OP: pU
      }
    }

    function Wt(UU, RU, gU) {
      const tU = RU => Math.abs(UU[0] - RU[0]) <= 1 && Math.abs(UU[1] - RU[1]) <= 1;
      return tU(RU) || tU(gU)
    }

    function ft(UU, RU) {
      return function(UU, RU, gU, tU) {
        return [0, 1, 2, 3].map((pU => {
          for (let EU = 1; EU <= Pt.LASER_D; EU++) {
            const PU = Qt(UU, pU, EU);
            if (Wt([PU[0], PU[2]], RU, gU) || !tU(PU)) return !1
          }
          return !0
        }))
      }(Ct(UU)[1], RU.spawnXZ, RU.coreXZ, (UU => UU[1] >= jg.q && UU[1] < jg.q + jg.s && UU[0] >= RU.minXZ[0] && UU[0] <= RU.maxXZ[0] && UU[2] >= RU.minXZ[1] && UU[2] <= RU.maxXZ[1]))
    }
    const xt = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function mt(UU) {
      return Math.max(48 + 16 * UU, eU(UU).machineAllowance)
    }
    const It = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function Jt(UU) {
      const RU = UU.split("|")[0];
      return It.includes(RU) ? "Solar Panel" : RU === Cg.d ? "Fluid Pipe" : jt(RU) >= 0 ? "Collider" : (gU = RU, xt.includes(gU) ? RU : null);
      var gU
    }
    const wt = "buildAFactory2Game:solarPanelDescription";
    const nt = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function bt(UU, RU) {
      var gU;
      return null !== (gU = nt.find((gU => {
        var tU;
        return (null !== (tU = UU.level(gU)) && void 0 !== tU ? tU : 0) >= RU
      }))) && void 0 !== gU ? gU : null
    }
    const ot = "buildAFactory2Game:";
    let Zt = null;
    const Yt = {
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
      Bt = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      Vt = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      rt = {
        "Loot Chest": `${ot}lookRuinChestName`
      };

    function Xt(UU) {
      return "object" === typeof UU && null !== UU && "translationKey" in UU && "string" === typeof UU.translationKey ? UU.translationKey : null
    }

    function vt(UU, RU) {
      var gU;
      return null !== (gU = Xt(UU.displayName(RU))) && void 0 !== gU ? gU : `item:${(0,rU.Ne)(RU)}`
    }

    function dt(UU, RU) {
      var gU, tU, pU, EU;
      let PU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : RU;
      if ("Solar Panel" === Jt(RU)) return {
        name: Xt(UU.displayName("Solar Panel")),
        detail: wt,
        detailItem: null
      };
      const qU = RU.endsWith(" Ore"),
        KU = (Zt ??= new Set([...Object.keys((0, ug.e)()), ...Object.keys((0, Cg.m)())].map((UU => UU.split("|")[0]))), Zt).has(RU),
        cU = qU || KU ? null : function(UU) {
          var RU;
          return UU.endsWith(" Log") && !UU.startsWith("Barkless ") ? "lookLog" : UU.endsWith(" Sapling") ? "lookSapling" : UU.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (RU = Yt[UU]) && void 0 !== RU ? RU : null
        }(RU);
      if (!UU.isBlock(RU) || !qU && !KU && null === cU) return null;
      const GU = null !== (gU = null !== (tU = rt[RU]) && void 0 !== tU ? tU : Xt(null !== (pU = UU.displayName(PU)) && void 0 !== pU ? pU : UU.displayName(RU))) && void 0 !== gU ? gU : `item:${(0,rU.Ne)(RU)}`;
      if (null !== cU) return {
        name: GU,
        detail: `${ot}${cU}`,
        detailItem: null
      };
      const jU = null !== (EU = Bt[RU]) && void 0 !== EU ? EU : TU() ? Vt[RU] : void 0;
      if (KU && void 0 !== jU) return {
        name: GU,
        detail: `${ot}${jU}`,
        detailItem: null
      };
      const uU = Pg[RU];
      if (void 0 !== uU) return {
        name: GU,
        detail: `${ot}lookDeposit`,
        detailItem: vt(UU, uU)
      };
      const CU = UU.harvestLevel(RU);
      if (qU && "rock" === UU.harvestType(RU) && 0 !== CU) {
        const RU = bt(UU, null !== CU && void 0 !== CU ? CU : 0);
        if (RU === nt[0]) return {
          name: GU,
          detail: `${ot}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== RU) return {
          name: GU,
          detail: `${ot}lookPickaxe`,
          detailItem: vt(UU, RU)
        }
      }
      return {
        name: GU,
        detail: Xt(UU.description(RU)),
        detailItem: null
      }
    }

    function Ht(UU) {
      return UU < jg.q - 24
    }
    const St = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const st = "Wrench",
      yt = "Nova Wrench";

    function kt(UU) {
      return UU === st || UU === yt
    }
    const Ft = [...jg.J, "Belt Lift", "Belt Drop"];
    const it = ["Belt Lift", "Belt Drop"],
      At = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function zt(UU) {
      return UU.split("|")[0]
    }

    function Mt(UU) {
      const RU = /\|rot(\d)/.exec(UU);
      return RU ? Number(RU[1]) : 1
    }

    function Dt(UU) {
      return UU % 4 + 1
    }

    function Lt(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === RU && "" === gU ? UU : `${UU}|meta|rot${RU}${gU}`
    }

    function Nt(UU) {
      return zt(UU) === jg.x ? (0, jg.U)(UU) ? "gateRight" : "gateLeft" : (0, jg.Y)(UU)
    }

    function lt(UU) {
      const RU = zt(UU),
        gU = Mt(UU);
      if (jg.J.includes(RU)) return (0, jg.N)(RU, Dt(gU), null);
      if (RU === jg.h) return (0, jg.$)(Dt(gU), (0, jg.W)(UU));
      if (RU === jg.z) {
        const tU = At[(0, jg.Y)(UU)];
        return null === tU ? Lt(RU, Dt(gU)) : Lt(RU, gU, jg.B[tU])
      }
      return RU === jg.x ? (0, jg.U)(UU) ? Lt(RU, Dt(gU)) : Lt(RU, gU, jg.p) : hg.b.includes(RU) && !it.includes(RU) || Kg(RU) ? Lt(RU, Dt(gU)) : null
    }

    function Ot(UU) {
      return hg.b.includes(UU) || Kg(UU) || null !== Jt(UU)
    }

    function Up(UU) {
      return "Solar Panel" === Jt(UU)
    }
    const Rp = "buildAFactory2Game:",
      gp = {
        leftFront: `${Rp}lookSplitDetail_leftFront`,
        frontRight: `${Rp}lookSplitDetail_frontRight`,
        gateRight: `${Rp}lookGateDetail_gateRight`
      };

    function tp(UU, RU) {
      var gU;
      let tU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const pU = Nt(UU),
        EU = null === pU ? null : `${Rp}${pU.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${pU}`,
        PU = null === pU ? null : null !== (gU = gp[pU]) && void 0 !== gU ? gU : null;
      if (kt(RU) && tU) {
        const gU = zt(UU);
        return RU === yt && TU() && function(UU) {
          return Ft.includes(zt(UU))
        }(UU) ? {
          mode: EU,
          detail: PU,
          next: `${Rp}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: EU,
          detail: PU,
          next: Ot(gU) && !Up(gU) ? `${Rp}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const qU = kt(RU) ? lt(UU) : null;
      if (null === qU) return {
        mode: EU,
        detail: PU,
        next: null,
        nextState: null
      };
      const KU = Nt(qU);
      return null === KU || Mt(qU) !== Mt(UU) ? {
        mode: EU,
        detail: PU,
        next: `${Rp}lookWrenchTurn`,
        nextState: null
      } : {
        mode: EU,
        detail: PU,
        next: `${Rp}lookWrenchNext`,
        nextState: `${Rp}lookWrenchState_${KU}`
      }
    }
    const pp = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
    const Ep = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function Pp(UU) {
      return [0, 1, 2, 3].map((RU => 0 !== (UU & 1 << RU)))
    }

    function Tp(UU) {
      const RU = [];
      for (let gU = 8; gU + 2 < UU.length; gU += 3) RU.push([UU[gU], UU[gU + 1], UU[gU + 2]]);
      return {
        focus: [UU[0], UU[1], UU[2]],
        lasers: Pp(UU[3]),
        open: Pp(UU[4]),
        live: Pp(UU[5]),
        on: 1 === UU[6],
        state: Ep[UU[7]],
        blockers: RU
      }
    }
    const qp = "Arc Caster",
      Kp = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      cp = (Object.values(Kp), "Jet Chestplate"),
      Gp = "Nova Jet Chestplate",
      jp = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      Cp = Object.values(jp);

    function hp(UU, RU, gU) {
      return Math.min(function(UU) {
        return TU() && GU(UU) >= 5 ? 20 : 10
      }(gU), Math.floor(function(UU, RU) {
        return Math.max(0, UU) + (TU() ? Math.max(0, RU) : 0)
      }(UU, RU) / 5))
    }

    function Qp(UU, RU, gU) {
      const tU = hp(RU, gU, UU),
        pU = GU(UU),
        EU = (pU >= 3 ? 55 : pU >= 1 ? 50 : UU >= 8 ? 45 : 30) + tU,
        PU = Math.max(100 + tU, 2 * EU);
      return {
        arcDamage: EU,
        arcPierce: UU >= 7 ? 2 : 1,
        arcChain: UU >= 10,
        barrierMax: (pU >= 4 ? 100 : pU >= 2 ? 90 : UU >= 9 ? 80 : UU >= 6 ? 60 : 40) + 5 * tU,
        barrierRegenPerS: pU >= 5 ? 20 : UU >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * tU,
        novaShieldRegenPerS: 32,
        bladeDamage: PU,
        bladePunch: Math.round(.5 * PU),
        forgeRank: tU
      }
    }
    const ep = {
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
    var Wp = gU(36373),
      fp = gU(36197),
      xp = gU(36191),
      mp = gU(21),
      Ip = gU(1567),
      Jp = gU(1037),
      wp = gU.n(Jp);

    function np(UU) {
      return !0 === UU.field
    }
    const bp = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function op(UU) {
      return bp.has(UU) ? `buildAFactory2Game:itemPlural_${(0,rU.Ne)(UU)}` : null
    }
    var Zp = gU(1181),
      ap = gU(1049),
      Yp = gU(1790),
      Bp = gU(1777),
      Vp = gU(36360),
      rp = gU(36368),
      Xp = gU(24),
      vp = gU(36354);
    const dp = "baf2QuestView",
      Hp = "baf2PlayerY",
      Sp = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class sp {
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
      set(UU, RU) {
        var gU, tU, pU, EU, PU, TU, qU, KU;
        const cU = JSON.stringify(UU.baf2QuestName) === JSON.stringify(this.view.name),
          GU = new Set(this.view.rows.filter((UU => UU.done)).map((UU => UU.id))),
          jU = new Set(this.view.rows.filter((UU => UU.justFinished)).map((UU => UU.id))),
          uU = UU.baf2QuestSide,
          CU = null !== uU && !0 === UU.baf2QuestSideFocus;
        let hU = !1,
          QU = 0;
        const eU = UU.baf2QuestSteps.map((UU => {
            const RU = Dp(UU, Sp.has(UU[0]) ? UU[0] : "" + QU++),
              gU = cU && RU.done && !GU.has(RU.id);
            return RU.justFinished = gU || cU && RU.done && jU.has(RU.id), hU ||= gU, RU
          })),
          WU = Mp(eU);
        WU >= 0 && !CU && (eU[WU].current = !0);
        const fU = !cU && null !== UU.baf2QuestName,
          xU = JSON.stringify(uU && [uU[0], uU[1]]),
          mU = xU === JSON.stringify(null !== (gU = null === (tU = this.view.side) || void 0 === tU ? void 0 : tU.name) && void 0 !== gU ? gU : null),
          IU = null !== uU && !this.sidesSeen.has(xU);
        IU && this.sidesSeen.add(xU), this.serverTutorial = null !== (pU = UU.baf2QuestTutorial) && void 0 !== pU ? pU : "on", (null !== (EU = UU.baf2QuestTutorialSeq) && void 0 !== EU ? EU : 0) >= this.pickSeq && this.endPick();
        const JU = !cU || !mU || UU.baf2QuestTier !== this.view.tier;
        this.view = {
          name: UU.baf2QuestName,
          rows: eU,
          reward: UU.baf2QuestReward,
          goal: UU.baf2QuestGoal,
          pulse: this.view.pulse + (hU || fU ? 1 : 0),
          itemNames: RU,
          side: uU && {
            name: [uU[0], uU[1]],
            row: {
              ...Dp(uU[2], "side"),
              current: CU
            },
            goal: null !== (PU = uU[3]) && void 0 !== PU ? PU : null
          },
          sideCameUpAt: IU ? Date.now() : this.view.sideCameUpAt,
          tier: UU.baf2QuestTier,
          core: UU.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (TU = UU.baf2QuestAlso) && void 0 !== TU ? TU : [],
          depth: null !== (qU = UU.baf2QuestDepth) && void 0 !== qU ? qU : null,
          tutorial: null !== (KU = this.pickedTutorial) && void 0 !== KU ? KU : this.serverTutorial,
          tutorialKnown: !0
        }, this.yh(), hU && this.scheduleClear(), JU && this.requestBook()
      }
      setTutorial(UU) {
        return this.endPick(), this.pickedTutorial = UU, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.yh()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: UU
        }, this.yh(), this.pickSeq
      }
      onPlayerY(UU) {
        const RU = Math.floor(UU);
        RU !== this.playerY && (this.playerY = RU, this.view.depth && Xp.p.yh(Hp, RU))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(UU) {
        this.view = {
          ...this.view,
          chapters: UU.baf2BookChapters
        }, this.yh()
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
          }, this.yh()
        }), 2400)
      }
      yh() {
        Xp.p.yh(dp, this.view, !0)
      }
    }

    function yp(UU, RU) {
      return UU.sideCameUpAt > 0 && RU - UU.sideCameUpAt < 2400
    }

    function kp(UU) {
      return (null === UU.name || Fp(UU)) && null === UU.side && null !== UU.chapters
    }

    function Fp(UU) {
      var RU;
      return "quest_forgeOngoing" === (null === (RU = UU.name) || void 0 === RU ? void 0 : RU[0])
    }

    function ip(UU) {
      return UU.filter((UU => !Sp.has(UU.key)))
    }

    function Ap(UU) {
      return UU.key.startsWith("stepCraft")
    }

    function zp(UU, RU) {
      const gU = new Set,
        tU = UU.side ? [...UU.rows, UU.side.row] : UU.rows;
      for (const EU of tU)
        if (!EU.done) {
          !EU.item || RU && !Ap(EU) || gU.add(EU.item);
          for (const [UU, RU, tU] of null !== (pU = EU.chips) && void 0 !== pU ? pU : []) {
            var pU;
            RU < tU && gU.add(UU)
          }
        } return gU
    }

    function Mp(UU) {
      const RU = UU.findIndex((UU => !UU.done && !UU.away));
      return RU >= 0 ? RU : UU.findIndex((UU => !UU.done))
    }

    function Dp(UU, RU) {
      let [gU, tU, pU, EU, PU, TU, qU, KU, cU, GU] = UU;
      return {
        id: RU,
        key: gU,
        params: tU,
        item: pU,
        amount: EU,
        total: PU,
        done: TU,
        chips: null !== qU && void 0 !== qU ? qU : null,
        current: !1,
        away: !0 === KU,
        madeFor: null !== cU && void 0 !== cU ? cU : [],
        also: null !== GU && void 0 !== GU ? GU : [],
        justFinished: !1
      }
    }
    const Lp = "baf2QuestItems",
      Np = new Set;
    let lp = new Set,
      Op = null;

    function UE(UU) {
      const RU = VU(UU.tutorial),
        gU = RU ? zp(UU, !0) : Np;
      "inventory" === mp.b.get("openInGameMenuName") ? (Op = null, (0, vp.u)(gU)) : Op = gU;
      const tU = RU ? zp(UU, !1) : Np;
      (0, rp.b)(tU, lp) || (lp = tU, Xp.p.yh(Lp, lp))
    }

    function RE() {
      return (0, Vp.c)(Lp, (() => lp))
    }
    var gE = gU(9009),
      tE = gU(2969);

    function pE(UU) {
      const RU = (0, tE.c)(UU),
        gU = void 0 === RU ? void 0 : (0, gE.displayNameOf)(RU);
      return "object" === typeof gU && null !== gU && "translationKey" in gU && "string" === typeof gU.translationKey ? gU.translationKey : `item:${(0,rU.Ne)(UU)}`
    }

    function EE(UU, RU) {
      return UU(pE(RU))
    }
    const PE = [{
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

    function TE(UU, RU) {
      return [`Deposit Seed (${UU})`, {
        item: Pg[`${UU} Deposit`],
        amount: RU
      }]
    }
    const qE = Object.fromEntries([TE("Coal", 8), TE("Iron", 8), TE("Copper", 8), TE("Gold", 6), TE("Voltite", 4), TE("Uranium", 4)]),
      KE = "Relay Coil",
      cE = new Map;

    function GE(UU) {
      let RU = cE.get(UU);
      if (!RU) {
        const gU = Math.max(1, UU);
        RU = PE.filter((UU => {
          var RU;
          return gU >= UU.fromTier && gU <= (null !== (RU = UU.untilTier) && void 0 !== RU ? RU : 1 / 0)
        })).map((UU => UU.later && gU >= UU.later.tier ? {
          ...UU,
          weight: UU.later.weight
        } : UU)), cE.set(UU, RU)
      }
      return RU
    }

    function jE(UU) {
      return GE(UU).some((UU => {
        let {
          item: RU
        } = UU;
        return RU === KE
      }))
    }

    function uE(UU) {
      return UU.startsWith("Deposit Seed (")
    }

    function CE(UU, RU) {
      const gU = GE(UU);
      return RU ? gU.filter((UU => RU(UU.item))) : gU
    }

    function hE(UU) {
      return UU.reduce(((UU, RU) => UU + RU.weight), 0)
    }

    function QE(UU, RU) {
      const gU = CE(UU, RU),
        tU = hE(gU);
      return gU.map((UU => ({
        find: UU,
        chance: UU.weight / tU
      })))
    }
    const eE = 6e4,
      WE = new Intl.NumberFormat("en-US");

    function fE(UU, RU) {
      const gU = UU >= 10 ? Math.round(UU) : Math.round(10 * UU) / 10;
      return 0 === gU ? "0" : `${RU}${WE.format(gU)}`
    }

    function xE(UU) {
      return UU < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? WE.format(UU) : UU < 1e6 ? `${UU<1e5?Math.floor(UU/100)/10:Math.floor(UU/1e3)}k` : Math.floor(UU / 1e5) / 10 + "M"
    }

    function mE(UU) {
      return UU < 0 ? "\u2212" + -UU : String(UU)
    }

    function IE(UU, RU) {
      const gU = Math.max(1, Math.round(RU));
      if (gU < 60) return UU("buildAFactory2Game:durationSeconds", {
        seconds: String(gU)
      });
      const tU = Math.round(gU / 60);
      if (tU < 60) return UU("buildAFactory2Game:durationMinutes", {
        minutes: String(tU)
      });
      const pU = String(Math.floor(tU / 60));
      return tU % 60 === 0 ? UU("buildAFactory2Game:durationWholeHours", {
        hours: pU
      }) : UU("buildAFactory2Game:durationHours", {
        hours: pU,
        minutes: String(tU % 60)
      })
    }
    const JE = "(max-height: 420px), (max-width: 650px)";

    function wE() {
      return "undefined" !== typeof window && window.matchMedia(JE).matches
    }

    function nE(UU) {
      const RU = window.matchMedia(JE),
        gU = () => {
          UU(RU.matches)
        };
      return RU.addEventListener("change", gU), () => {
        RU.removeEventListener("change", gU)
      }
    }
    var bE = gU(1090);

    function oE(UU, RU) {
      return null !== UU && UU > RU + 1
    }

    function ZE(UU) {
      const RU = 100 * UU;
      return String(RU <= 0 || RU >= 1 ? Math.round(RU) : Math.max(.1, Math.round(10 * RU) / 10))
    }

    function aE(UU) {
      let {
        item: RU,
        amount: gU
      } = UU;
      return (0, bE.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, bE.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, bE.jsx)(Yp.c, {
            itemName: RU,
            amount: 0
          })
        }), gU > 1 && (0, bE.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", gU]
        })]
      })
    }

    function YE(UU) {
      let {
        label: RU,
        names: gU
      } = UU;
      const [pU, EU] = (0, tU.useState)(!1), PU = gU.join(" / ");
      return (0, bE.jsxs)(bE.Fragment, {
        children: [(0, bE.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: PU,
          "aria-expanded": pU,
          onClick: () => {
            EU(!pU)
          },
          children: RU
        }), pU && (0, bE.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: PU
        })]
      })
    }

    function BE(UU) {
      let {
        tier: RU
      } = UU;
      const {
        t: gU
      } = (0, Zp.B)(), {
        key: tU,
        params: pU
      } = uU(RU, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), EU = gU(`buildAFactory2Game:${tU}`, pU);
      return (0, bE.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, bE.jsx)(ap.c, {
          name: "lock"
        }), EU]
      })
    }
    const VE = (0, tU.createContext)(null);

    function rE() {
      const {
        t: UU
      } = (0, Zp.B)(), RU = (0, tU.useContext)(VE);
      return (0, tU.useEffect)((() => null === RU || void 0 === RU ? void 0 : RU()), [RU]), (0, bE.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: UU("buildAFactory2Game:recipeForQuest"),
        "aria-label": UU("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function XE(UU) {
      let {
        title: RU,
        count: gU,
        children: pU,
        startOpen: EU = !0
      } = UU;
      const {
        t: PU
      } = (0, Zp.B)(), [TU, qU] = (0, tU.useState)((() => EU && !wE())), [KU, cU] = (0, tU.useState)(0), GU = (0, tU.useCallback)((() => (cU((UU => UU + 1)), () => {
        cU((UU => UU - 1))
      })), []);
      return (0, bE.jsxs)("div", {
        className: wp()("Baf2Recipes", {
          Open: TU
        }),
        children: [(0, bE.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            qU(!TU)
          },
          "aria-expanded": TU,
          children: [PU("buildAFactory2Game:recipesToggle", {
            title: RU,
            count: String(gU)
          }), (0, bE.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: TU ? "\u25be" : "\u25b8"
          })]
        }), TU && (0, bE.jsxs)(VE.Provider, {
          value: GU,
          children: [(0, bE.jsx)("ul", {
            className: "Baf2RecipeList",
            children: pU
          }), KU > 0 && (0, bE.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, bE.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), PU("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const vE = "buildAFactory2Game:",
      dE = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const HE = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      SE = {
        "Uranium Grit": EU,
        "Raw Uranium": EU
      };

    function sE(UU) {
      var RU;
      return null !== (RU = SE[UU]) && void 0 !== RU ? RU : Math.max(LU(UU), HE[UU] ? LU(HE[UU]) : 1, function(UU) {
        const RU = pU.findIndex((RU => RU.cost.some((RU => RU.item === UU))));
        return RU > EU ? RU : 1
      }(UU))
    }

    function yE(UU, RU) {
      return kE(RU) ? sE(RU) : function(UU) {
        if (dE.has(UU)) return 1;
        const RU = pU.findIndex((RU => RU.newDeposits.some((RU => {
          let {
            block: gU
          } = RU;
          return gU === UU
        }))));
        return RU < 0 ? 1 : RU + 1
      }(UU)
    }

    function kE(UU) {
      return UU in SE || GU(sE(UU)) > 0
    }

    function FE(UU, RU) {
      return NR(UU, {
        coupled: !1,
        taught: null,
        atomic: TU() && RU >= 11
      }).recipes
    }

    function iE(UU, RU) {
      const gU = jU(UU, RU, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : GU(UU) > 0);
      return "open" === gU || "locked" === gU
    }

    function AE(UU, RU) {
      return UU.map(((UU, gU) => ({
        value: UU,
        idx: gU,
        tier: RU(UU)
      }))).sort(((UU, RU) => UU.tier - RU.tier || UU.idx - RU.idx)).map((UU => {
        let {
          value: RU
        } = UU;
        return RU
      }))
    }

    function zE(UU, RU, gU) {
      const tU = jU(UU, RU);
      if ("hidden" === tU || "open" === tU) return null;
      if ("teaser" === tU) return {
        tag: {
          translationKey: `${vE}${gU?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${vE}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const pU = uU(UU, {
          tier: gU ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        EU = uU(UU, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${vE}${pU.key}`,
          params: pU.params
        },
        reason: {
          translationKey: `${vE}${EU.key}`,
          params: EU.params
        }
      }
    }

    function ME(UU) {
      return !uE(UU)
    }

    function DE(UU) {
      let {
        seconds: RU
      } = UU;
      const {
        t: gU
      } = (0, Zp.B)();
      return (0, bE.jsx)(XE, {
        title: gU("buildAFactory2Game:recipesCuts", {
          seconds: RU
        }),
        count: 1,
        children: (0, bE.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, bE.jsx)(aE, {
            item: "Maple Sapling",
            amount: 1
          }), (0, bE.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, bE.jsx)(aE, {
            item: "Maple Log",
            amount: 1
          }), (0, bE.jsx)("span", {
            className: "Baf2RecipeName",
            children: gU("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function LE(UU) {
      let {
        fertilised: RU
      } = UU;
      const {
        t: gU
      } = (0, Zp.B)();
      return (0, bE.jsxs)(XE, {
        title: gU("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, bE.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, bE.jsx)(aE, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, bE.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, bE.jsx)(aE, {
            item: "Wheat",
            amount: 1
          }), (0, bE.jsx)(aE, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, bE.jsx)("span", {
            className: "Baf2RecipeName",
            children: gU("buildAFactory2Game:recipeField")
          })]
        }), (0, bE.jsxs)("li", {
          className: wp()("Baf2Recipe", {
            InUse: RU
          }),
          children: [(0, bE.jsx)(aE, {
            item: "Fertiliser",
            amount: 1
          }), (0, bE.jsx)("span", {
            className: "Baf2RecipeName",
            children: gU("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function NE(UU) {
      let {
        tier: RU,
        seconds: gU
      } = UU;
      const {
        t: tU
      } = (0, Zp.B)(), pU = function(UU) {
        return UU >= 5 ? IR : mR
      }(RU);
      return (0, bE.jsx)(XE, {
        title: tU("buildAFactory2Game:recipesBringsUp", {
          seconds: gU
        }),
        count: pU.length,
        children: pU.map((UU => {
          let {
            item: RU,
            chance: gU
          } = UU;
          return (0, bE.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, bE.jsx)(aE, {
              item: RU,
              amount: 1
            }), (0, bE.jsx)("span", {
              className: "Baf2RecipeName",
              children: EE(tU, RU)
            }), (0, bE.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: tU("buildAFactory2Game:recipeChance", {
                percent: ZE(gU)
              })
            })]
          }, RU)
        }))
      })
    }

    function lE(UU) {
      let {
        tier: RU,
        seconds: gU,
        noSeeds: tU
      } = UU;
      const {
        t: pU
      } = (0, Zp.B)(), EU = RE(), PU = QE(RU, tU ? ME : void 0), TU = tU && QE(RU).length > PU.length, qU = jE(RU);
      return (0, bE.jsxs)(XE, {
        title: pU("buildAFactory2Game:recipesRecycles", {
          seconds: gU
        }),
        count: PU.length,
        children: [PU.map((UU => {
          let {
            find: RU,
            chance: gU
          } = UU;
          return (0, bE.jsxs)("li", {
            className: "Baf2Recipe",
            children: [EU.has(RU.item) && (0, bE.jsx)(rE, {}), (0, bE.jsx)(aE, {
              item: RU.item,
              amount: RU.amount
            }), (0, bE.jsx)("span", {
              className: "Baf2RecipeName",
              children: EE(pU, RU.item)
            }), (0, bE.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: pU("buildAFactory2Game:recipeChance", {
                percent: ZE(gU)
              })
            })]
          }, RU.item)
        })), TU && (0, bE.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, bE.jsx)("span", {
            className: "Baf2RecipeName",
            children: pU("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), qU && (0, bE.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, bE.jsx)("span", {
            className: "Baf2RecipeName",
            children: pU("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function OE(UU) {
      let {
        tier: RU,
        seconds: gU
      } = UU;
      const {
        t: tU
      } = (0, Zp.B)(), pU = Object.entries(qE).filter((UU => {
        let [, {
          item: gU
        }] = UU;
        return iE(sE(gU), RU, kE(gU))
      }));
      return (0, bE.jsx)(XE, {
        title: tU("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: gU
        }),
        count: pU.length,
        children: pU.map((UU => {
          let [RU, {
            item: gU,
            amount: pU
          }] = UU;
          return (0, bE.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, bE.jsx)(aE, {
              item: RU,
              amount: 1
            }), (0, bE.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, bE.jsx)(aE, {
              item: gU,
              amount: pU
            }), (0, bE.jsx)("span", {
              className: "Baf2RecipeName",
              children: EE(tU, gU)
            })]
          }, RU)
        }))
      })
    }

    function UP(UU) {
      let {
        tier: RU,
        seconds: gU
      } = UU;
      const {
        t: tU
      } = (0, Zp.B)(), pU = RE(), EU = AE(Object.entries(Pg).filter((UU => {
        let [gU, tU] = UU;
        return iE(yE(gU, tU), RU, kE(tU))
      })), (UU => {
        let [RU, gU] = UU;
        return yE(RU, gU)
      }));
      return (0, bE.jsx)(XE, {
        title: tU("buildAFactory2Game:recipesDigs", {
          seconds: gU
        }),
        count: EU.length,
        children: EU.map((UU => {
          let [gU, EU] = UU;
          const PU = yE(gU, EU),
            TU = PU > RU ? PU : null,
            qU = Tg[gU],
            KU = null === TU && pU.has(EU);
          return (0, bE.jsxs)("li", {
            className: wp()("Baf2Recipe", {
              Locked: null !== TU,
              Far: oE(TU, RU)
            }),
            children: [KU && (0, bE.jsx)(rE, {}), (0, bE.jsx)(aE, {
              item: gU,
              amount: 1
            }), (0, bE.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, bE.jsx)(aE, {
              item: EU,
              amount: 1
            }), (0, bE.jsx)("span", {
              className: "Baf2RecipeName",
              children: EE(tU, EU)
            }), void 0 !== qU && (0, bE.jsx)("span", {
              className: "Baf2RecipeMore",
              children: tU("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / qU)
              })
            }), null !== TU && (0, bE.jsx)(BE, {
              tier: TU
            })]
          }, gU)
        }))
      })
    }

    function RP(UU) {
      var RU;
      let {
        def: gU,
        seconds: tU
      } = UU;
      const {
        t: pU
      } = (0, Zp.B)();
      return (0, bE.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, bE.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (RU = gU.fuels) && void 0 !== RU ? RU : []).map((UU => (0, bE.jsx)(aE, {
            item: UU,
            amount: 1
          }, UU))), (0, bE.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, bE.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, bE.jsx)(ap.c, {
              name: "bolt"
            }), pU("buildAFactory2Game:recipePower", {
              power: NU(gU.powerMade),
              seconds: tU
            })]
          })]
        })
      })
    }

    function gP(UU) {
      let {
        def: RU
      } = UU;
      const {
        t: gU
      } = (0, Zp.B)();
      return (0, bE.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, bE.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, bE.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, bE.jsx)(ap.c, {
              name: "bolt"
            }), gU("buildAFactory2Game:recipeMixer", {
              cryo: fE((0, lU.L)(RU, RU.cryoMade), "")
            })]
          })
        })
      })
    }

    function tP(UU) {
      let {
        def: RU
      } = UU;
      const {
        t: gU
      } = (0, Zp.B)();
      return (0, bE.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, bE.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, bE.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, bE.jsx)(ap.c, {
              name: "bolt"
            }), gU("buildAFactory2Game:recipeCondenser", {
              power: fE((0, lU.L)(RU, RU.powerPerOp), ""),
              water: fE((0, lU.L)(RU, RU.fluidMade), "")
            })]
          })
        })
      })
    }

    function pP(UU) {
      let {
        kind: RU,
        def: gU,
        input: tU,
        tier: pU,
        noSeeds: EU = !1
      } = UU;
      const PU = String(gU.opMs / 1e3);
      return gg(gU) ? (0, bE.jsx)(DE, {
        seconds: PU
      }) : gU.field ? (0, bE.jsx)(LE, {
        fertilised: null !== tU
      }) : gU.table ? (0, bE.jsx)(NE, {
        tier: pU,
        seconds: PU
      }) : gU.recycles ? (0, bE.jsxs)(bE.Fragment, {
        children: [(0, bE.jsx)(lE, {
          tier: pU,
          seconds: PU,
          noSeeds: EU
        }), (0, bE.jsx)(OE, {
          tier: pU,
          seconds: PU
        })]
      }) : Rg(gU) ? (0, bE.jsx)(UP, {
        tier: pU,
        seconds: PU
      }) : void 0 !== gU.fluidMade ? (0, bE.jsx)(tP, {
        def: gU
      }) : void 0 !== gU.cryoMade ? (0, bE.jsx)(gP, {
        def: gU
      }) : void 0 !== gU.powerMade ? (0, bE.jsx)(RP, {
        def: gU,
        seconds: PU
      }) : (0, bE.jsx)(EP, {
        kind: RU,
        input: tU,
        tier: pU,
        seconds: PU
      })
    }

    function EP(UU) {
      let {
        kind: RU,
        input: gU,
        tier: tU,
        seconds: pU
      } = UU;
      const {
        t: EU
      } = (0, Zp.B)(), PU = RE(), TU = AE(function(UU) {
        const RU = new Map;
        for (const pU of UU) {
          var gU, tU;
          const UU = [pU.output, pU.outputAmount, pU.inputAmount, null === (gU = pU.bonus) || void 0 === gU ? void 0 : gU.item, null === (tU = pU.bonus) || void 0 === tU ? void 0 : tU.chance].join("|"),
            EU = RU.get(UU);
          EU ? EU.inputs.push(pU.input) : RU.set(UU, {
            inputs: [pU.input],
            inputAmount: pU.inputAmount,
            output: pU.output,
            outputAmount: pU.outputAmount,
            bonus: pU.bonus
          })
        }
        return [...RU.values()]
      }(FE(RU, tU).filter(cg)), (UU => sE(UU.output))).filter((UU => iE(sE(UU.output), tU, kE(UU.output))));
      return (0, bE.jsx)(XE, {
        title: EU("buildAFactory2Game:recipesEach", {
          seconds: pU
        }),
        count: TU.length,
        children: TU.map((UU => {
          const RU = null !== gU && UU.inputs.includes(gU),
            pU = UU.inputs.length > 3 ? [RU ? gU : UU.inputs[0]] : UU.inputs,
            TU = sE(UU.output) > tU ? sE(UU.output) : null,
            qU = null === TU && PU.has(UU.output);
          return (0, bE.jsxs)("li", {
            className: wp()("Baf2Recipe", {
              InUse: RU,
              Locked: null !== TU,
              Far: oE(TU, tU)
            }),
            children: [qU && (0, bE.jsx)(rE, {}), pU.map(((RU, gU) => (0, bE.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [gU > 0 && (0, bE.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, bE.jsx)(aE, {
                item: RU,
                amount: UU.inputAmount
              })]
            }, RU))), pU.length < UU.inputs.length && (0, bE.jsx)(YE, {
              label: EU("buildAFactory2Game:recipeMore", {
                count: String(UU.inputs.length - pU.length)
              }),
              names: UU.inputs.filter((UU => !pU.includes(UU))).map((UU => EE(EU, UU)))
            }), (0, bE.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, bE.jsx)(aE, {
              item: UU.output,
              amount: UU.outputAmount
            }), (0, bE.jsx)("span", {
              className: "Baf2RecipeName",
              children: EE(EU, UU.output)
            }), UU.bonus && (0, bE.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [EU("buildAFactory2Game:recipeBonus", {
                percent: ZE(UU.bonus.chance)
              }), (0, bE.jsx)(aE, {
                item: UU.bonus.item,
                amount: 1
              })]
            }), null !== TU && (0, bE.jsx)(BE, {
              tier: TU
            })]
          }, `${UU.output}|${UU.inputs[0]}`)
        }))
      })
    }

    function PP(UU) {
      let {
        taught: RU,
        tier: gU
      } = UU;
      const {
        t: tU
      } = (0, Zp.B)(), pU = RE(), EU = AE(Object.values(DR), (UU => UU.tier)).filter((UU => iE(UU.tier, gU)));
      return (0, bE.jsx)(XE, {
        title: tU("buildAFactory2Game:benchCanMake"),
        count: EU.length,
        startOpen: !1,
        children: EU.map((UU => {
          const EU = UU.tier > gU,
            PU = !EU && pU.has(UU.output);
          return (0, bE.jsxs)("li", {
            className: wp()("Baf2Recipe", {
              InUse: UU.output === RU,
              Locked: EU,
              Far: oE(EU ? UU.tier : null, gU)
            }),
            children: [PU && (0, bE.jsx)(rE, {}), (0, bE.jsx)(aE, {
              item: UU.output,
              amount: UU.outputAmount
            }), (0, bE.jsx)("span", {
              className: "Baf2RecipeName",
              children: EE(tU, UU.output)
            }), (0, bE.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), UU.inputs.map((UU => (0, bE.jsx)(aE, {
              item: UU.item,
              amount: UU.amount
            }, UU.item))), EU && (0, bE.jsx)(BE, {
              tier: UU.tier
            })]
          }, UU.output)
        }))
      })
    }
    var TP, qP, KP, cP, GP;
    const jP = rR.Generator,
      uP = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      CP = 1e3 * (null !== (TP = jP.powerMade) && void 0 !== TP ? TP : 0) / jP.opMs,
      hP = Math.min(...(null !== (qP = jP.fuels) && void 0 !== qP ? qP : []).map((UU => Eg[UU]))) / 1e3,
      QP = rR["Volt Engine"],
      eP = 1e3 * (null !== (KP = QP.powerMade) && void 0 !== KP ? KP : 0) / QP.opMs,
      WP = Eg[null !== (cP = null === (GP = QP.fuels) || void 0 === GP ? void 0 : GP[0]) && void 0 !== cP ? cP : ""] / 1e3;

    function fP(UU) {
      let {
        item: RU,
        label: gU,
        value: tU,
        note: pU,
        dim: EU
      } = UU;
      return (0, bE.jsxs)("li", {
        className: wp()("Baf2PowerRow", {
          Dim: EU
        }),
        children: [(0, bE.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, bE.jsx)(Yp.c, {
            itemName: RU,
            amount: 0
          })
        }), (0, bE.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, bE.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: gU
          }), pU && (0, bE.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: pU
          })]
        }), (0, bE.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: tU
        })]
      })
    }

    function xP(UU, RU, gU, tU) {
      var pU;
      const EU = void 0 === tU ? rR[UU] : function(UU, RU) {
          if (null === RU) return UU;
          let gU = zU.get(RU);
          return gU || (gU = {
            ...UU,
            powerPerOp: AU(UU, RU),
            farmMob: RU
          }, zU.set(RU, gU)), gU
        }(rR[UU], tU),
        PU = RU && EU.couplable ? kR(EU, gU) : EU;
      return 1e3 * (null !== (pU = PU.powerPerOp) && void 0 !== pU ? pU : 0) / PU.opMs
    }

    function mP(UU) {
      var RU, gU, tU, pU, EU, PU, TU, qU;
      let {
        message: KU
      } = UU;
      const {
        t: cU
      } = (0, Zp.B)(), GU = (UU, RU) => cU("buildAFactory2Game:powerPerSecond", {
        rate: fE(UU, RU)
      }), [jU, uU] = KU.baf2PowerGenerators, CU = KU.baf2PowerGeneratorFuel, hU = KU.baf2PowerSunPanels, QU = null !== (RU = KU.baf2PowerSunShare) && void 0 !== RU ? RU : 1, eU = KU.baf2PowerVaults, WU = KU.baf2PowerUsers, [fU, xU] = null !== (gU = KU.baf2PowerEngines) && void 0 !== gU ? gU : [0, 0], mU = null !== (tU = KU.baf2PowerEngineCells) && void 0 !== tU ? tU : 0, IU = null !== (pU = KU.baf2PowerPads) && void 0 !== pU ? pU : 0, JU = null !== (EU = KU.baf2PowerCharge) && void 0 !== EU ? EU : 0, [wU, nU] = null !== (PU = KU.baf2PowerReactors) && void 0 !== PU ? PU : [0, 0], [bU, oU] = null !== (TU = KU.baf2PowerBatteries) && void 0 !== TU ? TU : [0, 0];
      let ZU = cU("buildAFactory2Game:powerEngineCells", {
        amount: String(mU)
      });
      mU > 0 && xU > 0 && (ZU = cU("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(mU),
        time: IE(cU, mU * WP / xU)
      }));
      let aU = cU("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(CU)
      });
      CU > 0 && uU > 0 && (aU = cU("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(CU),
        time: IE(cU, CU * hP / uU)
      }));
      const YU = jU + fU + hU + wU;
      return (0, bE.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, bE.jsxs)("section", {
          children: [(0, bE.jsxs)("h3", {
            children: [cU("buildAFactory2Game:powerMaking"), (0, bE.jsx)("span", {
              children: GU(KU.baf2PowerMadePerS, "+")
            })]
          }), (0, bE.jsxs)("ul", {
            children: [0 === YU && (0, bE.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: cU("buildAFactory2Game:powerNoMakers")
            }), jU > 0 && (0, bE.jsx)(fP, {
              item: "Generator",
              label: `${EE(cU,"Generator")} \xd7${jU}`,
              note: `${cU("buildAFactory2Game:powerRunning",{amount:String(uU)})} \xb7 ${aU}`,
              value: GU(uU * CP, "+"),
              dim: 0 === uU
            }), fU > 0 && (0, bE.jsx)(fP, {
              item: "Volt Engine",
              label: `${EE(cU,"Volt Engine")} \xd7${fU}`,
              note: `${cU("buildAFactory2Game:powerRunning",{amount:String(xU)})} \xb7 ${ZU}`,
              value: GU(xU * eP, "+"),
              dim: 0 === xU
            }), hU > 0 && (0, bE.jsx)(fP, {
              item: "Solar Panel",
              label: `${EE(cU,"Solar Panel")} \xd7${hU}`,
              note: cU(QU < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: GU(4 * hU * QU, "+")
            }), wU > 0 && (0, bE.jsx)(fP, {
              item: "Reactor Frame",
              label: `${cU("buildAFactory2Game:powerReactors")} \xd7${wU}`,
              note: cU("buildAFactory2Game:powerRunning", {
                amount: String(nU)
              }),
              value: GU(null !== (qU = KU.baf2PowerReactorPerS) && void 0 !== qU ? qU : 0, "+"),
              dim: 0 === nU
            })]
          })]
        }), (0, bE.jsxs)("section", {
          children: [(0, bE.jsxs)("h3", {
            children: [cU("buildAFactory2Game:powerStorage"), (0, bE.jsx)("span", {
              children: NU(KU.baf2PowerCap)
            })]
          }), (eU > 0 || bU > 0) && (0, bE.jsxs)("ul", {
            children: [eU > 0 && (0, bE.jsx)(fP, {
              item: "Charge Vault",
              label: `${EE(cU,"Charge Vault")} \xd7${eU}`,
              value: `+${NU(8e3*eU)}`
            }), bU > 0 && (0, bE.jsx)(fP, {
              item: "Battery Cell",
              label: `${cU("buildAFactory2Game:powerBatteries")} \xd7${bU}`,
              value: `+${NU(oU)}`
            })]
          })]
        }), (0, bE.jsxs)("section", {
          children: [(0, bE.jsxs)("h3", {
            children: [cU("buildAFactory2Game:powerUsing"), (0, bE.jsx)("span", {
              children: GU(KU.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, bE.jsxs)("ul", {
            children: [0 === WU.length && 0 === IU && 0 === JU && (0, bE.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: cU("buildAFactory2Game:powerNoUsers")
            }), WU.map((UU => {
              let [RU, gU, tU, pU, EU = 1, PU] = UU, TU = gU ? cU(uP[EU - 1], {
                name: EE(cU, RU)
              }) : EE(cU, RU);
              return void 0 !== PU && (TU = cU("buildAFactory2Game:powerFarmName", {
                name: TU,
                mob: cU(kU(PU))
              })), (0, bE.jsx)(fP, {
                item: RU,
                label: `${TU} \xd7${tU}`,
                note: cU("buildAFactory2Game:powerRunning", {
                  amount: String(pU)
                }),
                value: pU > 0 ? GU(pU * xP(RU, gU, EU, PU), "\u2212") : cU("buildAFactory2Game:powerIdle"),
                dim: 0 === pU
              }, `${RU}|${gU}|${EU}|${PU}`)
            })), IU > 0 && (0, bE.jsx)(fP, {
              item: "Charging Pad",
              label: `${EE(cU,"Charging Pad")} \xd7${IU}`,
              value: cU("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), JU > 0 && (0, bE.jsx)(fP, {
              item: "Homestead Core",
              label: cU("buildAFactory2Game:powerCharge"),
              value: GU(JU, "\u2212")
            }), KU.baf2PowerStarved > 0 && (0, bE.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, bE.jsx)(ap.c, {
                name: "triangle-exclamation"
              }), cU("buildAFactory2Game:powerStarved", {
                amount: String(KU.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var IP = gU(4195),
      JP = gU(1412);
    class wP {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(UU) {
        this.message = UU;
        for (const RU of this.listeners) RU()
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
    class nP extends wP {}

    function bP(UU, RU) {
      const gU = () => {
          const gU = UU.get();
          if (!gU || !RU) return gU;
          const [tU, pU, EU] = gU.baf2PowerAt;
          return tU === RU[0] && pU === RU[1] && EU === RU[2] ? gU : null
        },
        [pU, EU] = (0, tU.useState)(gU);
      return (0, tU.useEffect)((() => (EU(gU()), UU.subscribe((() => {
        EU(gU())
      })))), [UU, ...null !== RU && void 0 !== RU ? RU : []]), pU
    }

    function oP(UU) {
      return {
        stored: UU.baf2PowerStored,
        cap: UU.baf2PowerCap,
        madePerS: UU.baf2PowerMadePerS,
        usedPerS: UU.baf2PowerUsedPerS
      }
    }

    function ZP(UU) {
      let {
        stored: RU,
        cap: gU
      } = UU;
      return (0, bE.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, bE.jsx)("div", {
          style: {
            width: `${Math.min(100,100*RU/Math.max(1,gU))}%`
          }
        })
      })
    }

    function aP(UU) {
      let {
        figures: RU,
        labelled: gU = !1
      } = UU;
      const {
        t: tU
      } = (0, Zp.B)(), pU = RU.madePerS - RU.usedPerS, {
        text: EU,
        draining: PU
      } = function(UU, RU) {
        let {
          stored: gU,
          cap: tU,
          madePerS: pU,
          usedPerS: EU
        } = RU;
        const PU = pU - EU;
        return gU >= tU ? {
          text: UU("buildAFactory2Game:powerFull"),
          draining: !1
        } : PU > .05 ? {
          text: UU("buildAFactory2Game:powerFullIn", {
            time: IE(UU, (tU - gU) / PU)
          }),
          draining: !1
        } : PU < -.05 ? {
          text: UU("buildAFactory2Game:powerEmptyIn", {
            time: IE(UU, gU / -PU)
          }),
          draining: !0
        } : {
          text: UU("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(tU, RU);
      return (0, bE.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, bE.jsx)(ZP, {
          stored: RU.stored,
          cap: RU.cap
        }), (0, bE.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, bE.jsx)("span", {
            children: tU(gU ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: NU(RU.stored),
              cap: NU(RU.cap)
            })
          }), (0, bE.jsxs)("span", {
            className: wp()("Baf2PowerNet", {
              Draining: PU
            }),
            children: [tU("buildAFactory2Game:powerPerSecond", {
              rate: fE(Math.abs(pU), pU < 0 ? "\u2212" : "+")
            }), " \xb7 ", EU]
          })]
        })]
      })
    }

    function YP(UU) {
      let {
        stored: RU,
        cap: gU,
        rates: tU
      } = UU;
      const {
        t: pU
      } = (0, Zp.B)();
      return tU ? (0, bE.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, bE.jsx)(aP, {
          figures: {
            stored: RU,
            cap: gU,
            madePerS: tU[0],
            usedPerS: tU[1]
          },
          labelled: !0
        })
      }) : (0, bE.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, bE.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, bE.jsx)(ZP, {
            stored: RU,
            cap: gU
          }), (0, bE.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, bE.jsx)("span", {
              children: pU("buildAFactory2Game:powerStoredLabelled", {
                stored: NU(RU),
                cap: NU(gU)
              })
            })
          })]
        })
      })
    }

    function BP(UU) {
      let {
        store: RU,
        close: gU
      } = UU;
      const {
        t: tU
      } = (0, Zp.B)(), pU = bP(RU);
      return (0, bE.jsx)(IP.d, {
        close: gU,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, bE.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, bE.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, bE.jsxs)("div", {
              children: [(0, bE.jsx)("h2", {
                id: "baf2PowerTitle",
                children: tU("buildAFactory2Game:powerTitle")
              }), (0, bE.jsx)("p", {
                children: tU("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, bE.jsx)(JP.h, {
              onClick: gU
            })]
          }), pU && (0, bE.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, bE.jsx)(aP, {
              figures: oP(pU)
            }), (0, bE.jsx)(mP, {
              message: pU
            })]
          })]
        })
      })
    }

    function VP(UU) {
      var RU;
      let {
        kind: gU,
        def: pU,
        iE: EU,
        power: PU,
        stored: TU,
        cap: qU
      } = UU;
      const {
        t: KU
      } = (0, Zp.B)(), cU = bP(PU, EU), [GU, jU] = (0, tU.useState)(!1);
      return (0, bE.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, bE.jsx)(pP, {
          kind: gU,
          def: pU,
          input: null,
          tier: null !== (RU = null === cU || void 0 === cU ? void 0 : cU.baf2PowerTier) && void 0 !== RU ? RU : 1
        }), (0, bE.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: KU("buildAFactory2Game:powerTitle")
        }), cU && (0, bE.jsx)(aP, {
          figures: oP(cU)
        }), !cU && (0, bE.jsx)(YP, {
          stored: TU,
          cap: qU,
          rates: null
        }), cU && (0, bE.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            jU(!GU)
          },
          "aria-expanded": GU,
          children: KU(GU ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), cU && GU && (0, bE.jsx)(mP, {
          message: cU
        })]
      })
    }
    const rP = 2500,
      XP = 17500,
      vP = `${mU} `;
    const dP = ["plan", "throttle"];

    function HP(UU) {
      if (UU.startsWith(`${bR} `)) return UU.slice(0, UU.lastIndexOf(" "));
      const RU = UU.split(" ");
      return RU[0] === cR && dP.includes(RU[4]) ? RU.slice(0, 5).join(" ") : null
    }
    class SP {
      constructor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = UU, this.now = RU, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.OtU = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = RU()
      }
      enqueue(UU) {
        this.queue(UU, this.nextTicket());
        const RU = this.OtU + this.pending.length;
        return this.flush(), RU
      }
      track(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const gU = this.nextTicket();
        if (!RU.urgent) return this.queue(UU, gU), this.flush(), gU;
        const {
          supersedes: tU
        } = RU;
        for (let EU = this.pending.length - 1; EU >= this.urgent; EU--) {
          const RU = this.pending[EU];
          (RU.command === UU || null !== tU && void 0 !== tU && tU(RU.command)) && (this.pending.splice(EU, 1), this.markLeft(RU.tickets))
        }
        const pU = this.pending.findIndex((RU => {
          let {
            command: gU
          } = RU;
          return gU === UU
        }));
        return -1 !== pU ? this.pending[pU].tickets.push(gU) : (this.pending.splice(this.urgent, 0, {
          command: UU,
          tickets: [gU]
        }), this.urgent += 1), this.flush(), gU
      }
      leftAt(UU) {
        const RU = this.leftTimes.get(UU);
        return void 0 !== RU ? RU : this.pending.some((RU => {
          let {
            tickets: gU
          } = RU;
          return gU.includes(UU)
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
        var RU;
        return (null === (RU = this.pending.at(-1)) || void 0 === RU ? void 0 : RU.command) === UU
      }
      sent() {
        return this.OtU
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
        const RU = this.now();
        for (const gU of UU) this.leftTimes.set(gU, RU);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(UU, RU) {
        const gU = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === gU || void 0 === gU ? void 0 : gU.command) === UU) return void(! function(UU) {
          return UU === IU || UU.startsWith(`${xU} `) || UU.startsWith(`${SU} `)
        }(UU) ? gU.tickets.push(RU) : (this.pending.pop(), this.markLeft([...gU.tickets, RU])));
        const tU = void 0 === gU ? null : KR(gU.command, UU);
        if (null !== tU && void 0 !== gU) return gU.command = tU, void gU.tickets.push(RU);
        const pU = HP(UU);
        if (null !== pU && void 0 !== gU && HP(gU.command) === pU) return gU.command = UU, void gU.tickets.push(RU);
        if (null !== gU && void 0 !== gU && gU.command.startsWith(vP) && UU.startsWith(vP)) {
          const tU = UU.slice(vP.length);
          if (gU.command.slice(vP.length).split(",").includes(tU)) return void gU.tickets.push(RU);
          const pU = `${gU.command},${tU}`;
          if (pU.length <= 119) return gU.command = pU, void gU.tickets.push(RU)
        }
        this.pending.push({
          command: UU,
          tickets: [RU]
        })
      }
      flush() {
        const UU = this.now();
        for (this.tokens = Math.min(5, this.tokens + (UU - this.refilledAt) / rP), this.refilledAt = UU; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.OtU += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: UU,
            tickets: RU
          } = this.pending.shift();
          this.markLeft(RU), this.send(UU)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * rP)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class sP {
      constructor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new SP(UU, RU)
      }
      send(UU) {
        return this.queue.enqueue(UU)
      }
      sent() {
        return this.queue.sent()
      }
      track(UU, RU) {
        return this.queue.track(UU, RU)
      }
      leftAt(UU) {
        return this.queue.leftAt(UU)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(UU) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = RU, this.send(UU), this.islandEdits.count
      }
      syncIslandEdits(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: gU
        } = this, tU = RU - gU.lastAtMs < XP;
        gU.count = tU ? Math.max(gU.count, UU) : UU
      }
      clear() {
        this.queue.clear()
      }
    }
    const yP = (0, tU.createContext)(null);

    function kP() {
      const UU = (0, tU.useContext)(yP);
      if (!UU) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return UU
    }

    function FP(UU, RU) {
      return null !== RU && void 0 !== RU ? RU : 1 === UU
    }

    function iP(UU, RU) {
      return UU.every((UU => {
        var gU;
        let [tU, , pU] = UU;
        return !FP(pU, null === (gU = RU.get(tU)) || void 0 === gU ? void 0 : gU.xu)
      }))
    }

    function AP(UU, RU, gU) {
      if (0 === UU.size) return UU;
      const tU = new Map(UU);
      for (const [pU, EU] of UU) {
        const UU = RU.find((UU => {
          let [RU] = UU;
          return RU === pU
        }));
        (!UU || EU.xu === (1 === UU[2]) || EU.atMs < gU) && tU.delete(pU)
      }
      return tU
    }

    function zP(UU) {
      var RU;
      let {
        iE: gU,
        input: pU,
        drops: EU,
        seconds: PU
      } = UU;
      const {
        t: TU
      } = (0, Zp.B)(), qU = kP(), [KU, cU] = (0, tU.useState)(new Map);
      (0, tU.useEffect)((() => {
        EU && cU((UU => AP(UU, EU, Date.now() - XP)))
      }), [EU]), (0, tU.useEffect)((() => {
        const UU = function(UU, RU) {
          let gU = null;
          for (const {
              atMs: tU
            }
            of UU.values()) gU = null === gU ? tU : Math.min(gU, tU);
          return null === gU ? null : gU + RU
        }(KU, XP);
        if (null === UU || !EU) return;
        const RU = setTimeout((() => {
          cU((UU => AP(UU, EU, Date.now() - XP)))
        }), Math.max(0, UU - Date.now()) + 1);
        return () => {
          clearTimeout(RU)
        }
      }), [KU, EU]);
      const GU = FU(pU),
        jU = null !== GU && null !== EU && iP(EU, KU),
        uU = function(UU, RU, gU) {
          return null === UU || null === RU || iP(RU, gU) ? 0 : HU[vU[UU]]
        }(GU, EU, KU);
      return (0, bE.jsxs)(XE, {
        title: TU("buildAFactory2Game:farmDropsTitle", {
          seconds: PU
        }),
        count: null !== (RU = null === EU || void 0 === EU ? void 0 : EU.length) && void 0 !== RU ? RU : 0,
        children: [uU > 0 && (0, bE.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: TU("buildAFactory2Game:farmDropsPower", {
            power: String(uU)
          })
        }), (null === GU || !EU) && (0, bE.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: TU("buildAFactory2Game:farmDropsEmpty")
        }), jU && (0, bE.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: TU("buildAFactory2Game:farmDropsAllVoided")
        }), null !== GU && (null === EU || void 0 === EU ? void 0 : EU.map((UU => {
          var RU;
          let [tU, pU, EU] = UU;
          const PU = pU < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            GU = FP(EU, null === (RU = KU.get(tU)) || void 0 === RU ? void 0 : RU.xu);
          return (0, bE.jsxs)("li", {
            className: wp()("Baf2Recipe Baf2FarmDrop", {
              Voided: !GU
            }),
            children: [(0, bE.jsx)(aE, {
              item: tU,
              amount: 1
            }), (0, bE.jsx)("span", {
              className: "Baf2RecipeName",
              children: EE(TU, tU)
            }), (0, bE.jsx)("span", {
              className: "Baf2FarmRate",
              children: TU(PU, {
                amount: String(pU)
              })
            }), (0, bE.jsx)("button", {
              type: "button",
              className: wp()("Baf2FarmToggle SmallTextBold", {
                Kept: GU
              }),
              "aria-pressed": GU,
              onClick: () => {
                cU(new Map(KU).set(tU, {
                  xu: !GU,
                  atMs: Date.now()
                })), qU.send(function(UU, RU, gU, tU) {
                  return `${SU} ${UU} ${RU} ${gU} ${tU}`
                }(gU[0], gU[1], gU[2], tU))
              },
              children: TU(GU ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, tU)
        })))]
      })
    }
    var MP;
    const DP = String(null !== (MP = rR.Synthesizer.waterPerOp) && void 0 !== MP ? MP : 0);

    function LP(UU) {
      let {
        iE: RU,
        taught: gU
      } = UU;
      const {
        t: pU
      } = (0, Zp.B)(), EU = kP(), [PU, TU] = (0, tU.useState)(null);
      (0, tU.useEffect)((() => {
        null !== PU && gU === PU && TU(null)
      }), [PU, gU]);
      const qU = null !== PU && void 0 !== PU ? PU : gU;
      let KU = pU("buildAFactory2Game:synthPick");
      return null !== qU && (KU = pU("buildAFactory2Game:synthGrows", {
        name: EE(pU, qU),
        input: EE(pU, JR),
        water: DP
      })), (0, bE.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, bE.jsx)("div", {
          className: wp()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === qU
          }),
          children: KU
        }), (0, bE.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: wR.map(((UU, gU) => {
            const tU = EE(pU, UU),
              PU = UU === qU;
            return (0, bE.jsx)("li", {
              children: (0, bE.jsx)("button", {
                type: "button",
                className: wp()("Baf2SynthTile", {
                  Selected: PU
                }),
                title: tU,
                "aria-label": tU,
                "aria-pressed": PU,
                onClick: () => {
                  PU || (TU(UU), EU.send(`${bR} ${RU[0]} ${RU[1]} ${RU[2]} ${gU}`))
                },
                children: (0, bE.jsx)(Yp.c, {
                  itemName: UU,
                  amount: 0
                })
              })
            }, UU)
          }))
        })]
      })
    }
    const NP = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function lP(UU) {
      let {
        kind: RU,
        tier: gU,
        coupled: tU,
        level: pU,
        slot: EU
      } = UU;
      const {
        t: PU
      } = (0, Zp.B)(), qU = LU(vR);
      if (!tU && null !== gU && gU < qU) return (0, bE.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, bE.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, bE.jsx)(ap.c, {
            name: "lock"
          })
        }), (0, bE.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: PU("buildAFactory2Game:upgradeLocked")
        }), (0, bE.jsx)("span", {
          className: "Baf2TierTag",
          children: PU("buildAFactory2Game:tierTag", {
            tier: String(qU)
          })
        })]
      });
      const KU = function(UU, RU) {
          if (TU() && "Crusher" !== UU && null !== RU) {
            if (OP(HR, RU)) return {
              item: HR,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (OP(dR, RU)) return {
              item: dR,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: vR,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(RU, gU),
        cU = PU(tU ? NP[pU - 1] : KU.emptyKey),
        GU = null !== gU ? function(UU, RU, gU, tU) {
          if (!TU() || !gU || "Crusher" === UU || RU < 10) return null;
          const pU = LU(HR);
          if (tU < 3 && pU > 1 && (2 === tU || RU >= pU)) return {
            tier: pU,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const EU = LU(dR);
          if (1 === tU && EU > 1) return {
            tier: EU,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(RU, gU, tU, pU) : null;
      return (0, bE.jsxs)("div", {
        className: wp()("Baf2UpgradeSocket", {
          Fitted: tU
        }),
        children: [(0, bE.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [tU && EU, !tU && (0, bE.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, bE.jsx)(Yp.c, {
              itemName: KU.item,
              amount: 0
            })
          })]
        }), (0, bE.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, bE.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: PU("buildAFactory2Game:upgradeTitle")
          }), (0, bE.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: cU
          }), tU && pU >= 2 && "Crusher" === RU && (0, bE.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: PU("buildAFactory2Game:couplerCrusherHint")
          }), GU && null !== gU && gU < GU.tier && (0, bE.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, bE.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, bE.jsx)(ap.c, {
                name: "lock"
              })
            }), PU(GU.lockedKey), (0, bE.jsx)("span", {
              className: "Baf2TierTag",
              children: PU("buildAFactory2Game:tierTag", {
                tier: String(GU.tier)
              })
            })]
          }), GU && null !== gU && gU >= GU.tier && (0, bE.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: PU(GU.nextKey)
          })]
        })]
      })
    }

    function OP(UU, RU) {
      const gU = LU(UU);
      return gU > 1 && RU >= gU
    }
    var UT = gU(36554);
    const RT = (0, lU.L)(rR.Condenser, rR.Condenser.fluidMade),
      gT = .05;
    class tT extends wP {}

    function pT(UU) {
      return fE(UU, "")
    }

    function ET(UU, RU, gU) {
      return UU(RU ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: gU
      })
    }

    function PT(UU, RU, gU, tU) {
      return gU <= gT && tU <= gT ? null : tU <= gT || gU <= gT ? ET(UU, RU, tU <= gT ? fE(gU, "+") : fE(tU, "\u2212")) : UU(RU ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: pT(gU),
        used: pT(tU)
      })
    }

    function TT(UU, RU) {
      return Math.min(100, 100 * UU / Math.max(1, RU))
    }

    function qT(UU) {
      let {
        stored: RU,
        cap: gU,
        netPerS: tU,
        rates: pU,
        cryo: EU
      } = UU;
      const {
        t: PU
      } = (0, Zp.B)(), TU = function(UU, RU, gU, tU) {
        return gU <= 0 ? UU("buildAFactory2Game:waterNoStorage") : RU >= gU ? UU("buildAFactory2Game:powerFull") : tU > gT ? UU("buildAFactory2Game:powerFullIn", {
          time: IE(UU, (gU - RU) / tU)
        }) : tU < -.05 ? RU <= 0 ? UU("buildAFactory2Game:waterEmpty") : UU("buildAFactory2Game:powerEmptyIn", {
          time: IE(UU, RU / -tU)
        }) : UU("buildAFactory2Game:powerSteady")
      }(PU, RU, gU, tU), qU = gU > 0 && RU < gU && Math.abs(tU) <= gT, KU = PU(EU ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), cU = null !== pU ? `${pU} \xb7 ${TU}` : qU ? KU : `${KU} \xb7 ${TU}`;
      return (0, bE.jsxs)(bE.Fragment, {
        children: [(0, bE.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, bE.jsx)("div", {
            style: {
              width: `${TT(RU,gU)}%`
            }
          })
        }), (0, bE.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, bE.jsx)("span", {
            children: gU > 0 && PU("buildAFactory2Game:powerStored", {
              stored: (0, lU.Y)(RU),
              cap: (0, lU.Y)(gU)
            })
          }), (0, bE.jsx)("span", {
            className: wp()("Baf2WaterNet", {
              Draining: tU < -.05
            }),
            children: cU
          })]
        })]
      })
    }

    function KT(UU) {
      let {
        water: RU,
        at: gU,
        side: tU = null
      } = UU;
      const {
        t: pU
      } = (0, Zp.B)(), EU = kP(), [PU, TU, qU] = RU;
      return (0, bE.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, bE.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, bE.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: pU(null === tU ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${tU}`)
          }), (0, bE.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              EU.send(`${lU.D} ${gU[0]} ${gU[1]} ${gU[2]}${"cryoOut"===tU?" cryo":""}`)
            },
            children: pU("buildAFactory2Game:waterDetails")
          })]
        }), (0, bE.jsx)(qT, {
          stored: PU,
          cap: TU,
          netPerS: qU,
          rates: ET(pU, "cryoOut" === tU, fE(Math.abs(qU), qU < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === tU
        })]
      })
    }

    function cT(UU, RU) {
      var gU, tU, pU;
      const EU = !0 === RU.baf2WaterCryo,
        PU = null !== (gU = null === (tU = RU.baf2WaterMakers.find((UU => UU[0] === (EU ? lU.e : "Condenser")))) || void 0 === tU ? void 0 : tU[1]) && void 0 !== gU ? gU : 0,
        TU = [],
        qU = (RU, gU, tU) => {
          RU > 0 && TU.push(UU(1 === RU ? gU : tU, {
            count: String(RU)
          }))
        };
      return EU ? qU(PU, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : qU(PU, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), qU(null !== (pU = RU.baf2WaterPipes) && void 0 !== pU ? pU : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), qU(RU.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), TU.join(" \xb7 ")
    }

    function GT(UU, RU) {
      if (!0 === RU.baf2WaterCryo) return function(UU, RU) {
        const gU = rR[lU.e];
        switch (RU.baf2WaterThis) {
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
            var tU;
            const [pU, EU] = null !== (tU = RU.baf2WaterThisRates) && void 0 !== tU ? tU : [(0, lU.L)(gU, gU.cryoMade), (0, lU.L)(gU, gU.powerPerOp)];
            return !0 === RU.baf2WaterDriven ? {
              text: UU("buildAFactory2Game:cryoThisMixerDriven", {
                rate: pT(pU)
              }),
              bad: !1
            } : {
              text: UU("buildAFactory2Game:cryoThisMixer", {
                rate: pT(pU),
                power: pT(EU)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: UU("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(UU, RU);
      const gU = !0 === RU.baf2WaterDriven,
        tU = rR.Condenser;
      switch (RU.baf2WaterThis) {
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
              tank: (0, lU.Y)(lU.w),
              cap: (0, lU.Y)(RU.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var pU;
          const [EU, PU] = null !== (pU = RU.baf2WaterThisRates) && void 0 !== pU ? pU : [RT, (0, lU.L)(tU, tU.powerPerOp)];
          return gU ? {
            text: UU("buildAFactory2Game:waterThisCondenserDriven", {
              rate: pT(EU)
            }),
            bad: !1
          } : {
            text: UU("buildAFactory2Game:waterThisCondenser", {
              rate: pT(EU),
              power: pT(PU)
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

    function jT(UU, RU) {
      const gU = RU.baf2WaterMakers.some((UU => !0 === UU[5]));
      if (!0 === RU.baf2WaterCryo) {
        const tU = RU.baf2WaterUsedPerS - RU.baf2WaterMadePerS,
          pU = gU || tU <= gT ? 0 : (0, lU.H)(tU);
        return 0 === pU ? null : pU > 1 ? UU("buildAFactory2Game:cryoNextMixers", {
          mixers: String(pU)
        }) : UU("buildAFactory2Game:cryoNextOne")
      }
      const tU = gU ? null : function(UU, RU) {
        const gU = RU - UU;
        return gU <= gT ? null : Math.ceil(gU / RT)
      }(RU.baf2WaterMadePerS, RU.baf2WaterUsedPerS);
      return null === tU ? null : tU > 1 ? UU("buildAFactory2Game:waterNextCondensers", {
        condensers: String(tU)
      }) : UU("buildAFactory2Game:waterNextOne")
    }

    function uT(UU) {
      let {
        item: RU,
        label: gU,
        note: tU,
        value: pU,
        dim: EU,
        bad: PU
      } = UU;
      return (0, bE.jsxs)("li", {
        className: wp()("Baf2WaterRow", {
          Dim: EU,
          Bad: PU
        }),
        children: [(0, bE.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, bE.jsx)(Yp.c, {
            itemName: RU,
            amount: 0
          })
        }), (0, bE.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, bE.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: gU
          }), tU && (0, bE.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: tU
          })]
        }), (0, bE.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: pU
        })]
      })
    }

    function CT(UU) {
      return UT.k[UU] ? UU : "Reactor Port"
    }

    function hT(UU) {
      let {
        message: RU
      } = UU;
      const {
        t: gU
      } = (0, Zp.B)(), tU = !0 === RU.baf2WaterCryo, pU = (UU, RU) => ET(gU, tU, fE(UU, RU));
      return (0, bE.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, bE.jsxs)("section", {
          children: [(0, bE.jsxs)("h3", {
            children: [gU("buildAFactory2Game:waterMakes"), (0, bE.jsx)("span", {
              children: pU(RU.baf2WaterMadePerS, "+")
            })]
          }), (0, bE.jsxs)("ul", {
            children: [0 === RU.baf2WaterMakers.length && (0, bE.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: gU(tU ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), RU.baf2WaterMakers.map((UU => {
              let [RU, tU, EU, PU, TU, qU] = UU;
              const KU = gU("buildAFactory2Game:powerRunning", {
                amount: String(EU)
              });
              let cU = TU > 0 ? gU("buildAFactory2Game:waterMakerPower", {
                running: KU,
                power: pT(TU)
              }) : KU;
              return qU && (cU = gU(0 === EU && PU <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, bE.jsx)(uT, {
                item: RU,
                label: `${EE(gU,RU)} \xd7${tU}`,
                note: cU,
                value: EU > 0 || qU && PU > 0 ? pU(PU, "+") : gU("buildAFactory2Game:powerIdle"),
                dim: 0 === EU && !qU,
                bad: qU
              }, RU)
            }))]
          })]
        }), (0, bE.jsxs)("section", {
          children: [(0, bE.jsxs)("h3", {
            children: [gU("buildAFactory2Game:waterUses"), (0, bE.jsx)("span", {
              children: pU(RU.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, bE.jsxs)("ul", {
            children: [0 === RU.baf2WaterUsers.length && (0, bE.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: gU(tU ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), RU.baf2WaterUsers.map((UU => {
              let [RU, tU, EU, PU] = UU;
              const TU = UT.k[RU] ? EE(gU, RU) : RU;
              return (0, bE.jsx)(uT, {
                item: CT(RU),
                label: tU > 1 ? `${TU} \xd7${tU}` : TU,
                note: PU ? gU("buildAFactory2Game:waterPortFirst") : void 0,
                value: EU > 0 ? pU(EU, "\u2212") : gU("buildAFactory2Game:powerIdle"),
                dim: 0 === EU
              }, RU)
            }))]
          })]
        })]
      })
    }

    function QT(UU) {
      var RU, gU, pU, EU, PU;
      let {
        store: TU,
        close: qU
      } = UU;
      const {
        t: KU
      } = (0, Zp.B)(), cU = function(UU) {
        const [RU, gU] = (0, tU.useState)((() => UU.get()));
        return (0, tU.useEffect)((() => (gU(UU.get()), UU.subscribe((() => {
          gU(UU.get())
        })))), [UU]), RU
      }(TU), GU = null !== (RU = null === cU || void 0 === cU ? void 0 : cU.baf2WaterStored) && void 0 !== RU ? RU : 0, jU = null !== (gU = null === cU || void 0 === cU ? void 0 : cU.baf2WaterCap) && void 0 !== gU ? gU : 0, uU = null !== (pU = null === cU || void 0 === cU ? void 0 : cU.baf2WaterMadePerS) && void 0 !== pU ? pU : 0, CU = null !== (EU = null === cU || void 0 === cU ? void 0 : cU.baf2WaterUsedPerS) && void 0 !== EU ? EU : 0, hU = null !== (PU = null === cU || void 0 === cU ? void 0 : cU.baf2WaterNetPerS) && void 0 !== PU ? PU : uU - CU, QU = cU && GT(KU, cU), eU = cU && jT(KU, cU), WU = !0 === (null === cU || void 0 === cU ? void 0 : cU.baf2WaterCryo);
      return (0, bE.jsx)(IP.d, {
        close: qU,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, bE.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, bE.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, bE.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== cU && jU <= 0 ? (0, bE.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, bE.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, bE.jsx)(Yp.c, {
                  itemName: WU ? Cg.f : lU.o,
                  amount: 0
                })
              }), (0, bE.jsxs)("div", {
                children: [(0, bE.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: KU(WU ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), cU && (0, bE.jsx)("p", {
                  children: cT(KU, cU)
                })]
              })]
            }), (0, bE.jsx)(JP.h, {
              onClick: qU
            })]
          }), cU && QU && (0, bE.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, bE.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, bE.jsx)(qT, {
                stored: GU,
                cap: jU,
                netPerS: hU,
                cryo: WU,
                rates: PT(KU, WU, uU, CU)
              })
            }), (0, bE.jsx)("div", {
              className: wp()("Baf2WaterThis", {
                Bad: QU.bad
              }),
              children: QU.text
            }), cU.baf2WaterDriven && (0, bE.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, bE.jsx)(ap.c, {
                name: "bolt"
              }), KU(WU ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), eU && (0, bE.jsx)("p", {
              className: "Baf2WaterNext",
              children: eU
            }), (0, bE.jsx)(hT, {
              message: cU
            })]
          })]
        })
      })
    }
    class eT {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(UU, RU) {
        const gU = this.get(UU);
        gU && null === RU.opLeftMs && null === RU.fuelLeftMs && RU.status === gU.status ? RU = {
          ...RU,
          opLeftMs: gU.opLeftMs,
          fuelLeftMs: gU.fuelLeftMs,
          burning: gU.burning
        } : this.updates++, this.pos = UU, this.view = RU;
        for (const tU of this.listeners) tU()
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

    function WT(UU, RU, gU, tU) {
      return "noFuel" === RU && tU && !pg(rR[UU]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === RU && !0 === (null === gU || void 0 === gU ? void 0 : gU.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === RU && !0 === (null === gU || void 0 === gU ? void 0 : gU.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === RU && !0 === (null === gU || void 0 === gU ? void 0 : gU.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === RU && !0 === (null === gU || void 0 === gU ? void 0 : gU.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : fT(RU, gU) ? "buildAFactory2Game:machineStatus_noInputShort" : function(UU, RU) {
        const gU = rR[UU];
        if ("noFuel" === RU && void 0 !== gU.fuels) return pg(gU) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (gU.mobFarm && ("noInput" === RU || "badInput" === RU)) return `buildAFactory2Game:machineStatus_${RU}MobFarm`;
        if ("outputFull" === RU && (void 0 !== gU.table || gU.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === RU && zR(gU)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== gU.cryoMade && ("noInput" === RU || "noOutlet" === RU || "fluidFull" === RU)) return `buildAFactory2Game:machineStatus_${RU}Mixer`;
        return `buildAFactory2Game:machineStatus_${RU}`
      }(UU, RU)
    }

    function fT(UU, RU) {
      return "noInput" === UU && null !== RU && void 0 !== RU && RU.input && RU.inputShort ? {
        input: RU.input,
        short: RU.inputShort
      } : null
    }

    function xT(UU) {
      return np(UU) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== UU.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function mT(UU) {
      const RU = (0, rU.Ne)(UU);
      return `Baf2Pane Baf2Pane${RU.charAt(0).toUpperCase()}${RU.slice(1)}`
    }

    function IT(UU, RU) {
      const [gU, pU] = (0, tU.useState)((() => UU.get(RU)));
      return (0, tU.useEffect)((() => {
        pU(UU.get(RU));
        const gU = UU.subscribe((() => {
          pU(UU.get(RU))
        }));
        return () => {
          gU(), UU.forget(RU)
        }
      }), [UU, ...RU]), gU
    }

    function JT(UU, RU, gU, tU) {
      const pU = rR[UU],
        EU = RU && pU.couplable ? kR(pU, gU) : pU,
        PU = null !== tU && Rg(EU) ? function(UU, RU) {
          var gU;
          return null !== (gU = null !== RU && Rg(UU) ? Tg[RU] : void 0) && void 0 !== gU ? gU : UU.opMs
        }(EU, qg(tU)) : EU.opMs;
      return PU === EU.opMs ? EU : {
        ...EU,
        opMs: PU
      }
    }

    function wT(UU) {
      let {
        running: RU,
        opMs: gU,
        opLeftMs: tU,
        updateCount: pU
      } = UU;
      return (0, bE.jsx)("div", {
        className: wp()("Baf2MachineProgress", {
          Running: RU
        }),
        children: (0, bE.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: gU / 1e3 + "s",
            animationDelay: null === tU ? void 0 : (tU - gU) / 1e3 + "s"
          }
        }, pU)
      })
    }

    function nT(UU) {
      let {
        running: RU,
        leftMs: gU,
        periodMs: tU,
        updateCount: pU
      } = UU;
      const {
        t: EU
      } = (0, Zp.B)(), PU = Math.min(Math.max(null !== gU && void 0 !== gU ? gU : 0, 0), tU), TU = RU && PU > 0, qU = EU("buildAFactory2Game:machineBarFuel");
      return (0, bE.jsx)("div", {
        className: wp()("Baf2FuelBurn", {
          Draining: TU
        }),
        role: "img",
        title: qU,
        "aria-label": qU,
        children: (0, bE.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: TU ? {
            animationDuration: tU / 1e3 + "s",
            animationDelay: (PU - tU) / 1e3 + "s"
          } : {
            transform: `scaleY(${PU/tU})`
          }
        }, pU)
      })
    }

    function bT(UU, RU, gU) {
      let [tU, pU] = gU;
      const EU = 1 !== tU ? op(RU) : null;
      return {
        amount: tU,
        have: pU,
        item: UU(EU || pE(RU))
      }
    }

    function oT(UU) {
      return Rg(UU) ? "buildAFactory2Game:machineBarMining" : gg(UU) ? "buildAFactory2Game:machineBarCutting" : void 0 !== UU.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function ZT(UU) {
      var RU, gU, tU, pU, EU, PU, TU, qU, KU, cU, GU, jU, uU, CU, hU, QU, eU, WU, fU;
      let {
        kind: xU,
        iE: mU,
        store: IU,
        power: JU,
        renderSlot: wU
      } = UU;
      const {
        t: nU
      } = (0, Zp.B)(), bU = IT(IU, mU), oU = rR[xU], ZU = null !== (RU = null === bU || void 0 === bU ? void 0 : bU.coupled) && void 0 !== RU && RU, aU = null !== (gU = null === bU || void 0 === bU ? void 0 : bU.couplerLevel) && void 0 !== gU ? gU : 1, YU = JT(xU, ZU, aU, null !== (tU = null === bU || void 0 === bU || null === (pU = bU.dug) || void 0 === pU ? void 0 : pU.item) && void 0 !== tU ? tU : null), BU = null !== (EU = null === bU || void 0 === bU ? void 0 : bU.status) && void 0 !== EU ? EU : null, VU = null !== (PU = null === bU || void 0 === bU ? void 0 : bU.power) && void 0 !== PU ? PU : null, rU = null !== (TU = null === bU || void 0 === bU ? void 0 : bU.opLeftMs) && void 0 !== TU ? TU : null, XU = null !== (qU = null === bU || void 0 === bU ? void 0 : bU.dug) && void 0 !== qU ? qU : null, vU = null !== XU && Rg(oU) ? Tg[null !== (KU = qg(XU.item)) && void 0 !== KU ? KU : ""] : void 0, dU = void 0 === vU ? null : 6e4 / vU, HU = null !== (cU = null === bU || void 0 === bU ? void 0 : bU.powerCap) && void 0 !== cU ? cU : 4e3, SU = null !== (GU = null === bU || void 0 === bU ? void 0 : bU.tier) && void 0 !== GU ? GU : null, sU = void 0 !== YU.powerMade, yU = null !== oU.fuelSlot ? wU(oU.fuelSlot) : null, kU = yR(oU), FU = !ZU && !0 === (null === bU || void 0 === bU ? void 0 : bU.fuelFed), AU = !ZU && !0 === (null === bU || void 0 === bU ? void 0 : bU.fuelFeeds), zU = null !== oU.fuelSlot && !ZU, MU = null !== (jU = null === bU || void 0 === bU ? void 0 : bU.fuelLeftMs) && void 0 !== jU ? jU : null, DU = function(UU, RU, gU) {
        var tU;
        const pU = null === RU ? void 0 : Eg[RU];
        return Math.max(null !== (tU = null !== pU && void 0 !== pU ? pU : gU) && void 0 !== tU ? tU : 0, UU.opMs)
      }(YU, null !== (uU = null === bU || void 0 === bU ? void 0 : bU.burning) && void 0 !== uU ? uU : null, MU), LU = null !== (CU = null === bU || void 0 === bU ? void 0 : bU.fuelKeep) && void 0 !== CU ? CU : null, NU = null === BU ? null : WT(xU, BU, bU, FU), lU = null === BU ? null : fT(BU, bU);
      return (0, bE.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, bE.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, bE.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: nU(pE(xU))
          }), XU && (0, bE.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [nU("Tree Cutter" === xU ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, bE.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, bE.jsx)(Yp.c, {
                itemName: XU.item,
                amount: 0
              })
            }), (0, bE.jsx)(Bp.e, {
              text: XU.name
            })]
          }), null !== dU && (0, bE.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: nU("buildAFactory2Game:machineDigsFixed", {
              perMin: String(dU)
            })
          }), (null === bU || void 0 === bU ? void 0 : bU.field) && (0, bE.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, bE.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, bE.jsx)(Yp.c, {
                itemName: "Wheat",
                amount: 0
              })
            }), nU("buildAFactory2Game:machineField", {
              planted: String(bU.field[0]),
              ripe: String(bU.field[1])
            })]
          }), (0, bE.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, bE.jsxs)("div", {
              className: wp()("Baf2MachineColumn", {
                Baf2Burns: zU
              }),
              children: [null !== YU.inputSlot && (0, bE.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, bE.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: nU(xT(YU))
                }), wU(YU.inputSlot)]
              }), null !== oU.fuelSlot && !ZU && (0, bE.jsxs)("div", {
                className: wp()("Baf2MachineSlot", {
                  Baf2FuelFed: FU
                }),
                children: [(0, bE.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [FU && (0, bE.jsx)(ap.c, {
                    name: "fire"
                  }), nU("buildAFactory2Game:machineFuel")]
                }), (0, bE.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, bE.jsx)(nT, {
                    running: "running" === BU,
                    leftMs: MU,
                    periodMs: DU,
                    updateCount: IU.updateCount
                  }), yU]
                })]
              }), null !== oU.fuelSlot && ZU && (0, bE.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, bE.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: nU("buildAFactory2Game:machineFuel")
                }), (0, bE.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: nU("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": nU("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, bE.jsx)(ap.c, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, bE.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, bE.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: nU(oT(YU))
              }), (0, bE.jsx)(wT, {
                running: "running" === BU,
                opMs: YU.opMs,
                opLeftMs: rU,
                updateCount: IU.updateCount
              })]
            }), YU.outputSlots.length > 0 && (0, bE.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, bE.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: nU("buildAFactory2Game:machineOutput")
              }), (0, bE.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: YU.outputSlots.map((UU => (0, bE.jsx)("div", {
                  children: wU(UU)
                }, UU)))
              })]
            }), null !== VU && sU && (0, bE.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, bE.jsx)("div", {
                style: {
                  height: 100 * VU / HU + "%"
                }
              })
            })]
          }), zU && null !== LU && (0, bE.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, bE.jsx)(ap.c, {
              name: "arrows-rotate"
            }), nU(gg(YU) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(LU)
            })]
          }), (FU || AU) && (0, bE.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, bE.jsx)(ap.c, {
              name: "fire"
            }), nU(FU ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), oU.couplable && (0, bE.jsx)(lP, {
            kind: xU,
            tier: SU,
            coupled: ZU,
            level: aU,
            slot: kU === oU.fuelSlot ? yU : null !== kU ? wU(kU) : null
          }), null !== VU && !sU && !0 === (null === bU || void 0 === bU ? void 0 : bU.reactorPowered) && (0, bE.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: nU("buildAFactory2Game:machineReactorPowered")
          }), null !== VU && !sU && !0 !== (null === bU || void 0 === bU ? void 0 : bU.reactorPowered) && (0, bE.jsx)(YP, {
            stored: VU,
            cap: HU,
            rates: null !== (hU = null === bU || void 0 === bU ? void 0 : bU.powerRates) && void 0 !== hU ? hU : null
          }), (null === bU || void 0 === bU ? void 0 : bU.water) && (0, bE.jsx)(KT, {
            water: bU.water,
            at: mU,
            side: bU.cryo ? "waterIn" : null
          }), (null === bU || void 0 === bU ? void 0 : bU.cryo) && (0, bE.jsx)(KT, {
            water: bU.cryo,
            at: mU,
            side: "cryoOut"
          }), null !== bU && void 0 !== bU && bU.inertCoupler ? (0, bE.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: nU("buildAFactory2Game:machineStatus_couplerOff", {
              item: EE(nU, bU.inertCoupler)
            })
          }) : null !== NU && (0, bE.jsx)("div", {
            className: wp()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== BU
            }),
            children: nU(NU, lU ? bT(nU, lU.input, lU.short) : void 0)
          })]
        }), (0, bE.jsxs)("div", {
          className: wp()("Baf2MachineSide", {
            Baf2SynthSide: zR(oU)
          }),
          children: [zR(oU) && (0, bE.jsx)(LP, {
            iE: mU,
            taught: null !== (QU = null === bU || void 0 === bU ? void 0 : bU.taught) && void 0 !== QU ? QU : null
          }, mU.join(",")), sU && (0, bE.jsx)(VP, {
            kind: xU,
            def: YU,
            iE: mU,
            power: JU,
            stored: null !== VU && void 0 !== VU ? VU : 0,
            cap: HU
          }), iU(oU) && (0, bE.jsx)(zP, {
            iE: mU,
            input: null !== (eU = null === bU || void 0 === bU ? void 0 : bU.input) && void 0 !== eU ? eU : null,
            drops: null !== (WU = null === bU || void 0 === bU ? void 0 : bU.farm) && void 0 !== WU ? WU : null,
            seconds: String(YU.opMs / 1e3)
          }), !sU && !iU(oU) && !zR(oU) && (0, bE.jsx)(pP, {
            kind: xU,
            def: YU,
            input: null !== (fU = null === bU || void 0 === bU ? void 0 : bU.input) && void 0 !== fU ? fU : null,
            tier: null !== SU && void 0 !== SU ? SU : 1,
            noSeeds: !0 === (null === bU || void 0 === bU ? void 0 : bU.noSeeds)
          })]
        })]
      })
    }

    function aT(UU, RU, gU, tU) {
      var pU;
      const EU = rR[UU],
        PU = [EU.inputSlot, EU.fuelSlot, ...null !== (pU = EU.inputSlots) && void 0 !== pU ? pU : []].filter((UU => null !== UU));
      return {
        render: pU => {
          let {
            iE: EU,
            renderSlot: PU
          } = pU;
          return (0, bE.jsx)(yP.Provider, {
            value: tU,
            children: (0, bE.jsx)(ZT, {
              kind: UU,
              iE: EU,
              store: RU,
              power: gU,
              renderSlot: PU
            })
          })
        },
        quickMoveRange: PU.length > 0 ? [Math.min(...PU), Math.max(...PU) + 1] : [0, 0],
        className: mT(UU)
      }
    }
    const YT = "Assembler";

    function BT(UU) {
      var RU, gU, tU, pU, EU, PU, TU, qU, KU;
      let {
        iE: cU,
        store: GU,
        renderSlot: jU
      } = UU;
      const {
        t: uU
      } = (0, Zp.B)(), CU = IT(GU, cU), hU = null !== (RU = null === CU || void 0 === CU ? void 0 : CU.tier) && void 0 !== RU ? RU : 1, QU = null !== (gU = null === CU || void 0 === CU ? void 0 : CU.taught) && void 0 !== gU ? gU : null, eU = NR(YT, {
        coupled: !1,
        taught: QU
      }), WU = null !== (tU = eU.bench) && void 0 !== tU ? tU : null, fU = null !== (pU = null === CU || void 0 === CU ? void 0 : CU.status) && void 0 !== pU ? pU : null, xU = null !== (EU = null === CU || void 0 === CU ? void 0 : CU.power) && void 0 !== EU ? EU : null, mU = null !== (PU = null === CU || void 0 === CU ? void 0 : CU.powerCap) && void 0 !== PU ? PU : 4e3;
      return (0, bE.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, bE.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, bE.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: uU(pE(YT))
          }), WU && (0, bE.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [uU("buildAFactory2Game:benchMakes"), (0, bE.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, bE.jsx)(Yp.c, {
                itemName: WU.output,
                amount: 0
              })
            }), (null === CU || void 0 === CU ? void 0 : CU.taughtName) && (0, bE.jsx)(Bp.e, {
              text: CU.taughtName
            }), WU.outputAmount > 1 && (0, bE.jsxs)("span", {
              children: ["\xd7", WU.outputAmount]
            })]
          }), !WU && (0, bE.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: uU("buildAFactory2Game:benchTeachHint")
          }), (0, bE.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, bE.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (TU = eU.inputSlots) && void 0 !== TU ? TU : []).map(((UU, RU) => {
                const gU = null === WU || void 0 === WU ? void 0 : WU.inputs[RU];
                return (0, bE.jsxs)("div", {
                  className: wp()("Baf2BenchInput", {
                    Spare: !gU
                  }),
                  children: [(0, bE.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [jU(UU), gU && (0, bE.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, bE.jsx)(Yp.c, {
                        itemName: gU.item,
                        amount: 0
                      })
                    })]
                  }), (0, bE.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: gU ? `\xd7${gU.amount}` : "\xa0"
                  })]
                }, UU)
              }))
            }), (0, bE.jsx)(wT, {
              running: "running" === fU,
              opMs: eU.opMs,
              opLeftMs: null !== (qU = null === CU || void 0 === CU ? void 0 : CU.opLeftMs) && void 0 !== qU ? qU : null,
              updateCount: GU.updateCount
            }), (0, bE.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, bE.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: uU("buildAFactory2Game:machineOutput")
              }), (0, bE.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: eU.outputSlots.map((UU => (0, bE.jsx)("div", {
                  children: jU(UU)
                }, UU)))
              })]
            })]
          }), null !== xU && (0, bE.jsx)(YP, {
            stored: xU,
            cap: mU,
            rates: null !== (KU = null === CU || void 0 === CU ? void 0 : CU.powerRates) && void 0 !== KU ? KU : null
          }), null !== fU && (0, bE.jsx)("div", {
            className: wp()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== fU
            }),
            children: uU(WT(YT, fU, CU, !1))
          }), WU && WU.inputs.length > 1 && (0, bE.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: uU("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, bE.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, bE.jsx)(PP, {
            taught: QU,
            tier: hU
          }), WU && (0, bE.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: uU("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function VT(UU) {
      var RU;
      const gU = null !== (RU = rR[YT].inputSlots) && void 0 !== RU ? RU : [];
      return {
        render: RU => {
          let {
            iE: gU,
            renderSlot: tU
          } = RU;
          return (0, bE.jsx)(BT, {
            iE: gU,
            store: UU,
            renderSlot: tU
          })
        },
        quickMoveRange: [Math.min(...gU), Math.max(...gU) + 1],
        className: mT(YT)
      }
    }
    var rT = gU(96),
      XT = gU(1112),
      vT = gU(3937);
    const dT = 600,
      HT = .5,
      ST = 4,
      sT = 1200,
      yT = 140,
      kT = 100,
      FT = 32,
      iT = 16,
      AT = 100.5,
      zT = 90,
      MT = 1.5,
      DT = 50;

    function LT(UU) {
      switch (Yg(UU)) {
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
    const NT = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function lT(UU) {
      const RU = Math.ceil(60 * UU / kT);
      return {
        fuel: Math.max(FT, RU),
        waste: Math.max(iT, RU)
      }
    }

    function OT(UU, RU, gU) {
      const [tU, pU, EU] = [UU - 2, RU - 2, gU - 2];
      return 2 * (tU * pU + pU * EU + EU * tU) * yT
    }

    function Uq(UU, RU, gU) {
      return Math.max(0, UU - 2) * Math.max(0, RU - 2) * Math.max(0, gU - 2)
    }

    function Rq(UU, RU) {
      const [gU, tU, pU] = UU, EU = gU * tU * pU, PU = new Float32Array(EU);
      let TU = 0,
        qU = 0,
        KU = 0,
        cU = 0,
        GU = 0;
      const jU = (UU, EU, PU) => UU < 0 || UU >= gU || EU < 0 || EU >= tU || PU < 0 || PU >= pU ? 0 : RU[(EU * pU + PU) * gU + UU];
      for (let QU = 0; QU < tU; QU++)
        for (let UU = 0; UU < pU; UU++)
          for (let tU = 0; tU < gU; tU++) {
            const EU = (QU * pU + UU) * gU + tU,
              uU = RU[EU];
            if (1 === uU) {
              TU++;
              let RU = 0;
              for (const [gU, pU, EU] of NT) {
                const PU = jU(tU + gU, QU + pU, UU + EU);
                1 !== PU && 2 !== PU || RU++
              }
              PU[EU] = dT * (1 + HT * Math.min(RU, ST)), cU += PU[EU]
            } else if (2 === uU) qU++;
            else if (3 === uU) {
              KU++;
              NT.some((RU => {
                let [gU, pU, EU] = RU;
                return 1 === jU(tU + gU, QU + pU, UU + EU)
              })) && (GU += sT)
            }
          }
      const uU = OT(gU + 2, tU + 2, pU + 2),
        CU = Math.min(cU, GU, uU),
        hU = TU > 0 ? cU * kT / TU : 0;
      return {
        rods: TU,
        graphite: qU,
        channels: KU,
        fuelHeat: cU,
        cooling: GU,
        size: uU,
        max: CU,
        vol: EU,
        powerPerUnit: hU,
        pelletsPerMin: hU > 0 ? CU / hU * 60 : 0,
        waterPerS: CU * lU.s,
        rodHeat: PU
      }
    }
    const gq = 0,
      tq = 1,
      pq = 6,
      Eq = 7,
      Pq = 8;

    function Tq(UU, RU) {
      const [gU, tU, pU] = UU, EU = new Uint8Array(gU * tU * pU), PU = (UU, EU, PU) => UU < 0 || UU >= gU || EU < 0 || EU >= tU || PU < 0 || PU >= pU ? 0 : RU[(EU * pU + PU) * gU + UU];
      for (let TU = 0; TU < tU; TU++)
        for (let UU = 0; UU < pU; UU++)
          for (let tU = 0; tU < gU; tU++) {
            const qU = (TU * pU + UU) * gU + tU,
              KU = RU[qU];
            if (1 === KU) {
              let RU = 0;
              for (const [gU, pU, EU] of NT) {
                const qU = PU(tU + gU, TU + pU, UU + EU);
                RU += 1 === qU || 2 === qU ? 1 : 0
              }
              EU[qU] = tq + Math.min(RU, ST)
            } else if (3 === KU) {
              const RU = NT.some((RU => {
                let [gU, pU, EU] = RU;
                return 1 === PU(tU + gU, TU + pU, UU + EU)
              }));
              EU[qU] = RU ? pq : Eq
            } else 2 === KU && (EU[qU] = Pq)
          }
      return EU
    }

    function qq(UU) {
      return UU.fuelHeat <= UU.cooling && UU.fuelHeat <= UU.size ? "fuel" : UU.cooling <= UU.size ? "cooling" : "size"
    }
    const Kq = zT;

    function cq(UU, RU, gU) {
      return Math.round(UU * RU * gU * 25e3 * (1 + .25 * (Math.min(UU, RU, gU) - 2)))
    }

    function Gq(UU) {
      return Math.max(0, Math.min(lU.i, UU))
    }

    function jq(UU, RU, gU) {
      const tU = RU * Gq(gU);
      return UU <= 0 ? 0 : tU > 0 ? Math.min(200, 100 * UU / tU) : 200
    }

    function uq(UU, RU) {
      const gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? MT : 1;
      return Math.min(UU.fuelHeat * gU, UU.cooling * Gq(RU), UU.size * gU)
    }

    function Cq(UU) {
      return 2 + UU / 10
    }
    const hq = "buildAFactory2Game:";

    function Qq(UU) {
      var RU;
      return null !== (RU = UU.baf2RxMood) && void 0 !== RU ? RU : function(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const gU = [
          ["calm", 50],
          ["warm", Kq],
          ["hot", AT]
        ];
        for (const [tU, pU] of gU)
          if (UU < pU + (tU === RU ? 3 : 0)) return tU;
        return "alarm"
      }(UU.baf2RxHeat)
    }
    const eq = 120;

    function Wq(UU) {
      const RU = UU.baf2RxState;
      if ("running" === RU && UU.baf2RxHeat > AT) return {
        label: `${hq}rxState_tooHot`,
        tone: "bad",
        fix: `${hq}rxFix_tooHot`
      };
      switch (RU) {
        case "running":
          return {
            label: `${hq}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${hq}rxState_idle`, tone: "off", fix: `${hq}rxFix_idle`
          };
        case "scram":
          return {
            label: `${hq}rxState_scram`, tone: "off", fix: UU.baf2RxHeat < DT ? `${hq}rxFix_scramCool` : `${hq}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${hq}rxState_${RU}`, tone: "off", fix: `${hq}rxFix_${RU}`
          };
        case "melted":
          return {
            label: `${hq}rxState_melted`, tone: "bad", fix: `${hq}rxFix_melted`
          };
        default:
          return {
            label: `${hq}rxState_${RU}`, tone: "warn", fix: `${hq}rxFix_${RU}`
          }
      }
    }

    function fq(UU) {
      const [RU, gU, tU] = UU.baf2RxStats;
      return {
        fuelHeat: RU,
        cooling: gU * (UU.baf2RxCryo ? Math.max(1, Gq(UU.baf2RxWater / 100)) : 1),
        size: tU
      }
    }

    function xq(UU) {
      var RU;
      const gU = "idle" === UU.baf2RxState || "running" === UU.baf2RxState && UU.baf2RxHeat <= AT || "scram" === UU.baf2RxState && UU.baf2RxHeat < DT;
      if (0 === (UU.baf2RxFlags & xR) || !UU.baf2RxFormed || !gU) return null;
      const {
        fuelHeat: tU,
        cooling: pU,
        size: EU
      } = fq(UU), PU = Math.min(tU, pU, EU), TU = qq({
        fuelHeat: tU,
        cooling: pU,
        size: EU
      }), qU = "cooling" === TU && !0 === UU.baf2RxCryoOpen && !UU.baf2RxCryo, KU = null !== (RU = UU.baf2RxCells) && void 0 !== RU ? RU : "", cU = ("fuel" === TU || "cooling" === TU && !0 === UU.baf2RxCryo) && KU.length > 0 && !KU.includes(String(0)), GU = qU ? "Cryo" : "scram" === UU.baf2RxState ? "Off" : "";
      return PU < 12e3 ? {
        key: `${hq}rxGrow_${cU?"full":TU}${GU}`,
        amount: PU
      } : null
    }

    function mq(UU, RU) {
      return UU[0] === RU[0] && UU[1] === RU[1] && UU[2] === RU[2]
    }

    function Iq(UU) {
      return [...UU].sort(((UU, RU) => Number(RU[2] < RU[1]) - Number(UU[2] < UU[1])))
    }

    function Jq(UU, RU) {
      return RU.some((RU => {
        let [gU, tU] = RU;
        return !(tU <= 0) && ["edge", "cap", "wall", "inside"].some((RU => gU === Et(UU, RU)))
      }))
    }

    function wq(UU, RU, gU) {
      const tU = UU.baf2RxFuel - UU.baf2RxPu > 0 ? gU : 0;
      return {
        full: UU.baf2RxWaste > RU - 3,
        fullInS: tU > 0 ? Math.max(0, RU - UU.baf2RxWaste) / tU : null
      }
    }
    const nq = {
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

    function bq(UU) {
      return oq[UU]
    }
    const oq = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function Zq(UU) {
      let [RU, gU, tU] = UU;
      return Math.ceil(OT(RU, gU, tU) * lU.s)
    }

    function aq(UU, RU) {
      return "battery" === UU ? RU[0] * RU[1] * RU[2] : function(UU) {
        let [RU, gU, tU] = UU;
        return RU * gU * tU - Math.max(0, RU - 2) * Math.max(0, gU - 2) * Math.max(0, tU - 2)
      }(RU) - 1
    }

    function Yq(UU) {
      const RU = Math.max(0, UU);
      if (RU < 10) return String(Math.round(10 * RU) / 10);
      if (RU < 1e4) return Math.round(RU).toLocaleString("en-US");
      if (RU < 1e6) return `${RU<1e5?(Math.floor(RU/100)/10).toFixed(1):Math.floor(RU/1e3)}k`;
      const gU = RU / 1e6;
      return `${gU<10?(Math.floor(100*gU)/100).toFixed(2):gU<100?(Math.floor(10*gU)/10).toFixed(1):Math.floor(gU)}M`
    }

    function Bq(UU) {
      return UU <= 0 ? "0" : UU >= 10 ? String(Math.round(UU)) : UU.toFixed(UU >= 1 ? 1 : 2)
    }

    function Vq(UU) {
      const RU = lg(UU, 0),
        gU = lg(UU, Mg(UU) - 1);
      return {
        lo: [Math.min(RU[0], gU[0]), Math.min(RU[1], gU[1]), Math.min(RU[2], gU[2])],
        hi: [Math.max(RU[0], gU[0]) + 1, Math.max(RU[1], gU[1]) + 1, Math.max(RU[2], gU[2]) + 1]
      }
    }

    function rq(UU, RU, gU) {
      const tU = [RU[0] - UU[0], RU[1] - UU[1], RU[2] - UU[2]],
        pU = [(UU[0] + RU[0]) / 2, (UU[1] + RU[1]) / 2, (UU[2] + RU[2]) / 2],
        EU = [];
      for (let PU = 0; PU < 3; PU++) {
        const TU = (PU + 1) % 3,
          qU = (PU + 2) % 3;
        for (const KU of [UU[TU], RU[TU]])
          for (const cU of [UU[qU], RU[qU]]) {
            const UU = [0, 0, 0],
              RU = [gU, gU, gU];
            UU[PU] = pU[PU], RU[PU] = tU[PU] + gU, UU[TU] = KU, UU[qU] = cU, EU.push([UU, RU])
          }
      }
      return EU
    }
    const Xq = "buildAFactory2Game:",
      vq = [`${Xq}colNorth`, `${Xq}colEast`, `${Xq}colSouth`, `${Xq}colWest`];

    function dq(UU, RU) {
      const [gU, tU, pU] = UU.baf2ColAt;
      return `baf2col ${gU} ${tU} ${pU} ${RU}`
    }

    function Hq(UU) {
      return function(UU) {
        if (!Number.isFinite(UU)) return "";
        const RU = Math.max(1, Math.round(UU));
        if (RU < 60) return `${RU}s`;
        const gU = RU % 60;
        return 0 === gU ? RU / 60 + "m" : `${Math.floor(RU/60)}m ${gU}s`
      }(function(UU) {
        const RU = Pt.FOCUS_BY_LASERS[Math.max(0, Math.min(4, UU))];
        return RU > 0 ? Pt.NOVA_FOCUS / RU : 1 / 0
      }(UU))
    }

    function Sq(UU) {
      const RU = Math.abs(Math.round(UU));
      return RU < 1e3 ? Math.round(UU).toLocaleString("en-US") : RU < 1e6 ? `${RU<1e5?(UU/1e3).toFixed(1).replace(/\.0$/,""):Math.round(UU/1e3)}k` : `${(UU/1e6).toFixed(RU<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function sq(UU, RU, gU) {
      if (jt(RU) >= 0) {
        const RU = function(UU, RU) {
          return UU.find((UU => {
            let {
              focus: gU
            } = UU;
            return gU[0] === RU[0] && gU[2] === RU[2] && (RU[1] === gU[1] || RU[1] === gU[1] - 1)
          }))
        }(UU, gU);
        if (!RU) return null;
        const pU = function(UU) {
          let RU = 0,
            gU = 0;
          for (let tU = 0; tU < 4; tU++) RU += UU.laser[tU] ? 1 : 0, gU += UU.live[tU] ? 1 : 0;
          return {
            lasers: RU,
            live: gU,
            focusPerS: Pt.FOCUS_BY_LASERS[gU],
            drawPerS: Pt.LASER_DRAW * gU
          }
        }({
          laser: RU.lasers,
          live: RU.live
        });
        if (0 === pU.lasers || "noLasers" === RU.state) return {
          key: `${Xq}lookColNoLasers`
        };
        if (0 === pU.live) return {
          key: `${Xq}lookColOff_blocked`
        };
        if (!(RU.on && pU.live > 0) && ("running" !== (tU = RU.state) && "slowed" !== tU)) return {
          key: `${Xq}lookColOff_${RU.state}`
        };
        if (pU.live < pU.lasers) return {
          key: `${Xq}lookColLasersSome`,
          params: {
            lasers: String(pU.lasers),
            live: String(pU.live)
          }
        };
        const EU = RU.open.filter(Boolean).length;
        return EU < 4 ? {
          key: `${Xq}lookColLasersSpots`,
          params: {
            live: String(pU.live),
            spots: String(EU),
            time: Hq(pU.live)
          }
        } : {
          key: `${Xq}lookColLasers`,
          params: {
            live: String(pU.live),
            time: Hq(pU.live)
          }
        }
      }
      var tU;
      if (!ut(RU)) return null;
      const pU = function(UU, RU) {
        for (const gU of UU) {
          const UU = et(gU.focus, [RU[0], RU[1], RU[2]]);
          if (UU && UU.OP === Pt.LASER_D && gU.lasers[UU.dir]) return {
            entry: gU,
            dir: UU.dir
          }
        }
        return null
      }(UU, gU);
      if (!pU) return {
        key: `${Xq}lookLaserNoCollider`
      };
      const {
        entry: EU,
        dir: PU
      } = pU;
      return EU.open[PU] ? EU.live[PU] ? {
        key: EU.on ? `${Xq}lookLaserFiring` : `${Xq}lookLaserReady`
      } : {
        key: `${Xq}lookLaserBlocked`
      } : {
        key: `${Xq}lookLaserClosed`
      }
    }

    function yq(UU, RU) {
      const gU = [];
      for (let tU = 1; tU < Pt.LASER_D; tU++) UU & 1 << RU * (Pt.LASER_D - 1) + tU - 1 && gU.push(tU);
      return gU
    }
    const kq = {
      firing: `${Xq}colSlotFiring`,
      ready: `${Xq}colSlotReady`,
      blocked: `${Xq}colSlotBlocked`,
      empty: `${Xq}colSlotEmpty`,
      closed: `${Xq}colSlotClosed`
    };

    function Fq(UU, RU, gU, tU) {
      let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const EU = Pp(UU),
        PU = Pp(RU),
        TU = Pp(gU),
        qU = TU.filter(Boolean).length,
        KU = EU.filter(Boolean).length,
        cU = [0, 1, 2, 3].map((UU => PU[UU] ? EU[UU] ? TU[UU] ? tU ? "firing" : "ready" : "blocked" : (UU => yq(pU, UU).length > 0)(UU) ? "blocked" : "empty" : "closed")),
        GU = cU.indexOf("blocked"),
        jU = GU < 0 && KU > 0 ? cU.indexOf("empty") : -1;
      return cU.map(((UU, RU) => {
        const gU = RU === GU ? {
          key: `${Xq}colSlotClear`
        } : RU === jU ? {
          key: `${Xq}colSlotAdd`,
          params: {
            time: Hq(Math.min(4, qU + 1))
          }
        } : null;
        return {
          dir: RU,
          tone: UU,
          title: {
            key: "blocked" !== UU || EU[RU] ? kq[UU] : `${Xq}colSlotGap`,
            keys: {
              dir: vq[RU]
            }
          },
          hint: gU
        }
      }))
    }

    function iq(UU) {
      var RU;
      return "noPower" === UU.baf2ColState && UU.baf2ColRxState ? Wq({
        baf2RxState: UU.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (RU = UU.baf2ColRxHeat) && void 0 !== RU ? RU : 0
      }) : null
    }

    function Aq(UU) {
      const RU = Pp(UU.baf2ColSpots).filter(Boolean).length,
        gU = Pp(UU.baf2ColLive);
      let tU = 0,
        pU = 0;
      return Pp(UU.baf2ColLasers).forEach(((UU, RU) => {
        UU && (tU++, pU += gU[RU] ? 0 : 1)
      })), pU > 0 ? {
        key: `${Xq}colSubSome`,
        params: {
          blocked: String(pU),
          lasers: String(tU)
        }
      } : RU < 4 ? {
        key: `${Xq}colSubSpots`,
        params: {
          lasers: String(tU),
          spots: String(RU)
        }
      } : {
        key: `${Xq}colSub`,
        params: {
          lasers: String(tU)
        }
      }
    }

    function zq(UU) {
      const RU = iq(UU);
      if ("idle" === UU.baf2ColRxState && RU) return {
        key: `${Xq}colState_noPowerIdle`
      };
      if (RU) return {
        key: `${Xq}colState_noPowerReactor`,
        keys: {
          state: RU.label
        }
      };
      if ("noInput" !== UU.baf2ColState) return {
        key: `${Xq}colState_${UU.baf2ColState}`
      };
      const gU = String(Math.max(0, Pt.NOVA_SA - UU.baf2ColSa)),
        tU = String(Math.max(0, Pt.NOVA_GD - UU.baf2ColGd));
      return "0" !== gU && "0" !== tU ? {
        key: `${Xq}colState_noInput`,
        params: {
          sa: gU,
          gd: tU
        }
      } : "0" !== gU ? {
        key: `${Xq}colState_noStarAlloy`,
        params: {
          sa: gU
        }
      } : "0" !== tU ? {
        key: `${Xq}colState_noGlowDust`,
        params: {
          gd: tU
        }
      } : {
        key: `${Xq}colState_running`
      }
    }

    function Mq(UU) {
      return UU.baf2ColP < 0 ? `${Xq}colNext` : function(UU) {
        const RU = UU.baf2ColState;
        return UU.baf2ColP >= 0 && ("blocked" === RU || "noLasers" === RU || "noPower" === RU)
      }(UU) ? `${Xq}colStalled` : null === Dq(UU) ? `${Xq}colMaking` : `${Xq}colNovaIn`
    }

    function Dq(UU) {
      if (UU.baf2ColP < 0 || UU.baf2ColWant <= 0) return null;
      const RU = UU.baf2ColFocusPerS * Math.min(1, UU.baf2ColDraw / UU.baf2ColWant);
      return RU > 0 ? Math.max(0, Pt.NOVA_FOCUS - UU.baf2ColP) / RU : null
    }

    function Lq(UU, RU) {
      const gU = [];
      for (let tU = 1; tU <= 3; tU++) {
        const pU = [UU[0], UU[1] - tU, UU[2]];
        if (!RU(pU)) return gU;
        gU.push(pU)
      }
      return []
    }

    function Nq(UU, RU) {
      const gU = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let tU = 0; tU < 4; tU++) {
        const pU = tU,
          EU = Qt(UU.focus, pU, Pt.LASER_D);
        if (UU.lasers[tU] || !UU.open[tU] || !RU(EU)) continue;
        const PU = [];
        for (let gU = 1; gU < Pt.LASER_D; gU++) {
          const tU = Qt(UU.focus, pU, gU);
          RU(tU) || PU.push(tU)
        }
        gU.supports.push(...Lq(EU, RU)), 0 === PU.length ? gU.free.push(EU) : (gU.blocked.push(EU), gU.gaps.push(...PU))
      }
      return gU
    }
    const lq = Pt.LASER_D - .25,
      Oq = 4,
      UK = 2,
      RK = 16;
    const gK = {
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
        blendMode: vT.g.Standard,
        soft: !0
      },
      tK = {
        green: gK,
        pink: {
          ...gK,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function pK(UU, RU) {
      const gU = {
        ...RU.params
      };
      for (const [pU, EU] of Object.entries(null !== (tU = RU.keys) && void 0 !== tU ? tU : {})) {
        var tU;
        gU[pU] = UU(EU)
      }
      return gU
    }
    const EK = "buildAFactory2Game:",
      PK = 2 * Pt.LASER_D + 1,
      TK = Pt.LASER_D;

    function qK(UU) {
      return UU(`${EK}colFocusTip`, {
        need: Sq(Pt.NOVA_FOCUS)
      })
    }

    function KK(UU, RU) {
      return UU(RU.key, pK(UU, RU))
    }

    function cK(UU) {
      const RU = UU.getStatus();
      return {
        status: RU,
        entry: RU ? UU.entryAtRoot(RU.baf2ColAt) : void 0
      }
    }

    function GK(UU, RU) {
      return {
        left: 100 * (TK + UU) / PK + "%",
        top: 100 * (TK + RU) / PK + "%"
      }
    }

    function jK(UU) {
      let {
        status: RU,
        entry: gU
      } = UU;
      const tU = Pp(RU.baf2ColLasers),
        pU = Pp(RU.baf2ColSpots),
        EU = Pp(RU.baf2ColLive),
        PU = !0 === (null === gU || void 0 === gU ? void 0 : gU.on),
        TU = Pt.LASER_D,
        qU = [];
      for (let uU = 0; uU < 4; uU++) {
        const [UU, , RU] = ht[uU];
        if (EU[uU]) {
          const gU = 100 * (TU - 1) / PK,
            tU = UU + RU > 0 ? 100 * (TK + 1) / PK : 100 * (TK - (TU - 1)) / PK,
            pU = 100 * (TK + .35) / PK,
            EU = 30 / PK,
            KU = 0 !== UU ? {
              left: `${tU}%`,
              width: `${gU}%`,
              top: `${pU}%`,
              height: `${EU}%`
            } : {
              top: `${tU}%`,
              height: `${gU}%`,
              left: `${pU}%`,
              width: `${EU}%`
            };
          qU.push((0, bE.jsx)("i", {
            className: wp()("Baf2ColDiagramBeam", {
              Off: !PU
            }),
            style: KU
          }, `beam${uU}`))
        }
        const gU = tU[uU] ? "Baf2ColDiagramLaser" : pU[uU] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        qU.push((0, bE.jsx)("i", {
          className: gU,
          style: GK(UU * TU, RU * TU)
        }, `spot${uU}`))
      }
      for (let uU = 0; uU < 4; uU++) {
        if (tU[uU] || !pU[uU]) continue;
        const [UU, , gU] = ht[uU];
        for (const tU of yq(null !== (KU = RU.baf2ColGaps) && void 0 !== KU ? KU : 0, uU)) {
          var KU;
          qU.push((0, bE.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: GK(UU * tU, gU * tU)
          }, `gap${uU},${tU}`))
        }
      }
      for (const [uU, , CU] of null !== (cU = null === gU || void 0 === gU ? void 0 : gU.blockers) && void 0 !== cU ? cU : []) {
        var cU, GU, jU;
        const UU = uU - (null !== (GU = null === gU || void 0 === gU ? void 0 : gU.focus[0]) && void 0 !== GU ? GU : 0),
          RU = CU - (null !== (jU = null === gU || void 0 === gU ? void 0 : gU.focus[2]) && void 0 !== jU ? jU : 0);
        qU.push((0, bE.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: GK(UU, RU)
        }, `block${UU},${RU}`))
      }
      return (0, bE.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [qU, (0, bE.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function uK(UU) {
      let {
        status: RU
      } = UU;
      const {
        t: gU
      } = (0, Zp.B)(), tU = Pp(RU.baf2ColLive).filter(Boolean).length;
      return (0, bE.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, bE.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: qK(gU),
          children: gU(`${EK}colLadder`)
        }), (0, bE.jsx)("ul", {
          children: [1, 2, 3, 4].map((UU => (0, bE.jsx)("li", {
            className: wp()({
              On: UU === tU
            }),
            children: gU(`${EK}colLadderChip`, {
              lasers: String(UU),
              time: Hq(UU)
            })
          }, UU)))
        })]
      })
    }

    function CK(UU) {
      let {
        item: RU,
        WT: gU,
        need: tU,
        cap: pU
      } = UU;
      const {
        t: EU
      } = (0, Zp.B)(), PU = Math.min(gU, tU);
      return (0, bE.jsxs)("li", {
        className: wp()("Baf2ColTile", {
          Short: gU < tU
        }),
        children: [(0, bE.jsx)(hK, {
          item: RU
        }), (0, bE.jsx)("b", {
          className: "Baf2ColTileValue",
          children: EU(`${EK}colOutOf`, {
            amount: String(PU),
            cap: String(tU)
          })
        }), (0, bE.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, bE.jsx)("i", {
            style: {
              width: 100 * PU / tU + "%"
            }
          })
        }), gU > tU && (0, bE.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: EU(`${EK}colIntakeHeld`, {
            amount: String(gU),
            cap: String(pU)
          })
        })]
      })
    }

    function hK(UU) {
      let {
        item: RU
      } = UU;
      const {
        t: gU
      } = (0, Zp.B)();
      return (0, bE.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, bE.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, bE.jsx)(Yp.c, {
            itemName: RU,
            amount: 0
          })
        }), (0, bE.jsx)("span", {
          className: "Baf2ColTileName",
          children: EE(gU, RU)
        })]
      })
    }

    function QK(UU) {
      switch (UU.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function eK(UU) {
      var RU, gU, pU;
      let {
        store: EU,
        close: PU
      } = UU;
      const {
        t: TU
      } = (0, Zp.B)(), qU = kP(), {
        status: KU,
        entry: cU
      } = function(UU) {
        const [RU, gU] = (0, tU.useState)((() => cK(UU)));
        return (0, tU.useEffect)((() => (gU(cK(UU)), UU.subscribe((() => {
          gU(cK(UU))
        })))), [UU]), RU
      }(EU), [GU, jU] = (0, tU.useState)(null), uU = null === KU || void 0 === KU ? void 0 : KU.baf2ColHold;
      (0, tU.useEffect)((() => {
        jU(null)
      }), [uU]);
      const CU = (0, tU.useRef)({
          p: -1,
          n: 0
        }),
        hU = null !== (RU = null === KU || void 0 === KU ? void 0 : KU.baf2ColP) && void 0 !== RU ? RU : -1;
      hU < CU.current.p && CU.current.n++, CU.current.p = hU;
      const QU = (0, tU.useRef)(null),
        [eU] = (0, tU.useState)((() => {
          return (UU = EU.heldAtOpen()) === Kt || UU === ct ? {
            key: `${Xq}colBeltItIn`,
            item: UU
          } : null;
          var UU
        }));
      if (!KU) return null;
      const WU = KU.baf2ColMember,
        fU = KU.baf2ColP >= 0,
        xU = function(UU, RU) {
          if (UU.baf2ColP >= 0 && UU.baf2ColDraw > 0) {
            const RU = UU.baf2ColWant > 0 ? Math.min(1, UU.baf2ColDraw / UU.baf2ColWant) : 0;
            return {
              focus: UU.baf2ColFocusPerS * RU,
              draw: UU.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === UU.baf2ColState && RU && RU.draw > 0 ? {
            ...RU,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(KU, QU.current);
      QU.current = xU.draw > 0 ? xU : null;
      const mU = "slowed" === KU.baf2ColState || "noPower" === KU.baf2ColState,
        IU = Dq(KU),
        JU = null !== GU && void 0 !== GU ? GU : KU.baf2ColHold,
        wU = function(UU) {
          var RU, gU;
          return "idle" === UU.baf2ColRxState ? null : null !== (RU = null === (gU = iq(UU)) || void 0 === gU ? void 0 : gU.fix) && void 0 !== RU ? RU : null
        }(KU),
        nU = null === wU && null === eU ? function(UU) {
          var RU;
          const gU = UU.baf2ColSentTo;
          if (!gU) return null;
          const tU = null !== (RU = UU.baf2ColSentHeld) && void 0 !== RU ? RU : null;
          return {
            key: null === tU ? `${Xq}colNovaSentToMachine` : `${Xq}colNovaSentTo`,
            target: gU,
            WT: tU
          }
        }(KU) : null,
        bU = fU ? TU(`${EK}colFocusOf`, {
          focus: Sq(KU.baf2ColP),
          need: Sq(Pt.NOVA_FOCUS)
        }) : null;
      return (0, bE.jsx)(IP.d, {
        close: PU,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, bE.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, bE.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, bE.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, bE.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, bE.jsx)(Yp.c, {
                  itemName: Tt,
                  amount: 0
                })
              }), (0, bE.jsxs)("div", {
                children: [(0, bE.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: EE(TU, Tt)
                }), (0, bE.jsx)("p", {
                  children: KK(TU, Aq(KU))
                })]
              })]
            }), (0, bE.jsx)(JP.h, {
              onClick: PU
            })]
          }), (0, bE.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, bE.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, bE.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, bE.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: TU(Mq(KU), {
                    time: null === IU ? "" : IE(TU, IU)
                  })
                }), (0, bE.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, bE.jsx)("i", {
                    style: {
                      width: (fU ? 100 * KU.baf2ColP / Pt.NOVA_FOCUS : 0) + "%"
                    }
                  }, CU.current.n)
                }), (0, bE.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, bE.jsxs)("span", {
                    title: qK(TU),
                    children: [(0, bE.jsx)("b", {
                      children: Sq(xU.focus)
                    }), " ", TU(`${EK}colFocusPerS`)]
                  }), (0, bE.jsxs)("span", {
                    className: wp()("Baf2ColDraw", {
                      Short: mU
                    }),
                    children: [(0, bE.jsx)(ap.c, {
                      name: "bolt"
                    }), mU ? TU(`${EK}colDrawOf`, {
                      draw: Sq(KU.baf2ColDraw),
                      want: Sq(KU.baf2ColWant)
                    }) : TU(`${EK}colPowerPerS`, {
                      rate: Sq(xU.draw)
                    })]
                  }), null !== bU && (0, bE.jsx)("span", {
                    className: "Soft",
                    children: bU
                  })]
                })]
              }), (0, bE.jsx)("p", {
                className: wp()("Baf2ColState", QK(KU)),
                children: KK(TU, zq(KU))
              }), null !== wU && (0, bE.jsx)("p", {
                className: "Baf2ColStateFix",
                children: TU(wU)
              }), null === wU && null !== eU && (0, bE.jsx)("p", {
                className: "Baf2ColStateFix",
                children: TU(eU.key, {
                  item: EE(TU, eU.item)
                })
              }), nU && (0, bE.jsx)("p", {
                className: "Baf2ColStateFix",
                children: TU(nU.key, {
                  target: EE(TU, nU.target),
                  amount: String(null !== (gU = nU.WT) && void 0 !== gU ? gU : 0)
                })
              }), (0, bE.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, bE.jsx)(CK, {
                  item: Kt,
                  WT: KU.baf2ColSa,
                  need: Pt.NOVA_SA,
                  cap: Pt.SA_CAP
                }), (0, bE.jsx)(CK, {
                  item: ct,
                  WT: KU.baf2ColGd,
                  need: Pt.NOVA_GD,
                  cap: Pt.GD_CAP
                }), (0, bE.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, bE.jsx)(hK, {
                    item: "Nova Matter"
                  }), (0, bE.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: TU(`${EK}colNovaHeld`, {
                      amount: String(KU.baf2ColOut),
                      cap: String(Pt.OUT_CAP)
                    })
                  }), WU && (0, bE.jsx)(JP.j, {
                    className: "Baf2ColTake",
                    disabled: 0 === KU.baf2ColOut,
                    onClick: () => {
                      qU.send(dq(KU, "take"))
                    },
                    children: TU(`${EK}colTake`)
                  })]
                })]
              }), WU && (0, bE.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": JU,
                className: wp()("Baf2ColHold", {
                  On: JU
                }),
                onClick: UU => {
                  UU.detail > 0 && UU.currentTarget.blur(), jU(!JU), qU.send(dq(KU, "hold " + (JU ? 0 : 1)))
                },
                children: [(0, bE.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, bE.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, bE.jsx)("b", {
                    children: TU(`${EK}colHold`)
                  }), (0, bE.jsx)("span", {
                    children: TU(`${EK}colHoldNote`)
                  })]
                })]
              })]
            }), (0, bE.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, bE.jsx)(jK, {
                status: KU,
                entry: cU
              }), (0, bE.jsx)("ul", {
                className: "Baf2ColSlots",
                children: Fq(KU.baf2ColLasers, KU.baf2ColSpots, KU.baf2ColLive, xU.beamsOn, null !== (pU = KU.baf2ColGaps) && void 0 !== pU ? pU : 0).map((UU => (0, bE.jsxs)("li", {
                  className: UU.tone,
                  children: [(0, bE.jsx)("b", {
                    children: KK(TU, UU.title)
                  }), null !== UU.hint && (0, bE.jsx)("span", {
                    children: KK(TU, UU.hint)
                  })]
                }, UU.dir)))
              }), (0, bE.jsx)(uK, {
                status: KU
              })]
            })]
          })]
        })
      })
    }
    const WK = "buildAFactory2Game:",
      fK = 36e5,
      xK = 864e5;

    function mK(UU, RU, gU) {
      return Math.max(0, Math.ceil((UU + RU - Math.max(gU, UU)) / 1e3))
    }

    function IK(UU) {
      return UU.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function JK(UU) {
      return "Homestead" === UU
    }

    function wK(UU) {
      return function(UU) {
        let RU = 0;
        for (const gU of UU) {
          const UU = /^Island ([1-9]\d{0,5})$/.exec(gU);
          UU && (RU = Math.max(RU, Number(UU[1])))
        }
        return `Island ${RU+1}`
      }(UU.map((UU => UU.baf2IslandName)))
    }

    function nK(UU, RU) {
      return function(UU) {
        return `${WK}islandsBlocked${UU[0].toUpperCase()}${UU.slice(1)}`
      }("degraded" === UU && 0 === RU ? "stuck" : UU)
    }

    function bK(UU) {
      return UU.filter((UU => {
        var RU;
        return !UU.baf2IslandActive && void 0 === UU.baf2IslandUnreadable && void 0 === (null === (RU = UU.baf2IslandCoop) || void 0 === RU ? void 0 : RU.baf2CoopState)
      })).length
    }

    function oK(UU) {
      return "coopMoving" === UU || "coopUnreachable" === UU
    }

    function ZK(UU, RU) {
      const gU = RU > 0;
      return {
        change: null === UU && !gU,
        switch: (null === UU || "degraded" === UU || oK(UU)) && !gU,
        rename: "loading" !== UU && "degraded" !== UU && "stuck" !== UU
      }
    }

    function aK(UU, RU) {
      return void 0 === UU || "corrupt" === UU && RU
    }
    const YK = XP;

    function BK(UU, RU, gU) {
      if (null !== UU && void 0 !== UU && UU.untilGone) {
        var tU;
        return !("dismiss" === UU.untilGone && void 0 === (null === (tU = RU.baf2IslandCoop) || void 0 === tU ? void 0 : tU.baf2CoopState)) && gU - UU.atMs < 32500
      }
      return void 0 !== UU && gU - UU.atMs < YK && RU.baf2IslandName === UU.from
    }
    const VK = XP;

    function rK(UU) {
      return "core" === (null === UU || void 0 === UU ? void 0 : UU.kind) ? UU.core : "islands" === (null === UU || void 0 === UU ? void 0 : UU.kind) ? UU.backToCore : void 0
    }

    function XK(UU) {
      return `\0${UU}\0`
    }

    function vK(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const tU = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const EU of Object.keys(gU)) tU[EU] = XK(EU);
      let pU = Object.keys(tU).length > 0 ? UU(RU, tU) : UU(RU);
      for (const [EU, PU] of Object.entries(gU)) pU = pU.split(XK(EU)).join(PU);
      return pU
    }

    function dK(UU, RU) {
      return UU ? RU ? "enabled" : "disabled" : "hidden"
    }
    const HK = {
      removed: `${WK}islandsCoopRemoved`,
      deleted: `${WK}islandsCoopDeleted`,
      notReady: `${WK}islandsCoopNotReady`,
      gone: `${WK}islandsCoopGone`
    };

    function SK(UU) {
      var RU;
      return "member" !== (null === (RU = UU.baf2IslandCoop) || void 0 === RU ? void 0 : RU.baf2CoopRole) && "newer" !== UU.baf2IslandUnreadable
    }

    function sK(UU, RU, gU, tU, pU, EU) {
      const PU = UU.baf2IslandActive,
        TU = UU.baf2IslandUnreadable,
        qU = UU.baf2IslandCoop,
        KU = function(UU, RU, gU) {
          return {
            switch: UU.switch && void 0 === RU,
            delete: UU.change && aK(RU, gU)
          }
        }(RU, TU, tU),
        cU = PU && void 0 !== qU && void 0 === qU.baf2CoopState && "coopUnreachable" === EU,
        GU = {
          switch: dK((!PU || cU) && void 0 === TU, cU || KU.switch),
          switchLabel: cU ? "tryAgain" : "switch",
          rename: dK(!0, RU.rename),
          delete: dK(!PU, KU.delete),
          deleteWaits: !PU && aK(TU, tU),
          people: dK(void 0 !== UU.baf2IslandInvitable || pU && PU && void 0 === TU && void 0 === qU, !0),
          peopleLabel: "invite",
          leave: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        jU = !PU && KU.delete;
      if (void 0 === qU) return gU ? {
        ...GU,
        delete: dK(!PU, !1),
        deleteWaits: !1,
        note: jU ? {
          key: `${WK}islandsCoopKeepOwn`
        } : null
      } : GU;
      const uU = qU.baf2CoopState,
        CU = qU.baf2CoopMembers.length > 1,
        hU = {
          ...GU,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== uU && "member" === qU.baf2CoopRole) return {
        ...hU,
        dismiss: dK(!0, RU.rename),
        note: {
          key: HK[uU],
          names: {
            owner: qU.baf2CoopOwner
          }
        }
      };
      if (void 0 !== uU) {
        let UU = {
          key: `${WK}islandsCoopOwnLost`
        };
        return jU && CU ? UU = {
          key: `${WK}islandsCoopDeleteMembers`
        } : jU && gU && (UU = {
          key: `${WK}islandsCoopKeepOwn`
        }), {
          ...hU,
          delete: dK(!PU, KU.delete && !CU && !gU),
          deleteWaits: GU.deleteWaits && !CU && !gU,
          note: UU
        }
      }
      if ("member" === qU.baf2CoopRole) return {
        ...GU,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        leave: dK(!0, PU ? RU.switch : RU.rename)
      };
      const QU = qU.baf2CoopManageHere;
      let eU = null;
      var WU;
      QU || PU ? jU && CU ? eU = {
        key: `${WK}islandsCoopDeleteMembers`
      } : jU && gU && (eU = {
        key: `${WK}islandsCoopKeepOwn`
      }) : eU = {
        key: null !== (WU = qU.baf2CoopLeft) && void 0 !== WU && WU.length ? `${WK}islandsCoopManageThereClaim` : `${WK}islandsCoopManageThere`
      };
      return {
        ...GU,
        rename: dK(!0, RU.rename && QU),
        delete: dK(!PU, KU.delete && !CU && !gU),
        deleteWaits: GU.deleteWaits && !CU && !gU,
        people: "enabled",
        peopleLabel: "players",
        unshare: dK(QU && PU && !CU, RU.change),
        remove: QU,
        note: eU
      }
    }

    function yK(UU) {
      var RU;
      const gU = UU.baf2IslandCoop;
      if ("owner" !== (null === gU || void 0 === gU ? void 0 : gU.baf2CoopRole) || void 0 !== gU.baf2CoopState || null === (RU = gU.baf2CoopLeft) || void 0 === RU || !RU.length) return null;
      const tU = UU.baf2IslandActive && gU.baf2CoopManageHere;
      return {
        left: gU.baf2CoopLeft,
        claim: tU,
        goThere: !tU && gU.baf2CoopManageHere
      }
    }

    function kK(UU) {
      return UU.baf2CoopMembers.length >= UU.baf2CoopMax
    }

    function FK(UU, RU, gU) {
      return void 0 !== UU && RU < UU.answer && gU - UU.atMs < YK
    }
    const iK = "buildAFactory2Game:";

    function AK(UU, RU) {
      return {
        onKeyDown: gU => {
          gU.stopPropagation(), gU.nativeEvent.isComposing || 229 === gU.nativeEvent.keyCode || ("Enter" === gU.key ? (gU.preventDefault(), UU()) : "Escape" === gU.key && (gU.preventDefault(), RU()))
        }
      }
    }

    function zK(UU) {
      return {
        onKeyDown: RU => {
          "Escape" !== RU.key || RU.nativeEvent.isComposing || (RU.preventDefault(), RU.stopPropagation(), UU())
        }
      }
    }

    function MK(UU) {
      UU.currentTarget.select()
    }

    function DK(UU, RU) {
      (0, tU.useEffect)((() => {
        var gU;
        UU && (null === (gU = RU.current) || void 0 === gU || gU.scrollIntoView({
          block: "nearest"
        }))
      }), [UU, RU])
    }

    function LK(UU) {
      const [RU, gU] = (0, tU.useState)(null);
      return (0, tU.useEffect)((() => {
        const RU = document.querySelector(".UiRequests"),
          tU = UU.current;
        if (!RU || !tU || "undefined" === typeof ResizeObserver) return;
        const pU = () => {
          const UU = RU.getBoundingClientRect(),
            pU = tU.getBoundingClientRect(),
            EU = tU.parentElement,
            PU = EU && parseFloat(getComputedStyle(EU).paddingTop) || 0,
            TU = function(UU, RU, gU, tU) {
              if (!UU || UU.height <= 0 || UU.right <= RU.left || UU.left >= RU.right) return null;
              const pU = Math.max(tU, UU.bottom + 8);
              return {
                marginTop: Math.round(pU - tU),
                maxHeight: Math.max(0, Math.floor(gU - pU - tU))
              }
            }(UU, pU, window.innerHeight, PU);
          gU((UU => (null === UU || void 0 === UU ? void 0 : UU.marginTop) === (null === TU || void 0 === TU ? void 0 : TU.marginTop) && (null === UU || void 0 === UU ? void 0 : UU.maxHeight) === (null === TU || void 0 === TU ? void 0 : TU.maxHeight) ? UU : TU))
        };
        pU();
        const EU = new ResizeObserver(pU);
        return EU.observe(RU), window.addEventListener("resize", pU), () => {
          EU.disconnect(), window.removeEventListener("resize", pU)
        }
      }), [UU]), RU
    }

    function NK(UU) {
      (0, tU.useEffect)((() => {
        var RU;
        null === (RU = UU.current) || void 0 === RU || RU.focus()
      }), [UU])
    }

    function lK(UU) {
      const [RU, gU] = (0, tU.useState)(Date.now);
      return (0, tU.useEffect)((() => {
        const RU = window.setInterval((() => {
          gU(Date.now())
        }), UU);
        return () => {
          window.clearInterval(RU)
        }
      }), [UU]), RU
    }

    function OK(UU) {
      let {
        tier: RU,
        t: gU
      } = UU;
      const {
        kind: tU,
        short: pU
      } = QU(RU), EU = uU(RU, CU), PU = gU(`${iK}${EU.key}`, {
        ...EU.params,
        name: gU(`${iK}${eU(RU).nameKey}`)
      });
      return (0, bE.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, bE.jsx)("span", {
          className: wp()("Baf2IslandTierPip", {
            Stage: "tier" !== tU
          }),
          "aria-hidden": "true",
          children: pU
        }), PU]
      })
    }

    function Uc(UU) {
      let {
        note: RU,
        className: gU,
        t: tU
      } = UU;
      return (0, bE.jsx)("p", {
        className: wp()("Baf2IslandNote", gU),
        children: vK(tU, RU.key, RU.names, RU.params)
      })
    }
    const Rc = "buildAFactory2Game:";

    function gc(UU) {
      let {
        message: RU,
        arrivedAtMs: gU,
        close: pU,
        leave: EU
      } = UU;
      const PU = kP(),
        {
          t: TU
        } = (0, Zp.B)(),
        qU = lK(1e3),
        KU = (0, tU.useRef)(null);
      (0, tU.useEffect)((() => {
        var UU;
        null === (UU = KU.current) || void 0 === UU || UU.focus()
      }), []);
      const cU = mK(gU, RU.baf2TransferInMs, qU),
        GU = gU + RU.baf2TransferInMs - 1e3,
        [jU, uU] = (0, tU.useState)(null);
      (0, tU.useEffect)((() => {
        const UU = window.setTimeout((() => {
          uU(GU)
        }), Math.max(0, GU - Date.now()));
        return () => {
          window.clearTimeout(UU)
        }
      }), [GU]);
      const CU = jU === GU || qU >= GU,
        hU = RU.baf2TransferIsland,
        QU = RU.baf2TransferOwner;
      return (0, bE.jsx)(IP.d, {
        close: pU,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, bE.jsxs)("section", {
          ref: KU,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, bE.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, bE.jsxs)("div", {
              children: [(0, bE.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === QU ? vK(TU, `${Rc}islandsTransferOwn`, {
                  island: hU
                }) : vK(TU, `${Rc}islandsTransfer`, {
                  island: hU,
                  owner: QU
                })
              }), (0, bE.jsx)("p", {
                children: CU ? TU(`${Rc}islandsTransferNow`) : TU(`${Rc}islandsTransferIn`, {
                  time: IE(TU, cU)
                })
              })]
            }), (0, bE.jsx)(JP.h, {
              ariaLabel: TU(`${Rc}islandsClose`),
              onClick: pU
            })]
          }), !CU && (0, bE.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, bE.jsx)("p", {
              className: "Baf2TransferNote",
              children: TU(`${Rc}islandsTransferNote`)
            }), (0, bE.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, bE.jsx)(JP.e, {
                onClick: () => {
                  PU.send("baf2coopstay"), EU()
                },
                children: TU(`${Rc}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var tc = gU(1410),
      pc = gU(1126),
      Ec = gU.n(pc);
    const Pc = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const Tc = "buildAFactory2Game:",
      qc = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function Kc(UU, RU, gU) {
      return void 0 === RU ? gU : "string" === typeof RU ? RU : Array.isArray(RU) ? RU.map((RU => "string" === typeof RU ? RU : "translationKey" in RU ? UU(RU.translationKey) : "")).join("") : UU(RU.translationKey)
    }

    function cc(UU) {
      const RU = {};
      for (const [gU, tU] of Object.entries(null !== UU && void 0 !== UU ? UU : {})) RU[gU] = tU < 0 ? mE(tU) : tU.toLocaleString("en-US");
      return RU
    }

    function Gc(UU, RU) {
      const gU = RU ? "touch" : "mouse";
      return {
        use: UU(`${Tc}lookUse_${gU}`),
        Use: UU(`${Tc}lookUseStart_${gU}`)
      }
    }
    const jc = (0, tU.memo)((function(UU) {
      let {
        item: RU
      } = UU;
      return (0, bE.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, bE.jsx)(Yp.c, {
          itemName: RU,
          amount: 0
        })
      })
    }));

    function uc(UU) {
      let {
        label: RU,
        percent: gU,
        progress: tU
      } = UU;
      return (0, bE.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, bE.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${RU}: ${tU}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": gU,
          children: (0, bE.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${gU}%`
            }
          })
        }), (0, bE.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: tU
        })]
      })
    }

    function Cc(UU) {
      let {
        chips: RU
      } = UU;
      return (0, bE.jsx)("span", {
        className: "Baf2QuestChips",
        children: RU.map((UU => {
          let [RU, gU, tU] = UU;
          const pU = gU >= tU;
          return (0, bE.jsxs)("span", {
            className: wp()("Baf2QuestChip", {
              Met: pU
            }),
            children: [(0, bE.jsx)(jc, {
              item: RU
            }), (0, bE.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: pU ? `\u2713${tU}` : `${gU}/${tU}`
            })]
          }, RU)
        }))
      })
    }

    function hc(UU, RU) {
      const {
        key: gU,
        params: tU
      } = uU(RU, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return UU(`${Tc}${gU}`, {
        ...tU,
        name: UU(`${Tc}${eU(RU).nameKey}`)
      })
    }

    function Qc(UU) {
      let {
        core: RU,
        t: gU
      } = UU;
      const [tU, pU] = RU, EU = pU > 0 ? Math.floor(100 * tU / pU) : 100;
      return (0, bE.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": gU(`${Tc}questCoreLabel`, {
          have: String(tU),
          need: String(pU)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": EU,
        children: [(0, bE.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: gU(`${Tc}questCore`, {
            percent: String(EU)
          })
        }), (0, bE.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, bE.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${EU}%`
            }
          })
        })]
      })
    }

    function ec(UU) {
      let {
        rows: RU,
        t: gU
      } = UU;
      const tU = RU.filter((UU => UU.done)).length;
      return (0, bE.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": gU(`${Tc}questStepsProgress`, {
          done: String(tU),
          total: String(RU.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": RU.length,
        "aria-valuenow": tU,
        children: RU.map((UU => (0, bE.jsx)("span", {
          className: wp()("Baf2QuestSegment", {
            Done: UU.done,
            Current: UU.current
          })
        }, UU.id)))
      })
    }
    const Wc = (0, tU.memo)(xc, fc);

    function fc(UU, RU) {
      const gU = gU => UU.view.itemNames[gU] === RU.view.itemNames[gU];
      return UU.t === RU.t && UU.extra === RU.extra && (null === UU.row.item || gU(UU.row.item)) && UU.row.madeFor.every(gU) && UU.row.also.every(gU) && Ec()(UU.row, RU.row)
    }

    function xc(UU) {
      let {
        row: RU,
        view: gU,
        t: tU,
        extra: pU
      } = UU;
      const {
        isTouchScreen: EU
      } = (0, mp.l)(["isTouchScreen"]), PU = RU.item ? function(UU, RU, gU) {
        return 1 !== gU && Pc.has(UU) ? op(RU) : null
      }(RU.key, RU.item, RU.total) : null, TU = PU ? tU(PU) : RU.item ? Kc(tU, gU.itemNames[RU.item], RU.item) : "", qU = RU.also.map((UU => Kc(tU, gU.itemNames[UU], UU))), KU = qU.join(", "), cU = function(UU, RU) {
        var gU;
        return RU.length < 2 ? null !== (gU = RU[0]) && void 0 !== gU ? gU : "" : UU(`${Tc}listAnd`, {
          rest: RU.slice(0, -1).join(UU(`${Tc}listComma`)),
          last: RU[RU.length - 1]
        })
      }(tU, [TU, ...qU]), GU = tU(`${Tc}${RU.key}`, {
        ...Gc(tU, EU),
        ...cc(RU.params),
        item: TU,
        also: KU,
        itemList: cU,
        total: String(RU.total)
      }), [jU, ...uU] = GU.split("\n"), CU = RU.total > 1 && !RU.done && !RU.away;
      return (0, bE.jsxs)("li", {
        className: wp()("Baf2QuestStep", {
          Done: RU.done,
          Current: RU.current,
          JustFinished: RU.justFinished,
          Away: RU.away
        }),
        children: [!RU.done && null !== RU.item && (0, bE.jsx)(jc, {
          item: RU.item
        }), (RU.done || null === RU.item) && (0, bE.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: RU.done ? "\u2713" : "\u25cb"
        }), (0, bE.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, bE.jsx)("strong", {
            children: jU
          }), uU.length > 0 && (0, bE.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: uU.join(" ")
          }), !RU.done && RU.madeFor.length > 0 && (0, bE.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: tU("buildAFactory2Game:questRowFor", {
              items: RU.madeFor.map((UU => Kc(tU, gU.itemNames[UU], UU))).join(" \u2192 ")
            })
          }), CU && (0, bE.jsx)(uc, {
            label: jU,
            percent: Math.round(100 * RU.amount / RU.total),
            progress: `${RU.amount.toLocaleString("en-US")}/${RU.total.toLocaleString("en-US")}`
          }), !RU.done && !RU.away && RU.chips && RU.chips.length > 0 && (0, bE.jsx)(Cc, {
            chips: RU.chips
          }), pU]
        })]
      })
    }

    function mc(UU, RU) {
      let [gU, tU] = RU;
      return UU(`${Tc}${gU}`, cc(tU))
    }

    function Ic(UU) {
      let [RU, gU] = UU;
      return RU + JSON.stringify(gU)
    }

    function Jc(UU) {
      let {
        goal: RU,
        t: gU
      } = UU;
      return RU ? (0, bE.jsx)("span", {
        className: "Baf2BookGoal",
        children: gU(`${Tc}${RU}`)
      }) : null
    }

    function wc(UU) {
      let {
        view: RU,
        t: gU
      } = UU;
      if (!RU.name) return null;
      const tU = ip(RU.rows);
      return (0, bE.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, bE.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: gU(`${Tc}currentQuest`)
        }), (0, bE.jsx)("strong", {
          className: "Baf2BookTitle",
          children: mc(gU, RU.name)
        }), (0, bE.jsx)(Jc, {
          goal: RU.goal,
          t: gU
        }), tU.length > 1 && (0, bE.jsx)(ec, {
          rows: tU,
          t: gU
        }), (0, bE.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: RU.rows.map((UU => (0, bE.jsx)(Wc, {
            row: UU,
            view: RU,
            t: gU
          }, UU.id)))
        }), RU.reward && (0, bE.jsxs)("span", {
          className: "Baf2BookReward",
          children: [gU(`${Tc}questReward`), (0, bE.jsx)(jc, {
            item: RU.reward
          }), Kc(gU, RU.itemNames[RU.reward], RU.reward)]
        })]
      })
    }

    function nc(UU) {
      let {
        quest: RU,
        upcoming: gU,
        t: tU
      } = UU;
      return (0, bE.jsxs)("li", {
        className: wp()("Baf2BookQuest", {
          Done: RU[3],
          Upcoming: gU
        }),
        children: [(0, bE.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: RU[3] ? "\u2713" : "\u25cb"
        }), (0, bE.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, bE.jsx)("strong", {
            className: "Baf2BookTitle",
            children: mc(tU, RU)
          }), (0, bE.jsx)(Jc, {
            goal: RU[2],
            t: tU
          })]
        })]
      })
    }

    function bc(UU) {
      let {
        done: RU,
        total: gU,
        t: tU
      } = UU;
      const pU = gU > 0 ? Math.round(100 * RU / gU) : 0,
        EU = tU(`${Tc}questBookChapterProgress`, {
          done: String(RU),
          total: String(gU)
        });
      return (0, bE.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, bE.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": EU,
          "aria-valuemin": 0,
          "aria-valuemax": gU,
          "aria-valuenow": RU,
          children: (0, bE.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${pU}%`
            }
          })
        }), (0, bE.jsx)("span", {
          className: "Baf2BookProgressText",
          children: EU
        })]
      })
    }

    function oc(UU) {
      let {
        view: RU,
        tier: gU,
        quests: tU,
        t: pU
      } = UU;
      const EU = gU === RU.tier,
        PU = (null !== tU && void 0 !== tU ? tU : []).filter((UU => !UU[4])),
        TU = (null !== tU && void 0 !== tU ? tU : []).filter((UU => UU[4])),
        qU = PU.filter((UU => UU[3])).length,
        KU = EU && RU.name ? Ic(RU.name) : null,
        cU = PU.findIndex((UU => !UU[3] && Ic(UU) === KU));
      return (0, bE.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, bE.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, bE.jsx)("h3", {
            children: hc(pU, gU)
          }), PU.length > 0 && (0, bE.jsx)(bc, {
            done: qU,
            total: PU.length,
            t: pU
          }), EU && RU.core && (0, bE.jsx)(Qc, {
            core: RU.core,
            t: pU
          })]
        }), (0, bE.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === tU && EU && (0, bE.jsx)(wc, {
            view: RU,
            t: pU
          }), PU.map(((UU, gU) => gU === cU ? (0, bE.jsx)(wc, {
            view: RU,
            t: pU
          }, Ic(UU)) : (0, bE.jsx)(nc, {
            quest: UU,
            upcoming: !UU[3],
            t: pU
          }, Ic(UU))))]
        }), EU && RU.side && (0, bE.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, bE.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: pU(`${Tc}questSide`)
          }), (0, bE.jsx)("strong", {
            className: "Baf2BookTitle",
            children: mc(pU, RU.side.name)
          }), (0, bE.jsx)(Jc, {
            goal: RU.side.goal,
            t: pU
          }), (0, bE.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, bE.jsx)(Wc, {
              row: RU.side.row,
              view: RU,
              t: pU
            })
          })]
        }), TU.length > 0 && (0, bE.jsxs)(bE.Fragment, {
          children: [(0, bE.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: pU(`${Tc}questBookSidesDone`)
          }), (0, bE.jsx)("ol", {
            className: "Baf2BookQuests",
            children: TU.map((UU => (0, bE.jsx)(nc, {
              quest: UU,
              upcoming: !1,
              t: pU
            }, Ic(UU))))
          })]
        })]
      })
    }

    function Zc(UU) {
      var RU, gU, EU;
      let {
        store: PU,
        close: TU
      } = UU;
      const {
        t: qU
      } = (0, Zp.B)(), KU = (0, tc.h)(dp, PU.get()), GU = null !== (RU = KU.tier) && void 0 !== RU ? RU : 1, [jU, uU] = (0, tU.useState)(null), CU = (null === jU || void 0 === jU ? void 0 : jU.at) === GU ? jU.tier : GU, eU = (0, tU.useRef)(null), WU = null !== KU.chapters;
      (0, tU.useEffect)((() => {
        var UU;
        eU.current && (eU.current.scrollTop = 0);
        const RU = null === (UU = eU.current) || void 0 === UU ? void 0 : UU.querySelector(".Baf2BookQuest.Current");
        if (eU.current && RU) {
          const UU = RU.getBoundingClientRect().bottom - eU.current.getBoundingClientRect().bottom;
          UU > 0 && (eU.current.scrollTop += Math.min(UU, RU.getBoundingClientRect().top - eU.current.getBoundingClientRect().top))
        }
      }), [CU, WU]);
      const fU = null === (gU = KU.chapters) || void 0 === gU ? void 0 : gU.find((UU => {
        let [RU] = UU;
        return RU === CU
      }));
      return (0, bE.jsx)(IP.d, {
        close: TU,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, bE.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: qc,
          children: [(0, bE.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, bE.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: qU(`${Tc}questBookTitle`)
            }), (0, bE.jsx)(JP.h, {
              onClick: TU
            })]
          }), (0, bE.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": qU(`${Tc}questBookChapters`),
            children: pU.slice(0, cU()).map(((UU, RU) => {
              const gU = RU + 1,
                {
                  kind: tU,
                  short: pU
                } = QU(gU),
                EU = hU(gU, GU),
                PU = EU ? qU(`${Tc}coreAtomicHidden`) : hc(qU, gU);
              return (0, bE.jsx)("li", {
                children: (0, bE.jsx)("button", {
                  type: "button",
                  className: wp()({
                    Stage: "tier" !== tU,
                    Atomic: "atomic" === tU,
                    Current: gU === GU,
                    Selected: gU === CU
                  }),
                  disabled: gU > GU,
                  "aria-pressed": gU === CU,
                  "aria-label": PU,
                  title: EU ? void 0 : PU,
                  onClick: () => {
                    uU({
                      tier: gU,
                      at: GU
                    })
                  },
                  children: EU ? "?" : pU
                })
              }, UU.nameKey)
            }))
          }), (0, bE.jsxs)("div", {
            ref: eU,
            className: "Baf2BookBody",
            children: [kp(KU) && CU === GU && (0, bE.jsx)("p", {
              className: "Baf2BookEmpty",
              children: qU(`${Tc}questBookAllDone`)
            }), (0, bE.jsx)(oc, {
              view: KU,
              tier: CU,
              quests: null !== (EU = null === fU || void 0 === fU ? void 0 : fU[1]) && void 0 !== EU ? EU : null,
              t: qU
            })]
          })]
        })
      })
    }
    const ac = "buildAFactory2Game:";

    function Yc(UU) {
      let {
        tiers: RU,
        from: gU,
        tier: tU,
        shown: pU,
        Hj: EU
      } = UU;
      const {
        t: PU
      } = (0, Zp.B)(), TU = RU.map(((UU, RU) => {
        const TU = gU + RU,
          {
            kind: qU,
            short: KU
          } = QU(TU),
          cU = hU(TU, tU);
        return (0, bE.jsx)("li", {
          children: (0, bE.jsx)("button", {
            type: "button",
            className: wp()({
              Stage: "tier" !== qU,
              Silhouette: cU,
              Reached: TU <= tU,
              Current: TU === tU,
              Next: TU === tU + 1,
              Selected: TU === pU
            }),
            disabled: cU,
            "aria-pressed": TU === pU,
            "aria-label": cU ? PU(`${ac}coreAtomicHidden`) : void 0,
            title: cU ? void 0 : PU(`${ac}${UU.nameKey}`),
            onClick: () => {
              EU(TU)
            },
            children: cU ? "?" : KU
          })
        }, UU.nameKey)
      }));
      return (0, bE.jsx)(bE.Fragment, {
        children: TU
      })
    }

    function Bc(UU) {
      let {
        id: RU,
        label: gU,
        tiers: tU,
        from: pU,
        ...EU
      } = UU;
      return (0, bE.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, bE.jsx)("span", {
          id: RU,
          className: "Baf2CoreLadderLabel",
          children: gU
        }), (0, bE.jsx)("ol", {
          "aria-labelledby": RU,
          children: (0, bE.jsx)(Yc, {
            ...EU,
            tiers: tU,
            from: pU
          })
        })]
      })
    }

    function Vc(UU) {
      const {
        t: RU
      } = (0, Zp.B)(), gU = pU.findIndex((UU => void 0 !== UU.stage)), tU = pU.findIndex((UU => void 0 !== UU.reactorTier)), EU = gU < 0 ? pU : pU.slice(0, gU), PU = gU < 0 ? [] : pU.slice(gU, tU < 0 ? void 0 : tU), qU = tU < 0 || !TU() ? [] : pU.slice(tU);
      return (0, bE.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, bE.jsx)(Bc, {
          ...UU,
          id: "baf2CoreTiersLabel",
          label: RU(`${ac}coreTiersLabel`),
          tiers: EU,
          from: 1
        }), PU.length > 0 && (0, bE.jsx)(Bc, {
          ...UU,
          id: "baf2CoreStagesLabel",
          label: RU(`${ac}coreStagesLabel`),
          tiers: PU,
          from: gU + 1
        }), qU.length > 0 && (0, bE.jsx)(Bc, {
          ...UU,
          id: "baf2CoreAtomicLabel",
          label: RU(`${ac}coreAtomicLabel`),
          tiers: qU,
          from: tU + 1
        })]
      })
    }
    const rc = "buildAFactory2Game:";

    function Xc(UU) {
      let {
        item: RU,
        itemNames: gU,
        children: tU
      } = UU;
      return (0, bE.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, bE.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, bE.jsx)(Yp.c, {
            itemName: RU,
            amount: 0
          })
        }), (0, bE.jsx)(Bp.e, {
          text: gU[RU]
        }), tU]
      })
    }

    function vc(UU) {
      const RU = new Map;
      for (const {
          block: tU
        }
        of UU.newDeposits) {
        var gU;
        RU.set(tU, (null !== (gU = RU.get(tU)) && void 0 !== gU ? gU : 0) + 1)
      }
      return [...RU]
    }

    function dc(UU) {
      let {
        value: RU,
        label: gU,
        more: tU
      } = UU;
      return (0, bE.jsxs)("li", {
        children: [(0, bE.jsx)("strong", {
          children: RU
        }), (0, bE.jsx)("span", {
          children: gU
        }), tU > 0 && (0, bE.jsxs)("em", {
          children: ["+", tU]
        })]
      })
    }

    function Hc(UU) {
      let {
        items: RU,
        itemNames: gU
      } = UU;
      const {
        t: pU
      } = (0, Zp.B)(), [EU, PU] = (0, tU.useState)(null), TU = null !== EU && RU.includes(EU) ? EU : null;
      return (0, bE.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, bE.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: pU(`${rc}coreRewardUnlocks`)
        }), (0, bE.jsx)("ul", {
          children: RU.map((UU => (0, bE.jsx)("li", {
            children: (0, bE.jsx)("button", {
              type: "button",
              className: wp()("Baf2PanelIcon", {
                Picked: UU === TU
              }),
              title: EE(pU, UU),
              "aria-label": EE(pU, UU),
              "aria-pressed": UU === TU,
              onClick: () => {
                PU(UU === TU ? null : UU)
              },
              children: (0, bE.jsx)(Yp.c, {
                itemName: UU,
                amount: 0
              })
            })
          }, UU)))
        }), (0, bE.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== TU && (0, bE.jsxs)(bE.Fragment, {
            children: [(0, bE.jsx)(Bp.e, {
              text: gU[TU]
            }), " \xb7 ", (0, bE.jsx)(Bp.e, {
              text: gU[aU(TU)]
            })]
          }), null === TU && pU(`${rc}coreRecipeTap`)]
        })]
      })
    }

    function Sc(UU) {
      var RU, gU;
      let {
        def: tU,
        tier: pU,
        itemNames: EU
      } = UU;
      const {
        t: PU
      } = (0, Zp.B)(), TU = pU > 1 ? eU(pU - 1) : void 0, qU = Math.round(2 * tU.islandRadius), KU = TU ? Math.round(2 * TU.islandRadius) : qU, cU = pU >= 3 ? mt(pU) : null;
      return (0, bE.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, bE.jsxs)("ul", {
          className: wp()("Baf2CoreStats", {
            Four: null !== cU
          }),
          children: [(0, bE.jsx)(dc, {
            value: `${qU}\xd7${qU}`,
            label: PU(`${rc}coreStatIsland`),
            more: qU - KU
          }), (0, bE.jsx)(dc, {
            value: String(tU.machineAllowance),
            label: PU(`${rc}coreStatMachines`),
            more: tU.machineAllowance - (null !== (RU = null === TU || void 0 === TU ? void 0 : TU.machineAllowance) && void 0 !== RU ? RU : tU.machineAllowance)
          }), (0, bE.jsx)(dc, {
            value: String(tU.beltAllowance),
            label: PU(`${rc}coreStatBelts`),
            more: tU.beltAllowance - (null !== (gU = null === TU || void 0 === TU ? void 0 : TU.beltAllowance) && void 0 !== gU ? gU : tU.beltAllowance)
          }), null !== cU && (0, bE.jsx)(dc, {
            value: String(cU),
            label: PU(`${rc}coreStatStorage`),
            more: cU - (TU ? mt(pU - 1) : cU)
          })]
        }), tU.reward && (0, bE.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, bE.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: PU(`${rc}coreRewardItem`)
          }), (0, bE.jsx)(Xc, {
            item: tU.reward,
            itemNames: EU
          })]
        }), tU.newDeposits.length > 0 && (0, bE.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, bE.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: PU(tU.newDeposits.length > 1 ? `${rc}coreRewardDeposits` : `${rc}coreRewardDeposit`)
          }), vc(tU).map((UU => {
            let [RU, gU] = UU;
            return (0, bE.jsx)(Xc, {
              item: RU,
              itemNames: EU,
              children: gU > 1 && ` \xd7${gU}`
            }, RU)
          }))]
        }), tU.unlocks.length > 0 && (0, bE.jsx)(Hc, {
          items: tU.unlocks,
          itemNames: EU
        }), (0, bE.jsx)(sc, {
          tier: pU
        })]
      })
    }

    function sc(UU) {
      let {
        tier: RU
      } = UU;
      const {
        t: gU
      } = (0, Zp.B)(), tU = ep[RU];
      if (!tU) return null;
      const pU = Qp(RU, 0, 0).barrierMax !== Qp(RU - 1, 0, 0).barrierMax;
      return (0, bE.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, bE.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, bE.jsx)(Yp.c, {
            itemName: pU ? Kp.Chestplate : qp,
            amount: 0
          })
        }), gU(`${rc}gearPerkLine`, {
          perk: gU(`${rc}${tU}`)
        })]
      })
    }

    function yc(UU, RU) {
      return null === UU ? RU : UU.value
    }

    function kc(UU, RU, gU, tU) {
      let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === UU || gU - UU.atMs >= tU ? null : pU(UU.value, RU) ? UU.armed ? null : UU : UU.armed ? UU : {
        ...UU,
        armed: !0
      }
    }

    function Fc(UU, RU) {
      const gU = RU.filter((RU => {
        var gU;
        return !1 !== (null === (gU = UU.get(RU)) || void 0 === gU ? void 0 : gU.value)
      }));
      for (const [tU, pU] of UU) pU.value && !RU.includes(tU) && gU.push(tU);
      return gU
    }

    function ic(UU, RU, gU, pU) {
      const [EU, PU] = (0, tU.useState)((() => new Map)), TU = () => {
        PU((RU => function(UU, RU, gU, tU) {
          var pU;
          let EU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            PU = null;
          for (const [TU, qU] of UU) {
            const pU = kc(qU, RU(TU), gU, tU, EU);
            pU !== qU && (PU ??= new Map(UU), null === pU ? PU.delete(TU) : PU.set(TU, pU))
          }
          return null !== (pU = PU) && void 0 !== pU ? pU : UU
        }(RU, UU, Date.now(), gU, pU)))
      };
      (0, tU.useEffect)((() => {
        TU()
      }), [RU, gU]), (0, tU.useEffect)((() => {
        if (0 === EU.size) return;
        const UU = Math.min(...[...EU.values()].map((UU => UU.atMs))),
          RU = setTimeout(TU, Math.max(0, UU + gU - Date.now()) + 1);
        return () => {
          clearTimeout(RU)
        }
      }), [EU, RU, gU]);
      return [EU, (RU, gU) => {
        PU((tU => {
          const EU = new Map(tU);
          return EU.set(RU, function(UU, RU, gU) {
            return {
              value: UU,
              atMs: gU,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(UU, RU)
            }
          }(gU, UU(RU), Date.now(), pU)), EU
        }))
      }]
    }
    const Ac = "buildAFactory2Game:";

    function zc(UU) {
      let {
        message: RU,
        itemNames: gU
      } = UU;
      const pU = kP(),
        {
          t: EU
        } = (0, Zp.B)(),
        [PU, TU] = (0, tU.useState)(!1),
        [qU, KU] = function(UU) {
          let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : XP;
          const [gU, tU] = ic((RU => UU.includes(RU)), UU, RU, Object.is);
          return [Fc(gU, UU), tU]
        }(RU.baf2CoreBankPaused),
        cU = new Set(qU),
        GU = [...RU.baf2CoreBanked];
      for (const tU of cU) GU.some((UU => {
        let [RU] = UU;
        return RU === tU
      })) || GU.push([tU, 0]);
      return 0 === GU.length ? null : (0, bE.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, bE.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": PU,
          onClick: () => {
            TU(!PU)
          },
          children: [(0, bE.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: EU(`${Ac}coreBankedLater`)
          }), (0, bE.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: GU.map((UU => {
              let [RU, gU] = UU;
              const tU = cU.has(RU);
              return (0, bE.jsxs)("span", {
                className: wp()({
                  Paused: tU
                }),
                title: tU ? EU(`${Ac}coreBankPausedTag`) : void 0,
                children: [(0, bE.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, bE.jsx)(Yp.c, {
                    itemName: RU,
                    amount: 0
                  })
                }), gU, tU && (0, bE.jsx)(ap.c, {
                  name: "pause"
                })]
              }, RU)
            }))
          }), (0, bE.jsx)(ap.c, {
            name: PU ? "angle-up" : "angle-down"
          })]
        }), PU && (0, bE.jsxs)(bE.Fragment, {
          children: [(0, bE.jsx)("ul", {
            children: GU.map((UU => {
              let [RU, tU] = UU;
              const PU = cU.has(RU);
              return (0, bE.jsxs)("li", {
                children: [(0, bE.jsxs)(Xc, {
                  item: RU,
                  itemNames: gU,
                  children: [(0, bE.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: tU
                  }), PU && (0, bE.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: EU(`${Ac}coreBankPausedTag`)
                  })]
                }), (0, bE.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, bE.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === tU,
                    onClick: () => {
                      pU.send(`baf2corewithdraw ${tU} ${RU}`)
                    },
                    children: EU(`${Ac}coreTake`)
                  }), (0, bE.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      pU.send(`${xU} ${RU}`), KU(RU, !PU)
                    },
                    children: EU(PU ? `${Ac}coreBankResume` : `${Ac}coreBankStop`)
                  })]
                })]
              }, RU)
            }))
          }), (0, bE.jsx)("p", {
            className: "Baf2CoreHint",
            children: EU(`${Ac}coreBankNote`)
          })]
        })]
      })
    }
    const Mc = "buildAFactory2Game:";

    function Dc(UU) {
      const RU = Math.max(0, Math.floor(UU));
      return `${Math.floor(RU/60)}:${String(RU%60).padStart(2,"0")}`
    }

    function Lc(UU) {
      let {
        item: RU
      } = UU;
      return (0, bE.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, bE.jsx)(Yp.c, {
          itemName: RU,
          amount: 0
        })
      })
    }

    function Nc() {
      return (0, bE.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, bE.jsx)(ap.c, {
          name: "bolt"
        })
      })
    }

    function lc(UU) {
      let {
        charge: RU,
        hint: gU,
        itemNames: tU
      } = UU;
      const pU = kP(),
        {
          t: EU
        } = (0, Zp.B)(),
        [PU, TU, qU, KU, cU, GU, jU] = RU,
        [uU, CU] = function(UU) {
          var RU;
          let gU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : XP,
            tU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [pU, EU] = ic((() => UU), UU, gU, tU);
          return [yc(null !== (RU = pU.get("")) && void 0 !== RU ? RU : null, UU), UU => {
            EU("", UU)
          }]
        }(jU),
        hU = uU === jU ? GU : !uU,
        QU = KU >= cU,
        eU = PU.find((UU => {
          let [, RU, gU] = UU;
          return gU < .9 * RU
        }));
      let WU = `${Mc}coreChargeWaiting`,
        fU = {};
      return QU ? WU = `${Mc}coreChargeDone` : uU ? WU = `${Mc}coreChargeStopped` : hU && gU ? (WU = `${Mc}${gU[0]}`, fU = {
        item: EE(EU, gU[1])
      }) : hU && eU ? (WU = `${Mc}coreChargeShort`, fU = {
        item: EE(EU, eU[0])
      }) : hU && TU > 0 && !qU ? WU = `${Mc}coreChargePower` : hU && (WU = `${Mc}coreChargeRunning`), (0, bE.jsxs)("div", {
        className: wp()("Baf2CoreCharge", {
          Waiting: !hU && !QU,
          Done: QU
        }),
        children: [(0, bE.jsxs)("h4", {
          children: [EU(`${Mc}coreChargeTitle`), (0, bE.jsx)("span", {
            children: EU(`${Mc}coreChargeProgress`, {
              done: Dc(KU),
              need: Dc(cU)
            })
          })]
        }), (0, bE.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, bE.jsx)("div", {
            style: {
              width: 100 * Math.min(KU, cU) / cU + "%"
            }
          })
        }), (0, bE.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [PU.map((UU => {
            var RU;
            let [gU, pU, PU] = UU;
            const TU = PU >= .9 * pU;
            return (0, bE.jsxs)("li", {
              className: wp()({
                Done: TU,
                Short: hU && !TU
              }),
              children: [(0, bE.jsx)(Lc, {
                item: gU
              }), (0, bE.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, bE.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, bE.jsx)(Bp.e, {
                    text: null !== (RU = tU[gU]) && void 0 !== RU ? RU : gU
                  }), (0, bE.jsx)("span", {
                    children: EU(`${Mc}coreChargeItem`, {
                      now: String(PU),
                      need: String(pU)
                    })
                  })]
                }), (0, bE.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, bE.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*PU/pU)}%`
                    }
                  })
                })]
              })]
            }, gU)
          })), TU > 0 && (0, bE.jsxs)("li", {
            className: wp()("Baf2CoreChargePower", {
              Short: hU && !qU
            }),
            children: [(0, bE.jsx)(Nc, {}), (0, bE.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, bE.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, bE.jsx)("span", {
                  children: EU(`${Mc}coreChargePowerRow`, {
                    power: NU(TU)
                  })
                })
              })
            })]
          })]
        }), (0, bE.jsx)("p", {
          className: "Baf2CoreHint",
          children: EU(WU, fU)
        }), !QU && (hU || uU) && (0, bE.jsx)("button", {
          type: "button",
          className: wp()("Baf2CoreChargeToggle", {
            Stopped: uU
          }),
          onClick: () => {
            pU.send(IU), CU(!uU)
          },
          children: EU(uU ? `${Mc}coreChargeRestart` : `${Mc}coreChargeStop`)
        })]
      })
    }

    function Oc(UU) {
      let {
        charge: RU,
        reached: gU,
        itemNames: tU
      } = UU;
      const {
        t: pU
      } = (0, Zp.B)();
      return (0, bE.jsxs)("div", {
        className: wp()("Baf2CoreCharge", {
          Done: gU
        }),
        children: [(0, bE.jsxs)("h4", {
          children: [pU(`${Mc}coreChargeTitle`), (0, bE.jsx)("span", {
            children: pU(`${Mc}coreChargeSpecTime`, {
              time: Dc(RU.seconds)
            })
          })]
        }), (0, bE.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [RU.items.map((UU => {
            var RU;
            let {
              item: EU,
              amount: PU
            } = UU;
            return (0, bE.jsxs)("li", {
              className: wp()({
                Done: gU
              }),
              children: [(0, bE.jsx)(Lc, {
                item: EU
              }), (0, bE.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, bE.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, bE.jsx)(Bp.e, {
                    text: null !== (RU = tU[EU]) && void 0 !== RU ? RU : EU
                  }), (0, bE.jsx)("span", {
                    children: pU(`${Mc}coreChargeSpecItem`, {
                      need: String(PU)
                    })
                  })]
                })
              })]
            }, EU)
          })), RU.powerPerS > 0 && (0, bE.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, bE.jsx)(Nc, {}), (0, bE.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, bE.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, bE.jsx)("span", {
                  children: pU(`${Mc}coreChargePowerRow`, {
                    power: NU(RU.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const UG = "buildAFactory2Game:";

    function RG(UU) {
      let {
        def: RU,
        reached: gU,
        banked: tU,
        itemNames: pU
      } = UU;
      const {
        t: EU
      } = (0, Zp.B)();
      return (0, bE.jsx)("ul", {
        className: "Baf2CoreCost",
        children: RU.cost.map((UU => {
          let {
            item: RU,
            amount: PU
          } = UU;
          const TU = gU ? 0 : tU(RU);
          return (0, bE.jsx)("li", {
            children: (0, bE.jsx)(Xc, {
              item: RU,
              itemNames: pU,
              children: (0, bE.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: TU > 0 ? EU(`${UG}coreBankedFor`, {
                  amount: String(TU),
                  total: String(PU)
                }) : `\xd7${PU}`
              })
            })
          }, RU)
        }))
      })
    }

    function gG(UU, RU) {
      if (RU >= cU()) return UU(`${UG}coreMaxTier`);
      const gU = KU[RU + 1];
      return gU && !gU.startsWith("upgradeCore") ? UU(`${UG}coreGateQuest`, {
        quest: UU(`${UG}quest_${gU}`)
      }) : UU(`${UG}coreGateClosed`)
    }

    function tG() {
      const {
        t: UU
      } = (0, Zp.B)(), RU = kP(), gU = (0, tU.useRef)(null), pU = (0, tU.useRef)(Date.now());
      return DK(!0, gU), (0, bE.jsx)("div", {
        ref: gU,
        className: "Baf2CoreGrow",
        children: (0, bE.jsx)(JP.j, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - pU.current >= 600 && RU.send(fU)
          },
          children: UU(`${UG}coreGrow`)
        })
      })
    }

    function pG(UU) {
      let {
        message: RU,
        itemNames: gU,
        next: tU
      } = UU;
      const pU = kP(),
        {
          t: EU
        } = (0, Zp.B)(),
        PU = RU.baf2CoreTier,
        TU = RU.baf2CoreReady,
        qU = RU.baf2CoreNeeds.filter((UU => {
          let [, RU, gU, tU] = UU;
          return tU > 0 && RU < gU
        })),
        KU = RU.baf2CoreNeeds.every((UU => {
          let [, RU, gU] = UU;
          return RU >= gU
        })),
        cU = RU.baf2CoreKeep;
      return (0, bE.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, bE.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [TU && (0, bE.jsx)(tG, {}), (0, bE.jsx)("h3", {
            children: EU(`${UG}coreBring`)
          }), (0, bE.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: RU.baf2CoreNeeds.map((UU => {
              let [RU, tU, PU, TU] = UU;
              return (0, bE.jsxs)("li", {
                className: wp()({
                  Done: tU >= PU
                }),
                children: [(0, bE.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, bE.jsx)(Yp.c, {
                    itemName: RU,
                    amount: 0
                  })
                }), (0, bE.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, bE.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, bE.jsx)(Bp.e, {
                      text: gU[RU]
                    }), (0, bE.jsxs)("span", {
                      children: [tU, "/", PU]
                    })]
                  }), (0, bE.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, bE.jsx)("div", {
                      style: {
                        width: 100 * tU / PU + "%"
                      }
                    }), TU > 0 && (0, bE.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * TU / PU + "%"
                      }
                    })]
                  })]
                }), TU > 0 && tU < PU && (0, bE.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    pU.send(`${mU} ${RU}`)
                  },
                  children: EU(`${UG}coreDeposit`, {
                    amount: String(TU)
                  })
                })]
              }, RU)
            }))
          }), RU.baf2CoreCharge && (0, bE.jsx)(lc, {
            charge: RU.baf2CoreCharge,
            hint: RU.baf2CoreChargeHint,
            itemNames: gU
          }), !TU && qU.length > 1 && (0, bE.jsx)(JP.j, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              pU.send(fU)
            },
            children: EU(`${UG}coreHandOver`)
          }), !TU && void 0 !== cU && (0, bE.jsx)("p", {
            className: "Baf2CoreHint",
            children: EU(`${UG}coreKeepRest`, {
              item: EE(EU, cU)
            })
          }), !TU && !KU && 0 === qU.length && void 0 === cU && (0, bE.jsx)("p", {
            className: "Baf2CoreHint",
            children: EU(`${UG}coreNothingHeld`)
          }), (0, bE.jsx)(zc, {
            message: RU,
            itemNames: gU
          })]
        }), (0, bE.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, bE.jsx)("h3", {
            children: EU(`${UG}coreRewards`)
          }), (0, bE.jsx)(Sc, {
            def: tU,
            tier: PU + 1,
            itemNames: gU
          })]
        })]
      })
    }

    function EG(UU) {
      let {
        message: RU,
        itemNames: gU,
        shown: tU
      } = UU;
      const {
        t: pU
      } = (0, Zp.B)(), EU = RU.baf2CoreTier, PU = eU(tU), TU = tU <= EU, qU = new Map(RU.baf2CoreBanked), KU = !WU(EU, JU(RU)) && tU === EU;
      return (0, bE.jsxs)("div", {
        className: wp()("Baf2CoreBody", {
          Locked: !TU
        }),
        children: [(0, bE.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, bE.jsx)("h3", {
            children: pU(TU ? `${UG}coreItTook` : `${UG}coreItNeeds`)
          }), 0 === PU.cost.length && (0, bE.jsx)("p", {
            className: "Baf2CoreHint",
            children: pU(`${UG}coreTierStart`)
          }), PU.cost.length > 0 && (0, bE.jsx)(RG, {
            def: PU,
            reached: TU,
            banked: UU => {
              var RU;
              return function(UU, RU, gU, tU) {
                let pU = UU;
                for (let PU = RU + 2; PU <= gU; PU++) {
                  var EU;
                  const UU = eU(PU).cost.find((UU => UU.item === tU)),
                    RU = Math.min(pU, null !== (EU = null === UU || void 0 === UU ? void 0 : UU.amount) && void 0 !== EU ? EU : 0);
                  if (PU === gU) return RU;
                  pU -= RU
                }
                return 0
              }(null !== (RU = qU.get(UU)) && void 0 !== RU ? RU : 0, EU, tU, UU)
            },
            itemNames: gU
          }), PU.charge && (0, bE.jsx)(Oc, {
            charge: PU.charge,
            reached: TU,
            itemNames: gU
          }), KU && (0, bE.jsxs)(bE.Fragment, {
            children: [(0, bE.jsx)("p", {
              className: "Baf2CoreHint",
              children: gG(pU, EU)
            }), (0, bE.jsx)(zc, {
              message: RU,
              itemNames: gU
            })]
          })]
        }), (0, bE.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, bE.jsx)("h3", {
            children: pU(TU ? `${UG}coreGave` : `${UG}coreLockedRewards`)
          }), (0, bE.jsx)(Sc, {
            def: PU,
            tier: tU,
            itemNames: gU
          })]
        })]
      })
    }

    function PG(UU, RU) {
      const {
        key: gU,
        params: tU
      } = uU(RU - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return UU(`${UG}${gU}`, tU)
    }
    const TG = "buildAFactory2Game:",
      qG = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      KG = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function cG(UU) {
      let {
        view: RU,
        close: gU,
        askIslands: pU
      } = UU;
      const {
        t: EU
      } = (0, Zp.B)(), [PU, TU] = (0, tU.useState)(!1);
      (0, tU.useEffect)((() => {
        if (!PU) return;
        const UU = window.setTimeout((() => {
          TU(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(UU)
        }
      }), [PU]);
      const {
        message: qU,
        itemNames: KU
      } = RU, cU = qU.baf2CoreTier, GU = eU(cU), jU = WU(cU, JU(qU)), [hU, QU] = qU.baf2CoreMachines, [fU, xU] = qU.baf2CoreBelts, mU = qU.baf2CoreStorage, IU = qU.baf2CoreReady, [wU, nU] = (0, tU.useState)(null), bU = (null === wU || void 0 === wU ? void 0 : wU.at) === cU && wU.ready === IU ? wU.tier : jU ? cU + 1 : cU;
      let oU = "coreTierLocked";
      bU <= cU ? oU = "coreTierReached" : bU === cU + 1 && (oU = "coreTierNext");
      const ZU = EU(`${TG}${eU(bU).nameKey}`),
        aU = bU === cU + 1 ? jU : null,
        YU = uU(bU, {
          tier: oU,
          stage: qG[oU],
          atomic: KG[oU]
        }),
        BU = EU(`${TG}${YU.key}`, {
          ...YU.params,
          name: ZU
        }),
        VU = uU(cU, CU),
        rU = EU(`${TG}${VU.key}`, {
          ...VU.params,
          name: EU(`${TG}${GU.nameKey}`)
        });
      return (0, bE.jsx)(IP.d, {
        close: gU,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, bE.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, bE.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, bE.jsxs)("div", {
              children: [(0, bE.jsx)("h2", {
                id: "baf2CoreTitle",
                children: EU(`${TG}coreTitle`)
              }), void 0 !== qU.baf2CoreIslandName && (0, bE.jsx)("p", {
                className: "Baf2CoreIsland",
                children: qU.baf2CoreIslandName
              }), (0, bE.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, bE.jsx)("span", {
                  children: rU
                }), (0, bE.jsx)("span", {
                  className: wp()({
                    Full: hU >= QU
                  }),
                  children: EU(`${TG}coreMachineCount`, {
                    amount: String(hU),
                    total: String(QU)
                  })
                }), (0, bE.jsx)("span", {
                  className: wp()({
                    Full: fU >= xU
                  }),
                  children: EU(`${TG}coreBeltCount`, {
                    amount: String(fU),
                    total: String(xU)
                  })
                }), void 0 !== mU && (0, bE.jsx)("span", {
                  className: wp()({
                    Full: mU[0] >= mU[1]
                  }),
                  children: EU(`${TG}coreStorageCount`, {
                    amount: String(mU[0]),
                    total: String(mU[1])
                  })
                })]
              })]
            }), (0, bE.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [qU.baf2CoreIslands && (0, bE.jsx)(JP.e, {
                className: "Baf2CoreIslandsButton",
                disabled: PU,
                onClick: () => {
                  TU(!0), pU()
                },
                children: EU(`${TG}islandsOpenButton`)
              }), (0, bE.jsx)(JP.h, {
                onClick: gU
              })]
            })]
          }), (0, bE.jsx)(Vc, {
            tier: cU,
            shown: bU,
            Hj: UU => {
              nU({
                tier: UU,
                at: cU,
                ready: IU
              })
            }
          }), (0, bE.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [BU, bU > cU + 1 && (0, bE.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: PG(EU, bU)
            })]
          }), 6 === bU && bU > cU && (0, bE.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: EU(`${TG}coreStagesNote`)
          }), 11 === bU && bU > cU && (0, bE.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: EU(`${TG}coreAtomicNote`)
          }), aU && (0, bE.jsx)(pG, {
            message: qU,
            itemNames: KU,
            next: aU
          }), !aU && (0, bE.jsx)(EG, {
            message: qU,
            itemNames: KU,
            shown: bU
          })]
        })
      })
    }
    const GG = {
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
    const jG = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: KE,
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

    function uG(UU) {
      return UU.baf2DropCometOreOnly ? "dropCometOre" : UU.baf2DropCometIsotope ? "seed" === UU.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function CG(UU) {
      let {
        message: RU,
        quests: gU,
        close: pU,
        leave: EU
      } = UU;
      const PU = kP(),
        {
          t: TU
        } = (0, Zp.B)(),
        qU = (0, tc.h)(dp, gU.get()),
        KU = function(UU) {
          var RU;
          if (!VU(UU.tutorial)) return null;
          const gU = UU.rows.find((UU => UU.current)),
            tU = gU ? GG[gU.key] : void 0;
          return null !== (RU = null !== tU && void 0 !== tU ? tU : UU.side ? GG[UU.side.row.key] : void 0) && void 0 !== RU ? RU : null
        }(qU),
        cU = null === qU.tier || jE(qU.tier),
        GU = cU ? jG : jG.filter((UU => {
          let {
            item: RU
          } = UU;
          return RU !== KE
        })),
        [jU, uU] = (0, tU.useState)(null),
        CU = null !== jU && void 0 !== jU ? jU : !RU.baf2DropFoundSalvage && cU,
        hU = RU.baf2DropRuinDistance,
        QU = RU.baf2DropComet,
        eU = RU.baf2DropOldWorks,
        WU = RU.baf2DropGrove,
        fU = function(UU) {
          return 2 + Number(void 0 !== UU.baf2DropComet) + Number(!!UU.baf2DropOwedComet || void 0 !== UU.baf2DropOwedWaitMinutes) + Number(void 0 !== UU.baf2DropDigDistance) + Number(void 0 !== UU.baf2DropOldWorks) + Number(void 0 !== UU.baf2DropGrove)
        }(RU),
        xU = UU => {
          PU.send(function(UU) {
            return `baf2drop ${UU}`
          }(UU)), EU()
        };
      let mU = TU("buildAFactory2Game:dropRuinNone");
      if (null !== hU) {
        let UU = RU.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        RU.baf2DropRuinOldWorks && (UU = "dropRuinOldWorks");
        const gU = void 0 === RU.baf2DropRuinCluster ? TU("buildAFactory2Game:dropRuinOpen") : TU("buildAFactory2Game:dropRuinCluster", {
          count: String(RU.baf2DropRuinCluster)
        });
        mU = `${TU(`buildAFactory2Game:${UU}`,{distance:String(hU)})} ${gU}`
      }
      let IU = TU("buildAFactory2Game:dropBelowDescription");
      void 0 !== RU.baf2DropBelowLook && (IU = TU("buildAFactory2Game:dropBelowLook", {
        look: TU(RU.baf2DropBelowLook)
      }));
      const JU = "buildAFactory2Game:wildsRegion_survivorGrove" === RU.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        wU = IE(TU, 60 * function(UU) {
          const [RU, gU] = (0, tU.useState)((() => Date.now())), [pU, EU] = (0, tU.useState)(RU);
          return (0, tU.useEffect)((() => {
            const UU = Date.now();
            gU(UU), EU(UU)
          }), [UU]), (0, tU.useEffect)((() => {
            const UU = window.setInterval((() => {
              EU(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(UU)
            }
          }), []), Math.max(1, UU.baf2DropRenewMinutes - Math.floor((pU - RU) / 6e4))
        }(RU)),
        nU = function(UU, RU, gU) {
          return "ruin" === UU && !gU || "owed" === UU && !RU.baf2DropOwedComet ? null : UU
        }(KU, RU, null !== hU),
        bU = function(UU) {
          for (var RU = arguments.length, gU = new Array(RU > 1 ? RU - 1 : 0), tU = 1; tU < RU; tU++) gU[tU - 1] = arguments[tU];
          return wp()("Baf2DropTile", ...gU, {
            Wanted: nU === UU
          })
        };
      return (0, bE.jsx)(IP.d, {
        close: pU,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, bE.jsxs)("section", {
          className: wp()("Baf2Panel Baf2DropMap", {
            Many: fU >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, bE.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, bE.jsxs)("div", {
              children: [(0, bE.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: TU("buildAFactory2Game:dropMapTitle")
              }), (0, bE.jsx)("p", {
                children: TU("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, bE.jsx)(JP.h, {
              onClick: pU
            })]
          }), (0, bE.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== QU && (0, bE.jsxs)(JP.t, {
              className: bU("comet", "Baf2DropComet"),
              onClick: () => {
                xU("comet")
              },
              children: [(0, bE.jsx)("strong", {
                children: TU("buildAFactory2Game:dropComet")
              }), (0, bE.jsx)("span", {
                children: TU(`buildAFactory2Game:${uG(RU)}`, {
                  distance: String(QU)
                })
              })]
            }), RU.baf2DropOwedComet && (0, bE.jsxs)(JP.t, {
              className: bU("owed", "Baf2DropComet"),
              onClick: () => {
                xU("owed")
              },
              children: [(0, bE.jsx)("strong", {
                children: TU("buildAFactory2Game:dropOwedComet")
              }), (0, bE.jsx)("span", {
                children: RU.baf2DropOwedIsotope ? TU("buildAFactory2Game:dropOwedIsotopeDescription") : TU("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== RU.baf2DropOwedWaitMinutes && (0, bE.jsxs)(JP.t, {
              className: bU("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, bE.jsx)("strong", {
                children: TU("buildAFactory2Game:dropOwedComet")
              }), (0, bE.jsx)("span", {
                children: TU("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(RU.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, bE.jsxs)(JP.e, {
              className: bU("below"),
              onClick: () => {
                xU("below")
              },
              children: [(0, bE.jsx)("strong", {
                children: TU("buildAFactory2Game:dropBelow")
              }), (0, bE.jsx)("span", {
                children: IU
              })]
            }), void 0 !== RU.baf2DropDigDistance && (0, bE.jsxs)(JP.p, {
              className: bU("dig"),
              onClick: () => {
                xU("dig")
              },
              children: [(0, bE.jsx)("strong", {
                children: TU("buildAFactory2Game:dropDig")
              }), (0, bE.jsx)("span", {
                children: TU("buildAFactory2Game:dropDigDescription", {
                  distance: String(RU.baf2DropDigDistance),
                  y: mE(RU.baf2DropDigY)
                })
              })]
            }), void 0 !== WU && (0, bE.jsxs)(JP.p, {
              className: bU("grove", "Baf2DropGrove"),
              onClick: () => {
                xU("grove")
              },
              children: [(0, bE.jsx)("strong", {
                children: TU("buildAFactory2Game:dropGrove")
              }), (0, bE.jsx)("span", {
                children: TU(`buildAFactory2Game:${JU}`, {
                  distance: String(WU)
                })
              })]
            }), (0, bE.jsxs)(JP.j, {
              className: bU("ruin"),
              disabled: null === hU,
              onClick: () => {
                xU("ruin")
              },
              children: [(0, bE.jsx)("strong", {
                children: TU("buildAFactory2Game:dropRuin")
              }), (0, bE.jsx)("span", {
                children: mU
              })]
            }), void 0 !== eU && (0, bE.jsxs)(JP.E, {
              className: bU("works"),
              onClick: () => {
                xU("works")
              },
              children: [(0, bE.jsx)("strong", {
                children: TU("buildAFactory2Game:dropOldWorks")
              }), (0, bE.jsx)("span", {
                children: TU("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(eU)
                })
              })]
            })]
          }), (0, bE.jsx)("p", {
            className: "Baf2DropRenew",
            children: TU("buildAFactory2Game:dropRenew", {
              time: wU
            })
          }), (0, bE.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: CU,
            onToggle: UU => {
              UU.currentTarget.open !== CU && uU(UU.currentTarget.open)
            },
            children: [(0, bE.jsx)("summary", {
              children: TU("buildAFactory2Game:dropSalvageWhat")
            }), (0, bE.jsx)("p", {
              children: TU("buildAFactory2Game:dropSalvageIntro")
            }), (0, bE.jsx)("ul", {
              children: GU.map((UU => {
                let {
                  item: RU,
                  nameKey: gU,
                  useKey: tU,
                  params: pU
                } = UU;
                return (0, bE.jsxs)("li", {
                  children: [(0, bE.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, bE.jsx)(Yp.c, {
                      itemName: RU,
                      amount: 0
                    })
                  }), (0, bE.jsxs)("span", {
                    children: [(0, bE.jsx)("strong", {
                      children: TU(gU)
                    }), ": ", TU(tU, pU)]
                  })]
                }, RU)
              }))
            })]
          })]
        })
      })
    }
    const hG = "buildAFactory2Game:";

    function QG(UU, RU) {
      return UU.sendIslandEdit(`baf2coopleave ${RU.baf2IslandId}`)
    }

    function eG(UU) {
      let {
        card: RU,
        canRename: gU,
        done: pU,
        t: EU
      } = UU;
      const PU = kP(),
        [TU, qU] = (0, tU.useState)(RU.baf2IslandName),
        KU = IK(TU),
        cU = "" === KU || JK(KU),
        GU = () => {
          !cU && gU && (KU !== RU.baf2IslandName ? pU(PU.sendIslandEdit(`baf2islandrename ${RU.baf2IslandId} ${KU}`)) : pU(null))
        },
        jU = () => {
          pU(null)
        };
      return (0, bE.jsxs)("div", {
        className: "Baf2IslandForm",
        ...zK(jU),
        children: [(0, bE.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [EU(`${hG}islandsRenameLabel`), (0, bE.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: TU,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: MK,
            onChange: UU => {
              qU(UU.target.value)
            },
            ...AK(GU, jU)
          })]
        }), "" === KU && (0, bE.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: EU(`${hG}islandsRenameEmpty`)
        }), JK(KU) && (0, bE.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: EU(`${hG}islandsNameReserved`)
        }), (0, bE.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, bE.jsx)(JP.p, {
            disabled: cU || !gU,
            onClick: GU,
            children: EU(`${hG}islandsRenameSave`)
          }), (0, bE.jsx)(JP.e, {
            onClick: jU,
            children: EU(`${hG}islandsCancel`)
          })]
        })]
      })
    }

    function WG(UU) {
      let {
        card: RU,
        canDelete: gU,
        done: pU,
        t: EU
      } = UU;
      const PU = kP(),
        [TU, qU] = (0, tU.useState)(""),
        KU = function(UU, RU) {
          return IK(UU).toLowerCase() === IK(RU).toLowerCase()
        }(TU, RU.baf2IslandName),
        cU = () => {
          KU && gU && pU(PU.sendIslandEdit(`baf2islanddelete ${RU.baf2IslandId}`))
        },
        GU = () => {
          pU(null)
        },
        jU = XK("name"),
        [uU, CU = ""] = EU(`${hG}islandsDeleteConfirm`, {
          name: jU
        }).split(jU);
      return (0, bE.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...zK(GU),
        children: [(0, bE.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, bE.jsxs)("span", {
            children: [uU, (0, bE.jsx)("strong", {
              children: RU.baf2IslandName
            }), CU]
          }), (0, bE.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: TU,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: MK,
            onChange: UU => {
              qU(UU.target.value)
            },
            ...AK(cU, GU)
          })]
        }), yK(RU) && (0, bE.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: EU(`${hG}islandsDeleteLeftBack`)
        }), (0, bE.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, bE.jsx)(JP.E, {
            disabled: !KU || !gU,
            onClick: cU,
            children: EU(`${hG}islandsDeleteForGood`)
          }), (0, bE.jsx)(JP.e, {
            onClick: GU,
            children: EU(`${hG}islandsCancel`)
          })]
        })]
      })
    }

    function fG(UU) {
      let {
        members: RU,
        t: gU
      } = UU;
      const tU = RU.length;
      return (0, bE.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, bE.jsxs)("span", {
          children: [1 === tU ? gU(`${hG}islandsPlayersOne`) : gU(`${hG}islandsPlayers`, {
            count: String(tU)
          }), " "]
        }), RU.map(((UU, RU) => (0, bE.jsxs)("span", {
          className: wp()("Baf2IslandMember", {
            Here: UU.baf2MemberHere
          }),
          title: UU.baf2MemberHere ? gU(`${hG}islandsPlayerHere`) : void 0,
          children: [UU.baf2MemberName, RU < tU - 1 ? ", " : ""]
        }, UU.baf2MemberKey)))]
      })
    }

    function xG(UU) {
      let {
        card: RU,
        answered: gU,
        nowMs: pU,
        t: EU
      } = UU;
      const PU = kP(),
        [TU, qU] = (0, tU.useState)(new Map),
        KU = yK(RU);
      if (!KU) return null;
      return (0, bE.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, bE.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: EU(`${hG}islandsLeftTitle`)
        }), (0, bE.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: KU.left.map((UU => {
            const tU = UU.baf2LeftKey,
              cU = FK(TU.get(tU), gU, pU),
              GU = function(UU) {
                return 1 === UU ? [`${WK}islandsLeftItemsOne`] : [`${WK}islandsLeftItems`, {
                  count: String(UU)
                }]
              }(UU.baf2LeftItems);
            return (0, bE.jsx)("li", {
              className: wp()("Baf2IslandPerson", {
                Pending: cU
              }),
              children: (0, bE.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, bE.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: UU.baf2LeftName
                }), (0, bE.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: EU(GU[0], GU[1])
                }), KU.claim && (0, bE.jsx)(JP.p, {
                  className: "Baf2IslandPersonButton",
                  disabled: cU,
                  onClick: () => {
                    (UU => {
                      const gU = PU.sendIslandEdit(`baf2coopclaim ${RU.baf2IslandId} ${UU}`);
                      qU((RU => new Map(RU).set(UU, {
                        atMs: Date.now(),
                        answer: gU
                      })))
                    })(tU)
                  },
                  children: EU(`${hG}islandsClaim`)
                })]
              })
            }, tU)
          }))
        }), KU.goThere && (0, bE.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: EU(`${hG}islandsClaimGoThere`)
        })]
      })
    }

    function mG(UU) {
      let {
        card: RU,
        view: gU,
        blocked: pU,
        maxIslands: EU,
        answered: PU,
        nowMs: TU,
        done: qU,
        openSocial: KU,
        t: cU
      } = UU;
      const GU = kP(),
        [jU, uU] = (0, tU.useState)(new Map),
        [CU, hU] = (0, tU.useState)(new Map),
        [QU, eU] = (0, tU.useState)(null),
        WU = (0, tU.useRef)(null);
      NK(WU);
      const fU = RU.baf2IslandId,
        xU = RU.baf2IslandCoop,
        mU = null !== xU && void 0 !== xU && xU.baf2CoopMembers.some((UU => UU.baf2MemberKey === QU)) ? QU : null,
        IU = function(UU, RU) {
          const gU = UU.baf2IslandCoop;
          return gU && kK(gU) || null !== RU ? void 0 : UU.baf2IslandInvitable
        }(RU, pU),
        JU = function(UU, RU) {
          const gU = UU.baf2IslandCoop;
          return gU && kK(gU) ? {
            key: `${WK}islandsCoopFull`,
            params: {
              max: String(gU.baf2CoopMax)
            }
          } : void 0 !== UU.baf2IslandInvitable && null === RU || gU && !gU.baf2CoopManageHere ? null : "degraded" === RU || "stuck" === RU ? {
            key: `${WK}islandsInviteNotLoaded`
          } : null === RU || function(UU) {
            return "notHome" === UU || "wilds" === UU || "visiting" === UU
          }(RU) || oK(RU) ? {
            key: `${WK}islandsInviteGoThere`
          } : {
            key: `${WK}islandsInviteBusy`
          }
        }(RU, pU),
        wU = () => {
          var UU;
          eU(null), null === (UU = WU.current) || void 0 === UU || UU.focus()
        };
      return (0, bE.jsxs)("div", {
        ref: WU,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...zK(null === mU ? qU : wU),
        children: [xU && (0, bE.jsxs)(bE.Fragment, {
          children: [(0, bE.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: cU(`${hG}islandsPlayersTitle`, {
              count: String(xU.baf2CoopMembers.length),
              max: String(xU.baf2CoopMax)
            })
          }), (0, bE.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: xU.baf2CoopMembers.map(((UU, RU) => {
              const tU = UU.baf2MemberKey,
                pU = FK(jU.get(tU), PU, TU);
              return (0, bE.jsxs)("li", {
                className: wp()("Baf2IslandPerson", {
                  Pending: pU
                }),
                children: [(0, bE.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, bE.jsx)("span", {
                    className: wp()("Baf2IslandPersonName", {
                      Here: UU.baf2MemberHere
                    }),
                    children: UU.baf2MemberName
                  }), UU.baf2MemberHere && (0, bE.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: cU(`${hG}islandsPlayerHere`)
                  }), 0 === RU && (0, bE.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: cU(`${hG}islandsPlayerOwner`)
                  }), gU.remove && RU > 0 && !pU && mU !== tU && (0, bE.jsx)(JP.F, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var UU;
                      eU(tU), null === (UU = WU.current) || void 0 === UU || UU.focus()
                    },
                    children: cU(`${hG}islandsRemove`)
                  })]
                }), mU === tU && (0, bE.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, bE.jsx)("p", {
                    children: vK(cU, `${hG}islandsRemoveConfirm`, {
                      player: UU.baf2MemberName
                    })
                  }), (0, bE.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, bE.jsx)(JP.E, {
                      onClick: () => {
                        (UU => {
                          const RU = GU.sendIslandEdit(`baf2coopremove ${fU} ${UU.baf2MemberKey}`);
                          uU((gU => new Map(gU).set(UU.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: RU
                          }))), wU()
                        })(UU)
                      },
                      children: cU(`${hG}islandsRemoveYes`)
                    }), (0, bE.jsx)(JP.e, {
                      onClick: wU,
                      children: cU(`${hG}islandsCancel`)
                    })]
                  })]
                })]
              }, tU)
            }))
          })]
        }), (void 0 !== IU || null !== JU) && (0, bE.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: cU(`${hG}islandsInviteTitle`)
        }), !xU && (void 0 !== IU || null !== JU) && (0, bE.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: cU(`${hG}islandsInviteShareNote`)
        }), 0 === (null === IU || void 0 === IU ? void 0 : IU.length) && (0, bE.jsx)(IG, {
          openSocial: KU,
          t: cU
        }), void 0 !== IU && IU.length > 0 && (0, bE.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: IU.map((UU => {
            const RU = !0 === UU.baf2InvitableSent || FK(CU.get(UU.baf2InvitableId), PU, TU);
            return (0, bE.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, bE.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, bE.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: UU.baf2InvitableName
                }), UU.baf2InvitableFull && !RU && (0, bE.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: cU(`${hG}islandsInviteTheirFull`, {
                    max: String(EU)
                  })
                }), (RU || !UU.baf2InvitableFull) && (0, bE.jsx)(JP.p, {
                  className: "Baf2IslandPersonButton",
                  disabled: RU,
                  onClick: () => {
                    (UU => {
                      const RU = GU.sendIslandEdit(`baf2coopinvite ${fU} ${UU}`);
                      hU((gU => new Map(gU).set(UU, {
                        atMs: Date.now(),
                        answer: RU
                      })))
                    })(UU.baf2InvitableId)
                  },
                  children: cU(RU ? `${hG}islandsInvited` : `${hG}islandsInvite`)
                })]
              })
            }, UU.baf2InvitableId)
          }))
        }), JU && (0, bE.jsx)(Uc, {
          note: JU,
          t: cU
        }), (0, bE.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, bE.jsx)(JP.e, {
            onClick: qU,
            children: cU(`${hG}islandsDone`)
          })
        })]
      })
    }

    function IG(UU) {
      let {
        openSocial: RU,
        t: gU
      } = UU;
      return (0, bE.jsxs)(bE.Fragment, {
        children: [(0, bE.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: gU(RU ? `${hG}islandsInviteNobody` : `${hG}islandsInviteNobodyGuest`)
        }), RU && (0, bE.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, bE.jsx)(JP.e, {
            onClick: RU,
            children: gU("socialBar:social")
          })
        })]
      })
    }

    function JG(UU) {
      let {
        className: RU,
        text: gU,
        ConfirmButton: pU,
        confirmLabel: EU,
        canConfirm: PU,
        send: TU,
        done: qU,
        t: KU
      } = UU;
      const cU = (0, tU.useRef)(null);
      NK(cU);
      const GU = () => {
        qU(null)
      };
      return (0, bE.jsxs)("div", {
        ref: cU,
        tabIndex: -1,
        className: wp()("Baf2IslandForm", RU),
        ...zK(GU),
        children: [(0, bE.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: gU
        }), (0, bE.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, bE.jsx)(pU, {
            disabled: !PU,
            onClick: () => {
              PU && qU(TU())
            },
            children: EU
          }), (0, bE.jsx)(JP.e, {
            onClick: GU,
            children: KU(`${hG}islandsCancel`)
          })]
        })]
      })
    }

    function wG(UU) {
      return "hidden" !== UU
    }

    function nG(UU) {
      var RU, gU;
      let {
        card: pU,
        keepOwn: EU,
        blocked: PU,
        maxIslands: TU,
        serverNowMs: qU,
        nowMs: KU,
        actions: cU,
        full: GU,
        waits: jU,
        answered: uU,
        mode: CU,
        setMode: hU,
        pending: QU,
        onSent: eU,
        switchTo: WU,
        leave: fU,
        coopOn: xU,
        openSocial: mU,
        t: IU
      } = UU;
      const JU = kP(),
        wU = pU.baf2IslandActive,
        nU = wU ? null : function(UU, RU) {
          if (UU <= 0) return null;
          const gU = RU - UU;
          if (gU < eE) return [`${WK}islandsPlayedJustNow`];
          if (gU < fK) return [`${WK}islandsPlayedMinutes`, {
            minutes: String(Math.floor(gU / eE))
          }];
          if (gU < xK) return [`${WK}islandsPlayedHours`, {
            hours: String(Math.floor(gU / fK))
          }];
          const tU = Math.floor(gU / xK);
          return 1 === tU ? [`${WK}islandsPlayedDay`] : [`${WK}islandsPlayedDays`, {
            days: String(tU)
          }]
        }(pU.baf2IslandLastPlayedMs, qU),
        bU = void 0 === (oU = pU.baf2IslandItems) ? null : 0 === oU ? [`${WK}islandsItemsNone`] : 1 === oU ? [`${WK}islandsItemsOne`] : [`${WK}islandsItems`, {
          count: String(oU)
        }];
      var oU;
      const ZU = function(UU) {
          return UU ? 1 === UU ? [`${WK}islandsWaitingOne`] : [`${WK}islandsWaiting`, {
            count: String(UU)
          }] : null
        }(pU.baf2IslandWaiting),
        aU = pU.baf2IslandUnreadable,
        YU = pU.baf2IslandCoop,
        BU = sK(pU, cU, EU, GU, xU, PU),
        VU = (0, tU.useRef)(null);
      DK(null !== CU, VU);
      const rU = () => {
          var UU;
          hU(null), null === (UU = VU.current) || void 0 === UU || UU.focus()
        },
        XU = (UU, RU) => {
          rU(), null !== UU && eU(UU, RU)
        },
        vU = (UU, RU) => IU(`${hG}${UU}`, {
          time: IE(IU, RU)
        });
      return (0, bE.jsxs)("li", {
        ref: VU,
        tabIndex: -1,
        className: wp()("Baf2IslandCard", {
          Active: wU,
          Pending: QU,
          Shared: void 0 !== YU
        }),
        children: [(0, bE.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, bE.jsx)("strong", {
            className: "Baf2IslandName",
            children: pU.baf2IslandName
          }), wU && (0, bE.jsx)("span", {
            className: "Baf2IslandBadge",
            children: IU(`${hG}islandsOnThis`)
          }), YU && (0, bE.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: IU(`${hG}islandsShared`)
          })]
        }), "member" === (null === YU || void 0 === YU ? void 0 : YU.baf2CoopRole) && (0, bE.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: vK(IU, `${hG}islandsSharedBy`, {
            owner: YU.baf2CoopOwner
          })
        }), void 0 !== aU && (0, bE.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: IU("newer" === aU ? `${hG}islandsUnreadable` : `${hG}islandsDamaged`)
        }), "corrupt" === aU && GU && (0, bE.jsx)("p", {
          className: "Baf2IslandStats",
          children: IU(`${hG}islandsDamagedFull`)
        }), void 0 === aU && (0, bE.jsxs)(bE.Fragment, {
          children: [(0, bE.jsx)(OK, {
            tier: pU.baf2IslandTier,
            t: IU
          }), (0, bE.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, bE.jsx)("span", {
              children: 1 === pU.baf2IslandQuestsDone ? IU(`${hG}islandsQuestsDoneOne`) : IU(`${hG}islandsQuestsDone`, {
                count: String(pU.baf2IslandQuestsDone)
              })
            }), (0, bE.jsx)("span", {
              children: 1 === pU.baf2IslandMachines ? IU(`${hG}islandsMachinesOne`) : IU(`${hG}islandsMachines`, {
                count: String(pU.baf2IslandMachines)
              })
            }), bU && (0, bE.jsx)("span", {
              children: IU(bU[0], bU[1])
            }), ZU && (0, bE.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: IU(ZU[0], ZU[1])
            }), nU && (0, bE.jsx)("span", {
              children: IU(nU[0], nU[1])
            })]
          })]
        }), YU && void 0 === YU.baf2CoopState && "people" !== CU && (0, bE.jsx)(fG, {
          members: YU.baf2CoopMembers,
          t: IU
        }), null === CU && (0, bE.jsx)(xG, {
          card: pU,
          answered: uU,
          nowMs: KU,
          t: IU
        }), BU.note && (0, bE.jsx)(Uc, {
          note: BU.note,
          className: wp()({
            Unreachable: void 0 !== (null === YU || void 0 === YU ? void 0 : YU.baf2CoopState)
          }),
          t: IU
        }), "rename" === CU && (0, bE.jsx)(eG, {
          card: pU,
          canRename: "enabled" === BU.rename,
          done: XU,
          t: IU
        }), "delete" === CU && (0, bE.jsx)(WG, {
          card: pU,
          canDelete: "enabled" === BU.delete,
          done: UU => {
            XU(UU, YU ? "delete" : void 0)
          },
          t: IU
        }), "people" === CU && (0, bE.jsx)(mG, {
          card: pU,
          view: BU,
          blocked: PU,
          maxIslands: TU,
          answered: uU,
          nowMs: KU,
          done: rU,
          openSocial: mU,
          t: IU
        }), "leave" === CU && (0, bE.jsx)(JG, {
          className: "Leave",
          text: vK(IU, `${hG}islandsLeaveConfirm`, {
            island: pU.baf2IslandName,
            owner: null !== (RU = null === (gU = pU.baf2IslandCoop) || void 0 === gU ? void 0 : gU.baf2CoopOwner) && void 0 !== RU ? RU : ""
          }),
          ConfirmButton: JP.E,
          confirmLabel: IU(`${hG}islandsLeaveYes`),
          canConfirm: "enabled" === BU.leave,
          send: () => QG(JU, pU),
          done: UU => {
            XU(UU, "leave"), null !== UU && wU && fU()
          },
          t: IU
        }), "unshare" === CU && (0, bE.jsx)(JG, {
          className: "Unshare",
          text: vK(IU, `${hG}islandsStopSharingConfirm`, {
            island: pU.baf2IslandName
          }),
          ConfirmButton: JP.p,
          confirmLabel: IU(`${hG}islandsStopSharing`),
          canConfirm: "enabled" === BU.unshare,
          send: () => JU.sendIslandEdit(`baf2coopunshare ${pU.baf2IslandId}`),
          done: UU => {
            XU(UU), null !== UU && fU()
          },
          t: IU
        }), null === CU && !QU && (0, bE.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": pU.baf2IslandName,
          children: [wG(BU.switch) && (0, bE.jsx)(JP.p, {
            disabled: "enabled" !== BU.switch,
            onClick: WU,
            children: "tryAgain" === BU.switchLabel ? IU(`${hG}islandsTryAgain`) : jU.switch > 0 ? vU("islandsSwitchIn", jU.switch) : IU(`${hG}islandsSwitch`)
          }), wG(BU.rename) && (0, bE.jsx)(JP.e, {
            disabled: "enabled" !== BU.rename,
            onClick: () => {
              hU("rename")
            },
            children: IU(`${hG}islandsRename`)
          }), wG(BU.people) && (0, bE.jsx)(JP.e, {
            disabled: "enabled" !== BU.people,
            onClick: () => {
              hU("people")
            },
            children: IU("players" === BU.peopleLabel ? `${hG}islandsPlayersButton` : `${hG}islandsInviteButton`)
          }), wG(BU.unshare) && (0, bE.jsx)(JP.e, {
            disabled: "enabled" !== BU.unshare,
            onClick: () => {
              hU("unshare")
            },
            children: IU(`${hG}islandsStopSharing`)
          }), wG(BU.dismiss) && (0, bE.jsx)(JP.e, {
            disabled: "enabled" !== BU.dismiss,
            onClick: () => {
              eU(QG(JU, pU), "dismiss"), wU && fU()
            },
            children: IU(`${hG}islandsDismiss`)
          }), wG(BU.leave) && (0, bE.jsx)(JP.F, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== BU.leave,
            onClick: () => {
              hU("leave")
            },
            children: wU && jU.switch > 0 ? vU("islandsLeaveIn", jU.switch) : IU(`${hG}islandsLeave`)
          }), wG(BU.delete) && (0, bE.jsx)(JP.F, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== BU.delete,
            onClick: () => {
              hU("delete")
            },
            children: jU.change > 0 && BU.deleteWaits ? vU("islandsDeleteIn", jU.change) : IU(`${hG}islandsDelete`)
          })]
        })]
      })
    }
    const bG = "buildAFactory2Game:";

    function oG(UU) {
      let {
        invite: RU,
        actions: gU,
        full: pU,
        maxIslands: EU,
        waitSeconds: PU,
        focus: TU,
        focused: qU,
        join: KU,
        decline: cU,
        t: GU
      } = UU;
      const [jU, uU] = (0, tU.useState)(!1), CU = (0, tU.useRef)(null);
      DK(jU, CU), (0, tU.useEffect)((() => {
        var UU;
        TU && (uU(!0), null === (UU = CU.current) || void 0 === UU || UU.focus(), qU())
      }), [TU, qU]);
      const hU = function(UU, RU, gU, tU, pU) {
          return gU ? {
            join: !1,
            note: {
              key: `${WK}islandsJoinTooMany`,
              params: {
                max: String(tU)
              }
            }
          } : UU.baf2InvitePlayers >= pU ? {
            join: !1,
            note: {
              key: `${WK}islandsJoinFull`
            }
          } : {
            join: RU.switch,
            note: null
          }
        }(RU, gU, pU, EU, 10),
        QU = RU.baf2InviteIsland,
        eU = RU.baf2InvitePlayers,
        WU = () => {
          var UU;
          uU(!1), null === (UU = CU.current) || void 0 === UU || UU.focus()
        },
        fU = PU > 0 && null === hU.note ? GU(`${bG}islandsJoinIn`, {
          time: IE(GU, PU)
        }) : GU(`${bG}islandsJoin`);
      return (0, bE.jsxs)("li", {
        ref: CU,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...jU ? zK(WU) : {},
        children: [(0, bE.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, bE.jsx)("strong", {
            className: "Baf2IslandName",
            children: QU
          })
        }), (0, bE.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: vK(GU, `${bG}islandsInvitedBy`, {
            owner: RU.baf2InviteOwner
          })
        }), (0, bE.jsx)(OK, {
          tier: RU.baf2InviteTier,
          t: GU
        }), (0, bE.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, bE.jsx)("span", {
            children: 1 === eU ? GU(`${bG}islandsPlayersCountOne`) : GU(`${bG}islandsPlayersCount`, {
              count: String(eU)
            })
          })
        }), hU.note && (0, bE.jsx)(Uc, {
          note: hU.note,
          t: GU
        }), jU && (0, bE.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: vK(GU, `${bG}islandsJoinConfirm`, {
            island: QU
          })
        }), !jU && (0, bE.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": QU,
          children: [(0, bE.jsx)(JP.p, {
            disabled: !hU.join,
            onClick: () => {
              var UU;
              uU(!0), null === (UU = CU.current) || void 0 === UU || UU.focus()
            },
            children: fU
          }), (0, bE.jsx)(JP.e, {
            onClick: cU,
            children: GU(`${bG}islandsDecline`)
          })]
        }), jU && (0, bE.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, bE.jsx)(JP.p, {
            disabled: !hU.join,
            onClick: KU,
            children: GU(`${bG}islandsJoinYes`)
          }), (0, bE.jsx)(JP.e, {
            onClick: WU,
            children: GU(`${bG}islandsCancel`)
          })]
        })]
      })
    }

    function ZG(UU) {
      let {
        invites: RU,
        actions: gU,
        full: tU,
        maxIslands: pU,
        waitSeconds: EU,
        focus: PU,
        focused: TU,
        leave: qU,
        declined: KU,
        t: cU
      } = UU;
      const GU = kP();
      return (0, bE.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, bE.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: cU(`${bG}islandsInvitesTitle`)
        }), (0, bE.jsx)("ul", {
          className: "Baf2IslandCards",
          children: RU.map((UU => {
            const RU = UU.baf2InviteId;
            return (0, bE.jsx)(oG, {
              invite: UU,
              actions: gU,
              full: tU,
              maxIslands: pU,
              waitSeconds: EU,
              focus: PU === RU,
              focused: TU,
              join: () => {
                GU.send(`baf2coopaccept ${RU}`), qU()
              },
              decline: () => {
                GU.send(`baf2coopdecline ${RU}`), KU(RU)
              },
              t: cU
            }, RU)
          }))
        })]
      })
    }
    const aG = "buildAFactory2Game:";

    function YG(UU) {
      let {
        cards: RU,
        activeName: gU,
        canStart: pU,
        waitSeconds: EU,
        leave: PU,
        t: TU
      } = UU;
      const qU = kP(),
        [KU, cU] = (0, tU.useState)(!1),
        [GU, jU] = (0, tU.useState)(""),
        uU = (0, tU.useRef)(null);
      DK(KU, uU), (0, tU.useEffect)((() => {
        var UU;
        KU && (null === (UU = uU.current) || void 0 === UU || UU.focus())
      }), [KU]);
      const CU = wK(RU),
        hU = IK(GU),
        QU = JK(hU),
        eU = () => {
          pU && !QU && (qU.send("" === hU || hU === CU ? DU : `${DU} ${hU}`), PU())
        },
        WU = () => {
          var UU;
          cU(!1), null === (UU = uU.current) || void 0 === UU || UU.focus()
        };
      return (0, bE.jsxs)("li", {
        ref: uU,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...KU ? zK(WU) : {},
        children: [(0, bE.jsx)("strong", {
          className: "Baf2IslandName",
          children: TU(`${aG}islandsNewTitle`)
        }), !KU && (0, bE.jsx)("p", {
          className: "Baf2IslandStats",
          children: TU(`${aG}islandsNewNote`)
        }), KU && (0, bE.jsxs)(bE.Fragment, {
          children: [(0, bE.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: vK(TU, `${aG}islandsNewConfirm`, {
              name: gU
            })
          }), (0, bE.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [TU(`${aG}islandsNewNameLabel`), (0, bE.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: GU,
              placeholder: CU,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: MK,
              onChange: UU => {
                jU(UU.target.value)
              },
              ...AK(eU, WU)
            })]
          }), QU && (0, bE.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: TU(`${aG}islandsNameReserved`)
          })]
        }), (0, bE.jsxs)("div", {
          className: wp()("Baf2IslandButtons", {
            Stacked: KU
          }),
          children: [(0, bE.jsx)(JP.p, {
            disabled: !pU || KU && QU,
            onClick: () => {
              if (!KU) return jU(CU), void cU(!0);
              eU()
            },
            children: EU > 0 ? TU(`${aG}islandsNewIn`, {
              time: IE(TU, EU)
            }) : TU(KU ? `${aG}islandsNewConfirmButton` : `${aG}islandsNew`)
          }), KU && (0, bE.jsx)(JP.e, {
            onClick: WU,
            children: TU(`${aG}islandsCancel`)
          })]
        })]
      })
    }

    function BG(UU) {
      var RU, gU;
      let {
        message: pU,
        arrivedAtMs: EU,
        close: PU,
        leave: TU,
        openSocial: qU
      } = UU;
      const KU = kP(),
        {
          t: cU
        } = (0, Zp.B)(),
        GU = lK(1e3),
        [jU, uU] = (0, tU.useState)(null),
        [CU, hU] = (0, tU.useState)(new Map),
        [QU, eU] = (0, tU.useState)(new Set),
        WU = pU.baf2IslandCards,
        fU = function(UU, RU, gU, tU) {
          return (null !== UU && void 0 !== UU ? UU : []).filter((UU => RU + UU.baf2InviteLeftMs > gU && !tU.has(UU.baf2InviteId)))
        }(pU.baf2IslandsInvites, EU, GU, QU),
        xU = fU.map((UU => UU.baf2InviteId)).join(" "),
        mU = (0, tU.useRef)(null),
        IU = LK(mU);
      (0, tU.useEffect)((() => {
        var UU, RU;
        null !== (UU = mU.current) && void 0 !== UU && UU.contains(document.activeElement) || (null === (RU = mU.current) || void 0 === RU || RU.focus())
      }), [pU, xU]), (0, tU.useEffect)((() => {
        hU((UU => function(UU, RU, gU, tU) {
          const pU = new Map;
          for (const EU of RU) {
            const RU = UU.get(EU.baf2IslandId);
            RU && (void 0 !== RU.untilGone || tU < RU.answer) && BK(RU, EU, gU) && pU.set(EU.baf2IslandId, RU)
          }
          return pU.size === UU.size ? UU : pU
        }(UU, pU.baf2IslandCards, Date.now(), pU.baf2IslandsAnswered)))
      }), [pU]);
      const JU = mK(EU, pU.baf2IslandsWaitMs, GU),
        wU = pU.baf2IslandsBlocked,
        nU = ZK(wU, JU),
        bU = function(UU, RU) {
          const gU = ZK(UU, 0);
          return {
            switch: gU.switch ? RU : 0,
            change: gU.change ? RU : 0
          }
        }(wU, JU),
        oU = WU.length >= pU.baf2IslandsMax,
        ZU = WU.length > 0,
        aU = function(UU, RU, gU) {
          return UU + Math.max(0, gU - RU)
        }(pU.baf2IslandsNowMs, EU, GU),
        YU = null !== (RU = null === (gU = WU.find((UU => UU.baf2IslandActive))) || void 0 === gU ? void 0 : gU.baf2IslandName) && void 0 !== RU ? RU : "",
        BU = function(UU) {
          const RU = UU.filter(SK).length;
          return RU <= 1 && RU < UU.length
        }(WU),
        VU = !0 === pU.baf2IslandsCoop,
        rU = function(UU, RU) {
          const gU = UU.find((UU => UU.baf2IslandActive)),
            tU = null === gU || void 0 === gU ? void 0 : gU.baf2IslandCoop;
          return gU && "member" === (null === tU || void 0 === tU ? void 0 : tU.baf2CoopRole) ? {
            key: `${WK}islandsKeepOwnMember`,
            names: {
              owner: tU.baf2CoopOwner,
              island: gU.baf2IslandName
            }
          } : {
            key: RU ? `${WK}islandsKeepOwn` : `${WK}islandsKeepOwnSolo`
          }
        }(WU, VU),
        [XU, vU] = (0, tU.useState)(null);
      (0, tU.useEffect)((() => {
        void 0 !== pU.baf2IslandsFocusInvite && vU(pU.baf2IslandsFocusInvite)
      }), [pU]);
      const dU = (0, tU.useCallback)((() => {
          vU(null)
        }), []),
        HU = jU ? WU.find((UU => UU.baf2IslandId === jU.id)) : void 0,
        SU = jU && HU && "hidden" !== sK(HU, nU, BU, oU, VU, wU)[jU.mode] ? jU : null;
      return (0, bE.jsx)(IP.d, {
        close: PU,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, bE.jsxs)("section", {
          ref: mU,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: IU ? {
            marginTop: `${IU.marginTop}px`,
            maxHeight: `${IU.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, bE.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, bE.jsxs)("div", {
              children: [(0, bE.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: cU(`${aG}islandsTitle`)
              }), ZU && (0, bE.jsx)("p", {
                children: cU(`${aG}islandsSubtitle`, {
                  count: String(WU.length),
                  max: String(pU.baf2IslandsMax)
                })
              })]
            }), (0, bE.jsx)(JP.h, {
              ariaLabel: cU(`${aG}islandsClose`),
              onClick: PU
            })]
          }), (0, bE.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== wU && (0, bE.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: vK(cU, nK(wU, bK(WU)), {
                island: YU
              })
            }), ZU && fU.length > 0 && (0, bE.jsx)(ZG, {
              invites: fU,
              actions: nU,
              full: oU,
              maxIslands: pU.baf2IslandsMax,
              waitSeconds: bU.switch,
              focus: XU,
              focused: dU,
              leave: TU,
              declined: UU => {
                eU((RU => new Set(RU).add(UU)))
              },
              t: cU
            }), ZU && (0, bE.jsxs)(bE.Fragment, {
              children: [oU && (0, bE.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: cU(`${aG}islandsFull`, {
                  max: String(pU.baf2IslandsMax)
                })
              }), (0, bE.jsx)("p", {
                className: "Baf2IslandsNote",
                children: vK(cU, rU.key, rU.names)
              }), (0, bE.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [WU.map((UU => {
                  const RU = UU.baf2IslandId;
                  return (0, bE.jsx)(nG, {
                    card: UU,
                    keepOwn: BU,
                    coopOn: VU,
                    openSocial: qU,
                    blocked: wU,
                    maxIslands: pU.baf2IslandsMax,
                    serverNowMs: aU,
                    nowMs: GU,
                    actions: nU,
                    full: oU,
                    waits: bU,
                    answered: pU.baf2IslandsAnswered,
                    mode: (null === SU || void 0 === SU ? void 0 : SU.id) === RU ? SU.mode : null,
                    setMode: UU => {
                      uU(null === UU ? null : {
                        id: RU,
                        mode: UU
                      })
                    },
                    pending: BK(CU.get(RU), UU, GU),
                    onSent: (gU, tU) => {
                      hU((pU => {
                        const EU = {
                          atMs: Date.now(),
                          from: UU.baf2IslandName,
                          answer: gU
                        };
                        return new Map(pU).set(RU, tU ? {
                          ...EU,
                          untilGone: tU
                        } : EU)
                      }))
                    },
                    leave: TU,
                    switchTo: () => {
                      KU.send(`baf2islandswitch ${RU}`), TU()
                    },
                    t: cU
                  }, RU)
                })), !oU && (0, bE.jsx)(YG, {
                  cards: WU,
                  activeName: YU,
                  canStart: nU.change,
                  waitSeconds: bU.change,
                  leave: TU,
                  t: cU
                })]
              })]
            })]
          })]
        })
      })
    }
    var VG = gU(4693);
    const rG = {
        all: "buildAFactory2Game:terminalChip_all",
        recent: "buildAFactory2Game:terminalChip_recent",
        Up: "buildAFactory2Game:terminalChip_ores",
        bars: "buildAFactory2Game:terminalChip_bars",
        parts: "buildAFactory2Game:terminalChip_parts",
        nuclear: "buildAFactory2Game:terminalChip_nuclear",
        farm: "buildAFactory2Game:terminalChip_farm",
        other: "buildAFactory2Game:terminalChip_other"
      },
      XG = Object.keys(rG),
      vG = new Set([...Object.keys(DR), ...[...rR.Press.recipes, ...rR["Wire Mill"].recipes].map((UU => UU.output))]),
      dG = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      HG = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      SG = / Bar$|Alloy$/,
      sG = /Porkchop|Beef|Mutton|Venison|Steak/,
      yG = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;
    const kG = (0, tU.memo)((function(UU) {
      let {
        item: RU,
        name: gU,
        amount: tU,
        selected: pU,
        small: EU,
        onPick: PU
      } = UU;
      return (0, bE.jsxs)("button", {
        type: "button",
        className: wp()("Baf2TermTile", {
          On: pU,
          Small: EU
        }),
        "aria-label": `${gU}: ${tU}`,
        "aria-pressed": pU,
        onClick: () => {
          PU(RU)
        },
        children: [(0, bE.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, bE.jsx)(Yp.c, {
            itemName: RU,
            amount: 0
          })
        }), (0, bE.jsx)("span", {
          className: "Baf2TermCount",
          children: xE(tU, 1e4)
        }), !EU && (0, bE.jsx)("span", {
          className: "Baf2TermName",
          children: gU
        })]
      })
    }));

    function FG(UU) {
      let {
        store: RU,
        close: gU,
        send: pU
      } = UU;
      const {
        t: EU
      } = (0, Zp.B)(), {
        isTouchScreen: PU
      } = (0, mp.l)(["isTouchScreen"]);
      ! function(UU) {
        const [RU, gU] = (0, tU.useState)(UU.version);
        (0, tU.useEffect)((() => (gU(UU.version), UU.subscribe((() => {
          gU(UU.version)
        })))), [UU])
      }(RU);
      const [TU, qU] = (0, tU.useState)("all"), [KU, cU] = (0, tU.useState)(!1), [GU, jU] = (0, tU.useState)(""), [uU, CU] = (0, tU.useState)(""), [hU, QU] = (0, tU.useState)(null), [eU, WU] = (0, tU.useState)(!1), [fU, xU, mU] = function() {
        const UU = (0, tU.useRef)(null),
          [RU, gU] = (0, tU.useState)(!1),
          pU = () => {
            const RU = UU.current;
            gU(null !== RU && RU.scrollLeft + RU.clientWidth < RU.scrollWidth - 1)
          };
        return (0, tU.useEffect)(pU), (0, tU.useEffect)((() => {
          const RU = UU.current;
          if (!RU) return;
          const gU = new ResizeObserver(pU);
          return gU.observe(RU), () => {
            gU.disconnect()
          }
        }), []), [UU, RU, pU]
      }(), IU = (0, tU.useMemo)((() => new Map), [EU]), JU = UU => {
        let RU = IU.get(UU);
        return void 0 === RU && (RU = function(UU, RU) {
          const gU = /^(.+) \((.+)\)$/.exec(UU);
          return gU ? RU(gU[2], gU[1]) : UU
        }(EE(EU, UU), ((UU, RU) => EU("buildAFactory2Game:terminalTileKind", {
          kind: UU,
          base: RU
        }))), IU.set(UU, RU)), RU
      }, wU = RU.isReadOnly(), nU = eU && !wU, bU = RU.recent(), oU = RU.items(), ZU = uU.trim().toLowerCase(), aU = nU ? RU.heldItems(hU) : ("recent" === TU ? bU : oU).filter((UU => {
        const RU = JU(UU);
        return ("all" === TU || "recent" === TU || function(UU) {
          return uE(UU) ? "farm" : dG.test(UU) ? "nuclear" : SG.test(UU) ? "bars" : sG.test(UU) ? "farm" : HG.test(UU) ? "Up" : vG.has(UU) ? "parts" : yG.test(UU) ? "farm" : "other"
        }(UU) === TU) && ("" === ZU || RU.toLowerCase().includes(ZU)) && ("" === GU || RU.toUpperCase().startsWith(GU))
      })), YU = new Set(oU.map((UU => JU(UU).charAt(0).toUpperCase()))), BU = UU => nU ? RU.heldAmount(UU) : RU.amount(UU), VU = !nU && "recent" !== TU && bU.length > 0, rU = function(UU, RU) {
        return null !== UU && RU.includes(UU) ? UU : null
      }(hU, VU ? [...aU, ...bU] : aU), XU = null === rU ? 0 : RU.amount(rU), vU = null === rU ? 0 : BU(rU), dU = (0, tU.useCallback)((UU => {
        QU((RU => RU === UU ? null : UU))
      }), []), HU = UU => vU > 0 || nU && null === rU && "fill" === UU && aU.length > 0, SU = nU ? [
        ["one", EU("buildAFactory2Game:terminalStoreOne")],
        ["stack", EU("buildAFactory2Game:terminalStoreStack", {
          amount: String(99)
        })],
        ["fill", EU(null === rU ? "buildAFactory2Game:terminalStoreEverything" : "buildAFactory2Game:terminalStoreAll")]
      ] : [
        ["one", EU("buildAFactory2Game:terminalTakeOne")],
        ["stack", EU("buildAFactory2Game:terminalTakeStack", {
          amount: String(99)
        })],
        ["fill", EU("buildAFactory2Game:terminalFill")]
      ], sU = nU ? EU("buildAFactory2Game:terminalStoreEmpty") : "" !== GU ? EU("buildAFactory2Game:terminalEmptyLetter", {
        letter: GU
      }) : "" !== ZU ? EU("buildAFactory2Game:terminalEmptySearch", {
        query: uU
      }) : EU("buildAFactory2Game:terminalEmpty");
      return (0, bE.jsx)(IP.d, {
        close: gU,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2TermOverlay",
        children: (0, bE.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, bE.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, bE.jsxs)("div", {
              children: [(0, bE.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: EU(RU.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, bE.jsxs)("p", {
                className: "Baf2TermSubtitle",
                children: [(0, bE.jsx)("span", {
                  className: wp()({
                    Off: nU
                  }),
                  children: EU("buildAFactory2Game:terminalSubtitle", {
                    count: String(RU.siloCount())
                  })
                }), !wU && (0, bE.jsx)("span", {
                  className: wp()({
                    Off: !nU
                  }),
                  children: EU("buildAFactory2Game:terminalStoreSubtitle")
                })]
              })]
            }), !wU && (0, bE.jsx)(VG.d, {
              className: "Baf2TermModes",
              options: [{
                value: "take",
                label: EU("buildAFactory2Game:terminalModeTake")
              }, {
                value: "store",
                label: EU("buildAFactory2Game:terminalModeStore")
              }],
              value: nU ? "store" : "take",
              onChange: UU => {
                WU("store" === UU), QU(null)
              },
              ariaLabel: EU("buildAFactory2Game:terminalModes")
            }), (0, bE.jsx)(JP.h, {
              onClick: gU
            })]
          }), (0, bE.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, bE.jsxs)("div", {
              className: wp()("Baf2TermTools", {
                Hidden: nU
              }),
              children: [(0, bE.jsx)("div", {
                ref: fU,
                className: wp()("Baf2TermChips", {
                  MoreRight: xU
                }),
                onScroll: mU,
                children: KU ? (0, bE.jsxs)(bE.Fragment, {
                  children: [(0, bE.jsx)("button", {
                    type: "button",
                    "aria-label": EU("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      cU(!1), jU("")
                    },
                    children: "\u2190"
                  }), [...YU].sort().map((UU => (0, bE.jsx)("button", {
                    type: "button",
                    className: wp()({
                      On: GU === UU
                    }),
                    onClick: () => {
                      jU(GU === UU ? "" : UU)
                    },
                    children: UU
                  }, UU)))]
                }) : (0, bE.jsxs)(bE.Fragment, {
                  children: [(0, bE.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      cU(!0)
                    },
                    children: EU("buildAFactory2Game:terminalLetters")
                  }), XG.map((UU => (0, bE.jsx)("button", {
                    type: "button",
                    className: wp()({
                      On: TU === UU
                    }),
                    onClick: () => {
                      qU(UU)
                    },
                    children: EU(rG[UU])
                  }, UU)))]
                })
              }), !PU && (0, bE.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: uU,
                placeholder: EU("buildAFactory2Game:terminalSearch"),
                "aria-label": EU("buildAFactory2Game:terminalSearch"),
                onChange: UU => {
                  CU(UU.target.value)
                },
                onKeyDown: UU => {
                  UU.stopPropagation()
                }
              }), (0, bE.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": EU("buildAFactory2Game:terminalResort"),
                title: EU("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  RU.resort()
                },
                children: "\u21c5"
              })]
            }), VU && (0, bE.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, bE.jsx)("span", {
                children: EU(rG.recent)
              }), bU.map((UU => (0, bE.jsx)(kG, {
                item: UU,
                name: JU(UU),
                amount: RU.amount(UU),
                selected: rU === UU,
                small: !0,
                onPick: dU
              }, UU)))]
            }), (0, bE.jsx)("div", {
              className: "Baf2TermTiles",
              children: aU.length > 0 ? aU.map((UU => (0, bE.jsx)(kG, {
                item: UU,
                name: JU(UU),
                amount: BU(UU),
                selected: rU === UU,
                onPick: dU
              }, UU))) : (0, bE.jsx)("p", {
                className: "Baf2TermEmpty",
                children: sU
              })
            }), (0, bE.jsxs)("div", {
              className: wp()("Baf2TermActions", {
                Hidden: nU && 0 === aU.length
              }),
              children: [(0, bE.jsx)("span", {
                className: "Baf2TermPicked",
                children: wU ? (0, bE.jsxs)(bE.Fragment, {
                  children: [null !== rU && XU > 0 ? JU(rU) : EU("buildAFactory2Game:terminalVisiting"), (0, bE.jsx)("small", {
                    children: EU("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== rU ? (0, bE.jsxs)(bE.Fragment, {
                  children: [JU(rU), (0, bE.jsx)("small", {
                    children: EU("buildAFactory2Game:terminalStored", {
                      amount: XU.toLocaleString()
                    })
                  })]
                }) : EU(nU ? "buildAFactory2Game:terminalStorePick" : "buildAFactory2Game:terminalPick")
              }), !wU && SU.map((UU => {
                let [gU, tU] = UU;
                const EU = "fill" === gU ? JP.j : JP.e;
                return (0, bE.jsx)(EU, {
                  className: "Baf2TermTake",
                  disabled: !HU(gU),
                  onClick: () => {
                    (UU => {
                      HU(UU) && pU(null === rU ? RU.putAll() : nU ? RU.put(UU, rU) : RU.take(UU, rU))
                    })(gU)
                  },
                  children: tU
                }, gU)
              }))]
            })]
          })]
        })
      })
    }

    function iG(UU) {
      let {
        kind: RU,
        icon: gU,
        label: tU,
        number: pU,
        preview: EU,
        note: PU,
        tone: TU = null,
        share: qU,
        onExplain: KU
      } = UU;
      return (0, bE.jsxs)("button", {
        type: "button",
        className: wp()("NxLane", RU, {
          Warn: "warn" === TU,
          Danger: "danger" === TU
        }),
        onClick: KU,
        children: [(0, bE.jsxs)("span", {
          className: "NxLaneHead",
          children: [gU, (0, bE.jsx)("span", {
            className: "NxLaneLabel",
            children: tU
          })]
        }), (0, bE.jsxs)("span", {
          className: "NxLaneNum",
          children: [pU, EU && (0, bE.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", EU]
          })]
        }), (0, bE.jsx)("span", {
          className: "NxLaneNote",
          children: PU
        }), void 0 !== qU && (0, bE.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, qU)) + "%"
          }
        })]
      })
    }

    function AG(UU) {
      let {
        kind: RU,
        step: gU,
        short: tU,
        planned: pU
      } = UU;
      return (0, bE.jsx)("i", {
        className: wp()("NxPipe", RU, `Step${gU}`, {
          Short: tU,
          Planned: pU
        }),
        "aria-hidden": "true"
      })
    }

    function zG(UU) {
      let {
        max: RU,
        bands: gU,
        ticks: tU,
        now: pU,
        settle: EU,
        settleTone: PU,
        onExplain: TU
      } = UU;
      const qU = UU => Math.max(0, Math.min(RU, UU)) / RU * 100 + "%";
      let KU = 0;
      return (0, bE.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: TU,
        children: [(0, bE.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [gU.map((UU => {
            const RU = {
              bottom: qU(KU),
              height: `calc(${qU(UU.upTo)} - ${qU(KU)})`
            };
            return KU = UU.upTo, (0, bE.jsx)("i", {
              className: wp()("NxGaugeBand", UU.kind),
              style: RU
            }, UU.kind)
          })), null !== pU && (0, bE.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: qU(pU)
            }
          }), void 0 !== EU && null !== EU && (0, bE.jsx)("i", {
            className: wp()("NxGaugeSettle", {
              Bad: "bad" === PU
            }),
            style: {
              bottom: qU(EU)
            }
          })]
        }), (0, bE.jsx)("span", {
          className: "NxGaugeTicks",
          children: tU.map((UU => (0, bE.jsx)("small", {
            style: {
              bottom: qU(UU)
            },
            children: UU
          }, UU)))
        })]
      })
    }

    function MG(UU) {
      const [RU, gU] = (0, tU.useState)(null), [pU, EU] = (0, tU.useState)((() => {
        try {
          return null === window.localStorage.getItem(UU)
        } catch {
          return !1
        }
      })), PU = (0, tU.useRef)(null);
      (0, tU.useEffect)((() => () => {
        null !== PU.current && clearTimeout(PU.current)
      }), []);
      const TU = (0, tU.useCallback)((RU => {
          gU(RU), EU(!1);
          try {
            window.localStorage.setItem(UU, "1")
          } catch {}
          null !== PU.current && clearTimeout(PU.current), PU.current = setTimeout((() => {
            PU.current = null, gU(null)
          }), 5e3)
        }), [UU]),
        qU = (0, tU.useCallback)(((RU, gU) => {
          const tU = `${UU}:${RU}`;
          try {
            if (null !== window.localStorage.getItem(tU)) return;
            window.localStorage.setItem(tU, "1")
          } catch {
            return
          }
          TU(gU)
        }), [TU, UU]);
      return {
        explained: RU,
        hinting: pU,
        explain: TU,
        explainOnce: qU
      }
    }

    function DG(UU) {
      let {
        text: RU,
        tone: gU,
        explained: tU
      } = UU;
      return (0, bE.jsxs)("p", {
        className: wp()("NxStatus", null === tU ? gU : "Explain"),
        "aria-live": "polite",
        children: [null !== tU && (0, bE.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== tU && void 0 !== tU ? tU : RU]
      })
    }
    const LG = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function NG(UU, RU) {
      const gU = Number(UU[RU]);
      return 1 === gU || 2 === gU || 3 === gU ? gU : 0
    }

    function lG(UU) {
      return !!Jq("reactor", UU.baf2RxNeed) || void 0 !== UU.baf2RxLayout && UU.baf2RxNeed.some((UU => {
        let [RU, gU] = UU;
        return gU > 0 && LG.includes(RU)
      }))
    }
    const OG = "buildAFactory2Game:";

    function Uj(UU) {
      let {
        status: RU,
        store: gU,
        busy: tU
      } = UU;
      const {
        t: pU
      } = (0, Zp.B)();
      return function(UU) {
        return 0 !== (UU.baf2RxFlags & hR) && (!UU.baf2RxFormed || void 0 !== UU.baf2RxLayout)
      }(RU) ? (0, bE.jsx)(JP.j, {
        disabled: !lG(RU) || tU,
        onClick: () => {
          gU.tap("fill", (() => {
            gU.send("fill")
          }))
        },
        children: pU(void 0 !== RU.baf2RxLayout ? `${OG}rxFillLayout` : `${OG}rxFill`)
      }) : null
    }

    function Rj(UU) {
      let {
        status: RU,
        store: gU,
        readOnly: pU,
        bare: EU = !1
      } = UU;
      const {
        t: PU
      } = (0, Zp.B)(), TU = RU.baf2RxLayout, [qU, KU, cU] = RU.baf2RxDims, GU = (0, tU.useMemo)((() => {
        if (void 0 === TU) return 0;
        const UU = Uint8Array.from(TU, ((UU, RU) => NG(TU, RU)));
        return Rq([qU - 2, KU - 2, cU - 2], UU).max
      }), [TU, qU, KU, cU]);
      return void 0 === TU ? null : (0, bE.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!EU && (0, bE.jsx)("span", {
          className: "Baf2RxHint",
          children: PU(`${OG}rxLayoutLine`, {
            amount: Yq(GU)
          })
        }), !pU && (0, bE.jsx)(JP.e, {
          onClick: () => {
            gU.send("layout", 0)
          },
          children: PU(`${OG}rxLayoutHide`)
        })]
      })
    }
    const gj = "buildAFactory2Game:",
      tj = {
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

    function pj(UU) {
      let {
        id: RU,
        title: gU,
        body: tU,
        bodyParams: pU,
        yes: EU,
        cancel: PU,
        confirm: TU
      } = UU;
      const {
        t: qU
      } = (0, Zp.B)();
      return (0, bE.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": RU,
        children: [(0, bE.jsx)("h3", {
          id: RU,
          children: qU(gU)
        }), (0, bE.jsx)("p", {
          children: qU(tU, pU)
        }), (0, bE.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, bE.jsx)(JP.g, {
            onClick: PU,
            children: qU(`${gj}rxCancel`)
          }), (0, bE.jsx)(JP.E, {
            onClick: TU,
            children: qU(EU)
          })]
        })]
      })
    }

    function Ej(UU) {
      const [RU, gU] = (0, tU.useState)((() => UU.get()));
      return (0, tU.useEffect)((() => (gU(UU.get()), UU.subscribe((() => {
        gU(UU.get())
      })))), [UU]), RU
    }

    function Pj(UU) {
      let {
        kind: RU,
        cap: gU,
        busy: pU = !1,
        whyNot: EU = null,
        apart: PU
      } = UU;
      const {
        t: TU
      } = (0, Zp.B)(), [qU, KU] = (0, tU.useState)(!1), cU = null !== EU, GU = (0, tU.useRef)(null);
      if ((0, tU.useEffect)((() => {
          cU && KU(!1)
        }), [cU]), (0, tU.useLayoutEffect)((() => {
          var UU;
          const RU = null === (UU = GU.current) || void 0 === UU ? void 0 : UU.firstElementChild;
          cU ? null === RU || void 0 === RU || RU.setAttribute("aria-disabled", "true") : pU || null === RU || void 0 === RU || RU.removeAttribute("aria-disabled")
        })), !qU || cU) return (0, bE.jsx)("span", {
        ref: GU,
        className: "Baf2RxApartWrap",
        children: (0, bE.jsx)(JP.g, {
          disabled: pU,
          className: wp()({
            Baf2RxNotYet: cU
          }),
          onClick: () => {
            EU ? EU() : KU(!0)
          },
          children: TU(`${gj}rxApart`)
        })
      });
      const jU = "battery" === RU,
        uU = void 0 === gU ? `${gj}batApartConfirmBodyPlan` : `${gj}batApartConfirmBody`;
      return (0, bE.jsx)(pj, {
        id: `baf2ApartTitle_${RU}`,
        title: jU ? `${gj}batApartConfirmTitle` : `${gj}rxApartConfirmTitle`,
        body: jU ? uU : `${gj}rxApartConfirmBody`,
        bodyParams: void 0 === gU ? void 0 : {
          cap: gU
        },
        yes: `${gj}rxApart`,
        cancel: () => {
          KU(!1)
        },
        confirm: () => {
          KU(!1), PU()
        }
      })
    }

    function Tj(UU) {
      let {
        mood: RU,
        big: gU
      } = UU;
      const tU = tj[RU],
        pU = [];
      return tU.rows.forEach(((UU, RU) => {
        for (let gU = 0; gU < UU.length; gU++) "." !== UU[gU] && pU.push((0, bE.jsx)("rect", {
          x: gU + 1,
          y: RU + 1,
          width: 1,
          height: 1,
          fill: "w" === UU[gU] ? "#8fd3ff" : tU.colour
        }, `${gU},${RU}`))
      })), (0, bE.jsxs)("svg", {
        className: wp()("Baf2RxFace", {
          Big: gU,
          Alarm: "alarm" === RU
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, bE.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, bE.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), pU]
      })
    }

    function qj(UU) {
      return fE(UU, "+").replace("+", "")
    }

    function Kj(UU) {
      let {
        kind: RU,
        dims: gU,
        cap: tU,
        disabled: pU,
        compact: EU,
        resize: PU
      } = UU;
      const {
        t: TU
      } = (0, Zp.B)(), {
        min: qU,
        max: KU
      } = Sg(RU), cU = Math.min(tU, KU), GU = [`${gj}rxWide`, `${gj}rxTall`, `${gj}rxDeep`], jU = {
        w: String(gU[0]),
        h: String(gU[1]),
        d: String(gU[2]),
        blocks: String(aq(RU, gU))
      };
      return (0, bE.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, bE.jsx)("div", {
          className: "Baf2RxSteppers",
          children: gU.map(((UU, RU) => {
            const EU = tU => {
                const pU = [gU[0], gU[1], gU[2]];
                pU[RU] = UU + tU, PU(pU)
              },
              jU = UU >= cU;
            return (0, bE.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, bE.jsx)("button", {
                type: "button",
                "aria-label": TU(`${gj}rxSmaller`),
                disabled: pU || UU <= qU,
                onClick: () => {
                  EU(-1)
                },
                children: "\u2212"
              }), (0, bE.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [UU, (0, bE.jsx)("small", {
                  children: TU(GU[RU])
                })]
              }), (0, bE.jsx)("button", {
                type: "button",
                "aria-label": TU(`${gj}rxBigger`),
                disabled: pU || jU,
                onClick: () => {
                  EU(1)
                },
                children: jU && tU < KU ? "\ud83d\udd12" : "+"
              })]
            }, GU[RU])
          }))
        }), !EU && (0, bE.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === RU ? TU(`${gj}rxSizeLine`, {
            ...jU,
            water: String(Zq(gU))
          }) : TU(`${gj}batSizeLine`, jU)
        })]
      })
    }

    function cj(UU) {
      let {
        on: RU,
        label: gU,
        disabled: tU,
        locked: pU,
        pending: EU,
        toggle: PU
      } = UU;
      return (0, bE.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": RU,
        disabled: tU,
        "aria-disabled": pU || void 0,
        className: wp()("Baf2RxSwitch", {
          On: RU,
          Locked: pU,
          Pending: EU
        }),
        onClick: PU,
        children: [(0, bE.jsx)("span", {
          className: "Baf2RxKnob"
        }), gU]
      })
    }
    const Gj = "buildAFactory2Game:",
      jj = .95;

    function uj(UU, RU) {
      return 0 !== (UU.baf2RxFlags & RU)
    }

    function Cj(UU) {
      return "cryo" === UU ? lU.r : lU.s
    }

    function hj(UU) {
      var RU, gU, tU, pU, EU, PU, TU, qU, KU;
      return UU.baf2RxCryo ? {
        Nj: "cryo",
        usePerS: null !== (pU = UU.baf2RxCryoUse) && void 0 !== pU ? pU : 0,
        needPerS: null !== (EU = UU.baf2RxCryoNeed) && void 0 !== EU ? EU : 0,
        inPerS: null !== (PU = UU.baf2RxCryoIn) && void 0 !== PU ? PU : 0,
        stored: null !== (TU = UU.baf2RxCryoStored) && void 0 !== TU ? TU : 0,
        makersShort: null !== (qU = UU.baf2RxMixersShort) && void 0 !== qU ? qU : 0,
        waterBeside: null !== (KU = UU.baf2RxWaterUse) && void 0 !== KU ? KU : 0,
        pct: UU.baf2RxWater
      } : {
        Nj: "water",
        usePerS: null !== (RU = UU.baf2RxWaterUse) && void 0 !== RU ? RU : 0,
        needPerS: null !== (gU = UU.baf2RxWaterNeed) && void 0 !== gU ? gU : 0,
        inPerS: UU.baf2RxWaterIn,
        stored: UU.baf2RxWaterStored,
        makersShort: null !== (tU = UU.baf2RxCondensersShort) && void 0 !== tU ? tU : 0,
        waterBeside: 0,
        pct: UU.baf2RxWater
      }
    }

    function Qj(UU) {
      const RU = "running" === UU.baf2RxState || "idle" === UU.baf2RxState;
      return UU.baf2RxFormed && UU.baf2RxTarget !== UU.baf2RxThrottle && RU ? ej(UU, UU.baf2RxTarget) : null
    }

    function ej(UU, RU) {
      const [gU, tU, pU, , , , EU, , PU] = UU.baf2RxStats, TU = uj(UU, uR), qU = hj(UU), KU = qU.pct / 100, {
        gen: cU,
        out: GU,
        load: jU
      } = function(UU, RU, gU, tU) {
        const pU = gU ? MT : 1,
          EU = Math.min(UU.fuelHeat * pU * Math.max(0, Math.min(1, RU)), UU.size * pU);
        return {
          gen: EU,
          out: EU,
          load: jq(EU, UU.cooling, tU)
        }
      }({
        fuelHeat: gU,
        cooling: tU,
        size: pU
      }, RU / 100, TU, KU), uU = Cq(EU || Uq(...UU.baf2RxDims)), CU = UU.baf2RxHeat, hU = Math.abs(jU - CU), QU = function(UU, RU, gU, tU) {
        let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : lU.s;
        const EU = gU ? MT : 1,
          PU = Math.min(UU.fuelHeat * EU * RU / 100, UU.size * EU),
          TU = PU,
          qU = UU.fuelHeat * EU,
          KU = UU.cooling * Gq(tU.pct / 100),
          cU = qU > 0 && KU < UU.size * EU ? Math.floor(100 * KU / qU) : 100,
          GU = PU * pU - tU.inPerS;
        return {
          out: TU,
          hotAbove: cU >= 100 ? null : Math.max(0, cU),
          waterSecs: tU.pct >= 100 && GU > 1e-6 ? Math.max(0, tU.stored) / GU : null
        }
      }({
        fuelHeat: gU,
        cooling: tU,
        size: pU
      }, RU, TU, {
        pct: qU.pct,
        inPerS: qU.inPerS,
        stored: qU.stored
      }, Cj(qU.Nj));
      return {
        pct: RU,
        out: GU,
        coolPerS: cU * Cj(qU.Nj),
        pelletsPerMin: PU > 0 ? GU / PU * 60 : 0,
        settle: jU,
        settleS: hU > 2 ? uU * Math.log(hU / 2) : 0,
        overheatS: jU > 100 && CU < 100 ? uU * Math.log((jU - CU) / (jU - 100)) : null,
        hotAbove: QU.hotAbove,
        coolantSecs: QU.waterSecs
      }
    }

    function Wj(UU) {
      return UU.baf2RxThrottle <= 0 && "running" !== UU.baf2RxState ? 0 : ej(UU, UU.baf2RxTarget).pelletsPerMin / 60
    }

    function fj(UU, RU) {
      if (UU <= 0 || RU <= 0) return 0;
      const gU = UU / RU;
      return gU < .25 ? 1 : gU < .5 ? 2 : gU < .8 ? 3 : 4
    }

    function xj(UU, RU) {
      const gU = {};
      for (const [tU, pU] of Object.entries(RU.params)) gU[tU] = "time" === tU ? IE(UU, pU) : "amount" === tU ? Yq(pU) : String(Math.round(pU));
      return UU(RU.key, gU)
    }

    function mj(UU, RU) {
      return {
        key: `${Gj}${UU}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: RU
      }
    }

    function Ij(UU) {
      var RU;
      const gU = uj(UU, uR),
        tU = "running" === UU.baf2RxState,
        pU = Wq(UU),
        EU = UU.baf2RxHeat;
      var PU;
      if (tU && EU > AT) return {
        key: null !== (PU = pU.fix) && void 0 !== PU ? PU : `${Gj}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const TU = tU ? ej(UU, UU.baf2RxTarget).coolantSecs : null,
        qU = "cryo" === hj(UU).Nj;
      if (null !== TU && TU >= 1 && TU <= 30) return mj(qU ? "rxWarnCryo" : "rxWarnWater", "bad");
      const KU = lT(Uq(...UU.baf2RxDims)).waste,
        cU = tU ? wq(UU, KU, Wj(UU)).fullInS : null;
      if (null !== cU && cU <= 120 && UU.baf2RxWaste >= .5 * KU) return mj("rxWarnWaste", "warn");
      if (null !== TU && TU >= 1) return mj(qU ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: TU
      });
      const GU = "noWater" === UU.baf2RxState && EU > AT;
      if (UU.baf2RxDamage >= 1 && !GU) return mj("rxDamagedHeals", "warn", {
        pct: UU.baf2RxDamage
      });
      if (UU.baf2RxCryoCut) return mj("rxFix_cryoCut", "warn");
      const jU = hj(UU);
      if ("noWater" === UU.baf2RxState && "cryo" === jU.Nj) return mj("noWater" === UU.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const uU = pU.fix === `${Gj}rxFix_scramCool` || "idle" === UU.baf2RxState && UU.baf2RxTarget <= 0;
      if (uU && UU.baf2RxFuel <= 0) return mj("rxFix_noFuel", "warn");
      if (uU && UU.baf2RxWaterIn <= 0 && (null !== (RU = UU.baf2RxCryoIn) && void 0 !== RU ? RU : 0) <= 0) return mj("rxFix_noWater", "warn");
      const CU = pU.fix === `${Gj}rxFix_scramCool` ? xq(UU) : null;
      if (null !== CU) return {
        key: CU.key,
        params: {
          amount: CU.amount
        },
        tone: "info"
      };
      if ("running" !== UU.baf2RxState && "idle" !== UU.baf2RxState && null !== pU.fix) return {
        key: pU.fix,
        params: {},
        tone: "scram" === UU.baf2RxState ? "info" : GU ? "bad" : "warn"
      };
      var hU;
      if ("idle" === UU.baf2RxState && UU.baf2RxTarget <= 0) return {
        key: null !== (hU = pU.fix) && void 0 !== hU ? hU : `${Gj}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const QU = UU.baf2RxCryoStarved;
      if ("cryo" === jU.Nj && QU && jU.needPerS > 0 && jU.usePerS < jj * jU.needPerS) return mj("noWater" === QU ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const eU = "cryo" === jU.Nj,
        WU = jU.needPerS > 0 && jU.usePerS < jj * jU.needPerS;
      if (eU ? WU || jU.makersShort > 0 && jU.pct < 100 : jU.pct < 100) {
        const RU = eU && WU ? Math.floor(100 * jU.usePerS / jU.needPerS) : Math.min(100, jU.pct);
        if (jU.makersShort > 0) {
          return mj(`${eU?"rxCryoShortLine":"rxWaterShortLine"}${1===jU.makersShort?"One":""}${!eU&&UU.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: RU,
            count: jU.makersShort
          })
        }
        return mj(eU ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: RU
        })
      }
      const fU = function(UU) {
        const [RU, gU, tU] = UU.baf2RxStats, pU = hj(UU), EU = uq({
          fuelHeat: RU,
          cooling: gU,
          size: tU
        }, "cryo" === pU.Nj ? lU.i : 1, !0);
        return Math.max(0, EU * Cj(pU.Nj) - pU.inPerS)
      }(UU);
      if (gU && fU > 0) return mj("cryo" === jU.Nj ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(fU)
      });
      if (EU >= Kq) return mj("rxHotLine", "warn");
      const xU = ej(UU, UU.baf2RxTarget);
      var mU;
      if (null !== xU.overheatS) return mj("rxWillOverheat", "bad", {
        pct: UU.baf2RxTarget,
        time: xU.overheatS,
        safe: null !== (mU = xU.hotAbove) && void 0 !== mU ? mU : 100
      });
      if (Math.abs(xU.settle - EU) >= 3) return mj("rxSettling", "info", {
        pct: UU.baf2RxTarget,
        heat: Math.round(xU.settle),
        time: xU.settleS
      });
      const IU = xq(UU);
      if (null !== IU) return {
        key: IU.key,
        params: {
          amount: IU.amount
        },
        tone: "info"
      };
      const JU = function(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== RU && ("running" !== RU || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === UU.rods ? `${hq}rxLimitNoRods` : `${hq}rxLimit_${qq(UU)}`
      }({
        rods: UU.baf2RxStats[3],
        ...fq(UU)
      }, UU.baf2RxState, UU.baf2RxOut >= jj * UU.baf2RxMaxNow, !1);
      if (JU === `${Gj}rxLimit_size`) {
        const [RU, , gU, tU] = UU.baf2RxStats, pU = tU > 0 && RU > 0 ? Math.ceil(gU / (RU / tU) - 1e-9) : tU, EU = UU.baf2RxDims.every((UU => UU >= Sg("reactor").max));
        if (pU < tU) return mj(EU ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: pU,
          have: tU
        });
        if (EU) return mj("rxLimit_sizeMax", "info")
      }
      return null !== JU ? {
        key: JU,
        params: {},
        tone: "info"
      } : mj("rxSteady", "ok", {
        pct: UU.baf2RxTarget
      })
    }

    function Jj(UU) {
      var RU;
      if (UU.melted) return mj("rxMeltedBody", "bad");
      if (-1 === UU.bad) return mj("rxFix_noRoom", "warn");
      if (UU.bad > 0) return mj(1 === UU.bad ? "rxBadOne" : "rxBad", "warn", {
        count: UU.bad
      });
      if (UU.left > 0) {
        const RU = 1 === UU.left ? "One" : "";
        return mj(UU.canFill ? `rxPlanLeft${RU}` : `rxPlanLeftNoFill${RU}`, "info", {
          count: UU.left
        })
      }
      if (0 === UU.rods) return mj("rxLimitNoRods", "warn");
      const gU = null !== (RU = UU.idle) && void 0 !== RU ? RU : 0;
      return gU > 0 ? mj(1 === gU ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: gU
      }) : mj("rxPlanReady", "ok")
    }

    function wj(UU) {
      return Math.floor(Math.max(0, UU[1] - 1) / 2)
    }

    function nj(UU) {
      if (UU >= tq && UU < pq) {
        const RU = UU - tq;
        return {
          key: 0 === RU ? `${Gj}rxWhy_rodAlone` : 1 === RU ? `${Gj}rxWhy_rodOne` : `${Gj}rxWhy_rod`,
          params: {
            count: String(RU),
            heat: String(dT * (1 + HT * RU))
          }
        }
      }
      return UU === pq ? {
        key: `${Gj}rxWhy_channel`,
        params: {
          amount: String(sT)
        }
      } : UU === Eq ? {
        key: `${Gj}rxWhy_deadChannel`,
        params: {}
      } : UU === Pq ? {
        key: `${Gj}rxWhy_graphite`,
        params: {}
      } : {
        key: `${Gj}rxWhy_core`,
        params: {}
      }
    }
    const bj = "buildAFactory2Game:";

    function oj(UU, RU) {
      return 0 !== (UU.baf2RxFlags & RU)
    }

    function Zj(UU) {
      let {
        status: RU,
        pending: gU,
        store: tU,
        explain: pU
      } = UU;
      const {
        t: EU
      } = (0, Zp.B)(), PU = oj(RU, jR), TU = RU.baf2RxTarget, qU = RU.baf2RxThrottle, KU = function(UU) {
        return {
          press: () => {
            UU.throttlePress()
          },
          drag: RU => {
            UU.throttleDrag(RU)
          },
          release: () => {
            UU.throttleRelease()
          }
        }
      }(tU), cU = null === (GU = ej(RU, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, GU - 10),
        red: GU
      };
      var GU;
      return (0, bE.jsxs)("div", {
        className: wp()("Baf2RxThrottle", {
          Off: PU
        }),
        onClick: () => {
          PU && pU(`${bj}rxWhy_startFirst`)
        },
        children: [(0, bE.jsx)("span", {
          className: "HideNarrow",
          children: EU(`${bj}rxThrottle`)
        }), (0, bE.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, bE.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: TU,
            disabled: PU,
            style: PU ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": EU(`${bj}rxThrottle`),
            onPointerDown: () => {
              KU.press();
              const UU = () => {
                window.removeEventListener("pointerup", UU), window.removeEventListener("pointercancel", UU), KU.release()
              };
              window.addEventListener("pointerup", UU), window.addEventListener("pointercancel", UU)
            },
            onKeyUp: KU.release,
            onChange: UU => {
              KU.drag(Number(UU.target.value))
            }
          }), (0, bE.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${cU.amber}%, #ffb020 ${cU.amber}% ${cU.red}%, #ff3b30 ${cU.red}%)`
            },
            "aria-hidden": "true"
          }), (0, bE.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${qU}% + ${8*(1-qU/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, bE.jsxs)("b", {
          children: [`${TU}%`, (0, bE.jsx)("i", {
            className: wp()("Baf2RxPendingDot", {
              On: gU
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function aj(UU) {
      let {
        status: RU
      } = UU;
      const {
        t: gU
      } = (0, Zp.B)(), tU = ej(RU, RU.baf2RxTarget), pU = hj(RU).Nj, EU = gU("cryo" === pU ? `${bj}rxRateCryo` : `${bj}rxRateWater`, {
        rate: qj(tU.coolPerS)
      }), PU = gU(`${bj}rxChain`, {
        pct: String(RU.baf2RxTarget),
        out: Yq(tU.out),
        heat: String(Math.round(tU.settle)),
        coolant: EU
      }), TU = null !== tU.coolantSecs ? tU.coolantSecs >= 1 ? gU("cryo" === pU ? `${bj}rxThrottleCryoOut` : `${bj}rxThrottleWaterOut`, {
        time: IE(gU, tU.coolantSecs)
      }) : gU("cryo" === pU ? `${bj}rxThrottleCryoDry` : `${bj}rxThrottleWaterDry`) : null;
      return (0, bE.jsxs)("p", {
        className: "Baf2RxChain",
        children: [PU, null !== TU ? (0, bE.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", TU]
        }) : (0, bE.jsxs)("span", {
          children: [" \xb7 ", gU(`${bj}rxChainPellets`, {
            amount: Bq(tU.pelletsPerMin)
          })]
        })]
      })
    }

    function Yj(UU) {
      let {
        view: RU,
        store: gU,
        explain: pU,
        explainOnce: EU
      } = UU;
      const {
        t: PU
      } = (0, Zp.B)(), {
        status: TU
      } = RU, [qU, KU] = (0, tU.useState)(!1), cU = oj(TU, jR), jU = oj(TU, uR), uU = !oj(TU, QR), CU = TU.baf2RxHeat > 100;
      return (0, bE.jsxs)(bE.Fragment, {
        children: [(0, bE.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, bE.jsx)(Zj, {
            status: TU,
            pending: RU.throttlePending,
            store: gU,
            explain: pU
          }), (0, bE.jsx)(cj, {
            on: jU,
            label: jU ? PU(`${bj}rxOdLeft`, {
              time: IE(PU, TU.baf2RxOdLeft)
            }) : PU(`${bj}rxOverdrive`),
            locked: uU,
            pending: 0 !== (RU.pendingFlags & uR),
            toggle: () => {
              uU ? pU(`${bj}rxOverdriveTier`, {
                amount: String(GU(13))
              }) : jU ? gU.setFlag(uR, !1) : RU.odConfirmed ? gU.setFlag(uR, !0) : KU(!0)
            }
          }), cU || RU.startGuard ? (0, bE.jsx)(JP.p, {
            disabled: RU.busy.has("start") || RU.startGuard,
            onClick: () => {
              gU.tap("start", (() => {
                gU.setFlag(jR, !1)
              }))
            },
            children: PU(RU.startGuard ? `${bj}rxStarting` : `${bj}rxStart`)
          }) : (0, bE.jsx)("span", {
            className: wp()("Baf2RxScram", {
              Pulse: CU
            }),
            children: (0, bE.jsx)(JP.E, {
              onClick: () => {
                gU.shutDown()
              },
              children: PU(`${bj}rxScram`)
            })
          })]
        }), (0, bE.jsx)(aj, {
          status: TU
        }), qU && (0, bE.jsx)(pj, {
          id: "baf2RxOdTitle",
          title: `${bj}rxOdConfirmTitle`,
          body: `${bj}rxOdConfirmBody`,
          yes: `${bj}rxOdConfirm`,
          cancel: () => {
            KU(!1)
          },
          confirm: () => {
            KU(!1), gU.tap("odConfirm", (() => {
              gU.confirmOverdrive(), gU.setFlag(uR, !0)
            })), EU(`${bj}rxWhy_overdrive`)
          }
        })]
      })
    }

    function Bj(UU) {
      let {
        view: RU,
        store: gU,
        keepSize: tU
      } = UU;
      const {
        t: pU
      } = (0, Zp.B)(), {
        status: EU
      } = RU;
      return (0, bE.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, bE.jsx)(Kj, {
          kind: "reactor",
          dims: RU.dims,
          cap: EU.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: UU => {
            gU.resize(UU)
          }
        }), tU ? (0, bE.jsx)(JP.g, {
          onClick: tU,
          children: pU(`${bj}rxKeepSize`)
        }) : (0, bE.jsxs)(bE.Fragment, {
          children: [(0, bE.jsx)(cj, {
            on: RU.guide,
            label: pU(`${bj}rxGuide`),
            toggle: () => {
              gU.toggleGuide()
            }
          }), oj(EU, WR) && (0, bE.jsx)(cj, {
            on: RU.starter,
            label: pU(`${bj}rxStarter`),
            toggle: () => {
              gU.toggleStarter()
            }
          }), (0, bE.jsx)(Uj, {
            status: EU,
            store: gU,
            busy: RU.busy.has("fill")
          })]
        })]
      })
    }

    function Vj(UU) {
      let {
        need: RU,
        kind: gU = "reactor",
        explain: tU
      } = UU;
      const {
        t: pU
      } = (0, Zp.B)(), EU = RU.length <= 3, PU = RU.reduce(((UU, RU) => {
        let [, gU] = RU;
        return UU + gU
      }), 0);
      return (0, bE.jsxs)("div", {
        className: wp()("Baf2RxParts", {
          Compact: !EU
        }),
        onClick: () => {
          tU("battery" === gU ? `${bj}batWhy_store` : `${bj}rxShellHint`)
        },
        children: [PU > 0 && (0, bE.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === PU ? pU(`${bj}rxBlocksOne`) : pU(`${bj}rxBlocks`, {
            blocks: String(PU)
          })
        }), 0 === RU.length ? (0, bE.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: pU("battery" === gU ? `${bj}batPartsDone` : `${bj}rxShellDone`)
        }) : Iq(RU).map((UU => {
          let [RU, gU, tU] = UU;
          const PU = function(UU) {
            const RU = oq[UU];
            if (void 0 === RU) return null;
            const [gU, tU, pU] = nq[RU].colour.map((UU => Math.round(255 * UU)));
            return `rgb(${gU}, ${tU}, ${pU})`
          }(RU);
          return (0, bE.jsxs)("span", {
            className: "Baf2RxChip",
            title: EE(pU, RU),
            children: [(0, bE.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === PU ? {
                visibility: "hidden"
              } : {
                background: PU
              },
              title: pU(`${bj}rxShopGhost`)
            }), (0, bE.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, bE.jsx)(Yp.c, {
                itemName: RU,
                amount: 0
              })
            }), (0, bE.jsx)("span", {
              className: "Baf2RxChipName",
              children: EU ? `${gU} ${TU=EE(pU,RU),TU.replace(/^(Reactor|Battery) (?=\S)/,"")}` : gU
            }), tU >= gU ? (0, bE.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, bE.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: EU ? pU(`${bj}rxShopShort`, {
                count: String(gU - tU)
              }) : "\u2212" + (gU - tU)
            })]
          }, RU);
          var TU
        }))]
      })
    }
    const rj = "buildAFactory2Game:";

    function Xj(UU) {
      var RU, gU, pU, EU, PU, TU, qU;
      let {
        store: KU,
        close: cU
      } = UU;
      const {
        t: GU
      } = (0, Zp.B)(), jU = kP(), uU = Ej(KU), {
        explained: CU,
        explain: hU
      } = MG("baf2RxExplained"), QU = (0, tU.useCallback)(((UU, RU) => {
        hU(GU(UU, RU))
      }), [hU, GU]), eU = null === uU || void 0 === uU ? void 0 : uU.status, WU = !0 === (null === eU || void 0 === eU ? void 0 : eU.baf2BatReadOnly), fU = UU => {
        eU && jU.send(GR(eU.baf2BatAt, UU))
      }, [xU, mU, IU] = null !== (RU = null === uU || void 0 === uU ? void 0 : uU.dims) && void 0 !== RU ? RU : [0, 0, 0], JU = Yq(null !== (gU = null === uU || void 0 === uU ? void 0 : uU.hG) && void 0 !== gU ? gU : 0), wU = !0 === (null === eU || void 0 === eU ? void 0 : eU.baf2BatFormed), nU = null !== (pU = null === eU || void 0 === eU ? void 0 : eU.baf2BatStored) && void 0 !== pU ? pU : 0, bU = Math.max(1, null !== (EU = null === eU || void 0 === eU ? void 0 : eU.baf2BatIslandCap) && void 0 !== EU ? EU : 1), oU = Math.min(100, 100 * nU / bU), ZU = null === eU || void 0 === eU ? void 0 : eU.baf2BatNetPerS, aU = function(UU, RU, gU) {
        return gU > 0 && RU >= gU ? "full" : void 0 !== UU && UU >= .05 ? "charging" : void 0 !== UU && UU <= -.05 && RU > 0 ? "draining" : "steady"
      }(ZU, nU, null !== (PU = null === eU || void 0 === eU ? void 0 : eU.baf2BatIslandCap) && void 0 !== PU ? PU : 0), YU = null !== (TU = null === eU || void 0 === eU ? void 0 : eU.baf2BatMadePerS) && void 0 !== TU ? TU : 0, BU = null !== (qU = null === eU || void 0 === eU ? void 0 : eU.baf2BatUsedPerS) && void 0 !== qU ? qU : 0;
      let VU, rU = {},
        XU = "info";
      if (eU)
        if (wU) "charging" === aU ? (VU = `${rj}batLine_charging`, rU = {
          time: IE(GU, (bU - nU) / Math.max(.05, null !== ZU && void 0 !== ZU ? ZU : 0))
        }, XU = "ok") : "draining" === aU ? (VU = `${rj}batLine_draining`, rU = {
          time: IE(GU, nU / Math.max(.05, -(null !== ZU && void 0 !== ZU ? ZU : 0)))
        }, XU = "warn") : VU = "full" === aU ? `${rj}batLine_full` : nU <= 0 && BU > 0 ? `${rj}batLine_empty` : `${rj}batLine_steady`;
        else {
          var vU;
          const UU = Jj({
            left: eU.baf2BatNeed.reduce(((UU, RU) => {
              let [, gU] = RU;
              return UU + gU
            }), 0),
            bad: eU.baf2BatBad,
            rods: 1,
            canFill: !0 === eU.baf2BatCanFill,
            melted: !1
          });
          VU = UU.key, rU = {
            count: String(null !== (vU = UU.params.count) && void 0 !== vU ? vU : 0)
          }, XU = UU.tone
        }
      else VU = `${rj}batLine_steady`;
      const dU = Math.max(YU, BU, 1);
      return (0, bE.jsx)(IP.d, {
        close: cU,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, bE.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, bE.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, bE.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, bE.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, bE.jsx)(Yp.c, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, bE.jsxs)("div", {
                children: [(0, bE.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: GU(`${rj}batTitle`)
                }), eU && (0, bE.jsxs)("p", {
                  className: wp()("Baf2RxSubtitle", {
                    good: wU && "charging" === aU,
                    warn: wU && "draining" === aU
                  }),
                  children: [xU, "\xd7", mU, "\xd7", IU, " \xb7 ", GU(wU ? `${rj}batState_${aU}` : `${rj}rxSubPlanShort`)]
                })]
              })]
            }), (0, bE.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [eU && !WU && (0, bE.jsx)(Pj, {
                kind: "battery",
                cap: wU ? JU : void 0,
                busy: null === uU || void 0 === uU ? void 0 : uU.busy.has("apart"),
                apart: () => {
                  KU.tap("apart", (() => {
                    fU("apart")
                  }))
                }
              }), (0, bE.jsx)(JP.h, {
                onClick: cU
              })]
            })]
          }), uU && eU && (0, bE.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, bE.jsxs)("div", {
              className: wp()("Baf2RxFlow Baf2BatFlow", {
                Plan: !wU
              }),
              children: [(0, bE.jsx)(iG, {
                kind: "Power",
                label: GU(`${rj}batMade`),
                number: wU ? `\u26a1 ${Yq(YU)}/s` : "\u2014",
                note: GU(`${rj}batMadeNote`),
                share: wU ? YU / dU : void 0,
                onExplain: () => {
                  QU(`${rj}batWhy_made`)
                }
              }), (0, bE.jsx)(AG, {
                kind: "Power",
                step: wU ? fj(YU, dU) : 0,
                planned: !wU
              }), (0, bE.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  QU(`${rj}batWhy_store`)
                },
                children: [(0, bE.jsx)(zG, {
                  max: 100,
                  bands: [{
                    upTo: wU ? oU : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, bE.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, bE.jsx)("b", {
                    className: "Baf2BatStored",
                    children: wU ? GU(`${rj}batStoredOf`, {
                      amount: Yq(nU),
                      cap: Yq(eU.baf2BatIslandCap)
                    }) : GU(`${rj}batWillHold`, {
                      cap: JU
                    })
                  }), (0, bE.jsx)("span", {
                    children: GU(`${rj}batAdds`, {
                      cap: JU
                    })
                  }), wU && (0, bE.jsx)("small", {
                    children: GU(`${rj}batBreakNote`, {
                      cap: JU
                    })
                  })]
                })]
              }), (0, bE.jsx)(AG, {
                kind: "Power",
                step: wU ? fj(BU, dU) : 0,
                planned: !wU
              }), (0, bE.jsx)(iG, {
                kind: "Power",
                label: GU(`${rj}batUsed`),
                number: wU ? `\u26a1 ${Yq(BU)}/s` : "\u2014",
                note: GU(`${rj}batUsedNote`),
                share: wU ? BU / dU : void 0,
                onExplain: () => {
                  QU(`${rj}batWhy_used`)
                }
              })]
            }), (0, bE.jsx)(DG, {
              text: GU(VU, rU),
              tone: XU,
              explained: CU
            }), WU ? (0, bE.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: GU(`${rj}rxNotYours`)
            }) : !wU && (0, bE.jsxs)(bE.Fragment, {
              children: [(0, bE.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, bE.jsx)(Kj, {
                  kind: "battery",
                  dims: uU.dims,
                  cap: eU.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: UU => {
                    KU.resize(UU)
                  }
                }), (0, bE.jsx)(cj, {
                  on: uU.guide,
                  label: GU(`${rj}rxGuide`),
                  toggle: () => {
                    KU.toggleGuide()
                  }
                }), eU.baf2BatCanFill && (0, bE.jsx)(JP.j, {
                  disabled: !Jq("battery", eU.baf2BatNeed) || uU.busy.has("fill"),
                  onClick: () => {
                    KU.tap("fill", (() => {
                      fU("fill")
                    }))
                  },
                  children: GU(`${rj}rxFill`)
                })]
              }), (0, bE.jsx)(Vj, {
                need: eU.baf2BatNeed,
                kind: "battery",
                explain: QU
              })]
            })]
          })]
        })
      })
    }
    const vj = "buildAFactory2Game:",
      dj = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function Hj(UU, RU) {
      return UU === gq ? null : RU ? "#4a4440" : UU < pq ? dj[UU - tq] : UU === pq ? "#3fd0f0" : UU === Eq ? "#2c3e4c" : "#55585e"
    }

    function Sj(UU) {
      let {
        inner: RU,
        looks: gU,
        layer: tU,
        setLayer: pU,
        glow: EU,
        melted: PU,
        explain: TU
      } = UU;
      const {
        t: qU
      } = (0, Zp.B)(), [KU, cU, GU] = RU, jU = Math.max(0, Math.min(cU - 1, tU)), uU = [];
      for (let hU = 0; hU < GU; hU++)
        for (let UU = 0; UU < KU; UU++) {
          var CU;
          const RU = null !== (CU = gU[(jU * GU + hU) * KU + UU]) && void 0 !== CU ? CU : gq,
            tU = Hj(RU, PU),
            pU = RU >= tq && RU < pq;
          uU.push(null === tU ? (0, bE.jsx)("circle", {
            cx: UU + .5,
            cy: hU + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${UU},${hU}`) : (0, bE.jsx)("rect", {
            x: UU + .06,
            y: hU + .06,
            width: .88,
            height: .88,
            fill: tU,
            opacity: pU && !PU ? .5 + .5 * EU : 1,
            onClick: UU => {
              UU.stopPropagation();
              const gU = nj(RU);
              TU(gU.key, gU.params)
            }
          }, `${UU},${hU}`))
        }
      return (0, bE.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, bE.jsx)("svg", {
          className: wp()("Baf2RxMapGrid", {
            Melted: PU
          }),
          viewBox: `0 0 ${Math.max(1,KU)} ${Math.max(1,GU)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": qU(`${vj}rxWhy_core`),
          onClick: () => {
            TU(`${vj}rxWhy_core`, {})
          },
          children: uU
        }), cU > 1 && (0, bE.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, bE.jsx)("button", {
            type: "button",
            "aria-label": qU(`${vj}rxLayerDown`),
            disabled: jU <= 0,
            onClick: () => {
              pU(jU - 1)
            },
            children: "\u25bc"
          }), (0, bE.jsxs)("span", {
            children: [(0, bE.jsx)("span", {
              className: "HideNarrow",
              children: qU(`${vj}rxLayer`, {
                n: String(jU + 1),
                of: String(cU)
              })
            }), (0, bE.jsx)("span", {
              className: "ShowNarrow",
              children: qU(`${vj}rxLayerShort`, {
                n: String(jU + 1),
                of: String(cU)
              })
            })]
          }), (0, bE.jsx)("button", {
            type: "button",
            "aria-label": qU(`${vj}rxLayerUp`),
            disabled: jU >= cU - 1,
            onClick: () => {
              pU(jU + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const sj = "buildAFactory2Game:",
      yj = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: zT,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: eq,
        kind: "red"
      }],
      kj = [50, zT, 100];

    function Fj(UU) {
      let {
        stats: RU,
        t: gU,
        explain: tU
      } = UU;
      const pU = qq(RU),
        EU = Math.max(1, RU.fuelHeat, RU.cooling, RU.size),
        PU = [
          ["fuel", `${sj}rxBarRods`, RU.fuelHeat],
          ["cooling", `${sj}rxBarCooling`, RU.cooling],
          ["size", `${sj}rxBarSize`, RU.size]
        ];
      return (0, bE.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          tU(`${sj}rxWhy_bars`)
        },
        children: [(0, bE.jsx)("span", {
          className: "Baf2RxMostLine",
          children: gU(`${sj}rxMost`, {
            amount: Yq(Math.min(RU.fuelHeat, RU.cooling, RU.size))
          })
        }), (0, bE.jsx)("span", {
          className: "Baf2RxMostBars",
          children: PU.map((UU => {
            let [RU, tU, PU] = UU;
            return (0, bE.jsxs)("span", {
              className: wp()("Baf2RxMostBar", RU, {
                Low: RU === pU
              }),
              children: [(0, bE.jsx)("small", {
                children: gU(tU)
              }), (0, bE.jsx)("i", {
                children: (0, bE.jsx)("b", {
                  style: {
                    width: 100 * PU / EU + "%"
                  }
                })
              })]
            }, RU)
          }))
        })]
      })
    }

    function ij(UU) {
      var RU;
      let {
        view: gU,
        heat: pU,
        settle: EU,
        settleLine: PU,
        settleBad: TU,
        explain: qU
      } = UU;
      const {
        t: KU
      } = (0, Zp.B)(), {
        status: cU
      } = gU, GU = cU.baf2RxAt.join(","), [jU, uU] = (0, tU.useState)((() => wj(gU.inner)));
      (0, tU.useEffect)((() => {
        uU(wj(gU.inner))
      }), [GU, gU.inner[1]]);
      const CU = null !== (RU = gU.plan) && void 0 !== RU ? RU : fq(cU),
        hU = gU.plan ? gU.plan.powerPerUnit : cU.baf2RxStats[8],
        QU = null === pU ? null : "alarm" === (eU = Qq(cU)) ? "red" : "hot" === eU ? "hot" : "warm" === eU ? "warm" : "cold";
      var eU;
      const WU = !cU.baf2RxFormed && function(UU, RU) {
          return 0 !== (UU.baf2RxFlags & RU)
        }(cU, CR),
        fU = cU.baf2RxDamage,
        xU = cU.baf2RxDamageTrend;
      return (0, bE.jsxs)("div", {
        className: wp()("Baf2RxCore", null !== QU && void 0 !== QU ? QU : "plan"),
        children: [(0, bE.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, bE.jsx)(Sj, {
            inner: gU.inner,
            looks: gU.looks,
            layer: jU,
            setLayer: uU,
            glow: cU.baf2RxFormed ? cU.baf2RxThrottle / 100 : 1,
            melted: WU,
            explain: qU
          }), (0, bE.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              qU(`${sj}rxWhy_heat`)
            },
            children: [null !== pU ? (0, bE.jsxs)(bE.Fragment, {
              children: [(0, bE.jsx)("b", {
                children: KU(`${sj}rxHeatPct`, {
                  pct: String(pU)
                })
              }), (0, bE.jsx)("span", {
                className: wp()("Baf2RxBand", QU),
                children: KU(`${sj}rxBand_${QU}`)
              })]
            }) : (0, bE.jsx)("b", {
              children: KU(`${sj}rxHeat`)
            }), null !== PU && (0, bE.jsx)("span", {
              className: wp()("Baf2RxSettle", {
                Bad: TU
              }),
              children: PU
            }), fU >= 1 && (0, bE.jsxs)("span", {
              className: wp()("Baf2RxDamage", xU),
              children: [KU(`${sj}rxDamageLine`, {
                pct: String(fU)
              }), " \xb7 ", KU(`${sj}rxDamage_${xU}`), (0, bE.jsx)("i", {
                children: (0, bE.jsx)("b", {
                  style: {
                    width: `${Math.min(100,fU)}%`
                  }
                })
              })]
            })]
          }), (0, bE.jsx)(zG, {
            max: eq,
            bands: yj,
            ticks: kj,
            now: pU,
            settle: EU,
            settleTone: TU ? "bad" : null,
            onExplain: () => {
              qU(`${sj}rxWhy_heat`)
            }
          })]
        }), (0, bE.jsx)(Fj, {
          stats: CU,
          t: KU,
          explain: qU
        }), hU > 0 && (0, bE.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            qU(`${sj}rxWhy_perPellet`)
          },
          children: KU(`${sj}rxPerPellet`, {
            amount: Yq(hU)
          })
        })]
      })
    }

    function Aj(UU, RU) {
      var gU;
      if (!UU.baf2RxStore) return {
        note: RU(`${sj}rxUpTo`, {
          amount: Yq(UU.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [tU, pU] = UU.baf2RxStore, EU = pU > 0 ? tU / pU : 0, PU = String(Math.floor(100 * EU)), TU = null !== (gU = UU.baf2RxStoreNetPerS) && void 0 !== gU ? gU : 0, qU = function(UU) {
        var RU, gU;
        const [tU, pU] = null !== (RU = UU.baf2RxStore) && void 0 !== RU ? RU : [0, 0], EU = null !== (gU = UU.baf2RxStoreNetPerS) && void 0 !== gU ? gU : 0;
        return pU > 0 && tU >= pU - 1 ? "running" === UU.baf2RxState ? `${Gj}rxStoreFull` : `${Gj}rxStoreFullOnly` : EU > .05 ? `${Gj}rxStoreLine` : EU < -.05 ? "running" === UU.baf2RxState ? `${Gj}rxStoreUsesMore` : `${Gj}rxStoreDraining` : `${Gj}rxStorePct`
      }(UU);
      return {
        note: RU(qU, qU === `${sj}rxStoreLine` ? {
          pct: PU,
          time: IE(RU, (pU - tU) / TU)
        } : {
          pct: PU
        }),
        share: EU
      }
    }

    function zj(UU) {
      let {
        view: RU,
        explain: gU,
        preview: tU
      } = UU;
      const {
        t: pU
      } = (0, Zp.B)(), {
        status: EU
      } = RU, PU = lT(Uq(...RU.dims)), TU = Wj(EU), qU = Math.min(Math.round(EU.baf2RxFuel), PU.fuel), KU = "running" === EU.baf2RxState, cU = KU ? fj(EU.baf2RxOut, EU.baf2RxMaxNow) : 0, GU = function(UU, RU, gU) {
        const tU = hj(UU),
          pU = "cryo" === tU.Nj,
          EU = gU ? gU.coolantSecs : tU.pct >= 100 && UU.baf2RxOut >= 1 ? ej(UU, UU.baf2RxThrottle).coolantSecs : null;
        let PU, TU = !1;
        if (tU.pct < 100) {
          const gU = 1 === tU.makersShort,
            EU = !pU && UU.baf2RxCryoOpen ? "OrCryo" : "";
          PU = tU.makersShort > 0 ? RU(pU ? `${sj}rxCryoAddMixer${gU?"":"s"}` : `${sj}rxWaterAddCondenser${gU?"":"s"}${EU}`, {
            count: String(tU.makersShort)
          }) : RU(`${sj}rxWaterNeeds`, {
            rate: qj(tU.needPerS)
          })
        } else if (null !== EU) PU = RU(`${sj}rxWaterRunsOut`, {
          time: IE(RU, EU)
        });
        else if (tU.waterBeside > 0) PU = RU(`${sj}rxCryoPlusWater`, {
          rate: qj(tU.waterBeside)
        });
        else {
          const UU = function(UU) {
            return UU.inPerS <= 0 ? "rxWaterNoSupply" : UU.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(tU);
          TU = "rxWaterNoSupply" === UU, PU = RU(`${sj}${UU}`, {
            amount: Yq(tU.stored)
          })
        }
        return {
          kind: pU ? "Cryo" : "Water",
          label: RU(pU ? `${sj}rxCryo` : `${sj}rxWater`),
          number: `${qj(tU.usePerS)}/s`,
          preview: gU ? `${qj(gU.coolPerS)}/s` : null,
          note: PU,
          tone: "noWater" === UU.baf2RxState ? "danger" : TU ? "warn" : (qU = tU.pct, KU = EU, qU < 100 ? "danger" : null === KU ? null : KU < 300 ? "danger" : "warn"),
          share: tU.pct / 100,
          why: pU ? `${sj}rxWhy_cryo` : `${sj}rxWhy_water`,
          short: tU.pct < 100
        };
        var qU, KU
      }(EU, pU, tU), jU = wq(EU, PU.waste, TU), uU = Aj(EU, pU), CU = ej(EU, EU.baf2RxTarget), hU = KU && Math.abs(CU.settle - EU.baf2RxHeat) >= 3, QU = tU ? tU.pelletsPerMin / 60 : null;
      return (0, bE.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, bE.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, bE.jsx)(iG, {
            kind: "Fuel",
            label: pU(`${sj}rxFuel`),
            number: String(qU),
            preview: null !== QU && QU > 0 && EU.baf2RxFuel > 0 ? IE(pU, EU.baf2RxFuel / QU) : null,
            note: EU.baf2RxFuel <= 0 ? pU(`${sj}rxFuelEmpty`) : TU > 0 ? pU(`${sj}rxFuelLeft`, {
              time: IE(pU, EU.baf2RxFuel / TU)
            }) : pU(1 === qU ? `${sj}rxFuelPellet` : `${sj}rxFuelPellets`),
            tone: "noFuel" === EU.baf2RxState ? "danger" : EU.baf2RxFuel < 2 ? "warn" : null,
            share: EU.baf2RxFuel / PU.fuel,
            onExplain: () => {
              gU(`${sj}rxWhy_fuel`)
            }
          }), (0, bE.jsx)(iG, {
            kind: GU.kind,
            label: GU.label,
            number: GU.number,
            preview: GU.preview,
            note: GU.note,
            tone: GU.tone,
            share: GU.share,
            onExplain: () => {
              gU(GU.why)
            }
          })]
        }), (0, bE.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, bE.jsx)(AG, {
            kind: "Fuel",
            step: cU,
            short: "noFuel" === EU.baf2RxState
          }), (0, bE.jsx)(AG, {
            kind: GU.kind,
            step: cU,
            short: GU.short || "noWater" === EU.baf2RxState
          })]
        }), (0, bE.jsx)(ij, {
          view: RU,
          heat: EU.baf2RxHeat,
          settle: Math.min(eq, CU.settle),
          settleLine: hU ? pU(`${sj}rxHeatSettles`, {
            pct: String(Math.round(CU.settle)),
            time: IE(pU, CU.settleS)
          }) : null,
          settleBad: CU.settle > 100,
          explain: gU
        }), (0, bE.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, bE.jsx)(AG, {
            kind: "Power",
            step: cU
          }), (0, bE.jsx)(AG, {
            kind: "Waste",
            step: KU && EU.baf2RxFuel - EU.baf2RxPu > 0 ? cU : 0,
            short: jU.full
          })]
        }), (0, bE.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, bE.jsx)(iG, {
            kind: "Power",
            label: pU(`${sj}rxPowerOut`),
            number: `\u26a1 ${Yq(EU.baf2RxOut)}/s`,
            preview: tU ? Yq(tU.out) : null,
            note: uU.note,
            share: uU.share,
            onExplain: () => {
              gU(`${sj}rxWhy_power`)
            }
          }), (0, bE.jsx)(iG, {
            kind: "Waste",
            label: pU(`${sj}rxWaste`),
            number: `${Math.floor(EU.baf2RxWaste)}/${PU.waste}`,
            note: jU.full ? pU(`${sj}rxWasteFull`) : null !== jU.fullInS ? pU(`${sj}rxWasteFullIn`, {
              time: IE(pU, jU.fullInS)
            }) : pU(`${sj}rxWasteSpent`),
            tone: "wasteFull" === EU.baf2RxState ? "danger" : jU.full ? "warn" : null,
            share: EU.baf2RxWaste / PU.waste,
            onExplain: () => {
              gU(`${sj}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function Mj(UU) {
      let {
        view: RU,
        explain: gU
      } = UU;
      const {
        t: tU
      } = (0, Zp.B)(), pU = RU.plan;
      if (!pU) return null;
      const EU = pU.fuelHeat <= 0 ? null : pU.cooling > 0 ? Math.min(eq, 100 * pU.fuelHeat / pU.cooling) : eq,
        PU = tU(`${sj}rxPlanAtFull`);
      return (0, bE.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, bE.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, bE.jsx)(iG, {
            kind: "Fuel",
            label: tU(`${sj}rxFuel`),
            number: tU(`${sj}rxPlanPerMin`, {
              amount: Bq(pU.pelletsPerMin)
            }),
            note: tU(`${sj}rxPlanPellets`),
            onExplain: () => {
              gU(`${sj}rxWhy_fuel`)
            }
          }), (0, bE.jsx)(iG, {
            kind: "Water",
            label: tU(`${sj}rxWater`),
            number: `${qj(pU.waterPerS)}/s`,
            note: RU.status.baf2RxCryoOpen && pU.waterPerS > 0 ? tU(`${sj}rxPlanOrCryo`, {
              rate: qj(uq(pU, lU.i) * lU.r)
            }) : PU,
            onExplain: () => {
              gU(`${sj}rxWhy_water`)
            }
          })]
        }), (0, bE.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, bE.jsx)(AG, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, bE.jsx)(AG, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, bE.jsx)(ij, {
          view: RU,
          heat: null,
          settle: EU,
          settleLine: null === EU ? null : tU(`${sj}rxPlanHeat`, {
            pct: String(Math.round(EU))
          }),
          settleBad: null !== EU && EU > 100,
          explain: gU
        }), (0, bE.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, bE.jsx)(AG, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, bE.jsx)(AG, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, bE.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, bE.jsx)(iG, {
            kind: "Power",
            label: tU(`${sj}rxPowerOut`),
            number: `\u26a1 ${Yq(pU.max)}/s`,
            note: PU,
            onExplain: () => {
              gU(`${sj}rxWhy_power`)
            }
          }), (0, bE.jsx)(iG, {
            kind: "Waste",
            label: tU(`${sj}rxWaste`),
            number: tU(`${sj}rxPlanPerMin`, {
              amount: Bq(pU.pelletsPerMin)
            }),
            note: tU(`${sj}rxWasteSpent`),
            onExplain: () => {
              gU(`${sj}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const Dj = "buildAFactory2Game:",
      Lj = {
        key: `${Dj}rxWaiting`,
        params: {},
        tone: "info"
      };

    function Nj(UU, RU) {
      return 0 !== (UU.baf2RxFlags & RU)
    }

    function lj(UU) {
      var RU, gU;
      let {
        store: pU,
        close: EU
      } = UU;
      const {
        t: PU
      } = (0, Zp.B)(), TU = Ej(pU), {
        explained: qU,
        hinting: KU,
        explain: cU,
        explainOnce: GU
      } = MG("baf2RxExplained"), jU = (0, tU.useCallback)(((UU, RU) => {
        cU(PU(UU, RU))
      }), [cU, PU]), uU = (0, tU.useCallback)(((UU, RU) => {
        GU(UU, PU(UU, RU))
      }), [GU, PU]), [CU, hU] = (0, tU.useState)(!1), [QU, eU] = (0, tU.useState)(!1), WU = null === TU || void 0 === TU ? void 0 : TU.status, fU = null === WU || void 0 === WU ? void 0 : WU.baf2RxAt.join(","), xU = !0 === (null === WU || void 0 === WU ? void 0 : WU.baf2RxFormed);
      (0, tU.useEffect)((() => {
        eU(!1), hU(!1)
      }), [fU, xU]), (0, tU.useEffect)((() => (pU.opened(), () => {
        pU.closed()
      })), [pU]);
      const mU = void 0 !== WU && Nj(WU, eR),
        IU = WU ? xU ? Qq(WU) : null !== TU && void 0 !== TU && TU.plan ? function(UU, RU) {
          if (UU <= 0) return "off";
          if (RU <= 0) return "alarm";
          const gU = 100 * UU / RU;
          return gU < 50 ? "calm" : gU < Kq ? "warm" : gU <= 100 ? "hot" : "alarm"
        }(TU.plan.fuelHeat, TU.plan.cooling) : "off" : "off",
        JU = WU ? Wq(WU) : null,
        wU = TU ? TU.waiting ? Lj : xU ? Ij(TU.status) : function(UU) {
          var RU, gU;
          const {
            status: tU
          } = UU;
          return Jj({
            left: tU.baf2RxNeed.reduce(((UU, RU) => {
              let [, gU] = RU;
              return UU + gU
            }), 0),
            bad: tU.baf2RxBad,
            rods: null !== (RU = null === (gU = UU.plan) || void 0 === gU ? void 0 : gU.rods) && void 0 !== RU ? RU : 0,
            canFill: Nj(tU, hR),
            melted: Nj(tU, CR),
            idle: UU.looks.reduce(((UU, RU) => UU + (RU === Eq ? 1 : 0)), 0)
          })
        }(TU) : null,
        nU = KU && null !== wU && ("ok" === wU.tone || "info" === wU.tone),
        bU = WU ? function(UU) {
          const RU = 0 !== (UU.baf2RxFlags & jR),
            gU = UU.baf2RxHeat < DT;
          return 0 !== (UU.baf2RxFlags & CR) || gU && (RU || !UU.baf2RxFormed) ? null : UU.baf2RxFormed && !RU ? {
            key: `${hq}rxApartScram`,
            params: {}
          } : {
            key: `${hq}rxApartCooling`,
            params: {
              pct: String(DT)
            }
          }
        }(WU) : null,
        [oU, ZU, aU] = null !== (RU = null === TU || void 0 === TU ? void 0 : TU.dims) && void 0 !== RU ? RU : [0, 0, 0],
        YU = `${oU}\xd7${ZU}\xd7${aU}`;
      return (0, bE.jsx)(IP.d, {
        close: EU,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, bE.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, bE.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, bE.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, bE.jsx)(Tj, {
                mood: IU
              }), (0, bE.jsxs)("div", {
                children: [(0, bE.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: PU(`${Dj}rxTitle`)
                }), TU && (0, bE.jsxs)("p", {
                  className: wp()("Baf2RxSubtitle", xU && (null === JU || void 0 === JU ? void 0 : JU.tone)),
                  children: [xU && !mU ? (0, bE.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": PU(`${Dj}rxChangeSize`),
                    onClick: () => {
                      if (!WU) return;
                      const UU = Nj(WU, jR);
                      var RU;
                      (RU = {
                        scram: UU,
                        heat: WU.baf2RxHeat
                      }).scram && RU.heat < DT ? hU(!0) : jU(UU ? `${Dj}rxResizeCooling` : `${Dj}rxResizeHot`, {
                        pct: String(DT)
                      })
                    },
                    children: [YU, " \u270e"]
                  }) : YU, " \xb7 ", PU(xU ? null !== (gU = null === JU || void 0 === JU ? void 0 : JU.label) && void 0 !== gU ? gU : `${Dj}rxState_running` : `${Dj}rxSubPlanShort`)]
                })]
              })]
            }), (0, bE.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [TU && !mU && (0, bE.jsx)(Pj, {
                kind: "reactor",
                busy: TU.busy.has("apart"),
                whyNot: bU ? () => {
                  jU(bU.key, bU.params)
                } : null,
                apart: () => {
                  pU.tap("apart", (() => {
                    pU.send("apart")
                  }))
                }
              }), (0, bE.jsx)(JP.h, {
                onClick: EU
              })]
            })]
          }), TU && wU && (0, bE.jsxs)("div", {
            className: "Baf2RxBody",
            children: [xU ? (0, bE.jsx)(zj, {
              view: TU,
              explain: jU,
              preview: Qj(TU.status)
            }) : (0, bE.jsx)(Mj, {
              view: TU,
              explain: jU
            }), (0, bE.jsx)(DG, {
              text: nU ? `${xj(PU,wU)} ${PU(`${Dj}rxTapHint`)}` : xj(PU, wU),
              tone: wU.tone,
              explained: qU
            }), mU ? (0, bE.jsxs)(bE.Fragment, {
              children: [(0, bE.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: PU(`${Dj}rxNotYours`)
              }), (0, bE.jsx)(Rj, {
                status: TU.status,
                store: pU,
                readOnly: !0
              })]
            }) : xU && !QU ? (0, bE.jsxs)(bE.Fragment, {
              children: [(0, bE.jsx)(Yj, {
                view: TU,
                store: pU,
                explain: jU,
                explainOnce: uU
              }), void 0 !== TU.status.baf2RxLayout && lG(TU.status) && (0, bE.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, bE.jsx)(Rj, {
                  status: TU.status,
                  store: pU,
                  readOnly: !1,
                  bare: !0
                }), (0, bE.jsx)(Uj, {
                  status: TU.status,
                  store: pU,
                  busy: TU.busy.has("fill")
                })]
              })]
            }) : (0, bE.jsxs)(bE.Fragment, {
              children: [(0, bE.jsx)(Bj, {
                view: TU,
                store: pU,
                keepSize: xU ? () => {
                  eU(!1)
                } : void 0
              }), mq(TU.dims, TU.status.baf2RxDims) && (0, bE.jsx)(Vj, {
                need: TU.status.baf2RxNeed,
                explain: jU
              }), (0, bE.jsx)(Rj, {
                status: TU.status,
                store: pU,
                readOnly: !1
              })]
            }), CU && (0, bE.jsx)(pj, {
              id: "baf2ResizeTitle",
              title: `${Dj}rxResizeConfirmTitle`,
              body: `${Dj}rxResizeConfirmBody`,
              yes: `${Dj}rxChangeSize`,
              cancel: () => {
                hU(!1)
              },
              confirm: () => {
                hU(!1), eU(!0)
              }
            })]
          })]
        })
      })
    }
    class Oj {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(UU) {
        this.view = UU;
        for (const RU of this.listeners) RU()
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

    function Uu(UU) {
      let {
        commands: RU,
        store: gU,
        power: pU,
        water: EU,
        reactor: PU,
        battery: TU,
        collider: qU,
        terminal: KU,
        quests: cU,
        close: GU,
        leave: jU,
        askIslands: uU,
        showCore: CU,
        openSocial: hU
      } = UU;
      const {
        userContext: QU
      } = (0, XT.e)(), eU = rT.featureFlags.useSocialFeatures && QU.isLoggedIn(), [WU, fU] = (0, tU.useState)((() => gU.get()));
      (0, tU.useEffect)((() => gU.subscribe((() => {
        fU(gU.get())
      }))), [gU]);
      const xU = "islands" === (null === WU || void 0 === WU ? void 0 : WU.kind) ? WU.backToCore : void 0;
      return (0, bE.jsxs)(yP.Provider, {
        value: RU,
        children: ["core" === (null === WU || void 0 === WU ? void 0 : WU.kind) && (0, bE.jsx)(cG, {
          view: WU.core,
          close: GU,
          askIslands: uU
        }), "dropMap" === (null === WU || void 0 === WU ? void 0 : WU.kind) && (0, bE.jsx)(CG, {
          message: WU.dropMap,
          quests: cU,
          close: GU,
          leave: jU
        }), "islands" === (null === WU || void 0 === WU ? void 0 : WU.kind) && (0, bE.jsx)(BG, {
          message: WU.islands,
          arrivedAtMs: WU.arrivedAtMs,
          close: xU ? () => {
            CU(xU)
          } : GU,
          leave: jU,
          openSocial: eU ? hU : null
        }), "quests" === (null === WU || void 0 === WU ? void 0 : WU.kind) && (0, bE.jsx)(Zc, {
          store: cU,
          close: GU
        }), "transfer" === (null === WU || void 0 === WU ? void 0 : WU.kind) && (0, bE.jsx)(gc, {
          message: WU.transfer,
          arrivedAtMs: WU.arrivedAtMs,
          close: GU,
          leave: jU
        }), "power" === (null === WU || void 0 === WU ? void 0 : WU.kind) && (0, bE.jsx)(BP, {
          store: pU,
          close: GU
        }), "water" === (null === WU || void 0 === WU ? void 0 : WU.kind) && (0, bE.jsx)(QT, {
          store: EU,
          close: GU
        }), "reactor" === (null === WU || void 0 === WU ? void 0 : WU.kind) && (0, bE.jsx)(lj, {
          store: PU,
          close: GU
        }), "battery" === (null === WU || void 0 === WU ? void 0 : WU.kind) && (0, bE.jsx)(Xj, {
          store: TU,
          close: GU
        }), "collider" === (null === WU || void 0 === WU ? void 0 : WU.kind) && (0, bE.jsx)(eK, {
          store: qU,
          close: GU
        }), "terminal" === (null === WU || void 0 === WU ? void 0 : WU.kind) && (0, bE.jsx)(FG, {
          store: KU,
          close: GU,
          send: UU => {
            RU.send(UU)
          }
        })]
      })
    }
    var Ru = gU(38046);

    function gu(UU, RU) {
      return UU.distSq - RU.distSq
    }
    class tu {
      constructor() {
        this.list = [], this.pool = []
      }
      add(UU, RU, gU, tU) {
        let pU = this.pool[this.list.length];
        pU || (pU = {
          x: 0,
          y: 0,
          distSq: 0,
          element: RU,
          liftRem: gU,
          dot: tU
        }, this.pool.push(pU)), pU.x = UU.x, pU.y = UU.y, pU.distSq = UU.distSq, pU.element = RU, pU.liftRem = gU, pU.dot = tU, this.list.push(pU)
      }
    }
    class pu {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = UU, this.sizes = new WeakMap, this.observer = new ResizeObserver((UU => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const RU of UU) {
            const UU = RU.borderBoxSize[0];
            "dot" !== RU.target.dataset.crowded && 0 !== UU.inlineSize && 0 !== UU.blockSize && this.sizes.set(RU.target, {
              width: UU.inlineSize,
              height: UU.blockSize
            })
          }
        })), this.remPx = 16, this.xu = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.Xx = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.Xx)
      }
      observe(UU) {
        this.observer.observe(UU)
      }
      unobserve(UU) {
        this.observer.unobserve(UU)
      }
      run(UU) {
        const RU = UU.list;
        RU.sort(gu);
        const gU = this.pxPerVw,
          tU = this.pxPerVh;
        this.xu.length = 0, this.hud && this.xu.push(...this.hud.boxes(performance.now()));
        for (const EU of RU) {
          var pU;
          const UU = this.sizes.get(EU.element);
          let RU = "no";
          if (UU && UU.width > 0) {
            const pU = EU.x * gU,
              PU = EU.y * tU - EU.liftRem * this.remPx;
            this.fit(pU, PU, UU.width, UU.height) || (RU = EU.dot && this.fit(pU, PU, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (pU = EU.element.dataset.crowded) && void 0 !== pU ? pU : "no") !== RU && ("no" === RU ? delete EU.element.dataset.crowded : EU.element.dataset.crowded = RU), "hidden" !== RU && (0, Ru.c)(EU.element, EU.x, EU.y)
        }
        RU.length = 0
      }
      fit(UU, RU, gU, tU) {
        const pU = UU - gU / 2,
          EU = UU + gU / 2,
          PU = RU - tU,
          TU = this.xu;
        for (let qU = 0; qU < TU.length; qU += 4)
          if (pU < TU[qU + 1] - 2 && EU > TU[qU] + 2 && PU < TU[qU + 3] - 2 && RU > TU[qU + 2] + 2) return !1;
        return TU.push(pU, EU, PU, RU), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.Xx)
      }
    }
    const Eu = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class Pu {
      constructor() {
        this.cards = Eu.map((UU => document.getElementsByClassName(UU))), this.watched = Eu.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(UU) {
        UU - this.refreshedAt > 1e3 && (this.refreshedAt = UU, this.stale = !0);
        for (let gU = 0; gU < this.cards.length; gU++) {
          var RU;
          const UU = null !== (RU = this.cards[gU][0]) && void 0 !== RU ? RU : null;
          UU !== this.watched[gU] && this.watch(gU, UU)
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
        for (const RU of this.watched) {
          if (!RU || RU.closest(".NoRoom")) continue;
          const gU = RU.getBoundingClientRect();
          let tU = gU.top,
            pU = gU.bottom;
          if (RU === this.watched[0] && this.hud) {
            const UU = this.hud.getBoundingClientRect();
            tU = Math.max(tU, UU.top), pU = Math.min(pU, UU.bottom)
          }
          gU.width > 0 && pU > tU && UU.push(gU.left, gU.right, tU, pU)
        }
      }
      watch(UU, RU) {
        const gU = this.watched[UU];
        var tU, pU;
        (gU && this.sizes.unobserve(gU), this.watched[UU] = RU, this.stale = !0, RU && this.sizes.observe(RU), 0 === UU) && (null === (tU = this.hud) || void 0 === tU || tU.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (pU = null === RU || void 0 === RU ? void 0 : RU.closest(".Baf2QuestHud")) && void 0 !== pU ? pU : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    const Tu = [0, 0, 0],
      qu = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function Ku(UU, RU, gU, tU, pU, EU) {
      let [PU, TU, qU] = tU;
      const KU = (PU + .5 - gU[0]) ** 2 + (TU - gU[1]) ** 2 + (qU + .5 - gU[2]) ** 2;
      let cU = null;
      KU <= EU ** 2 && (Tu[0] = PU + .5, Tu[1] = TU + pU, Tu[2] = qU + .5, cU = RU.projectWorldPosToViewport(Tu));
      const GU = null !== cU && cU.x > -5 && cU.x < 105 && cU.y > -5 && cU.y < 105;
      return (0, Ru.g)(UU, !GU), GU ? (qu.x = cU.x, qu.y = cU.y, qu.distSq = KU, qu) : null
    }
    class cu {
      constructor(UU) {
        this.onElement = UU, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(UU) {
        const RU = [];
        for (let gU = 0; gU + 4 < UU.length; gU += 5) {
          const tU = [UU[gU], UU[gU + 1], UU[gU + 2]];
          RU.push({
            key: tU.join(","),
            pos: tU,
            status: pp[UU[gU + 3]],
            kind: oR[UU[gU + 4]]
          })
        }
        this.markers = RU, this.keys = new Set(RU.map((UU => {
          let {
            key: RU
          } = UU;
          return RU
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
        let RU = this.refs.get(UU);
        return RU || (RU = RU => {
          const gU = this.elements.get(UU);
          var tU, pU;
          gU && (null === (tU = this.onElement) || void 0 === tU || tU.call(this, gU, !1));
          RU ? (this.elements.set(UU, RU), null === (pU = this.onElement) || void 0 === pU || pU.call(this, RU, !0)) : (this.elements.delete(UU), this.refs.delete(UU))
        }, this.refs.set(UU, RU)), RU
      }
      onAfterRender(UU, RU, gU) {
        for (const tU of this.markers) {
          const pU = this.elements.get(tU.key);
          if (!pU) continue;
          const EU = Ku(pU, UU, RU, tU.pos, 1.05, 24);
          EU && gU.add(EU, pU, .45, !0)
        }
      }
      notify() {
        for (const UU of this.listeners) UU()
      }
    }
    const Gu = {
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
    const ju = (0, tU.memo)((function(UU) {
        let {
          status: RU,
          kind: gU,
          bindRef: tU
        } = UU;
        const {
          t: pU
        } = (0, Zp.B)(), EU = function(UU, RU) {
          var gU;
          if ("noFuel" === UU) {
            var tU, pU;
            const UU = null === (tU = rR[RU]) || void 0 === tU || null === (pU = tU.fuels) || void 0 === pU ? void 0 : pU.find((UU => tg.includes(UU)));
            return null !== UU && void 0 !== UU ? UU : Gu.noFuel
          }
          return void 0 !== (null === (gU = rR[RU]) || void 0 === gU ? void 0 : gU.cryoMade) ? "noOutlet" === UU ? "Fluid Pipe" : "noInput" === UU ? "Biomass" : Gu[UU] : Gu[UU]
        }(RU, gU);
        return (0, bE.jsxs)("div", {
          className: wp()("Baf2StallMarker", RU),
          ref: tU,
          hidden: !0,
          children: [EU && (0, bE.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, bE.jsx)(Yp.c, {
              itemName: EU,
              amount: 0
            })
          }), (0, bE.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === RU ? "?" : "!"
          }), (0, bE.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: pU(`buildAFactory2Game:stallTag_${RU}`)
          })]
        })
      })),
      uu = (0, tU.memo)((function(UU) {
        let {
          controller: RU
        } = UU;
        const [gU, pU] = (0, tU.useState)((() => RU.get()));
        return (0, tU.useEffect)((() => (pU(RU.get()), RU.subscribe((() => {
          pU(RU.get())
        })))), [RU]), (0, bE.jsx)("div", {
          className: "Baf2StallMarkers",
          children: gU.map((UU => (0, bE.jsx)(ju, {
            status: UU.status,
            kind: UU.kind,
            bindRef: RU.bind(UU.key)
          }, UU.key)))
        })
      })),
      Cu = hg.h + 150;
    class hu {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(UU, RU) {
        const gU = RU - UU;
        null === this.offset || gU < this.offset ? this.offset = gU : this.offset = Math.min(gU, this.offset + .02 * (RU - this.sampledAt)), this.sampledAt = RU
      }
      toLocal(UU) {
        var RU;
        return UU + (null !== (RU = this.offset) && void 0 !== RU ? RU : 0) + Cu
      }
    }
    var Qu = gU(38048);
    const eu = 15 * Math.PI / 180,
      Wu = Math.SQRT2,
      fu = [4, 2];

    function xu(UU, RU) {
      const gU = [1 / 0, 1 / 0, 1 / 0],
        tU = [-1 / 0, -1 / 0, -1 / 0];
      for (const qU of UU)
        for (let UU = 0; UU < 3; UU++) gU[UU] = Math.min(gU[UU], qU[UU]), tU[UU] = Math.max(tU[UU], qU[UU]);
      const pU = (gU[0] + tU[0]) / 2,
        EU = (gU[1] + tU[1]) / 2,
        PU = (gU[2] + tU[2]) / 2;
      let TU = 0;
      for (const qU of UU) TU = Math.max(TU, Math.hypot(qU[0] - pU, qU[1] - EU, qU[2] - PU));
      return {
        x: pU,
        y: EU,
        z: PU,
        r: TU + RU
      }
    }

    function mu(UU, RU, gU) {
      const tU = RU.x - UU.x,
        pU = RU.y - UU.y,
        EU = RU.z - UU.z,
        PU = Math.sqrt(tU * tU + pU * pU + EU * EU);
      if (PU <= RU.r + 8) return 1;
      const TU = RU.r / PU,
        qU = Math.sqrt(1 - TU * TU),
        KU = qU < -UU.cosHalf,
        cU = (tU * UU.dx + pU * UU.dy + EU * UU.dz) / PU;
      if (!KU && cU < UU.cosHalf * qU - UU.sinHalf * TU) return 0;
      const GU = gU * Wu * UU.frameMs * UU.pxPerBlock / (PU - RU.r);
      for (let jU = 0; jU < fu.length; jU++)
        if (GU * fu[jU] <= 1) return fu[jU];
      return 1
    }

    function Iu(UU, RU) {
      return {
        name: UU,
        at: RU,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const Ju = [0, 0, 0];

    function wu(UU, RU, gU) {
      let [, tU, pU, EU, PU, TU] = RU;
      const qU = hg.f * (null !== PU && void 0 !== PU ? PU : 1),
        KU = [];
      for (let uU = 0; uU < tU.length; uU += 3) KU.push([tU[uU] + .5, tU[uU + 1] + .65, tU[uU + 2] + .5]);
      const cU = [];
      for (let uU = 0; uU < KU.length - 1; uU++) {
        const [UU, RU] = [KU[uU], KU[uU + 1]];
        cU.push([(UU[0] + RU[0]) / 2, (UU[1] + RU[1]) / 2, (UU[2] + RU[2]) / 2])
      }
      const GU = KU.slice(1, -1),
        jU = new Uint8Array(GU.length);
      for (const uU of null !== TU && void 0 !== TU ? TU : []) jU[uU >> 1] |= 1 & uU ? 2 : 1;
      return {
        island: UU,
        length: GU.length,
        loop: EU,
        cellsPerMs: qU,
        edges: cU,
        gq: GU,
        bounds: xu([...cU, ...GU], .3),
        changed: !0,
        culled: !1,
        hide: jU,
        items: pU.map((UU => {
          let [RU, tU] = UU;
          return Iu(RU, (0, hg.u)(RU, tU, gU, qU).at)
        }))
      }
    }

    function nu(UU, RU) {
      const {
        items: gU
      } = UU;
      if (0 === gU.length) return;
      const tU = UU.length / UU.cellsPerMs,
        pU = Math.floor((RU - gU[0].at) / tU) - 1;
      if (pU > 0)
        for (const EU of gU) EU.at += pU * tU
    }

    function bu(UU, RU) {
      const gU = Math.min(Math.floor(RU), UU.length - 1),
        tU = UU.hide[gU];
      return 0 !== tU && 0 !== (tU & (RU - gU < .5 ? 1 : 2))
    }

    function ou(UU, RU) {
      const gU = Math.min(Math.floor(RU), UU.length - 1),
        tU = RU - gU,
        pU = tU < .5,
        EU = pU ? UU.edges[gU] : UU.gq[gU],
        PU = pU ? UU.gq[gU] : UU.edges[gU + 1],
        TU = pU ? 2 * tU : 2 * tU - 1;
      Ju[0] = EU[0] + (PU[0] - EU[0]) * TU, Ju[1] = EU[1] + (PU[1] - EU[1]) * TU, Ju[2] = EU[2] + (PU[2] - EU[2]) * TU
    }
    const Zu = Math.PI / 4;
    class au {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new hu, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.Xx = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(UU) {
        const RU = performance.now();
        this.clock.sample(UU.baf2BeltLinesAt, RU), this.queue(UU.baf2BeltLinesAt, UU, 0, null, null, 0), this.applyDue(RU)
      }
      onMoves(UU) {
        const RU = performance.now(),
          gU = UU.baf2BeltMovesAt;
        this.clock.sample(gU, RU);
        for (const [tU, pU, EU, PU] of UU.baf2BeltMoveList) null === pU ? this.queue(gU - EU, null, tU, null, null, null !== PU && void 0 !== PU ? PU : 0) : this.queue(gU - EU, null, tU, pU, null !== PU && void 0 !== PU ? PU : null, 0);
        this.applyDue(RU)
      }
      start(UU) {
        this.pool = new Qu.d(UU, {
          scale: .3,
          yaw: Zu
        }, 64), this.Xx(), window.addEventListener("resize", this.Xx)
      }
      onAfterRender(UU) {
        const {
          pool: RU
        } = this;
        if (!RU) return;
        const gU = performance.now(),
          tU = gU - this.lastRenderAt;
        this.lastRenderAt = gU, tU < 100 && (this.frameMs += .1 * (tU - this.frameMs));
        const pU = gU + this.frameMs;
        this.applyDue(pU);
        const EU = UU.cameraPosition,
          PU = RU.follow(EU);
        this.setView(UU, EU);
        const TU = this.frame++;
        for (let qU = 0; qU < this.shown.length; qU++) {
          const UU = this.shown[qU],
            gU = mu(this.view, UU.bounds, UU.cellsPerMs),
            tU = UU.culled && 0 !== gU;
          if (UU.culled = 0 === gU, !PU && !UU.changed && !tU && (0 === gU || (TU + qU) % gU !== 0)) continue;
          UU.changed = !1, UU.loop && (nu(UU, pU), (0, hg.q)(UU.items, UU.length, pU, UU.cellsPerMs));
          let EU = UU.length;
          for (let TU = 0; TU < UU.items.length; TU++) {
            const gU = UU.items[TU],
              tU = (0, hg.w)(gU.at, EU, pU, UU.cellsPerMs);
            if (EU = tU - hg.k, bu(UU, tU)) {
              null === gU.kind || gU.hidden || (gU.kind.hide(gU.slot), gU.hidden = !0);
              continue
            }
            let qU = gU.kind;
            if (null === qU) {
              if (qU = RU.kindOf(gU.name), null === qU) continue;
              gU.kind = qU, gU.slot = qU.take(), gU.hidden = !0, gU.drawn = NaN
            } else if (tU === gU.drawn && !gU.hidden && !PU) continue;
            ou(UU, tU), qU.write(gU.slot, Ju[0], Ju[1], Ju[2]), gU.hidden = !1, gU.drawn = tU
          }
        }
        RU.commit()
      }
      dispose() {
        var UU;
        window.removeEventListener("resize", this.Xx), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (UU = this.pool) || void 0 === UU || UU.dispose(), this.pool = null
      }
      setView(UU, RU) {
        const {
          cameraDir: gU,
          lastDir: tU
        } = this, pU = UU.cameraDirection;
        for (let cU = 0; cU < 3; cU++) tU[cU] = gU[cU], gU[cU] = pU[cU];
        const EU = gU[0] * tU[0] + gU[1] * tU[1] + gU[2] * tU[2],
          PU = Number.isNaN(EU) ? 0 : Math.acos(Math.min(1, Math.max(-1, EU))),
          {
            width: TU,
            height: qU
          } = this,
          KU = UU.tanHalfFovX;
        ! function(UU, RU, gU, tU, pU, EU, PU) {
          let TU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          UU.x = RU[0], UU.y = RU[1], UU.z = RU[2], UU.dx = gU[0], UU.dy = gU[1], UU.dz = gU[2];
          const qU = Math.min(Math.PI, Math.atan(Math.sqrt(tU * tU + pU * pU)) + eu + TU);
          UU.cosHalf = Math.cos(qU), UU.sinHalf = Math.sin(qU), UU.pxPerBlock = EU / (2 * pU), UU.frameMs = PU
        }(this.view, RU, gU, KU, KU * qU / TU, qU * window.devicePixelRatio, this.frameMs, PU)
      }
      queue(UU, RU, gU, tU, pU, EU) {
        const PU = Math.max(this.clock.toLocal(UU), this.lastPendingAt);
        this.lastPendingAt = PU, this.pending.push({
          at: PU,
          lines: RU,
          line: gU,
          name: tU,
          pos: pU,
          idx: EU
        })
      }
      applyDue(UU) {
        const {
          pending: RU
        } = this;
        for (; this.pendingHead < RU.length && RU[this.pendingHead].at <= UU;) {
          const UU = RU[this.pendingHead++];
          if (UU.lines) this.applyLines(UU.lines, UU.at), UU.lines = null;
          else {
            const RU = this.lines.get(UU.line);
            RU && this.applyMove(RU, UU, UU.at)
          }
        }
        this.pendingHead === RU.length ? (RU.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > RU.length && (RU.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(UU, RU) {
        this.clearIsland(UU.baf2BeltIsland);
        for (const gU of UU.baf2BeltLineList) this.lines.set(gU[0], wu(UU.baf2BeltIsland, gU, RU));
        this.shown = [...this.lines.values()]
      }
      applyMove(UU, RU, gU) {
        let {
          name: tU,
          pos: pU,
          idx: EU
        } = RU;
        UU.changed = !0, UU.loop && (nu(UU, gU), (0, hg.q)(UU.items, UU.length, gU, UU.cellsPerMs)), null !== tU && null !== pU ? (0, hg.s)(UU.items, UU.length, Iu(tU, gU), pU, gU, UU.cellsPerMs) : null !== tU ? UU.items.push(Iu(tU, gU)) : UU.items.length > EU && this.release((0, hg.z)(UU.items, UU.length, gU, UU.cellsPerMs, EU))
      }
      clearIsland(UU) {
        for (const [RU, gU] of this.lines)
          if (gU.island === UU) {
            for (const UU of gU.items) this.release(UU);
            this.lines.delete(RU)
          }
      }
      release(UU) {
        null !== UU.kind && (UU.kind.release(UU.slot), UU.kind = null, UU.slot = -1, UU.hidden = !0, UU.drawn = NaN)
      }
    }
    var Yu = gU(36187),
      Bu = gU(38061);

    function Vu(UU) {
      let {
        depth: RU,
        store: gU,
        t: pU
      } = UU;
      const EU = function(UU) {
        const [RU, gU] = (0, tU.useState)(UU.lastPlayerY());
        return (0, tc.e)(Hp, gU), (0, tU.useEffect)((() => {
          gU(UU.lastPlayerY())
        }), [UU]), RU
      }(gU);
      if (null === EU) return null;
      const [PU, TU] = RU, qU = EU > PU ? PU : null !== TU && EU < TU ? TU : null, KU = {
        y: mE(EU),
        target: null === qU ? "" : mE(qU)
      };
      return (0, bE.jsx)("span", {
        className: wp()("Baf2QuestDepth", {
          Reached: null === qU
        }),
        children: pU(`${Tc}${null===qU?"questDepthReached":"questDepth"}`, KU)
      })
    }

    function ru(UU) {
      let {
        also: RU,
        view: gU,
        t: tU
      } = UU;
      return (0, bE.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, bE.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, bE.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, bE.jsx)("strong", {
            children: tU(`${Tc}questAlsoDownHere`)
          }), (0, bE.jsx)("span", {
            className: "Baf2QuestChips",
            children: RU.map((UU => {
              let [RU, pU, EU, PU] = UU;
              return (0, bE.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": tU(`${Tc}questAlsoItem`, {
                  item: Kc(tU, gU.itemNames[RU], RU),
                  have: String(pU),
                  need: String(EU)
                }),
                children: [(0, bE.jsx)(jc, {
                  item: RU
                }), (0, bE.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${pU}/${EU}`
                }), null !== PU && (0, bE.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: tU(`${Tc}questAlsoDepth`, {
                    y: mE(PU)
                  })
                })]
              }, RU)
            }))
          })]
        })]
      })
    }
    var Xu = gU(3108);

    function vu(UU) {
      let {
        expanded: RU,
        inventoryOpen: gU,
        children: pU
      } = UU;
      const EU = (0, tU.useRef)(null);
      return (0, tU.useEffect)((() => {
        const UU = EU.current,
          RU = null === UU || void 0 === UU ? void 0 : UU.closest(".RightElements"),
          tU = null === UU || void 0 === UU ? void 0 : UU.firstElementChild;
        if (!UU || !RU || !tU) return;
        return (0, Bu.b)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [RU, tU], (() => {
          const pU = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === pU.length) return;
          const EU = Math.max(...pU.map((UU => UU.getBoundingClientRect().bottom))),
            PU = RU.getBoundingClientRect(),
            TU = gU ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (TU) {
            const RU = parseFloat(getComputedStyle(tU).marginLeft) + parseFloat(getComputedStyle(tU).marginRight),
              gU = PU.right - TU.getBoundingClientRect().right - 8 - RU;
            UU.style.setProperty("--baf2-quest-room", `${gU}px`), UU.classList.toggle("NoRoom", gU < 150)
          } else UU.style.removeProperty("--baf2-quest-room"), UU.classList.remove("NoRoom");
          const qU = EU - PU.top + 8,
            KU = function(UU, RU, gU) {
              const tU = RU.getBoundingClientRect(),
                pU = UU.getBoundingClientRect(),
                EU = (0, Xu.d)(pU.left, pU.right, tU.top + gU);
              if (null !== EU && EU < tU.bottom) return EU - tU.top;
              return tU.height - (parseFloat(getComputedStyle(RU).paddingBottom) || 0)
            }(UU, RU, qU) - 8,
            cU = window.innerHeight / 2 - PU.top,
            {
              top: GU,
              maxHeight: jU
            } = function(UU, RU, gU, tU, pU) {
              const EU = Math.min(gU, Math.max(0, RU - UU)),
                PU = pU ? UU : Math.max(UU, Math.min(tU - EU / 2, RU - EU));
              return {
                top: PU,
                maxHeight: Math.max(0, RU - PU)
              }
            }(qU, KU, function(UU) {
              const RU = UU.firstElementChild,
                gU = RU ? RU.scrollHeight - RU.clientHeight : 0;
              return UU.getBoundingClientRect().height + Math.max(0, gU)
            }(tU), cU, wE());
          UU.style.top = `${GU}px`, UU.style.maxHeight = `${jU}px`
        }))
      }), [gU]), (0, bE.jsx)("div", {
        ref: EU,
        className: wp()("Baf2QuestHud", {
          Expanded: RU
        }),
        children: pU
      })
    }

    function du(UU) {
      let {
        amount: RU,
        t: gU
      } = UU;
      return (0, bE.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, bE.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, bE.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: gU(`${Tc}questStepsDone`, {
            amount: String(RU)
          })
        })]
      })
    }

    function Hu(UU) {
      let {
        pulse: RU
      } = UU;
      return 0 === RU ? null : (0, bE.jsx)("span", {
        className: "Baf2QuestTrackerPulse",
        "aria-hidden": "true"
      }, RU)
    }

    function Su(UU) {
      var RU;
      let {
        store: gU
      } = UU;
      const pU = (0, tc.h)(dp, gU.get()),
        [EU, PU] = (0, tU.useState)(!1),
        {
          t: TU
        } = (0, Zp.B)(),
        qU = function() {
          const [UU, RU] = (0, tU.useState)(wE);
          return (0, tU.useEffect)((() => (RU(wE()), nE(RU))), []), UU
        }(),
        {
          openInGameMenuName: KU,
          openEverythingMenuName: cU
        } = (0, mp.l)(["openInGameMenuName", "openEverythingMenuName"]),
        GU = "inventory" === KU && null === cU,
        jU = null !== KU && !GU || null !== cU;
      if (! function(UU) {
          return null !== UU.name || null !== UU.side
        }(pU) || jU || "off" === pU.tutorial) return null;
      const uU = ip(pU.rows),
        CU = uU.filter((UU => UU.done)).length,
        hU = function(UU, RU) {
          const gU = Mp(UU);
          let tU = 0;
          return UU.filter(((UU, pU) => !!UU.justFinished || !(UU.done || pU < gU || tU > RU) && (tU++, !0)))
        }(pU.rows, qU ? 0 : 2),
        QU = qU ? hU : function(UU, RU) {
          const gU = RU.filter((UU => !UU.justFinished));
          if (gU.length < 2) return [...RU];
          const tU = UU.indexOf(gU[0]),
            pU = UU.indexOf(gU[gU.length - 1]),
            EU = new Set(ip(UU));
          return UU.filter(((UU, gU) => RU.includes(UU) || UU.done && EU.has(UU) && gU > tU && gU < pU))
        }(pU.rows, hU),
        eU = EU ? pU.rows : QU,
        WU = EU || qU ? [] : function(UU, RU) {
          const gU = new Array(RU.length + 1).fill(0),
            tU = new Set(ip(UU));
          let pU = 0;
          for (const EU of UU) pU < RU.length && EU === RU[pU] ? pU++ : EU.done && tU.has(EU) && gU[pU]++;
          return gU
        }(pU.rows, QU),
        fU = EU || QU.length < pU.rows.length || null !== pU.reward,
        xU = Fp(pU),
        mU = xU ? TU(`${Tc}questLineComplete`) : pU.tier ? hc(TU, pU.tier) : TU(`${Tc}currentQuest`),
        IU = function(UU) {
          var RU, gU;
          if (Fp(UU)) return null;
          const tU = null === (RU = UU.chapters) || void 0 === RU ? void 0 : RU.find((RU => {
            let [gU] = RU;
            return gU === UU.tier
          }));
          if (!tU) return null;
          const pU = tU[1].filter((UU => !UU[4]));
          if (0 === pU.length) return null;
          const EU = null === (gU = UU.name) || void 0 === gU ? void 0 : gU[0],
            PU = UU => pU.findIndex((RU => RU[0] === EU && (!UU || !RU[3]))),
            TU = PU(!0),
            qU = TU >= 0 ? TU : PU(!1);
          if (qU >= 0) return [qU + 1, pU.length];
          const KU = pU.filter((UU => UU[3])).length;
          return [Math.min(KU + 1, pU.length), pU.length]
        }(pU);
      return (0, bE.jsx)(Yu.e, {
        placement: "topRight",
        children: (0, bE.jsx)(vu, {
          expanded: EU,
          inventoryOpen: GU,
          children: (0, bE.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: qc,
            children: [null !== pU.name && (0, bE.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [(0, bE.jsx)(Hu, {
                pulse: pU.pulse
              }), (0, bE.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, bE.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [mU, IU && (0, bE.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": TU(`${Tc}questPlaceLabel`, {
                      n: String(IU[0]),
                      total: String(IU[1])
                    }),
                    children: TU(`${Tc}questPlace`, {
                      n: String(IU[0]),
                      total: String(IU[1])
                    })
                  }), pU.tier && pU.core && !xU && (0, bE.jsx)(Qc, {
                    core: pU.core,
                    t: TU
                  })]
                })
              }), (0, bE.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: TU(`${Tc}${pU.name[0]}`, cc(pU.name[1]))
              }), (uU.length > 1 || fU) && (0, bE.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [uU.length > 1 && (0, bE.jsx)(ec, {
                  rows: uU,
                  t: TU
                }), fU && (0, bE.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": EU,
                  onClick: () => {
                    PU(!EU)
                  },
                  children: [(0, bE.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: TU(`${Tc}questStepsToggle`, {
                      done: String(CU),
                      total: String(uU.length)
                    })
                  }), (0, bE.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: EU ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, bE.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [eU.map(((UU, RU) => {
                  var EU;
                  const PU = UU.current && pU.depth;
                  return (0, bE.jsxs)(tU.Fragment, {
                    children: [(null !== (EU = WU[RU]) && void 0 !== EU ? EU : 0) > 0 && (0, bE.jsx)(du, {
                      amount: WU[RU],
                      t: TU
                    }), (0, bE.jsx)(Wc, {
                      row: UU,
                      view: pU,
                      t: TU,
                      extra: PU && (0, bE.jsx)(Vu, {
                        depth: PU,
                        store: gU,
                        t: TU
                      })
                    })]
                  }, UU.id)
                })), (null !== (RU = WU[eU.length]) && void 0 !== RU ? RU : 0) > 0 && (0, bE.jsx)(du, {
                  amount: WU[eU.length],
                  t: TU
                }), pU.also.length > 0 && (0, bE.jsx)(ru, {
                  also: pU.also,
                  view: pU,
                  t: TU
                })]
              }), EU && pU.reward && (0, bE.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [TU(`${Tc}questReward`), (0, bE.jsx)(jc, {
                  item: pU.reward
                }), Kc(TU, pU.itemNames[pU.reward], pU.reward)]
              })]
            }), pU.side && (0, bE.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [yp(pU, Date.now()) && (0, bE.jsx)(Hu, {
                pulse: pU.sideCameUpAt
              }), (0, bE.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: TU(`${Tc}questSide`)
              }), (0, bE.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: TU(`${Tc}${pU.side.name[0]}`, cc(pU.side.name[1]))
              }), (0, bE.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, bE.jsx)(Wc, {
                  row: pU.side.row,
                  view: pU,
                  t: TU
                })
              })]
            })]
          })
        })
      })
    }
    const su = "baf2ToastView";
    class yu {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = UU, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: UU,
          holdMs: RU
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const UU = this.dropCovered();
          UU && this.show(UU.message, UU.holdMs)
        }), 250));
        const gU = this.dropCovered();
        null !== gU && (gU.holdMs > 0 || "baf2ToastCelebrate" === gU.message.baf2ToastStyle) && "baf2ToastCelebrate" !== UU.baf2ToastStyle && this.show(gU.message, gU.holdMs);
        const tU = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== UU.baf2ToastStyle && tU > 0) return this.pending = {
          message: UU,
          holdMs: RU
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const UU = this.pending;
          this.pending = null, UU && this.present(UU.message, UU.holdMs)
        }), tU));
        this.present(UU, RU)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(UU, RU) {
        this.clearTimers(), this.pending = null;
        const gU = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: UU.baf2ToastText,
          style: UU.baf2ToastStyle,
          swapped: gU,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === UU.baf2ToastStyle ? 1500 : RU), this.yh();
        const tU = Math.min(8e3, Math.max(1e3, UU.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.leave()
        }), tU)
      }
      leave() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.yh(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.yh()
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
      yh() {
        Xp.p.yh(su, this.view, !0)
      }
    }
    var ku = gU(74);
    const Fu = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function iu(UU) {
      let {
        store: RU
      } = UU;
      const gU = (0, tc.h)(su, RU.get()),
        {
          openInGameMenuName: tU,
          openEverythingMenuName: pU
        } = (0, mp.l)(["openInGameMenuName", "openEverythingMenuName"]),
        EU = gU && (0, bE.jsxs)("div", {
          className: wp()("Baf2Toast", Fu[gU.style], {
            Swapped: gU.swapped,
            Leaving: gU.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === gU.style && (0, bE.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, bE.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, bE.jsx)(Bp.e, {
              text: gU.text
            })
          })]
        }, gU.id);
      return null !== tU && null === pU ? (0, ku.createPortal)((0, bE.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: EU
      }), document.body) : (0, bE.jsx)(Yu.e, {
        children: EU
      })
    }
    const Au = "baf2AreaView";
    class zu {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.WT = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.WT = null
      }
      arrive(UU, RU) {
        RU && function(UU) {
          return "home" === UU.baf2AreaPlace && void 0 !== UU.baf2AreaNameText
        }(UU) ? this.WT = UU : this.show(UU)
      }
      release() {
        const UU = this.WT;
        null !== UU && this.show(UU)
      }
      show(UU) {
        this.clearTimer(), this.WT = null;
        const RU = void 0 === UU.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: UU,
          ms: RU
        }, this.yh(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.yh()
        }), RU)
      }
      dispose() {
        this.clearTimer(), this.WT = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      yh() {
        Xp.p.yh(Au, this.view, !0)
      }
    }

    function Mu(UU) {
      var RU;
      let {
        store: gU
      } = UU;
      const {
        t: tU
      } = (0, Zp.B)(), pU = (0, tc.h)(Au, gU.get());
      if (!pU) return null;
      const {
        area: EU
      } = pU, PU = EU.baf2AreaResetMinutes;
      return (0, bE.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": EU.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${pU.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, bE.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), EU.baf2AreaHeading && (0, bE.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: tU(EU.baf2AreaHeading)
        }), (0, bE.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (RU = EU.baf2AreaNameText) && void 0 !== RU ? RU : tU(EU.baf2AreaName)
        }), EU.baf2AreaNote && (0, bE.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: tU(EU.baf2AreaNote)
        }), void 0 !== PU && (0, bE.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: tU("buildAFactory2Game:areaWildsReset", {
            time: IE(tU, 60 * PU)
          })
        })]
      }, pU.id)
    }
    const Du = "baf2GearGauge";
    class Lu {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      Tm(UU) {
        var RU;
        if (this.clearLinger(), null === UU.gearPowerKind) return void this.set(null);
        const gU = "jetpack" === UU.gearPowerKind && (tU = UU.gearChargeState, pU = UU.gearCharge, "flying" === tU || "charging" === tU || "outOfCharge" === tU || "ceiling" === tU || "offPlot" === tU || "noPower" === tU && pU <= 0);
        var tU, pU;
        const EU = !0 === (null === (RU = this.view) || void 0 === RU ? void 0 : RU.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          PU = gU || "jetpack" === UU.gearPowerKind && EU;
        this.set({
          gauge: UU,
          jetShown: PU
        }), PU && !gU && (this.lingerTimer = setTimeout((() => {
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
        this.view = UU, Xp.p.yh(Du, UU, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const Nu = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function lu(UU) {
      let {
        store: RU
      } = UU;
      const gU = (0, tc.h)(Du, RU.get());
      return gU ? "jetpack" === gU.gauge.gearPowerKind ? (0, bE.jsx)(Ou, {
        view: gU
      }) : (0, bE.jsx)(UC, {
        gauge: gU.gauge
      }) : null
    }

    function Ou(UU) {
      let {
        view: RU
      } = UU;
      const {
        t: gU
      } = (0, Zp.B)(), {
        gauge: tU
      } = RU, pU = tU.gearChargeMax > 0 ? Math.max(0, Math.min(1, tU.gearCharge / tU.gearChargeMax)) : 0, EU = Nu[tU.gearChargeState], PU = EU ? gU(EU) : null;
      return (0, bE.jsxs)("div", {
        className: wp()("Baf2JetArc", {
          Shown: RU.jetShown,
          Low: pU < .2,
          Warm: pU >= .2 && pU < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - pU)
        },
        "aria-hidden": !RU.jetShown,
        children: [(0, bE.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, bE.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: RC,
            pathLength: 100
          }), (0, bE.jsx)("path", {
            className: "Baf2JetArcFill",
            d: RC,
            pathLength: 100
          })]
        }), (0, bE.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * pU), "%"]
        }), PU && (0, bE.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: PU
        })]
      })
    }

    function UC(UU) {
      let {
        gauge: RU
      } = UU;
      const {
        t: gU
      } = (0, Zp.B)(), tU = function(UU, RU) {
        switch (RU.gearPowerKind) {
          case "skyPack":
            return UU("buildAFactory2Game:gearSkyPack", {
              charge: RU.gearCharge,
              max: RU.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return UU("buildAFactory2Game:gearIslandDraw", {
              power: NU(RU.gearIslandPower),
              cost: NU(RU.gearCostPerUse)
            });
          case "barrier":
            return UU("buildAFactory2Game:gearBarrier", {
              shield: Math.round(RU.gearCharge),
              max: RU.gearChargeMax,
              power: NU(RU.gearIslandPower)
            });
          default:
            return null
        }
      }(gU, RU);
      return null === tU ? null : (0, bE.jsx)(Yu.e, {
        children: (0, bE.jsx)("div", {
          className: wp()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === RU.gearChargeState || "outOfCharge" === RU.gearChargeState
          }),
          role: "status",
          children: tU
        })
      })
    }
    const RC = (() => {
      const UU = UU => {
        const RU = UU * Math.PI / 180;
        return `${(40*Math.cos(RU)).toFixed(2)} ${(40*Math.sin(RU)).toFixed(2)}`
      };
      return `M ${UU(160)} A 40 40 0 1 1 ${UU(380)}`
    })();
    class gC {
      constructor(UU) {
        this.onElement = UU, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      Tm(UU) {
        let RU = UU.baf2LabelsReset || UU.baf2LabelsIsland !== this.island;
        RU && (this.labels.clear(), this.island = UU.baf2LabelsIsland);
        for (const [gU, tU, pU, EU, PU] of UU.baf2LabelsList) {
          const UU = `${gU},${tU},${pU}`,
            TU = this.labels.get(UU);
          null === EU ? RU = this.labels.delete(UU) || RU : TU && TU.item === EU && (TU.count === PU || TU.count >= 0 && PU >= 0) ? TU.count !== PU && (TU.count = PU, this.writeCount(UU, PU)) : (this.labels.set(UU, {
            key: UU,
            pos: [gU, tU, pU],
            item: EU,
            count: PU
          }), this.writeCount(UU, PU), RU = !0)
        }
        if (this.changes++, RU) {
          this.snapshot = [...this.labels.values()];
          for (const UU of this.listeners) UU()
        }
      }
      bindCount(UU) {
        const RU = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${UU}`;
        let gU = this.countRefs.get(RU);
        return gU || (gU = gU => {
          var tU, pU;
          gU ? (this.countElements.set(RU, gU), this.writeCount(UU, null !== (tU = null === (pU = this.labels.get(UU)) || void 0 === pU ? void 0 : pU.count) && void 0 !== tU ? tU : -1)) : (this.countElements.delete(RU), this.countRefs.delete(RU))
        }, this.countRefs.set(RU, gU)), gU
      }
      setCountWords(UU) {
        this.countWords = UU;
        for (const [RU, gU] of this.labels) this.writePart(`words|${RU}`, UU(gU.count), gU.count)
      }
      writeCount(UU, RU) {
        this.writePart(`bare|${UU}`, xE(RU), RU), this.countElements.has(`words|${UU}`) && this.writePart(`words|${UU}`, this.countWords(RU), RU)
      }
      writePart(UU, RU, gU) {
        const tU = this.countElements.get(UU);
        if (!tU || gU < 0) return;
        const pU = tU.firstChild;
        pU && 3 === pU.nodeType && !pU.nextSibling ? pU.nodeValue !== RU && (pU.nodeValue = RU) : tU.textContent !== RU && (tU.textContent = RU)
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
        let RU = this.refs.get(UU);
        return RU || (RU = RU => {
          const gU = this.elements.get(UU);
          var tU, pU;
          gU && (null === (tU = this.onElement) || void 0 === tU || tU.call(this, gU, !1));
          RU ? (this.elements.set(UU, RU), null === (pU = this.onElement) || void 0 === pU || pU.call(this, RU, !0)) : (this.elements.delete(UU), this.refs.delete(UU))
        }, this.refs.set(UU, RU)), RU
      }
      onAfterRender(UU, RU, gU, tU) {
        for (const pU of this.snapshot) {
          const EU = this.elements.get(pU.key);
          if (!EU) continue;
          if (tU(pU.key)) {
            (0, Ru.g)(EU, !0);
            continue
          }
          const PU = Ku(EU, UU, RU, pU.pos, 1.1, 24);
          PU && gU.add(PU, EU, 0, !1)
        }
      }
    }
    const tC = (0, tU.memo)((function(UU) {
        let {
          item: RU
        } = UU;
        return (0, bE.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, bE.jsx)(Yp.c, {
            itemName: RU,
            amount: 0
          })
        })
      })),
      pC = (0, tU.memo)((function(UU) {
        let {
          label: RU,
          bindRef: gU,
          countRef: tU,
          wordsRef: pU
        } = UU;
        return (0, bE.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: gU,
          hidden: !0,
          children: [(0, bE.jsx)(tC, {
            item: RU.item
          }), RU.count >= 0 && (0, bE.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, bE.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: pU
            }), (0, bE.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: tU
            })]
          })]
        })
      })),
      EC = (0, tU.memo)((function(UU) {
        let {
          store: RU
        } = UU;
        const {
          t: gU
        } = (0, Zp.B)(), [pU, EU] = (0, tU.useState)((() => RU.list()));
        return (0, tU.useEffect)((() => (EU(RU.list()), RU.subscribe((() => {
          EU(RU.list())
        })))), [RU]), (0, tU.useEffect)((() => {
          RU.setCountWords((UU => gU("buildAFactory2Game:labelSiloCount", {
            count: xE(UU)
          })))
        }), [RU, gU]), (0, bE.jsx)("div", {
          className: "Baf2IslandLabels",
          children: pU.map((UU => -2 === UU.count ? null : (0, bE.jsx)(pC, {
            label: UU,
            bindRef: RU.bind(UU.key),
            countRef: RU.bindCount(UU.key),
            wordsRef: RU.bindCount(UU.key, "words")
          }, UU.key)))
        })
      })),
      PC = {
        read: () => !0,
        write: () => {}
      };

    function TC(UU) {
      return `${UU[0]},${UU[1]},${UU[2]}`
    }

    function qC(UU) {
      let [RU, gU, tU, pU, EU, PU, TU, qU, KU, cU, GU, jU] = UU;
      const uU = void 0 === GU || void 0 === jU ? function(UU) {
        return [Math.floor((UU - 1) / 2), 0]
      }(EU) : [GU, jU];
      return {
        kind: 0 === qU ? "reactor" : "battery",
        box: kg([RU, gU, tU], pU, EU, PU, TU, uU),
        formed: 1 === KU,
        level: cU
      }
    }
    class KC {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PC;
        this.guideSetting = UU, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = UU.read()
      }
      Tm(UU) {
        var RU;
        const gU = new Map;
        for (const tU of UU.baf2RxPlanList) {
          const UU = qC(tU);
          gU.set(TC(UU.box.ctrl), UU)
        }
        this.plans = gU, this.layouts = new Map((null !== (RU = UU.baf2RxLayouts) && void 0 !== RU ? RU : []).map((UU => {
          let [RU, gU, tU, pU] = UU;
          return [TC([RU, gU, tU]), pU]
        }))), this.predicted.clear(), UU.baf2RxFormedAt && (this.formed = {
          ctrl: UU.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const tU of [...this.startersOff]) {
          const UU = gU.get(tU);
          UU && !UU.formed || this.startersOff.delete(tU)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((UU => this.planByKey(UU)))
      }
      planAt(UU) {
        return this.planByKey(TC(UU))
      }
      predictSize(UU, RU) {
        this.predicted.set(TC(UU), RU), this.changed()
      }
      unpredict(UU) {
        this.predicted.delete(TC(UU)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(UU) {
        var RU;
        const gU = TC(UU);
        return this.predicted.has(gU) ? null : null !== (RU = this.layouts.get(gU)) && void 0 !== RU ? RU : null
      }
      showsStarter(UU) {
        return !this.startersOff.has(TC(UU))
      }
      setStarter(UU, RU) {
        const gU = TC(UU);
        RU ? this.startersOff.delete(gU) : this.startersOff.add(gU), this.changed()
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
        const RU = this.plans.get(UU);
        if (!RU) return null;
        const gU = this.predicted.get(UU);
        return gU ? {
          ...RU,
          box: ig(RU.box, RU.kind, gU[0], gU[1], gU[2])
        } : RU
      }
      changed() {
        this.version++;
        for (const UU of this.listeners) UU()
      }
    }
    var cC = gU(189);
    const GC = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function jC(UU, RU, gU, tU) {
      const pU = UU.length / 3;
      for (let EU = 0; EU < GC.length / 3; EU++) UU.push(GC[3 * EU] * tU[0] / 2 + gU[0], GC[3 * EU + 1] * tU[1] / 2 + gU[1], GC[3 * EU + 2] * tU[2] / 2 + gU[2]);
      for (let EU = pU; EU < pU + 24; EU += 4) RU.push(EU, EU + 1, EU + 2, EU, EU + 2, EU + 3)
    }

    function uC(UU, RU, gU) {
      const tU = RU[0][0],
        pU = [],
        EU = [];
      for (const [PU, TU] of RU) jC(pU, EU, [PU[0] - tU[0], PU[1] - tU[1], PU[2] - tU[2]], TU);
      return UU.createGameMesh({
        positions: pU,
        indices: EU
      }, gU, tU)
    }

    function CC(UU, RU) {
      const gU = UU.w - 2,
        tU = UU.d - 2;
      return 1 === function(UU, RU, gU, tU) {
        const [pU, EU, PU] = UU;
        if (Number(pU <= 2) + Number(EU <= 2) + Number(PU <= 2) >= 2) return function(UU, RU, gU) {
          return (UU + RU + gU) % 2 === 0 ? 1 : 3
        }(RU, gU, tU);
        const [TU, qU] = pU >= EU && pU >= PU ? [gU, tU] : EU >= PU ? [RU, tU] : [RU, gU];
        return TU % 2 === 0 && qU % 2 === 0 ? 1 : 3
      }([gU, UU.h - 2, tU], RU % gU, Math.floor(RU / (gU * tU)), Math.floor(RU / gU) % tU) ? "rod" : "channel"
    }

    function hC(UU, RU, gU) {
      if ("reactor" !== UU.kind || UU.formed || !RU) return !1;
      const tU = Mg(UU.box);
      for (let pU = 0; pU < tU; pU++) {
        const UU = gU(pU);
        if (null !== UU && ag(UU)) return !1
      }
      return !0
    }

    function QC(UU, RU, gU, tU, pU) {
      var EU;
      let PU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const TU = Ut(UU.box, RU),
        qU = pt(UU.kind, TU, gU);
      if ("wrong" === qU || "blocked" === qU) return "wrong";
      if (!pU) return null;
      if ("inside" === TU && "reactor" === UU.kind && "Air" === Yg(gU)) {
        if (null !== PU) {
          var KU;
          const gU = LG[NG(PU, Rt(UU.box, RU))];
          return gU && null !== (KU = bq(gU)) && void 0 !== KU ? KU : null
        }
        if (tU) return CC(UU.box, Rt(UU.box, RU))
      }
      if ("missing" !== qU) return null;
      const cU = Et(UU.kind, TU);
      return null === cU ? null : null !== (EU = bq(cU)) && void 0 !== EU ? EU : null
    }
    const eC = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function WC(UU, RU, gU) {
      const tU = gU => {
        const tU = RU(lg(UU.box, gU));
        return null !== tU && function(UU, RU) {
          return "reactor" !== UU.kind || RU !== Lg(UU.box) && "inside" !== Ut(UU.box, RU)
        }(UU, gU) && "ok" !== pt(UU.kind, Ut(UU.box, gU), tU)
      };
      if (gU) {
        const EU = Og(UU.box, [Math.floor(gU[0]), Math.floor(gU[1]), Math.floor(gU[2])]);
        if (EU >= 0 && (tU(EU) || (pU = EU, "reactor" === UU.kind && "inside" === Ut(UU.box, pU) && "Air" === RU(lg(UU.box, pU))))) return EU
      }
      var pU;
      const EU = Mg(UU.box);
      for (let PU = 0; PU < EU; PU++)
        if (tU(PU)) return PU;
      return -1
    }

    function fC(UU, RU) {
      return Math.floor(RU / (UU.w * UU.d))
    }

    function xC(UU, RU, gU) {
      return gU >= 0 && fC(UU, RU) > fC(UU, gU)
    }

    function mC(UU, RU) {
      return RU >= 0 && UU.h >= 3 && fC(UU, RU) === UU.h - 1
    }

    function IC(UU) {
      const RU = Yg(UU);
      return RU === Wg || "Collider" === RU || "Laser" === RU || RU.startsWith("_Collider ")
    }

    function JC(UU, RU, gU, tU) {
      if (tU(UU)) return null;
      if (!eC.every((RU => {
          let [tU, pU, EU] = RU;
          const PU = gU([UU[0] + tU, UU[1] + pU, UU[2] + EU]);
          return null !== PU && !Hg("reactor", PU) && "reactor" !== Bg(PU)
        }))) return null;
      const pU = Sg("reactor").min,
        EU = kg([UU[0], UU[1], UU[2]], function(UU, RU) {
          const gU = RU[0] - (UU[0] + .5),
            tU = RU[2] - (UU[2] + .5);
          return Math.abs(gU) >= Math.abs(tU) ? gU >= 0 ? 2 : 4 : tU >= 0 ? 1 : 3
        }(UU, RU), pU, pU, pU, Fg("reactor", pU)),
        PU = Lg(EU);
      let TU = !0;
      for (let qU = 0; qU < Mg(EU) && TU; qU++) {
        if (qU === PU) continue;
        const UU = lg(EU, qU),
          RU = gU(UU);
        TU = !tU(UU) && (null === RU || !IC(RU))
      }
      return {
        box: EU,
        fits: TU
      }
    }
    const wC = nq,
      nC = "baf2Goal",
      bC = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      oC = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      ZC = .4;

    function aC(UU, RU) {
      let [gU, tU, pU] = UU;
      const EU = rq([gU - .02, tU - .02, pU - .02], [gU + 1.02, tU + 1.02, pU + 1.02], .07);
      return RU && (EU.push([
        [gU + .5, tU + 1 + .7, pU + .5],
        [.08, 1.4, .08]
      ]), EU.push([
        [gU + .5, tU + 1 + 1.4 + .2, pU + .5],
        [ZC, ZC, ZC]
      ])), EU
    }

    function YC(UU, RU) {
      let [gU, tU, pU] = RU;
      return UU.isBlockInLoadedChunk(gU, tU, pU) ? UU.blockIdToBlockName(UU.getBlockId(gU, tU, pU)) : null
    }
    let BC = null;
    const VC = new Set;
    let rC = null;

    function XC(UU) {
      BC = UU;
      for (const RU of VC) RU(UU)
    }
    class vC {
      constructor(UU) {
        var RU;
        this.plans = UU, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (RU = UU => {
          var RU, gU;
          this.setGoal(null !== (RU = null === UU || void 0 === UU ? void 0 : UU.goal) && void 0 !== RU ? RU : null, null !== (gU = null === UU || void 0 === UU ? void 0 : UU.startsBattery) && void 0 !== gU && gU)
        }, rC ??= [Xp.p.subscribe("setDirectionArrow", (UU => {
          let {
            id: RU,
            position: gU,
            text: tU
          } = UU;
          RU === nC && XC({
            goal: [Math.floor(gU[0]), Math.floor(gU[1]), Math.floor(gU[2])],
            startsBattery: JSON.stringify(null !== tU && void 0 !== tU ? tU : null).includes("arrowStartBattery")
          })
        })), Xp.p.subscribe("clearDirectionArrow", (UU => {
          let {
            id: RU
          } = UU;
          null !== RU && RU !== nC || XC(null)
        }))], VC.add(RU), RU(BC), () => {
          VC.delete(RU)
        })
      }
      onAfterRender(UU, RU) {
        const gU = performance.now();
        if (this.cues.length > 0) {
          const RU = .55 + .45 * Math.sin(gU / 1100 * Math.PI * 2);
          for (const gU of this.cues) UU.setGameMesh(gU, {
            visibility: RU
          })
        }
        if (gU - this.lastCheckMs < 150) return;
        this.lastCheckMs = gU;
        const tU = this.plans.all().filter((UU => {
            const [gU, tU, pU] = UU.box.ctrl;
            return (!UU.formed || null !== this.plans.layoutOf(UU.box.ctrl)) && (gU - RU[0]) ** 2 + (tU - RU[1]) ** 2 + (pU - RU[2]) ** 2 <= 2304
          })),
          pU = function(UU, RU) {
            const gU = cC.e.jC,
              tU = new Map;
            for (const EU of RU) {
              const RU = lg(EU.box, 0),
                PU = lg(EU.box, Mg(EU.box) - 1),
                TU = [Math.min(RU[0], PU[0]), Math.min(RU[1], PU[1]), Math.min(RU[2], PU[2])].map((UU => Math.floor(UU / gU))),
                qU = [Math.max(RU[0], PU[0]), Math.max(RU[1], PU[1]), Math.max(RU[2], PU[2])].map((UU => Math.floor(UU / gU)));
              for (let gU = TU[0]; gU <= qU[0]; gU++)
                for (let RU = TU[1]; RU <= qU[1]; RU++)
                  for (let EU = TU[2]; EU <= qU[2]; EU++) {
                    var pU;
                    tU.set(`${gU},${RU},${EU}`, null !== (pU = UU.getChunkVersion(gU, RU, EU)) && void 0 !== pU ? pU : -1)
                  }
            }
            return tU
          }(UU, tU);
        this.plans.getVersion() === this.storeVersion && (function(UU, RU) {
          if (UU.size !== RU.size) return !1;
          for (const [gU, tU] of UU)
            if (RU.get(gU) !== tU) return !1;
          return !0
        }(pU, this.chunkVersions) || gU - this.lastRescanMs < 600) || (this.lastRescanMs = gU, this.storeVersion = this.plans.getVersion(), this.chunkVersions = pU, this.redraw(UU, tU))
      }
      dispose(UU) {
        this.unwatch(), BC = null, this.clearMeshes(UU), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(UU, RU) {
        var gU;
        (null === UU || void 0 === UU ? void 0 : UU.join()) === (null === (gU = this.goal) || void 0 === gU ? void 0 : gU.join()) && RU === this.startsBattery || (this.goal = UU, this.startsBattery = RU, this.storeVersion = -1)
      }
      redraw(UU, RU) {
        const gU = RU => YC(UU, RU),
          tU = new Map,
          pU = [],
          EU = this.plans.guideOn();
        for (const KU of RU) {
          const UU = EU && hC(KU, this.plans.showsStarter(KU.box.ctrl), (UU => gU(lg(KU.box, UU)))),
            RU = "reactor" === KU.kind ? this.plans.layoutOf(KU.box.ctrl) : null,
            PU = EU && !KU.formed ? WC(KU, gU, this.goal) : -1;
          PU >= 0 && pU.push([lg(KU.box, PU), mC(KU.box, PU)]);
          const TU = Mg(KU.box);
          for (let pU = 0; pU < TU; pU++) {
            const TU = lg(KU.box, pU),
              qU = gU(TU),
              cU = null === qU ? null : QC(KU, pU, qU, UU, EU, RU);
            if (null !== cU) {
              const UU = "wrong" !== cU && xC(KU.box, pU, PU),
                RU = UU ? `${cU}Dim` : cU;
              let gU = tU.get(RU);
              gU || (gU = {
                draw: {
                  ghost: cU,
                  dim: UU
                },
                list: []
              }, tU.set(RU, gU)), gU.list.push(TU)
            }
          }
        }
        if (EU && this.startsBattery && this.goal) {
          const [UU, RU, pU] = this.goal, EU = [];
          for (const [tU, PU, TU] of bC) {
            const qU = [UU + tU, RU + PU, pU + TU];
            "Air" === gU(qU) && EU.push(qU)
          }
          if (EU.length > 0) {
            var PU;
            const UU = null !== (PU = tU.get("cell")) && void 0 !== PU ? PU : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            UU.list.push(...EU), tU.set("cell", UU)
          }
        }
        const TU = [...tU.keys()].sort(),
          qU = [...TU.map((UU => `${UU}:${tU.get(UU).list.join(";")}`)), `cue:${pU.join(";")}`].join("|");
        if (qU !== this.shownKey) {
          this.shownKey = qU, this.clearMeshes(UU);
          for (const RU of TU) {
            const {
              draw: gU,
              list: pU
            } = tU.get(RU);
            this.meshes.push(this.build(UU, gU, pU))
          }
          for (const [RU, gU] of pU) this.cues.push(uC(UU, aC(RU, gU), oC))
        }
      }
      build(UU, RU, gU) {
        let {
          ghost: tU,
          dim: pU
        } = RU;
        const {
          size: EU,
          colour: PU,
          alpha: TU
        } = wC[tU], qU = gU[0], KU = [], cU = [];
        for (const [GU, jU, uU] of gU) jC(KU, cU, [GU - qU[0] + .5, jU - qU[1] + .5, uU - qU[2] + .5], [EU, EU, EU]);
        return UU.createGameMesh({
          positions: KU,
          indices: cU
        }, {
          rgb: PU,
          alpha: TU * (pU ? .3 : 1)
        }, qU)
      }
      clearMeshes(UU) {
        for (const RU of [...this.meshes, ...this.cues]) UU.disposeGameMesh(RU);
        this.meshes = [], this.cues = []
      }
    }
    const dC = [.56, .83, 1],
      HC = [1, .3, .25];
    class SC {
      constructor(UU) {
        this.plans = UU, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(UU, RU, gU) {
        var tU;
        const pU = performance.now();
        if (pU - this.lastCheckMs < 150) return;
        this.lastCheckMs = pU;
        const EU = RU => YC(UU, RU),
          PU = null === (tU = UU.QRU(RU)) || void 0 === tU ? void 0 : tU.name,
          TU = PU && "Reactor Frame" === Yg(PU) ? UU.getTargetedBlock() : null,
          qU = TU ? [TU.cj[0], TU.cj[1], TU.cj[2]] : null,
          KU = null !== qU && "Air" === EU(qU) && qU.every(((UU, RU) => Math.abs(UU + .5 - gU[RU]) <= 8)) ? JC(qU, gU, EU, (UU => this.inPlan(UU))) : null,
          cU = KU ? `${KU.box.ctrl.join()}|${KU.box.rot}|${KU.fits}` : "";
        cU !== this.shownKey && this.show(UU, cU, KU)
      }
      dispose(UU) {
        this.clear(UU), this.shownKey = ""
      }
      inPlan(UU) {
        return this.plans.all().some((RU => Og(RU.box, UU) >= 0))
      }
      show(UU, RU, gU) {
        if (this.clear(UU), this.shownKey = RU, !gU) return;
        const {
          box: tU,
          fits: pU
        } = gU, EU = pU ? dC : HC, {
          lo: PU,
          hi: TU
        } = Vq(tU);
        this.meshes.push(uC(UU, rq(PU, TU, .05), {
          rgb: EU,
          alpha: 1
        }));
        const qU = [],
          KU = lg(tU, 0)[1];
        for (let cU = 0; cU < tU.w * tU.d; cU++) {
          const [UU, , RU] = lg(tU, cU);
          qU.push([
            [UU + .5, KU + .02 + .01, RU + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(uC(UU, qU, {
          rgb: EU,
          alpha: .25
        }))
      }
      clear(UU) {
        for (const RU of this.meshes) UU.disposeGameMesh(RU);
        this.meshes = []
      }
    }
    const sC = "buildAFactory2Game:";

    function yC(UU, RU, gU) {
      const tU = UU => {
          const [gU, tU, pU] = UU.box.ctrl;
          return gU === RU[0] && tU === RU[1] && pU === RU[2]
        },
        pU = UU.find((UU => tU(UU) || Og(UU.box, RU) >= 0));
      if (!pU) return null;
      const EU = function(UU, RU, gU) {
        const {
          w: tU,
          h: pU,
          d: EU
        } = UU.box, PU = "reactor" === UU.kind ? `${sC}rxTitle` : `${sC}batTitle`;
        if (UU.formed) return {
          key: `${sC}lookPlanFormed`,
          kindKey: PU,
          w: tU,
          h: pU,
          d: EU,
          count: 0
        };
        let TU = 0,
          qU = 0;
        for (let cU = 0; cU < Mg(UU.box); cU++) {
          const RU = gU(lg(UU.box, cU)),
            tU = null === RU ? "ok" : pt(UU.kind, Ut(UU.box, cU), RU);
          TU += "missing" === tU ? 1 : 0, qU += "wrong" === tU || "blocked" === tU ? 1 : 0
        }
        const KU = function(UU, RU, gU) {
          if (RU < 0 || null === gU) return;
          const tU = Ut(UU.box, RU),
            pU = pt(UU.kind, tU, gU);
          return "blocked" === pU ? `${sC}lookWhy_blocked` : "wrong" === pU ? "ctrl" === tU ? `${sC}lookWhy_ctrl` : `${sC}lookWhy_reactor_${tU}` : void 0
        }(UU, Og(UU.box, RU), gU([RU[0], RU[1], RU[2]]));
        if (TU > 0) return {
          key: `${sC}lookPlanToBuild`,
          kindKey: PU,
          w: tU,
          h: pU,
          d: EU,
          count: TU,
          why: KU
        };
        if (qU > 0) return {
          key: `${sC}lookPlanTakeOut`,
          kindKey: PU,
          w: tU,
          h: pU,
          d: EU,
          count: qU,
          why: KU
        };
        return {
          key: "reactor" === UU.kind ? `${sC}lookPlanNoRods` : `${sC}lookPlanDone`,
          kindKey: PU,
          w: tU,
          h: pU,
          d: EU,
          count: 0
        }
      }(pU, RU, gU);
      return "reactor" === pU.kind && tU(pU) ? {
        ...EU,
        ctrl: !0
      } : EU
    }

    function kC(UU, RU) {
      return UU === RU || null !== UU && null !== RU && UU.key === RU.key && UU.kindKey === RU.kindKey && UU.w === RU.w && UU.h === RU.h && UU.d === RU.d && UU.count === RU.count && UU.why === RU.why && UU.ctrl === RU.ctrl
    }

    function FC() {
      return performance.now()
    }
    class iC {
      constructor(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : FC;
        this.ticket = UU, this.sent = RU, this.backstopMs = gU, this.now = tU, this.queuedAt = void 0, this.queuedAt = tU()
      }
      answered() {
        const UU = this.now(),
          RU = this.sent.leftAt(this.ticket);
        return null !== RU && UU - RU > 4e3 || UU - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class AC {
      constructor() {
        this.echoes = []
      }
      add(UU) {
        this.echoes = this.echoes.filter((UU => !UU.answered())), this.echoes.push(UU)
      }
      answered() {
        var UU, RU;
        return null === (UU = null === (RU = this.echoes.at(-1)) || void 0 === RU ? void 0 : RU.answered()) || void 0 === UU || UU
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((UU => UU.answered()))
      }
      age() {
        var UU, RU;
        return null !== (UU = null === (RU = this.echoes.at(-1)) || void 0 === RU ? void 0 : RU.age()) && void 0 !== UU ? UU : null
      }
      clear() {
        this.echoes = []
      }
    }
    class zC {
      constructor(UU) {
        this.send = UU, this.value = null, this.sent = null, this.echoes = new AC, this.down = !1, this.timer = null
      }
      shown(UU) {
        return null === this.value ? UU : this.down || this.value !== this.sent ? this.value : UU === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), UU) : this.value
      }
      pendingFor(UU) {
        return null !== this.value && this.value === this.sent && UU !== this.value ? this.echoes.age() : null
      }
      assume(UU, RU) {
        this.disarm(), this.down = !1, this.value = UU, this.sent = UU, this.echoes.clear(), this.echoes.add(RU)
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
    class MC {
      constructor() {
        this.pending = new Map
      }
      set(UU, RU, gU) {
        var tU;
        const pU = null !== (tU = this.pending.get(UU)) && void 0 !== tU ? tU : {
          on: RU,
          echoes: new AC
        };
        pU.on = RU, pU.echoes.add(gU), this.pending.set(UU, pU)
      }
      shown(UU) {
        let RU = UU;
        for (const [gU, {
            on: tU,
            echoes: pU
          }] of this.pending) 0 !== (UU & gU) === tU && pU.agreeCounts() || pU.answered() ? this.pending.delete(gU) : RU = tU ? RU | gU : RU & ~gU;
        return RU
      }
      pendingMask() {
        let UU = 0;
        for (const RU of this.pending.keys()) UU |= RU;
        return UU
      }
      pendingFor(UU) {
        let RU = null;
        for (const [tU, {
            on: pU,
            echoes: EU
          }] of this.pending) {
          if (void 0 !== UU && 0 !== (UU & tU) === pU) continue;
          const PU = EU.age();
          var gU;
          if (null !== PU) RU = Math.max(null !== (gU = RU) && void 0 !== gU ? gU : 0, PU)
        }
        return RU
      }
      clear() {
        this.pending.clear()
      }
    }
    class DC {
      constructor() {
        this.dims = null, this.echoes = new AC, this.unmet = null
      }
      shown(UU) {
        var RU;
        return this.dims && (LC(this.dims, UU) && this.echoes.agreeCounts() || this.echoes.answered()) && (LC(this.dims, UU) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (RU = this.dims) && void 0 !== RU ? RU : UU
      }
      takeUnmet() {
        const UU = this.unmet;
        return this.unmet = null, UU
      }
      set(UU, RU) {
        this.dims = UU, this.echoes.add(RU)
      }
      pendingFor(UU) {
        return null === this.dims || UU && LC(this.dims, UU) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function LC(UU, RU) {
      return UU[0] === RU[0] && UU[1] === RU[1] && UU[2] === RU[2]
    }
    class NC {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : FC;
        this.now = UU, this.taps = new Map
      }
      tap(UU, RU, gU) {
        return !this.busy(UU) && (this.taps.set(UU, {
          at: this.now(),
          done: RU
        }), gU(), !0)
      }
      settle(UU) {
        for (const [RU, gU] of [...this.taps]) gU.done(UU) && this.taps.delete(RU)
      }
      busy(UU) {
        const RU = this.taps.get(UU);
        return !!RU && (!(this.now() - RU.at >= 3e3) || (this.taps.delete(UU), !1))
      }
      busyIds() {
        const UU = new Set;
        for (const RU of [...this.taps.keys()]) this.busy(RU) && UU.add(RU);
        return UU
      }
      clear() {
        this.taps.clear()
      }
    }

    function lC(UU) {
      return {
        send: RU => UU.track(RU),
        sendUrgent: (RU, gU) => UU.track(RU, {
          urgent: !0,
          supersedes: gU
        }),
        leftAt: RU => UU.leftAt(RU),
        holdReserve: () => UU.holdUrgentReserve(),
        answerMs: XP
      }
    }

    function OC() {
      return performance.now()
    }

    function Uh(UU) {
      const RU = UU.baf2RxNeed.map((UU => {
        let [RU, gU] = UU;
        return [RU, gU]
      }));
      return JSON.stringify([UU.baf2RxFormed, RU, UU.baf2RxBad, UU.baf2RxCells])
    }

    function Rh(UU, RU) {
      const gU = 0 !== (RU & jR),
        tU = 0 !== (UU.baf2RxFlags & jR);
      return !gU || tU || "running" !== UU.baf2RxState && "idle" !== UU.baf2RxState ? !gU && tU && "scram" === UU.baf2RxState && UU.baf2RxFuel > 0 ? "idle" : UU.baf2RxState : "scram"
    }

    function gh(UU) {
      return JSON.stringify([UU.baf2BatFormed, UU.baf2BatNeed, UU.baf2BatBad])
    }

    function th(UU) {
      return UU.join(",")
    }
    class ph {
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
    class Eh {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(UU, RU) {
        this.lastAt = UU, this.lastUntil = UU + RU
      }
      answered(UU) {
        return this.lastAt >= UU || UU < this.lastUntil
      }
    }
    class Ph {
      constructor(UU, RU) {
        this.link = UU, this.now = RU, this.hold = new DC, this.picked = null, this.notTaken = null
      }
      shown(UU) {
        const RU = this.hold.shown(UU);
        if (this.hold.takeUnmet() && this.picked) {
          var gU;
          const {
            plans: RU,
            ctrl: tU,
            at: pU
          } = this.picked;
          this.picked = null, RU.unpredict(tU), null === (gU = this.notTaken) || void 0 === gU || gU.call(this, UU, pU)
        }
        return RU
      }
      pendingFor(UU) {
        return this.hold.pendingFor(UU)
      }
      Hj(UU, RU, gU) {
        UU.predictSize(RU, gU), this.picked = {
          plans: UU,
          ctrl: RU,
          at: this.now()
        };
        const tU = this.link.send(GR(RU, "plan", ...gU));
        this.hold.set(gU, new iC(tU, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class Th {
      constructor(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : OC;
        this.plans = UU, this.readInterior = RU, this.link = gU, this.now = tU, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new MC, this.throttle = void 0, this.oneShots = void 0, this.listeners = new ph, this.redraw = null, this.releaseReserve = null, this.size = new Ph(gU, tU), this.oneShots = new NC(tU), this.throttle = new zC((UU => this.echo(this.link.send(this.command("throttle", UU)))))
      }
      set(UU) {
        !UU.baf2RxOpen && this.raw && th(this.raw.baf2RxAt) === th(UU.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(UU), this.yh(UU)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(UU) {
        this.size.notTaken = UU
      }
      resize(UU) {
        this.raw && (this.size.Hj(this.plans, this.raw.baf2RxAt, UU), this.yh(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const UU = this.raw.baf2RxAt;
        this.plans.setStarter(UU, !this.plans.showsStarter(UU)), this.yh(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.yh(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.yh(this.raw)
      }
      send(UU) {
        if (this.raw) {
          for (var RU = arguments.length, gU = new Array(RU > 1 ? RU - 1 : 0), tU = 1; tU < RU; tU++) gU[tU - 1] = arguments[tU];
          this.link.send(this.command(UU, ...gU))
        }
      }
      tap(UU, RU) {
        this.raw && this.oneShots.tap(UU, function(UU, RU) {
          if ("start" === UU) return UU => 0 === (UU.baf2RxFlags & jR);
          if ("odConfirm" === UU) return UU => 0 !== (UU.baf2RxFlags & uR);
          const gU = Uh(RU);
          return UU => Uh(UU) !== gU
        }(UU, this.raw), RU) && ("start" === UU && (this.startedAt = this.now()), this.yh(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(jR, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(UU, RU) {
        if (!this.raw) return;
        const gU = UU === jR ? this.command(RU ? "scram" : "start") : this.command("od", RU ? 1 : 0),
          tU = RU && UU === jR,
          pU = `${cR} ${this.raw.baf2RxAt.join(" ")} `,
          EU = this.echo(tU ? this.link.sendUrgent(gU, (UU => {
            const RU = UU.startsWith(pU) ? UU.slice(pU.length).split(" ")[0] : null;
            return "throttle" === RU || "start" === RU
          })) : this.link.send(gU));
        this.flags.set(UU, RU, EU), tU && this.throttle.assume(0, EU), this.yh(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(UU) {
        this.throttle.drag(UU), this.raw && this.yh(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.yh(this.raw)
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
        for (var RU = arguments.length, gU = new Array(RU > 1 ? RU - 1 : 0), tU = 1; tU < RU; tU++) gU[tU - 1] = arguments[tU];
        return GR(this.raw.baf2RxAt, UU, ...gU)
      }
      echo(UU) {
        return new iC(UU, this.link, this.link.answerMs, this.now)
      }
      yh(UU) {
        var RU;
        this.raw = UU;
        const gU = this.flags.shown(UU.baf2RxFlags),
          tU = {
            ...UU,
            baf2RxFlags: gU,
            baf2RxTarget: this.throttle.shown(UU.baf2RxTarget),
            baf2RxState: Rh(UU, gU)
          },
          pU = this.size.shown(tU.baf2RxDims),
          EU = this.throttle.pendingFor(),
          PU = [this.throttle.pendingFor(UU.baf2RxTarget), this.flags.pendingFor(UU.baf2RxFlags), this.size.pendingFor(UU.baf2RxDims)].filter((UU => null !== UU)),
          TU = PU.length > 0 ? Math.max(...PU) : null,
          qU = this.oneShots.busyIds(),
          KU = tU.baf2RxAt;
        let cU, GU, jU = null,
          uU = [Math.max(0, pU[0] - 2), Math.max(0, pU[1] - 2), Math.max(0, pU[2] - 2)];
        if (tU.baf2RxFormed) {
          const [UU, RU, gU] = tU.baf2RxDims;
          uU = [Math.max(0, UU - 2), Math.max(0, RU - 2), Math.max(0, gU - 2)], cU = Array.from(tU.baf2RxCells, Number), GU = `${uU.join(",")}:${tU.baf2RxCells}`
        } else {
          var CU;
          const UU = null === (CU = this.plans.planAt(KU)) || void 0 === CU ? void 0 : CU.box,
            RU = UU ? ig(UU, "reactor", ...pU) : kg(KU, 1, ...pU, Fg("reactor", pU[0])),
            gU = this.readInterior(RU);
          jU = Rq(uU, gU), cU = gU, GU = `${uU.join(",")}:${gU.join("")}`
        }(null === (RU = this.looksOf) || void 0 === RU ? void 0 : RU.key) !== GU && (this.looksOf = {
          key: GU,
          looks: Tq(uU, cU)
        }), this.view = {
          status: tU,
          dims: pU,
          plan: jU,
          inner: uU,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(KU),
          odConfirmed: this.odConfirmed || 0 !== (tU.baf2RxFlags & fR),
          guide: this.plans.guideOn(),
          throttlePending: null !== EU,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== TU && TU >= 5e3,
          busy: qU,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== TU || qU.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.yh(this.raw)
        }), 250))
      }
    }
    class qh {
      constructor(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : OC;
        this.plans = UU, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new ph, this.redraw = null, this.size = new Ph(RU, gU), this.oneShots = new NC(gU)
      }
      set(UU) {
        !UU.baf2BatOpen && this.view && th(this.view.status.baf2BatAt) === th(UU.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(UU), this.yh(UU)
      }
      tap(UU, RU) {
        if (!this.view) return;
        const gU = gh(this.view.status);
        this.oneShots.tap(UU, (UU => gh(UU) !== gU), RU) && this.yh(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(UU) {
        this.size.notTaken = UU
      }
      resize(UU) {
        this.view && (this.size.Hj(this.plans, this.view.status.baf2BatAt, UU), this.yh(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.yh(this.view.status)
      }
      subscribe(UU) {
        return this.listeners.subscribe(UU)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      yh(UU) {
        const RU = this.size.shown(UU.baf2BatDims),
          gU = this.oneShots.busyIds();
        this.view = {
          status: UU,
          dims: RU,
          hG: mq(RU, UU.baf2BatDims) ? UU.baf2BatCapacity : cq(...RU),
          guide: this.plans.guideOn(),
          busy: gU
        }, this.listeners.notify(), gU.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.yh(this.view.status)
        }), 250))
      }
    }
    const Kh = "buildAFactory2Game:";

    function ch() {
      var UU;
      const RU = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!RU) return null;
      const gU = RU.querySelector(".ExitButton");
      return function(UU, RU) {
        const gU = RU ? RU.left - 8 : UU.right;
        return {
          left: UU.left,
          top: UU.top,
          width: Math.max(0, gU - UU.left),
          height: UU.height
        }
      }(RU.getBoundingClientRect(), null !== (UU = null === gU || void 0 === gU ? void 0 : gU.getBoundingClientRect()) && void 0 !== UU ? UU : null)
    }
    const Gh = (0, tU.memo)((function(UU) {
      let {
        store: RU
      } = UU;
      const {
        t: gU
      } = (0, Zp.B)(), [pU, EU] = (0, tU.useState)((() => RU.get())), [PU, TU] = (0, tU.useState)((() => performance.now()));
      (0, tU.useEffect)((() => (EU(RU.get()), RU.subscribe((() => {
        EU(RU.get()), TU(performance.now())
      })))), [RU]);
      const {
        alarm: qU,
        boomAt: KU
      } = pU, cU = null !== qU && null !== qU.secs, [GU, jU] = (0, tU.useState)(null);
      (0, tU.useEffect)((() => {
        if (!cU) return;
        jU(ch());
        const UU = setInterval((() => {
          TU(performance.now()), jU(ch())
        }), 250);
        return () => {
          clearInterval(UU)
        }
      }), [cU]);
      const [uU, CU] = (0, tU.useState)(!1);
      return (0, tU.useEffect)((() => {
        if (KU === -1 / 0) return;
        CU(!0);
        const UU = setTimeout((() => {
          CU(!1)
        }), 1300);
        return () => {
          clearTimeout(UU)
        }
      }), [KU]), (0, bE.jsxs)(bE.Fragment, {
        children: [null !== qU && (0, bE.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: gU(qU.hot ? `${Kh}rxAlarmSiren` : `${Kh}rxAlarmDamaged`, {
            amount: String(qU.damage)
          })
        }), null !== qU && null !== qU.secs && (0, bE.jsx)("div", {
          className: GU ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== GU && void 0 !== GU ? GU : void 0,
          "aria-live": "assertive",
          children: gU(`${Kh}rxAlarmCountdown`, {
            amount: String((hU = qU.secs, QU = PU - qU.receivedAt, Math.max(1, Math.ceil(hU - QU / 1e3))))
          })
        }), uU && (0, bE.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var hU, QU
    }));
    class jh {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      Tm(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const gU = UU.baf2RxAlarmAt.join(",");
        let tU = this.snapshot.boomAt;
        if (UU.baf2RxAlarmBoom) this.byReactor.delete(gU), tU = RU;
        else if (UU.baf2RxAlarmDamage <= 0) this.byReactor.delete(gU);
        else {
          var pU;
          this.byReactor.set(gU, {
            damage: UU.baf2RxAlarmDamage,
            secs: null !== (pU = UU.baf2RxAlarmSecs) && void 0 !== pU ? pU : null,
            hot: !0 === UU.baf2RxAlarmHot,
            receivedAt: RU
          })
        }
        this.yh(tU)
      }
      retain(UU) {
        let RU = !1;
        for (const gU of [...this.byReactor.keys()]) UU.has(gU) || (this.byReactor.delete(gU), RU = !0);
        RU && this.yh(this.snapshot.boomAt)
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
      yh(UU) {
        let RU = null;
        for (const gU of this.byReactor.values())(!RU || gU.damage > RU.damage) && (RU = gU);
        this.snapshot = {
          alarm: RU,
          boomAt: UU
        };
        for (const gU of this.listeners) gU()
      }
    }
    const uh = {
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

    function Ch(UU) {
      return [UU[0], UU[1], UU[2]]
    }

    function hh(UU) {
      return `${UU[0]},${UU[1]},${UU[2]}`
    }
    class Qh {
      constructor(UU) {
        if (this.plans = UU, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var UU;
            return {
              active: this.glows.flatMap((UU => {
                let {
                  record: RU
                } = UU;
                return RU ? [RU] : []
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
      check(UU, RU, gU) {
        const tU = new Set(RU.map((UU => hh(UU.box.ctrl))));
        for (const PU of function(UU, RU) {
            const gU = [],
              tU = new Map(UU);
            UU.clear();
            for (const pU of RU) {
              const RU = TC(pU.box.ctrl),
                EU = pU.formed ? pU.level : 0;
              UU.set(RU, EU), EU > 0 && 0 === tU.get(RU) && gU.push(pU)
            }
            return gU
          }(this.levels, this.plans.all())) tU.has(hh(PU.box.ctrl)) && this.show(UU, PU, "on", gU);
        const pU = this.plans.lastFormed();
        if (null === pU || pU.receivedAt <= this.flashedAt) return null;
        this.flashedAt = pU.receivedAt;
        const EU = function(UU, RU) {
          var gU;
          const tU = TC(UU);
          return null !== (gU = RU.find((UU => TC(UU.box.ctrl) === tU))) && void 0 !== gU ? gU : null
        }(pU.ctrl, RU);
        return EU && this.show(UU, EU, "formed", gU), EU
      }
      fade(UU, RU) {
        0 !== this.glows.length && (this.glows = this.glows.filter((gU => {
          let {
            mesh: tU,
            glow: pU,
            startMs: EU,
            record: PU
          } = gU;
          const TU = (RU - EU) / uh[pU].ms;
          return TU >= 1 ? (UU.disposeGameMesh(tU), PU && (PU.endMs = RU), !1) : (UU.setGameMesh(tU, {
            visibility: "formed" === pU ? 1 - TU : Math.sin(Math.PI * TU)
          }), !0)
        })))
      }
      dispose(UU) {
        for (const {
            mesh: gU
          }
          of this.glows) UU.disposeGameMesh(gU);
        this.glows = [], this.levels.clear();
        const RU = "undefined" !== typeof window ? window : null;
        (null === RU || void 0 === RU ? void 0 : RU.baf2Glows) === this.devAccessor && delete RU.baf2Glows
      }
      show(UU, RU, gU, tU) {
        const {
          lo: pU,
          hi: EU
        } = Vq(RU.box);
        let PU = null;
        this.devLog && (PU = {
          glow: gU,
          ctrl: Ch(RU.box.ctrl),
          lo: Ch(pU),
          hi: Ch(EU),
          startMs: tU,
          endMs: null
        }, this.devLog.push(PU), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(UU, gU, rq(pU, EU, uh[gU].thick)),
          glow: gU,
          startMs: tU,
          record: PU
        })
      }
      build(UU, RU, gU) {
        const tU = uC(UU, gU, {
          rgb: uh[RU].colour,
          alpha: 1
        });
        return UU.setGameMesh(tU, {
          visibility: 0
        }), tU
      }
    }
    const eh = 1 / .6,
      Wh = {
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
        blendMode: vT.g.Standard,
        soft: !0
      },
      fh = {
        ...Wh,
        size: [.25, .4],
        count: 2
      };

    function xh(UU) {
      return {
        colours: [UU, UU],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: vT.g.Add,
        soft: !1
      }
    }
    const mh = xh([150, 225, 255]),
      Ih = xh([185, 145, 255]),
      Jh = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function wh(UU) {
      const RU = rR[UU];
      return null === RU.fuelSlot || pg(RU) ? Jh.includes(UU) ? Ih : mh : Wh
    }
    const nh = {
        kind: "smokePuff"
      },
      bh = [.2, .025, .2];

    function oh(UU, RU) {
      const [
        [gU, tU, pU],
        [EU, PU, TU]
      ] = UU.colours;
      return {
        texture: UU.soft ? nh : "square_particle",
        hG: RU,
        minLifeTime: UU.life[0] / eh,
        maxLifeTime: UU.life[1] / eh,
        minEmitPower: UU.power[0] * eh,
        maxEmitPower: UU.power[1] * eh,
        minSize: UU.size[0],
        maxSize: UU.size[1],
        emitRate: 0,
        gravity: [0, UU.lift * eh * eh, 0],
        dir1: [-UU.spread, 1, -UU.spread],
        dir2: [UU.spread, 1, UU.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [gU, tU, pU, UU.alpha],
          maxColor: [EU, PU, TU, UU.alpha]
        }, {
          timeFraction: 1,
          minColor: [gU, tU, pU, 0],
          maxColor: [EU, PU, TU, 0]
        }],
        blendMode: UU.blendMode
      }
    }
    class Zh {
      constructor(UU) {
        this.fixed = UU, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(UU, RU, gU) {
        var tU;
        if (gU === this.lastFrame) return !1;
        this.lastFrame = gU;
        const pU = this.at;
        pU[0] = RU[0] + .5, pU[1] = RU[1] + 1.025, pU[2] = RU[2] + .5;
        const EU = null !== (tU = this.fixed) && void 0 !== tU ? tU : TU() ? fh : Wh;
        let PU = this.particles.get(EU);
        return PU || (PU = UU.createParticles(function(UU) {
          return oh(UU, Math.ceil(12 * UU.count * UU.life[1]) + UU.count)
        }(EU), {
          pos: pU,
          half: bh
        }), this.particles.set(EU, PU)), PU.moveTo(pU), PU.emit(EU.count), !0
      }
      dispose() {
        for (const UU of this.particles.values()) UU.stop();
        this.particles.clear()
      }
    }
    class ah {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(UU) {
        this.indexed = !0;
        for (const RU of oR) {
          const gU = wh(RU);
          for (let tU = 1; tU <= 4; tU++) {
            const pU = UU.blockNameToBlockId(`${RU}|meta|rot${tU}|Running`, !0);
            if (null === pU) continue;
            let EU = this.pufferIndexByStyle.get(gU);
            void 0 === EU && (EU = this.pufferList.push(new Zh(gU === Wh ? null : gU)) - 1, this.pufferIndexByStyle.set(gU, EU)), this.pufferIndexById[pU] = EU + 1
          }
        }
      }
      onAfterRender(UU, RU) {
        this.indexed || this.index(UU);
        const gU = performance.now(),
          tU = 0 === this.lastMs ? 0 : Math.min(gU - this.lastMs, 250) / 1e3;
        this.lastMs = gU, this.frame++, UU.particlesEnabled() ? (this.scan(UU, RU), this.puff(UU, tU)) : this.sources = []
      }
      dispose() {
        for (const UU of this.pufferList) UU.dispose();
        this.sources = [], this.found = []
      }
      scan(UU, RU) {
        0 === this.scanRow && (this.origin = [Math.floor(RU[0]) - 12, Math.floor(RU[1]) - 6, Math.floor(RU[2]) - 12]);
        const gU = Math.min(this.scanRow + 16, 325),
          [tU, pU, EU] = this.origin,
          PU = this.hits;
        PU.length = 0;
        for (let TU = this.scanRow; TU < gU; TU++) {
          const RU = tU + TU % 25,
            gU = pU + Math.floor(TU / 25);
          UU.scanBlocks(RU, gU, EU, RU + 1, gU + 1, EU + 25, this.pufferIndexById, PU)
        }
        for (let TU = 0; TU < PU.length; TU += 4) {
          const UU = PU[TU + 3];
          this.found.push({
            pos: [PU[TU], PU[TU + 1], PU[TU + 2]],
            gc: UU,
            puffer: this.pufferList[this.pufferIndexById[UU] - 1]
          })
        }
        this.scanRow = gU, 325 === gU && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(UU, RU) {
        const gU = this.sources.length;
        if (0 !== gU) {
          this.budget = Math.min(this.budget + Math.min(gU / 1.2, 12) * RU, 2);
          for (let RU = 0; RU < gU && this.budget >= 1; RU++) {
            const RU = this.sources[this.cursor % gU];
            this.cursor = (this.cursor + 1) % gU, UU.getBlockId(RU.pos[0], RU.pos[1], RU.pos[2]) === RU.gc && (RU.puffer.puff(UU, RU.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const Yh = {
        ...xh([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      Bh = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function Vh(UU) {
      return 0 === UU.spots.length ? 0 : Math.min(1 * UU.level, 4)
    }

    function rh(UU) {
      return 0 === UU.glass.length ? 0 : Math.min(.75 * UU.level, 3)
    }

    function Xh(UU) {
      return `${UU.ctrl.join(",")}:${UU.rot}:${UU.cu},${UU.cv}:${UU.w},${UU.h},${UU.d}`
    }

    function vh(UU, RU) {
      const gU = RU.w - 2,
        tU = RU.h - 2,
        pU = RU.d - 2,
        EU = [];
      for (let PU = 0; PU < gU * tU * pU; PU++) {
        const TU = PU % gU,
          qU = Math.floor(PU / gU) % pU,
          KU = Math.floor(PU / (gU * pU));
        if (TU > 0 && TU < gU - 1 && qU > 0 && qU < pU - 1 && KU > 0 && KU < tU - 1) continue;
        const cU = lg(RU, gt(RU, PU)),
          GU = YC(UU, cU);
        if (null !== GU && "Fuel Rod" === Yg(GU))
          for (const RU of Bh) {
            const gU = [cU[0] + RU[0], cU[1] + RU[1], cU[2] + RU[2]];
            Hh(UU, gU) && EU.push(Sh(gU, RU))
          }
      }
      return EU
    }

    function dh(UU, RU) {
      const {
        lo: gU,
        hi: tU
      } = Vq(RU), pU = [];
      for (let EU = gU[0]; EU < tU[0]; EU++)
        for (let RU = gU[1]; RU < tU[1]; RU++) {
          const PU = EU === gU[0] || EU === tU[0] - 1 || RU === gU[1] || RU === tU[1] - 1 ? 1 : Math.max(1, tU[2] - 1 - gU[2]);
          for (let TU = gU[2]; TU < tU[2]; TU += PU) {
            const PU = [EU, RU, TU];
            if (!Hh(UU, PU)) continue;
            const qU = EU === gU[0] ? Bh[1] : EU === tU[0] - 1 ? Bh[0] : TU === gU[2] ? Bh[5] : TU === tU[2] - 1 ? Bh[4] : RU === gU[1] ? Bh[3] : Bh[2];
            pU.push(Sh(PU, qU))
          }
        }
      return pU
    }

    function Hh(UU, RU) {
      const gU = YC(UU, RU);
      return null !== gU && "Reactor Glass" === Yg(gU)
    }

    function Sh(UU, RU) {
      return [
        [UU[0] + .5 + .55 * RU[0], UU[1] + .5 + .55 * RU[1], UU[2] + .5 + .55 * RU[2]],
        [0 === RU[0] ? .4 : .02, 0 === RU[1] ? .4 : .02, 0 === RU[2] ? .4 : .02]
      ]
    }
    class sh {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(UU, RU, gU, tU) {
        const pU = [],
          EU = new Set;
        for (const KU of RU) {
          var PU, TU, qU;
          const {
            box: RU
          } = KU;
          if ("reactor" !== KU.kind || KU.level <= 0 || (RU.ctrl[0] - gU[0]) ** 2 + (RU.ctrl[1] - gU[1]) ** 2 + (RU.ctrl[2] - gU[2]) ** 2 > 576) continue;
          const cU = Xh(RU);
          EU.add(cU);
          let GU = this.spots.get(cU);
          if ((!GU || tU - GU.at > 3e3) && (GU = {
              at: tU,
              spots: vh(UU, RU),
              glass: dh(UU, RU)
            }, this.spots.set(cU, GU)), 0 === GU.spots.length && 0 === GU.glass.length) continue;
          const jU = this.sparking.find((UU => UU.key === cU));
          pU.push({
            key: cU,
            level: KU.level,
            spots: GU.spots,
            glass: GU.glass,
            budget: null !== (PU = null === jU || void 0 === jU ? void 0 : jU.budget) && void 0 !== PU ? PU : 0,
            cursor: null !== (TU = null === jU || void 0 === jU ? void 0 : jU.cursor) && void 0 !== TU ? TU : 0,
            glassBudget: null !== (qU = null === jU || void 0 === jU ? void 0 : jU.glassBudget) && void 0 !== qU ? qU : 0
          })
        }
        for (const KU of this.spots.keys()) EU.has(KU) || this.spots.delete(KU);
        this.sparking = pU
      }
      emit(UU, RU, gU) {
        var tU;
        if (0 === this.sparking.length || !UU.particlesEnabled() || gU === this.lastFrame) return;
        this.lastFrame = gU;
        let pU = 0,
          EU = 0;
        for (const CU of this.sparking) pU += Vh(CU), EU += rh(CU);
        const PU = pU > 8 ? 8 / pU : 1,
          TU = EU > 6 ? 6 / EU : 1;
        let qU, KU = null,
          cU = null;
        for (const CU of this.sparking) CU.budget = Math.min(CU.budget + Vh(CU) * PU * RU, 2), CU.budget >= 1 && (!KU || CU.budget > KU.budget) && (KU = CU), CU.glassBudget = Math.min(CU.glassBudget + rh(CU) * TU * RU, 2), CU.glassBudget >= 1 && (!cU || CU.glassBudget > cU.glassBudget) && (cU = CU);
        if (KU) KU.budget--, qU = KU.spots[KU.cursor++ % KU.spots.length];
        else {
          if (!cU) return;
          cU.glassBudget--, qU = cU.glass[Math.floor(Math.random() * cU.glass.length)]
        }
        const [GU, jU] = qU, uU = null !== (tU = this.emitter) && void 0 !== tU ? tU : this.create(UU, GU, jU);
        uU.moveTo(GU, jU), uU.emit(Yh.count)
      }
      dispose() {
        var UU;
        null === (UU = this.emitter) || void 0 === UU || UU.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(UU, RU, gU) {
        const tU = Math.ceil(14 * Yh.count * Yh.life[1]) + Yh.count;
        return this.emitter = UU.createParticles(oh(Yh, tU), {
          pos: RU,
          half: gU
        }), this.emitter
      }
    }
    const yh = [2, 3.2],
      kh = 1 / 3,
      Fh = 1 / .6,
      ih = {
        texture: nh,
        hG: Math.ceil(18 * yh[1]) + 4,
        minLifeTime: yh[0] / Fh,
        maxLifeTime: yh[1] / Fh,
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
        blendMode: vT.g.Standard
      };
    class Ah {
      constructor(UU) {
        this.plans = UU, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new sh, this.frame = 0, this.outline = new Qh(UU)
      }
      onAfterRender(UU, RU, gU) {
        const tU = performance.now(),
          pU = 0 === this.lastMs ? 0 : Math.min(tU - this.lastMs, 250) / 1e3;
        if (this.lastMs = tU, this.outline.fade(UU, tU), this.puff(UU, pU, gU), this.sparks.emit(UU, pU, this.frame++), tU - this.lastCheckMs < 150) return;
        this.lastCheckMs = tU;
        const EU = this.plans.all().filter((UU => UU.formed && zh(UU.box.ctrl, gU) <= 4096));
        this.plumes = EU.filter((UU => "reactor" === UU.kind && UU.level > 0)).map((UU => ({
          box: UU.box,
          level: UU.level
        }))), this.updateHums(UU, RU, EU, gU), this.sparks.update(UU, EU, gU, tU), this.chimeFormed(UU, RU, EU, tU)
      }
      dispose(UU) {
        var RU;
        this.outline.dispose(UU), null === (RU = this.steam) || void 0 === RU || RU.dispose(), this.steam = null, this.sparks.dispose();
        for (const gU of this.hums.values()) gU.stop();
        this.hums.clear()
      }
      chimeFormed(UU, RU, gU, tU) {
        const pU = this.outline.check(UU, gU, tU);
        pU && UU.playSound(RU, "exp_levelup", .6, 1, {
          Xp: [pU.box.ctrl[0] + .5, pU.box.ctrl[1], pU.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(UU, RU, gU) {
        const tU = this.plumes;
        if (0 === tU.length || !UU.particlesEnabled()) return void(this.plumeBudget = 0);
        const pU = tU.reduce(((UU, RU) => UU + 3 * RU.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + pU * RU, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let EU = this.plumeCursor % (pU / 3);
        this.plumeCursor++;
        let PU = tU[0];
        for (const GU of tU) {
          if (EU < GU.level) {
            PU = GU;
            break
          }
          EU -= GU.level
        }
        const {
          lo: TU,
          hi: qU
        } = Vq(PU.box);
        if (function(UU, RU, gU) {
            const tU = Math.max(UU[0] - gU[0], 0, gU[0] - RU[0]),
              pU = Math.max(UU[2] - gU[2], 0, gU[2] - RU[2]);
            return Math.hypot(tU, gU[1] - RU[1], pU)
          }(TU, qU, gU) < 6 && Math.random() > kh) return;
        const KU = [(TU[0] + qU[0]) / 2, qU[1] + .05, (TU[2] + qU[2]) / 2],
          cU = [(qU[0] - TU[0]) / 2 - .5, .05, (qU[2] - TU[2]) / 2 - .5];
        this.steam ??= UU.createParticles(ih, {
          pos: KU,
          half: cU
        }), this.steam.moveTo(KU, cU), this.steam.emit(1)
      }
      updateHums(UU, RU, gU, tU) {
        const pU = new Map;
        for (const PU of gU) "reactor" === PU.kind && PU.level > 0 && zh(PU.box.ctrl, tU) <= 576 && pU.set(`${EU=PU.box.ctrl,`${EU[0]},${EU[1]},${EU[2]}`}:${PU.level}`, PU);
        var EU;
        for (const [PU, TU] of this.hums) pU.has(PU) || (TU.stop(), this.hums.delete(PU));
        for (const [PU, TU] of pU) {
          if (this.hums.has(PU)) continue;
          const {
            lo: gU,
            hi: tU
          } = Vq(TU.box), pU = [(gU[0] + tU[0]) / 2, gU[1], (gU[2] + tU[2]) / 2], EU = UU.playSound(RU, "rocketEngineLoop", .08 + .06 * TU.level, .55, {
            Xp: pU,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          EU && this.hums.set(PU, EU)
        }
      }
    }

    function zh(UU, RU) {
      return (UU[0] - RU[0]) ** 2 + (UU[1] - RU[1]) ** 2 + (UU[2] - RU[2]) ** 2
    }
    class Mh {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      Tm(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const tU = [UU.baf2BombAt[0], UU.baf2BombAt[1], UU.baf2BombAt[2]],
          pU = UU.baf2BombR;
        if (UU.baf2BombBoom) {
          const UU = Math.hypot(RU[0] - tU[0], RU[1] - tU[1], RU[2] - tU[2]);
          this.yh({
            fuse: null,
            blast: {
              at: tU,
              r: pU,
              receivedAt: gU,
              distance: UU,
              flash: UU <= 3 * pU
            }
          })
        } else this.yh({
          ...this.snapshot,
          fuse: UU.baf2BombMs > 0 ? {
            at: tU,
            r: pU,
            endsAt: gU + UU.baf2BombMs
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
      yh(UU) {
        this.snapshot = UU;
        for (const RU of this.listeners) RU()
      }
    }
    const Dh = (0, tU.memo)((function(UU) {
      var RU;
      let {
        store: gU
      } = UU;
      const {
        t: pU
      } = (0, Zp.B)(), [EU, PU] = (0, tU.useState)((() => gU.get())), [TU, qU] = (0, tU.useState)((() => performance.now()));
      (0, tU.useEffect)((() => (PU(gU.get()), gU.subscribe((() => {
        PU(gU.get()), qU(performance.now())
      })))), [gU]);
      const {
        fuse: KU,
        blast: cU
      } = EU;
      (0, tU.useEffect)((() => {
        if (!KU) return;
        const UU = setInterval((() => {
          qU(performance.now())
        }), 250);
        return () => {
          clearInterval(UU)
        }
      }), [KU]);
      const [GU, jU] = (0, tU.useState)(!1);
      (0, tU.useEffect)((() => {
        if (null === cU || void 0 === cU || !cU.flash) return;
        jU(!0);
        const UU = setTimeout((() => {
          jU(!1)
        }), 2500);
        return () => {
          clearTimeout(UU)
        }
      }), [cU]);
      const uU = KU ? function(UU, RU) {
        return UU.endsAt <= RU ? 0 : Math.ceil((UU.endsAt - RU) / 1e3)
      }(KU, TU) : 0;
      return (0, bE.jsxs)(bE.Fragment, {
        children: [uU > 0 && (0, bE.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: pU("buildAFactory2Game:bombCountdown", {
            amount: String(uU),
            radius: String(null !== (RU = null === KU || void 0 === KU ? void 0 : KU.r) && void 0 !== RU ? RU : 0)
          })
        }), GU && (0, bE.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function Lh(UU) {
      const RU = Math.min(4, Math.max(1, UU / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * UU / 4)),
        capSpread: Math.min(5 * UU / 8, 24 * RU),
        capThick: 6 * RU,
        stemHalfWidth: 3 * RU,
        puffScale: RU
      }
    }
    class Nh {
      constructor() {
        this.WT = !1
      }
      hold(UU) {
        UU.getCameraFar() < 1e3 && (UU.setCameraFar(1e3), this.WT = !0)
      }
      release(UU) {
        this.WT && (this.WT = !1, UU.setCameraFar(null))
      }
    }
    const lh = 1 / .6,
      Oh = [.2, .1, .2],
      UQ = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      RQ = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: vT.g.Standard,
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
      gQ = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: vT.g.Standard,
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
      tQ = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: vT.g.Standard,
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
      pQ = {
        texture: nh,
        hG: Math.ceil(120) + 4,
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
        blendMode: vT.g.Add
      };
    class EQ {
      constructor(UU) {
        this.store = UU, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new Nh, this.timers = []
      }
      onAfterRender(UU, RU) {
        const gU = performance.now(),
          tU = 0 === this.lastMs ? 0 : Math.min(gU - this.lastMs, 250) / 1e3;
        this.lastMs = gU;
        const {
          fuse: pU,
          blast: EU
        } = this.store.get();
        null !== EU && EU !== this.shownBlast && (this.shownBlast = EU, this.startBlast(UU, RU, EU, gU));
        const PU = UU.particlesEnabled();
        null !== pU && pU.endsAt > gU && PU ? this.emitBeacon(UU, pU, tU, gU) : this.beaconBudget = 0, null !== this.cloud && (gU - this.cloud.startMs > 33e3 ? this.disposeCloud(UU) : (this.far.hold(UU), PU && this.emitCloud(UU, tU, gU)))
      }
      dispose(UU) {
        var RU;
        null === (RU = this.beacon) || void 0 === RU || RU.dispose(), this.beacon = null, this.disposeCloud(UU);
        for (const gU of this.timers) clearTimeout(gU);
        this.timers.length = 0
      }
      emitBeacon(UU, RU, gU, tU) {
        const pU = RU.endsAt - tU < 5e3 ? 350 : 1e3,
          EU = .5 + .5 * Math.sin(2 * Math.PI * tU / pU);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * EU * gU, 4), this.beaconBudget < 1) return;
        const PU = Math.floor(this.beaconBudget);
        this.beaconBudget -= PU;
        const [TU, qU, KU] = RU.at, cU = [TU + .5, qU + 1.1, KU + .5];
        this.beacon ??= UU.createParticles(pQ, {
          pos: cU,
          half: Oh
        }), this.beacon.moveTo(cU), this.beacon.emit(PU)
      }
      startBlast(UU, RU, gU, tU) {
        var pU;
        null === (pU = this.beacon) || void 0 === pU || pU.dispose(), this.beacon = null, this.disposeCloud(UU);
        const EU = (0, rT.isMobile)() ? .5 : 1;
        this.streams = [RQ, gQ, tQ].map((UU => {
          const RU = Math.round(UU.count * EU);
          return {
            spec: UU,
            particles: null,
            rate: RU / ((UU.toMs - UU.fromMs) / 1e3),
            budget: 0,
            left: RU
          }
        })), this.cloud = {
          blast: gU,
          startMs: tU
        };
        const PU = Math.max(.25, 1 - gU.distance / (6 * gU.r)),
          TU = gU.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [gU, tU, pU] of UQ) TQ(UU, RU, gU, PU * tU, pU)
        }), TU))
      }
      emitCloud(UU, RU, gU) {
        const {
          blast: tU,
          startMs: pU
        } = this.cloud, EU = gU - pU, [PU, TU, qU] = tU.at, KU = Lh(tU.r);
        for (const cU of this.streams) {
          const {
            spec: gU
          } = cU;
          if (cU.left <= 0 || EU < gU.fromMs) continue;
          cU.budget += cU.rate * RU;
          const pU = Math.min(Math.floor(cU.budget), cU.left);
          if (pU < 1) continue;
          cU.budget -= pU, cU.left -= pU;
          const GU = cU.particles ??= this.createStream(UU, gU, tU);
          if (gU === RQ) {
            const UU = KU.stemHalfWidth;
            GU.moveTo([PU, TU + 1, qU], [UU, 1, UU])
          } else if (gU === gQ) {
            const UU = KU.capSpread * Math.min(1, (EU - gU.fromMs) / 3e3),
              RU = Math.sqrt(Math.random()),
              tU = 2 * Math.random() * Math.PI,
              pU = Math.cos(tU) * RU,
              cU = Math.sin(tU) * RU,
              jU = PU + pU * UU,
              uU = qU + cU * UU,
              CU = KU.capThick,
              hU = TU + KU.capHeight + CU * (1 - RU * RU) * 2;
            GU.setDirections([.7 * pU, .05, .7 * cU], [pU, .2, cU]), GU.moveTo([jU, hU, uU], [CU, CU, CU])
          } else {
            this.ringAngle += 2.39996;
            const UU = Math.cos(this.ringAngle),
              RU = Math.sin(this.ringAngle);
            GU.setDirections([UU, .05, RU], [UU, .1, RU]), GU.moveTo([PU + 2 * UU, TU + .5, qU + 2 * RU], [0, .5, 0])
          }
          GU.emit(pU)
        }
      }
      createStream(UU, RU, gU) {
        const {
          r: tU
        } = gU, pU = Math.max(RU.life[0], tU / 25), EU = RU === tQ ? [.9 * pU, pU] : RU.life, PU = Lh(tU), TU = RU === tQ ? 1 : PU.puffScale, qU = {
          texture: nh,
          hG: RU.count + 4,
          minLifeTime: EU[0] / lh,
          maxLifeTime: EU[1] / lh,
          minSize: RU.size[0] * TU,
          maxSize: RU.size[1] * TU,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, RU.gravity * lh * lh, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: RU.from[0],
            maxColor: RU.from[1]
          }, {
            timeFraction: .6,
            minColor: PQ(RU.from[0], RU.to[0]),
            maxColor: PQ(RU.from[1], RU.to[1])
          }, {
            timeFraction: 1,
            minColor: RU.to[0],
            maxColor: RU.to[1]
          }],
          blendMode: RU.blend
        };
        if (RU === RQ) {
          const UU = PU.capHeight / ((EU[0] + EU[1]) / 2);
          qU.minEmitPower = .9 * UU * lh, qU.maxEmitPower = 1.05 * UU * lh, qU.dir1 = [-.1, 1, -.1], qU.dir2 = [.1, 1, .1]
        } else RU === gQ ? (qU.minEmitPower = 1.2, qU.maxEmitPower = 2, qU.dir1 = [-1, .05, -1], qU.dir2 = [1, .2, 1]) : (qU.minEmitPower = 39.583333333333336, qU.maxEmitPower = 41.66666666666667, qU.dir1 = [1, 0, 0], qU.dir2 = [1, 0, 0]);
        return UU.createParticles(qU, {
          pos: gU.at
        })
      }
      disposeCloud(UU) {
        for (const gU of this.streams) {
          var RU;
          null === (RU = gU.particles) || void 0 === RU || RU.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(UU)
      }
    }

    function PQ(UU, RU) {
      return [(UU[0] + RU[0]) / 2, (UU[1] + RU[1]) / 2, (UU[2] + RU[2]) / 2, .75 * UU[3]]
    }

    function TQ(UU, RU, gU, tU, pU) {
      try {
        UU.playSound(RU, gU, tU, pU)
      } catch (EU) {
        console.error(EU)
      }
    }
    const qQ = {
        hG: 720,
        perS: 100
      },
      KQ = {
        hG: 320,
        perS: 44
      };
    class cQ {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(UU, RU) {
        this.zone = {
          centre: [...UU.centre],
          r: UU.r,
          band: UU.band ? [UU.band[0], UU.band[1]] : void 0
        }, this.endsAt = RU
      }
      stop() {
        this.zone = null
      }
      Tm(UU, RU) {
        const {
          baf2FalloutMs: gU,
          baf2FalloutAt: tU,
          baf2FalloutR: pU,
          baf2FalloutY: EU
        } = UU;
        gU > 0 && tU && void 0 !== pU ? this.start({
          centre: tU,
          r: pU,
          band: EU
        }, RU + gU) : this.stop()
      }
      perS(UU, RU, gU) {
        const tU = this.zone;
        if (!tU) return 0;
        const pU = this.endsAt - UU;
        return pU <= 0 ? (this.zone = null, 0) : tU.band && (RU[1] < tU.band[0] || RU[1] > tU.band[1]) || Math.hypot(RU[0] - tU.centre[0], RU[2] - tU.centre[2]) > tU.r ? 0 : gU.perS * Math.min(1, pU / 5e3)
      }
    }
    const GQ = [5, 7],
      jQ = [24, 8, 24],
      uQ = .5,
      CQ = 1 / .6,
      hQ = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class QQ {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, rT.isMobile)();
        this.state = new cQ, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(UU) {
          return UU ? KQ : qQ
        }(UU)
      }
      startFallout(UU, RU) {
        this.state.start(UU, RU)
      }
      stopFallout() {
        this.state.stop()
      }
      Tm(UU) {
        this.state.Tm(UU, performance.now())
      }
      onAfterRender(UU, RU) {
        var gU;
        const tU = performance.now(),
          pU = 0 === this.lastMs ? 0 : Math.min(tU - this.lastMs, 250) / 1e3;
        this.lastMs = tU;
        const EU = this.state.perS(tU, RU, this.tier);
        if (EU <= 0 || !UU.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + EU * pU, EU / 4);
        const PU = Math.floor(this.budget);
        if (PU < 1) return;
        this.budget -= PU;
        const TU = this.at;
        TU[0] = RU[0], TU[1] = RU[1] + 12, TU[2] = RU[2];
        const qU = null !== (gU = this.systems) && void 0 !== gU ? gU : this.create(UU, TU),
          KU = this.amounts;
        KU[0] = 0, KU[1] = 0;
        for (let cU = 0; cU < PU; cU++) KU[Math.random() < .3 ? 1 : 0]++;
        for (let cU = 0; cU < qU.length; cU++) KU[cU] > 0 && (qU[cU].moveTo(TU, jQ), qU[cU].emit(KU[cU]))
      }
      dispose() {
        for (const RU of null !== (UU = this.systems) && void 0 !== UU ? UU : []) {
          var UU;
          RU.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(UU, RU) {
        return this.systems = hQ.map((gU => {
          let {
            rgba: [tU, pU, EU, PU],
            share: TU
          } = gU;
          const qU = {
            texture: "square_particle",
            hG: Math.ceil(this.tier.hG * TU),
            minLifeTime: GQ[0] / CQ,
            maxLifeTime: GQ[1] / CQ,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [uQ, -1, uQ],
            colorGradients: [{
              timeFraction: 0,
              minColor: [tU, pU, EU, 0]
            }, {
              timeFraction: .15,
              minColor: [tU, pU, EU, PU]
            }, {
              timeFraction: .8,
              minColor: [tU, pU, EU, PU]
            }, {
              timeFraction: 1,
              minColor: [tU, pU, EU, 0]
            }],
            blendMode: vT.g.Standard
          };
          return UU.createParticles(qU, {
            pos: RU,
            half: jQ
          })
        })), this.systems
      }
    }
    const eQ = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function WQ(UU) {
      const RU = /\|rot(\d)/.exec(UU);
      return eQ[RU ? Number(RU[1]) : 1]
    }
    var fQ = gU(572),
      xQ = gU(38027);
    const mQ = new Set(fQ.j);

    function IQ(UU) {
      if (-2 !== UU.count) return null;
      const RU = FU(UU.item);
      return null !== RU && mQ.has(RU) ? RU : null
    }

    function JQ(UU) {
      const {
        width: RU,
        height: gU
      } = (0, xQ.d)(UU).hitBoxDimensions;
      return .55 / Math.max(RU, gU)
    }

    function wQ(UU, RU, gU) {
      if (!gU) return !1;
      const tU = UU[0] + .5 - RU[0],
        pU = UU[1] + .5 - RU[1],
        EU = UU[2] + .5 - RU[2];
      return tU * tU + pU * pU + EU * EU <= 576
    }

    function nQ(UU, RU) {
      return Math.atan2(UU[0], UU[2]) + Math.PI + RU
    }

    function bQ(UU, RU) {
      const gU = 2 * Math.PI;
      return (UU + gU * RU / 1e4) % gU
    }
    class oQ {
      constructor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = UU, this.now = RU, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = UU.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(UU, RU) {
        if (0 === this.farms.size) return;
        const gU = this.now(),
          tU = Number.isNaN(this.frameMs) ? 0 : Math.min(gU - this.frameMs, 100);
        this.frameMs = gU, gU - this.checkedMs >= 1e3 && (this.checkedMs = gU, this.check(UU, RU));
        for (const pU of this.farms.values()) pU.shown && pU.running && null !== pU.model && tU > 0 && (pU.spin = bQ(pU.spin, tU), pU.model.setPose(pU.feet, nQ(pU.front, pU.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const UU of this.farms.values()) this.drop(UU);
        this.farms.clear()
      }
      sync() {
        const UU = new Set;
        for (const RU of this.labels.list()) {
          const gU = IQ(RU);
          if (null === gU) continue;
          UU.add(RU.key);
          const tU = this.farms.get(RU.key);
          if ((null === tU || void 0 === tU ? void 0 : tU.mob) === gU) continue;
          tU && this.drop(tU);
          const [pU, EU, PU] = RU.pos;
          this.farms.set(RU.key, {
            pos: RU.pos,
            feet: [pU + .5, EU + 1, PU + .5],
            mob: gU,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [RU, gU] of this.farms) UU.has(RU) || (this.drop(gU), this.farms.delete(RU));
        this.checkedMs = -1 / 0
      }
      check(UU, RU) {
        for (const gU of this.farms.values()) {
          const [tU, pU, EU] = gU.pos, PU = YC(UU, gU.pos);
          null !== PU && Yg(PU) === XU && wQ(gU.pos, RU, "Air" === YC(UU, [tU, pU + 1, EU])) ? (gU.running = PU.endsWith("|Running"), gU.front = WQ(PU), null === gU.model && (gU.model = UU.createMobModel(gU.mob, JQ(gU.mob)), null === gU.model) || (gU.model.setPose(gU.feet, nQ(gU.front, gU.spin)), gU.shown || (gU.model.setVisible(!0), gU.shown = !0))) : (gU.shown && null !== gU.model && gU.model.setVisible(!1), gU.shown = !1)
        }
      }
      drop(UU) {
        var RU;
        null === (RU = UU.model) || void 0 === RU || RU.dispose(), UU.model = null, UU.shown = !1
      }
    }
    class ZQ {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(UU) {
        var RU;
        this.island = UU.baf2ColIsland, this.islandSite = (RU = UU.baf2ColSite) && 8 === RU.length ? {
          spawnXZ: [RU[0], RU[1]],
          coreXZ: [RU[2], RU[3]],
          minXZ: [RU[4], RU[5]],
          maxXZ: [RU[6], RU[7]]
        } : null, this.views = UU.baf2ColList.map((UU => ({
          entry: Tp(UU)
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
        var RU;
        return null === (RU = this.views.find((RU => {
          let {
            entry: gU
          } = RU;
          return gU.focus[0] === UU[0] && gU.focus[1] === UU[1] + 1 && gU.focus[2] === UU[2]
        }))) || void 0 === RU ? void 0 : RU.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(UU, RU) {
        return sq(this.entries(), UU, RU)
      }
      lookSource() {
        return {
          handles: UU => jt(UU) >= 0 || ut(UU),
          line: (UU, RU) => this.lookLine(UU, RU),
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
    const aQ = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((UU => UU / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((UU => [UU, UU + 1, UU + 2, UU, UU + 2, UU + 3]))
    };

    function YQ(UU, RU, gU, tU, pU, EU, PU) {
      let TU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const qU = Math.cos(TU),
        KU = Math.sin(TU),
        cU = UU.positions.length / 3,
        {
          positions: GU,
          indices: jU
        } = aQ;
      for (let uU = 0; uU < GU.length; uU += 3) {
        const TU = GU[uU] * pU,
          cU = GU[uU + 2] * PU;
        UU.positions.push(RU + TU * qU + cU * KU, gU + GU[uU + 1] * EU, tU - TU * KU + cU * qU)
      }
      for (const uU of jU) UU.indices.push(cU + uU)
    }

    function BQ(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return RU < 1 ? {
        rgb: UU,
        alpha: RU
      } : {
        rgb: UU,
        alpha: 1,
        opaque: !0
      }
    }
    class VQ {
      constructor(UU, RU) {
        this.style = UU, this.perSource = RU, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(UU) {
        this.sources = UU, 0 === UU.length && (this.budget = 0)
      }
      HG(UU, RU, gU) {
        const tU = this.sources.length;
        if (0 !== tU) {
          var pU, EU;
          this.budget = Math.min(this.budget + (pU = tU, EU = this.perSource, Math.min(pU * EU, RK) * RU), 2);
          for (let RU = 0; RU < tU && this.budget >= 1; RU++) {
            const RU = this.sources[this.cursor % tU];
            this.cursor = (this.cursor + 1) % tU;
            if (!(Math.max(Math.abs(RU.x - gU[0]), Math.abs(RU.y - gU[1]), Math.abs(RU.z - gU[2])) > 32)) return this.puff(UU, RU), void this.budget--
          }
        }
      }
      dispose() {
        var UU;
        null === (UU = this.particles) || void 0 === UU || UU.dispose(), this.particles = null, this.sources = []
      }
      puff(UU, RU) {
        let {
          x: gU,
          y: tU,
          z: pU,
          h: EU,
          faces: PU
        } = RU;
        const TU = function(UU, RU, gU, tU, pU) {
            const [EU, PU, TU] = pU[Math.floor(Math.random() * pU.length)], qU = .04, KU = (UU, RU, gU) => UU > 0 ? RU + gU + qU : UU < 0 ? RU - qU : RU + .1, cU = (UU, RU, gU) => UU > 0 ? RU + gU + qU : UU < 0 ? RU - qU : RU + gU - .1, GU = [KU(EU, UU, 1), KU(PU, RU, tU), KU(TU, gU, 1)], jU = [cU(EU, UU, 1), cU(PU, RU, tU), cU(TU, gU, 1)];
            return {
              pos: [(GU[0] + jU[0]) / 2, (GU[1] + jU[1]) / 2, (GU[2] + jU[2]) / 2],
              half: [(jU[0] - GU[0]) / 2, (jU[1] - GU[1]) / 2, (jU[2] - GU[2]) / 2],
              out: [EU, PU, TU]
            }
          }(gU, tU, pU, EU, PU),
          {
            style: qU
          } = this,
          KU = this.particles ??= UU.createParticles(oh(qU, Math.ceil(qU.count * RK * qU.life[1]) + 4), TU);
        KU.moveTo(TU.pos, TU.half);
        const [cU, GU, jU] = TU.out, uU = qU.spread;
        KU.setDirections([cU - uU, .6 + GU, jU - uU], [cU + uU, 1 + GU, jU + uU]), KU.emit(qU.count)
      }
    }
    const rQ = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class XQ {
      constructor() {
        this.green = new VQ(tK.green, Oq), this.pink = new VQ(tK.pink, UK), this.colliders = [], this.lastMs = 0
      }
      setSources(UU) {
        this.colliders = UU;
        const RU = [],
          gU = [];
        for (const tU of UU) {
          const [UU, pU, EU] = tU.focus;
          RU.push({
            x: UU,
            y: pU - 1,
            z: EU,
            h: 2,
            faces: rQ
          });
          for (let RU = 0; RU < 4; RU++) {
            if (!tU.live[RU]) continue;
            const [UU, pU, EU] = Qt(tU.focus, RU, Pt.LASER_D), [PU, , TU] = ht[RU], qU = rQ.filter((UU => UU[0] !== PU || UU[2] !== TU || 0 !== UU[1]));
            gU.push({
              x: UU,
              y: pU,
              z: EU,
              h: 1,
              faces: qU
            })
          }
        }
        this.green.setSources(RU), this.pink.setSources(gU)
      }
      onAfterRender(UU) {
        const RU = performance.now(),
          gU = 0 === this.lastMs ? 0 : Math.min(RU - this.lastMs, 250) / 1e3;
        if (this.lastMs = RU, 0 === this.colliders.length || !UU.particlesEnabled()) return;
        const tU = UU.getCameraPosition();
        this.green.HG(UU, gU, tU), this.pink.HG(UU, gU, tU)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const vQ = 1.04,
      dQ = BQ([1, 120 / 255, 220 / 255]),
      HQ = BQ([1, .25, .25], .35);
    class SQ {
      constructor(UU) {
        this.store = UU, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new XQ
      }
      onAfterRender(UU) {
        this.store.version() !== this.builtVersion && this.rebuild(UU);
        const RU = performance.now();
        for (const gU of this.beams) {
          const tU = 1 + .35 * Math.sin(RU / 700 * Math.PI * 2 + gU.phase);
          UU.setGameMesh(gU.mesh, {
            scale: [gU.alongX ? 1 : tU, tU, gU.alongX ? tU : 1]
          })
        }
        this.glow.onAfterRender(UU)
      }
      dispose(UU) {
        this.clear(UU), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(UU) {
        this.clear(UU), this.builtVersion = this.store.version();
        const RU = [];
        for (const {
            entry: gU
          }
          of this.store.colliders()) gU.on && gU.live.some(Boolean) && (this.addBeams(UU, gU), RU.push(gU)), gU.blockers.length > 0 && this.addMarkers(UU, gU);
        this.glow.setSources(RU)
      }
      addBeams(UU, RU) {
        const [gU, tU, pU] = RU.focus, EU = lq - .25, PU = (.25 + lq) / 2;
        for (let TU = 0; TU < 4; TU++) {
          if (!RU.live[TU]) continue;
          const [qU, , KU] = ht[TU], cU = 0 !== qU, GU = {
            positions: [],
            indices: []
          };
          YQ(GU, 0, 0, 0, cU ? EU : .2, .2, cU ? .2 : EU);
          const jU = [gU + .5 + qU * PU, tU + .5, pU + .5 + KU * PU],
            uU = UU.createGameMesh(GU, dQ, jU);
          this.meshes.push(uU), this.beams.push({
            mesh: uU,
            alongX: cU,
            phase: TU * Math.PI / 2
          })
        }
      }
      addMarkers(UU, RU) {
        const gU = RU.blockers[0],
          tU = {
            positions: [],
            indices: []
          };
        for (const [pU, EU, PU] of RU.blockers) YQ(tU, pU - gU[0] + .5, EU - gU[1] + .5, PU - gU[2] + .5, vQ, vQ, vQ);
        this.meshes.push(UU.createGameMesh(tU, HQ, gU))
      }
      clear(UU) {
        for (const RU of this.meshes) UU.disposeGameMesh(RU);
        this.meshes = [], this.beams = []
      }
    }
    const sQ = [.56, .83, 1],
      yQ = [1, .73, .08],
      kQ = [1, .25, .25],
      FQ = [.85, .85, .85],
      iQ = [.3, .45, .6];

    function AQ(UU, RU, gU, tU) {
      let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        EU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const PU = pU / 2,
        TU = pU + EU;
      for (const qU of [-PU, PU])
        for (const pU of [-PU, PU]) YQ(UU, RU, gU + qU, tU + pU, TU, EU, EU), YQ(UU, RU + qU, gU, tU + pU, EU, TU, EU), YQ(UU, RU + qU, gU + pU, tU, EU, EU, TU)
    }

    function zQ(UU) {
      return RU => UU.isBlockInLoadedChunk(RU[0], RU[1], RU[2]) && 0 === UU.getBlockId(RU[0], RU[1], RU[2])
    }

    function MQ(UU) {
      return UU.map((UU => {
        let {
          free: RU,
          blocked: gU,
          gaps: tU,
          supports: pU
        } = UU;
        return `${RU.join(";")}|${gU.join(";")}|${tU.join(";")}|${pU.join(";")}`
      })).join("/")
    }

    function DQ(UU, RU, gU) {
      let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const EU = RU[0],
        PU = {
          positions: [],
          indices: []
        };
      for (const [TU, qU, KU] of RU) AQ(PU, TU - EU[0] + .5, qU - EU[1] + .5, KU - EU[2] + .5, tU, pU);
      return UU.createGameMesh(PU, gU, EU)
    }
    class LQ {
      constructor(UU) {
        this.store = UU, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(UU, RU, gU) {
        var tU;
        const pU = null === (tU = UU.QRU(RU)) || void 0 === tU ? void 0 : tU.name;
        if (pU !== qt && pU !== Tt) return void("" !== this.shownKey && this.show(UU, "", []));
        const EU = performance.now();
        if (EU - this.lastCheckMs >= 200 && (this.lastCheckMs = EU, pU === qt ? this.check(UU, gU) : this.preview(UU, gU)), this.pulses.length > 0) {
          const RU = 1 + .12 * Math.sin(EU / 1e3 * 1.25 * Math.PI * 2),
            gU = [RU, RU, RU];
          for (const tU of this.pulses) UU.setGameMesh(tU, {
            scale: gU
          })
        }
      }
      dispose(UU) {
        this.clear(UU), this.shownKey = ""
      }
      check(UU, RU) {
        const gU = zQ(UU),
          tU = [];
        for (const {
            entry: EU
          }
          of this.store.colliders()) {
          EU.focus.every(((UU, gU) => Math.abs(UU + .5 - RU[gU]) <= Pt.GHOST_REACH)) && tU.push(Nq(EU, gU))
        }
        const pU = MQ(tU);
        pU !== this.shownKey && this.show(UU, pU, tU)
      }
      preview(UU, RU) {
        const gU = UU.getTargetedBlock(),
          tU = gU ? [gU.cj[0], gU.cj[1], gU.cj[2]] : null,
          pU = null !== tU && tU.every(((UU, gU) => Math.abs(UU + .5 - RU[gU]) <= 8)),
          EU = this.store.site(),
          PU = pU && EU ? function(UU, RU, gU) {
            const tU = Ct(UU);
            if (!tU.every(RU)) return null;
            const pU = ft(UU, gU);
            return {
              column: tU,
              spots: Nq({
                focus: tU[1],
                lasers: [!1, !1, !1, !1],
                open: pU,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, RU),
              fits: pU.filter(Boolean).length >= Pt.MIN_SPOTS
            }
          }(tU, zQ(UU), EU) : null,
          TU = PU ? [PU.spots] : [],
          qU = PU ? `preview ${tU.join(",")}|${PU.fits}|${MQ(TU)}` : "";
        var KU, cU;
        qU !== this.shownKey && this.show(UU, qU, TU, null !== (KU = null === PU || void 0 === PU ? void 0 : PU.column) && void 0 !== KU ? KU : [], null === (cU = null === PU || void 0 === PU ? void 0 : PU.fits) || void 0 === cU || cU)
      }
      show(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          pU = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(UU), this.shownKey = RU, tU.length > 0 && this.meshes.push(DQ(UU, tU, BQ(pU ? FQ : kQ)));
        for (const {
            free: EU,
            blocked: PU,
            gaps: TU,
            supports: qU
          }
          of gU) {
          for (const [RU, gU, tU] of EU) {
            const pU = {
              positions: [],
              indices: []
            };
            AQ(pU, 0, 0, 0);
            const EU = UU.createGameMesh(pU, BQ(sQ), [RU + .5, gU + .5, tU + .5]);
            this.meshes.push(EU), this.pulses.push(EU)
          }
          PU.length > 0 && this.meshes.push(DQ(UU, PU, BQ(yQ))), TU.length > 0 && this.meshes.push(DQ(UU, TU, BQ(kQ), 1.06, .07)), qU.length > 0 && this.meshes.push(DQ(UU, qU, BQ(iQ)))
        }
      }
      clear(UU) {
        for (const RU of this.meshes) UU.disposeGameMesh(RU);
        this.meshes = [], this.pulses = []
      }
    }
    class NQ {
      constructor() {
        this.stored = new Map, this.WT = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(UU) {
        if (!UU.baf2TermOpen) return !1;
        UU.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [RU, gU] of UU.baf2TermItems) gU > 0 ? this.stored.set(RU, gU) : this.stored.delete(RU);
        if (UU.baf2TermHeld && (this.WT = new Map(UU.baf2TermHeld)), this.pending = this.pending.filter((RU => RU.seq > UU.baf2TermAcked)), this.silos = UU.baf2TermSilos, this.readOnly = UU.baf2TermReadOnly, this.pocket = !0 === UU.baf2TermPocket, UU.baf2TermReset) this.resort();
        else {
          const UU = new Set(this.order);
          for (const RU of this.stored.keys()) UU.has(RU) || this.order.push(RU)
        }
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((UU, RU) => this.amount(RU) - this.amount(UU) || UU.localeCompare(RU))), this.changed()
      }
      take(UU, RU) {
        const gU = TR(UU, this.amount(RU));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: RU,
          amount: gU,
          put: !1
        }), this.recents = [RU, ...this.recents.filter((UU => UU !== RU))].slice(0, 6), this.changed(), gR(this.seq, UU, RU)
      }
      put(UU, RU) {
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: RU,
          amount: TR(UU, this.heldAmount(RU)),
          put: !0
        }), this.changed(), tR(this.seq, UU, RU)
      }
      putAll() {
        this.seq++;
        for (const UU of this.heldItems()) this.pending.push({
          seq: this.seq,
          item: UU,
          amount: this.heldAmount(UU),
          put: !0
        });
        return this.changed(), pR(this.seq)
      }
      amount(UU) {
        var RU;
        let gU = null !== (RU = this.stored.get(UU)) && void 0 !== RU ? RU : 0;
        for (const tU of this.pending) tU.item === UU && (gU += tU.put ? tU.amount : -tU.amount);
        return Math.max(0, gU)
      }
      heldAmount(UU) {
        var RU;
        let gU = null !== (RU = this.WT.get(UU)) && void 0 !== RU ? RU : 0;
        for (const tU of this.pending) tU.put && tU.item === UU && (gU -= tU.amount);
        return Math.max(0, gU)
      }
      heldItems() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return this.order.filter((RU => RU === UU || this.heldAmount(RU) > 0))
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
    var lQ = gU(37985);
    const OQ = {
      isBlock: UU => void 0 !== YU.f[UU],
      harvestType: UU => {
        var RU;
        return null === (RU = YU.f[UU]) || void 0 === RU ? void 0 : RU.harvestType
      },
      harvestLevel: UU => {
        var RU;
        return null === (RU = YU.f[UU]) || void 0 === RU ? void 0 : RU.harvestLevel
      },
      dropsNothing: UU => {
        var RU;
        return null === (null === (RU = YU.f[UU]) || void 0 === RU ? void 0 : RU.drops)
      },
      displayName: UU => {
        var RU;
        return null === (RU = UT.k[UU]) || void 0 === RU ? void 0 : RU.displayName
      },
      description: UU => {
        var RU;
        return null === (RU = UT.k[UU]) || void 0 === RU ? void 0 : RU.description
      },
      harvests: UU => {
        var RU;
        return null === (RU = UT.k[UU]) || void 0 === RU ? void 0 : RU.harvests
      },
      level: UU => {
        var RU;
        return null === (RU = UT.k[UU]) || void 0 === RU ? void 0 : RU.level
      }
    };

    function Ue(UU, RU, gU) {
      return function(UU, RU, gU, tU) {
        var pU, EU;
        const PU = RU.split("|")[0],
          TU = UU.isBlock(RU) ? RU : UU.isBlock(PU) ? PU : null;
        if (null === TU || "rock" !== UU.harvestType(TU) || UU.dropsNothing(TU) && !St.has(PU)) return null;
        const qU = gU && "rock" === UU.harvests(gU) ? null !== (pU = UU.level(gU)) && void 0 !== pU ? pU : 0 : null,
          KU = null !== (EU = null !== tU && void 0 !== tU ? tU : UU.harvestLevel(TU)) && void 0 !== EU ? EU : 0;
        return (null !== qU ? KU <= qU : 0 === UU.harvestLevel(TU)) ? null : bt(UU, KU)
      }(OQ, UU, RU, gU)
    }

    function Re(UU, RU) {
      return function(UU, RU, gU) {
        if (RU === nt[0]) return [(0, rU.ke)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, rU.N.whiteUiText)];
        const tU = gU.split("|")[0],
          pU = UU.isBlock(tU) ? UU.displayName(tU) : void 0,
          EU = "string" === typeof pU ? pU : pU && "translationKey" in pU ? `$t(${pU.translationKey})` : tU;
        return [(0, rU.ke)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: EU
          }
        }, rU.N.whiteUiText), (0, rU.ke)({
          translationKey: `item:${(0,rU.Ne)(RU)}`
        }, rU.N.yellowUiText)]
      }(OQ, UU, RU)
    }
    const ge = "buildAFactory2Game:";
    const te = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function pe(UU) {
      return UU.endsWith(" Ore")
    }
    const Ee = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      Pe = [],
      Te = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: Ee,
        plan: null,
        atomic: Pe
      },
      qe = "buildAFactory2Game:",
      Ke = new Set(["Splitter", "Sorting Gate"]),
      ce = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class Ge {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = UU, this.planAt = RU, this.tierOf = gU, this.gc = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.WT = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = Te, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(UU, RU, gU) {
        var tU, pU, EU;
        let PU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const TU = null !== (tU = null === (pU = UU.QRU(RU)) || void 0 === pU ? void 0 : pU.name) && void 0 !== tU ? tU : null,
          qU = UU.isPlayerCrouching(RU),
          KU = 0 === gU ? null : this.resolve(UU, gU),
          cU = null !== KU && null !== PU && Ke.has(KU.rootName) && function(UU, RU) {
            return ce.some((gU => {
              let [tU, pU] = gU;
              const EU = UU.getBlockId(RU[0] + tU, RU[1], RU[2] + pU);
              return 0 !== EU && "Express Belt" === UU.getMetaInfo(EU).rootName
            }))
          }(UU, PU),
          GU = this.updatePlan(0 === gU ? null : PU),
          jU = this.tierOf(),
          uU = null === PU ? null : (0, lQ.g)(gU),
          CU = null !== uU && null !== PU && (0, lQ.k)(function(UU) {
            return (RU, gU, tU) => UU.getBlockId(RU, gU, tU)
          }(UU), PU[0], PU[1], PU[2], uU),
          hU = this.readAfloat(UU, gU, PU);
        if (gU === this.gc && CU === this.missesMaker && hU === this.afloat && TU === this.WT && qU === this.crouching && cU === this.express && jU === this.tier && !GU && (!this.targetsLive || !this.liveMoved(PU))) return;
        this.gc = gU, this.missesMaker = CU, this.afloat = hU, this.WT = TU, this.crouching = qU, this.express = cU;
        const QU = cU && KU ? function(UU) {
          if (null === UU.info) return null;
          return UU.express ??= {
            ...UU.info,
            detail: `${qe}lookKeepsUpExpress`,
            detailItem: null
          }, UU.express
        }(KU) : null !== KU && CU && null !== uU ? this.besideMaker(KU, gU, uU) : null !== KU && hU ? this.hanging(KU) : null !== (EU = null === KU || void 0 === KU ? void 0 : KU.info) && void 0 !== EU ? EU : null;
        this.tier = jU;
        const eU = KU && QU ? function(UU, RU) {
          var gU, tU;
          const pU = YU.f[UU];
          if (!UU.endsWith(" Ore") || "rock" !== (null === pU || void 0 === pU ? void 0 : pU.harvestType) || 0 === pU.harvestLevel) return null;
          const EU = null !== (gU = pU.harvestLevel) && void 0 !== gU ? gU : 0,
            PU = RU ? UT.k[RU] : void 0;
          if ("rock" === (null === PU || void 0 === PU ? void 0 : PU.harvests) && (null !== (tU = PU.level) && void 0 !== tU ? tU : 0) >= EU) return null;
          const TU = (qU = EU, bt(OQ, qU));
          var qU;
          if (null === TU) return null;
          const KU = pE(TU),
            cU = /^[AEIOU]/.test(TU) ? "An" : "";
          if ("rock" === (null === PU || void 0 === PU ? void 0 : PU.harvests) && RU) return {
            key: `${qe}lookToolTooWeak${cU}`,
            WT: pE(RU),
            needed: KU
          };
          return {
            key: TU === nt[0] ? `${qe}lookNeedAnyPickaxe` : `${qe}lookNeedPickaxe${cU}`,
            WT: null,
            needed: KU
          }
        }(KU.rootName, TU) : null;
        this.targetsLive = !0 === (null === KU || void 0 === KU ? void 0 : KU.live) && null !== PU;
        let WU = null;
        this.targetsLive && KU && PU && this.live && (this.livePos[0] = PU[0], this.livePos[1] = PU[1], this.livePos[2] = PU[2], this.liveVersion = this.live.version(), WU = this.live.line(KU.rootName, PU));
        const fU = null === QU ? Ee : function(UU, RU, gU) {
            const tU = function(UU, RU, gU) {
              const tU = Vg(UU);
              if (null === tU) return null;
              const pU = `${ge}lookPortMode_${tU}`,
                EU = kt(RU);
              if (EU && gU) return {
                mode: null,
                detail: pU,
                next: `${ge}lookWrenchPickUp`,
                nextState: null
              };
              const PU = rg(UU),
                TU = null === PU ? null : Vg(PU);
              return null === TU ? {
                mode: null,
                detail: pU,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: pU,
                next: EU ? `${ge}lookWrenchNext` : `${ge}lookPortWrench`,
                nextState: `${ge}lookPortState_${TU}`
              }
            }(UU, RU, gU);
            if (null !== tU) return tU;
            const pU = tp(UU, RU, gU);
            return null === pU.mode && null === pU.next ? Ee : pU
          }(UU.blockIdToBlockName(gU), TU, qU),
          xU = this.plan,
          mU = KU && QU ? this.rowsOf(KU.rootName, jU) : Pe,
          IU = this.snapshot;
        if (!(null === QU ? !IU.visible : IU.visible && QU === IU.info && (JU = eU, wU = IU.tool, JU === wU || null !== JU && null !== wU && JU.key === wU.key && JU.WT === wU.WT && JU.needed === wU.needed) && function(UU, RU) {
            return UU === RU || null !== UU && null !== RU && UU.key === RU.key && JSON.stringify([UU.params, UU.keys]) === JSON.stringify([RU.params, RU.keys])
          }(WU, IU.live) && function(UU, RU) {
            return UU.mode === RU.mode && UU.detail === RU.detail && UU.next === RU.next && UU.nextState === RU.nextState
          }(fU, IU.wrench) && kC(xU, IU.plan) && mU === IU.atomic)) {
          var JU, wU;
          this.snapshot = null === QU ? {
            ...IU,
            visible: !1
          } : {
            info: QU,
            visible: !0,
            tool: eU,
            live: WU,
            wrench: fU,
            plan: xU,
            atomic: mU
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
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = Te, this.gc = 0, this.WT = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(UU, RU, gU) {
        if (null === gU || 0 === RU || !TU() || !pe(this.resolve(UU, RU).rootName)) return !1;
        const tU = `${gU[0]},${gU[1]},${gU[2]},${RU}`,
          pU = performance.now();
        return tU === this.afloatKey && pU - this.afloatAt < je ? this.afloat : (this.afloatKey = tU, this.afloatAt = pU, function(UU, RU) {
          for (const [gU, tU, pU] of te) {
            const EU = RU(UU[0] + gU, UU[1] + tU, UU[2] + pU);
            if (void 0 === EU || null !== EU && !pe(EU)) return !1
          }
          return !0
        }(gU, ((RU, gU, tU) => function(UU, RU, gU, tU) {
          if (!UU.isBlockInLoadedChunk(RU, gU, tU)) return;
          const pU = UU.getBlockId(RU, gU, tU);
          return 0 === pU ? null : UU.getMetaInfo(pU).rootName
        }(UU, RU, gU, tU))))
      }
      liveMoved(UU) {
        var RU;
        const {
          livePos: gU
        } = this;
        return null === UU || UU[0] !== gU[0] || UU[1] !== gU[1] || UU[2] !== gU[2] || (null === (RU = this.live) || void 0 === RU ? void 0 : RU.version()) !== this.liveVersion
      }
      updatePlan(UU) {
        const RU = null === UU ? "" : UU.join(","),
          gU = performance.now();
        if (RU === this.planPos && gU - this.planMs < 250) return !1;
        this.planPos = RU, this.planMs = gU;
        const tU = null === UU ? null : this.planAt([UU[0], UU[1], UU[2]]),
          pU = !kC(tU, this.plan);
        return this.plan = tU, pU
      }
      besideMaker(UU, RU, gU) {
        let {
          info: tU
        } = UU;
        if (null === tU) return null;
        let pU = this.besideMakerById.get(RU);
        if (void 0 === pU) {
          const UU = "cryo" === gU ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          pU = {
            ...tU,
            detail: `${qe}${UU}`,
            detailItem: null
          }, this.besideMakerById.set(RU, pU)
        }
        return pU
      }
      hanging(UU) {
        let {
          info: RU,
          rootName: gU
        } = UU;
        if (null === RU) return null;
        let tU = this.afloatByRoot.get(gU);
        return void 0 === tU && (tU = {
          ...RU,
          detail: `${qe}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(gU, tU)), tU
      }
      rowsOf(UU, RU) {
        if (null === RU) return Pe;
        const gU = `${UU}|${RU}`;
        let tU = this.rowsByKey.get(gU);
        if (void 0 === tU) {
          const pU = function(UU, RU) {
            var gU;
            if (!(UU in rR)) return [];
            const tU = null !== (gU = XR[UU]) && void 0 !== gU ? gU : [],
              pU = new Map;
            for (const PU of FE(UU, RU))
              if ((tU.includes(PU) || kE(PU.output) && sE(PU.output) > LU(UU)) && sE(PU.output) <= RU) {
                var EU;
                const UU = null !== (EU = pU.get(PU.output)) && void 0 !== EU ? EU : [];
                UU.push(PU.input), pU.set(PU.output, UU)
              } return AE([...pU], (UU => {
              let [RU] = UU;
              return -sE(RU)
            })).map((UU => {
              let [RU, gU] = UU;
              return {
                output: RU,
                inputs: gU
              }
            }))
          }(UU, RU);
          tU = pU.length > 0 ? pU : Pe, this.rowsByKey.set(gU, tU)
        }
        return tU
      }
      resolve(UU, RU) {
        const {
          rootId: gU,
          rootName: tU
        } = UU.getMetaInfo(RU), pU = (0, Cg.h)(tU) ? RU : gU;
        let EU = this.byRootId.get(pU);
        const PU = TU();
        if (void 0 === EU || EU.nuclear !== PU) {
          var qU;
          const gU = function(UU) {
            return dt(OQ, UU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UU)
          }(tU, UU.blockIdToBlockName(RU));
          EU = {
            info: gU,
            rootName: tU,
            live: null !== gU && !0 === (null === (qU = this.live) || void 0 === qU ? void 0 : qU.handles(tU)),
            nuclear: PU
          }, this.byRootId.set(pU, EU)
        }
        return EU
      }
    }
    const je = 500;
    const ue = (0, tU.memo)((function(UU) {
      var RU, gU;
      let {
        store: pU
      } = UU;
      const {
        t: EU
      } = (0, Zp.B)(), [PU, TU] = (0, tU.useState)((() => pU.get()));
      (0, tU.useEffect)((() => (TU(pU.get()), pU.subscribe((() => {
        TU(pU.get())
      })))), [pU]);
      const {
        openInGameMenuName: qU,
        openEverythingMenuName: KU,
        isTouchScreen: cU
      } = (0, mp.l)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
        info: GU,
        tool: jU,
        live: uU,
        wrench: CU,
        atomic: hU
      } = PU, QU = PU.visible && null === qU && null === KU;
      if (null === GU) return null;
      const eU = null !== CU.detail ? EU(CU.detail) : null !== (RU = PU.plan) && void 0 !== RU && RU.ctrl ? EU("buildAFactory2Game:lookPlanCtrl") : null !== GU.detail ? EU(GU.detail, null === GU.detailItem ? void 0 : {
        item: EU(GU.detailItem)
      }) : null;
      return (0, bE.jsxs)("div", {
        className: wp()("Baf2LookTarget", {
          Visible: QU
        }),
        "aria-hidden": !QU,
        children: [(0, bE.jsx)("div", {
          className: "Baf2LookTargetName SmallTextBold",
          children: EU(GU.name)
        }), null !== PU.plan && (0, bE.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: EU(PU.plan.key, {
            kind: EU(PU.plan.kindKey),
            w: String(PU.plan.w),
            h: String(PU.plan.h),
            d: String(PU.plan.d),
            count: String(PU.plan.count)
          })
        }), void 0 !== (null === (gU = PU.plan) || void 0 === gU ? void 0 : gU.why) && (0, bE.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: EU(PU.plan.why)
        }), null !== CU.mode && (0, bE.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: EU(CU.mode)
        }), null !== jU ? (0, bE.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: EU(jU.key, {
            item: EU(jU.needed),
            WT: null === jU.WT ? "" : EU(jU.WT)
          })
        }) : null !== uU ? (0, bE.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: EU(uU.key, pK(EU, uU))
        }) : null !== eU && (0, bE.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: eU
        }), hU.length > 0 && (0, bE.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: EU("buildAFactory2Game:lookAtomicRecipes", {
            list: hU.map((UU => {
              let {
                output: RU,
                inputs: gU
              } = UU;
              const tU = gU.length > 1 ? ` ${EU("buildAFactory2Game:recipeMore",{count:String(gU.length-1)})}` : "";
              return `${EU(pE(gU[0]))}${tU} \u2192 ${EU(pE(RU))}`
            })).join(", ")
          })
        }), null !== CU.next && (0, bE.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: EU(CU.next, {
            state: null === CU.nextState ? "" : EU(CU.nextState),
            use: EU(cU ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
          })
        })]
      })
    }));
    var Ce = gU(38069);
    const he = [],
      Qe = [
        [0, -1, 0]
      ];

    function ee(UU) {
      const RU = [UU];
      for (let gU = 1; gU <= 4; gU++) gU > 1 && RU.push(`${UU}|meta|rot${gU}`), RU.push(`${UU}|meta|rot${gU}|Running`);
      return RU
    }

    function We(UU, RU) {
      return [Math.floor(UU[0] / RU), Math.floor(UU[1] / RU), Math.floor(UU[2] / RU)]
    }

    function fe(UU, RU, gU) {
      return `${UU},${RU},${gU}`
    }

    function xe(UU) {
      const RU = UU.split("|")[0];
      if (!Kg(RU)) return he;
      const gU = rR[RU];
      if (Rg(gU)) return Qe;
      const tU = WQ(UU);
      return gg(gU) ? [
        [-tU[0], -tU[1], -tU[2]]
      ] : np(gU) ? function(UU, RU) {
        const gU = UU[0] - 2 * RU[0],
          tU = UU[2] - 2 * RU[2],
          pU = [];
        for (let EU = -1; EU <= 1; EU++)
          for (let RU = -1; RU <= 1; RU++) pU.push([gU + EU, UU[1], tU + RU]);
        return pU
      }([0, 0, 0], tU) : he
    }
    const me = [.5, .5, .5],
      Ie = [.2, .8, .3],
      Je = [.45, 1, .5];
    class we {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(UU) {
        this.indexed = !0;
        for (const RU of oR)
          for (const gU of ee(RU)) {
            const RU = UU.blockNameToBlockId(gU, !0),
              tU = xe(gU);
            null !== RU && tU.length > 0 && (this.offsetsList.push(tU), this.offsetsIndexById[RU] = this.offsetsList.length)
          }
      }
      onAfterRender(UU, RU) {
        this.indexed || this.index(UU);
        const gU = performance.now();
        if (gU - this.lastCheckMs < 100) return;
        this.lastCheckMs = gU, this.checks++;
        const tU = cC.e.jC,
          [pU, EU, PU] = We(RU, tU);
        let TU = !1;
        const qU = [];
        let KU = 0;
        for (let cU = pU - 2; cU <= pU + 2; cU++)
          for (let RU = EU - 1; RU <= EU + 1; RU++)
            for (let pU = PU - 2; pU <= PU + 2; pU++) {
              const EU = KU++,
                PU = fe(cU, RU, pU),
                GU = UU.getChunkVersion(cU, RU, pU);
              let jU = this.chunks.get(PU);
              null !== GU ? (jU || (jU = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(PU, jU)), jU.seenAt = this.checks, jU.checkedVersion !== GU && (jU.checkedVersion = GU, TU = !0), jU.scannedVersion !== GU && gU - jU.scannedAt >= 500 && qU.push({
                slot: EU,
                entry: jU,
                origin: [cU * tU, RU * tU, pU * tU]
              })) : (TU ||= void 0 !== jU, this.chunks.delete(PU))
            }
        this.scanDue(UU, qU) && (TU = !0);
        for (const [cU, GU] of this.chunks) GU.seenAt !== this.checks && (TU ||= GU.machines.length > 0, this.chunks.delete(cU));
        for (const cU of this.chunks.values())
          for (const [RU, gU, tU] of cU.cellChunks)(Math.abs(RU - pU) > 2 || Math.abs(gU - EU) > 1 || Math.abs(tU - PU) > 2) && this.watchCellChunk(UU, RU, gU, tU) && (TU = !0);
        for (const [cU, GU] of this.cellChunks) GU.seenAt !== this.checks && this.cellChunks.delete(cU);
        TU && this.refresh(UU)
      }
      dispose(UU) {
        this.clearMeshes(UU), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(UU, RU) {
        const gU = Math.max(RU.findIndex((UU => {
          let {
            slot: RU
          } = UU;
          return RU >= this.scanFrom
        })), 0);
        let tU = 96;
        for (let pU = 0; pU < RU.length; pU++) {
          const {
            slot: EU,
            entry: PU,
            origin: TU
          } = RU[(gU + pU) % RU.length];
          if (tU -= this.scan(UU, PU, TU), tU <= 0) {
            this.scanFrom = EU + 1;
            break
          }
        }
        return RU.length > 0
      }
      scan(UU, RU, gU) {
        let [tU, pU, EU] = gU;
        const PU = cC.e.jC,
          TU = this.hits;
        TU.length = 0;
        const qU = UU.scanBlocks(tU, pU, EU, tU + PU, pU + PU, EU + PU, this.offsetsIndexById, TU),
          KU = [];
        for (let cU = 0; cU < TU.length; cU += 4) KU.push({
          pos: [TU[cU], TU[cU + 1], TU[cU + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[TU[cU + 3]] - 1]
        });
        return RU.machines = KU, RU.cellChunks = function(UU, RU) {
          const gU = new Set,
            tU = [];
          for (const {
              pos: pU,
              offsets: EU
            }
            of UU)
            for (const [UU, PU, TU] of EU) {
              const EU = We([pU[0] + UU, pU[1] + PU, pU[2] + TU], RU),
                qU = fe(...EU);
              gU.has(qU) || (gU.add(qU), tU.push(EU))
            }
          return tU
        }(KU, PU), RU.scannedVersion = RU.checkedVersion, RU.scannedAt = performance.now(), Math.max(qU, 1)
      }
      watchCellChunk(UU, RU, gU, tU) {
        const pU = fe(RU, gU, tU),
          EU = UU.getChunkVersion(RU, gU, tU),
          PU = this.cellChunks.get(pU);
        return null === EU ? this.cellChunks.delete(pU) : (null === PU || void 0 === PU ? void 0 : PU.version) === EU ? (PU.seenAt = this.checks, !1) : (this.cellChunks.set(pU, {
          version: EU,
          seenAt: this.checks
        }), !0)
      }
      refresh(UU) {
        const RU = function(UU, RU) {
            const gU = new Set,
              tU = [];
            for (const {
                pos: pU,
                offsets: EU
              }
              of UU)
              for (const [UU, PU, TU] of EU) {
                const EU = pU[0] + UU,
                  qU = pU[1] + PU,
                  KU = pU[2] + TU,
                  cU = `${EU},${qU},${KU}`;
                gU.has(cU) || (gU.add(cU), RU(EU, qU, KU) && tU.push([EU, qU, KU]))
              }
            return tU
          }([...this.chunks.values()].flatMap((UU => UU.machines)), ((RU, gU, tU) => UU.isBlockInLoadedChunk(RU, gU, tU) && 0 === UU.getBlockId(RU, gU, tU))),
          gU = RU.join(";");
        gU !== this.shownKey && (this.shownKey = gU, this.clearMeshes(UU), RU.length > 0 && (this.meshes = [this.build(UU, RU, !1), this.build(UU, RU, !0)]))
      }
      build(UU, RU, gU) {
        const tU = RU[0],
          pU = [],
          EU = [];
        for (const [PU, TU, qU] of RU)(0, Ce.b)(pU, EU, [PU - tU[0] + .5, TU - tU[1] + .5, qU - tU[2] + .5], me, gU);
        return UU.createGameMesh({
          positions: pU,
          indices: EU
        }, {
          rgb: gU ? Je : Ie,
          alpha: .4
        }, tU)
      }
      clearMeshes(UU) {
        for (const RU of this.meshes) UU.disposeGameMesh(RU);
        this.meshes = []
      }
    }
    const ne = 1 / .6,
      be = 200,
      oe = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      Ze = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      ae = 2 * Math.PI / 3;
    class Ye {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oe;
        this.style = UU, this.particles = null, this.points = new Float32Array(800), this.budget = be, this.lastMs = 0
      }
      static blade() {
        return new Ye(Ze)
      }
      Tm(UU, RU) {
        const gU = Math.min(RU.arcStruck, RU.arcPoints.length);
        this.draw(UU, [RU.arcFrom, ...RU.arcPoints], RU.arcPoints.slice(0, gU))
      }
      onBlade(UU, RU) {
        const [gU, tU, pU] = RU.bladeCentre, [EU, PU] = RU.bladeFacing, TU = gU - 1.5 * EU, qU = pU - 1.5 * PU, KU = Math.atan2(PU, EU), cU = [];
        for (let GU = 0; GU <= 8; GU++) {
          const UU = KU - ae / 2 + ae * GU / 8;
          cU.push([TU + 2.5 * Math.cos(UU), tU, qU + 2.5 * Math.sin(UU)])
        }
        this.draw(UU, cU, RU.bladeStruck)
      }
      dispose() {
        var UU;
        null === (UU = this.particles) || void 0 === UU || UU.stop(), this.particles = null
      }
      draw(UU, RU, gU) {
        if (!UU.particlesEnabled() || RU.length < 2) return;
        const tU = performance.now();
        this.budget = Math.min(be, this.budget + (tU - this.lastMs) / 1e3 * be), this.lastMs = tU;
        const pU = [];
        let EU = 0,
          PU = RU[0];
        for (const eU of RU.slice(1)) {
          const UU = Math.min(48, Math.round(Math.hypot(eU[0] - PU[0], eU[1] - PU[1], eU[2] - PU[2]) * this.style.perBlock));
          pU.push([PU, eU, UU]), EU += UU, PU = eU
        }
        const TU = gU.length;
        EU += 10 * TU;
        const qU = EU > this.budget ? this.budget / EU : 1;
        if (0 === EU || qU * EU < 1) return;
        const KU = RU[0],
          [cU, GU, jU] = KU,
          uU = this.points;
        let CU = 0;
        const hU = (UU, RU, gU, tU) => {
          const pU = 4 * CU;
          uU[pU] = UU - cU, uU[pU + 1] = RU - GU, uU[pU + 2] = gU - jU, uU[pU + 3] = tU, CU++
        };
        pU.forEach(((UU, RU) => {
          let [gU, tU, pU] = UU;
          const EU = Math.min(Math.floor(pU * qU), be - CU),
            PU = Math.hypot(tU[0] - gU[0], tU[1] - gU[1], tU[2] - gU[2]),
            TU = 0 === RU && PU > 0 ? Math.min(.5, .1 * PU) / PU : 0;
          for (let qU = 0; qU < EU; qU++) {
            const UU = TU + (qU + .5) / EU * (1 - TU);
            hU(gU[0] + (tU[0] - gU[0]) * UU, gU[1] + (tU[1] - gU[1]) * UU, gU[2] + (tU[2] - gU[2]) * UU, .15)
          }
        }));
        const QU = Math.floor(10 * qU);
        for (let eU = 0; eU < TU; eU++) {
          const [UU, RU, tU] = gU[eU];
          for (let gU = 0; gU < QU && CU < be; gU++) hU(UU, RU, tU, 2.5)
        }
        this.budget -= CU, this.particles ??= UU.createParticles(function(UU) {
          const [RU, gU] = UU.colours;
          return {
            texture: "square_particle",
            hG: 400,
            minLifeTime: UU.life[0] / ne,
            maxLifeTime: UU.life[1] / ne,
            minSize: UU.size[0],
            maxSize: UU.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [RU[0], RU[1], RU[2], 1],
              maxColor: [gU[0], gU[1], gU[2], 1]
            }, {
              timeFraction: 1,
              minColor: [RU[0], RU[1], RU[2], 0],
              maxColor: [gU[0], gU[1], gU[2], 0]
            }],
            blendMode: vT.g.Add
          }
        }(this.style), {
          pos: KU
        }), this.particles.emitPoints(KU, uU, CU)
      }
    }
    const Be = new Set(["Sky Spring"]);

    function Ve(UU, RU, gU) {
      const tU = UU.split("|")[0];
      return "Air" !== RU || gU || ! function(UU) {
        const RU = UU.split("|")[0];
        return void 0 !== Pg[RU] || Be.has(RU)
      }(tU) ? null : UU
    }
    class re {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(UU) {
        const RU = UU - this.lastTapAt >= 300;
        return this.lastTapAt = UU, RU
      }
    }
    class Xe {
      constructor() {
        this.presses = new re, this.predicted = null
      }
      tap(UU, RU) {
        const gU = this.presses.isNewPress(RU);
        return gU && (this.predicted = {
          station: UU,
          at: RU
        }), gU
      }
      consumeServerOpen(UU, RU) {
        const gU = this.predicted;
        return !(null === gU || gU.station !== UU || RU - gU.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class ve {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(UU, RU) {
        return UU && (this.thrustAt = RU), RU - this.thrustAt < 200
      }
    }
    const de = [.1, .05, .1],
      He = {
        texture: "effect_5",
        hG: Math.ceil(48),
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
        blendMode: vT.g.OneOne
      };
    class Se {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new ve, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      Tm(UU, RU) {
        for (const [gU, tU] of RU.baf2JetFlames) UU.isLocalPlayer(gU) || (tU ? this.lit.add(gU) : this.lit.delete(gU))
      }
      onAfterRender(UU, RU) {
        const gU = performance.now(),
          tU = this.hold.lit(this.selfThrusting(UU, RU), gU);
        for (const [pU, EU] of this.flames)(pU === RU ? tU : this.lit.has(pU)) || this.setEmitting(EU, !1), pU === RU || UU.getPositionView(pU) ? !EU.emitting && gU - EU.offAt >= 1300 && (EU.particles.stop(), this.flames.delete(pU)) : (EU.particles.dispose(), this.flames.delete(pU), this.lit.delete(pU));
        tU && this.draw(UU, RU, RU);
        for (const pU of this.lit) this.draw(UU, RU, pU)
      }
      dispose() {
        for (const UU of this.flames.values()) UU.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(UU, RU) {
        var gU;
        const tU = UU.getLocalPlayerMovement();
        return !!tU && (null !== (pU = {
          option: null !== (gU = UU.getClientOption(RU, "jumpHoldThrust")) && void 0 !== gU ? gU : null,
          jumping: tU.jumpHeld,
          onGround: tU.onGround,
          alive: UU.isAlive(RU)
        }).option && pU.option.maxUpSpeed >= 0 && pU.jumping && !pU.onGround && pU.alive);
        var pU
      }
      draw(UU, RU, gU) {
        var tU, pU;
        const EU = this.pos;
        if (!UU.readDrawnPosition(gU, EU)) return;
        const PU = UU.readDrawnPosition(RU, this.camera) ? this.camera : EU;
        if (!((EU[0] - PU[0]) ** 2 + (EU[1] - PU[1]) ** 2 + (EU[2] - PU[2]) ** 2 < 1600) || !UU.particlesEnabled()) {
          const UU = this.flames.get(gU);
          return void(UU && this.setEmitting(UU, !1))
        }
        const TU = null !== (tU = this.flames.get(gU)) && void 0 !== tU ? tU : this.create(UU, gU, EU),
          qU = null !== (pU = UU.getDrawnHeading(gU)) && void 0 !== pU ? pU : 0,
          KU = this.at;
        KU[0] = EU[0] - .35 * Math.sin(qU), KU[1] = EU[1] + 1.05, KU[2] = EU[2] - .35 * Math.cos(qU), TU.particles.moveTo(KU), this.setEmitting(TU, !0)
      }
      setEmitting(UU, RU) {
        UU.emitting !== RU && (UU.emitting = RU, RU || (UU.offAt = performance.now()), UU.particles.setEmitRate(RU ? 60 : 0))
      }
      create(UU, RU, gU) {
        const tU = {
          particles: UU.createParticles(He, {
            pos: gU,
            half: de
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(RU, tU), tU
      }
    }

    function se(UU) {
      return "Reactor Frame" === tt("reactor", UU)
    }

    function ye(UU) {
      return Hg("reactor", UU) && !se(UU) && (UU.startsWith("Reactor Glass") || UU.startsWith("Reactor Port"))
    }
    const ke = "baf2Goal";
    class Fe {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [Xp.p.subscribe("setDirectionArrow", (UU => {
          let {
            id: RU,
            position: gU
          } = UU;
          RU === ke && (this.goal = gU, this.checkedAt = -1 / 0)
        })), Xp.p.subscribe("clearDirectionArrow", (UU => {
          let {
            id: RU
          } = UU;
          null !== RU && RU !== ke || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const UU of this.subs) Xp.p.unsubscribe(UU)
      }
      sideOf(UU, RU, gU, tU) {
        const pU = this.goal;
        if (!pU) return 0;
        gU - this.checkedAt > 1e3 && (this.checkedAt = gU, this.open = function(UU, RU) {
          const [gU, tU, pU] = UU.map(Math.floor);
          if (!ye(RU(gU, tU, pU))) return null;
          for (const [EU, PU] of [
              [1, 0],
              [0, 1]
            ]) {
            const UU = RU(gU + EU, tU, pU + PU),
              TU = RU(gU - EU, tU, pU - PU);
            if (se(TU) && ye(UU)) return [EU, 0, PU];
            if (se(UU) && ye(TU)) return [0 - EU, 0, 0 - PU]
          }
          return null
        }(pU, ((RU, gU, tU) => UU.blockIdToBlockName(UU.getBlockId(RU, gU, tU)))));
        const EU = this.open;
        if (!EU) return 0;
        const PU = tU(pU);
        if (Math.abs(PU.x - RU.x) > .05 || Math.abs(PU.y - RU.y) > .05) return 0;
        const TU = tU([pU[0] + EU[0], pU[1], pU[2] + EU[2]]).x - PU.x;
        return Math.abs(TU) < .3 ? 0 : TU > 0 ? 1 : -1
      }
    }
    class ie {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new Fe, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.pC = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.Xx = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((UU => {
          for (const RU of UU) RU.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(RU.target, RU.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.pC || this.clear()
        }, window.addEventListener("resize", this.Xx)
      }
      onAfterRender(UU, RU) {
        var gU;
        this.api = UU, this.project = null !== (gU = null === RU || void 0 === RU ? void 0 : RU.projectWorldPosToScreenPos) && void 0 !== gU ? gU : null, this.queued || this.pC || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.pC = !0;
        for (const UU of this.moved.keys()) UU.style.transform = "";
        this.moved.clear();
        for (const UU of this.sideLabels.keys()) UU.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.Xx)
      }
      clear() {
        for (const EU of this.moved.keys()) EU.isConnected || this.moved.delete(EU);
        for (const EU of this.sideLabels.keys()) EU.isConnected || this.sideLabels.delete(EU);
        if (0 === this.arrows.length) return;
        const UU = performance.now(),
          RU = UU - this.refreshedAt > 1e3;
        RU && (this.refreshedAt = UU, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const gU = this.trackerBox(),
          tU = this.barsBox(),
          pU = this.toastBox(RU);
        (gU || tU || pU) && RU && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let EU = 0; EU < this.arrows.length; EU++) {
          const RU = this.arrows[EU];
          this.labelOffsets.set(RU, this.runLabelAside(RU, UU));
          const PU = (gU ? this.shiftLeftOf(RU, gU) : 0) || this.shiftOnScreen(RU),
            TU = Math.min(tU ? this.liftAbove(RU, tU, PU) : 0, pU ? this.liftAbove(RU, pU, PU) : 0),
            qU = this.moved.get(RU);
          if (0 !== PU || 0 !== TU) {
            const UU = 0 === TU ? `translateX(${PU}px)` : `translate(${PU}px, ${TU}px)`;
            qU !== UU && (RU.style.transform = UU, this.moved.set(RU, UU))
          } else void 0 !== qU && (RU.style.transform = "", this.moved.delete(RU))
        }
      }
      trackerBox() {
        var UU, RU;
        const gU = null !== (UU = this.tracker) && void 0 !== UU && UU.isConnected ? this.tracker : null !== (RU = this.trackers[0]) && void 0 !== RU ? RU : null;
        if (gU !== this.tracker && this.watch(gU), this.boxStale && gU) {
          var tU, pU, EU;
          this.boxStale = !1;
          const UU = gU.closest(".NoRoom") ? null : gU.getBoundingClientRect(),
            RU = UU && UU.width > 0 ? null === (tU = this.hud) || void 0 === tU ? void 0 : tU.getBoundingClientRect() : void 0,
            PU = UU && RU ? Math.max(UU.top, RU.top) : null !== (pU = null === UU || void 0 === UU ? void 0 : UU.top) && void 0 !== pU ? pU : 0,
            TU = UU && RU ? Math.min(UU.bottom, RU.bottom) : null !== (EU = null === UU || void 0 === UU ? void 0 : UU.bottom) && void 0 !== EU ? EU : 0;
          this.box = UU && UU.width > 0 && TU > PU ? {
            left: UU.left,
            top: PU,
            right: UU.right,
            bottom: TU
          } : null
        }
        return gU ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var UU;
          this.barsStale = !1;
          const RU = null === (UU = this.statBars[0]) || void 0 === UU ? void 0 : UU.getBoundingClientRect();
          this.bars = RU && RU.width > 0 && RU.height > 0 ? {
            left: RU.left,
            top: RU.top,
            right: RU.right,
            bottom: RU.bottom
          } : null
        }
        return this.bars
      }
      toastBox(UU) {
        var RU;
        const gU = null !== (RU = this.toasts[0]) && void 0 !== RU ? RU : null;
        if (gU !== this.toastEl || UU && gU) {
          this.toastEl = gU;
          const UU = null === gU || void 0 === gU ? void 0 : gU.getBoundingClientRect();
          this.toast = UU && UU.width > 0 && UU.height > 0 ? {
            left: UU.left,
            top: UU.top,
            right: UU.right,
            bottom: UU.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(UU, RU, gU) {
        var tU;
        const pU = this.anchorOf(UU);
        if (!pU) return 0;
        const EU = pU.x + gU + (null !== (tU = this.labelOffsets.get(UU)) && void 0 !== tU ? tU : 0),
          {
            halfWidth: PU,
            labelled: TU
          } = this.extentOf(UU),
          qU = pU.y + this.em * (TU ? 6.2 : 3);
        return qU < RU.top - 6 || EU + PU < RU.left - 6 || EU - PU > RU.right + 6 ? 0 : RU.top - 6 - qU
      }
      watch(UU) {
        var RU, gU;
        this.tracker && this.sizes.unobserve(this.tracker), null === (RU = this.hud) || void 0 === RU || RU.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = UU, this.hud = null !== (gU = null === UU || void 0 === UU ? void 0 : UU.closest(".Baf2QuestHud")) && void 0 !== gU ? gU : null, this.box = null, this.boxStale = !0, UU && this.sizes.observe(UU), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(UU, RU) {
        var gU;
        const tU = this.anchorOf(UU);
        if (!tU) return 0;
        const {
          y: pU
        } = tU, EU = tU.x + (null !== (gU = this.labelOffsets.get(UU)) && void 0 !== gU ? gU : 0), PU = this.em, {
          halfWidth: TU,
          labelled: qU
        } = this.extentOf(UU), KU = pU - PU, cU = EU + TU;
        return pU + PU * (qU ? 6.2 : 3) < RU.top || KU > RU.bottom || cU < RU.left - 6 || EU - TU > RU.right ? 0 : Math.max(RU.left - 6 - cU, 6 - (EU - TU))
      }
      shiftOnScreen(UU) {
        var RU;
        const gU = this.anchorOf(UU);
        if (!gU) return 0;
        const {
          halfWidth: tU
        } = this.extentOf(UU), pU = gU.x + (null !== (RU = this.labelOffsets.get(UU)) && void 0 !== RU ? RU : 0), EU = pU + tU - (this.innerWidth - 6);
        return EU > 0 ? -EU : Math.max(0, 6 - (pU - tU))
      }
      runLabelAside(UU, RU) {
        var gU;
        let tU = null;
        for (let PU = 0; PU < UU.children.length; PU++) UU.children[PU].classList.contains("DirectionArrowLabel") && (tU = UU.children[PU]);
        if (!tU) return 0;
        const pU = UU.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(UU) : null,
          EU = (pU && this.api ? this.side.sideOf(this.api, {
            x: pU.x / this.innerWidth * 100,
            y: pU.y / this.innerHeight * 100
          }, RU, this.project) : 0) * this.halfWidthOf(tU);
        return EU !== (null !== (gU = this.sideLabels.get(tU)) && void 0 !== gU ? gU : 0) && (tU.style.transform = 0 === EU ? "" : `translateX(-50%) translateX(${EU}px)`, 0 === EU ? this.sideLabels.delete(tU) : this.sideLabels.set(tU, EU)), EU
      }
      extentOf(UU) {
        let RU = this.em,
          gU = !1;
        for (let tU = 0; tU < UU.children.length; tU++) {
          const pU = UU.children[tU],
            EU = pU.classList.contains("DirectionArrowLabel");
          gU ||= EU, (EU || pU.classList.contains("DirectionArrowDistance")) && (RU = Math.max(RU, this.halfWidthOf(pU)))
        }
        return {
          halfWidth: RU,
          labelled: gU
        }
      }
      halfWidthOf(UU) {
        let RU = this.halfWidths.get(UU);
        return void 0 === RU && (RU = UU.offsetWidth / 2, this.halfWidths.set(UU, RU), this.sizes.observe(UU), this.labels.add(UU)), RU
      }
      forgetGoneLabels() {
        for (const UU of this.labels) UU.isConnected || (this.sizes.unobserve(UU), this.halfWidths.delete(UU), this.labels.delete(UU))
      }
      anchorOf(UU) {
        const RU = UU.style.translate,
          gU = this.anchors.get(UU);
        if (gU && gU.translate === RU && gU.innerWidth === this.innerWidth && gU.innerHeight === this.innerHeight) return gU;
        const tU = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(RU);
        if (!tU) return null;
        const pU = {
          translate: RU,
          x: parseFloat(tU[1]) / 100 * this.innerWidth,
          y: parseFloat(tU[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(UU, pU), pU
      }
    }
    const Ae = "Baf2ArrowText";

    function ze(UU, RU) {
      const gU = UU.rows.find((UU => UU.current));
      return VU(UU.tutorial) && null !== gU && void 0 !== gU && gU.item && Ap(gU) && ZU(gU.item).includes(RU) ? gU.item : null
    }
    const Me = new class {
      constructor(UU) {
        this.select = UU, this.picks = new Map
      }
      open(UU, RU, gU) {
        const tU = ze(RU, UU);
        null !== tU && this.Hj(UU, tU, gU)
      }
      follow(UU, RU) {
        if (TU())
          for (const [gU, {
              item: tU,
              had: pU
            }] of this.picks) {
            const EU = ze(UU, gU);
            EU !== tU && (null !== EU && RU(tU) > pU ? this.Hj(gU, EU, RU) : this.picks.delete(gU))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      Hj(UU, RU, gU) {
        this.picks.set(UU, {
          item: RU,
          had: gU(RU)
        }), this.select(UU, RU)
      }
    }(vp.p);

    function De(UU) {
      return RU => {
        let gU = 0;
        for (const tU of UU.getInventoryItems())(null === tU || void 0 === tU ? void 0 : tU.name) === RU && (gU += null === tU.amount ? 1 : Math.max(tU.amount, 0));
        return gU
      }
    }

    function Le(UU, RU, gU, tU) {
      UU.getClientOption(RU, "canCraft") && "inventory" !== mp.b.get("openInGameMenuName") && (Me.open(gU, tU.get(), De(UU)), Xp.p.yh("toggleMenu", `inventory|${gU}`))
    }
    let Ne = null,
      le = !1;

    function Oe(UU) {
      const RU = wE();
      UU === Ne && RU === le || (Ne = UU, le = RU, (0, vp.t)(function(UU, RU) {
        const gU = new Map;
        for (let tU = UU + 1; tU <= pU.length; tU++) {
          const pU = zE(tU, UU, RU);
          if (pU)
            for (const RU of eU(tU).unlocks) gU.set(RU, {
              ...pU,
              stepsAway: tU - UU
            })
        }
        return gU
      }(UU, RU)))
    }

    function UW() {
      return (0, vp.v)(AE(Object.keys(oU), sE)), () => {
        (0, vp.v)([])
      }
    }
    const RW = "buildAFactory2Game:",
      gW = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      tW = {
        on: `${RW}tutorialButtonOn`,
        hud: `${RW}tutorialButtonHud`,
        off: `${RW}tutorialButtonOff`
      },
      pW = {
        on: `${RW}tutorialPickedOn`,
        hud: `${RW}tutorialPickedHud`,
        off: `${RW}tutorialPickedOff`
      };

    function EW(UU, RU, gU) {
      let tU = null,
        pU = () => {};
      const EU = EU => {
        var PU;
        let {
          tutorial: TU,
          tutorialKnown: qU
        } = EU;
        (null === (PU = tU) || void 0 === PU ? void 0 : PU.tutorial) === TU && tU.tutorialKnown === qU || (tU = {
          tutorial: TU,
          tutorialKnown: qU
        }, pU = (0, fp.t)({
          id: "baf2Tutorial",
          order: -1,
          labelKey: tW[TU],
          icon: {
            kind: "icon",
            name: gW[TU]
          },
          iconOnly: !0,
          disabled: !qU,
          className: "Baf2TutorialButton",
          onClick: () => {
            var tU;
            (tU => {
              const pU = RU.setTutorial(tU);
              UU.send(`baf2tutorial ${tU} ${pU}`), gU.show({
                baf2ToastText: [(0, rU.ke)({
                  translationKey: pW[tU]
                }, rU.N.whiteUiText)],
                baf2ToastMs: 3e3,
                baf2ToastStyle: "baf2ToastInfo"
              })
            })((tU = RU.get().tutorial, BU[(BU.indexOf(tU) + 1) % BU.length]))
          }
        }))
      };
      EU(RU.get());
      const PU = Xp.p.subscribe(dp, EU);
      return () => {
        Xp.p.unsubscribe(PU), pU()
      }
    }

    function PW(UU, RU, gU) {
      var tU, pU;
      const EU = UU.getTargetedBlock();
      if (!EU || ! function(UU, RU, gU) {
          if ("Chest" !== RU) return !1;
          const tU = UU.split("|")[0];
          if (!Kg(tU) || 0 === rR[tU].outputSlots.length) return !1;
          const pU = WQ(UU);
          return gU[0] === pU[0] && gU[1] === pU[1] && gU[2] === pU[2]
        }(gU, null === (tU = UU.QRU(RU)) || void 0 === tU ? void 0 : tU.name, EU.normal)) return !1;
      const [PU, TU, qU] = EU.cj, KU = UU.getBlockId(PU, TU, qU);
      return 0 === KU || !0 === (null === (pU = YU.f[KU]) || void 0 === pU ? void 0 : pU.canBePlacedOver)
    }
    var TW = gU(36311);
    const qW = new Set(hg.b);
    class KW {
      constructor(UU) {
        this.toasts = UU, this.lastAt = -1 / 0
      }
      onAltAction(UU, RU, gU) {
        const tU = UU.getTargetedBlock();
        if (!tU || function(UU) {
            const RU = UU.split("|")[0];
            return Kg(RU) || null !== Jt(RU) || nU(RU) || hg.b.includes(RU)
          }(gU) && !qW.has(gU.split("|")[0])) return;
        const pU = UU.QRU(RU);
        if (!pU || !qW.has(pU.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const EU = pU.typeObj.id,
          [PU, TU, qU] = tU.cj,
          KU = UU.getBlockId(PU, TU, qU),
          cU = YU.f[KU];
        (0 === KU || null !== cU && void 0 !== cU && cU.Nj || null !== cU && void 0 !== cU && cU.canBePlacedOver) && UU.isSolidToPlayerBlockId(EU) && UU.canModifyBlockAt(PU, TU, qU) && UU.dUU(PU, TU, qU, EU) && !UU.dUU(PU, TU, qU, EU, RU) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, rU.ke)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, rU.N.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class cW {
      constructor(UU) {
        this.show = UU, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(UU, RU, gU) {
        var tU;
        if (!RU) return this.started = null, void this.gatedThisHold.clear();
        if (!UU) return void(this.started = null);
        const pU = `${UU.x},${UU.y},${UU.z},${UU.WT}`;
        if (pU === this.started) return;
        this.started = pU;
        const EU = Ht(UU.y) ? Ue(UU.block, UU.WT, UU.level) : null;
        if (null === EU || this.gatedThisHold.has(pU)) return;
        this.gatedThisHold.add(pU);
        const PU = UU.block.split("|")[0];
        gU - (null !== (tU = this.hintedAt.get(PU)) && void 0 !== tU ? tU : -1 / 0) < 5e3 || (this.hintedAt.set(PU, gU), this.show({
          baf2ToastText: Re(EU, UU.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var GW = gU(34);

    function jW(UU, RU) {
      const gU = [...UU.baf2CoreBankPaused];
      for (const [pU] of UU.baf2CoreBanked) gU.push(pU);
      for (const PU of pU) {
        for (const {
            item: UU
          }
          of PU.cost) gU.push(UU);
        for (const UU of PU.newDeposits) gU.push(UU.block);
        for (const UU of PU.unlocks) gU.push(UU, aU(UU));
        PU.reward && gU.push(PU.reward);
        for (const {
            item: UU
          }
          of null !== (tU = null === (EU = PU.charge) || void 0 === EU ? void 0 : EU.items) && void 0 !== tU ? tU : []) {
          var tU, EU;
          gU.push(UU)
        }
      }
      return {
        message: UU,
        itemNames: RU([...new Set(gU)])
      }
    }
    const uW = "baf2MultiblockGuide";
    const CW = new Map;
    const hW = function(UU, RU, gU, pU) {
      let {
        localPlayerId: EU
      } = pU;
      const PU = new eT,
        TU = new Oj,
        KU = new Pu,
        cU = new pu(KU),
        GU = (UU, RU) => {
          RU ? cU.observe(UU) : cU.unobserve(UU)
        },
        jU = new tu,
        uU = new cu(GU),
        CU = UU => uU.covers(UU),
        hU = new au;
      let QU;
      const eU = new sP((UU => {
          QU.sendCommand(UU)
        })),
        WU = () => {
          eU.send("baf2questbook")
        },
        fU = UU => function(UU, RU, gU) {
          const tU = {};
          for (const pU of gU) {
            let gU = CW.get(pU);
            void 0 === gU && (gU = UU.getItemStat(RU, pU, "displayName"), CW.set(pU, gU)), tU[pU] = gU
          }
          return tU
        }(QU, EU, UU),
        xU = new sp(WU),
        mU = new yu((() => mp.b.get("loadingOverlayVisible"))),
        IU = new zu,
        JU = new KW(mU),
        wU = new cW((UU => {
          mU.show(UU, UU.baf2ToastMs)
        })),
        bU = new gC(GU),
        oU = new oQ(bU),
        ZU = new nP,
        aU = new NQ,
        BU = new tT,
        VU = new KC({
          read: () => !1 !== GW.k.getItem(uW),
          write: UU => {
            GW.k.setItem(uW, UU)
          }
        }),
        vU = new vC(VU),
        dU = new SC(VU),
        HU = new Th(VU, (UU => function(UU, RU) {
          const gU = Uq(RU.w, RU.h, RU.d),
            tU = new Uint8Array(gU);
          for (let pU = 0; pU < gU; pU++) {
            const gU = YC(UU, lg(RU, gt(RU, pU)));
            tU[pU] = null === gU ? 0 : LT(gU)
          }
          return tU
        }(QU, UU)), lC(eU)),
        SU = new qh(VU, lC(eU)),
        sU = new Eh,
        yU = (UU, RU) => {
          let [gU, tU, pU] = UU;
          sU.answered(RU) || mU.show({
            baf2ToastText: [(0, rU.ke)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: gU,
                h: tU,
                d: pU
              }
            }, rU.N.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      HU.onSizeNotTaken(yU), SU.onSizeNotTaken(yU);
      const iU = new jh,
        AU = new Ah(VU),
        zU = new Mh,
        DU = new EQ(zU),
        LU = new QQ,
        NU = new ZQ,
        OU = new SQ(NU),
        UR = new LQ(NU),
        RR = NU.lookSource(),
        gR = new Ge({
          handles: UU => RR.handles(UU) || UU === XU,
          line: (UU, RU) => UU === XU ? function(UU, RU, gU) {
            var tU;
            const pU = FU(null === (tU = RU.at(gU)) || void 0 === tU ? void 0 : tU.item);
            return null === pU ? {
              key: `${qe}lookFarmEmpty`
            } : {
              key: UU.blockIdToBlockName(UU.getBlockId(gU[0], gU[1], gU[2])).endsWith("|Running") ? `${qe}lookFarmRunning` : `${qe}lookFarmWaiting`,
              keys: {
                mob: kU(pU)
              }
            }
          }(QU, bU, RU) : RR.line(UU, RU),
          version: () => RR.version() + bU.version()
        }, (UU => yC(VU.all(), UU, (UU => YC(QU, UU)))), (() => xU.get().tier)),
        tR = new ah,
        pR = new we,
        ER = new Ye,
        PR = Ye.blade(),
        TR = new Se,
        qR = new Lu,
        KR = new ie,
        cR = new Xe,
        jR = new re;
      let uR = -1 / 0,
        CR = 0,
        hR = -1 / 0,
        QR = -1 / 0;
      const eR = () => {
          eU.send("baf2islandsclose"), QR = Date.now()
        },
        WR = [];

      function fR(UU) {
        var RU, gU, tU, pU, EU, PU, qU;
        "core" === (null === (RU = TU.get()) || void 0 === RU ? void 0 : RU.kind) && "core" !== (null === UU || void 0 === UU ? void 0 : UU.kind) && eU.send("baf2coreclose"), "power" === (null === (gU = TU.get()) || void 0 === gU ? void 0 : gU.kind) && "power" !== (null === UU || void 0 === UU ? void 0 : UU.kind) && eU.send("baf2powerclose"), "water" === (null === (tU = TU.get()) || void 0 === tU ? void 0 : tU.kind) && "water" !== (null === UU || void 0 === UU ? void 0 : UU.kind) && eU.send(lU.x), "terminal" === (null === (pU = TU.get()) || void 0 === pU ? void 0 : pU.kind) && "terminal" !== (null === UU || void 0 === UU ? void 0 : UU.kind) && eU.send("baf2terminalclose"), "islands" === (null === (EU = TU.get()) || void 0 === EU ? void 0 : EU.kind) && "islands" !== (null === UU || void 0 === UU ? void 0 : UU.kind) && eR();
        const KU = NU.getStatus();
        "collider" === (null === (PU = TU.get()) || void 0 === PU ? void 0 : PU.kind) && "collider" !== (null === UU || void 0 === UU ? void 0 : UU.kind) && KU && eU.send(dq(KU, "close"));
        const cU = UU => "reactor" === UU || "battery" === UU;
        if (cU(null === (qU = TU.get()) || void 0 === qU ? void 0 : qU.kind) && !cU(null === UU || void 0 === UU ? void 0 : UU.kind)) {
          var GU, jU, uU;
          const UU = "reactor" === (null === (GU = TU.get()) || void 0 === GU ? void 0 : GU.kind) ? null === (jU = HU.get()) || void 0 === jU ? void 0 : jU.status.baf2RxAt : null === (uU = SU.get()) || void 0 === uU ? void 0 : uU.status.baf2BatAt;
          UU && eU.send(GR(UU, "close"))
        }
        "quests" === (null === UU || void 0 === UU ? void 0 : UU.kind) && WU(), TU.set(UU), null === UU && IU.release()
      }

      function xR() {
        (0, xp.h)(), fR(null)
      }
      let mR = new Set,
        IR = !1;
      const JR = {
        onCreate: UU => {
          QU = UU, QU.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const RU of oR) {
            const UU = rR[RU].inputSlots ? VT(PU) : aT(RU, PU, ZU, eU);
            WR.push((0, Wp.h)(RU, UU))
          }
          WR.push((0, xp.y)((0, tU.createElement)(tU.Fragment, null, (0, tU.createElement)(uu, {
            controller: uU
          }), (0, tU.createElement)(EC, {
            store: bU
          }), (0, tU.createElement)(ue, {
            store: gR
          }), (0, tU.createElement)(Su, {
            store: xU
          }), (0, tU.createElement)(iu, {
            store: mU
          }), (0, tU.createElement)(Mu, {
            store: IU
          }), (0, tU.createElement)(lu, {
            store: qR
          }), (0, tU.createElement)(Gh, {
            store: iU
          }), (0, tU.createElement)(Dh, {
            store: zU
          })), {
            content: (0, tU.createElement)(Uu, {
              commands: eU,
              store: TU,
              power: ZU,
              water: BU,
              reactor: HU,
              battery: SU,
              collider: NU,
              terminal: aU,
              quests: xU,
              close: xp.l,
              leave: () => {
                IU.dropHeld(), (0, xp.h)()
              },
              askIslands: () => {
                QR = -1 / 0, uR = Date.now(), CR = eU.send(MU)
              },
              openSocial: () => {
                (0, xp.h)(), mp.b.set({
                  openEverythingMenuName: Gg.n.SOCIAL
                })
              },
              showCore: UU => {
                fR({
                  kind: "core",
                  core: UU
                }), eU.send("baf2corereopen")
              }
            }),
            onClose: () => {
              fR(null)
            }
          })), WR.push((0, fp.t)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              fR({
                kind: "quests"
              }), (0, xp.w)()
            }
          })), WR.push(EW(eU, xU, mU)), IR = !1, WR.push(nE((() => {
            null !== Ne && Oe(Ne)
          }))), WR.push(UW()), WR.push(function() {
            const UU = Xp.p.subscribe(dp, UE),
              RU = () => {
                if (Op) {
                  const UU = Op;
                  Op = null, (0, vp.u)(UU)
                }
              },
              gU = Xp.p.subscribe("toggleMenu", (UU => {
                "inventory" === (null === UU || void 0 === UU ? void 0 : UU.split("|")[0]) && RU()
              })),
              tU = Xp.p.subscribe("appManagerUpdated|openInGameMenuName", (UU => {
                "inventory" === UU && RU()
              }));
            return () => {
              Xp.p.unsubscribe(UU), Xp.p.unsubscribe(gU), Xp.p.unsubscribe(tU)
            }
          }()), WR.push(function(UU) {
            const RU = De(UU),
              gU = Xp.p.subscribe(dp, (UU => {
                Me.follow(UU, RU)
              }));
            return () => {
              Xp.p.unsubscribe(gU), Me.clear()
            }
          }(QU)), WR.push(function() {
            const UU = document.documentElement,
              RU = (0, Bu.b)(".InvenBodyRight", [], (() => {
                const RU = document.querySelector(".InvenBodyRight");
                RU && UU.style.setProperty("--baf2-backpack-width", `${RU.offsetWidth}px`)
              }));
            return () => {
              RU(), UU.style.removeProperty("--baf2-backpack-width")
            }
          }()), WR.push(function() {
            const UU = document.documentElement;
            return UU.classList.add(Ae), () => {
              UU.classList.remove(Ae)
            }
          }()), WR.push((() => {
            cU.dispose(), KU.dispose()
          })), hU.start(QU), WR.push((() => {
            hU.dispose(), TR.dispose(), oU.dispose()
          }))
        },
        onClose: () => {
          (0, vp.u)([]), Op = null, lp = new Set, Ne = null, (0, vp.t)(new Map), CW.clear();
          for (const UU of WR) UU();
          xU.dispose(), gR.dispose(), mU.dispose(), IU.dispose(), tR.dispose(), pR.dispose(QU), vU.dispose(QU), dU.dispose(QU), AU.dispose(QU), DU.dispose(QU), zU.dispose(), LU.dispose(), VU.dispose(), HU.dispose(), SU.dispose(), iU.dispose(), ER.dispose(), PR.dispose(), qR.dispose(), OU.dispose(QU), UR.dispose(QU), NU.dispose(), KR.dispose(), eU.clear()
        },
        onAfterRender: (UU, RU) => {
          var gU, tU, pU;
          try {
            hU.onAfterRender(RU)
          } catch (KU) {
            console.error("Error drawing BAF2 belt items", KU)
          }
          try {
            TR.onAfterRender(QU, EU)
          } catch (KU) {
            console.error("Error drawing BAF2 jet flames", KU)
          }
          IR || (IR = !0, eU.send("baf2clientready"));
          const PU = QU.getPositionView(EU);
          uU.onAfterRender(RU, PU, jU), bU.onAfterRender(RU, PU, jU, CU), cU.run(jU), tR.onAfterRender(QU, PU), pR.onAfterRender(QU, PU), oU.onAfterRender(QU, PU), vU.onAfterRender(QU, PU), dU.onAfterRender(QU, EU, PU), AU.onAfterRender(QU, EU, PU), DU.onAfterRender(QU, EU), LU.onAfterRender(QU, PU), xU.onPlayerY(PU[1]), OU.onAfterRender(QU), UR.onAfterRender(QU, EU, PU);
          const qU = QU.getTargetedBlock();
          gR.onAfterRender(QU, EU, null !== (gU = null === qU || void 0 === qU ? void 0 : qU.cL) && void 0 !== gU ? gU : 0, null !== (tU = null === qU || void 0 === qU ? void 0 : qU.position) && void 0 !== tU ? tU : null), KR.onAfterRender(QU, RU), wU.onMining(function(UU, RU) {
            var gU, tU;
            const pU = UU.getMiningBlock();
            if (!pU) return null;
            const EU = (0, YU.e)(UU.getBlockId(pU[0], pU[1], pU[2])),
              PU = null !== (gU = null === (tU = UU.QRU(RU)) || void 0 === tU ? void 0 : tU.name) && void 0 !== gU ? gU : null,
              TU = UU.getItemStat(RU, EU.split("|")[0], "harvestLevel");
            return {
              block: EU,
              x: pU[0],
              y: pU[1],
              z: pU[2],
              WT: PU,
              level: TU
            }
          }(QU, EU), QU.isMining(), performance.now()), "dropMap" === (null === (pU = TU.get()) || void 0 === pU ? void 0 : pU.kind) && Ht(PU[1]) && xR()
        },
        onPlayerChangeBlock: (UU, RU, gU, tU, pU, PU) => {
          UU === EU && function(UU, RU, gU, tU, pU, EU, PU) {
            const TU = Ve(EU, PU, UU.isPlayerCrouching(RU));
            if (null === TU) return;
            if (UU.mw(gU, tU, pU, TU), !UU.getClientOption(RU, "canPickUpItems")) return;
            const qU = Pg[TU.split("|")[0]];
            var KU, cU, GU;
            void 0 !== qU && (KU = UU.getInventoryItems(), cU = qU, GU = cC.e.maxItemStackSize, UU.getInventoryFreeSlotCount(RU) > 0 || KU.some((UU => null !== UU && UU.name === cU && null !== UU.amount && UU.amount < GU))) && UU.playSound(RU, (0, TW.d)("pickUp"), .5, 1)
          }(QU, UU, RU, gU, tU, pU, PU)
        },
        onPlayerAltAction: (UU, RU, gU, tU, pU) => {
          var PU, TU;
          if (!QU.getClientOption(EU, "canPickUpItems")) return;
          const qU = null !== (PU = null === (TU = QU.QRU(EU)) || void 0 === TU ? void 0 : TU.name) && void 0 !== PU ? PU : null,
            KU = function(UU, RU) {
              const gU = UU.split("|")[0];
              return nU(gU) && RU !== qp && "Sky Pack" !== RU ? gU : null
            }(pU, qU);
          if (null !== KU) return void(cR.tap(KU, performance.now()) && Le(QU, EU, KU, xU));
          if (!kt(qU)) return;
          const cU = jR.isNewPress(performance.now()),
            GU = function(UU, RU, gU) {
              return !kt(RU) || gU ? null : lt(UU)
            }(pU, qU, QU.isPlayerCrouching(EU));
          null !== GU && cU && QU.mw(RU, gU, tU, GU)
        },
        onPlayerAttemptAltAction: (UU, RU, gU, tU, pU) => {
          if (function(UU, RU, gU, tU, pU) {
              "Workbench" === tU.split("|")[0] && UU.getClientOption(gU, "canCraft") && (Me.open("Workbench", pU.get(), De(UU)), RU.send("baf2station Workbench"))
            }(QU, eU, EU, pU, xU), PW(QU, EU, pU)) return "preventAction";
          JU.onAltAction(QU, EU, pU)
        },
        onReceivedMessageFromServer: (UU, RU) => {
          if ("baf2MachineStatus" === UU) {
            var gU, tU, pU, KU, cU, GU, jU, CU, WU, JU, wU, nU, oU, YU, rU, XU;
            const UU = RU,
              EU = UU.baf2MachineTaught;
            PU.set(UU.baf2MachinePos, {
              status: UU.baf2MachineStatus,
              power: null !== (gU = UU.baf2MachinePower) && void 0 !== gU ? gU : null,
              opLeftMs: null !== (tU = UU.baf2MachineOpLeftMs) && void 0 !== tU ? tU : null,
              dug: UU.baf2MachineYield ? {
                item: UU.baf2MachineYield,
                name: fU([UU.baf2MachineYield])[UU.baf2MachineYield]
              } : null,
              powerCap: null !== (pU = UU.baf2MachinePowerCap) && void 0 !== pU ? pU : null,
              powerRates: null !== (KU = UU.baf2MachinePowerRates) && void 0 !== KU ? KU : null,
              coupled: !0 === UU.baf2MachineCoupled,
              couplerLevel: null !== (cU = UU.baf2MachineCoupler) && void 0 !== cU ? cU : 1,
              taught: EU,
              taughtName: EU ? fU([EU])[EU] : null,
              tier: null !== (GU = UU.baf2MachineTier) && void 0 !== GU ? GU : null,
              input: null !== (jU = UU.baf2MachineInput) && void 0 !== jU ? jU : null,
              inertCoupler: null !== (CU = UU.baf2MachineInertCoupler) && void 0 !== CU ? CU : null,
              inputShort: null !== (WU = UU.baf2MachineInputShort) && void 0 !== WU ? WU : null,
              field: null !== (JU = UU.baf2MachineField) && void 0 !== JU ? JU : null,
              noSeeds: !0 === UU.baf2MachineNoSeeds,
              fuelFed: !0 === UU.baf2MachineFuelFed,
              fuelFeeds: !0 === UU.baf2MachineFuelFeeds,
              coreFull: !0 === UU.baf2MachineCoreFull,
              waterUnpowered: !0 === UU.baf2MachineWaterUnpowered,
              powerShort: !0 === UU.baf2MachinePowerShort,
              powerWait: !0 === UU.baf2MachinePowerWait,
              reactorPowered: !0 === UU.baf2MachineReactorPowered,
              fuelLeftMs: null !== (wU = UU.baf2MachineFuelLeftMs) && void 0 !== wU ? wU : null,
              burning: null !== (nU = UU.baf2MachineBurning) && void 0 !== nU ? nU : null,
              fuelKeep: null !== (oU = UU.baf2MachineFuelKeep) && void 0 !== oU ? oU : null,
              water: null !== (YU = UU.baf2MachineWater) && void 0 !== YU ? YU : null,
              farm: null !== (rU = UU.baf2MachineFarm) && void 0 !== rU ? rU : null,
              cryo: null !== (XU = UU.baf2MachineCryo) && void 0 !== XU ? XU : null
            })
          } else if ("baf2StationOpen" === UU) {
            const UU = RU.baf2Station;
            cR.consumeServerOpen(UU, performance.now()) || Le(QU, EU, UU, xU)
          } else if ("baf2Power" === UU) {
            const UU = RU;
            ZU.set(UU), UU.baf2PowerOpen && (fR({
              kind: "power"
            }), (0, xp.w)())
          } else if (UU === lU.A) {
            const UU = RU;
            BU.set(UU), UU.baf2WaterOpen && (fR({
              kind: "water"
            }), (0, xp.w)())
          } else if ("baf2RxPlans" === UU) {
            var vU, dU, yU;
            const UU = RU;
            VU.Tm(UU);
            const gU = new Set(UU.baf2RxPlanList.map((UU => {
              let [RU, gU, tU] = UU;
              return `${RU},${gU},${tU}`
            })));
            iU.retain(gU);
            const tU = null === (vU = TU.get()) || void 0 === vU ? void 0 : vU.kind,
              pU = "reactor" === tU ? null === (dU = HU.get()) || void 0 === dU ? void 0 : dU.status.baf2RxAt : "battery" === tU ? null === (yU = SU.get()) || void 0 === yU ? void 0 : yU.status.baf2BatAt : void 0;
            pU && mR.has(pU.join(",")) && !gU.has(pU.join(",")) && xR(), mR = gU
          } else if ("baf2RxStatus" === UU) {
            const UU = RU;
            HU.set(UU), UU.baf2RxOpen && (fR({
              kind: "reactor"
            }), (0, xp.w)())
          } else if ("baf2BatStatus" === UU) {
            const UU = RU;
            SU.set(UU), UU.baf2BatOpen && (fR({
              kind: "battery"
            }), (0, xp.w)())
          } else if ("baf2RxAlarm" === UU) iU.Tm(RU);
          else if ("baf2Bomb" === UU) zU.Tm(RU, QU.getPositionView(EU));
          else if ("baf2Fallout" === UU) LU.Tm(RU);
          else if ("baf2ColBeams" === UU) NU.onBeams(RU);
          else if ("baf2ColStatus" === UU) {
            const UU = RU;
            var kU, FU;
            if (NU.onStatus(UU), UU.baf2ColOpen) NU.onOpen(null !== (kU = null === (FU = QU.QRU(EU)) || void 0 === FU ? void 0 : FU.name) && void 0 !== kU ? kU : null), fR({
              kind: "collider"
            }), (0, xp.w)()
          } else if ("baf2Terminal" === UU) {
            const UU = RU;
            var AU;
            if (aU.apply(UU)) UU.baf2TermReset && (fR({
              kind: "terminal"
            }), (0, xp.w)());
            else "terminal" === (null === (AU = TU.get()) || void 0 === AU ? void 0 : AU.kind) && (TU.set(null), (0, xp.h)())
          } else if ("baf2Core" === UU) {
            var DU;
            const UU = RU;
            if (qU(!0 === UU.baf2CoreNuclear), function(UU, RU) {
                return "core" === (null === UU || void 0 === UU ? void 0 : UU.kind) && RU.baf2CoreTier > UU.core.message.baf2CoreTier
              }(TU.get(), UU)) return void(0, xp.h)();
            if (UU.baf2CoreRefresh && "core" !== (null === (DU = TU.get()) || void 0 === DU ? void 0 : DU.kind)) return;
            fR({
              kind: "core",
              core: jW(UU, fU)
            }), UU.baf2CoreRefresh || (0, xp.w)()
          } else if ("baf2WrenchUndo" === UU) {
            const {
              baf2WrenchPos: UU,
              baf2WrenchBlock: gU
            } = RU;
            QU.mw(UU[0], UU[1], UU[2], gU)
          } else if ("baf2Toast" === UU) {
            const UU = RU;
            sU.heard(performance.now(), UU.baf2ToastMs), mU.show(UU)
          } else if ("baf2Area" === UU) IU.arrive(RU, null !== TU.get());
          else if ("baf2Quest" === UU) {
            const UU = RU;
            qU(!0 === UU.baf2QuestNuclear), xU.set(UU, function(UU, RU) {
              var gU, tU, pU, EU, PU;
              const TU = [];
              for (const [, , cU, , , , , , GU, jU] of UU.baf2QuestSteps) null !== cU && TU.push(cU), TU.push(...null !== GU && void 0 !== GU ? GU : [], ...null !== jU && void 0 !== jU ? jU : []);
              UU.baf2QuestReward && TU.push(UU.baf2QuestReward);
              const qU = null === (gU = UU.baf2QuestSide) || void 0 === gU ? void 0 : gU[2][2];
              qU && TU.push(qU), TU.push(...null !== (tU = null === (pU = UU.baf2QuestSide) || void 0 === pU ? void 0 : pU[2][8]) && void 0 !== tU ? tU : [], ...null !== (EU = null === (PU = UU.baf2QuestSide) || void 0 === PU ? void 0 : PU[2][9]) && void 0 !== EU ? EU : []);
              for (const [cU] of null !== (KU = UU.baf2QuestAlso) && void 0 !== KU ? KU : []) {
                var KU;
                TU.push(cU)
              }
              return RU(TU)
            }(UU, fU)), Oe(UU.baf2QuestTier)
          } else if ("baf2Route" === UU) ! function(UU, RU) {
            let {
              baf2RouteCells: gU,
              baf2RouteInto: tU
            } = RU;
            0 !== gU.length && tU ? UU.setRouteChevrons({
              cells: gU.map(((UU, RU) => {
                const [pU, , EU] = function(UU, RU, gU) {
                  const tU = gU + 1 < UU.length ? UU[gU + 1] : RU;
                  return [tU[0] - UU[gU][0], 0, tU[2] - UU[gU][2]]
                }(gU, tU, RU);
                return {
                  pos: UU,
                  way: [pU, EU]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : UU.setRouteChevrons(null)
          }(QU, RU);
          else if ("baf2QuestBook" === UU) xU.setBook(RU);
          else if ("baf2Stalls" === UU) uU.set(RU.baf2StallCells);
          else if (UU === hg.i) hU.onMoves(RU);
          else if (UU === hg.g) hU.onLines(RU);
          else if ("baf2Labels" === UU) bU.Tm(RU);
          else if ("baf2DropMap" === UU) fR({
            kind: "dropMap",
            dropMap: RU
          }), (0, xp.w)();
          else if ("baf2Islands" === UU) {
            var OU, UR;
            const UU = RU;
            if (eU.syncIslandEdits(UU.baf2IslandsAnswered), !UU.baf2IslandsOpen && "islands" !== (null === (OU = TU.get()) || void 0 === OU ? void 0 : OU.kind)) return;
            if (UU.baf2IslandsOpen) {
              var RR, gR;
              const RU = mp.b.get("openEverythingMenuName"),
                gU = eU.sent() >= CR,
                tU = "other" !== (WR = {
                  askedAtMs: uR,
                  askSent: gU,
                  reaskedAtMs: hR,
                  nowMs: Date.now(),
                  panel: null !== (RR = null === (gR = TU.get()) || void 0 === gR ? void 0 : gR.kind) && void 0 !== RR ? RR : null,
                  inGameMenu: mp.b.get("openInGameMenuName"),
                  everythingMenu: null === RU ? null : RU === Gg.n.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== UU.baf2IslandsFocusInvite
                }).everythingMenu && (!!WR.focusInvite || "islands" === WR.panel && "clientGame" === WR.inGameMenu || !(WR.nowMs - WR.reaskedAtMs < VK) && (WR.askSent && WR.nowMs - WR.askedAtMs < VK ? "core" === WR.panel && "clientGame" === WR.inGameMenu && null === WR.everythingMenu : "shop" === WR.everythingMenu || null === WR.inGameMenu));
              if (gU && (uR = -1 / 0), hR = -1 / 0, !tU) return void eR()
            }
            const gU = (pR = UU.baf2IslandsOpen, KR = "islands" === (null === (UR = TU.get()) || void 0 === UR ? void 0 : UR.kind), GR = QR, jR = Date.now(), pR && !KR && jR - GR < VK);
            fR({
              kind: "islands",
              islands: UU,
              arrivedAtMs: Date.now(),
              backToCore: rK(TU.get())
            }), gU && (QR = -1 / 0, hR = Date.now(), eU.send(MU)), UU.baf2IslandsOpen && ("clientGame" !== mp.b.get("openInGameMenuName") && (0, Ip.f)(), (0, xp.w)())
          } else if ("baf2CoopTransfer" === UU) {
            var tR;
            const UU = RU;
            UU.baf2TransferOn ? (fR({
              kind: "transfer",
              transfer: UU,
              arrivedAtMs: Date.now()
            }), (0, xp.w)()) : "transfer" === (null === (tR = TU.get()) || void 0 === tR ? void 0 : tR.kind) && (0, xp.h)()
          } else "baf2IslandLeft" === UU ? (IU.dropHeld(), null !== TU.get() && xR(), "inventory" === mp.b.get("openInGameMenuName") && (0, Ip.f)()) : "baf2Arc" === UU ? ER.Tm(QU, RU) : "baf2Blade" === UU ? PR.onBlade(QU, RU) : "baf2JetFlame" === UU ? TR.Tm(QU, RU) : "baf2GearPower" === UU && qR.Tm(RU);
          var pR, KR, GR, jR, WR
        }
      };
      return JR
    }
  },
  38061: (UU, RU, gU) => {
    function tU(UU, RU, gU) {
      const tU = new Set,
        pU = new ResizeObserver(gU),
        EU = () => {
          const RU = new Set(document.querySelectorAll(UU));
          let EU = !1;
          for (const UU of tU) RU.has(UU) || (pU.unobserve(UU), tU.delete(UU), EU = !0);
          for (const UU of RU) tU.has(UU) || (pU.observe(UU), PU.observe(UU, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), tU.add(UU));
          EU && gU()
        },
        PU = new MutationObserver((RU => {
          RU.some((UU => "attributes" === UU.type)) && gU(), RU.some((RU => function(UU, RU, gU) {
            if ("childList" !== UU.type) return !1;
            for (const tU of UU.addedNodes)
              if (tU instanceof Element && (tU.matches(RU) || tU.querySelector(RU))) return !0;
            for (const tU of UU.removedNodes)
              if (tU instanceof Element)
                for (const UU of gU)
                  if (tU.contains(UU)) return !0;
            return !1
          }(RU, UU, tU))) && EU()
        }));
      PU.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const TU of RU) pU.observe(TU);
      return window.addEventListener("resize", gU), EU(), gU(), () => {
        pU.disconnect(), PU.disconnect(), window.removeEventListener("resize", gU)
      }
    }
    gU.d(RU, {
      b: () => tU
    })
  },
  38046: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => PU,
      g: () => EU
    });
    const tU = new WeakMap;

    function pU(UU) {
      let RU = tU.get(UU);
      return RU || (RU = {
        hidden: UU.hidden,
        x: NaN,
        y: NaN
      }, tU.set(UU, RU)), RU
    }

    function EU(UU, RU) {
      const gU = pU(UU);
      gU.hidden !== RU && (gU.hidden = RU, UU.hidden = RU)
    }

    function PU(UU, RU, gU) {
      const tU = pU(UU);
      tU.x === RU && tU.y === gU || (tU.x = RU, tU.y = gU, UU.style.translate = `${RU}vw ${gU}vh`)
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);