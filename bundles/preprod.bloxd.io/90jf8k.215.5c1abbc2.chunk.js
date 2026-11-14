export const id = 215;
export const ids = [215];
export const modules = {
  36924: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => hF
    });
    var CF = SF(36931);
    const AF = [0, 0, 0];
    class uF {
      constructor(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AF;
        this.pool = FF, this.origin = WF, this.count = 0, this.free = []
      }
      take() {
        var FF;
        const WF = null !== (FF = this.free.pop()) && void 0 !== FF ? FF : this.count++;
        return WF >= this.pool.ZF && this.pool.grow(Math.max(2 * this.pool.ZF, WF + 1)), this.hide(WF), WF
      }
      release(FF) {
        this.hide(FF), this.free.push(FF)
      }
      write(FF, WF, SF, AF) {
        const {
          records: uF
        } = this.pool, {
          origin: hF
        } = this, bW = FF * CF.d;
        uF[bW] = WF - hF[0], uF[bW + 1] = SF - hF[1], uF[bW + 2] = AF - hF[2], uF[bW + CF.e] = 0, this.pool.markDirty(FF)
      }
      hide(FF) {
        this.pool.records[FF * CF.d + CF.e] = 1, this.pool.markDirty(FF)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class hF {
      constructor(FF, WF, SF) {
        this.api = FF, this.model = WF, this.initialCapacity = SF, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(FF) {
        let WF = this.kinds.get(FF);
        if (void 0 === WF) {
          const SF = this.api.createInstancePool({
            ...this.model,
            item: FF
          }, this.initialCapacity);
          null === SF || void 0 === SF || SF.setOrigin(this.origin[0], this.origin[1], this.origin[2]), WF = SF && new uF(SF, this.origin), this.kinds.set(FF, WF)
        }
        return WF
      }
      follow(FF) {
        const {
          origin: WF
        } = this;
        if (Math.abs(FF[0] - WF[0]) <= 512 && Math.abs(FF[1] - WF[1]) <= 512 && Math.abs(FF[2] - WF[2]) <= 512) return !1;
        WF[0] = Math.floor(FF[0]), WF[1] = Math.floor(FF[1]), WF[2] = Math.floor(FF[2]);
        for (const SF of this.kinds.values()) null === SF || void 0 === SF || SF.pool.setOrigin(WF[0], WF[1], WF[2]);
        return !0
      }
      commit() {
        for (const FF of this.kinds.values()) null === FF || void 0 === FF || FF.commit()
      }
      dispose() {
        for (const FF of this.kinds.values()) null === FF || void 0 === FF || FF.dispose();
        this.kinds.clear()
      }
    }
  },
  36919: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      default: () => CT
    });
    var CF = SF(46);
    const AF = [{
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
      uF = 10;
    let hF = !0;

    function bW() {
      return hF
    }

    function dF(FF) {
      hF = FF
    }
    const PF = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function RF() {
      return hF ? AF.length : uF
    }

    function iW(FF) {
      var WF, SF;
      return null !== (WF = null === (SF = AF[FF - 1]) || void 0 === SF ? void 0 : SF.reactorTier) && void 0 !== WF ? WF : 0
    }

    function eF(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : iW(FF) > 0;
      return SF && !hF ? "hidden" : FF <= WF ? "open" : SF ? WF < 5 ? "hidden" : WF < uF ? "teaser" : "locked" : "locked"
    }

    function EF(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: CF,
        n: AF
      } = gW(FF);
      return {
        key: WF[CF],
        params: {
          [CF]: SF ? String(AF) : AF
        }
      }
    }
    const QF = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function rW(FF, WF) {
      return iW(FF) > 0 && WF < uF
    }

    function gW(FF) {
      const WF = iW(FF);
      if (WF > 0) return {
        kind: "atomic",
        n: WF,
        short: `A${WF}`
      };
      const SF = function(FF) {
        return FF >= 6 && FF <= 10 ? FF - 6 + 1 : 0
      }(FF);
      return SF > 0 ? {
        kind: "stage",
        n: SF,
        short: `S${SF}`
      } : {
        kind: "tier",
        n: FF,
        short: String(FF)
      }
    }

    function tW(FF) {
      return AF[Math.max(1, Math.min(FF, AF.length)) - 1]
    }

    function TF(FF, WF) {
      return FF < WF ? function(FF) {
        var WF;
        return null !== (WF = AF[FF]) && void 0 !== WF ? WF : null
      }(FF) : null
    }
    const aW = "baf2coresubmit",
      kW = "baf2corebankpause",
      qW = "baf2coredeposit",
      VF = "baf2corechargepause";

    function NF(FF) {
      var WF;
      return null !== (WF = FF.baf2CoreOpen) && void 0 !== WF ? WF : uF
    }
    const DF = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function LF(FF) {
      return DF.includes(FF)
    }
    const mW = (FF, WF) => WF.map((WF => [WF, [FF]])),
      OF = Object.fromEntries([...mW("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...mW("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...mW("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...mW("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...mW("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...mW("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...mW("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...mW("Parts Bench", ["Focus Lens"]), ...mW("Machine Bench", ["Laser", "Collider"]), ...mW("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb"]), ...mW("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...mW("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...mW("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...mW("Tool Bench", ["Mob Cage"]), ...mW("Tool Bench", ["Pocket Terminal"]), ...mW("Tool Bench", ["Comet Beacon"]), ...mW("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function xW(FF) {
      var WF;
      return null !== (WF = OF[FF]) && void 0 !== WF ? WF : ["Workbench"]
    }

    function ZF(FF) {
      return xW(FF)[0]
    }
    AF.slice(1).map(((FF, WF) => `Core Tier ${WF+2}`));
    var oF = SF(8242);
    const YF = ["on", "hud", "off"];

    function MF(FF) {
      return "on" === FF
    }
    var cW = SF(271);
    const GF = "Mob Farm",
      zW = {
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
      IF = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      fF = {
        1: 20,
        2: 60,
        3: 120
      },
      yW = "baf2farmvoid",
      sF = "Caged ",
      nF = " Spawner Block";

    function HF(FF) {
      return `lifeform:${(0,cW.xe)(FF)}`
    }

    function KF(FF) {
      if (!FF) return null;
      if (FF.startsWith(sF)) {
        const WF = FF.slice(6);
        return IF.includes(WF) ? WF : null
      }
      if (FF.endsWith(nF)) {
        const WF = FF.slice(0, -14);
        return void 0 !== zW[WF] ? WF : null
      }
      return null
    }

    function wF(FF) {
      return !0 === FF.mobFarm
    }

    function XF(FF, WF) {
      return fF[zW[WF]] * FF.opMs / 1e3
    }
    const UF = new Map;
    const BF = "baf2islands",
      jW = "baf2islandnew";

    function vW(FF) {
      const WF = AF.findIndex((WF => WF.unlocks.includes(FF)));
      return WF < 0 ? 1 : WF + 1
    }

    function JF(FF) {
      return Math.floor(FF).toLocaleString("en-US")
    }
    var pF = SF(36872);
    const lF = "baf2terminaltake",
      FW = ["one", "stack", "fill"];

    function WW(FF, WF, SF) {
      return `${lF} ${FF} ${WF} ${SF}`
    }

    function SW(FF) {
      const [WF, SF, ...CF] = FF.trim().split(" "), AF = Number(WF), uF = function(FF) {
        if (FW.includes(FF)) return FF;
        const WF = Number(FF);
        return /^\d+$/.test(FF) && Number.isSafeInteger(WF) && WF > 0 ? WF : null
      }(null !== SF && void 0 !== SF ? SF : "");
      return !Number.isSafeInteger(AF) || AF <= 0 || null === uF || 0 === CF.length ? null : {
        seq: AF,
        mode: uF,
        item: CF.join(" ")
      }
    }
    const CW = "baf2rx";

    function AW(FF, WF) {
      for (var SF = arguments.length, CF = new Array(SF > 2 ? SF - 2 : 0), AF = 2; AF < SF; AF++) CF[AF - 2] = arguments[AF];
      return [CW, FF[0], FF[1], FF[2], WF, ...CF].join(" ")
    }
    const uW = 2,
      hW = 4,
      bS = 8,
      dW = 16,
      PW = 32,
      RW = 64,
      iS = 128,
      eW = 256,
      EW = 512,
      QW = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      rS = [{
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
    const gS = "Biomass",
      tS = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function TW(FF) {
      return {
        input: gS,
        inputAmount: 1,
        output: FF,
        outputAmount: 1
      }
    }
    const aS = "baf2synth",
      kS = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      qS = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      VW = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      NW = function(FF, WF) {
        return {
          input: FF,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: WF,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      DW = function(FF, WF) {
        return {
          ...NW(FF, WF, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      LW = {
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
          recipes: [NW("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), NW("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), NW("Raw Gold", "Gold Grit", 2), NW("Messy Stone", "Sand"), NW("Gravel", "Sand"), NW("Raw Voltite", "Voltite Dust", 2), NW("Moonstone", "Moonstone Dust", 4), NW("Wheat Seeds", "Fertiliser"), NW("Raw Uranium", "Uranium Grit", 2), DW("Mossy Messy Stone", "Sand"), ...qS.map((FF => DW(FF, "Biomass", 2)))],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [NW("Iron Grit", "Iron Bar"), NW("Copper Grit", "Copper Bar"), NW("Gold Grit", "Gold Bar"), NW("Raw Iron", "Iron Bar"), NW("Raw Copper", "Copper Bar"), NW("Raw Gold", "Gold Bar"), NW("Sand", "Glass"), NW("Messy Stone", "Stone"), ...cW.Sc.map((FF => NW(FF, "Charcoal", 1, 4))), NW("Wheat", "Bread", 1, 2), ...qS.map(((FF, WF) => DW(FF, VW[WF])))],
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
          recipes: [NW("Iron Bar", "Iron Plate"), NW("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [NW("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [NW("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [NW("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), NW("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), NW("Raw Gold", "Gold Grit", 3), NW("Raw Voltite", "Voltite Dust", 3), NW("Messy Stone", "Sand", 2), NW("Gravel", "Sand", 2), NW("Moonstone", "Moonstone Dust", 6), NW("Raw Uranium", "Uranium Grit", 3)],
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
          table: QW
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [NW("Coal", "Diamond", 1, 24), NW("Voltite Dust", "Moonstone", 1, 12)],
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
        ...pF.k
      },
      mS = {
        Crusher: [NW("Spent Pellet", "Glow Dust"), NW("Wheat Seeds", "Biomass"), NW("Wheat", "Biomass"), NW("Dead Bush", "Biomass"), NW("Dusk Moss", "Biomass"), NW("Rotten Flesh", "Biomass"), NW("Bone", "Biomass", 2)],
        "Shatter Mill": [NW("Spent Pellet", "Glow Dust"), NW("Wheat Seeds", "Biomass"), NW("Wheat", "Biomass"), NW("Dead Bush", "Biomass"), NW("Dusk Moss", "Biomass"), NW("Rotten Flesh", "Biomass"), NW("Bone", "Biomass", 2), ...cW.Sc.map((FF => NW(FF, "Biomass")))],
        Smelter: [NW("Biomass", "Fertiliser", 2)],
        Press: [NW("Coal", "Graphite", 1, 4)]
      },
      OW = "Power Coupler",
      xS = "Advanced Coupler",
      ZW = "Nova Coupler",
      oW = [{
        item: OW,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: xS,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: ZW,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const YW = new Map;

    function MW(FF) {
      var WF, SF;
      return null !== (WF = null !== (SF = FF.fuelSlot) && void 0 !== SF ? SF : FF.couplerSlot) && void 0 !== WF ? WF : null
    }

    function cS(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!FF.couplable) throw new Error(`${FF.kind} takes no Power Coupler`);
      let SF = YW.get(FF);
      SF || (SF = [], YW.set(FF, SF));
      let CF = SF[WF];
      if (!CF) {
        var AF;
        const {
          divisor: uF,
          powerPerS: hF
        } = oW[WF - 1], bW = FF.opMs / uF, dF = void 0 !== FF.fluidMade || void 0 !== FF.cryoMade ? FF.powerPerOp : hF * bW / 1e3;
        CF = {
          ...FF,
          fuelSlot: null,
          couplerSlot: null !== (AF = MW(FF)) && void 0 !== AF ? AF : void 0,
          opMs: bW,
          powerPerOp: dF,
          coupled: !0
        }, WF > 1 && (CF = {
          ...CF,
          couplerLevel: WF
        }), SF[WF] = CF
      }
      return CF
    }
    const GW = new Map;
    const zS = new Map;

    function IW(FF, WF) {
      if (null === WF || (SF = WF, !tS.includes(SF))) return FF;
      var SF;
      let CF = zS.get(WF);
      return CF || (CF = {
        ...FF,
        recipes: [TW(WF)]
      }, zS.set(WF, CF)), CF
    }

    function fW(FF) {
      return !0 === FF.synth
    }
    const yS = (FF, WF, SF, CF) => ({
        output: FF,
        outputAmount: WF,
        tier: SF,
        inputs: CF.map((FF => {
          let [WF, SF] = FF;
          return {
            item: WF,
            amount: SF
          }
        }))
      }),
      sW = Object.fromEntries([yS("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), yS("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), yS("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), yS("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), yS("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), yS("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), yS("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), yS("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), yS("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), yS("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), yS("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), yS("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), yS("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), yS("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), yS("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), yS("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), yS("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), yS("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), yS("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), yS("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), yS("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), yS("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), yS("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), yS("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), yS("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), yS("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), yS("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), yS("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), yS("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), yS("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((FF => [FF.output, FF]))),
      nW = new Map;

    function HW(FF, WF) {
      let SF = LW[FF];
      if (WF.atomic && (SF = function(FF) {
          const WF = mS[FF.kind];
          if (!WF) return FF;
          let SF = GW.get(FF.kind);
          if (!SF) {
            const CF = new Set(WF.map((FF => FF.input))),
              AF = FF.recipes.filter((FF => !CF.has(FF.input)));
            SF = {
              ...FF,
              recipes: [...AF, ...WF]
            }, GW.set(FF.kind, SF)
          }
          return SF
        }(SF)), SF.synth) return IW(SF, WF.taught);
      if (WF.coupled && SF.couplable) return cS(SF, WF.level);
      const CF = SF.inputSlots && null !== WF.taught ? sW[WF.taught] : void 0;
      if (!CF) return SF;
      const AF = `${FF}|${CF.output}`;
      let uF = nW.get(AF);
      return uF || (uF = {
        ...SF,
        bench: CF
      }, nW.set(AF, uF)), uF
    }
    const KW = ["Diamond", "Moonstone"];

    function wW(FF) {
      return new Set(FF.flatMap((FF => FF.bonus ? [FF.output, FF.bonus.item] : [FF.output])).filter((FF => !KW.includes(FF))))
    }
    const XW = Object.values(LW).flatMap((FF => FF.recipes));
    wW(XW.filter((FF => !0 !== FF.nuclear))), wW([...XW.filter((FF => !0 === FF.nuclear)), ...Object.values(mS).flat()]);

    function UW(FF) {
      return null === FF.inputSlot && void 0 === FF.inputSlots && void 0 === FF.powerMade && void 0 === FF.fluidMade && !FF.treeCutter && void 0 === FF.table
    }

    function BW(FF) {
      return !0 === FF.treeCutter
    }
    const jS = ["Voltite Cell"];

    function vS(FF) {
      var WF, SF;
      return null !== (WF = null === (SF = FF.fuels) || void 0 === SF ? void 0 : SF.some((FF => jS.includes(FF)))) && void 0 !== WF && WF
    }
    const JW = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(cW.Sc.map((FF => [FF, 8e3]))),
        ...Object.fromEntries(cW.Dd.map((FF => [FF, 2e3]))),
        "Voltite Cell": 12e4
      },
      pW = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      lW = {
        "Uranium Deposit": 4e3
      };

    function FS(FF) {
      var WF;
      return null !== (WF = Object.keys(pW).find((WF => pW[WF] === FF))) && void 0 !== WF ? WF : null
    }

    function WS(FF) {
      return kS.includes(FF)
    }

    function SS(FF) {
      return !0 !== FF.nuclear || bW()
    }
    var CS = SF(220);
    var AS = SF(8320),
      uS = SF(8252),
      hS = SF(8324),
      bC = SF(8315);
    const dS = "Reactor Controller",
      PS = "Reactor Port",
      RS = "Battery Cell",
      iC = ["fuel", "water", "waste"],
      eS = {
        fuel: PS,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      ES = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      QS = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      rC = "Reactor Frame",
      gC = "Reactor Glass",
      tC = {
        edge: [rC],
        cap: [gC, PS],
        wall: [gC, PS],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [dS]
      },
      TS = {
        edge: [RS],
        cap: [RS],
        wall: [RS],
        inside: [RS],
        ctrl: [RS]
      },
      aC = ["edge", "cap", "wall", "inside"],
      kC = ["Reactor Slag"];

    function qC(FF) {
      return kC.includes(VS(FF))
    }

    function VS(FF) {
      const WF = FF.indexOf("|");
      return WF < 0 ? FF : FF.slice(0, WF)
    }

    function NS(FF) {
      return VS(FF) === dS ? "reactor" : null
    }

    function DS(FF) {
      return VS(FF) !== PS ? null : FF.endsWith("|Water") ? "water" : FF.endsWith("|Waste") ? "waste" : "fuel"
    }

    function LS(FF) {
      const WF = DS(FF);
      return null === WF ? null : xC(eS[iC[(iC.indexOf(WF) + 1) % iC.length]], function(FF) {
        return FF.includes(mC)
      }(FF))
    }
    const mC = "|meta|rot1|Formed",
      OS = new Set([rC, gC, PS]);

    function xC(FF, WF) {
      var SF;
      const CF = VS(FF);
      if (!OS.has(CF)) return FF;
      if (CF !== PS) return WF ? CF + mC : CF;
      const AF = null !== (SF = DS(FF)) && void 0 !== SF ? SF : "fuel";
      return WF ? "fuel" === AF ? CF + mC : `${CF}${mC}|${"water"===AF?"Water":"Waste"}` : eS[AF]
    }

    function ZS(FF, WF) {
      const SF = jC(FF, WF);
      if ("Air" === SF) return !1;
      const CF = "reactor" === FF ? tC : TS;
      return aC.some((FF => CF[FF].includes(SF))) || "reactor" === FF && kC.includes(SF)
    }

    function oS(FF) {
      return QS[FF]
    }

    function YS(FF) {
      var WF;
      return null !== (WF = ES[FF]) && void 0 !== WF ? WF : ES[1]
    }

    function MS(FF) {
      const [WF, , SF] = YS(FF);
      return [SF, 0, -WF]
    }

    function cC(FF, WF, SF, CF, AF, uF) {
      return {
        ctrl: [FF[0], FF[1], FF[2]],
        rot: ES[WF] ? WF : 1,
        w: SF,
        h: CF,
        d: AF,
        cu: uF[0],
        cv: uF[1]
      }
    }

    function GS(FF, WF) {
      return "reactor" === FF ? [Math.floor((WF - 1) / 2), 0] : [0, 0]
    }

    function zC(FF, WF, SF, CF, AF) {
      let uF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : FF.rot;
      if (SF === FF.w && CF === FF.h && AF === FF.d && uF === FF.rot) return FF;
      const [hF] = GS(WF, FF.w);
      if (FF.cu === hF && FF.cv <= 1) return cC(FF.ctrl, uF, SF, CF, AF, GS(WF, SF));
      const bW = (FF, WF) => Math.max(1, Math.min(WF, FF));
      return cC(FF.ctrl, uF, SF, CF, AF, [bW(FF.cu, SF - 2), 0 === FF.cv ? 0 : bW(FF.cv, CF - 2)])
    }
    const IS = 11,
      fS = 2 * IS + 1;
    new Uint8Array(fS * fS * fS);

    function yC(FF) {
      return FF.w * FF.h * FF.d
    }

    function sS(FF) {
      const WF = MS(FF.rot);
      return [FF.ctrl[0] - WF[0] * FF.cu, FF.ctrl[1] - FF.cv, FF.ctrl[2] - WF[2] * FF.cu]
    }

    function nS(FF) {
      return FF.cv * FF.d * FF.w + FF.cu
    }

    function HS(FF, WF) {
      const SF = WF % FF.w,
        CF = Math.floor(WF / FF.w) % FF.d;
      return [SF, Math.floor(WF / (FF.w * FF.d)), CF]
    }

    function KS(FF, WF) {
      const [SF, CF, AF] = HS(FF, WF), uF = sS(FF), hF = YS(FF.rot), bW = MS(FF.rot);
      return [uF[0] + bW[0] * SF - hF[0] * AF, uF[1] + CF, uF[2] + bW[2] * SF - hF[2] * AF]
    }

    function wS(FF, WF) {
      const SF = sS(FF),
        CF = YS(FF.rot),
        AF = MS(FF.rot),
        uF = WF[0] - SF[0],
        hF = WF[2] - SF[2],
        bW = uF * AF[0] + hF * AF[2],
        dF = -(uF * CF[0] + hF * CF[2]),
        PF = WF[1] - SF[1];
      return bW < 0 || bW >= FF.w || PF < 0 || PF >= FF.h || dF < 0 || dF >= FF.d ? -1 : (PF * FF.d + dF) * FF.w + bW
    }

    function XS(FF, WF) {
      if (WF === nS(FF)) return "ctrl";
      const [SF, CF, AF] = HS(FF, WF), uF = 0 === CF || CF === FF.h - 1, hF = Number(0 === SF || SF === FF.w - 1) + Number(uF) + Number(0 === AF || AF === FF.d - 1);
      return hF >= 2 ? "edge" : 1 === hF ? uF ? "cap" : "wall" : "inside"
    }

    function US(FF, WF) {
      const [SF, CF, AF] = HS(FF, WF);
      return 0 === SF || SF === FF.w - 1 || 0 === CF || CF === FF.h - 1 || 0 === AF || AF === FF.d - 1 ? -1 : ((CF - 1) * (FF.d - 2) + (AF - 1)) * (FF.w - 2) + (SF - 1)
    }

    function BS(FF, WF) {
      const SF = FF.w - 2,
        CF = FF.d - 2,
        AF = WF % SF + 1,
        uF = Math.floor(WF / SF) % CF + 1;
      return ((Math.floor(WF / (SF * CF)) + 1) * FF.d + uF) * FF.w + AF
    }

    function jC(FF, WF) {
      const SF = VS(WF);
      return "reactor" === FF && SF === dS ? rC : SF
    }

    function vC(FF, WF, SF) {
      const CF = "ctrl" === WF ? VS(SF) : jC(FF, SF);
      return ("reactor" === FF ? tC : TS)[WF].includes(CF) ? "ok" : "Air" === CF ? "missing" : ZS(FF, SF) ? "wrong" : "blocked"
    }

    function JS(FF, WF) {
      return "battery" === FF ? RS : "inside" === WF ? null : function(FF, WF) {
        if ("inside" === WF || "ctrl" === WF || "battery" === FF) return null;
        return "edge" === WF ? rC : gC
      }(FF, WF)
    }
    const pS = {
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
      lS = "Collider",
      FC = "Laser",
      WC = "Star Alloy",
      SC = "Glow Dust",
      CC = [lS, "_Collider Focus"];

    function AC(FF) {
      return CC.indexOf(VS(FF))
    }

    function uC(FF) {
      return VS(FF) === FC
    }

    function hC(FF) {
      return [
        [FF[0], FF[1], FF[2]],
        [FF[0], FF[1] + 1, FF[2]]
      ]
    }
    const bA = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function dC(FF, WF, SF) {
      const CF = bA[WF];
      return [FF[0] + CF[0] * SF, FF[1], FF[2] + CF[2] * SF]
    }

    function PC(FF, WF) {
      if (WF[1] !== FF[1]) return null;
      const SF = WF[0] - FF[0],
        CF = WF[2] - FF[2];
      if (0 !== SF === (0 !== CF)) return null;
      const AF = Math.abs(SF + CF);
      if (AF > pS.LASER_D) return null;
      return {
        dir: CF < 0 ? 0 : SF > 0 ? 1 : CF > 0 ? 2 : 3,
        FF: AF
      }
    }

    function RC(FF, WF, SF) {
      const CF = WF => Math.abs(FF[0] - WF[0]) <= 1 && Math.abs(FF[1] - WF[1]) <= 1;
      return CF(WF) || CF(SF)
    }

    function iA(FF, WF) {
      return function(FF, WF, SF, CF) {
        return [0, 1, 2, 3].map((AF => {
          for (let uF = 1; uF <= pS.LASER_D; uF++) {
            const hF = dC(FF, AF, uF);
            if (RC([hF[0], hF[2]], WF, SF) || !CF(hF)) return !1
          }
          return !0
        }))
      }(hC(FF)[1], WF.spawnXZ, WF.coreXZ, (FF => FF[1] >= AS.m && FF[1] < AS.m + AS.q && FF[0] >= WF.minXZ[0] && FF[0] <= WF.maxXZ[0] && FF[2] >= WF.minXZ[1] && FF[2] <= WF.maxXZ[1]))
    }
    const eC = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function EC(FF) {
      return Math.max(48 + 16 * FF, tW(FF).machineAllowance)
    }
    const QC = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function rA(FF) {
      const WF = FF.split("|")[0];
      return QC.includes(WF) ? "Solar Panel" : WF === hS.d ? "Fluid Pipe" : AC(WF) >= 0 ? "Collider" : (SF = WF, eC.includes(SF) ? WF : null);
      var SF
    }
    const gA = "buildAFactory2Game:solarPanelDescription";
    const tA = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function TC(FF, WF) {
      var SF;
      return null !== (SF = tA.find((SF => {
        var CF;
        return (null !== (CF = FF.level(SF)) && void 0 !== CF ? CF : 0) >= WF
      }))) && void 0 !== SF ? SF : null
    }
    const aA = "buildAFactory2Game:";
    let kA = null;
    const qA = {
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
      VC = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      NC = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      DC = {
        "Loot Chest": `${aA}lookRuinChestName`
      };

    function LC(FF) {
      return "object" === typeof FF && null !== FF && "translationKey" in FF && "string" === typeof FF.translationKey ? FF.translationKey : null
    }

    function mA(FF, WF) {
      var SF;
      return null !== (SF = LC(FF.displayName(WF))) && void 0 !== SF ? SF : `item:${(0,cW.xe)(WF)}`
    }

    function OC(FF, WF) {
      var SF, CF, AF, uF;
      let hF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : WF;
      if ("Solar Panel" === rA(WF)) return {
        name: LC(FF.displayName("Solar Panel")),
        detail: gA,
        detailItem: null
      };
      const dF = WF.endsWith(" Ore"),
        PF = (kA ??= new Set([...Object.keys((0, uS.g)()), ...Object.keys((0, hS.p)())].map((FF => FF.split("|")[0]))), kA).has(WF),
        RF = dF || PF ? null : function(FF) {
          var WF;
          return FF.endsWith(" Log") && !FF.startsWith("Barkless ") ? "lookLog" : FF.endsWith(" Sapling") ? "lookSapling" : FF.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (WF = qA[FF]) && void 0 !== WF ? WF : null
        }(WF);
      if (!FF.isBlock(WF) || !dF && !PF && null === RF) return null;
      const iW = null !== (SF = null !== (CF = DC[WF]) && void 0 !== CF ? CF : LC(null !== (AF = FF.displayName(hF)) && void 0 !== AF ? AF : FF.displayName(WF))) && void 0 !== SF ? SF : `item:${(0,cW.xe)(WF)}`;
      if (null !== RF) return {
        name: iW,
        detail: `${aA}${RF}`,
        detailItem: null
      };
      const eF = null !== (uF = VC[WF]) && void 0 !== uF ? uF : bW() ? NC[WF] : void 0;
      if (PF && void 0 !== eF) return {
        name: iW,
        detail: `${aA}${eF}`,
        detailItem: null
      };
      const EF = pW[WF];
      if (void 0 !== EF) return {
        name: iW,
        detail: `${aA}lookDeposit`,
        detailItem: mA(FF, EF)
      };
      const QF = FF.harvestLevel(WF);
      if (dF && "rock" === FF.harvestType(WF) && 0 !== QF) {
        const WF = TC(FF, null !== QF && void 0 !== QF ? QF : 0);
        if (WF === tA[0]) return {
          name: iW,
          detail: `${aA}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== WF) return {
          name: iW,
          detail: `${aA}lookPickaxe`,
          detailItem: mA(FF, WF)
        }
      }
      return {
        name: iW,
        detail: LC(FF.description(WF)),
        detailItem: null
      }
    }

    function xA(FF) {
      return FF < AS.m - 24
    }
    const ZC = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const oC = "Wrench",
      YC = "Nova Wrench";

    function MC(FF) {
      return FF === oC || FF === YC
    }
    const cA = [...AS.I, "Belt Lift", "Belt Drop"];
    const GC = ["Belt Lift", "Belt Drop"],
      zA = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function IC(FF) {
      return FF.split("|")[0]
    }

    function fC(FF) {
      const WF = /\|rot(\d)/.exec(FF);
      return WF ? Number(WF[1]) : 1
    }

    function yA(FF) {
      return FF % 4 + 1
    }

    function sC(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === WF && "" === SF ? FF : `${FF}|meta|rot${WF}${SF}`
    }

    function nC(FF) {
      return IC(FF) === AS.y ? (0, AS.R)(FF) ? "gateRight" : "gateLeft" : (0, AS.X)(FF)
    }

    function HC(FF) {
      const WF = IC(FF),
        SF = fC(FF);
      if (AS.I.includes(WF)) return (0, AS.L)(WF, yA(SF), null);
      if (WF === AS.g) return (0, AS.cb)(yA(SF), (0, AS.T)(FF));
      if (WF === AS.z) {
        const CF = zA[(0, AS.X)(FF)];
        return null === CF ? sC(WF, yA(SF)) : sC(WF, SF, AS.A[CF])
      }
      return WF === AS.y ? (0, AS.R)(FF) ? sC(WF, yA(SF)) : sC(WF, SF, AS.k) : bC.c.includes(WF) && !GC.includes(WF) || WS(WF) ? sC(WF, yA(SF)) : null
    }

    function KC(FF) {
      return bC.c.includes(FF) || WS(FF) || null !== rA(FF)
    }

    function wC(FF) {
      return "Solar Panel" === rA(FF)
    }
    const XC = "buildAFactory2Game:",
      UC = {
        leftFront: `${XC}lookSplitDetail_leftFront`,
        frontRight: `${XC}lookSplitDetail_frontRight`,
        gateRight: `${XC}lookGateDetail_gateRight`
      };

    function BC(FF, WF) {
      var SF;
      let CF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const AF = nC(FF),
        uF = null === AF ? null : `${XC}${AF.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${AF}`,
        hF = null === AF ? null : null !== (SF = UC[AF]) && void 0 !== SF ? SF : null;
      if (MC(WF) && CF) {
        const SF = IC(FF);
        return WF === YC && bW() && function(FF) {
          return cA.includes(IC(FF))
        }(FF) ? {
          mode: uF,
          detail: hF,
          next: `${XC}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: uF,
          detail: hF,
          next: KC(SF) && !wC(SF) ? `${XC}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const dF = MC(WF) ? HC(FF) : null;
      if (null === dF) return {
        mode: uF,
        detail: hF,
        next: null,
        nextState: null
      };
      const PF = nC(dF);
      return null === PF || fC(dF) !== fC(FF) ? {
        mode: uF,
        detail: hF,
        next: `${XC}lookWrenchTurn`,
        nextState: null
      } : {
        mode: uF,
        detail: hF,
        next: `${XC}lookWrenchNext`,
        nextState: `${XC}lookWrenchState_${PF}`
      }
    }
    const jA = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"],
      vA = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function JC(FF) {
      return [0, 1, 2, 3].map((WF => 0 !== (FF & 1 << WF)))
    }

    function pC(FF) {
      const WF = [];
      for (let SF = 8; SF + 2 < FF.length; SF += 3) WF.push([FF[SF], FF[SF + 1], FF[SF + 2]]);
      return {
        focus: [FF[0], FF[1], FF[2]],
        lasers: JC(FF[3]),
        open: JC(FF[4]),
        live: JC(FF[5]),
        on: 1 === FF[6],
        state: vA[FF[7]],
        blockers: WF
      }
    }
    const lC = "Arc Caster",
      FA = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      WA = (Object.values(FA), "Jet Chestplate"),
      SA = "Nova Jet Chestplate",
      CA = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      AA = Object.values(CA);

    function uA(FF, WF, SF) {
      return Math.min(function(FF) {
        return bW() && iW(FF) >= 5 ? 20 : 10
      }(SF), Math.floor(function(FF, WF) {
        return Math.max(0, FF) + (bW() ? Math.max(0, WF) : 0)
      }(FF, WF) / 5))
    }

    function hA(FF, WF, SF) {
      const CF = uA(WF, SF, FF),
        AF = iW(FF),
        uF = (AF >= 3 ? 55 : AF >= 1 ? 50 : FF >= 8 ? 45 : 30) + CF,
        hF = Math.max(100 + CF, 2 * uF);
      return {
        arcDamage: uF,
        arcPierce: FF >= 7 ? 2 : 1,
        arcChain: FF >= 10,
        barrierMax: (AF >= 4 ? 100 : AF >= 2 ? 90 : FF >= 9 ? 80 : FF >= 6 ? 60 : 40) + 5 * CF,
        barrierRegenPerS: AF >= 5 ? 20 : FF >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * CF,
        novaShieldRegenPerS: 32,
        bladeDamage: hF,
        bladePunch: Math.round(.5 * hF),
        forgeRank: CF
      }
    }
    const bu = {
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
    var dA = SF(35310),
      PA = SF(35133),
      RA = SF(35131),
      iu = SF(11),
      eA = SF(1475),
      EA = SF(918),
      QA = SF.n(EA);

    function ru(FF) {
      return !0 === FF.field
    }
    const gu = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function tu(FF) {
      return gu.has(FF) ? `buildAFactory2Game:itemPlural_${(0,cW.xe)(FF)}` : null
    }
    var TA = SF(1046),
      au = SF(929),
      ku = SF(1563),
      qu = SF(1546),
      VA = SF(35299),
      NA = SF(35305),
      DA = SF(20),
      LA = SF(35291);
    const mu = "baf2QuestView",
      OA = "baf2PlayerY",
      xu = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class ZA {
      constructor() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
        this.requestBook = FF, this.view = {
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
      set(FF, WF) {
        var SF, CF, AF, uF, hF, bW, dF, PF;
        const RF = JSON.stringify(FF.baf2QuestName) === JSON.stringify(this.view.name),
          iW = new Set(this.view.rows.filter((FF => FF.done)).map((FF => FF.id))),
          eF = new Set(this.view.rows.filter((FF => FF.justFinished)).map((FF => FF.id))),
          EF = FF.baf2QuestSide,
          QF = null !== EF && !0 === FF.baf2QuestSideFocus;
        let rW = !1,
          gW = 0;
        const tW = FF.baf2QuestSteps.map((FF => {
            const WF = IA(FF, xu.has(FF[0]) ? FF[0] : "" + gW++),
              SF = RF && WF.done && !iW.has(WF.id);
            return WF.justFinished = SF || RF && WF.done && eF.has(WF.id), rW ||= SF, WF
          })),
          TF = zu(tW);
        TF >= 0 && !QF && (tW[TF].current = !0);
        const aW = !RF && null !== FF.baf2QuestName,
          kW = JSON.stringify(EF && [EF[0], EF[1]]) === JSON.stringify(null !== (SF = null === (CF = this.view.side) || void 0 === CF ? void 0 : CF.name) && void 0 !== SF ? SF : null);
        this.serverTutorial = null !== (AF = FF.baf2QuestTutorial) && void 0 !== AF ? AF : "on", (null !== (uF = FF.baf2QuestTutorialSeq) && void 0 !== uF ? uF : 0) >= this.pickSeq && this.endPick();
        const qW = !RF || !kW || FF.baf2QuestTier !== this.view.tier;
        this.view = {
          name: FF.baf2QuestName,
          rows: tW,
          reward: FF.baf2QuestReward,
          goal: FF.baf2QuestGoal,
          pulse: this.view.pulse + (rW || aW ? 1 : 0),
          itemNames: WF,
          side: EF && {
            name: [EF[0], EF[1]],
            row: {
              ...IA(EF[2], "side"),
              current: QF
            },
            goal: null !== (hF = EF[3]) && void 0 !== hF ? hF : null
          },
          tier: FF.baf2QuestTier,
          core: FF.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (bW = FF.baf2QuestAlso) && void 0 !== bW ? bW : [],
          depth: null !== (dF = FF.baf2QuestDepth) && void 0 !== dF ? dF : null,
          tutorial: null !== (PF = this.pickedTutorial) && void 0 !== PF ? PF : this.serverTutorial,
          tutorialKnown: !0
        }, this.Uu(), rW && this.scheduleClear(), qW && this.requestBook()
      }
      setTutorial(FF) {
        return this.endPick(), this.pickedTutorial = FF, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.Uu()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: FF
        }, this.Uu(), this.pickSeq
      }
      onPlayerY(FF) {
        const WF = Math.floor(FF);
        WF !== this.playerY && (this.playerY = WF, this.view.depth && DA.j.Uu(OA, WF))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(FF) {
        this.view = {
          ...this.view,
          chapters: FF.baf2BookChapters
        }, this.Uu()
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
            rows: this.view.rows.map((FF => FF.justFinished ? {
              ...FF,
              justFinished: !1
            } : FF))
          }, this.Uu()
        }), 2400)
      }
      Uu() {
        DA.j.Uu(mu, this.view, !0)
      }
    }

    function oA(FF) {
      return (null === FF.name || YA(FF)) && null === FF.side && null !== FF.chapters
    }

    function YA(FF) {
      var WF;
      return "quest_forgeOngoing" === (null === (WF = FF.name) || void 0 === WF ? void 0 : WF[0])
    }

    function MA(FF) {
      return FF.filter((FF => !xu.has(FF.key)))
    }

    function cu(FF) {
      return FF.key.startsWith("stepCraft")
    }

    function GA(FF, WF) {
      const SF = new Set,
        CF = FF.side ? [...FF.rows, FF.side.row] : FF.rows;
      for (const uF of CF)
        if (!uF.done) {
          !uF.item || WF && !cu(uF) || SF.add(uF.item);
          for (const [FF, WF, CF] of null !== (AF = uF.chips) && void 0 !== AF ? AF : []) {
            var AF;
            WF < CF && SF.add(FF)
          }
        } return SF
    }

    function zu(FF) {
      const WF = FF.findIndex((FF => !FF.done && !FF.away));
      return WF >= 0 ? WF : FF.findIndex((FF => !FF.done))
    }

    function IA(FF, WF) {
      let [SF, CF, AF, uF, hF, bW, dF, PF, RF, iW] = FF;
      return {
        id: WF,
        key: SF,
        params: CF,
        item: AF,
        amount: uF,
        total: hF,
        done: bW,
        chips: null !== dF && void 0 !== dF ? dF : null,
        current: !1,
        away: !0 === PF,
        madeFor: null !== RF && void 0 !== RF ? RF : [],
        also: null !== iW && void 0 !== iW ? iW : [],
        justFinished: !1
      }
    }
    const fA = "baf2QuestItems",
      yu = new Set;
    let sA = new Set,
      nA = null;

    function HA(FF) {
      const WF = MF(FF.tutorial),
        SF = WF ? GA(FF, !0) : yu;
      "inventory" === iu.b.get("openInGameMenuName") ? (nA = null, (0, LA.x)(SF)) : nA = SF;
      const CF = WF ? GA(FF, !1) : yu;
      (0, NA.c)(CF, sA) || (sA = CF, DA.j.Uu(fA, sA))
    }

    function KA() {
      return (0, VA.c)(fA, (() => sA))
    }
    var wA = SF(35203),
      XA = SF(2477);

    function UA(FF) {
      const WF = (0, XA.b)(FF),
        SF = void 0 === WF ? void 0 : (0, wA.displayNameOf)(WF);
      return "object" === typeof SF && null !== SF && "translationKey" in SF && "string" === typeof SF.translationKey ? SF.translationKey : `item:${(0,cW.xe)(FF)}`
    }

    function BA(FF, WF) {
      return FF(UA(WF))
    }
    const ju = [{
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

    function vu(FF, WF) {
      return [`Deposit Seed (${FF})`, {
        item: pW[`${FF} Deposit`],
        amount: WF
      }]
    }
    const JA = Object.fromEntries([vu("Coal", 8), vu("Iron", 8), vu("Copper", 8), vu("Gold", 6), vu("Voltite", 4), vu("Uranium", 4)]),
      pA = "Relay Coil",
      lA = new Map;

    function Fu(FF) {
      let WF = lA.get(FF);
      if (!WF) {
        const SF = Math.max(1, FF);
        WF = ju.filter((FF => {
          var WF;
          return SF >= FF.fromTier && SF <= (null !== (WF = FF.untilTier) && void 0 !== WF ? WF : 1 / 0)
        })).map((FF => FF.later && SF >= FF.later.tier ? {
          ...FF,
          weight: FF.later.weight
        } : FF)), lA.set(FF, WF)
      }
      return WF
    }

    function Wu(FF) {
      return Fu(FF).some((FF => {
        let {
          item: WF
        } = FF;
        return WF === pA
      }))
    }

    function Su(FF) {
      return FF.startsWith("Deposit Seed (")
    }

    function Cu(FF, WF) {
      const SF = Fu(FF);
      return WF ? SF.filter((FF => WF(FF.item))) : SF
    }

    function Au(FF) {
      return FF.reduce(((FF, WF) => FF + WF.weight), 0)
    }

    function uu(FF, WF) {
      const SF = Cu(FF, WF),
        CF = Au(SF);
      return SF.map((FF => ({
        find: FF,
        chance: FF.weight / CF
      })))
    }
    const hu = 6e4;

    function bh(FF, WF) {
      const SF = FF >= 10 ? Math.round(FF) : Math.round(10 * FF) / 10;
      return 0 === SF ? "0" : `${WF}${SF.toLocaleString("en-US")}`
    }

    function du(FF) {
      return FF < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? FF.toLocaleString("en-US") : FF < 1e6 ? `${FF<1e5?Math.floor(FF/100)/10:Math.floor(FF/1e3)}k` : Math.floor(FF / 1e5) / 10 + "M"
    }

    function Pu(FF) {
      return FF < 0 ? "\u2212" + -FF : String(FF)
    }

    function Ru(FF, WF) {
      const SF = Math.max(1, Math.round(WF));
      if (SF < 60) return FF("buildAFactory2Game:durationSeconds", {
        seconds: String(SF)
      });
      const CF = Math.round(SF / 60);
      if (CF < 60) return FF("buildAFactory2Game:durationMinutes", {
        minutes: String(CF)
      });
      const AF = String(Math.floor(CF / 60));
      return CF % 60 === 0 ? FF("buildAFactory2Game:durationWholeHours", {
        hours: AF
      }) : FF("buildAFactory2Game:durationHours", {
        hours: AF,
        minutes: String(CF % 60)
      })
    }
    const ih = "(max-height: 420px), (max-width: 650px)";

    function eu() {
      return "undefined" !== typeof window && window.matchMedia(ih).matches
    }

    function Eu(FF) {
      const WF = window.matchMedia(ih),
        SF = () => {
          FF(WF.matches)
        };
      return WF.addEventListener("change", SF), () => {
        WF.removeEventListener("change", SF)
      }
    }
    var Qu = SF(971);

    function rh(FF, WF) {
      return null !== FF && FF > WF + 1
    }

    function gh(FF) {
      const WF = 100 * FF;
      return String(WF <= 0 || WF >= 1 ? Math.round(WF) : Math.max(.1, Math.round(10 * WF) / 10))
    }

    function th(FF) {
      let {
        item: WF,
        amount: SF
      } = FF;
      return (0, Qu.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, Qu.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, Qu.jsx)(ku.b, {
            itemName: WF,
            amount: 0
          })
        }), SF > 1 && (0, Qu.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", SF]
        })]
      })
    }

    function Tu(FF) {
      let {
        label: WF,
        names: SF
      } = FF;
      const [AF, uF] = (0, CF.useState)(!1), hF = SF.join(" / ");
      return (0, Qu.jsxs)(Qu.Fragment, {
        children: [(0, Qu.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: hF,
          "aria-expanded": AF,
          onClick: () => {
            uF(!AF)
          },
          children: WF
        }), AF && (0, Qu.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: hF
        })]
      })
    }

    function ah(FF) {
      let {
        tier: WF
      } = FF;
      const {
        t: SF
      } = (0, TA.B)(), {
        key: CF,
        params: AF
      } = EF(WF, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), uF = SF(`buildAFactory2Game:${CF}`, AF);
      return (0, Qu.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, Qu.jsx)(au.e, {
          name: "lock"
        }), uF]
      })
    }
    const kh = (0, CF.createContext)(null);

    function qh() {
      const {
        t: FF
      } = (0, TA.B)(), WF = (0, CF.useContext)(kh);
      return (0, CF.useEffect)((() => null === WF || void 0 === WF ? void 0 : WF()), [WF]), (0, Qu.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: FF("buildAFactory2Game:recipeForQuest"),
        "aria-label": FF("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function Vu(FF) {
      let {
        title: WF,
        count: SF,
        children: AF,
        startOpen: uF = !0
      } = FF;
      const {
        t: hF
      } = (0, TA.B)(), [bW, dF] = (0, CF.useState)((() => uF && !eu())), [PF, RF] = (0, CF.useState)(0), iW = (0, CF.useCallback)((() => (RF((FF => FF + 1)), () => {
        RF((FF => FF - 1))
      })), []);
      return (0, Qu.jsxs)("div", {
        className: QA()("Baf2Recipes", {
          Open: bW
        }),
        children: [(0, Qu.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            dF(!bW)
          },
          "aria-expanded": bW,
          children: [hF("buildAFactory2Game:recipesToggle", {
            title: WF,
            count: String(SF)
          }), (0, Qu.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: bW ? "\u25be" : "\u25b8"
          })]
        }), bW && (0, Qu.jsxs)(kh.Provider, {
          value: iW,
          children: [(0, Qu.jsx)("ul", {
            className: "Baf2RecipeList",
            children: AF
          }), PF > 0 && (0, Qu.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, Qu.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), hF("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const Nu = "buildAFactory2Game:",
      Du = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const Lu = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      mh = {
        "Uranium Grit": uF,
        "Raw Uranium": uF
      };

    function Ou(FF) {
      var WF;
      return null !== (WF = mh[FF]) && void 0 !== WF ? WF : Math.max(vW(FF), Lu[FF] ? vW(Lu[FF]) : 1, function(FF) {
        const WF = AF.findIndex((WF => WF.cost.some((WF => WF.item === FF))));
        return WF > uF ? WF : 1
      }(FF))
    }

    function xh(FF, WF) {
      return Zu(WF) ? Ou(WF) : function(FF) {
        if (Du.has(FF)) return 1;
        const WF = AF.findIndex((WF => WF.newDeposits.some((WF => {
          let {
            block: SF
          } = WF;
          return SF === FF
        }))));
        return WF < 0 ? 1 : WF + 1
      }(FF)
    }

    function Zu(FF) {
      return FF in mh || iW(Ou(FF)) > 0
    }

    function ou(FF, WF) {
      return HW(FF, {
        coupled: !1,
        taught: null,
        atomic: bW() && WF >= 11
      }).recipes
    }

    function Yu(FF, WF) {
      const SF = eF(FF, WF, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : iW(FF) > 0);
      return "open" === SF || "locked" === SF
    }

    function Mu(FF, WF) {
      return FF.map(((FF, SF) => ({
        value: FF,
        idx: SF,
        tier: WF(FF)
      }))).sort(((FF, WF) => FF.tier - WF.tier || FF.idx - WF.idx)).map((FF => {
        let {
          value: WF
        } = FF;
        return WF
      }))
    }

    function ch(FF, WF, SF) {
      const CF = eF(FF, WF);
      if ("hidden" === CF || "open" === CF) return null;
      if ("teaser" === CF) return {
        tag: {
          translationKey: `${Nu}${SF?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${Nu}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const AF = EF(FF, {
          tier: SF ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        uF = EF(FF, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${Nu}${AF.key}`,
          params: AF.params
        },
        reason: {
          translationKey: `${Nu}${uF.key}`,
          params: uF.params
        }
      }
    }

    function Gu(FF) {
      return !Su(FF)
    }

    function zh(FF) {
      let {
        seconds: WF
      } = FF;
      const {
        t: SF
      } = (0, TA.B)();
      return (0, Qu.jsx)(Vu, {
        title: SF("buildAFactory2Game:recipesCuts", {
          seconds: WF
        }),
        count: 1,
        children: (0, Qu.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, Qu.jsx)(th, {
            item: "Maple Sapling",
            amount: 1
          }), (0, Qu.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, Qu.jsx)(th, {
            item: "Maple Log",
            amount: 1
          }), (0, Qu.jsx)("span", {
            className: "Baf2RecipeName",
            children: SF("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function Iu(FF) {
      let {
        fertilised: WF
      } = FF;
      const {
        t: SF
      } = (0, TA.B)();
      return (0, Qu.jsxs)(Vu, {
        title: SF("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, Qu.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, Qu.jsx)(th, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, Qu.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, Qu.jsx)(th, {
            item: "Wheat",
            amount: 1
          }), (0, Qu.jsx)(th, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, Qu.jsx)("span", {
            className: "Baf2RecipeName",
            children: SF("buildAFactory2Game:recipeField")
          })]
        }), (0, Qu.jsxs)("li", {
          className: QA()("Baf2Recipe", {
            InUse: WF
          }),
          children: [(0, Qu.jsx)(th, {
            item: "Fertiliser",
            amount: 1
          }), (0, Qu.jsx)("span", {
            className: "Baf2RecipeName",
            children: SF("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function fu(FF) {
      let {
        tier: WF,
        seconds: SF
      } = FF;
      const {
        t: CF
      } = (0, TA.B)(), AF = function(FF) {
        return FF >= 5 ? rS : QW
      }(WF);
      return (0, Qu.jsx)(Vu, {
        title: CF("buildAFactory2Game:recipesBringsUp", {
          seconds: SF
        }),
        count: AF.length,
        children: AF.map((FF => {
          let {
            item: WF,
            chance: SF
          } = FF;
          return (0, Qu.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, Qu.jsx)(th, {
              item: WF,
              amount: 1
            }), (0, Qu.jsx)("span", {
              className: "Baf2RecipeName",
              children: BA(CF, WF)
            }), (0, Qu.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: CF("buildAFactory2Game:recipeChance", {
                percent: gh(SF)
              })
            })]
          }, WF)
        }))
      })
    }

    function yh(FF) {
      let {
        tier: WF,
        seconds: SF,
        noSeeds: CF
      } = FF;
      const {
        t: AF
      } = (0, TA.B)(), uF = KA(), hF = uu(WF, CF ? Gu : void 0), bW = CF && uu(WF).length > hF.length, dF = Wu(WF);
      return (0, Qu.jsxs)(Vu, {
        title: AF("buildAFactory2Game:recipesRecycles", {
          seconds: SF
        }),
        count: hF.length,
        children: [hF.map((FF => {
          let {
            find: WF,
            chance: SF
          } = FF;
          return (0, Qu.jsxs)("li", {
            className: "Baf2Recipe",
            children: [uF.has(WF.item) && (0, Qu.jsx)(qh, {}), (0, Qu.jsx)(th, {
              item: WF.item,
              amount: WF.amount
            }), (0, Qu.jsx)("span", {
              className: "Baf2RecipeName",
              children: BA(AF, WF.item)
            }), (0, Qu.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: AF("buildAFactory2Game:recipeChance", {
                percent: gh(SF)
              })
            })]
          }, WF.item)
        })), bW && (0, Qu.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Qu.jsx)("span", {
            className: "Baf2RecipeName",
            children: AF("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), dF && (0, Qu.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Qu.jsx)("span", {
            className: "Baf2RecipeName",
            children: AF("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function su(FF) {
      let {
        tier: WF,
        seconds: SF
      } = FF;
      const {
        t: CF
      } = (0, TA.B)(), AF = Object.entries(JA).filter((FF => {
        let [, {
          item: SF
        }] = FF;
        return Yu(Ou(SF), WF, Zu(SF))
      }));
      return (0, Qu.jsx)(Vu, {
        title: CF("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: SF
        }),
        count: AF.length,
        children: AF.map((FF => {
          let [WF, {
            item: SF,
            amount: AF
          }] = FF;
          return (0, Qu.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, Qu.jsx)(th, {
              item: WF,
              amount: 1
            }), (0, Qu.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, Qu.jsx)(th, {
              item: SF,
              amount: AF
            }), (0, Qu.jsx)("span", {
              className: "Baf2RecipeName",
              children: BA(CF, SF)
            })]
          }, WF)
        }))
      })
    }

    function nu(FF) {
      let {
        tier: WF,
        seconds: SF
      } = FF;
      const {
        t: CF
      } = (0, TA.B)(), AF = KA(), uF = Mu(Object.entries(pW).filter((FF => {
        let [SF, CF] = FF;
        return Yu(xh(SF, CF), WF, Zu(CF))
      })), (FF => {
        let [WF, SF] = FF;
        return xh(WF, SF)
      }));
      return (0, Qu.jsx)(Vu, {
        title: CF("buildAFactory2Game:recipesDigs", {
          seconds: SF
        }),
        count: uF.length,
        children: uF.map((FF => {
          let [SF, uF] = FF;
          const hF = xh(SF, uF),
            bW = hF > WF ? hF : null,
            dF = lW[SF],
            PF = null === bW && AF.has(uF);
          return (0, Qu.jsxs)("li", {
            className: QA()("Baf2Recipe", {
              Locked: null !== bW,
              Far: rh(bW, WF)
            }),
            children: [PF && (0, Qu.jsx)(qh, {}), (0, Qu.jsx)(th, {
              item: SF,
              amount: 1
            }), (0, Qu.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, Qu.jsx)(th, {
              item: uF,
              amount: 1
            }), (0, Qu.jsx)("span", {
              className: "Baf2RecipeName",
              children: BA(CF, uF)
            }), void 0 !== dF && (0, Qu.jsx)("span", {
              className: "Baf2RecipeMore",
              children: CF("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / dF)
              })
            }), null !== bW && (0, Qu.jsx)(ah, {
              tier: bW
            })]
          }, SF)
        }))
      })
    }

    function Hu(FF) {
      var WF;
      let {
        def: SF,
        seconds: CF
      } = FF;
      const {
        t: AF
      } = (0, TA.B)();
      return (0, Qu.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, Qu.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (WF = SF.fuels) && void 0 !== WF ? WF : []).map((FF => (0, Qu.jsx)(th, {
            item: FF,
            amount: 1
          }, FF))), (0, Qu.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, Qu.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, Qu.jsx)(au.e, {
              name: "bolt"
            }), AF("buildAFactory2Game:recipePower", {
              power: JF(SF.powerMade),
              seconds: CF
            })]
          })]
        })
      })
    }

    function Ku(FF) {
      let {
        def: WF
      } = FF;
      const {
        t: SF
      } = (0, TA.B)();
      return (0, Qu.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, Qu.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Qu.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, Qu.jsx)(au.e, {
              name: "bolt"
            }), SF("buildAFactory2Game:recipeMixer", {
              cryo: bh((0, pF.M)(WF, WF.cryoMade), "")
            })]
          })
        })
      })
    }

    function wu(FF) {
      let {
        def: WF
      } = FF;
      const {
        t: SF
      } = (0, TA.B)();
      return (0, Qu.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, Qu.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Qu.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, Qu.jsx)(au.e, {
              name: "bolt"
            }), SF("buildAFactory2Game:recipeCondenser", {
              power: bh((0, pF.M)(WF, WF.powerPerOp), ""),
              water: bh((0, pF.M)(WF, WF.fluidMade), "")
            })]
          })
        })
      })
    }

    function Xu(FF) {
      let {
        kind: WF,
        def: SF,
        input: CF,
        tier: AF,
        noSeeds: uF = !1
      } = FF;
      const hF = String(SF.opMs / 1e3);
      return BW(SF) ? (0, Qu.jsx)(zh, {
        seconds: hF
      }) : SF.field ? (0, Qu.jsx)(Iu, {
        fertilised: null !== CF
      }) : SF.table ? (0, Qu.jsx)(fu, {
        tier: AF,
        seconds: hF
      }) : SF.recycles ? (0, Qu.jsxs)(Qu.Fragment, {
        children: [(0, Qu.jsx)(yh, {
          tier: AF,
          seconds: hF,
          noSeeds: uF
        }), (0, Qu.jsx)(su, {
          tier: AF,
          seconds: hF
        })]
      }) : UW(SF) ? (0, Qu.jsx)(nu, {
        tier: AF,
        seconds: hF
      }) : void 0 !== SF.fluidMade ? (0, Qu.jsx)(wu, {
        def: SF
      }) : void 0 !== SF.cryoMade ? (0, Qu.jsx)(Ku, {
        def: SF
      }) : void 0 !== SF.powerMade ? (0, Qu.jsx)(Hu, {
        def: SF,
        seconds: hF
      }) : (0, Qu.jsx)(Uu, {
        kind: WF,
        input: CF,
        tier: AF,
        seconds: hF
      })
    }

    function Uu(FF) {
      let {
        kind: WF,
        input: SF,
        tier: CF,
        seconds: AF
      } = FF;
      const {
        t: uF
      } = (0, TA.B)(), hF = KA(), bW = Mu(function(FF) {
        const WF = new Map;
        for (const AF of FF) {
          var SF, CF;
          const FF = [AF.output, AF.outputAmount, AF.inputAmount, null === (SF = AF.bonus) || void 0 === SF ? void 0 : SF.item, null === (CF = AF.bonus) || void 0 === CF ? void 0 : CF.chance].join("|"),
            uF = WF.get(FF);
          uF ? uF.inputs.push(AF.input) : WF.set(FF, {
            inputs: [AF.input],
            inputAmount: AF.inputAmount,
            output: AF.output,
            outputAmount: AF.outputAmount,
            bonus: AF.bonus
          })
        }
        return [...WF.values()]
      }(ou(WF, CF).filter(SS)), (FF => Ou(FF.output))).filter((FF => Yu(Ou(FF.output), CF, Zu(FF.output))));
      return (0, Qu.jsx)(Vu, {
        title: uF("buildAFactory2Game:recipesEach", {
          seconds: AF
        }),
        count: bW.length,
        children: bW.map((FF => {
          const WF = null !== SF && FF.inputs.includes(SF),
            AF = FF.inputs.length > 3 ? [WF ? SF : FF.inputs[0]] : FF.inputs,
            bW = Ou(FF.output) > CF ? Ou(FF.output) : null,
            dF = null === bW && hF.has(FF.output);
          return (0, Qu.jsxs)("li", {
            className: QA()("Baf2Recipe", {
              InUse: WF,
              Locked: null !== bW,
              Far: rh(bW, CF)
            }),
            children: [dF && (0, Qu.jsx)(qh, {}), AF.map(((WF, SF) => (0, Qu.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [SF > 0 && (0, Qu.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, Qu.jsx)(th, {
                item: WF,
                amount: FF.inputAmount
              })]
            }, WF))), AF.length < FF.inputs.length && (0, Qu.jsx)(Tu, {
              label: uF("buildAFactory2Game:recipeMore", {
                count: String(FF.inputs.length - AF.length)
              }),
              names: FF.inputs.filter((FF => !AF.includes(FF))).map((FF => BA(uF, FF)))
            }), (0, Qu.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, Qu.jsx)(th, {
              item: FF.output,
              amount: FF.outputAmount
            }), (0, Qu.jsx)("span", {
              className: "Baf2RecipeName",
              children: BA(uF, FF.output)
            }), FF.bonus && (0, Qu.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [uF("buildAFactory2Game:recipeBonus", {
                percent: gh(FF.bonus.chance)
              }), (0, Qu.jsx)(th, {
                item: FF.bonus.item,
                amount: 1
              })]
            }), null !== bW && (0, Qu.jsx)(ah, {
              tier: bW
            })]
          }, `${FF.output}|${FF.inputs[0]}`)
        }))
      })
    }

    function Bu(FF) {
      let {
        taught: WF,
        tier: SF
      } = FF;
      const {
        t: CF
      } = (0, TA.B)(), AF = KA(), uF = Mu(Object.values(sW), (FF => FF.tier)).filter((FF => Yu(FF.tier, SF)));
      return (0, Qu.jsx)(Vu, {
        title: CF("buildAFactory2Game:benchCanMake"),
        count: uF.length,
        startOpen: !1,
        children: uF.map((FF => {
          const uF = FF.tier > SF,
            hF = !uF && AF.has(FF.output);
          return (0, Qu.jsxs)("li", {
            className: QA()("Baf2Recipe", {
              InUse: FF.output === WF,
              Locked: uF,
              Far: rh(uF ? FF.tier : null, SF)
            }),
            children: [hF && (0, Qu.jsx)(qh, {}), (0, Qu.jsx)(th, {
              item: FF.output,
              amount: FF.outputAmount
            }), (0, Qu.jsx)("span", {
              className: "Baf2RecipeName",
              children: BA(CF, FF.output)
            }), (0, Qu.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), FF.inputs.map((FF => (0, Qu.jsx)(th, {
              item: FF.item,
              amount: FF.amount
            }, FF.item))), uF && (0, Qu.jsx)(ah, {
              tier: FF.tier
            })]
          }, FF.output)
        }))
      })
    }
    var jh, vh, Ju, pu, lu;
    const Fh = LW.Generator,
      Wh = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      Sh = 1e3 * (null !== (jh = Fh.powerMade) && void 0 !== jh ? jh : 0) / Fh.opMs,
      Ch = Math.min(...(null !== (vh = Fh.fuels) && void 0 !== vh ? vh : []).map((FF => JW[FF]))) / 1e3,
      Ah = LW["Volt Engine"],
      uh = 1e3 * (null !== (Ju = Ah.powerMade) && void 0 !== Ju ? Ju : 0) / Ah.opMs,
      hh = JW[null !== (pu = null === (lu = Ah.fuels) || void 0 === lu ? void 0 : lu[0]) && void 0 !== pu ? pu : ""] / 1e3;

    function bb(FF) {
      let {
        item: WF,
        label: SF,
        value: CF,
        note: AF,
        dim: uF
      } = FF;
      return (0, Qu.jsxs)("li", {
        className: QA()("Baf2PowerRow", {
          Dim: uF
        }),
        children: [(0, Qu.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, Qu.jsx)(ku.b, {
            itemName: WF,
            amount: 0
          })
        }), (0, Qu.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, Qu.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: SF
          }), AF && (0, Qu.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: AF
          })]
        }), (0, Qu.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: CF
        })]
      })
    }

    function dh(FF, WF, SF, CF) {
      var AF;
      const uF = void 0 === CF ? LW[FF] : function(FF, WF) {
          if (null === WF) return FF;
          let SF = UF.get(WF);
          return SF || (SF = {
            ...FF,
            powerPerOp: XF(FF, WF),
            farmMob: WF
          }, UF.set(WF, SF)), SF
        }(LW[FF], CF),
        hF = WF && uF.couplable ? cS(uF, SF) : uF;
      return 1e3 * (null !== (AF = hF.powerPerOp) && void 0 !== AF ? AF : 0) / hF.opMs
    }

    function Ph(FF) {
      var WF, SF, CF, AF, uF, hF, bW, dF;
      let {
        message: PF
      } = FF;
      const {
        t: RF
      } = (0, TA.B)(), iW = (FF, WF) => RF("buildAFactory2Game:powerPerSecond", {
        rate: bh(FF, WF)
      }), [eF, EF] = PF.baf2PowerGenerators, QF = PF.baf2PowerGeneratorFuel, rW = PF.baf2PowerSunPanels, gW = null !== (WF = PF.baf2PowerSunShare) && void 0 !== WF ? WF : 1, tW = PF.baf2PowerVaults, TF = PF.baf2PowerUsers, [aW, kW] = null !== (SF = PF.baf2PowerEngines) && void 0 !== SF ? SF : [0, 0], qW = null !== (CF = PF.baf2PowerEngineCells) && void 0 !== CF ? CF : 0, VF = null !== (AF = PF.baf2PowerPads) && void 0 !== AF ? AF : 0, NF = null !== (uF = PF.baf2PowerCharge) && void 0 !== uF ? uF : 0, [DF, LF] = null !== (hF = PF.baf2PowerReactors) && void 0 !== hF ? hF : [0, 0], [mW, OF] = null !== (bW = PF.baf2PowerBatteries) && void 0 !== bW ? bW : [0, 0];
      let xW = RF("buildAFactory2Game:powerEngineCells", {
        amount: String(qW)
      });
      qW > 0 && kW > 0 && (xW = RF("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(qW),
        time: Ru(RF, qW * hh / kW)
      }));
      let ZF = RF("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(QF)
      });
      QF > 0 && EF > 0 && (ZF = RF("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(QF),
        time: Ru(RF, QF * Ch / EF)
      }));
      const oF = eF + aW + rW + DF;
      return (0, Qu.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, Qu.jsxs)("section", {
          children: [(0, Qu.jsxs)("h3", {
            children: [RF("buildAFactory2Game:powerMaking"), (0, Qu.jsx)("span", {
              children: iW(PF.baf2PowerMadePerS, "+")
            })]
          }), (0, Qu.jsxs)("ul", {
            children: [0 === oF && (0, Qu.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: RF("buildAFactory2Game:powerNoMakers")
            }), eF > 0 && (0, Qu.jsx)(bb, {
              item: "Generator",
              label: `${BA(RF,"Generator")} \xd7${eF}`,
              note: `${RF("buildAFactory2Game:powerRunning",{amount:String(EF)})} \xb7 ${ZF}`,
              value: iW(EF * Sh, "+"),
              dim: 0 === EF
            }), aW > 0 && (0, Qu.jsx)(bb, {
              item: "Volt Engine",
              label: `${BA(RF,"Volt Engine")} \xd7${aW}`,
              note: `${RF("buildAFactory2Game:powerRunning",{amount:String(kW)})} \xb7 ${xW}`,
              value: iW(kW * uh, "+"),
              dim: 0 === kW
            }), rW > 0 && (0, Qu.jsx)(bb, {
              item: "Solar Panel",
              label: `${BA(RF,"Solar Panel")} \xd7${rW}`,
              note: RF(gW < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: iW(4 * rW * gW, "+")
            }), DF > 0 && (0, Qu.jsx)(bb, {
              item: "Reactor Frame",
              label: `${RF("buildAFactory2Game:powerReactors")} \xd7${DF}`,
              note: RF("buildAFactory2Game:powerRunning", {
                amount: String(LF)
              }),
              value: iW(null !== (dF = PF.baf2PowerReactorPerS) && void 0 !== dF ? dF : 0, "+"),
              dim: 0 === LF
            })]
          })]
        }), (0, Qu.jsxs)("section", {
          children: [(0, Qu.jsxs)("h3", {
            children: [RF("buildAFactory2Game:powerStorage"), (0, Qu.jsx)("span", {
              children: JF(PF.baf2PowerCap)
            })]
          }), (tW > 0 || mW > 0) && (0, Qu.jsxs)("ul", {
            children: [tW > 0 && (0, Qu.jsx)(bb, {
              item: "Charge Vault",
              label: `${BA(RF,"Charge Vault")} \xd7${tW}`,
              value: `+${JF(8e3*tW)}`
            }), mW > 0 && (0, Qu.jsx)(bb, {
              item: "Battery Cell",
              label: `${RF("buildAFactory2Game:powerBatteries")} \xd7${mW}`,
              value: `+${JF(OF)}`
            })]
          })]
        }), (0, Qu.jsxs)("section", {
          children: [(0, Qu.jsxs)("h3", {
            children: [RF("buildAFactory2Game:powerUsing"), (0, Qu.jsx)("span", {
              children: iW(PF.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, Qu.jsxs)("ul", {
            children: [0 === TF.length && 0 === VF && 0 === NF && (0, Qu.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: RF("buildAFactory2Game:powerNoUsers")
            }), TF.map((FF => {
              let [WF, SF, CF, AF, uF = 1, hF] = FF, bW = SF ? RF(Wh[uF - 1], {
                name: BA(RF, WF)
              }) : BA(RF, WF);
              return void 0 !== hF && (bW = RF("buildAFactory2Game:powerFarmName", {
                name: bW,
                mob: RF(HF(hF))
              })), (0, Qu.jsx)(bb, {
                item: WF,
                label: `${bW} \xd7${CF}`,
                note: RF("buildAFactory2Game:powerRunning", {
                  amount: String(AF)
                }),
                value: AF > 0 ? iW(AF * dh(WF, SF, uF, hF), "\u2212") : RF("buildAFactory2Game:powerIdle"),
                dim: 0 === AF
              }, `${WF}|${SF}|${uF}|${hF}`)
            })), VF > 0 && (0, Qu.jsx)(bb, {
              item: "Charging Pad",
              label: `${BA(RF,"Charging Pad")} \xd7${VF}`,
              value: RF("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), NF > 0 && (0, Qu.jsx)(bb, {
              item: "Homestead Core",
              label: RF("buildAFactory2Game:powerCharge"),
              value: iW(NF, "\u2212")
            }), PF.baf2PowerStarved > 0 && (0, Qu.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, Qu.jsx)(au.e, {
                name: "triangle-exclamation"
              }), RF("buildAFactory2Game:powerStarved", {
                amount: String(PF.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var Rh = SF(3616),
      ib = SF(1266);
    class eh {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(FF) {
        this.message = FF;
        for (const WF of this.listeners) WF()
      }
      get() {
        return this.message
      }
      subscribe(FF) {
        return this.listeners.add(FF), () => {
          this.listeners.delete(FF)
        }
      }
    }
    class Eh extends eh {}

    function Qh(FF, WF) {
      const SF = () => {
          const SF = FF.get();
          if (!SF || !WF) return SF;
          const [CF, AF, uF] = SF.baf2PowerAt;
          return CF === WF[0] && AF === WF[1] && uF === WF[2] ? SF : null
        },
        [AF, uF] = (0, CF.useState)(SF);
      return (0, CF.useEffect)((() => (uF(SF()), FF.subscribe((() => {
        uF(SF())
      })))), [FF, ...null !== WF && void 0 !== WF ? WF : []]), AF
    }

    function rb(FF) {
      return {
        stored: FF.baf2PowerStored,
        cap: FF.baf2PowerCap,
        madePerS: FF.baf2PowerMadePerS,
        usedPerS: FF.baf2PowerUsedPerS
      }
    }

    function gb(FF) {
      let {
        stored: WF,
        cap: SF
      } = FF;
      return (0, Qu.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, Qu.jsx)("div", {
          style: {
            width: `${Math.min(100,100*WF/Math.max(1,SF))}%`
          }
        })
      })
    }

    function tb(FF) {
      let {
        figures: WF,
        labelled: SF = !1
      } = FF;
      const {
        t: CF
      } = (0, TA.B)(), AF = WF.madePerS - WF.usedPerS, {
        text: uF,
        draining: hF
      } = function(FF, WF) {
        let {
          stored: SF,
          cap: CF,
          madePerS: AF,
          usedPerS: uF
        } = WF;
        const hF = AF - uF;
        return SF >= CF ? {
          text: FF("buildAFactory2Game:powerFull"),
          draining: !1
        } : hF > .05 ? {
          text: FF("buildAFactory2Game:powerFullIn", {
            time: Ru(FF, (CF - SF) / hF)
          }),
          draining: !1
        } : hF < -.05 ? {
          text: FF("buildAFactory2Game:powerEmptyIn", {
            time: Ru(FF, SF / -hF)
          }),
          draining: !0
        } : {
          text: FF("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(CF, WF);
      return (0, Qu.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, Qu.jsx)(gb, {
          stored: WF.stored,
          cap: WF.cap
        }), (0, Qu.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, Qu.jsx)("span", {
            children: CF(SF ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: JF(WF.stored),
              cap: JF(WF.cap)
            })
          }), (0, Qu.jsxs)("span", {
            className: QA()("Baf2PowerNet", {
              Draining: hF
            }),
            children: [CF("buildAFactory2Game:powerPerSecond", {
              rate: bh(Math.abs(AF), AF < 0 ? "\u2212" : "+")
            }), " \xb7 ", uF]
          })]
        })]
      })
    }

    function Th(FF) {
      let {
        stored: WF,
        cap: SF,
        rates: CF
      } = FF;
      const {
        t: AF
      } = (0, TA.B)();
      return CF ? (0, Qu.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, Qu.jsx)(tb, {
          figures: {
            stored: WF,
            cap: SF,
            madePerS: CF[0],
            usedPerS: CF[1]
          },
          labelled: !0
        })
      }) : (0, Qu.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, Qu.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, Qu.jsx)(gb, {
            stored: WF,
            cap: SF
          }), (0, Qu.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, Qu.jsx)("span", {
              children: AF("buildAFactory2Game:powerStoredLabelled", {
                stored: JF(WF),
                cap: JF(SF)
              })
            })
          })]
        })
      })
    }

    function ab(FF) {
      let {
        store: WF,
        close: SF
      } = FF;
      const {
        t: CF
      } = (0, TA.B)(), AF = Qh(WF);
      return (0, Qu.jsx)(Rh.b, {
        close: SF,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Qu.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, Qu.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Qu.jsxs)("div", {
              children: [(0, Qu.jsx)("h2", {
                id: "baf2PowerTitle",
                children: CF("buildAFactory2Game:powerTitle")
              }), (0, Qu.jsx)("p", {
                children: CF("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, Qu.jsx)(ib.h, {
              onClick: SF
            })]
          }), AF && (0, Qu.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, Qu.jsx)(tb, {
              figures: rb(AF)
            }), (0, Qu.jsx)(Ph, {
              message: AF
            })]
          })]
        })
      })
    }

    function kb(FF) {
      var WF;
      let {
        kind: SF,
        def: AF,
        vY: uF,
        power: hF,
        stored: bW,
        cap: dF
      } = FF;
      const {
        t: PF
      } = (0, TA.B)(), RF = Qh(hF, uF), [iW, eF] = (0, CF.useState)(!1);
      return (0, Qu.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, Qu.jsx)(Xu, {
          kind: SF,
          def: AF,
          input: null,
          tier: null !== (WF = null === RF || void 0 === RF ? void 0 : RF.baf2PowerTier) && void 0 !== WF ? WF : 1
        }), (0, Qu.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: PF("buildAFactory2Game:powerTitle")
        }), RF && (0, Qu.jsx)(tb, {
          figures: rb(RF)
        }), !RF && (0, Qu.jsx)(Th, {
          stored: bW,
          cap: dF,
          rates: null
        }), RF && (0, Qu.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            eF(!iW)
          },
          "aria-expanded": iW,
          children: PF(iW ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), RF && iW && (0, Qu.jsx)(Ph, {
          message: RF
        })]
      })
    }
    const qb = 2500,
      Vh = 17500,
      Nh = `${qW} `;
    const Dh = ["plan", "throttle"];

    function Lh(FF) {
      if (FF.startsWith(`${aS} `)) return FF.slice(0, FF.lastIndexOf(" "));
      const WF = FF.split(" ");
      return WF[0] === CW && Dh.includes(WF[4]) ? WF.slice(0, 5).join(" ") : null
    }
    class mb {
      constructor(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = FF, this.now = WF, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.sentCount = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = WF()
      }
      enqueue(FF) {
        this.queue(FF, this.nextTicket());
        const WF = this.sentCount + this.pending.length;
        return this.flush(), WF
      }
      track(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const SF = this.nextTicket();
        if (!WF.urgent) return this.queue(FF, SF), this.flush(), SF;
        const {
          supersedes: CF
        } = WF;
        for (let uF = this.pending.length - 1; uF >= this.urgent; uF--) {
          const WF = this.pending[uF];
          (WF.command === FF || null !== CF && void 0 !== CF && CF(WF.command)) && (this.pending.splice(uF, 1), this.markLeft(WF.tickets))
        }
        const AF = this.pending.findIndex((WF => {
          let {
            command: SF
          } = WF;
          return SF === FF
        }));
        return -1 !== AF ? this.pending[AF].tickets.push(SF) : (this.pending.splice(this.urgent, 0, {
          command: FF,
          tickets: [SF]
        }), this.urgent += 1), this.flush(), SF
      }
      leftAt(FF) {
        const WF = this.leftTimes.get(FF);
        return void 0 !== WF ? WF : this.pending.some((WF => {
          let {
            tickets: SF
          } = WF;
          return SF.includes(FF)
        })) ? null : -1 / 0
      }
      holdReserve() {
        this.reserves += 1;
        let FF = !0;
        return () => {
          FF && (FF = !1, this.reserves -= 1, this.flush())
        }
      }
      isWaitingLast(FF) {
        var WF;
        return (null === (WF = this.pending.at(-1)) || void 0 === WF ? void 0 : WF.command) === FF
      }
      sent() {
        return this.sentCount
      }
      clear() {
        for (const {
            tickets: FF
          }
          of this.pending) this.markLeft(FF);
        this.pending.length = 0, this.urgent = 0, null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      nextTicket() {
        return this.lastTicket += 1, this.lastTicket
      }
      markLeft(FF) {
        const WF = this.now();
        for (const SF of FF) this.leftTimes.set(SF, WF);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(FF, WF) {
        const SF = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === SF || void 0 === SF ? void 0 : SF.command) === FF) return void(! function(FF) {
          return FF === VF || FF.startsWith(`${kW} `) || FF.startsWith(`${yW} `)
        }(FF) ? SF.tickets.push(WF) : (this.pending.pop(), this.markLeft([...SF.tickets, WF])));
        const CF = void 0 === SF ? null : function(FF, WF) {
          const SF = `${lF} `;
          if (!FF.startsWith(SF) || !WF.startsWith(SF)) return null;
          const CF = SW(FF.slice(SF.length)),
            AF = SW(WF.slice(SF.length));
          return CF && AF && CF.item === AF.item ? WW(AF.seq, function(FF, WF) {
            const SF = FF => "number" === typeof FF ? FF : "one" === FF ? 1 : 99;
            return "fill" === FF || "fill" === WF ? "fill" : SF(FF) + SF(WF)
          }(CF.mode, AF.mode), AF.item) : null
        }(SF.command, FF);
        if (null !== CF && void 0 !== SF) return SF.command = CF, void SF.tickets.push(WF);
        const AF = Lh(FF);
        if (null !== AF && void 0 !== SF && Lh(SF.command) === AF) return SF.command = FF, void SF.tickets.push(WF);
        if (null !== SF && void 0 !== SF && SF.command.startsWith(Nh) && FF.startsWith(Nh)) {
          const CF = FF.slice(Nh.length);
          if (SF.command.slice(Nh.length).split(",").includes(CF)) return void SF.tickets.push(WF);
          const AF = `${SF.command},${CF}`;
          if (AF.length <= 119) return SF.command = AF, void SF.tickets.push(WF)
        }
        this.pending.push({
          command: FF,
          tickets: [WF]
        })
      }
      flush() {
        const FF = this.now();
        for (this.tokens = Math.min(5, this.tokens + (FF - this.refilledAt) / qb), this.refilledAt = FF; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.sentCount += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: FF,
            tickets: WF
          } = this.pending.shift();
          this.markLeft(WF), this.send(FF)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * qb)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class Oh {
      constructor(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new mb(FF, WF)
      }
      send(FF) {
        return this.queue.enqueue(FF)
      }
      sent() {
        return this.queue.sent()
      }
      track(FF, WF) {
        return this.queue.track(FF, WF)
      }
      leftAt(FF) {
        return this.queue.leftAt(FF)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(FF) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = WF, this.send(FF), this.islandEdits.count
      }
      syncIslandEdits(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: SF
        } = this, CF = WF - SF.lastAtMs < Vh;
        SF.count = CF ? Math.max(SF.count, FF) : FF
      }
      clear() {
        this.queue.clear()
      }
    }
    const xb = (0, CF.createContext)(null);

    function Zh() {
      const FF = (0, CF.useContext)(xb);
      if (!FF) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return FF
    }

    function oh(FF, WF) {
      return null !== WF && void 0 !== WF ? WF : 1 === FF
    }

    function Yh(FF, WF) {
      return FF.every((FF => {
        var SF;
        let [CF, , AF] = FF;
        return !oh(AF, null === (SF = WF.get(CF)) || void 0 === SF ? void 0 : SF.kept)
      }))
    }

    function Mh(FF, WF, SF) {
      if (0 === FF.size) return FF;
      const CF = new Map(FF);
      for (const [AF, uF] of FF) {
        const FF = WF.find((FF => {
          let [WF] = FF;
          return WF === AF
        }));
        (!FF || uF.kept === (1 === FF[2]) || uF.atMs < SF) && CF.delete(AF)
      }
      return CF
    }

    function cb(FF) {
      var WF;
      let {
        vY: SF,
        input: AF,
        drops: uF,
        seconds: hF
      } = FF;
      const {
        t: bW
      } = (0, TA.B)(), dF = Zh(), [PF, RF] = (0, CF.useState)(new Map);
      (0, CF.useEffect)((() => {
        uF && RF((FF => Mh(FF, uF, Date.now() - Vh)))
      }), [uF]), (0, CF.useEffect)((() => {
        const FF = function(FF, WF) {
          let SF = null;
          for (const {
              atMs: CF
            }
            of FF.values()) SF = null === SF ? CF : Math.min(SF, CF);
          return null === SF ? null : SF + WF
        }(PF, Vh);
        if (null === FF || !uF) return;
        const WF = setTimeout((() => {
          RF((FF => Mh(FF, uF, Date.now() - Vh)))
        }), Math.max(0, FF - Date.now()) + 1);
        return () => {
          clearTimeout(WF)
        }
      }), [PF, uF]);
      const iW = KF(AF),
        eF = null !== iW && null !== uF && Yh(uF, PF),
        EF = function(FF, WF, SF) {
          return null === FF || null === WF || Yh(WF, SF) ? 0 : fF[zW[FF]]
        }(iW, uF, PF);
      return (0, Qu.jsxs)(Vu, {
        title: bW("buildAFactory2Game:farmDropsTitle", {
          seconds: hF
        }),
        count: null !== (WF = null === uF || void 0 === uF ? void 0 : uF.length) && void 0 !== WF ? WF : 0,
        children: [EF > 0 && (0, Qu.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: bW("buildAFactory2Game:farmDropsPower", {
            power: String(EF)
          })
        }), (null === iW || !uF) && (0, Qu.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: bW("buildAFactory2Game:farmDropsEmpty")
        }), eF && (0, Qu.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: bW("buildAFactory2Game:farmDropsAllVoided")
        }), null !== iW && (null === uF || void 0 === uF ? void 0 : uF.map((FF => {
          var WF;
          let [CF, AF, uF] = FF;
          const hF = AF < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            iW = oh(uF, null === (WF = PF.get(CF)) || void 0 === WF ? void 0 : WF.kept);
          return (0, Qu.jsxs)("li", {
            className: QA()("Baf2Recipe Baf2FarmDrop", {
              Voided: !iW
            }),
            children: [(0, Qu.jsx)(th, {
              item: CF,
              amount: 1
            }), (0, Qu.jsx)("span", {
              className: "Baf2RecipeName",
              children: BA(bW, CF)
            }), (0, Qu.jsx)("span", {
              className: "Baf2FarmRate",
              children: bW(hF, {
                amount: String(AF)
              })
            }), (0, Qu.jsx)("button", {
              type: "button",
              className: QA()("Baf2FarmToggle SmallTextBold", {
                Kept: iW
              }),
              "aria-pressed": iW,
              onClick: () => {
                RF(new Map(PF).set(CF, {
                  kept: !iW,
                  atMs: Date.now()
                })), dF.send(function(FF, WF, SF, CF) {
                  return `${yW} ${FF} ${WF} ${SF} ${CF}`
                }(SF[0], SF[1], SF[2], CF))
              },
              children: bW(iW ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, CF)
        })))]
      })
    }
    var Gh;
    const zb = String(null !== (Gh = LW.Synthesizer.waterPerOp) && void 0 !== Gh ? Gh : 0);

    function Ih(FF) {
      let {
        vY: WF,
        taught: SF
      } = FF;
      const {
        t: AF
      } = (0, TA.B)(), uF = Zh(), [hF, bW] = (0, CF.useState)(null);
      (0, CF.useEffect)((() => {
        null !== hF && SF === hF && bW(null)
      }), [hF, SF]);
      const dF = null !== hF && void 0 !== hF ? hF : SF;
      let PF = AF("buildAFactory2Game:synthPick");
      return null !== dF && (PF = AF("buildAFactory2Game:synthGrows", {
        name: BA(AF, dF),
        input: BA(AF, gS),
        water: zb
      })), (0, Qu.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, Qu.jsx)("div", {
          className: QA()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === dF
          }),
          children: PF
        }), (0, Qu.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: tS.map(((FF, SF) => {
            const CF = BA(AF, FF),
              hF = FF === dF;
            return (0, Qu.jsx)("li", {
              children: (0, Qu.jsx)("button", {
                type: "button",
                className: QA()("Baf2SynthTile", {
                  Selected: hF
                }),
                title: CF,
                "aria-label": CF,
                "aria-pressed": hF,
                onClick: () => {
                  hF || (bW(FF), uF.send(`${aS} ${WF[0]} ${WF[1]} ${WF[2]} ${SF}`))
                },
                children: (0, Qu.jsx)(ku.b, {
                  itemName: FF,
                  amount: 0
                })
              })
            }, FF)
          }))
        })]
      })
    }
    const fh = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function yb(FF) {
      let {
        kind: WF,
        tier: SF,
        coupled: CF,
        level: AF,
        slot: uF
      } = FF;
      const {
        t: hF
      } = (0, TA.B)(), dF = vW(OW);
      if (!CF && null !== SF && SF < dF) return (0, Qu.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, Qu.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, Qu.jsx)(au.e, {
            name: "lock"
          })
        }), (0, Qu.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: hF("buildAFactory2Game:upgradeLocked")
        }), (0, Qu.jsx)("span", {
          className: "Baf2TierTag",
          children: hF("buildAFactory2Game:tierTag", {
            tier: String(dF)
          })
        })]
      });
      const PF = function(FF, WF) {
          if (bW() && "Crusher" !== FF && null !== WF) {
            if (sh(ZW, WF)) return {
              item: ZW,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (sh(xS, WF)) return {
              item: xS,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: OW,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(WF, SF),
        RF = hF(CF ? fh[AF - 1] : PF.emptyKey),
        iW = null !== SF ? function(FF, WF, SF, CF) {
          if (!bW() || !SF || "Crusher" === FF || WF < 10) return null;
          const AF = vW(ZW);
          if (CF < 3 && AF > 1 && (2 === CF || WF >= AF)) return {
            tier: AF,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const uF = vW(xS);
          if (1 === CF && uF > 1) return {
            tier: uF,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(WF, SF, CF, AF) : null;
      return (0, Qu.jsxs)("div", {
        className: QA()("Baf2UpgradeSocket", {
          Fitted: CF
        }),
        children: [(0, Qu.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [CF && uF, !CF && (0, Qu.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, Qu.jsx)(ku.b, {
              itemName: PF.item,
              amount: 0
            })
          })]
        }), (0, Qu.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, Qu.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: hF("buildAFactory2Game:upgradeTitle")
          }), (0, Qu.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: RF
          }), CF && AF >= 2 && "Crusher" === WF && (0, Qu.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: hF("buildAFactory2Game:couplerCrusherHint")
          }), iW && null !== SF && SF < iW.tier && (0, Qu.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, Qu.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, Qu.jsx)(au.e, {
                name: "lock"
              })
            }), hF(iW.lockedKey), (0, Qu.jsx)("span", {
              className: "Baf2TierTag",
              children: hF("buildAFactory2Game:tierTag", {
                tier: String(iW.tier)
              })
            })]
          }), iW && null !== SF && SF >= iW.tier && (0, Qu.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: hF(iW.nextKey)
          })]
        })]
      })
    }

    function sh(FF, WF) {
      const SF = vW(FF);
      return SF > 1 && WF >= SF
    }
    var nh = SF(35498);
    const Hh = (0, pF.M)(LW.Condenser, LW.Condenser.fluidMade),
      Kh = .05;
    class wh extends eh {}

    function Xh(FF) {
      return bh(FF, "")
    }

    function Uh(FF, WF, SF) {
      return FF(WF ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: SF
      })
    }

    function Bh(FF, WF, SF, CF) {
      return SF <= Kh && CF <= Kh ? null : CF <= Kh || SF <= Kh ? Uh(FF, WF, CF <= Kh ? bh(SF, "+") : bh(CF, "\u2212")) : FF(WF ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: Xh(SF),
        used: Xh(CF)
      })
    }

    function jb(FF, WF) {
      return Math.min(100, 100 * FF / Math.max(1, WF))
    }

    function vb(FF) {
      let {
        stored: WF,
        cap: SF,
        netPerS: CF,
        rates: AF,
        cryo: uF
      } = FF;
      const {
        t: hF
      } = (0, TA.B)(), bW = function(FF, WF, SF, CF) {
        return SF <= 0 ? FF("buildAFactory2Game:waterNoStorage") : WF >= SF ? FF("buildAFactory2Game:powerFull") : CF > Kh ? FF("buildAFactory2Game:powerFullIn", {
          time: Ru(FF, (SF - WF) / CF)
        }) : CF < -.05 ? WF <= 0 ? FF("buildAFactory2Game:waterEmpty") : FF("buildAFactory2Game:powerEmptyIn", {
          time: Ru(FF, WF / -CF)
        }) : FF("buildAFactory2Game:powerSteady")
      }(hF, WF, SF, CF), dF = SF > 0 && WF < SF && Math.abs(CF) <= Kh, PF = hF(uF ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), RF = null !== AF ? `${AF} \xb7 ${bW}` : dF ? PF : `${PF} \xb7 ${bW}`;
      return (0, Qu.jsxs)(Qu.Fragment, {
        children: [(0, Qu.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, Qu.jsx)("div", {
            style: {
              width: `${jb(WF,SF)}%`
            }
          })
        }), (0, Qu.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, Qu.jsx)("span", {
            children: SF > 0 && hF("buildAFactory2Game:powerStored", {
              stored: (0, pF.Y)(WF),
              cap: (0, pF.Y)(SF)
            })
          }), (0, Qu.jsx)("span", {
            className: QA()("Baf2WaterNet", {
              Draining: CF < -.05
            }),
            children: RF
          })]
        })]
      })
    }

    function Jh(FF) {
      let {
        water: WF,
        at: SF,
        side: CF = null
      } = FF;
      const {
        t: AF
      } = (0, TA.B)(), uF = Zh(), [hF, bW, dF] = WF;
      return (0, Qu.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, Qu.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, Qu.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: AF(null === CF ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${CF}`)
          }), (0, Qu.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              uF.send(`${pF.G} ${SF[0]} ${SF[1]} ${SF[2]}${"cryoOut"===CF?" cryo":""}`)
            },
            children: AF("buildAFactory2Game:waterDetails")
          })]
        }), (0, Qu.jsx)(vb, {
          stored: hF,
          cap: bW,
          netPerS: dF,
          rates: Uh(AF, "cryoOut" === CF, bh(Math.abs(dF), dF < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === CF
        })]
      })
    }

    function ph(FF, WF) {
      var SF, CF, AF;
      const uF = !0 === WF.baf2WaterCryo,
        hF = null !== (SF = null === (CF = WF.baf2WaterMakers.find((FF => FF[0] === (uF ? pF.e : "Condenser")))) || void 0 === CF ? void 0 : CF[1]) && void 0 !== SF ? SF : 0,
        bW = [],
        dF = (WF, SF, CF) => {
          WF > 0 && bW.push(FF(1 === WF ? SF : CF, {
            count: String(WF)
          }))
        };
      return uF ? dF(hF, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : dF(hF, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), dF(null !== (AF = WF.baf2WaterPipes) && void 0 !== AF ? AF : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), dF(WF.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), bW.join(" \xb7 ")
    }

    function lh(FF, WF) {
      if (!0 === WF.baf2WaterCryo) return function(FF, WF) {
        const SF = LW[pF.e];
        switch (WF.baf2WaterThis) {
          case "pipe":
            return {
              text: FF("buildAFactory2Game:cryoThisPipe"), bad: !1
            };
          case "condenserFull":
            return {
              text: FF("buildAFactory2Game:cryoThisMixerFull"), bad: !1
            };
          case "condenserNoPower":
            return {
              text: FF("buildAFactory2Game:cryoThisMixerNoPower"), bad: !0
            };
          case "condenserNoOutlet":
            return {
              text: FF("buildAFactory2Game:cryoThisMixerNoOutlet"), bad: !0
            };
          case "mixerNoInput":
            return {
              text: FF("buildAFactory2Game:cryoThisMixerNoInput"), bad: !0
            };
          case "mixerBadInput":
            return {
              text: FF("buildAFactory2Game:cryoThisMixerBadInput"), bad: !0
            };
          case "mixerNoWater":
            return {
              text: FF("buildAFactory2Game:cryoThisMixerNoWater"), bad: !0
            };
          case "condenser": {
            var CF;
            const [AF, uF] = null !== (CF = WF.baf2WaterThisRates) && void 0 !== CF ? CF : [(0, pF.M)(SF, SF.cryoMade), (0, pF.M)(SF, SF.powerPerOp)];
            return !0 === WF.baf2WaterDriven ? {
              text: FF("buildAFactory2Game:cryoThisMixerDriven", {
                rate: Xh(AF)
              }),
              bad: !1
            } : {
              text: FF("buildAFactory2Game:cryoThisMixer", {
                rate: Xh(AF),
                power: Xh(uF)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: FF("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(FF, WF);
      const SF = !0 === WF.baf2WaterDriven,
        CF = LW.Condenser;
      switch (WF.baf2WaterThis) {
        case "pipe":
          return {
            text: FF("buildAFactory2Game:waterThisPipe"), bad: !1
          };
        case "condenserFull":
          return {
            text: FF("buildAFactory2Game:waterThisCondenserFull"), bad: !1
          };
        case "condenserNoPower":
          return {
            text: FF("buildAFactory2Game:waterThisCondenserNoPower"), bad: !0
          };
        case "condenserNoOutlet":
          return {
            text: FF("buildAFactory2Game:waterThisCondenserNoOutlet"), bad: !0
          };
        case "tank":
          return {
            text: FF("buildAFactory2Game:waterThisTank", {
              tank: (0, pF.Y)(pF.t),
              cap: (0, pF.Y)(WF.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var AF;
          const [uF, hF] = null !== (AF = WF.baf2WaterThisRates) && void 0 !== AF ? AF : [Hh, (0, pF.M)(CF, CF.powerPerOp)];
          return SF ? {
            text: FF("buildAFactory2Game:waterThisCondenserDriven", {
              rate: Xh(uF)
            }),
            bad: !1
          } : {
            text: FF("buildAFactory2Game:waterThisCondenser", {
              rate: Xh(uF),
              power: Xh(hF)
            }),
            bad: !1
          }
        }
        default:
          return {
            text: FF("buildAFactory2Game:waterThisUser"), bad: !1
          }
      }
    }

    function Fb(FF, WF) {
      const SF = WF.baf2WaterMakers.some((FF => !0 === FF[5]));
      if (!0 === WF.baf2WaterCryo) {
        const CF = WF.baf2WaterUsedPerS - WF.baf2WaterMadePerS,
          AF = SF || CF <= Kh ? 0 : (0, pF.J)(CF);
        return 0 === AF ? null : AF > 1 ? FF("buildAFactory2Game:cryoNextMixers", {
          mixers: String(AF)
        }) : FF("buildAFactory2Game:cryoNextOne")
      }
      const CF = SF ? null : function(FF, WF) {
        const SF = WF - FF;
        return SF <= Kh ? null : Math.ceil(SF / Hh)
      }(WF.baf2WaterMadePerS, WF.baf2WaterUsedPerS);
      return null === CF ? null : CF > 1 ? FF("buildAFactory2Game:waterNextCondensers", {
        condensers: String(CF)
      }) : FF("buildAFactory2Game:waterNextOne")
    }

    function Wb(FF) {
      let {
        item: WF,
        label: SF,
        note: CF,
        value: AF,
        dim: uF,
        bad: hF
      } = FF;
      return (0, Qu.jsxs)("li", {
        className: QA()("Baf2WaterRow", {
          Dim: uF,
          Bad: hF
        }),
        children: [(0, Qu.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, Qu.jsx)(ku.b, {
            itemName: WF,
            amount: 0
          })
        }), (0, Qu.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, Qu.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: SF
          }), CF && (0, Qu.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: CF
          })]
        }), (0, Qu.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: AF
        })]
      })
    }

    function Sb(FF) {
      return nh.o[FF] ? FF : "Reactor Port"
    }

    function Cb(FF) {
      let {
        message: WF
      } = FF;
      const {
        t: SF
      } = (0, TA.B)(), CF = !0 === WF.baf2WaterCryo, AF = (FF, WF) => Uh(SF, CF, bh(FF, WF));
      return (0, Qu.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, Qu.jsxs)("section", {
          children: [(0, Qu.jsxs)("h3", {
            children: [SF("buildAFactory2Game:waterMakes"), (0, Qu.jsx)("span", {
              children: AF(WF.baf2WaterMadePerS, "+")
            })]
          }), (0, Qu.jsxs)("ul", {
            children: [0 === WF.baf2WaterMakers.length && (0, Qu.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: SF(CF ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), WF.baf2WaterMakers.map((FF => {
              let [WF, CF, uF, hF, bW, dF] = FF;
              const PF = SF("buildAFactory2Game:powerRunning", {
                amount: String(uF)
              });
              let RF = bW > 0 ? SF("buildAFactory2Game:waterMakerPower", {
                running: PF,
                power: Xh(bW)
              }) : PF;
              return dF && (RF = SF(0 === uF && hF <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, Qu.jsx)(Wb, {
                item: WF,
                label: `${BA(SF,WF)} \xd7${CF}`,
                note: RF,
                value: uF > 0 || dF && hF > 0 ? AF(hF, "+") : SF("buildAFactory2Game:powerIdle"),
                dim: 0 === uF && !dF,
                bad: dF
              }, WF)
            }))]
          })]
        }), (0, Qu.jsxs)("section", {
          children: [(0, Qu.jsxs)("h3", {
            children: [SF("buildAFactory2Game:waterUses"), (0, Qu.jsx)("span", {
              children: AF(WF.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, Qu.jsxs)("ul", {
            children: [0 === WF.baf2WaterUsers.length && (0, Qu.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: SF(CF ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), WF.baf2WaterUsers.map((FF => {
              let [WF, CF, uF, hF] = FF;
              const bW = nh.o[WF] ? BA(SF, WF) : WF;
              return (0, Qu.jsx)(Wb, {
                item: Sb(WF),
                label: CF > 1 ? `${bW} \xd7${CF}` : bW,
                note: hF ? SF("buildAFactory2Game:waterPortFirst") : void 0,
                value: uF > 0 ? AF(uF, "\u2212") : SF("buildAFactory2Game:powerIdle"),
                dim: 0 === uF
              }, WF)
            }))]
          })]
        })]
      })
    }

    function Ab(FF) {
      var WF, SF, AF, uF, hF;
      let {
        store: bW,
        close: dF
      } = FF;
      const {
        t: PF
      } = (0, TA.B)(), RF = function(FF) {
        const [WF, SF] = (0, CF.useState)((() => FF.get()));
        return (0, CF.useEffect)((() => (SF(FF.get()), FF.subscribe((() => {
          SF(FF.get())
        })))), [FF]), WF
      }(bW), iW = null !== (WF = null === RF || void 0 === RF ? void 0 : RF.baf2WaterStored) && void 0 !== WF ? WF : 0, eF = null !== (SF = null === RF || void 0 === RF ? void 0 : RF.baf2WaterCap) && void 0 !== SF ? SF : 0, EF = null !== (AF = null === RF || void 0 === RF ? void 0 : RF.baf2WaterMadePerS) && void 0 !== AF ? AF : 0, QF = null !== (uF = null === RF || void 0 === RF ? void 0 : RF.baf2WaterUsedPerS) && void 0 !== uF ? uF : 0, rW = null !== (hF = null === RF || void 0 === RF ? void 0 : RF.baf2WaterNetPerS) && void 0 !== hF ? hF : EF - QF, gW = RF && lh(PF, RF), tW = RF && Fb(PF, RF), TF = !0 === (null === RF || void 0 === RF ? void 0 : RF.baf2WaterCryo);
      return (0, Qu.jsx)(Rh.b, {
        close: dF,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Qu.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, Qu.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Qu.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== RF && eF <= 0 ? (0, Qu.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, Qu.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, Qu.jsx)(ku.b, {
                  itemName: TF ? hS.e : pF.n,
                  amount: 0
                })
              }), (0, Qu.jsxs)("div", {
                children: [(0, Qu.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: PF(TF ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), RF && (0, Qu.jsx)("p", {
                  children: ph(PF, RF)
                })]
              })]
            }), (0, Qu.jsx)(ib.h, {
              onClick: dF
            })]
          }), RF && gW && (0, Qu.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, Qu.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, Qu.jsx)(vb, {
                stored: iW,
                cap: eF,
                netPerS: rW,
                cryo: TF,
                rates: Bh(PF, TF, EF, QF)
              })
            }), (0, Qu.jsx)("div", {
              className: QA()("Baf2WaterThis", {
                Bad: gW.bad
              }),
              children: gW.text
            }), RF.baf2WaterDriven && (0, Qu.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, Qu.jsx)(au.e, {
                name: "bolt"
              }), PF(TF ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), tW && (0, Qu.jsx)("p", {
              className: "Baf2WaterNext",
              children: tW
            }), (0, Qu.jsx)(Cb, {
              message: RF
            })]
          })]
        })
      })
    }
    class ub {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(FF, WF) {
        const SF = this.get(FF);
        SF && null === WF.opLeftMs && null === WF.fuelLeftMs && WF.status === SF.status ? WF = {
          ...WF,
          opLeftMs: SF.opLeftMs,
          fuelLeftMs: SF.fuelLeftMs,
          burning: SF.burning
        } : this.updates++, this.pos = FF, this.view = WF;
        for (const CF of this.listeners) CF()
      }
      get(FF) {
        return null !== this.pos && this.pos[0] === FF[0] && this.pos[1] === FF[1] && this.pos[2] === FF[2] ? this.view : null
      }
      forget(FF) {
        null !== this.get(FF) && (this.pos = null, this.view = null)
      }
      get updateCount() {
        return this.updates
      }
      subscribe(FF) {
        return this.listeners.add(FF), () => {
          this.listeners.delete(FF)
        }
      }
    }

    function hb(FF, WF, SF, CF) {
      return "noFuel" === WF && CF && !vS(LW[FF]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === WF && !0 === (null === SF || void 0 === SF ? void 0 : SF.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === WF && !0 === (null === SF || void 0 === SF ? void 0 : SF.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === WF && !0 === (null === SF || void 0 === SF ? void 0 : SF.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === WF && !0 === (null === SF || void 0 === SF ? void 0 : SF.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : bd(WF, SF) ? "buildAFactory2Game:machineStatus_noInputShort" : function(FF, WF) {
        const SF = LW[FF];
        if ("noFuel" === WF && void 0 !== SF.fuels) return vS(SF) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (SF.mobFarm && ("noInput" === WF || "badInput" === WF)) return `buildAFactory2Game:machineStatus_${WF}MobFarm`;
        if ("outputFull" === WF && (void 0 !== SF.table || SF.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === WF && fW(SF)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== SF.cryoMade && ("noInput" === WF || "noOutlet" === WF || "fluidFull" === WF)) return `buildAFactory2Game:machineStatus_${WF}Mixer`;
        return `buildAFactory2Game:machineStatus_${WF}`
      }(FF, WF)
    }

    function bd(FF, WF) {
      return "noInput" === FF && null !== WF && void 0 !== WF && WF.input && WF.inputShort ? {
        input: WF.input,
        short: WF.inputShort
      } : null
    }

    function db(FF) {
      return ru(FF) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== FF.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function Pb(FF) {
      const WF = (0, cW.xe)(FF);
      return `Baf2Pane Baf2Pane${WF.charAt(0).toUpperCase()}${WF.slice(1)}`
    }

    function Rb(FF, WF) {
      const [SF, AF] = (0, CF.useState)((() => FF.get(WF)));
      return (0, CF.useEffect)((() => {
        AF(FF.get(WF));
        const SF = FF.subscribe((() => {
          AF(FF.get(WF))
        }));
        return () => {
          SF(), FF.forget(WF)
        }
      }), [FF, ...WF]), SF
    }

    function eb(FF, WF, SF, CF) {
      const AF = LW[FF],
        uF = WF && AF.couplable ? cS(AF, SF) : AF,
        hF = null !== CF && UW(uF) ? function(FF, WF) {
          var SF;
          return null !== (SF = null !== WF && UW(FF) ? lW[WF] : void 0) && void 0 !== SF ? SF : FF.opMs
        }(uF, FS(CF)) : uF.opMs;
      return hF === uF.opMs ? uF : {
        ...uF,
        opMs: hF
      }
    }

    function Eb(FF) {
      let {
        running: WF,
        opMs: SF,
        opLeftMs: CF,
        updateCount: AF
      } = FF;
      return (0, Qu.jsx)("div", {
        className: QA()("Baf2MachineProgress", {
          Running: WF
        }),
        children: (0, Qu.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: SF / 1e3 + "s",
            animationDelay: null === CF ? void 0 : (CF - SF) / 1e3 + "s"
          }
        }, AF)
      })
    }

    function Qb(FF) {
      let {
        running: WF,
        leftMs: SF,
        periodMs: CF,
        updateCount: AF
      } = FF;
      const {
        t: uF
      } = (0, TA.B)(), hF = Math.min(Math.max(null !== SF && void 0 !== SF ? SF : 0, 0), CF), bW = WF && hF > 0, dF = uF("buildAFactory2Game:machineBarFuel");
      return (0, Qu.jsx)("div", {
        className: QA()("Baf2FuelBurn", {
          Draining: bW
        }),
        role: "img",
        title: dF,
        "aria-label": dF,
        children: (0, Qu.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: bW ? {
            animationDuration: CF / 1e3 + "s",
            animationDelay: (hF - CF) / 1e3 + "s"
          } : {
            transform: `scaleY(${hF/CF})`
          }
        }, AF)
      })
    }

    function rd(FF, WF, SF) {
      let [CF, AF] = SF;
      const uF = 1 !== CF ? tu(WF) : null;
      return {
        amount: CF,
        have: AF,
        item: FF(uF || UA(WF))
      }
    }

    function gd(FF) {
      return UW(FF) ? "buildAFactory2Game:machineBarMining" : BW(FF) ? "buildAFactory2Game:machineBarCutting" : void 0 !== FF.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function td(FF) {
      var WF, SF, CF, AF, uF, hF, bW, dF, PF, RF, iW, eF, EF, QF, rW, gW, tW, TF, aW;
      let {
        kind: kW,
        vY: qW,
        store: VF,
        power: NF,
        renderSlot: DF
      } = FF;
      const {
        t: LF
      } = (0, TA.B)(), mW = Rb(VF, qW), OF = LW[kW], xW = null !== (WF = null === mW || void 0 === mW ? void 0 : mW.coupled) && void 0 !== WF && WF, ZF = null !== (SF = null === mW || void 0 === mW ? void 0 : mW.couplerLevel) && void 0 !== SF ? SF : 1, oF = eb(kW, xW, ZF, null !== (CF = null === mW || void 0 === mW || null === (AF = mW.dug) || void 0 === AF ? void 0 : AF.item) && void 0 !== CF ? CF : null), YF = null !== (uF = null === mW || void 0 === mW ? void 0 : mW.status) && void 0 !== uF ? uF : null, MF = null !== (hF = null === mW || void 0 === mW ? void 0 : mW.power) && void 0 !== hF ? hF : null, cW = null !== (bW = null === mW || void 0 === mW ? void 0 : mW.opLeftMs) && void 0 !== bW ? bW : null, GF = null !== (dF = null === mW || void 0 === mW ? void 0 : mW.dug) && void 0 !== dF ? dF : null, zW = null !== GF && UW(OF) ? lW[null !== (PF = FS(GF.item)) && void 0 !== PF ? PF : ""] : void 0, IF = void 0 === zW ? null : 6e4 / zW, fF = null !== (RF = null === mW || void 0 === mW ? void 0 : mW.powerCap) && void 0 !== RF ? RF : 4e3, yW = null !== (iW = null === mW || void 0 === mW ? void 0 : mW.tier) && void 0 !== iW ? iW : null, sF = void 0 !== oF.powerMade, nF = null !== OF.fuelSlot ? DF(OF.fuelSlot) : null, HF = MW(OF), KF = !xW && !0 === (null === mW || void 0 === mW ? void 0 : mW.fuelFed), XF = !xW && !0 === (null === mW || void 0 === mW ? void 0 : mW.fuelFeeds), UF = null !== OF.fuelSlot && !xW, BF = null !== (eF = null === mW || void 0 === mW ? void 0 : mW.fuelLeftMs) && void 0 !== eF ? eF : null, jW = function(FF, WF, SF) {
        var CF;
        const AF = null === WF ? void 0 : JW[WF];
        return Math.max(null !== (CF = null !== AF && void 0 !== AF ? AF : SF) && void 0 !== CF ? CF : 0, FF.opMs)
      }(oF, null !== (EF = null === mW || void 0 === mW ? void 0 : mW.burning) && void 0 !== EF ? EF : null, BF), vW = null !== (QF = null === mW || void 0 === mW ? void 0 : mW.fuelKeep) && void 0 !== QF ? QF : null, JF = null === YF ? null : hb(kW, YF, mW, KF), pF = null === YF ? null : bd(YF, mW);
      return (0, Qu.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, Qu.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, Qu.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: LF(UA(kW))
          }), GF && (0, Qu.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [LF("Tree Cutter" === kW ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, Qu.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, Qu.jsx)(ku.b, {
                itemName: GF.item,
                amount: 0
              })
            }), (0, Qu.jsx)(qu.d, {
              text: GF.name
            })]
          }), null !== IF && (0, Qu.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: LF("buildAFactory2Game:machineDigsFixed", {
              perMin: String(IF)
            })
          }), (null === mW || void 0 === mW ? void 0 : mW.field) && (0, Qu.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, Qu.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, Qu.jsx)(ku.b, {
                itemName: "Wheat",
                amount: 0
              })
            }), LF("buildAFactory2Game:machineField", {
              planted: String(mW.field[0]),
              ripe: String(mW.field[1])
            })]
          }), (0, Qu.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, Qu.jsxs)("div", {
              className: QA()("Baf2MachineColumn", {
                Baf2Burns: UF
              }),
              children: [null !== oF.inputSlot && (0, Qu.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, Qu.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: LF(db(oF))
                }), DF(oF.inputSlot)]
              }), null !== OF.fuelSlot && !xW && (0, Qu.jsxs)("div", {
                className: QA()("Baf2MachineSlot", {
                  Baf2FuelFed: KF
                }),
                children: [(0, Qu.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [KF && (0, Qu.jsx)(au.e, {
                    name: "fire"
                  }), LF("buildAFactory2Game:machineFuel")]
                }), (0, Qu.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, Qu.jsx)(Qb, {
                    running: "running" === YF,
                    leftMs: BF,
                    periodMs: jW,
                    updateCount: VF.updateCount
                  }), nF]
                })]
              }), null !== OF.fuelSlot && xW && (0, Qu.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, Qu.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: LF("buildAFactory2Game:machineFuel")
                }), (0, Qu.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: LF("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": LF("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, Qu.jsx)(au.e, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, Qu.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, Qu.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: LF(gd(oF))
              }), (0, Qu.jsx)(Eb, {
                running: "running" === YF,
                opMs: oF.opMs,
                opLeftMs: cW,
                updateCount: VF.updateCount
              })]
            }), oF.outputSlots.length > 0 && (0, Qu.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, Qu.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: LF("buildAFactory2Game:machineOutput")
              }), (0, Qu.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: oF.outputSlots.map((FF => (0, Qu.jsx)("div", {
                  children: DF(FF)
                }, FF)))
              })]
            }), null !== MF && sF && (0, Qu.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, Qu.jsx)("div", {
                style: {
                  height: 100 * MF / fF + "%"
                }
              })
            })]
          }), UF && null !== vW && (0, Qu.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, Qu.jsx)(au.e, {
              name: "arrows-rotate"
            }), LF(BW(oF) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(vW)
            })]
          }), (KF || XF) && (0, Qu.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, Qu.jsx)(au.e, {
              name: "fire"
            }), LF(KF ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), OF.couplable && (0, Qu.jsx)(yb, {
            kind: kW,
            tier: yW,
            coupled: xW,
            level: ZF,
            slot: HF === OF.fuelSlot ? nF : null !== HF ? DF(HF) : null
          }), null !== MF && !sF && !0 === (null === mW || void 0 === mW ? void 0 : mW.reactorPowered) && (0, Qu.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: LF("buildAFactory2Game:machineReactorPowered")
          }), null !== MF && !sF && !0 !== (null === mW || void 0 === mW ? void 0 : mW.reactorPowered) && (0, Qu.jsx)(Th, {
            stored: MF,
            cap: fF,
            rates: null !== (rW = null === mW || void 0 === mW ? void 0 : mW.powerRates) && void 0 !== rW ? rW : null
          }), (null === mW || void 0 === mW ? void 0 : mW.water) && (0, Qu.jsx)(Jh, {
            water: mW.water,
            at: qW,
            side: mW.cryo ? "waterIn" : null
          }), (null === mW || void 0 === mW ? void 0 : mW.cryo) && (0, Qu.jsx)(Jh, {
            water: mW.cryo,
            at: qW,
            side: "cryoOut"
          }), null !== mW && void 0 !== mW && mW.inertCoupler ? (0, Qu.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: LF("buildAFactory2Game:machineStatus_couplerOff", {
              item: BA(LF, mW.inertCoupler)
            })
          }) : null !== JF && (0, Qu.jsx)("div", {
            className: QA()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== YF
            }),
            children: LF(JF, pF ? rd(LF, pF.input, pF.short) : void 0)
          })]
        }), (0, Qu.jsxs)("div", {
          className: QA()("Baf2MachineSide", {
            Baf2SynthSide: fW(OF)
          }),
          children: [fW(OF) && (0, Qu.jsx)(Ih, {
            vY: qW,
            taught: null !== (gW = null === mW || void 0 === mW ? void 0 : mW.taught) && void 0 !== gW ? gW : null
          }, qW.join(",")), sF && (0, Qu.jsx)(kb, {
            kind: kW,
            def: oF,
            vY: qW,
            power: NF,
            stored: null !== MF && void 0 !== MF ? MF : 0,
            cap: fF
          }), wF(OF) && (0, Qu.jsx)(cb, {
            vY: qW,
            input: null !== (tW = null === mW || void 0 === mW ? void 0 : mW.input) && void 0 !== tW ? tW : null,
            drops: null !== (TF = null === mW || void 0 === mW ? void 0 : mW.farm) && void 0 !== TF ? TF : null,
            seconds: String(oF.opMs / 1e3)
          }), !sF && !wF(OF) && !fW(OF) && (0, Qu.jsx)(Xu, {
            kind: kW,
            def: oF,
            input: null !== (aW = null === mW || void 0 === mW ? void 0 : mW.input) && void 0 !== aW ? aW : null,
            tier: null !== yW && void 0 !== yW ? yW : 1,
            noSeeds: !0 === (null === mW || void 0 === mW ? void 0 : mW.noSeeds)
          })]
        })]
      })
    }

    function Tb(FF, WF, SF, CF) {
      var AF;
      const uF = LW[FF],
        hF = [uF.inputSlot, uF.fuelSlot, ...null !== (AF = uF.inputSlots) && void 0 !== AF ? AF : []].filter((FF => null !== FF));
      return {
        render: AF => {
          let {
            vY: uF,
            renderSlot: hF
          } = AF;
          return (0, Qu.jsx)(xb.Provider, {
            value: CF,
            children: (0, Qu.jsx)(td, {
              kind: FF,
              vY: uF,
              store: WF,
              power: SF,
              renderSlot: hF
            })
          })
        },
        quickMoveRange: hF.length > 0 ? [Math.min(...hF), Math.max(...hF) + 1] : [0, 0],
        className: Pb(FF)
      }
    }
    const ad = "Assembler";

    function kd(FF) {
      var WF, SF, CF, AF, uF, hF, bW, dF, PF;
      let {
        vY: RF,
        store: iW,
        renderSlot: eF
      } = FF;
      const {
        t: EF
      } = (0, TA.B)(), QF = Rb(iW, RF), rW = null !== (WF = null === QF || void 0 === QF ? void 0 : QF.tier) && void 0 !== WF ? WF : 1, gW = null !== (SF = null === QF || void 0 === QF ? void 0 : QF.taught) && void 0 !== SF ? SF : null, tW = HW(ad, {
        coupled: !1,
        taught: gW
      }), TF = null !== (CF = tW.bench) && void 0 !== CF ? CF : null, aW = null !== (AF = null === QF || void 0 === QF ? void 0 : QF.status) && void 0 !== AF ? AF : null, kW = null !== (uF = null === QF || void 0 === QF ? void 0 : QF.power) && void 0 !== uF ? uF : null, qW = null !== (hF = null === QF || void 0 === QF ? void 0 : QF.powerCap) && void 0 !== hF ? hF : 4e3;
      return (0, Qu.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, Qu.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, Qu.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: EF(UA(ad))
          }), TF && (0, Qu.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [EF("buildAFactory2Game:benchMakes"), (0, Qu.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, Qu.jsx)(ku.b, {
                itemName: TF.output,
                amount: 0
              })
            }), (null === QF || void 0 === QF ? void 0 : QF.taughtName) && (0, Qu.jsx)(qu.d, {
              text: QF.taughtName
            }), TF.outputAmount > 1 && (0, Qu.jsxs)("span", {
              children: ["\xd7", TF.outputAmount]
            })]
          }), !TF && (0, Qu.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: EF("buildAFactory2Game:benchTeachHint")
          }), (0, Qu.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, Qu.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (bW = tW.inputSlots) && void 0 !== bW ? bW : []).map(((FF, WF) => {
                const SF = null === TF || void 0 === TF ? void 0 : TF.inputs[WF];
                return (0, Qu.jsxs)("div", {
                  className: QA()("Baf2BenchInput", {
                    Spare: !SF
                  }),
                  children: [(0, Qu.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [eF(FF), SF && (0, Qu.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, Qu.jsx)(ku.b, {
                        itemName: SF.item,
                        amount: 0
                      })
                    })]
                  }), (0, Qu.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: SF ? `\xd7${SF.amount}` : "\xa0"
                  })]
                }, FF)
              }))
            }), (0, Qu.jsx)(Eb, {
              running: "running" === aW,
              opMs: tW.opMs,
              opLeftMs: null !== (dF = null === QF || void 0 === QF ? void 0 : QF.opLeftMs) && void 0 !== dF ? dF : null,
              updateCount: iW.updateCount
            }), (0, Qu.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, Qu.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: EF("buildAFactory2Game:machineOutput")
              }), (0, Qu.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: tW.outputSlots.map((FF => (0, Qu.jsx)("div", {
                  children: eF(FF)
                }, FF)))
              })]
            })]
          }), null !== kW && (0, Qu.jsx)(Th, {
            stored: kW,
            cap: qW,
            rates: null !== (PF = null === QF || void 0 === QF ? void 0 : QF.powerRates) && void 0 !== PF ? PF : null
          }), null !== aW && (0, Qu.jsx)("div", {
            className: QA()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== aW
            }),
            children: EF(hb(ad, aW, QF, !1))
          }), TF && TF.inputs.length > 1 && (0, Qu.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: EF("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, Qu.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, Qu.jsx)(Bu, {
            taught: gW,
            tier: rW
          }), TF && (0, Qu.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: EF("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function qd(FF) {
      var WF;
      const SF = null !== (WF = LW[ad].inputSlots) && void 0 !== WF ? WF : [];
      return {
        render: WF => {
          let {
            vY: SF,
            renderSlot: CF
          } = WF;
          return (0, Qu.jsx)(kd, {
            vY: SF,
            store: FF,
            renderSlot: CF
          })
        },
        quickMoveRange: [Math.min(...SF), Math.max(...SF) + 1],
        className: Pb(ad)
      }
    }
    var Vb = SF(89),
      Nb = SF(996),
      Db = SF(3434);
    const Lb = 600,
      md = .5,
      Ob = 4,
      xd = 1200,
      Zb = 140,
      ob = 100,
      Yb = 32,
      Mb = 16,
      cd = 100.5,
      Gb = 90,
      zd = 1.5,
      Ib = 50;

    function fb(FF) {
      switch (VS(FF)) {
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
    const yd = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function sb(FF) {
      const WF = Math.ceil(60 * FF / ob);
      return {
        fuel: Math.max(Yb, WF),
        waste: Math.max(Mb, WF)
      }
    }

    function nb(FF, WF, SF) {
      const [CF, AF, uF] = [FF - 2, WF - 2, SF - 2];
      return 2 * (CF * AF + AF * uF + uF * CF) * Zb
    }

    function Hb(FF, WF, SF) {
      return Math.max(0, FF - 2) * Math.max(0, WF - 2) * Math.max(0, SF - 2)
    }

    function Kb(FF, WF) {
      const [SF, CF, AF] = FF, uF = SF * CF * AF, hF = new Float32Array(uF);
      let bW = 0,
        dF = 0,
        PF = 0,
        RF = 0,
        iW = 0;
      const eF = (FF, uF, hF) => FF < 0 || FF >= SF || uF < 0 || uF >= CF || hF < 0 || hF >= AF ? 0 : WF[(uF * AF + hF) * SF + FF];
      for (let gW = 0; gW < CF; gW++)
        for (let FF = 0; FF < AF; FF++)
          for (let CF = 0; CF < SF; CF++) {
            const uF = (gW * AF + FF) * SF + CF,
              EF = WF[uF];
            if (1 === EF) {
              bW++;
              let WF = 0;
              for (const [SF, AF, uF] of yd) {
                const hF = eF(CF + SF, gW + AF, FF + uF);
                1 !== hF && 2 !== hF || WF++
              }
              hF[uF] = Lb * (1 + md * Math.min(WF, Ob)), RF += hF[uF]
            } else if (2 === EF) dF++;
            else if (3 === EF) {
              PF++;
              yd.some((WF => {
                let [SF, AF, uF] = WF;
                return 1 === eF(CF + SF, gW + AF, FF + uF)
              })) && (iW += xd)
            }
          }
      const EF = nb(SF + 2, CF + 2, AF + 2),
        QF = Math.min(RF, iW, EF),
        rW = bW > 0 ? RF * ob / bW : 0;
      return {
        rods: bW,
        graphite: dF,
        channels: PF,
        fuelHeat: RF,
        cooling: iW,
        size: EF,
        max: QF,
        vol: uF,
        powerPerUnit: rW,
        pelletsPerMin: rW > 0 ? QF / rW * 60 : 0,
        waterPerS: QF * pF.s,
        rodHeat: hF
      }
    }
    const wb = 0,
      Xb = 1,
      Ub = 6,
      Bb = 7,
      jd = 8;

    function vd(FF, WF) {
      const [SF, CF, AF] = FF, uF = new Uint8Array(SF * CF * AF), hF = (FF, uF, hF) => FF < 0 || FF >= SF || uF < 0 || uF >= CF || hF < 0 || hF >= AF ? 0 : WF[(uF * AF + hF) * SF + FF];
      for (let bW = 0; bW < CF; bW++)
        for (let FF = 0; FF < AF; FF++)
          for (let CF = 0; CF < SF; CF++) {
            const dF = (bW * AF + FF) * SF + CF,
              PF = WF[dF];
            if (1 === PF) {
              let WF = 0;
              for (const [SF, AF, uF] of yd) {
                const dF = hF(CF + SF, bW + AF, FF + uF);
                WF += 1 === dF || 2 === dF ? 1 : 0
              }
              uF[dF] = Xb + Math.min(WF, Ob)
            } else if (3 === PF) {
              const WF = yd.some((WF => {
                let [SF, AF, uF] = WF;
                return 1 === hF(CF + SF, bW + AF, FF + uF)
              }));
              uF[dF] = WF ? Ub : Bb
            } else 2 === PF && (uF[dF] = jd)
          }
      return uF
    }

    function Jb(FF) {
      return FF.fuelHeat <= FF.cooling && FF.fuelHeat <= FF.size ? "fuel" : FF.cooling <= FF.size ? "cooling" : "size"
    }
    const pb = Gb;

    function lb(FF, WF, SF) {
      return Math.round(FF * WF * SF * 25e3 * (1 + .25 * (Math.min(FF, WF, SF) - 2)))
    }

    function Fd(FF) {
      return Math.max(0, Math.min(pF.g, FF))
    }

    function Wd(FF, WF, SF) {
      const CF = WF * Fd(SF);
      return FF <= 0 ? 0 : CF > 0 ? Math.min(200, 100 * FF / CF) : 200
    }

    function Sd(FF, WF) {
      const SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? zd : 1;
      return Math.min(FF.fuelHeat * SF, FF.cooling * Fd(WF), FF.size * SF)
    }

    function Cd(FF) {
      return 2 + FF / 10
    }
    const Ad = "buildAFactory2Game:";

    function ud(FF) {
      var WF;
      return null !== (WF = FF.baf2RxMood) && void 0 !== WF ? WF : function(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const SF = [
          ["calm", 50],
          ["warm", pb],
          ["hot", cd]
        ];
        for (const [CF, AF] of SF)
          if (FF < AF + (CF === WF ? 3 : 0)) return CF;
        return "alarm"
      }(FF.baf2RxHeat)
    }
    const hd = 120;

    function bP(FF) {
      const WF = FF.baf2RxState;
      if ("running" === WF && FF.baf2RxHeat > cd) return {
        label: `${Ad}rxState_tooHot`,
        tone: "bad",
        fix: `${Ad}rxFix_tooHot`
      };
      switch (WF) {
        case "running":
          return {
            label: `${Ad}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${Ad}rxState_idle`, tone: "off", fix: `${Ad}rxFix_idle`
          };
        case "scram":
          return {
            label: `${Ad}rxState_scram`, tone: "off", fix: FF.baf2RxHeat < Ib ? `${Ad}rxFix_scramCool` : `${Ad}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${Ad}rxState_${WF}`, tone: "off", fix: `${Ad}rxFix_${WF}`
          };
        case "melted":
          return {
            label: `${Ad}rxState_melted`, tone: "bad", fix: `${Ad}rxFix_melted`
          };
        default:
          return {
            label: `${Ad}rxState_${WF}`, tone: "warn", fix: `${Ad}rxFix_${WF}`
          }
      }
    }

    function dd(FF) {
      const [WF, SF, CF] = FF.baf2RxStats;
      return {
        fuelHeat: WF,
        cooling: SF * (FF.baf2RxCryo ? Math.max(1, Fd(FF.baf2RxWater / 100)) : 1),
        size: CF
      }
    }

    function Pd(FF) {
      var WF;
      const SF = "idle" === FF.baf2RxState || "running" === FF.baf2RxState && FF.baf2RxHeat <= cd || "scram" === FF.baf2RxState && FF.baf2RxHeat < Ib;
      if (0 === (FF.baf2RxFlags & EW) || !FF.baf2RxFormed || !SF) return null;
      const {
        fuelHeat: CF,
        cooling: AF,
        size: uF
      } = dd(FF), hF = Math.min(CF, AF, uF), bW = Jb({
        fuelHeat: CF,
        cooling: AF,
        size: uF
      }), dF = "cooling" === bW && !0 === FF.baf2RxCryoOpen && !FF.baf2RxCryo, PF = null !== (WF = FF.baf2RxCells) && void 0 !== WF ? WF : "", RF = ("fuel" === bW || "cooling" === bW && !0 === FF.baf2RxCryo) && PF.length > 0 && !PF.includes(String(0)), iW = dF ? "Cryo" : "scram" === FF.baf2RxState ? "Off" : "";
      return hF < 12e3 ? {
        key: `${Ad}rxGrow_${RF?"full":bW}${iW}`,
        amount: hF
      } : null
    }

    function Rd(FF, WF) {
      return FF[0] === WF[0] && FF[1] === WF[1] && FF[2] === WF[2]
    }

    function iP(FF) {
      return [...FF].sort(((FF, WF) => Number(WF[2] < WF[1]) - Number(FF[2] < FF[1])))
    }

    function ed(FF, WF) {
      return WF.some((WF => {
        let [SF, CF] = WF;
        return !(CF <= 0) && ["edge", "cap", "wall", "inside"].some((WF => SF === JS(FF, WF)))
      }))
    }

    function Ed(FF, WF, SF) {
      const CF = FF.baf2RxFuel - FF.baf2RxPu > 0 ? SF : 0;
      return {
        full: FF.baf2RxWaste > WF - 3,
        fullInS: CF > 0 ? Math.max(0, WF - FF.baf2RxWaste) / CF : null
      }
    }
    const Qd = {
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

    function rP(FF) {
      return gP[FF]
    }
    const gP = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function tP(FF) {
      let [WF, SF, CF] = FF;
      return Math.ceil(nb(WF, SF, CF) * pF.s)
    }

    function Td(FF, WF) {
      return "battery" === FF ? WF[0] * WF[1] * WF[2] : function(FF) {
        let [WF, SF, CF] = FF;
        return WF * SF * CF - Math.max(0, WF - 2) * Math.max(0, SF - 2) * Math.max(0, CF - 2)
      }(WF) - 1
    }

    function aP(FF) {
      const WF = Math.max(0, FF);
      if (WF < 10) return String(Math.round(10 * WF) / 10);
      if (WF < 1e4) return Math.round(WF).toLocaleString("en-US");
      if (WF < 1e6) return `${WF<1e5?(Math.floor(WF/100)/10).toFixed(1):Math.floor(WF/1e3)}k`;
      const SF = WF / 1e6;
      return `${SF<10?(Math.floor(100*SF)/100).toFixed(2):SF<100?(Math.floor(10*SF)/10).toFixed(1):Math.floor(SF)}M`
    }

    function kP(FF) {
      return FF <= 0 ? "0" : FF >= 10 ? String(Math.round(FF)) : FF.toFixed(FF >= 1 ? 1 : 2)
    }

    function qP(FF) {
      const WF = KS(FF, 0),
        SF = KS(FF, yC(FF) - 1);
      return {
        lo: [Math.min(WF[0], SF[0]), Math.min(WF[1], SF[1]), Math.min(WF[2], SF[2])],
        hi: [Math.max(WF[0], SF[0]) + 1, Math.max(WF[1], SF[1]) + 1, Math.max(WF[2], SF[2]) + 1]
      }
    }

    function Vd(FF, WF, SF) {
      const CF = [WF[0] - FF[0], WF[1] - FF[1], WF[2] - FF[2]],
        AF = [(FF[0] + WF[0]) / 2, (FF[1] + WF[1]) / 2, (FF[2] + WF[2]) / 2],
        uF = [];
      for (let hF = 0; hF < 3; hF++) {
        const bW = (hF + 1) % 3,
          dF = (hF + 2) % 3;
        for (const PF of [FF[bW], WF[bW]])
          for (const RF of [FF[dF], WF[dF]]) {
            const FF = [0, 0, 0],
              WF = [SF, SF, SF];
            FF[hF] = AF[hF], WF[hF] = CF[hF] + SF, FF[bW] = PF, FF[dF] = RF, uF.push([FF, WF])
          }
      }
      return uF
    }
    const Nd = "buildAFactory2Game:",
      Dd = [`${Nd}colNorth`, `${Nd}colEast`, `${Nd}colSouth`, `${Nd}colWest`];

    function Ld(FF, WF) {
      const [SF, CF, AF] = FF.baf2ColAt;
      return `baf2col ${SF} ${CF} ${AF} ${WF}`
    }

    function mP(FF) {
      return function(FF) {
        if (!Number.isFinite(FF)) return "";
        const WF = Math.max(1, Math.round(FF));
        if (WF < 60) return `${WF}s`;
        const SF = WF % 60;
        return 0 === SF ? WF / 60 + "m" : `${Math.floor(WF/60)}m ${SF}s`
      }(function(FF) {
        const WF = pS.FOCUS_BY_LASERS[Math.max(0, Math.min(4, FF))];
        return WF > 0 ? pS.NOVA_FOCUS / WF : 1 / 0
      }(FF))
    }

    function Od(FF) {
      const WF = Math.abs(Math.round(FF));
      return WF < 1e3 ? Math.round(FF).toLocaleString("en-US") : WF < 1e6 ? `${WF<1e5?(FF/1e3).toFixed(1).replace(/\.0$/,""):Math.round(FF/1e3)}k` : `${(FF/1e6).toFixed(WF<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function xP(FF, WF, SF) {
      if (AC(WF) >= 0) {
        const WF = function(FF, WF) {
          return FF.find((FF => {
            let {
              focus: SF
            } = FF;
            return SF[0] === WF[0] && SF[2] === WF[2] && (WF[1] === SF[1] || WF[1] === SF[1] - 1)
          }))
        }(FF, SF);
        if (!WF) return null;
        const AF = function(FF) {
          let WF = 0,
            SF = 0;
          for (let CF = 0; CF < 4; CF++) WF += FF.laser[CF] ? 1 : 0, SF += FF.live[CF] ? 1 : 0;
          return {
            lasers: WF,
            live: SF,
            focusPerS: pS.FOCUS_BY_LASERS[SF],
            drawPerS: pS.LASER_DRAW * SF
          }
        }({
          laser: WF.lasers,
          live: WF.live
        });
        if (0 === AF.lasers || "noLasers" === WF.state) return {
          key: `${Nd}lookColNoLasers`
        };
        if (0 === AF.live) return {
          key: `${Nd}lookColOff_blocked`
        };
        if (!(WF.on && AF.live > 0) && ("running" !== (CF = WF.state) && "slowed" !== CF)) return {
          key: `${Nd}lookColOff_${WF.state}`
        };
        if (AF.live < AF.lasers) return {
          key: `${Nd}lookColLasersSome`,
          params: {
            lasers: String(AF.lasers),
            live: String(AF.live)
          }
        };
        const uF = WF.open.filter(Boolean).length;
        return uF < 4 ? {
          key: `${Nd}lookColLasersSpots`,
          params: {
            live: String(AF.live),
            spots: String(uF),
            time: mP(AF.live)
          }
        } : {
          key: `${Nd}lookColLasers`,
          params: {
            live: String(AF.live),
            time: mP(AF.live)
          }
        }
      }
      var CF;
      if (!uC(WF)) return null;
      const AF = function(FF, WF) {
        for (const SF of FF) {
          const FF = PC(SF.focus, [WF[0], WF[1], WF[2]]);
          if (FF && FF.FF === pS.LASER_D && SF.lasers[FF.dir]) return {
            entry: SF,
            dir: FF.dir
          }
        }
        return null
      }(FF, SF);
      if (!AF) return {
        key: `${Nd}lookLaserNoCollider`
      };
      const {
        entry: uF,
        dir: hF
      } = AF;
      return uF.open[hF] ? uF.live[hF] ? {
        key: uF.on ? `${Nd}lookLaserFiring` : `${Nd}lookLaserReady`
      } : {
        key: `${Nd}lookLaserBlocked`
      } : {
        key: `${Nd}lookLaserClosed`
      }
    }

    function Zd(FF, WF) {
      const SF = [];
      for (let CF = 1; CF < pS.LASER_D; CF++) FF & 1 << WF * (pS.LASER_D - 1) + CF - 1 && SF.push(CF);
      return SF
    }
    const od = {
      firing: `${Nd}colSlotFiring`,
      ready: `${Nd}colSlotReady`,
      blocked: `${Nd}colSlotBlocked`,
      empty: `${Nd}colSlotEmpty`,
      closed: `${Nd}colSlotClosed`
    };

    function Yd(FF, WF, SF, CF) {
      let AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const uF = JC(FF),
        hF = JC(WF),
        bW = JC(SF),
        dF = bW.filter(Boolean).length,
        PF = uF.filter(Boolean).length,
        RF = [0, 1, 2, 3].map((FF => hF[FF] ? uF[FF] ? bW[FF] ? CF ? "firing" : "ready" : "blocked" : (FF => Zd(AF, FF).length > 0)(FF) ? "blocked" : "empty" : "closed")),
        iW = RF.indexOf("blocked"),
        eF = iW < 0 && PF > 0 ? RF.indexOf("empty") : -1;
      return RF.map(((FF, WF) => {
        const SF = WF === iW ? {
          key: `${Nd}colSlotClear`
        } : WF === eF ? {
          key: `${Nd}colSlotAdd`,
          params: {
            time: mP(Math.min(4, dF + 1))
          }
        } : null;
        return {
          dir: WF,
          tone: FF,
          title: {
            key: "blocked" !== FF || uF[WF] ? od[FF] : `${Nd}colSlotGap`,
            keys: {
              dir: Dd[WF]
            }
          },
          hint: SF
        }
      }))
    }

    function Md(FF) {
      var WF;
      return "noPower" === FF.baf2ColState && FF.baf2ColRxState ? bP({
        baf2RxState: FF.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (WF = FF.baf2ColRxHeat) && void 0 !== WF ? WF : 0
      }) : null
    }

    function cP(FF) {
      const WF = JC(FF.baf2ColSpots).filter(Boolean).length,
        SF = JC(FF.baf2ColLive);
      let CF = 0,
        AF = 0;
      return JC(FF.baf2ColLasers).forEach(((FF, WF) => {
        FF && (CF++, AF += SF[WF] ? 0 : 1)
      })), AF > 0 ? {
        key: `${Nd}colSubSome`,
        params: {
          blocked: String(AF),
          lasers: String(CF)
        }
      } : WF < 4 ? {
        key: `${Nd}colSubSpots`,
        params: {
          lasers: String(CF),
          spots: String(WF)
        }
      } : {
        key: `${Nd}colSub`,
        params: {
          lasers: String(CF)
        }
      }
    }

    function Gd(FF) {
      const WF = Md(FF);
      if ("idle" === FF.baf2ColRxState && WF) return {
        key: `${Nd}colState_noPowerIdle`
      };
      if (WF) return {
        key: `${Nd}colState_noPowerReactor`,
        keys: {
          state: WF.label
        }
      };
      if ("noInput" !== FF.baf2ColState) return {
        key: `${Nd}colState_${FF.baf2ColState}`
      };
      const SF = String(Math.max(0, pS.NOVA_SA - FF.baf2ColSa)),
        CF = String(Math.max(0, pS.NOVA_GD - FF.baf2ColGd));
      return "0" !== SF && "0" !== CF ? {
        key: `${Nd}colState_noInput`,
        params: {
          sa: SF,
          gd: CF
        }
      } : "0" !== SF ? {
        key: `${Nd}colState_noStarAlloy`,
        params: {
          sa: SF
        }
      } : "0" !== CF ? {
        key: `${Nd}colState_noGlowDust`,
        params: {
          gd: CF
        }
      } : {
        key: `${Nd}colState_running`
      }
    }

    function zP(FF) {
      return FF.baf2ColP < 0 ? `${Nd}colNext` : function(FF) {
        const WF = FF.baf2ColState;
        return FF.baf2ColP >= 0 && ("blocked" === WF || "noLasers" === WF || "noPower" === WF)
      }(FF) ? `${Nd}colStalled` : null === Id(FF) ? `${Nd}colMaking` : `${Nd}colNovaIn`
    }

    function Id(FF) {
      if (FF.baf2ColP < 0 || FF.baf2ColWant <= 0) return null;
      const WF = FF.baf2ColFocusPerS * Math.min(1, FF.baf2ColDraw / FF.baf2ColWant);
      return WF > 0 ? Math.max(0, pS.NOVA_FOCUS - FF.baf2ColP) / WF : null
    }

    function fd(FF, WF) {
      const SF = [];
      for (let CF = 1; CF <= 3; CF++) {
        const AF = [FF[0], FF[1] - CF, FF[2]];
        if (!WF(AF)) return SF;
        SF.push(AF)
      }
      return []
    }

    function yP(FF, WF) {
      const SF = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let CF = 0; CF < 4; CF++) {
        const AF = CF,
          uF = dC(FF.focus, AF, pS.LASER_D);
        if (FF.lasers[CF] || !FF.open[CF] || !WF(uF)) continue;
        const hF = [];
        for (let SF = 1; SF < pS.LASER_D; SF++) {
          const CF = dC(FF.focus, AF, SF);
          WF(CF) || hF.push(CF)
        }
        SF.supports.push(...fd(uF, WF)), 0 === hF.length ? SF.free.push(uF) : (SF.blocked.push(uF), SF.gaps.push(...hF))
      }
      return SF
    }
    const sd = pS.LASER_D - .25,
      nd = 4,
      Hd = 2,
      Kd = 16;
    const wd = {
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
        blendMode: Db.f.Standard,
        soft: !0
      },
      Xd = {
        green: wd,
        pink: {
          ...wd,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function Ud(FF, WF) {
      const SF = {
        ...WF.params
      };
      for (const [AF, uF] of Object.entries(null !== (CF = WF.keys) && void 0 !== CF ? CF : {})) {
        var CF;
        SF[AF] = FF(uF)
      }
      return SF
    }
    const Bd = "buildAFactory2Game:",
      jP = 2 * pS.LASER_D + 1,
      vP = pS.LASER_D;

    function Jd(FF) {
      return FF(`${Bd}colFocusTip`, {
        need: Od(pS.NOVA_FOCUS)
      })
    }

    function pd(FF, WF) {
      return FF(WF.key, Ud(FF, WF))
    }

    function ld(FF) {
      const WF = FF.getStatus();
      return {
        status: WF,
        entry: WF ? FF.entryAtRoot(WF.baf2ColAt) : void 0
      }
    }

    function FP(FF, WF) {
      return {
        left: 100 * (vP + FF) / jP + "%",
        top: 100 * (vP + WF) / jP + "%"
      }
    }

    function WP(FF) {
      let {
        status: WF,
        entry: SF
      } = FF;
      const CF = JC(WF.baf2ColLasers),
        AF = JC(WF.baf2ColSpots),
        uF = JC(WF.baf2ColLive),
        hF = !0 === (null === SF || void 0 === SF ? void 0 : SF.on),
        bW = pS.LASER_D,
        dF = [];
      for (let EF = 0; EF < 4; EF++) {
        const [FF, , WF] = bA[EF];
        if (uF[EF]) {
          const SF = 100 * (bW - 1) / jP,
            CF = FF + WF > 0 ? 100 * (vP + 1) / jP : 100 * (vP - (bW - 1)) / jP,
            AF = 100 * (vP + .35) / jP,
            uF = 30 / jP,
            PF = 0 !== FF ? {
              left: `${CF}%`,
              width: `${SF}%`,
              top: `${AF}%`,
              height: `${uF}%`
            } : {
              top: `${CF}%`,
              height: `${SF}%`,
              left: `${AF}%`,
              width: `${uF}%`
            };
          dF.push((0, Qu.jsx)("i", {
            className: QA()("Baf2ColDiagramBeam", {
              Off: !hF
            }),
            style: PF
          }, `beam${EF}`))
        }
        const SF = CF[EF] ? "Baf2ColDiagramLaser" : AF[EF] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        dF.push((0, Qu.jsx)("i", {
          className: SF,
          style: FP(FF * bW, WF * bW)
        }, `spot${EF}`))
      }
      for (let EF = 0; EF < 4; EF++) {
        if (CF[EF] || !AF[EF]) continue;
        const [FF, , SF] = bA[EF];
        for (const CF of Zd(null !== (PF = WF.baf2ColGaps) && void 0 !== PF ? PF : 0, EF)) {
          var PF;
          dF.push((0, Qu.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: FP(FF * CF, SF * CF)
          }, `gap${EF},${CF}`))
        }
      }
      for (const [EF, , QF] of null !== (RF = null === SF || void 0 === SF ? void 0 : SF.blockers) && void 0 !== RF ? RF : []) {
        var RF, iW, eF;
        const FF = EF - (null !== (iW = null === SF || void 0 === SF ? void 0 : SF.focus[0]) && void 0 !== iW ? iW : 0),
          WF = QF - (null !== (eF = null === SF || void 0 === SF ? void 0 : SF.focus[2]) && void 0 !== eF ? eF : 0);
        dF.push((0, Qu.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: FP(FF, WF)
        }, `block${FF},${WF}`))
      }
      return (0, Qu.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [dF, (0, Qu.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function SP(FF) {
      let {
        status: WF
      } = FF;
      const {
        t: SF
      } = (0, TA.B)(), CF = JC(WF.baf2ColLive).filter(Boolean).length;
      return (0, Qu.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, Qu.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: Jd(SF),
          children: SF(`${Bd}colLadder`)
        }), (0, Qu.jsx)("ul", {
          children: [1, 2, 3, 4].map((FF => (0, Qu.jsx)("li", {
            className: QA()({
              On: FF === CF
            }),
            children: SF(`${Bd}colLadderChip`, {
              lasers: String(FF),
              time: mP(FF)
            })
          }, FF)))
        })]
      })
    }

    function CP(FF) {
      let {
        item: WF,
        yS: SF,
        need: CF,
        cap: AF
      } = FF;
      const {
        t: uF
      } = (0, TA.B)(), hF = Math.min(SF, CF);
      return (0, Qu.jsxs)("li", {
        className: QA()("Baf2ColTile", {
          Short: SF < CF
        }),
        children: [(0, Qu.jsx)(AP, {
          item: WF
        }), (0, Qu.jsx)("b", {
          className: "Baf2ColTileValue",
          children: uF(`${Bd}colOutOf`, {
            amount: String(hF),
            cap: String(CF)
          })
        }), (0, Qu.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, Qu.jsx)("i", {
            style: {
              width: 100 * hF / CF + "%"
            }
          })
        }), SF > CF && (0, Qu.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: uF(`${Bd}colIntakeHeld`, {
            amount: String(SF),
            cap: String(AF)
          })
        })]
      })
    }

    function AP(FF) {
      let {
        item: WF
      } = FF;
      const {
        t: SF
      } = (0, TA.B)();
      return (0, Qu.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, Qu.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, Qu.jsx)(ku.b, {
            itemName: WF,
            amount: 0
          })
        }), (0, Qu.jsx)("span", {
          className: "Baf2ColTileName",
          children: BA(SF, WF)
        })]
      })
    }

    function uP(FF) {
      switch (FF.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function hP(FF) {
      var WF, SF, AF;
      let {
        store: uF,
        close: hF
      } = FF;
      const {
        t: bW
      } = (0, TA.B)(), dF = Zh(), {
        status: PF,
        entry: RF
      } = function(FF) {
        const [WF, SF] = (0, CF.useState)((() => ld(FF)));
        return (0, CF.useEffect)((() => (SF(ld(FF)), FF.subscribe((() => {
          SF(ld(FF))
        })))), [FF]), WF
      }(uF), [iW, eF] = (0, CF.useState)(null), EF = null === PF || void 0 === PF ? void 0 : PF.baf2ColHold;
      (0, CF.useEffect)((() => {
        eF(null)
      }), [EF]);
      const QF = (0, CF.useRef)({
          p: -1,
          n: 0
        }),
        rW = null !== (WF = null === PF || void 0 === PF ? void 0 : PF.baf2ColP) && void 0 !== WF ? WF : -1;
      rW < QF.current.p && QF.current.n++, QF.current.p = rW;
      const gW = (0, CF.useRef)(null),
        [tW] = (0, CF.useState)((() => {
          return (FF = uF.heldAtOpen()) === WC || FF === SC ? {
            key: `${Nd}colBeltItIn`,
            item: FF
          } : null;
          var FF
        }));
      if (!PF) return null;
      const TF = PF.baf2ColMember,
        aW = PF.baf2ColP >= 0,
        kW = function(FF, WF) {
          if (FF.baf2ColP >= 0 && FF.baf2ColDraw > 0) {
            const WF = FF.baf2ColWant > 0 ? Math.min(1, FF.baf2ColDraw / FF.baf2ColWant) : 0;
            return {
              focus: FF.baf2ColFocusPerS * WF,
              draw: FF.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === FF.baf2ColState && WF && WF.draw > 0 ? {
            ...WF,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(PF, gW.current);
      gW.current = kW.draw > 0 ? kW : null;
      const qW = "slowed" === PF.baf2ColState || "noPower" === PF.baf2ColState,
        VF = Id(PF),
        NF = null !== iW && void 0 !== iW ? iW : PF.baf2ColHold,
        DF = function(FF) {
          var WF, SF;
          return "idle" === FF.baf2ColRxState ? null : null !== (WF = null === (SF = Md(FF)) || void 0 === SF ? void 0 : SF.fix) && void 0 !== WF ? WF : null
        }(PF),
        LF = null === DF && null === tW ? function(FF) {
          var WF;
          const SF = FF.baf2ColSentTo;
          if (!SF) return null;
          const CF = null !== (WF = FF.baf2ColSentHeld) && void 0 !== WF ? WF : null;
          return {
            key: null === CF ? `${Nd}colNovaSentToMachine` : `${Nd}colNovaSentTo`,
            target: SF,
            yS: CF
          }
        }(PF) : null,
        mW = aW ? bW(`${Bd}colFocusOf`, {
          focus: Od(PF.baf2ColP),
          need: Od(pS.NOVA_FOCUS)
        }) : null;
      return (0, Qu.jsx)(Rh.b, {
        close: hF,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, Qu.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, Qu.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Qu.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, Qu.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, Qu.jsx)(ku.b, {
                  itemName: lS,
                  amount: 0
                })
              }), (0, Qu.jsxs)("div", {
                children: [(0, Qu.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: BA(bW, lS)
                }), (0, Qu.jsx)("p", {
                  children: pd(bW, cP(PF))
                })]
              })]
            }), (0, Qu.jsx)(ib.h, {
              onClick: hF
            })]
          }), (0, Qu.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, Qu.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, Qu.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, Qu.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: bW(zP(PF), {
                    time: null === VF ? "" : Ru(bW, VF)
                  })
                }), (0, Qu.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, Qu.jsx)("i", {
                    style: {
                      width: (aW ? 100 * PF.baf2ColP / pS.NOVA_FOCUS : 0) + "%"
                    }
                  }, QF.current.n)
                }), (0, Qu.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, Qu.jsxs)("span", {
                    title: Jd(bW),
                    children: [(0, Qu.jsx)("b", {
                      children: Od(kW.focus)
                    }), " ", bW(`${Bd}colFocusPerS`)]
                  }), (0, Qu.jsxs)("span", {
                    className: QA()("Baf2ColDraw", {
                      Short: qW
                    }),
                    children: [(0, Qu.jsx)(au.e, {
                      name: "bolt"
                    }), qW ? bW(`${Bd}colDrawOf`, {
                      draw: Od(PF.baf2ColDraw),
                      want: Od(PF.baf2ColWant)
                    }) : bW(`${Bd}colPowerPerS`, {
                      rate: Od(kW.draw)
                    })]
                  }), null !== mW && (0, Qu.jsx)("span", {
                    className: "Soft",
                    children: mW
                  })]
                })]
              }), (0, Qu.jsx)("p", {
                className: QA()("Baf2ColState", uP(PF)),
                children: pd(bW, Gd(PF))
              }), null !== DF && (0, Qu.jsx)("p", {
                className: "Baf2ColStateFix",
                children: bW(DF)
              }), null === DF && null !== tW && (0, Qu.jsx)("p", {
                className: "Baf2ColStateFix",
                children: bW(tW.key, {
                  item: BA(bW, tW.item)
                })
              }), LF && (0, Qu.jsx)("p", {
                className: "Baf2ColStateFix",
                children: bW(LF.key, {
                  target: BA(bW, LF.target),
                  amount: String(null !== (SF = LF.yS) && void 0 !== SF ? SF : 0)
                })
              }), (0, Qu.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, Qu.jsx)(CP, {
                  item: WC,
                  yS: PF.baf2ColSa,
                  need: pS.NOVA_SA,
                  cap: pS.SA_CAP
                }), (0, Qu.jsx)(CP, {
                  item: SC,
                  yS: PF.baf2ColGd,
                  need: pS.NOVA_GD,
                  cap: pS.GD_CAP
                }), (0, Qu.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, Qu.jsx)(AP, {
                    item: "Nova Matter"
                  }), (0, Qu.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: bW(`${Bd}colNovaHeld`, {
                      amount: String(PF.baf2ColOut),
                      cap: String(pS.OUT_CAP)
                    })
                  }), TF && (0, Qu.jsx)(ib.k, {
                    className: "Baf2ColTake",
                    disabled: 0 === PF.baf2ColOut,
                    onClick: () => {
                      dF.send(Ld(PF, "take"))
                    },
                    children: bW(`${Bd}colTake`)
                  })]
                })]
              }), TF && (0, Qu.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": NF,
                className: QA()("Baf2ColHold", {
                  On: NF
                }),
                onClick: FF => {
                  FF.detail > 0 && FF.currentTarget.blur(), eF(!NF), dF.send(Ld(PF, "hold " + (NF ? 0 : 1)))
                },
                children: [(0, Qu.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, Qu.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, Qu.jsx)("b", {
                    children: bW(`${Bd}colHold`)
                  }), (0, Qu.jsx)("span", {
                    children: bW(`${Bd}colHoldNote`)
                  })]
                })]
              })]
            }), (0, Qu.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, Qu.jsx)(WP, {
                status: PF,
                entry: RF
              }), (0, Qu.jsx)("ul", {
                className: "Baf2ColSlots",
                children: Yd(PF.baf2ColLasers, PF.baf2ColSpots, PF.baf2ColLive, kW.beamsOn, null !== (AF = PF.baf2ColGaps) && void 0 !== AF ? AF : 0).map((FF => (0, Qu.jsxs)("li", {
                  className: FF.tone,
                  children: [(0, Qu.jsx)("b", {
                    children: pd(bW, FF.title)
                  }), null !== FF.hint && (0, Qu.jsx)("span", {
                    children: pd(bW, FF.hint)
                  })]
                }, FF.dir)))
              }), (0, Qu.jsx)(SP, {
                status: PF
              })]
            })]
          })]
        })
      })
    }
    const bR = "buildAFactory2Game:",
      dP = 36e5,
      PP = 864e5;

    function RP(FF, WF, SF) {
      return Math.max(0, Math.ceil((FF + WF - Math.max(SF, FF)) / 1e3))
    }

    function iR(FF) {
      return FF.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function eP(FF) {
      return "Homestead" === FF
    }

    function EP(FF) {
      return function(FF) {
        let WF = 0;
        for (const SF of FF) {
          const FF = /^Island ([1-9]\d{0,5})$/.exec(SF);
          FF && (WF = Math.max(WF, Number(FF[1])))
        }
        return `Island ${WF+1}`
      }(FF.map((FF => FF.baf2IslandName)))
    }

    function QP(FF, WF) {
      return function(FF) {
        return `${bR}islandsBlocked${FF[0].toUpperCase()}${FF.slice(1)}`
      }("degraded" === FF && 0 === WF ? "stuck" : FF)
    }

    function rR(FF) {
      return FF.filter((FF => {
        var WF;
        return !FF.baf2IslandActive && void 0 === FF.baf2IslandUnreadable && void 0 === (null === (WF = FF.baf2IslandCoop) || void 0 === WF ? void 0 : WF.baf2CoopState)
      })).length
    }

    function gR(FF) {
      return "coopMoving" === FF || "coopUnreachable" === FF
    }

    function tR(FF, WF) {
      const SF = WF > 0;
      return {
        change: null === FF && !SF,
        switch: (null === FF || "degraded" === FF || gR(FF)) && !SF,
        rename: "loading" !== FF && "degraded" !== FF && "stuck" !== FF
      }
    }

    function TP(FF, WF) {
      return void 0 === FF || "corrupt" === FF && WF
    }
    const aR = Vh;

    function kR(FF, WF, SF) {
      if (null !== FF && void 0 !== FF && FF.untilGone) {
        var CF;
        return !("dismiss" === FF.untilGone && void 0 === (null === (CF = WF.baf2IslandCoop) || void 0 === CF ? void 0 : CF.baf2CoopState)) && SF - FF.atMs < 32500
      }
      return void 0 !== FF && SF - FF.atMs < aR && WF.baf2IslandName === FF.from
    }
    const qR = Vh;

    function VP(FF) {
      return "core" === (null === FF || void 0 === FF ? void 0 : FF.kind) ? FF.core : "islands" === (null === FF || void 0 === FF ? void 0 : FF.kind) ? FF.backToCore : void 0
    }

    function NP(FF) {
      return `\0${FF}\0`
    }

    function DP(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const CF = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const uF of Object.keys(SF)) CF[uF] = NP(uF);
      let AF = Object.keys(CF).length > 0 ? FF(WF, CF) : FF(WF);
      for (const [uF, hF] of Object.entries(SF)) AF = AF.split(NP(uF)).join(hF);
      return AF
    }

    function LP(FF, WF) {
      return FF ? WF ? "enabled" : "disabled" : "hidden"
    }
    const mR = {
      removed: `${bR}islandsCoopRemoved`,
      deleted: `${bR}islandsCoopDeleted`,
      notReady: `${bR}islandsCoopNotReady`,
      gone: `${bR}islandsCoopGone`
    };

    function OP(FF) {
      var WF;
      return "member" !== (null === (WF = FF.baf2IslandCoop) || void 0 === WF ? void 0 : WF.baf2CoopRole) && "newer" !== FF.baf2IslandUnreadable
    }

    function xR(FF, WF, SF, CF, AF) {
      const uF = FF.baf2IslandActive,
        hF = FF.baf2IslandUnreadable,
        bW = FF.baf2IslandCoop,
        dF = function(FF, WF, SF) {
          return {
            switch: FF.switch && void 0 === WF,
            delete: FF.change && TP(WF, SF)
          }
        }(WF, hF, CF),
        PF = {
          switch: LP(!uF && void 0 === hF, dF.switch),
          rename: LP(!0, WF.rename),
          delete: LP(!uF, dF.delete),
          deleteWaits: !uF && TP(hF, CF),
          people: LP(void 0 !== FF.baf2IslandInvitable || AF && uF && void 0 === hF && void 0 === bW, !0),
          peopleLabel: "invite",
          AC: "hidden",
          dismiss: "hidden",
          remove: !1,
          note: null
        },
        RF = !uF && dF.delete;
      if (void 0 === bW) return SF ? {
        ...PF,
        delete: LP(!uF, !1),
        deleteWaits: !1,
        note: RF ? {
          key: `${bR}islandsCoopKeepOwn`
        } : null
      } : PF;
      const iW = bW.baf2CoopState,
        eF = bW.baf2CoopMembers.length > 1,
        EF = {
          ...PF,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== iW && "member" === bW.baf2CoopRole) return {
        ...EF,
        dismiss: LP(!0, WF.rename),
        note: {
          key: mR[iW],
          names: {
            owner: bW.baf2CoopOwner
          }
        }
      };
      if (void 0 !== iW) {
        let FF = {
          key: `${bR}islandsCoopOwnLost`
        };
        return RF && eF ? FF = {
          key: `${bR}islandsCoopDeleteMembers`
        } : RF && SF && (FF = {
          key: `${bR}islandsCoopKeepOwn`
        }), {
          ...EF,
          delete: LP(!uF, dF.delete && !eF && !SF),
          deleteWaits: PF.deleteWaits && !eF && !SF,
          note: FF
        }
      }
      if ("member" === bW.baf2CoopRole) return {
        ...PF,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        AC: LP(!0, uF ? WF.switch : WF.rename)
      };
      const QF = bW.baf2CoopManageHere;
      let rW = null;
      var gW;
      QF ? RF && eF ? rW = {
        key: `${bR}islandsCoopDeleteMembers`
      } : RF && SF && (rW = {
        key: `${bR}islandsCoopKeepOwn`
      }) : rW = {
        key: null !== (gW = bW.baf2CoopLeft) && void 0 !== gW && gW.length ? `${bR}islandsCoopManageThereClaim` : `${bR}islandsCoopManageThere`
      };
      return {
        ...PF,
        rename: LP(!0, WF.rename && QF),
        delete: LP(!uF, dF.delete && !eF && !SF),
        deleteWaits: PF.deleteWaits && !eF && !SF,
        people: "enabled",
        peopleLabel: "players",
        remove: QF,
        note: rW
      }
    }

    function ZP(FF) {
      var WF;
      const SF = FF.baf2IslandCoop;
      if ("owner" !== (null === SF || void 0 === SF ? void 0 : SF.baf2CoopRole) || void 0 !== SF.baf2CoopState || null === (WF = SF.baf2CoopLeft) || void 0 === WF || !WF.length) return null;
      const CF = FF.baf2IslandActive && SF.baf2CoopManageHere;
      return {
        left: SF.baf2CoopLeft,
        claim: CF,
        goThere: !CF && SF.baf2CoopManageHere
      }
    }

    function oP(FF) {
      return FF.baf2CoopMembers.length >= FF.baf2CoopMax
    }

    function YP(FF, WF, SF) {
      return void 0 !== FF && WF < FF.answer && SF - FF.atMs < aR
    }
    const MP = "buildAFactory2Game:";

    function cR(FF, WF) {
      return {
        onKeyDown: SF => {
          SF.stopPropagation(), SF.nativeEvent.isComposing || 229 === SF.nativeEvent.keyCode || ("Enter" === SF.key ? (SF.preventDefault(), FF()) : "Escape" === SF.key && (SF.preventDefault(), WF()))
        }
      }
    }

    function GP(FF) {
      return {
        onKeyDown: WF => {
          "Escape" !== WF.key || WF.nativeEvent.isComposing || (WF.preventDefault(), WF.stopPropagation(), FF())
        }
      }
    }

    function zR(FF) {
      FF.currentTarget.select()
    }

    function IP(FF, WF) {
      (0, CF.useEffect)((() => {
        var SF;
        FF && (null === (SF = WF.current) || void 0 === SF || SF.scrollIntoView({
          block: "nearest"
        }))
      }), [FF, WF])
    }

    function fP(FF) {
      const [WF, SF] = (0, CF.useState)(null);
      return (0, CF.useEffect)((() => {
        const WF = document.querySelector(".UiRequests"),
          CF = FF.current;
        if (!WF || !CF || "undefined" === typeof ResizeObserver) return;
        const AF = () => {
          const FF = WF.getBoundingClientRect(),
            AF = CF.getBoundingClientRect(),
            uF = CF.parentElement,
            hF = uF && parseFloat(getComputedStyle(uF).paddingTop) || 0,
            bW = function(FF, WF, SF, CF) {
              if (!FF || FF.height <= 0 || FF.right <= WF.left || FF.left >= WF.right) return null;
              const AF = Math.max(CF, FF.bottom + 8);
              return {
                marginTop: Math.round(AF - CF),
                maxHeight: Math.max(0, Math.floor(SF - AF - CF))
              }
            }(FF, AF, window.innerHeight, hF);
          SF((FF => (null === FF || void 0 === FF ? void 0 : FF.marginTop) === (null === bW || void 0 === bW ? void 0 : bW.marginTop) && (null === FF || void 0 === FF ? void 0 : FF.maxHeight) === (null === bW || void 0 === bW ? void 0 : bW.maxHeight) ? FF : bW))
        };
        AF();
        const uF = new ResizeObserver(AF);
        return uF.observe(WF), window.addEventListener("resize", AF), () => {
          uF.disconnect(), window.removeEventListener("resize", AF)
        }
      }), [FF]), WF
    }

    function yR(FF) {
      (0, CF.useEffect)((() => {
        var WF;
        null === (WF = FF.current) || void 0 === WF || WF.focus()
      }), [FF])
    }

    function sP(FF) {
      const [WF, SF] = (0, CF.useState)(Date.now);
      return (0, CF.useEffect)((() => {
        const WF = window.setInterval((() => {
          SF(Date.now())
        }), FF);
        return () => {
          window.clearInterval(WF)
        }
      }), [FF]), WF
    }

    function nP(FF) {
      let {
        tier: WF,
        t: SF
      } = FF;
      const {
        kind: CF,
        short: AF
      } = gW(WF), uF = EF(WF, QF), hF = SF(`${MP}${uF.key}`, {
        ...uF.params,
        name: SF(`${MP}${tW(WF).nameKey}`)
      });
      return (0, Qu.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, Qu.jsx)("span", {
          className: QA()("Baf2IslandTierPip", {
            Stage: "tier" !== CF
          }),
          "aria-hidden": "true",
          children: AF
        }), hF]
      })
    }

    function HP(FF) {
      let {
        note: WF,
        className: SF,
        t: CF
      } = FF;
      return (0, Qu.jsx)("p", {
        className: QA()("Baf2IslandNote", SF),
        children: DP(CF, WF.key, WF.names, WF.params)
      })
    }
    const KP = "buildAFactory2Game:";

    function wP(FF) {
      let {
        message: WF,
        arrivedAtMs: SF,
        close: AF,
        AC: uF
      } = FF;
      const hF = Zh(),
        {
          t: bW
        } = (0, TA.B)(),
        dF = sP(1e3),
        PF = (0, CF.useRef)(null);
      (0, CF.useEffect)((() => {
        var FF;
        null === (FF = PF.current) || void 0 === FF || FF.focus()
      }), []);
      const RF = RP(SF, WF.baf2TransferInMs, dF),
        iW = SF + WF.baf2TransferInMs - 1e3,
        [eF, EF] = (0, CF.useState)(null);
      (0, CF.useEffect)((() => {
        const FF = window.setTimeout((() => {
          EF(iW)
        }), Math.max(0, iW - Date.now()));
        return () => {
          window.clearTimeout(FF)
        }
      }), [iW]);
      const QF = eF === iW || dF >= iW,
        rW = WF.baf2TransferIsland,
        gW = WF.baf2TransferOwner;
      return (0, Qu.jsx)(Rh.b, {
        close: AF,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, Qu.jsxs)("section", {
          ref: PF,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, Qu.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Qu.jsxs)("div", {
              children: [(0, Qu.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === gW ? DP(bW, `${KP}islandsTransferOwn`, {
                  island: rW
                }) : DP(bW, `${KP}islandsTransfer`, {
                  island: rW,
                  owner: gW
                })
              }), (0, Qu.jsx)("p", {
                children: QF ? bW(`${KP}islandsTransferNow`) : bW(`${KP}islandsTransferIn`, {
                  time: Ru(bW, RF)
                })
              })]
            }), (0, Qu.jsx)(ib.h, {
              ariaLabel: bW(`${KP}islandsClose`),
              onClick: AF
            })]
          }), !QF && (0, Qu.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, Qu.jsx)("p", {
              className: "Baf2TransferNote",
              children: bW(`${KP}islandsTransferNote`)
            }), (0, Qu.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, Qu.jsx)(ib.e, {
                onClick: () => {
                  hF.send("baf2coopstay"), uF()
                },
                children: bW(`${KP}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var XP = SF(1262),
      UP = SF(35213),
      BP = SF.n(UP);
    const jR = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const vR = "buildAFactory2Game:",
      JP = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function pP(FF, WF, SF) {
      return void 0 === WF ? SF : "string" === typeof WF ? WF : Array.isArray(WF) ? WF.map((WF => "string" === typeof WF ? WF : "translationKey" in WF ? FF(WF.translationKey) : "")).join("") : FF(WF.translationKey)
    }

    function lP(FF) {
      const WF = {};
      for (const [SF, CF] of Object.entries(null !== FF && void 0 !== FF ? FF : {})) WF[SF] = CF < 0 ? Pu(CF) : CF.toLocaleString("en-US");
      return WF
    }
    const FR = (0, CF.memo)((function(FF) {
      let {
        item: WF
      } = FF;
      return (0, Qu.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, Qu.jsx)(ku.b, {
          itemName: WF,
          amount: 0
        })
      })
    }));

    function WR(FF) {
      let {
        label: WF,
        percent: SF,
        progress: CF
      } = FF;
      return (0, Qu.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, Qu.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${WF}: ${CF}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": SF,
          children: (0, Qu.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${SF}%`
            }
          })
        }), (0, Qu.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: CF
        })]
      })
    }

    function SR(FF) {
      let {
        chips: WF
      } = FF;
      return (0, Qu.jsx)("span", {
        className: "Baf2QuestChips",
        children: WF.map((FF => {
          let [WF, SF, CF] = FF;
          const AF = SF >= CF;
          return (0, Qu.jsxs)("span", {
            className: QA()("Baf2QuestChip", {
              Met: AF
            }),
            children: [(0, Qu.jsx)(FR, {
              item: WF
            }), (0, Qu.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: AF ? `\u2713${CF}` : `${SF}/${CF}`
            })]
          }, WF)
        }))
      })
    }

    function CR(FF, WF) {
      const {
        key: SF,
        params: CF
      } = EF(WF, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return FF(`${vR}${SF}`, {
        ...CF,
        name: FF(`${vR}${tW(WF).nameKey}`)
      })
    }

    function AR(FF) {
      let {
        core: WF,
        t: SF
      } = FF;
      const [CF, AF] = WF, uF = AF > 0 ? Math.floor(100 * CF / AF) : 100;
      return (0, Qu.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": SF(`${vR}questCoreLabel`, {
          have: String(CF),
          need: String(AF)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": uF,
        children: [(0, Qu.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: SF(`${vR}questCore`, {
            percent: String(uF)
          })
        }), (0, Qu.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, Qu.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${uF}%`
            }
          })
        })]
      })
    }

    function uR(FF) {
      let {
        rows: WF,
        t: SF
      } = FF;
      const CF = WF.filter((FF => FF.done)).length;
      return (0, Qu.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": SF(`${vR}questStepsProgress`, {
          done: String(CF),
          total: String(WF.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": WF.length,
        "aria-valuenow": CF,
        children: WF.map((FF => (0, Qu.jsx)("span", {
          className: QA()("Baf2QuestSegment", {
            Done: FF.done,
            Current: FF.current
          })
        }, FF.id)))
      })
    }
    const hR = (0, CF.memo)(dR, bi);

    function bi(FF, WF) {
      const SF = SF => FF.view.itemNames[SF] === WF.view.itemNames[SF];
      return FF.t === WF.t && FF.extra === WF.extra && (null === FF.row.item || SF(FF.row.item)) && FF.row.madeFor.every(SF) && FF.row.also.every(SF) && BP()(FF.row, WF.row)
    }

    function dR(FF) {
      let {
        row: WF,
        view: SF,
        t: CF,
        extra: AF
      } = FF;
      const uF = WF.item ? function(FF, WF, SF) {
          return 1 !== SF && jR.has(FF) ? tu(WF) : null
        }(WF.key, WF.item, WF.total) : null,
        hF = uF ? CF(uF) : WF.item ? pP(CF, SF.itemNames[WF.item], WF.item) : "",
        bW = WF.also.map((FF => pP(CF, SF.itemNames[FF], FF))),
        dF = bW.join(", "),
        PF = function(FF, WF) {
          var SF;
          return WF.length < 2 ? null !== (SF = WF[0]) && void 0 !== SF ? SF : "" : FF(`${vR}listAnd`, {
            rest: WF.slice(0, -1).join(FF(`${vR}listComma`)),
            last: WF[WF.length - 1]
          })
        }(CF, [hF, ...bW]),
        RF = CF(`${vR}${WF.key}`, {
          ...lP(WF.params),
          item: hF,
          also: dF,
          itemList: PF,
          total: String(WF.total)
        }),
        [iW, ...eF] = RF.split("\n"),
        EF = WF.total > 1 && !WF.done && !WF.away;
      return (0, Qu.jsxs)("li", {
        className: QA()("Baf2QuestStep", {
          Done: WF.done,
          Current: WF.current,
          JustFinished: WF.justFinished,
          Away: WF.away
        }),
        children: [!WF.done && null !== WF.item && (0, Qu.jsx)(FR, {
          item: WF.item
        }), (WF.done || null === WF.item) && (0, Qu.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: WF.done ? "\u2713" : "\u25cb"
        }), (0, Qu.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, Qu.jsx)("strong", {
            children: iW
          }), eF.length > 0 && (0, Qu.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: eF.join(" ")
          }), !WF.done && WF.madeFor.length > 0 && (0, Qu.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: CF("buildAFactory2Game:questRowFor", {
              items: WF.madeFor.map((FF => pP(CF, SF.itemNames[FF], FF))).join(" \u2192 ")
            })
          }), EF && (0, Qu.jsx)(WR, {
            label: iW,
            percent: Math.round(100 * WF.amount / WF.total),
            progress: `${WF.amount.toLocaleString("en-US")}/${WF.total.toLocaleString("en-US")}`
          }), !WF.done && !WF.away && WF.chips && WF.chips.length > 0 && (0, Qu.jsx)(SR, {
            chips: WF.chips
          }), AF]
        })]
      })
    }

    function PR(FF, WF) {
      let [SF, CF] = WF;
      return FF(`${vR}${SF}`, lP(CF))
    }

    function RR(FF) {
      let [WF, SF] = FF;
      return WF + JSON.stringify(SF)
    }

    function ii(FF) {
      let {
        goal: WF,
        t: SF
      } = FF;
      return WF ? (0, Qu.jsx)("span", {
        className: "Baf2BookGoal",
        children: SF(`${vR}${WF}`)
      }) : null
    }

    function eR(FF) {
      let {
        view: WF,
        t: SF
      } = FF;
      if (!WF.name) return null;
      const CF = MA(WF.rows);
      return (0, Qu.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, Qu.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: SF(`${vR}currentQuest`)
        }), (0, Qu.jsx)("strong", {
          className: "Baf2BookTitle",
          children: PR(SF, WF.name)
        }), (0, Qu.jsx)(ii, {
          goal: WF.goal,
          t: SF
        }), CF.length > 1 && (0, Qu.jsx)(uR, {
          rows: CF,
          t: SF
        }), (0, Qu.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: WF.rows.map((FF => (0, Qu.jsx)(hR, {
            row: FF,
            view: WF,
            t: SF
          }, FF.id)))
        }), WF.reward && (0, Qu.jsxs)("span", {
          className: "Baf2BookReward",
          children: [SF(`${vR}questReward`), (0, Qu.jsx)(FR, {
            item: WF.reward
          }), pP(SF, WF.itemNames[WF.reward], WF.reward)]
        })]
      })
    }

    function ER(FF) {
      let {
        quest: WF,
        upcoming: SF,
        t: CF
      } = FF;
      return (0, Qu.jsxs)("li", {
        className: QA()("Baf2BookQuest", {
          Done: WF[3],
          Upcoming: SF
        }),
        children: [(0, Qu.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: WF[3] ? "\u2713" : "\u25cb"
        }), (0, Qu.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, Qu.jsx)("strong", {
            className: "Baf2BookTitle",
            children: PR(CF, WF)
          }), (0, Qu.jsx)(ii, {
            goal: WF[2],
            t: CF
          })]
        })]
      })
    }

    function QR(FF) {
      let {
        done: WF,
        total: SF,
        t: CF
      } = FF;
      const AF = SF > 0 ? Math.round(100 * WF / SF) : 0,
        uF = CF(`${vR}questBookChapterProgress`, {
          done: String(WF),
          total: String(SF)
        });
      return (0, Qu.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, Qu.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": uF,
          "aria-valuemin": 0,
          "aria-valuemax": SF,
          "aria-valuenow": WF,
          children: (0, Qu.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${AF}%`
            }
          })
        }), (0, Qu.jsx)("span", {
          className: "Baf2BookProgressText",
          children: uF
        })]
      })
    }

    function ri(FF) {
      let {
        view: WF,
        tier: SF,
        quests: CF,
        t: AF
      } = FF;
      const uF = SF === WF.tier,
        hF = (null !== CF && void 0 !== CF ? CF : []).filter((FF => !FF[4])),
        bW = (null !== CF && void 0 !== CF ? CF : []).filter((FF => FF[4])),
        dF = hF.filter((FF => FF[3])).length,
        PF = uF && WF.name ? RR(WF.name) : null,
        RF = hF.findIndex((FF => !FF[3] && RR(FF) === PF));
      return (0, Qu.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, Qu.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, Qu.jsx)("h3", {
            children: CR(AF, SF)
          }), hF.length > 0 && (0, Qu.jsx)(QR, {
            done: dF,
            total: hF.length,
            t: AF
          }), uF && WF.core && (0, Qu.jsx)(AR, {
            core: WF.core,
            t: AF
          })]
        }), (0, Qu.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === CF && uF && (0, Qu.jsx)(eR, {
            view: WF,
            t: AF
          }), hF.map(((FF, SF) => SF === RF ? (0, Qu.jsx)(eR, {
            view: WF,
            t: AF
          }, RR(FF)) : (0, Qu.jsx)(ER, {
            quest: FF,
            upcoming: !FF[3],
            t: AF
          }, RR(FF))))]
        }), uF && WF.side && (0, Qu.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, Qu.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: AF(`${vR}questSide`)
          }), (0, Qu.jsx)("strong", {
            className: "Baf2BookTitle",
            children: PR(AF, WF.side.name)
          }), (0, Qu.jsx)(ii, {
            goal: WF.side.goal,
            t: AF
          }), (0, Qu.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, Qu.jsx)(hR, {
              row: WF.side.row,
              view: WF,
              t: AF
            })
          })]
        }), bW.length > 0 && (0, Qu.jsxs)(Qu.Fragment, {
          children: [(0, Qu.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: AF(`${vR}questBookSidesDone`)
          }), (0, Qu.jsx)("ol", {
            className: "Baf2BookQuests",
            children: bW.map((FF => (0, Qu.jsx)(ER, {
              quest: FF,
              upcoming: !1,
              t: AF
            }, RR(FF))))
          })]
        })]
      })
    }

    function gi(FF) {
      var WF, SF, uF;
      let {
        store: hF,
        close: bW
      } = FF;
      const {
        t: dF
      } = (0, TA.B)(), PF = (0, XP.i)(mu, hF.get()), iW = null !== (WF = PF.tier) && void 0 !== WF ? WF : 1, [eF, EF] = (0, CF.useState)(null), QF = (null === eF || void 0 === eF ? void 0 : eF.at) === iW ? eF.tier : iW, tW = (0, CF.useRef)(null), TF = null !== PF.chapters;
      (0, CF.useEffect)((() => {
        var FF;
        tW.current && (tW.current.scrollTop = 0);
        const WF = null === (FF = tW.current) || void 0 === FF ? void 0 : FF.querySelector(".Baf2BookQuest.Current");
        if (tW.current && WF) {
          const FF = WF.getBoundingClientRect().bottom - tW.current.getBoundingClientRect().bottom;
          FF > 0 && (tW.current.scrollTop += Math.min(FF, WF.getBoundingClientRect().top - tW.current.getBoundingClientRect().top))
        }
      }), [QF, TF]);
      const aW = null === (SF = PF.chapters) || void 0 === SF ? void 0 : SF.find((FF => {
        let [WF] = FF;
        return WF === QF
      }));
      return (0, Qu.jsx)(Rh.b, {
        close: bW,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Qu.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: JP,
          children: [(0, Qu.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Qu.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: dF(`${vR}questBookTitle`)
            }), (0, Qu.jsx)(ib.h, {
              onClick: bW
            })]
          }), (0, Qu.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": dF(`${vR}questBookChapters`),
            children: AF.slice(0, RF()).map(((FF, WF) => {
              const SF = WF + 1,
                {
                  kind: CF,
                  short: AF
                } = gW(SF),
                uF = rW(SF, iW),
                hF = uF ? dF(`${vR}coreAtomicHidden`) : CR(dF, SF);
              return (0, Qu.jsx)("li", {
                children: (0, Qu.jsx)("button", {
                  type: "button",
                  className: QA()({
                    Stage: "tier" !== CF,
                    Atomic: "atomic" === CF,
                    Current: SF === iW,
                    Selected: SF === QF
                  }),
                  disabled: SF > iW,
                  "aria-pressed": SF === QF,
                  "aria-label": hF,
                  title: uF ? void 0 : hF,
                  onClick: () => {
                    EF({
                      tier: SF,
                      at: iW
                    })
                  },
                  children: uF ? "?" : AF
                })
              }, FF.nameKey)
            }))
          }), (0, Qu.jsxs)("div", {
            ref: tW,
            className: "Baf2BookBody",
            children: [oA(PF) && QF === iW && (0, Qu.jsx)("p", {
              className: "Baf2BookEmpty",
              children: dF(`${vR}questBookAllDone`)
            }), (0, Qu.jsx)(ri, {
              view: PF,
              tier: QF,
              quests: null !== (uF = null === aW || void 0 === aW ? void 0 : aW[1]) && void 0 !== uF ? uF : null,
              t: dF
            })]
          })]
        })
      })
    }
    const ti = "buildAFactory2Game:";

    function TR(FF) {
      let {
        tiers: WF,
        from: SF,
        tier: CF,
        shown: AF,
        lW: uF
      } = FF;
      const {
        t: hF
      } = (0, TA.B)(), bW = WF.map(((FF, WF) => {
        const bW = SF + WF,
          {
            kind: dF,
            short: PF
          } = gW(bW),
          RF = rW(bW, CF);
        return (0, Qu.jsx)("li", {
          children: (0, Qu.jsx)("button", {
            type: "button",
            className: QA()({
              Stage: "tier" !== dF,
              Silhouette: RF,
              Reached: bW <= CF,
              Current: bW === CF,
              Next: bW === CF + 1,
              Selected: bW === AF
            }),
            disabled: RF,
            "aria-pressed": bW === AF,
            "aria-label": RF ? hF(`${ti}coreAtomicHidden`) : void 0,
            title: RF ? void 0 : hF(`${ti}${FF.nameKey}`),
            onClick: () => {
              uF(bW)
            },
            children: RF ? "?" : PF
          })
        }, FF.nameKey)
      }));
      return (0, Qu.jsx)(Qu.Fragment, {
        children: bW
      })
    }

    function ai(FF) {
      let {
        id: WF,
        label: SF,
        tiers: CF,
        from: AF,
        ...uF
      } = FF;
      return (0, Qu.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, Qu.jsx)("span", {
          id: WF,
          className: "Baf2CoreLadderLabel",
          children: SF
        }), (0, Qu.jsx)("ol", {
          "aria-labelledby": WF,
          children: (0, Qu.jsx)(TR, {
            ...uF,
            tiers: CF,
            from: AF
          })
        })]
      })
    }

    function ki(FF) {
      const {
        t: WF
      } = (0, TA.B)(), SF = AF.findIndex((FF => void 0 !== FF.stage)), CF = AF.findIndex((FF => void 0 !== FF.reactorTier)), uF = SF < 0 ? AF : AF.slice(0, SF), hF = SF < 0 ? [] : AF.slice(SF, CF < 0 ? void 0 : CF), dF = CF < 0 || !bW() ? [] : AF.slice(CF);
      return (0, Qu.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, Qu.jsx)(ai, {
          ...FF,
          id: "baf2CoreTiersLabel",
          label: WF(`${ti}coreTiersLabel`),
          tiers: uF,
          from: 1
        }), hF.length > 0 && (0, Qu.jsx)(ai, {
          ...FF,
          id: "baf2CoreStagesLabel",
          label: WF(`${ti}coreStagesLabel`),
          tiers: hF,
          from: SF + 1
        }), dF.length > 0 && (0, Qu.jsx)(ai, {
          ...FF,
          id: "baf2CoreAtomicLabel",
          label: WF(`${ti}coreAtomicLabel`),
          tiers: dF,
          from: CF + 1
        })]
      })
    }
    const qi = "buildAFactory2Game:";

    function VR(FF) {
      let {
        item: WF,
        itemNames: SF,
        children: CF
      } = FF;
      return (0, Qu.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, Qu.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, Qu.jsx)(ku.b, {
            itemName: WF,
            amount: 0
          })
        }), (0, Qu.jsx)(qu.d, {
          text: SF[WF]
        }), CF]
      })
    }

    function NR(FF) {
      const WF = new Map;
      for (const {
          block: CF
        }
        of FF.newDeposits) {
        var SF;
        WF.set(CF, (null !== (SF = WF.get(CF)) && void 0 !== SF ? SF : 0) + 1)
      }
      return [...WF]
    }

    function DR(FF) {
      let {
        value: WF,
        label: SF,
        more: CF
      } = FF;
      return (0, Qu.jsxs)("li", {
        children: [(0, Qu.jsx)("strong", {
          children: WF
        }), (0, Qu.jsx)("span", {
          children: SF
        }), CF > 0 && (0, Qu.jsxs)("em", {
          children: ["+", CF]
        })]
      })
    }

    function LR(FF) {
      let {
        items: WF,
        itemNames: SF
      } = FF;
      const {
        t: AF
      } = (0, TA.B)(), [uF, hF] = (0, CF.useState)(null), bW = null !== uF && WF.includes(uF) ? uF : null;
      return (0, Qu.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, Qu.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: AF(`${qi}coreRewardUnlocks`)
        }), (0, Qu.jsx)("ul", {
          children: WF.map((FF => (0, Qu.jsx)("li", {
            children: (0, Qu.jsx)("button", {
              type: "button",
              className: QA()("Baf2PanelIcon", {
                Picked: FF === bW
              }),
              title: BA(AF, FF),
              "aria-label": BA(AF, FF),
              "aria-pressed": FF === bW,
              onClick: () => {
                hF(FF === bW ? null : FF)
              },
              children: (0, Qu.jsx)(ku.b, {
                itemName: FF,
                amount: 0
              })
            })
          }, FF)))
        }), (0, Qu.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== bW && (0, Qu.jsxs)(Qu.Fragment, {
            children: [(0, Qu.jsx)(qu.d, {
              text: SF[bW]
            }), " \xb7 ", (0, Qu.jsx)(qu.d, {
              text: SF[ZF(bW)]
            })]
          }), null === bW && AF(`${qi}coreRecipeTap`)]
        })]
      })
    }

    function mi(FF) {
      var WF, SF;
      let {
        def: CF,
        tier: AF,
        itemNames: uF
      } = FF;
      const {
        t: hF
      } = (0, TA.B)(), bW = AF > 1 ? tW(AF - 1) : void 0, dF = Math.round(2 * CF.islandRadius), PF = bW ? Math.round(2 * bW.islandRadius) : dF, RF = AF >= 3 ? EC(AF) : null;
      return (0, Qu.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, Qu.jsxs)("ul", {
          className: QA()("Baf2CoreStats", {
            Four: null !== RF
          }),
          children: [(0, Qu.jsx)(DR, {
            value: `${dF}\xd7${dF}`,
            label: hF(`${qi}coreStatIsland`),
            more: dF - PF
          }), (0, Qu.jsx)(DR, {
            value: String(CF.machineAllowance),
            label: hF(`${qi}coreStatMachines`),
            more: CF.machineAllowance - (null !== (WF = null === bW || void 0 === bW ? void 0 : bW.machineAllowance) && void 0 !== WF ? WF : CF.machineAllowance)
          }), (0, Qu.jsx)(DR, {
            value: String(CF.beltAllowance),
            label: hF(`${qi}coreStatBelts`),
            more: CF.beltAllowance - (null !== (SF = null === bW || void 0 === bW ? void 0 : bW.beltAllowance) && void 0 !== SF ? SF : CF.beltAllowance)
          }), null !== RF && (0, Qu.jsx)(DR, {
            value: String(RF),
            label: hF(`${qi}coreStatStorage`),
            more: RF - (bW ? EC(AF - 1) : RF)
          })]
        }), CF.reward && (0, Qu.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, Qu.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: hF(`${qi}coreRewardItem`)
          }), (0, Qu.jsx)(VR, {
            item: CF.reward,
            itemNames: uF
          })]
        }), CF.newDeposits.length > 0 && (0, Qu.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, Qu.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: hF(CF.newDeposits.length > 1 ? `${qi}coreRewardDeposits` : `${qi}coreRewardDeposit`)
          }), NR(CF).map((FF => {
            let [WF, SF] = FF;
            return (0, Qu.jsx)(VR, {
              item: WF,
              itemNames: uF,
              children: SF > 1 && ` \xd7${SF}`
            }, WF)
          }))]
        }), CF.unlocks.length > 0 && (0, Qu.jsx)(LR, {
          items: CF.unlocks,
          itemNames: uF
        }), (0, Qu.jsx)(OR, {
          tier: AF
        })]
      })
    }

    function OR(FF) {
      let {
        tier: WF
      } = FF;
      const {
        t: SF
      } = (0, TA.B)(), CF = bu[WF];
      if (!CF) return null;
      const AF = hA(WF, 0, 0).barrierMax !== hA(WF - 1, 0, 0).barrierMax;
      return (0, Qu.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, Qu.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, Qu.jsx)(ku.b, {
            itemName: AF ? FA.Chestplate : lC,
            amount: 0
          })
        }), SF(`${qi}gearPerkLine`, {
          perk: SF(`${qi}${CF}`)
        })]
      })
    }

    function xi(FF, WF) {
      return null === FF ? WF : FF.value
    }

    function ZR(FF, WF, SF, CF) {
      let AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === FF || SF - FF.atMs >= CF ? null : AF(FF.value, WF) ? FF.armed ? null : FF : FF.armed ? FF : {
        ...FF,
        armed: !0
      }
    }

    function oR(FF, WF) {
      const SF = WF.filter((WF => {
        var SF;
        return !1 !== (null === (SF = FF.get(WF)) || void 0 === SF ? void 0 : SF.value)
      }));
      for (const [CF, AF] of FF) AF.value && !WF.includes(CF) && SF.push(CF);
      return SF
    }

    function YR(FF, WF, SF, AF) {
      const [uF, hF] = (0, CF.useState)((() => new Map)), bW = () => {
        hF((WF => function(FF, WF, SF, CF) {
          var AF;
          let uF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            hF = null;
          for (const [bW, dF] of FF) {
            const AF = ZR(dF, WF(bW), SF, CF, uF);
            AF !== dF && (hF ??= new Map(FF), null === AF ? hF.delete(bW) : hF.set(bW, AF))
          }
          return null !== (AF = hF) && void 0 !== AF ? AF : FF
        }(WF, FF, Date.now(), SF, AF)))
      };
      (0, CF.useEffect)((() => {
        bW()
      }), [WF, SF]), (0, CF.useEffect)((() => {
        if (0 === uF.size) return;
        const FF = Math.min(...[...uF.values()].map((FF => FF.atMs))),
          WF = setTimeout(bW, Math.max(0, FF + SF - Date.now()) + 1);
        return () => {
          clearTimeout(WF)
        }
      }), [uF, WF, SF]);
      return [uF, (WF, SF) => {
        hF((CF => {
          const uF = new Map(CF);
          return uF.set(WF, function(FF, WF, SF) {
            return {
              value: FF,
              atMs: SF,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(FF, WF)
            }
          }(SF, FF(WF), Date.now(), AF)), uF
        }))
      }]
    }
    const MR = "buildAFactory2Game:";

    function ci(FF) {
      let {
        message: WF,
        itemNames: SF
      } = FF;
      const AF = Zh(),
        {
          t: uF
        } = (0, TA.B)(),
        [hF, bW] = (0, CF.useState)(!1),
        [dF, PF] = function(FF) {
          let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Vh;
          const [SF, CF] = YR((WF => FF.includes(WF)), FF, WF, Object.is);
          return [oR(SF, FF), CF]
        }(WF.baf2CoreBankPaused),
        RF = new Set(dF),
        iW = [...WF.baf2CoreBanked];
      for (const CF of RF) iW.some((FF => {
        let [WF] = FF;
        return WF === CF
      })) || iW.push([CF, 0]);
      return 0 === iW.length ? null : (0, Qu.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, Qu.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": hF,
          onClick: () => {
            bW(!hF)
          },
          children: [(0, Qu.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: uF(`${MR}coreBankedLater`)
          }), (0, Qu.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: iW.map((FF => {
              let [WF, SF] = FF;
              const CF = RF.has(WF);
              return (0, Qu.jsxs)("span", {
                className: QA()({
                  Paused: CF
                }),
                title: CF ? uF(`${MR}coreBankPausedTag`) : void 0,
                children: [(0, Qu.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, Qu.jsx)(ku.b, {
                    itemName: WF,
                    amount: 0
                  })
                }), SF, CF && (0, Qu.jsx)(au.e, {
                  name: "pause"
                })]
              }, WF)
            }))
          }), (0, Qu.jsx)(au.e, {
            name: hF ? "angle-up" : "angle-down"
          })]
        }), hF && (0, Qu.jsxs)(Qu.Fragment, {
          children: [(0, Qu.jsx)("ul", {
            children: iW.map((FF => {
              let [WF, CF] = FF;
              const hF = RF.has(WF);
              return (0, Qu.jsxs)("li", {
                children: [(0, Qu.jsxs)(VR, {
                  item: WF,
                  itemNames: SF,
                  children: [(0, Qu.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: CF
                  }), hF && (0, Qu.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: uF(`${MR}coreBankPausedTag`)
                  })]
                }), (0, Qu.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, Qu.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === CF,
                    onClick: () => {
                      AF.send(`baf2corewithdraw ${CF} ${WF}`)
                    },
                    children: uF(`${MR}coreTake`)
                  }), (0, Qu.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      AF.send(`${kW} ${WF}`), PF(WF, !hF)
                    },
                    children: uF(hF ? `${MR}coreBankResume` : `${MR}coreBankStop`)
                  })]
                })]
              }, WF)
            }))
          }), (0, Qu.jsx)("p", {
            className: "Baf2CoreHint",
            children: uF(`${MR}coreBankNote`)
          })]
        })]
      })
    }
    const GR = "buildAFactory2Game:";

    function zi(FF) {
      const WF = Math.max(0, Math.floor(FF));
      return `${Math.floor(WF/60)}:${String(WF%60).padStart(2,"0")}`
    }

    function IR(FF) {
      let {
        item: WF
      } = FF;
      return (0, Qu.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, Qu.jsx)(ku.b, {
          itemName: WF,
          amount: 0
        })
      })
    }

    function fR() {
      return (0, Qu.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, Qu.jsx)(au.e, {
          name: "bolt"
        })
      })
    }

    function yi(FF) {
      let {
        charge: WF,
        hint: SF,
        itemNames: CF
      } = FF;
      const AF = Zh(),
        {
          t: uF
        } = (0, TA.B)(),
        [hF, bW, dF, PF, RF, iW, eF] = WF,
        [EF, QF] = function(FF) {
          var WF;
          let SF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Vh,
            CF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [AF, uF] = YR((() => FF), FF, SF, CF);
          return [xi(null !== (WF = AF.get("")) && void 0 !== WF ? WF : null, FF), FF => {
            uF("", FF)
          }]
        }(eF),
        rW = EF === eF ? iW : !EF,
        gW = PF >= RF,
        tW = hF.find((FF => {
          let [, WF, SF] = FF;
          return SF < .9 * WF
        }));
      let TF = `${GR}coreChargeWaiting`,
        aW = {};
      return gW ? TF = `${GR}coreChargeDone` : EF ? TF = `${GR}coreChargeStopped` : rW && SF ? (TF = `${GR}${SF[0]}`, aW = {
        item: BA(uF, SF[1])
      }) : rW && tW ? (TF = `${GR}coreChargeShort`, aW = {
        item: BA(uF, tW[0])
      }) : rW && bW > 0 && !dF ? TF = `${GR}coreChargePower` : rW && (TF = `${GR}coreChargeRunning`), (0, Qu.jsxs)("div", {
        className: QA()("Baf2CoreCharge", {
          Waiting: !rW && !gW,
          Done: gW
        }),
        children: [(0, Qu.jsxs)("h4", {
          children: [uF(`${GR}coreChargeTitle`), (0, Qu.jsx)("span", {
            children: uF(`${GR}coreChargeProgress`, {
              done: zi(PF),
              need: zi(RF)
            })
          })]
        }), (0, Qu.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, Qu.jsx)("div", {
            style: {
              width: 100 * Math.min(PF, RF) / RF + "%"
            }
          })
        }), (0, Qu.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [hF.map((FF => {
            var WF;
            let [SF, AF, hF] = FF;
            const bW = hF >= .9 * AF;
            return (0, Qu.jsxs)("li", {
              className: QA()({
                Done: bW,
                Short: rW && !bW
              }),
              children: [(0, Qu.jsx)(IR, {
                item: SF
              }), (0, Qu.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, Qu.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, Qu.jsx)(qu.d, {
                    text: null !== (WF = CF[SF]) && void 0 !== WF ? WF : SF
                  }), (0, Qu.jsx)("span", {
                    children: uF(`${GR}coreChargeItem`, {
                      now: String(hF),
                      need: String(AF)
                    })
                  })]
                }), (0, Qu.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, Qu.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*hF/AF)}%`
                    }
                  })
                })]
              })]
            }, SF)
          })), bW > 0 && (0, Qu.jsxs)("li", {
            className: QA()("Baf2CoreChargePower", {
              Short: rW && !dF
            }),
            children: [(0, Qu.jsx)(fR, {}), (0, Qu.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, Qu.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, Qu.jsx)("span", {
                  children: uF(`${GR}coreChargePowerRow`, {
                    power: JF(bW)
                  })
                })
              })
            })]
          })]
        }), (0, Qu.jsx)("p", {
          className: "Baf2CoreHint",
          children: uF(TF, aW)
        }), !gW && (rW || EF) && (0, Qu.jsx)("button", {
          type: "button",
          className: QA()("Baf2CoreChargeToggle", {
            Stopped: EF
          }),
          onClick: () => {
            AF.send(VF), QF(!EF)
          },
          children: uF(EF ? `${GR}coreChargeRestart` : `${GR}coreChargeStop`)
        })]
      })
    }

    function sR(FF) {
      let {
        charge: WF,
        reached: SF,
        itemNames: CF
      } = FF;
      const {
        t: AF
      } = (0, TA.B)();
      return (0, Qu.jsxs)("div", {
        className: QA()("Baf2CoreCharge", {
          Done: SF
        }),
        children: [(0, Qu.jsxs)("h4", {
          children: [AF(`${GR}coreChargeTitle`), (0, Qu.jsx)("span", {
            children: AF(`${GR}coreChargeSpecTime`, {
              time: zi(WF.seconds)
            })
          })]
        }), (0, Qu.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [WF.items.map((FF => {
            var WF;
            let {
              item: uF,
              amount: hF
            } = FF;
            return (0, Qu.jsxs)("li", {
              className: QA()({
                Done: SF
              }),
              children: [(0, Qu.jsx)(IR, {
                item: uF
              }), (0, Qu.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, Qu.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, Qu.jsx)(qu.d, {
                    text: null !== (WF = CF[uF]) && void 0 !== WF ? WF : uF
                  }), (0, Qu.jsx)("span", {
                    children: AF(`${GR}coreChargeSpecItem`, {
                      need: String(hF)
                    })
                  })]
                })
              })]
            }, uF)
          })), WF.powerPerS > 0 && (0, Qu.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, Qu.jsx)(fR, {}), (0, Qu.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, Qu.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, Qu.jsx)("span", {
                  children: AF(`${GR}coreChargePowerRow`, {
                    power: JF(WF.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const nR = "buildAFactory2Game:";

    function HR(FF) {
      let {
        def: WF,
        reached: SF,
        banked: CF,
        itemNames: AF
      } = FF;
      const {
        t: uF
      } = (0, TA.B)();
      return (0, Qu.jsx)("ul", {
        className: "Baf2CoreCost",
        children: WF.cost.map((FF => {
          let {
            item: WF,
            amount: hF
          } = FF;
          const bW = SF ? 0 : CF(WF);
          return (0, Qu.jsx)("li", {
            children: (0, Qu.jsx)(VR, {
              item: WF,
              itemNames: AF,
              children: (0, Qu.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: bW > 0 ? uF(`${nR}coreBankedFor`, {
                  amount: String(bW),
                  total: String(hF)
                }) : `\xd7${hF}`
              })
            })
          }, WF)
        }))
      })
    }

    function KR(FF, WF) {
      if (WF >= RF()) return FF(`${nR}coreMaxTier`);
      const SF = PF[WF + 1];
      return SF && !SF.startsWith("upgradeCore") ? FF(`${nR}coreGateQuest`, {
        quest: FF(`${nR}quest_${SF}`)
      }) : FF(`${nR}coreGateClosed`)
    }

    function wR() {
      const {
        t: FF
      } = (0, TA.B)(), WF = Zh(), SF = (0, CF.useRef)(null), AF = (0, CF.useRef)(Date.now());
      return IP(!0, SF), (0, Qu.jsx)("div", {
        ref: SF,
        className: "Baf2CoreGrow",
        children: (0, Qu.jsx)(ib.k, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - AF.current >= 600 && WF.send(aW)
          },
          children: FF(`${nR}coreGrow`)
        })
      })
    }

    function XR(FF) {
      let {
        message: WF,
        itemNames: SF,
        next: CF
      } = FF;
      const AF = Zh(),
        {
          t: uF
        } = (0, TA.B)(),
        hF = WF.baf2CoreTier,
        bW = WF.baf2CoreReady,
        dF = WF.baf2CoreNeeds.filter((FF => {
          let [, WF, SF, CF] = FF;
          return CF > 0 && WF < SF
        })),
        PF = WF.baf2CoreNeeds.every((FF => {
          let [, WF, SF] = FF;
          return WF >= SF
        })),
        RF = WF.baf2CoreKeep;
      return (0, Qu.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, Qu.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [bW && (0, Qu.jsx)(wR, {}), (0, Qu.jsx)("h3", {
            children: uF(`${nR}coreBring`)
          }), (0, Qu.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: WF.baf2CoreNeeds.map((FF => {
              let [WF, CF, hF, bW] = FF;
              return (0, Qu.jsxs)("li", {
                className: QA()({
                  Done: CF >= hF
                }),
                children: [(0, Qu.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, Qu.jsx)(ku.b, {
                    itemName: WF,
                    amount: 0
                  })
                }), (0, Qu.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, Qu.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, Qu.jsx)(qu.d, {
                      text: SF[WF]
                    }), (0, Qu.jsxs)("span", {
                      children: [CF, "/", hF]
                    })]
                  }), (0, Qu.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, Qu.jsx)("div", {
                      style: {
                        width: 100 * CF / hF + "%"
                      }
                    }), bW > 0 && (0, Qu.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * bW / hF + "%"
                      }
                    })]
                  })]
                }), bW > 0 && CF < hF && (0, Qu.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    AF.send(`${qW} ${WF}`)
                  },
                  children: uF(`${nR}coreDeposit`, {
                    amount: String(bW)
                  })
                })]
              }, WF)
            }))
          }), WF.baf2CoreCharge && (0, Qu.jsx)(yi, {
            charge: WF.baf2CoreCharge,
            hint: WF.baf2CoreChargeHint,
            itemNames: SF
          }), !bW && dF.length > 1 && (0, Qu.jsx)(ib.k, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              AF.send(aW)
            },
            children: uF(`${nR}coreHandOver`)
          }), !bW && void 0 !== RF && (0, Qu.jsx)("p", {
            className: "Baf2CoreHint",
            children: uF(`${nR}coreKeepRest`, {
              item: BA(uF, RF)
            })
          }), !bW && !PF && 0 === dF.length && void 0 === RF && (0, Qu.jsx)("p", {
            className: "Baf2CoreHint",
            children: uF(`${nR}coreNothingHeld`)
          }), (0, Qu.jsx)(ci, {
            message: WF,
            itemNames: SF
          })]
        }), (0, Qu.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, Qu.jsx)("h3", {
            children: uF(`${nR}coreRewards`)
          }), (0, Qu.jsx)(mi, {
            def: CF,
            tier: hF + 1,
            itemNames: SF
          })]
        })]
      })
    }

    function UR(FF) {
      let {
        message: WF,
        itemNames: SF,
        shown: CF
      } = FF;
      const {
        t: AF
      } = (0, TA.B)(), uF = WF.baf2CoreTier, hF = tW(CF), bW = CF <= uF, dF = new Map(WF.baf2CoreBanked), PF = !TF(uF, NF(WF)) && CF === uF;
      return (0, Qu.jsxs)("div", {
        className: QA()("Baf2CoreBody", {
          Locked: !bW
        }),
        children: [(0, Qu.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, Qu.jsx)("h3", {
            children: AF(bW ? `${nR}coreItTook` : `${nR}coreItNeeds`)
          }), 0 === hF.cost.length && (0, Qu.jsx)("p", {
            className: "Baf2CoreHint",
            children: AF(`${nR}coreTierStart`)
          }), hF.cost.length > 0 && (0, Qu.jsx)(HR, {
            def: hF,
            reached: bW,
            banked: FF => {
              var WF;
              return function(FF, WF, SF, CF) {
                let AF = FF;
                for (let hF = WF + 2; hF <= SF; hF++) {
                  var uF;
                  const FF = tW(hF).cost.find((FF => FF.item === CF)),
                    WF = Math.min(AF, null !== (uF = null === FF || void 0 === FF ? void 0 : FF.amount) && void 0 !== uF ? uF : 0);
                  if (hF === SF) return WF;
                  AF -= WF
                }
                return 0
              }(null !== (WF = dF.get(FF)) && void 0 !== WF ? WF : 0, uF, CF, FF)
            },
            itemNames: SF
          }), hF.charge && (0, Qu.jsx)(sR, {
            charge: hF.charge,
            reached: bW,
            itemNames: SF
          }), PF && (0, Qu.jsxs)(Qu.Fragment, {
            children: [(0, Qu.jsx)("p", {
              className: "Baf2CoreHint",
              children: KR(AF, uF)
            }), (0, Qu.jsx)(ci, {
              message: WF,
              itemNames: SF
            })]
          })]
        }), (0, Qu.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, Qu.jsx)("h3", {
            children: AF(bW ? `${nR}coreGave` : `${nR}coreLockedRewards`)
          }), (0, Qu.jsx)(mi, {
            def: hF,
            tier: CF,
            itemNames: SF
          })]
        })]
      })
    }

    function BR(FF, WF) {
      const {
        key: SF,
        params: CF
      } = EF(WF - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return FF(`${nR}${SF}`, CF)
    }
    const ji = "buildAFactory2Game:",
      vi = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      JR = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function pR(FF) {
      let {
        view: WF,
        close: SF,
        askIslands: AF
      } = FF;
      const {
        t: uF
      } = (0, TA.B)(), [hF, bW] = (0, CF.useState)(!1);
      (0, CF.useEffect)((() => {
        if (!hF) return;
        const FF = window.setTimeout((() => {
          bW(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(FF)
        }
      }), [hF]);
      const {
        message: dF,
        itemNames: PF
      } = WF, RF = dF.baf2CoreTier, iW = tW(RF), eF = TF(RF, NF(dF)), [rW, gW] = dF.baf2CoreMachines, [aW, kW] = dF.baf2CoreBelts, qW = dF.baf2CoreStorage, VF = dF.baf2CoreReady, [DF, LF] = (0, CF.useState)(null), mW = (null === DF || void 0 === DF ? void 0 : DF.at) === RF && DF.ready === VF ? DF.tier : eF ? RF + 1 : RF;
      let OF = "coreTierLocked";
      mW <= RF ? OF = "coreTierReached" : mW === RF + 1 && (OF = "coreTierNext");
      const xW = uF(`${ji}${tW(mW).nameKey}`),
        ZF = mW === RF + 1 ? eF : null,
        oF = EF(mW, {
          tier: OF,
          stage: vi[OF],
          atomic: JR[OF]
        }),
        YF = uF(`${ji}${oF.key}`, {
          ...oF.params,
          name: xW
        }),
        MF = EF(RF, QF),
        cW = uF(`${ji}${MF.key}`, {
          ...MF.params,
          name: uF(`${ji}${iW.nameKey}`)
        });
      return (0, Qu.jsx)(Rh.b, {
        close: SF,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, Qu.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, Qu.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Qu.jsxs)("div", {
              children: [(0, Qu.jsx)("h2", {
                id: "baf2CoreTitle",
                children: uF(`${ji}coreTitle`)
              }), void 0 !== dF.baf2CoreIslandName && (0, Qu.jsx)("p", {
                className: "Baf2CoreIsland",
                children: dF.baf2CoreIslandName
              }), (0, Qu.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, Qu.jsx)("span", {
                  children: cW
                }), (0, Qu.jsx)("span", {
                  className: QA()({
                    Full: rW >= gW
                  }),
                  children: uF(`${ji}coreMachineCount`, {
                    amount: String(rW),
                    total: String(gW)
                  })
                }), (0, Qu.jsx)("span", {
                  className: QA()({
                    Full: aW >= kW
                  }),
                  children: uF(`${ji}coreBeltCount`, {
                    amount: String(aW),
                    total: String(kW)
                  })
                }), void 0 !== qW && (0, Qu.jsx)("span", {
                  className: QA()({
                    Full: qW[0] >= qW[1]
                  }),
                  children: uF(`${ji}coreStorageCount`, {
                    amount: String(qW[0]),
                    total: String(qW[1])
                  })
                })]
              })]
            }), (0, Qu.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [dF.baf2CoreIslands && (0, Qu.jsx)(ib.e, {
                className: "Baf2CoreIslandsButton",
                disabled: hF,
                onClick: () => {
                  bW(!0), AF()
                },
                children: uF(`${ji}islandsOpenButton`)
              }), (0, Qu.jsx)(ib.h, {
                onClick: SF
              })]
            })]
          }), (0, Qu.jsx)(ki, {
            tier: RF,
            shown: mW,
            lW: FF => {
              LF({
                tier: FF,
                at: RF,
                ready: VF
              })
            }
          }), (0, Qu.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [YF, mW > RF + 1 && (0, Qu.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: BR(uF, mW)
            })]
          }), 6 === mW && mW > RF && (0, Qu.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: uF(`${ji}coreStagesNote`)
          }), 11 === mW && mW > RF && (0, Qu.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: uF(`${ji}coreAtomicNote`)
          }), ZF && (0, Qu.jsx)(XR, {
            message: dF,
            itemNames: PF,
            next: ZF
          }), !ZF && (0, Qu.jsx)(UR, {
            message: dF,
            itemNames: PF,
            shown: mW
          })]
        })
      })
    }
    const lR = {
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
    const Fi = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: pA,
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

    function Wi(FF) {
      return FF.baf2DropCometOreOnly ? "dropCometOre" : FF.baf2DropCometIsotope ? "seed" === FF.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function Si(FF) {
      let {
        message: WF,
        quests: SF,
        close: AF,
        AC: uF
      } = FF;
      const hF = Zh(),
        {
          t: bW
        } = (0, TA.B)(),
        dF = (0, XP.i)(mu, SF.get()),
        PF = function(FF) {
          var WF;
          if (!MF(FF.tutorial)) return null;
          const SF = FF.rows.find((FF => FF.current)),
            CF = SF ? lR[SF.key] : void 0;
          return null !== (WF = null !== CF && void 0 !== CF ? CF : FF.side ? lR[FF.side.row.key] : void 0) && void 0 !== WF ? WF : null
        }(dF),
        RF = null === dF.tier || Wu(dF.tier),
        iW = RF ? Fi : Fi.filter((FF => {
          let {
            item: WF
          } = FF;
          return WF !== pA
        })),
        [eF, EF] = (0, CF.useState)(null),
        QF = null !== eF && void 0 !== eF ? eF : !WF.baf2DropFoundSalvage && RF,
        rW = WF.baf2DropRuinDistance,
        gW = WF.baf2DropComet,
        tW = WF.baf2DropOldWorks,
        TF = WF.baf2DropGrove,
        aW = function(FF) {
          return 2 + Number(void 0 !== FF.baf2DropComet) + Number(!!FF.baf2DropOwedComet || void 0 !== FF.baf2DropOwedWaitMinutes) + Number(void 0 !== FF.baf2DropDigDistance) + Number(void 0 !== FF.baf2DropOldWorks) + Number(void 0 !== FF.baf2DropGrove)
        }(WF),
        kW = FF => {
          hF.send(function(FF) {
            return `baf2drop ${FF}`
          }(FF)), uF()
        };
      let qW = bW("buildAFactory2Game:dropRuinNone");
      if (null !== rW) {
        let FF = WF.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        WF.baf2DropRuinOldWorks && (FF = "dropRuinOldWorks");
        const SF = void 0 === WF.baf2DropRuinCluster ? bW("buildAFactory2Game:dropRuinOpen") : bW("buildAFactory2Game:dropRuinCluster", {
          count: String(WF.baf2DropRuinCluster)
        });
        qW = `${bW(`buildAFactory2Game:${FF}`,{distance:String(rW)})} ${SF}`
      }
      let VF = bW("buildAFactory2Game:dropBelowDescription");
      void 0 !== WF.baf2DropBelowLook && (VF = bW("buildAFactory2Game:dropBelowLook", {
        look: bW(WF.baf2DropBelowLook)
      }));
      const NF = "buildAFactory2Game:wildsRegion_survivorGrove" === WF.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        DF = Ru(bW, 60 * function(FF) {
          const [WF, SF] = (0, CF.useState)((() => Date.now())), [AF, uF] = (0, CF.useState)(WF);
          return (0, CF.useEffect)((() => {
            const FF = Date.now();
            SF(FF), uF(FF)
          }), [FF]), (0, CF.useEffect)((() => {
            const FF = window.setInterval((() => {
              uF(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(FF)
            }
          }), []), Math.max(1, FF.baf2DropRenewMinutes - Math.floor((AF - WF) / 6e4))
        }(WF)),
        LF = function(FF, WF, SF) {
          return "ruin" === FF && !SF || "owed" === FF && !WF.baf2DropOwedComet ? null : FF
        }(PF, WF, null !== rW),
        mW = function(FF) {
          for (var WF = arguments.length, SF = new Array(WF > 1 ? WF - 1 : 0), CF = 1; CF < WF; CF++) SF[CF - 1] = arguments[CF];
          return QA()("Baf2DropTile", ...SF, {
            Wanted: LF === FF
          })
        };
      return (0, Qu.jsx)(Rh.b, {
        close: AF,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Qu.jsxs)("section", {
          className: QA()("Baf2Panel Baf2DropMap", {
            Many: aW >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, Qu.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Qu.jsxs)("div", {
              children: [(0, Qu.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: bW("buildAFactory2Game:dropMapTitle")
              }), (0, Qu.jsx)("p", {
                children: bW("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, Qu.jsx)(ib.h, {
              onClick: AF
            })]
          }), (0, Qu.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== gW && (0, Qu.jsxs)(ib.u, {
              className: mW("comet", "Baf2DropComet"),
              onClick: () => {
                kW("comet")
              },
              children: [(0, Qu.jsx)("strong", {
                children: bW("buildAFactory2Game:dropComet")
              }), (0, Qu.jsx)("span", {
                children: bW(`buildAFactory2Game:${Wi(WF)}`, {
                  distance: String(gW)
                })
              })]
            }), WF.baf2DropOwedComet && (0, Qu.jsxs)(ib.u, {
              className: mW("owed", "Baf2DropComet"),
              onClick: () => {
                kW("owed")
              },
              children: [(0, Qu.jsx)("strong", {
                children: bW("buildAFactory2Game:dropOwedComet")
              }), (0, Qu.jsx)("span", {
                children: WF.baf2DropOwedIsotope ? bW("buildAFactory2Game:dropOwedIsotopeDescription") : bW("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== WF.baf2DropOwedWaitMinutes && (0, Qu.jsxs)(ib.u, {
              className: mW("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, Qu.jsx)("strong", {
                children: bW("buildAFactory2Game:dropOwedComet")
              }), (0, Qu.jsx)("span", {
                children: bW("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(WF.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, Qu.jsxs)(ib.e, {
              className: mW("below"),
              onClick: () => {
                kW("below")
              },
              children: [(0, Qu.jsx)("strong", {
                children: bW("buildAFactory2Game:dropBelow")
              }), (0, Qu.jsx)("span", {
                children: VF
              })]
            }), void 0 !== WF.baf2DropDigDistance && (0, Qu.jsxs)(ib.r, {
              className: mW("dig"),
              onClick: () => {
                kW("dig")
              },
              children: [(0, Qu.jsx)("strong", {
                children: bW("buildAFactory2Game:dropDig")
              }), (0, Qu.jsx)("span", {
                children: bW("buildAFactory2Game:dropDigDescription", {
                  distance: String(WF.baf2DropDigDistance),
                  y: Pu(WF.baf2DropDigY)
                })
              })]
            }), void 0 !== TF && (0, Qu.jsxs)(ib.r, {
              className: mW("grove", "Baf2DropGrove"),
              onClick: () => {
                kW("grove")
              },
              children: [(0, Qu.jsx)("strong", {
                children: bW("buildAFactory2Game:dropGrove")
              }), (0, Qu.jsx)("span", {
                children: bW(`buildAFactory2Game:${NF}`, {
                  distance: String(TF)
                })
              })]
            }), (0, Qu.jsxs)(ib.k, {
              className: mW("ruin"),
              disabled: null === rW,
              onClick: () => {
                kW("ruin")
              },
              children: [(0, Qu.jsx)("strong", {
                children: bW("buildAFactory2Game:dropRuin")
              }), (0, Qu.jsx)("span", {
                children: qW
              })]
            }), void 0 !== tW && (0, Qu.jsxs)(ib.E, {
              className: mW("works"),
              onClick: () => {
                kW("works")
              },
              children: [(0, Qu.jsx)("strong", {
                children: bW("buildAFactory2Game:dropOldWorks")
              }), (0, Qu.jsx)("span", {
                children: bW("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(tW)
                })
              })]
            })]
          }), (0, Qu.jsx)("p", {
            className: "Baf2DropRenew",
            children: bW("buildAFactory2Game:dropRenew", {
              time: DF
            })
          }), (0, Qu.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: QF,
            onToggle: FF => {
              FF.currentTarget.open !== QF && EF(FF.currentTarget.open)
            },
            children: [(0, Qu.jsx)("summary", {
              children: bW("buildAFactory2Game:dropSalvageWhat")
            }), (0, Qu.jsx)("p", {
              children: bW("buildAFactory2Game:dropSalvageIntro")
            }), (0, Qu.jsx)("ul", {
              children: iW.map((FF => {
                let {
                  item: WF,
                  nameKey: SF,
                  useKey: CF,
                  params: AF
                } = FF;
                return (0, Qu.jsxs)("li", {
                  children: [(0, Qu.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, Qu.jsx)(ku.b, {
                      itemName: WF,
                      amount: 0
                    })
                  }), (0, Qu.jsxs)("span", {
                    children: [(0, Qu.jsx)("strong", {
                      children: bW(SF)
                    }), ": ", bW(CF, AF)]
                  })]
                }, WF)
              }))
            })]
          })]
        })
      })
    }
    const Ci = "buildAFactory2Game:";

    function Ai(FF, WF) {
      return FF.sendIslandEdit(`baf2coopleave ${WF.baf2IslandId}`)
    }

    function ui(FF) {
      let {
        card: WF,
        canRename: SF,
        done: AF,
        t: uF
      } = FF;
      const hF = Zh(),
        [bW, dF] = (0, CF.useState)(WF.baf2IslandName),
        PF = iR(bW),
        RF = "" === PF || eP(PF),
        iW = () => {
          !RF && SF && (PF !== WF.baf2IslandName ? AF(hF.sendIslandEdit(`baf2islandrename ${WF.baf2IslandId} ${PF}`)) : AF(null))
        },
        eF = () => {
          AF(null)
        };
      return (0, Qu.jsxs)("div", {
        className: "Baf2IslandForm",
        ...GP(eF),
        children: [(0, Qu.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [uF(`${Ci}islandsRenameLabel`), (0, Qu.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: bW,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: zR,
            onChange: FF => {
              dF(FF.target.value)
            },
            ...cR(iW, eF)
          })]
        }), "" === PF && (0, Qu.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: uF(`${Ci}islandsRenameEmpty`)
        }), eP(PF) && (0, Qu.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: uF(`${Ci}islandsNameReserved`)
        }), (0, Qu.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, Qu.jsx)(ib.r, {
            disabled: RF || !SF,
            onClick: iW,
            children: uF(`${Ci}islandsRenameSave`)
          }), (0, Qu.jsx)(ib.e, {
            onClick: eF,
            children: uF(`${Ci}islandsCancel`)
          })]
        })]
      })
    }

    function hiF(FF) {
      let {
        card: WF,
        canDelete: SF,
        done: AF,
        t: uF
      } = FF;
      const hF = Zh(),
        [bW, dF] = (0, CF.useState)(""),
        PF = function(FF, WF) {
          return iR(FF).toLowerCase() === iR(WF).toLowerCase()
        }(bW, WF.baf2IslandName),
        RF = () => {
          PF && SF && AF(hF.sendIslandEdit(`baf2islanddelete ${WF.baf2IslandId}`))
        },
        iW = () => {
          AF(null)
        },
        eF = NP("name"),
        [EF, QF = ""] = uF(`${Ci}islandsDeleteConfirm`, {
          name: eF
        }).split(eF);
      return (0, Qu.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...GP(iW),
        children: [(0, Qu.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, Qu.jsxs)("span", {
            children: [EF, (0, Qu.jsx)("strong", {
              children: WF.baf2IslandName
            }), QF]
          }), (0, Qu.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: bW,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: zR,
            onChange: FF => {
              dF(FF.target.value)
            },
            ...cR(RF, iW)
          })]
        }), ZP(WF) && (0, Qu.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: uF(`${Ci}islandsDeleteLeftBack`)
        }), (0, Qu.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, Qu.jsx)(ib.E, {
            disabled: !PF || !SF,
            onClick: RF,
            children: uF(`${Ci}islandsDeleteForGood`)
          }), (0, Qu.jsx)(ib.e, {
            onClick: iW,
            children: uF(`${Ci}islandsCancel`)
          })]
        })]
      })
    }

    function be(FF) {
      let {
        members: WF,
        t: SF
      } = FF;
      const CF = WF.length;
      return (0, Qu.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, Qu.jsxs)("span", {
          children: [1 === CF ? SF(`${Ci}islandsPlayersOne`) : SF(`${Ci}islandsPlayers`, {
            count: String(CF)
          }), " "]
        }), WF.map(((FF, WF) => (0, Qu.jsxs)("span", {
          className: QA()("Baf2IslandMember", {
            Here: FF.baf2MemberHere
          }),
          title: FF.baf2MemberHere ? SF(`${Ci}islandsPlayerHere`) : void 0,
          children: [FF.baf2MemberName, WF < CF - 1 ? ", " : ""]
        }, FF.baf2MemberKey)))]
      })
    }

    function di(FF) {
      let {
        card: WF,
        answered: SF,
        nowMs: AF,
        t: uF
      } = FF;
      const hF = Zh(),
        [bW, dF] = (0, CF.useState)(new Map),
        PF = ZP(WF);
      if (!PF) return null;
      return (0, Qu.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, Qu.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: uF(`${Ci}islandsLeftTitle`)
        }), (0, Qu.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: PF.left.map((FF => {
            const CF = FF.baf2LeftKey,
              RF = YP(bW.get(CF), SF, AF),
              iW = function(FF) {
                return 1 === FF ? [`${bR}islandsLeftItemsOne`] : [`${bR}islandsLeftItems`, {
                  count: String(FF)
                }]
              }(FF.baf2LeftItems);
            return (0, Qu.jsx)("li", {
              className: QA()("Baf2IslandPerson", {
                Pending: RF
              }),
              children: (0, Qu.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, Qu.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: FF.baf2LeftName
                }), (0, Qu.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: uF(iW[0], iW[1])
                }), PF.claim && (0, Qu.jsx)(ib.r, {
                  className: "Baf2IslandPersonButton",
                  disabled: RF,
                  onClick: () => {
                    (FF => {
                      const SF = hF.sendIslandEdit(`baf2coopclaim ${WF.baf2IslandId} ${FF}`);
                      dF((WF => new Map(WF).set(FF, {
                        atMs: Date.now(),
                        answer: SF
                      })))
                    })(CF)
                  },
                  children: uF(`${Ci}islandsClaim`)
                })]
              })
            }, CF)
          }))
        }), PF.goThere && (0, Qu.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: uF(`${Ci}islandsClaimGoThere`)
        })]
      })
    }

    function Pi(FF) {
      let {
        card: WF,
        view: SF,
        blocked: AF,
        maxIslands: uF,
        answered: hF,
        nowMs: bW,
        done: dF,
        openSocial: PF,
        t: RF
      } = FF;
      const iW = Zh(),
        [eF, EF] = (0, CF.useState)(new Map),
        [QF, rW] = (0, CF.useState)(new Map),
        [gW, tW] = (0, CF.useState)(null),
        TF = (0, CF.useRef)(null);
      yR(TF);
      const aW = WF.baf2IslandId,
        kW = WF.baf2IslandCoop,
        qW = null !== kW && void 0 !== kW && kW.baf2CoopMembers.some((FF => FF.baf2MemberKey === gW)) ? gW : null,
        VF = function(FF, WF) {
          const SF = FF.baf2IslandCoop;
          return SF && oP(SF) || null !== WF ? void 0 : FF.baf2IslandInvitable
        }(WF, AF),
        NF = function(FF, WF) {
          const SF = FF.baf2IslandCoop;
          return SF && oP(SF) ? {
            key: `${bR}islandsCoopFull`,
            params: {
              max: String(SF.baf2CoopMax)
            }
          } : void 0 !== FF.baf2IslandInvitable && null === WF || SF && !SF.baf2CoopManageHere ? null : "degraded" === WF || "stuck" === WF ? {
            key: `${bR}islandsInviteNotLoaded`
          } : null === WF || function(FF) {
            return "notHome" === FF || "wilds" === FF || "visiting" === FF
          }(WF) || gR(WF) ? {
            key: `${bR}islandsInviteGoThere`
          } : {
            key: `${bR}islandsInviteBusy`
          }
        }(WF, AF),
        DF = () => {
          var FF;
          tW(null), null === (FF = TF.current) || void 0 === FF || FF.focus()
        };
      return (0, Qu.jsxs)("div", {
        ref: TF,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...GP(null === qW ? dF : DF),
        children: [kW && (0, Qu.jsxs)(Qu.Fragment, {
          children: [(0, Qu.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: RF(`${Ci}islandsPlayersTitle`, {
              count: String(kW.baf2CoopMembers.length),
              max: String(kW.baf2CoopMax)
            })
          }), (0, Qu.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: kW.baf2CoopMembers.map(((FF, WF) => {
              const CF = FF.baf2MemberKey,
                AF = YP(eF.get(CF), hF, bW);
              return (0, Qu.jsxs)("li", {
                className: QA()("Baf2IslandPerson", {
                  Pending: AF
                }),
                children: [(0, Qu.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, Qu.jsx)("span", {
                    className: QA()("Baf2IslandPersonName", {
                      Here: FF.baf2MemberHere
                    }),
                    children: FF.baf2MemberName
                  }), FF.baf2MemberHere && (0, Qu.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: RF(`${Ci}islandsPlayerHere`)
                  }), 0 === WF && (0, Qu.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: RF(`${Ci}islandsPlayerOwner`)
                  }), SF.remove && WF > 0 && !AF && qW !== CF && (0, Qu.jsx)(ib.I, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var FF;
                      tW(CF), null === (FF = TF.current) || void 0 === FF || FF.focus()
                    },
                    children: RF(`${Ci}islandsRemove`)
                  })]
                }), qW === CF && (0, Qu.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, Qu.jsx)("p", {
                    children: DP(RF, `${Ci}islandsRemoveConfirm`, {
                      player: FF.baf2MemberName
                    })
                  }), (0, Qu.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, Qu.jsx)(ib.E, {
                      onClick: () => {
                        (FF => {
                          const WF = iW.sendIslandEdit(`baf2coopremove ${aW} ${FF.baf2MemberKey}`);
                          EF((SF => new Map(SF).set(FF.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: WF
                          }))), DF()
                        })(FF)
                      },
                      children: RF(`${Ci}islandsRemoveYes`)
                    }), (0, Qu.jsx)(ib.e, {
                      onClick: DF,
                      children: RF(`${Ci}islandsCancel`)
                    })]
                  })]
                })]
              }, CF)
            }))
          })]
        }), (void 0 !== VF || null !== NF) && (0, Qu.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: RF(`${Ci}islandsInviteTitle`)
        }), !kW && (void 0 !== VF || null !== NF) && (0, Qu.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: RF(`${Ci}islandsInviteShareNote`)
        }), 0 === (null === VF || void 0 === VF ? void 0 : VF.length) && (0, Qu.jsx)(Ri, {
          openSocial: PF,
          t: RF
        }), void 0 !== VF && VF.length > 0 && (0, Qu.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: VF.map((FF => {
            const WF = !0 === FF.baf2InvitableSent || YP(QF.get(FF.baf2InvitableId), hF, bW);
            return (0, Qu.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, Qu.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, Qu.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: FF.baf2InvitableName
                }), FF.baf2InvitableFull && !WF && (0, Qu.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: RF(`${Ci}islandsInviteTheirFull`, {
                    max: String(uF)
                  })
                }), (WF || !FF.baf2InvitableFull) && (0, Qu.jsx)(ib.r, {
                  className: "Baf2IslandPersonButton",
                  disabled: WF,
                  onClick: () => {
                    (FF => {
                      const WF = iW.sendIslandEdit(`baf2coopinvite ${aW} ${FF}`);
                      rW((SF => new Map(SF).set(FF, {
                        atMs: Date.now(),
                        answer: WF
                      })))
                    })(FF.baf2InvitableId)
                  },
                  children: RF(WF ? `${Ci}islandsInvited` : `${Ci}islandsInvite`)
                })]
              })
            }, FF.baf2InvitableId)
          }))
        }), NF && (0, Qu.jsx)(HP, {
          note: NF,
          t: RF
        }), (0, Qu.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, Qu.jsx)(ib.e, {
            onClick: dF,
            children: RF(`${Ci}islandsDone`)
          })
        })]
      })
    }

    function Ri(FF) {
      let {
        openSocial: WF,
        t: SF
      } = FF;
      return (0, Qu.jsxs)(Qu.Fragment, {
        children: [(0, Qu.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: SF(WF ? `${Ci}islandsInviteNobody` : `${Ci}islandsInviteNobodyGuest`)
        }), WF && (0, Qu.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, Qu.jsx)(ib.e, {
            onClick: WF,
            children: SF("socialBar:social")
          })
        })]
      })
    }

    function ie(FF) {
      var WF, SF;
      let {
        card: AF,
        canLeave: uF,
        done: hF,
        t: bW
      } = FF;
      const dF = Zh(),
        PF = (0, CF.useRef)(null);
      yR(PF);
      const RF = () => {
        hF(null)
      };
      return (0, Qu.jsxs)("div", {
        ref: PF,
        tabIndex: -1,
        className: "Baf2IslandForm Leave",
        ...GP(RF),
        children: [(0, Qu.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: DP(bW, `${Ci}islandsLeaveConfirm`, {
            island: AF.baf2IslandName,
            owner: null !== (WF = null === (SF = AF.baf2IslandCoop) || void 0 === SF ? void 0 : SF.baf2CoopOwner) && void 0 !== WF ? WF : ""
          })
        }), (0, Qu.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, Qu.jsx)(ib.E, {
            disabled: !uF,
            onClick: () => {
              uF && hF(Ai(dF, AF))
            },
            children: bW(`${Ci}islandsLeaveYes`)
          }), (0, Qu.jsx)(ib.e, {
            onClick: RF,
            children: bW(`${Ci}islandsCancel`)
          })]
        })]
      })
    }

    function ei(FF) {
      return "hidden" !== FF
    }

    function Ei(FF) {
      let {
        card: WF,
        keepOwn: SF,
        blocked: AF,
        maxIslands: uF,
        serverNowMs: hF,
        nowMs: bW,
        actions: dF,
        full: PF,
        waits: RF,
        answered: iW,
        mode: eF,
        setMode: EF,
        pending: QF,
        onSent: rW,
        switchTo: gW,
        AC: tW,
        coopOn: TF,
        openSocial: aW,
        t: kW
      } = FF;
      const qW = Zh(),
        VF = WF.baf2IslandActive,
        NF = VF ? null : function(FF, WF) {
          if (FF <= 0) return null;
          const SF = WF - FF;
          if (SF < hu) return [`${bR}islandsPlayedJustNow`];
          if (SF < dP) return [`${bR}islandsPlayedMinutes`, {
            minutes: String(Math.floor(SF / hu))
          }];
          if (SF < PP) return [`${bR}islandsPlayedHours`, {
            hours: String(Math.floor(SF / dP))
          }];
          const CF = Math.floor(SF / PP);
          return 1 === CF ? [`${bR}islandsPlayedDay`] : [`${bR}islandsPlayedDays`, {
            days: String(CF)
          }]
        }(WF.baf2IslandLastPlayedMs, hF),
        DF = void 0 === (LF = WF.baf2IslandItems) ? null : 0 === LF ? [`${bR}islandsItemsNone`] : 1 === LF ? [`${bR}islandsItemsOne`] : [`${bR}islandsItems`, {
          count: String(LF)
        }];
      var LF;
      const mW = function(FF) {
          return FF ? 1 === FF ? [`${bR}islandsWaitingOne`] : [`${bR}islandsWaiting`, {
            count: String(FF)
          }] : null
        }(WF.baf2IslandWaiting),
        OF = WF.baf2IslandUnreadable,
        xW = WF.baf2IslandCoop,
        ZF = xR(WF, dF, SF, PF, TF),
        oF = (0, CF.useRef)(null);
      IP(null !== eF, oF);
      const YF = () => {
          var FF;
          EF(null), null === (FF = oF.current) || void 0 === FF || FF.focus()
        },
        MF = (FF, WF) => {
          YF(), null !== FF && rW(FF, WF)
        },
        cW = (FF, WF) => kW(`${Ci}${FF}`, {
          time: Ru(kW, WF)
        });
      return (0, Qu.jsxs)("li", {
        ref: oF,
        tabIndex: -1,
        className: QA()("Baf2IslandCard", {
          Active: VF,
          Pending: QF,
          Shared: void 0 !== xW
        }),
        children: [(0, Qu.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, Qu.jsx)("strong", {
            className: "Baf2IslandName",
            children: WF.baf2IslandName
          }), VF && (0, Qu.jsx)("span", {
            className: "Baf2IslandBadge",
            children: kW(`${Ci}islandsOnThis`)
          }), xW && (0, Qu.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: kW(`${Ci}islandsShared`)
          })]
        }), "member" === (null === xW || void 0 === xW ? void 0 : xW.baf2CoopRole) && (0, Qu.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: DP(kW, `${Ci}islandsSharedBy`, {
            owner: xW.baf2CoopOwner
          })
        }), void 0 !== OF && (0, Qu.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: kW("newer" === OF ? `${Ci}islandsUnreadable` : `${Ci}islandsDamaged`)
        }), "corrupt" === OF && PF && (0, Qu.jsx)("p", {
          className: "Baf2IslandStats",
          children: kW(`${Ci}islandsDamagedFull`)
        }), void 0 === OF && (0, Qu.jsxs)(Qu.Fragment, {
          children: [(0, Qu.jsx)(nP, {
            tier: WF.baf2IslandTier,
            t: kW
          }), (0, Qu.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, Qu.jsx)("span", {
              children: 1 === WF.baf2IslandQuestsDone ? kW(`${Ci}islandsQuestsDoneOne`) : kW(`${Ci}islandsQuestsDone`, {
                count: String(WF.baf2IslandQuestsDone)
              })
            }), (0, Qu.jsx)("span", {
              children: 1 === WF.baf2IslandMachines ? kW(`${Ci}islandsMachinesOne`) : kW(`${Ci}islandsMachines`, {
                count: String(WF.baf2IslandMachines)
              })
            }), DF && (0, Qu.jsx)("span", {
              children: kW(DF[0], DF[1])
            }), mW && (0, Qu.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: kW(mW[0], mW[1])
            }), NF && (0, Qu.jsx)("span", {
              children: kW(NF[0], NF[1])
            })]
          })]
        }), xW && void 0 === xW.baf2CoopState && "people" !== eF && (0, Qu.jsx)(be, {
          members: xW.baf2CoopMembers,
          t: kW
        }), null === eF && (0, Qu.jsx)(di, {
          card: WF,
          answered: iW,
          nowMs: bW,
          t: kW
        }), ZF.note && (0, Qu.jsx)(HP, {
          note: ZF.note,
          className: QA()({
            Unreachable: void 0 !== (null === xW || void 0 === xW ? void 0 : xW.baf2CoopState)
          }),
          t: kW
        }), "rename" === eF && (0, Qu.jsx)(ui, {
          card: WF,
          canRename: "enabled" === ZF.rename,
          done: MF,
          t: kW
        }), "delete" === eF && (0, Qu.jsx)(hiF, {
          card: WF,
          canDelete: "enabled" === ZF.delete,
          done: FF => {
            MF(FF, xW ? "delete" : void 0)
          },
          t: kW
        }), "people" === eF && (0, Qu.jsx)(Pi, {
          card: WF,
          view: ZF,
          blocked: AF,
          maxIslands: uF,
          answered: iW,
          nowMs: bW,
          done: YF,
          openSocial: aW,
          t: kW
        }), "AC" === eF && (0, Qu.jsx)(ie, {
          card: WF,
          canLeave: "enabled" === ZF.AC,
          done: FF => {
            MF(FF, "AC"), null !== FF && VF && tW()
          },
          t: kW
        }), null === eF && !QF && (0, Qu.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": WF.baf2IslandName,
          children: [ei(ZF.switch) && (0, Qu.jsx)(ib.r, {
            disabled: "enabled" !== ZF.switch,
            onClick: gW,
            children: RF.switch > 0 ? cW("islandsSwitchIn", RF.switch) : kW(`${Ci}islandsSwitch`)
          }), ei(ZF.rename) && (0, Qu.jsx)(ib.e, {
            disabled: "enabled" !== ZF.rename,
            onClick: () => {
              EF("rename")
            },
            children: kW(`${Ci}islandsRename`)
          }), ei(ZF.people) && (0, Qu.jsx)(ib.e, {
            disabled: "enabled" !== ZF.people,
            onClick: () => {
              EF("people")
            },
            children: kW("players" === ZF.peopleLabel ? `${Ci}islandsPlayersButton` : `${Ci}islandsInviteButton`)
          }), ei(ZF.dismiss) && (0, Qu.jsx)(ib.e, {
            disabled: "enabled" !== ZF.dismiss,
            onClick: () => {
              rW(Ai(qW, WF), "dismiss"), VF && tW()
            },
            children: kW(`${Ci}islandsDismiss`)
          }), ei(ZF.AC) && (0, Qu.jsx)(ib.I, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== ZF.AC,
            onClick: () => {
              EF("AC")
            },
            children: VF && RF.switch > 0 ? cW("islandsLeaveIn", RF.switch) : kW(`${Ci}islandsLeave`)
          }), ei(ZF.delete) && (0, Qu.jsx)(ib.I, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== ZF.delete,
            onClick: () => {
              EF("delete")
            },
            children: RF.change > 0 && ZF.deleteWaits ? cW("islandsDeleteIn", RF.change) : kW(`${Ci}islandsDelete`)
          })]
        })]
      })
    }
    const Qi = "buildAFactory2Game:";

    function re(FF) {
      let {
        invite: WF,
        actions: SF,
        full: AF,
        maxIslands: uF,
        waitSeconds: hF,
        focus: bW,
        focused: dF,
        join: PF,
        decline: RF,
        t: iW
      } = FF;
      const [eF, EF] = (0, CF.useState)(!1), QF = (0, CF.useRef)(null);
      IP(eF, QF), (0, CF.useEffect)((() => {
        var FF;
        bW && (EF(!0), null === (FF = QF.current) || void 0 === FF || FF.focus(), dF())
      }), [bW, dF]);
      const rW = function(FF, WF, SF, CF, AF) {
          return SF ? {
            join: !1,
            note: {
              key: `${bR}islandsJoinTooMany`,
              params: {
                max: String(CF)
              }
            }
          } : FF.baf2InvitePlayers >= AF ? {
            join: !1,
            note: {
              key: `${bR}islandsJoinFull`
            }
          } : {
            join: WF.switch,
            note: null
          }
        }(WF, SF, AF, uF, 10),
        gW = WF.baf2InviteIsland,
        tW = WF.baf2InvitePlayers,
        TF = () => {
          var FF;
          EF(!1), null === (FF = QF.current) || void 0 === FF || FF.focus()
        },
        aW = hF > 0 && null === rW.note ? iW(`${Qi}islandsJoinIn`, {
          time: Ru(iW, hF)
        }) : iW(`${Qi}islandsJoin`);
      return (0, Qu.jsxs)("li", {
        ref: QF,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...eF ? GP(TF) : {},
        children: [(0, Qu.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, Qu.jsx)("strong", {
            className: "Baf2IslandName",
            children: gW
          })
        }), (0, Qu.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: DP(iW, `${Qi}islandsInvitedBy`, {
            owner: WF.baf2InviteOwner
          })
        }), (0, Qu.jsx)(nP, {
          tier: WF.baf2InviteTier,
          t: iW
        }), (0, Qu.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, Qu.jsx)("span", {
            children: 1 === tW ? iW(`${Qi}islandsPlayersCountOne`) : iW(`${Qi}islandsPlayersCount`, {
              count: String(tW)
            })
          })
        }), rW.note && (0, Qu.jsx)(HP, {
          note: rW.note,
          t: iW
        }), eF && (0, Qu.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: DP(iW, `${Qi}islandsJoinConfirm`, {
            island: gW
          })
        }), !eF && (0, Qu.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": gW,
          children: [(0, Qu.jsx)(ib.r, {
            disabled: !rW.join,
            onClick: () => {
              var FF;
              EF(!0), null === (FF = QF.current) || void 0 === FF || FF.focus()
            },
            children: aW
          }), (0, Qu.jsx)(ib.e, {
            onClick: RF,
            children: iW(`${Qi}islandsDecline`)
          })]
        }), eF && (0, Qu.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, Qu.jsx)(ib.r, {
            disabled: !rW.join,
            onClick: PF,
            children: iW(`${Qi}islandsJoinYes`)
          }), (0, Qu.jsx)(ib.e, {
            onClick: TF,
            children: iW(`${Qi}islandsCancel`)
          })]
        })]
      })
    }

    function ge(FF) {
      let {
        invites: WF,
        actions: SF,
        full: CF,
        maxIslands: AF,
        waitSeconds: uF,
        focus: hF,
        focused: bW,
        AC: dF,
        declined: PF,
        t: RF
      } = FF;
      const iW = Zh();
      return (0, Qu.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, Qu.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: RF(`${Qi}islandsInvitesTitle`)
        }), (0, Qu.jsx)("ul", {
          className: "Baf2IslandCards",
          children: WF.map((FF => {
            const WF = FF.baf2InviteId;
            return (0, Qu.jsx)(re, {
              invite: FF,
              actions: SF,
              full: CF,
              maxIslands: AF,
              waitSeconds: uF,
              focus: hF === WF,
              focused: bW,
              join: () => {
                iW.send(`baf2coopaccept ${WF}`), dF()
              },
              decline: () => {
                iW.send(`baf2coopdecline ${WF}`), PF(WF)
              },
              t: RF
            }, WF)
          }))
        })]
      })
    }
    const te = "buildAFactory2Game:";

    function Ti(FF) {
      let {
        cards: WF,
        activeName: SF,
        canStart: AF,
        waitSeconds: uF,
        AC: hF,
        t: bW
      } = FF;
      const dF = Zh(),
        [PF, RF] = (0, CF.useState)(!1),
        [iW, eF] = (0, CF.useState)(""),
        EF = (0, CF.useRef)(null);
      IP(PF, EF), (0, CF.useEffect)((() => {
        var FF;
        PF && (null === (FF = EF.current) || void 0 === FF || FF.focus())
      }), [PF]);
      const QF = EP(WF),
        rW = iR(iW),
        gW = eP(rW),
        tW = () => {
          AF && !gW && (dF.send("" === rW || rW === QF ? jW : `${jW} ${rW}`), hF())
        },
        TF = () => {
          var FF;
          RF(!1), null === (FF = EF.current) || void 0 === FF || FF.focus()
        };
      return (0, Qu.jsxs)("li", {
        ref: EF,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...PF ? GP(TF) : {},
        children: [(0, Qu.jsx)("strong", {
          className: "Baf2IslandName",
          children: bW(`${te}islandsNewTitle`)
        }), !PF && (0, Qu.jsx)("p", {
          className: "Baf2IslandStats",
          children: bW(`${te}islandsNewNote`)
        }), PF && (0, Qu.jsxs)(Qu.Fragment, {
          children: [(0, Qu.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: DP(bW, `${te}islandsNewConfirm`, {
              name: SF
            })
          }), (0, Qu.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [bW(`${te}islandsNewNameLabel`), (0, Qu.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: iW,
              placeholder: QF,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: zR,
              onChange: FF => {
                eF(FF.target.value)
              },
              ...cR(tW, TF)
            })]
          }), gW && (0, Qu.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: bW(`${te}islandsNameReserved`)
          })]
        }), (0, Qu.jsxs)("div", {
          className: QA()("Baf2IslandButtons", {
            Stacked: PF
          }),
          children: [(0, Qu.jsx)(ib.r, {
            disabled: !AF || PF && gW,
            onClick: () => {
              if (!PF) return eF(QF), void RF(!0);
              tW()
            },
            children: uF > 0 ? bW(`${te}islandsNewIn`, {
              time: Ru(bW, uF)
            }) : bW(PF ? `${te}islandsNewConfirmButton` : `${te}islandsNew`)
          }), PF && (0, Qu.jsx)(ib.e, {
            onClick: TF,
            children: bW(`${te}islandsCancel`)
          })]
        })]
      })
    }

    function ae(FF) {
      var WF, SF;
      let {
        message: AF,
        arrivedAtMs: uF,
        close: hF,
        AC: bW,
        openSocial: dF
      } = FF;
      const PF = Zh(),
        {
          t: RF
        } = (0, TA.B)(),
        iW = sP(1e3),
        [eF, EF] = (0, CF.useState)(null),
        [QF, rW] = (0, CF.useState)(new Map),
        [gW, tW] = (0, CF.useState)(new Set),
        TF = AF.baf2IslandCards,
        aW = function(FF, WF, SF, CF) {
          return (null !== FF && void 0 !== FF ? FF : []).filter((FF => WF + FF.baf2InviteLeftMs > SF && !CF.has(FF.baf2InviteId)))
        }(AF.baf2IslandsInvites, uF, iW, gW),
        kW = aW.map((FF => FF.baf2InviteId)).join(" "),
        qW = (0, CF.useRef)(null),
        VF = fP(qW);
      (0, CF.useEffect)((() => {
        var FF, WF;
        null !== (FF = qW.current) && void 0 !== FF && FF.contains(document.activeElement) || (null === (WF = qW.current) || void 0 === WF || WF.focus())
      }), [AF, kW]), (0, CF.useEffect)((() => {
        rW((FF => function(FF, WF, SF, CF) {
          const AF = new Map;
          for (const uF of WF) {
            const WF = FF.get(uF.baf2IslandId);
            WF && (void 0 !== WF.untilGone || CF < WF.answer) && kR(WF, uF, SF) && AF.set(uF.baf2IslandId, WF)
          }
          return AF.size === FF.size ? FF : AF
        }(FF, AF.baf2IslandCards, Date.now(), AF.baf2IslandsAnswered)))
      }), [AF]);
      const NF = RP(uF, AF.baf2IslandsWaitMs, iW),
        DF = AF.baf2IslandsBlocked,
        LF = tR(DF, NF),
        mW = function(FF, WF) {
          const SF = tR(FF, 0);
          return {
            switch: SF.switch ? WF : 0,
            change: SF.change ? WF : 0
          }
        }(DF, NF),
        OF = TF.length >= AF.baf2IslandsMax,
        xW = TF.length > 0,
        ZF = function(FF, WF, SF) {
          return FF + Math.max(0, SF - WF)
        }(AF.baf2IslandsNowMs, uF, iW),
        oF = null !== (WF = null === (SF = TF.find((FF => FF.baf2IslandActive))) || void 0 === SF ? void 0 : SF.baf2IslandName) && void 0 !== WF ? WF : "",
        YF = function(FF) {
          const WF = FF.filter(OP).length;
          return WF <= 1 && WF < FF.length
        }(TF),
        MF = !0 === AF.baf2IslandsCoop,
        cW = function(FF, WF) {
          const SF = FF.find((FF => FF.baf2IslandActive)),
            CF = null === SF || void 0 === SF ? void 0 : SF.baf2IslandCoop;
          return SF && "member" === (null === CF || void 0 === CF ? void 0 : CF.baf2CoopRole) ? {
            key: `${bR}islandsKeepOwnMember`,
            names: {
              owner: CF.baf2CoopOwner,
              island: SF.baf2IslandName
            }
          } : {
            key: WF ? `${bR}islandsKeepOwn` : `${bR}islandsKeepOwnSolo`
          }
        }(TF, MF),
        [GF, zW] = (0, CF.useState)(null);
      (0, CF.useEffect)((() => {
        void 0 !== AF.baf2IslandsFocusInvite && zW(AF.baf2IslandsFocusInvite)
      }), [AF]);
      const IF = (0, CF.useCallback)((() => {
          zW(null)
        }), []),
        fF = eF ? TF.find((FF => FF.baf2IslandId === eF.id)) : void 0,
        yW = eF && fF && "hidden" !== xR(fF, LF, YF, OF, MF)[eF.mode] ? eF : null;
      return (0, Qu.jsx)(Rh.b, {
        close: hF,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, Qu.jsxs)("section", {
          ref: qW,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: VF ? {
            marginTop: `${VF.marginTop}px`,
            maxHeight: `${VF.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, Qu.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Qu.jsxs)("div", {
              children: [(0, Qu.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: RF(`${te}islandsTitle`)
              }), xW && (0, Qu.jsx)("p", {
                children: RF(`${te}islandsSubtitle`, {
                  count: String(TF.length),
                  max: String(AF.baf2IslandsMax)
                })
              })]
            }), (0, Qu.jsx)(ib.h, {
              ariaLabel: RF(`${te}islandsClose`),
              onClick: hF
            })]
          }), (0, Qu.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== DF && (0, Qu.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: DP(RF, QP(DF, rR(TF)), {
                island: oF
              })
            }), xW && aW.length > 0 && (0, Qu.jsx)(ge, {
              invites: aW,
              actions: LF,
              full: OF,
              maxIslands: AF.baf2IslandsMax,
              waitSeconds: mW.switch,
              focus: GF,
              focused: IF,
              AC: bW,
              declined: FF => {
                tW((WF => new Set(WF).add(FF)))
              },
              t: RF
            }), xW && (0, Qu.jsxs)(Qu.Fragment, {
              children: [OF && (0, Qu.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: RF(`${te}islandsFull`, {
                  max: String(AF.baf2IslandsMax)
                })
              }), (0, Qu.jsx)("p", {
                className: "Baf2IslandsNote",
                children: DP(RF, cW.key, cW.names)
              }), (0, Qu.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [TF.map((FF => {
                  const WF = FF.baf2IslandId;
                  return (0, Qu.jsx)(Ei, {
                    card: FF,
                    keepOwn: YF,
                    coopOn: MF,
                    openSocial: dF,
                    blocked: DF,
                    maxIslands: AF.baf2IslandsMax,
                    serverNowMs: ZF,
                    nowMs: iW,
                    actions: LF,
                    full: OF,
                    waits: mW,
                    answered: AF.baf2IslandsAnswered,
                    mode: (null === yW || void 0 === yW ? void 0 : yW.id) === WF ? yW.mode : null,
                    setMode: FF => {
                      EF(null === FF ? null : {
                        id: WF,
                        mode: FF
                      })
                    },
                    pending: kR(QF.get(WF), FF, iW),
                    onSent: (SF, CF) => {
                      rW((AF => {
                        const uF = {
                          atMs: Date.now(),
                          from: FF.baf2IslandName,
                          answer: SF
                        };
                        return new Map(AF).set(WF, CF ? {
                          ...uF,
                          untilGone: CF
                        } : uF)
                      }))
                    },
                    AC: bW,
                    switchTo: () => {
                      PF.send(`baf2islandswitch ${WF}`), bW()
                    },
                    t: RF
                  }, WF)
                })), !OF && (0, Qu.jsx)(Ti, {
                  cards: TF,
                  activeName: oF,
                  canStart: LF.change,
                  waitSeconds: mW.change,
                  AC: bW,
                  t: RF
                })]
              })]
            })]
          })]
        })
      })
    }
    const ke = ["all", "recent", "bu", "bars", "parts", "nuclear", "farm", "other"],
      qe = new Set([...Object.keys(sW), ...[...LW.Press.recipes, ...LW["Wire Mill"].recipes].map((FF => FF.output))]),
      Vi = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      Ni = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      Di = / Bar$|Alloy$/,
      Li = /Porkchop|Beef|Mutton|Venison|Steak/,
      me = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;

    function Oi(FF) {
      let {
        item: WF,
        name: SF,
        amount: CF,
        selected: AF,
        small: uF,
        onPick: hF
      } = FF;
      return (0, Qu.jsxs)("button", {
        type: "button",
        className: QA()("Baf2TermTile", {
          On: AF,
          Small: uF
        }),
        "aria-label": `${SF}: ${CF}`,
        "aria-pressed": AF,
        onClick: hF,
        children: [(0, Qu.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, Qu.jsx)(ku.b, {
            itemName: WF,
            amount: 0
          })
        }), (0, Qu.jsx)("span", {
          className: "Baf2TermCount",
          children: du(CF, 1e4)
        }), !uF && (0, Qu.jsx)("span", {
          className: "Baf2TermName",
          children: SF
        })]
      })
    }

    function xe(FF) {
      let {
        store: WF,
        close: SF,
        send: AF
      } = FF;
      const {
        t: uF
      } = (0, TA.B)(), {
        isTouchScreen: hF
      } = (0, iu.d)(["isTouchScreen"]);
      ! function(FF) {
        const [WF, SF] = (0, CF.useState)(FF.version);
        (0, CF.useEffect)((() => (SF(FF.version), FF.subscribe((() => {
          SF(FF.version)
        })))), [FF])
      }(WF);
      const [bW, dF] = (0, CF.useState)("all"), [PF, RF] = (0, CF.useState)(!1), [iW, eF] = (0, CF.useState)(""), [EF, QF] = (0, CF.useState)(""), [rW, gW] = (0, CF.useState)(null), [tW, TF, aW] = function() {
        const FF = (0, CF.useRef)(null),
          [WF, SF] = (0, CF.useState)(!1),
          AF = () => {
            const WF = FF.current;
            SF(null !== WF && WF.scrollLeft + WF.clientWidth < WF.scrollWidth - 1)
          };
        return (0, CF.useEffect)(AF), (0, CF.useEffect)((() => {
          const WF = FF.current;
          if (!WF) return;
          const SF = new ResizeObserver(AF);
          return SF.observe(WF), () => {
            SF.disconnect()
          }
        }), []), [FF, WF, AF]
      }(), kW = (0, CF.useMemo)((() => new Map), [uF]), qW = FF => {
        let WF = kW.get(FF);
        return void 0 === WF && (WF = function(FF, WF) {
          const SF = /^(.+) \((.+)\)$/.exec(FF);
          return SF ? WF(SF[2], SF[1]) : FF
        }(BA(uF, FF), ((FF, WF) => uF("buildAFactory2Game:terminalTileKind", {
          kind: FF,
          base: WF
        }))), kW.set(FF, WF)), WF
      }, VF = WF.isReadOnly(), NF = WF.recent(), DF = WF.items(), LF = EF.trim().toLowerCase(), mW = ("recent" === bW ? NF : DF).filter((FF => {
        const WF = qW(FF);
        return ("all" === bW || "recent" === bW || function(FF) {
          return Su(FF) ? "farm" : Vi.test(FF) ? "nuclear" : Di.test(FF) ? "bars" : Li.test(FF) ? "farm" : Ni.test(FF) ? "bu" : qe.has(FF) ? "parts" : me.test(FF) ? "farm" : "other"
        }(FF) === bW) && ("" === LF || WF.toLowerCase().includes(LF)) && ("" === iW || WF.toUpperCase().startsWith(iW))
      })), OF = new Set(DF.map((FF => qW(FF).charAt(0).toUpperCase()))), xW = "recent" !== bW && NF.length > 0, ZF = function(FF, WF) {
        return null !== FF && WF.includes(FF) ? FF : null
      }(rW, xW ? [...mW, ...NF] : mW), oF = null === ZF ? 0 : WF.amount(ZF), YF = FF => {
        gW(ZF === FF ? null : FF)
      }, MF = FF => {
        null !== ZF && oF > 0 && AF(WF.take(FF, ZF))
      }, cW = "" !== iW ? uF("buildAFactory2Game:terminalEmptyLetter", {
        letter: iW
      }) : "" !== LF ? uF("buildAFactory2Game:terminalEmptySearch", {
        query: EF
      }) : uF("buildAFactory2Game:terminalEmpty");
      return (0, Qu.jsx)(Rh.b, {
        close: SF,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Qu.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, Qu.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Qu.jsxs)("div", {
              children: [(0, Qu.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: uF(WF.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, Qu.jsx)("p", {
                children: uF("buildAFactory2Game:terminalSubtitle", {
                  count: String(WF.siloCount())
                })
              })]
            }), (0, Qu.jsx)(ib.h, {
              onClick: SF
            })]
          }), (0, Qu.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, Qu.jsxs)("div", {
              className: "Baf2TermTools",
              children: [(0, Qu.jsx)("div", {
                ref: tW,
                className: QA()("Baf2TermChips", {
                  MoreRight: TF
                }),
                onScroll: aW,
                children: PF ? (0, Qu.jsxs)(Qu.Fragment, {
                  children: [(0, Qu.jsx)("button", {
                    type: "button",
                    "aria-label": uF("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      RF(!1), eF("")
                    },
                    children: "\u2190"
                  }), [...OF].sort().map((FF => (0, Qu.jsx)("button", {
                    type: "button",
                    className: QA()({
                      On: iW === FF
                    }),
                    onClick: () => {
                      eF(iW === FF ? "" : FF)
                    },
                    children: FF
                  }, FF)))]
                }) : (0, Qu.jsxs)(Qu.Fragment, {
                  children: [(0, Qu.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      RF(!0)
                    },
                    children: uF("buildAFactory2Game:terminalLetters")
                  }), ke.map((FF => (0, Qu.jsx)("button", {
                    type: "button",
                    className: QA()({
                      On: bW === FF
                    }),
                    onClick: () => {
                      dF(FF)
                    },
                    children: uF(`buildAFactory2Game:terminalChip_${FF}`)
                  }, FF)))]
                })
              }), !hF && (0, Qu.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: EF,
                placeholder: uF("buildAFactory2Game:terminalSearch"),
                "aria-label": uF("buildAFactory2Game:terminalSearch"),
                onChange: FF => {
                  QF(FF.target.value)
                },
                onKeyDown: FF => {
                  FF.stopPropagation()
                }
              }), (0, Qu.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": uF("buildAFactory2Game:terminalResort"),
                title: uF("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  WF.resort()
                },
                children: "\u21c5"
              })]
            }), xW && (0, Qu.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, Qu.jsx)("span", {
                children: uF("buildAFactory2Game:terminalChip_recent")
              }), NF.map((FF => (0, Qu.jsx)(Oi, {
                item: FF,
                name: qW(FF),
                amount: WF.amount(FF),
                selected: ZF === FF,
                small: !0,
                onPick: () => {
                  YF(FF)
                }
              }, FF)))]
            }), (0, Qu.jsx)("div", {
              className: "Baf2TermTiles",
              children: mW.length > 0 ? mW.map((FF => (0, Qu.jsx)(Oi, {
                item: FF,
                name: qW(FF),
                amount: WF.amount(FF),
                selected: ZF === FF,
                onPick: () => {
                  YF(FF)
                }
              }, FF))) : (0, Qu.jsx)("p", {
                className: "Baf2TermEmpty",
                children: cW
              })
            }), (0, Qu.jsxs)("div", {
              className: "Baf2TermActions",
              children: [(0, Qu.jsx)("span", {
                className: "Baf2TermPicked",
                children: VF ? (0, Qu.jsxs)(Qu.Fragment, {
                  children: [null !== ZF && oF > 0 ? qW(ZF) : uF("buildAFactory2Game:terminalVisiting"), (0, Qu.jsx)("small", {
                    children: uF("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== ZF && oF > 0 ? (0, Qu.jsxs)(Qu.Fragment, {
                  children: [qW(ZF), (0, Qu.jsx)("small", {
                    children: uF("buildAFactory2Game:terminalStored", {
                      amount: oF.toLocaleString()
                    })
                  })]
                }) : uF("buildAFactory2Game:terminalPick")
              }), !VF && (0, Qu.jsxs)(Qu.Fragment, {
                children: [(0, Qu.jsx)(ib.e, {
                  className: "Baf2TermTake",
                  disabled: 0 === oF,
                  onClick: () => {
                    MF("one")
                  },
                  children: uF("buildAFactory2Game:terminalTakeOne")
                }), (0, Qu.jsx)(ib.e, {
                  className: "Baf2TermTake",
                  disabled: 0 === oF,
                  onClick: () => {
                    MF("stack")
                  },
                  children: uF("buildAFactory2Game:terminalTakeStack", {
                    amount: String(99)
                  })
                }), (0, Qu.jsx)(ib.k, {
                  className: "Baf2TermTake",
                  disabled: 0 === oF,
                  onClick: () => {
                    MF("fill")
                  },
                  children: uF("buildAFactory2Game:terminalFill")
                })]
              })]
            })]
          })]
        })
      })
    }

    function Zi(FF) {
      let {
        kind: WF,
        icon: SF,
        label: CF,
        number: AF,
        preview: uF,
        note: hF,
        tone: bW = null,
        share: dF,
        onExplain: PF
      } = FF;
      return (0, Qu.jsxs)("button", {
        type: "button",
        className: QA()("NxLane", WF, {
          Warn: "warn" === bW,
          Danger: "danger" === bW
        }),
        onClick: PF,
        children: [(0, Qu.jsxs)("span", {
          className: "NxLaneHead",
          children: [SF, (0, Qu.jsx)("span", {
            className: "NxLaneLabel",
            children: CF
          })]
        }), (0, Qu.jsxs)("span", {
          className: "NxLaneNum",
          children: [AF, uF && (0, Qu.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", uF]
          })]
        }), (0, Qu.jsx)("span", {
          className: "NxLaneNote",
          children: hF
        }), void 0 !== dF && (0, Qu.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, dF)) + "%"
          }
        })]
      })
    }

    function oi(FF) {
      let {
        kind: WF,
        step: SF,
        short: CF,
        planned: AF
      } = FF;
      return (0, Qu.jsx)("i", {
        className: QA()("NxPipe", WF, `Step${SF}`, {
          Short: CF,
          Planned: AF
        }),
        "aria-hidden": "true"
      })
    }

    function Yi(FF) {
      let {
        max: WF,
        bands: SF,
        ticks: CF,
        now: AF,
        settle: uF,
        settleTone: hF,
        onExplain: bW
      } = FF;
      const dF = FF => Math.max(0, Math.min(WF, FF)) / WF * 100 + "%";
      let PF = 0;
      return (0, Qu.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: bW,
        children: [(0, Qu.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [SF.map((FF => {
            const WF = {
              bottom: dF(PF),
              height: `calc(${dF(FF.upTo)} - ${dF(PF)})`
            };
            return PF = FF.upTo, (0, Qu.jsx)("i", {
              className: QA()("NxGaugeBand", FF.kind),
              style: WF
            }, FF.kind)
          })), null !== AF && (0, Qu.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: dF(AF)
            }
          }), void 0 !== uF && null !== uF && (0, Qu.jsx)("i", {
            className: QA()("NxGaugeSettle", {
              Bad: "bad" === hF
            }),
            style: {
              bottom: dF(uF)
            }
          })]
        }), (0, Qu.jsx)("span", {
          className: "NxGaugeTicks",
          children: CF.map((FF => (0, Qu.jsx)("small", {
            style: {
              bottom: dF(FF)
            },
            children: FF
          }, FF)))
        })]
      })
    }

    function Mi(FF) {
      const [WF, SF] = (0, CF.useState)(null), [AF, uF] = (0, CF.useState)((() => {
        try {
          return null === window.localStorage.getItem(FF)
        } catch {
          return !1
        }
      })), hF = (0, CF.useRef)(null);
      (0, CF.useEffect)((() => () => {
        null !== hF.current && clearTimeout(hF.current)
      }), []);
      const bW = (0, CF.useCallback)((WF => {
          SF(WF), uF(!1);
          try {
            window.localStorage.setItem(FF, "1")
          } catch {}
          null !== hF.current && clearTimeout(hF.current), hF.current = setTimeout((() => {
            hF.current = null, SF(null)
          }), 5e3)
        }), [FF]),
        dF = (0, CF.useCallback)(((WF, SF) => {
          const CF = `${FF}:${WF}`;
          try {
            if (null !== window.localStorage.getItem(CF)) return;
            window.localStorage.setItem(CF, "1")
          } catch {
            return
          }
          bW(SF)
        }), [bW, FF]);
      return {
        explained: WF,
        hinting: AF,
        explain: bW,
        explainOnce: dF
      }
    }

    function ce(FF) {
      let {
        text: WF,
        tone: SF,
        explained: CF
      } = FF;
      return (0, Qu.jsxs)("p", {
        className: QA()("NxStatus", null === CF ? SF : "Explain"),
        "aria-live": "polite",
        children: [null !== CF && (0, Qu.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== CF && void 0 !== CF ? CF : WF]
      })
    }
    const Gi = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function ze(FF, WF) {
      const SF = Number(FF[WF]);
      return 1 === SF || 2 === SF || 3 === SF ? SF : 0
    }

    function Ii(FF) {
      return !!ed("reactor", FF.baf2RxNeed) || void 0 !== FF.baf2RxLayout && FF.baf2RxNeed.some((FF => {
        let [WF, SF] = FF;
        return SF > 0 && Gi.includes(WF)
      }))
    }
    const fi = "buildAFactory2Game:";

    function ye(FF) {
      let {
        status: WF,
        store: SF,
        busy: CF
      } = FF;
      const {
        t: AF
      } = (0, TA.B)();
      return function(FF) {
        return 0 !== (FF.baf2RxFlags & dW) && (!FF.baf2RxFormed || void 0 !== FF.baf2RxLayout)
      }(WF) ? (0, Qu.jsx)(ib.k, {
        disabled: !Ii(WF) || CF,
        onClick: () => {
          SF.tap("fill", (() => {
            SF.send("fill")
          }))
        },
        children: AF(void 0 !== WF.baf2RxLayout ? `${fi}rxFillLayout` : `${fi}rxFill`)
      }) : null
    }

    function si(FF) {
      let {
        status: WF,
        store: SF,
        readOnly: AF,
        bare: uF = !1
      } = FF;
      const {
        t: hF
      } = (0, TA.B)(), bW = WF.baf2RxLayout, [dF, PF, RF] = WF.baf2RxDims, iW = (0, CF.useMemo)((() => {
        if (void 0 === bW) return 0;
        const FF = Uint8Array.from(bW, ((FF, WF) => ze(bW, WF)));
        return Kb([dF - 2, PF - 2, RF - 2], FF).max
      }), [bW, dF, PF, RF]);
      return void 0 === bW ? null : (0, Qu.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!uF && (0, Qu.jsx)("span", {
          className: "Baf2RxHint",
          children: hF(`${fi}rxLayoutLine`, {
            amount: aP(iW)
          })
        }), !AF && (0, Qu.jsx)(ib.e, {
          onClick: () => {
            SF.send("layout", 0)
          },
          children: hF(`${fi}rxLayoutHide`)
        })]
      })
    }
    const ni = "buildAFactory2Game:",
      Hi = {
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

    function Ki(FF) {
      let {
        id: WF,
        title: SF,
        body: CF,
        bodyParams: AF,
        yes: uF,
        cancel: hF,
        confirm: bW
      } = FF;
      const {
        t: dF
      } = (0, TA.B)();
      return (0, Qu.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": WF,
        children: [(0, Qu.jsx)("h3", {
          id: WF,
          children: dF(SF)
        }), (0, Qu.jsx)("p", {
          children: dF(CF, AF)
        }), (0, Qu.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, Qu.jsx)(ib.f, {
            onClick: hF,
            children: dF(`${ni}rxCancel`)
          }), (0, Qu.jsx)(ib.E, {
            onClick: bW,
            children: dF(uF)
          })]
        })]
      })
    }

    function wi(FF) {
      const [WF, SF] = (0, CF.useState)((() => FF.get()));
      return (0, CF.useEffect)((() => (SF(FF.get()), FF.subscribe((() => {
        SF(FF.get())
      })))), [FF]), WF
    }

    function Xi(FF) {
      let {
        kind: WF,
        cap: SF,
        busy: AF = !1,
        whyNot: uF = null,
        apart: hF
      } = FF;
      const {
        t: bW
      } = (0, TA.B)(), [dF, PF] = (0, CF.useState)(!1), RF = null !== uF, iW = (0, CF.useRef)(null);
      if ((0, CF.useEffect)((() => {
          RF && PF(!1)
        }), [RF]), (0, CF.useLayoutEffect)((() => {
          var FF;
          const WF = null === (FF = iW.current) || void 0 === FF ? void 0 : FF.firstElementChild;
          RF ? null === WF || void 0 === WF || WF.setAttribute("aria-disabled", "true") : AF || null === WF || void 0 === WF || WF.removeAttribute("aria-disabled")
        })), !dF || RF) return (0, Qu.jsx)("span", {
        ref: iW,
        className: "Baf2RxApartWrap",
        children: (0, Qu.jsx)(ib.f, {
          disabled: AF,
          className: QA()({
            Baf2RxNotYet: RF
          }),
          onClick: () => {
            uF ? uF() : PF(!0)
          },
          children: bW(`${ni}rxApart`)
        })
      });
      const eF = "battery" === WF,
        EF = void 0 === SF ? `${ni}batApartConfirmBodyPlan` : `${ni}batApartConfirmBody`;
      return (0, Qu.jsx)(Ki, {
        id: `baf2ApartTitle_${WF}`,
        title: eF ? `${ni}batApartConfirmTitle` : `${ni}rxApartConfirmTitle`,
        body: eF ? EF : `${ni}rxApartConfirmBody`,
        bodyParams: void 0 === SF ? void 0 : {
          cap: SF
        },
        yes: `${ni}rxApart`,
        cancel: () => {
          PF(!1)
        },
        confirm: () => {
          PF(!1), hF()
        }
      })
    }

    function Ui(FF) {
      let {
        mood: WF,
        big: SF
      } = FF;
      const CF = Hi[WF],
        AF = [];
      return CF.rows.forEach(((FF, WF) => {
        for (let SF = 0; SF < FF.length; SF++) "." !== FF[SF] && AF.push((0, Qu.jsx)("rect", {
          x: SF + 1,
          y: WF + 1,
          width: 1,
          height: 1,
          fill: "w" === FF[SF] ? "#8fd3ff" : CF.colour
        }, `${SF},${WF}`))
      })), (0, Qu.jsxs)("svg", {
        className: QA()("Baf2RxFace", {
          Big: SF,
          Alarm: "alarm" === WF
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, Qu.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, Qu.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), AF]
      })
    }

    function Bi(FF) {
      return bh(FF, "+").replace("+", "")
    }

    function je(FF) {
      let {
        kind: WF,
        dims: SF,
        cap: CF,
        disabled: AF,
        compact: uF,
        resize: hF
      } = FF;
      const {
        t: bW
      } = (0, TA.B)(), {
        min: dF,
        max: PF
      } = oS(WF), RF = Math.min(CF, PF), iW = [`${ni}rxWide`, `${ni}rxTall`, `${ni}rxDeep`], eF = {
        w: String(SF[0]),
        h: String(SF[1]),
        d: String(SF[2]),
        blocks: String(Td(WF, SF))
      };
      return (0, Qu.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, Qu.jsx)("div", {
          className: "Baf2RxSteppers",
          children: SF.map(((FF, WF) => {
            const uF = CF => {
                const AF = [SF[0], SF[1], SF[2]];
                AF[WF] = FF + CF, hF(AF)
              },
              eF = FF >= RF;
            return (0, Qu.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, Qu.jsx)("button", {
                type: "button",
                "aria-label": bW(`${ni}rxSmaller`),
                disabled: AF || FF <= dF,
                onClick: () => {
                  uF(-1)
                },
                children: "\u2212"
              }), (0, Qu.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [FF, (0, Qu.jsx)("small", {
                  children: bW(iW[WF])
                })]
              }), (0, Qu.jsx)("button", {
                type: "button",
                "aria-label": bW(`${ni}rxBigger`),
                disabled: AF || eF,
                onClick: () => {
                  uF(1)
                },
                children: eF && CF < PF ? "\ud83d\udd12" : "+"
              })]
            }, iW[WF])
          }))
        }), !uF && (0, Qu.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === WF ? bW(`${ni}rxSizeLine`, {
            ...eF,
            water: String(tP(SF))
          }) : bW(`${ni}batSizeLine`, eF)
        })]
      })
    }

    function ve(FF) {
      let {
        on: WF,
        label: SF,
        disabled: CF,
        locked: AF,
        pending: uF,
        toggle: hF
      } = FF;
      return (0, Qu.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": WF,
        disabled: CF,
        "aria-disabled": AF || void 0,
        className: QA()("Baf2RxSwitch", {
          On: WF,
          Locked: AF,
          Pending: uF
        }),
        onClick: hF,
        children: [(0, Qu.jsx)("span", {
          className: "Baf2RxKnob"
        }), SF]
      })
    }
    const Ji = "buildAFactory2Game:",
      piF = .95;

    function li(FF, WF) {
      return 0 !== (FF.baf2RxFlags & WF)
    }

    function Fe(FF) {
      return "cryo" === FF ? pF.o : pF.s
    }

    function We(FF) {
      var WF, SF, CF, AF, uF, hF, bW, dF, PF;
      return FF.baf2RxCryo ? {
        iC: "cryo",
        usePerS: null !== (AF = FF.baf2RxCryoUse) && void 0 !== AF ? AF : 0,
        needPerS: null !== (uF = FF.baf2RxCryoNeed) && void 0 !== uF ? uF : 0,
        inPerS: null !== (hF = FF.baf2RxCryoIn) && void 0 !== hF ? hF : 0,
        stored: null !== (bW = FF.baf2RxCryoStored) && void 0 !== bW ? bW : 0,
        makersShort: null !== (dF = FF.baf2RxMixersShort) && void 0 !== dF ? dF : 0,
        waterBeside: null !== (PF = FF.baf2RxWaterUse) && void 0 !== PF ? PF : 0,
        pct: FF.baf2RxWater
      } : {
        iC: "water",
        usePerS: null !== (WF = FF.baf2RxWaterUse) && void 0 !== WF ? WF : 0,
        needPerS: null !== (SF = FF.baf2RxWaterNeed) && void 0 !== SF ? SF : 0,
        inPerS: FF.baf2RxWaterIn,
        stored: FF.baf2RxWaterStored,
        makersShort: null !== (CF = FF.baf2RxCondensersShort) && void 0 !== CF ? CF : 0,
        waterBeside: 0,
        pct: FF.baf2RxWater
      }
    }

    function Se(FF) {
      const WF = "running" === FF.baf2RxState || "idle" === FF.baf2RxState;
      return FF.baf2RxFormed && FF.baf2RxTarget !== FF.baf2RxThrottle && WF ? Ce(FF, FF.baf2RxTarget) : null
    }

    function Ce(FF, WF) {
      const [SF, CF, AF, , , , uF, , hF] = FF.baf2RxStats, bW = li(FF, hW), dF = We(FF), PF = dF.pct / 100, {
        gen: RF,
        out: iW,
        load: eF
      } = function(FF, WF, SF, CF) {
        const AF = SF ? zd : 1,
          uF = Math.min(FF.fuelHeat * AF * Math.max(0, Math.min(1, WF)), FF.size * AF);
        return {
          gen: uF,
          out: uF,
          load: Wd(uF, FF.cooling, CF)
        }
      }({
        fuelHeat: SF,
        cooling: CF,
        size: AF
      }, WF / 100, bW, PF), EF = Cd(uF || Hb(...FF.baf2RxDims)), QF = FF.baf2RxHeat, rW = Math.abs(eF - QF), gW = function(FF, WF, SF, CF) {
        let AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : pF.s;
        const uF = SF ? zd : 1,
          hF = Math.min(FF.fuelHeat * uF * WF / 100, FF.size * uF),
          bW = hF,
          dF = FF.fuelHeat * uF,
          PF = FF.cooling * Fd(CF.pct / 100),
          RF = dF > 0 && PF < FF.size * uF ? Math.floor(100 * PF / dF) : 100,
          iW = hF * AF - CF.inPerS;
        return {
          out: bW,
          hotAbove: RF >= 100 ? null : Math.max(0, RF),
          waterSecs: CF.pct >= 100 && iW > 1e-6 ? Math.max(0, CF.stored) / iW : null
        }
      }({
        fuelHeat: SF,
        cooling: CF,
        size: AF
      }, WF, bW, {
        pct: dF.pct,
        inPerS: dF.inPerS,
        stored: dF.stored
      }, Fe(dF.iC));
      return {
        pct: WF,
        out: iW,
        coolPerS: RF * Fe(dF.iC),
        pelletsPerMin: hF > 0 ? iW / hF * 60 : 0,
        settle: eF,
        settleS: rW > 2 ? EF * Math.log(rW / 2) : 0,
        overheatS: eF > 100 && QF < 100 ? EF * Math.log((eF - QF) / (eF - 100)) : null,
        hotAbove: gW.hotAbove,
        coolantSecs: gW.waterSecs
      }
    }

    function Ae(FF) {
      return FF.baf2RxThrottle <= 0 && "running" !== FF.baf2RxState ? 0 : Ce(FF, FF.baf2RxTarget).pelletsPerMin / 60
    }

    function ue(FF, WF) {
      if (FF <= 0 || WF <= 0) return 0;
      const SF = FF / WF;
      return SF < .25 ? 1 : SF < .5 ? 2 : SF < .8 ? 3 : 4
    }

    function he(FF, WF) {
      const SF = {};
      for (const [CF, AF] of Object.entries(WF.params)) SF[CF] = "time" === CF ? Ru(FF, AF) : "amount" === CF ? aP(AF) : String(Math.round(AF));
      return FF(WF.key, SF)
    }

    function bE(FF, WF) {
      return {
        key: `${Ji}${FF}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: WF
      }
    }

    function de(FF) {
      var WF;
      const SF = li(FF, hW),
        CF = "running" === FF.baf2RxState,
        AF = bP(FF),
        uF = FF.baf2RxHeat;
      var hF;
      if (CF && uF > cd) return {
        key: null !== (hF = AF.fix) && void 0 !== hF ? hF : `${Ji}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const bW = CF ? Ce(FF, FF.baf2RxTarget).coolantSecs : null,
        dF = "cryo" === We(FF).iC;
      if (null !== bW && bW >= 1 && bW <= 30) return bE(dF ? "rxWarnCryo" : "rxWarnWater", "bad");
      const PF = sb(Hb(...FF.baf2RxDims)).waste,
        RF = CF ? Ed(FF, PF, Ae(FF)).fullInS : null;
      if (null !== RF && RF <= 120 && FF.baf2RxWaste >= .5 * PF) return bE("rxWarnWaste", "warn");
      if (null !== bW && bW >= 1) return bE(dF ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: bW
      });
      const iW = "noWater" === FF.baf2RxState && uF > cd;
      if (FF.baf2RxDamage >= 1 && !iW) return bE("rxDamagedHeals", "warn", {
        pct: FF.baf2RxDamage
      });
      if (FF.baf2RxCryoCut) return bE("rxFix_cryoCut", "warn");
      const eF = We(FF);
      if ("noWater" === FF.baf2RxState && "cryo" === eF.iC) return bE("noWater" === FF.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const EF = AF.fix === `${Ji}rxFix_scramCool` || "idle" === FF.baf2RxState && FF.baf2RxTarget <= 0;
      if (EF && FF.baf2RxFuel <= 0) return bE("rxFix_noFuel", "warn");
      if (EF && FF.baf2RxWaterIn <= 0 && (null !== (WF = FF.baf2RxCryoIn) && void 0 !== WF ? WF : 0) <= 0) return bE("rxFix_noWater", "warn");
      const QF = AF.fix === `${Ji}rxFix_scramCool` ? Pd(FF) : null;
      if (null !== QF) return {
        key: QF.key,
        params: {
          amount: QF.amount
        },
        tone: "info"
      };
      if ("running" !== FF.baf2RxState && "idle" !== FF.baf2RxState && null !== AF.fix) return {
        key: AF.fix,
        params: {},
        tone: "scram" === FF.baf2RxState ? "info" : iW ? "bad" : "warn"
      };
      var rW;
      if ("idle" === FF.baf2RxState && FF.baf2RxTarget <= 0) return {
        key: null !== (rW = AF.fix) && void 0 !== rW ? rW : `${Ji}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const gW = FF.baf2RxCryoStarved;
      if ("cryo" === eF.iC && gW && eF.needPerS > 0 && eF.usePerS < piF * eF.needPerS) return bE("noWater" === gW ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const tW = "cryo" === eF.iC,
        TF = eF.needPerS > 0 && eF.usePerS < piF * eF.needPerS;
      if (tW ? TF || eF.makersShort > 0 && eF.pct < 100 : eF.pct < 100) {
        const WF = tW && TF ? Math.floor(100 * eF.usePerS / eF.needPerS) : Math.min(100, eF.pct);
        if (eF.makersShort > 0) {
          return bE(`${tW?"rxCryoShortLine":"rxWaterShortLine"}${1===eF.makersShort?"One":""}${!tW&&FF.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: WF,
            count: eF.makersShort
          })
        }
        return bE(tW ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: WF
        })
      }
      const aW = function(FF) {
        const [WF, SF, CF] = FF.baf2RxStats, AF = We(FF), uF = Sd({
          fuelHeat: WF,
          cooling: SF,
          size: CF
        }, "cryo" === AF.iC ? pF.g : 1, !0);
        return Math.max(0, uF * Fe(AF.iC) - AF.inPerS)
      }(FF);
      if (SF && aW > 0) return bE("cryo" === eF.iC ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(aW)
      });
      if (uF >= pb) return bE("rxHotLine", "warn");
      const kW = Ce(FF, FF.baf2RxTarget);
      var qW;
      if (null !== kW.overheatS) return bE("rxWillOverheat", "bad", {
        pct: FF.baf2RxTarget,
        time: kW.overheatS,
        safe: null !== (qW = kW.hotAbove) && void 0 !== qW ? qW : 100
      });
      if (Math.abs(kW.settle - uF) >= 3) return bE("rxSettling", "info", {
        pct: FF.baf2RxTarget,
        heat: Math.round(kW.settle),
        time: kW.settleS
      });
      const VF = Pd(FF);
      if (null !== VF) return {
        key: VF.key,
        params: {
          amount: VF.amount
        },
        tone: "info"
      };
      const NF = function(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== WF && ("running" !== WF || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === FF.rods ? `${Ad}rxLimitNoRods` : `${Ad}rxLimit_${Jb(FF)}`
      }({
        rods: FF.baf2RxStats[3],
        ...dd(FF)
      }, FF.baf2RxState, FF.baf2RxOut >= piF * FF.baf2RxMaxNow, !1);
      if (NF === `${Ji}rxLimit_size`) {
        const [WF, , SF, CF] = FF.baf2RxStats, AF = CF > 0 && WF > 0 ? Math.ceil(SF / (WF / CF) - 1e-9) : CF, uF = FF.baf2RxDims.every((FF => FF >= oS("reactor").max));
        if (AF < CF) return bE(uF ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: AF,
          have: CF
        });
        if (uF) return bE("rxLimit_sizeMax", "info")
      }
      return null !== NF ? {
        key: NF,
        params: {},
        tone: "info"
      } : bE("rxSteady", "ok", {
        pct: FF.baf2RxTarget
      })
    }

    function Pe(FF) {
      var WF;
      if (FF.melted) return bE("rxMeltedBody", "bad");
      if (-1 === FF.bad) return bE("rxFix_noRoom", "warn");
      if (FF.bad > 0) return bE(1 === FF.bad ? "rxBadOne" : "rxBad", "warn", {
        count: FF.bad
      });
      if (FF.left > 0) {
        const WF = 1 === FF.left ? "One" : "";
        return bE(FF.canFill ? `rxPlanLeft${WF}` : `rxPlanLeftNoFill${WF}`, "info", {
          count: FF.left
        })
      }
      if (0 === FF.rods) return bE("rxLimitNoRods", "warn");
      const SF = null !== (WF = FF.idle) && void 0 !== WF ? WF : 0;
      return SF > 0 ? bE(1 === SF ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: SF
      }) : bE("rxPlanReady", "ok")
    }

    function Re(FF) {
      return Math.floor(Math.max(0, FF[1] - 1) / 2)
    }

    function iE(FF) {
      if (FF >= Xb && FF < Ub) {
        const WF = FF - Xb;
        return {
          key: 0 === WF ? `${Ji}rxWhy_rodAlone` : 1 === WF ? `${Ji}rxWhy_rodOne` : `${Ji}rxWhy_rod`,
          params: {
            count: String(WF),
            heat: String(Lb * (1 + md * WF))
          }
        }
      }
      return FF === Ub ? {
        key: `${Ji}rxWhy_channel`,
        params: {
          amount: String(xd)
        }
      } : FF === Bb ? {
        key: `${Ji}rxWhy_deadChannel`,
        params: {}
      } : FF === jd ? {
        key: `${Ji}rxWhy_graphite`,
        params: {}
      } : {
        key: `${Ji}rxWhy_core`,
        params: {}
      }
    }
    const ee = "buildAFactory2Game:";

    function Ee(FF, WF) {
      return 0 !== (FF.baf2RxFlags & WF)
    }

    function Qe(FF) {
      let {
        status: WF,
        pending: SF,
        store: CF,
        explain: AF
      } = FF;
      const {
        t: uF
      } = (0, TA.B)(), hF = Ee(WF, uW), bW = WF.baf2RxTarget, dF = WF.baf2RxThrottle, PF = function(FF) {
        return {
          press: () => {
            FF.throttlePress()
          },
          drag: WF => {
            FF.throttleDrag(WF)
          },
          release: () => {
            FF.throttleRelease()
          }
        }
      }(CF), RF = null === (iW = Ce(WF, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, iW - 10),
        red: iW
      };
      var iW;
      return (0, Qu.jsxs)("div", {
        className: QA()("Baf2RxThrottle", {
          Off: hF
        }),
        onClick: () => {
          hF && AF(`${ee}rxWhy_startFirst`)
        },
        children: [(0, Qu.jsx)("span", {
          className: "HideNarrow",
          children: uF(`${ee}rxThrottle`)
        }), (0, Qu.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, Qu.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: bW,
            disabled: hF,
            style: hF ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": uF(`${ee}rxThrottle`),
            onPointerDown: () => {
              PF.press();
              const FF = () => {
                window.removeEventListener("pointerup", FF), window.removeEventListener("pointercancel", FF), PF.release()
              };
              window.addEventListener("pointerup", FF), window.addEventListener("pointercancel", FF)
            },
            onKeyUp: PF.release,
            onChange: FF => {
              PF.drag(Number(FF.target.value))
            }
          }), (0, Qu.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${RF.amber}%, #ffb020 ${RF.amber}% ${RF.red}%, #ff3b30 ${RF.red}%)`
            },
            "aria-hidden": "true"
          }), (0, Qu.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${dF}% + ${8*(1-dF/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, Qu.jsxs)("b", {
          children: [`${bW}%`, (0, Qu.jsx)("i", {
            className: QA()("Baf2RxPendingDot", {
              On: SF
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function rE(FF) {
      let {
        status: WF
      } = FF;
      const {
        t: SF
      } = (0, TA.B)(), CF = Ce(WF, WF.baf2RxTarget), AF = We(WF).iC, uF = SF("cryo" === AF ? `${ee}rxRateCryo` : `${ee}rxRateWater`, {
        rate: Bi(CF.coolPerS)
      }), hF = SF(`${ee}rxChain`, {
        pct: String(WF.baf2RxTarget),
        out: aP(CF.out),
        heat: String(Math.round(CF.settle)),
        coolant: uF
      }), bW = null !== CF.coolantSecs ? CF.coolantSecs >= 1 ? SF("cryo" === AF ? `${ee}rxThrottleCryoOut` : `${ee}rxThrottleWaterOut`, {
        time: Ru(SF, CF.coolantSecs)
      }) : SF("cryo" === AF ? `${ee}rxThrottleCryoDry` : `${ee}rxThrottleWaterDry`) : null;
      return (0, Qu.jsxs)("p", {
        className: "Baf2RxChain",
        children: [hF, null !== bW ? (0, Qu.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", bW]
        }) : (0, Qu.jsxs)("span", {
          children: [" \xb7 ", SF(`${ee}rxChainPellets`, {
            amount: kP(CF.pelletsPerMin)
          })]
        })]
      })
    }

    function gE(FF) {
      let {
        view: WF,
        store: SF,
        explain: AF,
        explainOnce: uF
      } = FF;
      const {
        t: hF
      } = (0, TA.B)(), {
        status: bW
      } = WF, [dF, PF] = (0, CF.useState)(!1), RF = Ee(bW, uW), eF = Ee(bW, hW), EF = !Ee(bW, PW), QF = bW.baf2RxHeat > 100;
      return (0, Qu.jsxs)(Qu.Fragment, {
        children: [(0, Qu.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, Qu.jsx)(Qe, {
            status: bW,
            pending: WF.throttlePending,
            store: SF,
            explain: AF
          }), (0, Qu.jsx)(ve, {
            on: eF,
            label: eF ? hF(`${ee}rxOdLeft`, {
              time: Ru(hF, bW.baf2RxOdLeft)
            }) : hF(`${ee}rxOverdrive`),
            locked: EF,
            pending: 0 !== (WF.pendingFlags & hW),
            toggle: () => {
              EF ? AF(`${ee}rxOverdriveTier`, {
                amount: String(iW(13))
              }) : eF ? SF.setFlag(hW, !1) : WF.odConfirmed ? SF.setFlag(hW, !0) : PF(!0)
            }
          }), RF || WF.startGuard ? (0, Qu.jsx)(ib.r, {
            disabled: WF.busy.has("start") || WF.startGuard,
            onClick: () => {
              SF.tap("start", (() => {
                SF.setFlag(uW, !1)
              }))
            },
            children: hF(WF.startGuard ? `${ee}rxStarting` : `${ee}rxStart`)
          }) : (0, Qu.jsx)("span", {
            className: QA()("Baf2RxScram", {
              Pulse: QF
            }),
            children: (0, Qu.jsx)(ib.E, {
              onClick: () => {
                SF.shutDown()
              },
              children: hF(`${ee}rxScram`)
            })
          })]
        }), (0, Qu.jsx)(rE, {
          status: bW
        }), dF && (0, Qu.jsx)(Ki, {
          id: "baf2RxOdTitle",
          title: `${ee}rxOdConfirmTitle`,
          body: `${ee}rxOdConfirmBody`,
          yes: `${ee}rxOdConfirm`,
          cancel: () => {
            PF(!1)
          },
          confirm: () => {
            PF(!1), SF.tap("odConfirm", (() => {
              SF.confirmOverdrive(), SF.setFlag(hW, !0)
            })), uF(`${ee}rxWhy_overdrive`)
          }
        })]
      })
    }

    function tE(FF) {
      let {
        view: WF,
        store: SF,
        keepSize: CF
      } = FF;
      const {
        t: AF
      } = (0, TA.B)(), {
        status: uF
      } = WF;
      return (0, Qu.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, Qu.jsx)(je, {
          kind: "reactor",
          dims: WF.dims,
          cap: uF.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: FF => {
            SF.resize(FF)
          }
        }), CF ? (0, Qu.jsx)(ib.f, {
          onClick: CF,
          children: AF(`${ee}rxKeepSize`)
        }) : (0, Qu.jsxs)(Qu.Fragment, {
          children: [(0, Qu.jsx)(ve, {
            on: WF.guide,
            label: AF(`${ee}rxGuide`),
            toggle: () => {
              SF.toggleGuide()
            }
          }), Ee(uF, iS) && (0, Qu.jsx)(ve, {
            on: WF.starter,
            label: AF(`${ee}rxStarter`),
            toggle: () => {
              SF.toggleStarter()
            }
          }), (0, Qu.jsx)(ye, {
            status: uF,
            store: SF,
            busy: WF.busy.has("fill")
          })]
        })]
      })
    }

    function Te(FF) {
      let {
        need: WF,
        kind: SF = "reactor",
        explain: CF
      } = FF;
      const {
        t: AF
      } = (0, TA.B)(), uF = WF.length <= 3, hF = WF.reduce(((FF, WF) => {
        let [, SF] = WF;
        return FF + SF
      }), 0);
      return (0, Qu.jsxs)("div", {
        className: QA()("Baf2RxParts", {
          Compact: !uF
        }),
        onClick: () => {
          CF("battery" === SF ? `${ee}batWhy_store` : `${ee}rxShellHint`)
        },
        children: [hF > 0 && (0, Qu.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === hF ? AF(`${ee}rxBlocksOne`) : AF(`${ee}rxBlocks`, {
            blocks: String(hF)
          })
        }), 0 === WF.length ? (0, Qu.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: AF("battery" === SF ? `${ee}batPartsDone` : `${ee}rxShellDone`)
        }) : iP(WF).map((FF => {
          let [WF, SF, CF] = FF;
          const hF = function(FF) {
            const WF = gP[FF];
            if (void 0 === WF) return null;
            const [SF, CF, AF] = Qd[WF].colour.map((FF => Math.round(255 * FF)));
            return `rgb(${SF}, ${CF}, ${AF})`
          }(WF);
          return (0, Qu.jsxs)("span", {
            className: "Baf2RxChip",
            title: BA(AF, WF),
            children: [(0, Qu.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === hF ? {
                visibility: "hidden"
              } : {
                background: hF
              },
              title: AF(`${ee}rxShopGhost`)
            }), (0, Qu.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, Qu.jsx)(ku.b, {
                itemName: WF,
                amount: 0
              })
            }), (0, Qu.jsx)("span", {
              className: "Baf2RxChipName",
              children: uF ? `${SF} ${bW=BA(AF,WF),bW.replace(/^(Reactor|Battery) (?=\S)/,"")}` : SF
            }), CF >= SF ? (0, Qu.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, Qu.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: uF ? AF(`${ee}rxShopShort`, {
                count: String(SF - CF)
              }) : "\u2212" + (SF - CF)
            })]
          }, WF);
          var bW
        }))]
      })
    }
    const aE = "buildAFactory2Game:";

    function kE(FF) {
      var WF, SF, AF, uF, hF, bW, dF;
      let {
        store: PF,
        close: RF
      } = FF;
      const {
        t: iW
      } = (0, TA.B)(), eF = Zh(), EF = wi(PF), {
        explained: QF,
        explain: rW
      } = Mi("baf2RxExplained"), gW = (0, CF.useCallback)(((FF, WF) => {
        rW(iW(FF, WF))
      }), [rW, iW]), tW = null === EF || void 0 === EF ? void 0 : EF.status, TF = !0 === (null === tW || void 0 === tW ? void 0 : tW.baf2BatReadOnly), aW = FF => {
        tW && eF.send(AW(tW.baf2BatAt, FF))
      }, [kW, qW, VF] = null !== (WF = null === EF || void 0 === EF ? void 0 : EF.dims) && void 0 !== WF ? WF : [0, 0, 0], NF = aP(null !== (SF = null === EF || void 0 === EF ? void 0 : EF.ZF) && void 0 !== SF ? SF : 0), DF = !0 === (null === tW || void 0 === tW ? void 0 : tW.baf2BatFormed), LF = null !== (AF = null === tW || void 0 === tW ? void 0 : tW.baf2BatStored) && void 0 !== AF ? AF : 0, mW = Math.max(1, null !== (uF = null === tW || void 0 === tW ? void 0 : tW.baf2BatIslandCap) && void 0 !== uF ? uF : 1), OF = Math.min(100, 100 * LF / mW), xW = null === tW || void 0 === tW ? void 0 : tW.baf2BatNetPerS, ZF = function(FF, WF, SF) {
        return SF > 0 && WF >= SF ? "full" : void 0 !== FF && FF >= .05 ? "charging" : void 0 !== FF && FF <= -.05 && WF > 0 ? "draining" : "steady"
      }(xW, LF, null !== (hF = null === tW || void 0 === tW ? void 0 : tW.baf2BatIslandCap) && void 0 !== hF ? hF : 0), oF = null !== (bW = null === tW || void 0 === tW ? void 0 : tW.baf2BatMadePerS) && void 0 !== bW ? bW : 0, YF = null !== (dF = null === tW || void 0 === tW ? void 0 : tW.baf2BatUsedPerS) && void 0 !== dF ? dF : 0;
      let MF, cW = {},
        GF = "info";
      if (tW)
        if (DF) "charging" === ZF ? (MF = `${aE}batLine_charging`, cW = {
          time: Ru(iW, (mW - LF) / Math.max(.05, null !== xW && void 0 !== xW ? xW : 0))
        }, GF = "ok") : "draining" === ZF ? (MF = `${aE}batLine_draining`, cW = {
          time: Ru(iW, LF / Math.max(.05, -(null !== xW && void 0 !== xW ? xW : 0)))
        }, GF = "warn") : MF = "full" === ZF ? `${aE}batLine_full` : LF <= 0 && YF > 0 ? `${aE}batLine_empty` : `${aE}batLine_steady`;
        else {
          var zW;
          const FF = Pe({
            left: tW.baf2BatNeed.reduce(((FF, WF) => {
              let [, SF] = WF;
              return FF + SF
            }), 0),
            bad: tW.baf2BatBad,
            rods: 1,
            canFill: !0 === tW.baf2BatCanFill,
            melted: !1
          });
          MF = FF.key, cW = {
            count: String(null !== (zW = FF.params.count) && void 0 !== zW ? zW : 0)
          }, GF = FF.tone
        }
      else MF = `${aE}batLine_steady`;
      const IF = Math.max(oF, YF, 1);
      return (0, Qu.jsx)(Rh.b, {
        close: RF,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, Qu.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, Qu.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Qu.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, Qu.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, Qu.jsx)(ku.b, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, Qu.jsxs)("div", {
                children: [(0, Qu.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: iW(`${aE}batTitle`)
                }), tW && (0, Qu.jsxs)("p", {
                  className: QA()("Baf2RxSubtitle", {
                    good: DF && "charging" === ZF,
                    warn: DF && "draining" === ZF
                  }),
                  children: [kW, "\xd7", qW, "\xd7", VF, " \xb7 ", iW(DF ? `${aE}batState_${ZF}` : `${aE}rxSubPlanShort`)]
                })]
              })]
            }), (0, Qu.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [tW && !TF && (0, Qu.jsx)(Xi, {
                kind: "battery",
                cap: DF ? NF : void 0,
                busy: null === EF || void 0 === EF ? void 0 : EF.busy.has("apart"),
                apart: () => {
                  PF.tap("apart", (() => {
                    aW("apart")
                  }))
                }
              }), (0, Qu.jsx)(ib.h, {
                onClick: RF
              })]
            })]
          }), EF && tW && (0, Qu.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, Qu.jsxs)("div", {
              className: QA()("Baf2RxFlow Baf2BatFlow", {
                Plan: !DF
              }),
              children: [(0, Qu.jsx)(Zi, {
                kind: "Power",
                label: iW(`${aE}batMade`),
                number: DF ? `\u26a1 ${aP(oF)}/s` : "\u2014",
                note: iW(`${aE}batMadeNote`),
                share: DF ? oF / IF : void 0,
                onExplain: () => {
                  gW(`${aE}batWhy_made`)
                }
              }), (0, Qu.jsx)(oi, {
                kind: "Power",
                step: DF ? ue(oF, IF) : 0,
                planned: !DF
              }), (0, Qu.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  gW(`${aE}batWhy_store`)
                },
                children: [(0, Qu.jsx)(Yi, {
                  max: 100,
                  bands: [{
                    upTo: DF ? OF : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, Qu.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, Qu.jsx)("b", {
                    className: "Baf2BatStored",
                    children: DF ? iW(`${aE}batStoredOf`, {
                      amount: aP(LF),
                      cap: aP(tW.baf2BatIslandCap)
                    }) : iW(`${aE}batWillHold`, {
                      cap: NF
                    })
                  }), (0, Qu.jsx)("span", {
                    children: iW(`${aE}batAdds`, {
                      cap: NF
                    })
                  }), DF && (0, Qu.jsx)("small", {
                    children: iW(`${aE}batBreakNote`, {
                      cap: NF
                    })
                  })]
                })]
              }), (0, Qu.jsx)(oi, {
                kind: "Power",
                step: DF ? ue(YF, IF) : 0,
                planned: !DF
              }), (0, Qu.jsx)(Zi, {
                kind: "Power",
                label: iW(`${aE}batUsed`),
                number: DF ? `\u26a1 ${aP(YF)}/s` : "\u2014",
                note: iW(`${aE}batUsedNote`),
                share: DF ? YF / IF : void 0,
                onExplain: () => {
                  gW(`${aE}batWhy_used`)
                }
              })]
            }), (0, Qu.jsx)(ce, {
              text: iW(MF, cW),
              tone: GF,
              explained: QF
            }), TF ? (0, Qu.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: iW(`${aE}rxNotYours`)
            }) : !DF && (0, Qu.jsxs)(Qu.Fragment, {
              children: [(0, Qu.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, Qu.jsx)(je, {
                  kind: "battery",
                  dims: EF.dims,
                  cap: tW.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: FF => {
                    PF.resize(FF)
                  }
                }), (0, Qu.jsx)(ve, {
                  on: EF.guide,
                  label: iW(`${aE}rxGuide`),
                  toggle: () => {
                    PF.toggleGuide()
                  }
                }), tW.baf2BatCanFill && (0, Qu.jsx)(ib.k, {
                  disabled: !ed("battery", tW.baf2BatNeed) || EF.busy.has("fill"),
                  onClick: () => {
                    PF.tap("fill", (() => {
                      aW("fill")
                    }))
                  },
                  children: iW(`${aE}rxFill`)
                })]
              }), (0, Qu.jsx)(Te, {
                need: tW.baf2BatNeed,
                kind: "battery",
                explain: gW
              })]
            })]
          })]
        })
      })
    }
    const qE = "buildAFactory2Game:",
      Ve = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function Ne(FF, WF) {
      return FF === wb ? null : WF ? "#4a4440" : FF < Ub ? Ve[FF - Xb] : FF === Ub ? "#3fd0f0" : FF === Bb ? "#2c3e4c" : "#55585e"
    }

    function De(FF) {
      let {
        inner: WF,
        looks: SF,
        layer: CF,
        setLayer: AF,
        glow: uF,
        melted: hF,
        explain: bW
      } = FF;
      const {
        t: dF
      } = (0, TA.B)(), [PF, RF, iW] = WF, eF = Math.max(0, Math.min(RF - 1, CF)), EF = [];
      for (let rW = 0; rW < iW; rW++)
        for (let FF = 0; FF < PF; FF++) {
          var QF;
          const WF = null !== (QF = SF[(eF * iW + rW) * PF + FF]) && void 0 !== QF ? QF : wb,
            CF = Ne(WF, hF),
            AF = WF >= Xb && WF < Ub;
          EF.push(null === CF ? (0, Qu.jsx)("circle", {
            cx: FF + .5,
            cy: rW + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${FF},${rW}`) : (0, Qu.jsx)("rect", {
            x: FF + .06,
            y: rW + .06,
            width: .88,
            height: .88,
            fill: CF,
            opacity: AF && !hF ? .5 + .5 * uF : 1,
            onClick: FF => {
              FF.stopPropagation();
              const SF = iE(WF);
              bW(SF.key, SF.params)
            }
          }, `${FF},${rW}`))
        }
      return (0, Qu.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, Qu.jsx)("svg", {
          className: QA()("Baf2RxMapGrid", {
            Melted: hF
          }),
          viewBox: `0 0 ${Math.max(1,PF)} ${Math.max(1,iW)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": dF(`${qE}rxWhy_core`),
          onClick: () => {
            bW(`${qE}rxWhy_core`, {})
          },
          children: EF
        }), RF > 1 && (0, Qu.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, Qu.jsx)("button", {
            type: "button",
            "aria-label": dF(`${qE}rxLayerDown`),
            disabled: eF <= 0,
            onClick: () => {
              AF(eF - 1)
            },
            children: "\u25bc"
          }), (0, Qu.jsxs)("span", {
            children: [(0, Qu.jsx)("span", {
              className: "HideNarrow",
              children: dF(`${qE}rxLayer`, {
                n: String(eF + 1),
                of: String(RF)
              })
            }), (0, Qu.jsx)("span", {
              className: "ShowNarrow",
              children: dF(`${qE}rxLayerShort`, {
                n: String(eF + 1),
                of: String(RF)
              })
            })]
          }), (0, Qu.jsx)("button", {
            type: "button",
            "aria-label": dF(`${qE}rxLayerUp`),
            disabled: eF >= RF - 1,
            onClick: () => {
              AF(eF + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const Le = "buildAFactory2Game:",
      mE = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: Gb,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: hd,
        kind: "red"
      }],
      Oe = [50, Gb, 100];

    function xE(FF) {
      let {
        stats: WF,
        t: SF,
        explain: CF
      } = FF;
      const AF = Jb(WF),
        uF = Math.max(1, WF.fuelHeat, WF.cooling, WF.size),
        hF = [
          ["fuel", `${Le}rxBarRods`, WF.fuelHeat],
          ["cooling", `${Le}rxBarCooling`, WF.cooling],
          ["size", `${Le}rxBarSize`, WF.size]
        ];
      return (0, Qu.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          CF(`${Le}rxWhy_bars`)
        },
        children: [(0, Qu.jsx)("span", {
          className: "Baf2RxMostLine",
          children: SF(`${Le}rxMost`, {
            amount: aP(Math.min(WF.fuelHeat, WF.cooling, WF.size))
          })
        }), (0, Qu.jsx)("span", {
          className: "Baf2RxMostBars",
          children: hF.map((FF => {
            let [WF, CF, hF] = FF;
            return (0, Qu.jsxs)("span", {
              className: QA()("Baf2RxMostBar", WF, {
                Low: WF === AF
              }),
              children: [(0, Qu.jsx)("small", {
                children: SF(CF)
              }), (0, Qu.jsx)("i", {
                children: (0, Qu.jsx)("b", {
                  style: {
                    width: 100 * hF / uF + "%"
                  }
                })
              })]
            }, WF)
          }))
        })]
      })
    }

    function Ze(FF) {
      var WF;
      let {
        view: SF,
        heat: AF,
        settle: uF,
        settleLine: hF,
        settleBad: bW,
        explain: dF
      } = FF;
      const {
        t: PF
      } = (0, TA.B)(), {
        status: RF
      } = SF, iW = RF.baf2RxAt.join(","), [eF, EF] = (0, CF.useState)((() => Re(SF.inner)));
      (0, CF.useEffect)((() => {
        EF(Re(SF.inner))
      }), [iW, SF.inner[1]]);
      const QF = null !== (WF = SF.plan) && void 0 !== WF ? WF : dd(RF),
        rW = SF.plan ? SF.plan.powerPerUnit : RF.baf2RxStats[8],
        gW = null === AF ? null : "alarm" === (tW = ud(RF)) ? "red" : "hot" === tW ? "hot" : "warm" === tW ? "warm" : "cold";
      var tW;
      const TF = !RF.baf2RxFormed && function(FF, WF) {
          return 0 !== (FF.baf2RxFlags & WF)
        }(RF, bS),
        aW = RF.baf2RxDamage,
        kW = aW > 0 && RF.baf2RxHeat < Gb;
      return (0, Qu.jsxs)("div", {
        className: QA()("Baf2RxCore", null !== gW && void 0 !== gW ? gW : "plan"),
        children: [(0, Qu.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, Qu.jsx)(De, {
            inner: SF.inner,
            looks: SF.looks,
            layer: eF,
            setLayer: EF,
            glow: RF.baf2RxFormed ? RF.baf2RxThrottle / 100 : 1,
            melted: TF,
            explain: dF
          }), (0, Qu.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              dF(`${Le}rxWhy_heat`)
            },
            children: [null !== AF ? (0, Qu.jsxs)(Qu.Fragment, {
              children: [(0, Qu.jsx)("b", {
                children: PF(`${Le}rxHeatPct`, {
                  pct: String(AF)
                })
              }), (0, Qu.jsx)("span", {
                className: QA()("Baf2RxBand", gW),
                children: PF(`${Le}rxBand_${gW}`)
              })]
            }) : (0, Qu.jsx)("b", {
              children: PF(`${Le}rxHeat`)
            }), null !== hF && (0, Qu.jsx)("span", {
              className: QA()("Baf2RxSettle", {
                Bad: bW
              }),
              children: hF
            }), aW >= 1 && (0, Qu.jsxs)("span", {
              className: QA()("Baf2RxDamage", {
                Healing: kW
              }),
              children: [PF(`${Le}rxDamageLine`, {
                pct: String(aW)
              }), " \xb7 ", PF(kW ? `${Le}rxDamageHealing` : `${Le}rxDamageRising`), (0, Qu.jsx)("i", {
                children: (0, Qu.jsx)("b", {
                  style: {
                    width: `${Math.min(100,aW)}%`
                  }
                })
              })]
            })]
          }), (0, Qu.jsx)(Yi, {
            max: hd,
            bands: mE,
            ticks: Oe,
            now: AF,
            settle: uF,
            settleTone: bW ? "bad" : null,
            onExplain: () => {
              dF(`${Le}rxWhy_heat`)
            }
          })]
        }), (0, Qu.jsx)(xE, {
          stats: QF,
          t: PF,
          explain: dF
        }), rW > 0 && (0, Qu.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            dF(`${Le}rxWhy_perPellet`)
          },
          children: PF(`${Le}rxPerPellet`, {
            amount: aP(rW)
          })
        })]
      })
    }

    function oe(FF, WF) {
      var SF;
      if (!FF.baf2RxStore) return {
        note: WF(`${Le}rxUpTo`, {
          amount: aP(FF.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [CF, AF] = FF.baf2RxStore, uF = AF > 0 ? CF / AF : 0, hF = String(Math.floor(100 * uF)), bW = null !== (SF = FF.baf2RxStoreNetPerS) && void 0 !== SF ? SF : 0, dF = function(FF) {
        var WF, SF;
        const [CF, AF] = null !== (WF = FF.baf2RxStore) && void 0 !== WF ? WF : [0, 0], uF = null !== (SF = FF.baf2RxStoreNetPerS) && void 0 !== SF ? SF : 0;
        return AF > 0 && CF >= AF - 1 ? "running" === FF.baf2RxState ? `${Ji}rxStoreFull` : `${Ji}rxStoreFullOnly` : uF > .05 ? `${Ji}rxStoreLine` : uF < -.05 ? "running" === FF.baf2RxState ? `${Ji}rxStoreUsesMore` : `${Ji}rxStoreDraining` : `${Ji}rxStorePct`
      }(FF);
      return {
        note: WF(dF, dF === `${Le}rxStoreLine` ? {
          pct: hF,
          time: Ru(WF, (AF - CF) / bW)
        } : {
          pct: hF
        }),
        share: uF
      }
    }

    function Ye(FF) {
      let {
        view: WF,
        explain: SF,
        preview: CF
      } = FF;
      const {
        t: AF
      } = (0, TA.B)(), {
        status: uF
      } = WF, hF = sb(Hb(...WF.dims)), bW = Ae(uF), dF = Math.min(Math.round(uF.baf2RxFuel), hF.fuel), PF = "running" === uF.baf2RxState, RF = PF ? ue(uF.baf2RxOut, uF.baf2RxMaxNow) : 0, iW = function(FF, WF, SF) {
        const CF = We(FF),
          AF = "cryo" === CF.iC,
          uF = SF ? SF.coolantSecs : CF.pct >= 100 && FF.baf2RxOut >= 1 ? Ce(FF, FF.baf2RxThrottle).coolantSecs : null;
        let hF, bW = !1;
        if (CF.pct < 100) {
          const SF = 1 === CF.makersShort,
            uF = !AF && FF.baf2RxCryoOpen ? "OrCryo" : "";
          hF = CF.makersShort > 0 ? WF(AF ? `${Le}rxCryoAddMixer${SF?"":"s"}` : `${Le}rxWaterAddCondenser${SF?"":"s"}${uF}`, {
            count: String(CF.makersShort)
          }) : WF(`${Le}rxWaterNeeds`, {
            rate: Bi(CF.needPerS)
          })
        } else if (null !== uF) hF = WF(`${Le}rxWaterRunsOut`, {
          time: Ru(WF, uF)
        });
        else if (CF.waterBeside > 0) hF = WF(`${Le}rxCryoPlusWater`, {
          rate: Bi(CF.waterBeside)
        });
        else {
          const FF = function(FF) {
            return FF.inPerS <= 0 ? "rxWaterNoSupply" : FF.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(CF);
          bW = "rxWaterNoSupply" === FF, hF = WF(`${Le}${FF}`, {
            amount: aP(CF.stored)
          })
        }
        return {
          kind: AF ? "Cryo" : "Water",
          label: WF(AF ? `${Le}rxCryo` : `${Le}rxWater`),
          number: `${Bi(CF.usePerS)}/s`,
          preview: SF ? `${Bi(SF.coolPerS)}/s` : null,
          note: hF,
          tone: "noWater" === FF.baf2RxState ? "danger" : bW ? "warn" : (dF = CF.pct, PF = uF, dF < 100 ? "danger" : null === PF ? null : PF < 300 ? "danger" : "warn"),
          share: CF.pct / 100,
          why: AF ? `${Le}rxWhy_cryo` : `${Le}rxWhy_water`,
          short: CF.pct < 100
        };
        var dF, PF
      }(uF, AF, CF), eF = Ed(uF, hF.waste, bW), EF = oe(uF, AF), QF = Ce(uF, uF.baf2RxTarget), rW = PF && Math.abs(QF.settle - uF.baf2RxHeat) >= 3, gW = CF ? CF.pelletsPerMin / 60 : null;
      return (0, Qu.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, Qu.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Qu.jsx)(Zi, {
            kind: "Fuel",
            label: AF(`${Le}rxFuel`),
            number: String(dF),
            preview: null !== gW && gW > 0 && uF.baf2RxFuel > 0 ? Ru(AF, uF.baf2RxFuel / gW) : null,
            note: uF.baf2RxFuel <= 0 ? AF(`${Le}rxFuelEmpty`) : bW > 0 ? AF(`${Le}rxFuelLeft`, {
              time: Ru(AF, uF.baf2RxFuel / bW)
            }) : AF(1 === dF ? `${Le}rxFuelPellet` : `${Le}rxFuelPellets`),
            tone: "noFuel" === uF.baf2RxState ? "danger" : uF.baf2RxFuel < 2 ? "warn" : null,
            share: uF.baf2RxFuel / hF.fuel,
            onExplain: () => {
              SF(`${Le}rxWhy_fuel`)
            }
          }), (0, Qu.jsx)(Zi, {
            kind: iW.kind,
            label: iW.label,
            number: iW.number,
            preview: iW.preview,
            note: iW.note,
            tone: iW.tone,
            share: iW.share,
            onExplain: () => {
              SF(iW.why)
            }
          })]
        }), (0, Qu.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Qu.jsx)(oi, {
            kind: "Fuel",
            step: RF,
            short: "noFuel" === uF.baf2RxState
          }), (0, Qu.jsx)(oi, {
            kind: iW.kind,
            step: RF,
            short: iW.short || "noWater" === uF.baf2RxState
          })]
        }), (0, Qu.jsx)(Ze, {
          view: WF,
          heat: uF.baf2RxHeat,
          settle: Math.min(hd, QF.settle),
          settleLine: rW ? AF(`${Le}rxHeatSettles`, {
            pct: String(Math.round(QF.settle)),
            time: Ru(AF, QF.settleS)
          }) : null,
          settleBad: QF.settle > 100,
          explain: SF
        }), (0, Qu.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Qu.jsx)(oi, {
            kind: "Power",
            step: RF
          }), (0, Qu.jsx)(oi, {
            kind: "Waste",
            step: PF && uF.baf2RxFuel - uF.baf2RxPu > 0 ? RF : 0,
            short: eF.full
          })]
        }), (0, Qu.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Qu.jsx)(Zi, {
            kind: "Power",
            label: AF(`${Le}rxPowerOut`),
            number: `\u26a1 ${aP(uF.baf2RxOut)}/s`,
            preview: CF ? aP(CF.out) : null,
            note: EF.note,
            share: EF.share,
            onExplain: () => {
              SF(`${Le}rxWhy_power`)
            }
          }), (0, Qu.jsx)(Zi, {
            kind: "Waste",
            label: AF(`${Le}rxWaste`),
            number: `${Math.floor(uF.baf2RxWaste)}/${hF.waste}`,
            note: eF.full ? AF(`${Le}rxWasteFull`) : null !== eF.fullInS ? AF(`${Le}rxWasteFullIn`, {
              time: Ru(AF, eF.fullInS)
            }) : AF(`${Le}rxWasteSpent`),
            tone: "wasteFull" === uF.baf2RxState ? "danger" : eF.full ? "warn" : null,
            share: uF.baf2RxWaste / hF.waste,
            onExplain: () => {
              SF(`${Le}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function Me(FF) {
      let {
        view: WF,
        explain: SF
      } = FF;
      const {
        t: CF
      } = (0, TA.B)(), AF = WF.plan;
      if (!AF) return null;
      const uF = AF.fuelHeat <= 0 ? null : AF.cooling > 0 ? Math.min(hd, 100 * AF.fuelHeat / AF.cooling) : hd,
        hF = CF(`${Le}rxPlanAtFull`);
      return (0, Qu.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, Qu.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Qu.jsx)(Zi, {
            kind: "Fuel",
            label: CF(`${Le}rxFuel`),
            number: CF(`${Le}rxPlanPerMin`, {
              amount: kP(AF.pelletsPerMin)
            }),
            note: CF(`${Le}rxPlanPellets`),
            onExplain: () => {
              SF(`${Le}rxWhy_fuel`)
            }
          }), (0, Qu.jsx)(Zi, {
            kind: "Water",
            label: CF(`${Le}rxWater`),
            number: `${Bi(AF.waterPerS)}/s`,
            note: WF.status.baf2RxCryoOpen && AF.waterPerS > 0 ? CF(`${Le}rxPlanOrCryo`, {
              rate: Bi(Sd(AF, pF.g) * pF.o)
            }) : hF,
            onExplain: () => {
              SF(`${Le}rxWhy_water`)
            }
          })]
        }), (0, Qu.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Qu.jsx)(oi, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, Qu.jsx)(oi, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, Qu.jsx)(Ze, {
          view: WF,
          heat: null,
          settle: uF,
          settleLine: null === uF ? null : CF(`${Le}rxPlanHeat`, {
            pct: String(Math.round(uF))
          }),
          settleBad: null !== uF && uF > 100,
          explain: SF
        }), (0, Qu.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Qu.jsx)(oi, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, Qu.jsx)(oi, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, Qu.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Qu.jsx)(Zi, {
            kind: "Power",
            label: CF(`${Le}rxPowerOut`),
            number: `\u26a1 ${aP(AF.max)}/s`,
            note: hF,
            onExplain: () => {
              SF(`${Le}rxWhy_power`)
            }
          }), (0, Qu.jsx)(Zi, {
            kind: "Waste",
            label: CF(`${Le}rxWaste`),
            number: CF(`${Le}rxPlanPerMin`, {
              amount: kP(AF.pelletsPerMin)
            }),
            note: CF(`${Le}rxWasteSpent`),
            onExplain: () => {
              SF(`${Le}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const cE = "buildAFactory2Game:",
      Ge = {
        key: `${cE}rxWaiting`,
        params: {},
        tone: "info"
      };

    function zE(FF, WF) {
      return 0 !== (FF.baf2RxFlags & WF)
    }

    function Ie(FF) {
      var WF, SF;
      let {
        store: AF,
        close: uF
      } = FF;
      const {
        t: hF
      } = (0, TA.B)(), bW = wi(AF), {
        explained: dF,
        hinting: PF,
        explain: RF,
        explainOnce: iW
      } = Mi("baf2RxExplained"), eF = (0, CF.useCallback)(((FF, WF) => {
        RF(hF(FF, WF))
      }), [RF, hF]), EF = (0, CF.useCallback)(((FF, WF) => {
        iW(FF, hF(FF, WF))
      }), [iW, hF]), [QF, rW] = (0, CF.useState)(!1), [gW, tW] = (0, CF.useState)(!1), TF = null === bW || void 0 === bW ? void 0 : bW.status, aW = null === TF || void 0 === TF ? void 0 : TF.baf2RxAt.join(","), kW = !0 === (null === TF || void 0 === TF ? void 0 : TF.baf2RxFormed);
      (0, CF.useEffect)((() => {
        tW(!1), rW(!1)
      }), [aW, kW]), (0, CF.useEffect)((() => (AF.opened(), () => {
        AF.closed()
      })), [AF]);
      const qW = void 0 !== TF && zE(TF, RW),
        VF = TF ? kW ? ud(TF) : null !== bW && void 0 !== bW && bW.plan ? function(FF, WF) {
          if (FF <= 0) return "off";
          if (WF <= 0) return "alarm";
          const SF = 100 * FF / WF;
          return SF < 50 ? "calm" : SF < pb ? "warm" : SF <= 100 ? "hot" : "alarm"
        }(bW.plan.fuelHeat, bW.plan.cooling) : "off" : "off",
        NF = TF ? bP(TF) : null,
        DF = bW ? bW.waiting ? Ge : kW ? de(bW.status) : function(FF) {
          var WF, SF;
          const {
            status: CF
          } = FF;
          return Pe({
            left: CF.baf2RxNeed.reduce(((FF, WF) => {
              let [, SF] = WF;
              return FF + SF
            }), 0),
            bad: CF.baf2RxBad,
            rods: null !== (WF = null === (SF = FF.plan) || void 0 === SF ? void 0 : SF.rods) && void 0 !== WF ? WF : 0,
            canFill: zE(CF, dW),
            melted: zE(CF, bS),
            idle: FF.looks.reduce(((FF, WF) => FF + (WF === Bb ? 1 : 0)), 0)
          })
        }(bW) : null,
        LF = PF && null !== DF && ("ok" === DF.tone || "info" === DF.tone),
        mW = TF ? function(FF) {
          const WF = 0 !== (FF.baf2RxFlags & uW),
            SF = FF.baf2RxHeat < Ib;
          return 0 !== (FF.baf2RxFlags & bS) || SF && (WF || !FF.baf2RxFormed) ? null : FF.baf2RxFormed && !WF ? {
            key: `${Ad}rxApartScram`,
            params: {}
          } : {
            key: `${Ad}rxApartCooling`,
            params: {
              pct: String(Ib)
            }
          }
        }(TF) : null,
        [OF, xW, ZF] = null !== (WF = null === bW || void 0 === bW ? void 0 : bW.dims) && void 0 !== WF ? WF : [0, 0, 0],
        oF = `${OF}\xd7${xW}\xd7${ZF}`;
      return (0, Qu.jsx)(Rh.b, {
        close: uF,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, Qu.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, Qu.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Qu.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, Qu.jsx)(Ui, {
                mood: VF
              }), (0, Qu.jsxs)("div", {
                children: [(0, Qu.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: hF(`${cE}rxTitle`)
                }), bW && (0, Qu.jsxs)("p", {
                  className: QA()("Baf2RxSubtitle", kW && (null === NF || void 0 === NF ? void 0 : NF.tone)),
                  children: [kW && !qW ? (0, Qu.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": hF(`${cE}rxChangeSize`),
                    onClick: () => {
                      if (!TF) return;
                      const FF = zE(TF, uW);
                      var WF;
                      (WF = {
                        scram: FF,
                        heat: TF.baf2RxHeat
                      }).scram && WF.heat < Ib ? rW(!0) : eF(FF ? `${cE}rxResizeCooling` : `${cE}rxResizeHot`, {
                        pct: String(Ib)
                      })
                    },
                    children: [oF, " \u270e"]
                  }) : oF, " \xb7 ", hF(kW ? null !== (SF = null === NF || void 0 === NF ? void 0 : NF.label) && void 0 !== SF ? SF : `${cE}rxState_running` : `${cE}rxSubPlanShort`)]
                })]
              })]
            }), (0, Qu.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [bW && !qW && (0, Qu.jsx)(Xi, {
                kind: "reactor",
                busy: bW.busy.has("apart"),
                whyNot: mW ? () => {
                  eF(mW.key, mW.params)
                } : null,
                apart: () => {
                  AF.tap("apart", (() => {
                    AF.send("apart")
                  }))
                }
              }), (0, Qu.jsx)(ib.h, {
                onClick: uF
              })]
            })]
          }), bW && DF && (0, Qu.jsxs)("div", {
            className: "Baf2RxBody",
            children: [kW ? (0, Qu.jsx)(Ye, {
              view: bW,
              explain: eF,
              preview: Se(bW.status)
            }) : (0, Qu.jsx)(Me, {
              view: bW,
              explain: eF
            }), (0, Qu.jsx)(ce, {
              text: LF ? `${he(hF,DF)} ${hF(`${cE}rxTapHint`)}` : he(hF, DF),
              tone: DF.tone,
              explained: dF
            }), qW ? (0, Qu.jsxs)(Qu.Fragment, {
              children: [(0, Qu.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: hF(`${cE}rxNotYours`)
              }), (0, Qu.jsx)(si, {
                status: bW.status,
                store: AF,
                readOnly: !0
              })]
            }) : kW && !gW ? (0, Qu.jsxs)(Qu.Fragment, {
              children: [(0, Qu.jsx)(gE, {
                view: bW,
                store: AF,
                explain: eF,
                explainOnce: EF
              }), void 0 !== bW.status.baf2RxLayout && Ii(bW.status) && (0, Qu.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, Qu.jsx)(si, {
                  status: bW.status,
                  store: AF,
                  readOnly: !1,
                  bare: !0
                }), (0, Qu.jsx)(ye, {
                  status: bW.status,
                  store: AF,
                  busy: bW.busy.has("fill")
                })]
              })]
            }) : (0, Qu.jsxs)(Qu.Fragment, {
              children: [(0, Qu.jsx)(tE, {
                view: bW,
                store: AF,
                keepSize: kW ? () => {
                  tW(!1)
                } : void 0
              }), Rd(bW.dims, bW.status.baf2RxDims) && (0, Qu.jsx)(Te, {
                need: bW.status.baf2RxNeed,
                explain: eF
              }), (0, Qu.jsx)(si, {
                status: bW.status,
                store: AF,
                readOnly: !1
              })]
            }), QF && (0, Qu.jsx)(Ki, {
              id: "baf2ResizeTitle",
              title: `${cE}rxResizeConfirmTitle`,
              body: `${cE}rxResizeConfirmBody`,
              yes: `${cE}rxChangeSize`,
              cancel: () => {
                rW(!1)
              },
              confirm: () => {
                rW(!1), tW(!0)
              }
            })]
          })]
        })
      })
    }
    class fe {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(FF) {
        this.view = FF;
        for (const WF of this.listeners) WF()
      }
      get() {
        return this.view
      }
      subscribe(FF) {
        return this.listeners.add(FF), () => {
          this.listeners.delete(FF)
        }
      }
    }

    function yE(FF) {
      let {
        commands: WF,
        store: SF,
        power: AF,
        water: uF,
        reactor: hF,
        battery: bW,
        collider: dF,
        terminal: PF,
        quests: RF,
        close: iW,
        AC: eF,
        askIslands: EF,
        showCore: QF,
        openSocial: rW
      } = FF;
      const {
        userContext: gW
      } = (0, Nb.b)(), tW = Vb.featureFlags.useSocialFeatures && gW.isLoggedIn(), [TF, aW] = (0, CF.useState)((() => SF.get()));
      (0, CF.useEffect)((() => SF.subscribe((() => {
        aW(SF.get())
      }))), [SF]);
      const kW = "islands" === (null === TF || void 0 === TF ? void 0 : TF.kind) ? TF.backToCore : void 0;
      return (0, Qu.jsxs)(xb.Provider, {
        value: WF,
        children: ["core" === (null === TF || void 0 === TF ? void 0 : TF.kind) && (0, Qu.jsx)(pR, {
          view: TF.core,
          close: iW,
          askIslands: EF
        }), "dropMap" === (null === TF || void 0 === TF ? void 0 : TF.kind) && (0, Qu.jsx)(Si, {
          message: TF.dropMap,
          quests: RF,
          close: iW,
          AC: eF
        }), "islands" === (null === TF || void 0 === TF ? void 0 : TF.kind) && (0, Qu.jsx)(ae, {
          message: TF.islands,
          arrivedAtMs: TF.arrivedAtMs,
          close: kW ? () => {
            QF(kW)
          } : iW,
          AC: eF,
          openSocial: tW ? rW : null
        }), "quests" === (null === TF || void 0 === TF ? void 0 : TF.kind) && (0, Qu.jsx)(gi, {
          store: RF,
          close: iW
        }), "transfer" === (null === TF || void 0 === TF ? void 0 : TF.kind) && (0, Qu.jsx)(wP, {
          message: TF.transfer,
          arrivedAtMs: TF.arrivedAtMs,
          close: iW,
          AC: eF
        }), "power" === (null === TF || void 0 === TF ? void 0 : TF.kind) && (0, Qu.jsx)(ab, {
          store: AF,
          close: iW
        }), "water" === (null === TF || void 0 === TF ? void 0 : TF.kind) && (0, Qu.jsx)(Ab, {
          store: uF,
          close: iW
        }), "reactor" === (null === TF || void 0 === TF ? void 0 : TF.kind) && (0, Qu.jsx)(Ie, {
          store: hF,
          close: iW
        }), "battery" === (null === TF || void 0 === TF ? void 0 : TF.kind) && (0, Qu.jsx)(kE, {
          store: bW,
          close: iW
        }), "collider" === (null === TF || void 0 === TF ? void 0 : TF.kind) && (0, Qu.jsx)(hP, {
          store: dF,
          close: iW
        }), "terminal" === (null === TF || void 0 === TF ? void 0 : TF.kind) && (0, Qu.jsx)(xe, {
          store: PF,
          close: iW,
          send: FF => {
            WF.send(FF)
          }
        })]
      })
    }
    const se = [0, 0, 0],
      ne = new WeakMap;

    function He(FF) {
      let WF = ne.get(FF);
      return WF || (WF = {
        hidden: FF.hidden,
        x: NaN,
        y: NaN
      }, ne.set(FF, WF)), WF
    }
    const Ke = {
      x: 0,
      y: 0,
      distSq: 0
    };

    function we(FF, WF) {
      const SF = He(FF);
      SF.hidden !== WF && (SF.hidden = WF, FF.hidden = WF)
    }

    function Xe(FF, WF, SF) {
      const CF = He(FF);
      CF.x === WF && CF.y === SF || (CF.x = WF, CF.y = SF, FF.style.translate = `${WF}vw ${SF}vh`)
    }

    function Ue(FF, WF, SF, CF, AF, uF) {
      let [hF, bW, dF] = CF;
      const PF = (hF + .5 - SF[0]) ** 2 + (bW - SF[1]) ** 2 + (dF + .5 - SF[2]) ** 2;
      let RF = null;
      PF <= uF ** 2 && (se[0] = hF + .5, se[1] = bW + AF, se[2] = dF + .5, RF = WF.projectWorldPosToViewport(se));
      const iW = null !== RF && RF.x > -5 && RF.x < 105 && RF.y > -5 && RF.y < 105;
      return we(FF, !iW), iW ? (Ke.x = RF.x, Ke.y = RF.y, Ke.distSq = PF, Ke) : null
    }

    function Be(FF, WF) {
      return FF.distSq - WF.distSq
    }
    class jE {
      constructor() {
        this.list = [], this.pool = []
      }
      add(FF, WF, SF, CF) {
        let AF = this.pool[this.list.length];
        AF || (AF = {
          x: 0,
          y: 0,
          distSq: 0,
          element: WF,
          liftRem: SF,
          dot: CF
        }, this.pool.push(AF)), AF.x = FF.x, AF.y = FF.y, AF.distSq = FF.distSq, AF.element = WF, AF.liftRem = SF, AF.dot = CF, this.list.push(AF)
      }
    }
    class vE {
      constructor() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = FF, this.sizes = new WeakMap, this.observer = new ResizeObserver((FF => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const WF of FF) {
            const FF = WF.borderBoxSize[0];
            "dot" !== WF.target.dataset.crowded && 0 !== FF.inlineSize && 0 !== FF.blockSize && this.sizes.set(WF.target, {
              width: FF.inlineSize,
              height: FF.blockSize
            })
          }
        })), this.remPx = 16, this.kept = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.tL = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.tL)
      }
      observe(FF) {
        this.observer.observe(FF)
      }
      unobserve(FF) {
        this.observer.unobserve(FF)
      }
      run(FF) {
        const WF = FF.list;
        WF.sort(Be);
        const SF = this.pxPerVw,
          CF = this.pxPerVh;
        this.kept.length = 0, this.hud && this.kept.push(...this.hud.boxes(performance.now()));
        for (const uF of WF) {
          var AF;
          const FF = this.sizes.get(uF.element);
          let WF = "no";
          if (FF && FF.width > 0) {
            const AF = uF.x * SF,
              hF = uF.y * CF - uF.liftRem * this.remPx;
            this.fit(AF, hF, FF.width, FF.height) || (WF = uF.dot && this.fit(AF, hF, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (AF = uF.element.dataset.crowded) && void 0 !== AF ? AF : "no") !== WF && ("no" === WF ? delete uF.element.dataset.crowded : uF.element.dataset.crowded = WF), "hidden" !== WF && Xe(uF.element, uF.x, uF.y)
        }
        WF.length = 0
      }
      fit(FF, WF, SF, CF) {
        const AF = FF - SF / 2,
          uF = FF + SF / 2,
          hF = WF - CF,
          bW = this.kept;
        for (let dF = 0; dF < bW.length; dF += 4)
          if (AF < bW[dF + 1] - 2 && uF > bW[dF] + 2 && hF < bW[dF + 3] - 2 && WF > bW[dF + 2] + 2) return !1;
        return bW.push(AF, uF, hF, WF), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.tL)
      }
    }
    const Je = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class pe {
      constructor() {
        this.cards = Je.map((FF => document.getElementsByClassName(FF))), this.watched = Je.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(FF) {
        FF - this.refreshedAt > 1e3 && (this.refreshedAt = FF, this.stale = !0);
        for (let SF = 0; SF < this.cards.length; SF++) {
          var WF;
          const FF = null !== (WF = this.cards[SF][0]) && void 0 !== WF ? WF : null;
          FF !== this.watched[SF] && this.watch(SF, FF)
        }
        return this.stale && (this.stale = !1, this.measure()), this.list
      }
      dispose() {
        for (let FF = 0; FF < this.watched.length; FF++) this.watch(FF, null);
        this.sizes.disconnect(), window.removeEventListener("resize", this.onChange)
      }
      measure() {
        const FF = this.list;
        FF.length = 0;
        for (const WF of this.watched) {
          if (!WF || WF.closest(".NoRoom")) continue;
          const SF = WF.getBoundingClientRect();
          let CF = SF.top,
            AF = SF.bottom;
          if (WF === this.watched[0] && this.hud) {
            const FF = this.hud.getBoundingClientRect();
            CF = Math.max(CF, FF.top), AF = Math.min(AF, FF.bottom)
          }
          SF.width > 0 && AF > CF && FF.push(SF.left, SF.right, CF, AF)
        }
      }
      watch(FF, WF) {
        const SF = this.watched[FF];
        var CF, AF;
        (SF && this.sizes.unobserve(SF), this.watched[FF] = WF, this.stale = !0, WF && this.sizes.observe(WF), 0 === FF) && (null === (CF = this.hud) || void 0 === CF || CF.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (AF = null === WF || void 0 === WF ? void 0 : WF.closest(".Baf2QuestHud")) && void 0 !== AF ? AF : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    class le {
      constructor(FF) {
        this.onElement = FF, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(FF) {
        const WF = [];
        for (let SF = 0; SF + 4 < FF.length; SF += 5) {
          const CF = [FF[SF], FF[SF + 1], FF[SF + 2]];
          WF.push({
            key: CF.join(","),
            pos: CF,
            status: jA[FF[SF + 3]],
            kind: kS[FF[SF + 4]]
          })
        }
        this.markers = WF, this.keys = new Set(WF.map((FF => {
          let {
            key: WF
          } = FF;
          return WF
        }))), this.notify()
      }
      covers(FF) {
        return this.keys.has(FF)
      }
      get() {
        return this.markers
      }
      subscribe(FF) {
        return this.listeners.add(FF), () => {
          this.listeners.delete(FF)
        }
      }
      bind(FF) {
        let WF = this.refs.get(FF);
        return WF || (WF = WF => {
          const SF = this.elements.get(FF);
          var CF, AF;
          SF && (null === (CF = this.onElement) || void 0 === CF || CF.call(this, SF, !1));
          WF ? (this.elements.set(FF, WF), null === (AF = this.onElement) || void 0 === AF || AF.call(this, WF, !0)) : (this.elements.delete(FF), this.refs.delete(FF))
        }, this.refs.set(FF, WF)), WF
      }
      onAfterRender(FF, WF, SF) {
        for (const CF of this.markers) {
          const AF = this.elements.get(CF.key);
          if (!AF) continue;
          const uF = Ue(AF, FF, WF, CF.pos, 1.05, 24);
          uF && SF.add(uF, AF, .45, !0)
        }
      }
      notify() {
        for (const FF of this.listeners) FF()
      }
    }
    const FE = {
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
    const WE = (0, CF.memo)((function(FF) {
        let {
          status: WF,
          kind: SF,
          bindRef: CF
        } = FF;
        const {
          t: AF
        } = (0, TA.B)(), uF = function(FF, WF) {
          var SF;
          if ("noFuel" === FF) {
            var CF, AF;
            const FF = null === (CF = LW[WF]) || void 0 === CF || null === (AF = CF.fuels) || void 0 === AF ? void 0 : AF.find((FF => jS.includes(FF)));
            return null !== FF && void 0 !== FF ? FF : FE.noFuel
          }
          return void 0 !== (null === (SF = LW[WF]) || void 0 === SF ? void 0 : SF.cryoMade) ? "noOutlet" === FF ? "Fluid Pipe" : "noInput" === FF ? "Biomass" : FE[FF] : FE[FF]
        }(WF, SF);
        return (0, Qu.jsxs)("div", {
          className: QA()("Baf2StallMarker", WF),
          ref: CF,
          hidden: !0,
          children: [uF && (0, Qu.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, Qu.jsx)(ku.b, {
              itemName: uF,
              amount: 0
            })
          }), (0, Qu.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === WF ? "?" : "!"
          }), (0, Qu.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: AF(`buildAFactory2Game:stallTag_${WF}`)
          })]
        })
      })),
      SE = (0, CF.memo)((function(FF) {
        let {
          controller: WF
        } = FF;
        const [SF, AF] = (0, CF.useState)((() => WF.get()));
        return (0, CF.useEffect)((() => (AF(WF.get()), WF.subscribe((() => {
          AF(WF.get())
        })))), [WF]), (0, Qu.jsx)("div", {
          className: "Baf2StallMarkers",
          children: SF.map((FF => (0, Qu.jsx)(WE, {
            status: FF.status,
            kind: FF.kind,
            bindRef: WF.bind(FF.key)
          }, FF.key)))
        })
      })),
      CE = bC.j + 150;
    class AE {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(FF, WF) {
        const SF = WF - FF;
        null === this.offset || SF < this.offset ? this.offset = SF : this.offset = Math.min(SF, this.offset + .02 * (WF - this.sampledAt)), this.sampledAt = WF
      }
      toLocal(FF) {
        var WF;
        return FF + (null !== (WF = this.offset) && void 0 !== WF ? WF : 0) + CE
      }
    }
    var uE = SF(36924);
    const hE = 15 * Math.PI / 180,
      bQ = Math.SQRT2,
      dE = [4, 2];

    function PE(FF, WF) {
      const SF = [1 / 0, 1 / 0, 1 / 0],
        CF = [-1 / 0, -1 / 0, -1 / 0];
      for (const dF of FF)
        for (let FF = 0; FF < 3; FF++) SF[FF] = Math.min(SF[FF], dF[FF]), CF[FF] = Math.max(CF[FF], dF[FF]);
      const AF = (SF[0] + CF[0]) / 2,
        uF = (SF[1] + CF[1]) / 2,
        hF = (SF[2] + CF[2]) / 2;
      let bW = 0;
      for (const dF of FF) bW = Math.max(bW, Math.hypot(dF[0] - AF, dF[1] - uF, dF[2] - hF));
      return {
        x: AF,
        y: uF,
        z: hF,
        r: bW + WF
      }
    }

    function RE(FF, WF, SF) {
      const CF = WF.x - FF.x,
        AF = WF.y - FF.y,
        uF = WF.z - FF.z,
        hF = Math.sqrt(CF * CF + AF * AF + uF * uF);
      if (hF <= WF.r + 8) return 1;
      const bW = WF.r / hF,
        dF = Math.sqrt(1 - bW * bW),
        PF = dF < -FF.cosHalf,
        RF = (CF * FF.dx + AF * FF.dy + uF * FF.dz) / hF;
      if (!PF && RF < FF.cosHalf * dF - FF.sinHalf * bW) return 0;
      const iW = SF * bQ * FF.frameMs * FF.pxPerBlock / (hF - WF.r);
      for (let eF = 0; eF < dE.length; eF++)
        if (iW * dE[eF] <= 1) return dE[eF];
      return 1
    }

    function iQ(FF, WF) {
      return {
        name: FF,
        at: WF,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const eE = [0, 0, 0];

    function EE(FF, WF, SF) {
      let [, CF, AF, uF, hF, bW] = WF;
      const dF = bC.f * (null !== hF && void 0 !== hF ? hF : 1),
        PF = [];
      for (let EF = 0; EF < CF.length; EF += 3) PF.push([CF[EF] + .5, CF[EF + 1] + .65, CF[EF + 2] + .5]);
      const RF = [];
      for (let EF = 0; EF < PF.length - 1; EF++) {
        const [FF, WF] = [PF[EF], PF[EF + 1]];
        RF.push([(FF[0] + WF[0]) / 2, (FF[1] + WF[1]) / 2, (FF[2] + WF[2]) / 2])
      }
      const iW = PF.slice(1, -1),
        eF = new Uint8Array(iW.length);
      for (const EF of null !== bW && void 0 !== bW ? bW : []) eF[EF >> 1] |= 1 & EF ? 2 : 1;
      return {
        island: FF,
        length: iW.length,
        loop: uF,
        cellsPerMs: dF,
        edges: RF,
        GA: iW,
        bounds: PE([...RF, ...iW], .3),
        changed: !0,
        culled: !1,
        hide: eF,
        items: AF.map((FF => {
          let [WF, CF] = FF;
          return iQ(WF, (0, bC.A)(WF, CF, SF, dF).at)
        }))
      }
    }

    function QE(FF, WF) {
      const {
        items: SF
      } = FF;
      if (0 === SF.length) return;
      const CF = FF.length / FF.cellsPerMs,
        AF = Math.floor((WF - SF[0].at) / CF) - 1;
      if (AF > 0)
        for (const uF of SF) uF.at += AF * CF
    }

    function rQ(FF, WF) {
      const SF = Math.min(Math.floor(WF), FF.length - 1),
        CF = FF.hide[SF];
      return 0 !== CF && 0 !== (CF & (WF - SF < .5 ? 1 : 2))
    }

    function gQ(FF, WF) {
      const SF = Math.min(Math.floor(WF), FF.length - 1),
        CF = WF - SF,
        AF = CF < .5,
        uF = AF ? FF.edges[SF] : FF.GA[SF],
        hF = AF ? FF.GA[SF] : FF.edges[SF + 1],
        bW = AF ? 2 * CF : 2 * CF - 1;
      eE[0] = uF[0] + (hF[0] - uF[0]) * bW, eE[1] = uF[1] + (hF[1] - uF[1]) * bW, eE[2] = uF[2] + (hF[2] - uF[2]) * bW
    }
    const tQ = Math.PI / 4;
    class TE {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new AE, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
      onLines(FF) {
        const WF = performance.now();
        this.clock.sample(FF.baf2BeltLinesAt, WF), this.queue(FF.baf2BeltLinesAt, FF, 0, null, null, 0), this.applyDue(WF)
      }
      onMoves(FF) {
        const WF = performance.now(),
          SF = FF.baf2BeltMovesAt;
        this.clock.sample(SF, WF);
        for (const [CF, AF, uF, hF] of FF.baf2BeltMoveList) null === AF ? this.queue(SF - uF, null, CF, null, null, null !== hF && void 0 !== hF ? hF : 0) : this.queue(SF - uF, null, CF, AF, null !== hF && void 0 !== hF ? hF : null, 0);
        this.applyDue(WF)
      }
      start(FF) {
        this.pool = new uE.b(FF, {
          scale: .3,
          yaw: tQ
        }, 64)
      }
      onAfterRender(FF) {
        const {
          pool: WF
        } = this;
        if (!WF) return;
        const SF = performance.now(),
          CF = SF - this.lastRenderAt;
        this.lastRenderAt = SF, CF < 100 && (this.frameMs += .1 * (CF - this.frameMs));
        const AF = SF + this.frameMs;
        this.applyDue(AF);
        const uF = FF.cameraPosition,
          hF = WF.follow(uF);
        this.setView(FF, uF);
        const bW = this.frame++;
        for (let dF = 0; dF < this.shown.length; dF++) {
          const FF = this.shown[dF],
            SF = RE(this.view, FF.bounds, FF.cellsPerMs),
            CF = FF.culled && 0 !== SF;
          if (FF.culled = 0 === SF, !hF && !FF.changed && !CF && (0 === SF || (bW + dF) % SF !== 0)) continue;
          FF.changed = !1, FF.loop && (QE(FF, AF), (0, bC.v)(FF.items, FF.length, AF, FF.cellsPerMs));
          let uF = FF.length;
          for (let bW = 0; bW < FF.items.length; bW++) {
            const SF = FF.items[bW],
              CF = (0, bC.B)(SF.at, uF, AF, FF.cellsPerMs);
            if (uF = CF - bC.o, rQ(FF, CF)) {
              null === SF.kind || SF.hidden || (SF.kind.hide(SF.slot), SF.hidden = !0);
              continue
            }
            let dF = SF.kind;
            if (null === dF) {
              if (dF = WF.kindOf(SF.name), null === dF) continue;
              SF.kind = dF, SF.slot = dF.take(), SF.hidden = !0, SF.drawn = NaN
            } else if (CF === SF.drawn && !SF.hidden && !hF) continue;
            gQ(FF, CF), dF.write(SF.slot, eE[0], eE[1], eE[2]), SF.hidden = !1, SF.drawn = CF
          }
        }
        WF.commit()
      }
      dispose() {
        var FF;
        this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (FF = this.pool) || void 0 === FF || FF.dispose(), this.pool = null
      }
      setView(FF, WF) {
        const {
          cameraDir: SF,
          lastDir: CF
        } = this, AF = FF.cameraDirection;
        for (let RF = 0; RF < 3; RF++) CF[RF] = SF[RF], SF[RF] = AF[RF];
        const uF = SF[0] * CF[0] + SF[1] * CF[1] + SF[2] * CF[2],
          hF = Number.isNaN(uF) ? 0 : Math.acos(Math.min(1, Math.max(-1, uF))),
          bW = window.innerWidth,
          dF = window.innerHeight,
          PF = FF.tanHalfFovX;
        ! function(FF, WF, SF, CF, AF, uF, hF) {
          let bW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          FF.x = WF[0], FF.y = WF[1], FF.z = WF[2], FF.dx = SF[0], FF.dy = SF[1], FF.dz = SF[2];
          const dF = Math.min(Math.PI, Math.atan(Math.sqrt(CF * CF + AF * AF)) + hE + bW);
          FF.cosHalf = Math.cos(dF), FF.sinHalf = Math.sin(dF), FF.pxPerBlock = uF / (2 * AF), FF.frameMs = hF
        }(this.view, WF, SF, PF, PF * dF / bW, dF * window.devicePixelRatio, this.frameMs, hF)
      }
      queue(FF, WF, SF, CF, AF, uF) {
        const hF = Math.max(this.clock.toLocal(FF), this.lastPendingAt);
        this.lastPendingAt = hF, this.pending.push({
          at: hF,
          lines: WF,
          line: SF,
          name: CF,
          pos: AF,
          idx: uF
        })
      }
      applyDue(FF) {
        const {
          pending: WF
        } = this;
        for (; this.pendingHead < WF.length && WF[this.pendingHead].at <= FF;) {
          const FF = WF[this.pendingHead++];
          if (FF.lines) this.applyLines(FF.lines, FF.at), FF.lines = null;
          else {
            const WF = this.lines.get(FF.line);
            WF && this.applyMove(WF, FF, FF.at)
          }
        }
        this.pendingHead === WF.length ? (WF.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > WF.length && (WF.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(FF, WF) {
        this.clearIsland(FF.baf2BeltIsland);
        for (const SF of FF.baf2BeltLineList) this.lines.set(SF[0], EE(FF.baf2BeltIsland, SF, WF));
        this.shown = [...this.lines.values()]
      }
      applyMove(FF, WF, SF) {
        let {
          name: CF,
          pos: AF,
          idx: uF
        } = WF;
        FF.changed = !0, FF.loop && (QE(FF, SF), (0, bC.v)(FF.items, FF.length, SF, FF.cellsPerMs)), null !== CF && null !== AF ? (0, bC.w)(FF.items, FF.length, iQ(CF, SF), AF, SF, FF.cellsPerMs) : null !== CF ? FF.items.push(iQ(CF, SF)) : FF.items.length > uF && this.release((0, bC.C)(FF.items, FF.length, SF, FF.cellsPerMs, uF))
      }
      clearIsland(FF) {
        for (const [WF, SF] of this.lines)
          if (SF.island === FF) {
            for (const FF of SF.items) this.release(FF);
            this.lines.delete(WF)
          }
      }
      release(FF) {
        null !== FF.kind && (FF.kind.release(FF.slot), FF.kind = null, FF.slot = -1, FF.hidden = !0, FF.drawn = NaN)
      }
    }
    var aQ = SF(35122),
      kQ = SF(36934);

    function qQ(FF) {
      let {
        depth: WF,
        store: SF,
        t: AF
      } = FF;
      const uF = function(FF) {
        const [WF, SF] = (0, CF.useState)(FF.lastPlayerY());
        return (0, XP.e)(OA, SF), (0, CF.useEffect)((() => {
          SF(FF.lastPlayerY())
        }), [FF]), WF
      }(SF);
      if (null === uF) return null;
      const [hF, bW] = WF, dF = uF > hF ? hF : null !== bW && uF < bW ? bW : null, PF = {
        y: Pu(uF),
        target: null === dF ? "" : Pu(dF)
      };
      return (0, Qu.jsx)("span", {
        className: QA()("Baf2QuestDepth", {
          Reached: null === dF
        }),
        children: AF(`${vR}${null===dF?"questDepthReached":"questDepth"}`, PF)
      })
    }

    function VE(FF) {
      let {
        also: WF,
        view: SF,
        t: CF
      } = FF;
      return (0, Qu.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, Qu.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, Qu.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, Qu.jsx)("strong", {
            children: CF(`${vR}questAlsoDownHere`)
          }), (0, Qu.jsx)("span", {
            className: "Baf2QuestChips",
            children: WF.map((FF => {
              let [WF, AF, uF, hF] = FF;
              return (0, Qu.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": CF(`${vR}questAlsoItem`, {
                  item: pP(CF, SF.itemNames[WF], WF),
                  have: String(AF),
                  need: String(uF)
                }),
                children: [(0, Qu.jsx)(FR, {
                  item: WF
                }), (0, Qu.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${AF}/${uF}`
                }), null !== hF && (0, Qu.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: CF(`${vR}questAlsoDepth`, {
                    y: Pu(hF)
                  })
                })]
              }, WF)
            }))
          })]
        })]
      })
    }

    function NE(FF) {
      let {
        expanded: WF,
        inventoryOpen: SF,
        children: AF
      } = FF;
      const uF = (0, CF.useRef)(null);
      return (0, CF.useEffect)((() => {
        const FF = uF.current,
          WF = null === FF || void 0 === FF ? void 0 : FF.closest(".RightElements"),
          CF = null === FF || void 0 === FF ? void 0 : FF.firstElementChild;
        if (!FF || !WF || !CF) return;
        return (0, kQ.b)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [WF, CF], (() => {
          const AF = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === AF.length) return;
          const uF = Math.max(...AF.map((FF => FF.getBoundingClientRect().bottom))),
            hF = WF.getBoundingClientRect(),
            bW = SF ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (bW) {
            const WF = parseFloat(getComputedStyle(CF).marginLeft) + parseFloat(getComputedStyle(CF).marginRight),
              SF = hF.right - bW.getBoundingClientRect().right - 8 - WF;
            FF.style.setProperty("--baf2-quest-room", `${SF}px`), FF.classList.toggle("NoRoom", SF < 150)
          } else FF.style.removeProperty("--baf2-quest-room"), FF.classList.remove("NoRoom");
          const dF = uF - hF.top + 8,
            PF = function(FF, WF, SF) {
              const CF = WF.getBoundingClientRect(),
                AF = FF.getBoundingClientRect();
              let uF = CF.bottom;
              for (const hF of document.querySelectorAll(".TouchComponentsButtons .TouchKeyHit")) {
                const FF = hF.getBoundingClientRect();
                FF.height > 0 && FF.top > CF.top + SF && FF.left < AF.right && FF.right > AF.left && (uF = Math.min(uF, FF.top))
              }
              uF === CF.bottom && (uF -= parseFloat(getComputedStyle(WF).paddingBottom) || 0);
              return uF - CF.top
            }(FF, WF, dF) - 8,
            RF = window.innerHeight / 2 - hF.top,
            {
              top: iW,
              maxHeight: eF
            } = function(FF, WF, SF, CF, AF) {
              const uF = Math.min(SF, Math.max(0, WF - FF)),
                hF = AF ? FF : Math.max(FF, Math.min(CF - uF / 2, WF - uF));
              return {
                top: hF,
                maxHeight: Math.max(0, WF - hF)
              }
            }(dF, PF, function(FF) {
              const WF = FF.firstElementChild,
                SF = WF ? WF.scrollHeight - WF.clientHeight : 0;
              return FF.getBoundingClientRect().height + Math.max(0, SF)
            }(CF), RF, eu());
          FF.style.top = `${iW}px`, FF.style.maxHeight = `${eF}px`
        }))
      }), [SF]), (0, Qu.jsx)("div", {
        ref: uF,
        className: QA()("Baf2QuestHud", {
          Expanded: WF
        }),
        children: AF
      })
    }

    function DE(FF) {
      let {
        amount: WF,
        t: SF
      } = FF;
      return (0, Qu.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, Qu.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, Qu.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: SF(`${vR}questStepsDone`, {
            amount: String(WF)
          })
        })]
      })
    }

    function LE(FF) {
      var WF;
      let {
        store: SF
      } = FF;
      const AF = (0, XP.i)(mu, SF.get()),
        [uF, hF] = (0, CF.useState)(!1),
        {
          t: bW
        } = (0, TA.B)(),
        dF = function() {
          const [FF, WF] = (0, CF.useState)(eu);
          return (0, CF.useEffect)((() => (WF(eu()), Eu(WF))), []), FF
        }(),
        {
          openInGameMenuName: PF,
          openEverythingMenuName: RF
        } = (0, iu.d)(["openInGameMenuName", "openEverythingMenuName"]),
        iW = "inventory" === PF && null === RF,
        eF = null !== PF && !iW || null !== RF;
      if (! function(FF) {
          return null !== FF.name || null !== FF.side
        }(AF) || eF || "off" === AF.tutorial) return null;
      const EF = MA(AF.rows),
        QF = EF.filter((FF => FF.done)).length,
        rW = function(FF, WF) {
          const SF = zu(FF);
          let CF = 0;
          return FF.filter(((FF, AF) => !!FF.justFinished || !(FF.done || AF < SF || CF > WF) && (CF++, !0)))
        }(AF.rows, dF ? 0 : 2),
        gW = dF ? rW : function(FF, WF) {
          const SF = WF.filter((FF => !FF.justFinished));
          if (SF.length < 2) return [...WF];
          const CF = FF.indexOf(SF[0]),
            AF = FF.indexOf(SF[SF.length - 1]),
            uF = new Set(MA(FF));
          return FF.filter(((FF, SF) => WF.includes(FF) || FF.done && uF.has(FF) && SF > CF && SF < AF))
        }(AF.rows, rW),
        tW = uF ? AF.rows : gW,
        TF = uF || dF ? [] : function(FF, WF) {
          const SF = new Array(WF.length + 1).fill(0),
            CF = new Set(MA(FF));
          let AF = 0;
          for (const uF of FF) AF < WF.length && uF === WF[AF] ? AF++ : uF.done && CF.has(uF) && SF[AF]++;
          return SF
        }(AF.rows, gW),
        aW = uF || gW.length < AF.rows.length || null !== AF.reward,
        kW = YA(AF),
        qW = kW ? bW(`${vR}questLineComplete`) : AF.tier ? CR(bW, AF.tier) : bW(`${vR}currentQuest`),
        VF = function(FF) {
          var WF, SF;
          if (YA(FF)) return null;
          const CF = null === (WF = FF.chapters) || void 0 === WF ? void 0 : WF.find((WF => {
            let [SF] = WF;
            return SF === FF.tier
          }));
          if (!CF) return null;
          const AF = CF[1].filter((FF => !FF[4]));
          if (0 === AF.length) return null;
          const uF = null === (SF = FF.name) || void 0 === SF ? void 0 : SF[0],
            hF = FF => AF.findIndex((WF => WF[0] === uF && (!FF || !WF[3]))),
            bW = hF(!0),
            dF = bW >= 0 ? bW : hF(!1);
          if (dF >= 0) return [dF + 1, AF.length];
          const PF = AF.filter((FF => FF[3])).length;
          return [Math.min(PF + 1, AF.length), AF.length]
        }(AF);
      return (0, Qu.jsx)(aQ.e, {
        placement: "topRight",
        children: (0, Qu.jsx)(NE, {
          expanded: uF,
          inventoryOpen: iW,
          children: (0, Qu.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: JP,
            children: [null !== AF.name && (0, Qu.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [AF.pulse > 0 && (0, Qu.jsx)("span", {
                className: "Baf2QuestTrackerPulse",
                "aria-hidden": "true"
              }, AF.pulse), (0, Qu.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, Qu.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [qW, VF && (0, Qu.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": bW(`${vR}questPlaceLabel`, {
                      n: String(VF[0]),
                      total: String(VF[1])
                    }),
                    children: bW(`${vR}questPlace`, {
                      n: String(VF[0]),
                      total: String(VF[1])
                    })
                  }), AF.tier && AF.core && !kW && (0, Qu.jsx)(AR, {
                    core: AF.core,
                    t: bW
                  })]
                })
              }), (0, Qu.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: bW(`${vR}${AF.name[0]}`, lP(AF.name[1]))
              }), (EF.length > 1 || aW) && (0, Qu.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [EF.length > 1 && (0, Qu.jsx)(uR, {
                  rows: EF,
                  t: bW
                }), aW && (0, Qu.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": uF,
                  onClick: () => {
                    hF(!uF)
                  },
                  children: [(0, Qu.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: bW(`${vR}questStepsToggle`, {
                      done: String(QF),
                      total: String(EF.length)
                    })
                  }), (0, Qu.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: uF ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, Qu.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [tW.map(((FF, WF) => {
                  var uF;
                  const hF = FF.current && AF.depth;
                  return (0, Qu.jsxs)(CF.Fragment, {
                    children: [(null !== (uF = TF[WF]) && void 0 !== uF ? uF : 0) > 0 && (0, Qu.jsx)(DE, {
                      amount: TF[WF],
                      t: bW
                    }), (0, Qu.jsx)(hR, {
                      row: FF,
                      view: AF,
                      t: bW,
                      extra: hF && (0, Qu.jsx)(qQ, {
                        depth: hF,
                        store: SF,
                        t: bW
                      })
                    })]
                  }, FF.id)
                })), (null !== (WF = TF[tW.length]) && void 0 !== WF ? WF : 0) > 0 && (0, Qu.jsx)(DE, {
                  amount: TF[tW.length],
                  t: bW
                }), AF.also.length > 0 && (0, Qu.jsx)(VE, {
                  also: AF.also,
                  view: AF,
                  t: bW
                })]
              }), uF && AF.reward && (0, Qu.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [bW(`${vR}questReward`), (0, Qu.jsx)(FR, {
                  item: AF.reward
                }), pP(bW, AF.itemNames[AF.reward], AF.reward)]
              })]
            }), AF.side && (0, Qu.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [(0, Qu.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: bW(`${vR}questSide`)
              }), (0, Qu.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: bW(`${vR}${AF.side.name[0]}`, lP(AF.side.name[1]))
              }), (0, Qu.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, Qu.jsx)(hR, {
                  row: AF.side.row,
                  view: AF,
                  t: bW
                })
              })]
            })]
          })
        })
      })
    }
    const mQ = "baf2ToastView";
    class OE {
      constructor() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = FF, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: FF,
          holdMs: WF
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const FF = this.dropCovered();
          FF && this.show(FF.message, FF.holdMs)
        }), 250));
        const SF = this.dropCovered();
        null !== SF && (SF.holdMs > 0 || "baf2ToastCelebrate" === SF.message.baf2ToastStyle) && "baf2ToastCelebrate" !== FF.baf2ToastStyle && this.show(SF.message, SF.holdMs);
        const CF = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== FF.baf2ToastStyle && CF > 0) return this.pending = {
          message: FF,
          holdMs: WF
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const FF = this.pending;
          this.pending = null, FF && this.present(FF.message, FF.holdMs)
        }), CF));
        this.present(FF, WF)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(FF, WF) {
        this.clearTimers(), this.pending = null;
        const SF = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: FF.baf2ToastText,
          style: FF.baf2ToastStyle,
          swapped: SF,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === FF.baf2ToastStyle ? 1500 : WF), this.Uu();
        const CF = Math.min(8e3, Math.max(1e3, FF.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.AC()
        }), CF)
      }
      AC() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.Uu(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.Uu()
        }), 200))
      }
      clearTimers() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), null !== this.pendingTimer && (clearTimeout(this.pendingTimer), this.pendingTimer = null)
      }
      dropCovered() {
        null !== this.coveredTimer && (clearInterval(this.coveredTimer), this.coveredTimer = null);
        const FF = this.covering;
        return this.covering = null, FF
      }
      Uu() {
        DA.j.Uu(mQ, this.view, !0)
      }
    }
    var xQ = SF(61);
    const ZE = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function oE(FF) {
      let {
        store: WF
      } = FF;
      const SF = (0, XP.i)(mQ, WF.get()),
        {
          openInGameMenuName: CF,
          openEverythingMenuName: AF
        } = (0, iu.d)(["openInGameMenuName", "openEverythingMenuName"]),
        uF = SF && (0, Qu.jsxs)("div", {
          className: QA()("Baf2Toast", ZE[SF.style], {
            Swapped: SF.swapped,
            Leaving: SF.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === SF.style && (0, Qu.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, Qu.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, Qu.jsx)(qu.d, {
              text: SF.text
            })
          })]
        }, SF.id);
      return null !== CF && null === AF ? (0, xQ.createPortal)((0, Qu.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: uF
      }), document.body) : (0, Qu.jsx)(aQ.e, {
        children: uF
      })
    }
    const YE = "baf2AreaView";
    class ME {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.yS = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.yS = null
      }
      arrive(FF, WF) {
        WF && function(FF) {
          return "home" === FF.baf2AreaPlace && void 0 !== FF.baf2AreaNameText
        }(FF) ? this.yS = FF : this.show(FF)
      }
      release() {
        const FF = this.yS;
        null !== FF && this.show(FF)
      }
      show(FF) {
        this.clearTimer(), this.yS = null;
        const WF = void 0 === FF.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: FF,
          ms: WF
        }, this.Uu(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.Uu()
        }), WF)
      }
      dispose() {
        this.clearTimer(), this.yS = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      Uu() {
        DA.j.Uu(YE, this.view, !0)
      }
    }

    function cQ(FF) {
      var WF;
      let {
        store: SF
      } = FF;
      const {
        t: CF
      } = (0, TA.B)(), AF = (0, XP.i)(YE, SF.get());
      if (!AF) return null;
      const {
        area: uF
      } = AF, hF = uF.baf2AreaResetMinutes;
      return (0, Qu.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": uF.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${AF.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, Qu.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), uF.baf2AreaHeading && (0, Qu.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: CF(uF.baf2AreaHeading)
        }), (0, Qu.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (WF = uF.baf2AreaNameText) && void 0 !== WF ? WF : CF(uF.baf2AreaName)
        }), uF.baf2AreaNote && (0, Qu.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: CF(uF.baf2AreaNote)
        }), void 0 !== hF && (0, Qu.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: CF("buildAFactory2Game:areaWildsReset", {
            time: Ru(CF, 60 * hF)
          })
        })]
      }, AF.id)
    }
    const GE = "baf2GearGauge";
    class zQ {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      KD(FF) {
        var WF;
        if (this.clearLinger(), null === FF.gearPowerKind) return void this.set(null);
        const SF = "jetpack" === FF.gearPowerKind && (CF = FF.gearChargeState, AF = FF.gearCharge, "flying" === CF || "charging" === CF || "outOfCharge" === CF || "ceiling" === CF || "offPlot" === CF || "noPower" === CF && AF <= 0);
        var CF, AF;
        const uF = !0 === (null === (WF = this.view) || void 0 === WF ? void 0 : WF.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          hF = SF || "jetpack" === FF.gearPowerKind && uF;
        this.set({
          gauge: FF,
          jetShown: hF
        }), hF && !SF && (this.lingerTimer = setTimeout((() => {
          this.lingerTimer = null, this.view && this.set({
            ...this.view,
            jetShown: !1
          })
        }), 1500))
      }
      dispose() {
        this.clearLinger(), this.view = null
      }
      set(FF) {
        this.view = FF, DA.j.Uu(GE, FF, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const IE = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function fE(FF) {
      let {
        store: WF
      } = FF;
      const SF = (0, XP.i)(GE, WF.get());
      return SF ? "jetpack" === SF.gauge.gearPowerKind ? (0, Qu.jsx)(yQ, {
        view: SF
      }) : (0, Qu.jsx)(sE, {
        gauge: SF.gauge
      }) : null
    }

    function yQ(FF) {
      let {
        view: WF
      } = FF;
      const {
        t: SF
      } = (0, TA.B)(), {
        gauge: CF
      } = WF, AF = CF.gearChargeMax > 0 ? Math.max(0, Math.min(1, CF.gearCharge / CF.gearChargeMax)) : 0, uF = IE[CF.gearChargeState], hF = uF ? SF(uF) : null;
      return (0, Qu.jsxs)("div", {
        className: QA()("Baf2JetArc", {
          Shown: WF.jetShown,
          Low: AF < .2,
          Warm: AF >= .2 && AF < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - AF)
        },
        "aria-hidden": !WF.jetShown,
        children: [(0, Qu.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, Qu.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: nE,
            pathLength: 100
          }), (0, Qu.jsx)("path", {
            className: "Baf2JetArcFill",
            d: nE,
            pathLength: 100
          })]
        }), (0, Qu.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * AF), "%"]
        }), hF && (0, Qu.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: hF
        })]
      })
    }

    function sE(FF) {
      let {
        gauge: WF
      } = FF;
      const {
        t: SF
      } = (0, TA.B)(), CF = function(FF, WF) {
        switch (WF.gearPowerKind) {
          case "skyPack":
            return FF("buildAFactory2Game:gearSkyPack", {
              charge: WF.gearCharge,
              max: WF.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return FF("buildAFactory2Game:gearIslandDraw", {
              power: JF(WF.gearIslandPower),
              cost: JF(WF.gearCostPerUse)
            });
          case "barrier":
            return FF("buildAFactory2Game:gearBarrier", {
              shield: Math.round(WF.gearCharge),
              max: WF.gearChargeMax,
              power: JF(WF.gearIslandPower)
            });
          default:
            return null
        }
      }(SF, WF);
      return null === CF ? null : (0, Qu.jsx)(aQ.e, {
        children: (0, Qu.jsx)("div", {
          className: QA()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === WF.gearChargeState || "outOfCharge" === WF.gearChargeState
          }),
          role: "status",
          children: CF
        })
      })
    }
    const nE = (() => {
      const FF = FF => {
        const WF = FF * Math.PI / 180;
        return `${(40*Math.cos(WF)).toFixed(2)} ${(40*Math.sin(WF)).toFixed(2)}`
      };
      return `M ${FF(160)} A 40 40 0 1 1 ${FF(380)}`
    })();
    class HE {
      constructor(FF) {
        this.onElement = FF, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      KD(FF) {
        let WF = FF.baf2LabelsReset || FF.baf2LabelsIsland !== this.island;
        WF && (this.labels.clear(), this.island = FF.baf2LabelsIsland);
        for (const [SF, CF, AF, uF, hF] of FF.baf2LabelsList) {
          const FF = `${SF},${CF},${AF}`,
            bW = this.labels.get(FF);
          null === uF ? WF = this.labels.delete(FF) || WF : bW && bW.item === uF && (bW.count === hF || bW.count >= 0 && hF >= 0) ? (bW.count = hF, this.writeCount(FF, hF)) : (this.labels.set(FF, {
            key: FF,
            pos: [SF, CF, AF],
            item: uF,
            count: hF
          }), this.writeCount(FF, hF), WF = !0)
        }
        if (this.changes++, WF) {
          this.snapshot = [...this.labels.values()];
          for (const FF of this.listeners) FF()
        }
      }
      bindCount(FF) {
        const WF = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${FF}`;
        let SF = this.countRefs.get(WF);
        return SF || (SF = SF => {
          var CF, AF;
          SF ? (this.countElements.set(WF, SF), this.writeCount(FF, null !== (CF = null === (AF = this.labels.get(FF)) || void 0 === AF ? void 0 : AF.count) && void 0 !== CF ? CF : -1)) : (this.countElements.delete(WF), this.countRefs.delete(WF))
        }, this.countRefs.set(WF, SF)), SF
      }
      setCountWords(FF) {
        this.countWords = FF;
        for (const [WF, SF] of this.labels) this.writePart(`words|${WF}`, FF(SF.count), SF.count)
      }
      writeCount(FF, WF) {
        this.writePart(`bare|${FF}`, du(WF), WF), this.countElements.has(`words|${FF}`) && this.writePart(`words|${FF}`, this.countWords(WF), WF)
      }
      writePart(FF, WF, SF) {
        const CF = this.countElements.get(FF);
        CF && SF >= 0 && CF.textContent !== WF && (CF.textContent = WF)
      }
      list() {
        return this.snapshot
      }
      at(FF) {
        return this.labels.get(`${FF[0]},${FF[1]},${FF[2]}`)
      }
      version() {
        return this.changes
      }
      subscribe(FF) {
        return this.listeners.add(FF), () => {
          this.listeners.delete(FF)
        }
      }
      bind(FF) {
        let WF = this.refs.get(FF);
        return WF || (WF = WF => {
          const SF = this.elements.get(FF);
          var CF, AF;
          SF && (null === (CF = this.onElement) || void 0 === CF || CF.call(this, SF, !1));
          WF ? (this.elements.set(FF, WF), null === (AF = this.onElement) || void 0 === AF || AF.call(this, WF, !0)) : (this.elements.delete(FF), this.refs.delete(FF))
        }, this.refs.set(FF, WF)), WF
      }
      onAfterRender(FF, WF, SF, CF) {
        for (const AF of this.snapshot) {
          const uF = this.elements.get(AF.key);
          if (!uF) continue;
          if (CF(AF.key)) {
            we(uF, !0);
            continue
          }
          const hF = Ue(uF, FF, WF, AF.pos, 1.1, 24);
          hF && SF.add(hF, uF, 0, !1)
        }
      }
    }
    const KE = (0, CF.memo)((function(FF) {
        let {
          item: WF
        } = FF;
        return (0, Qu.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, Qu.jsx)(ku.b, {
            itemName: WF,
            amount: 0
          })
        })
      })),
      wE = (0, CF.memo)((function(FF) {
        let {
          label: WF,
          bindRef: SF,
          countRef: CF,
          wordsRef: AF
        } = FF;
        return (0, Qu.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: SF,
          hidden: !0,
          children: [(0, Qu.jsx)(KE, {
            item: WF.item
          }), WF.count >= 0 && (0, Qu.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, Qu.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: AF
            }), (0, Qu.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: CF
            })]
          })]
        })
      })),
      XE = (0, CF.memo)((function(FF) {
        let {
          store: WF
        } = FF;
        const {
          t: SF
        } = (0, TA.B)(), [AF, uF] = (0, CF.useState)((() => WF.list()));
        return (0, CF.useEffect)((() => (uF(WF.list()), WF.subscribe((() => {
          uF(WF.list())
        })))), [WF]), (0, CF.useEffect)((() => {
          WF.setCountWords((FF => SF("buildAFactory2Game:labelSiloCount", {
            count: du(FF)
          })))
        }), [WF, SF]), (0, Qu.jsx)("div", {
          className: "Baf2IslandLabels",
          children: AF.map((FF => -2 === FF.count ? null : (0, Qu.jsx)(wE, {
            label: FF,
            bindRef: WF.bind(FF.key),
            countRef: WF.bindCount(FF.key),
            wordsRef: WF.bindCount(FF.key, "words")
          }, FF.key)))
        })
      })),
      UE = {
        read: () => !0,
        write: () => {}
      };

    function BE(FF) {
      return `${FF[0]},${FF[1]},${FF[2]}`
    }

    function jQ(FF) {
      let [WF, SF, CF, AF, uF, hF, bW, dF, PF, RF, iW, eF] = FF;
      const EF = void 0 === iW || void 0 === eF ? function(FF) {
        return [Math.floor((FF - 1) / 2), 0]
      }(uF) : [iW, eF];
      return {
        kind: 0 === dF ? "reactor" : "battery",
        box: cC([WF, SF, CF], AF, uF, hF, bW, EF),
        formed: 1 === PF,
        level: RF
      }
    }
    class vQ {
      constructor() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : UE;
        this.guideSetting = FF, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = FF.read()
      }
      KD(FF) {
        var WF;
        const SF = new Map;
        for (const CF of FF.baf2RxPlanList) {
          const FF = jQ(CF);
          SF.set(BE(FF.box.ctrl), FF)
        }
        this.plans = SF, this.layouts = new Map((null !== (WF = FF.baf2RxLayouts) && void 0 !== WF ? WF : []).map((FF => {
          let [WF, SF, CF, AF] = FF;
          return [BE([WF, SF, CF]), AF]
        }))), this.predicted.clear(), FF.baf2RxFormedAt && (this.formed = {
          ctrl: FF.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const CF of [...this.startersOff]) {
          const FF = SF.get(CF);
          FF && !FF.formed || this.startersOff.delete(CF)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((FF => this.planByKey(FF)))
      }
      planAt(FF) {
        return this.planByKey(BE(FF))
      }
      predictSize(FF, WF) {
        this.predicted.set(BE(FF), WF), this.changed()
      }
      unpredict(FF) {
        this.predicted.delete(BE(FF)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(FF) {
        var WF;
        const SF = BE(FF);
        return this.predicted.has(SF) ? null : null !== (WF = this.layouts.get(SF)) && void 0 !== WF ? WF : null
      }
      showsStarter(FF) {
        return !this.startersOff.has(BE(FF))
      }
      setStarter(FF, WF) {
        const SF = BE(FF);
        WF ? this.startersOff.delete(SF) : this.startersOff.add(SF), this.changed()
      }
      guideOn() {
        return this.guide
      }
      setGuide(FF) {
        this.guide = FF, this.guideSetting.write(FF), this.changed()
      }
      getVersion() {
        return this.version
      }
      subscribe(FF) {
        return this.listeners.add(FF), () => {
          this.listeners.delete(FF)
        }
      }
      dispose() {
        this.plans.clear(), this.predicted.clear(), this.startersOff.clear(), this.layouts.clear(), this.listeners.clear(), this.formed = null
      }
      planByKey(FF) {
        const WF = this.plans.get(FF);
        if (!WF) return null;
        const SF = this.predicted.get(FF);
        return SF ? {
          ...WF,
          box: zC(WF.box, WF.kind, SF[0], SF[1], SF[2])
        } : WF
      }
      changed() {
        this.version++;
        for (const FF of this.listeners) FF()
      }
    }
    var JE = SF(161);
    const pE = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function lE(FF, WF, SF, CF) {
      const AF = FF.length / 3;
      for (let uF = 0; uF < pE.length / 3; uF++) FF.push(pE[3 * uF] * CF[0] / 2 + SF[0], pE[3 * uF + 1] * CF[1] / 2 + SF[1], pE[3 * uF + 2] * CF[2] / 2 + SF[2]);
      for (let uF = AF; uF < AF + 24; uF += 4) WF.push(uF, uF + 1, uF + 2, uF, uF + 2, uF + 3)
    }

    function FQ(FF, WF, SF) {
      const CF = WF[0][0],
        AF = [],
        uF = [];
      for (const [hF, bW] of WF) lE(AF, uF, [hF[0] - CF[0], hF[1] - CF[1], hF[2] - CF[2]], bW);
      return FF.createGameMesh({
        positions: AF,
        indices: uF
      }, SF, CF)
    }

    function WQ(FF, WF) {
      const SF = FF.w - 2,
        CF = FF.d - 2;
      return 1 === function(FF, WF, SF, CF) {
        const [AF, uF, hF] = FF;
        if (Number(AF <= 2) + Number(uF <= 2) + Number(hF <= 2) >= 2) return function(FF, WF, SF) {
          return (FF + WF + SF) % 2 === 0 ? 1 : 3
        }(WF, SF, CF);
        const [bW, dF] = AF >= uF && AF >= hF ? [SF, CF] : uF >= hF ? [WF, CF] : [WF, SF];
        return bW % 2 === 0 && dF % 2 === 0 ? 1 : 3
      }([SF, FF.h - 2, CF], WF % SF, Math.floor(WF / (SF * CF)), Math.floor(WF / SF) % CF) ? "rod" : "channel"
    }

    function SQ(FF, WF, SF) {
      if ("reactor" !== FF.kind || FF.formed || !WF) return !1;
      const CF = yC(FF.box);
      for (let AF = 0; AF < CF; AF++) {
        const FF = SF(AF);
        if (null !== FF && qC(FF)) return !1
      }
      return !0
    }

    function CQ(FF, WF, SF, CF, AF) {
      var uF;
      let hF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const bW = XS(FF.box, WF),
        dF = vC(FF.kind, bW, SF);
      if ("wrong" === dF || "blocked" === dF) return "wrong";
      if (!AF) return null;
      if ("inside" === bW && "reactor" === FF.kind && "Air" === VS(SF)) {
        if (null !== hF) {
          var PF;
          const SF = Gi[ze(hF, US(FF.box, WF))];
          return SF && null !== (PF = rP(SF)) && void 0 !== PF ? PF : null
        }
        if (CF) return WQ(FF.box, US(FF.box, WF))
      }
      if ("missing" !== dF) return null;
      const RF = JS(FF.kind, bW);
      return null === RF ? null : null !== (uF = rP(RF)) && void 0 !== uF ? uF : null
    }
    const AQ = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function uQ(FF, WF, SF) {
      const CF = SF => {
        const CF = WF(KS(FF.box, SF));
        return null !== CF && function(FF, WF) {
          return "reactor" !== FF.kind || WF !== nS(FF.box) && "inside" !== XS(FF.box, WF)
        }(FF, SF) && "ok" !== vC(FF.kind, XS(FF.box, SF), CF)
      };
      if (SF) {
        const uF = wS(FF.box, [Math.floor(SF[0]), Math.floor(SF[1]), Math.floor(SF[2])]);
        if (uF >= 0 && (CF(uF) || (AF = uF, "reactor" === FF.kind && "inside" === XS(FF.box, AF) && "Air" === WF(KS(FF.box, AF))))) return uF
      }
      var AF;
      const uF = yC(FF.box);
      for (let hF = 0; hF < uF; hF++)
        if (CF(hF)) return hF;
      return -1
    }

    function hQ(FF, WF) {
      return Math.floor(WF / (FF.w * FF.d))
    }

    function br(FF, WF, SF) {
      return SF >= 0 && hQ(FF, WF) > hQ(FF, SF)
    }

    function dQ(FF, WF) {
      return WF >= 0 && FF.h >= 3 && hQ(FF, WF) === FF.h - 1
    }

    function PQ(FF) {
      const WF = VS(FF);
      return WF === RS || "Collider" === WF || "Laser" === WF || WF.startsWith("_Collider ")
    }

    function RQ(FF, WF, SF, CF) {
      if (CF(FF)) return null;
      if (!AQ.every((WF => {
          let [CF, AF, uF] = WF;
          const hF = SF([FF[0] + CF, FF[1] + AF, FF[2] + uF]);
          return null !== hF && !ZS("reactor", hF) && "reactor" !== NS(hF)
        }))) return null;
      const AF = oS("reactor").min,
        uF = cC([FF[0], FF[1], FF[2]], function(FF, WF) {
          const SF = WF[0] - (FF[0] + .5),
            CF = WF[2] - (FF[2] + .5);
          return Math.abs(SF) >= Math.abs(CF) ? SF >= 0 ? 2 : 4 : CF >= 0 ? 1 : 3
        }(FF, WF), AF, AF, AF, GS("reactor", AF)),
        hF = nS(uF);
      let bW = !0;
      for (let dF = 0; dF < yC(uF) && bW; dF++) {
        if (dF === hF) continue;
        const FF = KS(uF, dF),
          WF = SF(FF);
        bW = !CF(FF) && (null === WF || !PQ(WF))
      }
      return {
        box: uF,
        fits: bW
      }
    }
    const ir = Qd,
      eQ = "baf2Goal",
      EQ = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      QQ = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      rr = .4;

    function gr(FF, WF) {
      let [SF, CF, AF] = FF;
      const uF = Vd([SF - .02, CF - .02, AF - .02], [SF + 1.02, CF + 1.02, AF + 1.02], .07);
      return WF && (uF.push([
        [SF + .5, CF + 1 + .7, AF + .5],
        [.08, 1.4, .08]
      ]), uF.push([
        [SF + .5, CF + 1 + 1.4 + .2, AF + .5],
        [rr, rr, rr]
      ])), uF
    }

    function tr(FF, WF) {
      let [SF, CF, AF] = WF;
      return FF.isBlockInLoadedChunk(SF, CF, AF) ? FF.blockIdToBlockName(FF.getBlockId(SF, CF, AF)) : null
    }
    let TQ = null;
    const ar = new Set;
    let kr = null;

    function qr(FF) {
      TQ = FF;
      for (const WF of ar) WF(FF)
    }
    class VQ {
      constructor(FF) {
        var WF;
        this.plans = FF, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (WF = FF => {
          var WF, SF;
          this.setGoal(null !== (WF = null === FF || void 0 === FF ? void 0 : FF.goal) && void 0 !== WF ? WF : null, null !== (SF = null === FF || void 0 === FF ? void 0 : FF.startsBattery) && void 0 !== SF && SF)
        }, kr ??= [DA.j.subscribe("setDirectionArrow", (FF => {
          let {
            id: WF,
            position: SF,
            text: CF
          } = FF;
          WF === eQ && qr({
            goal: [Math.floor(SF[0]), Math.floor(SF[1]), Math.floor(SF[2])],
            startsBattery: JSON.stringify(null !== CF && void 0 !== CF ? CF : null).includes("arrowStartBattery")
          })
        })), DA.j.subscribe("clearDirectionArrow", (FF => {
          let {
            id: WF
          } = FF;
          null !== WF && WF !== eQ || qr(null)
        }))], ar.add(WF), WF(TQ), () => {
          ar.delete(WF)
        })
      }
      onAfterRender(FF, WF) {
        const SF = performance.now();
        if (this.cues.length > 0) {
          const WF = .55 + .45 * Math.sin(SF / 1100 * Math.PI * 2);
          for (const SF of this.cues) FF.setGameMesh(SF, {
            visibility: WF
          })
        }
        if (SF - this.lastCheckMs < 150) return;
        this.lastCheckMs = SF;
        const CF = this.plans.all().filter((FF => {
            const [SF, CF, AF] = FF.box.ctrl;
            return (!FF.formed || null !== this.plans.layoutOf(FF.box.ctrl)) && (SF - WF[0]) ** 2 + (CF - WF[1]) ** 2 + (AF - WF[2]) ** 2 <= 2304
          })),
          AF = function(FF, WF) {
            const SF = JE.h.MC,
              CF = new Map;
            for (const uF of WF) {
              const WF = KS(uF.box, 0),
                hF = KS(uF.box, yC(uF.box) - 1),
                bW = [Math.min(WF[0], hF[0]), Math.min(WF[1], hF[1]), Math.min(WF[2], hF[2])].map((FF => Math.floor(FF / SF))),
                dF = [Math.max(WF[0], hF[0]), Math.max(WF[1], hF[1]), Math.max(WF[2], hF[2])].map((FF => Math.floor(FF / SF)));
              for (let SF = bW[0]; SF <= dF[0]; SF++)
                for (let WF = bW[1]; WF <= dF[1]; WF++)
                  for (let uF = bW[2]; uF <= dF[2]; uF++) {
                    var AF;
                    CF.set(`${SF},${WF},${uF}`, null !== (AF = FF.getChunkVersion(SF, WF, uF)) && void 0 !== AF ? AF : -1)
                  }
            }
            return CF
          }(FF, CF);
        this.plans.getVersion() === this.storeVersion && (function(FF, WF) {
          if (FF.size !== WF.size) return !1;
          for (const [SF, CF] of FF)
            if (WF.get(SF) !== CF) return !1;
          return !0
        }(AF, this.chunkVersions) || SF - this.lastRescanMs < 600) || (this.lastRescanMs = SF, this.storeVersion = this.plans.getVersion(), this.chunkVersions = AF, this.redraw(FF, CF))
      }
      dispose(FF) {
        this.unwatch(), TQ = null, this.clearMeshes(FF), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(FF, WF) {
        var SF;
        (null === FF || void 0 === FF ? void 0 : FF.join()) === (null === (SF = this.goal) || void 0 === SF ? void 0 : SF.join()) && WF === this.startsBattery || (this.goal = FF, this.startsBattery = WF, this.storeVersion = -1)
      }
      redraw(FF, WF) {
        const SF = WF => tr(FF, WF),
          CF = new Map,
          AF = [],
          uF = this.plans.guideOn();
        for (const PF of WF) {
          const FF = uF && SQ(PF, this.plans.showsStarter(PF.box.ctrl), (FF => SF(KS(PF.box, FF)))),
            WF = "reactor" === PF.kind ? this.plans.layoutOf(PF.box.ctrl) : null,
            hF = uF && !PF.formed ? uQ(PF, SF, this.goal) : -1;
          hF >= 0 && AF.push([KS(PF.box, hF), dQ(PF.box, hF)]);
          const bW = yC(PF.box);
          for (let AF = 0; AF < bW; AF++) {
            const bW = KS(PF.box, AF),
              dF = SF(bW),
              RF = null === dF ? null : CQ(PF, AF, dF, FF, uF, WF);
            if (null !== RF) {
              const FF = "wrong" !== RF && br(PF.box, AF, hF),
                WF = FF ? `${RF}Dim` : RF;
              let SF = CF.get(WF);
              SF || (SF = {
                draw: {
                  ghost: RF,
                  dim: FF
                },
                list: []
              }, CF.set(WF, SF)), SF.list.push(bW)
            }
          }
        }
        if (uF && this.startsBattery && this.goal) {
          const [FF, WF, AF] = this.goal, uF = [];
          for (const [CF, hF, bW] of EQ) {
            const dF = [FF + CF, WF + hF, AF + bW];
            "Air" === SF(dF) && uF.push(dF)
          }
          if (uF.length > 0) {
            var hF;
            const FF = null !== (hF = CF.get("cell")) && void 0 !== hF ? hF : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            FF.list.push(...uF), CF.set("cell", FF)
          }
        }
        const bW = [...CF.keys()].sort(),
          dF = [...bW.map((FF => `${FF}:${CF.get(FF).list.join(";")}`)), `cue:${AF.join(";")}`].join("|");
        if (dF !== this.shownKey) {
          this.shownKey = dF, this.clearMeshes(FF);
          for (const WF of bW) {
            const {
              draw: SF,
              list: AF
            } = CF.get(WF);
            this.meshes.push(this.build(FF, SF, AF))
          }
          for (const [WF, SF] of AF) this.cues.push(FQ(FF, gr(WF, SF), QQ))
        }
      }
      build(FF, WF, SF) {
        let {
          ghost: CF,
          dim: AF
        } = WF;
        const {
          size: uF,
          colour: hF,
          alpha: bW
        } = ir[CF], dF = SF[0], PF = [], RF = [];
        for (const [iW, eF, EF] of SF) lE(PF, RF, [iW - dF[0] + .5, eF - dF[1] + .5, EF - dF[2] + .5], [uF, uF, uF]);
        return FF.createGameMesh({
          positions: PF,
          indices: RF
        }, {
          rgb: hF,
          alpha: bW * (AF ? .3 : 1)
        }, dF)
      }
      clearMeshes(FF) {
        for (const WF of [...this.meshes, ...this.cues]) FF.disposeGameMesh(WF);
        this.meshes = [], this.cues = []
      }
    }
    const NQ = [.56, .83, 1],
      DQ = [1, .3, .25];
    class LQ {
      constructor(FF) {
        this.plans = FF, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(FF, WF, SF) {
        var CF;
        const AF = performance.now();
        if (AF - this.lastCheckMs < 150) return;
        this.lastCheckMs = AF;
        const uF = WF => tr(FF, WF),
          hF = null === (CF = FF.pbF(WF)) || void 0 === CF ? void 0 : CF.name,
          bW = hF && "Reactor Frame" === VS(hF) ? FF.getTargetedBlock() : null,
          dF = bW ? [bW.Zu[0], bW.Zu[1], bW.Zu[2]] : null,
          PF = null !== dF && "Air" === uF(dF) && dF.every(((FF, WF) => Math.abs(FF + .5 - SF[WF]) <= 8)) ? RQ(dF, SF, uF, (FF => this.inPlan(FF))) : null,
          RF = PF ? `${PF.box.ctrl.join()}|${PF.box.rot}|${PF.fits}` : "";
        RF !== this.shownKey && this.show(FF, RF, PF)
      }
      dispose(FF) {
        this.clear(FF), this.shownKey = ""
      }
      inPlan(FF) {
        return this.plans.all().some((WF => wS(WF.box, FF) >= 0))
      }
      show(FF, WF, SF) {
        if (this.clear(FF), this.shownKey = WF, !SF) return;
        const {
          box: CF,
          fits: AF
        } = SF, uF = AF ? NQ : DQ, {
          lo: hF,
          hi: bW
        } = qP(CF);
        this.meshes.push(FQ(FF, Vd(hF, bW, .05), {
          rgb: uF,
          alpha: 1
        }));
        const dF = [],
          PF = KS(CF, 0)[1];
        for (let RF = 0; RF < CF.w * CF.d; RF++) {
          const [FF, , WF] = KS(CF, RF);
          dF.push([
            [FF + .5, PF + .02 + .01, WF + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(FQ(FF, dF, {
          rgb: uF,
          alpha: .25
        }))
      }
      clear(FF) {
        for (const WF of this.meshes) FF.disposeGameMesh(WF);
        this.meshes = []
      }
    }
    const mr = "buildAFactory2Game:";

    function OQ(FF, WF, SF) {
      const CF = FF => {
          const [SF, CF, AF] = FF.box.ctrl;
          return SF === WF[0] && CF === WF[1] && AF === WF[2]
        },
        AF = FF.find((FF => CF(FF) || wS(FF.box, WF) >= 0));
      if (!AF) return null;
      const uF = function(FF, WF, SF) {
        const {
          w: CF,
          h: AF,
          d: uF
        } = FF.box, hF = "reactor" === FF.kind ? `${mr}rxTitle` : `${mr}batTitle`;
        if (FF.formed) return {
          key: `${mr}lookPlanFormed`,
          kindKey: hF,
          w: CF,
          h: AF,
          d: uF,
          count: 0
        };
        let bW = 0,
          dF = 0;
        for (let RF = 0; RF < yC(FF.box); RF++) {
          const WF = SF(KS(FF.box, RF)),
            CF = null === WF ? "ok" : vC(FF.kind, XS(FF.box, RF), WF);
          bW += "missing" === CF ? 1 : 0, dF += "wrong" === CF || "blocked" === CF ? 1 : 0
        }
        const PF = function(FF, WF, SF) {
          if (WF < 0 || null === SF) return;
          const CF = XS(FF.box, WF),
            AF = vC(FF.kind, CF, SF);
          return "blocked" === AF ? `${mr}lookWhy_blocked` : "wrong" === AF ? "ctrl" === CF ? `${mr}lookWhy_ctrl` : `${mr}lookWhy_reactor_${CF}` : void 0
        }(FF, wS(FF.box, WF), SF([WF[0], WF[1], WF[2]]));
        if (bW > 0) return {
          key: `${mr}lookPlanToBuild`,
          kindKey: hF,
          w: CF,
          h: AF,
          d: uF,
          count: bW,
          why: PF
        };
        if (dF > 0) return {
          key: `${mr}lookPlanTakeOut`,
          kindKey: hF,
          w: CF,
          h: AF,
          d: uF,
          count: dF,
          why: PF
        };
        return {
          key: "reactor" === FF.kind ? `${mr}lookPlanNoRods` : `${mr}lookPlanDone`,
          kindKey: hF,
          w: CF,
          h: AF,
          d: uF,
          count: 0
        }
      }(AF, WF, SF);
      return "reactor" === AF.kind && CF(AF) ? {
        ...uF,
        ctrl: !0
      } : uF
    }

    function xr(FF, WF) {
      return FF === WF || null !== FF && null !== WF && FF.key === WF.key && FF.kindKey === WF.kindKey && FF.w === WF.w && FF.h === WF.h && FF.d === WF.d && FF.count === WF.count && FF.why === WF.why && FF.ctrl === WF.ctrl
    }

    function ZQ() {
      return performance.now()
    }
    class oQ {
      constructor(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ZQ;
        this.ticket = FF, this.sent = WF, this.backstopMs = SF, this.now = CF, this.queuedAt = void 0, this.queuedAt = CF()
      }
      answered() {
        const FF = this.now(),
          WF = this.sent.leftAt(this.ticket);
        return null !== WF && FF - WF > 4e3 || FF - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class YQ {
      constructor() {
        this.echoes = []
      }
      add(FF) {
        this.echoes = this.echoes.filter((FF => !FF.answered())), this.echoes.push(FF)
      }
      answered() {
        var FF, WF;
        return null === (FF = null === (WF = this.echoes.at(-1)) || void 0 === WF ? void 0 : WF.answered()) || void 0 === FF || FF
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((FF => FF.answered()))
      }
      age() {
        var FF, WF;
        return null !== (FF = null === (WF = this.echoes.at(-1)) || void 0 === WF ? void 0 : WF.age()) && void 0 !== FF ? FF : null
      }
      clear() {
        this.echoes = []
      }
    }
    class MQ {
      constructor(FF) {
        this.send = FF, this.value = null, this.sent = null, this.echoes = new YQ, this.down = !1, this.timer = null
      }
      shown(FF) {
        return null === this.value ? FF : this.down || this.value !== this.sent ? this.value : FF === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), FF) : this.value
      }
      pendingFor(FF) {
        return null !== this.value && this.value === this.sent && FF !== this.value ? this.echoes.age() : null
      }
      assume(FF, WF) {
        this.disarm(), this.down = !1, this.value = FF, this.sent = FF, this.echoes.clear(), this.echoes.add(WF)
      }
      press() {
        this.down = !0
      }
      drag(FF) {
        this.value = FF, this.arm(this.down ? 1e3 : 400)
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
      arm(FF) {
        this.disarm(), this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), FF)
      }
      disarm() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
    class cr {
      constructor() {
        this.pending = new Map
      }
      set(FF, WF, SF) {
        var CF;
        const AF = null !== (CF = this.pending.get(FF)) && void 0 !== CF ? CF : {
          on: WF,
          echoes: new YQ
        };
        AF.on = WF, AF.echoes.add(SF), this.pending.set(FF, AF)
      }
      shown(FF) {
        let WF = FF;
        for (const [SF, {
            on: CF,
            echoes: AF
          }] of this.pending) 0 !== (FF & SF) === CF && AF.agreeCounts() || AF.answered() ? this.pending.delete(SF) : WF = CF ? WF | SF : WF & ~SF;
        return WF
      }
      pendingMask() {
        let FF = 0;
        for (const WF of this.pending.keys()) FF |= WF;
        return FF
      }
      pendingFor(FF) {
        let WF = null;
        for (const [CF, {
            on: AF,
            echoes: uF
          }] of this.pending) {
          if (void 0 !== FF && 0 !== (FF & CF) === AF) continue;
          const hF = uF.age();
          var SF;
          if (null !== hF) WF = Math.max(null !== (SF = WF) && void 0 !== SF ? SF : 0, hF)
        }
        return WF
      }
      clear() {
        this.pending.clear()
      }
    }
    class GQ {
      constructor() {
        this.dims = null, this.echoes = new YQ, this.unmet = null
      }
      shown(FF) {
        var WF;
        return this.dims && (zr(this.dims, FF) && this.echoes.agreeCounts() || this.echoes.answered()) && (zr(this.dims, FF) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (WF = this.dims) && void 0 !== WF ? WF : FF
      }
      takeUnmet() {
        const FF = this.unmet;
        return this.unmet = null, FF
      }
      set(FF, WF) {
        this.dims = FF, this.echoes.add(WF)
      }
      pendingFor(FF) {
        return null === this.dims || FF && zr(this.dims, FF) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function zr(FF, WF) {
      return FF[0] === WF[0] && FF[1] === WF[1] && FF[2] === WF[2]
    }
    class IQ {
      constructor() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZQ;
        this.now = FF, this.taps = new Map
      }
      tap(FF, WF, SF) {
        return !this.busy(FF) && (this.taps.set(FF, {
          at: this.now(),
          done: WF
        }), SF(), !0)
      }
      settle(FF) {
        for (const [WF, SF] of [...this.taps]) SF.done(FF) && this.taps.delete(WF)
      }
      busy(FF) {
        const WF = this.taps.get(FF);
        return !!WF && (!(this.now() - WF.at >= 3e3) || (this.taps.delete(FF), !1))
      }
      busyIds() {
        const FF = new Set;
        for (const WF of [...this.taps.keys()]) this.busy(WF) && FF.add(WF);
        return FF
      }
      clear() {
        this.taps.clear()
      }
    }

    function fQ(FF) {
      return {
        send: WF => FF.track(WF),
        sendUrgent: (WF, SF) => FF.track(WF, {
          urgent: !0,
          supersedes: SF
        }),
        leftAt: WF => FF.leftAt(WF),
        holdReserve: () => FF.holdUrgentReserve(),
        answerMs: Vh
      }
    }

    function yr() {
      return performance.now()
    }

    function sQ(FF) {
      const WF = FF.baf2RxNeed.map((FF => {
        let [WF, SF] = FF;
        return [WF, SF]
      }));
      return JSON.stringify([FF.baf2RxFormed, WF, FF.baf2RxBad, FF.baf2RxCells])
    }

    function nQ(FF, WF) {
      const SF = 0 !== (WF & uW),
        CF = 0 !== (FF.baf2RxFlags & uW);
      return !SF || CF || "running" !== FF.baf2RxState && "idle" !== FF.baf2RxState ? !SF && CF && "scram" === FF.baf2RxState && FF.baf2RxFuel > 0 ? "idle" : FF.baf2RxState : "scram"
    }

    function HQ(FF) {
      return JSON.stringify([FF.baf2BatFormed, FF.baf2BatNeed, FF.baf2BatBad])
    }

    function KQ(FF) {
      return FF.join(",")
    }
    class wQ {
      constructor() {
        this.listeners = new Set
      }
      subscribe(FF) {
        return this.listeners.add(FF), () => {
          this.listeners.delete(FF)
        }
      }
      notify() {
        for (const FF of this.listeners) FF()
      }
      clear() {
        this.listeners.clear()
      }
    }
    class XQ {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(FF, WF) {
        this.lastAt = FF, this.lastUntil = FF + WF
      }
      answered(FF) {
        return this.lastAt >= FF || FF < this.lastUntil
      }
    }
    class UQ {
      constructor(FF, WF) {
        this.link = FF, this.now = WF, this.hold = new GQ, this.picked = null, this.notTaken = null
      }
      shown(FF) {
        const WF = this.hold.shown(FF);
        if (this.hold.takeUnmet() && this.picked) {
          var SF;
          const {
            plans: WF,
            ctrl: CF,
            at: AF
          } = this.picked;
          this.picked = null, WF.unpredict(CF), null === (SF = this.notTaken) || void 0 === SF || SF.call(this, FF, AF)
        }
        return WF
      }
      pendingFor(FF) {
        return this.hold.pendingFor(FF)
      }
      lW(FF, WF, SF) {
        FF.predictSize(WF, SF), this.picked = {
          plans: FF,
          ctrl: WF,
          at: this.now()
        };
        const CF = this.link.send(AW(WF, "plan", ...SF));
        this.hold.set(SF, new oQ(CF, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class BQ {
      constructor(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : yr;
        this.plans = FF, this.readInterior = WF, this.link = SF, this.now = CF, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new cr, this.throttle = void 0, this.oneShots = void 0, this.listeners = new wQ, this.redraw = null, this.releaseReserve = null, this.size = new UQ(SF, CF), this.oneShots = new IQ(CF), this.throttle = new MQ((FF => this.echo(this.link.send(this.command("throttle", FF)))))
      }
      set(FF) {
        !FF.baf2RxOpen && this.raw && KQ(this.raw.baf2RxAt) === KQ(FF.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(FF), this.Uu(FF)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(FF) {
        this.size.notTaken = FF
      }
      resize(FF) {
        this.raw && (this.size.lW(this.plans, this.raw.baf2RxAt, FF), this.Uu(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const FF = this.raw.baf2RxAt;
        this.plans.setStarter(FF, !this.plans.showsStarter(FF)), this.Uu(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.Uu(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.Uu(this.raw)
      }
      send(FF) {
        if (this.raw) {
          for (var WF = arguments.length, SF = new Array(WF > 1 ? WF - 1 : 0), CF = 1; CF < WF; CF++) SF[CF - 1] = arguments[CF];
          this.link.send(this.command(FF, ...SF))
        }
      }
      tap(FF, WF) {
        this.raw && this.oneShots.tap(FF, function(FF, WF) {
          if ("start" === FF) return FF => 0 === (FF.baf2RxFlags & uW);
          if ("odConfirm" === FF) return FF => 0 !== (FF.baf2RxFlags & hW);
          const SF = sQ(WF);
          return FF => sQ(FF) !== SF
        }(FF, this.raw), WF) && ("start" === FF && (this.startedAt = this.now()), this.Uu(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(uW, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(FF, WF) {
        if (!this.raw) return;
        const SF = FF === uW ? this.command(WF ? "scram" : "start") : this.command("od", WF ? 1 : 0),
          CF = WF && FF === uW,
          AF = `${CW} ${this.raw.baf2RxAt.join(" ")} `,
          uF = this.echo(CF ? this.link.sendUrgent(SF, (FF => {
            const WF = FF.startsWith(AF) ? FF.slice(AF.length).split(" ")[0] : null;
            return "throttle" === WF || "start" === WF
          })) : this.link.send(SF));
        this.flags.set(FF, WF, uF), CF && this.throttle.assume(0, uF), this.Uu(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(FF) {
        this.throttle.drag(FF), this.raw && this.Uu(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.Uu(this.raw)
      }
      subscribe(FF) {
        return this.listeners.subscribe(FF)
      }
      opened() {
        this.releaseReserve ??= this.link.holdReserve()
      }
      closed() {
        var FF;
        this.throttle.release(), null === (FF = this.releaseReserve) || void 0 === FF || FF.call(this), this.releaseReserve = null
      }
      dispose() {
        this.closed(), this.throttle.clear(), this.flags.clear(), this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.raw = null, this.looksOf = null, this.listeners.clear()
      }
      command(FF) {
        for (var WF = arguments.length, SF = new Array(WF > 1 ? WF - 1 : 0), CF = 1; CF < WF; CF++) SF[CF - 1] = arguments[CF];
        return AW(this.raw.baf2RxAt, FF, ...SF)
      }
      echo(FF) {
        return new oQ(FF, this.link, this.link.answerMs, this.now)
      }
      Uu(FF) {
        var WF;
        this.raw = FF;
        const SF = this.flags.shown(FF.baf2RxFlags),
          CF = {
            ...FF,
            baf2RxFlags: SF,
            baf2RxTarget: this.throttle.shown(FF.baf2RxTarget),
            baf2RxState: nQ(FF, SF)
          },
          AF = this.size.shown(CF.baf2RxDims),
          uF = this.throttle.pendingFor(),
          hF = [this.throttle.pendingFor(FF.baf2RxTarget), this.flags.pendingFor(FF.baf2RxFlags), this.size.pendingFor(FF.baf2RxDims)].filter((FF => null !== FF)),
          bW = hF.length > 0 ? Math.max(...hF) : null,
          dF = this.oneShots.busyIds(),
          PF = CF.baf2RxAt;
        let RF, iW, eF = null,
          EF = [Math.max(0, AF[0] - 2), Math.max(0, AF[1] - 2), Math.max(0, AF[2] - 2)];
        if (CF.baf2RxFormed) {
          const [FF, WF, SF] = CF.baf2RxDims;
          EF = [Math.max(0, FF - 2), Math.max(0, WF - 2), Math.max(0, SF - 2)], RF = Array.from(CF.baf2RxCells, Number), iW = `${EF.join(",")}:${CF.baf2RxCells}`
        } else {
          var QF;
          const FF = null === (QF = this.plans.planAt(PF)) || void 0 === QF ? void 0 : QF.box,
            WF = FF ? zC(FF, "reactor", ...AF) : cC(PF, 1, ...AF, GS("reactor", AF[0])),
            SF = this.readInterior(WF);
          eF = Kb(EF, SF), RF = SF, iW = `${EF.join(",")}:${SF.join("")}`
        }(null === (WF = this.looksOf) || void 0 === WF ? void 0 : WF.key) !== iW && (this.looksOf = {
          key: iW,
          looks: vd(EF, RF)
        }), this.view = {
          status: CF,
          dims: AF,
          plan: eF,
          inner: EF,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(PF),
          odConfirmed: this.odConfirmed || 0 !== (CF.baf2RxFlags & eW),
          guide: this.plans.guideOn(),
          throttlePending: null !== uF,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== bW && bW >= 5e3,
          busy: dF,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== bW || dF.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.Uu(this.raw)
        }), 250))
      }
    }
    class jr {
      constructor(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yr;
        this.plans = FF, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new wQ, this.redraw = null, this.size = new UQ(WF, SF), this.oneShots = new IQ(SF)
      }
      set(FF) {
        !FF.baf2BatOpen && this.view && KQ(this.view.status.baf2BatAt) === KQ(FF.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(FF), this.Uu(FF)
      }
      tap(FF, WF) {
        if (!this.view) return;
        const SF = HQ(this.view.status);
        this.oneShots.tap(FF, (FF => HQ(FF) !== SF), WF) && this.Uu(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(FF) {
        this.size.notTaken = FF
      }
      resize(FF) {
        this.view && (this.size.lW(this.plans, this.view.status.baf2BatAt, FF), this.Uu(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.Uu(this.view.status)
      }
      subscribe(FF) {
        return this.listeners.subscribe(FF)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      Uu(FF) {
        const WF = this.size.shown(FF.baf2BatDims),
          SF = this.oneShots.busyIds();
        this.view = {
          status: FF,
          dims: WF,
          ZF: Rd(WF, FF.baf2BatDims) ? FF.baf2BatCapacity : lb(...WF),
          guide: this.plans.guideOn(),
          busy: SF
        }, this.listeners.notify(), SF.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.Uu(this.view.status)
        }), 250))
      }
    }
    const vr = "buildAFactory2Game:";

    function JQ() {
      var FF;
      const WF = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!WF) return null;
      const SF = WF.querySelector(".ExitButton");
      return function(FF, WF) {
        const SF = WF ? WF.left - 8 : FF.right;
        return {
          left: FF.left,
          top: FF.top,
          width: Math.max(0, SF - FF.left),
          height: FF.height
        }
      }(WF.getBoundingClientRect(), null !== (FF = null === SF || void 0 === SF ? void 0 : SF.getBoundingClientRect()) && void 0 !== FF ? FF : null)
    }
    const pQ = (0, CF.memo)((function(FF) {
      let {
        store: WF
      } = FF;
      const {
        t: SF
      } = (0, TA.B)(), [AF, uF] = (0, CF.useState)((() => WF.get())), [hF, bW] = (0, CF.useState)((() => performance.now()));
      (0, CF.useEffect)((() => (uF(WF.get()), WF.subscribe((() => {
        uF(WF.get()), bW(performance.now())
      })))), [WF]);
      const {
        alarm: dF,
        boomAt: PF
      } = AF, RF = null !== dF && null !== dF.secs, [iW, eF] = (0, CF.useState)(null);
      (0, CF.useEffect)((() => {
        if (!RF) return;
        eF(JQ());
        const FF = setInterval((() => {
          bW(performance.now()), eF(JQ())
        }), 250);
        return () => {
          clearInterval(FF)
        }
      }), [RF]);
      const [EF, QF] = (0, CF.useState)(!1);
      return (0, CF.useEffect)((() => {
        if (PF === -1 / 0) return;
        QF(!0);
        const FF = setTimeout((() => {
          QF(!1)
        }), 1300);
        return () => {
          clearTimeout(FF)
        }
      }), [PF]), (0, Qu.jsxs)(Qu.Fragment, {
        children: [null !== dF && (0, Qu.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: SF(dF.hot ? `${vr}rxAlarmSiren` : `${vr}rxAlarmDamaged`, {
            amount: String(dF.damage)
          })
        }), null !== dF && null !== dF.secs && (0, Qu.jsx)("div", {
          className: iW ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== iW && void 0 !== iW ? iW : void 0,
          "aria-live": "assertive",
          children: SF(`${vr}rxAlarmCountdown`, {
            amount: String((rW = dF.secs, gW = hF - dF.receivedAt, Math.max(1, Math.ceil(rW - gW / 1e3))))
          })
        }), EF && (0, Qu.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var rW, gW
    }));
    class lQ {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      KD(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const SF = FF.baf2RxAlarmAt.join(",");
        let CF = this.snapshot.boomAt;
        if (FF.baf2RxAlarmBoom) this.byReactor.delete(SF), CF = WF;
        else if (FF.baf2RxAlarmDamage <= 0) this.byReactor.delete(SF);
        else {
          var AF;
          this.byReactor.set(SF, {
            damage: FF.baf2RxAlarmDamage,
            secs: null !== (AF = FF.baf2RxAlarmSecs) && void 0 !== AF ? AF : null,
            hot: !0 === FF.baf2RxAlarmHot,
            receivedAt: WF
          })
        }
        this.Uu(CF)
      }
      retain(FF) {
        let WF = !1;
        for (const SF of [...this.byReactor.keys()]) FF.has(SF) || (this.byReactor.delete(SF), WF = !0);
        WF && this.Uu(this.snapshot.boomAt)
      }
      has(FF) {
        return this.byReactor.has(FF)
      }
      get() {
        return this.snapshot
      }
      subscribe(FF) {
        return this.listeners.add(FF), () => {
          this.listeners.delete(FF)
        }
      }
      dispose() {
        this.listeners.clear(), this.byReactor.clear()
      }
      Uu(FF) {
        let WF = null;
        for (const SF of this.byReactor.values())(!WF || SF.damage > WF.damage) && (WF = SF);
        this.snapshot = {
          alarm: WF,
          boomAt: FF
        };
        for (const SF of this.listeners) SF()
      }
    }
    const Fr = {
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

    function Wr(FF) {
      return [FF[0], FF[1], FF[2]]
    }

    function Sr(FF) {
      return `${FF[0]},${FF[1]},${FF[2]}`
    }
    class Cr {
      constructor(FF) {
        if (this.plans = FF, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var FF;
            return {
              active: this.glows.flatMap((FF => {
                let {
                  record: WF
                } = FF;
                return WF ? [WF] : []
              })),
              log: [...null !== (FF = this.devLog) && void 0 !== FF ? FF : []]
            }
          }, this.devLog && "undefined" !== typeof window) {
          window.baf2Glows = this.devAccessor
        }
      }
      glowLog() {
        var FF;
        return null !== (FF = this.devLog) && void 0 !== FF ? FF : []
      }
      check(FF, WF, SF) {
        const CF = new Set(WF.map((FF => Sr(FF.box.ctrl))));
        for (const hF of function(FF, WF) {
            const SF = [],
              CF = new Map(FF);
            FF.clear();
            for (const AF of WF) {
              const WF = BE(AF.box.ctrl),
                uF = AF.formed ? AF.level : 0;
              FF.set(WF, uF), uF > 0 && 0 === CF.get(WF) && SF.push(AF)
            }
            return SF
          }(this.levels, this.plans.all())) CF.has(Sr(hF.box.ctrl)) && this.show(FF, hF, "on", SF);
        const AF = this.plans.lastFormed();
        if (null === AF || AF.receivedAt <= this.flashedAt) return null;
        this.flashedAt = AF.receivedAt;
        const uF = function(FF, WF) {
          var SF;
          const CF = BE(FF);
          return null !== (SF = WF.find((FF => BE(FF.box.ctrl) === CF))) && void 0 !== SF ? SF : null
        }(AF.ctrl, WF);
        return uF && this.show(FF, uF, "formed", SF), uF
      }
      fade(FF, WF) {
        0 !== this.glows.length && (this.glows = this.glows.filter((SF => {
          let {
            mesh: CF,
            glow: AF,
            startMs: uF,
            record: hF
          } = SF;
          const bW = (WF - uF) / Fr[AF].ms;
          return bW >= 1 ? (FF.disposeGameMesh(CF), hF && (hF.endMs = WF), !1) : (FF.setGameMesh(CF, {
            visibility: "formed" === AF ? 1 - bW : Math.sin(Math.PI * bW)
          }), !0)
        })))
      }
      dispose(FF) {
        for (const {
            mesh: SF
          }
          of this.glows) FF.disposeGameMesh(SF);
        this.glows = [], this.levels.clear();
        const WF = "undefined" !== typeof window ? window : null;
        (null === WF || void 0 === WF ? void 0 : WF.baf2Glows) === this.devAccessor && delete WF.baf2Glows
      }
      show(FF, WF, SF, CF) {
        const {
          lo: AF,
          hi: uF
        } = qP(WF.box);
        let hF = null;
        this.devLog && (hF = {
          glow: SF,
          ctrl: Wr(WF.box.ctrl),
          lo: Wr(AF),
          hi: Wr(uF),
          startMs: CF,
          endMs: null
        }, this.devLog.push(hF), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(FF, SF, Vd(AF, uF, Fr[SF].thick)),
          glow: SF,
          startMs: CF,
          record: hF
        })
      }
      build(FF, WF, SF) {
        const CF = FQ(FF, SF, {
          rgb: Fr[WF].colour,
          alpha: 1
        });
        return FF.setGameMesh(CF, {
          visibility: 0
        }), CF
      }
    }
    const Ar = 1 / .6,
      ur = {
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
        blendMode: Db.f.Standard,
        soft: !0
      },
      hr = {
        ...ur,
        size: [.25, .4],
        count: 2
      };

    function bg(FF) {
      return {
        colours: [FF, FF],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: Db.f.Add,
        soft: !1
      }
    }
    const dr = bg([150, 225, 255]),
      Pr = bg([185, 145, 255]),
      Rr = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function ig(FF) {
      const WF = LW[FF];
      return null === WF.fuelSlot || vS(WF) ? Rr.includes(FF) ? Pr : dr : ur
    }
    const er = {
        kind: "smokePuff"
      },
      Er = [.2, .025, .2];

    function Qr(FF, WF) {
      const [
        [SF, CF, AF],
        [uF, hF, bW]
      ] = FF.colours;
      return {
        texture: FF.soft ? er : "square_particle",
        ZF: WF,
        minLifeTime: FF.life[0] / Ar,
        maxLifeTime: FF.life[1] / Ar,
        minEmitPower: FF.power[0] * Ar,
        maxEmitPower: FF.power[1] * Ar,
        minSize: FF.size[0],
        maxSize: FF.size[1],
        emitRate: 0,
        gravity: [0, FF.lift * Ar * Ar, 0],
        dir1: [-FF.spread, 1, -FF.spread],
        dir2: [FF.spread, 1, FF.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [SF, CF, AF, FF.alpha],
          maxColor: [uF, hF, bW, FF.alpha]
        }, {
          timeFraction: 1,
          minColor: [SF, CF, AF, 0],
          maxColor: [uF, hF, bW, 0]
        }],
        blendMode: FF.blendMode
      }
    }
    class rg {
      constructor(FF) {
        this.fixed = FF, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(FF, WF, SF) {
        var CF;
        if (SF === this.lastFrame) return !1;
        this.lastFrame = SF;
        const AF = this.at;
        AF[0] = WF[0] + .5, AF[1] = WF[1] + 1.025, AF[2] = WF[2] + .5;
        const uF = null !== (CF = this.fixed) && void 0 !== CF ? CF : bW() ? hr : ur;
        let hF = this.particles.get(uF);
        return hF || (hF = FF.createParticles(function(FF) {
          return Qr(FF, Math.ceil(12 * FF.count * FF.life[1]) + FF.count)
        }(uF), {
          pos: AF,
          half: Er
        }), this.particles.set(uF, hF)), hF.moveTo(AF), hF.emit(uF.count), !0
      }
      dispose() {
        for (const FF of this.particles.values()) FF.stop();
        this.particles.clear()
      }
    }
    class gg {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(FF) {
        this.indexed = !0;
        for (const WF of kS) {
          const SF = ig(WF);
          for (let CF = 1; CF <= 4; CF++) {
            const AF = FF.blockNameToBlockId(`${WF}|meta|rot${CF}|Running`, !0);
            if (null === AF) continue;
            let uF = this.pufferIndexByStyle.get(SF);
            void 0 === uF && (uF = this.pufferList.push(new rg(SF === ur ? null : SF)) - 1, this.pufferIndexByStyle.set(SF, uF)), this.pufferIndexById[AF] = uF + 1
          }
        }
      }
      onAfterRender(FF, WF) {
        this.indexed || this.index(FF);
        const SF = performance.now(),
          CF = 0 === this.lastMs ? 0 : Math.min(SF - this.lastMs, 250) / 1e3;
        this.lastMs = SF, this.frame++, FF.particlesEnabled() ? (this.scan(FF, WF), this.puff(FF, CF)) : this.sources = []
      }
      dispose() {
        for (const FF of this.pufferList) FF.dispose();
        this.sources = [], this.found = []
      }
      scan(FF, WF) {
        0 === this.scanRow && (this.origin = [Math.floor(WF[0]) - 12, Math.floor(WF[1]) - 6, Math.floor(WF[2]) - 12]);
        const SF = Math.min(this.scanRow + 16, 325),
          [CF, AF, uF] = this.origin,
          hF = this.hits;
        hF.length = 0;
        for (let bW = this.scanRow; bW < SF; bW++) {
          const WF = CF + bW % 25,
            SF = AF + Math.floor(bW / 25);
          FF.scanBlocks(WF, SF, uF, WF + 1, SF + 1, uF + 25, this.pufferIndexById, hF)
        }
        for (let bW = 0; bW < hF.length; bW += 4) {
          const FF = hF[bW + 3];
          this.found.push({
            pos: [hF[bW], hF[bW + 1], hF[bW + 2]],
            ah: FF,
            puffer: this.pufferList[this.pufferIndexById[FF] - 1]
          })
        }
        this.scanRow = SF, 325 === SF && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(FF, WF) {
        const SF = this.sources.length;
        if (0 !== SF) {
          this.budget = Math.min(this.budget + Math.min(SF / 1.2, 12) * WF, 2);
          for (let WF = 0; WF < SF && this.budget >= 1; WF++) {
            const WF = this.sources[this.cursor % SF];
            this.cursor = (this.cursor + 1) % SF, FF.getBlockId(WF.pos[0], WF.pos[1], WF.pos[2]) === WF.ah && (WF.puffer.puff(FF, WF.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const tg = {
        ...bg([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      Tr = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function ag(FF) {
      return 0 === FF.spots.length ? 0 : Math.min(1 * FF.level, 4)
    }

    function kg(FF) {
      return 0 === FF.glass.length ? 0 : Math.min(.75 * FF.level, 3)
    }

    function qg(FF) {
      return `${FF.ctrl.join(",")}:${FF.rot}:${FF.cu},${FF.cv}:${FF.w},${FF.h},${FF.d}`
    }

    function Vr(FF, WF) {
      const SF = WF.w - 2,
        CF = WF.h - 2,
        AF = WF.d - 2,
        uF = [];
      for (let hF = 0; hF < SF * CF * AF; hF++) {
        const bW = hF % SF,
          dF = Math.floor(hF / SF) % AF,
          PF = Math.floor(hF / (SF * AF));
        if (bW > 0 && bW < SF - 1 && dF > 0 && dF < AF - 1 && PF > 0 && PF < CF - 1) continue;
        const RF = KS(WF, BS(WF, hF)),
          iW = tr(FF, RF);
        if (null !== iW && "Fuel Rod" === VS(iW))
          for (const WF of Tr) {
            const SF = [RF[0] + WF[0], RF[1] + WF[1], RF[2] + WF[2]];
            Dr(FF, SF) && uF.push(Lr(SF, WF))
          }
      }
      return uF
    }

    function Nr(FF, WF) {
      const {
        lo: SF,
        hi: CF
      } = qP(WF), AF = [];
      for (let uF = SF[0]; uF < CF[0]; uF++)
        for (let WF = SF[1]; WF < CF[1]; WF++) {
          const hF = uF === SF[0] || uF === CF[0] - 1 || WF === SF[1] || WF === CF[1] - 1 ? 1 : Math.max(1, CF[2] - 1 - SF[2]);
          for (let bW = SF[2]; bW < CF[2]; bW += hF) {
            const hF = [uF, WF, bW];
            if (!Dr(FF, hF)) continue;
            const dF = uF === SF[0] ? Tr[1] : uF === CF[0] - 1 ? Tr[0] : bW === SF[2] ? Tr[5] : bW === CF[2] - 1 ? Tr[4] : WF === SF[1] ? Tr[3] : Tr[2];
            AF.push(Lr(hF, dF))
          }
        }
      return AF
    }

    function Dr(FF, WF) {
      const SF = tr(FF, WF);
      return null !== SF && "Reactor Glass" === VS(SF)
    }

    function Lr(FF, WF) {
      return [
        [FF[0] + .5 + .55 * WF[0], FF[1] + .5 + .55 * WF[1], FF[2] + .5 + .55 * WF[2]],
        [0 === WF[0] ? .4 : .02, 0 === WF[1] ? .4 : .02, 0 === WF[2] ? .4 : .02]
      ]
    }
    class mg {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(FF, WF, SF, CF) {
        const AF = [],
          uF = new Set;
        for (const PF of WF) {
          var hF, bW, dF;
          const {
            box: WF
          } = PF;
          if ("reactor" !== PF.kind || PF.level <= 0 || (WF.ctrl[0] - SF[0]) ** 2 + (WF.ctrl[1] - SF[1]) ** 2 + (WF.ctrl[2] - SF[2]) ** 2 > 576) continue;
          const RF = qg(WF);
          uF.add(RF);
          let iW = this.spots.get(RF);
          if ((!iW || CF - iW.at > 3e3) && (iW = {
              at: CF,
              spots: Vr(FF, WF),
              glass: Nr(FF, WF)
            }, this.spots.set(RF, iW)), 0 === iW.spots.length && 0 === iW.glass.length) continue;
          const eF = this.sparking.find((FF => FF.key === RF));
          AF.push({
            key: RF,
            level: PF.level,
            spots: iW.spots,
            glass: iW.glass,
            budget: null !== (hF = null === eF || void 0 === eF ? void 0 : eF.budget) && void 0 !== hF ? hF : 0,
            cursor: null !== (bW = null === eF || void 0 === eF ? void 0 : eF.cursor) && void 0 !== bW ? bW : 0,
            glassBudget: null !== (dF = null === eF || void 0 === eF ? void 0 : eF.glassBudget) && void 0 !== dF ? dF : 0
          })
        }
        for (const PF of this.spots.keys()) uF.has(PF) || this.spots.delete(PF);
        this.sparking = AF
      }
      emit(FF, WF, SF) {
        var CF;
        if (0 === this.sparking.length || !FF.particlesEnabled() || SF === this.lastFrame) return;
        this.lastFrame = SF;
        let AF = 0,
          uF = 0;
        for (const QF of this.sparking) AF += ag(QF), uF += kg(QF);
        const hF = AF > 8 ? 8 / AF : 1,
          bW = uF > 6 ? 6 / uF : 1;
        let dF, PF = null,
          RF = null;
        for (const QF of this.sparking) QF.budget = Math.min(QF.budget + ag(QF) * hF * WF, 2), QF.budget >= 1 && (!PF || QF.budget > PF.budget) && (PF = QF), QF.glassBudget = Math.min(QF.glassBudget + kg(QF) * bW * WF, 2), QF.glassBudget >= 1 && (!RF || QF.glassBudget > RF.glassBudget) && (RF = QF);
        if (PF) PF.budget--, dF = PF.spots[PF.cursor++ % PF.spots.length];
        else {
          if (!RF) return;
          RF.glassBudget--, dF = RF.glass[Math.floor(Math.random() * RF.glass.length)]
        }
        const [iW, eF] = dF, EF = null !== (CF = this.emitter) && void 0 !== CF ? CF : this.create(FF, iW, eF);
        EF.moveTo(iW, eF), EF.emit(tg.count)
      }
      dispose() {
        var FF;
        null === (FF = this.emitter) || void 0 === FF || FF.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(FF, WF, SF) {
        const CF = Math.ceil(14 * tg.count * tg.life[1]) + tg.count;
        return this.emitter = FF.createParticles(Qr(tg, CF), {
          pos: WF,
          half: SF
        }), this.emitter
      }
    }
    const Or = [2, 3.2],
      xg = 1 / 3,
      Zr = 1 / .6,
      or = {
        texture: er,
        ZF: Math.ceil(18 * Or[1]) + 4,
        minLifeTime: Or[0] / Zr,
        maxLifeTime: Or[1] / Zr,
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
        blendMode: Db.f.Standard
      };
    class Yr {
      constructor(FF) {
        this.plans = FF, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new mg, this.frame = 0, this.outline = new Cr(FF)
      }
      onAfterRender(FF, WF, SF) {
        const CF = performance.now(),
          AF = 0 === this.lastMs ? 0 : Math.min(CF - this.lastMs, 250) / 1e3;
        if (this.lastMs = CF, this.outline.fade(FF, CF), this.puff(FF, AF, SF), this.sparks.emit(FF, AF, this.frame++), CF - this.lastCheckMs < 150) return;
        this.lastCheckMs = CF;
        const uF = this.plans.all().filter((FF => FF.formed && Mr(FF.box.ctrl, SF) <= 4096));
        this.plumes = uF.filter((FF => "reactor" === FF.kind && FF.level > 0)).map((FF => ({
          box: FF.box,
          level: FF.level
        }))), this.updateHums(FF, WF, uF, SF), this.sparks.update(FF, uF, SF, CF), this.chimeFormed(FF, WF, uF, CF)
      }
      dispose(FF) {
        var WF;
        this.outline.dispose(FF), null === (WF = this.steam) || void 0 === WF || WF.dispose(), this.steam = null, this.sparks.dispose();
        for (const SF of this.hums.values()) SF.stop();
        this.hums.clear()
      }
      chimeFormed(FF, WF, SF, CF) {
        const AF = this.outline.check(FF, SF, CF);
        AF && FF.playSound(WF, "exp_levelup", .6, 1, {
          EFF: [AF.box.ctrl[0] + .5, AF.box.ctrl[1], AF.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(FF, WF, SF) {
        const CF = this.plumes;
        if (0 === CF.length || !FF.particlesEnabled()) return void(this.plumeBudget = 0);
        const AF = CF.reduce(((FF, WF) => FF + 3 * WF.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + AF * WF, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let uF = this.plumeCursor % (AF / 3);
        this.plumeCursor++;
        let hF = CF[0];
        for (const iW of CF) {
          if (uF < iW.level) {
            hF = iW;
            break
          }
          uF -= iW.level
        }
        const {
          lo: bW,
          hi: dF
        } = qP(hF.box);
        if (function(FF, WF, SF) {
            const CF = Math.max(FF[0] - SF[0], 0, SF[0] - WF[0]),
              AF = Math.max(FF[2] - SF[2], 0, SF[2] - WF[2]);
            return Math.hypot(CF, SF[1] - WF[1], AF)
          }(bW, dF, SF) < 6 && Math.random() > xg) return;
        const PF = [(bW[0] + dF[0]) / 2, dF[1] + .05, (bW[2] + dF[2]) / 2],
          RF = [(dF[0] - bW[0]) / 2 - .5, .05, (dF[2] - bW[2]) / 2 - .5];
        this.steam ??= FF.createParticles(or, {
          pos: PF,
          half: RF
        }), this.steam.moveTo(PF, RF), this.steam.emit(1)
      }
      updateHums(FF, WF, SF, CF) {
        const AF = new Map;
        for (const hF of SF) "reactor" === hF.kind && hF.level > 0 && Mr(hF.box.ctrl, CF) <= 576 && AF.set(`${uF=hF.box.ctrl,`${uF[0]},${uF[1]},${uF[2]}`}:${hF.level}`, hF);
        var uF;
        for (const [hF, bW] of this.hums) AF.has(hF) || (bW.stop(), this.hums.delete(hF));
        for (const [hF, bW] of AF) {
          if (this.hums.has(hF)) continue;
          const {
            lo: SF,
            hi: CF
          } = qP(bW.box), AF = [(SF[0] + CF[0]) / 2, SF[1], (SF[2] + CF[2]) / 2], uF = FF.playSound(WF, "rocketEngineLoop", .08 + .06 * bW.level, .55, {
            EFF: AF,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          uF && this.hums.set(hF, uF)
        }
      }
    }

    function Mr(FF, WF) {
      return (FF[0] - WF[0]) ** 2 + (FF[1] - WF[1]) ** 2 + (FF[2] - WF[2]) ** 2
    }
    class cg {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      KD(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const CF = [FF.baf2BombAt[0], FF.baf2BombAt[1], FF.baf2BombAt[2]],
          AF = FF.baf2BombR;
        if (FF.baf2BombBoom) {
          const FF = Math.hypot(WF[0] - CF[0], WF[1] - CF[1], WF[2] - CF[2]);
          this.Uu({
            fuse: null,
            blast: {
              at: CF,
              r: AF,
              receivedAt: SF,
              distance: FF,
              flash: FF <= 3 * AF
            }
          })
        } else this.Uu({
          ...this.snapshot,
          fuse: FF.baf2BombMs > 0 ? {
            at: CF,
            r: AF,
            endsAt: SF + FF.baf2BombMs
          } : null
        })
      }
      get() {
        return this.snapshot
      }
      subscribe(FF) {
        return this.listeners.add(FF), () => {
          this.listeners.delete(FF)
        }
      }
      dispose() {
        this.listeners.clear(), this.snapshot = {
          fuse: null,
          blast: null
        }
      }
      Uu(FF) {
        this.snapshot = FF;
        for (const WF of this.listeners) WF()
      }
    }
    const Gr = (0, CF.memo)((function(FF) {
      var WF;
      let {
        store: SF
      } = FF;
      const {
        t: AF
      } = (0, TA.B)(), [uF, hF] = (0, CF.useState)((() => SF.get())), [bW, dF] = (0, CF.useState)((() => performance.now()));
      (0, CF.useEffect)((() => (hF(SF.get()), SF.subscribe((() => {
        hF(SF.get()), dF(performance.now())
      })))), [SF]);
      const {
        fuse: PF,
        blast: RF
      } = uF;
      (0, CF.useEffect)((() => {
        if (!PF) return;
        const FF = setInterval((() => {
          dF(performance.now())
        }), 250);
        return () => {
          clearInterval(FF)
        }
      }), [PF]);
      const [iW, eF] = (0, CF.useState)(!1);
      (0, CF.useEffect)((() => {
        if (null === RF || void 0 === RF || !RF.flash) return;
        eF(!0);
        const FF = setTimeout((() => {
          eF(!1)
        }), 2500);
        return () => {
          clearTimeout(FF)
        }
      }), [RF]);
      const EF = PF ? function(FF, WF) {
        return FF.endsAt <= WF ? 0 : Math.ceil((FF.endsAt - WF) / 1e3)
      }(PF, bW) : 0;
      return (0, Qu.jsxs)(Qu.Fragment, {
        children: [EF > 0 && (0, Qu.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: AF("buildAFactory2Game:bombCountdown", {
            amount: String(EF),
            radius: String(null !== (WF = null === PF || void 0 === PF ? void 0 : PF.r) && void 0 !== WF ? WF : 0)
          })
        }), iW && (0, Qu.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function zg(FF) {
      const WF = Math.min(4, Math.max(1, FF / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * FF / 4)),
        capSpread: Math.min(5 * FF / 8, 24 * WF),
        capThick: 6 * WF,
        stemHalfWidth: 3 * WF,
        puffScale: WF
      }
    }
    class Ir {
      constructor() {
        this.yS = !1
      }
      hold(FF) {
        FF.getCameraFar() < 1e3 && (FF.setCameraFar(1e3), this.yS = !0)
      }
      release(FF) {
        this.yS && (this.yS = !1, FF.setCameraFar(null))
      }
    }
    const fr = 1 / .6,
      yg = [.2, .1, .2],
      sr = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      nr = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: Db.f.Standard,
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
      Hr = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: Db.f.Standard,
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
      Kr = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: Db.f.Standard,
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
      wr = {
        texture: er,
        ZF: Math.ceil(120) + 4,
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
        blendMode: Db.f.Add
      };
    class Xr {
      constructor(FF) {
        this.store = FF, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new Ir, this.timers = []
      }
      onAfterRender(FF, WF) {
        const SF = performance.now(),
          CF = 0 === this.lastMs ? 0 : Math.min(SF - this.lastMs, 250) / 1e3;
        this.lastMs = SF;
        const {
          fuse: AF,
          blast: uF
        } = this.store.get();
        null !== uF && uF !== this.shownBlast && (this.shownBlast = uF, this.startBlast(FF, WF, uF, SF));
        const hF = FF.particlesEnabled();
        null !== AF && AF.endsAt > SF && hF ? this.emitBeacon(FF, AF, CF, SF) : this.beaconBudget = 0, null !== this.cloud && (SF - this.cloud.startMs > 33e3 ? this.disposeCloud(FF) : (this.far.hold(FF), hF && this.emitCloud(FF, CF, SF)))
      }
      dispose(FF) {
        var WF;
        null === (WF = this.beacon) || void 0 === WF || WF.dispose(), this.beacon = null, this.disposeCloud(FF);
        for (const SF of this.timers) clearTimeout(SF);
        this.timers.length = 0
      }
      emitBeacon(FF, WF, SF, CF) {
        const AF = WF.endsAt - CF < 5e3 ? 350 : 1e3,
          uF = .5 + .5 * Math.sin(2 * Math.PI * CF / AF);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * uF * SF, 4), this.beaconBudget < 1) return;
        const hF = Math.floor(this.beaconBudget);
        this.beaconBudget -= hF;
        const [bW, dF, PF] = WF.at, RF = [bW + .5, dF + 1.1, PF + .5];
        this.beacon ??= FF.createParticles(wr, {
          pos: RF,
          half: yg
        }), this.beacon.moveTo(RF), this.beacon.emit(hF)
      }
      startBlast(FF, WF, SF, CF) {
        var AF;
        null === (AF = this.beacon) || void 0 === AF || AF.dispose(), this.beacon = null, this.disposeCloud(FF);
        const uF = (0, Vb.isMobile)() ? .5 : 1;
        this.streams = [nr, Hr, Kr].map((FF => {
          const WF = Math.round(FF.count * uF);
          return {
            spec: FF,
            particles: null,
            rate: WF / ((FF.toMs - FF.fromMs) / 1e3),
            budget: 0,
            left: WF
          }
        })), this.cloud = {
          blast: SF,
          startMs: CF
        };
        const hF = Math.max(.25, 1 - SF.distance / (6 * SF.r)),
          bW = SF.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [SF, CF, AF] of sr) Br(FF, WF, SF, hF * CF, AF)
        }), bW))
      }
      emitCloud(FF, WF, SF) {
        const {
          blast: CF,
          startMs: AF
        } = this.cloud, uF = SF - AF, [hF, bW, dF] = CF.at, PF = zg(CF.r);
        for (const RF of this.streams) {
          const {
            spec: SF
          } = RF;
          if (RF.left <= 0 || uF < SF.fromMs) continue;
          RF.budget += RF.rate * WF;
          const AF = Math.min(Math.floor(RF.budget), RF.left);
          if (AF < 1) continue;
          RF.budget -= AF, RF.left -= AF;
          const iW = RF.particles ??= this.createStream(FF, SF, CF);
          if (SF === nr) {
            const FF = PF.stemHalfWidth;
            iW.moveTo([hF, bW + 1, dF], [FF, 1, FF])
          } else if (SF === Hr) {
            const FF = PF.capSpread * Math.min(1, (uF - SF.fromMs) / 3e3),
              WF = Math.sqrt(Math.random()),
              CF = 2 * Math.random() * Math.PI,
              AF = Math.cos(CF) * WF,
              RF = Math.sin(CF) * WF,
              eF = hF + AF * FF,
              EF = dF + RF * FF,
              QF = PF.capThick,
              rW = bW + PF.capHeight + QF * (1 - WF * WF) * 2;
            iW.setDirections([.7 * AF, .05, .7 * RF], [AF, .2, RF]), iW.moveTo([eF, rW, EF], [QF, QF, QF])
          } else {
            this.ringAngle += 2.39996;
            const FF = Math.cos(this.ringAngle),
              WF = Math.sin(this.ringAngle);
            iW.setDirections([FF, .05, WF], [FF, .1, WF]), iW.moveTo([hF + 2 * FF, bW + .5, dF + 2 * WF], [0, .5, 0])
          }
          iW.emit(AF)
        }
      }
      createStream(FF, WF, SF) {
        const {
          r: CF
        } = SF, AF = Math.max(WF.life[0], CF / 25), uF = WF === Kr ? [.9 * AF, AF] : WF.life, hF = zg(CF), bW = WF === Kr ? 1 : hF.puffScale, dF = {
          texture: er,
          ZF: WF.count + 4,
          minLifeTime: uF[0] / fr,
          maxLifeTime: uF[1] / fr,
          minSize: WF.size[0] * bW,
          maxSize: WF.size[1] * bW,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, WF.gravity * fr * fr, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: WF.from[0],
            maxColor: WF.from[1]
          }, {
            timeFraction: .6,
            minColor: Ur(WF.from[0], WF.to[0]),
            maxColor: Ur(WF.from[1], WF.to[1])
          }, {
            timeFraction: 1,
            minColor: WF.to[0],
            maxColor: WF.to[1]
          }],
          blendMode: WF.blend
        };
        if (WF === nr) {
          const FF = hF.capHeight / ((uF[0] + uF[1]) / 2);
          dF.minEmitPower = .9 * FF * fr, dF.maxEmitPower = 1.05 * FF * fr, dF.dir1 = [-.1, 1, -.1], dF.dir2 = [.1, 1, .1]
        } else WF === Hr ? (dF.minEmitPower = 1.2, dF.maxEmitPower = 2, dF.dir1 = [-1, .05, -1], dF.dir2 = [1, .2, 1]) : (dF.minEmitPower = 39.583333333333336, dF.maxEmitPower = 41.66666666666667, dF.dir1 = [1, 0, 0], dF.dir2 = [1, 0, 0]);
        return FF.createParticles(dF, {
          pos: SF.at
        })
      }
      disposeCloud(FF) {
        for (const SF of this.streams) {
          var WF;
          null === (WF = SF.particles) || void 0 === WF || WF.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(FF)
      }
    }

    function Ur(FF, WF) {
      return [(FF[0] + WF[0]) / 2, (FF[1] + WF[1]) / 2, (FF[2] + WF[2]) / 2, .75 * FF[3]]
    }

    function Br(FF, WF, SF, CF, AF) {
      try {
        FF.playSound(WF, SF, CF, AF)
      } catch (uF) {
        console.error(uF)
      }
    }
    const jg = {
        ZF: 720,
        perS: 100
      },
      vg = {
        ZF: 320,
        perS: 44
      };
    class Jr {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(FF, WF) {
        this.zone = {
          centre: [...FF.centre],
          r: FF.r,
          band: FF.band ? [FF.band[0], FF.band[1]] : void 0
        }, this.endsAt = WF
      }
      stop() {
        this.zone = null
      }
      KD(FF, WF) {
        const {
          baf2FalloutMs: SF,
          baf2FalloutAt: CF,
          baf2FalloutR: AF,
          baf2FalloutY: uF
        } = FF;
        SF > 0 && CF && void 0 !== AF ? this.start({
          centre: CF,
          r: AF,
          band: uF
        }, WF + SF) : this.stop()
      }
      perS(FF, WF, SF) {
        const CF = this.zone;
        if (!CF) return 0;
        const AF = this.endsAt - FF;
        return AF <= 0 ? (this.zone = null, 0) : CF.band && (WF[1] < CF.band[0] || WF[1] > CF.band[1]) || Math.hypot(WF[0] - CF.centre[0], WF[2] - CF.centre[2]) > CF.r ? 0 : SF.perS * Math.min(1, AF / 5e3)
      }
    }
    const pr = [5, 7],
      lr = [24, 8, 24],
      Fg = .5,
      Wg = 1 / .6,
      Sg = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class Cg {
      constructor() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Vb.isMobile)();
        this.state = new Jr, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(FF) {
          return FF ? vg : jg
        }(FF)
      }
      startFallout(FF, WF) {
        this.state.start(FF, WF)
      }
      stopFallout() {
        this.state.stop()
      }
      KD(FF) {
        this.state.KD(FF, performance.now())
      }
      onAfterRender(FF, WF) {
        var SF;
        const CF = performance.now(),
          AF = 0 === this.lastMs ? 0 : Math.min(CF - this.lastMs, 250) / 1e3;
        this.lastMs = CF;
        const uF = this.state.perS(CF, WF, this.tier);
        if (uF <= 0 || !FF.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + uF * AF, uF / 4);
        const hF = Math.floor(this.budget);
        if (hF < 1) return;
        this.budget -= hF;
        const bW = this.at;
        bW[0] = WF[0], bW[1] = WF[1] + 12, bW[2] = WF[2];
        const dF = null !== (SF = this.systems) && void 0 !== SF ? SF : this.create(FF, bW),
          PF = this.amounts;
        PF[0] = 0, PF[1] = 0;
        for (let RF = 0; RF < hF; RF++) PF[Math.random() < .3 ? 1 : 0]++;
        for (let RF = 0; RF < dF.length; RF++) PF[RF] > 0 && (dF[RF].moveTo(bW, lr), dF[RF].emit(PF[RF]))
      }
      dispose() {
        for (const WF of null !== (FF = this.systems) && void 0 !== FF ? FF : []) {
          var FF;
          WF.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(FF, WF) {
        return this.systems = Sg.map((SF => {
          let {
            rgba: [CF, AF, uF, hF],
            share: bW
          } = SF;
          const dF = {
            texture: "square_particle",
            ZF: Math.ceil(this.tier.ZF * bW),
            minLifeTime: pr[0] / Wg,
            maxLifeTime: pr[1] / Wg,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [Fg, -1, Fg],
            colorGradients: [{
              timeFraction: 0,
              minColor: [CF, AF, uF, 0]
            }, {
              timeFraction: .15,
              minColor: [CF, AF, uF, hF]
            }, {
              timeFraction: .8,
              minColor: [CF, AF, uF, hF]
            }, {
              timeFraction: 1,
              minColor: [CF, AF, uF, 0]
            }],
            blendMode: Db.f.Standard
          };
          return FF.createParticles(dF, {
            pos: WF,
            half: lr
          })
        })), this.systems
      }
    }
    const Ag = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function ug(FF) {
      const WF = /\|rot(\d)/.exec(FF);
      return Ag[WF ? Number(WF[1]) : 1]
    }
    var hg = SF(565),
      bt = SF(36909);
    const dg = new Set(hg.n);

    function Pg(FF) {
      if (-2 !== FF.count) return null;
      const WF = KF(FF.item);
      return null !== WF && dg.has(WF) ? WF : null
    }

    function Rg(FF) {
      const {
        width: WF,
        height: SF
      } = (0, bt.d)(FF).hitBoxDimensions;
      return .55 / Math.max(WF, SF)
    }

    function it(FF, WF, SF) {
      if (!SF) return !1;
      const CF = FF[0] + .5 - WF[0],
        AF = FF[1] + .5 - WF[1],
        uF = FF[2] + .5 - WF[2];
      return CF * CF + AF * AF + uF * uF <= 576
    }

    function eg(FF, WF) {
      return Math.atan2(FF[0], FF[2]) + Math.PI + WF
    }

    function Eg(FF, WF) {
      const SF = 2 * Math.PI;
      return (FF + SF * WF / 1e4) % SF
    }
    class Qg {
      constructor(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = FF, this.now = WF, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = FF.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(FF, WF) {
        if (0 === this.farms.size) return;
        const SF = this.now(),
          CF = Number.isNaN(this.frameMs) ? 0 : Math.min(SF - this.frameMs, 100);
        this.frameMs = SF, SF - this.checkedMs >= 1e3 && (this.checkedMs = SF, this.check(FF, WF));
        for (const AF of this.farms.values()) AF.shown && AF.running && null !== AF.model && CF > 0 && (AF.spin = Eg(AF.spin, CF), AF.model.setPose(AF.feet, eg(AF.front, AF.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const FF of this.farms.values()) this.drop(FF);
        this.farms.clear()
      }
      sync() {
        const FF = new Set;
        for (const WF of this.labels.list()) {
          const SF = Pg(WF);
          if (null === SF) continue;
          FF.add(WF.key);
          const CF = this.farms.get(WF.key);
          if ((null === CF || void 0 === CF ? void 0 : CF.mob) === SF) continue;
          CF && this.drop(CF);
          const [AF, uF, hF] = WF.pos;
          this.farms.set(WF.key, {
            pos: WF.pos,
            feet: [AF + .5, uF + 1, hF + .5],
            mob: SF,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [WF, SF] of this.farms) FF.has(WF) || (this.drop(SF), this.farms.delete(WF));
        this.checkedMs = -1 / 0
      }
      check(FF, WF) {
        for (const SF of this.farms.values()) {
          const [CF, AF, uF] = SF.pos, hF = tr(FF, SF.pos);
          null !== hF && VS(hF) === GF && it(SF.pos, WF, "Air" === tr(FF, [CF, AF + 1, uF])) ? (SF.running = hF.endsWith("|Running"), SF.front = ug(hF), null === SF.model && (SF.model = FF.createMobModel(SF.mob, Rg(SF.mob)), null === SF.model) || (SF.model.setPose(SF.feet, eg(SF.front, SF.spin)), SF.shown || (SF.model.setVisible(!0), SF.shown = !0))) : (SF.shown && null !== SF.model && SF.model.setVisible(!1), SF.shown = !1)
        }
      }
      drop(FF) {
        var WF;
        null === (WF = FF.model) || void 0 === WF || WF.dispose(), FF.model = null, FF.shown = !1
      }
    }
    class rt {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(FF) {
        var WF;
        this.island = FF.baf2ColIsland, this.islandSite = (WF = FF.baf2ColSite) && 8 === WF.length ? {
          spawnXZ: [WF[0], WF[1]],
          coreXZ: [WF[2], WF[3]],
          minXZ: [WF[4], WF[5]],
          maxXZ: [WF[6], WF[7]]
        } : null, this.views = FF.baf2ColList.map((FF => ({
          entry: pC(FF)
        }))), this.beamsVersion++, this.emit()
      }
      onStatus(FF) {
        this.status = FF, this.emit()
      }
      onOpen(FF) {
        this.openHeld = FF
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
        return this.views.map((FF => FF.entry))
      }
      entryAtRoot(FF) {
        var WF;
        return null === (WF = this.views.find((WF => {
          let {
            entry: SF
          } = WF;
          return SF.focus[0] === FF[0] && SF.focus[1] === FF[1] + 1 && SF.focus[2] === FF[2]
        }))) || void 0 === WF ? void 0 : WF.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(FF, WF) {
        return xP(this.entries(), FF, WF)
      }
      lookSource() {
        return {
          handles: FF => AC(FF) >= 0 || uC(FF),
          line: (FF, WF) => this.lookLine(FF, WF),
          version: () => this.beamsVersion
        }
      }
      subscribe(FF) {
        return this.listeners.add(FF), () => {
          this.listeners.delete(FF)
        }
      }
      dispose() {
        this.listeners.clear(), this.island = null, this.views = [], this.status = null, this.openHeld = null
      }
      emit() {
        for (const FF of this.listeners) FF()
      }
    }
    const gt = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((FF => FF / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((FF => [FF, FF + 1, FF + 2, FF, FF + 2, FF + 3]))
    };

    function tt(FF, WF, SF, CF, AF, uF, hF) {
      let bW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const dF = Math.cos(bW),
        PF = Math.sin(bW),
        RF = FF.positions.length / 3,
        {
          positions: iW,
          indices: eF
        } = gt;
      for (let EF = 0; EF < iW.length; EF += 3) {
        const bW = iW[EF] * AF,
          RF = iW[EF + 2] * hF;
        FF.positions.push(WF + bW * dF + RF * PF, SF + iW[EF + 1] * uF, CF - bW * PF + RF * dF)
      }
      for (const EF of eF) FF.indices.push(RF + EF)
    }

    function Tg(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return WF < 1 ? {
        rgb: FF,
        alpha: WF
      } : {
        rgb: FF,
        alpha: 1,
        opaque: !0
      }
    }
    class atF {
      constructor(FF, WF) {
        this.style = FF, this.perSource = WF, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(FF) {
        this.sources = FF, 0 === FF.length && (this.budget = 0)
      }
      lF(FF, WF, SF) {
        const CF = this.sources.length;
        if (0 !== CF) {
          var AF, uF;
          this.budget = Math.min(this.budget + (AF = CF, uF = this.perSource, Math.min(AF * uF, Kd) * WF), 2);
          for (let WF = 0; WF < CF && this.budget >= 1; WF++) {
            const WF = this.sources[this.cursor % CF];
            this.cursor = (this.cursor + 1) % CF;
            if (!(Math.max(Math.abs(WF.x - SF[0]), Math.abs(WF.y - SF[1]), Math.abs(WF.z - SF[2])) > 32)) return this.puff(FF, WF), void this.budget--
          }
        }
      }
      dispose() {
        var FF;
        null === (FF = this.particles) || void 0 === FF || FF.dispose(), this.particles = null, this.sources = []
      }
      puff(FF, WF) {
        let {
          x: SF,
          y: CF,
          z: AF,
          h: uF,
          faces: hF
        } = WF;
        const bW = function(FF, WF, SF, CF, AF) {
            const [uF, hF, bW] = AF[Math.floor(Math.random() * AF.length)], dF = .04, PF = (FF, WF, SF) => FF > 0 ? WF + SF + dF : FF < 0 ? WF - dF : WF + .1, RF = (FF, WF, SF) => FF > 0 ? WF + SF + dF : FF < 0 ? WF - dF : WF + SF - .1, iW = [PF(uF, FF, 1), PF(hF, WF, CF), PF(bW, SF, 1)], eF = [RF(uF, FF, 1), RF(hF, WF, CF), RF(bW, SF, 1)];
            return {
              pos: [(iW[0] + eF[0]) / 2, (iW[1] + eF[1]) / 2, (iW[2] + eF[2]) / 2],
              half: [(eF[0] - iW[0]) / 2, (eF[1] - iW[1]) / 2, (eF[2] - iW[2]) / 2],
              out: [uF, hF, bW]
            }
          }(SF, CF, AF, uF, hF),
          {
            style: dF
          } = this,
          PF = this.particles ??= FF.createParticles(Qr(dF, Math.ceil(dF.count * Kd * dF.life[1]) + 4), bW);
        PF.moveTo(bW.pos, bW.half);
        const [RF, iW, eF] = bW.out, EF = dF.spread;
        PF.setDirections([RF - EF, .6 + iW, eF - EF], [RF + EF, 1 + iW, eF + EF]), PF.emit(dF.count)
      }
    }
    const kt = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class qt {
      constructor() {
        this.green = new atF(Xd.green, nd), this.pink = new atF(Xd.pink, Hd), this.colliders = [], this.lastMs = 0
      }
      setSources(FF) {
        this.colliders = FF;
        const WF = [],
          SF = [];
        for (const CF of FF) {
          const [FF, AF, uF] = CF.focus;
          WF.push({
            x: FF,
            y: AF - 1,
            z: uF,
            h: 2,
            faces: kt
          });
          for (let WF = 0; WF < 4; WF++) {
            if (!CF.live[WF]) continue;
            const [FF, AF, uF] = dC(CF.focus, WF, pS.LASER_D), [hF, , bW] = bA[WF], dF = kt.filter((FF => FF[0] !== hF || FF[2] !== bW || 0 !== FF[1]));
            SF.push({
              x: FF,
              y: AF,
              z: uF,
              h: 1,
              faces: dF
            })
          }
        }
        this.green.setSources(WF), this.pink.setSources(SF)
      }
      onAfterRender(FF) {
        const WF = performance.now(),
          SF = 0 === this.lastMs ? 0 : Math.min(WF - this.lastMs, 250) / 1e3;
        if (this.lastMs = WF, 0 === this.colliders.length || !FF.particlesEnabled()) return;
        const CF = FF.getCameraPosition();
        this.green.lF(FF, SF, CF), this.pink.lF(FF, SF, CF)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const Vg = 1.04,
      Ng = Tg([1, 120 / 255, 220 / 255]),
      Dg = Tg([1, .25, .25], .35);
    class Lg {
      constructor(FF) {
        this.store = FF, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new qt
      }
      onAfterRender(FF) {
        this.store.version() !== this.builtVersion && this.rebuild(FF);
        const WF = performance.now();
        for (const SF of this.beams) {
          const CF = 1 + .35 * Math.sin(WF / 700 * Math.PI * 2 + SF.phase);
          FF.setGameMesh(SF.mesh, {
            scale: [SF.alongX ? 1 : CF, CF, SF.alongX ? CF : 1]
          })
        }
        this.glow.onAfterRender(FF)
      }
      dispose(FF) {
        this.clear(FF), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(FF) {
        this.clear(FF), this.builtVersion = this.store.version();
        const WF = [];
        for (const {
            entry: SF
          }
          of this.store.colliders()) SF.on && SF.live.some(Boolean) && (this.addBeams(FF, SF), WF.push(SF)), SF.blockers.length > 0 && this.addMarkers(FF, SF);
        this.glow.setSources(WF)
      }
      addBeams(FF, WF) {
        const [SF, CF, AF] = WF.focus, uF = sd - .25, hF = (.25 + sd) / 2;
        for (let bW = 0; bW < 4; bW++) {
          if (!WF.live[bW]) continue;
          const [dF, , PF] = bA[bW], RF = 0 !== dF, iW = {
            positions: [],
            indices: []
          };
          tt(iW, 0, 0, 0, RF ? uF : .2, .2, RF ? .2 : uF);
          const eF = [SF + .5 + dF * hF, CF + .5, AF + .5 + PF * hF],
            EF = FF.createGameMesh(iW, Ng, eF);
          this.meshes.push(EF), this.beams.push({
            mesh: EF,
            alongX: RF,
            phase: bW * Math.PI / 2
          })
        }
      }
      addMarkers(FF, WF) {
        const SF = WF.blockers[0],
          CF = {
            positions: [],
            indices: []
          };
        for (const [AF, uF, hF] of WF.blockers) tt(CF, AF - SF[0] + .5, uF - SF[1] + .5, hF - SF[2] + .5, Vg, Vg, Vg);
        this.meshes.push(FF.createGameMesh(CF, Dg, SF))
      }
      clear(FF) {
        for (const WF of this.meshes) FF.disposeGameMesh(WF);
        this.meshes = [], this.beams = []
      }
    }
    const mt = [.56, .83, 1],
      Og = [1, .73, .08],
      xt = [1, .25, .25],
      Zg = [.85, .85, .85],
      og = [.3, .45, .6];

    function Yg(FF, WF, SF, CF) {
      let AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        uF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const hF = AF / 2,
        bW = AF + uF;
      for (const dF of [-hF, hF])
        for (const AF of [-hF, hF]) tt(FF, WF, SF + dF, CF + AF, bW, uF, uF), tt(FF, WF + dF, SF, CF + AF, uF, bW, uF), tt(FF, WF + dF, SF + AF, CF, uF, uF, bW)
    }

    function Mg(FF) {
      return WF => FF.isBlockInLoadedChunk(WF[0], WF[1], WF[2]) && 0 === FF.getBlockId(WF[0], WF[1], WF[2])
    }

    function ct(FF) {
      return FF.map((FF => {
        let {
          free: WF,
          blocked: SF,
          gaps: CF,
          supports: AF
        } = FF;
        return `${WF.join(";")}|${SF.join(";")}|${CF.join(";")}|${AF.join(";")}`
      })).join("/")
    }

    function Gg(FF, WF, SF) {
      let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const uF = WF[0],
        hF = {
          positions: [],
          indices: []
        };
      for (const [bW, dF, PF] of WF) Yg(hF, bW - uF[0] + .5, dF - uF[1] + .5, PF - uF[2] + .5, CF, AF);
      return FF.createGameMesh(hF, SF, uF)
    }
    class zt {
      constructor(FF) {
        this.store = FF, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(FF, WF, SF) {
        var CF;
        const AF = null === (CF = FF.pbF(WF)) || void 0 === CF ? void 0 : CF.name;
        if (AF !== FC && AF !== lS) return void("" !== this.shownKey && this.show(FF, "", []));
        const uF = performance.now();
        if (uF - this.lastCheckMs >= 200 && (this.lastCheckMs = uF, AF === FC ? this.check(FF, SF) : this.preview(FF, SF)), this.pulses.length > 0) {
          const WF = 1 + .12 * Math.sin(uF / 1e3 * 1.25 * Math.PI * 2),
            SF = [WF, WF, WF];
          for (const CF of this.pulses) FF.setGameMesh(CF, {
            scale: SF
          })
        }
      }
      dispose(FF) {
        this.clear(FF), this.shownKey = ""
      }
      check(FF, WF) {
        const SF = Mg(FF),
          CF = [];
        for (const {
            entry: uF
          }
          of this.store.colliders()) {
          uF.focus.every(((FF, SF) => Math.abs(FF + .5 - WF[SF]) <= pS.GHOST_REACH)) && CF.push(yP(uF, SF))
        }
        const AF = ct(CF);
        AF !== this.shownKey && this.show(FF, AF, CF)
      }
      preview(FF, WF) {
        const SF = FF.getTargetedBlock(),
          CF = SF ? [SF.Zu[0], SF.Zu[1], SF.Zu[2]] : null,
          AF = null !== CF && CF.every(((FF, SF) => Math.abs(FF + .5 - WF[SF]) <= 8)),
          uF = this.store.site(),
          hF = AF && uF ? function(FF, WF, SF) {
            const CF = hC(FF);
            if (!CF.every(WF)) return null;
            const AF = iA(FF, SF);
            return {
              column: CF,
              spots: yP({
                focus: CF[1],
                lasers: [!1, !1, !1, !1],
                open: AF,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, WF),
              fits: AF.filter(Boolean).length >= pS.MIN_SPOTS
            }
          }(CF, Mg(FF), uF) : null,
          bW = hF ? [hF.spots] : [],
          dF = hF ? `preview ${CF.join(",")}|${hF.fits}|${ct(bW)}` : "";
        var PF, RF;
        dF !== this.shownKey && this.show(FF, dF, bW, null !== (PF = null === hF || void 0 === hF ? void 0 : hF.column) && void 0 !== PF ? PF : [], null === (RF = null === hF || void 0 === hF ? void 0 : hF.fits) || void 0 === RF || RF)
      }
      show(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          AF = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(FF), this.shownKey = WF, CF.length > 0 && this.meshes.push(Gg(FF, CF, Tg(AF ? Zg : xt)));
        for (const {
            free: uF,
            blocked: hF,
            gaps: bW,
            supports: dF
          }
          of SF) {
          for (const [WF, SF, CF] of uF) {
            const AF = {
              positions: [],
              indices: []
            };
            Yg(AF, 0, 0, 0);
            const uF = FF.createGameMesh(AF, Tg(mt), [WF + .5, SF + .5, CF + .5]);
            this.meshes.push(uF), this.pulses.push(uF)
          }
          hF.length > 0 && this.meshes.push(Gg(FF, hF, Tg(Og))), bW.length > 0 && this.meshes.push(Gg(FF, bW, Tg(xt), 1.06, .07)), dF.length > 0 && this.meshes.push(Gg(FF, dF, Tg(og)))
        }
      }
      clear(FF) {
        for (const WF of this.meshes) FF.disposeGameMesh(WF);
        this.meshes = [], this.pulses = []
      }
    }
    class Ig {
      constructor() {
        this.stored = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(FF) {
        if (!FF.baf2TermOpen) return !1;
        FF.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [WF, SF] of FF.baf2TermItems) SF > 0 ? this.stored.set(WF, SF) : this.stored.delete(WF);
        if (this.pending = this.pending.filter((WF => WF.seq > FF.baf2TermAcked)), this.silos = FF.baf2TermSilos, this.readOnly = FF.baf2TermReadOnly, this.pocket = !0 === FF.baf2TermPocket, FF.baf2TermReset) this.resort();
        else
          for (const WF of this.stored.keys()) this.order.includes(WF) || this.order.push(WF);
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((FF, WF) => this.amount(WF) - this.amount(FF) || FF.localeCompare(WF))), this.changed()
      }
      take(FF, WF) {
        const SF = function(FF, WF) {
          const SF = "number" === typeof FF ? FF : "one" === FF ? 1 : "stack" === FF ? 99 : WF;
          return Math.min(WF, SF)
        }(FF, this.amount(WF));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: WF,
          amount: SF
        }), this.recents = [WF, ...this.recents.filter((FF => FF !== WF))].slice(0, 6), this.changed(), WW(this.seq, FF, WF)
      }
      amount(FF) {
        var WF;
        let SF = null !== (WF = this.stored.get(FF)) && void 0 !== WF ? WF : 0;
        for (const CF of this.pending) CF.item === FF && (SF -= CF.amount);
        return Math.max(0, SF)
      }
      items() {
        return this.order.filter((FF => this.amount(FF) > 0))
      }
      recent() {
        return this.recents.filter((FF => this.amount(FF) > 0))
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
      subscribe(FF) {
        return this.listeners.add(FF), () => {
          this.listeners.delete(FF)
        }
      }
      changed() {
        this.version++;
        for (const FF of this.listeners) FF()
      }
    }
    var fg = SF(36865);
    const yt = {
      isBlock: FF => void 0 !== oF.i[FF],
      harvestType: FF => {
        var WF;
        return null === (WF = oF.i[FF]) || void 0 === WF ? void 0 : WF.harvestType
      },
      harvestLevel: FF => {
        var WF;
        return null === (WF = oF.i[FF]) || void 0 === WF ? void 0 : WF.harvestLevel
      },
      dropsNothing: FF => {
        var WF;
        return null === (null === (WF = oF.i[FF]) || void 0 === WF ? void 0 : WF.drops)
      },
      displayName: FF => {
        var WF;
        return null === (WF = nh.o[FF]) || void 0 === WF ? void 0 : WF.displayName
      },
      description: FF => {
        var WF;
        return null === (WF = nh.o[FF]) || void 0 === WF ? void 0 : WF.description
      },
      harvests: FF => {
        var WF;
        return null === (WF = nh.o[FF]) || void 0 === WF ? void 0 : WF.harvests
      },
      level: FF => {
        var WF;
        return null === (WF = nh.o[FF]) || void 0 === WF ? void 0 : WF.level
      }
    };

    function sg(FF, WF, SF) {
      return function(FF, WF, SF, CF) {
        var AF, uF;
        const hF = WF.split("|")[0],
          bW = FF.isBlock(WF) ? WF : FF.isBlock(hF) ? hF : null;
        if (null === bW || "rock" !== FF.harvestType(bW) || FF.dropsNothing(bW) && !ZC.has(hF)) return null;
        const dF = SF && "rock" === FF.harvests(SF) ? null !== (AF = FF.level(SF)) && void 0 !== AF ? AF : 0 : null,
          PF = null !== (uF = null !== CF && void 0 !== CF ? CF : FF.harvestLevel(bW)) && void 0 !== uF ? uF : 0;
        return (null !== dF ? PF <= dF : 0 === FF.harvestLevel(bW)) ? null : TC(FF, PF)
      }(yt, FF, WF, SF)
    }

    function ng(FF, WF) {
      return function(FF, WF, SF) {
        if (WF === tA[0]) return [(0, cW.Xd)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, cW.D.whiteUiText)];
        const CF = SF.split("|")[0],
          AF = FF.isBlock(CF) ? FF.displayName(CF) : void 0,
          uF = "string" === typeof AF ? AF : AF && "translationKey" in AF ? `$t(${AF.translationKey})` : CF;
        return [(0, cW.Xd)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: uF
          }
        }, cW.D.whiteUiText), (0, cW.Xd)({
          translationKey: `item:${(0,cW.xe)(WF)}`
        }, cW.D.yellowUiText)]
      }(yt, FF, WF)
    }
    const Hg = "buildAFactory2Game:";
    const Kg = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function wg(FF) {
      return FF.endsWith(" Ore")
    }
    const Xg = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      Ug = [],
      Bg = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: Xg,
        plan: null,
        atomic: Ug
      },
      jt = "buildAFactory2Game:",
      vt = new Set(["Splitter", "Sorting Gate"]),
      Jg = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class pg {
      constructor() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = FF, this.planAt = WF, this.tierOf = SF, this.ah = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.yS = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = Bg, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(FF, WF, SF) {
        var CF, AF, uF;
        let hF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const bW = null !== (CF = null === (AF = FF.pbF(WF)) || void 0 === AF ? void 0 : AF.name) && void 0 !== CF ? CF : null,
          dF = FF.isPlayerCrouching(WF),
          PF = 0 === SF ? null : this.resolve(FF, SF),
          RF = null !== PF && null !== hF && vt.has(PF.rootName) && function(FF, WF) {
            return Jg.some((SF => {
              let [CF, AF] = SF;
              const uF = FF.getBlockId(WF[0] + CF, WF[1], WF[2] + AF);
              return 0 !== uF && "Express Belt" === FF.getMetaInfo(uF).rootName
            }))
          }(FF, hF),
          iW = this.updatePlan(0 === SF ? null : hF),
          eF = this.tierOf(),
          EF = null === hF ? null : (0, fg.f)(SF),
          QF = null !== EF && null !== hF && (0, fg.h)(function(FF) {
            return (WF, SF, CF) => FF.getBlockId(WF, SF, CF)
          }(FF), hF[0], hF[1], hF[2], EF),
          rW = this.readAfloat(FF, SF, hF);
        if (SF === this.ah && QF === this.missesMaker && rW === this.afloat && bW === this.yS && dF === this.crouching && RF === this.express && eF === this.tier && !iW && (!this.targetsLive || !this.liveMoved(hF))) return;
        this.ah = SF, this.missesMaker = QF, this.afloat = rW, this.yS = bW, this.crouching = dF, this.express = RF;
        const gW = RF && PF ? function(FF) {
          if (null === FF.info) return null;
          return FF.express ??= {
            ...FF.info,
            detail: `${jt}lookKeepsUpExpress`,
            detailItem: null
          }, FF.express
        }(PF) : null !== PF && QF && null !== EF ? this.besideMaker(PF, SF, EF) : null !== PF && rW ? this.hanging(PF) : null !== (uF = null === PF || void 0 === PF ? void 0 : PF.info) && void 0 !== uF ? uF : null;
        this.tier = eF;
        const tW = PF && gW ? function(FF, WF) {
          var SF, CF;
          const AF = oF.i[FF];
          if (!FF.endsWith(" Ore") || "rock" !== (null === AF || void 0 === AF ? void 0 : AF.harvestType) || 0 === AF.harvestLevel) return null;
          const uF = null !== (SF = AF.harvestLevel) && void 0 !== SF ? SF : 0,
            hF = WF ? nh.o[WF] : void 0;
          if ("rock" === (null === hF || void 0 === hF ? void 0 : hF.harvests) && (null !== (CF = hF.level) && void 0 !== CF ? CF : 0) >= uF) return null;
          const bW = (dF = uF, TC(yt, dF));
          var dF;
          if (null === bW) return null;
          const PF = UA(bW),
            RF = /^[AEIOU]/.test(bW) ? "An" : "";
          if ("rock" === (null === hF || void 0 === hF ? void 0 : hF.harvests) && WF) return {
            key: `${jt}lookToolTooWeak${RF}`,
            yS: UA(WF),
            needed: PF
          };
          return {
            key: bW === tA[0] ? `${jt}lookNeedAnyPickaxe` : `${jt}lookNeedPickaxe${RF}`,
            yS: null,
            needed: PF
          }
        }(PF.rootName, bW) : null;
        this.targetsLive = !0 === (null === PF || void 0 === PF ? void 0 : PF.live) && null !== hF;
        let TF = null;
        this.targetsLive && PF && hF && this.live && (this.livePos[0] = hF[0], this.livePos[1] = hF[1], this.livePos[2] = hF[2], this.liveVersion = this.live.version(), TF = this.live.line(PF.rootName, hF));
        const aW = null === gW ? Xg : function(FF, WF, SF) {
            const CF = function(FF, WF, SF) {
              const CF = DS(FF);
              if (null === CF) return null;
              const AF = `${Hg}lookPortMode_${CF}`,
                uF = MC(WF);
              if (uF && SF) return {
                mode: null,
                detail: AF,
                next: `${Hg}lookWrenchPickUp`,
                nextState: null
              };
              const hF = LS(FF),
                bW = null === hF ? null : DS(hF);
              return null === bW ? {
                mode: null,
                detail: AF,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: AF,
                next: uF ? `${Hg}lookWrenchNext` : `${Hg}lookPortWrench`,
                nextState: `${Hg}lookPortState_${bW}`
              }
            }(FF, WF, SF);
            if (null !== CF) return CF;
            const AF = BC(FF, WF, SF);
            return null === AF.mode && null === AF.next ? Xg : AF
          }(FF.blockIdToBlockName(SF), bW, dF),
          kW = this.plan,
          qW = PF && gW ? this.rowsOf(PF.rootName, eF) : Ug,
          VF = this.snapshot;
        if (!(null === gW ? !VF.visible : VF.visible && gW === VF.info && (NF = tW, DF = VF.tool, NF === DF || null !== NF && null !== DF && NF.key === DF.key && NF.yS === DF.yS && NF.needed === DF.needed) && function(FF, WF) {
            return FF === WF || null !== FF && null !== WF && FF.key === WF.key && JSON.stringify([FF.params, FF.keys]) === JSON.stringify([WF.params, WF.keys])
          }(TF, VF.live) && function(FF, WF) {
            return FF.mode === WF.mode && FF.detail === WF.detail && FF.next === WF.next && FF.nextState === WF.nextState
          }(aW, VF.wrench) && xr(kW, VF.plan) && qW === VF.atomic)) {
          var NF, DF;
          this.snapshot = null === gW ? {
            ...VF,
            visible: !1
          } : {
            info: gW,
            visible: !0,
            tool: tW,
            live: TF,
            wrench: aW,
            plan: kW,
            atomic: qW
          };
          for (const FF of this.listeners) FF()
        }
      }
      get() {
        return this.snapshot
      }
      subscribe(FF) {
        return this.listeners.add(FF), () => {
          this.listeners.delete(FF)
        }
      }
      dispose() {
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = Bg, this.ah = 0, this.yS = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(FF, WF, SF) {
        if (null === SF || 0 === WF || !bW() || !wg(this.resolve(FF, WF).rootName)) return !1;
        const CF = `${SF[0]},${SF[1]},${SF[2]},${WF}`,
          AF = performance.now();
        return CF === this.afloatKey && AF - this.afloatAt < lg ? this.afloat : (this.afloatKey = CF, this.afloatAt = AF, function(FF, WF) {
          for (const [SF, CF, AF] of Kg) {
            const uF = WF(FF[0] + SF, FF[1] + CF, FF[2] + AF);
            if (void 0 === uF || null !== uF && !wg(uF)) return !1
          }
          return !0
        }(SF, ((WF, SF, CF) => function(FF, WF, SF, CF) {
          if (!FF.isBlockInLoadedChunk(WF, SF, CF)) return;
          const AF = FF.getBlockId(WF, SF, CF);
          return 0 === AF ? null : FF.getMetaInfo(AF).rootName
        }(FF, WF, SF, CF))))
      }
      liveMoved(FF) {
        var WF;
        const {
          livePos: SF
        } = this;
        return null === FF || FF[0] !== SF[0] || FF[1] !== SF[1] || FF[2] !== SF[2] || (null === (WF = this.live) || void 0 === WF ? void 0 : WF.version()) !== this.liveVersion
      }
      updatePlan(FF) {
        const WF = null === FF ? "" : FF.join(","),
          SF = performance.now();
        if (WF === this.planPos && SF - this.planMs < 250) return !1;
        this.planPos = WF, this.planMs = SF;
        const CF = null === FF ? null : this.planAt([FF[0], FF[1], FF[2]]),
          AF = !xr(CF, this.plan);
        return this.plan = CF, AF
      }
      besideMaker(FF, WF, SF) {
        let {
          info: CF
        } = FF;
        if (null === CF) return null;
        let AF = this.besideMakerById.get(WF);
        if (void 0 === AF) {
          const FF = "cryo" === SF ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          AF = {
            ...CF,
            detail: `${jt}${FF}`,
            detailItem: null
          }, this.besideMakerById.set(WF, AF)
        }
        return AF
      }
      hanging(FF) {
        let {
          info: WF,
          rootName: SF
        } = FF;
        if (null === WF) return null;
        let CF = this.afloatByRoot.get(SF);
        return void 0 === CF && (CF = {
          ...WF,
          detail: `${jt}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(SF, CF)), CF
      }
      rowsOf(FF, WF) {
        if (null === WF) return Ug;
        const SF = `${FF}|${WF}`;
        let CF = this.rowsByKey.get(SF);
        if (void 0 === CF) {
          const AF = function(FF, WF) {
            var SF;
            if (!(FF in LW)) return [];
            const CF = null !== (SF = mS[FF]) && void 0 !== SF ? SF : [],
              AF = new Map;
            for (const hF of ou(FF, WF))
              if ((CF.includes(hF) || Zu(hF.output) && Ou(hF.output) > vW(FF)) && Ou(hF.output) <= WF) {
                var uF;
                const FF = null !== (uF = AF.get(hF.output)) && void 0 !== uF ? uF : [];
                FF.push(hF.input), AF.set(hF.output, FF)
              } return Mu([...AF], (FF => {
              let [WF] = FF;
              return -Ou(WF)
            })).map((FF => {
              let [WF, SF] = FF;
              return {
                output: WF,
                inputs: SF
              }
            }))
          }(FF, WF);
          CF = AF.length > 0 ? AF : Ug, this.rowsByKey.set(SF, CF)
        }
        return CF
      }
      resolve(FF, WF) {
        const {
          rootId: SF,
          rootName: CF
        } = FF.getMetaInfo(WF), AF = (0, hS.h)(CF) ? WF : SF;
        let uF = this.byRootId.get(AF);
        const hF = bW();
        if (void 0 === uF || uF.nuclear !== hF) {
          var dF;
          const SF = function(FF) {
            return OC(yt, FF, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FF)
          }(CF, FF.blockIdToBlockName(WF));
          uF = {
            info: SF,
            rootName: CF,
            live: null !== SF && !0 === (null === (dF = this.live) || void 0 === dF ? void 0 : dF.handles(CF)),
            nuclear: hF
          }, this.byRootId.set(AF, uF)
        }
        return uF
      }
    }
    const lg = 500;
    const Ft = (0, CF.memo)((function(FF) {
        var WF, SF;
        let {
          store: AF
        } = FF;
        const {
          t: uF
        } = (0, TA.B)(), [hF, bW] = (0, CF.useState)((() => AF.get()));
        (0, CF.useEffect)((() => (bW(AF.get()), AF.subscribe((() => {
          bW(AF.get())
        })))), [AF]);
        const {
          openInGameMenuName: dF,
          openEverythingMenuName: PF,
          isTouchScreen: RF
        } = (0, iu.d)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
          info: iW,
          tool: eF,
          live: EF,
          wrench: QF,
          atomic: rW
        } = hF, gW = hF.visible && null === dF && null === PF;
        if (null === iW) return null;
        const tW = null !== QF.detail ? uF(QF.detail) : null !== (WF = hF.plan) && void 0 !== WF && WF.ctrl ? uF("buildAFactory2Game:lookPlanCtrl") : null !== iW.detail ? uF(iW.detail, null === iW.detailItem ? void 0 : {
          item: uF(iW.detailItem)
        }) : null;
        return (0, Qu.jsxs)("div", {
          className: QA()("Baf2LookTarget", {
            Visible: gW
          }),
          "aria-hidden": !gW,
          children: [(0, Qu.jsx)("div", {
            className: "Baf2LookTargetName SmallTextBold",
            children: uF(iW.name)
          }), null !== hF.plan && (0, Qu.jsx)("div", {
            className: "Baf2LookTargetDetail",
            children: uF(hF.plan.key, {
              kind: uF(hF.plan.kindKey),
              w: String(hF.plan.w),
              h: String(hF.plan.h),
              d: String(hF.plan.d),
              count: String(hF.plan.count)
            })
          }), void 0 !== (null === (SF = hF.plan) || void 0 === SF ? void 0 : SF.why) && (0, Qu.jsx)("div", {
            className: "Baf2LookTargetDetail Warning",
            children: uF(hF.plan.why)
          }), null !== QF.mode && (0, Qu.jsx)("div", {
            className: "Baf2LookTargetDetail",
            children: uF(QF.mode)
          }), null !== eF ? (0, Qu.jsx)("div", {
            className: "Baf2LookTargetDetail Warning",
            children: uF(eF.key, {
              item: uF(eF.needed),
              yS: null === eF.yS ? "" : uF(eF.yS)
            })
          }) : null !== EF ? (0, Qu.jsx)("div", {
            className: "Baf2LookTargetDetail",
            children: uF(EF.key, Ud(uF, EF))
          }) : null !== tW && (0, Qu.jsx)("div", {
            className: "Baf2LookTargetDetail",
            children: tW
          }), rW.length > 0 && (0, Qu.jsx)("div", {
            className: "Baf2LookTargetDetail",
            children: uF("buildAFactory2Game:lookAtomicRecipes", {
              list: rW.map((FF => {
                let {
                  output: WF,
                  inputs: SF
                } = FF;
                const CF = SF.length > 1 ? ` ${uF("buildAFactory2Game:recipeMore",{count:String(SF.length-1)})}` : "";
                return `${uF(UA(SF[0]))}${CF} \u2192 ${uF(UA(WF))}`
              })).join(", ")
            })
          }), null !== QF.next && (0, Qu.jsx)("div", {
            className: "Baf2LookTargetDetail",
            children: uF(QF.next, {
              state: null === QF.nextState ? "" : uF(QF.nextState),
              use: uF(RF ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
            })
          })]
        })
      })),
      Wt = [],
      St = [
        [0, -1, 0]
      ];

    function Ct(FF) {
      const WF = [FF];
      for (let SF = 1; SF <= 4; SF++) SF > 1 && WF.push(`${FF}|meta|rot${SF}`), WF.push(`${FF}|meta|rot${SF}|Running`);
      return WF
    }

    function At(FF, WF) {
      return [Math.floor(FF[0] / WF), Math.floor(FF[1] / WF), Math.floor(FF[2] / WF)]
    }

    function ut(FF, WF, SF) {
      return `${FF},${WF},${SF}`
    }

    function ht(FF) {
      const WF = FF.split("|")[0];
      if (!WS(WF)) return Wt;
      const SF = LW[WF];
      if (UW(SF)) return St;
      const CF = ug(FF);
      return BW(SF) ? [
        [-CF[0], -CF[1], -CF[2]]
      ] : ru(SF) ? function(FF, WF) {
        const SF = FF[0] - 2 * WF[0],
          CF = FF[2] - 2 * WF[2],
          AF = [];
        for (let uF = -1; uF <= 1; uF++)
          for (let WF = -1; WF <= 1; WF++) AF.push([SF + uF, FF[1], CF + WF]);
        return AF
      }([0, 0, 0], CF) : Wt
    }
    const bT = [.2, .8, .3],
      dt = [.45, 1, .5],
      Pt = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((FF => .5 * FF / 2)),
      Rt = [0, 1, 2, 0, 2, 3],
      iT = [4, 5];
    class et {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(FF) {
        this.indexed = !0;
        for (const WF of kS)
          for (const SF of Ct(WF)) {
            const WF = FF.blockNameToBlockId(SF, !0),
              CF = ht(SF);
            null !== WF && CF.length > 0 && (this.offsetsList.push(CF), this.offsetsIndexById[WF] = this.offsetsList.length)
          }
      }
      onAfterRender(FF, WF) {
        this.indexed || this.index(FF);
        const SF = performance.now();
        if (SF - this.lastCheckMs < 100) return;
        this.lastCheckMs = SF, this.checks++;
        const CF = JE.h.MC,
          [AF, uF, hF] = At(WF, CF);
        let bW = !1;
        const dF = [];
        let PF = 0;
        for (let RF = AF - 2; RF <= AF + 2; RF++)
          for (let WF = uF - 1; WF <= uF + 1; WF++)
            for (let AF = hF - 2; AF <= hF + 2; AF++) {
              const uF = PF++,
                hF = ut(RF, WF, AF),
                iW = FF.getChunkVersion(RF, WF, AF);
              let eF = this.chunks.get(hF);
              null !== iW ? (eF || (eF = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(hF, eF)), eF.seenAt = this.checks, eF.checkedVersion !== iW && (eF.checkedVersion = iW, bW = !0), eF.scannedVersion !== iW && SF - eF.scannedAt >= 500 && dF.push({
                slot: uF,
                entry: eF,
                origin: [RF * CF, WF * CF, AF * CF]
              })) : (bW ||= void 0 !== eF, this.chunks.delete(hF))
            }
        this.scanDue(FF, dF) && (bW = !0);
        for (const [RF, iW] of this.chunks) iW.seenAt !== this.checks && (bW ||= iW.machines.length > 0, this.chunks.delete(RF));
        for (const RF of this.chunks.values())
          for (const [WF, SF, CF] of RF.cellChunks)(Math.abs(WF - AF) > 2 || Math.abs(SF - uF) > 1 || Math.abs(CF - hF) > 2) && this.watchCellChunk(FF, WF, SF, CF) && (bW = !0);
        for (const [RF, iW] of this.cellChunks) iW.seenAt !== this.checks && this.cellChunks.delete(RF);
        bW && this.refresh(FF)
      }
      dispose(FF) {
        this.clearMeshes(FF), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(FF, WF) {
        const SF = Math.max(WF.findIndex((FF => {
          let {
            slot: WF
          } = FF;
          return WF >= this.scanFrom
        })), 0);
        let CF = 96;
        for (let AF = 0; AF < WF.length; AF++) {
          const {
            slot: uF,
            entry: hF,
            origin: bW
          } = WF[(SF + AF) % WF.length];
          if (CF -= this.scan(FF, hF, bW), CF <= 0) {
            this.scanFrom = uF + 1;
            break
          }
        }
        return WF.length > 0
      }
      scan(FF, WF, SF) {
        let [CF, AF, uF] = SF;
        const hF = JE.h.MC,
          bW = this.hits;
        bW.length = 0;
        const dF = FF.scanBlocks(CF, AF, uF, CF + hF, AF + hF, uF + hF, this.offsetsIndexById, bW),
          PF = [];
        for (let RF = 0; RF < bW.length; RF += 4) PF.push({
          pos: [bW[RF], bW[RF + 1], bW[RF + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[bW[RF + 3]] - 1]
        });
        return WF.machines = PF, WF.cellChunks = function(FF, WF) {
          const SF = new Set,
            CF = [];
          for (const {
              pos: AF,
              offsets: uF
            }
            of FF)
            for (const [FF, hF, bW] of uF) {
              const uF = At([AF[0] + FF, AF[1] + hF, AF[2] + bW], WF),
                dF = ut(...uF);
              SF.has(dF) || (SF.add(dF), CF.push(uF))
            }
          return CF
        }(PF, hF), WF.scannedVersion = WF.checkedVersion, WF.scannedAt = performance.now(), Math.max(dF, 1)
      }
      watchCellChunk(FF, WF, SF, CF) {
        const AF = ut(WF, SF, CF),
          uF = FF.getChunkVersion(WF, SF, CF),
          hF = this.cellChunks.get(AF);
        return null === uF ? this.cellChunks.delete(AF) : (null === hF || void 0 === hF ? void 0 : hF.version) === uF ? (hF.seenAt = this.checks, !1) : (this.cellChunks.set(AF, {
          version: uF,
          seenAt: this.checks
        }), !0)
      }
      refresh(FF) {
        const WF = function(FF, WF) {
            const SF = new Set,
              CF = [];
            for (const {
                pos: AF,
                offsets: uF
              }
              of FF)
              for (const [FF, hF, bW] of uF) {
                const uF = AF[0] + FF,
                  dF = AF[1] + hF,
                  PF = AF[2] + bW,
                  RF = `${uF},${dF},${PF}`;
                SF.has(RF) || (SF.add(RF), WF(uF, dF, PF) && CF.push([uF, dF, PF]))
              }
            return CF
          }([...this.chunks.values()].flatMap((FF => FF.machines)), ((WF, SF, CF) => FF.isBlockInLoadedChunk(WF, SF, CF) && 0 === FF.getBlockId(WF, SF, CF))),
          SF = WF.join(";");
        SF !== this.shownKey && (this.shownKey = SF, this.clearMeshes(FF), WF.length > 0 && (this.meshes = [this.build(FF, WF, !1), this.build(FF, WF, !0)]))
      }
      build(FF, WF, SF) {
        const CF = WF[0],
          AF = [],
          uF = [];
        for (const [hF, bW, dF] of WF) {
          const FF = hF - CF[0] + .5,
            WF = bW - CF[1] + .5,
            PF = dF - CF[2] + .5;
          for (let CF = 0; CF < 6; CF++) {
            if (iT.includes(CF) !== SF) continue;
            const hF = AF.length / 3;
            for (let SF = 4 * CF; SF < 4 * CF + 4; SF++) AF.push(Pt[3 * SF] + FF, Pt[3 * SF + 1] + WF, Pt[3 * SF + 2] + PF);
            for (const FF of Rt) uF.push(hF + FF)
          }
        }
        return FF.createGameMesh({
          positions: AF,
          indices: uF
        }, {
          rgb: SF ? dt : bT,
          alpha: .4
        }, CF)
      }
      clearMeshes(FF) {
        for (const WF of this.meshes) FF.disposeGameMesh(WF);
        this.meshes = []
      }
    }
    const Et = 1 / .6,
      Qt = 200,
      rT = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      gT = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      tT = 2 * Math.PI / 3;
    class Tt {
      constructor() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rT;
        this.style = FF, this.particles = null, this.points = new Float32Array(800), this.budget = Qt, this.lastMs = 0
      }
      static blade() {
        return new Tt(gT)
      }
      KD(FF, WF) {
        const SF = Math.min(WF.arcStruck, WF.arcPoints.length);
        this.draw(FF, [WF.arcFrom, ...WF.arcPoints], WF.arcPoints.slice(0, SF))
      }
      onBlade(FF, WF) {
        const [SF, CF, AF] = WF.bladeCentre, [uF, hF] = WF.bladeFacing, bW = SF - 1.5 * uF, dF = AF - 1.5 * hF, PF = Math.atan2(hF, uF), RF = [];
        for (let iW = 0; iW <= 8; iW++) {
          const FF = PF - tT / 2 + tT * iW / 8;
          RF.push([bW + 2.5 * Math.cos(FF), CF, dF + 2.5 * Math.sin(FF)])
        }
        this.draw(FF, RF, WF.bladeStruck)
      }
      dispose() {
        var FF;
        null === (FF = this.particles) || void 0 === FF || FF.stop(), this.particles = null
      }
      draw(FF, WF, SF) {
        if (!FF.particlesEnabled() || WF.length < 2) return;
        const CF = performance.now();
        this.budget = Math.min(Qt, this.budget + (CF - this.lastMs) / 1e3 * Qt), this.lastMs = CF;
        const AF = [];
        let uF = 0,
          hF = WF[0];
        for (const tW of WF.slice(1)) {
          const FF = Math.min(48, Math.round(Math.hypot(tW[0] - hF[0], tW[1] - hF[1], tW[2] - hF[2]) * this.style.perBlock));
          AF.push([hF, tW, FF]), uF += FF, hF = tW
        }
        const bW = SF.length;
        uF += 10 * bW;
        const dF = uF > this.budget ? this.budget / uF : 1;
        if (0 === uF || dF * uF < 1) return;
        const PF = WF[0],
          [RF, iW, eF] = PF,
          EF = this.points;
        let QF = 0;
        const rW = (FF, WF, SF, CF) => {
          const AF = 4 * QF;
          EF[AF] = FF - RF, EF[AF + 1] = WF - iW, EF[AF + 2] = SF - eF, EF[AF + 3] = CF, QF++
        };
        AF.forEach(((FF, WF) => {
          let [SF, CF, AF] = FF;
          const uF = Math.min(Math.floor(AF * dF), Qt - QF),
            hF = Math.hypot(CF[0] - SF[0], CF[1] - SF[1], CF[2] - SF[2]),
            bW = 0 === WF && hF > 0 ? Math.min(.5, .1 * hF) / hF : 0;
          for (let dF = 0; dF < uF; dF++) {
            const FF = bW + (dF + .5) / uF * (1 - bW);
            rW(SF[0] + (CF[0] - SF[0]) * FF, SF[1] + (CF[1] - SF[1]) * FF, SF[2] + (CF[2] - SF[2]) * FF, .15)
          }
        }));
        const gW = Math.floor(10 * dF);
        for (let tW = 0; tW < bW; tW++) {
          const [FF, WF, CF] = SF[tW];
          for (let SF = 0; SF < gW && QF < Qt; SF++) rW(FF, WF, CF, 2.5)
        }
        this.budget -= QF, this.particles ??= FF.createParticles(function(FF) {
          const [WF, SF] = FF.colours;
          return {
            texture: "square_particle",
            ZF: 400,
            minLifeTime: FF.life[0] / Et,
            maxLifeTime: FF.life[1] / Et,
            minSize: FF.size[0],
            maxSize: FF.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [WF[0], WF[1], WF[2], 1],
              maxColor: [SF[0], SF[1], SF[2], 1]
            }, {
              timeFraction: 1,
              minColor: [WF[0], WF[1], WF[2], 0],
              maxColor: [SF[0], SF[1], SF[2], 0]
            }],
            blendMode: Db.f.Add
          }
        }(this.style), {
          pos: PF
        }), this.particles.emitPoints(PF, EF, QF)
      }
    }
    const aT = new Set(["Sky Spring"]);

    function kT(FF, WF, SF) {
      const CF = FF.split("|")[0];
      return "Air" !== WF || SF || ! function(FF) {
        const WF = FF.split("|")[0];
        return void 0 !== pW[WF] || aT.has(WF)
      }(CF) ? null : FF
    }
    class qT {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(FF) {
        const WF = FF - this.lastTapAt >= 300;
        return this.lastTapAt = FF, WF
      }
    }
    class Vt {
      constructor() {
        this.presses = new qT, this.predicted = null
      }
      tap(FF, WF) {
        const SF = this.presses.isNewPress(WF);
        return SF && (this.predicted = {
          station: FF,
          at: WF
        }), SF
      }
      consumeServerOpen(FF, WF) {
        const SF = this.predicted;
        return !(null === SF || SF.station !== FF || WF - SF.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class Nt {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(FF, WF) {
        return FF && (this.thrustAt = WF), WF - this.thrustAt < 200
      }
    }
    const Dt = [.1, .05, .1],
      Lt = {
        texture: "effect_5",
        ZF: Math.ceil(48),
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
        blendMode: Db.f.OneOne
      };
    class mT {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new Nt, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      KD(FF, WF) {
        for (const [SF, CF] of WF.baf2JetFlames) FF.isLocalPlayer(SF) || (CF ? this.lit.add(SF) : this.lit.delete(SF))
      }
      onAfterRender(FF, WF) {
        const SF = performance.now(),
          CF = this.hold.lit(this.selfThrusting(FF, WF), SF);
        for (const [AF, uF] of this.flames)(AF === WF ? CF : this.lit.has(AF)) || this.setEmitting(uF, !1), AF === WF || FF.getPositionView(AF) ? !uF.emitting && SF - uF.offAt >= 1300 && (uF.particles.stop(), this.flames.delete(AF)) : (uF.particles.dispose(), this.flames.delete(AF), this.lit.delete(AF));
        CF && this.draw(FF, WF, WF);
        for (const AF of this.lit) this.draw(FF, WF, AF)
      }
      dispose() {
        for (const FF of this.flames.values()) FF.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(FF, WF) {
        var SF;
        const CF = FF.getLocalPlayerMovement();
        return !!CF && (null !== (AF = {
          option: null !== (SF = FF.getClientOption(WF, "jumpHoldThrust")) && void 0 !== SF ? SF : null,
          jumping: CF.jumpHeld,
          onGround: CF.onGround,
          alive: FF.isAlive(WF)
        }).option && AF.option.maxUpSpeed >= 0 && AF.jumping && !AF.onGround && AF.alive);
        var AF
      }
      draw(FF, WF, SF) {
        var CF, AF;
        const uF = this.pos;
        if (!FF.readDrawnPosition(SF, uF)) return;
        const hF = FF.readDrawnPosition(WF, this.camera) ? this.camera : uF;
        if (!((uF[0] - hF[0]) ** 2 + (uF[1] - hF[1]) ** 2 + (uF[2] - hF[2]) ** 2 < 1600) || !FF.particlesEnabled()) {
          const FF = this.flames.get(SF);
          return void(FF && this.setEmitting(FF, !1))
        }
        const bW = null !== (CF = this.flames.get(SF)) && void 0 !== CF ? CF : this.create(FF, SF, uF),
          dF = null !== (AF = FF.getDrawnHeading(SF)) && void 0 !== AF ? AF : 0,
          PF = this.at;
        PF[0] = uF[0] - .35 * Math.sin(dF), PF[1] = uF[1] + 1.05, PF[2] = uF[2] - .35 * Math.cos(dF), bW.particles.moveTo(PF), this.setEmitting(bW, !0)
      }
      setEmitting(FF, WF) {
        FF.emitting !== WF && (FF.emitting = WF, WF || (FF.offAt = performance.now()), FF.particles.setEmitRate(WF ? 60 : 0))
      }
      create(FF, WF, SF) {
        const CF = {
          particles: FF.createParticles(Lt, {
            pos: SF,
            half: Dt
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(WF, CF), CF
      }
    }

    function Ot(FF) {
      return "Reactor Frame" === jC("reactor", FF)
    }

    function xT(FF) {
      return ZS("reactor", FF) && !Ot(FF) && (FF.startsWith("Reactor Glass") || FF.startsWith("Reactor Port"))
    }
    const Zt = "baf2Goal";
    class ot {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [DA.j.subscribe("setDirectionArrow", (FF => {
          let {
            id: WF,
            position: SF
          } = FF;
          WF === Zt && (this.goal = SF, this.checkedAt = -1 / 0)
        })), DA.j.subscribe("clearDirectionArrow", (FF => {
          let {
            id: WF
          } = FF;
          null !== WF && WF !== Zt || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const FF of this.subs) DA.j.unsubscribe(FF)
      }
      sideOf(FF, WF, SF, CF) {
        const AF = this.goal;
        if (!AF) return 0;
        SF - this.checkedAt > 1e3 && (this.checkedAt = SF, this.open = function(FF, WF) {
          const [SF, CF, AF] = FF.map(Math.floor);
          if (!xT(WF(SF, CF, AF))) return null;
          for (const [uF, hF] of [
              [1, 0],
              [0, 1]
            ]) {
            const FF = WF(SF + uF, CF, AF + hF),
              bW = WF(SF - uF, CF, AF - hF);
            if (Ot(bW) && xT(FF)) return [uF, 0, hF];
            if (Ot(FF) && xT(bW)) return [0 - uF, 0, 0 - hF]
          }
          return null
        }(AF, ((WF, SF, CF) => FF.blockIdToBlockName(FF.getBlockId(WF, SF, CF)))));
        const uF = this.open;
        if (!uF) return 0;
        const hF = CF(AF);
        if (Math.abs(hF.x - WF.x) > .05 || Math.abs(hF.y - WF.y) > .05) return 0;
        const bW = CF([AF[0] + uF[0], AF[1], AF[2] + uF[2]]).x - hF.x;
        return Math.abs(bW) < .3 ? 0 : bW > 0 ? 1 : -1
      }
    }
    class Yt {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new ot, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.DC = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.tL = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((FF => {
          for (const WF of FF) WF.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(WF.target, WF.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.DC || this.clear()
        }, window.addEventListener("resize", this.tL)
      }
      onAfterRender(FF, WF) {
        var SF;
        this.api = FF, this.project = null !== (SF = null === WF || void 0 === WF ? void 0 : WF.projectWorldPosToScreenPos) && void 0 !== SF ? SF : null, this.queued || this.DC || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.DC = !0;
        for (const FF of this.moved.keys()) FF.style.transform = "";
        this.moved.clear();
        for (const FF of this.sideLabels.keys()) FF.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.tL)
      }
      clear() {
        for (const uF of this.moved.keys()) uF.isConnected || this.moved.delete(uF);
        for (const uF of this.sideLabels.keys()) uF.isConnected || this.sideLabels.delete(uF);
        if (0 === this.arrows.length) return;
        const FF = performance.now(),
          WF = FF - this.refreshedAt > 1e3;
        WF && (this.refreshedAt = FF, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const SF = this.trackerBox(),
          CF = this.barsBox(),
          AF = this.toastBox(WF);
        (SF || CF || AF) && WF && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let uF = 0; uF < this.arrows.length; uF++) {
          const WF = this.arrows[uF];
          this.labelOffsets.set(WF, this.runLabelAside(WF, FF));
          const hF = (SF ? this.shiftLeftOf(WF, SF) : 0) || this.shiftOnScreen(WF),
            bW = Math.min(CF ? this.liftAbove(WF, CF, hF) : 0, AF ? this.liftAbove(WF, AF, hF) : 0),
            dF = this.moved.get(WF);
          if (0 !== hF || 0 !== bW) {
            const FF = 0 === bW ? `translateX(${hF}px)` : `translate(${hF}px, ${bW}px)`;
            dF !== FF && (WF.style.transform = FF, this.moved.set(WF, FF))
          } else void 0 !== dF && (WF.style.transform = "", this.moved.delete(WF))
        }
      }
      trackerBox() {
        var FF, WF;
        const SF = null !== (FF = this.tracker) && void 0 !== FF && FF.isConnected ? this.tracker : null !== (WF = this.trackers[0]) && void 0 !== WF ? WF : null;
        if (SF !== this.tracker && this.watch(SF), this.boxStale && SF) {
          var CF, AF, uF;
          this.boxStale = !1;
          const FF = SF.closest(".NoRoom") ? null : SF.getBoundingClientRect(),
            WF = FF && FF.width > 0 ? null === (CF = this.hud) || void 0 === CF ? void 0 : CF.getBoundingClientRect() : void 0,
            hF = FF && WF ? Math.max(FF.top, WF.top) : null !== (AF = null === FF || void 0 === FF ? void 0 : FF.top) && void 0 !== AF ? AF : 0,
            bW = FF && WF ? Math.min(FF.bottom, WF.bottom) : null !== (uF = null === FF || void 0 === FF ? void 0 : FF.bottom) && void 0 !== uF ? uF : 0;
          this.box = FF && FF.width > 0 && bW > hF ? {
            left: FF.left,
            top: hF,
            right: FF.right,
            bottom: bW
          } : null
        }
        return SF ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var FF;
          this.barsStale = !1;
          const WF = null === (FF = this.statBars[0]) || void 0 === FF ? void 0 : FF.getBoundingClientRect();
          this.bars = WF && WF.width > 0 && WF.height > 0 ? {
            left: WF.left,
            top: WF.top,
            right: WF.right,
            bottom: WF.bottom
          } : null
        }
        return this.bars
      }
      toastBox(FF) {
        var WF;
        const SF = null !== (WF = this.toasts[0]) && void 0 !== WF ? WF : null;
        if (SF !== this.toastEl || FF && SF) {
          this.toastEl = SF;
          const FF = null === SF || void 0 === SF ? void 0 : SF.getBoundingClientRect();
          this.toast = FF && FF.width > 0 && FF.height > 0 ? {
            left: FF.left,
            top: FF.top,
            right: FF.right,
            bottom: FF.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(FF, WF, SF) {
        var CF;
        const AF = this.anchorOf(FF);
        if (!AF) return 0;
        const uF = AF.x + SF + (null !== (CF = this.labelOffsets.get(FF)) && void 0 !== CF ? CF : 0),
          {
            halfWidth: hF,
            labelled: bW
          } = this.extentOf(FF),
          dF = AF.y + this.em * (bW ? 6.2 : 3);
        return dF < WF.top - 6 || uF + hF < WF.left - 6 || uF - hF > WF.right + 6 ? 0 : WF.top - 6 - dF
      }
      watch(FF) {
        var WF, SF;
        this.tracker && this.sizes.unobserve(this.tracker), null === (WF = this.hud) || void 0 === WF || WF.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = FF, this.hud = null !== (SF = null === FF || void 0 === FF ? void 0 : FF.closest(".Baf2QuestHud")) && void 0 !== SF ? SF : null, this.box = null, this.boxStale = !0, FF && this.sizes.observe(FF), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(FF, WF) {
        var SF;
        const CF = this.anchorOf(FF);
        if (!CF) return 0;
        const {
          y: AF
        } = CF, uF = CF.x + (null !== (SF = this.labelOffsets.get(FF)) && void 0 !== SF ? SF : 0), hF = this.em, {
          halfWidth: bW,
          labelled: dF
        } = this.extentOf(FF), PF = AF - hF, RF = uF + bW;
        return AF + hF * (dF ? 6.2 : 3) < WF.top || PF > WF.bottom || RF < WF.left - 6 || uF - bW > WF.right ? 0 : Math.max(WF.left - 6 - RF, 6 - (uF - bW))
      }
      shiftOnScreen(FF) {
        var WF;
        const SF = this.anchorOf(FF);
        if (!SF) return 0;
        const {
          halfWidth: CF
        } = this.extentOf(FF), AF = SF.x + (null !== (WF = this.labelOffsets.get(FF)) && void 0 !== WF ? WF : 0), uF = AF + CF - (this.innerWidth - 6);
        return uF > 0 ? -uF : Math.max(0, 6 - (AF - CF))
      }
      runLabelAside(FF, WF) {
        var SF;
        let CF = null;
        for (let hF = 0; hF < FF.children.length; hF++) FF.children[hF].classList.contains("DirectionArrowLabel") && (CF = FF.children[hF]);
        if (!CF) return 0;
        const AF = FF.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(FF) : null,
          uF = (AF && this.api ? this.side.sideOf(this.api, {
            x: AF.x / this.innerWidth * 100,
            y: AF.y / this.innerHeight * 100
          }, WF, this.project) : 0) * this.halfWidthOf(CF);
        return uF !== (null !== (SF = this.sideLabels.get(CF)) && void 0 !== SF ? SF : 0) && (CF.style.transform = 0 === uF ? "" : `translateX(-50%) translateX(${uF}px)`, 0 === uF ? this.sideLabels.delete(CF) : this.sideLabels.set(CF, uF)), uF
      }
      extentOf(FF) {
        let WF = this.em,
          SF = !1;
        for (let CF = 0; CF < FF.children.length; CF++) {
          const AF = FF.children[CF],
            uF = AF.classList.contains("DirectionArrowLabel");
          SF ||= uF, (uF || AF.classList.contains("DirectionArrowDistance")) && (WF = Math.max(WF, this.halfWidthOf(AF)))
        }
        return {
          halfWidth: WF,
          labelled: SF
        }
      }
      halfWidthOf(FF) {
        let WF = this.halfWidths.get(FF);
        return void 0 === WF && (WF = FF.offsetWidth / 2, this.halfWidths.set(FF, WF), this.sizes.observe(FF), this.labels.add(FF)), WF
      }
      forgetGoneLabels() {
        for (const FF of this.labels) FF.isConnected || (this.sizes.unobserve(FF), this.halfWidths.delete(FF), this.labels.delete(FF))
      }
      anchorOf(FF) {
        const WF = FF.style.translate,
          SF = this.anchors.get(FF);
        if (SF && SF.translate === WF && SF.innerWidth === this.innerWidth && SF.innerHeight === this.innerHeight) return SF;
        const CF = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(WF);
        if (!CF) return null;
        const AF = {
          translate: WF,
          x: parseFloat(CF[1]) / 100 * this.innerWidth,
          y: parseFloat(CF[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(FF, AF), AF
      }
    }
    const Mt = "Baf2ArrowText";

    function cT(FF, WF) {
      const SF = FF.rows.find((FF => FF.current));
      return MF(FF.tutorial) && null !== SF && void 0 !== SF && SF.item && cu(SF) && xW(SF.item).includes(WF) ? SF.item : null
    }
    const Gt = new class {
      constructor(FF) {
        this.select = FF, this.picks = new Map
      }
      open(FF, WF, SF) {
        const CF = cT(WF, FF);
        null !== CF && this.lW(FF, CF, SF)
      }
      follow(FF, WF) {
        if (bW())
          for (const [SF, {
              item: CF,
              had: AF
            }] of this.picks) {
            const uF = cT(FF, SF);
            uF !== CF && (null !== uF && WF(CF) > AF ? this.lW(SF, uF, WF) : this.picks.delete(SF))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      lW(FF, WF, SF) {
        this.picks.set(FF, {
          item: WF,
          had: SF(WF)
        }), this.select(FF, WF)
      }
    }(LA.r);

    function zT(FF) {
      return WF => {
        let SF = 0;
        for (const CF of FF.getInventoryItems())(null === CF || void 0 === CF ? void 0 : CF.name) === WF && (SF += null === CF.amount ? 1 : Math.max(CF.amount, 0));
        return SF
      }
    }

    function It(FF, WF, SF, CF) {
      FF.getClientOption(WF, "canCraft") && "inventory" !== iu.b.get("openInGameMenuName") && (Gt.open(SF, CF.get(), zT(FF)), DA.j.Uu("toggleMenu", `inventory|${SF}`))
    }
    let ft = null,
      yT = !1;

    function st(FF) {
      const WF = eu();
      FF === ft && WF === yT || (ft = FF, yT = WF, (0, LA.u)(function(FF, WF) {
        const SF = new Map;
        for (let CF = FF + 1; CF <= AF.length; CF++) {
          const AF = ch(CF, FF, WF);
          if (AF)
            for (const WF of tW(CF).unlocks) SF.set(WF, {
              ...AF,
              stepsAway: CF - FF
            })
        }
        return SF
      }(FF, WF)))
    }

    function nt() {
      return (0, LA.B)(Mu(Object.keys(OF), Ou)), () => {
        (0, LA.B)([])
      }
    }
    const Ht = "buildAFactory2Game:",
      Kt = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      wt = {
        on: `${Ht}tutorialButtonOn`,
        hud: `${Ht}tutorialButtonHud`,
        off: `${Ht}tutorialButtonOff`
      },
      Xt = {
        on: `${Ht}tutorialPickedOn`,
        hud: `${Ht}tutorialPickedHud`,
        off: `${Ht}tutorialPickedOff`
      };

    function Ut(FF, WF, SF) {
      let CF = null,
        AF = () => {};
      const uF = uF => {
        var hF;
        let {
          tutorial: bW,
          tutorialKnown: dF
        } = uF;
        (null === (hF = CF) || void 0 === hF ? void 0 : hF.tutorial) === bW && CF.tutorialKnown === dF || (CF = {
          tutorial: bW,
          tutorialKnown: dF
        }, AF = (0, PA.w)({
          id: "baf2Tutorial",
          order: -1,
          labelKey: wt[bW],
          icon: {
            kind: "icon",
            name: Kt[bW]
          },
          iconOnly: !0,
          disabled: !dF,
          className: "Baf2TutorialButton",
          onClick: () => {
            var CF;
            (CF => {
              const AF = WF.setTutorial(CF);
              FF.send(`baf2tutorial ${CF} ${AF}`), SF.show({
                baf2ToastText: [(0, cW.Xd)({
                  translationKey: Xt[CF]
                }, cW.D.whiteUiText)],
                baf2ToastMs: 3e3,
                baf2ToastStyle: "baf2ToastInfo"
              })
            })((CF = WF.get().tutorial, YF[(YF.indexOf(CF) + 1) % YF.length]))
          }
        }))
      };
      uF(WF.get());
      const hF = DA.j.subscribe(mu, uF);
      return () => {
        DA.j.unsubscribe(hF), AF()
      }
    }

    function Bt(FF, WF, SF) {
      var CF, AF;
      const uF = FF.getTargetedBlock();
      if (!uF || ! function(FF, WF, SF) {
          if ("Chest" !== WF) return !1;
          const CF = FF.split("|")[0];
          if (!WS(CF) || 0 === LW[CF].outputSlots.length) return !1;
          const AF = ug(FF);
          return SF[0] === AF[0] && SF[1] === AF[1] && SF[2] === AF[2]
        }(SF, null === (CF = FF.pbF(WF)) || void 0 === CF ? void 0 : CF.name, uF.normal)) return !1;
      const [hF, bW, dF] = uF.Zu, PF = FF.getBlockId(hF, bW, dF);
      return 0 === PF || !0 === (null === (AF = oF.i[PF]) || void 0 === AF ? void 0 : AF.canBePlacedOver)
    }
    var jT = SF(35247);
    const vT = new Set(bC.c);
    class Jt {
      constructor(FF) {
        this.toasts = FF, this.lastAt = -1 / 0
      }
      onAltAction(FF, WF, SF) {
        const CF = FF.getTargetedBlock();
        if (!CF || function(FF) {
            const WF = FF.split("|")[0];
            return WS(WF) || null !== rA(WF) || LF(WF) || bC.c.includes(WF)
          }(SF) && !vT.has(SF.split("|")[0])) return;
        const AF = FF.pbF(WF);
        if (!AF || !vT.has(AF.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const uF = AF.typeObj.id,
          [hF, bW, dF] = CF.Zu,
          PF = FF.getBlockId(hF, bW, dF),
          RF = oF.i[PF];
        (0 === PF || null !== RF && void 0 !== RF && RF.iC || null !== RF && void 0 !== RF && RF.canBePlacedOver) && FF.isSolidToPlayerBlockId(uF) && FF.canModifyBlockAt(hF, bW, dF) && FF.tdF(hF, bW, dF, uF) && !FF.tdF(hF, bW, dF, uF, WF) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, cW.Xd)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, cW.D.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class pt {
      constructor(FF) {
        this.show = FF, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(FF, WF, SF) {
        var CF;
        if (!WF) return this.started = null, void this.gatedThisHold.clear();
        if (!FF) return void(this.started = null);
        const AF = `${FF.x},${FF.y},${FF.z},${FF.yS}`;
        if (AF === this.started) return;
        this.started = AF;
        const uF = xA(FF.y) ? sg(FF.block, FF.yS, FF.level) : null;
        if (null === uF || this.gatedThisHold.has(AF)) return;
        this.gatedThisHold.add(AF);
        const hF = FF.block.split("|")[0];
        SF - (null !== (CF = this.hintedAt.get(hF)) && void 0 !== CF ? CF : -1 / 0) < 5e3 || (this.hintedAt.set(hF, SF), this.show({
          baf2ToastText: ng(uF, FF.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var lt = SF(33);

    function FT(FF, WF) {
      const SF = [...FF.baf2CoreBankPaused];
      for (const [AF] of FF.baf2CoreBanked) SF.push(AF);
      for (const hF of AF) {
        for (const {
            item: FF
          }
          of hF.cost) SF.push(FF);
        for (const FF of hF.newDeposits) SF.push(FF.block);
        for (const FF of hF.unlocks) SF.push(FF, ZF(FF));
        hF.reward && SF.push(hF.reward);
        for (const {
            item: FF
          }
          of null !== (CF = null === (uF = hF.charge) || void 0 === uF ? void 0 : uF.items) && void 0 !== CF ? CF : []) {
          var CF, uF;
          SF.push(FF)
        }
      }
      return {
        message: FF,
        itemNames: WF([...new Set(SF)])
      }
    }
    const WT = "baf2MultiblockGuide";
    const ST = new Map;
    const CT = function(FF, WF, SF, AF) {
      let {
        localPlayerId: uF
      } = AF;
      const hF = new ub,
        bW = new fe,
        PF = new pe,
        RF = new vE(PF),
        iW = (FF, WF) => {
          WF ? RF.observe(FF) : RF.unobserve(FF)
        },
        eF = new jE,
        EF = new le(iW),
        QF = FF => EF.covers(FF),
        rW = new TE;
      let gW;
      const tW = new Oh((FF => {
          gW.sendCommand(FF)
        })),
        TF = () => {
          tW.send("baf2questbook")
        },
        aW = FF => function(FF, WF, SF) {
          const CF = {};
          for (const AF of SF) {
            let SF = ST.get(AF);
            void 0 === SF && (SF = FF.getItemStat(WF, AF, "displayName"), ST.set(AF, SF)), CF[AF] = SF
          }
          return CF
        }(gW, uF, FF),
        kW = new ZA(TF),
        qW = new OE((() => iu.b.get("loadingOverlayVisible"))),
        VF = new ME,
        NF = new Jt(qW),
        DF = new pt((FF => {
          qW.show(FF, FF.baf2ToastMs)
        })),
        mW = new HE(iW),
        OF = new Qg(mW),
        xW = new Eh,
        ZF = new Ig,
        YF = new wh,
        MF = new vQ({
          read: () => !1 !== lt.h.getItem(WT),
          write: FF => {
            lt.h.setItem(WT, FF)
          }
        }),
        zW = new VQ(MF),
        IF = new LQ(MF),
        fF = new BQ(MF, (FF => function(FF, WF) {
          const SF = Hb(WF.w, WF.h, WF.d),
            CF = new Uint8Array(SF);
          for (let AF = 0; AF < SF; AF++) {
            const SF = tr(FF, KS(WF, BS(WF, AF)));
            CF[AF] = null === SF ? 0 : fb(SF)
          }
          return CF
        }(gW, FF)), fQ(tW)),
        yW = new jr(MF, fQ(tW)),
        sF = new XQ,
        nF = (FF, WF) => {
          let [SF, CF, AF] = FF;
          sF.answered(WF) || qW.show({
            baf2ToastText: [(0, cW.Xd)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: SF,
                h: CF,
                d: AF
              }
            }, cW.D.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      fF.onSizeNotTaken(nF), yW.onSizeNotTaken(nF);
      const wF = new lQ,
        XF = new Yr(MF),
        UF = new cg,
        jW = new Xr(UF),
        vW = new Cg,
        JF = new rt,
        lF = new Lg(JF),
        FW = new zt(JF),
        WW = JF.lookSource(),
        SW = new pg({
          handles: FF => WW.handles(FF) || FF === GF,
          line: (FF, WF) => FF === GF ? function(FF, WF, SF) {
            var CF;
            const AF = KF(null === (CF = WF.at(SF)) || void 0 === CF ? void 0 : CF.item);
            return null === AF ? {
              key: `${jt}lookFarmEmpty`
            } : {
              key: FF.blockIdToBlockName(FF.getBlockId(SF[0], SF[1], SF[2])).endsWith("|Running") ? `${jt}lookFarmRunning` : `${jt}lookFarmWaiting`,
              keys: {
                mob: HF(AF)
              }
            }
          }(gW, mW, WF) : WW.line(FF, WF),
          version: () => WW.version() + mW.version()
        }, (FF => OQ(MF.all(), FF, (FF => tr(gW, FF)))), (() => kW.get().tier)),
        CW = new gg,
        uW = new et,
        hW = new Tt,
        bS = Tt.blade(),
        dW = new mT,
        PW = new zQ,
        RW = new Yt,
        iS = new Vt,
        eW = new qT;
      let EW = -1 / 0,
        QW = 0,
        rS = -1 / 0,
        gS = -1 / 0;
      const tS = () => {
          tW.send("baf2islandsclose"), gS = Date.now()
        },
        TW = [];

      function aS(FF) {
        var WF, SF, CF, AF, uF, hF, dF;
        "core" === (null === (WF = bW.get()) || void 0 === WF ? void 0 : WF.kind) && "core" !== (null === FF || void 0 === FF ? void 0 : FF.kind) && tW.send("baf2coreclose"), "power" === (null === (SF = bW.get()) || void 0 === SF ? void 0 : SF.kind) && "power" !== (null === FF || void 0 === FF ? void 0 : FF.kind) && tW.send("baf2powerclose"), "water" === (null === (CF = bW.get()) || void 0 === CF ? void 0 : CF.kind) && "water" !== (null === FF || void 0 === FF ? void 0 : FF.kind) && tW.send(pF.w), "terminal" === (null === (AF = bW.get()) || void 0 === AF ? void 0 : AF.kind) && "terminal" !== (null === FF || void 0 === FF ? void 0 : FF.kind) && tW.send("baf2terminalclose"), "islands" === (null === (uF = bW.get()) || void 0 === uF ? void 0 : uF.kind) && "islands" !== (null === FF || void 0 === FF ? void 0 : FF.kind) && tS();
        const PF = JF.getStatus();
        "collider" === (null === (hF = bW.get()) || void 0 === hF ? void 0 : hF.kind) && "collider" !== (null === FF || void 0 === FF ? void 0 : FF.kind) && PF && tW.send(Ld(PF, "close"));
        const RF = FF => "reactor" === FF || "battery" === FF;
        if (RF(null === (dF = bW.get()) || void 0 === dF ? void 0 : dF.kind) && !RF(null === FF || void 0 === FF ? void 0 : FF.kind)) {
          var iW, eF, EF;
          const FF = "reactor" === (null === (iW = bW.get()) || void 0 === iW ? void 0 : iW.kind) ? null === (eF = fF.get()) || void 0 === eF ? void 0 : eF.status.baf2RxAt : null === (EF = yW.get()) || void 0 === EF ? void 0 : EF.status.baf2BatAt;
          FF && tW.send(AW(FF, "close"))
        }
        "quests" === (null === FF || void 0 === FF ? void 0 : FF.kind) && TF(), bW.set(FF), null === FF && VF.release()
      }

      function qS() {
        (0, RA.d)(), aS(null)
      }
      let VW = new Set,
        NW = !1;
      const DW = {
        onCreate: FF => {
          gW = FF, gW.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const WF of kS) {
            const FF = LW[WF].inputSlots ? qd(hF) : Tb(WF, hF, xW, tW);
            TW.push((0, dA.f)(WF, FF))
          }
          TW.push((0, RA.r)((0, CF.createElement)(CF.Fragment, null, (0, CF.createElement)(SE, {
            controller: EF
          }), (0, CF.createElement)(XE, {
            store: mW
          }), (0, CF.createElement)(Ft, {
            store: SW
          }), (0, CF.createElement)(LE, {
            store: kW
          }), (0, CF.createElement)(oE, {
            store: qW
          }), (0, CF.createElement)(cQ, {
            store: VF
          }), (0, CF.createElement)(fE, {
            store: PW
          }), (0, CF.createElement)(pQ, {
            store: wF
          }), (0, CF.createElement)(Gr, {
            store: UF
          })), {
            content: (0, CF.createElement)(yE, {
              commands: tW,
              store: bW,
              power: xW,
              water: YF,
              reactor: fF,
              battery: yW,
              collider: JF,
              terminal: ZF,
              quests: kW,
              close: RA.e,
              AC: () => {
                VF.dropHeld(), (0, RA.d)()
              },
              askIslands: () => {
                gS = -1 / 0, EW = Date.now(), QW = tW.send(BF)
              },
              openSocial: () => {
                (0, RA.d)(), iu.b.set({
                  openEverythingMenuName: CS.n.SOCIAL
                })
              },
              showCore: FF => {
                aS({
                  kind: "core",
                  core: FF
                }), tW.send("baf2corereopen")
              }
            }),
            onClose: () => {
              aS(null)
            }
          })), TW.push((0, PA.w)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              aS({
                kind: "quests"
              }), (0, RA.n)()
            }
          })), TW.push(Ut(tW, kW, qW)), NW = !1, TW.push(Eu((() => {
            null !== ft && st(ft)
          }))), TW.push(nt()), TW.push(function() {
            const FF = DA.j.subscribe(mu, HA),
              WF = () => {
                if (nA) {
                  const FF = nA;
                  nA = null, (0, LA.x)(FF)
                }
              },
              SF = DA.j.subscribe("toggleMenu", (FF => {
                "inventory" === (null === FF || void 0 === FF ? void 0 : FF.split("|")[0]) && WF()
              })),
              CF = DA.j.subscribe("appManagerUpdated|openInGameMenuName", (FF => {
                "inventory" === FF && WF()
              }));
            return () => {
              DA.j.unsubscribe(FF), DA.j.unsubscribe(SF), DA.j.unsubscribe(CF)
            }
          }()), TW.push(function(FF) {
            const WF = zT(FF),
              SF = DA.j.subscribe(mu, (FF => {
                Gt.follow(FF, WF)
              }));
            return () => {
              DA.j.unsubscribe(SF), Gt.clear()
            }
          }(gW)), TW.push(function() {
            const FF = document.documentElement,
              WF = (0, kQ.b)(".InvenBodyRight", [], (() => {
                const WF = document.querySelector(".InvenBodyRight");
                WF && FF.style.setProperty("--baf2-backpack-width", `${WF.offsetWidth}px`)
              }));
            return () => {
              WF(), FF.style.removeProperty("--baf2-backpack-width")
            }
          }()), TW.push(function() {
            const FF = document.documentElement;
            return FF.classList.add(Mt), () => {
              FF.classList.remove(Mt)
            }
          }()), TW.push((() => {
            RF.dispose(), PF.dispose()
          })), rW.start(gW), TW.push((() => {
            rW.dispose(), dW.dispose(), OF.dispose()
          }))
        },
        onClose: () => {
          (0, LA.x)([]), nA = null, sA = new Set, ft = null, (0, LA.u)(new Map), ST.clear();
          for (const FF of TW) FF();
          kW.dispose(), SW.dispose(), qW.dispose(), VF.dispose(), CW.dispose(), uW.dispose(gW), zW.dispose(gW), IF.dispose(gW), XF.dispose(gW), jW.dispose(gW), UF.dispose(), vW.dispose(), MF.dispose(), fF.dispose(), yW.dispose(), wF.dispose(), hW.dispose(), bS.dispose(), PW.dispose(), lF.dispose(gW), FW.dispose(gW), JF.dispose(), RW.dispose(), tW.clear()
        },
        onAfterRender: (FF, WF) => {
          var SF, CF, AF;
          try {
            rW.onAfterRender(WF)
          } catch (PF) {
            console.error("Error drawing BAF2 belt items", PF)
          }
          try {
            dW.onAfterRender(gW, uF)
          } catch (PF) {
            console.error("Error drawing BAF2 jet flames", PF)
          }
          NW || (NW = !0, tW.send("baf2clientready"));
          const hF = gW.getPositionView(uF);
          EF.onAfterRender(WF, hF, eF), mW.onAfterRender(WF, hF, eF, QF), RF.run(eF), CW.onAfterRender(gW, hF), uW.onAfterRender(gW, hF), OF.onAfterRender(gW, hF), zW.onAfterRender(gW, hF), IF.onAfterRender(gW, uF, hF), XF.onAfterRender(gW, uF, hF), jW.onAfterRender(gW, uF), vW.onAfterRender(gW, hF), kW.onPlayerY(hF[1]), lF.onAfterRender(gW), FW.onAfterRender(gW, uF, hF);
          const dF = gW.getTargetedBlock();
          SW.onAfterRender(gW, uF, null !== (SF = null === dF || void 0 === dF ? void 0 : dF.OAF) && void 0 !== SF ? SF : 0, null !== (CF = null === dF || void 0 === dF ? void 0 : dF.position) && void 0 !== CF ? CF : null), RW.onAfterRender(gW, WF), DF.onMining(function(FF, WF) {
            var SF, CF;
            const AF = FF.getMiningBlock();
            if (!AF) return null;
            const uF = (0, oF.f)(FF.getBlockId(AF[0], AF[1], AF[2])),
              hF = null !== (SF = null === (CF = FF.pbF(WF)) || void 0 === CF ? void 0 : CF.name) && void 0 !== SF ? SF : null,
              bW = FF.getItemStat(WF, uF.split("|")[0], "harvestLevel");
            return {
              block: uF,
              x: AF[0],
              y: AF[1],
              z: AF[2],
              yS: hF,
              level: bW
            }
          }(gW, uF), gW.isMining(), performance.now()), "dropMap" === (null === (AF = bW.get()) || void 0 === AF ? void 0 : AF.kind) && xA(hF[1]) && qS()
        },
        onPlayerChangeBlock: (FF, WF, SF, CF, AF, hF) => {
          FF === uF && function(FF, WF, SF, CF, AF, uF, hF) {
            const bW = kT(uF, hF, FF.isPlayerCrouching(WF));
            if (null === bW) return;
            if (FF.rSF(SF, CF, AF, bW), !FF.getClientOption(WF, "canPickUpItems")) return;
            const dF = pW[bW.split("|")[0]];
            var PF, RF, iW;
            void 0 !== dF && (PF = FF.getInventoryItems(), RF = dF, iW = JE.h.maxItemStackSize, FF.getInventoryFreeSlotCount(WF) > 0 || PF.some((FF => null !== FF && FF.name === RF && null !== FF.amount && FF.amount < iW))) && FF.playSound(WF, (0, jT.e)("pickUp"), .5, 1)
          }(gW, FF, WF, SF, CF, AF, hF)
        },
        onPlayerAltAction: (FF, WF, SF, CF, AF) => {
          var hF, bW;
          if (!gW.getClientOption(uF, "canPickUpItems")) return;
          const dF = null !== (hF = null === (bW = gW.pbF(uF)) || void 0 === bW ? void 0 : bW.name) && void 0 !== hF ? hF : null,
            PF = function(FF, WF) {
              const SF = FF.split("|")[0];
              return LF(SF) && WF !== lC && "Sky Pack" !== WF ? SF : null
            }(AF, dF);
          if (null !== PF) return void(iS.tap(PF, performance.now()) && It(gW, uF, PF, kW));
          if (!MC(dF)) return;
          const RF = eW.isNewPress(performance.now()),
            iW = function(FF, WF, SF) {
              return !MC(WF) || SF ? null : HC(FF)
            }(AF, dF, gW.isPlayerCrouching(uF));
          null !== iW && RF && gW.rSF(WF, SF, CF, iW)
        },
        onPlayerAttemptAltAction: (FF, WF, SF, CF, AF) => {
          if (function(FF, WF, SF, CF, AF) {
              "Workbench" === CF.split("|")[0] && FF.getClientOption(SF, "canCraft") && (Gt.open("Workbench", AF.get(), zT(FF)), WF.send("baf2station Workbench"))
            }(gW, tW, uF, AF, kW), Bt(gW, uF, AF)) return "preventAction";
          NF.onAltAction(gW, uF, AF)
        },
        onReceivedMessageFromServer: (FF, WF) => {
          if ("baf2MachineStatus" === FF) {
            var SF, CF, AF, PF, RF, iW, eF, QF, TF, NF, DF, LF, OF, oF, cW, GF;
            const FF = WF,
              uF = FF.baf2MachineTaught;
            hF.set(FF.baf2MachinePos, {
              status: FF.baf2MachineStatus,
              power: null !== (SF = FF.baf2MachinePower) && void 0 !== SF ? SF : null,
              opLeftMs: null !== (CF = FF.baf2MachineOpLeftMs) && void 0 !== CF ? CF : null,
              dug: FF.baf2MachineYield ? {
                item: FF.baf2MachineYield,
                name: aW([FF.baf2MachineYield])[FF.baf2MachineYield]
              } : null,
              powerCap: null !== (AF = FF.baf2MachinePowerCap) && void 0 !== AF ? AF : null,
              powerRates: null !== (PF = FF.baf2MachinePowerRates) && void 0 !== PF ? PF : null,
              coupled: !0 === FF.baf2MachineCoupled,
              couplerLevel: null !== (RF = FF.baf2MachineCoupler) && void 0 !== RF ? RF : 1,
              taught: uF,
              taughtName: uF ? aW([uF])[uF] : null,
              tier: null !== (iW = FF.baf2MachineTier) && void 0 !== iW ? iW : null,
              input: null !== (eF = FF.baf2MachineInput) && void 0 !== eF ? eF : null,
              inertCoupler: null !== (QF = FF.baf2MachineInertCoupler) && void 0 !== QF ? QF : null,
              inputShort: null !== (TF = FF.baf2MachineInputShort) && void 0 !== TF ? TF : null,
              field: null !== (NF = FF.baf2MachineField) && void 0 !== NF ? NF : null,
              noSeeds: !0 === FF.baf2MachineNoSeeds,
              fuelFed: !0 === FF.baf2MachineFuelFed,
              fuelFeeds: !0 === FF.baf2MachineFuelFeeds,
              coreFull: !0 === FF.baf2MachineCoreFull,
              waterUnpowered: !0 === FF.baf2MachineWaterUnpowered,
              powerShort: !0 === FF.baf2MachinePowerShort,
              powerWait: !0 === FF.baf2MachinePowerWait,
              reactorPowered: !0 === FF.baf2MachineReactorPowered,
              fuelLeftMs: null !== (DF = FF.baf2MachineFuelLeftMs) && void 0 !== DF ? DF : null,
              burning: null !== (LF = FF.baf2MachineBurning) && void 0 !== LF ? LF : null,
              fuelKeep: null !== (OF = FF.baf2MachineFuelKeep) && void 0 !== OF ? OF : null,
              water: null !== (oF = FF.baf2MachineWater) && void 0 !== oF ? oF : null,
              farm: null !== (cW = FF.baf2MachineFarm) && void 0 !== cW ? cW : null,
              cryo: null !== (GF = FF.baf2MachineCryo) && void 0 !== GF ? GF : null
            })
          } else if ("baf2StationOpen" === FF) {
            const FF = WF.baf2Station;
            iS.consumeServerOpen(FF, performance.now()) || It(gW, uF, FF, kW)
          } else if ("baf2Power" === FF) {
            const FF = WF;
            xW.set(FF), FF.baf2PowerOpen && (aS({
              kind: "power"
            }), (0, RA.n)())
          } else if (FF === pF.D) {
            const FF = WF;
            YF.set(FF), FF.baf2WaterOpen && (aS({
              kind: "water"
            }), (0, RA.n)())
          } else if ("baf2RxPlans" === FF) {
            var zW, IF, nF;
            const FF = WF;
            MF.KD(FF);
            const SF = new Set(FF.baf2RxPlanList.map((FF => {
              let [WF, SF, CF] = FF;
              return `${WF},${SF},${CF}`
            })));
            wF.retain(SF);
            const CF = null === (zW = bW.get()) || void 0 === zW ? void 0 : zW.kind,
              AF = "reactor" === CF ? null === (IF = fF.get()) || void 0 === IF ? void 0 : IF.status.baf2RxAt : "battery" === CF ? null === (nF = yW.get()) || void 0 === nF ? void 0 : nF.status.baf2BatAt : void 0;
            AF && VW.has(AF.join(",")) && !SF.has(AF.join(",")) && qS(), VW = SF
          } else if ("baf2RxStatus" === FF) {
            const FF = WF;
            fF.set(FF), FF.baf2RxOpen && (aS({
              kind: "reactor"
            }), (0, RA.n)())
          } else if ("baf2BatStatus" === FF) {
            const FF = WF;
            yW.set(FF), FF.baf2BatOpen && (aS({
              kind: "battery"
            }), (0, RA.n)())
          } else if ("baf2RxAlarm" === FF) wF.KD(WF);
          else if ("baf2Bomb" === FF) UF.KD(WF, gW.getPositionView(uF));
          else if ("baf2Fallout" === FF) vW.KD(WF);
          else if ("baf2ColBeams" === FF) JF.onBeams(WF);
          else if ("baf2ColStatus" === FF) {
            const FF = WF;
            var HF, KF;
            if (JF.onStatus(FF), FF.baf2ColOpen) JF.onOpen(null !== (HF = null === (KF = gW.pbF(uF)) || void 0 === KF ? void 0 : KF.name) && void 0 !== HF ? HF : null), aS({
              kind: "collider"
            }), (0, RA.n)()
          } else if ("baf2Terminal" === FF) {
            const FF = WF;
            var XF;
            if (ZF.apply(FF)) FF.baf2TermReset && (aS({
              kind: "terminal"
            }), (0, RA.n)());
            else "terminal" === (null === (XF = bW.get()) || void 0 === XF ? void 0 : XF.kind) && (bW.set(null), (0, RA.d)())
          } else if ("baf2Core" === FF) {
            var jW;
            const FF = WF;
            if (dF(!0 === FF.baf2CoreNuclear), function(FF, WF) {
                return "core" === (null === FF || void 0 === FF ? void 0 : FF.kind) && WF.baf2CoreTier > FF.core.message.baf2CoreTier
              }(bW.get(), FF)) return void(0, RA.d)();
            if (FF.baf2CoreRefresh && "core" !== (null === (jW = bW.get()) || void 0 === jW ? void 0 : jW.kind)) return;
            aS({
              kind: "core",
              core: FT(FF, aW)
            }), FF.baf2CoreRefresh || (0, RA.n)()
          } else if ("baf2WrenchUndo" === FF) {
            const {
              baf2WrenchPos: FF,
              baf2WrenchBlock: SF
            } = WF;
            gW.rSF(FF[0], FF[1], FF[2], SF)
          } else if ("baf2Toast" === FF) {
            const FF = WF;
            sF.heard(performance.now(), FF.baf2ToastMs), qW.show(FF)
          } else if ("baf2Area" === FF) VF.arrive(WF, null !== bW.get());
          else if ("baf2Quest" === FF) {
            const FF = WF;
            dF(!0 === FF.baf2QuestNuclear), kW.set(FF, function(FF, WF) {
              var SF, CF, AF, uF, hF;
              const bW = [];
              for (const [, , RF, , , , , , iW, eF] of FF.baf2QuestSteps) null !== RF && bW.push(RF), bW.push(...null !== iW && void 0 !== iW ? iW : [], ...null !== eF && void 0 !== eF ? eF : []);
              FF.baf2QuestReward && bW.push(FF.baf2QuestReward);
              const dF = null === (SF = FF.baf2QuestSide) || void 0 === SF ? void 0 : SF[2][2];
              dF && bW.push(dF), bW.push(...null !== (CF = null === (AF = FF.baf2QuestSide) || void 0 === AF ? void 0 : AF[2][8]) && void 0 !== CF ? CF : [], ...null !== (uF = null === (hF = FF.baf2QuestSide) || void 0 === hF ? void 0 : hF[2][9]) && void 0 !== uF ? uF : []);
              for (const [RF] of null !== (PF = FF.baf2QuestAlso) && void 0 !== PF ? PF : []) {
                var PF;
                bW.push(RF)
              }
              return WF(bW)
            }(FF, aW)), st(FF.baf2QuestTier)
          } else if ("baf2Route" === FF) ! function(FF, WF) {
            let {
              baf2RouteCells: SF,
              baf2RouteInto: CF
            } = WF;
            0 !== SF.length && CF ? FF.setRouteChevrons({
              cells: SF.map(((FF, WF) => {
                const [AF, , uF] = function(FF, WF, SF) {
                  const CF = SF + 1 < FF.length ? FF[SF + 1] : WF;
                  return [CF[0] - FF[SF][0], 0, CF[2] - FF[SF][2]]
                }(SF, CF, WF);
                return {
                  pos: FF,
                  way: [AF, uF]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : FF.setRouteChevrons(null)
          }(gW, WF);
          else if ("baf2QuestBook" === FF) kW.setBook(WF);
          else if ("baf2Stalls" === FF) EF.set(WF.baf2StallCells);
          else if (FF === bC.l) rW.onMoves(WF);
          else if (FF === bC.i) rW.onLines(WF);
          else if ("baf2Labels" === FF) mW.KD(WF);
          else if ("baf2DropMap" === FF) aS({
            kind: "dropMap",
            dropMap: WF
          }), (0, RA.n)();
          else if ("baf2Islands" === FF) {
            var lF, FW;
            const FF = WF;
            if (tW.syncIslandEdits(FF.baf2IslandsAnswered), !FF.baf2IslandsOpen && "islands" !== (null === (lF = bW.get()) || void 0 === lF ? void 0 : lF.kind)) return;
            if (FF.baf2IslandsOpen) {
              var WW, SW;
              const WF = iu.b.get("openEverythingMenuName"),
                SF = tW.sent() >= QW,
                CF = "other" !== (TW = {
                  askedAtMs: EW,
                  askSent: SF,
                  reaskedAtMs: rS,
                  nowMs: Date.now(),
                  panel: null !== (WW = null === (SW = bW.get()) || void 0 === SW ? void 0 : SW.kind) && void 0 !== WW ? WW : null,
                  inGameMenu: iu.b.get("openInGameMenuName"),
                  everythingMenu: null === WF ? null : WF === CS.n.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== FF.baf2IslandsFocusInvite
                }).everythingMenu && (!!TW.focusInvite || "islands" === TW.panel && "clientGame" === TW.inGameMenu || !(TW.nowMs - TW.reaskedAtMs < qR) && (TW.askSent && TW.nowMs - TW.askedAtMs < qR ? "core" === TW.panel && "clientGame" === TW.inGameMenu && null === TW.everythingMenu : "shop" === TW.everythingMenu || null === TW.inGameMenu));
              if (SF && (EW = -1 / 0), rS = -1 / 0, !CF) return void tS()
            }
            const SF = (AW = FF.baf2IslandsOpen, uW = "islands" === (null === (FW = bW.get()) || void 0 === FW ? void 0 : FW.kind), RW = gS, eW = Date.now(), AW && !uW && eW - RW < qR);
            aS({
              kind: "islands",
              islands: FF,
              arrivedAtMs: Date.now(),
              backToCore: VP(bW.get())
            }), SF && (gS = -1 / 0, rS = Date.now(), tW.send(BF)), FF.baf2IslandsOpen && ("clientGame" !== iu.b.get("openInGameMenuName") && (0, eA.f)(), (0, RA.n)())
          } else if ("baf2CoopTransfer" === FF) {
            var CW;
            const FF = WF;
            FF.baf2TransferOn ? (aS({
              kind: "transfer",
              transfer: FF,
              arrivedAtMs: Date.now()
            }), (0, RA.n)()) : "transfer" === (null === (CW = bW.get()) || void 0 === CW ? void 0 : CW.kind) && (0, RA.d)()
          } else "baf2IslandLeft" === FF ? (VF.dropHeld(), null !== bW.get() && qS(), "inventory" === iu.b.get("openInGameMenuName") && (0, eA.f)()) : "baf2Arc" === FF ? hW.KD(gW, WF) : "baf2Blade" === FF ? bS.onBlade(gW, WF) : "baf2JetFlame" === FF ? dW.KD(gW, WF) : "baf2GearPower" === FF && PW.KD(WF);
          var AW, uW, RW, eW, TW
        }
      };
      return DW
    }
  },
  36934: (FF, WF, SF) => {
    function CF(FF, WF, SF) {
      const CF = new Set,
        AF = new ResizeObserver(SF),
        uF = () => {
          const WF = new Set(document.querySelectorAll(FF));
          let uF = !1;
          for (const FF of CF) WF.has(FF) || (AF.unobserve(FF), CF.delete(FF), uF = !0);
          for (const FF of WF) CF.has(FF) || (AF.observe(FF), hF.observe(FF, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), CF.add(FF));
          uF && SF()
        },
        hF = new MutationObserver((WF => {
          WF.some((FF => "attributes" === FF.type)) && SF(), WF.some((WF => function(FF, WF, SF) {
            if ("childList" !== FF.type) return !1;
            for (const CF of FF.addedNodes)
              if (CF instanceof Element && (CF.matches(WF) || CF.querySelector(WF))) return !0;
            for (const CF of FF.removedNodes)
              if (CF instanceof Element)
                for (const FF of SF)
                  if (CF.contains(FF)) return !0;
            return !1
          }(WF, FF, CF))) && uF()
        }));
      hF.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const bW of WF) AF.observe(bW);
      return window.addEventListener("resize", SF), uF(), SF(), () => {
        AF.disconnect(), hF.disconnect(), window.removeEventListener("resize", SF)
      }
    }
    SF.d(WF, {
      b: () => CF
    })
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);