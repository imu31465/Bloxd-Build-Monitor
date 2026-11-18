export const id = 224;
export const ids = [224];
export const modules = {
  37489: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => XJ
    });
    var FJ = ZJ(37496);
    const UJ = [0, 0, 0];
    class eJ {
      constructor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UJ;
        this.pool = JJ, this.origin = cJ, this.count = 0, this.free = []
      }
      take() {
        var JJ;
        const cJ = null !== (JJ = this.free.pop()) && void 0 !== JJ ? JJ : this.count++;
        return cJ >= this.pool.qh && this.pool.grow(Math.max(2 * this.pool.qh, cJ + 1)), this.hide(cJ), cJ
      }
      release(JJ) {
        this.hide(JJ), this.free.push(JJ)
      }
      write(JJ, cJ, ZJ, UJ) {
        const {
          records: eJ
        } = this.pool, {
          origin: XJ
        } = this, AJ = JJ * FJ.e;
        eJ[AJ] = cJ - XJ[0], eJ[AJ + 1] = ZJ - XJ[1], eJ[AJ + 2] = UJ - XJ[2], eJ[AJ + FJ.f] = 0, this.pool.markDirty(JJ)
      }
      hide(JJ) {
        this.pool.records[JJ * FJ.e + FJ.f] = 1, this.pool.markDirty(JJ)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class XJ {
      constructor(JJ, cJ, ZJ) {
        this.api = JJ, this.model = cJ, this.initialCapacity = ZJ, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(JJ) {
        let cJ = this.kinds.get(JJ);
        if (void 0 === cJ) {
          const ZJ = this.api.createInstancePool({
            ...this.model,
            item: JJ
          }, this.initialCapacity);
          null === ZJ || void 0 === ZJ || ZJ.setOrigin(this.origin[0], this.origin[1], this.origin[2]), cJ = ZJ && new eJ(ZJ, this.origin), this.kinds.set(JJ, cJ)
        }
        return cJ
      }
      follow(JJ) {
        const {
          origin: cJ
        } = this;
        if (Math.abs(JJ[0] - cJ[0]) <= 512 && Math.abs(JJ[1] - cJ[1]) <= 512 && Math.abs(JJ[2] - cJ[2]) <= 512) return !1;
        cJ[0] = Math.floor(JJ[0]), cJ[1] = Math.floor(JJ[1]), cJ[2] = Math.floor(JJ[2]);
        for (const ZJ of this.kinds.values()) null === ZJ || void 0 === ZJ || ZJ.pool.setOrigin(cJ[0], cJ[1], cJ[2]);
        return !0
      }
      commit() {
        for (const JJ of this.kinds.values()) null === JJ || void 0 === JJ || JJ.commit()
      }
      dispose() {
        for (const JJ of this.kinds.values()) null === JJ || void 0 === JJ || JJ.dispose();
        this.kinds.clear()
      }
    }
  },
  37505: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => XJ,
      i: () => AJ,
      k: () => qJ
    });
    const FJ = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      UJ = [0, 1, 2, 0, 2, 3],
      eJ = [4, 5];

    function XJ(JJ, cJ, ZJ, FJ, UJ) {
      for (let XJ = 0; XJ < 6; XJ++) eJ.includes(XJ) === UJ && jJ(JJ, cJ, ZJ, FJ, XJ)
    }

    function AJ(JJ, cJ, ZJ, FJ) {
      for (let UJ = 0; UJ < 6; UJ++) jJ(JJ, cJ, ZJ, FJ, UJ)
    }

    function qJ(JJ, cJ, ZJ, eJ, XJ) {
      for (let AJ = 0; AJ < 6; AJ++)
        for (const qJ of [0, 1]) {
          const [jJ, YJ, hJ] = [qJ + 2, qJ + 1, (qJ + 3) % 4], DJ = JJ.length / 3;
          for (const [cJ, UJ] of [
              [qJ, YJ],
              [jJ, YJ],
              [jJ, hJ],
              [qJ, hJ]
            ])
            for (let qJ = 0; qJ < 3; qJ++) {
              const jJ = FJ[3 * (4 * AJ + cJ) + qJ],
                YJ = FJ[3 * (4 * AJ + UJ) + qJ];
              JJ.push((jJ + (YJ - jJ) * XJ) * eJ / 2 + ZJ[qJ])
            }
          for (const JJ of UJ) cJ.push(DJ + JJ)
        }
    }

    function jJ(JJ, cJ, ZJ, eJ, XJ) {
      let [AJ, qJ, jJ] = ZJ, [YJ, hJ, DJ] = eJ;
      const sJ = JJ.length / 3;
      for (let UJ = 4 * XJ; UJ < 4 * XJ + 4; UJ++) JJ.push(FJ[3 * UJ] * YJ / 2 + AJ, FJ[3 * UJ + 1] * hJ / 2 + qJ, FJ[3 * UJ + 2] * DJ / 2 + jJ);
      for (const FJ of UJ) cJ.push(sJ + FJ)
    }
  },
  37478: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      default: () => hr
    });
    var FJ = ZJ(47);
    const UJ = [{
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
      eJ = 10;
    let XJ = !0;

    function AJ() {
      return XJ
    }

    function qJ(JJ) {
      XJ = JJ
    }
    const jJ = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function YJ() {
      return XJ ? UJ.length : eJ
    }

    function hJ(JJ) {
      var cJ, ZJ;
      return null !== (cJ = null === (ZJ = UJ[JJ - 1]) || void 0 === ZJ ? void 0 : ZJ.reactorTier) && void 0 !== cJ ? cJ : 0
    }

    function DJ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : hJ(JJ) > 0;
      return ZJ && !XJ ? "hidden" : JJ <= cJ ? "open" : ZJ ? cJ < 5 ? "hidden" : cJ < eJ ? "teaser" : "locked" : "locked"
    }

    function sJ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: FJ,
        n: UJ
      } = fJ(JJ);
      return {
        key: cJ[FJ],
        params: {
          [FJ]: ZJ ? String(UJ) : UJ
        }
      }
    }
    const nJ = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function GJ(JJ, cJ) {
      return hJ(JJ) > 0 && cJ < eJ
    }

    function fJ(JJ) {
      const cJ = hJ(JJ);
      if (cJ > 0) return {
        kind: "atomic",
        n: cJ,
        short: `A${cJ}`
      };
      const ZJ = function(JJ) {
        return JJ >= 6 && JJ <= 10 ? JJ - 6 + 1 : 0
      }(JJ);
      return ZJ > 0 ? {
        kind: "stage",
        n: ZJ,
        short: `S${ZJ}`
      } : {
        kind: "tier",
        n: JJ,
        short: String(JJ)
      }
    }

    function xJ(JJ) {
      return UJ[Math.max(1, Math.min(JJ, UJ.length)) - 1]
    }

    function rJ(JJ, cJ) {
      return JJ < cJ ? function(JJ) {
        var cJ;
        return null !== (cJ = UJ[JJ]) && void 0 !== cJ ? cJ : null
      }(JJ) : null
    }
    const vJ = "baf2coresubmit",
      mJ = "baf2corebankpause",
      QJ = "baf2coredeposit",
      EJ = "baf2corechargepause";

    function VJ(JJ) {
      var cJ;
      return null !== (cJ = JJ.baf2CoreOpen) && void 0 !== cJ ? cJ : eJ
    }
    const KJ = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function yJ(JJ) {
      return KJ.includes(JJ)
    }
    const SJ = (JJ, cJ) => cJ.map((cJ => [cJ, [JJ]])),
      IJ = Object.fromEntries([...SJ("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...SJ("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...SJ("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...SJ("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...SJ("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...SJ("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...SJ("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...SJ("Parts Bench", ["Focus Lens"]), ...SJ("Machine Bench", ["Laser", "Collider"]), ...SJ("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb", "Nova Bomb"]), ...SJ("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...SJ("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...SJ("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...SJ("Tool Bench", ["Mob Cage"]), ...SJ("Tool Bench", ["Pocket Terminal"]), ...SJ("Tool Bench", ["Comet Beacon"]), ...SJ("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function MJ(JJ) {
      var cJ;
      return null !== (cJ = IJ[JJ]) && void 0 !== cJ ? cJ : ["Workbench"]
    }

    function bJ(JJ) {
      return MJ(JJ)[0]
    }
    UJ.slice(1).map(((JJ, cJ) => `Core Tier ${cJ+2}`));
    var wJ = ZJ(8636);
    const WJ = ["on", "hud", "off"];

    function gJ(JJ) {
      return "on" === JJ
    }
    var HJ = ZJ(235);
    const PJ = "Mob Farm",
      kJ = {
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
      pJ = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      dJ = {
        1: 20,
        2: 60,
        3: 120
      },
      zJ = "baf2farmvoid",
      NJ = "Caged ",
      OJ = " Spawner Block";

    function TJ(JJ) {
      return `lifeform:${(0,HJ.be)(JJ)}`
    }

    function CJ(JJ) {
      if (!JJ) return null;
      if (JJ.startsWith(NJ)) {
        const cJ = JJ.slice(6);
        return pJ.includes(cJ) ? cJ : null
      }
      if (JJ.endsWith(OJ)) {
        const cJ = JJ.slice(0, -14);
        return void 0 !== kJ[cJ] ? cJ : null
      }
      return null
    }

    function uJ(JJ) {
      return !0 === JJ.mobFarm
    }

    function iJ(JJ, cJ) {
      return dJ[kJ[cJ]] * JJ.opMs / 1e3
    }
    const RJ = new Map;
    const LJ = "baf2islands",
      aJ = "baf2islandnew";

    function BJ(JJ) {
      const cJ = UJ.findIndex((cJ => cJ.unlocks.includes(JJ)));
      return cJ < 0 ? 1 : cJ + 1
    }

    function tJ(JJ) {
      return Math.floor(JJ).toLocaleString("en-US")
    }
    var oJ = ZJ(37414);
    const lJ = "baf2terminaltake",
      Jc = ["one", "stack", "fill"];

    function cc(JJ, cJ, ZJ) {
      return `${lJ} ${JJ} ${cJ} ${ZJ}`
    }

    function Zc(JJ) {
      const [cJ, ZJ, ...FJ] = JJ.trim().split(" "), UJ = Number(cJ), eJ = function(JJ) {
        if (Jc.includes(JJ)) return JJ;
        const cJ = Number(JJ);
        return /^\d+$/.test(JJ) && Number.isSafeInteger(cJ) && cJ > 0 ? cJ : null
      }(null !== ZJ && void 0 !== ZJ ? ZJ : "");
      return !Number.isSafeInteger(UJ) || UJ <= 0 || null === eJ || 0 === FJ.length ? null : {
        seq: UJ,
        mode: eJ,
        item: FJ.join(" ")
      }
    }
    const Fc = "baf2rx";

    function Uc(JJ, cJ) {
      for (var ZJ = arguments.length, FJ = new Array(ZJ > 2 ? ZJ - 2 : 0), UJ = 2; UJ < ZJ; UJ++) FJ[UJ - 2] = arguments[UJ];
      return [Fc, JJ[0], JJ[1], JJ[2], cJ, ...FJ].join(" ")
    }
    const ec = 2,
      Xc = 4,
      Ac = 8,
      qc = 16,
      jc = 32,
      Yc = 64,
      hc = 128,
      Dc = 256,
      sc = 512,
      nc = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      Gc = [{
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
    const fc = "Biomass",
      xc = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function rc(JJ) {
      return {
        input: fc,
        inputAmount: 1,
        output: JJ,
        outputAmount: 1
      }
    }
    const vc = "baf2synth",
      mc = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      Qc = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      Ec = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      Vc = function(JJ, cJ) {
        return {
          input: JJ,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: cJ,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      Kc = function(JJ, cJ) {
        return {
          ...Vc(JJ, cJ, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      yc = Qc.map((JJ => Kc(JJ, "Biomass", 2))),
      Sc = {
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
          recipes: [Vc("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), Vc("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), Vc("Raw Gold", "Gold Grit", 2), Vc("Messy Stone", "Sand"), Vc("Gravel", "Sand"), Vc("Raw Voltite", "Voltite Dust", 2), Vc("Moonstone", "Moonstone Dust", 4), Vc("Wheat Seeds", "Fertiliser"), Vc("Raw Uranium", "Uranium Grit", 2), Kc("Mossy Messy Stone", "Sand"), ...yc],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [Vc("Iron Grit", "Iron Bar"), Vc("Copper Grit", "Copper Bar"), Vc("Gold Grit", "Gold Bar"), Vc("Raw Iron", "Iron Bar"), Vc("Raw Copper", "Copper Bar"), Vc("Raw Gold", "Gold Bar"), Vc("Sand", "Glass"), Vc("Messy Stone", "Stone"), ...HJ.Cc.map((JJ => Vc(JJ, "Charcoal", 1, 4))), Vc("Wheat", "Bread", 1, 2), ...Qc.map(((JJ, cJ) => Kc(JJ, Ec[cJ])))],
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
          recipes: [Vc("Iron Bar", "Iron Plate"), Vc("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [Vc("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [Vc("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [Vc("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), Vc("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), Vc("Raw Gold", "Gold Grit", 3), Vc("Raw Voltite", "Voltite Dust", 3), Vc("Messy Stone", "Sand", 2), Vc("Gravel", "Sand", 2), Vc("Moonstone", "Moonstone Dust", 6), Vc("Raw Uranium", "Uranium Grit", 3), Kc("Mossy Messy Stone", "Sand", 2), ...yc],
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
          table: nc
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [Vc("Coal", "Diamond", 1, 24), Vc("Voltite Dust", "Moonstone", 1, 12)],
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
        ...oJ.i
      },
      Ic = {
        Crusher: [Vc("Spent Pellet", "Glow Dust"), Vc("Wheat Seeds", "Biomass"), Vc("Wheat", "Biomass"), Vc("Dead Bush", "Biomass"), Vc("Dusk Moss", "Biomass"), Vc("Rotten Flesh", "Biomass"), Vc("Bone", "Biomass", 2)],
        "Shatter Mill": [Vc("Spent Pellet", "Glow Dust"), Vc("Wheat Seeds", "Biomass"), Vc("Wheat", "Biomass"), Vc("Dead Bush", "Biomass"), Vc("Dusk Moss", "Biomass"), Vc("Rotten Flesh", "Biomass"), Vc("Bone", "Biomass", 2), ...HJ.Cc.map((JJ => Vc(JJ, "Biomass")))],
        Smelter: [Vc("Biomass", "Fertiliser", 2)],
        Press: [Vc("Coal", "Graphite", 1, 4)]
      },
      Mc = "Power Coupler",
      bc = "Advanced Coupler",
      wc = "Nova Coupler",
      Wc = [{
        item: Mc,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: bc,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: wc,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const gc = new Map;

    function Hc(JJ) {
      var cJ, ZJ;
      return null !== (cJ = null !== (ZJ = JJ.fuelSlot) && void 0 !== ZJ ? ZJ : JJ.couplerSlot) && void 0 !== cJ ? cJ : null
    }

    function Pc(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!JJ.couplable) throw new Error(`${JJ.kind} takes no Power Coupler`);
      let ZJ = gc.get(JJ);
      ZJ || (ZJ = [], gc.set(JJ, ZJ));
      let FJ = ZJ[cJ];
      if (!FJ) {
        var UJ;
        const {
          divisor: eJ,
          powerPerS: XJ
        } = Wc[cJ - 1], AJ = JJ.opMs / eJ, qJ = void 0 !== JJ.fluidMade || void 0 !== JJ.cryoMade ? JJ.powerPerOp : XJ * AJ / 1e3;
        FJ = {
          ...JJ,
          fuelSlot: null,
          couplerSlot: null !== (UJ = Hc(JJ)) && void 0 !== UJ ? UJ : void 0,
          opMs: AJ,
          powerPerOp: qJ,
          coupled: !0
        }, cJ > 1 && (FJ = {
          ...FJ,
          couplerLevel: cJ
        }), ZJ[cJ] = FJ
      }
      return FJ
    }
    const kc = new Map;
    const pc = new Map;

    function dc(JJ, cJ) {
      if (null === cJ || (ZJ = cJ, !xc.includes(ZJ))) return JJ;
      var ZJ;
      let FJ = pc.get(cJ);
      return FJ || (FJ = {
        ...JJ,
        recipes: [rc(cJ)]
      }, pc.set(cJ, FJ)), FJ
    }

    function zc(JJ) {
      return !0 === JJ.synth
    }
    const Nc = (JJ, cJ, ZJ, FJ) => ({
        output: JJ,
        outputAmount: cJ,
        tier: ZJ,
        inputs: FJ.map((JJ => {
          let [cJ, ZJ] = JJ;
          return {
            item: cJ,
            amount: ZJ
          }
        }))
      }),
      Oc = Object.fromEntries([Nc("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), Nc("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), Nc("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), Nc("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), Nc("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), Nc("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), Nc("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), Nc("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), Nc("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), Nc("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), Nc("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), Nc("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), Nc("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), Nc("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), Nc("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), Nc("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), Nc("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), Nc("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), Nc("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), Nc("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), Nc("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), Nc("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), Nc("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), Nc("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), Nc("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), Nc("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), Nc("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), Nc("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), Nc("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), Nc("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((JJ => [JJ.output, JJ]))),
      Tc = new Map;

    function Cc(JJ, cJ) {
      let ZJ = Sc[JJ];
      if (cJ.atomic && (ZJ = function(JJ) {
          const cJ = Ic[JJ.kind];
          if (!cJ) return JJ;
          let ZJ = kc.get(JJ.kind);
          if (!ZJ) {
            const FJ = new Set(cJ.map((JJ => JJ.input))),
              UJ = JJ.recipes.filter((JJ => !FJ.has(JJ.input)));
            ZJ = {
              ...JJ,
              recipes: [...UJ, ...cJ]
            }, kc.set(JJ.kind, ZJ)
          }
          return ZJ
        }(ZJ)), ZJ.synth) return dc(ZJ, cJ.taught);
      if (cJ.coupled && ZJ.couplable) return Pc(ZJ, cJ.level);
      const FJ = ZJ.inputSlots && null !== cJ.taught ? Oc[cJ.taught] : void 0;
      if (!FJ) return ZJ;
      const UJ = `${JJ}|${FJ.output}`;
      let eJ = Tc.get(UJ);
      return eJ || (eJ = {
        ...ZJ,
        bench: FJ
      }, Tc.set(UJ, eJ)), eJ
    }
    const uc = ["Diamond", "Moonstone"];

    function ic(JJ) {
      return new Set(JJ.flatMap((JJ => JJ.bonus ? [JJ.output, JJ.bonus.item] : [JJ.output])).filter((JJ => !uc.includes(JJ))))
    }
    const Rc = Object.values(Sc).flatMap((JJ => JJ.recipes));
    ic(Rc.filter((JJ => !0 !== JJ.nuclear))), ic([...Rc.filter((JJ => !0 === JJ.nuclear)), ...Object.values(Ic).flat()]);

    function Lc(JJ) {
      return null === JJ.inputSlot && void 0 === JJ.inputSlots && void 0 === JJ.powerMade && void 0 === JJ.fluidMade && !JJ.treeCutter && void 0 === JJ.table
    }

    function ac(JJ) {
      return !0 === JJ.treeCutter
    }
    const Bc = ["Voltite Cell"];

    function tc(JJ) {
      var cJ, ZJ;
      return null !== (cJ = null === (ZJ = JJ.fuels) || void 0 === ZJ ? void 0 : ZJ.some((JJ => Bc.includes(JJ)))) && void 0 !== cJ && cJ
    }
    const oc = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(HJ.Cc.map((JJ => [JJ, 8e3]))),
        ...Object.fromEntries(HJ.nd.map((JJ => [JJ, 2e3]))),
        "Voltite Cell": 12e4
      },
      lc = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      JZ = {
        "Uranium Deposit": 4e3
      };

    function cZ(JJ) {
      var cJ;
      return null !== (cJ = Object.keys(lc).find((cJ => lc[cJ] === JJ))) && void 0 !== cJ ? cJ : null
    }

    function ZZ(JJ) {
      return mc.includes(JJ)
    }

    function FZ(JJ) {
      return !0 !== JJ.nuclear || AJ()
    }
    var UZ = ZJ(227);
    var eZ = ZJ(8715),
      XZ = ZJ(8652),
      AZ = ZJ(8717),
      qZ = ZJ(8710);
    const jZ = "Reactor Controller",
      YZ = "Reactor Port",
      hZ = "Battery Cell",
      DZ = ["fuel", "water", "waste"],
      sZ = {
        fuel: YZ,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      nZ = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      GZ = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      fZ = "Reactor Frame",
      xZ = "Reactor Glass",
      rZ = {
        edge: [fZ],
        cap: [xZ, YZ],
        wall: [xZ, YZ],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [jZ]
      },
      vZ = {
        edge: [hZ],
        cap: [hZ],
        wall: [hZ],
        inside: [hZ],
        ctrl: [hZ]
      },
      mZ = ["edge", "cap", "wall", "inside"],
      QZ = ["Reactor Slag"];

    function EZ(JJ) {
      return QZ.includes(VZ(JJ))
    }

    function VZ(JJ) {
      const cJ = JJ.indexOf("|");
      return cJ < 0 ? JJ : JJ.slice(0, cJ)
    }

    function KZ(JJ) {
      return VZ(JJ) === jZ ? "reactor" : null
    }

    function yZ(JJ) {
      return VZ(JJ) !== YZ ? null : JJ.endsWith("|Water") ? "water" : JJ.endsWith("|Waste") ? "waste" : "fuel"
    }

    function SZ(JJ) {
      const cJ = yZ(JJ);
      return null === cJ ? null : bZ(sZ[DZ[(DZ.indexOf(cJ) + 1) % DZ.length]], function(JJ) {
        return JJ.includes(IZ)
      }(JJ))
    }
    const IZ = "|meta|rot1|Formed",
      MZ = new Set([fZ, xZ, YZ]);

    function bZ(JJ, cJ) {
      var ZJ;
      const FJ = VZ(JJ);
      if (!MZ.has(FJ)) return JJ;
      if (FJ !== YZ) return cJ ? FJ + IZ : FJ;
      const UJ = null !== (ZJ = yZ(JJ)) && void 0 !== ZJ ? ZJ : "fuel";
      return cJ ? "fuel" === UJ ? FJ + IZ : `${FJ}${IZ}|${"water"===UJ?"Water":"Waste"}` : sZ[UJ]
    }

    function wZ(JJ, cJ) {
      const ZJ = BZ(JJ, cJ);
      if ("Air" === ZJ) return !1;
      const FJ = "reactor" === JJ ? rZ : vZ;
      return mZ.some((JJ => FJ[JJ].includes(ZJ))) || "reactor" === JJ && QZ.includes(ZJ)
    }

    function WZ(JJ) {
      return GZ[JJ]
    }

    function gZ(JJ) {
      var cJ;
      return null !== (cJ = nZ[JJ]) && void 0 !== cJ ? cJ : nZ[1]
    }

    function HZ(JJ) {
      const [cJ, , ZJ] = gZ(JJ);
      return [ZJ, 0, -cJ]
    }

    function PZ(JJ, cJ, ZJ, FJ, UJ, eJ) {
      return {
        ctrl: [JJ[0], JJ[1], JJ[2]],
        rot: nZ[cJ] ? cJ : 1,
        w: ZJ,
        h: FJ,
        d: UJ,
        cu: eJ[0],
        cv: eJ[1]
      }
    }

    function kZ(JJ, cJ) {
      return "reactor" === JJ ? [Math.floor((cJ - 1) / 2), 0] : [0, 0]
    }

    function pZ(JJ, cJ, ZJ, FJ, UJ) {
      let eJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : JJ.rot;
      if (ZJ === JJ.w && FJ === JJ.h && UJ === JJ.d && eJ === JJ.rot) return JJ;
      const [XJ] = kZ(cJ, JJ.w);
      if (JJ.cu === XJ && JJ.cv <= 1) return PZ(JJ.ctrl, eJ, ZJ, FJ, UJ, kZ(cJ, ZJ));
      const AJ = (JJ, cJ) => Math.max(1, Math.min(cJ, JJ));
      return PZ(JJ.ctrl, eJ, ZJ, FJ, UJ, [AJ(JJ.cu, ZJ - 2), 0 === JJ.cv ? 0 : AJ(JJ.cv, FJ - 2)])
    }
    const dZ = 11,
      zZ = 2 * dZ + 1;
    new Uint8Array(zZ * zZ * zZ);

    function NZ(JJ) {
      return JJ.w * JJ.h * JJ.d
    }

    function OZ(JJ) {
      const cJ = HZ(JJ.rot);
      return [JJ.ctrl[0] - cJ[0] * JJ.cu, JJ.ctrl[1] - JJ.cv, JJ.ctrl[2] - cJ[2] * JJ.cu]
    }

    function TZ(JJ) {
      return JJ.cv * JJ.d * JJ.w + JJ.cu
    }

    function CZ(JJ, cJ) {
      const ZJ = cJ % JJ.w,
        FJ = Math.floor(cJ / JJ.w) % JJ.d;
      return [ZJ, Math.floor(cJ / (JJ.w * JJ.d)), FJ]
    }

    function uZ(JJ, cJ) {
      const [ZJ, FJ, UJ] = CZ(JJ, cJ), eJ = OZ(JJ), XJ = gZ(JJ.rot), AJ = HZ(JJ.rot);
      return [eJ[0] + AJ[0] * ZJ - XJ[0] * UJ, eJ[1] + FJ, eJ[2] + AJ[2] * ZJ - XJ[2] * UJ]
    }

    function iZ(JJ, cJ) {
      const ZJ = OZ(JJ),
        FJ = gZ(JJ.rot),
        UJ = HZ(JJ.rot),
        eJ = cJ[0] - ZJ[0],
        XJ = cJ[2] - ZJ[2],
        AJ = eJ * UJ[0] + XJ * UJ[2],
        qJ = -(eJ * FJ[0] + XJ * FJ[2]),
        jJ = cJ[1] - ZJ[1];
      return AJ < 0 || AJ >= JJ.w || jJ < 0 || jJ >= JJ.h || qJ < 0 || qJ >= JJ.d ? -1 : (jJ * JJ.d + qJ) * JJ.w + AJ
    }

    function RZ(JJ, cJ) {
      if (cJ === TZ(JJ)) return "ctrl";
      const [ZJ, FJ, UJ] = CZ(JJ, cJ), eJ = 0 === FJ || FJ === JJ.h - 1, XJ = Number(0 === ZJ || ZJ === JJ.w - 1) + Number(eJ) + Number(0 === UJ || UJ === JJ.d - 1);
      return XJ >= 2 ? "edge" : 1 === XJ ? eJ ? "cap" : "wall" : "inside"
    }

    function LZ(JJ, cJ) {
      const [ZJ, FJ, UJ] = CZ(JJ, cJ);
      return 0 === ZJ || ZJ === JJ.w - 1 || 0 === FJ || FJ === JJ.h - 1 || 0 === UJ || UJ === JJ.d - 1 ? -1 : ((FJ - 1) * (JJ.d - 2) + (UJ - 1)) * (JJ.w - 2) + (ZJ - 1)
    }

    function aZ(JJ, cJ) {
      const ZJ = JJ.w - 2,
        FJ = JJ.d - 2,
        UJ = cJ % ZJ + 1,
        eJ = Math.floor(cJ / ZJ) % FJ + 1;
      return ((Math.floor(cJ / (ZJ * FJ)) + 1) * JJ.d + eJ) * JJ.w + UJ
    }

    function BZ(JJ, cJ) {
      const ZJ = VZ(cJ);
      return "reactor" === JJ && ZJ === jZ ? fZ : ZJ
    }

    function tZ(JJ, cJ, ZJ) {
      const FJ = "ctrl" === cJ ? VZ(ZJ) : BZ(JJ, ZJ);
      return ("reactor" === JJ ? rZ : vZ)[cJ].includes(FJ) ? "ok" : "Air" === FJ ? "missing" : wZ(JJ, ZJ) ? "wrong" : "blocked"
    }

    function oZ(JJ, cJ) {
      return "battery" === JJ ? hZ : "inside" === cJ ? null : function(JJ, cJ) {
        if ("inside" === cJ || "ctrl" === cJ || "battery" === JJ) return null;
        return "edge" === cJ ? fZ : xZ
      }(JJ, cJ)
    }
    const lZ = {
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
      JF = "Collider",
      cF = "Laser",
      ZF = "Star Alloy",
      FF = "Glow Dust",
      UF = [JF, "_Collider Focus"];

    function eF(JJ) {
      return UF.indexOf(VZ(JJ))
    }

    function XF(JJ) {
      return VZ(JJ) === cF
    }

    function AF(JJ) {
      return [
        [JJ[0], JJ[1], JJ[2]],
        [JJ[0], JJ[1] + 1, JJ[2]]
      ]
    }
    const qF = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function jF(JJ, cJ, ZJ) {
      const FJ = qF[cJ];
      return [JJ[0] + FJ[0] * ZJ, JJ[1], JJ[2] + FJ[2] * ZJ]
    }

    function YF(JJ, cJ) {
      if (cJ[1] !== JJ[1]) return null;
      const ZJ = cJ[0] - JJ[0],
        FJ = cJ[2] - JJ[2];
      if (0 !== ZJ === (0 !== FJ)) return null;
      const UJ = Math.abs(ZJ + FJ);
      if (UJ > lZ.LASER_D) return null;
      return {
        dir: FJ < 0 ? 0 : ZJ > 0 ? 1 : FJ > 0 ? 2 : 3,
        DA: UJ
      }
    }

    function hF(JJ, cJ, ZJ) {
      const FJ = cJ => Math.abs(JJ[0] - cJ[0]) <= 1 && Math.abs(JJ[1] - cJ[1]) <= 1;
      return FJ(cJ) || FJ(ZJ)
    }

    function DF(JJ, cJ) {
      return function(JJ, cJ, ZJ, FJ) {
        return [0, 1, 2, 3].map((UJ => {
          for (let eJ = 1; eJ <= lZ.LASER_D; eJ++) {
            const XJ = jF(JJ, UJ, eJ);
            if (hF([XJ[0], XJ[2]], cJ, ZJ) || !FJ(XJ)) return !1
          }
          return !0
        }))
      }(AF(JJ)[1], cJ.spawnXZ, cJ.coreXZ, (JJ => JJ[1] >= eZ.p && JJ[1] < eZ.p + eZ.r && JJ[0] >= cJ.minXZ[0] && JJ[0] <= cJ.maxXZ[0] && JJ[2] >= cJ.minXZ[1] && JJ[2] <= cJ.maxXZ[1]))
    }
    const sF = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function nF(JJ) {
      return Math.max(48 + 16 * JJ, xJ(JJ).machineAllowance)
    }
    const GF = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function fF(JJ) {
      const cJ = JJ.split("|")[0];
      return GF.includes(cJ) ? "Solar Panel" : cJ === AZ.d ? "Fluid Pipe" : eF(cJ) >= 0 ? "Collider" : (ZJ = cJ, sF.includes(ZJ) ? cJ : null);
      var ZJ
    }
    const xF = "buildAFactory2Game:solarPanelDescription";
    const rF = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function vF(JJ, cJ) {
      var ZJ;
      return null !== (ZJ = rF.find((ZJ => {
        var FJ;
        return (null !== (FJ = JJ.level(ZJ)) && void 0 !== FJ ? FJ : 0) >= cJ
      }))) && void 0 !== ZJ ? ZJ : null
    }
    const mF = "buildAFactory2Game:";
    let QF = null;
    const EF = {
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
      VF = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      KF = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      yF = {
        "Loot Chest": `${mF}lookRuinChestName`
      };

    function SF(JJ) {
      return "object" === typeof JJ && null !== JJ && "translationKey" in JJ && "string" === typeof JJ.translationKey ? JJ.translationKey : null
    }

    function IF(JJ, cJ) {
      var ZJ;
      return null !== (ZJ = SF(JJ.displayName(cJ))) && void 0 !== ZJ ? ZJ : `item:${(0,HJ.be)(cJ)}`
    }

    function MF(JJ, cJ) {
      var ZJ, FJ, UJ, eJ;
      let XJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : cJ;
      if ("Solar Panel" === fF(cJ)) return {
        name: SF(JJ.displayName("Solar Panel")),
        detail: xF,
        detailItem: null
      };
      const qJ = cJ.endsWith(" Ore"),
        jJ = (QF ??= new Set([...Object.keys((0, XZ.f)()), ...Object.keys((0, AZ.s)())].map((JJ => JJ.split("|")[0]))), QF).has(cJ),
        YJ = qJ || jJ ? null : function(JJ) {
          var cJ;
          return JJ.endsWith(" Log") && !JJ.startsWith("Barkless ") ? "lookLog" : JJ.endsWith(" Sapling") ? "lookSapling" : JJ.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (cJ = EF[JJ]) && void 0 !== cJ ? cJ : null
        }(cJ);
      if (!JJ.isBlock(cJ) || !qJ && !jJ && null === YJ) return null;
      const hJ = null !== (ZJ = null !== (FJ = yF[cJ]) && void 0 !== FJ ? FJ : SF(null !== (UJ = JJ.displayName(XJ)) && void 0 !== UJ ? UJ : JJ.displayName(cJ))) && void 0 !== ZJ ? ZJ : `item:${(0,HJ.be)(cJ)}`;
      if (null !== YJ) return {
        name: hJ,
        detail: `${mF}${YJ}`,
        detailItem: null
      };
      const DJ = null !== (eJ = VF[cJ]) && void 0 !== eJ ? eJ : AJ() ? KF[cJ] : void 0;
      if (jJ && void 0 !== DJ) return {
        name: hJ,
        detail: `${mF}${DJ}`,
        detailItem: null
      };
      const sJ = lc[cJ];
      if (void 0 !== sJ) return {
        name: hJ,
        detail: `${mF}lookDeposit`,
        detailItem: IF(JJ, sJ)
      };
      const nJ = JJ.harvestLevel(cJ);
      if (qJ && "rock" === JJ.harvestType(cJ) && 0 !== nJ) {
        const cJ = vF(JJ, null !== nJ && void 0 !== nJ ? nJ : 0);
        if (cJ === rF[0]) return {
          name: hJ,
          detail: `${mF}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== cJ) return {
          name: hJ,
          detail: `${mF}lookPickaxe`,
          detailItem: IF(JJ, cJ)
        }
      }
      return {
        name: hJ,
        detail: SF(JJ.description(cJ)),
        detailItem: null
      }
    }

    function bF(JJ) {
      return JJ < eZ.p - 24
    }
    const wF = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const WF = "Wrench",
      gF = "Nova Wrench";

    function HF(JJ) {
      return JJ === WF || JJ === gF
    }
    const PF = [...eZ.I, "Belt Lift", "Belt Drop"];
    const kF = ["Belt Lift", "Belt Drop"],
      pF = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function dF(JJ) {
      return JJ.split("|")[0]
    }

    function zF(JJ) {
      const cJ = /\|rot(\d)/.exec(JJ);
      return cJ ? Number(cJ[1]) : 1
    }

    function NF(JJ) {
      return JJ % 4 + 1
    }

    function OF(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === cJ && "" === ZJ ? JJ : `${JJ}|meta|rot${cJ}${ZJ}`
    }

    function TF(JJ) {
      return dF(JJ) === eZ.z ? (0, eZ.O)(JJ) ? "gateRight" : "gateLeft" : (0, eZ.S)(JJ)
    }

    function CF(JJ) {
      const cJ = dF(JJ),
        ZJ = zF(JJ);
      if (eZ.I.includes(cJ)) return (0, eZ.J)(cJ, NF(ZJ), null);
      if (cJ === eZ.i) return (0, eZ.X)(NF(ZJ), (0, eZ.Q)(JJ));
      if (cJ === eZ.A) {
        const FJ = pF[(0, eZ.S)(JJ)];
        return null === FJ ? OF(cJ, NF(ZJ)) : OF(cJ, ZJ, eZ.D[FJ])
      }
      return cJ === eZ.z ? (0, eZ.O)(JJ) ? OF(cJ, NF(ZJ)) : OF(cJ, ZJ, eZ.l) : qZ.e.includes(cJ) && !kF.includes(cJ) || ZZ(cJ) ? OF(cJ, NF(ZJ)) : null
    }

    function uF(JJ) {
      return qZ.e.includes(JJ) || ZZ(JJ) || null !== fF(JJ)
    }

    function iF(JJ) {
      return "Solar Panel" === fF(JJ)
    }
    const RF = "buildAFactory2Game:",
      LF = {
        leftFront: `${RF}lookSplitDetail_leftFront`,
        frontRight: `${RF}lookSplitDetail_frontRight`,
        gateRight: `${RF}lookGateDetail_gateRight`
      };

    function aF(JJ, cJ) {
      var ZJ;
      let FJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const UJ = TF(JJ),
        eJ = null === UJ ? null : `${RF}${UJ.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${UJ}`,
        XJ = null === UJ ? null : null !== (ZJ = LF[UJ]) && void 0 !== ZJ ? ZJ : null;
      if (HF(cJ) && FJ) {
        const ZJ = dF(JJ);
        return cJ === gF && AJ() && function(JJ) {
          return PF.includes(dF(JJ))
        }(JJ) ? {
          mode: eJ,
          detail: XJ,
          next: `${RF}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: eJ,
          detail: XJ,
          next: uF(ZJ) && !iF(ZJ) ? `${RF}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const qJ = HF(cJ) ? CF(JJ) : null;
      if (null === qJ) return {
        mode: eJ,
        detail: XJ,
        next: null,
        nextState: null
      };
      const jJ = TF(qJ);
      return null === jJ || zF(qJ) !== zF(JJ) ? {
        mode: eJ,
        detail: XJ,
        next: `${RF}lookWrenchTurn`,
        nextState: null
      } : {
        mode: eJ,
        detail: XJ,
        next: `${RF}lookWrenchNext`,
        nextState: `${RF}lookWrenchState_${jJ}`
      }
    }
    const BF = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
    const tF = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function oF(JJ) {
      return [0, 1, 2, 3].map((cJ => 0 !== (JJ & 1 << cJ)))
    }

    function lF(JJ) {
      const cJ = [];
      for (let ZJ = 8; ZJ + 2 < JJ.length; ZJ += 3) cJ.push([JJ[ZJ], JJ[ZJ + 1], JJ[ZJ + 2]]);
      return {
        focus: [JJ[0], JJ[1], JJ[2]],
        lasers: oF(JJ[3]),
        open: oF(JJ[4]),
        live: oF(JJ[5]),
        on: 1 === JJ[6],
        state: tF[JJ[7]],
        blockers: cJ
      }
    }
    const JU = "Arc Caster",
      cU = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      ZU = (Object.values(cU), "Jet Chestplate"),
      FU = "Nova Jet Chestplate",
      UU = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      eU = Object.values(UU);

    function XU(JJ, cJ, ZJ) {
      return Math.min(function(JJ) {
        return AJ() && hJ(JJ) >= 5 ? 20 : 10
      }(ZJ), Math.floor(function(JJ, cJ) {
        return Math.max(0, JJ) + (AJ() ? Math.max(0, cJ) : 0)
      }(JJ, cJ) / 5))
    }

    function AU(JJ, cJ, ZJ) {
      const FJ = XU(cJ, ZJ, JJ),
        UJ = hJ(JJ),
        eJ = (UJ >= 3 ? 55 : UJ >= 1 ? 50 : JJ >= 8 ? 45 : 30) + FJ,
        XJ = Math.max(100 + FJ, 2 * eJ);
      return {
        arcDamage: eJ,
        arcPierce: JJ >= 7 ? 2 : 1,
        arcChain: JJ >= 10,
        barrierMax: (UJ >= 4 ? 100 : UJ >= 2 ? 90 : JJ >= 9 ? 80 : JJ >= 6 ? 60 : 40) + 5 * FJ,
        barrierRegenPerS: UJ >= 5 ? 20 : JJ >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * FJ,
        novaShieldRegenPerS: 32,
        bladeDamage: XJ,
        bladePunch: Math.round(.5 * XJ),
        forgeRank: FJ
      }
    }
    const qU = {
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
    var jU = ZJ(35848),
      YU = ZJ(35665),
      hU = ZJ(35661),
      DU = ZJ(13),
      sU = ZJ(1528),
      nU = ZJ(926),
      GU = ZJ.n(nU);

    function fU(JJ) {
      return !0 === JJ.field
    }
    const xU = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function rU(JJ) {
      return xU.has(JJ) ? `buildAFactory2Game:itemPlural_${(0,HJ.be)(JJ)}` : null
    }
    var vU = ZJ(1086),
      mU = ZJ(942),
      QU = ZJ(1688),
      EU = ZJ(1675),
      VU = ZJ(35834),
      KU = ZJ(35841),
      yU = ZJ(17),
      SU = ZJ(35828);
    const IU = "baf2QuestView",
      MU = "baf2PlayerY",
      bU = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class wU {
      constructor() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
        this.requestBook = JJ, this.view = {
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
      set(JJ, cJ) {
        var ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ;
        const YJ = JSON.stringify(JJ.baf2QuestName) === JSON.stringify(this.view.name),
          hJ = new Set(this.view.rows.filter((JJ => JJ.done)).map((JJ => JJ.id))),
          DJ = new Set(this.view.rows.filter((JJ => JJ.justFinished)).map((JJ => JJ.id))),
          sJ = JJ.baf2QuestSide,
          nJ = null !== sJ && !0 === JJ.baf2QuestSideFocus;
        let GJ = !1,
          fJ = 0;
        const xJ = JJ.baf2QuestSteps.map((JJ => {
            const cJ = zU(JJ, bU.has(JJ[0]) ? JJ[0] : "" + fJ++),
              ZJ = YJ && cJ.done && !hJ.has(cJ.id);
            return cJ.justFinished = ZJ || YJ && cJ.done && DJ.has(cJ.id), GJ ||= ZJ, cJ
          })),
          rJ = dU(xJ);
        rJ >= 0 && !nJ && (xJ[rJ].current = !0);
        const vJ = !YJ && null !== JJ.baf2QuestName,
          mJ = JSON.stringify(sJ && [sJ[0], sJ[1]]),
          QJ = mJ === JSON.stringify(null !== (ZJ = null === (FJ = this.view.side) || void 0 === FJ ? void 0 : FJ.name) && void 0 !== ZJ ? ZJ : null),
          EJ = null !== sJ && !this.sidesSeen.has(mJ);
        EJ && this.sidesSeen.add(mJ), this.serverTutorial = null !== (UJ = JJ.baf2QuestTutorial) && void 0 !== UJ ? UJ : "on", (null !== (eJ = JJ.baf2QuestTutorialSeq) && void 0 !== eJ ? eJ : 0) >= this.pickSeq && this.endPick();
        const VJ = !YJ || !QJ || JJ.baf2QuestTier !== this.view.tier;
        this.view = {
          name: JJ.baf2QuestName,
          rows: xJ,
          reward: JJ.baf2QuestReward,
          goal: JJ.baf2QuestGoal,
          pulse: this.view.pulse + (GJ || vJ ? 1 : 0),
          itemNames: cJ,
          side: sJ && {
            name: [sJ[0], sJ[1]],
            row: {
              ...zU(sJ[2], "side"),
              current: nJ
            },
            goal: null !== (XJ = sJ[3]) && void 0 !== XJ ? XJ : null
          },
          sideCameUpAt: EJ ? Date.now() : this.view.sideCameUpAt,
          tier: JJ.baf2QuestTier,
          core: JJ.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (AJ = JJ.baf2QuestAlso) && void 0 !== AJ ? AJ : [],
          depth: null !== (qJ = JJ.baf2QuestDepth) && void 0 !== qJ ? qJ : null,
          tutorial: null !== (jJ = this.pickedTutorial) && void 0 !== jJ ? jJ : this.serverTutorial,
          tutorialKnown: !0
        }, this.Uf(), GJ && this.scheduleClear(), VJ && this.requestBook()
      }
      setTutorial(JJ) {
        return this.endPick(), this.pickedTutorial = JJ, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.Uf()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: JJ
        }, this.Uf(), this.pickSeq
      }
      onPlayerY(JJ) {
        const cJ = Math.floor(JJ);
        cJ !== this.playerY && (this.playerY = cJ, this.view.depth && yU.i.Uf(MU, cJ))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(JJ) {
        this.view = {
          ...this.view,
          chapters: JJ.baf2BookChapters
        }, this.Uf()
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
            rows: this.view.rows.map((JJ => JJ.justFinished ? {
              ...JJ,
              justFinished: !1
            } : JJ))
          }, this.Uf()
        }), 2400)
      }
      Uf() {
        yU.i.Uf(IU, this.view, !0)
      }
    }

    function WU(JJ, cJ) {
      return JJ.sideCameUpAt > 0 && cJ - JJ.sideCameUpAt < 2400
    }

    function gU(JJ) {
      return (null === JJ.name || HU(JJ)) && null === JJ.side && null !== JJ.chapters
    }

    function HU(JJ) {
      var cJ;
      return "quest_forgeOngoing" === (null === (cJ = JJ.name) || void 0 === cJ ? void 0 : cJ[0])
    }

    function PU(JJ) {
      return JJ.filter((JJ => !bU.has(JJ.key)))
    }

    function kU(JJ) {
      return JJ.key.startsWith("stepCraft")
    }

    function pU(JJ, cJ) {
      const ZJ = new Set,
        FJ = JJ.side ? [...JJ.rows, JJ.side.row] : JJ.rows;
      for (const eJ of FJ)
        if (!eJ.done) {
          !eJ.item || cJ && !kU(eJ) || ZJ.add(eJ.item);
          for (const [JJ, cJ, FJ] of null !== (UJ = eJ.chips) && void 0 !== UJ ? UJ : []) {
            var UJ;
            cJ < FJ && ZJ.add(JJ)
          }
        } return ZJ
    }

    function dU(JJ) {
      const cJ = JJ.findIndex((JJ => !JJ.done && !JJ.away));
      return cJ >= 0 ? cJ : JJ.findIndex((JJ => !JJ.done))
    }

    function zU(JJ, cJ) {
      let [ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ, YJ, hJ] = JJ;
      return {
        id: cJ,
        key: ZJ,
        params: FJ,
        item: UJ,
        amount: eJ,
        total: XJ,
        done: AJ,
        chips: null !== qJ && void 0 !== qJ ? qJ : null,
        current: !1,
        away: !0 === jJ,
        madeFor: null !== YJ && void 0 !== YJ ? YJ : [],
        also: null !== hJ && void 0 !== hJ ? hJ : [],
        justFinished: !1
      }
    }
    const NU = "baf2QuestItems",
      OU = new Set;
    let TU = new Set,
      CU = null;

    function uU(JJ) {
      const cJ = gJ(JJ.tutorial),
        ZJ = cJ ? pU(JJ, !0) : OU;
      "inventory" === DU.d.get("openInGameMenuName") ? (CU = null, (0, SU.o)(ZJ)) : CU = ZJ;
      const FJ = cJ ? pU(JJ, !1) : OU;
      (0, KU.b)(FJ, TU) || (TU = FJ, yU.i.Uf(NU, TU))
    }

    function iU() {
      return (0, VU.b)(NU, (() => TU))
    }
    var RU = ZJ(35740),
      LU = ZJ(2778);

    function aU(JJ) {
      const cJ = (0, LU.c)(JJ),
        ZJ = void 0 === cJ ? void 0 : (0, RU.displayNameOf)(cJ);
      return "object" === typeof ZJ && null !== ZJ && "translationKey" in ZJ && "string" === typeof ZJ.translationKey ? ZJ.translationKey : `item:${(0,HJ.be)(JJ)}`
    }

    function BU(JJ, cJ) {
      return JJ(aU(cJ))
    }
    const tU = [{
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

    function oU(JJ, cJ) {
      return [`Deposit Seed (${JJ})`, {
        item: lc[`${JJ} Deposit`],
        amount: cJ
      }]
    }
    const lU = Object.fromEntries([oU("Coal", 8), oU("Iron", 8), oU("Copper", 8), oU("Gold", 6), oU("Voltite", 4), oU("Uranium", 4)]),
      Je = "Relay Coil",
      ce = new Map;

    function Ze(JJ) {
      let cJ = ce.get(JJ);
      if (!cJ) {
        const ZJ = Math.max(1, JJ);
        cJ = tU.filter((JJ => {
          var cJ;
          return ZJ >= JJ.fromTier && ZJ <= (null !== (cJ = JJ.untilTier) && void 0 !== cJ ? cJ : 1 / 0)
        })).map((JJ => JJ.later && ZJ >= JJ.later.tier ? {
          ...JJ,
          weight: JJ.later.weight
        } : JJ)), ce.set(JJ, cJ)
      }
      return cJ
    }

    function Fe(JJ) {
      return Ze(JJ).some((JJ => {
        let {
          item: cJ
        } = JJ;
        return cJ === Je
      }))
    }

    function Ue(JJ) {
      return JJ.startsWith("Deposit Seed (")
    }

    function ee(JJ, cJ) {
      const ZJ = Ze(JJ);
      return cJ ? ZJ.filter((JJ => cJ(JJ.item))) : ZJ
    }

    function Xe(JJ) {
      return JJ.reduce(((JJ, cJ) => JJ + cJ.weight), 0)
    }

    function Ae(JJ, cJ) {
      const ZJ = ee(JJ, cJ),
        FJ = Xe(ZJ);
      return ZJ.map((JJ => ({
        find: JJ,
        chance: JJ.weight / FJ
      })))
    }
    const qe = 6e4,
      je = new Intl.NumberFormat("en-US");

    function Ye(JJ, cJ) {
      const ZJ = JJ >= 10 ? Math.round(JJ) : Math.round(10 * JJ) / 10;
      return 0 === ZJ ? "0" : `${cJ}${je.format(ZJ)}`
    }

    function he(JJ) {
      return JJ < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? je.format(JJ) : JJ < 1e6 ? `${JJ<1e5?Math.floor(JJ/100)/10:Math.floor(JJ/1e3)}k` : Math.floor(JJ / 1e5) / 10 + "M"
    }

    function De(JJ) {
      return JJ < 0 ? "\u2212" + -JJ : String(JJ)
    }

    function se(JJ, cJ) {
      const ZJ = Math.max(1, Math.round(cJ));
      if (ZJ < 60) return JJ("buildAFactory2Game:durationSeconds", {
        seconds: String(ZJ)
      });
      const FJ = Math.round(ZJ / 60);
      if (FJ < 60) return JJ("buildAFactory2Game:durationMinutes", {
        minutes: String(FJ)
      });
      const UJ = String(Math.floor(FJ / 60));
      return FJ % 60 === 0 ? JJ("buildAFactory2Game:durationWholeHours", {
        hours: UJ
      }) : JJ("buildAFactory2Game:durationHours", {
        hours: UJ,
        minutes: String(FJ % 60)
      })
    }
    const ne = "(max-height: 420px), (max-width: 650px)";

    function Ge() {
      return "undefined" !== typeof window && window.matchMedia(ne).matches
    }

    function fe(JJ) {
      const cJ = window.matchMedia(ne),
        ZJ = () => {
          JJ(cJ.matches)
        };
      return cJ.addEventListener("change", ZJ), () => {
        cJ.removeEventListener("change", ZJ)
      }
    }
    var xe = ZJ(990);

    function re(JJ, cJ) {
      return null !== JJ && JJ > cJ + 1
    }

    function ve(JJ) {
      const cJ = 100 * JJ;
      return String(cJ <= 0 || cJ >= 1 ? Math.round(cJ) : Math.max(.1, Math.round(10 * cJ) / 10))
    }

    function me(JJ) {
      let {
        item: cJ,
        amount: ZJ
      } = JJ;
      return (0, xe.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, xe.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, xe.jsx)(QU.d, {
            itemName: cJ,
            amount: 0
          })
        }), ZJ > 1 && (0, xe.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", ZJ]
        })]
      })
    }

    function Qe(JJ) {
      let {
        label: cJ,
        names: ZJ
      } = JJ;
      const [UJ, eJ] = (0, FJ.useState)(!1), XJ = ZJ.join(" / ");
      return (0, xe.jsxs)(xe.Fragment, {
        children: [(0, xe.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: XJ,
          "aria-expanded": UJ,
          onClick: () => {
            eJ(!UJ)
          },
          children: cJ
        }), UJ && (0, xe.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: XJ
        })]
      })
    }

    function Ee(JJ) {
      let {
        tier: cJ
      } = JJ;
      const {
        t: ZJ
      } = (0, vU.F)(), {
        key: FJ,
        params: UJ
      } = sJ(cJ, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), eJ = ZJ(`buildAFactory2Game:${FJ}`, UJ);
      return (0, xe.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, xe.jsx)(mU.c, {
          name: "lock"
        }), eJ]
      })
    }
    const Ve = (0, FJ.createContext)(null);

    function Ke() {
      const {
        t: JJ
      } = (0, vU.F)(), cJ = (0, FJ.useContext)(Ve);
      return (0, FJ.useEffect)((() => null === cJ || void 0 === cJ ? void 0 : cJ()), [cJ]), (0, xe.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: JJ("buildAFactory2Game:recipeForQuest"),
        "aria-label": JJ("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function ye(JJ) {
      let {
        title: cJ,
        count: ZJ,
        children: UJ,
        startOpen: eJ = !0
      } = JJ;
      const {
        t: XJ
      } = (0, vU.F)(), [AJ, qJ] = (0, FJ.useState)((() => eJ && !Ge())), [jJ, YJ] = (0, FJ.useState)(0), hJ = (0, FJ.useCallback)((() => (YJ((JJ => JJ + 1)), () => {
        YJ((JJ => JJ - 1))
      })), []);
      return (0, xe.jsxs)("div", {
        className: GU()("Baf2Recipes", {
          Open: AJ
        }),
        children: [(0, xe.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            qJ(!AJ)
          },
          "aria-expanded": AJ,
          children: [XJ("buildAFactory2Game:recipesToggle", {
            title: cJ,
            count: String(ZJ)
          }), (0, xe.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: AJ ? "\u25be" : "\u25b8"
          })]
        }), AJ && (0, xe.jsxs)(Ve.Provider, {
          value: hJ,
          children: [(0, xe.jsx)("ul", {
            className: "Baf2RecipeList",
            children: UJ
          }), jJ > 0 && (0, xe.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, xe.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), XJ("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const Se = "buildAFactory2Game:",
      Ie = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const Me = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      be = {
        "Uranium Grit": eJ,
        "Raw Uranium": eJ
      };

    function we(JJ) {
      var cJ;
      return null !== (cJ = be[JJ]) && void 0 !== cJ ? cJ : Math.max(BJ(JJ), Me[JJ] ? BJ(Me[JJ]) : 1, function(JJ) {
        const cJ = UJ.findIndex((cJ => cJ.cost.some((cJ => cJ.item === JJ))));
        return cJ > eJ ? cJ : 1
      }(JJ))
    }

    function We(JJ, cJ) {
      return ge(cJ) ? we(cJ) : function(JJ) {
        if (Ie.has(JJ)) return 1;
        const cJ = UJ.findIndex((cJ => cJ.newDeposits.some((cJ => {
          let {
            block: ZJ
          } = cJ;
          return ZJ === JJ
        }))));
        return cJ < 0 ? 1 : cJ + 1
      }(JJ)
    }

    function ge(JJ) {
      return JJ in be || hJ(we(JJ)) > 0
    }

    function He(JJ, cJ) {
      return Cc(JJ, {
        coupled: !1,
        taught: null,
        atomic: AJ() && cJ >= 11
      }).recipes
    }

    function Pe(JJ, cJ) {
      const ZJ = DJ(JJ, cJ, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : hJ(JJ) > 0);
      return "open" === ZJ || "locked" === ZJ
    }

    function ke(JJ, cJ) {
      return JJ.map(((JJ, ZJ) => ({
        value: JJ,
        idx: ZJ,
        tier: cJ(JJ)
      }))).sort(((JJ, cJ) => JJ.tier - cJ.tier || JJ.idx - cJ.idx)).map((JJ => {
        let {
          value: cJ
        } = JJ;
        return cJ
      }))
    }

    function pe(JJ, cJ, ZJ) {
      const FJ = DJ(JJ, cJ);
      if ("hidden" === FJ || "open" === FJ) return null;
      if ("teaser" === FJ) return {
        tag: {
          translationKey: `${Se}${ZJ?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${Se}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const UJ = sJ(JJ, {
          tier: ZJ ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        eJ = sJ(JJ, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${Se}${UJ.key}`,
          params: UJ.params
        },
        reason: {
          translationKey: `${Se}${eJ.key}`,
          params: eJ.params
        }
      }
    }

    function de(JJ) {
      return !Ue(JJ)
    }

    function ze(JJ) {
      let {
        seconds: cJ
      } = JJ;
      const {
        t: ZJ
      } = (0, vU.F)();
      return (0, xe.jsx)(ye, {
        title: ZJ("buildAFactory2Game:recipesCuts", {
          seconds: cJ
        }),
        count: 1,
        children: (0, xe.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, xe.jsx)(me, {
            item: "Maple Sapling",
            amount: 1
          }), (0, xe.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, xe.jsx)(me, {
            item: "Maple Log",
            amount: 1
          }), (0, xe.jsx)("span", {
            className: "Baf2RecipeName",
            children: ZJ("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function Ne(JJ) {
      let {
        fertilised: cJ
      } = JJ;
      const {
        t: ZJ
      } = (0, vU.F)();
      return (0, xe.jsxs)(ye, {
        title: ZJ("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, xe.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, xe.jsx)(me, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, xe.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, xe.jsx)(me, {
            item: "Wheat",
            amount: 1
          }), (0, xe.jsx)(me, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, xe.jsx)("span", {
            className: "Baf2RecipeName",
            children: ZJ("buildAFactory2Game:recipeField")
          })]
        }), (0, xe.jsxs)("li", {
          className: GU()("Baf2Recipe", {
            InUse: cJ
          }),
          children: [(0, xe.jsx)(me, {
            item: "Fertiliser",
            amount: 1
          }), (0, xe.jsx)("span", {
            className: "Baf2RecipeName",
            children: ZJ("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function Oe(JJ) {
      let {
        tier: cJ,
        seconds: ZJ
      } = JJ;
      const {
        t: FJ
      } = (0, vU.F)(), UJ = function(JJ) {
        return JJ >= 5 ? Gc : nc
      }(cJ);
      return (0, xe.jsx)(ye, {
        title: FJ("buildAFactory2Game:recipesBringsUp", {
          seconds: ZJ
        }),
        count: UJ.length,
        children: UJ.map((JJ => {
          let {
            item: cJ,
            chance: ZJ
          } = JJ;
          return (0, xe.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, xe.jsx)(me, {
              item: cJ,
              amount: 1
            }), (0, xe.jsx)("span", {
              className: "Baf2RecipeName",
              children: BU(FJ, cJ)
            }), (0, xe.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: FJ("buildAFactory2Game:recipeChance", {
                percent: ve(ZJ)
              })
            })]
          }, cJ)
        }))
      })
    }

    function Te(JJ) {
      let {
        tier: cJ,
        seconds: ZJ,
        noSeeds: FJ
      } = JJ;
      const {
        t: UJ
      } = (0, vU.F)(), eJ = iU(), XJ = Ae(cJ, FJ ? de : void 0), AJ = FJ && Ae(cJ).length > XJ.length, qJ = Fe(cJ);
      return (0, xe.jsxs)(ye, {
        title: UJ("buildAFactory2Game:recipesRecycles", {
          seconds: ZJ
        }),
        count: XJ.length,
        children: [XJ.map((JJ => {
          let {
            find: cJ,
            chance: ZJ
          } = JJ;
          return (0, xe.jsxs)("li", {
            className: "Baf2Recipe",
            children: [eJ.has(cJ.item) && (0, xe.jsx)(Ke, {}), (0, xe.jsx)(me, {
              item: cJ.item,
              amount: cJ.amount
            }), (0, xe.jsx)("span", {
              className: "Baf2RecipeName",
              children: BU(UJ, cJ.item)
            }), (0, xe.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: UJ("buildAFactory2Game:recipeChance", {
                percent: ve(ZJ)
              })
            })]
          }, cJ.item)
        })), AJ && (0, xe.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, xe.jsx)("span", {
            className: "Baf2RecipeName",
            children: UJ("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), qJ && (0, xe.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, xe.jsx)("span", {
            className: "Baf2RecipeName",
            children: UJ("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function Ce(JJ) {
      let {
        tier: cJ,
        seconds: ZJ
      } = JJ;
      const {
        t: FJ
      } = (0, vU.F)(), UJ = Object.entries(lU).filter((JJ => {
        let [, {
          item: ZJ
        }] = JJ;
        return Pe(we(ZJ), cJ, ge(ZJ))
      }));
      return (0, xe.jsx)(ye, {
        title: FJ("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: ZJ
        }),
        count: UJ.length,
        children: UJ.map((JJ => {
          let [cJ, {
            item: ZJ,
            amount: UJ
          }] = JJ;
          return (0, xe.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, xe.jsx)(me, {
              item: cJ,
              amount: 1
            }), (0, xe.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, xe.jsx)(me, {
              item: ZJ,
              amount: UJ
            }), (0, xe.jsx)("span", {
              className: "Baf2RecipeName",
              children: BU(FJ, ZJ)
            })]
          }, cJ)
        }))
      })
    }

    function ue(JJ) {
      let {
        tier: cJ,
        seconds: ZJ
      } = JJ;
      const {
        t: FJ
      } = (0, vU.F)(), UJ = iU(), eJ = ke(Object.entries(lc).filter((JJ => {
        let [ZJ, FJ] = JJ;
        return Pe(We(ZJ, FJ), cJ, ge(FJ))
      })), (JJ => {
        let [cJ, ZJ] = JJ;
        return We(cJ, ZJ)
      }));
      return (0, xe.jsx)(ye, {
        title: FJ("buildAFactory2Game:recipesDigs", {
          seconds: ZJ
        }),
        count: eJ.length,
        children: eJ.map((JJ => {
          let [ZJ, eJ] = JJ;
          const XJ = We(ZJ, eJ),
            AJ = XJ > cJ ? XJ : null,
            qJ = JZ[ZJ],
            jJ = null === AJ && UJ.has(eJ);
          return (0, xe.jsxs)("li", {
            className: GU()("Baf2Recipe", {
              Locked: null !== AJ,
              Far: re(AJ, cJ)
            }),
            children: [jJ && (0, xe.jsx)(Ke, {}), (0, xe.jsx)(me, {
              item: ZJ,
              amount: 1
            }), (0, xe.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, xe.jsx)(me, {
              item: eJ,
              amount: 1
            }), (0, xe.jsx)("span", {
              className: "Baf2RecipeName",
              children: BU(FJ, eJ)
            }), void 0 !== qJ && (0, xe.jsx)("span", {
              className: "Baf2RecipeMore",
              children: FJ("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / qJ)
              })
            }), null !== AJ && (0, xe.jsx)(Ee, {
              tier: AJ
            })]
          }, ZJ)
        }))
      })
    }

    function ie(JJ) {
      var cJ;
      let {
        def: ZJ,
        seconds: FJ
      } = JJ;
      const {
        t: UJ
      } = (0, vU.F)();
      return (0, xe.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, xe.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (cJ = ZJ.fuels) && void 0 !== cJ ? cJ : []).map((JJ => (0, xe.jsx)(me, {
            item: JJ,
            amount: 1
          }, JJ))), (0, xe.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, xe.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, xe.jsx)(mU.c, {
              name: "bolt"
            }), UJ("buildAFactory2Game:recipePower", {
              power: tJ(ZJ.powerMade),
              seconds: FJ
            })]
          })]
        })
      })
    }

    function Re(JJ) {
      let {
        def: cJ
      } = JJ;
      const {
        t: ZJ
      } = (0, vU.F)();
      return (0, xe.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, xe.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, xe.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, xe.jsx)(mU.c, {
              name: "bolt"
            }), ZJ("buildAFactory2Game:recipeMixer", {
              cryo: Ye((0, oJ.G)(cJ, cJ.cryoMade), "")
            })]
          })
        })
      })
    }

    function Le(JJ) {
      let {
        def: cJ
      } = JJ;
      const {
        t: ZJ
      } = (0, vU.F)();
      return (0, xe.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, xe.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, xe.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, xe.jsx)(mU.c, {
              name: "bolt"
            }), ZJ("buildAFactory2Game:recipeCondenser", {
              power: Ye((0, oJ.G)(cJ, cJ.powerPerOp), ""),
              water: Ye((0, oJ.G)(cJ, cJ.fluidMade), "")
            })]
          })
        })
      })
    }

    function ae(JJ) {
      let {
        kind: cJ,
        def: ZJ,
        input: FJ,
        tier: UJ,
        noSeeds: eJ = !1
      } = JJ;
      const XJ = String(ZJ.opMs / 1e3);
      return ac(ZJ) ? (0, xe.jsx)(ze, {
        seconds: XJ
      }) : ZJ.field ? (0, xe.jsx)(Ne, {
        fertilised: null !== FJ
      }) : ZJ.table ? (0, xe.jsx)(Oe, {
        tier: UJ,
        seconds: XJ
      }) : ZJ.recycles ? (0, xe.jsxs)(xe.Fragment, {
        children: [(0, xe.jsx)(Te, {
          tier: UJ,
          seconds: XJ,
          noSeeds: eJ
        }), (0, xe.jsx)(Ce, {
          tier: UJ,
          seconds: XJ
        })]
      }) : Lc(ZJ) ? (0, xe.jsx)(ue, {
        tier: UJ,
        seconds: XJ
      }) : void 0 !== ZJ.fluidMade ? (0, xe.jsx)(Le, {
        def: ZJ
      }) : void 0 !== ZJ.cryoMade ? (0, xe.jsx)(Re, {
        def: ZJ
      }) : void 0 !== ZJ.powerMade ? (0, xe.jsx)(ie, {
        def: ZJ,
        seconds: XJ
      }) : (0, xe.jsx)(Be, {
        kind: cJ,
        input: FJ,
        tier: UJ,
        seconds: XJ
      })
    }

    function Be(JJ) {
      let {
        kind: cJ,
        input: ZJ,
        tier: FJ,
        seconds: UJ
      } = JJ;
      const {
        t: eJ
      } = (0, vU.F)(), XJ = iU(), AJ = ke(function(JJ) {
        const cJ = new Map;
        for (const UJ of JJ) {
          var ZJ, FJ;
          const JJ = [UJ.output, UJ.outputAmount, UJ.inputAmount, null === (ZJ = UJ.bonus) || void 0 === ZJ ? void 0 : ZJ.item, null === (FJ = UJ.bonus) || void 0 === FJ ? void 0 : FJ.chance].join("|"),
            eJ = cJ.get(JJ);
          eJ ? eJ.inputs.push(UJ.input) : cJ.set(JJ, {
            inputs: [UJ.input],
            inputAmount: UJ.inputAmount,
            output: UJ.output,
            outputAmount: UJ.outputAmount,
            bonus: UJ.bonus
          })
        }
        return [...cJ.values()]
      }(He(cJ, FJ).filter(FZ)), (JJ => we(JJ.output))).filter((JJ => Pe(we(JJ.output), FJ, ge(JJ.output))));
      return (0, xe.jsx)(ye, {
        title: eJ("buildAFactory2Game:recipesEach", {
          seconds: UJ
        }),
        count: AJ.length,
        children: AJ.map((JJ => {
          const cJ = null !== ZJ && JJ.inputs.includes(ZJ),
            UJ = JJ.inputs.length > 3 ? [cJ ? ZJ : JJ.inputs[0]] : JJ.inputs,
            AJ = we(JJ.output) > FJ ? we(JJ.output) : null,
            qJ = null === AJ && XJ.has(JJ.output);
          return (0, xe.jsxs)("li", {
            className: GU()("Baf2Recipe", {
              InUse: cJ,
              Locked: null !== AJ,
              Far: re(AJ, FJ)
            }),
            children: [qJ && (0, xe.jsx)(Ke, {}), UJ.map(((cJ, ZJ) => (0, xe.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [ZJ > 0 && (0, xe.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, xe.jsx)(me, {
                item: cJ,
                amount: JJ.inputAmount
              })]
            }, cJ))), UJ.length < JJ.inputs.length && (0, xe.jsx)(Qe, {
              label: eJ("buildAFactory2Game:recipeMore", {
                count: String(JJ.inputs.length - UJ.length)
              }),
              names: JJ.inputs.filter((JJ => !UJ.includes(JJ))).map((JJ => BU(eJ, JJ)))
            }), (0, xe.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, xe.jsx)(me, {
              item: JJ.output,
              amount: JJ.outputAmount
            }), (0, xe.jsx)("span", {
              className: "Baf2RecipeName",
              children: BU(eJ, JJ.output)
            }), JJ.bonus && (0, xe.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [eJ("buildAFactory2Game:recipeBonus", {
                percent: ve(JJ.bonus.chance)
              }), (0, xe.jsx)(me, {
                item: JJ.bonus.item,
                amount: 1
              })]
            }), null !== AJ && (0, xe.jsx)(Ee, {
              tier: AJ
            })]
          }, `${JJ.output}|${JJ.inputs[0]}`)
        }))
      })
    }

    function te(JJ) {
      let {
        taught: cJ,
        tier: ZJ
      } = JJ;
      const {
        t: FJ
      } = (0, vU.F)(), UJ = iU(), eJ = ke(Object.values(Oc), (JJ => JJ.tier)).filter((JJ => Pe(JJ.tier, ZJ)));
      return (0, xe.jsx)(ye, {
        title: FJ("buildAFactory2Game:benchCanMake"),
        count: eJ.length,
        startOpen: !1,
        children: eJ.map((JJ => {
          const eJ = JJ.tier > ZJ,
            XJ = !eJ && UJ.has(JJ.output);
          return (0, xe.jsxs)("li", {
            className: GU()("Baf2Recipe", {
              InUse: JJ.output === cJ,
              Locked: eJ,
              Far: re(eJ ? JJ.tier : null, ZJ)
            }),
            children: [XJ && (0, xe.jsx)(Ke, {}), (0, xe.jsx)(me, {
              item: JJ.output,
              amount: JJ.outputAmount
            }), (0, xe.jsx)("span", {
              className: "Baf2RecipeName",
              children: BU(FJ, JJ.output)
            }), (0, xe.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), JJ.inputs.map((JJ => (0, xe.jsx)(me, {
              item: JJ.item,
              amount: JJ.amount
            }, JJ.item))), eJ && (0, xe.jsx)(Ee, {
              tier: JJ.tier
            })]
          }, JJ.output)
        }))
      })
    }
    var oe, le, JX, cX, ZX;
    const FX = Sc.Generator,
      UX = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      eX = 1e3 * (null !== (oe = FX.powerMade) && void 0 !== oe ? oe : 0) / FX.opMs,
      XX = Math.min(...(null !== (le = FX.fuels) && void 0 !== le ? le : []).map((JJ => oc[JJ]))) / 1e3,
      AX = Sc["Volt Engine"],
      qX = 1e3 * (null !== (JX = AX.powerMade) && void 0 !== JX ? JX : 0) / AX.opMs,
      jX = oc[null !== (cX = null === (ZX = AX.fuels) || void 0 === ZX ? void 0 : ZX[0]) && void 0 !== cX ? cX : ""] / 1e3;

    function YX(JJ) {
      let {
        item: cJ,
        label: ZJ,
        value: FJ,
        note: UJ,
        dim: eJ
      } = JJ;
      return (0, xe.jsxs)("li", {
        className: GU()("Baf2PowerRow", {
          Dim: eJ
        }),
        children: [(0, xe.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, xe.jsx)(QU.d, {
            itemName: cJ,
            amount: 0
          })
        }), (0, xe.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, xe.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: ZJ
          }), UJ && (0, xe.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: UJ
          })]
        }), (0, xe.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: FJ
        })]
      })
    }

    function hX(JJ, cJ, ZJ, FJ) {
      var UJ;
      const eJ = void 0 === FJ ? Sc[JJ] : function(JJ, cJ) {
          if (null === cJ) return JJ;
          let ZJ = RJ.get(cJ);
          return ZJ || (ZJ = {
            ...JJ,
            powerPerOp: iJ(JJ, cJ),
            farmMob: cJ
          }, RJ.set(cJ, ZJ)), ZJ
        }(Sc[JJ], FJ),
        XJ = cJ && eJ.couplable ? Pc(eJ, ZJ) : eJ;
      return 1e3 * (null !== (UJ = XJ.powerPerOp) && void 0 !== UJ ? UJ : 0) / XJ.opMs
    }

    function DX(JJ) {
      var cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ;
      let {
        message: jJ
      } = JJ;
      const {
        t: YJ
      } = (0, vU.F)(), hJ = (JJ, cJ) => YJ("buildAFactory2Game:powerPerSecond", {
        rate: Ye(JJ, cJ)
      }), [DJ, sJ] = jJ.baf2PowerGenerators, nJ = jJ.baf2PowerGeneratorFuel, GJ = jJ.baf2PowerSunPanels, fJ = null !== (cJ = jJ.baf2PowerSunShare) && void 0 !== cJ ? cJ : 1, xJ = jJ.baf2PowerVaults, rJ = jJ.baf2PowerUsers, [vJ, mJ] = null !== (ZJ = jJ.baf2PowerEngines) && void 0 !== ZJ ? ZJ : [0, 0], QJ = null !== (FJ = jJ.baf2PowerEngineCells) && void 0 !== FJ ? FJ : 0, EJ = null !== (UJ = jJ.baf2PowerPads) && void 0 !== UJ ? UJ : 0, VJ = null !== (eJ = jJ.baf2PowerCharge) && void 0 !== eJ ? eJ : 0, [KJ, yJ] = null !== (XJ = jJ.baf2PowerReactors) && void 0 !== XJ ? XJ : [0, 0], [SJ, IJ] = null !== (AJ = jJ.baf2PowerBatteries) && void 0 !== AJ ? AJ : [0, 0];
      let MJ = YJ("buildAFactory2Game:powerEngineCells", {
        amount: String(QJ)
      });
      QJ > 0 && mJ > 0 && (MJ = YJ("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(QJ),
        time: se(YJ, QJ * jX / mJ)
      }));
      let bJ = YJ("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(nJ)
      });
      nJ > 0 && sJ > 0 && (bJ = YJ("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(nJ),
        time: se(YJ, nJ * XX / sJ)
      }));
      const wJ = DJ + vJ + GJ + KJ;
      return (0, xe.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, xe.jsxs)("section", {
          children: [(0, xe.jsxs)("h3", {
            children: [YJ("buildAFactory2Game:powerMaking"), (0, xe.jsx)("span", {
              children: hJ(jJ.baf2PowerMadePerS, "+")
            })]
          }), (0, xe.jsxs)("ul", {
            children: [0 === wJ && (0, xe.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: YJ("buildAFactory2Game:powerNoMakers")
            }), DJ > 0 && (0, xe.jsx)(YX, {
              item: "Generator",
              label: `${BU(YJ,"Generator")} \xd7${DJ}`,
              note: `${YJ("buildAFactory2Game:powerRunning",{amount:String(sJ)})} \xb7 ${bJ}`,
              value: hJ(sJ * eX, "+"),
              dim: 0 === sJ
            }), vJ > 0 && (0, xe.jsx)(YX, {
              item: "Volt Engine",
              label: `${BU(YJ,"Volt Engine")} \xd7${vJ}`,
              note: `${YJ("buildAFactory2Game:powerRunning",{amount:String(mJ)})} \xb7 ${MJ}`,
              value: hJ(mJ * qX, "+"),
              dim: 0 === mJ
            }), GJ > 0 && (0, xe.jsx)(YX, {
              item: "Solar Panel",
              label: `${BU(YJ,"Solar Panel")} \xd7${GJ}`,
              note: YJ(fJ < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: hJ(4 * GJ * fJ, "+")
            }), KJ > 0 && (0, xe.jsx)(YX, {
              item: "Reactor Frame",
              label: `${YJ("buildAFactory2Game:powerReactors")} \xd7${KJ}`,
              note: YJ("buildAFactory2Game:powerRunning", {
                amount: String(yJ)
              }),
              value: hJ(null !== (qJ = jJ.baf2PowerReactorPerS) && void 0 !== qJ ? qJ : 0, "+"),
              dim: 0 === yJ
            })]
          })]
        }), (0, xe.jsxs)("section", {
          children: [(0, xe.jsxs)("h3", {
            children: [YJ("buildAFactory2Game:powerStorage"), (0, xe.jsx)("span", {
              children: tJ(jJ.baf2PowerCap)
            })]
          }), (xJ > 0 || SJ > 0) && (0, xe.jsxs)("ul", {
            children: [xJ > 0 && (0, xe.jsx)(YX, {
              item: "Charge Vault",
              label: `${BU(YJ,"Charge Vault")} \xd7${xJ}`,
              value: `+${tJ(8e3*xJ)}`
            }), SJ > 0 && (0, xe.jsx)(YX, {
              item: "Battery Cell",
              label: `${YJ("buildAFactory2Game:powerBatteries")} \xd7${SJ}`,
              value: `+${tJ(IJ)}`
            })]
          })]
        }), (0, xe.jsxs)("section", {
          children: [(0, xe.jsxs)("h3", {
            children: [YJ("buildAFactory2Game:powerUsing"), (0, xe.jsx)("span", {
              children: hJ(jJ.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, xe.jsxs)("ul", {
            children: [0 === rJ.length && 0 === EJ && 0 === VJ && (0, xe.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: YJ("buildAFactory2Game:powerNoUsers")
            }), rJ.map((JJ => {
              let [cJ, ZJ, FJ, UJ, eJ = 1, XJ] = JJ, AJ = ZJ ? YJ(UX[eJ - 1], {
                name: BU(YJ, cJ)
              }) : BU(YJ, cJ);
              return void 0 !== XJ && (AJ = YJ("buildAFactory2Game:powerFarmName", {
                name: AJ,
                mob: YJ(TJ(XJ))
              })), (0, xe.jsx)(YX, {
                item: cJ,
                label: `${AJ} \xd7${FJ}`,
                note: YJ("buildAFactory2Game:powerRunning", {
                  amount: String(UJ)
                }),
                value: UJ > 0 ? hJ(UJ * hX(cJ, ZJ, eJ, XJ), "\u2212") : YJ("buildAFactory2Game:powerIdle"),
                dim: 0 === UJ
              }, `${cJ}|${ZJ}|${eJ}|${XJ}`)
            })), EJ > 0 && (0, xe.jsx)(YX, {
              item: "Charging Pad",
              label: `${BU(YJ,"Charging Pad")} \xd7${EJ}`,
              value: YJ("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), VJ > 0 && (0, xe.jsx)(YX, {
              item: "Homestead Core",
              label: YJ("buildAFactory2Game:powerCharge"),
              value: hJ(VJ, "\u2212")
            }), jJ.baf2PowerStarved > 0 && (0, xe.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, xe.jsx)(mU.c, {
                name: "triangle-exclamation"
              }), YJ("buildAFactory2Game:powerStarved", {
                amount: String(jJ.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var sX = ZJ(3950),
      nX = ZJ(1329);
    class GX {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(JJ) {
        this.message = JJ;
        for (const cJ of this.listeners) cJ()
      }
      get() {
        return this.message
      }
      subscribe(JJ) {
        return this.listeners.add(JJ), () => {
          this.listeners.delete(JJ)
        }
      }
    }
    class fX extends GX {}

    function xX(JJ, cJ) {
      const ZJ = () => {
          const ZJ = JJ.get();
          if (!ZJ || !cJ) return ZJ;
          const [FJ, UJ, eJ] = ZJ.baf2PowerAt;
          return FJ === cJ[0] && UJ === cJ[1] && eJ === cJ[2] ? ZJ : null
        },
        [UJ, eJ] = (0, FJ.useState)(ZJ);
      return (0, FJ.useEffect)((() => (eJ(ZJ()), JJ.subscribe((() => {
        eJ(ZJ())
      })))), [JJ, ...null !== cJ && void 0 !== cJ ? cJ : []]), UJ
    }

    function rX(JJ) {
      return {
        stored: JJ.baf2PowerStored,
        cap: JJ.baf2PowerCap,
        madePerS: JJ.baf2PowerMadePerS,
        usedPerS: JJ.baf2PowerUsedPerS
      }
    }

    function vX(JJ) {
      let {
        stored: cJ,
        cap: ZJ
      } = JJ;
      return (0, xe.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, xe.jsx)("div", {
          style: {
            width: `${Math.min(100,100*cJ/Math.max(1,ZJ))}%`
          }
        })
      })
    }

    function mX(JJ) {
      let {
        figures: cJ,
        labelled: ZJ = !1
      } = JJ;
      const {
        t: FJ
      } = (0, vU.F)(), UJ = cJ.madePerS - cJ.usedPerS, {
        text: eJ,
        draining: XJ
      } = function(JJ, cJ) {
        let {
          stored: ZJ,
          cap: FJ,
          madePerS: UJ,
          usedPerS: eJ
        } = cJ;
        const XJ = UJ - eJ;
        return ZJ >= FJ ? {
          text: JJ("buildAFactory2Game:powerFull"),
          draining: !1
        } : XJ > .05 ? {
          text: JJ("buildAFactory2Game:powerFullIn", {
            time: se(JJ, (FJ - ZJ) / XJ)
          }),
          draining: !1
        } : XJ < -.05 ? {
          text: JJ("buildAFactory2Game:powerEmptyIn", {
            time: se(JJ, ZJ / -XJ)
          }),
          draining: !0
        } : {
          text: JJ("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(FJ, cJ);
      return (0, xe.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, xe.jsx)(vX, {
          stored: cJ.stored,
          cap: cJ.cap
        }), (0, xe.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, xe.jsx)("span", {
            children: FJ(ZJ ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: tJ(cJ.stored),
              cap: tJ(cJ.cap)
            })
          }), (0, xe.jsxs)("span", {
            className: GU()("Baf2PowerNet", {
              Draining: XJ
            }),
            children: [FJ("buildAFactory2Game:powerPerSecond", {
              rate: Ye(Math.abs(UJ), UJ < 0 ? "\u2212" : "+")
            }), " \xb7 ", eJ]
          })]
        })]
      })
    }

    function QX(JJ) {
      let {
        stored: cJ,
        cap: ZJ,
        rates: FJ
      } = JJ;
      const {
        t: UJ
      } = (0, vU.F)();
      return FJ ? (0, xe.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, xe.jsx)(mX, {
          figures: {
            stored: cJ,
            cap: ZJ,
            madePerS: FJ[0],
            usedPerS: FJ[1]
          },
          labelled: !0
        })
      }) : (0, xe.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, xe.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, xe.jsx)(vX, {
            stored: cJ,
            cap: ZJ
          }), (0, xe.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, xe.jsx)("span", {
              children: UJ("buildAFactory2Game:powerStoredLabelled", {
                stored: tJ(cJ),
                cap: tJ(ZJ)
              })
            })
          })]
        })
      })
    }

    function EX(JJ) {
      let {
        store: cJ,
        close: ZJ
      } = JJ;
      const {
        t: FJ
      } = (0, vU.F)(), UJ = xX(cJ);
      return (0, xe.jsx)(sX.c, {
        close: ZJ,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, xe.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, xe.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, xe.jsxs)("div", {
              children: [(0, xe.jsx)("h2", {
                id: "baf2PowerTitle",
                children: FJ("buildAFactory2Game:powerTitle")
              }), (0, xe.jsx)("p", {
                children: FJ("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, xe.jsx)(nX.j, {
              onClick: ZJ
            })]
          }), UJ && (0, xe.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, xe.jsx)(mX, {
              figures: rX(UJ)
            }), (0, xe.jsx)(DX, {
              message: UJ
            })]
          })]
        })
      })
    }

    function VX(JJ) {
      var cJ;
      let {
        kind: ZJ,
        def: UJ,
        JZ: eJ,
        power: XJ,
        stored: AJ,
        cap: qJ
      } = JJ;
      const {
        t: jJ
      } = (0, vU.F)(), YJ = xX(XJ, eJ), [hJ, DJ] = (0, FJ.useState)(!1);
      return (0, xe.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, xe.jsx)(ae, {
          kind: ZJ,
          def: UJ,
          input: null,
          tier: null !== (cJ = null === YJ || void 0 === YJ ? void 0 : YJ.baf2PowerTier) && void 0 !== cJ ? cJ : 1
        }), (0, xe.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: jJ("buildAFactory2Game:powerTitle")
        }), YJ && (0, xe.jsx)(mX, {
          figures: rX(YJ)
        }), !YJ && (0, xe.jsx)(QX, {
          stored: AJ,
          cap: qJ,
          rates: null
        }), YJ && (0, xe.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            DJ(!hJ)
          },
          "aria-expanded": hJ,
          children: jJ(hJ ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), YJ && hJ && (0, xe.jsx)(DX, {
          message: YJ
        })]
      })
    }
    const KX = 2500,
      yX = 17500,
      SX = `${QJ} `;
    const IX = ["plan", "throttle"];

    function MX(JJ) {
      if (JJ.startsWith(`${vc} `)) return JJ.slice(0, JJ.lastIndexOf(" "));
      const cJ = JJ.split(" ");
      return cJ[0] === Fc && IX.includes(cJ[4]) ? cJ.slice(0, 5).join(" ") : null
    }
    class bX {
      constructor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = JJ, this.now = cJ, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.hUJ = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = cJ()
      }
      enqueue(JJ) {
        this.queue(JJ, this.nextTicket());
        const cJ = this.hUJ + this.pending.length;
        return this.flush(), cJ
      }
      track(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const ZJ = this.nextTicket();
        if (!cJ.urgent) return this.queue(JJ, ZJ), this.flush(), ZJ;
        const {
          supersedes: FJ
        } = cJ;
        for (let eJ = this.pending.length - 1; eJ >= this.urgent; eJ--) {
          const cJ = this.pending[eJ];
          (cJ.command === JJ || null !== FJ && void 0 !== FJ && FJ(cJ.command)) && (this.pending.splice(eJ, 1), this.markLeft(cJ.tickets))
        }
        const UJ = this.pending.findIndex((cJ => {
          let {
            command: ZJ
          } = cJ;
          return ZJ === JJ
        }));
        return -1 !== UJ ? this.pending[UJ].tickets.push(ZJ) : (this.pending.splice(this.urgent, 0, {
          command: JJ,
          tickets: [ZJ]
        }), this.urgent += 1), this.flush(), ZJ
      }
      leftAt(JJ) {
        const cJ = this.leftTimes.get(JJ);
        return void 0 !== cJ ? cJ : this.pending.some((cJ => {
          let {
            tickets: ZJ
          } = cJ;
          return ZJ.includes(JJ)
        })) ? null : -1 / 0
      }
      holdReserve() {
        this.reserves += 1;
        let JJ = !0;
        return () => {
          JJ && (JJ = !1, this.reserves -= 1, this.flush())
        }
      }
      isWaitingLast(JJ) {
        var cJ;
        return (null === (cJ = this.pending.at(-1)) || void 0 === cJ ? void 0 : cJ.command) === JJ
      }
      sent() {
        return this.hUJ
      }
      clear() {
        for (const {
            tickets: JJ
          }
          of this.pending) this.markLeft(JJ);
        this.pending.length = 0, this.urgent = 0, null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      nextTicket() {
        return this.lastTicket += 1, this.lastTicket
      }
      markLeft(JJ) {
        const cJ = this.now();
        for (const ZJ of JJ) this.leftTimes.set(ZJ, cJ);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(JJ, cJ) {
        const ZJ = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === ZJ || void 0 === ZJ ? void 0 : ZJ.command) === JJ) return void(! function(JJ) {
          return JJ === EJ || JJ.startsWith(`${mJ} `) || JJ.startsWith(`${zJ} `)
        }(JJ) ? ZJ.tickets.push(cJ) : (this.pending.pop(), this.markLeft([...ZJ.tickets, cJ])));
        const FJ = void 0 === ZJ ? null : function(JJ, cJ) {
          const ZJ = `${lJ} `;
          if (!JJ.startsWith(ZJ) || !cJ.startsWith(ZJ)) return null;
          const FJ = Zc(JJ.slice(ZJ.length)),
            UJ = Zc(cJ.slice(ZJ.length));
          return FJ && UJ && FJ.item === UJ.item ? cc(UJ.seq, function(JJ, cJ) {
            const ZJ = JJ => "number" === typeof JJ ? JJ : "one" === JJ ? 1 : 99;
            return "fill" === JJ || "fill" === cJ ? "fill" : ZJ(JJ) + ZJ(cJ)
          }(FJ.mode, UJ.mode), UJ.item) : null
        }(ZJ.command, JJ);
        if (null !== FJ && void 0 !== ZJ) return ZJ.command = FJ, void ZJ.tickets.push(cJ);
        const UJ = MX(JJ);
        if (null !== UJ && void 0 !== ZJ && MX(ZJ.command) === UJ) return ZJ.command = JJ, void ZJ.tickets.push(cJ);
        if (null !== ZJ && void 0 !== ZJ && ZJ.command.startsWith(SX) && JJ.startsWith(SX)) {
          const FJ = JJ.slice(SX.length);
          if (ZJ.command.slice(SX.length).split(",").includes(FJ)) return void ZJ.tickets.push(cJ);
          const UJ = `${ZJ.command},${FJ}`;
          if (UJ.length <= 119) return ZJ.command = UJ, void ZJ.tickets.push(cJ)
        }
        this.pending.push({
          command: JJ,
          tickets: [cJ]
        })
      }
      flush() {
        const JJ = this.now();
        for (this.tokens = Math.min(5, this.tokens + (JJ - this.refilledAt) / KX), this.refilledAt = JJ; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.hUJ += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: JJ,
            tickets: cJ
          } = this.pending.shift();
          this.markLeft(cJ), this.send(JJ)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * KX)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class wX {
      constructor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new bX(JJ, cJ)
      }
      send(JJ) {
        return this.queue.enqueue(JJ)
      }
      sent() {
        return this.queue.sent()
      }
      track(JJ, cJ) {
        return this.queue.track(JJ, cJ)
      }
      leftAt(JJ) {
        return this.queue.leftAt(JJ)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(JJ) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = cJ, this.send(JJ), this.islandEdits.count
      }
      syncIslandEdits(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: ZJ
        } = this, FJ = cJ - ZJ.lastAtMs < yX;
        ZJ.count = FJ ? Math.max(ZJ.count, JJ) : JJ
      }
      clear() {
        this.queue.clear()
      }
    }
    const WX = (0, FJ.createContext)(null);

    function gX() {
      const JJ = (0, FJ.useContext)(WX);
      if (!JJ) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return JJ
    }

    function HX(JJ, cJ) {
      return null !== cJ && void 0 !== cJ ? cJ : 1 === JJ
    }

    function PX(JJ, cJ) {
      return JJ.every((JJ => {
        var ZJ;
        let [FJ, , UJ] = JJ;
        return !HX(UJ, null === (ZJ = cJ.get(FJ)) || void 0 === ZJ ? void 0 : ZJ.ys)
      }))
    }

    function kX(JJ, cJ, ZJ) {
      if (0 === JJ.size) return JJ;
      const FJ = new Map(JJ);
      for (const [UJ, eJ] of JJ) {
        const JJ = cJ.find((JJ => {
          let [cJ] = JJ;
          return cJ === UJ
        }));
        (!JJ || eJ.ys === (1 === JJ[2]) || eJ.atMs < ZJ) && FJ.delete(UJ)
      }
      return FJ
    }

    function pX(JJ) {
      var cJ;
      let {
        JZ: ZJ,
        input: UJ,
        drops: eJ,
        seconds: XJ
      } = JJ;
      const {
        t: AJ
      } = (0, vU.F)(), qJ = gX(), [jJ, YJ] = (0, FJ.useState)(new Map);
      (0, FJ.useEffect)((() => {
        eJ && YJ((JJ => kX(JJ, eJ, Date.now() - yX)))
      }), [eJ]), (0, FJ.useEffect)((() => {
        const JJ = function(JJ, cJ) {
          let ZJ = null;
          for (const {
              atMs: FJ
            }
            of JJ.values()) ZJ = null === ZJ ? FJ : Math.min(ZJ, FJ);
          return null === ZJ ? null : ZJ + cJ
        }(jJ, yX);
        if (null === JJ || !eJ) return;
        const cJ = setTimeout((() => {
          YJ((JJ => kX(JJ, eJ, Date.now() - yX)))
        }), Math.max(0, JJ - Date.now()) + 1);
        return () => {
          clearTimeout(cJ)
        }
      }), [jJ, eJ]);
      const hJ = CJ(UJ),
        DJ = null !== hJ && null !== eJ && PX(eJ, jJ),
        sJ = function(JJ, cJ, ZJ) {
          return null === JJ || null === cJ || PX(cJ, ZJ) ? 0 : dJ[kJ[JJ]]
        }(hJ, eJ, jJ);
      return (0, xe.jsxs)(ye, {
        title: AJ("buildAFactory2Game:farmDropsTitle", {
          seconds: XJ
        }),
        count: null !== (cJ = null === eJ || void 0 === eJ ? void 0 : eJ.length) && void 0 !== cJ ? cJ : 0,
        children: [sJ > 0 && (0, xe.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: AJ("buildAFactory2Game:farmDropsPower", {
            power: String(sJ)
          })
        }), (null === hJ || !eJ) && (0, xe.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: AJ("buildAFactory2Game:farmDropsEmpty")
        }), DJ && (0, xe.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: AJ("buildAFactory2Game:farmDropsAllVoided")
        }), null !== hJ && (null === eJ || void 0 === eJ ? void 0 : eJ.map((JJ => {
          var cJ;
          let [FJ, UJ, eJ] = JJ;
          const XJ = UJ < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            hJ = HX(eJ, null === (cJ = jJ.get(FJ)) || void 0 === cJ ? void 0 : cJ.ys);
          return (0, xe.jsxs)("li", {
            className: GU()("Baf2Recipe Baf2FarmDrop", {
              Voided: !hJ
            }),
            children: [(0, xe.jsx)(me, {
              item: FJ,
              amount: 1
            }), (0, xe.jsx)("span", {
              className: "Baf2RecipeName",
              children: BU(AJ, FJ)
            }), (0, xe.jsx)("span", {
              className: "Baf2FarmRate",
              children: AJ(XJ, {
                amount: String(UJ)
              })
            }), (0, xe.jsx)("button", {
              type: "button",
              className: GU()("Baf2FarmToggle SmallTextBold", {
                Kept: hJ
              }),
              "aria-pressed": hJ,
              onClick: () => {
                YJ(new Map(jJ).set(FJ, {
                  ys: !hJ,
                  atMs: Date.now()
                })), qJ.send(function(JJ, cJ, ZJ, FJ) {
                  return `${zJ} ${JJ} ${cJ} ${ZJ} ${FJ}`
                }(ZJ[0], ZJ[1], ZJ[2], FJ))
              },
              children: AJ(hJ ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, FJ)
        })))]
      })
    }
    var dX;
    const zX = String(null !== (dX = Sc.Synthesizer.waterPerOp) && void 0 !== dX ? dX : 0);

    function NX(JJ) {
      let {
        JZ: cJ,
        taught: ZJ
      } = JJ;
      const {
        t: UJ
      } = (0, vU.F)(), eJ = gX(), [XJ, AJ] = (0, FJ.useState)(null);
      (0, FJ.useEffect)((() => {
        null !== XJ && ZJ === XJ && AJ(null)
      }), [XJ, ZJ]);
      const qJ = null !== XJ && void 0 !== XJ ? XJ : ZJ;
      let jJ = UJ("buildAFactory2Game:synthPick");
      return null !== qJ && (jJ = UJ("buildAFactory2Game:synthGrows", {
        name: BU(UJ, qJ),
        input: BU(UJ, fc),
        water: zX
      })), (0, xe.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, xe.jsx)("div", {
          className: GU()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === qJ
          }),
          children: jJ
        }), (0, xe.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: xc.map(((JJ, ZJ) => {
            const FJ = BU(UJ, JJ),
              XJ = JJ === qJ;
            return (0, xe.jsx)("li", {
              children: (0, xe.jsx)("button", {
                type: "button",
                className: GU()("Baf2SynthTile", {
                  Selected: XJ
                }),
                title: FJ,
                "aria-label": FJ,
                "aria-pressed": XJ,
                onClick: () => {
                  XJ || (AJ(JJ), eJ.send(`${vc} ${cJ[0]} ${cJ[1]} ${cJ[2]} ${ZJ}`))
                },
                children: (0, xe.jsx)(QU.d, {
                  itemName: JJ,
                  amount: 0
                })
              })
            }, JJ)
          }))
        })]
      })
    }
    const OX = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function TX(JJ) {
      let {
        kind: cJ,
        tier: ZJ,
        coupled: FJ,
        level: UJ,
        slot: eJ
      } = JJ;
      const {
        t: XJ
      } = (0, vU.F)(), qJ = BJ(Mc);
      if (!FJ && null !== ZJ && ZJ < qJ) return (0, xe.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, xe.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, xe.jsx)(mU.c, {
            name: "lock"
          })
        }), (0, xe.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: XJ("buildAFactory2Game:upgradeLocked")
        }), (0, xe.jsx)("span", {
          className: "Baf2TierTag",
          children: XJ("buildAFactory2Game:tierTag", {
            tier: String(qJ)
          })
        })]
      });
      const jJ = function(JJ, cJ) {
          if (AJ() && "Crusher" !== JJ && null !== cJ) {
            if (CX(wc, cJ)) return {
              item: wc,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (CX(bc, cJ)) return {
              item: bc,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: Mc,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(cJ, ZJ),
        YJ = XJ(FJ ? OX[UJ - 1] : jJ.emptyKey),
        hJ = null !== ZJ ? function(JJ, cJ, ZJ, FJ) {
          if (!AJ() || !ZJ || "Crusher" === JJ || cJ < 10) return null;
          const UJ = BJ(wc);
          if (FJ < 3 && UJ > 1 && (2 === FJ || cJ >= UJ)) return {
            tier: UJ,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const eJ = BJ(bc);
          if (1 === FJ && eJ > 1) return {
            tier: eJ,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(cJ, ZJ, FJ, UJ) : null;
      return (0, xe.jsxs)("div", {
        className: GU()("Baf2UpgradeSocket", {
          Fitted: FJ
        }),
        children: [(0, xe.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [FJ && eJ, !FJ && (0, xe.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, xe.jsx)(QU.d, {
              itemName: jJ.item,
              amount: 0
            })
          })]
        }), (0, xe.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, xe.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: XJ("buildAFactory2Game:upgradeTitle")
          }), (0, xe.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: YJ
          }), FJ && UJ >= 2 && "Crusher" === cJ && (0, xe.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: XJ("buildAFactory2Game:couplerCrusherHint")
          }), hJ && null !== ZJ && ZJ < hJ.tier && (0, xe.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, xe.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, xe.jsx)(mU.c, {
                name: "lock"
              })
            }), XJ(hJ.lockedKey), (0, xe.jsx)("span", {
              className: "Baf2TierTag",
              children: XJ("buildAFactory2Game:tierTag", {
                tier: String(hJ.tier)
              })
            })]
          }), hJ && null !== ZJ && ZJ >= hJ.tier && (0, xe.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: XJ(hJ.nextKey)
          })]
        })]
      })
    }

    function CX(JJ, cJ) {
      const ZJ = BJ(JJ);
      return ZJ > 1 && cJ >= ZJ
    }
    var uX = ZJ(36052);
    const iX = (0, oJ.G)(Sc.Condenser, Sc.Condenser.fluidMade),
      RX = .05;
    class LX extends GX {}

    function aX(JJ) {
      return Ye(JJ, "")
    }

    function BX(JJ, cJ, ZJ) {
      return JJ(cJ ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: ZJ
      })
    }

    function tX(JJ, cJ, ZJ, FJ) {
      return ZJ <= RX && FJ <= RX ? null : FJ <= RX || ZJ <= RX ? BX(JJ, cJ, FJ <= RX ? Ye(ZJ, "+") : Ye(FJ, "\u2212")) : JJ(cJ ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: aX(ZJ),
        used: aX(FJ)
      })
    }

    function oX(JJ, cJ) {
      return Math.min(100, 100 * JJ / Math.max(1, cJ))
    }

    function lX(JJ) {
      let {
        stored: cJ,
        cap: ZJ,
        netPerS: FJ,
        rates: UJ,
        cryo: eJ
      } = JJ;
      const {
        t: XJ
      } = (0, vU.F)(), AJ = function(JJ, cJ, ZJ, FJ) {
        return ZJ <= 0 ? JJ("buildAFactory2Game:waterNoStorage") : cJ >= ZJ ? JJ("buildAFactory2Game:powerFull") : FJ > RX ? JJ("buildAFactory2Game:powerFullIn", {
          time: se(JJ, (ZJ - cJ) / FJ)
        }) : FJ < -.05 ? cJ <= 0 ? JJ("buildAFactory2Game:waterEmpty") : JJ("buildAFactory2Game:powerEmptyIn", {
          time: se(JJ, cJ / -FJ)
        }) : JJ("buildAFactory2Game:powerSteady")
      }(XJ, cJ, ZJ, FJ), qJ = ZJ > 0 && cJ < ZJ && Math.abs(FJ) <= RX, jJ = XJ(eJ ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), YJ = null !== UJ ? `${UJ} \xb7 ${AJ}` : qJ ? jJ : `${jJ} \xb7 ${AJ}`;
      return (0, xe.jsxs)(xe.Fragment, {
        children: [(0, xe.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, xe.jsx)("div", {
            style: {
              width: `${oX(cJ,ZJ)}%`
            }
          })
        }), (0, xe.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, xe.jsx)("span", {
            children: ZJ > 0 && XJ("buildAFactory2Game:powerStored", {
              stored: (0, oJ.V)(cJ),
              cap: (0, oJ.V)(ZJ)
            })
          }), (0, xe.jsx)("span", {
            className: GU()("Baf2WaterNet", {
              Draining: FJ < -.05
            }),
            children: YJ
          })]
        })]
      })
    }

    function JA(JJ) {
      let {
        water: cJ,
        at: ZJ,
        side: FJ = null
      } = JJ;
      const {
        t: UJ
      } = (0, vU.F)(), eJ = gX(), [XJ, AJ, qJ] = cJ;
      return (0, xe.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, xe.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, xe.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: UJ(null === FJ ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${FJ}`)
          }), (0, xe.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              eJ.send(`${oJ.D} ${ZJ[0]} ${ZJ[1]} ${ZJ[2]}${"cryoOut"===FJ?" cryo":""}`)
            },
            children: UJ("buildAFactory2Game:waterDetails")
          })]
        }), (0, xe.jsx)(lX, {
          stored: XJ,
          cap: AJ,
          netPerS: qJ,
          rates: BX(UJ, "cryoOut" === FJ, Ye(Math.abs(qJ), qJ < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === FJ
        })]
      })
    }

    function cA(JJ, cJ) {
      var ZJ, FJ, UJ;
      const eJ = !0 === cJ.baf2WaterCryo,
        XJ = null !== (ZJ = null === (FJ = cJ.baf2WaterMakers.find((JJ => JJ[0] === (eJ ? oJ.c : "Condenser")))) || void 0 === FJ ? void 0 : FJ[1]) && void 0 !== ZJ ? ZJ : 0,
        AJ = [],
        qJ = (cJ, ZJ, FJ) => {
          cJ > 0 && AJ.push(JJ(1 === cJ ? ZJ : FJ, {
            count: String(cJ)
          }))
        };
      return eJ ? qJ(XJ, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : qJ(XJ, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), qJ(null !== (UJ = cJ.baf2WaterPipes) && void 0 !== UJ ? UJ : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), qJ(cJ.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), AJ.join(" \xb7 ")
    }

    function ZA(JJ, cJ) {
      if (!0 === cJ.baf2WaterCryo) return function(JJ, cJ) {
        const ZJ = Sc[oJ.c];
        switch (cJ.baf2WaterThis) {
          case "pipe":
            return {
              text: JJ("buildAFactory2Game:cryoThisPipe"), bad: !1
            };
          case "condenserFull":
            return {
              text: JJ("buildAFactory2Game:cryoThisMixerFull"), bad: !1
            };
          case "condenserNoPower":
            return {
              text: JJ("buildAFactory2Game:cryoThisMixerNoPower"), bad: !0
            };
          case "condenserNoOutlet":
            return {
              text: JJ("buildAFactory2Game:cryoThisMixerNoOutlet"), bad: !0
            };
          case "mixerNoInput":
            return {
              text: JJ("buildAFactory2Game:cryoThisMixerNoInput"), bad: !0
            };
          case "mixerBadInput":
            return {
              text: JJ("buildAFactory2Game:cryoThisMixerBadInput"), bad: !0
            };
          case "mixerNoWater":
            return {
              text: JJ("buildAFactory2Game:cryoThisMixerNoWater"), bad: !0
            };
          case "condenser": {
            var FJ;
            const [UJ, eJ] = null !== (FJ = cJ.baf2WaterThisRates) && void 0 !== FJ ? FJ : [(0, oJ.G)(ZJ, ZJ.cryoMade), (0, oJ.G)(ZJ, ZJ.powerPerOp)];
            return !0 === cJ.baf2WaterDriven ? {
              text: JJ("buildAFactory2Game:cryoThisMixerDriven", {
                rate: aX(UJ)
              }),
              bad: !1
            } : {
              text: JJ("buildAFactory2Game:cryoThisMixer", {
                rate: aX(UJ),
                power: aX(eJ)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: JJ("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(JJ, cJ);
      const ZJ = !0 === cJ.baf2WaterDriven,
        FJ = Sc.Condenser;
      switch (cJ.baf2WaterThis) {
        case "pipe":
          return {
            text: JJ("buildAFactory2Game:waterThisPipe"), bad: !1
          };
        case "condenserFull":
          return {
            text: JJ("buildAFactory2Game:waterThisCondenserFull"), bad: !1
          };
        case "condenserNoPower":
          return {
            text: JJ("buildAFactory2Game:waterThisCondenserNoPower"), bad: !0
          };
        case "condenserNoOutlet":
          return {
            text: JJ("buildAFactory2Game:waterThisCondenserNoOutlet"), bad: !0
          };
        case "tank":
          return {
            text: JJ("buildAFactory2Game:waterThisTank", {
              tank: (0, oJ.V)(oJ.r),
              cap: (0, oJ.V)(cJ.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var UJ;
          const [eJ, XJ] = null !== (UJ = cJ.baf2WaterThisRates) && void 0 !== UJ ? UJ : [iX, (0, oJ.G)(FJ, FJ.powerPerOp)];
          return ZJ ? {
            text: JJ("buildAFactory2Game:waterThisCondenserDriven", {
              rate: aX(eJ)
            }),
            bad: !1
          } : {
            text: JJ("buildAFactory2Game:waterThisCondenser", {
              rate: aX(eJ),
              power: aX(XJ)
            }),
            bad: !1
          }
        }
        default:
          return {
            text: JJ("buildAFactory2Game:waterThisUser"), bad: !1
          }
      }
    }

    function FA(JJ, cJ) {
      const ZJ = cJ.baf2WaterMakers.some((JJ => !0 === JJ[5]));
      if (!0 === cJ.baf2WaterCryo) {
        const FJ = cJ.baf2WaterUsedPerS - cJ.baf2WaterMadePerS,
          UJ = ZJ || FJ <= RX ? 0 : (0, oJ.E)(FJ);
        return 0 === UJ ? null : UJ > 1 ? JJ("buildAFactory2Game:cryoNextMixers", {
          mixers: String(UJ)
        }) : JJ("buildAFactory2Game:cryoNextOne")
      }
      const FJ = ZJ ? null : function(JJ, cJ) {
        const ZJ = cJ - JJ;
        return ZJ <= RX ? null : Math.ceil(ZJ / iX)
      }(cJ.baf2WaterMadePerS, cJ.baf2WaterUsedPerS);
      return null === FJ ? null : FJ > 1 ? JJ("buildAFactory2Game:waterNextCondensers", {
        condensers: String(FJ)
      }) : JJ("buildAFactory2Game:waterNextOne")
    }

    function UA(JJ) {
      let {
        item: cJ,
        label: ZJ,
        note: FJ,
        value: UJ,
        dim: eJ,
        bad: XJ
      } = JJ;
      return (0, xe.jsxs)("li", {
        className: GU()("Baf2WaterRow", {
          Dim: eJ,
          Bad: XJ
        }),
        children: [(0, xe.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, xe.jsx)(QU.d, {
            itemName: cJ,
            amount: 0
          })
        }), (0, xe.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, xe.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: ZJ
          }), FJ && (0, xe.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: FJ
          })]
        }), (0, xe.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: UJ
        })]
      })
    }

    function eA(JJ) {
      return uX.m[JJ] ? JJ : "Reactor Port"
    }

    function XA(JJ) {
      let {
        message: cJ
      } = JJ;
      const {
        t: ZJ
      } = (0, vU.F)(), FJ = !0 === cJ.baf2WaterCryo, UJ = (JJ, cJ) => BX(ZJ, FJ, Ye(JJ, cJ));
      return (0, xe.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, xe.jsxs)("section", {
          children: [(0, xe.jsxs)("h3", {
            children: [ZJ("buildAFactory2Game:waterMakes"), (0, xe.jsx)("span", {
              children: UJ(cJ.baf2WaterMadePerS, "+")
            })]
          }), (0, xe.jsxs)("ul", {
            children: [0 === cJ.baf2WaterMakers.length && (0, xe.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: ZJ(FJ ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), cJ.baf2WaterMakers.map((JJ => {
              let [cJ, FJ, eJ, XJ, AJ, qJ] = JJ;
              const jJ = ZJ("buildAFactory2Game:powerRunning", {
                amount: String(eJ)
              });
              let YJ = AJ > 0 ? ZJ("buildAFactory2Game:waterMakerPower", {
                running: jJ,
                power: aX(AJ)
              }) : jJ;
              return qJ && (YJ = ZJ(0 === eJ && XJ <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, xe.jsx)(UA, {
                item: cJ,
                label: `${BU(ZJ,cJ)} \xd7${FJ}`,
                note: YJ,
                value: eJ > 0 || qJ && XJ > 0 ? UJ(XJ, "+") : ZJ("buildAFactory2Game:powerIdle"),
                dim: 0 === eJ && !qJ,
                bad: qJ
              }, cJ)
            }))]
          })]
        }), (0, xe.jsxs)("section", {
          children: [(0, xe.jsxs)("h3", {
            children: [ZJ("buildAFactory2Game:waterUses"), (0, xe.jsx)("span", {
              children: UJ(cJ.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, xe.jsxs)("ul", {
            children: [0 === cJ.baf2WaterUsers.length && (0, xe.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: ZJ(FJ ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), cJ.baf2WaterUsers.map((JJ => {
              let [cJ, FJ, eJ, XJ] = JJ;
              const AJ = uX.m[cJ] ? BU(ZJ, cJ) : cJ;
              return (0, xe.jsx)(UA, {
                item: eA(cJ),
                label: FJ > 1 ? `${AJ} \xd7${FJ}` : AJ,
                note: XJ ? ZJ("buildAFactory2Game:waterPortFirst") : void 0,
                value: eJ > 0 ? UJ(eJ, "\u2212") : ZJ("buildAFactory2Game:powerIdle"),
                dim: 0 === eJ
              }, cJ)
            }))]
          })]
        })]
      })
    }

    function AA(JJ) {
      var cJ, ZJ, UJ, eJ, XJ;
      let {
        store: AJ,
        close: qJ
      } = JJ;
      const {
        t: jJ
      } = (0, vU.F)(), YJ = function(JJ) {
        const [cJ, ZJ] = (0, FJ.useState)((() => JJ.get()));
        return (0, FJ.useEffect)((() => (ZJ(JJ.get()), JJ.subscribe((() => {
          ZJ(JJ.get())
        })))), [JJ]), cJ
      }(AJ), hJ = null !== (cJ = null === YJ || void 0 === YJ ? void 0 : YJ.baf2WaterStored) && void 0 !== cJ ? cJ : 0, DJ = null !== (ZJ = null === YJ || void 0 === YJ ? void 0 : YJ.baf2WaterCap) && void 0 !== ZJ ? ZJ : 0, sJ = null !== (UJ = null === YJ || void 0 === YJ ? void 0 : YJ.baf2WaterMadePerS) && void 0 !== UJ ? UJ : 0, nJ = null !== (eJ = null === YJ || void 0 === YJ ? void 0 : YJ.baf2WaterUsedPerS) && void 0 !== eJ ? eJ : 0, GJ = null !== (XJ = null === YJ || void 0 === YJ ? void 0 : YJ.baf2WaterNetPerS) && void 0 !== XJ ? XJ : sJ - nJ, fJ = YJ && ZA(jJ, YJ), xJ = YJ && FA(jJ, YJ), rJ = !0 === (null === YJ || void 0 === YJ ? void 0 : YJ.baf2WaterCryo);
      return (0, xe.jsx)(sX.c, {
        close: qJ,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, xe.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, xe.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, xe.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== YJ && DJ <= 0 ? (0, xe.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, xe.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, xe.jsx)(QU.d, {
                  itemName: rJ ? AZ.h : oJ.j,
                  amount: 0
                })
              }), (0, xe.jsxs)("div", {
                children: [(0, xe.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: jJ(rJ ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), YJ && (0, xe.jsx)("p", {
                  children: cA(jJ, YJ)
                })]
              })]
            }), (0, xe.jsx)(nX.j, {
              onClick: qJ
            })]
          }), YJ && fJ && (0, xe.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, xe.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, xe.jsx)(lX, {
                stored: hJ,
                cap: DJ,
                netPerS: GJ,
                cryo: rJ,
                rates: tX(jJ, rJ, sJ, nJ)
              })
            }), (0, xe.jsx)("div", {
              className: GU()("Baf2WaterThis", {
                Bad: fJ.bad
              }),
              children: fJ.text
            }), YJ.baf2WaterDriven && (0, xe.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, xe.jsx)(mU.c, {
                name: "bolt"
              }), jJ(rJ ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), xJ && (0, xe.jsx)("p", {
              className: "Baf2WaterNext",
              children: xJ
            }), (0, xe.jsx)(XA, {
              message: YJ
            })]
          })]
        })
      })
    }
    class qA {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(JJ, cJ) {
        const ZJ = this.get(JJ);
        ZJ && null === cJ.opLeftMs && null === cJ.fuelLeftMs && cJ.status === ZJ.status ? cJ = {
          ...cJ,
          opLeftMs: ZJ.opLeftMs,
          fuelLeftMs: ZJ.fuelLeftMs,
          burning: ZJ.burning
        } : this.updates++, this.pos = JJ, this.view = cJ;
        for (const FJ of this.listeners) FJ()
      }
      get(JJ) {
        return null !== this.pos && this.pos[0] === JJ[0] && this.pos[1] === JJ[1] && this.pos[2] === JJ[2] ? this.view : null
      }
      forget(JJ) {
        null !== this.get(JJ) && (this.pos = null, this.view = null)
      }
      get updateCount() {
        return this.updates
      }
      subscribe(JJ) {
        return this.listeners.add(JJ), () => {
          this.listeners.delete(JJ)
        }
      }
    }

    function jA(JJ, cJ, ZJ, FJ) {
      return "noFuel" === cJ && FJ && !tc(Sc[JJ]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === cJ && !0 === (null === ZJ || void 0 === ZJ ? void 0 : ZJ.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === cJ && !0 === (null === ZJ || void 0 === ZJ ? void 0 : ZJ.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === cJ && !0 === (null === ZJ || void 0 === ZJ ? void 0 : ZJ.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === cJ && !0 === (null === ZJ || void 0 === ZJ ? void 0 : ZJ.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : YA(cJ, ZJ) ? "buildAFactory2Game:machineStatus_noInputShort" : function(JJ, cJ) {
        const ZJ = Sc[JJ];
        if ("noFuel" === cJ && void 0 !== ZJ.fuels) return tc(ZJ) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (ZJ.mobFarm && ("noInput" === cJ || "badInput" === cJ)) return `buildAFactory2Game:machineStatus_${cJ}MobFarm`;
        if ("outputFull" === cJ && (void 0 !== ZJ.table || ZJ.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === cJ && zc(ZJ)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== ZJ.cryoMade && ("noInput" === cJ || "noOutlet" === cJ || "fluidFull" === cJ)) return `buildAFactory2Game:machineStatus_${cJ}Mixer`;
        return `buildAFactory2Game:machineStatus_${cJ}`
      }(JJ, cJ)
    }

    function YA(JJ, cJ) {
      return "noInput" === JJ && null !== cJ && void 0 !== cJ && cJ.input && cJ.inputShort ? {
        input: cJ.input,
        short: cJ.inputShort
      } : null
    }

    function hA(JJ) {
      return fU(JJ) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== JJ.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function DA(JJ) {
      const cJ = (0, HJ.be)(JJ);
      return `Baf2Pane Baf2Pane${cJ.charAt(0).toUpperCase()}${cJ.slice(1)}`
    }

    function sA(JJ, cJ) {
      const [ZJ, UJ] = (0, FJ.useState)((() => JJ.get(cJ)));
      return (0, FJ.useEffect)((() => {
        UJ(JJ.get(cJ));
        const ZJ = JJ.subscribe((() => {
          UJ(JJ.get(cJ))
        }));
        return () => {
          ZJ(), JJ.forget(cJ)
        }
      }), [JJ, ...cJ]), ZJ
    }

    function nA(JJ, cJ, ZJ, FJ) {
      const UJ = Sc[JJ],
        eJ = cJ && UJ.couplable ? Pc(UJ, ZJ) : UJ,
        XJ = null !== FJ && Lc(eJ) ? function(JJ, cJ) {
          var ZJ;
          return null !== (ZJ = null !== cJ && Lc(JJ) ? JZ[cJ] : void 0) && void 0 !== ZJ ? ZJ : JJ.opMs
        }(eJ, cZ(FJ)) : eJ.opMs;
      return XJ === eJ.opMs ? eJ : {
        ...eJ,
        opMs: XJ
      }
    }

    function GA(JJ) {
      let {
        running: cJ,
        opMs: ZJ,
        opLeftMs: FJ,
        updateCount: UJ
      } = JJ;
      return (0, xe.jsx)("div", {
        className: GU()("Baf2MachineProgress", {
          Running: cJ
        }),
        children: (0, xe.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: ZJ / 1e3 + "s",
            animationDelay: null === FJ ? void 0 : (FJ - ZJ) / 1e3 + "s"
          }
        }, UJ)
      })
    }

    function fA(JJ) {
      let {
        running: cJ,
        leftMs: ZJ,
        periodMs: FJ,
        updateCount: UJ
      } = JJ;
      const {
        t: eJ
      } = (0, vU.F)(), XJ = Math.min(Math.max(null !== ZJ && void 0 !== ZJ ? ZJ : 0, 0), FJ), AJ = cJ && XJ > 0, qJ = eJ("buildAFactory2Game:machineBarFuel");
      return (0, xe.jsx)("div", {
        className: GU()("Baf2FuelBurn", {
          Draining: AJ
        }),
        role: "img",
        title: qJ,
        "aria-label": qJ,
        children: (0, xe.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: AJ ? {
            animationDuration: FJ / 1e3 + "s",
            animationDelay: (XJ - FJ) / 1e3 + "s"
          } : {
            transform: `scaleY(${XJ/FJ})`
          }
        }, UJ)
      })
    }

    function xA(JJ, cJ, ZJ) {
      let [FJ, UJ] = ZJ;
      const eJ = 1 !== FJ ? rU(cJ) : null;
      return {
        amount: FJ,
        have: UJ,
        item: JJ(eJ || aU(cJ))
      }
    }

    function rA(JJ) {
      return Lc(JJ) ? "buildAFactory2Game:machineBarMining" : ac(JJ) ? "buildAFactory2Game:machineBarCutting" : void 0 !== JJ.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function vA(JJ) {
      var cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ, YJ, hJ, DJ, sJ, nJ, GJ, fJ, xJ, rJ, vJ;
      let {
        kind: mJ,
        JZ: QJ,
        store: EJ,
        power: VJ,
        renderSlot: KJ
      } = JJ;
      const {
        t: yJ
      } = (0, vU.F)(), SJ = sA(EJ, QJ), IJ = Sc[mJ], MJ = null !== (cJ = null === SJ || void 0 === SJ ? void 0 : SJ.coupled) && void 0 !== cJ && cJ, bJ = null !== (ZJ = null === SJ || void 0 === SJ ? void 0 : SJ.couplerLevel) && void 0 !== ZJ ? ZJ : 1, wJ = nA(mJ, MJ, bJ, null !== (FJ = null === SJ || void 0 === SJ || null === (UJ = SJ.dug) || void 0 === UJ ? void 0 : UJ.item) && void 0 !== FJ ? FJ : null), WJ = null !== (eJ = null === SJ || void 0 === SJ ? void 0 : SJ.status) && void 0 !== eJ ? eJ : null, gJ = null !== (XJ = null === SJ || void 0 === SJ ? void 0 : SJ.power) && void 0 !== XJ ? XJ : null, HJ = null !== (AJ = null === SJ || void 0 === SJ ? void 0 : SJ.opLeftMs) && void 0 !== AJ ? AJ : null, PJ = null !== (qJ = null === SJ || void 0 === SJ ? void 0 : SJ.dug) && void 0 !== qJ ? qJ : null, kJ = null !== PJ && Lc(IJ) ? JZ[null !== (jJ = cZ(PJ.item)) && void 0 !== jJ ? jJ : ""] : void 0, pJ = void 0 === kJ ? null : 6e4 / kJ, dJ = null !== (YJ = null === SJ || void 0 === SJ ? void 0 : SJ.powerCap) && void 0 !== YJ ? YJ : 4e3, zJ = null !== (hJ = null === SJ || void 0 === SJ ? void 0 : SJ.tier) && void 0 !== hJ ? hJ : null, NJ = void 0 !== wJ.powerMade, OJ = null !== IJ.fuelSlot ? KJ(IJ.fuelSlot) : null, TJ = Hc(IJ), CJ = !MJ && !0 === (null === SJ || void 0 === SJ ? void 0 : SJ.fuelFed), iJ = !MJ && !0 === (null === SJ || void 0 === SJ ? void 0 : SJ.fuelFeeds), RJ = null !== IJ.fuelSlot && !MJ, LJ = null !== (DJ = null === SJ || void 0 === SJ ? void 0 : SJ.fuelLeftMs) && void 0 !== DJ ? DJ : null, aJ = function(JJ, cJ, ZJ) {
        var FJ;
        const UJ = null === cJ ? void 0 : oc[cJ];
        return Math.max(null !== (FJ = null !== UJ && void 0 !== UJ ? UJ : ZJ) && void 0 !== FJ ? FJ : 0, JJ.opMs)
      }(wJ, null !== (sJ = null === SJ || void 0 === SJ ? void 0 : SJ.burning) && void 0 !== sJ ? sJ : null, LJ), BJ = null !== (nJ = null === SJ || void 0 === SJ ? void 0 : SJ.fuelKeep) && void 0 !== nJ ? nJ : null, tJ = null === WJ ? null : jA(mJ, WJ, SJ, CJ), oJ = null === WJ ? null : YA(WJ, SJ);
      return (0, xe.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, xe.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, xe.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: yJ(aU(mJ))
          }), PJ && (0, xe.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [yJ("Tree Cutter" === mJ ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, xe.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, xe.jsx)(QU.d, {
                itemName: PJ.item,
                amount: 0
              })
            }), (0, xe.jsx)(EU.d, {
              text: PJ.name
            })]
          }), null !== pJ && (0, xe.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: yJ("buildAFactory2Game:machineDigsFixed", {
              perMin: String(pJ)
            })
          }), (null === SJ || void 0 === SJ ? void 0 : SJ.field) && (0, xe.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, xe.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, xe.jsx)(QU.d, {
                itemName: "Wheat",
                amount: 0
              })
            }), yJ("buildAFactory2Game:machineField", {
              planted: String(SJ.field[0]),
              ripe: String(SJ.field[1])
            })]
          }), (0, xe.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, xe.jsxs)("div", {
              className: GU()("Baf2MachineColumn", {
                Baf2Burns: RJ
              }),
              children: [null !== wJ.inputSlot && (0, xe.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, xe.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: yJ(hA(wJ))
                }), KJ(wJ.inputSlot)]
              }), null !== IJ.fuelSlot && !MJ && (0, xe.jsxs)("div", {
                className: GU()("Baf2MachineSlot", {
                  Baf2FuelFed: CJ
                }),
                children: [(0, xe.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [CJ && (0, xe.jsx)(mU.c, {
                    name: "fire"
                  }), yJ("buildAFactory2Game:machineFuel")]
                }), (0, xe.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, xe.jsx)(fA, {
                    running: "running" === WJ,
                    leftMs: LJ,
                    periodMs: aJ,
                    updateCount: EJ.updateCount
                  }), OJ]
                })]
              }), null !== IJ.fuelSlot && MJ && (0, xe.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, xe.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: yJ("buildAFactory2Game:machineFuel")
                }), (0, xe.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: yJ("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": yJ("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, xe.jsx)(mU.c, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, xe.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, xe.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: yJ(rA(wJ))
              }), (0, xe.jsx)(GA, {
                running: "running" === WJ,
                opMs: wJ.opMs,
                opLeftMs: HJ,
                updateCount: EJ.updateCount
              })]
            }), wJ.outputSlots.length > 0 && (0, xe.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, xe.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: yJ("buildAFactory2Game:machineOutput")
              }), (0, xe.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: wJ.outputSlots.map((JJ => (0, xe.jsx)("div", {
                  children: KJ(JJ)
                }, JJ)))
              })]
            }), null !== gJ && NJ && (0, xe.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, xe.jsx)("div", {
                style: {
                  height: 100 * gJ / dJ + "%"
                }
              })
            })]
          }), RJ && null !== BJ && (0, xe.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, xe.jsx)(mU.c, {
              name: "arrows-rotate"
            }), yJ(ac(wJ) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(BJ)
            })]
          }), (CJ || iJ) && (0, xe.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, xe.jsx)(mU.c, {
              name: "fire"
            }), yJ(CJ ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), IJ.couplable && (0, xe.jsx)(TX, {
            kind: mJ,
            tier: zJ,
            coupled: MJ,
            level: bJ,
            slot: TJ === IJ.fuelSlot ? OJ : null !== TJ ? KJ(TJ) : null
          }), null !== gJ && !NJ && !0 === (null === SJ || void 0 === SJ ? void 0 : SJ.reactorPowered) && (0, xe.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: yJ("buildAFactory2Game:machineReactorPowered")
          }), null !== gJ && !NJ && !0 !== (null === SJ || void 0 === SJ ? void 0 : SJ.reactorPowered) && (0, xe.jsx)(QX, {
            stored: gJ,
            cap: dJ,
            rates: null !== (GJ = null === SJ || void 0 === SJ ? void 0 : SJ.powerRates) && void 0 !== GJ ? GJ : null
          }), (null === SJ || void 0 === SJ ? void 0 : SJ.water) && (0, xe.jsx)(JA, {
            water: SJ.water,
            at: QJ,
            side: SJ.cryo ? "waterIn" : null
          }), (null === SJ || void 0 === SJ ? void 0 : SJ.cryo) && (0, xe.jsx)(JA, {
            water: SJ.cryo,
            at: QJ,
            side: "cryoOut"
          }), null !== SJ && void 0 !== SJ && SJ.inertCoupler ? (0, xe.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: yJ("buildAFactory2Game:machineStatus_couplerOff", {
              item: BU(yJ, SJ.inertCoupler)
            })
          }) : null !== tJ && (0, xe.jsx)("div", {
            className: GU()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== WJ
            }),
            children: yJ(tJ, oJ ? xA(yJ, oJ.input, oJ.short) : void 0)
          })]
        }), (0, xe.jsxs)("div", {
          className: GU()("Baf2MachineSide", {
            Baf2SynthSide: zc(IJ)
          }),
          children: [zc(IJ) && (0, xe.jsx)(NX, {
            JZ: QJ,
            taught: null !== (fJ = null === SJ || void 0 === SJ ? void 0 : SJ.taught) && void 0 !== fJ ? fJ : null
          }, QJ.join(",")), NJ && (0, xe.jsx)(VX, {
            kind: mJ,
            def: wJ,
            JZ: QJ,
            power: VJ,
            stored: null !== gJ && void 0 !== gJ ? gJ : 0,
            cap: dJ
          }), uJ(IJ) && (0, xe.jsx)(pX, {
            JZ: QJ,
            input: null !== (xJ = null === SJ || void 0 === SJ ? void 0 : SJ.input) && void 0 !== xJ ? xJ : null,
            drops: null !== (rJ = null === SJ || void 0 === SJ ? void 0 : SJ.farm) && void 0 !== rJ ? rJ : null,
            seconds: String(wJ.opMs / 1e3)
          }), !NJ && !uJ(IJ) && !zc(IJ) && (0, xe.jsx)(ae, {
            kind: mJ,
            def: wJ,
            input: null !== (vJ = null === SJ || void 0 === SJ ? void 0 : SJ.input) && void 0 !== vJ ? vJ : null,
            tier: null !== zJ && void 0 !== zJ ? zJ : 1,
            noSeeds: !0 === (null === SJ || void 0 === SJ ? void 0 : SJ.noSeeds)
          })]
        })]
      })
    }

    function mA(JJ, cJ, ZJ, FJ) {
      var UJ;
      const eJ = Sc[JJ],
        XJ = [eJ.inputSlot, eJ.fuelSlot, ...null !== (UJ = eJ.inputSlots) && void 0 !== UJ ? UJ : []].filter((JJ => null !== JJ));
      return {
        render: UJ => {
          let {
            JZ: eJ,
            renderSlot: XJ
          } = UJ;
          return (0, xe.jsx)(WX.Provider, {
            value: FJ,
            children: (0, xe.jsx)(vA, {
              kind: JJ,
              JZ: eJ,
              store: cJ,
              power: ZJ,
              renderSlot: XJ
            })
          })
        },
        quickMoveRange: XJ.length > 0 ? [Math.min(...XJ), Math.max(...XJ) + 1] : [0, 0],
        className: DA(JJ)
      }
    }
    const QA = "Assembler";

    function EA(JJ) {
      var cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ;
      let {
        JZ: YJ,
        store: hJ,
        renderSlot: DJ
      } = JJ;
      const {
        t: sJ
      } = (0, vU.F)(), nJ = sA(hJ, YJ), GJ = null !== (cJ = null === nJ || void 0 === nJ ? void 0 : nJ.tier) && void 0 !== cJ ? cJ : 1, fJ = null !== (ZJ = null === nJ || void 0 === nJ ? void 0 : nJ.taught) && void 0 !== ZJ ? ZJ : null, xJ = Cc(QA, {
        coupled: !1,
        taught: fJ
      }), rJ = null !== (FJ = xJ.bench) && void 0 !== FJ ? FJ : null, vJ = null !== (UJ = null === nJ || void 0 === nJ ? void 0 : nJ.status) && void 0 !== UJ ? UJ : null, mJ = null !== (eJ = null === nJ || void 0 === nJ ? void 0 : nJ.power) && void 0 !== eJ ? eJ : null, QJ = null !== (XJ = null === nJ || void 0 === nJ ? void 0 : nJ.powerCap) && void 0 !== XJ ? XJ : 4e3;
      return (0, xe.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, xe.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, xe.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: sJ(aU(QA))
          }), rJ && (0, xe.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [sJ("buildAFactory2Game:benchMakes"), (0, xe.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, xe.jsx)(QU.d, {
                itemName: rJ.output,
                amount: 0
              })
            }), (null === nJ || void 0 === nJ ? void 0 : nJ.taughtName) && (0, xe.jsx)(EU.d, {
              text: nJ.taughtName
            }), rJ.outputAmount > 1 && (0, xe.jsxs)("span", {
              children: ["\xd7", rJ.outputAmount]
            })]
          }), !rJ && (0, xe.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: sJ("buildAFactory2Game:benchTeachHint")
          }), (0, xe.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, xe.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (AJ = xJ.inputSlots) && void 0 !== AJ ? AJ : []).map(((JJ, cJ) => {
                const ZJ = null === rJ || void 0 === rJ ? void 0 : rJ.inputs[cJ];
                return (0, xe.jsxs)("div", {
                  className: GU()("Baf2BenchInput", {
                    Spare: !ZJ
                  }),
                  children: [(0, xe.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [DJ(JJ), ZJ && (0, xe.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, xe.jsx)(QU.d, {
                        itemName: ZJ.item,
                        amount: 0
                      })
                    })]
                  }), (0, xe.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: ZJ ? `\xd7${ZJ.amount}` : "\xa0"
                  })]
                }, JJ)
              }))
            }), (0, xe.jsx)(GA, {
              running: "running" === vJ,
              opMs: xJ.opMs,
              opLeftMs: null !== (qJ = null === nJ || void 0 === nJ ? void 0 : nJ.opLeftMs) && void 0 !== qJ ? qJ : null,
              updateCount: hJ.updateCount
            }), (0, xe.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, xe.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: sJ("buildAFactory2Game:machineOutput")
              }), (0, xe.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: xJ.outputSlots.map((JJ => (0, xe.jsx)("div", {
                  children: DJ(JJ)
                }, JJ)))
              })]
            })]
          }), null !== mJ && (0, xe.jsx)(QX, {
            stored: mJ,
            cap: QJ,
            rates: null !== (jJ = null === nJ || void 0 === nJ ? void 0 : nJ.powerRates) && void 0 !== jJ ? jJ : null
          }), null !== vJ && (0, xe.jsx)("div", {
            className: GU()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== vJ
            }),
            children: sJ(jA(QA, vJ, nJ, !1))
          }), rJ && rJ.inputs.length > 1 && (0, xe.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: sJ("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, xe.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, xe.jsx)(te, {
            taught: fJ,
            tier: GJ
          }), rJ && (0, xe.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: sJ("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function VA(JJ) {
      var cJ;
      const ZJ = null !== (cJ = Sc[QA].inputSlots) && void 0 !== cJ ? cJ : [];
      return {
        render: cJ => {
          let {
            JZ: ZJ,
            renderSlot: FJ
          } = cJ;
          return (0, xe.jsx)(EA, {
            JZ: ZJ,
            store: JJ,
            renderSlot: FJ
          })
        },
        quickMoveRange: [Math.min(...ZJ), Math.max(...ZJ) + 1],
        className: DA(QA)
      }
    }
    var KA = ZJ(80),
      yA = ZJ(1022),
      SA = ZJ(3726);
    const IA = 600,
      MA = .5,
      bA = 4,
      wA = 1200,
      WA = 140,
      gA = 100,
      HA = 32,
      PA = 16,
      kA = 100.5,
      pA = 90,
      dA = 1.5,
      zA = 50;

    function NA(JJ) {
      switch (VZ(JJ)) {
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
    const OA = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function TA(JJ) {
      const cJ = Math.ceil(60 * JJ / gA);
      return {
        fuel: Math.max(HA, cJ),
        waste: Math.max(PA, cJ)
      }
    }

    function CA(JJ, cJ, ZJ) {
      const [FJ, UJ, eJ] = [JJ - 2, cJ - 2, ZJ - 2];
      return 2 * (FJ * UJ + UJ * eJ + eJ * FJ) * WA
    }

    function uA(JJ, cJ, ZJ) {
      return Math.max(0, JJ - 2) * Math.max(0, cJ - 2) * Math.max(0, ZJ - 2)
    }

    function iA(JJ, cJ) {
      const [ZJ, FJ, UJ] = JJ, eJ = ZJ * FJ * UJ, XJ = new Float32Array(eJ);
      let AJ = 0,
        qJ = 0,
        jJ = 0,
        YJ = 0,
        hJ = 0;
      const DJ = (JJ, eJ, XJ) => JJ < 0 || JJ >= ZJ || eJ < 0 || eJ >= FJ || XJ < 0 || XJ >= UJ ? 0 : cJ[(eJ * UJ + XJ) * ZJ + JJ];
      for (let fJ = 0; fJ < FJ; fJ++)
        for (let JJ = 0; JJ < UJ; JJ++)
          for (let FJ = 0; FJ < ZJ; FJ++) {
            const eJ = (fJ * UJ + JJ) * ZJ + FJ,
              sJ = cJ[eJ];
            if (1 === sJ) {
              AJ++;
              let cJ = 0;
              for (const [ZJ, UJ, eJ] of OA) {
                const XJ = DJ(FJ + ZJ, fJ + UJ, JJ + eJ);
                1 !== XJ && 2 !== XJ || cJ++
              }
              XJ[eJ] = IA * (1 + MA * Math.min(cJ, bA)), YJ += XJ[eJ]
            } else if (2 === sJ) qJ++;
            else if (3 === sJ) {
              jJ++;
              OA.some((cJ => {
                let [ZJ, UJ, eJ] = cJ;
                return 1 === DJ(FJ + ZJ, fJ + UJ, JJ + eJ)
              })) && (hJ += wA)
            }
          }
      const sJ = CA(ZJ + 2, FJ + 2, UJ + 2),
        nJ = Math.min(YJ, hJ, sJ),
        GJ = AJ > 0 ? YJ * gA / AJ : 0;
      return {
        rods: AJ,
        graphite: qJ,
        channels: jJ,
        fuelHeat: YJ,
        cooling: hJ,
        size: sJ,
        max: nJ,
        vol: eJ,
        powerPerUnit: GJ,
        pelletsPerMin: GJ > 0 ? nJ / GJ * 60 : 0,
        waterPerS: nJ * oJ.o,
        rodHeat: XJ
      }
    }
    const RA = 0,
      LA = 1,
      aA = 6,
      BA = 7,
      tA = 8;

    function oA(JJ, cJ) {
      const [ZJ, FJ, UJ] = JJ, eJ = new Uint8Array(ZJ * FJ * UJ), XJ = (JJ, eJ, XJ) => JJ < 0 || JJ >= ZJ || eJ < 0 || eJ >= FJ || XJ < 0 || XJ >= UJ ? 0 : cJ[(eJ * UJ + XJ) * ZJ + JJ];
      for (let AJ = 0; AJ < FJ; AJ++)
        for (let JJ = 0; JJ < UJ; JJ++)
          for (let FJ = 0; FJ < ZJ; FJ++) {
            const qJ = (AJ * UJ + JJ) * ZJ + FJ,
              jJ = cJ[qJ];
            if (1 === jJ) {
              let cJ = 0;
              for (const [ZJ, UJ, eJ] of OA) {
                const qJ = XJ(FJ + ZJ, AJ + UJ, JJ + eJ);
                cJ += 1 === qJ || 2 === qJ ? 1 : 0
              }
              eJ[qJ] = LA + Math.min(cJ, bA)
            } else if (3 === jJ) {
              const cJ = OA.some((cJ => {
                let [ZJ, UJ, eJ] = cJ;
                return 1 === XJ(FJ + ZJ, AJ + UJ, JJ + eJ)
              }));
              eJ[qJ] = cJ ? aA : BA
            } else 2 === jJ && (eJ[qJ] = tA)
          }
      return eJ
    }

    function lA(JJ) {
      return JJ.fuelHeat <= JJ.cooling && JJ.fuelHeat <= JJ.size ? "fuel" : JJ.cooling <= JJ.size ? "cooling" : "size"
    }
    const Jq = pA;

    function cq(JJ, cJ, ZJ) {
      return Math.round(JJ * cJ * ZJ * 25e3 * (1 + .25 * (Math.min(JJ, cJ, ZJ) - 2)))
    }

    function Zq(JJ) {
      return Math.max(0, Math.min(oJ.e, JJ))
    }

    function Fq(JJ, cJ, ZJ) {
      const FJ = cJ * Zq(ZJ);
      return JJ <= 0 ? 0 : FJ > 0 ? Math.min(200, 100 * JJ / FJ) : 200
    }

    function Uq(JJ, cJ) {
      const ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? dA : 1;
      return Math.min(JJ.fuelHeat * ZJ, JJ.cooling * Zq(cJ), JJ.size * ZJ)
    }

    function eq(JJ) {
      return 2 + JJ / 10
    }
    const Xq = "buildAFactory2Game:";

    function Aq(JJ) {
      var cJ;
      return null !== (cJ = JJ.baf2RxMood) && void 0 !== cJ ? cJ : function(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const ZJ = [
          ["calm", 50],
          ["warm", Jq],
          ["hot", kA]
        ];
        for (const [FJ, UJ] of ZJ)
          if (JJ < UJ + (FJ === cJ ? 3 : 0)) return FJ;
        return "alarm"
      }(JJ.baf2RxHeat)
    }
    const qq = 120;

    function jq(JJ) {
      const cJ = JJ.baf2RxState;
      if ("running" === cJ && JJ.baf2RxHeat > kA) return {
        label: `${Xq}rxState_tooHot`,
        tone: "bad",
        fix: `${Xq}rxFix_tooHot`
      };
      switch (cJ) {
        case "running":
          return {
            label: `${Xq}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${Xq}rxState_idle`, tone: "off", fix: `${Xq}rxFix_idle`
          };
        case "scram":
          return {
            label: `${Xq}rxState_scram`, tone: "off", fix: JJ.baf2RxHeat < zA ? `${Xq}rxFix_scramCool` : `${Xq}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${Xq}rxState_${cJ}`, tone: "off", fix: `${Xq}rxFix_${cJ}`
          };
        case "melted":
          return {
            label: `${Xq}rxState_melted`, tone: "bad", fix: `${Xq}rxFix_melted`
          };
        default:
          return {
            label: `${Xq}rxState_${cJ}`, tone: "warn", fix: `${Xq}rxFix_${cJ}`
          }
      }
    }

    function Yq(JJ) {
      const [cJ, ZJ, FJ] = JJ.baf2RxStats;
      return {
        fuelHeat: cJ,
        cooling: ZJ * (JJ.baf2RxCryo ? Math.max(1, Zq(JJ.baf2RxWater / 100)) : 1),
        size: FJ
      }
    }

    function hq(JJ) {
      var cJ;
      const ZJ = "idle" === JJ.baf2RxState || "running" === JJ.baf2RxState && JJ.baf2RxHeat <= kA || "scram" === JJ.baf2RxState && JJ.baf2RxHeat < zA;
      if (0 === (JJ.baf2RxFlags & sc) || !JJ.baf2RxFormed || !ZJ) return null;
      const {
        fuelHeat: FJ,
        cooling: UJ,
        size: eJ
      } = Yq(JJ), XJ = Math.min(FJ, UJ, eJ), AJ = lA({
        fuelHeat: FJ,
        cooling: UJ,
        size: eJ
      }), qJ = "cooling" === AJ && !0 === JJ.baf2RxCryoOpen && !JJ.baf2RxCryo, jJ = null !== (cJ = JJ.baf2RxCells) && void 0 !== cJ ? cJ : "", YJ = ("fuel" === AJ || "cooling" === AJ && !0 === JJ.baf2RxCryo) && jJ.length > 0 && !jJ.includes(String(0)), hJ = qJ ? "Cryo" : "scram" === JJ.baf2RxState ? "Off" : "";
      return XJ < 12e3 ? {
        key: `${Xq}rxGrow_${YJ?"full":AJ}${hJ}`,
        amount: XJ
      } : null
    }

    function Dq(JJ, cJ) {
      return JJ[0] === cJ[0] && JJ[1] === cJ[1] && JJ[2] === cJ[2]
    }

    function sq(JJ) {
      return [...JJ].sort(((JJ, cJ) => Number(cJ[2] < cJ[1]) - Number(JJ[2] < JJ[1])))
    }

    function nq(JJ, cJ) {
      return cJ.some((cJ => {
        let [ZJ, FJ] = cJ;
        return !(FJ <= 0) && ["edge", "cap", "wall", "inside"].some((cJ => ZJ === oZ(JJ, cJ)))
      }))
    }

    function Gq(JJ, cJ, ZJ) {
      const FJ = JJ.baf2RxFuel - JJ.baf2RxPu > 0 ? ZJ : 0;
      return {
        full: JJ.baf2RxWaste > cJ - 3,
        fullInS: FJ > 0 ? Math.max(0, cJ - JJ.baf2RxWaste) / FJ : null
      }
    }
    const fq = {
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

    function xq(JJ) {
      return rq[JJ]
    }
    const rq = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function vq(JJ) {
      let [cJ, ZJ, FJ] = JJ;
      return Math.ceil(CA(cJ, ZJ, FJ) * oJ.o)
    }

    function mq(JJ, cJ) {
      return "battery" === JJ ? cJ[0] * cJ[1] * cJ[2] : function(JJ) {
        let [cJ, ZJ, FJ] = JJ;
        return cJ * ZJ * FJ - Math.max(0, cJ - 2) * Math.max(0, ZJ - 2) * Math.max(0, FJ - 2)
      }(cJ) - 1
    }

    function Qq(JJ) {
      const cJ = Math.max(0, JJ);
      if (cJ < 10) return String(Math.round(10 * cJ) / 10);
      if (cJ < 1e4) return Math.round(cJ).toLocaleString("en-US");
      if (cJ < 1e6) return `${cJ<1e5?(Math.floor(cJ/100)/10).toFixed(1):Math.floor(cJ/1e3)}k`;
      const ZJ = cJ / 1e6;
      return `${ZJ<10?(Math.floor(100*ZJ)/100).toFixed(2):ZJ<100?(Math.floor(10*ZJ)/10).toFixed(1):Math.floor(ZJ)}M`
    }

    function Eq(JJ) {
      return JJ <= 0 ? "0" : JJ >= 10 ? String(Math.round(JJ)) : JJ.toFixed(JJ >= 1 ? 1 : 2)
    }

    function Vq(JJ) {
      const cJ = uZ(JJ, 0),
        ZJ = uZ(JJ, NZ(JJ) - 1);
      return {
        lo: [Math.min(cJ[0], ZJ[0]), Math.min(cJ[1], ZJ[1]), Math.min(cJ[2], ZJ[2])],
        hi: [Math.max(cJ[0], ZJ[0]) + 1, Math.max(cJ[1], ZJ[1]) + 1, Math.max(cJ[2], ZJ[2]) + 1]
      }
    }

    function Kq(JJ, cJ, ZJ) {
      const FJ = [cJ[0] - JJ[0], cJ[1] - JJ[1], cJ[2] - JJ[2]],
        UJ = [(JJ[0] + cJ[0]) / 2, (JJ[1] + cJ[1]) / 2, (JJ[2] + cJ[2]) / 2],
        eJ = [];
      for (let XJ = 0; XJ < 3; XJ++) {
        const AJ = (XJ + 1) % 3,
          qJ = (XJ + 2) % 3;
        for (const jJ of [JJ[AJ], cJ[AJ]])
          for (const YJ of [JJ[qJ], cJ[qJ]]) {
            const JJ = [0, 0, 0],
              cJ = [ZJ, ZJ, ZJ];
            JJ[XJ] = UJ[XJ], cJ[XJ] = FJ[XJ] + ZJ, JJ[AJ] = jJ, JJ[qJ] = YJ, eJ.push([JJ, cJ])
          }
      }
      return eJ
    }
    const yq = "buildAFactory2Game:",
      Sq = [`${yq}colNorth`, `${yq}colEast`, `${yq}colSouth`, `${yq}colWest`];

    function Iq(JJ, cJ) {
      const [ZJ, FJ, UJ] = JJ.baf2ColAt;
      return `baf2col ${ZJ} ${FJ} ${UJ} ${cJ}`
    }

    function Mq(JJ) {
      return function(JJ) {
        if (!Number.isFinite(JJ)) return "";
        const cJ = Math.max(1, Math.round(JJ));
        if (cJ < 60) return `${cJ}s`;
        const ZJ = cJ % 60;
        return 0 === ZJ ? cJ / 60 + "m" : `${Math.floor(cJ/60)}m ${ZJ}s`
      }(function(JJ) {
        const cJ = lZ.FOCUS_BY_LASERS[Math.max(0, Math.min(4, JJ))];
        return cJ > 0 ? lZ.NOVA_FOCUS / cJ : 1 / 0
      }(JJ))
    }

    function bq(JJ) {
      const cJ = Math.abs(Math.round(JJ));
      return cJ < 1e3 ? Math.round(JJ).toLocaleString("en-US") : cJ < 1e6 ? `${cJ<1e5?(JJ/1e3).toFixed(1).replace(/\.0$/,""):Math.round(JJ/1e3)}k` : `${(JJ/1e6).toFixed(cJ<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function wq(JJ, cJ, ZJ) {
      if (eF(cJ) >= 0) {
        const cJ = function(JJ, cJ) {
          return JJ.find((JJ => {
            let {
              focus: ZJ
            } = JJ;
            return ZJ[0] === cJ[0] && ZJ[2] === cJ[2] && (cJ[1] === ZJ[1] || cJ[1] === ZJ[1] - 1)
          }))
        }(JJ, ZJ);
        if (!cJ) return null;
        const UJ = function(JJ) {
          let cJ = 0,
            ZJ = 0;
          for (let FJ = 0; FJ < 4; FJ++) cJ += JJ.laser[FJ] ? 1 : 0, ZJ += JJ.live[FJ] ? 1 : 0;
          return {
            lasers: cJ,
            live: ZJ,
            focusPerS: lZ.FOCUS_BY_LASERS[ZJ],
            drawPerS: lZ.LASER_DRAW * ZJ
          }
        }({
          laser: cJ.lasers,
          live: cJ.live
        });
        if (0 === UJ.lasers || "noLasers" === cJ.state) return {
          key: `${yq}lookColNoLasers`
        };
        if (0 === UJ.live) return {
          key: `${yq}lookColOff_blocked`
        };
        if (!(cJ.on && UJ.live > 0) && ("running" !== (FJ = cJ.state) && "slowed" !== FJ)) return {
          key: `${yq}lookColOff_${cJ.state}`
        };
        if (UJ.live < UJ.lasers) return {
          key: `${yq}lookColLasersSome`,
          params: {
            lasers: String(UJ.lasers),
            live: String(UJ.live)
          }
        };
        const eJ = cJ.open.filter(Boolean).length;
        return eJ < 4 ? {
          key: `${yq}lookColLasersSpots`,
          params: {
            live: String(UJ.live),
            spots: String(eJ),
            time: Mq(UJ.live)
          }
        } : {
          key: `${yq}lookColLasers`,
          params: {
            live: String(UJ.live),
            time: Mq(UJ.live)
          }
        }
      }
      var FJ;
      if (!XF(cJ)) return null;
      const UJ = function(JJ, cJ) {
        for (const ZJ of JJ) {
          const JJ = YF(ZJ.focus, [cJ[0], cJ[1], cJ[2]]);
          if (JJ && JJ.DA === lZ.LASER_D && ZJ.lasers[JJ.dir]) return {
            entry: ZJ,
            dir: JJ.dir
          }
        }
        return null
      }(JJ, ZJ);
      if (!UJ) return {
        key: `${yq}lookLaserNoCollider`
      };
      const {
        entry: eJ,
        dir: XJ
      } = UJ;
      return eJ.open[XJ] ? eJ.live[XJ] ? {
        key: eJ.on ? `${yq}lookLaserFiring` : `${yq}lookLaserReady`
      } : {
        key: `${yq}lookLaserBlocked`
      } : {
        key: `${yq}lookLaserClosed`
      }
    }

    function Wq(JJ, cJ) {
      const ZJ = [];
      for (let FJ = 1; FJ < lZ.LASER_D; FJ++) JJ & 1 << cJ * (lZ.LASER_D - 1) + FJ - 1 && ZJ.push(FJ);
      return ZJ
    }
    const gq = {
      firing: `${yq}colSlotFiring`,
      ready: `${yq}colSlotReady`,
      blocked: `${yq}colSlotBlocked`,
      empty: `${yq}colSlotEmpty`,
      closed: `${yq}colSlotClosed`
    };

    function Hq(JJ, cJ, ZJ, FJ) {
      let UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const eJ = oF(JJ),
        XJ = oF(cJ),
        AJ = oF(ZJ),
        qJ = AJ.filter(Boolean).length,
        jJ = eJ.filter(Boolean).length,
        YJ = [0, 1, 2, 3].map((JJ => XJ[JJ] ? eJ[JJ] ? AJ[JJ] ? FJ ? "firing" : "ready" : "blocked" : (JJ => Wq(UJ, JJ).length > 0)(JJ) ? "blocked" : "empty" : "closed")),
        hJ = YJ.indexOf("blocked"),
        DJ = hJ < 0 && jJ > 0 ? YJ.indexOf("empty") : -1;
      return YJ.map(((JJ, cJ) => {
        const ZJ = cJ === hJ ? {
          key: `${yq}colSlotClear`
        } : cJ === DJ ? {
          key: `${yq}colSlotAdd`,
          params: {
            time: Mq(Math.min(4, qJ + 1))
          }
        } : null;
        return {
          dir: cJ,
          tone: JJ,
          title: {
            key: "blocked" !== JJ || eJ[cJ] ? gq[JJ] : `${yq}colSlotGap`,
            keys: {
              dir: Sq[cJ]
            }
          },
          hint: ZJ
        }
      }))
    }

    function Pq(JJ) {
      var cJ;
      return "noPower" === JJ.baf2ColState && JJ.baf2ColRxState ? jq({
        baf2RxState: JJ.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (cJ = JJ.baf2ColRxHeat) && void 0 !== cJ ? cJ : 0
      }) : null
    }

    function kq(JJ) {
      const cJ = oF(JJ.baf2ColSpots).filter(Boolean).length,
        ZJ = oF(JJ.baf2ColLive);
      let FJ = 0,
        UJ = 0;
      return oF(JJ.baf2ColLasers).forEach(((JJ, cJ) => {
        JJ && (FJ++, UJ += ZJ[cJ] ? 0 : 1)
      })), UJ > 0 ? {
        key: `${yq}colSubSome`,
        params: {
          blocked: String(UJ),
          lasers: String(FJ)
        }
      } : cJ < 4 ? {
        key: `${yq}colSubSpots`,
        params: {
          lasers: String(FJ),
          spots: String(cJ)
        }
      } : {
        key: `${yq}colSub`,
        params: {
          lasers: String(FJ)
        }
      }
    }

    function pq(JJ) {
      const cJ = Pq(JJ);
      if ("idle" === JJ.baf2ColRxState && cJ) return {
        key: `${yq}colState_noPowerIdle`
      };
      if (cJ) return {
        key: `${yq}colState_noPowerReactor`,
        keys: {
          state: cJ.label
        }
      };
      if ("noInput" !== JJ.baf2ColState) return {
        key: `${yq}colState_${JJ.baf2ColState}`
      };
      const ZJ = String(Math.max(0, lZ.NOVA_SA - JJ.baf2ColSa)),
        FJ = String(Math.max(0, lZ.NOVA_GD - JJ.baf2ColGd));
      return "0" !== ZJ && "0" !== FJ ? {
        key: `${yq}colState_noInput`,
        params: {
          sa: ZJ,
          gd: FJ
        }
      } : "0" !== ZJ ? {
        key: `${yq}colState_noStarAlloy`,
        params: {
          sa: ZJ
        }
      } : "0" !== FJ ? {
        key: `${yq}colState_noGlowDust`,
        params: {
          gd: FJ
        }
      } : {
        key: `${yq}colState_running`
      }
    }

    function dq(JJ) {
      return JJ.baf2ColP < 0 ? `${yq}colNext` : function(JJ) {
        const cJ = JJ.baf2ColState;
        return JJ.baf2ColP >= 0 && ("blocked" === cJ || "noLasers" === cJ || "noPower" === cJ)
      }(JJ) ? `${yq}colStalled` : null === zq(JJ) ? `${yq}colMaking` : `${yq}colNovaIn`
    }

    function zq(JJ) {
      if (JJ.baf2ColP < 0 || JJ.baf2ColWant <= 0) return null;
      const cJ = JJ.baf2ColFocusPerS * Math.min(1, JJ.baf2ColDraw / JJ.baf2ColWant);
      return cJ > 0 ? Math.max(0, lZ.NOVA_FOCUS - JJ.baf2ColP) / cJ : null
    }

    function Nq(JJ, cJ) {
      const ZJ = [];
      for (let FJ = 1; FJ <= 3; FJ++) {
        const UJ = [JJ[0], JJ[1] - FJ, JJ[2]];
        if (!cJ(UJ)) return ZJ;
        ZJ.push(UJ)
      }
      return []
    }

    function Oq(JJ, cJ) {
      const ZJ = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let FJ = 0; FJ < 4; FJ++) {
        const UJ = FJ,
          eJ = jF(JJ.focus, UJ, lZ.LASER_D);
        if (JJ.lasers[FJ] || !JJ.open[FJ] || !cJ(eJ)) continue;
        const XJ = [];
        for (let ZJ = 1; ZJ < lZ.LASER_D; ZJ++) {
          const FJ = jF(JJ.focus, UJ, ZJ);
          cJ(FJ) || XJ.push(FJ)
        }
        ZJ.supports.push(...Nq(eJ, cJ)), 0 === XJ.length ? ZJ.free.push(eJ) : (ZJ.blocked.push(eJ), ZJ.gaps.push(...XJ))
      }
      return ZJ
    }
    const Tq = lZ.LASER_D - .25,
      Cq = 4,
      uq = 2,
      iq = 16;
    const Rq = {
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
        blendMode: SA.g.Standard,
        soft: !0
      },
      Lq = {
        green: Rq,
        pink: {
          ...Rq,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function aq(JJ, cJ) {
      const ZJ = {
        ...cJ.params
      };
      for (const [UJ, eJ] of Object.entries(null !== (FJ = cJ.keys) && void 0 !== FJ ? FJ : {})) {
        var FJ;
        ZJ[UJ] = JJ(eJ)
      }
      return ZJ
    }
    const Bq = "buildAFactory2Game:",
      tq = 2 * lZ.LASER_D + 1,
      oq = lZ.LASER_D;

    function lq(JJ) {
      return JJ(`${Bq}colFocusTip`, {
        need: bq(lZ.NOVA_FOCUS)
      })
    }

    function Jj(JJ, cJ) {
      return JJ(cJ.key, aq(JJ, cJ))
    }

    function cj(JJ) {
      const cJ = JJ.getStatus();
      return {
        status: cJ,
        entry: cJ ? JJ.entryAtRoot(cJ.baf2ColAt) : void 0
      }
    }

    function Zj(JJ, cJ) {
      return {
        left: 100 * (oq + JJ) / tq + "%",
        top: 100 * (oq + cJ) / tq + "%"
      }
    }

    function Fj(JJ) {
      let {
        status: cJ,
        entry: ZJ
      } = JJ;
      const FJ = oF(cJ.baf2ColLasers),
        UJ = oF(cJ.baf2ColSpots),
        eJ = oF(cJ.baf2ColLive),
        XJ = !0 === (null === ZJ || void 0 === ZJ ? void 0 : ZJ.on),
        AJ = lZ.LASER_D,
        qJ = [];
      for (let sJ = 0; sJ < 4; sJ++) {
        const [JJ, , cJ] = qF[sJ];
        if (eJ[sJ]) {
          const ZJ = 100 * (AJ - 1) / tq,
            FJ = JJ + cJ > 0 ? 100 * (oq + 1) / tq : 100 * (oq - (AJ - 1)) / tq,
            UJ = 100 * (oq + .35) / tq,
            eJ = 30 / tq,
            jJ = 0 !== JJ ? {
              left: `${FJ}%`,
              width: `${ZJ}%`,
              top: `${UJ}%`,
              height: `${eJ}%`
            } : {
              top: `${FJ}%`,
              height: `${ZJ}%`,
              left: `${UJ}%`,
              width: `${eJ}%`
            };
          qJ.push((0, xe.jsx)("i", {
            className: GU()("Baf2ColDiagramBeam", {
              Off: !XJ
            }),
            style: jJ
          }, `beam${sJ}`))
        }
        const ZJ = FJ[sJ] ? "Baf2ColDiagramLaser" : UJ[sJ] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        qJ.push((0, xe.jsx)("i", {
          className: ZJ,
          style: Zj(JJ * AJ, cJ * AJ)
        }, `spot${sJ}`))
      }
      for (let sJ = 0; sJ < 4; sJ++) {
        if (FJ[sJ] || !UJ[sJ]) continue;
        const [JJ, , ZJ] = qF[sJ];
        for (const FJ of Wq(null !== (jJ = cJ.baf2ColGaps) && void 0 !== jJ ? jJ : 0, sJ)) {
          var jJ;
          qJ.push((0, xe.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: Zj(JJ * FJ, ZJ * FJ)
          }, `gap${sJ},${FJ}`))
        }
      }
      for (const [sJ, , nJ] of null !== (YJ = null === ZJ || void 0 === ZJ ? void 0 : ZJ.blockers) && void 0 !== YJ ? YJ : []) {
        var YJ, hJ, DJ;
        const JJ = sJ - (null !== (hJ = null === ZJ || void 0 === ZJ ? void 0 : ZJ.focus[0]) && void 0 !== hJ ? hJ : 0),
          cJ = nJ - (null !== (DJ = null === ZJ || void 0 === ZJ ? void 0 : ZJ.focus[2]) && void 0 !== DJ ? DJ : 0);
        qJ.push((0, xe.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: Zj(JJ, cJ)
        }, `block${JJ},${cJ}`))
      }
      return (0, xe.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [qJ, (0, xe.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function Uj(JJ) {
      let {
        status: cJ
      } = JJ;
      const {
        t: ZJ
      } = (0, vU.F)(), FJ = oF(cJ.baf2ColLive).filter(Boolean).length;
      return (0, xe.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, xe.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: lq(ZJ),
          children: ZJ(`${Bq}colLadder`)
        }), (0, xe.jsx)("ul", {
          children: [1, 2, 3, 4].map((JJ => (0, xe.jsx)("li", {
            className: GU()({
              On: JJ === FJ
            }),
            children: ZJ(`${Bq}colLadderChip`, {
              lasers: String(JJ),
              time: Mq(JJ)
            })
          }, JJ)))
        })]
      })
    }

    function ej(JJ) {
      let {
        item: cJ,
        hj: ZJ,
        need: FJ,
        cap: UJ
      } = JJ;
      const {
        t: eJ
      } = (0, vU.F)(), XJ = Math.min(ZJ, FJ);
      return (0, xe.jsxs)("li", {
        className: GU()("Baf2ColTile", {
          Short: ZJ < FJ
        }),
        children: [(0, xe.jsx)(Xj, {
          item: cJ
        }), (0, xe.jsx)("b", {
          className: "Baf2ColTileValue",
          children: eJ(`${Bq}colOutOf`, {
            amount: String(XJ),
            cap: String(FJ)
          })
        }), (0, xe.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, xe.jsx)("i", {
            style: {
              width: 100 * XJ / FJ + "%"
            }
          })
        }), ZJ > FJ && (0, xe.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: eJ(`${Bq}colIntakeHeld`, {
            amount: String(ZJ),
            cap: String(UJ)
          })
        })]
      })
    }

    function Xj(JJ) {
      let {
        item: cJ
      } = JJ;
      const {
        t: ZJ
      } = (0, vU.F)();
      return (0, xe.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, xe.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, xe.jsx)(QU.d, {
            itemName: cJ,
            amount: 0
          })
        }), (0, xe.jsx)("span", {
          className: "Baf2ColTileName",
          children: BU(ZJ, cJ)
        })]
      })
    }

    function Aj(JJ) {
      switch (JJ.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function qj(JJ) {
      var cJ, ZJ, UJ;
      let {
        store: eJ,
        close: XJ
      } = JJ;
      const {
        t: AJ
      } = (0, vU.F)(), qJ = gX(), {
        status: jJ,
        entry: YJ
      } = function(JJ) {
        const [cJ, ZJ] = (0, FJ.useState)((() => cj(JJ)));
        return (0, FJ.useEffect)((() => (ZJ(cj(JJ)), JJ.subscribe((() => {
          ZJ(cj(JJ))
        })))), [JJ]), cJ
      }(eJ), [hJ, DJ] = (0, FJ.useState)(null), sJ = null === jJ || void 0 === jJ ? void 0 : jJ.baf2ColHold;
      (0, FJ.useEffect)((() => {
        DJ(null)
      }), [sJ]);
      const nJ = (0, FJ.useRef)({
          p: -1,
          n: 0
        }),
        GJ = null !== (cJ = null === jJ || void 0 === jJ ? void 0 : jJ.baf2ColP) && void 0 !== cJ ? cJ : -1;
      GJ < nJ.current.p && nJ.current.n++, nJ.current.p = GJ;
      const fJ = (0, FJ.useRef)(null),
        [xJ] = (0, FJ.useState)((() => {
          return (JJ = eJ.heldAtOpen()) === ZF || JJ === FF ? {
            key: `${yq}colBeltItIn`,
            item: JJ
          } : null;
          var JJ
        }));
      if (!jJ) return null;
      const rJ = jJ.baf2ColMember,
        vJ = jJ.baf2ColP >= 0,
        mJ = function(JJ, cJ) {
          if (JJ.baf2ColP >= 0 && JJ.baf2ColDraw > 0) {
            const cJ = JJ.baf2ColWant > 0 ? Math.min(1, JJ.baf2ColDraw / JJ.baf2ColWant) : 0;
            return {
              focus: JJ.baf2ColFocusPerS * cJ,
              draw: JJ.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === JJ.baf2ColState && cJ && cJ.draw > 0 ? {
            ...cJ,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(jJ, fJ.current);
      fJ.current = mJ.draw > 0 ? mJ : null;
      const QJ = "slowed" === jJ.baf2ColState || "noPower" === jJ.baf2ColState,
        EJ = zq(jJ),
        VJ = null !== hJ && void 0 !== hJ ? hJ : jJ.baf2ColHold,
        KJ = function(JJ) {
          var cJ, ZJ;
          return "idle" === JJ.baf2ColRxState ? null : null !== (cJ = null === (ZJ = Pq(JJ)) || void 0 === ZJ ? void 0 : ZJ.fix) && void 0 !== cJ ? cJ : null
        }(jJ),
        yJ = null === KJ && null === xJ ? function(JJ) {
          var cJ;
          const ZJ = JJ.baf2ColSentTo;
          if (!ZJ) return null;
          const FJ = null !== (cJ = JJ.baf2ColSentHeld) && void 0 !== cJ ? cJ : null;
          return {
            key: null === FJ ? `${yq}colNovaSentToMachine` : `${yq}colNovaSentTo`,
            target: ZJ,
            hj: FJ
          }
        }(jJ) : null,
        SJ = vJ ? AJ(`${Bq}colFocusOf`, {
          focus: bq(jJ.baf2ColP),
          need: bq(lZ.NOVA_FOCUS)
        }) : null;
      return (0, xe.jsx)(sX.c, {
        close: XJ,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, xe.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, xe.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, xe.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, xe.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, xe.jsx)(QU.d, {
                  itemName: JF,
                  amount: 0
                })
              }), (0, xe.jsxs)("div", {
                children: [(0, xe.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: BU(AJ, JF)
                }), (0, xe.jsx)("p", {
                  children: Jj(AJ, kq(jJ))
                })]
              })]
            }), (0, xe.jsx)(nX.j, {
              onClick: XJ
            })]
          }), (0, xe.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, xe.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, xe.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, xe.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: AJ(dq(jJ), {
                    time: null === EJ ? "" : se(AJ, EJ)
                  })
                }), (0, xe.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, xe.jsx)("i", {
                    style: {
                      width: (vJ ? 100 * jJ.baf2ColP / lZ.NOVA_FOCUS : 0) + "%"
                    }
                  }, nJ.current.n)
                }), (0, xe.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, xe.jsxs)("span", {
                    title: lq(AJ),
                    children: [(0, xe.jsx)("b", {
                      children: bq(mJ.focus)
                    }), " ", AJ(`${Bq}colFocusPerS`)]
                  }), (0, xe.jsxs)("span", {
                    className: GU()("Baf2ColDraw", {
                      Short: QJ
                    }),
                    children: [(0, xe.jsx)(mU.c, {
                      name: "bolt"
                    }), QJ ? AJ(`${Bq}colDrawOf`, {
                      draw: bq(jJ.baf2ColDraw),
                      want: bq(jJ.baf2ColWant)
                    }) : AJ(`${Bq}colPowerPerS`, {
                      rate: bq(mJ.draw)
                    })]
                  }), null !== SJ && (0, xe.jsx)("span", {
                    className: "Soft",
                    children: SJ
                  })]
                })]
              }), (0, xe.jsx)("p", {
                className: GU()("Baf2ColState", Aj(jJ)),
                children: Jj(AJ, pq(jJ))
              }), null !== KJ && (0, xe.jsx)("p", {
                className: "Baf2ColStateFix",
                children: AJ(KJ)
              }), null === KJ && null !== xJ && (0, xe.jsx)("p", {
                className: "Baf2ColStateFix",
                children: AJ(xJ.key, {
                  item: BU(AJ, xJ.item)
                })
              }), yJ && (0, xe.jsx)("p", {
                className: "Baf2ColStateFix",
                children: AJ(yJ.key, {
                  target: BU(AJ, yJ.target),
                  amount: String(null !== (ZJ = yJ.hj) && void 0 !== ZJ ? ZJ : 0)
                })
              }), (0, xe.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, xe.jsx)(ej, {
                  item: ZF,
                  hj: jJ.baf2ColSa,
                  need: lZ.NOVA_SA,
                  cap: lZ.SA_CAP
                }), (0, xe.jsx)(ej, {
                  item: FF,
                  hj: jJ.baf2ColGd,
                  need: lZ.NOVA_GD,
                  cap: lZ.GD_CAP
                }), (0, xe.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, xe.jsx)(Xj, {
                    item: "Nova Matter"
                  }), (0, xe.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: AJ(`${Bq}colNovaHeld`, {
                      amount: String(jJ.baf2ColOut),
                      cap: String(lZ.OUT_CAP)
                    })
                  }), rJ && (0, xe.jsx)(nX.m, {
                    className: "Baf2ColTake",
                    disabled: 0 === jJ.baf2ColOut,
                    onClick: () => {
                      qJ.send(Iq(jJ, "take"))
                    },
                    children: AJ(`${Bq}colTake`)
                  })]
                })]
              }), rJ && (0, xe.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": VJ,
                className: GU()("Baf2ColHold", {
                  On: VJ
                }),
                onClick: JJ => {
                  JJ.detail > 0 && JJ.currentTarget.blur(), DJ(!VJ), qJ.send(Iq(jJ, "hold " + (VJ ? 0 : 1)))
                },
                children: [(0, xe.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, xe.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, xe.jsx)("b", {
                    children: AJ(`${Bq}colHold`)
                  }), (0, xe.jsx)("span", {
                    children: AJ(`${Bq}colHoldNote`)
                  })]
                })]
              })]
            }), (0, xe.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, xe.jsx)(Fj, {
                status: jJ,
                entry: YJ
              }), (0, xe.jsx)("ul", {
                className: "Baf2ColSlots",
                children: Hq(jJ.baf2ColLasers, jJ.baf2ColSpots, jJ.baf2ColLive, mJ.beamsOn, null !== (UJ = jJ.baf2ColGaps) && void 0 !== UJ ? UJ : 0).map((JJ => (0, xe.jsxs)("li", {
                  className: JJ.tone,
                  children: [(0, xe.jsx)("b", {
                    children: Jj(AJ, JJ.title)
                  }), null !== JJ.hint && (0, xe.jsx)("span", {
                    children: Jj(AJ, JJ.hint)
                  })]
                }, JJ.dir)))
              }), (0, xe.jsx)(Uj, {
                status: jJ
              })]
            })]
          })]
        })
      })
    }
    const jj = "buildAFactory2Game:",
      Yj = 36e5,
      hj = 864e5;

    function Dj(JJ, cJ, ZJ) {
      return Math.max(0, Math.ceil((JJ + cJ - Math.max(ZJ, JJ)) / 1e3))
    }

    function sj(JJ) {
      return JJ.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function nj(JJ) {
      return "Homestead" === JJ
    }

    function Gj(JJ) {
      return function(JJ) {
        let cJ = 0;
        for (const ZJ of JJ) {
          const JJ = /^Island ([1-9]\d{0,5})$/.exec(ZJ);
          JJ && (cJ = Math.max(cJ, Number(JJ[1])))
        }
        return `Island ${cJ+1}`
      }(JJ.map((JJ => JJ.baf2IslandName)))
    }

    function fj(JJ, cJ) {
      return function(JJ) {
        return `${jj}islandsBlocked${JJ[0].toUpperCase()}${JJ.slice(1)}`
      }("degraded" === JJ && 0 === cJ ? "stuck" : JJ)
    }

    function xj(JJ) {
      return JJ.filter((JJ => {
        var cJ;
        return !JJ.baf2IslandActive && void 0 === JJ.baf2IslandUnreadable && void 0 === (null === (cJ = JJ.baf2IslandCoop) || void 0 === cJ ? void 0 : cJ.baf2CoopState)
      })).length
    }

    function rj(JJ) {
      return "coopMoving" === JJ || "coopUnreachable" === JJ
    }

    function vj(JJ, cJ) {
      const ZJ = cJ > 0;
      return {
        change: null === JJ && !ZJ,
        switch: (null === JJ || "degraded" === JJ || rj(JJ)) && !ZJ,
        rename: "loading" !== JJ && "degraded" !== JJ && "stuck" !== JJ
      }
    }

    function mj(JJ, cJ) {
      return void 0 === JJ || "corrupt" === JJ && cJ
    }
    const Qj = yX;

    function Ej(JJ, cJ, ZJ) {
      if (null !== JJ && void 0 !== JJ && JJ.untilGone) {
        var FJ;
        return !("dismiss" === JJ.untilGone && void 0 === (null === (FJ = cJ.baf2IslandCoop) || void 0 === FJ ? void 0 : FJ.baf2CoopState)) && ZJ - JJ.atMs < 32500
      }
      return void 0 !== JJ && ZJ - JJ.atMs < Qj && cJ.baf2IslandName === JJ.from
    }
    const Vj = yX;

    function Kj(JJ) {
      return "core" === (null === JJ || void 0 === JJ ? void 0 : JJ.kind) ? JJ.core : "islands" === (null === JJ || void 0 === JJ ? void 0 : JJ.kind) ? JJ.backToCore : void 0
    }

    function yj(JJ) {
      return `\0${JJ}\0`
    }

    function Sj(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const FJ = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const eJ of Object.keys(ZJ)) FJ[eJ] = yj(eJ);
      let UJ = Object.keys(FJ).length > 0 ? JJ(cJ, FJ) : JJ(cJ);
      for (const [eJ, XJ] of Object.entries(ZJ)) UJ = UJ.split(yj(eJ)).join(XJ);
      return UJ
    }

    function Ij(JJ, cJ) {
      return JJ ? cJ ? "enabled" : "disabled" : "hidden"
    }
    const Mj = {
      removed: `${jj}islandsCoopRemoved`,
      deleted: `${jj}islandsCoopDeleted`,
      notReady: `${jj}islandsCoopNotReady`,
      gone: `${jj}islandsCoopGone`
    };

    function bj(JJ) {
      var cJ;
      return "member" !== (null === (cJ = JJ.baf2IslandCoop) || void 0 === cJ ? void 0 : cJ.baf2CoopRole) && "newer" !== JJ.baf2IslandUnreadable
    }

    function wj(JJ, cJ, ZJ, FJ, UJ) {
      const eJ = JJ.baf2IslandActive,
        XJ = JJ.baf2IslandUnreadable,
        AJ = JJ.baf2IslandCoop,
        qJ = function(JJ, cJ, ZJ) {
          return {
            switch: JJ.switch && void 0 === cJ,
            delete: JJ.change && mj(cJ, ZJ)
          }
        }(cJ, XJ, FJ),
        jJ = {
          switch: Ij(!eJ && void 0 === XJ, qJ.switch),
          rename: Ij(!0, cJ.rename),
          delete: Ij(!eJ, qJ.delete),
          deleteWaits: !eJ && mj(XJ, FJ),
          people: Ij(void 0 !== JJ.baf2IslandInvitable || UJ && eJ && void 0 === XJ && void 0 === AJ, !0),
          peopleLabel: "invite",
          cn: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        YJ = !eJ && qJ.delete;
      if (void 0 === AJ) return ZJ ? {
        ...jJ,
        delete: Ij(!eJ, !1),
        deleteWaits: !1,
        note: YJ ? {
          key: `${jj}islandsCoopKeepOwn`
        } : null
      } : jJ;
      const hJ = AJ.baf2CoopState,
        DJ = AJ.baf2CoopMembers.length > 1,
        sJ = {
          ...jJ,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== hJ && "member" === AJ.baf2CoopRole) return {
        ...sJ,
        dismiss: Ij(!0, cJ.rename),
        note: {
          key: Mj[hJ],
          names: {
            owner: AJ.baf2CoopOwner
          }
        }
      };
      if (void 0 !== hJ) {
        let JJ = {
          key: `${jj}islandsCoopOwnLost`
        };
        return YJ && DJ ? JJ = {
          key: `${jj}islandsCoopDeleteMembers`
        } : YJ && ZJ && (JJ = {
          key: `${jj}islandsCoopKeepOwn`
        }), {
          ...sJ,
          delete: Ij(!eJ, qJ.delete && !DJ && !ZJ),
          deleteWaits: jJ.deleteWaits && !DJ && !ZJ,
          note: JJ
        }
      }
      if ("member" === AJ.baf2CoopRole) return {
        ...jJ,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        cn: Ij(!0, eJ ? cJ.switch : cJ.rename)
      };
      const nJ = AJ.baf2CoopManageHere;
      let GJ = null;
      var fJ;
      nJ ? YJ && DJ ? GJ = {
        key: `${jj}islandsCoopDeleteMembers`
      } : YJ && ZJ && (GJ = {
        key: `${jj}islandsCoopKeepOwn`
      }) : GJ = {
        key: null !== (fJ = AJ.baf2CoopLeft) && void 0 !== fJ && fJ.length ? `${jj}islandsCoopManageThereClaim` : `${jj}islandsCoopManageThere`
      };
      return {
        ...jJ,
        rename: Ij(!0, cJ.rename && nJ),
        delete: Ij(!eJ, qJ.delete && !DJ && !ZJ),
        deleteWaits: jJ.deleteWaits && !DJ && !ZJ,
        people: "enabled",
        peopleLabel: "players",
        unshare: Ij(nJ && eJ && !DJ, cJ.change),
        remove: nJ,
        note: GJ
      }
    }

    function Wj(JJ) {
      var cJ;
      const ZJ = JJ.baf2IslandCoop;
      if ("owner" !== (null === ZJ || void 0 === ZJ ? void 0 : ZJ.baf2CoopRole) || void 0 !== ZJ.baf2CoopState || null === (cJ = ZJ.baf2CoopLeft) || void 0 === cJ || !cJ.length) return null;
      const FJ = JJ.baf2IslandActive && ZJ.baf2CoopManageHere;
      return {
        left: ZJ.baf2CoopLeft,
        claim: FJ,
        goThere: !FJ && ZJ.baf2CoopManageHere
      }
    }

    function gj(JJ) {
      return JJ.baf2CoopMembers.length >= JJ.baf2CoopMax
    }

    function Hj(JJ, cJ, ZJ) {
      return void 0 !== JJ && cJ < JJ.answer && ZJ - JJ.atMs < Qj
    }
    const Pj = "buildAFactory2Game:";

    function kj(JJ, cJ) {
      return {
        onKeyDown: ZJ => {
          ZJ.stopPropagation(), ZJ.nativeEvent.isComposing || 229 === ZJ.nativeEvent.keyCode || ("Enter" === ZJ.key ? (ZJ.preventDefault(), JJ()) : "Escape" === ZJ.key && (ZJ.preventDefault(), cJ()))
        }
      }
    }

    function pj(JJ) {
      return {
        onKeyDown: cJ => {
          "Escape" !== cJ.key || cJ.nativeEvent.isComposing || (cJ.preventDefault(), cJ.stopPropagation(), JJ())
        }
      }
    }

    function dj(JJ) {
      JJ.currentTarget.select()
    }

    function zj(JJ, cJ) {
      (0, FJ.useEffect)((() => {
        var ZJ;
        JJ && (null === (ZJ = cJ.current) || void 0 === ZJ || ZJ.scrollIntoView({
          block: "nearest"
        }))
      }), [JJ, cJ])
    }

    function Nj(JJ) {
      const [cJ, ZJ] = (0, FJ.useState)(null);
      return (0, FJ.useEffect)((() => {
        const cJ = document.querySelector(".UiRequests"),
          FJ = JJ.current;
        if (!cJ || !FJ || "undefined" === typeof ResizeObserver) return;
        const UJ = () => {
          const JJ = cJ.getBoundingClientRect(),
            UJ = FJ.getBoundingClientRect(),
            eJ = FJ.parentElement,
            XJ = eJ && parseFloat(getComputedStyle(eJ).paddingTop) || 0,
            AJ = function(JJ, cJ, ZJ, FJ) {
              if (!JJ || JJ.height <= 0 || JJ.right <= cJ.left || JJ.left >= cJ.right) return null;
              const UJ = Math.max(FJ, JJ.bottom + 8);
              return {
                marginTop: Math.round(UJ - FJ),
                maxHeight: Math.max(0, Math.floor(ZJ - UJ - FJ))
              }
            }(JJ, UJ, window.innerHeight, XJ);
          ZJ((JJ => (null === JJ || void 0 === JJ ? void 0 : JJ.marginTop) === (null === AJ || void 0 === AJ ? void 0 : AJ.marginTop) && (null === JJ || void 0 === JJ ? void 0 : JJ.maxHeight) === (null === AJ || void 0 === AJ ? void 0 : AJ.maxHeight) ? JJ : AJ))
        };
        UJ();
        const eJ = new ResizeObserver(UJ);
        return eJ.observe(cJ), window.addEventListener("resize", UJ), () => {
          eJ.disconnect(), window.removeEventListener("resize", UJ)
        }
      }), [JJ]), cJ
    }

    function Oj(JJ) {
      (0, FJ.useEffect)((() => {
        var cJ;
        null === (cJ = JJ.current) || void 0 === cJ || cJ.focus()
      }), [JJ])
    }

    function Tj(JJ) {
      const [cJ, ZJ] = (0, FJ.useState)(Date.now);
      return (0, FJ.useEffect)((() => {
        const cJ = window.setInterval((() => {
          ZJ(Date.now())
        }), JJ);
        return () => {
          window.clearInterval(cJ)
        }
      }), [JJ]), cJ
    }

    function Cj(JJ) {
      let {
        tier: cJ,
        t: ZJ
      } = JJ;
      const {
        kind: FJ,
        short: UJ
      } = fJ(cJ), eJ = sJ(cJ, nJ), XJ = ZJ(`${Pj}${eJ.key}`, {
        ...eJ.params,
        name: ZJ(`${Pj}${xJ(cJ).nameKey}`)
      });
      return (0, xe.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, xe.jsx)("span", {
          className: GU()("Baf2IslandTierPip", {
            Stage: "tier" !== FJ
          }),
          "aria-hidden": "true",
          children: UJ
        }), XJ]
      })
    }

    function uj(JJ) {
      let {
        note: cJ,
        className: ZJ,
        t: FJ
      } = JJ;
      return (0, xe.jsx)("p", {
        className: GU()("Baf2IslandNote", ZJ),
        children: Sj(FJ, cJ.key, cJ.names, cJ.params)
      })
    }
    const ij = "buildAFactory2Game:";

    function Rj(JJ) {
      let {
        message: cJ,
        arrivedAtMs: ZJ,
        close: UJ,
        cn: eJ
      } = JJ;
      const XJ = gX(),
        {
          t: AJ
        } = (0, vU.F)(),
        qJ = Tj(1e3),
        jJ = (0, FJ.useRef)(null);
      (0, FJ.useEffect)((() => {
        var JJ;
        null === (JJ = jJ.current) || void 0 === JJ || JJ.focus()
      }), []);
      const YJ = Dj(ZJ, cJ.baf2TransferInMs, qJ),
        hJ = ZJ + cJ.baf2TransferInMs - 1e3,
        [DJ, sJ] = (0, FJ.useState)(null);
      (0, FJ.useEffect)((() => {
        const JJ = window.setTimeout((() => {
          sJ(hJ)
        }), Math.max(0, hJ - Date.now()));
        return () => {
          window.clearTimeout(JJ)
        }
      }), [hJ]);
      const nJ = DJ === hJ || qJ >= hJ,
        GJ = cJ.baf2TransferIsland,
        fJ = cJ.baf2TransferOwner;
      return (0, xe.jsx)(sX.c, {
        close: UJ,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, xe.jsxs)("section", {
          ref: jJ,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, xe.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, xe.jsxs)("div", {
              children: [(0, xe.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === fJ ? Sj(AJ, `${ij}islandsTransferOwn`, {
                  island: GJ
                }) : Sj(AJ, `${ij}islandsTransfer`, {
                  island: GJ,
                  owner: fJ
                })
              }), (0, xe.jsx)("p", {
                children: nJ ? AJ(`${ij}islandsTransferNow`) : AJ(`${ij}islandsTransferIn`, {
                  time: se(AJ, YJ)
                })
              })]
            }), (0, xe.jsx)(nX.j, {
              ariaLabel: AJ(`${ij}islandsClose`),
              onClick: UJ
            })]
          }), !nJ && (0, xe.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, xe.jsx)("p", {
              className: "Baf2TransferNote",
              children: AJ(`${ij}islandsTransferNote`)
            }), (0, xe.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, xe.jsx)(nX.d, {
                onClick: () => {
                  XJ.send("baf2coopstay"), eJ()
                },
                children: AJ(`${ij}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var Lj = ZJ(1326),
      aj = ZJ(35753),
      Bj = ZJ.n(aj);
    const tj = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const oj = "buildAFactory2Game:",
      lj = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function JY(JJ, cJ, ZJ) {
      return void 0 === cJ ? ZJ : "string" === typeof cJ ? cJ : Array.isArray(cJ) ? cJ.map((cJ => "string" === typeof cJ ? cJ : "translationKey" in cJ ? JJ(cJ.translationKey) : "")).join("") : JJ(cJ.translationKey)
    }

    function cY(JJ) {
      const cJ = {};
      for (const [ZJ, FJ] of Object.entries(null !== JJ && void 0 !== JJ ? JJ : {})) cJ[ZJ] = FJ < 0 ? De(FJ) : FJ.toLocaleString("en-US");
      return cJ
    }

    function ZY(JJ, cJ) {
      const ZJ = cJ ? "touch" : "mouse";
      return {
        use: JJ(`${oj}lookUse_${ZJ}`),
        Use: JJ(`${oj}lookUseStart_${ZJ}`)
      }
    }
    const FY = (0, FJ.memo)((function(JJ) {
      let {
        item: cJ
      } = JJ;
      return (0, xe.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, xe.jsx)(QU.d, {
          itemName: cJ,
          amount: 0
        })
      })
    }));

    function UY(JJ) {
      let {
        label: cJ,
        percent: ZJ,
        progress: FJ
      } = JJ;
      return (0, xe.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, xe.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${cJ}: ${FJ}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": ZJ,
          children: (0, xe.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${ZJ}%`
            }
          })
        }), (0, xe.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: FJ
        })]
      })
    }

    function eY(JJ) {
      let {
        chips: cJ
      } = JJ;
      return (0, xe.jsx)("span", {
        className: "Baf2QuestChips",
        children: cJ.map((JJ => {
          let [cJ, ZJ, FJ] = JJ;
          const UJ = ZJ >= FJ;
          return (0, xe.jsxs)("span", {
            className: GU()("Baf2QuestChip", {
              Met: UJ
            }),
            children: [(0, xe.jsx)(FY, {
              item: cJ
            }), (0, xe.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: UJ ? `\u2713${FJ}` : `${ZJ}/${FJ}`
            })]
          }, cJ)
        }))
      })
    }

    function XY(JJ, cJ) {
      const {
        key: ZJ,
        params: FJ
      } = sJ(cJ, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return JJ(`${oj}${ZJ}`, {
        ...FJ,
        name: JJ(`${oj}${xJ(cJ).nameKey}`)
      })
    }

    function AY(JJ) {
      let {
        core: cJ,
        t: ZJ
      } = JJ;
      const [FJ, UJ] = cJ, eJ = UJ > 0 ? Math.floor(100 * FJ / UJ) : 100;
      return (0, xe.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": ZJ(`${oj}questCoreLabel`, {
          have: String(FJ),
          need: String(UJ)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": eJ,
        children: [(0, xe.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: ZJ(`${oj}questCore`, {
            percent: String(eJ)
          })
        }), (0, xe.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, xe.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${eJ}%`
            }
          })
        })]
      })
    }

    function qY(JJ) {
      let {
        rows: cJ,
        t: ZJ
      } = JJ;
      const FJ = cJ.filter((JJ => JJ.done)).length;
      return (0, xe.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": ZJ(`${oj}questStepsProgress`, {
          done: String(FJ),
          total: String(cJ.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": cJ.length,
        "aria-valuenow": FJ,
        children: cJ.map((JJ => (0, xe.jsx)("span", {
          className: GU()("Baf2QuestSegment", {
            Done: JJ.done,
            Current: JJ.current
          })
        }, JJ.id)))
      })
    }
    const jY = (0, FJ.memo)(hY, YY);

    function YY(JJ, cJ) {
      const ZJ = ZJ => JJ.view.itemNames[ZJ] === cJ.view.itemNames[ZJ];
      return JJ.t === cJ.t && JJ.extra === cJ.extra && (null === JJ.row.item || ZJ(JJ.row.item)) && JJ.row.madeFor.every(ZJ) && JJ.row.also.every(ZJ) && Bj()(JJ.row, cJ.row)
    }

    function hY(JJ) {
      let {
        row: cJ,
        view: ZJ,
        t: FJ,
        extra: UJ
      } = JJ;
      const {
        isTouchScreen: eJ
      } = (0, DU.j)(["isTouchScreen"]), XJ = cJ.item ? function(JJ, cJ, ZJ) {
        return 1 !== ZJ && tj.has(JJ) ? rU(cJ) : null
      }(cJ.key, cJ.item, cJ.total) : null, AJ = XJ ? FJ(XJ) : cJ.item ? JY(FJ, ZJ.itemNames[cJ.item], cJ.item) : "", qJ = cJ.also.map((JJ => JY(FJ, ZJ.itemNames[JJ], JJ))), jJ = qJ.join(", "), YJ = function(JJ, cJ) {
        var ZJ;
        return cJ.length < 2 ? null !== (ZJ = cJ[0]) && void 0 !== ZJ ? ZJ : "" : JJ(`${oj}listAnd`, {
          rest: cJ.slice(0, -1).join(JJ(`${oj}listComma`)),
          last: cJ[cJ.length - 1]
        })
      }(FJ, [AJ, ...qJ]), hJ = FJ(`${oj}${cJ.key}`, {
        ...ZY(FJ, eJ),
        ...cY(cJ.params),
        item: AJ,
        also: jJ,
        itemList: YJ,
        total: String(cJ.total)
      }), [DJ, ...sJ] = hJ.split("\n"), nJ = cJ.total > 1 && !cJ.done && !cJ.away;
      return (0, xe.jsxs)("li", {
        className: GU()("Baf2QuestStep", {
          Done: cJ.done,
          Current: cJ.current,
          JustFinished: cJ.justFinished,
          Away: cJ.away
        }),
        children: [!cJ.done && null !== cJ.item && (0, xe.jsx)(FY, {
          item: cJ.item
        }), (cJ.done || null === cJ.item) && (0, xe.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: cJ.done ? "\u2713" : "\u25cb"
        }), (0, xe.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, xe.jsx)("strong", {
            children: DJ
          }), sJ.length > 0 && (0, xe.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: sJ.join(" ")
          }), !cJ.done && cJ.madeFor.length > 0 && (0, xe.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: FJ("buildAFactory2Game:questRowFor", {
              items: cJ.madeFor.map((JJ => JY(FJ, ZJ.itemNames[JJ], JJ))).join(" \u2192 ")
            })
          }), nJ && (0, xe.jsx)(UY, {
            label: DJ,
            percent: Math.round(100 * cJ.amount / cJ.total),
            progress: `${cJ.amount.toLocaleString("en-US")}/${cJ.total.toLocaleString("en-US")}`
          }), !cJ.done && !cJ.away && cJ.chips && cJ.chips.length > 0 && (0, xe.jsx)(eY, {
            chips: cJ.chips
          }), UJ]
        })]
      })
    }

    function DY(JJ, cJ) {
      let [ZJ, FJ] = cJ;
      return JJ(`${oj}${ZJ}`, cY(FJ))
    }

    function sY(JJ) {
      let [cJ, ZJ] = JJ;
      return cJ + JSON.stringify(ZJ)
    }

    function nY(JJ) {
      let {
        goal: cJ,
        t: ZJ
      } = JJ;
      return cJ ? (0, xe.jsx)("span", {
        className: "Baf2BookGoal",
        children: ZJ(`${oj}${cJ}`)
      }) : null
    }

    function GY(JJ) {
      let {
        view: cJ,
        t: ZJ
      } = JJ;
      if (!cJ.name) return null;
      const FJ = PU(cJ.rows);
      return (0, xe.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, xe.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: ZJ(`${oj}currentQuest`)
        }), (0, xe.jsx)("strong", {
          className: "Baf2BookTitle",
          children: DY(ZJ, cJ.name)
        }), (0, xe.jsx)(nY, {
          goal: cJ.goal,
          t: ZJ
        }), FJ.length > 1 && (0, xe.jsx)(qY, {
          rows: FJ,
          t: ZJ
        }), (0, xe.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: cJ.rows.map((JJ => (0, xe.jsx)(jY, {
            row: JJ,
            view: cJ,
            t: ZJ
          }, JJ.id)))
        }), cJ.reward && (0, xe.jsxs)("span", {
          className: "Baf2BookReward",
          children: [ZJ(`${oj}questReward`), (0, xe.jsx)(FY, {
            item: cJ.reward
          }), JY(ZJ, cJ.itemNames[cJ.reward], cJ.reward)]
        })]
      })
    }

    function fY(JJ) {
      let {
        quest: cJ,
        upcoming: ZJ,
        t: FJ
      } = JJ;
      return (0, xe.jsxs)("li", {
        className: GU()("Baf2BookQuest", {
          Done: cJ[3],
          Upcoming: ZJ
        }),
        children: [(0, xe.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: cJ[3] ? "\u2713" : "\u25cb"
        }), (0, xe.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, xe.jsx)("strong", {
            className: "Baf2BookTitle",
            children: DY(FJ, cJ)
          }), (0, xe.jsx)(nY, {
            goal: cJ[2],
            t: FJ
          })]
        })]
      })
    }

    function xY(JJ) {
      let {
        done: cJ,
        total: ZJ,
        t: FJ
      } = JJ;
      const UJ = ZJ > 0 ? Math.round(100 * cJ / ZJ) : 0,
        eJ = FJ(`${oj}questBookChapterProgress`, {
          done: String(cJ),
          total: String(ZJ)
        });
      return (0, xe.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, xe.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": eJ,
          "aria-valuemin": 0,
          "aria-valuemax": ZJ,
          "aria-valuenow": cJ,
          children: (0, xe.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${UJ}%`
            }
          })
        }), (0, xe.jsx)("span", {
          className: "Baf2BookProgressText",
          children: eJ
        })]
      })
    }

    function rY(JJ) {
      let {
        view: cJ,
        tier: ZJ,
        quests: FJ,
        t: UJ
      } = JJ;
      const eJ = ZJ === cJ.tier,
        XJ = (null !== FJ && void 0 !== FJ ? FJ : []).filter((JJ => !JJ[4])),
        AJ = (null !== FJ && void 0 !== FJ ? FJ : []).filter((JJ => JJ[4])),
        qJ = XJ.filter((JJ => JJ[3])).length,
        jJ = eJ && cJ.name ? sY(cJ.name) : null,
        YJ = XJ.findIndex((JJ => !JJ[3] && sY(JJ) === jJ));
      return (0, xe.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, xe.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, xe.jsx)("h3", {
            children: XY(UJ, ZJ)
          }), XJ.length > 0 && (0, xe.jsx)(xY, {
            done: qJ,
            total: XJ.length,
            t: UJ
          }), eJ && cJ.core && (0, xe.jsx)(AY, {
            core: cJ.core,
            t: UJ
          })]
        }), (0, xe.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === FJ && eJ && (0, xe.jsx)(GY, {
            view: cJ,
            t: UJ
          }), XJ.map(((JJ, ZJ) => ZJ === YJ ? (0, xe.jsx)(GY, {
            view: cJ,
            t: UJ
          }, sY(JJ)) : (0, xe.jsx)(fY, {
            quest: JJ,
            upcoming: !JJ[3],
            t: UJ
          }, sY(JJ))))]
        }), eJ && cJ.side && (0, xe.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, xe.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: UJ(`${oj}questSide`)
          }), (0, xe.jsx)("strong", {
            className: "Baf2BookTitle",
            children: DY(UJ, cJ.side.name)
          }), (0, xe.jsx)(nY, {
            goal: cJ.side.goal,
            t: UJ
          }), (0, xe.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, xe.jsx)(jY, {
              row: cJ.side.row,
              view: cJ,
              t: UJ
            })
          })]
        }), AJ.length > 0 && (0, xe.jsxs)(xe.Fragment, {
          children: [(0, xe.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: UJ(`${oj}questBookSidesDone`)
          }), (0, xe.jsx)("ol", {
            className: "Baf2BookQuests",
            children: AJ.map((JJ => (0, xe.jsx)(fY, {
              quest: JJ,
              upcoming: !1,
              t: UJ
            }, sY(JJ))))
          })]
        })]
      })
    }

    function vY(JJ) {
      var cJ, ZJ, eJ;
      let {
        store: XJ,
        close: AJ
      } = JJ;
      const {
        t: qJ
      } = (0, vU.F)(), jJ = (0, Lj.m)(IU, XJ.get()), hJ = null !== (cJ = jJ.tier) && void 0 !== cJ ? cJ : 1, [DJ, sJ] = (0, FJ.useState)(null), nJ = (null === DJ || void 0 === DJ ? void 0 : DJ.at) === hJ ? DJ.tier : hJ, xJ = (0, FJ.useRef)(null), rJ = null !== jJ.chapters;
      (0, FJ.useEffect)((() => {
        var JJ;
        xJ.current && (xJ.current.scrollTop = 0);
        const cJ = null === (JJ = xJ.current) || void 0 === JJ ? void 0 : JJ.querySelector(".Baf2BookQuest.Current");
        if (xJ.current && cJ) {
          const JJ = cJ.getBoundingClientRect().bottom - xJ.current.getBoundingClientRect().bottom;
          JJ > 0 && (xJ.current.scrollTop += Math.min(JJ, cJ.getBoundingClientRect().top - xJ.current.getBoundingClientRect().top))
        }
      }), [nJ, rJ]);
      const vJ = null === (ZJ = jJ.chapters) || void 0 === ZJ ? void 0 : ZJ.find((JJ => {
        let [cJ] = JJ;
        return cJ === nJ
      }));
      return (0, xe.jsx)(sX.c, {
        close: AJ,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, xe.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: lj,
          children: [(0, xe.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, xe.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: qJ(`${oj}questBookTitle`)
            }), (0, xe.jsx)(nX.j, {
              onClick: AJ
            })]
          }), (0, xe.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": qJ(`${oj}questBookChapters`),
            children: UJ.slice(0, YJ()).map(((JJ, cJ) => {
              const ZJ = cJ + 1,
                {
                  kind: FJ,
                  short: UJ
                } = fJ(ZJ),
                eJ = GJ(ZJ, hJ),
                XJ = eJ ? qJ(`${oj}coreAtomicHidden`) : XY(qJ, ZJ);
              return (0, xe.jsx)("li", {
                children: (0, xe.jsx)("button", {
                  type: "button",
                  className: GU()({
                    Stage: "tier" !== FJ,
                    Atomic: "atomic" === FJ,
                    Current: ZJ === hJ,
                    Selected: ZJ === nJ
                  }),
                  disabled: ZJ > hJ,
                  "aria-pressed": ZJ === nJ,
                  "aria-label": XJ,
                  title: eJ ? void 0 : XJ,
                  onClick: () => {
                    sJ({
                      tier: ZJ,
                      at: hJ
                    })
                  },
                  children: eJ ? "?" : UJ
                })
              }, JJ.nameKey)
            }))
          }), (0, xe.jsxs)("div", {
            ref: xJ,
            className: "Baf2BookBody",
            children: [gU(jJ) && nJ === hJ && (0, xe.jsx)("p", {
              className: "Baf2BookEmpty",
              children: qJ(`${oj}questBookAllDone`)
            }), (0, xe.jsx)(rY, {
              view: jJ,
              tier: nJ,
              quests: null !== (eJ = null === vJ || void 0 === vJ ? void 0 : vJ[1]) && void 0 !== eJ ? eJ : null,
              t: qJ
            })]
          })]
        })
      })
    }
    const mY = "buildAFactory2Game:";

    function QY(JJ) {
      let {
        tiers: cJ,
        from: ZJ,
        tier: FJ,
        shown: UJ,
        PD: eJ
      } = JJ;
      const {
        t: XJ
      } = (0, vU.F)(), AJ = cJ.map(((JJ, cJ) => {
        const AJ = ZJ + cJ,
          {
            kind: qJ,
            short: jJ
          } = fJ(AJ),
          YJ = GJ(AJ, FJ);
        return (0, xe.jsx)("li", {
          children: (0, xe.jsx)("button", {
            type: "button",
            className: GU()({
              Stage: "tier" !== qJ,
              Silhouette: YJ,
              Reached: AJ <= FJ,
              Current: AJ === FJ,
              Next: AJ === FJ + 1,
              Selected: AJ === UJ
            }),
            disabled: YJ,
            "aria-pressed": AJ === UJ,
            "aria-label": YJ ? XJ(`${mY}coreAtomicHidden`) : void 0,
            title: YJ ? void 0 : XJ(`${mY}${JJ.nameKey}`),
            onClick: () => {
              eJ(AJ)
            },
            children: YJ ? "?" : jJ
          })
        }, JJ.nameKey)
      }));
      return (0, xe.jsx)(xe.Fragment, {
        children: AJ
      })
    }

    function EY(JJ) {
      let {
        id: cJ,
        label: ZJ,
        tiers: FJ,
        from: UJ,
        ...eJ
      } = JJ;
      return (0, xe.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, xe.jsx)("span", {
          id: cJ,
          className: "Baf2CoreLadderLabel",
          children: ZJ
        }), (0, xe.jsx)("ol", {
          "aria-labelledby": cJ,
          children: (0, xe.jsx)(QY, {
            ...eJ,
            tiers: FJ,
            from: UJ
          })
        })]
      })
    }

    function VY(JJ) {
      const {
        t: cJ
      } = (0, vU.F)(), ZJ = UJ.findIndex((JJ => void 0 !== JJ.stage)), FJ = UJ.findIndex((JJ => void 0 !== JJ.reactorTier)), eJ = ZJ < 0 ? UJ : UJ.slice(0, ZJ), XJ = ZJ < 0 ? [] : UJ.slice(ZJ, FJ < 0 ? void 0 : FJ), qJ = FJ < 0 || !AJ() ? [] : UJ.slice(FJ);
      return (0, xe.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, xe.jsx)(EY, {
          ...JJ,
          id: "baf2CoreTiersLabel",
          label: cJ(`${mY}coreTiersLabel`),
          tiers: eJ,
          from: 1
        }), XJ.length > 0 && (0, xe.jsx)(EY, {
          ...JJ,
          id: "baf2CoreStagesLabel",
          label: cJ(`${mY}coreStagesLabel`),
          tiers: XJ,
          from: ZJ + 1
        }), qJ.length > 0 && (0, xe.jsx)(EY, {
          ...JJ,
          id: "baf2CoreAtomicLabel",
          label: cJ(`${mY}coreAtomicLabel`),
          tiers: qJ,
          from: FJ + 1
        })]
      })
    }
    const KY = "buildAFactory2Game:";

    function yY(JJ) {
      let {
        item: cJ,
        itemNames: ZJ,
        children: FJ
      } = JJ;
      return (0, xe.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, xe.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, xe.jsx)(QU.d, {
            itemName: cJ,
            amount: 0
          })
        }), (0, xe.jsx)(EU.d, {
          text: ZJ[cJ]
        }), FJ]
      })
    }

    function SY(JJ) {
      const cJ = new Map;
      for (const {
          block: FJ
        }
        of JJ.newDeposits) {
        var ZJ;
        cJ.set(FJ, (null !== (ZJ = cJ.get(FJ)) && void 0 !== ZJ ? ZJ : 0) + 1)
      }
      return [...cJ]
    }

    function IY(JJ) {
      let {
        value: cJ,
        label: ZJ,
        more: FJ
      } = JJ;
      return (0, xe.jsxs)("li", {
        children: [(0, xe.jsx)("strong", {
          children: cJ
        }), (0, xe.jsx)("span", {
          children: ZJ
        }), FJ > 0 && (0, xe.jsxs)("em", {
          children: ["+", FJ]
        })]
      })
    }

    function MY(JJ) {
      let {
        items: cJ,
        itemNames: ZJ
      } = JJ;
      const {
        t: UJ
      } = (0, vU.F)(), [eJ, XJ] = (0, FJ.useState)(null), AJ = null !== eJ && cJ.includes(eJ) ? eJ : null;
      return (0, xe.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, xe.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: UJ(`${KY}coreRewardUnlocks`)
        }), (0, xe.jsx)("ul", {
          children: cJ.map((JJ => (0, xe.jsx)("li", {
            children: (0, xe.jsx)("button", {
              type: "button",
              className: GU()("Baf2PanelIcon", {
                Picked: JJ === AJ
              }),
              title: BU(UJ, JJ),
              "aria-label": BU(UJ, JJ),
              "aria-pressed": JJ === AJ,
              onClick: () => {
                XJ(JJ === AJ ? null : JJ)
              },
              children: (0, xe.jsx)(QU.d, {
                itemName: JJ,
                amount: 0
              })
            })
          }, JJ)))
        }), (0, xe.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== AJ && (0, xe.jsxs)(xe.Fragment, {
            children: [(0, xe.jsx)(EU.d, {
              text: ZJ[AJ]
            }), " \xb7 ", (0, xe.jsx)(EU.d, {
              text: ZJ[bJ(AJ)]
            })]
          }), null === AJ && UJ(`${KY}coreRecipeTap`)]
        })]
      })
    }

    function bY(JJ) {
      var cJ, ZJ;
      let {
        def: FJ,
        tier: UJ,
        itemNames: eJ
      } = JJ;
      const {
        t: XJ
      } = (0, vU.F)(), AJ = UJ > 1 ? xJ(UJ - 1) : void 0, qJ = Math.round(2 * FJ.islandRadius), jJ = AJ ? Math.round(2 * AJ.islandRadius) : qJ, YJ = UJ >= 3 ? nF(UJ) : null;
      return (0, xe.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, xe.jsxs)("ul", {
          className: GU()("Baf2CoreStats", {
            Four: null !== YJ
          }),
          children: [(0, xe.jsx)(IY, {
            value: `${qJ}\xd7${qJ}`,
            label: XJ(`${KY}coreStatIsland`),
            more: qJ - jJ
          }), (0, xe.jsx)(IY, {
            value: String(FJ.machineAllowance),
            label: XJ(`${KY}coreStatMachines`),
            more: FJ.machineAllowance - (null !== (cJ = null === AJ || void 0 === AJ ? void 0 : AJ.machineAllowance) && void 0 !== cJ ? cJ : FJ.machineAllowance)
          }), (0, xe.jsx)(IY, {
            value: String(FJ.beltAllowance),
            label: XJ(`${KY}coreStatBelts`),
            more: FJ.beltAllowance - (null !== (ZJ = null === AJ || void 0 === AJ ? void 0 : AJ.beltAllowance) && void 0 !== ZJ ? ZJ : FJ.beltAllowance)
          }), null !== YJ && (0, xe.jsx)(IY, {
            value: String(YJ),
            label: XJ(`${KY}coreStatStorage`),
            more: YJ - (AJ ? nF(UJ - 1) : YJ)
          })]
        }), FJ.reward && (0, xe.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, xe.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: XJ(`${KY}coreRewardItem`)
          }), (0, xe.jsx)(yY, {
            item: FJ.reward,
            itemNames: eJ
          })]
        }), FJ.newDeposits.length > 0 && (0, xe.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, xe.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: XJ(FJ.newDeposits.length > 1 ? `${KY}coreRewardDeposits` : `${KY}coreRewardDeposit`)
          }), SY(FJ).map((JJ => {
            let [cJ, ZJ] = JJ;
            return (0, xe.jsx)(yY, {
              item: cJ,
              itemNames: eJ,
              children: ZJ > 1 && ` \xd7${ZJ}`
            }, cJ)
          }))]
        }), FJ.unlocks.length > 0 && (0, xe.jsx)(MY, {
          items: FJ.unlocks,
          itemNames: eJ
        }), (0, xe.jsx)(wY, {
          tier: UJ
        })]
      })
    }

    function wY(JJ) {
      let {
        tier: cJ
      } = JJ;
      const {
        t: ZJ
      } = (0, vU.F)(), FJ = qU[cJ];
      if (!FJ) return null;
      const UJ = AU(cJ, 0, 0).barrierMax !== AU(cJ - 1, 0, 0).barrierMax;
      return (0, xe.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, xe.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, xe.jsx)(QU.d, {
            itemName: UJ ? cU.Chestplate : JU,
            amount: 0
          })
        }), ZJ(`${KY}gearPerkLine`, {
          perk: ZJ(`${KY}${FJ}`)
        })]
      })
    }

    function WY(JJ, cJ) {
      return null === JJ ? cJ : JJ.value
    }

    function gY(JJ, cJ, ZJ, FJ) {
      let UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === JJ || ZJ - JJ.atMs >= FJ ? null : UJ(JJ.value, cJ) ? JJ.armed ? null : JJ : JJ.armed ? JJ : {
        ...JJ,
        armed: !0
      }
    }

    function HY(JJ, cJ) {
      const ZJ = cJ.filter((cJ => {
        var ZJ;
        return !1 !== (null === (ZJ = JJ.get(cJ)) || void 0 === ZJ ? void 0 : ZJ.value)
      }));
      for (const [FJ, UJ] of JJ) UJ.value && !cJ.includes(FJ) && ZJ.push(FJ);
      return ZJ
    }

    function PY(JJ, cJ, ZJ, UJ) {
      const [eJ, XJ] = (0, FJ.useState)((() => new Map)), AJ = () => {
        XJ((cJ => function(JJ, cJ, ZJ, FJ) {
          var UJ;
          let eJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            XJ = null;
          for (const [AJ, qJ] of JJ) {
            const UJ = gY(qJ, cJ(AJ), ZJ, FJ, eJ);
            UJ !== qJ && (XJ ??= new Map(JJ), null === UJ ? XJ.delete(AJ) : XJ.set(AJ, UJ))
          }
          return null !== (UJ = XJ) && void 0 !== UJ ? UJ : JJ
        }(cJ, JJ, Date.now(), ZJ, UJ)))
      };
      (0, FJ.useEffect)((() => {
        AJ()
      }), [cJ, ZJ]), (0, FJ.useEffect)((() => {
        if (0 === eJ.size) return;
        const JJ = Math.min(...[...eJ.values()].map((JJ => JJ.atMs))),
          cJ = setTimeout(AJ, Math.max(0, JJ + ZJ - Date.now()) + 1);
        return () => {
          clearTimeout(cJ)
        }
      }), [eJ, cJ, ZJ]);
      return [eJ, (cJ, ZJ) => {
        XJ((FJ => {
          const eJ = new Map(FJ);
          return eJ.set(cJ, function(JJ, cJ, ZJ) {
            return {
              value: JJ,
              atMs: ZJ,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(JJ, cJ)
            }
          }(ZJ, JJ(cJ), Date.now(), UJ)), eJ
        }))
      }]
    }
    const kY = "buildAFactory2Game:";

    function pY(JJ) {
      let {
        message: cJ,
        itemNames: ZJ
      } = JJ;
      const UJ = gX(),
        {
          t: eJ
        } = (0, vU.F)(),
        [XJ, AJ] = (0, FJ.useState)(!1),
        [qJ, jJ] = function(JJ) {
          let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yX;
          const [ZJ, FJ] = PY((cJ => JJ.includes(cJ)), JJ, cJ, Object.is);
          return [HY(ZJ, JJ), FJ]
        }(cJ.baf2CoreBankPaused),
        YJ = new Set(qJ),
        hJ = [...cJ.baf2CoreBanked];
      for (const FJ of YJ) hJ.some((JJ => {
        let [cJ] = JJ;
        return cJ === FJ
      })) || hJ.push([FJ, 0]);
      return 0 === hJ.length ? null : (0, xe.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, xe.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": XJ,
          onClick: () => {
            AJ(!XJ)
          },
          children: [(0, xe.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: eJ(`${kY}coreBankedLater`)
          }), (0, xe.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: hJ.map((JJ => {
              let [cJ, ZJ] = JJ;
              const FJ = YJ.has(cJ);
              return (0, xe.jsxs)("span", {
                className: GU()({
                  Paused: FJ
                }),
                title: FJ ? eJ(`${kY}coreBankPausedTag`) : void 0,
                children: [(0, xe.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, xe.jsx)(QU.d, {
                    itemName: cJ,
                    amount: 0
                  })
                }), ZJ, FJ && (0, xe.jsx)(mU.c, {
                  name: "pause"
                })]
              }, cJ)
            }))
          }), (0, xe.jsx)(mU.c, {
            name: XJ ? "angle-up" : "angle-down"
          })]
        }), XJ && (0, xe.jsxs)(xe.Fragment, {
          children: [(0, xe.jsx)("ul", {
            children: hJ.map((JJ => {
              let [cJ, FJ] = JJ;
              const XJ = YJ.has(cJ);
              return (0, xe.jsxs)("li", {
                children: [(0, xe.jsxs)(yY, {
                  item: cJ,
                  itemNames: ZJ,
                  children: [(0, xe.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: FJ
                  }), XJ && (0, xe.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: eJ(`${kY}coreBankPausedTag`)
                  })]
                }), (0, xe.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, xe.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === FJ,
                    onClick: () => {
                      UJ.send(`baf2corewithdraw ${FJ} ${cJ}`)
                    },
                    children: eJ(`${kY}coreTake`)
                  }), (0, xe.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      UJ.send(`${mJ} ${cJ}`), jJ(cJ, !XJ)
                    },
                    children: eJ(XJ ? `${kY}coreBankResume` : `${kY}coreBankStop`)
                  })]
                })]
              }, cJ)
            }))
          }), (0, xe.jsx)("p", {
            className: "Baf2CoreHint",
            children: eJ(`${kY}coreBankNote`)
          })]
        })]
      })
    }
    const dY = "buildAFactory2Game:";

    function zY(JJ) {
      const cJ = Math.max(0, Math.floor(JJ));
      return `${Math.floor(cJ/60)}:${String(cJ%60).padStart(2,"0")}`
    }

    function NY(JJ) {
      let {
        item: cJ
      } = JJ;
      return (0, xe.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, xe.jsx)(QU.d, {
          itemName: cJ,
          amount: 0
        })
      })
    }

    function OY() {
      return (0, xe.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, xe.jsx)(mU.c, {
          name: "bolt"
        })
      })
    }

    function TY(JJ) {
      let {
        charge: cJ,
        hint: ZJ,
        itemNames: FJ
      } = JJ;
      const UJ = gX(),
        {
          t: eJ
        } = (0, vU.F)(),
        [XJ, AJ, qJ, jJ, YJ, hJ, DJ] = cJ,
        [sJ, nJ] = function(JJ) {
          var cJ;
          let ZJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yX,
            FJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [UJ, eJ] = PY((() => JJ), JJ, ZJ, FJ);
          return [WY(null !== (cJ = UJ.get("")) && void 0 !== cJ ? cJ : null, JJ), JJ => {
            eJ("", JJ)
          }]
        }(DJ),
        GJ = sJ === DJ ? hJ : !sJ,
        fJ = jJ >= YJ,
        xJ = XJ.find((JJ => {
          let [, cJ, ZJ] = JJ;
          return ZJ < .9 * cJ
        }));
      let rJ = `${dY}coreChargeWaiting`,
        vJ = {};
      return fJ ? rJ = `${dY}coreChargeDone` : sJ ? rJ = `${dY}coreChargeStopped` : GJ && ZJ ? (rJ = `${dY}${ZJ[0]}`, vJ = {
        item: BU(eJ, ZJ[1])
      }) : GJ && xJ ? (rJ = `${dY}coreChargeShort`, vJ = {
        item: BU(eJ, xJ[0])
      }) : GJ && AJ > 0 && !qJ ? rJ = `${dY}coreChargePower` : GJ && (rJ = `${dY}coreChargeRunning`), (0, xe.jsxs)("div", {
        className: GU()("Baf2CoreCharge", {
          Waiting: !GJ && !fJ,
          Done: fJ
        }),
        children: [(0, xe.jsxs)("h4", {
          children: [eJ(`${dY}coreChargeTitle`), (0, xe.jsx)("span", {
            children: eJ(`${dY}coreChargeProgress`, {
              done: zY(jJ),
              need: zY(YJ)
            })
          })]
        }), (0, xe.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, xe.jsx)("div", {
            style: {
              width: 100 * Math.min(jJ, YJ) / YJ + "%"
            }
          })
        }), (0, xe.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [XJ.map((JJ => {
            var cJ;
            let [ZJ, UJ, XJ] = JJ;
            const AJ = XJ >= .9 * UJ;
            return (0, xe.jsxs)("li", {
              className: GU()({
                Done: AJ,
                Short: GJ && !AJ
              }),
              children: [(0, xe.jsx)(NY, {
                item: ZJ
              }), (0, xe.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, xe.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, xe.jsx)(EU.d, {
                    text: null !== (cJ = FJ[ZJ]) && void 0 !== cJ ? cJ : ZJ
                  }), (0, xe.jsx)("span", {
                    children: eJ(`${dY}coreChargeItem`, {
                      now: String(XJ),
                      need: String(UJ)
                    })
                  })]
                }), (0, xe.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, xe.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*XJ/UJ)}%`
                    }
                  })
                })]
              })]
            }, ZJ)
          })), AJ > 0 && (0, xe.jsxs)("li", {
            className: GU()("Baf2CoreChargePower", {
              Short: GJ && !qJ
            }),
            children: [(0, xe.jsx)(OY, {}), (0, xe.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, xe.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, xe.jsx)("span", {
                  children: eJ(`${dY}coreChargePowerRow`, {
                    power: tJ(AJ)
                  })
                })
              })
            })]
          })]
        }), (0, xe.jsx)("p", {
          className: "Baf2CoreHint",
          children: eJ(rJ, vJ)
        }), !fJ && (GJ || sJ) && (0, xe.jsx)("button", {
          type: "button",
          className: GU()("Baf2CoreChargeToggle", {
            Stopped: sJ
          }),
          onClick: () => {
            UJ.send(EJ), nJ(!sJ)
          },
          children: eJ(sJ ? `${dY}coreChargeRestart` : `${dY}coreChargeStop`)
        })]
      })
    }

    function CY(JJ) {
      let {
        charge: cJ,
        reached: ZJ,
        itemNames: FJ
      } = JJ;
      const {
        t: UJ
      } = (0, vU.F)();
      return (0, xe.jsxs)("div", {
        className: GU()("Baf2CoreCharge", {
          Done: ZJ
        }),
        children: [(0, xe.jsxs)("h4", {
          children: [UJ(`${dY}coreChargeTitle`), (0, xe.jsx)("span", {
            children: UJ(`${dY}coreChargeSpecTime`, {
              time: zY(cJ.seconds)
            })
          })]
        }), (0, xe.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [cJ.items.map((JJ => {
            var cJ;
            let {
              item: eJ,
              amount: XJ
            } = JJ;
            return (0, xe.jsxs)("li", {
              className: GU()({
                Done: ZJ
              }),
              children: [(0, xe.jsx)(NY, {
                item: eJ
              }), (0, xe.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, xe.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, xe.jsx)(EU.d, {
                    text: null !== (cJ = FJ[eJ]) && void 0 !== cJ ? cJ : eJ
                  }), (0, xe.jsx)("span", {
                    children: UJ(`${dY}coreChargeSpecItem`, {
                      need: String(XJ)
                    })
                  })]
                })
              })]
            }, eJ)
          })), cJ.powerPerS > 0 && (0, xe.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, xe.jsx)(OY, {}), (0, xe.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, xe.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, xe.jsx)("span", {
                  children: UJ(`${dY}coreChargePowerRow`, {
                    power: tJ(cJ.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const uY = "buildAFactory2Game:";

    function iY(JJ) {
      let {
        def: cJ,
        reached: ZJ,
        banked: FJ,
        itemNames: UJ
      } = JJ;
      const {
        t: eJ
      } = (0, vU.F)();
      return (0, xe.jsx)("ul", {
        className: "Baf2CoreCost",
        children: cJ.cost.map((JJ => {
          let {
            item: cJ,
            amount: XJ
          } = JJ;
          const AJ = ZJ ? 0 : FJ(cJ);
          return (0, xe.jsx)("li", {
            children: (0, xe.jsx)(yY, {
              item: cJ,
              itemNames: UJ,
              children: (0, xe.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: AJ > 0 ? eJ(`${uY}coreBankedFor`, {
                  amount: String(AJ),
                  total: String(XJ)
                }) : `\xd7${XJ}`
              })
            })
          }, cJ)
        }))
      })
    }

    function RY(JJ, cJ) {
      if (cJ >= YJ()) return JJ(`${uY}coreMaxTier`);
      const ZJ = jJ[cJ + 1];
      return ZJ && !ZJ.startsWith("upgradeCore") ? JJ(`${uY}coreGateQuest`, {
        quest: JJ(`${uY}quest_${ZJ}`)
      }) : JJ(`${uY}coreGateClosed`)
    }

    function LY() {
      const {
        t: JJ
      } = (0, vU.F)(), cJ = gX(), ZJ = (0, FJ.useRef)(null), UJ = (0, FJ.useRef)(Date.now());
      return zj(!0, ZJ), (0, xe.jsx)("div", {
        ref: ZJ,
        className: "Baf2CoreGrow",
        children: (0, xe.jsx)(nX.m, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - UJ.current >= 600 && cJ.send(vJ)
          },
          children: JJ(`${uY}coreGrow`)
        })
      })
    }

    function aY(JJ) {
      let {
        message: cJ,
        itemNames: ZJ,
        next: FJ
      } = JJ;
      const UJ = gX(),
        {
          t: eJ
        } = (0, vU.F)(),
        XJ = cJ.baf2CoreTier,
        AJ = cJ.baf2CoreReady,
        qJ = cJ.baf2CoreNeeds.filter((JJ => {
          let [, cJ, ZJ, FJ] = JJ;
          return FJ > 0 && cJ < ZJ
        })),
        jJ = cJ.baf2CoreNeeds.every((JJ => {
          let [, cJ, ZJ] = JJ;
          return cJ >= ZJ
        })),
        YJ = cJ.baf2CoreKeep;
      return (0, xe.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, xe.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [AJ && (0, xe.jsx)(LY, {}), (0, xe.jsx)("h3", {
            children: eJ(`${uY}coreBring`)
          }), (0, xe.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: cJ.baf2CoreNeeds.map((JJ => {
              let [cJ, FJ, XJ, AJ] = JJ;
              return (0, xe.jsxs)("li", {
                className: GU()({
                  Done: FJ >= XJ
                }),
                children: [(0, xe.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, xe.jsx)(QU.d, {
                    itemName: cJ,
                    amount: 0
                  })
                }), (0, xe.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, xe.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, xe.jsx)(EU.d, {
                      text: ZJ[cJ]
                    }), (0, xe.jsxs)("span", {
                      children: [FJ, "/", XJ]
                    })]
                  }), (0, xe.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, xe.jsx)("div", {
                      style: {
                        width: 100 * FJ / XJ + "%"
                      }
                    }), AJ > 0 && (0, xe.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * AJ / XJ + "%"
                      }
                    })]
                  })]
                }), AJ > 0 && FJ < XJ && (0, xe.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    UJ.send(`${QJ} ${cJ}`)
                  },
                  children: eJ(`${uY}coreDeposit`, {
                    amount: String(AJ)
                  })
                })]
              }, cJ)
            }))
          }), cJ.baf2CoreCharge && (0, xe.jsx)(TY, {
            charge: cJ.baf2CoreCharge,
            hint: cJ.baf2CoreChargeHint,
            itemNames: ZJ
          }), !AJ && qJ.length > 1 && (0, xe.jsx)(nX.m, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              UJ.send(vJ)
            },
            children: eJ(`${uY}coreHandOver`)
          }), !AJ && void 0 !== YJ && (0, xe.jsx)("p", {
            className: "Baf2CoreHint",
            children: eJ(`${uY}coreKeepRest`, {
              item: BU(eJ, YJ)
            })
          }), !AJ && !jJ && 0 === qJ.length && void 0 === YJ && (0, xe.jsx)("p", {
            className: "Baf2CoreHint",
            children: eJ(`${uY}coreNothingHeld`)
          }), (0, xe.jsx)(pY, {
            message: cJ,
            itemNames: ZJ
          })]
        }), (0, xe.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, xe.jsx)("h3", {
            children: eJ(`${uY}coreRewards`)
          }), (0, xe.jsx)(bY, {
            def: FJ,
            tier: XJ + 1,
            itemNames: ZJ
          })]
        })]
      })
    }

    function BY(JJ) {
      let {
        message: cJ,
        itemNames: ZJ,
        shown: FJ
      } = JJ;
      const {
        t: UJ
      } = (0, vU.F)(), eJ = cJ.baf2CoreTier, XJ = xJ(FJ), AJ = FJ <= eJ, qJ = new Map(cJ.baf2CoreBanked), jJ = !rJ(eJ, VJ(cJ)) && FJ === eJ;
      return (0, xe.jsxs)("div", {
        className: GU()("Baf2CoreBody", {
          Locked: !AJ
        }),
        children: [(0, xe.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, xe.jsx)("h3", {
            children: UJ(AJ ? `${uY}coreItTook` : `${uY}coreItNeeds`)
          }), 0 === XJ.cost.length && (0, xe.jsx)("p", {
            className: "Baf2CoreHint",
            children: UJ(`${uY}coreTierStart`)
          }), XJ.cost.length > 0 && (0, xe.jsx)(iY, {
            def: XJ,
            reached: AJ,
            banked: JJ => {
              var cJ;
              return function(JJ, cJ, ZJ, FJ) {
                let UJ = JJ;
                for (let XJ = cJ + 2; XJ <= ZJ; XJ++) {
                  var eJ;
                  const JJ = xJ(XJ).cost.find((JJ => JJ.item === FJ)),
                    cJ = Math.min(UJ, null !== (eJ = null === JJ || void 0 === JJ ? void 0 : JJ.amount) && void 0 !== eJ ? eJ : 0);
                  if (XJ === ZJ) return cJ;
                  UJ -= cJ
                }
                return 0
              }(null !== (cJ = qJ.get(JJ)) && void 0 !== cJ ? cJ : 0, eJ, FJ, JJ)
            },
            itemNames: ZJ
          }), XJ.charge && (0, xe.jsx)(CY, {
            charge: XJ.charge,
            reached: AJ,
            itemNames: ZJ
          }), jJ && (0, xe.jsxs)(xe.Fragment, {
            children: [(0, xe.jsx)("p", {
              className: "Baf2CoreHint",
              children: RY(UJ, eJ)
            }), (0, xe.jsx)(pY, {
              message: cJ,
              itemNames: ZJ
            })]
          })]
        }), (0, xe.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, xe.jsx)("h3", {
            children: UJ(AJ ? `${uY}coreGave` : `${uY}coreLockedRewards`)
          }), (0, xe.jsx)(bY, {
            def: XJ,
            tier: FJ,
            itemNames: ZJ
          })]
        })]
      })
    }

    function tY(JJ, cJ) {
      const {
        key: ZJ,
        params: FJ
      } = sJ(cJ - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return JJ(`${uY}${ZJ}`, FJ)
    }
    const oY = "buildAFactory2Game:",
      lY = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      Jh = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function ch(JJ) {
      let {
        view: cJ,
        close: ZJ,
        askIslands: UJ
      } = JJ;
      const {
        t: eJ
      } = (0, vU.F)(), [XJ, AJ] = (0, FJ.useState)(!1);
      (0, FJ.useEffect)((() => {
        if (!XJ) return;
        const JJ = window.setTimeout((() => {
          AJ(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(JJ)
        }
      }), [XJ]);
      const {
        message: qJ,
        itemNames: jJ
      } = cJ, YJ = qJ.baf2CoreTier, hJ = xJ(YJ), DJ = rJ(YJ, VJ(qJ)), [GJ, fJ] = qJ.baf2CoreMachines, [vJ, mJ] = qJ.baf2CoreBelts, QJ = qJ.baf2CoreStorage, EJ = qJ.baf2CoreReady, [KJ, yJ] = (0, FJ.useState)(null), SJ = (null === KJ || void 0 === KJ ? void 0 : KJ.at) === YJ && KJ.ready === EJ ? KJ.tier : DJ ? YJ + 1 : YJ;
      let IJ = "coreTierLocked";
      SJ <= YJ ? IJ = "coreTierReached" : SJ === YJ + 1 && (IJ = "coreTierNext");
      const MJ = eJ(`${oY}${xJ(SJ).nameKey}`),
        bJ = SJ === YJ + 1 ? DJ : null,
        wJ = sJ(SJ, {
          tier: IJ,
          stage: lY[IJ],
          atomic: Jh[IJ]
        }),
        WJ = eJ(`${oY}${wJ.key}`, {
          ...wJ.params,
          name: MJ
        }),
        gJ = sJ(YJ, nJ),
        HJ = eJ(`${oY}${gJ.key}`, {
          ...gJ.params,
          name: eJ(`${oY}${hJ.nameKey}`)
        });
      return (0, xe.jsx)(sX.c, {
        close: ZJ,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, xe.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, xe.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, xe.jsxs)("div", {
              children: [(0, xe.jsx)("h2", {
                id: "baf2CoreTitle",
                children: eJ(`${oY}coreTitle`)
              }), void 0 !== qJ.baf2CoreIslandName && (0, xe.jsx)("p", {
                className: "Baf2CoreIsland",
                children: qJ.baf2CoreIslandName
              }), (0, xe.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, xe.jsx)("span", {
                  children: HJ
                }), (0, xe.jsx)("span", {
                  className: GU()({
                    Full: GJ >= fJ
                  }),
                  children: eJ(`${oY}coreMachineCount`, {
                    amount: String(GJ),
                    total: String(fJ)
                  })
                }), (0, xe.jsx)("span", {
                  className: GU()({
                    Full: vJ >= mJ
                  }),
                  children: eJ(`${oY}coreBeltCount`, {
                    amount: String(vJ),
                    total: String(mJ)
                  })
                }), void 0 !== QJ && (0, xe.jsx)("span", {
                  className: GU()({
                    Full: QJ[0] >= QJ[1]
                  }),
                  children: eJ(`${oY}coreStorageCount`, {
                    amount: String(QJ[0]),
                    total: String(QJ[1])
                  })
                })]
              })]
            }), (0, xe.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [qJ.baf2CoreIslands && (0, xe.jsx)(nX.d, {
                className: "Baf2CoreIslandsButton",
                disabled: XJ,
                onClick: () => {
                  AJ(!0), UJ()
                },
                children: eJ(`${oY}islandsOpenButton`)
              }), (0, xe.jsx)(nX.j, {
                onClick: ZJ
              })]
            })]
          }), (0, xe.jsx)(VY, {
            tier: YJ,
            shown: SJ,
            PD: JJ => {
              yJ({
                tier: JJ,
                at: YJ,
                ready: EJ
              })
            }
          }), (0, xe.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [WJ, SJ > YJ + 1 && (0, xe.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: tY(eJ, SJ)
            })]
          }), 6 === SJ && SJ > YJ && (0, xe.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: eJ(`${oY}coreStagesNote`)
          }), 11 === SJ && SJ > YJ && (0, xe.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: eJ(`${oY}coreAtomicNote`)
          }), bJ && (0, xe.jsx)(aY, {
            message: qJ,
            itemNames: jJ,
            next: bJ
          }), !bJ && (0, xe.jsx)(BY, {
            message: qJ,
            itemNames: jJ,
            shown: SJ
          })]
        })
      })
    }
    const Zh = {
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
    const Fh = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: Je,
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

    function Uh(JJ) {
      return JJ.baf2DropCometOreOnly ? "dropCometOre" : JJ.baf2DropCometIsotope ? "seed" === JJ.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function eh(JJ) {
      let {
        message: cJ,
        quests: ZJ,
        close: UJ,
        cn: eJ
      } = JJ;
      const XJ = gX(),
        {
          t: AJ
        } = (0, vU.F)(),
        qJ = (0, Lj.m)(IU, ZJ.get()),
        jJ = function(JJ) {
          var cJ;
          if (!gJ(JJ.tutorial)) return null;
          const ZJ = JJ.rows.find((JJ => JJ.current)),
            FJ = ZJ ? Zh[ZJ.key] : void 0;
          return null !== (cJ = null !== FJ && void 0 !== FJ ? FJ : JJ.side ? Zh[JJ.side.row.key] : void 0) && void 0 !== cJ ? cJ : null
        }(qJ),
        YJ = null === qJ.tier || Fe(qJ.tier),
        hJ = YJ ? Fh : Fh.filter((JJ => {
          let {
            item: cJ
          } = JJ;
          return cJ !== Je
        })),
        [DJ, sJ] = (0, FJ.useState)(null),
        nJ = null !== DJ && void 0 !== DJ ? DJ : !cJ.baf2DropFoundSalvage && YJ,
        GJ = cJ.baf2DropRuinDistance,
        fJ = cJ.baf2DropComet,
        xJ = cJ.baf2DropOldWorks,
        rJ = cJ.baf2DropGrove,
        vJ = function(JJ) {
          return 2 + Number(void 0 !== JJ.baf2DropComet) + Number(!!JJ.baf2DropOwedComet || void 0 !== JJ.baf2DropOwedWaitMinutes) + Number(void 0 !== JJ.baf2DropDigDistance) + Number(void 0 !== JJ.baf2DropOldWorks) + Number(void 0 !== JJ.baf2DropGrove)
        }(cJ),
        mJ = JJ => {
          XJ.send(function(JJ) {
            return `baf2drop ${JJ}`
          }(JJ)), eJ()
        };
      let QJ = AJ("buildAFactory2Game:dropRuinNone");
      if (null !== GJ) {
        let JJ = cJ.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        cJ.baf2DropRuinOldWorks && (JJ = "dropRuinOldWorks");
        const ZJ = void 0 === cJ.baf2DropRuinCluster ? AJ("buildAFactory2Game:dropRuinOpen") : AJ("buildAFactory2Game:dropRuinCluster", {
          count: String(cJ.baf2DropRuinCluster)
        });
        QJ = `${AJ(`buildAFactory2Game:${JJ}`,{distance:String(GJ)})} ${ZJ}`
      }
      let EJ = AJ("buildAFactory2Game:dropBelowDescription");
      void 0 !== cJ.baf2DropBelowLook && (EJ = AJ("buildAFactory2Game:dropBelowLook", {
        look: AJ(cJ.baf2DropBelowLook)
      }));
      const VJ = "buildAFactory2Game:wildsRegion_survivorGrove" === cJ.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        KJ = se(AJ, 60 * function(JJ) {
          const [cJ, ZJ] = (0, FJ.useState)((() => Date.now())), [UJ, eJ] = (0, FJ.useState)(cJ);
          return (0, FJ.useEffect)((() => {
            const JJ = Date.now();
            ZJ(JJ), eJ(JJ)
          }), [JJ]), (0, FJ.useEffect)((() => {
            const JJ = window.setInterval((() => {
              eJ(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(JJ)
            }
          }), []), Math.max(1, JJ.baf2DropRenewMinutes - Math.floor((UJ - cJ) / 6e4))
        }(cJ)),
        yJ = function(JJ, cJ, ZJ) {
          return "ruin" === JJ && !ZJ || "owed" === JJ && !cJ.baf2DropOwedComet ? null : JJ
        }(jJ, cJ, null !== GJ),
        SJ = function(JJ) {
          for (var cJ = arguments.length, ZJ = new Array(cJ > 1 ? cJ - 1 : 0), FJ = 1; FJ < cJ; FJ++) ZJ[FJ - 1] = arguments[FJ];
          return GU()("Baf2DropTile", ...ZJ, {
            Wanted: yJ === JJ
          })
        };
      return (0, xe.jsx)(sX.c, {
        close: UJ,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, xe.jsxs)("section", {
          className: GU()("Baf2Panel Baf2DropMap", {
            Many: vJ >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, xe.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, xe.jsxs)("div", {
              children: [(0, xe.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: AJ("buildAFactory2Game:dropMapTitle")
              }), (0, xe.jsx)("p", {
                children: AJ("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, xe.jsx)(nX.j, {
              onClick: UJ
            })]
          }), (0, xe.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== fJ && (0, xe.jsxs)(nX.y, {
              className: SJ("comet", "Baf2DropComet"),
              onClick: () => {
                mJ("comet")
              },
              children: [(0, xe.jsx)("strong", {
                children: AJ("buildAFactory2Game:dropComet")
              }), (0, xe.jsx)("span", {
                children: AJ(`buildAFactory2Game:${Uh(cJ)}`, {
                  distance: String(fJ)
                })
              })]
            }), cJ.baf2DropOwedComet && (0, xe.jsxs)(nX.y, {
              className: SJ("owed", "Baf2DropComet"),
              onClick: () => {
                mJ("owed")
              },
              children: [(0, xe.jsx)("strong", {
                children: AJ("buildAFactory2Game:dropOwedComet")
              }), (0, xe.jsx)("span", {
                children: cJ.baf2DropOwedIsotope ? AJ("buildAFactory2Game:dropOwedIsotopeDescription") : AJ("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== cJ.baf2DropOwedWaitMinutes && (0, xe.jsxs)(nX.y, {
              className: SJ("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, xe.jsx)("strong", {
                children: AJ("buildAFactory2Game:dropOwedComet")
              }), (0, xe.jsx)("span", {
                children: AJ("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(cJ.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, xe.jsxs)(nX.d, {
              className: SJ("below"),
              onClick: () => {
                mJ("below")
              },
              children: [(0, xe.jsx)("strong", {
                children: AJ("buildAFactory2Game:dropBelow")
              }), (0, xe.jsx)("span", {
                children: EJ
              })]
            }), void 0 !== cJ.baf2DropDigDistance && (0, xe.jsxs)(nX.r, {
              className: SJ("dig"),
              onClick: () => {
                mJ("dig")
              },
              children: [(0, xe.jsx)("strong", {
                children: AJ("buildAFactory2Game:dropDig")
              }), (0, xe.jsx)("span", {
                children: AJ("buildAFactory2Game:dropDigDescription", {
                  distance: String(cJ.baf2DropDigDistance),
                  y: De(cJ.baf2DropDigY)
                })
              })]
            }), void 0 !== rJ && (0, xe.jsxs)(nX.r, {
              className: SJ("grove", "Baf2DropGrove"),
              onClick: () => {
                mJ("grove")
              },
              children: [(0, xe.jsx)("strong", {
                children: AJ("buildAFactory2Game:dropGrove")
              }), (0, xe.jsx)("span", {
                children: AJ(`buildAFactory2Game:${VJ}`, {
                  distance: String(rJ)
                })
              })]
            }), (0, xe.jsxs)(nX.m, {
              className: SJ("ruin"),
              disabled: null === GJ,
              onClick: () => {
                mJ("ruin")
              },
              children: [(0, xe.jsx)("strong", {
                children: AJ("buildAFactory2Game:dropRuin")
              }), (0, xe.jsx)("span", {
                children: QJ
              })]
            }), void 0 !== xJ && (0, xe.jsxs)(nX.I, {
              className: SJ("works"),
              onClick: () => {
                mJ("works")
              },
              children: [(0, xe.jsx)("strong", {
                children: AJ("buildAFactory2Game:dropOldWorks")
              }), (0, xe.jsx)("span", {
                children: AJ("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(xJ)
                })
              })]
            })]
          }), (0, xe.jsx)("p", {
            className: "Baf2DropRenew",
            children: AJ("buildAFactory2Game:dropRenew", {
              time: KJ
            })
          }), (0, xe.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: nJ,
            onToggle: JJ => {
              JJ.currentTarget.open !== nJ && sJ(JJ.currentTarget.open)
            },
            children: [(0, xe.jsx)("summary", {
              children: AJ("buildAFactory2Game:dropSalvageWhat")
            }), (0, xe.jsx)("p", {
              children: AJ("buildAFactory2Game:dropSalvageIntro")
            }), (0, xe.jsx)("ul", {
              children: hJ.map((JJ => {
                let {
                  item: cJ,
                  nameKey: ZJ,
                  useKey: FJ,
                  params: UJ
                } = JJ;
                return (0, xe.jsxs)("li", {
                  children: [(0, xe.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, xe.jsx)(QU.d, {
                      itemName: cJ,
                      amount: 0
                    })
                  }), (0, xe.jsxs)("span", {
                    children: [(0, xe.jsx)("strong", {
                      children: AJ(ZJ)
                    }), ": ", AJ(FJ, UJ)]
                  })]
                }, cJ)
              }))
            })]
          })]
        })
      })
    }
    const Xh = "buildAFactory2Game:";

    function Ah(JJ, cJ) {
      return JJ.sendIslandEdit(`baf2coopleave ${cJ.baf2IslandId}`)
    }

    function qh(JJ) {
      let {
        card: cJ,
        canRename: ZJ,
        done: UJ,
        t: eJ
      } = JJ;
      const XJ = gX(),
        [AJ, qJ] = (0, FJ.useState)(cJ.baf2IslandName),
        jJ = sj(AJ),
        YJ = "" === jJ || nj(jJ),
        hJ = () => {
          !YJ && ZJ && (jJ !== cJ.baf2IslandName ? UJ(XJ.sendIslandEdit(`baf2islandrename ${cJ.baf2IslandId} ${jJ}`)) : UJ(null))
        },
        DJ = () => {
          UJ(null)
        };
      return (0, xe.jsxs)("div", {
        className: "Baf2IslandForm",
        ...pj(DJ),
        children: [(0, xe.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [eJ(`${Xh}islandsRenameLabel`), (0, xe.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: AJ,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: dj,
            onChange: JJ => {
              qJ(JJ.target.value)
            },
            ...kj(hJ, DJ)
          })]
        }), "" === jJ && (0, xe.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: eJ(`${Xh}islandsRenameEmpty`)
        }), nj(jJ) && (0, xe.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: eJ(`${Xh}islandsNameReserved`)
        }), (0, xe.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, xe.jsx)(nX.r, {
            disabled: YJ || !ZJ,
            onClick: hJ,
            children: eJ(`${Xh}islandsRenameSave`)
          }), (0, xe.jsx)(nX.d, {
            onClick: DJ,
            children: eJ(`${Xh}islandsCancel`)
          })]
        })]
      })
    }

    function jh(JJ) {
      let {
        card: cJ,
        canDelete: ZJ,
        done: UJ,
        t: eJ
      } = JJ;
      const XJ = gX(),
        [AJ, qJ] = (0, FJ.useState)(""),
        jJ = function(JJ, cJ) {
          return sj(JJ).toLowerCase() === sj(cJ).toLowerCase()
        }(AJ, cJ.baf2IslandName),
        YJ = () => {
          jJ && ZJ && UJ(XJ.sendIslandEdit(`baf2islanddelete ${cJ.baf2IslandId}`))
        },
        hJ = () => {
          UJ(null)
        },
        DJ = yj("name"),
        [sJ, nJ = ""] = eJ(`${Xh}islandsDeleteConfirm`, {
          name: DJ
        }).split(DJ);
      return (0, xe.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...pj(hJ),
        children: [(0, xe.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, xe.jsxs)("span", {
            children: [sJ, (0, xe.jsx)("strong", {
              children: cJ.baf2IslandName
            }), nJ]
          }), (0, xe.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: AJ,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: dj,
            onChange: JJ => {
              qJ(JJ.target.value)
            },
            ...kj(YJ, hJ)
          })]
        }), Wj(cJ) && (0, xe.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: eJ(`${Xh}islandsDeleteLeftBack`)
        }), (0, xe.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, xe.jsx)(nX.I, {
            disabled: !jJ || !ZJ,
            onClick: YJ,
            children: eJ(`${Xh}islandsDeleteForGood`)
          }), (0, xe.jsx)(nX.d, {
            onClick: hJ,
            children: eJ(`${Xh}islandsCancel`)
          })]
        })]
      })
    }

    function Yh(JJ) {
      let {
        members: cJ,
        t: ZJ
      } = JJ;
      const FJ = cJ.length;
      return (0, xe.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, xe.jsxs)("span", {
          children: [1 === FJ ? ZJ(`${Xh}islandsPlayersOne`) : ZJ(`${Xh}islandsPlayers`, {
            count: String(FJ)
          }), " "]
        }), cJ.map(((JJ, cJ) => (0, xe.jsxs)("span", {
          className: GU()("Baf2IslandMember", {
            Here: JJ.baf2MemberHere
          }),
          title: JJ.baf2MemberHere ? ZJ(`${Xh}islandsPlayerHere`) : void 0,
          children: [JJ.baf2MemberName, cJ < FJ - 1 ? ", " : ""]
        }, JJ.baf2MemberKey)))]
      })
    }

    function hh(JJ) {
      let {
        card: cJ,
        answered: ZJ,
        nowMs: UJ,
        t: eJ
      } = JJ;
      const XJ = gX(),
        [AJ, qJ] = (0, FJ.useState)(new Map),
        jJ = Wj(cJ);
      if (!jJ) return null;
      return (0, xe.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, xe.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: eJ(`${Xh}islandsLeftTitle`)
        }), (0, xe.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: jJ.left.map((JJ => {
            const FJ = JJ.baf2LeftKey,
              YJ = Hj(AJ.get(FJ), ZJ, UJ),
              hJ = function(JJ) {
                return 1 === JJ ? [`${jj}islandsLeftItemsOne`] : [`${jj}islandsLeftItems`, {
                  count: String(JJ)
                }]
              }(JJ.baf2LeftItems);
            return (0, xe.jsx)("li", {
              className: GU()("Baf2IslandPerson", {
                Pending: YJ
              }),
              children: (0, xe.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, xe.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: JJ.baf2LeftName
                }), (0, xe.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: eJ(hJ[0], hJ[1])
                }), jJ.claim && (0, xe.jsx)(nX.r, {
                  className: "Baf2IslandPersonButton",
                  disabled: YJ,
                  onClick: () => {
                    (JJ => {
                      const ZJ = XJ.sendIslandEdit(`baf2coopclaim ${cJ.baf2IslandId} ${JJ}`);
                      qJ((cJ => new Map(cJ).set(JJ, {
                        atMs: Date.now(),
                        answer: ZJ
                      })))
                    })(FJ)
                  },
                  children: eJ(`${Xh}islandsClaim`)
                })]
              })
            }, FJ)
          }))
        }), jJ.goThere && (0, xe.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: eJ(`${Xh}islandsClaimGoThere`)
        })]
      })
    }

    function Dh(JJ) {
      let {
        card: cJ,
        view: ZJ,
        blocked: UJ,
        maxIslands: eJ,
        answered: XJ,
        nowMs: AJ,
        done: qJ,
        openSocial: jJ,
        t: YJ
      } = JJ;
      const hJ = gX(),
        [DJ, sJ] = (0, FJ.useState)(new Map),
        [nJ, GJ] = (0, FJ.useState)(new Map),
        [fJ, xJ] = (0, FJ.useState)(null),
        rJ = (0, FJ.useRef)(null);
      Oj(rJ);
      const vJ = cJ.baf2IslandId,
        mJ = cJ.baf2IslandCoop,
        QJ = null !== mJ && void 0 !== mJ && mJ.baf2CoopMembers.some((JJ => JJ.baf2MemberKey === fJ)) ? fJ : null,
        EJ = function(JJ, cJ) {
          const ZJ = JJ.baf2IslandCoop;
          return ZJ && gj(ZJ) || null !== cJ ? void 0 : JJ.baf2IslandInvitable
        }(cJ, UJ),
        VJ = function(JJ, cJ) {
          const ZJ = JJ.baf2IslandCoop;
          return ZJ && gj(ZJ) ? {
            key: `${jj}islandsCoopFull`,
            params: {
              max: String(ZJ.baf2CoopMax)
            }
          } : void 0 !== JJ.baf2IslandInvitable && null === cJ || ZJ && !ZJ.baf2CoopManageHere ? null : "degraded" === cJ || "stuck" === cJ ? {
            key: `${jj}islandsInviteNotLoaded`
          } : null === cJ || function(JJ) {
            return "notHome" === JJ || "wilds" === JJ || "visiting" === JJ
          }(cJ) || rj(cJ) ? {
            key: `${jj}islandsInviteGoThere`
          } : {
            key: `${jj}islandsInviteBusy`
          }
        }(cJ, UJ),
        KJ = () => {
          var JJ;
          xJ(null), null === (JJ = rJ.current) || void 0 === JJ || JJ.focus()
        };
      return (0, xe.jsxs)("div", {
        ref: rJ,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...pj(null === QJ ? qJ : KJ),
        children: [mJ && (0, xe.jsxs)(xe.Fragment, {
          children: [(0, xe.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: YJ(`${Xh}islandsPlayersTitle`, {
              count: String(mJ.baf2CoopMembers.length),
              max: String(mJ.baf2CoopMax)
            })
          }), (0, xe.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: mJ.baf2CoopMembers.map(((JJ, cJ) => {
              const FJ = JJ.baf2MemberKey,
                UJ = Hj(DJ.get(FJ), XJ, AJ);
              return (0, xe.jsxs)("li", {
                className: GU()("Baf2IslandPerson", {
                  Pending: UJ
                }),
                children: [(0, xe.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, xe.jsx)("span", {
                    className: GU()("Baf2IslandPersonName", {
                      Here: JJ.baf2MemberHere
                    }),
                    children: JJ.baf2MemberName
                  }), JJ.baf2MemberHere && (0, xe.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: YJ(`${Xh}islandsPlayerHere`)
                  }), 0 === cJ && (0, xe.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: YJ(`${Xh}islandsPlayerOwner`)
                  }), ZJ.remove && cJ > 0 && !UJ && QJ !== FJ && (0, xe.jsx)(nX.J, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var JJ;
                      xJ(FJ), null === (JJ = rJ.current) || void 0 === JJ || JJ.focus()
                    },
                    children: YJ(`${Xh}islandsRemove`)
                  })]
                }), QJ === FJ && (0, xe.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, xe.jsx)("p", {
                    children: Sj(YJ, `${Xh}islandsRemoveConfirm`, {
                      player: JJ.baf2MemberName
                    })
                  }), (0, xe.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, xe.jsx)(nX.I, {
                      onClick: () => {
                        (JJ => {
                          const cJ = hJ.sendIslandEdit(`baf2coopremove ${vJ} ${JJ.baf2MemberKey}`);
                          sJ((ZJ => new Map(ZJ).set(JJ.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: cJ
                          }))), KJ()
                        })(JJ)
                      },
                      children: YJ(`${Xh}islandsRemoveYes`)
                    }), (0, xe.jsx)(nX.d, {
                      onClick: KJ,
                      children: YJ(`${Xh}islandsCancel`)
                    })]
                  })]
                })]
              }, FJ)
            }))
          })]
        }), (void 0 !== EJ || null !== VJ) && (0, xe.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: YJ(`${Xh}islandsInviteTitle`)
        }), !mJ && (void 0 !== EJ || null !== VJ) && (0, xe.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: YJ(`${Xh}islandsInviteShareNote`)
        }), 0 === (null === EJ || void 0 === EJ ? void 0 : EJ.length) && (0, xe.jsx)(sh, {
          openSocial: jJ,
          t: YJ
        }), void 0 !== EJ && EJ.length > 0 && (0, xe.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: EJ.map((JJ => {
            const cJ = !0 === JJ.baf2InvitableSent || Hj(nJ.get(JJ.baf2InvitableId), XJ, AJ);
            return (0, xe.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, xe.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, xe.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: JJ.baf2InvitableName
                }), JJ.baf2InvitableFull && !cJ && (0, xe.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: YJ(`${Xh}islandsInviteTheirFull`, {
                    max: String(eJ)
                  })
                }), (cJ || !JJ.baf2InvitableFull) && (0, xe.jsx)(nX.r, {
                  className: "Baf2IslandPersonButton",
                  disabled: cJ,
                  onClick: () => {
                    (JJ => {
                      const cJ = hJ.sendIslandEdit(`baf2coopinvite ${vJ} ${JJ}`);
                      GJ((ZJ => new Map(ZJ).set(JJ, {
                        atMs: Date.now(),
                        answer: cJ
                      })))
                    })(JJ.baf2InvitableId)
                  },
                  children: YJ(cJ ? `${Xh}islandsInvited` : `${Xh}islandsInvite`)
                })]
              })
            }, JJ.baf2InvitableId)
          }))
        }), VJ && (0, xe.jsx)(uj, {
          note: VJ,
          t: YJ
        }), (0, xe.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, xe.jsx)(nX.d, {
            onClick: qJ,
            children: YJ(`${Xh}islandsDone`)
          })
        })]
      })
    }

    function sh(JJ) {
      let {
        openSocial: cJ,
        t: ZJ
      } = JJ;
      return (0, xe.jsxs)(xe.Fragment, {
        children: [(0, xe.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: ZJ(cJ ? `${Xh}islandsInviteNobody` : `${Xh}islandsInviteNobodyGuest`)
        }), cJ && (0, xe.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, xe.jsx)(nX.d, {
            onClick: cJ,
            children: ZJ("socialBar:social")
          })
        })]
      })
    }

    function nh(JJ) {
      let {
        className: cJ,
        text: ZJ,
        ConfirmButton: UJ,
        confirmLabel: eJ,
        canConfirm: XJ,
        send: AJ,
        done: qJ,
        t: jJ
      } = JJ;
      const YJ = (0, FJ.useRef)(null);
      Oj(YJ);
      const hJ = () => {
        qJ(null)
      };
      return (0, xe.jsxs)("div", {
        ref: YJ,
        tabIndex: -1,
        className: GU()("Baf2IslandForm", cJ),
        ...pj(hJ),
        children: [(0, xe.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: ZJ
        }), (0, xe.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, xe.jsx)(UJ, {
            disabled: !XJ,
            onClick: () => {
              XJ && qJ(AJ())
            },
            children: eJ
          }), (0, xe.jsx)(nX.d, {
            onClick: hJ,
            children: jJ(`${Xh}islandsCancel`)
          })]
        })]
      })
    }

    function Gh(JJ) {
      return "hidden" !== JJ
    }

    function fh(JJ) {
      var cJ, ZJ;
      let {
        card: UJ,
        keepOwn: eJ,
        blocked: XJ,
        maxIslands: AJ,
        serverNowMs: qJ,
        nowMs: jJ,
        actions: YJ,
        full: hJ,
        waits: DJ,
        answered: sJ,
        mode: nJ,
        setMode: GJ,
        pending: fJ,
        onSent: xJ,
        switchTo: rJ,
        cn: vJ,
        coopOn: mJ,
        openSocial: QJ,
        t: EJ
      } = JJ;
      const VJ = gX(),
        KJ = UJ.baf2IslandActive,
        yJ = KJ ? null : function(JJ, cJ) {
          if (JJ <= 0) return null;
          const ZJ = cJ - JJ;
          if (ZJ < qe) return [`${jj}islandsPlayedJustNow`];
          if (ZJ < Yj) return [`${jj}islandsPlayedMinutes`, {
            minutes: String(Math.floor(ZJ / qe))
          }];
          if (ZJ < hj) return [`${jj}islandsPlayedHours`, {
            hours: String(Math.floor(ZJ / Yj))
          }];
          const FJ = Math.floor(ZJ / hj);
          return 1 === FJ ? [`${jj}islandsPlayedDay`] : [`${jj}islandsPlayedDays`, {
            days: String(FJ)
          }]
        }(UJ.baf2IslandLastPlayedMs, qJ),
        SJ = void 0 === (IJ = UJ.baf2IslandItems) ? null : 0 === IJ ? [`${jj}islandsItemsNone`] : 1 === IJ ? [`${jj}islandsItemsOne`] : [`${jj}islandsItems`, {
          count: String(IJ)
        }];
      var IJ;
      const MJ = function(JJ) {
          return JJ ? 1 === JJ ? [`${jj}islandsWaitingOne`] : [`${jj}islandsWaiting`, {
            count: String(JJ)
          }] : null
        }(UJ.baf2IslandWaiting),
        bJ = UJ.baf2IslandUnreadable,
        wJ = UJ.baf2IslandCoop,
        WJ = wj(UJ, YJ, eJ, hJ, mJ),
        gJ = (0, FJ.useRef)(null);
      zj(null !== nJ, gJ);
      const HJ = () => {
          var JJ;
          GJ(null), null === (JJ = gJ.current) || void 0 === JJ || JJ.focus()
        },
        PJ = (JJ, cJ) => {
          HJ(), null !== JJ && xJ(JJ, cJ)
        },
        kJ = (JJ, cJ) => EJ(`${Xh}${JJ}`, {
          time: se(EJ, cJ)
        });
      return (0, xe.jsxs)("li", {
        ref: gJ,
        tabIndex: -1,
        className: GU()("Baf2IslandCard", {
          Active: KJ,
          Pending: fJ,
          Shared: void 0 !== wJ
        }),
        children: [(0, xe.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, xe.jsx)("strong", {
            className: "Baf2IslandName",
            children: UJ.baf2IslandName
          }), KJ && (0, xe.jsx)("span", {
            className: "Baf2IslandBadge",
            children: EJ(`${Xh}islandsOnThis`)
          }), wJ && (0, xe.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: EJ(`${Xh}islandsShared`)
          })]
        }), "member" === (null === wJ || void 0 === wJ ? void 0 : wJ.baf2CoopRole) && (0, xe.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: Sj(EJ, `${Xh}islandsSharedBy`, {
            owner: wJ.baf2CoopOwner
          })
        }), void 0 !== bJ && (0, xe.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: EJ("newer" === bJ ? `${Xh}islandsUnreadable` : `${Xh}islandsDamaged`)
        }), "corrupt" === bJ && hJ && (0, xe.jsx)("p", {
          className: "Baf2IslandStats",
          children: EJ(`${Xh}islandsDamagedFull`)
        }), void 0 === bJ && (0, xe.jsxs)(xe.Fragment, {
          children: [(0, xe.jsx)(Cj, {
            tier: UJ.baf2IslandTier,
            t: EJ
          }), (0, xe.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, xe.jsx)("span", {
              children: 1 === UJ.baf2IslandQuestsDone ? EJ(`${Xh}islandsQuestsDoneOne`) : EJ(`${Xh}islandsQuestsDone`, {
                count: String(UJ.baf2IslandQuestsDone)
              })
            }), (0, xe.jsx)("span", {
              children: 1 === UJ.baf2IslandMachines ? EJ(`${Xh}islandsMachinesOne`) : EJ(`${Xh}islandsMachines`, {
                count: String(UJ.baf2IslandMachines)
              })
            }), SJ && (0, xe.jsx)("span", {
              children: EJ(SJ[0], SJ[1])
            }), MJ && (0, xe.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: EJ(MJ[0], MJ[1])
            }), yJ && (0, xe.jsx)("span", {
              children: EJ(yJ[0], yJ[1])
            })]
          })]
        }), wJ && void 0 === wJ.baf2CoopState && "people" !== nJ && (0, xe.jsx)(Yh, {
          members: wJ.baf2CoopMembers,
          t: EJ
        }), null === nJ && (0, xe.jsx)(hh, {
          card: UJ,
          answered: sJ,
          nowMs: jJ,
          t: EJ
        }), WJ.note && (0, xe.jsx)(uj, {
          note: WJ.note,
          className: GU()({
            Unreachable: void 0 !== (null === wJ || void 0 === wJ ? void 0 : wJ.baf2CoopState)
          }),
          t: EJ
        }), "rename" === nJ && (0, xe.jsx)(qh, {
          card: UJ,
          canRename: "enabled" === WJ.rename,
          done: PJ,
          t: EJ
        }), "delete" === nJ && (0, xe.jsx)(jh, {
          card: UJ,
          canDelete: "enabled" === WJ.delete,
          done: JJ => {
            PJ(JJ, wJ ? "delete" : void 0)
          },
          t: EJ
        }), "people" === nJ && (0, xe.jsx)(Dh, {
          card: UJ,
          view: WJ,
          blocked: XJ,
          maxIslands: AJ,
          answered: sJ,
          nowMs: jJ,
          done: HJ,
          openSocial: QJ,
          t: EJ
        }), "cn" === nJ && (0, xe.jsx)(nh, {
          className: "Leave",
          text: Sj(EJ, `${Xh}islandsLeaveConfirm`, {
            island: UJ.baf2IslandName,
            owner: null !== (cJ = null === (ZJ = UJ.baf2IslandCoop) || void 0 === ZJ ? void 0 : ZJ.baf2CoopOwner) && void 0 !== cJ ? cJ : ""
          }),
          ConfirmButton: nX.I,
          confirmLabel: EJ(`${Xh}islandsLeaveYes`),
          canConfirm: "enabled" === WJ.cn,
          send: () => Ah(VJ, UJ),
          done: JJ => {
            PJ(JJ, "cn"), null !== JJ && KJ && vJ()
          },
          t: EJ
        }), "unshare" === nJ && (0, xe.jsx)(nh, {
          className: "Unshare",
          text: Sj(EJ, `${Xh}islandsStopSharingConfirm`, {
            island: UJ.baf2IslandName
          }),
          ConfirmButton: nX.r,
          confirmLabel: EJ(`${Xh}islandsStopSharing`),
          canConfirm: "enabled" === WJ.unshare,
          send: () => VJ.sendIslandEdit(`baf2coopunshare ${UJ.baf2IslandId}`),
          done: JJ => {
            PJ(JJ), null !== JJ && vJ()
          },
          t: EJ
        }), null === nJ && !fJ && (0, xe.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": UJ.baf2IslandName,
          children: [Gh(WJ.switch) && (0, xe.jsx)(nX.r, {
            disabled: "enabled" !== WJ.switch,
            onClick: rJ,
            children: DJ.switch > 0 ? kJ("islandsSwitchIn", DJ.switch) : EJ(`${Xh}islandsSwitch`)
          }), Gh(WJ.rename) && (0, xe.jsx)(nX.d, {
            disabled: "enabled" !== WJ.rename,
            onClick: () => {
              GJ("rename")
            },
            children: EJ(`${Xh}islandsRename`)
          }), Gh(WJ.people) && (0, xe.jsx)(nX.d, {
            disabled: "enabled" !== WJ.people,
            onClick: () => {
              GJ("people")
            },
            children: EJ("players" === WJ.peopleLabel ? `${Xh}islandsPlayersButton` : `${Xh}islandsInviteButton`)
          }), Gh(WJ.unshare) && (0, xe.jsx)(nX.d, {
            disabled: "enabled" !== WJ.unshare,
            onClick: () => {
              GJ("unshare")
            },
            children: EJ(`${Xh}islandsStopSharing`)
          }), Gh(WJ.dismiss) && (0, xe.jsx)(nX.d, {
            disabled: "enabled" !== WJ.dismiss,
            onClick: () => {
              xJ(Ah(VJ, UJ), "dismiss"), KJ && vJ()
            },
            children: EJ(`${Xh}islandsDismiss`)
          }), Gh(WJ.cn) && (0, xe.jsx)(nX.J, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== WJ.cn,
            onClick: () => {
              GJ("cn")
            },
            children: KJ && DJ.switch > 0 ? kJ("islandsLeaveIn", DJ.switch) : EJ(`${Xh}islandsLeave`)
          }), Gh(WJ.delete) && (0, xe.jsx)(nX.J, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== WJ.delete,
            onClick: () => {
              GJ("delete")
            },
            children: DJ.change > 0 && WJ.deleteWaits ? kJ("islandsDeleteIn", DJ.change) : EJ(`${Xh}islandsDelete`)
          })]
        })]
      })
    }
    const xh = "buildAFactory2Game:";

    function rh(JJ) {
      let {
        invite: cJ,
        actions: ZJ,
        full: UJ,
        maxIslands: eJ,
        waitSeconds: XJ,
        focus: AJ,
        focused: qJ,
        join: jJ,
        decline: YJ,
        t: hJ
      } = JJ;
      const [DJ, sJ] = (0, FJ.useState)(!1), nJ = (0, FJ.useRef)(null);
      zj(DJ, nJ), (0, FJ.useEffect)((() => {
        var JJ;
        AJ && (sJ(!0), null === (JJ = nJ.current) || void 0 === JJ || JJ.focus(), qJ())
      }), [AJ, qJ]);
      const GJ = function(JJ, cJ, ZJ, FJ, UJ) {
          return ZJ ? {
            join: !1,
            note: {
              key: `${jj}islandsJoinTooMany`,
              params: {
                max: String(FJ)
              }
            }
          } : JJ.baf2InvitePlayers >= UJ ? {
            join: !1,
            note: {
              key: `${jj}islandsJoinFull`
            }
          } : {
            join: cJ.switch,
            note: null
          }
        }(cJ, ZJ, UJ, eJ, 10),
        fJ = cJ.baf2InviteIsland,
        xJ = cJ.baf2InvitePlayers,
        rJ = () => {
          var JJ;
          sJ(!1), null === (JJ = nJ.current) || void 0 === JJ || JJ.focus()
        },
        vJ = XJ > 0 && null === GJ.note ? hJ(`${xh}islandsJoinIn`, {
          time: se(hJ, XJ)
        }) : hJ(`${xh}islandsJoin`);
      return (0, xe.jsxs)("li", {
        ref: nJ,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...DJ ? pj(rJ) : {},
        children: [(0, xe.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, xe.jsx)("strong", {
            className: "Baf2IslandName",
            children: fJ
          })
        }), (0, xe.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: Sj(hJ, `${xh}islandsInvitedBy`, {
            owner: cJ.baf2InviteOwner
          })
        }), (0, xe.jsx)(Cj, {
          tier: cJ.baf2InviteTier,
          t: hJ
        }), (0, xe.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, xe.jsx)("span", {
            children: 1 === xJ ? hJ(`${xh}islandsPlayersCountOne`) : hJ(`${xh}islandsPlayersCount`, {
              count: String(xJ)
            })
          })
        }), GJ.note && (0, xe.jsx)(uj, {
          note: GJ.note,
          t: hJ
        }), DJ && (0, xe.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: Sj(hJ, `${xh}islandsJoinConfirm`, {
            island: fJ
          })
        }), !DJ && (0, xe.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": fJ,
          children: [(0, xe.jsx)(nX.r, {
            disabled: !GJ.join,
            onClick: () => {
              var JJ;
              sJ(!0), null === (JJ = nJ.current) || void 0 === JJ || JJ.focus()
            },
            children: vJ
          }), (0, xe.jsx)(nX.d, {
            onClick: YJ,
            children: hJ(`${xh}islandsDecline`)
          })]
        }), DJ && (0, xe.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, xe.jsx)(nX.r, {
            disabled: !GJ.join,
            onClick: jJ,
            children: hJ(`${xh}islandsJoinYes`)
          }), (0, xe.jsx)(nX.d, {
            onClick: rJ,
            children: hJ(`${xh}islandsCancel`)
          })]
        })]
      })
    }

    function vh(JJ) {
      let {
        invites: cJ,
        actions: ZJ,
        full: FJ,
        maxIslands: UJ,
        waitSeconds: eJ,
        focus: XJ,
        focused: AJ,
        cn: qJ,
        declined: jJ,
        t: YJ
      } = JJ;
      const hJ = gX();
      return (0, xe.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, xe.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: YJ(`${xh}islandsInvitesTitle`)
        }), (0, xe.jsx)("ul", {
          className: "Baf2IslandCards",
          children: cJ.map((JJ => {
            const cJ = JJ.baf2InviteId;
            return (0, xe.jsx)(rh, {
              invite: JJ,
              actions: ZJ,
              full: FJ,
              maxIslands: UJ,
              waitSeconds: eJ,
              focus: XJ === cJ,
              focused: AJ,
              join: () => {
                hJ.send(`baf2coopaccept ${cJ}`), qJ()
              },
              decline: () => {
                hJ.send(`baf2coopdecline ${cJ}`), jJ(cJ)
              },
              t: YJ
            }, cJ)
          }))
        })]
      })
    }
    const mh = "buildAFactory2Game:";

    function Qh(JJ) {
      let {
        cards: cJ,
        activeName: ZJ,
        canStart: UJ,
        waitSeconds: eJ,
        cn: XJ,
        t: AJ
      } = JJ;
      const qJ = gX(),
        [jJ, YJ] = (0, FJ.useState)(!1),
        [hJ, DJ] = (0, FJ.useState)(""),
        sJ = (0, FJ.useRef)(null);
      zj(jJ, sJ), (0, FJ.useEffect)((() => {
        var JJ;
        jJ && (null === (JJ = sJ.current) || void 0 === JJ || JJ.focus())
      }), [jJ]);
      const nJ = Gj(cJ),
        GJ = sj(hJ),
        fJ = nj(GJ),
        xJ = () => {
          UJ && !fJ && (qJ.send("" === GJ || GJ === nJ ? aJ : `${aJ} ${GJ}`), XJ())
        },
        rJ = () => {
          var JJ;
          YJ(!1), null === (JJ = sJ.current) || void 0 === JJ || JJ.focus()
        };
      return (0, xe.jsxs)("li", {
        ref: sJ,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...jJ ? pj(rJ) : {},
        children: [(0, xe.jsx)("strong", {
          className: "Baf2IslandName",
          children: AJ(`${mh}islandsNewTitle`)
        }), !jJ && (0, xe.jsx)("p", {
          className: "Baf2IslandStats",
          children: AJ(`${mh}islandsNewNote`)
        }), jJ && (0, xe.jsxs)(xe.Fragment, {
          children: [(0, xe.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: Sj(AJ, `${mh}islandsNewConfirm`, {
              name: ZJ
            })
          }), (0, xe.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [AJ(`${mh}islandsNewNameLabel`), (0, xe.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: hJ,
              placeholder: nJ,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: dj,
              onChange: JJ => {
                DJ(JJ.target.value)
              },
              ...kj(xJ, rJ)
            })]
          }), fJ && (0, xe.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: AJ(`${mh}islandsNameReserved`)
          })]
        }), (0, xe.jsxs)("div", {
          className: GU()("Baf2IslandButtons", {
            Stacked: jJ
          }),
          children: [(0, xe.jsx)(nX.r, {
            disabled: !UJ || jJ && fJ,
            onClick: () => {
              if (!jJ) return DJ(nJ), void YJ(!0);
              xJ()
            },
            children: eJ > 0 ? AJ(`${mh}islandsNewIn`, {
              time: se(AJ, eJ)
            }) : AJ(jJ ? `${mh}islandsNewConfirmButton` : `${mh}islandsNew`)
          }), jJ && (0, xe.jsx)(nX.d, {
            onClick: rJ,
            children: AJ(`${mh}islandsCancel`)
          })]
        })]
      })
    }

    function Eh(JJ) {
      var cJ, ZJ;
      let {
        message: UJ,
        arrivedAtMs: eJ,
        close: XJ,
        cn: AJ,
        openSocial: qJ
      } = JJ;
      const jJ = gX(),
        {
          t: YJ
        } = (0, vU.F)(),
        hJ = Tj(1e3),
        [DJ, sJ] = (0, FJ.useState)(null),
        [nJ, GJ] = (0, FJ.useState)(new Map),
        [fJ, xJ] = (0, FJ.useState)(new Set),
        rJ = UJ.baf2IslandCards,
        vJ = function(JJ, cJ, ZJ, FJ) {
          return (null !== JJ && void 0 !== JJ ? JJ : []).filter((JJ => cJ + JJ.baf2InviteLeftMs > ZJ && !FJ.has(JJ.baf2InviteId)))
        }(UJ.baf2IslandsInvites, eJ, hJ, fJ),
        mJ = vJ.map((JJ => JJ.baf2InviteId)).join(" "),
        QJ = (0, FJ.useRef)(null),
        EJ = Nj(QJ);
      (0, FJ.useEffect)((() => {
        var JJ, cJ;
        null !== (JJ = QJ.current) && void 0 !== JJ && JJ.contains(document.activeElement) || (null === (cJ = QJ.current) || void 0 === cJ || cJ.focus())
      }), [UJ, mJ]), (0, FJ.useEffect)((() => {
        GJ((JJ => function(JJ, cJ, ZJ, FJ) {
          const UJ = new Map;
          for (const eJ of cJ) {
            const cJ = JJ.get(eJ.baf2IslandId);
            cJ && (void 0 !== cJ.untilGone || FJ < cJ.answer) && Ej(cJ, eJ, ZJ) && UJ.set(eJ.baf2IslandId, cJ)
          }
          return UJ.size === JJ.size ? JJ : UJ
        }(JJ, UJ.baf2IslandCards, Date.now(), UJ.baf2IslandsAnswered)))
      }), [UJ]);
      const VJ = Dj(eJ, UJ.baf2IslandsWaitMs, hJ),
        KJ = UJ.baf2IslandsBlocked,
        yJ = vj(KJ, VJ),
        SJ = function(JJ, cJ) {
          const ZJ = vj(JJ, 0);
          return {
            switch: ZJ.switch ? cJ : 0,
            change: ZJ.change ? cJ : 0
          }
        }(KJ, VJ),
        IJ = rJ.length >= UJ.baf2IslandsMax,
        MJ = rJ.length > 0,
        bJ = function(JJ, cJ, ZJ) {
          return JJ + Math.max(0, ZJ - cJ)
        }(UJ.baf2IslandsNowMs, eJ, hJ),
        wJ = null !== (cJ = null === (ZJ = rJ.find((JJ => JJ.baf2IslandActive))) || void 0 === ZJ ? void 0 : ZJ.baf2IslandName) && void 0 !== cJ ? cJ : "",
        WJ = function(JJ) {
          const cJ = JJ.filter(bj).length;
          return cJ <= 1 && cJ < JJ.length
        }(rJ),
        gJ = !0 === UJ.baf2IslandsCoop,
        HJ = function(JJ, cJ) {
          const ZJ = JJ.find((JJ => JJ.baf2IslandActive)),
            FJ = null === ZJ || void 0 === ZJ ? void 0 : ZJ.baf2IslandCoop;
          return ZJ && "member" === (null === FJ || void 0 === FJ ? void 0 : FJ.baf2CoopRole) ? {
            key: `${jj}islandsKeepOwnMember`,
            names: {
              owner: FJ.baf2CoopOwner,
              island: ZJ.baf2IslandName
            }
          } : {
            key: cJ ? `${jj}islandsKeepOwn` : `${jj}islandsKeepOwnSolo`
          }
        }(rJ, gJ),
        [PJ, kJ] = (0, FJ.useState)(null);
      (0, FJ.useEffect)((() => {
        void 0 !== UJ.baf2IslandsFocusInvite && kJ(UJ.baf2IslandsFocusInvite)
      }), [UJ]);
      const pJ = (0, FJ.useCallback)((() => {
          kJ(null)
        }), []),
        dJ = DJ ? rJ.find((JJ => JJ.baf2IslandId === DJ.id)) : void 0,
        zJ = DJ && dJ && "hidden" !== wj(dJ, yJ, WJ, IJ, gJ)[DJ.mode] ? DJ : null;
      return (0, xe.jsx)(sX.c, {
        close: XJ,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, xe.jsxs)("section", {
          ref: QJ,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: EJ ? {
            marginTop: `${EJ.marginTop}px`,
            maxHeight: `${EJ.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, xe.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, xe.jsxs)("div", {
              children: [(0, xe.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: YJ(`${mh}islandsTitle`)
              }), MJ && (0, xe.jsx)("p", {
                children: YJ(`${mh}islandsSubtitle`, {
                  count: String(rJ.length),
                  max: String(UJ.baf2IslandsMax)
                })
              })]
            }), (0, xe.jsx)(nX.j, {
              ariaLabel: YJ(`${mh}islandsClose`),
              onClick: XJ
            })]
          }), (0, xe.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== KJ && (0, xe.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: Sj(YJ, fj(KJ, xj(rJ)), {
                island: wJ
              })
            }), MJ && vJ.length > 0 && (0, xe.jsx)(vh, {
              invites: vJ,
              actions: yJ,
              full: IJ,
              maxIslands: UJ.baf2IslandsMax,
              waitSeconds: SJ.switch,
              focus: PJ,
              focused: pJ,
              cn: AJ,
              declined: JJ => {
                xJ((cJ => new Set(cJ).add(JJ)))
              },
              t: YJ
            }), MJ && (0, xe.jsxs)(xe.Fragment, {
              children: [IJ && (0, xe.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: YJ(`${mh}islandsFull`, {
                  max: String(UJ.baf2IslandsMax)
                })
              }), (0, xe.jsx)("p", {
                className: "Baf2IslandsNote",
                children: Sj(YJ, HJ.key, HJ.names)
              }), (0, xe.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [rJ.map((JJ => {
                  const cJ = JJ.baf2IslandId;
                  return (0, xe.jsx)(fh, {
                    card: JJ,
                    keepOwn: WJ,
                    coopOn: gJ,
                    openSocial: qJ,
                    blocked: KJ,
                    maxIslands: UJ.baf2IslandsMax,
                    serverNowMs: bJ,
                    nowMs: hJ,
                    actions: yJ,
                    full: IJ,
                    waits: SJ,
                    answered: UJ.baf2IslandsAnswered,
                    mode: (null === zJ || void 0 === zJ ? void 0 : zJ.id) === cJ ? zJ.mode : null,
                    setMode: JJ => {
                      sJ(null === JJ ? null : {
                        id: cJ,
                        mode: JJ
                      })
                    },
                    pending: Ej(nJ.get(cJ), JJ, hJ),
                    onSent: (ZJ, FJ) => {
                      GJ((UJ => {
                        const eJ = {
                          atMs: Date.now(),
                          from: JJ.baf2IslandName,
                          answer: ZJ
                        };
                        return new Map(UJ).set(cJ, FJ ? {
                          ...eJ,
                          untilGone: FJ
                        } : eJ)
                      }))
                    },
                    cn: AJ,
                    switchTo: () => {
                      jJ.send(`baf2islandswitch ${cJ}`), AJ()
                    },
                    t: YJ
                  }, cJ)
                })), !IJ && (0, xe.jsx)(Qh, {
                  cards: rJ,
                  activeName: wJ,
                  canStart: yJ.change,
                  waitSeconds: SJ.change,
                  cn: AJ,
                  t: YJ
                })]
              })]
            })]
          })]
        })
      })
    }
    const Vh = {
        all: "buildAFactory2Game:terminalChip_all",
        recent: "buildAFactory2Game:terminalChip_recent",
        Pe: "buildAFactory2Game:terminalChip_ores",
        bars: "buildAFactory2Game:terminalChip_bars",
        parts: "buildAFactory2Game:terminalChip_parts",
        nuclear: "buildAFactory2Game:terminalChip_nuclear",
        farm: "buildAFactory2Game:terminalChip_farm",
        other: "buildAFactory2Game:terminalChip_other"
      },
      Kh = Object.keys(Vh),
      yh = new Set([...Object.keys(Oc), ...[...Sc.Press.recipes, ...Sc["Wire Mill"].recipes].map((JJ => JJ.output))]),
      Sh = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      Ih = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      Mh = / Bar$|Alloy$/,
      bh = /Porkchop|Beef|Mutton|Venison|Steak/,
      wh = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;

    function Wh(JJ) {
      let {
        item: cJ,
        name: ZJ,
        amount: FJ,
        selected: UJ,
        small: eJ,
        onPick: XJ
      } = JJ;
      return (0, xe.jsxs)("button", {
        type: "button",
        className: GU()("Baf2TermTile", {
          On: UJ,
          Small: eJ
        }),
        "aria-label": `${ZJ}: ${FJ}`,
        "aria-pressed": UJ,
        onClick: XJ,
        children: [(0, xe.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, xe.jsx)(QU.d, {
            itemName: cJ,
            amount: 0
          })
        }), (0, xe.jsx)("span", {
          className: "Baf2TermCount",
          children: he(FJ, 1e4)
        }), !eJ && (0, xe.jsx)("span", {
          className: "Baf2TermName",
          children: ZJ
        })]
      })
    }

    function gh(JJ) {
      let {
        store: cJ,
        close: ZJ,
        send: UJ
      } = JJ;
      const {
        t: eJ
      } = (0, vU.F)(), {
        isTouchScreen: XJ
      } = (0, DU.j)(["isTouchScreen"]);
      ! function(JJ) {
        const [cJ, ZJ] = (0, FJ.useState)(JJ.version);
        (0, FJ.useEffect)((() => (ZJ(JJ.version), JJ.subscribe((() => {
          ZJ(JJ.version)
        })))), [JJ])
      }(cJ);
      const [AJ, qJ] = (0, FJ.useState)("all"), [jJ, YJ] = (0, FJ.useState)(!1), [hJ, DJ] = (0, FJ.useState)(""), [sJ, nJ] = (0, FJ.useState)(""), [GJ, fJ] = (0, FJ.useState)(null), [xJ, rJ, vJ] = function() {
        const JJ = (0, FJ.useRef)(null),
          [cJ, ZJ] = (0, FJ.useState)(!1),
          UJ = () => {
            const cJ = JJ.current;
            ZJ(null !== cJ && cJ.scrollLeft + cJ.clientWidth < cJ.scrollWidth - 1)
          };
        return (0, FJ.useEffect)(UJ), (0, FJ.useEffect)((() => {
          const cJ = JJ.current;
          if (!cJ) return;
          const ZJ = new ResizeObserver(UJ);
          return ZJ.observe(cJ), () => {
            ZJ.disconnect()
          }
        }), []), [JJ, cJ, UJ]
      }(), mJ = (0, FJ.useMemo)((() => new Map), [eJ]), QJ = JJ => {
        let cJ = mJ.get(JJ);
        return void 0 === cJ && (cJ = function(JJ, cJ) {
          const ZJ = /^(.+) \((.+)\)$/.exec(JJ);
          return ZJ ? cJ(ZJ[2], ZJ[1]) : JJ
        }(BU(eJ, JJ), ((JJ, cJ) => eJ("buildAFactory2Game:terminalTileKind", {
          kind: JJ,
          base: cJ
        }))), mJ.set(JJ, cJ)), cJ
      }, EJ = cJ.isReadOnly(), VJ = cJ.recent(), KJ = cJ.items(), yJ = sJ.trim().toLowerCase(), SJ = ("recent" === AJ ? VJ : KJ).filter((JJ => {
        const cJ = QJ(JJ);
        return ("all" === AJ || "recent" === AJ || function(JJ) {
          return Ue(JJ) ? "farm" : Sh.test(JJ) ? "nuclear" : Mh.test(JJ) ? "bars" : bh.test(JJ) ? "farm" : Ih.test(JJ) ? "Pe" : yh.has(JJ) ? "parts" : wh.test(JJ) ? "farm" : "other"
        }(JJ) === AJ) && ("" === yJ || cJ.toLowerCase().includes(yJ)) && ("" === hJ || cJ.toUpperCase().startsWith(hJ))
      })), IJ = new Set(KJ.map((JJ => QJ(JJ).charAt(0).toUpperCase()))), MJ = "recent" !== AJ && VJ.length > 0, bJ = function(JJ, cJ) {
        return null !== JJ && cJ.includes(JJ) ? JJ : null
      }(GJ, MJ ? [...SJ, ...VJ] : SJ), wJ = null === bJ ? 0 : cJ.amount(bJ), WJ = JJ => {
        fJ(bJ === JJ ? null : JJ)
      }, gJ = JJ => {
        null !== bJ && wJ > 0 && UJ(cJ.take(JJ, bJ))
      }, HJ = "" !== hJ ? eJ("buildAFactory2Game:terminalEmptyLetter", {
        letter: hJ
      }) : "" !== yJ ? eJ("buildAFactory2Game:terminalEmptySearch", {
        query: sJ
      }) : eJ("buildAFactory2Game:terminalEmpty");
      return (0, xe.jsx)(sX.c, {
        close: ZJ,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, xe.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, xe.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, xe.jsxs)("div", {
              children: [(0, xe.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: eJ(cJ.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, xe.jsx)("p", {
                children: eJ("buildAFactory2Game:terminalSubtitle", {
                  count: String(cJ.siloCount())
                })
              })]
            }), (0, xe.jsx)(nX.j, {
              onClick: ZJ
            })]
          }), (0, xe.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, xe.jsxs)("div", {
              className: "Baf2TermTools",
              children: [(0, xe.jsx)("div", {
                ref: xJ,
                className: GU()("Baf2TermChips", {
                  MoreRight: rJ
                }),
                onScroll: vJ,
                children: jJ ? (0, xe.jsxs)(xe.Fragment, {
                  children: [(0, xe.jsx)("button", {
                    type: "button",
                    "aria-label": eJ("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      YJ(!1), DJ("")
                    },
                    children: "\u2190"
                  }), [...IJ].sort().map((JJ => (0, xe.jsx)("button", {
                    type: "button",
                    className: GU()({
                      On: hJ === JJ
                    }),
                    onClick: () => {
                      DJ(hJ === JJ ? "" : JJ)
                    },
                    children: JJ
                  }, JJ)))]
                }) : (0, xe.jsxs)(xe.Fragment, {
                  children: [(0, xe.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      YJ(!0)
                    },
                    children: eJ("buildAFactory2Game:terminalLetters")
                  }), Kh.map((JJ => (0, xe.jsx)("button", {
                    type: "button",
                    className: GU()({
                      On: AJ === JJ
                    }),
                    onClick: () => {
                      qJ(JJ)
                    },
                    children: eJ(Vh[JJ])
                  }, JJ)))]
                })
              }), !XJ && (0, xe.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: sJ,
                placeholder: eJ("buildAFactory2Game:terminalSearch"),
                "aria-label": eJ("buildAFactory2Game:terminalSearch"),
                onChange: JJ => {
                  nJ(JJ.target.value)
                },
                onKeyDown: JJ => {
                  JJ.stopPropagation()
                }
              }), (0, xe.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": eJ("buildAFactory2Game:terminalResort"),
                title: eJ("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  cJ.resort()
                },
                children: "\u21c5"
              })]
            }), MJ && (0, xe.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, xe.jsx)("span", {
                children: eJ(Vh.recent)
              }), VJ.map((JJ => (0, xe.jsx)(Wh, {
                item: JJ,
                name: QJ(JJ),
                amount: cJ.amount(JJ),
                selected: bJ === JJ,
                small: !0,
                onPick: () => {
                  WJ(JJ)
                }
              }, JJ)))]
            }), (0, xe.jsx)("div", {
              className: "Baf2TermTiles",
              children: SJ.length > 0 ? SJ.map((JJ => (0, xe.jsx)(Wh, {
                item: JJ,
                name: QJ(JJ),
                amount: cJ.amount(JJ),
                selected: bJ === JJ,
                onPick: () => {
                  WJ(JJ)
                }
              }, JJ))) : (0, xe.jsx)("p", {
                className: "Baf2TermEmpty",
                children: HJ
              })
            }), (0, xe.jsxs)("div", {
              className: "Baf2TermActions",
              children: [(0, xe.jsx)("span", {
                className: "Baf2TermPicked",
                children: EJ ? (0, xe.jsxs)(xe.Fragment, {
                  children: [null !== bJ && wJ > 0 ? QJ(bJ) : eJ("buildAFactory2Game:terminalVisiting"), (0, xe.jsx)("small", {
                    children: eJ("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== bJ && wJ > 0 ? (0, xe.jsxs)(xe.Fragment, {
                  children: [QJ(bJ), (0, xe.jsx)("small", {
                    children: eJ("buildAFactory2Game:terminalStored", {
                      amount: wJ.toLocaleString()
                    })
                  })]
                }) : eJ("buildAFactory2Game:terminalPick")
              }), !EJ && (0, xe.jsxs)(xe.Fragment, {
                children: [(0, xe.jsx)(nX.d, {
                  className: "Baf2TermTake",
                  disabled: 0 === wJ,
                  onClick: () => {
                    gJ("one")
                  },
                  children: eJ("buildAFactory2Game:terminalTakeOne")
                }), (0, xe.jsx)(nX.d, {
                  className: "Baf2TermTake",
                  disabled: 0 === wJ,
                  onClick: () => {
                    gJ("stack")
                  },
                  children: eJ("buildAFactory2Game:terminalTakeStack", {
                    amount: String(99)
                  })
                }), (0, xe.jsx)(nX.m, {
                  className: "Baf2TermTake",
                  disabled: 0 === wJ,
                  onClick: () => {
                    gJ("fill")
                  },
                  children: eJ("buildAFactory2Game:terminalFill")
                })]
              })]
            })]
          })]
        })
      })
    }

    function Hh(JJ) {
      let {
        kind: cJ,
        icon: ZJ,
        label: FJ,
        number: UJ,
        preview: eJ,
        note: XJ,
        tone: AJ = null,
        share: qJ,
        onExplain: jJ
      } = JJ;
      return (0, xe.jsxs)("button", {
        type: "button",
        className: GU()("NxLane", cJ, {
          Warn: "warn" === AJ,
          Danger: "danger" === AJ
        }),
        onClick: jJ,
        children: [(0, xe.jsxs)("span", {
          className: "NxLaneHead",
          children: [ZJ, (0, xe.jsx)("span", {
            className: "NxLaneLabel",
            children: FJ
          })]
        }), (0, xe.jsxs)("span", {
          className: "NxLaneNum",
          children: [UJ, eJ && (0, xe.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", eJ]
          })]
        }), (0, xe.jsx)("span", {
          className: "NxLaneNote",
          children: XJ
        }), void 0 !== qJ && (0, xe.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, qJ)) + "%"
          }
        })]
      })
    }

    function Ph(JJ) {
      let {
        kind: cJ,
        step: ZJ,
        short: FJ,
        planned: UJ
      } = JJ;
      return (0, xe.jsx)("i", {
        className: GU()("NxPipe", cJ, `Step${ZJ}`, {
          Short: FJ,
          Planned: UJ
        }),
        "aria-hidden": "true"
      })
    }

    function kh(JJ) {
      let {
        max: cJ,
        bands: ZJ,
        ticks: FJ,
        now: UJ,
        settle: eJ,
        settleTone: XJ,
        onExplain: AJ
      } = JJ;
      const qJ = JJ => Math.max(0, Math.min(cJ, JJ)) / cJ * 100 + "%";
      let jJ = 0;
      return (0, xe.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: AJ,
        children: [(0, xe.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [ZJ.map((JJ => {
            const cJ = {
              bottom: qJ(jJ),
              height: `calc(${qJ(JJ.upTo)} - ${qJ(jJ)})`
            };
            return jJ = JJ.upTo, (0, xe.jsx)("i", {
              className: GU()("NxGaugeBand", JJ.kind),
              style: cJ
            }, JJ.kind)
          })), null !== UJ && (0, xe.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: qJ(UJ)
            }
          }), void 0 !== eJ && null !== eJ && (0, xe.jsx)("i", {
            className: GU()("NxGaugeSettle", {
              Bad: "bad" === XJ
            }),
            style: {
              bottom: qJ(eJ)
            }
          })]
        }), (0, xe.jsx)("span", {
          className: "NxGaugeTicks",
          children: FJ.map((JJ => (0, xe.jsx)("small", {
            style: {
              bottom: qJ(JJ)
            },
            children: JJ
          }, JJ)))
        })]
      })
    }

    function ph(JJ) {
      const [cJ, ZJ] = (0, FJ.useState)(null), [UJ, eJ] = (0, FJ.useState)((() => {
        try {
          return null === window.localStorage.getItem(JJ)
        } catch {
          return !1
        }
      })), XJ = (0, FJ.useRef)(null);
      (0, FJ.useEffect)((() => () => {
        null !== XJ.current && clearTimeout(XJ.current)
      }), []);
      const AJ = (0, FJ.useCallback)((cJ => {
          ZJ(cJ), eJ(!1);
          try {
            window.localStorage.setItem(JJ, "1")
          } catch {}
          null !== XJ.current && clearTimeout(XJ.current), XJ.current = setTimeout((() => {
            XJ.current = null, ZJ(null)
          }), 5e3)
        }), [JJ]),
        qJ = (0, FJ.useCallback)(((cJ, ZJ) => {
          const FJ = `${JJ}:${cJ}`;
          try {
            if (null !== window.localStorage.getItem(FJ)) return;
            window.localStorage.setItem(FJ, "1")
          } catch {
            return
          }
          AJ(ZJ)
        }), [AJ, JJ]);
      return {
        explained: cJ,
        hinting: UJ,
        explain: AJ,
        explainOnce: qJ
      }
    }

    function dh(JJ) {
      let {
        text: cJ,
        tone: ZJ,
        explained: FJ
      } = JJ;
      return (0, xe.jsxs)("p", {
        className: GU()("NxStatus", null === FJ ? ZJ : "Explain"),
        "aria-live": "polite",
        children: [null !== FJ && (0, xe.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== FJ && void 0 !== FJ ? FJ : cJ]
      })
    }
    const zh = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function Nh(JJ, cJ) {
      const ZJ = Number(JJ[cJ]);
      return 1 === ZJ || 2 === ZJ || 3 === ZJ ? ZJ : 0
    }

    function Oh(JJ) {
      return !!nq("reactor", JJ.baf2RxNeed) || void 0 !== JJ.baf2RxLayout && JJ.baf2RxNeed.some((JJ => {
        let [cJ, ZJ] = JJ;
        return ZJ > 0 && zh.includes(cJ)
      }))
    }
    const Th = "buildAFactory2Game:";

    function Ch(JJ) {
      let {
        status: cJ,
        store: ZJ,
        busy: FJ
      } = JJ;
      const {
        t: UJ
      } = (0, vU.F)();
      return function(JJ) {
        return 0 !== (JJ.baf2RxFlags & qc) && (!JJ.baf2RxFormed || void 0 !== JJ.baf2RxLayout)
      }(cJ) ? (0, xe.jsx)(nX.m, {
        disabled: !Oh(cJ) || FJ,
        onClick: () => {
          ZJ.tap("fill", (() => {
            ZJ.send("fill")
          }))
        },
        children: UJ(void 0 !== cJ.baf2RxLayout ? `${Th}rxFillLayout` : `${Th}rxFill`)
      }) : null
    }

    function uh(JJ) {
      let {
        status: cJ,
        store: ZJ,
        readOnly: UJ,
        bare: eJ = !1
      } = JJ;
      const {
        t: XJ
      } = (0, vU.F)(), AJ = cJ.baf2RxLayout, [qJ, jJ, YJ] = cJ.baf2RxDims, hJ = (0, FJ.useMemo)((() => {
        if (void 0 === AJ) return 0;
        const JJ = Uint8Array.from(AJ, ((JJ, cJ) => Nh(AJ, cJ)));
        return iA([qJ - 2, jJ - 2, YJ - 2], JJ).max
      }), [AJ, qJ, jJ, YJ]);
      return void 0 === AJ ? null : (0, xe.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!eJ && (0, xe.jsx)("span", {
          className: "Baf2RxHint",
          children: XJ(`${Th}rxLayoutLine`, {
            amount: Qq(hJ)
          })
        }), !UJ && (0, xe.jsx)(nX.d, {
          onClick: () => {
            ZJ.send("layout", 0)
          },
          children: XJ(`${Th}rxLayoutHide`)
        })]
      })
    }
    const ih = "buildAFactory2Game:",
      Rh = {
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

    function Lh(JJ) {
      let {
        id: cJ,
        title: ZJ,
        body: FJ,
        bodyParams: UJ,
        yes: eJ,
        cancel: XJ,
        confirm: AJ
      } = JJ;
      const {
        t: qJ
      } = (0, vU.F)();
      return (0, xe.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": cJ,
        children: [(0, xe.jsx)("h3", {
          id: cJ,
          children: qJ(ZJ)
        }), (0, xe.jsx)("p", {
          children: qJ(FJ, UJ)
        }), (0, xe.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, xe.jsx)(nX.g, {
            onClick: XJ,
            children: qJ(`${ih}rxCancel`)
          }), (0, xe.jsx)(nX.I, {
            onClick: AJ,
            children: qJ(eJ)
          })]
        })]
      })
    }

    function ah(JJ) {
      const [cJ, ZJ] = (0, FJ.useState)((() => JJ.get()));
      return (0, FJ.useEffect)((() => (ZJ(JJ.get()), JJ.subscribe((() => {
        ZJ(JJ.get())
      })))), [JJ]), cJ
    }

    function Bh(JJ) {
      let {
        kind: cJ,
        cap: ZJ,
        busy: UJ = !1,
        whyNot: eJ = null,
        apart: XJ
      } = JJ;
      const {
        t: AJ
      } = (0, vU.F)(), [qJ, jJ] = (0, FJ.useState)(!1), YJ = null !== eJ, hJ = (0, FJ.useRef)(null);
      if ((0, FJ.useEffect)((() => {
          YJ && jJ(!1)
        }), [YJ]), (0, FJ.useLayoutEffect)((() => {
          var JJ;
          const cJ = null === (JJ = hJ.current) || void 0 === JJ ? void 0 : JJ.firstElementChild;
          YJ ? null === cJ || void 0 === cJ || cJ.setAttribute("aria-disabled", "true") : UJ || null === cJ || void 0 === cJ || cJ.removeAttribute("aria-disabled")
        })), !qJ || YJ) return (0, xe.jsx)("span", {
        ref: hJ,
        className: "Baf2RxApartWrap",
        children: (0, xe.jsx)(nX.g, {
          disabled: UJ,
          className: GU()({
            Baf2RxNotYet: YJ
          }),
          onClick: () => {
            eJ ? eJ() : jJ(!0)
          },
          children: AJ(`${ih}rxApart`)
        })
      });
      const DJ = "battery" === cJ,
        sJ = void 0 === ZJ ? `${ih}batApartConfirmBodyPlan` : `${ih}batApartConfirmBody`;
      return (0, xe.jsx)(Lh, {
        id: `baf2ApartTitle_${cJ}`,
        title: DJ ? `${ih}batApartConfirmTitle` : `${ih}rxApartConfirmTitle`,
        body: DJ ? sJ : `${ih}rxApartConfirmBody`,
        bodyParams: void 0 === ZJ ? void 0 : {
          cap: ZJ
        },
        yes: `${ih}rxApart`,
        cancel: () => {
          jJ(!1)
        },
        confirm: () => {
          jJ(!1), XJ()
        }
      })
    }

    function th(JJ) {
      let {
        mood: cJ,
        big: ZJ
      } = JJ;
      const FJ = Rh[cJ],
        UJ = [];
      return FJ.rows.forEach(((JJ, cJ) => {
        for (let ZJ = 0; ZJ < JJ.length; ZJ++) "." !== JJ[ZJ] && UJ.push((0, xe.jsx)("rect", {
          x: ZJ + 1,
          y: cJ + 1,
          width: 1,
          height: 1,
          fill: "w" === JJ[ZJ] ? "#8fd3ff" : FJ.colour
        }, `${ZJ},${cJ}`))
      })), (0, xe.jsxs)("svg", {
        className: GU()("Baf2RxFace", {
          Big: ZJ,
          Alarm: "alarm" === cJ
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, xe.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, xe.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), UJ]
      })
    }

    function oh(JJ) {
      return Ye(JJ, "+").replace("+", "")
    }

    function lh(JJ) {
      let {
        kind: cJ,
        dims: ZJ,
        cap: FJ,
        disabled: UJ,
        compact: eJ,
        resize: XJ
      } = JJ;
      const {
        t: AJ
      } = (0, vU.F)(), {
        min: qJ,
        max: jJ
      } = WZ(cJ), YJ = Math.min(FJ, jJ), hJ = [`${ih}rxWide`, `${ih}rxTall`, `${ih}rxDeep`], DJ = {
        w: String(ZJ[0]),
        h: String(ZJ[1]),
        d: String(ZJ[2]),
        blocks: String(mq(cJ, ZJ))
      };
      return (0, xe.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, xe.jsx)("div", {
          className: "Baf2RxSteppers",
          children: ZJ.map(((JJ, cJ) => {
            const eJ = FJ => {
                const UJ = [ZJ[0], ZJ[1], ZJ[2]];
                UJ[cJ] = JJ + FJ, XJ(UJ)
              },
              DJ = JJ >= YJ;
            return (0, xe.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, xe.jsx)("button", {
                type: "button",
                "aria-label": AJ(`${ih}rxSmaller`),
                disabled: UJ || JJ <= qJ,
                onClick: () => {
                  eJ(-1)
                },
                children: "\u2212"
              }), (0, xe.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [JJ, (0, xe.jsx)("small", {
                  children: AJ(hJ[cJ])
                })]
              }), (0, xe.jsx)("button", {
                type: "button",
                "aria-label": AJ(`${ih}rxBigger`),
                disabled: UJ || DJ,
                onClick: () => {
                  eJ(1)
                },
                children: DJ && FJ < jJ ? "\ud83d\udd12" : "+"
              })]
            }, hJ[cJ])
          }))
        }), !eJ && (0, xe.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === cJ ? AJ(`${ih}rxSizeLine`, {
            ...DJ,
            water: String(vq(ZJ))
          }) : AJ(`${ih}batSizeLine`, DJ)
        })]
      })
    }

    function JD(JJ) {
      let {
        on: cJ,
        label: ZJ,
        disabled: FJ,
        locked: UJ,
        pending: eJ,
        toggle: XJ
      } = JJ;
      return (0, xe.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": cJ,
        disabled: FJ,
        "aria-disabled": UJ || void 0,
        className: GU()("Baf2RxSwitch", {
          On: cJ,
          Locked: UJ,
          Pending: eJ
        }),
        onClick: XJ,
        children: [(0, xe.jsx)("span", {
          className: "Baf2RxKnob"
        }), ZJ]
      })
    }
    const cD = "buildAFactory2Game:",
      ZD = .95;

    function FD(JJ, cJ) {
      return 0 !== (JJ.baf2RxFlags & cJ)
    }

    function UD(JJ) {
      return "cryo" === JJ ? oJ.m : oJ.o
    }

    function eD(JJ) {
      var cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ;
      return JJ.baf2RxCryo ? {
        LD: "cryo",
        usePerS: null !== (UJ = JJ.baf2RxCryoUse) && void 0 !== UJ ? UJ : 0,
        needPerS: null !== (eJ = JJ.baf2RxCryoNeed) && void 0 !== eJ ? eJ : 0,
        inPerS: null !== (XJ = JJ.baf2RxCryoIn) && void 0 !== XJ ? XJ : 0,
        stored: null !== (AJ = JJ.baf2RxCryoStored) && void 0 !== AJ ? AJ : 0,
        makersShort: null !== (qJ = JJ.baf2RxMixersShort) && void 0 !== qJ ? qJ : 0,
        waterBeside: null !== (jJ = JJ.baf2RxWaterUse) && void 0 !== jJ ? jJ : 0,
        pct: JJ.baf2RxWater
      } : {
        LD: "water",
        usePerS: null !== (cJ = JJ.baf2RxWaterUse) && void 0 !== cJ ? cJ : 0,
        needPerS: null !== (ZJ = JJ.baf2RxWaterNeed) && void 0 !== ZJ ? ZJ : 0,
        inPerS: JJ.baf2RxWaterIn,
        stored: JJ.baf2RxWaterStored,
        makersShort: null !== (FJ = JJ.baf2RxCondensersShort) && void 0 !== FJ ? FJ : 0,
        waterBeside: 0,
        pct: JJ.baf2RxWater
      }
    }

    function XD(JJ) {
      const cJ = "running" === JJ.baf2RxState || "idle" === JJ.baf2RxState;
      return JJ.baf2RxFormed && JJ.baf2RxTarget !== JJ.baf2RxThrottle && cJ ? AD(JJ, JJ.baf2RxTarget) : null
    }

    function AD(JJ, cJ) {
      const [ZJ, FJ, UJ, , , , eJ, , XJ] = JJ.baf2RxStats, AJ = FD(JJ, Xc), qJ = eD(JJ), jJ = qJ.pct / 100, {
        gen: YJ,
        out: hJ,
        load: DJ
      } = function(JJ, cJ, ZJ, FJ) {
        const UJ = ZJ ? dA : 1,
          eJ = Math.min(JJ.fuelHeat * UJ * Math.max(0, Math.min(1, cJ)), JJ.size * UJ);
        return {
          gen: eJ,
          out: eJ,
          load: Fq(eJ, JJ.cooling, FJ)
        }
      }({
        fuelHeat: ZJ,
        cooling: FJ,
        size: UJ
      }, cJ / 100, AJ, jJ), sJ = eq(eJ || uA(...JJ.baf2RxDims)), nJ = JJ.baf2RxHeat, GJ = Math.abs(DJ - nJ), fJ = function(JJ, cJ, ZJ, FJ) {
        let UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : oJ.o;
        const eJ = ZJ ? dA : 1,
          XJ = Math.min(JJ.fuelHeat * eJ * cJ / 100, JJ.size * eJ),
          AJ = XJ,
          qJ = JJ.fuelHeat * eJ,
          jJ = JJ.cooling * Zq(FJ.pct / 100),
          YJ = qJ > 0 && jJ < JJ.size * eJ ? Math.floor(100 * jJ / qJ) : 100,
          hJ = XJ * UJ - FJ.inPerS;
        return {
          out: AJ,
          hotAbove: YJ >= 100 ? null : Math.max(0, YJ),
          waterSecs: FJ.pct >= 100 && hJ > 1e-6 ? Math.max(0, FJ.stored) / hJ : null
        }
      }({
        fuelHeat: ZJ,
        cooling: FJ,
        size: UJ
      }, cJ, AJ, {
        pct: qJ.pct,
        inPerS: qJ.inPerS,
        stored: qJ.stored
      }, UD(qJ.LD));
      return {
        pct: cJ,
        out: hJ,
        coolPerS: YJ * UD(qJ.LD),
        pelletsPerMin: XJ > 0 ? hJ / XJ * 60 : 0,
        settle: DJ,
        settleS: GJ > 2 ? sJ * Math.log(GJ / 2) : 0,
        overheatS: DJ > 100 && nJ < 100 ? sJ * Math.log((DJ - nJ) / (DJ - 100)) : null,
        hotAbove: fJ.hotAbove,
        coolantSecs: fJ.waterSecs
      }
    }

    function qD(JJ) {
      return JJ.baf2RxThrottle <= 0 && "running" !== JJ.baf2RxState ? 0 : AD(JJ, JJ.baf2RxTarget).pelletsPerMin / 60
    }

    function jD(JJ, cJ) {
      if (JJ <= 0 || cJ <= 0) return 0;
      const ZJ = JJ / cJ;
      return ZJ < .25 ? 1 : ZJ < .5 ? 2 : ZJ < .8 ? 3 : 4
    }

    function YD(JJ, cJ) {
      const ZJ = {};
      for (const [FJ, UJ] of Object.entries(cJ.params)) ZJ[FJ] = "time" === FJ ? se(JJ, UJ) : "amount" === FJ ? Qq(UJ) : String(Math.round(UJ));
      return JJ(cJ.key, ZJ)
    }

    function hD(JJ, cJ) {
      return {
        key: `${cD}${JJ}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: cJ
      }
    }

    function DD(JJ) {
      var cJ;
      const ZJ = FD(JJ, Xc),
        FJ = "running" === JJ.baf2RxState,
        UJ = jq(JJ),
        eJ = JJ.baf2RxHeat;
      var XJ;
      if (FJ && eJ > kA) return {
        key: null !== (XJ = UJ.fix) && void 0 !== XJ ? XJ : `${cD}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const AJ = FJ ? AD(JJ, JJ.baf2RxTarget).coolantSecs : null,
        qJ = "cryo" === eD(JJ).LD;
      if (null !== AJ && AJ >= 1 && AJ <= 30) return hD(qJ ? "rxWarnCryo" : "rxWarnWater", "bad");
      const jJ = TA(uA(...JJ.baf2RxDims)).waste,
        YJ = FJ ? Gq(JJ, jJ, qD(JJ)).fullInS : null;
      if (null !== YJ && YJ <= 120 && JJ.baf2RxWaste >= .5 * jJ) return hD("rxWarnWaste", "warn");
      if (null !== AJ && AJ >= 1) return hD(qJ ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: AJ
      });
      const hJ = "noWater" === JJ.baf2RxState && eJ > kA;
      if (JJ.baf2RxDamage >= 1 && !hJ) return hD("rxDamagedHeals", "warn", {
        pct: JJ.baf2RxDamage
      });
      if (JJ.baf2RxCryoCut) return hD("rxFix_cryoCut", "warn");
      const DJ = eD(JJ);
      if ("noWater" === JJ.baf2RxState && "cryo" === DJ.LD) return hD("noWater" === JJ.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const sJ = UJ.fix === `${cD}rxFix_scramCool` || "idle" === JJ.baf2RxState && JJ.baf2RxTarget <= 0;
      if (sJ && JJ.baf2RxFuel <= 0) return hD("rxFix_noFuel", "warn");
      if (sJ && JJ.baf2RxWaterIn <= 0 && (null !== (cJ = JJ.baf2RxCryoIn) && void 0 !== cJ ? cJ : 0) <= 0) return hD("rxFix_noWater", "warn");
      const nJ = UJ.fix === `${cD}rxFix_scramCool` ? hq(JJ) : null;
      if (null !== nJ) return {
        key: nJ.key,
        params: {
          amount: nJ.amount
        },
        tone: "info"
      };
      if ("running" !== JJ.baf2RxState && "idle" !== JJ.baf2RxState && null !== UJ.fix) return {
        key: UJ.fix,
        params: {},
        tone: "scram" === JJ.baf2RxState ? "info" : hJ ? "bad" : "warn"
      };
      var GJ;
      if ("idle" === JJ.baf2RxState && JJ.baf2RxTarget <= 0) return {
        key: null !== (GJ = UJ.fix) && void 0 !== GJ ? GJ : `${cD}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const fJ = JJ.baf2RxCryoStarved;
      if ("cryo" === DJ.LD && fJ && DJ.needPerS > 0 && DJ.usePerS < ZD * DJ.needPerS) return hD("noWater" === fJ ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const xJ = "cryo" === DJ.LD,
        rJ = DJ.needPerS > 0 && DJ.usePerS < ZD * DJ.needPerS;
      if (xJ ? rJ || DJ.makersShort > 0 && DJ.pct < 100 : DJ.pct < 100) {
        const cJ = xJ && rJ ? Math.floor(100 * DJ.usePerS / DJ.needPerS) : Math.min(100, DJ.pct);
        if (DJ.makersShort > 0) {
          return hD(`${xJ?"rxCryoShortLine":"rxWaterShortLine"}${1===DJ.makersShort?"One":""}${!xJ&&JJ.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: cJ,
            count: DJ.makersShort
          })
        }
        return hD(xJ ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: cJ
        })
      }
      const vJ = function(JJ) {
        const [cJ, ZJ, FJ] = JJ.baf2RxStats, UJ = eD(JJ), eJ = Uq({
          fuelHeat: cJ,
          cooling: ZJ,
          size: FJ
        }, "cryo" === UJ.LD ? oJ.e : 1, !0);
        return Math.max(0, eJ * UD(UJ.LD) - UJ.inPerS)
      }(JJ);
      if (ZJ && vJ > 0) return hD("cryo" === DJ.LD ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(vJ)
      });
      if (eJ >= Jq) return hD("rxHotLine", "warn");
      const mJ = AD(JJ, JJ.baf2RxTarget);
      var QJ;
      if (null !== mJ.overheatS) return hD("rxWillOverheat", "bad", {
        pct: JJ.baf2RxTarget,
        time: mJ.overheatS,
        safe: null !== (QJ = mJ.hotAbove) && void 0 !== QJ ? QJ : 100
      });
      if (Math.abs(mJ.settle - eJ) >= 3) return hD("rxSettling", "info", {
        pct: JJ.baf2RxTarget,
        heat: Math.round(mJ.settle),
        time: mJ.settleS
      });
      const EJ = hq(JJ);
      if (null !== EJ) return {
        key: EJ.key,
        params: {
          amount: EJ.amount
        },
        tone: "info"
      };
      const VJ = function(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== cJ && ("running" !== cJ || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === JJ.rods ? `${Xq}rxLimitNoRods` : `${Xq}rxLimit_${lA(JJ)}`
      }({
        rods: JJ.baf2RxStats[3],
        ...Yq(JJ)
      }, JJ.baf2RxState, JJ.baf2RxOut >= ZD * JJ.baf2RxMaxNow, !1);
      if (VJ === `${cD}rxLimit_size`) {
        const [cJ, , ZJ, FJ] = JJ.baf2RxStats, UJ = FJ > 0 && cJ > 0 ? Math.ceil(ZJ / (cJ / FJ) - 1e-9) : FJ, eJ = JJ.baf2RxDims.every((JJ => JJ >= WZ("reactor").max));
        if (UJ < FJ) return hD(eJ ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: UJ,
          have: FJ
        });
        if (eJ) return hD("rxLimit_sizeMax", "info")
      }
      return null !== VJ ? {
        key: VJ,
        params: {},
        tone: "info"
      } : hD("rxSteady", "ok", {
        pct: JJ.baf2RxTarget
      })
    }

    function sD(JJ) {
      var cJ;
      if (JJ.melted) return hD("rxMeltedBody", "bad");
      if (-1 === JJ.bad) return hD("rxFix_noRoom", "warn");
      if (JJ.bad > 0) return hD(1 === JJ.bad ? "rxBadOne" : "rxBad", "warn", {
        count: JJ.bad
      });
      if (JJ.left > 0) {
        const cJ = 1 === JJ.left ? "One" : "";
        return hD(JJ.canFill ? `rxPlanLeft${cJ}` : `rxPlanLeftNoFill${cJ}`, "info", {
          count: JJ.left
        })
      }
      if (0 === JJ.rods) return hD("rxLimitNoRods", "warn");
      const ZJ = null !== (cJ = JJ.idle) && void 0 !== cJ ? cJ : 0;
      return ZJ > 0 ? hD(1 === ZJ ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: ZJ
      }) : hD("rxPlanReady", "ok")
    }

    function nD(JJ) {
      return Math.floor(Math.max(0, JJ[1] - 1) / 2)
    }

    function GD(JJ) {
      if (JJ >= LA && JJ < aA) {
        const cJ = JJ - LA;
        return {
          key: 0 === cJ ? `${cD}rxWhy_rodAlone` : 1 === cJ ? `${cD}rxWhy_rodOne` : `${cD}rxWhy_rod`,
          params: {
            count: String(cJ),
            heat: String(IA * (1 + MA * cJ))
          }
        }
      }
      return JJ === aA ? {
        key: `${cD}rxWhy_channel`,
        params: {
          amount: String(wA)
        }
      } : JJ === BA ? {
        key: `${cD}rxWhy_deadChannel`,
        params: {}
      } : JJ === tA ? {
        key: `${cD}rxWhy_graphite`,
        params: {}
      } : {
        key: `${cD}rxWhy_core`,
        params: {}
      }
    }
    const fD = "buildAFactory2Game:";

    function xD(JJ, cJ) {
      return 0 !== (JJ.baf2RxFlags & cJ)
    }

    function rD(JJ) {
      let {
        status: cJ,
        pending: ZJ,
        store: FJ,
        explain: UJ
      } = JJ;
      const {
        t: eJ
      } = (0, vU.F)(), XJ = xD(cJ, ec), AJ = cJ.baf2RxTarget, qJ = cJ.baf2RxThrottle, jJ = function(JJ) {
        return {
          press: () => {
            JJ.throttlePress()
          },
          drag: cJ => {
            JJ.throttleDrag(cJ)
          },
          release: () => {
            JJ.throttleRelease()
          }
        }
      }(FJ), YJ = null === (hJ = AD(cJ, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, hJ - 10),
        red: hJ
      };
      var hJ;
      return (0, xe.jsxs)("div", {
        className: GU()("Baf2RxThrottle", {
          Off: XJ
        }),
        onClick: () => {
          XJ && UJ(`${fD}rxWhy_startFirst`)
        },
        children: [(0, xe.jsx)("span", {
          className: "HideNarrow",
          children: eJ(`${fD}rxThrottle`)
        }), (0, xe.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, xe.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: AJ,
            disabled: XJ,
            style: XJ ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": eJ(`${fD}rxThrottle`),
            onPointerDown: () => {
              jJ.press();
              const JJ = () => {
                window.removeEventListener("pointerup", JJ), window.removeEventListener("pointercancel", JJ), jJ.release()
              };
              window.addEventListener("pointerup", JJ), window.addEventListener("pointercancel", JJ)
            },
            onKeyUp: jJ.release,
            onChange: JJ => {
              jJ.drag(Number(JJ.target.value))
            }
          }), (0, xe.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${YJ.amber}%, #ffb020 ${YJ.amber}% ${YJ.red}%, #ff3b30 ${YJ.red}%)`
            },
            "aria-hidden": "true"
          }), (0, xe.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${qJ}% + ${8*(1-qJ/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, xe.jsxs)("b", {
          children: [`${AJ}%`, (0, xe.jsx)("i", {
            className: GU()("Baf2RxPendingDot", {
              On: ZJ
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function vD(JJ) {
      let {
        status: cJ
      } = JJ;
      const {
        t: ZJ
      } = (0, vU.F)(), FJ = AD(cJ, cJ.baf2RxTarget), UJ = eD(cJ).LD, eJ = ZJ("cryo" === UJ ? `${fD}rxRateCryo` : `${fD}rxRateWater`, {
        rate: oh(FJ.coolPerS)
      }), XJ = ZJ(`${fD}rxChain`, {
        pct: String(cJ.baf2RxTarget),
        out: Qq(FJ.out),
        heat: String(Math.round(FJ.settle)),
        coolant: eJ
      }), AJ = null !== FJ.coolantSecs ? FJ.coolantSecs >= 1 ? ZJ("cryo" === UJ ? `${fD}rxThrottleCryoOut` : `${fD}rxThrottleWaterOut`, {
        time: se(ZJ, FJ.coolantSecs)
      }) : ZJ("cryo" === UJ ? `${fD}rxThrottleCryoDry` : `${fD}rxThrottleWaterDry`) : null;
      return (0, xe.jsxs)("p", {
        className: "Baf2RxChain",
        children: [XJ, null !== AJ ? (0, xe.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", AJ]
        }) : (0, xe.jsxs)("span", {
          children: [" \xb7 ", ZJ(`${fD}rxChainPellets`, {
            amount: Eq(FJ.pelletsPerMin)
          })]
        })]
      })
    }

    function mD(JJ) {
      let {
        view: cJ,
        store: ZJ,
        explain: UJ,
        explainOnce: eJ
      } = JJ;
      const {
        t: XJ
      } = (0, vU.F)(), {
        status: AJ
      } = cJ, [qJ, jJ] = (0, FJ.useState)(!1), YJ = xD(AJ, ec), DJ = xD(AJ, Xc), sJ = !xD(AJ, jc), nJ = AJ.baf2RxHeat > 100;
      return (0, xe.jsxs)(xe.Fragment, {
        children: [(0, xe.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, xe.jsx)(rD, {
            status: AJ,
            pending: cJ.throttlePending,
            store: ZJ,
            explain: UJ
          }), (0, xe.jsx)(JD, {
            on: DJ,
            label: DJ ? XJ(`${fD}rxOdLeft`, {
              time: se(XJ, AJ.baf2RxOdLeft)
            }) : XJ(`${fD}rxOverdrive`),
            locked: sJ,
            pending: 0 !== (cJ.pendingFlags & Xc),
            toggle: () => {
              sJ ? UJ(`${fD}rxOverdriveTier`, {
                amount: String(hJ(13))
              }) : DJ ? ZJ.setFlag(Xc, !1) : cJ.odConfirmed ? ZJ.setFlag(Xc, !0) : jJ(!0)
            }
          }), YJ || cJ.startGuard ? (0, xe.jsx)(nX.r, {
            disabled: cJ.busy.has("start") || cJ.startGuard,
            onClick: () => {
              ZJ.tap("start", (() => {
                ZJ.setFlag(ec, !1)
              }))
            },
            children: XJ(cJ.startGuard ? `${fD}rxStarting` : `${fD}rxStart`)
          }) : (0, xe.jsx)("span", {
            className: GU()("Baf2RxScram", {
              Pulse: nJ
            }),
            children: (0, xe.jsx)(nX.I, {
              onClick: () => {
                ZJ.shutDown()
              },
              children: XJ(`${fD}rxScram`)
            })
          })]
        }), (0, xe.jsx)(vD, {
          status: AJ
        }), qJ && (0, xe.jsx)(Lh, {
          id: "baf2RxOdTitle",
          title: `${fD}rxOdConfirmTitle`,
          body: `${fD}rxOdConfirmBody`,
          yes: `${fD}rxOdConfirm`,
          cancel: () => {
            jJ(!1)
          },
          confirm: () => {
            jJ(!1), ZJ.tap("odConfirm", (() => {
              ZJ.confirmOverdrive(), ZJ.setFlag(Xc, !0)
            })), eJ(`${fD}rxWhy_overdrive`)
          }
        })]
      })
    }

    function QD(JJ) {
      let {
        view: cJ,
        store: ZJ,
        keepSize: FJ
      } = JJ;
      const {
        t: UJ
      } = (0, vU.F)(), {
        status: eJ
      } = cJ;
      return (0, xe.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, xe.jsx)(lh, {
          kind: "reactor",
          dims: cJ.dims,
          cap: eJ.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: JJ => {
            ZJ.resize(JJ)
          }
        }), FJ ? (0, xe.jsx)(nX.g, {
          onClick: FJ,
          children: UJ(`${fD}rxKeepSize`)
        }) : (0, xe.jsxs)(xe.Fragment, {
          children: [(0, xe.jsx)(JD, {
            on: cJ.guide,
            label: UJ(`${fD}rxGuide`),
            toggle: () => {
              ZJ.toggleGuide()
            }
          }), xD(eJ, hc) && (0, xe.jsx)(JD, {
            on: cJ.starter,
            label: UJ(`${fD}rxStarter`),
            toggle: () => {
              ZJ.toggleStarter()
            }
          }), (0, xe.jsx)(Ch, {
            status: eJ,
            store: ZJ,
            busy: cJ.busy.has("fill")
          })]
        })]
      })
    }

    function ED(JJ) {
      let {
        need: cJ,
        kind: ZJ = "reactor",
        explain: FJ
      } = JJ;
      const {
        t: UJ
      } = (0, vU.F)(), eJ = cJ.length <= 3, XJ = cJ.reduce(((JJ, cJ) => {
        let [, ZJ] = cJ;
        return JJ + ZJ
      }), 0);
      return (0, xe.jsxs)("div", {
        className: GU()("Baf2RxParts", {
          Compact: !eJ
        }),
        onClick: () => {
          FJ("battery" === ZJ ? `${fD}batWhy_store` : `${fD}rxShellHint`)
        },
        children: [XJ > 0 && (0, xe.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === XJ ? UJ(`${fD}rxBlocksOne`) : UJ(`${fD}rxBlocks`, {
            blocks: String(XJ)
          })
        }), 0 === cJ.length ? (0, xe.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: UJ("battery" === ZJ ? `${fD}batPartsDone` : `${fD}rxShellDone`)
        }) : sq(cJ).map((JJ => {
          let [cJ, ZJ, FJ] = JJ;
          const XJ = function(JJ) {
            const cJ = rq[JJ];
            if (void 0 === cJ) return null;
            const [ZJ, FJ, UJ] = fq[cJ].colour.map((JJ => Math.round(255 * JJ)));
            return `rgb(${ZJ}, ${FJ}, ${UJ})`
          }(cJ);
          return (0, xe.jsxs)("span", {
            className: "Baf2RxChip",
            title: BU(UJ, cJ),
            children: [(0, xe.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === XJ ? {
                visibility: "hidden"
              } : {
                background: XJ
              },
              title: UJ(`${fD}rxShopGhost`)
            }), (0, xe.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, xe.jsx)(QU.d, {
                itemName: cJ,
                amount: 0
              })
            }), (0, xe.jsx)("span", {
              className: "Baf2RxChipName",
              children: eJ ? `${ZJ} ${AJ=BU(UJ,cJ),AJ.replace(/^(Reactor|Battery) (?=\S)/,"")}` : ZJ
            }), FJ >= ZJ ? (0, xe.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, xe.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: eJ ? UJ(`${fD}rxShopShort`, {
                count: String(ZJ - FJ)
              }) : "\u2212" + (ZJ - FJ)
            })]
          }, cJ);
          var AJ
        }))]
      })
    }
    const VD = "buildAFactory2Game:";

    function KD(JJ) {
      var cJ, ZJ, UJ, eJ, XJ, AJ, qJ;
      let {
        store: jJ,
        close: YJ
      } = JJ;
      const {
        t: hJ
      } = (0, vU.F)(), DJ = gX(), sJ = ah(jJ), {
        explained: nJ,
        explain: GJ
      } = ph("baf2RxExplained"), fJ = (0, FJ.useCallback)(((JJ, cJ) => {
        GJ(hJ(JJ, cJ))
      }), [GJ, hJ]), xJ = null === sJ || void 0 === sJ ? void 0 : sJ.status, rJ = !0 === (null === xJ || void 0 === xJ ? void 0 : xJ.baf2BatReadOnly), vJ = JJ => {
        xJ && DJ.send(Uc(xJ.baf2BatAt, JJ))
      }, [mJ, QJ, EJ] = null !== (cJ = null === sJ || void 0 === sJ ? void 0 : sJ.dims) && void 0 !== cJ ? cJ : [0, 0, 0], VJ = Qq(null !== (ZJ = null === sJ || void 0 === sJ ? void 0 : sJ.qh) && void 0 !== ZJ ? ZJ : 0), KJ = !0 === (null === xJ || void 0 === xJ ? void 0 : xJ.baf2BatFormed), yJ = null !== (UJ = null === xJ || void 0 === xJ ? void 0 : xJ.baf2BatStored) && void 0 !== UJ ? UJ : 0, SJ = Math.max(1, null !== (eJ = null === xJ || void 0 === xJ ? void 0 : xJ.baf2BatIslandCap) && void 0 !== eJ ? eJ : 1), IJ = Math.min(100, 100 * yJ / SJ), MJ = null === xJ || void 0 === xJ ? void 0 : xJ.baf2BatNetPerS, bJ = function(JJ, cJ, ZJ) {
        return ZJ > 0 && cJ >= ZJ ? "full" : void 0 !== JJ && JJ >= .05 ? "charging" : void 0 !== JJ && JJ <= -.05 && cJ > 0 ? "draining" : "steady"
      }(MJ, yJ, null !== (XJ = null === xJ || void 0 === xJ ? void 0 : xJ.baf2BatIslandCap) && void 0 !== XJ ? XJ : 0), wJ = null !== (AJ = null === xJ || void 0 === xJ ? void 0 : xJ.baf2BatMadePerS) && void 0 !== AJ ? AJ : 0, WJ = null !== (qJ = null === xJ || void 0 === xJ ? void 0 : xJ.baf2BatUsedPerS) && void 0 !== qJ ? qJ : 0;
      let gJ, HJ = {},
        PJ = "info";
      if (xJ)
        if (KJ) "charging" === bJ ? (gJ = `${VD}batLine_charging`, HJ = {
          time: se(hJ, (SJ - yJ) / Math.max(.05, null !== MJ && void 0 !== MJ ? MJ : 0))
        }, PJ = "ok") : "draining" === bJ ? (gJ = `${VD}batLine_draining`, HJ = {
          time: se(hJ, yJ / Math.max(.05, -(null !== MJ && void 0 !== MJ ? MJ : 0)))
        }, PJ = "warn") : gJ = "full" === bJ ? `${VD}batLine_full` : yJ <= 0 && WJ > 0 ? `${VD}batLine_empty` : `${VD}batLine_steady`;
        else {
          var kJ;
          const JJ = sD({
            left: xJ.baf2BatNeed.reduce(((JJ, cJ) => {
              let [, ZJ] = cJ;
              return JJ + ZJ
            }), 0),
            bad: xJ.baf2BatBad,
            rods: 1,
            canFill: !0 === xJ.baf2BatCanFill,
            melted: !1
          });
          gJ = JJ.key, HJ = {
            count: String(null !== (kJ = JJ.params.count) && void 0 !== kJ ? kJ : 0)
          }, PJ = JJ.tone
        }
      else gJ = `${VD}batLine_steady`;
      const pJ = Math.max(wJ, WJ, 1);
      return (0, xe.jsx)(sX.c, {
        close: YJ,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, xe.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, xe.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, xe.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, xe.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, xe.jsx)(QU.d, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, xe.jsxs)("div", {
                children: [(0, xe.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: hJ(`${VD}batTitle`)
                }), xJ && (0, xe.jsxs)("p", {
                  className: GU()("Baf2RxSubtitle", {
                    good: KJ && "charging" === bJ,
                    warn: KJ && "draining" === bJ
                  }),
                  children: [mJ, "\xd7", QJ, "\xd7", EJ, " \xb7 ", hJ(KJ ? `${VD}batState_${bJ}` : `${VD}rxSubPlanShort`)]
                })]
              })]
            }), (0, xe.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [xJ && !rJ && (0, xe.jsx)(Bh, {
                kind: "battery",
                cap: KJ ? VJ : void 0,
                busy: null === sJ || void 0 === sJ ? void 0 : sJ.busy.has("apart"),
                apart: () => {
                  jJ.tap("apart", (() => {
                    vJ("apart")
                  }))
                }
              }), (0, xe.jsx)(nX.j, {
                onClick: YJ
              })]
            })]
          }), sJ && xJ && (0, xe.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, xe.jsxs)("div", {
              className: GU()("Baf2RxFlow Baf2BatFlow", {
                Plan: !KJ
              }),
              children: [(0, xe.jsx)(Hh, {
                kind: "Power",
                label: hJ(`${VD}batMade`),
                number: KJ ? `\u26a1 ${Qq(wJ)}/s` : "\u2014",
                note: hJ(`${VD}batMadeNote`),
                share: KJ ? wJ / pJ : void 0,
                onExplain: () => {
                  fJ(`${VD}batWhy_made`)
                }
              }), (0, xe.jsx)(Ph, {
                kind: "Power",
                step: KJ ? jD(wJ, pJ) : 0,
                planned: !KJ
              }), (0, xe.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  fJ(`${VD}batWhy_store`)
                },
                children: [(0, xe.jsx)(kh, {
                  max: 100,
                  bands: [{
                    upTo: KJ ? IJ : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, xe.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, xe.jsx)("b", {
                    className: "Baf2BatStored",
                    children: KJ ? hJ(`${VD}batStoredOf`, {
                      amount: Qq(yJ),
                      cap: Qq(xJ.baf2BatIslandCap)
                    }) : hJ(`${VD}batWillHold`, {
                      cap: VJ
                    })
                  }), (0, xe.jsx)("span", {
                    children: hJ(`${VD}batAdds`, {
                      cap: VJ
                    })
                  }), KJ && (0, xe.jsx)("small", {
                    children: hJ(`${VD}batBreakNote`, {
                      cap: VJ
                    })
                  })]
                })]
              }), (0, xe.jsx)(Ph, {
                kind: "Power",
                step: KJ ? jD(WJ, pJ) : 0,
                planned: !KJ
              }), (0, xe.jsx)(Hh, {
                kind: "Power",
                label: hJ(`${VD}batUsed`),
                number: KJ ? `\u26a1 ${Qq(WJ)}/s` : "\u2014",
                note: hJ(`${VD}batUsedNote`),
                share: KJ ? WJ / pJ : void 0,
                onExplain: () => {
                  fJ(`${VD}batWhy_used`)
                }
              })]
            }), (0, xe.jsx)(dh, {
              text: hJ(gJ, HJ),
              tone: PJ,
              explained: nJ
            }), rJ ? (0, xe.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: hJ(`${VD}rxNotYours`)
            }) : !KJ && (0, xe.jsxs)(xe.Fragment, {
              children: [(0, xe.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, xe.jsx)(lh, {
                  kind: "battery",
                  dims: sJ.dims,
                  cap: xJ.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: JJ => {
                    jJ.resize(JJ)
                  }
                }), (0, xe.jsx)(JD, {
                  on: sJ.guide,
                  label: hJ(`${VD}rxGuide`),
                  toggle: () => {
                    jJ.toggleGuide()
                  }
                }), xJ.baf2BatCanFill && (0, xe.jsx)(nX.m, {
                  disabled: !nq("battery", xJ.baf2BatNeed) || sJ.busy.has("fill"),
                  onClick: () => {
                    jJ.tap("fill", (() => {
                      vJ("fill")
                    }))
                  },
                  children: hJ(`${VD}rxFill`)
                })]
              }), (0, xe.jsx)(ED, {
                need: xJ.baf2BatNeed,
                kind: "battery",
                explain: fJ
              })]
            })]
          })]
        })
      })
    }
    const yD = "buildAFactory2Game:",
      SD = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function ID(JJ, cJ) {
      return JJ === RA ? null : cJ ? "#4a4440" : JJ < aA ? SD[JJ - LA] : JJ === aA ? "#3fd0f0" : JJ === BA ? "#2c3e4c" : "#55585e"
    }

    function MD(JJ) {
      let {
        inner: cJ,
        looks: ZJ,
        layer: FJ,
        setLayer: UJ,
        glow: eJ,
        melted: XJ,
        explain: AJ
      } = JJ;
      const {
        t: qJ
      } = (0, vU.F)(), [jJ, YJ, hJ] = cJ, DJ = Math.max(0, Math.min(YJ - 1, FJ)), sJ = [];
      for (let GJ = 0; GJ < hJ; GJ++)
        for (let JJ = 0; JJ < jJ; JJ++) {
          var nJ;
          const cJ = null !== (nJ = ZJ[(DJ * hJ + GJ) * jJ + JJ]) && void 0 !== nJ ? nJ : RA,
            FJ = ID(cJ, XJ),
            UJ = cJ >= LA && cJ < aA;
          sJ.push(null === FJ ? (0, xe.jsx)("circle", {
            cx: JJ + .5,
            cy: GJ + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${JJ},${GJ}`) : (0, xe.jsx)("rect", {
            x: JJ + .06,
            y: GJ + .06,
            width: .88,
            height: .88,
            fill: FJ,
            opacity: UJ && !XJ ? .5 + .5 * eJ : 1,
            onClick: JJ => {
              JJ.stopPropagation();
              const ZJ = GD(cJ);
              AJ(ZJ.key, ZJ.params)
            }
          }, `${JJ},${GJ}`))
        }
      return (0, xe.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, xe.jsx)("svg", {
          className: GU()("Baf2RxMapGrid", {
            Melted: XJ
          }),
          viewBox: `0 0 ${Math.max(1,jJ)} ${Math.max(1,hJ)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": qJ(`${yD}rxWhy_core`),
          onClick: () => {
            AJ(`${yD}rxWhy_core`, {})
          },
          children: sJ
        }), YJ > 1 && (0, xe.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, xe.jsx)("button", {
            type: "button",
            "aria-label": qJ(`${yD}rxLayerDown`),
            disabled: DJ <= 0,
            onClick: () => {
              UJ(DJ - 1)
            },
            children: "\u25bc"
          }), (0, xe.jsxs)("span", {
            children: [(0, xe.jsx)("span", {
              className: "HideNarrow",
              children: qJ(`${yD}rxLayer`, {
                n: String(DJ + 1),
                of: String(YJ)
              })
            }), (0, xe.jsx)("span", {
              className: "ShowNarrow",
              children: qJ(`${yD}rxLayerShort`, {
                n: String(DJ + 1),
                of: String(YJ)
              })
            })]
          }), (0, xe.jsx)("button", {
            type: "button",
            "aria-label": qJ(`${yD}rxLayerUp`),
            disabled: DJ >= YJ - 1,
            onClick: () => {
              UJ(DJ + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const bD = "buildAFactory2Game:",
      wD = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: pA,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: qq,
        kind: "red"
      }],
      WD = [50, pA, 100];

    function gD(JJ) {
      let {
        stats: cJ,
        t: ZJ,
        explain: FJ
      } = JJ;
      const UJ = lA(cJ),
        eJ = Math.max(1, cJ.fuelHeat, cJ.cooling, cJ.size),
        XJ = [
          ["fuel", `${bD}rxBarRods`, cJ.fuelHeat],
          ["cooling", `${bD}rxBarCooling`, cJ.cooling],
          ["size", `${bD}rxBarSize`, cJ.size]
        ];
      return (0, xe.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          FJ(`${bD}rxWhy_bars`)
        },
        children: [(0, xe.jsx)("span", {
          className: "Baf2RxMostLine",
          children: ZJ(`${bD}rxMost`, {
            amount: Qq(Math.min(cJ.fuelHeat, cJ.cooling, cJ.size))
          })
        }), (0, xe.jsx)("span", {
          className: "Baf2RxMostBars",
          children: XJ.map((JJ => {
            let [cJ, FJ, XJ] = JJ;
            return (0, xe.jsxs)("span", {
              className: GU()("Baf2RxMostBar", cJ, {
                Low: cJ === UJ
              }),
              children: [(0, xe.jsx)("small", {
                children: ZJ(FJ)
              }), (0, xe.jsx)("i", {
                children: (0, xe.jsx)("b", {
                  style: {
                    width: 100 * XJ / eJ + "%"
                  }
                })
              })]
            }, cJ)
          }))
        })]
      })
    }

    function HD(JJ) {
      var cJ;
      let {
        view: ZJ,
        heat: UJ,
        settle: eJ,
        settleLine: XJ,
        settleBad: AJ,
        explain: qJ
      } = JJ;
      const {
        t: jJ
      } = (0, vU.F)(), {
        status: YJ
      } = ZJ, hJ = YJ.baf2RxAt.join(","), [DJ, sJ] = (0, FJ.useState)((() => nD(ZJ.inner)));
      (0, FJ.useEffect)((() => {
        sJ(nD(ZJ.inner))
      }), [hJ, ZJ.inner[1]]);
      const nJ = null !== (cJ = ZJ.plan) && void 0 !== cJ ? cJ : Yq(YJ),
        GJ = ZJ.plan ? ZJ.plan.powerPerUnit : YJ.baf2RxStats[8],
        fJ = null === UJ ? null : "alarm" === (xJ = Aq(YJ)) ? "red" : "hot" === xJ ? "hot" : "warm" === xJ ? "warm" : "cold";
      var xJ;
      const rJ = !YJ.baf2RxFormed && function(JJ, cJ) {
          return 0 !== (JJ.baf2RxFlags & cJ)
        }(YJ, Ac),
        vJ = YJ.baf2RxDamage,
        mJ = YJ.baf2RxDamageTrend;
      return (0, xe.jsxs)("div", {
        className: GU()("Baf2RxCore", null !== fJ && void 0 !== fJ ? fJ : "plan"),
        children: [(0, xe.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, xe.jsx)(MD, {
            inner: ZJ.inner,
            looks: ZJ.looks,
            layer: DJ,
            setLayer: sJ,
            glow: YJ.baf2RxFormed ? YJ.baf2RxThrottle / 100 : 1,
            melted: rJ,
            explain: qJ
          }), (0, xe.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              qJ(`${bD}rxWhy_heat`)
            },
            children: [null !== UJ ? (0, xe.jsxs)(xe.Fragment, {
              children: [(0, xe.jsx)("b", {
                children: jJ(`${bD}rxHeatPct`, {
                  pct: String(UJ)
                })
              }), (0, xe.jsx)("span", {
                className: GU()("Baf2RxBand", fJ),
                children: jJ(`${bD}rxBand_${fJ}`)
              })]
            }) : (0, xe.jsx)("b", {
              children: jJ(`${bD}rxHeat`)
            }), null !== XJ && (0, xe.jsx)("span", {
              className: GU()("Baf2RxSettle", {
                Bad: AJ
              }),
              children: XJ
            }), vJ >= 1 && (0, xe.jsxs)("span", {
              className: GU()("Baf2RxDamage", mJ),
              children: [jJ(`${bD}rxDamageLine`, {
                pct: String(vJ)
              }), " \xb7 ", jJ(`${bD}rxDamage_${mJ}`), (0, xe.jsx)("i", {
                children: (0, xe.jsx)("b", {
                  style: {
                    width: `${Math.min(100,vJ)}%`
                  }
                })
              })]
            })]
          }), (0, xe.jsx)(kh, {
            max: qq,
            bands: wD,
            ticks: WD,
            now: UJ,
            settle: eJ,
            settleTone: AJ ? "bad" : null,
            onExplain: () => {
              qJ(`${bD}rxWhy_heat`)
            }
          })]
        }), (0, xe.jsx)(gD, {
          stats: nJ,
          t: jJ,
          explain: qJ
        }), GJ > 0 && (0, xe.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            qJ(`${bD}rxWhy_perPellet`)
          },
          children: jJ(`${bD}rxPerPellet`, {
            amount: Qq(GJ)
          })
        })]
      })
    }

    function PD(JJ, cJ) {
      var ZJ;
      if (!JJ.baf2RxStore) return {
        note: cJ(`${bD}rxUpTo`, {
          amount: Qq(JJ.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [FJ, UJ] = JJ.baf2RxStore, eJ = UJ > 0 ? FJ / UJ : 0, XJ = String(Math.floor(100 * eJ)), AJ = null !== (ZJ = JJ.baf2RxStoreNetPerS) && void 0 !== ZJ ? ZJ : 0, qJ = function(JJ) {
        var cJ, ZJ;
        const [FJ, UJ] = null !== (cJ = JJ.baf2RxStore) && void 0 !== cJ ? cJ : [0, 0], eJ = null !== (ZJ = JJ.baf2RxStoreNetPerS) && void 0 !== ZJ ? ZJ : 0;
        return UJ > 0 && FJ >= UJ - 1 ? "running" === JJ.baf2RxState ? `${cD}rxStoreFull` : `${cD}rxStoreFullOnly` : eJ > .05 ? `${cD}rxStoreLine` : eJ < -.05 ? "running" === JJ.baf2RxState ? `${cD}rxStoreUsesMore` : `${cD}rxStoreDraining` : `${cD}rxStorePct`
      }(JJ);
      return {
        note: cJ(qJ, qJ === `${bD}rxStoreLine` ? {
          pct: XJ,
          time: se(cJ, (UJ - FJ) / AJ)
        } : {
          pct: XJ
        }),
        share: eJ
      }
    }

    function kD(JJ) {
      let {
        view: cJ,
        explain: ZJ,
        preview: FJ
      } = JJ;
      const {
        t: UJ
      } = (0, vU.F)(), {
        status: eJ
      } = cJ, XJ = TA(uA(...cJ.dims)), AJ = qD(eJ), qJ = Math.min(Math.round(eJ.baf2RxFuel), XJ.fuel), jJ = "running" === eJ.baf2RxState, YJ = jJ ? jD(eJ.baf2RxOut, eJ.baf2RxMaxNow) : 0, hJ = function(JJ, cJ, ZJ) {
        const FJ = eD(JJ),
          UJ = "cryo" === FJ.LD,
          eJ = ZJ ? ZJ.coolantSecs : FJ.pct >= 100 && JJ.baf2RxOut >= 1 ? AD(JJ, JJ.baf2RxThrottle).coolantSecs : null;
        let XJ, AJ = !1;
        if (FJ.pct < 100) {
          const ZJ = 1 === FJ.makersShort,
            eJ = !UJ && JJ.baf2RxCryoOpen ? "OrCryo" : "";
          XJ = FJ.makersShort > 0 ? cJ(UJ ? `${bD}rxCryoAddMixer${ZJ?"":"s"}` : `${bD}rxWaterAddCondenser${ZJ?"":"s"}${eJ}`, {
            count: String(FJ.makersShort)
          }) : cJ(`${bD}rxWaterNeeds`, {
            rate: oh(FJ.needPerS)
          })
        } else if (null !== eJ) XJ = cJ(`${bD}rxWaterRunsOut`, {
          time: se(cJ, eJ)
        });
        else if (FJ.waterBeside > 0) XJ = cJ(`${bD}rxCryoPlusWater`, {
          rate: oh(FJ.waterBeside)
        });
        else {
          const JJ = function(JJ) {
            return JJ.inPerS <= 0 ? "rxWaterNoSupply" : JJ.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(FJ);
          AJ = "rxWaterNoSupply" === JJ, XJ = cJ(`${bD}${JJ}`, {
            amount: Qq(FJ.stored)
          })
        }
        return {
          kind: UJ ? "Cryo" : "Water",
          label: cJ(UJ ? `${bD}rxCryo` : `${bD}rxWater`),
          number: `${oh(FJ.usePerS)}/s`,
          preview: ZJ ? `${oh(ZJ.coolPerS)}/s` : null,
          note: XJ,
          tone: "noWater" === JJ.baf2RxState ? "danger" : AJ ? "warn" : (qJ = FJ.pct, jJ = eJ, qJ < 100 ? "danger" : null === jJ ? null : jJ < 300 ? "danger" : "warn"),
          share: FJ.pct / 100,
          why: UJ ? `${bD}rxWhy_cryo` : `${bD}rxWhy_water`,
          short: FJ.pct < 100
        };
        var qJ, jJ
      }(eJ, UJ, FJ), DJ = Gq(eJ, XJ.waste, AJ), sJ = PD(eJ, UJ), nJ = AD(eJ, eJ.baf2RxTarget), GJ = jJ && Math.abs(nJ.settle - eJ.baf2RxHeat) >= 3, fJ = FJ ? FJ.pelletsPerMin / 60 : null;
      return (0, xe.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, xe.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, xe.jsx)(Hh, {
            kind: "Fuel",
            label: UJ(`${bD}rxFuel`),
            number: String(qJ),
            preview: null !== fJ && fJ > 0 && eJ.baf2RxFuel > 0 ? se(UJ, eJ.baf2RxFuel / fJ) : null,
            note: eJ.baf2RxFuel <= 0 ? UJ(`${bD}rxFuelEmpty`) : AJ > 0 ? UJ(`${bD}rxFuelLeft`, {
              time: se(UJ, eJ.baf2RxFuel / AJ)
            }) : UJ(1 === qJ ? `${bD}rxFuelPellet` : `${bD}rxFuelPellets`),
            tone: "noFuel" === eJ.baf2RxState ? "danger" : eJ.baf2RxFuel < 2 ? "warn" : null,
            share: eJ.baf2RxFuel / XJ.fuel,
            onExplain: () => {
              ZJ(`${bD}rxWhy_fuel`)
            }
          }), (0, xe.jsx)(Hh, {
            kind: hJ.kind,
            label: hJ.label,
            number: hJ.number,
            preview: hJ.preview,
            note: hJ.note,
            tone: hJ.tone,
            share: hJ.share,
            onExplain: () => {
              ZJ(hJ.why)
            }
          })]
        }), (0, xe.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, xe.jsx)(Ph, {
            kind: "Fuel",
            step: YJ,
            short: "noFuel" === eJ.baf2RxState
          }), (0, xe.jsx)(Ph, {
            kind: hJ.kind,
            step: YJ,
            short: hJ.short || "noWater" === eJ.baf2RxState
          })]
        }), (0, xe.jsx)(HD, {
          view: cJ,
          heat: eJ.baf2RxHeat,
          settle: Math.min(qq, nJ.settle),
          settleLine: GJ ? UJ(`${bD}rxHeatSettles`, {
            pct: String(Math.round(nJ.settle)),
            time: se(UJ, nJ.settleS)
          }) : null,
          settleBad: nJ.settle > 100,
          explain: ZJ
        }), (0, xe.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, xe.jsx)(Ph, {
            kind: "Power",
            step: YJ
          }), (0, xe.jsx)(Ph, {
            kind: "Waste",
            step: jJ && eJ.baf2RxFuel - eJ.baf2RxPu > 0 ? YJ : 0,
            short: DJ.full
          })]
        }), (0, xe.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, xe.jsx)(Hh, {
            kind: "Power",
            label: UJ(`${bD}rxPowerOut`),
            number: `\u26a1 ${Qq(eJ.baf2RxOut)}/s`,
            preview: FJ ? Qq(FJ.out) : null,
            note: sJ.note,
            share: sJ.share,
            onExplain: () => {
              ZJ(`${bD}rxWhy_power`)
            }
          }), (0, xe.jsx)(Hh, {
            kind: "Waste",
            label: UJ(`${bD}rxWaste`),
            number: `${Math.floor(eJ.baf2RxWaste)}/${XJ.waste}`,
            note: DJ.full ? UJ(`${bD}rxWasteFull`) : null !== DJ.fullInS ? UJ(`${bD}rxWasteFullIn`, {
              time: se(UJ, DJ.fullInS)
            }) : UJ(`${bD}rxWasteSpent`),
            tone: "wasteFull" === eJ.baf2RxState ? "danger" : DJ.full ? "warn" : null,
            share: eJ.baf2RxWaste / XJ.waste,
            onExplain: () => {
              ZJ(`${bD}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function pD(JJ) {
      let {
        view: cJ,
        explain: ZJ
      } = JJ;
      const {
        t: FJ
      } = (0, vU.F)(), UJ = cJ.plan;
      if (!UJ) return null;
      const eJ = UJ.fuelHeat <= 0 ? null : UJ.cooling > 0 ? Math.min(qq, 100 * UJ.fuelHeat / UJ.cooling) : qq,
        XJ = FJ(`${bD}rxPlanAtFull`);
      return (0, xe.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, xe.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, xe.jsx)(Hh, {
            kind: "Fuel",
            label: FJ(`${bD}rxFuel`),
            number: FJ(`${bD}rxPlanPerMin`, {
              amount: Eq(UJ.pelletsPerMin)
            }),
            note: FJ(`${bD}rxPlanPellets`),
            onExplain: () => {
              ZJ(`${bD}rxWhy_fuel`)
            }
          }), (0, xe.jsx)(Hh, {
            kind: "Water",
            label: FJ(`${bD}rxWater`),
            number: `${oh(UJ.waterPerS)}/s`,
            note: cJ.status.baf2RxCryoOpen && UJ.waterPerS > 0 ? FJ(`${bD}rxPlanOrCryo`, {
              rate: oh(Uq(UJ, oJ.e) * oJ.m)
            }) : XJ,
            onExplain: () => {
              ZJ(`${bD}rxWhy_water`)
            }
          })]
        }), (0, xe.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, xe.jsx)(Ph, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, xe.jsx)(Ph, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, xe.jsx)(HD, {
          view: cJ,
          heat: null,
          settle: eJ,
          settleLine: null === eJ ? null : FJ(`${bD}rxPlanHeat`, {
            pct: String(Math.round(eJ))
          }),
          settleBad: null !== eJ && eJ > 100,
          explain: ZJ
        }), (0, xe.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, xe.jsx)(Ph, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, xe.jsx)(Ph, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, xe.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, xe.jsx)(Hh, {
            kind: "Power",
            label: FJ(`${bD}rxPowerOut`),
            number: `\u26a1 ${Qq(UJ.max)}/s`,
            note: XJ,
            onExplain: () => {
              ZJ(`${bD}rxWhy_power`)
            }
          }), (0, xe.jsx)(Hh, {
            kind: "Waste",
            label: FJ(`${bD}rxWaste`),
            number: FJ(`${bD}rxPlanPerMin`, {
              amount: Eq(UJ.pelletsPerMin)
            }),
            note: FJ(`${bD}rxWasteSpent`),
            onExplain: () => {
              ZJ(`${bD}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const dD = "buildAFactory2Game:",
      zD = {
        key: `${dD}rxWaiting`,
        params: {},
        tone: "info"
      };

    function ND(JJ, cJ) {
      return 0 !== (JJ.baf2RxFlags & cJ)
    }

    function OD(JJ) {
      var cJ, ZJ;
      let {
        store: UJ,
        close: eJ
      } = JJ;
      const {
        t: XJ
      } = (0, vU.F)(), AJ = ah(UJ), {
        explained: qJ,
        hinting: jJ,
        explain: YJ,
        explainOnce: hJ
      } = ph("baf2RxExplained"), DJ = (0, FJ.useCallback)(((JJ, cJ) => {
        YJ(XJ(JJ, cJ))
      }), [YJ, XJ]), sJ = (0, FJ.useCallback)(((JJ, cJ) => {
        hJ(JJ, XJ(JJ, cJ))
      }), [hJ, XJ]), [nJ, GJ] = (0, FJ.useState)(!1), [fJ, xJ] = (0, FJ.useState)(!1), rJ = null === AJ || void 0 === AJ ? void 0 : AJ.status, vJ = null === rJ || void 0 === rJ ? void 0 : rJ.baf2RxAt.join(","), mJ = !0 === (null === rJ || void 0 === rJ ? void 0 : rJ.baf2RxFormed);
      (0, FJ.useEffect)((() => {
        xJ(!1), GJ(!1)
      }), [vJ, mJ]), (0, FJ.useEffect)((() => (UJ.opened(), () => {
        UJ.closed()
      })), [UJ]);
      const QJ = void 0 !== rJ && ND(rJ, Yc),
        EJ = rJ ? mJ ? Aq(rJ) : null !== AJ && void 0 !== AJ && AJ.plan ? function(JJ, cJ) {
          if (JJ <= 0) return "off";
          if (cJ <= 0) return "alarm";
          const ZJ = 100 * JJ / cJ;
          return ZJ < 50 ? "calm" : ZJ < Jq ? "warm" : ZJ <= 100 ? "hot" : "alarm"
        }(AJ.plan.fuelHeat, AJ.plan.cooling) : "off" : "off",
        VJ = rJ ? jq(rJ) : null,
        KJ = AJ ? AJ.waiting ? zD : mJ ? DD(AJ.status) : function(JJ) {
          var cJ, ZJ;
          const {
            status: FJ
          } = JJ;
          return sD({
            left: FJ.baf2RxNeed.reduce(((JJ, cJ) => {
              let [, ZJ] = cJ;
              return JJ + ZJ
            }), 0),
            bad: FJ.baf2RxBad,
            rods: null !== (cJ = null === (ZJ = JJ.plan) || void 0 === ZJ ? void 0 : ZJ.rods) && void 0 !== cJ ? cJ : 0,
            canFill: ND(FJ, qc),
            melted: ND(FJ, Ac),
            idle: JJ.looks.reduce(((JJ, cJ) => JJ + (cJ === BA ? 1 : 0)), 0)
          })
        }(AJ) : null,
        yJ = jJ && null !== KJ && ("ok" === KJ.tone || "info" === KJ.tone),
        SJ = rJ ? function(JJ) {
          const cJ = 0 !== (JJ.baf2RxFlags & ec),
            ZJ = JJ.baf2RxHeat < zA;
          return 0 !== (JJ.baf2RxFlags & Ac) || ZJ && (cJ || !JJ.baf2RxFormed) ? null : JJ.baf2RxFormed && !cJ ? {
            key: `${Xq}rxApartScram`,
            params: {}
          } : {
            key: `${Xq}rxApartCooling`,
            params: {
              pct: String(zA)
            }
          }
        }(rJ) : null,
        [IJ, MJ, bJ] = null !== (cJ = null === AJ || void 0 === AJ ? void 0 : AJ.dims) && void 0 !== cJ ? cJ : [0, 0, 0],
        wJ = `${IJ}\xd7${MJ}\xd7${bJ}`;
      return (0, xe.jsx)(sX.c, {
        close: eJ,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, xe.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, xe.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, xe.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, xe.jsx)(th, {
                mood: EJ
              }), (0, xe.jsxs)("div", {
                children: [(0, xe.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: XJ(`${dD}rxTitle`)
                }), AJ && (0, xe.jsxs)("p", {
                  className: GU()("Baf2RxSubtitle", mJ && (null === VJ || void 0 === VJ ? void 0 : VJ.tone)),
                  children: [mJ && !QJ ? (0, xe.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": XJ(`${dD}rxChangeSize`),
                    onClick: () => {
                      if (!rJ) return;
                      const JJ = ND(rJ, ec);
                      var cJ;
                      (cJ = {
                        scram: JJ,
                        heat: rJ.baf2RxHeat
                      }).scram && cJ.heat < zA ? GJ(!0) : DJ(JJ ? `${dD}rxResizeCooling` : `${dD}rxResizeHot`, {
                        pct: String(zA)
                      })
                    },
                    children: [wJ, " \u270e"]
                  }) : wJ, " \xb7 ", XJ(mJ ? null !== (ZJ = null === VJ || void 0 === VJ ? void 0 : VJ.label) && void 0 !== ZJ ? ZJ : `${dD}rxState_running` : `${dD}rxSubPlanShort`)]
                })]
              })]
            }), (0, xe.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [AJ && !QJ && (0, xe.jsx)(Bh, {
                kind: "reactor",
                busy: AJ.busy.has("apart"),
                whyNot: SJ ? () => {
                  DJ(SJ.key, SJ.params)
                } : null,
                apart: () => {
                  UJ.tap("apart", (() => {
                    UJ.send("apart")
                  }))
                }
              }), (0, xe.jsx)(nX.j, {
                onClick: eJ
              })]
            })]
          }), AJ && KJ && (0, xe.jsxs)("div", {
            className: "Baf2RxBody",
            children: [mJ ? (0, xe.jsx)(kD, {
              view: AJ,
              explain: DJ,
              preview: XD(AJ.status)
            }) : (0, xe.jsx)(pD, {
              view: AJ,
              explain: DJ
            }), (0, xe.jsx)(dh, {
              text: yJ ? `${YD(XJ,KJ)} ${XJ(`${dD}rxTapHint`)}` : YD(XJ, KJ),
              tone: KJ.tone,
              explained: qJ
            }), QJ ? (0, xe.jsxs)(xe.Fragment, {
              children: [(0, xe.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: XJ(`${dD}rxNotYours`)
              }), (0, xe.jsx)(uh, {
                status: AJ.status,
                store: UJ,
                readOnly: !0
              })]
            }) : mJ && !fJ ? (0, xe.jsxs)(xe.Fragment, {
              children: [(0, xe.jsx)(mD, {
                view: AJ,
                store: UJ,
                explain: DJ,
                explainOnce: sJ
              }), void 0 !== AJ.status.baf2RxLayout && Oh(AJ.status) && (0, xe.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, xe.jsx)(uh, {
                  status: AJ.status,
                  store: UJ,
                  readOnly: !1,
                  bare: !0
                }), (0, xe.jsx)(Ch, {
                  status: AJ.status,
                  store: UJ,
                  busy: AJ.busy.has("fill")
                })]
              })]
            }) : (0, xe.jsxs)(xe.Fragment, {
              children: [(0, xe.jsx)(QD, {
                view: AJ,
                store: UJ,
                keepSize: mJ ? () => {
                  xJ(!1)
                } : void 0
              }), Dq(AJ.dims, AJ.status.baf2RxDims) && (0, xe.jsx)(ED, {
                need: AJ.status.baf2RxNeed,
                explain: DJ
              }), (0, xe.jsx)(uh, {
                status: AJ.status,
                store: UJ,
                readOnly: !1
              })]
            }), nJ && (0, xe.jsx)(Lh, {
              id: "baf2ResizeTitle",
              title: `${dD}rxResizeConfirmTitle`,
              body: `${dD}rxResizeConfirmBody`,
              yes: `${dD}rxChangeSize`,
              cancel: () => {
                GJ(!1)
              },
              confirm: () => {
                GJ(!1), xJ(!0)
              }
            })]
          })]
        })
      })
    }
    class TD {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(JJ) {
        this.view = JJ;
        for (const cJ of this.listeners) cJ()
      }
      get() {
        return this.view
      }
      subscribe(JJ) {
        return this.listeners.add(JJ), () => {
          this.listeners.delete(JJ)
        }
      }
    }

    function CD(JJ) {
      let {
        commands: cJ,
        store: ZJ,
        power: UJ,
        water: eJ,
        reactor: XJ,
        battery: AJ,
        collider: qJ,
        terminal: jJ,
        quests: YJ,
        close: hJ,
        cn: DJ,
        askIslands: sJ,
        showCore: nJ,
        openSocial: GJ
      } = JJ;
      const {
        userContext: fJ
      } = (0, yA.d)(), xJ = KA.featureFlags.useSocialFeatures && fJ.isLoggedIn(), [rJ, vJ] = (0, FJ.useState)((() => ZJ.get()));
      (0, FJ.useEffect)((() => ZJ.subscribe((() => {
        vJ(ZJ.get())
      }))), [ZJ]);
      const mJ = "islands" === (null === rJ || void 0 === rJ ? void 0 : rJ.kind) ? rJ.backToCore : void 0;
      return (0, xe.jsxs)(WX.Provider, {
        value: cJ,
        children: ["core" === (null === rJ || void 0 === rJ ? void 0 : rJ.kind) && (0, xe.jsx)(ch, {
          view: rJ.core,
          close: hJ,
          askIslands: sJ
        }), "dropMap" === (null === rJ || void 0 === rJ ? void 0 : rJ.kind) && (0, xe.jsx)(eh, {
          message: rJ.dropMap,
          quests: YJ,
          close: hJ,
          cn: DJ
        }), "islands" === (null === rJ || void 0 === rJ ? void 0 : rJ.kind) && (0, xe.jsx)(Eh, {
          message: rJ.islands,
          arrivedAtMs: rJ.arrivedAtMs,
          close: mJ ? () => {
            nJ(mJ)
          } : hJ,
          cn: DJ,
          openSocial: xJ ? GJ : null
        }), "quests" === (null === rJ || void 0 === rJ ? void 0 : rJ.kind) && (0, xe.jsx)(vY, {
          store: YJ,
          close: hJ
        }), "transfer" === (null === rJ || void 0 === rJ ? void 0 : rJ.kind) && (0, xe.jsx)(Rj, {
          message: rJ.transfer,
          arrivedAtMs: rJ.arrivedAtMs,
          close: hJ,
          cn: DJ
        }), "power" === (null === rJ || void 0 === rJ ? void 0 : rJ.kind) && (0, xe.jsx)(EX, {
          store: UJ,
          close: hJ
        }), "water" === (null === rJ || void 0 === rJ ? void 0 : rJ.kind) && (0, xe.jsx)(AA, {
          store: eJ,
          close: hJ
        }), "reactor" === (null === rJ || void 0 === rJ ? void 0 : rJ.kind) && (0, xe.jsx)(OD, {
          store: XJ,
          close: hJ
        }), "battery" === (null === rJ || void 0 === rJ ? void 0 : rJ.kind) && (0, xe.jsx)(KD, {
          store: AJ,
          close: hJ
        }), "collider" === (null === rJ || void 0 === rJ ? void 0 : rJ.kind) && (0, xe.jsx)(qj, {
          store: qJ,
          close: hJ
        }), "terminal" === (null === rJ || void 0 === rJ ? void 0 : rJ.kind) && (0, xe.jsx)(gh, {
          store: jJ,
          close: hJ,
          send: JJ => {
            cJ.send(JJ)
          }
        })]
      })
    }
    var uD = ZJ(37482);

    function iD(JJ, cJ) {
      return JJ.distSq - cJ.distSq
    }
    class RD {
      constructor() {
        this.list = [], this.pool = []
      }
      add(JJ, cJ, ZJ, FJ) {
        let UJ = this.pool[this.list.length];
        UJ || (UJ = {
          x: 0,
          y: 0,
          distSq: 0,
          element: cJ,
          liftRem: ZJ,
          dot: FJ
        }, this.pool.push(UJ)), UJ.x = JJ.x, UJ.y = JJ.y, UJ.distSq = JJ.distSq, UJ.element = cJ, UJ.liftRem = ZJ, UJ.dot = FJ, this.list.push(UJ)
      }
    }
    class LD {
      constructor() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = JJ, this.sizes = new WeakMap, this.observer = new ResizeObserver((JJ => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const cJ of JJ) {
            const JJ = cJ.borderBoxSize[0];
            "dot" !== cJ.target.dataset.crowded && 0 !== JJ.inlineSize && 0 !== JJ.blockSize && this.sizes.set(cJ.target, {
              width: JJ.inlineSize,
              height: JJ.blockSize
            })
          }
        })), this.remPx = 16, this.ys = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.Im = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.Im)
      }
      observe(JJ) {
        this.observer.observe(JJ)
      }
      unobserve(JJ) {
        this.observer.unobserve(JJ)
      }
      run(JJ) {
        const cJ = JJ.list;
        cJ.sort(iD);
        const ZJ = this.pxPerVw,
          FJ = this.pxPerVh;
        this.ys.length = 0, this.hud && this.ys.push(...this.hud.boxes(performance.now()));
        for (const eJ of cJ) {
          var UJ;
          const JJ = this.sizes.get(eJ.element);
          let cJ = "no";
          if (JJ && JJ.width > 0) {
            const UJ = eJ.x * ZJ,
              XJ = eJ.y * FJ - eJ.liftRem * this.remPx;
            this.fit(UJ, XJ, JJ.width, JJ.height) || (cJ = eJ.dot && this.fit(UJ, XJ, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (UJ = eJ.element.dataset.crowded) && void 0 !== UJ ? UJ : "no") !== cJ && ("no" === cJ ? delete eJ.element.dataset.crowded : eJ.element.dataset.crowded = cJ), "hidden" !== cJ && (0, uD.c)(eJ.element, eJ.x, eJ.y)
        }
        cJ.length = 0
      }
      fit(JJ, cJ, ZJ, FJ) {
        const UJ = JJ - ZJ / 2,
          eJ = JJ + ZJ / 2,
          XJ = cJ - FJ,
          AJ = this.ys;
        for (let qJ = 0; qJ < AJ.length; qJ += 4)
          if (UJ < AJ[qJ + 1] - 2 && eJ > AJ[qJ] + 2 && XJ < AJ[qJ + 3] - 2 && cJ > AJ[qJ + 2] + 2) return !1;
        return AJ.push(UJ, eJ, XJ, cJ), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.Im)
      }
    }
    const aD = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class BD {
      constructor() {
        this.cards = aD.map((JJ => document.getElementsByClassName(JJ))), this.watched = aD.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(JJ) {
        JJ - this.refreshedAt > 1e3 && (this.refreshedAt = JJ, this.stale = !0);
        for (let ZJ = 0; ZJ < this.cards.length; ZJ++) {
          var cJ;
          const JJ = null !== (cJ = this.cards[ZJ][0]) && void 0 !== cJ ? cJ : null;
          JJ !== this.watched[ZJ] && this.watch(ZJ, JJ)
        }
        return this.stale && (this.stale = !1, this.measure()), this.list
      }
      dispose() {
        for (let JJ = 0; JJ < this.watched.length; JJ++) this.watch(JJ, null);
        this.sizes.disconnect(), window.removeEventListener("resize", this.onChange)
      }
      measure() {
        const JJ = this.list;
        JJ.length = 0;
        for (const cJ of this.watched) {
          if (!cJ || cJ.closest(".NoRoom")) continue;
          const ZJ = cJ.getBoundingClientRect();
          let FJ = ZJ.top,
            UJ = ZJ.bottom;
          if (cJ === this.watched[0] && this.hud) {
            const JJ = this.hud.getBoundingClientRect();
            FJ = Math.max(FJ, JJ.top), UJ = Math.min(UJ, JJ.bottom)
          }
          ZJ.width > 0 && UJ > FJ && JJ.push(ZJ.left, ZJ.right, FJ, UJ)
        }
      }
      watch(JJ, cJ) {
        const ZJ = this.watched[JJ];
        var FJ, UJ;
        (ZJ && this.sizes.unobserve(ZJ), this.watched[JJ] = cJ, this.stale = !0, cJ && this.sizes.observe(cJ), 0 === JJ) && (null === (FJ = this.hud) || void 0 === FJ || FJ.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (UJ = null === cJ || void 0 === cJ ? void 0 : cJ.closest(".Baf2QuestHud")) && void 0 !== UJ ? UJ : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    const tD = [0, 0, 0],
      oD = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function lD(JJ, cJ, ZJ, FJ, UJ, eJ) {
      let [XJ, AJ, qJ] = FJ;
      const jJ = (XJ + .5 - ZJ[0]) ** 2 + (AJ - ZJ[1]) ** 2 + (qJ + .5 - ZJ[2]) ** 2;
      let YJ = null;
      jJ <= eJ ** 2 && (tD[0] = XJ + .5, tD[1] = AJ + UJ, tD[2] = qJ + .5, YJ = cJ.projectWorldPosToViewport(tD));
      const hJ = null !== YJ && YJ.x > -5 && YJ.x < 105 && YJ.y > -5 && YJ.y < 105;
      return (0, uD.e)(JJ, !hJ), hJ ? (oD.x = YJ.x, oD.y = YJ.y, oD.distSq = jJ, oD) : null
    }
    class cs {
      constructor(JJ) {
        this.onElement = JJ, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(JJ) {
        const cJ = [];
        for (let ZJ = 0; ZJ + 4 < JJ.length; ZJ += 5) {
          const FJ = [JJ[ZJ], JJ[ZJ + 1], JJ[ZJ + 2]];
          cJ.push({
            key: FJ.join(","),
            pos: FJ,
            status: BF[JJ[ZJ + 3]],
            kind: mc[JJ[ZJ + 4]]
          })
        }
        this.markers = cJ, this.keys = new Set(cJ.map((JJ => {
          let {
            key: cJ
          } = JJ;
          return cJ
        }))), this.notify()
      }
      covers(JJ) {
        return this.keys.has(JJ)
      }
      get() {
        return this.markers
      }
      subscribe(JJ) {
        return this.listeners.add(JJ), () => {
          this.listeners.delete(JJ)
        }
      }
      bind(JJ) {
        let cJ = this.refs.get(JJ);
        return cJ || (cJ = cJ => {
          const ZJ = this.elements.get(JJ);
          var FJ, UJ;
          ZJ && (null === (FJ = this.onElement) || void 0 === FJ || FJ.call(this, ZJ, !1));
          cJ ? (this.elements.set(JJ, cJ), null === (UJ = this.onElement) || void 0 === UJ || UJ.call(this, cJ, !0)) : (this.elements.delete(JJ), this.refs.delete(JJ))
        }, this.refs.set(JJ, cJ)), cJ
      }
      onAfterRender(JJ, cJ, ZJ) {
        for (const FJ of this.markers) {
          const UJ = this.elements.get(FJ.key);
          if (!UJ) continue;
          const eJ = lD(UJ, JJ, cJ, FJ.pos, 1.05, 24);
          eJ && ZJ.add(eJ, UJ, .45, !0)
        }
      }
      notify() {
        for (const JJ of this.listeners) JJ()
      }
    }
    const Zs = {
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
    const Fs = (0, FJ.memo)((function(JJ) {
        let {
          status: cJ,
          kind: ZJ,
          bindRef: FJ
        } = JJ;
        const {
          t: UJ
        } = (0, vU.F)(), eJ = function(JJ, cJ) {
          var ZJ;
          if ("noFuel" === JJ) {
            var FJ, UJ;
            const JJ = null === (FJ = Sc[cJ]) || void 0 === FJ || null === (UJ = FJ.fuels) || void 0 === UJ ? void 0 : UJ.find((JJ => Bc.includes(JJ)));
            return null !== JJ && void 0 !== JJ ? JJ : Zs.noFuel
          }
          return void 0 !== (null === (ZJ = Sc[cJ]) || void 0 === ZJ ? void 0 : ZJ.cryoMade) ? "noOutlet" === JJ ? "Fluid Pipe" : "noInput" === JJ ? "Biomass" : Zs[JJ] : Zs[JJ]
        }(cJ, ZJ);
        return (0, xe.jsxs)("div", {
          className: GU()("Baf2StallMarker", cJ),
          ref: FJ,
          hidden: !0,
          children: [eJ && (0, xe.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, xe.jsx)(QU.d, {
              itemName: eJ,
              amount: 0
            })
          }), (0, xe.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === cJ ? "?" : "!"
          }), (0, xe.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: UJ(`buildAFactory2Game:stallTag_${cJ}`)
          })]
        })
      })),
      Us = (0, FJ.memo)((function(JJ) {
        let {
          controller: cJ
        } = JJ;
        const [ZJ, UJ] = (0, FJ.useState)((() => cJ.get()));
        return (0, FJ.useEffect)((() => (UJ(cJ.get()), cJ.subscribe((() => {
          UJ(cJ.get())
        })))), [cJ]), (0, xe.jsx)("div", {
          className: "Baf2StallMarkers",
          children: ZJ.map((JJ => (0, xe.jsx)(Fs, {
            status: JJ.status,
            kind: JJ.kind,
            bindRef: cJ.bind(JJ.key)
          }, JJ.key)))
        })
      })),
      es = qZ.m + 150;
    class Xs {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(JJ, cJ) {
        const ZJ = cJ - JJ;
        null === this.offset || ZJ < this.offset ? this.offset = ZJ : this.offset = Math.min(ZJ, this.offset + .02 * (cJ - this.sampledAt)), this.sampledAt = cJ
      }
      toLocal(JJ) {
        var cJ;
        return JJ + (null !== (cJ = this.offset) && void 0 !== cJ ? cJ : 0) + es
      }
    }
    var As = ZJ(37489);
    const qs = 15 * Math.PI / 180,
      Ys = Math.SQRT2,
      hs = [4, 2];

    function Ds(JJ, cJ) {
      const ZJ = [1 / 0, 1 / 0, 1 / 0],
        FJ = [-1 / 0, -1 / 0, -1 / 0];
      for (const qJ of JJ)
        for (let JJ = 0; JJ < 3; JJ++) ZJ[JJ] = Math.min(ZJ[JJ], qJ[JJ]), FJ[JJ] = Math.max(FJ[JJ], qJ[JJ]);
      const UJ = (ZJ[0] + FJ[0]) / 2,
        eJ = (ZJ[1] + FJ[1]) / 2,
        XJ = (ZJ[2] + FJ[2]) / 2;
      let AJ = 0;
      for (const qJ of JJ) AJ = Math.max(AJ, Math.hypot(qJ[0] - UJ, qJ[1] - eJ, qJ[2] - XJ));
      return {
        x: UJ,
        y: eJ,
        z: XJ,
        r: AJ + cJ
      }
    }

    function ss(JJ, cJ, ZJ) {
      const FJ = cJ.x - JJ.x,
        UJ = cJ.y - JJ.y,
        eJ = cJ.z - JJ.z,
        XJ = Math.sqrt(FJ * FJ + UJ * UJ + eJ * eJ);
      if (XJ <= cJ.r + 8) return 1;
      const AJ = cJ.r / XJ,
        qJ = Math.sqrt(1 - AJ * AJ),
        jJ = qJ < -JJ.cosHalf,
        YJ = (FJ * JJ.dx + UJ * JJ.dy + eJ * JJ.dz) / XJ;
      if (!jJ && YJ < JJ.cosHalf * qJ - JJ.sinHalf * AJ) return 0;
      const hJ = ZJ * Ys * JJ.frameMs * JJ.pxPerBlock / (XJ - cJ.r);
      for (let DJ = 0; DJ < hs.length; DJ++)
        if (hJ * hs[DJ] <= 1) return hs[DJ];
      return 1
    }

    function ns(JJ, cJ) {
      return {
        name: JJ,
        at: cJ,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const Gs = [0, 0, 0];

    function fs(JJ, cJ, ZJ) {
      let [, FJ, UJ, eJ, XJ, AJ] = cJ;
      const qJ = qZ.g * (null !== XJ && void 0 !== XJ ? XJ : 1),
        jJ = [];
      for (let sJ = 0; sJ < FJ.length; sJ += 3) jJ.push([FJ[sJ] + .5, FJ[sJ + 1] + .65, FJ[sJ + 2] + .5]);
      const YJ = [];
      for (let sJ = 0; sJ < jJ.length - 1; sJ++) {
        const [JJ, cJ] = [jJ[sJ], jJ[sJ + 1]];
        YJ.push([(JJ[0] + cJ[0]) / 2, (JJ[1] + cJ[1]) / 2, (JJ[2] + cJ[2]) / 2])
      }
      const hJ = jJ.slice(1, -1),
        DJ = new Uint8Array(hJ.length);
      for (const sJ of null !== AJ && void 0 !== AJ ? AJ : []) DJ[sJ >> 1] |= 1 & sJ ? 2 : 1;
      return {
        island: JJ,
        length: hJ.length,
        loop: eJ,
        cellsPerMs: qJ,
        edges: YJ,
        gq: hJ,
        bounds: Ds([...YJ, ...hJ], .3),
        changed: !0,
        culled: !1,
        hide: DJ,
        items: UJ.map((JJ => {
          let [cJ, FJ] = JJ;
          return ns(cJ, (0, qZ.D)(cJ, FJ, ZJ, qJ).at)
        }))
      }
    }

    function xs(JJ, cJ) {
      const {
        items: ZJ
      } = JJ;
      if (0 === ZJ.length) return;
      const FJ = JJ.length / JJ.cellsPerMs,
        UJ = Math.floor((cJ - ZJ[0].at) / FJ) - 1;
      if (UJ > 0)
        for (const eJ of ZJ) eJ.at += UJ * FJ
    }

    function rs(JJ, cJ) {
      const ZJ = Math.min(Math.floor(cJ), JJ.length - 1),
        FJ = JJ.hide[ZJ];
      return 0 !== FJ && 0 !== (FJ & (cJ - ZJ < .5 ? 1 : 2))
    }

    function vs(JJ, cJ) {
      const ZJ = Math.min(Math.floor(cJ), JJ.length - 1),
        FJ = cJ - ZJ,
        UJ = FJ < .5,
        eJ = UJ ? JJ.edges[ZJ] : JJ.gq[ZJ],
        XJ = UJ ? JJ.gq[ZJ] : JJ.edges[ZJ + 1],
        AJ = UJ ? 2 * FJ : 2 * FJ - 1;
      Gs[0] = eJ[0] + (XJ[0] - eJ[0]) * AJ, Gs[1] = eJ[1] + (XJ[1] - eJ[1]) * AJ, Gs[2] = eJ[2] + (XJ[2] - eJ[2]) * AJ
    }
    const ms = Math.PI / 4;
    class Qs {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new Xs, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.Im = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(JJ) {
        const cJ = performance.now();
        this.clock.sample(JJ.baf2BeltLinesAt, cJ), this.queue(JJ.baf2BeltLinesAt, JJ, 0, null, null, 0), this.applyDue(cJ)
      }
      onMoves(JJ) {
        const cJ = performance.now(),
          ZJ = JJ.baf2BeltMovesAt;
        this.clock.sample(ZJ, cJ);
        for (const [FJ, UJ, eJ, XJ] of JJ.baf2BeltMoveList) null === UJ ? this.queue(ZJ - eJ, null, FJ, null, null, null !== XJ && void 0 !== XJ ? XJ : 0) : this.queue(ZJ - eJ, null, FJ, UJ, null !== XJ && void 0 !== XJ ? XJ : null, 0);
        this.applyDue(cJ)
      }
      start(JJ) {
        this.pool = new As.d(JJ, {
          scale: .3,
          yaw: ms
        }, 64), this.Im(), window.addEventListener("resize", this.Im)
      }
      onAfterRender(JJ) {
        const {
          pool: cJ
        } = this;
        if (!cJ) return;
        const ZJ = performance.now(),
          FJ = ZJ - this.lastRenderAt;
        this.lastRenderAt = ZJ, FJ < 100 && (this.frameMs += .1 * (FJ - this.frameMs));
        const UJ = ZJ + this.frameMs;
        this.applyDue(UJ);
        const eJ = JJ.cameraPosition,
          XJ = cJ.follow(eJ);
        this.setView(JJ, eJ);
        const AJ = this.frame++;
        for (let qJ = 0; qJ < this.shown.length; qJ++) {
          const JJ = this.shown[qJ],
            ZJ = ss(this.view, JJ.bounds, JJ.cellsPerMs),
            FJ = JJ.culled && 0 !== ZJ;
          if (JJ.culled = 0 === ZJ, !XJ && !JJ.changed && !FJ && (0 === ZJ || (AJ + qJ) % ZJ !== 0)) continue;
          JJ.changed = !1, JJ.loop && (xs(JJ, UJ), (0, qZ.z)(JJ.items, JJ.length, UJ, JJ.cellsPerMs));
          let eJ = JJ.length;
          for (let AJ = 0; AJ < JJ.items.length; AJ++) {
            const ZJ = JJ.items[AJ],
              FJ = (0, qZ.H)(ZJ.at, eJ, UJ, JJ.cellsPerMs);
            if (eJ = FJ - qZ.q, rs(JJ, FJ)) {
              null === ZJ.kind || ZJ.hidden || (ZJ.kind.hide(ZJ.slot), ZJ.hidden = !0);
              continue
            }
            let qJ = ZJ.kind;
            if (null === qJ) {
              if (qJ = cJ.kindOf(ZJ.name), null === qJ) continue;
              ZJ.kind = qJ, ZJ.slot = qJ.take(), ZJ.hidden = !0, ZJ.drawn = NaN
            } else if (FJ === ZJ.drawn && !ZJ.hidden && !XJ) continue;
            vs(JJ, FJ), qJ.write(ZJ.slot, Gs[0], Gs[1], Gs[2]), ZJ.hidden = !1, ZJ.drawn = FJ
          }
        }
        cJ.commit()
      }
      dispose() {
        var JJ;
        window.removeEventListener("resize", this.Im), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (JJ = this.pool) || void 0 === JJ || JJ.dispose(), this.pool = null
      }
      setView(JJ, cJ) {
        const {
          cameraDir: ZJ,
          lastDir: FJ
        } = this, UJ = JJ.cameraDirection;
        for (let YJ = 0; YJ < 3; YJ++) FJ[YJ] = ZJ[YJ], ZJ[YJ] = UJ[YJ];
        const eJ = ZJ[0] * FJ[0] + ZJ[1] * FJ[1] + ZJ[2] * FJ[2],
          XJ = Number.isNaN(eJ) ? 0 : Math.acos(Math.min(1, Math.max(-1, eJ))),
          {
            width: AJ,
            height: qJ
          } = this,
          jJ = JJ.tanHalfFovX;
        ! function(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
          let AJ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          JJ.x = cJ[0], JJ.y = cJ[1], JJ.z = cJ[2], JJ.dx = ZJ[0], JJ.dy = ZJ[1], JJ.dz = ZJ[2];
          const qJ = Math.min(Math.PI, Math.atan(Math.sqrt(FJ * FJ + UJ * UJ)) + qs + AJ);
          JJ.cosHalf = Math.cos(qJ), JJ.sinHalf = Math.sin(qJ), JJ.pxPerBlock = eJ / (2 * UJ), JJ.frameMs = XJ
        }(this.view, cJ, ZJ, jJ, jJ * qJ / AJ, qJ * window.devicePixelRatio, this.frameMs, XJ)
      }
      queue(JJ, cJ, ZJ, FJ, UJ, eJ) {
        const XJ = Math.max(this.clock.toLocal(JJ), this.lastPendingAt);
        this.lastPendingAt = XJ, this.pending.push({
          at: XJ,
          lines: cJ,
          line: ZJ,
          name: FJ,
          pos: UJ,
          idx: eJ
        })
      }
      applyDue(JJ) {
        const {
          pending: cJ
        } = this;
        for (; this.pendingHead < cJ.length && cJ[this.pendingHead].at <= JJ;) {
          const JJ = cJ[this.pendingHead++];
          if (JJ.lines) this.applyLines(JJ.lines, JJ.at), JJ.lines = null;
          else {
            const cJ = this.lines.get(JJ.line);
            cJ && this.applyMove(cJ, JJ, JJ.at)
          }
        }
        this.pendingHead === cJ.length ? (cJ.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > cJ.length && (cJ.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(JJ, cJ) {
        this.clearIsland(JJ.baf2BeltIsland);
        for (const ZJ of JJ.baf2BeltLineList) this.lines.set(ZJ[0], fs(JJ.baf2BeltIsland, ZJ, cJ));
        this.shown = [...this.lines.values()]
      }
      applyMove(JJ, cJ, ZJ) {
        let {
          name: FJ,
          pos: UJ,
          idx: eJ
        } = cJ;
        JJ.changed = !0, JJ.loop && (xs(JJ, ZJ), (0, qZ.z)(JJ.items, JJ.length, ZJ, JJ.cellsPerMs)), null !== FJ && null !== UJ ? (0, qZ.A)(JJ.items, JJ.length, ns(FJ, ZJ), UJ, ZJ, JJ.cellsPerMs) : null !== FJ ? JJ.items.push(ns(FJ, ZJ)) : JJ.items.length > eJ && this.release((0, qZ.L)(JJ.items, JJ.length, ZJ, JJ.cellsPerMs, eJ))
      }
      clearIsland(JJ) {
        for (const [cJ, ZJ] of this.lines)
          if (ZJ.island === JJ) {
            for (const JJ of ZJ.items) this.release(JJ);
            this.lines.delete(cJ)
          }
      }
      release(JJ) {
        null !== JJ.kind && (JJ.kind.release(JJ.slot), JJ.kind = null, JJ.slot = -1, JJ.hidden = !0, JJ.drawn = NaN)
      }
    }
    var Es = ZJ(35658),
      Vs = ZJ(37499);

    function Ks(JJ) {
      let {
        depth: cJ,
        store: ZJ,
        t: UJ
      } = JJ;
      const eJ = function(JJ) {
        const [cJ, ZJ] = (0, FJ.useState)(JJ.lastPlayerY());
        return (0, Lj.i)(MU, ZJ), (0, FJ.useEffect)((() => {
          ZJ(JJ.lastPlayerY())
        }), [JJ]), cJ
      }(ZJ);
      if (null === eJ) return null;
      const [XJ, AJ] = cJ, qJ = eJ > XJ ? XJ : null !== AJ && eJ < AJ ? AJ : null, jJ = {
        y: De(eJ),
        target: null === qJ ? "" : De(qJ)
      };
      return (0, xe.jsx)("span", {
        className: GU()("Baf2QuestDepth", {
          Reached: null === qJ
        }),
        children: UJ(`${oj}${null===qJ?"questDepthReached":"questDepth"}`, jJ)
      })
    }

    function ys(JJ) {
      let {
        also: cJ,
        view: ZJ,
        t: FJ
      } = JJ;
      return (0, xe.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, xe.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, xe.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, xe.jsx)("strong", {
            children: FJ(`${oj}questAlsoDownHere`)
          }), (0, xe.jsx)("span", {
            className: "Baf2QuestChips",
            children: cJ.map((JJ => {
              let [cJ, UJ, eJ, XJ] = JJ;
              return (0, xe.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": FJ(`${oj}questAlsoItem`, {
                  item: JY(FJ, ZJ.itemNames[cJ], cJ),
                  have: String(UJ),
                  need: String(eJ)
                }),
                children: [(0, xe.jsx)(FY, {
                  item: cJ
                }), (0, xe.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${UJ}/${eJ}`
                }), null !== XJ && (0, xe.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: FJ(`${oj}questAlsoDepth`, {
                    y: De(XJ)
                  })
                })]
              }, cJ)
            }))
          })]
        })]
      })
    }
    var Ss = ZJ(2900);

    function Is(JJ) {
      let {
        expanded: cJ,
        inventoryOpen: ZJ,
        children: UJ
      } = JJ;
      const eJ = (0, FJ.useRef)(null);
      return (0, FJ.useEffect)((() => {
        const JJ = eJ.current,
          cJ = null === JJ || void 0 === JJ ? void 0 : JJ.closest(".RightElements"),
          FJ = null === JJ || void 0 === JJ ? void 0 : JJ.firstElementChild;
        if (!JJ || !cJ || !FJ) return;
        return (0, Vs.d)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [cJ, FJ], (() => {
          const UJ = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === UJ.length) return;
          const eJ = Math.max(...UJ.map((JJ => JJ.getBoundingClientRect().bottom))),
            XJ = cJ.getBoundingClientRect(),
            AJ = ZJ ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (AJ) {
            const cJ = parseFloat(getComputedStyle(FJ).marginLeft) + parseFloat(getComputedStyle(FJ).marginRight),
              ZJ = XJ.right - AJ.getBoundingClientRect().right - 8 - cJ;
            JJ.style.setProperty("--baf2-quest-room", `${ZJ}px`), JJ.classList.toggle("NoRoom", ZJ < 150)
          } else JJ.style.removeProperty("--baf2-quest-room"), JJ.classList.remove("NoRoom");
          const qJ = eJ - XJ.top + 8,
            jJ = function(JJ, cJ, ZJ) {
              const FJ = cJ.getBoundingClientRect(),
                UJ = JJ.getBoundingClientRect(),
                eJ = (0, Ss.g)(UJ.left, UJ.right, FJ.top + ZJ);
              if (null !== eJ && eJ < FJ.bottom) return eJ - FJ.top;
              return FJ.height - (parseFloat(getComputedStyle(cJ).paddingBottom) || 0)
            }(JJ, cJ, qJ) - 8,
            YJ = window.innerHeight / 2 - XJ.top,
            {
              top: hJ,
              maxHeight: DJ
            } = function(JJ, cJ, ZJ, FJ, UJ) {
              const eJ = Math.min(ZJ, Math.max(0, cJ - JJ)),
                XJ = UJ ? JJ : Math.max(JJ, Math.min(FJ - eJ / 2, cJ - eJ));
              return {
                top: XJ,
                maxHeight: Math.max(0, cJ - XJ)
              }
            }(qJ, jJ, function(JJ) {
              const cJ = JJ.firstElementChild,
                ZJ = cJ ? cJ.scrollHeight - cJ.clientHeight : 0;
              return JJ.getBoundingClientRect().height + Math.max(0, ZJ)
            }(FJ), YJ, Ge());
          JJ.style.top = `${hJ}px`, JJ.style.maxHeight = `${DJ}px`
        }))
      }), [ZJ]), (0, xe.jsx)("div", {
        ref: eJ,
        className: GU()("Baf2QuestHud", {
          Expanded: cJ
        }),
        children: UJ
      })
    }

    function Ms(JJ) {
      let {
        amount: cJ,
        t: ZJ
      } = JJ;
      return (0, xe.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, xe.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, xe.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: ZJ(`${oj}questStepsDone`, {
            amount: String(cJ)
          })
        })]
      })
    }

    function bs(JJ) {
      let {
        pulse: cJ
      } = JJ;
      return 0 === cJ ? null : (0, xe.jsx)("span", {
        className: "Baf2QuestTrackerPulse",
        "aria-hidden": "true"
      }, cJ)
    }

    function ws(JJ) {
      var cJ;
      let {
        store: ZJ
      } = JJ;
      const UJ = (0, Lj.m)(IU, ZJ.get()),
        [eJ, XJ] = (0, FJ.useState)(!1),
        {
          t: AJ
        } = (0, vU.F)(),
        qJ = function() {
          const [JJ, cJ] = (0, FJ.useState)(Ge);
          return (0, FJ.useEffect)((() => (cJ(Ge()), fe(cJ))), []), JJ
        }(),
        {
          openInGameMenuName: jJ,
          openEverythingMenuName: YJ
        } = (0, DU.j)(["openInGameMenuName", "openEverythingMenuName"]),
        hJ = "inventory" === jJ && null === YJ,
        DJ = null !== jJ && !hJ || null !== YJ;
      if (! function(JJ) {
          return null !== JJ.name || null !== JJ.side
        }(UJ) || DJ || "off" === UJ.tutorial) return null;
      const sJ = PU(UJ.rows),
        nJ = sJ.filter((JJ => JJ.done)).length,
        GJ = function(JJ, cJ) {
          const ZJ = dU(JJ);
          let FJ = 0;
          return JJ.filter(((JJ, UJ) => !!JJ.justFinished || !(JJ.done || UJ < ZJ || FJ > cJ) && (FJ++, !0)))
        }(UJ.rows, qJ ? 0 : 2),
        fJ = qJ ? GJ : function(JJ, cJ) {
          const ZJ = cJ.filter((JJ => !JJ.justFinished));
          if (ZJ.length < 2) return [...cJ];
          const FJ = JJ.indexOf(ZJ[0]),
            UJ = JJ.indexOf(ZJ[ZJ.length - 1]),
            eJ = new Set(PU(JJ));
          return JJ.filter(((JJ, ZJ) => cJ.includes(JJ) || JJ.done && eJ.has(JJ) && ZJ > FJ && ZJ < UJ))
        }(UJ.rows, GJ),
        xJ = eJ ? UJ.rows : fJ,
        rJ = eJ || qJ ? [] : function(JJ, cJ) {
          const ZJ = new Array(cJ.length + 1).fill(0),
            FJ = new Set(PU(JJ));
          let UJ = 0;
          for (const eJ of JJ) UJ < cJ.length && eJ === cJ[UJ] ? UJ++ : eJ.done && FJ.has(eJ) && ZJ[UJ]++;
          return ZJ
        }(UJ.rows, fJ),
        vJ = eJ || fJ.length < UJ.rows.length || null !== UJ.reward,
        mJ = HU(UJ),
        QJ = mJ ? AJ(`${oj}questLineComplete`) : UJ.tier ? XY(AJ, UJ.tier) : AJ(`${oj}currentQuest`),
        EJ = function(JJ) {
          var cJ, ZJ;
          if (HU(JJ)) return null;
          const FJ = null === (cJ = JJ.chapters) || void 0 === cJ ? void 0 : cJ.find((cJ => {
            let [ZJ] = cJ;
            return ZJ === JJ.tier
          }));
          if (!FJ) return null;
          const UJ = FJ[1].filter((JJ => !JJ[4]));
          if (0 === UJ.length) return null;
          const eJ = null === (ZJ = JJ.name) || void 0 === ZJ ? void 0 : ZJ[0],
            XJ = JJ => UJ.findIndex((cJ => cJ[0] === eJ && (!JJ || !cJ[3]))),
            AJ = XJ(!0),
            qJ = AJ >= 0 ? AJ : XJ(!1);
          if (qJ >= 0) return [qJ + 1, UJ.length];
          const jJ = UJ.filter((JJ => JJ[3])).length;
          return [Math.min(jJ + 1, UJ.length), UJ.length]
        }(UJ);
      return (0, xe.jsx)(Es.f, {
        placement: "topRight",
        children: (0, xe.jsx)(Is, {
          expanded: eJ,
          inventoryOpen: hJ,
          children: (0, xe.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: lj,
            children: [null !== UJ.name && (0, xe.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [(0, xe.jsx)(bs, {
                pulse: UJ.pulse
              }), (0, xe.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, xe.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [QJ, EJ && (0, xe.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": AJ(`${oj}questPlaceLabel`, {
                      n: String(EJ[0]),
                      total: String(EJ[1])
                    }),
                    children: AJ(`${oj}questPlace`, {
                      n: String(EJ[0]),
                      total: String(EJ[1])
                    })
                  }), UJ.tier && UJ.core && !mJ && (0, xe.jsx)(AY, {
                    core: UJ.core,
                    t: AJ
                  })]
                })
              }), (0, xe.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: AJ(`${oj}${UJ.name[0]}`, cY(UJ.name[1]))
              }), (sJ.length > 1 || vJ) && (0, xe.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [sJ.length > 1 && (0, xe.jsx)(qY, {
                  rows: sJ,
                  t: AJ
                }), vJ && (0, xe.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": eJ,
                  onClick: () => {
                    XJ(!eJ)
                  },
                  children: [(0, xe.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: AJ(`${oj}questStepsToggle`, {
                      done: String(nJ),
                      total: String(sJ.length)
                    })
                  }), (0, xe.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: eJ ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, xe.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [xJ.map(((JJ, cJ) => {
                  var eJ;
                  const XJ = JJ.current && UJ.depth;
                  return (0, xe.jsxs)(FJ.Fragment, {
                    children: [(null !== (eJ = rJ[cJ]) && void 0 !== eJ ? eJ : 0) > 0 && (0, xe.jsx)(Ms, {
                      amount: rJ[cJ],
                      t: AJ
                    }), (0, xe.jsx)(jY, {
                      row: JJ,
                      view: UJ,
                      t: AJ,
                      extra: XJ && (0, xe.jsx)(Ks, {
                        depth: XJ,
                        store: ZJ,
                        t: AJ
                      })
                    })]
                  }, JJ.id)
                })), (null !== (cJ = rJ[xJ.length]) && void 0 !== cJ ? cJ : 0) > 0 && (0, xe.jsx)(Ms, {
                  amount: rJ[xJ.length],
                  t: AJ
                }), UJ.also.length > 0 && (0, xe.jsx)(ys, {
                  also: UJ.also,
                  view: UJ,
                  t: AJ
                })]
              }), eJ && UJ.reward && (0, xe.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [AJ(`${oj}questReward`), (0, xe.jsx)(FY, {
                  item: UJ.reward
                }), JY(AJ, UJ.itemNames[UJ.reward], UJ.reward)]
              })]
            }), UJ.side && (0, xe.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [WU(UJ, Date.now()) && (0, xe.jsx)(bs, {
                pulse: UJ.sideCameUpAt
              }), (0, xe.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: AJ(`${oj}questSide`)
              }), (0, xe.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: AJ(`${oj}${UJ.side.name[0]}`, cY(UJ.side.name[1]))
              }), (0, xe.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, xe.jsx)(jY, {
                  row: UJ.side.row,
                  view: UJ,
                  t: AJ
                })
              })]
            })]
          })
        })
      })
    }
    const Ws = "baf2ToastView";
    class gs {
      constructor() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = JJ, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: JJ,
          holdMs: cJ
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const JJ = this.dropCovered();
          JJ && this.show(JJ.message, JJ.holdMs)
        }), 250));
        const ZJ = this.dropCovered();
        null !== ZJ && (ZJ.holdMs > 0 || "baf2ToastCelebrate" === ZJ.message.baf2ToastStyle) && "baf2ToastCelebrate" !== JJ.baf2ToastStyle && this.show(ZJ.message, ZJ.holdMs);
        const FJ = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== JJ.baf2ToastStyle && FJ > 0) return this.pending = {
          message: JJ,
          holdMs: cJ
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const JJ = this.pending;
          this.pending = null, JJ && this.present(JJ.message, JJ.holdMs)
        }), FJ));
        this.present(JJ, cJ)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(JJ, cJ) {
        this.clearTimers(), this.pending = null;
        const ZJ = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: JJ.baf2ToastText,
          style: JJ.baf2ToastStyle,
          swapped: ZJ,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === JJ.baf2ToastStyle ? 1500 : cJ), this.Uf();
        const FJ = Math.min(8e3, Math.max(1e3, JJ.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.cn()
        }), FJ)
      }
      cn() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.Uf(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.Uf()
        }), 200))
      }
      clearTimers() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), null !== this.pendingTimer && (clearTimeout(this.pendingTimer), this.pendingTimer = null)
      }
      dropCovered() {
        null !== this.coveredTimer && (clearInterval(this.coveredTimer), this.coveredTimer = null);
        const JJ = this.covering;
        return this.covering = null, JJ
      }
      Uf() {
        yU.i.Uf(Ws, this.view, !0)
      }
    }
    var Hs = ZJ(60);
    const Ps = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function ks(JJ) {
      let {
        store: cJ
      } = JJ;
      const ZJ = (0, Lj.m)(Ws, cJ.get()),
        {
          openInGameMenuName: FJ,
          openEverythingMenuName: UJ
        } = (0, DU.j)(["openInGameMenuName", "openEverythingMenuName"]),
        eJ = ZJ && (0, xe.jsxs)("div", {
          className: GU()("Baf2Toast", Ps[ZJ.style], {
            Swapped: ZJ.swapped,
            Leaving: ZJ.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === ZJ.style && (0, xe.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, xe.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, xe.jsx)(EU.d, {
              text: ZJ.text
            })
          })]
        }, ZJ.id);
      return null !== FJ && null === UJ ? (0, Hs.createPortal)((0, xe.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: eJ
      }), document.body) : (0, xe.jsx)(Es.f, {
        children: eJ
      })
    }
    const ps = "baf2AreaView";
    class ds {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.hj = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.hj = null
      }
      arrive(JJ, cJ) {
        cJ && function(JJ) {
          return "home" === JJ.baf2AreaPlace && void 0 !== JJ.baf2AreaNameText
        }(JJ) ? this.hj = JJ : this.show(JJ)
      }
      release() {
        const JJ = this.hj;
        null !== JJ && this.show(JJ)
      }
      show(JJ) {
        this.clearTimer(), this.hj = null;
        const cJ = void 0 === JJ.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: JJ,
          ms: cJ
        }, this.Uf(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.Uf()
        }), cJ)
      }
      dispose() {
        this.clearTimer(), this.hj = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      Uf() {
        yU.i.Uf(ps, this.view, !0)
      }
    }

    function zs(JJ) {
      var cJ;
      let {
        store: ZJ
      } = JJ;
      const {
        t: FJ
      } = (0, vU.F)(), UJ = (0, Lj.m)(ps, ZJ.get());
      if (!UJ) return null;
      const {
        area: eJ
      } = UJ, XJ = eJ.baf2AreaResetMinutes;
      return (0, xe.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": eJ.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${UJ.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, xe.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), eJ.baf2AreaHeading && (0, xe.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: FJ(eJ.baf2AreaHeading)
        }), (0, xe.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (cJ = eJ.baf2AreaNameText) && void 0 !== cJ ? cJ : FJ(eJ.baf2AreaName)
        }), eJ.baf2AreaNote && (0, xe.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: FJ(eJ.baf2AreaNote)
        }), void 0 !== XJ && (0, xe.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: FJ("buildAFactory2Game:areaWildsReset", {
            time: se(FJ, 60 * XJ)
          })
        })]
      }, UJ.id)
    }
    const Ns = "baf2GearGauge";
    class Os {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      Rm(JJ) {
        var cJ;
        if (this.clearLinger(), null === JJ.gearPowerKind) return void this.set(null);
        const ZJ = "jetpack" === JJ.gearPowerKind && (FJ = JJ.gearChargeState, UJ = JJ.gearCharge, "flying" === FJ || "charging" === FJ || "outOfCharge" === FJ || "ceiling" === FJ || "offPlot" === FJ || "noPower" === FJ && UJ <= 0);
        var FJ, UJ;
        const eJ = !0 === (null === (cJ = this.view) || void 0 === cJ ? void 0 : cJ.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          XJ = ZJ || "jetpack" === JJ.gearPowerKind && eJ;
        this.set({
          gauge: JJ,
          jetShown: XJ
        }), XJ && !ZJ && (this.lingerTimer = setTimeout((() => {
          this.lingerTimer = null, this.view && this.set({
            ...this.view,
            jetShown: !1
          })
        }), 1500))
      }
      dispose() {
        this.clearLinger(), this.view = null
      }
      set(JJ) {
        this.view = JJ, yU.i.Uf(Ns, JJ, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const Ts = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function Cs(JJ) {
      let {
        store: cJ
      } = JJ;
      const ZJ = (0, Lj.m)(Ns, cJ.get());
      return ZJ ? "jetpack" === ZJ.gauge.gearPowerKind ? (0, xe.jsx)(us, {
        view: ZJ
      }) : (0, xe.jsx)(is, {
        gauge: ZJ.gauge
      }) : null
    }

    function us(JJ) {
      let {
        view: cJ
      } = JJ;
      const {
        t: ZJ
      } = (0, vU.F)(), {
        gauge: FJ
      } = cJ, UJ = FJ.gearChargeMax > 0 ? Math.max(0, Math.min(1, FJ.gearCharge / FJ.gearChargeMax)) : 0, eJ = Ts[FJ.gearChargeState], XJ = eJ ? ZJ(eJ) : null;
      return (0, xe.jsxs)("div", {
        className: GU()("Baf2JetArc", {
          Shown: cJ.jetShown,
          Low: UJ < .2,
          Warm: UJ >= .2 && UJ < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - UJ)
        },
        "aria-hidden": !cJ.jetShown,
        children: [(0, xe.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, xe.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: Rs,
            pathLength: 100
          }), (0, xe.jsx)("path", {
            className: "Baf2JetArcFill",
            d: Rs,
            pathLength: 100
          })]
        }), (0, xe.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * UJ), "%"]
        }), XJ && (0, xe.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: XJ
        })]
      })
    }

    function is(JJ) {
      let {
        gauge: cJ
      } = JJ;
      const {
        t: ZJ
      } = (0, vU.F)(), FJ = function(JJ, cJ) {
        switch (cJ.gearPowerKind) {
          case "skyPack":
            return JJ("buildAFactory2Game:gearSkyPack", {
              charge: cJ.gearCharge,
              max: cJ.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return JJ("buildAFactory2Game:gearIslandDraw", {
              power: tJ(cJ.gearIslandPower),
              cost: tJ(cJ.gearCostPerUse)
            });
          case "barrier":
            return JJ("buildAFactory2Game:gearBarrier", {
              shield: Math.round(cJ.gearCharge),
              max: cJ.gearChargeMax,
              power: tJ(cJ.gearIslandPower)
            });
          default:
            return null
        }
      }(ZJ, cJ);
      return null === FJ ? null : (0, xe.jsx)(Es.f, {
        children: (0, xe.jsx)("div", {
          className: GU()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === cJ.gearChargeState || "outOfCharge" === cJ.gearChargeState
          }),
          role: "status",
          children: FJ
        })
      })
    }
    const Rs = (() => {
      const JJ = JJ => {
        const cJ = JJ * Math.PI / 180;
        return `${(40*Math.cos(cJ)).toFixed(2)} ${(40*Math.sin(cJ)).toFixed(2)}`
      };
      return `M ${JJ(160)} A 40 40 0 1 1 ${JJ(380)}`
    })();
    class Ls {
      constructor(JJ) {
        this.onElement = JJ, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      Rm(JJ) {
        let cJ = JJ.baf2LabelsReset || JJ.baf2LabelsIsland !== this.island;
        cJ && (this.labels.clear(), this.island = JJ.baf2LabelsIsland);
        for (const [ZJ, FJ, UJ, eJ, XJ] of JJ.baf2LabelsList) {
          const JJ = `${ZJ},${FJ},${UJ}`,
            AJ = this.labels.get(JJ);
          null === eJ ? cJ = this.labels.delete(JJ) || cJ : AJ && AJ.item === eJ && (AJ.count === XJ || AJ.count >= 0 && XJ >= 0) ? AJ.count !== XJ && (AJ.count = XJ, this.writeCount(JJ, XJ)) : (this.labels.set(JJ, {
            key: JJ,
            pos: [ZJ, FJ, UJ],
            item: eJ,
            count: XJ
          }), this.writeCount(JJ, XJ), cJ = !0)
        }
        if (this.changes++, cJ) {
          this.snapshot = [...this.labels.values()];
          for (const JJ of this.listeners) JJ()
        }
      }
      bindCount(JJ) {
        const cJ = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${JJ}`;
        let ZJ = this.countRefs.get(cJ);
        return ZJ || (ZJ = ZJ => {
          var FJ, UJ;
          ZJ ? (this.countElements.set(cJ, ZJ), this.writeCount(JJ, null !== (FJ = null === (UJ = this.labels.get(JJ)) || void 0 === UJ ? void 0 : UJ.count) && void 0 !== FJ ? FJ : -1)) : (this.countElements.delete(cJ), this.countRefs.delete(cJ))
        }, this.countRefs.set(cJ, ZJ)), ZJ
      }
      setCountWords(JJ) {
        this.countWords = JJ;
        for (const [cJ, ZJ] of this.labels) this.writePart(`words|${cJ}`, JJ(ZJ.count), ZJ.count)
      }
      writeCount(JJ, cJ) {
        this.writePart(`bare|${JJ}`, he(cJ), cJ), this.countElements.has(`words|${JJ}`) && this.writePart(`words|${JJ}`, this.countWords(cJ), cJ)
      }
      writePart(JJ, cJ, ZJ) {
        const FJ = this.countElements.get(JJ);
        if (!FJ || ZJ < 0) return;
        const UJ = FJ.firstChild;
        UJ && 3 === UJ.nodeType && !UJ.nextSibling ? UJ.nodeValue !== cJ && (UJ.nodeValue = cJ) : FJ.textContent !== cJ && (FJ.textContent = cJ)
      }
      list() {
        return this.snapshot
      }
      at(JJ) {
        return this.labels.get(`${JJ[0]},${JJ[1]},${JJ[2]}`)
      }
      version() {
        return this.changes
      }
      subscribe(JJ) {
        return this.listeners.add(JJ), () => {
          this.listeners.delete(JJ)
        }
      }
      bind(JJ) {
        let cJ = this.refs.get(JJ);
        return cJ || (cJ = cJ => {
          const ZJ = this.elements.get(JJ);
          var FJ, UJ;
          ZJ && (null === (FJ = this.onElement) || void 0 === FJ || FJ.call(this, ZJ, !1));
          cJ ? (this.elements.set(JJ, cJ), null === (UJ = this.onElement) || void 0 === UJ || UJ.call(this, cJ, !0)) : (this.elements.delete(JJ), this.refs.delete(JJ))
        }, this.refs.set(JJ, cJ)), cJ
      }
      onAfterRender(JJ, cJ, ZJ, FJ) {
        for (const UJ of this.snapshot) {
          const eJ = this.elements.get(UJ.key);
          if (!eJ) continue;
          if (FJ(UJ.key)) {
            (0, uD.e)(eJ, !0);
            continue
          }
          const XJ = lD(eJ, JJ, cJ, UJ.pos, 1.1, 24);
          XJ && ZJ.add(XJ, eJ, 0, !1)
        }
      }
    }
    const as = (0, FJ.memo)((function(JJ) {
        let {
          item: cJ
        } = JJ;
        return (0, xe.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, xe.jsx)(QU.d, {
            itemName: cJ,
            amount: 0
          })
        })
      })),
      Bs = (0, FJ.memo)((function(JJ) {
        let {
          label: cJ,
          bindRef: ZJ,
          countRef: FJ,
          wordsRef: UJ
        } = JJ;
        return (0, xe.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: ZJ,
          hidden: !0,
          children: [(0, xe.jsx)(as, {
            item: cJ.item
          }), cJ.count >= 0 && (0, xe.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, xe.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: UJ
            }), (0, xe.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: FJ
            })]
          })]
        })
      })),
      ts = (0, FJ.memo)((function(JJ) {
        let {
          store: cJ
        } = JJ;
        const {
          t: ZJ
        } = (0, vU.F)(), [UJ, eJ] = (0, FJ.useState)((() => cJ.list()));
        return (0, FJ.useEffect)((() => (eJ(cJ.list()), cJ.subscribe((() => {
          eJ(cJ.list())
        })))), [cJ]), (0, FJ.useEffect)((() => {
          cJ.setCountWords((JJ => ZJ("buildAFactory2Game:labelSiloCount", {
            count: he(JJ)
          })))
        }), [cJ, ZJ]), (0, xe.jsx)("div", {
          className: "Baf2IslandLabels",
          children: UJ.map((JJ => -2 === JJ.count ? null : (0, xe.jsx)(Bs, {
            label: JJ,
            bindRef: cJ.bind(JJ.key),
            countRef: cJ.bindCount(JJ.key),
            wordsRef: cJ.bindCount(JJ.key, "words")
          }, JJ.key)))
        })
      })),
      os = {
        read: () => !0,
        write: () => {}
      };

    function ls(JJ) {
      return `${JJ[0]},${JJ[1]},${JJ[2]}`
    }

    function Jn(JJ) {
      let [cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ, YJ, hJ, DJ] = JJ;
      const sJ = void 0 === hJ || void 0 === DJ ? function(JJ) {
        return [Math.floor((JJ - 1) / 2), 0]
      }(eJ) : [hJ, DJ];
      return {
        kind: 0 === qJ ? "reactor" : "battery",
        box: PZ([cJ, ZJ, FJ], UJ, eJ, XJ, AJ, sJ),
        formed: 1 === jJ,
        level: YJ
      }
    }
    class cn {
      constructor() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : os;
        this.guideSetting = JJ, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = JJ.read()
      }
      Rm(JJ) {
        var cJ;
        const ZJ = new Map;
        for (const FJ of JJ.baf2RxPlanList) {
          const JJ = Jn(FJ);
          ZJ.set(ls(JJ.box.ctrl), JJ)
        }
        this.plans = ZJ, this.layouts = new Map((null !== (cJ = JJ.baf2RxLayouts) && void 0 !== cJ ? cJ : []).map((JJ => {
          let [cJ, ZJ, FJ, UJ] = JJ;
          return [ls([cJ, ZJ, FJ]), UJ]
        }))), this.predicted.clear(), JJ.baf2RxFormedAt && (this.formed = {
          ctrl: JJ.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const FJ of [...this.startersOff]) {
          const JJ = ZJ.get(FJ);
          JJ && !JJ.formed || this.startersOff.delete(FJ)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((JJ => this.planByKey(JJ)))
      }
      planAt(JJ) {
        return this.planByKey(ls(JJ))
      }
      predictSize(JJ, cJ) {
        this.predicted.set(ls(JJ), cJ), this.changed()
      }
      unpredict(JJ) {
        this.predicted.delete(ls(JJ)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(JJ) {
        var cJ;
        const ZJ = ls(JJ);
        return this.predicted.has(ZJ) ? null : null !== (cJ = this.layouts.get(ZJ)) && void 0 !== cJ ? cJ : null
      }
      showsStarter(JJ) {
        return !this.startersOff.has(ls(JJ))
      }
      setStarter(JJ, cJ) {
        const ZJ = ls(JJ);
        cJ ? this.startersOff.delete(ZJ) : this.startersOff.add(ZJ), this.changed()
      }
      guideOn() {
        return this.guide
      }
      setGuide(JJ) {
        this.guide = JJ, this.guideSetting.write(JJ), this.changed()
      }
      getVersion() {
        return this.version
      }
      subscribe(JJ) {
        return this.listeners.add(JJ), () => {
          this.listeners.delete(JJ)
        }
      }
      dispose() {
        this.plans.clear(), this.predicted.clear(), this.startersOff.clear(), this.layouts.clear(), this.listeners.clear(), this.formed = null
      }
      planByKey(JJ) {
        const cJ = this.plans.get(JJ);
        if (!cJ) return null;
        const ZJ = this.predicted.get(JJ);
        return ZJ ? {
          ...cJ,
          box: pZ(cJ.box, cJ.kind, ZJ[0], ZJ[1], ZJ[2])
        } : cJ
      }
      changed() {
        this.version++;
        for (const JJ of this.listeners) JJ()
      }
    }
    var Zn = ZJ(157);
    const Fn = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function Un(JJ, cJ, ZJ, FJ) {
      const UJ = JJ.length / 3;
      for (let eJ = 0; eJ < Fn.length / 3; eJ++) JJ.push(Fn[3 * eJ] * FJ[0] / 2 + ZJ[0], Fn[3 * eJ + 1] * FJ[1] / 2 + ZJ[1], Fn[3 * eJ + 2] * FJ[2] / 2 + ZJ[2]);
      for (let eJ = UJ; eJ < UJ + 24; eJ += 4) cJ.push(eJ, eJ + 1, eJ + 2, eJ, eJ + 2, eJ + 3)
    }

    function en(JJ, cJ, ZJ) {
      const FJ = cJ[0][0],
        UJ = [],
        eJ = [];
      for (const [XJ, AJ] of cJ) Un(UJ, eJ, [XJ[0] - FJ[0], XJ[1] - FJ[1], XJ[2] - FJ[2]], AJ);
      return JJ.createGameMesh({
        positions: UJ,
        indices: eJ
      }, ZJ, FJ)
    }

    function Xn(JJ, cJ) {
      const ZJ = JJ.w - 2,
        FJ = JJ.d - 2;
      return 1 === function(JJ, cJ, ZJ, FJ) {
        const [UJ, eJ, XJ] = JJ;
        if (Number(UJ <= 2) + Number(eJ <= 2) + Number(XJ <= 2) >= 2) return function(JJ, cJ, ZJ) {
          return (JJ + cJ + ZJ) % 2 === 0 ? 1 : 3
        }(cJ, ZJ, FJ);
        const [AJ, qJ] = UJ >= eJ && UJ >= XJ ? [ZJ, FJ] : eJ >= XJ ? [cJ, FJ] : [cJ, ZJ];
        return AJ % 2 === 0 && qJ % 2 === 0 ? 1 : 3
      }([ZJ, JJ.h - 2, FJ], cJ % ZJ, Math.floor(cJ / (ZJ * FJ)), Math.floor(cJ / ZJ) % FJ) ? "rod" : "channel"
    }

    function An(JJ, cJ, ZJ) {
      if ("reactor" !== JJ.kind || JJ.formed || !cJ) return !1;
      const FJ = NZ(JJ.box);
      for (let UJ = 0; UJ < FJ; UJ++) {
        const JJ = ZJ(UJ);
        if (null !== JJ && EZ(JJ)) return !1
      }
      return !0
    }

    function qn(JJ, cJ, ZJ, FJ, UJ) {
      var eJ;
      let XJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const AJ = RZ(JJ.box, cJ),
        qJ = tZ(JJ.kind, AJ, ZJ);
      if ("wrong" === qJ || "blocked" === qJ) return "wrong";
      if (!UJ) return null;
      if ("inside" === AJ && "reactor" === JJ.kind && "Air" === VZ(ZJ)) {
        if (null !== XJ) {
          var jJ;
          const ZJ = zh[Nh(XJ, LZ(JJ.box, cJ))];
          return ZJ && null !== (jJ = xq(ZJ)) && void 0 !== jJ ? jJ : null
        }
        if (FJ) return Xn(JJ.box, LZ(JJ.box, cJ))
      }
      if ("missing" !== qJ) return null;
      const YJ = oZ(JJ.kind, AJ);
      return null === YJ ? null : null !== (eJ = xq(YJ)) && void 0 !== eJ ? eJ : null
    }
    const jn = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Yn(JJ, cJ, ZJ) {
      const FJ = ZJ => {
        const FJ = cJ(uZ(JJ.box, ZJ));
        return null !== FJ && function(JJ, cJ) {
          return "reactor" !== JJ.kind || cJ !== TZ(JJ.box) && "inside" !== RZ(JJ.box, cJ)
        }(JJ, ZJ) && "ok" !== tZ(JJ.kind, RZ(JJ.box, ZJ), FJ)
      };
      if (ZJ) {
        const eJ = iZ(JJ.box, [Math.floor(ZJ[0]), Math.floor(ZJ[1]), Math.floor(ZJ[2])]);
        if (eJ >= 0 && (FJ(eJ) || (UJ = eJ, "reactor" === JJ.kind && "inside" === RZ(JJ.box, UJ) && "Air" === cJ(uZ(JJ.box, UJ))))) return eJ
      }
      var UJ;
      const eJ = NZ(JJ.box);
      for (let XJ = 0; XJ < eJ; XJ++)
        if (FJ(XJ)) return XJ;
      return -1
    }

    function hn(JJ, cJ) {
      return Math.floor(cJ / (JJ.w * JJ.d))
    }

    function Dn(JJ, cJ, ZJ) {
      return ZJ >= 0 && hn(JJ, cJ) > hn(JJ, ZJ)
    }

    function sn(JJ, cJ) {
      return cJ >= 0 && JJ.h >= 3 && hn(JJ, cJ) === JJ.h - 1
    }

    function nn(JJ) {
      const cJ = VZ(JJ);
      return cJ === hZ || "Collider" === cJ || "Laser" === cJ || cJ.startsWith("_Collider ")
    }

    function Gn(JJ, cJ, ZJ, FJ) {
      if (FJ(JJ)) return null;
      if (!jn.every((cJ => {
          let [FJ, UJ, eJ] = cJ;
          const XJ = ZJ([JJ[0] + FJ, JJ[1] + UJ, JJ[2] + eJ]);
          return null !== XJ && !wZ("reactor", XJ) && "reactor" !== KZ(XJ)
        }))) return null;
      const UJ = WZ("reactor").min,
        eJ = PZ([JJ[0], JJ[1], JJ[2]], function(JJ, cJ) {
          const ZJ = cJ[0] - (JJ[0] + .5),
            FJ = cJ[2] - (JJ[2] + .5);
          return Math.abs(ZJ) >= Math.abs(FJ) ? ZJ >= 0 ? 2 : 4 : FJ >= 0 ? 1 : 3
        }(JJ, cJ), UJ, UJ, UJ, kZ("reactor", UJ)),
        XJ = TZ(eJ);
      let AJ = !0;
      for (let qJ = 0; qJ < NZ(eJ) && AJ; qJ++) {
        if (qJ === XJ) continue;
        const JJ = uZ(eJ, qJ),
          cJ = ZJ(JJ);
        AJ = !FJ(JJ) && (null === cJ || !nn(cJ))
      }
      return {
        box: eJ,
        fits: AJ
      }
    }
    const fn = fq,
      xn = "baf2Goal",
      rn = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      vn = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      mn = .4;

    function Qn(JJ, cJ) {
      let [ZJ, FJ, UJ] = JJ;
      const eJ = Kq([ZJ - .02, FJ - .02, UJ - .02], [ZJ + 1.02, FJ + 1.02, UJ + 1.02], .07);
      return cJ && (eJ.push([
        [ZJ + .5, FJ + 1 + .7, UJ + .5],
        [.08, 1.4, .08]
      ]), eJ.push([
        [ZJ + .5, FJ + 1 + 1.4 + .2, UJ + .5],
        [mn, mn, mn]
      ])), eJ
    }

    function En(JJ, cJ) {
      let [ZJ, FJ, UJ] = cJ;
      return JJ.isBlockInLoadedChunk(ZJ, FJ, UJ) ? JJ.blockIdToBlockName(JJ.getBlockId(ZJ, FJ, UJ)) : null
    }
    let Vn = null;
    const Kn = new Set;
    let yn = null;

    function Sn(JJ) {
      Vn = JJ;
      for (const cJ of Kn) cJ(JJ)
    }
    class In {
      constructor(JJ) {
        var cJ;
        this.plans = JJ, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (cJ = JJ => {
          var cJ, ZJ;
          this.setGoal(null !== (cJ = null === JJ || void 0 === JJ ? void 0 : JJ.goal) && void 0 !== cJ ? cJ : null, null !== (ZJ = null === JJ || void 0 === JJ ? void 0 : JJ.startsBattery) && void 0 !== ZJ && ZJ)
        }, yn ??= [yU.i.subscribe("setDirectionArrow", (JJ => {
          let {
            id: cJ,
            position: ZJ,
            text: FJ
          } = JJ;
          cJ === xn && Sn({
            goal: [Math.floor(ZJ[0]), Math.floor(ZJ[1]), Math.floor(ZJ[2])],
            startsBattery: JSON.stringify(null !== FJ && void 0 !== FJ ? FJ : null).includes("arrowStartBattery")
          })
        })), yU.i.subscribe("clearDirectionArrow", (JJ => {
          let {
            id: cJ
          } = JJ;
          null !== cJ && cJ !== xn || Sn(null)
        }))], Kn.add(cJ), cJ(Vn), () => {
          Kn.delete(cJ)
        })
      }
      onAfterRender(JJ, cJ) {
        const ZJ = performance.now();
        if (this.cues.length > 0) {
          const cJ = .55 + .45 * Math.sin(ZJ / 1100 * Math.PI * 2);
          for (const ZJ of this.cues) JJ.setGameMesh(ZJ, {
            visibility: cJ
          })
        }
        if (ZJ - this.lastCheckMs < 150) return;
        this.lastCheckMs = ZJ;
        const FJ = this.plans.all().filter((JJ => {
            const [ZJ, FJ, UJ] = JJ.box.ctrl;
            return (!JJ.formed || null !== this.plans.layoutOf(JJ.box.ctrl)) && (ZJ - cJ[0]) ** 2 + (FJ - cJ[1]) ** 2 + (UJ - cJ[2]) ** 2 <= 2304
          })),
          UJ = function(JJ, cJ) {
            const ZJ = Zn.c.Kn,
              FJ = new Map;
            for (const eJ of cJ) {
              const cJ = uZ(eJ.box, 0),
                XJ = uZ(eJ.box, NZ(eJ.box) - 1),
                AJ = [Math.min(cJ[0], XJ[0]), Math.min(cJ[1], XJ[1]), Math.min(cJ[2], XJ[2])].map((JJ => Math.floor(JJ / ZJ))),
                qJ = [Math.max(cJ[0], XJ[0]), Math.max(cJ[1], XJ[1]), Math.max(cJ[2], XJ[2])].map((JJ => Math.floor(JJ / ZJ)));
              for (let ZJ = AJ[0]; ZJ <= qJ[0]; ZJ++)
                for (let cJ = AJ[1]; cJ <= qJ[1]; cJ++)
                  for (let eJ = AJ[2]; eJ <= qJ[2]; eJ++) {
                    var UJ;
                    FJ.set(`${ZJ},${cJ},${eJ}`, null !== (UJ = JJ.getChunkVersion(ZJ, cJ, eJ)) && void 0 !== UJ ? UJ : -1)
                  }
            }
            return FJ
          }(JJ, FJ);
        this.plans.getVersion() === this.storeVersion && (function(JJ, cJ) {
          if (JJ.size !== cJ.size) return !1;
          for (const [ZJ, FJ] of JJ)
            if (cJ.get(ZJ) !== FJ) return !1;
          return !0
        }(UJ, this.chunkVersions) || ZJ - this.lastRescanMs < 600) || (this.lastRescanMs = ZJ, this.storeVersion = this.plans.getVersion(), this.chunkVersions = UJ, this.redraw(JJ, FJ))
      }
      dispose(JJ) {
        this.unwatch(), Vn = null, this.clearMeshes(JJ), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(JJ, cJ) {
        var ZJ;
        (null === JJ || void 0 === JJ ? void 0 : JJ.join()) === (null === (ZJ = this.goal) || void 0 === ZJ ? void 0 : ZJ.join()) && cJ === this.startsBattery || (this.goal = JJ, this.startsBattery = cJ, this.storeVersion = -1)
      }
      redraw(JJ, cJ) {
        const ZJ = cJ => En(JJ, cJ),
          FJ = new Map,
          UJ = [],
          eJ = this.plans.guideOn();
        for (const jJ of cJ) {
          const JJ = eJ && An(jJ, this.plans.showsStarter(jJ.box.ctrl), (JJ => ZJ(uZ(jJ.box, JJ)))),
            cJ = "reactor" === jJ.kind ? this.plans.layoutOf(jJ.box.ctrl) : null,
            XJ = eJ && !jJ.formed ? Yn(jJ, ZJ, this.goal) : -1;
          XJ >= 0 && UJ.push([uZ(jJ.box, XJ), sn(jJ.box, XJ)]);
          const AJ = NZ(jJ.box);
          for (let UJ = 0; UJ < AJ; UJ++) {
            const AJ = uZ(jJ.box, UJ),
              qJ = ZJ(AJ),
              YJ = null === qJ ? null : qn(jJ, UJ, qJ, JJ, eJ, cJ);
            if (null !== YJ) {
              const JJ = "wrong" !== YJ && Dn(jJ.box, UJ, XJ),
                cJ = JJ ? `${YJ}Dim` : YJ;
              let ZJ = FJ.get(cJ);
              ZJ || (ZJ = {
                draw: {
                  ghost: YJ,
                  dim: JJ
                },
                list: []
              }, FJ.set(cJ, ZJ)), ZJ.list.push(AJ)
            }
          }
        }
        if (eJ && this.startsBattery && this.goal) {
          const [JJ, cJ, UJ] = this.goal, eJ = [];
          for (const [FJ, XJ, AJ] of rn) {
            const qJ = [JJ + FJ, cJ + XJ, UJ + AJ];
            "Air" === ZJ(qJ) && eJ.push(qJ)
          }
          if (eJ.length > 0) {
            var XJ;
            const JJ = null !== (XJ = FJ.get("cell")) && void 0 !== XJ ? XJ : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            JJ.list.push(...eJ), FJ.set("cell", JJ)
          }
        }
        const AJ = [...FJ.keys()].sort(),
          qJ = [...AJ.map((JJ => `${JJ}:${FJ.get(JJ).list.join(";")}`)), `cue:${UJ.join(";")}`].join("|");
        if (qJ !== this.shownKey) {
          this.shownKey = qJ, this.clearMeshes(JJ);
          for (const cJ of AJ) {
            const {
              draw: ZJ,
              list: UJ
            } = FJ.get(cJ);
            this.meshes.push(this.build(JJ, ZJ, UJ))
          }
          for (const [cJ, ZJ] of UJ) this.cues.push(en(JJ, Qn(cJ, ZJ), vn))
        }
      }
      build(JJ, cJ, ZJ) {
        let {
          ghost: FJ,
          dim: UJ
        } = cJ;
        const {
          size: eJ,
          colour: XJ,
          alpha: AJ
        } = fn[FJ], qJ = ZJ[0], jJ = [], YJ = [];
        for (const [hJ, DJ, sJ] of ZJ) Un(jJ, YJ, [hJ - qJ[0] + .5, DJ - qJ[1] + .5, sJ - qJ[2] + .5], [eJ, eJ, eJ]);
        return JJ.createGameMesh({
          positions: jJ,
          indices: YJ
        }, {
          rgb: XJ,
          alpha: AJ * (UJ ? .3 : 1)
        }, qJ)
      }
      clearMeshes(JJ) {
        for (const cJ of [...this.meshes, ...this.cues]) JJ.disposeGameMesh(cJ);
        this.meshes = [], this.cues = []
      }
    }
    const Mn = [.56, .83, 1],
      bn = [1, .3, .25];
    class wn {
      constructor(JJ) {
        this.plans = JJ, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(JJ, cJ, ZJ) {
        var FJ;
        const UJ = performance.now();
        if (UJ - this.lastCheckMs < 150) return;
        this.lastCheckMs = UJ;
        const eJ = cJ => En(JJ, cJ),
          XJ = null === (FJ = JJ.WcJ(cJ)) || void 0 === FJ ? void 0 : FJ.name,
          AJ = XJ && "Reactor Frame" === VZ(XJ) ? JJ.getTargetedBlock() : null,
          qJ = AJ ? [AJ.bs[0], AJ.bs[1], AJ.bs[2]] : null,
          jJ = null !== qJ && "Air" === eJ(qJ) && qJ.every(((JJ, cJ) => Math.abs(JJ + .5 - ZJ[cJ]) <= 8)) ? Gn(qJ, ZJ, eJ, (JJ => this.inPlan(JJ))) : null,
          YJ = jJ ? `${jJ.box.ctrl.join()}|${jJ.box.rot}|${jJ.fits}` : "";
        YJ !== this.shownKey && this.show(JJ, YJ, jJ)
      }
      dispose(JJ) {
        this.clear(JJ), this.shownKey = ""
      }
      inPlan(JJ) {
        return this.plans.all().some((cJ => iZ(cJ.box, JJ) >= 0))
      }
      show(JJ, cJ, ZJ) {
        if (this.clear(JJ), this.shownKey = cJ, !ZJ) return;
        const {
          box: FJ,
          fits: UJ
        } = ZJ, eJ = UJ ? Mn : bn, {
          lo: XJ,
          hi: AJ
        } = Vq(FJ);
        this.meshes.push(en(JJ, Kq(XJ, AJ, .05), {
          rgb: eJ,
          alpha: 1
        }));
        const qJ = [],
          jJ = uZ(FJ, 0)[1];
        for (let YJ = 0; YJ < FJ.w * FJ.d; YJ++) {
          const [JJ, , cJ] = uZ(FJ, YJ);
          qJ.push([
            [JJ + .5, jJ + .02 + .01, cJ + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(en(JJ, qJ, {
          rgb: eJ,
          alpha: .25
        }))
      }
      clear(JJ) {
        for (const cJ of this.meshes) JJ.disposeGameMesh(cJ);
        this.meshes = []
      }
    }
    const Wn = "buildAFactory2Game:";

    function gn(JJ, cJ, ZJ) {
      const FJ = JJ => {
          const [ZJ, FJ, UJ] = JJ.box.ctrl;
          return ZJ === cJ[0] && FJ === cJ[1] && UJ === cJ[2]
        },
        UJ = JJ.find((JJ => FJ(JJ) || iZ(JJ.box, cJ) >= 0));
      if (!UJ) return null;
      const eJ = function(JJ, cJ, ZJ) {
        const {
          w: FJ,
          h: UJ,
          d: eJ
        } = JJ.box, XJ = "reactor" === JJ.kind ? `${Wn}rxTitle` : `${Wn}batTitle`;
        if (JJ.formed) return {
          key: `${Wn}lookPlanFormed`,
          kindKey: XJ,
          w: FJ,
          h: UJ,
          d: eJ,
          count: 0
        };
        let AJ = 0,
          qJ = 0;
        for (let YJ = 0; YJ < NZ(JJ.box); YJ++) {
          const cJ = ZJ(uZ(JJ.box, YJ)),
            FJ = null === cJ ? "ok" : tZ(JJ.kind, RZ(JJ.box, YJ), cJ);
          AJ += "missing" === FJ ? 1 : 0, qJ += "wrong" === FJ || "blocked" === FJ ? 1 : 0
        }
        const jJ = function(JJ, cJ, ZJ) {
          if (cJ < 0 || null === ZJ) return;
          const FJ = RZ(JJ.box, cJ),
            UJ = tZ(JJ.kind, FJ, ZJ);
          return "blocked" === UJ ? `${Wn}lookWhy_blocked` : "wrong" === UJ ? "ctrl" === FJ ? `${Wn}lookWhy_ctrl` : `${Wn}lookWhy_reactor_${FJ}` : void 0
        }(JJ, iZ(JJ.box, cJ), ZJ([cJ[0], cJ[1], cJ[2]]));
        if (AJ > 0) return {
          key: `${Wn}lookPlanToBuild`,
          kindKey: XJ,
          w: FJ,
          h: UJ,
          d: eJ,
          count: AJ,
          why: jJ
        };
        if (qJ > 0) return {
          key: `${Wn}lookPlanTakeOut`,
          kindKey: XJ,
          w: FJ,
          h: UJ,
          d: eJ,
          count: qJ,
          why: jJ
        };
        return {
          key: "reactor" === JJ.kind ? `${Wn}lookPlanNoRods` : `${Wn}lookPlanDone`,
          kindKey: XJ,
          w: FJ,
          h: UJ,
          d: eJ,
          count: 0
        }
      }(UJ, cJ, ZJ);
      return "reactor" === UJ.kind && FJ(UJ) ? {
        ...eJ,
        ctrl: !0
      } : eJ
    }

    function Hn(JJ, cJ) {
      return JJ === cJ || null !== JJ && null !== cJ && JJ.key === cJ.key && JJ.kindKey === cJ.kindKey && JJ.w === cJ.w && JJ.h === cJ.h && JJ.d === cJ.d && JJ.count === cJ.count && JJ.why === cJ.why && JJ.ctrl === cJ.ctrl
    }

    function Pn() {
      return performance.now()
    }
    class kn {
      constructor(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Pn;
        this.ticket = JJ, this.sent = cJ, this.backstopMs = ZJ, this.now = FJ, this.queuedAt = void 0, this.queuedAt = FJ()
      }
      answered() {
        const JJ = this.now(),
          cJ = this.sent.leftAt(this.ticket);
        return null !== cJ && JJ - cJ > 4e3 || JJ - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class pn {
      constructor() {
        this.echoes = []
      }
      add(JJ) {
        this.echoes = this.echoes.filter((JJ => !JJ.answered())), this.echoes.push(JJ)
      }
      answered() {
        var JJ, cJ;
        return null === (JJ = null === (cJ = this.echoes.at(-1)) || void 0 === cJ ? void 0 : cJ.answered()) || void 0 === JJ || JJ
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((JJ => JJ.answered()))
      }
      age() {
        var JJ, cJ;
        return null !== (JJ = null === (cJ = this.echoes.at(-1)) || void 0 === cJ ? void 0 : cJ.age()) && void 0 !== JJ ? JJ : null
      }
      clear() {
        this.echoes = []
      }
    }
    class dn {
      constructor(JJ) {
        this.send = JJ, this.value = null, this.sent = null, this.echoes = new pn, this.down = !1, this.timer = null
      }
      shown(JJ) {
        return null === this.value ? JJ : this.down || this.value !== this.sent ? this.value : JJ === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), JJ) : this.value
      }
      pendingFor(JJ) {
        return null !== this.value && this.value === this.sent && JJ !== this.value ? this.echoes.age() : null
      }
      assume(JJ, cJ) {
        this.disarm(), this.down = !1, this.value = JJ, this.sent = JJ, this.echoes.clear(), this.echoes.add(cJ)
      }
      press() {
        this.down = !0
      }
      drag(JJ) {
        this.value = JJ, this.arm(this.down ? 1e3 : 400)
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
      arm(JJ) {
        this.disarm(), this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), JJ)
      }
      disarm() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
    class zn {
      constructor() {
        this.pending = new Map
      }
      set(JJ, cJ, ZJ) {
        var FJ;
        const UJ = null !== (FJ = this.pending.get(JJ)) && void 0 !== FJ ? FJ : {
          on: cJ,
          echoes: new pn
        };
        UJ.on = cJ, UJ.echoes.add(ZJ), this.pending.set(JJ, UJ)
      }
      shown(JJ) {
        let cJ = JJ;
        for (const [ZJ, {
            on: FJ,
            echoes: UJ
          }] of this.pending) 0 !== (JJ & ZJ) === FJ && UJ.agreeCounts() || UJ.answered() ? this.pending.delete(ZJ) : cJ = FJ ? cJ | ZJ : cJ & ~ZJ;
        return cJ
      }
      pendingMask() {
        let JJ = 0;
        for (const cJ of this.pending.keys()) JJ |= cJ;
        return JJ
      }
      pendingFor(JJ) {
        let cJ = null;
        for (const [FJ, {
            on: UJ,
            echoes: eJ
          }] of this.pending) {
          if (void 0 !== JJ && 0 !== (JJ & FJ) === UJ) continue;
          const XJ = eJ.age();
          var ZJ;
          if (null !== XJ) cJ = Math.max(null !== (ZJ = cJ) && void 0 !== ZJ ? ZJ : 0, XJ)
        }
        return cJ
      }
      clear() {
        this.pending.clear()
      }
    }
    class Nn {
      constructor() {
        this.dims = null, this.echoes = new pn, this.unmet = null
      }
      shown(JJ) {
        var cJ;
        return this.dims && (On(this.dims, JJ) && this.echoes.agreeCounts() || this.echoes.answered()) && (On(this.dims, JJ) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (cJ = this.dims) && void 0 !== cJ ? cJ : JJ
      }
      takeUnmet() {
        const JJ = this.unmet;
        return this.unmet = null, JJ
      }
      set(JJ, cJ) {
        this.dims = JJ, this.echoes.add(cJ)
      }
      pendingFor(JJ) {
        return null === this.dims || JJ && On(this.dims, JJ) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function On(JJ, cJ) {
      return JJ[0] === cJ[0] && JJ[1] === cJ[1] && JJ[2] === cJ[2]
    }
    class Tn {
      constructor() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pn;
        this.now = JJ, this.taps = new Map
      }
      tap(JJ, cJ, ZJ) {
        return !this.busy(JJ) && (this.taps.set(JJ, {
          at: this.now(),
          done: cJ
        }), ZJ(), !0)
      }
      settle(JJ) {
        for (const [cJ, ZJ] of [...this.taps]) ZJ.done(JJ) && this.taps.delete(cJ)
      }
      busy(JJ) {
        const cJ = this.taps.get(JJ);
        return !!cJ && (!(this.now() - cJ.at >= 3e3) || (this.taps.delete(JJ), !1))
      }
      busyIds() {
        const JJ = new Set;
        for (const cJ of [...this.taps.keys()]) this.busy(cJ) && JJ.add(cJ);
        return JJ
      }
      clear() {
        this.taps.clear()
      }
    }

    function Cn(JJ) {
      return {
        send: cJ => JJ.track(cJ),
        sendUrgent: (cJ, ZJ) => JJ.track(cJ, {
          urgent: !0,
          supersedes: ZJ
        }),
        leftAt: cJ => JJ.leftAt(cJ),
        holdReserve: () => JJ.holdUrgentReserve(),
        answerMs: yX
      }
    }

    function un() {
      return performance.now()
    }

    function Rn(JJ) {
      const cJ = JJ.baf2RxNeed.map((JJ => {
        let [cJ, ZJ] = JJ;
        return [cJ, ZJ]
      }));
      return JSON.stringify([JJ.baf2RxFormed, cJ, JJ.baf2RxBad, JJ.baf2RxCells])
    }

    function Ln(JJ, cJ) {
      const ZJ = 0 !== (cJ & ec),
        FJ = 0 !== (JJ.baf2RxFlags & ec);
      return !ZJ || FJ || "running" !== JJ.baf2RxState && "idle" !== JJ.baf2RxState ? !ZJ && FJ && "scram" === JJ.baf2RxState && JJ.baf2RxFuel > 0 ? "idle" : JJ.baf2RxState : "scram"
    }

    function an(JJ) {
      return JSON.stringify([JJ.baf2BatFormed, JJ.baf2BatNeed, JJ.baf2BatBad])
    }

    function Bn(JJ) {
      return JJ.join(",")
    }
    class tn {
      constructor() {
        this.listeners = new Set
      }
      subscribe(JJ) {
        return this.listeners.add(JJ), () => {
          this.listeners.delete(JJ)
        }
      }
      notify() {
        for (const JJ of this.listeners) JJ()
      }
      clear() {
        this.listeners.clear()
      }
    }
    class JG {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(JJ, cJ) {
        this.lastAt = JJ, this.lastUntil = JJ + cJ
      }
      answered(JJ) {
        return this.lastAt >= JJ || JJ < this.lastUntil
      }
    }
    class cG {
      constructor(JJ, cJ) {
        this.link = JJ, this.now = cJ, this.hold = new Nn, this.picked = null, this.notTaken = null
      }
      shown(JJ) {
        const cJ = this.hold.shown(JJ);
        if (this.hold.takeUnmet() && this.picked) {
          var ZJ;
          const {
            plans: cJ,
            ctrl: FJ,
            at: UJ
          } = this.picked;
          this.picked = null, cJ.unpredict(FJ), null === (ZJ = this.notTaken) || void 0 === ZJ || ZJ.call(this, JJ, UJ)
        }
        return cJ
      }
      pendingFor(JJ) {
        return this.hold.pendingFor(JJ)
      }
      PD(JJ, cJ, ZJ) {
        JJ.predictSize(cJ, ZJ), this.picked = {
          plans: JJ,
          ctrl: cJ,
          at: this.now()
        };
        const FJ = this.link.send(Uc(cJ, "plan", ...ZJ));
        this.hold.set(ZJ, new kn(FJ, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class ZG {
      constructor(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : un;
        this.plans = JJ, this.readInterior = cJ, this.link = ZJ, this.now = FJ, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new zn, this.throttle = void 0, this.oneShots = void 0, this.listeners = new tn, this.redraw = null, this.releaseReserve = null, this.size = new cG(ZJ, FJ), this.oneShots = new Tn(FJ), this.throttle = new dn((JJ => this.echo(this.link.send(this.command("throttle", JJ)))))
      }
      set(JJ) {
        !JJ.baf2RxOpen && this.raw && Bn(this.raw.baf2RxAt) === Bn(JJ.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(JJ), this.Uf(JJ)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(JJ) {
        this.size.notTaken = JJ
      }
      resize(JJ) {
        this.raw && (this.size.PD(this.plans, this.raw.baf2RxAt, JJ), this.Uf(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const JJ = this.raw.baf2RxAt;
        this.plans.setStarter(JJ, !this.plans.showsStarter(JJ)), this.Uf(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.Uf(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.Uf(this.raw)
      }
      send(JJ) {
        if (this.raw) {
          for (var cJ = arguments.length, ZJ = new Array(cJ > 1 ? cJ - 1 : 0), FJ = 1; FJ < cJ; FJ++) ZJ[FJ - 1] = arguments[FJ];
          this.link.send(this.command(JJ, ...ZJ))
        }
      }
      tap(JJ, cJ) {
        this.raw && this.oneShots.tap(JJ, function(JJ, cJ) {
          if ("start" === JJ) return JJ => 0 === (JJ.baf2RxFlags & ec);
          if ("odConfirm" === JJ) return JJ => 0 !== (JJ.baf2RxFlags & Xc);
          const ZJ = Rn(cJ);
          return JJ => Rn(JJ) !== ZJ
        }(JJ, this.raw), cJ) && ("start" === JJ && (this.startedAt = this.now()), this.Uf(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(ec, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(JJ, cJ) {
        if (!this.raw) return;
        const ZJ = JJ === ec ? this.command(cJ ? "scram" : "start") : this.command("od", cJ ? 1 : 0),
          FJ = cJ && JJ === ec,
          UJ = `${Fc} ${this.raw.baf2RxAt.join(" ")} `,
          eJ = this.echo(FJ ? this.link.sendUrgent(ZJ, (JJ => {
            const cJ = JJ.startsWith(UJ) ? JJ.slice(UJ.length).split(" ")[0] : null;
            return "throttle" === cJ || "start" === cJ
          })) : this.link.send(ZJ));
        this.flags.set(JJ, cJ, eJ), FJ && this.throttle.assume(0, eJ), this.Uf(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(JJ) {
        this.throttle.drag(JJ), this.raw && this.Uf(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.Uf(this.raw)
      }
      subscribe(JJ) {
        return this.listeners.subscribe(JJ)
      }
      opened() {
        this.releaseReserve ??= this.link.holdReserve()
      }
      closed() {
        var JJ;
        this.throttle.release(), null === (JJ = this.releaseReserve) || void 0 === JJ || JJ.call(this), this.releaseReserve = null
      }
      dispose() {
        this.closed(), this.throttle.clear(), this.flags.clear(), this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.raw = null, this.looksOf = null, this.listeners.clear()
      }
      command(JJ) {
        for (var cJ = arguments.length, ZJ = new Array(cJ > 1 ? cJ - 1 : 0), FJ = 1; FJ < cJ; FJ++) ZJ[FJ - 1] = arguments[FJ];
        return Uc(this.raw.baf2RxAt, JJ, ...ZJ)
      }
      echo(JJ) {
        return new kn(JJ, this.link, this.link.answerMs, this.now)
      }
      Uf(JJ) {
        var cJ;
        this.raw = JJ;
        const ZJ = this.flags.shown(JJ.baf2RxFlags),
          FJ = {
            ...JJ,
            baf2RxFlags: ZJ,
            baf2RxTarget: this.throttle.shown(JJ.baf2RxTarget),
            baf2RxState: Ln(JJ, ZJ)
          },
          UJ = this.size.shown(FJ.baf2RxDims),
          eJ = this.throttle.pendingFor(),
          XJ = [this.throttle.pendingFor(JJ.baf2RxTarget), this.flags.pendingFor(JJ.baf2RxFlags), this.size.pendingFor(JJ.baf2RxDims)].filter((JJ => null !== JJ)),
          AJ = XJ.length > 0 ? Math.max(...XJ) : null,
          qJ = this.oneShots.busyIds(),
          jJ = FJ.baf2RxAt;
        let YJ, hJ, DJ = null,
          sJ = [Math.max(0, UJ[0] - 2), Math.max(0, UJ[1] - 2), Math.max(0, UJ[2] - 2)];
        if (FJ.baf2RxFormed) {
          const [JJ, cJ, ZJ] = FJ.baf2RxDims;
          sJ = [Math.max(0, JJ - 2), Math.max(0, cJ - 2), Math.max(0, ZJ - 2)], YJ = Array.from(FJ.baf2RxCells, Number), hJ = `${sJ.join(",")}:${FJ.baf2RxCells}`
        } else {
          var nJ;
          const JJ = null === (nJ = this.plans.planAt(jJ)) || void 0 === nJ ? void 0 : nJ.box,
            cJ = JJ ? pZ(JJ, "reactor", ...UJ) : PZ(jJ, 1, ...UJ, kZ("reactor", UJ[0])),
            ZJ = this.readInterior(cJ);
          DJ = iA(sJ, ZJ), YJ = ZJ, hJ = `${sJ.join(",")}:${ZJ.join("")}`
        }(null === (cJ = this.looksOf) || void 0 === cJ ? void 0 : cJ.key) !== hJ && (this.looksOf = {
          key: hJ,
          looks: oA(sJ, YJ)
        }), this.view = {
          status: FJ,
          dims: UJ,
          plan: DJ,
          inner: sJ,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(jJ),
          odConfirmed: this.odConfirmed || 0 !== (FJ.baf2RxFlags & Dc),
          guide: this.plans.guideOn(),
          throttlePending: null !== eJ,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== AJ && AJ >= 5e3,
          busy: qJ,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== AJ || qJ.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.Uf(this.raw)
        }), 250))
      }
    }
    class FG {
      constructor(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : un;
        this.plans = JJ, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new tn, this.redraw = null, this.size = new cG(cJ, ZJ), this.oneShots = new Tn(ZJ)
      }
      set(JJ) {
        !JJ.baf2BatOpen && this.view && Bn(this.view.status.baf2BatAt) === Bn(JJ.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(JJ), this.Uf(JJ)
      }
      tap(JJ, cJ) {
        if (!this.view) return;
        const ZJ = an(this.view.status);
        this.oneShots.tap(JJ, (JJ => an(JJ) !== ZJ), cJ) && this.Uf(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(JJ) {
        this.size.notTaken = JJ
      }
      resize(JJ) {
        this.view && (this.size.PD(this.plans, this.view.status.baf2BatAt, JJ), this.Uf(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.Uf(this.view.status)
      }
      subscribe(JJ) {
        return this.listeners.subscribe(JJ)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      Uf(JJ) {
        const cJ = this.size.shown(JJ.baf2BatDims),
          ZJ = this.oneShots.busyIds();
        this.view = {
          status: JJ,
          dims: cJ,
          qh: Dq(cJ, JJ.baf2BatDims) ? JJ.baf2BatCapacity : cq(...cJ),
          guide: this.plans.guideOn(),
          busy: ZJ
        }, this.listeners.notify(), ZJ.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.Uf(this.view.status)
        }), 250))
      }
    }
    const UG = "buildAFactory2Game:";

    function eG() {
      var JJ;
      const cJ = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!cJ) return null;
      const ZJ = cJ.querySelector(".ExitButton");
      return function(JJ, cJ) {
        const ZJ = cJ ? cJ.left - 8 : JJ.right;
        return {
          left: JJ.left,
          top: JJ.top,
          width: Math.max(0, ZJ - JJ.left),
          height: JJ.height
        }
      }(cJ.getBoundingClientRect(), null !== (JJ = null === ZJ || void 0 === ZJ ? void 0 : ZJ.getBoundingClientRect()) && void 0 !== JJ ? JJ : null)
    }
    const XG = (0, FJ.memo)((function(JJ) {
      let {
        store: cJ
      } = JJ;
      const {
        t: ZJ
      } = (0, vU.F)(), [UJ, eJ] = (0, FJ.useState)((() => cJ.get())), [XJ, AJ] = (0, FJ.useState)((() => performance.now()));
      (0, FJ.useEffect)((() => (eJ(cJ.get()), cJ.subscribe((() => {
        eJ(cJ.get()), AJ(performance.now())
      })))), [cJ]);
      const {
        alarm: qJ,
        boomAt: jJ
      } = UJ, YJ = null !== qJ && null !== qJ.secs, [hJ, DJ] = (0, FJ.useState)(null);
      (0, FJ.useEffect)((() => {
        if (!YJ) return;
        DJ(eG());
        const JJ = setInterval((() => {
          AJ(performance.now()), DJ(eG())
        }), 250);
        return () => {
          clearInterval(JJ)
        }
      }), [YJ]);
      const [sJ, nJ] = (0, FJ.useState)(!1);
      return (0, FJ.useEffect)((() => {
        if (jJ === -1 / 0) return;
        nJ(!0);
        const JJ = setTimeout((() => {
          nJ(!1)
        }), 1300);
        return () => {
          clearTimeout(JJ)
        }
      }), [jJ]), (0, xe.jsxs)(xe.Fragment, {
        children: [null !== qJ && (0, xe.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: ZJ(qJ.hot ? `${UG}rxAlarmSiren` : `${UG}rxAlarmDamaged`, {
            amount: String(qJ.damage)
          })
        }), null !== qJ && null !== qJ.secs && (0, xe.jsx)("div", {
          className: hJ ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== hJ && void 0 !== hJ ? hJ : void 0,
          "aria-live": "assertive",
          children: ZJ(`${UG}rxAlarmCountdown`, {
            amount: String((GJ = qJ.secs, fJ = XJ - qJ.receivedAt, Math.max(1, Math.ceil(GJ - fJ / 1e3))))
          })
        }), sJ && (0, xe.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var GJ, fJ
    }));
    class AG {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      Rm(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const ZJ = JJ.baf2RxAlarmAt.join(",");
        let FJ = this.snapshot.boomAt;
        if (JJ.baf2RxAlarmBoom) this.byReactor.delete(ZJ), FJ = cJ;
        else if (JJ.baf2RxAlarmDamage <= 0) this.byReactor.delete(ZJ);
        else {
          var UJ;
          this.byReactor.set(ZJ, {
            damage: JJ.baf2RxAlarmDamage,
            secs: null !== (UJ = JJ.baf2RxAlarmSecs) && void 0 !== UJ ? UJ : null,
            hot: !0 === JJ.baf2RxAlarmHot,
            receivedAt: cJ
          })
        }
        this.Uf(FJ)
      }
      retain(JJ) {
        let cJ = !1;
        for (const ZJ of [...this.byReactor.keys()]) JJ.has(ZJ) || (this.byReactor.delete(ZJ), cJ = !0);
        cJ && this.Uf(this.snapshot.boomAt)
      }
      has(JJ) {
        return this.byReactor.has(JJ)
      }
      get() {
        return this.snapshot
      }
      subscribe(JJ) {
        return this.listeners.add(JJ), () => {
          this.listeners.delete(JJ)
        }
      }
      dispose() {
        this.listeners.clear(), this.byReactor.clear()
      }
      Uf(JJ) {
        let cJ = null;
        for (const ZJ of this.byReactor.values())(!cJ || ZJ.damage > cJ.damage) && (cJ = ZJ);
        this.snapshot = {
          alarm: cJ,
          boomAt: JJ
        };
        for (const ZJ of this.listeners) ZJ()
      }
    }
    const qG = {
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

    function jG(JJ) {
      return [JJ[0], JJ[1], JJ[2]]
    }

    function YG(JJ) {
      return `${JJ[0]},${JJ[1]},${JJ[2]}`
    }
    class hG {
      constructor(JJ) {
        if (this.plans = JJ, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var JJ;
            return {
              active: this.glows.flatMap((JJ => {
                let {
                  record: cJ
                } = JJ;
                return cJ ? [cJ] : []
              })),
              log: [...null !== (JJ = this.devLog) && void 0 !== JJ ? JJ : []]
            }
          }, this.devLog && "undefined" !== typeof window) {
          window.baf2Glows = this.devAccessor
        }
      }
      glowLog() {
        var JJ;
        return null !== (JJ = this.devLog) && void 0 !== JJ ? JJ : []
      }
      check(JJ, cJ, ZJ) {
        const FJ = new Set(cJ.map((JJ => YG(JJ.box.ctrl))));
        for (const XJ of function(JJ, cJ) {
            const ZJ = [],
              FJ = new Map(JJ);
            JJ.clear();
            for (const UJ of cJ) {
              const cJ = ls(UJ.box.ctrl),
                eJ = UJ.formed ? UJ.level : 0;
              JJ.set(cJ, eJ), eJ > 0 && 0 === FJ.get(cJ) && ZJ.push(UJ)
            }
            return ZJ
          }(this.levels, this.plans.all())) FJ.has(YG(XJ.box.ctrl)) && this.show(JJ, XJ, "on", ZJ);
        const UJ = this.plans.lastFormed();
        if (null === UJ || UJ.receivedAt <= this.flashedAt) return null;
        this.flashedAt = UJ.receivedAt;
        const eJ = function(JJ, cJ) {
          var ZJ;
          const FJ = ls(JJ);
          return null !== (ZJ = cJ.find((JJ => ls(JJ.box.ctrl) === FJ))) && void 0 !== ZJ ? ZJ : null
        }(UJ.ctrl, cJ);
        return eJ && this.show(JJ, eJ, "formed", ZJ), eJ
      }
      fade(JJ, cJ) {
        0 !== this.glows.length && (this.glows = this.glows.filter((ZJ => {
          let {
            mesh: FJ,
            glow: UJ,
            startMs: eJ,
            record: XJ
          } = ZJ;
          const AJ = (cJ - eJ) / qG[UJ].ms;
          return AJ >= 1 ? (JJ.disposeGameMesh(FJ), XJ && (XJ.endMs = cJ), !1) : (JJ.setGameMesh(FJ, {
            visibility: "formed" === UJ ? 1 - AJ : Math.sin(Math.PI * AJ)
          }), !0)
        })))
      }
      dispose(JJ) {
        for (const {
            mesh: ZJ
          }
          of this.glows) JJ.disposeGameMesh(ZJ);
        this.glows = [], this.levels.clear();
        const cJ = "undefined" !== typeof window ? window : null;
        (null === cJ || void 0 === cJ ? void 0 : cJ.baf2Glows) === this.devAccessor && delete cJ.baf2Glows
      }
      show(JJ, cJ, ZJ, FJ) {
        const {
          lo: UJ,
          hi: eJ
        } = Vq(cJ.box);
        let XJ = null;
        this.devLog && (XJ = {
          glow: ZJ,
          ctrl: jG(cJ.box.ctrl),
          lo: jG(UJ),
          hi: jG(eJ),
          startMs: FJ,
          endMs: null
        }, this.devLog.push(XJ), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(JJ, ZJ, Kq(UJ, eJ, qG[ZJ].thick)),
          glow: ZJ,
          startMs: FJ,
          record: XJ
        })
      }
      build(JJ, cJ, ZJ) {
        const FJ = en(JJ, ZJ, {
          rgb: qG[cJ].colour,
          alpha: 1
        });
        return JJ.setGameMesh(FJ, {
          visibility: 0
        }), FJ
      }
    }
    const DG = 1 / .6,
      sG = {
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
        blendMode: SA.g.Standard,
        soft: !0
      },
      nG = {
        ...sG,
        size: [.25, .4],
        count: 2
      };

    function GG(JJ) {
      return {
        colours: [JJ, JJ],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: SA.g.Add,
        soft: !1
      }
    }
    const fG = GG([150, 225, 255]),
      xG = GG([185, 145, 255]),
      rG = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function vG(JJ) {
      const cJ = Sc[JJ];
      return null === cJ.fuelSlot || tc(cJ) ? rG.includes(JJ) ? xG : fG : sG
    }
    const mG = {
        kind: "smokePuff"
      },
      QG = [.2, .025, .2];

    function EG(JJ, cJ) {
      const [
        [ZJ, FJ, UJ],
        [eJ, XJ, AJ]
      ] = JJ.colours;
      return {
        texture: JJ.soft ? mG : "square_particle",
        qh: cJ,
        minLifeTime: JJ.life[0] / DG,
        maxLifeTime: JJ.life[1] / DG,
        minEmitPower: JJ.power[0] * DG,
        maxEmitPower: JJ.power[1] * DG,
        minSize: JJ.size[0],
        maxSize: JJ.size[1],
        emitRate: 0,
        gravity: [0, JJ.lift * DG * DG, 0],
        dir1: [-JJ.spread, 1, -JJ.spread],
        dir2: [JJ.spread, 1, JJ.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [ZJ, FJ, UJ, JJ.alpha],
          maxColor: [eJ, XJ, AJ, JJ.alpha]
        }, {
          timeFraction: 1,
          minColor: [ZJ, FJ, UJ, 0],
          maxColor: [eJ, XJ, AJ, 0]
        }],
        blendMode: JJ.blendMode
      }
    }
    class VG {
      constructor(JJ) {
        this.fixed = JJ, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(JJ, cJ, ZJ) {
        var FJ;
        if (ZJ === this.lastFrame) return !1;
        this.lastFrame = ZJ;
        const UJ = this.at;
        UJ[0] = cJ[0] + .5, UJ[1] = cJ[1] + 1.025, UJ[2] = cJ[2] + .5;
        const eJ = null !== (FJ = this.fixed) && void 0 !== FJ ? FJ : AJ() ? nG : sG;
        let XJ = this.particles.get(eJ);
        return XJ || (XJ = JJ.createParticles(function(JJ) {
          return EG(JJ, Math.ceil(12 * JJ.count * JJ.life[1]) + JJ.count)
        }(eJ), {
          pos: UJ,
          half: QG
        }), this.particles.set(eJ, XJ)), XJ.moveTo(UJ), XJ.emit(eJ.count), !0
      }
      dispose() {
        for (const JJ of this.particles.values()) JJ.stop();
        this.particles.clear()
      }
    }
    class KG {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(JJ) {
        this.indexed = !0;
        for (const cJ of mc) {
          const ZJ = vG(cJ);
          for (let FJ = 1; FJ <= 4; FJ++) {
            const UJ = JJ.blockNameToBlockId(`${cJ}|meta|rot${FJ}|Running`, !0);
            if (null === UJ) continue;
            let eJ = this.pufferIndexByStyle.get(ZJ);
            void 0 === eJ && (eJ = this.pufferList.push(new VG(ZJ === sG ? null : ZJ)) - 1, this.pufferIndexByStyle.set(ZJ, eJ)), this.pufferIndexById[UJ] = eJ + 1
          }
        }
      }
      onAfterRender(JJ, cJ) {
        this.indexed || this.index(JJ);
        const ZJ = performance.now(),
          FJ = 0 === this.lastMs ? 0 : Math.min(ZJ - this.lastMs, 250) / 1e3;
        this.lastMs = ZJ, this.frame++, JJ.particlesEnabled() ? (this.scan(JJ, cJ), this.puff(JJ, FJ)) : this.sources = []
      }
      dispose() {
        for (const JJ of this.pufferList) JJ.dispose();
        this.sources = [], this.found = []
      }
      scan(JJ, cJ) {
        0 === this.scanRow && (this.origin = [Math.floor(cJ[0]) - 12, Math.floor(cJ[1]) - 6, Math.floor(cJ[2]) - 12]);
        const ZJ = Math.min(this.scanRow + 16, 325),
          [FJ, UJ, eJ] = this.origin,
          XJ = this.hits;
        XJ.length = 0;
        for (let AJ = this.scanRow; AJ < ZJ; AJ++) {
          const cJ = FJ + AJ % 25,
            ZJ = UJ + Math.floor(AJ / 25);
          JJ.scanBlocks(cJ, ZJ, eJ, cJ + 1, ZJ + 1, eJ + 25, this.pufferIndexById, XJ)
        }
        for (let AJ = 0; AJ < XJ.length; AJ += 4) {
          const JJ = XJ[AJ + 3];
          this.found.push({
            pos: [XJ[AJ], XJ[AJ + 1], XJ[AJ + 2]],
            EA: JJ,
            puffer: this.pufferList[this.pufferIndexById[JJ] - 1]
          })
        }
        this.scanRow = ZJ, 325 === ZJ && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(JJ, cJ) {
        const ZJ = this.sources.length;
        if (0 !== ZJ) {
          this.budget = Math.min(this.budget + Math.min(ZJ / 1.2, 12) * cJ, 2);
          for (let cJ = 0; cJ < ZJ && this.budget >= 1; cJ++) {
            const cJ = this.sources[this.cursor % ZJ];
            this.cursor = (this.cursor + 1) % ZJ, JJ.getBlockId(cJ.pos[0], cJ.pos[1], cJ.pos[2]) === cJ.EA && (cJ.puffer.puff(JJ, cJ.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const yG = {
        ...GG([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      SG = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function IG(JJ) {
      return 0 === JJ.spots.length ? 0 : Math.min(1 * JJ.level, 4)
    }

    function MG(JJ) {
      return 0 === JJ.glass.length ? 0 : Math.min(.75 * JJ.level, 3)
    }

    function bG(JJ) {
      return `${JJ.ctrl.join(",")}:${JJ.rot}:${JJ.cu},${JJ.cv}:${JJ.w},${JJ.h},${JJ.d}`
    }

    function wG(JJ, cJ) {
      const ZJ = cJ.w - 2,
        FJ = cJ.h - 2,
        UJ = cJ.d - 2,
        eJ = [];
      for (let XJ = 0; XJ < ZJ * FJ * UJ; XJ++) {
        const AJ = XJ % ZJ,
          qJ = Math.floor(XJ / ZJ) % UJ,
          jJ = Math.floor(XJ / (ZJ * UJ));
        if (AJ > 0 && AJ < ZJ - 1 && qJ > 0 && qJ < UJ - 1 && jJ > 0 && jJ < FJ - 1) continue;
        const YJ = uZ(cJ, aZ(cJ, XJ)),
          hJ = En(JJ, YJ);
        if (null !== hJ && "Fuel Rod" === VZ(hJ))
          for (const cJ of SG) {
            const ZJ = [YJ[0] + cJ[0], YJ[1] + cJ[1], YJ[2] + cJ[2]];
            gG(JJ, ZJ) && eJ.push(HG(ZJ, cJ))
          }
      }
      return eJ
    }

    function WG(JJ, cJ) {
      const {
        lo: ZJ,
        hi: FJ
      } = Vq(cJ), UJ = [];
      for (let eJ = ZJ[0]; eJ < FJ[0]; eJ++)
        for (let cJ = ZJ[1]; cJ < FJ[1]; cJ++) {
          const XJ = eJ === ZJ[0] || eJ === FJ[0] - 1 || cJ === ZJ[1] || cJ === FJ[1] - 1 ? 1 : Math.max(1, FJ[2] - 1 - ZJ[2]);
          for (let AJ = ZJ[2]; AJ < FJ[2]; AJ += XJ) {
            const XJ = [eJ, cJ, AJ];
            if (!gG(JJ, XJ)) continue;
            const qJ = eJ === ZJ[0] ? SG[1] : eJ === FJ[0] - 1 ? SG[0] : AJ === ZJ[2] ? SG[5] : AJ === FJ[2] - 1 ? SG[4] : cJ === ZJ[1] ? SG[3] : SG[2];
            UJ.push(HG(XJ, qJ))
          }
        }
      return UJ
    }

    function gG(JJ, cJ) {
      const ZJ = En(JJ, cJ);
      return null !== ZJ && "Reactor Glass" === VZ(ZJ)
    }

    function HG(JJ, cJ) {
      return [
        [JJ[0] + .5 + .55 * cJ[0], JJ[1] + .5 + .55 * cJ[1], JJ[2] + .5 + .55 * cJ[2]],
        [0 === cJ[0] ? .4 : .02, 0 === cJ[1] ? .4 : .02, 0 === cJ[2] ? .4 : .02]
      ]
    }
    class PG {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(JJ, cJ, ZJ, FJ) {
        const UJ = [],
          eJ = new Set;
        for (const jJ of cJ) {
          var XJ, AJ, qJ;
          const {
            box: cJ
          } = jJ;
          if ("reactor" !== jJ.kind || jJ.level <= 0 || (cJ.ctrl[0] - ZJ[0]) ** 2 + (cJ.ctrl[1] - ZJ[1]) ** 2 + (cJ.ctrl[2] - ZJ[2]) ** 2 > 576) continue;
          const YJ = bG(cJ);
          eJ.add(YJ);
          let hJ = this.spots.get(YJ);
          if ((!hJ || FJ - hJ.at > 3e3) && (hJ = {
              at: FJ,
              spots: wG(JJ, cJ),
              glass: WG(JJ, cJ)
            }, this.spots.set(YJ, hJ)), 0 === hJ.spots.length && 0 === hJ.glass.length) continue;
          const DJ = this.sparking.find((JJ => JJ.key === YJ));
          UJ.push({
            key: YJ,
            level: jJ.level,
            spots: hJ.spots,
            glass: hJ.glass,
            budget: null !== (XJ = null === DJ || void 0 === DJ ? void 0 : DJ.budget) && void 0 !== XJ ? XJ : 0,
            cursor: null !== (AJ = null === DJ || void 0 === DJ ? void 0 : DJ.cursor) && void 0 !== AJ ? AJ : 0,
            glassBudget: null !== (qJ = null === DJ || void 0 === DJ ? void 0 : DJ.glassBudget) && void 0 !== qJ ? qJ : 0
          })
        }
        for (const jJ of this.spots.keys()) eJ.has(jJ) || this.spots.delete(jJ);
        this.sparking = UJ
      }
      emit(JJ, cJ, ZJ) {
        var FJ;
        if (0 === this.sparking.length || !JJ.particlesEnabled() || ZJ === this.lastFrame) return;
        this.lastFrame = ZJ;
        let UJ = 0,
          eJ = 0;
        for (const nJ of this.sparking) UJ += IG(nJ), eJ += MG(nJ);
        const XJ = UJ > 8 ? 8 / UJ : 1,
          AJ = eJ > 6 ? 6 / eJ : 1;
        let qJ, jJ = null,
          YJ = null;
        for (const nJ of this.sparking) nJ.budget = Math.min(nJ.budget + IG(nJ) * XJ * cJ, 2), nJ.budget >= 1 && (!jJ || nJ.budget > jJ.budget) && (jJ = nJ), nJ.glassBudget = Math.min(nJ.glassBudget + MG(nJ) * AJ * cJ, 2), nJ.glassBudget >= 1 && (!YJ || nJ.glassBudget > YJ.glassBudget) && (YJ = nJ);
        if (jJ) jJ.budget--, qJ = jJ.spots[jJ.cursor++ % jJ.spots.length];
        else {
          if (!YJ) return;
          YJ.glassBudget--, qJ = YJ.glass[Math.floor(Math.random() * YJ.glass.length)]
        }
        const [hJ, DJ] = qJ, sJ = null !== (FJ = this.emitter) && void 0 !== FJ ? FJ : this.create(JJ, hJ, DJ);
        sJ.moveTo(hJ, DJ), sJ.emit(yG.count)
      }
      dispose() {
        var JJ;
        null === (JJ = this.emitter) || void 0 === JJ || JJ.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(JJ, cJ, ZJ) {
        const FJ = Math.ceil(14 * yG.count * yG.life[1]) + yG.count;
        return this.emitter = JJ.createParticles(EG(yG, FJ), {
          pos: cJ,
          half: ZJ
        }), this.emitter
      }
    }
    const kG = [2, 3.2],
      pG = 1 / 3,
      dG = 1 / .6,
      zG = {
        texture: mG,
        qh: Math.ceil(18 * kG[1]) + 4,
        minLifeTime: kG[0] / dG,
        maxLifeTime: kG[1] / dG,
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
        blendMode: SA.g.Standard
      };
    class NG {
      constructor(JJ) {
        this.plans = JJ, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new PG, this.frame = 0, this.outline = new hG(JJ)
      }
      onAfterRender(JJ, cJ, ZJ) {
        const FJ = performance.now(),
          UJ = 0 === this.lastMs ? 0 : Math.min(FJ - this.lastMs, 250) / 1e3;
        if (this.lastMs = FJ, this.outline.fade(JJ, FJ), this.puff(JJ, UJ, ZJ), this.sparks.emit(JJ, UJ, this.frame++), FJ - this.lastCheckMs < 150) return;
        this.lastCheckMs = FJ;
        const eJ = this.plans.all().filter((JJ => JJ.formed && OG(JJ.box.ctrl, ZJ) <= 4096));
        this.plumes = eJ.filter((JJ => "reactor" === JJ.kind && JJ.level > 0)).map((JJ => ({
          box: JJ.box,
          level: JJ.level
        }))), this.updateHums(JJ, cJ, eJ, ZJ), this.sparks.update(JJ, eJ, ZJ, FJ), this.chimeFormed(JJ, cJ, eJ, FJ)
      }
      dispose(JJ) {
        var cJ;
        this.outline.dispose(JJ), null === (cJ = this.steam) || void 0 === cJ || cJ.dispose(), this.steam = null, this.sparks.dispose();
        for (const ZJ of this.hums.values()) ZJ.stop();
        this.hums.clear()
      }
      chimeFormed(JJ, cJ, ZJ, FJ) {
        const UJ = this.outline.check(JJ, ZJ, FJ);
        UJ && JJ.playSound(cJ, "exp_levelup", .6, 1, {
          lF: [UJ.box.ctrl[0] + .5, UJ.box.ctrl[1], UJ.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(JJ, cJ, ZJ) {
        const FJ = this.plumes;
        if (0 === FJ.length || !JJ.particlesEnabled()) return void(this.plumeBudget = 0);
        const UJ = FJ.reduce(((JJ, cJ) => JJ + 3 * cJ.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + UJ * cJ, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let eJ = this.plumeCursor % (UJ / 3);
        this.plumeCursor++;
        let XJ = FJ[0];
        for (const hJ of FJ) {
          if (eJ < hJ.level) {
            XJ = hJ;
            break
          }
          eJ -= hJ.level
        }
        const {
          lo: AJ,
          hi: qJ
        } = Vq(XJ.box);
        if (function(JJ, cJ, ZJ) {
            const FJ = Math.max(JJ[0] - ZJ[0], 0, ZJ[0] - cJ[0]),
              UJ = Math.max(JJ[2] - ZJ[2], 0, ZJ[2] - cJ[2]);
            return Math.hypot(FJ, ZJ[1] - cJ[1], UJ)
          }(AJ, qJ, ZJ) < 6 && Math.random() > pG) return;
        const jJ = [(AJ[0] + qJ[0]) / 2, qJ[1] + .05, (AJ[2] + qJ[2]) / 2],
          YJ = [(qJ[0] - AJ[0]) / 2 - .5, .05, (qJ[2] - AJ[2]) / 2 - .5];
        this.steam ??= JJ.createParticles(zG, {
          pos: jJ,
          half: YJ
        }), this.steam.moveTo(jJ, YJ), this.steam.emit(1)
      }
      updateHums(JJ, cJ, ZJ, FJ) {
        const UJ = new Map;
        for (const XJ of ZJ) "reactor" === XJ.kind && XJ.level > 0 && OG(XJ.box.ctrl, FJ) <= 576 && UJ.set(`${eJ=XJ.box.ctrl,`${eJ[0]},${eJ[1]},${eJ[2]}`}:${XJ.level}`, XJ);
        var eJ;
        for (const [XJ, AJ] of this.hums) UJ.has(XJ) || (AJ.stop(), this.hums.delete(XJ));
        for (const [XJ, AJ] of UJ) {
          if (this.hums.has(XJ)) continue;
          const {
            lo: ZJ,
            hi: FJ
          } = Vq(AJ.box), UJ = [(ZJ[0] + FJ[0]) / 2, ZJ[1], (ZJ[2] + FJ[2]) / 2], eJ = JJ.playSound(cJ, "rocketEngineLoop", .08 + .06 * AJ.level, .55, {
            lF: UJ,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          eJ && this.hums.set(XJ, eJ)
        }
      }
    }

    function OG(JJ, cJ) {
      return (JJ[0] - cJ[0]) ** 2 + (JJ[1] - cJ[1]) ** 2 + (JJ[2] - cJ[2]) ** 2
    }
    class TG {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      Rm(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const FJ = [JJ.baf2BombAt[0], JJ.baf2BombAt[1], JJ.baf2BombAt[2]],
          UJ = JJ.baf2BombR;
        if (JJ.baf2BombBoom) {
          const JJ = Math.hypot(cJ[0] - FJ[0], cJ[1] - FJ[1], cJ[2] - FJ[2]);
          this.Uf({
            fuse: null,
            blast: {
              at: FJ,
              r: UJ,
              receivedAt: ZJ,
              distance: JJ,
              flash: JJ <= 3 * UJ
            }
          })
        } else this.Uf({
          ...this.snapshot,
          fuse: JJ.baf2BombMs > 0 ? {
            at: FJ,
            r: UJ,
            endsAt: ZJ + JJ.baf2BombMs
          } : null
        })
      }
      get() {
        return this.snapshot
      }
      subscribe(JJ) {
        return this.listeners.add(JJ), () => {
          this.listeners.delete(JJ)
        }
      }
      dispose() {
        this.listeners.clear(), this.snapshot = {
          fuse: null,
          blast: null
        }
      }
      Uf(JJ) {
        this.snapshot = JJ;
        for (const cJ of this.listeners) cJ()
      }
    }
    const CG = (0, FJ.memo)((function(JJ) {
      var cJ;
      let {
        store: ZJ
      } = JJ;
      const {
        t: UJ
      } = (0, vU.F)(), [eJ, XJ] = (0, FJ.useState)((() => ZJ.get())), [AJ, qJ] = (0, FJ.useState)((() => performance.now()));
      (0, FJ.useEffect)((() => (XJ(ZJ.get()), ZJ.subscribe((() => {
        XJ(ZJ.get()), qJ(performance.now())
      })))), [ZJ]);
      const {
        fuse: jJ,
        blast: YJ
      } = eJ;
      (0, FJ.useEffect)((() => {
        if (!jJ) return;
        const JJ = setInterval((() => {
          qJ(performance.now())
        }), 250);
        return () => {
          clearInterval(JJ)
        }
      }), [jJ]);
      const [hJ, DJ] = (0, FJ.useState)(!1);
      (0, FJ.useEffect)((() => {
        if (null === YJ || void 0 === YJ || !YJ.flash) return;
        DJ(!0);
        const JJ = setTimeout((() => {
          DJ(!1)
        }), 2500);
        return () => {
          clearTimeout(JJ)
        }
      }), [YJ]);
      const sJ = jJ ? function(JJ, cJ) {
        return JJ.endsAt <= cJ ? 0 : Math.ceil((JJ.endsAt - cJ) / 1e3)
      }(jJ, AJ) : 0;
      return (0, xe.jsxs)(xe.Fragment, {
        children: [sJ > 0 && (0, xe.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: UJ("buildAFactory2Game:bombCountdown", {
            amount: String(sJ),
            radius: String(null !== (cJ = null === jJ || void 0 === jJ ? void 0 : jJ.r) && void 0 !== cJ ? cJ : 0)
          })
        }), hJ && (0, xe.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function uG(JJ) {
      const cJ = Math.min(4, Math.max(1, JJ / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * JJ / 4)),
        capSpread: Math.min(5 * JJ / 8, 24 * cJ),
        capThick: 6 * cJ,
        stemHalfWidth: 3 * cJ,
        puffScale: cJ
      }
    }
    class iG {
      constructor() {
        this.hj = !1
      }
      hold(JJ) {
        JJ.getCameraFar() < 1e3 && (JJ.setCameraFar(1e3), this.hj = !0)
      }
      release(JJ) {
        this.hj && (this.hj = !1, JJ.setCameraFar(null))
      }
    }
    const RG = 1 / .6,
      LG = [.2, .1, .2],
      aG = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      BG = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: SA.g.Standard,
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
      tG = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: SA.g.Standard,
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
      oG = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: SA.g.Standard,
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
      lG = {
        texture: mG,
        qh: Math.ceil(120) + 4,
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
        blendMode: SA.g.Add
      };
    class Jf {
      constructor(JJ) {
        this.store = JJ, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new iG, this.timers = []
      }
      onAfterRender(JJ, cJ) {
        const ZJ = performance.now(),
          FJ = 0 === this.lastMs ? 0 : Math.min(ZJ - this.lastMs, 250) / 1e3;
        this.lastMs = ZJ;
        const {
          fuse: UJ,
          blast: eJ
        } = this.store.get();
        null !== eJ && eJ !== this.shownBlast && (this.shownBlast = eJ, this.startBlast(JJ, cJ, eJ, ZJ));
        const XJ = JJ.particlesEnabled();
        null !== UJ && UJ.endsAt > ZJ && XJ ? this.emitBeacon(JJ, UJ, FJ, ZJ) : this.beaconBudget = 0, null !== this.cloud && (ZJ - this.cloud.startMs > 33e3 ? this.disposeCloud(JJ) : (this.far.hold(JJ), XJ && this.emitCloud(JJ, FJ, ZJ)))
      }
      dispose(JJ) {
        var cJ;
        null === (cJ = this.beacon) || void 0 === cJ || cJ.dispose(), this.beacon = null, this.disposeCloud(JJ);
        for (const ZJ of this.timers) clearTimeout(ZJ);
        this.timers.length = 0
      }
      emitBeacon(JJ, cJ, ZJ, FJ) {
        const UJ = cJ.endsAt - FJ < 5e3 ? 350 : 1e3,
          eJ = .5 + .5 * Math.sin(2 * Math.PI * FJ / UJ);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * eJ * ZJ, 4), this.beaconBudget < 1) return;
        const XJ = Math.floor(this.beaconBudget);
        this.beaconBudget -= XJ;
        const [AJ, qJ, jJ] = cJ.at, YJ = [AJ + .5, qJ + 1.1, jJ + .5];
        this.beacon ??= JJ.createParticles(lG, {
          pos: YJ,
          half: LG
        }), this.beacon.moveTo(YJ), this.beacon.emit(XJ)
      }
      startBlast(JJ, cJ, ZJ, FJ) {
        var UJ;
        null === (UJ = this.beacon) || void 0 === UJ || UJ.dispose(), this.beacon = null, this.disposeCloud(JJ);
        const eJ = (0, KA.isMobile)() ? .5 : 1;
        this.streams = [BG, tG, oG].map((JJ => {
          const cJ = Math.round(JJ.count * eJ);
          return {
            spec: JJ,
            particles: null,
            rate: cJ / ((JJ.toMs - JJ.fromMs) / 1e3),
            budget: 0,
            left: cJ
          }
        })), this.cloud = {
          blast: ZJ,
          startMs: FJ
        };
        const XJ = Math.max(.25, 1 - ZJ.distance / (6 * ZJ.r)),
          AJ = ZJ.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [ZJ, FJ, UJ] of aG) Zf(JJ, cJ, ZJ, XJ * FJ, UJ)
        }), AJ))
      }
      emitCloud(JJ, cJ, ZJ) {
        const {
          blast: FJ,
          startMs: UJ
        } = this.cloud, eJ = ZJ - UJ, [XJ, AJ, qJ] = FJ.at, jJ = uG(FJ.r);
        for (const YJ of this.streams) {
          const {
            spec: ZJ
          } = YJ;
          if (YJ.left <= 0 || eJ < ZJ.fromMs) continue;
          YJ.budget += YJ.rate * cJ;
          const UJ = Math.min(Math.floor(YJ.budget), YJ.left);
          if (UJ < 1) continue;
          YJ.budget -= UJ, YJ.left -= UJ;
          const hJ = YJ.particles ??= this.createStream(JJ, ZJ, FJ);
          if (ZJ === BG) {
            const JJ = jJ.stemHalfWidth;
            hJ.moveTo([XJ, AJ + 1, qJ], [JJ, 1, JJ])
          } else if (ZJ === tG) {
            const JJ = jJ.capSpread * Math.min(1, (eJ - ZJ.fromMs) / 3e3),
              cJ = Math.sqrt(Math.random()),
              FJ = 2 * Math.random() * Math.PI,
              UJ = Math.cos(FJ) * cJ,
              YJ = Math.sin(FJ) * cJ,
              DJ = XJ + UJ * JJ,
              sJ = qJ + YJ * JJ,
              nJ = jJ.capThick,
              GJ = AJ + jJ.capHeight + nJ * (1 - cJ * cJ) * 2;
            hJ.setDirections([.7 * UJ, .05, .7 * YJ], [UJ, .2, YJ]), hJ.moveTo([DJ, GJ, sJ], [nJ, nJ, nJ])
          } else {
            this.ringAngle += 2.39996;
            const JJ = Math.cos(this.ringAngle),
              cJ = Math.sin(this.ringAngle);
            hJ.setDirections([JJ, .05, cJ], [JJ, .1, cJ]), hJ.moveTo([XJ + 2 * JJ, AJ + .5, qJ + 2 * cJ], [0, .5, 0])
          }
          hJ.emit(UJ)
        }
      }
      createStream(JJ, cJ, ZJ) {
        const {
          r: FJ
        } = ZJ, UJ = Math.max(cJ.life[0], FJ / 25), eJ = cJ === oG ? [.9 * UJ, UJ] : cJ.life, XJ = uG(FJ), AJ = cJ === oG ? 1 : XJ.puffScale, qJ = {
          texture: mG,
          qh: cJ.count + 4,
          minLifeTime: eJ[0] / RG,
          maxLifeTime: eJ[1] / RG,
          minSize: cJ.size[0] * AJ,
          maxSize: cJ.size[1] * AJ,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, cJ.gravity * RG * RG, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: cJ.from[0],
            maxColor: cJ.from[1]
          }, {
            timeFraction: .6,
            minColor: cf(cJ.from[0], cJ.to[0]),
            maxColor: cf(cJ.from[1], cJ.to[1])
          }, {
            timeFraction: 1,
            minColor: cJ.to[0],
            maxColor: cJ.to[1]
          }],
          blendMode: cJ.blend
        };
        if (cJ === BG) {
          const JJ = XJ.capHeight / ((eJ[0] + eJ[1]) / 2);
          qJ.minEmitPower = .9 * JJ * RG, qJ.maxEmitPower = 1.05 * JJ * RG, qJ.dir1 = [-.1, 1, -.1], qJ.dir2 = [.1, 1, .1]
        } else cJ === tG ? (qJ.minEmitPower = 1.2, qJ.maxEmitPower = 2, qJ.dir1 = [-1, .05, -1], qJ.dir2 = [1, .2, 1]) : (qJ.minEmitPower = 39.583333333333336, qJ.maxEmitPower = 41.66666666666667, qJ.dir1 = [1, 0, 0], qJ.dir2 = [1, 0, 0]);
        return JJ.createParticles(qJ, {
          pos: ZJ.at
        })
      }
      disposeCloud(JJ) {
        for (const ZJ of this.streams) {
          var cJ;
          null === (cJ = ZJ.particles) || void 0 === cJ || cJ.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(JJ)
      }
    }

    function cf(JJ, cJ) {
      return [(JJ[0] + cJ[0]) / 2, (JJ[1] + cJ[1]) / 2, (JJ[2] + cJ[2]) / 2, .75 * JJ[3]]
    }

    function Zf(JJ, cJ, ZJ, FJ, UJ) {
      try {
        JJ.playSound(cJ, ZJ, FJ, UJ)
      } catch (eJ) {
        console.error(eJ)
      }
    }
    const Ff = {
        qh: 720,
        perS: 100
      },
      Uf = {
        qh: 320,
        perS: 44
      };
    class ef {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(JJ, cJ) {
        this.zone = {
          centre: [...JJ.centre],
          r: JJ.r,
          band: JJ.band ? [JJ.band[0], JJ.band[1]] : void 0
        }, this.endsAt = cJ
      }
      stop() {
        this.zone = null
      }
      Rm(JJ, cJ) {
        const {
          baf2FalloutMs: ZJ,
          baf2FalloutAt: FJ,
          baf2FalloutR: UJ,
          baf2FalloutY: eJ
        } = JJ;
        ZJ > 0 && FJ && void 0 !== UJ ? this.start({
          centre: FJ,
          r: UJ,
          band: eJ
        }, cJ + ZJ) : this.stop()
      }
      perS(JJ, cJ, ZJ) {
        const FJ = this.zone;
        if (!FJ) return 0;
        const UJ = this.endsAt - JJ;
        return UJ <= 0 ? (this.zone = null, 0) : FJ.band && (cJ[1] < FJ.band[0] || cJ[1] > FJ.band[1]) || Math.hypot(cJ[0] - FJ.centre[0], cJ[2] - FJ.centre[2]) > FJ.r ? 0 : ZJ.perS * Math.min(1, UJ / 5e3)
      }
    }
    const Xf = [5, 7],
      Af = [24, 8, 24],
      qf = .5,
      jf = 1 / .6,
      Yf = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class hf {
      constructor() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, KA.isMobile)();
        this.state = new ef, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(JJ) {
          return JJ ? Uf : Ff
        }(JJ)
      }
      startFallout(JJ, cJ) {
        this.state.start(JJ, cJ)
      }
      stopFallout() {
        this.state.stop()
      }
      Rm(JJ) {
        this.state.Rm(JJ, performance.now())
      }
      onAfterRender(JJ, cJ) {
        var ZJ;
        const FJ = performance.now(),
          UJ = 0 === this.lastMs ? 0 : Math.min(FJ - this.lastMs, 250) / 1e3;
        this.lastMs = FJ;
        const eJ = this.state.perS(FJ, cJ, this.tier);
        if (eJ <= 0 || !JJ.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + eJ * UJ, eJ / 4);
        const XJ = Math.floor(this.budget);
        if (XJ < 1) return;
        this.budget -= XJ;
        const AJ = this.at;
        AJ[0] = cJ[0], AJ[1] = cJ[1] + 12, AJ[2] = cJ[2];
        const qJ = null !== (ZJ = this.systems) && void 0 !== ZJ ? ZJ : this.create(JJ, AJ),
          jJ = this.amounts;
        jJ[0] = 0, jJ[1] = 0;
        for (let YJ = 0; YJ < XJ; YJ++) jJ[Math.random() < .3 ? 1 : 0]++;
        for (let YJ = 0; YJ < qJ.length; YJ++) jJ[YJ] > 0 && (qJ[YJ].moveTo(AJ, Af), qJ[YJ].emit(jJ[YJ]))
      }
      dispose() {
        for (const cJ of null !== (JJ = this.systems) && void 0 !== JJ ? JJ : []) {
          var JJ;
          cJ.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(JJ, cJ) {
        return this.systems = Yf.map((ZJ => {
          let {
            rgba: [FJ, UJ, eJ, XJ],
            share: AJ
          } = ZJ;
          const qJ = {
            texture: "square_particle",
            qh: Math.ceil(this.tier.qh * AJ),
            minLifeTime: Xf[0] / jf,
            maxLifeTime: Xf[1] / jf,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [qf, -1, qf],
            colorGradients: [{
              timeFraction: 0,
              minColor: [FJ, UJ, eJ, 0]
            }, {
              timeFraction: .15,
              minColor: [FJ, UJ, eJ, XJ]
            }, {
              timeFraction: .8,
              minColor: [FJ, UJ, eJ, XJ]
            }, {
              timeFraction: 1,
              minColor: [FJ, UJ, eJ, 0]
            }],
            blendMode: SA.g.Standard
          };
          return JJ.createParticles(qJ, {
            pos: cJ,
            half: Af
          })
        })), this.systems
      }
    }
    const Df = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function sf(JJ) {
      const cJ = /\|rot(\d)/.exec(JJ);
      return Df[cJ ? Number(cJ[1]) : 1]
    }
    var nf = ZJ(528),
      Gf = ZJ(37458);
    const ff = new Set(nf.g);

    function xf(JJ) {
      if (-2 !== JJ.count) return null;
      const cJ = CJ(JJ.item);
      return null !== cJ && ff.has(cJ) ? cJ : null
    }

    function rf(JJ) {
      const {
        width: cJ,
        height: ZJ
      } = (0, Gf.c)(JJ).hitBoxDimensions;
      return .55 / Math.max(cJ, ZJ)
    }

    function vf(JJ, cJ, ZJ) {
      if (!ZJ) return !1;
      const FJ = JJ[0] + .5 - cJ[0],
        UJ = JJ[1] + .5 - cJ[1],
        eJ = JJ[2] + .5 - cJ[2];
      return FJ * FJ + UJ * UJ + eJ * eJ <= 576
    }

    function mf(JJ, cJ) {
      return Math.atan2(JJ[0], JJ[2]) + Math.PI + cJ
    }

    function Qf(JJ, cJ) {
      const ZJ = 2 * Math.PI;
      return (JJ + ZJ * cJ / 1e4) % ZJ
    }
    class Ef {
      constructor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = JJ, this.now = cJ, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = JJ.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(JJ, cJ) {
        if (0 === this.farms.size) return;
        const ZJ = this.now(),
          FJ = Number.isNaN(this.frameMs) ? 0 : Math.min(ZJ - this.frameMs, 100);
        this.frameMs = ZJ, ZJ - this.checkedMs >= 1e3 && (this.checkedMs = ZJ, this.check(JJ, cJ));
        for (const UJ of this.farms.values()) UJ.shown && UJ.running && null !== UJ.model && FJ > 0 && (UJ.spin = Qf(UJ.spin, FJ), UJ.model.setPose(UJ.feet, mf(UJ.front, UJ.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const JJ of this.farms.values()) this.drop(JJ);
        this.farms.clear()
      }
      sync() {
        const JJ = new Set;
        for (const cJ of this.labels.list()) {
          const ZJ = xf(cJ);
          if (null === ZJ) continue;
          JJ.add(cJ.key);
          const FJ = this.farms.get(cJ.key);
          if ((null === FJ || void 0 === FJ ? void 0 : FJ.mob) === ZJ) continue;
          FJ && this.drop(FJ);
          const [UJ, eJ, XJ] = cJ.pos;
          this.farms.set(cJ.key, {
            pos: cJ.pos,
            feet: [UJ + .5, eJ + 1, XJ + .5],
            mob: ZJ,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [cJ, ZJ] of this.farms) JJ.has(cJ) || (this.drop(ZJ), this.farms.delete(cJ));
        this.checkedMs = -1 / 0
      }
      check(JJ, cJ) {
        for (const ZJ of this.farms.values()) {
          const [FJ, UJ, eJ] = ZJ.pos, XJ = En(JJ, ZJ.pos);
          null !== XJ && VZ(XJ) === PJ && vf(ZJ.pos, cJ, "Air" === En(JJ, [FJ, UJ + 1, eJ])) ? (ZJ.running = XJ.endsWith("|Running"), ZJ.front = sf(XJ), null === ZJ.model && (ZJ.model = JJ.createMobModel(ZJ.mob, rf(ZJ.mob)), null === ZJ.model) || (ZJ.model.setPose(ZJ.feet, mf(ZJ.front, ZJ.spin)), ZJ.shown || (ZJ.model.setVisible(!0), ZJ.shown = !0))) : (ZJ.shown && null !== ZJ.model && ZJ.model.setVisible(!1), ZJ.shown = !1)
        }
      }
      drop(JJ) {
        var cJ;
        null === (cJ = JJ.model) || void 0 === cJ || cJ.dispose(), JJ.model = null, JJ.shown = !1
      }
    }
    class Vf {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(JJ) {
        var cJ;
        this.island = JJ.baf2ColIsland, this.islandSite = (cJ = JJ.baf2ColSite) && 8 === cJ.length ? {
          spawnXZ: [cJ[0], cJ[1]],
          coreXZ: [cJ[2], cJ[3]],
          minXZ: [cJ[4], cJ[5]],
          maxXZ: [cJ[6], cJ[7]]
        } : null, this.views = JJ.baf2ColList.map((JJ => ({
          entry: lF(JJ)
        }))), this.beamsVersion++, this.emit()
      }
      onStatus(JJ) {
        this.status = JJ, this.emit()
      }
      onOpen(JJ) {
        this.openHeld = JJ
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
        return this.views.map((JJ => JJ.entry))
      }
      entryAtRoot(JJ) {
        var cJ;
        return null === (cJ = this.views.find((cJ => {
          let {
            entry: ZJ
          } = cJ;
          return ZJ.focus[0] === JJ[0] && ZJ.focus[1] === JJ[1] + 1 && ZJ.focus[2] === JJ[2]
        }))) || void 0 === cJ ? void 0 : cJ.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(JJ, cJ) {
        return wq(this.entries(), JJ, cJ)
      }
      lookSource() {
        return {
          handles: JJ => eF(JJ) >= 0 || XF(JJ),
          line: (JJ, cJ) => this.lookLine(JJ, cJ),
          version: () => this.beamsVersion
        }
      }
      subscribe(JJ) {
        return this.listeners.add(JJ), () => {
          this.listeners.delete(JJ)
        }
      }
      dispose() {
        this.listeners.clear(), this.island = null, this.views = [], this.status = null, this.openHeld = null
      }
      emit() {
        for (const JJ of this.listeners) JJ()
      }
    }
    const Kf = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((JJ => JJ / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((JJ => [JJ, JJ + 1, JJ + 2, JJ, JJ + 2, JJ + 3]))
    };

    function yf(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
      let AJ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const qJ = Math.cos(AJ),
        jJ = Math.sin(AJ),
        YJ = JJ.positions.length / 3,
        {
          positions: hJ,
          indices: DJ
        } = Kf;
      for (let sJ = 0; sJ < hJ.length; sJ += 3) {
        const AJ = hJ[sJ] * UJ,
          YJ = hJ[sJ + 2] * XJ;
        JJ.positions.push(cJ + AJ * qJ + YJ * jJ, ZJ + hJ[sJ + 1] * eJ, FJ - AJ * jJ + YJ * qJ)
      }
      for (const sJ of DJ) JJ.indices.push(YJ + sJ)
    }

    function Sf(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return cJ < 1 ? {
        rgb: JJ,
        alpha: cJ
      } : {
        rgb: JJ,
        alpha: 1,
        opaque: !0
      }
    }
    class If {
      constructor(JJ, cJ) {
        this.style = JJ, this.perSource = cJ, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(JJ) {
        this.sources = JJ, 0 === JJ.length && (this.budget = 0)
      }
      Hh(JJ, cJ, ZJ) {
        const FJ = this.sources.length;
        if (0 !== FJ) {
          var UJ, eJ;
          this.budget = Math.min(this.budget + (UJ = FJ, eJ = this.perSource, Math.min(UJ * eJ, iq) * cJ), 2);
          for (let cJ = 0; cJ < FJ && this.budget >= 1; cJ++) {
            const cJ = this.sources[this.cursor % FJ];
            this.cursor = (this.cursor + 1) % FJ;
            if (!(Math.max(Math.abs(cJ.x - ZJ[0]), Math.abs(cJ.y - ZJ[1]), Math.abs(cJ.z - ZJ[2])) > 32)) return this.puff(JJ, cJ), void this.budget--
          }
        }
      }
      dispose() {
        var JJ;
        null === (JJ = this.particles) || void 0 === JJ || JJ.dispose(), this.particles = null, this.sources = []
      }
      puff(JJ, cJ) {
        let {
          x: ZJ,
          y: FJ,
          z: UJ,
          h: eJ,
          faces: XJ
        } = cJ;
        const AJ = function(JJ, cJ, ZJ, FJ, UJ) {
            const [eJ, XJ, AJ] = UJ[Math.floor(Math.random() * UJ.length)], qJ = .04, jJ = (JJ, cJ, ZJ) => JJ > 0 ? cJ + ZJ + qJ : JJ < 0 ? cJ - qJ : cJ + .1, YJ = (JJ, cJ, ZJ) => JJ > 0 ? cJ + ZJ + qJ : JJ < 0 ? cJ - qJ : cJ + ZJ - .1, hJ = [jJ(eJ, JJ, 1), jJ(XJ, cJ, FJ), jJ(AJ, ZJ, 1)], DJ = [YJ(eJ, JJ, 1), YJ(XJ, cJ, FJ), YJ(AJ, ZJ, 1)];
            return {
              pos: [(hJ[0] + DJ[0]) / 2, (hJ[1] + DJ[1]) / 2, (hJ[2] + DJ[2]) / 2],
              half: [(DJ[0] - hJ[0]) / 2, (DJ[1] - hJ[1]) / 2, (DJ[2] - hJ[2]) / 2],
              out: [eJ, XJ, AJ]
            }
          }(ZJ, FJ, UJ, eJ, XJ),
          {
            style: qJ
          } = this,
          jJ = this.particles ??= JJ.createParticles(EG(qJ, Math.ceil(qJ.count * iq * qJ.life[1]) + 4), AJ);
        jJ.moveTo(AJ.pos, AJ.half);
        const [YJ, hJ, DJ] = AJ.out, sJ = qJ.spread;
        jJ.setDirections([YJ - sJ, .6 + hJ, DJ - sJ], [YJ + sJ, 1 + hJ, DJ + sJ]), jJ.emit(qJ.count)
      }
    }
    const Mf = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class bf {
      constructor() {
        this.green = new If(Lq.green, Cq), this.pink = new If(Lq.pink, uq), this.colliders = [], this.lastMs = 0
      }
      setSources(JJ) {
        this.colliders = JJ;
        const cJ = [],
          ZJ = [];
        for (const FJ of JJ) {
          const [JJ, UJ, eJ] = FJ.focus;
          cJ.push({
            x: JJ,
            y: UJ - 1,
            z: eJ,
            h: 2,
            faces: Mf
          });
          for (let cJ = 0; cJ < 4; cJ++) {
            if (!FJ.live[cJ]) continue;
            const [JJ, UJ, eJ] = jF(FJ.focus, cJ, lZ.LASER_D), [XJ, , AJ] = qF[cJ], qJ = Mf.filter((JJ => JJ[0] !== XJ || JJ[2] !== AJ || 0 !== JJ[1]));
            ZJ.push({
              x: JJ,
              y: UJ,
              z: eJ,
              h: 1,
              faces: qJ
            })
          }
        }
        this.green.setSources(cJ), this.pink.setSources(ZJ)
      }
      onAfterRender(JJ) {
        const cJ = performance.now(),
          ZJ = 0 === this.lastMs ? 0 : Math.min(cJ - this.lastMs, 250) / 1e3;
        if (this.lastMs = cJ, 0 === this.colliders.length || !JJ.particlesEnabled()) return;
        const FJ = JJ.getCameraPosition();
        this.green.Hh(JJ, ZJ, FJ), this.pink.Hh(JJ, ZJ, FJ)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const wf = 1.04,
      Wf = Sf([1, 120 / 255, 220 / 255]),
      gf = Sf([1, .25, .25], .35);
    class Hf {
      constructor(JJ) {
        this.store = JJ, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new bf
      }
      onAfterRender(JJ) {
        this.store.version() !== this.builtVersion && this.rebuild(JJ);
        const cJ = performance.now();
        for (const ZJ of this.beams) {
          const FJ = 1 + .35 * Math.sin(cJ / 700 * Math.PI * 2 + ZJ.phase);
          JJ.setGameMesh(ZJ.mesh, {
            scale: [ZJ.alongX ? 1 : FJ, FJ, ZJ.alongX ? FJ : 1]
          })
        }
        this.glow.onAfterRender(JJ)
      }
      dispose(JJ) {
        this.clear(JJ), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(JJ) {
        this.clear(JJ), this.builtVersion = this.store.version();
        const cJ = [];
        for (const {
            entry: ZJ
          }
          of this.store.colliders()) ZJ.on && ZJ.live.some(Boolean) && (this.addBeams(JJ, ZJ), cJ.push(ZJ)), ZJ.blockers.length > 0 && this.addMarkers(JJ, ZJ);
        this.glow.setSources(cJ)
      }
      addBeams(JJ, cJ) {
        const [ZJ, FJ, UJ] = cJ.focus, eJ = Tq - .25, XJ = (.25 + Tq) / 2;
        for (let AJ = 0; AJ < 4; AJ++) {
          if (!cJ.live[AJ]) continue;
          const [qJ, , jJ] = qF[AJ], YJ = 0 !== qJ, hJ = {
            positions: [],
            indices: []
          };
          yf(hJ, 0, 0, 0, YJ ? eJ : .2, .2, YJ ? .2 : eJ);
          const DJ = [ZJ + .5 + qJ * XJ, FJ + .5, UJ + .5 + jJ * XJ],
            sJ = JJ.createGameMesh(hJ, Wf, DJ);
          this.meshes.push(sJ), this.beams.push({
            mesh: sJ,
            alongX: YJ,
            phase: AJ * Math.PI / 2
          })
        }
      }
      addMarkers(JJ, cJ) {
        const ZJ = cJ.blockers[0],
          FJ = {
            positions: [],
            indices: []
          };
        for (const [UJ, eJ, XJ] of cJ.blockers) yf(FJ, UJ - ZJ[0] + .5, eJ - ZJ[1] + .5, XJ - ZJ[2] + .5, wf, wf, wf);
        this.meshes.push(JJ.createGameMesh(FJ, gf, ZJ))
      }
      clear(JJ) {
        for (const cJ of this.meshes) JJ.disposeGameMesh(cJ);
        this.meshes = [], this.beams = []
      }
    }
    const Pf = [.56, .83, 1],
      kf = [1, .73, .08],
      pf = [1, .25, .25],
      df = [.85, .85, .85],
      zf = [.3, .45, .6];

    function Nf(JJ, cJ, ZJ, FJ) {
      let UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        eJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const XJ = UJ / 2,
        AJ = UJ + eJ;
      for (const qJ of [-XJ, XJ])
        for (const UJ of [-XJ, XJ]) yf(JJ, cJ, ZJ + qJ, FJ + UJ, AJ, eJ, eJ), yf(JJ, cJ + qJ, ZJ, FJ + UJ, eJ, AJ, eJ), yf(JJ, cJ + qJ, ZJ + UJ, FJ, eJ, eJ, AJ)
    }

    function Of(JJ) {
      return cJ => JJ.isBlockInLoadedChunk(cJ[0], cJ[1], cJ[2]) && 0 === JJ.getBlockId(cJ[0], cJ[1], cJ[2])
    }

    function Tf(JJ) {
      return JJ.map((JJ => {
        let {
          free: cJ,
          blocked: ZJ,
          gaps: FJ,
          supports: UJ
        } = JJ;
        return `${cJ.join(";")}|${ZJ.join(";")}|${FJ.join(";")}|${UJ.join(";")}`
      })).join("/")
    }

    function Cf(JJ, cJ, ZJ) {
      let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const eJ = cJ[0],
        XJ = {
          positions: [],
          indices: []
        };
      for (const [AJ, qJ, jJ] of cJ) Nf(XJ, AJ - eJ[0] + .5, qJ - eJ[1] + .5, jJ - eJ[2] + .5, FJ, UJ);
      return JJ.createGameMesh(XJ, ZJ, eJ)
    }
    class uf {
      constructor(JJ) {
        this.store = JJ, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(JJ, cJ, ZJ) {
        var FJ;
        const UJ = null === (FJ = JJ.WcJ(cJ)) || void 0 === FJ ? void 0 : FJ.name;
        if (UJ !== cF && UJ !== JF) return void("" !== this.shownKey && this.show(JJ, "", []));
        const eJ = performance.now();
        if (eJ - this.lastCheckMs >= 200 && (this.lastCheckMs = eJ, UJ === cF ? this.check(JJ, ZJ) : this.preview(JJ, ZJ)), this.pulses.length > 0) {
          const cJ = 1 + .12 * Math.sin(eJ / 1e3 * 1.25 * Math.PI * 2),
            ZJ = [cJ, cJ, cJ];
          for (const FJ of this.pulses) JJ.setGameMesh(FJ, {
            scale: ZJ
          })
        }
      }
      dispose(JJ) {
        this.clear(JJ), this.shownKey = ""
      }
      check(JJ, cJ) {
        const ZJ = Of(JJ),
          FJ = [];
        for (const {
            entry: eJ
          }
          of this.store.colliders()) {
          eJ.focus.every(((JJ, ZJ) => Math.abs(JJ + .5 - cJ[ZJ]) <= lZ.GHOST_REACH)) && FJ.push(Oq(eJ, ZJ))
        }
        const UJ = Tf(FJ);
        UJ !== this.shownKey && this.show(JJ, UJ, FJ)
      }
      preview(JJ, cJ) {
        const ZJ = JJ.getTargetedBlock(),
          FJ = ZJ ? [ZJ.bs[0], ZJ.bs[1], ZJ.bs[2]] : null,
          UJ = null !== FJ && FJ.every(((JJ, ZJ) => Math.abs(JJ + .5 - cJ[ZJ]) <= 8)),
          eJ = this.store.site(),
          XJ = UJ && eJ ? function(JJ, cJ, ZJ) {
            const FJ = AF(JJ);
            if (!FJ.every(cJ)) return null;
            const UJ = DF(JJ, ZJ);
            return {
              column: FJ,
              spots: Oq({
                focus: FJ[1],
                lasers: [!1, !1, !1, !1],
                open: UJ,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, cJ),
              fits: UJ.filter(Boolean).length >= lZ.MIN_SPOTS
            }
          }(FJ, Of(JJ), eJ) : null,
          AJ = XJ ? [XJ.spots] : [],
          qJ = XJ ? `preview ${FJ.join(",")}|${XJ.fits}|${Tf(AJ)}` : "";
        var jJ, YJ;
        qJ !== this.shownKey && this.show(JJ, qJ, AJ, null !== (jJ = null === XJ || void 0 === XJ ? void 0 : XJ.column) && void 0 !== jJ ? jJ : [], null === (YJ = null === XJ || void 0 === XJ ? void 0 : XJ.fits) || void 0 === YJ || YJ)
      }
      show(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          UJ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(JJ), this.shownKey = cJ, FJ.length > 0 && this.meshes.push(Cf(JJ, FJ, Sf(UJ ? df : pf)));
        for (const {
            free: eJ,
            blocked: XJ,
            gaps: AJ,
            supports: qJ
          }
          of ZJ) {
          for (const [cJ, ZJ, FJ] of eJ) {
            const UJ = {
              positions: [],
              indices: []
            };
            Nf(UJ, 0, 0, 0);
            const eJ = JJ.createGameMesh(UJ, Sf(Pf), [cJ + .5, ZJ + .5, FJ + .5]);
            this.meshes.push(eJ), this.pulses.push(eJ)
          }
          XJ.length > 0 && this.meshes.push(Cf(JJ, XJ, Sf(kf))), AJ.length > 0 && this.meshes.push(Cf(JJ, AJ, Sf(pf), 1.06, .07)), qJ.length > 0 && this.meshes.push(Cf(JJ, qJ, Sf(zf)))
        }
      }
      clear(JJ) {
        for (const cJ of this.meshes) JJ.disposeGameMesh(cJ);
        this.meshes = [], this.pulses = []
      }
    }
    class Rf {
      constructor() {
        this.stored = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(JJ) {
        if (!JJ.baf2TermOpen) return !1;
        JJ.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [cJ, ZJ] of JJ.baf2TermItems) ZJ > 0 ? this.stored.set(cJ, ZJ) : this.stored.delete(cJ);
        if (this.pending = this.pending.filter((cJ => cJ.seq > JJ.baf2TermAcked)), this.silos = JJ.baf2TermSilos, this.readOnly = JJ.baf2TermReadOnly, this.pocket = !0 === JJ.baf2TermPocket, JJ.baf2TermReset) this.resort();
        else
          for (const cJ of this.stored.keys()) this.order.includes(cJ) || this.order.push(cJ);
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((JJ, cJ) => this.amount(cJ) - this.amount(JJ) || JJ.localeCompare(cJ))), this.changed()
      }
      take(JJ, cJ) {
        const ZJ = function(JJ, cJ) {
          const ZJ = "number" === typeof JJ ? JJ : "one" === JJ ? 1 : "stack" === JJ ? 99 : cJ;
          return Math.min(cJ, ZJ)
        }(JJ, this.amount(cJ));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: cJ,
          amount: ZJ
        }), this.recents = [cJ, ...this.recents.filter((JJ => JJ !== cJ))].slice(0, 6), this.changed(), cc(this.seq, JJ, cJ)
      }
      amount(JJ) {
        var cJ;
        let ZJ = null !== (cJ = this.stored.get(JJ)) && void 0 !== cJ ? cJ : 0;
        for (const FJ of this.pending) FJ.item === JJ && (ZJ -= FJ.amount);
        return Math.max(0, ZJ)
      }
      items() {
        return this.order.filter((JJ => this.amount(JJ) > 0))
      }
      recent() {
        return this.recents.filter((JJ => this.amount(JJ) > 0))
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
      subscribe(JJ) {
        return this.listeners.add(JJ), () => {
          this.listeners.delete(JJ)
        }
      }
      changed() {
        this.version++;
        for (const JJ of this.listeners) JJ()
      }
    }
    var Lf = ZJ(37407);
    const af = {
      isBlock: JJ => void 0 !== wJ.m[JJ],
      harvestType: JJ => {
        var cJ;
        return null === (cJ = wJ.m[JJ]) || void 0 === cJ ? void 0 : cJ.harvestType
      },
      harvestLevel: JJ => {
        var cJ;
        return null === (cJ = wJ.m[JJ]) || void 0 === cJ ? void 0 : cJ.harvestLevel
      },
      dropsNothing: JJ => {
        var cJ;
        return null === (null === (cJ = wJ.m[JJ]) || void 0 === cJ ? void 0 : cJ.drops)
      },
      displayName: JJ => {
        var cJ;
        return null === (cJ = uX.m[JJ]) || void 0 === cJ ? void 0 : cJ.displayName
      },
      description: JJ => {
        var cJ;
        return null === (cJ = uX.m[JJ]) || void 0 === cJ ? void 0 : cJ.description
      },
      harvests: JJ => {
        var cJ;
        return null === (cJ = uX.m[JJ]) || void 0 === cJ ? void 0 : cJ.harvests
      },
      level: JJ => {
        var cJ;
        return null === (cJ = uX.m[JJ]) || void 0 === cJ ? void 0 : cJ.level
      }
    };

    function Bf(JJ, cJ, ZJ) {
      return function(JJ, cJ, ZJ, FJ) {
        var UJ, eJ;
        const XJ = cJ.split("|")[0],
          AJ = JJ.isBlock(cJ) ? cJ : JJ.isBlock(XJ) ? XJ : null;
        if (null === AJ || "rock" !== JJ.harvestType(AJ) || JJ.dropsNothing(AJ) && !wF.has(XJ)) return null;
        const qJ = ZJ && "rock" === JJ.harvests(ZJ) ? null !== (UJ = JJ.level(ZJ)) && void 0 !== UJ ? UJ : 0 : null,
          jJ = null !== (eJ = null !== FJ && void 0 !== FJ ? FJ : JJ.harvestLevel(AJ)) && void 0 !== eJ ? eJ : 0;
        return (null !== qJ ? jJ <= qJ : 0 === JJ.harvestLevel(AJ)) ? null : vF(JJ, jJ)
      }(af, JJ, cJ, ZJ)
    }

    function tf(JJ, cJ) {
      return function(JJ, cJ, ZJ) {
        if (cJ === rF[0]) return [(0, HJ.Kd)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, HJ.D.whiteUiText)];
        const FJ = ZJ.split("|")[0],
          UJ = JJ.isBlock(FJ) ? JJ.displayName(FJ) : void 0,
          eJ = "string" === typeof UJ ? UJ : UJ && "translationKey" in UJ ? `$t(${UJ.translationKey})` : FJ;
        return [(0, HJ.Kd)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: eJ
          }
        }, HJ.D.whiteUiText), (0, HJ.Kd)({
          translationKey: `item:${(0,HJ.be)(cJ)}`
        }, HJ.D.yellowUiText)]
      }(af, JJ, cJ)
    }
    const of = "buildAFactory2Game:";
    const lf = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Jx(JJ) {
      return JJ.endsWith(" Ore")
    }
    const cx = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      Zx = [],
      Fx = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: cx,
        plan: null,
        atomic: Zx
      },
      Ux = "buildAFactory2Game:",
      ex = new Set(["Splitter", "Sorting Gate"]),
      Xx = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class Ax {
      constructor() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = JJ, this.planAt = cJ, this.tierOf = ZJ, this.EA = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.hj = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = Fx, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(JJ, cJ, ZJ) {
        var FJ, UJ, eJ;
        let XJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const AJ = null !== (FJ = null === (UJ = JJ.WcJ(cJ)) || void 0 === UJ ? void 0 : UJ.name) && void 0 !== FJ ? FJ : null,
          qJ = JJ.isPlayerCrouching(cJ),
          jJ = 0 === ZJ ? null : this.resolve(JJ, ZJ),
          YJ = null !== jJ && null !== XJ && ex.has(jJ.rootName) && function(JJ, cJ) {
            return Xx.some((ZJ => {
              let [FJ, UJ] = ZJ;
              const eJ = JJ.getBlockId(cJ[0] + FJ, cJ[1], cJ[2] + UJ);
              return 0 !== eJ && "Express Belt" === JJ.getMetaInfo(eJ).rootName
            }))
          }(JJ, XJ),
          hJ = this.updatePlan(0 === ZJ ? null : XJ),
          DJ = this.tierOf(),
          sJ = null === XJ ? null : (0, Lf.e)(ZJ),
          nJ = null !== sJ && null !== XJ && (0, Lf.h)(function(JJ) {
            return (cJ, ZJ, FJ) => JJ.getBlockId(cJ, ZJ, FJ)
          }(JJ), XJ[0], XJ[1], XJ[2], sJ),
          GJ = this.readAfloat(JJ, ZJ, XJ);
        if (ZJ === this.EA && nJ === this.missesMaker && GJ === this.afloat && AJ === this.hj && qJ === this.crouching && YJ === this.express && DJ === this.tier && !hJ && (!this.targetsLive || !this.liveMoved(XJ))) return;
        this.EA = ZJ, this.missesMaker = nJ, this.afloat = GJ, this.hj = AJ, this.crouching = qJ, this.express = YJ;
        const fJ = YJ && jJ ? function(JJ) {
          if (null === JJ.info) return null;
          return JJ.express ??= {
            ...JJ.info,
            detail: `${Ux}lookKeepsUpExpress`,
            detailItem: null
          }, JJ.express
        }(jJ) : null !== jJ && nJ && null !== sJ ? this.besideMaker(jJ, ZJ, sJ) : null !== jJ && GJ ? this.hanging(jJ) : null !== (eJ = null === jJ || void 0 === jJ ? void 0 : jJ.info) && void 0 !== eJ ? eJ : null;
        this.tier = DJ;
        const xJ = jJ && fJ ? function(JJ, cJ) {
          var ZJ, FJ;
          const UJ = wJ.m[JJ];
          if (!JJ.endsWith(" Ore") || "rock" !== (null === UJ || void 0 === UJ ? void 0 : UJ.harvestType) || 0 === UJ.harvestLevel) return null;
          const eJ = null !== (ZJ = UJ.harvestLevel) && void 0 !== ZJ ? ZJ : 0,
            XJ = cJ ? uX.m[cJ] : void 0;
          if ("rock" === (null === XJ || void 0 === XJ ? void 0 : XJ.harvests) && (null !== (FJ = XJ.level) && void 0 !== FJ ? FJ : 0) >= eJ) return null;
          const AJ = (qJ = eJ, vF(af, qJ));
          var qJ;
          if (null === AJ) return null;
          const jJ = aU(AJ),
            YJ = /^[AEIOU]/.test(AJ) ? "An" : "";
          if ("rock" === (null === XJ || void 0 === XJ ? void 0 : XJ.harvests) && cJ) return {
            key: `${Ux}lookToolTooWeak${YJ}`,
            hj: aU(cJ),
            needed: jJ
          };
          return {
            key: AJ === rF[0] ? `${Ux}lookNeedAnyPickaxe` : `${Ux}lookNeedPickaxe${YJ}`,
            hj: null,
            needed: jJ
          }
        }(jJ.rootName, AJ) : null;
        this.targetsLive = !0 === (null === jJ || void 0 === jJ ? void 0 : jJ.live) && null !== XJ;
        let rJ = null;
        this.targetsLive && jJ && XJ && this.live && (this.livePos[0] = XJ[0], this.livePos[1] = XJ[1], this.livePos[2] = XJ[2], this.liveVersion = this.live.version(), rJ = this.live.line(jJ.rootName, XJ));
        const vJ = null === fJ ? cx : function(JJ, cJ, ZJ) {
            const FJ = function(JJ, cJ, ZJ) {
              const FJ = yZ(JJ);
              if (null === FJ) return null;
              const UJ = `${of}lookPortMode_${FJ}`,
                eJ = HF(cJ);
              if (eJ && ZJ) return {
                mode: null,
                detail: UJ,
                next: `${of}lookWrenchPickUp`,
                nextState: null
              };
              const XJ = SZ(JJ),
                AJ = null === XJ ? null : yZ(XJ);
              return null === AJ ? {
                mode: null,
                detail: UJ,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: UJ,
                next: eJ ? `${of}lookWrenchNext` : `${of}lookPortWrench`,
                nextState: `${of}lookPortState_${AJ}`
              }
            }(JJ, cJ, ZJ);
            if (null !== FJ) return FJ;
            const UJ = aF(JJ, cJ, ZJ);
            return null === UJ.mode && null === UJ.next ? cx : UJ
          }(JJ.blockIdToBlockName(ZJ), AJ, qJ),
          mJ = this.plan,
          QJ = jJ && fJ ? this.rowsOf(jJ.rootName, DJ) : Zx,
          EJ = this.snapshot;
        if (!(null === fJ ? !EJ.visible : EJ.visible && fJ === EJ.info && (VJ = xJ, KJ = EJ.tool, VJ === KJ || null !== VJ && null !== KJ && VJ.key === KJ.key && VJ.hj === KJ.hj && VJ.needed === KJ.needed) && function(JJ, cJ) {
            return JJ === cJ || null !== JJ && null !== cJ && JJ.key === cJ.key && JSON.stringify([JJ.params, JJ.keys]) === JSON.stringify([cJ.params, cJ.keys])
          }(rJ, EJ.live) && function(JJ, cJ) {
            return JJ.mode === cJ.mode && JJ.detail === cJ.detail && JJ.next === cJ.next && JJ.nextState === cJ.nextState
          }(vJ, EJ.wrench) && Hn(mJ, EJ.plan) && QJ === EJ.atomic)) {
          var VJ, KJ;
          this.snapshot = null === fJ ? {
            ...EJ,
            visible: !1
          } : {
            info: fJ,
            visible: !0,
            tool: xJ,
            live: rJ,
            wrench: vJ,
            plan: mJ,
            atomic: QJ
          };
          for (const JJ of this.listeners) JJ()
        }
      }
      get() {
        return this.snapshot
      }
      subscribe(JJ) {
        return this.listeners.add(JJ), () => {
          this.listeners.delete(JJ)
        }
      }
      dispose() {
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = Fx, this.EA = 0, this.hj = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(JJ, cJ, ZJ) {
        if (null === ZJ || 0 === cJ || !AJ() || !Jx(this.resolve(JJ, cJ).rootName)) return !1;
        const FJ = `${ZJ[0]},${ZJ[1]},${ZJ[2]},${cJ}`,
          UJ = performance.now();
        return FJ === this.afloatKey && UJ - this.afloatAt < qx ? this.afloat : (this.afloatKey = FJ, this.afloatAt = UJ, function(JJ, cJ) {
          for (const [ZJ, FJ, UJ] of lf) {
            const eJ = cJ(JJ[0] + ZJ, JJ[1] + FJ, JJ[2] + UJ);
            if (void 0 === eJ || null !== eJ && !Jx(eJ)) return !1
          }
          return !0
        }(ZJ, ((cJ, ZJ, FJ) => function(JJ, cJ, ZJ, FJ) {
          if (!JJ.isBlockInLoadedChunk(cJ, ZJ, FJ)) return;
          const UJ = JJ.getBlockId(cJ, ZJ, FJ);
          return 0 === UJ ? null : JJ.getMetaInfo(UJ).rootName
        }(JJ, cJ, ZJ, FJ))))
      }
      liveMoved(JJ) {
        var cJ;
        const {
          livePos: ZJ
        } = this;
        return null === JJ || JJ[0] !== ZJ[0] || JJ[1] !== ZJ[1] || JJ[2] !== ZJ[2] || (null === (cJ = this.live) || void 0 === cJ ? void 0 : cJ.version()) !== this.liveVersion
      }
      updatePlan(JJ) {
        const cJ = null === JJ ? "" : JJ.join(","),
          ZJ = performance.now();
        if (cJ === this.planPos && ZJ - this.planMs < 250) return !1;
        this.planPos = cJ, this.planMs = ZJ;
        const FJ = null === JJ ? null : this.planAt([JJ[0], JJ[1], JJ[2]]),
          UJ = !Hn(FJ, this.plan);
        return this.plan = FJ, UJ
      }
      besideMaker(JJ, cJ, ZJ) {
        let {
          info: FJ
        } = JJ;
        if (null === FJ) return null;
        let UJ = this.besideMakerById.get(cJ);
        if (void 0 === UJ) {
          const JJ = "cryo" === ZJ ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          UJ = {
            ...FJ,
            detail: `${Ux}${JJ}`,
            detailItem: null
          }, this.besideMakerById.set(cJ, UJ)
        }
        return UJ
      }
      hanging(JJ) {
        let {
          info: cJ,
          rootName: ZJ
        } = JJ;
        if (null === cJ) return null;
        let FJ = this.afloatByRoot.get(ZJ);
        return void 0 === FJ && (FJ = {
          ...cJ,
          detail: `${Ux}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(ZJ, FJ)), FJ
      }
      rowsOf(JJ, cJ) {
        if (null === cJ) return Zx;
        const ZJ = `${JJ}|${cJ}`;
        let FJ = this.rowsByKey.get(ZJ);
        if (void 0 === FJ) {
          const UJ = function(JJ, cJ) {
            var ZJ;
            if (!(JJ in Sc)) return [];
            const FJ = null !== (ZJ = Ic[JJ]) && void 0 !== ZJ ? ZJ : [],
              UJ = new Map;
            for (const XJ of He(JJ, cJ))
              if ((FJ.includes(XJ) || ge(XJ.output) && we(XJ.output) > BJ(JJ)) && we(XJ.output) <= cJ) {
                var eJ;
                const JJ = null !== (eJ = UJ.get(XJ.output)) && void 0 !== eJ ? eJ : [];
                JJ.push(XJ.input), UJ.set(XJ.output, JJ)
              } return ke([...UJ], (JJ => {
              let [cJ] = JJ;
              return -we(cJ)
            })).map((JJ => {
              let [cJ, ZJ] = JJ;
              return {
                output: cJ,
                inputs: ZJ
              }
            }))
          }(JJ, cJ);
          FJ = UJ.length > 0 ? UJ : Zx, this.rowsByKey.set(ZJ, FJ)
        }
        return FJ
      }
      resolve(JJ, cJ) {
        const {
          rootId: ZJ,
          rootName: FJ
        } = JJ.getMetaInfo(cJ), UJ = (0, AZ.m)(FJ) ? cJ : ZJ;
        let eJ = this.byRootId.get(UJ);
        const XJ = AJ();
        if (void 0 === eJ || eJ.nuclear !== XJ) {
          var qJ;
          const ZJ = function(JJ) {
            return MF(af, JJ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JJ)
          }(FJ, JJ.blockIdToBlockName(cJ));
          eJ = {
            info: ZJ,
            rootName: FJ,
            live: null !== ZJ && !0 === (null === (qJ = this.live) || void 0 === qJ ? void 0 : qJ.handles(FJ)),
            nuclear: XJ
          }, this.byRootId.set(UJ, eJ)
        }
        return eJ
      }
    }
    const qx = 500;
    const jx = (0, FJ.memo)((function(JJ) {
      var cJ, ZJ;
      let {
        store: UJ
      } = JJ;
      const {
        t: eJ
      } = (0, vU.F)(), [XJ, AJ] = (0, FJ.useState)((() => UJ.get()));
      (0, FJ.useEffect)((() => (AJ(UJ.get()), UJ.subscribe((() => {
        AJ(UJ.get())
      })))), [UJ]);
      const {
        openInGameMenuName: qJ,
        openEverythingMenuName: jJ,
        isTouchScreen: YJ
      } = (0, DU.j)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
        info: hJ,
        tool: DJ,
        live: sJ,
        wrench: nJ,
        atomic: GJ
      } = XJ, fJ = XJ.visible && null === qJ && null === jJ;
      if (null === hJ) return null;
      const xJ = null !== nJ.detail ? eJ(nJ.detail) : null !== (cJ = XJ.plan) && void 0 !== cJ && cJ.ctrl ? eJ("buildAFactory2Game:lookPlanCtrl") : null !== hJ.detail ? eJ(hJ.detail, null === hJ.detailItem ? void 0 : {
        item: eJ(hJ.detailItem)
      }) : null;
      return (0, xe.jsxs)("div", {
        className: GU()("Baf2LookTarget", {
          Visible: fJ
        }),
        "aria-hidden": !fJ,
        children: [(0, xe.jsx)("div", {
          className: "Baf2LookTargetName SmallTextBold",
          children: eJ(hJ.name)
        }), null !== XJ.plan && (0, xe.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: eJ(XJ.plan.key, {
            kind: eJ(XJ.plan.kindKey),
            w: String(XJ.plan.w),
            h: String(XJ.plan.h),
            d: String(XJ.plan.d),
            count: String(XJ.plan.count)
          })
        }), void 0 !== (null === (ZJ = XJ.plan) || void 0 === ZJ ? void 0 : ZJ.why) && (0, xe.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: eJ(XJ.plan.why)
        }), null !== nJ.mode && (0, xe.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: eJ(nJ.mode)
        }), null !== DJ ? (0, xe.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: eJ(DJ.key, {
            item: eJ(DJ.needed),
            hj: null === DJ.hj ? "" : eJ(DJ.hj)
          })
        }) : null !== sJ ? (0, xe.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: eJ(sJ.key, aq(eJ, sJ))
        }) : null !== xJ && (0, xe.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: xJ
        }), GJ.length > 0 && (0, xe.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: eJ("buildAFactory2Game:lookAtomicRecipes", {
            list: GJ.map((JJ => {
              let {
                output: cJ,
                inputs: ZJ
              } = JJ;
              const FJ = ZJ.length > 1 ? ` ${eJ("buildAFactory2Game:recipeMore",{count:String(ZJ.length-1)})}` : "";
              return `${eJ(aU(ZJ[0]))}${FJ} \u2192 ${eJ(aU(cJ))}`
            })).join(", ")
          })
        }), null !== nJ.next && (0, xe.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: eJ(nJ.next, {
            state: null === nJ.nextState ? "" : eJ(nJ.nextState),
            use: eJ(YJ ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
          })
        })]
      })
    }));
    var Yx = ZJ(37505);
    const hx = [],
      Dx = [
        [0, -1, 0]
      ];

    function sx(JJ) {
      const cJ = [JJ];
      for (let ZJ = 1; ZJ <= 4; ZJ++) ZJ > 1 && cJ.push(`${JJ}|meta|rot${ZJ}`), cJ.push(`${JJ}|meta|rot${ZJ}|Running`);
      return cJ
    }

    function nx(JJ, cJ) {
      return [Math.floor(JJ[0] / cJ), Math.floor(JJ[1] / cJ), Math.floor(JJ[2] / cJ)]
    }

    function Gx(JJ, cJ, ZJ) {
      return `${JJ},${cJ},${ZJ}`
    }

    function fx(JJ) {
      const cJ = JJ.split("|")[0];
      if (!ZZ(cJ)) return hx;
      const ZJ = Sc[cJ];
      if (Lc(ZJ)) return Dx;
      const FJ = sf(JJ);
      return ac(ZJ) ? [
        [-FJ[0], -FJ[1], -FJ[2]]
      ] : fU(ZJ) ? function(JJ, cJ) {
        const ZJ = JJ[0] - 2 * cJ[0],
          FJ = JJ[2] - 2 * cJ[2],
          UJ = [];
        for (let eJ = -1; eJ <= 1; eJ++)
          for (let cJ = -1; cJ <= 1; cJ++) UJ.push([ZJ + eJ, JJ[1], FJ + cJ]);
        return UJ
      }([0, 0, 0], FJ) : hx
    }
    const xx = [.5, .5, .5],
      rx = [.2, .8, .3],
      vx = [.45, 1, .5];
    class mx {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(JJ) {
        this.indexed = !0;
        for (const cJ of mc)
          for (const ZJ of sx(cJ)) {
            const cJ = JJ.blockNameToBlockId(ZJ, !0),
              FJ = fx(ZJ);
            null !== cJ && FJ.length > 0 && (this.offsetsList.push(FJ), this.offsetsIndexById[cJ] = this.offsetsList.length)
          }
      }
      onAfterRender(JJ, cJ) {
        this.indexed || this.index(JJ);
        const ZJ = performance.now();
        if (ZJ - this.lastCheckMs < 100) return;
        this.lastCheckMs = ZJ, this.checks++;
        const FJ = Zn.c.Kn,
          [UJ, eJ, XJ] = nx(cJ, FJ);
        let AJ = !1;
        const qJ = [];
        let jJ = 0;
        for (let YJ = UJ - 2; YJ <= UJ + 2; YJ++)
          for (let cJ = eJ - 1; cJ <= eJ + 1; cJ++)
            for (let UJ = XJ - 2; UJ <= XJ + 2; UJ++) {
              const eJ = jJ++,
                XJ = Gx(YJ, cJ, UJ),
                hJ = JJ.getChunkVersion(YJ, cJ, UJ);
              let DJ = this.chunks.get(XJ);
              null !== hJ ? (DJ || (DJ = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(XJ, DJ)), DJ.seenAt = this.checks, DJ.checkedVersion !== hJ && (DJ.checkedVersion = hJ, AJ = !0), DJ.scannedVersion !== hJ && ZJ - DJ.scannedAt >= 500 && qJ.push({
                slot: eJ,
                entry: DJ,
                origin: [YJ * FJ, cJ * FJ, UJ * FJ]
              })) : (AJ ||= void 0 !== DJ, this.chunks.delete(XJ))
            }
        this.scanDue(JJ, qJ) && (AJ = !0);
        for (const [YJ, hJ] of this.chunks) hJ.seenAt !== this.checks && (AJ ||= hJ.machines.length > 0, this.chunks.delete(YJ));
        for (const YJ of this.chunks.values())
          for (const [cJ, ZJ, FJ] of YJ.cellChunks)(Math.abs(cJ - UJ) > 2 || Math.abs(ZJ - eJ) > 1 || Math.abs(FJ - XJ) > 2) && this.watchCellChunk(JJ, cJ, ZJ, FJ) && (AJ = !0);
        for (const [YJ, hJ] of this.cellChunks) hJ.seenAt !== this.checks && this.cellChunks.delete(YJ);
        AJ && this.refresh(JJ)
      }
      dispose(JJ) {
        this.clearMeshes(JJ), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(JJ, cJ) {
        const ZJ = Math.max(cJ.findIndex((JJ => {
          let {
            slot: cJ
          } = JJ;
          return cJ >= this.scanFrom
        })), 0);
        let FJ = 96;
        for (let UJ = 0; UJ < cJ.length; UJ++) {
          const {
            slot: eJ,
            entry: XJ,
            origin: AJ
          } = cJ[(ZJ + UJ) % cJ.length];
          if (FJ -= this.scan(JJ, XJ, AJ), FJ <= 0) {
            this.scanFrom = eJ + 1;
            break
          }
        }
        return cJ.length > 0
      }
      scan(JJ, cJ, ZJ) {
        let [FJ, UJ, eJ] = ZJ;
        const XJ = Zn.c.Kn,
          AJ = this.hits;
        AJ.length = 0;
        const qJ = JJ.scanBlocks(FJ, UJ, eJ, FJ + XJ, UJ + XJ, eJ + XJ, this.offsetsIndexById, AJ),
          jJ = [];
        for (let YJ = 0; YJ < AJ.length; YJ += 4) jJ.push({
          pos: [AJ[YJ], AJ[YJ + 1], AJ[YJ + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[AJ[YJ + 3]] - 1]
        });
        return cJ.machines = jJ, cJ.cellChunks = function(JJ, cJ) {
          const ZJ = new Set,
            FJ = [];
          for (const {
              pos: UJ,
              offsets: eJ
            }
            of JJ)
            for (const [JJ, XJ, AJ] of eJ) {
              const eJ = nx([UJ[0] + JJ, UJ[1] + XJ, UJ[2] + AJ], cJ),
                qJ = Gx(...eJ);
              ZJ.has(qJ) || (ZJ.add(qJ), FJ.push(eJ))
            }
          return FJ
        }(jJ, XJ), cJ.scannedVersion = cJ.checkedVersion, cJ.scannedAt = performance.now(), Math.max(qJ, 1)
      }
      watchCellChunk(JJ, cJ, ZJ, FJ) {
        const UJ = Gx(cJ, ZJ, FJ),
          eJ = JJ.getChunkVersion(cJ, ZJ, FJ),
          XJ = this.cellChunks.get(UJ);
        return null === eJ ? this.cellChunks.delete(UJ) : (null === XJ || void 0 === XJ ? void 0 : XJ.version) === eJ ? (XJ.seenAt = this.checks, !1) : (this.cellChunks.set(UJ, {
          version: eJ,
          seenAt: this.checks
        }), !0)
      }
      refresh(JJ) {
        const cJ = function(JJ, cJ) {
            const ZJ = new Set,
              FJ = [];
            for (const {
                pos: UJ,
                offsets: eJ
              }
              of JJ)
              for (const [JJ, XJ, AJ] of eJ) {
                const eJ = UJ[0] + JJ,
                  qJ = UJ[1] + XJ,
                  jJ = UJ[2] + AJ,
                  YJ = `${eJ},${qJ},${jJ}`;
                ZJ.has(YJ) || (ZJ.add(YJ), cJ(eJ, qJ, jJ) && FJ.push([eJ, qJ, jJ]))
              }
            return FJ
          }([...this.chunks.values()].flatMap((JJ => JJ.machines)), ((cJ, ZJ, FJ) => JJ.isBlockInLoadedChunk(cJ, ZJ, FJ) && 0 === JJ.getBlockId(cJ, ZJ, FJ))),
          ZJ = cJ.join(";");
        ZJ !== this.shownKey && (this.shownKey = ZJ, this.clearMeshes(JJ), cJ.length > 0 && (this.meshes = [this.build(JJ, cJ, !1), this.build(JJ, cJ, !0)]))
      }
      build(JJ, cJ, ZJ) {
        const FJ = cJ[0],
          UJ = [],
          eJ = [];
        for (const [XJ, AJ, qJ] of cJ)(0, Yx.e)(UJ, eJ, [XJ - FJ[0] + .5, AJ - FJ[1] + .5, qJ - FJ[2] + .5], xx, ZJ);
        return JJ.createGameMesh({
          positions: UJ,
          indices: eJ
        }, {
          rgb: ZJ ? vx : rx,
          alpha: .4
        }, FJ)
      }
      clearMeshes(JJ) {
        for (const cJ of this.meshes) JJ.disposeGameMesh(cJ);
        this.meshes = []
      }
    }
    const Qx = 1 / .6,
      Ex = 200,
      Vx = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      Kx = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      yx = 2 * Math.PI / 3;
    class Sx {
      constructor() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vx;
        this.style = JJ, this.particles = null, this.points = new Float32Array(800), this.budget = Ex, this.lastMs = 0
      }
      static blade() {
        return new Sx(Kx)
      }
      Rm(JJ, cJ) {
        const ZJ = Math.min(cJ.arcStruck, cJ.arcPoints.length);
        this.draw(JJ, [cJ.arcFrom, ...cJ.arcPoints], cJ.arcPoints.slice(0, ZJ))
      }
      onBlade(JJ, cJ) {
        const [ZJ, FJ, UJ] = cJ.bladeCentre, [eJ, XJ] = cJ.bladeFacing, AJ = ZJ - 1.5 * eJ, qJ = UJ - 1.5 * XJ, jJ = Math.atan2(XJ, eJ), YJ = [];
        for (let hJ = 0; hJ <= 8; hJ++) {
          const JJ = jJ - yx / 2 + yx * hJ / 8;
          YJ.push([AJ + 2.5 * Math.cos(JJ), FJ, qJ + 2.5 * Math.sin(JJ)])
        }
        this.draw(JJ, YJ, cJ.bladeStruck)
      }
      dispose() {
        var JJ;
        null === (JJ = this.particles) || void 0 === JJ || JJ.stop(), this.particles = null
      }
      draw(JJ, cJ, ZJ) {
        if (!JJ.particlesEnabled() || cJ.length < 2) return;
        const FJ = performance.now();
        this.budget = Math.min(Ex, this.budget + (FJ - this.lastMs) / 1e3 * Ex), this.lastMs = FJ;
        const UJ = [];
        let eJ = 0,
          XJ = cJ[0];
        for (const xJ of cJ.slice(1)) {
          const JJ = Math.min(48, Math.round(Math.hypot(xJ[0] - XJ[0], xJ[1] - XJ[1], xJ[2] - XJ[2]) * this.style.perBlock));
          UJ.push([XJ, xJ, JJ]), eJ += JJ, XJ = xJ
        }
        const AJ = ZJ.length;
        eJ += 10 * AJ;
        const qJ = eJ > this.budget ? this.budget / eJ : 1;
        if (0 === eJ || qJ * eJ < 1) return;
        const jJ = cJ[0],
          [YJ, hJ, DJ] = jJ,
          sJ = this.points;
        let nJ = 0;
        const GJ = (JJ, cJ, ZJ, FJ) => {
          const UJ = 4 * nJ;
          sJ[UJ] = JJ - YJ, sJ[UJ + 1] = cJ - hJ, sJ[UJ + 2] = ZJ - DJ, sJ[UJ + 3] = FJ, nJ++
        };
        UJ.forEach(((JJ, cJ) => {
          let [ZJ, FJ, UJ] = JJ;
          const eJ = Math.min(Math.floor(UJ * qJ), Ex - nJ),
            XJ = Math.hypot(FJ[0] - ZJ[0], FJ[1] - ZJ[1], FJ[2] - ZJ[2]),
            AJ = 0 === cJ && XJ > 0 ? Math.min(.5, .1 * XJ) / XJ : 0;
          for (let qJ = 0; qJ < eJ; qJ++) {
            const JJ = AJ + (qJ + .5) / eJ * (1 - AJ);
            GJ(ZJ[0] + (FJ[0] - ZJ[0]) * JJ, ZJ[1] + (FJ[1] - ZJ[1]) * JJ, ZJ[2] + (FJ[2] - ZJ[2]) * JJ, .15)
          }
        }));
        const fJ = Math.floor(10 * qJ);
        for (let xJ = 0; xJ < AJ; xJ++) {
          const [JJ, cJ, FJ] = ZJ[xJ];
          for (let ZJ = 0; ZJ < fJ && nJ < Ex; ZJ++) GJ(JJ, cJ, FJ, 2.5)
        }
        this.budget -= nJ, this.particles ??= JJ.createParticles(function(JJ) {
          const [cJ, ZJ] = JJ.colours;
          return {
            texture: "square_particle",
            qh: 400,
            minLifeTime: JJ.life[0] / Qx,
            maxLifeTime: JJ.life[1] / Qx,
            minSize: JJ.size[0],
            maxSize: JJ.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [cJ[0], cJ[1], cJ[2], 1],
              maxColor: [ZJ[0], ZJ[1], ZJ[2], 1]
            }, {
              timeFraction: 1,
              minColor: [cJ[0], cJ[1], cJ[2], 0],
              maxColor: [ZJ[0], ZJ[1], ZJ[2], 0]
            }],
            blendMode: SA.g.Add
          }
        }(this.style), {
          pos: jJ
        }), this.particles.emitPoints(jJ, sJ, nJ)
      }
    }
    const Ix = new Set(["Sky Spring"]);

    function Mx(JJ, cJ, ZJ) {
      const FJ = JJ.split("|")[0];
      return "Air" !== cJ || ZJ || ! function(JJ) {
        const cJ = JJ.split("|")[0];
        return void 0 !== lc[cJ] || Ix.has(cJ)
      }(FJ) ? null : JJ
    }
    class bx {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(JJ) {
        const cJ = JJ - this.lastTapAt >= 300;
        return this.lastTapAt = JJ, cJ
      }
    }
    class wx {
      constructor() {
        this.presses = new bx, this.predicted = null
      }
      tap(JJ, cJ) {
        const ZJ = this.presses.isNewPress(cJ);
        return ZJ && (this.predicted = {
          station: JJ,
          at: cJ
        }), ZJ
      }
      consumeServerOpen(JJ, cJ) {
        const ZJ = this.predicted;
        return !(null === ZJ || ZJ.station !== JJ || cJ - ZJ.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class Wx {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(JJ, cJ) {
        return JJ && (this.thrustAt = cJ), cJ - this.thrustAt < 200
      }
    }
    const gx = [.1, .05, .1],
      Hx = {
        texture: "effect_5",
        qh: Math.ceil(48),
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
        blendMode: SA.g.OneOne
      };
    class Px {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new Wx, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      Rm(JJ, cJ) {
        for (const [ZJ, FJ] of cJ.baf2JetFlames) JJ.isLocalPlayer(ZJ) || (FJ ? this.lit.add(ZJ) : this.lit.delete(ZJ))
      }
      onAfterRender(JJ, cJ) {
        const ZJ = performance.now(),
          FJ = this.hold.lit(this.selfThrusting(JJ, cJ), ZJ);
        for (const [UJ, eJ] of this.flames)(UJ === cJ ? FJ : this.lit.has(UJ)) || this.setEmitting(eJ, !1), UJ === cJ || JJ.getPositionView(UJ) ? !eJ.emitting && ZJ - eJ.offAt >= 1300 && (eJ.particles.stop(), this.flames.delete(UJ)) : (eJ.particles.dispose(), this.flames.delete(UJ), this.lit.delete(UJ));
        FJ && this.draw(JJ, cJ, cJ);
        for (const UJ of this.lit) this.draw(JJ, cJ, UJ)
      }
      dispose() {
        for (const JJ of this.flames.values()) JJ.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(JJ, cJ) {
        var ZJ;
        const FJ = JJ.getLocalPlayerMovement();
        return !!FJ && (null !== (UJ = {
          option: null !== (ZJ = JJ.getClientOption(cJ, "jumpHoldThrust")) && void 0 !== ZJ ? ZJ : null,
          jumping: FJ.jumpHeld,
          onGround: FJ.onGround,
          alive: JJ.isAlive(cJ)
        }).option && UJ.option.maxUpSpeed >= 0 && UJ.jumping && !UJ.onGround && UJ.alive);
        var UJ
      }
      draw(JJ, cJ, ZJ) {
        var FJ, UJ;
        const eJ = this.pos;
        if (!JJ.readDrawnPosition(ZJ, eJ)) return;
        const XJ = JJ.readDrawnPosition(cJ, this.camera) ? this.camera : eJ;
        if (!((eJ[0] - XJ[0]) ** 2 + (eJ[1] - XJ[1]) ** 2 + (eJ[2] - XJ[2]) ** 2 < 1600) || !JJ.particlesEnabled()) {
          const JJ = this.flames.get(ZJ);
          return void(JJ && this.setEmitting(JJ, !1))
        }
        const AJ = null !== (FJ = this.flames.get(ZJ)) && void 0 !== FJ ? FJ : this.create(JJ, ZJ, eJ),
          qJ = null !== (UJ = JJ.getDrawnHeading(ZJ)) && void 0 !== UJ ? UJ : 0,
          jJ = this.at;
        jJ[0] = eJ[0] - .35 * Math.sin(qJ), jJ[1] = eJ[1] + 1.05, jJ[2] = eJ[2] - .35 * Math.cos(qJ), AJ.particles.moveTo(jJ), this.setEmitting(AJ, !0)
      }
      setEmitting(JJ, cJ) {
        JJ.emitting !== cJ && (JJ.emitting = cJ, cJ || (JJ.offAt = performance.now()), JJ.particles.setEmitRate(cJ ? 60 : 0))
      }
      create(JJ, cJ, ZJ) {
        const FJ = {
          particles: JJ.createParticles(Hx, {
            pos: ZJ,
            half: gx
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(cJ, FJ), FJ
      }
    }

    function kx(JJ) {
      return "Reactor Frame" === BZ("reactor", JJ)
    }

    function px(JJ) {
      return wZ("reactor", JJ) && !kx(JJ) && (JJ.startsWith("Reactor Glass") || JJ.startsWith("Reactor Port"))
    }
    const dx = "baf2Goal";
    class zx {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [yU.i.subscribe("setDirectionArrow", (JJ => {
          let {
            id: cJ,
            position: ZJ
          } = JJ;
          cJ === dx && (this.goal = ZJ, this.checkedAt = -1 / 0)
        })), yU.i.subscribe("clearDirectionArrow", (JJ => {
          let {
            id: cJ
          } = JJ;
          null !== cJ && cJ !== dx || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const JJ of this.subs) yU.i.unsubscribe(JJ)
      }
      sideOf(JJ, cJ, ZJ, FJ) {
        const UJ = this.goal;
        if (!UJ) return 0;
        ZJ - this.checkedAt > 1e3 && (this.checkedAt = ZJ, this.open = function(JJ, cJ) {
          const [ZJ, FJ, UJ] = JJ.map(Math.floor);
          if (!px(cJ(ZJ, FJ, UJ))) return null;
          for (const [eJ, XJ] of [
              [1, 0],
              [0, 1]
            ]) {
            const JJ = cJ(ZJ + eJ, FJ, UJ + XJ),
              AJ = cJ(ZJ - eJ, FJ, UJ - XJ);
            if (kx(AJ) && px(JJ)) return [eJ, 0, XJ];
            if (kx(JJ) && px(AJ)) return [0 - eJ, 0, 0 - XJ]
          }
          return null
        }(UJ, ((cJ, ZJ, FJ) => JJ.blockIdToBlockName(JJ.getBlockId(cJ, ZJ, FJ)))));
        const eJ = this.open;
        if (!eJ) return 0;
        const XJ = FJ(UJ);
        if (Math.abs(XJ.x - cJ.x) > .05 || Math.abs(XJ.y - cJ.y) > .05) return 0;
        const AJ = FJ([UJ[0] + eJ[0], UJ[1], UJ[2] + eJ[2]]).x - XJ.x;
        return Math.abs(AJ) < .3 ? 0 : AJ > 0 ? 1 : -1
      }
    }
    class Nx {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new zx, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.xn = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.Im = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((JJ => {
          for (const cJ of JJ) cJ.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(cJ.target, cJ.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.xn || this.clear()
        }, window.addEventListener("resize", this.Im)
      }
      onAfterRender(JJ, cJ) {
        var ZJ;
        this.api = JJ, this.project = null !== (ZJ = null === cJ || void 0 === cJ ? void 0 : cJ.projectWorldPosToScreenPos) && void 0 !== ZJ ? ZJ : null, this.queued || this.xn || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.xn = !0;
        for (const JJ of this.moved.keys()) JJ.style.transform = "";
        this.moved.clear();
        for (const JJ of this.sideLabels.keys()) JJ.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.Im)
      }
      clear() {
        for (const eJ of this.moved.keys()) eJ.isConnected || this.moved.delete(eJ);
        for (const eJ of this.sideLabels.keys()) eJ.isConnected || this.sideLabels.delete(eJ);
        if (0 === this.arrows.length) return;
        const JJ = performance.now(),
          cJ = JJ - this.refreshedAt > 1e3;
        cJ && (this.refreshedAt = JJ, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const ZJ = this.trackerBox(),
          FJ = this.barsBox(),
          UJ = this.toastBox(cJ);
        (ZJ || FJ || UJ) && cJ && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let eJ = 0; eJ < this.arrows.length; eJ++) {
          const cJ = this.arrows[eJ];
          this.labelOffsets.set(cJ, this.runLabelAside(cJ, JJ));
          const XJ = (ZJ ? this.shiftLeftOf(cJ, ZJ) : 0) || this.shiftOnScreen(cJ),
            AJ = Math.min(FJ ? this.liftAbove(cJ, FJ, XJ) : 0, UJ ? this.liftAbove(cJ, UJ, XJ) : 0),
            qJ = this.moved.get(cJ);
          if (0 !== XJ || 0 !== AJ) {
            const JJ = 0 === AJ ? `translateX(${XJ}px)` : `translate(${XJ}px, ${AJ}px)`;
            qJ !== JJ && (cJ.style.transform = JJ, this.moved.set(cJ, JJ))
          } else void 0 !== qJ && (cJ.style.transform = "", this.moved.delete(cJ))
        }
      }
      trackerBox() {
        var JJ, cJ;
        const ZJ = null !== (JJ = this.tracker) && void 0 !== JJ && JJ.isConnected ? this.tracker : null !== (cJ = this.trackers[0]) && void 0 !== cJ ? cJ : null;
        if (ZJ !== this.tracker && this.watch(ZJ), this.boxStale && ZJ) {
          var FJ, UJ, eJ;
          this.boxStale = !1;
          const JJ = ZJ.closest(".NoRoom") ? null : ZJ.getBoundingClientRect(),
            cJ = JJ && JJ.width > 0 ? null === (FJ = this.hud) || void 0 === FJ ? void 0 : FJ.getBoundingClientRect() : void 0,
            XJ = JJ && cJ ? Math.max(JJ.top, cJ.top) : null !== (UJ = null === JJ || void 0 === JJ ? void 0 : JJ.top) && void 0 !== UJ ? UJ : 0,
            AJ = JJ && cJ ? Math.min(JJ.bottom, cJ.bottom) : null !== (eJ = null === JJ || void 0 === JJ ? void 0 : JJ.bottom) && void 0 !== eJ ? eJ : 0;
          this.box = JJ && JJ.width > 0 && AJ > XJ ? {
            left: JJ.left,
            top: XJ,
            right: JJ.right,
            bottom: AJ
          } : null
        }
        return ZJ ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var JJ;
          this.barsStale = !1;
          const cJ = null === (JJ = this.statBars[0]) || void 0 === JJ ? void 0 : JJ.getBoundingClientRect();
          this.bars = cJ && cJ.width > 0 && cJ.height > 0 ? {
            left: cJ.left,
            top: cJ.top,
            right: cJ.right,
            bottom: cJ.bottom
          } : null
        }
        return this.bars
      }
      toastBox(JJ) {
        var cJ;
        const ZJ = null !== (cJ = this.toasts[0]) && void 0 !== cJ ? cJ : null;
        if (ZJ !== this.toastEl || JJ && ZJ) {
          this.toastEl = ZJ;
          const JJ = null === ZJ || void 0 === ZJ ? void 0 : ZJ.getBoundingClientRect();
          this.toast = JJ && JJ.width > 0 && JJ.height > 0 ? {
            left: JJ.left,
            top: JJ.top,
            right: JJ.right,
            bottom: JJ.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(JJ, cJ, ZJ) {
        var FJ;
        const UJ = this.anchorOf(JJ);
        if (!UJ) return 0;
        const eJ = UJ.x + ZJ + (null !== (FJ = this.labelOffsets.get(JJ)) && void 0 !== FJ ? FJ : 0),
          {
            halfWidth: XJ,
            labelled: AJ
          } = this.extentOf(JJ),
          qJ = UJ.y + this.em * (AJ ? 6.2 : 3);
        return qJ < cJ.top - 6 || eJ + XJ < cJ.left - 6 || eJ - XJ > cJ.right + 6 ? 0 : cJ.top - 6 - qJ
      }
      watch(JJ) {
        var cJ, ZJ;
        this.tracker && this.sizes.unobserve(this.tracker), null === (cJ = this.hud) || void 0 === cJ || cJ.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = JJ, this.hud = null !== (ZJ = null === JJ || void 0 === JJ ? void 0 : JJ.closest(".Baf2QuestHud")) && void 0 !== ZJ ? ZJ : null, this.box = null, this.boxStale = !0, JJ && this.sizes.observe(JJ), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(JJ, cJ) {
        var ZJ;
        const FJ = this.anchorOf(JJ);
        if (!FJ) return 0;
        const {
          y: UJ
        } = FJ, eJ = FJ.x + (null !== (ZJ = this.labelOffsets.get(JJ)) && void 0 !== ZJ ? ZJ : 0), XJ = this.em, {
          halfWidth: AJ,
          labelled: qJ
        } = this.extentOf(JJ), jJ = UJ - XJ, YJ = eJ + AJ;
        return UJ + XJ * (qJ ? 6.2 : 3) < cJ.top || jJ > cJ.bottom || YJ < cJ.left - 6 || eJ - AJ > cJ.right ? 0 : Math.max(cJ.left - 6 - YJ, 6 - (eJ - AJ))
      }
      shiftOnScreen(JJ) {
        var cJ;
        const ZJ = this.anchorOf(JJ);
        if (!ZJ) return 0;
        const {
          halfWidth: FJ
        } = this.extentOf(JJ), UJ = ZJ.x + (null !== (cJ = this.labelOffsets.get(JJ)) && void 0 !== cJ ? cJ : 0), eJ = UJ + FJ - (this.innerWidth - 6);
        return eJ > 0 ? -eJ : Math.max(0, 6 - (UJ - FJ))
      }
      runLabelAside(JJ, cJ) {
        var ZJ;
        let FJ = null;
        for (let XJ = 0; XJ < JJ.children.length; XJ++) JJ.children[XJ].classList.contains("DirectionArrowLabel") && (FJ = JJ.children[XJ]);
        if (!FJ) return 0;
        const UJ = JJ.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(JJ) : null,
          eJ = (UJ && this.api ? this.side.sideOf(this.api, {
            x: UJ.x / this.innerWidth * 100,
            y: UJ.y / this.innerHeight * 100
          }, cJ, this.project) : 0) * this.halfWidthOf(FJ);
        return eJ !== (null !== (ZJ = this.sideLabels.get(FJ)) && void 0 !== ZJ ? ZJ : 0) && (FJ.style.transform = 0 === eJ ? "" : `translateX(-50%) translateX(${eJ}px)`, 0 === eJ ? this.sideLabels.delete(FJ) : this.sideLabels.set(FJ, eJ)), eJ
      }
      extentOf(JJ) {
        let cJ = this.em,
          ZJ = !1;
        for (let FJ = 0; FJ < JJ.children.length; FJ++) {
          const UJ = JJ.children[FJ],
            eJ = UJ.classList.contains("DirectionArrowLabel");
          ZJ ||= eJ, (eJ || UJ.classList.contains("DirectionArrowDistance")) && (cJ = Math.max(cJ, this.halfWidthOf(UJ)))
        }
        return {
          halfWidth: cJ,
          labelled: ZJ
        }
      }
      halfWidthOf(JJ) {
        let cJ = this.halfWidths.get(JJ);
        return void 0 === cJ && (cJ = JJ.offsetWidth / 2, this.halfWidths.set(JJ, cJ), this.sizes.observe(JJ), this.labels.add(JJ)), cJ
      }
      forgetGoneLabels() {
        for (const JJ of this.labels) JJ.isConnected || (this.sizes.unobserve(JJ), this.halfWidths.delete(JJ), this.labels.delete(JJ))
      }
      anchorOf(JJ) {
        const cJ = JJ.style.translate,
          ZJ = this.anchors.get(JJ);
        if (ZJ && ZJ.translate === cJ && ZJ.innerWidth === this.innerWidth && ZJ.innerHeight === this.innerHeight) return ZJ;
        const FJ = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(cJ);
        if (!FJ) return null;
        const UJ = {
          translate: cJ,
          x: parseFloat(FJ[1]) / 100 * this.innerWidth,
          y: parseFloat(FJ[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(JJ, UJ), UJ
      }
    }
    const Ox = "Baf2ArrowText";

    function Tx(JJ, cJ) {
      const ZJ = JJ.rows.find((JJ => JJ.current));
      return gJ(JJ.tutorial) && null !== ZJ && void 0 !== ZJ && ZJ.item && kU(ZJ) && MJ(ZJ.item).includes(cJ) ? ZJ.item : null
    }
    const Cx = new class {
      constructor(JJ) {
        this.select = JJ, this.picks = new Map
      }
      open(JJ, cJ, ZJ) {
        const FJ = Tx(cJ, JJ);
        null !== FJ && this.PD(JJ, FJ, ZJ)
      }
      follow(JJ, cJ) {
        if (AJ())
          for (const [ZJ, {
              item: FJ,
              had: UJ
            }] of this.picks) {
            const eJ = Tx(JJ, ZJ);
            eJ !== FJ && (null !== eJ && cJ(FJ) > UJ ? this.PD(ZJ, eJ, cJ) : this.picks.delete(ZJ))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      PD(JJ, cJ, ZJ) {
        this.picks.set(JJ, {
          item: cJ,
          had: ZJ(cJ)
        }), this.select(JJ, cJ)
      }
    }(SU.k);

    function ux(JJ) {
      return cJ => {
        let ZJ = 0;
        for (const FJ of JJ.getInventoryItems())(null === FJ || void 0 === FJ ? void 0 : FJ.name) === cJ && (ZJ += null === FJ.amount ? 1 : Math.max(FJ.amount, 0));
        return ZJ
      }
    }

    function ix(JJ, cJ, ZJ, FJ) {
      JJ.getClientOption(cJ, "canCraft") && "inventory" !== DU.d.get("openInGameMenuName") && (Cx.open(ZJ, FJ.get(), ux(JJ)), yU.i.Uf("toggleMenu", `inventory|${ZJ}`))
    }
    let Rx = null,
      Lx = !1;

    function ax(JJ) {
      const cJ = Ge();
      JJ === Rx && cJ === Lx || (Rx = JJ, Lx = cJ, (0, SU.l)(function(JJ, cJ) {
        const ZJ = new Map;
        for (let FJ = JJ + 1; FJ <= UJ.length; FJ++) {
          const UJ = pe(FJ, JJ, cJ);
          if (UJ)
            for (const cJ of xJ(FJ).unlocks) ZJ.set(cJ, {
              ...UJ,
              stepsAway: FJ - JJ
            })
        }
        return ZJ
      }(JJ, cJ)))
    }

    function Bx() {
      return (0, SU.r)(ke(Object.keys(IJ), we)), () => {
        (0, SU.r)([])
      }
    }
    const tx = "buildAFactory2Game:",
      ox = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      lx = {
        on: `${tx}tutorialButtonOn`,
        hud: `${tx}tutorialButtonHud`,
        off: `${tx}tutorialButtonOff`
      },
      Jr = {
        on: `${tx}tutorialPickedOn`,
        hud: `${tx}tutorialPickedHud`,
        off: `${tx}tutorialPickedOff`
      };

    function cr(JJ, cJ, ZJ) {
      let FJ = null,
        UJ = () => {};
      const eJ = eJ => {
        var XJ;
        let {
          tutorial: AJ,
          tutorialKnown: qJ
        } = eJ;
        (null === (XJ = FJ) || void 0 === XJ ? void 0 : XJ.tutorial) === AJ && FJ.tutorialKnown === qJ || (FJ = {
          tutorial: AJ,
          tutorialKnown: qJ
        }, UJ = (0, YU.t)({
          id: "baf2Tutorial",
          order: -1,
          labelKey: lx[AJ],
          icon: {
            kind: "icon",
            name: ox[AJ]
          },
          iconOnly: !0,
          disabled: !qJ,
          className: "Baf2TutorialButton",
          onClick: () => {
            var FJ;
            (FJ => {
              const UJ = cJ.setTutorial(FJ);
              JJ.send(`baf2tutorial ${FJ} ${UJ}`), ZJ.show({
                baf2ToastText: [(0, HJ.Kd)({
                  translationKey: Jr[FJ]
                }, HJ.D.whiteUiText)],
                baf2ToastMs: 3e3,
                baf2ToastStyle: "baf2ToastInfo"
              })
            })((FJ = cJ.get().tutorial, WJ[(WJ.indexOf(FJ) + 1) % WJ.length]))
          }
        }))
      };
      eJ(cJ.get());
      const XJ = yU.i.subscribe(IU, eJ);
      return () => {
        yU.i.unsubscribe(XJ), UJ()
      }
    }

    function Zr(JJ, cJ, ZJ) {
      var FJ, UJ;
      const eJ = JJ.getTargetedBlock();
      if (!eJ || ! function(JJ, cJ, ZJ) {
          if ("Chest" !== cJ) return !1;
          const FJ = JJ.split("|")[0];
          if (!ZZ(FJ) || 0 === Sc[FJ].outputSlots.length) return !1;
          const UJ = sf(JJ);
          return ZJ[0] === UJ[0] && ZJ[1] === UJ[1] && ZJ[2] === UJ[2]
        }(ZJ, null === (FJ = JJ.WcJ(cJ)) || void 0 === FJ ? void 0 : FJ.name, eJ.normal)) return !1;
      const [XJ, AJ, qJ] = eJ.bs, jJ = JJ.getBlockId(XJ, AJ, qJ);
      return 0 === jJ || !0 === (null === (UJ = wJ.m[jJ]) || void 0 === UJ ? void 0 : UJ.canBePlacedOver)
    }
    var Fr = ZJ(35789);
    const Ur = new Set(qZ.e);
    class er {
      constructor(JJ) {
        this.toasts = JJ, this.lastAt = -1 / 0
      }
      onAltAction(JJ, cJ, ZJ) {
        const FJ = JJ.getTargetedBlock();
        if (!FJ || function(JJ) {
            const cJ = JJ.split("|")[0];
            return ZZ(cJ) || null !== fF(cJ) || yJ(cJ) || qZ.e.includes(cJ)
          }(ZJ) && !Ur.has(ZJ.split("|")[0])) return;
        const UJ = JJ.WcJ(cJ);
        if (!UJ || !Ur.has(UJ.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const eJ = UJ.typeObj.id,
          [XJ, AJ, qJ] = FJ.bs,
          jJ = JJ.getBlockId(XJ, AJ, qJ),
          YJ = wJ.m[jJ];
        (0 === jJ || null !== YJ && void 0 !== YJ && YJ.LD || null !== YJ && void 0 !== YJ && YJ.canBePlacedOver) && JJ.isSolidToPlayerBlockId(eJ) && JJ.canModifyBlockAt(XJ, AJ, qJ) && JJ.lJJ(XJ, AJ, qJ, eJ) && !JJ.lJJ(XJ, AJ, qJ, eJ, cJ) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, HJ.Kd)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, HJ.D.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class Xr {
      constructor(JJ) {
        this.show = JJ, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(JJ, cJ, ZJ) {
        var FJ;
        if (!cJ) return this.started = null, void this.gatedThisHold.clear();
        if (!JJ) return void(this.started = null);
        const UJ = `${JJ.x},${JJ.y},${JJ.z},${JJ.hj}`;
        if (UJ === this.started) return;
        this.started = UJ;
        const eJ = bF(JJ.y) ? Bf(JJ.block, JJ.hj, JJ.level) : null;
        if (null === eJ || this.gatedThisHold.has(UJ)) return;
        this.gatedThisHold.add(UJ);
        const XJ = JJ.block.split("|")[0];
        ZJ - (null !== (FJ = this.hintedAt.get(XJ)) && void 0 !== FJ ? FJ : -1 / 0) < 5e3 || (this.hintedAt.set(XJ, ZJ), this.show({
          baf2ToastText: tf(eJ, JJ.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var Ar = ZJ(29);

    function qr(JJ, cJ) {
      const ZJ = [...JJ.baf2CoreBankPaused];
      for (const [UJ] of JJ.baf2CoreBanked) ZJ.push(UJ);
      for (const XJ of UJ) {
        for (const {
            item: JJ
          }
          of XJ.cost) ZJ.push(JJ);
        for (const JJ of XJ.newDeposits) ZJ.push(JJ.block);
        for (const JJ of XJ.unlocks) ZJ.push(JJ, bJ(JJ));
        XJ.reward && ZJ.push(XJ.reward);
        for (const {
            item: JJ
          }
          of null !== (FJ = null === (eJ = XJ.charge) || void 0 === eJ ? void 0 : eJ.items) && void 0 !== FJ ? FJ : []) {
          var FJ, eJ;
          ZJ.push(JJ)
        }
      }
      return {
        message: JJ,
        itemNames: cJ([...new Set(ZJ)])
      }
    }
    const jr = "baf2MultiblockGuide";
    const Yr = new Map;
    const hr = function(JJ, cJ, ZJ, UJ) {
      let {
        localPlayerId: eJ
      } = UJ;
      const XJ = new qA,
        AJ = new TD,
        jJ = new BD,
        YJ = new LD(jJ),
        hJ = (JJ, cJ) => {
          cJ ? YJ.observe(JJ) : YJ.unobserve(JJ)
        },
        DJ = new RD,
        sJ = new cs(hJ),
        nJ = JJ => sJ.covers(JJ),
        GJ = new Qs;
      let fJ;
      const xJ = new wX((JJ => {
          fJ.sendCommand(JJ)
        })),
        rJ = () => {
          xJ.send("baf2questbook")
        },
        vJ = JJ => function(JJ, cJ, ZJ) {
          const FJ = {};
          for (const UJ of ZJ) {
            let ZJ = Yr.get(UJ);
            void 0 === ZJ && (ZJ = JJ.getItemStat(cJ, UJ, "displayName"), Yr.set(UJ, ZJ)), FJ[UJ] = ZJ
          }
          return FJ
        }(fJ, eJ, JJ),
        mJ = new wU(rJ),
        QJ = new gs((() => DU.d.get("loadingOverlayVisible"))),
        EJ = new ds,
        VJ = new er(QJ),
        KJ = new Xr((JJ => {
          QJ.show(JJ, JJ.baf2ToastMs)
        })),
        SJ = new Ls(hJ),
        IJ = new Ef(SJ),
        MJ = new fX,
        bJ = new Rf,
        WJ = new LX,
        gJ = new cn({
          read: () => !1 !== Ar.j.getItem(jr),
          write: JJ => {
            Ar.j.setItem(jr, JJ)
          }
        }),
        kJ = new In(gJ),
        pJ = new wn(gJ),
        dJ = new ZG(gJ, (JJ => function(JJ, cJ) {
          const ZJ = uA(cJ.w, cJ.h, cJ.d),
            FJ = new Uint8Array(ZJ);
          for (let UJ = 0; UJ < ZJ; UJ++) {
            const ZJ = En(JJ, uZ(cJ, aZ(cJ, UJ)));
            FJ[UJ] = null === ZJ ? 0 : NA(ZJ)
          }
          return FJ
        }(fJ, JJ)), Cn(xJ)),
        zJ = new FG(gJ, Cn(xJ)),
        NJ = new JG,
        OJ = (JJ, cJ) => {
          let [ZJ, FJ, UJ] = JJ;
          NJ.answered(cJ) || QJ.show({
            baf2ToastText: [(0, HJ.Kd)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: ZJ,
                h: FJ,
                d: UJ
              }
            }, HJ.D.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      dJ.onSizeNotTaken(OJ), zJ.onSizeNotTaken(OJ);
      const uJ = new AG,
        iJ = new NG(gJ),
        RJ = new TG,
        aJ = new Jf(RJ),
        BJ = new hf,
        tJ = new Vf,
        lJ = new Hf(tJ),
        Jc = new uf(tJ),
        cc = tJ.lookSource(),
        Zc = new Ax({
          handles: JJ => cc.handles(JJ) || JJ === PJ,
          line: (JJ, cJ) => JJ === PJ ? function(JJ, cJ, ZJ) {
            var FJ;
            const UJ = CJ(null === (FJ = cJ.at(ZJ)) || void 0 === FJ ? void 0 : FJ.item);
            return null === UJ ? {
              key: `${Ux}lookFarmEmpty`
            } : {
              key: JJ.blockIdToBlockName(JJ.getBlockId(ZJ[0], ZJ[1], ZJ[2])).endsWith("|Running") ? `${Ux}lookFarmRunning` : `${Ux}lookFarmWaiting`,
              keys: {
                mob: TJ(UJ)
              }
            }
          }(fJ, SJ, cJ) : cc.line(JJ, cJ),
          version: () => cc.version() + SJ.version()
        }, (JJ => gn(gJ.all(), JJ, (JJ => En(fJ, JJ)))), (() => mJ.get().tier)),
        Fc = new KG,
        ec = new mx,
        Xc = new Sx,
        Ac = Sx.blade(),
        qc = new Px,
        jc = new Os,
        Yc = new Nx,
        hc = new wx,
        Dc = new bx;
      let sc = -1 / 0,
        nc = 0,
        Gc = -1 / 0,
        fc = -1 / 0;
      const xc = () => {
          xJ.send("baf2islandsclose"), fc = Date.now()
        },
        rc = [];

      function vc(JJ) {
        var cJ, ZJ, FJ, UJ, eJ, XJ, qJ;
        "core" === (null === (cJ = AJ.get()) || void 0 === cJ ? void 0 : cJ.kind) && "core" !== (null === JJ || void 0 === JJ ? void 0 : JJ.kind) && xJ.send("baf2coreclose"), "power" === (null === (ZJ = AJ.get()) || void 0 === ZJ ? void 0 : ZJ.kind) && "power" !== (null === JJ || void 0 === JJ ? void 0 : JJ.kind) && xJ.send("baf2powerclose"), "water" === (null === (FJ = AJ.get()) || void 0 === FJ ? void 0 : FJ.kind) && "water" !== (null === JJ || void 0 === JJ ? void 0 : JJ.kind) && xJ.send(oJ.u), "terminal" === (null === (UJ = AJ.get()) || void 0 === UJ ? void 0 : UJ.kind) && "terminal" !== (null === JJ || void 0 === JJ ? void 0 : JJ.kind) && xJ.send("baf2terminalclose"), "islands" === (null === (eJ = AJ.get()) || void 0 === eJ ? void 0 : eJ.kind) && "islands" !== (null === JJ || void 0 === JJ ? void 0 : JJ.kind) && xc();
        const jJ = tJ.getStatus();
        "collider" === (null === (XJ = AJ.get()) || void 0 === XJ ? void 0 : XJ.kind) && "collider" !== (null === JJ || void 0 === JJ ? void 0 : JJ.kind) && jJ && xJ.send(Iq(jJ, "close"));
        const YJ = JJ => "reactor" === JJ || "battery" === JJ;
        if (YJ(null === (qJ = AJ.get()) || void 0 === qJ ? void 0 : qJ.kind) && !YJ(null === JJ || void 0 === JJ ? void 0 : JJ.kind)) {
          var hJ, DJ, sJ;
          const JJ = "reactor" === (null === (hJ = AJ.get()) || void 0 === hJ ? void 0 : hJ.kind) ? null === (DJ = dJ.get()) || void 0 === DJ ? void 0 : DJ.status.baf2RxAt : null === (sJ = zJ.get()) || void 0 === sJ ? void 0 : sJ.status.baf2BatAt;
          JJ && xJ.send(Uc(JJ, "close"))
        }
        "quests" === (null === JJ || void 0 === JJ ? void 0 : JJ.kind) && rJ(), AJ.set(JJ), null === JJ && EJ.release()
      }

      function Qc() {
        (0, hU.f)(), vc(null)
      }
      let Ec = new Set,
        Vc = !1;
      const Kc = {
        onCreate: JJ => {
          fJ = JJ, fJ.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const cJ of mc) {
            const JJ = Sc[cJ].inputSlots ? VA(XJ) : mA(cJ, XJ, MJ, xJ);
            rc.push((0, jU.f)(cJ, JJ))
          }
          rc.push((0, hU.u)((0, FJ.createElement)(FJ.Fragment, null, (0, FJ.createElement)(Us, {
            controller: sJ
          }), (0, FJ.createElement)(ts, {
            store: SJ
          }), (0, FJ.createElement)(jx, {
            store: Zc
          }), (0, FJ.createElement)(ws, {
            store: mJ
          }), (0, FJ.createElement)(ks, {
            store: QJ
          }), (0, FJ.createElement)(zs, {
            store: EJ
          }), (0, FJ.createElement)(Cs, {
            store: jc
          }), (0, FJ.createElement)(XG, {
            store: uJ
          }), (0, FJ.createElement)(CG, {
            store: RJ
          })), {
            content: (0, FJ.createElement)(CD, {
              commands: xJ,
              store: AJ,
              power: MJ,
              water: WJ,
              reactor: dJ,
              battery: zJ,
              collider: tJ,
              terminal: bJ,
              quests: mJ,
              close: hU.j,
              cn: () => {
                EJ.dropHeld(), (0, hU.f)()
              },
              askIslands: () => {
                fc = -1 / 0, sc = Date.now(), nc = xJ.send(LJ)
              },
              openSocial: () => {
                (0, hU.f)(), DU.d.set({
                  openEverythingMenuName: UZ.m.SOCIAL
                })
              },
              showCore: JJ => {
                vc({
                  kind: "core",
                  core: JJ
                }), xJ.send("baf2corereopen")
              }
            }),
            onClose: () => {
              vc(null)
            }
          })), rc.push((0, YU.t)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              vc({
                kind: "quests"
              }), (0, hU.n)()
            }
          })), rc.push(cr(xJ, mJ, QJ)), Vc = !1, rc.push(fe((() => {
            null !== Rx && ax(Rx)
          }))), rc.push(Bx()), rc.push(function() {
            const JJ = yU.i.subscribe(IU, uU),
              cJ = () => {
                if (CU) {
                  const JJ = CU;
                  CU = null, (0, SU.o)(JJ)
                }
              },
              ZJ = yU.i.subscribe("toggleMenu", (JJ => {
                "inventory" === (null === JJ || void 0 === JJ ? void 0 : JJ.split("|")[0]) && cJ()
              })),
              FJ = yU.i.subscribe("appManagerUpdated|openInGameMenuName", (JJ => {
                "inventory" === JJ && cJ()
              }));
            return () => {
              yU.i.unsubscribe(JJ), yU.i.unsubscribe(ZJ), yU.i.unsubscribe(FJ)
            }
          }()), rc.push(function(JJ) {
            const cJ = ux(JJ),
              ZJ = yU.i.subscribe(IU, (JJ => {
                Cx.follow(JJ, cJ)
              }));
            return () => {
              yU.i.unsubscribe(ZJ), Cx.clear()
            }
          }(fJ)), rc.push(function() {
            const JJ = document.documentElement,
              cJ = (0, Vs.d)(".InvenBodyRight", [], (() => {
                const cJ = document.querySelector(".InvenBodyRight");
                cJ && JJ.style.setProperty("--baf2-backpack-width", `${cJ.offsetWidth}px`)
              }));
            return () => {
              cJ(), JJ.style.removeProperty("--baf2-backpack-width")
            }
          }()), rc.push(function() {
            const JJ = document.documentElement;
            return JJ.classList.add(Ox), () => {
              JJ.classList.remove(Ox)
            }
          }()), rc.push((() => {
            YJ.dispose(), jJ.dispose()
          })), GJ.start(fJ), rc.push((() => {
            GJ.dispose(), qc.dispose(), IJ.dispose()
          }))
        },
        onClose: () => {
          (0, SU.o)([]), CU = null, TU = new Set, Rx = null, (0, SU.l)(new Map), Yr.clear();
          for (const JJ of rc) JJ();
          mJ.dispose(), Zc.dispose(), QJ.dispose(), EJ.dispose(), Fc.dispose(), ec.dispose(fJ), kJ.dispose(fJ), pJ.dispose(fJ), iJ.dispose(fJ), aJ.dispose(fJ), RJ.dispose(), BJ.dispose(), gJ.dispose(), dJ.dispose(), zJ.dispose(), uJ.dispose(), Xc.dispose(), Ac.dispose(), jc.dispose(), lJ.dispose(fJ), Jc.dispose(fJ), tJ.dispose(), Yc.dispose(), xJ.clear()
        },
        onAfterRender: (JJ, cJ) => {
          var ZJ, FJ, UJ;
          try {
            GJ.onAfterRender(cJ)
          } catch (jJ) {
            console.error("Error drawing BAF2 belt items", jJ)
          }
          try {
            qc.onAfterRender(fJ, eJ)
          } catch (jJ) {
            console.error("Error drawing BAF2 jet flames", jJ)
          }
          Vc || (Vc = !0, xJ.send("baf2clientready"));
          const XJ = fJ.getPositionView(eJ);
          sJ.onAfterRender(cJ, XJ, DJ), SJ.onAfterRender(cJ, XJ, DJ, nJ), YJ.run(DJ), Fc.onAfterRender(fJ, XJ), ec.onAfterRender(fJ, XJ), IJ.onAfterRender(fJ, XJ), kJ.onAfterRender(fJ, XJ), pJ.onAfterRender(fJ, eJ, XJ), iJ.onAfterRender(fJ, eJ, XJ), aJ.onAfterRender(fJ, eJ), BJ.onAfterRender(fJ, XJ), mJ.onPlayerY(XJ[1]), lJ.onAfterRender(fJ), Jc.onAfterRender(fJ, eJ, XJ);
          const qJ = fJ.getTargetedBlock();
          Zc.onAfterRender(fJ, eJ, null !== (ZJ = null === qJ || void 0 === qJ ? void 0 : qJ.yB) && void 0 !== ZJ ? ZJ : 0, null !== (FJ = null === qJ || void 0 === qJ ? void 0 : qJ.position) && void 0 !== FJ ? FJ : null), Yc.onAfterRender(fJ, cJ), KJ.onMining(function(JJ, cJ) {
            var ZJ, FJ;
            const UJ = JJ.getMiningBlock();
            if (!UJ) return null;
            const eJ = (0, wJ.i)(JJ.getBlockId(UJ[0], UJ[1], UJ[2])),
              XJ = null !== (ZJ = null === (FJ = JJ.WcJ(cJ)) || void 0 === FJ ? void 0 : FJ.name) && void 0 !== ZJ ? ZJ : null,
              AJ = JJ.getItemStat(cJ, eJ.split("|")[0], "harvestLevel");
            return {
              block: eJ,
              x: UJ[0],
              y: UJ[1],
              z: UJ[2],
              hj: XJ,
              level: AJ
            }
          }(fJ, eJ), fJ.isMining(), performance.now()), "dropMap" === (null === (UJ = AJ.get()) || void 0 === UJ ? void 0 : UJ.kind) && bF(XJ[1]) && Qc()
        },
        onPlayerChangeBlock: (JJ, cJ, ZJ, FJ, UJ, XJ) => {
          JJ === eJ && function(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
            const AJ = Mx(eJ, XJ, JJ.isPlayerCrouching(cJ));
            if (null === AJ) return;
            if (JJ.fK(ZJ, FJ, UJ, AJ), !JJ.getClientOption(cJ, "canPickUpItems")) return;
            const qJ = lc[AJ.split("|")[0]];
            var jJ, YJ, hJ;
            void 0 !== qJ && (jJ = JJ.getInventoryItems(), YJ = qJ, hJ = Zn.c.maxItemStackSize, JJ.getInventoryFreeSlotCount(cJ) > 0 || jJ.some((JJ => null !== JJ && JJ.name === YJ && null !== JJ.amount && JJ.amount < hJ))) && JJ.playSound(cJ, (0, Fr.e)("pickUp"), .5, 1)
          }(fJ, JJ, cJ, ZJ, FJ, UJ, XJ)
        },
        onPlayerAltAction: (JJ, cJ, ZJ, FJ, UJ) => {
          var XJ, AJ;
          if (!fJ.getClientOption(eJ, "canPickUpItems")) return;
          const qJ = null !== (XJ = null === (AJ = fJ.WcJ(eJ)) || void 0 === AJ ? void 0 : AJ.name) && void 0 !== XJ ? XJ : null,
            jJ = function(JJ, cJ) {
              const ZJ = JJ.split("|")[0];
              return yJ(ZJ) && cJ !== JU && "Sky Pack" !== cJ ? ZJ : null
            }(UJ, qJ);
          if (null !== jJ) return void(hc.tap(jJ, performance.now()) && ix(fJ, eJ, jJ, mJ));
          if (!HF(qJ)) return;
          const YJ = Dc.isNewPress(performance.now()),
            hJ = function(JJ, cJ, ZJ) {
              return !HF(cJ) || ZJ ? null : CF(JJ)
            }(UJ, qJ, fJ.isPlayerCrouching(eJ));
          null !== hJ && YJ && fJ.fK(cJ, ZJ, FJ, hJ)
        },
        onPlayerAttemptAltAction: (JJ, cJ, ZJ, FJ, UJ) => {
          if (function(JJ, cJ, ZJ, FJ, UJ) {
              "Workbench" === FJ.split("|")[0] && JJ.getClientOption(ZJ, "canCraft") && (Cx.open("Workbench", UJ.get(), ux(JJ)), cJ.send("baf2station Workbench"))
            }(fJ, xJ, eJ, UJ, mJ), Zr(fJ, eJ, UJ)) return "preventAction";
          VJ.onAltAction(fJ, eJ, UJ)
        },
        onReceivedMessageFromServer: (JJ, cJ) => {
          if ("baf2MachineStatus" === JJ) {
            var ZJ, FJ, UJ, jJ, YJ, hJ, DJ, nJ, rJ, VJ, KJ, yJ, IJ, wJ, HJ, PJ;
            const JJ = cJ,
              eJ = JJ.baf2MachineTaught;
            XJ.set(JJ.baf2MachinePos, {
              status: JJ.baf2MachineStatus,
              power: null !== (ZJ = JJ.baf2MachinePower) && void 0 !== ZJ ? ZJ : null,
              opLeftMs: null !== (FJ = JJ.baf2MachineOpLeftMs) && void 0 !== FJ ? FJ : null,
              dug: JJ.baf2MachineYield ? {
                item: JJ.baf2MachineYield,
                name: vJ([JJ.baf2MachineYield])[JJ.baf2MachineYield]
              } : null,
              powerCap: null !== (UJ = JJ.baf2MachinePowerCap) && void 0 !== UJ ? UJ : null,
              powerRates: null !== (jJ = JJ.baf2MachinePowerRates) && void 0 !== jJ ? jJ : null,
              coupled: !0 === JJ.baf2MachineCoupled,
              couplerLevel: null !== (YJ = JJ.baf2MachineCoupler) && void 0 !== YJ ? YJ : 1,
              taught: eJ,
              taughtName: eJ ? vJ([eJ])[eJ] : null,
              tier: null !== (hJ = JJ.baf2MachineTier) && void 0 !== hJ ? hJ : null,
              input: null !== (DJ = JJ.baf2MachineInput) && void 0 !== DJ ? DJ : null,
              inertCoupler: null !== (nJ = JJ.baf2MachineInertCoupler) && void 0 !== nJ ? nJ : null,
              inputShort: null !== (rJ = JJ.baf2MachineInputShort) && void 0 !== rJ ? rJ : null,
              field: null !== (VJ = JJ.baf2MachineField) && void 0 !== VJ ? VJ : null,
              noSeeds: !0 === JJ.baf2MachineNoSeeds,
              fuelFed: !0 === JJ.baf2MachineFuelFed,
              fuelFeeds: !0 === JJ.baf2MachineFuelFeeds,
              coreFull: !0 === JJ.baf2MachineCoreFull,
              waterUnpowered: !0 === JJ.baf2MachineWaterUnpowered,
              powerShort: !0 === JJ.baf2MachinePowerShort,
              powerWait: !0 === JJ.baf2MachinePowerWait,
              reactorPowered: !0 === JJ.baf2MachineReactorPowered,
              fuelLeftMs: null !== (KJ = JJ.baf2MachineFuelLeftMs) && void 0 !== KJ ? KJ : null,
              burning: null !== (yJ = JJ.baf2MachineBurning) && void 0 !== yJ ? yJ : null,
              fuelKeep: null !== (IJ = JJ.baf2MachineFuelKeep) && void 0 !== IJ ? IJ : null,
              water: null !== (wJ = JJ.baf2MachineWater) && void 0 !== wJ ? wJ : null,
              farm: null !== (HJ = JJ.baf2MachineFarm) && void 0 !== HJ ? HJ : null,
              cryo: null !== (PJ = JJ.baf2MachineCryo) && void 0 !== PJ ? PJ : null
            })
          } else if ("baf2StationOpen" === JJ) {
            const JJ = cJ.baf2Station;
            hc.consumeServerOpen(JJ, performance.now()) || ix(fJ, eJ, JJ, mJ)
          } else if ("baf2Power" === JJ) {
            const JJ = cJ;
            MJ.set(JJ), JJ.baf2PowerOpen && (vc({
              kind: "power"
            }), (0, hU.n)())
          } else if (JJ === oJ.C) {
            const JJ = cJ;
            WJ.set(JJ), JJ.baf2WaterOpen && (vc({
              kind: "water"
            }), (0, hU.n)())
          } else if ("baf2RxPlans" === JJ) {
            var kJ, pJ, OJ;
            const JJ = cJ;
            gJ.Rm(JJ);
            const ZJ = new Set(JJ.baf2RxPlanList.map((JJ => {
              let [cJ, ZJ, FJ] = JJ;
              return `${cJ},${ZJ},${FJ}`
            })));
            uJ.retain(ZJ);
            const FJ = null === (kJ = AJ.get()) || void 0 === kJ ? void 0 : kJ.kind,
              UJ = "reactor" === FJ ? null === (pJ = dJ.get()) || void 0 === pJ ? void 0 : pJ.status.baf2RxAt : "battery" === FJ ? null === (OJ = zJ.get()) || void 0 === OJ ? void 0 : OJ.status.baf2BatAt : void 0;
            UJ && Ec.has(UJ.join(",")) && !ZJ.has(UJ.join(",")) && Qc(), Ec = ZJ
          } else if ("baf2RxStatus" === JJ) {
            const JJ = cJ;
            dJ.set(JJ), JJ.baf2RxOpen && (vc({
              kind: "reactor"
            }), (0, hU.n)())
          } else if ("baf2BatStatus" === JJ) {
            const JJ = cJ;
            zJ.set(JJ), JJ.baf2BatOpen && (vc({
              kind: "battery"
            }), (0, hU.n)())
          } else if ("baf2RxAlarm" === JJ) uJ.Rm(cJ);
          else if ("baf2Bomb" === JJ) RJ.Rm(cJ, fJ.getPositionView(eJ));
          else if ("baf2Fallout" === JJ) BJ.Rm(cJ);
          else if ("baf2ColBeams" === JJ) tJ.onBeams(cJ);
          else if ("baf2ColStatus" === JJ) {
            const JJ = cJ;
            var TJ, CJ;
            if (tJ.onStatus(JJ), JJ.baf2ColOpen) tJ.onOpen(null !== (TJ = null === (CJ = fJ.WcJ(eJ)) || void 0 === CJ ? void 0 : CJ.name) && void 0 !== TJ ? TJ : null), vc({
              kind: "collider"
            }), (0, hU.n)()
          } else if ("baf2Terminal" === JJ) {
            const JJ = cJ;
            var iJ;
            if (bJ.apply(JJ)) JJ.baf2TermReset && (vc({
              kind: "terminal"
            }), (0, hU.n)());
            else "terminal" === (null === (iJ = AJ.get()) || void 0 === iJ ? void 0 : iJ.kind) && (AJ.set(null), (0, hU.f)())
          } else if ("baf2Core" === JJ) {
            var aJ;
            const JJ = cJ;
            if (qJ(!0 === JJ.baf2CoreNuclear), function(JJ, cJ) {
                return "core" === (null === JJ || void 0 === JJ ? void 0 : JJ.kind) && cJ.baf2CoreTier > JJ.core.message.baf2CoreTier
              }(AJ.get(), JJ)) return void(0, hU.f)();
            if (JJ.baf2CoreRefresh && "core" !== (null === (aJ = AJ.get()) || void 0 === aJ ? void 0 : aJ.kind)) return;
            vc({
              kind: "core",
              core: qr(JJ, vJ)
            }), JJ.baf2CoreRefresh || (0, hU.n)()
          } else if ("baf2WrenchUndo" === JJ) {
            const {
              baf2WrenchPos: JJ,
              baf2WrenchBlock: ZJ
            } = cJ;
            fJ.fK(JJ[0], JJ[1], JJ[2], ZJ)
          } else if ("baf2Toast" === JJ) {
            const JJ = cJ;
            NJ.heard(performance.now(), JJ.baf2ToastMs), QJ.show(JJ)
          } else if ("baf2Area" === JJ) EJ.arrive(cJ, null !== AJ.get());
          else if ("baf2Quest" === JJ) {
            const JJ = cJ;
            qJ(!0 === JJ.baf2QuestNuclear), mJ.set(JJ, function(JJ, cJ) {
              var ZJ, FJ, UJ, eJ, XJ;
              const AJ = [];
              for (const [, , YJ, , , , , , hJ, DJ] of JJ.baf2QuestSteps) null !== YJ && AJ.push(YJ), AJ.push(...null !== hJ && void 0 !== hJ ? hJ : [], ...null !== DJ && void 0 !== DJ ? DJ : []);
              JJ.baf2QuestReward && AJ.push(JJ.baf2QuestReward);
              const qJ = null === (ZJ = JJ.baf2QuestSide) || void 0 === ZJ ? void 0 : ZJ[2][2];
              qJ && AJ.push(qJ), AJ.push(...null !== (FJ = null === (UJ = JJ.baf2QuestSide) || void 0 === UJ ? void 0 : UJ[2][8]) && void 0 !== FJ ? FJ : [], ...null !== (eJ = null === (XJ = JJ.baf2QuestSide) || void 0 === XJ ? void 0 : XJ[2][9]) && void 0 !== eJ ? eJ : []);
              for (const [YJ] of null !== (jJ = JJ.baf2QuestAlso) && void 0 !== jJ ? jJ : []) {
                var jJ;
                AJ.push(YJ)
              }
              return cJ(AJ)
            }(JJ, vJ)), ax(JJ.baf2QuestTier)
          } else if ("baf2Route" === JJ) ! function(JJ, cJ) {
            let {
              baf2RouteCells: ZJ,
              baf2RouteInto: FJ
            } = cJ;
            0 !== ZJ.length && FJ ? JJ.setRouteChevrons({
              cells: ZJ.map(((JJ, cJ) => {
                const [UJ, , eJ] = function(JJ, cJ, ZJ) {
                  const FJ = ZJ + 1 < JJ.length ? JJ[ZJ + 1] : cJ;
                  return [FJ[0] - JJ[ZJ][0], 0, FJ[2] - JJ[ZJ][2]]
                }(ZJ, FJ, cJ);
                return {
                  pos: JJ,
                  way: [UJ, eJ]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : JJ.setRouteChevrons(null)
          }(fJ, cJ);
          else if ("baf2QuestBook" === JJ) mJ.setBook(cJ);
          else if ("baf2Stalls" === JJ) sJ.set(cJ.baf2StallCells);
          else if (JJ === qZ.p) GJ.onMoves(cJ);
          else if (JJ === qZ.k) GJ.onLines(cJ);
          else if ("baf2Labels" === JJ) SJ.Rm(cJ);
          else if ("baf2DropMap" === JJ) vc({
            kind: "dropMap",
            dropMap: cJ
          }), (0, hU.n)();
          else if ("baf2Islands" === JJ) {
            var lJ, Jc;
            const JJ = cJ;
            if (xJ.syncIslandEdits(JJ.baf2IslandsAnswered), !JJ.baf2IslandsOpen && "islands" !== (null === (lJ = AJ.get()) || void 0 === lJ ? void 0 : lJ.kind)) return;
            if (JJ.baf2IslandsOpen) {
              var cc, Zc;
              const cJ = DU.d.get("openEverythingMenuName"),
                ZJ = xJ.sent() >= nc,
                FJ = "other" !== (rc = {
                  askedAtMs: sc,
                  askSent: ZJ,
                  reaskedAtMs: Gc,
                  nowMs: Date.now(),
                  panel: null !== (cc = null === (Zc = AJ.get()) || void 0 === Zc ? void 0 : Zc.kind) && void 0 !== cc ? cc : null,
                  inGameMenu: DU.d.get("openInGameMenuName"),
                  everythingMenu: null === cJ ? null : cJ === UZ.m.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== JJ.baf2IslandsFocusInvite
                }).everythingMenu && (!!rc.focusInvite || "islands" === rc.panel && "clientGame" === rc.inGameMenu || !(rc.nowMs - rc.reaskedAtMs < Vj) && (rc.askSent && rc.nowMs - rc.askedAtMs < Vj ? "core" === rc.panel && "clientGame" === rc.inGameMenu && null === rc.everythingMenu : "shop" === rc.everythingMenu || null === rc.inGameMenu));
              if (ZJ && (sc = -1 / 0), Gc = -1 / 0, !FJ) return void xc()
            }
            const ZJ = (Uc = JJ.baf2IslandsOpen, ec = "islands" === (null === (Jc = AJ.get()) || void 0 === Jc ? void 0 : Jc.kind), Yc = fc, Dc = Date.now(), Uc && !ec && Dc - Yc < Vj);
            vc({
              kind: "islands",
              islands: JJ,
              arrivedAtMs: Date.now(),
              backToCore: Kj(AJ.get())
            }), ZJ && (fc = -1 / 0, Gc = Date.now(), xJ.send(LJ)), JJ.baf2IslandsOpen && ("clientGame" !== DU.d.get("openInGameMenuName") && (0, sU.f)(), (0, hU.n)())
          } else if ("baf2CoopTransfer" === JJ) {
            var Fc;
            const JJ = cJ;
            JJ.baf2TransferOn ? (vc({
              kind: "transfer",
              transfer: JJ,
              arrivedAtMs: Date.now()
            }), (0, hU.n)()) : "transfer" === (null === (Fc = AJ.get()) || void 0 === Fc ? void 0 : Fc.kind) && (0, hU.f)()
          } else "baf2IslandLeft" === JJ ? (EJ.dropHeld(), null !== AJ.get() && Qc(), "inventory" === DU.d.get("openInGameMenuName") && (0, sU.f)()) : "baf2Arc" === JJ ? Xc.Rm(fJ, cJ) : "baf2Blade" === JJ ? Ac.onBlade(fJ, cJ) : "baf2JetFlame" === JJ ? qc.Rm(fJ, cJ) : "baf2GearPower" === JJ && jc.Rm(cJ);
          var Uc, ec, Yc, Dc, rc
        }
      };
      return Kc
    }
  },
  37499: (JJ, cJ, ZJ) => {
    function FJ(JJ, cJ, ZJ) {
      const FJ = new Set,
        UJ = new ResizeObserver(ZJ),
        eJ = () => {
          const cJ = new Set(document.querySelectorAll(JJ));
          let eJ = !1;
          for (const JJ of FJ) cJ.has(JJ) || (UJ.unobserve(JJ), FJ.delete(JJ), eJ = !0);
          for (const JJ of cJ) FJ.has(JJ) || (UJ.observe(JJ), XJ.observe(JJ, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), FJ.add(JJ));
          eJ && ZJ()
        },
        XJ = new MutationObserver((cJ => {
          cJ.some((JJ => "attributes" === JJ.type)) && ZJ(), cJ.some((cJ => function(JJ, cJ, ZJ) {
            if ("childList" !== JJ.type) return !1;
            for (const FJ of JJ.addedNodes)
              if (FJ instanceof Element && (FJ.matches(cJ) || FJ.querySelector(cJ))) return !0;
            for (const FJ of JJ.removedNodes)
              if (FJ instanceof Element)
                for (const JJ of ZJ)
                  if (FJ.contains(JJ)) return !0;
            return !1
          }(cJ, JJ, FJ))) && eJ()
        }));
      XJ.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const AJ of cJ) UJ.observe(AJ);
      return window.addEventListener("resize", ZJ), eJ(), ZJ(), () => {
        UJ.disconnect(), XJ.disconnect(), window.removeEventListener("resize", ZJ)
      }
    }
    ZJ.d(cJ, {
      d: () => FJ
    })
  },
  37482: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => XJ,
      e: () => eJ
    });
    const FJ = new WeakMap;

    function UJ(JJ) {
      let cJ = FJ.get(JJ);
      return cJ || (cJ = {
        hidden: JJ.hidden,
        x: NaN,
        y: NaN
      }, FJ.set(JJ, cJ)), cJ
    }

    function eJ(JJ, cJ) {
      const ZJ = UJ(JJ);
      ZJ.hidden !== cJ && (ZJ.hidden = cJ, JJ.hidden = cJ)
    }

    function XJ(JJ, cJ, ZJ) {
      const FJ = UJ(JJ);
      FJ.x === cJ && FJ.y === ZJ || (FJ.x = cJ, FJ.y = ZJ, JJ.style.translate = `${cJ}vw ${ZJ}vh`)
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);