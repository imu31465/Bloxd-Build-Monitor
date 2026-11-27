export const id = 274;
export const ids = [274];
export const modules = {
  39689: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => PW
    });
    var mW = OW(39696);
    const EW = [0, 0, 0];
    class NW {
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : EW;
        this.pool = WW, this.origin = iW, this.count = 0, this.free = []
      }
      take() {
        var WW;
        const iW = null !== (WW = this.free.pop()) && void 0 !== WW ? WW : this.count++;
        return iW >= this.pool.aZ && this.pool.grow(Math.max(2 * this.pool.aZ, iW + 1)), this.hide(iW), iW
      }
      release(WW) {
        this.hide(WW), this.free.push(WW)
      }
      write(WW, iW, OW, EW) {
        const {
          records: NW
        } = this.pool, {
          origin: PW
        } = this, LW = WW * mW.b;
        NW[LW] = iW - PW[0], NW[LW + 1] = OW - PW[1], NW[LW + 2] = EW - PW[2], NW[LW + mW.d] = 0, this.pool.markDirty(WW)
      }
      hide(WW) {
        this.pool.records[WW * mW.b + mW.d] = 1, this.pool.markDirty(WW)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class PW {
      constructor(WW, iW, OW) {
        this.api = WW, this.model = iW, this.initialCapacity = OW, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(WW) {
        let iW = this.kinds.get(WW);
        if (void 0 === iW) {
          const OW = this.api.createInstancePool({
            ...this.model,
            item: WW
          }, this.initialCapacity);
          null === OW || void 0 === OW || OW.setOrigin(this.origin[0], this.origin[1], this.origin[2]), iW = OW && new NW(OW, this.origin), this.kinds.set(WW, iW)
        }
        return iW
      }
      follow(WW) {
        const {
          origin: iW
        } = this;
        if (Math.abs(WW[0] - iW[0]) <= 512 && Math.abs(WW[1] - iW[1]) <= 512 && Math.abs(WW[2] - iW[2]) <= 512) return !1;
        iW[0] = Math.floor(WW[0]), iW[1] = Math.floor(WW[1]), iW[2] = Math.floor(WW[2]);
        for (const OW of this.kinds.values()) null === OW || void 0 === OW || OW.pool.setOrigin(iW[0], iW[1], iW[2]);
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
  39708: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => PW,
      h: () => LW,
      k: () => cW
    });
    const mW = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      EW = [0, 1, 2, 0, 2, 3],
      NW = [4, 5];

    function PW(WW, iW, OW, mW, EW) {
      for (let PW = 0; PW < 6; PW++) NW.includes(PW) === EW && wW(WW, iW, OW, mW, PW)
    }

    function LW(WW, iW, OW, mW) {
      for (let EW = 0; EW < 6; EW++) wW(WW, iW, OW, mW, EW)
    }

    function cW(WW, iW, OW, NW, PW) {
      for (let LW = 0; LW < 6; LW++)
        for (const cW of [0, 1]) {
          const [wW, tW, ZW] = [cW + 2, cW + 1, (cW + 3) % 4], xW = WW.length / 3;
          for (const [iW, EW] of [
              [cW, tW],
              [wW, tW],
              [wW, ZW],
              [cW, ZW]
            ])
            for (let cW = 0; cW < 3; cW++) {
              const wW = mW[3 * (4 * LW + iW) + cW],
                tW = mW[3 * (4 * LW + EW) + cW];
              WW.push((wW + (tW - wW) * PW) * NW / 2 + OW[cW])
            }
          for (const WW of EW) iW.push(xW + WW)
        }
    }

    function wW(WW, iW, OW, NW, PW) {
      let [LW, cW, wW] = OW, [tW, ZW, xW] = NW;
      const lW = WW.length / 3;
      for (let EW = 4 * PW; EW < 4 * PW + 4; EW++) WW.push(mW[3 * EW] * tW / 2 + LW, mW[3 * EW + 1] * ZW / 2 + cW, mW[3 * EW + 2] * xW / 2 + wW);
      for (const mW of EW) iW.push(lW + mW)
    }
  },
  39669: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      default: () => tk
    });
    var mW = OW(62);
    const EW = [{
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
      NW = 10;
    let PW = !0;

    function LW() {
      return PW
    }

    function cW(WW) {
      PW = WW
    }
    const wW = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function tW() {
      return PW ? EW.length : NW
    }

    function ZW(WW) {
      var iW, OW;
      return null !== (iW = null === (OW = EW[WW - 1]) || void 0 === OW ? void 0 : OW.reactorTier) && void 0 !== iW ? iW : 0
    }

    function xW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ZW(WW) > 0;
      return OW && !PW ? "hidden" : WW <= iW ? "open" : OW ? iW < 5 ? "hidden" : iW < NW ? "teaser" : "locked" : "locked"
    }

    function lW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: mW,
        n: EW
      } = jW(WW);
      return {
        key: iW[mW],
        params: {
          [mW]: OW ? String(EW) : EW
        }
      }
    }
    const AW = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function bW(WW, iW) {
      return ZW(WW) > 0 && iW < NW
    }

    function jW(WW) {
      const iW = ZW(WW);
      if (iW > 0) return {
        kind: "atomic",
        n: iW,
        short: `A${iW}`
      };
      const OW = function(WW) {
        return WW >= 6 && WW <= 10 ? WW - 6 + 1 : 0
      }(WW);
      return OW > 0 ? {
        kind: "stage",
        n: OW,
        short: `S${OW}`
      } : {
        kind: "tier",
        n: WW,
        short: String(WW)
      }
    }

    function UW(WW) {
      return EW[Math.max(1, Math.min(WW, EW.length)) - 1]
    }

    function kW(WW, iW) {
      return WW < iW ? function(WW) {
        var iW;
        return null !== (iW = EW[WW]) && void 0 !== iW ? iW : null
      }(WW) : null
    }
    const sW = "baf2coresubmit",
      MW = "baf2corebankpause",
      KW = "baf2coredeposit",
      SW = "baf2corechargepause";

    function YW(WW) {
      var iW;
      return null !== (iW = WW.baf2CoreOpen) && void 0 !== iW ? iW : NW
    }
    const yW = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function TW(WW) {
      return yW.includes(WW)
    }
    const JW = (WW, iW) => iW.map((iW => [iW, [WW]])),
      hW = Object.fromEntries([...JW("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...JW("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...JW("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...JW("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...JW("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...JW("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...JW("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...JW("Parts Bench", ["Focus Lens"]), ...JW("Machine Bench", ["Laser", "Collider"]), ...JW("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb", "Nova Bomb"]), ...JW("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...JW("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...JW("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...JW("Tool Bench", ["Mob Cage"]), ...JW("Tool Bench", ["Pocket Terminal"]), ...JW("Tool Bench", ["Comet Beacon"]), ...JW("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function HW(WW) {
      var iW;
      return null !== (iW = hW[WW]) && void 0 !== iW ? iW : ["Workbench"]
    }

    function nW(WW) {
      return HW(WW)[0]
    }
    EW.slice(1).map(((WW, iW) => `Core Tier ${iW+2}`));
    var uW = OW(5725);
    const oW = ["on", "hud", "off"];

    function dW(WW) {
      return "on" === WW
    }
    var eW = OW(344);
    const vW = "Mob Farm",
      gW = {
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
      DW = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      VW = {
        1: 20,
        2: 60,
        3: 120
      },
      pW = "baf2farmvoid",
      fW = "Caged ",
      CW = " Spawner Block";

    function XW(WW) {
      return `lifeform:${(0,eW.qe)(WW)}`
    }

    function BW(WW) {
      if (!WW) return null;
      if (WW.startsWith(fW)) {
        const iW = WW.slice(6);
        return DW.includes(iW) ? iW : null
      }
      if (WW.endsWith(CW)) {
        const iW = WW.slice(0, -14);
        return void 0 !== gW[iW] ? iW : null
      }
      return null
    }

    function qW(WW) {
      return !0 === WW.mobFarm
    }

    function RW(WW, iW) {
      return VW[gW[iW]] * WW.opMs / 1e3
    }
    const GW = new Map;
    const IW = "baf2islands",
      aW = "baf2islandnew";

    function rW(WW) {
      const iW = EW.findIndex((iW => iW.unlocks.includes(WW)));
      return iW < 0 ? 1 : iW + 1
    }

    function zW(WW) {
      return Math.floor(WW).toLocaleString("en-US")
    }
    var FW = OW(39606);
    const QW = "baf2terminaltake",
      Wi = "baf2terminalput",
      ii = ["one", "stack", "fill"];

    function Oi(WW, iW, OW) {
      return `${QW} ${WW} ${iW} ${OW}`
    }

    function mi(WW, iW, OW) {
      return `${Wi} ${WW} ${iW} ${OW}`
    }

    function Ei(WW) {
      return `${Wi} ${WW}`
    }
    const Ni = [
      [`${QW} `, "take"],
      [`${Wi} `, "put"]
    ];

    function Pi(WW) {
      const iW = Ni.find((iW => {
        let [OW] = iW;
        return WW.startsWith(OW)
      }));
      if (!iW) return null;
      const [OW, mW] = iW, [EW, NW, ...PW] = WW.slice(OW.length).trim().split(" "), LW = Number(EW);
      if (!Number.isSafeInteger(LW) || LW <= 0) return null;
      if ("put" === mW && void 0 === NW) return {
        kind: "putAll",
        seq: LW
      };
      const cW = function(WW) {
        if (ii.includes(WW)) return WW;
        const iW = Number(WW);
        return /^\d+$/.test(WW) && Number.isSafeInteger(iW) && iW > 0 ? iW : null
      }(null !== NW && void 0 !== NW ? NW : "");
      return null === cW || 0 === PW.length ? null : {
        kind: mW,
        seq: LW,
        mode: cW,
        item: PW.join(" ")
      }
    }

    function Li(WW, iW) {
      const OW = "number" === typeof WW ? WW : "one" === WW ? 1 : "stack" === WW ? 99 : iW;
      return Math.min(iW, OW)
    }

    function ci(WW, iW) {
      const OW = WW => "number" === typeof WW ? WW : "one" === WW ? 1 : 99;
      return "fill" === WW || "fill" === iW ? "fill" : OW(WW) + OW(iW)
    }

    function wi(WW, iW) {
      const OW = Pi(WW),
        mW = Pi(iW),
        EW = OW && mW ? function(WW, iW) {
          return "take" === WW.kind || "take" === iW.kind ? "take" === WW.kind && "take" === iW.kind && WW.item === iW.item ? {
            ...iW,
            mode: ci(WW.mode, iW.mode)
          } : null : "putAll" === WW.kind || "putAll" === iW.kind ? {
            kind: "putAll",
            seq: iW.seq
          } : WW.item === iW.item ? {
            ...iW,
            mode: ci(WW.mode, iW.mode)
          } : null
        }(OW, mW) : null;
      return EW ? "putAll" === (NW = EW).kind ? Ei(NW.seq) : "put" === NW.kind ? mi(NW.seq, NW.mode, NW.item) : Oi(NW.seq, NW.mode, NW.item) : null;
      var NW
    }
    const ti = "baf2rx";

    function Zi(WW, iW) {
      for (var OW = arguments.length, mW = new Array(OW > 2 ? OW - 2 : 0), EW = 2; EW < OW; EW++) mW[EW - 2] = arguments[EW];
      return [ti, WW[0], WW[1], WW[2], iW, ...mW].join(" ")
    }
    const xi = 2,
      li = 4,
      Ai = 8,
      bi = 16,
      ji = 32,
      Ui = 64,
      ki = 128,
      si = 256,
      Mi = 512,
      Ki = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      Si = [{
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
    const Yi = "Biomass",
      yi = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function Ti(WW) {
      return {
        input: Yi,
        inputAmount: 1,
        output: WW,
        outputAmount: 1
      }
    }
    const Ji = "baf2synth",
      Hi = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      ni = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      ui = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      oi = function(WW, iW) {
        return {
          input: WW,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: iW,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      di = function(WW, iW) {
        return {
          ...oi(WW, iW, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      ei = ni.map((WW => di(WW, "Biomass", 2))),
      vi = {
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
          recipes: [oi("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), oi("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), oi("Raw Gold", "Gold Grit", 2), oi("Messy Stone", "Sand"), oi("Gravel", "Sand"), oi("Raw Voltite", "Voltite Dust", 2), oi("Moonstone", "Moonstone Dust", 4), oi("Wheat Seeds", "Fertiliser"), oi("Raw Uranium", "Uranium Grit", 2), di("Mossy Messy Stone", "Sand"), ...ei],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [oi("Iron Grit", "Iron Bar"), oi("Copper Grit", "Copper Bar"), oi("Gold Grit", "Gold Bar"), oi("Raw Iron", "Iron Bar"), oi("Raw Copper", "Copper Bar"), oi("Raw Gold", "Gold Bar"), oi("Sand", "Glass"), oi("Messy Stone", "Stone"), ...eW.Kc.map((WW => oi(WW, "Charcoal", 1, 4))), oi("Wheat", "Bread", 1, 2), ...ni.map(((WW, iW) => di(WW, ui[iW])))],
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
          recipes: [oi("Iron Bar", "Iron Plate"), oi("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [oi("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [oi("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [oi("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), oi("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), oi("Raw Gold", "Gold Grit", 3), oi("Raw Voltite", "Voltite Dust", 3), oi("Messy Stone", "Sand", 2), oi("Gravel", "Sand", 2), oi("Moonstone", "Moonstone Dust", 6), oi("Raw Uranium", "Uranium Grit", 3), di("Mossy Messy Stone", "Sand", 2), ...ei],
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
          table: Ki
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [oi("Coal", "Diamond", 1, 24), oi("Voltite Dust", "Moonstone", 1, 12)],
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
        ...FW.j
      },
      gi = {
        Crusher: [oi("Spent Pellet", "Glow Dust"), oi("Wheat Seeds", "Biomass"), oi("Wheat", "Biomass"), oi("Dead Bush", "Biomass"), oi("Dusk Moss", "Biomass"), oi("Rotten Flesh", "Biomass"), oi("Bone", "Biomass", 2)],
        "Shatter Mill": [oi("Spent Pellet", "Glow Dust"), oi("Wheat Seeds", "Biomass"), oi("Wheat", "Biomass"), oi("Dead Bush", "Biomass"), oi("Dusk Moss", "Biomass"), oi("Rotten Flesh", "Biomass"), oi("Bone", "Biomass", 2), ...eW.Kc.map((WW => oi(WW, "Biomass")))],
        Smelter: [oi("Biomass", "Fertiliser", 2)],
        Press: [oi("Coal", "Graphite", 1, 4)]
      },
      Di = "Power Coupler",
      Vi = "Advanced Coupler",
      fi = "Nova Coupler",
      Ci = [{
        item: Di,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: Vi,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: fi,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const Xi = new Map;

    function Bi(WW) {
      var iW, OW;
      return null !== (iW = null !== (OW = WW.fuelSlot) && void 0 !== OW ? OW : WW.couplerSlot) && void 0 !== iW ? iW : null
    }

    function qi(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!WW.couplable) throw new Error(`${WW.kind} takes no Power Coupler`);
      let OW = Xi.get(WW);
      OW || (OW = [], Xi.set(WW, OW));
      let mW = OW[iW];
      if (!mW) {
        var EW;
        const {
          divisor: NW,
          powerPerS: PW
        } = Ci[iW - 1], LW = WW.opMs / NW, cW = void 0 !== WW.fluidMade || void 0 !== WW.cryoMade ? WW.powerPerOp : PW * LW / 1e3;
        mW = {
          ...WW,
          fuelSlot: null,
          couplerSlot: null !== (EW = Bi(WW)) && void 0 !== EW ? EW : void 0,
          opMs: LW,
          powerPerOp: cW,
          coupled: !0
        }, iW > 1 && (mW = {
          ...mW,
          couplerLevel: iW
        }), OW[iW] = mW
      }
      return mW
    }
    const Ri = new Map;
    const Gi = new Map;

    function Ii(WW, iW) {
      if (null === iW || (OW = iW, !yi.includes(OW))) return WW;
      var OW;
      let mW = Gi.get(iW);
      return mW || (mW = {
        ...WW,
        recipes: [Ti(iW)]
      }, Gi.set(iW, mW)), mW
    }

    function ai(WW) {
      return !0 === WW.synth
    }
    const ri = (WW, iW, OW, mW) => ({
        output: WW,
        outputAmount: iW,
        tier: OW,
        inputs: mW.map((WW => {
          let [iW, OW] = WW;
          return {
            item: iW,
            amount: OW
          }
        }))
      }),
      zi = Object.fromEntries([ri("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), ri("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), ri("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), ri("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), ri("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), ri("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), ri("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), ri("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), ri("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), ri("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), ri("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), ri("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), ri("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), ri("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), ri("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), ri("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), ri("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), ri("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), ri("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), ri("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), ri("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), ri("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), ri("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), ri("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), ri("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), ri("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), ri("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), ri("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), ri("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), ri("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((WW => [WW.output, WW]))),
      Fi = new Map;

    function Qi(WW, iW) {
      let OW = vi[WW];
      if (iW.atomic && (OW = function(WW) {
          const iW = gi[WW.kind];
          if (!iW) return WW;
          let OW = Ri.get(WW.kind);
          if (!OW) {
            const mW = new Set(iW.map((WW => WW.input))),
              EW = WW.recipes.filter((WW => !mW.has(WW.input)));
            OW = {
              ...WW,
              recipes: [...EW, ...iW]
            }, Ri.set(WW.kind, OW)
          }
          return OW
        }(OW)), OW.synth) return Ii(OW, iW.taught);
      if (iW.coupled && OW.couplable) return qi(OW, iW.level);
      const mW = OW.inputSlots && null !== iW.taught ? zi[iW.taught] : void 0;
      if (!mW) return OW;
      const EW = `${WW}|${mW.output}`;
      let NW = Fi.get(EW);
      return NW || (NW = {
        ...OW,
        bench: mW
      }, Fi.set(EW, NW)), NW
    }
    const WO = ["Diamond", "Moonstone"];

    function iO(WW) {
      return new Set(WW.flatMap((WW => WW.bonus ? [WW.output, WW.bonus.item] : [WW.output])).filter((WW => !WO.includes(WW))))
    }
    const OO = Object.values(vi).flatMap((WW => WW.recipes));
    iO(OO.filter((WW => !0 !== WW.nuclear))), iO([...OO.filter((WW => !0 === WW.nuclear)), ...Object.values(gi).flat()]);

    function mO(WW) {
      return null === WW.inputSlot && void 0 === WW.inputSlots && void 0 === WW.powerMade && void 0 === WW.fluidMade && !WW.treeCutter && void 0 === WW.table
    }

    function EO(WW) {
      return !0 === WW.treeCutter
    }
    const NO = ["Voltite Cell"];

    function PO(WW) {
      var iW, OW;
      return null !== (iW = null === (OW = WW.fuels) || void 0 === OW ? void 0 : OW.some((WW => NO.includes(WW)))) && void 0 !== iW && iW
    }
    const LO = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(eW.Kc.map((WW => [WW, 8e3]))),
        ...Object.fromEntries(eW.sd.map((WW => [WW, 2e3]))),
        "Voltite Cell": 12e4
      },
      cO = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      wO = {
        "Uranium Deposit": 4e3
      };

    function tO(WW) {
      var iW;
      return null !== (iW = Object.keys(cO).find((iW => cO[iW] === WW))) && void 0 !== iW ? iW : null
    }

    function ZO(WW) {
      return Hi.includes(WW)
    }

    function xO(WW) {
      return !0 !== WW.nuclear || LW()
    }
    var lO = OW(327);
    var AO = OW(5790),
      bO = OW(5733),
      jO = OW(5797),
      UO = OW(5788);
    const kO = "Reactor Controller",
      sO = "Reactor Port",
      MO = "Battery Cell",
      KO = ["fuel", "water", "waste"],
      SO = {
        fuel: sO,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      YO = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      yO = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      TO = "Reactor Frame",
      JO = "Reactor Glass",
      hO = {
        edge: [TO],
        cap: [JO, sO],
        wall: [JO, sO],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [kO]
      },
      HO = {
        edge: [MO],
        cap: [MO],
        wall: [MO],
        inside: [MO],
        ctrl: [MO]
      },
      nO = ["edge", "cap", "wall", "inside"],
      uO = ["Reactor Slag"];

    function oO(WW) {
      return uO.includes(dO(WW))
    }

    function dO(WW) {
      const iW = WW.indexOf("|");
      return iW < 0 ? WW : WW.slice(0, iW)
    }

    function eO(WW) {
      return dO(WW) === kO ? "reactor" : null
    }

    function vO(WW) {
      return dO(WW) !== sO ? null : WW.endsWith("|Water") ? "water" : WW.endsWith("|Waste") ? "waste" : "fuel"
    }

    function gO(WW) {
      const iW = vO(WW);
      return null === iW ? null : pO(SO[KO[(KO.indexOf(iW) + 1) % KO.length]], function(WW) {
        return WW.includes(DO)
      }(WW))
    }
    const DO = "|meta|rot1|Formed",
      VO = new Set([TO, JO, sO]);

    function pO(WW, iW) {
      var OW;
      const mW = dO(WW);
      if (!VO.has(mW)) return WW;
      if (mW !== sO) return iW ? mW + DO : mW;
      const EW = null !== (OW = vO(WW)) && void 0 !== OW ? OW : "fuel";
      return iW ? "fuel" === EW ? mW + DO : `${mW}${DO}|${"water"===EW?"Water":"Waste"}` : SO[EW]
    }

    function fO(WW, iW) {
      const OW = Nm(WW, iW);
      if ("Air" === OW) return !1;
      const mW = "reactor" === WW ? hO : HO;
      return nO.some((WW => mW[WW].includes(OW))) || "reactor" === WW && uO.includes(OW)
    }

    function CO(WW) {
      return yO[WW]
    }

    function XO(WW) {
      var iW;
      return null !== (iW = YO[WW]) && void 0 !== iW ? iW : YO[1]
    }

    function BO(WW) {
      const [iW, , OW] = XO(WW);
      return [OW, 0, -iW]
    }

    function qO(WW, iW, OW, mW, EW, NW) {
      return {
        ctrl: [WW[0], WW[1], WW[2]],
        rot: YO[iW] ? iW : 1,
        w: OW,
        h: mW,
        d: EW,
        cu: NW[0],
        cv: NW[1]
      }
    }

    function RO(WW, iW) {
      return "reactor" === WW ? [Math.floor((iW - 1) / 2), 0] : [0, 0]
    }

    function GO(WW, iW, OW, mW, EW) {
      let NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : WW.rot;
      if (OW === WW.w && mW === WW.h && EW === WW.d && NW === WW.rot) return WW;
      const [PW] = RO(iW, WW.w);
      if (WW.cu === PW && WW.cv <= 1) return qO(WW.ctrl, NW, OW, mW, EW, RO(iW, OW));
      const LW = (WW, iW) => Math.max(1, Math.min(iW, WW));
      return qO(WW.ctrl, NW, OW, mW, EW, [LW(WW.cu, OW - 2), 0 === WW.cv ? 0 : LW(WW.cv, mW - 2)])
    }
    const IO = 11,
      aO = 2 * IO + 1;
    new Uint8Array(aO * aO * aO);

    function rO(WW) {
      return WW.w * WW.h * WW.d
    }

    function zO(WW) {
      const iW = BO(WW.rot);
      return [WW.ctrl[0] - iW[0] * WW.cu, WW.ctrl[1] - WW.cv, WW.ctrl[2] - iW[2] * WW.cu]
    }

    function FO(WW) {
      return WW.cv * WW.d * WW.w + WW.cu
    }

    function QO(WW, iW) {
      const OW = iW % WW.w,
        mW = Math.floor(iW / WW.w) % WW.d;
      return [OW, Math.floor(iW / (WW.w * WW.d)), mW]
    }

    function Wm(WW, iW) {
      const [OW, mW, EW] = QO(WW, iW), NW = zO(WW), PW = XO(WW.rot), LW = BO(WW.rot);
      return [NW[0] + LW[0] * OW - PW[0] * EW, NW[1] + mW, NW[2] + LW[2] * OW - PW[2] * EW]
    }

    function im(WW, iW) {
      const OW = zO(WW),
        mW = XO(WW.rot),
        EW = BO(WW.rot),
        NW = iW[0] - OW[0],
        PW = iW[2] - OW[2],
        LW = NW * EW[0] + PW * EW[2],
        cW = -(NW * mW[0] + PW * mW[2]),
        wW = iW[1] - OW[1];
      return LW < 0 || LW >= WW.w || wW < 0 || wW >= WW.h || cW < 0 || cW >= WW.d ? -1 : (wW * WW.d + cW) * WW.w + LW
    }

    function Om(WW, iW) {
      if (iW === FO(WW)) return "ctrl";
      const [OW, mW, EW] = QO(WW, iW), NW = 0 === mW || mW === WW.h - 1, PW = Number(0 === OW || OW === WW.w - 1) + Number(NW) + Number(0 === EW || EW === WW.d - 1);
      return PW >= 2 ? "edge" : 1 === PW ? NW ? "cap" : "wall" : "inside"
    }

    function mm(WW, iW) {
      const [OW, mW, EW] = QO(WW, iW);
      return 0 === OW || OW === WW.w - 1 || 0 === mW || mW === WW.h - 1 || 0 === EW || EW === WW.d - 1 ? -1 : ((mW - 1) * (WW.d - 2) + (EW - 1)) * (WW.w - 2) + (OW - 1)
    }

    function Em(WW, iW) {
      const OW = WW.w - 2,
        mW = WW.d - 2,
        EW = iW % OW + 1,
        NW = Math.floor(iW / OW) % mW + 1;
      return ((Math.floor(iW / (OW * mW)) + 1) * WW.d + NW) * WW.w + EW
    }

    function Nm(WW, iW) {
      const OW = dO(iW);
      return "reactor" === WW && OW === kO ? TO : OW
    }

    function Pm(WW, iW, OW) {
      const mW = "ctrl" === iW ? dO(OW) : Nm(WW, OW);
      return ("reactor" === WW ? hO : HO)[iW].includes(mW) ? "ok" : "Air" === mW ? "missing" : fO(WW, OW) ? "wrong" : "blocked"
    }

    function Lm(WW, iW) {
      return "battery" === WW ? MO : "inside" === iW ? null : function(WW, iW) {
        if ("inside" === iW || "ctrl" === iW || "battery" === WW) return null;
        return "edge" === iW ? TO : JO
      }(WW, iW)
    }
    const cm = {
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
      wm = "Collider",
      tm = "Laser",
      Zm = "Star Alloy",
      xm = "Glow Dust",
      lm = [wm, "_Collider Focus"];

    function Am(WW) {
      return lm.indexOf(dO(WW))
    }

    function bm(WW) {
      return dO(WW) === tm
    }

    function jm(WW) {
      return [
        [WW[0], WW[1], WW[2]],
        [WW[0], WW[1] + 1, WW[2]]
      ]
    }
    const Um = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function km(WW, iW, OW) {
      const mW = Um[iW];
      return [WW[0] + mW[0] * OW, WW[1], WW[2] + mW[2] * OW]
    }

    function sm(WW, iW) {
      if (iW[1] !== WW[1]) return null;
      const OW = iW[0] - WW[0],
        mW = iW[2] - WW[2];
      if (0 !== OW === (0 !== mW)) return null;
      const EW = Math.abs(OW + mW);
      if (EW > cm.LASER_D) return null;
      return {
        dir: mW < 0 ? 0 : OW > 0 ? 1 : mW > 0 ? 2 : 3,
        TP: EW
      }
    }

    function Mm(WW, iW, OW) {
      const mW = iW => Math.abs(WW[0] - iW[0]) <= 1 && Math.abs(WW[1] - iW[1]) <= 1;
      return mW(iW) || mW(OW)
    }

    function Km(WW, iW) {
      return function(WW, iW, OW, mW) {
        return [0, 1, 2, 3].map((EW => {
          for (let NW = 1; NW <= cm.LASER_D; NW++) {
            const PW = km(WW, EW, NW);
            if (Mm([PW[0], PW[2]], iW, OW) || !mW(PW)) return !1
          }
          return !0
        }))
      }(jm(WW)[1], iW.spawnXZ, iW.coreXZ, (WW => WW[1] >= AO.p && WW[1] < AO.p + AO.t && WW[0] >= iW.minXZ[0] && WW[0] <= iW.maxXZ[0] && WW[2] >= iW.minXZ[1] && WW[2] <= iW.maxXZ[1]))
    }
    const Sm = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function Ym(WW) {
      return Math.max(48 + 16 * WW, UW(WW).machineAllowance)
    }
    const ym = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function Tm(WW) {
      const iW = WW.split("|")[0];
      return ym.includes(iW) ? "Solar Panel" : iW === jO.e ? "Fluid Pipe" : Am(iW) >= 0 ? "Collider" : (OW = iW, Sm.includes(OW) ? iW : null);
      var OW
    }
    const Jm = "buildAFactory2Game:solarPanelDescription";
    const hm = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function Hm(WW, iW) {
      var OW;
      return null !== (OW = hm.find((OW => {
        var mW;
        return (null !== (mW = WW.level(OW)) && void 0 !== mW ? mW : 0) >= iW
      }))) && void 0 !== OW ? OW : null
    }
    const nm = "buildAFactory2Game:";
    let um = null;
    const om = {
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
      dm = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      em = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      gm = {
        "Loot Chest": `${nm}lookRuinChestName`
      };

    function Dm(WW, iW) {
      var OW, mW, EW;
      let NW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : iW;
      if ("Solar Panel" === Tm(iW)) return {
        name: (0, eW.ye)(WW.displayName("Solar Panel")),
        detail: Jm,
        detailItem: null
      };
      const PW = iW.endsWith(" Ore"),
        cW = (um ??= new Set([...Object.keys((0, bO.j)()), ...Object.keys((0, jO.y)())].map((WW => WW.split("|")[0]))), um).has(iW),
        wW = PW || cW ? null : function(WW) {
          var iW;
          return WW.endsWith(" Log") && !WW.startsWith("Barkless ") ? "lookLog" : WW.endsWith(" Sapling") ? "lookSapling" : WW.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (iW = om[WW]) && void 0 !== iW ? iW : null
        }(iW);
      if (!WW.isBlock(iW) || !PW && !cW && null === wW) return null;
      const tW = null !== (OW = gm[iW]) && void 0 !== OW ? OW : (0, eW.Wb)(iW, null !== (mW = WW.displayName(NW)) && void 0 !== mW ? mW : WW.displayName(iW));
      if (null !== wW) return {
        name: tW,
        detail: `${nm}${wW}`,
        detailItem: null
      };
      const ZW = null !== (EW = dm[iW]) && void 0 !== EW ? EW : LW() ? em[iW] : void 0;
      if (cW && void 0 !== ZW) return {
        name: tW,
        detail: `${nm}${ZW}`,
        detailItem: null
      };
      const xW = cO[iW];
      if (void 0 !== xW) return {
        name: tW,
        detail: `${nm}lookDeposit`,
        detailItem: (0, eW.Wb)(xW, WW.displayName(xW))
      };
      const lW = WW.harvestLevel(iW);
      if (PW && "rock" === WW.harvestType(iW) && 0 !== lW) {
        const iW = Hm(WW, null !== lW && void 0 !== lW ? lW : 0);
        if (iW === hm[0]) return {
          name: tW,
          detail: `${nm}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== iW) return {
          name: tW,
          detail: `${nm}lookPickaxe`,
          detailItem: (0, eW.Wb)(iW, WW.displayName(iW))
        }
      }
      return {
        name: tW,
        detail: (0, eW.ye)(WW.description(iW)),
        detailItem: null
      }
    }

    function Vm(WW) {
      return WW < AO.p - 24
    }
    const pm = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const fm = "Wrench",
      Cm = "Nova Wrench";

    function Xm(WW) {
      return WW === fm || WW === Cm
    }
    const Bm = [...AO.O, "Belt Lift", "Belt Drop"];
    const qm = ["Belt Lift", "Belt Drop"],
      Rm = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function Gm(WW) {
      return WW.split("|")[0]
    }

    function Im(WW) {
      const iW = /\|rot(\d)/.exec(WW);
      return iW ? Number(iW[1]) : 1
    }

    function am(WW) {
      return WW % 4 + 1
    }

    function rm(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === iW && "" === OW ? WW : `${WW}|meta|rot${iW}${OW}`
    }

    function zm(WW) {
      return Gm(WW) === AO.E ? (0, AO.S)(WW) ? "gateRight" : "gateLeft" : (0, AO.Z)(WW)
    }

    function Fm(WW) {
      const iW = Gm(WW),
        OW = Im(WW);
      if (AO.O.includes(iW)) return (0, AO.Q)(iW, am(OW), null);
      if (iW === AO.i) return (0, AO.bb)(am(OW), (0, AO.V)(WW));
      if (iW === AO.G) {
        const mW = Rm[(0, AO.Z)(WW)];
        return null === mW ? rm(iW, am(OW)) : rm(iW, OW, AO.H[mW])
      }
      return iW === AO.E ? (0, AO.S)(WW) ? rm(iW, am(OW)) : rm(iW, OW, AO.m) : UO.c.includes(iW) && !qm.includes(iW) || ZO(iW) ? rm(iW, am(OW)) : null
    }

    function Qm(WW) {
      return UO.c.includes(WW) || ZO(WW) || null !== Tm(WW)
    }

    function WE(WW) {
      return "Solar Panel" === Tm(WW)
    }
    const iE = "buildAFactory2Game:",
      OE = {
        leftFront: `${iE}lookSplitDetail_leftFront`,
        frontRight: `${iE}lookSplitDetail_frontRight`,
        gateRight: `${iE}lookGateDetail_gateRight`
      };

    function mE(WW, iW) {
      var OW;
      let mW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const EW = zm(WW),
        NW = null === EW ? null : `${iE}${EW.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${EW}`,
        PW = null === EW ? null : null !== (OW = OE[EW]) && void 0 !== OW ? OW : null;
      if (Xm(iW) && mW) {
        const OW = Gm(WW);
        return iW === Cm && LW() && function(WW) {
          return Bm.includes(Gm(WW))
        }(WW) ? {
          mode: NW,
          detail: PW,
          next: `${iE}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: NW,
          detail: PW,
          next: Qm(OW) && !WE(OW) ? `${iE}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const cW = Xm(iW) ? Fm(WW) : null;
      if (null === cW) return {
        mode: NW,
        detail: PW,
        next: null,
        nextState: null
      };
      const wW = zm(cW);
      return null === wW || Im(cW) !== Im(WW) ? {
        mode: NW,
        detail: PW,
        next: `${iE}lookWrenchTurn`,
        nextState: null
      } : {
        mode: NW,
        detail: PW,
        next: `${iE}lookWrenchNext`,
        nextState: `${iE}lookWrenchState_${wW}`
      }
    }
    const EE = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
    const NE = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function PE(WW) {
      return [0, 1, 2, 3].map((iW => 0 !== (WW & 1 << iW)))
    }

    function LE(WW) {
      const iW = [];
      for (let OW = 8; OW + 2 < WW.length; OW += 3) iW.push([WW[OW], WW[OW + 1], WW[OW + 2]]);
      return {
        focus: [WW[0], WW[1], WW[2]],
        lasers: PE(WW[3]),
        open: PE(WW[4]),
        live: PE(WW[5]),
        on: 1 === WW[6],
        state: NE[WW[7]],
        blockers: iW
      }
    }
    const cE = "Arc Caster",
      wE = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      tE = (Object.values(wE), "Jet Chestplate"),
      ZE = "Nova Jet Chestplate",
      xE = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      lE = Object.values(xE);

    function AE(WW, iW, OW) {
      return Math.min(function(WW) {
        return LW() && ZW(WW) >= 5 ? 20 : 10
      }(OW), Math.floor(function(WW, iW) {
        return Math.max(0, WW) + (LW() ? Math.max(0, iW) : 0)
      }(WW, iW) / 5))
    }

    function bE(WW, iW, OW) {
      const mW = AE(iW, OW, WW),
        EW = ZW(WW),
        NW = (EW >= 3 ? 55 : EW >= 1 ? 50 : WW >= 8 ? 45 : 30) + mW,
        PW = Math.max(100 + mW, 2 * NW);
      return {
        arcDamage: NW,
        arcPierce: WW >= 7 ? 2 : 1,
        arcChain: WW >= 10,
        barrierMax: (EW >= 4 ? 100 : EW >= 2 ? 90 : WW >= 9 ? 80 : WW >= 6 ? 60 : 40) + 5 * mW,
        barrierRegenPerS: EW >= 5 ? 20 : WW >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * mW,
        novaShieldRegenPerS: 32,
        bladeDamage: PW,
        bladePunch: Math.round(.5 * PW),
        forgeRank: mW
      }
    }
    const jE = {
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
    var UE = OW(37980),
      kE = OW(3368),
      sE = OW(3361),
      ME = OW(25),
      KE = OW(1729),
      SE = OW(1089),
      YE = OW.n(SE);

    function yE(WW) {
      return !0 === WW.field
    }
    const TE = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function JE(WW) {
      return TE.has(WW) ? `buildAFactory2Game:itemPlural_${(0,eW.qe)(WW)}` : null
    }
    var hE = OW(1172),
      HE = OW(1391),
      nE = OW(2032),
      uE = OW(2021),
      oE = OW(1463),
      dE = OW(37975),
      eE = OW(27),
      vE = OW(37972);
    const gE = "baf2QuestView",
      DE = "baf2PlayerY",
      VE = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class pE {
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
      set(WW, iW) {
        var OW, mW, EW, NW, PW, LW, cW, wW;
        const tW = JSON.stringify(WW.baf2QuestName) === JSON.stringify(this.view.name),
          ZW = new Set(this.view.rows.filter((WW => WW.done)).map((WW => WW.id))),
          xW = new Set(this.view.rows.filter((WW => WW.justFinished)).map((WW => WW.id))),
          lW = WW.baf2QuestSide,
          AW = null !== lW && !0 === WW.baf2QuestSideFocus;
        let bW = !1,
          jW = 0;
        const UW = WW.baf2QuestSteps.map((WW => {
            const iW = IE(WW, VE.has(WW[0]) ? WW[0] : "" + jW++),
              OW = tW && iW.done && !ZW.has(iW.id);
            return iW.justFinished = OW || tW && iW.done && xW.has(iW.id), bW ||= OW, iW
          })),
          kW = GE(UW);
        kW >= 0 && !AW && (UW[kW].current = !0);
        const sW = !tW && null !== WW.baf2QuestName,
          MW = JSON.stringify(lW && [lW[0], lW[1]]),
          KW = MW === JSON.stringify(null !== (OW = null === (mW = this.view.side) || void 0 === mW ? void 0 : mW.name) && void 0 !== OW ? OW : null),
          SW = null !== lW && !this.sidesSeen.has(MW);
        SW && this.sidesSeen.add(MW), this.serverTutorial = null !== (EW = WW.baf2QuestTutorial) && void 0 !== EW ? EW : "on", (null !== (NW = WW.baf2QuestTutorialSeq) && void 0 !== NW ? NW : 0) >= this.pickSeq && this.endPick();
        const YW = !tW || !KW || WW.baf2QuestTier !== this.view.tier;
        this.view = {
          name: WW.baf2QuestName,
          rows: UW,
          reward: WW.baf2QuestReward,
          goal: WW.baf2QuestGoal,
          pulse: this.view.pulse + (bW || sW ? 1 : 0),
          itemNames: iW,
          side: lW && {
            name: [lW[0], lW[1]],
            row: {
              ...IE(lW[2], "side"),
              current: AW
            },
            goal: null !== (PW = lW[3]) && void 0 !== PW ? PW : null
          },
          sideCameUpAt: SW ? Date.now() : this.view.sideCameUpAt,
          tier: WW.baf2QuestTier,
          core: WW.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (LW = WW.baf2QuestAlso) && void 0 !== LW ? LW : [],
          depth: null !== (cW = WW.baf2QuestDepth) && void 0 !== cW ? cW : null,
          tutorial: null !== (wW = this.pickedTutorial) && void 0 !== wW ? wW : this.serverTutorial,
          tutorialKnown: !0
        }, this.iZ(), bW && this.scheduleClear(), YW && this.requestBook()
      }
      setTutorial(WW) {
        return this.endPick(), this.pickedTutorial = WW, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.iZ()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: WW
        }, this.iZ(), this.pickSeq
      }
      onPlayerY(WW) {
        const iW = Math.floor(WW);
        iW !== this.playerY && (this.playerY = iW, this.view.depth && eE.l.iZ(DE, iW))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(WW) {
        this.view = {
          ...this.view,
          chapters: WW.baf2BookChapters
        }, this.iZ()
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
          }, this.iZ()
        }), 2400)
      }
      iZ() {
        eE.l.iZ(gE, this.view, !0)
      }
    }

    function fE(WW, iW) {
      return WW.sideCameUpAt > 0 && iW - WW.sideCameUpAt < 2400
    }

    function CE(WW) {
      return (null === WW.name || XE(WW)) && null === WW.side && null !== WW.chapters
    }

    function XE(WW) {
      var iW;
      return "quest_forgeOngoing" === (null === (iW = WW.name) || void 0 === iW ? void 0 : iW[0])
    }

    function BE(WW) {
      return WW.filter((WW => !VE.has(WW.key)))
    }

    function qE(WW) {
      return WW.key.startsWith("stepCraft")
    }

    function RE(WW, iW) {
      const OW = new Set,
        mW = WW.side ? [...WW.rows, WW.side.row] : WW.rows;
      for (const NW of mW)
        if (!NW.done) {
          !NW.item || iW && !qE(NW) || OW.add(NW.item);
          for (const [WW, iW, mW] of null !== (EW = NW.chips) && void 0 !== EW ? EW : []) {
            var EW;
            iW < mW && OW.add(WW)
          }
        } return OW
    }

    function GE(WW) {
      const iW = WW.findIndex((WW => !WW.done && !WW.away));
      return iW >= 0 ? iW : WW.findIndex((WW => !WW.done))
    }

    function IE(WW, iW) {
      let [OW, mW, EW, NW, PW, LW, cW, wW, tW, ZW] = WW;
      return {
        id: iW,
        key: OW,
        params: mW,
        item: EW,
        amount: NW,
        total: PW,
        done: LW,
        chips: null !== cW && void 0 !== cW ? cW : null,
        current: !1,
        away: !0 === wW,
        madeFor: null !== tW && void 0 !== tW ? tW : [],
        also: null !== ZW && void 0 !== ZW ? ZW : [],
        justFinished: !1
      }
    }
    const aE = "baf2QuestItems",
      rE = new Set;
    let zE = new Set,
      FE = null;

    function QE(WW) {
      const iW = dW(WW.tutorial),
        OW = iW ? RE(WW, !0) : rE;
      "inventory" === ME.d.get("openInGameMenuName") ? (FE = null, (0, vE.A)(OW)) : FE = OW;
      const mW = iW ? RE(WW, !1) : rE;
      (0, dE.c)(mW, zE) || (zE = mW, eE.l.iZ(aE, zE))
    }

    function WN() {
      return (0, oE.e)(aE, (() => zE))
    }
    var iN = OW(39672);
    const ON = [{
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

    function mN(WW, iW) {
      return [`Deposit Seed (${WW})`, {
        item: cO[`${WW} Deposit`],
        amount: iW
      }]
    }
    const EN = Object.fromEntries([mN("Coal", 8), mN("Iron", 8), mN("Copper", 8), mN("Gold", 6), mN("Voltite", 4), mN("Uranium", 4)]),
      NN = "Relay Coil",
      PN = new Map;

    function LN(WW) {
      let iW = PN.get(WW);
      if (!iW) {
        const OW = Math.max(1, WW);
        iW = ON.filter((WW => {
          var iW;
          return OW >= WW.fromTier && OW <= (null !== (iW = WW.untilTier) && void 0 !== iW ? iW : 1 / 0)
        })).map((WW => WW.later && OW >= WW.later.tier ? {
          ...WW,
          weight: WW.later.weight
        } : WW)), PN.set(WW, iW)
      }
      return iW
    }

    function cN(WW) {
      return LN(WW).some((WW => {
        let {
          item: iW
        } = WW;
        return iW === NN
      }))
    }

    function wN(WW) {
      return WW.startsWith("Deposit Seed (")
    }

    function tN(WW, iW) {
      const OW = LN(WW);
      return iW ? OW.filter((WW => iW(WW.item))) : OW
    }

    function ZN(WW) {
      return WW.reduce(((WW, iW) => WW + iW.weight), 0)
    }

    function xN(WW, iW) {
      const OW = tN(WW, iW),
        mW = ZN(OW);
      return OW.map((WW => ({
        find: WW,
        chance: WW.weight / mW
      })))
    }
    const lN = 6e4,
      AN = new Intl.NumberFormat("en-US");

    function bN(WW, iW) {
      const OW = WW >= 10 ? Math.round(WW) : Math.round(10 * WW) / 10;
      return 0 === OW ? "0" : `${iW}${AN.format(OW)}`
    }

    function jN(WW) {
      return WW < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? AN.format(WW) : WW < 1e6 ? `${WW<1e5?Math.floor(WW/100)/10:Math.floor(WW/1e3)}k` : Math.floor(WW / 1e5) / 10 + "M"
    }

    function UN(WW) {
      return WW < 0 ? "\u2212" + -WW : String(WW)
    }

    function kN(WW, iW) {
      const OW = Math.max(1, Math.round(iW));
      if (OW < 60) return WW("buildAFactory2Game:durationSeconds", {
        seconds: String(OW)
      });
      const mW = Math.round(OW / 60);
      if (mW < 60) return WW("buildAFactory2Game:durationMinutes", {
        minutes: String(mW)
      });
      const EW = String(Math.floor(mW / 60));
      return mW % 60 === 0 ? WW("buildAFactory2Game:durationWholeHours", {
        hours: EW
      }) : WW("buildAFactory2Game:durationHours", {
        hours: EW,
        minutes: String(mW % 60)
      })
    }
    var sN = OW(39677),
      MN = OW(1283);

    function KN(WW, iW) {
      return null !== WW && WW > iW + 1
    }

    function SN(WW) {
      const iW = 100 * WW;
      return String(iW <= 0 || iW >= 1 ? Math.round(iW) : Math.max(.1, Math.round(10 * iW) / 10))
    }

    function YN(WW) {
      let {
        item: iW,
        amount: OW
      } = WW;
      return (0, MN.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, MN.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, MN.jsx)(nE.b, {
            itemName: iW,
            amount: 0
          })
        }), OW > 1 && (0, MN.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", OW]
        })]
      })
    }

    function yN(WW) {
      let {
        label: iW,
        names: OW
      } = WW;
      const [EW, NW] = (0, mW.useState)(!1), PW = OW.join(" / ");
      return (0, MN.jsxs)(MN.Fragment, {
        children: [(0, MN.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: PW,
          "aria-expanded": EW,
          onClick: () => {
            NW(!EW)
          },
          children: iW
        }), EW && (0, MN.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: PW
        })]
      })
    }

    function TN(WW) {
      let {
        tier: iW
      } = WW;
      const {
        t: OW
      } = (0, hE.B)(), {
        key: mW,
        params: EW
      } = lW(iW, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), NW = OW(`buildAFactory2Game:${mW}`, EW);
      return (0, MN.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, MN.jsx)(HE.c, {
          name: "lock"
        }), NW]
      })
    }
    const JN = (0, mW.createContext)(null);

    function hN() {
      const {
        t: WW
      } = (0, hE.B)(), iW = (0, mW.useContext)(JN);
      return (0, mW.useEffect)((() => null === iW || void 0 === iW ? void 0 : iW()), [iW]), (0, MN.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: WW("buildAFactory2Game:recipeForQuest"),
        "aria-label": WW("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function HN(WW) {
      let {
        title: iW,
        count: OW,
        children: EW,
        startOpen: NW = !0
      } = WW;
      const {
        t: PW
      } = (0, hE.B)(), [LW, cW] = (0, mW.useState)((() => NW && !(0, sN.b)())), [wW, tW] = (0, mW.useState)(0), ZW = (0, mW.useCallback)((() => (tW((WW => WW + 1)), () => {
        tW((WW => WW - 1))
      })), []);
      return (0, MN.jsxs)("div", {
        className: YE()("Baf2Recipes", {
          Open: LW
        }),
        children: [(0, MN.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            cW(!LW)
          },
          "aria-expanded": LW,
          children: [PW("buildAFactory2Game:recipesToggle", {
            title: iW,
            count: String(OW)
          }), (0, MN.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: LW ? "\u25be" : "\u25b8"
          })]
        }), LW && (0, MN.jsxs)(JN.Provider, {
          value: ZW,
          children: [(0, MN.jsx)("ul", {
            className: "Baf2RecipeList",
            children: EW
          }), wW > 0 && (0, MN.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, MN.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), PW("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const nN = "buildAFactory2Game:",
      uN = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const oN = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      dN = {
        "Uranium Grit": NW,
        "Raw Uranium": NW
      };

    function eN(WW) {
      var iW;
      return null !== (iW = dN[WW]) && void 0 !== iW ? iW : Math.max(rW(WW), oN[WW] ? rW(oN[WW]) : 1, function(WW) {
        const iW = EW.findIndex((iW => iW.cost.some((iW => iW.item === WW))));
        return iW > NW ? iW : 1
      }(WW))
    }

    function vN(WW, iW) {
      return gN(iW) ? eN(iW) : function(WW) {
        if (uN.has(WW)) return 1;
        const iW = EW.findIndex((iW => iW.newDeposits.some((iW => {
          let {
            block: OW
          } = iW;
          return OW === WW
        }))));
        return iW < 0 ? 1 : iW + 1
      }(WW)
    }

    function gN(WW) {
      return WW in dN || ZW(eN(WW)) > 0
    }

    function DN(WW, iW) {
      return Qi(WW, {
        coupled: !1,
        taught: null,
        atomic: LW() && iW >= 11
      }).recipes
    }

    function VN(WW, iW) {
      const OW = xW(WW, iW, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ZW(WW) > 0);
      return "open" === OW || "locked" === OW
    }

    function pN(WW, iW) {
      return WW.map(((WW, OW) => ({
        value: WW,
        idx: OW,
        tier: iW(WW)
      }))).sort(((WW, iW) => WW.tier - iW.tier || WW.idx - iW.idx)).map((WW => {
        let {
          value: iW
        } = WW;
        return iW
      }))
    }

    function fN(WW, iW, OW) {
      const mW = xW(WW, iW);
      if ("hidden" === mW || "open" === mW) return null;
      if ("teaser" === mW) return {
        tag: {
          translationKey: `${nN}${OW?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${nN}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const EW = lW(WW, {
          tier: OW ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        NW = lW(WW, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${nN}${EW.key}`,
          params: EW.params
        },
        reason: {
          translationKey: `${nN}${NW.key}`,
          params: NW.params
        }
      }
    }

    function CN(WW) {
      return !wN(WW)
    }

    function XN(WW) {
      let {
        seconds: iW
      } = WW;
      const {
        t: OW
      } = (0, hE.B)();
      return (0, MN.jsx)(HN, {
        title: OW("buildAFactory2Game:recipesCuts", {
          seconds: iW
        }),
        count: 1,
        children: (0, MN.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, MN.jsx)(YN, {
            item: "Maple Sapling",
            amount: 1
          }), (0, MN.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, MN.jsx)(YN, {
            item: "Maple Log",
            amount: 1
          }), (0, MN.jsx)("span", {
            className: "Baf2RecipeName",
            children: OW("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function BN(WW) {
      let {
        fertilised: iW
      } = WW;
      const {
        t: OW
      } = (0, hE.B)();
      return (0, MN.jsxs)(HN, {
        title: OW("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, MN.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, MN.jsx)(YN, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, MN.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, MN.jsx)(YN, {
            item: "Wheat",
            amount: 1
          }), (0, MN.jsx)(YN, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, MN.jsx)("span", {
            className: "Baf2RecipeName",
            children: OW("buildAFactory2Game:recipeField")
          })]
        }), (0, MN.jsxs)("li", {
          className: YE()("Baf2Recipe", {
            InUse: iW
          }),
          children: [(0, MN.jsx)(YN, {
            item: "Fertiliser",
            amount: 1
          }), (0, MN.jsx)("span", {
            className: "Baf2RecipeName",
            children: OW("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function qN(WW) {
      let {
        tier: iW,
        seconds: OW
      } = WW;
      const {
        t: mW
      } = (0, hE.B)(), EW = function(WW) {
        return WW >= 5 ? Si : Ki
      }(iW);
      return (0, MN.jsx)(HN, {
        title: mW("buildAFactory2Game:recipesBringsUp", {
          seconds: OW
        }),
        count: EW.length,
        children: EW.map((WW => {
          let {
            item: iW,
            chance: OW
          } = WW;
          return (0, MN.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, MN.jsx)(YN, {
              item: iW,
              amount: 1
            }), (0, MN.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, iN.g)(mW, iW)
            }), (0, MN.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: mW("buildAFactory2Game:recipeChance", {
                percent: SN(OW)
              })
            })]
          }, iW)
        }))
      })
    }

    function RN(WW) {
      let {
        tier: iW,
        seconds: OW,
        noSeeds: mW
      } = WW;
      const {
        t: EW
      } = (0, hE.B)(), NW = WN(), PW = xN(iW, mW ? CN : void 0), LW = mW && xN(iW).length > PW.length, cW = cN(iW);
      return (0, MN.jsxs)(HN, {
        title: EW("buildAFactory2Game:recipesRecycles", {
          seconds: OW
        }),
        count: PW.length,
        children: [PW.map((WW => {
          let {
            find: iW,
            chance: OW
          } = WW;
          return (0, MN.jsxs)("li", {
            className: "Baf2Recipe",
            children: [NW.has(iW.item) && (0, MN.jsx)(hN, {}), (0, MN.jsx)(YN, {
              item: iW.item,
              amount: iW.amount
            }), (0, MN.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, iN.g)(EW, iW.item)
            }), (0, MN.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: EW("buildAFactory2Game:recipeChance", {
                percent: SN(OW)
              })
            })]
          }, iW.item)
        })), LW && (0, MN.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, MN.jsx)("span", {
            className: "Baf2RecipeName",
            children: EW("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), cW && (0, MN.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, MN.jsx)("span", {
            className: "Baf2RecipeName",
            children: EW("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function GN(WW) {
      let {
        tier: iW,
        seconds: OW
      } = WW;
      const {
        t: mW
      } = (0, hE.B)(), EW = Object.entries(EN).filter((WW => {
        let [, {
          item: OW
        }] = WW;
        return VN(eN(OW), iW, gN(OW))
      }));
      return (0, MN.jsx)(HN, {
        title: mW("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: OW
        }),
        count: EW.length,
        children: EW.map((WW => {
          let [iW, {
            item: OW,
            amount: EW
          }] = WW;
          return (0, MN.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, MN.jsx)(YN, {
              item: iW,
              amount: 1
            }), (0, MN.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, MN.jsx)(YN, {
              item: OW,
              amount: EW
            }), (0, MN.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, iN.g)(mW, OW)
            })]
          }, iW)
        }))
      })
    }

    function IN(WW) {
      let {
        tier: iW,
        seconds: OW
      } = WW;
      const {
        t: mW
      } = (0, hE.B)(), EW = WN(), NW = pN(Object.entries(cO).filter((WW => {
        let [OW, mW] = WW;
        return VN(vN(OW, mW), iW, gN(mW))
      })), (WW => {
        let [iW, OW] = WW;
        return vN(iW, OW)
      }));
      return (0, MN.jsx)(HN, {
        title: mW("buildAFactory2Game:recipesDigs", {
          seconds: OW
        }),
        count: NW.length,
        children: NW.map((WW => {
          let [OW, NW] = WW;
          const PW = vN(OW, NW),
            LW = PW > iW ? PW : null,
            cW = wO[OW],
            wW = null === LW && EW.has(NW);
          return (0, MN.jsxs)("li", {
            className: YE()("Baf2Recipe", {
              Locked: null !== LW,
              Far: KN(LW, iW)
            }),
            children: [wW && (0, MN.jsx)(hN, {}), (0, MN.jsx)(YN, {
              item: OW,
              amount: 1
            }), (0, MN.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, MN.jsx)(YN, {
              item: NW,
              amount: 1
            }), (0, MN.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, iN.g)(mW, NW)
            }), void 0 !== cW && (0, MN.jsx)("span", {
              className: "Baf2RecipeMore",
              children: mW("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / cW)
              })
            }), null !== LW && (0, MN.jsx)(TN, {
              tier: LW
            })]
          }, OW)
        }))
      })
    }

    function aN(WW) {
      var iW;
      let {
        def: OW,
        seconds: mW
      } = WW;
      const {
        t: EW
      } = (0, hE.B)();
      return (0, MN.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, MN.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (iW = OW.fuels) && void 0 !== iW ? iW : []).map((WW => (0, MN.jsx)(YN, {
            item: WW,
            amount: 1
          }, WW))), (0, MN.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, MN.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, MN.jsx)(HE.c, {
              name: "bolt"
            }), EW("buildAFactory2Game:recipePower", {
              power: zW(OW.powerMade),
              seconds: mW
            })]
          })]
        })
      })
    }

    function rN(WW) {
      let {
        def: iW
      } = WW;
      const {
        t: OW
      } = (0, hE.B)();
      return (0, MN.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, MN.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, MN.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, MN.jsx)(HE.c, {
              name: "bolt"
            }), OW("buildAFactory2Game:recipeMixer", {
              cryo: bN((0, FW.G)(iW, iW.cryoMade), "")
            })]
          })
        })
      })
    }

    function zN(WW) {
      let {
        def: iW
      } = WW;
      const {
        t: OW
      } = (0, hE.B)();
      return (0, MN.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, MN.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, MN.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, MN.jsx)(HE.c, {
              name: "bolt"
            }), OW("buildAFactory2Game:recipeCondenser", {
              power: bN((0, FW.G)(iW, iW.powerPerOp), ""),
              water: bN((0, FW.G)(iW, iW.fluidMade), "")
            })]
          })
        })
      })
    }

    function FN(WW) {
      let {
        kind: iW,
        def: OW,
        input: mW,
        tier: EW,
        noSeeds: NW = !1
      } = WW;
      const PW = String(OW.opMs / 1e3);
      return EO(OW) ? (0, MN.jsx)(XN, {
        seconds: PW
      }) : OW.field ? (0, MN.jsx)(BN, {
        fertilised: null !== mW
      }) : OW.table ? (0, MN.jsx)(qN, {
        tier: EW,
        seconds: PW
      }) : OW.recycles ? (0, MN.jsxs)(MN.Fragment, {
        children: [(0, MN.jsx)(RN, {
          tier: EW,
          seconds: PW,
          noSeeds: NW
        }), (0, MN.jsx)(GN, {
          tier: EW,
          seconds: PW
        })]
      }) : mO(OW) ? (0, MN.jsx)(IN, {
        tier: EW,
        seconds: PW
      }) : void 0 !== OW.fluidMade ? (0, MN.jsx)(zN, {
        def: OW
      }) : void 0 !== OW.cryoMade ? (0, MN.jsx)(rN, {
        def: OW
      }) : void 0 !== OW.powerMade ? (0, MN.jsx)(aN, {
        def: OW,
        seconds: PW
      }) : (0, MN.jsx)(QN, {
        kind: iW,
        input: mW,
        tier: EW,
        seconds: PW
      })
    }

    function QN(WW) {
      let {
        kind: iW,
        input: OW,
        tier: mW,
        seconds: EW
      } = WW;
      const {
        t: NW
      } = (0, hE.B)(), PW = WN(), LW = pN(function(WW) {
        const iW = new Map;
        for (const EW of WW) {
          var OW, mW;
          const WW = [EW.output, EW.outputAmount, EW.inputAmount, null === (OW = EW.bonus) || void 0 === OW ? void 0 : OW.item, null === (mW = EW.bonus) || void 0 === mW ? void 0 : mW.chance].join("|"),
            NW = iW.get(WW);
          NW ? NW.inputs.push(EW.input) : iW.set(WW, {
            inputs: [EW.input],
            inputAmount: EW.inputAmount,
            output: EW.output,
            outputAmount: EW.outputAmount,
            bonus: EW.bonus
          })
        }
        return [...iW.values()]
      }(DN(iW, mW).filter(xO)), (WW => eN(WW.output))).filter((WW => VN(eN(WW.output), mW, gN(WW.output))));
      return (0, MN.jsx)(HN, {
        title: NW("buildAFactory2Game:recipesEach", {
          seconds: EW
        }),
        count: LW.length,
        children: LW.map((WW => {
          const iW = null !== OW && WW.inputs.includes(OW),
            EW = WW.inputs.length > 3 ? [iW ? OW : WW.inputs[0]] : WW.inputs,
            LW = eN(WW.output) > mW ? eN(WW.output) : null,
            cW = null === LW && PW.has(WW.output);
          return (0, MN.jsxs)("li", {
            className: YE()("Baf2Recipe", {
              InUse: iW,
              Locked: null !== LW,
              Far: KN(LW, mW)
            }),
            children: [cW && (0, MN.jsx)(hN, {}), EW.map(((iW, OW) => (0, MN.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [OW > 0 && (0, MN.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, MN.jsx)(YN, {
                item: iW,
                amount: WW.inputAmount
              })]
            }, iW))), EW.length < WW.inputs.length && (0, MN.jsx)(yN, {
              label: NW("buildAFactory2Game:recipeMore", {
                count: String(WW.inputs.length - EW.length)
              }),
              names: WW.inputs.filter((WW => !EW.includes(WW))).map((WW => (0, iN.g)(NW, WW)))
            }), (0, MN.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, MN.jsx)(YN, {
              item: WW.output,
              amount: WW.outputAmount
            }), (0, MN.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, iN.g)(NW, WW.output)
            }), WW.bonus && (0, MN.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [NW("buildAFactory2Game:recipeBonus", {
                percent: SN(WW.bonus.chance)
              }), (0, MN.jsx)(YN, {
                item: WW.bonus.item,
                amount: 1
              })]
            }), null !== LW && (0, MN.jsx)(TN, {
              tier: LW
            })]
          }, `${WW.output}|${WW.inputs[0]}`)
        }))
      })
    }

    function WP(WW) {
      let {
        taught: iW,
        tier: OW
      } = WW;
      const {
        t: mW
      } = (0, hE.B)(), EW = WN(), NW = pN(Object.values(zi), (WW => WW.tier)).filter((WW => VN(WW.tier, OW)));
      return (0, MN.jsx)(HN, {
        title: mW("buildAFactory2Game:benchCanMake"),
        count: NW.length,
        startOpen: !1,
        children: NW.map((WW => {
          const NW = WW.tier > OW,
            PW = !NW && EW.has(WW.output);
          return (0, MN.jsxs)("li", {
            className: YE()("Baf2Recipe", {
              InUse: WW.output === iW,
              Locked: NW,
              Far: KN(NW ? WW.tier : null, OW)
            }),
            children: [PW && (0, MN.jsx)(hN, {}), (0, MN.jsx)(YN, {
              item: WW.output,
              amount: WW.outputAmount
            }), (0, MN.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, iN.g)(mW, WW.output)
            }), (0, MN.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), WW.inputs.map((WW => (0, MN.jsx)(YN, {
              item: WW.item,
              amount: WW.amount
            }, WW.item))), NW && (0, MN.jsx)(TN, {
              tier: WW.tier
            })]
          }, WW.output)
        }))
      })
    }
    var iP, OP, mP, EP, NP;
    const PP = vi.Generator,
      LP = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      cP = 1e3 * (null !== (iP = PP.powerMade) && void 0 !== iP ? iP : 0) / PP.opMs,
      wP = Math.min(...(null !== (OP = PP.fuels) && void 0 !== OP ? OP : []).map((WW => LO[WW]))) / 1e3,
      tP = vi["Volt Engine"],
      ZP = 1e3 * (null !== (mP = tP.powerMade) && void 0 !== mP ? mP : 0) / tP.opMs,
      xP = LO[null !== (EP = null === (NP = tP.fuels) || void 0 === NP ? void 0 : NP[0]) && void 0 !== EP ? EP : ""] / 1e3;

    function lP(WW) {
      let {
        item: iW,
        label: OW,
        value: mW,
        note: EW,
        dim: NW
      } = WW;
      return (0, MN.jsxs)("li", {
        className: YE()("Baf2PowerRow", {
          Dim: NW
        }),
        children: [(0, MN.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, MN.jsx)(nE.b, {
            itemName: iW,
            amount: 0
          })
        }), (0, MN.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, MN.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: OW
          }), EW && (0, MN.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: EW
          })]
        }), (0, MN.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: mW
        })]
      })
    }

    function AP(WW, iW, OW, mW) {
      var EW;
      const NW = void 0 === mW ? vi[WW] : function(WW, iW) {
          if (null === iW) return WW;
          let OW = GW.get(iW);
          return OW || (OW = {
            ...WW,
            powerPerOp: RW(WW, iW),
            farmMob: iW
          }, GW.set(iW, OW)), OW
        }(vi[WW], mW),
        PW = iW && NW.couplable ? qi(NW, OW) : NW;
      return 1e3 * (null !== (EW = PW.powerPerOp) && void 0 !== EW ? EW : 0) / PW.opMs
    }

    function bP(WW) {
      var iW, OW, mW, EW, NW, PW, LW, cW;
      let {
        message: wW
      } = WW;
      const {
        t: tW
      } = (0, hE.B)(), ZW = (WW, iW) => tW("buildAFactory2Game:powerPerSecond", {
        rate: bN(WW, iW)
      }), [xW, lW] = wW.baf2PowerGenerators, AW = wW.baf2PowerGeneratorFuel, bW = wW.baf2PowerSunPanels, jW = null !== (iW = wW.baf2PowerSunShare) && void 0 !== iW ? iW : 1, UW = wW.baf2PowerVaults, kW = wW.baf2PowerUsers, [sW, MW] = null !== (OW = wW.baf2PowerEngines) && void 0 !== OW ? OW : [0, 0], KW = null !== (mW = wW.baf2PowerEngineCells) && void 0 !== mW ? mW : 0, SW = null !== (EW = wW.baf2PowerPads) && void 0 !== EW ? EW : 0, YW = null !== (NW = wW.baf2PowerCharge) && void 0 !== NW ? NW : 0, [yW, TW] = null !== (PW = wW.baf2PowerReactors) && void 0 !== PW ? PW : [0, 0], [JW, hW] = null !== (LW = wW.baf2PowerBatteries) && void 0 !== LW ? LW : [0, 0];
      let HW = tW("buildAFactory2Game:powerEngineCells", {
        amount: String(KW)
      });
      KW > 0 && MW > 0 && (HW = tW("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(KW),
        time: kN(tW, KW * xP / MW)
      }));
      let nW = tW("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(AW)
      });
      AW > 0 && lW > 0 && (nW = tW("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(AW),
        time: kN(tW, AW * wP / lW)
      }));
      const uW = xW + sW + bW + yW;
      return (0, MN.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, MN.jsxs)("section", {
          children: [(0, MN.jsxs)("h3", {
            children: [tW("buildAFactory2Game:powerMaking"), (0, MN.jsx)("span", {
              children: ZW(wW.baf2PowerMadePerS, "+")
            })]
          }), (0, MN.jsxs)("ul", {
            children: [0 === uW && (0, MN.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: tW("buildAFactory2Game:powerNoMakers")
            }), xW > 0 && (0, MN.jsx)(lP, {
              item: "Generator",
              label: `${(0,iN.g)(tW,"Generator")} \xd7${xW}`,
              note: `${tW("buildAFactory2Game:powerRunning",{amount:String(lW)})} \xb7 ${nW}`,
              value: ZW(lW * cP, "+"),
              dim: 0 === lW
            }), sW > 0 && (0, MN.jsx)(lP, {
              item: "Volt Engine",
              label: `${(0,iN.g)(tW,"Volt Engine")} \xd7${sW}`,
              note: `${tW("buildAFactory2Game:powerRunning",{amount:String(MW)})} \xb7 ${HW}`,
              value: ZW(MW * ZP, "+"),
              dim: 0 === MW
            }), bW > 0 && (0, MN.jsx)(lP, {
              item: "Solar Panel",
              label: `${(0,iN.g)(tW,"Solar Panel")} \xd7${bW}`,
              note: tW(jW < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: ZW(4 * bW * jW, "+")
            }), yW > 0 && (0, MN.jsx)(lP, {
              item: "Reactor Frame",
              label: `${tW("buildAFactory2Game:powerReactors")} \xd7${yW}`,
              note: tW("buildAFactory2Game:powerRunning", {
                amount: String(TW)
              }),
              value: ZW(null !== (cW = wW.baf2PowerReactorPerS) && void 0 !== cW ? cW : 0, "+"),
              dim: 0 === TW
            })]
          })]
        }), (0, MN.jsxs)("section", {
          children: [(0, MN.jsxs)("h3", {
            children: [tW("buildAFactory2Game:powerStorage"), (0, MN.jsx)("span", {
              children: zW(wW.baf2PowerCap)
            })]
          }), (UW > 0 || JW > 0) && (0, MN.jsxs)("ul", {
            children: [UW > 0 && (0, MN.jsx)(lP, {
              item: "Charge Vault",
              label: `${(0,iN.g)(tW,"Charge Vault")} \xd7${UW}`,
              value: `+${zW(8e3*UW)}`
            }), JW > 0 && (0, MN.jsx)(lP, {
              item: "Battery Cell",
              label: `${tW("buildAFactory2Game:powerBatteries")} \xd7${JW}`,
              value: `+${zW(hW)}`
            })]
          })]
        }), (0, MN.jsxs)("section", {
          children: [(0, MN.jsxs)("h3", {
            children: [tW("buildAFactory2Game:powerUsing"), (0, MN.jsx)("span", {
              children: ZW(wW.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, MN.jsxs)("ul", {
            children: [0 === kW.length && 0 === SW && 0 === YW && (0, MN.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: tW("buildAFactory2Game:powerNoUsers")
            }), kW.map((WW => {
              let [iW, OW, mW, EW, NW = 1, PW] = WW, LW = OW ? tW(LP[NW - 1], {
                name: (0, iN.g)(tW, iW)
              }) : (0, iN.g)(tW, iW);
              return void 0 !== PW && (LW = tW("buildAFactory2Game:powerFarmName", {
                name: LW,
                mob: tW(XW(PW))
              })), (0, MN.jsx)(lP, {
                item: iW,
                label: `${LW} \xd7${mW}`,
                note: tW("buildAFactory2Game:powerRunning", {
                  amount: String(EW)
                }),
                value: EW > 0 ? ZW(EW * AP(iW, OW, NW, PW), "\u2212") : tW("buildAFactory2Game:powerIdle"),
                dim: 0 === EW
              }, `${iW}|${OW}|${NW}|${PW}`)
            })), SW > 0 && (0, MN.jsx)(lP, {
              item: "Charging Pad",
              label: `${(0,iN.g)(tW,"Charging Pad")} \xd7${SW}`,
              value: tW("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), YW > 0 && (0, MN.jsx)(lP, {
              item: "Homestead Core",
              label: tW("buildAFactory2Game:powerCharge"),
              value: ZW(YW, "\u2212")
            }), wW.baf2PowerStarved > 0 && (0, MN.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, MN.jsx)(HE.c, {
                name: "triangle-exclamation"
              }), tW("buildAFactory2Game:powerStarved", {
                amount: String(wW.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var jP = OW(5238),
      UP = OW(1532);
    class kP {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(WW) {
        this.message = WW;
        for (const iW of this.listeners) iW()
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
    class sP extends kP {}

    function MP(WW, iW) {
      const OW = () => {
          const OW = WW.get();
          if (!OW || !iW) return OW;
          const [mW, EW, NW] = OW.baf2PowerAt;
          return mW === iW[0] && EW === iW[1] && NW === iW[2] ? OW : null
        },
        [EW, NW] = (0, mW.useState)(OW);
      return (0, mW.useEffect)((() => (NW(OW()), WW.subscribe((() => {
        NW(OW())
      })))), [WW, ...null !== iW && void 0 !== iW ? iW : []]), EW
    }

    function KP(WW) {
      return {
        stored: WW.baf2PowerStored,
        cap: WW.baf2PowerCap,
        madePerS: WW.baf2PowerMadePerS,
        usedPerS: WW.baf2PowerUsedPerS
      }
    }

    function SP(WW) {
      let {
        stored: iW,
        cap: OW
      } = WW;
      return (0, MN.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, MN.jsx)("div", {
          style: {
            width: `${Math.min(100,100*iW/Math.max(1,OW))}%`
          }
        })
      })
    }

    function YP(WW) {
      let {
        figures: iW,
        labelled: OW = !1
      } = WW;
      const {
        t: mW
      } = (0, hE.B)(), EW = iW.madePerS - iW.usedPerS, {
        text: NW,
        draining: PW
      } = function(WW, iW) {
        let {
          stored: OW,
          cap: mW,
          madePerS: EW,
          usedPerS: NW
        } = iW;
        const PW = EW - NW;
        return OW >= mW ? {
          text: WW("buildAFactory2Game:powerFull"),
          draining: !1
        } : PW > .05 ? {
          text: WW("buildAFactory2Game:powerFullIn", {
            time: kN(WW, (mW - OW) / PW)
          }),
          draining: !1
        } : PW < -.05 ? {
          text: WW("buildAFactory2Game:powerEmptyIn", {
            time: kN(WW, OW / -PW)
          }),
          draining: !0
        } : {
          text: WW("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(mW, iW);
      return (0, MN.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, MN.jsx)(SP, {
          stored: iW.stored,
          cap: iW.cap
        }), (0, MN.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, MN.jsx)("span", {
            children: mW(OW ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: zW(iW.stored),
              cap: zW(iW.cap)
            })
          }), (0, MN.jsxs)("span", {
            className: YE()("Baf2PowerNet", {
              Draining: PW
            }),
            children: [mW("buildAFactory2Game:powerPerSecond", {
              rate: bN(Math.abs(EW), EW < 0 ? "\u2212" : "+")
            }), " \xb7 ", NW]
          })]
        })]
      })
    }

    function yP(WW) {
      let {
        stored: iW,
        cap: OW,
        rates: mW
      } = WW;
      const {
        t: EW
      } = (0, hE.B)();
      return mW ? (0, MN.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, MN.jsx)(YP, {
          figures: {
            stored: iW,
            cap: OW,
            madePerS: mW[0],
            usedPerS: mW[1]
          },
          labelled: !0
        })
      }) : (0, MN.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, MN.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, MN.jsx)(SP, {
            stored: iW,
            cap: OW
          }), (0, MN.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, MN.jsx)("span", {
              children: EW("buildAFactory2Game:powerStoredLabelled", {
                stored: zW(iW),
                cap: zW(OW)
              })
            })
          })]
        })
      })
    }

    function TP(WW) {
      let {
        store: iW,
        close: OW
      } = WW;
      const {
        t: mW
      } = (0, hE.B)(), EW = MP(iW);
      return (0, MN.jsx)(jP.b, {
        close: OW,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, MN.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, MN.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, MN.jsxs)("div", {
              children: [(0, MN.jsx)("h2", {
                id: "baf2PowerTitle",
                children: mW("buildAFactory2Game:powerTitle")
              }), (0, MN.jsx)("p", {
                children: mW("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, MN.jsx)(UP.l, {
              onClick: OW
            })]
          }), EW && (0, MN.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, MN.jsx)(YP, {
              figures: KP(EW)
            }), (0, MN.jsx)(bP, {
              message: EW
            })]
          })]
        })
      })
    }

    function JP(WW) {
      var iW;
      let {
        kind: OW,
        def: EW,
        CE: NW,
        power: PW,
        stored: LW,
        cap: cW
      } = WW;
      const {
        t: wW
      } = (0, hE.B)(), tW = MP(PW, NW), [ZW, xW] = (0, mW.useState)(!1);
      return (0, MN.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, MN.jsx)(FN, {
          kind: OW,
          def: EW,
          input: null,
          tier: null !== (iW = null === tW || void 0 === tW ? void 0 : tW.baf2PowerTier) && void 0 !== iW ? iW : 1
        }), (0, MN.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: wW("buildAFactory2Game:powerTitle")
        }), tW && (0, MN.jsx)(YP, {
          figures: KP(tW)
        }), !tW && (0, MN.jsx)(yP, {
          stored: LW,
          cap: cW,
          rates: null
        }), tW && (0, MN.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            xW(!ZW)
          },
          "aria-expanded": ZW,
          children: wW(ZW ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), tW && ZW && (0, MN.jsx)(bP, {
          message: tW
        })]
      })
    }
    const hP = 2500,
      HP = 17500,
      nP = `${KW} `;
    const uP = ["plan", "throttle"];

    function oP(WW) {
      if (WW.startsWith(`${Ji} `)) return WW.slice(0, WW.lastIndexOf(" "));
      const iW = WW.split(" ");
      return iW[0] === ti && uP.includes(iW[4]) ? iW.slice(0, 5).join(" ") : null
    }
    class dP {
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = WW, this.now = iW, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.sNW = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = iW()
      }
      enqueue(WW) {
        this.queue(WW, this.nextTicket());
        const iW = this.sNW + this.pending.length;
        return this.flush(), iW
      }
      track(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const OW = this.nextTicket();
        if (!iW.urgent) return this.queue(WW, OW), this.flush(), OW;
        const {
          supersedes: mW
        } = iW;
        for (let NW = this.pending.length - 1; NW >= this.urgent; NW--) {
          const iW = this.pending[NW];
          (iW.command === WW || null !== mW && void 0 !== mW && mW(iW.command)) && (this.pending.splice(NW, 1), this.markLeft(iW.tickets))
        }
        const EW = this.pending.findIndex((iW => {
          let {
            command: OW
          } = iW;
          return OW === WW
        }));
        return -1 !== EW ? this.pending[EW].tickets.push(OW) : (this.pending.splice(this.urgent, 0, {
          command: WW,
          tickets: [OW]
        }), this.urgent += 1), this.flush(), OW
      }
      leftAt(WW) {
        const iW = this.leftTimes.get(WW);
        return void 0 !== iW ? iW : this.pending.some((iW => {
          let {
            tickets: OW
          } = iW;
          return OW.includes(WW)
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
        var iW;
        return (null === (iW = this.pending.at(-1)) || void 0 === iW ? void 0 : iW.command) === WW
      }
      sent() {
        return this.sNW
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
        const iW = this.now();
        for (const OW of WW) this.leftTimes.set(OW, iW);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(WW, iW) {
        const OW = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === OW || void 0 === OW ? void 0 : OW.command) === WW) return void(! function(WW) {
          return WW === SW || WW.startsWith(`${MW} `) || WW.startsWith(`${pW} `)
        }(WW) ? OW.tickets.push(iW) : (this.pending.pop(), this.markLeft([...OW.tickets, iW])));
        const mW = void 0 === OW ? null : wi(OW.command, WW);
        if (null !== mW && void 0 !== OW) return OW.command = mW, void OW.tickets.push(iW);
        const EW = oP(WW);
        if (null !== EW && void 0 !== OW && oP(OW.command) === EW) return OW.command = WW, void OW.tickets.push(iW);
        if (null !== OW && void 0 !== OW && OW.command.startsWith(nP) && WW.startsWith(nP)) {
          const mW = WW.slice(nP.length);
          if (OW.command.slice(nP.length).split(",").includes(mW)) return void OW.tickets.push(iW);
          const EW = `${OW.command},${mW}`;
          if (EW.length <= 119) return OW.command = EW, void OW.tickets.push(iW)
        }
        this.pending.push({
          command: WW,
          tickets: [iW]
        })
      }
      flush() {
        const WW = this.now();
        for (this.tokens = Math.min(5, this.tokens + (WW - this.refilledAt) / hP), this.refilledAt = WW; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.sNW += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: WW,
            tickets: iW
          } = this.pending.shift();
          this.markLeft(iW), this.send(WW)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * hP)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class eP {
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new dP(WW, iW)
      }
      send(WW) {
        return this.queue.enqueue(WW)
      }
      sent() {
        return this.queue.sent()
      }
      track(WW, iW) {
        return this.queue.track(WW, iW)
      }
      leftAt(WW) {
        return this.queue.leftAt(WW)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(WW) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = iW, this.send(WW), this.islandEdits.count
      }
      syncIslandEdits(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: OW
        } = this, mW = iW - OW.lastAtMs < HP;
        OW.count = mW ? Math.max(OW.count, WW) : WW
      }
      clear() {
        this.queue.clear()
      }
    }
    const vP = (0, mW.createContext)(null);

    function gP() {
      const WW = (0, mW.useContext)(vP);
      if (!WW) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return WW
    }

    function DP(WW, iW) {
      return null !== iW && void 0 !== iW ? iW : 1 === WW
    }

    function VP(WW, iW) {
      return WW.every((WW => {
        var OW;
        let [mW, , EW] = WW;
        return !DP(EW, null === (OW = iW.get(mW)) || void 0 === OW ? void 0 : OW.EZ)
      }))
    }

    function pP(WW, iW, OW) {
      if (0 === WW.size) return WW;
      const mW = new Map(WW);
      for (const [EW, NW] of WW) {
        const WW = iW.find((WW => {
          let [iW] = WW;
          return iW === EW
        }));
        (!WW || NW.EZ === (1 === WW[2]) || NW.atMs < OW) && mW.delete(EW)
      }
      return mW
    }

    function fP(WW) {
      var iW;
      let {
        CE: OW,
        input: EW,
        drops: NW,
        seconds: PW
      } = WW;
      const {
        t: LW
      } = (0, hE.B)(), cW = gP(), [wW, tW] = (0, mW.useState)(new Map);
      (0, mW.useEffect)((() => {
        NW && tW((WW => pP(WW, NW, Date.now() - HP)))
      }), [NW]), (0, mW.useEffect)((() => {
        const WW = function(WW, iW) {
          let OW = null;
          for (const {
              atMs: mW
            }
            of WW.values()) OW = null === OW ? mW : Math.min(OW, mW);
          return null === OW ? null : OW + iW
        }(wW, HP);
        if (null === WW || !NW) return;
        const iW = setTimeout((() => {
          tW((WW => pP(WW, NW, Date.now() - HP)))
        }), Math.max(0, WW - Date.now()) + 1);
        return () => {
          clearTimeout(iW)
        }
      }), [wW, NW]);
      const ZW = BW(EW),
        xW = null !== ZW && null !== NW && VP(NW, wW),
        lW = function(WW, iW, OW) {
          return null === WW || null === iW || VP(iW, OW) ? 0 : VW[gW[WW]]
        }(ZW, NW, wW);
      return (0, MN.jsxs)(HN, {
        title: LW("buildAFactory2Game:farmDropsTitle", {
          seconds: PW
        }),
        count: null !== (iW = null === NW || void 0 === NW ? void 0 : NW.length) && void 0 !== iW ? iW : 0,
        children: [lW > 0 && (0, MN.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: LW("buildAFactory2Game:farmDropsPower", {
            power: String(lW)
          })
        }), (null === ZW || !NW) && (0, MN.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: LW("buildAFactory2Game:farmDropsEmpty")
        }), xW && (0, MN.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: LW("buildAFactory2Game:farmDropsAllVoided")
        }), null !== ZW && (null === NW || void 0 === NW ? void 0 : NW.map((WW => {
          var iW;
          let [mW, EW, NW] = WW;
          const PW = EW < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            ZW = DP(NW, null === (iW = wW.get(mW)) || void 0 === iW ? void 0 : iW.EZ);
          return (0, MN.jsxs)("li", {
            className: YE()("Baf2Recipe Baf2FarmDrop", {
              Voided: !ZW
            }),
            children: [(0, MN.jsx)(YN, {
              item: mW,
              amount: 1
            }), (0, MN.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, iN.g)(LW, mW)
            }), (0, MN.jsx)("span", {
              className: "Baf2FarmRate",
              children: LW(PW, {
                amount: String(EW)
              })
            }), (0, MN.jsx)("button", {
              type: "button",
              className: YE()("Baf2FarmToggle SmallTextBold", {
                Kept: ZW
              }),
              "aria-pressed": ZW,
              onClick: () => {
                tW(new Map(wW).set(mW, {
                  EZ: !ZW,
                  atMs: Date.now()
                })), cW.send(function(WW, iW, OW, mW) {
                  return `${pW} ${WW} ${iW} ${OW} ${mW}`
                }(OW[0], OW[1], OW[2], mW))
              },
              children: LW(ZW ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, mW)
        })))]
      })
    }
    var CP;
    const XP = String(null !== (CP = vi.Synthesizer.waterPerOp) && void 0 !== CP ? CP : 0);

    function BP(WW) {
      let {
        CE: iW,
        taught: OW
      } = WW;
      const {
        t: EW
      } = (0, hE.B)(), NW = gP(), [PW, LW] = (0, mW.useState)(null);
      (0, mW.useEffect)((() => {
        null !== PW && OW === PW && LW(null)
      }), [PW, OW]);
      const cW = null !== PW && void 0 !== PW ? PW : OW;
      let wW = EW("buildAFactory2Game:synthPick");
      return null !== cW && (wW = EW("buildAFactory2Game:synthGrows", {
        name: (0, iN.g)(EW, cW),
        input: (0, iN.g)(EW, Yi),
        water: XP
      })), (0, MN.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, MN.jsx)("div", {
          className: YE()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === cW
          }),
          children: wW
        }), (0, MN.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: yi.map(((WW, OW) => {
            const mW = (0, iN.g)(EW, WW),
              PW = WW === cW;
            return (0, MN.jsx)("li", {
              children: (0, MN.jsx)("button", {
                type: "button",
                className: YE()("Baf2SynthTile", {
                  Selected: PW
                }),
                title: mW,
                "aria-label": mW,
                "aria-pressed": PW,
                onClick: () => {
                  PW || (LW(WW), NW.send(`${Ji} ${iW[0]} ${iW[1]} ${iW[2]} ${OW}`))
                },
                children: (0, MN.jsx)(nE.b, {
                  itemName: WW,
                  amount: 0
                })
              })
            }, WW)
          }))
        })]
      })
    }
    const qP = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function RP(WW) {
      let {
        kind: iW,
        tier: OW,
        coupled: mW,
        level: EW,
        slot: NW
      } = WW;
      const {
        t: PW
      } = (0, hE.B)(), cW = rW(Di);
      if (!mW && null !== OW && OW < cW) return (0, MN.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, MN.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, MN.jsx)(HE.c, {
            name: "lock"
          })
        }), (0, MN.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: PW("buildAFactory2Game:upgradeLocked")
        }), (0, MN.jsx)("span", {
          className: "Baf2TierTag",
          children: PW("buildAFactory2Game:tierTag", {
            tier: String(cW)
          })
        })]
      });
      const wW = function(WW, iW) {
          if (LW() && "Crusher" !== WW && null !== iW) {
            if (GP(fi, iW)) return {
              item: fi,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (GP(Vi, iW)) return {
              item: Vi,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: Di,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(iW, OW),
        tW = PW(mW ? qP[EW - 1] : wW.emptyKey),
        ZW = null !== OW ? function(WW, iW, OW, mW) {
          if (!LW() || !OW || "Crusher" === WW || iW < 10) return null;
          const EW = rW(fi);
          if (mW < 3 && EW > 1 && (2 === mW || iW >= EW)) return {
            tier: EW,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const NW = rW(Vi);
          if (1 === mW && NW > 1) return {
            tier: NW,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(iW, OW, mW, EW) : null;
      return (0, MN.jsxs)("div", {
        className: YE()("Baf2UpgradeSocket", {
          Fitted: mW
        }),
        children: [(0, MN.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [mW && NW, !mW && (0, MN.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, MN.jsx)(nE.b, {
              itemName: wW.item,
              amount: 0
            })
          })]
        }), (0, MN.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, MN.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: PW("buildAFactory2Game:upgradeTitle")
          }), (0, MN.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: tW
          }), mW && EW >= 2 && "Crusher" === iW && (0, MN.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: PW("buildAFactory2Game:couplerCrusherHint")
          }), ZW && null !== OW && OW < ZW.tier && (0, MN.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, MN.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, MN.jsx)(HE.c, {
                name: "lock"
              })
            }), PW(ZW.lockedKey), (0, MN.jsx)("span", {
              className: "Baf2TierTag",
              children: PW("buildAFactory2Game:tierTag", {
                tier: String(ZW.tier)
              })
            })]
          }), ZW && null !== OW && OW >= ZW.tier && (0, MN.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: PW(ZW.nextKey)
          })]
        })]
      })
    }

    function GP(WW, iW) {
      const OW = rW(WW);
      return OW > 1 && iW >= OW
    }
    var IP = OW(38195);
    const aP = (0, FW.G)(vi.Condenser, vi.Condenser.fluidMade),
      rP = .05;
    class zP extends kP {}

    function FP(WW) {
      return bN(WW, "")
    }

    function QP(WW, iW, OW) {
      return WW(iW ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: OW
      })
    }

    function WL(WW, iW, OW, mW) {
      return OW <= rP && mW <= rP ? null : mW <= rP || OW <= rP ? QP(WW, iW, mW <= rP ? bN(OW, "+") : bN(mW, "\u2212")) : WW(iW ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: FP(OW),
        used: FP(mW)
      })
    }

    function iL(WW, iW) {
      return Math.min(100, 100 * WW / Math.max(1, iW))
    }

    function OL(WW) {
      let {
        stored: iW,
        cap: OW,
        netPerS: mW,
        rates: EW,
        cryo: NW
      } = WW;
      const {
        t: PW
      } = (0, hE.B)(), LW = function(WW, iW, OW, mW) {
        return OW <= 0 ? WW("buildAFactory2Game:waterNoStorage") : iW >= OW ? WW("buildAFactory2Game:powerFull") : mW > rP ? WW("buildAFactory2Game:powerFullIn", {
          time: kN(WW, (OW - iW) / mW)
        }) : mW < -.05 ? iW <= 0 ? WW("buildAFactory2Game:waterEmpty") : WW("buildAFactory2Game:powerEmptyIn", {
          time: kN(WW, iW / -mW)
        }) : WW("buildAFactory2Game:powerSteady")
      }(PW, iW, OW, mW), cW = OW > 0 && iW < OW && Math.abs(mW) <= rP, wW = PW(NW ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), tW = null !== EW ? `${EW} \xb7 ${LW}` : cW ? wW : `${wW} \xb7 ${LW}`;
      return (0, MN.jsxs)(MN.Fragment, {
        children: [(0, MN.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, MN.jsx)("div", {
            style: {
              width: `${iL(iW,OW)}%`
            }
          })
        }), (0, MN.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, MN.jsx)("span", {
            children: OW > 0 && PW("buildAFactory2Game:powerStored", {
              stored: (0, FW.O)(iW),
              cap: (0, FW.O)(OW)
            })
          }), (0, MN.jsx)("span", {
            className: YE()("Baf2WaterNet", {
              Draining: mW < -.05
            }),
            children: tW
          })]
        })]
      })
    }

    function mL(WW) {
      let {
        water: iW,
        at: OW,
        side: mW = null
      } = WW;
      const {
        t: EW
      } = (0, hE.B)(), NW = gP(), [PW, LW, cW] = iW;
      return (0, MN.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, MN.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, MN.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: EW(null === mW ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${mW}`)
          }), (0, MN.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              NW.send(`${FW.C} ${OW[0]} ${OW[1]} ${OW[2]}${"cryoOut"===mW?" cryo":""}`)
            },
            children: EW("buildAFactory2Game:waterDetails")
          })]
        }), (0, MN.jsx)(OL, {
          stored: PW,
          cap: LW,
          netPerS: cW,
          rates: QP(EW, "cryoOut" === mW, bN(Math.abs(cW), cW < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === mW
        })]
      })
    }

    function EL(WW, iW) {
      var OW, mW, EW;
      const NW = !0 === iW.baf2WaterCryo,
        PW = null !== (OW = null === (mW = iW.baf2WaterMakers.find((WW => WW[0] === (NW ? FW.c : "Condenser")))) || void 0 === mW ? void 0 : mW[1]) && void 0 !== OW ? OW : 0,
        LW = [],
        cW = (iW, OW, mW) => {
          iW > 0 && LW.push(WW(1 === iW ? OW : mW, {
            count: String(iW)
          }))
        };
      return NW ? cW(PW, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : cW(PW, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), cW(null !== (EW = iW.baf2WaterPipes) && void 0 !== EW ? EW : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), cW(iW.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), LW.join(" \xb7 ")
    }

    function NL(WW, iW) {
      if (!0 === iW.baf2WaterCryo) return function(WW, iW) {
        const OW = vi[FW.c];
        switch (iW.baf2WaterThis) {
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
            var mW;
            const [EW, NW] = null !== (mW = iW.baf2WaterThisRates) && void 0 !== mW ? mW : [(0, FW.G)(OW, OW.cryoMade), (0, FW.G)(OW, OW.powerPerOp)];
            return !0 === iW.baf2WaterDriven ? {
              text: WW("buildAFactory2Game:cryoThisMixerDriven", {
                rate: FP(EW)
              }),
              bad: !1
            } : {
              text: WW("buildAFactory2Game:cryoThisMixer", {
                rate: FP(EW),
                power: FP(NW)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: WW("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(WW, iW);
      const OW = !0 === iW.baf2WaterDriven,
        mW = vi.Condenser;
      switch (iW.baf2WaterThis) {
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
              tank: (0, FW.O)(FW.t),
              cap: (0, FW.O)(iW.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var EW;
          const [NW, PW] = null !== (EW = iW.baf2WaterThisRates) && void 0 !== EW ? EW : [aP, (0, FW.G)(mW, mW.powerPerOp)];
          return OW ? {
            text: WW("buildAFactory2Game:waterThisCondenserDriven", {
              rate: FP(NW)
            }),
            bad: !1
          } : {
            text: WW("buildAFactory2Game:waterThisCondenser", {
              rate: FP(NW),
              power: FP(PW)
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

    function PL(WW, iW) {
      const OW = iW.baf2WaterMakers.some((WW => !0 === WW[5]));
      if (!0 === iW.baf2WaterCryo) {
        const mW = iW.baf2WaterUsedPerS - iW.baf2WaterMadePerS,
          EW = OW || mW <= rP ? 0 : (0, FW.F)(mW);
        return 0 === EW ? null : EW > 1 ? WW("buildAFactory2Game:cryoNextMixers", {
          mixers: String(EW)
        }) : WW("buildAFactory2Game:cryoNextOne")
      }
      const mW = OW ? null : function(WW, iW) {
        const OW = iW - WW;
        return OW <= rP ? null : Math.ceil(OW / aP)
      }(iW.baf2WaterMadePerS, iW.baf2WaterUsedPerS);
      return null === mW ? null : mW > 1 ? WW("buildAFactory2Game:waterNextCondensers", {
        condensers: String(mW)
      }) : WW("buildAFactory2Game:waterNextOne")
    }

    function LL(WW) {
      let {
        item: iW,
        label: OW,
        note: mW,
        value: EW,
        dim: NW,
        bad: PW
      } = WW;
      return (0, MN.jsxs)("li", {
        className: YE()("Baf2WaterRow", {
          Dim: NW,
          Bad: PW
        }),
        children: [(0, MN.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, MN.jsx)(nE.b, {
            itemName: iW,
            amount: 0
          })
        }), (0, MN.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, MN.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: OW
          }), mW && (0, MN.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: mW
          })]
        }), (0, MN.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: EW
        })]
      })
    }

    function cL(WW) {
      return IP.n[WW] ? WW : "Reactor Port"
    }

    function wL(WW) {
      let {
        message: iW
      } = WW;
      const {
        t: OW
      } = (0, hE.B)(), mW = !0 === iW.baf2WaterCryo, EW = (WW, iW) => QP(OW, mW, bN(WW, iW));
      return (0, MN.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, MN.jsxs)("section", {
          children: [(0, MN.jsxs)("h3", {
            children: [OW("buildAFactory2Game:waterMakes"), (0, MN.jsx)("span", {
              children: EW(iW.baf2WaterMadePerS, "+")
            })]
          }), (0, MN.jsxs)("ul", {
            children: [0 === iW.baf2WaterMakers.length && (0, MN.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: OW(mW ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), iW.baf2WaterMakers.map((WW => {
              let [iW, mW, NW, PW, LW, cW] = WW;
              const wW = OW("buildAFactory2Game:powerRunning", {
                amount: String(NW)
              });
              let tW = LW > 0 ? OW("buildAFactory2Game:waterMakerPower", {
                running: wW,
                power: FP(LW)
              }) : wW;
              return cW && (tW = OW(0 === NW && PW <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, MN.jsx)(LL, {
                item: iW,
                label: `${(0,iN.g)(OW,iW)} \xd7${mW}`,
                note: tW,
                value: NW > 0 || cW && PW > 0 ? EW(PW, "+") : OW("buildAFactory2Game:powerIdle"),
                dim: 0 === NW && !cW,
                bad: cW
              }, iW)
            }))]
          })]
        }), (0, MN.jsxs)("section", {
          children: [(0, MN.jsxs)("h3", {
            children: [OW("buildAFactory2Game:waterUses"), (0, MN.jsx)("span", {
              children: EW(iW.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, MN.jsxs)("ul", {
            children: [0 === iW.baf2WaterUsers.length && (0, MN.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: OW(mW ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), iW.baf2WaterUsers.map((WW => {
              let [iW, mW, NW, PW] = WW;
              const LW = IP.n[iW] ? (0, iN.g)(OW, iW) : iW;
              return (0, MN.jsx)(LL, {
                item: cL(iW),
                label: mW > 1 ? `${LW} \xd7${mW}` : LW,
                note: PW ? OW("buildAFactory2Game:waterPortFirst") : void 0,
                value: NW > 0 ? EW(NW, "\u2212") : OW("buildAFactory2Game:powerIdle"),
                dim: 0 === NW
              }, iW)
            }))]
          })]
        })]
      })
    }

    function tL(WW) {
      var iW, OW, EW, NW, PW;
      let {
        store: LW,
        close: cW
      } = WW;
      const {
        t: wW
      } = (0, hE.B)(), tW = function(WW) {
        const [iW, OW] = (0, mW.useState)((() => WW.get()));
        return (0, mW.useEffect)((() => (OW(WW.get()), WW.subscribe((() => {
          OW(WW.get())
        })))), [WW]), iW
      }(LW), ZW = null !== (iW = null === tW || void 0 === tW ? void 0 : tW.baf2WaterStored) && void 0 !== iW ? iW : 0, xW = null !== (OW = null === tW || void 0 === tW ? void 0 : tW.baf2WaterCap) && void 0 !== OW ? OW : 0, lW = null !== (EW = null === tW || void 0 === tW ? void 0 : tW.baf2WaterMadePerS) && void 0 !== EW ? EW : 0, AW = null !== (NW = null === tW || void 0 === tW ? void 0 : tW.baf2WaterUsedPerS) && void 0 !== NW ? NW : 0, bW = null !== (PW = null === tW || void 0 === tW ? void 0 : tW.baf2WaterNetPerS) && void 0 !== PW ? PW : lW - AW, jW = tW && NL(wW, tW), UW = tW && PL(wW, tW), kW = !0 === (null === tW || void 0 === tW ? void 0 : tW.baf2WaterCryo);
      return (0, MN.jsx)(jP.b, {
        close: cW,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, MN.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, MN.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, MN.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== tW && xW <= 0 ? (0, MN.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, MN.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, MN.jsx)(nE.b, {
                  itemName: kW ? jO.h : FW.l,
                  amount: 0
                })
              }), (0, MN.jsxs)("div", {
                children: [(0, MN.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: wW(kW ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), tW && (0, MN.jsx)("p", {
                  children: EL(wW, tW)
                })]
              })]
            }), (0, MN.jsx)(UP.l, {
              onClick: cW
            })]
          }), tW && jW && (0, MN.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, MN.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, MN.jsx)(OL, {
                stored: ZW,
                cap: xW,
                netPerS: bW,
                cryo: kW,
                rates: WL(wW, kW, lW, AW)
              })
            }), (0, MN.jsx)("div", {
              className: YE()("Baf2WaterThis", {
                Bad: jW.bad
              }),
              children: jW.text
            }), tW.baf2WaterDriven && (0, MN.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, MN.jsx)(HE.c, {
                name: "bolt"
              }), wW(kW ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), UW && (0, MN.jsx)("p", {
              className: "Baf2WaterNext",
              children: UW
            }), (0, MN.jsx)(wL, {
              message: tW
            })]
          })]
        })
      })
    }
    class ZL {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(WW, iW) {
        const OW = this.get(WW);
        OW && null === iW.opLeftMs && null === iW.fuelLeftMs && iW.status === OW.status ? iW = {
          ...iW,
          opLeftMs: OW.opLeftMs,
          fuelLeftMs: OW.fuelLeftMs,
          burning: OW.burning
        } : this.updates++, this.pos = WW, this.view = iW;
        for (const mW of this.listeners) mW()
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

    function xL(WW, iW, OW, mW) {
      return "noFuel" === iW && mW && !PO(vi[WW]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === iW && !0 === (null === OW || void 0 === OW ? void 0 : OW.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === iW && !0 === (null === OW || void 0 === OW ? void 0 : OW.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === iW && !0 === (null === OW || void 0 === OW ? void 0 : OW.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === iW && !0 === (null === OW || void 0 === OW ? void 0 : OW.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : lL(iW, OW) ? "buildAFactory2Game:machineStatus_noInputShort" : function(WW, iW) {
        const OW = vi[WW];
        if ("noFuel" === iW && void 0 !== OW.fuels) return PO(OW) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (OW.mobFarm && ("noInput" === iW || "badInput" === iW)) return `buildAFactory2Game:machineStatus_${iW}MobFarm`;
        if ("outputFull" === iW && (void 0 !== OW.table || OW.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === iW && ai(OW)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== OW.cryoMade && ("noInput" === iW || "noOutlet" === iW || "fluidFull" === iW)) return `buildAFactory2Game:machineStatus_${iW}Mixer`;
        return `buildAFactory2Game:machineStatus_${iW}`
      }(WW, iW)
    }

    function lL(WW, iW) {
      return "noInput" === WW && null !== iW && void 0 !== iW && iW.input && iW.inputShort ? {
        input: iW.input,
        short: iW.inputShort
      } : null
    }

    function AL(WW) {
      return yE(WW) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== WW.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function bL(WW) {
      const iW = (0, eW.qe)(WW);
      return `Baf2Pane Baf2Pane${iW.charAt(0).toUpperCase()}${iW.slice(1)}`
    }

    function jL(WW, iW) {
      const [OW, EW] = (0, mW.useState)((() => WW.get(iW)));
      return (0, mW.useEffect)((() => {
        EW(WW.get(iW));
        const OW = WW.subscribe((() => {
          EW(WW.get(iW))
        }));
        return () => {
          OW(), WW.forget(iW)
        }
      }), [WW, ...iW]), OW
    }

    function UL(WW, iW, OW, mW) {
      const EW = vi[WW],
        NW = iW && EW.couplable ? qi(EW, OW) : EW,
        PW = null !== mW && mO(NW) ? function(WW, iW) {
          var OW;
          return null !== (OW = null !== iW && mO(WW) ? wO[iW] : void 0) && void 0 !== OW ? OW : WW.opMs
        }(NW, tO(mW)) : NW.opMs;
      return PW === NW.opMs ? NW : {
        ...NW,
        opMs: PW
      }
    }

    function kL(WW) {
      let {
        running: iW,
        opMs: OW,
        opLeftMs: mW,
        updateCount: EW
      } = WW;
      return (0, MN.jsx)("div", {
        className: YE()("Baf2MachineProgress", {
          Running: iW
        }),
        children: (0, MN.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: OW / 1e3 + "s",
            animationDelay: null === mW ? void 0 : (mW - OW) / 1e3 + "s"
          }
        }, EW)
      })
    }

    function sL(WW) {
      let {
        running: iW,
        leftMs: OW,
        periodMs: mW,
        updateCount: EW
      } = WW;
      const {
        t: NW
      } = (0, hE.B)(), PW = Math.min(Math.max(null !== OW && void 0 !== OW ? OW : 0, 0), mW), LW = iW && PW > 0, cW = NW("buildAFactory2Game:machineBarFuel");
      return (0, MN.jsx)("div", {
        className: YE()("Baf2FuelBurn", {
          Draining: LW
        }),
        role: "img",
        title: cW,
        "aria-label": cW,
        children: (0, MN.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: LW ? {
            animationDuration: mW / 1e3 + "s",
            animationDelay: (PW - mW) / 1e3 + "s"
          } : {
            transform: `scaleY(${PW/mW})`
          }
        }, EW)
      })
    }

    function ML(WW, iW, OW) {
      let [mW, EW] = OW;
      const NW = 1 !== mW ? JE(iW) : null;
      return {
        amount: mW,
        have: EW,
        item: WW(NW || (0, iN.c)(iW))
      }
    }

    function KL(WW) {
      return mO(WW) ? "buildAFactory2Game:machineBarMining" : EO(WW) ? "buildAFactory2Game:machineBarCutting" : void 0 !== WW.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function SL(WW) {
      var iW, OW, mW, EW, NW, PW, LW, cW, wW, tW, ZW, xW, lW, AW, bW, jW, UW, kW, sW;
      let {
        kind: MW,
        CE: KW,
        store: SW,
        power: YW,
        renderSlot: yW
      } = WW;
      const {
        t: TW
      } = (0, hE.B)(), JW = jL(SW, KW), hW = vi[MW], HW = null !== (iW = null === JW || void 0 === JW ? void 0 : JW.coupled) && void 0 !== iW && iW, nW = null !== (OW = null === JW || void 0 === JW ? void 0 : JW.couplerLevel) && void 0 !== OW ? OW : 1, uW = UL(MW, HW, nW, null !== (mW = null === JW || void 0 === JW || null === (EW = JW.dug) || void 0 === EW ? void 0 : EW.item) && void 0 !== mW ? mW : null), oW = null !== (NW = null === JW || void 0 === JW ? void 0 : JW.status) && void 0 !== NW ? NW : null, dW = null !== (PW = null === JW || void 0 === JW ? void 0 : JW.power) && void 0 !== PW ? PW : null, eW = null !== (LW = null === JW || void 0 === JW ? void 0 : JW.opLeftMs) && void 0 !== LW ? LW : null, vW = null !== (cW = null === JW || void 0 === JW ? void 0 : JW.dug) && void 0 !== cW ? cW : null, gW = null !== vW && mO(hW) ? wO[null !== (wW = tO(vW.item)) && void 0 !== wW ? wW : ""] : void 0, DW = void 0 === gW ? null : 6e4 / gW, VW = null !== (tW = null === JW || void 0 === JW ? void 0 : JW.powerCap) && void 0 !== tW ? tW : 4e3, pW = null !== (ZW = null === JW || void 0 === JW ? void 0 : JW.tier) && void 0 !== ZW ? ZW : null, fW = void 0 !== uW.powerMade, CW = null !== hW.fuelSlot ? yW(hW.fuelSlot) : null, XW = Bi(hW), BW = !HW && !0 === (null === JW || void 0 === JW ? void 0 : JW.fuelFed), RW = !HW && !0 === (null === JW || void 0 === JW ? void 0 : JW.fuelFeeds), GW = null !== hW.fuelSlot && !HW, IW = null !== (xW = null === JW || void 0 === JW ? void 0 : JW.fuelLeftMs) && void 0 !== xW ? xW : null, aW = function(WW, iW, OW) {
        var mW;
        const EW = null === iW ? void 0 : LO[iW];
        return Math.max(null !== (mW = null !== EW && void 0 !== EW ? EW : OW) && void 0 !== mW ? mW : 0, WW.opMs)
      }(uW, null !== (lW = null === JW || void 0 === JW ? void 0 : JW.burning) && void 0 !== lW ? lW : null, IW), rW = null !== (AW = null === JW || void 0 === JW ? void 0 : JW.fuelKeep) && void 0 !== AW ? AW : null, zW = null === oW ? null : xL(MW, oW, JW, BW), FW = null === oW ? null : lL(oW, JW);
      return (0, MN.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, MN.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, MN.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: TW((0, iN.c)(MW))
          }), vW && (0, MN.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [TW("Tree Cutter" === MW ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, MN.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, MN.jsx)(nE.b, {
                itemName: vW.item,
                amount: 0
              })
            }), (0, MN.jsx)(uE.d, {
              text: vW.name
            })]
          }), null !== DW && (0, MN.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: TW("buildAFactory2Game:machineDigsFixed", {
              perMin: String(DW)
            })
          }), (null === JW || void 0 === JW ? void 0 : JW.field) && (0, MN.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, MN.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, MN.jsx)(nE.b, {
                itemName: "Wheat",
                amount: 0
              })
            }), TW("buildAFactory2Game:machineField", {
              planted: String(JW.field[0]),
              ripe: String(JW.field[1])
            })]
          }), (0, MN.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, MN.jsxs)("div", {
              className: YE()("Baf2MachineColumn", {
                Baf2Burns: GW
              }),
              children: [null !== uW.inputSlot && (0, MN.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, MN.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: TW(AL(uW))
                }), yW(uW.inputSlot)]
              }), null !== hW.fuelSlot && !HW && (0, MN.jsxs)("div", {
                className: YE()("Baf2MachineSlot", {
                  Baf2FuelFed: BW
                }),
                children: [(0, MN.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [BW && (0, MN.jsx)(HE.c, {
                    name: "fire"
                  }), TW("buildAFactory2Game:machineFuel")]
                }), (0, MN.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, MN.jsx)(sL, {
                    running: "running" === oW,
                    leftMs: IW,
                    periodMs: aW,
                    updateCount: SW.updateCount
                  }), CW]
                })]
              }), null !== hW.fuelSlot && HW && (0, MN.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, MN.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: TW("buildAFactory2Game:machineFuel")
                }), (0, MN.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: TW("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": TW("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, MN.jsx)(HE.c, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, MN.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, MN.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: TW(KL(uW))
              }), (0, MN.jsx)(kL, {
                running: "running" === oW,
                opMs: uW.opMs,
                opLeftMs: eW,
                updateCount: SW.updateCount
              })]
            }), uW.outputSlots.length > 0 && (0, MN.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, MN.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: TW("buildAFactory2Game:machineOutput")
              }), (0, MN.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: uW.outputSlots.map((WW => (0, MN.jsx)("div", {
                  children: yW(WW)
                }, WW)))
              })]
            }), null !== dW && fW && (0, MN.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, MN.jsx)("div", {
                style: {
                  height: 100 * dW / VW + "%"
                }
              })
            })]
          }), GW && null !== rW && (0, MN.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, MN.jsx)(HE.c, {
              name: "arrows-rotate"
            }), TW(EO(uW) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(rW)
            })]
          }), (BW || RW) && (0, MN.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, MN.jsx)(HE.c, {
              name: "fire"
            }), TW(BW ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), hW.couplable && (0, MN.jsx)(RP, {
            kind: MW,
            tier: pW,
            coupled: HW,
            level: nW,
            slot: XW === hW.fuelSlot ? CW : null !== XW ? yW(XW) : null
          }), null !== dW && !fW && !0 === (null === JW || void 0 === JW ? void 0 : JW.reactorPowered) && (0, MN.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: TW("buildAFactory2Game:machineReactorPowered")
          }), null !== dW && !fW && !0 !== (null === JW || void 0 === JW ? void 0 : JW.reactorPowered) && (0, MN.jsx)(yP, {
            stored: dW,
            cap: VW,
            rates: null !== (bW = null === JW || void 0 === JW ? void 0 : JW.powerRates) && void 0 !== bW ? bW : null
          }), (null === JW || void 0 === JW ? void 0 : JW.water) && (0, MN.jsx)(mL, {
            water: JW.water,
            at: KW,
            side: JW.cryo ? "waterIn" : null
          }), (null === JW || void 0 === JW ? void 0 : JW.cryo) && (0, MN.jsx)(mL, {
            water: JW.cryo,
            at: KW,
            side: "cryoOut"
          }), null !== JW && void 0 !== JW && JW.inertCoupler ? (0, MN.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: TW("buildAFactory2Game:machineStatus_couplerOff", {
              item: (0, iN.g)(TW, JW.inertCoupler)
            })
          }) : null !== zW && (0, MN.jsx)("div", {
            className: YE()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== oW
            }),
            children: TW(zW, FW ? ML(TW, FW.input, FW.short) : void 0)
          })]
        }), (0, MN.jsxs)("div", {
          className: YE()("Baf2MachineSide", {
            Baf2SynthSide: ai(hW)
          }),
          children: [ai(hW) && (0, MN.jsx)(BP, {
            CE: KW,
            taught: null !== (jW = null === JW || void 0 === JW ? void 0 : JW.taught) && void 0 !== jW ? jW : null
          }, KW.join(",")), fW && (0, MN.jsx)(JP, {
            kind: MW,
            def: uW,
            CE: KW,
            power: YW,
            stored: null !== dW && void 0 !== dW ? dW : 0,
            cap: VW
          }), qW(hW) && (0, MN.jsx)(fP, {
            CE: KW,
            input: null !== (UW = null === JW || void 0 === JW ? void 0 : JW.input) && void 0 !== UW ? UW : null,
            drops: null !== (kW = null === JW || void 0 === JW ? void 0 : JW.farm) && void 0 !== kW ? kW : null,
            seconds: String(uW.opMs / 1e3)
          }), !fW && !qW(hW) && !ai(hW) && (0, MN.jsx)(FN, {
            kind: MW,
            def: uW,
            input: null !== (sW = null === JW || void 0 === JW ? void 0 : JW.input) && void 0 !== sW ? sW : null,
            tier: null !== pW && void 0 !== pW ? pW : 1,
            noSeeds: !0 === (null === JW || void 0 === JW ? void 0 : JW.noSeeds)
          })]
        })]
      })
    }

    function YL(WW, iW, OW, mW) {
      var EW;
      const NW = vi[WW],
        PW = [NW.inputSlot, NW.fuelSlot, ...null !== (EW = NW.inputSlots) && void 0 !== EW ? EW : []].filter((WW => null !== WW));
      return {
        render: EW => {
          let {
            CE: NW,
            renderSlot: PW
          } = EW;
          return (0, MN.jsx)(vP.Provider, {
            value: mW,
            children: (0, MN.jsx)(SL, {
              kind: WW,
              CE: NW,
              store: iW,
              power: OW,
              renderSlot: PW
            })
          })
        },
        quickMoveRange: PW.length > 0 ? [Math.min(...PW), Math.max(...PW) + 1] : [0, 0],
        className: bL(WW)
      }
    }
    const yL = "Assembler";

    function TL(WW) {
      var iW, OW, mW, EW, NW, PW, LW, cW, wW;
      let {
        CE: tW,
        store: ZW,
        renderSlot: xW
      } = WW;
      const {
        t: lW
      } = (0, hE.B)(), AW = jL(ZW, tW), bW = null !== (iW = null === AW || void 0 === AW ? void 0 : AW.tier) && void 0 !== iW ? iW : 1, jW = null !== (OW = null === AW || void 0 === AW ? void 0 : AW.taught) && void 0 !== OW ? OW : null, UW = Qi(yL, {
        coupled: !1,
        taught: jW
      }), kW = null !== (mW = UW.bench) && void 0 !== mW ? mW : null, sW = null !== (EW = null === AW || void 0 === AW ? void 0 : AW.status) && void 0 !== EW ? EW : null, MW = null !== (NW = null === AW || void 0 === AW ? void 0 : AW.power) && void 0 !== NW ? NW : null, KW = null !== (PW = null === AW || void 0 === AW ? void 0 : AW.powerCap) && void 0 !== PW ? PW : 4e3;
      return (0, MN.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, MN.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, MN.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: lW((0, iN.c)(yL))
          }), kW && (0, MN.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [lW("buildAFactory2Game:benchMakes"), (0, MN.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, MN.jsx)(nE.b, {
                itemName: kW.output,
                amount: 0
              })
            }), (null === AW || void 0 === AW ? void 0 : AW.taughtName) && (0, MN.jsx)(uE.d, {
              text: AW.taughtName
            }), kW.outputAmount > 1 && (0, MN.jsxs)("span", {
              children: ["\xd7", kW.outputAmount]
            })]
          }), !kW && (0, MN.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: lW("buildAFactory2Game:benchTeachHint")
          }), (0, MN.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, MN.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (LW = UW.inputSlots) && void 0 !== LW ? LW : []).map(((WW, iW) => {
                const OW = null === kW || void 0 === kW ? void 0 : kW.inputs[iW];
                return (0, MN.jsxs)("div", {
                  className: YE()("Baf2BenchInput", {
                    Spare: !OW
                  }),
                  children: [(0, MN.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [xW(WW), OW && (0, MN.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, MN.jsx)(nE.b, {
                        itemName: OW.item,
                        amount: 0
                      })
                    })]
                  }), (0, MN.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: OW ? `\xd7${OW.amount}` : "\xa0"
                  })]
                }, WW)
              }))
            }), (0, MN.jsx)(kL, {
              running: "running" === sW,
              opMs: UW.opMs,
              opLeftMs: null !== (cW = null === AW || void 0 === AW ? void 0 : AW.opLeftMs) && void 0 !== cW ? cW : null,
              updateCount: ZW.updateCount
            }), (0, MN.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, MN.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: lW("buildAFactory2Game:machineOutput")
              }), (0, MN.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: UW.outputSlots.map((WW => (0, MN.jsx)("div", {
                  children: xW(WW)
                }, WW)))
              })]
            })]
          }), null !== MW && (0, MN.jsx)(yP, {
            stored: MW,
            cap: KW,
            rates: null !== (wW = null === AW || void 0 === AW ? void 0 : AW.powerRates) && void 0 !== wW ? wW : null
          }), null !== sW && (0, MN.jsx)("div", {
            className: YE()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== sW
            }),
            children: lW(xL(yL, sW, AW, !1))
          }), kW && kW.inputs.length > 1 && (0, MN.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: lW("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, MN.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, MN.jsx)(WP, {
            taught: jW,
            tier: bW
          }), kW && (0, MN.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: lW("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function JL(WW) {
      var iW;
      const OW = null !== (iW = vi[yL].inputSlots) && void 0 !== iW ? iW : [];
      return {
        render: iW => {
          let {
            CE: OW,
            renderSlot: mW
          } = iW;
          return (0, MN.jsx)(TL, {
            CE: OW,
            store: WW,
            renderSlot: mW
          })
        },
        quickMoveRange: [Math.min(...OW), Math.max(...OW) + 1],
        className: bL(yL)
      }
    }
    var hL = OW(100),
      HL = OW(1107),
      nL = OW(2937);
    const uL = 600,
      oL = .5,
      dL = 4,
      eL = 1200,
      vL = 140,
      gL = 100,
      DL = 32,
      VL = 16,
      pL = 100.5,
      fL = 90,
      CL = 1.5,
      XL = 50;

    function BL(WW) {
      switch (dO(WW)) {
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
    const qL = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function RL(WW) {
      const iW = Math.ceil(60 * WW / gL);
      return {
        fuel: Math.max(DL, iW),
        waste: Math.max(VL, iW)
      }
    }

    function GL(WW, iW, OW) {
      const [mW, EW, NW] = [WW - 2, iW - 2, OW - 2];
      return 2 * (mW * EW + EW * NW + NW * mW) * vL
    }

    function IL(WW, iW, OW) {
      return Math.max(0, WW - 2) * Math.max(0, iW - 2) * Math.max(0, OW - 2)
    }

    function aL(WW, iW) {
      const [OW, mW, EW] = WW, NW = OW * mW * EW, PW = new Float32Array(NW);
      let LW = 0,
        cW = 0,
        wW = 0,
        tW = 0,
        ZW = 0;
      const xW = (WW, NW, PW) => WW < 0 || WW >= OW || NW < 0 || NW >= mW || PW < 0 || PW >= EW ? 0 : iW[(NW * EW + PW) * OW + WW];
      for (let jW = 0; jW < mW; jW++)
        for (let WW = 0; WW < EW; WW++)
          for (let mW = 0; mW < OW; mW++) {
            const NW = (jW * EW + WW) * OW + mW,
              lW = iW[NW];
            if (1 === lW) {
              LW++;
              let iW = 0;
              for (const [OW, EW, NW] of qL) {
                const PW = xW(mW + OW, jW + EW, WW + NW);
                1 !== PW && 2 !== PW || iW++
              }
              PW[NW] = uL * (1 + oL * Math.min(iW, dL)), tW += PW[NW]
            } else if (2 === lW) cW++;
            else if (3 === lW) {
              wW++;
              qL.some((iW => {
                let [OW, EW, NW] = iW;
                return 1 === xW(mW + OW, jW + EW, WW + NW)
              })) && (ZW += eL)
            }
          }
      const lW = GL(OW + 2, mW + 2, EW + 2),
        AW = Math.min(tW, ZW, lW),
        bW = LW > 0 ? tW * gL / LW : 0;
      return {
        rods: LW,
        graphite: cW,
        channels: wW,
        fuelHeat: tW,
        cooling: ZW,
        size: lW,
        max: AW,
        vol: NW,
        powerPerUnit: bW,
        pelletsPerMin: bW > 0 ? AW / bW * 60 : 0,
        waterPerS: AW * FW.q,
        rodHeat: PW
      }
    }
    const rL = 0,
      zL = 1,
      FL = 6,
      QL = 7,
      Wc = 8;

    function ic(WW, iW) {
      const [OW, mW, EW] = WW, NW = new Uint8Array(OW * mW * EW), PW = (WW, NW, PW) => WW < 0 || WW >= OW || NW < 0 || NW >= mW || PW < 0 || PW >= EW ? 0 : iW[(NW * EW + PW) * OW + WW];
      for (let LW = 0; LW < mW; LW++)
        for (let WW = 0; WW < EW; WW++)
          for (let mW = 0; mW < OW; mW++) {
            const cW = (LW * EW + WW) * OW + mW,
              wW = iW[cW];
            if (1 === wW) {
              let iW = 0;
              for (const [OW, EW, NW] of qL) {
                const cW = PW(mW + OW, LW + EW, WW + NW);
                iW += 1 === cW || 2 === cW ? 1 : 0
              }
              NW[cW] = zL + Math.min(iW, dL)
            } else if (3 === wW) {
              const iW = qL.some((iW => {
                let [OW, EW, NW] = iW;
                return 1 === PW(mW + OW, LW + EW, WW + NW)
              }));
              NW[cW] = iW ? FL : QL
            } else 2 === wW && (NW[cW] = Wc)
          }
      return NW
    }

    function Oc(WW) {
      return WW.fuelHeat <= WW.cooling && WW.fuelHeat <= WW.size ? "fuel" : WW.cooling <= WW.size ? "cooling" : "size"
    }
    const mc = fL;

    function Ec(WW, iW, OW) {
      return Math.round(WW * iW * OW * 25e3 * (1 + .25 * (Math.min(WW, iW, OW) - 2)))
    }

    function Nc(WW) {
      return Math.max(0, Math.min(FW.f, WW))
    }

    function Pc(WW, iW, OW) {
      const mW = iW * Nc(OW);
      return WW <= 0 ? 0 : mW > 0 ? Math.min(200, 100 * WW / mW) : 200
    }

    function Lc(WW, iW) {
      const OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? CL : 1;
      return Math.min(WW.fuelHeat * OW, WW.cooling * Nc(iW), WW.size * OW)
    }

    function cc(WW) {
      return 2 + WW / 10
    }
    const wc = "buildAFactory2Game:";

    function tc(WW) {
      var iW;
      return null !== (iW = WW.baf2RxMood) && void 0 !== iW ? iW : function(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const OW = [
          ["calm", 50],
          ["warm", mc],
          ["hot", pL]
        ];
        for (const [mW, EW] of OW)
          if (WW < EW + (mW === iW ? 3 : 0)) return mW;
        return "alarm"
      }(WW.baf2RxHeat)
    }
    const Zc = 120;

    function xc(WW) {
      const iW = WW.baf2RxState;
      if ("running" === iW && WW.baf2RxHeat > pL) return {
        label: `${wc}rxState_tooHot`,
        tone: "bad",
        fix: `${wc}rxFix_tooHot`
      };
      switch (iW) {
        case "running":
          return {
            label: `${wc}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${wc}rxState_idle`, tone: "off", fix: `${wc}rxFix_idle`
          };
        case "scram":
          return {
            label: `${wc}rxState_scram`, tone: "off", fix: WW.baf2RxHeat < XL ? `${wc}rxFix_scramCool` : `${wc}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${wc}rxState_${iW}`, tone: "off", fix: `${wc}rxFix_${iW}`
          };
        case "melted":
          return {
            label: `${wc}rxState_melted`, tone: "bad", fix: `${wc}rxFix_melted`
          };
        default:
          return {
            label: `${wc}rxState_${iW}`, tone: "warn", fix: `${wc}rxFix_${iW}`
          }
      }
    }

    function lc(WW) {
      const [iW, OW, mW] = WW.baf2RxStats;
      return {
        fuelHeat: iW,
        cooling: OW * (WW.baf2RxCryo ? Math.max(1, Nc(WW.baf2RxWater / 100)) : 1),
        size: mW
      }
    }

    function Ac(WW) {
      var iW;
      const OW = "idle" === WW.baf2RxState || "running" === WW.baf2RxState && WW.baf2RxHeat <= pL || "scram" === WW.baf2RxState && WW.baf2RxHeat < XL;
      if (0 === (WW.baf2RxFlags & Mi) || !WW.baf2RxFormed || !OW) return null;
      const {
        fuelHeat: mW,
        cooling: EW,
        size: NW
      } = lc(WW), PW = Math.min(mW, EW, NW), LW = Oc({
        fuelHeat: mW,
        cooling: EW,
        size: NW
      }), cW = "cooling" === LW && !0 === WW.baf2RxCryoOpen && !WW.baf2RxCryo, wW = null !== (iW = WW.baf2RxCells) && void 0 !== iW ? iW : "", tW = ("fuel" === LW || "cooling" === LW && !0 === WW.baf2RxCryo) && wW.length > 0 && !wW.includes(String(0)), ZW = cW ? "Cryo" : "scram" === WW.baf2RxState ? "Off" : "";
      return PW < 12e3 ? {
        key: `${wc}rxGrow_${tW?"full":LW}${ZW}`,
        amount: PW
      } : null
    }

    function bc(WW, iW) {
      return WW[0] === iW[0] && WW[1] === iW[1] && WW[2] === iW[2]
    }

    function jc(WW) {
      return [...WW].sort(((WW, iW) => Number(iW[2] < iW[1]) - Number(WW[2] < WW[1])))
    }

    function Uc(WW, iW) {
      return iW.some((iW => {
        let [OW, mW] = iW;
        return !(mW <= 0) && ["edge", "cap", "wall", "inside"].some((iW => OW === Lm(WW, iW)))
      }))
    }

    function kc(WW, iW, OW) {
      const mW = WW.baf2RxFuel - WW.baf2RxPu > 0 ? OW : 0;
      return {
        full: WW.baf2RxWaste > iW - 3,
        fullInS: mW > 0 ? Math.max(0, iW - WW.baf2RxWaste) / mW : null
      }
    }
    const sc = {
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

    function Mc(WW) {
      return Kc[WW]
    }
    const Kc = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function Sc(WW) {
      let [iW, OW, mW] = WW;
      return Math.ceil(GL(iW, OW, mW) * FW.q)
    }

    function Yc(WW, iW) {
      return "battery" === WW ? iW[0] * iW[1] * iW[2] : function(WW) {
        let [iW, OW, mW] = WW;
        return iW * OW * mW - Math.max(0, iW - 2) * Math.max(0, OW - 2) * Math.max(0, mW - 2)
      }(iW) - 1
    }

    function yc(WW) {
      const iW = Math.max(0, WW);
      if (iW < 10) return String(Math.round(10 * iW) / 10);
      if (iW < 1e4) return Math.round(iW).toLocaleString("en-US");
      if (iW < 1e6) return `${iW<1e5?(Math.floor(iW/100)/10).toFixed(1):Math.floor(iW/1e3)}k`;
      const OW = iW / 1e6;
      return `${OW<10?(Math.floor(100*OW)/100).toFixed(2):OW<100?(Math.floor(10*OW)/10).toFixed(1):Math.floor(OW)}M`
    }

    function Tc(WW) {
      return WW <= 0 ? "0" : WW >= 10 ? String(Math.round(WW)) : WW.toFixed(WW >= 1 ? 1 : 2)
    }

    function Jc(WW) {
      const iW = Wm(WW, 0),
        OW = Wm(WW, rO(WW) - 1);
      return {
        lo: [Math.min(iW[0], OW[0]), Math.min(iW[1], OW[1]), Math.min(iW[2], OW[2])],
        hi: [Math.max(iW[0], OW[0]) + 1, Math.max(iW[1], OW[1]) + 1, Math.max(iW[2], OW[2]) + 1]
      }
    }

    function hc(WW, iW, OW) {
      const mW = [iW[0] - WW[0], iW[1] - WW[1], iW[2] - WW[2]],
        EW = [(WW[0] + iW[0]) / 2, (WW[1] + iW[1]) / 2, (WW[2] + iW[2]) / 2],
        NW = [];
      for (let PW = 0; PW < 3; PW++) {
        const LW = (PW + 1) % 3,
          cW = (PW + 2) % 3;
        for (const wW of [WW[LW], iW[LW]])
          for (const tW of [WW[cW], iW[cW]]) {
            const WW = [0, 0, 0],
              iW = [OW, OW, OW];
            WW[PW] = EW[PW], iW[PW] = mW[PW] + OW, WW[LW] = wW, WW[cW] = tW, NW.push([WW, iW])
          }
      }
      return NW
    }
    const Hc = "buildAFactory2Game:",
      nc = [`${Hc}colNorth`, `${Hc}colEast`, `${Hc}colSouth`, `${Hc}colWest`];

    function uc(WW, iW) {
      const [OW, mW, EW] = WW.baf2ColAt;
      return `baf2col ${OW} ${mW} ${EW} ${iW}`
    }

    function oc(WW) {
      return function(WW) {
        if (!Number.isFinite(WW)) return "";
        const iW = Math.max(1, Math.round(WW));
        if (iW < 60) return `${iW}s`;
        const OW = iW % 60;
        return 0 === OW ? iW / 60 + "m" : `${Math.floor(iW/60)}m ${OW}s`
      }(function(WW) {
        const iW = cm.FOCUS_BY_LASERS[Math.max(0, Math.min(4, WW))];
        return iW > 0 ? cm.NOVA_FOCUS / iW : 1 / 0
      }(WW))
    }

    function dc(WW) {
      const iW = Math.abs(Math.round(WW));
      return iW < 1e3 ? Math.round(WW).toLocaleString("en-US") : iW < 1e6 ? `${iW<1e5?(WW/1e3).toFixed(1).replace(/\.0$/,""):Math.round(WW/1e3)}k` : `${(WW/1e6).toFixed(iW<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function ec(WW, iW, OW) {
      if (Am(iW) >= 0) {
        const iW = function(WW, iW) {
          return WW.find((WW => {
            let {
              focus: OW
            } = WW;
            return OW[0] === iW[0] && OW[2] === iW[2] && (iW[1] === OW[1] || iW[1] === OW[1] - 1)
          }))
        }(WW, OW);
        if (!iW) return null;
        const EW = function(WW) {
          let iW = 0,
            OW = 0;
          for (let mW = 0; mW < 4; mW++) iW += WW.laser[mW] ? 1 : 0, OW += WW.live[mW] ? 1 : 0;
          return {
            lasers: iW,
            live: OW,
            focusPerS: cm.FOCUS_BY_LASERS[OW],
            drawPerS: cm.LASER_DRAW * OW
          }
        }({
          laser: iW.lasers,
          live: iW.live
        });
        if (0 === EW.lasers || "noLasers" === iW.state) return {
          key: `${Hc}lookColNoLasers`
        };
        if (0 === EW.live) return {
          key: `${Hc}lookColOff_blocked`
        };
        if (!(iW.on && EW.live > 0) && ("running" !== (mW = iW.state) && "slowed" !== mW)) return {
          key: `${Hc}lookColOff_${iW.state}`
        };
        if (EW.live < EW.lasers) return {
          key: `${Hc}lookColLasersSome`,
          params: {
            lasers: String(EW.lasers),
            live: String(EW.live)
          }
        };
        const NW = iW.open.filter(Boolean).length;
        return NW < 4 ? {
          key: `${Hc}lookColLasersSpots`,
          params: {
            live: String(EW.live),
            spots: String(NW),
            time: oc(EW.live)
          }
        } : {
          key: `${Hc}lookColLasers`,
          params: {
            live: String(EW.live),
            time: oc(EW.live)
          }
        }
      }
      var mW;
      if (!bm(iW)) return null;
      const EW = function(WW, iW) {
        for (const OW of WW) {
          const WW = sm(OW.focus, [iW[0], iW[1], iW[2]]);
          if (WW && WW.TP === cm.LASER_D && OW.lasers[WW.dir]) return {
            entry: OW,
            dir: WW.dir
          }
        }
        return null
      }(WW, OW);
      if (!EW) return {
        key: `${Hc}lookLaserNoCollider`
      };
      const {
        entry: NW,
        dir: PW
      } = EW;
      return NW.open[PW] ? NW.live[PW] ? {
        key: NW.on ? `${Hc}lookLaserFiring` : `${Hc}lookLaserReady`
      } : {
        key: `${Hc}lookLaserBlocked`
      } : {
        key: `${Hc}lookLaserClosed`
      }
    }

    function vc(WW, iW) {
      const OW = [];
      for (let mW = 1; mW < cm.LASER_D; mW++) WW & 1 << iW * (cm.LASER_D - 1) + mW - 1 && OW.push(mW);
      return OW
    }
    const gc = {
      firing: `${Hc}colSlotFiring`,
      ready: `${Hc}colSlotReady`,
      blocked: `${Hc}colSlotBlocked`,
      empty: `${Hc}colSlotEmpty`,
      closed: `${Hc}colSlotClosed`
    };

    function Dc(WW, iW, OW, mW) {
      let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const NW = PE(WW),
        PW = PE(iW),
        LW = PE(OW),
        cW = LW.filter(Boolean).length,
        wW = NW.filter(Boolean).length,
        tW = [0, 1, 2, 3].map((WW => PW[WW] ? NW[WW] ? LW[WW] ? mW ? "firing" : "ready" : "blocked" : (WW => vc(EW, WW).length > 0)(WW) ? "blocked" : "empty" : "closed")),
        ZW = tW.indexOf("blocked"),
        xW = ZW < 0 && wW > 0 ? tW.indexOf("empty") : -1;
      return tW.map(((WW, iW) => {
        const OW = iW === ZW ? {
          key: `${Hc}colSlotClear`
        } : iW === xW ? {
          key: `${Hc}colSlotAdd`,
          params: {
            time: oc(Math.min(4, cW + 1))
          }
        } : null;
        return {
          dir: iW,
          tone: WW,
          title: {
            key: "blocked" !== WW || NW[iW] ? gc[WW] : `${Hc}colSlotGap`,
            keys: {
              dir: nc[iW]
            }
          },
          hint: OW
        }
      }))
    }

    function Vc(WW) {
      var iW;
      return "noPower" === WW.baf2ColState && WW.baf2ColRxState ? xc({
        baf2RxState: WW.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (iW = WW.baf2ColRxHeat) && void 0 !== iW ? iW : 0
      }) : null
    }

    function pc(WW) {
      const iW = PE(WW.baf2ColSpots).filter(Boolean).length,
        OW = PE(WW.baf2ColLive);
      let mW = 0,
        EW = 0;
      return PE(WW.baf2ColLasers).forEach(((WW, iW) => {
        WW && (mW++, EW += OW[iW] ? 0 : 1)
      })), EW > 0 ? {
        key: `${Hc}colSubSome`,
        params: {
          blocked: String(EW),
          lasers: String(mW)
        }
      } : iW < 4 ? {
        key: `${Hc}colSubSpots`,
        params: {
          lasers: String(mW),
          spots: String(iW)
        }
      } : {
        key: `${Hc}colSub`,
        params: {
          lasers: String(mW)
        }
      }
    }

    function fc(WW) {
      const iW = Vc(WW);
      if ("idle" === WW.baf2ColRxState && iW) return {
        key: `${Hc}colState_noPowerIdle`
      };
      if (iW) return {
        key: `${Hc}colState_noPowerReactor`,
        keys: {
          state: iW.label
        }
      };
      if ("noInput" !== WW.baf2ColState) return {
        key: `${Hc}colState_${WW.baf2ColState}`
      };
      const OW = String(Math.max(0, cm.NOVA_SA - WW.baf2ColSa)),
        mW = String(Math.max(0, cm.NOVA_GD - WW.baf2ColGd));
      return "0" !== OW && "0" !== mW ? {
        key: `${Hc}colState_noInput`,
        params: {
          sa: OW,
          gd: mW
        }
      } : "0" !== OW ? {
        key: `${Hc}colState_noStarAlloy`,
        params: {
          sa: OW
        }
      } : "0" !== mW ? {
        key: `${Hc}colState_noGlowDust`,
        params: {
          gd: mW
        }
      } : {
        key: `${Hc}colState_running`
      }
    }

    function Cc(WW) {
      return WW.baf2ColP < 0 ? `${Hc}colNext` : function(WW) {
        const iW = WW.baf2ColState;
        return WW.baf2ColP >= 0 && ("blocked" === iW || "noLasers" === iW || "noPower" === iW)
      }(WW) ? `${Hc}colStalled` : null === Xc(WW) ? `${Hc}colMaking` : `${Hc}colNovaIn`
    }

    function Xc(WW) {
      if (WW.baf2ColP < 0 || WW.baf2ColWant <= 0) return null;
      const iW = WW.baf2ColFocusPerS * Math.min(1, WW.baf2ColDraw / WW.baf2ColWant);
      return iW > 0 ? Math.max(0, cm.NOVA_FOCUS - WW.baf2ColP) / iW : null
    }

    function Bc(WW, iW) {
      const OW = [];
      for (let mW = 1; mW <= 3; mW++) {
        const EW = [WW[0], WW[1] - mW, WW[2]];
        if (!iW(EW)) return OW;
        OW.push(EW)
      }
      return []
    }

    function qc(WW, iW) {
      const OW = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let mW = 0; mW < 4; mW++) {
        const EW = mW,
          NW = km(WW.focus, EW, cm.LASER_D);
        if (WW.lasers[mW] || !WW.open[mW] || !iW(NW)) continue;
        const PW = [];
        for (let OW = 1; OW < cm.LASER_D; OW++) {
          const mW = km(WW.focus, EW, OW);
          iW(mW) || PW.push(mW)
        }
        OW.supports.push(...Bc(NW, iW)), 0 === PW.length ? OW.free.push(NW) : (OW.blocked.push(NW), OW.gaps.push(...PW))
      }
      return OW
    }
    const Rc = cm.LASER_D - .25,
      Gc = 4,
      Ic = 2,
      ac = 16;
    const rc = {
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
        blendMode: nL.d.Standard,
        soft: !0
      },
      zc = {
        green: rc,
        pink: {
          ...rc,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function Fc(WW, iW) {
      const OW = {
        ...iW.params
      };
      for (const [EW, NW] of Object.entries(null !== (mW = iW.keys) && void 0 !== mW ? mW : {})) {
        var mW;
        OW[EW] = WW(NW)
      }
      return OW
    }
    const Qc = "buildAFactory2Game:",
      Ww = 2 * cm.LASER_D + 1,
      iw = cm.LASER_D;

    function Ow(WW) {
      return WW(`${Qc}colFocusTip`, {
        need: dc(cm.NOVA_FOCUS)
      })
    }

    function mw(WW, iW) {
      return WW(iW.key, Fc(WW, iW))
    }

    function Ew(WW) {
      const iW = WW.getStatus();
      return {
        status: iW,
        entry: iW ? WW.entryAtRoot(iW.baf2ColAt) : void 0
      }
    }

    function Nw(WW, iW) {
      return {
        left: 100 * (iw + WW) / Ww + "%",
        top: 100 * (iw + iW) / Ww + "%"
      }
    }

    function Pw(WW) {
      let {
        status: iW,
        entry: OW
      } = WW;
      const mW = PE(iW.baf2ColLasers),
        EW = PE(iW.baf2ColSpots),
        NW = PE(iW.baf2ColLive),
        PW = !0 === (null === OW || void 0 === OW ? void 0 : OW.on),
        LW = cm.LASER_D,
        cW = [];
      for (let lW = 0; lW < 4; lW++) {
        const [WW, , iW] = Um[lW];
        if (NW[lW]) {
          const OW = 100 * (LW - 1) / Ww,
            mW = WW + iW > 0 ? 100 * (iw + 1) / Ww : 100 * (iw - (LW - 1)) / Ww,
            EW = 100 * (iw + .35) / Ww,
            NW = 30 / Ww,
            wW = 0 !== WW ? {
              left: `${mW}%`,
              width: `${OW}%`,
              top: `${EW}%`,
              height: `${NW}%`
            } : {
              top: `${mW}%`,
              height: `${OW}%`,
              left: `${EW}%`,
              width: `${NW}%`
            };
          cW.push((0, MN.jsx)("i", {
            className: YE()("Baf2ColDiagramBeam", {
              Off: !PW
            }),
            style: wW
          }, `beam${lW}`))
        }
        const OW = mW[lW] ? "Baf2ColDiagramLaser" : EW[lW] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        cW.push((0, MN.jsx)("i", {
          className: OW,
          style: Nw(WW * LW, iW * LW)
        }, `spot${lW}`))
      }
      for (let lW = 0; lW < 4; lW++) {
        if (mW[lW] || !EW[lW]) continue;
        const [WW, , OW] = Um[lW];
        for (const mW of vc(null !== (wW = iW.baf2ColGaps) && void 0 !== wW ? wW : 0, lW)) {
          var wW;
          cW.push((0, MN.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: Nw(WW * mW, OW * mW)
          }, `gap${lW},${mW}`))
        }
      }
      for (const [lW, , AW] of null !== (tW = null === OW || void 0 === OW ? void 0 : OW.blockers) && void 0 !== tW ? tW : []) {
        var tW, ZW, xW;
        const WW = lW - (null !== (ZW = null === OW || void 0 === OW ? void 0 : OW.focus[0]) && void 0 !== ZW ? ZW : 0),
          iW = AW - (null !== (xW = null === OW || void 0 === OW ? void 0 : OW.focus[2]) && void 0 !== xW ? xW : 0);
        cW.push((0, MN.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: Nw(WW, iW)
        }, `block${WW},${iW}`))
      }
      return (0, MN.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [cW, (0, MN.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function Lw(WW) {
      let {
        status: iW
      } = WW;
      const {
        t: OW
      } = (0, hE.B)(), mW = PE(iW.baf2ColLive).filter(Boolean).length;
      return (0, MN.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, MN.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: Ow(OW),
          children: OW(`${Qc}colLadder`)
        }), (0, MN.jsx)("ul", {
          children: [1, 2, 3, 4].map((WW => (0, MN.jsx)("li", {
            className: YE()({
              On: WW === mW
            }),
            children: OW(`${Qc}colLadderChip`, {
              lasers: String(WW),
              time: oc(WW)
            })
          }, WW)))
        })]
      })
    }

    function ww(WW) {
      let {
        item: iW,
        BL: OW,
        need: mW,
        cap: EW
      } = WW;
      const {
        t: NW
      } = (0, hE.B)(), PW = Math.min(OW, mW);
      return (0, MN.jsxs)("li", {
        className: YE()("Baf2ColTile", {
          Short: OW < mW
        }),
        children: [(0, MN.jsx)(tw, {
          item: iW
        }), (0, MN.jsx)("b", {
          className: "Baf2ColTileValue",
          children: NW(`${Qc}colOutOf`, {
            amount: String(PW),
            cap: String(mW)
          })
        }), (0, MN.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, MN.jsx)("i", {
            style: {
              width: 100 * PW / mW + "%"
            }
          })
        }), OW > mW && (0, MN.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: NW(`${Qc}colIntakeHeld`, {
            amount: String(OW),
            cap: String(EW)
          })
        })]
      })
    }

    function tw(WW) {
      let {
        item: iW
      } = WW;
      const {
        t: OW
      } = (0, hE.B)();
      return (0, MN.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, MN.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, MN.jsx)(nE.b, {
            itemName: iW,
            amount: 0
          })
        }), (0, MN.jsx)("span", {
          className: "Baf2ColTileName",
          children: (0, iN.g)(OW, iW)
        })]
      })
    }

    function Zw(WW) {
      switch (WW.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function xw(WW) {
      var iW, OW, EW;
      let {
        store: NW,
        close: PW
      } = WW;
      const {
        t: LW
      } = (0, hE.B)(), cW = gP(), {
        status: wW,
        entry: tW
      } = function(WW) {
        const [iW, OW] = (0, mW.useState)((() => Ew(WW)));
        return (0, mW.useEffect)((() => (OW(Ew(WW)), WW.subscribe((() => {
          OW(Ew(WW))
        })))), [WW]), iW
      }(NW), [ZW, xW] = (0, mW.useState)(null), lW = null === wW || void 0 === wW ? void 0 : wW.baf2ColHold;
      (0, mW.useEffect)((() => {
        xW(null)
      }), [lW]);
      const AW = (0, mW.useRef)({
          p: -1,
          n: 0
        }),
        bW = null !== (iW = null === wW || void 0 === wW ? void 0 : wW.baf2ColP) && void 0 !== iW ? iW : -1;
      bW < AW.current.p && AW.current.n++, AW.current.p = bW;
      const jW = (0, mW.useRef)(null),
        [UW] = (0, mW.useState)((() => {
          return (WW = NW.heldAtOpen()) === Zm || WW === xm ? {
            key: `${Hc}colBeltItIn`,
            item: WW
          } : null;
          var WW
        }));
      if (!wW) return null;
      const kW = wW.baf2ColMember,
        sW = wW.baf2ColP >= 0,
        MW = function(WW, iW) {
          if (WW.baf2ColP >= 0 && WW.baf2ColDraw > 0) {
            const iW = WW.baf2ColWant > 0 ? Math.min(1, WW.baf2ColDraw / WW.baf2ColWant) : 0;
            return {
              focus: WW.baf2ColFocusPerS * iW,
              draw: WW.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === WW.baf2ColState && iW && iW.draw > 0 ? {
            ...iW,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(wW, jW.current);
      jW.current = MW.draw > 0 ? MW : null;
      const KW = "slowed" === wW.baf2ColState || "noPower" === wW.baf2ColState,
        SW = Xc(wW),
        YW = null !== ZW && void 0 !== ZW ? ZW : wW.baf2ColHold,
        yW = function(WW) {
          var iW, OW;
          return "idle" === WW.baf2ColRxState ? null : null !== (iW = null === (OW = Vc(WW)) || void 0 === OW ? void 0 : OW.fix) && void 0 !== iW ? iW : null
        }(wW),
        TW = null === yW && null === UW ? function(WW) {
          var iW;
          const OW = WW.baf2ColSentTo;
          if (!OW) return null;
          const mW = null !== (iW = WW.baf2ColSentHeld) && void 0 !== iW ? iW : null;
          return {
            key: null === mW ? `${Hc}colNovaSentToMachine` : `${Hc}colNovaSentTo`,
            target: OW,
            BL: mW
          }
        }(wW) : null,
        JW = sW ? LW(`${Qc}colFocusOf`, {
          focus: dc(wW.baf2ColP),
          need: dc(cm.NOVA_FOCUS)
        }) : null;
      return (0, MN.jsx)(jP.b, {
        close: PW,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, MN.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, MN.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, MN.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, MN.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, MN.jsx)(nE.b, {
                  itemName: wm,
                  amount: 0
                })
              }), (0, MN.jsxs)("div", {
                children: [(0, MN.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: (0, iN.g)(LW, wm)
                }), (0, MN.jsx)("p", {
                  children: mw(LW, pc(wW))
                })]
              })]
            }), (0, MN.jsx)(UP.l, {
              onClick: PW
            })]
          }), (0, MN.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, MN.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, MN.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, MN.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: LW(Cc(wW), {
                    time: null === SW ? "" : kN(LW, SW)
                  })
                }), (0, MN.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, MN.jsx)("i", {
                    style: {
                      width: (sW ? 100 * wW.baf2ColP / cm.NOVA_FOCUS : 0) + "%"
                    }
                  }, AW.current.n)
                }), (0, MN.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, MN.jsxs)("span", {
                    title: Ow(LW),
                    children: [(0, MN.jsx)("b", {
                      children: dc(MW.focus)
                    }), " ", LW(`${Qc}colFocusPerS`)]
                  }), (0, MN.jsxs)("span", {
                    className: YE()("Baf2ColDraw", {
                      Short: KW
                    }),
                    children: [(0, MN.jsx)(HE.c, {
                      name: "bolt"
                    }), KW ? LW(`${Qc}colDrawOf`, {
                      draw: dc(wW.baf2ColDraw),
                      want: dc(wW.baf2ColWant)
                    }) : LW(`${Qc}colPowerPerS`, {
                      rate: dc(MW.draw)
                    })]
                  }), null !== JW && (0, MN.jsx)("span", {
                    className: "Soft",
                    children: JW
                  })]
                })]
              }), (0, MN.jsx)("p", {
                className: YE()("Baf2ColState", Zw(wW)),
                children: mw(LW, fc(wW))
              }), null !== yW && (0, MN.jsx)("p", {
                className: "Baf2ColStateFix",
                children: LW(yW)
              }), null === yW && null !== UW && (0, MN.jsx)("p", {
                className: "Baf2ColStateFix",
                children: LW(UW.key, {
                  item: (0, iN.g)(LW, UW.item)
                })
              }), TW && (0, MN.jsx)("p", {
                className: "Baf2ColStateFix",
                children: LW(TW.key, {
                  target: (0, iN.g)(LW, TW.target),
                  amount: String(null !== (OW = TW.BL) && void 0 !== OW ? OW : 0)
                })
              }), (0, MN.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, MN.jsx)(ww, {
                  item: Zm,
                  BL: wW.baf2ColSa,
                  need: cm.NOVA_SA,
                  cap: cm.SA_CAP
                }), (0, MN.jsx)(ww, {
                  item: xm,
                  BL: wW.baf2ColGd,
                  need: cm.NOVA_GD,
                  cap: cm.GD_CAP
                }), (0, MN.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, MN.jsx)(tw, {
                    item: "Nova Matter"
                  }), (0, MN.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: LW(`${Qc}colNovaHeld`, {
                      amount: String(wW.baf2ColOut),
                      cap: String(cm.OUT_CAP)
                    })
                  }), kW && (0, MN.jsx)(UP.n, {
                    className: "Baf2ColTake",
                    disabled: 0 === wW.baf2ColOut,
                    onClick: () => {
                      cW.send(uc(wW, "take"))
                    },
                    children: LW(`${Qc}colTake`)
                  })]
                })]
              }), kW && (0, MN.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": YW,
                className: YE()("Baf2ColHold", {
                  On: YW
                }),
                onClick: WW => {
                  WW.detail > 0 && WW.currentTarget.blur(), xW(!YW), cW.send(uc(wW, "hold " + (YW ? 0 : 1)))
                },
                children: [(0, MN.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, MN.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, MN.jsx)("b", {
                    children: LW(`${Qc}colHold`)
                  }), (0, MN.jsx)("span", {
                    children: LW(`${Qc}colHoldNote`)
                  })]
                })]
              })]
            }), (0, MN.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, MN.jsx)(Pw, {
                status: wW,
                entry: tW
              }), (0, MN.jsx)("ul", {
                className: "Baf2ColSlots",
                children: Dc(wW.baf2ColLasers, wW.baf2ColSpots, wW.baf2ColLive, MW.beamsOn, null !== (EW = wW.baf2ColGaps) && void 0 !== EW ? EW : 0).map((WW => (0, MN.jsxs)("li", {
                  className: WW.tone,
                  children: [(0, MN.jsx)("b", {
                    children: mw(LW, WW.title)
                  }), null !== WW.hint && (0, MN.jsx)("span", {
                    children: mw(LW, WW.hint)
                  })]
                }, WW.dir)))
              }), (0, MN.jsx)(Lw, {
                status: wW
              })]
            })]
          })]
        })
      })
    }
    const lw = "buildAFactory2Game:",
      Aw = 36e5,
      bw = 864e5;

    function jw(WW, iW, OW) {
      return Math.max(0, Math.ceil((WW + iW - Math.max(OW, WW)) / 1e3))
    }

    function Uw(WW) {
      return WW.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function kw(WW) {
      return "Homestead" === WW
    }

    function sw(WW) {
      return function(WW) {
        let iW = 0;
        for (const OW of WW) {
          const WW = /^Island ([1-9]\d{0,5})$/.exec(OW);
          WW && (iW = Math.max(iW, Number(WW[1])))
        }
        return `Island ${iW+1}`
      }(WW.map((WW => WW.baf2IslandName)))
    }

    function Mw(WW, iW) {
      return function(WW) {
        return `${lw}islandsBlocked${WW[0].toUpperCase()}${WW.slice(1)}`
      }("degraded" === WW && 0 === iW ? "stuck" : WW)
    }

    function Kw(WW) {
      return WW.filter((WW => {
        var iW;
        return !WW.baf2IslandActive && void 0 === WW.baf2IslandUnreadable && void 0 === (null === (iW = WW.baf2IslandCoop) || void 0 === iW ? void 0 : iW.baf2CoopState)
      })).length
    }

    function Sw(WW) {
      return "coopMoving" === WW || "coopUnreachable" === WW
    }

    function Yw(WW, iW) {
      const OW = iW > 0;
      return {
        change: null === WW && !OW,
        switch: (null === WW || "degraded" === WW || Sw(WW)) && !OW,
        rename: "loading" !== WW && "degraded" !== WW && "stuck" !== WW
      }
    }

    function yw(WW, iW) {
      return void 0 === WW || "corrupt" === WW && iW
    }
    const Tw = HP;

    function Jw(WW, iW, OW) {
      if (null !== WW && void 0 !== WW && WW.untilGone) {
        var mW;
        return !("dismiss" === WW.untilGone && void 0 === (null === (mW = iW.baf2IslandCoop) || void 0 === mW ? void 0 : mW.baf2CoopState)) && OW - WW.atMs < 32500
      }
      return void 0 !== WW && OW - WW.atMs < Tw && iW.baf2IslandName === WW.from
    }
    const hw = HP;

    function Hw(WW) {
      return "core" === (null === WW || void 0 === WW ? void 0 : WW.kind) ? WW.core : "islands" === (null === WW || void 0 === WW ? void 0 : WW.kind) ? WW.backToCore : void 0
    }

    function nw(WW) {
      return `\0${WW}\0`
    }

    function uw(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const mW = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const NW of Object.keys(OW)) mW[NW] = nw(NW);
      let EW = Object.keys(mW).length > 0 ? WW(iW, mW) : WW(iW);
      for (const [NW, PW] of Object.entries(OW)) EW = EW.split(nw(NW)).join(PW);
      return EW
    }

    function ow(WW, iW) {
      return WW ? iW ? "enabled" : "disabled" : "hidden"
    }
    const dw = {
      removed: `${lw}islandsCoopRemoved`,
      deleted: `${lw}islandsCoopDeleted`,
      notReady: `${lw}islandsCoopNotReady`,
      gone: `${lw}islandsCoopGone`
    };

    function ew(WW) {
      var iW;
      return "member" !== (null === (iW = WW.baf2IslandCoop) || void 0 === iW ? void 0 : iW.baf2CoopRole) && "newer" !== WW.baf2IslandUnreadable
    }

    function vw(WW, iW, OW, mW, EW, NW) {
      const PW = WW.baf2IslandActive,
        LW = WW.baf2IslandUnreadable,
        cW = WW.baf2IslandCoop,
        wW = function(WW, iW, OW) {
          return {
            switch: WW.switch && void 0 === iW,
            delete: WW.change && yw(iW, OW)
          }
        }(iW, LW, mW),
        tW = PW && void 0 !== cW && void 0 === cW.baf2CoopState && "coopUnreachable" === NW,
        ZW = {
          switch: ow((!PW || tW) && void 0 === LW, tW || wW.switch),
          switchLabel: tW ? "tryAgain" : "switch",
          rename: ow(!0, iW.rename),
          delete: ow(!PW, wW.delete),
          deleteWaits: !PW && yw(LW, mW),
          people: ow(void 0 !== WW.baf2IslandInvitable || EW && PW && void 0 === LW && void 0 === cW, !0),
          peopleLabel: "invite",
          leave: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        xW = !PW && wW.delete;
      if (void 0 === cW) return OW ? {
        ...ZW,
        delete: ow(!PW, !1),
        deleteWaits: !1,
        note: xW ? {
          key: `${lw}islandsCoopKeepOwn`
        } : null
      } : ZW;
      const lW = cW.baf2CoopState,
        AW = cW.baf2CoopMembers.length > 1,
        bW = {
          ...ZW,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== lW && "member" === cW.baf2CoopRole) return {
        ...bW,
        dismiss: ow(!0, iW.rename),
        note: {
          key: dw[lW],
          names: {
            owner: cW.baf2CoopOwner
          }
        }
      };
      if (void 0 !== lW) {
        let WW = {
          key: `${lw}islandsCoopOwnLost`
        };
        return xW && AW ? WW = {
          key: `${lw}islandsCoopDeleteMembers`
        } : xW && OW && (WW = {
          key: `${lw}islandsCoopKeepOwn`
        }), {
          ...bW,
          delete: ow(!PW, wW.delete && !AW && !OW),
          deleteWaits: ZW.deleteWaits && !AW && !OW,
          note: WW
        }
      }
      if ("member" === cW.baf2CoopRole) return {
        ...ZW,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        leave: ow(!0, PW ? iW.switch : iW.rename)
      };
      const jW = cW.baf2CoopManageHere;
      let UW = null;
      var kW;
      jW || PW ? xW && AW ? UW = {
        key: `${lw}islandsCoopDeleteMembers`
      } : xW && OW && (UW = {
        key: `${lw}islandsCoopKeepOwn`
      }) : UW = {
        key: null !== (kW = cW.baf2CoopLeft) && void 0 !== kW && kW.length ? `${lw}islandsCoopManageThereClaim` : `${lw}islandsCoopManageThere`
      };
      return {
        ...ZW,
        rename: ow(!0, iW.rename && jW),
        delete: ow(!PW, wW.delete && !AW && !OW),
        deleteWaits: ZW.deleteWaits && !AW && !OW,
        people: "enabled",
        peopleLabel: "players",
        unshare: ow(jW && PW && !AW, iW.change),
        remove: jW,
        note: UW
      }
    }

    function gw(WW) {
      var iW;
      const OW = WW.baf2IslandCoop;
      if ("owner" !== (null === OW || void 0 === OW ? void 0 : OW.baf2CoopRole) || void 0 !== OW.baf2CoopState || null === (iW = OW.baf2CoopLeft) || void 0 === iW || !iW.length) return null;
      const mW = WW.baf2IslandActive && OW.baf2CoopManageHere;
      return {
        left: OW.baf2CoopLeft,
        claim: mW,
        goThere: !mW && OW.baf2CoopManageHere
      }
    }

    function Dw(WW) {
      return WW.baf2CoopMembers.length >= WW.baf2CoopMax
    }

    function Vw(WW, iW, OW) {
      return void 0 !== WW && iW < WW.answer && OW - WW.atMs < Tw
    }
    const pw = "buildAFactory2Game:";

    function fw(WW, iW) {
      return {
        onKeyDown: OW => {
          OW.stopPropagation(), OW.nativeEvent.isComposing || 229 === OW.nativeEvent.keyCode || ("Enter" === OW.key ? (OW.preventDefault(), WW()) : "Escape" === OW.key && (OW.preventDefault(), iW()))
        }
      }
    }

    function Cw(WW) {
      return {
        onKeyDown: iW => {
          "Escape" !== iW.key || iW.nativeEvent.isComposing || (iW.preventDefault(), iW.stopPropagation(), WW())
        }
      }
    }

    function Xw(WW) {
      WW.currentTarget.select()
    }

    function Bw(WW, iW) {
      (0, mW.useEffect)((() => {
        var OW;
        WW && (null === (OW = iW.current) || void 0 === OW || OW.scrollIntoView({
          block: "nearest"
        }))
      }), [WW, iW])
    }

    function qw(WW) {
      const [iW, OW] = (0, mW.useState)(null);
      return (0, mW.useEffect)((() => {
        const iW = document.querySelector(".UiRequests"),
          mW = WW.current;
        if (!iW || !mW || "undefined" === typeof ResizeObserver) return;
        const EW = () => {
          const WW = iW.getBoundingClientRect(),
            EW = mW.getBoundingClientRect(),
            NW = mW.parentElement,
            PW = NW && parseFloat(getComputedStyle(NW).paddingTop) || 0,
            LW = function(WW, iW, OW, mW) {
              if (!WW || WW.height <= 0 || WW.right <= iW.left || WW.left >= iW.right) return null;
              const EW = Math.max(mW, WW.bottom + 8);
              return {
                marginTop: Math.round(EW - mW),
                maxHeight: Math.max(0, Math.floor(OW - EW - mW))
              }
            }(WW, EW, window.innerHeight, PW);
          OW((WW => (null === WW || void 0 === WW ? void 0 : WW.marginTop) === (null === LW || void 0 === LW ? void 0 : LW.marginTop) && (null === WW || void 0 === WW ? void 0 : WW.maxHeight) === (null === LW || void 0 === LW ? void 0 : LW.maxHeight) ? WW : LW))
        };
        EW();
        const NW = new ResizeObserver(EW);
        return NW.observe(iW), window.addEventListener("resize", EW), () => {
          NW.disconnect(), window.removeEventListener("resize", EW)
        }
      }), [WW]), iW
    }

    function Rw() {
      (0, mW.useLayoutEffect)((() => (document.documentElement.classList.add("Baf2IslandsOverlayShown"), () => {
        document.documentElement.classList.remove("Baf2IslandsOverlayShown")
      })), [])
    }

    function Gw(WW) {
      (0, mW.useEffect)((() => {
        var iW;
        null === (iW = WW.current) || void 0 === iW || iW.focus()
      }), [WW])
    }

    function Iw(WW) {
      const [iW, OW] = (0, mW.useState)(Date.now);
      return (0, mW.useEffect)((() => {
        const iW = window.setInterval((() => {
          OW(Date.now())
        }), WW);
        return () => {
          window.clearInterval(iW)
        }
      }), [WW]), iW
    }

    function aw(WW) {
      let {
        tier: iW,
        t: OW
      } = WW;
      const {
        kind: mW,
        short: EW
      } = jW(iW), NW = lW(iW, AW), PW = OW(`${pw}${NW.key}`, {
        ...NW.params,
        name: OW(`${pw}${UW(iW).nameKey}`)
      });
      return (0, MN.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, MN.jsx)("span", {
          className: YE()("Baf2IslandTierPip", {
            Stage: "tier" !== mW
          }),
          "aria-hidden": "true",
          children: EW
        }), PW]
      })
    }

    function rw(WW) {
      let {
        note: iW,
        className: OW,
        t: mW
      } = WW;
      return (0, MN.jsx)("p", {
        className: YE()("Baf2IslandNote", OW),
        children: uw(mW, iW.key, iW.names, iW.params)
      })
    }
    const zw = "buildAFactory2Game:";

    function Fw(WW) {
      let {
        message: iW,
        arrivedAtMs: OW,
        close: EW,
        leave: NW
      } = WW;
      const PW = gP(),
        {
          t: LW
        } = (0, hE.B)(),
        cW = Iw(1e3),
        wW = (0, mW.useRef)(null);
      Rw(), (0, mW.useEffect)((() => {
        var WW;
        null === (WW = wW.current) || void 0 === WW || WW.focus()
      }), []);
      const tW = jw(OW, iW.baf2TransferInMs, cW),
        ZW = OW + iW.baf2TransferInMs - 1e3,
        [xW, lW] = (0, mW.useState)(null);
      (0, mW.useEffect)((() => {
        const WW = window.setTimeout((() => {
          lW(ZW)
        }), Math.max(0, ZW - Date.now()));
        return () => {
          window.clearTimeout(WW)
        }
      }), [ZW]);
      const AW = xW === ZW || cW >= ZW,
        bW = iW.baf2TransferIsland,
        jW = iW.baf2TransferOwner;
      return (0, MN.jsx)(jP.b, {
        close: EW,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, MN.jsxs)("section", {
          ref: wW,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, MN.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, MN.jsxs)("div", {
              children: [(0, MN.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === jW ? uw(LW, `${zw}islandsTransferOwn`, {
                  island: bW
                }) : uw(LW, `${zw}islandsTransfer`, {
                  island: bW,
                  owner: jW
                })
              }), (0, MN.jsx)("p", {
                children: AW ? LW(`${zw}islandsTransferNow`) : LW(`${zw}islandsTransferIn`, {
                  time: kN(LW, tW)
                })
              })]
            }), (0, MN.jsx)(UP.l, {
              ariaLabel: LW(`${zw}islandsClose`),
              onClick: EW
            })]
          }), !AW && (0, MN.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, MN.jsx)("p", {
              className: "Baf2TransferNote",
              children: LW(`${zw}islandsTransferNote`)
            }), (0, MN.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, MN.jsx)(UP.f, {
                onClick: () => {
                  PW.send("baf2coopstay"), NW()
                },
                children: LW(`${zw}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var Qw = OW(1526),
      Wt = OW(1113),
      it = OW.n(Wt);
    const Ot = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const mt = "buildAFactory2Game:",
      Et = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function Nt(WW, iW, OW) {
      return void 0 === iW ? OW : "string" === typeof iW ? iW : Array.isArray(iW) ? iW.map((iW => "string" === typeof iW ? iW : "translationKey" in iW ? WW(iW.translationKey) : "")).join("") : WW(iW.translationKey)
    }

    function Pt(WW) {
      const iW = {};
      for (const [OW, mW] of Object.entries(null !== WW && void 0 !== WW ? WW : {})) iW[OW] = mW < 0 ? UN(mW) : mW.toLocaleString("en-US");
      return iW
    }

    function Lt(WW, iW) {
      const OW = iW ? "touch" : "mouse";
      return {
        use: WW(`${mt}lookUse_${OW}`),
        Use: WW(`${mt}lookUseStart_${OW}`)
      }
    }
    const ct = (0, mW.memo)((function(WW) {
      let {
        item: iW
      } = WW;
      return (0, MN.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, MN.jsx)(nE.b, {
          itemName: iW,
          amount: 0
        })
      })
    }));

    function wt(WW) {
      let {
        label: iW,
        percent: OW,
        progress: mW
      } = WW;
      return (0, MN.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, MN.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${iW}: ${mW}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": OW,
          children: (0, MN.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${OW}%`
            }
          })
        }), (0, MN.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: mW
        })]
      })
    }

    function tt(WW) {
      let {
        chips: iW
      } = WW;
      return (0, MN.jsx)("span", {
        className: "Baf2QuestChips",
        children: iW.map((WW => {
          let [iW, OW, mW] = WW;
          const EW = OW >= mW;
          return (0, MN.jsxs)("span", {
            className: YE()("Baf2QuestChip", {
              Met: EW
            }),
            children: [(0, MN.jsx)(ct, {
              item: iW
            }), (0, MN.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: EW ? `\u2713${mW}` : `${OW}/${mW}`
            })]
          }, iW)
        }))
      })
    }

    function Zt(WW, iW) {
      const {
        key: OW,
        params: mW
      } = lW(iW, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return WW(`${mt}${OW}`, {
        ...mW,
        name: WW(`${mt}${UW(iW).nameKey}`)
      })
    }

    function xt(WW) {
      let {
        core: iW,
        t: OW
      } = WW;
      const [mW, EW] = iW, NW = EW > 0 ? Math.floor(100 * mW / EW) : 100;
      return (0, MN.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": OW(`${mt}questCoreLabel`, {
          have: String(mW),
          need: String(EW)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": NW,
        children: [(0, MN.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: OW(`${mt}questCore`, {
            percent: String(NW)
          })
        }), (0, MN.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, MN.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${NW}%`
            }
          })
        })]
      })
    }

    function lt(WW) {
      let {
        rows: iW,
        t: OW
      } = WW;
      const mW = iW.filter((WW => WW.done)).length;
      return (0, MN.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": OW(`${mt}questStepsProgress`, {
          done: String(mW),
          total: String(iW.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": iW.length,
        "aria-valuenow": mW,
        children: iW.map((WW => (0, MN.jsx)("span", {
          className: YE()("Baf2QuestSegment", {
            Done: WW.done,
            Current: WW.current
          })
        }, WW.id)))
      })
    }
    const At = (0, mW.memo)(jt, bt);

    function bt(WW, iW) {
      const OW = OW => WW.view.itemNames[OW] === iW.view.itemNames[OW];
      return WW.t === iW.t && WW.extra === iW.extra && (null === WW.row.item || OW(WW.row.item)) && WW.row.madeFor.every(OW) && WW.row.also.every(OW) && it()(WW.row, iW.row)
    }

    function jt(WW) {
      let {
        row: iW,
        view: OW,
        t: mW,
        extra: EW
      } = WW;
      const {
        isTouchScreen: NW
      } = (0, ME.p)(["isTouchScreen"]), PW = iW.item ? function(WW, iW, OW) {
        return 1 !== OW && Ot.has(WW) ? JE(iW) : null
      }(iW.key, iW.item, iW.total) : null, LW = PW ? mW(PW) : iW.item ? Nt(mW, OW.itemNames[iW.item], iW.item) : "", cW = iW.also.map((WW => Nt(mW, OW.itemNames[WW], WW))), wW = cW.join(", "), tW = function(WW, iW) {
        var OW;
        return iW.length < 2 ? null !== (OW = iW[0]) && void 0 !== OW ? OW : "" : WW(`${mt}listAnd`, {
          rest: iW.slice(0, -1).join(WW(`${mt}listComma`)),
          last: iW[iW.length - 1]
        })
      }(mW, [LW, ...cW]), ZW = mW(`${mt}${iW.key}`, {
        ...Lt(mW, NW),
        ...Pt(iW.params),
        item: LW,
        also: wW,
        itemList: tW,
        total: String(iW.total)
      }), [xW, ...lW] = ZW.split("\n"), AW = iW.total > 1 && !iW.done && !iW.away;
      return (0, MN.jsxs)("li", {
        className: YE()("Baf2QuestStep", {
          Done: iW.done,
          Current: iW.current,
          JustFinished: iW.justFinished,
          Away: iW.away
        }),
        children: [!iW.done && null !== iW.item && (0, MN.jsx)(ct, {
          item: iW.item
        }), (iW.done || null === iW.item) && (0, MN.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: iW.done ? "\u2713" : "\u25cb"
        }), (0, MN.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, MN.jsx)("strong", {
            children: xW
          }), lW.length > 0 && (0, MN.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: lW.join(" ")
          }), !iW.done && iW.madeFor.length > 0 && (0, MN.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: mW("buildAFactory2Game:questRowFor", {
              items: iW.madeFor.map((WW => Nt(mW, OW.itemNames[WW], WW))).join(" \u2192 ")
            })
          }), AW && (0, MN.jsx)(wt, {
            label: xW,
            percent: Math.round(100 * iW.amount / iW.total),
            progress: `${iW.amount.toLocaleString("en-US")}/${iW.total.toLocaleString("en-US")}`
          }), !iW.done && !iW.away && iW.chips && iW.chips.length > 0 && (0, MN.jsx)(tt, {
            chips: iW.chips
          }), EW]
        })]
      })
    }
    const Ut = "buildAFactory2Game:",
      kt = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      st = {
        on: `${Ut}tutorialButtonOn`,
        hud: `${Ut}tutorialButtonHud`,
        off: `${Ut}tutorialButtonOff`
      },
      Mt = {
        on: `${Ut}tutorialPickedOn`,
        hud: `${Ut}tutorialPickedHud`,
        off: `${Ut}tutorialPickedOff`
      };
    class Kt {
      constructor(WW, iW, OW) {
        this.commands = WW, this.quests = iW, this.toasts = OW
      }
      next() {
        const WW = function(WW) {
            return oW[(oW.indexOf(WW) + 1) % oW.length]
          }(this.quests.get().tutorial),
          iW = this.quests.setTutorial(WW);
        this.commands.send(`baf2tutorial ${WW} ${iW}`), this.toasts.show({
          baf2ToastText: [(0, eW.Vd)({
            translationKey: Mt[WW]
          }, eW.M.whiteUiText)],
          baf2ToastMs: 3e3,
          baf2ToastStyle: "baf2ToastInfo"
        })
      }
    }

    function St(WW, iW) {
      let [OW, mW] = iW;
      return WW(`${mt}${OW}`, Pt(mW))
    }

    function Yt(WW) {
      let [iW, OW] = WW;
      return iW + JSON.stringify(OW)
    }

    function yt(WW) {
      let {
        goal: iW,
        t: OW
      } = WW;
      return iW ? (0, MN.jsx)("span", {
        className: "Baf2BookGoal",
        children: OW(`${mt}${iW}`)
      }) : null
    }

    function Tt(WW) {
      let {
        view: iW,
        t: OW
      } = WW;
      if (!iW.name) return null;
      const mW = BE(iW.rows);
      return (0, MN.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, MN.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: OW(`${mt}currentQuest`)
        }), (0, MN.jsx)("strong", {
          className: "Baf2BookTitle",
          children: St(OW, iW.name)
        }), (0, MN.jsx)(yt, {
          goal: iW.goal,
          t: OW
        }), mW.length > 1 && (0, MN.jsx)(lt, {
          rows: mW,
          t: OW
        }), (0, MN.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: iW.rows.map((WW => (0, MN.jsx)(At, {
            row: WW,
            view: iW,
            t: OW
          }, WW.id)))
        }), iW.reward && (0, MN.jsxs)("span", {
          className: "Baf2BookReward",
          children: [OW(`${mt}questReward`), (0, MN.jsx)(ct, {
            item: iW.reward
          }), Nt(OW, iW.itemNames[iW.reward], iW.reward)]
        })]
      })
    }

    function Jt(WW) {
      let {
        quest: iW,
        upcoming: OW,
        t: mW
      } = WW;
      return (0, MN.jsxs)("li", {
        className: YE()("Baf2BookQuest", {
          Done: iW[3],
          Upcoming: OW
        }),
        children: [(0, MN.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: iW[3] ? "\u2713" : "\u25cb"
        }), (0, MN.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, MN.jsx)("strong", {
            className: "Baf2BookTitle",
            children: St(mW, iW)
          }), (0, MN.jsx)(yt, {
            goal: iW[2],
            t: mW
          })]
        })]
      })
    }

    function ht(WW) {
      let {
        done: iW,
        total: OW,
        t: mW
      } = WW;
      const EW = OW > 0 ? Math.round(100 * iW / OW) : 0,
        NW = mW(`${mt}questBookChapterProgress`, {
          done: String(iW),
          total: String(OW)
        });
      return (0, MN.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, MN.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": NW,
          "aria-valuemin": 0,
          "aria-valuemax": OW,
          "aria-valuenow": iW,
          children: (0, MN.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${EW}%`
            }
          })
        }), (0, MN.jsx)("span", {
          className: "Baf2BookProgressText",
          children: NW
        })]
      })
    }

    function Ht(WW) {
      let {
        view: iW,
        tier: OW,
        quests: mW,
        t: EW
      } = WW;
      const NW = OW === iW.tier,
        PW = (null !== mW && void 0 !== mW ? mW : []).filter((WW => !WW[4])),
        LW = (null !== mW && void 0 !== mW ? mW : []).filter((WW => WW[4])),
        cW = PW.filter((WW => WW[3])).length,
        wW = NW && iW.name ? Yt(iW.name) : null,
        tW = PW.findIndex((WW => !WW[3] && Yt(WW) === wW));
      return (0, MN.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, MN.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, MN.jsx)("h3", {
            children: Zt(EW, OW)
          }), PW.length > 0 && (0, MN.jsx)(ht, {
            done: cW,
            total: PW.length,
            t: EW
          }), NW && iW.core && (0, MN.jsx)(xt, {
            core: iW.core,
            t: EW
          })]
        }), (0, MN.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === mW && NW && (0, MN.jsx)(Tt, {
            view: iW,
            t: EW
          }), PW.map(((WW, OW) => OW === tW ? (0, MN.jsx)(Tt, {
            view: iW,
            t: EW
          }, Yt(WW)) : (0, MN.jsx)(Jt, {
            quest: WW,
            upcoming: !WW[3],
            t: EW
          }, Yt(WW))))]
        }), NW && iW.side && (0, MN.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, MN.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: EW(`${mt}questSide`)
          }), (0, MN.jsx)("strong", {
            className: "Baf2BookTitle",
            children: St(EW, iW.side.name)
          }), (0, MN.jsx)(yt, {
            goal: iW.side.goal,
            t: EW
          }), (0, MN.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, MN.jsx)(At, {
              row: iW.side.row,
              view: iW,
              t: EW
            })
          })]
        }), LW.length > 0 && (0, MN.jsxs)(MN.Fragment, {
          children: [(0, MN.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: EW(`${mt}questBookSidesDone`)
          }), (0, MN.jsx)("ol", {
            className: "Baf2BookQuests",
            children: LW.map((WW => (0, MN.jsx)(Jt, {
              quest: WW,
              upcoming: !1,
              t: EW
            }, Yt(WW))))
          })]
        })]
      })
    }

    function nt(WW) {
      var iW, OW, NW;
      let {
        store: PW,
        tutorial: LW,
        close: cW
      } = WW;
      const {
        t: wW
      } = (0, hE.B)(), ZW = (0, Qw.g)(gE, PW.get()), xW = null !== (iW = ZW.tier) && void 0 !== iW ? iW : 1, [lW, AW] = (0, mW.useState)(null), UW = (null === lW || void 0 === lW ? void 0 : lW.at) === xW ? lW.tier : xW, kW = (0, mW.useRef)(null), sW = null !== ZW.chapters;
      (0, mW.useEffect)((() => {
        var WW;
        kW.current && (kW.current.scrollTop = 0);
        const iW = null === (WW = kW.current) || void 0 === WW ? void 0 : WW.querySelector(".Baf2BookQuest.Current");
        if (kW.current && iW) {
          const WW = iW.getBoundingClientRect().bottom - kW.current.getBoundingClientRect().bottom;
          WW > 0 && (kW.current.scrollTop += Math.min(WW, iW.getBoundingClientRect().top - kW.current.getBoundingClientRect().top))
        }
      }), [UW, sW]);
      const MW = null === (OW = ZW.chapters) || void 0 === OW ? void 0 : OW.find((WW => {
        let [iW] = WW;
        return iW === UW
      }));
      return (0, MN.jsx)(jP.b, {
        close: cW,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, MN.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: Et,
          children: [(0, MN.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, MN.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: wW(`${mt}questBookTitle`)
            }), (0, MN.jsx)(UP.n, {
              className: "Baf2BookTutorialButton",
              disabled: !ZW.tutorialKnown,
              ariaLabel: wW(st[ZW.tutorial]),
              title: wW(st[ZW.tutorial]),
              onClick: () => {
                LW.next()
              },
              children: (0, MN.jsx)(HE.c, {
                name: kt[ZW.tutorial]
              })
            }), (0, MN.jsx)(UP.l, {
              onClick: cW
            })]
          }), (0, MN.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": wW(`${mt}questBookChapters`),
            "data-pad-initial-area": !0,
            children: EW.slice(0, tW()).map(((WW, iW) => {
              const OW = iW + 1,
                {
                  kind: mW,
                  short: EW
                } = jW(OW),
                NW = bW(OW, xW),
                PW = NW ? wW(`${mt}coreAtomicHidden`) : Zt(wW, OW);
              return (0, MN.jsx)("li", {
                children: (0, MN.jsx)("button", {
                  type: "button",
                  className: YE()({
                    Stage: "tier" !== mW,
                    Atomic: "atomic" === mW,
                    Current: OW === xW,
                    Selected: OW === UW
                  }),
                  disabled: OW > xW,
                  "aria-pressed": OW === UW,
                  "aria-label": PW,
                  title: NW ? void 0 : PW,
                  onClick: () => {
                    AW({
                      tier: OW,
                      at: xW
                    })
                  },
                  children: NW ? "?" : EW
                })
              }, WW.nameKey)
            }))
          }), (0, MN.jsxs)("div", {
            ref: kW,
            className: "Baf2BookBody",
            children: [CE(ZW) && UW === xW && (0, MN.jsx)("p", {
              className: "Baf2BookEmpty",
              children: wW(`${mt}questBookAllDone`)
            }), (0, MN.jsx)(Ht, {
              view: ZW,
              tier: UW,
              quests: null !== (NW = null === MW || void 0 === MW ? void 0 : MW[1]) && void 0 !== NW ? NW : null,
              t: wW
            })]
          })]
        })
      })
    }
    const ut = "buildAFactory2Game:";

    function ot(WW) {
      let {
        tiers: iW,
        from: OW,
        tier: mW,
        shown: EW,
        Kl: NW
      } = WW;
      const {
        t: PW
      } = (0, hE.B)(), LW = iW.map(((WW, iW) => {
        const LW = OW + iW,
          {
            kind: cW,
            short: wW
          } = jW(LW),
          tW = bW(LW, mW);
        return (0, MN.jsx)("li", {
          children: (0, MN.jsx)("button", {
            type: "button",
            className: YE()({
              Stage: "tier" !== cW,
              Silhouette: tW,
              Reached: LW <= mW,
              Current: LW === mW,
              Next: LW === mW + 1,
              Selected: LW === EW
            }),
            disabled: tW,
            "aria-pressed": LW === EW,
            "aria-label": tW ? PW(`${ut}coreAtomicHidden`) : void 0,
            title: tW ? void 0 : PW(`${ut}${WW.nameKey}`),
            onClick: () => {
              NW(LW)
            },
            children: tW ? "?" : wW
          })
        }, WW.nameKey)
      }));
      return (0, MN.jsx)(MN.Fragment, {
        children: LW
      })
    }

    function dt(WW) {
      let {
        id: iW,
        label: OW,
        tiers: mW,
        from: EW,
        ...NW
      } = WW;
      return (0, MN.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, MN.jsx)("span", {
          id: iW,
          className: "Baf2CoreLadderLabel",
          children: OW
        }), (0, MN.jsx)("ol", {
          "aria-labelledby": iW,
          children: (0, MN.jsx)(ot, {
            ...NW,
            tiers: mW,
            from: EW
          })
        })]
      })
    }

    function et(WW) {
      const {
        t: iW
      } = (0, hE.B)(), OW = EW.findIndex((WW => void 0 !== WW.stage)), mW = EW.findIndex((WW => void 0 !== WW.reactorTier)), NW = OW < 0 ? EW : EW.slice(0, OW), PW = OW < 0 ? [] : EW.slice(OW, mW < 0 ? void 0 : mW), cW = mW < 0 || !LW() ? [] : EW.slice(mW);
      return (0, MN.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, MN.jsx)(dt, {
          ...WW,
          id: "baf2CoreTiersLabel",
          label: iW(`${ut}coreTiersLabel`),
          tiers: NW,
          from: 1
        }), PW.length > 0 && (0, MN.jsx)(dt, {
          ...WW,
          id: "baf2CoreStagesLabel",
          label: iW(`${ut}coreStagesLabel`),
          tiers: PW,
          from: OW + 1
        }), cW.length > 0 && (0, MN.jsx)(dt, {
          ...WW,
          id: "baf2CoreAtomicLabel",
          label: iW(`${ut}coreAtomicLabel`),
          tiers: cW,
          from: mW + 1
        })]
      })
    }
    const vt = "buildAFactory2Game:";

    function gt(WW) {
      let {
        item: iW,
        itemNames: OW,
        children: mW
      } = WW;
      return (0, MN.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, MN.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, MN.jsx)(nE.b, {
            itemName: iW,
            amount: 0
          })
        }), (0, MN.jsx)(uE.d, {
          text: OW[iW]
        }), mW]
      })
    }

    function Dt(WW) {
      const iW = new Map;
      for (const {
          block: mW
        }
        of WW.newDeposits) {
        var OW;
        iW.set(mW, (null !== (OW = iW.get(mW)) && void 0 !== OW ? OW : 0) + 1)
      }
      return [...iW]
    }

    function Vt(WW) {
      let {
        value: iW,
        label: OW,
        more: mW
      } = WW;
      return (0, MN.jsxs)("li", {
        children: [(0, MN.jsx)("strong", {
          children: iW
        }), (0, MN.jsx)("span", {
          children: OW
        }), mW > 0 && (0, MN.jsxs)("em", {
          children: ["+", mW]
        })]
      })
    }

    function pt(WW) {
      let {
        items: iW,
        itemNames: OW
      } = WW;
      const {
        t: EW
      } = (0, hE.B)(), [NW, PW] = (0, mW.useState)(null), LW = null !== NW && iW.includes(NW) ? NW : null;
      return (0, MN.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, MN.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: EW(`${vt}coreRewardUnlocks`)
        }), (0, MN.jsx)("ul", {
          children: iW.map((WW => (0, MN.jsx)("li", {
            children: (0, MN.jsx)("button", {
              type: "button",
              className: YE()("Baf2PanelIcon", {
                Picked: WW === LW
              }),
              title: (0, iN.g)(EW, WW),
              "aria-label": (0, iN.g)(EW, WW),
              "aria-pressed": WW === LW,
              onClick: () => {
                PW(WW === LW ? null : WW)
              },
              children: (0, MN.jsx)(nE.b, {
                itemName: WW,
                amount: 0
              })
            })
          }, WW)))
        }), (0, MN.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== LW && (0, MN.jsxs)(MN.Fragment, {
            children: [(0, MN.jsx)(uE.d, {
              text: OW[LW]
            }), " \xb7 ", (0, MN.jsx)(uE.d, {
              text: OW[nW(LW)]
            })]
          }), null === LW && EW(`${vt}coreRecipeTap`)]
        })]
      })
    }

    function ft(WW) {
      var iW, OW;
      let {
        def: mW,
        tier: EW,
        itemNames: NW
      } = WW;
      const {
        t: PW
      } = (0, hE.B)(), LW = EW > 1 ? UW(EW - 1) : void 0, cW = Math.round(2 * mW.islandRadius), wW = LW ? Math.round(2 * LW.islandRadius) : cW, tW = EW >= 3 ? Ym(EW) : null;
      return (0, MN.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, MN.jsxs)("ul", {
          className: YE()("Baf2CoreStats", {
            Four: null !== tW
          }),
          children: [(0, MN.jsx)(Vt, {
            value: `${cW}\xd7${cW}`,
            label: PW(`${vt}coreStatIsland`),
            more: cW - wW
          }), (0, MN.jsx)(Vt, {
            value: String(mW.machineAllowance),
            label: PW(`${vt}coreStatMachines`),
            more: mW.machineAllowance - (null !== (iW = null === LW || void 0 === LW ? void 0 : LW.machineAllowance) && void 0 !== iW ? iW : mW.machineAllowance)
          }), (0, MN.jsx)(Vt, {
            value: String(mW.beltAllowance),
            label: PW(`${vt}coreStatBelts`),
            more: mW.beltAllowance - (null !== (OW = null === LW || void 0 === LW ? void 0 : LW.beltAllowance) && void 0 !== OW ? OW : mW.beltAllowance)
          }), null !== tW && (0, MN.jsx)(Vt, {
            value: String(tW),
            label: PW(`${vt}coreStatStorage`),
            more: tW - (LW ? Ym(EW - 1) : tW)
          })]
        }), mW.reward && (0, MN.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, MN.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: PW(`${vt}coreRewardItem`)
          }), (0, MN.jsx)(gt, {
            item: mW.reward,
            itemNames: NW
          })]
        }), mW.newDeposits.length > 0 && (0, MN.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, MN.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: PW(mW.newDeposits.length > 1 ? `${vt}coreRewardDeposits` : `${vt}coreRewardDeposit`)
          }), Dt(mW).map((WW => {
            let [iW, OW] = WW;
            return (0, MN.jsx)(gt, {
              item: iW,
              itemNames: NW,
              children: OW > 1 && ` \xd7${OW}`
            }, iW)
          }))]
        }), mW.unlocks.length > 0 && (0, MN.jsx)(pt, {
          items: mW.unlocks,
          itemNames: NW
        }), (0, MN.jsx)(Ct, {
          tier: EW
        })]
      })
    }

    function Ct(WW) {
      let {
        tier: iW
      } = WW;
      const {
        t: OW
      } = (0, hE.B)(), mW = jE[iW];
      if (!mW) return null;
      const EW = bE(iW, 0, 0).barrierMax !== bE(iW - 1, 0, 0).barrierMax;
      return (0, MN.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, MN.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, MN.jsx)(nE.b, {
            itemName: EW ? wE.Chestplate : cE,
            amount: 0
          })
        }), OW(`${vt}gearPerkLine`, {
          perk: OW(`${vt}${mW}`)
        })]
      })
    }

    function Xt(WW, iW) {
      return null === WW ? iW : WW.value
    }

    function Bt(WW, iW, OW, mW) {
      let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === WW || OW - WW.atMs >= mW ? null : EW(WW.value, iW) ? WW.armed ? null : WW : WW.armed ? WW : {
        ...WW,
        armed: !0
      }
    }

    function qt(WW, iW) {
      const OW = iW.filter((iW => {
        var OW;
        return !1 !== (null === (OW = WW.get(iW)) || void 0 === OW ? void 0 : OW.value)
      }));
      for (const [mW, EW] of WW) EW.value && !iW.includes(mW) && OW.push(mW);
      return OW
    }

    function Rt(WW, iW, OW, EW) {
      const [NW, PW] = (0, mW.useState)((() => new Map)), LW = () => {
        PW((iW => function(WW, iW, OW, mW) {
          var EW;
          let NW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            PW = null;
          for (const [LW, cW] of WW) {
            const EW = Bt(cW, iW(LW), OW, mW, NW);
            EW !== cW && (PW ??= new Map(WW), null === EW ? PW.delete(LW) : PW.set(LW, EW))
          }
          return null !== (EW = PW) && void 0 !== EW ? EW : WW
        }(iW, WW, Date.now(), OW, EW)))
      };
      (0, mW.useEffect)((() => {
        LW()
      }), [iW, OW]), (0, mW.useEffect)((() => {
        if (0 === NW.size) return;
        const WW = Math.min(...[...NW.values()].map((WW => WW.atMs))),
          iW = setTimeout(LW, Math.max(0, WW + OW - Date.now()) + 1);
        return () => {
          clearTimeout(iW)
        }
      }), [NW, iW, OW]);
      return [NW, (iW, OW) => {
        PW((mW => {
          const NW = new Map(mW);
          return NW.set(iW, function(WW, iW, OW) {
            return {
              value: WW,
              atMs: OW,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(WW, iW)
            }
          }(OW, WW(iW), Date.now(), EW)), NW
        }))
      }]
    }
    const Gt = "buildAFactory2Game:";

    function It(WW) {
      let {
        message: iW,
        itemNames: OW
      } = WW;
      const EW = gP(),
        {
          t: NW
        } = (0, hE.B)(),
        [PW, LW] = (0, mW.useState)(!1),
        [cW, wW] = function(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : HP;
          const [OW, mW] = Rt((iW => WW.includes(iW)), WW, iW, Object.is);
          return [qt(OW, WW), mW]
        }(iW.baf2CoreBankPaused),
        tW = new Set(cW),
        ZW = [...iW.baf2CoreBanked];
      for (const mW of tW) ZW.some((WW => {
        let [iW] = WW;
        return iW === mW
      })) || ZW.push([mW, 0]);
      return 0 === ZW.length ? null : (0, MN.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, MN.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": PW,
          onClick: () => {
            LW(!PW)
          },
          children: [(0, MN.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: NW(`${Gt}coreBankedLater`)
          }), (0, MN.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: ZW.map((WW => {
              let [iW, OW] = WW;
              const mW = tW.has(iW);
              return (0, MN.jsxs)("span", {
                className: YE()({
                  Paused: mW
                }),
                title: mW ? NW(`${Gt}coreBankPausedTag`) : void 0,
                children: [(0, MN.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, MN.jsx)(nE.b, {
                    itemName: iW,
                    amount: 0
                  })
                }), OW, mW && (0, MN.jsx)(HE.c, {
                  name: "pause"
                })]
              }, iW)
            }))
          }), (0, MN.jsx)(HE.c, {
            name: PW ? "angle-up" : "angle-down"
          })]
        }), PW && (0, MN.jsxs)(MN.Fragment, {
          children: [(0, MN.jsx)("ul", {
            children: ZW.map((WW => {
              let [iW, mW] = WW;
              const PW = tW.has(iW);
              return (0, MN.jsxs)("li", {
                children: [(0, MN.jsxs)(gt, {
                  item: iW,
                  itemNames: OW,
                  children: [(0, MN.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: mW
                  }), PW && (0, MN.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: NW(`${Gt}coreBankPausedTag`)
                  })]
                }), (0, MN.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, MN.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === mW,
                    onClick: () => {
                      EW.send(`baf2corewithdraw ${mW} ${iW}`)
                    },
                    children: NW(`${Gt}coreTake`)
                  }), (0, MN.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      EW.send(`${MW} ${iW}`), wW(iW, !PW)
                    },
                    children: NW(PW ? `${Gt}coreBankResume` : `${Gt}coreBankStop`)
                  })]
                })]
              }, iW)
            }))
          }), (0, MN.jsx)("p", {
            className: "Baf2CoreHint",
            children: NW(`${Gt}coreBankNote`)
          })]
        })]
      })
    }
    const rt = "buildAFactory2Game:";

    function zt(WW) {
      const iW = Math.max(0, Math.floor(WW));
      return `${Math.floor(iW/60)}:${String(iW%60).padStart(2,"0")}`
    }

    function Ft(WW) {
      let {
        item: iW
      } = WW;
      return (0, MN.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, MN.jsx)(nE.b, {
          itemName: iW,
          amount: 0
        })
      })
    }

    function Qt() {
      return (0, MN.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, MN.jsx)(HE.c, {
          name: "bolt"
        })
      })
    }

    function WZ(WW) {
      let {
        charge: iW,
        hint: OW,
        itemNames: mW
      } = WW;
      const EW = gP(),
        {
          t: NW
        } = (0, hE.B)(),
        [PW, LW, cW, wW, tW, ZW, xW] = iW,
        [lW, AW] = function(WW) {
          var iW;
          let OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : HP,
            mW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [EW, NW] = Rt((() => WW), WW, OW, mW);
          return [Xt(null !== (iW = EW.get("")) && void 0 !== iW ? iW : null, WW), WW => {
            NW("", WW)
          }]
        }(xW),
        bW = lW === xW ? ZW : !lW,
        jW = wW >= tW,
        UW = PW.find((WW => {
          let [, iW, OW] = WW;
          return OW < .9 * iW
        }));
      let kW = `${rt}coreChargeWaiting`,
        sW = {};
      return jW ? kW = `${rt}coreChargeDone` : lW ? kW = `${rt}coreChargeStopped` : bW && OW ? (kW = `${rt}${OW[0]}`, sW = {
        item: (0, iN.g)(NW, OW[1])
      }) : bW && UW ? (kW = `${rt}coreChargeShort`, sW = {
        item: (0, iN.g)(NW, UW[0])
      }) : bW && LW > 0 && !cW ? kW = `${rt}coreChargePower` : bW && (kW = `${rt}coreChargeRunning`), (0, MN.jsxs)("div", {
        className: YE()("Baf2CoreCharge", {
          Waiting: !bW && !jW,
          Done: jW
        }),
        children: [(0, MN.jsxs)("h4", {
          children: [NW(`${rt}coreChargeTitle`), (0, MN.jsx)("span", {
            children: NW(`${rt}coreChargeProgress`, {
              done: zt(wW),
              need: zt(tW)
            })
          })]
        }), (0, MN.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, MN.jsx)("div", {
            style: {
              width: 100 * Math.min(wW, tW) / tW + "%"
            }
          })
        }), (0, MN.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [PW.map((WW => {
            var iW;
            let [OW, EW, PW] = WW;
            const LW = PW >= .9 * EW;
            return (0, MN.jsxs)("li", {
              className: YE()({
                Done: LW,
                Short: bW && !LW
              }),
              children: [(0, MN.jsx)(Ft, {
                item: OW
              }), (0, MN.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, MN.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, MN.jsx)(uE.d, {
                    text: null !== (iW = mW[OW]) && void 0 !== iW ? iW : OW
                  }), (0, MN.jsx)("span", {
                    children: NW(`${rt}coreChargeItem`, {
                      now: String(PW),
                      need: String(EW)
                    })
                  })]
                }), (0, MN.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, MN.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*PW/EW)}%`
                    }
                  })
                })]
              })]
            }, OW)
          })), LW > 0 && (0, MN.jsxs)("li", {
            className: YE()("Baf2CoreChargePower", {
              Short: bW && !cW
            }),
            children: [(0, MN.jsx)(Qt, {}), (0, MN.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, MN.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, MN.jsx)("span", {
                  children: NW(`${rt}coreChargePowerRow`, {
                    power: zW(LW)
                  })
                })
              })
            })]
          })]
        }), (0, MN.jsx)("p", {
          className: "Baf2CoreHint",
          children: NW(kW, sW)
        }), !jW && (bW || lW) && (0, MN.jsx)("button", {
          type: "button",
          className: YE()("Baf2CoreChargeToggle", {
            Stopped: lW
          }),
          onClick: () => {
            EW.send(SW), AW(!lW)
          },
          children: NW(lW ? `${rt}coreChargeRestart` : `${rt}coreChargeStop`)
        })]
      })
    }

    function iZ(WW) {
      let {
        charge: iW,
        reached: OW,
        itemNames: mW
      } = WW;
      const {
        t: EW
      } = (0, hE.B)();
      return (0, MN.jsxs)("div", {
        className: YE()("Baf2CoreCharge", {
          Done: OW
        }),
        children: [(0, MN.jsxs)("h4", {
          children: [EW(`${rt}coreChargeTitle`), (0, MN.jsx)("span", {
            children: EW(`${rt}coreChargeSpecTime`, {
              time: zt(iW.seconds)
            })
          })]
        }), (0, MN.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [iW.items.map((WW => {
            var iW;
            let {
              item: NW,
              amount: PW
            } = WW;
            return (0, MN.jsxs)("li", {
              className: YE()({
                Done: OW
              }),
              children: [(0, MN.jsx)(Ft, {
                item: NW
              }), (0, MN.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, MN.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, MN.jsx)(uE.d, {
                    text: null !== (iW = mW[NW]) && void 0 !== iW ? iW : NW
                  }), (0, MN.jsx)("span", {
                    children: EW(`${rt}coreChargeSpecItem`, {
                      need: String(PW)
                    })
                  })]
                })
              })]
            }, NW)
          })), iW.powerPerS > 0 && (0, MN.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, MN.jsx)(Qt, {}), (0, MN.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, MN.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, MN.jsx)("span", {
                  children: EW(`${rt}coreChargePowerRow`, {
                    power: zW(iW.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const OZ = "buildAFactory2Game:";

    function mZ(WW) {
      let {
        def: iW,
        reached: OW,
        banked: mW,
        itemNames: EW
      } = WW;
      const {
        t: NW
      } = (0, hE.B)();
      return (0, MN.jsx)("ul", {
        className: "Baf2CoreCost",
        children: iW.cost.map((WW => {
          let {
            item: iW,
            amount: PW
          } = WW;
          const LW = OW ? 0 : mW(iW);
          return (0, MN.jsx)("li", {
            children: (0, MN.jsx)(gt, {
              item: iW,
              itemNames: EW,
              children: (0, MN.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: LW > 0 ? NW(`${OZ}coreBankedFor`, {
                  amount: String(LW),
                  total: String(PW)
                }) : `\xd7${PW}`
              })
            })
          }, iW)
        }))
      })
    }

    function EZ(WW, iW) {
      if (iW >= tW()) return WW(`${OZ}coreMaxTier`);
      const OW = wW[iW + 1];
      return OW && !OW.startsWith("upgradeCore") ? WW(`${OZ}coreGateQuest`, {
        quest: WW(`${OZ}quest_${OW}`)
      }) : WW(`${OZ}coreGateClosed`)
    }

    function NZ() {
      const {
        t: WW
      } = (0, hE.B)(), iW = gP(), OW = (0, mW.useRef)(null), EW = (0, mW.useRef)(Date.now());
      return Bw(!0, OW), (0, MN.jsx)("div", {
        ref: OW,
        className: "Baf2CoreGrow",
        children: (0, MN.jsx)(UP.n, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - EW.current >= 600 && iW.send(sW)
          },
          children: WW(`${OZ}coreGrow`)
        })
      })
    }

    function PZ(WW) {
      let {
        message: iW,
        itemNames: OW,
        next: mW
      } = WW;
      const EW = gP(),
        {
          t: NW
        } = (0, hE.B)(),
        PW = iW.baf2CoreTier,
        LW = iW.baf2CoreReady,
        cW = iW.baf2CoreNeeds.filter((WW => {
          let [, iW, OW, mW] = WW;
          return mW > 0 && iW < OW
        })),
        wW = iW.baf2CoreNeeds.every((WW => {
          let [, iW, OW] = WW;
          return iW >= OW
        })),
        tW = iW.baf2CoreKeep;
      return (0, MN.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, MN.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [LW && (0, MN.jsx)(NZ, {}), (0, MN.jsx)("h3", {
            children: NW(`${OZ}coreBring`)
          }), (0, MN.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: iW.baf2CoreNeeds.map((WW => {
              let [iW, mW, PW, LW] = WW;
              return (0, MN.jsxs)("li", {
                className: YE()({
                  Done: mW >= PW
                }),
                children: [(0, MN.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, MN.jsx)(nE.b, {
                    itemName: iW,
                    amount: 0
                  })
                }), (0, MN.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, MN.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, MN.jsx)(uE.d, {
                      text: OW[iW]
                    }), (0, MN.jsxs)("span", {
                      children: [mW, "/", PW]
                    })]
                  }), (0, MN.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, MN.jsx)("div", {
                      style: {
                        width: 100 * mW / PW + "%"
                      }
                    }), LW > 0 && (0, MN.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * LW / PW + "%"
                      }
                    })]
                  })]
                }), LW > 0 && mW < PW && (0, MN.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    EW.send(`${KW} ${iW}`)
                  },
                  children: NW(`${OZ}coreDeposit`, {
                    amount: String(LW)
                  })
                })]
              }, iW)
            }))
          }), iW.baf2CoreCharge && (0, MN.jsx)(WZ, {
            charge: iW.baf2CoreCharge,
            hint: iW.baf2CoreChargeHint,
            itemNames: OW
          }), !LW && cW.length > 1 && (0, MN.jsx)(UP.n, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              EW.send(sW)
            },
            children: NW(`${OZ}coreHandOver`)
          }), !LW && void 0 !== tW && (0, MN.jsx)("p", {
            className: "Baf2CoreHint",
            children: NW(`${OZ}coreKeepRest`, {
              item: (0, iN.g)(NW, tW)
            })
          }), !LW && !wW && 0 === cW.length && void 0 === tW && (0, MN.jsx)("p", {
            className: "Baf2CoreHint",
            children: NW(`${OZ}coreNothingHeld`)
          }), (0, MN.jsx)(It, {
            message: iW,
            itemNames: OW
          })]
        }), (0, MN.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, MN.jsx)("h3", {
            children: NW(`${OZ}coreRewards`)
          }), (0, MN.jsx)(ft, {
            def: mW,
            tier: PW + 1,
            itemNames: OW
          })]
        })]
      })
    }

    function LZ(WW) {
      let {
        message: iW,
        itemNames: OW,
        shown: mW
      } = WW;
      const {
        t: EW
      } = (0, hE.B)(), NW = iW.baf2CoreTier, PW = UW(mW), LW = mW <= NW, cW = new Map(iW.baf2CoreBanked), wW = !kW(NW, YW(iW)) && mW === NW;
      return (0, MN.jsxs)("div", {
        className: YE()("Baf2CoreBody", {
          Locked: !LW
        }),
        children: [(0, MN.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, MN.jsx)("h3", {
            children: EW(LW ? `${OZ}coreItTook` : `${OZ}coreItNeeds`)
          }), 0 === PW.cost.length && (0, MN.jsx)("p", {
            className: "Baf2CoreHint",
            children: EW(`${OZ}coreTierStart`)
          }), PW.cost.length > 0 && (0, MN.jsx)(mZ, {
            def: PW,
            reached: LW,
            banked: WW => {
              var iW;
              return function(WW, iW, OW, mW) {
                let EW = WW;
                for (let PW = iW + 2; PW <= OW; PW++) {
                  var NW;
                  const WW = UW(PW).cost.find((WW => WW.item === mW)),
                    iW = Math.min(EW, null !== (NW = null === WW || void 0 === WW ? void 0 : WW.amount) && void 0 !== NW ? NW : 0);
                  if (PW === OW) return iW;
                  EW -= iW
                }
                return 0
              }(null !== (iW = cW.get(WW)) && void 0 !== iW ? iW : 0, NW, mW, WW)
            },
            itemNames: OW
          }), PW.charge && (0, MN.jsx)(iZ, {
            charge: PW.charge,
            reached: LW,
            itemNames: OW
          }), wW && (0, MN.jsxs)(MN.Fragment, {
            children: [(0, MN.jsx)("p", {
              className: "Baf2CoreHint",
              children: EZ(EW, NW)
            }), (0, MN.jsx)(It, {
              message: iW,
              itemNames: OW
            })]
          })]
        }), (0, MN.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, MN.jsx)("h3", {
            children: EW(LW ? `${OZ}coreGave` : `${OZ}coreLockedRewards`)
          }), (0, MN.jsx)(ft, {
            def: PW,
            tier: mW,
            itemNames: OW
          })]
        })]
      })
    }

    function cZ(WW, iW) {
      const {
        key: OW,
        params: mW
      } = lW(iW - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return WW(`${OZ}${OW}`, mW)
    }
    const wZ = "buildAFactory2Game:",
      tZ = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      ZZ = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function xZ(WW) {
      let {
        view: iW,
        close: OW,
        askIslands: EW
      } = WW;
      const {
        t: NW
      } = (0, hE.B)(), [PW, LW] = (0, mW.useState)(!1);
      (0, mW.useEffect)((() => {
        if (!PW) return;
        const WW = window.setTimeout((() => {
          LW(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(WW)
        }
      }), [PW]);
      const {
        message: cW,
        itemNames: wW
      } = iW, tW = cW.baf2CoreTier, ZW = UW(tW), xW = kW(tW, YW(cW)), [bW, jW] = cW.baf2CoreMachines, [sW, MW] = cW.baf2CoreBelts, KW = cW.baf2CoreStorage, SW = cW.baf2CoreReady, [yW, TW] = (0, mW.useState)(null), JW = (null === yW || void 0 === yW ? void 0 : yW.at) === tW && yW.ready === SW ? yW.tier : xW ? tW + 1 : tW;
      let hW = "coreTierLocked";
      JW <= tW ? hW = "coreTierReached" : JW === tW + 1 && (hW = "coreTierNext");
      const HW = NW(`${wZ}${UW(JW).nameKey}`),
        nW = JW === tW + 1 ? xW : null,
        uW = lW(JW, {
          tier: hW,
          stage: tZ[hW],
          atomic: ZZ[hW]
        }),
        oW = NW(`${wZ}${uW.key}`, {
          ...uW.params,
          name: HW
        }),
        dW = lW(tW, AW),
        eW = NW(`${wZ}${dW.key}`, {
          ...dW.params,
          name: NW(`${wZ}${ZW.nameKey}`)
        });
      return (0, MN.jsx)(jP.b, {
        close: OW,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, MN.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, MN.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, MN.jsxs)("div", {
              children: [(0, MN.jsx)("h2", {
                id: "baf2CoreTitle",
                children: NW(`${wZ}coreTitle`)
              }), void 0 !== cW.baf2CoreIslandName && (0, MN.jsx)("p", {
                className: "Baf2CoreIsland",
                children: cW.baf2CoreIslandName
              }), (0, MN.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, MN.jsx)("span", {
                  children: eW
                }), (0, MN.jsx)("span", {
                  className: YE()({
                    Full: bW >= jW
                  }),
                  children: NW(`${wZ}coreMachineCount`, {
                    amount: String(bW),
                    total: String(jW)
                  })
                }), (0, MN.jsx)("span", {
                  className: YE()({
                    Full: sW >= MW
                  }),
                  children: NW(`${wZ}coreBeltCount`, {
                    amount: String(sW),
                    total: String(MW)
                  })
                }), void 0 !== KW && (0, MN.jsx)("span", {
                  className: YE()({
                    Full: KW[0] >= KW[1]
                  }),
                  children: NW(`${wZ}coreStorageCount`, {
                    amount: String(KW[0]),
                    total: String(KW[1])
                  })
                })]
              })]
            }), (0, MN.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [cW.baf2CoreIslands && (0, MN.jsx)(UP.f, {
                className: "Baf2CoreIslandsButton",
                disabled: PW,
                onClick: () => {
                  LW(!0), EW()
                },
                children: NW(`${wZ}islandsOpenButton`)
              }), (0, MN.jsx)(UP.l, {
                onClick: OW
              })]
            })]
          }), (0, MN.jsx)(et, {
            tier: tW,
            shown: JW,
            Kl: WW => {
              TW({
                tier: WW,
                at: tW,
                ready: SW
              })
            }
          }), (0, MN.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [oW, JW > tW + 1 && (0, MN.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: cZ(NW, JW)
            })]
          }), 6 === JW && JW > tW && (0, MN.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: NW(`${wZ}coreStagesNote`)
          }), 11 === JW && JW > tW && (0, MN.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: NW(`${wZ}coreAtomicNote`)
          }), nW && (0, MN.jsx)(PZ, {
            message: cW,
            itemNames: wW,
            next: nW
          }), !nW && (0, MN.jsx)(LZ, {
            message: cW,
            itemNames: wW,
            shown: JW
          })]
        })
      })
    }
    const lZ = {
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
    const AZ = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: NN,
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

    function bZ(WW) {
      return WW.baf2DropCometOreOnly ? "dropCometOre" : WW.baf2DropCometIsotope ? "seed" === WW.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function jZ(WW) {
      let {
        message: iW,
        quests: OW,
        close: EW,
        leave: NW
      } = WW;
      const PW = gP(),
        {
          t: LW
        } = (0, hE.B)(),
        cW = (0, Qw.g)(gE, OW.get()),
        wW = function(WW) {
          var iW;
          if (!dW(WW.tutorial)) return null;
          const OW = WW.rows.find((WW => WW.current)),
            mW = OW ? lZ[OW.key] : void 0;
          return null !== (iW = null !== mW && void 0 !== mW ? mW : WW.side ? lZ[WW.side.row.key] : void 0) && void 0 !== iW ? iW : null
        }(cW),
        tW = null === cW.tier || cN(cW.tier),
        ZW = tW ? AZ : AZ.filter((WW => {
          let {
            item: iW
          } = WW;
          return iW !== NN
        })),
        [xW, lW] = (0, mW.useState)(null),
        AW = null !== xW && void 0 !== xW ? xW : !iW.baf2DropFoundSalvage && tW,
        bW = iW.baf2DropRuinDistance,
        jW = iW.baf2DropComet,
        UW = iW.baf2DropOldWorks,
        kW = iW.baf2DropGrove,
        sW = function(WW) {
          return 2 + Number(void 0 !== WW.baf2DropComet) + Number(!!WW.baf2DropOwedComet || void 0 !== WW.baf2DropOwedWaitMinutes) + Number(void 0 !== WW.baf2DropDigDistance) + Number(void 0 !== WW.baf2DropOldWorks) + Number(void 0 !== WW.baf2DropGrove)
        }(iW),
        MW = WW => {
          PW.send(function(WW) {
            return `baf2drop ${WW}`
          }(WW)), NW()
        };
      let KW = LW("buildAFactory2Game:dropRuinNone");
      if (null !== bW) {
        let WW = iW.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        iW.baf2DropRuinOldWorks && (WW = "dropRuinOldWorks");
        const OW = void 0 === iW.baf2DropRuinCluster ? LW("buildAFactory2Game:dropRuinOpen") : LW("buildAFactory2Game:dropRuinCluster", {
          count: String(iW.baf2DropRuinCluster)
        });
        KW = `${LW(`buildAFactory2Game:${WW}`,{distance:String(bW)})} ${OW}`
      }
      let SW = LW("buildAFactory2Game:dropBelowDescription");
      void 0 !== iW.baf2DropBelowLook && (SW = LW("buildAFactory2Game:dropBelowLook", {
        look: LW(iW.baf2DropBelowLook)
      }));
      const YW = "buildAFactory2Game:wildsRegion_survivorGrove" === iW.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        yW = kN(LW, 60 * function(WW) {
          const [iW, OW] = (0, mW.useState)((() => Date.now())), [EW, NW] = (0, mW.useState)(iW);
          return (0, mW.useEffect)((() => {
            const WW = Date.now();
            OW(WW), NW(WW)
          }), [WW]), (0, mW.useEffect)((() => {
            const WW = window.setInterval((() => {
              NW(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(WW)
            }
          }), []), Math.max(1, WW.baf2DropRenewMinutes - Math.floor((EW - iW) / 6e4))
        }(iW)),
        TW = function(WW, iW, OW) {
          return "ruin" === WW && !OW || "owed" === WW && !iW.baf2DropOwedComet ? null : WW
        }(wW, iW, null !== bW),
        JW = function(WW) {
          for (var iW = arguments.length, OW = new Array(iW > 1 ? iW - 1 : 0), mW = 1; mW < iW; mW++) OW[mW - 1] = arguments[mW];
          return YE()("Baf2DropTile", ...OW, {
            Wanted: TW === WW
          })
        };
      return (0, MN.jsx)(jP.b, {
        close: EW,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, MN.jsxs)("section", {
          className: YE()("Baf2Panel Baf2DropMap", {
            Many: sW >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, MN.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, MN.jsxs)("div", {
              children: [(0, MN.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: LW("buildAFactory2Game:dropMapTitle")
              }), (0, MN.jsx)("p", {
                children: LW("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, MN.jsx)(UP.l, {
              onClick: EW
            })]
          }), (0, MN.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== jW && (0, MN.jsxs)(UP.B, {
              className: JW("comet", "Baf2DropComet"),
              onClick: () => {
                MW("comet")
              },
              children: [(0, MN.jsx)("strong", {
                children: LW("buildAFactory2Game:dropComet")
              }), (0, MN.jsx)("span", {
                children: LW(`buildAFactory2Game:${bZ(iW)}`, {
                  distance: String(jW)
                })
              })]
            }), iW.baf2DropOwedComet && (0, MN.jsxs)(UP.B, {
              className: JW("owed", "Baf2DropComet"),
              onClick: () => {
                MW("owed")
              },
              children: [(0, MN.jsx)("strong", {
                children: LW("buildAFactory2Game:dropOwedComet")
              }), (0, MN.jsx)("span", {
                children: iW.baf2DropOwedIsotope ? LW("buildAFactory2Game:dropOwedIsotopeDescription") : LW("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== iW.baf2DropOwedWaitMinutes && (0, MN.jsxs)(UP.B, {
              className: JW("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, MN.jsx)("strong", {
                children: LW("buildAFactory2Game:dropOwedComet")
              }), (0, MN.jsx)("span", {
                children: LW("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(iW.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, MN.jsxs)(UP.f, {
              className: JW("below"),
              onClick: () => {
                MW("below")
              },
              children: [(0, MN.jsx)("strong", {
                children: LW("buildAFactory2Game:dropBelow")
              }), (0, MN.jsx)("span", {
                children: SW
              })]
            }), void 0 !== iW.baf2DropDigDistance && (0, MN.jsxs)(UP.s, {
              className: JW("dig"),
              onClick: () => {
                MW("dig")
              },
              children: [(0, MN.jsx)("strong", {
                children: LW("buildAFactory2Game:dropDig")
              }), (0, MN.jsx)("span", {
                children: LW("buildAFactory2Game:dropDigDescription", {
                  distance: String(iW.baf2DropDigDistance),
                  y: UN(iW.baf2DropDigY)
                })
              })]
            }), void 0 !== kW && (0, MN.jsxs)(UP.s, {
              className: JW("grove", "Baf2DropGrove"),
              onClick: () => {
                MW("grove")
              },
              children: [(0, MN.jsx)("strong", {
                children: LW("buildAFactory2Game:dropGrove")
              }), (0, MN.jsx)("span", {
                children: LW(`buildAFactory2Game:${YW}`, {
                  distance: String(kW)
                })
              })]
            }), (0, MN.jsxs)(UP.n, {
              className: JW("ruin"),
              disabled: null === bW,
              onClick: () => {
                MW("ruin")
              },
              children: [(0, MN.jsx)("strong", {
                children: LW("buildAFactory2Game:dropRuin")
              }), (0, MN.jsx)("span", {
                children: KW
              })]
            }), void 0 !== UW && (0, MN.jsxs)(UP.O, {
              className: JW("works"),
              onClick: () => {
                MW("works")
              },
              children: [(0, MN.jsx)("strong", {
                children: LW("buildAFactory2Game:dropOldWorks")
              }), (0, MN.jsx)("span", {
                children: LW("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(UW)
                })
              })]
            })]
          }), (0, MN.jsx)("p", {
            className: "Baf2DropRenew",
            children: LW("buildAFactory2Game:dropRenew", {
              time: yW
            })
          }), (0, MN.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: AW,
            onToggle: WW => {
              WW.currentTarget.open !== AW && lW(WW.currentTarget.open)
            },
            children: [(0, MN.jsx)("summary", {
              children: LW("buildAFactory2Game:dropSalvageWhat")
            }), (0, MN.jsx)("p", {
              children: LW("buildAFactory2Game:dropSalvageIntro")
            }), (0, MN.jsx)("ul", {
              children: ZW.map((WW => {
                let {
                  item: iW,
                  nameKey: OW,
                  useKey: mW,
                  params: EW
                } = WW;
                return (0, MN.jsxs)("li", {
                  children: [(0, MN.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, MN.jsx)(nE.b, {
                      itemName: iW,
                      amount: 0
                    })
                  }), (0, MN.jsxs)("span", {
                    children: [(0, MN.jsx)("strong", {
                      children: LW(OW)
                    }), ": ", LW(mW, EW)]
                  })]
                }, iW)
              }))
            })]
          })]
        })
      })
    }
    const UZ = "buildAFactory2Game:";

    function kZ(WW, iW) {
      return WW.sendIslandEdit(`baf2coopleave ${iW.baf2IslandId}`)
    }

    function sZ(WW) {
      let {
        card: iW,
        canRename: OW,
        done: EW,
        t: NW
      } = WW;
      const PW = gP(),
        [LW, cW] = (0, mW.useState)(iW.baf2IslandName),
        wW = Uw(LW),
        tW = "" === wW || kw(wW),
        ZW = () => {
          !tW && OW && (wW !== iW.baf2IslandName ? EW(PW.sendIslandEdit(`baf2islandrename ${iW.baf2IslandId} ${wW}`)) : EW(null))
        },
        xW = () => {
          EW(null)
        };
      return (0, MN.jsxs)("div", {
        className: "Baf2IslandForm",
        ...Cw(xW),
        children: [(0, MN.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [NW(`${UZ}islandsRenameLabel`), (0, MN.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: LW,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: Xw,
            onChange: WW => {
              cW(WW.target.value)
            },
            ...fw(ZW, xW)
          })]
        }), "" === wW && (0, MN.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: NW(`${UZ}islandsRenameEmpty`)
        }), kw(wW) && (0, MN.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: NW(`${UZ}islandsNameReserved`)
        }), (0, MN.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, MN.jsx)(UP.s, {
            disabled: tW || !OW,
            onClick: ZW,
            children: NW(`${UZ}islandsRenameSave`)
          }), (0, MN.jsx)(UP.f, {
            onClick: xW,
            children: NW(`${UZ}islandsCancel`)
          })]
        })]
      })
    }

    function MZ(WW) {
      let {
        card: iW,
        canDelete: OW,
        done: EW,
        t: NW
      } = WW;
      const PW = gP(),
        [LW, cW] = (0, mW.useState)(""),
        wW = function(WW, iW) {
          return Uw(WW).toLowerCase() === Uw(iW).toLowerCase()
        }(LW, iW.baf2IslandName),
        tW = () => {
          wW && OW && EW(PW.sendIslandEdit(`baf2islanddelete ${iW.baf2IslandId}`))
        },
        ZW = () => {
          EW(null)
        },
        xW = nw("name"),
        [lW, AW = ""] = NW(`${UZ}islandsDeleteConfirm`, {
          name: xW
        }).split(xW);
      return (0, MN.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...Cw(ZW),
        children: [(0, MN.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, MN.jsxs)("span", {
            children: [lW, (0, MN.jsx)("strong", {
              children: iW.baf2IslandName
            }), AW]
          }), (0, MN.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: LW,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: Xw,
            onChange: WW => {
              cW(WW.target.value)
            },
            ...fw(tW, ZW)
          })]
        }), gw(iW) && (0, MN.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: NW(`${UZ}islandsDeleteLeftBack`)
        }), (0, MN.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, MN.jsx)(UP.O, {
            disabled: !wW || !OW,
            onClick: tW,
            children: NW(`${UZ}islandsDeleteForGood`)
          }), (0, MN.jsx)(UP.f, {
            onClick: ZW,
            children: NW(`${UZ}islandsCancel`)
          })]
        })]
      })
    }

    function KZ(WW) {
      let {
        members: iW,
        t: OW
      } = WW;
      const mW = iW.length;
      return (0, MN.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, MN.jsxs)("span", {
          children: [1 === mW ? OW(`${UZ}islandsPlayersOne`) : OW(`${UZ}islandsPlayers`, {
            count: String(mW)
          }), " "]
        }), iW.map(((WW, iW) => (0, MN.jsxs)("span", {
          className: YE()("Baf2IslandMember", {
            Here: WW.baf2MemberHere
          }),
          title: WW.baf2MemberHere ? OW(`${UZ}islandsPlayerHere`) : void 0,
          children: [WW.baf2MemberName, iW < mW - 1 ? ", " : ""]
        }, WW.baf2MemberKey)))]
      })
    }

    function SZ(WW) {
      let {
        card: iW,
        answered: OW,
        nowMs: EW,
        t: NW
      } = WW;
      const PW = gP(),
        [LW, cW] = (0, mW.useState)(new Map),
        wW = gw(iW);
      if (!wW) return null;
      return (0, MN.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, MN.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: NW(`${UZ}islandsLeftTitle`)
        }), (0, MN.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: wW.left.map((WW => {
            const mW = WW.baf2LeftKey,
              tW = Vw(LW.get(mW), OW, EW),
              ZW = function(WW) {
                return 1 === WW ? [`${lw}islandsLeftItemsOne`] : [`${lw}islandsLeftItems`, {
                  count: String(WW)
                }]
              }(WW.baf2LeftItems);
            return (0, MN.jsx)("li", {
              className: YE()("Baf2IslandPerson", {
                Pending: tW
              }),
              children: (0, MN.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, MN.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: WW.baf2LeftName
                }), (0, MN.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: NW(ZW[0], ZW[1])
                }), wW.claim && (0, MN.jsx)(UP.s, {
                  className: "Baf2IslandPersonButton",
                  disabled: tW,
                  onClick: () => {
                    (WW => {
                      const OW = PW.sendIslandEdit(`baf2coopclaim ${iW.baf2IslandId} ${WW}`);
                      cW((iW => new Map(iW).set(WW, {
                        atMs: Date.now(),
                        answer: OW
                      })))
                    })(mW)
                  },
                  children: NW(`${UZ}islandsClaim`)
                })]
              })
            }, mW)
          }))
        }), wW.goThere && (0, MN.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: NW(`${UZ}islandsClaimGoThere`)
        })]
      })
    }

    function YZ(WW) {
      let {
        card: iW,
        view: OW,
        blocked: EW,
        maxIslands: NW,
        answered: PW,
        nowMs: LW,
        done: cW,
        openSocial: wW,
        t: tW
      } = WW;
      const ZW = gP(),
        [xW, lW] = (0, mW.useState)(new Map),
        [AW, bW] = (0, mW.useState)(new Map),
        [jW, UW] = (0, mW.useState)(null),
        kW = (0, mW.useRef)(null);
      Gw(kW);
      const sW = iW.baf2IslandId,
        MW = iW.baf2IslandCoop,
        KW = null !== MW && void 0 !== MW && MW.baf2CoopMembers.some((WW => WW.baf2MemberKey === jW)) ? jW : null,
        SW = function(WW, iW) {
          const OW = WW.baf2IslandCoop;
          return OW && Dw(OW) || null !== iW ? void 0 : WW.baf2IslandInvitable
        }(iW, EW),
        YW = function(WW, iW) {
          const OW = WW.baf2IslandCoop;
          return OW && Dw(OW) ? {
            key: `${lw}islandsCoopFull`,
            params: {
              max: String(OW.baf2CoopMax)
            }
          } : void 0 !== WW.baf2IslandInvitable && null === iW || OW && !OW.baf2CoopManageHere ? null : "degraded" === iW || "stuck" === iW ? {
            key: `${lw}islandsInviteNotLoaded`
          } : null === iW || function(WW) {
            return "notHome" === WW || "wilds" === WW || "visiting" === WW
          }(iW) || Sw(iW) ? {
            key: `${lw}islandsInviteGoThere`
          } : {
            key: `${lw}islandsInviteBusy`
          }
        }(iW, EW),
        yW = () => {
          var WW;
          UW(null), null === (WW = kW.current) || void 0 === WW || WW.focus()
        };
      return (0, MN.jsxs)("div", {
        ref: kW,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...Cw(null === KW ? cW : yW),
        children: [MW && (0, MN.jsxs)(MN.Fragment, {
          children: [(0, MN.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: tW(`${UZ}islandsPlayersTitle`, {
              count: String(MW.baf2CoopMembers.length),
              max: String(MW.baf2CoopMax)
            })
          }), (0, MN.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: MW.baf2CoopMembers.map(((WW, iW) => {
              const mW = WW.baf2MemberKey,
                EW = Vw(xW.get(mW), PW, LW);
              return (0, MN.jsxs)("li", {
                className: YE()("Baf2IslandPerson", {
                  Pending: EW
                }),
                children: [(0, MN.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, MN.jsx)("span", {
                    className: YE()("Baf2IslandPersonName", {
                      Here: WW.baf2MemberHere
                    }),
                    children: WW.baf2MemberName
                  }), WW.baf2MemberHere && (0, MN.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: tW(`${UZ}islandsPlayerHere`)
                  }), 0 === iW && (0, MN.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: tW(`${UZ}islandsPlayerOwner`)
                  }), OW.remove && iW > 0 && !EW && KW !== mW && (0, MN.jsx)(UP.S, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var WW;
                      UW(mW), null === (WW = kW.current) || void 0 === WW || WW.focus()
                    },
                    children: tW(`${UZ}islandsRemove`)
                  })]
                }), KW === mW && (0, MN.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, MN.jsx)("p", {
                    children: uw(tW, `${UZ}islandsRemoveConfirm`, {
                      player: WW.baf2MemberName
                    })
                  }), (0, MN.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, MN.jsx)(UP.O, {
                      onClick: () => {
                        (WW => {
                          const iW = ZW.sendIslandEdit(`baf2coopremove ${sW} ${WW.baf2MemberKey}`);
                          lW((OW => new Map(OW).set(WW.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: iW
                          }))), yW()
                        })(WW)
                      },
                      children: tW(`${UZ}islandsRemoveYes`)
                    }), (0, MN.jsx)(UP.f, {
                      onClick: yW,
                      children: tW(`${UZ}islandsCancel`)
                    })]
                  })]
                })]
              }, mW)
            }))
          })]
        }), (void 0 !== SW || null !== YW) && (0, MN.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: tW(`${UZ}islandsInviteTitle`)
        }), !MW && (void 0 !== SW || null !== YW) && (0, MN.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: tW(`${UZ}islandsInviteShareNote`)
        }), 0 === (null === SW || void 0 === SW ? void 0 : SW.length) && (0, MN.jsx)(yZ, {
          openSocial: wW,
          t: tW
        }), void 0 !== SW && SW.length > 0 && (0, MN.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: SW.map((WW => {
            const iW = !0 === WW.baf2InvitableSent || Vw(AW.get(WW.baf2InvitableId), PW, LW);
            return (0, MN.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, MN.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, MN.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: WW.baf2InvitableName
                }), WW.baf2InvitableFull && !iW && (0, MN.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: tW(`${UZ}islandsInviteTheirFull`, {
                    max: String(NW)
                  })
                }), (iW || !WW.baf2InvitableFull) && (0, MN.jsx)(UP.s, {
                  className: "Baf2IslandPersonButton",
                  disabled: iW,
                  onClick: () => {
                    (WW => {
                      const iW = ZW.sendIslandEdit(`baf2coopinvite ${sW} ${WW}`);
                      bW((OW => new Map(OW).set(WW, {
                        atMs: Date.now(),
                        answer: iW
                      })))
                    })(WW.baf2InvitableId)
                  },
                  children: tW(iW ? `${UZ}islandsInvited` : `${UZ}islandsInvite`)
                })]
              })
            }, WW.baf2InvitableId)
          }))
        }), YW && (0, MN.jsx)(rw, {
          note: YW,
          t: tW
        }), (0, MN.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, MN.jsx)(UP.f, {
            onClick: cW,
            children: tW(`${UZ}islandsDone`)
          })
        })]
      })
    }

    function yZ(WW) {
      let {
        openSocial: iW,
        t: OW
      } = WW;
      return (0, MN.jsxs)(MN.Fragment, {
        children: [(0, MN.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: OW(iW ? `${UZ}islandsInviteNobody` : `${UZ}islandsInviteNobodyGuest`)
        }), iW && (0, MN.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, MN.jsx)(UP.f, {
            onClick: iW,
            children: OW("socialBar:social")
          })
        })]
      })
    }

    function TZ(WW) {
      let {
        className: iW,
        text: OW,
        ConfirmButton: EW,
        confirmLabel: NW,
        canConfirm: PW,
        send: LW,
        done: cW,
        t: wW
      } = WW;
      const tW = (0, mW.useRef)(null);
      Gw(tW);
      const ZW = () => {
        cW(null)
      };
      return (0, MN.jsxs)("div", {
        ref: tW,
        tabIndex: -1,
        className: YE()("Baf2IslandForm", iW),
        ...Cw(ZW),
        children: [(0, MN.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: OW
        }), (0, MN.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, MN.jsx)(EW, {
            disabled: !PW,
            onClick: () => {
              PW && cW(LW())
            },
            children: NW
          }), (0, MN.jsx)(UP.f, {
            onClick: ZW,
            children: wW(`${UZ}islandsCancel`)
          })]
        })]
      })
    }

    function JZ(WW) {
      return "hidden" !== WW
    }

    function hZ(WW) {
      var iW, OW;
      let {
        card: EW,
        keepOwn: NW,
        blocked: PW,
        maxIslands: LW,
        serverNowMs: cW,
        nowMs: wW,
        actions: tW,
        full: ZW,
        waits: xW,
        answered: lW,
        mode: AW,
        setMode: bW,
        pending: jW,
        onSent: UW,
        switchTo: kW,
        leave: sW,
        coopOn: MW,
        openSocial: KW,
        t: SW
      } = WW;
      const YW = gP(),
        yW = EW.baf2IslandActive,
        TW = yW ? null : function(WW, iW) {
          if (WW <= 0) return null;
          const OW = iW - WW;
          if (OW < lN) return [`${lw}islandsPlayedJustNow`];
          if (OW < Aw) return [`${lw}islandsPlayedMinutes`, {
            minutes: String(Math.floor(OW / lN))
          }];
          if (OW < bw) return [`${lw}islandsPlayedHours`, {
            hours: String(Math.floor(OW / Aw))
          }];
          const mW = Math.floor(OW / bw);
          return 1 === mW ? [`${lw}islandsPlayedDay`] : [`${lw}islandsPlayedDays`, {
            days: String(mW)
          }]
        }(EW.baf2IslandLastPlayedMs, cW),
        JW = void 0 === (hW = EW.baf2IslandItems) ? null : 0 === hW ? [`${lw}islandsItemsNone`] : 1 === hW ? [`${lw}islandsItemsOne`] : [`${lw}islandsItems`, {
          count: String(hW)
        }];
      var hW;
      const HW = function(WW) {
          return WW ? 1 === WW ? [`${lw}islandsWaitingOne`] : [`${lw}islandsWaiting`, {
            count: String(WW)
          }] : null
        }(EW.baf2IslandWaiting),
        nW = EW.baf2IslandUnreadable,
        uW = EW.baf2IslandCoop,
        oW = vw(EW, tW, NW, ZW, MW, PW),
        dW = (0, mW.useRef)(null);
      Bw(null !== AW, dW);
      const eW = () => {
          var WW;
          bW(null), null === (WW = dW.current) || void 0 === WW || WW.focus()
        },
        vW = (WW, iW) => {
          eW(), null !== WW && UW(WW, iW)
        },
        gW = (WW, iW) => SW(`${UZ}${WW}`, {
          time: kN(SW, iW)
        });
      return (0, MN.jsxs)("li", {
        ref: dW,
        tabIndex: -1,
        className: YE()("Baf2IslandCard", {
          Active: yW,
          Pending: jW,
          Shared: void 0 !== uW
        }),
        children: [(0, MN.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, MN.jsx)("strong", {
            className: "Baf2IslandName",
            children: EW.baf2IslandName
          }), yW && (0, MN.jsx)("span", {
            className: "Baf2IslandBadge",
            children: SW(`${UZ}islandsOnThis`)
          }), uW && (0, MN.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: SW(`${UZ}islandsShared`)
          })]
        }), "member" === (null === uW || void 0 === uW ? void 0 : uW.baf2CoopRole) && (0, MN.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: uw(SW, `${UZ}islandsSharedBy`, {
            owner: uW.baf2CoopOwner
          })
        }), void 0 !== nW && (0, MN.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: SW("newer" === nW ? `${UZ}islandsUnreadable` : `${UZ}islandsDamaged`)
        }), "corrupt" === nW && ZW && (0, MN.jsx)("p", {
          className: "Baf2IslandStats",
          children: SW(`${UZ}islandsDamagedFull`)
        }), void 0 === nW && (0, MN.jsxs)(MN.Fragment, {
          children: [(0, MN.jsx)(aw, {
            tier: EW.baf2IslandTier,
            t: SW
          }), (0, MN.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, MN.jsx)("span", {
              children: 1 === EW.baf2IslandQuestsDone ? SW(`${UZ}islandsQuestsDoneOne`) : SW(`${UZ}islandsQuestsDone`, {
                count: String(EW.baf2IslandQuestsDone)
              })
            }), (0, MN.jsx)("span", {
              children: 1 === EW.baf2IslandMachines ? SW(`${UZ}islandsMachinesOne`) : SW(`${UZ}islandsMachines`, {
                count: String(EW.baf2IslandMachines)
              })
            }), JW && (0, MN.jsx)("span", {
              children: SW(JW[0], JW[1])
            }), HW && (0, MN.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: SW(HW[0], HW[1])
            }), TW && (0, MN.jsx)("span", {
              children: SW(TW[0], TW[1])
            })]
          })]
        }), uW && void 0 === uW.baf2CoopState && "people" !== AW && (0, MN.jsx)(KZ, {
          members: uW.baf2CoopMembers,
          t: SW
        }), null === AW && (0, MN.jsx)(SZ, {
          card: EW,
          answered: lW,
          nowMs: wW,
          t: SW
        }), oW.note && (0, MN.jsx)(rw, {
          note: oW.note,
          className: YE()({
            Unreachable: void 0 !== (null === uW || void 0 === uW ? void 0 : uW.baf2CoopState)
          }),
          t: SW
        }), "rename" === AW && (0, MN.jsx)(sZ, {
          card: EW,
          canRename: "enabled" === oW.rename,
          done: vW,
          t: SW
        }), "delete" === AW && (0, MN.jsx)(MZ, {
          card: EW,
          canDelete: "enabled" === oW.delete,
          done: WW => {
            vW(WW, uW ? "delete" : void 0)
          },
          t: SW
        }), "people" === AW && (0, MN.jsx)(YZ, {
          card: EW,
          view: oW,
          blocked: PW,
          maxIslands: LW,
          answered: lW,
          nowMs: wW,
          done: eW,
          openSocial: KW,
          t: SW
        }), "leave" === AW && (0, MN.jsx)(TZ, {
          className: "Leave",
          text: uw(SW, `${UZ}islandsLeaveConfirm`, {
            island: EW.baf2IslandName,
            owner: null !== (iW = null === (OW = EW.baf2IslandCoop) || void 0 === OW ? void 0 : OW.baf2CoopOwner) && void 0 !== iW ? iW : ""
          }),
          ConfirmButton: UP.O,
          confirmLabel: SW(`${UZ}islandsLeaveYes`),
          canConfirm: "enabled" === oW.leave,
          send: () => kZ(YW, EW),
          done: WW => {
            vW(WW, "leave"), null !== WW && yW && sW()
          },
          t: SW
        }), "unshare" === AW && (0, MN.jsx)(TZ, {
          className: "Unshare",
          text: uw(SW, `${UZ}islandsStopSharingConfirm`, {
            island: EW.baf2IslandName
          }),
          ConfirmButton: UP.s,
          confirmLabel: SW(`${UZ}islandsStopSharing`),
          canConfirm: "enabled" === oW.unshare,
          send: () => YW.sendIslandEdit(`baf2coopunshare ${EW.baf2IslandId}`),
          done: WW => {
            vW(WW), null !== WW && sW()
          },
          t: SW
        }), null === AW && !jW && (0, MN.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": EW.baf2IslandName,
          children: [JZ(oW.switch) && (0, MN.jsx)(UP.s, {
            disabled: "enabled" !== oW.switch,
            onClick: kW,
            children: "tryAgain" === oW.switchLabel ? SW(`${UZ}islandsTryAgain`) : xW.switch > 0 ? gW("islandsSwitchIn", xW.switch) : SW(`${UZ}islandsSwitch`)
          }), JZ(oW.rename) && (0, MN.jsx)(UP.f, {
            disabled: "enabled" !== oW.rename,
            onClick: () => {
              bW("rename")
            },
            children: SW(`${UZ}islandsRename`)
          }), JZ(oW.people) && (0, MN.jsx)(UP.f, {
            disabled: "enabled" !== oW.people,
            onClick: () => {
              bW("people")
            },
            children: SW("players" === oW.peopleLabel ? `${UZ}islandsPlayersButton` : `${UZ}islandsInviteButton`)
          }), JZ(oW.unshare) && (0, MN.jsx)(UP.f, {
            disabled: "enabled" !== oW.unshare,
            onClick: () => {
              bW("unshare")
            },
            children: SW(`${UZ}islandsStopSharing`)
          }), JZ(oW.dismiss) && (0, MN.jsx)(UP.f, {
            disabled: "enabled" !== oW.dismiss,
            onClick: () => {
              UW(kZ(YW, EW), "dismiss"), yW && sW()
            },
            children: SW(`${UZ}islandsDismiss`)
          }), JZ(oW.leave) && (0, MN.jsx)(UP.S, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== oW.leave,
            onClick: () => {
              bW("leave")
            },
            children: yW && xW.switch > 0 ? gW("islandsLeaveIn", xW.switch) : SW(`${UZ}islandsLeave`)
          }), JZ(oW.delete) && (0, MN.jsx)(UP.S, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== oW.delete,
            onClick: () => {
              bW("delete")
            },
            children: xW.change > 0 && oW.deleteWaits ? gW("islandsDeleteIn", xW.change) : SW(`${UZ}islandsDelete`)
          })]
        })]
      })
    }
    const HZ = "buildAFactory2Game:";

    function nZ(WW) {
      let {
        invite: iW,
        actions: OW,
        full: EW,
        maxIslands: NW,
        waitSeconds: PW,
        focus: LW,
        focused: cW,
        join: wW,
        decline: tW,
        t: ZW
      } = WW;
      const [xW, lW] = (0, mW.useState)(!1), AW = (0, mW.useRef)(null);
      Bw(xW, AW), (0, mW.useEffect)((() => {
        var WW;
        LW && (lW(!0), null === (WW = AW.current) || void 0 === WW || WW.focus(), cW())
      }), [LW, cW]);
      const bW = function(WW, iW, OW, mW, EW) {
          return OW ? {
            join: !1,
            note: {
              key: `${lw}islandsJoinTooMany`,
              params: {
                max: String(mW)
              }
            }
          } : WW.baf2InvitePlayers >= EW ? {
            join: !1,
            note: {
              key: `${lw}islandsJoinFull`
            }
          } : {
            join: iW.switch,
            note: null
          }
        }(iW, OW, EW, NW, 10),
        jW = iW.baf2InviteIsland,
        UW = iW.baf2InvitePlayers,
        kW = () => {
          var WW;
          lW(!1), null === (WW = AW.current) || void 0 === WW || WW.focus()
        },
        sW = PW > 0 && null === bW.note ? ZW(`${HZ}islandsJoinIn`, {
          time: kN(ZW, PW)
        }) : ZW(`${HZ}islandsJoin`);
      return (0, MN.jsxs)("li", {
        ref: AW,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...xW ? Cw(kW) : {},
        children: [(0, MN.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, MN.jsx)("strong", {
            className: "Baf2IslandName",
            children: jW
          })
        }), (0, MN.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: uw(ZW, `${HZ}islandsInvitedBy`, {
            owner: iW.baf2InviteOwner
          })
        }), (0, MN.jsx)(aw, {
          tier: iW.baf2InviteTier,
          t: ZW
        }), (0, MN.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, MN.jsx)("span", {
            children: 1 === UW ? ZW(`${HZ}islandsPlayersCountOne`) : ZW(`${HZ}islandsPlayersCount`, {
              count: String(UW)
            })
          })
        }), bW.note && (0, MN.jsx)(rw, {
          note: bW.note,
          t: ZW
        }), xW && (0, MN.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: uw(ZW, `${HZ}islandsJoinConfirm`, {
            island: jW
          })
        }), !xW && (0, MN.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": jW,
          children: [(0, MN.jsx)(UP.s, {
            disabled: !bW.join,
            onClick: () => {
              var WW;
              lW(!0), null === (WW = AW.current) || void 0 === WW || WW.focus()
            },
            children: sW
          }), (0, MN.jsx)(UP.f, {
            onClick: tW,
            children: ZW(`${HZ}islandsDecline`)
          })]
        }), xW && (0, MN.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, MN.jsx)(UP.s, {
            disabled: !bW.join,
            onClick: wW,
            children: ZW(`${HZ}islandsJoinYes`)
          }), (0, MN.jsx)(UP.f, {
            onClick: kW,
            children: ZW(`${HZ}islandsCancel`)
          })]
        })]
      })
    }

    function uZ(WW) {
      let {
        invites: iW,
        actions: OW,
        full: mW,
        maxIslands: EW,
        waitSeconds: NW,
        focus: PW,
        focused: LW,
        leave: cW,
        declined: wW,
        t: tW
      } = WW;
      const ZW = gP();
      return (0, MN.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, MN.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: tW(`${HZ}islandsInvitesTitle`)
        }), (0, MN.jsx)("ul", {
          className: "Baf2IslandCards",
          children: iW.map((WW => {
            const iW = WW.baf2InviteId;
            return (0, MN.jsx)(nZ, {
              invite: WW,
              actions: OW,
              full: mW,
              maxIslands: EW,
              waitSeconds: NW,
              focus: PW === iW,
              focused: LW,
              join: () => {
                ZW.send(`baf2coopaccept ${iW}`), cW()
              },
              decline: () => {
                ZW.send(`baf2coopdecline ${iW}`), wW(iW)
              },
              t: tW
            }, iW)
          }))
        })]
      })
    }
    const oZ = "buildAFactory2Game:";

    function dZ(WW) {
      let {
        cards: iW,
        activeName: OW,
        canStart: EW,
        waitSeconds: NW,
        leave: PW,
        t: LW
      } = WW;
      const cW = gP(),
        [wW, tW] = (0, mW.useState)(!1),
        [ZW, xW] = (0, mW.useState)(""),
        lW = (0, mW.useRef)(null);
      Bw(wW, lW), (0, mW.useEffect)((() => {
        var WW;
        wW && (null === (WW = lW.current) || void 0 === WW || WW.focus())
      }), [wW]);
      const AW = sw(iW),
        bW = Uw(ZW),
        jW = kw(bW),
        UW = () => {
          EW && !jW && (cW.send("" === bW || bW === AW ? aW : `${aW} ${bW}`), PW())
        },
        kW = () => {
          var WW;
          tW(!1), null === (WW = lW.current) || void 0 === WW || WW.focus()
        };
      return (0, MN.jsxs)("li", {
        ref: lW,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...wW ? Cw(kW) : {},
        children: [(0, MN.jsx)("strong", {
          className: "Baf2IslandName",
          children: LW(`${oZ}islandsNewTitle`)
        }), !wW && (0, MN.jsx)("p", {
          className: "Baf2IslandStats",
          children: LW(`${oZ}islandsNewNote`)
        }), wW && (0, MN.jsxs)(MN.Fragment, {
          children: [(0, MN.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: uw(LW, `${oZ}islandsNewConfirm`, {
              name: OW
            })
          }), (0, MN.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [LW(`${oZ}islandsNewNameLabel`), (0, MN.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: ZW,
              placeholder: AW,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: Xw,
              onChange: WW => {
                xW(WW.target.value)
              },
              ...fw(UW, kW)
            })]
          }), jW && (0, MN.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: LW(`${oZ}islandsNameReserved`)
          })]
        }), (0, MN.jsxs)("div", {
          className: YE()("Baf2IslandButtons", {
            Stacked: wW
          }),
          children: [(0, MN.jsx)(UP.s, {
            disabled: !EW || wW && jW,
            onClick: () => {
              if (!wW) return xW(AW), void tW(!0);
              UW()
            },
            children: NW > 0 ? LW(`${oZ}islandsNewIn`, {
              time: kN(LW, NW)
            }) : LW(wW ? `${oZ}islandsNewConfirmButton` : `${oZ}islandsNew`)
          }), wW && (0, MN.jsx)(UP.f, {
            onClick: kW,
            children: LW(`${oZ}islandsCancel`)
          })]
        })]
      })
    }

    function eZ(WW) {
      var iW, OW;
      let {
        message: EW,
        arrivedAtMs: NW,
        close: PW,
        leave: LW,
        openSocial: cW
      } = WW;
      const wW = gP(),
        {
          t: tW
        } = (0, hE.B)(),
        ZW = Iw(1e3),
        [xW, lW] = (0, mW.useState)(null),
        [AW, bW] = (0, mW.useState)(new Map),
        [jW, UW] = (0, mW.useState)(new Set),
        kW = EW.baf2IslandCards,
        sW = function(WW, iW, OW, mW) {
          return (null !== WW && void 0 !== WW ? WW : []).filter((WW => iW + WW.baf2InviteLeftMs > OW && !mW.has(WW.baf2InviteId)))
        }(EW.baf2IslandsInvites, NW, ZW, jW),
        MW = sW.map((WW => WW.baf2InviteId)).join(" "),
        KW = (0, mW.useRef)(null),
        SW = qw(KW);
      Rw(), (0, mW.useEffect)((() => {
        var WW, iW;
        null !== (WW = KW.current) && void 0 !== WW && WW.contains(document.activeElement) || (null === (iW = KW.current) || void 0 === iW || iW.focus())
      }), [EW, MW]), (0, mW.useEffect)((() => {
        bW((WW => function(WW, iW, OW, mW) {
          const EW = new Map;
          for (const NW of iW) {
            const iW = WW.get(NW.baf2IslandId);
            iW && (void 0 !== iW.untilGone || mW < iW.answer) && Jw(iW, NW, OW) && EW.set(NW.baf2IslandId, iW)
          }
          return EW.size === WW.size ? WW : EW
        }(WW, EW.baf2IslandCards, Date.now(), EW.baf2IslandsAnswered)))
      }), [EW]);
      const YW = jw(NW, EW.baf2IslandsWaitMs, ZW),
        yW = EW.baf2IslandsBlocked,
        TW = Yw(yW, YW),
        JW = function(WW, iW) {
          const OW = Yw(WW, 0);
          return {
            switch: OW.switch ? iW : 0,
            change: OW.change ? iW : 0
          }
        }(yW, YW),
        hW = kW.length >= EW.baf2IslandsMax,
        HW = kW.length > 0,
        nW = function(WW, iW, OW) {
          return WW + Math.max(0, OW - iW)
        }(EW.baf2IslandsNowMs, NW, ZW),
        uW = null !== (iW = null === (OW = kW.find((WW => WW.baf2IslandActive))) || void 0 === OW ? void 0 : OW.baf2IslandName) && void 0 !== iW ? iW : "",
        oW = function(WW) {
          const iW = WW.filter(ew).length;
          return iW <= 1 && iW < WW.length
        }(kW),
        dW = !0 === EW.baf2IslandsCoop,
        eW = function(WW, iW) {
          const OW = WW.find((WW => WW.baf2IslandActive)),
            mW = null === OW || void 0 === OW ? void 0 : OW.baf2IslandCoop;
          return OW && "member" === (null === mW || void 0 === mW ? void 0 : mW.baf2CoopRole) ? {
            key: `${lw}islandsKeepOwnMember`,
            names: {
              owner: mW.baf2CoopOwner,
              island: OW.baf2IslandName
            }
          } : {
            key: iW ? `${lw}islandsKeepOwn` : `${lw}islandsKeepOwnSolo`
          }
        }(kW, dW),
        [vW, gW] = (0, mW.useState)(null);
      (0, mW.useEffect)((() => {
        void 0 !== EW.baf2IslandsFocusInvite && gW(EW.baf2IslandsFocusInvite)
      }), [EW]);
      const DW = (0, mW.useCallback)((() => {
          gW(null)
        }), []),
        VW = xW ? kW.find((WW => WW.baf2IslandId === xW.id)) : void 0,
        pW = xW && VW && "hidden" !== vw(VW, TW, oW, hW, dW, yW)[xW.mode] ? xW : null;
      return (0, MN.jsx)(jP.b, {
        close: PW,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, MN.jsxs)("section", {
          ref: KW,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: SW ? {
            marginTop: `${SW.marginTop}px`,
            maxHeight: `${SW.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, MN.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, MN.jsxs)("div", {
              children: [(0, MN.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: tW(`${oZ}islandsTitle`)
              }), HW && (0, MN.jsx)("p", {
                children: tW(`${oZ}islandsSubtitle`, {
                  count: String(kW.length),
                  max: String(EW.baf2IslandsMax)
                })
              })]
            }), (0, MN.jsx)(UP.l, {
              ariaLabel: tW(`${oZ}islandsClose`),
              onClick: PW
            })]
          }), (0, MN.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== yW && (0, MN.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: uw(tW, Mw(yW, Kw(kW)), {
                island: uW
              })
            }), HW && sW.length > 0 && (0, MN.jsx)(uZ, {
              invites: sW,
              actions: TW,
              full: hW,
              maxIslands: EW.baf2IslandsMax,
              waitSeconds: JW.switch,
              focus: vW,
              focused: DW,
              leave: LW,
              declined: WW => {
                UW((iW => new Set(iW).add(WW)))
              },
              t: tW
            }), HW && (0, MN.jsxs)(MN.Fragment, {
              children: [hW && (0, MN.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: tW(`${oZ}islandsFull`, {
                  max: String(EW.baf2IslandsMax)
                })
              }), (0, MN.jsx)("p", {
                className: "Baf2IslandsNote",
                children: uw(tW, eW.key, eW.names)
              }), (0, MN.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [kW.map((WW => {
                  const iW = WW.baf2IslandId;
                  return (0, MN.jsx)(hZ, {
                    card: WW,
                    keepOwn: oW,
                    coopOn: dW,
                    openSocial: cW,
                    blocked: yW,
                    maxIslands: EW.baf2IslandsMax,
                    serverNowMs: nW,
                    nowMs: ZW,
                    actions: TW,
                    full: hW,
                    waits: JW,
                    answered: EW.baf2IslandsAnswered,
                    mode: (null === pW || void 0 === pW ? void 0 : pW.id) === iW ? pW.mode : null,
                    setMode: WW => {
                      lW(null === WW ? null : {
                        id: iW,
                        mode: WW
                      })
                    },
                    pending: Jw(AW.get(iW), WW, ZW),
                    onSent: (OW, mW) => {
                      bW((EW => {
                        const NW = {
                          atMs: Date.now(),
                          from: WW.baf2IslandName,
                          answer: OW
                        };
                        return new Map(EW).set(iW, mW ? {
                          ...NW,
                          untilGone: mW
                        } : NW)
                      }))
                    },
                    leave: LW,
                    switchTo: () => {
                      wW.send(`baf2islandswitch ${iW}`), LW()
                    },
                    t: tW
                  }, iW)
                })), !hW && (0, MN.jsx)(dZ, {
                  cards: kW,
                  activeName: uW,
                  canStart: TW.change,
                  waitSeconds: JW.change,
                  leave: LW,
                  t: tW
                })]
              })]
            })]
          })]
        })
      })
    }
    var vZ = OW(4171);
    const gZ = {
        all: "buildAFactory2Game:terminalChip_all",
        recent: "buildAFactory2Game:terminalChip_recent",
        Bm: "buildAFactory2Game:terminalChip_ores",
        bars: "buildAFactory2Game:terminalChip_bars",
        parts: "buildAFactory2Game:terminalChip_parts",
        nuclear: "buildAFactory2Game:terminalChip_nuclear",
        farm: "buildAFactory2Game:terminalChip_farm",
        other: "buildAFactory2Game:terminalChip_other"
      },
      DZ = Object.keys(gZ),
      VZ = new Set([...Object.keys(zi), ...[...vi.Press.recipes, ...vi["Wire Mill"].recipes].map((WW => WW.output))]),
      pZ = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      fZ = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      CZ = / Bar$|Alloy$/,
      XZ = /Porkchop|Beef|Mutton|Venison|Steak/,
      BZ = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;
    const qZ = (0, mW.memo)((function(WW) {
      let {
        item: iW,
        name: OW,
        amount: mW,
        selected: EW,
        small: NW,
        onPick: PW
      } = WW;
      return (0, MN.jsxs)("button", {
        type: "button",
        className: YE()("Baf2TermTile", {
          On: EW,
          Small: NW
        }),
        "aria-label": `${OW}: ${mW}`,
        "aria-pressed": EW,
        onClick: () => {
          PW(iW)
        },
        children: [(0, MN.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, MN.jsx)(nE.b, {
            itemName: iW,
            amount: 0
          })
        }), (0, MN.jsx)("span", {
          className: "Baf2TermCount",
          children: jN(mW, 1e4)
        }), !NW && (0, MN.jsx)("span", {
          className: "Baf2TermName",
          children: OW
        })]
      })
    }));

    function RZ(WW) {
      let {
        store: iW,
        close: OW,
        send: EW
      } = WW;
      const {
        t: NW
      } = (0, hE.B)(), {
        isTouchScreen: PW
      } = (0, ME.p)(["isTouchScreen"]);
      ! function(WW) {
        const [iW, OW] = (0, mW.useState)(WW.version);
        (0, mW.useEffect)((() => (OW(WW.version), WW.subscribe((() => {
          OW(WW.version)
        })))), [WW])
      }(iW);
      const [LW, cW] = (0, mW.useState)("all"), [wW, tW] = (0, mW.useState)(!1), [ZW, xW] = (0, mW.useState)(""), [lW, AW] = (0, mW.useState)(""), [bW, jW] = (0, mW.useState)(null), [UW, kW] = (0, mW.useState)(!1), [sW, MW, KW] = function() {
        const WW = (0, mW.useRef)(null),
          [iW, OW] = (0, mW.useState)(!1),
          EW = () => {
            const iW = WW.current;
            OW(null !== iW && iW.scrollLeft + iW.clientWidth < iW.scrollWidth - 1)
          };
        return (0, mW.useEffect)(EW), (0, mW.useEffect)((() => {
          const iW = WW.current;
          if (!iW) return;
          const OW = new ResizeObserver(EW);
          return OW.observe(iW), () => {
            OW.disconnect()
          }
        }), []), [WW, iW, EW]
      }(), SW = (0, mW.useMemo)((() => new Map), [NW]), YW = WW => {
        let iW = SW.get(WW);
        return void 0 === iW && (iW = function(WW, iW) {
          const OW = /^(.+) \((.+)\)$/.exec(WW);
          return OW ? iW(OW[2], OW[1]) : WW
        }((0, iN.g)(NW, WW), ((WW, iW) => NW("buildAFactory2Game:terminalTileKind", {
          kind: WW,
          base: iW
        }))), SW.set(WW, iW)), iW
      }, yW = iW.isReadOnly(), TW = UW && !yW, JW = iW.recent(), hW = iW.items(), HW = lW.trim().toLowerCase(), nW = TW ? iW.heldItems(bW) : ("recent" === LW ? JW : hW).filter((WW => {
        const iW = YW(WW);
        return ("all" === LW || "recent" === LW || function(WW) {
          return wN(WW) ? "farm" : pZ.test(WW) ? "nuclear" : CZ.test(WW) ? "bars" : XZ.test(WW) ? "farm" : fZ.test(WW) ? "Bm" : VZ.has(WW) ? "parts" : BZ.test(WW) ? "farm" : "other"
        }(WW) === LW) && ("" === HW || iW.toLowerCase().includes(HW)) && ("" === ZW || iW.toUpperCase().startsWith(ZW))
      })), uW = new Set(hW.map((WW => YW(WW).charAt(0).toUpperCase()))), oW = WW => TW ? iW.heldAmount(WW) : iW.amount(WW), dW = !TW && "recent" !== LW && JW.length > 0, eW = function(WW, iW) {
        return null !== WW && iW.includes(WW) ? WW : null
      }(bW, dW ? [...nW, ...JW] : nW), vW = null === eW ? 0 : iW.amount(eW), gW = null === eW ? 0 : oW(eW), DW = (0, mW.useCallback)((WW => {
        jW((iW => iW === WW ? null : WW))
      }), []), VW = WW => gW > 0 || TW && null === eW && "fill" === WW && nW.length > 0, pW = TW ? [
        ["one", NW("buildAFactory2Game:terminalStoreOne")],
        ["stack", NW("buildAFactory2Game:terminalStoreStack", {
          amount: String(99)
        })],
        ["fill", NW(null === eW ? "buildAFactory2Game:terminalStoreEverything" : "buildAFactory2Game:terminalStoreAll")]
      ] : [
        ["one", NW("buildAFactory2Game:terminalTakeOne")],
        ["stack", NW("buildAFactory2Game:terminalTakeStack", {
          amount: String(99)
        })],
        ["fill", NW("buildAFactory2Game:terminalFill")]
      ], fW = TW ? NW("buildAFactory2Game:terminalStoreEmpty") : "" !== ZW ? NW("buildAFactory2Game:terminalEmptyLetter", {
        letter: ZW
      }) : "" !== HW ? NW("buildAFactory2Game:terminalEmptySearch", {
        query: lW
      }) : NW("buildAFactory2Game:terminalEmpty");
      return (0, MN.jsx)(jP.b, {
        close: OW,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2TermOverlay",
        children: (0, MN.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, MN.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, MN.jsxs)("div", {
              children: [(0, MN.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: NW(iW.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, MN.jsxs)("p", {
                className: "Baf2TermSubtitle",
                children: [(0, MN.jsx)("span", {
                  className: YE()({
                    Off: TW
                  }),
                  children: NW("buildAFactory2Game:terminalSubtitle", {
                    count: String(iW.siloCount())
                  })
                }), !yW && (0, MN.jsx)("span", {
                  className: YE()({
                    Off: !TW
                  }),
                  children: NW("buildAFactory2Game:terminalStoreSubtitle")
                })]
              })]
            }), !yW && (0, MN.jsx)(vZ.c, {
              className: "Baf2TermModes",
              options: [{
                value: "take",
                label: NW("buildAFactory2Game:terminalModeTake")
              }, {
                value: "store",
                label: NW("buildAFactory2Game:terminalModeStore")
              }],
              value: TW ? "store" : "take",
              onChange: WW => {
                kW("store" === WW), jW(null)
              },
              ariaLabel: NW("buildAFactory2Game:terminalModes")
            }), (0, MN.jsx)(UP.l, {
              onClick: OW
            })]
          }), (0, MN.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, MN.jsxs)("div", {
              className: YE()("Baf2TermTools", {
                Hidden: TW
              }),
              children: [(0, MN.jsx)("div", {
                ref: sW,
                className: YE()("Baf2TermChips", {
                  MoreRight: MW
                }),
                onScroll: KW,
                children: wW ? (0, MN.jsxs)(MN.Fragment, {
                  children: [(0, MN.jsx)("button", {
                    type: "button",
                    "aria-label": NW("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      tW(!1), xW("")
                    },
                    children: "\u2190"
                  }), [...uW].sort().map((WW => (0, MN.jsx)("button", {
                    type: "button",
                    className: YE()({
                      On: ZW === WW
                    }),
                    onClick: () => {
                      xW(ZW === WW ? "" : WW)
                    },
                    children: WW
                  }, WW)))]
                }) : (0, MN.jsxs)(MN.Fragment, {
                  children: [(0, MN.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      tW(!0)
                    },
                    children: NW("buildAFactory2Game:terminalLetters")
                  }), DZ.map((WW => (0, MN.jsx)("button", {
                    type: "button",
                    className: YE()({
                      On: LW === WW
                    }),
                    onClick: () => {
                      cW(WW)
                    },
                    children: NW(gZ[WW])
                  }, WW)))]
                })
              }), !PW && (0, MN.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: lW,
                placeholder: NW("buildAFactory2Game:terminalSearch"),
                "aria-label": NW("buildAFactory2Game:terminalSearch"),
                onChange: WW => {
                  AW(WW.target.value)
                },
                onKeyDown: WW => {
                  WW.stopPropagation()
                }
              }), (0, MN.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": NW("buildAFactory2Game:terminalResort"),
                title: NW("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  iW.resort()
                },
                children: "\u21c5"
              })]
            }), dW && (0, MN.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, MN.jsx)("span", {
                children: NW(gZ.recent)
              }), JW.map((WW => (0, MN.jsx)(qZ, {
                item: WW,
                name: YW(WW),
                amount: iW.amount(WW),
                selected: eW === WW,
                small: !0,
                onPick: DW
              }, WW)))]
            }), (0, MN.jsx)("div", {
              className: "Baf2TermTiles",
              children: nW.length > 0 ? nW.map((WW => (0, MN.jsx)(qZ, {
                item: WW,
                name: YW(WW),
                amount: oW(WW),
                selected: eW === WW,
                onPick: DW
              }, WW))) : (0, MN.jsx)("p", {
                className: "Baf2TermEmpty",
                children: fW
              })
            }), (0, MN.jsxs)("div", {
              className: YE()("Baf2TermActions", {
                Hidden: TW && 0 === nW.length
              }),
              children: [(0, MN.jsx)("span", {
                className: "Baf2TermPicked",
                children: yW ? (0, MN.jsxs)(MN.Fragment, {
                  children: [null !== eW && vW > 0 ? YW(eW) : NW("buildAFactory2Game:terminalVisiting"), (0, MN.jsx)("small", {
                    children: NW("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== eW ? (0, MN.jsxs)(MN.Fragment, {
                  children: [YW(eW), (0, MN.jsx)("small", {
                    children: NW("buildAFactory2Game:terminalStored", {
                      amount: vW.toLocaleString()
                    })
                  })]
                }) : NW(TW ? "buildAFactory2Game:terminalStorePick" : "buildAFactory2Game:terminalPick")
              }), !yW && pW.map((WW => {
                let [OW, mW] = WW;
                const NW = "fill" === OW ? UP.n : UP.f;
                return (0, MN.jsx)(NW, {
                  className: "Baf2TermTake",
                  disabled: !VW(OW),
                  onClick: () => {
                    (WW => {
                      VW(WW) && EW(null === eW ? iW.putAll() : TW ? iW.put(WW, eW) : iW.take(WW, eW))
                    })(OW)
                  },
                  children: mW
                }, OW)
              }))]
            })]
          })]
        })
      })
    }

    function GZ(WW) {
      let {
        kind: iW,
        icon: OW,
        label: mW,
        number: EW,
        preview: NW,
        note: PW,
        tone: LW = null,
        share: cW,
        onExplain: wW
      } = WW;
      return (0, MN.jsxs)("button", {
        type: "button",
        className: YE()("NxLane", iW, {
          Warn: "warn" === LW,
          Danger: "danger" === LW
        }),
        onClick: wW,
        children: [(0, MN.jsxs)("span", {
          className: "NxLaneHead",
          children: [OW, (0, MN.jsx)("span", {
            className: "NxLaneLabel",
            children: mW
          })]
        }), (0, MN.jsxs)("span", {
          className: "NxLaneNum",
          children: [EW, NW && (0, MN.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", NW]
          })]
        }), (0, MN.jsx)("span", {
          className: "NxLaneNote",
          children: PW
        }), void 0 !== cW && (0, MN.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, cW)) + "%"
          }
        })]
      })
    }

    function IZ(WW) {
      let {
        kind: iW,
        step: OW,
        short: mW,
        planned: EW
      } = WW;
      return (0, MN.jsx)("i", {
        className: YE()("NxPipe", iW, `Step${OW}`, {
          Short: mW,
          Planned: EW
        }),
        "aria-hidden": "true"
      })
    }

    function aZ(WW) {
      let {
        max: iW,
        bands: OW,
        ticks: mW,
        now: EW,
        settle: NW,
        settleTone: PW,
        onExplain: LW
      } = WW;
      const cW = WW => Math.max(0, Math.min(iW, WW)) / iW * 100 + "%";
      let wW = 0;
      return (0, MN.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: LW,
        children: [(0, MN.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [OW.map((WW => {
            const iW = {
              bottom: cW(wW),
              height: `calc(${cW(WW.upTo)} - ${cW(wW)})`
            };
            return wW = WW.upTo, (0, MN.jsx)("i", {
              className: YE()("NxGaugeBand", WW.kind),
              style: iW
            }, WW.kind)
          })), null !== EW && (0, MN.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: cW(EW)
            }
          }), void 0 !== NW && null !== NW && (0, MN.jsx)("i", {
            className: YE()("NxGaugeSettle", {
              Bad: "bad" === PW
            }),
            style: {
              bottom: cW(NW)
            }
          })]
        }), (0, MN.jsx)("span", {
          className: "NxGaugeTicks",
          children: mW.map((WW => (0, MN.jsx)("small", {
            style: {
              bottom: cW(WW)
            },
            children: WW
          }, WW)))
        })]
      })
    }

    function rZ(WW) {
      const [iW, OW] = (0, mW.useState)(null), [EW, NW] = (0, mW.useState)((() => {
        try {
          return null === window.localStorage.getItem(WW)
        } catch {
          return !1
        }
      })), PW = (0, mW.useRef)(null);
      (0, mW.useEffect)((() => () => {
        null !== PW.current && clearTimeout(PW.current)
      }), []);
      const LW = (0, mW.useCallback)((iW => {
          OW(iW), NW(!1);
          try {
            window.localStorage.setItem(WW, "1")
          } catch {}
          null !== PW.current && clearTimeout(PW.current), PW.current = setTimeout((() => {
            PW.current = null, OW(null)
          }), 5e3)
        }), [WW]),
        cW = (0, mW.useCallback)(((iW, OW) => {
          const mW = `${WW}:${iW}`;
          try {
            if (null !== window.localStorage.getItem(mW)) return;
            window.localStorage.setItem(mW, "1")
          } catch {
            return
          }
          LW(OW)
        }), [LW, WW]);
      return {
        explained: iW,
        hinting: EW,
        explain: LW,
        explainOnce: cW
      }
    }

    function zZ(WW) {
      let {
        text: iW,
        tone: OW,
        explained: mW
      } = WW;
      return (0, MN.jsxs)("p", {
        className: YE()("NxStatus", null === mW ? OW : "Explain"),
        "aria-live": "polite",
        children: [null !== mW && (0, MN.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== mW && void 0 !== mW ? mW : iW]
      })
    }
    const FZ = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function QZ(WW, iW) {
      const OW = Number(WW[iW]);
      return 1 === OW || 2 === OW || 3 === OW ? OW : 0
    }

    function Wx(WW) {
      return !!Uc("reactor", WW.baf2RxNeed) || void 0 !== WW.baf2RxLayout && WW.baf2RxNeed.some((WW => {
        let [iW, OW] = WW;
        return OW > 0 && FZ.includes(iW)
      }))
    }
    const ix = "buildAFactory2Game:";

    function Ox(WW) {
      let {
        status: iW,
        store: OW,
        busy: mW
      } = WW;
      const {
        t: EW
      } = (0, hE.B)();
      return function(WW) {
        return 0 !== (WW.baf2RxFlags & bi) && (!WW.baf2RxFormed || void 0 !== WW.baf2RxLayout)
      }(iW) ? (0, MN.jsx)(UP.n, {
        disabled: !Wx(iW) || mW,
        onClick: () => {
          OW.tap("fill", (() => {
            OW.send("fill")
          }))
        },
        children: EW(void 0 !== iW.baf2RxLayout ? `${ix}rxFillLayout` : `${ix}rxFill`)
      }) : null
    }

    function mx(WW) {
      let {
        status: iW,
        store: OW,
        readOnly: EW,
        bare: NW = !1
      } = WW;
      const {
        t: PW
      } = (0, hE.B)(), LW = iW.baf2RxLayout, [cW, wW, tW] = iW.baf2RxDims, ZW = (0, mW.useMemo)((() => {
        if (void 0 === LW) return 0;
        const WW = Uint8Array.from(LW, ((WW, iW) => QZ(LW, iW)));
        return aL([cW - 2, wW - 2, tW - 2], WW).max
      }), [LW, cW, wW, tW]);
      return void 0 === LW ? null : (0, MN.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!NW && (0, MN.jsx)("span", {
          className: "Baf2RxHint",
          children: PW(`${ix}rxLayoutLine`, {
            amount: yc(ZW)
          })
        }), !EW && (0, MN.jsx)(UP.f, {
          onClick: () => {
            OW.send("layout", 0)
          },
          children: PW(`${ix}rxLayoutHide`)
        })]
      })
    }
    const Ex = "buildAFactory2Game:",
      Nx = {
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

    function Px(WW) {
      let {
        id: iW,
        title: OW,
        body: mW,
        bodyParams: EW,
        yes: NW,
        cancel: PW,
        confirm: LW
      } = WW;
      const {
        t: cW
      } = (0, hE.B)();
      return (0, MN.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": iW,
        children: [(0, MN.jsx)("h3", {
          id: iW,
          children: cW(OW)
        }), (0, MN.jsx)("p", {
          children: cW(mW, EW)
        }), (0, MN.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, MN.jsx)(UP.h, {
            onClick: PW,
            children: cW(`${Ex}rxCancel`)
          }), (0, MN.jsx)(UP.O, {
            onClick: LW,
            children: cW(NW)
          })]
        })]
      })
    }

    function Lx(WW) {
      const [iW, OW] = (0, mW.useState)((() => WW.get()));
      return (0, mW.useEffect)((() => (OW(WW.get()), WW.subscribe((() => {
        OW(WW.get())
      })))), [WW]), iW
    }

    function cx(WW) {
      let {
        kind: iW,
        cap: OW,
        busy: EW = !1,
        whyNot: NW = null,
        apart: PW
      } = WW;
      const {
        t: LW
      } = (0, hE.B)(), [cW, wW] = (0, mW.useState)(!1), tW = null !== NW, ZW = (0, mW.useRef)(null);
      if ((0, mW.useEffect)((() => {
          tW && wW(!1)
        }), [tW]), (0, mW.useLayoutEffect)((() => {
          var WW;
          const iW = null === (WW = ZW.current) || void 0 === WW ? void 0 : WW.firstElementChild;
          tW ? null === iW || void 0 === iW || iW.setAttribute("aria-disabled", "true") : EW || null === iW || void 0 === iW || iW.removeAttribute("aria-disabled")
        })), !cW || tW) return (0, MN.jsx)("span", {
        ref: ZW,
        className: "Baf2RxApartWrap",
        children: (0, MN.jsx)(UP.h, {
          disabled: EW,
          className: YE()({
            Baf2RxNotYet: tW
          }),
          onClick: () => {
            NW ? NW() : wW(!0)
          },
          children: LW(`${Ex}rxApart`)
        })
      });
      const xW = "battery" === iW,
        lW = void 0 === OW ? `${Ex}batApartConfirmBodyPlan` : `${Ex}batApartConfirmBody`;
      return (0, MN.jsx)(Px, {
        id: `baf2ApartTitle_${iW}`,
        title: xW ? `${Ex}batApartConfirmTitle` : `${Ex}rxApartConfirmTitle`,
        body: xW ? lW : `${Ex}rxApartConfirmBody`,
        bodyParams: void 0 === OW ? void 0 : {
          cap: OW
        },
        yes: `${Ex}rxApart`,
        cancel: () => {
          wW(!1)
        },
        confirm: () => {
          wW(!1), PW()
        }
      })
    }

    function wx(WW) {
      let {
        mood: iW,
        big: OW
      } = WW;
      const mW = Nx[iW],
        EW = [];
      return mW.rows.forEach(((WW, iW) => {
        for (let OW = 0; OW < WW.length; OW++) "." !== WW[OW] && EW.push((0, MN.jsx)("rect", {
          x: OW + 1,
          y: iW + 1,
          width: 1,
          height: 1,
          fill: "w" === WW[OW] ? "#8fd3ff" : mW.colour
        }, `${OW},${iW}`))
      })), (0, MN.jsxs)("svg", {
        className: YE()("Baf2RxFace", {
          Big: OW,
          Alarm: "alarm" === iW
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, MN.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, MN.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), EW]
      })
    }

    function tx(WW) {
      return bN(WW, "+").replace("+", "")
    }

    function Zx(WW) {
      let {
        kind: iW,
        dims: OW,
        cap: mW,
        disabled: EW,
        compact: NW,
        resize: PW
      } = WW;
      const {
        t: LW
      } = (0, hE.B)(), {
        min: cW,
        max: wW
      } = CO(iW), tW = Math.min(mW, wW), ZW = [`${Ex}rxWide`, `${Ex}rxTall`, `${Ex}rxDeep`], xW = {
        w: String(OW[0]),
        h: String(OW[1]),
        d: String(OW[2]),
        blocks: String(Yc(iW, OW))
      };
      return (0, MN.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, MN.jsx)("div", {
          className: "Baf2RxSteppers",
          children: OW.map(((WW, iW) => {
            const NW = mW => {
                const EW = [OW[0], OW[1], OW[2]];
                EW[iW] = WW + mW, PW(EW)
              },
              xW = WW >= tW;
            return (0, MN.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, MN.jsx)("button", {
                type: "button",
                "aria-label": LW(`${Ex}rxSmaller`),
                disabled: EW || WW <= cW,
                onClick: () => {
                  NW(-1)
                },
                children: "\u2212"
              }), (0, MN.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [WW, (0, MN.jsx)("small", {
                  children: LW(ZW[iW])
                })]
              }), (0, MN.jsx)("button", {
                type: "button",
                "aria-label": LW(`${Ex}rxBigger`),
                disabled: EW || xW,
                onClick: () => {
                  NW(1)
                },
                children: xW && mW < wW ? "\ud83d\udd12" : "+"
              })]
            }, ZW[iW])
          }))
        }), !NW && (0, MN.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === iW ? LW(`${Ex}rxSizeLine`, {
            ...xW,
            water: String(Sc(OW))
          }) : LW(`${Ex}batSizeLine`, xW)
        })]
      })
    }

    function xx(WW) {
      let {
        on: iW,
        label: OW,
        disabled: mW,
        locked: EW,
        pending: NW,
        toggle: PW
      } = WW;
      return (0, MN.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": iW,
        disabled: mW,
        "aria-disabled": EW || void 0,
        className: YE()("Baf2RxSwitch", {
          On: iW,
          Locked: EW,
          Pending: NW
        }),
        onClick: PW,
        children: [(0, MN.jsx)("span", {
          className: "Baf2RxKnob"
        }), OW]
      })
    }
    const lx = "buildAFactory2Game:",
      Ax = .95;

    function bx(WW, iW) {
      return 0 !== (WW.baf2RxFlags & iW)
    }

    function jx(WW) {
      return "cryo" === WW ? FW.n : FW.q
    }

    function Ux(WW) {
      var iW, OW, mW, EW, NW, PW, LW, cW, wW;
      return WW.baf2RxCryo ? {
        dl: "cryo",
        usePerS: null !== (EW = WW.baf2RxCryoUse) && void 0 !== EW ? EW : 0,
        needPerS: null !== (NW = WW.baf2RxCryoNeed) && void 0 !== NW ? NW : 0,
        inPerS: null !== (PW = WW.baf2RxCryoIn) && void 0 !== PW ? PW : 0,
        stored: null !== (LW = WW.baf2RxCryoStored) && void 0 !== LW ? LW : 0,
        makersShort: null !== (cW = WW.baf2RxMixersShort) && void 0 !== cW ? cW : 0,
        waterBeside: null !== (wW = WW.baf2RxWaterUse) && void 0 !== wW ? wW : 0,
        pct: WW.baf2RxWater
      } : {
        dl: "water",
        usePerS: null !== (iW = WW.baf2RxWaterUse) && void 0 !== iW ? iW : 0,
        needPerS: null !== (OW = WW.baf2RxWaterNeed) && void 0 !== OW ? OW : 0,
        inPerS: WW.baf2RxWaterIn,
        stored: WW.baf2RxWaterStored,
        makersShort: null !== (mW = WW.baf2RxCondensersShort) && void 0 !== mW ? mW : 0,
        waterBeside: 0,
        pct: WW.baf2RxWater
      }
    }

    function kx(WW) {
      const iW = "running" === WW.baf2RxState || "idle" === WW.baf2RxState;
      return WW.baf2RxFormed && WW.baf2RxTarget !== WW.baf2RxThrottle && iW ? sx(WW, WW.baf2RxTarget) : null
    }

    function sx(WW, iW) {
      const [OW, mW, EW, , , , NW, , PW] = WW.baf2RxStats, LW = bx(WW, li), cW = Ux(WW), wW = cW.pct / 100, {
        gen: tW,
        out: ZW,
        load: xW
      } = function(WW, iW, OW, mW) {
        const EW = OW ? CL : 1,
          NW = Math.min(WW.fuelHeat * EW * Math.max(0, Math.min(1, iW)), WW.size * EW);
        return {
          gen: NW,
          out: NW,
          load: Pc(NW, WW.cooling, mW)
        }
      }({
        fuelHeat: OW,
        cooling: mW,
        size: EW
      }, iW / 100, LW, wW), lW = cc(NW || IL(...WW.baf2RxDims)), AW = WW.baf2RxHeat, bW = Math.abs(xW - AW), jW = function(WW, iW, OW, mW) {
        let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : FW.q;
        const NW = OW ? CL : 1,
          PW = Math.min(WW.fuelHeat * NW * iW / 100, WW.size * NW),
          LW = PW,
          cW = WW.fuelHeat * NW,
          wW = WW.cooling * Nc(mW.pct / 100),
          tW = cW > 0 && wW < WW.size * NW ? Math.floor(100 * wW / cW) : 100,
          ZW = PW * EW - mW.inPerS;
        return {
          out: LW,
          hotAbove: tW >= 100 ? null : Math.max(0, tW),
          waterSecs: mW.pct >= 100 && ZW > 1e-6 ? Math.max(0, mW.stored) / ZW : null
        }
      }({
        fuelHeat: OW,
        cooling: mW,
        size: EW
      }, iW, LW, {
        pct: cW.pct,
        inPerS: cW.inPerS,
        stored: cW.stored
      }, jx(cW.dl));
      return {
        pct: iW,
        out: ZW,
        coolPerS: tW * jx(cW.dl),
        pelletsPerMin: PW > 0 ? ZW / PW * 60 : 0,
        settle: xW,
        settleS: bW > 2 ? lW * Math.log(bW / 2) : 0,
        overheatS: xW > 100 && AW < 100 ? lW * Math.log((xW - AW) / (xW - 100)) : null,
        hotAbove: jW.hotAbove,
        coolantSecs: jW.waterSecs
      }
    }

    function Mx(WW) {
      return WW.baf2RxThrottle <= 0 && "running" !== WW.baf2RxState ? 0 : sx(WW, WW.baf2RxTarget).pelletsPerMin / 60
    }

    function Kx(WW, iW) {
      if (WW <= 0 || iW <= 0) return 0;
      const OW = WW / iW;
      return OW < .25 ? 1 : OW < .5 ? 2 : OW < .8 ? 3 : 4
    }

    function Sx(WW, iW) {
      const OW = {};
      for (const [mW, EW] of Object.entries(iW.params)) OW[mW] = "time" === mW ? kN(WW, EW) : "amount" === mW ? yc(EW) : String(Math.round(EW));
      return WW(iW.key, OW)
    }

    function Yx(WW, iW) {
      return {
        key: `${lx}${WW}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: iW
      }
    }

    function yx(WW) {
      var iW;
      const OW = bx(WW, li),
        mW = "running" === WW.baf2RxState,
        EW = xc(WW),
        NW = WW.baf2RxHeat;
      var PW;
      if (mW && NW > pL) return {
        key: null !== (PW = EW.fix) && void 0 !== PW ? PW : `${lx}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const LW = mW ? sx(WW, WW.baf2RxTarget).coolantSecs : null,
        cW = "cryo" === Ux(WW).dl;
      if (null !== LW && LW >= 1 && LW <= 30) return Yx(cW ? "rxWarnCryo" : "rxWarnWater", "bad");
      const wW = RL(IL(...WW.baf2RxDims)).waste,
        tW = mW ? kc(WW, wW, Mx(WW)).fullInS : null;
      if (null !== tW && tW <= 120 && WW.baf2RxWaste >= .5 * wW) return Yx("rxWarnWaste", "warn");
      if (null !== LW && LW >= 1) return Yx(cW ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: LW
      });
      const ZW = "noWater" === WW.baf2RxState && NW > pL;
      if (WW.baf2RxDamage >= 1 && !ZW) return Yx("rxDamagedHeals", "warn", {
        pct: WW.baf2RxDamage
      });
      if (WW.baf2RxCryoCut) return Yx("rxFix_cryoCut", "warn");
      const xW = Ux(WW);
      if ("noWater" === WW.baf2RxState && "cryo" === xW.dl) return Yx("noWater" === WW.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const lW = EW.fix === `${lx}rxFix_scramCool` || "idle" === WW.baf2RxState && WW.baf2RxTarget <= 0;
      if (lW && WW.baf2RxFuel <= 0) return Yx("rxFix_noFuel", "warn");
      if (lW && WW.baf2RxWaterIn <= 0 && (null !== (iW = WW.baf2RxCryoIn) && void 0 !== iW ? iW : 0) <= 0) return Yx("rxFix_noWater", "warn");
      const AW = EW.fix === `${lx}rxFix_scramCool` ? Ac(WW) : null;
      if (null !== AW) return {
        key: AW.key,
        params: {
          amount: AW.amount
        },
        tone: "info"
      };
      if ("running" !== WW.baf2RxState && "idle" !== WW.baf2RxState && null !== EW.fix) return {
        key: EW.fix,
        params: {},
        tone: "scram" === WW.baf2RxState ? "info" : ZW ? "bad" : "warn"
      };
      var bW;
      if ("idle" === WW.baf2RxState && WW.baf2RxTarget <= 0) return {
        key: null !== (bW = EW.fix) && void 0 !== bW ? bW : `${lx}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const jW = WW.baf2RxCryoStarved;
      if ("cryo" === xW.dl && jW && xW.needPerS > 0 && xW.usePerS < Ax * xW.needPerS) return Yx("noWater" === jW ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const UW = "cryo" === xW.dl,
        kW = xW.needPerS > 0 && xW.usePerS < Ax * xW.needPerS;
      if (UW ? kW || xW.makersShort > 0 && xW.pct < 100 : xW.pct < 100) {
        const iW = UW && kW ? Math.floor(100 * xW.usePerS / xW.needPerS) : Math.min(100, xW.pct);
        if (xW.makersShort > 0) {
          return Yx(`${UW?"rxCryoShortLine":"rxWaterShortLine"}${1===xW.makersShort?"One":""}${!UW&&WW.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: iW,
            count: xW.makersShort
          })
        }
        return Yx(UW ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: iW
        })
      }
      const sW = function(WW) {
        const [iW, OW, mW] = WW.baf2RxStats, EW = Ux(WW), NW = Lc({
          fuelHeat: iW,
          cooling: OW,
          size: mW
        }, "cryo" === EW.dl ? FW.f : 1, !0);
        return Math.max(0, NW * jx(EW.dl) - EW.inPerS)
      }(WW);
      if (OW && sW > 0) return Yx("cryo" === xW.dl ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(sW)
      });
      if (NW >= mc) return Yx("rxHotLine", "warn");
      const MW = sx(WW, WW.baf2RxTarget);
      var KW;
      if (null !== MW.overheatS) return Yx("rxWillOverheat", "bad", {
        pct: WW.baf2RxTarget,
        time: MW.overheatS,
        safe: null !== (KW = MW.hotAbove) && void 0 !== KW ? KW : 100
      });
      if (Math.abs(MW.settle - NW) >= 3) return Yx("rxSettling", "info", {
        pct: WW.baf2RxTarget,
        heat: Math.round(MW.settle),
        time: MW.settleS
      });
      const SW = Ac(WW);
      if (null !== SW) return {
        key: SW.key,
        params: {
          amount: SW.amount
        },
        tone: "info"
      };
      const YW = function(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== iW && ("running" !== iW || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === WW.rods ? `${wc}rxLimitNoRods` : `${wc}rxLimit_${Oc(WW)}`
      }({
        rods: WW.baf2RxStats[3],
        ...lc(WW)
      }, WW.baf2RxState, WW.baf2RxOut >= Ax * WW.baf2RxMaxNow, !1);
      if (YW === `${lx}rxLimit_size`) {
        const [iW, , OW, mW] = WW.baf2RxStats, EW = mW > 0 && iW > 0 ? Math.ceil(OW / (iW / mW) - 1e-9) : mW, NW = WW.baf2RxDims.every((WW => WW >= CO("reactor").max));
        if (EW < mW) return Yx(NW ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: EW,
          have: mW
        });
        if (NW) return Yx("rxLimit_sizeMax", "info")
      }
      return null !== YW ? {
        key: YW,
        params: {},
        tone: "info"
      } : Yx("rxSteady", "ok", {
        pct: WW.baf2RxTarget
      })
    }

    function Tx(WW) {
      var iW;
      if (WW.melted) return Yx("rxMeltedBody", "bad");
      if (-1 === WW.bad) return Yx("rxFix_noRoom", "warn");
      if (WW.bad > 0) return Yx(1 === WW.bad ? "rxBadOne" : "rxBad", "warn", {
        count: WW.bad
      });
      if (WW.left > 0) {
        const iW = 1 === WW.left ? "One" : "";
        return Yx(WW.canFill ? `rxPlanLeft${iW}` : `rxPlanLeftNoFill${iW}`, "info", {
          count: WW.left
        })
      }
      if (0 === WW.rods) return Yx("rxLimitNoRods", "warn");
      const OW = null !== (iW = WW.idle) && void 0 !== iW ? iW : 0;
      return OW > 0 ? Yx(1 === OW ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: OW
      }) : Yx("rxPlanReady", "ok")
    }

    function Jx(WW) {
      return Math.floor(Math.max(0, WW[1] - 1) / 2)
    }

    function hx(WW) {
      if (WW >= zL && WW < FL) {
        const iW = WW - zL;
        return {
          key: 0 === iW ? `${lx}rxWhy_rodAlone` : 1 === iW ? `${lx}rxWhy_rodOne` : `${lx}rxWhy_rod`,
          params: {
            count: String(iW),
            heat: String(uL * (1 + oL * iW))
          }
        }
      }
      return WW === FL ? {
        key: `${lx}rxWhy_channel`,
        params: {
          amount: String(eL)
        }
      } : WW === QL ? {
        key: `${lx}rxWhy_deadChannel`,
        params: {}
      } : WW === Wc ? {
        key: `${lx}rxWhy_graphite`,
        params: {}
      } : {
        key: `${lx}rxWhy_core`,
        params: {}
      }
    }
    const Hx = "buildAFactory2Game:";

    function nx(WW, iW) {
      return 0 !== (WW.baf2RxFlags & iW)
    }

    function ux(WW) {
      let {
        status: iW,
        pending: OW,
        store: mW,
        explain: EW
      } = WW;
      const {
        t: NW
      } = (0, hE.B)(), PW = nx(iW, xi), LW = iW.baf2RxTarget, cW = iW.baf2RxThrottle, wW = function(WW) {
        return {
          press: () => {
            WW.throttlePress()
          },
          drag: iW => {
            WW.throttleDrag(iW)
          },
          release: () => {
            WW.throttleRelease()
          }
        }
      }(mW), tW = null === (ZW = sx(iW, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, ZW - 10),
        red: ZW
      };
      var ZW;
      return (0, MN.jsxs)("div", {
        className: YE()("Baf2RxThrottle", {
          Off: PW
        }),
        onClick: () => {
          PW && EW(`${Hx}rxWhy_startFirst`)
        },
        children: [(0, MN.jsx)("span", {
          className: "HideNarrow",
          children: NW(`${Hx}rxThrottle`)
        }), (0, MN.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, MN.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: LW,
            disabled: PW,
            style: PW ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": NW(`${Hx}rxThrottle`),
            onPointerDown: () => {
              wW.press();
              const WW = () => {
                window.removeEventListener("pointerup", WW), window.removeEventListener("pointercancel", WW), wW.release()
              };
              window.addEventListener("pointerup", WW), window.addEventListener("pointercancel", WW)
            },
            onKeyUp: wW.release,
            onChange: WW => {
              wW.drag(Number(WW.target.value))
            }
          }), (0, MN.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${tW.amber}%, #ffb020 ${tW.amber}% ${tW.red}%, #ff3b30 ${tW.red}%)`
            },
            "aria-hidden": "true"
          }), (0, MN.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${cW}% + ${8*(1-cW/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, MN.jsxs)("b", {
          children: [`${LW}%`, (0, MN.jsx)("i", {
            className: YE()("Baf2RxPendingDot", {
              On: OW
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function ox(WW) {
      let {
        status: iW
      } = WW;
      const {
        t: OW
      } = (0, hE.B)(), mW = sx(iW, iW.baf2RxTarget), EW = Ux(iW).dl, NW = OW("cryo" === EW ? `${Hx}rxRateCryo` : `${Hx}rxRateWater`, {
        rate: tx(mW.coolPerS)
      }), PW = OW(`${Hx}rxChain`, {
        pct: String(iW.baf2RxTarget),
        out: yc(mW.out),
        heat: String(Math.round(mW.settle)),
        coolant: NW
      }), LW = null !== mW.coolantSecs ? mW.coolantSecs >= 1 ? OW("cryo" === EW ? `${Hx}rxThrottleCryoOut` : `${Hx}rxThrottleWaterOut`, {
        time: kN(OW, mW.coolantSecs)
      }) : OW("cryo" === EW ? `${Hx}rxThrottleCryoDry` : `${Hx}rxThrottleWaterDry`) : null;
      return (0, MN.jsxs)("p", {
        className: "Baf2RxChain",
        children: [PW, null !== LW ? (0, MN.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", LW]
        }) : (0, MN.jsxs)("span", {
          children: [" \xb7 ", OW(`${Hx}rxChainPellets`, {
            amount: Tc(mW.pelletsPerMin)
          })]
        })]
      })
    }

    function dx(WW) {
      let {
        view: iW,
        store: OW,
        explain: EW,
        explainOnce: NW
      } = WW;
      const {
        t: PW
      } = (0, hE.B)(), {
        status: LW
      } = iW, [cW, wW] = (0, mW.useState)(!1), tW = nx(LW, xi), xW = nx(LW, li), lW = !nx(LW, ji), AW = LW.baf2RxHeat > 100;
      return (0, MN.jsxs)(MN.Fragment, {
        children: [(0, MN.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, MN.jsx)(ux, {
            status: LW,
            pending: iW.throttlePending,
            store: OW,
            explain: EW
          }), (0, MN.jsx)(xx, {
            on: xW,
            label: xW ? PW(`${Hx}rxOdLeft`, {
              time: kN(PW, LW.baf2RxOdLeft)
            }) : PW(`${Hx}rxOverdrive`),
            locked: lW,
            pending: 0 !== (iW.pendingFlags & li),
            toggle: () => {
              lW ? EW(`${Hx}rxOverdriveTier`, {
                amount: String(ZW(13))
              }) : xW ? OW.setFlag(li, !1) : iW.odConfirmed ? OW.setFlag(li, !0) : wW(!0)
            }
          }), tW || iW.startGuard ? (0, MN.jsx)(UP.s, {
            disabled: iW.busy.has("start") || iW.startGuard,
            onClick: () => {
              OW.tap("start", (() => {
                OW.setFlag(xi, !1)
              }))
            },
            children: PW(iW.startGuard ? `${Hx}rxStarting` : `${Hx}rxStart`)
          }) : (0, MN.jsx)("span", {
            className: YE()("Baf2RxScram", {
              Pulse: AW
            }),
            children: (0, MN.jsx)(UP.O, {
              onClick: () => {
                OW.shutDown()
              },
              children: PW(`${Hx}rxScram`)
            })
          })]
        }), (0, MN.jsx)(ox, {
          status: LW
        }), cW && (0, MN.jsx)(Px, {
          id: "baf2RxOdTitle",
          title: `${Hx}rxOdConfirmTitle`,
          body: `${Hx}rxOdConfirmBody`,
          yes: `${Hx}rxOdConfirm`,
          cancel: () => {
            wW(!1)
          },
          confirm: () => {
            wW(!1), OW.tap("odConfirm", (() => {
              OW.confirmOverdrive(), OW.setFlag(li, !0)
            })), NW(`${Hx}rxWhy_overdrive`)
          }
        })]
      })
    }

    function ex(WW) {
      let {
        view: iW,
        store: OW,
        keepSize: mW
      } = WW;
      const {
        t: EW
      } = (0, hE.B)(), {
        status: NW
      } = iW;
      return (0, MN.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, MN.jsx)(Zx, {
          kind: "reactor",
          dims: iW.dims,
          cap: NW.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: WW => {
            OW.resize(WW)
          }
        }), mW ? (0, MN.jsx)(UP.h, {
          onClick: mW,
          children: EW(`${Hx}rxKeepSize`)
        }) : (0, MN.jsxs)(MN.Fragment, {
          children: [(0, MN.jsx)(xx, {
            on: iW.guide,
            label: EW(`${Hx}rxGuide`),
            toggle: () => {
              OW.toggleGuide()
            }
          }), nx(NW, ki) && (0, MN.jsx)(xx, {
            on: iW.starter,
            label: EW(`${Hx}rxStarter`),
            toggle: () => {
              OW.toggleStarter()
            }
          }), (0, MN.jsx)(Ox, {
            status: NW,
            store: OW,
            busy: iW.busy.has("fill")
          })]
        })]
      })
    }

    function vx(WW) {
      let {
        need: iW,
        kind: OW = "reactor",
        explain: mW
      } = WW;
      const {
        t: EW
      } = (0, hE.B)(), NW = iW.length <= 3, PW = iW.reduce(((WW, iW) => {
        let [, OW] = iW;
        return WW + OW
      }), 0);
      return (0, MN.jsxs)("div", {
        className: YE()("Baf2RxParts", {
          Compact: !NW
        }),
        onClick: () => {
          mW("battery" === OW ? `${Hx}batWhy_store` : `${Hx}rxShellHint`)
        },
        children: [PW > 0 && (0, MN.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === PW ? EW(`${Hx}rxBlocksOne`) : EW(`${Hx}rxBlocks`, {
            blocks: String(PW)
          })
        }), 0 === iW.length ? (0, MN.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: EW("battery" === OW ? `${Hx}batPartsDone` : `${Hx}rxShellDone`)
        }) : jc(iW).map((WW => {
          let [iW, OW, mW] = WW;
          const PW = function(WW) {
            const iW = Kc[WW];
            if (void 0 === iW) return null;
            const [OW, mW, EW] = sc[iW].colour.map((WW => Math.round(255 * WW)));
            return `rgb(${OW}, ${mW}, ${EW})`
          }(iW);
          return (0, MN.jsxs)("span", {
            className: "Baf2RxChip",
            title: (0, iN.g)(EW, iW),
            children: [(0, MN.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === PW ? {
                visibility: "hidden"
              } : {
                background: PW
              },
              title: EW(`${Hx}rxShopGhost`)
            }), (0, MN.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, MN.jsx)(nE.b, {
                itemName: iW,
                amount: 0
              })
            }), (0, MN.jsx)("span", {
              className: "Baf2RxChipName",
              children: NW ? `${OW} ${LW=(0,iN.g)(EW,iW),LW.replace(/^(Reactor|Battery) (?=\S)/,"")}` : OW
            }), mW >= OW ? (0, MN.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, MN.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: NW ? EW(`${Hx}rxShopShort`, {
                count: String(OW - mW)
              }) : "\u2212" + (OW - mW)
            })]
          }, iW);
          var LW
        }))]
      })
    }
    const gx = "buildAFactory2Game:";

    function Dx(WW) {
      var iW, OW, EW, NW, PW, LW, cW;
      let {
        store: wW,
        close: tW
      } = WW;
      const {
        t: ZW
      } = (0, hE.B)(), xW = gP(), lW = Lx(wW), {
        explained: AW,
        explain: bW
      } = rZ("baf2RxExplained"), jW = (0, mW.useCallback)(((WW, iW) => {
        bW(ZW(WW, iW))
      }), [bW, ZW]), UW = null === lW || void 0 === lW ? void 0 : lW.status, kW = !0 === (null === UW || void 0 === UW ? void 0 : UW.baf2BatReadOnly), sW = WW => {
        UW && xW.send(Zi(UW.baf2BatAt, WW))
      }, [MW, KW, SW] = null !== (iW = null === lW || void 0 === lW ? void 0 : lW.dims) && void 0 !== iW ? iW : [0, 0, 0], YW = yc(null !== (OW = null === lW || void 0 === lW ? void 0 : lW.aZ) && void 0 !== OW ? OW : 0), yW = !0 === (null === UW || void 0 === UW ? void 0 : UW.baf2BatFormed), TW = null !== (EW = null === UW || void 0 === UW ? void 0 : UW.baf2BatStored) && void 0 !== EW ? EW : 0, JW = Math.max(1, null !== (NW = null === UW || void 0 === UW ? void 0 : UW.baf2BatIslandCap) && void 0 !== NW ? NW : 1), hW = Math.min(100, 100 * TW / JW), HW = null === UW || void 0 === UW ? void 0 : UW.baf2BatNetPerS, nW = function(WW, iW, OW) {
        return OW > 0 && iW >= OW ? "full" : void 0 !== WW && WW >= .05 ? "charging" : void 0 !== WW && WW <= -.05 && iW > 0 ? "draining" : "steady"
      }(HW, TW, null !== (PW = null === UW || void 0 === UW ? void 0 : UW.baf2BatIslandCap) && void 0 !== PW ? PW : 0), uW = null !== (LW = null === UW || void 0 === UW ? void 0 : UW.baf2BatMadePerS) && void 0 !== LW ? LW : 0, oW = null !== (cW = null === UW || void 0 === UW ? void 0 : UW.baf2BatUsedPerS) && void 0 !== cW ? cW : 0;
      let dW, eW = {},
        vW = "info";
      if (UW)
        if (yW) "charging" === nW ? (dW = `${gx}batLine_charging`, eW = {
          time: kN(ZW, (JW - TW) / Math.max(.05, null !== HW && void 0 !== HW ? HW : 0))
        }, vW = "ok") : "draining" === nW ? (dW = `${gx}batLine_draining`, eW = {
          time: kN(ZW, TW / Math.max(.05, -(null !== HW && void 0 !== HW ? HW : 0)))
        }, vW = "warn") : dW = "full" === nW ? `${gx}batLine_full` : TW <= 0 && oW > 0 ? `${gx}batLine_empty` : `${gx}batLine_steady`;
        else {
          var gW;
          const WW = Tx({
            left: UW.baf2BatNeed.reduce(((WW, iW) => {
              let [, OW] = iW;
              return WW + OW
            }), 0),
            bad: UW.baf2BatBad,
            rods: 1,
            canFill: !0 === UW.baf2BatCanFill,
            melted: !1
          });
          dW = WW.key, eW = {
            count: String(null !== (gW = WW.params.count) && void 0 !== gW ? gW : 0)
          }, vW = WW.tone
        }
      else dW = `${gx}batLine_steady`;
      const DW = Math.max(uW, oW, 1);
      return (0, MN.jsx)(jP.b, {
        close: tW,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, MN.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, MN.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, MN.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, MN.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, MN.jsx)(nE.b, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, MN.jsxs)("div", {
                children: [(0, MN.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: ZW(`${gx}batTitle`)
                }), UW && (0, MN.jsxs)("p", {
                  className: YE()("Baf2RxSubtitle", {
                    good: yW && "charging" === nW,
                    warn: yW && "draining" === nW
                  }),
                  children: [MW, "\xd7", KW, "\xd7", SW, " \xb7 ", ZW(yW ? `${gx}batState_${nW}` : `${gx}rxSubPlanShort`)]
                })]
              })]
            }), (0, MN.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [UW && !kW && (0, MN.jsx)(cx, {
                kind: "battery",
                cap: yW ? YW : void 0,
                busy: null === lW || void 0 === lW ? void 0 : lW.busy.has("apart"),
                apart: () => {
                  wW.tap("apart", (() => {
                    sW("apart")
                  }))
                }
              }), (0, MN.jsx)(UP.l, {
                onClick: tW
              })]
            })]
          }), lW && UW && (0, MN.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, MN.jsxs)("div", {
              className: YE()("Baf2RxFlow Baf2BatFlow", {
                Plan: !yW
              }),
              children: [(0, MN.jsx)(GZ, {
                kind: "Power",
                label: ZW(`${gx}batMade`),
                number: yW ? `\u26a1 ${yc(uW)}/s` : "\u2014",
                note: ZW(`${gx}batMadeNote`),
                share: yW ? uW / DW : void 0,
                onExplain: () => {
                  jW(`${gx}batWhy_made`)
                }
              }), (0, MN.jsx)(IZ, {
                kind: "Power",
                step: yW ? Kx(uW, DW) : 0,
                planned: !yW
              }), (0, MN.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  jW(`${gx}batWhy_store`)
                },
                children: [(0, MN.jsx)(aZ, {
                  max: 100,
                  bands: [{
                    upTo: yW ? hW : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, MN.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, MN.jsx)("b", {
                    className: "Baf2BatStored",
                    children: yW ? ZW(`${gx}batStoredOf`, {
                      amount: yc(TW),
                      cap: yc(UW.baf2BatIslandCap)
                    }) : ZW(`${gx}batWillHold`, {
                      cap: YW
                    })
                  }), (0, MN.jsx)("span", {
                    children: ZW(`${gx}batAdds`, {
                      cap: YW
                    })
                  }), yW && (0, MN.jsx)("small", {
                    children: ZW(`${gx}batBreakNote`, {
                      cap: YW
                    })
                  })]
                })]
              }), (0, MN.jsx)(IZ, {
                kind: "Power",
                step: yW ? Kx(oW, DW) : 0,
                planned: !yW
              }), (0, MN.jsx)(GZ, {
                kind: "Power",
                label: ZW(`${gx}batUsed`),
                number: yW ? `\u26a1 ${yc(oW)}/s` : "\u2014",
                note: ZW(`${gx}batUsedNote`),
                share: yW ? oW / DW : void 0,
                onExplain: () => {
                  jW(`${gx}batWhy_used`)
                }
              })]
            }), (0, MN.jsx)(zZ, {
              text: ZW(dW, eW),
              tone: vW,
              explained: AW
            }), kW ? (0, MN.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: ZW(`${gx}rxNotYours`)
            }) : !yW && (0, MN.jsxs)(MN.Fragment, {
              children: [(0, MN.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, MN.jsx)(Zx, {
                  kind: "battery",
                  dims: lW.dims,
                  cap: UW.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: WW => {
                    wW.resize(WW)
                  }
                }), (0, MN.jsx)(xx, {
                  on: lW.guide,
                  label: ZW(`${gx}rxGuide`),
                  toggle: () => {
                    wW.toggleGuide()
                  }
                }), UW.baf2BatCanFill && (0, MN.jsx)(UP.n, {
                  disabled: !Uc("battery", UW.baf2BatNeed) || lW.busy.has("fill"),
                  onClick: () => {
                    wW.tap("fill", (() => {
                      sW("fill")
                    }))
                  },
                  children: ZW(`${gx}rxFill`)
                })]
              }), (0, MN.jsx)(vx, {
                need: UW.baf2BatNeed,
                kind: "battery",
                explain: jW
              })]
            })]
          })]
        })
      })
    }
    const Vx = "buildAFactory2Game:",
      px = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function fx(WW, iW) {
      return WW === rL ? null : iW ? "#4a4440" : WW < FL ? px[WW - zL] : WW === FL ? "#3fd0f0" : WW === QL ? "#2c3e4c" : "#55585e"
    }

    function Cx(WW) {
      let {
        inner: iW,
        looks: OW,
        layer: mW,
        setLayer: EW,
        glow: NW,
        melted: PW,
        explain: LW
      } = WW;
      const {
        t: cW
      } = (0, hE.B)(), [wW, tW, ZW] = iW, xW = Math.max(0, Math.min(tW - 1, mW)), lW = [];
      for (let bW = 0; bW < ZW; bW++)
        for (let WW = 0; WW < wW; WW++) {
          var AW;
          const iW = null !== (AW = OW[(xW * ZW + bW) * wW + WW]) && void 0 !== AW ? AW : rL,
            mW = fx(iW, PW),
            EW = iW >= zL && iW < FL;
          lW.push(null === mW ? (0, MN.jsx)("circle", {
            cx: WW + .5,
            cy: bW + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${WW},${bW}`) : (0, MN.jsx)("rect", {
            x: WW + .06,
            y: bW + .06,
            width: .88,
            height: .88,
            fill: mW,
            opacity: EW && !PW ? .5 + .5 * NW : 1,
            onClick: WW => {
              WW.stopPropagation();
              const OW = hx(iW);
              LW(OW.key, OW.params)
            }
          }, `${WW},${bW}`))
        }
      return (0, MN.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, MN.jsx)("svg", {
          className: YE()("Baf2RxMapGrid", {
            Melted: PW
          }),
          viewBox: `0 0 ${Math.max(1,wW)} ${Math.max(1,ZW)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": cW(`${Vx}rxWhy_core`),
          onClick: () => {
            LW(`${Vx}rxWhy_core`, {})
          },
          children: lW
        }), tW > 1 && (0, MN.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, MN.jsx)("button", {
            type: "button",
            "aria-label": cW(`${Vx}rxLayerDown`),
            disabled: xW <= 0,
            onClick: () => {
              EW(xW - 1)
            },
            children: "\u25bc"
          }), (0, MN.jsxs)("span", {
            children: [(0, MN.jsx)("span", {
              className: "HideNarrow",
              children: cW(`${Vx}rxLayer`, {
                n: String(xW + 1),
                of: String(tW)
              })
            }), (0, MN.jsx)("span", {
              className: "ShowNarrow",
              children: cW(`${Vx}rxLayerShort`, {
                n: String(xW + 1),
                of: String(tW)
              })
            })]
          }), (0, MN.jsx)("button", {
            type: "button",
            "aria-label": cW(`${Vx}rxLayerUp`),
            disabled: xW >= tW - 1,
            onClick: () => {
              EW(xW + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const Xx = "buildAFactory2Game:",
      Bx = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: fL,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: Zc,
        kind: "red"
      }],
      qx = [50, fL, 100];

    function Rx(WW) {
      let {
        stats: iW,
        t: OW,
        explain: mW
      } = WW;
      const EW = Oc(iW),
        NW = Math.max(1, iW.fuelHeat, iW.cooling, iW.size),
        PW = [
          ["fuel", `${Xx}rxBarRods`, iW.fuelHeat],
          ["cooling", `${Xx}rxBarCooling`, iW.cooling],
          ["size", `${Xx}rxBarSize`, iW.size]
        ];
      return (0, MN.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          mW(`${Xx}rxWhy_bars`)
        },
        children: [(0, MN.jsx)("span", {
          className: "Baf2RxMostLine",
          children: OW(`${Xx}rxMost`, {
            amount: yc(Math.min(iW.fuelHeat, iW.cooling, iW.size))
          })
        }), (0, MN.jsx)("span", {
          className: "Baf2RxMostBars",
          children: PW.map((WW => {
            let [iW, mW, PW] = WW;
            return (0, MN.jsxs)("span", {
              className: YE()("Baf2RxMostBar", iW, {
                Low: iW === EW
              }),
              children: [(0, MN.jsx)("small", {
                children: OW(mW)
              }), (0, MN.jsx)("i", {
                children: (0, MN.jsx)("b", {
                  style: {
                    width: 100 * PW / NW + "%"
                  }
                })
              })]
            }, iW)
          }))
        })]
      })
    }

    function Gx(WW) {
      var iW;
      let {
        view: OW,
        heat: EW,
        settle: NW,
        settleLine: PW,
        settleBad: LW,
        explain: cW
      } = WW;
      const {
        t: wW
      } = (0, hE.B)(), {
        status: tW
      } = OW, ZW = tW.baf2RxAt.join(","), [xW, lW] = (0, mW.useState)((() => Jx(OW.inner)));
      (0, mW.useEffect)((() => {
        lW(Jx(OW.inner))
      }), [ZW, OW.inner[1]]);
      const AW = null !== (iW = OW.plan) && void 0 !== iW ? iW : lc(tW),
        bW = OW.plan ? OW.plan.powerPerUnit : tW.baf2RxStats[8],
        jW = null === EW ? null : "alarm" === (UW = tc(tW)) ? "red" : "hot" === UW ? "hot" : "warm" === UW ? "warm" : "cold";
      var UW;
      const kW = !tW.baf2RxFormed && function(WW, iW) {
          return 0 !== (WW.baf2RxFlags & iW)
        }(tW, Ai),
        sW = tW.baf2RxDamage,
        MW = tW.baf2RxDamageTrend;
      return (0, MN.jsxs)("div", {
        className: YE()("Baf2RxCore", null !== jW && void 0 !== jW ? jW : "plan"),
        children: [(0, MN.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, MN.jsx)(Cx, {
            inner: OW.inner,
            looks: OW.looks,
            layer: xW,
            setLayer: lW,
            glow: tW.baf2RxFormed ? tW.baf2RxThrottle / 100 : 1,
            melted: kW,
            explain: cW
          }), (0, MN.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              cW(`${Xx}rxWhy_heat`)
            },
            children: [null !== EW ? (0, MN.jsxs)(MN.Fragment, {
              children: [(0, MN.jsx)("b", {
                children: wW(`${Xx}rxHeatPct`, {
                  pct: String(EW)
                })
              }), (0, MN.jsx)("span", {
                className: YE()("Baf2RxBand", jW),
                children: wW(`${Xx}rxBand_${jW}`)
              })]
            }) : (0, MN.jsx)("b", {
              children: wW(`${Xx}rxHeat`)
            }), null !== PW && (0, MN.jsx)("span", {
              className: YE()("Baf2RxSettle", {
                Bad: LW
              }),
              children: PW
            }), sW >= 1 && (0, MN.jsxs)("span", {
              className: YE()("Baf2RxDamage", MW),
              children: [wW(`${Xx}rxDamageLine`, {
                pct: String(sW)
              }), " \xb7 ", wW(`${Xx}rxDamage_${MW}`), (0, MN.jsx)("i", {
                children: (0, MN.jsx)("b", {
                  style: {
                    width: `${Math.min(100,sW)}%`
                  }
                })
              })]
            })]
          }), (0, MN.jsx)(aZ, {
            max: Zc,
            bands: Bx,
            ticks: qx,
            now: EW,
            settle: NW,
            settleTone: LW ? "bad" : null,
            onExplain: () => {
              cW(`${Xx}rxWhy_heat`)
            }
          })]
        }), (0, MN.jsx)(Rx, {
          stats: AW,
          t: wW,
          explain: cW
        }), bW > 0 && (0, MN.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            cW(`${Xx}rxWhy_perPellet`)
          },
          children: wW(`${Xx}rxPerPellet`, {
            amount: yc(bW)
          })
        })]
      })
    }

    function Ix(WW, iW) {
      var OW;
      if (!WW.baf2RxStore) return {
        note: iW(`${Xx}rxUpTo`, {
          amount: yc(WW.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [mW, EW] = WW.baf2RxStore, NW = EW > 0 ? mW / EW : 0, PW = String(Math.floor(100 * NW)), LW = null !== (OW = WW.baf2RxStoreNetPerS) && void 0 !== OW ? OW : 0, cW = function(WW) {
        var iW, OW;
        const [mW, EW] = null !== (iW = WW.baf2RxStore) && void 0 !== iW ? iW : [0, 0], NW = null !== (OW = WW.baf2RxStoreNetPerS) && void 0 !== OW ? OW : 0;
        return EW > 0 && mW >= EW - 1 ? "running" === WW.baf2RxState ? `${lx}rxStoreFull` : `${lx}rxStoreFullOnly` : NW > .05 ? `${lx}rxStoreLine` : NW < -.05 ? "running" === WW.baf2RxState ? `${lx}rxStoreUsesMore` : `${lx}rxStoreDraining` : `${lx}rxStorePct`
      }(WW);
      return {
        note: iW(cW, cW === `${Xx}rxStoreLine` ? {
          pct: PW,
          time: kN(iW, (EW - mW) / LW)
        } : {
          pct: PW
        }),
        share: NW
      }
    }

    function ax(WW) {
      let {
        view: iW,
        explain: OW,
        preview: mW
      } = WW;
      const {
        t: EW
      } = (0, hE.B)(), {
        status: NW
      } = iW, PW = RL(IL(...iW.dims)), LW = Mx(NW), cW = Math.min(Math.round(NW.baf2RxFuel), PW.fuel), wW = "running" === NW.baf2RxState, tW = wW ? Kx(NW.baf2RxOut, NW.baf2RxMaxNow) : 0, ZW = function(WW, iW, OW) {
        const mW = Ux(WW),
          EW = "cryo" === mW.dl,
          NW = OW ? OW.coolantSecs : mW.pct >= 100 && WW.baf2RxOut >= 1 ? sx(WW, WW.baf2RxThrottle).coolantSecs : null;
        let PW, LW = !1;
        if (mW.pct < 100) {
          const OW = 1 === mW.makersShort,
            NW = !EW && WW.baf2RxCryoOpen ? "OrCryo" : "";
          PW = mW.makersShort > 0 ? iW(EW ? `${Xx}rxCryoAddMixer${OW?"":"s"}` : `${Xx}rxWaterAddCondenser${OW?"":"s"}${NW}`, {
            count: String(mW.makersShort)
          }) : iW(`${Xx}rxWaterNeeds`, {
            rate: tx(mW.needPerS)
          })
        } else if (null !== NW) PW = iW(`${Xx}rxWaterRunsOut`, {
          time: kN(iW, NW)
        });
        else if (mW.waterBeside > 0) PW = iW(`${Xx}rxCryoPlusWater`, {
          rate: tx(mW.waterBeside)
        });
        else {
          const WW = function(WW) {
            return WW.inPerS <= 0 ? "rxWaterNoSupply" : WW.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(mW);
          LW = "rxWaterNoSupply" === WW, PW = iW(`${Xx}${WW}`, {
            amount: yc(mW.stored)
          })
        }
        return {
          kind: EW ? "Cryo" : "Water",
          label: iW(EW ? `${Xx}rxCryo` : `${Xx}rxWater`),
          number: `${tx(mW.usePerS)}/s`,
          preview: OW ? `${tx(OW.coolPerS)}/s` : null,
          note: PW,
          tone: "noWater" === WW.baf2RxState ? "danger" : LW ? "warn" : (cW = mW.pct, wW = NW, cW < 100 ? "danger" : null === wW ? null : wW < 300 ? "danger" : "warn"),
          share: mW.pct / 100,
          why: EW ? `${Xx}rxWhy_cryo` : `${Xx}rxWhy_water`,
          short: mW.pct < 100
        };
        var cW, wW
      }(NW, EW, mW), xW = kc(NW, PW.waste, LW), lW = Ix(NW, EW), AW = sx(NW, NW.baf2RxTarget), bW = wW && Math.abs(AW.settle - NW.baf2RxHeat) >= 3, jW = mW ? mW.pelletsPerMin / 60 : null;
      return (0, MN.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, MN.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, MN.jsx)(GZ, {
            kind: "Fuel",
            label: EW(`${Xx}rxFuel`),
            number: String(cW),
            preview: null !== jW && jW > 0 && NW.baf2RxFuel > 0 ? kN(EW, NW.baf2RxFuel / jW) : null,
            note: NW.baf2RxFuel <= 0 ? EW(`${Xx}rxFuelEmpty`) : LW > 0 ? EW(`${Xx}rxFuelLeft`, {
              time: kN(EW, NW.baf2RxFuel / LW)
            }) : EW(1 === cW ? `${Xx}rxFuelPellet` : `${Xx}rxFuelPellets`),
            tone: "noFuel" === NW.baf2RxState ? "danger" : NW.baf2RxFuel < 2 ? "warn" : null,
            share: NW.baf2RxFuel / PW.fuel,
            onExplain: () => {
              OW(`${Xx}rxWhy_fuel`)
            }
          }), (0, MN.jsx)(GZ, {
            kind: ZW.kind,
            label: ZW.label,
            number: ZW.number,
            preview: ZW.preview,
            note: ZW.note,
            tone: ZW.tone,
            share: ZW.share,
            onExplain: () => {
              OW(ZW.why)
            }
          })]
        }), (0, MN.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, MN.jsx)(IZ, {
            kind: "Fuel",
            step: tW,
            short: "noFuel" === NW.baf2RxState
          }), (0, MN.jsx)(IZ, {
            kind: ZW.kind,
            step: tW,
            short: ZW.short || "noWater" === NW.baf2RxState
          })]
        }), (0, MN.jsx)(Gx, {
          view: iW,
          heat: NW.baf2RxHeat,
          settle: Math.min(Zc, AW.settle),
          settleLine: bW ? EW(`${Xx}rxHeatSettles`, {
            pct: String(Math.round(AW.settle)),
            time: kN(EW, AW.settleS)
          }) : null,
          settleBad: AW.settle > 100,
          explain: OW
        }), (0, MN.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, MN.jsx)(IZ, {
            kind: "Power",
            step: tW
          }), (0, MN.jsx)(IZ, {
            kind: "Waste",
            step: wW && NW.baf2RxFuel - NW.baf2RxPu > 0 ? tW : 0,
            short: xW.full
          })]
        }), (0, MN.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, MN.jsx)(GZ, {
            kind: "Power",
            label: EW(`${Xx}rxPowerOut`),
            number: `\u26a1 ${yc(NW.baf2RxOut)}/s`,
            preview: mW ? yc(mW.out) : null,
            note: lW.note,
            share: lW.share,
            onExplain: () => {
              OW(`${Xx}rxWhy_power`)
            }
          }), (0, MN.jsx)(GZ, {
            kind: "Waste",
            label: EW(`${Xx}rxWaste`),
            number: `${Math.floor(NW.baf2RxWaste)}/${PW.waste}`,
            note: xW.full ? EW(`${Xx}rxWasteFull`) : null !== xW.fullInS ? EW(`${Xx}rxWasteFullIn`, {
              time: kN(EW, xW.fullInS)
            }) : EW(`${Xx}rxWasteSpent`),
            tone: "wasteFull" === NW.baf2RxState ? "danger" : xW.full ? "warn" : null,
            share: NW.baf2RxWaste / PW.waste,
            onExplain: () => {
              OW(`${Xx}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function rx(WW) {
      let {
        view: iW,
        explain: OW
      } = WW;
      const {
        t: mW
      } = (0, hE.B)(), EW = iW.plan;
      if (!EW) return null;
      const NW = EW.fuelHeat <= 0 ? null : EW.cooling > 0 ? Math.min(Zc, 100 * EW.fuelHeat / EW.cooling) : Zc,
        PW = mW(`${Xx}rxPlanAtFull`);
      return (0, MN.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, MN.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, MN.jsx)(GZ, {
            kind: "Fuel",
            label: mW(`${Xx}rxFuel`),
            number: mW(`${Xx}rxPlanPerMin`, {
              amount: Tc(EW.pelletsPerMin)
            }),
            note: mW(`${Xx}rxPlanPellets`),
            onExplain: () => {
              OW(`${Xx}rxWhy_fuel`)
            }
          }), (0, MN.jsx)(GZ, {
            kind: "Water",
            label: mW(`${Xx}rxWater`),
            number: `${tx(EW.waterPerS)}/s`,
            note: iW.status.baf2RxCryoOpen && EW.waterPerS > 0 ? mW(`${Xx}rxPlanOrCryo`, {
              rate: tx(Lc(EW, FW.f) * FW.n)
            }) : PW,
            onExplain: () => {
              OW(`${Xx}rxWhy_water`)
            }
          })]
        }), (0, MN.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, MN.jsx)(IZ, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, MN.jsx)(IZ, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, MN.jsx)(Gx, {
          view: iW,
          heat: null,
          settle: NW,
          settleLine: null === NW ? null : mW(`${Xx}rxPlanHeat`, {
            pct: String(Math.round(NW))
          }),
          settleBad: null !== NW && NW > 100,
          explain: OW
        }), (0, MN.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, MN.jsx)(IZ, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, MN.jsx)(IZ, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, MN.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, MN.jsx)(GZ, {
            kind: "Power",
            label: mW(`${Xx}rxPowerOut`),
            number: `\u26a1 ${yc(EW.max)}/s`,
            note: PW,
            onExplain: () => {
              OW(`${Xx}rxWhy_power`)
            }
          }), (0, MN.jsx)(GZ, {
            kind: "Waste",
            label: mW(`${Xx}rxWaste`),
            number: mW(`${Xx}rxPlanPerMin`, {
              amount: Tc(EW.pelletsPerMin)
            }),
            note: mW(`${Xx}rxWasteSpent`),
            onExplain: () => {
              OW(`${Xx}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const zx = "buildAFactory2Game:",
      Fx = {
        key: `${zx}rxWaiting`,
        params: {},
        tone: "info"
      };

    function Qx(WW, iW) {
      return 0 !== (WW.baf2RxFlags & iW)
    }

    function Wl(WW) {
      var iW, OW;
      let {
        store: EW,
        close: NW
      } = WW;
      const {
        t: PW
      } = (0, hE.B)(), LW = Lx(EW), {
        explained: cW,
        hinting: wW,
        explain: tW,
        explainOnce: ZW
      } = rZ("baf2RxExplained"), xW = (0, mW.useCallback)(((WW, iW) => {
        tW(PW(WW, iW))
      }), [tW, PW]), lW = (0, mW.useCallback)(((WW, iW) => {
        ZW(WW, PW(WW, iW))
      }), [ZW, PW]), [AW, bW] = (0, mW.useState)(!1), [jW, UW] = (0, mW.useState)(!1), kW = null === LW || void 0 === LW ? void 0 : LW.status, sW = null === kW || void 0 === kW ? void 0 : kW.baf2RxAt.join(","), MW = !0 === (null === kW || void 0 === kW ? void 0 : kW.baf2RxFormed);
      (0, mW.useEffect)((() => {
        UW(!1), bW(!1)
      }), [sW, MW]), (0, mW.useEffect)((() => (EW.opened(), () => {
        EW.closed()
      })), [EW]);
      const KW = void 0 !== kW && Qx(kW, Ui),
        SW = kW ? MW ? tc(kW) : null !== LW && void 0 !== LW && LW.plan ? function(WW, iW) {
          if (WW <= 0) return "off";
          if (iW <= 0) return "alarm";
          const OW = 100 * WW / iW;
          return OW < 50 ? "calm" : OW < mc ? "warm" : OW <= 100 ? "hot" : "alarm"
        }(LW.plan.fuelHeat, LW.plan.cooling) : "off" : "off",
        YW = kW ? xc(kW) : null,
        yW = LW ? LW.waiting ? Fx : MW ? yx(LW.status) : function(WW) {
          var iW, OW;
          const {
            status: mW
          } = WW;
          return Tx({
            left: mW.baf2RxNeed.reduce(((WW, iW) => {
              let [, OW] = iW;
              return WW + OW
            }), 0),
            bad: mW.baf2RxBad,
            rods: null !== (iW = null === (OW = WW.plan) || void 0 === OW ? void 0 : OW.rods) && void 0 !== iW ? iW : 0,
            canFill: Qx(mW, bi),
            melted: Qx(mW, Ai),
            idle: WW.looks.reduce(((WW, iW) => WW + (iW === QL ? 1 : 0)), 0)
          })
        }(LW) : null,
        TW = wW && null !== yW && ("ok" === yW.tone || "info" === yW.tone),
        JW = kW ? function(WW) {
          const iW = 0 !== (WW.baf2RxFlags & xi),
            OW = WW.baf2RxHeat < XL;
          return 0 !== (WW.baf2RxFlags & Ai) || OW && (iW || !WW.baf2RxFormed) ? null : WW.baf2RxFormed && !iW ? {
            key: `${wc}rxApartScram`,
            params: {}
          } : {
            key: `${wc}rxApartCooling`,
            params: {
              pct: String(XL)
            }
          }
        }(kW) : null,
        [hW, HW, nW] = null !== (iW = null === LW || void 0 === LW ? void 0 : LW.dims) && void 0 !== iW ? iW : [0, 0, 0],
        uW = `${hW}\xd7${HW}\xd7${nW}`;
      return (0, MN.jsx)(jP.b, {
        close: NW,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, MN.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, MN.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, MN.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, MN.jsx)(wx, {
                mood: SW
              }), (0, MN.jsxs)("div", {
                children: [(0, MN.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: PW(`${zx}rxTitle`)
                }), LW && (0, MN.jsxs)("p", {
                  className: YE()("Baf2RxSubtitle", MW && (null === YW || void 0 === YW ? void 0 : YW.tone)),
                  children: [MW && !KW ? (0, MN.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": PW(`${zx}rxChangeSize`),
                    onClick: () => {
                      if (!kW) return;
                      const WW = Qx(kW, xi);
                      var iW;
                      (iW = {
                        scram: WW,
                        heat: kW.baf2RxHeat
                      }).scram && iW.heat < XL ? bW(!0) : xW(WW ? `${zx}rxResizeCooling` : `${zx}rxResizeHot`, {
                        pct: String(XL)
                      })
                    },
                    children: [uW, " \u270e"]
                  }) : uW, " \xb7 ", PW(MW ? null !== (OW = null === YW || void 0 === YW ? void 0 : YW.label) && void 0 !== OW ? OW : `${zx}rxState_running` : `${zx}rxSubPlanShort`)]
                })]
              })]
            }), (0, MN.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [LW && !KW && (0, MN.jsx)(cx, {
                kind: "reactor",
                busy: LW.busy.has("apart"),
                whyNot: JW ? () => {
                  xW(JW.key, JW.params)
                } : null,
                apart: () => {
                  EW.tap("apart", (() => {
                    EW.send("apart")
                  }))
                }
              }), (0, MN.jsx)(UP.l, {
                onClick: NW
              })]
            })]
          }), LW && yW && (0, MN.jsxs)("div", {
            className: "Baf2RxBody",
            children: [MW ? (0, MN.jsx)(ax, {
              view: LW,
              explain: xW,
              preview: kx(LW.status)
            }) : (0, MN.jsx)(rx, {
              view: LW,
              explain: xW
            }), (0, MN.jsx)(zZ, {
              text: TW ? `${Sx(PW,yW)} ${PW(`${zx}rxTapHint`)}` : Sx(PW, yW),
              tone: yW.tone,
              explained: cW
            }), KW ? (0, MN.jsxs)(MN.Fragment, {
              children: [(0, MN.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: PW(`${zx}rxNotYours`)
              }), (0, MN.jsx)(mx, {
                status: LW.status,
                store: EW,
                readOnly: !0
              })]
            }) : MW && !jW ? (0, MN.jsxs)(MN.Fragment, {
              children: [(0, MN.jsx)(dx, {
                view: LW,
                store: EW,
                explain: xW,
                explainOnce: lW
              }), void 0 !== LW.status.baf2RxLayout && Wx(LW.status) && (0, MN.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, MN.jsx)(mx, {
                  status: LW.status,
                  store: EW,
                  readOnly: !1,
                  bare: !0
                }), (0, MN.jsx)(Ox, {
                  status: LW.status,
                  store: EW,
                  busy: LW.busy.has("fill")
                })]
              })]
            }) : (0, MN.jsxs)(MN.Fragment, {
              children: [(0, MN.jsx)(ex, {
                view: LW,
                store: EW,
                keepSize: MW ? () => {
                  UW(!1)
                } : void 0
              }), bc(LW.dims, LW.status.baf2RxDims) && (0, MN.jsx)(vx, {
                need: LW.status.baf2RxNeed,
                explain: xW
              }), (0, MN.jsx)(mx, {
                status: LW.status,
                store: EW,
                readOnly: !1
              })]
            }), AW && (0, MN.jsx)(Px, {
              id: "baf2ResizeTitle",
              title: `${zx}rxResizeConfirmTitle`,
              body: `${zx}rxResizeConfirmBody`,
              yes: `${zx}rxChangeSize`,
              cancel: () => {
                bW(!1)
              },
              confirm: () => {
                bW(!1), UW(!0)
              }
            })]
          })]
        })
      })
    }
    class il {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(WW) {
        this.view = WW;
        for (const iW of this.listeners) iW()
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

    function Ol(WW) {
      let {
        commands: iW,
        store: OW,
        power: EW,
        water: NW,
        reactor: PW,
        battery: LW,
        collider: cW,
        terminal: wW,
        quests: tW,
        tutorial: ZW,
        close: xW,
        leave: lW,
        askIslands: AW,
        showCore: bW,
        openSocial: jW
      } = WW;
      const {
        userContext: UW
      } = (0, HL.e)(), kW = hL.featureFlags.useSocialFeatures && UW.isLoggedIn(), [sW, MW] = (0, mW.useState)((() => OW.get()));
      (0, mW.useEffect)((() => OW.subscribe((() => {
        MW(OW.get())
      }))), [OW]);
      const KW = "islands" === (null === sW || void 0 === sW ? void 0 : sW.kind) ? sW.backToCore : void 0;
      return (0, MN.jsxs)(vP.Provider, {
        value: iW,
        children: ["core" === (null === sW || void 0 === sW ? void 0 : sW.kind) && (0, MN.jsx)(xZ, {
          view: sW.core,
          close: xW,
          askIslands: AW
        }), "dropMap" === (null === sW || void 0 === sW ? void 0 : sW.kind) && (0, MN.jsx)(jZ, {
          message: sW.dropMap,
          quests: tW,
          close: xW,
          leave: lW
        }), "islands" === (null === sW || void 0 === sW ? void 0 : sW.kind) && (0, MN.jsx)(eZ, {
          message: sW.islands,
          arrivedAtMs: sW.arrivedAtMs,
          close: KW ? () => {
            bW(KW)
          } : xW,
          leave: lW,
          openSocial: kW ? jW : null
        }), "quests" === (null === sW || void 0 === sW ? void 0 : sW.kind) && (0, MN.jsx)(nt, {
          store: tW,
          tutorial: ZW,
          close: xW
        }), "transfer" === (null === sW || void 0 === sW ? void 0 : sW.kind) && (0, MN.jsx)(Fw, {
          message: sW.transfer,
          arrivedAtMs: sW.arrivedAtMs,
          close: xW,
          leave: lW
        }), "power" === (null === sW || void 0 === sW ? void 0 : sW.kind) && (0, MN.jsx)(TP, {
          store: EW,
          close: xW
        }), "water" === (null === sW || void 0 === sW ? void 0 : sW.kind) && (0, MN.jsx)(tL, {
          store: NW,
          close: xW
        }), "reactor" === (null === sW || void 0 === sW ? void 0 : sW.kind) && (0, MN.jsx)(Wl, {
          store: PW,
          close: xW
        }), "battery" === (null === sW || void 0 === sW ? void 0 : sW.kind) && (0, MN.jsx)(Dx, {
          store: LW,
          close: xW
        }), "collider" === (null === sW || void 0 === sW ? void 0 : sW.kind) && (0, MN.jsx)(xw, {
          store: cW,
          close: xW
        }), "terminal" === (null === sW || void 0 === sW ? void 0 : sW.kind) && (0, MN.jsx)(RZ, {
          store: wW,
          close: xW,
          send: WW => {
            iW.send(WW)
          }
        })]
      })
    }
    var ml = OW(39679);

    function El(WW, iW) {
      return WW.distSq - iW.distSq
    }
    class Nl {
      constructor() {
        this.list = [], this.pool = []
      }
      add(WW, iW, OW, mW) {
        let EW = this.pool[this.list.length];
        EW || (EW = {
          x: 0,
          y: 0,
          distSq: 0,
          element: iW,
          liftRem: OW,
          dot: mW
        }, this.pool.push(EW)), EW.x = WW.x, EW.y = WW.y, EW.distSq = WW.distSq, EW.element = iW, EW.liftRem = OW, EW.dot = mW, this.list.push(EW)
      }
    }
    class Pl {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = WW, this.sizes = new WeakMap, this.observer = new ResizeObserver((WW => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const iW of WW) {
            const WW = iW.borderBoxSize[0];
            "dot" !== iW.target.dataset.crowded && 0 !== WW.inlineSize && 0 !== WW.blockSize && this.sizes.set(iW.target, {
              width: WW.inlineSize,
              height: WW.blockSize
            })
          }
        })), this.remPx = 16, this.EZ = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.Lk = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.Lk)
      }
      observe(WW) {
        this.observer.observe(WW)
      }
      unobserve(WW) {
        this.observer.unobserve(WW)
      }
      run(WW) {
        const iW = WW.list;
        iW.sort(El);
        const OW = this.pxPerVw,
          mW = this.pxPerVh;
        this.EZ.length = 0, this.hud && this.EZ.push(...this.hud.boxes(performance.now()));
        for (const NW of iW) {
          var EW;
          const WW = this.sizes.get(NW.element);
          let iW = "no";
          if (WW && WW.width > 0) {
            const EW = NW.x * OW,
              PW = NW.y * mW - NW.liftRem * this.remPx;
            this.fit(EW, PW, WW.width, WW.height) || (iW = NW.dot && this.fit(EW, PW, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (EW = NW.element.dataset.crowded) && void 0 !== EW ? EW : "no") !== iW && ("no" === iW ? delete NW.element.dataset.crowded : NW.element.dataset.crowded = iW), "hidden" !== iW && (0, ml.e)(NW.element, NW.x, NW.y)
        }
        iW.length = 0
      }
      fit(WW, iW, OW, mW) {
        const EW = WW - OW / 2,
          NW = WW + OW / 2,
          PW = iW - mW,
          LW = this.EZ;
        for (let cW = 0; cW < LW.length; cW += 4)
          if (EW < LW[cW + 1] - 2 && NW > LW[cW] + 2 && PW < LW[cW + 3] - 2 && iW > LW[cW + 2] + 2) return !1;
        return LW.push(EW, NW, PW, iW), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.Lk)
      }
    }
    const Ll = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class cl {
      constructor() {
        this.cards = Ll.map((WW => document.getElementsByClassName(WW))), this.watched = Ll.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(WW) {
        WW - this.refreshedAt > 1e3 && (this.refreshedAt = WW, this.stale = !0);
        for (let OW = 0; OW < this.cards.length; OW++) {
          var iW;
          const WW = null !== (iW = this.cards[OW][0]) && void 0 !== iW ? iW : null;
          WW !== this.watched[OW] && this.watch(OW, WW)
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
        for (const iW of this.watched) {
          if (!iW || iW.closest(".NoRoom")) continue;
          const OW = iW.getBoundingClientRect();
          let mW = OW.top,
            EW = OW.bottom;
          if (iW === this.watched[0] && this.hud) {
            const WW = this.hud.getBoundingClientRect();
            mW = Math.max(mW, WW.top), EW = Math.min(EW, WW.bottom)
          }
          OW.width > 0 && EW > mW && WW.push(OW.left, OW.right, mW, EW)
        }
      }
      watch(WW, iW) {
        const OW = this.watched[WW];
        var mW, EW;
        (OW && this.sizes.unobserve(OW), this.watched[WW] = iW, this.stale = !0, iW && this.sizes.observe(iW), 0 === WW) && (null === (mW = this.hud) || void 0 === mW || mW.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (EW = null === iW || void 0 === iW ? void 0 : iW.closest(".Baf2QuestHud")) && void 0 !== EW ? EW : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    var wl = OW(39687);
    class tl {
      constructor(WW) {
        this.onElement = WW, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(WW) {
        const iW = [];
        for (let OW = 0; OW + 4 < WW.length; OW += 5) {
          const mW = [WW[OW], WW[OW + 1], WW[OW + 2]];
          iW.push({
            key: mW.join(","),
            pos: mW,
            status: EE[WW[OW + 3]],
            kind: Hi[WW[OW + 4]]
          })
        }
        this.markers = iW, this.keys = new Set(iW.map((WW => {
          let {
            key: iW
          } = WW;
          return iW
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
        let iW = this.refs.get(WW);
        return iW || (iW = iW => {
          const OW = this.elements.get(WW);
          var mW, EW;
          OW && (null === (mW = this.onElement) || void 0 === mW || mW.call(this, OW, !1));
          iW ? (this.elements.set(WW, iW), null === (EW = this.onElement) || void 0 === EW || EW.call(this, iW, !0)) : (this.elements.delete(WW), this.refs.delete(WW))
        }, this.refs.set(WW, iW)), iW
      }
      onAfterRender(WW, iW, OW) {
        for (const mW of this.markers) {
          const EW = this.elements.get(mW.key);
          if (!EW) continue;
          const NW = (0, wl.c)(EW, WW, iW, mW.pos, 1.05, 24);
          NW && OW.add(NW, EW, .45, !0)
        }
      }
      notify() {
        for (const WW of this.listeners) WW()
      }
    }
    const Zl = {
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
    const xl = (0, mW.memo)((function(WW) {
        let {
          status: iW,
          kind: OW,
          bindRef: mW
        } = WW;
        const {
          t: EW
        } = (0, hE.B)(), NW = function(WW, iW) {
          var OW;
          if ("noFuel" === WW) {
            var mW, EW;
            const WW = null === (mW = vi[iW]) || void 0 === mW || null === (EW = mW.fuels) || void 0 === EW ? void 0 : EW.find((WW => NO.includes(WW)));
            return null !== WW && void 0 !== WW ? WW : Zl.noFuel
          }
          return void 0 !== (null === (OW = vi[iW]) || void 0 === OW ? void 0 : OW.cryoMade) ? "noOutlet" === WW ? "Fluid Pipe" : "noInput" === WW ? "Biomass" : Zl[WW] : Zl[WW]
        }(iW, OW);
        return (0, MN.jsxs)("div", {
          className: YE()("Baf2StallMarker", iW),
          ref: mW,
          hidden: !0,
          children: [NW && (0, MN.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, MN.jsx)(nE.b, {
              itemName: NW,
              amount: 0
            })
          }), (0, MN.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === iW ? "?" : "!"
          }), (0, MN.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: EW(`buildAFactory2Game:stallTag_${iW}`)
          })]
        })
      })),
      ll = (0, mW.memo)((function(WW) {
        let {
          controller: iW
        } = WW;
        const [OW, EW] = (0, mW.useState)((() => iW.get()));
        return (0, mW.useEffect)((() => (EW(iW.get()), iW.subscribe((() => {
          EW(iW.get())
        })))), [iW]), (0, MN.jsx)("div", {
          className: "Baf2StallMarkers",
          children: OW.map((WW => (0, MN.jsx)(xl, {
            status: WW.status,
            kind: WW.kind,
            bindRef: iW.bind(WW.key)
          }, WW.key)))
        })
      })),
      Al = UO.m + 150;
    class bl {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(WW, iW) {
        const OW = iW - WW;
        null === this.offset || OW < this.offset ? this.offset = OW : this.offset = Math.min(OW, this.offset + .02 * (iW - this.sampledAt)), this.sampledAt = iW
      }
      toLocal(WW) {
        var iW;
        return WW + (null !== (iW = this.offset) && void 0 !== iW ? iW : 0) + Al
      }
    }
    var jl = OW(39689);
    const Ul = 15 * Math.PI / 180,
      kl = Math.SQRT2,
      sl = [4, 2];

    function Ml(WW, iW) {
      const OW = [1 / 0, 1 / 0, 1 / 0],
        mW = [-1 / 0, -1 / 0, -1 / 0];
      for (const cW of WW)
        for (let WW = 0; WW < 3; WW++) OW[WW] = Math.min(OW[WW], cW[WW]), mW[WW] = Math.max(mW[WW], cW[WW]);
      const EW = (OW[0] + mW[0]) / 2,
        NW = (OW[1] + mW[1]) / 2,
        PW = (OW[2] + mW[2]) / 2;
      let LW = 0;
      for (const cW of WW) LW = Math.max(LW, Math.hypot(cW[0] - EW, cW[1] - NW, cW[2] - PW));
      return {
        x: EW,
        y: NW,
        z: PW,
        r: LW + iW
      }
    }

    function Kl(WW, iW, OW) {
      const mW = iW.x - WW.x,
        EW = iW.y - WW.y,
        NW = iW.z - WW.z,
        PW = Math.sqrt(mW * mW + EW * EW + NW * NW);
      if (PW <= iW.r + 8) return 1;
      const LW = iW.r / PW,
        cW = Math.sqrt(1 - LW * LW),
        wW = cW < -WW.cosHalf,
        tW = (mW * WW.dx + EW * WW.dy + NW * WW.dz) / PW;
      if (!wW && tW < WW.cosHalf * cW - WW.sinHalf * LW) return 0;
      const ZW = OW * kl * WW.frameMs * WW.pxPerBlock / (PW - iW.r);
      for (let xW = 0; xW < sl.length; xW++)
        if (ZW * sl[xW] <= 1) return sl[xW];
      return 1
    }

    function Sl(WW, iW) {
      return {
        name: WW,
        at: iW,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const Yl = [0, 0, 0];

    function yl(WW, iW, OW) {
      let [, mW, EW, NW, PW, LW] = iW;
      const cW = UO.f * (null !== PW && void 0 !== PW ? PW : 1),
        wW = [];
      for (let lW = 0; lW < mW.length; lW += 3) wW.push([mW[lW] + .5, mW[lW + 1] + .65, mW[lW + 2] + .5]);
      const tW = [];
      for (let lW = 0; lW < wW.length - 1; lW++) {
        const [WW, iW] = [wW[lW], wW[lW + 1]];
        tW.push([(WW[0] + iW[0]) / 2, (WW[1] + iW[1]) / 2, (WW[2] + iW[2]) / 2])
      }
      const ZW = wW.slice(1, -1),
        xW = new Uint8Array(ZW.length);
      for (const lW of null !== LW && void 0 !== LW ? LW : []) xW[lW >> 1] |= 1 & lW ? 2 : 1;
      return {
        island: WW,
        length: ZW.length,
        loop: NW,
        cellsPerMs: cW,
        edges: tW,
        Zj: ZW,
        bounds: Ml([...tW, ...ZW], .3),
        changed: !0,
        culled: !1,
        hide: xW,
        items: EW.map((WW => {
          let [iW, mW] = WW;
          return Sl(iW, (0, UO.y)(iW, mW, OW, cW).at)
        }))
      }
    }

    function Tl(WW, iW) {
      const {
        items: OW
      } = WW;
      if (0 === OW.length) return;
      const mW = WW.length / WW.cellsPerMs,
        EW = Math.floor((iW - OW[0].at) / mW) - 1;
      if (EW > 0)
        for (const NW of OW) NW.at += EW * mW
    }

    function Jl(WW, iW) {
      const OW = Math.min(Math.floor(iW), WW.length - 1),
        mW = WW.hide[OW];
      return 0 !== mW && 0 !== (mW & (iW - OW < .5 ? 1 : 2))
    }

    function hl(WW, iW) {
      const OW = Math.min(Math.floor(iW), WW.length - 1),
        mW = iW - OW,
        EW = mW < .5,
        NW = EW ? WW.edges[OW] : WW.Zj[OW],
        PW = EW ? WW.Zj[OW] : WW.edges[OW + 1],
        LW = EW ? 2 * mW : 2 * mW - 1;
      Yl[0] = NW[0] + (PW[0] - NW[0]) * LW, Yl[1] = NW[1] + (PW[1] - NW[1]) * LW, Yl[2] = NW[2] + (PW[2] - NW[2]) * LW
    }
    const Hl = Math.PI / 4;
    class nl {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new bl, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.Lk = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(WW) {
        const iW = performance.now();
        this.clock.sample(WW.baf2BeltLinesAt, iW), this.queue(WW.baf2BeltLinesAt, WW, 0, null, null, 0), this.applyDue(iW)
      }
      onMoves(WW) {
        const iW = performance.now(),
          OW = WW.baf2BeltMovesAt;
        this.clock.sample(OW, iW);
        for (const [mW, EW, NW, PW] of WW.baf2BeltMoveList) null === EW ? this.queue(OW - NW, null, mW, null, null, null !== PW && void 0 !== PW ? PW : 0) : this.queue(OW - NW, null, mW, EW, null !== PW && void 0 !== PW ? PW : null, 0);
        this.applyDue(iW)
      }
      start(WW) {
        this.pool = new jl.e(WW, {
          scale: .3,
          yaw: Hl
        }, 64), this.Lk(), window.addEventListener("resize", this.Lk)
      }
      onAfterRender(WW) {
        const {
          pool: iW
        } = this;
        if (!iW) return;
        const OW = performance.now(),
          mW = OW - this.lastRenderAt;
        this.lastRenderAt = OW, mW < 100 && (this.frameMs += .1 * (mW - this.frameMs));
        const EW = OW + this.frameMs;
        this.applyDue(EW);
        const NW = WW.cameraPosition,
          PW = iW.follow(NW);
        this.setView(WW, NW);
        const LW = this.frame++;
        for (let cW = 0; cW < this.shown.length; cW++) {
          const WW = this.shown[cW],
            OW = Kl(this.view, WW.bounds, WW.cellsPerMs),
            mW = WW.culled && 0 !== OW;
          if (WW.culled = 0 === OW, !PW && !WW.changed && !mW && (0 === OW || (LW + cW) % OW !== 0)) continue;
          WW.changed = !1, WW.loop && (Tl(WW, EW), (0, UO.w)(WW.items, WW.length, EW, WW.cellsPerMs));
          let NW = WW.length;
          for (let LW = 0; LW < WW.items.length; LW++) {
            const OW = WW.items[LW],
              mW = (0, UO.z)(OW.at, NW, EW, WW.cellsPerMs);
            if (NW = mW - UO.r, Jl(WW, mW)) {
              null === OW.kind || OW.hidden || (OW.kind.hide(OW.slot), OW.hidden = !0);
              continue
            }
            let cW = OW.kind;
            if (null === cW) {
              if (cW = iW.kindOf(OW.name), null === cW) continue;
              OW.kind = cW, OW.slot = cW.take(), OW.hidden = !0, OW.drawn = NaN
            } else if (mW === OW.drawn && !OW.hidden && !PW) continue;
            hl(WW, mW), cW.write(OW.slot, Yl[0], Yl[1], Yl[2]), OW.hidden = !1, OW.drawn = mW
          }
        }
        iW.commit()
      }
      dispose() {
        var WW;
        window.removeEventListener("resize", this.Lk), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (WW = this.pool) || void 0 === WW || WW.dispose(), this.pool = null
      }
      setView(WW, iW) {
        const {
          cameraDir: OW,
          lastDir: mW
        } = this, EW = WW.cameraDirection;
        for (let tW = 0; tW < 3; tW++) mW[tW] = OW[tW], OW[tW] = EW[tW];
        const NW = OW[0] * mW[0] + OW[1] * mW[1] + OW[2] * mW[2],
          PW = Number.isNaN(NW) ? 0 : Math.acos(Math.min(1, Math.max(-1, NW))),
          {
            width: LW,
            height: cW
          } = this,
          wW = WW.tanHalfFovX;
        ! function(WW, iW, OW, mW, EW, NW, PW) {
          let LW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          WW.x = iW[0], WW.y = iW[1], WW.z = iW[2], WW.dx = OW[0], WW.dy = OW[1], WW.dz = OW[2];
          const cW = Math.min(Math.PI, Math.atan(Math.sqrt(mW * mW + EW * EW)) + Ul + LW);
          WW.cosHalf = Math.cos(cW), WW.sinHalf = Math.sin(cW), WW.pxPerBlock = NW / (2 * EW), WW.frameMs = PW
        }(this.view, iW, OW, wW, wW * cW / LW, cW * window.devicePixelRatio, this.frameMs, PW)
      }
      queue(WW, iW, OW, mW, EW, NW) {
        const PW = Math.max(this.clock.toLocal(WW), this.lastPendingAt);
        this.lastPendingAt = PW, this.pending.push({
          at: PW,
          lines: iW,
          line: OW,
          name: mW,
          pos: EW,
          idx: NW
        })
      }
      applyDue(WW) {
        const {
          pending: iW
        } = this;
        for (; this.pendingHead < iW.length && iW[this.pendingHead].at <= WW;) {
          const WW = iW[this.pendingHead++];
          if (WW.lines) this.applyLines(WW.lines, WW.at), WW.lines = null;
          else {
            const iW = this.lines.get(WW.line);
            iW && this.applyMove(iW, WW, WW.at)
          }
        }
        this.pendingHead === iW.length ? (iW.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > iW.length && (iW.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(WW, iW) {
        this.clearIsland(WW.baf2BeltIsland);
        for (const OW of WW.baf2BeltLineList) this.lines.set(OW[0], yl(WW.baf2BeltIsland, OW, iW));
        this.shown = [...this.lines.values()]
      }
      applyMove(WW, iW, OW) {
        let {
          name: mW,
          pos: EW,
          idx: NW
        } = iW;
        WW.changed = !0, WW.loop && (Tl(WW, OW), (0, UO.w)(WW.items, WW.length, OW, WW.cellsPerMs)), null !== mW && null !== EW ? (0, UO.x)(WW.items, WW.length, Sl(mW, OW), EW, OW, WW.cellsPerMs) : null !== mW ? WW.items.push(Sl(mW, OW)) : WW.items.length > NW && this.release((0, UO.C)(WW.items, WW.length, OW, WW.cellsPerMs, NW))
      }
      clearIsland(WW) {
        for (const [iW, OW] of this.lines)
          if (OW.island === WW) {
            for (const WW of OW.items) this.release(WW);
            this.lines.delete(iW)
          }
      }
      release(WW) {
        null !== WW.kind && (WW.kind.release(WW.slot), WW.kind = null, WW.slot = -1, WW.hidden = !0, WW.drawn = NaN)
      }
    }
    var ul = OW(37868),
      ol = OW(39701);

    function dl(WW) {
      let {
        depth: iW,
        store: OW,
        t: EW
      } = WW;
      const NW = function(WW) {
        const [iW, OW] = (0, mW.useState)(WW.lastPlayerY());
        return (0, Qw.e)(DE, OW), (0, mW.useEffect)((() => {
          OW(WW.lastPlayerY())
        }), [WW]), iW
      }(OW);
      if (null === NW) return null;
      const [PW, LW] = iW, cW = NW > PW ? PW : null !== LW && NW < LW ? LW : null, wW = {
        y: UN(NW),
        target: null === cW ? "" : UN(cW)
      };
      return (0, MN.jsx)("span", {
        className: YE()("Baf2QuestDepth", {
          Reached: null === cW
        }),
        children: EW(`${mt}${null===cW?"questDepthReached":"questDepth"}`, wW)
      })
    }

    function el(WW) {
      let {
        also: iW,
        view: OW,
        t: mW
      } = WW;
      return (0, MN.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, MN.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, MN.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, MN.jsx)("strong", {
            children: mW(`${mt}questAlsoDownHere`)
          }), (0, MN.jsx)("span", {
            className: "Baf2QuestChips",
            children: iW.map((WW => {
              let [iW, EW, NW, PW] = WW;
              return (0, MN.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": mW(`${mt}questAlsoItem`, {
                  item: Nt(mW, OW.itemNames[iW], iW),
                  have: String(EW),
                  need: String(NW)
                }),
                children: [(0, MN.jsx)(ct, {
                  item: iW
                }), (0, MN.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${EW}/${NW}`
                }), null !== PW && (0, MN.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: mW(`${mt}questAlsoDepth`, {
                    y: UN(PW)
                  })
                })]
              }, iW)
            }))
          })]
        })]
      })
    }
    var vl = OW(4613);

    function gl(WW) {
      let {
        expanded: iW,
        inventoryOpen: OW,
        children: EW
      } = WW;
      const NW = (0, mW.useRef)(null);
      return (0, mW.useEffect)((() => {
        const WW = NW.current,
          iW = null === WW || void 0 === WW ? void 0 : WW.closest(".RightElements"),
          mW = null === WW || void 0 === WW ? void 0 : WW.firstElementChild;
        if (!WW || !iW || !mW) return;
        return (0, ol.d)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [iW, mW], (() => {
          const EW = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === EW.length) return;
          const NW = Math.max(...EW.map((WW => WW.getBoundingClientRect().bottom))),
            PW = iW.getBoundingClientRect(),
            LW = OW ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (LW) {
            const iW = parseFloat(getComputedStyle(mW).marginLeft) + parseFloat(getComputedStyle(mW).marginRight),
              OW = PW.right - LW.getBoundingClientRect().right - 8 - iW;
            WW.style.setProperty("--baf2-quest-room", `${OW}px`), WW.classList.toggle("NoRoom", OW < 150)
          } else WW.style.removeProperty("--baf2-quest-room"), WW.classList.remove("NoRoom");
          const cW = NW - PW.top + 8,
            wW = function(WW, iW, OW) {
              const mW = iW.getBoundingClientRect(),
                EW = WW.getBoundingClientRect(),
                NW = (0, vl.j)(EW.left, EW.right, mW.top + OW);
              if (null !== NW && NW < mW.bottom) return NW - mW.top;
              return mW.height - (parseFloat(getComputedStyle(iW).paddingBottom) || 0)
            }(WW, iW, cW) - 8,
            tW = window.innerHeight / 2 - PW.top,
            {
              top: ZW,
              maxHeight: xW
            } = function(WW, iW, OW, mW, EW) {
              const NW = Math.min(OW, Math.max(0, iW - WW)),
                PW = EW ? WW : Math.max(WW, Math.min(mW - NW / 2, iW - NW));
              return {
                top: PW,
                maxHeight: Math.max(0, iW - PW)
              }
            }(cW, wW, function(WW) {
              const iW = WW.firstElementChild,
                OW = iW ? iW.scrollHeight - iW.clientHeight : 0;
              return WW.getBoundingClientRect().height + Math.max(0, OW)
            }(mW), tW, (0, sN.b)());
          WW.style.top = `${ZW}px`, WW.style.maxHeight = `${xW}px`
        }))
      }), [OW]), (0, MN.jsx)("div", {
        ref: NW,
        className: YE()("Baf2QuestHud", {
          Expanded: iW
        }),
        children: EW
      })
    }

    function Dl(WW) {
      let {
        amount: iW,
        t: OW
      } = WW;
      return (0, MN.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, MN.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, MN.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: OW(`${mt}questStepsDone`, {
            amount: String(iW)
          })
        })]
      })
    }

    function Vl(WW) {
      let {
        pulse: iW
      } = WW;
      return 0 === iW ? null : (0, MN.jsx)("span", {
        className: "Baf2QuestTrackerPulse",
        "aria-hidden": "true"
      }, iW)
    }

    function pl(WW) {
      var iW;
      let {
        store: OW
      } = WW;
      const EW = (0, Qw.g)(gE, OW.get()),
        [NW, PW] = (0, mW.useState)(!1),
        {
          t: LW
        } = (0, hE.B)(),
        cW = (0, sN.e)(),
        {
          openInGameMenuName: wW,
          openEverythingMenuName: tW
        } = (0, ME.p)(["openInGameMenuName", "openEverythingMenuName"]),
        ZW = "inventory" === wW && null === tW,
        xW = null !== wW && !ZW || null !== tW;
      if (! function(WW) {
          return null !== WW.name || null !== WW.side
        }(EW) || xW || "off" === EW.tutorial) return null;
      const lW = BE(EW.rows),
        AW = lW.filter((WW => WW.done)).length,
        bW = function(WW, iW) {
          const OW = GE(WW);
          let mW = 0;
          return WW.filter(((WW, EW) => !!WW.justFinished || !(WW.done || EW < OW || mW > iW) && (mW++, !0)))
        }(EW.rows, cW ? 0 : 2),
        jW = cW ? bW : function(WW, iW) {
          const OW = iW.filter((WW => !WW.justFinished));
          if (OW.length < 2) return [...iW];
          const mW = WW.indexOf(OW[0]),
            EW = WW.indexOf(OW[OW.length - 1]),
            NW = new Set(BE(WW));
          return WW.filter(((WW, OW) => iW.includes(WW) || WW.done && NW.has(WW) && OW > mW && OW < EW))
        }(EW.rows, bW),
        UW = NW ? EW.rows : jW,
        kW = NW || cW ? [] : function(WW, iW) {
          const OW = new Array(iW.length + 1).fill(0),
            mW = new Set(BE(WW));
          let EW = 0;
          for (const NW of WW) EW < iW.length && NW === iW[EW] ? EW++ : NW.done && mW.has(NW) && OW[EW]++;
          return OW
        }(EW.rows, jW),
        sW = NW || jW.length < EW.rows.length || null !== EW.reward,
        MW = XE(EW),
        KW = MW ? LW(`${mt}questLineComplete`) : EW.tier ? Zt(LW, EW.tier) : LW(`${mt}currentQuest`),
        SW = function(WW) {
          var iW, OW;
          if (XE(WW)) return null;
          const mW = null === (iW = WW.chapters) || void 0 === iW ? void 0 : iW.find((iW => {
            let [OW] = iW;
            return OW === WW.tier
          }));
          if (!mW) return null;
          const EW = mW[1].filter((WW => !WW[4]));
          if (0 === EW.length) return null;
          const NW = null === (OW = WW.name) || void 0 === OW ? void 0 : OW[0],
            PW = WW => EW.findIndex((iW => iW[0] === NW && (!WW || !iW[3]))),
            LW = PW(!0),
            cW = LW >= 0 ? LW : PW(!1);
          if (cW >= 0) return [cW + 1, EW.length];
          const wW = EW.filter((WW => WW[3])).length;
          return [Math.min(wW + 1, EW.length), EW.length]
        }(EW);
      return (0, MN.jsx)(ul.h, {
        placement: "topRight",
        children: (0, MN.jsx)(gl, {
          expanded: NW,
          inventoryOpen: ZW,
          children: (0, MN.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: Et,
            children: [null !== EW.name && (0, MN.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [(0, MN.jsx)(Vl, {
                pulse: EW.pulse
              }), (0, MN.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, MN.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [KW, SW && (0, MN.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": LW(`${mt}questPlaceLabel`, {
                      n: String(SW[0]),
                      total: String(SW[1])
                    }),
                    children: LW(`${mt}questPlace`, {
                      n: String(SW[0]),
                      total: String(SW[1])
                    })
                  }), EW.tier && EW.core && !MW && (0, MN.jsx)(xt, {
                    core: EW.core,
                    t: LW
                  })]
                })
              }), (0, MN.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: LW(`${mt}${EW.name[0]}`, Pt(EW.name[1]))
              }), (lW.length > 1 || sW) && (0, MN.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [lW.length > 1 && (0, MN.jsx)(lt, {
                  rows: lW,
                  t: LW
                }), sW && (0, MN.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": NW,
                  onClick: () => {
                    PW(!NW)
                  },
                  children: [(0, MN.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: LW(`${mt}questStepsToggle`, {
                      done: String(AW),
                      total: String(lW.length)
                    })
                  }), (0, MN.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: NW ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, MN.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [UW.map(((WW, iW) => {
                  var NW;
                  const PW = WW.current && EW.depth;
                  return (0, MN.jsxs)(mW.Fragment, {
                    children: [(null !== (NW = kW[iW]) && void 0 !== NW ? NW : 0) > 0 && (0, MN.jsx)(Dl, {
                      amount: kW[iW],
                      t: LW
                    }), (0, MN.jsx)(At, {
                      row: WW,
                      view: EW,
                      t: LW,
                      extra: PW && (0, MN.jsx)(dl, {
                        depth: PW,
                        store: OW,
                        t: LW
                      })
                    })]
                  }, WW.id)
                })), (null !== (iW = kW[UW.length]) && void 0 !== iW ? iW : 0) > 0 && (0, MN.jsx)(Dl, {
                  amount: kW[UW.length],
                  t: LW
                }), EW.also.length > 0 && (0, MN.jsx)(el, {
                  also: EW.also,
                  view: EW,
                  t: LW
                })]
              }), NW && EW.reward && (0, MN.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [LW(`${mt}questReward`), (0, MN.jsx)(ct, {
                  item: EW.reward
                }), Nt(LW, EW.itemNames[EW.reward], EW.reward)]
              })]
            }), EW.side && (0, MN.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [fE(EW, Date.now()) && (0, MN.jsx)(Vl, {
                pulse: EW.sideCameUpAt
              }), (0, MN.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: LW(`${mt}questSide`)
              }), (0, MN.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: LW(`${mt}${EW.side.name[0]}`, Pt(EW.side.name[1]))
              }), (0, MN.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, MN.jsx)(At, {
                  row: EW.side.row,
                  view: EW,
                  t: LW
                })
              })]
            })]
          })
        })
      })
    }
    const fl = "baf2ToastView";
    class Cl {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = WW, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: WW,
          holdMs: iW
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const WW = this.dropCovered();
          WW && this.show(WW.message, WW.holdMs)
        }), 250));
        const OW = this.dropCovered();
        null !== OW && (OW.holdMs > 0 || "baf2ToastCelebrate" === OW.message.baf2ToastStyle) && "baf2ToastCelebrate" !== WW.baf2ToastStyle && this.show(OW.message, OW.holdMs);
        const mW = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== WW.baf2ToastStyle && mW > 0) return this.pending = {
          message: WW,
          holdMs: iW
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const WW = this.pending;
          this.pending = null, WW && this.present(WW.message, WW.holdMs)
        }), mW));
        this.present(WW, iW)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(WW, iW) {
        this.clearTimers(), this.pending = null;
        const OW = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: WW.baf2ToastText,
          style: WW.baf2ToastStyle,
          swapped: OW,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === WW.baf2ToastStyle ? 1500 : iW), this.iZ();
        const mW = Math.min(8e3, Math.max(1e3, WW.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.leave()
        }), mW)
      }
      leave() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.iZ(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.iZ()
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
      iZ() {
        eE.l.iZ(fl, this.view, !0)
      }
    }
    var Xl = OW(80);
    const Bl = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function ql(WW) {
      let {
        store: iW
      } = WW;
      const OW = (0, Qw.g)(fl, iW.get()),
        {
          openInGameMenuName: mW,
          openEverythingMenuName: EW
        } = (0, ME.p)(["openInGameMenuName", "openEverythingMenuName"]),
        NW = OW && (0, MN.jsxs)("div", {
          className: YE()("Baf2Toast", Bl[OW.style], {
            Swapped: OW.swapped,
            Leaving: OW.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === OW.style && (0, MN.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, MN.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, MN.jsx)(uE.d, {
              text: OW.text
            })
          })]
        }, OW.id);
      return null !== mW && null === EW ? (0, Xl.createPortal)((0, MN.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: NW
      }), document.body) : (0, MN.jsx)(ul.h, {
        children: NW
      })
    }
    const Rl = "baf2AreaView";
    class Gl {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.BL = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.BL = null
      }
      arrive(WW, iW) {
        iW && function(WW) {
          return "home" === WW.baf2AreaPlace && void 0 !== WW.baf2AreaNameText
        }(WW) ? this.BL = WW : this.show(WW)
      }
      release() {
        const WW = this.BL;
        null !== WW && this.show(WW)
      }
      show(WW) {
        this.clearTimer(), this.BL = null;
        const iW = void 0 === WW.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: WW,
          ms: iW
        }, this.iZ(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.iZ()
        }), iW)
      }
      dispose() {
        this.clearTimer(), this.BL = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      iZ() {
        eE.l.iZ(Rl, this.view, !0)
      }
    }

    function Il(WW) {
      var iW;
      let {
        store: OW
      } = WW;
      const {
        t: mW
      } = (0, hE.B)(), EW = (0, Qw.g)(Rl, OW.get());
      if (!EW) return null;
      const {
        area: NW
      } = EW, PW = NW.baf2AreaResetMinutes;
      return (0, MN.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": NW.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${EW.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, MN.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), NW.baf2AreaHeading && (0, MN.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: mW(NW.baf2AreaHeading)
        }), (0, MN.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (iW = NW.baf2AreaNameText) && void 0 !== iW ? iW : mW(NW.baf2AreaName)
        }), NW.baf2AreaNote && (0, MN.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: mW(NW.baf2AreaNote)
        }), void 0 !== PW && (0, MN.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: mW("buildAFactory2Game:areaWildsReset", {
            time: kN(mW, 60 * PW)
          })
        })]
      }, EW.id)
    }
    const al = "baf2GearGauge";
    class rl {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      zk(WW) {
        var iW;
        if (this.clearLinger(), null === WW.gearPowerKind) return void this.set(null);
        const OW = "jetpack" === WW.gearPowerKind && (mW = WW.gearChargeState, EW = WW.gearCharge, "flying" === mW || "charging" === mW || "outOfCharge" === mW || "ceiling" === mW || "offPlot" === mW || "noPower" === mW && EW <= 0);
        var mW, EW;
        const NW = !0 === (null === (iW = this.view) || void 0 === iW ? void 0 : iW.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          PW = OW || "jetpack" === WW.gearPowerKind && NW;
        this.set({
          gauge: WW,
          jetShown: PW
        }), PW && !OW && (this.lingerTimer = setTimeout((() => {
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
        this.view = WW, eE.l.iZ(al, WW, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const zl = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function Fl(WW) {
      let {
        store: iW
      } = WW;
      const OW = (0, Qw.g)(al, iW.get());
      return OW ? "jetpack" === OW.gauge.gearPowerKind ? (0, MN.jsx)(Ql, {
        view: OW
      }) : (0, MN.jsx)(WA, {
        gauge: OW.gauge
      }) : null
    }

    function Ql(WW) {
      let {
        view: iW
      } = WW;
      const {
        t: OW
      } = (0, hE.B)(), {
        gauge: mW
      } = iW, EW = mW.gearChargeMax > 0 ? Math.max(0, Math.min(1, mW.gearCharge / mW.gearChargeMax)) : 0, NW = zl[mW.gearChargeState], PW = NW ? OW(NW) : null;
      return (0, MN.jsxs)("div", {
        className: YE()("Baf2JetArc", {
          Shown: iW.jetShown,
          Low: EW < .2,
          Warm: EW >= .2 && EW < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - EW)
        },
        "aria-hidden": !iW.jetShown,
        children: [(0, MN.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, MN.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: iA,
            pathLength: 100
          }), (0, MN.jsx)("path", {
            className: "Baf2JetArcFill",
            d: iA,
            pathLength: 100
          })]
        }), (0, MN.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * EW), "%"]
        }), PW && (0, MN.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: PW
        })]
      })
    }

    function WA(WW) {
      let {
        gauge: iW
      } = WW;
      const {
        t: OW
      } = (0, hE.B)(), mW = function(WW, iW) {
        switch (iW.gearPowerKind) {
          case "skyPack":
            return WW("buildAFactory2Game:gearSkyPack", {
              charge: iW.gearCharge,
              max: iW.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return WW("buildAFactory2Game:gearIslandDraw", {
              power: zW(iW.gearIslandPower),
              cost: zW(iW.gearCostPerUse)
            });
          case "barrier":
            return WW("buildAFactory2Game:gearBarrier", {
              shield: Math.round(iW.gearCharge),
              max: iW.gearChargeMax,
              power: zW(iW.gearIslandPower)
            });
          default:
            return null
        }
      }(OW, iW);
      return null === mW ? null : (0, MN.jsx)(ul.h, {
        children: (0, MN.jsx)("div", {
          className: YE()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === iW.gearChargeState || "outOfCharge" === iW.gearChargeState
          }),
          role: "status",
          children: mW
        })
      })
    }
    const iA = (() => {
      const WW = WW => {
        const iW = WW * Math.PI / 180;
        return `${(40*Math.cos(iW)).toFixed(2)} ${(40*Math.sin(iW)).toFixed(2)}`
      };
      return `M ${WW(160)} A 40 40 0 1 1 ${WW(380)}`
    })();
    class OA {
      constructor(WW) {
        this.onElement = WW, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      zk(WW) {
        let iW = WW.baf2LabelsReset || WW.baf2LabelsIsland !== this.island;
        iW && (this.labels.clear(), this.island = WW.baf2LabelsIsland);
        for (const [OW, mW, EW, NW, PW] of WW.baf2LabelsList) {
          const WW = `${OW},${mW},${EW}`,
            LW = this.labels.get(WW);
          null === NW ? iW = this.labels.delete(WW) || iW : LW && LW.item === NW && (LW.count === PW || LW.count >= 0 && PW >= 0) ? LW.count !== PW && (LW.count = PW, this.writeCount(WW, PW)) : (this.labels.set(WW, {
            key: WW,
            pos: [OW, mW, EW],
            item: NW,
            count: PW
          }), this.writeCount(WW, PW), iW = !0)
        }
        if (this.changes++, iW) {
          this.snapshot = [...this.labels.values()];
          for (const WW of this.listeners) WW()
        }
      }
      bindCount(WW) {
        const iW = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${WW}`;
        let OW = this.countRefs.get(iW);
        return OW || (OW = OW => {
          var mW, EW;
          OW ? (this.countElements.set(iW, OW), this.writeCount(WW, null !== (mW = null === (EW = this.labels.get(WW)) || void 0 === EW ? void 0 : EW.count) && void 0 !== mW ? mW : -1)) : (this.countElements.delete(iW), this.countRefs.delete(iW))
        }, this.countRefs.set(iW, OW)), OW
      }
      setCountWords(WW) {
        this.countWords = WW;
        for (const [iW, OW] of this.labels) this.writePart(`words|${iW}`, WW(OW.count), OW.count)
      }
      writeCount(WW, iW) {
        this.writePart(`bare|${WW}`, jN(iW), iW), this.countElements.has(`words|${WW}`) && this.writePart(`words|${WW}`, this.countWords(iW), iW)
      }
      writePart(WW, iW, OW) {
        const mW = this.countElements.get(WW);
        if (!mW || OW < 0) return;
        const EW = mW.firstChild;
        EW && 3 === EW.nodeType && !EW.nextSibling ? EW.nodeValue !== iW && (EW.nodeValue = iW) : mW.textContent !== iW && (mW.textContent = iW)
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
        let iW = this.refs.get(WW);
        return iW || (iW = iW => {
          const OW = this.elements.get(WW);
          var mW, EW;
          OW && (null === (mW = this.onElement) || void 0 === mW || mW.call(this, OW, !1));
          iW ? (this.elements.set(WW, iW), null === (EW = this.onElement) || void 0 === EW || EW.call(this, iW, !0)) : (this.elements.delete(WW), this.refs.delete(WW))
        }, this.refs.set(WW, iW)), iW
      }
      onAfterRender(WW, iW, OW, mW) {
        for (const EW of this.snapshot) {
          const NW = this.elements.get(EW.key);
          if (!NW) continue;
          if (mW(EW.key)) {
            (0, ml.h)(NW, !0);
            continue
          }
          const PW = (0, wl.c)(NW, WW, iW, EW.pos, 1.1, 24);
          PW && OW.add(PW, NW, 0, !1)
        }
      }
    }
    const mA = (0, mW.memo)((function(WW) {
        let {
          item: iW
        } = WW;
        return (0, MN.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, MN.jsx)(nE.b, {
            itemName: iW,
            amount: 0
          })
        })
      })),
      EA = (0, mW.memo)((function(WW) {
        let {
          label: iW,
          bindRef: OW,
          countRef: mW,
          wordsRef: EW
        } = WW;
        return (0, MN.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: OW,
          hidden: !0,
          children: [(0, MN.jsx)(mA, {
            item: iW.item
          }), iW.count >= 0 && (0, MN.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, MN.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: EW
            }), (0, MN.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: mW
            })]
          })]
        })
      })),
      NA = (0, mW.memo)((function(WW) {
        let {
          store: iW
        } = WW;
        const {
          t: OW
        } = (0, hE.B)(), [EW, NW] = (0, mW.useState)((() => iW.list()));
        return (0, mW.useEffect)((() => (NW(iW.list()), iW.subscribe((() => {
          NW(iW.list())
        })))), [iW]), (0, mW.useEffect)((() => {
          iW.setCountWords((WW => OW("buildAFactory2Game:labelSiloCount", {
            count: jN(WW)
          })))
        }), [iW, OW]), (0, MN.jsx)("div", {
          className: "Baf2IslandLabels",
          children: EW.map((WW => -2 === WW.count ? null : (0, MN.jsx)(EA, {
            label: WW,
            bindRef: iW.bind(WW.key),
            countRef: iW.bindCount(WW.key),
            wordsRef: iW.bindCount(WW.key, "words")
          }, WW.key)))
        })
      })),
      PA = {
        read: () => !0,
        write: () => {}
      };

    function LA(WW) {
      return `${WW[0]},${WW[1]},${WW[2]}`
    }

    function cA(WW) {
      let [iW, OW, mW, EW, NW, PW, LW, cW, wW, tW, ZW, xW] = WW;
      const lW = void 0 === ZW || void 0 === xW ? function(WW) {
        return [Math.floor((WW - 1) / 2), 0]
      }(NW) : [ZW, xW];
      return {
        kind: 0 === cW ? "reactor" : "battery",
        box: qO([iW, OW, mW], EW, NW, PW, LW, lW),
        formed: 1 === wW,
        level: tW
      }
    }
    class wA {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PA;
        this.guideSetting = WW, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = WW.read()
      }
      zk(WW) {
        var iW;
        const OW = new Map;
        for (const mW of WW.baf2RxPlanList) {
          const WW = cA(mW);
          OW.set(LA(WW.box.ctrl), WW)
        }
        this.plans = OW, this.layouts = new Map((null !== (iW = WW.baf2RxLayouts) && void 0 !== iW ? iW : []).map((WW => {
          let [iW, OW, mW, EW] = WW;
          return [LA([iW, OW, mW]), EW]
        }))), this.predicted.clear(), WW.baf2RxFormedAt && (this.formed = {
          ctrl: WW.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const mW of [...this.startersOff]) {
          const WW = OW.get(mW);
          WW && !WW.formed || this.startersOff.delete(mW)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((WW => this.planByKey(WW)))
      }
      planAt(WW) {
        return this.planByKey(LA(WW))
      }
      predictSize(WW, iW) {
        this.predicted.set(LA(WW), iW), this.changed()
      }
      unpredict(WW) {
        this.predicted.delete(LA(WW)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(WW) {
        var iW;
        const OW = LA(WW);
        return this.predicted.has(OW) ? null : null !== (iW = this.layouts.get(OW)) && void 0 !== iW ? iW : null
      }
      showsStarter(WW) {
        return !this.startersOff.has(LA(WW))
      }
      setStarter(WW, iW) {
        const OW = LA(WW);
        iW ? this.startersOff.delete(OW) : this.startersOff.add(OW), this.changed()
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
        const iW = this.plans.get(WW);
        if (!iW) return null;
        const OW = this.predicted.get(WW);
        return OW ? {
          ...iW,
          box: GO(iW.box, iW.kind, OW[0], OW[1], OW[2])
        } : iW
      }
      changed() {
        this.version++;
        for (const WW of this.listeners) WW()
      }
    }
    var tA = OW(182);
    const ZA = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function xA(WW, iW, OW, mW) {
      const EW = WW.length / 3;
      for (let NW = 0; NW < ZA.length / 3; NW++) WW.push(ZA[3 * NW] * mW[0] / 2 + OW[0], ZA[3 * NW + 1] * mW[1] / 2 + OW[1], ZA[3 * NW + 2] * mW[2] / 2 + OW[2]);
      for (let NW = EW; NW < EW + 24; NW += 4) iW.push(NW, NW + 1, NW + 2, NW, NW + 2, NW + 3)
    }

    function lA(WW, iW, OW) {
      const mW = iW[0][0],
        EW = [],
        NW = [];
      for (const [PW, LW] of iW) xA(EW, NW, [PW[0] - mW[0], PW[1] - mW[1], PW[2] - mW[2]], LW);
      return WW.createGameMesh({
        positions: EW,
        indices: NW
      }, OW, mW)
    }

    function AA(WW, iW) {
      const OW = WW.w - 2,
        mW = WW.d - 2;
      return 1 === function(WW, iW, OW, mW) {
        const [EW, NW, PW] = WW;
        if (Number(EW <= 2) + Number(NW <= 2) + Number(PW <= 2) >= 2) return function(WW, iW, OW) {
          return (WW + iW + OW) % 2 === 0 ? 1 : 3
        }(iW, OW, mW);
        const [LW, cW] = EW >= NW && EW >= PW ? [OW, mW] : NW >= PW ? [iW, mW] : [iW, OW];
        return LW % 2 === 0 && cW % 2 === 0 ? 1 : 3
      }([OW, WW.h - 2, mW], iW % OW, Math.floor(iW / (OW * mW)), Math.floor(iW / OW) % mW) ? "rod" : "channel"
    }

    function bA(WW, iW, OW) {
      if ("reactor" !== WW.kind || WW.formed || !iW) return !1;
      const mW = rO(WW.box);
      for (let EW = 0; EW < mW; EW++) {
        const WW = OW(EW);
        if (null !== WW && oO(WW)) return !1
      }
      return !0
    }

    function jA(WW, iW, OW, mW, EW) {
      var NW;
      let PW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const LW = Om(WW.box, iW),
        cW = Pm(WW.kind, LW, OW);
      if ("wrong" === cW || "blocked" === cW) return "wrong";
      if (!EW) return null;
      if ("inside" === LW && "reactor" === WW.kind && "Air" === dO(OW)) {
        if (null !== PW) {
          var wW;
          const OW = FZ[QZ(PW, mm(WW.box, iW))];
          return OW && null !== (wW = Mc(OW)) && void 0 !== wW ? wW : null
        }
        if (mW) return AA(WW.box, mm(WW.box, iW))
      }
      if ("missing" !== cW) return null;
      const tW = Lm(WW.kind, LW);
      return null === tW ? null : null !== (NW = Mc(tW)) && void 0 !== NW ? NW : null
    }
    const UA = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function kA(WW, iW, OW) {
      const mW = OW => {
        const mW = iW(Wm(WW.box, OW));
        return null !== mW && function(WW, iW) {
          return "reactor" !== WW.kind || iW !== FO(WW.box) && "inside" !== Om(WW.box, iW)
        }(WW, OW) && "ok" !== Pm(WW.kind, Om(WW.box, OW), mW)
      };
      if (OW) {
        const NW = im(WW.box, [Math.floor(OW[0]), Math.floor(OW[1]), Math.floor(OW[2])]);
        if (NW >= 0 && (mW(NW) || (EW = NW, "reactor" === WW.kind && "inside" === Om(WW.box, EW) && "Air" === iW(Wm(WW.box, EW))))) return NW
      }
      var EW;
      const NW = rO(WW.box);
      for (let PW = 0; PW < NW; PW++)
        if (mW(PW)) return PW;
      return -1
    }

    function sA(WW, iW) {
      return Math.floor(iW / (WW.w * WW.d))
    }

    function MA(WW, iW, OW) {
      return OW >= 0 && sA(WW, iW) > sA(WW, OW)
    }

    function KA(WW, iW) {
      return iW >= 0 && WW.h >= 3 && sA(WW, iW) === WW.h - 1
    }

    function SA(WW) {
      const iW = dO(WW);
      return iW === MO || "Collider" === iW || "Laser" === iW || iW.startsWith("_Collider ")
    }

    function YA(WW, iW, OW, mW) {
      if (mW(WW)) return null;
      if (!UA.every((iW => {
          let [mW, EW, NW] = iW;
          const PW = OW([WW[0] + mW, WW[1] + EW, WW[2] + NW]);
          return null !== PW && !fO("reactor", PW) && "reactor" !== eO(PW)
        }))) return null;
      const EW = CO("reactor").min,
        NW = qO([WW[0], WW[1], WW[2]], function(WW, iW) {
          const OW = iW[0] - (WW[0] + .5),
            mW = iW[2] - (WW[2] + .5);
          return Math.abs(OW) >= Math.abs(mW) ? OW >= 0 ? 2 : 4 : mW >= 0 ? 1 : 3
        }(WW, iW), EW, EW, EW, RO("reactor", EW)),
        PW = FO(NW);
      let LW = !0;
      for (let cW = 0; cW < rO(NW) && LW; cW++) {
        if (cW === PW) continue;
        const WW = Wm(NW, cW),
          iW = OW(WW);
        LW = !mW(WW) && (null === iW || !SA(iW))
      }
      return {
        box: NW,
        fits: LW
      }
    }
    const yA = sc,
      TA = "baf2Goal",
      JA = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      hA = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      HA = .4;

    function nA(WW, iW) {
      let [OW, mW, EW] = WW;
      const NW = hc([OW - .02, mW - .02, EW - .02], [OW + 1.02, mW + 1.02, EW + 1.02], .07);
      return iW && (NW.push([
        [OW + .5, mW + 1 + .7, EW + .5],
        [.08, 1.4, .08]
      ]), NW.push([
        [OW + .5, mW + 1 + 1.4 + .2, EW + .5],
        [HA, HA, HA]
      ])), NW
    }

    function uA(WW, iW) {
      let [OW, mW, EW] = iW;
      return WW.isBlockInLoadedChunk(OW, mW, EW) ? WW.blockIdToBlockName(WW.getBlockId(OW, mW, EW)) : null
    }
    let oA = null;
    const dA = new Set;
    let eA = null;

    function vA(WW) {
      oA = WW;
      for (const iW of dA) iW(WW)
    }
    class gA {
      constructor(WW) {
        var iW;
        this.plans = WW, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (iW = WW => {
          var iW, OW;
          this.setGoal(null !== (iW = null === WW || void 0 === WW ? void 0 : WW.goal) && void 0 !== iW ? iW : null, null !== (OW = null === WW || void 0 === WW ? void 0 : WW.startsBattery) && void 0 !== OW && OW)
        }, eA ??= [eE.l.subscribe("setDirectionArrow", (WW => {
          let {
            id: iW,
            position: OW,
            text: mW
          } = WW;
          iW === TA && vA({
            goal: [Math.floor(OW[0]), Math.floor(OW[1]), Math.floor(OW[2])],
            startsBattery: JSON.stringify(null !== mW && void 0 !== mW ? mW : null).includes("arrowStartBattery")
          })
        })), eE.l.subscribe("clearDirectionArrow", (WW => {
          let {
            id: iW
          } = WW;
          null !== iW && iW !== TA || vA(null)
        }))], dA.add(iW), iW(oA), () => {
          dA.delete(iW)
        })
      }
      onAfterRender(WW, iW) {
        const OW = performance.now();
        if (this.cues.length > 0) {
          const iW = .55 + .45 * Math.sin(OW / 1100 * Math.PI * 2);
          for (const OW of this.cues) WW.setGameMesh(OW, {
            visibility: iW
          })
        }
        if (OW - this.lastCheckMs < 150) return;
        this.lastCheckMs = OW;
        const mW = this.plans.all().filter((WW => {
            const [OW, mW, EW] = WW.box.ctrl;
            return (!WW.formed || null !== this.plans.layoutOf(WW.box.ctrl)) && (OW - iW[0]) ** 2 + (mW - iW[1]) ** 2 + (EW - iW[2]) ** 2 <= 2304
          })),
          EW = function(WW, iW) {
            const OW = tA.f.jZ,
              mW = new Map;
            for (const NW of iW) {
              const iW = Wm(NW.box, 0),
                PW = Wm(NW.box, rO(NW.box) - 1),
                LW = [Math.min(iW[0], PW[0]), Math.min(iW[1], PW[1]), Math.min(iW[2], PW[2])].map((WW => Math.floor(WW / OW))),
                cW = [Math.max(iW[0], PW[0]), Math.max(iW[1], PW[1]), Math.max(iW[2], PW[2])].map((WW => Math.floor(WW / OW)));
              for (let OW = LW[0]; OW <= cW[0]; OW++)
                for (let iW = LW[1]; iW <= cW[1]; iW++)
                  for (let NW = LW[2]; NW <= cW[2]; NW++) {
                    var EW;
                    mW.set(`${OW},${iW},${NW}`, null !== (EW = WW.getChunkVersion(OW, iW, NW)) && void 0 !== EW ? EW : -1)
                  }
            }
            return mW
          }(WW, mW);
        this.plans.getVersion() === this.storeVersion && (function(WW, iW) {
          if (WW.size !== iW.size) return !1;
          for (const [OW, mW] of WW)
            if (iW.get(OW) !== mW) return !1;
          return !0
        }(EW, this.chunkVersions) || OW - this.lastRescanMs < 600) || (this.lastRescanMs = OW, this.storeVersion = this.plans.getVersion(), this.chunkVersions = EW, this.redraw(WW, mW))
      }
      dispose(WW) {
        this.unwatch(), oA = null, this.clearMeshes(WW), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(WW, iW) {
        var OW;
        (null === WW || void 0 === WW ? void 0 : WW.join()) === (null === (OW = this.goal) || void 0 === OW ? void 0 : OW.join()) && iW === this.startsBattery || (this.goal = WW, this.startsBattery = iW, this.storeVersion = -1)
      }
      redraw(WW, iW) {
        const OW = iW => uA(WW, iW),
          mW = new Map,
          EW = [],
          NW = this.plans.guideOn();
        for (const wW of iW) {
          const WW = NW && bA(wW, this.plans.showsStarter(wW.box.ctrl), (WW => OW(Wm(wW.box, WW)))),
            iW = "reactor" === wW.kind ? this.plans.layoutOf(wW.box.ctrl) : null,
            PW = NW && !wW.formed ? kA(wW, OW, this.goal) : -1;
          PW >= 0 && EW.push([Wm(wW.box, PW), KA(wW.box, PW)]);
          const LW = rO(wW.box);
          for (let EW = 0; EW < LW; EW++) {
            const LW = Wm(wW.box, EW),
              cW = OW(LW),
              tW = null === cW ? null : jA(wW, EW, cW, WW, NW, iW);
            if (null !== tW) {
              const WW = "wrong" !== tW && MA(wW.box, EW, PW),
                iW = WW ? `${tW}Dim` : tW;
              let OW = mW.get(iW);
              OW || (OW = {
                draw: {
                  ghost: tW,
                  dim: WW
                },
                list: []
              }, mW.set(iW, OW)), OW.list.push(LW)
            }
          }
        }
        if (NW && this.startsBattery && this.goal) {
          const [WW, iW, EW] = this.goal, NW = [];
          for (const [mW, PW, LW] of JA) {
            const cW = [WW + mW, iW + PW, EW + LW];
            "Air" === OW(cW) && NW.push(cW)
          }
          if (NW.length > 0) {
            var PW;
            const WW = null !== (PW = mW.get("cell")) && void 0 !== PW ? PW : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            WW.list.push(...NW), mW.set("cell", WW)
          }
        }
        const LW = [...mW.keys()].sort(),
          cW = [...LW.map((WW => `${WW}:${mW.get(WW).list.join(";")}`)), `cue:${EW.join(";")}`].join("|");
        if (cW !== this.shownKey) {
          this.shownKey = cW, this.clearMeshes(WW);
          for (const iW of LW) {
            const {
              draw: OW,
              list: EW
            } = mW.get(iW);
            this.meshes.push(this.build(WW, OW, EW))
          }
          for (const [iW, OW] of EW) this.cues.push(lA(WW, nA(iW, OW), hA))
        }
      }
      build(WW, iW, OW) {
        let {
          ghost: mW,
          dim: EW
        } = iW;
        const {
          size: NW,
          colour: PW,
          alpha: LW
        } = yA[mW], cW = OW[0], wW = [], tW = [];
        for (const [ZW, xW, lW] of OW) xA(wW, tW, [ZW - cW[0] + .5, xW - cW[1] + .5, lW - cW[2] + .5], [NW, NW, NW]);
        return WW.createGameMesh({
          positions: wW,
          indices: tW
        }, {
          rgb: PW,
          alpha: LW * (EW ? .3 : 1)
        }, cW)
      }
      clearMeshes(WW) {
        for (const iW of [...this.meshes, ...this.cues]) WW.disposeGameMesh(iW);
        this.meshes = [], this.cues = []
      }
    }
    const DA = [.56, .83, 1],
      VA = [1, .3, .25];
    class pA {
      constructor(WW) {
        this.plans = WW, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(WW, iW, OW) {
        var mW;
        const EW = performance.now();
        if (EW - this.lastCheckMs < 150) return;
        this.lastCheckMs = EW;
        const NW = iW => uA(WW, iW),
          PW = null === (mW = WW.kOW(iW)) || void 0 === mW ? void 0 : mW.name,
          LW = PW && "Reactor Frame" === dO(PW) ? WW.getTargetedBlock() : null,
          cW = LW ? [LW.Uj[0], LW.Uj[1], LW.Uj[2]] : null,
          wW = null !== cW && "Air" === NW(cW) && cW.every(((WW, iW) => Math.abs(WW + .5 - OW[iW]) <= 8)) ? YA(cW, OW, NW, (WW => this.inPlan(WW))) : null,
          tW = wW ? `${wW.box.ctrl.join()}|${wW.box.rot}|${wW.fits}` : "";
        tW !== this.shownKey && this.show(WW, tW, wW)
      }
      dispose(WW) {
        this.clear(WW), this.shownKey = ""
      }
      inPlan(WW) {
        return this.plans.all().some((iW => im(iW.box, WW) >= 0))
      }
      show(WW, iW, OW) {
        if (this.clear(WW), this.shownKey = iW, !OW) return;
        const {
          box: mW,
          fits: EW
        } = OW, NW = EW ? DA : VA, {
          lo: PW,
          hi: LW
        } = Jc(mW);
        this.meshes.push(lA(WW, hc(PW, LW, .05), {
          rgb: NW,
          alpha: 1
        }));
        const cW = [],
          wW = Wm(mW, 0)[1];
        for (let tW = 0; tW < mW.w * mW.d; tW++) {
          const [WW, , iW] = Wm(mW, tW);
          cW.push([
            [WW + .5, wW + .02 + .01, iW + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(lA(WW, cW, {
          rgb: NW,
          alpha: .25
        }))
      }
      clear(WW) {
        for (const iW of this.meshes) WW.disposeGameMesh(iW);
        this.meshes = []
      }
    }
    const fA = "buildAFactory2Game:";

    function CA(WW, iW, OW) {
      const mW = WW => {
          const [OW, mW, EW] = WW.box.ctrl;
          return OW === iW[0] && mW === iW[1] && EW === iW[2]
        },
        EW = WW.find((WW => mW(WW) || im(WW.box, iW) >= 0));
      if (!EW) return null;
      const NW = function(WW, iW, OW) {
        const {
          w: mW,
          h: EW,
          d: NW
        } = WW.box, PW = "reactor" === WW.kind ? `${fA}rxTitle` : `${fA}batTitle`;
        if (WW.formed) return {
          key: `${fA}lookPlanFormed`,
          kindKey: PW,
          w: mW,
          h: EW,
          d: NW,
          count: 0
        };
        let LW = 0,
          cW = 0;
        for (let tW = 0; tW < rO(WW.box); tW++) {
          const iW = OW(Wm(WW.box, tW)),
            mW = null === iW ? "ok" : Pm(WW.kind, Om(WW.box, tW), iW);
          LW += "missing" === mW ? 1 : 0, cW += "wrong" === mW || "blocked" === mW ? 1 : 0
        }
        const wW = function(WW, iW, OW) {
          if (iW < 0 || null === OW) return;
          const mW = Om(WW.box, iW),
            EW = Pm(WW.kind, mW, OW);
          return "blocked" === EW ? `${fA}lookWhy_blocked` : "wrong" === EW ? "ctrl" === mW ? `${fA}lookWhy_ctrl` : `${fA}lookWhy_reactor_${mW}` : void 0
        }(WW, im(WW.box, iW), OW([iW[0], iW[1], iW[2]]));
        if (LW > 0) return {
          key: `${fA}lookPlanToBuild`,
          kindKey: PW,
          w: mW,
          h: EW,
          d: NW,
          count: LW,
          why: wW
        };
        if (cW > 0) return {
          key: `${fA}lookPlanTakeOut`,
          kindKey: PW,
          w: mW,
          h: EW,
          d: NW,
          count: cW,
          why: wW
        };
        return {
          key: "reactor" === WW.kind ? `${fA}lookPlanNoRods` : `${fA}lookPlanDone`,
          kindKey: PW,
          w: mW,
          h: EW,
          d: NW,
          count: 0
        }
      }(EW, iW, OW);
      return "reactor" === EW.kind && mW(EW) ? {
        ...NW,
        ctrl: !0
      } : NW
    }

    function XA(WW, iW) {
      return WW === iW || null !== WW && null !== iW && WW.key === iW.key && WW.kindKey === iW.kindKey && WW.w === iW.w && WW.h === iW.h && WW.d === iW.d && WW.count === iW.count && WW.why === iW.why && WW.ctrl === iW.ctrl
    }

    function BA() {
      return performance.now()
    }
    class qA {
      constructor(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BA;
        this.ticket = WW, this.sent = iW, this.backstopMs = OW, this.now = mW, this.queuedAt = void 0, this.queuedAt = mW()
      }
      answered() {
        const WW = this.now(),
          iW = this.sent.leftAt(this.ticket);
        return null !== iW && WW - iW > 4e3 || WW - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class RA {
      constructor() {
        this.echoes = []
      }
      add(WW) {
        this.echoes = this.echoes.filter((WW => !WW.answered())), this.echoes.push(WW)
      }
      answered() {
        var WW, iW;
        return null === (WW = null === (iW = this.echoes.at(-1)) || void 0 === iW ? void 0 : iW.answered()) || void 0 === WW || WW
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((WW => WW.answered()))
      }
      age() {
        var WW, iW;
        return null !== (WW = null === (iW = this.echoes.at(-1)) || void 0 === iW ? void 0 : iW.age()) && void 0 !== WW ? WW : null
      }
      clear() {
        this.echoes = []
      }
    }
    class GA {
      constructor(WW) {
        this.send = WW, this.value = null, this.sent = null, this.echoes = new RA, this.down = !1, this.timer = null
      }
      shown(WW) {
        return null === this.value ? WW : this.down || this.value !== this.sent ? this.value : WW === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), WW) : this.value
      }
      pendingFor(WW) {
        return null !== this.value && this.value === this.sent && WW !== this.value ? this.echoes.age() : null
      }
      assume(WW, iW) {
        this.disarm(), this.down = !1, this.value = WW, this.sent = WW, this.echoes.clear(), this.echoes.add(iW)
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
    class IA {
      constructor() {
        this.pending = new Map
      }
      set(WW, iW, OW) {
        var mW;
        const EW = null !== (mW = this.pending.get(WW)) && void 0 !== mW ? mW : {
          on: iW,
          echoes: new RA
        };
        EW.on = iW, EW.echoes.add(OW), this.pending.set(WW, EW)
      }
      shown(WW) {
        let iW = WW;
        for (const [OW, {
            on: mW,
            echoes: EW
          }] of this.pending) 0 !== (WW & OW) === mW && EW.agreeCounts() || EW.answered() ? this.pending.delete(OW) : iW = mW ? iW | OW : iW & ~OW;
        return iW
      }
      pendingMask() {
        let WW = 0;
        for (const iW of this.pending.keys()) WW |= iW;
        return WW
      }
      pendingFor(WW) {
        let iW = null;
        for (const [mW, {
            on: EW,
            echoes: NW
          }] of this.pending) {
          if (void 0 !== WW && 0 !== (WW & mW) === EW) continue;
          const PW = NW.age();
          var OW;
          if (null !== PW) iW = Math.max(null !== (OW = iW) && void 0 !== OW ? OW : 0, PW)
        }
        return iW
      }
      clear() {
        this.pending.clear()
      }
    }
    class aA {
      constructor() {
        this.dims = null, this.echoes = new RA, this.unmet = null
      }
      shown(WW) {
        var iW;
        return this.dims && (rA(this.dims, WW) && this.echoes.agreeCounts() || this.echoes.answered()) && (rA(this.dims, WW) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (iW = this.dims) && void 0 !== iW ? iW : WW
      }
      takeUnmet() {
        const WW = this.unmet;
        return this.unmet = null, WW
      }
      set(WW, iW) {
        this.dims = WW, this.echoes.add(iW)
      }
      pendingFor(WW) {
        return null === this.dims || WW && rA(this.dims, WW) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function rA(WW, iW) {
      return WW[0] === iW[0] && WW[1] === iW[1] && WW[2] === iW[2]
    }
    class zA {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BA;
        this.now = WW, this.taps = new Map
      }
      tap(WW, iW, OW) {
        return !this.busy(WW) && (this.taps.set(WW, {
          at: this.now(),
          done: iW
        }), OW(), !0)
      }
      settle(WW) {
        for (const [iW, OW] of [...this.taps]) OW.done(WW) && this.taps.delete(iW)
      }
      busy(WW) {
        const iW = this.taps.get(WW);
        return !!iW && (!(this.now() - iW.at >= 3e3) || (this.taps.delete(WW), !1))
      }
      busyIds() {
        const WW = new Set;
        for (const iW of [...this.taps.keys()]) this.busy(iW) && WW.add(iW);
        return WW
      }
      clear() {
        this.taps.clear()
      }
    }

    function FA(WW) {
      return {
        send: iW => WW.track(iW),
        sendUrgent: (iW, OW) => WW.track(iW, {
          urgent: !0,
          supersedes: OW
        }),
        leftAt: iW => WW.leftAt(iW),
        holdReserve: () => WW.holdUrgentReserve(),
        answerMs: HP
      }
    }

    function QA() {
      return performance.now()
    }

    function Wb(WW) {
      const iW = WW.baf2RxNeed.map((WW => {
        let [iW, OW] = WW;
        return [iW, OW]
      }));
      return JSON.stringify([WW.baf2RxFormed, iW, WW.baf2RxBad, WW.baf2RxCells])
    }

    function ib(WW, iW) {
      const OW = 0 !== (iW & xi),
        mW = 0 !== (WW.baf2RxFlags & xi);
      return !OW || mW || "running" !== WW.baf2RxState && "idle" !== WW.baf2RxState ? !OW && mW && "scram" === WW.baf2RxState && WW.baf2RxFuel > 0 ? "idle" : WW.baf2RxState : "scram"
    }

    function Ob(WW) {
      return JSON.stringify([WW.baf2BatFormed, WW.baf2BatNeed, WW.baf2BatBad])
    }

    function mb(WW) {
      return WW.join(",")
    }
    class Eb {
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
    class Nb {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(WW, iW) {
        this.lastAt = WW, this.lastUntil = WW + iW
      }
      answered(WW) {
        return this.lastAt >= WW || WW < this.lastUntil
      }
    }
    class Pb {
      constructor(WW, iW) {
        this.link = WW, this.now = iW, this.hold = new aA, this.picked = null, this.notTaken = null
      }
      shown(WW) {
        const iW = this.hold.shown(WW);
        if (this.hold.takeUnmet() && this.picked) {
          var OW;
          const {
            plans: iW,
            ctrl: mW,
            at: EW
          } = this.picked;
          this.picked = null, iW.unpredict(mW), null === (OW = this.notTaken) || void 0 === OW || OW.call(this, WW, EW)
        }
        return iW
      }
      pendingFor(WW) {
        return this.hold.pendingFor(WW)
      }
      Kl(WW, iW, OW) {
        WW.predictSize(iW, OW), this.picked = {
          plans: WW,
          ctrl: iW,
          at: this.now()
        };
        const mW = this.link.send(Zi(iW, "plan", ...OW));
        this.hold.set(OW, new qA(mW, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class Lb {
      constructor(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : QA;
        this.plans = WW, this.readInterior = iW, this.link = OW, this.now = mW, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new IA, this.throttle = void 0, this.oneShots = void 0, this.listeners = new Eb, this.redraw = null, this.releaseReserve = null, this.size = new Pb(OW, mW), this.oneShots = new zA(mW), this.throttle = new GA((WW => this.echo(this.link.send(this.command("throttle", WW)))))
      }
      set(WW) {
        !WW.baf2RxOpen && this.raw && mb(this.raw.baf2RxAt) === mb(WW.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(WW), this.iZ(WW)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(WW) {
        this.size.notTaken = WW
      }
      resize(WW) {
        this.raw && (this.size.Kl(this.plans, this.raw.baf2RxAt, WW), this.iZ(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const WW = this.raw.baf2RxAt;
        this.plans.setStarter(WW, !this.plans.showsStarter(WW)), this.iZ(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.iZ(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.iZ(this.raw)
      }
      send(WW) {
        if (this.raw) {
          for (var iW = arguments.length, OW = new Array(iW > 1 ? iW - 1 : 0), mW = 1; mW < iW; mW++) OW[mW - 1] = arguments[mW];
          this.link.send(this.command(WW, ...OW))
        }
      }
      tap(WW, iW) {
        this.raw && this.oneShots.tap(WW, function(WW, iW) {
          if ("start" === WW) return WW => 0 === (WW.baf2RxFlags & xi);
          if ("odConfirm" === WW) return WW => 0 !== (WW.baf2RxFlags & li);
          const OW = Wb(iW);
          return WW => Wb(WW) !== OW
        }(WW, this.raw), iW) && ("start" === WW && (this.startedAt = this.now()), this.iZ(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(xi, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(WW, iW) {
        if (!this.raw) return;
        const OW = WW === xi ? this.command(iW ? "scram" : "start") : this.command("od", iW ? 1 : 0),
          mW = iW && WW === xi,
          EW = `${ti} ${this.raw.baf2RxAt.join(" ")} `,
          NW = this.echo(mW ? this.link.sendUrgent(OW, (WW => {
            const iW = WW.startsWith(EW) ? WW.slice(EW.length).split(" ")[0] : null;
            return "throttle" === iW || "start" === iW
          })) : this.link.send(OW));
        this.flags.set(WW, iW, NW), mW && this.throttle.assume(0, NW), this.iZ(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(WW) {
        this.throttle.drag(WW), this.raw && this.iZ(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.iZ(this.raw)
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
        for (var iW = arguments.length, OW = new Array(iW > 1 ? iW - 1 : 0), mW = 1; mW < iW; mW++) OW[mW - 1] = arguments[mW];
        return Zi(this.raw.baf2RxAt, WW, ...OW)
      }
      echo(WW) {
        return new qA(WW, this.link, this.link.answerMs, this.now)
      }
      iZ(WW) {
        var iW;
        this.raw = WW;
        const OW = this.flags.shown(WW.baf2RxFlags),
          mW = {
            ...WW,
            baf2RxFlags: OW,
            baf2RxTarget: this.throttle.shown(WW.baf2RxTarget),
            baf2RxState: ib(WW, OW)
          },
          EW = this.size.shown(mW.baf2RxDims),
          NW = this.throttle.pendingFor(),
          PW = [this.throttle.pendingFor(WW.baf2RxTarget), this.flags.pendingFor(WW.baf2RxFlags), this.size.pendingFor(WW.baf2RxDims)].filter((WW => null !== WW)),
          LW = PW.length > 0 ? Math.max(...PW) : null,
          cW = this.oneShots.busyIds(),
          wW = mW.baf2RxAt;
        let tW, ZW, xW = null,
          lW = [Math.max(0, EW[0] - 2), Math.max(0, EW[1] - 2), Math.max(0, EW[2] - 2)];
        if (mW.baf2RxFormed) {
          const [WW, iW, OW] = mW.baf2RxDims;
          lW = [Math.max(0, WW - 2), Math.max(0, iW - 2), Math.max(0, OW - 2)], tW = Array.from(mW.baf2RxCells, Number), ZW = `${lW.join(",")}:${mW.baf2RxCells}`
        } else {
          var AW;
          const WW = null === (AW = this.plans.planAt(wW)) || void 0 === AW ? void 0 : AW.box,
            iW = WW ? GO(WW, "reactor", ...EW) : qO(wW, 1, ...EW, RO("reactor", EW[0])),
            OW = this.readInterior(iW);
          xW = aL(lW, OW), tW = OW, ZW = `${lW.join(",")}:${OW.join("")}`
        }(null === (iW = this.looksOf) || void 0 === iW ? void 0 : iW.key) !== ZW && (this.looksOf = {
          key: ZW,
          looks: ic(lW, tW)
        }), this.view = {
          status: mW,
          dims: EW,
          plan: xW,
          inner: lW,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(wW),
          odConfirmed: this.odConfirmed || 0 !== (mW.baf2RxFlags & si),
          guide: this.plans.guideOn(),
          throttlePending: null !== NW,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== LW && LW >= 5e3,
          busy: cW,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== LW || cW.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.iZ(this.raw)
        }), 250))
      }
    }
    class cb {
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : QA;
        this.plans = WW, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new Eb, this.redraw = null, this.size = new Pb(iW, OW), this.oneShots = new zA(OW)
      }
      set(WW) {
        !WW.baf2BatOpen && this.view && mb(this.view.status.baf2BatAt) === mb(WW.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(WW), this.iZ(WW)
      }
      tap(WW, iW) {
        if (!this.view) return;
        const OW = Ob(this.view.status);
        this.oneShots.tap(WW, (WW => Ob(WW) !== OW), iW) && this.iZ(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(WW) {
        this.size.notTaken = WW
      }
      resize(WW) {
        this.view && (this.size.Kl(this.plans, this.view.status.baf2BatAt, WW), this.iZ(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.iZ(this.view.status)
      }
      subscribe(WW) {
        return this.listeners.subscribe(WW)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      iZ(WW) {
        const iW = this.size.shown(WW.baf2BatDims),
          OW = this.oneShots.busyIds();
        this.view = {
          status: WW,
          dims: iW,
          aZ: bc(iW, WW.baf2BatDims) ? WW.baf2BatCapacity : Ec(...iW),
          guide: this.plans.guideOn(),
          busy: OW
        }, this.listeners.notify(), OW.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.iZ(this.view.status)
        }), 250))
      }
    }
    const wb = "buildAFactory2Game:";

    function tb() {
      var WW;
      const iW = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!iW) return null;
      const OW = iW.querySelector(".ExitButton");
      return function(WW, iW) {
        const OW = iW ? iW.left - 8 : WW.right;
        return {
          left: WW.left,
          top: WW.top,
          width: Math.max(0, OW - WW.left),
          height: WW.height
        }
      }(iW.getBoundingClientRect(), null !== (WW = null === OW || void 0 === OW ? void 0 : OW.getBoundingClientRect()) && void 0 !== WW ? WW : null)
    }
    const Zb = (0, mW.memo)((function(WW) {
      let {
        store: iW
      } = WW;
      const {
        t: OW
      } = (0, hE.B)(), [EW, NW] = (0, mW.useState)((() => iW.get())), [PW, LW] = (0, mW.useState)((() => performance.now()));
      (0, mW.useEffect)((() => (NW(iW.get()), iW.subscribe((() => {
        NW(iW.get()), LW(performance.now())
      })))), [iW]);
      const {
        alarm: cW,
        boomAt: wW
      } = EW, tW = null !== cW && null !== cW.secs, [ZW, xW] = (0, mW.useState)(null);
      (0, mW.useEffect)((() => {
        if (!tW) return;
        xW(tb());
        const WW = setInterval((() => {
          LW(performance.now()), xW(tb())
        }), 250);
        return () => {
          clearInterval(WW)
        }
      }), [tW]);
      const [lW, AW] = (0, mW.useState)(!1);
      return (0, mW.useEffect)((() => {
        if (wW === -1 / 0) return;
        AW(!0);
        const WW = setTimeout((() => {
          AW(!1)
        }), 1300);
        return () => {
          clearTimeout(WW)
        }
      }), [wW]), (0, MN.jsxs)(MN.Fragment, {
        children: [null !== cW && (0, MN.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: OW(cW.hot ? `${wb}rxAlarmSiren` : `${wb}rxAlarmDamaged`, {
            amount: String(cW.damage)
          })
        }), null !== cW && null !== cW.secs && (0, MN.jsx)("div", {
          className: ZW ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== ZW && void 0 !== ZW ? ZW : void 0,
          "aria-live": "assertive",
          children: OW(`${wb}rxAlarmCountdown`, {
            amount: String((bW = cW.secs, jW = PW - cW.receivedAt, Math.max(1, Math.ceil(bW - jW / 1e3))))
          })
        }), lW && (0, MN.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var bW, jW
    }));
    class xb {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      zk(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const OW = WW.baf2RxAlarmAt.join(",");
        let mW = this.snapshot.boomAt;
        if (WW.baf2RxAlarmBoom) this.byReactor.delete(OW), mW = iW;
        else if (WW.baf2RxAlarmDamage <= 0) this.byReactor.delete(OW);
        else {
          var EW;
          this.byReactor.set(OW, {
            damage: WW.baf2RxAlarmDamage,
            secs: null !== (EW = WW.baf2RxAlarmSecs) && void 0 !== EW ? EW : null,
            hot: !0 === WW.baf2RxAlarmHot,
            receivedAt: iW
          })
        }
        this.iZ(mW)
      }
      retain(WW) {
        let iW = !1;
        for (const OW of [...this.byReactor.keys()]) WW.has(OW) || (this.byReactor.delete(OW), iW = !0);
        iW && this.iZ(this.snapshot.boomAt)
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
      iZ(WW) {
        let iW = null;
        for (const OW of this.byReactor.values())(!iW || OW.damage > iW.damage) && (iW = OW);
        this.snapshot = {
          alarm: iW,
          boomAt: WW
        };
        for (const OW of this.listeners) OW()
      }
    }
    const lb = {
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

    function Ab(WW) {
      return [WW[0], WW[1], WW[2]]
    }

    function bb(WW) {
      return `${WW[0]},${WW[1]},${WW[2]}`
    }
    class jb {
      constructor(WW) {
        if (this.plans = WW, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var WW;
            return {
              active: this.glows.flatMap((WW => {
                let {
                  record: iW
                } = WW;
                return iW ? [iW] : []
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
      check(WW, iW, OW) {
        const mW = new Set(iW.map((WW => bb(WW.box.ctrl))));
        for (const PW of function(WW, iW) {
            const OW = [],
              mW = new Map(WW);
            WW.clear();
            for (const EW of iW) {
              const iW = LA(EW.box.ctrl),
                NW = EW.formed ? EW.level : 0;
              WW.set(iW, NW), NW > 0 && 0 === mW.get(iW) && OW.push(EW)
            }
            return OW
          }(this.levels, this.plans.all())) mW.has(bb(PW.box.ctrl)) && this.show(WW, PW, "on", OW);
        const EW = this.plans.lastFormed();
        if (null === EW || EW.receivedAt <= this.flashedAt) return null;
        this.flashedAt = EW.receivedAt;
        const NW = function(WW, iW) {
          var OW;
          const mW = LA(WW);
          return null !== (OW = iW.find((WW => LA(WW.box.ctrl) === mW))) && void 0 !== OW ? OW : null
        }(EW.ctrl, iW);
        return NW && this.show(WW, NW, "formed", OW), NW
      }
      fade(WW, iW) {
        0 !== this.glows.length && (this.glows = this.glows.filter((OW => {
          let {
            mesh: mW,
            glow: EW,
            startMs: NW,
            record: PW
          } = OW;
          const LW = (iW - NW) / lb[EW].ms;
          return LW >= 1 ? (WW.disposeGameMesh(mW), PW && (PW.endMs = iW), !1) : (WW.setGameMesh(mW, {
            visibility: "formed" === EW ? 1 - LW : Math.sin(Math.PI * LW)
          }), !0)
        })))
      }
      dispose(WW) {
        for (const {
            mesh: OW
          }
          of this.glows) WW.disposeGameMesh(OW);
        this.glows = [], this.levels.clear();
        const iW = "undefined" !== typeof window ? window : null;
        (null === iW || void 0 === iW ? void 0 : iW.baf2Glows) === this.devAccessor && delete iW.baf2Glows
      }
      show(WW, iW, OW, mW) {
        const {
          lo: EW,
          hi: NW
        } = Jc(iW.box);
        let PW = null;
        this.devLog && (PW = {
          glow: OW,
          ctrl: Ab(iW.box.ctrl),
          lo: Ab(EW),
          hi: Ab(NW),
          startMs: mW,
          endMs: null
        }, this.devLog.push(PW), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(WW, OW, hc(EW, NW, lb[OW].thick)),
          glow: OW,
          startMs: mW,
          record: PW
        })
      }
      build(WW, iW, OW) {
        const mW = lA(WW, OW, {
          rgb: lb[iW].colour,
          alpha: 1
        });
        return WW.setGameMesh(mW, {
          visibility: 0
        }), mW
      }
    }
    const Ub = 1 / .6,
      kb = {
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
        blendMode: nL.d.Standard,
        soft: !0
      },
      sb = {
        ...kb,
        size: [.25, .4],
        count: 2
      };

    function Mb(WW) {
      return {
        colours: [WW, WW],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: nL.d.Add,
        soft: !1
      }
    }
    const Kb = Mb([150, 225, 255]),
      Sb = Mb([185, 145, 255]),
      Yb = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function yb(WW) {
      const iW = vi[WW];
      return null === iW.fuelSlot || PO(iW) ? Yb.includes(WW) ? Sb : Kb : kb
    }
    const Tb = {
        kind: "smokePuff"
      },
      Jb = [.2, .025, .2];

    function hb(WW, iW) {
      const [
        [OW, mW, EW],
        [NW, PW, LW]
      ] = WW.colours;
      return {
        texture: WW.soft ? Tb : "square_particle",
        aZ: iW,
        minLifeTime: WW.life[0] / Ub,
        maxLifeTime: WW.life[1] / Ub,
        minEmitPower: WW.power[0] * Ub,
        maxEmitPower: WW.power[1] * Ub,
        minSize: WW.size[0],
        maxSize: WW.size[1],
        emitRate: 0,
        gravity: [0, WW.lift * Ub * Ub, 0],
        dir1: [-WW.spread, 1, -WW.spread],
        dir2: [WW.spread, 1, WW.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [OW, mW, EW, WW.alpha],
          maxColor: [NW, PW, LW, WW.alpha]
        }, {
          timeFraction: 1,
          minColor: [OW, mW, EW, 0],
          maxColor: [NW, PW, LW, 0]
        }],
        blendMode: WW.blendMode
      }
    }
    class Hb {
      constructor(WW) {
        this.fixed = WW, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(WW, iW, OW) {
        var mW;
        if (OW === this.lastFrame) return !1;
        this.lastFrame = OW;
        const EW = this.at;
        EW[0] = iW[0] + .5, EW[1] = iW[1] + 1.025, EW[2] = iW[2] + .5;
        const NW = null !== (mW = this.fixed) && void 0 !== mW ? mW : LW() ? sb : kb;
        let PW = this.particles.get(NW);
        return PW || (PW = WW.createParticles(function(WW) {
          return hb(WW, Math.ceil(12 * WW.count * WW.life[1]) + WW.count)
        }(NW), {
          pos: EW,
          half: Jb
        }), this.particles.set(NW, PW)), PW.moveTo(EW), PW.emit(NW.count), !0
      }
      dispose() {
        for (const WW of this.particles.values()) WW.stop();
        this.particles.clear()
      }
    }
    class nb {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(WW) {
        this.indexed = !0;
        for (const iW of Hi) {
          const OW = yb(iW);
          for (let mW = 1; mW <= 4; mW++) {
            const EW = WW.blockNameToBlockId(`${iW}|meta|rot${mW}|Running`, !0);
            if (null === EW) continue;
            let NW = this.pufferIndexByStyle.get(OW);
            void 0 === NW && (NW = this.pufferList.push(new Hb(OW === kb ? null : OW)) - 1, this.pufferIndexByStyle.set(OW, NW)), this.pufferIndexById[EW] = NW + 1
          }
        }
      }
      onAfterRender(WW, iW) {
        this.indexed || this.index(WW);
        const OW = performance.now(),
          mW = 0 === this.lastMs ? 0 : Math.min(OW - this.lastMs, 250) / 1e3;
        this.lastMs = OW, this.frame++, WW.particlesEnabled() ? (this.scan(WW, iW), this.puff(WW, mW)) : this.sources = []
      }
      dispose() {
        for (const WW of this.pufferList) WW.dispose();
        this.sources = [], this.found = []
      }
      scan(WW, iW) {
        0 === this.scanRow && (this.origin = [Math.floor(iW[0]) - 12, Math.floor(iW[1]) - 6, Math.floor(iW[2]) - 12]);
        const OW = Math.min(this.scanRow + 16, 325),
          [mW, EW, NW] = this.origin,
          PW = this.hits;
        PW.length = 0;
        for (let LW = this.scanRow; LW < OW; LW++) {
          const iW = mW + LW % 25,
            OW = EW + Math.floor(LW / 25);
          WW.scanBlocks(iW, OW, NW, iW + 1, OW + 1, NW + 25, this.pufferIndexById, PW)
        }
        for (let LW = 0; LW < PW.length; LW += 4) {
          const WW = PW[LW + 3];
          this.found.push({
            pos: [PW[LW], PW[LW + 1], PW[LW + 2]],
            NL: WW,
            puffer: this.pufferList[this.pufferIndexById[WW] - 1]
          })
        }
        this.scanRow = OW, 325 === OW && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(WW, iW) {
        const OW = this.sources.length;
        if (0 !== OW) {
          this.budget = Math.min(this.budget + Math.min(OW / 1.2, 12) * iW, 2);
          for (let iW = 0; iW < OW && this.budget >= 1; iW++) {
            const iW = this.sources[this.cursor % OW];
            this.cursor = (this.cursor + 1) % OW, WW.getBlockId(iW.pos[0], iW.pos[1], iW.pos[2]) === iW.NL && (iW.puffer.puff(WW, iW.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const ub = {
        ...Mb([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      ob = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function db(WW) {
      return 0 === WW.spots.length ? 0 : Math.min(1 * WW.level, 4)
    }

    function eb(WW) {
      return 0 === WW.glass.length ? 0 : Math.min(.75 * WW.level, 3)
    }

    function vb(WW) {
      return `${WW.ctrl.join(",")}:${WW.rot}:${WW.cu},${WW.cv}:${WW.w},${WW.h},${WW.d}`
    }

    function gb(WW, iW) {
      const OW = iW.w - 2,
        mW = iW.h - 2,
        EW = iW.d - 2,
        NW = [];
      for (let PW = 0; PW < OW * mW * EW; PW++) {
        const LW = PW % OW,
          cW = Math.floor(PW / OW) % EW,
          wW = Math.floor(PW / (OW * EW));
        if (LW > 0 && LW < OW - 1 && cW > 0 && cW < EW - 1 && wW > 0 && wW < mW - 1) continue;
        const tW = Wm(iW, Em(iW, PW)),
          ZW = uA(WW, tW);
        if (null !== ZW && "Fuel Rod" === dO(ZW))
          for (const iW of ob) {
            const OW = [tW[0] + iW[0], tW[1] + iW[1], tW[2] + iW[2]];
            Vb(WW, OW) && NW.push(pb(OW, iW))
          }
      }
      return NW
    }

    function Db(WW, iW) {
      const {
        lo: OW,
        hi: mW
      } = Jc(iW), EW = [];
      for (let NW = OW[0]; NW < mW[0]; NW++)
        for (let iW = OW[1]; iW < mW[1]; iW++) {
          const PW = NW === OW[0] || NW === mW[0] - 1 || iW === OW[1] || iW === mW[1] - 1 ? 1 : Math.max(1, mW[2] - 1 - OW[2]);
          for (let LW = OW[2]; LW < mW[2]; LW += PW) {
            const PW = [NW, iW, LW];
            if (!Vb(WW, PW)) continue;
            const cW = NW === OW[0] ? ob[1] : NW === mW[0] - 1 ? ob[0] : LW === OW[2] ? ob[5] : LW === mW[2] - 1 ? ob[4] : iW === OW[1] ? ob[3] : ob[2];
            EW.push(pb(PW, cW))
          }
        }
      return EW
    }

    function Vb(WW, iW) {
      const OW = uA(WW, iW);
      return null !== OW && "Reactor Glass" === dO(OW)
    }

    function pb(WW, iW) {
      return [
        [WW[0] + .5 + .55 * iW[0], WW[1] + .5 + .55 * iW[1], WW[2] + .5 + .55 * iW[2]],
        [0 === iW[0] ? .4 : .02, 0 === iW[1] ? .4 : .02, 0 === iW[2] ? .4 : .02]
      ]
    }
    class fb {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(WW, iW, OW, mW) {
        const EW = [],
          NW = new Set;
        for (const wW of iW) {
          var PW, LW, cW;
          const {
            box: iW
          } = wW;
          if ("reactor" !== wW.kind || wW.level <= 0 || (iW.ctrl[0] - OW[0]) ** 2 + (iW.ctrl[1] - OW[1]) ** 2 + (iW.ctrl[2] - OW[2]) ** 2 > 576) continue;
          const tW = vb(iW);
          NW.add(tW);
          let ZW = this.spots.get(tW);
          if ((!ZW || mW - ZW.at > 3e3) && (ZW = {
              at: mW,
              spots: gb(WW, iW),
              glass: Db(WW, iW)
            }, this.spots.set(tW, ZW)), 0 === ZW.spots.length && 0 === ZW.glass.length) continue;
          const xW = this.sparking.find((WW => WW.key === tW));
          EW.push({
            key: tW,
            level: wW.level,
            spots: ZW.spots,
            glass: ZW.glass,
            budget: null !== (PW = null === xW || void 0 === xW ? void 0 : xW.budget) && void 0 !== PW ? PW : 0,
            cursor: null !== (LW = null === xW || void 0 === xW ? void 0 : xW.cursor) && void 0 !== LW ? LW : 0,
            glassBudget: null !== (cW = null === xW || void 0 === xW ? void 0 : xW.glassBudget) && void 0 !== cW ? cW : 0
          })
        }
        for (const wW of this.spots.keys()) NW.has(wW) || this.spots.delete(wW);
        this.sparking = EW
      }
      emit(WW, iW, OW) {
        var mW;
        if (0 === this.sparking.length || !WW.particlesEnabled() || OW === this.lastFrame) return;
        this.lastFrame = OW;
        let EW = 0,
          NW = 0;
        for (const AW of this.sparking) EW += db(AW), NW += eb(AW);
        const PW = EW > 8 ? 8 / EW : 1,
          LW = NW > 6 ? 6 / NW : 1;
        let cW, wW = null,
          tW = null;
        for (const AW of this.sparking) AW.budget = Math.min(AW.budget + db(AW) * PW * iW, 2), AW.budget >= 1 && (!wW || AW.budget > wW.budget) && (wW = AW), AW.glassBudget = Math.min(AW.glassBudget + eb(AW) * LW * iW, 2), AW.glassBudget >= 1 && (!tW || AW.glassBudget > tW.glassBudget) && (tW = AW);
        if (wW) wW.budget--, cW = wW.spots[wW.cursor++ % wW.spots.length];
        else {
          if (!tW) return;
          tW.glassBudget--, cW = tW.glass[Math.floor(Math.random() * tW.glass.length)]
        }
        const [ZW, xW] = cW, lW = null !== (mW = this.emitter) && void 0 !== mW ? mW : this.create(WW, ZW, xW);
        lW.moveTo(ZW, xW), lW.emit(ub.count)
      }
      dispose() {
        var WW;
        null === (WW = this.emitter) || void 0 === WW || WW.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(WW, iW, OW) {
        const mW = Math.ceil(14 * ub.count * ub.life[1]) + ub.count;
        return this.emitter = WW.createParticles(hb(ub, mW), {
          pos: iW,
          half: OW
        }), this.emitter
      }
    }
    const Cb = [2, 3.2],
      Xb = 1 / 3,
      Bb = 1 / .6,
      qb = {
        texture: Tb,
        aZ: Math.ceil(18 * Cb[1]) + 4,
        minLifeTime: Cb[0] / Bb,
        maxLifeTime: Cb[1] / Bb,
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
        blendMode: nL.d.Standard
      };
    class Rb {
      constructor(WW) {
        this.plans = WW, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new fb, this.frame = 0, this.outline = new jb(WW)
      }
      onAfterRender(WW, iW, OW) {
        const mW = performance.now(),
          EW = 0 === this.lastMs ? 0 : Math.min(mW - this.lastMs, 250) / 1e3;
        if (this.lastMs = mW, this.outline.fade(WW, mW), this.puff(WW, EW, OW), this.sparks.emit(WW, EW, this.frame++), mW - this.lastCheckMs < 150) return;
        this.lastCheckMs = mW;
        const NW = this.plans.all().filter((WW => WW.formed && Gb(WW.box.ctrl, OW) <= 4096));
        this.plumes = NW.filter((WW => "reactor" === WW.kind && WW.level > 0)).map((WW => ({
          box: WW.box,
          level: WW.level
        }))), this.updateHums(WW, iW, NW, OW), this.sparks.update(WW, NW, OW, mW), this.chimeFormed(WW, iW, NW, mW)
      }
      dispose(WW) {
        var iW;
        this.outline.dispose(WW), null === (iW = this.steam) || void 0 === iW || iW.dispose(), this.steam = null, this.sparks.dispose();
        for (const OW of this.hums.values()) OW.stop();
        this.hums.clear()
      }
      chimeFormed(WW, iW, OW, mW) {
        const EW = this.outline.check(WW, OW, mW);
        EW && WW.playSound(iW, "exp_levelup", .6, 1, {
          FO: [EW.box.ctrl[0] + .5, EW.box.ctrl[1], EW.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(WW, iW, OW) {
        const mW = this.plumes;
        if (0 === mW.length || !WW.particlesEnabled()) return void(this.plumeBudget = 0);
        const EW = mW.reduce(((WW, iW) => WW + 3 * iW.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + EW * iW, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let NW = this.plumeCursor % (EW / 3);
        this.plumeCursor++;
        let PW = mW[0];
        for (const ZW of mW) {
          if (NW < ZW.level) {
            PW = ZW;
            break
          }
          NW -= ZW.level
        }
        const {
          lo: LW,
          hi: cW
        } = Jc(PW.box);
        if (function(WW, iW, OW) {
            const mW = Math.max(WW[0] - OW[0], 0, OW[0] - iW[0]),
              EW = Math.max(WW[2] - OW[2], 0, OW[2] - iW[2]);
            return Math.hypot(mW, OW[1] - iW[1], EW)
          }(LW, cW, OW) < 6 && Math.random() > Xb) return;
        const wW = [(LW[0] + cW[0]) / 2, cW[1] + .05, (LW[2] + cW[2]) / 2],
          tW = [(cW[0] - LW[0]) / 2 - .5, .05, (cW[2] - LW[2]) / 2 - .5];
        this.steam ??= WW.createParticles(qb, {
          pos: wW,
          half: tW
        }), this.steam.moveTo(wW, tW), this.steam.emit(1)
      }
      updateHums(WW, iW, OW, mW) {
        const EW = new Map;
        for (const PW of OW) "reactor" === PW.kind && PW.level > 0 && Gb(PW.box.ctrl, mW) <= 576 && EW.set(`${NW=PW.box.ctrl,`${NW[0]},${NW[1]},${NW[2]}`}:${PW.level}`, PW);
        var NW;
        for (const [PW, LW] of this.hums) EW.has(PW) || (LW.stop(), this.hums.delete(PW));
        for (const [PW, LW] of EW) {
          if (this.hums.has(PW)) continue;
          const {
            lo: OW,
            hi: mW
          } = Jc(LW.box), EW = [(OW[0] + mW[0]) / 2, OW[1], (OW[2] + mW[2]) / 2], NW = WW.playSound(iW, "rocketEngineLoop", .08 + .06 * LW.level, .55, {
            FO: EW,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          NW && this.hums.set(PW, NW)
        }
      }
    }

    function Gb(WW, iW) {
      return (WW[0] - iW[0]) ** 2 + (WW[1] - iW[1]) ** 2 + (WW[2] - iW[2]) ** 2
    }
    class Ib {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      zk(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const mW = [WW.baf2BombAt[0], WW.baf2BombAt[1], WW.baf2BombAt[2]],
          EW = WW.baf2BombR;
        if (WW.baf2BombBoom) {
          const WW = Math.hypot(iW[0] - mW[0], iW[1] - mW[1], iW[2] - mW[2]);
          this.iZ({
            fuse: null,
            blast: {
              at: mW,
              r: EW,
              receivedAt: OW,
              distance: WW,
              flash: WW <= 3 * EW
            }
          })
        } else this.iZ({
          ...this.snapshot,
          fuse: WW.baf2BombMs > 0 ? {
            at: mW,
            r: EW,
            endsAt: OW + WW.baf2BombMs
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
      iZ(WW) {
        this.snapshot = WW;
        for (const iW of this.listeners) iW()
      }
    }
    const ab = (0, mW.memo)((function(WW) {
      var iW;
      let {
        store: OW
      } = WW;
      const {
        t: EW
      } = (0, hE.B)(), [NW, PW] = (0, mW.useState)((() => OW.get())), [LW, cW] = (0, mW.useState)((() => performance.now()));
      (0, mW.useEffect)((() => (PW(OW.get()), OW.subscribe((() => {
        PW(OW.get()), cW(performance.now())
      })))), [OW]);
      const {
        fuse: wW,
        blast: tW
      } = NW;
      (0, mW.useEffect)((() => {
        if (!wW) return;
        const WW = setInterval((() => {
          cW(performance.now())
        }), 250);
        return () => {
          clearInterval(WW)
        }
      }), [wW]);
      const [ZW, xW] = (0, mW.useState)(!1);
      (0, mW.useEffect)((() => {
        if (null === tW || void 0 === tW || !tW.flash) return;
        xW(!0);
        const WW = setTimeout((() => {
          xW(!1)
        }), 2500);
        return () => {
          clearTimeout(WW)
        }
      }), [tW]);
      const lW = wW ? function(WW, iW) {
        return WW.endsAt <= iW ? 0 : Math.ceil((WW.endsAt - iW) / 1e3)
      }(wW, LW) : 0;
      return (0, MN.jsxs)(MN.Fragment, {
        children: [lW > 0 && (0, MN.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: EW("buildAFactory2Game:bombCountdown", {
            amount: String(lW),
            radius: String(null !== (iW = null === wW || void 0 === wW ? void 0 : wW.r) && void 0 !== iW ? iW : 0)
          })
        }), ZW && (0, MN.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function rb(WW) {
      const iW = Math.min(4, Math.max(1, WW / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * WW / 4)),
        capSpread: Math.min(5 * WW / 8, 24 * iW),
        capThick: 6 * iW,
        stemHalfWidth: 3 * iW,
        puffScale: iW
      }
    }
    class zb {
      constructor() {
        this.BL = !1
      }
      hold(WW) {
        WW.getCameraFar() < 1e3 && (WW.setCameraFar(1e3), this.BL = !0)
      }
      release(WW) {
        this.BL && (this.BL = !1, WW.setCameraFar(null))
      }
    }
    const Fb = 1 / .6,
      Qb = [.2, .1, .2],
      Wj = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      ij = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: nL.d.Standard,
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
      Oj = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: nL.d.Standard,
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
      mj = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: nL.d.Standard,
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
      Ej = {
        texture: Tb,
        aZ: Math.ceil(120) + 4,
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
        blendMode: nL.d.Add
      };
    class Nj {
      constructor(WW) {
        this.store = WW, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new zb, this.timers = []
      }
      onAfterRender(WW, iW) {
        const OW = performance.now(),
          mW = 0 === this.lastMs ? 0 : Math.min(OW - this.lastMs, 250) / 1e3;
        this.lastMs = OW;
        const {
          fuse: EW,
          blast: NW
        } = this.store.get();
        null !== NW && NW !== this.shownBlast && (this.shownBlast = NW, this.startBlast(WW, iW, NW, OW));
        const PW = WW.particlesEnabled();
        null !== EW && EW.endsAt > OW && PW ? this.emitBeacon(WW, EW, mW, OW) : this.beaconBudget = 0, null !== this.cloud && (OW - this.cloud.startMs > 33e3 ? this.disposeCloud(WW) : (this.far.hold(WW), PW && this.emitCloud(WW, mW, OW)))
      }
      dispose(WW) {
        var iW;
        null === (iW = this.beacon) || void 0 === iW || iW.dispose(), this.beacon = null, this.disposeCloud(WW);
        for (const OW of this.timers) clearTimeout(OW);
        this.timers.length = 0
      }
      emitBeacon(WW, iW, OW, mW) {
        const EW = iW.endsAt - mW < 5e3 ? 350 : 1e3,
          NW = .5 + .5 * Math.sin(2 * Math.PI * mW / EW);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * NW * OW, 4), this.beaconBudget < 1) return;
        const PW = Math.floor(this.beaconBudget);
        this.beaconBudget -= PW;
        const [LW, cW, wW] = iW.at, tW = [LW + .5, cW + 1.1, wW + .5];
        this.beacon ??= WW.createParticles(Ej, {
          pos: tW,
          half: Qb
        }), this.beacon.moveTo(tW), this.beacon.emit(PW)
      }
      startBlast(WW, iW, OW, mW) {
        var EW;
        null === (EW = this.beacon) || void 0 === EW || EW.dispose(), this.beacon = null, this.disposeCloud(WW);
        const NW = (0, hL.isMobile)() ? .5 : 1;
        this.streams = [ij, Oj, mj].map((WW => {
          const iW = Math.round(WW.count * NW);
          return {
            spec: WW,
            particles: null,
            rate: iW / ((WW.toMs - WW.fromMs) / 1e3),
            budget: 0,
            left: iW
          }
        })), this.cloud = {
          blast: OW,
          startMs: mW
        };
        const PW = Math.max(.25, 1 - OW.distance / (6 * OW.r)),
          LW = OW.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [OW, mW, EW] of Wj) Lj(WW, iW, OW, PW * mW, EW)
        }), LW))
      }
      emitCloud(WW, iW, OW) {
        const {
          blast: mW,
          startMs: EW
        } = this.cloud, NW = OW - EW, [PW, LW, cW] = mW.at, wW = rb(mW.r);
        for (const tW of this.streams) {
          const {
            spec: OW
          } = tW;
          if (tW.left <= 0 || NW < OW.fromMs) continue;
          tW.budget += tW.rate * iW;
          const EW = Math.min(Math.floor(tW.budget), tW.left);
          if (EW < 1) continue;
          tW.budget -= EW, tW.left -= EW;
          const ZW = tW.particles ??= this.createStream(WW, OW, mW);
          if (OW === ij) {
            const WW = wW.stemHalfWidth;
            ZW.moveTo([PW, LW + 1, cW], [WW, 1, WW])
          } else if (OW === Oj) {
            const WW = wW.capSpread * Math.min(1, (NW - OW.fromMs) / 3e3),
              iW = Math.sqrt(Math.random()),
              mW = 2 * Math.random() * Math.PI,
              EW = Math.cos(mW) * iW,
              tW = Math.sin(mW) * iW,
              xW = PW + EW * WW,
              lW = cW + tW * WW,
              AW = wW.capThick,
              bW = LW + wW.capHeight + AW * (1 - iW * iW) * 2;
            ZW.setDirections([.7 * EW, .05, .7 * tW], [EW, .2, tW]), ZW.moveTo([xW, bW, lW], [AW, AW, AW])
          } else {
            this.ringAngle += 2.39996;
            const WW = Math.cos(this.ringAngle),
              iW = Math.sin(this.ringAngle);
            ZW.setDirections([WW, .05, iW], [WW, .1, iW]), ZW.moveTo([PW + 2 * WW, LW + .5, cW + 2 * iW], [0, .5, 0])
          }
          ZW.emit(EW)
        }
      }
      createStream(WW, iW, OW) {
        const {
          r: mW
        } = OW, EW = Math.max(iW.life[0], mW / 25), NW = iW === mj ? [.9 * EW, EW] : iW.life, PW = rb(mW), LW = iW === mj ? 1 : PW.puffScale, cW = {
          texture: Tb,
          aZ: iW.count + 4,
          minLifeTime: NW[0] / Fb,
          maxLifeTime: NW[1] / Fb,
          minSize: iW.size[0] * LW,
          maxSize: iW.size[1] * LW,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, iW.gravity * Fb * Fb, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: iW.from[0],
            maxColor: iW.from[1]
          }, {
            timeFraction: .6,
            minColor: Pj(iW.from[0], iW.to[0]),
            maxColor: Pj(iW.from[1], iW.to[1])
          }, {
            timeFraction: 1,
            minColor: iW.to[0],
            maxColor: iW.to[1]
          }],
          blendMode: iW.blend
        };
        if (iW === ij) {
          const WW = PW.capHeight / ((NW[0] + NW[1]) / 2);
          cW.minEmitPower = .9 * WW * Fb, cW.maxEmitPower = 1.05 * WW * Fb, cW.dir1 = [-.1, 1, -.1], cW.dir2 = [.1, 1, .1]
        } else iW === Oj ? (cW.minEmitPower = 1.2, cW.maxEmitPower = 2, cW.dir1 = [-1, .05, -1], cW.dir2 = [1, .2, 1]) : (cW.minEmitPower = 39.583333333333336, cW.maxEmitPower = 41.66666666666667, cW.dir1 = [1, 0, 0], cW.dir2 = [1, 0, 0]);
        return WW.createParticles(cW, {
          pos: OW.at
        })
      }
      disposeCloud(WW) {
        for (const OW of this.streams) {
          var iW;
          null === (iW = OW.particles) || void 0 === iW || iW.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(WW)
      }
    }

    function Pj(WW, iW) {
      return [(WW[0] + iW[0]) / 2, (WW[1] + iW[1]) / 2, (WW[2] + iW[2]) / 2, .75 * WW[3]]
    }

    function Lj(WW, iW, OW, mW, EW) {
      try {
        WW.playSound(iW, OW, mW, EW)
      } catch (NW) {
        console.error(NW)
      }
    }
    const cj = {
        aZ: 720,
        perS: 100
      },
      wj = {
        aZ: 320,
        perS: 44
      };
    class tj {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(WW, iW) {
        this.zone = {
          centre: [...WW.centre],
          r: WW.r,
          band: WW.band ? [WW.band[0], WW.band[1]] : void 0
        }, this.endsAt = iW
      }
      stop() {
        this.zone = null
      }
      zk(WW, iW) {
        const {
          baf2FalloutMs: OW,
          baf2FalloutAt: mW,
          baf2FalloutR: EW,
          baf2FalloutY: NW
        } = WW;
        OW > 0 && mW && void 0 !== EW ? this.start({
          centre: mW,
          r: EW,
          band: NW
        }, iW + OW) : this.stop()
      }
      perS(WW, iW, OW) {
        const mW = this.zone;
        if (!mW) return 0;
        const EW = this.endsAt - WW;
        return EW <= 0 ? (this.zone = null, 0) : mW.band && (iW[1] < mW.band[0] || iW[1] > mW.band[1]) || Math.hypot(iW[0] - mW.centre[0], iW[2] - mW.centre[2]) > mW.r ? 0 : OW.perS * Math.min(1, EW / 5e3)
      }
    }
    const Zj = [5, 7],
      xj = [24, 8, 24],
      lj = .5,
      Aj = 1 / .6,
      bj = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class jj {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, hL.isMobile)();
        this.state = new tj, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(WW) {
          return WW ? wj : cj
        }(WW)
      }
      startFallout(WW, iW) {
        this.state.start(WW, iW)
      }
      stopFallout() {
        this.state.stop()
      }
      zk(WW) {
        this.state.zk(WW, performance.now())
      }
      onAfterRender(WW, iW) {
        var OW;
        const mW = performance.now(),
          EW = 0 === this.lastMs ? 0 : Math.min(mW - this.lastMs, 250) / 1e3;
        this.lastMs = mW;
        const NW = this.state.perS(mW, iW, this.tier);
        if (NW <= 0 || !WW.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + NW * EW, NW / 4);
        const PW = Math.floor(this.budget);
        if (PW < 1) return;
        this.budget -= PW;
        const LW = this.at;
        LW[0] = iW[0], LW[1] = iW[1] + 12, LW[2] = iW[2];
        const cW = null !== (OW = this.systems) && void 0 !== OW ? OW : this.create(WW, LW),
          wW = this.amounts;
        wW[0] = 0, wW[1] = 0;
        for (let tW = 0; tW < PW; tW++) wW[Math.random() < .3 ? 1 : 0]++;
        for (let tW = 0; tW < cW.length; tW++) wW[tW] > 0 && (cW[tW].moveTo(LW, xj), cW[tW].emit(wW[tW]))
      }
      dispose() {
        for (const iW of null !== (WW = this.systems) && void 0 !== WW ? WW : []) {
          var WW;
          iW.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(WW, iW) {
        return this.systems = bj.map((OW => {
          let {
            rgba: [mW, EW, NW, PW],
            share: LW
          } = OW;
          const cW = {
            texture: "square_particle",
            aZ: Math.ceil(this.tier.aZ * LW),
            minLifeTime: Zj[0] / Aj,
            maxLifeTime: Zj[1] / Aj,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [lj, -1, lj],
            colorGradients: [{
              timeFraction: 0,
              minColor: [mW, EW, NW, 0]
            }, {
              timeFraction: .15,
              minColor: [mW, EW, NW, PW]
            }, {
              timeFraction: .8,
              minColor: [mW, EW, NW, PW]
            }, {
              timeFraction: 1,
              minColor: [mW, EW, NW, 0]
            }],
            blendMode: nL.d.Standard
          };
          return WW.createParticles(cW, {
            pos: iW,
            half: xj
          })
        })), this.systems
      }
    }
    const Uj = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function kj(WW) {
      const iW = /\|rot(\d)/.exec(WW);
      return Uj[iW ? Number(iW[1]) : 1]
    }
    var sj = OW(639),
      Mj = OW(39661);
    const Kj = new Set(sj.k);

    function Sj(WW) {
      if (-2 !== WW.count) return null;
      const iW = BW(WW.item);
      return null !== iW && Kj.has(iW) ? iW : null
    }

    function Yj(WW) {
      const {
        width: iW,
        height: OW
      } = (0, Mj.c)(WW).hitBoxDimensions;
      return .55 / Math.max(iW, OW)
    }

    function yj(WW, iW, OW) {
      if (!OW) return !1;
      const mW = WW[0] + .5 - iW[0],
        EW = WW[1] + .5 - iW[1],
        NW = WW[2] + .5 - iW[2];
      return mW * mW + EW * EW + NW * NW <= 576
    }

    function Tj(WW, iW) {
      return Math.atan2(WW[0], WW[2]) + Math.PI + iW
    }

    function Jj(WW, iW) {
      const OW = 2 * Math.PI;
      return (WW + OW * iW / 1e4) % OW
    }
    class hj {
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = WW, this.now = iW, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = WW.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(WW, iW) {
        if (0 === this.farms.size) return;
        const OW = this.now(),
          mW = Number.isNaN(this.frameMs) ? 0 : Math.min(OW - this.frameMs, 100);
        this.frameMs = OW, OW - this.checkedMs >= 1e3 && (this.checkedMs = OW, this.check(WW, iW));
        for (const EW of this.farms.values()) EW.shown && EW.running && null !== EW.model && mW > 0 && (EW.spin = Jj(EW.spin, mW), EW.model.setPose(EW.feet, Tj(EW.front, EW.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const WW of this.farms.values()) this.drop(WW);
        this.farms.clear()
      }
      sync() {
        const WW = new Set;
        for (const iW of this.labels.list()) {
          const OW = Sj(iW);
          if (null === OW) continue;
          WW.add(iW.key);
          const mW = this.farms.get(iW.key);
          if ((null === mW || void 0 === mW ? void 0 : mW.mob) === OW) continue;
          mW && this.drop(mW);
          const [EW, NW, PW] = iW.pos;
          this.farms.set(iW.key, {
            pos: iW.pos,
            feet: [EW + .5, NW + 1, PW + .5],
            mob: OW,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [iW, OW] of this.farms) WW.has(iW) || (this.drop(OW), this.farms.delete(iW));
        this.checkedMs = -1 / 0
      }
      check(WW, iW) {
        for (const OW of this.farms.values()) {
          const [mW, EW, NW] = OW.pos, PW = uA(WW, OW.pos);
          null !== PW && dO(PW) === vW && yj(OW.pos, iW, "Air" === uA(WW, [mW, EW + 1, NW])) ? (OW.running = PW.endsWith("|Running"), OW.front = kj(PW), null === OW.model && (OW.model = WW.createMobModel(OW.mob, Yj(OW.mob)), null === OW.model) || (OW.model.setPose(OW.feet, Tj(OW.front, OW.spin)), OW.shown || (OW.model.setVisible(!0), OW.shown = !0))) : (OW.shown && null !== OW.model && OW.model.setVisible(!1), OW.shown = !1)
        }
      }
      drop(WW) {
        var iW;
        null === (iW = WW.model) || void 0 === iW || iW.dispose(), WW.model = null, WW.shown = !1
      }
    }
    class Hj {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(WW) {
        var iW;
        this.island = WW.baf2ColIsland, this.islandSite = (iW = WW.baf2ColSite) && 8 === iW.length ? {
          spawnXZ: [iW[0], iW[1]],
          coreXZ: [iW[2], iW[3]],
          minXZ: [iW[4], iW[5]],
          maxXZ: [iW[6], iW[7]]
        } : null, this.views = WW.baf2ColList.map((WW => ({
          entry: LE(WW)
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
        var iW;
        return null === (iW = this.views.find((iW => {
          let {
            entry: OW
          } = iW;
          return OW.focus[0] === WW[0] && OW.focus[1] === WW[1] + 1 && OW.focus[2] === WW[2]
        }))) || void 0 === iW ? void 0 : iW.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(WW, iW) {
        return ec(this.entries(), WW, iW)
      }
      lookSource() {
        return {
          handles: WW => Am(WW) >= 0 || bm(WW),
          line: (WW, iW) => this.lookLine(WW, iW),
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
    const nj = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((WW => WW / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((WW => [WW, WW + 1, WW + 2, WW, WW + 2, WW + 3]))
    };

    function uj(WW, iW, OW, mW, EW, NW, PW) {
      let LW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const cW = Math.cos(LW),
        wW = Math.sin(LW),
        tW = WW.positions.length / 3,
        {
          positions: ZW,
          indices: xW
        } = nj;
      for (let lW = 0; lW < ZW.length; lW += 3) {
        const LW = ZW[lW] * EW,
          tW = ZW[lW + 2] * PW;
        WW.positions.push(iW + LW * cW + tW * wW, OW + ZW[lW + 1] * NW, mW - LW * wW + tW * cW)
      }
      for (const lW of xW) WW.indices.push(tW + lW)
    }

    function oj(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return iW < 1 ? {
        rgb: WW,
        alpha: iW
      } : {
        rgb: WW,
        alpha: 1,
        opaque: !0
      }
    }
    class dj {
      constructor(WW, iW) {
        this.style = WW, this.perSource = iW, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(WW) {
        this.sources = WW, 0 === WW.length && (this.budget = 0)
      }
      hZ(WW, iW, OW) {
        const mW = this.sources.length;
        if (0 !== mW) {
          var EW, NW;
          this.budget = Math.min(this.budget + (EW = mW, NW = this.perSource, Math.min(EW * NW, ac) * iW), 2);
          for (let iW = 0; iW < mW && this.budget >= 1; iW++) {
            const iW = this.sources[this.cursor % mW];
            this.cursor = (this.cursor + 1) % mW;
            if (!(Math.max(Math.abs(iW.x - OW[0]), Math.abs(iW.y - OW[1]), Math.abs(iW.z - OW[2])) > 32)) return this.puff(WW, iW), void this.budget--
          }
        }
      }
      dispose() {
        var WW;
        null === (WW = this.particles) || void 0 === WW || WW.dispose(), this.particles = null, this.sources = []
      }
      puff(WW, iW) {
        let {
          x: OW,
          y: mW,
          z: EW,
          h: NW,
          faces: PW
        } = iW;
        const LW = function(WW, iW, OW, mW, EW) {
            const [NW, PW, LW] = EW[Math.floor(Math.random() * EW.length)], cW = .04, wW = (WW, iW, OW) => WW > 0 ? iW + OW + cW : WW < 0 ? iW - cW : iW + .1, tW = (WW, iW, OW) => WW > 0 ? iW + OW + cW : WW < 0 ? iW - cW : iW + OW - .1, ZW = [wW(NW, WW, 1), wW(PW, iW, mW), wW(LW, OW, 1)], xW = [tW(NW, WW, 1), tW(PW, iW, mW), tW(LW, OW, 1)];
            return {
              pos: [(ZW[0] + xW[0]) / 2, (ZW[1] + xW[1]) / 2, (ZW[2] + xW[2]) / 2],
              half: [(xW[0] - ZW[0]) / 2, (xW[1] - ZW[1]) / 2, (xW[2] - ZW[2]) / 2],
              out: [NW, PW, LW]
            }
          }(OW, mW, EW, NW, PW),
          {
            style: cW
          } = this,
          wW = this.particles ??= WW.createParticles(hb(cW, Math.ceil(cW.count * ac * cW.life[1]) + 4), LW);
        wW.moveTo(LW.pos, LW.half);
        const [tW, ZW, xW] = LW.out, lW = cW.spread;
        wW.setDirections([tW - lW, .6 + ZW, xW - lW], [tW + lW, 1 + ZW, xW + lW]), wW.emit(cW.count)
      }
    }
    const ej = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class vj {
      constructor() {
        this.green = new dj(zc.green, Gc), this.pink = new dj(zc.pink, Ic), this.colliders = [], this.lastMs = 0
      }
      setSources(WW) {
        this.colliders = WW;
        const iW = [],
          OW = [];
        for (const mW of WW) {
          const [WW, EW, NW] = mW.focus;
          iW.push({
            x: WW,
            y: EW - 1,
            z: NW,
            h: 2,
            faces: ej
          });
          for (let iW = 0; iW < 4; iW++) {
            if (!mW.live[iW]) continue;
            const [WW, EW, NW] = km(mW.focus, iW, cm.LASER_D), [PW, , LW] = Um[iW], cW = ej.filter((WW => WW[0] !== PW || WW[2] !== LW || 0 !== WW[1]));
            OW.push({
              x: WW,
              y: EW,
              z: NW,
              h: 1,
              faces: cW
            })
          }
        }
        this.green.setSources(iW), this.pink.setSources(OW)
      }
      onAfterRender(WW) {
        const iW = performance.now(),
          OW = 0 === this.lastMs ? 0 : Math.min(iW - this.lastMs, 250) / 1e3;
        if (this.lastMs = iW, 0 === this.colliders.length || !WW.particlesEnabled()) return;
        const mW = WW.getCameraPosition();
        this.green.hZ(WW, OW, mW), this.pink.hZ(WW, OW, mW)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const gj = 1.04,
      Dj = oj([1, 120 / 255, 220 / 255]),
      Vj = oj([1, .25, .25], .35);
    class pj {
      constructor(WW) {
        this.store = WW, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new vj
      }
      onAfterRender(WW) {
        this.store.version() !== this.builtVersion && this.rebuild(WW);
        const iW = performance.now();
        for (const OW of this.beams) {
          const mW = 1 + .35 * Math.sin(iW / 700 * Math.PI * 2 + OW.phase);
          WW.setGameMesh(OW.mesh, {
            scale: [OW.alongX ? 1 : mW, mW, OW.alongX ? mW : 1]
          })
        }
        this.glow.onAfterRender(WW)
      }
      dispose(WW) {
        this.clear(WW), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(WW) {
        this.clear(WW), this.builtVersion = this.store.version();
        const iW = [];
        for (const {
            entry: OW
          }
          of this.store.colliders()) OW.on && OW.live.some(Boolean) && (this.addBeams(WW, OW), iW.push(OW)), OW.blockers.length > 0 && this.addMarkers(WW, OW);
        this.glow.setSources(iW)
      }
      addBeams(WW, iW) {
        const [OW, mW, EW] = iW.focus, NW = Rc - .25, PW = (.25 + Rc) / 2;
        for (let LW = 0; LW < 4; LW++) {
          if (!iW.live[LW]) continue;
          const [cW, , wW] = Um[LW], tW = 0 !== cW, ZW = {
            positions: [],
            indices: []
          };
          uj(ZW, 0, 0, 0, tW ? NW : .2, .2, tW ? .2 : NW);
          const xW = [OW + .5 + cW * PW, mW + .5, EW + .5 + wW * PW],
            lW = WW.createGameMesh(ZW, Dj, xW);
          this.meshes.push(lW), this.beams.push({
            mesh: lW,
            alongX: tW,
            phase: LW * Math.PI / 2
          })
        }
      }
      addMarkers(WW, iW) {
        const OW = iW.blockers[0],
          mW = {
            positions: [],
            indices: []
          };
        for (const [EW, NW, PW] of iW.blockers) uj(mW, EW - OW[0] + .5, NW - OW[1] + .5, PW - OW[2] + .5, gj, gj, gj);
        this.meshes.push(WW.createGameMesh(mW, Vj, OW))
      }
      clear(WW) {
        for (const iW of this.meshes) WW.disposeGameMesh(iW);
        this.meshes = [], this.beams = []
      }
    }
    const fj = [.56, .83, 1],
      Cj = [1, .73, .08],
      Xj = [1, .25, .25],
      Bj = [.85, .85, .85],
      qj = [.3, .45, .6];

    function Rj(WW, iW, OW, mW) {
      let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const PW = EW / 2,
        LW = EW + NW;
      for (const cW of [-PW, PW])
        for (const EW of [-PW, PW]) uj(WW, iW, OW + cW, mW + EW, LW, NW, NW), uj(WW, iW + cW, OW, mW + EW, NW, LW, NW), uj(WW, iW + cW, OW + EW, mW, NW, NW, LW)
    }

    function Gj(WW) {
      return iW => WW.isBlockInLoadedChunk(iW[0], iW[1], iW[2]) && 0 === WW.getBlockId(iW[0], iW[1], iW[2])
    }

    function Ij(WW) {
      return WW.map((WW => {
        let {
          free: iW,
          blocked: OW,
          gaps: mW,
          supports: EW
        } = WW;
        return `${iW.join(";")}|${OW.join(";")}|${mW.join(";")}|${EW.join(";")}`
      })).join("/")
    }

    function aj(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const NW = iW[0],
        PW = {
          positions: [],
          indices: []
        };
      for (const [LW, cW, wW] of iW) Rj(PW, LW - NW[0] + .5, cW - NW[1] + .5, wW - NW[2] + .5, mW, EW);
      return WW.createGameMesh(PW, OW, NW)
    }
    class rj {
      constructor(WW) {
        this.store = WW, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(WW, iW, OW) {
        var mW;
        const EW = null === (mW = WW.kOW(iW)) || void 0 === mW ? void 0 : mW.name;
        if (EW !== tm && EW !== wm) return void("" !== this.shownKey && this.show(WW, "", []));
        const NW = performance.now();
        if (NW - this.lastCheckMs >= 200 && (this.lastCheckMs = NW, EW === tm ? this.check(WW, OW) : this.preview(WW, OW)), this.pulses.length > 0) {
          const iW = 1 + .12 * Math.sin(NW / 1e3 * 1.25 * Math.PI * 2),
            OW = [iW, iW, iW];
          for (const mW of this.pulses) WW.setGameMesh(mW, {
            scale: OW
          })
        }
      }
      dispose(WW) {
        this.clear(WW), this.shownKey = ""
      }
      check(WW, iW) {
        const OW = Gj(WW),
          mW = [];
        for (const {
            entry: NW
          }
          of this.store.colliders()) {
          NW.focus.every(((WW, OW) => Math.abs(WW + .5 - iW[OW]) <= cm.GHOST_REACH)) && mW.push(qc(NW, OW))
        }
        const EW = Ij(mW);
        EW !== this.shownKey && this.show(WW, EW, mW)
      }
      preview(WW, iW) {
        const OW = WW.getTargetedBlock(),
          mW = OW ? [OW.Uj[0], OW.Uj[1], OW.Uj[2]] : null,
          EW = null !== mW && mW.every(((WW, OW) => Math.abs(WW + .5 - iW[OW]) <= 8)),
          NW = this.store.site(),
          PW = EW && NW ? function(WW, iW, OW) {
            const mW = jm(WW);
            if (!mW.every(iW)) return null;
            const EW = Km(WW, OW);
            return {
              column: mW,
              spots: qc({
                focus: mW[1],
                lasers: [!1, !1, !1, !1],
                open: EW,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, iW),
              fits: EW.filter(Boolean).length >= cm.MIN_SPOTS
            }
          }(mW, Gj(WW), NW) : null,
          LW = PW ? [PW.spots] : [],
          cW = PW ? `preview ${mW.join(",")}|${PW.fits}|${Ij(LW)}` : "";
        var wW, tW;
        cW !== this.shownKey && this.show(WW, cW, LW, null !== (wW = null === PW || void 0 === PW ? void 0 : PW.column) && void 0 !== wW ? wW : [], null === (tW = null === PW || void 0 === PW ? void 0 : PW.fits) || void 0 === tW || tW)
      }
      show(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          EW = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(WW), this.shownKey = iW, mW.length > 0 && this.meshes.push(aj(WW, mW, oj(EW ? Bj : Xj)));
        for (const {
            free: NW,
            blocked: PW,
            gaps: LW,
            supports: cW
          }
          of OW) {
          for (const [iW, OW, mW] of NW) {
            const EW = {
              positions: [],
              indices: []
            };
            Rj(EW, 0, 0, 0);
            const NW = WW.createGameMesh(EW, oj(fj), [iW + .5, OW + .5, mW + .5]);
            this.meshes.push(NW), this.pulses.push(NW)
          }
          PW.length > 0 && this.meshes.push(aj(WW, PW, oj(Cj))), LW.length > 0 && this.meshes.push(aj(WW, LW, oj(Xj), 1.06, .07)), cW.length > 0 && this.meshes.push(aj(WW, cW, oj(qj)))
        }
      }
      clear(WW) {
        for (const iW of this.meshes) WW.disposeGameMesh(iW);
        this.meshes = [], this.pulses = []
      }
    }
    class zj {
      constructor() {
        this.stored = new Map, this.BL = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(WW) {
        if (!WW.baf2TermOpen) return !1;
        WW.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [iW, OW] of WW.baf2TermItems) OW > 0 ? this.stored.set(iW, OW) : this.stored.delete(iW);
        if (WW.baf2TermHeld && (this.BL = new Map(WW.baf2TermHeld)), this.pending = this.pending.filter((iW => iW.seq > WW.baf2TermAcked)), this.silos = WW.baf2TermSilos, this.readOnly = WW.baf2TermReadOnly, this.pocket = !0 === WW.baf2TermPocket, WW.baf2TermReset) this.resort();
        else {
          const WW = new Set(this.order);
          for (const iW of this.stored.keys()) WW.has(iW) || this.order.push(iW)
        }
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((WW, iW) => this.amount(iW) - this.amount(WW) || WW.localeCompare(iW))), this.changed()
      }
      take(WW, iW) {
        const OW = Li(WW, this.amount(iW));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: iW,
          amount: OW,
          put: !1
        }), this.recents = [iW, ...this.recents.filter((WW => WW !== iW))].slice(0, 6), this.changed(), Oi(this.seq, WW, iW)
      }
      put(WW, iW) {
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: iW,
          amount: Li(WW, this.heldAmount(iW)),
          put: !0
        }), this.changed(), mi(this.seq, WW, iW)
      }
      putAll() {
        this.seq++;
        for (const WW of this.heldItems()) this.pending.push({
          seq: this.seq,
          item: WW,
          amount: this.heldAmount(WW),
          put: !0
        });
        return this.changed(), Ei(this.seq)
      }
      amount(WW) {
        var iW;
        let OW = null !== (iW = this.stored.get(WW)) && void 0 !== iW ? iW : 0;
        for (const mW of this.pending) mW.item === WW && (OW += mW.put ? mW.amount : -mW.amount);
        return Math.max(0, OW)
      }
      heldAmount(WW) {
        var iW;
        let OW = null !== (iW = this.BL.get(WW)) && void 0 !== iW ? iW : 0;
        for (const mW of this.pending) mW.put && mW.item === WW && (OW -= mW.amount);
        return Math.max(0, OW)
      }
      heldItems() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return this.order.filter((iW => iW === WW || this.heldAmount(iW) > 0))
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
    var Fj = OW(39602);
    const Qj = {
      isBlock: WW => void 0 !== uW.j[WW],
      harvestType: WW => {
        var iW;
        return null === (iW = uW.j[WW]) || void 0 === iW ? void 0 : iW.harvestType
      },
      harvestLevel: WW => {
        var iW;
        return null === (iW = uW.j[WW]) || void 0 === iW ? void 0 : iW.harvestLevel
      },
      dropsNothing: WW => {
        var iW;
        return null === (null === (iW = uW.j[WW]) || void 0 === iW ? void 0 : iW.drops)
      },
      displayName: WW => {
        var iW;
        return null === (iW = IP.n[WW]) || void 0 === iW ? void 0 : iW.displayName
      },
      description: WW => {
        var iW;
        return null === (iW = IP.n[WW]) || void 0 === iW ? void 0 : iW.description
      },
      harvests: WW => {
        var iW;
        return null === (iW = IP.n[WW]) || void 0 === iW ? void 0 : iW.harvests
      },
      level: WW => {
        var iW;
        return null === (iW = IP.n[WW]) || void 0 === iW ? void 0 : iW.level
      }
    };

    function WU(WW, iW, OW) {
      return function(WW, iW, OW, mW) {
        var EW, NW;
        const PW = iW.split("|")[0],
          LW = WW.isBlock(iW) ? iW : WW.isBlock(PW) ? PW : null;
        if (null === LW || "rock" !== WW.harvestType(LW) || WW.dropsNothing(LW) && !pm.has(PW)) return null;
        const cW = OW && "rock" === WW.harvests(OW) ? null !== (EW = WW.level(OW)) && void 0 !== EW ? EW : 0 : null,
          wW = null !== (NW = null !== mW && void 0 !== mW ? mW : WW.harvestLevel(LW)) && void 0 !== NW ? NW : 0;
        return (null !== cW ? wW <= cW : 0 === WW.harvestLevel(LW)) ? null : Hm(WW, wW)
      }(Qj, WW, iW, OW)
    }

    function iU(WW, iW) {
      return function(WW, iW, OW) {
        if (iW === hm[0]) return [(0, eW.Vd)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, eW.M.whiteUiText)];
        const mW = OW.split("|")[0],
          EW = WW.isBlock(mW) ? WW.displayName(mW) : void 0,
          NW = "string" === typeof EW ? EW : EW && "translationKey" in EW ? `$t(${EW.translationKey})` : mW;
        return [(0, eW.Vd)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: NW
          }
        }, eW.M.whiteUiText), (0, eW.Vd)({
          translationKey: `item:${(0,eW.qe)(iW)}`
        }, eW.M.yellowUiText)]
      }(Qj, WW, iW)
    }
    const OU = "buildAFactory2Game:";
    const mU = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function EU(WW) {
      return WW.endsWith(" Ore")
    }
    const NU = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      PU = [],
      LU = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: NU,
        plan: null,
        atomic: PU
      },
      cU = "buildAFactory2Game:",
      wU = new Set(["Splitter", "Sorting Gate"]),
      tU = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class ZU {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = WW, this.planAt = iW, this.tierOf = OW, this.NL = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.BL = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = LU, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(WW, iW, OW) {
        var mW, EW, NW;
        let PW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const LW = null !== (mW = null === (EW = WW.kOW(iW)) || void 0 === EW ? void 0 : EW.name) && void 0 !== mW ? mW : null,
          cW = WW.isPlayerCrouching(iW),
          wW = 0 === OW ? null : this.resolve(WW, OW),
          tW = null !== wW && null !== PW && wU.has(wW.rootName) && function(WW, iW) {
            return tU.some((OW => {
              let [mW, EW] = OW;
              const NW = WW.getBlockId(iW[0] + mW, iW[1], iW[2] + EW);
              return 0 !== NW && "Express Belt" === WW.getMetaInfo(NW).rootName
            }))
          }(WW, PW),
          ZW = this.updatePlan(0 === OW ? null : PW),
          xW = this.tierOf(),
          lW = null === PW ? null : (0, Fj.g)(OW),
          AW = null !== lW && null !== PW && (0, Fj.i)(function(WW) {
            return (iW, OW, mW) => WW.getBlockId(iW, OW, mW)
          }(WW), PW[0], PW[1], PW[2], lW),
          bW = this.readAfloat(WW, OW, PW);
        if (OW === this.NL && AW === this.missesMaker && bW === this.afloat && LW === this.BL && cW === this.crouching && tW === this.express && xW === this.tier && !ZW && (!this.targetsLive || !this.liveMoved(PW))) return;
        this.NL = OW, this.missesMaker = AW, this.afloat = bW, this.BL = LW, this.crouching = cW, this.express = tW;
        const jW = tW && wW ? function(WW) {
          if (null === WW.info) return null;
          return WW.express ??= {
            ...WW.info,
            detail: `${cU}lookKeepsUpExpress`,
            detailItem: null
          }, WW.express
        }(wW) : null !== wW && AW && null !== lW ? this.besideMaker(wW, OW, lW) : null !== wW && bW ? this.hanging(wW) : null !== (NW = null === wW || void 0 === wW ? void 0 : wW.info) && void 0 !== NW ? NW : null;
        this.tier = xW;
        const UW = wW && jW ? function(WW, iW) {
          var OW, mW;
          const EW = uW.j[WW];
          if (!WW.endsWith(" Ore") || "rock" !== (null === EW || void 0 === EW ? void 0 : EW.harvestType) || 0 === EW.harvestLevel) return null;
          const NW = null !== (OW = EW.harvestLevel) && void 0 !== OW ? OW : 0,
            PW = iW ? IP.n[iW] : void 0;
          if ("rock" === (null === PW || void 0 === PW ? void 0 : PW.harvests) && (null !== (mW = PW.level) && void 0 !== mW ? mW : 0) >= NW) return null;
          const LW = (cW = NW, Hm(Qj, cW));
          var cW;
          if (null === LW) return null;
          const wW = (0, iN.c)(LW),
            tW = /^[AEIOU]/.test(LW) ? "An" : "";
          if ("rock" === (null === PW || void 0 === PW ? void 0 : PW.harvests) && iW) return {
            key: `${cU}lookToolTooWeak${tW}`,
            BL: (0, iN.c)(iW),
            needed: wW
          };
          return {
            key: LW === hm[0] ? `${cU}lookNeedAnyPickaxe` : `${cU}lookNeedPickaxe${tW}`,
            BL: null,
            needed: wW
          }
        }(wW.rootName, LW) : null;
        this.targetsLive = !0 === (null === wW || void 0 === wW ? void 0 : wW.live) && null !== PW;
        let kW = null;
        this.targetsLive && wW && PW && this.live && (this.livePos[0] = PW[0], this.livePos[1] = PW[1], this.livePos[2] = PW[2], this.liveVersion = this.live.version(), kW = this.live.line(wW.rootName, PW));
        const sW = null === jW ? NU : function(WW, iW, OW) {
            const mW = function(WW, iW, OW) {
              const mW = vO(WW);
              if (null === mW) return null;
              const EW = `${OU}lookPortMode_${mW}`,
                NW = Xm(iW);
              if (NW && OW) return {
                mode: null,
                detail: EW,
                next: `${OU}lookWrenchPickUp`,
                nextState: null
              };
              const PW = gO(WW),
                LW = null === PW ? null : vO(PW);
              return null === LW ? {
                mode: null,
                detail: EW,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: EW,
                next: NW ? `${OU}lookWrenchNext` : `${OU}lookPortWrench`,
                nextState: `${OU}lookPortState_${LW}`
              }
            }(WW, iW, OW);
            if (null !== mW) return mW;
            const EW = mE(WW, iW, OW);
            return null === EW.mode && null === EW.next ? NU : EW
          }(WW.blockIdToBlockName(OW), LW, cW),
          MW = this.plan,
          KW = wW && jW ? this.rowsOf(wW.rootName, xW) : PU,
          SW = this.snapshot;
        if (!(null === jW ? !SW.visible : SW.visible && jW === SW.info && (YW = UW, yW = SW.tool, YW === yW || null !== YW && null !== yW && YW.key === yW.key && YW.BL === yW.BL && YW.needed === yW.needed) && function(WW, iW) {
            return WW === iW || null !== WW && null !== iW && WW.key === iW.key && JSON.stringify([WW.params, WW.keys]) === JSON.stringify([iW.params, iW.keys])
          }(kW, SW.live) && function(WW, iW) {
            return WW.mode === iW.mode && WW.detail === iW.detail && WW.next === iW.next && WW.nextState === iW.nextState
          }(sW, SW.wrench) && XA(MW, SW.plan) && KW === SW.atomic)) {
          var YW, yW;
          this.snapshot = null === jW ? {
            ...SW,
            visible: !1
          } : {
            info: jW,
            visible: !0,
            tool: UW,
            live: kW,
            wrench: sW,
            plan: MW,
            atomic: KW
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
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = LU, this.NL = 0, this.BL = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(WW, iW, OW) {
        if (null === OW || 0 === iW || !LW() || !EU(this.resolve(WW, iW).rootName)) return !1;
        const mW = `${OW[0]},${OW[1]},${OW[2]},${iW}`,
          EW = performance.now();
        return mW === this.afloatKey && EW - this.afloatAt < xU ? this.afloat : (this.afloatKey = mW, this.afloatAt = EW, function(WW, iW) {
          for (const [OW, mW, EW] of mU) {
            const NW = iW(WW[0] + OW, WW[1] + mW, WW[2] + EW);
            if (void 0 === NW || null !== NW && !EU(NW)) return !1
          }
          return !0
        }(OW, ((iW, OW, mW) => function(WW, iW, OW, mW) {
          if (!WW.isBlockInLoadedChunk(iW, OW, mW)) return;
          const EW = WW.getBlockId(iW, OW, mW);
          return 0 === EW ? null : WW.getMetaInfo(EW).rootName
        }(WW, iW, OW, mW))))
      }
      liveMoved(WW) {
        var iW;
        const {
          livePos: OW
        } = this;
        return null === WW || WW[0] !== OW[0] || WW[1] !== OW[1] || WW[2] !== OW[2] || (null === (iW = this.live) || void 0 === iW ? void 0 : iW.version()) !== this.liveVersion
      }
      updatePlan(WW) {
        const iW = null === WW ? "" : WW.join(","),
          OW = performance.now();
        if (iW === this.planPos && OW - this.planMs < 250) return !1;
        this.planPos = iW, this.planMs = OW;
        const mW = null === WW ? null : this.planAt([WW[0], WW[1], WW[2]]),
          EW = !XA(mW, this.plan);
        return this.plan = mW, EW
      }
      besideMaker(WW, iW, OW) {
        let {
          info: mW
        } = WW;
        if (null === mW) return null;
        let EW = this.besideMakerById.get(iW);
        if (void 0 === EW) {
          const WW = "cryo" === OW ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          EW = {
            ...mW,
            detail: `${cU}${WW}`,
            detailItem: null
          }, this.besideMakerById.set(iW, EW)
        }
        return EW
      }
      hanging(WW) {
        let {
          info: iW,
          rootName: OW
        } = WW;
        if (null === iW) return null;
        let mW = this.afloatByRoot.get(OW);
        return void 0 === mW && (mW = {
          ...iW,
          detail: `${cU}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(OW, mW)), mW
      }
      rowsOf(WW, iW) {
        if (null === iW) return PU;
        const OW = `${WW}|${iW}`;
        let mW = this.rowsByKey.get(OW);
        if (void 0 === mW) {
          const EW = function(WW, iW) {
            var OW;
            if (!(WW in vi)) return [];
            const mW = null !== (OW = gi[WW]) && void 0 !== OW ? OW : [],
              EW = new Map;
            for (const PW of DN(WW, iW))
              if ((mW.includes(PW) || gN(PW.output) && eN(PW.output) > rW(WW)) && eN(PW.output) <= iW) {
                var NW;
                const WW = null !== (NW = EW.get(PW.output)) && void 0 !== NW ? NW : [];
                WW.push(PW.input), EW.set(PW.output, WW)
              } return pN([...EW], (WW => {
              let [iW] = WW;
              return -eN(iW)
            })).map((WW => {
              let [iW, OW] = WW;
              return {
                output: iW,
                inputs: OW
              }
            }))
          }(WW, iW);
          mW = EW.length > 0 ? EW : PU, this.rowsByKey.set(OW, mW)
        }
        return mW
      }
      resolve(WW, iW) {
        const {
          rootId: OW,
          rootName: mW
        } = WW.getMetaInfo(iW), EW = (0, jO.p)(mW) ? iW : OW;
        let NW = this.byRootId.get(EW);
        const PW = LW();
        if (void 0 === NW || NW.nuclear !== PW) {
          var cW;
          const OW = function(WW) {
            return Dm(Qj, WW, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WW)
          }(mW, WW.blockIdToBlockName(iW));
          NW = {
            info: OW,
            rootName: mW,
            live: null !== OW && !0 === (null === (cW = this.live) || void 0 === cW ? void 0 : cW.handles(mW)),
            nuclear: PW
          }, this.byRootId.set(EW, NW)
        }
        return NW
      }
    }
    const xU = 500;
    const lU = (0, mW.memo)((function(WW) {
      var iW, OW;
      let {
        store: EW
      } = WW;
      const {
        t: NW
      } = (0, hE.B)(), [PW, LW] = (0, mW.useState)((() => EW.get()));
      (0, mW.useEffect)((() => (LW(EW.get()), EW.subscribe((() => {
        LW(EW.get())
      })))), [EW]);
      const {
        openInGameMenuName: cW,
        openEverythingMenuName: wW,
        isTouchScreen: tW
      } = (0, ME.p)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
        info: ZW,
        tool: xW,
        live: lW,
        wrench: AW,
        atomic: bW
      } = PW, jW = PW.visible && null === cW && null === wW;
      if (null === ZW) return null;
      const UW = null !== AW.detail ? NW(AW.detail) : null !== (iW = PW.plan) && void 0 !== iW && iW.ctrl ? NW("buildAFactory2Game:lookPlanCtrl") : null !== ZW.detail ? NW(ZW.detail, null === ZW.detailItem ? void 0 : {
        item: NW(ZW.detailItem)
      }) : null;
      return (0, MN.jsxs)("div", {
        className: YE()("Baf2LookTarget", {
          Visible: jW
        }),
        "aria-hidden": !jW,
        children: [(0, MN.jsx)("div", {
          className: "Baf2LookTargetName SmallTextBold",
          children: NW(ZW.name)
        }), null !== PW.plan && (0, MN.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: NW(PW.plan.key, {
            kind: NW(PW.plan.kindKey),
            w: String(PW.plan.w),
            h: String(PW.plan.h),
            d: String(PW.plan.d),
            count: String(PW.plan.count)
          })
        }), void 0 !== (null === (OW = PW.plan) || void 0 === OW ? void 0 : OW.why) && (0, MN.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: NW(PW.plan.why)
        }), null !== AW.mode && (0, MN.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: NW(AW.mode)
        }), null !== xW ? (0, MN.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: NW(xW.key, {
            item: NW(xW.needed),
            BL: null === xW.BL ? "" : NW(xW.BL)
          })
        }) : null !== lW ? (0, MN.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: NW(lW.key, Fc(NW, lW))
        }) : null !== UW && (0, MN.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: UW
        }), bW.length > 0 && (0, MN.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: NW("buildAFactory2Game:lookAtomicRecipes", {
            list: bW.map((WW => {
              let {
                output: iW,
                inputs: OW
              } = WW;
              const mW = OW.length > 1 ? ` ${NW("buildAFactory2Game:recipeMore",{count:String(OW.length-1)})}` : "";
              return `${NW((0,iN.c)(OW[0]))}${mW} \u2192 ${NW((0,iN.c)(iW))}`
            })).join(", ")
          })
        }), null !== AW.next && (0, MN.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: NW(AW.next, {
            state: null === AW.nextState ? "" : NW(AW.nextState),
            use: NW(tW ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
          })
        })]
      })
    }));
    var AU = OW(39708);
    const bU = [],
      jU = [
        [0, -1, 0]
      ];

    function UU(WW) {
      const iW = [WW];
      for (let OW = 1; OW <= 4; OW++) OW > 1 && iW.push(`${WW}|meta|rot${OW}`), iW.push(`${WW}|meta|rot${OW}|Running`);
      return iW
    }

    function kU(WW, iW) {
      return [Math.floor(WW[0] / iW), Math.floor(WW[1] / iW), Math.floor(WW[2] / iW)]
    }

    function sU(WW, iW, OW) {
      return `${WW},${iW},${OW}`
    }

    function MU(WW) {
      const iW = WW.split("|")[0];
      if (!ZO(iW)) return bU;
      const OW = vi[iW];
      if (mO(OW)) return jU;
      const mW = kj(WW);
      return EO(OW) ? [
        [-mW[0], -mW[1], -mW[2]]
      ] : yE(OW) ? function(WW, iW) {
        const OW = WW[0] - 2 * iW[0],
          mW = WW[2] - 2 * iW[2],
          EW = [];
        for (let NW = -1; NW <= 1; NW++)
          for (let iW = -1; iW <= 1; iW++) EW.push([OW + NW, WW[1], mW + iW]);
        return EW
      }([0, 0, 0], mW) : bU
    }
    const KU = [.5, .5, .5],
      SU = [.2, .8, .3],
      YU = [.45, 1, .5];
    class yU {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(WW) {
        this.indexed = !0;
        for (const iW of Hi)
          for (const OW of UU(iW)) {
            const iW = WW.blockNameToBlockId(OW, !0),
              mW = MU(OW);
            null !== iW && mW.length > 0 && (this.offsetsList.push(mW), this.offsetsIndexById[iW] = this.offsetsList.length)
          }
      }
      onAfterRender(WW, iW) {
        this.indexed || this.index(WW);
        const OW = performance.now();
        if (OW - this.lastCheckMs < 100) return;
        this.lastCheckMs = OW, this.checks++;
        const mW = tA.f.jZ,
          [EW, NW, PW] = kU(iW, mW);
        let LW = !1;
        const cW = [];
        let wW = 0;
        for (let tW = EW - 2; tW <= EW + 2; tW++)
          for (let iW = NW - 1; iW <= NW + 1; iW++)
            for (let EW = PW - 2; EW <= PW + 2; EW++) {
              const NW = wW++,
                PW = sU(tW, iW, EW),
                ZW = WW.getChunkVersion(tW, iW, EW);
              let xW = this.chunks.get(PW);
              null !== ZW ? (xW || (xW = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(PW, xW)), xW.seenAt = this.checks, xW.checkedVersion !== ZW && (xW.checkedVersion = ZW, LW = !0), xW.scannedVersion !== ZW && OW - xW.scannedAt >= 500 && cW.push({
                slot: NW,
                entry: xW,
                origin: [tW * mW, iW * mW, EW * mW]
              })) : (LW ||= void 0 !== xW, this.chunks.delete(PW))
            }
        this.scanDue(WW, cW) && (LW = !0);
        for (const [tW, ZW] of this.chunks) ZW.seenAt !== this.checks && (LW ||= ZW.machines.length > 0, this.chunks.delete(tW));
        for (const tW of this.chunks.values())
          for (const [iW, OW, mW] of tW.cellChunks)(Math.abs(iW - EW) > 2 || Math.abs(OW - NW) > 1 || Math.abs(mW - PW) > 2) && this.watchCellChunk(WW, iW, OW, mW) && (LW = !0);
        for (const [tW, ZW] of this.cellChunks) ZW.seenAt !== this.checks && this.cellChunks.delete(tW);
        LW && this.refresh(WW)
      }
      dispose(WW) {
        this.clearMeshes(WW), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(WW, iW) {
        const OW = Math.max(iW.findIndex((WW => {
          let {
            slot: iW
          } = WW;
          return iW >= this.scanFrom
        })), 0);
        let mW = 96;
        for (let EW = 0; EW < iW.length; EW++) {
          const {
            slot: NW,
            entry: PW,
            origin: LW
          } = iW[(OW + EW) % iW.length];
          if (mW -= this.scan(WW, PW, LW), mW <= 0) {
            this.scanFrom = NW + 1;
            break
          }
        }
        return iW.length > 0
      }
      scan(WW, iW, OW) {
        let [mW, EW, NW] = OW;
        const PW = tA.f.jZ,
          LW = this.hits;
        LW.length = 0;
        const cW = WW.scanBlocks(mW, EW, NW, mW + PW, EW + PW, NW + PW, this.offsetsIndexById, LW),
          wW = [];
        for (let tW = 0; tW < LW.length; tW += 4) wW.push({
          pos: [LW[tW], LW[tW + 1], LW[tW + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[LW[tW + 3]] - 1]
        });
        return iW.machines = wW, iW.cellChunks = function(WW, iW) {
          const OW = new Set,
            mW = [];
          for (const {
              pos: EW,
              offsets: NW
            }
            of WW)
            for (const [WW, PW, LW] of NW) {
              const NW = kU([EW[0] + WW, EW[1] + PW, EW[2] + LW], iW),
                cW = sU(...NW);
              OW.has(cW) || (OW.add(cW), mW.push(NW))
            }
          return mW
        }(wW, PW), iW.scannedVersion = iW.checkedVersion, iW.scannedAt = performance.now(), Math.max(cW, 1)
      }
      watchCellChunk(WW, iW, OW, mW) {
        const EW = sU(iW, OW, mW),
          NW = WW.getChunkVersion(iW, OW, mW),
          PW = this.cellChunks.get(EW);
        return null === NW ? this.cellChunks.delete(EW) : (null === PW || void 0 === PW ? void 0 : PW.version) === NW ? (PW.seenAt = this.checks, !1) : (this.cellChunks.set(EW, {
          version: NW,
          seenAt: this.checks
        }), !0)
      }
      refresh(WW) {
        const iW = function(WW, iW) {
            const OW = new Set,
              mW = [];
            for (const {
                pos: EW,
                offsets: NW
              }
              of WW)
              for (const [WW, PW, LW] of NW) {
                const NW = EW[0] + WW,
                  cW = EW[1] + PW,
                  wW = EW[2] + LW,
                  tW = `${NW},${cW},${wW}`;
                OW.has(tW) || (OW.add(tW), iW(NW, cW, wW) && mW.push([NW, cW, wW]))
              }
            return mW
          }([...this.chunks.values()].flatMap((WW => WW.machines)), ((iW, OW, mW) => WW.isBlockInLoadedChunk(iW, OW, mW) && 0 === WW.getBlockId(iW, OW, mW))),
          OW = iW.join(";");
        OW !== this.shownKey && (this.shownKey = OW, this.clearMeshes(WW), iW.length > 0 && (this.meshes = [this.build(WW, iW, !1), this.build(WW, iW, !0)]))
      }
      build(WW, iW, OW) {
        const mW = iW[0],
          EW = [],
          NW = [];
        for (const [PW, LW, cW] of iW)(0, AU.d)(EW, NW, [PW - mW[0] + .5, LW - mW[1] + .5, cW - mW[2] + .5], KU, OW);
        return WW.createGameMesh({
          positions: EW,
          indices: NW
        }, {
          rgb: OW ? YU : SU,
          alpha: .4
        }, mW)
      }
      clearMeshes(WW) {
        for (const iW of this.meshes) WW.disposeGameMesh(iW);
        this.meshes = []
      }
    }
    const TU = 1 / .6,
      JU = 200,
      hU = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      HU = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      nU = 2 * Math.PI / 3;
    class uU {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hU;
        this.style = WW, this.particles = null, this.points = new Float32Array(800), this.budget = JU, this.lastMs = 0
      }
      static blade() {
        return new uU(HU)
      }
      zk(WW, iW) {
        const OW = Math.min(iW.arcStruck, iW.arcPoints.length);
        this.draw(WW, [iW.arcFrom, ...iW.arcPoints], iW.arcPoints.slice(0, OW))
      }
      onBlade(WW, iW) {
        const [OW, mW, EW] = iW.bladeCentre, [NW, PW] = iW.bladeFacing, LW = OW - 1.5 * NW, cW = EW - 1.5 * PW, wW = Math.atan2(PW, NW), tW = [];
        for (let ZW = 0; ZW <= 8; ZW++) {
          const WW = wW - nU / 2 + nU * ZW / 8;
          tW.push([LW + 2.5 * Math.cos(WW), mW, cW + 2.5 * Math.sin(WW)])
        }
        this.draw(WW, tW, iW.bladeStruck)
      }
      dispose() {
        var WW;
        null === (WW = this.particles) || void 0 === WW || WW.stop(), this.particles = null
      }
      draw(WW, iW, OW) {
        if (!WW.particlesEnabled() || iW.length < 2) return;
        const mW = performance.now();
        this.budget = Math.min(JU, this.budget + (mW - this.lastMs) / 1e3 * JU), this.lastMs = mW;
        const EW = [];
        let NW = 0,
          PW = iW[0];
        for (const UW of iW.slice(1)) {
          const WW = Math.min(48, Math.round(Math.hypot(UW[0] - PW[0], UW[1] - PW[1], UW[2] - PW[2]) * this.style.perBlock));
          EW.push([PW, UW, WW]), NW += WW, PW = UW
        }
        const LW = OW.length;
        NW += 10 * LW;
        const cW = NW > this.budget ? this.budget / NW : 1;
        if (0 === NW || cW * NW < 1) return;
        const wW = iW[0],
          [tW, ZW, xW] = wW,
          lW = this.points;
        let AW = 0;
        const bW = (WW, iW, OW, mW) => {
          const EW = 4 * AW;
          lW[EW] = WW - tW, lW[EW + 1] = iW - ZW, lW[EW + 2] = OW - xW, lW[EW + 3] = mW, AW++
        };
        EW.forEach(((WW, iW) => {
          let [OW, mW, EW] = WW;
          const NW = Math.min(Math.floor(EW * cW), JU - AW),
            PW = Math.hypot(mW[0] - OW[0], mW[1] - OW[1], mW[2] - OW[2]),
            LW = 0 === iW && PW > 0 ? Math.min(.5, .1 * PW) / PW : 0;
          for (let cW = 0; cW < NW; cW++) {
            const WW = LW + (cW + .5) / NW * (1 - LW);
            bW(OW[0] + (mW[0] - OW[0]) * WW, OW[1] + (mW[1] - OW[1]) * WW, OW[2] + (mW[2] - OW[2]) * WW, .15)
          }
        }));
        const jW = Math.floor(10 * cW);
        for (let UW = 0; UW < LW; UW++) {
          const [WW, iW, mW] = OW[UW];
          for (let OW = 0; OW < jW && AW < JU; OW++) bW(WW, iW, mW, 2.5)
        }
        this.budget -= AW, this.particles ??= WW.createParticles(function(WW) {
          const [iW, OW] = WW.colours;
          return {
            texture: "square_particle",
            aZ: 400,
            minLifeTime: WW.life[0] / TU,
            maxLifeTime: WW.life[1] / TU,
            minSize: WW.size[0],
            maxSize: WW.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [iW[0], iW[1], iW[2], 1],
              maxColor: [OW[0], OW[1], OW[2], 1]
            }, {
              timeFraction: 1,
              minColor: [iW[0], iW[1], iW[2], 0],
              maxColor: [OW[0], OW[1], OW[2], 0]
            }],
            blendMode: nL.d.Add
          }
        }(this.style), {
          pos: wW
        }), this.particles.emitPoints(wW, lW, AW)
      }
    }
    const oU = new Set(["Sky Spring"]);

    function dU(WW, iW, OW) {
      const mW = WW.split("|")[0];
      return "Air" !== iW || OW || ! function(WW) {
        const iW = WW.split("|")[0];
        return void 0 !== cO[iW] || oU.has(iW)
      }(mW) ? null : WW
    }
    class eU {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(WW) {
        const iW = WW - this.lastTapAt >= 300;
        return this.lastTapAt = WW, iW
      }
    }
    class vU {
      constructor() {
        this.presses = new eU, this.predicted = null
      }
      tap(WW, iW) {
        const OW = this.presses.isNewPress(iW);
        return OW && (this.predicted = {
          station: WW,
          at: iW
        }), OW
      }
      consumeServerOpen(WW, iW) {
        const OW = this.predicted;
        return !(null === OW || OW.station !== WW || iW - OW.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class gU {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(WW, iW) {
        return WW && (this.thrustAt = iW), iW - this.thrustAt < 200
      }
    }
    const DU = [.1, .05, .1],
      VU = {
        texture: "effect_5",
        aZ: Math.ceil(48),
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
        blendMode: nL.d.OneOne
      };
    class pU {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new gU, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      zk(WW, iW) {
        for (const [OW, mW] of iW.baf2JetFlames) WW.isLocalPlayer(OW) || (mW ? this.lit.add(OW) : this.lit.delete(OW))
      }
      onAfterRender(WW, iW) {
        const OW = performance.now(),
          mW = this.hold.lit(this.selfThrusting(WW, iW), OW);
        for (const [EW, NW] of this.flames)(EW === iW ? mW : this.lit.has(EW)) || this.setEmitting(NW, !1), EW === iW || WW.getPositionView(EW) ? !NW.emitting && OW - NW.offAt >= 1300 && (NW.particles.stop(), this.flames.delete(EW)) : (NW.particles.dispose(), this.flames.delete(EW), this.lit.delete(EW));
        mW && this.draw(WW, iW, iW);
        for (const EW of this.lit) this.draw(WW, iW, EW)
      }
      dispose() {
        for (const WW of this.flames.values()) WW.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(WW, iW) {
        var OW;
        const mW = WW.getLocalPlayerMovement();
        return !!mW && (null !== (EW = {
          option: null !== (OW = WW.getClientOption(iW, "jumpHoldThrust")) && void 0 !== OW ? OW : null,
          jumping: mW.jumpHeld,
          onGround: mW.onGround,
          alive: WW.isAlive(iW)
        }).option && EW.option.maxUpSpeed >= 0 && EW.jumping && !EW.onGround && EW.alive);
        var EW
      }
      draw(WW, iW, OW) {
        var mW, EW;
        const NW = this.pos;
        if (!WW.readDrawnPosition(OW, NW)) return;
        const PW = WW.readDrawnPosition(iW, this.camera) ? this.camera : NW;
        if (!((NW[0] - PW[0]) ** 2 + (NW[1] - PW[1]) ** 2 + (NW[2] - PW[2]) ** 2 < 1600) || !WW.particlesEnabled()) {
          const WW = this.flames.get(OW);
          return void(WW && this.setEmitting(WW, !1))
        }
        const LW = null !== (mW = this.flames.get(OW)) && void 0 !== mW ? mW : this.create(WW, OW, NW),
          cW = null !== (EW = WW.getDrawnHeading(OW)) && void 0 !== EW ? EW : 0,
          wW = this.at;
        wW[0] = NW[0] - .35 * Math.sin(cW), wW[1] = NW[1] + 1.05, wW[2] = NW[2] - .35 * Math.cos(cW), LW.particles.moveTo(wW), this.setEmitting(LW, !0)
      }
      setEmitting(WW, iW) {
        WW.emitting !== iW && (WW.emitting = iW, iW || (WW.offAt = performance.now()), WW.particles.setEmitRate(iW ? 60 : 0))
      }
      create(WW, iW, OW) {
        const mW = {
          particles: WW.createParticles(VU, {
            pos: OW,
            half: DU
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(iW, mW), mW
      }
    }

    function fU(WW) {
      return "Reactor Frame" === Nm("reactor", WW)
    }

    function CU(WW) {
      return fO("reactor", WW) && !fU(WW) && (WW.startsWith("Reactor Glass") || WW.startsWith("Reactor Port"))
    }
    const XU = "baf2Goal";
    class BU {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [eE.l.subscribe("setDirectionArrow", (WW => {
          let {
            id: iW,
            position: OW
          } = WW;
          iW === XU && (this.goal = OW, this.checkedAt = -1 / 0)
        })), eE.l.subscribe("clearDirectionArrow", (WW => {
          let {
            id: iW
          } = WW;
          null !== iW && iW !== XU || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const WW of this.subs) eE.l.unsubscribe(WW)
      }
      sideOf(WW, iW, OW, mW) {
        const EW = this.goal;
        if (!EW) return 0;
        OW - this.checkedAt > 1e3 && (this.checkedAt = OW, this.open = function(WW, iW) {
          const [OW, mW, EW] = WW.map(Math.floor);
          if (!CU(iW(OW, mW, EW))) return null;
          for (const [NW, PW] of [
              [1, 0],
              [0, 1]
            ]) {
            const WW = iW(OW + NW, mW, EW + PW),
              LW = iW(OW - NW, mW, EW - PW);
            if (fU(LW) && CU(WW)) return [NW, 0, PW];
            if (fU(WW) && CU(LW)) return [0 - NW, 0, 0 - PW]
          }
          return null
        }(EW, ((iW, OW, mW) => WW.blockIdToBlockName(WW.getBlockId(iW, OW, mW)))));
        const NW = this.open;
        if (!NW) return 0;
        const PW = mW(EW);
        if (Math.abs(PW.x - iW.x) > .05 || Math.abs(PW.y - iW.y) > .05) return 0;
        const LW = mW([EW[0] + NW[0], EW[1], EW[2] + NW[2]]).x - PW.x;
        return Math.abs(LW) < .3 ? 0 : LW > 0 ? 1 : -1
      }
    }
    class qU {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new BU, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.JA = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.Lk = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((WW => {
          for (const iW of WW) iW.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(iW.target, iW.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.JA || this.clear()
        }, window.addEventListener("resize", this.Lk)
      }
      onAfterRender(WW, iW) {
        var OW;
        this.api = WW, this.project = null !== (OW = null === iW || void 0 === iW ? void 0 : iW.projectWorldPosToScreenPos) && void 0 !== OW ? OW : null, this.queued || this.JA || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.JA = !0;
        for (const WW of this.moved.keys()) WW.style.transform = "";
        this.moved.clear();
        for (const WW of this.sideLabels.keys()) WW.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.Lk)
      }
      clear() {
        for (const NW of this.moved.keys()) NW.isConnected || this.moved.delete(NW);
        for (const NW of this.sideLabels.keys()) NW.isConnected || this.sideLabels.delete(NW);
        if (0 === this.arrows.length) return;
        const WW = performance.now(),
          iW = WW - this.refreshedAt > 1e3;
        iW && (this.refreshedAt = WW, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const OW = this.trackerBox(),
          mW = this.barsBox(),
          EW = this.toastBox(iW);
        (OW || mW || EW) && iW && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let NW = 0; NW < this.arrows.length; NW++) {
          const iW = this.arrows[NW];
          this.labelOffsets.set(iW, this.runLabelAside(iW, WW));
          const PW = (OW ? this.shiftLeftOf(iW, OW) : 0) || this.shiftOnScreen(iW),
            LW = Math.min(mW ? this.liftAbove(iW, mW, PW) : 0, EW ? this.liftAbove(iW, EW, PW) : 0),
            cW = this.moved.get(iW);
          if (0 !== PW || 0 !== LW) {
            const WW = 0 === LW ? `translateX(${PW}px)` : `translate(${PW}px, ${LW}px)`;
            cW !== WW && (iW.style.transform = WW, this.moved.set(iW, WW))
          } else void 0 !== cW && (iW.style.transform = "", this.moved.delete(iW))
        }
      }
      trackerBox() {
        var WW, iW;
        const OW = null !== (WW = this.tracker) && void 0 !== WW && WW.isConnected ? this.tracker : null !== (iW = this.trackers[0]) && void 0 !== iW ? iW : null;
        if (OW !== this.tracker && this.watch(OW), this.boxStale && OW) {
          var mW, EW, NW;
          this.boxStale = !1;
          const WW = OW.closest(".NoRoom") ? null : OW.getBoundingClientRect(),
            iW = WW && WW.width > 0 ? null === (mW = this.hud) || void 0 === mW ? void 0 : mW.getBoundingClientRect() : void 0,
            PW = WW && iW ? Math.max(WW.top, iW.top) : null !== (EW = null === WW || void 0 === WW ? void 0 : WW.top) && void 0 !== EW ? EW : 0,
            LW = WW && iW ? Math.min(WW.bottom, iW.bottom) : null !== (NW = null === WW || void 0 === WW ? void 0 : WW.bottom) && void 0 !== NW ? NW : 0;
          this.box = WW && WW.width > 0 && LW > PW ? {
            left: WW.left,
            top: PW,
            right: WW.right,
            bottom: LW
          } : null
        }
        return OW ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var WW;
          this.barsStale = !1;
          const iW = null === (WW = this.statBars[0]) || void 0 === WW ? void 0 : WW.getBoundingClientRect();
          this.bars = iW && iW.width > 0 && iW.height > 0 ? {
            left: iW.left,
            top: iW.top,
            right: iW.right,
            bottom: iW.bottom
          } : null
        }
        return this.bars
      }
      toastBox(WW) {
        var iW;
        const OW = null !== (iW = this.toasts[0]) && void 0 !== iW ? iW : null;
        if (OW !== this.toastEl || WW && OW) {
          this.toastEl = OW;
          const WW = null === OW || void 0 === OW ? void 0 : OW.getBoundingClientRect();
          this.toast = WW && WW.width > 0 && WW.height > 0 ? {
            left: WW.left,
            top: WW.top,
            right: WW.right,
            bottom: WW.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(WW, iW, OW) {
        var mW;
        const EW = this.anchorOf(WW);
        if (!EW) return 0;
        const NW = EW.x + OW + (null !== (mW = this.labelOffsets.get(WW)) && void 0 !== mW ? mW : 0),
          {
            halfWidth: PW,
            labelled: LW
          } = this.extentOf(WW),
          cW = EW.y + this.em * (LW ? 6.2 : 3);
        return cW < iW.top - 6 || NW + PW < iW.left - 6 || NW - PW > iW.right + 6 ? 0 : iW.top - 6 - cW
      }
      watch(WW) {
        var iW, OW;
        this.tracker && this.sizes.unobserve(this.tracker), null === (iW = this.hud) || void 0 === iW || iW.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = WW, this.hud = null !== (OW = null === WW || void 0 === WW ? void 0 : WW.closest(".Baf2QuestHud")) && void 0 !== OW ? OW : null, this.box = null, this.boxStale = !0, WW && this.sizes.observe(WW), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(WW, iW) {
        var OW;
        const mW = this.anchorOf(WW);
        if (!mW) return 0;
        const {
          y: EW
        } = mW, NW = mW.x + (null !== (OW = this.labelOffsets.get(WW)) && void 0 !== OW ? OW : 0), PW = this.em, {
          halfWidth: LW,
          labelled: cW
        } = this.extentOf(WW), wW = EW - PW, tW = NW + LW;
        return EW + PW * (cW ? 6.2 : 3) < iW.top || wW > iW.bottom || tW < iW.left - 6 || NW - LW > iW.right ? 0 : Math.max(iW.left - 6 - tW, 6 - (NW - LW))
      }
      shiftOnScreen(WW) {
        var iW;
        const OW = this.anchorOf(WW);
        if (!OW) return 0;
        const {
          halfWidth: mW
        } = this.extentOf(WW), EW = OW.x + (null !== (iW = this.labelOffsets.get(WW)) && void 0 !== iW ? iW : 0), NW = EW + mW - (this.innerWidth - 6);
        return NW > 0 ? -NW : Math.max(0, 6 - (EW - mW))
      }
      runLabelAside(WW, iW) {
        var OW;
        let mW = null;
        for (let PW = 0; PW < WW.children.length; PW++) WW.children[PW].classList.contains("DirectionArrowLabel") && (mW = WW.children[PW]);
        if (!mW) return 0;
        const EW = WW.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(WW) : null,
          NW = (EW && this.api ? this.side.sideOf(this.api, {
            x: EW.x / this.innerWidth * 100,
            y: EW.y / this.innerHeight * 100
          }, iW, this.project) : 0) * this.halfWidthOf(mW);
        return NW !== (null !== (OW = this.sideLabels.get(mW)) && void 0 !== OW ? OW : 0) && (mW.style.transform = 0 === NW ? "" : `translateX(-50%) translateX(${NW}px)`, 0 === NW ? this.sideLabels.delete(mW) : this.sideLabels.set(mW, NW)), NW
      }
      extentOf(WW) {
        let iW = this.em,
          OW = !1;
        for (let mW = 0; mW < WW.children.length; mW++) {
          const EW = WW.children[mW],
            NW = EW.classList.contains("DirectionArrowLabel");
          OW ||= NW, (NW || EW.classList.contains("DirectionArrowDistance")) && (iW = Math.max(iW, this.halfWidthOf(EW)))
        }
        return {
          halfWidth: iW,
          labelled: OW
        }
      }
      halfWidthOf(WW) {
        let iW = this.halfWidths.get(WW);
        return void 0 === iW && (iW = WW.offsetWidth / 2, this.halfWidths.set(WW, iW), this.sizes.observe(WW), this.labels.add(WW)), iW
      }
      forgetGoneLabels() {
        for (const WW of this.labels) WW.isConnected || (this.sizes.unobserve(WW), this.halfWidths.delete(WW), this.labels.delete(WW))
      }
      anchorOf(WW) {
        const iW = WW.style.translate,
          OW = this.anchors.get(WW);
        if (OW && OW.translate === iW && OW.innerWidth === this.innerWidth && OW.innerHeight === this.innerHeight) return OW;
        const mW = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(iW);
        if (!mW) return null;
        const EW = {
          translate: iW,
          x: parseFloat(mW[1]) / 100 * this.innerWidth,
          y: parseFloat(mW[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(WW, EW), EW
      }
    }
    const RU = "Baf2ArrowText";

    function GU(WW, iW) {
      const OW = WW.rows.find((WW => WW.current));
      return dW(WW.tutorial) && null !== OW && void 0 !== OW && OW.item && qE(OW) && HW(OW.item).includes(iW) ? OW.item : null
    }
    const IU = new class {
      constructor(WW) {
        this.select = WW, this.picks = new Map
      }
      open(WW, iW, OW) {
        const mW = GU(iW, WW);
        null !== mW && this.Kl(WW, mW, OW)
      }
      follow(WW, iW) {
        if (LW())
          for (const [OW, {
              item: mW,
              had: EW
            }] of this.picks) {
            const NW = GU(WW, OW);
            NW !== mW && (null !== NW && iW(mW) > EW ? this.Kl(OW, NW, iW) : this.picks.delete(OW))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      Kl(WW, iW, OW) {
        this.picks.set(WW, {
          item: iW,
          had: OW(iW)
        }), this.select(WW, iW)
      }
    }(vE.s);

    function aU(WW) {
      return iW => {
        let OW = 0;
        for (const mW of WW.getInventoryItems())(null === mW || void 0 === mW ? void 0 : mW.name) === iW && (OW += null === mW.amount ? 1 : Math.max(mW.amount, 0));
        return OW
      }
    }

    function rU(WW, iW, OW, mW) {
      WW.getClientOption(iW, "canCraft") && "inventory" !== ME.d.get("openInGameMenuName") && (IU.open(OW, mW.get(), aU(WW)), eE.l.iZ("toggleMenu", `inventory|${OW}`))
    }
    let zU = null,
      FU = !1;

    function QU(WW) {
      const iW = (0, sN.b)();
      WW === zU && iW === FU || (zU = WW, FU = iW, (0, vE.w)(function(WW, iW) {
        const OW = new Map;
        for (let mW = WW + 1; mW <= EW.length; mW++) {
          const EW = fN(mW, WW, iW);
          if (EW)
            for (const iW of UW(mW).unlocks) OW.set(iW, {
              ...EW,
              stepsAway: mW - WW
            })
        }
        return OW
      }(WW, iW)))
    }

    function Wk() {
      return (0, vE.E)(pN(Object.keys(hW), eN)), () => {
        (0, vE.E)([])
      }
    }

    function ik(WW, iW, OW) {
      var mW, EW;
      const NW = WW.getTargetedBlock();
      if (!NW || ! function(WW, iW, OW) {
          if ("Chest" !== iW) return !1;
          const mW = WW.split("|")[0];
          if (!ZO(mW) || 0 === vi[mW].outputSlots.length) return !1;
          const EW = kj(WW);
          return OW[0] === EW[0] && OW[1] === EW[1] && OW[2] === EW[2]
        }(OW, null === (mW = WW.kOW(iW)) || void 0 === mW ? void 0 : mW.name, NW.normal)) return !1;
      const [PW, LW, cW] = NW.Uj, wW = WW.getBlockId(PW, LW, cW);
      return 0 === wW || !0 === (null === (EW = uW.j[wW]) || void 0 === EW ? void 0 : EW.canBePlacedOver)
    }
    var Ok = OW(37559);
    const mk = new Set(UO.c);
    class Ek {
      constructor(WW) {
        this.toasts = WW, this.lastAt = -1 / 0
      }
      onAltAction(WW, iW, OW) {
        const mW = WW.getTargetedBlock();
        if (!mW || function(WW) {
            const iW = WW.split("|")[0];
            return ZO(iW) || null !== Tm(iW) || TW(iW) || UO.c.includes(iW)
          }(OW) && !mk.has(OW.split("|")[0])) return;
        const EW = WW.kOW(iW);
        if (!EW || !mk.has(EW.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const NW = EW.typeObj.id,
          [PW, LW, cW] = mW.Uj,
          wW = WW.getBlockId(PW, LW, cW),
          tW = uW.j[wW];
        (0 === wW || null !== tW && void 0 !== tW && tW.dl || null !== tW && void 0 !== tW && tW.canBePlacedOver) && WW.isSolidToPlayerBlockId(NW) && WW.canModifyBlockAt(PW, LW, cW) && WW.piW(PW, LW, cW, NW) && !WW.piW(PW, LW, cW, NW, iW) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, eW.Vd)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, eW.M.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class Nk {
      constructor(WW) {
        this.show = WW, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(WW, iW, OW) {
        var mW;
        if (!iW) return this.started = null, void this.gatedThisHold.clear();
        if (!WW) return void(this.started = null);
        const EW = `${WW.x},${WW.y},${WW.z},${WW.BL}`;
        if (EW === this.started) return;
        this.started = EW;
        const NW = Vm(WW.y) ? WU(WW.block, WW.BL, WW.level) : null;
        if (null === NW || this.gatedThisHold.has(EW)) return;
        this.gatedThisHold.add(EW);
        const PW = WW.block.split("|")[0];
        OW - (null !== (mW = this.hintedAt.get(PW)) && void 0 !== mW ? mW : -1 / 0) < 5e3 || (this.hintedAt.set(PW, OW), this.show({
          baf2ToastText: iU(NW, WW.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var Pk = OW(39);

    function Lk(WW, iW) {
      const OW = [...WW.baf2CoreBankPaused];
      for (const [EW] of WW.baf2CoreBanked) OW.push(EW);
      for (const PW of EW) {
        for (const {
            item: WW
          }
          of PW.cost) OW.push(WW);
        for (const WW of PW.newDeposits) OW.push(WW.block);
        for (const WW of PW.unlocks) OW.push(WW, nW(WW));
        PW.reward && OW.push(PW.reward);
        for (const {
            item: WW
          }
          of null !== (mW = null === (NW = PW.charge) || void 0 === NW ? void 0 : NW.items) && void 0 !== mW ? mW : []) {
          var mW, NW;
          OW.push(WW)
        }
      }
      return {
        message: WW,
        itemNames: iW([...new Set(OW)])
      }
    }
    const ck = "baf2MultiblockGuide";
    const wk = new Map;
    const tk = function(WW, iW, OW, EW) {
      let {
        localPlayerId: NW
      } = EW;
      const PW = new ZL,
        LW = new il,
        wW = new cl,
        tW = new Pl(wW),
        ZW = (WW, iW) => {
          iW ? tW.observe(WW) : tW.unobserve(WW)
        },
        xW = new Nl,
        lW = new tl(ZW),
        AW = WW => lW.covers(WW),
        bW = new nl;
      let jW;
      const UW = new eP((WW => {
          jW.sendCommand(WW)
        })),
        kW = () => {
          UW.send("baf2questbook")
        },
        sW = WW => function(WW, iW, OW) {
          const mW = {};
          for (const EW of OW) {
            let OW = wk.get(EW);
            void 0 === OW && (OW = WW.getItemStat(iW, EW, "displayName"), wk.set(EW, OW)), mW[EW] = OW
          }
          return mW
        }(jW, NW, WW),
        MW = new pE(kW),
        KW = new Cl((() => ME.d.get("loadingOverlayVisible"))),
        SW = new Kt(UW, MW, KW),
        YW = new Gl,
        yW = new Ek(KW),
        JW = new Nk((WW => {
          KW.show(WW, WW.baf2ToastMs)
        })),
        hW = new OA(ZW),
        HW = new hj(hW),
        nW = new sP,
        oW = new zj,
        dW = new zP,
        gW = new wA({
          read: () => !1 !== Pk.i.getItem(ck),
          write: WW => {
            Pk.i.setItem(ck, WW)
          }
        }),
        DW = new gA(gW),
        VW = new pA(gW),
        pW = new Lb(gW, (WW => function(WW, iW) {
          const OW = IL(iW.w, iW.h, iW.d),
            mW = new Uint8Array(OW);
          for (let EW = 0; EW < OW; EW++) {
            const OW = uA(WW, Wm(iW, Em(iW, EW)));
            mW[EW] = null === OW ? 0 : BL(OW)
          }
          return mW
        }(jW, WW)), FA(UW)),
        fW = new cb(gW, FA(UW)),
        CW = new Nb,
        qW = (WW, iW) => {
          let [OW, mW, EW] = WW;
          CW.answered(iW) || KW.show({
            baf2ToastText: [(0, eW.Vd)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: OW,
                h: mW,
                d: EW
              }
            }, eW.M.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      pW.onSizeNotTaken(qW), fW.onSizeNotTaken(qW);
      const RW = new xb,
        GW = new Rb(gW),
        aW = new Ib,
        rW = new Nj(aW),
        zW = new jj,
        QW = new Hj,
        Wi = new pj(QW),
        ii = new rj(QW),
        Oi = QW.lookSource(),
        mi = new ZU({
          handles: WW => Oi.handles(WW) || WW === vW,
          line: (WW, iW) => WW === vW ? function(WW, iW, OW) {
            var mW;
            const EW = BW(null === (mW = iW.at(OW)) || void 0 === mW ? void 0 : mW.item);
            return null === EW ? {
              key: `${cU}lookFarmEmpty`
            } : {
              key: WW.blockIdToBlockName(WW.getBlockId(OW[0], OW[1], OW[2])).endsWith("|Running") ? `${cU}lookFarmRunning` : `${cU}lookFarmWaiting`,
              keys: {
                mob: XW(EW)
              }
            }
          }(jW, hW, iW) : Oi.line(WW, iW),
          version: () => Oi.version() + hW.version()
        }, (WW => CA(gW.all(), WW, (WW => uA(jW, WW)))), (() => MW.get().tier)),
        Ei = new nb,
        Ni = new yU,
        Pi = new uU,
        Li = uU.blade(),
        ci = new pU,
        wi = new rl,
        ti = new qU,
        xi = new vU,
        li = new eU;
      let Ai = -1 / 0,
        bi = 0,
        ji = -1 / 0,
        Ui = -1 / 0;
      const ki = () => {
          UW.send("baf2islandsclose"), Ui = Date.now()
        },
        si = [];

      function Mi(WW) {
        var iW, OW, mW, EW, NW, PW, cW;
        "core" === (null === (iW = LW.get()) || void 0 === iW ? void 0 : iW.kind) && "core" !== (null === WW || void 0 === WW ? void 0 : WW.kind) && UW.send("baf2coreclose"), "power" === (null === (OW = LW.get()) || void 0 === OW ? void 0 : OW.kind) && "power" !== (null === WW || void 0 === WW ? void 0 : WW.kind) && UW.send("baf2powerclose"), "water" === (null === (mW = LW.get()) || void 0 === mW ? void 0 : mW.kind) && "water" !== (null === WW || void 0 === WW ? void 0 : WW.kind) && UW.send(FW.w), "terminal" === (null === (EW = LW.get()) || void 0 === EW ? void 0 : EW.kind) && "terminal" !== (null === WW || void 0 === WW ? void 0 : WW.kind) && UW.send("baf2terminalclose"), "islands" === (null === (NW = LW.get()) || void 0 === NW ? void 0 : NW.kind) && "islands" !== (null === WW || void 0 === WW ? void 0 : WW.kind) && ki();
        const wW = QW.getStatus();
        "collider" === (null === (PW = LW.get()) || void 0 === PW ? void 0 : PW.kind) && "collider" !== (null === WW || void 0 === WW ? void 0 : WW.kind) && wW && UW.send(uc(wW, "close"));
        const tW = WW => "reactor" === WW || "battery" === WW;
        if (tW(null === (cW = LW.get()) || void 0 === cW ? void 0 : cW.kind) && !tW(null === WW || void 0 === WW ? void 0 : WW.kind)) {
          var ZW, xW, lW;
          const WW = "reactor" === (null === (ZW = LW.get()) || void 0 === ZW ? void 0 : ZW.kind) ? null === (xW = pW.get()) || void 0 === xW ? void 0 : xW.status.baf2RxAt : null === (lW = fW.get()) || void 0 === lW ? void 0 : lW.status.baf2BatAt;
          WW && UW.send(Zi(WW, "close"))
        }
        "quests" === (null === WW || void 0 === WW ? void 0 : WW.kind) && kW(), LW.set(WW), null === WW && YW.release()
      }

      function Ki() {
        (0, sE.m)(), Mi(null)
      }
      let Si = new Set,
        Yi = !1;
      const yi = {
        onCreate: WW => {
          jW = WW, jW.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const iW of Hi) {
            const WW = vi[iW].inputSlots ? JL(PW) : YL(iW, PW, nW, UW);
            si.push((0, UE.c)(iW, WW))
          }
          si.push((0, sE.O)((0, mW.createElement)(mW.Fragment, null, (0, mW.createElement)(ll, {
            controller: lW
          }), (0, mW.createElement)(NA, {
            store: hW
          }), (0, mW.createElement)(lU, {
            store: mi
          }), (0, mW.createElement)(pl, {
            store: MW
          }), (0, mW.createElement)(ql, {
            store: KW
          }), (0, mW.createElement)(Il, {
            store: YW
          }), (0, mW.createElement)(Fl, {
            store: wi
          }), (0, mW.createElement)(Zb, {
            store: RW
          }), (0, mW.createElement)(ab, {
            store: aW
          })), {
            content: (0, mW.createElement)(Ol, {
              commands: UW,
              store: LW,
              power: nW,
              water: dW,
              reactor: pW,
              battery: fW,
              collider: QW,
              terminal: oW,
              quests: MW,
              tutorial: SW,
              close: sE.q,
              leave: () => {
                YW.dropHeld(), (0, sE.m)()
              },
              askIslands: () => {
                Ui = -1 / 0, Ai = Date.now(), bi = UW.send(IW)
              },
              openSocial: () => {
                (0, sE.m)(), ME.d.set({
                  openEverythingMenuName: lO.m.SOCIAL
                })
              },
              showCore: WW => {
                Mi({
                  kind: "core",
                  core: WW
                }), UW.send("baf2corereopen")
              }
            }),
            onClose: () => {
              Mi(null)
            }
          })), si.push((0, kE.y)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              Mi({
                kind: "quests"
              }), (0, sE.H)()
            }
          })), si.push(function(WW, iW) {
            let OW = null,
              mW = () => {};
            const EW = iW => {
              var EW;
              let {
                tutorial: NW,
                tutorialKnown: PW
              } = iW;
              (null === (EW = OW) || void 0 === EW ? void 0 : EW.tutorial) === NW && OW.tutorialKnown === PW || (OW = {
                tutorial: NW,
                tutorialKnown: PW
              }, mW = (0, kE.y)({
                id: "baf2Tutorial",
                order: -1,
                labelKey: st[NW],
                icon: {
                  kind: "icon",
                  name: kt[NW]
                },
                iconOnly: !0,
                disabled: !PW,
                className: "Baf2TutorialButton",
                onClick: () => {
                  WW.next()
                }
              }))
            };
            EW(iW.get());
            const NW = eE.l.subscribe(gE, EW);
            return () => {
              eE.l.unsubscribe(NW), mW()
            }
          }(SW, MW)), Yi = !1, si.push((0, sN.g)((() => {
            null !== zU && QU(zU)
          }))), si.push(Wk()), si.push(function() {
            const WW = eE.l.subscribe(gE, QE),
              iW = () => {
                if (FE) {
                  const WW = FE;
                  FE = null, (0, vE.A)(WW)
                }
              },
              OW = eE.l.subscribe("toggleMenu", (WW => {
                "inventory" === (null === WW || void 0 === WW ? void 0 : WW.split("|")[0]) && iW()
              })),
              mW = eE.l.subscribe("appManagerUpdated|openInGameMenuName", (WW => {
                "inventory" === WW && iW()
              }));
            return () => {
              eE.l.unsubscribe(WW), eE.l.unsubscribe(OW), eE.l.unsubscribe(mW)
            }
          }()), si.push(function(WW) {
            const iW = aU(WW),
              OW = eE.l.subscribe(gE, (WW => {
                IU.follow(WW, iW)
              }));
            return () => {
              eE.l.unsubscribe(OW), IU.clear()
            }
          }(jW)), si.push(function() {
            const WW = document.documentElement,
              iW = (0, ol.d)(".InvenBodyRight", [], (() => {
                const iW = document.querySelector(".InvenBodyRight");
                iW && WW.style.setProperty("--baf2-backpack-width", `${iW.offsetWidth}px`)
              }));
            return () => {
              iW(), WW.style.removeProperty("--baf2-backpack-width")
            }
          }()), si.push(function() {
            const WW = document.documentElement;
            return WW.classList.add(RU), () => {
              WW.classList.remove(RU)
            }
          }()), si.push((() => {
            tW.dispose(), wW.dispose()
          })), bW.start(jW), si.push((() => {
            bW.dispose(), ci.dispose(), HW.dispose()
          }))
        },
        onClose: () => {
          (0, vE.A)([]), FE = null, zE = new Set, zU = null, (0, vE.w)(new Map), wk.clear();
          for (const WW of si) WW();
          MW.dispose(), mi.dispose(), KW.dispose(), YW.dispose(), Ei.dispose(), Ni.dispose(jW), DW.dispose(jW), VW.dispose(jW), GW.dispose(jW), rW.dispose(jW), aW.dispose(), zW.dispose(), gW.dispose(), pW.dispose(), fW.dispose(), RW.dispose(), Pi.dispose(), Li.dispose(), wi.dispose(), Wi.dispose(jW), ii.dispose(jW), QW.dispose(), ti.dispose(), UW.clear()
        },
        onAfterRender: (WW, iW) => {
          var OW, mW, EW;
          try {
            bW.onAfterRender(iW)
          } catch (wW) {
            console.error("Error drawing BAF2 belt items", wW)
          }
          try {
            ci.onAfterRender(jW, NW)
          } catch (wW) {
            console.error("Error drawing BAF2 jet flames", wW)
          }
          Yi || (Yi = !0, UW.send("baf2clientready"));
          const PW = jW.getPositionView(NW);
          lW.onAfterRender(iW, PW, xW), hW.onAfterRender(iW, PW, xW, AW), tW.run(xW), Ei.onAfterRender(jW, PW), Ni.onAfterRender(jW, PW), HW.onAfterRender(jW, PW), DW.onAfterRender(jW, PW), VW.onAfterRender(jW, NW, PW), GW.onAfterRender(jW, NW, PW), rW.onAfterRender(jW, NW), zW.onAfterRender(jW, PW), MW.onPlayerY(PW[1]), Wi.onAfterRender(jW), ii.onAfterRender(jW, NW, PW);
          const cW = jW.getTargetedBlock();
          mi.onAfterRender(jW, NW, null !== (OW = null === cW || void 0 === cW ? void 0 : cW.X3) && void 0 !== OW ? OW : 0, null !== (mW = null === cW || void 0 === cW ? void 0 : cW.position) && void 0 !== mW ? mW : null), ti.onAfterRender(jW, iW), JW.onMining(function(WW, iW) {
            var OW, mW;
            const EW = WW.getMiningBlock();
            if (!EW) return null;
            const NW = (0, uW.f)(WW.getBlockId(EW[0], EW[1], EW[2])),
              PW = null !== (OW = null === (mW = WW.kOW(iW)) || void 0 === mW ? void 0 : mW.name) && void 0 !== OW ? OW : null,
              LW = WW.getItemStat(iW, NW.split("|")[0], "harvestLevel");
            return {
              block: NW,
              x: EW[0],
              y: EW[1],
              z: EW[2],
              BL: PW,
              level: LW
            }
          }(jW, NW), jW.isMining(), performance.now()), "dropMap" === (null === (EW = LW.get()) || void 0 === EW ? void 0 : EW.kind) && Vm(PW[1]) && Ki()
        },
        onPlayerChangeBlock: (WW, iW, OW, mW, EW, PW) => {
          WW === NW && function(WW, iW, OW, mW, EW, NW, PW) {
            const LW = dU(NW, PW, WW.isPlayerCrouching(iW));
            if (null === LW) return;
            if (WW.xH(OW, mW, EW, LW), !WW.getClientOption(iW, "canPickUpItems")) return;
            const cW = cO[LW.split("|")[0]];
            var wW, tW, ZW;
            void 0 !== cW && (wW = WW.getInventoryItems(), tW = cW, ZW = tA.f.maxItemStackSize, WW.getInventoryFreeSlotCount(iW) > 0 || wW.some((WW => null !== WW && WW.name === tW && null !== WW.amount && WW.amount < ZW))) && WW.playSound(iW, (0, Ok.h)("pickUp"), .5, 1)
          }(jW, WW, iW, OW, mW, EW, PW)
        },
        onPlayerAltAction: (WW, iW, OW, mW, EW) => {
          var PW, LW;
          if (!jW.getClientOption(NW, "canPickUpItems")) return;
          const cW = null !== (PW = null === (LW = jW.kOW(NW)) || void 0 === LW ? void 0 : LW.name) && void 0 !== PW ? PW : null,
            wW = function(WW, iW) {
              const OW = WW.split("|")[0];
              return TW(OW) && iW !== cE && "Sky Pack" !== iW ? OW : null
            }(EW, cW);
          if (null !== wW) return void(xi.tap(wW, performance.now()) && rU(jW, NW, wW, MW));
          if (!Xm(cW)) return;
          const tW = li.isNewPress(performance.now()),
            ZW = function(WW, iW, OW) {
              return !Xm(iW) || OW ? null : Fm(WW)
            }(EW, cW, jW.isPlayerCrouching(NW));
          null !== ZW && tW && jW.xH(iW, OW, mW, ZW)
        },
        onPlayerAttemptAltAction: (WW, iW, OW, mW, EW) => {
          if (function(WW, iW, OW, mW, EW) {
              "Workbench" === mW.split("|")[0] && WW.getClientOption(OW, "canCraft") && (IU.open("Workbench", EW.get(), aU(WW)), iW.send("baf2station Workbench"))
            }(jW, UW, NW, EW, MW), ik(jW, NW, EW)) return "preventAction";
          yW.onAltAction(jW, NW, EW)
        },
        onReceivedMessageFromServer: (WW, iW) => {
          if ("baf2MachineStatus" === WW) {
            var OW, mW, EW, wW, tW, ZW, xW, AW, kW, SW, yW, TW, JW, HW, uW, eW;
            const WW = iW,
              NW = WW.baf2MachineTaught;
            PW.set(WW.baf2MachinePos, {
              status: WW.baf2MachineStatus,
              power: null !== (OW = WW.baf2MachinePower) && void 0 !== OW ? OW : null,
              opLeftMs: null !== (mW = WW.baf2MachineOpLeftMs) && void 0 !== mW ? mW : null,
              dug: WW.baf2MachineYield ? {
                item: WW.baf2MachineYield,
                name: sW([WW.baf2MachineYield])[WW.baf2MachineYield]
              } : null,
              powerCap: null !== (EW = WW.baf2MachinePowerCap) && void 0 !== EW ? EW : null,
              powerRates: null !== (wW = WW.baf2MachinePowerRates) && void 0 !== wW ? wW : null,
              coupled: !0 === WW.baf2MachineCoupled,
              couplerLevel: null !== (tW = WW.baf2MachineCoupler) && void 0 !== tW ? tW : 1,
              taught: NW,
              taughtName: NW ? sW([NW])[NW] : null,
              tier: null !== (ZW = WW.baf2MachineTier) && void 0 !== ZW ? ZW : null,
              input: null !== (xW = WW.baf2MachineInput) && void 0 !== xW ? xW : null,
              inertCoupler: null !== (AW = WW.baf2MachineInertCoupler) && void 0 !== AW ? AW : null,
              inputShort: null !== (kW = WW.baf2MachineInputShort) && void 0 !== kW ? kW : null,
              field: null !== (SW = WW.baf2MachineField) && void 0 !== SW ? SW : null,
              noSeeds: !0 === WW.baf2MachineNoSeeds,
              fuelFed: !0 === WW.baf2MachineFuelFed,
              fuelFeeds: !0 === WW.baf2MachineFuelFeeds,
              coreFull: !0 === WW.baf2MachineCoreFull,
              waterUnpowered: !0 === WW.baf2MachineWaterUnpowered,
              powerShort: !0 === WW.baf2MachinePowerShort,
              powerWait: !0 === WW.baf2MachinePowerWait,
              reactorPowered: !0 === WW.baf2MachineReactorPowered,
              fuelLeftMs: null !== (yW = WW.baf2MachineFuelLeftMs) && void 0 !== yW ? yW : null,
              burning: null !== (TW = WW.baf2MachineBurning) && void 0 !== TW ? TW : null,
              fuelKeep: null !== (JW = WW.baf2MachineFuelKeep) && void 0 !== JW ? JW : null,
              water: null !== (HW = WW.baf2MachineWater) && void 0 !== HW ? HW : null,
              farm: null !== (uW = WW.baf2MachineFarm) && void 0 !== uW ? uW : null,
              cryo: null !== (eW = WW.baf2MachineCryo) && void 0 !== eW ? eW : null
            })
          } else if ("baf2StationOpen" === WW) {
            const WW = iW.baf2Station;
            xi.consumeServerOpen(WW, performance.now()) || rU(jW, NW, WW, MW)
          } else if ("baf2Power" === WW) {
            const WW = iW;
            nW.set(WW), WW.baf2PowerOpen && (Mi({
              kind: "power"
            }), (0, sE.H)())
          } else if (WW === FW.y) {
            const WW = iW;
            dW.set(WW), WW.baf2WaterOpen && (Mi({
              kind: "water"
            }), (0, sE.H)())
          } else if ("baf2RxPlans" === WW) {
            var vW, DW, VW;
            const WW = iW;
            gW.zk(WW);
            const OW = new Set(WW.baf2RxPlanList.map((WW => {
              let [iW, OW, mW] = WW;
              return `${iW},${OW},${mW}`
            })));
            RW.retain(OW);
            const mW = null === (vW = LW.get()) || void 0 === vW ? void 0 : vW.kind,
              EW = "reactor" === mW ? null === (DW = pW.get()) || void 0 === DW ? void 0 : DW.status.baf2RxAt : "battery" === mW ? null === (VW = fW.get()) || void 0 === VW ? void 0 : VW.status.baf2BatAt : void 0;
            EW && Si.has(EW.join(",")) && !OW.has(EW.join(",")) && Ki(), Si = OW
          } else if ("baf2RxStatus" === WW) {
            const WW = iW;
            pW.set(WW), WW.baf2RxOpen && (Mi({
              kind: "reactor"
            }), (0, sE.H)())
          } else if ("baf2BatStatus" === WW) {
            const WW = iW;
            fW.set(WW), WW.baf2BatOpen && (Mi({
              kind: "battery"
            }), (0, sE.H)())
          } else if ("baf2RxAlarm" === WW) RW.zk(iW);
          else if ("baf2Bomb" === WW) aW.zk(iW, jW.getPositionView(NW));
          else if ("baf2Fallout" === WW) zW.zk(iW);
          else if ("baf2ColBeams" === WW) QW.onBeams(iW);
          else if ("baf2ColStatus" === WW) {
            const WW = iW;
            var XW, BW;
            if (QW.onStatus(WW), WW.baf2ColOpen) QW.onOpen(null !== (XW = null === (BW = jW.kOW(NW)) || void 0 === BW ? void 0 : BW.name) && void 0 !== XW ? XW : null), Mi({
              kind: "collider"
            }), (0, sE.H)()
          } else if ("baf2Terminal" === WW) {
            const WW = iW;
            var qW;
            if (oW.apply(WW)) WW.baf2TermReset && (Mi({
              kind: "terminal"
            }), (0, sE.H)());
            else "terminal" === (null === (qW = LW.get()) || void 0 === qW ? void 0 : qW.kind) && (LW.set(null), (0, sE.m)())
          } else if ("baf2Core" === WW) {
            var GW;
            const WW = iW;
            if (cW(!0 === WW.baf2CoreNuclear), function(WW, iW) {
                return "core" === (null === WW || void 0 === WW ? void 0 : WW.kind) && iW.baf2CoreTier > WW.core.message.baf2CoreTier
              }(LW.get(), WW)) return void(0, sE.m)();
            if (WW.baf2CoreRefresh && "core" !== (null === (GW = LW.get()) || void 0 === GW ? void 0 : GW.kind)) return;
            Mi({
              kind: "core",
              core: Lk(WW, sW)
            }), WW.baf2CoreRefresh || (0, sE.H)()
          } else if ("baf2WrenchUndo" === WW) {
            const {
              baf2WrenchPos: WW,
              baf2WrenchBlock: OW
            } = iW;
            jW.xH(WW[0], WW[1], WW[2], OW)
          } else if ("baf2Toast" === WW) {
            const WW = iW;
            CW.heard(performance.now(), WW.baf2ToastMs), KW.show(WW)
          } else if ("baf2Area" === WW) YW.arrive(iW, null !== LW.get());
          else if ("baf2Quest" === WW) {
            const WW = iW;
            cW(!0 === WW.baf2QuestNuclear), MW.set(WW, function(WW, iW) {
              var OW, mW, EW, NW, PW;
              const LW = [];
              for (const [, , tW, , , , , , ZW, xW] of WW.baf2QuestSteps) null !== tW && LW.push(tW), LW.push(...null !== ZW && void 0 !== ZW ? ZW : [], ...null !== xW && void 0 !== xW ? xW : []);
              WW.baf2QuestReward && LW.push(WW.baf2QuestReward);
              const cW = null === (OW = WW.baf2QuestSide) || void 0 === OW ? void 0 : OW[2][2];
              cW && LW.push(cW), LW.push(...null !== (mW = null === (EW = WW.baf2QuestSide) || void 0 === EW ? void 0 : EW[2][8]) && void 0 !== mW ? mW : [], ...null !== (NW = null === (PW = WW.baf2QuestSide) || void 0 === PW ? void 0 : PW[2][9]) && void 0 !== NW ? NW : []);
              for (const [tW] of null !== (wW = WW.baf2QuestAlso) && void 0 !== wW ? wW : []) {
                var wW;
                LW.push(tW)
              }
              return iW(LW)
            }(WW, sW)), QU(WW.baf2QuestTier)
          } else if ("baf2Route" === WW) ! function(WW, iW) {
            let {
              baf2RouteCells: OW,
              baf2RouteInto: mW
            } = iW;
            0 !== OW.length && mW ? WW.setRouteChevrons({
              cells: OW.map(((WW, iW) => {
                const [EW, , NW] = function(WW, iW, OW) {
                  const mW = OW + 1 < WW.length ? WW[OW + 1] : iW;
                  return [mW[0] - WW[OW][0], 0, mW[2] - WW[OW][2]]
                }(OW, mW, iW);
                return {
                  pos: WW,
                  way: [EW, NW]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : WW.setRouteChevrons(null)
          }(jW, iW);
          else if ("baf2QuestBook" === WW) MW.setBook(iW);
          else if ("baf2Stalls" === WW) lW.set(iW.baf2StallCells);
          else if (WW === UO.p) bW.onMoves(iW);
          else if (WW === UO.i) bW.onLines(iW);
          else if ("baf2Labels" === WW) hW.zk(iW);
          else if ("baf2DropMap" === WW) Mi({
            kind: "dropMap",
            dropMap: iW
          }), (0, sE.H)();
          else if ("baf2Islands" === WW) {
            var rW, Wi;
            const WW = iW;
            if (UW.syncIslandEdits(WW.baf2IslandsAnswered), !WW.baf2IslandsOpen && "islands" !== (null === (rW = LW.get()) || void 0 === rW ? void 0 : rW.kind)) return;
            if (WW.baf2IslandsOpen) {
              var ii, Oi;
              const iW = ME.d.get("openEverythingMenuName"),
                OW = UW.sent() >= bi,
                mW = "other" !== (li = {
                  askedAtMs: Ai,
                  askSent: OW,
                  reaskedAtMs: ji,
                  nowMs: Date.now(),
                  panel: null !== (ii = null === (Oi = LW.get()) || void 0 === Oi ? void 0 : Oi.kind) && void 0 !== ii ? ii : null,
                  inGameMenu: ME.d.get("openInGameMenuName"),
                  everythingMenu: null === iW ? null : iW === lO.m.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== WW.baf2IslandsFocusInvite
                }).everythingMenu && (!!li.focusInvite || "islands" === li.panel && "clientGame" === li.inGameMenu || !(li.nowMs - li.reaskedAtMs < hw) && (li.askSent && li.nowMs - li.askedAtMs < hw ? "core" === li.panel && "clientGame" === li.inGameMenu && null === li.everythingMenu : "shop" === li.everythingMenu || null === li.inGameMenu));
              if (OW && (Ai = -1 / 0), ji = -1 / 0, !mW) return void ki()
            }
            const OW = (Ei = WW.baf2IslandsOpen, Ni = "islands" === (null === (Wi = LW.get()) || void 0 === Wi ? void 0 : Wi.kind), ti = Ui, Zi = Date.now(), Ei && !Ni && Zi - ti < hw);
            Mi({
              kind: "islands",
              islands: WW,
              arrivedAtMs: Date.now(),
              backToCore: Hw(LW.get())
            }), OW && (Ui = -1 / 0, ji = Date.now(), UW.send(IW)), WW.baf2IslandsOpen && ("clientGame" !== ME.d.get("openInGameMenuName") && (0, KE.f)(), (0, sE.H)())
          } else if ("baf2CoopTransfer" === WW) {
            var mi;
            const WW = iW;
            WW.baf2TransferOn ? (Mi({
              kind: "transfer",
              transfer: WW,
              arrivedAtMs: Date.now()
            }), (0, sE.H)()) : "transfer" === (null === (mi = LW.get()) || void 0 === mi ? void 0 : mi.kind) && (0, sE.m)()
          } else "baf2IslandLeft" === WW ? (YW.dropHeld(), null !== LW.get() && Ki(), "inventory" === ME.d.get("openInGameMenuName") && (0, KE.f)()) : "baf2Arc" === WW ? Pi.zk(jW, iW) : "baf2Blade" === WW ? Li.onBlade(jW, iW) : "baf2JetFlame" === WW ? ci.zk(jW, iW) : "baf2GearPower" === WW && wi.zk(iW);
          var Ei, Ni, ti, Zi, li
        }
      };
      return yi
    }
  },
  39672: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => PW,
      g: () => LW
    });
    var mW = OW(344),
      EW = OW(35231),
      NW = OW(4454);

    function PW(WW) {
      const iW = (0, NW.b)(WW);
      return (0, mW.Wb)(WW, void 0 === iW ? void 0 : (0, EW.displayNameOf)(iW))
    }

    function LW(WW, iW) {
      return WW(PW(iW))
    }
  },
  39701: (WW, iW, OW) => {
    function mW(WW, iW, OW) {
      const mW = new Set,
        EW = new ResizeObserver(OW),
        NW = () => {
          const iW = new Set(document.querySelectorAll(WW));
          let NW = !1;
          for (const WW of mW) iW.has(WW) || (EW.unobserve(WW), mW.delete(WW), NW = !0);
          for (const WW of iW) mW.has(WW) || (EW.observe(WW), PW.observe(WW, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), mW.add(WW));
          NW && OW()
        },
        PW = new MutationObserver((iW => {
          iW.some((WW => "attributes" === WW.type)) && OW(), iW.some((iW => function(WW, iW, OW) {
            if ("childList" !== WW.type) return !1;
            for (const mW of WW.addedNodes)
              if (mW instanceof Element && (mW.matches(iW) || mW.querySelector(iW))) return !0;
            for (const mW of WW.removedNodes)
              if (mW instanceof Element)
                for (const WW of OW)
                  if (mW.contains(WW)) return !0;
            return !1
          }(iW, WW, mW))) && NW()
        }));
      PW.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const LW of iW) EW.observe(LW);
      return window.addEventListener("resize", OW), NW(), OW(), () => {
        EW.disconnect(), PW.disconnect(), window.removeEventListener("resize", OW)
      }
    }
    OW.d(iW, {
      d: () => mW
    })
  },
  39687: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => LW
    });
    var mW = OW(39679);
    const EW = 5,
      NW = [0, 0, 0],
      PW = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function LW(WW, iW, OW, LW, cW, wW) {
      let [tW, ZW, xW] = LW;
      const lW = (tW + .5 - OW[0]) ** 2 + (ZW - OW[1]) ** 2 + (xW + .5 - OW[2]) ** 2;
      let AW = null;
      lW <= wW ** 2 && (NW[0] = tW + .5, NW[1] = ZW + cW, NW[2] = xW + .5, AW = iW.projectWorldPosToViewport(NW));
      const bW = null !== AW && AW.x > -EW && AW.x < 100 + EW && AW.y > -EW && AW.y < 100 + EW;
      return (0, mW.h)(WW, !bW), bW ? (PW.x = AW.x, PW.y = AW.y, PW.distSq = lW, PW) : null
    }
  },
  39677: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => NW,
      e: () => LW,
      g: () => PW
    });
    var mW = OW(3451);
    const EW = "(max-height: 420px), (max-width: 650px)";

    function NW() {
      return (0, mW.b)(EW)
    }

    function PW(WW) {
      return (0, mW.e)(EW, WW)
    }

    function LW() {
      return (0, mW.c)(EW)
    }
  },
  39679: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => PW,
      h: () => NW
    });
    const mW = new WeakMap;

    function EW(WW) {
      let iW = mW.get(WW);
      return iW || (iW = {
        hidden: WW.hidden,
        x: NaN,
        y: NaN
      }, mW.set(WW, iW)), iW
    }

    function NW(WW, iW) {
      const OW = EW(WW);
      OW.hidden !== iW && (OW.hidden = iW, WW.hidden = iW)
    }

    function PW(WW, iW, OW) {
      const mW = EW(WW);
      mW.x === iW && mW.y === OW || (mW.x = iW, mW.y = OW, WW.style.translate = `${iW}vw ${OW}vh`)
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);