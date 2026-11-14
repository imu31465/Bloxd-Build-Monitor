export const id = 215;
export const ids = [215];
export const modules = {
  36555: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => AW
    });
    var wW = MW(36563);
    const CW = [0, 0, 0];
    class zR {
      constructor(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CW;
        this.pool = WW, this.origin = RW, this.count = 0, this.free = []
      }
      take() {
        var WW;
        const RW = null !== (WW = this.free.pop()) && void 0 !== WW ? WW : this.count++;
        return RW >= this.pool.aR && this.pool.grow(Math.max(2 * this.pool.aR, RW + 1)), this.hide(RW), RW
      }
      release(WW) {
        this.hide(WW), this.free.push(WW)
      }
      write(WW, RW, MW, CW) {
        const {
          records: zR
        } = this.pool, {
          origin: AW
        } = this, bR = WW * wW.d;
        zR[bR] = RW - AW[0], zR[bR + 1] = MW - AW[1], zR[bR + 2] = CW - AW[2], zR[bR + wW.e] = 0, this.pool.markDirty(WW)
      }
      hide(WW) {
        this.pool.records[WW * wW.d + wW.e] = 1, this.pool.markDirty(WW)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class AW {
      constructor(WW, RW, MW) {
        this.api = WW, this.model = RW, this.initialCapacity = MW, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(WW) {
        let RW = this.kinds.get(WW);
        if (void 0 === RW) {
          const MW = this.api.createInstancePool({
            ...this.model,
            item: WW
          }, this.initialCapacity);
          null === MW || void 0 === MW || MW.setOrigin(this.origin[0], this.origin[1], this.origin[2]), RW = MW && new zR(MW, this.origin), this.kinds.set(WW, RW)
        }
        return RW
      }
      follow(WW) {
        const {
          origin: RW
        } = this;
        if (Math.abs(WW[0] - RW[0]) <= 512 && Math.abs(WW[1] - RW[1]) <= 512 && Math.abs(WW[2] - RW[2]) <= 512) return !1;
        RW[0] = Math.floor(WW[0]), RW[1] = Math.floor(WW[1]), RW[2] = Math.floor(WW[2]);
        for (const MW of this.kinds.values()) null === MW || void 0 === MW || MW.pool.setOrigin(RW[0], RW[1], RW[2]);
        return !0
      }
      commit() {
        for (const WW of this.kinds.values()) null === WW || void 0 === WW || WW.commit()
      }
      dispose() {
        for (const WW of this.kinds.values()) null === WW || void 0 === WW || WW.dispose();
        this.kinds.clear()
      }
    }
  },
  36547: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      default: () => MP
    });
    var wW = MW(75);
    const CW = [{
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
        unlocks: ["Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool", "Nova Coupler", "Pocket Terminal", "Atomic Bomb", "Nova Wrench"],
        reward: "Deposit Seed (Uranium)"
      }],
      zR = 10;
    let AW = !0;

    function bR() {
      return AW
    }

    function yR(WW) {
      AW = WW
    }
    const NW = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function eW() {
      return AW ? CW.length : zR
    }

    function BW(WW) {
      var RW, MW;
      return null !== (RW = null === (MW = CW[WW - 1]) || void 0 === MW ? void 0 : MW.reactorTier) && void 0 !== RW ? RW : 0
    }

    function tR(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BW(WW) > 0;
      return MW && !AW ? "hidden" : WW <= RW ? "open" : MW ? RW < 5 ? "hidden" : RW < zR ? "teaser" : "locked" : "locked"
    }

    function TW(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: wW,
        n: CW
      } = YW(WW);
      return {
        key: RW[wW],
        params: {
          [wW]: MW ? String(CW) : CW
        }
      }
    }
    const gR = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function iR(WW, RW) {
      return BW(WW) > 0 && RW < zR
    }

    function YW(WW) {
      const RW = BW(WW);
      if (RW > 0) return {
        kind: "atomic",
        n: RW,
        short: `A${RW}`
      };
      const MW = function(WW) {
        return WW >= 6 && WW <= 10 ? WW - 6 + 1 : 0
      }(WW);
      return MW > 0 ? {
        kind: "stage",
        n: MW,
        short: `S${MW}`
      } : {
        kind: "tier",
        n: WW,
        short: String(WW)
      }
    }

    function JW(WW) {
      return CW[Math.max(1, Math.min(WW, CW.length)) - 1]
    }

    function PW(WW, RW) {
      return WW < RW ? function(WW) {
        var RW;
        return null !== (RW = CW[WW]) && void 0 !== RW ? RW : null
      }(WW) : null
    }
    const IW = "baf2coresubmit",
      oW = "baf2corebankpause",
      lW = "baf2coredeposit",
      FW = "baf2corechargepause";

    function fW(WW) {
      var RW;
      return null !== (RW = WW.baf2CoreOpen) && void 0 !== RW ? RW : zR
    }
    const QW = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function rR(WW) {
      return QW.includes(WW)
    }
    const cR = (WW, RW) => RW.map((RW => [RW, [WW]])),
      XW = Object.fromEntries([...cR("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...cR("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...cR("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...cR("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...cR("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...cR("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...cR("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...cR("Parts Bench", ["Focus Lens"]), ...cR("Machine Bench", ["Laser", "Collider"]), ...cR("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb"]), ...cR("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...cR("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...cR("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...cR("Tool Bench", ["Mob Cage"]), ...cR("Tool Bench", ["Pocket Terminal"]), ...cR("Tool Bench", ["Comet Beacon"]), ...cR("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function jR(WW) {
      var RW;
      return null !== (RW = XW[WW]) && void 0 !== RW ? RW : ["Workbench"]
    }

    function kR(WW) {
      return jR(WW)[0]
    }
    CW.slice(1).map(((WW, RW) => `Core Tier ${RW+2}`));
    var aR = MW(8180);
    const sW = ["on", "hud", "off"];

    function dW(WW) {
      return "on" === WW
    }
    var pW = MW(284);
    const hW = "Mob Farm",
      UW = {
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
      EW = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      VW = {
        1: 20,
        2: 60,
        3: 120
      },
      mR = "baf2farmvoid",
      xR = "Caged ",
      vR = " Spawner Block";

    function KW(WW) {
      return `lifeform:${(0,pW.oe)(WW)}`
    }

    function uW(WW) {
      if (!WW) return null;
      if (WW.startsWith(xR)) {
        const RW = WW.slice(6);
        return EW.includes(RW) ? RW : null
      }
      if (WW.endsWith(vR)) {
        const RW = WW.slice(0, -14);
        return void 0 !== UW[RW] ? RW : null
      }
      return null
    }

    function OW(WW) {
      return !0 === WW.mobFarm
    }

    function nW(WW, RW) {
      return VW[UW[RW]] * WW.opMs / 1e3
    }
    const GW = new Map;
    const LW = "baf2islands",
      HW = "baf2islandnew";

    function DW(WW) {
      const RW = CW.findIndex((RW => RW.unlocks.includes(WW)));
      return RW < 0 ? 1 : RW + 1
    }

    function qR(WW) {
      return Math.floor(WW).toLocaleString("en-US")
    }
    var ZW = MW(36495);
    const SW = "baf2terminaltake",
      WR = ["one", "stack", "fill"];

    function RR(WW, RW, MW) {
      return `${SW} ${WW} ${RW} ${MW}`
    }

    function MR(WW) {
      const [RW, MW, ...wW] = WW.trim().split(" "), CW = Number(RW), zR = function(WW) {
        if (WR.includes(WW)) return WW;
        const RW = Number(WW);
        return /^\d+$/.test(WW) && Number.isSafeInteger(RW) && RW > 0 ? RW : null
      }(null !== MW && void 0 !== MW ? MW : "");
      return !Number.isSafeInteger(CW) || CW <= 0 || null === zR || 0 === wW.length ? null : {
        seq: CW,
        mode: zR,
        item: wW.join(" ")
      }
    }
    const wR = "baf2rx";

    function CR(WW, RW) {
      for (var MW = arguments.length, wW = new Array(MW > 2 ? MW - 2 : 0), CW = 2; CW < MW; CW++) wW[CW - 2] = arguments[CW];
      return [wR, WW[0], WW[1], WW[2], RW, ...wW].join(" ")
    }
    const zM = 2,
      AR = 4,
      bM = 8,
      yM = 16,
      NR = 32,
      eR = 64,
      BR = 128,
      tM = 256,
      TR = 512,
      gM = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      iM = [{
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
    const YR = "Biomass",
      JR = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function PR(WW) {
      return {
        input: YR,
        inputAmount: 1,
        output: WW,
        outputAmount: 1
      }
    }
    const IR = "baf2synth",
      oR = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      lR = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      FR = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      fR = function(WW, RW) {
        return {
          input: WW,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: RW,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      QR = function(WW, RW) {
        return {
          ...fR(WW, RW, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      rM = {
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
          recipes: [fR("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), fR("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), fR("Raw Gold", "Gold Grit", 2), fR("Messy Stone", "Sand"), fR("Gravel", "Sand"), fR("Raw Voltite", "Voltite Dust", 2), fR("Moonstone", "Moonstone Dust", 4), fR("Wheat Seeds", "Fertiliser"), fR("Raw Uranium", "Uranium Grit", 2), QR("Mossy Messy Stone", "Sand"), ...lR.map((WW => QR(WW, "Biomass", 2)))],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [fR("Iron Grit", "Iron Bar"), fR("Copper Grit", "Copper Bar"), fR("Gold Grit", "Gold Bar"), fR("Raw Iron", "Iron Bar"), fR("Raw Copper", "Copper Bar"), fR("Raw Gold", "Gold Bar"), fR("Sand", "Glass"), fR("Messy Stone", "Stone"), ...pW.Wc.map((WW => fR(WW, "Charcoal", 1, 4))), fR("Wheat", "Bread", 1, 2), ...lR.map(((WW, RW) => QR(WW, FR[RW])))],
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
          recipes: [fR("Iron Bar", "Iron Plate"), fR("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [fR("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [fR("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [fR("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), fR("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), fR("Raw Gold", "Gold Grit", 3), fR("Raw Voltite", "Voltite Dust", 3), fR("Messy Stone", "Sand", 2), fR("Gravel", "Sand", 2), fR("Moonstone", "Moonstone Dust", 6), fR("Raw Uranium", "Uranium Grit", 3)],
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
          table: gM
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [fR("Coal", "Diamond", 1, 24), fR("Voltite Dust", "Moonstone", 1, 12)],
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
        ...ZW.h
      },
      cM = {
        Crusher: [fR("Spent Pellet", "Glow Dust"), fR("Wheat Seeds", "Biomass"), fR("Wheat", "Biomass"), fR("Dead Bush", "Biomass"), fR("Dusk Moss", "Biomass"), fR("Rotten Flesh", "Biomass"), fR("Bone", "Biomass", 2)],
        "Shatter Mill": [fR("Spent Pellet", "Glow Dust"), fR("Wheat Seeds", "Biomass"), fR("Wheat", "Biomass"), fR("Dead Bush", "Biomass"), fR("Dusk Moss", "Biomass"), fR("Rotten Flesh", "Biomass"), fR("Bone", "Biomass", 2), ...pW.Wc.map((WW => fR(WW, "Biomass")))],
        Smelter: [fR("Biomass", "Fertiliser", 2)],
        Press: [fR("Coal", "Graphite", 1, 4)]
      },
      XR = "Power Coupler",
      jM = "Advanced Coupler",
      kM = "Nova Coupler",
      aM = [{
        item: XR,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: jM,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: kM,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const sR = new Map;

    function dR(WW) {
      var RW, MW;
      return null !== (RW = null !== (MW = WW.fuelSlot) && void 0 !== MW ? MW : WW.couplerSlot) && void 0 !== RW ? RW : null
    }

    function pR(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!WW.couplable) throw new Error(`${WW.kind} takes no Power Coupler`);
      let MW = sR.get(WW);
      MW || (MW = [], sR.set(WW, MW));
      let wW = MW[RW];
      if (!wW) {
        var CW;
        const {
          divisor: zR,
          powerPerS: AW
        } = aM[RW - 1], bR = WW.opMs / zR, yR = void 0 !== WW.fluidMade || void 0 !== WW.cryoMade ? WW.powerPerOp : AW * bR / 1e3;
        wW = {
          ...WW,
          fuelSlot: null,
          couplerSlot: null !== (CW = dR(WW)) && void 0 !== CW ? CW : void 0,
          opMs: bR,
          powerPerOp: yR,
          coupled: !0
        }, RW > 1 && (wW = {
          ...wW,
          couplerLevel: RW
        }), MW[RW] = wW
      }
      return wW
    }
    const hR = new Map;
    const UR = new Map;

    function ER(WW, RW) {
      if (null === RW || (MW = RW, !JR.includes(MW))) return WW;
      var MW;
      let wW = UR.get(RW);
      return wW || (wW = {
        ...WW,
        recipes: [PR(RW)]
      }, UR.set(RW, wW)), wW
    }

    function VR(WW) {
      return !0 === WW.synth
    }
    const mM = (WW, RW, MW, wW) => ({
        output: WW,
        outputAmount: RW,
        tier: MW,
        inputs: wW.map((WW => {
          let [RW, MW] = WW;
          return {
            item: RW,
            amount: MW
          }
        }))
      }),
      xM = Object.fromEntries([mM("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), mM("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), mM("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), mM("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), mM("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), mM("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), mM("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), mM("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), mM("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), mM("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), mM("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), mM("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), mM("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), mM("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), mM("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), mM("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), mM("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), mM("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), mM("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), mM("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), mM("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), mM("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), mM("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), mM("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), mM("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), mM("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), mM("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), mM("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), mM("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), mM("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((WW => [WW.output, WW]))),
      vM = new Map;

    function KR(WW, RW) {
      let MW = rM[WW];
      if (RW.atomic && (MW = function(WW) {
          const RW = cM[WW.kind];
          if (!RW) return WW;
          let MW = hR.get(WW.kind);
          if (!MW) {
            const wW = new Set(RW.map((WW => WW.input))),
              CW = WW.recipes.filter((WW => !wW.has(WW.input)));
            MW = {
              ...WW,
              recipes: [...CW, ...RW]
            }, hR.set(WW.kind, MW)
          }
          return MW
        }(MW)), MW.synth) return ER(MW, RW.taught);
      if (RW.coupled && MW.couplable) return pR(MW, RW.level);
      const wW = MW.inputSlots && null !== RW.taught ? xM[RW.taught] : void 0;
      if (!wW) return MW;
      const CW = `${WW}|${wW.output}`;
      let zR = vM.get(CW);
      return zR || (zR = {
        ...MW,
        bench: wW
      }, vM.set(CW, zR)), zR
    }
    const uR = ["Diamond", "Moonstone"];

    function OR(WW) {
      return new Set(WW.flatMap((WW => WW.bonus ? [WW.output, WW.bonus.item] : [WW.output])).filter((WW => !uR.includes(WW))))
    }
    const nR = Object.values(rM).flatMap((WW => WW.recipes));
    OR(nR.filter((WW => !0 !== WW.nuclear))), OR([...nR.filter((WW => !0 === WW.nuclear)), ...Object.values(cM).flat()]);

    function GR(WW) {
      return null === WW.inputSlot && void 0 === WW.inputSlots && void 0 === WW.powerMade && void 0 === WW.fluidMade && !WW.treeCutter && void 0 === WW.table
    }

    function LR(WW) {
      return !0 === WW.treeCutter
    }
    const HR = ["Voltite Cell"];

    function DR(WW) {
      var RW, MW;
      return null !== (RW = null === (MW = WW.fuels) || void 0 === MW ? void 0 : MW.some((WW => HR.includes(WW)))) && void 0 !== RW && RW
    }
    const qM = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(pW.Wc.map((WW => [WW, 8e3]))),
        ...Object.fromEntries(pW.yd.map((WW => [WW, 2e3]))),
        "Voltite Cell": 12e4
      },
      ZR = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      SR = {
        "Uranium Deposit": 4e3
      };

    function WM(WW) {
      var RW;
      return null !== (RW = Object.keys(ZR).find((RW => ZR[RW] === WW))) && void 0 !== RW ? RW : null
    }

    function RM(WW) {
      return oR.includes(WW)
    }

    function MM(WW) {
      return !0 !== WW.nuclear || bR()
    }
    var wM = MW(232);
    var CM = MW(8249),
      zw = MW(8191),
      AM = MW(8257),
      bw = MW(8247);
    const yw = "Reactor Controller",
      NM = "Reactor Port",
      eM = "Battery Cell",
      BM = ["fuel", "water", "waste"],
      tw = {
        fuel: NM,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      TM = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      gw = {
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
      YM = "Reactor Glass",
      JM = {
        edge: [iw],
        cap: [YM, NM],
        wall: [YM, NM],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [yw]
      },
      PM = {
        edge: [eM],
        cap: [eM],
        wall: [eM],
        inside: [eM],
        ctrl: [eM]
      },
      IM = ["edge", "cap", "wall", "inside"],
      oM = ["Reactor Slag"];

    function lM(WW) {
      return oM.includes(FM(WW))
    }

    function FM(WW) {
      const RW = WW.indexOf("|");
      return RW < 0 ? WW : WW.slice(0, RW)
    }

    function fM(WW) {
      return FM(WW) === yw ? "reactor" : null
    }

    function QM(WW) {
      return FM(WW) !== NM ? null : WW.endsWith("|Water") ? "water" : WW.endsWith("|Waste") ? "waste" : "fuel"
    }

    function rw(WW) {
      const RW = QM(WW);
      return null === RW ? null : jw(tw[BM[(BM.indexOf(RW) + 1) % BM.length]], function(WW) {
        return WW.includes(cwW)
      }(WW))
    }
    const cwW = "|meta|rot1|Formed",
      XM = new Set([iw, YM, NM]);

    function jw(WW, RW) {
      var MW;
      const wW = FM(WW);
      if (!XM.has(wW)) return WW;
      if (wW !== NM) return RW ? wW + cwW : wW;
      const CW = null !== (MW = QM(WW)) && void 0 !== MW ? MW : "fuel";
      return RW ? "fuel" === CW ? wW + cwW : `${wW}${cwW}|${"water"===CW?"Water":"Waste"}` : tw[CW]
    }

    function kw(WW, RW) {
      const MW = HM(WW, RW);
      if ("Air" === MW) return !1;
      const wW = "reactor" === WW ? JM : PM;
      return IM.some((WW => wW[WW].includes(MW))) || "reactor" === WW && oM.includes(MW)
    }

    function aw(WW) {
      return gw[WW]
    }

    function sM(WW) {
      var RW;
      return null !== (RW = TM[WW]) && void 0 !== RW ? RW : TM[1]
    }

    function dM(WW) {
      const [RW, , MW] = sM(WW);
      return [MW, 0, -RW]
    }

    function pM(WW, RW, MW, wW, CW, zR) {
      return {
        ctrl: [WW[0], WW[1], WW[2]],
        rot: TM[RW] ? RW : 1,
        w: MW,
        h: wW,
        d: CW,
        cu: zR[0],
        cv: zR[1]
      }
    }

    function hM(WW, RW) {
      return "reactor" === WW ? [Math.floor((RW - 1) / 2), 0] : [0, 0]
    }

    function UM(WW, RW, MW, wW, CW) {
      let zR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : WW.rot;
      if (MW === WW.w && wW === WW.h && CW === WW.d && zR === WW.rot) return WW;
      const [AW] = hM(RW, WW.w);
      if (WW.cu === AW && WW.cv <= 1) return pM(WW.ctrl, zR, MW, wW, CW, hM(RW, MW));
      const bR = (WW, RW) => Math.max(1, Math.min(RW, WW));
      return pM(WW.ctrl, zR, MW, wW, CW, [bR(WW.cu, MW - 2), 0 === WW.cv ? 0 : bR(WW.cv, wW - 2)])
    }
    const EM = 11,
      VM = 2 * EM + 1;
    new Uint8Array(VM * VM * VM);

    function mw(WW) {
      return WW.w * WW.h * WW.d
    }

    function xw(WW) {
      const RW = dM(WW.rot);
      return [WW.ctrl[0] - RW[0] * WW.cu, WW.ctrl[1] - WW.cv, WW.ctrl[2] - RW[2] * WW.cu]
    }

    function vw(WW) {
      return WW.cv * WW.d * WW.w + WW.cu
    }

    function KM(WW, RW) {
      const MW = RW % WW.w,
        wW = Math.floor(RW / WW.w) % WW.d;
      return [MW, Math.floor(RW / (WW.w * WW.d)), wW]
    }

    function uM(WW, RW) {
      const [MW, wW, CW] = KM(WW, RW), zR = xw(WW), AW = sM(WW.rot), bR = dM(WW.rot);
      return [zR[0] + bR[0] * MW - AW[0] * CW, zR[1] + wW, zR[2] + bR[2] * MW - AW[2] * CW]
    }

    function OM(WW, RW) {
      const MW = xw(WW),
        wW = sM(WW.rot),
        CW = dM(WW.rot),
        zR = RW[0] - MW[0],
        AW = RW[2] - MW[2],
        bR = zR * CW[0] + AW * CW[2],
        yR = -(zR * wW[0] + AW * wW[2]),
        NW = RW[1] - MW[1];
      return bR < 0 || bR >= WW.w || NW < 0 || NW >= WW.h || yR < 0 || yR >= WW.d ? -1 : (NW * WW.d + yR) * WW.w + bR
    }

    function nM(WW, RW) {
      if (RW === vw(WW)) return "ctrl";
      const [MW, wW, CW] = KM(WW, RW), zR = 0 === wW || wW === WW.h - 1, AW = Number(0 === MW || MW === WW.w - 1) + Number(zR) + Number(0 === CW || CW === WW.d - 1);
      return AW >= 2 ? "edge" : 1 === AW ? zR ? "cap" : "wall" : "inside"
    }

    function GM(WW, RW) {
      const [MW, wW, CW] = KM(WW, RW);
      return 0 === MW || MW === WW.w - 1 || 0 === wW || wW === WW.h - 1 || 0 === CW || CW === WW.d - 1 ? -1 : ((wW - 1) * (WW.d - 2) + (CW - 1)) * (WW.w - 2) + (MW - 1)
    }

    function LM(WW, RW) {
      const MW = WW.w - 2,
        wW = WW.d - 2,
        CW = RW % MW + 1,
        zR = Math.floor(RW / MW) % wW + 1;
      return ((Math.floor(RW / (MW * wW)) + 1) * WW.d + zR) * WW.w + CW
    }

    function HM(WW, RW) {
      const MW = FM(RW);
      return "reactor" === WW && MW === yw ? iw : MW
    }

    function DM(WW, RW, MW) {
      const wW = "ctrl" === RW ? FM(MW) : HM(WW, MW);
      return ("reactor" === WW ? JM : PM)[RW].includes(wW) ? "ok" : "Air" === wW ? "missing" : kw(WW, MW) ? "wrong" : "blocked"
    }

    function qw(WW, RW) {
      return "battery" === WW ? eM : "inside" === RW ? null : function(WW, RW) {
        if ("inside" === RW || "ctrl" === RW || "battery" === WW) return null;
        return "edge" === RW ? iw : YM
      }(WW, RW)
    }
    const ZM = {
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
      SM = "Collider",
      Ww = "Laser",
      Rw = "Star Alloy",
      Mw = "Glow Dust",
      ww = [SM, "_Collider Focus"];

    function Cw(WW) {
      return ww.indexOf(FM(WW))
    }

    function zC(WW) {
      return FM(WW) === Ww
    }

    function Aw(WW) {
      return [
        [WW[0], WW[1], WW[2]],
        [WW[0], WW[1] + 1, WW[2]]
      ]
    }
    const bC = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function yC(WW, RW, MW) {
      const wW = bC[RW];
      return [WW[0] + wW[0] * MW, WW[1], WW[2] + wW[2] * MW]
    }

    function Nw(WW, RW) {
      if (RW[1] !== WW[1]) return null;
      const MW = RW[0] - WW[0],
        wW = RW[2] - WW[2];
      if (0 !== MW === (0 !== wW)) return null;
      const CW = Math.abs(MW + wW);
      if (CW > ZM.LASER_D) return null;
      return {
        dir: wW < 0 ? 0 : MW > 0 ? 1 : wW > 0 ? 2 : 3,
        WW: CW
      }
    }

    function ew(WW, RW, MW) {
      const wW = RW => Math.abs(WW[0] - RW[0]) <= 1 && Math.abs(WW[1] - RW[1]) <= 1;
      return wW(RW) || wW(MW)
    }

    function Bw(WW, RW) {
      return function(WW, RW, MW, wW) {
        return [0, 1, 2, 3].map((CW => {
          for (let zR = 1; zR <= ZM.LASER_D; zR++) {
            const AW = yC(WW, CW, zR);
            if (ew([AW[0], AW[2]], RW, MW) || !wW(AW)) return !1
          }
          return !0
        }))
      }(Aw(WW)[1], RW.spawnXZ, RW.coreXZ, (WW => WW[1] >= CM.m && WW[1] < CM.m + CM.n && WW[0] >= RW.minXZ[0] && WW[0] <= RW.maxXZ[0] && WW[2] >= RW.minXZ[1] && WW[2] <= RW.maxXZ[1]))
    }
    const tC = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function Tw(WW) {
      return Math.max(48 + 16 * WW, JW(WW).machineAllowance)
    }
    const gC = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function iC(WW) {
      const RW = WW.split("|")[0];
      return gC.includes(RW) ? "Solar Panel" : RW === AM.c ? "Fluid Pipe" : Cw(RW) >= 0 ? "Collider" : (MW = RW, tC.includes(MW) ? RW : null);
      var MW
    }
    const Yw = "buildAFactory2Game:solarPanelDescription";
    const Jw = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function Pw(WW, RW) {
      var MW;
      return null !== (MW = Jw.find((MW => {
        var wW;
        return (null !== (wW = WW.level(MW)) && void 0 !== wW ? wW : 0) >= RW
      }))) && void 0 !== MW ? MW : null
    }
    const Iw = "buildAFactory2Game:";
    let ow = null;
    const lw = {
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
      Fw = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      fw = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      Qw = {
        "Loot Chest": `${Iw}lookRuinChestName`
      };

    function rC(WW) {
      return "object" === typeof WW && null !== WW && "translationKey" in WW && "string" === typeof WW.translationKey ? WW.translationKey : null
    }

    function cC(WW, RW) {
      var MW;
      return null !== (MW = rC(WW.displayName(RW))) && void 0 !== MW ? MW : `item:${(0,pW.oe)(RW)}`
    }

    function Xw(WW, RW) {
      var MW, wW, CW, zR;
      let AW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : RW;
      if ("Solar Panel" === iC(RW)) return {
        name: rC(WW.displayName("Solar Panel")),
        detail: Yw,
        detailItem: null
      };
      const yR = RW.endsWith(" Ore"),
        NW = (ow ??= new Set([...Object.keys((0, zw.j)()), ...Object.keys((0, AM.y)())].map((WW => WW.split("|")[0]))), ow).has(RW),
        eW = yR || NW ? null : function(WW) {
          var RW;
          return WW.endsWith(" Log") && !WW.startsWith("Barkless ") ? "lookLog" : WW.endsWith(" Sapling") ? "lookSapling" : WW.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (RW = lw[WW]) && void 0 !== RW ? RW : null
        }(RW);
      if (!WW.isBlock(RW) || !yR && !NW && null === eW) return null;
      const BW = null !== (MW = null !== (wW = Qw[RW]) && void 0 !== wW ? wW : rC(null !== (CW = WW.displayName(AW)) && void 0 !== CW ? CW : WW.displayName(RW))) && void 0 !== MW ? MW : `item:${(0,pW.oe)(RW)}`;
      if (null !== eW) return {
        name: BW,
        detail: `${Iw}${eW}`,
        detailItem: null
      };
      const tR = null !== (zR = Fw[RW]) && void 0 !== zR ? zR : bR() ? fw[RW] : void 0;
      if (NW && void 0 !== tR) return {
        name: BW,
        detail: `${Iw}${tR}`,
        detailItem: null
      };
      const TW = ZR[RW];
      if (void 0 !== TW) return {
        name: BW,
        detail: `${Iw}lookDeposit`,
        detailItem: cC(WW, TW)
      };
      const gR = WW.harvestLevel(RW);
      if (yR && "rock" === WW.harvestType(RW) && 0 !== gR) {
        const RW = Pw(WW, null !== gR && void 0 !== gR ? gR : 0);
        if (RW === Jw[0]) return {
          name: BW,
          detail: `${Iw}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== RW) return {
          name: BW,
          detail: `${Iw}lookPickaxe`,
          detailItem: cC(WW, RW)
        }
      }
      return {
        name: BW,
        detail: rC(WW.description(RW)),
        detailItem: null
      }
    }

    function jC(WW) {
      return WW < CM.m - 24
    }
    const kC = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const aC = "Wrench",
      sw = "Nova Wrench";

    function dw(WW) {
      return WW === aC || WW === sw
    }
    const pw = [...CM.G, "Belt Lift", "Belt Drop"];
    const hw = ["Belt Lift", "Belt Drop"],
      Uw = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function Ew(WW) {
      return WW.split("|")[0]
    }

    function Vw(WW) {
      const RW = /\|rot(\d)/.exec(WW);
      return RW ? Number(RW[1]) : 1
    }

    function mC(WW) {
      return WW % 4 + 1
    }

    function xC(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === RW && "" === MW ? WW : `${WW}|meta|rot${RW}${MW}`
    }

    function vC(WW) {
      return Ew(WW) === CM.x ? (0, CM.O)(WW) ? "gateRight" : "gateLeft" : (0, CM.S)(WW)
    }

    function Kw(WW) {
      const RW = Ew(WW),
        MW = Vw(WW);
      if (CM.G.includes(RW)) return (0, CM.J)(RW, mC(MW), null);
      if (RW === CM.d) return (0, CM.Z)(mC(MW), (0, CM.P)(WW));
      if (RW === CM.z) {
        const wW = Uw[(0, CM.S)(WW)];
        return null === wW ? xC(RW, mC(MW)) : xC(RW, MW, CM.A[wW])
      }
      return RW === CM.x ? (0, CM.O)(WW) ? xC(RW, mC(MW)) : xC(RW, MW, CM.k) : bw.c.includes(RW) && !hw.includes(RW) || RM(RW) ? xC(RW, mC(MW)) : null
    }

    function uw(WW) {
      return bw.c.includes(WW) || RM(WW) || null !== iC(WW)
    }

    function Ow(WW) {
      return "Solar Panel" === iC(WW)
    }
    const nw = "buildAFactory2Game:",
      Gw = {
        leftFront: `${nw}lookSplitDetail_leftFront`,
        frontRight: `${nw}lookSplitDetail_frontRight`,
        gateRight: `${nw}lookGateDetail_gateRight`
      };

    function Lw(WW, RW) {
      var MW;
      let wW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const CW = vC(WW),
        zR = null === CW ? null : `${nw}${CW.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${CW}`,
        AW = null === CW ? null : null !== (MW = Gw[CW]) && void 0 !== MW ? MW : null;
      if (dw(RW) && wW) {
        const MW = Ew(WW);
        return RW === sw && bR() && function(WW) {
          return pw.includes(Ew(WW))
        }(WW) ? {
          mode: zR,
          detail: AW,
          next: `${nw}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: zR,
          detail: AW,
          next: uw(MW) && !Ow(MW) ? `${nw}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const yR = dw(RW) ? Kw(WW) : null;
      if (null === yR) return {
        mode: zR,
        detail: AW,
        next: null,
        nextState: null
      };
      const NW = vC(yR);
      return null === NW || Vw(yR) !== Vw(WW) ? {
        mode: zR,
        detail: AW,
        next: `${nw}lookWrenchTurn`,
        nextState: null
      } : {
        mode: zR,
        detail: AW,
        next: `${nw}lookWrenchNext`,
        nextState: `${nw}lookWrenchState_${NW}`
      }
    }
    const Hw = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"],
      Dw = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function qC(WW) {
      return [0, 1, 2, 3].map((RW => 0 !== (WW & 1 << RW)))
    }

    function Zw(WW) {
      const RW = [];
      for (let MW = 8; MW + 2 < WW.length; MW += 3) RW.push([WW[MW], WW[MW + 1], WW[MW + 2]]);
      return {
        focus: [WW[0], WW[1], WW[2]],
        lasers: qC(WW[3]),
        open: qC(WW[4]),
        live: qC(WW[5]),
        on: 1 === WW[6],
        state: Dw[WW[7]],
        blockers: RW
      }
    }
    const Sw = "Arc Caster",
      WC = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      RC = (Object.values(WC), "Jet Chestplate"),
      MC = "Nova Jet Chestplate",
      wC = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      CC = Object.values(wC);

    function zz(WW, RW, MW) {
      return Math.min(function(WW) {
        return bR() && BW(WW) >= 5 ? 20 : 10
      }(MW), Math.floor(function(WW, RW) {
        return Math.max(0, WW) + (bR() ? Math.max(0, RW) : 0)
      }(WW, RW) / 5))
    }

    function AC(WW, RW, MW) {
      const wW = zz(RW, MW, WW),
        CW = BW(WW),
        zR = (CW >= 3 ? 55 : CW >= 1 ? 50 : WW >= 8 ? 45 : 30) + wW,
        AW = Math.max(100 + wW, 2 * zR);
      return {
        arcDamage: zR,
        arcPierce: WW >= 7 ? 2 : 1,
        arcChain: WW >= 10,
        barrierMax: (CW >= 4 ? 100 : CW >= 2 ? 90 : WW >= 9 ? 80 : WW >= 6 ? 60 : 40) + 5 * wW,
        barrierRegenPerS: CW >= 5 ? 20 : WW >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * wW,
        novaShieldRegenPerS: 32,
        bladeDamage: AW,
        bladePunch: Math.round(.5 * AW),
        forgeRank: wW
      }
    }
    const bz = {
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
    var yz = MW(35012),
      NC = MW(34838),
      eC = MW(34830),
      BC = MW(27),
      tz = MW(1459),
      TC = MW(897),
      gz = MW.n(TC);

    function iz(WW) {
      return !0 === WW.field
    }
    const YC = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function JC(WW) {
      return YC.has(WW) ? `buildAFactory2Game:itemPlural_${(0,pW.oe)(WW)}` : null
    }
    var PC = MW(1027),
      IC = MW(904),
      oC = MW(1537),
      lC = MW(1523),
      FC = MW(35003),
      fC = MW(35008),
      QC = MW(33),
      rz = MW(34998);
    const cz = "baf2QuestView",
      XC = "baf2PlayerY",
      jz = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class kz {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
        this.requestBook = WW, this.view = {
          name: null,
          rows: [],
          reward: null,
          goal: null,
          pulse: 0,
          itemNames: {},
          side: null,
          tier: null,
          core: null,
          chapters: null,
          also: [],
          depth: null,
          tutorial: "on",
          tutorialKnown: !1
        }, this.pickedTutorial = null, this.pickSeq = 0, this.serverTutorial = "on", this.pickTimer = null, this.clearTimer = null, this.playerY = null
      }
      get() {
        return this.view
      }
      set(WW, RW) {
        var MW, wW, CW, zR, AW, bR, yR, NW;
        const eW = JSON.stringify(WW.baf2QuestName) === JSON.stringify(this.view.name),
          BW = new Set(this.view.rows.filter((WW => WW.done)).map((WW => WW.id))),
          tR = new Set(this.view.rows.filter((WW => WW.justFinished)).map((WW => WW.id))),
          TW = WW.baf2QuestSide,
          gR = null !== TW && !0 === WW.baf2QuestSideFocus;
        let iR = !1,
          YW = 0;
        const JW = WW.baf2QuestSteps.map((WW => {
            const RW = EC(WW, jz.has(WW[0]) ? WW[0] : "" + YW++),
              MW = eW && RW.done && !BW.has(RW.id);
            return RW.justFinished = MW || eW && RW.done && tR.has(RW.id), iR ||= MW, RW
          })),
          PW = UC(JW);
        PW >= 0 && !gR && (JW[PW].current = !0);
        const IW = !eW && null !== WW.baf2QuestName,
          oW = JSON.stringify(TW && [TW[0], TW[1]]) === JSON.stringify(null !== (MW = null === (wW = this.view.side) || void 0 === wW ? void 0 : wW.name) && void 0 !== MW ? MW : null);
        this.serverTutorial = null !== (CW = WW.baf2QuestTutorial) && void 0 !== CW ? CW : "on", (null !== (zR = WW.baf2QuestTutorialSeq) && void 0 !== zR ? zR : 0) >= this.pickSeq && this.endPick();
        const lW = !eW || !oW || WW.baf2QuestTier !== this.view.tier;
        this.view = {
          name: WW.baf2QuestName,
          rows: JW,
          reward: WW.baf2QuestReward,
          goal: WW.baf2QuestGoal,
          pulse: this.view.pulse + (iR || IW ? 1 : 0),
          itemNames: RW,
          side: TW && {
            name: [TW[0], TW[1]],
            row: {
              ...EC(TW[2], "side"),
              current: gR
            },
            goal: null !== (AW = TW[3]) && void 0 !== AW ? AW : null
          },
          tier: WW.baf2QuestTier,
          core: WW.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (bR = WW.baf2QuestAlso) && void 0 !== bR ? bR : [],
          depth: null !== (yR = WW.baf2QuestDepth) && void 0 !== yR ? yR : null,
          tutorial: null !== (NW = this.pickedTutorial) && void 0 !== NW ? NW : this.serverTutorial,
          tutorialKnown: !0
        }, this.Sz(), iR && this.scheduleClear(), lW && this.requestBook()
      }
      setTutorial(WW) {
        return this.endPick(), this.pickedTutorial = WW, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.Sz()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: WW
        }, this.Sz(), this.pickSeq
      }
      onPlayerY(WW) {
        const RW = Math.floor(WW);
        RW !== this.playerY && (this.playerY = RW, this.view.depth && QC.k.Sz(XC, RW))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(WW) {
        this.view = {
          ...this.view,
          chapters: WW.baf2BookChapters
        }, this.Sz()
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
            rows: this.view.rows.map((WW => WW.justFinished ? {
              ...WW,
              justFinished: !1
            } : WW))
          }, this.Sz()
        }), 2400)
      }
      Sz() {
        QC.k.Sz(cz, this.view, !0)
      }
    }

    function az(WW) {
      return (null === WW.name || sC(WW)) && null === WW.side && null !== WW.chapters
    }

    function sC(WW) {
      var RW;
      return "quest_forgeOngoing" === (null === (RW = WW.name) || void 0 === RW ? void 0 : RW[0])
    }

    function dC(WW) {
      return WW.filter((WW => !jz.has(WW.key)))
    }

    function pC(WW) {
      return WW.key.startsWith("stepCraft")
    }

    function hC(WW, RW) {
      const MW = new Set,
        wW = WW.side ? [...WW.rows, WW.side.row] : WW.rows;
      for (const zR of wW)
        if (!zR.done) {
          !zR.item || RW && !pC(zR) || MW.add(zR.item);
          for (const [WW, RW, wW] of null !== (CW = zR.chips) && void 0 !== CW ? CW : []) {
            var CW;
            RW < wW && MW.add(WW)
          }
        } return MW
    }

    function UC(WW) {
      const RW = WW.findIndex((WW => !WW.done && !WW.away));
      return RW >= 0 ? RW : WW.findIndex((WW => !WW.done))
    }

    function EC(WW, RW) {
      let [MW, wW, CW, zR, AW, bR, yR, NW, eW, BW] = WW;
      return {
        id: RW,
        key: MW,
        params: wW,
        item: CW,
        amount: zR,
        total: AW,
        done: bR,
        chips: null !== yR && void 0 !== yR ? yR : null,
        current: !1,
        away: !0 === NW,
        madeFor: null !== eW && void 0 !== eW ? eW : [],
        also: null !== BW && void 0 !== BW ? BW : [],
        justFinished: !1
      }
    }
    const VC = "baf2QuestItems",
      mz = new Set;
    let xz = new Set,
      vz = null;

    function KC(WW) {
      const RW = dW(WW.tutorial),
        MW = RW ? hC(WW, !0) : mz;
      "inventory" === BC.b.get("openInGameMenuName") ? (vz = null, (0, rz.t)(MW)) : vz = MW;
      const wW = RW ? hC(WW, !1) : mz;
      (0, fC.d)(wW, xz) || (xz = wW, QC.k.Sz(VC, xz))
    }

    function uC() {
      return (0, FC.d)(VC, (() => xz))
    }
    var OC = MW(34920),
      nC = MW(2410);

    function GC(WW) {
      const RW = (0, nC.e)(WW),
        MW = void 0 === RW ? void 0 : (0, OC.displayNameOf)(RW);
      return "object" === typeof MW && null !== MW && "translationKey" in MW && "string" === typeof MW.translationKey ? MW.translationKey : `item:${(0,pW.oe)(WW)}`
    }

    function LC(WW, RW) {
      return WW(GC(RW))
    }
    const HC = [{
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

    function DC(WW, RW) {
      return [`Deposit Seed (${WW})`, {
        item: ZR[`${WW} Deposit`],
        amount: RW
      }]
    }
    const qz = Object.fromEntries([DC("Coal", 8), DC("Iron", 8), DC("Copper", 8), DC("Gold", 6), DC("Voltite", 4), DC("Uranium", 4)]),
      ZC = "Relay Coil",
      SC = new Map;

    function Wz(WW) {
      let RW = SC.get(WW);
      if (!RW) {
        const MW = Math.max(1, WW);
        RW = HC.filter((WW => {
          var RW;
          return MW >= WW.fromTier && MW <= (null !== (RW = WW.untilTier) && void 0 !== RW ? RW : 1 / 0)
        })).map((WW => WW.later && MW >= WW.later.tier ? {
          ...WW,
          weight: WW.later.weight
        } : WW)), SC.set(WW, RW)
      }
      return RW
    }

    function Rz(WW) {
      return Wz(WW).some((WW => {
        let {
          item: RW
        } = WW;
        return RW === ZC
      }))
    }

    function Mz(WW) {
      return WW.startsWith("Deposit Seed (")
    }

    function wz(WW, RW) {
      const MW = Wz(WW);
      return RW ? MW.filter((WW => RW(WW.item))) : MW
    }

    function Cz(WW) {
      return WW.reduce(((WW, RW) => WW + RW.weight), 0)
    }

    function zA(WW, RW) {
      const MW = wz(WW, RW),
        wW = Cz(MW);
      return MW.map((WW => ({
        find: WW,
        chance: WW.weight / wW
      })))
    }
    const Az = 6e4;

    function bA(WW, RW) {
      const MW = WW >= 10 ? Math.round(WW) : Math.round(10 * WW) / 10;
      return 0 === MW ? "0" : `${RW}${MW.toLocaleString("en-US")}`
    }

    function yA(WW) {
      return WW < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? WW.toLocaleString("en-US") : WW < 1e6 ? `${WW<1e5?Math.floor(WW/100)/10:Math.floor(WW/1e3)}k` : Math.floor(WW / 1e5) / 10 + "M"
    }

    function Nz(WW) {
      return WW < 0 ? "\u2212" + -WW : String(WW)
    }

    function ez(WW, RW) {
      const MW = Math.max(1, Math.round(RW));
      if (MW < 60) return WW("buildAFactory2Game:durationSeconds", {
        seconds: String(MW)
      });
      const wW = Math.round(MW / 60);
      if (wW < 60) return WW("buildAFactory2Game:durationMinutes", {
        minutes: String(wW)
      });
      const CW = String(Math.floor(wW / 60));
      return wW % 60 === 0 ? WW("buildAFactory2Game:durationWholeHours", {
        hours: CW
      }) : WW("buildAFactory2Game:durationHours", {
        hours: CW,
        minutes: String(wW % 60)
      })
    }
    const Bz = "(max-height: 420px), (max-width: 650px)";

    function tA() {
      return "undefined" !== typeof window && window.matchMedia(Bz).matches
    }

    function Tz(WW) {
      const RW = window.matchMedia(Bz),
        MW = () => {
          WW(RW.matches)
        };
      return RW.addEventListener("change", MW), () => {
        RW.removeEventListener("change", MW)
      }
    }
    var gA = MW(940);

    function iA(WW, RW) {
      return null !== WW && WW > RW + 1
    }

    function Yz(WW) {
      const RW = 100 * WW;
      return String(RW <= 0 || RW >= 1 ? Math.round(RW) : Math.max(.1, Math.round(10 * RW) / 10))
    }

    function Jz(WW) {
      let {
        item: RW,
        amount: MW
      } = WW;
      return (0, gA.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, gA.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, gA.jsx)(oC.c, {
            itemName: RW,
            amount: 0
          })
        }), MW > 1 && (0, gA.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", MW]
        })]
      })
    }

    function Pz(WW) {
      let {
        label: RW,
        names: MW
      } = WW;
      const [CW, zR] = (0, wW.useState)(!1), AW = MW.join(" / ");
      return (0, gA.jsxs)(gA.Fragment, {
        children: [(0, gA.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: AW,
          "aria-expanded": CW,
          onClick: () => {
            zR(!CW)
          },
          children: RW
        }), CW && (0, gA.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: AW
        })]
      })
    }

    function Iz(WW) {
      let {
        tier: RW
      } = WW;
      const {
        t: MW
      } = (0, PC.C)(), {
        key: wW,
        params: CW
      } = TW(RW, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), zR = MW(`buildAFactory2Game:${wW}`, CW);
      return (0, gA.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, gA.jsx)(IC.e, {
          name: "lock"
        }), zR]
      })
    }
    const oz = (0, wW.createContext)(null);

    function lz() {
      const {
        t: WW
      } = (0, PC.C)(), RW = (0, wW.useContext)(oz);
      return (0, wW.useEffect)((() => null === RW || void 0 === RW ? void 0 : RW()), [RW]), (0, gA.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: WW("buildAFactory2Game:recipeForQuest"),
        "aria-label": WW("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function Fz(WW) {
      let {
        title: RW,
        count: MW,
        children: CW,
        startOpen: zR = !0
      } = WW;
      const {
        t: AW
      } = (0, PC.C)(), [bR, yR] = (0, wW.useState)((() => zR && !tA())), [NW, eW] = (0, wW.useState)(0), BW = (0, wW.useCallback)((() => (eW((WW => WW + 1)), () => {
        eW((WW => WW - 1))
      })), []);
      return (0, gA.jsxs)("div", {
        className: gz()("Baf2Recipes", {
          Open: bR
        }),
        children: [(0, gA.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            yR(!bR)
          },
          "aria-expanded": bR,
          children: [AW("buildAFactory2Game:recipesToggle", {
            title: RW,
            count: String(MW)
          }), (0, gA.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: bR ? "\u25be" : "\u25b8"
          })]
        }), bR && (0, gA.jsxs)(oz.Provider, {
          value: BW,
          children: [(0, gA.jsx)("ul", {
            className: "Baf2RecipeList",
            children: CW
          }), NW > 0 && (0, gA.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, gA.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), AW("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const fz = "buildAFactory2Game:",
      Qz = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const rA = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      cA = {
        "Uranium Grit": zR,
        "Raw Uranium": zR
      };

    function Xz(WW) {
      var RW;
      return null !== (RW = cA[WW]) && void 0 !== RW ? RW : Math.max(DW(WW), rA[WW] ? DW(rA[WW]) : 1, function(WW) {
        const RW = CW.findIndex((RW => RW.cost.some((RW => RW.item === WW))));
        return RW > zR ? RW : 1
      }(WW))
    }

    function jA(WW, RW) {
      return kA(RW) ? Xz(RW) : function(WW) {
        if (Qz.has(WW)) return 1;
        const RW = CW.findIndex((RW => RW.newDeposits.some((RW => {
          let {
            block: MW
          } = RW;
          return MW === WW
        }))));
        return RW < 0 ? 1 : RW + 1
      }(WW)
    }

    function kA(WW) {
      return WW in cA || BW(Xz(WW)) > 0
    }

    function aA(WW, RW) {
      return KR(WW, {
        coupled: !1,
        taught: null,
        atomic: bR() && RW >= 11
      }).recipes
    }

    function sz(WW, RW) {
      const MW = tR(WW, RW, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BW(WW) > 0);
      return "open" === MW || "locked" === MW
    }

    function dz(WW, RW) {
      return WW.map(((WW, MW) => ({
        value: WW,
        idx: MW,
        tier: RW(WW)
      }))).sort(((WW, RW) => WW.tier - RW.tier || WW.idx - RW.idx)).map((WW => {
        let {
          value: RW
        } = WW;
        return RW
      }))
    }

    function pz(WW, RW, MW) {
      const wW = tR(WW, RW);
      if ("hidden" === wW || "open" === wW) return null;
      if ("teaser" === wW) return {
        tag: {
          translationKey: `${fz}${MW?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${fz}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const CW = TW(WW, {
          tier: MW ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        zR = TW(WW, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${fz}${CW.key}`,
          params: CW.params
        },
        reason: {
          translationKey: `${fz}${zR.key}`,
          params: zR.params
        }
      }
    }

    function hz(WW) {
      return !Mz(WW)
    }

    function Uz(WW) {
      let {
        seconds: RW
      } = WW;
      const {
        t: MW
      } = (0, PC.C)();
      return (0, gA.jsx)(Fz, {
        title: MW("buildAFactory2Game:recipesCuts", {
          seconds: RW
        }),
        count: 1,
        children: (0, gA.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, gA.jsx)(Jz, {
            item: "Maple Sapling",
            amount: 1
          }), (0, gA.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, gA.jsx)(Jz, {
            item: "Maple Log",
            amount: 1
          }), (0, gA.jsx)("span", {
            className: "Baf2RecipeName",
            children: MW("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function Ez(WW) {
      let {
        fertilised: RW
      } = WW;
      const {
        t: MW
      } = (0, PC.C)();
      return (0, gA.jsxs)(Fz, {
        title: MW("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, gA.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, gA.jsx)(Jz, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, gA.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, gA.jsx)(Jz, {
            item: "Wheat",
            amount: 1
          }), (0, gA.jsx)(Jz, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, gA.jsx)("span", {
            className: "Baf2RecipeName",
            children: MW("buildAFactory2Game:recipeField")
          })]
        }), (0, gA.jsxs)("li", {
          className: gz()("Baf2Recipe", {
            InUse: RW
          }),
          children: [(0, gA.jsx)(Jz, {
            item: "Fertiliser",
            amount: 1
          }), (0, gA.jsx)("span", {
            className: "Baf2RecipeName",
            children: MW("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function Vz(WW) {
      let {
        tier: RW,
        seconds: MW
      } = WW;
      const {
        t: wW
      } = (0, PC.C)(), CW = function(WW) {
        return WW >= 5 ? iM : gM
      }(RW);
      return (0, gA.jsx)(Fz, {
        title: wW("buildAFactory2Game:recipesBringsUp", {
          seconds: MW
        }),
        count: CW.length,
        children: CW.map((WW => {
          let {
            item: RW,
            chance: MW
          } = WW;
          return (0, gA.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, gA.jsx)(Jz, {
              item: RW,
              amount: 1
            }), (0, gA.jsx)("span", {
              className: "Baf2RecipeName",
              children: LC(wW, RW)
            }), (0, gA.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: wW("buildAFactory2Game:recipeChance", {
                percent: Yz(MW)
              })
            })]
          }, RW)
        }))
      })
    }

    function mA(WW) {
      let {
        tier: RW,
        seconds: MW,
        noSeeds: wW
      } = WW;
      const {
        t: CW
      } = (0, PC.C)(), zR = uC(), AW = zA(RW, wW ? hz : void 0), bR = wW && zA(RW).length > AW.length, yR = Rz(RW);
      return (0, gA.jsxs)(Fz, {
        title: CW("buildAFactory2Game:recipesRecycles", {
          seconds: MW
        }),
        count: AW.length,
        children: [AW.map((WW => {
          let {
            find: RW,
            chance: MW
          } = WW;
          return (0, gA.jsxs)("li", {
            className: "Baf2Recipe",
            children: [zR.has(RW.item) && (0, gA.jsx)(lz, {}), (0, gA.jsx)(Jz, {
              item: RW.item,
              amount: RW.amount
            }), (0, gA.jsx)("span", {
              className: "Baf2RecipeName",
              children: LC(CW, RW.item)
            }), (0, gA.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: CW("buildAFactory2Game:recipeChance", {
                percent: Yz(MW)
              })
            })]
          }, RW.item)
        })), bR && (0, gA.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, gA.jsx)("span", {
            className: "Baf2RecipeName",
            children: CW("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), yR && (0, gA.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, gA.jsx)("span", {
            className: "Baf2RecipeName",
            children: CW("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function xA(WW) {
      let {
        tier: RW,
        seconds: MW
      } = WW;
      const {
        t: wW
      } = (0, PC.C)(), CW = Object.entries(qz).filter((WW => {
        let [, {
          item: MW
        }] = WW;
        return sz(Xz(MW), RW, kA(MW))
      }));
      return (0, gA.jsx)(Fz, {
        title: wW("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: MW
        }),
        count: CW.length,
        children: CW.map((WW => {
          let [RW, {
            item: MW,
            amount: CW
          }] = WW;
          return (0, gA.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, gA.jsx)(Jz, {
              item: RW,
              amount: 1
            }), (0, gA.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, gA.jsx)(Jz, {
              item: MW,
              amount: CW
            }), (0, gA.jsx)("span", {
              className: "Baf2RecipeName",
              children: LC(wW, MW)
            })]
          }, RW)
        }))
      })
    }

    function vA(WW) {
      let {
        tier: RW,
        seconds: MW
      } = WW;
      const {
        t: wW
      } = (0, PC.C)(), CW = uC(), zR = dz(Object.entries(ZR).filter((WW => {
        let [MW, wW] = WW;
        return sz(jA(MW, wW), RW, kA(wW))
      })), (WW => {
        let [RW, MW] = WW;
        return jA(RW, MW)
      }));
      return (0, gA.jsx)(Fz, {
        title: wW("buildAFactory2Game:recipesDigs", {
          seconds: MW
        }),
        count: zR.length,
        children: zR.map((WW => {
          let [MW, zR] = WW;
          const AW = jA(MW, zR),
            bR = AW > RW ? AW : null,
            yR = SR[MW],
            NW = null === bR && CW.has(zR);
          return (0, gA.jsxs)("li", {
            className: gz()("Baf2Recipe", {
              Locked: null !== bR,
              Far: iA(bR, RW)
            }),
            children: [NW && (0, gA.jsx)(lz, {}), (0, gA.jsx)(Jz, {
              item: MW,
              amount: 1
            }), (0, gA.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, gA.jsx)(Jz, {
              item: zR,
              amount: 1
            }), (0, gA.jsx)("span", {
              className: "Baf2RecipeName",
              children: LC(wW, zR)
            }), void 0 !== yR && (0, gA.jsx)("span", {
              className: "Baf2RecipeMore",
              children: wW("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / yR)
              })
            }), null !== bR && (0, gA.jsx)(Iz, {
              tier: bR
            })]
          }, MW)
        }))
      })
    }

    function Kz(WW) {
      var RW;
      let {
        def: MW,
        seconds: wW
      } = WW;
      const {
        t: CW
      } = (0, PC.C)();
      return (0, gA.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, gA.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (RW = MW.fuels) && void 0 !== RW ? RW : []).map((WW => (0, gA.jsx)(Jz, {
            item: WW,
            amount: 1
          }, WW))), (0, gA.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, gA.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, gA.jsx)(IC.e, {
              name: "bolt"
            }), CW("buildAFactory2Game:recipePower", {
              power: qR(MW.powerMade),
              seconds: wW
            })]
          })]
        })
      })
    }

    function uz(WW) {
      let {
        def: RW
      } = WW;
      const {
        t: MW
      } = (0, PC.C)();
      return (0, gA.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, gA.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, gA.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, gA.jsx)(IC.e, {
              name: "bolt"
            }), MW("buildAFactory2Game:recipeMixer", {
              cryo: bA((0, ZW.E)(RW, RW.cryoMade), "")
            })]
          })
        })
      })
    }

    function Oz(WW) {
      let {
        def: RW
      } = WW;
      const {
        t: MW
      } = (0, PC.C)();
      return (0, gA.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, gA.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, gA.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, gA.jsx)(IC.e, {
              name: "bolt"
            }), MW("buildAFactory2Game:recipeCondenser", {
              power: bA((0, ZW.E)(RW, RW.powerPerOp), ""),
              water: bA((0, ZW.E)(RW, RW.fluidMade), "")
            })]
          })
        })
      })
    }

    function nz(WW) {
      let {
        kind: RW,
        def: MW,
        input: wW,
        tier: CW,
        noSeeds: zR = !1
      } = WW;
      const AW = String(MW.opMs / 1e3);
      return LR(MW) ? (0, gA.jsx)(Uz, {
        seconds: AW
      }) : MW.field ? (0, gA.jsx)(Ez, {
        fertilised: null !== wW
      }) : MW.table ? (0, gA.jsx)(Vz, {
        tier: CW,
        seconds: AW
      }) : MW.recycles ? (0, gA.jsxs)(gA.Fragment, {
        children: [(0, gA.jsx)(mA, {
          tier: CW,
          seconds: AW,
          noSeeds: zR
        }), (0, gA.jsx)(xA, {
          tier: CW,
          seconds: AW
        })]
      }) : GR(MW) ? (0, gA.jsx)(vA, {
        tier: CW,
        seconds: AW
      }) : void 0 !== MW.fluidMade ? (0, gA.jsx)(Oz, {
        def: MW
      }) : void 0 !== MW.cryoMade ? (0, gA.jsx)(uz, {
        def: MW
      }) : void 0 !== MW.powerMade ? (0, gA.jsx)(Kz, {
        def: MW,
        seconds: AW
      }) : (0, gA.jsx)(Gz, {
        kind: RW,
        input: wW,
        tier: CW,
        seconds: AW
      })
    }

    function Gz(WW) {
      let {
        kind: RW,
        input: MW,
        tier: wW,
        seconds: CW
      } = WW;
      const {
        t: zR
      } = (0, PC.C)(), AW = uC(), bR = dz(function(WW) {
        const RW = new Map;
        for (const CW of WW) {
          var MW, wW;
          const WW = [CW.output, CW.outputAmount, CW.inputAmount, null === (MW = CW.bonus) || void 0 === MW ? void 0 : MW.item, null === (wW = CW.bonus) || void 0 === wW ? void 0 : wW.chance].join("|"),
            zR = RW.get(WW);
          zR ? zR.inputs.push(CW.input) : RW.set(WW, {
            inputs: [CW.input],
            inputAmount: CW.inputAmount,
            output: CW.output,
            outputAmount: CW.outputAmount,
            bonus: CW.bonus
          })
        }
        return [...RW.values()]
      }(aA(RW, wW).filter(MM)), (WW => Xz(WW.output))).filter((WW => sz(Xz(WW.output), wW, kA(WW.output))));
      return (0, gA.jsx)(Fz, {
        title: zR("buildAFactory2Game:recipesEach", {
          seconds: CW
        }),
        count: bR.length,
        children: bR.map((WW => {
          const RW = null !== MW && WW.inputs.includes(MW),
            CW = WW.inputs.length > 3 ? [RW ? MW : WW.inputs[0]] : WW.inputs,
            bR = Xz(WW.output) > wW ? Xz(WW.output) : null,
            yR = null === bR && AW.has(WW.output);
          return (0, gA.jsxs)("li", {
            className: gz()("Baf2Recipe", {
              InUse: RW,
              Locked: null !== bR,
              Far: iA(bR, wW)
            }),
            children: [yR && (0, gA.jsx)(lz, {}), CW.map(((RW, MW) => (0, gA.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [MW > 0 && (0, gA.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, gA.jsx)(Jz, {
                item: RW,
                amount: WW.inputAmount
              })]
            }, RW))), CW.length < WW.inputs.length && (0, gA.jsx)(Pz, {
              label: zR("buildAFactory2Game:recipeMore", {
                count: String(WW.inputs.length - CW.length)
              }),
              names: WW.inputs.filter((WW => !CW.includes(WW))).map((WW => LC(zR, WW)))
            }), (0, gA.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, gA.jsx)(Jz, {
              item: WW.output,
              amount: WW.outputAmount
            }), (0, gA.jsx)("span", {
              className: "Baf2RecipeName",
              children: LC(zR, WW.output)
            }), WW.bonus && (0, gA.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [zR("buildAFactory2Game:recipeBonus", {
                percent: Yz(WW.bonus.chance)
              }), (0, gA.jsx)(Jz, {
                item: WW.bonus.item,
                amount: 1
              })]
            }), null !== bR && (0, gA.jsx)(Iz, {
              tier: bR
            })]
          }, `${WW.output}|${WW.inputs[0]}`)
        }))
      })
    }

    function Lz(WW) {
      let {
        taught: RW,
        tier: MW
      } = WW;
      const {
        t: wW
      } = (0, PC.C)(), CW = uC(), zR = dz(Object.values(xM), (WW => WW.tier)).filter((WW => sz(WW.tier, MW)));
      return (0, gA.jsx)(Fz, {
        title: wW("buildAFactory2Game:benchCanMake"),
        count: zR.length,
        startOpen: !1,
        children: zR.map((WW => {
          const zR = WW.tier > MW,
            AW = !zR && CW.has(WW.output);
          return (0, gA.jsxs)("li", {
            className: gz()("Baf2Recipe", {
              InUse: WW.output === RW,
              Locked: zR,
              Far: iA(zR ? WW.tier : null, MW)
            }),
            children: [AW && (0, gA.jsx)(lz, {}), (0, gA.jsx)(Jz, {
              item: WW.output,
              amount: WW.outputAmount
            }), (0, gA.jsx)("span", {
              className: "Baf2RecipeName",
              children: LC(wW, WW.output)
            }), (0, gA.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), WW.inputs.map((WW => (0, gA.jsx)(Jz, {
              item: WW.item,
              amount: WW.amount
            }, WW.item))), zR && (0, gA.jsx)(Iz, {
              tier: WW.tier
            })]
          }, WW.output)
        }))
      })
    }
    var Hz, Dz, qA, Zz, Sz;
    const WA = rM.Generator,
      RA = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      MA = 1e3 * (null !== (Hz = WA.powerMade) && void 0 !== Hz ? Hz : 0) / WA.opMs,
      wA = Math.min(...(null !== (Dz = WA.fuels) && void 0 !== Dz ? Dz : []).map((WW => qM[WW]))) / 1e3,
      CA = rM["Volt Engine"],
      zb = 1e3 * (null !== (qA = CA.powerMade) && void 0 !== qA ? qA : 0) / CA.opMs,
      AA = qM[null !== (Zz = null === (Sz = CA.fuels) || void 0 === Sz ? void 0 : Sz[0]) && void 0 !== Zz ? Zz : ""] / 1e3;

    function bb(WW) {
      let {
        item: RW,
        label: MW,
        value: wW,
        note: CW,
        dim: zR
      } = WW;
      return (0, gA.jsxs)("li", {
        className: gz()("Baf2PowerRow", {
          Dim: zR
        }),
        children: [(0, gA.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, gA.jsx)(oC.c, {
            itemName: RW,
            amount: 0
          })
        }), (0, gA.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, gA.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: MW
          }), CW && (0, gA.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: CW
          })]
        }), (0, gA.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: wW
        })]
      })
    }

    function yb(WW, RW, MW, wW) {
      var CW;
      const zR = void 0 === wW ? rM[WW] : function(WW, RW) {
          if (null === RW) return WW;
          let MW = GW.get(RW);
          return MW || (MW = {
            ...WW,
            powerPerOp: nW(WW, RW),
            farmMob: RW
          }, GW.set(RW, MW)), MW
        }(rM[WW], wW),
        AW = RW && zR.couplable ? pR(zR, MW) : zR;
      return 1e3 * (null !== (CW = AW.powerPerOp) && void 0 !== CW ? CW : 0) / AW.opMs
    }

    function NA(WW) {
      var RW, MW, wW, CW, zR, AW, bR, yR;
      let {
        message: NW
      } = WW;
      const {
        t: eW
      } = (0, PC.C)(), BW = (WW, RW) => eW("buildAFactory2Game:powerPerSecond", {
        rate: bA(WW, RW)
      }), [tR, TW] = NW.baf2PowerGenerators, gR = NW.baf2PowerGeneratorFuel, iR = NW.baf2PowerSunPanels, YW = null !== (RW = NW.baf2PowerSunShare) && void 0 !== RW ? RW : 1, JW = NW.baf2PowerVaults, PW = NW.baf2PowerUsers, [IW, oW] = null !== (MW = NW.baf2PowerEngines) && void 0 !== MW ? MW : [0, 0], lW = null !== (wW = NW.baf2PowerEngineCells) && void 0 !== wW ? wW : 0, FW = null !== (CW = NW.baf2PowerPads) && void 0 !== CW ? CW : 0, fW = null !== (zR = NW.baf2PowerCharge) && void 0 !== zR ? zR : 0, [QW, rR] = null !== (AW = NW.baf2PowerReactors) && void 0 !== AW ? AW : [0, 0], [cR, XW] = null !== (bR = NW.baf2PowerBatteries) && void 0 !== bR ? bR : [0, 0];
      let jR = eW("buildAFactory2Game:powerEngineCells", {
        amount: String(lW)
      });
      lW > 0 && oW > 0 && (jR = eW("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(lW),
        time: ez(eW, lW * AA / oW)
      }));
      let kR = eW("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(gR)
      });
      gR > 0 && TW > 0 && (kR = eW("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(gR),
        time: ez(eW, gR * wA / TW)
      }));
      const aR = tR + IW + iR + QW;
      return (0, gA.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, gA.jsxs)("section", {
          children: [(0, gA.jsxs)("h3", {
            children: [eW("buildAFactory2Game:powerMaking"), (0, gA.jsx)("span", {
              children: BW(NW.baf2PowerMadePerS, "+")
            })]
          }), (0, gA.jsxs)("ul", {
            children: [0 === aR && (0, gA.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: eW("buildAFactory2Game:powerNoMakers")
            }), tR > 0 && (0, gA.jsx)(bb, {
              item: "Generator",
              label: `${LC(eW,"Generator")} \xd7${tR}`,
              note: `${eW("buildAFactory2Game:powerRunning",{amount:String(TW)})} \xb7 ${kR}`,
              value: BW(TW * MA, "+"),
              dim: 0 === TW
            }), IW > 0 && (0, gA.jsx)(bb, {
              item: "Volt Engine",
              label: `${LC(eW,"Volt Engine")} \xd7${IW}`,
              note: `${eW("buildAFactory2Game:powerRunning",{amount:String(oW)})} \xb7 ${jR}`,
              value: BW(oW * zb, "+"),
              dim: 0 === oW
            }), iR > 0 && (0, gA.jsx)(bb, {
              item: "Solar Panel",
              label: `${LC(eW,"Solar Panel")} \xd7${iR}`,
              note: eW(YW < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: BW(4 * iR * YW, "+")
            }), QW > 0 && (0, gA.jsx)(bb, {
              item: "Reactor Frame",
              label: `${eW("buildAFactory2Game:powerReactors")} \xd7${QW}`,
              note: eW("buildAFactory2Game:powerRunning", {
                amount: String(rR)
              }),
              value: BW(null !== (yR = NW.baf2PowerReactorPerS) && void 0 !== yR ? yR : 0, "+"),
              dim: 0 === rR
            })]
          })]
        }), (0, gA.jsxs)("section", {
          children: [(0, gA.jsxs)("h3", {
            children: [eW("buildAFactory2Game:powerStorage"), (0, gA.jsx)("span", {
              children: qR(NW.baf2PowerCap)
            })]
          }), (JW > 0 || cR > 0) && (0, gA.jsxs)("ul", {
            children: [JW > 0 && (0, gA.jsx)(bb, {
              item: "Charge Vault",
              label: `${LC(eW,"Charge Vault")} \xd7${JW}`,
              value: `+${qR(8e3*JW)}`
            }), cR > 0 && (0, gA.jsx)(bb, {
              item: "Battery Cell",
              label: `${eW("buildAFactory2Game:powerBatteries")} \xd7${cR}`,
              value: `+${qR(XW)}`
            })]
          })]
        }), (0, gA.jsxs)("section", {
          children: [(0, gA.jsxs)("h3", {
            children: [eW("buildAFactory2Game:powerUsing"), (0, gA.jsx)("span", {
              children: BW(NW.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, gA.jsxs)("ul", {
            children: [0 === PW.length && 0 === FW && 0 === fW && (0, gA.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: eW("buildAFactory2Game:powerNoUsers")
            }), PW.map((WW => {
              let [RW, MW, wW, CW, zR = 1, AW] = WW, bR = MW ? eW(RA[zR - 1], {
                name: LC(eW, RW)
              }) : LC(eW, RW);
              return void 0 !== AW && (bR = eW("buildAFactory2Game:powerFarmName", {
                name: bR,
                mob: eW(KW(AW))
              })), (0, gA.jsx)(bb, {
                item: RW,
                label: `${bR} \xd7${wW}`,
                note: eW("buildAFactory2Game:powerRunning", {
                  amount: String(CW)
                }),
                value: CW > 0 ? BW(CW * yb(RW, MW, zR, AW), "\u2212") : eW("buildAFactory2Game:powerIdle"),
                dim: 0 === CW
              }, `${RW}|${MW}|${zR}|${AW}`)
            })), FW > 0 && (0, gA.jsx)(bb, {
              item: "Charging Pad",
              label: `${LC(eW,"Charging Pad")} \xd7${FW}`,
              value: eW("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), fW > 0 && (0, gA.jsx)(bb, {
              item: "Homestead Core",
              label: eW("buildAFactory2Game:powerCharge"),
              value: BW(fW, "\u2212")
            }), NW.baf2PowerStarved > 0 && (0, gA.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, gA.jsx)(IC.e, {
                name: "triangle-exclamation"
              }), eW("buildAFactory2Game:powerStarved", {
                amount: String(NW.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var eA = MW(3573),
      BA = MW(1255);
    class tb {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(WW) {
        this.message = WW;
        for (const RW of this.listeners) RW()
      }
      get() {
        return this.message
      }
      subscribe(WW) {
        return this.listeners.add(WW), () => {
          this.listeners.delete(WW)
        }
      }
    }
    class TA extends tb {}

    function gb(WW, RW) {
      const MW = () => {
          const MW = WW.get();
          if (!MW || !RW) return MW;
          const [wW, CW, zR] = MW.baf2PowerAt;
          return wW === RW[0] && CW === RW[1] && zR === RW[2] ? MW : null
        },
        [CW, zR] = (0, wW.useState)(MW);
      return (0, wW.useEffect)((() => (zR(MW()), WW.subscribe((() => {
        zR(MW())
      })))), [WW, ...null !== RW && void 0 !== RW ? RW : []]), CW
    }

    function ib(WW) {
      return {
        stored: WW.baf2PowerStored,
        cap: WW.baf2PowerCap,
        madePerS: WW.baf2PowerMadePerS,
        usedPerS: WW.baf2PowerUsedPerS
      }
    }

    function YA(WW) {
      let {
        stored: RW,
        cap: MW
      } = WW;
      return (0, gA.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, gA.jsx)("div", {
          style: {
            width: `${Math.min(100,100*RW/Math.max(1,MW))}%`
          }
        })
      })
    }

    function JA(WW) {
      let {
        figures: RW,
        labelled: MW = !1
      } = WW;
      const {
        t: wW
      } = (0, PC.C)(), CW = RW.madePerS - RW.usedPerS, {
        text: zR,
        draining: AW
      } = function(WW, RW) {
        let {
          stored: MW,
          cap: wW,
          madePerS: CW,
          usedPerS: zR
        } = RW;
        const AW = CW - zR;
        return MW >= wW ? {
          text: WW("buildAFactory2Game:powerFull"),
          draining: !1
        } : AW > .05 ? {
          text: WW("buildAFactory2Game:powerFullIn", {
            time: ez(WW, (wW - MW) / AW)
          }),
          draining: !1
        } : AW < -.05 ? {
          text: WW("buildAFactory2Game:powerEmptyIn", {
            time: ez(WW, MW / -AW)
          }),
          draining: !0
        } : {
          text: WW("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(wW, RW);
      return (0, gA.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, gA.jsx)(YA, {
          stored: RW.stored,
          cap: RW.cap
        }), (0, gA.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, gA.jsx)("span", {
            children: wW(MW ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: qR(RW.stored),
              cap: qR(RW.cap)
            })
          }), (0, gA.jsxs)("span", {
            className: gz()("Baf2PowerNet", {
              Draining: AW
            }),
            children: [wW("buildAFactory2Game:powerPerSecond", {
              rate: bA(Math.abs(CW), CW < 0 ? "\u2212" : "+")
            }), " \xb7 ", zR]
          })]
        })]
      })
    }

    function PA(WW) {
      let {
        stored: RW,
        cap: MW,
        rates: wW
      } = WW;
      const {
        t: CW
      } = (0, PC.C)();
      return wW ? (0, gA.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, gA.jsx)(JA, {
          figures: {
            stored: RW,
            cap: MW,
            madePerS: wW[0],
            usedPerS: wW[1]
          },
          labelled: !0
        })
      }) : (0, gA.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, gA.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, gA.jsx)(YA, {
            stored: RW,
            cap: MW
          }), (0, gA.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, gA.jsx)("span", {
              children: CW("buildAFactory2Game:powerStoredLabelled", {
                stored: qR(RW),
                cap: qR(MW)
              })
            })
          })]
        })
      })
    }

    function IA(WW) {
      let {
        store: RW,
        close: MW
      } = WW;
      const {
        t: wW
      } = (0, PC.C)(), CW = gb(RW);
      return (0, gA.jsx)(eA.b, {
        close: MW,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, gA.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, gA.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, gA.jsxs)("div", {
              children: [(0, gA.jsx)("h2", {
                id: "baf2PowerTitle",
                children: wW("buildAFactory2Game:powerTitle")
              }), (0, gA.jsx)("p", {
                children: wW("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, gA.jsx)(BA.l, {
              onClick: MW
            })]
          }), CW && (0, gA.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, gA.jsx)(JA, {
              figures: ib(CW)
            }), (0, gA.jsx)(NA, {
              message: CW
            })]
          })]
        })
      })
    }

    function oA(WW) {
      var RW;
      let {
        kind: MW,
        def: CW,
        bV: zR,
        power: AW,
        stored: bR,
        cap: yR
      } = WW;
      const {
        t: NW
      } = (0, PC.C)(), eW = gb(AW, zR), [BW, tR] = (0, wW.useState)(!1);
      return (0, gA.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, gA.jsx)(nz, {
          kind: MW,
          def: CW,
          input: null,
          tier: null !== (RW = null === eW || void 0 === eW ? void 0 : eW.baf2PowerTier) && void 0 !== RW ? RW : 1
        }), (0, gA.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: NW("buildAFactory2Game:powerTitle")
        }), eW && (0, gA.jsx)(JA, {
          figures: ib(eW)
        }), !eW && (0, gA.jsx)(PA, {
          stored: bR,
          cap: yR,
          rates: null
        }), eW && (0, gA.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            tR(!BW)
          },
          "aria-expanded": BW,
          children: NW(BW ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), eW && BW && (0, gA.jsx)(NA, {
          message: eW
        })]
      })
    }
    const lA = 2500,
      FA = 17500,
      fA = `${lW} `;
    const QA = ["plan", "throttle"];

    function rb(WW) {
      if (WW.startsWith(`${IR} `)) return WW.slice(0, WW.lastIndexOf(" "));
      const RW = WW.split(" ");
      return RW[0] === wR && QA.includes(RW[4]) ? RW.slice(0, 5).join(" ") : null
    }
    class cb {
      constructor(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = WW, this.now = RW, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.sentCount = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = RW()
      }
      enqueue(WW) {
        this.queue(WW, this.nextTicket());
        const RW = this.sentCount + this.pending.length;
        return this.flush(), RW
      }
      track(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const MW = this.nextTicket();
        if (!RW.urgent) return this.queue(WW, MW), this.flush(), MW;
        const {
          supersedes: wW
        } = RW;
        for (let zR = this.pending.length - 1; zR >= this.urgent; zR--) {
          const RW = this.pending[zR];
          (RW.command === WW || null !== wW && void 0 !== wW && wW(RW.command)) && (this.pending.splice(zR, 1), this.markLeft(RW.tickets))
        }
        const CW = this.pending.findIndex((RW => {
          let {
            command: MW
          } = RW;
          return MW === WW
        }));
        return -1 !== CW ? this.pending[CW].tickets.push(MW) : (this.pending.splice(this.urgent, 0, {
          command: WW,
          tickets: [MW]
        }), this.urgent += 1), this.flush(), MW
      }
      leftAt(WW) {
        const RW = this.leftTimes.get(WW);
        return void 0 !== RW ? RW : this.pending.some((RW => {
          let {
            tickets: MW
          } = RW;
          return MW.includes(WW)
        })) ? null : -1 / 0
      }
      holdReserve() {
        this.reserves += 1;
        let WW = !0;
        return () => {
          WW && (WW = !1, this.reserves -= 1, this.flush())
        }
      }
      isWaitingLast(WW) {
        var RW;
        return (null === (RW = this.pending.at(-1)) || void 0 === RW ? void 0 : RW.command) === WW
      }
      sent() {
        return this.sentCount
      }
      clear() {
        for (const {
            tickets: WW
          }
          of this.pending) this.markLeft(WW);
        this.pending.length = 0, this.urgent = 0, null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      nextTicket() {
        return this.lastTicket += 1, this.lastTicket
      }
      markLeft(WW) {
        const RW = this.now();
        for (const MW of WW) this.leftTimes.set(MW, RW);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(WW, RW) {
        const MW = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === MW || void 0 === MW ? void 0 : MW.command) === WW) return void(! function(WW) {
          return WW === FW || WW.startsWith(`${oW} `) || WW.startsWith(`${mR} `)
        }(WW) ? MW.tickets.push(RW) : (this.pending.pop(), this.markLeft([...MW.tickets, RW])));
        const wW = void 0 === MW ? null : function(WW, RW) {
          const MW = `${SW} `;
          if (!WW.startsWith(MW) || !RW.startsWith(MW)) return null;
          const wW = MR(WW.slice(MW.length)),
            CW = MR(RW.slice(MW.length));
          return wW && CW && wW.item === CW.item ? RR(CW.seq, function(WW, RW) {
            const MW = WW => "number" === typeof WW ? WW : "one" === WW ? 1 : 99;
            return "fill" === WW || "fill" === RW ? "fill" : MW(WW) + MW(RW)
          }(wW.mode, CW.mode), CW.item) : null
        }(MW.command, WW);
        if (null !== wW && void 0 !== MW) return MW.command = wW, void MW.tickets.push(RW);
        const CW = rb(WW);
        if (null !== CW && void 0 !== MW && rb(MW.command) === CW) return MW.command = WW, void MW.tickets.push(RW);
        if (null !== MW && void 0 !== MW && MW.command.startsWith(fA) && WW.startsWith(fA)) {
          const wW = WW.slice(fA.length);
          if (MW.command.slice(fA.length).split(",").includes(wW)) return void MW.tickets.push(RW);
          const CW = `${MW.command},${wW}`;
          if (CW.length <= 119) return MW.command = CW, void MW.tickets.push(RW)
        }
        this.pending.push({
          command: WW,
          tickets: [RW]
        })
      }
      flush() {
        const WW = this.now();
        for (this.tokens = Math.min(5, this.tokens + (WW - this.refilledAt) / lA), this.refilledAt = WW; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.sentCount += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: WW,
            tickets: RW
          } = this.pending.shift();
          this.markLeft(RW), this.send(WW)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * lA)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class XA {
      constructor(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new cb(WW, RW)
      }
      send(WW) {
        return this.queue.enqueue(WW)
      }
      sent() {
        return this.queue.sent()
      }
      track(WW, RW) {
        return this.queue.track(WW, RW)
      }
      leftAt(WW) {
        return this.queue.leftAt(WW)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(WW) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = RW, this.send(WW), this.islandEdits.count
      }
      syncIslandEdits(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: MW
        } = this, wW = RW - MW.lastAtMs < FA;
        MW.count = wW ? Math.max(MW.count, WW) : WW
      }
      clear() {
        this.queue.clear()
      }
    }
    const jb = (0, wW.createContext)(null);

    function kb() {
      const WW = (0, wW.useContext)(jb);
      if (!WW) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return WW
    }

    function ab(WW, RW) {
      return null !== RW && void 0 !== RW ? RW : 1 === WW
    }

    function sA(WW, RW) {
      return WW.every((WW => {
        var MW;
        let [wW, , CW] = WW;
        return !ab(CW, null === (MW = RW.get(wW)) || void 0 === MW ? void 0 : MW.kept)
      }))
    }

    function dA(WW, RW, MW) {
      if (0 === WW.size) return WW;
      const wW = new Map(WW);
      for (const [CW, zR] of WW) {
        const WW = RW.find((WW => {
          let [RW] = WW;
          return RW === CW
        }));
        (!WW || zR.kept === (1 === WW[2]) || zR.atMs < MW) && wW.delete(CW)
      }
      return wW
    }

    function pA(WW) {
      var RW;
      let {
        bV: MW,
        input: CW,
        drops: zR,
        seconds: AW
      } = WW;
      const {
        t: bR
      } = (0, PC.C)(), yR = kb(), [NW, eW] = (0, wW.useState)(new Map);
      (0, wW.useEffect)((() => {
        zR && eW((WW => dA(WW, zR, Date.now() - FA)))
      }), [zR]), (0, wW.useEffect)((() => {
        const WW = function(WW, RW) {
          let MW = null;
          for (const {
              atMs: wW
            }
            of WW.values()) MW = null === MW ? wW : Math.min(MW, wW);
          return null === MW ? null : MW + RW
        }(NW, FA);
        if (null === WW || !zR) return;
        const RW = setTimeout((() => {
          eW((WW => dA(WW, zR, Date.now() - FA)))
        }), Math.max(0, WW - Date.now()) + 1);
        return () => {
          clearTimeout(RW)
        }
      }), [NW, zR]);
      const BW = uW(CW),
        tR = null !== BW && null !== zR && sA(zR, NW),
        TW = function(WW, RW, MW) {
          return null === WW || null === RW || sA(RW, MW) ? 0 : VW[UW[WW]]
        }(BW, zR, NW);
      return (0, gA.jsxs)(Fz, {
        title: bR("buildAFactory2Game:farmDropsTitle", {
          seconds: AW
        }),
        count: null !== (RW = null === zR || void 0 === zR ? void 0 : zR.length) && void 0 !== RW ? RW : 0,
        children: [TW > 0 && (0, gA.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: bR("buildAFactory2Game:farmDropsPower", {
            power: String(TW)
          })
        }), (null === BW || !zR) && (0, gA.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: bR("buildAFactory2Game:farmDropsEmpty")
        }), tR && (0, gA.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: bR("buildAFactory2Game:farmDropsAllVoided")
        }), null !== BW && (null === zR || void 0 === zR ? void 0 : zR.map((WW => {
          var RW;
          let [wW, CW, zR] = WW;
          const AW = CW < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            BW = ab(zR, null === (RW = NW.get(wW)) || void 0 === RW ? void 0 : RW.kept);
          return (0, gA.jsxs)("li", {
            className: gz()("Baf2Recipe Baf2FarmDrop", {
              Voided: !BW
            }),
            children: [(0, gA.jsx)(Jz, {
              item: wW,
              amount: 1
            }), (0, gA.jsx)("span", {
              className: "Baf2RecipeName",
              children: LC(bR, wW)
            }), (0, gA.jsx)("span", {
              className: "Baf2FarmRate",
              children: bR(AW, {
                amount: String(CW)
              })
            }), (0, gA.jsx)("button", {
              type: "button",
              className: gz()("Baf2FarmToggle SmallTextBold", {
                Kept: BW
              }),
              "aria-pressed": BW,
              onClick: () => {
                eW(new Map(NW).set(wW, {
                  kept: !BW,
                  atMs: Date.now()
                })), yR.send(function(WW, RW, MW, wW) {
                  return `${mR} ${WW} ${RW} ${MW} ${wW}`
                }(MW[0], MW[1], MW[2], wW))
              },
              children: bR(BW ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, wW)
        })))]
      })
    }
    var hA;
    const UA = String(null !== (hA = rM.Synthesizer.waterPerOp) && void 0 !== hA ? hA : 0);

    function EA(WW) {
      let {
        bV: RW,
        taught: MW
      } = WW;
      const {
        t: CW
      } = (0, PC.C)(), zR = kb(), [AW, bR] = (0, wW.useState)(null);
      (0, wW.useEffect)((() => {
        null !== AW && MW === AW && bR(null)
      }), [AW, MW]);
      const yR = null !== AW && void 0 !== AW ? AW : MW;
      let NW = CW("buildAFactory2Game:synthPick");
      return null !== yR && (NW = CW("buildAFactory2Game:synthGrows", {
        name: LC(CW, yR),
        input: LC(CW, YR),
        water: UA
      })), (0, gA.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, gA.jsx)("div", {
          className: gz()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === yR
          }),
          children: NW
        }), (0, gA.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: JR.map(((WW, MW) => {
            const wW = LC(CW, WW),
              AW = WW === yR;
            return (0, gA.jsx)("li", {
              children: (0, gA.jsx)("button", {
                type: "button",
                className: gz()("Baf2SynthTile", {
                  Selected: AW
                }),
                title: wW,
                "aria-label": wW,
                "aria-pressed": AW,
                onClick: () => {
                  AW || (bR(WW), zR.send(`${IR} ${RW[0]} ${RW[1]} ${RW[2]} ${MW}`))
                },
                children: (0, gA.jsx)(oC.c, {
                  itemName: WW,
                  amount: 0
                })
              })
            }, WW)
          }))
        })]
      })
    }
    const VA = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function mb(WW) {
      let {
        kind: RW,
        tier: MW,
        coupled: wW,
        level: CW,
        slot: zR
      } = WW;
      const {
        t: AW
      } = (0, PC.C)(), yR = DW(XR);
      if (!wW && null !== MW && MW < yR) return (0, gA.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, gA.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, gA.jsx)(IC.e, {
            name: "lock"
          })
        }), (0, gA.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: AW("buildAFactory2Game:upgradeLocked")
        }), (0, gA.jsx)("span", {
          className: "Baf2TierTag",
          children: AW("buildAFactory2Game:tierTag", {
            tier: String(yR)
          })
        })]
      });
      const NW = function(WW, RW) {
          if (bR() && "Crusher" !== WW && null !== RW) {
            if (xb(kM, RW)) return {
              item: kM,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (xb(jM, RW)) return {
              item: jM,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: XR,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(RW, MW),
        eW = AW(wW ? VA[CW - 1] : NW.emptyKey),
        BW = null !== MW ? function(WW, RW, MW, wW) {
          if (!bR() || !MW || "Crusher" === WW || RW < 10) return null;
          const CW = DW(kM);
          if (wW < 3 && CW > 1 && (2 === wW || RW >= CW)) return {
            tier: CW,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const zR = DW(jM);
          if (1 === wW && zR > 1) return {
            tier: zR,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(RW, MW, wW, CW) : null;
      return (0, gA.jsxs)("div", {
        className: gz()("Baf2UpgradeSocket", {
          Fitted: wW
        }),
        children: [(0, gA.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [wW && zR, !wW && (0, gA.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, gA.jsx)(oC.c, {
              itemName: NW.item,
              amount: 0
            })
          })]
        }), (0, gA.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, gA.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: AW("buildAFactory2Game:upgradeTitle")
          }), (0, gA.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: eW
          }), wW && CW >= 2 && "Crusher" === RW && (0, gA.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: AW("buildAFactory2Game:couplerCrusherHint")
          }), BW && null !== MW && MW < BW.tier && (0, gA.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, gA.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, gA.jsx)(IC.e, {
                name: "lock"
              })
            }), AW(BW.lockedKey), (0, gA.jsx)("span", {
              className: "Baf2TierTag",
              children: AW("buildAFactory2Game:tierTag", {
                tier: String(BW.tier)
              })
            })]
          }), BW && null !== MW && MW >= BW.tier && (0, gA.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: AW(BW.nextKey)
          })]
        })]
      })
    }

    function xb(WW, RW) {
      const MW = DW(WW);
      return MW > 1 && RW >= MW
    }
    var vb = MW(35196);
    const KA = (0, ZW.E)(rM.Condenser, rM.Condenser.fluidMade),
      uA = .05;
    class OA extends tb {}

    function nA(WW) {
      return bA(WW, "")
    }

    function GA(WW, RW, MW) {
      return WW(RW ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: MW
      })
    }

    function LA(WW, RW, MW, wW) {
      return MW <= uA && wW <= uA ? null : wW <= uA || MW <= uA ? GA(WW, RW, wW <= uA ? bA(MW, "+") : bA(wW, "\u2212")) : WW(RW ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: nA(MW),
        used: nA(wW)
      })
    }

    function HA(WW, RW) {
      return Math.min(100, 100 * WW / Math.max(1, RW))
    }

    function DA(WW) {
      let {
        stored: RW,
        cap: MW,
        netPerS: wW,
        rates: CW,
        cryo: zR
      } = WW;
      const {
        t: AW
      } = (0, PC.C)(), bR = function(WW, RW, MW, wW) {
        return MW <= 0 ? WW("buildAFactory2Game:waterNoStorage") : RW >= MW ? WW("buildAFactory2Game:powerFull") : wW > uA ? WW("buildAFactory2Game:powerFullIn", {
          time: ez(WW, (MW - RW) / wW)
        }) : wW < -.05 ? RW <= 0 ? WW("buildAFactory2Game:waterEmpty") : WW("buildAFactory2Game:powerEmptyIn", {
          time: ez(WW, RW / -wW)
        }) : WW("buildAFactory2Game:powerSteady")
      }(AW, RW, MW, wW), yR = MW > 0 && RW < MW && Math.abs(wW) <= uA, NW = AW(zR ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), eW = null !== CW ? `${CW} \xb7 ${bR}` : yR ? NW : `${NW} \xb7 ${bR}`;
      return (0, gA.jsxs)(gA.Fragment, {
        children: [(0, gA.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, gA.jsx)("div", {
            style: {
              width: `${HA(RW,MW)}%`
            }
          })
        }), (0, gA.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, gA.jsx)("span", {
            children: MW > 0 && AW("buildAFactory2Game:powerStored", {
              stored: (0, ZW.N)(RW),
              cap: (0, ZW.N)(MW)
            })
          }), (0, gA.jsx)("span", {
            className: gz()("Baf2WaterNet", {
              Draining: wW < -.05
            }),
            children: eW
          })]
        })]
      })
    }

    function qb(WW) {
      let {
        water: RW,
        at: MW,
        side: wW = null
      } = WW;
      const {
        t: CW
      } = (0, PC.C)(), zR = kb(), [AW, bR, yR] = RW;
      return (0, gA.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, gA.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, gA.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: CW(null === wW ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${wW}`)
          }), (0, gA.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              zR.send(`${ZW.y} ${MW[0]} ${MW[1]} ${MW[2]}${"cryoOut"===wW?" cryo":""}`)
            },
            children: CW("buildAFactory2Game:waterDetails")
          })]
        }), (0, gA.jsx)(DA, {
          stored: AW,
          cap: bR,
          netPerS: yR,
          rates: GA(CW, "cryoOut" === wW, bA(Math.abs(yR), yR < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === wW
        })]
      })
    }

    function ZA(WW, RW) {
      var MW, wW, CW;
      const zR = !0 === RW.baf2WaterCryo,
        AW = null !== (MW = null === (wW = RW.baf2WaterMakers.find((WW => WW[0] === (zR ? ZW.e : "Condenser")))) || void 0 === wW ? void 0 : wW[1]) && void 0 !== MW ? MW : 0,
        bR = [],
        yR = (RW, MW, wW) => {
          RW > 0 && bR.push(WW(1 === RW ? MW : wW, {
            count: String(RW)
          }))
        };
      return zR ? yR(AW, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : yR(AW, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), yR(null !== (CW = RW.baf2WaterPipes) && void 0 !== CW ? CW : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), yR(RW.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), bR.join(" \xb7 ")
    }

    function SA(WW, RW) {
      if (!0 === RW.baf2WaterCryo) return function(WW, RW) {
        const MW = rM[ZW.e];
        switch (RW.baf2WaterThis) {
          case "pipe":
            return {
              text: WW("buildAFactory2Game:cryoThisPipe"), bad: !1
            };
          case "condenserFull":
            return {
              text: WW("buildAFactory2Game:cryoThisMixerFull"), bad: !1
            };
          case "condenserNoPower":
            return {
              text: WW("buildAFactory2Game:cryoThisMixerNoPower"), bad: !0
            };
          case "condenserNoOutlet":
            return {
              text: WW("buildAFactory2Game:cryoThisMixerNoOutlet"), bad: !0
            };
          case "mixerNoInput":
            return {
              text: WW("buildAFactory2Game:cryoThisMixerNoInput"), bad: !0
            };
          case "mixerBadInput":
            return {
              text: WW("buildAFactory2Game:cryoThisMixerBadInput"), bad: !0
            };
          case "mixerNoWater":
            return {
              text: WW("buildAFactory2Game:cryoThisMixerNoWater"), bad: !0
            };
          case "condenser": {
            var wW;
            const [CW, zR] = null !== (wW = RW.baf2WaterThisRates) && void 0 !== wW ? wW : [(0, ZW.E)(MW, MW.cryoMade), (0, ZW.E)(MW, MW.powerPerOp)];
            return !0 === RW.baf2WaterDriven ? {
              text: WW("buildAFactory2Game:cryoThisMixerDriven", {
                rate: nA(CW)
              }),
              bad: !1
            } : {
              text: WW("buildAFactory2Game:cryoThisMixer", {
                rate: nA(CW),
                power: nA(zR)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: WW("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(WW, RW);
      const MW = !0 === RW.baf2WaterDriven,
        wW = rM.Condenser;
      switch (RW.baf2WaterThis) {
        case "pipe":
          return {
            text: WW("buildAFactory2Game:waterThisPipe"), bad: !1
          };
        case "condenserFull":
          return {
            text: WW("buildAFactory2Game:waterThisCondenserFull"), bad: !1
          };
        case "condenserNoPower":
          return {
            text: WW("buildAFactory2Game:waterThisCondenserNoPower"), bad: !0
          };
        case "condenserNoOutlet":
          return {
            text: WW("buildAFactory2Game:waterThisCondenserNoOutlet"), bad: !0
          };
        case "tank":
          return {
            text: WW("buildAFactory2Game:waterThisTank", {
              tank: (0, ZW.N)(ZW.t),
              cap: (0, ZW.N)(RW.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var CW;
          const [zR, AW] = null !== (CW = RW.baf2WaterThisRates) && void 0 !== CW ? CW : [KA, (0, ZW.E)(wW, wW.powerPerOp)];
          return MW ? {
            text: WW("buildAFactory2Game:waterThisCondenserDriven", {
              rate: nA(zR)
            }),
            bad: !1
          } : {
            text: WW("buildAFactory2Game:waterThisCondenser", {
              rate: nA(zR),
              power: nA(AW)
            }),
            bad: !1
          }
        }
        default:
          return {
            text: WW("buildAFactory2Game:waterThisUser"), bad: !1
          }
      }
    }

    function Wb(WW, RW) {
      const MW = RW.baf2WaterMakers.some((WW => !0 === WW[5]));
      if (!0 === RW.baf2WaterCryo) {
        const wW = RW.baf2WaterUsedPerS - RW.baf2WaterMadePerS,
          CW = MW || wW <= uA ? 0 : (0, ZW.A)(wW);
        return 0 === CW ? null : CW > 1 ? WW("buildAFactory2Game:cryoNextMixers", {
          mixers: String(CW)
        }) : WW("buildAFactory2Game:cryoNextOne")
      }
      const wW = MW ? null : function(WW, RW) {
        const MW = RW - WW;
        return MW <= uA ? null : Math.ceil(MW / KA)
      }(RW.baf2WaterMadePerS, RW.baf2WaterUsedPerS);
      return null === wW ? null : wW > 1 ? WW("buildAFactory2Game:waterNextCondensers", {
        condensers: String(wW)
      }) : WW("buildAFactory2Game:waterNextOne")
    }

    function Rb(WW) {
      let {
        item: RW,
        label: MW,
        note: wW,
        value: CW,
        dim: zR,
        bad: AW
      } = WW;
      return (0, gA.jsxs)("li", {
        className: gz()("Baf2WaterRow", {
          Dim: zR,
          Bad: AW
        }),
        children: [(0, gA.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, gA.jsx)(oC.c, {
            itemName: RW,
            amount: 0
          })
        }), (0, gA.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, gA.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: MW
          }), wW && (0, gA.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: wW
          })]
        }), (0, gA.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: CW
        })]
      })
    }

    function Mb(WW) {
      return vb.o[WW] ? WW : "Reactor Port"
    }

    function wb(WW) {
      let {
        message: RW
      } = WW;
      const {
        t: MW
      } = (0, PC.C)(), wW = !0 === RW.baf2WaterCryo, CW = (WW, RW) => GA(MW, wW, bA(WW, RW));
      return (0, gA.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, gA.jsxs)("section", {
          children: [(0, gA.jsxs)("h3", {
            children: [MW("buildAFactory2Game:waterMakes"), (0, gA.jsx)("span", {
              children: CW(RW.baf2WaterMadePerS, "+")
            })]
          }), (0, gA.jsxs)("ul", {
            children: [0 === RW.baf2WaterMakers.length && (0, gA.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: MW(wW ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), RW.baf2WaterMakers.map((WW => {
              let [RW, wW, zR, AW, bR, yR] = WW;
              const NW = MW("buildAFactory2Game:powerRunning", {
                amount: String(zR)
              });
              let eW = bR > 0 ? MW("buildAFactory2Game:waterMakerPower", {
                running: NW,
                power: nA(bR)
              }) : NW;
              return yR && (eW = MW(0 === zR && AW <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, gA.jsx)(Rb, {
                item: RW,
                label: `${LC(MW,RW)} \xd7${wW}`,
                note: eW,
                value: zR > 0 || yR && AW > 0 ? CW(AW, "+") : MW("buildAFactory2Game:powerIdle"),
                dim: 0 === zR && !yR,
                bad: yR
              }, RW)
            }))]
          })]
        }), (0, gA.jsxs)("section", {
          children: [(0, gA.jsxs)("h3", {
            children: [MW("buildAFactory2Game:waterUses"), (0, gA.jsx)("span", {
              children: CW(RW.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, gA.jsxs)("ul", {
            children: [0 === RW.baf2WaterUsers.length && (0, gA.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: MW(wW ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), RW.baf2WaterUsers.map((WW => {
              let [RW, wW, zR, AW] = WW;
              const bR = vb.o[RW] ? LC(MW, RW) : RW;
              return (0, gA.jsx)(Rb, {
                item: Mb(RW),
                label: wW > 1 ? `${bR} \xd7${wW}` : bR,
                note: AW ? MW("buildAFactory2Game:waterPortFirst") : void 0,
                value: zR > 0 ? CW(zR, "\u2212") : MW("buildAFactory2Game:powerIdle"),
                dim: 0 === zR
              }, RW)
            }))]
          })]
        })]
      })
    }

    function Cb(WW) {
      var RW, MW, CW, zR, AW;
      let {
        store: bR,
        close: yR
      } = WW;
      const {
        t: NW
      } = (0, PC.C)(), eW = function(WW) {
        const [RW, MW] = (0, wW.useState)((() => WW.get()));
        return (0, wW.useEffect)((() => (MW(WW.get()), WW.subscribe((() => {
          MW(WW.get())
        })))), [WW]), RW
      }(bR), BW = null !== (RW = null === eW || void 0 === eW ? void 0 : eW.baf2WaterStored) && void 0 !== RW ? RW : 0, tR = null !== (MW = null === eW || void 0 === eW ? void 0 : eW.baf2WaterCap) && void 0 !== MW ? MW : 0, TW = null !== (CW = null === eW || void 0 === eW ? void 0 : eW.baf2WaterMadePerS) && void 0 !== CW ? CW : 0, gR = null !== (zR = null === eW || void 0 === eW ? void 0 : eW.baf2WaterUsedPerS) && void 0 !== zR ? zR : 0, iR = null !== (AW = null === eW || void 0 === eW ? void 0 : eW.baf2WaterNetPerS) && void 0 !== AW ? AW : TW - gR, YW = eW && SA(NW, eW), JW = eW && Wb(NW, eW), PW = !0 === (null === eW || void 0 === eW ? void 0 : eW.baf2WaterCryo);
      return (0, gA.jsx)(eA.b, {
        close: yR,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, gA.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, gA.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, gA.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== eW && tR <= 0 ? (0, gA.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, gA.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, gA.jsx)(oC.c, {
                  itemName: PW ? AM.g : ZW.j,
                  amount: 0
                })
              }), (0, gA.jsxs)("div", {
                children: [(0, gA.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: NW(PW ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), eW && (0, gA.jsx)("p", {
                  children: ZA(NW, eW)
                })]
              })]
            }), (0, gA.jsx)(BA.l, {
              onClick: yR
            })]
          }), eW && YW && (0, gA.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, gA.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, gA.jsx)(DA, {
                stored: BW,
                cap: tR,
                netPerS: iR,
                cryo: PW,
                rates: LA(NW, PW, TW, gR)
              })
            }), (0, gA.jsx)("div", {
              className: gz()("Baf2WaterThis", {
                Bad: YW.bad
              }),
              children: YW.text
            }), eW.baf2WaterDriven && (0, gA.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, gA.jsx)(IC.e, {
                name: "bolt"
              }), NW(PW ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), JW && (0, gA.jsx)("p", {
              className: "Baf2WaterNext",
              children: JW
            }), (0, gA.jsx)(wb, {
              message: eW
            })]
          })]
        })
      })
    }
    class zy {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(WW, RW) {
        const MW = this.get(WW);
        MW && null === RW.opLeftMs && null === RW.fuelLeftMs && RW.status === MW.status ? RW = {
          ...RW,
          opLeftMs: MW.opLeftMs,
          fuelLeftMs: MW.fuelLeftMs,
          burning: MW.burning
        } : this.updates++, this.pos = WW, this.view = RW;
        for (const wW of this.listeners) wW()
      }
      get(WW) {
        return null !== this.pos && this.pos[0] === WW[0] && this.pos[1] === WW[1] && this.pos[2] === WW[2] ? this.view : null
      }
      forget(WW) {
        null !== this.get(WW) && (this.pos = null, this.view = null)
      }
      get updateCount() {
        return this.updates
      }
      subscribe(WW) {
        return this.listeners.add(WW), () => {
          this.listeners.delete(WW)
        }
      }
    }

    function Ab(WW, RW, MW, wW) {
      return "noFuel" === RW && wW && !DR(rM[WW]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === RW && !0 === (null === MW || void 0 === MW ? void 0 : MW.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === RW && !0 === (null === MW || void 0 === MW ? void 0 : MW.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === RW && !0 === (null === MW || void 0 === MW ? void 0 : MW.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === RW && !0 === (null === MW || void 0 === MW ? void 0 : MW.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : by(RW, MW) ? "buildAFactory2Game:machineStatus_noInputShort" : function(WW, RW) {
        const MW = rM[WW];
        if ("noFuel" === RW && void 0 !== MW.fuels) return DR(MW) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (MW.mobFarm && ("noInput" === RW || "badInput" === RW)) return `buildAFactory2Game:machineStatus_${RW}MobFarm`;
        if ("outputFull" === RW && (void 0 !== MW.table || MW.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === RW && VR(MW)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== MW.cryoMade && ("noInput" === RW || "noOutlet" === RW || "fluidFull" === RW)) return `buildAFactory2Game:machineStatus_${RW}Mixer`;
        return `buildAFactory2Game:machineStatus_${RW}`
      }(WW, RW)
    }

    function by(WW, RW) {
      return "noInput" === WW && null !== RW && void 0 !== RW && RW.input && RW.inputShort ? {
        input: RW.input,
        short: RW.inputShort
      } : null
    }

    function yy(WW) {
      return iz(WW) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== WW.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function Nb(WW) {
      const RW = (0, pW.oe)(WW);
      return `Baf2Pane Baf2Pane${RW.charAt(0).toUpperCase()}${RW.slice(1)}`
    }

    function eb(WW, RW) {
      const [MW, CW] = (0, wW.useState)((() => WW.get(RW)));
      return (0, wW.useEffect)((() => {
        CW(WW.get(RW));
        const MW = WW.subscribe((() => {
          CW(WW.get(RW))
        }));
        return () => {
          MW(), WW.forget(RW)
        }
      }), [WW, ...RW]), MW
    }

    function Bb(WW, RW, MW, wW) {
      const CW = rM[WW],
        zR = RW && CW.couplable ? pR(CW, MW) : CW,
        AW = null !== wW && GR(zR) ? function(WW, RW) {
          var MW;
          return null !== (MW = null !== RW && GR(WW) ? SR[RW] : void 0) && void 0 !== MW ? MW : WW.opMs
        }(zR, WM(wW)) : zR.opMs;
      return AW === zR.opMs ? zR : {
        ...zR,
        opMs: AW
      }
    }

    function ty(WW) {
      let {
        running: RW,
        opMs: MW,
        opLeftMs: wW,
        updateCount: CW
      } = WW;
      return (0, gA.jsx)("div", {
        className: gz()("Baf2MachineProgress", {
          Running: RW
        }),
        children: (0, gA.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: MW / 1e3 + "s",
            animationDelay: null === wW ? void 0 : (wW - MW) / 1e3 + "s"
          }
        }, CW)
      })
    }

    function Tb(WW) {
      let {
        running: RW,
        leftMs: MW,
        periodMs: wW,
        updateCount: CW
      } = WW;
      const {
        t: zR
      } = (0, PC.C)(), AW = Math.min(Math.max(null !== MW && void 0 !== MW ? MW : 0, 0), wW), bR = RW && AW > 0, yR = zR("buildAFactory2Game:machineBarFuel");
      return (0, gA.jsx)("div", {
        className: gz()("Baf2FuelBurn", {
          Draining: bR
        }),
        role: "img",
        title: yR,
        "aria-label": yR,
        children: (0, gA.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: bR ? {
            animationDuration: wW / 1e3 + "s",
            animationDelay: (AW - wW) / 1e3 + "s"
          } : {
            transform: `scaleY(${AW/wW})`
          }
        }, CW)
      })
    }

    function gy(WW, RW, MW) {
      let [wW, CW] = MW;
      const zR = 1 !== wW ? JC(RW) : null;
      return {
        amount: wW,
        have: CW,
        item: WW(zR || GC(RW))
      }
    }

    function iy(WW) {
      return GR(WW) ? "buildAFactory2Game:machineBarMining" : LR(WW) ? "buildAFactory2Game:machineBarCutting" : void 0 !== WW.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function Yb(WW) {
      var RW, MW, wW, CW, zR, AW, bR, yR, NW, eW, BW, tR, TW, gR, iR, YW, JW, PW, IW;
      let {
        kind: oW,
        bV: lW,
        store: FW,
        power: fW,
        renderSlot: QW
      } = WW;
      const {
        t: rR
      } = (0, PC.C)(), cR = eb(FW, lW), XW = rM[oW], jR = null !== (RW = null === cR || void 0 === cR ? void 0 : cR.coupled) && void 0 !== RW && RW, kR = null !== (MW = null === cR || void 0 === cR ? void 0 : cR.couplerLevel) && void 0 !== MW ? MW : 1, aR = Bb(oW, jR, kR, null !== (wW = null === cR || void 0 === cR || null === (CW = cR.dug) || void 0 === CW ? void 0 : CW.item) && void 0 !== wW ? wW : null), sW = null !== (zR = null === cR || void 0 === cR ? void 0 : cR.status) && void 0 !== zR ? zR : null, dW = null !== (AW = null === cR || void 0 === cR ? void 0 : cR.power) && void 0 !== AW ? AW : null, pW = null !== (bR = null === cR || void 0 === cR ? void 0 : cR.opLeftMs) && void 0 !== bR ? bR : null, hW = null !== (yR = null === cR || void 0 === cR ? void 0 : cR.dug) && void 0 !== yR ? yR : null, UW = null !== hW && GR(XW) ? SR[null !== (NW = WM(hW.item)) && void 0 !== NW ? NW : ""] : void 0, EW = void 0 === UW ? null : 6e4 / UW, VW = null !== (eW = null === cR || void 0 === cR ? void 0 : cR.powerCap) && void 0 !== eW ? eW : 4e3, mR = null !== (BW = null === cR || void 0 === cR ? void 0 : cR.tier) && void 0 !== BW ? BW : null, xR = void 0 !== aR.powerMade, vR = null !== XW.fuelSlot ? QW(XW.fuelSlot) : null, KW = dR(XW), uW = !jR && !0 === (null === cR || void 0 === cR ? void 0 : cR.fuelFed), nW = !jR && !0 === (null === cR || void 0 === cR ? void 0 : cR.fuelFeeds), GW = null !== XW.fuelSlot && !jR, LW = null !== (tR = null === cR || void 0 === cR ? void 0 : cR.fuelLeftMs) && void 0 !== tR ? tR : null, HW = function(WW, RW, MW) {
        var wW;
        const CW = null === RW ? void 0 : qM[RW];
        return Math.max(null !== (wW = null !== CW && void 0 !== CW ? CW : MW) && void 0 !== wW ? wW : 0, WW.opMs)
      }(aR, null !== (TW = null === cR || void 0 === cR ? void 0 : cR.burning) && void 0 !== TW ? TW : null, LW), DW = null !== (gR = null === cR || void 0 === cR ? void 0 : cR.fuelKeep) && void 0 !== gR ? gR : null, qR = null === sW ? null : Ab(oW, sW, cR, uW), ZW = null === sW ? null : by(sW, cR);
      return (0, gA.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, gA.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, gA.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: rR(GC(oW))
          }), hW && (0, gA.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [rR("Tree Cutter" === oW ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, gA.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, gA.jsx)(oC.c, {
                itemName: hW.item,
                amount: 0
              })
            }), (0, gA.jsx)(lC.c, {
              text: hW.name
            })]
          }), null !== EW && (0, gA.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: rR("buildAFactory2Game:machineDigsFixed", {
              perMin: String(EW)
            })
          }), (null === cR || void 0 === cR ? void 0 : cR.field) && (0, gA.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, gA.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, gA.jsx)(oC.c, {
                itemName: "Wheat",
                amount: 0
              })
            }), rR("buildAFactory2Game:machineField", {
              planted: String(cR.field[0]),
              ripe: String(cR.field[1])
            })]
          }), (0, gA.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, gA.jsxs)("div", {
              className: gz()("Baf2MachineColumn", {
                Baf2Burns: GW
              }),
              children: [null !== aR.inputSlot && (0, gA.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, gA.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: rR(yy(aR))
                }), QW(aR.inputSlot)]
              }), null !== XW.fuelSlot && !jR && (0, gA.jsxs)("div", {
                className: gz()("Baf2MachineSlot", {
                  Baf2FuelFed: uW
                }),
                children: [(0, gA.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [uW && (0, gA.jsx)(IC.e, {
                    name: "fire"
                  }), rR("buildAFactory2Game:machineFuel")]
                }), (0, gA.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, gA.jsx)(Tb, {
                    running: "running" === sW,
                    leftMs: LW,
                    periodMs: HW,
                    updateCount: FW.updateCount
                  }), vR]
                })]
              }), null !== XW.fuelSlot && jR && (0, gA.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, gA.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: rR("buildAFactory2Game:machineFuel")
                }), (0, gA.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: rR("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": rR("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, gA.jsx)(IC.e, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, gA.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, gA.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: rR(iy(aR))
              }), (0, gA.jsx)(ty, {
                running: "running" === sW,
                opMs: aR.opMs,
                opLeftMs: pW,
                updateCount: FW.updateCount
              })]
            }), aR.outputSlots.length > 0 && (0, gA.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, gA.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: rR("buildAFactory2Game:machineOutput")
              }), (0, gA.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: aR.outputSlots.map((WW => (0, gA.jsx)("div", {
                  children: QW(WW)
                }, WW)))
              })]
            }), null !== dW && xR && (0, gA.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, gA.jsx)("div", {
                style: {
                  height: 100 * dW / VW + "%"
                }
              })
            })]
          }), GW && null !== DW && (0, gA.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, gA.jsx)(IC.e, {
              name: "arrows-rotate"
            }), rR(LR(aR) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(DW)
            })]
          }), (uW || nW) && (0, gA.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, gA.jsx)(IC.e, {
              name: "fire"
            }), rR(uW ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), XW.couplable && (0, gA.jsx)(mb, {
            kind: oW,
            tier: mR,
            coupled: jR,
            level: kR,
            slot: KW === XW.fuelSlot ? vR : null !== KW ? QW(KW) : null
          }), null !== dW && !xR && !0 === (null === cR || void 0 === cR ? void 0 : cR.reactorPowered) && (0, gA.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: rR("buildAFactory2Game:machineReactorPowered")
          }), null !== dW && !xR && !0 !== (null === cR || void 0 === cR ? void 0 : cR.reactorPowered) && (0, gA.jsx)(PA, {
            stored: dW,
            cap: VW,
            rates: null !== (iR = null === cR || void 0 === cR ? void 0 : cR.powerRates) && void 0 !== iR ? iR : null
          }), (null === cR || void 0 === cR ? void 0 : cR.water) && (0, gA.jsx)(qb, {
            water: cR.water,
            at: lW,
            side: cR.cryo ? "waterIn" : null
          }), (null === cR || void 0 === cR ? void 0 : cR.cryo) && (0, gA.jsx)(qb, {
            water: cR.cryo,
            at: lW,
            side: "cryoOut"
          }), null !== cR && void 0 !== cR && cR.inertCoupler ? (0, gA.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: rR("buildAFactory2Game:machineStatus_couplerOff", {
              item: LC(rR, cR.inertCoupler)
            })
          }) : null !== qR && (0, gA.jsx)("div", {
            className: gz()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== sW
            }),
            children: rR(qR, ZW ? gy(rR, ZW.input, ZW.short) : void 0)
          })]
        }), (0, gA.jsxs)("div", {
          className: gz()("Baf2MachineSide", {
            Baf2SynthSide: VR(XW)
          }),
          children: [VR(XW) && (0, gA.jsx)(EA, {
            bV: lW,
            taught: null !== (YW = null === cR || void 0 === cR ? void 0 : cR.taught) && void 0 !== YW ? YW : null
          }, lW.join(",")), xR && (0, gA.jsx)(oA, {
            kind: oW,
            def: aR,
            bV: lW,
            power: fW,
            stored: null !== dW && void 0 !== dW ? dW : 0,
            cap: VW
          }), OW(XW) && (0, gA.jsx)(pA, {
            bV: lW,
            input: null !== (JW = null === cR || void 0 === cR ? void 0 : cR.input) && void 0 !== JW ? JW : null,
            drops: null !== (PW = null === cR || void 0 === cR ? void 0 : cR.farm) && void 0 !== PW ? PW : null,
            seconds: String(aR.opMs / 1e3)
          }), !xR && !OW(XW) && !VR(XW) && (0, gA.jsx)(nz, {
            kind: oW,
            def: aR,
            input: null !== (IW = null === cR || void 0 === cR ? void 0 : cR.input) && void 0 !== IW ? IW : null,
            tier: null !== mR && void 0 !== mR ? mR : 1,
            noSeeds: !0 === (null === cR || void 0 === cR ? void 0 : cR.noSeeds)
          })]
        })]
      })
    }

    function Jb(WW, RW, MW, wW) {
      var CW;
      const zR = rM[WW],
        AW = [zR.inputSlot, zR.fuelSlot, ...null !== (CW = zR.inputSlots) && void 0 !== CW ? CW : []].filter((WW => null !== WW));
      return {
        render: CW => {
          let {
            bV: zR,
            renderSlot: AW
          } = CW;
          return (0, gA.jsx)(jb.Provider, {
            value: wW,
            children: (0, gA.jsx)(Yb, {
              kind: WW,
              bV: zR,
              store: RW,
              power: MW,
              renderSlot: AW
            })
          })
        },
        quickMoveRange: AW.length > 0 ? [Math.min(...AW), Math.max(...AW) + 1] : [0, 0],
        className: Nb(WW)
      }
    }
    const Pb = "Assembler";

    function Ib(WW) {
      var RW, MW, wW, CW, zR, AW, bR, yR, NW;
      let {
        bV: eW,
        store: BW,
        renderSlot: tR
      } = WW;
      const {
        t: TW
      } = (0, PC.C)(), gR = eb(BW, eW), iR = null !== (RW = null === gR || void 0 === gR ? void 0 : gR.tier) && void 0 !== RW ? RW : 1, YW = null !== (MW = null === gR || void 0 === gR ? void 0 : gR.taught) && void 0 !== MW ? MW : null, JW = KR(Pb, {
        coupled: !1,
        taught: YW
      }), PW = null !== (wW = JW.bench) && void 0 !== wW ? wW : null, IW = null !== (CW = null === gR || void 0 === gR ? void 0 : gR.status) && void 0 !== CW ? CW : null, oW = null !== (zR = null === gR || void 0 === gR ? void 0 : gR.power) && void 0 !== zR ? zR : null, lW = null !== (AW = null === gR || void 0 === gR ? void 0 : gR.powerCap) && void 0 !== AW ? AW : 4e3;
      return (0, gA.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, gA.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, gA.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: TW(GC(Pb))
          }), PW && (0, gA.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [TW("buildAFactory2Game:benchMakes"), (0, gA.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, gA.jsx)(oC.c, {
                itemName: PW.output,
                amount: 0
              })
            }), (null === gR || void 0 === gR ? void 0 : gR.taughtName) && (0, gA.jsx)(lC.c, {
              text: gR.taughtName
            }), PW.outputAmount > 1 && (0, gA.jsxs)("span", {
              children: ["\xd7", PW.outputAmount]
            })]
          }), !PW && (0, gA.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: TW("buildAFactory2Game:benchTeachHint")
          }), (0, gA.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, gA.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (bR = JW.inputSlots) && void 0 !== bR ? bR : []).map(((WW, RW) => {
                const MW = null === PW || void 0 === PW ? void 0 : PW.inputs[RW];
                return (0, gA.jsxs)("div", {
                  className: gz()("Baf2BenchInput", {
                    Spare: !MW
                  }),
                  children: [(0, gA.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [tR(WW), MW && (0, gA.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, gA.jsx)(oC.c, {
                        itemName: MW.item,
                        amount: 0
                      })
                    })]
                  }), (0, gA.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: MW ? `\xd7${MW.amount}` : "\xa0"
                  })]
                }, WW)
              }))
            }), (0, gA.jsx)(ty, {
              running: "running" === IW,
              opMs: JW.opMs,
              opLeftMs: null !== (yR = null === gR || void 0 === gR ? void 0 : gR.opLeftMs) && void 0 !== yR ? yR : null,
              updateCount: BW.updateCount
            }), (0, gA.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, gA.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: TW("buildAFactory2Game:machineOutput")
              }), (0, gA.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: JW.outputSlots.map((WW => (0, gA.jsx)("div", {
                  children: tR(WW)
                }, WW)))
              })]
            })]
          }), null !== oW && (0, gA.jsx)(PA, {
            stored: oW,
            cap: lW,
            rates: null !== (NW = null === gR || void 0 === gR ? void 0 : gR.powerRates) && void 0 !== NW ? NW : null
          }), null !== IW && (0, gA.jsx)("div", {
            className: gz()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== IW
            }),
            children: TW(Ab(Pb, IW, gR, !1))
          }), PW && PW.inputs.length > 1 && (0, gA.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: TW("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, gA.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, gA.jsx)(Lz, {
            taught: YW,
            tier: iR
          }), PW && (0, gA.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: TW("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function ob(WW) {
      var RW;
      const MW = null !== (RW = rM[Pb].inputSlots) && void 0 !== RW ? RW : [];
      return {
        render: RW => {
          let {
            bV: MW,
            renderSlot: wW
          } = RW;
          return (0, gA.jsx)(Ib, {
            bV: MW,
            store: WW,
            renderSlot: wW
          })
        },
        quickMoveRange: [Math.min(...MW), Math.max(...MW) + 1],
        className: Nb(Pb)
      }
    }
    var lb = MW(116),
      Fb = MW(969),
      fb = MW(3357);
    const Qb = 600,
      ry = .5,
      cy = 4,
      Xb = 1200,
      jy = 140,
      ky = 100,
      ay = 32,
      sb = 16,
      db = 100.5,
      pb = 90,
      hb = 1.5,
      Ub = 50;

    function Eb(WW) {
      switch (FM(WW)) {
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
    const Vb = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function my(WW) {
      const RW = Math.ceil(60 * WW / ky);
      return {
        fuel: Math.max(ay, RW),
        waste: Math.max(sb, RW)
      }
    }

    function xy(WW, RW, MW) {
      const [wW, CW, zR] = [WW - 2, RW - 2, MW - 2];
      return 2 * (wW * CW + CW * zR + zR * wW) * jy
    }

    function vy(WW, RW, MW) {
      return Math.max(0, WW - 2) * Math.max(0, RW - 2) * Math.max(0, MW - 2)
    }

    function Kb(WW, RW) {
      const [MW, wW, CW] = WW, zR = MW * wW * CW, AW = new Float32Array(zR);
      let bR = 0,
        yR = 0,
        NW = 0,
        eW = 0,
        BW = 0;
      const tR = (WW, zR, AW) => WW < 0 || WW >= MW || zR < 0 || zR >= wW || AW < 0 || AW >= CW ? 0 : RW[(zR * CW + AW) * MW + WW];
      for (let YW = 0; YW < wW; YW++)
        for (let WW = 0; WW < CW; WW++)
          for (let wW = 0; wW < MW; wW++) {
            const zR = (YW * CW + WW) * MW + wW,
              TW = RW[zR];
            if (1 === TW) {
              bR++;
              let RW = 0;
              for (const [MW, CW, zR] of Vb) {
                const AW = tR(wW + MW, YW + CW, WW + zR);
                1 !== AW && 2 !== AW || RW++
              }
              AW[zR] = Qb * (1 + ry * Math.min(RW, cy)), eW += AW[zR]
            } else if (2 === TW) yR++;
            else if (3 === TW) {
              NW++;
              Vb.some((RW => {
                let [MW, CW, zR] = RW;
                return 1 === tR(wW + MW, YW + CW, WW + zR)
              })) && (BW += Xb)
            }
          }
      const TW = xy(MW + 2, wW + 2, CW + 2),
        gR = Math.min(eW, BW, TW),
        iR = bR > 0 ? eW * ky / bR : 0;
      return {
        rods: bR,
        graphite: yR,
        channels: NW,
        fuelHeat: eW,
        cooling: BW,
        size: TW,
        max: gR,
        vol: zR,
        powerPerUnit: iR,
        pelletsPerMin: iR > 0 ? gR / iR * 60 : 0,
        waterPerS: gR * ZW.r,
        rodHeat: AW
      }
    }
    const ub = 0,
      Ob = 1,
      nb = 6,
      Gb = 7,
      Lb = 8;

    function Hb(WW, RW) {
      const [MW, wW, CW] = WW, zR = new Uint8Array(MW * wW * CW), AW = (WW, zR, AW) => WW < 0 || WW >= MW || zR < 0 || zR >= wW || AW < 0 || AW >= CW ? 0 : RW[(zR * CW + AW) * MW + WW];
      for (let bR = 0; bR < wW; bR++)
        for (let WW = 0; WW < CW; WW++)
          for (let wW = 0; wW < MW; wW++) {
            const yR = (bR * CW + WW) * MW + wW,
              NW = RW[yR];
            if (1 === NW) {
              let RW = 0;
              for (const [MW, CW, zR] of Vb) {
                const yR = AW(wW + MW, bR + CW, WW + zR);
                RW += 1 === yR || 2 === yR ? 1 : 0
              }
              zR[yR] = Ob + Math.min(RW, cy)
            } else if (3 === NW) {
              const RW = Vb.some((RW => {
                let [MW, CW, zR] = RW;
                return 1 === AW(wW + MW, bR + CW, WW + zR)
              }));
              zR[yR] = RW ? nb : Gb
            } else 2 === NW && (zR[yR] = Lb)
          }
      return zR
    }

    function Db(WW) {
      return WW.fuelHeat <= WW.cooling && WW.fuelHeat <= WW.size ? "fuel" : WW.cooling <= WW.size ? "cooling" : "size"
    }
    const qy = pb;

    function Zb(WW, RW, MW) {
      return Math.round(WW * RW * MW * 25e3 * (1 + .25 * (Math.min(WW, RW, MW) - 2)))
    }

    function Sb(WW) {
      return Math.max(0, Math.min(ZW.g, WW))
    }

    function Wy(WW, RW, MW) {
      const wW = RW * Sb(MW);
      return WW <= 0 ? 0 : wW > 0 ? Math.min(200, 100 * WW / wW) : 200
    }

    function Ry(WW, RW) {
      const MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? hb : 1;
      return Math.min(WW.fuelHeat * MW, WW.cooling * Sb(RW), WW.size * MW)
    }

    function My(WW) {
      return 2 + WW / 10
    }
    const wy = "buildAFactory2Game:";

    function Cy(WW) {
      var RW;
      return null !== (RW = WW.baf2RxMood) && void 0 !== RW ? RW : function(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const MW = [
          ["calm", 50],
          ["warm", qy],
          ["hot", db]
        ];
        for (const [wW, CW] of MW)
          if (WW < CW + (wW === RW ? 3 : 0)) return wW;
        return "alarm"
      }(WW.baf2RxHeat)
    }
    const zN = 120;

    function Ay(WW) {
      const RW = WW.baf2RxState;
      if ("running" === RW && WW.baf2RxHeat > db) return {
        label: `${wy}rxState_tooHot`,
        tone: "bad",
        fix: `${wy}rxFix_tooHot`
      };
      switch (RW) {
        case "running":
          return {
            label: `${wy}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${wy}rxState_idle`, tone: "off", fix: `${wy}rxFix_idle`
          };
        case "scram":
          return {
            label: `${wy}rxState_scram`, tone: "off", fix: WW.baf2RxHeat < Ub ? `${wy}rxFix_scramCool` : `${wy}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${wy}rxState_${RW}`, tone: "off", fix: `${wy}rxFix_${RW}`
          };
        case "melted":
          return {
            label: `${wy}rxState_melted`, tone: "bad", fix: `${wy}rxFix_melted`
          };
        default:
          return {
            label: `${wy}rxState_${RW}`, tone: "warn", fix: `${wy}rxFix_${RW}`
          }
      }
    }

    function bN(WW) {
      const [RW, MW, wW] = WW.baf2RxStats;
      return {
        fuelHeat: RW,
        cooling: MW * (WW.baf2RxCryo ? Math.max(1, Sb(WW.baf2RxWater / 100)) : 1),
        size: wW
      }
    }

    function yN(WW) {
      var RW;
      const MW = "idle" === WW.baf2RxState || "running" === WW.baf2RxState && WW.baf2RxHeat <= db || "scram" === WW.baf2RxState && WW.baf2RxHeat < Ub;
      if (0 === (WW.baf2RxFlags & TR) || !WW.baf2RxFormed || !MW) return null;
      const {
        fuelHeat: wW,
        cooling: CW,
        size: zR
      } = bN(WW), AW = Math.min(wW, CW, zR), bR = Db({
        fuelHeat: wW,
        cooling: CW,
        size: zR
      }), yR = "cooling" === bR && !0 === WW.baf2RxCryoOpen && !WW.baf2RxCryo, NW = null !== (RW = WW.baf2RxCells) && void 0 !== RW ? RW : "", eW = ("fuel" === bR || "cooling" === bR && !0 === WW.baf2RxCryo) && NW.length > 0 && !NW.includes(String(0)), BW = yR ? "Cryo" : "scram" === WW.baf2RxState ? "Off" : "";
      return AW < 12e3 ? {
        key: `${wy}rxGrow_${eW?"full":bR}${BW}`,
        amount: AW
      } : null
    }

    function Ny(WW, RW) {
      return WW[0] === RW[0] && WW[1] === RW[1] && WW[2] === RW[2]
    }

    function ey(WW) {
      return [...WW].sort(((WW, RW) => Number(RW[2] < RW[1]) - Number(WW[2] < WW[1])))
    }

    function By(WW, RW) {
      return RW.some((RW => {
        let [MW, wW] = RW;
        return !(wW <= 0) && ["edge", "cap", "wall", "inside"].some((RW => MW === qw(WW, RW)))
      }))
    }

    function tN(WW, RW, MW) {
      const wW = WW.baf2RxFuel - WW.baf2RxPu > 0 ? MW : 0;
      return {
        full: WW.baf2RxWaste > RW - 3,
        fullInS: wW > 0 ? Math.max(0, RW - WW.baf2RxWaste) / wW : null
      }
    }
    const Ty = {
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

    function gN(WW) {
      return iN[WW]
    }
    const iN = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function Yy(WW) {
      let [RW, MW, wW] = WW;
      return Math.ceil(xy(RW, MW, wW) * ZW.r)
    }

    function Jy(WW, RW) {
      return "battery" === WW ? RW[0] * RW[1] * RW[2] : function(WW) {
        let [RW, MW, wW] = WW;
        return RW * MW * wW - Math.max(0, RW - 2) * Math.max(0, MW - 2) * Math.max(0, wW - 2)
      }(RW) - 1
    }

    function Py(WW) {
      const RW = Math.max(0, WW);
      if (RW < 10) return String(Math.round(10 * RW) / 10);
      if (RW < 1e4) return Math.round(RW).toLocaleString("en-US");
      if (RW < 1e6) return `${RW<1e5?(Math.floor(RW/100)/10).toFixed(1):Math.floor(RW/1e3)}k`;
      const MW = RW / 1e6;
      return `${MW<10?(Math.floor(100*MW)/100).toFixed(2):MW<100?(Math.floor(10*MW)/10).toFixed(1):Math.floor(MW)}M`
    }

    function Iy(WW) {
      return WW <= 0 ? "0" : WW >= 10 ? String(Math.round(WW)) : WW.toFixed(WW >= 1 ? 1 : 2)
    }

    function oy(WW) {
      const RW = uM(WW, 0),
        MW = uM(WW, mw(WW) - 1);
      return {
        lo: [Math.min(RW[0], MW[0]), Math.min(RW[1], MW[1]), Math.min(RW[2], MW[2])],
        hi: [Math.max(RW[0], MW[0]) + 1, Math.max(RW[1], MW[1]) + 1, Math.max(RW[2], MW[2]) + 1]
      }
    }

    function ly(WW, RW, MW) {
      const wW = [RW[0] - WW[0], RW[1] - WW[1], RW[2] - WW[2]],
        CW = [(WW[0] + RW[0]) / 2, (WW[1] + RW[1]) / 2, (WW[2] + RW[2]) / 2],
        zR = [];
      for (let AW = 0; AW < 3; AW++) {
        const bR = (AW + 1) % 3,
          yR = (AW + 2) % 3;
        for (const NW of [WW[bR], RW[bR]])
          for (const eW of [WW[yR], RW[yR]]) {
            const WW = [0, 0, 0],
              RW = [MW, MW, MW];
            WW[AW] = CW[AW], RW[AW] = wW[AW] + MW, WW[bR] = NW, WW[yR] = eW, zR.push([WW, RW])
          }
      }
      return zR
    }
    const Fy = "buildAFactory2Game:",
      fy = [`${Fy}colNorth`, `${Fy}colEast`, `${Fy}colSouth`, `${Fy}colWest`];

    function Qy(WW, RW) {
      const [MW, wW, CW] = WW.baf2ColAt;
      return `baf2col ${MW} ${wW} ${CW} ${RW}`
    }

    function rN(WW) {
      return function(WW) {
        if (!Number.isFinite(WW)) return "";
        const RW = Math.max(1, Math.round(WW));
        if (RW < 60) return `${RW}s`;
        const MW = RW % 60;
        return 0 === MW ? RW / 60 + "m" : `${Math.floor(RW/60)}m ${MW}s`
      }(function(WW) {
        const RW = ZM.FOCUS_BY_LASERS[Math.max(0, Math.min(4, WW))];
        return RW > 0 ? ZM.NOVA_FOCUS / RW : 1 / 0
      }(WW))
    }

    function cN(WW) {
      const RW = Math.abs(Math.round(WW));
      return RW < 1e3 ? Math.round(WW).toLocaleString("en-US") : RW < 1e6 ? `${RW<1e5?(WW/1e3).toFixed(1).replace(/\.0$/,""):Math.round(WW/1e3)}k` : `${(WW/1e6).toFixed(RW<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function Xy(WW, RW, MW) {
      if (Cw(RW) >= 0) {
        const RW = function(WW, RW) {
          return WW.find((WW => {
            let {
              focus: MW
            } = WW;
            return MW[0] === RW[0] && MW[2] === RW[2] && (RW[1] === MW[1] || RW[1] === MW[1] - 1)
          }))
        }(WW, MW);
        if (!RW) return null;
        const CW = function(WW) {
          let RW = 0,
            MW = 0;
          for (let wW = 0; wW < 4; wW++) RW += WW.laser[wW] ? 1 : 0, MW += WW.live[wW] ? 1 : 0;
          return {
            lasers: RW,
            live: MW,
            focusPerS: ZM.FOCUS_BY_LASERS[MW],
            drawPerS: ZM.LASER_DRAW * MW
          }
        }({
          laser: RW.lasers,
          live: RW.live
        });
        if (0 === CW.lasers || "noLasers" === RW.state) return {
          key: `${Fy}lookColNoLasers`
        };
        if (0 === CW.live) return {
          key: `${Fy}lookColOff_blocked`
        };
        if (!(RW.on && CW.live > 0) && ("running" !== (wW = RW.state) && "slowed" !== wW)) return {
          key: `${Fy}lookColOff_${RW.state}`
        };
        if (CW.live < CW.lasers) return {
          key: `${Fy}lookColLasersSome`,
          params: {
            lasers: String(CW.lasers),
            live: String(CW.live)
          }
        };
        const zR = RW.open.filter(Boolean).length;
        return zR < 4 ? {
          key: `${Fy}lookColLasersSpots`,
          params: {
            live: String(CW.live),
            spots: String(zR),
            time: rN(CW.live)
          }
        } : {
          key: `${Fy}lookColLasers`,
          params: {
            live: String(CW.live),
            time: rN(CW.live)
          }
        }
      }
      var wW;
      if (!zC(RW)) return null;
      const CW = function(WW, RW) {
        for (const MW of WW) {
          const WW = Nw(MW.focus, [RW[0], RW[1], RW[2]]);
          if (WW && WW.WW === ZM.LASER_D && MW.lasers[WW.dir]) return {
            entry: MW,
            dir: WW.dir
          }
        }
        return null
      }(WW, MW);
      if (!CW) return {
        key: `${Fy}lookLaserNoCollider`
      };
      const {
        entry: zR,
        dir: AW
      } = CW;
      return zR.open[AW] ? zR.live[AW] ? {
        key: zR.on ? `${Fy}lookLaserFiring` : `${Fy}lookLaserReady`
      } : {
        key: `${Fy}lookLaserBlocked`
      } : {
        key: `${Fy}lookLaserClosed`
      }
    }

    function jN(WW, RW) {
      const MW = [];
      for (let wW = 1; wW < ZM.LASER_D; wW++) WW & 1 << RW * (ZM.LASER_D - 1) + wW - 1 && MW.push(wW);
      return MW
    }
    const kN = {
      firing: `${Fy}colSlotFiring`,
      ready: `${Fy}colSlotReady`,
      blocked: `${Fy}colSlotBlocked`,
      empty: `${Fy}colSlotEmpty`,
      closed: `${Fy}colSlotClosed`
    };

    function aN(WW, RW, MW, wW) {
      let CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const zR = qC(WW),
        AW = qC(RW),
        bR = qC(MW),
        yR = bR.filter(Boolean).length,
        NW = zR.filter(Boolean).length,
        eW = [0, 1, 2, 3].map((WW => AW[WW] ? zR[WW] ? bR[WW] ? wW ? "firing" : "ready" : "blocked" : (WW => jN(CW, WW).length > 0)(WW) ? "blocked" : "empty" : "closed")),
        BW = eW.indexOf("blocked"),
        tR = BW < 0 && NW > 0 ? eW.indexOf("empty") : -1;
      return eW.map(((WW, RW) => {
        const MW = RW === BW ? {
          key: `${Fy}colSlotClear`
        } : RW === tR ? {
          key: `${Fy}colSlotAdd`,
          params: {
            time: rN(Math.min(4, yR + 1))
          }
        } : null;
        return {
          dir: RW,
          tone: WW,
          title: {
            key: "blocked" !== WW || zR[RW] ? kN[WW] : `${Fy}colSlotGap`,
            keys: {
              dir: fy[RW]
            }
          },
          hint: MW
        }
      }))
    }

    function sy(WW) {
      var RW;
      return "noPower" === WW.baf2ColState && WW.baf2ColRxState ? Ay({
        baf2RxState: WW.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (RW = WW.baf2ColRxHeat) && void 0 !== RW ? RW : 0
      }) : null
    }

    function dy(WW) {
      const RW = qC(WW.baf2ColSpots).filter(Boolean).length,
        MW = qC(WW.baf2ColLive);
      let wW = 0,
        CW = 0;
      return qC(WW.baf2ColLasers).forEach(((WW, RW) => {
        WW && (wW++, CW += MW[RW] ? 0 : 1)
      })), CW > 0 ? {
        key: `${Fy}colSubSome`,
        params: {
          blocked: String(CW),
          lasers: String(wW)
        }
      } : RW < 4 ? {
        key: `${Fy}colSubSpots`,
        params: {
          lasers: String(wW),
          spots: String(RW)
        }
      } : {
        key: `${Fy}colSub`,
        params: {
          lasers: String(wW)
        }
      }
    }

    function py(WW) {
      const RW = sy(WW);
      if ("idle" === WW.baf2ColRxState && RW) return {
        key: `${Fy}colState_noPowerIdle`
      };
      if (RW) return {
        key: `${Fy}colState_noPowerReactor`,
        keys: {
          state: RW.label
        }
      };
      if ("noInput" !== WW.baf2ColState) return {
        key: `${Fy}colState_${WW.baf2ColState}`
      };
      const MW = String(Math.max(0, ZM.NOVA_SA - WW.baf2ColSa)),
        wW = String(Math.max(0, ZM.NOVA_GD - WW.baf2ColGd));
      return "0" !== MW && "0" !== wW ? {
        key: `${Fy}colState_noInput`,
        params: {
          sa: MW,
          gd: wW
        }
      } : "0" !== MW ? {
        key: `${Fy}colState_noStarAlloy`,
        params: {
          sa: MW
        }
      } : "0" !== wW ? {
        key: `${Fy}colState_noGlowDust`,
        params: {
          gd: wW
        }
      } : {
        key: `${Fy}colState_running`
      }
    }

    function hy(WW) {
      return WW.baf2ColP < 0 ? `${Fy}colNext` : function(WW) {
        const RW = WW.baf2ColState;
        return WW.baf2ColP >= 0 && ("blocked" === RW || "noLasers" === RW || "noPower" === RW)
      }(WW) ? `${Fy}colStalled` : null === Uy(WW) ? `${Fy}colMaking` : `${Fy}colNovaIn`
    }

    function Uy(WW) {
      if (WW.baf2ColP < 0 || WW.baf2ColWant <= 0) return null;
      const RW = WW.baf2ColFocusPerS * Math.min(1, WW.baf2ColDraw / WW.baf2ColWant);
      return RW > 0 ? Math.max(0, ZM.NOVA_FOCUS - WW.baf2ColP) / RW : null
    }

    function Ey(WW, RW) {
      const MW = [];
      for (let wW = 1; wW <= 3; wW++) {
        const CW = [WW[0], WW[1] - wW, WW[2]];
        if (!RW(CW)) return MW;
        MW.push(CW)
      }
      return []
    }

    function Vy(WW, RW) {
      const MW = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let wW = 0; wW < 4; wW++) {
        const CW = wW,
          zR = yC(WW.focus, CW, ZM.LASER_D);
        if (WW.lasers[wW] || !WW.open[wW] || !RW(zR)) continue;
        const AW = [];
        for (let MW = 1; MW < ZM.LASER_D; MW++) {
          const wW = yC(WW.focus, CW, MW);
          RW(wW) || AW.push(wW)
        }
        MW.supports.push(...Ey(zR, RW)), 0 === AW.length ? MW.free.push(zR) : (MW.blocked.push(zR), MW.gaps.push(...AW))
      }
      return MW
    }
    const mN = ZM.LASER_D - .25,
      xN = 4,
      vN = 2,
      Ky = 16;
    const uy = {
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
        blendMode: fb.f.Standard,
        soft: !0
      },
      Oy = {
        green: uy,
        pink: {
          ...uy,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function ny(WW, RW) {
      const MW = {
        ...RW.params
      };
      for (const [CW, zR] of Object.entries(null !== (wW = RW.keys) && void 0 !== wW ? wW : {})) {
        var wW;
        MW[CW] = WW(zR)
      }
      return MW
    }
    const Gy = "buildAFactory2Game:",
      Ly = 2 * ZM.LASER_D + 1,
      Hy = ZM.LASER_D;

    function Dy(WW) {
      return WW(`${Gy}colFocusTip`, {
        need: cN(ZM.NOVA_FOCUS)
      })
    }

    function qN(WW, RW) {
      return WW(RW.key, ny(WW, RW))
    }

    function Zy(WW) {
      const RW = WW.getStatus();
      return {
        status: RW,
        entry: RW ? WW.entryAtRoot(RW.baf2ColAt) : void 0
      }
    }

    function Sy(WW, RW) {
      return {
        left: 100 * (Hy + WW) / Ly + "%",
        top: 100 * (Hy + RW) / Ly + "%"
      }
    }

    function WN(WW) {
      let {
        status: RW,
        entry: MW
      } = WW;
      const wW = qC(RW.baf2ColLasers),
        CW = qC(RW.baf2ColSpots),
        zR = qC(RW.baf2ColLive),
        AW = !0 === (null === MW || void 0 === MW ? void 0 : MW.on),
        bR = ZM.LASER_D,
        yR = [];
      for (let TW = 0; TW < 4; TW++) {
        const [WW, , RW] = bC[TW];
        if (zR[TW]) {
          const MW = 100 * (bR - 1) / Ly,
            wW = WW + RW > 0 ? 100 * (Hy + 1) / Ly : 100 * (Hy - (bR - 1)) / Ly,
            CW = 100 * (Hy + .35) / Ly,
            zR = 30 / Ly,
            NW = 0 !== WW ? {
              left: `${wW}%`,
              width: `${MW}%`,
              top: `${CW}%`,
              height: `${zR}%`
            } : {
              top: `${wW}%`,
              height: `${MW}%`,
              left: `${CW}%`,
              width: `${zR}%`
            };
          yR.push((0, gA.jsx)("i", {
            className: gz()("Baf2ColDiagramBeam", {
              Off: !AW
            }),
            style: NW
          }, `beam${TW}`))
        }
        const MW = wW[TW] ? "Baf2ColDiagramLaser" : CW[TW] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        yR.push((0, gA.jsx)("i", {
          className: MW,
          style: Sy(WW * bR, RW * bR)
        }, `spot${TW}`))
      }
      for (let TW = 0; TW < 4; TW++) {
        if (wW[TW] || !CW[TW]) continue;
        const [WW, , MW] = bC[TW];
        for (const wW of jN(null !== (NW = RW.baf2ColGaps) && void 0 !== NW ? NW : 0, TW)) {
          var NW;
          yR.push((0, gA.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: Sy(WW * wW, MW * wW)
          }, `gap${TW},${wW}`))
        }
      }
      for (const [TW, , gR] of null !== (eW = null === MW || void 0 === MW ? void 0 : MW.blockers) && void 0 !== eW ? eW : []) {
        var eW, BW, tR;
        const WW = TW - (null !== (BW = null === MW || void 0 === MW ? void 0 : MW.focus[0]) && void 0 !== BW ? BW : 0),
          RW = gR - (null !== (tR = null === MW || void 0 === MW ? void 0 : MW.focus[2]) && void 0 !== tR ? tR : 0);
        yR.push((0, gA.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: Sy(WW, RW)
        }, `block${WW},${RW}`))
      }
      return (0, gA.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [yR, (0, gA.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function RN(WW) {
      let {
        status: RW
      } = WW;
      const {
        t: MW
      } = (0, PC.C)(), wW = qC(RW.baf2ColLive).filter(Boolean).length;
      return (0, gA.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, gA.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: Dy(MW),
          children: MW(`${Gy}colLadder`)
        }), (0, gA.jsx)("ul", {
          children: [1, 2, 3, 4].map((WW => (0, gA.jsx)("li", {
            className: gz()({
              On: WW === wW
            }),
            children: MW(`${Gy}colLadderChip`, {
              lasers: String(WW),
              time: rN(WW)
            })
          }, WW)))
        })]
      })
    }

    function MN(WW) {
      let {
        item: RW,
        mM: MW,
        need: wW,
        cap: CW
      } = WW;
      const {
        t: zR
      } = (0, PC.C)(), AW = Math.min(MW, wW);
      return (0, gA.jsxs)("li", {
        className: gz()("Baf2ColTile", {
          Short: MW < wW
        }),
        children: [(0, gA.jsx)(wN, {
          item: RW
        }), (0, gA.jsx)("b", {
          className: "Baf2ColTileValue",
          children: zR(`${Gy}colOutOf`, {
            amount: String(AW),
            cap: String(wW)
          })
        }), (0, gA.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, gA.jsx)("i", {
            style: {
              width: 100 * AW / wW + "%"
            }
          })
        }), MW > wW && (0, gA.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: zR(`${Gy}colIntakeHeld`, {
            amount: String(MW),
            cap: String(CW)
          })
        })]
      })
    }

    function wN(WW) {
      let {
        item: RW
      } = WW;
      const {
        t: MW
      } = (0, PC.C)();
      return (0, gA.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, gA.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, gA.jsx)(oC.c, {
            itemName: RW,
            amount: 0
          })
        }), (0, gA.jsx)("span", {
          className: "Baf2ColTileName",
          children: LC(MW, RW)
        })]
      })
    }

    function CN(WW) {
      switch (WW.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function ze(WW) {
      var RW, MW, CW;
      let {
        store: zR,
        close: AW
      } = WW;
      const {
        t: bR
      } = (0, PC.C)(), yR = kb(), {
        status: NW,
        entry: eW
      } = function(WW) {
        const [RW, MW] = (0, wW.useState)((() => Zy(WW)));
        return (0, wW.useEffect)((() => (MW(Zy(WW)), WW.subscribe((() => {
          MW(Zy(WW))
        })))), [WW]), RW
      }(zR), [BW, tR] = (0, wW.useState)(null), TW = null === NW || void 0 === NW ? void 0 : NW.baf2ColHold;
      (0, wW.useEffect)((() => {
        tR(null)
      }), [TW]);
      const gR = (0, wW.useRef)({
          p: -1,
          n: 0
        }),
        iR = null !== (RW = null === NW || void 0 === NW ? void 0 : NW.baf2ColP) && void 0 !== RW ? RW : -1;
      iR < gR.current.p && gR.current.n++, gR.current.p = iR;
      const YW = (0, wW.useRef)(null),
        [JW] = (0, wW.useState)((() => {
          return (WW = zR.heldAtOpen()) === Rw || WW === Mw ? {
            key: `${Fy}colBeltItIn`,
            item: WW
          } : null;
          var WW
        }));
      if (!NW) return null;
      const PW = NW.baf2ColMember,
        IW = NW.baf2ColP >= 0,
        oW = function(WW, RW) {
          if (WW.baf2ColP >= 0 && WW.baf2ColDraw > 0) {
            const RW = WW.baf2ColWant > 0 ? Math.min(1, WW.baf2ColDraw / WW.baf2ColWant) : 0;
            return {
              focus: WW.baf2ColFocusPerS * RW,
              draw: WW.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === WW.baf2ColState && RW && RW.draw > 0 ? {
            ...RW,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(NW, YW.current);
      YW.current = oW.draw > 0 ? oW : null;
      const lW = "slowed" === NW.baf2ColState || "noPower" === NW.baf2ColState,
        FW = Uy(NW),
        fW = null !== BW && void 0 !== BW ? BW : NW.baf2ColHold,
        QW = function(WW) {
          var RW, MW;
          return "idle" === WW.baf2ColRxState ? null : null !== (RW = null === (MW = sy(WW)) || void 0 === MW ? void 0 : MW.fix) && void 0 !== RW ? RW : null
        }(NW),
        rR = null === QW && null === JW ? function(WW) {
          var RW;
          const MW = WW.baf2ColSentTo;
          if (!MW) return null;
          const wW = null !== (RW = WW.baf2ColSentHeld) && void 0 !== RW ? RW : null;
          return {
            key: null === wW ? `${Fy}colNovaSentToMachine` : `${Fy}colNovaSentTo`,
            target: MW,
            mM: wW
          }
        }(NW) : null,
        cR = IW ? bR(`${Gy}colFocusOf`, {
          focus: cN(NW.baf2ColP),
          need: cN(ZM.NOVA_FOCUS)
        }) : null;
      return (0, gA.jsx)(eA.b, {
        close: AW,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, gA.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, gA.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, gA.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, gA.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, gA.jsx)(oC.c, {
                  itemName: SM,
                  amount: 0
                })
              }), (0, gA.jsxs)("div", {
                children: [(0, gA.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: LC(bR, SM)
                }), (0, gA.jsx)("p", {
                  children: qN(bR, dy(NW))
                })]
              })]
            }), (0, gA.jsx)(BA.l, {
              onClick: AW
            })]
          }), (0, gA.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, gA.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, gA.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, gA.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: bR(hy(NW), {
                    time: null === FW ? "" : ez(bR, FW)
                  })
                }), (0, gA.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, gA.jsx)("i", {
                    style: {
                      width: (IW ? 100 * NW.baf2ColP / ZM.NOVA_FOCUS : 0) + "%"
                    }
                  }, gR.current.n)
                }), (0, gA.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, gA.jsxs)("span", {
                    title: Dy(bR),
                    children: [(0, gA.jsx)("b", {
                      children: cN(oW.focus)
                    }), " ", bR(`${Gy}colFocusPerS`)]
                  }), (0, gA.jsxs)("span", {
                    className: gz()("Baf2ColDraw", {
                      Short: lW
                    }),
                    children: [(0, gA.jsx)(IC.e, {
                      name: "bolt"
                    }), lW ? bR(`${Gy}colDrawOf`, {
                      draw: cN(NW.baf2ColDraw),
                      want: cN(NW.baf2ColWant)
                    }) : bR(`${Gy}colPowerPerS`, {
                      rate: cN(oW.draw)
                    })]
                  }), null !== cR && (0, gA.jsx)("span", {
                    className: "Soft",
                    children: cR
                  })]
                })]
              }), (0, gA.jsx)("p", {
                className: gz()("Baf2ColState", CN(NW)),
                children: qN(bR, py(NW))
              }), null !== QW && (0, gA.jsx)("p", {
                className: "Baf2ColStateFix",
                children: bR(QW)
              }), null === QW && null !== JW && (0, gA.jsx)("p", {
                className: "Baf2ColStateFix",
                children: bR(JW.key, {
                  item: LC(bR, JW.item)
                })
              }), rR && (0, gA.jsx)("p", {
                className: "Baf2ColStateFix",
                children: bR(rR.key, {
                  target: LC(bR, rR.target),
                  amount: String(null !== (MW = rR.mM) && void 0 !== MW ? MW : 0)
                })
              }), (0, gA.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, gA.jsx)(MN, {
                  item: Rw,
                  mM: NW.baf2ColSa,
                  need: ZM.NOVA_SA,
                  cap: ZM.SA_CAP
                }), (0, gA.jsx)(MN, {
                  item: Mw,
                  mM: NW.baf2ColGd,
                  need: ZM.NOVA_GD,
                  cap: ZM.GD_CAP
                }), (0, gA.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, gA.jsx)(wN, {
                    item: "Nova Matter"
                  }), (0, gA.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: bR(`${Gy}colNovaHeld`, {
                      amount: String(NW.baf2ColOut),
                      cap: String(ZM.OUT_CAP)
                    })
                  }), PW && (0, gA.jsx)(BA.m, {
                    className: "Baf2ColTake",
                    disabled: 0 === NW.baf2ColOut,
                    onClick: () => {
                      yR.send(Qy(NW, "take"))
                    },
                    children: bR(`${Gy}colTake`)
                  })]
                })]
              }), PW && (0, gA.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": fW,
                className: gz()("Baf2ColHold", {
                  On: fW
                }),
                onClick: WW => {
                  WW.detail > 0 && WW.currentTarget.blur(), tR(!fW), yR.send(Qy(NW, "hold " + (fW ? 0 : 1)))
                },
                children: [(0, gA.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, gA.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, gA.jsx)("b", {
                    children: bR(`${Gy}colHold`)
                  }), (0, gA.jsx)("span", {
                    children: bR(`${Gy}colHoldNote`)
                  })]
                })]
              })]
            }), (0, gA.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, gA.jsx)(WN, {
                status: NW,
                entry: eW
              }), (0, gA.jsx)("ul", {
                className: "Baf2ColSlots",
                children: aN(NW.baf2ColLasers, NW.baf2ColSpots, NW.baf2ColLive, oW.beamsOn, null !== (CW = NW.baf2ColGaps) && void 0 !== CW ? CW : 0).map((WW => (0, gA.jsxs)("li", {
                  className: WW.tone,
                  children: [(0, gA.jsx)("b", {
                    children: qN(bR, WW.title)
                  }), null !== WW.hint && (0, gA.jsx)("span", {
                    children: qN(bR, WW.hint)
                  })]
                }, WW.dir)))
              }), (0, gA.jsx)(RN, {
                status: NW
              })]
            })]
          })]
        })
      })
    }
    const AN = "buildAFactory2Game:",
      be = 36e5,
      ye = 864e5;

    function NN(WW, RW, MW) {
      return Math.max(0, Math.ceil((WW + RW - Math.max(MW, WW)) / 1e3))
    }

    function eN(WW) {
      return WW.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function BN(WW) {
      return "Homestead" === WW
    }

    function te(WW) {
      return function(WW) {
        let RW = 0;
        for (const MW of WW) {
          const WW = /^Island ([1-9]\d{0,5})$/.exec(MW);
          WW && (RW = Math.max(RW, Number(WW[1])))
        }
        return `Island ${RW+1}`
      }(WW.map((WW => WW.baf2IslandName)))
    }

    function TN(WW, RW) {
      return function(WW) {
        return `${AN}islandsBlocked${WW[0].toUpperCase()}${WW.slice(1)}`
      }("degraded" === WW && 0 === RW ? "stuck" : WW)
    }

    function ge(WW) {
      return WW.filter((WW => {
        var RW;
        return !WW.baf2IslandActive && void 0 === WW.baf2IslandUnreadable && void 0 === (null === (RW = WW.baf2IslandCoop) || void 0 === RW ? void 0 : RW.baf2CoopState)
      })).length
    }

    function ie(WW) {
      return "coopMoving" === WW || "coopUnreachable" === WW
    }

    function YN(WW, RW) {
      const MW = RW > 0;
      return {
        change: null === WW && !MW,
        switch: (null === WW || "degraded" === WW || ie(WW)) && !MW,
        rename: "loading" !== WW && "degraded" !== WW && "stuck" !== WW
      }
    }

    function JN(WW, RW) {
      return void 0 === WW || "corrupt" === WW && RW
    }
    const PN = FA;

    function IN(WW, RW, MW) {
      if (null !== WW && void 0 !== WW && WW.untilGone) {
        var wW;
        return !("dismiss" === WW.untilGone && void 0 === (null === (wW = RW.baf2IslandCoop) || void 0 === wW ? void 0 : wW.baf2CoopState)) && MW - WW.atMs < 32500
      }
      return void 0 !== WW && MW - WW.atMs < PN && RW.baf2IslandName === WW.from
    }
    const oN = FA;

    function lN(WW) {
      return "core" === (null === WW || void 0 === WW ? void 0 : WW.kind) ? WW.core : "islands" === (null === WW || void 0 === WW ? void 0 : WW.kind) ? WW.backToCore : void 0
    }

    function FN(WW) {
      return `\0${WW}\0`
    }

    function fN(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const wW = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const zR of Object.keys(MW)) wW[zR] = FN(zR);
      let CW = Object.keys(wW).length > 0 ? WW(RW, wW) : WW(RW);
      for (const [zR, AW] of Object.entries(MW)) CW = CW.split(FN(zR)).join(AW);
      return CW
    }

    function QN(WW, RW) {
      return WW ? RW ? "enabled" : "disabled" : "hidden"
    }
    const re = {
      removed: `${AN}islandsCoopRemoved`,
      deleted: `${AN}islandsCoopDeleted`,
      notReady: `${AN}islandsCoopNotReady`,
      gone: `${AN}islandsCoopGone`
    };

    function ce(WW) {
      var RW;
      return "member" !== (null === (RW = WW.baf2IslandCoop) || void 0 === RW ? void 0 : RW.baf2CoopRole) && "newer" !== WW.baf2IslandUnreadable
    }

    function XN(WW, RW, MW, wW, CW) {
      const zR = WW.baf2IslandActive,
        AW = WW.baf2IslandUnreadable,
        bR = WW.baf2IslandCoop,
        yR = function(WW, RW, MW) {
          return {
            switch: WW.switch && void 0 === RW,
            delete: WW.change && JN(RW, MW)
          }
        }(RW, AW, wW),
        NW = {
          switch: QN(!zR && void 0 === AW, yR.switch),
          rename: QN(!0, RW.rename),
          delete: QN(!zR, yR.delete),
          deleteWaits: !zR && JN(AW, wW),
          people: QN(void 0 !== WW.baf2IslandInvitable || CW && zR && void 0 === AW && void 0 === bR, !0),
          peopleLabel: "invite",
          Cw: "hidden",
          dismiss: "hidden",
          remove: !1,
          note: null
        },
        eW = !zR && yR.delete;
      if (void 0 === bR) return MW ? {
        ...NW,
        delete: QN(!zR, !1),
        deleteWaits: !1,
        note: eW ? {
          key: `${AN}islandsCoopKeepOwn`
        } : null
      } : NW;
      const BW = bR.baf2CoopState,
        tR = bR.baf2CoopMembers.length > 1,
        TW = {
          ...NW,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== BW && "member" === bR.baf2CoopRole) return {
        ...TW,
        dismiss: QN(!0, RW.rename),
        note: {
          key: re[BW],
          names: {
            owner: bR.baf2CoopOwner
          }
        }
      };
      if (void 0 !== BW) {
        let WW = {
          key: `${AN}islandsCoopOwnLost`
        };
        return eW && tR ? WW = {
          key: `${AN}islandsCoopDeleteMembers`
        } : eW && MW && (WW = {
          key: `${AN}islandsCoopKeepOwn`
        }), {
          ...TW,
          delete: QN(!zR, yR.delete && !tR && !MW),
          deleteWaits: NW.deleteWaits && !tR && !MW,
          note: WW
        }
      }
      if ("member" === bR.baf2CoopRole) return {
        ...NW,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        Cw: QN(!0, zR ? RW.switch : RW.rename)
      };
      const gR = bR.baf2CoopManageHere;
      let iR = null;
      var YW;
      gR ? eW && tR ? iR = {
        key: `${AN}islandsCoopDeleteMembers`
      } : eW && MW && (iR = {
        key: `${AN}islandsCoopKeepOwn`
      }) : iR = {
        key: null !== (YW = bR.baf2CoopLeft) && void 0 !== YW && YW.length ? `${AN}islandsCoopManageThereClaim` : `${AN}islandsCoopManageThere`
      };
      return {
        ...NW,
        rename: QN(!0, RW.rename && gR),
        delete: QN(!zR, yR.delete && !tR && !MW),
        deleteWaits: NW.deleteWaits && !tR && !MW,
        people: "enabled",
        peopleLabel: "players",
        remove: gR,
        note: iR
      }
    }

    function je(WW) {
      var RW;
      const MW = WW.baf2IslandCoop;
      if ("owner" !== (null === MW || void 0 === MW ? void 0 : MW.baf2CoopRole) || void 0 !== MW.baf2CoopState || null === (RW = MW.baf2CoopLeft) || void 0 === RW || !RW.length) return null;
      const wW = WW.baf2IslandActive && MW.baf2CoopManageHere;
      return {
        left: MW.baf2CoopLeft,
        claim: wW,
        goThere: !wW && MW.baf2CoopManageHere
      }
    }

    function ke(WW) {
      return WW.baf2CoopMembers.length >= WW.baf2CoopMax
    }

    function ae(WW, RW, MW) {
      return void 0 !== WW && RW < WW.answer && MW - WW.atMs < PN
    }
    const sN = "buildAFactory2Game:";

    function dN(WW, RW) {
      return {
        onKeyDown: MW => {
          MW.stopPropagation(), MW.nativeEvent.isComposing || 229 === MW.nativeEvent.keyCode || ("Enter" === MW.key ? (MW.preventDefault(), WW()) : "Escape" === MW.key && (MW.preventDefault(), RW()))
        }
      }
    }

    function pN(WW) {
      return {
        onKeyDown: RW => {
          "Escape" !== RW.key || RW.nativeEvent.isComposing || (RW.preventDefault(), RW.stopPropagation(), WW())
        }
      }
    }

    function hN(WW) {
      WW.currentTarget.select()
    }

    function UN(WW, RW) {
      (0, wW.useEffect)((() => {
        var MW;
        WW && (null === (MW = RW.current) || void 0 === MW || MW.scrollIntoView({
          block: "nearest"
        }))
      }), [WW, RW])
    }

    function EN(WW) {
      const [RW, MW] = (0, wW.useState)(null);
      return (0, wW.useEffect)((() => {
        const RW = document.querySelector(".UiRequests"),
          wW = WW.current;
        if (!RW || !wW || "undefined" === typeof ResizeObserver) return;
        const CW = () => {
          const WW = RW.getBoundingClientRect(),
            CW = wW.getBoundingClientRect(),
            zR = wW.parentElement,
            AW = zR && parseFloat(getComputedStyle(zR).paddingTop) || 0,
            bR = function(WW, RW, MW, wW) {
              if (!WW || WW.height <= 0 || WW.right <= RW.left || WW.left >= RW.right) return null;
              const CW = Math.max(wW, WW.bottom + 8);
              return {
                marginTop: Math.round(CW - wW),
                maxHeight: Math.max(0, Math.floor(MW - CW - wW))
              }
            }(WW, CW, window.innerHeight, AW);
          MW((WW => (null === WW || void 0 === WW ? void 0 : WW.marginTop) === (null === bR || void 0 === bR ? void 0 : bR.marginTop) && (null === WW || void 0 === WW ? void 0 : WW.maxHeight) === (null === bR || void 0 === bR ? void 0 : bR.maxHeight) ? WW : bR))
        };
        CW();
        const zR = new ResizeObserver(CW);
        return zR.observe(RW), window.addEventListener("resize", CW), () => {
          zR.disconnect(), window.removeEventListener("resize", CW)
        }
      }), [WW]), RW
    }

    function VN(WW) {
      (0, wW.useEffect)((() => {
        var RW;
        null === (RW = WW.current) || void 0 === RW || RW.focus()
      }), [WW])
    }

    function me(WW) {
      const [RW, MW] = (0, wW.useState)(Date.now);
      return (0, wW.useEffect)((() => {
        const RW = window.setInterval((() => {
          MW(Date.now())
        }), WW);
        return () => {
          window.clearInterval(RW)
        }
      }), [WW]), RW
    }

    function xe(WW) {
      let {
        tier: RW,
        t: MW
      } = WW;
      const {
        kind: wW,
        short: CW
      } = YW(RW), zR = TW(RW, gR), AW = MW(`${sN}${zR.key}`, {
        ...zR.params,
        name: MW(`${sN}${JW(RW).nameKey}`)
      });
      return (0, gA.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, gA.jsx)("span", {
          className: gz()("Baf2IslandTierPip", {
            Stage: "tier" !== wW
          }),
          "aria-hidden": "true",
          children: CW
        }), AW]
      })
    }

    function ve(WW) {
      let {
        note: RW,
        className: MW,
        t: wW
      } = WW;
      return (0, gA.jsx)("p", {
        className: gz()("Baf2IslandNote", MW),
        children: fN(wW, RW.key, RW.names, RW.params)
      })
    }
    const KN = "buildAFactory2Game:";

    function uN(WW) {
      let {
        message: RW,
        arrivedAtMs: MW,
        close: CW,
        Cw: zR
      } = WW;
      const AW = kb(),
        {
          t: bR
        } = (0, PC.C)(),
        yR = me(1e3),
        NW = (0, wW.useRef)(null);
      (0, wW.useEffect)((() => {
        var WW;
        null === (WW = NW.current) || void 0 === WW || WW.focus()
      }), []);
      const eW = NN(MW, RW.baf2TransferInMs, yR),
        BW = MW + RW.baf2TransferInMs - 1e3,
        [tR, TW] = (0, wW.useState)(null);
      (0, wW.useEffect)((() => {
        const WW = window.setTimeout((() => {
          TW(BW)
        }), Math.max(0, BW - Date.now()));
        return () => {
          window.clearTimeout(WW)
        }
      }), [BW]);
      const gR = tR === BW || yR >= BW,
        iR = RW.baf2TransferIsland,
        YW = RW.baf2TransferOwner;
      return (0, gA.jsx)(eA.b, {
        close: CW,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, gA.jsxs)("section", {
          ref: NW,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, gA.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, gA.jsxs)("div", {
              children: [(0, gA.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === YW ? fN(bR, `${KN}islandsTransferOwn`, {
                  island: iR
                }) : fN(bR, `${KN}islandsTransfer`, {
                  island: iR,
                  owner: YW
                })
              }), (0, gA.jsx)("p", {
                children: gR ? bR(`${KN}islandsTransferNow`) : bR(`${KN}islandsTransferIn`, {
                  time: ez(bR, eW)
                })
              })]
            }), (0, gA.jsx)(BA.l, {
              ariaLabel: bR(`${KN}islandsClose`),
              onClick: CW
            })]
          }), !gR && (0, gA.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, gA.jsx)("p", {
              className: "Baf2TransferNote",
              children: bR(`${KN}islandsTransferNote`)
            }), (0, gA.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, gA.jsx)(BA.h, {
                onClick: () => {
                  AW.send("baf2coopstay"), zR()
                },
                children: bR(`${KN}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var ON = MW(1253),
      nN = MW(34930),
      GN = MW.n(nN);
    const LN = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const HN = "buildAFactory2Game:",
      DN = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function qe(WW, RW, MW) {
      return void 0 === RW ? MW : "string" === typeof RW ? RW : Array.isArray(RW) ? RW.map((RW => "string" === typeof RW ? RW : "translationKey" in RW ? WW(RW.translationKey) : "")).join("") : WW(RW.translationKey)
    }

    function ZN(WW) {
      const RW = {};
      for (const [MW, wW] of Object.entries(null !== WW && void 0 !== WW ? WW : {})) RW[MW] = wW < 0 ? Nz(wW) : wW.toLocaleString("en-US");
      return RW
    }
    const SN = (0, wW.memo)((function(WW) {
      let {
        item: RW
      } = WW;
      return (0, gA.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, gA.jsx)(oC.c, {
          itemName: RW,
          amount: 0
        })
      })
    }));

    function We(WW) {
      let {
        label: RW,
        percent: MW,
        progress: wW
      } = WW;
      return (0, gA.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, gA.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${RW}: ${wW}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": MW,
          children: (0, gA.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${MW}%`
            }
          })
        }), (0, gA.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: wW
        })]
      })
    }

    function Re(WW) {
      let {
        chips: RW
      } = WW;
      return (0, gA.jsx)("span", {
        className: "Baf2QuestChips",
        children: RW.map((WW => {
          let [RW, MW, wW] = WW;
          const CW = MW >= wW;
          return (0, gA.jsxs)("span", {
            className: gz()("Baf2QuestChip", {
              Met: CW
            }),
            children: [(0, gA.jsx)(SN, {
              item: RW
            }), (0, gA.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: CW ? `\u2713${wW}` : `${MW}/${wW}`
            })]
          }, RW)
        }))
      })
    }

    function Me(WW, RW) {
      const {
        key: MW,
        params: wW
      } = TW(RW, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return WW(`${HN}${MW}`, {
        ...wW,
        name: WW(`${HN}${JW(RW).nameKey}`)
      })
    }

    function we(WW) {
      let {
        core: RW,
        t: MW
      } = WW;
      const [wW, CW] = RW, zR = CW > 0 ? Math.floor(100 * wW / CW) : 100;
      return (0, gA.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": MW(`${HN}questCoreLabel`, {
          have: String(wW),
          need: String(CW)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": zR,
        children: [(0, gA.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: MW(`${HN}questCore`, {
            percent: String(zR)
          })
        }), (0, gA.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, gA.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${zR}%`
            }
          })
        })]
      })
    }

    function Ce(WW) {
      let {
        rows: RW,
        t: MW
      } = WW;
      const wW = RW.filter((WW => WW.done)).length;
      return (0, gA.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": MW(`${HN}questStepsProgress`, {
          done: String(wW),
          total: String(RW.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": RW.length,
        "aria-valuenow": wW,
        children: RW.map((WW => (0, gA.jsx)("span", {
          className: gz()("Baf2QuestSegment", {
            Done: WW.done,
            Current: WW.current
          })
        }, WW.id)))
      })
    }
    const zB = (0, wW.memo)(bB, Ae);

    function Ae(WW, RW) {
      const MW = MW => WW.view.itemNames[MW] === RW.view.itemNames[MW];
      return WW.t === RW.t && WW.extra === RW.extra && (null === WW.row.item || MW(WW.row.item)) && WW.row.madeFor.every(MW) && WW.row.also.every(MW) && GN()(WW.row, RW.row)
    }

    function bB(WW) {
      let {
        row: RW,
        view: MW,
        t: wW,
        extra: CW
      } = WW;
      const zR = RW.item ? function(WW, RW, MW) {
          return 1 !== MW && LN.has(WW) ? JC(RW) : null
        }(RW.key, RW.item, RW.total) : null,
        AW = zR ? wW(zR) : RW.item ? qe(wW, MW.itemNames[RW.item], RW.item) : "",
        bR = RW.also.map((WW => qe(wW, MW.itemNames[WW], WW))),
        yR = bR.join(", "),
        NW = function(WW, RW) {
          var MW;
          return RW.length < 2 ? null !== (MW = RW[0]) && void 0 !== MW ? MW : "" : WW(`${HN}listAnd`, {
            rest: RW.slice(0, -1).join(WW(`${HN}listComma`)),
            last: RW[RW.length - 1]
          })
        }(wW, [AW, ...bR]),
        eW = wW(`${HN}${RW.key}`, {
          ...ZN(RW.params),
          item: AW,
          also: yR,
          itemList: NW,
          total: String(RW.total)
        }),
        [BW, ...tR] = eW.split("\n"),
        TW = RW.total > 1 && !RW.done && !RW.away;
      return (0, gA.jsxs)("li", {
        className: gz()("Baf2QuestStep", {
          Done: RW.done,
          Current: RW.current,
          JustFinished: RW.justFinished,
          Away: RW.away
        }),
        children: [!RW.done && null !== RW.item && (0, gA.jsx)(SN, {
          item: RW.item
        }), (RW.done || null === RW.item) && (0, gA.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: RW.done ? "\u2713" : "\u25cb"
        }), (0, gA.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, gA.jsx)("strong", {
            children: BW
          }), tR.length > 0 && (0, gA.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: tR.join(" ")
          }), !RW.done && RW.madeFor.length > 0 && (0, gA.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: wW("buildAFactory2Game:questRowFor", {
              items: RW.madeFor.map((WW => qe(wW, MW.itemNames[WW], WW))).join(" \u2192 ")
            })
          }), TW && (0, gA.jsx)(We, {
            label: BW,
            percent: Math.round(100 * RW.amount / RW.total),
            progress: `${RW.amount.toLocaleString("en-US")}/${RW.total.toLocaleString("en-US")}`
          }), !RW.done && !RW.away && RW.chips && RW.chips.length > 0 && (0, gA.jsx)(Re, {
            chips: RW.chips
          }), CW]
        })]
      })
    }

    function yB(WW, RW) {
      let [MW, wW] = RW;
      return WW(`${HN}${MW}`, ZN(wW))
    }

    function Ne(WW) {
      let [RW, MW] = WW;
      return RW + JSON.stringify(MW)
    }

    function ee(WW) {
      let {
        goal: RW,
        t: MW
      } = WW;
      return RW ? (0, gA.jsx)("span", {
        className: "Baf2BookGoal",
        children: MW(`${HN}${RW}`)
      }) : null
    }

    function Be(WW) {
      let {
        view: RW,
        t: MW
      } = WW;
      if (!RW.name) return null;
      const wW = dC(RW.rows);
      return (0, gA.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, gA.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: MW(`${HN}currentQuest`)
        }), (0, gA.jsx)("strong", {
          className: "Baf2BookTitle",
          children: yB(MW, RW.name)
        }), (0, gA.jsx)(ee, {
          goal: RW.goal,
          t: MW
        }), wW.length > 1 && (0, gA.jsx)(Ce, {
          rows: wW,
          t: MW
        }), (0, gA.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: RW.rows.map((WW => (0, gA.jsx)(zB, {
            row: WW,
            view: RW,
            t: MW
          }, WW.id)))
        }), RW.reward && (0, gA.jsxs)("span", {
          className: "Baf2BookReward",
          children: [MW(`${HN}questReward`), (0, gA.jsx)(SN, {
            item: RW.reward
          }), qe(MW, RW.itemNames[RW.reward], RW.reward)]
        })]
      })
    }

    function tB(WW) {
      let {
        quest: RW,
        upcoming: MW,
        t: wW
      } = WW;
      return (0, gA.jsxs)("li", {
        className: gz()("Baf2BookQuest", {
          Done: RW[3],
          Upcoming: MW
        }),
        children: [(0, gA.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: RW[3] ? "\u2713" : "\u25cb"
        }), (0, gA.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, gA.jsx)("strong", {
            className: "Baf2BookTitle",
            children: yB(wW, RW)
          }), (0, gA.jsx)(ee, {
            goal: RW[2],
            t: wW
          })]
        })]
      })
    }

    function Te(WW) {
      let {
        done: RW,
        total: MW,
        t: wW
      } = WW;
      const CW = MW > 0 ? Math.round(100 * RW / MW) : 0,
        zR = wW(`${HN}questBookChapterProgress`, {
          done: String(RW),
          total: String(MW)
        });
      return (0, gA.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, gA.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": zR,
          "aria-valuemin": 0,
          "aria-valuemax": MW,
          "aria-valuenow": RW,
          children: (0, gA.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${CW}%`
            }
          })
        }), (0, gA.jsx)("span", {
          className: "Baf2BookProgressText",
          children: zR
        })]
      })
    }

    function gB(WW) {
      let {
        view: RW,
        tier: MW,
        quests: wW,
        t: CW
      } = WW;
      const zR = MW === RW.tier,
        AW = (null !== wW && void 0 !== wW ? wW : []).filter((WW => !WW[4])),
        bR = (null !== wW && void 0 !== wW ? wW : []).filter((WW => WW[4])),
        yR = AW.filter((WW => WW[3])).length,
        NW = zR && RW.name ? Ne(RW.name) : null,
        eW = AW.findIndex((WW => !WW[3] && Ne(WW) === NW));
      return (0, gA.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, gA.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, gA.jsx)("h3", {
            children: Me(CW, MW)
          }), AW.length > 0 && (0, gA.jsx)(Te, {
            done: yR,
            total: AW.length,
            t: CW
          }), zR && RW.core && (0, gA.jsx)(we, {
            core: RW.core,
            t: CW
          })]
        }), (0, gA.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === wW && zR && (0, gA.jsx)(Be, {
            view: RW,
            t: CW
          }), AW.map(((WW, MW) => MW === eW ? (0, gA.jsx)(Be, {
            view: RW,
            t: CW
          }, Ne(WW)) : (0, gA.jsx)(tB, {
            quest: WW,
            upcoming: !WW[3],
            t: CW
          }, Ne(WW))))]
        }), zR && RW.side && (0, gA.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, gA.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: CW(`${HN}questSide`)
          }), (0, gA.jsx)("strong", {
            className: "Baf2BookTitle",
            children: yB(CW, RW.side.name)
          }), (0, gA.jsx)(ee, {
            goal: RW.side.goal,
            t: CW
          }), (0, gA.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, gA.jsx)(zB, {
              row: RW.side.row,
              view: RW,
              t: CW
            })
          })]
        }), bR.length > 0 && (0, gA.jsxs)(gA.Fragment, {
          children: [(0, gA.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: CW(`${HN}questBookSidesDone`)
          }), (0, gA.jsx)("ol", {
            className: "Baf2BookQuests",
            children: bR.map((WW => (0, gA.jsx)(tB, {
              quest: WW,
              upcoming: !1,
              t: CW
            }, Ne(WW))))
          })]
        })]
      })
    }

    function iB(WW) {
      var RW, MW, zR;
      let {
        store: AW,
        close: bR
      } = WW;
      const {
        t: yR
      } = (0, PC.C)(), NW = (0, ON.i)(cz, AW.get()), BW = null !== (RW = NW.tier) && void 0 !== RW ? RW : 1, [tR, TW] = (0, wW.useState)(null), gR = (null === tR || void 0 === tR ? void 0 : tR.at) === BW ? tR.tier : BW, JW = (0, wW.useRef)(null), PW = null !== NW.chapters;
      (0, wW.useEffect)((() => {
        var WW;
        JW.current && (JW.current.scrollTop = 0);
        const RW = null === (WW = JW.current) || void 0 === WW ? void 0 : WW.querySelector(".Baf2BookQuest.Current");
        if (JW.current && RW) {
          const WW = RW.getBoundingClientRect().bottom - JW.current.getBoundingClientRect().bottom;
          WW > 0 && (JW.current.scrollTop += Math.min(WW, RW.getBoundingClientRect().top - JW.current.getBoundingClientRect().top))
        }
      }), [gR, PW]);
      const IW = null === (MW = NW.chapters) || void 0 === MW ? void 0 : MW.find((WW => {
        let [RW] = WW;
        return RW === gR
      }));
      return (0, gA.jsx)(eA.b, {
        close: bR,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, gA.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: DN,
          children: [(0, gA.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, gA.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: yR(`${HN}questBookTitle`)
            }), (0, gA.jsx)(BA.l, {
              onClick: bR
            })]
          }), (0, gA.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": yR(`${HN}questBookChapters`),
            children: CW.slice(0, eW()).map(((WW, RW) => {
              const MW = RW + 1,
                {
                  kind: wW,
                  short: CW
                } = YW(MW),
                zR = iR(MW, BW),
                AW = zR ? yR(`${HN}coreAtomicHidden`) : Me(yR, MW);
              return (0, gA.jsx)("li", {
                children: (0, gA.jsx)("button", {
                  type: "button",
                  className: gz()({
                    Stage: "tier" !== wW,
                    Atomic: "atomic" === wW,
                    Current: MW === BW,
                    Selected: MW === gR
                  }),
                  disabled: MW > BW,
                  "aria-pressed": MW === gR,
                  "aria-label": AW,
                  title: zR ? void 0 : AW,
                  onClick: () => {
                    TW({
                      tier: MW,
                      at: BW
                    })
                  },
                  children: zR ? "?" : CW
                })
              }, WW.nameKey)
            }))
          }), (0, gA.jsxs)("div", {
            ref: JW,
            className: "Baf2BookBody",
            children: [az(NW) && gR === BW && (0, gA.jsx)("p", {
              className: "Baf2BookEmpty",
              children: yR(`${HN}questBookAllDone`)
            }), (0, gA.jsx)(gB, {
              view: NW,
              tier: gR,
              quests: null !== (zR = null === IW || void 0 === IW ? void 0 : IW[1]) && void 0 !== zR ? zR : null,
              t: yR
            })]
          })]
        })
      })
    }
    const Ye = "buildAFactory2Game:";

    function Je(WW) {
      let {
        tiers: RW,
        from: MW,
        tier: wW,
        shown: CW,
        WM: zR
      } = WW;
      const {
        t: AW
      } = (0, PC.C)(), bR = RW.map(((WW, RW) => {
        const bR = MW + RW,
          {
            kind: yR,
            short: NW
          } = YW(bR),
          eW = iR(bR, wW);
        return (0, gA.jsx)("li", {
          children: (0, gA.jsx)("button", {
            type: "button",
            className: gz()({
              Stage: "tier" !== yR,
              Silhouette: eW,
              Reached: bR <= wW,
              Current: bR === wW,
              Next: bR === wW + 1,
              Selected: bR === CW
            }),
            disabled: eW,
            "aria-pressed": bR === CW,
            "aria-label": eW ? AW(`${Ye}coreAtomicHidden`) : void 0,
            title: eW ? void 0 : AW(`${Ye}${WW.nameKey}`),
            onClick: () => {
              zR(bR)
            },
            children: eW ? "?" : NW
          })
        }, WW.nameKey)
      }));
      return (0, gA.jsx)(gA.Fragment, {
        children: bR
      })
    }

    function Pe(WW) {
      let {
        id: RW,
        label: MW,
        tiers: wW,
        from: CW,
        ...zR
      } = WW;
      return (0, gA.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, gA.jsx)("span", {
          id: RW,
          className: "Baf2CoreLadderLabel",
          children: MW
        }), (0, gA.jsx)("ol", {
          "aria-labelledby": RW,
          children: (0, gA.jsx)(Je, {
            ...zR,
            tiers: wW,
            from: CW
          })
        })]
      })
    }

    function Ie(WW) {
      const {
        t: RW
      } = (0, PC.C)(), MW = CW.findIndex((WW => void 0 !== WW.stage)), wW = CW.findIndex((WW => void 0 !== WW.reactorTier)), zR = MW < 0 ? CW : CW.slice(0, MW), AW = MW < 0 ? [] : CW.slice(MW, wW < 0 ? void 0 : wW), yR = wW < 0 || !bR() ? [] : CW.slice(wW);
      return (0, gA.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, gA.jsx)(Pe, {
          ...WW,
          id: "baf2CoreTiersLabel",
          label: RW(`${Ye}coreTiersLabel`),
          tiers: zR,
          from: 1
        }), AW.length > 0 && (0, gA.jsx)(Pe, {
          ...WW,
          id: "baf2CoreStagesLabel",
          label: RW(`${Ye}coreStagesLabel`),
          tiers: AW,
          from: MW + 1
        }), yR.length > 0 && (0, gA.jsx)(Pe, {
          ...WW,
          id: "baf2CoreAtomicLabel",
          label: RW(`${Ye}coreAtomicLabel`),
          tiers: yR,
          from: wW + 1
        })]
      })
    }
    const oe = "buildAFactory2Game:";

    function le(WW) {
      let {
        item: RW,
        itemNames: MW,
        children: wW
      } = WW;
      return (0, gA.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, gA.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, gA.jsx)(oC.c, {
            itemName: RW,
            amount: 0
          })
        }), (0, gA.jsx)(lC.c, {
          text: MW[RW]
        }), wW]
      })
    }

    function Fe(WW) {
      const RW = new Map;
      for (const {
          block: wW
        }
        of WW.newDeposits) {
        var MW;
        RW.set(wW, (null !== (MW = RW.get(wW)) && void 0 !== MW ? MW : 0) + 1)
      }
      return [...RW]
    }

    function fe(WW) {
      let {
        value: RW,
        label: MW,
        more: wW
      } = WW;
      return (0, gA.jsxs)("li", {
        children: [(0, gA.jsx)("strong", {
          children: RW
        }), (0, gA.jsx)("span", {
          children: MW
        }), wW > 0 && (0, gA.jsxs)("em", {
          children: ["+", wW]
        })]
      })
    }

    function Qe(WW) {
      let {
        items: RW,
        itemNames: MW
      } = WW;
      const {
        t: CW
      } = (0, PC.C)(), [zR, AW] = (0, wW.useState)(null), bR = null !== zR && RW.includes(zR) ? zR : null;
      return (0, gA.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, gA.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: CW(`${oe}coreRewardUnlocks`)
        }), (0, gA.jsx)("ul", {
          children: RW.map((WW => (0, gA.jsx)("li", {
            children: (0, gA.jsx)("button", {
              type: "button",
              className: gz()("Baf2PanelIcon", {
                Picked: WW === bR
              }),
              title: LC(CW, WW),
              "aria-label": LC(CW, WW),
              "aria-pressed": WW === bR,
              onClick: () => {
                AW(WW === bR ? null : WW)
              },
              children: (0, gA.jsx)(oC.c, {
                itemName: WW,
                amount: 0
              })
            })
          }, WW)))
        }), (0, gA.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== bR && (0, gA.jsxs)(gA.Fragment, {
            children: [(0, gA.jsx)(lC.c, {
              text: MW[bR]
            }), " \xb7 ", (0, gA.jsx)(lC.c, {
              text: MW[kR(bR)]
            })]
          }), null === bR && CW(`${oe}coreRecipeTap`)]
        })]
      })
    }

    function rB(WW) {
      var RW, MW;
      let {
        def: wW,
        tier: CW,
        itemNames: zR
      } = WW;
      const {
        t: AW
      } = (0, PC.C)(), bR = CW > 1 ? JW(CW - 1) : void 0, yR = Math.round(2 * wW.islandRadius), NW = bR ? Math.round(2 * bR.islandRadius) : yR, eW = CW >= 3 ? Tw(CW) : null;
      return (0, gA.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, gA.jsxs)("ul", {
          className: gz()("Baf2CoreStats", {
            Four: null !== eW
          }),
          children: [(0, gA.jsx)(fe, {
            value: `${yR}\xd7${yR}`,
            label: AW(`${oe}coreStatIsland`),
            more: yR - NW
          }), (0, gA.jsx)(fe, {
            value: String(wW.machineAllowance),
            label: AW(`${oe}coreStatMachines`),
            more: wW.machineAllowance - (null !== (RW = null === bR || void 0 === bR ? void 0 : bR.machineAllowance) && void 0 !== RW ? RW : wW.machineAllowance)
          }), (0, gA.jsx)(fe, {
            value: String(wW.beltAllowance),
            label: AW(`${oe}coreStatBelts`),
            more: wW.beltAllowance - (null !== (MW = null === bR || void 0 === bR ? void 0 : bR.beltAllowance) && void 0 !== MW ? MW : wW.beltAllowance)
          }), null !== eW && (0, gA.jsx)(fe, {
            value: String(eW),
            label: AW(`${oe}coreStatStorage`),
            more: eW - (bR ? Tw(CW - 1) : eW)
          })]
        }), wW.reward && (0, gA.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, gA.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: AW(`${oe}coreRewardItem`)
          }), (0, gA.jsx)(le, {
            item: wW.reward,
            itemNames: zR
          })]
        }), wW.newDeposits.length > 0 && (0, gA.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, gA.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: AW(wW.newDeposits.length > 1 ? `${oe}coreRewardDeposits` : `${oe}coreRewardDeposit`)
          }), Fe(wW).map((WW => {
            let [RW, MW] = WW;
            return (0, gA.jsx)(le, {
              item: RW,
              itemNames: zR,
              children: MW > 1 && ` \xd7${MW}`
            }, RW)
          }))]
        }), wW.unlocks.length > 0 && (0, gA.jsx)(Qe, {
          items: wW.unlocks,
          itemNames: zR
        }), (0, gA.jsx)(cB, {
          tier: CW
        })]
      })
    }

    function cB(WW) {
      let {
        tier: RW
      } = WW;
      const {
        t: MW
      } = (0, PC.C)(), wW = bz[RW];
      if (!wW) return null;
      const CW = AC(RW, 0, 0).barrierMax !== AC(RW - 1, 0, 0).barrierMax;
      return (0, gA.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, gA.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, gA.jsx)(oC.c, {
            itemName: CW ? WC.Chestplate : Sw,
            amount: 0
          })
        }), MW(`${oe}gearPerkLine`, {
          perk: MW(`${oe}${wW}`)
        })]
      })
    }

    function Xe(WW, RW) {
      return null === WW ? RW : WW.value
    }

    function jB(WW, RW, MW, wW) {
      let CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === WW || MW - WW.atMs >= wW ? null : CW(WW.value, RW) ? WW.armed ? null : WW : WW.armed ? WW : {
        ...WW,
        armed: !0
      }
    }

    function kB(WW, RW) {
      const MW = RW.filter((RW => {
        var MW;
        return !1 !== (null === (MW = WW.get(RW)) || void 0 === MW ? void 0 : MW.value)
      }));
      for (const [wW, CW] of WW) CW.value && !RW.includes(wW) && MW.push(wW);
      return MW
    }

    function aB(WW, RW, MW, CW) {
      const [zR, AW] = (0, wW.useState)((() => new Map)), bR = () => {
        AW((RW => function(WW, RW, MW, wW) {
          var CW;
          let zR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            AW = null;
          for (const [bR, yR] of WW) {
            const CW = jB(yR, RW(bR), MW, wW, zR);
            CW !== yR && (AW ??= new Map(WW), null === CW ? AW.delete(bR) : AW.set(bR, CW))
          }
          return null !== (CW = AW) && void 0 !== CW ? CW : WW
        }(RW, WW, Date.now(), MW, CW)))
      };
      (0, wW.useEffect)((() => {
        bR()
      }), [RW, MW]), (0, wW.useEffect)((() => {
        if (0 === zR.size) return;
        const WW = Math.min(...[...zR.values()].map((WW => WW.atMs))),
          RW = setTimeout(bR, Math.max(0, WW + MW - Date.now()) + 1);
        return () => {
          clearTimeout(RW)
        }
      }), [zR, RW, MW]);
      return [zR, (RW, MW) => {
        AW((wW => {
          const zR = new Map(wW);
          return zR.set(RW, function(WW, RW, MW) {
            return {
              value: WW,
              atMs: MW,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(WW, RW)
            }
          }(MW, WW(RW), Date.now(), CW)), zR
        }))
      }]
    }
    const se = "buildAFactory2Game:";

    function de(WW) {
      let {
        message: RW,
        itemNames: MW
      } = WW;
      const CW = kb(),
        {
          t: zR
        } = (0, PC.C)(),
        [AW, bR] = (0, wW.useState)(!1),
        [yR, NW] = function(WW) {
          let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FA;
          const [MW, wW] = aB((RW => WW.includes(RW)), WW, RW, Object.is);
          return [kB(MW, WW), wW]
        }(RW.baf2CoreBankPaused),
        eW = new Set(yR),
        BW = [...RW.baf2CoreBanked];
      for (const wW of eW) BW.some((WW => {
        let [RW] = WW;
        return RW === wW
      })) || BW.push([wW, 0]);
      return 0 === BW.length ? null : (0, gA.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, gA.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": AW,
          onClick: () => {
            bR(!AW)
          },
          children: [(0, gA.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: zR(`${se}coreBankedLater`)
          }), (0, gA.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: BW.map((WW => {
              let [RW, MW] = WW;
              const wW = eW.has(RW);
              return (0, gA.jsxs)("span", {
                className: gz()({
                  Paused: wW
                }),
                title: wW ? zR(`${se}coreBankPausedTag`) : void 0,
                children: [(0, gA.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, gA.jsx)(oC.c, {
                    itemName: RW,
                    amount: 0
                  })
                }), MW, wW && (0, gA.jsx)(IC.e, {
                  name: "pause"
                })]
              }, RW)
            }))
          }), (0, gA.jsx)(IC.e, {
            name: AW ? "angle-up" : "angle-down"
          })]
        }), AW && (0, gA.jsxs)(gA.Fragment, {
          children: [(0, gA.jsx)("ul", {
            children: BW.map((WW => {
              let [RW, wW] = WW;
              const AW = eW.has(RW);
              return (0, gA.jsxs)("li", {
                children: [(0, gA.jsxs)(le, {
                  item: RW,
                  itemNames: MW,
                  children: [(0, gA.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: wW
                  }), AW && (0, gA.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: zR(`${se}coreBankPausedTag`)
                  })]
                }), (0, gA.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, gA.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === wW,
                    onClick: () => {
                      CW.send(`baf2corewithdraw ${wW} ${RW}`)
                    },
                    children: zR(`${se}coreTake`)
                  }), (0, gA.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      CW.send(`${oW} ${RW}`), NW(RW, !AW)
                    },
                    children: zR(AW ? `${se}coreBankResume` : `${se}coreBankStop`)
                  })]
                })]
              }, RW)
            }))
          }), (0, gA.jsx)("p", {
            className: "Baf2CoreHint",
            children: zR(`${se}coreBankNote`)
          })]
        })]
      })
    }
    const pe = "buildAFactory2Game:";

    function he(WW) {
      const RW = Math.max(0, Math.floor(WW));
      return `${Math.floor(RW/60)}:${String(RW%60).padStart(2,"0")}`
    }

    function Ue(WW) {
      let {
        item: RW
      } = WW;
      return (0, gA.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, gA.jsx)(oC.c, {
          itemName: RW,
          amount: 0
        })
      })
    }

    function Ee() {
      return (0, gA.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, gA.jsx)(IC.e, {
          name: "bolt"
        })
      })
    }

    function Ve(WW) {
      let {
        charge: RW,
        hint: MW,
        itemNames: wW
      } = WW;
      const CW = kb(),
        {
          t: zR
        } = (0, PC.C)(),
        [AW, bR, yR, NW, eW, BW, tR] = RW,
        [TW, gR] = function(WW) {
          var RW;
          let MW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FA,
            wW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [CW, zR] = aB((() => WW), WW, MW, wW);
          return [Xe(null !== (RW = CW.get("")) && void 0 !== RW ? RW : null, WW), WW => {
            zR("", WW)
          }]
        }(tR),
        iR = TW === tR ? BW : !TW,
        YW = NW >= eW,
        JW = AW.find((WW => {
          let [, RW, MW] = WW;
          return MW < .9 * RW
        }));
      let PW = `${pe}coreChargeWaiting`,
        IW = {};
      return YW ? PW = `${pe}coreChargeDone` : TW ? PW = `${pe}coreChargeStopped` : iR && MW ? (PW = `${pe}${MW[0]}`, IW = {
        item: LC(zR, MW[1])
      }) : iR && JW ? (PW = `${pe}coreChargeShort`, IW = {
        item: LC(zR, JW[0])
      }) : iR && bR > 0 && !yR ? PW = `${pe}coreChargePower` : iR && (PW = `${pe}coreChargeRunning`), (0, gA.jsxs)("div", {
        className: gz()("Baf2CoreCharge", {
          Waiting: !iR && !YW,
          Done: YW
        }),
        children: [(0, gA.jsxs)("h4", {
          children: [zR(`${pe}coreChargeTitle`), (0, gA.jsx)("span", {
            children: zR(`${pe}coreChargeProgress`, {
              done: he(NW),
              need: he(eW)
            })
          })]
        }), (0, gA.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, gA.jsx)("div", {
            style: {
              width: 100 * Math.min(NW, eW) / eW + "%"
            }
          })
        }), (0, gA.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [AW.map((WW => {
            var RW;
            let [MW, CW, AW] = WW;
            const bR = AW >= .9 * CW;
            return (0, gA.jsxs)("li", {
              className: gz()({
                Done: bR,
                Short: iR && !bR
              }),
              children: [(0, gA.jsx)(Ue, {
                item: MW
              }), (0, gA.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, gA.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, gA.jsx)(lC.c, {
                    text: null !== (RW = wW[MW]) && void 0 !== RW ? RW : MW
                  }), (0, gA.jsx)("span", {
                    children: zR(`${pe}coreChargeItem`, {
                      now: String(AW),
                      need: String(CW)
                    })
                  })]
                }), (0, gA.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, gA.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*AW/CW)}%`
                    }
                  })
                })]
              })]
            }, MW)
          })), bR > 0 && (0, gA.jsxs)("li", {
            className: gz()("Baf2CoreChargePower", {
              Short: iR && !yR
            }),
            children: [(0, gA.jsx)(Ee, {}), (0, gA.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, gA.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, gA.jsx)("span", {
                  children: zR(`${pe}coreChargePowerRow`, {
                    power: qR(bR)
                  })
                })
              })
            })]
          })]
        }), (0, gA.jsx)("p", {
          className: "Baf2CoreHint",
          children: zR(PW, IW)
        }), !YW && (iR || TW) && (0, gA.jsx)("button", {
          type: "button",
          className: gz()("Baf2CoreChargeToggle", {
            Stopped: TW
          }),
          onClick: () => {
            CW.send(FW), gR(!TW)
          },
          children: zR(TW ? `${pe}coreChargeRestart` : `${pe}coreChargeStop`)
        })]
      })
    }

    function mB(WW) {
      let {
        charge: RW,
        reached: MW,
        itemNames: wW
      } = WW;
      const {
        t: CW
      } = (0, PC.C)();
      return (0, gA.jsxs)("div", {
        className: gz()("Baf2CoreCharge", {
          Done: MW
        }),
        children: [(0, gA.jsxs)("h4", {
          children: [CW(`${pe}coreChargeTitle`), (0, gA.jsx)("span", {
            children: CW(`${pe}coreChargeSpecTime`, {
              time: he(RW.seconds)
            })
          })]
        }), (0, gA.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [RW.items.map((WW => {
            var RW;
            let {
              item: zR,
              amount: AW
            } = WW;
            return (0, gA.jsxs)("li", {
              className: gz()({
                Done: MW
              }),
              children: [(0, gA.jsx)(Ue, {
                item: zR
              }), (0, gA.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, gA.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, gA.jsx)(lC.c, {
                    text: null !== (RW = wW[zR]) && void 0 !== RW ? RW : zR
                  }), (0, gA.jsx)("span", {
                    children: CW(`${pe}coreChargeSpecItem`, {
                      need: String(AW)
                    })
                  })]
                })
              })]
            }, zR)
          })), RW.powerPerS > 0 && (0, gA.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, gA.jsx)(Ee, {}), (0, gA.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, gA.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, gA.jsx)("span", {
                  children: CW(`${pe}coreChargePowerRow`, {
                    power: qR(RW.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const xB = "buildAFactory2Game:";

    function vB(WW) {
      let {
        def: RW,
        reached: MW,
        banked: wW,
        itemNames: CW
      } = WW;
      const {
        t: zR
      } = (0, PC.C)();
      return (0, gA.jsx)("ul", {
        className: "Baf2CoreCost",
        children: RW.cost.map((WW => {
          let {
            item: RW,
            amount: AW
          } = WW;
          const bR = MW ? 0 : wW(RW);
          return (0, gA.jsx)("li", {
            children: (0, gA.jsx)(le, {
              item: RW,
              itemNames: CW,
              children: (0, gA.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: bR > 0 ? zR(`${xB}coreBankedFor`, {
                  amount: String(bR),
                  total: String(AW)
                }) : `\xd7${AW}`
              })
            })
          }, RW)
        }))
      })
    }

    function Ke(WW, RW) {
      if (RW >= eW()) return WW(`${xB}coreMaxTier`);
      const MW = NW[RW + 1];
      return MW && !MW.startsWith("upgradeCore") ? WW(`${xB}coreGateQuest`, {
        quest: WW(`${xB}quest_${MW}`)
      }) : WW(`${xB}coreGateClosed`)
    }

    function ue() {
      const {
        t: WW
      } = (0, PC.C)(), RW = kb(), MW = (0, wW.useRef)(null), CW = (0, wW.useRef)(Date.now());
      return UN(!0, MW), (0, gA.jsx)("div", {
        ref: MW,
        className: "Baf2CoreGrow",
        children: (0, gA.jsx)(BA.m, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - CW.current >= 600 && RW.send(IW)
          },
          children: WW(`${xB}coreGrow`)
        })
      })
    }

    function Oe(WW) {
      let {
        message: RW,
        itemNames: MW,
        next: wW
      } = WW;
      const CW = kb(),
        {
          t: zR
        } = (0, PC.C)(),
        AW = RW.baf2CoreTier,
        bR = RW.baf2CoreReady,
        yR = RW.baf2CoreNeeds.filter((WW => {
          let [, RW, MW, wW] = WW;
          return wW > 0 && RW < MW
        })),
        NW = RW.baf2CoreNeeds.every((WW => {
          let [, RW, MW] = WW;
          return RW >= MW
        })),
        eW = RW.baf2CoreKeep;
      return (0, gA.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, gA.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [bR && (0, gA.jsx)(ue, {}), (0, gA.jsx)("h3", {
            children: zR(`${xB}coreBring`)
          }), (0, gA.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: RW.baf2CoreNeeds.map((WW => {
              let [RW, wW, AW, bR] = WW;
              return (0, gA.jsxs)("li", {
                className: gz()({
                  Done: wW >= AW
                }),
                children: [(0, gA.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, gA.jsx)(oC.c, {
                    itemName: RW,
                    amount: 0
                  })
                }), (0, gA.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, gA.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, gA.jsx)(lC.c, {
                      text: MW[RW]
                    }), (0, gA.jsxs)("span", {
                      children: [wW, "/", AW]
                    })]
                  }), (0, gA.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, gA.jsx)("div", {
                      style: {
                        width: 100 * wW / AW + "%"
                      }
                    }), bR > 0 && (0, gA.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * bR / AW + "%"
                      }
                    })]
                  })]
                }), bR > 0 && wW < AW && (0, gA.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    CW.send(`${lW} ${RW}`)
                  },
                  children: zR(`${xB}coreDeposit`, {
                    amount: String(bR)
                  })
                })]
              }, RW)
            }))
          }), RW.baf2CoreCharge && (0, gA.jsx)(Ve, {
            charge: RW.baf2CoreCharge,
            hint: RW.baf2CoreChargeHint,
            itemNames: MW
          }), !bR && yR.length > 1 && (0, gA.jsx)(BA.m, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              CW.send(IW)
            },
            children: zR(`${xB}coreHandOver`)
          }), !bR && void 0 !== eW && (0, gA.jsx)("p", {
            className: "Baf2CoreHint",
            children: zR(`${xB}coreKeepRest`, {
              item: LC(zR, eW)
            })
          }), !bR && !NW && 0 === yR.length && void 0 === eW && (0, gA.jsx)("p", {
            className: "Baf2CoreHint",
            children: zR(`${xB}coreNothingHeld`)
          }), (0, gA.jsx)(de, {
            message: RW,
            itemNames: MW
          })]
        }), (0, gA.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, gA.jsx)("h3", {
            children: zR(`${xB}coreRewards`)
          }), (0, gA.jsx)(rB, {
            def: wW,
            tier: AW + 1,
            itemNames: MW
          })]
        })]
      })
    }

    function ne(WW) {
      let {
        message: RW,
        itemNames: MW,
        shown: wW
      } = WW;
      const {
        t: CW
      } = (0, PC.C)(), zR = RW.baf2CoreTier, AW = JW(wW), bR = wW <= zR, yR = new Map(RW.baf2CoreBanked), NW = !PW(zR, fW(RW)) && wW === zR;
      return (0, gA.jsxs)("div", {
        className: gz()("Baf2CoreBody", {
          Locked: !bR
        }),
        children: [(0, gA.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, gA.jsx)("h3", {
            children: CW(bR ? `${xB}coreItTook` : `${xB}coreItNeeds`)
          }), 0 === AW.cost.length && (0, gA.jsx)("p", {
            className: "Baf2CoreHint",
            children: CW(`${xB}coreTierStart`)
          }), AW.cost.length > 0 && (0, gA.jsx)(vB, {
            def: AW,
            reached: bR,
            banked: WW => {
              var RW;
              return function(WW, RW, MW, wW) {
                let CW = WW;
                for (let AW = RW + 2; AW <= MW; AW++) {
                  var zR;
                  const WW = JW(AW).cost.find((WW => WW.item === wW)),
                    RW = Math.min(CW, null !== (zR = null === WW || void 0 === WW ? void 0 : WW.amount) && void 0 !== zR ? zR : 0);
                  if (AW === MW) return RW;
                  CW -= RW
                }
                return 0
              }(null !== (RW = yR.get(WW)) && void 0 !== RW ? RW : 0, zR, wW, WW)
            },
            itemNames: MW
          }), AW.charge && (0, gA.jsx)(mB, {
            charge: AW.charge,
            reached: bR,
            itemNames: MW
          }), NW && (0, gA.jsxs)(gA.Fragment, {
            children: [(0, gA.jsx)("p", {
              className: "Baf2CoreHint",
              children: Ke(CW, zR)
            }), (0, gA.jsx)(de, {
              message: RW,
              itemNames: MW
            })]
          })]
        }), (0, gA.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, gA.jsx)("h3", {
            children: CW(bR ? `${xB}coreGave` : `${xB}coreLockedRewards`)
          }), (0, gA.jsx)(rB, {
            def: AW,
            tier: wW,
            itemNames: MW
          })]
        })]
      })
    }

    function Ge(WW, RW) {
      const {
        key: MW,
        params: wW
      } = TW(RW - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return WW(`${xB}${MW}`, wW)
    }
    const Le = "buildAFactory2Game:",
      He = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      De = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function qB(WW) {
      let {
        view: RW,
        close: MW,
        askIslands: CW
      } = WW;
      const {
        t: zR
      } = (0, PC.C)(), [AW, bR] = (0, wW.useState)(!1);
      (0, wW.useEffect)((() => {
        if (!AW) return;
        const WW = window.setTimeout((() => {
          bR(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(WW)
        }
      }), [AW]);
      const {
        message: yR,
        itemNames: NW
      } = RW, eW = yR.baf2CoreTier, BW = JW(eW), tR = PW(eW, fW(yR)), [iR, YW] = yR.baf2CoreMachines, [IW, oW] = yR.baf2CoreBelts, lW = yR.baf2CoreStorage, FW = yR.baf2CoreReady, [QW, rR] = (0, wW.useState)(null), cR = (null === QW || void 0 === QW ? void 0 : QW.at) === eW && QW.ready === FW ? QW.tier : tR ? eW + 1 : eW;
      let XW = "coreTierLocked";
      cR <= eW ? XW = "coreTierReached" : cR === eW + 1 && (XW = "coreTierNext");
      const jR = zR(`${Le}${JW(cR).nameKey}`),
        kR = cR === eW + 1 ? tR : null,
        aR = TW(cR, {
          tier: XW,
          stage: He[XW],
          atomic: De[XW]
        }),
        sW = zR(`${Le}${aR.key}`, {
          ...aR.params,
          name: jR
        }),
        dW = TW(eW, gR),
        pW = zR(`${Le}${dW.key}`, {
          ...dW.params,
          name: zR(`${Le}${BW.nameKey}`)
        });
      return (0, gA.jsx)(eA.b, {
        close: MW,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, gA.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, gA.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, gA.jsxs)("div", {
              children: [(0, gA.jsx)("h2", {
                id: "baf2CoreTitle",
                children: zR(`${Le}coreTitle`)
              }), void 0 !== yR.baf2CoreIslandName && (0, gA.jsx)("p", {
                className: "Baf2CoreIsland",
                children: yR.baf2CoreIslandName
              }), (0, gA.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, gA.jsx)("span", {
                  children: pW
                }), (0, gA.jsx)("span", {
                  className: gz()({
                    Full: iR >= YW
                  }),
                  children: zR(`${Le}coreMachineCount`, {
                    amount: String(iR),
                    total: String(YW)
                  })
                }), (0, gA.jsx)("span", {
                  className: gz()({
                    Full: IW >= oW
                  }),
                  children: zR(`${Le}coreBeltCount`, {
                    amount: String(IW),
                    total: String(oW)
                  })
                }), void 0 !== lW && (0, gA.jsx)("span", {
                  className: gz()({
                    Full: lW[0] >= lW[1]
                  }),
                  children: zR(`${Le}coreStorageCount`, {
                    amount: String(lW[0]),
                    total: String(lW[1])
                  })
                })]
              })]
            }), (0, gA.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [yR.baf2CoreIslands && (0, gA.jsx)(BA.h, {
                className: "Baf2CoreIslandsButton",
                disabled: AW,
                onClick: () => {
                  bR(!0), CW()
                },
                children: zR(`${Le}islandsOpenButton`)
              }), (0, gA.jsx)(BA.l, {
                onClick: MW
              })]
            })]
          }), (0, gA.jsx)(Ie, {
            tier: eW,
            shown: cR,
            WM: WW => {
              rR({
                tier: WW,
                at: eW,
                ready: FW
              })
            }
          }), (0, gA.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [sW, cR > eW + 1 && (0, gA.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: Ge(zR, cR)
            })]
          }), 6 === cR && cR > eW && (0, gA.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: zR(`${Le}coreStagesNote`)
          }), 11 === cR && cR > eW && (0, gA.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: zR(`${Le}coreAtomicNote`)
          }), kR && (0, gA.jsx)(Oe, {
            message: yR,
            itemNames: NW,
            next: kR
          }), !kR && (0, gA.jsx)(ne, {
            message: yR,
            itemNames: NW,
            shown: cR
          })]
        })
      })
    }
    const Ze = {
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
    const Se = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: ZC,
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

    function WB(WW) {
      return WW.baf2DropCometOreOnly ? "dropCometOre" : WW.baf2DropCometIsotope ? "seed" === WW.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function RB(WW) {
      let {
        message: RW,
        quests: MW,
        close: CW,
        Cw: zR
      } = WW;
      const AW = kb(),
        {
          t: bR
        } = (0, PC.C)(),
        yR = (0, ON.i)(cz, MW.get()),
        NW = function(WW) {
          var RW;
          if (!dW(WW.tutorial)) return null;
          const MW = WW.rows.find((WW => WW.current)),
            wW = MW ? Ze[MW.key] : void 0;
          return null !== (RW = null !== wW && void 0 !== wW ? wW : WW.side ? Ze[WW.side.row.key] : void 0) && void 0 !== RW ? RW : null
        }(yR),
        eW = null === yR.tier || Rz(yR.tier),
        BW = eW ? Se : Se.filter((WW => {
          let {
            item: RW
          } = WW;
          return RW !== ZC
        })),
        [tR, TW] = (0, wW.useState)(null),
        gR = null !== tR && void 0 !== tR ? tR : !RW.baf2DropFoundSalvage && eW,
        iR = RW.baf2DropRuinDistance,
        YW = RW.baf2DropComet,
        JW = RW.baf2DropOldWorks,
        PW = RW.baf2DropGrove,
        IW = function(WW) {
          return 2 + Number(void 0 !== WW.baf2DropComet) + Number(!!WW.baf2DropOwedComet || void 0 !== WW.baf2DropOwedWaitMinutes) + Number(void 0 !== WW.baf2DropDigDistance) + Number(void 0 !== WW.baf2DropOldWorks) + Number(void 0 !== WW.baf2DropGrove)
        }(RW),
        oW = WW => {
          AW.send(function(WW) {
            return `baf2drop ${WW}`
          }(WW)), zR()
        };
      let lW = bR("buildAFactory2Game:dropRuinNone");
      if (null !== iR) {
        let WW = RW.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        RW.baf2DropRuinOldWorks && (WW = "dropRuinOldWorks");
        const MW = void 0 === RW.baf2DropRuinCluster ? bR("buildAFactory2Game:dropRuinOpen") : bR("buildAFactory2Game:dropRuinCluster", {
          count: String(RW.baf2DropRuinCluster)
        });
        lW = `${bR(`buildAFactory2Game:${WW}`,{distance:String(iR)})} ${MW}`
      }
      let FW = bR("buildAFactory2Game:dropBelowDescription");
      void 0 !== RW.baf2DropBelowLook && (FW = bR("buildAFactory2Game:dropBelowLook", {
        look: bR(RW.baf2DropBelowLook)
      }));
      const fW = "buildAFactory2Game:wildsRegion_survivorGrove" === RW.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        QW = ez(bR, 60 * function(WW) {
          const [RW, MW] = (0, wW.useState)((() => Date.now())), [CW, zR] = (0, wW.useState)(RW);
          return (0, wW.useEffect)((() => {
            const WW = Date.now();
            MW(WW), zR(WW)
          }), [WW]), (0, wW.useEffect)((() => {
            const WW = window.setInterval((() => {
              zR(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(WW)
            }
          }), []), Math.max(1, WW.baf2DropRenewMinutes - Math.floor((CW - RW) / 6e4))
        }(RW)),
        rR = function(WW, RW, MW) {
          return "ruin" === WW && !MW || "owed" === WW && !RW.baf2DropOwedComet ? null : WW
        }(NW, RW, null !== iR),
        cR = function(WW) {
          for (var RW = arguments.length, MW = new Array(RW > 1 ? RW - 1 : 0), wW = 1; wW < RW; wW++) MW[wW - 1] = arguments[wW];
          return gz()("Baf2DropTile", ...MW, {
            Wanted: rR === WW
          })
        };
      return (0, gA.jsx)(eA.b, {
        close: CW,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, gA.jsxs)("section", {
          className: gz()("Baf2Panel Baf2DropMap", {
            Many: IW >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, gA.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, gA.jsxs)("div", {
              children: [(0, gA.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: bR("buildAFactory2Game:dropMapTitle")
              }), (0, gA.jsx)("p", {
                children: bR("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, gA.jsx)(BA.l, {
              onClick: CW
            })]
          }), (0, gA.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== YW && (0, gA.jsxs)(BA.v, {
              className: cR("comet", "Baf2DropComet"),
              onClick: () => {
                oW("comet")
              },
              children: [(0, gA.jsx)("strong", {
                children: bR("buildAFactory2Game:dropComet")
              }), (0, gA.jsx)("span", {
                children: bR(`buildAFactory2Game:${WB(RW)}`, {
                  distance: String(YW)
                })
              })]
            }), RW.baf2DropOwedComet && (0, gA.jsxs)(BA.v, {
              className: cR("owed", "Baf2DropComet"),
              onClick: () => {
                oW("owed")
              },
              children: [(0, gA.jsx)("strong", {
                children: bR("buildAFactory2Game:dropOwedComet")
              }), (0, gA.jsx)("span", {
                children: RW.baf2DropOwedIsotope ? bR("buildAFactory2Game:dropOwedIsotopeDescription") : bR("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== RW.baf2DropOwedWaitMinutes && (0, gA.jsxs)(BA.v, {
              className: cR("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, gA.jsx)("strong", {
                children: bR("buildAFactory2Game:dropOwedComet")
              }), (0, gA.jsx)("span", {
                children: bR("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(RW.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, gA.jsxs)(BA.h, {
              className: cR("below"),
              onClick: () => {
                oW("below")
              },
              children: [(0, gA.jsx)("strong", {
                children: bR("buildAFactory2Game:dropBelow")
              }), (0, gA.jsx)("span", {
                children: FW
              })]
            }), void 0 !== RW.baf2DropDigDistance && (0, gA.jsxs)(BA.r, {
              className: cR("dig"),
              onClick: () => {
                oW("dig")
              },
              children: [(0, gA.jsx)("strong", {
                children: bR("buildAFactory2Game:dropDig")
              }), (0, gA.jsx)("span", {
                children: bR("buildAFactory2Game:dropDigDescription", {
                  distance: String(RW.baf2DropDigDistance),
                  y: Nz(RW.baf2DropDigY)
                })
              })]
            }), void 0 !== PW && (0, gA.jsxs)(BA.r, {
              className: cR("grove", "Baf2DropGrove"),
              onClick: () => {
                oW("grove")
              },
              children: [(0, gA.jsx)("strong", {
                children: bR("buildAFactory2Game:dropGrove")
              }), (0, gA.jsx)("span", {
                children: bR(`buildAFactory2Game:${fW}`, {
                  distance: String(PW)
                })
              })]
            }), (0, gA.jsxs)(BA.m, {
              className: cR("ruin"),
              disabled: null === iR,
              onClick: () => {
                oW("ruin")
              },
              children: [(0, gA.jsx)("strong", {
                children: bR("buildAFactory2Game:dropRuin")
              }), (0, gA.jsx)("span", {
                children: lW
              })]
            }), void 0 !== JW && (0, gA.jsxs)(BA.E, {
              className: cR("works"),
              onClick: () => {
                oW("works")
              },
              children: [(0, gA.jsx)("strong", {
                children: bR("buildAFactory2Game:dropOldWorks")
              }), (0, gA.jsx)("span", {
                children: bR("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(JW)
                })
              })]
            })]
          }), (0, gA.jsx)("p", {
            className: "Baf2DropRenew",
            children: bR("buildAFactory2Game:dropRenew", {
              time: QW
            })
          }), (0, gA.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: gR,
            onToggle: WW => {
              WW.currentTarget.open !== gR && TW(WW.currentTarget.open)
            },
            children: [(0, gA.jsx)("summary", {
              children: bR("buildAFactory2Game:dropSalvageWhat")
            }), (0, gA.jsx)("p", {
              children: bR("buildAFactory2Game:dropSalvageIntro")
            }), (0, gA.jsx)("ul", {
              children: BW.map((WW => {
                let {
                  item: RW,
                  nameKey: MW,
                  useKey: wW,
                  params: CW
                } = WW;
                return (0, gA.jsxs)("li", {
                  children: [(0, gA.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, gA.jsx)(oC.c, {
                      itemName: RW,
                      amount: 0
                    })
                  }), (0, gA.jsxs)("span", {
                    children: [(0, gA.jsx)("strong", {
                      children: bR(MW)
                    }), ": ", bR(wW, CW)]
                  })]
                }, RW)
              }))
            })]
          })]
        })
      })
    }
    const MB = "buildAFactory2Game:";

    function wB(WW, RW) {
      return WW.sendIslandEdit(`baf2coopleave ${RW.baf2IslandId}`)
    }

    function CB(WW) {
      let {
        card: RW,
        canRename: MW,
        done: CW,
        t: zR
      } = WW;
      const AW = kb(),
        [bR, yR] = (0, wW.useState)(RW.baf2IslandName),
        NW = eN(bR),
        eW = "" === NW || BN(NW),
        BW = () => {
          !eW && MW && (NW !== RW.baf2IslandName ? CW(AW.sendIslandEdit(`baf2islandrename ${RW.baf2IslandId} ${NW}`)) : CW(null))
        },
        tR = () => {
          CW(null)
        };
      return (0, gA.jsxs)("div", {
        className: "Baf2IslandForm",
        ...pN(tR),
        children: [(0, gA.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [zR(`${MB}islandsRenameLabel`), (0, gA.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: bR,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: hN,
            onChange: WW => {
              yR(WW.target.value)
            },
            ...dN(BW, tR)
          })]
        }), "" === NW && (0, gA.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: zR(`${MB}islandsRenameEmpty`)
        }), BN(NW) && (0, gA.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: zR(`${MB}islandsNameReserved`)
        }), (0, gA.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, gA.jsx)(BA.r, {
            disabled: eW || !MW,
            onClick: BW,
            children: zR(`${MB}islandsRenameSave`)
          }), (0, gA.jsx)(BA.h, {
            onClick: tR,
            children: zR(`${MB}islandsCancel`)
          })]
        })]
      })
    }

    function zt(WW) {
      let {
        card: RW,
        canDelete: MW,
        done: CW,
        t: zR
      } = WW;
      const AW = kb(),
        [bR, yR] = (0, wW.useState)(""),
        NW = function(WW, RW) {
          return eN(WW).toLowerCase() === eN(RW).toLowerCase()
        }(bR, RW.baf2IslandName),
        eW = () => {
          NW && MW && CW(AW.sendIslandEdit(`baf2islanddelete ${RW.baf2IslandId}`))
        },
        BW = () => {
          CW(null)
        },
        tR = FN("name"),
        [TW, gR = ""] = zR(`${MB}islandsDeleteConfirm`, {
          name: tR
        }).split(tR);
      return (0, gA.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...pN(BW),
        children: [(0, gA.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, gA.jsxs)("span", {
            children: [TW, (0, gA.jsx)("strong", {
              children: RW.baf2IslandName
            }), gR]
          }), (0, gA.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: bR,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: hN,
            onChange: WW => {
              yR(WW.target.value)
            },
            ...dN(eW, BW)
          })]
        }), je(RW) && (0, gA.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: zR(`${MB}islandsDeleteLeftBack`)
        }), (0, gA.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, gA.jsx)(BA.E, {
            disabled: !NW || !MW,
            onClick: eW,
            children: zR(`${MB}islandsDeleteForGood`)
          }), (0, gA.jsx)(BA.h, {
            onClick: BW,
            children: zR(`${MB}islandsCancel`)
          })]
        })]
      })
    }

    function AB(WW) {
      let {
        members: RW,
        t: MW
      } = WW;
      const wW = RW.length;
      return (0, gA.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, gA.jsxs)("span", {
          children: [1 === wW ? MW(`${MB}islandsPlayersOne`) : MW(`${MB}islandsPlayers`, {
            count: String(wW)
          }), " "]
        }), RW.map(((WW, RW) => (0, gA.jsxs)("span", {
          className: gz()("Baf2IslandMember", {
            Here: WW.baf2MemberHere
          }),
          title: WW.baf2MemberHere ? MW(`${MB}islandsPlayerHere`) : void 0,
          children: [WW.baf2MemberName, RW < wW - 1 ? ", " : ""]
        }, WW.baf2MemberKey)))]
      })
    }

    function bt(WW) {
      let {
        card: RW,
        answered: MW,
        nowMs: CW,
        t: zR
      } = WW;
      const AW = kb(),
        [bR, yR] = (0, wW.useState)(new Map),
        NW = je(RW);
      if (!NW) return null;
      return (0, gA.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, gA.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: zR(`${MB}islandsLeftTitle`)
        }), (0, gA.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: NW.left.map((WW => {
            const wW = WW.baf2LeftKey,
              eW = ae(bR.get(wW), MW, CW),
              BW = function(WW) {
                return 1 === WW ? [`${AN}islandsLeftItemsOne`] : [`${AN}islandsLeftItems`, {
                  count: String(WW)
                }]
              }(WW.baf2LeftItems);
            return (0, gA.jsx)("li", {
              className: gz()("Baf2IslandPerson", {
                Pending: eW
              }),
              children: (0, gA.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, gA.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: WW.baf2LeftName
                }), (0, gA.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: zR(BW[0], BW[1])
                }), NW.claim && (0, gA.jsx)(BA.r, {
                  className: "Baf2IslandPersonButton",
                  disabled: eW,
                  onClick: () => {
                    (WW => {
                      const MW = AW.sendIslandEdit(`baf2coopclaim ${RW.baf2IslandId} ${WW}`);
                      yR((RW => new Map(RW).set(WW, {
                        atMs: Date.now(),
                        answer: MW
                      })))
                    })(wW)
                  },
                  children: zR(`${MB}islandsClaim`)
                })]
              })
            }, wW)
          }))
        }), NW.goThere && (0, gA.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: zR(`${MB}islandsClaimGoThere`)
        })]
      })
    }

    function yt(WW) {
      let {
        card: RW,
        view: MW,
        blocked: CW,
        maxIslands: zR,
        answered: AW,
        nowMs: bR,
        done: yR,
        openSocial: NW,
        t: eW
      } = WW;
      const BW = kb(),
        [tR, TW] = (0, wW.useState)(new Map),
        [gR, iR] = (0, wW.useState)(new Map),
        [YW, JW] = (0, wW.useState)(null),
        PW = (0, wW.useRef)(null);
      VN(PW);
      const IW = RW.baf2IslandId,
        oW = RW.baf2IslandCoop,
        lW = null !== oW && void 0 !== oW && oW.baf2CoopMembers.some((WW => WW.baf2MemberKey === YW)) ? YW : null,
        FW = function(WW, RW) {
          const MW = WW.baf2IslandCoop;
          return MW && ke(MW) || null !== RW ? void 0 : WW.baf2IslandInvitable
        }(RW, CW),
        fW = function(WW, RW) {
          const MW = WW.baf2IslandCoop;
          return MW && ke(MW) ? {
            key: `${AN}islandsCoopFull`,
            params: {
              max: String(MW.baf2CoopMax)
            }
          } : void 0 !== WW.baf2IslandInvitable && null === RW || MW && !MW.baf2CoopManageHere ? null : "degraded" === RW || "stuck" === RW ? {
            key: `${AN}islandsInviteNotLoaded`
          } : null === RW || function(WW) {
            return "notHome" === WW || "wilds" === WW || "visiting" === WW
          }(RW) || ie(RW) ? {
            key: `${AN}islandsInviteGoThere`
          } : {
            key: `${AN}islandsInviteBusy`
          }
        }(RW, CW),
        QW = () => {
          var WW;
          JW(null), null === (WW = PW.current) || void 0 === WW || WW.focus()
        };
      return (0, gA.jsxs)("div", {
        ref: PW,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...pN(null === lW ? yR : QW),
        children: [oW && (0, gA.jsxs)(gA.Fragment, {
          children: [(0, gA.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: eW(`${MB}islandsPlayersTitle`, {
              count: String(oW.baf2CoopMembers.length),
              max: String(oW.baf2CoopMax)
            })
          }), (0, gA.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: oW.baf2CoopMembers.map(((WW, RW) => {
              const wW = WW.baf2MemberKey,
                CW = ae(tR.get(wW), AW, bR);
              return (0, gA.jsxs)("li", {
                className: gz()("Baf2IslandPerson", {
                  Pending: CW
                }),
                children: [(0, gA.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, gA.jsx)("span", {
                    className: gz()("Baf2IslandPersonName", {
                      Here: WW.baf2MemberHere
                    }),
                    children: WW.baf2MemberName
                  }), WW.baf2MemberHere && (0, gA.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: eW(`${MB}islandsPlayerHere`)
                  }), 0 === RW && (0, gA.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: eW(`${MB}islandsPlayerOwner`)
                  }), MW.remove && RW > 0 && !CW && lW !== wW && (0, gA.jsx)(BA.I, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var WW;
                      JW(wW), null === (WW = PW.current) || void 0 === WW || WW.focus()
                    },
                    children: eW(`${MB}islandsRemove`)
                  })]
                }), lW === wW && (0, gA.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, gA.jsx)("p", {
                    children: fN(eW, `${MB}islandsRemoveConfirm`, {
                      player: WW.baf2MemberName
                    })
                  }), (0, gA.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, gA.jsx)(BA.E, {
                      onClick: () => {
                        (WW => {
                          const RW = BW.sendIslandEdit(`baf2coopremove ${IW} ${WW.baf2MemberKey}`);
                          TW((MW => new Map(MW).set(WW.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: RW
                          }))), QW()
                        })(WW)
                      },
                      children: eW(`${MB}islandsRemoveYes`)
                    }), (0, gA.jsx)(BA.h, {
                      onClick: QW,
                      children: eW(`${MB}islandsCancel`)
                    })]
                  })]
                })]
              }, wW)
            }))
          })]
        }), (void 0 !== FW || null !== fW) && (0, gA.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: eW(`${MB}islandsInviteTitle`)
        }), !oW && (void 0 !== FW || null !== fW) && (0, gA.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: eW(`${MB}islandsInviteShareNote`)
        }), 0 === (null === FW || void 0 === FW ? void 0 : FW.length) && (0, gA.jsx)(NB, {
          openSocial: NW,
          t: eW
        }), void 0 !== FW && FW.length > 0 && (0, gA.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: FW.map((WW => {
            const RW = !0 === WW.baf2InvitableSent || ae(gR.get(WW.baf2InvitableId), AW, bR);
            return (0, gA.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, gA.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, gA.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: WW.baf2InvitableName
                }), WW.baf2InvitableFull && !RW && (0, gA.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: eW(`${MB}islandsInviteTheirFull`, {
                    max: String(zR)
                  })
                }), (RW || !WW.baf2InvitableFull) && (0, gA.jsx)(BA.r, {
                  className: "Baf2IslandPersonButton",
                  disabled: RW,
                  onClick: () => {
                    (WW => {
                      const RW = BW.sendIslandEdit(`baf2coopinvite ${IW} ${WW}`);
                      iR((MW => new Map(MW).set(WW, {
                        atMs: Date.now(),
                        answer: RW
                      })))
                    })(WW.baf2InvitableId)
                  },
                  children: eW(RW ? `${MB}islandsInvited` : `${MB}islandsInvite`)
                })]
              })
            }, WW.baf2InvitableId)
          }))
        }), fW && (0, gA.jsx)(ve, {
          note: fW,
          t: eW
        }), (0, gA.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, gA.jsx)(BA.h, {
            onClick: yR,
            children: eW(`${MB}islandsDone`)
          })
        })]
      })
    }

    function NB(WW) {
      let {
        openSocial: RW,
        t: MW
      } = WW;
      return (0, gA.jsxs)(gA.Fragment, {
        children: [(0, gA.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: MW(RW ? `${MB}islandsInviteNobody` : `${MB}islandsInviteNobodyGuest`)
        }), RW && (0, gA.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, gA.jsx)(BA.h, {
            onClick: RW,
            children: MW("socialBar:social")
          })
        })]
      })
    }

    function eB(WW) {
      var RW, MW;
      let {
        card: CW,
        canLeave: zR,
        done: AW,
        t: bR
      } = WW;
      const yR = kb(),
        NW = (0, wW.useRef)(null);
      VN(NW);
      const eW = () => {
        AW(null)
      };
      return (0, gA.jsxs)("div", {
        ref: NW,
        tabIndex: -1,
        className: "Baf2IslandForm Leave",
        ...pN(eW),
        children: [(0, gA.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: fN(bR, `${MB}islandsLeaveConfirm`, {
            island: CW.baf2IslandName,
            owner: null !== (RW = null === (MW = CW.baf2IslandCoop) || void 0 === MW ? void 0 : MW.baf2CoopOwner) && void 0 !== RW ? RW : ""
          })
        }), (0, gA.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, gA.jsx)(BA.E, {
            disabled: !zR,
            onClick: () => {
              zR && AW(wB(yR, CW))
            },
            children: bR(`${MB}islandsLeaveYes`)
          }), (0, gA.jsx)(BA.h, {
            onClick: eW,
            children: bR(`${MB}islandsCancel`)
          })]
        })]
      })
    }

    function BB(WW) {
      return "hidden" !== WW
    }

    function tt(WW) {
      let {
        card: RW,
        keepOwn: MW,
        blocked: CW,
        maxIslands: zR,
        serverNowMs: AW,
        nowMs: bR,
        actions: yR,
        full: NW,
        waits: eW,
        answered: BW,
        mode: tR,
        setMode: TW,
        pending: gR,
        onSent: iR,
        switchTo: YW,
        Cw: JW,
        coopOn: PW,
        openSocial: IW,
        t: oW
      } = WW;
      const lW = kb(),
        FW = RW.baf2IslandActive,
        fW = FW ? null : function(WW, RW) {
          if (WW <= 0) return null;
          const MW = RW - WW;
          if (MW < Az) return [`${AN}islandsPlayedJustNow`];
          if (MW < be) return [`${AN}islandsPlayedMinutes`, {
            minutes: String(Math.floor(MW / Az))
          }];
          if (MW < ye) return [`${AN}islandsPlayedHours`, {
            hours: String(Math.floor(MW / be))
          }];
          const wW = Math.floor(MW / ye);
          return 1 === wW ? [`${AN}islandsPlayedDay`] : [`${AN}islandsPlayedDays`, {
            days: String(wW)
          }]
        }(RW.baf2IslandLastPlayedMs, AW),
        QW = void 0 === (rR = RW.baf2IslandItems) ? null : 0 === rR ? [`${AN}islandsItemsNone`] : 1 === rR ? [`${AN}islandsItemsOne`] : [`${AN}islandsItems`, {
          count: String(rR)
        }];
      var rR;
      const cR = function(WW) {
          return WW ? 1 === WW ? [`${AN}islandsWaitingOne`] : [`${AN}islandsWaiting`, {
            count: String(WW)
          }] : null
        }(RW.baf2IslandWaiting),
        XW = RW.baf2IslandUnreadable,
        jR = RW.baf2IslandCoop,
        kR = XN(RW, yR, MW, NW, PW),
        aR = (0, wW.useRef)(null);
      UN(null !== tR, aR);
      const sW = () => {
          var WW;
          TW(null), null === (WW = aR.current) || void 0 === WW || WW.focus()
        },
        dW = (WW, RW) => {
          sW(), null !== WW && iR(WW, RW)
        },
        pW = (WW, RW) => oW(`${MB}${WW}`, {
          time: ez(oW, RW)
        });
      return (0, gA.jsxs)("li", {
        ref: aR,
        tabIndex: -1,
        className: gz()("Baf2IslandCard", {
          Active: FW,
          Pending: gR,
          Shared: void 0 !== jR
        }),
        children: [(0, gA.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, gA.jsx)("strong", {
            className: "Baf2IslandName",
            children: RW.baf2IslandName
          }), FW && (0, gA.jsx)("span", {
            className: "Baf2IslandBadge",
            children: oW(`${MB}islandsOnThis`)
          }), jR && (0, gA.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: oW(`${MB}islandsShared`)
          })]
        }), "member" === (null === jR || void 0 === jR ? void 0 : jR.baf2CoopRole) && (0, gA.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: fN(oW, `${MB}islandsSharedBy`, {
            owner: jR.baf2CoopOwner
          })
        }), void 0 !== XW && (0, gA.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: oW("newer" === XW ? `${MB}islandsUnreadable` : `${MB}islandsDamaged`)
        }), "corrupt" === XW && NW && (0, gA.jsx)("p", {
          className: "Baf2IslandStats",
          children: oW(`${MB}islandsDamagedFull`)
        }), void 0 === XW && (0, gA.jsxs)(gA.Fragment, {
          children: [(0, gA.jsx)(xe, {
            tier: RW.baf2IslandTier,
            t: oW
          }), (0, gA.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, gA.jsx)("span", {
              children: 1 === RW.baf2IslandQuestsDone ? oW(`${MB}islandsQuestsDoneOne`) : oW(`${MB}islandsQuestsDone`, {
                count: String(RW.baf2IslandQuestsDone)
              })
            }), (0, gA.jsx)("span", {
              children: 1 === RW.baf2IslandMachines ? oW(`${MB}islandsMachinesOne`) : oW(`${MB}islandsMachines`, {
                count: String(RW.baf2IslandMachines)
              })
            }), QW && (0, gA.jsx)("span", {
              children: oW(QW[0], QW[1])
            }), cR && (0, gA.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: oW(cR[0], cR[1])
            }), fW && (0, gA.jsx)("span", {
              children: oW(fW[0], fW[1])
            })]
          })]
        }), jR && void 0 === jR.baf2CoopState && "people" !== tR && (0, gA.jsx)(AB, {
          members: jR.baf2CoopMembers,
          t: oW
        }), null === tR && (0, gA.jsx)(bt, {
          card: RW,
          answered: BW,
          nowMs: bR,
          t: oW
        }), kR.note && (0, gA.jsx)(ve, {
          note: kR.note,
          className: gz()({
            Unreachable: void 0 !== (null === jR || void 0 === jR ? void 0 : jR.baf2CoopState)
          }),
          t: oW
        }), "rename" === tR && (0, gA.jsx)(CB, {
          card: RW,
          canRename: "enabled" === kR.rename,
          done: dW,
          t: oW
        }), "delete" === tR && (0, gA.jsx)(zt, {
          card: RW,
          canDelete: "enabled" === kR.delete,
          done: WW => {
            dW(WW, jR ? "delete" : void 0)
          },
          t: oW
        }), "people" === tR && (0, gA.jsx)(yt, {
          card: RW,
          view: kR,
          blocked: CW,
          maxIslands: zR,
          answered: BW,
          nowMs: bR,
          done: sW,
          openSocial: IW,
          t: oW
        }), "Cw" === tR && (0, gA.jsx)(eB, {
          card: RW,
          canLeave: "enabled" === kR.Cw,
          done: WW => {
            dW(WW, "Cw"), null !== WW && FW && JW()
          },
          t: oW
        }), null === tR && !gR && (0, gA.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": RW.baf2IslandName,
          children: [BB(kR.switch) && (0, gA.jsx)(BA.r, {
            disabled: "enabled" !== kR.switch,
            onClick: YW,
            children: eW.switch > 0 ? pW("islandsSwitchIn", eW.switch) : oW(`${MB}islandsSwitch`)
          }), BB(kR.rename) && (0, gA.jsx)(BA.h, {
            disabled: "enabled" !== kR.rename,
            onClick: () => {
              TW("rename")
            },
            children: oW(`${MB}islandsRename`)
          }), BB(kR.people) && (0, gA.jsx)(BA.h, {
            disabled: "enabled" !== kR.people,
            onClick: () => {
              TW("people")
            },
            children: oW("players" === kR.peopleLabel ? `${MB}islandsPlayersButton` : `${MB}islandsInviteButton`)
          }), BB(kR.dismiss) && (0, gA.jsx)(BA.h, {
            disabled: "enabled" !== kR.dismiss,
            onClick: () => {
              iR(wB(lW, RW), "dismiss"), FW && JW()
            },
            children: oW(`${MB}islandsDismiss`)
          }), BB(kR.Cw) && (0, gA.jsx)(BA.I, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== kR.Cw,
            onClick: () => {
              TW("Cw")
            },
            children: FW && eW.switch > 0 ? pW("islandsLeaveIn", eW.switch) : oW(`${MB}islandsLeave`)
          }), BB(kR.delete) && (0, gA.jsx)(BA.I, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== kR.delete,
            onClick: () => {
              TW("delete")
            },
            children: eW.change > 0 && kR.deleteWaits ? pW("islandsDeleteIn", eW.change) : oW(`${MB}islandsDelete`)
          })]
        })]
      })
    }
    const TB = "buildAFactory2Game:";

    function gt(WW) {
      let {
        invite: RW,
        actions: MW,
        full: CW,
        maxIslands: zR,
        waitSeconds: AW,
        focus: bR,
        focused: yR,
        join: NW,
        decline: eW,
        t: BW
      } = WW;
      const [tR, TW] = (0, wW.useState)(!1), gR = (0, wW.useRef)(null);
      UN(tR, gR), (0, wW.useEffect)((() => {
        var WW;
        bR && (TW(!0), null === (WW = gR.current) || void 0 === WW || WW.focus(), yR())
      }), [bR, yR]);
      const iR = function(WW, RW, MW, wW, CW) {
          return MW ? {
            join: !1,
            note: {
              key: `${AN}islandsJoinTooMany`,
              params: {
                max: String(wW)
              }
            }
          } : WW.baf2InvitePlayers >= CW ? {
            join: !1,
            note: {
              key: `${AN}islandsJoinFull`
            }
          } : {
            join: RW.switch,
            note: null
          }
        }(RW, MW, CW, zR, 10),
        YW = RW.baf2InviteIsland,
        JW = RW.baf2InvitePlayers,
        PW = () => {
          var WW;
          TW(!1), null === (WW = gR.current) || void 0 === WW || WW.focus()
        },
        IW = AW > 0 && null === iR.note ? BW(`${TB}islandsJoinIn`, {
          time: ez(BW, AW)
        }) : BW(`${TB}islandsJoin`);
      return (0, gA.jsxs)("li", {
        ref: gR,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...tR ? pN(PW) : {},
        children: [(0, gA.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, gA.jsx)("strong", {
            className: "Baf2IslandName",
            children: YW
          })
        }), (0, gA.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: fN(BW, `${TB}islandsInvitedBy`, {
            owner: RW.baf2InviteOwner
          })
        }), (0, gA.jsx)(xe, {
          tier: RW.baf2InviteTier,
          t: BW
        }), (0, gA.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, gA.jsx)("span", {
            children: 1 === JW ? BW(`${TB}islandsPlayersCountOne`) : BW(`${TB}islandsPlayersCount`, {
              count: String(JW)
            })
          })
        }), iR.note && (0, gA.jsx)(ve, {
          note: iR.note,
          t: BW
        }), tR && (0, gA.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: fN(BW, `${TB}islandsJoinConfirm`, {
            island: YW
          })
        }), !tR && (0, gA.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": YW,
          children: [(0, gA.jsx)(BA.r, {
            disabled: !iR.join,
            onClick: () => {
              var WW;
              TW(!0), null === (WW = gR.current) || void 0 === WW || WW.focus()
            },
            children: IW
          }), (0, gA.jsx)(BA.h, {
            onClick: eW,
            children: BW(`${TB}islandsDecline`)
          })]
        }), tR && (0, gA.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, gA.jsx)(BA.r, {
            disabled: !iR.join,
            onClick: NW,
            children: BW(`${TB}islandsJoinYes`)
          }), (0, gA.jsx)(BA.h, {
            onClick: PW,
            children: BW(`${TB}islandsCancel`)
          })]
        })]
      })
    }

    function it(WW) {
      let {
        invites: RW,
        actions: MW,
        full: wW,
        maxIslands: CW,
        waitSeconds: zR,
        focus: AW,
        focused: bR,
        Cw: yR,
        declined: NW,
        t: eW
      } = WW;
      const BW = kb();
      return (0, gA.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, gA.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: eW(`${TB}islandsInvitesTitle`)
        }), (0, gA.jsx)("ul", {
          className: "Baf2IslandCards",
          children: RW.map((WW => {
            const RW = WW.baf2InviteId;
            return (0, gA.jsx)(gt, {
              invite: WW,
              actions: MW,
              full: wW,
              maxIslands: CW,
              waitSeconds: zR,
              focus: AW === RW,
              focused: bR,
              join: () => {
                BW.send(`baf2coopaccept ${RW}`), yR()
              },
              decline: () => {
                BW.send(`baf2coopdecline ${RW}`), NW(RW)
              },
              t: eW
            }, RW)
          }))
        })]
      })
    }
    const YB = "buildAFactory2Game:";

    function JB(WW) {
      let {
        cards: RW,
        activeName: MW,
        canStart: CW,
        waitSeconds: zR,
        Cw: AW,
        t: bR
      } = WW;
      const yR = kb(),
        [NW, eW] = (0, wW.useState)(!1),
        [BW, tR] = (0, wW.useState)(""),
        TW = (0, wW.useRef)(null);
      UN(NW, TW), (0, wW.useEffect)((() => {
        var WW;
        NW && (null === (WW = TW.current) || void 0 === WW || WW.focus())
      }), [NW]);
      const gR = te(RW),
        iR = eN(BW),
        YW = BN(iR),
        JW = () => {
          CW && !YW && (yR.send("" === iR || iR === gR ? HW : `${HW} ${iR}`), AW())
        },
        PW = () => {
          var WW;
          eW(!1), null === (WW = TW.current) || void 0 === WW || WW.focus()
        };
      return (0, gA.jsxs)("li", {
        ref: TW,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...NW ? pN(PW) : {},
        children: [(0, gA.jsx)("strong", {
          className: "Baf2IslandName",
          children: bR(`${YB}islandsNewTitle`)
        }), !NW && (0, gA.jsx)("p", {
          className: "Baf2IslandStats",
          children: bR(`${YB}islandsNewNote`)
        }), NW && (0, gA.jsxs)(gA.Fragment, {
          children: [(0, gA.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: fN(bR, `${YB}islandsNewConfirm`, {
              name: MW
            })
          }), (0, gA.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [bR(`${YB}islandsNewNameLabel`), (0, gA.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: BW,
              placeholder: gR,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: hN,
              onChange: WW => {
                tR(WW.target.value)
              },
              ...dN(JW, PW)
            })]
          }), YW && (0, gA.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: bR(`${YB}islandsNameReserved`)
          })]
        }), (0, gA.jsxs)("div", {
          className: gz()("Baf2IslandButtons", {
            Stacked: NW
          }),
          children: [(0, gA.jsx)(BA.r, {
            disabled: !CW || NW && YW,
            onClick: () => {
              if (!NW) return tR(gR), void eW(!0);
              JW()
            },
            children: zR > 0 ? bR(`${YB}islandsNewIn`, {
              time: ez(bR, zR)
            }) : bR(NW ? `${YB}islandsNewConfirmButton` : `${YB}islandsNew`)
          }), NW && (0, gA.jsx)(BA.h, {
            onClick: PW,
            children: bR(`${YB}islandsCancel`)
          })]
        })]
      })
    }

    function PB(WW) {
      var RW, MW;
      let {
        message: CW,
        arrivedAtMs: zR,
        close: AW,
        Cw: bR,
        openSocial: yR
      } = WW;
      const NW = kb(),
        {
          t: eW
        } = (0, PC.C)(),
        BW = me(1e3),
        [tR, TW] = (0, wW.useState)(null),
        [gR, iR] = (0, wW.useState)(new Map),
        [YW, JW] = (0, wW.useState)(new Set),
        PW = CW.baf2IslandCards,
        IW = function(WW, RW, MW, wW) {
          return (null !== WW && void 0 !== WW ? WW : []).filter((WW => RW + WW.baf2InviteLeftMs > MW && !wW.has(WW.baf2InviteId)))
        }(CW.baf2IslandsInvites, zR, BW, YW),
        oW = IW.map((WW => WW.baf2InviteId)).join(" "),
        lW = (0, wW.useRef)(null),
        FW = EN(lW);
      (0, wW.useEffect)((() => {
        var WW, RW;
        null !== (WW = lW.current) && void 0 !== WW && WW.contains(document.activeElement) || (null === (RW = lW.current) || void 0 === RW || RW.focus())
      }), [CW, oW]), (0, wW.useEffect)((() => {
        iR((WW => function(WW, RW, MW, wW) {
          const CW = new Map;
          for (const zR of RW) {
            const RW = WW.get(zR.baf2IslandId);
            RW && (void 0 !== RW.untilGone || wW < RW.answer) && IN(RW, zR, MW) && CW.set(zR.baf2IslandId, RW)
          }
          return CW.size === WW.size ? WW : CW
        }(WW, CW.baf2IslandCards, Date.now(), CW.baf2IslandsAnswered)))
      }), [CW]);
      const fW = NN(zR, CW.baf2IslandsWaitMs, BW),
        QW = CW.baf2IslandsBlocked,
        rR = YN(QW, fW),
        cR = function(WW, RW) {
          const MW = YN(WW, 0);
          return {
            switch: MW.switch ? RW : 0,
            change: MW.change ? RW : 0
          }
        }(QW, fW),
        XW = PW.length >= CW.baf2IslandsMax,
        jR = PW.length > 0,
        kR = function(WW, RW, MW) {
          return WW + Math.max(0, MW - RW)
        }(CW.baf2IslandsNowMs, zR, BW),
        aR = null !== (RW = null === (MW = PW.find((WW => WW.baf2IslandActive))) || void 0 === MW ? void 0 : MW.baf2IslandName) && void 0 !== RW ? RW : "",
        sW = function(WW) {
          const RW = WW.filter(ce).length;
          return RW <= 1 && RW < WW.length
        }(PW),
        dW = !0 === CW.baf2IslandsCoop,
        pW = function(WW, RW) {
          const MW = WW.find((WW => WW.baf2IslandActive)),
            wW = null === MW || void 0 === MW ? void 0 : MW.baf2IslandCoop;
          return MW && "member" === (null === wW || void 0 === wW ? void 0 : wW.baf2CoopRole) ? {
            key: `${AN}islandsKeepOwnMember`,
            names: {
              owner: wW.baf2CoopOwner,
              island: MW.baf2IslandName
            }
          } : {
            key: RW ? `${AN}islandsKeepOwn` : `${AN}islandsKeepOwnSolo`
          }
        }(PW, dW),
        [hW, UW] = (0, wW.useState)(null);
      (0, wW.useEffect)((() => {
        void 0 !== CW.baf2IslandsFocusInvite && UW(CW.baf2IslandsFocusInvite)
      }), [CW]);
      const EW = (0, wW.useCallback)((() => {
          UW(null)
        }), []),
        VW = tR ? PW.find((WW => WW.baf2IslandId === tR.id)) : void 0,
        mR = tR && VW && "hidden" !== XN(VW, rR, sW, XW, dW)[tR.mode] ? tR : null;
      return (0, gA.jsx)(eA.b, {
        close: AW,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, gA.jsxs)("section", {
          ref: lW,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: FW ? {
            marginTop: `${FW.marginTop}px`,
            maxHeight: `${FW.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, gA.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, gA.jsxs)("div", {
              children: [(0, gA.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: eW(`${YB}islandsTitle`)
              }), jR && (0, gA.jsx)("p", {
                children: eW(`${YB}islandsSubtitle`, {
                  count: String(PW.length),
                  max: String(CW.baf2IslandsMax)
                })
              })]
            }), (0, gA.jsx)(BA.l, {
              ariaLabel: eW(`${YB}islandsClose`),
              onClick: AW
            })]
          }), (0, gA.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== QW && (0, gA.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: fN(eW, TN(QW, ge(PW)), {
                island: aR
              })
            }), jR && IW.length > 0 && (0, gA.jsx)(it, {
              invites: IW,
              actions: rR,
              full: XW,
              maxIslands: CW.baf2IslandsMax,
              waitSeconds: cR.switch,
              focus: hW,
              focused: EW,
              Cw: bR,
              declined: WW => {
                JW((RW => new Set(RW).add(WW)))
              },
              t: eW
            }), jR && (0, gA.jsxs)(gA.Fragment, {
              children: [XW && (0, gA.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: eW(`${YB}islandsFull`, {
                  max: String(CW.baf2IslandsMax)
                })
              }), (0, gA.jsx)("p", {
                className: "Baf2IslandsNote",
                children: fN(eW, pW.key, pW.names)
              }), (0, gA.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [PW.map((WW => {
                  const RW = WW.baf2IslandId;
                  return (0, gA.jsx)(tt, {
                    card: WW,
                    keepOwn: sW,
                    coopOn: dW,
                    openSocial: yR,
                    blocked: QW,
                    maxIslands: CW.baf2IslandsMax,
                    serverNowMs: kR,
                    nowMs: BW,
                    actions: rR,
                    full: XW,
                    waits: cR,
                    answered: CW.baf2IslandsAnswered,
                    mode: (null === mR || void 0 === mR ? void 0 : mR.id) === RW ? mR.mode : null,
                    setMode: WW => {
                      TW(null === WW ? null : {
                        id: RW,
                        mode: WW
                      })
                    },
                    pending: IN(gR.get(RW), WW, BW),
                    onSent: (MW, wW) => {
                      iR((CW => {
                        const zR = {
                          atMs: Date.now(),
                          from: WW.baf2IslandName,
                          answer: MW
                        };
                        return new Map(CW).set(RW, wW ? {
                          ...zR,
                          untilGone: wW
                        } : zR)
                      }))
                    },
                    Cw: bR,
                    switchTo: () => {
                      NW.send(`baf2islandswitch ${RW}`), bR()
                    },
                    t: eW
                  }, RW)
                })), !XW && (0, gA.jsx)(JB, {
                  cards: PW,
                  activeName: aR,
                  canStart: rR.change,
                  waitSeconds: cR.change,
                  Cw: bR,
                  t: eW
                })]
              })]
            })]
          })]
        })
      })
    }
    const IB = ["all", "recent", "Az", "bars", "parts", "nuclear", "farm", "other"],
      oB = new Set([...Object.keys(xM), ...[...rM.Press.recipes, ...rM["Wire Mill"].recipes].map((WW => WW.output))]),
      lB = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      FB = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      fB = / Bar$|Alloy$/,
      QB = /Porkchop|Beef|Mutton|Venison|Steak/,
      rt = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;

    function ct(WW) {
      let {
        item: RW,
        name: MW,
        amount: wW,
        selected: CW,
        small: zR,
        onPick: AW
      } = WW;
      return (0, gA.jsxs)("button", {
        type: "button",
        className: gz()("Baf2TermTile", {
          On: CW,
          Small: zR
        }),
        "aria-label": `${MW}: ${wW}`,
        "aria-pressed": CW,
        onClick: AW,
        children: [(0, gA.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, gA.jsx)(oC.c, {
            itemName: RW,
            amount: 0
          })
        }), (0, gA.jsx)("span", {
          className: "Baf2TermCount",
          children: yA(wW, 1e4)
        }), !zR && (0, gA.jsx)("span", {
          className: "Baf2TermName",
          children: MW
        })]
      })
    }

    function XB(WW) {
      let {
        store: RW,
        close: MW,
        send: CW
      } = WW;
      const {
        t: zR
      } = (0, PC.C)(), {
        isTouchScreen: AW
      } = (0, BC.i)(["isTouchScreen"]);
      ! function(WW) {
        const [RW, MW] = (0, wW.useState)(WW.version);
        (0, wW.useEffect)((() => (MW(WW.version), WW.subscribe((() => {
          MW(WW.version)
        })))), [WW])
      }(RW);
      const [bR, yR] = (0, wW.useState)("all"), [NW, eW] = (0, wW.useState)(!1), [BW, tR] = (0, wW.useState)(""), [TW, gR] = (0, wW.useState)(""), [iR, YW] = (0, wW.useState)(null), [JW, PW, IW] = function() {
        const WW = (0, wW.useRef)(null),
          [RW, MW] = (0, wW.useState)(!1),
          CW = () => {
            const RW = WW.current;
            MW(null !== RW && RW.scrollLeft + RW.clientWidth < RW.scrollWidth - 1)
          };
        return (0, wW.useEffect)(CW), (0, wW.useEffect)((() => {
          const RW = WW.current;
          if (!RW) return;
          const MW = new ResizeObserver(CW);
          return MW.observe(RW), () => {
            MW.disconnect()
          }
        }), []), [WW, RW, CW]
      }(), oW = (0, wW.useMemo)((() => new Map), [zR]), lW = WW => {
        let RW = oW.get(WW);
        return void 0 === RW && (RW = function(WW, RW) {
          const MW = /^(.+) \((.+)\)$/.exec(WW);
          return MW ? RW(MW[2], MW[1]) : WW
        }(LC(zR, WW), ((WW, RW) => zR("buildAFactory2Game:terminalTileKind", {
          kind: WW,
          base: RW
        }))), oW.set(WW, RW)), RW
      }, FW = RW.isReadOnly(), fW = RW.recent(), QW = RW.items(), rR = TW.trim().toLowerCase(), cR = ("recent" === bR ? fW : QW).filter((WW => {
        const RW = lW(WW);
        return ("all" === bR || "recent" === bR || function(WW) {
          return Mz(WW) ? "farm" : lB.test(WW) ? "nuclear" : fB.test(WW) ? "bars" : QB.test(WW) ? "farm" : FB.test(WW) ? "Az" : oB.has(WW) ? "parts" : rt.test(WW) ? "farm" : "other"
        }(WW) === bR) && ("" === rR || RW.toLowerCase().includes(rR)) && ("" === BW || RW.toUpperCase().startsWith(BW))
      })), XW = new Set(QW.map((WW => lW(WW).charAt(0).toUpperCase()))), jR = "recent" !== bR && fW.length > 0, kR = function(WW, RW) {
        return null !== WW && RW.includes(WW) ? WW : null
      }(iR, jR ? [...cR, ...fW] : cR), aR = null === kR ? 0 : RW.amount(kR), sW = WW => {
        YW(kR === WW ? null : WW)
      }, dW = WW => {
        null !== kR && aR > 0 && CW(RW.take(WW, kR))
      }, pW = "" !== BW ? zR("buildAFactory2Game:terminalEmptyLetter", {
        letter: BW
      }) : "" !== rR ? zR("buildAFactory2Game:terminalEmptySearch", {
        query: TW
      }) : zR("buildAFactory2Game:terminalEmpty");
      return (0, gA.jsx)(eA.b, {
        close: MW,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, gA.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, gA.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, gA.jsxs)("div", {
              children: [(0, gA.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: zR(RW.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, gA.jsx)("p", {
                children: zR("buildAFactory2Game:terminalSubtitle", {
                  count: String(RW.siloCount())
                })
              })]
            }), (0, gA.jsx)(BA.l, {
              onClick: MW
            })]
          }), (0, gA.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, gA.jsxs)("div", {
              className: "Baf2TermTools",
              children: [(0, gA.jsx)("div", {
                ref: JW,
                className: gz()("Baf2TermChips", {
                  MoreRight: PW
                }),
                onScroll: IW,
                children: NW ? (0, gA.jsxs)(gA.Fragment, {
                  children: [(0, gA.jsx)("button", {
                    type: "button",
                    "aria-label": zR("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      eW(!1), tR("")
                    },
                    children: "\u2190"
                  }), [...XW].sort().map((WW => (0, gA.jsx)("button", {
                    type: "button",
                    className: gz()({
                      On: BW === WW
                    }),
                    onClick: () => {
                      tR(BW === WW ? "" : WW)
                    },
                    children: WW
                  }, WW)))]
                }) : (0, gA.jsxs)(gA.Fragment, {
                  children: [(0, gA.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      eW(!0)
                    },
                    children: zR("buildAFactory2Game:terminalLetters")
                  }), IB.map((WW => (0, gA.jsx)("button", {
                    type: "button",
                    className: gz()({
                      On: bR === WW
                    }),
                    onClick: () => {
                      yR(WW)
                    },
                    children: zR(`buildAFactory2Game:terminalChip_${WW}`)
                  }, WW)))]
                })
              }), !AW && (0, gA.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: TW,
                placeholder: zR("buildAFactory2Game:terminalSearch"),
                "aria-label": zR("buildAFactory2Game:terminalSearch"),
                onChange: WW => {
                  gR(WW.target.value)
                },
                onKeyDown: WW => {
                  WW.stopPropagation()
                }
              }), (0, gA.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": zR("buildAFactory2Game:terminalResort"),
                title: zR("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  RW.resort()
                },
                children: "\u21c5"
              })]
            }), jR && (0, gA.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, gA.jsx)("span", {
                children: zR("buildAFactory2Game:terminalChip_recent")
              }), fW.map((WW => (0, gA.jsx)(ct, {
                item: WW,
                name: lW(WW),
                amount: RW.amount(WW),
                selected: kR === WW,
                small: !0,
                onPick: () => {
                  sW(WW)
                }
              }, WW)))]
            }), (0, gA.jsx)("div", {
              className: "Baf2TermTiles",
              children: cR.length > 0 ? cR.map((WW => (0, gA.jsx)(ct, {
                item: WW,
                name: lW(WW),
                amount: RW.amount(WW),
                selected: kR === WW,
                onPick: () => {
                  sW(WW)
                }
              }, WW))) : (0, gA.jsx)("p", {
                className: "Baf2TermEmpty",
                children: pW
              })
            }), (0, gA.jsxs)("div", {
              className: "Baf2TermActions",
              children: [(0, gA.jsx)("span", {
                className: "Baf2TermPicked",
                children: FW ? (0, gA.jsxs)(gA.Fragment, {
                  children: [null !== kR && aR > 0 ? lW(kR) : zR("buildAFactory2Game:terminalVisiting"), (0, gA.jsx)("small", {
                    children: zR("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== kR && aR > 0 ? (0, gA.jsxs)(gA.Fragment, {
                  children: [lW(kR), (0, gA.jsx)("small", {
                    children: zR("buildAFactory2Game:terminalStored", {
                      amount: aR.toLocaleString()
                    })
                  })]
                }) : zR("buildAFactory2Game:terminalPick")
              }), !FW && (0, gA.jsxs)(gA.Fragment, {
                children: [(0, gA.jsx)(BA.h, {
                  className: "Baf2TermTake",
                  disabled: 0 === aR,
                  onClick: () => {
                    dW("one")
                  },
                  children: zR("buildAFactory2Game:terminalTakeOne")
                }), (0, gA.jsx)(BA.h, {
                  className: "Baf2TermTake",
                  disabled: 0 === aR,
                  onClick: () => {
                    dW("stack")
                  },
                  children: zR("buildAFactory2Game:terminalTakeStack", {
                    amount: String(99)
                  })
                }), (0, gA.jsx)(BA.m, {
                  className: "Baf2TermTake",
                  disabled: 0 === aR,
                  onClick: () => {
                    dW("fill")
                  },
                  children: zR("buildAFactory2Game:terminalFill")
                })]
              })]
            })]
          })]
        })
      })
    }

    function jt(WW) {
      let {
        kind: RW,
        icon: MW,
        label: wW,
        number: CW,
        preview: zR,
        note: AW,
        tone: bR = null,
        share: yR,
        onExplain: NW
      } = WW;
      return (0, gA.jsxs)("button", {
        type: "button",
        className: gz()("NxLane", RW, {
          Warn: "warn" === bR,
          Danger: "danger" === bR
        }),
        onClick: NW,
        children: [(0, gA.jsxs)("span", {
          className: "NxLaneHead",
          children: [MW, (0, gA.jsx)("span", {
            className: "NxLaneLabel",
            children: wW
          })]
        }), (0, gA.jsxs)("span", {
          className: "NxLaneNum",
          children: [CW, zR && (0, gA.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", zR]
          })]
        }), (0, gA.jsx)("span", {
          className: "NxLaneNote",
          children: AW
        }), void 0 !== yR && (0, gA.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, yR)) + "%"
          }
        })]
      })
    }

    function kt(WW) {
      let {
        kind: RW,
        step: MW,
        short: wW,
        planned: CW
      } = WW;
      return (0, gA.jsx)("i", {
        className: gz()("NxPipe", RW, `Step${MW}`, {
          Short: wW,
          Planned: CW
        }),
        "aria-hidden": "true"
      })
    }

    function atW(WW) {
      let {
        max: RW,
        bands: MW,
        ticks: wW,
        now: CW,
        settle: zR,
        settleTone: AW,
        onExplain: bR
      } = WW;
      const yR = WW => Math.max(0, Math.min(RW, WW)) / RW * 100 + "%";
      let NW = 0;
      return (0, gA.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: bR,
        children: [(0, gA.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [MW.map((WW => {
            const RW = {
              bottom: yR(NW),
              height: `calc(${yR(WW.upTo)} - ${yR(NW)})`
            };
            return NW = WW.upTo, (0, gA.jsx)("i", {
              className: gz()("NxGaugeBand", WW.kind),
              style: RW
            }, WW.kind)
          })), null !== CW && (0, gA.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: yR(CW)
            }
          }), void 0 !== zR && null !== zR && (0, gA.jsx)("i", {
            className: gz()("NxGaugeSettle", {
              Bad: "bad" === AW
            }),
            style: {
              bottom: yR(zR)
            }
          })]
        }), (0, gA.jsx)("span", {
          className: "NxGaugeTicks",
          children: wW.map((WW => (0, gA.jsx)("small", {
            style: {
              bottom: yR(WW)
            },
            children: WW
          }, WW)))
        })]
      })
    }

    function sB(WW) {
      const [RW, MW] = (0, wW.useState)(null), [CW, zR] = (0, wW.useState)((() => {
        try {
          return null === window.localStorage.getItem(WW)
        } catch {
          return !1
        }
      })), AW = (0, wW.useRef)(null);
      (0, wW.useEffect)((() => () => {
        null !== AW.current && clearTimeout(AW.current)
      }), []);
      const bR = (0, wW.useCallback)((RW => {
          MW(RW), zR(!1);
          try {
            window.localStorage.setItem(WW, "1")
          } catch {}
          null !== AW.current && clearTimeout(AW.current), AW.current = setTimeout((() => {
            AW.current = null, MW(null)
          }), 5e3)
        }), [WW]),
        yR = (0, wW.useCallback)(((RW, MW) => {
          const wW = `${WW}:${RW}`;
          try {
            if (null !== window.localStorage.getItem(wW)) return;
            window.localStorage.setItem(wW, "1")
          } catch {
            return
          }
          bR(MW)
        }), [bR, WW]);
      return {
        explained: RW,
        hinting: CW,
        explain: bR,
        explainOnce: yR
      }
    }

    function dB(WW) {
      let {
        text: RW,
        tone: MW,
        explained: wW
      } = WW;
      return (0, gA.jsxs)("p", {
        className: gz()("NxStatus", null === wW ? MW : "Explain"),
        "aria-live": "polite",
        children: [null !== wW && (0, gA.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== wW && void 0 !== wW ? wW : RW]
      })
    }
    const pB = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function hB(WW, RW) {
      const MW = Number(WW[RW]);
      return 1 === MW || 2 === MW || 3 === MW ? MW : 0
    }

    function UB(WW) {
      return !!By("reactor", WW.baf2RxNeed) || void 0 !== WW.baf2RxLayout && WW.baf2RxNeed.some((WW => {
        let [RW, MW] = WW;
        return MW > 0 && pB.includes(RW)
      }))
    }
    const EB = "buildAFactory2Game:";

    function VB(WW) {
      let {
        status: RW,
        store: MW,
        busy: wW
      } = WW;
      const {
        t: CW
      } = (0, PC.C)();
      return function(WW) {
        return 0 !== (WW.baf2RxFlags & yM) && (!WW.baf2RxFormed || void 0 !== WW.baf2RxLayout)
      }(RW) ? (0, gA.jsx)(BA.m, {
        disabled: !UB(RW) || wW,
        onClick: () => {
          MW.tap("fill", (() => {
            MW.send("fill")
          }))
        },
        children: CW(void 0 !== RW.baf2RxLayout ? `${EB}rxFillLayout` : `${EB}rxFill`)
      }) : null
    }

    function mt(WW) {
      let {
        status: RW,
        store: MW,
        readOnly: CW,
        bare: zR = !1
      } = WW;
      const {
        t: AW
      } = (0, PC.C)(), bR = RW.baf2RxLayout, [yR, NW, eW] = RW.baf2RxDims, BW = (0, wW.useMemo)((() => {
        if (void 0 === bR) return 0;
        const WW = Uint8Array.from(bR, ((WW, RW) => hB(bR, RW)));
        return Kb([yR - 2, NW - 2, eW - 2], WW).max
      }), [bR, yR, NW, eW]);
      return void 0 === bR ? null : (0, gA.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!zR && (0, gA.jsx)("span", {
          className: "Baf2RxHint",
          children: AW(`${EB}rxLayoutLine`, {
            amount: Py(BW)
          })
        }), !CW && (0, gA.jsx)(BA.h, {
          onClick: () => {
            MW.send("layout", 0)
          },
          children: AW(`${EB}rxLayoutHide`)
        })]
      })
    }
    const xt = "buildAFactory2Game:",
      vt = {
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

    function KB(WW) {
      let {
        id: RW,
        title: MW,
        body: wW,
        bodyParams: CW,
        yes: zR,
        cancel: AW,
        confirm: bR
      } = WW;
      const {
        t: yR
      } = (0, PC.C)();
      return (0, gA.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": RW,
        children: [(0, gA.jsx)("h3", {
          id: RW,
          children: yR(MW)
        }), (0, gA.jsx)("p", {
          children: yR(wW, CW)
        }), (0, gA.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, gA.jsx)(BA.j, {
            onClick: AW,
            children: yR(`${xt}rxCancel`)
          }), (0, gA.jsx)(BA.E, {
            onClick: bR,
            children: yR(zR)
          })]
        })]
      })
    }

    function uB(WW) {
      const [RW, MW] = (0, wW.useState)((() => WW.get()));
      return (0, wW.useEffect)((() => (MW(WW.get()), WW.subscribe((() => {
        MW(WW.get())
      })))), [WW]), RW
    }

    function OB(WW) {
      let {
        kind: RW,
        cap: MW,
        busy: CW = !1,
        whyNot: zR = null,
        apart: AW
      } = WW;
      const {
        t: bR
      } = (0, PC.C)(), [yR, NW] = (0, wW.useState)(!1), eW = null !== zR, BW = (0, wW.useRef)(null);
      if ((0, wW.useEffect)((() => {
          eW && NW(!1)
        }), [eW]), (0, wW.useLayoutEffect)((() => {
          var WW;
          const RW = null === (WW = BW.current) || void 0 === WW ? void 0 : WW.firstElementChild;
          eW ? null === RW || void 0 === RW || RW.setAttribute("aria-disabled", "true") : CW || null === RW || void 0 === RW || RW.removeAttribute("aria-disabled")
        })), !yR || eW) return (0, gA.jsx)("span", {
        ref: BW,
        className: "Baf2RxApartWrap",
        children: (0, gA.jsx)(BA.j, {
          disabled: CW,
          className: gz()({
            Baf2RxNotYet: eW
          }),
          onClick: () => {
            zR ? zR() : NW(!0)
          },
          children: bR(`${xt}rxApart`)
        })
      });
      const tR = "battery" === RW,
        TW = void 0 === MW ? `${xt}batApartConfirmBodyPlan` : `${xt}batApartConfirmBody`;
      return (0, gA.jsx)(KB, {
        id: `baf2ApartTitle_${RW}`,
        title: tR ? `${xt}batApartConfirmTitle` : `${xt}rxApartConfirmTitle`,
        body: tR ? TW : `${xt}rxApartConfirmBody`,
        bodyParams: void 0 === MW ? void 0 : {
          cap: MW
        },
        yes: `${xt}rxApart`,
        cancel: () => {
          NW(!1)
        },
        confirm: () => {
          NW(!1), AW()
        }
      })
    }

    function nB(WW) {
      let {
        mood: RW,
        big: MW
      } = WW;
      const wW = vt[RW],
        CW = [];
      return wW.rows.forEach(((WW, RW) => {
        for (let MW = 0; MW < WW.length; MW++) "." !== WW[MW] && CW.push((0, gA.jsx)("rect", {
          x: MW + 1,
          y: RW + 1,
          width: 1,
          height: 1,
          fill: "w" === WW[MW] ? "#8fd3ff" : wW.colour
        }, `${MW},${RW}`))
      })), (0, gA.jsxs)("svg", {
        className: gz()("Baf2RxFace", {
          Big: MW,
          Alarm: "alarm" === RW
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, gA.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, gA.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), CW]
      })
    }

    function GB(WW) {
      return bA(WW, "+").replace("+", "")
    }

    function LB(WW) {
      let {
        kind: RW,
        dims: MW,
        cap: wW,
        disabled: CW,
        compact: zR,
        resize: AW
      } = WW;
      const {
        t: bR
      } = (0, PC.C)(), {
        min: yR,
        max: NW
      } = aw(RW), eW = Math.min(wW, NW), BW = [`${xt}rxWide`, `${xt}rxTall`, `${xt}rxDeep`], tR = {
        w: String(MW[0]),
        h: String(MW[1]),
        d: String(MW[2]),
        blocks: String(Jy(RW, MW))
      };
      return (0, gA.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, gA.jsx)("div", {
          className: "Baf2RxSteppers",
          children: MW.map(((WW, RW) => {
            const zR = wW => {
                const CW = [MW[0], MW[1], MW[2]];
                CW[RW] = WW + wW, AW(CW)
              },
              tR = WW >= eW;
            return (0, gA.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, gA.jsx)("button", {
                type: "button",
                "aria-label": bR(`${xt}rxSmaller`),
                disabled: CW || WW <= yR,
                onClick: () => {
                  zR(-1)
                },
                children: "\u2212"
              }), (0, gA.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [WW, (0, gA.jsx)("small", {
                  children: bR(BW[RW])
                })]
              }), (0, gA.jsx)("button", {
                type: "button",
                "aria-label": bR(`${xt}rxBigger`),
                disabled: CW || tR,
                onClick: () => {
                  zR(1)
                },
                children: tR && wW < NW ? "\ud83d\udd12" : "+"
              })]
            }, BW[RW])
          }))
        }), !zR && (0, gA.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === RW ? bR(`${xt}rxSizeLine`, {
            ...tR,
            water: String(Yy(MW))
          }) : bR(`${xt}batSizeLine`, tR)
        })]
      })
    }

    function HB(WW) {
      let {
        on: RW,
        label: MW,
        disabled: wW,
        locked: CW,
        pending: zR,
        toggle: AW
      } = WW;
      return (0, gA.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": RW,
        disabled: wW,
        "aria-disabled": CW || void 0,
        className: gz()("Baf2RxSwitch", {
          On: RW,
          Locked: CW,
          Pending: zR
        }),
        onClick: AW,
        children: [(0, gA.jsx)("span", {
          className: "Baf2RxKnob"
        }), MW]
      })
    }
    const DB = "buildAFactory2Game:",
      qt = .95;

    function ZB(WW, RW) {
      return 0 !== (WW.baf2RxFlags & RW)
    }

    function SB(WW) {
      return "cryo" === WW ? ZW.n : ZW.r
    }

    function Wt(WW) {
      var RW, MW, wW, CW, zR, AW, bR, yR, NW;
      return WW.baf2RxCryo ? {
        tw: "cryo",
        usePerS: null !== (CW = WW.baf2RxCryoUse) && void 0 !== CW ? CW : 0,
        needPerS: null !== (zR = WW.baf2RxCryoNeed) && void 0 !== zR ? zR : 0,
        inPerS: null !== (AW = WW.baf2RxCryoIn) && void 0 !== AW ? AW : 0,
        stored: null !== (bR = WW.baf2RxCryoStored) && void 0 !== bR ? bR : 0,
        makersShort: null !== (yR = WW.baf2RxMixersShort) && void 0 !== yR ? yR : 0,
        waterBeside: null !== (NW = WW.baf2RxWaterUse) && void 0 !== NW ? NW : 0,
        pct: WW.baf2RxWater
      } : {
        tw: "water",
        usePerS: null !== (RW = WW.baf2RxWaterUse) && void 0 !== RW ? RW : 0,
        needPerS: null !== (MW = WW.baf2RxWaterNeed) && void 0 !== MW ? MW : 0,
        inPerS: WW.baf2RxWaterIn,
        stored: WW.baf2RxWaterStored,
        makersShort: null !== (wW = WW.baf2RxCondensersShort) && void 0 !== wW ? wW : 0,
        waterBeside: 0,
        pct: WW.baf2RxWater
      }
    }

    function Rt(WW) {
      const RW = "running" === WW.baf2RxState || "idle" === WW.baf2RxState;
      return WW.baf2RxFormed && WW.baf2RxTarget !== WW.baf2RxThrottle && RW ? Mt(WW, WW.baf2RxTarget) : null
    }

    function Mt(WW, RW) {
      const [MW, wW, CW, , , , zR, , AW] = WW.baf2RxStats, bR = ZB(WW, AR), yR = Wt(WW), NW = yR.pct / 100, {
        gen: eW,
        out: BW,
        load: tR
      } = function(WW, RW, MW, wW) {
        const CW = MW ? hb : 1,
          zR = Math.min(WW.fuelHeat * CW * Math.max(0, Math.min(1, RW)), WW.size * CW);
        return {
          gen: zR,
          out: zR,
          load: Wy(zR, WW.cooling, wW)
        }
      }({
        fuelHeat: MW,
        cooling: wW,
        size: CW
      }, RW / 100, bR, NW), TW = My(zR || vy(...WW.baf2RxDims)), gR = WW.baf2RxHeat, iR = Math.abs(tR - gR), YW = function(WW, RW, MW, wW) {
        let CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : ZW.r;
        const zR = MW ? hb : 1,
          AW = Math.min(WW.fuelHeat * zR * RW / 100, WW.size * zR),
          bR = AW,
          yR = WW.fuelHeat * zR,
          NW = WW.cooling * Sb(wW.pct / 100),
          eW = yR > 0 && NW < WW.size * zR ? Math.floor(100 * NW / yR) : 100,
          BW = AW * CW - wW.inPerS;
        return {
          out: bR,
          hotAbove: eW >= 100 ? null : Math.max(0, eW),
          waterSecs: wW.pct >= 100 && BW > 1e-6 ? Math.max(0, wW.stored) / BW : null
        }
      }({
        fuelHeat: MW,
        cooling: wW,
        size: CW
      }, RW, bR, {
        pct: yR.pct,
        inPerS: yR.inPerS,
        stored: yR.stored
      }, SB(yR.tw));
      return {
        pct: RW,
        out: BW,
        coolPerS: eW * SB(yR.tw),
        pelletsPerMin: AW > 0 ? BW / AW * 60 : 0,
        settle: tR,
        settleS: iR > 2 ? TW * Math.log(iR / 2) : 0,
        overheatS: tR > 100 && gR < 100 ? TW * Math.log((tR - gR) / (tR - 100)) : null,
        hotAbove: YW.hotAbove,
        coolantSecs: YW.waterSecs
      }
    }

    function wt(WW) {
      return WW.baf2RxThrottle <= 0 && "running" !== WW.baf2RxState ? 0 : Mt(WW, WW.baf2RxTarget).pelletsPerMin / 60
    }

    function Ct(WW, RW) {
      if (WW <= 0 || RW <= 0) return 0;
      const MW = WW / RW;
      return MW < .25 ? 1 : MW < .5 ? 2 : MW < .8 ? 3 : 4
    }

    function zT(WW, RW) {
      const MW = {};
      for (const [wW, CW] of Object.entries(RW.params)) MW[wW] = "time" === wW ? ez(WW, CW) : "amount" === wW ? Py(CW) : String(Math.round(CW));
      return WW(RW.key, MW)
    }

    function At(WW, RW) {
      return {
        key: `${DB}${WW}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: RW
      }
    }

    function bT(WW) {
      var RW;
      const MW = ZB(WW, AR),
        wW = "running" === WW.baf2RxState,
        CW = Ay(WW),
        zR = WW.baf2RxHeat;
      var AW;
      if (wW && zR > db) return {
        key: null !== (AW = CW.fix) && void 0 !== AW ? AW : `${DB}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const bR = wW ? Mt(WW, WW.baf2RxTarget).coolantSecs : null,
        yR = "cryo" === Wt(WW).tw;
      if (null !== bR && bR >= 1 && bR <= 30) return At(yR ? "rxWarnCryo" : "rxWarnWater", "bad");
      const NW = my(vy(...WW.baf2RxDims)).waste,
        eW = wW ? tN(WW, NW, wt(WW)).fullInS : null;
      if (null !== eW && eW <= 120 && WW.baf2RxWaste >= .5 * NW) return At("rxWarnWaste", "warn");
      if (null !== bR && bR >= 1) return At(yR ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: bR
      });
      const BW = "noWater" === WW.baf2RxState && zR > db;
      if (WW.baf2RxDamage >= 1 && !BW) return At("rxDamagedHeals", "warn", {
        pct: WW.baf2RxDamage
      });
      if (WW.baf2RxCryoCut) return At("rxFix_cryoCut", "warn");
      const tR = Wt(WW);
      if ("noWater" === WW.baf2RxState && "cryo" === tR.tw) return At("noWater" === WW.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const TW = CW.fix === `${DB}rxFix_scramCool` || "idle" === WW.baf2RxState && WW.baf2RxTarget <= 0;
      if (TW && WW.baf2RxFuel <= 0) return At("rxFix_noFuel", "warn");
      if (TW && WW.baf2RxWaterIn <= 0 && (null !== (RW = WW.baf2RxCryoIn) && void 0 !== RW ? RW : 0) <= 0) return At("rxFix_noWater", "warn");
      const gR = CW.fix === `${DB}rxFix_scramCool` ? yN(WW) : null;
      if (null !== gR) return {
        key: gR.key,
        params: {
          amount: gR.amount
        },
        tone: "info"
      };
      if ("running" !== WW.baf2RxState && "idle" !== WW.baf2RxState && null !== CW.fix) return {
        key: CW.fix,
        params: {},
        tone: "scram" === WW.baf2RxState ? "info" : BW ? "bad" : "warn"
      };
      var iR;
      if ("idle" === WW.baf2RxState && WW.baf2RxTarget <= 0) return {
        key: null !== (iR = CW.fix) && void 0 !== iR ? iR : `${DB}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const YW = WW.baf2RxCryoStarved;
      if ("cryo" === tR.tw && YW && tR.needPerS > 0 && tR.usePerS < qt * tR.needPerS) return At("noWater" === YW ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const JW = "cryo" === tR.tw,
        PW = tR.needPerS > 0 && tR.usePerS < qt * tR.needPerS;
      if (JW ? PW || tR.makersShort > 0 && tR.pct < 100 : tR.pct < 100) {
        const RW = JW && PW ? Math.floor(100 * tR.usePerS / tR.needPerS) : Math.min(100, tR.pct);
        if (tR.makersShort > 0) {
          return At(`${JW?"rxCryoShortLine":"rxWaterShortLine"}${1===tR.makersShort?"One":""}${!JW&&WW.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: RW,
            count: tR.makersShort
          })
        }
        return At(JW ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: RW
        })
      }
      const IW = function(WW) {
        const [RW, MW, wW] = WW.baf2RxStats, CW = Wt(WW), zR = Ry({
          fuelHeat: RW,
          cooling: MW,
          size: wW
        }, "cryo" === CW.tw ? ZW.g : 1, !0);
        return Math.max(0, zR * SB(CW.tw) - CW.inPerS)
      }(WW);
      if (MW && IW > 0) return At("cryo" === tR.tw ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(IW)
      });
      if (zR >= qy) return At("rxHotLine", "warn");
      const oW = Mt(WW, WW.baf2RxTarget);
      var lW;
      if (null !== oW.overheatS) return At("rxWillOverheat", "bad", {
        pct: WW.baf2RxTarget,
        time: oW.overheatS,
        safe: null !== (lW = oW.hotAbove) && void 0 !== lW ? lW : 100
      });
      if (Math.abs(oW.settle - zR) >= 3) return At("rxSettling", "info", {
        pct: WW.baf2RxTarget,
        heat: Math.round(oW.settle),
        time: oW.settleS
      });
      const FW = yN(WW);
      if (null !== FW) return {
        key: FW.key,
        params: {
          amount: FW.amount
        },
        tone: "info"
      };
      const fW = function(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== RW && ("running" !== RW || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === WW.rods ? `${wy}rxLimitNoRods` : `${wy}rxLimit_${Db(WW)}`
      }({
        rods: WW.baf2RxStats[3],
        ...bN(WW)
      }, WW.baf2RxState, WW.baf2RxOut >= qt * WW.baf2RxMaxNow, !1);
      if (fW === `${DB}rxLimit_size`) {
        const [RW, , MW, wW] = WW.baf2RxStats, CW = wW > 0 && RW > 0 ? Math.ceil(MW / (RW / wW) - 1e-9) : wW, zR = WW.baf2RxDims.every((WW => WW >= aw("reactor").max));
        if (CW < wW) return At(zR ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: CW,
          have: wW
        });
        if (zR) return At("rxLimit_sizeMax", "info")
      }
      return null !== fW ? {
        key: fW,
        params: {},
        tone: "info"
      } : At("rxSteady", "ok", {
        pct: WW.baf2RxTarget
      })
    }

    function yT(WW) {
      var RW;
      if (WW.melted) return At("rxMeltedBody", "bad");
      if (-1 === WW.bad) return At("rxFix_noRoom", "warn");
      if (WW.bad > 0) return At(1 === WW.bad ? "rxBadOne" : "rxBad", "warn", {
        count: WW.bad
      });
      if (WW.left > 0) {
        const RW = 1 === WW.left ? "One" : "";
        return At(WW.canFill ? `rxPlanLeft${RW}` : `rxPlanLeftNoFill${RW}`, "info", {
          count: WW.left
        })
      }
      if (0 === WW.rods) return At("rxLimitNoRods", "warn");
      const MW = null !== (RW = WW.idle) && void 0 !== RW ? RW : 0;
      return MW > 0 ? At(1 === MW ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: MW
      }) : At("rxPlanReady", "ok")
    }

    function Nt(WW) {
      return Math.floor(Math.max(0, WW[1] - 1) / 2)
    }

    function et(WW) {
      if (WW >= Ob && WW < nb) {
        const RW = WW - Ob;
        return {
          key: 0 === RW ? `${DB}rxWhy_rodAlone` : 1 === RW ? `${DB}rxWhy_rodOne` : `${DB}rxWhy_rod`,
          params: {
            count: String(RW),
            heat: String(Qb * (1 + ry * RW))
          }
        }
      }
      return WW === nb ? {
        key: `${DB}rxWhy_channel`,
        params: {
          amount: String(Xb)
        }
      } : WW === Gb ? {
        key: `${DB}rxWhy_deadChannel`,
        params: {}
      } : WW === Lb ? {
        key: `${DB}rxWhy_graphite`,
        params: {}
      } : {
        key: `${DB}rxWhy_core`,
        params: {}
      }
    }
    const Bt = "buildAFactory2Game:";

    function tT(WW, RW) {
      return 0 !== (WW.baf2RxFlags & RW)
    }

    function Tt(WW) {
      let {
        status: RW,
        pending: MW,
        store: wW,
        explain: CW
      } = WW;
      const {
        t: zR
      } = (0, PC.C)(), AW = tT(RW, zM), bR = RW.baf2RxTarget, yR = RW.baf2RxThrottle, NW = function(WW) {
        return {
          press: () => {
            WW.throttlePress()
          },
          drag: RW => {
            WW.throttleDrag(RW)
          },
          release: () => {
            WW.throttleRelease()
          }
        }
      }(wW), eW = null === (BW = Mt(RW, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, BW - 10),
        red: BW
      };
      var BW;
      return (0, gA.jsxs)("div", {
        className: gz()("Baf2RxThrottle", {
          Off: AW
        }),
        onClick: () => {
          AW && CW(`${Bt}rxWhy_startFirst`)
        },
        children: [(0, gA.jsx)("span", {
          className: "HideNarrow",
          children: zR(`${Bt}rxThrottle`)
        }), (0, gA.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, gA.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: bR,
            disabled: AW,
            style: AW ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": zR(`${Bt}rxThrottle`),
            onPointerDown: () => {
              NW.press();
              const WW = () => {
                window.removeEventListener("pointerup", WW), window.removeEventListener("pointercancel", WW), NW.release()
              };
              window.addEventListener("pointerup", WW), window.addEventListener("pointercancel", WW)
            },
            onKeyUp: NW.release,
            onChange: WW => {
              NW.drag(Number(WW.target.value))
            }
          }), (0, gA.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${eW.amber}%, #ffb020 ${eW.amber}% ${eW.red}%, #ff3b30 ${eW.red}%)`
            },
            "aria-hidden": "true"
          }), (0, gA.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${yR}% + ${8*(1-yR/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, gA.jsxs)("b", {
          children: [`${bR}%`, (0, gA.jsx)("i", {
            className: gz()("Baf2RxPendingDot", {
              On: MW
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function gT(WW) {
      let {
        status: RW
      } = WW;
      const {
        t: MW
      } = (0, PC.C)(), wW = Mt(RW, RW.baf2RxTarget), CW = Wt(RW).tw, zR = MW("cryo" === CW ? `${Bt}rxRateCryo` : `${Bt}rxRateWater`, {
        rate: GB(wW.coolPerS)
      }), AW = MW(`${Bt}rxChain`, {
        pct: String(RW.baf2RxTarget),
        out: Py(wW.out),
        heat: String(Math.round(wW.settle)),
        coolant: zR
      }), bR = null !== wW.coolantSecs ? wW.coolantSecs >= 1 ? MW("cryo" === CW ? `${Bt}rxThrottleCryoOut` : `${Bt}rxThrottleWaterOut`, {
        time: ez(MW, wW.coolantSecs)
      }) : MW("cryo" === CW ? `${Bt}rxThrottleCryoDry` : `${Bt}rxThrottleWaterDry`) : null;
      return (0, gA.jsxs)("p", {
        className: "Baf2RxChain",
        children: [AW, null !== bR ? (0, gA.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", bR]
        }) : (0, gA.jsxs)("span", {
          children: [" \xb7 ", MW(`${Bt}rxChainPellets`, {
            amount: Iy(wW.pelletsPerMin)
          })]
        })]
      })
    }

    function iT(WW) {
      let {
        view: RW,
        store: MW,
        explain: CW,
        explainOnce: zR
      } = WW;
      const {
        t: AW
      } = (0, PC.C)(), {
        status: bR
      } = RW, [yR, NW] = (0, wW.useState)(!1), eW = tT(bR, zM), tR = tT(bR, AR), TW = !tT(bR, NR), gR = bR.baf2RxHeat > 100;
      return (0, gA.jsxs)(gA.Fragment, {
        children: [(0, gA.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, gA.jsx)(Tt, {
            status: bR,
            pending: RW.throttlePending,
            store: MW,
            explain: CW
          }), (0, gA.jsx)(HB, {
            on: tR,
            label: tR ? AW(`${Bt}rxOdLeft`, {
              time: ez(AW, bR.baf2RxOdLeft)
            }) : AW(`${Bt}rxOverdrive`),
            locked: TW,
            pending: 0 !== (RW.pendingFlags & AR),
            toggle: () => {
              TW ? CW(`${Bt}rxOverdriveTier`, {
                amount: String(BW(13))
              }) : tR ? MW.setFlag(AR, !1) : RW.odConfirmed ? MW.setFlag(AR, !0) : NW(!0)
            }
          }), eW || RW.startGuard ? (0, gA.jsx)(BA.r, {
            disabled: RW.busy.has("start") || RW.startGuard,
            onClick: () => {
              MW.tap("start", (() => {
                MW.setFlag(zM, !1)
              }))
            },
            children: AW(RW.startGuard ? `${Bt}rxStarting` : `${Bt}rxStart`)
          }) : (0, gA.jsx)("span", {
            className: gz()("Baf2RxScram", {
              Pulse: gR
            }),
            children: (0, gA.jsx)(BA.E, {
              onClick: () => {
                MW.shutDown()
              },
              children: AW(`${Bt}rxScram`)
            })
          })]
        }), (0, gA.jsx)(gT, {
          status: bR
        }), yR && (0, gA.jsx)(KB, {
          id: "baf2RxOdTitle",
          title: `${Bt}rxOdConfirmTitle`,
          body: `${Bt}rxOdConfirmBody`,
          yes: `${Bt}rxOdConfirm`,
          cancel: () => {
            NW(!1)
          },
          confirm: () => {
            NW(!1), MW.tap("odConfirm", (() => {
              MW.confirmOverdrive(), MW.setFlag(AR, !0)
            })), zR(`${Bt}rxWhy_overdrive`)
          }
        })]
      })
    }

    function Yt(WW) {
      let {
        view: RW,
        store: MW,
        keepSize: wW
      } = WW;
      const {
        t: CW
      } = (0, PC.C)(), {
        status: zR
      } = RW;
      return (0, gA.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, gA.jsx)(LB, {
          kind: "reactor",
          dims: RW.dims,
          cap: zR.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: WW => {
            MW.resize(WW)
          }
        }), wW ? (0, gA.jsx)(BA.j, {
          onClick: wW,
          children: CW(`${Bt}rxKeepSize`)
        }) : (0, gA.jsxs)(gA.Fragment, {
          children: [(0, gA.jsx)(HB, {
            on: RW.guide,
            label: CW(`${Bt}rxGuide`),
            toggle: () => {
              MW.toggleGuide()
            }
          }), tT(zR, BR) && (0, gA.jsx)(HB, {
            on: RW.starter,
            label: CW(`${Bt}rxStarter`),
            toggle: () => {
              MW.toggleStarter()
            }
          }), (0, gA.jsx)(VB, {
            status: zR,
            store: MW,
            busy: RW.busy.has("fill")
          })]
        })]
      })
    }

    function Jt(WW) {
      let {
        need: RW,
        kind: MW = "reactor",
        explain: wW
      } = WW;
      const {
        t: CW
      } = (0, PC.C)(), zR = RW.length <= 3, AW = RW.reduce(((WW, RW) => {
        let [, MW] = RW;
        return WW + MW
      }), 0);
      return (0, gA.jsxs)("div", {
        className: gz()("Baf2RxParts", {
          Compact: !zR
        }),
        onClick: () => {
          wW("battery" === MW ? `${Bt}batWhy_store` : `${Bt}rxShellHint`)
        },
        children: [AW > 0 && (0, gA.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === AW ? CW(`${Bt}rxBlocksOne`) : CW(`${Bt}rxBlocks`, {
            blocks: String(AW)
          })
        }), 0 === RW.length ? (0, gA.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: CW("battery" === MW ? `${Bt}batPartsDone` : `${Bt}rxShellDone`)
        }) : ey(RW).map((WW => {
          let [RW, MW, wW] = WW;
          const AW = function(WW) {
            const RW = iN[WW];
            if (void 0 === RW) return null;
            const [MW, wW, CW] = Ty[RW].colour.map((WW => Math.round(255 * WW)));
            return `rgb(${MW}, ${wW}, ${CW})`
          }(RW);
          return (0, gA.jsxs)("span", {
            className: "Baf2RxChip",
            title: LC(CW, RW),
            children: [(0, gA.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === AW ? {
                visibility: "hidden"
              } : {
                background: AW
              },
              title: CW(`${Bt}rxShopGhost`)
            }), (0, gA.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, gA.jsx)(oC.c, {
                itemName: RW,
                amount: 0
              })
            }), (0, gA.jsx)("span", {
              className: "Baf2RxChipName",
              children: zR ? `${MW} ${bR=LC(CW,RW),bR.replace(/^(Reactor|Battery) (?=\S)/,"")}` : MW
            }), wW >= MW ? (0, gA.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, gA.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: zR ? CW(`${Bt}rxShopShort`, {
                count: String(MW - wW)
              }) : "\u2212" + (MW - wW)
            })]
          }, RW);
          var bR
        }))]
      })
    }
    const Pt = "buildAFactory2Game:";

    function It(WW) {
      var RW, MW, CW, zR, AW, bR, yR;
      let {
        store: NW,
        close: eW
      } = WW;
      const {
        t: BW
      } = (0, PC.C)(), tR = kb(), TW = uB(NW), {
        explained: gR,
        explain: iR
      } = sB("baf2RxExplained"), YW = (0, wW.useCallback)(((WW, RW) => {
        iR(BW(WW, RW))
      }), [iR, BW]), JW = null === TW || void 0 === TW ? void 0 : TW.status, PW = !0 === (null === JW || void 0 === JW ? void 0 : JW.baf2BatReadOnly), IW = WW => {
        JW && tR.send(CR(JW.baf2BatAt, WW))
      }, [oW, lW, FW] = null !== (RW = null === TW || void 0 === TW ? void 0 : TW.dims) && void 0 !== RW ? RW : [0, 0, 0], fW = Py(null !== (MW = null === TW || void 0 === TW ? void 0 : TW.aR) && void 0 !== MW ? MW : 0), QW = !0 === (null === JW || void 0 === JW ? void 0 : JW.baf2BatFormed), rR = null !== (CW = null === JW || void 0 === JW ? void 0 : JW.baf2BatStored) && void 0 !== CW ? CW : 0, cR = Math.max(1, null !== (zR = null === JW || void 0 === JW ? void 0 : JW.baf2BatIslandCap) && void 0 !== zR ? zR : 1), XW = Math.min(100, 100 * rR / cR), jR = null === JW || void 0 === JW ? void 0 : JW.baf2BatNetPerS, kR = function(WW, RW, MW) {
        return MW > 0 && RW >= MW ? "full" : void 0 !== WW && WW >= .05 ? "charging" : void 0 !== WW && WW <= -.05 && RW > 0 ? "draining" : "steady"
      }(jR, rR, null !== (AW = null === JW || void 0 === JW ? void 0 : JW.baf2BatIslandCap) && void 0 !== AW ? AW : 0), aR = null !== (bR = null === JW || void 0 === JW ? void 0 : JW.baf2BatMadePerS) && void 0 !== bR ? bR : 0, sW = null !== (yR = null === JW || void 0 === JW ? void 0 : JW.baf2BatUsedPerS) && void 0 !== yR ? yR : 0;
      let dW, pW = {},
        hW = "info";
      if (JW)
        if (QW) "charging" === kR ? (dW = `${Pt}batLine_charging`, pW = {
          time: ez(BW, (cR - rR) / Math.max(.05, null !== jR && void 0 !== jR ? jR : 0))
        }, hW = "ok") : "draining" === kR ? (dW = `${Pt}batLine_draining`, pW = {
          time: ez(BW, rR / Math.max(.05, -(null !== jR && void 0 !== jR ? jR : 0)))
        }, hW = "warn") : dW = "full" === kR ? `${Pt}batLine_full` : rR <= 0 && sW > 0 ? `${Pt}batLine_empty` : `${Pt}batLine_steady`;
        else {
          var UW;
          const WW = yT({
            left: JW.baf2BatNeed.reduce(((WW, RW) => {
              let [, MW] = RW;
              return WW + MW
            }), 0),
            bad: JW.baf2BatBad,
            rods: 1,
            canFill: !0 === JW.baf2BatCanFill,
            melted: !1
          });
          dW = WW.key, pW = {
            count: String(null !== (UW = WW.params.count) && void 0 !== UW ? UW : 0)
          }, hW = WW.tone
        }
      else dW = `${Pt}batLine_steady`;
      const EW = Math.max(aR, sW, 1);
      return (0, gA.jsx)(eA.b, {
        close: eW,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, gA.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, gA.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, gA.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, gA.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, gA.jsx)(oC.c, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, gA.jsxs)("div", {
                children: [(0, gA.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: BW(`${Pt}batTitle`)
                }), JW && (0, gA.jsxs)("p", {
                  className: gz()("Baf2RxSubtitle", {
                    good: QW && "charging" === kR,
                    warn: QW && "draining" === kR
                  }),
                  children: [oW, "\xd7", lW, "\xd7", FW, " \xb7 ", BW(QW ? `${Pt}batState_${kR}` : `${Pt}rxSubPlanShort`)]
                })]
              })]
            }), (0, gA.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [JW && !PW && (0, gA.jsx)(OB, {
                kind: "battery",
                cap: QW ? fW : void 0,
                busy: null === TW || void 0 === TW ? void 0 : TW.busy.has("apart"),
                apart: () => {
                  NW.tap("apart", (() => {
                    IW("apart")
                  }))
                }
              }), (0, gA.jsx)(BA.l, {
                onClick: eW
              })]
            })]
          }), TW && JW && (0, gA.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, gA.jsxs)("div", {
              className: gz()("Baf2RxFlow Baf2BatFlow", {
                Plan: !QW
              }),
              children: [(0, gA.jsx)(jt, {
                kind: "Power",
                label: BW(`${Pt}batMade`),
                number: QW ? `\u26a1 ${Py(aR)}/s` : "\u2014",
                note: BW(`${Pt}batMadeNote`),
                share: QW ? aR / EW : void 0,
                onExplain: () => {
                  YW(`${Pt}batWhy_made`)
                }
              }), (0, gA.jsx)(kt, {
                kind: "Power",
                step: QW ? Ct(aR, EW) : 0,
                planned: !QW
              }), (0, gA.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  YW(`${Pt}batWhy_store`)
                },
                children: [(0, gA.jsx)(atW, {
                  max: 100,
                  bands: [{
                    upTo: QW ? XW : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, gA.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, gA.jsx)("b", {
                    className: "Baf2BatStored",
                    children: QW ? BW(`${Pt}batStoredOf`, {
                      amount: Py(rR),
                      cap: Py(JW.baf2BatIslandCap)
                    }) : BW(`${Pt}batWillHold`, {
                      cap: fW
                    })
                  }), (0, gA.jsx)("span", {
                    children: BW(`${Pt}batAdds`, {
                      cap: fW
                    })
                  }), QW && (0, gA.jsx)("small", {
                    children: BW(`${Pt}batBreakNote`, {
                      cap: fW
                    })
                  })]
                })]
              }), (0, gA.jsx)(kt, {
                kind: "Power",
                step: QW ? Ct(sW, EW) : 0,
                planned: !QW
              }), (0, gA.jsx)(jt, {
                kind: "Power",
                label: BW(`${Pt}batUsed`),
                number: QW ? `\u26a1 ${Py(sW)}/s` : "\u2014",
                note: BW(`${Pt}batUsedNote`),
                share: QW ? sW / EW : void 0,
                onExplain: () => {
                  YW(`${Pt}batWhy_used`)
                }
              })]
            }), (0, gA.jsx)(dB, {
              text: BW(dW, pW),
              tone: hW,
              explained: gR
            }), PW ? (0, gA.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: BW(`${Pt}rxNotYours`)
            }) : !QW && (0, gA.jsxs)(gA.Fragment, {
              children: [(0, gA.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, gA.jsx)(LB, {
                  kind: "battery",
                  dims: TW.dims,
                  cap: JW.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: WW => {
                    NW.resize(WW)
                  }
                }), (0, gA.jsx)(HB, {
                  on: TW.guide,
                  label: BW(`${Pt}rxGuide`),
                  toggle: () => {
                    NW.toggleGuide()
                  }
                }), JW.baf2BatCanFill && (0, gA.jsx)(BA.m, {
                  disabled: !By("battery", JW.baf2BatNeed) || TW.busy.has("fill"),
                  onClick: () => {
                    NW.tap("fill", (() => {
                      IW("fill")
                    }))
                  },
                  children: BW(`${Pt}rxFill`)
                })]
              }), (0, gA.jsx)(Jt, {
                need: JW.baf2BatNeed,
                kind: "battery",
                explain: YW
              })]
            })]
          })]
        })
      })
    }
    const ot = "buildAFactory2Game:",
      lt = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function Ft(WW, RW) {
      return WW === ub ? null : RW ? "#4a4440" : WW < nb ? lt[WW - Ob] : WW === nb ? "#3fd0f0" : WW === Gb ? "#2c3e4c" : "#55585e"
    }

    function ft(WW) {
      let {
        inner: RW,
        looks: MW,
        layer: wW,
        setLayer: CW,
        glow: zR,
        melted: AW,
        explain: bR
      } = WW;
      const {
        t: yR
      } = (0, PC.C)(), [NW, eW, BW] = RW, tR = Math.max(0, Math.min(eW - 1, wW)), TW = [];
      for (let iR = 0; iR < BW; iR++)
        for (let WW = 0; WW < NW; WW++) {
          var gR;
          const RW = null !== (gR = MW[(tR * BW + iR) * NW + WW]) && void 0 !== gR ? gR : ub,
            wW = Ft(RW, AW),
            CW = RW >= Ob && RW < nb;
          TW.push(null === wW ? (0, gA.jsx)("circle", {
            cx: WW + .5,
            cy: iR + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${WW},${iR}`) : (0, gA.jsx)("rect", {
            x: WW + .06,
            y: iR + .06,
            width: .88,
            height: .88,
            fill: wW,
            opacity: CW && !AW ? .5 + .5 * zR : 1,
            onClick: WW => {
              WW.stopPropagation();
              const MW = et(RW);
              bR(MW.key, MW.params)
            }
          }, `${WW},${iR}`))
        }
      return (0, gA.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, gA.jsx)("svg", {
          className: gz()("Baf2RxMapGrid", {
            Melted: AW
          }),
          viewBox: `0 0 ${Math.max(1,NW)} ${Math.max(1,BW)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": yR(`${ot}rxWhy_core`),
          onClick: () => {
            bR(`${ot}rxWhy_core`, {})
          },
          children: TW
        }), eW > 1 && (0, gA.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, gA.jsx)("button", {
            type: "button",
            "aria-label": yR(`${ot}rxLayerDown`),
            disabled: tR <= 0,
            onClick: () => {
              CW(tR - 1)
            },
            children: "\u25bc"
          }), (0, gA.jsxs)("span", {
            children: [(0, gA.jsx)("span", {
              className: "HideNarrow",
              children: yR(`${ot}rxLayer`, {
                n: String(tR + 1),
                of: String(eW)
              })
            }), (0, gA.jsx)("span", {
              className: "ShowNarrow",
              children: yR(`${ot}rxLayerShort`, {
                n: String(tR + 1),
                of: String(eW)
              })
            })]
          }), (0, gA.jsx)("button", {
            type: "button",
            "aria-label": yR(`${ot}rxLayerUp`),
            disabled: tR >= eW - 1,
            onClick: () => {
              CW(tR + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const Qt = "buildAFactory2Game:",
      rT = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: pb,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: zN,
        kind: "red"
      }],
      cT = [50, pb, 100];

    function Xt(WW) {
      let {
        stats: RW,
        t: MW,
        explain: wW
      } = WW;
      const CW = Db(RW),
        zR = Math.max(1, RW.fuelHeat, RW.cooling, RW.size),
        AW = [
          ["fuel", `${Qt}rxBarRods`, RW.fuelHeat],
          ["cooling", `${Qt}rxBarCooling`, RW.cooling],
          ["size", `${Qt}rxBarSize`, RW.size]
        ];
      return (0, gA.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          wW(`${Qt}rxWhy_bars`)
        },
        children: [(0, gA.jsx)("span", {
          className: "Baf2RxMostLine",
          children: MW(`${Qt}rxMost`, {
            amount: Py(Math.min(RW.fuelHeat, RW.cooling, RW.size))
          })
        }), (0, gA.jsx)("span", {
          className: "Baf2RxMostBars",
          children: AW.map((WW => {
            let [RW, wW, AW] = WW;
            return (0, gA.jsxs)("span", {
              className: gz()("Baf2RxMostBar", RW, {
                Low: RW === CW
              }),
              children: [(0, gA.jsx)("small", {
                children: MW(wW)
              }), (0, gA.jsx)("i", {
                children: (0, gA.jsx)("b", {
                  style: {
                    width: 100 * AW / zR + "%"
                  }
                })
              })]
            }, RW)
          }))
        })]
      })
    }

    function jT(WW) {
      var RW;
      let {
        view: MW,
        heat: CW,
        settle: zR,
        settleLine: AW,
        settleBad: bR,
        explain: yR
      } = WW;
      const {
        t: NW
      } = (0, PC.C)(), {
        status: eW
      } = MW, BW = eW.baf2RxAt.join(","), [tR, TW] = (0, wW.useState)((() => Nt(MW.inner)));
      (0, wW.useEffect)((() => {
        TW(Nt(MW.inner))
      }), [BW, MW.inner[1]]);
      const gR = null !== (RW = MW.plan) && void 0 !== RW ? RW : bN(eW),
        iR = MW.plan ? MW.plan.powerPerUnit : eW.baf2RxStats[8],
        YW = null === CW ? null : "alarm" === (JW = Cy(eW)) ? "red" : "hot" === JW ? "hot" : "warm" === JW ? "warm" : "cold";
      var JW;
      const PW = !eW.baf2RxFormed && function(WW, RW) {
          return 0 !== (WW.baf2RxFlags & RW)
        }(eW, bM),
        IW = eW.baf2RxDamage,
        oW = IW > 0 && eW.baf2RxHeat < pb;
      return (0, gA.jsxs)("div", {
        className: gz()("Baf2RxCore", null !== YW && void 0 !== YW ? YW : "plan"),
        children: [(0, gA.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, gA.jsx)(ft, {
            inner: MW.inner,
            looks: MW.looks,
            layer: tR,
            setLayer: TW,
            glow: eW.baf2RxFormed ? eW.baf2RxThrottle / 100 : 1,
            melted: PW,
            explain: yR
          }), (0, gA.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              yR(`${Qt}rxWhy_heat`)
            },
            children: [null !== CW ? (0, gA.jsxs)(gA.Fragment, {
              children: [(0, gA.jsx)("b", {
                children: NW(`${Qt}rxHeatPct`, {
                  pct: String(CW)
                })
              }), (0, gA.jsx)("span", {
                className: gz()("Baf2RxBand", YW),
                children: NW(`${Qt}rxBand_${YW}`)
              })]
            }) : (0, gA.jsx)("b", {
              children: NW(`${Qt}rxHeat`)
            }), null !== AW && (0, gA.jsx)("span", {
              className: gz()("Baf2RxSettle", {
                Bad: bR
              }),
              children: AW
            }), IW >= 1 && (0, gA.jsxs)("span", {
              className: gz()("Baf2RxDamage", {
                Healing: oW
              }),
              children: [NW(`${Qt}rxDamageLine`, {
                pct: String(IW)
              }), " \xb7 ", NW(oW ? `${Qt}rxDamageHealing` : `${Qt}rxDamageRising`), (0, gA.jsx)("i", {
                children: (0, gA.jsx)("b", {
                  style: {
                    width: `${Math.min(100,IW)}%`
                  }
                })
              })]
            })]
          }), (0, gA.jsx)(atW, {
            max: zN,
            bands: rT,
            ticks: cT,
            now: CW,
            settle: zR,
            settleTone: bR ? "bad" : null,
            onExplain: () => {
              yR(`${Qt}rxWhy_heat`)
            }
          })]
        }), (0, gA.jsx)(Xt, {
          stats: gR,
          t: NW,
          explain: yR
        }), iR > 0 && (0, gA.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            yR(`${Qt}rxWhy_perPellet`)
          },
          children: NW(`${Qt}rxPerPellet`, {
            amount: Py(iR)
          })
        })]
      })
    }

    function kT(WW, RW) {
      var MW;
      if (!WW.baf2RxStore) return {
        note: RW(`${Qt}rxUpTo`, {
          amount: Py(WW.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [wW, CW] = WW.baf2RxStore, zR = CW > 0 ? wW / CW : 0, AW = String(Math.floor(100 * zR)), bR = null !== (MW = WW.baf2RxStoreNetPerS) && void 0 !== MW ? MW : 0, yR = function(WW) {
        var RW, MW;
        const [wW, CW] = null !== (RW = WW.baf2RxStore) && void 0 !== RW ? RW : [0, 0], zR = null !== (MW = WW.baf2RxStoreNetPerS) && void 0 !== MW ? MW : 0;
        return CW > 0 && wW >= CW - 1 ? "running" === WW.baf2RxState ? `${DB}rxStoreFull` : `${DB}rxStoreFullOnly` : zR > .05 ? `${DB}rxStoreLine` : zR < -.05 ? "running" === WW.baf2RxState ? `${DB}rxStoreUsesMore` : `${DB}rxStoreDraining` : `${DB}rxStorePct`
      }(WW);
      return {
        note: RW(yR, yR === `${Qt}rxStoreLine` ? {
          pct: AW,
          time: ez(RW, (CW - wW) / bR)
        } : {
          pct: AW
        }),
        share: zR
      }
    }

    function aT(WW) {
      let {
        view: RW,
        explain: MW,
        preview: wW
      } = WW;
      const {
        t: CW
      } = (0, PC.C)(), {
        status: zR
      } = RW, AW = my(vy(...RW.dims)), bR = wt(zR), yR = Math.min(Math.round(zR.baf2RxFuel), AW.fuel), NW = "running" === zR.baf2RxState, eW = NW ? Ct(zR.baf2RxOut, zR.baf2RxMaxNow) : 0, BW = function(WW, RW, MW) {
        const wW = Wt(WW),
          CW = "cryo" === wW.tw,
          zR = MW ? MW.coolantSecs : wW.pct >= 100 && WW.baf2RxOut >= 1 ? Mt(WW, WW.baf2RxThrottle).coolantSecs : null;
        let AW, bR = !1;
        if (wW.pct < 100) {
          const MW = 1 === wW.makersShort,
            zR = !CW && WW.baf2RxCryoOpen ? "OrCryo" : "";
          AW = wW.makersShort > 0 ? RW(CW ? `${Qt}rxCryoAddMixer${MW?"":"s"}` : `${Qt}rxWaterAddCondenser${MW?"":"s"}${zR}`, {
            count: String(wW.makersShort)
          }) : RW(`${Qt}rxWaterNeeds`, {
            rate: GB(wW.needPerS)
          })
        } else if (null !== zR) AW = RW(`${Qt}rxWaterRunsOut`, {
          time: ez(RW, zR)
        });
        else if (wW.waterBeside > 0) AW = RW(`${Qt}rxCryoPlusWater`, {
          rate: GB(wW.waterBeside)
        });
        else {
          const WW = function(WW) {
            return WW.inPerS <= 0 ? "rxWaterNoSupply" : WW.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(wW);
          bR = "rxWaterNoSupply" === WW, AW = RW(`${Qt}${WW}`, {
            amount: Py(wW.stored)
          })
        }
        return {
          kind: CW ? "Cryo" : "Water",
          label: RW(CW ? `${Qt}rxCryo` : `${Qt}rxWater`),
          number: `${GB(wW.usePerS)}/s`,
          preview: MW ? `${GB(MW.coolPerS)}/s` : null,
          note: AW,
          tone: "noWater" === WW.baf2RxState ? "danger" : bR ? "warn" : (yR = wW.pct, NW = zR, yR < 100 ? "danger" : null === NW ? null : NW < 300 ? "danger" : "warn"),
          share: wW.pct / 100,
          why: CW ? `${Qt}rxWhy_cryo` : `${Qt}rxWhy_water`,
          short: wW.pct < 100
        };
        var yR, NW
      }(zR, CW, wW), tR = tN(zR, AW.waste, bR), TW = kT(zR, CW), gR = Mt(zR, zR.baf2RxTarget), iR = NW && Math.abs(gR.settle - zR.baf2RxHeat) >= 3, YW = wW ? wW.pelletsPerMin / 60 : null;
      return (0, gA.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, gA.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, gA.jsx)(jt, {
            kind: "Fuel",
            label: CW(`${Qt}rxFuel`),
            number: String(yR),
            preview: null !== YW && YW > 0 && zR.baf2RxFuel > 0 ? ez(CW, zR.baf2RxFuel / YW) : null,
            note: zR.baf2RxFuel <= 0 ? CW(`${Qt}rxFuelEmpty`) : bR > 0 ? CW(`${Qt}rxFuelLeft`, {
              time: ez(CW, zR.baf2RxFuel / bR)
            }) : CW(1 === yR ? `${Qt}rxFuelPellet` : `${Qt}rxFuelPellets`),
            tone: "noFuel" === zR.baf2RxState ? "danger" : zR.baf2RxFuel < 2 ? "warn" : null,
            share: zR.baf2RxFuel / AW.fuel,
            onExplain: () => {
              MW(`${Qt}rxWhy_fuel`)
            }
          }), (0, gA.jsx)(jt, {
            kind: BW.kind,
            label: BW.label,
            number: BW.number,
            preview: BW.preview,
            note: BW.note,
            tone: BW.tone,
            share: BW.share,
            onExplain: () => {
              MW(BW.why)
            }
          })]
        }), (0, gA.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, gA.jsx)(kt, {
            kind: "Fuel",
            step: eW,
            short: "noFuel" === zR.baf2RxState
          }), (0, gA.jsx)(kt, {
            kind: BW.kind,
            step: eW,
            short: BW.short || "noWater" === zR.baf2RxState
          })]
        }), (0, gA.jsx)(jT, {
          view: RW,
          heat: zR.baf2RxHeat,
          settle: Math.min(zN, gR.settle),
          settleLine: iR ? CW(`${Qt}rxHeatSettles`, {
            pct: String(Math.round(gR.settle)),
            time: ez(CW, gR.settleS)
          }) : null,
          settleBad: gR.settle > 100,
          explain: MW
        }), (0, gA.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, gA.jsx)(kt, {
            kind: "Power",
            step: eW
          }), (0, gA.jsx)(kt, {
            kind: "Waste",
            step: NW && zR.baf2RxFuel - zR.baf2RxPu > 0 ? eW : 0,
            short: tR.full
          })]
        }), (0, gA.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, gA.jsx)(jt, {
            kind: "Power",
            label: CW(`${Qt}rxPowerOut`),
            number: `\u26a1 ${Py(zR.baf2RxOut)}/s`,
            preview: wW ? Py(wW.out) : null,
            note: TW.note,
            share: TW.share,
            onExplain: () => {
              MW(`${Qt}rxWhy_power`)
            }
          }), (0, gA.jsx)(jt, {
            kind: "Waste",
            label: CW(`${Qt}rxWaste`),
            number: `${Math.floor(zR.baf2RxWaste)}/${AW.waste}`,
            note: tR.full ? CW(`${Qt}rxWasteFull`) : null !== tR.fullInS ? CW(`${Qt}rxWasteFullIn`, {
              time: ez(CW, tR.fullInS)
            }) : CW(`${Qt}rxWasteSpent`),
            tone: "wasteFull" === zR.baf2RxState ? "danger" : tR.full ? "warn" : null,
            share: zR.baf2RxWaste / AW.waste,
            onExplain: () => {
              MW(`${Qt}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function st(WW) {
      let {
        view: RW,
        explain: MW
      } = WW;
      const {
        t: wW
      } = (0, PC.C)(), CW = RW.plan;
      if (!CW) return null;
      const zR = CW.fuelHeat <= 0 ? null : CW.cooling > 0 ? Math.min(zN, 100 * CW.fuelHeat / CW.cooling) : zN,
        AW = wW(`${Qt}rxPlanAtFull`);
      return (0, gA.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, gA.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, gA.jsx)(jt, {
            kind: "Fuel",
            label: wW(`${Qt}rxFuel`),
            number: wW(`${Qt}rxPlanPerMin`, {
              amount: Iy(CW.pelletsPerMin)
            }),
            note: wW(`${Qt}rxPlanPellets`),
            onExplain: () => {
              MW(`${Qt}rxWhy_fuel`)
            }
          }), (0, gA.jsx)(jt, {
            kind: "Water",
            label: wW(`${Qt}rxWater`),
            number: `${GB(CW.waterPerS)}/s`,
            note: RW.status.baf2RxCryoOpen && CW.waterPerS > 0 ? wW(`${Qt}rxPlanOrCryo`, {
              rate: GB(Ry(CW, ZW.g) * ZW.n)
            }) : AW,
            onExplain: () => {
              MW(`${Qt}rxWhy_water`)
            }
          })]
        }), (0, gA.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, gA.jsx)(kt, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, gA.jsx)(kt, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, gA.jsx)(jT, {
          view: RW,
          heat: null,
          settle: zR,
          settleLine: null === zR ? null : wW(`${Qt}rxPlanHeat`, {
            pct: String(Math.round(zR))
          }),
          settleBad: null !== zR && zR > 100,
          explain: MW
        }), (0, gA.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, gA.jsx)(kt, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, gA.jsx)(kt, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, gA.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, gA.jsx)(jt, {
            kind: "Power",
            label: wW(`${Qt}rxPowerOut`),
            number: `\u26a1 ${Py(CW.max)}/s`,
            note: AW,
            onExplain: () => {
              MW(`${Qt}rxWhy_power`)
            }
          }), (0, gA.jsx)(jt, {
            kind: "Waste",
            label: wW(`${Qt}rxWaste`),
            number: wW(`${Qt}rxPlanPerMin`, {
              amount: Iy(CW.pelletsPerMin)
            }),
            note: wW(`${Qt}rxWasteSpent`),
            onExplain: () => {
              MW(`${Qt}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const dt = "buildAFactory2Game:",
      pt = {
        key: `${dt}rxWaiting`,
        params: {},
        tone: "info"
      };

    function ht(WW, RW) {
      return 0 !== (WW.baf2RxFlags & RW)
    }

    function Ut(WW) {
      var RW, MW;
      let {
        store: CW,
        close: zR
      } = WW;
      const {
        t: AW
      } = (0, PC.C)(), bR = uB(CW), {
        explained: yR,
        hinting: NW,
        explain: eW,
        explainOnce: BW
      } = sB("baf2RxExplained"), tR = (0, wW.useCallback)(((WW, RW) => {
        eW(AW(WW, RW))
      }), [eW, AW]), TW = (0, wW.useCallback)(((WW, RW) => {
        BW(WW, AW(WW, RW))
      }), [BW, AW]), [gR, iR] = (0, wW.useState)(!1), [YW, JW] = (0, wW.useState)(!1), PW = null === bR || void 0 === bR ? void 0 : bR.status, IW = null === PW || void 0 === PW ? void 0 : PW.baf2RxAt.join(","), oW = !0 === (null === PW || void 0 === PW ? void 0 : PW.baf2RxFormed);
      (0, wW.useEffect)((() => {
        JW(!1), iR(!1)
      }), [IW, oW]), (0, wW.useEffect)((() => (CW.opened(), () => {
        CW.closed()
      })), [CW]);
      const lW = void 0 !== PW && ht(PW, eR),
        FW = PW ? oW ? Cy(PW) : null !== bR && void 0 !== bR && bR.plan ? function(WW, RW) {
          if (WW <= 0) return "off";
          if (RW <= 0) return "alarm";
          const MW = 100 * WW / RW;
          return MW < 50 ? "calm" : MW < qy ? "warm" : MW <= 100 ? "hot" : "alarm"
        }(bR.plan.fuelHeat, bR.plan.cooling) : "off" : "off",
        fW = PW ? Ay(PW) : null,
        QW = bR ? bR.waiting ? pt : oW ? bT(bR.status) : function(WW) {
          var RW, MW;
          const {
            status: wW
          } = WW;
          return yT({
            left: wW.baf2RxNeed.reduce(((WW, RW) => {
              let [, MW] = RW;
              return WW + MW
            }), 0),
            bad: wW.baf2RxBad,
            rods: null !== (RW = null === (MW = WW.plan) || void 0 === MW ? void 0 : MW.rods) && void 0 !== RW ? RW : 0,
            canFill: ht(wW, yM),
            melted: ht(wW, bM),
            idle: WW.looks.reduce(((WW, RW) => WW + (RW === Gb ? 1 : 0)), 0)
          })
        }(bR) : null,
        rR = NW && null !== QW && ("ok" === QW.tone || "info" === QW.tone),
        cR = PW ? function(WW) {
          const RW = 0 !== (WW.baf2RxFlags & zM),
            MW = WW.baf2RxHeat < Ub;
          return 0 !== (WW.baf2RxFlags & bM) || MW && (RW || !WW.baf2RxFormed) ? null : WW.baf2RxFormed && !RW ? {
            key: `${wy}rxApartScram`,
            params: {}
          } : {
            key: `${wy}rxApartCooling`,
            params: {
              pct: String(Ub)
            }
          }
        }(PW) : null,
        [XW, jR, kR] = null !== (RW = null === bR || void 0 === bR ? void 0 : bR.dims) && void 0 !== RW ? RW : [0, 0, 0],
        aR = `${XW}\xd7${jR}\xd7${kR}`;
      return (0, gA.jsx)(eA.b, {
        close: zR,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, gA.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, gA.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, gA.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, gA.jsx)(nB, {
                mood: FW
              }), (0, gA.jsxs)("div", {
                children: [(0, gA.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: AW(`${dt}rxTitle`)
                }), bR && (0, gA.jsxs)("p", {
                  className: gz()("Baf2RxSubtitle", oW && (null === fW || void 0 === fW ? void 0 : fW.tone)),
                  children: [oW && !lW ? (0, gA.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": AW(`${dt}rxChangeSize`),
                    onClick: () => {
                      if (!PW) return;
                      const WW = ht(PW, zM);
                      var RW;
                      (RW = {
                        scram: WW,
                        heat: PW.baf2RxHeat
                      }).scram && RW.heat < Ub ? iR(!0) : tR(WW ? `${dt}rxResizeCooling` : `${dt}rxResizeHot`, {
                        pct: String(Ub)
                      })
                    },
                    children: [aR, " \u270e"]
                  }) : aR, " \xb7 ", AW(oW ? null !== (MW = null === fW || void 0 === fW ? void 0 : fW.label) && void 0 !== MW ? MW : `${dt}rxState_running` : `${dt}rxSubPlanShort`)]
                })]
              })]
            }), (0, gA.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [bR && !lW && (0, gA.jsx)(OB, {
                kind: "reactor",
                busy: bR.busy.has("apart"),
                whyNot: cR ? () => {
                  tR(cR.key, cR.params)
                } : null,
                apart: () => {
                  CW.tap("apart", (() => {
                    CW.send("apart")
                  }))
                }
              }), (0, gA.jsx)(BA.l, {
                onClick: zR
              })]
            })]
          }), bR && QW && (0, gA.jsxs)("div", {
            className: "Baf2RxBody",
            children: [oW ? (0, gA.jsx)(aT, {
              view: bR,
              explain: tR,
              preview: Rt(bR.status)
            }) : (0, gA.jsx)(st, {
              view: bR,
              explain: tR
            }), (0, gA.jsx)(dB, {
              text: rR ? `${zT(AW,QW)} ${AW(`${dt}rxTapHint`)}` : zT(AW, QW),
              tone: QW.tone,
              explained: yR
            }), lW ? (0, gA.jsxs)(gA.Fragment, {
              children: [(0, gA.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: AW(`${dt}rxNotYours`)
              }), (0, gA.jsx)(mt, {
                status: bR.status,
                store: CW,
                readOnly: !0
              })]
            }) : oW && !YW ? (0, gA.jsxs)(gA.Fragment, {
              children: [(0, gA.jsx)(iT, {
                view: bR,
                store: CW,
                explain: tR,
                explainOnce: TW
              }), void 0 !== bR.status.baf2RxLayout && UB(bR.status) && (0, gA.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, gA.jsx)(mt, {
                  status: bR.status,
                  store: CW,
                  readOnly: !1,
                  bare: !0
                }), (0, gA.jsx)(VB, {
                  status: bR.status,
                  store: CW,
                  busy: bR.busy.has("fill")
                })]
              })]
            }) : (0, gA.jsxs)(gA.Fragment, {
              children: [(0, gA.jsx)(Yt, {
                view: bR,
                store: CW,
                keepSize: oW ? () => {
                  JW(!1)
                } : void 0
              }), Ny(bR.dims, bR.status.baf2RxDims) && (0, gA.jsx)(Jt, {
                need: bR.status.baf2RxNeed,
                explain: tR
              }), (0, gA.jsx)(mt, {
                status: bR.status,
                store: CW,
                readOnly: !1
              })]
            }), gR && (0, gA.jsx)(KB, {
              id: "baf2ResizeTitle",
              title: `${dt}rxResizeConfirmTitle`,
              body: `${dt}rxResizeConfirmBody`,
              yes: `${dt}rxChangeSize`,
              cancel: () => {
                iR(!1)
              },
              confirm: () => {
                iR(!1), JW(!0)
              }
            })]
          })]
        })
      })
    }
    class Et {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(WW) {
        this.view = WW;
        for (const RW of this.listeners) RW()
      }
      get() {
        return this.view
      }
      subscribe(WW) {
        return this.listeners.add(WW), () => {
          this.listeners.delete(WW)
        }
      }
    }

    function Vt(WW) {
      let {
        commands: RW,
        store: MW,
        power: CW,
        water: zR,
        reactor: AW,
        battery: bR,
        collider: yR,
        terminal: NW,
        quests: eW,
        close: BW,
        Cw: tR,
        askIslands: TW,
        showCore: gR,
        openSocial: iR
      } = WW;
      const {
        userContext: YW
      } = (0, Fb.c)(), JW = lb.featureFlags.useSocialFeatures && YW.isLoggedIn(), [PW, IW] = (0, wW.useState)((() => MW.get()));
      (0, wW.useEffect)((() => MW.subscribe((() => {
        IW(MW.get())
      }))), [MW]);
      const oW = "islands" === (null === PW || void 0 === PW ? void 0 : PW.kind) ? PW.backToCore : void 0;
      return (0, gA.jsxs)(jb.Provider, {
        value: RW,
        children: ["core" === (null === PW || void 0 === PW ? void 0 : PW.kind) && (0, gA.jsx)(qB, {
          view: PW.core,
          close: BW,
          askIslands: TW
        }), "dropMap" === (null === PW || void 0 === PW ? void 0 : PW.kind) && (0, gA.jsx)(RB, {
          message: PW.dropMap,
          quests: eW,
          close: BW,
          Cw: tR
        }), "islands" === (null === PW || void 0 === PW ? void 0 : PW.kind) && (0, gA.jsx)(PB, {
          message: PW.islands,
          arrivedAtMs: PW.arrivedAtMs,
          close: oW ? () => {
            gR(oW)
          } : BW,
          Cw: tR,
          openSocial: JW ? iR : null
        }), "quests" === (null === PW || void 0 === PW ? void 0 : PW.kind) && (0, gA.jsx)(iB, {
          store: eW,
          close: BW
        }), "transfer" === (null === PW || void 0 === PW ? void 0 : PW.kind) && (0, gA.jsx)(uN, {
          message: PW.transfer,
          arrivedAtMs: PW.arrivedAtMs,
          close: BW,
          Cw: tR
        }), "power" === (null === PW || void 0 === PW ? void 0 : PW.kind) && (0, gA.jsx)(IA, {
          store: CW,
          close: BW
        }), "water" === (null === PW || void 0 === PW ? void 0 : PW.kind) && (0, gA.jsx)(Cb, {
          store: zR,
          close: BW
        }), "reactor" === (null === PW || void 0 === PW ? void 0 : PW.kind) && (0, gA.jsx)(Ut, {
          store: AW,
          close: BW
        }), "battery" === (null === PW || void 0 === PW ? void 0 : PW.kind) && (0, gA.jsx)(It, {
          store: bR,
          close: BW
        }), "collider" === (null === PW || void 0 === PW ? void 0 : PW.kind) && (0, gA.jsx)(ze, {
          store: yR,
          close: BW
        }), "terminal" === (null === PW || void 0 === PW ? void 0 : PW.kind) && (0, gA.jsx)(XB, {
          store: NW,
          close: BW,
          send: WW => {
            RW.send(WW)
          }
        })]
      })
    }
    const mT = [0, 0, 0],
      xT = new WeakMap;

    function vT(WW) {
      let RW = xT.get(WW);
      return RW || (RW = {
        hidden: WW.hidden,
        x: NaN,
        y: NaN
      }, xT.set(WW, RW)), RW
    }
    const Kt = {
      x: 0,
      y: 0,
      distSq: 0
    };

    function ut(WW, RW) {
      const MW = vT(WW);
      MW.hidden !== RW && (MW.hidden = RW, WW.hidden = RW)
    }

    function Ot(WW, RW, MW) {
      const wW = vT(WW);
      wW.x === RW && wW.y === MW || (wW.x = RW, wW.y = MW, WW.style.translate = `${RW}vw ${MW}vh`)
    }

    function nt(WW, RW, MW, wW, CW, zR) {
      let [AW, bR, yR] = wW;
      const NW = (AW + .5 - MW[0]) ** 2 + (bR - MW[1]) ** 2 + (yR + .5 - MW[2]) ** 2;
      let eW = null;
      NW <= zR ** 2 && (mT[0] = AW + .5, mT[1] = bR + CW, mT[2] = yR + .5, eW = RW.projectWorldPosToViewport(mT));
      const BW = null !== eW && eW.x > -5 && eW.x < 105 && eW.y > -5 && eW.y < 105;
      return ut(WW, !BW), BW ? (Kt.x = eW.x, Kt.y = eW.y, Kt.distSq = NW, Kt) : null
    }

    function Gt(WW, RW) {
      return WW.distSq - RW.distSq
    }
    class Lt {
      constructor() {
        this.list = [], this.pool = []
      }
      add(WW, RW, MW, wW) {
        let CW = this.pool[this.list.length];
        CW || (CW = {
          x: 0,
          y: 0,
          distSq: 0,
          element: RW,
          liftRem: MW,
          dot: wW
        }, this.pool.push(CW)), CW.x = WW.x, CW.y = WW.y, CW.distSq = WW.distSq, CW.element = RW, CW.liftRem = MW, CW.dot = wW, this.list.push(CW)
      }
    }
    class Ht {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = WW, this.sizes = new WeakMap, this.observer = new ResizeObserver((WW => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const RW of WW) {
            const WW = RW.borderBoxSize[0];
            "dot" !== RW.target.dataset.crowded && 0 !== WW.inlineSize && 0 !== WW.blockSize && this.sizes.set(RW.target, {
              width: WW.inlineSize,
              height: WW.blockSize
            })
          }
        })), this.remPx = 16, this.kept = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.FQ = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.FQ)
      }
      observe(WW) {
        this.observer.observe(WW)
      }
      unobserve(WW) {
        this.observer.unobserve(WW)
      }
      run(WW) {
        const RW = WW.list;
        RW.sort(Gt);
        const MW = this.pxPerVw,
          wW = this.pxPerVh;
        this.kept.length = 0, this.hud && this.kept.push(...this.hud.boxes(performance.now()));
        for (const zR of RW) {
          var CW;
          const WW = this.sizes.get(zR.element);
          let RW = "no";
          if (WW && WW.width > 0) {
            const CW = zR.x * MW,
              AW = zR.y * wW - zR.liftRem * this.remPx;
            this.fit(CW, AW, WW.width, WW.height) || (RW = zR.dot && this.fit(CW, AW, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (CW = zR.element.dataset.crowded) && void 0 !== CW ? CW : "no") !== RW && ("no" === RW ? delete zR.element.dataset.crowded : zR.element.dataset.crowded = RW), "hidden" !== RW && Ot(zR.element, zR.x, zR.y)
        }
        RW.length = 0
      }
      fit(WW, RW, MW, wW) {
        const CW = WW - MW / 2,
          zR = WW + MW / 2,
          AW = RW - wW,
          bR = this.kept;
        for (let yR = 0; yR < bR.length; yR += 4)
          if (CW < bR[yR + 1] - 2 && zR > bR[yR] + 2 && AW < bR[yR + 3] - 2 && RW > bR[yR + 2] + 2) return !1;
        return bR.push(CW, zR, AW, RW), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.FQ)
      }
    }
    const Dt = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class qT {
      constructor() {
        this.cards = Dt.map((WW => document.getElementsByClassName(WW))), this.watched = Dt.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(WW) {
        WW - this.refreshedAt > 1e3 && (this.refreshedAt = WW, this.stale = !0);
        for (let MW = 0; MW < this.cards.length; MW++) {
          var RW;
          const WW = null !== (RW = this.cards[MW][0]) && void 0 !== RW ? RW : null;
          WW !== this.watched[MW] && this.watch(MW, WW)
        }
        return this.stale && (this.stale = !1, this.measure()), this.list
      }
      dispose() {
        for (let WW = 0; WW < this.watched.length; WW++) this.watch(WW, null);
        this.sizes.disconnect(), window.removeEventListener("resize", this.onChange)
      }
      measure() {
        const WW = this.list;
        WW.length = 0;
        for (const RW of this.watched) {
          if (!RW || RW.closest(".NoRoom")) continue;
          const MW = RW.getBoundingClientRect();
          let wW = MW.top,
            CW = MW.bottom;
          if (RW === this.watched[0] && this.hud) {
            const WW = this.hud.getBoundingClientRect();
            wW = Math.max(wW, WW.top), CW = Math.min(CW, WW.bottom)
          }
          MW.width > 0 && CW > wW && WW.push(MW.left, MW.right, wW, CW)
        }
      }
      watch(WW, RW) {
        const MW = this.watched[WW];
        var wW, CW;
        (MW && this.sizes.unobserve(MW), this.watched[WW] = RW, this.stale = !0, RW && this.sizes.observe(RW), 0 === WW) && (null === (wW = this.hud) || void 0 === wW || wW.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (CW = null === RW || void 0 === RW ? void 0 : RW.closest(".Baf2QuestHud")) && void 0 !== CW ? CW : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    class Zt {
      constructor(WW) {
        this.onElement = WW, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(WW) {
        const RW = [];
        for (let MW = 0; MW + 4 < WW.length; MW += 5) {
          const wW = [WW[MW], WW[MW + 1], WW[MW + 2]];
          RW.push({
            key: wW.join(","),
            pos: wW,
            status: Hw[WW[MW + 3]],
            kind: oR[WW[MW + 4]]
          })
        }
        this.markers = RW, this.keys = new Set(RW.map((WW => {
          let {
            key: RW
          } = WW;
          return RW
        }))), this.notify()
      }
      covers(WW) {
        return this.keys.has(WW)
      }
      get() {
        return this.markers
      }
      subscribe(WW) {
        return this.listeners.add(WW), () => {
          this.listeners.delete(WW)
        }
      }
      bind(WW) {
        let RW = this.refs.get(WW);
        return RW || (RW = RW => {
          const MW = this.elements.get(WW);
          var wW, CW;
          MW && (null === (wW = this.onElement) || void 0 === wW || wW.call(this, MW, !1));
          RW ? (this.elements.set(WW, RW), null === (CW = this.onElement) || void 0 === CW || CW.call(this, RW, !0)) : (this.elements.delete(WW), this.refs.delete(WW))
        }, this.refs.set(WW, RW)), RW
      }
      onAfterRender(WW, RW, MW) {
        for (const wW of this.markers) {
          const CW = this.elements.get(wW.key);
          if (!CW) continue;
          const zR = nt(CW, WW, RW, wW.pos, 1.05, 24);
          zR && MW.add(zR, CW, .45, !0)
        }
      }
      notify() {
        for (const WW of this.listeners) WW()
      }
    }
    const St = {
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
    const WT = (0, wW.memo)((function(WW) {
        let {
          status: RW,
          kind: MW,
          bindRef: wW
        } = WW;
        const {
          t: CW
        } = (0, PC.C)(), zR = function(WW, RW) {
          var MW;
          if ("noFuel" === WW) {
            var wW, CW;
            const WW = null === (wW = rM[RW]) || void 0 === wW || null === (CW = wW.fuels) || void 0 === CW ? void 0 : CW.find((WW => HR.includes(WW)));
            return null !== WW && void 0 !== WW ? WW : St.noFuel
          }
          return void 0 !== (null === (MW = rM[RW]) || void 0 === MW ? void 0 : MW.cryoMade) ? "noOutlet" === WW ? "Fluid Pipe" : "noInput" === WW ? "Biomass" : St[WW] : St[WW]
        }(RW, MW);
        return (0, gA.jsxs)("div", {
          className: gz()("Baf2StallMarker", RW),
          ref: wW,
          hidden: !0,
          children: [zR && (0, gA.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, gA.jsx)(oC.c, {
              itemName: zR,
              amount: 0
            })
          }), (0, gA.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === RW ? "?" : "!"
          }), (0, gA.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: CW(`buildAFactory2Game:stallTag_${RW}`)
          })]
        })
      })),
      RT = (0, wW.memo)((function(WW) {
        let {
          controller: RW
        } = WW;
        const [MW, CW] = (0, wW.useState)((() => RW.get()));
        return (0, wW.useEffect)((() => (CW(RW.get()), RW.subscribe((() => {
          CW(RW.get())
        })))), [RW]), (0, gA.jsx)("div", {
          className: "Baf2StallMarkers",
          children: MW.map((WW => (0, gA.jsx)(WT, {
            status: WW.status,
            kind: WW.kind,
            bindRef: RW.bind(WW.key)
          }, WW.key)))
        })
      })),
      MT = bw.n + 150;
    class wT {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(WW, RW) {
        const MW = RW - WW;
        null === this.offset || MW < this.offset ? this.offset = MW : this.offset = Math.min(MW, this.offset + .02 * (RW - this.sampledAt)), this.sampledAt = RW
      }
      toLocal(WW) {
        var RW;
        return WW + (null !== (RW = this.offset) && void 0 !== RW ? RW : 0) + MT
      }
    }
    var CT = MW(36555);
    const zg = 15 * Math.PI / 180,
      AT = Math.SQRT2,
      bg = [4, 2];

    function yg(WW, RW) {
      const MW = [1 / 0, 1 / 0, 1 / 0],
        wW = [-1 / 0, -1 / 0, -1 / 0];
      for (const yR of WW)
        for (let WW = 0; WW < 3; WW++) MW[WW] = Math.min(MW[WW], yR[WW]), wW[WW] = Math.max(wW[WW], yR[WW]);
      const CW = (MW[0] + wW[0]) / 2,
        zR = (MW[1] + wW[1]) / 2,
        AW = (MW[2] + wW[2]) / 2;
      let bR = 0;
      for (const yR of WW) bR = Math.max(bR, Math.hypot(yR[0] - CW, yR[1] - zR, yR[2] - AW));
      return {
        x: CW,
        y: zR,
        z: AW,
        r: bR + RW
      }
    }

    function NT(WW, RW, MW) {
      const wW = RW.x - WW.x,
        CW = RW.y - WW.y,
        zR = RW.z - WW.z,
        AW = Math.sqrt(wW * wW + CW * CW + zR * zR);
      if (AW <= RW.r + 8) return 1;
      const bR = RW.r / AW,
        yR = Math.sqrt(1 - bR * bR),
        NW = yR < -WW.cosHalf,
        eW = (wW * WW.dx + CW * WW.dy + zR * WW.dz) / AW;
      if (!NW && eW < WW.cosHalf * yR - WW.sinHalf * bR) return 0;
      const BW = MW * AT * WW.frameMs * WW.pxPerBlock / (AW - RW.r);
      for (let tR = 0; tR < bg.length; tR++)
        if (BW * bg[tR] <= 1) return bg[tR];
      return 1
    }

    function eT(WW, RW) {
      return {
        name: WW,
        at: RW,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const BT = [0, 0, 0];

    function tg(WW, RW, MW) {
      let [, wW, CW, zR, AW, bR] = RW;
      const yR = bw.f * (null !== AW && void 0 !== AW ? AW : 1),
        NW = [];
      for (let TW = 0; TW < wW.length; TW += 3) NW.push([wW[TW] + .5, wW[TW + 1] + .65, wW[TW + 2] + .5]);
      const eW = [];
      for (let TW = 0; TW < NW.length - 1; TW++) {
        const [WW, RW] = [NW[TW], NW[TW + 1]];
        eW.push([(WW[0] + RW[0]) / 2, (WW[1] + RW[1]) / 2, (WW[2] + RW[2]) / 2])
      }
      const BW = NW.slice(1, -1),
        tR = new Uint8Array(BW.length);
      for (const TW of null !== bR && void 0 !== bR ? bR : []) tR[TW >> 1] |= 1 & TW ? 2 : 1;
      return {
        island: WW,
        length: BW.length,
        loop: zR,
        cellsPerMs: yR,
        edges: eW,
        bA: BW,
        bounds: yg([...eW, ...BW], .3),
        changed: !0,
        culled: !1,
        hide: tR,
        items: CW.map((WW => {
          let [RW, wW] = WW;
          return eT(RW, (0, bw.G)(RW, wW, MW, yR).at)
        }))
      }
    }

    function TT(WW, RW) {
      const {
        items: MW
      } = WW;
      if (0 === MW.length) return;
      const wW = WW.length / WW.cellsPerMs,
        CW = Math.floor((RW - MW[0].at) / wW) - 1;
      if (CW > 0)
        for (const zR of MW) zR.at += CW * wW
    }

    function gg(WW, RW) {
      const MW = Math.min(Math.floor(RW), WW.length - 1),
        wW = WW.hide[MW];
      return 0 !== wW && 0 !== (wW & (RW - MW < .5 ? 1 : 2))
    }

    function ig(WW, RW) {
      const MW = Math.min(Math.floor(RW), WW.length - 1),
        wW = RW - MW,
        CW = wW < .5,
        zR = CW ? WW.edges[MW] : WW.bA[MW],
        AW = CW ? WW.bA[MW] : WW.edges[MW + 1],
        bR = CW ? 2 * wW : 2 * wW - 1;
      BT[0] = zR[0] + (AW[0] - zR[0]) * bR, BT[1] = zR[1] + (AW[1] - zR[1]) * bR, BT[2] = zR[2] + (AW[2] - zR[2]) * bR
    }
    const YT = Math.PI / 4;
    class JT {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new wT, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN]
      }
      onLines(WW) {
        const RW = performance.now();
        this.clock.sample(WW.baf2BeltLinesAt, RW), this.queue(WW.baf2BeltLinesAt, WW, 0, null, null, 0), this.applyDue(RW)
      }
      onMoves(WW) {
        const RW = performance.now(),
          MW = WW.baf2BeltMovesAt;
        this.clock.sample(MW, RW);
        for (const [wW, CW, zR, AW] of WW.baf2BeltMoveList) null === CW ? this.queue(MW - zR, null, wW, null, null, null !== AW && void 0 !== AW ? AW : 0) : this.queue(MW - zR, null, wW, CW, null !== AW && void 0 !== AW ? AW : null, 0);
        this.applyDue(RW)
      }
      start(WW) {
        this.pool = new CT.b(WW, {
          scale: .3,
          yaw: YT
        }, 64)
      }
      onAfterRender(WW) {
        const {
          pool: RW
        } = this;
        if (!RW) return;
        const MW = performance.now(),
          wW = MW - this.lastRenderAt;
        this.lastRenderAt = MW, wW < 100 && (this.frameMs += .1 * (wW - this.frameMs));
        const CW = MW + this.frameMs;
        this.applyDue(CW);
        const zR = WW.cameraPosition,
          AW = RW.follow(zR);
        this.setView(WW, zR);
        const bR = this.frame++;
        for (let yR = 0; yR < this.shown.length; yR++) {
          const WW = this.shown[yR],
            MW = NT(this.view, WW.bounds, WW.cellsPerMs),
            wW = WW.culled && 0 !== MW;
          if (WW.culled = 0 === MW, !AW && !WW.changed && !wW && (0 === MW || (bR + yR) % MW !== 0)) continue;
          WW.changed = !1, WW.loop && (TT(WW, CW), (0, bw.E)(WW.items, WW.length, CW, WW.cellsPerMs));
          let zR = WW.length;
          for (let bR = 0; bR < WW.items.length; bR++) {
            const MW = WW.items[bR],
              wW = (0, bw.K)(MW.at, zR, CW, WW.cellsPerMs);
            if (zR = wW - bw.v, gg(WW, wW)) {
              null === MW.kind || MW.hidden || (MW.kind.hide(MW.slot), MW.hidden = !0);
              continue
            }
            let yR = MW.kind;
            if (null === yR) {
              if (yR = RW.kindOf(MW.name), null === yR) continue;
              MW.kind = yR, MW.slot = yR.take(), MW.hidden = !0, MW.drawn = NaN
            } else if (wW === MW.drawn && !MW.hidden && !AW) continue;
            ig(WW, wW), yR.write(MW.slot, BT[0], BT[1], BT[2]), MW.hidden = !1, MW.drawn = wW
          }
        }
        RW.commit()
      }
      dispose() {
        var WW;
        this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (WW = this.pool) || void 0 === WW || WW.dispose(), this.pool = null
      }
      setView(WW, RW) {
        const {
          cameraDir: MW,
          lastDir: wW
        } = this, CW = WW.cameraDirection;
        for (let eW = 0; eW < 3; eW++) wW[eW] = MW[eW], MW[eW] = CW[eW];
        const zR = MW[0] * wW[0] + MW[1] * wW[1] + MW[2] * wW[2],
          AW = Number.isNaN(zR) ? 0 : Math.acos(Math.min(1, Math.max(-1, zR))),
          bR = window.innerWidth,
          yR = window.innerHeight,
          NW = WW.tanHalfFovX;
        ! function(WW, RW, MW, wW, CW, zR, AW) {
          let bR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          WW.x = RW[0], WW.y = RW[1], WW.z = RW[2], WW.dx = MW[0], WW.dy = MW[1], WW.dz = MW[2];
          const yR = Math.min(Math.PI, Math.atan(Math.sqrt(wW * wW + CW * CW)) + zg + bR);
          WW.cosHalf = Math.cos(yR), WW.sinHalf = Math.sin(yR), WW.pxPerBlock = zR / (2 * CW), WW.frameMs = AW
        }(this.view, RW, MW, NW, NW * yR / bR, yR * window.devicePixelRatio, this.frameMs, AW)
      }
      queue(WW, RW, MW, wW, CW, zR) {
        const AW = Math.max(this.clock.toLocal(WW), this.lastPendingAt);
        this.lastPendingAt = AW, this.pending.push({
          at: AW,
          lines: RW,
          line: MW,
          name: wW,
          pos: CW,
          idx: zR
        })
      }
      applyDue(WW) {
        const {
          pending: RW
        } = this;
        for (; this.pendingHead < RW.length && RW[this.pendingHead].at <= WW;) {
          const WW = RW[this.pendingHead++];
          if (WW.lines) this.applyLines(WW.lines, WW.at), WW.lines = null;
          else {
            const RW = this.lines.get(WW.line);
            RW && this.applyMove(RW, WW, WW.at)
          }
        }
        this.pendingHead === RW.length ? (RW.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > RW.length && (RW.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(WW, RW) {
        this.clearIsland(WW.baf2BeltIsland);
        for (const MW of WW.baf2BeltLineList) this.lines.set(MW[0], tg(WW.baf2BeltIsland, MW, RW));
        this.shown = [...this.lines.values()]
      }
      applyMove(WW, RW, MW) {
        let {
          name: wW,
          pos: CW,
          idx: zR
        } = RW;
        WW.changed = !0, WW.loop && (TT(WW, MW), (0, bw.E)(WW.items, WW.length, MW, WW.cellsPerMs)), null !== wW && null !== CW ? (0, bw.F)(WW.items, WW.length, eT(wW, MW), CW, MW, WW.cellsPerMs) : null !== wW ? WW.items.push(eT(wW, MW)) : WW.items.length > zR && this.release((0, bw.O)(WW.items, WW.length, MW, WW.cellsPerMs, zR))
      }
      clearIsland(WW) {
        for (const [RW, MW] of this.lines)
          if (MW.island === WW) {
            for (const WW of MW.items) this.release(WW);
            this.lines.delete(RW)
          }
      }
      release(WW) {
        null !== WW.kind && (WW.kind.release(WW.slot), WW.kind = null, WW.slot = -1, WW.hidden = !0, WW.drawn = NaN)
      }
    }
    var PT = MW(34827),
      IT = MW(36571);

    function oT(WW) {
      let {
        depth: RW,
        store: MW,
        t: CW
      } = WW;
      const zR = function(WW) {
        const [RW, MW] = (0, wW.useState)(WW.lastPlayerY());
        return (0, ON.f)(XC, MW), (0, wW.useEffect)((() => {
          MW(WW.lastPlayerY())
        }), [WW]), RW
      }(MW);
      if (null === zR) return null;
      const [AW, bR] = RW, yR = zR > AW ? AW : null !== bR && zR < bR ? bR : null, NW = {
        y: Nz(zR),
        target: null === yR ? "" : Nz(yR)
      };
      return (0, gA.jsx)("span", {
        className: gz()("Baf2QuestDepth", {
          Reached: null === yR
        }),
        children: CW(`${HN}${null===yR?"questDepthReached":"questDepth"}`, NW)
      })
    }

    function lT(WW) {
      let {
        also: RW,
        view: MW,
        t: wW
      } = WW;
      return (0, gA.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, gA.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, gA.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, gA.jsx)("strong", {
            children: wW(`${HN}questAlsoDownHere`)
          }), (0, gA.jsx)("span", {
            className: "Baf2QuestChips",
            children: RW.map((WW => {
              let [RW, CW, zR, AW] = WW;
              return (0, gA.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": wW(`${HN}questAlsoItem`, {
                  item: qe(wW, MW.itemNames[RW], RW),
                  have: String(CW),
                  need: String(zR)
                }),
                children: [(0, gA.jsx)(SN, {
                  item: RW
                }), (0, gA.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${CW}/${zR}`
                }), null !== AW && (0, gA.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: wW(`${HN}questAlsoDepth`, {
                    y: Nz(AW)
                  })
                })]
              }, RW)
            }))
          })]
        })]
      })
    }

    function FT(WW) {
      let {
        expanded: RW,
        inventoryOpen: MW,
        children: CW
      } = WW;
      const zR = (0, wW.useRef)(null);
      return (0, wW.useEffect)((() => {
        const WW = zR.current,
          RW = null === WW || void 0 === WW ? void 0 : WW.closest(".RightElements"),
          wW = null === WW || void 0 === WW ? void 0 : WW.firstElementChild;
        if (!WW || !RW || !wW) return;
        return (0, IT.d)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [RW, wW], (() => {
          const CW = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === CW.length) return;
          const zR = Math.max(...CW.map((WW => WW.getBoundingClientRect().bottom))),
            AW = RW.getBoundingClientRect(),
            bR = MW ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (bR) {
            const RW = parseFloat(getComputedStyle(wW).marginLeft) + parseFloat(getComputedStyle(wW).marginRight),
              MW = AW.right - bR.getBoundingClientRect().right - 8 - RW;
            WW.style.setProperty("--baf2-quest-room", `${MW}px`), WW.classList.toggle("NoRoom", MW < 150)
          } else WW.style.removeProperty("--baf2-quest-room"), WW.classList.remove("NoRoom");
          const yR = zR - AW.top + 8,
            NW = function(WW, RW, MW) {
              const wW = RW.getBoundingClientRect(),
                CW = WW.getBoundingClientRect();
              let zR = wW.bottom;
              for (const AW of document.querySelectorAll(".TouchComponentsButtons .TouchKeyHit")) {
                const WW = AW.getBoundingClientRect();
                WW.height > 0 && WW.top > wW.top + MW && WW.left < CW.right && WW.right > CW.left && (zR = Math.min(zR, WW.top))
              }
              zR === wW.bottom && (zR -= parseFloat(getComputedStyle(RW).paddingBottom) || 0);
              return zR - wW.top
            }(WW, RW, yR) - 8,
            eW = window.innerHeight / 2 - AW.top,
            {
              top: BW,
              maxHeight: tR
            } = function(WW, RW, MW, wW, CW) {
              const zR = Math.min(MW, Math.max(0, RW - WW)),
                AW = CW ? WW : Math.max(WW, Math.min(wW - zR / 2, RW - zR));
              return {
                top: AW,
                maxHeight: Math.max(0, RW - AW)
              }
            }(yR, NW, function(WW) {
              const RW = WW.firstElementChild,
                MW = RW ? RW.scrollHeight - RW.clientHeight : 0;
              return WW.getBoundingClientRect().height + Math.max(0, MW)
            }(wW), eW, tA());
          WW.style.top = `${BW}px`, WW.style.maxHeight = `${tR}px`
        }))
      }), [MW]), (0, gA.jsx)("div", {
        ref: zR,
        className: gz()("Baf2QuestHud", {
          Expanded: RW
        }),
        children: CW
      })
    }

    function fT(WW) {
      let {
        amount: RW,
        t: MW
      } = WW;
      return (0, gA.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, gA.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, gA.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: MW(`${HN}questStepsDone`, {
            amount: String(RW)
          })
        })]
      })
    }

    function QT(WW) {
      var RW;
      let {
        store: MW
      } = WW;
      const CW = (0, ON.i)(cz, MW.get()),
        [zR, AW] = (0, wW.useState)(!1),
        {
          t: bR
        } = (0, PC.C)(),
        yR = function() {
          const [WW, RW] = (0, wW.useState)(tA);
          return (0, wW.useEffect)((() => (RW(tA()), Tz(RW))), []), WW
        }(),
        {
          openInGameMenuName: NW,
          openEverythingMenuName: eW
        } = (0, BC.i)(["openInGameMenuName", "openEverythingMenuName"]),
        BW = "inventory" === NW && null === eW,
        tR = null !== NW && !BW || null !== eW;
      if (! function(WW) {
          return null !== WW.name || null !== WW.side
        }(CW) || tR || "off" === CW.tutorial) return null;
      const TW = dC(CW.rows),
        gR = TW.filter((WW => WW.done)).length,
        iR = function(WW, RW) {
          const MW = UC(WW);
          let wW = 0;
          return WW.filter(((WW, CW) => !!WW.justFinished || !(WW.done || CW < MW || wW > RW) && (wW++, !0)))
        }(CW.rows, yR ? 0 : 2),
        YW = yR ? iR : function(WW, RW) {
          const MW = RW.filter((WW => !WW.justFinished));
          if (MW.length < 2) return [...RW];
          const wW = WW.indexOf(MW[0]),
            CW = WW.indexOf(MW[MW.length - 1]),
            zR = new Set(dC(WW));
          return WW.filter(((WW, MW) => RW.includes(WW) || WW.done && zR.has(WW) && MW > wW && MW < CW))
        }(CW.rows, iR),
        JW = zR ? CW.rows : YW,
        PW = zR || yR ? [] : function(WW, RW) {
          const MW = new Array(RW.length + 1).fill(0),
            wW = new Set(dC(WW));
          let CW = 0;
          for (const zR of WW) CW < RW.length && zR === RW[CW] ? CW++ : zR.done && wW.has(zR) && MW[CW]++;
          return MW
        }(CW.rows, YW),
        IW = zR || YW.length < CW.rows.length || null !== CW.reward,
        oW = sC(CW),
        lW = oW ? bR(`${HN}questLineComplete`) : CW.tier ? Me(bR, CW.tier) : bR(`${HN}currentQuest`),
        FW = function(WW) {
          var RW, MW;
          if (sC(WW)) return null;
          const wW = null === (RW = WW.chapters) || void 0 === RW ? void 0 : RW.find((RW => {
            let [MW] = RW;
            return MW === WW.tier
          }));
          if (!wW) return null;
          const CW = wW[1].filter((WW => !WW[4]));
          if (0 === CW.length) return null;
          const zR = null === (MW = WW.name) || void 0 === MW ? void 0 : MW[0],
            AW = WW => CW.findIndex((RW => RW[0] === zR && (!WW || !RW[3]))),
            bR = AW(!0),
            yR = bR >= 0 ? bR : AW(!1);
          if (yR >= 0) return [yR + 1, CW.length];
          const NW = CW.filter((WW => WW[3])).length;
          return [Math.min(NW + 1, CW.length), CW.length]
        }(CW);
      return (0, gA.jsx)(PT.g, {
        placement: "topRight",
        children: (0, gA.jsx)(FT, {
          expanded: zR,
          inventoryOpen: BW,
          children: (0, gA.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: DN,
            children: [null !== CW.name && (0, gA.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [CW.pulse > 0 && (0, gA.jsx)("span", {
                className: "Baf2QuestTrackerPulse",
                "aria-hidden": "true"
              }, CW.pulse), (0, gA.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, gA.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [lW, FW && (0, gA.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": bR(`${HN}questPlaceLabel`, {
                      n: String(FW[0]),
                      total: String(FW[1])
                    }),
                    children: bR(`${HN}questPlace`, {
                      n: String(FW[0]),
                      total: String(FW[1])
                    })
                  }), CW.tier && CW.core && !oW && (0, gA.jsx)(we, {
                    core: CW.core,
                    t: bR
                  })]
                })
              }), (0, gA.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: bR(`${HN}${CW.name[0]}`, ZN(CW.name[1]))
              }), (TW.length > 1 || IW) && (0, gA.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [TW.length > 1 && (0, gA.jsx)(Ce, {
                  rows: TW,
                  t: bR
                }), IW && (0, gA.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": zR,
                  onClick: () => {
                    AW(!zR)
                  },
                  children: [(0, gA.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: bR(`${HN}questStepsToggle`, {
                      done: String(gR),
                      total: String(TW.length)
                    })
                  }), (0, gA.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: zR ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, gA.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [JW.map(((WW, RW) => {
                  var zR;
                  const AW = WW.current && CW.depth;
                  return (0, gA.jsxs)(wW.Fragment, {
                    children: [(null !== (zR = PW[RW]) && void 0 !== zR ? zR : 0) > 0 && (0, gA.jsx)(fT, {
                      amount: PW[RW],
                      t: bR
                    }), (0, gA.jsx)(zB, {
                      row: WW,
                      view: CW,
                      t: bR,
                      extra: AW && (0, gA.jsx)(oT, {
                        depth: AW,
                        store: MW,
                        t: bR
                      })
                    })]
                  }, WW.id)
                })), (null !== (RW = PW[JW.length]) && void 0 !== RW ? RW : 0) > 0 && (0, gA.jsx)(fT, {
                  amount: PW[JW.length],
                  t: bR
                }), CW.also.length > 0 && (0, gA.jsx)(lT, {
                  also: CW.also,
                  view: CW,
                  t: bR
                })]
              }), zR && CW.reward && (0, gA.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [bR(`${HN}questReward`), (0, gA.jsx)(SN, {
                  item: CW.reward
                }), qe(bR, CW.itemNames[CW.reward], CW.reward)]
              })]
            }), CW.side && (0, gA.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [(0, gA.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: bR(`${HN}questSide`)
              }), (0, gA.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: bR(`${HN}${CW.side.name[0]}`, ZN(CW.side.name[1]))
              }), (0, gA.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, gA.jsx)(zB, {
                  row: CW.side.row,
                  view: CW,
                  t: bR
                })
              })]
            })]
          })
        })
      })
    }
    const rg = "baf2ToastView";
    class cg {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = WW, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: WW,
          holdMs: RW
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const WW = this.dropCovered();
          WW && this.show(WW.message, WW.holdMs)
        }), 250));
        const MW = this.dropCovered();
        null !== MW && (MW.holdMs > 0 || "baf2ToastCelebrate" === MW.message.baf2ToastStyle) && "baf2ToastCelebrate" !== WW.baf2ToastStyle && this.show(MW.message, MW.holdMs);
        const wW = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== WW.baf2ToastStyle && wW > 0) return this.pending = {
          message: WW,
          holdMs: RW
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const WW = this.pending;
          this.pending = null, WW && this.present(WW.message, WW.holdMs)
        }), wW));
        this.present(WW, RW)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(WW, RW) {
        this.clearTimers(), this.pending = null;
        const MW = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: WW.baf2ToastText,
          style: WW.baf2ToastStyle,
          swapped: MW,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === WW.baf2ToastStyle ? 1500 : RW), this.Sz();
        const wW = Math.min(8e3, Math.max(1e3, WW.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.Cw()
        }), wW)
      }
      Cw() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.Sz(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.Sz()
        }), 200))
      }
      clearTimers() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), null !== this.pendingTimer && (clearTimeout(this.pendingTimer), this.pendingTimer = null)
      }
      dropCovered() {
        null !== this.coveredTimer && (clearInterval(this.coveredTimer), this.coveredTimer = null);
        const WW = this.covering;
        return this.covering = null, WW
      }
      Sz() {
        QC.k.Sz(rg, this.view, !0)
      }
    }
    var XT = MW(93);
    const jg = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function kg(WW) {
      let {
        store: RW
      } = WW;
      const MW = (0, ON.i)(rg, RW.get()),
        {
          openInGameMenuName: wW,
          openEverythingMenuName: CW
        } = (0, BC.i)(["openInGameMenuName", "openEverythingMenuName"]),
        zR = MW && (0, gA.jsxs)("div", {
          className: gz()("Baf2Toast", jg[MW.style], {
            Swapped: MW.swapped,
            Leaving: MW.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === MW.style && (0, gA.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, gA.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, gA.jsx)(lC.c, {
              text: MW.text
            })
          })]
        }, MW.id);
      return null !== wW && null === CW ? (0, XT.createPortal)((0, gA.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: zR
      }), document.body) : (0, gA.jsx)(PT.g, {
        children: zR
      })
    }
    const ag = "baf2AreaView";
    class sT {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.mM = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.mM = null
      }
      arrive(WW, RW) {
        RW && function(WW) {
          return "home" === WW.baf2AreaPlace && void 0 !== WW.baf2AreaNameText
        }(WW) ? this.mM = WW : this.show(WW)
      }
      release() {
        const WW = this.mM;
        null !== WW && this.show(WW)
      }
      show(WW) {
        this.clearTimer(), this.mM = null;
        const RW = void 0 === WW.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: WW,
          ms: RW
        }, this.Sz(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.Sz()
        }), RW)
      }
      dispose() {
        this.clearTimer(), this.mM = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      Sz() {
        QC.k.Sz(ag, this.view, !0)
      }
    }

    function dT(WW) {
      var RW;
      let {
        store: MW
      } = WW;
      const {
        t: wW
      } = (0, PC.C)(), CW = (0, ON.i)(ag, MW.get());
      if (!CW) return null;
      const {
        area: zR
      } = CW, AW = zR.baf2AreaResetMinutes;
      return (0, gA.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": zR.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${CW.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, gA.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), zR.baf2AreaHeading && (0, gA.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: wW(zR.baf2AreaHeading)
        }), (0, gA.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (RW = zR.baf2AreaNameText) && void 0 !== RW ? RW : wW(zR.baf2AreaName)
        }), zR.baf2AreaNote && (0, gA.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: wW(zR.baf2AreaNote)
        }), void 0 !== AW && (0, gA.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: wW("buildAFactory2Game:areaWildsReset", {
            time: ez(wW, 60 * AW)
          })
        })]
      }, CW.id)
    }
    const pT = "baf2GearGauge";
    class hT {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      FX(WW) {
        var RW;
        if (this.clearLinger(), null === WW.gearPowerKind) return void this.set(null);
        const MW = "jetpack" === WW.gearPowerKind && (wW = WW.gearChargeState, CW = WW.gearCharge, "flying" === wW || "charging" === wW || "outOfCharge" === wW || "ceiling" === wW || "offPlot" === wW || "noPower" === wW && CW <= 0);
        var wW, CW;
        const zR = !0 === (null === (RW = this.view) || void 0 === RW ? void 0 : RW.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          AW = MW || "jetpack" === WW.gearPowerKind && zR;
        this.set({
          gauge: WW,
          jetShown: AW
        }), AW && !MW && (this.lingerTimer = setTimeout((() => {
          this.lingerTimer = null, this.view && this.set({
            ...this.view,
            jetShown: !1
          })
        }), 1500))
      }
      dispose() {
        this.clearLinger(), this.view = null
      }
      set(WW) {
        this.view = WW, QC.k.Sz(pT, WW, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const UT = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function ET(WW) {
      let {
        store: RW
      } = WW;
      const MW = (0, ON.i)(pT, RW.get());
      return MW ? "jetpack" === MW.gauge.gearPowerKind ? (0, gA.jsx)(VT, {
        view: MW
      }) : (0, gA.jsx)(mg, {
        gauge: MW.gauge
      }) : null
    }

    function VT(WW) {
      let {
        view: RW
      } = WW;
      const {
        t: MW
      } = (0, PC.C)(), {
        gauge: wW
      } = RW, CW = wW.gearChargeMax > 0 ? Math.max(0, Math.min(1, wW.gearCharge / wW.gearChargeMax)) : 0, zR = UT[wW.gearChargeState], AW = zR ? MW(zR) : null;
      return (0, gA.jsxs)("div", {
        className: gz()("Baf2JetArc", {
          Shown: RW.jetShown,
          Low: CW < .2,
          Warm: CW >= .2 && CW < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - CW)
        },
        "aria-hidden": !RW.jetShown,
        children: [(0, gA.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, gA.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: xg,
            pathLength: 100
          }), (0, gA.jsx)("path", {
            className: "Baf2JetArcFill",
            d: xg,
            pathLength: 100
          })]
        }), (0, gA.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * CW), "%"]
        }), AW && (0, gA.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: AW
        })]
      })
    }

    function mg(WW) {
      let {
        gauge: RW
      } = WW;
      const {
        t: MW
      } = (0, PC.C)(), wW = function(WW, RW) {
        switch (RW.gearPowerKind) {
          case "skyPack":
            return WW("buildAFactory2Game:gearSkyPack", {
              charge: RW.gearCharge,
              max: RW.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return WW("buildAFactory2Game:gearIslandDraw", {
              power: qR(RW.gearIslandPower),
              cost: qR(RW.gearCostPerUse)
            });
          case "barrier":
            return WW("buildAFactory2Game:gearBarrier", {
              shield: Math.round(RW.gearCharge),
              max: RW.gearChargeMax,
              power: qR(RW.gearIslandPower)
            });
          default:
            return null
        }
      }(MW, RW);
      return null === wW ? null : (0, gA.jsx)(PT.g, {
        children: (0, gA.jsx)("div", {
          className: gz()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === RW.gearChargeState || "outOfCharge" === RW.gearChargeState
          }),
          role: "status",
          children: wW
        })
      })
    }
    const xg = (() => {
      const WW = WW => {
        const RW = WW * Math.PI / 180;
        return `${(40*Math.cos(RW)).toFixed(2)} ${(40*Math.sin(RW)).toFixed(2)}`
      };
      return `M ${WW(160)} A 40 40 0 1 1 ${WW(380)}`
    })();
    class vg {
      constructor(WW) {
        this.onElement = WW, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      FX(WW) {
        let RW = WW.baf2LabelsReset || WW.baf2LabelsIsland !== this.island;
        RW && (this.labels.clear(), this.island = WW.baf2LabelsIsland);
        for (const [MW, wW, CW, zR, AW] of WW.baf2LabelsList) {
          const WW = `${MW},${wW},${CW}`,
            bR = this.labels.get(WW);
          null === zR ? RW = this.labels.delete(WW) || RW : bR && bR.item === zR && (bR.count === AW || bR.count >= 0 && AW >= 0) ? (bR.count = AW, this.writeCount(WW, AW)) : (this.labels.set(WW, {
            key: WW,
            pos: [MW, wW, CW],
            item: zR,
            count: AW
          }), this.writeCount(WW, AW), RW = !0)
        }
        if (this.changes++, RW) {
          this.snapshot = [...this.labels.values()];
          for (const WW of this.listeners) WW()
        }
      }
      bindCount(WW) {
        const RW = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${WW}`;
        let MW = this.countRefs.get(RW);
        return MW || (MW = MW => {
          var wW, CW;
          MW ? (this.countElements.set(RW, MW), this.writeCount(WW, null !== (wW = null === (CW = this.labels.get(WW)) || void 0 === CW ? void 0 : CW.count) && void 0 !== wW ? wW : -1)) : (this.countElements.delete(RW), this.countRefs.delete(RW))
        }, this.countRefs.set(RW, MW)), MW
      }
      setCountWords(WW) {
        this.countWords = WW;
        for (const [RW, MW] of this.labels) this.writePart(`words|${RW}`, WW(MW.count), MW.count)
      }
      writeCount(WW, RW) {
        this.writePart(`bare|${WW}`, yA(RW), RW), this.countElements.has(`words|${WW}`) && this.writePart(`words|${WW}`, this.countWords(RW), RW)
      }
      writePart(WW, RW, MW) {
        const wW = this.countElements.get(WW);
        wW && MW >= 0 && wW.textContent !== RW && (wW.textContent = RW)
      }
      list() {
        return this.snapshot
      }
      at(WW) {
        return this.labels.get(`${WW[0]},${WW[1]},${WW[2]}`)
      }
      version() {
        return this.changes
      }
      subscribe(WW) {
        return this.listeners.add(WW), () => {
          this.listeners.delete(WW)
        }
      }
      bind(WW) {
        let RW = this.refs.get(WW);
        return RW || (RW = RW => {
          const MW = this.elements.get(WW);
          var wW, CW;
          MW && (null === (wW = this.onElement) || void 0 === wW || wW.call(this, MW, !1));
          RW ? (this.elements.set(WW, RW), null === (CW = this.onElement) || void 0 === CW || CW.call(this, RW, !0)) : (this.elements.delete(WW), this.refs.delete(WW))
        }, this.refs.set(WW, RW)), RW
      }
      onAfterRender(WW, RW, MW, wW) {
        for (const CW of this.snapshot) {
          const zR = this.elements.get(CW.key);
          if (!zR) continue;
          if (wW(CW.key)) {
            ut(zR, !0);
            continue
          }
          const AW = nt(zR, WW, RW, CW.pos, 1.1, 24);
          AW && MW.add(AW, zR, 0, !1)
        }
      }
    }
    const KT = (0, wW.memo)((function(WW) {
        let {
          item: RW
        } = WW;
        return (0, gA.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, gA.jsx)(oC.c, {
            itemName: RW,
            amount: 0
          })
        })
      })),
      uT = (0, wW.memo)((function(WW) {
        let {
          label: RW,
          bindRef: MW,
          countRef: wW,
          wordsRef: CW
        } = WW;
        return (0, gA.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: MW,
          hidden: !0,
          children: [(0, gA.jsx)(KT, {
            item: RW.item
          }), RW.count >= 0 && (0, gA.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, gA.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: CW
            }), (0, gA.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: wW
            })]
          })]
        })
      })),
      OT = (0, wW.memo)((function(WW) {
        let {
          store: RW
        } = WW;
        const {
          t: MW
        } = (0, PC.C)(), [CW, zR] = (0, wW.useState)((() => RW.list()));
        return (0, wW.useEffect)((() => (zR(RW.list()), RW.subscribe((() => {
          zR(RW.list())
        })))), [RW]), (0, wW.useEffect)((() => {
          RW.setCountWords((WW => MW("buildAFactory2Game:labelSiloCount", {
            count: yA(WW)
          })))
        }), [RW, MW]), (0, gA.jsx)("div", {
          className: "Baf2IslandLabels",
          children: CW.map((WW => -2 === WW.count ? null : (0, gA.jsx)(uT, {
            label: WW,
            bindRef: RW.bind(WW.key),
            countRef: RW.bindCount(WW.key),
            wordsRef: RW.bindCount(WW.key, "words")
          }, WW.key)))
        })
      })),
      nT = {
        read: () => !0,
        write: () => {}
      };

    function GT(WW) {
      return `${WW[0]},${WW[1]},${WW[2]}`
    }

    function LT(WW) {
      let [RW, MW, wW, CW, zR, AW, bR, yR, NW, eW, BW, tR] = WW;
      const TW = void 0 === BW || void 0 === tR ? function(WW) {
        return [Math.floor((WW - 1) / 2), 0]
      }(zR) : [BW, tR];
      return {
        kind: 0 === yR ? "reactor" : "battery",
        box: pM([RW, MW, wW], CW, zR, AW, bR, TW),
        formed: 1 === NW,
        level: eW
      }
    }
    class HT {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nT;
        this.guideSetting = WW, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = WW.read()
      }
      FX(WW) {
        var RW;
        const MW = new Map;
        for (const wW of WW.baf2RxPlanList) {
          const WW = LT(wW);
          MW.set(GT(WW.box.ctrl), WW)
        }
        this.plans = MW, this.layouts = new Map((null !== (RW = WW.baf2RxLayouts) && void 0 !== RW ? RW : []).map((WW => {
          let [RW, MW, wW, CW] = WW;
          return [GT([RW, MW, wW]), CW]
        }))), this.predicted.clear(), WW.baf2RxFormedAt && (this.formed = {
          ctrl: WW.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const wW of [...this.startersOff]) {
          const WW = MW.get(wW);
          WW && !WW.formed || this.startersOff.delete(wW)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((WW => this.planByKey(WW)))
      }
      planAt(WW) {
        return this.planByKey(GT(WW))
      }
      predictSize(WW, RW) {
        this.predicted.set(GT(WW), RW), this.changed()
      }
      unpredict(WW) {
        this.predicted.delete(GT(WW)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(WW) {
        var RW;
        const MW = GT(WW);
        return this.predicted.has(MW) ? null : null !== (RW = this.layouts.get(MW)) && void 0 !== RW ? RW : null
      }
      showsStarter(WW) {
        return !this.startersOff.has(GT(WW))
      }
      setStarter(WW, RW) {
        const MW = GT(WW);
        RW ? this.startersOff.delete(MW) : this.startersOff.add(MW), this.changed()
      }
      guideOn() {
        return this.guide
      }
      setGuide(WW) {
        this.guide = WW, this.guideSetting.write(WW), this.changed()
      }
      getVersion() {
        return this.version
      }
      subscribe(WW) {
        return this.listeners.add(WW), () => {
          this.listeners.delete(WW)
        }
      }
      dispose() {
        this.plans.clear(), this.predicted.clear(), this.startersOff.clear(), this.layouts.clear(), this.listeners.clear(), this.formed = null
      }
      planByKey(WW) {
        const RW = this.plans.get(WW);
        if (!RW) return null;
        const MW = this.predicted.get(WW);
        return MW ? {
          ...RW,
          box: UM(RW.box, RW.kind, MW[0], MW[1], MW[2])
        } : RW
      }
      changed() {
        this.version++;
        for (const WW of this.listeners) WW()
      }
    }
    var DT = MW(173);
    const qg = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function ZT(WW, RW, MW, wW) {
      const CW = WW.length / 3;
      for (let zR = 0; zR < qg.length / 3; zR++) WW.push(qg[3 * zR] * wW[0] / 2 + MW[0], qg[3 * zR + 1] * wW[1] / 2 + MW[1], qg[3 * zR + 2] * wW[2] / 2 + MW[2]);
      for (let zR = CW; zR < CW + 24; zR += 4) RW.push(zR, zR + 1, zR + 2, zR, zR + 2, zR + 3)
    }

    function ST(WW, RW, MW) {
      const wW = RW[0][0],
        CW = [],
        zR = [];
      for (const [AW, bR] of RW) ZT(CW, zR, [AW[0] - wW[0], AW[1] - wW[1], AW[2] - wW[2]], bR);
      return WW.createGameMesh({
        positions: CW,
        indices: zR
      }, MW, wW)
    }

    function Wg(WW, RW) {
      const MW = WW.w - 2,
        wW = WW.d - 2;
      return 1 === function(WW, RW, MW, wW) {
        const [CW, zR, AW] = WW;
        if (Number(CW <= 2) + Number(zR <= 2) + Number(AW <= 2) >= 2) return function(WW, RW, MW) {
          return (WW + RW + MW) % 2 === 0 ? 1 : 3
        }(RW, MW, wW);
        const [bR, yR] = CW >= zR && CW >= AW ? [MW, wW] : zR >= AW ? [RW, wW] : [RW, MW];
        return bR % 2 === 0 && yR % 2 === 0 ? 1 : 3
      }([MW, WW.h - 2, wW], RW % MW, Math.floor(RW / (MW * wW)), Math.floor(RW / MW) % wW) ? "rod" : "channel"
    }

    function Rg(WW, RW, MW) {
      if ("reactor" !== WW.kind || WW.formed || !RW) return !1;
      const wW = mw(WW.box);
      for (let CW = 0; CW < wW; CW++) {
        const WW = MW(CW);
        if (null !== WW && lM(WW)) return !1
      }
      return !0
    }

    function Mg(WW, RW, MW, wW, CW) {
      var zR;
      let AW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const bR = nM(WW.box, RW),
        yR = DM(WW.kind, bR, MW);
      if ("wrong" === yR || "blocked" === yR) return "wrong";
      if (!CW) return null;
      if ("inside" === bR && "reactor" === WW.kind && "Air" === FM(MW)) {
        if (null !== AW) {
          var NW;
          const MW = pB[hB(AW, GM(WW.box, RW))];
          return MW && null !== (NW = gN(MW)) && void 0 !== NW ? NW : null
        }
        if (wW) return Wg(WW.box, GM(WW.box, RW))
      }
      if ("missing" !== yR) return null;
      const eW = qw(WW.kind, bR);
      return null === eW ? null : null !== (zR = gN(eW)) && void 0 !== zR ? zR : null
    }
    const wg = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Cg(WW, RW, MW) {
      const wW = MW => {
        const wW = RW(uM(WW.box, MW));
        return null !== wW && function(WW, RW) {
          return "reactor" !== WW.kind || RW !== vw(WW.box) && "inside" !== nM(WW.box, RW)
        }(WW, MW) && "ok" !== DM(WW.kind, nM(WW.box, MW), wW)
      };
      if (MW) {
        const zR = OM(WW.box, [Math.floor(MW[0]), Math.floor(MW[1]), Math.floor(MW[2])]);
        if (zR >= 0 && (wW(zR) || (CW = zR, "reactor" === WW.kind && "inside" === nM(WW.box, CW) && "Air" === RW(uM(WW.box, CW))))) return zR
      }
      var CW;
      const zR = mw(WW.box);
      for (let AW = 0; AW < zR; AW++)
        if (wW(AW)) return AW;
      return -1
    }

    function zi(WW, RW) {
      return Math.floor(RW / (WW.w * WW.d))
    }

    function Ag(WW, RW, MW) {
      return MW >= 0 && zi(WW, RW) > zi(WW, MW)
    }

    function bi(WW, RW) {
      return RW >= 0 && WW.h >= 3 && zi(WW, RW) === WW.h - 1
    }

    function yi(WW) {
      const RW = FM(WW);
      return RW === eM || "Collider" === RW || "Laser" === RW || RW.startsWith("_Collider ")
    }

    function Ng(WW, RW, MW, wW) {
      if (wW(WW)) return null;
      if (!wg.every((RW => {
          let [wW, CW, zR] = RW;
          const AW = MW([WW[0] + wW, WW[1] + CW, WW[2] + zR]);
          return null !== AW && !kw("reactor", AW) && "reactor" !== fM(AW)
        }))) return null;
      const CW = aw("reactor").min,
        zR = pM([WW[0], WW[1], WW[2]], function(WW, RW) {
          const MW = RW[0] - (WW[0] + .5),
            wW = RW[2] - (WW[2] + .5);
          return Math.abs(MW) >= Math.abs(wW) ? MW >= 0 ? 2 : 4 : wW >= 0 ? 1 : 3
        }(WW, RW), CW, CW, CW, hM("reactor", CW)),
        AW = vw(zR);
      let bR = !0;
      for (let yR = 0; yR < mw(zR) && bR; yR++) {
        if (yR === AW) continue;
        const WW = uM(zR, yR),
          RW = MW(WW);
        bR = !wW(WW) && (null === RW || !yi(RW))
      }
      return {
        box: zR,
        fits: bR
      }
    }
    const eg = Ty,
      Bg = "baf2Goal",
      ti = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      Tg = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      gi = .4;

    function ii(WW, RW) {
      let [MW, wW, CW] = WW;
      const zR = ly([MW - .02, wW - .02, CW - .02], [MW + 1.02, wW + 1.02, CW + 1.02], .07);
      return RW && (zR.push([
        [MW + .5, wW + 1 + .7, CW + .5],
        [.08, 1.4, .08]
      ]), zR.push([
        [MW + .5, wW + 1 + 1.4 + .2, CW + .5],
        [gi, gi, gi]
      ])), zR
    }

    function Yg(WW, RW) {
      let [MW, wW, CW] = RW;
      return WW.isBlockInLoadedChunk(MW, wW, CW) ? WW.blockIdToBlockName(WW.getBlockId(MW, wW, CW)) : null
    }
    let Jg = null;
    const Pg = new Set;
    let Ig = null;

    function og(WW) {
      Jg = WW;
      for (const RW of Pg) RW(WW)
    }
    class lg {
      constructor(WW) {
        var RW;
        this.plans = WW, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (RW = WW => {
          var RW, MW;
          this.setGoal(null !== (RW = null === WW || void 0 === WW ? void 0 : WW.goal) && void 0 !== RW ? RW : null, null !== (MW = null === WW || void 0 === WW ? void 0 : WW.startsBattery) && void 0 !== MW && MW)
        }, Ig ??= [QC.k.subscribe("setDirectionArrow", (WW => {
          let {
            id: RW,
            position: MW,
            text: wW
          } = WW;
          RW === Bg && og({
            goal: [Math.floor(MW[0]), Math.floor(MW[1]), Math.floor(MW[2])],
            startsBattery: JSON.stringify(null !== wW && void 0 !== wW ? wW : null).includes("arrowStartBattery")
          })
        })), QC.k.subscribe("clearDirectionArrow", (WW => {
          let {
            id: RW
          } = WW;
          null !== RW && RW !== Bg || og(null)
        }))], Pg.add(RW), RW(Jg), () => {
          Pg.delete(RW)
        })
      }
      onAfterRender(WW, RW) {
        const MW = performance.now();
        if (this.cues.length > 0) {
          const RW = .55 + .45 * Math.sin(MW / 1100 * Math.PI * 2);
          for (const MW of this.cues) WW.setGameMesh(MW, {
            visibility: RW
          })
        }
        if (MW - this.lastCheckMs < 150) return;
        this.lastCheckMs = MW;
        const wW = this.plans.all().filter((WW => {
            const [MW, wW, CW] = WW.box.ctrl;
            return (!WW.formed || null !== this.plans.layoutOf(WW.box.ctrl)) && (MW - RW[0]) ** 2 + (wW - RW[1]) ** 2 + (CW - RW[2]) ** 2 <= 2304
          })),
          CW = function(WW, RW) {
            const MW = DT.c.dw,
              wW = new Map;
            for (const zR of RW) {
              const RW = uM(zR.box, 0),
                AW = uM(zR.box, mw(zR.box) - 1),
                bR = [Math.min(RW[0], AW[0]), Math.min(RW[1], AW[1]), Math.min(RW[2], AW[2])].map((WW => Math.floor(WW / MW))),
                yR = [Math.max(RW[0], AW[0]), Math.max(RW[1], AW[1]), Math.max(RW[2], AW[2])].map((WW => Math.floor(WW / MW)));
              for (let MW = bR[0]; MW <= yR[0]; MW++)
                for (let RW = bR[1]; RW <= yR[1]; RW++)
                  for (let zR = bR[2]; zR <= yR[2]; zR++) {
                    var CW;
                    wW.set(`${MW},${RW},${zR}`, null !== (CW = WW.getChunkVersion(MW, RW, zR)) && void 0 !== CW ? CW : -1)
                  }
            }
            return wW
          }(WW, wW);
        this.plans.getVersion() === this.storeVersion && (function(WW, RW) {
          if (WW.size !== RW.size) return !1;
          for (const [MW, wW] of WW)
            if (RW.get(MW) !== wW) return !1;
          return !0
        }(CW, this.chunkVersions) || MW - this.lastRescanMs < 600) || (this.lastRescanMs = MW, this.storeVersion = this.plans.getVersion(), this.chunkVersions = CW, this.redraw(WW, wW))
      }
      dispose(WW) {
        this.unwatch(), Jg = null, this.clearMeshes(WW), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(WW, RW) {
        var MW;
        (null === WW || void 0 === WW ? void 0 : WW.join()) === (null === (MW = this.goal) || void 0 === MW ? void 0 : MW.join()) && RW === this.startsBattery || (this.goal = WW, this.startsBattery = RW, this.storeVersion = -1)
      }
      redraw(WW, RW) {
        const MW = RW => Yg(WW, RW),
          wW = new Map,
          CW = [],
          zR = this.plans.guideOn();
        for (const NW of RW) {
          const WW = zR && Rg(NW, this.plans.showsStarter(NW.box.ctrl), (WW => MW(uM(NW.box, WW)))),
            RW = "reactor" === NW.kind ? this.plans.layoutOf(NW.box.ctrl) : null,
            AW = zR && !NW.formed ? Cg(NW, MW, this.goal) : -1;
          AW >= 0 && CW.push([uM(NW.box, AW), bi(NW.box, AW)]);
          const bR = mw(NW.box);
          for (let CW = 0; CW < bR; CW++) {
            const bR = uM(NW.box, CW),
              yR = MW(bR),
              eW = null === yR ? null : Mg(NW, CW, yR, WW, zR, RW);
            if (null !== eW) {
              const WW = "wrong" !== eW && Ag(NW.box, CW, AW),
                RW = WW ? `${eW}Dim` : eW;
              let MW = wW.get(RW);
              MW || (MW = {
                draw: {
                  ghost: eW,
                  dim: WW
                },
                list: []
              }, wW.set(RW, MW)), MW.list.push(bR)
            }
          }
        }
        if (zR && this.startsBattery && this.goal) {
          const [WW, RW, CW] = this.goal, zR = [];
          for (const [wW, AW, bR] of ti) {
            const yR = [WW + wW, RW + AW, CW + bR];
            "Air" === MW(yR) && zR.push(yR)
          }
          if (zR.length > 0) {
            var AW;
            const WW = null !== (AW = wW.get("cell")) && void 0 !== AW ? AW : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            WW.list.push(...zR), wW.set("cell", WW)
          }
        }
        const bR = [...wW.keys()].sort(),
          yR = [...bR.map((WW => `${WW}:${wW.get(WW).list.join(";")}`)), `cue:${CW.join(";")}`].join("|");
        if (yR !== this.shownKey) {
          this.shownKey = yR, this.clearMeshes(WW);
          for (const RW of bR) {
            const {
              draw: MW,
              list: CW
            } = wW.get(RW);
            this.meshes.push(this.build(WW, MW, CW))
          }
          for (const [RW, MW] of CW) this.cues.push(ST(WW, ii(RW, MW), Tg))
        }
      }
      build(WW, RW, MW) {
        let {
          ghost: wW,
          dim: CW
        } = RW;
        const {
          size: zR,
          colour: AW,
          alpha: bR
        } = eg[wW], yR = MW[0], NW = [], eW = [];
        for (const [BW, tR, TW] of MW) ZT(NW, eW, [BW - yR[0] + .5, tR - yR[1] + .5, TW - yR[2] + .5], [zR, zR, zR]);
        return WW.createGameMesh({
          positions: NW,
          indices: eW
        }, {
          rgb: AW,
          alpha: bR * (CW ? .3 : 1)
        }, yR)
      }
      clearMeshes(WW) {
        for (const RW of [...this.meshes, ...this.cues]) WW.disposeGameMesh(RW);
        this.meshes = [], this.cues = []
      }
    }
    const Fg = [.56, .83, 1],
      fg = [1, .3, .25];
    class Qg {
      constructor(WW) {
        this.plans = WW, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(WW, RW, MW) {
        var wW;
        const CW = performance.now();
        if (CW - this.lastCheckMs < 150) return;
        this.lastCheckMs = CW;
        const zR = RW => Yg(WW, RW),
          AW = null === (wW = WW.HbW(RW)) || void 0 === wW ? void 0 : wW.name,
          bR = AW && "Reactor Frame" === FM(AW) ? WW.getTargetedBlock() : null,
          yR = bR ? [bR.hz[0], bR.hz[1], bR.hz[2]] : null,
          NW = null !== yR && "Air" === zR(yR) && yR.every(((WW, RW) => Math.abs(WW + .5 - MW[RW]) <= 8)) ? Ng(yR, MW, zR, (WW => this.inPlan(WW))) : null,
          eW = NW ? `${NW.box.ctrl.join()}|${NW.box.rot}|${NW.fits}` : "";
        eW !== this.shownKey && this.show(WW, eW, NW)
      }
      dispose(WW) {
        this.clear(WW), this.shownKey = ""
      }
      inPlan(WW) {
        return this.plans.all().some((RW => OM(RW.box, WW) >= 0))
      }
      show(WW, RW, MW) {
        if (this.clear(WW), this.shownKey = RW, !MW) return;
        const {
          box: wW,
          fits: CW
        } = MW, zR = CW ? Fg : fg, {
          lo: AW,
          hi: bR
        } = oy(wW);
        this.meshes.push(ST(WW, ly(AW, bR, .05), {
          rgb: zR,
          alpha: 1
        }));
        const yR = [],
          NW = uM(wW, 0)[1];
        for (let eW = 0; eW < wW.w * wW.d; eW++) {
          const [WW, , RW] = uM(wW, eW);
          yR.push([
            [WW + .5, NW + .02 + .01, RW + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(ST(WW, yR, {
          rgb: zR,
          alpha: .25
        }))
      }
      clear(WW) {
        for (const RW of this.meshes) WW.disposeGameMesh(RW);
        this.meshes = []
      }
    }
    const ri = "buildAFactory2Game:";

    function ci(WW, RW, MW) {
      const wW = WW => {
          const [MW, wW, CW] = WW.box.ctrl;
          return MW === RW[0] && wW === RW[1] && CW === RW[2]
        },
        CW = WW.find((WW => wW(WW) || OM(WW.box, RW) >= 0));
      if (!CW) return null;
      const zR = function(WW, RW, MW) {
        const {
          w: wW,
          h: CW,
          d: zR
        } = WW.box, AW = "reactor" === WW.kind ? `${ri}rxTitle` : `${ri}batTitle`;
        if (WW.formed) return {
          key: `${ri}lookPlanFormed`,
          kindKey: AW,
          w: wW,
          h: CW,
          d: zR,
          count: 0
        };
        let bR = 0,
          yR = 0;
        for (let eW = 0; eW < mw(WW.box); eW++) {
          const RW = MW(uM(WW.box, eW)),
            wW = null === RW ? "ok" : DM(WW.kind, nM(WW.box, eW), RW);
          bR += "missing" === wW ? 1 : 0, yR += "wrong" === wW || "blocked" === wW ? 1 : 0
        }
        const NW = function(WW, RW, MW) {
          if (RW < 0 || null === MW) return;
          const wW = nM(WW.box, RW),
            CW = DM(WW.kind, wW, MW);
          return "blocked" === CW ? `${ri}lookWhy_blocked` : "wrong" === CW ? "ctrl" === wW ? `${ri}lookWhy_ctrl` : `${ri}lookWhy_reactor_${wW}` : void 0
        }(WW, OM(WW.box, RW), MW([RW[0], RW[1], RW[2]]));
        if (bR > 0) return {
          key: `${ri}lookPlanToBuild`,
          kindKey: AW,
          w: wW,
          h: CW,
          d: zR,
          count: bR,
          why: NW
        };
        if (yR > 0) return {
          key: `${ri}lookPlanTakeOut`,
          kindKey: AW,
          w: wW,
          h: CW,
          d: zR,
          count: yR,
          why: NW
        };
        return {
          key: "reactor" === WW.kind ? `${ri}lookPlanNoRods` : `${ri}lookPlanDone`,
          kindKey: AW,
          w: wW,
          h: CW,
          d: zR,
          count: 0
        }
      }(CW, RW, MW);
      return "reactor" === CW.kind && wW(CW) ? {
        ...zR,
        ctrl: !0
      } : zR
    }

    function Xg(WW, RW) {
      return WW === RW || null !== WW && null !== RW && WW.key === RW.key && WW.kindKey === RW.kindKey && WW.w === RW.w && WW.h === RW.h && WW.d === RW.d && WW.count === RW.count && WW.why === RW.why && WW.ctrl === RW.ctrl
    }

    function ji() {
      return performance.now()
    }
    class ki {
      constructor(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ji;
        this.ticket = WW, this.sent = RW, this.backstopMs = MW, this.now = wW, this.queuedAt = void 0, this.queuedAt = wW()
      }
      answered() {
        const WW = this.now(),
          RW = this.sent.leftAt(this.ticket);
        return null !== RW && WW - RW > 4e3 || WW - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class ai {
      constructor() {
        this.echoes = []
      }
      add(WW) {
        this.echoes = this.echoes.filter((WW => !WW.answered())), this.echoes.push(WW)
      }
      answered() {
        var WW, RW;
        return null === (WW = null === (RW = this.echoes.at(-1)) || void 0 === RW ? void 0 : RW.answered()) || void 0 === WW || WW
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((WW => WW.answered()))
      }
      age() {
        var WW, RW;
        return null !== (WW = null === (RW = this.echoes.at(-1)) || void 0 === RW ? void 0 : RW.age()) && void 0 !== WW ? WW : null
      }
      clear() {
        this.echoes = []
      }
    }
    class sg {
      constructor(WW) {
        this.send = WW, this.value = null, this.sent = null, this.echoes = new ai, this.down = !1, this.timer = null
      }
      shown(WW) {
        return null === this.value ? WW : this.down || this.value !== this.sent ? this.value : WW === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), WW) : this.value
      }
      pendingFor(WW) {
        return null !== this.value && this.value === this.sent && WW !== this.value ? this.echoes.age() : null
      }
      assume(WW, RW) {
        this.disarm(), this.down = !1, this.value = WW, this.sent = WW, this.echoes.clear(), this.echoes.add(RW)
      }
      press() {
        this.down = !0
      }
      drag(WW) {
        this.value = WW, this.arm(this.down ? 1e3 : 400)
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
      arm(WW) {
        this.disarm(), this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), WW)
      }
      disarm() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
    class dg {
      constructor() {
        this.pending = new Map
      }
      set(WW, RW, MW) {
        var wW;
        const CW = null !== (wW = this.pending.get(WW)) && void 0 !== wW ? wW : {
          on: RW,
          echoes: new ai
        };
        CW.on = RW, CW.echoes.add(MW), this.pending.set(WW, CW)
      }
      shown(WW) {
        let RW = WW;
        for (const [MW, {
            on: wW,
            echoes: CW
          }] of this.pending) 0 !== (WW & MW) === wW && CW.agreeCounts() || CW.answered() ? this.pending.delete(MW) : RW = wW ? RW | MW : RW & ~MW;
        return RW
      }
      pendingMask() {
        let WW = 0;
        for (const RW of this.pending.keys()) WW |= RW;
        return WW
      }
      pendingFor(WW) {
        let RW = null;
        for (const [wW, {
            on: CW,
            echoes: zR
          }] of this.pending) {
          if (void 0 !== WW && 0 !== (WW & wW) === CW) continue;
          const AW = zR.age();
          var MW;
          if (null !== AW) RW = Math.max(null !== (MW = RW) && void 0 !== MW ? MW : 0, AW)
        }
        return RW
      }
      clear() {
        this.pending.clear()
      }
    }
    class pg {
      constructor() {
        this.dims = null, this.echoes = new ai, this.unmet = null
      }
      shown(WW) {
        var RW;
        return this.dims && (hg(this.dims, WW) && this.echoes.agreeCounts() || this.echoes.answered()) && (hg(this.dims, WW) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (RW = this.dims) && void 0 !== RW ? RW : WW
      }
      takeUnmet() {
        const WW = this.unmet;
        return this.unmet = null, WW
      }
      set(WW, RW) {
        this.dims = WW, this.echoes.add(RW)
      }
      pendingFor(WW) {
        return null === this.dims || WW && hg(this.dims, WW) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function hg(WW, RW) {
      return WW[0] === RW[0] && WW[1] === RW[1] && WW[2] === RW[2]
    }
    class Ug {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ji;
        this.now = WW, this.taps = new Map
      }
      tap(WW, RW, MW) {
        return !this.busy(WW) && (this.taps.set(WW, {
          at: this.now(),
          done: RW
        }), MW(), !0)
      }
      settle(WW) {
        for (const [RW, MW] of [...this.taps]) MW.done(WW) && this.taps.delete(RW)
      }
      busy(WW) {
        const RW = this.taps.get(WW);
        return !!RW && (!(this.now() - RW.at >= 3e3) || (this.taps.delete(WW), !1))
      }
      busyIds() {
        const WW = new Set;
        for (const RW of [...this.taps.keys()]) this.busy(RW) && WW.add(RW);
        return WW
      }
      clear() {
        this.taps.clear()
      }
    }

    function Eg(WW) {
      return {
        send: RW => WW.track(RW),
        sendUrgent: (RW, MW) => WW.track(RW, {
          urgent: !0,
          supersedes: MW
        }),
        leftAt: RW => WW.leftAt(RW),
        holdReserve: () => WW.holdUrgentReserve(),
        answerMs: FA
      }
    }

    function Vg() {
      return performance.now()
    }

    function mi(WW) {
      const RW = WW.baf2RxNeed.map((WW => {
        let [RW, MW] = WW;
        return [RW, MW]
      }));
      return JSON.stringify([WW.baf2RxFormed, RW, WW.baf2RxBad, WW.baf2RxCells])
    }

    function xi(WW, RW) {
      const MW = 0 !== (RW & zM),
        wW = 0 !== (WW.baf2RxFlags & zM);
      return !MW || wW || "running" !== WW.baf2RxState && "idle" !== WW.baf2RxState ? !MW && wW && "scram" === WW.baf2RxState && WW.baf2RxFuel > 0 ? "idle" : WW.baf2RxState : "scram"
    }

    function vi(WW) {
      return JSON.stringify([WW.baf2BatFormed, WW.baf2BatNeed, WW.baf2BatBad])
    }

    function Kg(WW) {
      return WW.join(",")
    }
    class ug {
      constructor() {
        this.listeners = new Set
      }
      subscribe(WW) {
        return this.listeners.add(WW), () => {
          this.listeners.delete(WW)
        }
      }
      notify() {
        for (const WW of this.listeners) WW()
      }
      clear() {
        this.listeners.clear()
      }
    }
    class Og {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(WW, RW) {
        this.lastAt = WW, this.lastUntil = WW + RW
      }
      answered(WW) {
        return this.lastAt >= WW || WW < this.lastUntil
      }
    }
    class ng {
      constructor(WW, RW) {
        this.link = WW, this.now = RW, this.hold = new pg, this.picked = null, this.notTaken = null
      }
      shown(WW) {
        const RW = this.hold.shown(WW);
        if (this.hold.takeUnmet() && this.picked) {
          var MW;
          const {
            plans: RW,
            ctrl: wW,
            at: CW
          } = this.picked;
          this.picked = null, RW.unpredict(wW), null === (MW = this.notTaken) || void 0 === MW || MW.call(this, WW, CW)
        }
        return RW
      }
      pendingFor(WW) {
        return this.hold.pendingFor(WW)
      }
      WM(WW, RW, MW) {
        WW.predictSize(RW, MW), this.picked = {
          plans: WW,
          ctrl: RW,
          at: this.now()
        };
        const wW = this.link.send(CR(RW, "plan", ...MW));
        this.hold.set(MW, new ki(wW, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class Gg {
      constructor(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Vg;
        this.plans = WW, this.readInterior = RW, this.link = MW, this.now = wW, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new dg, this.throttle = void 0, this.oneShots = void 0, this.listeners = new ug, this.redraw = null, this.releaseReserve = null, this.size = new ng(MW, wW), this.oneShots = new Ug(wW), this.throttle = new sg((WW => this.echo(this.link.send(this.command("throttle", WW)))))
      }
      set(WW) {
        !WW.baf2RxOpen && this.raw && Kg(this.raw.baf2RxAt) === Kg(WW.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(WW), this.Sz(WW)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(WW) {
        this.size.notTaken = WW
      }
      resize(WW) {
        this.raw && (this.size.WM(this.plans, this.raw.baf2RxAt, WW), this.Sz(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const WW = this.raw.baf2RxAt;
        this.plans.setStarter(WW, !this.plans.showsStarter(WW)), this.Sz(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.Sz(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.Sz(this.raw)
      }
      send(WW) {
        if (this.raw) {
          for (var RW = arguments.length, MW = new Array(RW > 1 ? RW - 1 : 0), wW = 1; wW < RW; wW++) MW[wW - 1] = arguments[wW];
          this.link.send(this.command(WW, ...MW))
        }
      }
      tap(WW, RW) {
        this.raw && this.oneShots.tap(WW, function(WW, RW) {
          if ("start" === WW) return WW => 0 === (WW.baf2RxFlags & zM);
          if ("odConfirm" === WW) return WW => 0 !== (WW.baf2RxFlags & AR);
          const MW = mi(RW);
          return WW => mi(WW) !== MW
        }(WW, this.raw), RW) && ("start" === WW && (this.startedAt = this.now()), this.Sz(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(zM, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(WW, RW) {
        if (!this.raw) return;
        const MW = WW === zM ? this.command(RW ? "scram" : "start") : this.command("od", RW ? 1 : 0),
          wW = RW && WW === zM,
          CW = `${wR} ${this.raw.baf2RxAt.join(" ")} `,
          zR = this.echo(wW ? this.link.sendUrgent(MW, (WW => {
            const RW = WW.startsWith(CW) ? WW.slice(CW.length).split(" ")[0] : null;
            return "throttle" === RW || "start" === RW
          })) : this.link.send(MW));
        this.flags.set(WW, RW, zR), wW && this.throttle.assume(0, zR), this.Sz(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(WW) {
        this.throttle.drag(WW), this.raw && this.Sz(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.Sz(this.raw)
      }
      subscribe(WW) {
        return this.listeners.subscribe(WW)
      }
      opened() {
        this.releaseReserve ??= this.link.holdReserve()
      }
      closed() {
        var WW;
        this.throttle.release(), null === (WW = this.releaseReserve) || void 0 === WW || WW.call(this), this.releaseReserve = null
      }
      dispose() {
        this.closed(), this.throttle.clear(), this.flags.clear(), this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.raw = null, this.looksOf = null, this.listeners.clear()
      }
      command(WW) {
        for (var RW = arguments.length, MW = new Array(RW > 1 ? RW - 1 : 0), wW = 1; wW < RW; wW++) MW[wW - 1] = arguments[wW];
        return CR(this.raw.baf2RxAt, WW, ...MW)
      }
      echo(WW) {
        return new ki(WW, this.link, this.link.answerMs, this.now)
      }
      Sz(WW) {
        var RW;
        this.raw = WW;
        const MW = this.flags.shown(WW.baf2RxFlags),
          wW = {
            ...WW,
            baf2RxFlags: MW,
            baf2RxTarget: this.throttle.shown(WW.baf2RxTarget),
            baf2RxState: xi(WW, MW)
          },
          CW = this.size.shown(wW.baf2RxDims),
          zR = this.throttle.pendingFor(),
          AW = [this.throttle.pendingFor(WW.baf2RxTarget), this.flags.pendingFor(WW.baf2RxFlags), this.size.pendingFor(WW.baf2RxDims)].filter((WW => null !== WW)),
          bR = AW.length > 0 ? Math.max(...AW) : null,
          yR = this.oneShots.busyIds(),
          NW = wW.baf2RxAt;
        let eW, BW, tR = null,
          TW = [Math.max(0, CW[0] - 2), Math.max(0, CW[1] - 2), Math.max(0, CW[2] - 2)];
        if (wW.baf2RxFormed) {
          const [WW, RW, MW] = wW.baf2RxDims;
          TW = [Math.max(0, WW - 2), Math.max(0, RW - 2), Math.max(0, MW - 2)], eW = Array.from(wW.baf2RxCells, Number), BW = `${TW.join(",")}:${wW.baf2RxCells}`
        } else {
          var gR;
          const WW = null === (gR = this.plans.planAt(NW)) || void 0 === gR ? void 0 : gR.box,
            RW = WW ? UM(WW, "reactor", ...CW) : pM(NW, 1, ...CW, hM("reactor", CW[0])),
            MW = this.readInterior(RW);
          tR = Kb(TW, MW), eW = MW, BW = `${TW.join(",")}:${MW.join("")}`
        }(null === (RW = this.looksOf) || void 0 === RW ? void 0 : RW.key) !== BW && (this.looksOf = {
          key: BW,
          looks: Hb(TW, eW)
        }), this.view = {
          status: wW,
          dims: CW,
          plan: tR,
          inner: TW,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(NW),
          odConfirmed: this.odConfirmed || 0 !== (wW.baf2RxFlags & tM),
          guide: this.plans.guideOn(),
          throttlePending: null !== zR,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== bR && bR >= 5e3,
          busy: yR,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== bR || yR.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.Sz(this.raw)
        }), 250))
      }
    }
    class Lg {
      constructor(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Vg;
        this.plans = WW, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new ug, this.redraw = null, this.size = new ng(RW, MW), this.oneShots = new Ug(MW)
      }
      set(WW) {
        !WW.baf2BatOpen && this.view && Kg(this.view.status.baf2BatAt) === Kg(WW.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(WW), this.Sz(WW)
      }
      tap(WW, RW) {
        if (!this.view) return;
        const MW = vi(this.view.status);
        this.oneShots.tap(WW, (WW => vi(WW) !== MW), RW) && this.Sz(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(WW) {
        this.size.notTaken = WW
      }
      resize(WW) {
        this.view && (this.size.WM(this.plans, this.view.status.baf2BatAt, WW), this.Sz(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.Sz(this.view.status)
      }
      subscribe(WW) {
        return this.listeners.subscribe(WW)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      Sz(WW) {
        const RW = this.size.shown(WW.baf2BatDims),
          MW = this.oneShots.busyIds();
        this.view = {
          status: WW,
          dims: RW,
          aR: Ny(RW, WW.baf2BatDims) ? WW.baf2BatCapacity : Zb(...RW),
          guide: this.plans.guideOn(),
          busy: MW
        }, this.listeners.notify(), MW.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.Sz(this.view.status)
        }), 250))
      }
    }
    const Hg = "buildAFactory2Game:";

    function Dg() {
      var WW;
      const RW = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!RW) return null;
      const MW = RW.querySelector(".ExitButton");
      return function(WW, RW) {
        const MW = RW ? RW.left - 8 : WW.right;
        return {
          left: WW.left,
          top: WW.top,
          width: Math.max(0, MW - WW.left),
          height: WW.height
        }
      }(RW.getBoundingClientRect(), null !== (WW = null === MW || void 0 === MW ? void 0 : MW.getBoundingClientRect()) && void 0 !== WW ? WW : null)
    }
    const qi = (0, wW.memo)((function(WW) {
      let {
        store: RW
      } = WW;
      const {
        t: MW
      } = (0, PC.C)(), [CW, zR] = (0, wW.useState)((() => RW.get())), [AW, bR] = (0, wW.useState)((() => performance.now()));
      (0, wW.useEffect)((() => (zR(RW.get()), RW.subscribe((() => {
        zR(RW.get()), bR(performance.now())
      })))), [RW]);
      const {
        alarm: yR,
        boomAt: NW
      } = CW, eW = null !== yR && null !== yR.secs, [BW, tR] = (0, wW.useState)(null);
      (0, wW.useEffect)((() => {
        if (!eW) return;
        tR(Dg());
        const WW = setInterval((() => {
          bR(performance.now()), tR(Dg())
        }), 250);
        return () => {
          clearInterval(WW)
        }
      }), [eW]);
      const [TW, gR] = (0, wW.useState)(!1);
      return (0, wW.useEffect)((() => {
        if (NW === -1 / 0) return;
        gR(!0);
        const WW = setTimeout((() => {
          gR(!1)
        }), 1300);
        return () => {
          clearTimeout(WW)
        }
      }), [NW]), (0, gA.jsxs)(gA.Fragment, {
        children: [null !== yR && (0, gA.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: MW(yR.hot ? `${Hg}rxAlarmSiren` : `${Hg}rxAlarmDamaged`, {
            amount: String(yR.damage)
          })
        }), null !== yR && null !== yR.secs && (0, gA.jsx)("div", {
          className: BW ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== BW && void 0 !== BW ? BW : void 0,
          "aria-live": "assertive",
          children: MW(`${Hg}rxAlarmCountdown`, {
            amount: String((iR = yR.secs, YW = AW - yR.receivedAt, Math.max(1, Math.ceil(iR - YW / 1e3))))
          })
        }), TW && (0, gA.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var iR, YW
    }));
    class Zg {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      FX(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const MW = WW.baf2RxAlarmAt.join(",");
        let wW = this.snapshot.boomAt;
        if (WW.baf2RxAlarmBoom) this.byReactor.delete(MW), wW = RW;
        else if (WW.baf2RxAlarmDamage <= 0) this.byReactor.delete(MW);
        else {
          var CW;
          this.byReactor.set(MW, {
            damage: WW.baf2RxAlarmDamage,
            secs: null !== (CW = WW.baf2RxAlarmSecs) && void 0 !== CW ? CW : null,
            hot: !0 === WW.baf2RxAlarmHot,
            receivedAt: RW
          })
        }
        this.Sz(wW)
      }
      retain(WW) {
        let RW = !1;
        for (const MW of [...this.byReactor.keys()]) WW.has(MW) || (this.byReactor.delete(MW), RW = !0);
        RW && this.Sz(this.snapshot.boomAt)
      }
      has(WW) {
        return this.byReactor.has(WW)
      }
      get() {
        return this.snapshot
      }
      subscribe(WW) {
        return this.listeners.add(WW), () => {
          this.listeners.delete(WW)
        }
      }
      dispose() {
        this.listeners.clear(), this.byReactor.clear()
      }
      Sz(WW) {
        let RW = null;
        for (const MW of this.byReactor.values())(!RW || MW.damage > RW.damage) && (RW = MW);
        this.snapshot = {
          alarm: RW,
          boomAt: WW
        };
        for (const MW of this.listeners) MW()
      }
    }
    const Sg = {
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

    function Wi(WW) {
      return [WW[0], WW[1], WW[2]]
    }

    function Ri(WW) {
      return `${WW[0]},${WW[1]},${WW[2]}`
    }
    class Mi {
      constructor(WW) {
        if (this.plans = WW, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var WW;
            return {
              active: this.glows.flatMap((WW => {
                let {
                  record: RW
                } = WW;
                return RW ? [RW] : []
              })),
              log: [...null !== (WW = this.devLog) && void 0 !== WW ? WW : []]
            }
          }, this.devLog && "undefined" !== typeof window) {
          window.baf2Glows = this.devAccessor
        }
      }
      glowLog() {
        var WW;
        return null !== (WW = this.devLog) && void 0 !== WW ? WW : []
      }
      check(WW, RW, MW) {
        const wW = new Set(RW.map((WW => Ri(WW.box.ctrl))));
        for (const AW of function(WW, RW) {
            const MW = [],
              wW = new Map(WW);
            WW.clear();
            for (const CW of RW) {
              const RW = GT(CW.box.ctrl),
                zR = CW.formed ? CW.level : 0;
              WW.set(RW, zR), zR > 0 && 0 === wW.get(RW) && MW.push(CW)
            }
            return MW
          }(this.levels, this.plans.all())) wW.has(Ri(AW.box.ctrl)) && this.show(WW, AW, "on", MW);
        const CW = this.plans.lastFormed();
        if (null === CW || CW.receivedAt <= this.flashedAt) return null;
        this.flashedAt = CW.receivedAt;
        const zR = function(WW, RW) {
          var MW;
          const wW = GT(WW);
          return null !== (MW = RW.find((WW => GT(WW.box.ctrl) === wW))) && void 0 !== MW ? MW : null
        }(CW.ctrl, RW);
        return zR && this.show(WW, zR, "formed", MW), zR
      }
      fade(WW, RW) {
        0 !== this.glows.length && (this.glows = this.glows.filter((MW => {
          let {
            mesh: wW,
            glow: CW,
            startMs: zR,
            record: AW
          } = MW;
          const bR = (RW - zR) / Sg[CW].ms;
          return bR >= 1 ? (WW.disposeGameMesh(wW), AW && (AW.endMs = RW), !1) : (WW.setGameMesh(wW, {
            visibility: "formed" === CW ? 1 - bR : Math.sin(Math.PI * bR)
          }), !0)
        })))
      }
      dispose(WW) {
        for (const {
            mesh: MW
          }
          of this.glows) WW.disposeGameMesh(MW);
        this.glows = [], this.levels.clear();
        const RW = "undefined" !== typeof window ? window : null;
        (null === RW || void 0 === RW ? void 0 : RW.baf2Glows) === this.devAccessor && delete RW.baf2Glows
      }
      show(WW, RW, MW, wW) {
        const {
          lo: CW,
          hi: zR
        } = oy(RW.box);
        let AW = null;
        this.devLog && (AW = {
          glow: MW,
          ctrl: Wi(RW.box.ctrl),
          lo: Wi(CW),
          hi: Wi(zR),
          startMs: wW,
          endMs: null
        }, this.devLog.push(AW), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(WW, MW, ly(CW, zR, Sg[MW].thick)),
          glow: MW,
          startMs: wW,
          record: AW
        })
      }
      build(WW, RW, MW) {
        const wW = ST(WW, MW, {
          rgb: Sg[RW].colour,
          alpha: 1
        });
        return WW.setGameMesh(wW, {
          visibility: 0
        }), wW
      }
    }
    const wi = 1 / .6,
      Ci = {
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
        blendMode: fb.f.Standard,
        soft: !0
      },
      zY = {
        ...Ci,
        size: [.25, .4],
        count: 2
      };

    function Ai(WW) {
      return {
        colours: [WW, WW],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: fb.f.Add,
        soft: !1
      }
    }
    const bY = Ai([150, 225, 255]),
      yY = Ai([185, 145, 255]),
      Ni = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function ei(WW) {
      const RW = rM[WW];
      return null === RW.fuelSlot || DR(RW) ? Ni.includes(WW) ? yY : bY : Ci
    }
    const Bi = {
        kind: "smokePuff"
      },
      tY = [.2, .025, .2];

    function Ti(WW, RW) {
      const [
        [MW, wW, CW],
        [zR, AW, bR]
      ] = WW.colours;
      return {
        texture: WW.soft ? Bi : "square_particle",
        aR: RW,
        minLifeTime: WW.life[0] / wi,
        maxLifeTime: WW.life[1] / wi,
        minEmitPower: WW.power[0] * wi,
        maxEmitPower: WW.power[1] * wi,
        minSize: WW.size[0],
        maxSize: WW.size[1],
        emitRate: 0,
        gravity: [0, WW.lift * wi * wi, 0],
        dir1: [-WW.spread, 1, -WW.spread],
        dir2: [WW.spread, 1, WW.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [MW, wW, CW, WW.alpha],
          maxColor: [zR, AW, bR, WW.alpha]
        }, {
          timeFraction: 1,
          minColor: [MW, wW, CW, 0],
          maxColor: [zR, AW, bR, 0]
        }],
        blendMode: WW.blendMode
      }
    }
    class gY {
      constructor(WW) {
        this.fixed = WW, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(WW, RW, MW) {
        var wW;
        if (MW === this.lastFrame) return !1;
        this.lastFrame = MW;
        const CW = this.at;
        CW[0] = RW[0] + .5, CW[1] = RW[1] + 1.025, CW[2] = RW[2] + .5;
        const zR = null !== (wW = this.fixed) && void 0 !== wW ? wW : bR() ? zY : Ci;
        let AW = this.particles.get(zR);
        return AW || (AW = WW.createParticles(function(WW) {
          return Ti(WW, Math.ceil(12 * WW.count * WW.life[1]) + WW.count)
        }(zR), {
          pos: CW,
          half: tY
        }), this.particles.set(zR, AW)), AW.moveTo(CW), AW.emit(zR.count), !0
      }
      dispose() {
        for (const WW of this.particles.values()) WW.stop();
        this.particles.clear()
      }
    }
    class iY {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(WW) {
        this.indexed = !0;
        for (const RW of oR) {
          const MW = ei(RW);
          for (let wW = 1; wW <= 4; wW++) {
            const CW = WW.blockNameToBlockId(`${RW}|meta|rot${wW}|Running`, !0);
            if (null === CW) continue;
            let zR = this.pufferIndexByStyle.get(MW);
            void 0 === zR && (zR = this.pufferList.push(new gY(MW === Ci ? null : MW)) - 1, this.pufferIndexByStyle.set(MW, zR)), this.pufferIndexById[CW] = zR + 1
          }
        }
      }
      onAfterRender(WW, RW) {
        this.indexed || this.index(WW);
        const MW = performance.now(),
          wW = 0 === this.lastMs ? 0 : Math.min(MW - this.lastMs, 250) / 1e3;
        this.lastMs = MW, this.frame++, WW.particlesEnabled() ? (this.scan(WW, RW), this.puff(WW, wW)) : this.sources = []
      }
      dispose() {
        for (const WW of this.pufferList) WW.dispose();
        this.sources = [], this.found = []
      }
      scan(WW, RW) {
        0 === this.scanRow && (this.origin = [Math.floor(RW[0]) - 12, Math.floor(RW[1]) - 6, Math.floor(RW[2]) - 12]);
        const MW = Math.min(this.scanRow + 16, 325),
          [wW, CW, zR] = this.origin,
          AW = this.hits;
        AW.length = 0;
        for (let bR = this.scanRow; bR < MW; bR++) {
          const RW = wW + bR % 25,
            MW = CW + Math.floor(bR / 25);
          WW.scanBlocks(RW, MW, zR, RW + 1, MW + 1, zR + 25, this.pufferIndexById, AW)
        }
        for (let bR = 0; bR < AW.length; bR += 4) {
          const WW = AW[bR + 3];
          this.found.push({
            pos: [AW[bR], AW[bR + 1], AW[bR + 2]],
            Iz: WW,
            puffer: this.pufferList[this.pufferIndexById[WW] - 1]
          })
        }
        this.scanRow = MW, 325 === MW && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(WW, RW) {
        const MW = this.sources.length;
        if (0 !== MW) {
          this.budget = Math.min(this.budget + Math.min(MW / 1.2, 12) * RW, 2);
          for (let RW = 0; RW < MW && this.budget >= 1; RW++) {
            const RW = this.sources[this.cursor % MW];
            this.cursor = (this.cursor + 1) % MW, WW.getBlockId(RW.pos[0], RW.pos[1], RW.pos[2]) === RW.Iz && (RW.puffer.puff(WW, RW.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const Yi = {
        ...Ai([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      Ji = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function Pi(WW) {
      return 0 === WW.spots.length ? 0 : Math.min(1 * WW.level, 4)
    }

    function Ii(WW) {
      return 0 === WW.glass.length ? 0 : Math.min(.75 * WW.level, 3)
    }

    function oi(WW) {
      return `${WW.ctrl.join(",")}:${WW.rot}:${WW.cu},${WW.cv}:${WW.w},${WW.h},${WW.d}`
    }

    function li(WW, RW) {
      const MW = RW.w - 2,
        wW = RW.h - 2,
        CW = RW.d - 2,
        zR = [];
      for (let AW = 0; AW < MW * wW * CW; AW++) {
        const bR = AW % MW,
          yR = Math.floor(AW / MW) % CW,
          NW = Math.floor(AW / (MW * CW));
        if (bR > 0 && bR < MW - 1 && yR > 0 && yR < CW - 1 && NW > 0 && NW < wW - 1) continue;
        const eW = uM(RW, LM(RW, AW)),
          BW = Yg(WW, eW);
        if (null !== BW && "Fuel Rod" === FM(BW))
          for (const RW of Ji) {
            const MW = [eW[0] + RW[0], eW[1] + RW[1], eW[2] + RW[2]];
            fi(WW, MW) && zR.push(Qi(MW, RW))
          }
      }
      return zR
    }

    function Fi(WW, RW) {
      const {
        lo: MW,
        hi: wW
      } = oy(RW), CW = [];
      for (let zR = MW[0]; zR < wW[0]; zR++)
        for (let RW = MW[1]; RW < wW[1]; RW++) {
          const AW = zR === MW[0] || zR === wW[0] - 1 || RW === MW[1] || RW === wW[1] - 1 ? 1 : Math.max(1, wW[2] - 1 - MW[2]);
          for (let bR = MW[2]; bR < wW[2]; bR += AW) {
            const AW = [zR, RW, bR];
            if (!fi(WW, AW)) continue;
            const yR = zR === MW[0] ? Ji[1] : zR === wW[0] - 1 ? Ji[0] : bR === MW[2] ? Ji[5] : bR === wW[2] - 1 ? Ji[4] : RW === MW[1] ? Ji[3] : Ji[2];
            CW.push(Qi(AW, yR))
          }
        }
      return CW
    }

    function fi(WW, RW) {
      const MW = Yg(WW, RW);
      return null !== MW && "Reactor Glass" === FM(MW)
    }

    function Qi(WW, RW) {
      return [
        [WW[0] + .5 + .55 * RW[0], WW[1] + .5 + .55 * RW[1], WW[2] + .5 + .55 * RW[2]],
        [0 === RW[0] ? .4 : .02, 0 === RW[1] ? .4 : .02, 0 === RW[2] ? .4 : .02]
      ]
    }
    class rY {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(WW, RW, MW, wW) {
        const CW = [],
          zR = new Set;
        for (const NW of RW) {
          var AW, bR, yR;
          const {
            box: RW
          } = NW;
          if ("reactor" !== NW.kind || NW.level <= 0 || (RW.ctrl[0] - MW[0]) ** 2 + (RW.ctrl[1] - MW[1]) ** 2 + (RW.ctrl[2] - MW[2]) ** 2 > 576) continue;
          const eW = oi(RW);
          zR.add(eW);
          let BW = this.spots.get(eW);
          if ((!BW || wW - BW.at > 3e3) && (BW = {
              at: wW,
              spots: li(WW, RW),
              glass: Fi(WW, RW)
            }, this.spots.set(eW, BW)), 0 === BW.spots.length && 0 === BW.glass.length) continue;
          const tR = this.sparking.find((WW => WW.key === eW));
          CW.push({
            key: eW,
            level: NW.level,
            spots: BW.spots,
            glass: BW.glass,
            budget: null !== (AW = null === tR || void 0 === tR ? void 0 : tR.budget) && void 0 !== AW ? AW : 0,
            cursor: null !== (bR = null === tR || void 0 === tR ? void 0 : tR.cursor) && void 0 !== bR ? bR : 0,
            glassBudget: null !== (yR = null === tR || void 0 === tR ? void 0 : tR.glassBudget) && void 0 !== yR ? yR : 0
          })
        }
        for (const NW of this.spots.keys()) zR.has(NW) || this.spots.delete(NW);
        this.sparking = CW
      }
      emit(WW, RW, MW) {
        var wW;
        if (0 === this.sparking.length || !WW.particlesEnabled() || MW === this.lastFrame) return;
        this.lastFrame = MW;
        let CW = 0,
          zR = 0;
        for (const gR of this.sparking) CW += Pi(gR), zR += Ii(gR);
        const AW = CW > 8 ? 8 / CW : 1,
          bR = zR > 6 ? 6 / zR : 1;
        let yR, NW = null,
          eW = null;
        for (const gR of this.sparking) gR.budget = Math.min(gR.budget + Pi(gR) * AW * RW, 2), gR.budget >= 1 && (!NW || gR.budget > NW.budget) && (NW = gR), gR.glassBudget = Math.min(gR.glassBudget + Ii(gR) * bR * RW, 2), gR.glassBudget >= 1 && (!eW || gR.glassBudget > eW.glassBudget) && (eW = gR);
        if (NW) NW.budget--, yR = NW.spots[NW.cursor++ % NW.spots.length];
        else {
          if (!eW) return;
          eW.glassBudget--, yR = eW.glass[Math.floor(Math.random() * eW.glass.length)]
        }
        const [BW, tR] = yR, TW = null !== (wW = this.emitter) && void 0 !== wW ? wW : this.create(WW, BW, tR);
        TW.moveTo(BW, tR), TW.emit(Yi.count)
      }
      dispose() {
        var WW;
        null === (WW = this.emitter) || void 0 === WW || WW.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(WW, RW, MW) {
        const wW = Math.ceil(14 * Yi.count * Yi.life[1]) + Yi.count;
        return this.emitter = WW.createParticles(Ti(Yi, wW), {
          pos: RW,
          half: MW
        }), this.emitter
      }
    }
    const cY = [2, 3.2],
      Xi = 1 / 3,
      jY = 1 / .6,
      kY = {
        texture: Bi,
        aR: Math.ceil(18 * cY[1]) + 4,
        minLifeTime: cY[0] / jY,
        maxLifeTime: cY[1] / jY,
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
        blendMode: fb.f.Standard
      };
    class aY {
      constructor(WW) {
        this.plans = WW, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new rY, this.frame = 0, this.outline = new Mi(WW)
      }
      onAfterRender(WW, RW, MW) {
        const wW = performance.now(),
          CW = 0 === this.lastMs ? 0 : Math.min(wW - this.lastMs, 250) / 1e3;
        if (this.lastMs = wW, this.outline.fade(WW, wW), this.puff(WW, CW, MW), this.sparks.emit(WW, CW, this.frame++), wW - this.lastCheckMs < 150) return;
        this.lastCheckMs = wW;
        const zR = this.plans.all().filter((WW => WW.formed && si(WW.box.ctrl, MW) <= 4096));
        this.plumes = zR.filter((WW => "reactor" === WW.kind && WW.level > 0)).map((WW => ({
          box: WW.box,
          level: WW.level
        }))), this.updateHums(WW, RW, zR, MW), this.sparks.update(WW, zR, MW, wW), this.chimeFormed(WW, RW, zR, wW)
      }
      dispose(WW) {
        var RW;
        this.outline.dispose(WW), null === (RW = this.steam) || void 0 === RW || RW.dispose(), this.steam = null, this.sparks.dispose();
        for (const MW of this.hums.values()) MW.stop();
        this.hums.clear()
      }
      chimeFormed(WW, RW, MW, wW) {
        const CW = this.outline.check(WW, MW, wW);
        CW && WW.playSound(RW, "exp_levelup", .6, 1, {
          N7: [CW.box.ctrl[0] + .5, CW.box.ctrl[1], CW.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(WW, RW, MW) {
        const wW = this.plumes;
        if (0 === wW.length || !WW.particlesEnabled()) return void(this.plumeBudget = 0);
        const CW = wW.reduce(((WW, RW) => WW + 3 * RW.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + CW * RW, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let zR = this.plumeCursor % (CW / 3);
        this.plumeCursor++;
        let AW = wW[0];
        for (const BW of wW) {
          if (zR < BW.level) {
            AW = BW;
            break
          }
          zR -= BW.level
        }
        const {
          lo: bR,
          hi: yR
        } = oy(AW.box);
        if (function(WW, RW, MW) {
            const wW = Math.max(WW[0] - MW[0], 0, MW[0] - RW[0]),
              CW = Math.max(WW[2] - MW[2], 0, MW[2] - RW[2]);
            return Math.hypot(wW, MW[1] - RW[1], CW)
          }(bR, yR, MW) < 6 && Math.random() > Xi) return;
        const NW = [(bR[0] + yR[0]) / 2, yR[1] + .05, (bR[2] + yR[2]) / 2],
          eW = [(yR[0] - bR[0]) / 2 - .5, .05, (yR[2] - bR[2]) / 2 - .5];
        this.steam ??= WW.createParticles(kY, {
          pos: NW,
          half: eW
        }), this.steam.moveTo(NW, eW), this.steam.emit(1)
      }
      updateHums(WW, RW, MW, wW) {
        const CW = new Map;
        for (const AW of MW) "reactor" === AW.kind && AW.level > 0 && si(AW.box.ctrl, wW) <= 576 && CW.set(`${zR=AW.box.ctrl,`${zR[0]},${zR[1]},${zR[2]}`}:${AW.level}`, AW);
        var zR;
        for (const [AW, bR] of this.hums) CW.has(AW) || (bR.stop(), this.hums.delete(AW));
        for (const [AW, bR] of CW) {
          if (this.hums.has(AW)) continue;
          const {
            lo: MW,
            hi: wW
          } = oy(bR.box), CW = [(MW[0] + wW[0]) / 2, MW[1], (MW[2] + wW[2]) / 2], zR = WW.playSound(RW, "rocketEngineLoop", .08 + .06 * bR.level, .55, {
            N7: CW,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          zR && this.hums.set(AW, zR)
        }
      }
    }

    function si(WW, RW) {
      return (WW[0] - RW[0]) ** 2 + (WW[1] - RW[1]) ** 2 + (WW[2] - RW[2]) ** 2
    }
    class di {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      FX(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const wW = [WW.baf2BombAt[0], WW.baf2BombAt[1], WW.baf2BombAt[2]],
          CW = WW.baf2BombR;
        if (WW.baf2BombBoom) {
          const WW = Math.hypot(RW[0] - wW[0], RW[1] - wW[1], RW[2] - wW[2]);
          this.Sz({
            fuse: null,
            blast: {
              at: wW,
              r: CW,
              receivedAt: MW,
              distance: WW,
              flash: WW <= 3 * CW
            }
          })
        } else this.Sz({
          ...this.snapshot,
          fuse: WW.baf2BombMs > 0 ? {
            at: wW,
            r: CW,
            endsAt: MW + WW.baf2BombMs
          } : null
        })
      }
      get() {
        return this.snapshot
      }
      subscribe(WW) {
        return this.listeners.add(WW), () => {
          this.listeners.delete(WW)
        }
      }
      dispose() {
        this.listeners.clear(), this.snapshot = {
          fuse: null,
          blast: null
        }
      }
      Sz(WW) {
        this.snapshot = WW;
        for (const RW of this.listeners) RW()
      }
    }
    const piW = (0, wW.memo)((function(WW) {
      var RW;
      let {
        store: MW
      } = WW;
      const {
        t: CW
      } = (0, PC.C)(), [zR, AW] = (0, wW.useState)((() => MW.get())), [bR, yR] = (0, wW.useState)((() => performance.now()));
      (0, wW.useEffect)((() => (AW(MW.get()), MW.subscribe((() => {
        AW(MW.get()), yR(performance.now())
      })))), [MW]);
      const {
        fuse: NW,
        blast: eW
      } = zR;
      (0, wW.useEffect)((() => {
        if (!NW) return;
        const WW = setInterval((() => {
          yR(performance.now())
        }), 250);
        return () => {
          clearInterval(WW)
        }
      }), [NW]);
      const [BW, tR] = (0, wW.useState)(!1);
      (0, wW.useEffect)((() => {
        if (null === eW || void 0 === eW || !eW.flash) return;
        tR(!0);
        const WW = setTimeout((() => {
          tR(!1)
        }), 2500);
        return () => {
          clearTimeout(WW)
        }
      }), [eW]);
      const TW = NW ? function(WW, RW) {
        return WW.endsAt <= RW ? 0 : Math.ceil((WW.endsAt - RW) / 1e3)
      }(NW, bR) : 0;
      return (0, gA.jsxs)(gA.Fragment, {
        children: [TW > 0 && (0, gA.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: CW("buildAFactory2Game:bombCountdown", {
            amount: String(TW),
            radius: String(null !== (RW = null === NW || void 0 === NW ? void 0 : NW.r) && void 0 !== RW ? RW : 0)
          })
        }), BW && (0, gA.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function hiW(WW) {
      const RW = Math.min(4, Math.max(1, WW / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * WW / 4)),
        capSpread: Math.min(5 * WW / 8, 24 * RW),
        capThick: 6 * RW,
        stemHalfWidth: 3 * RW,
        puffScale: RW
      }
    }
    class Ui {
      constructor() {
        this.mM = !1
      }
      hold(WW) {
        WW.getCameraFar() < 1e3 && (WW.setCameraFar(1e3), this.mM = !0)
      }
      release(WW) {
        this.mM && (this.mM = !1, WW.setCameraFar(null))
      }
    }
    const Ei = 1 / .6,
      Vi = [.2, .1, .2],
      mY = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      xY = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: fb.f.Standard,
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
      vY = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: fb.f.Standard,
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
      Ki = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: fb.f.Standard,
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
      ui = {
        texture: Bi,
        aR: Math.ceil(120) + 4,
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
        blendMode: fb.f.Add
      };
    class Oi {
      constructor(WW) {
        this.store = WW, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new Ui, this.timers = []
      }
      onAfterRender(WW, RW) {
        const MW = performance.now(),
          wW = 0 === this.lastMs ? 0 : Math.min(MW - this.lastMs, 250) / 1e3;
        this.lastMs = MW;
        const {
          fuse: CW,
          blast: zR
        } = this.store.get();
        null !== zR && zR !== this.shownBlast && (this.shownBlast = zR, this.startBlast(WW, RW, zR, MW));
        const AW = WW.particlesEnabled();
        null !== CW && CW.endsAt > MW && AW ? this.emitBeacon(WW, CW, wW, MW) : this.beaconBudget = 0, null !== this.cloud && (MW - this.cloud.startMs > 33e3 ? this.disposeCloud(WW) : (this.far.hold(WW), AW && this.emitCloud(WW, wW, MW)))
      }
      dispose(WW) {
        var RW;
        null === (RW = this.beacon) || void 0 === RW || RW.dispose(), this.beacon = null, this.disposeCloud(WW);
        for (const MW of this.timers) clearTimeout(MW);
        this.timers.length = 0
      }
      emitBeacon(WW, RW, MW, wW) {
        const CW = RW.endsAt - wW < 5e3 ? 350 : 1e3,
          zR = .5 + .5 * Math.sin(2 * Math.PI * wW / CW);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * zR * MW, 4), this.beaconBudget < 1) return;
        const AW = Math.floor(this.beaconBudget);
        this.beaconBudget -= AW;
        const [bR, yR, NW] = RW.at, eW = [bR + .5, yR + 1.1, NW + .5];
        this.beacon ??= WW.createParticles(ui, {
          pos: eW,
          half: Vi
        }), this.beacon.moveTo(eW), this.beacon.emit(AW)
      }
      startBlast(WW, RW, MW, wW) {
        var CW;
        null === (CW = this.beacon) || void 0 === CW || CW.dispose(), this.beacon = null, this.disposeCloud(WW);
        const zR = (0, lb.isMobile)() ? .5 : 1;
        this.streams = [xY, vY, Ki].map((WW => {
          const RW = Math.round(WW.count * zR);
          return {
            spec: WW,
            particles: null,
            rate: RW / ((WW.toMs - WW.fromMs) / 1e3),
            budget: 0,
            left: RW
          }
        })), this.cloud = {
          blast: MW,
          startMs: wW
        };
        const AW = Math.max(.25, 1 - MW.distance / (6 * MW.r)),
          bR = MW.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [MW, wW, CW] of mY) Gi(WW, RW, MW, AW * wW, CW)
        }), bR))
      }
      emitCloud(WW, RW, MW) {
        const {
          blast: wW,
          startMs: CW
        } = this.cloud, zR = MW - CW, [AW, bR, yR] = wW.at, NW = hiW(wW.r);
        for (const eW of this.streams) {
          const {
            spec: MW
          } = eW;
          if (eW.left <= 0 || zR < MW.fromMs) continue;
          eW.budget += eW.rate * RW;
          const CW = Math.min(Math.floor(eW.budget), eW.left);
          if (CW < 1) continue;
          eW.budget -= CW, eW.left -= CW;
          const BW = eW.particles ??= this.createStream(WW, MW, wW);
          if (MW === xY) {
            const WW = NW.stemHalfWidth;
            BW.moveTo([AW, bR + 1, yR], [WW, 1, WW])
          } else if (MW === vY) {
            const WW = NW.capSpread * Math.min(1, (zR - MW.fromMs) / 3e3),
              RW = Math.sqrt(Math.random()),
              wW = 2 * Math.random() * Math.PI,
              CW = Math.cos(wW) * RW,
              eW = Math.sin(wW) * RW,
              tR = AW + CW * WW,
              TW = yR + eW * WW,
              gR = NW.capThick,
              iR = bR + NW.capHeight + gR * (1 - RW * RW) * 2;
            BW.setDirections([.7 * CW, .05, .7 * eW], [CW, .2, eW]), BW.moveTo([tR, iR, TW], [gR, gR, gR])
          } else {
            this.ringAngle += 2.39996;
            const WW = Math.cos(this.ringAngle),
              RW = Math.sin(this.ringAngle);
            BW.setDirections([WW, .05, RW], [WW, .1, RW]), BW.moveTo([AW + 2 * WW, bR + .5, yR + 2 * RW], [0, .5, 0])
          }
          BW.emit(CW)
        }
      }
      createStream(WW, RW, MW) {
        const {
          r: wW
        } = MW, CW = Math.max(RW.life[0], wW / 25), zR = RW === Ki ? [.9 * CW, CW] : RW.life, AW = hiW(wW), bR = RW === Ki ? 1 : AW.puffScale, yR = {
          texture: Bi,
          aR: RW.count + 4,
          minLifeTime: zR[0] / Ei,
          maxLifeTime: zR[1] / Ei,
          minSize: RW.size[0] * bR,
          maxSize: RW.size[1] * bR,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, RW.gravity * Ei * Ei, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: RW.from[0],
            maxColor: RW.from[1]
          }, {
            timeFraction: .6,
            minColor: ni(RW.from[0], RW.to[0]),
            maxColor: ni(RW.from[1], RW.to[1])
          }, {
            timeFraction: 1,
            minColor: RW.to[0],
            maxColor: RW.to[1]
          }],
          blendMode: RW.blend
        };
        if (RW === xY) {
          const WW = AW.capHeight / ((zR[0] + zR[1]) / 2);
          yR.minEmitPower = .9 * WW * Ei, yR.maxEmitPower = 1.05 * WW * Ei, yR.dir1 = [-.1, 1, -.1], yR.dir2 = [.1, 1, .1]
        } else RW === vY ? (yR.minEmitPower = 1.2, yR.maxEmitPower = 2, yR.dir1 = [-1, .05, -1], yR.dir2 = [1, .2, 1]) : (yR.minEmitPower = 39.583333333333336, yR.maxEmitPower = 41.66666666666667, yR.dir1 = [1, 0, 0], yR.dir2 = [1, 0, 0]);
        return WW.createParticles(yR, {
          pos: MW.at
        })
      }
      disposeCloud(WW) {
        for (const MW of this.streams) {
          var RW;
          null === (RW = MW.particles) || void 0 === RW || RW.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(WW)
      }
    }

    function ni(WW, RW) {
      return [(WW[0] + RW[0]) / 2, (WW[1] + RW[1]) / 2, (WW[2] + RW[2]) / 2, .75 * WW[3]]
    }

    function Gi(WW, RW, MW, wW, CW) {
      try {
        WW.playSound(RW, MW, wW, CW)
      } catch (zR) {
        console.error(zR)
      }
    }
    const Li = {
        aR: 720,
        perS: 100
      },
      Hi = {
        aR: 320,
        perS: 44
      };
    class Di {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(WW, RW) {
        this.zone = {
          centre: [...WW.centre],
          r: WW.r,
          band: WW.band ? [WW.band[0], WW.band[1]] : void 0
        }, this.endsAt = RW
      }
      stop() {
        this.zone = null
      }
      FX(WW, RW) {
        const {
          baf2FalloutMs: MW,
          baf2FalloutAt: wW,
          baf2FalloutR: CW,
          baf2FalloutY: zR
        } = WW;
        MW > 0 && wW && void 0 !== CW ? this.start({
          centre: wW,
          r: CW,
          band: zR
        }, RW + MW) : this.stop()
      }
      perS(WW, RW, MW) {
        const wW = this.zone;
        if (!wW) return 0;
        const CW = this.endsAt - WW;
        return CW <= 0 ? (this.zone = null, 0) : wW.band && (RW[1] < wW.band[0] || RW[1] > wW.band[1]) || Math.hypot(RW[0] - wW.centre[0], RW[2] - wW.centre[2]) > wW.r ? 0 : MW.perS * Math.min(1, CW / 5e3)
      }
    }
    const qY = [5, 7],
      Zi = [24, 8, 24],
      Si = .5,
      WY = 1 / .6,
      RY = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class MY {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, lb.isMobile)();
        this.state = new Di, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(WW) {
          return WW ? Hi : Li
        }(WW)
      }
      startFallout(WW, RW) {
        this.state.start(WW, RW)
      }
      stopFallout() {
        this.state.stop()
      }
      FX(WW) {
        this.state.FX(WW, performance.now())
      }
      onAfterRender(WW, RW) {
        var MW;
        const wW = performance.now(),
          CW = 0 === this.lastMs ? 0 : Math.min(wW - this.lastMs, 250) / 1e3;
        this.lastMs = wW;
        const zR = this.state.perS(wW, RW, this.tier);
        if (zR <= 0 || !WW.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + zR * CW, zR / 4);
        const AW = Math.floor(this.budget);
        if (AW < 1) return;
        this.budget -= AW;
        const bR = this.at;
        bR[0] = RW[0], bR[1] = RW[1] + 12, bR[2] = RW[2];
        const yR = null !== (MW = this.systems) && void 0 !== MW ? MW : this.create(WW, bR),
          NW = this.amounts;
        NW[0] = 0, NW[1] = 0;
        for (let eW = 0; eW < AW; eW++) NW[Math.random() < .3 ? 1 : 0]++;
        for (let eW = 0; eW < yR.length; eW++) NW[eW] > 0 && (yR[eW].moveTo(bR, Zi), yR[eW].emit(NW[eW]))
      }
      dispose() {
        for (const RW of null !== (WW = this.systems) && void 0 !== WW ? WW : []) {
          var WW;
          RW.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(WW, RW) {
        return this.systems = RY.map((MW => {
          let {
            rgba: [wW, CW, zR, AW],
            share: bR
          } = MW;
          const yR = {
            texture: "square_particle",
            aR: Math.ceil(this.tier.aR * bR),
            minLifeTime: qY[0] / WY,
            maxLifeTime: qY[1] / WY,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [Si, -1, Si],
            colorGradients: [{
              timeFraction: 0,
              minColor: [wW, CW, zR, 0]
            }, {
              timeFraction: .15,
              minColor: [wW, CW, zR, AW]
            }, {
              timeFraction: .8,
              minColor: [wW, CW, zR, AW]
            }, {
              timeFraction: 1,
              minColor: [wW, CW, zR, 0]
            }],
            blendMode: fb.f.Standard
          };
          return WW.createParticles(yR, {
            pos: RW,
            half: Zi
          })
        })), this.systems
      }
    }
    const wY = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function CY(WW) {
      const RW = /\|rot(\d)/.exec(WW);
      return wY[RW ? Number(RW[1]) : 1]
    }
    var zJ = MW(556),
      AY = MW(36537);
    const bJ = new Set(zJ.g);

    function yJ(WW) {
      if (-2 !== WW.count) return null;
      const RW = uW(WW.item);
      return null !== RW && bJ.has(RW) ? RW : null
    }

    function NY(WW) {
      const {
        width: RW,
        height: MW
      } = (0, AY.d)(WW).hitBoxDimensions;
      return .55 / Math.max(RW, MW)
    }

    function eY(WW, RW, MW) {
      if (!MW) return !1;
      const wW = WW[0] + .5 - RW[0],
        CW = WW[1] + .5 - RW[1],
        zR = WW[2] + .5 - RW[2];
      return wW * wW + CW * CW + zR * zR <= 576
    }

    function BY(WW, RW) {
      return Math.atan2(WW[0], WW[2]) + Math.PI + RW
    }

    function tJ(WW, RW) {
      const MW = 2 * Math.PI;
      return (WW + MW * RW / 1e4) % MW
    }
    class TY {
      constructor(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = WW, this.now = RW, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = WW.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(WW, RW) {
        if (0 === this.farms.size) return;
        const MW = this.now(),
          wW = Number.isNaN(this.frameMs) ? 0 : Math.min(MW - this.frameMs, 100);
        this.frameMs = MW, MW - this.checkedMs >= 1e3 && (this.checkedMs = MW, this.check(WW, RW));
        for (const CW of this.farms.values()) CW.shown && CW.running && null !== CW.model && wW > 0 && (CW.spin = tJ(CW.spin, wW), CW.model.setPose(CW.feet, BY(CW.front, CW.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const WW of this.farms.values()) this.drop(WW);
        this.farms.clear()
      }
      sync() {
        const WW = new Set;
        for (const RW of this.labels.list()) {
          const MW = yJ(RW);
          if (null === MW) continue;
          WW.add(RW.key);
          const wW = this.farms.get(RW.key);
          if ((null === wW || void 0 === wW ? void 0 : wW.mob) === MW) continue;
          wW && this.drop(wW);
          const [CW, zR, AW] = RW.pos;
          this.farms.set(RW.key, {
            pos: RW.pos,
            feet: [CW + .5, zR + 1, AW + .5],
            mob: MW,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [RW, MW] of this.farms) WW.has(RW) || (this.drop(MW), this.farms.delete(RW));
        this.checkedMs = -1 / 0
      }
      check(WW, RW) {
        for (const MW of this.farms.values()) {
          const [wW, CW, zR] = MW.pos, AW = Yg(WW, MW.pos);
          null !== AW && FM(AW) === hW && eY(MW.pos, RW, "Air" === Yg(WW, [wW, CW + 1, zR])) ? (MW.running = AW.endsWith("|Running"), MW.front = CY(AW), null === MW.model && (MW.model = WW.createMobModel(MW.mob, NY(MW.mob)), null === MW.model) || (MW.model.setPose(MW.feet, BY(MW.front, MW.spin)), MW.shown || (MW.model.setVisible(!0), MW.shown = !0))) : (MW.shown && null !== MW.model && MW.model.setVisible(!1), MW.shown = !1)
        }
      }
      drop(WW) {
        var RW;
        null === (RW = WW.model) || void 0 === RW || RW.dispose(), WW.model = null, WW.shown = !1
      }
    }
    class gJ {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(WW) {
        var RW;
        this.island = WW.baf2ColIsland, this.islandSite = (RW = WW.baf2ColSite) && 8 === RW.length ? {
          spawnXZ: [RW[0], RW[1]],
          coreXZ: [RW[2], RW[3]],
          minXZ: [RW[4], RW[5]],
          maxXZ: [RW[6], RW[7]]
        } : null, this.views = WW.baf2ColList.map((WW => ({
          entry: Zw(WW)
        }))), this.beamsVersion++, this.emit()
      }
      onStatus(WW) {
        this.status = WW, this.emit()
      }
      onOpen(WW) {
        this.openHeld = WW
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
        return this.views.map((WW => WW.entry))
      }
      entryAtRoot(WW) {
        var RW;
        return null === (RW = this.views.find((RW => {
          let {
            entry: MW
          } = RW;
          return MW.focus[0] === WW[0] && MW.focus[1] === WW[1] + 1 && MW.focus[2] === WW[2]
        }))) || void 0 === RW ? void 0 : RW.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(WW, RW) {
        return Xy(this.entries(), WW, RW)
      }
      lookSource() {
        return {
          handles: WW => Cw(WW) >= 0 || zC(WW),
          line: (WW, RW) => this.lookLine(WW, RW),
          version: () => this.beamsVersion
        }
      }
      subscribe(WW) {
        return this.listeners.add(WW), () => {
          this.listeners.delete(WW)
        }
      }
      dispose() {
        this.listeners.clear(), this.island = null, this.views = [], this.status = null, this.openHeld = null
      }
      emit() {
        for (const WW of this.listeners) WW()
      }
    }
    const iJ = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((WW => WW / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((WW => [WW, WW + 1, WW + 2, WW, WW + 2, WW + 3]))
    };

    function YY(WW, RW, MW, wW, CW, zR, AW) {
      let bR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const yR = Math.cos(bR),
        NW = Math.sin(bR),
        eW = WW.positions.length / 3,
        {
          positions: BW,
          indices: tR
        } = iJ;
      for (let TW = 0; TW < BW.length; TW += 3) {
        const bR = BW[TW] * CW,
          eW = BW[TW + 2] * AW;
        WW.positions.push(RW + bR * yR + eW * NW, MW + BW[TW + 1] * zR, wW - bR * NW + eW * yR)
      }
      for (const TW of tR) WW.indices.push(eW + TW)
    }

    function JY(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return RW < 1 ? {
        rgb: WW,
        alpha: RW
      } : {
        rgb: WW,
        alpha: 1,
        opaque: !0
      }
    }
    class PY {
      constructor(WW, RW) {
        this.style = WW, this.perSource = RW, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(WW) {
        this.sources = WW, 0 === WW.length && (this.budget = 0)
      }
      WR(WW, RW, MW) {
        const wW = this.sources.length;
        if (0 !== wW) {
          var CW, zR;
          this.budget = Math.min(this.budget + (CW = wW, zR = this.perSource, Math.min(CW * zR, Ky) * RW), 2);
          for (let RW = 0; RW < wW && this.budget >= 1; RW++) {
            const RW = this.sources[this.cursor % wW];
            this.cursor = (this.cursor + 1) % wW;
            if (!(Math.max(Math.abs(RW.x - MW[0]), Math.abs(RW.y - MW[1]), Math.abs(RW.z - MW[2])) > 32)) return this.puff(WW, RW), void this.budget--
          }
        }
      }
      dispose() {
        var WW;
        null === (WW = this.particles) || void 0 === WW || WW.dispose(), this.particles = null, this.sources = []
      }
      puff(WW, RW) {
        let {
          x: MW,
          y: wW,
          z: CW,
          h: zR,
          faces: AW
        } = RW;
        const bR = function(WW, RW, MW, wW, CW) {
            const [zR, AW, bR] = CW[Math.floor(Math.random() * CW.length)], yR = .04, NW = (WW, RW, MW) => WW > 0 ? RW + MW + yR : WW < 0 ? RW - yR : RW + .1, eW = (WW, RW, MW) => WW > 0 ? RW + MW + yR : WW < 0 ? RW - yR : RW + MW - .1, BW = [NW(zR, WW, 1), NW(AW, RW, wW), NW(bR, MW, 1)], tR = [eW(zR, WW, 1), eW(AW, RW, wW), eW(bR, MW, 1)];
            return {
              pos: [(BW[0] + tR[0]) / 2, (BW[1] + tR[1]) / 2, (BW[2] + tR[2]) / 2],
              half: [(tR[0] - BW[0]) / 2, (tR[1] - BW[1]) / 2, (tR[2] - BW[2]) / 2],
              out: [zR, AW, bR]
            }
          }(MW, wW, CW, zR, AW),
          {
            style: yR
          } = this,
          NW = this.particles ??= WW.createParticles(Ti(yR, Math.ceil(yR.count * Ky * yR.life[1]) + 4), bR);
        NW.moveTo(bR.pos, bR.half);
        const [eW, BW, tR] = bR.out, TW = yR.spread;
        NW.setDirections([eW - TW, .6 + BW, tR - TW], [eW + TW, 1 + BW, tR + TW]), NW.emit(yR.count)
      }
    }
    const IY = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class oY {
      constructor() {
        this.green = new PY(Oy.green, xN), this.pink = new PY(Oy.pink, vN), this.colliders = [], this.lastMs = 0
      }
      setSources(WW) {
        this.colliders = WW;
        const RW = [],
          MW = [];
        for (const wW of WW) {
          const [WW, CW, zR] = wW.focus;
          RW.push({
            x: WW,
            y: CW - 1,
            z: zR,
            h: 2,
            faces: IY
          });
          for (let RW = 0; RW < 4; RW++) {
            if (!wW.live[RW]) continue;
            const [WW, CW, zR] = yC(wW.focus, RW, ZM.LASER_D), [AW, , bR] = bC[RW], yR = IY.filter((WW => WW[0] !== AW || WW[2] !== bR || 0 !== WW[1]));
            MW.push({
              x: WW,
              y: CW,
              z: zR,
              h: 1,
              faces: yR
            })
          }
        }
        this.green.setSources(RW), this.pink.setSources(MW)
      }
      onAfterRender(WW) {
        const RW = performance.now(),
          MW = 0 === this.lastMs ? 0 : Math.min(RW - this.lastMs, 250) / 1e3;
        if (this.lastMs = RW, 0 === this.colliders.length || !WW.particlesEnabled()) return;
        const wW = WW.getCameraPosition();
        this.green.WR(WW, MW, wW), this.pink.WR(WW, MW, wW)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const lY = 1.04,
      FY = JY([1, 120 / 255, 220 / 255]),
      fY = JY([1, .25, .25], .35);
    class QY {
      constructor(WW) {
        this.store = WW, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new oY
      }
      onAfterRender(WW) {
        this.store.version() !== this.builtVersion && this.rebuild(WW);
        const RW = performance.now();
        for (const MW of this.beams) {
          const wW = 1 + .35 * Math.sin(RW / 700 * Math.PI * 2 + MW.phase);
          WW.setGameMesh(MW.mesh, {
            scale: [MW.alongX ? 1 : wW, wW, MW.alongX ? wW : 1]
          })
        }
        this.glow.onAfterRender(WW)
      }
      dispose(WW) {
        this.clear(WW), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(WW) {
        this.clear(WW), this.builtVersion = this.store.version();
        const RW = [];
        for (const {
            entry: MW
          }
          of this.store.colliders()) MW.on && MW.live.some(Boolean) && (this.addBeams(WW, MW), RW.push(MW)), MW.blockers.length > 0 && this.addMarkers(WW, MW);
        this.glow.setSources(RW)
      }
      addBeams(WW, RW) {
        const [MW, wW, CW] = RW.focus, zR = mN - .25, AW = (.25 + mN) / 2;
        for (let bR = 0; bR < 4; bR++) {
          if (!RW.live[bR]) continue;
          const [yR, , NW] = bC[bR], eW = 0 !== yR, BW = {
            positions: [],
            indices: []
          };
          YY(BW, 0, 0, 0, eW ? zR : .2, .2, eW ? .2 : zR);
          const tR = [MW + .5 + yR * AW, wW + .5, CW + .5 + NW * AW],
            TW = WW.createGameMesh(BW, FY, tR);
          this.meshes.push(TW), this.beams.push({
            mesh: TW,
            alongX: eW,
            phase: bR * Math.PI / 2
          })
        }
      }
      addMarkers(WW, RW) {
        const MW = RW.blockers[0],
          wW = {
            positions: [],
            indices: []
          };
        for (const [CW, zR, AW] of RW.blockers) YY(wW, CW - MW[0] + .5, zR - MW[1] + .5, AW - MW[2] + .5, lY, lY, lY);
        this.meshes.push(WW.createGameMesh(wW, fY, MW))
      }
      clear(WW) {
        for (const RW of this.meshes) WW.disposeGameMesh(RW);
        this.meshes = [], this.beams = []
      }
    }
    const rJ = [.56, .83, 1],
      cJ = [1, .73, .08],
      XY = [1, .25, .25],
      jJ = [.85, .85, .85],
      kJ = [.3, .45, .6];

    function aJ(WW, RW, MW, wW) {
      let CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        zR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const AW = CW / 2,
        bR = CW + zR;
      for (const yR of [-AW, AW])
        for (const CW of [-AW, AW]) YY(WW, RW, MW + yR, wW + CW, bR, zR, zR), YY(WW, RW + yR, MW, wW + CW, zR, bR, zR), YY(WW, RW + yR, MW + CW, wW, zR, zR, bR)
    }

    function sY(WW) {
      return RW => WW.isBlockInLoadedChunk(RW[0], RW[1], RW[2]) && 0 === WW.getBlockId(RW[0], RW[1], RW[2])
    }

    function dY(WW) {
      return WW.map((WW => {
        let {
          free: RW,
          blocked: MW,
          gaps: wW,
          supports: CW
        } = WW;
        return `${RW.join(";")}|${MW.join(";")}|${wW.join(";")}|${CW.join(";")}`
      })).join("/")
    }

    function pY(WW, RW, MW) {
      let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const zR = RW[0],
        AW = {
          positions: [],
          indices: []
        };
      for (const [bR, yR, NW] of RW) aJ(AW, bR - zR[0] + .5, yR - zR[1] + .5, NW - zR[2] + .5, wW, CW);
      return WW.createGameMesh(AW, MW, zR)
    }
    class hY {
      constructor(WW) {
        this.store = WW, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(WW, RW, MW) {
        var wW;
        const CW = null === (wW = WW.HbW(RW)) || void 0 === wW ? void 0 : wW.name;
        if (CW !== Ww && CW !== SM) return void("" !== this.shownKey && this.show(WW, "", []));
        const zR = performance.now();
        if (zR - this.lastCheckMs >= 200 && (this.lastCheckMs = zR, CW === Ww ? this.check(WW, MW) : this.preview(WW, MW)), this.pulses.length > 0) {
          const RW = 1 + .12 * Math.sin(zR / 1e3 * 1.25 * Math.PI * 2),
            MW = [RW, RW, RW];
          for (const wW of this.pulses) WW.setGameMesh(wW, {
            scale: MW
          })
        }
      }
      dispose(WW) {
        this.clear(WW), this.shownKey = ""
      }
      check(WW, RW) {
        const MW = sY(WW),
          wW = [];
        for (const {
            entry: zR
          }
          of this.store.colliders()) {
          zR.focus.every(((WW, MW) => Math.abs(WW + .5 - RW[MW]) <= ZM.GHOST_REACH)) && wW.push(Vy(zR, MW))
        }
        const CW = dY(wW);
        CW !== this.shownKey && this.show(WW, CW, wW)
      }
      preview(WW, RW) {
        const MW = WW.getTargetedBlock(),
          wW = MW ? [MW.hz[0], MW.hz[1], MW.hz[2]] : null,
          CW = null !== wW && wW.every(((WW, MW) => Math.abs(WW + .5 - RW[MW]) <= 8)),
          zR = this.store.site(),
          AW = CW && zR ? function(WW, RW, MW) {
            const wW = Aw(WW);
            if (!wW.every(RW)) return null;
            const CW = Bw(WW, MW);
            return {
              column: wW,
              spots: Vy({
                focus: wW[1],
                lasers: [!1, !1, !1, !1],
                open: CW,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, RW),
              fits: CW.filter(Boolean).length >= ZM.MIN_SPOTS
            }
          }(wW, sY(WW), zR) : null,
          bR = AW ? [AW.spots] : [],
          yR = AW ? `preview ${wW.join(",")}|${AW.fits}|${dY(bR)}` : "";
        var NW, eW;
        yR !== this.shownKey && this.show(WW, yR, bR, null !== (NW = null === AW || void 0 === AW ? void 0 : AW.column) && void 0 !== NW ? NW : [], null === (eW = null === AW || void 0 === AW ? void 0 : AW.fits) || void 0 === eW || eW)
      }
      show(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          CW = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(WW), this.shownKey = RW, wW.length > 0 && this.meshes.push(pY(WW, wW, JY(CW ? jJ : XY)));
        for (const {
            free: zR,
            blocked: AW,
            gaps: bR,
            supports: yR
          }
          of MW) {
          for (const [RW, MW, wW] of zR) {
            const CW = {
              positions: [],
              indices: []
            };
            aJ(CW, 0, 0, 0);
            const zR = WW.createGameMesh(CW, JY(rJ), [RW + .5, MW + .5, wW + .5]);
            this.meshes.push(zR), this.pulses.push(zR)
          }
          AW.length > 0 && this.meshes.push(pY(WW, AW, JY(cJ))), bR.length > 0 && this.meshes.push(pY(WW, bR, JY(XY), 1.06, .07)), yR.length > 0 && this.meshes.push(pY(WW, yR, JY(kJ)))
        }
      }
      clear(WW) {
        for (const RW of this.meshes) WW.disposeGameMesh(RW);
        this.meshes = [], this.pulses = []
      }
    }
    class UY {
      constructor() {
        this.stored = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(WW) {
        if (!WW.baf2TermOpen) return !1;
        WW.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [RW, MW] of WW.baf2TermItems) MW > 0 ? this.stored.set(RW, MW) : this.stored.delete(RW);
        if (this.pending = this.pending.filter((RW => RW.seq > WW.baf2TermAcked)), this.silos = WW.baf2TermSilos, this.readOnly = WW.baf2TermReadOnly, this.pocket = !0 === WW.baf2TermPocket, WW.baf2TermReset) this.resort();
        else
          for (const RW of this.stored.keys()) this.order.includes(RW) || this.order.push(RW);
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((WW, RW) => this.amount(RW) - this.amount(WW) || WW.localeCompare(RW))), this.changed()
      }
      take(WW, RW) {
        const MW = function(WW, RW) {
          const MW = "number" === typeof WW ? WW : "one" === WW ? 1 : "stack" === WW ? 99 : RW;
          return Math.min(RW, MW)
        }(WW, this.amount(RW));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: RW,
          amount: MW
        }), this.recents = [RW, ...this.recents.filter((WW => WW !== RW))].slice(0, 6), this.changed(), RR(this.seq, WW, RW)
      }
      amount(WW) {
        var RW;
        let MW = null !== (RW = this.stored.get(WW)) && void 0 !== RW ? RW : 0;
        for (const wW of this.pending) wW.item === WW && (MW -= wW.amount);
        return Math.max(0, MW)
      }
      items() {
        return this.order.filter((WW => this.amount(WW) > 0))
      }
      recent() {
        return this.recents.filter((WW => this.amount(WW) > 0))
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
      subscribe(WW) {
        return this.listeners.add(WW), () => {
          this.listeners.delete(WW)
        }
      }
      changed() {
        this.version++;
        for (const WW of this.listeners) WW()
      }
    }
    var EY = MW(36492);
    const VY = {
      isBlock: WW => void 0 !== aR.g[WW],
      harvestType: WW => {
        var RW;
        return null === (RW = aR.g[WW]) || void 0 === RW ? void 0 : RW.harvestType
      },
      harvestLevel: WW => {
        var RW;
        return null === (RW = aR.g[WW]) || void 0 === RW ? void 0 : RW.harvestLevel
      },
      dropsNothing: WW => {
        var RW;
        return null === (null === (RW = aR.g[WW]) || void 0 === RW ? void 0 : RW.drops)
      },
      displayName: WW => {
        var RW;
        return null === (RW = vb.o[WW]) || void 0 === RW ? void 0 : RW.displayName
      },
      description: WW => {
        var RW;
        return null === (RW = vb.o[WW]) || void 0 === RW ? void 0 : RW.description
      },
      harvests: WW => {
        var RW;
        return null === (RW = vb.o[WW]) || void 0 === RW ? void 0 : RW.harvests
      },
      level: WW => {
        var RW;
        return null === (RW = vb.o[WW]) || void 0 === RW ? void 0 : RW.level
      }
    };

    function mJ(WW, RW, MW) {
      return function(WW, RW, MW, wW) {
        var CW, zR;
        const AW = RW.split("|")[0],
          bR = WW.isBlock(RW) ? RW : WW.isBlock(AW) ? AW : null;
        if (null === bR || "rock" !== WW.harvestType(bR) || WW.dropsNothing(bR) && !kC.has(AW)) return null;
        const yR = MW && "rock" === WW.harvests(MW) ? null !== (CW = WW.level(MW)) && void 0 !== CW ? CW : 0 : null,
          NW = null !== (zR = null !== wW && void 0 !== wW ? wW : WW.harvestLevel(bR)) && void 0 !== zR ? zR : 0;
        return (null !== yR ? NW <= yR : 0 === WW.harvestLevel(bR)) ? null : Pw(WW, NW)
      }(VY, WW, RW, MW)
    }

    function xJ(WW, RW) {
      return function(WW, RW, MW) {
        if (RW === Jw[0]) return [(0, pW.Sd)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, pW.G.whiteUiText)];
        const wW = MW.split("|")[0],
          CW = WW.isBlock(wW) ? WW.displayName(wW) : void 0,
          zR = "string" === typeof CW ? CW : CW && "translationKey" in CW ? `$t(${CW.translationKey})` : wW;
        return [(0, pW.Sd)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: zR
          }
        }, pW.G.whiteUiText), (0, pW.Sd)({
          translationKey: `item:${(0,pW.oe)(RW)}`
        }, pW.G.yellowUiText)]
      }(VY, WW, RW)
    }
    const vJ = "buildAFactory2Game:";
    const KY = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function uY(WW) {
      return WW.endsWith(" Ore")
    }
    const OY = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      nY = [],
      GY = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: OY,
        plan: null,
        atomic: nY
      },
      LY = "buildAFactory2Game:",
      HY = new Set(["Splitter", "Sorting Gate"]),
      DY = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class qJ {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = WW, this.planAt = RW, this.tierOf = MW, this.Iz = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.mM = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = GY, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(WW, RW, MW) {
        var wW, CW, zR;
        let AW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const bR = null !== (wW = null === (CW = WW.HbW(RW)) || void 0 === CW ? void 0 : CW.name) && void 0 !== wW ? wW : null,
          yR = WW.isPlayerCrouching(RW),
          NW = 0 === MW ? null : this.resolve(WW, MW),
          eW = null !== NW && null !== AW && HY.has(NW.rootName) && function(WW, RW) {
            return DY.some((MW => {
              let [wW, CW] = MW;
              const zR = WW.getBlockId(RW[0] + wW, RW[1], RW[2] + CW);
              return 0 !== zR && "Express Belt" === WW.getMetaInfo(zR).rootName
            }))
          }(WW, AW),
          BW = this.updatePlan(0 === MW ? null : AW),
          tR = this.tierOf(),
          TW = null === AW ? null : (0, EY.f)(MW),
          gR = null !== TW && null !== AW && (0, EY.j)(function(WW) {
            return (RW, MW, wW) => WW.getBlockId(RW, MW, wW)
          }(WW), AW[0], AW[1], AW[2], TW),
          iR = this.readAfloat(WW, MW, AW);
        if (MW === this.Iz && gR === this.missesMaker && iR === this.afloat && bR === this.mM && yR === this.crouching && eW === this.express && tR === this.tier && !BW && (!this.targetsLive || !this.liveMoved(AW))) return;
        this.Iz = MW, this.missesMaker = gR, this.afloat = iR, this.mM = bR, this.crouching = yR, this.express = eW;
        const YW = eW && NW ? function(WW) {
          if (null === WW.info) return null;
          return WW.express ??= {
            ...WW.info,
            detail: `${LY}lookKeepsUpExpress`,
            detailItem: null
          }, WW.express
        }(NW) : null !== NW && gR && null !== TW ? this.besideMaker(NW, MW, TW) : null !== NW && iR ? this.hanging(NW) : null !== (zR = null === NW || void 0 === NW ? void 0 : NW.info) && void 0 !== zR ? zR : null;
        this.tier = tR;
        const JW = NW && YW ? function(WW, RW) {
          var MW, wW;
          const CW = aR.g[WW];
          if (!WW.endsWith(" Ore") || "rock" !== (null === CW || void 0 === CW ? void 0 : CW.harvestType) || 0 === CW.harvestLevel) return null;
          const zR = null !== (MW = CW.harvestLevel) && void 0 !== MW ? MW : 0,
            AW = RW ? vb.o[RW] : void 0;
          if ("rock" === (null === AW || void 0 === AW ? void 0 : AW.harvests) && (null !== (wW = AW.level) && void 0 !== wW ? wW : 0) >= zR) return null;
          const bR = (yR = zR, Pw(VY, yR));
          var yR;
          if (null === bR) return null;
          const NW = GC(bR),
            eW = /^[AEIOU]/.test(bR) ? "An" : "";
          if ("rock" === (null === AW || void 0 === AW ? void 0 : AW.harvests) && RW) return {
            key: `${LY}lookToolTooWeak${eW}`,
            mM: GC(RW),
            needed: NW
          };
          return {
            key: bR === Jw[0] ? `${LY}lookNeedAnyPickaxe` : `${LY}lookNeedPickaxe${eW}`,
            mM: null,
            needed: NW
          }
        }(NW.rootName, bR) : null;
        this.targetsLive = !0 === (null === NW || void 0 === NW ? void 0 : NW.live) && null !== AW;
        let PW = null;
        this.targetsLive && NW && AW && this.live && (this.livePos[0] = AW[0], this.livePos[1] = AW[1], this.livePos[2] = AW[2], this.liveVersion = this.live.version(), PW = this.live.line(NW.rootName, AW));
        const IW = null === YW ? OY : function(WW, RW, MW) {
            const wW = function(WW, RW, MW) {
              const wW = QM(WW);
              if (null === wW) return null;
              const CW = `${vJ}lookPortMode_${wW}`,
                zR = dw(RW);
              if (zR && MW) return {
                mode: null,
                detail: CW,
                next: `${vJ}lookWrenchPickUp`,
                nextState: null
              };
              const AW = rw(WW),
                bR = null === AW ? null : QM(AW);
              return null === bR ? {
                mode: null,
                detail: CW,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: CW,
                next: zR ? `${vJ}lookWrenchNext` : `${vJ}lookPortWrench`,
                nextState: `${vJ}lookPortState_${bR}`
              }
            }(WW, RW, MW);
            if (null !== wW) return wW;
            const CW = Lw(WW, RW, MW);
            return null === CW.mode && null === CW.next ? OY : CW
          }(WW.blockIdToBlockName(MW), bR, yR),
          oW = this.plan,
          lW = NW && YW ? this.rowsOf(NW.rootName, tR) : nY,
          FW = this.snapshot;
        if (!(null === YW ? !FW.visible : FW.visible && YW === FW.info && (fW = JW, QW = FW.tool, fW === QW || null !== fW && null !== QW && fW.key === QW.key && fW.mM === QW.mM && fW.needed === QW.needed) && function(WW, RW) {
            return WW === RW || null !== WW && null !== RW && WW.key === RW.key && JSON.stringify([WW.params, WW.keys]) === JSON.stringify([RW.params, RW.keys])
          }(PW, FW.live) && function(WW, RW) {
            return WW.mode === RW.mode && WW.detail === RW.detail && WW.next === RW.next && WW.nextState === RW.nextState
          }(IW, FW.wrench) && Xg(oW, FW.plan) && lW === FW.atomic)) {
          var fW, QW;
          this.snapshot = null === YW ? {
            ...FW,
            visible: !1
          } : {
            info: YW,
            visible: !0,
            tool: JW,
            live: PW,
            wrench: IW,
            plan: oW,
            atomic: lW
          };
          for (const WW of this.listeners) WW()
        }
      }
      get() {
        return this.snapshot
      }
      subscribe(WW) {
        return this.listeners.add(WW), () => {
          this.listeners.delete(WW)
        }
      }
      dispose() {
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = GY, this.Iz = 0, this.mM = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(WW, RW, MW) {
        if (null === MW || 0 === RW || !bR() || !uY(this.resolve(WW, RW).rootName)) return !1;
        const wW = `${MW[0]},${MW[1]},${MW[2]},${RW}`,
          CW = performance.now();
        return wW === this.afloatKey && CW - this.afloatAt < ZY ? this.afloat : (this.afloatKey = wW, this.afloatAt = CW, function(WW, RW) {
          for (const [MW, wW, CW] of KY) {
            const zR = RW(WW[0] + MW, WW[1] + wW, WW[2] + CW);
            if (void 0 === zR || null !== zR && !uY(zR)) return !1
          }
          return !0
        }(MW, ((RW, MW, wW) => function(WW, RW, MW, wW) {
          if (!WW.isBlockInLoadedChunk(RW, MW, wW)) return;
          const CW = WW.getBlockId(RW, MW, wW);
          return 0 === CW ? null : WW.getMetaInfo(CW).rootName
        }(WW, RW, MW, wW))))
      }
      liveMoved(WW) {
        var RW;
        const {
          livePos: MW
        } = this;
        return null === WW || WW[0] !== MW[0] || WW[1] !== MW[1] || WW[2] !== MW[2] || (null === (RW = this.live) || void 0 === RW ? void 0 : RW.version()) !== this.liveVersion
      }
      updatePlan(WW) {
        const RW = null === WW ? "" : WW.join(","),
          MW = performance.now();
        if (RW === this.planPos && MW - this.planMs < 250) return !1;
        this.planPos = RW, this.planMs = MW;
        const wW = null === WW ? null : this.planAt([WW[0], WW[1], WW[2]]),
          CW = !Xg(wW, this.plan);
        return this.plan = wW, CW
      }
      besideMaker(WW, RW, MW) {
        let {
          info: wW
        } = WW;
        if (null === wW) return null;
        let CW = this.besideMakerById.get(RW);
        if (void 0 === CW) {
          const WW = "cryo" === MW ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          CW = {
            ...wW,
            detail: `${LY}${WW}`,
            detailItem: null
          }, this.besideMakerById.set(RW, CW)
        }
        return CW
      }
      hanging(WW) {
        let {
          info: RW,
          rootName: MW
        } = WW;
        if (null === RW) return null;
        let wW = this.afloatByRoot.get(MW);
        return void 0 === wW && (wW = {
          ...RW,
          detail: `${LY}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(MW, wW)), wW
      }
      rowsOf(WW, RW) {
        if (null === RW) return nY;
        const MW = `${WW}|${RW}`;
        let wW = this.rowsByKey.get(MW);
        if (void 0 === wW) {
          const CW = function(WW, RW) {
            var MW;
            if (!(WW in rM)) return [];
            const wW = null !== (MW = cM[WW]) && void 0 !== MW ? MW : [],
              CW = new Map;
            for (const AW of aA(WW, RW))
              if ((wW.includes(AW) || kA(AW.output) && Xz(AW.output) > DW(WW)) && Xz(AW.output) <= RW) {
                var zR;
                const WW = null !== (zR = CW.get(AW.output)) && void 0 !== zR ? zR : [];
                WW.push(AW.input), CW.set(AW.output, WW)
              } return dz([...CW], (WW => {
              let [RW] = WW;
              return -Xz(RW)
            })).map((WW => {
              let [RW, MW] = WW;
              return {
                output: RW,
                inputs: MW
              }
            }))
          }(WW, RW);
          wW = CW.length > 0 ? CW : nY, this.rowsByKey.set(MW, wW)
        }
        return wW
      }
      resolve(WW, RW) {
        const {
          rootId: MW,
          rootName: wW
        } = WW.getMetaInfo(RW), CW = (0, AM.o)(wW) ? RW : MW;
        let zR = this.byRootId.get(CW);
        const AW = bR();
        if (void 0 === zR || zR.nuclear !== AW) {
          var yR;
          const MW = function(WW) {
            return Xw(VY, WW, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WW)
          }(wW, WW.blockIdToBlockName(RW));
          zR = {
            info: MW,
            rootName: wW,
            live: null !== MW && !0 === (null === (yR = this.live) || void 0 === yR ? void 0 : yR.handles(wW)),
            nuclear: AW
          }, this.byRootId.set(CW, zR)
        }
        return zR
      }
    }
    const ZY = 500;
    const SY = (0, wW.memo)((function(WW) {
        var RW, MW;
        let {
          store: CW
        } = WW;
        const {
          t: zR
        } = (0, PC.C)(), [AW, bR] = (0, wW.useState)((() => CW.get()));
        (0, wW.useEffect)((() => (bR(CW.get()), CW.subscribe((() => {
          bR(CW.get())
        })))), [CW]);
        const {
          openInGameMenuName: yR,
          openEverythingMenuName: NW,
          isTouchScreen: eW
        } = (0, BC.i)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
          info: BW,
          tool: tR,
          live: TW,
          wrench: gR,
          atomic: iR
        } = AW, YW = AW.visible && null === yR && null === NW;
        if (null === BW) return null;
        const JW = null !== gR.detail ? zR(gR.detail) : null !== (RW = AW.plan) && void 0 !== RW && RW.ctrl ? zR("buildAFactory2Game:lookPlanCtrl") : null !== BW.detail ? zR(BW.detail, null === BW.detailItem ? void 0 : {
          item: zR(BW.detailItem)
        }) : null;
        return (0, gA.jsxs)("div", {
          className: gz()("Baf2LookTarget", {
            Visible: YW
          }),
          "aria-hidden": !YW,
          children: [(0, gA.jsx)("div", {
            className: "Baf2LookTargetName SmallTextBold",
            children: zR(BW.name)
          }), null !== AW.plan && (0, gA.jsx)("div", {
            className: "Baf2LookTargetDetail",
            children: zR(AW.plan.key, {
              kind: zR(AW.plan.kindKey),
              w: String(AW.plan.w),
              h: String(AW.plan.h),
              d: String(AW.plan.d),
              count: String(AW.plan.count)
            })
          }), void 0 !== (null === (MW = AW.plan) || void 0 === MW ? void 0 : MW.why) && (0, gA.jsx)("div", {
            className: "Baf2LookTargetDetail Warning",
            children: zR(AW.plan.why)
          }), null !== gR.mode && (0, gA.jsx)("div", {
            className: "Baf2LookTargetDetail",
            children: zR(gR.mode)
          }), null !== tR ? (0, gA.jsx)("div", {
            className: "Baf2LookTargetDetail Warning",
            children: zR(tR.key, {
              item: zR(tR.needed),
              mM: null === tR.mM ? "" : zR(tR.mM)
            })
          }) : null !== TW ? (0, gA.jsx)("div", {
            className: "Baf2LookTargetDetail",
            children: zR(TW.key, ny(zR, TW))
          }) : null !== JW && (0, gA.jsx)("div", {
            className: "Baf2LookTargetDetail",
            children: JW
          }), iR.length > 0 && (0, gA.jsx)("div", {
            className: "Baf2LookTargetDetail",
            children: zR("buildAFactory2Game:lookAtomicRecipes", {
              list: iR.map((WW => {
                let {
                  output: RW,
                  inputs: MW
                } = WW;
                const wW = MW.length > 1 ? ` ${zR("buildAFactory2Game:recipeMore",{count:String(MW.length-1)})}` : "";
                return `${zR(GC(MW[0]))}${wW} \u2192 ${zR(GC(RW))}`
              })).join(", ")
            })
          }), null !== gR.next && (0, gA.jsx)("div", {
            className: "Baf2LookTargetDetail",
            children: zR(gR.next, {
              state: null === gR.nextState ? "" : zR(gR.nextState),
              use: zR(eW ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
            })
          })]
        })
      })),
      WJ = [],
      RJ = [
        [0, -1, 0]
      ];

    function MJ(WW) {
      const RW = [WW];
      for (let MW = 1; MW <= 4; MW++) MW > 1 && RW.push(`${WW}|meta|rot${MW}`), RW.push(`${WW}|meta|rot${MW}|Running`);
      return RW
    }

    function wJ(WW, RW) {
      return [Math.floor(WW[0] / RW), Math.floor(WW[1] / RW), Math.floor(WW[2] / RW)]
    }

    function CJ(WW, RW, MW) {
      return `${WW},${RW},${MW}`
    }

    function zP(WW) {
      const RW = WW.split("|")[0];
      if (!RM(RW)) return WJ;
      const MW = rM[RW];
      if (GR(MW)) return RJ;
      const wW = CY(WW);
      return LR(MW) ? [
        [-wW[0], -wW[1], -wW[2]]
      ] : iz(MW) ? function(WW, RW) {
        const MW = WW[0] - 2 * RW[0],
          wW = WW[2] - 2 * RW[2],
          CW = [];
        for (let zR = -1; zR <= 1; zR++)
          for (let RW = -1; RW <= 1; RW++) CW.push([MW + zR, WW[1], wW + RW]);
        return CW
      }([0, 0, 0], wW) : WJ
    }
    const AJ = [.2, .8, .3],
      bP = [.45, 1, .5],
      yP = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((WW => .5 * WW / 2)),
      NJ = [0, 1, 2, 0, 2, 3],
      eJ = [4, 5];
    class BJ {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(WW) {
        this.indexed = !0;
        for (const RW of oR)
          for (const MW of MJ(RW)) {
            const RW = WW.blockNameToBlockId(MW, !0),
              wW = zP(MW);
            null !== RW && wW.length > 0 && (this.offsetsList.push(wW), this.offsetsIndexById[RW] = this.offsetsList.length)
          }
      }
      onAfterRender(WW, RW) {
        this.indexed || this.index(WW);
        const MW = performance.now();
        if (MW - this.lastCheckMs < 100) return;
        this.lastCheckMs = MW, this.checks++;
        const wW = DT.c.dw,
          [CW, zR, AW] = wJ(RW, wW);
        let bR = !1;
        const yR = [];
        let NW = 0;
        for (let eW = CW - 2; eW <= CW + 2; eW++)
          for (let RW = zR - 1; RW <= zR + 1; RW++)
            for (let CW = AW - 2; CW <= AW + 2; CW++) {
              const zR = NW++,
                AW = CJ(eW, RW, CW),
                BW = WW.getChunkVersion(eW, RW, CW);
              let tR = this.chunks.get(AW);
              null !== BW ? (tR || (tR = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(AW, tR)), tR.seenAt = this.checks, tR.checkedVersion !== BW && (tR.checkedVersion = BW, bR = !0), tR.scannedVersion !== BW && MW - tR.scannedAt >= 500 && yR.push({
                slot: zR,
                entry: tR,
                origin: [eW * wW, RW * wW, CW * wW]
              })) : (bR ||= void 0 !== tR, this.chunks.delete(AW))
            }
        this.scanDue(WW, yR) && (bR = !0);
        for (const [eW, BW] of this.chunks) BW.seenAt !== this.checks && (bR ||= BW.machines.length > 0, this.chunks.delete(eW));
        for (const eW of this.chunks.values())
          for (const [RW, MW, wW] of eW.cellChunks)(Math.abs(RW - CW) > 2 || Math.abs(MW - zR) > 1 || Math.abs(wW - AW) > 2) && this.watchCellChunk(WW, RW, MW, wW) && (bR = !0);
        for (const [eW, BW] of this.cellChunks) BW.seenAt !== this.checks && this.cellChunks.delete(eW);
        bR && this.refresh(WW)
      }
      dispose(WW) {
        this.clearMeshes(WW), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(WW, RW) {
        const MW = Math.max(RW.findIndex((WW => {
          let {
            slot: RW
          } = WW;
          return RW >= this.scanFrom
        })), 0);
        let wW = 96;
        for (let CW = 0; CW < RW.length; CW++) {
          const {
            slot: zR,
            entry: AW,
            origin: bR
          } = RW[(MW + CW) % RW.length];
          if (wW -= this.scan(WW, AW, bR), wW <= 0) {
            this.scanFrom = zR + 1;
            break
          }
        }
        return RW.length > 0
      }
      scan(WW, RW, MW) {
        let [wW, CW, zR] = MW;
        const AW = DT.c.dw,
          bR = this.hits;
        bR.length = 0;
        const yR = WW.scanBlocks(wW, CW, zR, wW + AW, CW + AW, zR + AW, this.offsetsIndexById, bR),
          NW = [];
        for (let eW = 0; eW < bR.length; eW += 4) NW.push({
          pos: [bR[eW], bR[eW + 1], bR[eW + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[bR[eW + 3]] - 1]
        });
        return RW.machines = NW, RW.cellChunks = function(WW, RW) {
          const MW = new Set,
            wW = [];
          for (const {
              pos: CW,
              offsets: zR
            }
            of WW)
            for (const [WW, AW, bR] of zR) {
              const zR = wJ([CW[0] + WW, CW[1] + AW, CW[2] + bR], RW),
                yR = CJ(...zR);
              MW.has(yR) || (MW.add(yR), wW.push(zR))
            }
          return wW
        }(NW, AW), RW.scannedVersion = RW.checkedVersion, RW.scannedAt = performance.now(), Math.max(yR, 1)
      }
      watchCellChunk(WW, RW, MW, wW) {
        const CW = CJ(RW, MW, wW),
          zR = WW.getChunkVersion(RW, MW, wW),
          AW = this.cellChunks.get(CW);
        return null === zR ? this.cellChunks.delete(CW) : (null === AW || void 0 === AW ? void 0 : AW.version) === zR ? (AW.seenAt = this.checks, !1) : (this.cellChunks.set(CW, {
          version: zR,
          seenAt: this.checks
        }), !0)
      }
      refresh(WW) {
        const RW = function(WW, RW) {
            const MW = new Set,
              wW = [];
            for (const {
                pos: CW,
                offsets: zR
              }
              of WW)
              for (const [WW, AW, bR] of zR) {
                const zR = CW[0] + WW,
                  yR = CW[1] + AW,
                  NW = CW[2] + bR,
                  eW = `${zR},${yR},${NW}`;
                MW.has(eW) || (MW.add(eW), RW(zR, yR, NW) && wW.push([zR, yR, NW]))
              }
            return wW
          }([...this.chunks.values()].flatMap((WW => WW.machines)), ((RW, MW, wW) => WW.isBlockInLoadedChunk(RW, MW, wW) && 0 === WW.getBlockId(RW, MW, wW))),
          MW = RW.join(";");
        MW !== this.shownKey && (this.shownKey = MW, this.clearMeshes(WW), RW.length > 0 && (this.meshes = [this.build(WW, RW, !1), this.build(WW, RW, !0)]))
      }
      build(WW, RW, MW) {
        const wW = RW[0],
          CW = [],
          zR = [];
        for (const [AW, bR, yR] of RW) {
          const WW = AW - wW[0] + .5,
            RW = bR - wW[1] + .5,
            NW = yR - wW[2] + .5;
          for (let wW = 0; wW < 6; wW++) {
            if (eJ.includes(wW) !== MW) continue;
            const AW = CW.length / 3;
            for (let MW = 4 * wW; MW < 4 * wW + 4; MW++) CW.push(yP[3 * MW] + WW, yP[3 * MW + 1] + RW, yP[3 * MW + 2] + NW);
            for (const WW of NJ) zR.push(AW + WW)
          }
        }
        return WW.createGameMesh({
          positions: CW,
          indices: zR
        }, {
          rgb: MW ? bP : AJ,
          alpha: .4
        }, wW)
      }
      clearMeshes(WW) {
        for (const RW of this.meshes) WW.disposeGameMesh(RW);
        this.meshes = []
      }
    }
    const tP = 1 / .6,
      TJ = 200,
      gP = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      iP = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      YJ = 2 * Math.PI / 3;
    class JJ {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gP;
        this.style = WW, this.particles = null, this.points = new Float32Array(800), this.budget = TJ, this.lastMs = 0
      }
      static blade() {
        return new JJ(iP)
      }
      FX(WW, RW) {
        const MW = Math.min(RW.arcStruck, RW.arcPoints.length);
        this.draw(WW, [RW.arcFrom, ...RW.arcPoints], RW.arcPoints.slice(0, MW))
      }
      onBlade(WW, RW) {
        const [MW, wW, CW] = RW.bladeCentre, [zR, AW] = RW.bladeFacing, bR = MW - 1.5 * zR, yR = CW - 1.5 * AW, NW = Math.atan2(AW, zR), eW = [];
        for (let BW = 0; BW <= 8; BW++) {
          const WW = NW - YJ / 2 + YJ * BW / 8;
          eW.push([bR + 2.5 * Math.cos(WW), wW, yR + 2.5 * Math.sin(WW)])
        }
        this.draw(WW, eW, RW.bladeStruck)
      }
      dispose() {
        var WW;
        null === (WW = this.particles) || void 0 === WW || WW.stop(), this.particles = null
      }
      draw(WW, RW, MW) {
        if (!WW.particlesEnabled() || RW.length < 2) return;
        const wW = performance.now();
        this.budget = Math.min(TJ, this.budget + (wW - this.lastMs) / 1e3 * TJ), this.lastMs = wW;
        const CW = [];
        let zR = 0,
          AW = RW[0];
        for (const JW of RW.slice(1)) {
          const WW = Math.min(48, Math.round(Math.hypot(JW[0] - AW[0], JW[1] - AW[1], JW[2] - AW[2]) * this.style.perBlock));
          CW.push([AW, JW, WW]), zR += WW, AW = JW
        }
        const bR = MW.length;
        zR += 10 * bR;
        const yR = zR > this.budget ? this.budget / zR : 1;
        if (0 === zR || yR * zR < 1) return;
        const NW = RW[0],
          [eW, BW, tR] = NW,
          TW = this.points;
        let gR = 0;
        const iR = (WW, RW, MW, wW) => {
          const CW = 4 * gR;
          TW[CW] = WW - eW, TW[CW + 1] = RW - BW, TW[CW + 2] = MW - tR, TW[CW + 3] = wW, gR++
        };
        CW.forEach(((WW, RW) => {
          let [MW, wW, CW] = WW;
          const zR = Math.min(Math.floor(CW * yR), TJ - gR),
            AW = Math.hypot(wW[0] - MW[0], wW[1] - MW[1], wW[2] - MW[2]),
            bR = 0 === RW && AW > 0 ? Math.min(.5, .1 * AW) / AW : 0;
          for (let yR = 0; yR < zR; yR++) {
            const WW = bR + (yR + .5) / zR * (1 - bR);
            iR(MW[0] + (wW[0] - MW[0]) * WW, MW[1] + (wW[1] - MW[1]) * WW, MW[2] + (wW[2] - MW[2]) * WW, .15)
          }
        }));
        const YW = Math.floor(10 * yR);
        for (let JW = 0; JW < bR; JW++) {
          const [WW, RW, wW] = MW[JW];
          for (let MW = 0; MW < YW && gR < TJ; MW++) iR(WW, RW, wW, 2.5)
        }
        this.budget -= gR, this.particles ??= WW.createParticles(function(WW) {
          const [RW, MW] = WW.colours;
          return {
            texture: "square_particle",
            aR: 400,
            minLifeTime: WW.life[0] / tP,
            maxLifeTime: WW.life[1] / tP,
            minSize: WW.size[0],
            maxSize: WW.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [RW[0], RW[1], RW[2], 1],
              maxColor: [MW[0], MW[1], MW[2], 1]
            }, {
              timeFraction: 1,
              minColor: [RW[0], RW[1], RW[2], 0],
              maxColor: [MW[0], MW[1], MW[2], 0]
            }],
            blendMode: fb.f.Add
          }
        }(this.style), {
          pos: NW
        }), this.particles.emitPoints(NW, TW, gR)
      }
    }
    const PJ = new Set(["Sky Spring"]);

    function IJ(WW, RW, MW) {
      const wW = WW.split("|")[0];
      return "Air" !== RW || MW || ! function(WW) {
        const RW = WW.split("|")[0];
        return void 0 !== ZR[RW] || PJ.has(RW)
      }(wW) ? null : WW
    }
    class oJ {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(WW) {
        const RW = WW - this.lastTapAt >= 300;
        return this.lastTapAt = WW, RW
      }
    }
    class lJ {
      constructor() {
        this.presses = new oJ, this.predicted = null
      }
      tap(WW, RW) {
        const MW = this.presses.isNewPress(RW);
        return MW && (this.predicted = {
          station: WW,
          at: RW
        }), MW
      }
      consumeServerOpen(WW, RW) {
        const MW = this.predicted;
        return !(null === MW || MW.station !== WW || RW - MW.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class FJ {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(WW, RW) {
        return WW && (this.thrustAt = RW), RW - this.thrustAt < 200
      }
    }
    const fJ = [.1, .05, .1],
      QJ = {
        texture: "effect_5",
        aR: Math.ceil(48),
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
        blendMode: fb.f.OneOne
      };
    class rP {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new FJ, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      FX(WW, RW) {
        for (const [MW, wW] of RW.baf2JetFlames) WW.isLocalPlayer(MW) || (wW ? this.lit.add(MW) : this.lit.delete(MW))
      }
      onAfterRender(WW, RW) {
        const MW = performance.now(),
          wW = this.hold.lit(this.selfThrusting(WW, RW), MW);
        for (const [CW, zR] of this.flames)(CW === RW ? wW : this.lit.has(CW)) || this.setEmitting(zR, !1), CW === RW || WW.getPositionView(CW) ? !zR.emitting && MW - zR.offAt >= 1300 && (zR.particles.stop(), this.flames.delete(CW)) : (zR.particles.dispose(), this.flames.delete(CW), this.lit.delete(CW));
        wW && this.draw(WW, RW, RW);
        for (const CW of this.lit) this.draw(WW, RW, CW)
      }
      dispose() {
        for (const WW of this.flames.values()) WW.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(WW, RW) {
        var MW;
        const wW = WW.getLocalPlayerMovement();
        return !!wW && (null !== (CW = {
          option: null !== (MW = WW.getClientOption(RW, "jumpHoldThrust")) && void 0 !== MW ? MW : null,
          jumping: wW.jumpHeld,
          onGround: wW.onGround,
          alive: WW.isAlive(RW)
        }).option && CW.option.maxUpSpeed >= 0 && CW.jumping && !CW.onGround && CW.alive);
        var CW
      }
      draw(WW, RW, MW) {
        var wW, CW;
        const zR = this.pos;
        if (!WW.readDrawnPosition(MW, zR)) return;
        const AW = WW.readDrawnPosition(RW, this.camera) ? this.camera : zR;
        if (!((zR[0] - AW[0]) ** 2 + (zR[1] - AW[1]) ** 2 + (zR[2] - AW[2]) ** 2 < 1600) || !WW.particlesEnabled()) {
          const WW = this.flames.get(MW);
          return void(WW && this.setEmitting(WW, !1))
        }
        const bR = null !== (wW = this.flames.get(MW)) && void 0 !== wW ? wW : this.create(WW, MW, zR),
          yR = null !== (CW = WW.getDrawnHeading(MW)) && void 0 !== CW ? CW : 0,
          NW = this.at;
        NW[0] = zR[0] - .35 * Math.sin(yR), NW[1] = zR[1] + 1.05, NW[2] = zR[2] - .35 * Math.cos(yR), bR.particles.moveTo(NW), this.setEmitting(bR, !0)
      }
      setEmitting(WW, RW) {
        WW.emitting !== RW && (WW.emitting = RW, RW || (WW.offAt = performance.now()), WW.particles.setEmitRate(RW ? 60 : 0))
      }
      create(WW, RW, MW) {
        const wW = {
          particles: WW.createParticles(QJ, {
            pos: MW,
            half: fJ
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(RW, wW), wW
      }
    }

    function cP(WW) {
      return "Reactor Frame" === HM("reactor", WW)
    }

    function XJ(WW) {
      return kw("reactor", WW) && !cP(WW) && (WW.startsWith("Reactor Glass") || WW.startsWith("Reactor Port"))
    }
    const jP = "baf2Goal";
    class kP {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [QC.k.subscribe("setDirectionArrow", (WW => {
          let {
            id: RW,
            position: MW
          } = WW;
          RW === jP && (this.goal = MW, this.checkedAt = -1 / 0)
        })), QC.k.subscribe("clearDirectionArrow", (WW => {
          let {
            id: RW
          } = WW;
          null !== RW && RW !== jP || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const WW of this.subs) QC.k.unsubscribe(WW)
      }
      sideOf(WW, RW, MW, wW) {
        const CW = this.goal;
        if (!CW) return 0;
        MW - this.checkedAt > 1e3 && (this.checkedAt = MW, this.open = function(WW, RW) {
          const [MW, wW, CW] = WW.map(Math.floor);
          if (!XJ(RW(MW, wW, CW))) return null;
          for (const [zR, AW] of [
              [1, 0],
              [0, 1]
            ]) {
            const WW = RW(MW + zR, wW, CW + AW),
              bR = RW(MW - zR, wW, CW - AW);
            if (cP(bR) && XJ(WW)) return [zR, 0, AW];
            if (cP(WW) && XJ(bR)) return [0 - zR, 0, 0 - AW]
          }
          return null
        }(CW, ((RW, MW, wW) => WW.blockIdToBlockName(WW.getBlockId(RW, MW, wW)))));
        const zR = this.open;
        if (!zR) return 0;
        const AW = wW(CW);
        if (Math.abs(AW.x - RW.x) > .05 || Math.abs(AW.y - RW.y) > .05) return 0;
        const bR = wW([CW[0] + zR[0], CW[1], CW[2] + zR[2]]).x - AW.x;
        return Math.abs(bR) < .3 ? 0 : bR > 0 ? 1 : -1
      }
    }
    class aP {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new kP, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.Qw = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.FQ = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((WW => {
          for (const RW of WW) RW.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(RW.target, RW.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.Qw || this.clear()
        }, window.addEventListener("resize", this.FQ)
      }
      onAfterRender(WW, RW) {
        var MW;
        this.api = WW, this.project = null !== (MW = null === RW || void 0 === RW ? void 0 : RW.projectWorldPosToScreenPos) && void 0 !== MW ? MW : null, this.queued || this.Qw || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.Qw = !0;
        for (const WW of this.moved.keys()) WW.style.transform = "";
        this.moved.clear();
        for (const WW of this.sideLabels.keys()) WW.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.FQ)
      }
      clear() {
        for (const zR of this.moved.keys()) zR.isConnected || this.moved.delete(zR);
        for (const zR of this.sideLabels.keys()) zR.isConnected || this.sideLabels.delete(zR);
        if (0 === this.arrows.length) return;
        const WW = performance.now(),
          RW = WW - this.refreshedAt > 1e3;
        RW && (this.refreshedAt = WW, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const MW = this.trackerBox(),
          wW = this.barsBox(),
          CW = this.toastBox(RW);
        (MW || wW || CW) && RW && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let zR = 0; zR < this.arrows.length; zR++) {
          const RW = this.arrows[zR];
          this.labelOffsets.set(RW, this.runLabelAside(RW, WW));
          const AW = (MW ? this.shiftLeftOf(RW, MW) : 0) || this.shiftOnScreen(RW),
            bR = Math.min(wW ? this.liftAbove(RW, wW, AW) : 0, CW ? this.liftAbove(RW, CW, AW) : 0),
            yR = this.moved.get(RW);
          if (0 !== AW || 0 !== bR) {
            const WW = 0 === bR ? `translateX(${AW}px)` : `translate(${AW}px, ${bR}px)`;
            yR !== WW && (RW.style.transform = WW, this.moved.set(RW, WW))
          } else void 0 !== yR && (RW.style.transform = "", this.moved.delete(RW))
        }
      }
      trackerBox() {
        var WW, RW;
        const MW = null !== (WW = this.tracker) && void 0 !== WW && WW.isConnected ? this.tracker : null !== (RW = this.trackers[0]) && void 0 !== RW ? RW : null;
        if (MW !== this.tracker && this.watch(MW), this.boxStale && MW) {
          var wW, CW, zR;
          this.boxStale = !1;
          const WW = MW.closest(".NoRoom") ? null : MW.getBoundingClientRect(),
            RW = WW && WW.width > 0 ? null === (wW = this.hud) || void 0 === wW ? void 0 : wW.getBoundingClientRect() : void 0,
            AW = WW && RW ? Math.max(WW.top, RW.top) : null !== (CW = null === WW || void 0 === WW ? void 0 : WW.top) && void 0 !== CW ? CW : 0,
            bR = WW && RW ? Math.min(WW.bottom, RW.bottom) : null !== (zR = null === WW || void 0 === WW ? void 0 : WW.bottom) && void 0 !== zR ? zR : 0;
          this.box = WW && WW.width > 0 && bR > AW ? {
            left: WW.left,
            top: AW,
            right: WW.right,
            bottom: bR
          } : null
        }
        return MW ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var WW;
          this.barsStale = !1;
          const RW = null === (WW = this.statBars[0]) || void 0 === WW ? void 0 : WW.getBoundingClientRect();
          this.bars = RW && RW.width > 0 && RW.height > 0 ? {
            left: RW.left,
            top: RW.top,
            right: RW.right,
            bottom: RW.bottom
          } : null
        }
        return this.bars
      }
      toastBox(WW) {
        var RW;
        const MW = null !== (RW = this.toasts[0]) && void 0 !== RW ? RW : null;
        if (MW !== this.toastEl || WW && MW) {
          this.toastEl = MW;
          const WW = null === MW || void 0 === MW ? void 0 : MW.getBoundingClientRect();
          this.toast = WW && WW.width > 0 && WW.height > 0 ? {
            left: WW.left,
            top: WW.top,
            right: WW.right,
            bottom: WW.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(WW, RW, MW) {
        var wW;
        const CW = this.anchorOf(WW);
        if (!CW) return 0;
        const zR = CW.x + MW + (null !== (wW = this.labelOffsets.get(WW)) && void 0 !== wW ? wW : 0),
          {
            halfWidth: AW,
            labelled: bR
          } = this.extentOf(WW),
          yR = CW.y + this.em * (bR ? 6.2 : 3);
        return yR < RW.top - 6 || zR + AW < RW.left - 6 || zR - AW > RW.right + 6 ? 0 : RW.top - 6 - yR
      }
      watch(WW) {
        var RW, MW;
        this.tracker && this.sizes.unobserve(this.tracker), null === (RW = this.hud) || void 0 === RW || RW.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = WW, this.hud = null !== (MW = null === WW || void 0 === WW ? void 0 : WW.closest(".Baf2QuestHud")) && void 0 !== MW ? MW : null, this.box = null, this.boxStale = !0, WW && this.sizes.observe(WW), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(WW, RW) {
        var MW;
        const wW = this.anchorOf(WW);
        if (!wW) return 0;
        const {
          y: CW
        } = wW, zR = wW.x + (null !== (MW = this.labelOffsets.get(WW)) && void 0 !== MW ? MW : 0), AW = this.em, {
          halfWidth: bR,
          labelled: yR
        } = this.extentOf(WW), NW = CW - AW, eW = zR + bR;
        return CW + AW * (yR ? 6.2 : 3) < RW.top || NW > RW.bottom || eW < RW.left - 6 || zR - bR > RW.right ? 0 : Math.max(RW.left - 6 - eW, 6 - (zR - bR))
      }
      shiftOnScreen(WW) {
        var RW;
        const MW = this.anchorOf(WW);
        if (!MW) return 0;
        const {
          halfWidth: wW
        } = this.extentOf(WW), CW = MW.x + (null !== (RW = this.labelOffsets.get(WW)) && void 0 !== RW ? RW : 0), zR = CW + wW - (this.innerWidth - 6);
        return zR > 0 ? -zR : Math.max(0, 6 - (CW - wW))
      }
      runLabelAside(WW, RW) {
        var MW;
        let wW = null;
        for (let AW = 0; AW < WW.children.length; AW++) WW.children[AW].classList.contains("DirectionArrowLabel") && (wW = WW.children[AW]);
        if (!wW) return 0;
        const CW = WW.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(WW) : null,
          zR = (CW && this.api ? this.side.sideOf(this.api, {
            x: CW.x / this.innerWidth * 100,
            y: CW.y / this.innerHeight * 100
          }, RW, this.project) : 0) * this.halfWidthOf(wW);
        return zR !== (null !== (MW = this.sideLabels.get(wW)) && void 0 !== MW ? MW : 0) && (wW.style.transform = 0 === zR ? "" : `translateX(-50%) translateX(${zR}px)`, 0 === zR ? this.sideLabels.delete(wW) : this.sideLabels.set(wW, zR)), zR
      }
      extentOf(WW) {
        let RW = this.em,
          MW = !1;
        for (let wW = 0; wW < WW.children.length; wW++) {
          const CW = WW.children[wW],
            zR = CW.classList.contains("DirectionArrowLabel");
          MW ||= zR, (zR || CW.classList.contains("DirectionArrowDistance")) && (RW = Math.max(RW, this.halfWidthOf(CW)))
        }
        return {
          halfWidth: RW,
          labelled: MW
        }
      }
      halfWidthOf(WW) {
        let RW = this.halfWidths.get(WW);
        return void 0 === RW && (RW = WW.offsetWidth / 2, this.halfWidths.set(WW, RW), this.sizes.observe(WW), this.labels.add(WW)), RW
      }
      forgetGoneLabels() {
        for (const WW of this.labels) WW.isConnected || (this.sizes.unobserve(WW), this.halfWidths.delete(WW), this.labels.delete(WW))
      }
      anchorOf(WW) {
        const RW = WW.style.translate,
          MW = this.anchors.get(WW);
        if (MW && MW.translate === RW && MW.innerWidth === this.innerWidth && MW.innerHeight === this.innerHeight) return MW;
        const wW = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(RW);
        if (!wW) return null;
        const CW = {
          translate: RW,
          x: parseFloat(wW[1]) / 100 * this.innerWidth,
          y: parseFloat(wW[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(WW, CW), CW
      }
    }
    const sJ = "Baf2ArrowText";

    function dJ(WW, RW) {
      const MW = WW.rows.find((WW => WW.current));
      return dW(WW.tutorial) && null !== MW && void 0 !== MW && MW.item && pC(MW) && jR(MW.item).includes(RW) ? MW.item : null
    }
    const pJ = new class {
      constructor(WW) {
        this.select = WW, this.picks = new Map
      }
      open(WW, RW, MW) {
        const wW = dJ(RW, WW);
        null !== wW && this.WM(WW, wW, MW)
      }
      follow(WW, RW) {
        if (bR())
          for (const [MW, {
              item: wW,
              had: CW
            }] of this.picks) {
            const zR = dJ(WW, MW);
            zR !== wW && (null !== zR && RW(wW) > CW ? this.WM(MW, zR, RW) : this.picks.delete(MW))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      WM(WW, RW, MW) {
        this.picks.set(WW, {
          item: RW,
          had: MW(RW)
        }), this.select(WW, RW)
      }
    }(rz.m);

    function hJ(WW) {
      return RW => {
        let MW = 0;
        for (const wW of WW.getInventoryItems())(null === wW || void 0 === wW ? void 0 : wW.name) === RW && (MW += null === wW.amount ? 1 : Math.max(wW.amount, 0));
        return MW
      }
    }

    function UJ(WW, RW, MW, wW) {
      WW.getClientOption(RW, "canCraft") && "inventory" !== BC.b.get("openInGameMenuName") && (pJ.open(MW, wW.get(), hJ(WW)), QC.k.Sz("toggleMenu", `inventory|${MW}`))
    }
    let EJ = null,
      VJ = !1;

    function mP(WW) {
      const RW = tA();
      WW === EJ && RW === VJ || (EJ = WW, VJ = RW, (0, rz.p)(function(WW, RW) {
        const MW = new Map;
        for (let wW = WW + 1; wW <= CW.length; wW++) {
          const CW = pz(wW, WW, RW);
          if (CW)
            for (const RW of JW(wW).unlocks) MW.set(RW, {
              ...CW,
              stepsAway: wW - WW
            })
        }
        return MW
      }(WW, RW)))
    }

    function xP() {
      return (0, rz.x)(dz(Object.keys(XW), Xz)), () => {
        (0, rz.x)([])
      }
    }
    const vP = "buildAFactory2Game:",
      KJ = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      uJ = {
        on: `${vP}tutorialButtonOn`,
        hud: `${vP}tutorialButtonHud`,
        off: `${vP}tutorialButtonOff`
      },
      OJ = {
        on: `${vP}tutorialPickedOn`,
        hud: `${vP}tutorialPickedHud`,
        off: `${vP}tutorialPickedOff`
      };

    function nJ(WW, RW, MW) {
      let wW = null,
        CW = () => {};
      const zR = zR => {
        var AW;
        let {
          tutorial: bR,
          tutorialKnown: yR
        } = zR;
        (null === (AW = wW) || void 0 === AW ? void 0 : AW.tutorial) === bR && wW.tutorialKnown === yR || (wW = {
          tutorial: bR,
          tutorialKnown: yR
        }, CW = (0, NC.A)({
          id: "baf2Tutorial",
          order: -1,
          labelKey: uJ[bR],
          icon: {
            kind: "icon",
            name: KJ[bR]
          },
          iconOnly: !0,
          disabled: !yR,
          className: "Baf2TutorialButton",
          onClick: () => {
            var wW;
            (wW => {
              const CW = RW.setTutorial(wW);
              WW.send(`baf2tutorial ${wW} ${CW}`), MW.show({
                baf2ToastText: [(0, pW.Sd)({
                  translationKey: OJ[wW]
                }, pW.G.whiteUiText)],
                baf2ToastMs: 3e3,
                baf2ToastStyle: "baf2ToastInfo"
              })
            })((wW = RW.get().tutorial, sW[(sW.indexOf(wW) + 1) % sW.length]))
          }
        }))
      };
      zR(RW.get());
      const AW = QC.k.subscribe(cz, zR);
      return () => {
        QC.k.unsubscribe(AW), CW()
      }
    }

    function GJ(WW, RW, MW) {
      var wW, CW;
      const zR = WW.getTargetedBlock();
      if (!zR || ! function(WW, RW, MW) {
          if ("Chest" !== RW) return !1;
          const wW = WW.split("|")[0];
          if (!RM(wW) || 0 === rM[wW].outputSlots.length) return !1;
          const CW = CY(WW);
          return MW[0] === CW[0] && MW[1] === CW[1] && MW[2] === CW[2]
        }(MW, null === (wW = WW.HbW(RW)) || void 0 === wW ? void 0 : wW.name, zR.normal)) return !1;
      const [AW, bR, yR] = zR.hz, NW = WW.getBlockId(AW, bR, yR);
      return 0 === NW || !0 === (null === (CW = aR.g[NW]) || void 0 === CW ? void 0 : CW.canBePlacedOver)
    }
    var LJ = MW(34960);
    const HJ = new Set(bw.c);
    class DJ {
      constructor(WW) {
        this.toasts = WW, this.lastAt = -1 / 0
      }
      onAltAction(WW, RW, MW) {
        const wW = WW.getTargetedBlock();
        if (!wW || function(WW) {
            const RW = WW.split("|")[0];
            return RM(RW) || null !== iC(RW) || rR(RW) || bw.c.includes(RW)
          }(MW) && !HJ.has(MW.split("|")[0])) return;
        const CW = WW.HbW(RW);
        if (!CW || !HJ.has(CW.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const zR = CW.typeObj.id,
          [AW, bR, yR] = wW.hz,
          NW = WW.getBlockId(AW, bR, yR),
          eW = aR.g[NW];
        (0 === NW || null !== eW && void 0 !== eW && eW.tw || null !== eW && void 0 !== eW && eW.canBePlacedOver) && WW.isSolidToPlayerBlockId(zR) && WW.canModifyBlockAt(AW, bR, yR) && WW.tyW(AW, bR, yR, zR) && !WW.tyW(AW, bR, yR, zR, RW) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, pW.Sd)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, pW.G.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class qP {
      constructor(WW) {
        this.show = WW, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(WW, RW, MW) {
        var wW;
        if (!RW) return this.started = null, void this.gatedThisHold.clear();
        if (!WW) return void(this.started = null);
        const CW = `${WW.x},${WW.y},${WW.z},${WW.mM}`;
        if (CW === this.started) return;
        this.started = CW;
        const zR = jC(WW.y) ? mJ(WW.block, WW.mM, WW.level) : null;
        if (null === zR || this.gatedThisHold.has(CW)) return;
        this.gatedThisHold.add(CW);
        const AW = WW.block.split("|")[0];
        MW - (null !== (wW = this.hintedAt.get(AW)) && void 0 !== wW ? wW : -1 / 0) < 5e3 || (this.hintedAt.set(AW, MW), this.show({
          baf2ToastText: xJ(zR, WW.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var ZJ = MW(50);

    function SJ(WW, RW) {
      const MW = [...WW.baf2CoreBankPaused];
      for (const [CW] of WW.baf2CoreBanked) MW.push(CW);
      for (const AW of CW) {
        for (const {
            item: WW
          }
          of AW.cost) MW.push(WW);
        for (const WW of AW.newDeposits) MW.push(WW.block);
        for (const WW of AW.unlocks) MW.push(WW, kR(WW));
        AW.reward && MW.push(AW.reward);
        for (const {
            item: WW
          }
          of null !== (wW = null === (zR = AW.charge) || void 0 === zR ? void 0 : zR.items) && void 0 !== wW ? wW : []) {
          var wW, zR;
          MW.push(WW)
        }
      }
      return {
        message: WW,
        itemNames: RW([...new Set(MW)])
      }
    }
    const WP = "baf2MultiblockGuide";
    const RP = new Map;
    const MP = function(WW, RW, MW, CW) {
      let {
        localPlayerId: zR
      } = CW;
      const AW = new zy,
        bR = new Et,
        NW = new qT,
        eW = new Ht(NW),
        BW = (WW, RW) => {
          RW ? eW.observe(WW) : eW.unobserve(WW)
        },
        tR = new Lt,
        TW = new Zt(BW),
        gR = WW => TW.covers(WW),
        iR = new JT;
      let YW;
      const JW = new XA((WW => {
          YW.sendCommand(WW)
        })),
        PW = () => {
          JW.send("baf2questbook")
        },
        IW = WW => function(WW, RW, MW) {
          const wW = {};
          for (const CW of MW) {
            let MW = RP.get(CW);
            void 0 === MW && (MW = WW.getItemStat(RW, CW, "displayName"), RP.set(CW, MW)), wW[CW] = MW
          }
          return wW
        }(YW, zR, WW),
        oW = new kz(PW),
        lW = new cg((() => BC.b.get("loadingOverlayVisible"))),
        FW = new sT,
        fW = new DJ(lW),
        QW = new qP((WW => {
          lW.show(WW, WW.baf2ToastMs)
        })),
        cR = new vg(BW),
        XW = new TY(cR),
        jR = new TA,
        kR = new UY,
        sW = new OA,
        dW = new HT({
          read: () => !1 !== ZJ.g.getItem(WP),
          write: WW => {
            ZJ.g.setItem(WP, WW)
          }
        }),
        UW = new lg(dW),
        EW = new Qg(dW),
        VW = new Gg(dW, (WW => function(WW, RW) {
          const MW = vy(RW.w, RW.h, RW.d),
            wW = new Uint8Array(MW);
          for (let CW = 0; CW < MW; CW++) {
            const MW = Yg(WW, uM(RW, LM(RW, CW)));
            wW[CW] = null === MW ? 0 : Eb(MW)
          }
          return wW
        }(YW, WW)), Eg(JW)),
        mR = new Lg(dW, Eg(JW)),
        xR = new Og,
        vR = (WW, RW) => {
          let [MW, wW, CW] = WW;
          xR.answered(RW) || lW.show({
            baf2ToastText: [(0, pW.Sd)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: MW,
                h: wW,
                d: CW
              }
            }, pW.G.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      VW.onSizeNotTaken(vR), mR.onSizeNotTaken(vR);
      const OW = new Zg,
        nW = new aY(dW),
        GW = new di,
        HW = new Oi(GW),
        DW = new MY,
        qR = new gJ,
        SW = new QY(qR),
        WR = new hY(qR),
        RR = qR.lookSource(),
        MR = new qJ({
          handles: WW => RR.handles(WW) || WW === hW,
          line: (WW, RW) => WW === hW ? function(WW, RW, MW) {
            var wW;
            const CW = uW(null === (wW = RW.at(MW)) || void 0 === wW ? void 0 : wW.item);
            return null === CW ? {
              key: `${LY}lookFarmEmpty`
            } : {
              key: WW.blockIdToBlockName(WW.getBlockId(MW[0], MW[1], MW[2])).endsWith("|Running") ? `${LY}lookFarmRunning` : `${LY}lookFarmWaiting`,
              keys: {
                mob: KW(CW)
              }
            }
          }(YW, cR, RW) : RR.line(WW, RW),
          version: () => RR.version() + cR.version()
        }, (WW => ci(dW.all(), WW, (WW => Yg(YW, WW)))), (() => oW.get().tier)),
        wR = new iY,
        zM = new BJ,
        AR = new JJ,
        bM = JJ.blade(),
        yM = new rP,
        NR = new hT,
        eR = new aP,
        BR = new lJ,
        tM = new oJ;
      let TR = -1 / 0,
        gM = 0,
        iM = -1 / 0,
        YR = -1 / 0;
      const JR = () => {
          JW.send("baf2islandsclose"), YR = Date.now()
        },
        PR = [];

      function IR(WW) {
        var RW, MW, wW, CW, zR, AW, yR;
        "core" === (null === (RW = bR.get()) || void 0 === RW ? void 0 : RW.kind) && "core" !== (null === WW || void 0 === WW ? void 0 : WW.kind) && JW.send("baf2coreclose"), "power" === (null === (MW = bR.get()) || void 0 === MW ? void 0 : MW.kind) && "power" !== (null === WW || void 0 === WW ? void 0 : WW.kind) && JW.send("baf2powerclose"), "water" === (null === (wW = bR.get()) || void 0 === wW ? void 0 : wW.kind) && "water" !== (null === WW || void 0 === WW ? void 0 : WW.kind) && JW.send(ZW.u), "terminal" === (null === (CW = bR.get()) || void 0 === CW ? void 0 : CW.kind) && "terminal" !== (null === WW || void 0 === WW ? void 0 : WW.kind) && JW.send("baf2terminalclose"), "islands" === (null === (zR = bR.get()) || void 0 === zR ? void 0 : zR.kind) && "islands" !== (null === WW || void 0 === WW ? void 0 : WW.kind) && JR();
        const NW = qR.getStatus();
        "collider" === (null === (AW = bR.get()) || void 0 === AW ? void 0 : AW.kind) && "collider" !== (null === WW || void 0 === WW ? void 0 : WW.kind) && NW && JW.send(Qy(NW, "close"));
        const eW = WW => "reactor" === WW || "battery" === WW;
        if (eW(null === (yR = bR.get()) || void 0 === yR ? void 0 : yR.kind) && !eW(null === WW || void 0 === WW ? void 0 : WW.kind)) {
          var BW, tR, TW;
          const WW = "reactor" === (null === (BW = bR.get()) || void 0 === BW ? void 0 : BW.kind) ? null === (tR = VW.get()) || void 0 === tR ? void 0 : tR.status.baf2RxAt : null === (TW = mR.get()) || void 0 === TW ? void 0 : TW.status.baf2BatAt;
          WW && JW.send(CR(WW, "close"))
        }
        "quests" === (null === WW || void 0 === WW ? void 0 : WW.kind) && PW(), bR.set(WW), null === WW && FW.release()
      }

      function lR() {
        (0, eC.e)(), IR(null)
      }
      let FR = new Set,
        fR = !1;
      const QR = {
        onCreate: WW => {
          YW = WW, YW.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const RW of oR) {
            const WW = rM[RW].inputSlots ? ob(AW) : Jb(RW, AW, jR, JW);
            PR.push((0, yz.h)(RW, WW))
          }
          PR.push((0, eC.l)((0, wW.createElement)(wW.Fragment, null, (0, wW.createElement)(RT, {
            controller: TW
          }), (0, wW.createElement)(OT, {
            store: cR
          }), (0, wW.createElement)(SY, {
            store: MR
          }), (0, wW.createElement)(QT, {
            store: oW
          }), (0, wW.createElement)(kg, {
            store: lW
          }), (0, wW.createElement)(dT, {
            store: FW
          }), (0, wW.createElement)(ET, {
            store: NR
          }), (0, wW.createElement)(qi, {
            store: OW
          }), (0, wW.createElement)(piW, {
            store: GW
          })), {
            content: (0, wW.createElement)(Vt, {
              commands: JW,
              store: bR,
              power: jR,
              water: sW,
              reactor: VW,
              battery: mR,
              collider: qR,
              terminal: kR,
              quests: oW,
              close: eC.f,
              Cw: () => {
                FW.dropHeld(), (0, eC.e)()
              },
              askIslands: () => {
                YR = -1 / 0, TR = Date.now(), gM = JW.send(LW)
              },
              openSocial: () => {
                (0, eC.e)(), BC.b.set({
                  openEverythingMenuName: wM.t.SOCIAL
                })
              },
              showCore: WW => {
                IR({
                  kind: "core",
                  core: WW
                }), JW.send("baf2corereopen")
              }
            }),
            onClose: () => {
              IR(null)
            }
          })), PR.push((0, NC.A)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              IR({
                kind: "quests"
              }), (0, eC.j)()
            }
          })), PR.push(nJ(JW, oW, lW)), fR = !1, PR.push(Tz((() => {
            null !== EJ && mP(EJ)
          }))), PR.push(xP()), PR.push(function() {
            const WW = QC.k.subscribe(cz, KC),
              RW = () => {
                if (vz) {
                  const WW = vz;
                  vz = null, (0, rz.t)(WW)
                }
              },
              MW = QC.k.subscribe("toggleMenu", (WW => {
                "inventory" === (null === WW || void 0 === WW ? void 0 : WW.split("|")[0]) && RW()
              })),
              wW = QC.k.subscribe("appManagerUpdated|openInGameMenuName", (WW => {
                "inventory" === WW && RW()
              }));
            return () => {
              QC.k.unsubscribe(WW), QC.k.unsubscribe(MW), QC.k.unsubscribe(wW)
            }
          }()), PR.push(function(WW) {
            const RW = hJ(WW),
              MW = QC.k.subscribe(cz, (WW => {
                pJ.follow(WW, RW)
              }));
            return () => {
              QC.k.unsubscribe(MW), pJ.clear()
            }
          }(YW)), PR.push(function() {
            const WW = document.documentElement,
              RW = (0, IT.d)(".InvenBodyRight", [], (() => {
                const RW = document.querySelector(".InvenBodyRight");
                RW && WW.style.setProperty("--baf2-backpack-width", `${RW.offsetWidth}px`)
              }));
            return () => {
              RW(), WW.style.removeProperty("--baf2-backpack-width")
            }
          }()), PR.push(function() {
            const WW = document.documentElement;
            return WW.classList.add(sJ), () => {
              WW.classList.remove(sJ)
            }
          }()), PR.push((() => {
            eW.dispose(), NW.dispose()
          })), iR.start(YW), PR.push((() => {
            iR.dispose(), yM.dispose(), XW.dispose()
          }))
        },
        onClose: () => {
          (0, rz.t)([]), vz = null, xz = new Set, EJ = null, (0, rz.p)(new Map), RP.clear();
          for (const WW of PR) WW();
          oW.dispose(), MR.dispose(), lW.dispose(), FW.dispose(), wR.dispose(), zM.dispose(YW), UW.dispose(YW), EW.dispose(YW), nW.dispose(YW), HW.dispose(YW), GW.dispose(), DW.dispose(), dW.dispose(), VW.dispose(), mR.dispose(), OW.dispose(), AR.dispose(), bM.dispose(), NR.dispose(), SW.dispose(YW), WR.dispose(YW), qR.dispose(), eR.dispose(), JW.clear()
        },
        onAfterRender: (WW, RW) => {
          var MW, wW, CW;
          try {
            iR.onAfterRender(RW)
          } catch (NW) {
            console.error("Error drawing BAF2 belt items", NW)
          }
          try {
            yM.onAfterRender(YW, zR)
          } catch (NW) {
            console.error("Error drawing BAF2 jet flames", NW)
          }
          fR || (fR = !0, JW.send("baf2clientready"));
          const AW = YW.getPositionView(zR);
          TW.onAfterRender(RW, AW, tR), cR.onAfterRender(RW, AW, tR, gR), eW.run(tR), wR.onAfterRender(YW, AW), zM.onAfterRender(YW, AW), XW.onAfterRender(YW, AW), UW.onAfterRender(YW, AW), EW.onAfterRender(YW, zR, AW), nW.onAfterRender(YW, zR, AW), HW.onAfterRender(YW, zR), DW.onAfterRender(YW, AW), oW.onPlayerY(AW[1]), SW.onAfterRender(YW), WR.onAfterRender(YW, zR, AW);
          const yR = YW.getTargetedBlock();
          MR.onAfterRender(YW, zR, null !== (MW = null === yR || void 0 === yR ? void 0 : yR.lCW) && void 0 !== MW ? MW : 0, null !== (wW = null === yR || void 0 === yR ? void 0 : yR.position) && void 0 !== wW ? wW : null), eR.onAfterRender(YW, RW), QW.onMining(function(WW, RW) {
            var MW, wW;
            const CW = WW.getMiningBlock();
            if (!CW) return null;
            const zR = (0, aR.e)(WW.getBlockId(CW[0], CW[1], CW[2])),
              AW = null !== (MW = null === (wW = WW.HbW(RW)) || void 0 === wW ? void 0 : wW.name) && void 0 !== MW ? MW : null,
              bR = WW.getItemStat(RW, zR.split("|")[0], "harvestLevel");
            return {
              block: zR,
              x: CW[0],
              y: CW[1],
              z: CW[2],
              mM: AW,
              level: bR
            }
          }(YW, zR), YW.isMining(), performance.now()), "dropMap" === (null === (CW = bR.get()) || void 0 === CW ? void 0 : CW.kind) && jC(AW[1]) && lR()
        },
        onPlayerChangeBlock: (WW, RW, MW, wW, CW, AW) => {
          WW === zR && function(WW, RW, MW, wW, CW, zR, AW) {
            const bR = IJ(zR, AW, WW.isPlayerCrouching(RW));
            if (null === bR) return;
            if (WW.tMW(MW, wW, CW, bR), !WW.getClientOption(RW, "canPickUpItems")) return;
            const yR = ZR[bR.split("|")[0]];
            var NW, eW, BW;
            void 0 !== yR && (NW = WW.getInventoryItems(), eW = yR, BW = DT.c.maxItemStackSize, WW.getInventoryFreeSlotCount(RW) > 0 || NW.some((WW => null !== WW && WW.name === eW && null !== WW.amount && WW.amount < BW))) && WW.playSound(RW, (0, LJ.e)("pickUp"), .5, 1)
          }(YW, WW, RW, MW, wW, CW, AW)
        },
        onPlayerAltAction: (WW, RW, MW, wW, CW) => {
          var AW, bR;
          if (!YW.getClientOption(zR, "canPickUpItems")) return;
          const yR = null !== (AW = null === (bR = YW.HbW(zR)) || void 0 === bR ? void 0 : bR.name) && void 0 !== AW ? AW : null,
            NW = function(WW, RW) {
              const MW = WW.split("|")[0];
              return rR(MW) && RW !== Sw && "Sky Pack" !== RW ? MW : null
            }(CW, yR);
          if (null !== NW) return void(BR.tap(NW, performance.now()) && UJ(YW, zR, NW, oW));
          if (!dw(yR)) return;
          const eW = tM.isNewPress(performance.now()),
            BW = function(WW, RW, MW) {
              return !dw(RW) || MW ? null : Kw(WW)
            }(CW, yR, YW.isPlayerCrouching(zR));
          null !== BW && eW && YW.tMW(RW, MW, wW, BW)
        },
        onPlayerAttemptAltAction: (WW, RW, MW, wW, CW) => {
          if (function(WW, RW, MW, wW, CW) {
              "Workbench" === wW.split("|")[0] && WW.getClientOption(MW, "canCraft") && (pJ.open("Workbench", CW.get(), hJ(WW)), RW.send("baf2station Workbench"))
            }(YW, JW, zR, CW, oW), GJ(YW, zR, CW)) return "preventAction";
          fW.onAltAction(YW, zR, CW)
        },
        onReceivedMessageFromServer: (WW, RW) => {
          if ("baf2MachineStatus" === WW) {
            var MW, wW, CW, NW, eW, BW, tR, gR, PW, fW, QW, rR, XW, aR, pW, hW;
            const WW = RW,
              zR = WW.baf2MachineTaught;
            AW.set(WW.baf2MachinePos, {
              status: WW.baf2MachineStatus,
              power: null !== (MW = WW.baf2MachinePower) && void 0 !== MW ? MW : null,
              opLeftMs: null !== (wW = WW.baf2MachineOpLeftMs) && void 0 !== wW ? wW : null,
              dug: WW.baf2MachineYield ? {
                item: WW.baf2MachineYield,
                name: IW([WW.baf2MachineYield])[WW.baf2MachineYield]
              } : null,
              powerCap: null !== (CW = WW.baf2MachinePowerCap) && void 0 !== CW ? CW : null,
              powerRates: null !== (NW = WW.baf2MachinePowerRates) && void 0 !== NW ? NW : null,
              coupled: !0 === WW.baf2MachineCoupled,
              couplerLevel: null !== (eW = WW.baf2MachineCoupler) && void 0 !== eW ? eW : 1,
              taught: zR,
              taughtName: zR ? IW([zR])[zR] : null,
              tier: null !== (BW = WW.baf2MachineTier) && void 0 !== BW ? BW : null,
              input: null !== (tR = WW.baf2MachineInput) && void 0 !== tR ? tR : null,
              inertCoupler: null !== (gR = WW.baf2MachineInertCoupler) && void 0 !== gR ? gR : null,
              inputShort: null !== (PW = WW.baf2MachineInputShort) && void 0 !== PW ? PW : null,
              field: null !== (fW = WW.baf2MachineField) && void 0 !== fW ? fW : null,
              noSeeds: !0 === WW.baf2MachineNoSeeds,
              fuelFed: !0 === WW.baf2MachineFuelFed,
              fuelFeeds: !0 === WW.baf2MachineFuelFeeds,
              coreFull: !0 === WW.baf2MachineCoreFull,
              waterUnpowered: !0 === WW.baf2MachineWaterUnpowered,
              powerShort: !0 === WW.baf2MachinePowerShort,
              powerWait: !0 === WW.baf2MachinePowerWait,
              reactorPowered: !0 === WW.baf2MachineReactorPowered,
              fuelLeftMs: null !== (QW = WW.baf2MachineFuelLeftMs) && void 0 !== QW ? QW : null,
              burning: null !== (rR = WW.baf2MachineBurning) && void 0 !== rR ? rR : null,
              fuelKeep: null !== (XW = WW.baf2MachineFuelKeep) && void 0 !== XW ? XW : null,
              water: null !== (aR = WW.baf2MachineWater) && void 0 !== aR ? aR : null,
              farm: null !== (pW = WW.baf2MachineFarm) && void 0 !== pW ? pW : null,
              cryo: null !== (hW = WW.baf2MachineCryo) && void 0 !== hW ? hW : null
            })
          } else if ("baf2StationOpen" === WW) {
            const WW = RW.baf2Station;
            BR.consumeServerOpen(WW, performance.now()) || UJ(YW, zR, WW, oW)
          } else if ("baf2Power" === WW) {
            const WW = RW;
            jR.set(WW), WW.baf2PowerOpen && (IR({
              kind: "power"
            }), (0, eC.j)())
          } else if (WW === ZW.x) {
            const WW = RW;
            sW.set(WW), WW.baf2WaterOpen && (IR({
              kind: "water"
            }), (0, eC.j)())
          } else if ("baf2RxPlans" === WW) {
            var UW, EW, vR;
            const WW = RW;
            dW.FX(WW);
            const MW = new Set(WW.baf2RxPlanList.map((WW => {
              let [RW, MW, wW] = WW;
              return `${RW},${MW},${wW}`
            })));
            OW.retain(MW);
            const wW = null === (UW = bR.get()) || void 0 === UW ? void 0 : UW.kind,
              CW = "reactor" === wW ? null === (EW = VW.get()) || void 0 === EW ? void 0 : EW.status.baf2RxAt : "battery" === wW ? null === (vR = mR.get()) || void 0 === vR ? void 0 : vR.status.baf2BatAt : void 0;
            CW && FR.has(CW.join(",")) && !MW.has(CW.join(",")) && lR(), FR = MW
          } else if ("baf2RxStatus" === WW) {
            const WW = RW;
            VW.set(WW), WW.baf2RxOpen && (IR({
              kind: "reactor"
            }), (0, eC.j)())
          } else if ("baf2BatStatus" === WW) {
            const WW = RW;
            mR.set(WW), WW.baf2BatOpen && (IR({
              kind: "battery"
            }), (0, eC.j)())
          } else if ("baf2RxAlarm" === WW) OW.FX(RW);
          else if ("baf2Bomb" === WW) GW.FX(RW, YW.getPositionView(zR));
          else if ("baf2Fallout" === WW) DW.FX(RW);
          else if ("baf2ColBeams" === WW) qR.onBeams(RW);
          else if ("baf2ColStatus" === WW) {
            const WW = RW;
            var KW, uW;
            if (qR.onStatus(WW), WW.baf2ColOpen) qR.onOpen(null !== (KW = null === (uW = YW.HbW(zR)) || void 0 === uW ? void 0 : uW.name) && void 0 !== KW ? KW : null), IR({
              kind: "collider"
            }), (0, eC.j)()
          } else if ("baf2Terminal" === WW) {
            const WW = RW;
            var nW;
            if (kR.apply(WW)) WW.baf2TermReset && (IR({
              kind: "terminal"
            }), (0, eC.j)());
            else "terminal" === (null === (nW = bR.get()) || void 0 === nW ? void 0 : nW.kind) && (bR.set(null), (0, eC.e)())
          } else if ("baf2Core" === WW) {
            var HW;
            const WW = RW;
            if (yR(!0 === WW.baf2CoreNuclear), function(WW, RW) {
                return "core" === (null === WW || void 0 === WW ? void 0 : WW.kind) && RW.baf2CoreTier > WW.core.message.baf2CoreTier
              }(bR.get(), WW)) return void(0, eC.e)();
            if (WW.baf2CoreRefresh && "core" !== (null === (HW = bR.get()) || void 0 === HW ? void 0 : HW.kind)) return;
            IR({
              kind: "core",
              core: SJ(WW, IW)
            }), WW.baf2CoreRefresh || (0, eC.j)()
          } else if ("baf2WrenchUndo" === WW) {
            const {
              baf2WrenchPos: WW,
              baf2WrenchBlock: MW
            } = RW;
            YW.tMW(WW[0], WW[1], WW[2], MW)
          } else if ("baf2Toast" === WW) {
            const WW = RW;
            xR.heard(performance.now(), WW.baf2ToastMs), lW.show(WW)
          } else if ("baf2Area" === WW) FW.arrive(RW, null !== bR.get());
          else if ("baf2Quest" === WW) {
            const WW = RW;
            yR(!0 === WW.baf2QuestNuclear), oW.set(WW, function(WW, RW) {
              var MW, wW, CW, zR, AW;
              const bR = [];
              for (const [, , eW, , , , , , BW, tR] of WW.baf2QuestSteps) null !== eW && bR.push(eW), bR.push(...null !== BW && void 0 !== BW ? BW : [], ...null !== tR && void 0 !== tR ? tR : []);
              WW.baf2QuestReward && bR.push(WW.baf2QuestReward);
              const yR = null === (MW = WW.baf2QuestSide) || void 0 === MW ? void 0 : MW[2][2];
              yR && bR.push(yR), bR.push(...null !== (wW = null === (CW = WW.baf2QuestSide) || void 0 === CW ? void 0 : CW[2][8]) && void 0 !== wW ? wW : [], ...null !== (zR = null === (AW = WW.baf2QuestSide) || void 0 === AW ? void 0 : AW[2][9]) && void 0 !== zR ? zR : []);
              for (const [eW] of null !== (NW = WW.baf2QuestAlso) && void 0 !== NW ? NW : []) {
                var NW;
                bR.push(eW)
              }
              return RW(bR)
            }(WW, IW)), mP(WW.baf2QuestTier)
          } else if ("baf2Route" === WW) ! function(WW, RW) {
            let {
              baf2RouteCells: MW,
              baf2RouteInto: wW
            } = RW;
            0 !== MW.length && wW ? WW.setRouteChevrons({
              cells: MW.map(((WW, RW) => {
                const [CW, , zR] = function(WW, RW, MW) {
                  const wW = MW + 1 < WW.length ? WW[MW + 1] : RW;
                  return [wW[0] - WW[MW][0], 0, wW[2] - WW[MW][2]]
                }(MW, wW, RW);
                return {
                  pos: WW,
                  way: [CW, zR]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : WW.setRouteChevrons(null)
          }(YW, RW);
          else if ("baf2QuestBook" === WW) oW.setBook(RW);
          else if ("baf2Stalls" === WW) TW.set(RW.baf2StallCells);
          else if (WW === bw.r) iR.onMoves(RW);
          else if (WW === bw.j) iR.onLines(RW);
          else if ("baf2Labels" === WW) cR.FX(RW);
          else if ("baf2DropMap" === WW) IR({
            kind: "dropMap",
            dropMap: RW
          }), (0, eC.j)();
          else if ("baf2Islands" === WW) {
            var SW, WR;
            const WW = RW;
            if (JW.syncIslandEdits(WW.baf2IslandsAnswered), !WW.baf2IslandsOpen && "islands" !== (null === (SW = bR.get()) || void 0 === SW ? void 0 : SW.kind)) return;
            if (WW.baf2IslandsOpen) {
              var RR, MR;
              const RW = BC.b.get("openEverythingMenuName"),
                MW = JW.sent() >= gM,
                wW = "other" !== (PR = {
                  askedAtMs: TR,
                  askSent: MW,
                  reaskedAtMs: iM,
                  nowMs: Date.now(),
                  panel: null !== (RR = null === (MR = bR.get()) || void 0 === MR ? void 0 : MR.kind) && void 0 !== RR ? RR : null,
                  inGameMenu: BC.b.get("openInGameMenuName"),
                  everythingMenu: null === RW ? null : RW === wM.t.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== WW.baf2IslandsFocusInvite
                }).everythingMenu && (!!PR.focusInvite || "islands" === PR.panel && "clientGame" === PR.inGameMenu || !(PR.nowMs - PR.reaskedAtMs < oN) && (PR.askSent && PR.nowMs - PR.askedAtMs < oN ? "core" === PR.panel && "clientGame" === PR.inGameMenu && null === PR.everythingMenu : "shop" === PR.everythingMenu || null === PR.inGameMenu));
              if (MW && (TR = -1 / 0), iM = -1 / 0, !wW) return void JR()
            }
            const MW = (CR = WW.baf2IslandsOpen, zM = "islands" === (null === (WR = bR.get()) || void 0 === WR ? void 0 : WR.kind), eR = YR, tM = Date.now(), CR && !zM && tM - eR < oN);
            IR({
              kind: "islands",
              islands: WW,
              arrivedAtMs: Date.now(),
              backToCore: lN(bR.get())
            }), MW && (YR = -1 / 0, iM = Date.now(), JW.send(LW)), WW.baf2IslandsOpen && ("clientGame" !== BC.b.get("openInGameMenuName") && (0, tz.h)(), (0, eC.j)())
          } else if ("baf2CoopTransfer" === WW) {
            var wR;
            const WW = RW;
            WW.baf2TransferOn ? (IR({
              kind: "transfer",
              transfer: WW,
              arrivedAtMs: Date.now()
            }), (0, eC.j)()) : "transfer" === (null === (wR = bR.get()) || void 0 === wR ? void 0 : wR.kind) && (0, eC.e)()
          } else "baf2IslandLeft" === WW ? (FW.dropHeld(), null !== bR.get() && lR(), "inventory" === BC.b.get("openInGameMenuName") && (0, tz.h)()) : "baf2Arc" === WW ? AR.FX(YW, RW) : "baf2Blade" === WW ? bM.onBlade(YW, RW) : "baf2JetFlame" === WW ? yM.FX(YW, RW) : "baf2GearPower" === WW && NR.FX(RW);
          var CR, zM, eR, tM, PR
        }
      };
      return QR
    }
  },
  36571: (WW, RW, MW) => {
    function wW(WW, RW, MW) {
      const wW = new Set,
        CW = new ResizeObserver(MW),
        zR = () => {
          const RW = new Set(document.querySelectorAll(WW));
          let zR = !1;
          for (const WW of wW) RW.has(WW) || (CW.unobserve(WW), wW.delete(WW), zR = !0);
          for (const WW of RW) wW.has(WW) || (CW.observe(WW), AW.observe(WW, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), wW.add(WW));
          zR && MW()
        },
        AW = new MutationObserver((RW => {
          RW.some((WW => "attributes" === WW.type)) && MW(), RW.some((RW => function(WW, RW, MW) {
            if ("childList" !== WW.type) return !1;
            for (const wW of WW.addedNodes)
              if (wW instanceof Element && (wW.matches(RW) || wW.querySelector(RW))) return !0;
            for (const wW of WW.removedNodes)
              if (wW instanceof Element)
                for (const WW of MW)
                  if (wW.contains(WW)) return !0;
            return !1
          }(RW, WW, wW))) && zR()
        }));
      AW.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const bR of RW) CW.observe(bR);
      return window.addEventListener("resize", MW), zR(), MW(), () => {
        CW.disconnect(), AW.disconnect(), window.removeEventListener("resize", MW)
      }
    }
    MW.d(RW, {
      d: () => wW
    })
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);