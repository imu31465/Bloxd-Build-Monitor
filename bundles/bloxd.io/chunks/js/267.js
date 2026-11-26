export const id = 267;
export const ids = [267];
export const modules = {
  39659: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => yV
    });
    var JV = xV(39662);
    const YV = [0, 0, 0];
    class UV {
      constructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YV;
        this.pool = VV, this.origin = eV, this.count = 0, this.free = []
      }
      take() {
        var VV;
        const eV = null !== (VV = this.free.pop()) && void 0 !== VV ? VV : this.count++;
        return eV >= this.pool.Jv && this.pool.grow(Math.max(2 * this.pool.Jv, eV + 1)), this.hide(eV), eV
      }
      release(VV) {
        this.hide(VV), this.free.push(VV)
      }
      write(VV, eV, xV, YV) {
        const {
          records: UV
        } = this.pool, {
          origin: yV
        } = this, pV = VV * JV.e;
        UV[pV] = eV - yV[0], UV[pV + 1] = xV - yV[1], UV[pV + 2] = YV - yV[2], UV[pV + JV.g] = 0, this.pool.markDirty(VV)
      }
      hide(VV) {
        this.pool.records[VV * JV.e + JV.g] = 1, this.pool.markDirty(VV)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class yV {
      constructor(VV, eV, xV) {
        this.api = VV, this.model = eV, this.initialCapacity = xV, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(VV) {
        let eV = this.kinds.get(VV);
        if (void 0 === eV) {
          const xV = this.api.createInstancePool({
            ...this.model,
            item: VV
          }, this.initialCapacity);
          null === xV || void 0 === xV || xV.setOrigin(this.origin[0], this.origin[1], this.origin[2]), eV = xV && new UV(xV, this.origin), this.kinds.set(VV, eV)
        }
        return eV
      }
      follow(VV) {
        const {
          origin: eV
        } = this;
        if (Math.abs(VV[0] - eV[0]) <= 512 && Math.abs(VV[1] - eV[1]) <= 512 && Math.abs(VV[2] - eV[2]) <= 512) return !1;
        eV[0] = Math.floor(VV[0]), eV[1] = Math.floor(VV[1]), eV[2] = Math.floor(VV[2]);
        for (const xV of this.kinds.values()) null === xV || void 0 === xV || xV.pool.setOrigin(eV[0], eV[1], eV[2]);
        return !0
      }
      commit() {
        for (const VV of this.kinds.values()) null === VV || void 0 === VV || VV.commit()
      }
      dispose() {
        for (const VV of this.kinds.values()) null === VV || void 0 === VV || VV.dispose();
        this.kinds.clear()
      }
    }
  },
  39669: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => yV,
      f: () => pV,
      g: () => QV
    });
    const JV = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      YV = [0, 1, 2, 0, 2, 3],
      UV = [4, 5];

    function yV(VV, eV, xV, JV, YV) {
      for (let yV = 0; yV < 6; yV++) UV.includes(yV) === YV && nV(VV, eV, xV, JV, yV)
    }

    function pV(VV, eV, xV, JV) {
      for (let YV = 0; YV < 6; YV++) nV(VV, eV, xV, JV, YV)
    }

    function QV(VV, eV, xV, UV, yV) {
      for (let pV = 0; pV < 6; pV++)
        for (const QV of [0, 1]) {
          const [nV, wV, ZV] = [QV + 2, QV + 1, (QV + 3) % 4], vV = VV.length / 3;
          for (const [eV, YV] of [
              [QV, wV],
              [nV, wV],
              [nV, ZV],
              [QV, ZV]
            ])
            for (let QV = 0; QV < 3; QV++) {
              const nV = JV[3 * (4 * pV + eV) + QV],
                wV = JV[3 * (4 * pV + YV) + QV];
              VV.push((nV + (wV - nV) * yV) * UV / 2 + xV[QV])
            }
          for (const VV of YV) eV.push(vV + VV)
        }
    }

    function nV(VV, eV, xV, UV, yV) {
      let [pV, QV, nV] = xV, [wV, ZV, vV] = UV;
      const rV = VV.length / 3;
      for (let YV = 4 * yV; YV < 4 * yV + 4; YV++) VV.push(JV[3 * YV] * wV / 2 + pV, JV[3 * YV + 1] * ZV / 2 + QV, JV[3 * YV + 2] * vV / 2 + nV);
      for (const JV of YV) eV.push(rV + JV)
    }
  },
  39642: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      default: () => kj
    });
    var JV = xV(62);
    const YV = [{
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
      UV = 10;
    let yV = !0;

    function pV() {
      return yV
    }

    function QV(VV) {
      yV = VV
    }
    const nV = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function wV() {
      return yV ? YV.length : UV
    }

    function ZV(VV) {
      var eV, xV;
      return null !== (eV = null === (xV = YV[VV - 1]) || void 0 === xV ? void 0 : xV.reactorTier) && void 0 !== eV ? eV : 0
    }

    function vV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ZV(VV) > 0;
      return xV && !yV ? "hidden" : VV <= eV ? "open" : xV ? eV < 5 ? "hidden" : eV < UV ? "teaser" : "locked" : "locked"
    }

    function rV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: JV,
        n: YV
      } = EV(VV);
      return {
        key: eV[JV],
        params: {
          [JV]: xV ? String(YV) : YV
        }
      }
    }
    const kV = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function bV(VV, eV) {
      return ZV(VV) > 0 && eV < UV
    }

    function EV(VV) {
      const eV = ZV(VV);
      if (eV > 0) return {
        kind: "atomic",
        n: eV,
        short: `A${eV}`
      };
      const xV = function(VV) {
        return VV >= 6 && VV <= 10 ? VV - 6 + 1 : 0
      }(VV);
      return xV > 0 ? {
        kind: "stage",
        n: xV,
        short: `S${xV}`
      } : {
        kind: "tier",
        n: VV,
        short: String(VV)
      }
    }

    function BV(VV) {
      return YV[Math.max(1, Math.min(VV, YV.length)) - 1]
    }

    function jV(VV, eV) {
      return VV < eV ? function(VV) {
        var eV;
        return null !== (eV = YV[VV]) && void 0 !== eV ? eV : null
      }(VV) : null
    }
    const qV = "baf2coresubmit",
      tV = "baf2corebankpause",
      FV = "baf2coredeposit",
      TV = "baf2corechargepause";

    function PV(VV) {
      var eV;
      return null !== (eV = VV.baf2CoreOpen) && void 0 !== eV ? eV : UV
    }
    const AV = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function NV(VV) {
      return AV.includes(VV)
    }
    const XV = (VV, eV) => eV.map((eV => [eV, [VV]])),
      MV = Object.fromEntries([...XV("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...XV("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...XV("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...XV("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...XV("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...XV("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...XV("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...XV("Parts Bench", ["Focus Lens"]), ...XV("Machine Bench", ["Laser", "Collider"]), ...XV("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb", "Nova Bomb"]), ...XV("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...XV("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...XV("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...XV("Tool Bench", ["Mob Cage"]), ...XV("Tool Bench", ["Pocket Terminal"]), ...XV("Tool Bench", ["Comet Beacon"]), ...XV("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function zV(VV) {
      var eV;
      return null !== (eV = MV[VV]) && void 0 !== eV ? eV : ["Workbench"]
    }

    function GV(VV) {
      return zV(VV)[0]
    }
    YV.slice(1).map(((VV, eV) => `Core Tier ${eV+2}`));
    var WV = xV(9820);
    const RV = ["on", "hud", "off"];

    function gV(VV) {
      return "on" === VV
    }
    var DV = xV(375);
    const iV = "Mob Farm",
      CV = {
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
      aV = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      oV = {
        1: 20,
        2: 60,
        3: 120
      },
      cV = "baf2farmvoid",
      hV = "Caged ",
      lV = " Spawner Block";

    function LV(VV) {
      return `lifeform:${(0,DV.ue)(VV)}`
    }

    function fV(VV) {
      if (!VV) return null;
      if (VV.startsWith(hV)) {
        const eV = VV.slice(6);
        return aV.includes(eV) ? eV : null
      }
      if (VV.endsWith(lV)) {
        const eV = VV.slice(0, -14);
        return void 0 !== CV[eV] ? eV : null
      }
      return null
    }

    function mV(VV) {
      return !0 === VV.mobFarm
    }

    function KV(VV, eV) {
      return oV[CV[eV]] * VV.opMs / 1e3
    }
    const HV = new Map;
    const uV = "baf2islands",
      sV = "baf2islandnew";

    function SV(VV) {
      const eV = YV.findIndex((eV => eV.unlocks.includes(VV)));
      return eV < 0 ? 1 : eV + 1
    }

    function IV(VV) {
      return Math.floor(VV).toLocaleString("en-US")
    }
    var dV = xV(39575);
    const OV = "baf2terminaltake",
      Ve = "baf2terminalput",
      ee = ["one", "stack", "fill"];

    function xe(VV, eV, xV) {
      return `${OV} ${VV} ${eV} ${xV}`
    }

    function Je(VV, eV, xV) {
      return `${Ve} ${VV} ${eV} ${xV}`
    }

    function Ye(VV) {
      return `${Ve} ${VV}`
    }
    const Ue = [
      [`${OV} `, "take"],
      [`${Ve} `, "put"]
    ];

    function ye(VV) {
      const eV = Ue.find((eV => {
        let [xV] = eV;
        return VV.startsWith(xV)
      }));
      if (!eV) return null;
      const [xV, JV] = eV, [YV, UV, ...yV] = VV.slice(xV.length).trim().split(" "), pV = Number(YV);
      if (!Number.isSafeInteger(pV) || pV <= 0) return null;
      if ("put" === JV && void 0 === UV) return {
        kind: "putAll",
        seq: pV
      };
      const QV = function(VV) {
        if (ee.includes(VV)) return VV;
        const eV = Number(VV);
        return /^\d+$/.test(VV) && Number.isSafeInteger(eV) && eV > 0 ? eV : null
      }(null !== UV && void 0 !== UV ? UV : "");
      return null === QV || 0 === yV.length ? null : {
        kind: JV,
        seq: pV,
        mode: QV,
        item: yV.join(" ")
      }
    }

    function pe(VV, eV) {
      const xV = "number" === typeof VV ? VV : "one" === VV ? 1 : "stack" === VV ? 99 : eV;
      return Math.min(eV, xV)
    }

    function Qe(VV, eV) {
      const xV = VV => "number" === typeof VV ? VV : "one" === VV ? 1 : 99;
      return "fill" === VV || "fill" === eV ? "fill" : xV(VV) + xV(eV)
    }

    function ne(VV, eV) {
      const xV = ye(VV),
        JV = ye(eV),
        YV = xV && JV ? function(VV, eV) {
          return "take" === VV.kind || "take" === eV.kind ? "take" === VV.kind && "take" === eV.kind && VV.item === eV.item ? {
            ...eV,
            mode: Qe(VV.mode, eV.mode)
          } : null : "putAll" === VV.kind || "putAll" === eV.kind ? {
            kind: "putAll",
            seq: eV.seq
          } : VV.item === eV.item ? {
            ...eV,
            mode: Qe(VV.mode, eV.mode)
          } : null
        }(xV, JV) : null;
      return YV ? "putAll" === (UV = YV).kind ? Ye(UV.seq) : "put" === UV.kind ? Je(UV.seq, UV.mode, UV.item) : xe(UV.seq, UV.mode, UV.item) : null;
      var UV
    }
    const we = "baf2rx";

    function Ze(VV, eV) {
      for (var xV = arguments.length, JV = new Array(xV > 2 ? xV - 2 : 0), YV = 2; YV < xV; YV++) JV[YV - 2] = arguments[YV];
      return [we, VV[0], VV[1], VV[2], eV, ...JV].join(" ")
    }
    const ve = 2,
      re = 4,
      ke = 8,
      be = 16,
      Ee = 32,
      Be = 64,
      je = 128,
      qe = 256,
      te = 512,
      Fe = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      Te = [{
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
    const Pe = "Biomass",
      Ae = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function Ne(VV) {
      return {
        input: Pe,
        inputAmount: 1,
        output: VV,
        outputAmount: 1
      }
    }
    const Xe = "baf2synth",
      Me = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      ze = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      Ge = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      We = function(VV, eV) {
        return {
          input: VV,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: eV,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      Re = function(VV, eV) {
        return {
          ...We(VV, eV, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      ge = ze.map((VV => Re(VV, "Biomass", 2))),
      De = {
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
          recipes: [We("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), We("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), We("Raw Gold", "Gold Grit", 2), We("Messy Stone", "Sand"), We("Gravel", "Sand"), We("Raw Voltite", "Voltite Dust", 2), We("Moonstone", "Moonstone Dust", 4), We("Wheat Seeds", "Fertiliser"), We("Raw Uranium", "Uranium Grit", 2), Re("Mossy Messy Stone", "Sand"), ...ge],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [We("Iron Grit", "Iron Bar"), We("Copper Grit", "Copper Bar"), We("Gold Grit", "Gold Bar"), We("Raw Iron", "Iron Bar"), We("Raw Copper", "Copper Bar"), We("Raw Gold", "Gold Bar"), We("Sand", "Glass"), We("Messy Stone", "Stone"), ...DV.Uc.map((VV => We(VV, "Charcoal", 1, 4))), We("Wheat", "Bread", 1, 2), ...ze.map(((VV, eV) => Re(VV, Ge[eV])))],
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
          recipes: [We("Iron Bar", "Iron Plate"), We("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [We("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [We("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [We("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), We("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), We("Raw Gold", "Gold Grit", 3), We("Raw Voltite", "Voltite Dust", 3), We("Messy Stone", "Sand", 2), We("Gravel", "Sand", 2), We("Moonstone", "Moonstone Dust", 6), We("Raw Uranium", "Uranium Grit", 3), Re("Mossy Messy Stone", "Sand", 2), ...ge],
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
          table: Fe
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [We("Coal", "Diamond", 1, 24), We("Voltite Dust", "Moonstone", 1, 12)],
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
        ...dV.i
      },
      ie = {
        Crusher: [We("Spent Pellet", "Glow Dust"), We("Wheat Seeds", "Biomass"), We("Wheat", "Biomass"), We("Dead Bush", "Biomass"), We("Dusk Moss", "Biomass"), We("Rotten Flesh", "Biomass"), We("Bone", "Biomass", 2)],
        "Shatter Mill": [We("Spent Pellet", "Glow Dust"), We("Wheat Seeds", "Biomass"), We("Wheat", "Biomass"), We("Dead Bush", "Biomass"), We("Dusk Moss", "Biomass"), We("Rotten Flesh", "Biomass"), We("Bone", "Biomass", 2), ...DV.Uc.map((VV => We(VV, "Biomass")))],
        Smelter: [We("Biomass", "Fertiliser", 2)],
        Press: [We("Coal", "Graphite", 1, 4)]
      },
      Ce = "Power Coupler",
      ae = "Advanced Coupler",
      oe = "Nova Coupler",
      ce = [{
        item: Ce,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: ae,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: oe,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const he = new Map;

    function le(VV) {
      var eV, xV;
      return null !== (eV = null !== (xV = VV.fuelSlot) && void 0 !== xV ? xV : VV.couplerSlot) && void 0 !== eV ? eV : null
    }

    function Le(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!VV.couplable) throw new Error(`${VV.kind} takes no Power Coupler`);
      let xV = he.get(VV);
      xV || (xV = [], he.set(VV, xV));
      let JV = xV[eV];
      if (!JV) {
        var YV;
        const {
          divisor: UV,
          powerPerS: yV
        } = ce[eV - 1], pV = VV.opMs / UV, QV = void 0 !== VV.fluidMade || void 0 !== VV.cryoMade ? VV.powerPerOp : yV * pV / 1e3;
        JV = {
          ...VV,
          fuelSlot: null,
          couplerSlot: null !== (YV = le(VV)) && void 0 !== YV ? YV : void 0,
          opMs: pV,
          powerPerOp: QV,
          coupled: !0
        }, eV > 1 && (JV = {
          ...JV,
          couplerLevel: eV
        }), xV[eV] = JV
      }
      return JV
    }
    const fe = new Map;
    const me = new Map;

    function Ke(VV, eV) {
      if (null === eV || (xV = eV, !Ae.includes(xV))) return VV;
      var xV;
      let JV = me.get(eV);
      return JV || (JV = {
        ...VV,
        recipes: [Ne(eV)]
      }, me.set(eV, JV)), JV
    }

    function He(VV) {
      return !0 === VV.synth
    }
    const ue = (VV, eV, xV, JV) => ({
        output: VV,
        outputAmount: eV,
        tier: xV,
        inputs: JV.map((VV => {
          let [eV, xV] = VV;
          return {
            item: eV,
            amount: xV
          }
        }))
      }),
      se = Object.fromEntries([ue("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), ue("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), ue("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), ue("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), ue("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), ue("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), ue("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), ue("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), ue("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), ue("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), ue("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), ue("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), ue("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), ue("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), ue("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), ue("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), ue("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), ue("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), ue("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), ue("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), ue("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), ue("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), ue("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), ue("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), ue("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), ue("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), ue("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), ue("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), ue("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), ue("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((VV => [VV.output, VV]))),
      Se = new Map;

    function Ie(VV, eV) {
      let xV = De[VV];
      if (eV.atomic && (xV = function(VV) {
          const eV = ie[VV.kind];
          if (!eV) return VV;
          let xV = fe.get(VV.kind);
          if (!xV) {
            const JV = new Set(eV.map((VV => VV.input))),
              YV = VV.recipes.filter((VV => !JV.has(VV.input)));
            xV = {
              ...VV,
              recipes: [...YV, ...eV]
            }, fe.set(VV.kind, xV)
          }
          return xV
        }(xV)), xV.synth) return Ke(xV, eV.taught);
      if (eV.coupled && xV.couplable) return Le(xV, eV.level);
      const JV = xV.inputSlots && null !== eV.taught ? se[eV.taught] : void 0;
      if (!JV) return xV;
      const YV = `${VV}|${JV.output}`;
      let UV = Se.get(YV);
      return UV || (UV = {
        ...xV,
        bench: JV
      }, Se.set(YV, UV)), UV
    }
    const de = ["Diamond", "Moonstone"];

    function Oe(VV) {
      return new Set(VV.flatMap((VV => VV.bonus ? [VV.output, VV.bonus.item] : [VV.output])).filter((VV => !de.includes(VV))))
    }
    const Vx = Object.values(De).flatMap((VV => VV.recipes));
    Oe(Vx.filter((VV => !0 !== VV.nuclear))), Oe([...Vx.filter((VV => !0 === VV.nuclear)), ...Object.values(ie).flat()]);

    function ex(VV) {
      return null === VV.inputSlot && void 0 === VV.inputSlots && void 0 === VV.powerMade && void 0 === VV.fluidMade && !VV.treeCutter && void 0 === VV.table
    }

    function xx(VV) {
      return !0 === VV.treeCutter
    }
    const Jx = ["Voltite Cell"];

    function Yx(VV) {
      var eV, xV;
      return null !== (eV = null === (xV = VV.fuels) || void 0 === xV ? void 0 : xV.some((VV => Jx.includes(VV)))) && void 0 !== eV && eV
    }
    const Ux = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(DV.Uc.map((VV => [VV, 8e3]))),
        ...Object.fromEntries(DV.sd.map((VV => [VV, 2e3]))),
        "Voltite Cell": 12e4
      },
      yx = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      px = {
        "Uranium Deposit": 4e3
      };

    function Qx(VV) {
      var eV;
      return null !== (eV = Object.keys(yx).find((eV => yx[eV] === VV))) && void 0 !== eV ? eV : null
    }

    function nx(VV) {
      return Me.includes(VV)
    }

    function wx(VV) {
      return !0 !== VV.nuclear || pV()
    }
    var Zx = xV(364);
    var vx = xV(9902),
      rx = xV(9831),
      kx = xV(9906),
      bx = xV(9895);
    const Ex = "Reactor Controller",
      Bx = "Reactor Port",
      jx = "Battery Cell",
      qx = ["fuel", "water", "waste"],
      tx = {
        fuel: Bx,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      Fx = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      Tx = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      Px = "Reactor Frame",
      Ax = "Reactor Glass",
      Nx = {
        edge: [Px],
        cap: [Ax, Bx],
        wall: [Ax, Bx],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [Ex]
      },
      Xx = {
        edge: [jx],
        cap: [jx],
        wall: [jx],
        inside: [jx],
        ctrl: [jx]
      },
      Mx = ["edge", "cap", "wall", "inside"],
      zx = ["Reactor Slag"];

    function Gx(VV) {
      return zx.includes(Wx(VV))
    }

    function Wx(VV) {
      const eV = VV.indexOf("|");
      return eV < 0 ? VV : VV.slice(0, eV)
    }

    function Rx(VV) {
      return Wx(VV) === Ex ? "reactor" : null
    }

    function gx(VV) {
      return Wx(VV) !== Bx ? null : VV.endsWith("|Water") ? "water" : VV.endsWith("|Waste") ? "waste" : "fuel"
    }

    function Dx(VV) {
      const eV = gx(VV);
      return null === eV ? null : ax(tx[qx[(qx.indexOf(eV) + 1) % qx.length]], function(VV) {
        return VV.includes(ix)
      }(VV))
    }
    const ix = "|meta|rot1|Formed",
      Cx = new Set([Px, Ax, Bx]);

    function ax(VV, eV) {
      var xV;
      const JV = Wx(VV);
      if (!Cx.has(JV)) return VV;
      if (JV !== Bx) return eV ? JV + ix : JV;
      const YV = null !== (xV = gx(VV)) && void 0 !== xV ? xV : "fuel";
      return eV ? "fuel" === YV ? JV + ix : `${JV}${ix}|${"water"===YV?"Water":"Waste"}` : tx[YV]
    }

    function ox(VV, eV) {
      const xV = JJ(VV, eV);
      if ("Air" === xV) return !1;
      const JV = "reactor" === VV ? Nx : Xx;
      return Mx.some((VV => JV[VV].includes(xV))) || "reactor" === VV && zx.includes(xV)
    }

    function cx(VV) {
      return Tx[VV]
    }

    function hx(VV) {
      var eV;
      return null !== (eV = Fx[VV]) && void 0 !== eV ? eV : Fx[1]
    }

    function lx(VV) {
      const [eV, , xV] = hx(VV);
      return [xV, 0, -eV]
    }

    function Lx(VV, eV, xV, JV, YV, UV) {
      return {
        ctrl: [VV[0], VV[1], VV[2]],
        rot: Fx[eV] ? eV : 1,
        w: xV,
        h: JV,
        d: YV,
        cu: UV[0],
        cv: UV[1]
      }
    }

    function fx(VV, eV) {
      return "reactor" === VV ? [Math.floor((eV - 1) / 2), 0] : [0, 0]
    }

    function mx(VV, eV, xV, JV, YV) {
      let UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : VV.rot;
      if (xV === VV.w && JV === VV.h && YV === VV.d && UV === VV.rot) return VV;
      const [yV] = fx(eV, VV.w);
      if (VV.cu === yV && VV.cv <= 1) return Lx(VV.ctrl, UV, xV, JV, YV, fx(eV, xV));
      const pV = (VV, eV) => Math.max(1, Math.min(eV, VV));
      return Lx(VV.ctrl, UV, xV, JV, YV, [pV(VV.cu, xV - 2), 0 === VV.cv ? 0 : pV(VV.cv, JV - 2)])
    }
    const Kx = 11,
      Hx = 2 * Kx + 1;
    new Uint8Array(Hx * Hx * Hx);

    function ux(VV) {
      return VV.w * VV.h * VV.d
    }

    function sx(VV) {
      const eV = lx(VV.rot);
      return [VV.ctrl[0] - eV[0] * VV.cu, VV.ctrl[1] - VV.cv, VV.ctrl[2] - eV[2] * VV.cu]
    }

    function Sx(VV) {
      return VV.cv * VV.d * VV.w + VV.cu
    }

    function Ix(VV, eV) {
      const xV = eV % VV.w,
        JV = Math.floor(eV / VV.w) % VV.d;
      return [xV, Math.floor(eV / (VV.w * VV.d)), JV]
    }

    function dx(VV, eV) {
      const [xV, JV, YV] = Ix(VV, eV), UV = sx(VV), yV = hx(VV.rot), pV = lx(VV.rot);
      return [UV[0] + pV[0] * xV - yV[0] * YV, UV[1] + JV, UV[2] + pV[2] * xV - yV[2] * YV]
    }

    function Ox(VV, eV) {
      const xV = sx(VV),
        JV = hx(VV.rot),
        YV = lx(VV.rot),
        UV = eV[0] - xV[0],
        yV = eV[2] - xV[2],
        pV = UV * YV[0] + yV * YV[2],
        QV = -(UV * JV[0] + yV * JV[2]),
        nV = eV[1] - xV[1];
      return pV < 0 || pV >= VV.w || nV < 0 || nV >= VV.h || QV < 0 || QV >= VV.d ? -1 : (nV * VV.d + QV) * VV.w + pV
    }

    function VJ(VV, eV) {
      if (eV === Sx(VV)) return "ctrl";
      const [xV, JV, YV] = Ix(VV, eV), UV = 0 === JV || JV === VV.h - 1, yV = Number(0 === xV || xV === VV.w - 1) + Number(UV) + Number(0 === YV || YV === VV.d - 1);
      return yV >= 2 ? "edge" : 1 === yV ? UV ? "cap" : "wall" : "inside"
    }

    function eJ(VV, eV) {
      const [xV, JV, YV] = Ix(VV, eV);
      return 0 === xV || xV === VV.w - 1 || 0 === JV || JV === VV.h - 1 || 0 === YV || YV === VV.d - 1 ? -1 : ((JV - 1) * (VV.d - 2) + (YV - 1)) * (VV.w - 2) + (xV - 1)
    }

    function xJ(VV, eV) {
      const xV = VV.w - 2,
        JV = VV.d - 2,
        YV = eV % xV + 1,
        UV = Math.floor(eV / xV) % JV + 1;
      return ((Math.floor(eV / (xV * JV)) + 1) * VV.d + UV) * VV.w + YV
    }

    function JJ(VV, eV) {
      const xV = Wx(eV);
      return "reactor" === VV && xV === Ex ? Px : xV
    }

    function YJ(VV, eV, xV) {
      const JV = "ctrl" === eV ? Wx(xV) : JJ(VV, xV);
      return ("reactor" === VV ? Nx : Xx)[eV].includes(JV) ? "ok" : "Air" === JV ? "missing" : ox(VV, xV) ? "wrong" : "blocked"
    }

    function UJ(VV, eV) {
      return "battery" === VV ? jx : "inside" === eV ? null : function(VV, eV) {
        if ("inside" === eV || "ctrl" === eV || "battery" === VV) return null;
        return "edge" === eV ? Px : Ax
      }(VV, eV)
    }
    const yJ = {
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
      pJ = "Collider",
      QJ = "Laser",
      nJ = "Star Alloy",
      wJ = "Glow Dust",
      ZJ = [pJ, "_Collider Focus"];

    function vJ(VV) {
      return ZJ.indexOf(Wx(VV))
    }

    function rJ(VV) {
      return Wx(VV) === QJ
    }

    function kJ(VV) {
      return [
        [VV[0], VV[1], VV[2]],
        [VV[0], VV[1] + 1, VV[2]]
      ]
    }
    const bJ = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function EJ(VV, eV, xV) {
      const JV = bJ[eV];
      return [VV[0] + JV[0] * xV, VV[1], VV[2] + JV[2] * xV]
    }

    function BJ(VV, eV) {
      if (eV[1] !== VV[1]) return null;
      const xV = eV[0] - VV[0],
        JV = eV[2] - VV[2];
      if (0 !== xV === (0 !== JV)) return null;
      const YV = Math.abs(xV + JV);
      if (YV > yJ.LASER_D) return null;
      return {
        dir: JV < 0 ? 0 : xV > 0 ? 1 : JV > 0 ? 2 : 3,
        Dn: YV
      }
    }

    function jJ(VV, eV, xV) {
      const JV = eV => Math.abs(VV[0] - eV[0]) <= 1 && Math.abs(VV[1] - eV[1]) <= 1;
      return JV(eV) || JV(xV)
    }

    function qJ(VV, eV) {
      return function(VV, eV, xV, JV) {
        return [0, 1, 2, 3].map((YV => {
          for (let UV = 1; UV <= yJ.LASER_D; UV++) {
            const yV = EJ(VV, YV, UV);
            if (jJ([yV[0], yV[2]], eV, xV) || !JV(yV)) return !1
          }
          return !0
        }))
      }(kJ(VV)[1], eV.spawnXZ, eV.coreXZ, (VV => VV[1] >= vx.p && VV[1] < vx.p + vx.t && VV[0] >= eV.minXZ[0] && VV[0] <= eV.maxXZ[0] && VV[2] >= eV.minXZ[1] && VV[2] <= eV.maxXZ[1]))
    }
    const tJ = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function FJ(VV) {
      return Math.max(48 + 16 * VV, BV(VV).machineAllowance)
    }
    const TJ = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function PJ(VV) {
      const eV = VV.split("|")[0];
      return TJ.includes(eV) ? "Solar Panel" : eV === kx.e ? "Fluid Pipe" : vJ(eV) >= 0 ? "Collider" : (xV = eV, tJ.includes(xV) ? eV : null);
      var xV
    }
    const AJ = "buildAFactory2Game:solarPanelDescription";
    const NJ = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function XJ(VV, eV) {
      var xV;
      return null !== (xV = NJ.find((xV => {
        var JV;
        return (null !== (JV = VV.level(xV)) && void 0 !== JV ? JV : 0) >= eV
      }))) && void 0 !== xV ? xV : null
    }
    const MJ = "buildAFactory2Game:";
    let zJ = null;
    const GJ = {
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
      WJ = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      RJ = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      gJ = {
        "Loot Chest": `${MJ}lookRuinChestName`
      };

    function DJ(VV, eV) {
      var xV, JV, YV;
      let UV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eV;
      if ("Solar Panel" === PJ(eV)) return {
        name: (0, DV.Ee)(VV.displayName("Solar Panel")),
        detail: AJ,
        detailItem: null
      };
      const yV = eV.endsWith(" Ore"),
        QV = (zJ ??= new Set([...Object.keys((0, rx.h)()), ...Object.keys((0, kx.r)())].map((VV => VV.split("|")[0]))), zJ).has(eV),
        nV = yV || QV ? null : function(VV) {
          var eV;
          return VV.endsWith(" Log") && !VV.startsWith("Barkless ") ? "lookLog" : VV.endsWith(" Sapling") ? "lookSapling" : VV.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (eV = GJ[VV]) && void 0 !== eV ? eV : null
        }(eV);
      if (!VV.isBlock(eV) || !yV && !QV && null === nV) return null;
      const wV = null !== (xV = gJ[eV]) && void 0 !== xV ? xV : (0, DV.Sb)(eV, null !== (JV = VV.displayName(UV)) && void 0 !== JV ? JV : VV.displayName(eV));
      if (null !== nV) return {
        name: wV,
        detail: `${MJ}${nV}`,
        detailItem: null
      };
      const ZV = null !== (YV = WJ[eV]) && void 0 !== YV ? YV : pV() ? RJ[eV] : void 0;
      if (QV && void 0 !== ZV) return {
        name: wV,
        detail: `${MJ}${ZV}`,
        detailItem: null
      };
      const vV = yx[eV];
      if (void 0 !== vV) return {
        name: wV,
        detail: `${MJ}lookDeposit`,
        detailItem: (0, DV.Sb)(vV, VV.displayName(vV))
      };
      const rV = VV.harvestLevel(eV);
      if (yV && "rock" === VV.harvestType(eV) && 0 !== rV) {
        const eV = XJ(VV, null !== rV && void 0 !== rV ? rV : 0);
        if (eV === NJ[0]) return {
          name: wV,
          detail: `${MJ}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== eV) return {
          name: wV,
          detail: `${MJ}lookPickaxe`,
          detailItem: (0, DV.Sb)(eV, VV.displayName(eV))
        }
      }
      return {
        name: wV,
        detail: (0, DV.Ee)(VV.description(eV)),
        detailItem: null
      }
    }

    function iJ(VV) {
      return VV < vx.p - 24
    }
    const CJ = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const aJ = "Wrench",
      oJ = "Nova Wrench";

    function cJ(VV) {
      return VV === aJ || VV === oJ
    }
    const hJ = [...vx.I, "Belt Lift", "Belt Drop"];
    const lJ = ["Belt Lift", "Belt Drop"],
      LJ = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function fJ(VV) {
      return VV.split("|")[0]
    }

    function mJ(VV) {
      const eV = /\|rot(\d)/.exec(VV);
      return eV ? Number(eV[1]) : 1
    }

    function KJ(VV) {
      return VV % 4 + 1
    }

    function HJ(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === eV && "" === xV ? VV : `${VV}|meta|rot${eV}${xV}`
    }

    function uJ(VV) {
      return fJ(VV) === vx.y ? (0, vx.N)(VV) ? "gateRight" : "gateLeft" : (0, vx.U)(VV)
    }

    function sJ(VV) {
      const eV = fJ(VV),
        xV = mJ(VV);
      if (vx.I.includes(eV)) return (0, vx.K)(eV, KJ(xV), null);
      if (eV === vx.i) return (0, vx.Y)(KJ(xV), (0, vx.R)(VV));
      if (eV === vx.C) {
        const JV = LJ[(0, vx.U)(VV)];
        return null === JV ? HJ(eV, KJ(xV)) : HJ(eV, xV, vx.G[JV])
      }
      return eV === vx.y ? (0, vx.N)(VV) ? HJ(eV, KJ(xV)) : HJ(eV, xV, vx.m) : bx.b.includes(eV) && !lJ.includes(eV) || nx(eV) ? HJ(eV, KJ(xV)) : null
    }

    function SJ(VV) {
      return bx.b.includes(VV) || nx(VV) || null !== PJ(VV)
    }

    function IJ(VV) {
      return "Solar Panel" === PJ(VV)
    }
    const dJ = "buildAFactory2Game:",
      OJ = {
        leftFront: `${dJ}lookSplitDetail_leftFront`,
        frontRight: `${dJ}lookSplitDetail_frontRight`,
        gateRight: `${dJ}lookGateDetail_gateRight`
      };

    function VY(VV, eV) {
      var xV;
      let JV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const YV = uJ(VV),
        UV = null === YV ? null : `${dJ}${YV.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${YV}`,
        yV = null === YV ? null : null !== (xV = OJ[YV]) && void 0 !== xV ? xV : null;
      if (cJ(eV) && JV) {
        const xV = fJ(VV);
        return eV === oJ && pV() && function(VV) {
          return hJ.includes(fJ(VV))
        }(VV) ? {
          mode: UV,
          detail: yV,
          next: `${dJ}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: UV,
          detail: yV,
          next: SJ(xV) && !IJ(xV) ? `${dJ}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const QV = cJ(eV) ? sJ(VV) : null;
      if (null === QV) return {
        mode: UV,
        detail: yV,
        next: null,
        nextState: null
      };
      const nV = uJ(QV);
      return null === nV || mJ(QV) !== mJ(VV) ? {
        mode: UV,
        detail: yV,
        next: `${dJ}lookWrenchTurn`,
        nextState: null
      } : {
        mode: UV,
        detail: yV,
        next: `${dJ}lookWrenchNext`,
        nextState: `${dJ}lookWrenchState_${nV}`
      }
    }
    const eY = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
    const xY = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function JY(VV) {
      return [0, 1, 2, 3].map((eV => 0 !== (VV & 1 << eV)))
    }

    function YY(VV) {
      const eV = [];
      for (let xV = 8; xV + 2 < VV.length; xV += 3) eV.push([VV[xV], VV[xV + 1], VV[xV + 2]]);
      return {
        focus: [VV[0], VV[1], VV[2]],
        lasers: JY(VV[3]),
        open: JY(VV[4]),
        live: JY(VV[5]),
        on: 1 === VV[6],
        state: xY[VV[7]],
        blockers: eV
      }
    }
    const UY = "Arc Caster",
      yY = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      pY = (Object.values(yY), "Jet Chestplate"),
      QY = "Nova Jet Chestplate",
      nY = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      wY = Object.values(nY);

    function ZY(VV, eV, xV) {
      return Math.min(function(VV) {
        return pV() && ZV(VV) >= 5 ? 20 : 10
      }(xV), Math.floor(function(VV, eV) {
        return Math.max(0, VV) + (pV() ? Math.max(0, eV) : 0)
      }(VV, eV) / 5))
    }

    function vY(VV, eV, xV) {
      const JV = ZY(eV, xV, VV),
        YV = ZV(VV),
        UV = (YV >= 3 ? 55 : YV >= 1 ? 50 : VV >= 8 ? 45 : 30) + JV,
        yV = Math.max(100 + JV, 2 * UV);
      return {
        arcDamage: UV,
        arcPierce: VV >= 7 ? 2 : 1,
        arcChain: VV >= 10,
        barrierMax: (YV >= 4 ? 100 : YV >= 2 ? 90 : VV >= 9 ? 80 : VV >= 6 ? 60 : 40) + 5 * JV,
        barrierRegenPerS: YV >= 5 ? 20 : VV >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * JV,
        novaShieldRegenPerS: 32,
        bladeDamage: yV,
        bladePunch: Math.round(.5 * yV),
        forgeRank: JV
      }
    }
    const rY = {
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
    var kY = xV(38021),
      bY = xV(37771),
      EY = xV(37762),
      BY = xV(27),
      jY = xV(1725),
      qY = xV(1146),
      tY = xV.n(qY);

    function FY(VV) {
      return !0 === VV.field
    }
    const TY = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function PY(VV) {
      return TY.has(VV) ? `buildAFactory2Game:itemPlural_${(0,DV.ue)(VV)}` : null
    }
    var AY = xV(1220),
      NY = xV(1414),
      XY = xV(2039),
      MY = xV(2021),
      zY = xV(1480),
      GY = xV(38017),
      WY = xV(32),
      RY = xV(38012);
    const gY = "baf2QuestView",
      DY = "baf2PlayerY",
      iY = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class CY {
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
        this.requestBook = VV, this.view = {
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
      set(VV, eV) {
        var xV, JV, YV, UV, yV, pV, QV, nV;
        const wV = JSON.stringify(VV.baf2QuestName) === JSON.stringify(this.view.name),
          ZV = new Set(this.view.rows.filter((VV => VV.done)).map((VV => VV.id))),
          vV = new Set(this.view.rows.filter((VV => VV.justFinished)).map((VV => VV.id))),
          rV = VV.baf2QuestSide,
          kV = null !== rV && !0 === VV.baf2QuestSideFocus;
        let bV = !1,
          EV = 0;
        const BV = VV.baf2QuestSteps.map((VV => {
            const eV = mY(VV, iY.has(VV[0]) ? VV[0] : "" + EV++),
              xV = wV && eV.done && !ZV.has(eV.id);
            return eV.justFinished = xV || wV && eV.done && vV.has(eV.id), bV ||= xV, eV
          })),
          jV = fY(BV);
        jV >= 0 && !kV && (BV[jV].current = !0);
        const qV = !wV && null !== VV.baf2QuestName,
          tV = JSON.stringify(rV && [rV[0], rV[1]]),
          FV = tV === JSON.stringify(null !== (xV = null === (JV = this.view.side) || void 0 === JV ? void 0 : JV.name) && void 0 !== xV ? xV : null),
          TV = null !== rV && !this.sidesSeen.has(tV);
        TV && this.sidesSeen.add(tV), this.serverTutorial = null !== (YV = VV.baf2QuestTutorial) && void 0 !== YV ? YV : "on", (null !== (UV = VV.baf2QuestTutorialSeq) && void 0 !== UV ? UV : 0) >= this.pickSeq && this.endPick();
        const PV = !wV || !FV || VV.baf2QuestTier !== this.view.tier;
        this.view = {
          name: VV.baf2QuestName,
          rows: BV,
          reward: VV.baf2QuestReward,
          goal: VV.baf2QuestGoal,
          pulse: this.view.pulse + (bV || qV ? 1 : 0),
          itemNames: eV,
          side: rV && {
            name: [rV[0], rV[1]],
            row: {
              ...mY(rV[2], "side"),
              current: kV
            },
            goal: null !== (yV = rV[3]) && void 0 !== yV ? yV : null
          },
          sideCameUpAt: TV ? Date.now() : this.view.sideCameUpAt,
          tier: VV.baf2QuestTier,
          core: VV.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (pV = VV.baf2QuestAlso) && void 0 !== pV ? pV : [],
          depth: null !== (QV = VV.baf2QuestDepth) && void 0 !== QV ? QV : null,
          tutorial: null !== (nV = this.pickedTutorial) && void 0 !== nV ? nV : this.serverTutorial,
          tutorialKnown: !0
        }, this.QZ(), bV && this.scheduleClear(), PV && this.requestBook()
      }
      setTutorial(VV) {
        return this.endPick(), this.pickedTutorial = VV, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.QZ()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: VV
        }, this.QZ(), this.pickSeq
      }
      onPlayerY(VV) {
        const eV = Math.floor(VV);
        eV !== this.playerY && (this.playerY = eV, this.view.depth && WY.h.QZ(DY, eV))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(VV) {
        this.view = {
          ...this.view,
          chapters: VV.baf2BookChapters
        }, this.QZ()
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
            rows: this.view.rows.map((VV => VV.justFinished ? {
              ...VV,
              justFinished: !1
            } : VV))
          }, this.QZ()
        }), 2400)
      }
      QZ() {
        WY.h.QZ(gY, this.view, !0)
      }
    }

    function aY(VV, eV) {
      return VV.sideCameUpAt > 0 && eV - VV.sideCameUpAt < 2400
    }

    function oY(VV) {
      return (null === VV.name || cY(VV)) && null === VV.side && null !== VV.chapters
    }

    function cY(VV) {
      var eV;
      return "quest_forgeOngoing" === (null === (eV = VV.name) || void 0 === eV ? void 0 : eV[0])
    }

    function hY(VV) {
      return VV.filter((VV => !iY.has(VV.key)))
    }

    function lY(VV) {
      return VV.key.startsWith("stepCraft")
    }

    function LY(VV, eV) {
      const xV = new Set,
        JV = VV.side ? [...VV.rows, VV.side.row] : VV.rows;
      for (const UV of JV)
        if (!UV.done) {
          !UV.item || eV && !lY(UV) || xV.add(UV.item);
          for (const [VV, eV, JV] of null !== (YV = UV.chips) && void 0 !== YV ? YV : []) {
            var YV;
            eV < JV && xV.add(VV)
          }
        } return xV
    }

    function fY(VV) {
      const eV = VV.findIndex((VV => !VV.done && !VV.away));
      return eV >= 0 ? eV : VV.findIndex((VV => !VV.done))
    }

    function mY(VV, eV) {
      let [xV, JV, YV, UV, yV, pV, QV, nV, wV, ZV] = VV;
      return {
        id: eV,
        key: xV,
        params: JV,
        item: YV,
        amount: UV,
        total: yV,
        done: pV,
        chips: null !== QV && void 0 !== QV ? QV : null,
        current: !1,
        away: !0 === nV,
        madeFor: null !== wV && void 0 !== wV ? wV : [],
        also: null !== ZV && void 0 !== ZV ? ZV : [],
        justFinished: !1
      }
    }
    const KY = "baf2QuestItems",
      HY = new Set;
    let uY = new Set,
      sY = null;

    function SY(VV) {
      const eV = gV(VV.tutorial),
        xV = eV ? LY(VV, !0) : HY;
      "inventory" === BY.b.get("openInGameMenuName") ? (sY = null, (0, RY.t)(xV)) : sY = xV;
      const JV = eV ? LY(VV, !1) : HY;
      (0, GY.b)(JV, uY) || (uY = JV, WY.h.QZ(KY, uY))
    }

    function IY() {
      return (0, zY.c)(KY, (() => uY))
    }
    var dY = xV(39645);
    const OY = [{
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

    function VU(VV, eV) {
      return [`Deposit Seed (${VV})`, {
        item: yx[`${VV} Deposit`],
        amount: eV
      }]
    }
    const eU = Object.fromEntries([VU("Coal", 8), VU("Iron", 8), VU("Copper", 8), VU("Gold", 6), VU("Voltite", 4), VU("Uranium", 4)]),
      xU = "Relay Coil",
      JU = new Map;

    function YU(VV) {
      let eV = JU.get(VV);
      if (!eV) {
        const xV = Math.max(1, VV);
        eV = OY.filter((VV => {
          var eV;
          return xV >= VV.fromTier && xV <= (null !== (eV = VV.untilTier) && void 0 !== eV ? eV : 1 / 0)
        })).map((VV => VV.later && xV >= VV.later.tier ? {
          ...VV,
          weight: VV.later.weight
        } : VV)), JU.set(VV, eV)
      }
      return eV
    }

    function UU(VV) {
      return YU(VV).some((VV => {
        let {
          item: eV
        } = VV;
        return eV === xU
      }))
    }

    function yU(VV) {
      return VV.startsWith("Deposit Seed (")
    }

    function pU(VV, eV) {
      const xV = YU(VV);
      return eV ? xV.filter((VV => eV(VV.item))) : xV
    }

    function QU(VV) {
      return VV.reduce(((VV, eV) => VV + eV.weight), 0)
    }

    function nU(VV, eV) {
      const xV = pU(VV, eV),
        JV = QU(xV);
      return xV.map((VV => ({
        find: VV,
        chance: VV.weight / JV
      })))
    }
    const wU = 6e4,
      ZU = new Intl.NumberFormat("en-US");

    function vU(VV, eV) {
      const xV = VV >= 10 ? Math.round(VV) : Math.round(10 * VV) / 10;
      return 0 === xV ? "0" : `${eV}${ZU.format(xV)}`
    }

    function rU(VV) {
      return VV < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? ZU.format(VV) : VV < 1e6 ? `${VV<1e5?Math.floor(VV/100)/10:Math.floor(VV/1e3)}k` : Math.floor(VV / 1e5) / 10 + "M"
    }

    function kU(VV) {
      return VV < 0 ? "\u2212" + -VV : String(VV)
    }

    function bU(VV, eV) {
      const xV = Math.max(1, Math.round(eV));
      if (xV < 60) return VV("buildAFactory2Game:durationSeconds", {
        seconds: String(xV)
      });
      const JV = Math.round(xV / 60);
      if (JV < 60) return VV("buildAFactory2Game:durationMinutes", {
        minutes: String(JV)
      });
      const YV = String(Math.floor(JV / 60));
      return JV % 60 === 0 ? VV("buildAFactory2Game:durationWholeHours", {
        hours: YV
      }) : VV("buildAFactory2Game:durationHours", {
        hours: YV,
        minutes: String(JV % 60)
      })
    }
    var EU = xV(2749);
    const BU = "(max-height: 420px), (max-width: 650px)";

    function jU() {
      return (0, EU.e)(BU)
    }
    var qU = xV(1321);

    function tU(VV, eV) {
      return null !== VV && VV > eV + 1
    }

    function FU(VV) {
      const eV = 100 * VV;
      return String(eV <= 0 || eV >= 1 ? Math.round(eV) : Math.max(.1, Math.round(10 * eV) / 10))
    }

    function TU(VV) {
      let {
        item: eV,
        amount: xV
      } = VV;
      return (0, qU.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, qU.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, qU.jsx)(XY.e, {
            itemName: eV,
            amount: 0
          })
        }), xV > 1 && (0, qU.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", xV]
        })]
      })
    }

    function PU(VV) {
      let {
        label: eV,
        names: xV
      } = VV;
      const [YV, UV] = (0, JV.useState)(!1), yV = xV.join(" / ");
      return (0, qU.jsxs)(qU.Fragment, {
        children: [(0, qU.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: yV,
          "aria-expanded": YV,
          onClick: () => {
            UV(!YV)
          },
          children: eV
        }), YV && (0, qU.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: yV
        })]
      })
    }

    function AU(VV) {
      let {
        tier: eV
      } = VV;
      const {
        t: xV
      } = (0, AY.A)(), {
        key: JV,
        params: YV
      } = rV(eV, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), UV = xV(`buildAFactory2Game:${JV}`, YV);
      return (0, qU.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, qU.jsx)(NY.b, {
          name: "lock"
        }), UV]
      })
    }
    const NU = (0, JV.createContext)(null);

    function XU() {
      const {
        t: VV
      } = (0, AY.A)(), eV = (0, JV.useContext)(NU);
      return (0, JV.useEffect)((() => null === eV || void 0 === eV ? void 0 : eV()), [eV]), (0, qU.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: VV("buildAFactory2Game:recipeForQuest"),
        "aria-label": VV("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function MU(VV) {
      let {
        title: eV,
        count: xV,
        children: YV,
        startOpen: UV = !0
      } = VV;
      const {
        t: yV
      } = (0, AY.A)(), [pV, QV] = (0, JV.useState)((() => UV && !jU())), [nV, wV] = (0, JV.useState)(0), ZV = (0, JV.useCallback)((() => (wV((VV => VV + 1)), () => {
        wV((VV => VV - 1))
      })), []);
      return (0, qU.jsxs)("div", {
        className: tY()("Baf2Recipes", {
          Open: pV
        }),
        children: [(0, qU.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            QV(!pV)
          },
          "aria-expanded": pV,
          children: [yV("buildAFactory2Game:recipesToggle", {
            title: eV,
            count: String(xV)
          }), (0, qU.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: pV ? "\u25be" : "\u25b8"
          })]
        }), pV && (0, qU.jsxs)(NU.Provider, {
          value: ZV,
          children: [(0, qU.jsx)("ul", {
            className: "Baf2RecipeList",
            children: YV
          }), nV > 0 && (0, qU.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, qU.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), yV("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const zU = "buildAFactory2Game:",
      GU = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const WU = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      RU = {
        "Uranium Grit": UV,
        "Raw Uranium": UV
      };

    function gU(VV) {
      var eV;
      return null !== (eV = RU[VV]) && void 0 !== eV ? eV : Math.max(SV(VV), WU[VV] ? SV(WU[VV]) : 1, function(VV) {
        const eV = YV.findIndex((eV => eV.cost.some((eV => eV.item === VV))));
        return eV > UV ? eV : 1
      }(VV))
    }

    function DU(VV, eV) {
      return iU(eV) ? gU(eV) : function(VV) {
        if (GU.has(VV)) return 1;
        const eV = YV.findIndex((eV => eV.newDeposits.some((eV => {
          let {
            block: xV
          } = eV;
          return xV === VV
        }))));
        return eV < 0 ? 1 : eV + 1
      }(VV)
    }

    function iU(VV) {
      return VV in RU || ZV(gU(VV)) > 0
    }

    function CU(VV, eV) {
      return Ie(VV, {
        coupled: !1,
        taught: null,
        atomic: pV() && eV >= 11
      }).recipes
    }

    function aU(VV, eV) {
      const xV = vV(VV, eV, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ZV(VV) > 0);
      return "open" === xV || "locked" === xV
    }

    function oU(VV, eV) {
      return VV.map(((VV, xV) => ({
        value: VV,
        idx: xV,
        tier: eV(VV)
      }))).sort(((VV, eV) => VV.tier - eV.tier || VV.idx - eV.idx)).map((VV => {
        let {
          value: eV
        } = VV;
        return eV
      }))
    }

    function cU(VV, eV, xV) {
      const JV = vV(VV, eV);
      if ("hidden" === JV || "open" === JV) return null;
      if ("teaser" === JV) return {
        tag: {
          translationKey: `${zU}${xV?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${zU}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const YV = rV(VV, {
          tier: xV ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        UV = rV(VV, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${zU}${YV.key}`,
          params: YV.params
        },
        reason: {
          translationKey: `${zU}${UV.key}`,
          params: UV.params
        }
      }
    }

    function hU(VV) {
      return !yU(VV)
    }

    function lU(VV) {
      let {
        seconds: eV
      } = VV;
      const {
        t: xV
      } = (0, AY.A)();
      return (0, qU.jsx)(MU, {
        title: xV("buildAFactory2Game:recipesCuts", {
          seconds: eV
        }),
        count: 1,
        children: (0, qU.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, qU.jsx)(TU, {
            item: "Maple Sapling",
            amount: 1
          }), (0, qU.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, qU.jsx)(TU, {
            item: "Maple Log",
            amount: 1
          }), (0, qU.jsx)("span", {
            className: "Baf2RecipeName",
            children: xV("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function LU(VV) {
      let {
        fertilised: eV
      } = VV;
      const {
        t: xV
      } = (0, AY.A)();
      return (0, qU.jsxs)(MU, {
        title: xV("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, qU.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, qU.jsx)(TU, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, qU.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, qU.jsx)(TU, {
            item: "Wheat",
            amount: 1
          }), (0, qU.jsx)(TU, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, qU.jsx)("span", {
            className: "Baf2RecipeName",
            children: xV("buildAFactory2Game:recipeField")
          })]
        }), (0, qU.jsxs)("li", {
          className: tY()("Baf2Recipe", {
            InUse: eV
          }),
          children: [(0, qU.jsx)(TU, {
            item: "Fertiliser",
            amount: 1
          }), (0, qU.jsx)("span", {
            className: "Baf2RecipeName",
            children: xV("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function fU(VV) {
      let {
        tier: eV,
        seconds: xV
      } = VV;
      const {
        t: JV
      } = (0, AY.A)(), YV = function(VV) {
        return VV >= 5 ? Te : Fe
      }(eV);
      return (0, qU.jsx)(MU, {
        title: JV("buildAFactory2Game:recipesBringsUp", {
          seconds: xV
        }),
        count: YV.length,
        children: YV.map((VV => {
          let {
            item: eV,
            chance: xV
          } = VV;
          return (0, qU.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, qU.jsx)(TU, {
              item: eV,
              amount: 1
            }), (0, qU.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, dY.e)(JV, eV)
            }), (0, qU.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: JV("buildAFactory2Game:recipeChance", {
                percent: FU(xV)
              })
            })]
          }, eV)
        }))
      })
    }

    function mU(VV) {
      let {
        tier: eV,
        seconds: xV,
        noSeeds: JV
      } = VV;
      const {
        t: YV
      } = (0, AY.A)(), UV = IY(), yV = nU(eV, JV ? hU : void 0), pV = JV && nU(eV).length > yV.length, QV = UU(eV);
      return (0, qU.jsxs)(MU, {
        title: YV("buildAFactory2Game:recipesRecycles", {
          seconds: xV
        }),
        count: yV.length,
        children: [yV.map((VV => {
          let {
            find: eV,
            chance: xV
          } = VV;
          return (0, qU.jsxs)("li", {
            className: "Baf2Recipe",
            children: [UV.has(eV.item) && (0, qU.jsx)(XU, {}), (0, qU.jsx)(TU, {
              item: eV.item,
              amount: eV.amount
            }), (0, qU.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, dY.e)(YV, eV.item)
            }), (0, qU.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: YV("buildAFactory2Game:recipeChance", {
                percent: FU(xV)
              })
            })]
          }, eV.item)
        })), pV && (0, qU.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, qU.jsx)("span", {
            className: "Baf2RecipeName",
            children: YV("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), QV && (0, qU.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, qU.jsx)("span", {
            className: "Baf2RecipeName",
            children: YV("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function KU(VV) {
      let {
        tier: eV,
        seconds: xV
      } = VV;
      const {
        t: JV
      } = (0, AY.A)(), YV = Object.entries(eU).filter((VV => {
        let [, {
          item: xV
        }] = VV;
        return aU(gU(xV), eV, iU(xV))
      }));
      return (0, qU.jsx)(MU, {
        title: JV("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: xV
        }),
        count: YV.length,
        children: YV.map((VV => {
          let [eV, {
            item: xV,
            amount: YV
          }] = VV;
          return (0, qU.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, qU.jsx)(TU, {
              item: eV,
              amount: 1
            }), (0, qU.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, qU.jsx)(TU, {
              item: xV,
              amount: YV
            }), (0, qU.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, dY.e)(JV, xV)
            })]
          }, eV)
        }))
      })
    }

    function HU(VV) {
      let {
        tier: eV,
        seconds: xV
      } = VV;
      const {
        t: JV
      } = (0, AY.A)(), YV = IY(), UV = oU(Object.entries(yx).filter((VV => {
        let [xV, JV] = VV;
        return aU(DU(xV, JV), eV, iU(JV))
      })), (VV => {
        let [eV, xV] = VV;
        return DU(eV, xV)
      }));
      return (0, qU.jsx)(MU, {
        title: JV("buildAFactory2Game:recipesDigs", {
          seconds: xV
        }),
        count: UV.length,
        children: UV.map((VV => {
          let [xV, UV] = VV;
          const yV = DU(xV, UV),
            pV = yV > eV ? yV : null,
            QV = px[xV],
            nV = null === pV && YV.has(UV);
          return (0, qU.jsxs)("li", {
            className: tY()("Baf2Recipe", {
              Locked: null !== pV,
              Far: tU(pV, eV)
            }),
            children: [nV && (0, qU.jsx)(XU, {}), (0, qU.jsx)(TU, {
              item: xV,
              amount: 1
            }), (0, qU.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, qU.jsx)(TU, {
              item: UV,
              amount: 1
            }), (0, qU.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, dY.e)(JV, UV)
            }), void 0 !== QV && (0, qU.jsx)("span", {
              className: "Baf2RecipeMore",
              children: JV("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / QV)
              })
            }), null !== pV && (0, qU.jsx)(AU, {
              tier: pV
            })]
          }, xV)
        }))
      })
    }

    function uU(VV) {
      var eV;
      let {
        def: xV,
        seconds: JV
      } = VV;
      const {
        t: YV
      } = (0, AY.A)();
      return (0, qU.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, qU.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (eV = xV.fuels) && void 0 !== eV ? eV : []).map((VV => (0, qU.jsx)(TU, {
            item: VV,
            amount: 1
          }, VV))), (0, qU.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, qU.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, qU.jsx)(NY.b, {
              name: "bolt"
            }), YV("buildAFactory2Game:recipePower", {
              power: IV(xV.powerMade),
              seconds: JV
            })]
          })]
        })
      })
    }

    function sU(VV) {
      let {
        def: eV
      } = VV;
      const {
        t: xV
      } = (0, AY.A)();
      return (0, qU.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, qU.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, qU.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, qU.jsx)(NY.b, {
              name: "bolt"
            }), xV("buildAFactory2Game:recipeMixer", {
              cryo: vU((0, dV.H)(eV, eV.cryoMade), "")
            })]
          })
        })
      })
    }

    function SU(VV) {
      let {
        def: eV
      } = VV;
      const {
        t: xV
      } = (0, AY.A)();
      return (0, qU.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, qU.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, qU.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, qU.jsx)(NY.b, {
              name: "bolt"
            }), xV("buildAFactory2Game:recipeCondenser", {
              power: vU((0, dV.H)(eV, eV.powerPerOp), ""),
              water: vU((0, dV.H)(eV, eV.fluidMade), "")
            })]
          })
        })
      })
    }

    function IU(VV) {
      let {
        kind: eV,
        def: xV,
        input: JV,
        tier: YV,
        noSeeds: UV = !1
      } = VV;
      const yV = String(xV.opMs / 1e3);
      return xx(xV) ? (0, qU.jsx)(lU, {
        seconds: yV
      }) : xV.field ? (0, qU.jsx)(LU, {
        fertilised: null !== JV
      }) : xV.table ? (0, qU.jsx)(fU, {
        tier: YV,
        seconds: yV
      }) : xV.recycles ? (0, qU.jsxs)(qU.Fragment, {
        children: [(0, qU.jsx)(mU, {
          tier: YV,
          seconds: yV,
          noSeeds: UV
        }), (0, qU.jsx)(KU, {
          tier: YV,
          seconds: yV
        })]
      }) : ex(xV) ? (0, qU.jsx)(HU, {
        tier: YV,
        seconds: yV
      }) : void 0 !== xV.fluidMade ? (0, qU.jsx)(SU, {
        def: xV
      }) : void 0 !== xV.cryoMade ? (0, qU.jsx)(sU, {
        def: xV
      }) : void 0 !== xV.powerMade ? (0, qU.jsx)(uU, {
        def: xV,
        seconds: yV
      }) : (0, qU.jsx)(dU, {
        kind: eV,
        input: JV,
        tier: YV,
        seconds: yV
      })
    }

    function dU(VV) {
      let {
        kind: eV,
        input: xV,
        tier: JV,
        seconds: YV
      } = VV;
      const {
        t: UV
      } = (0, AY.A)(), yV = IY(), pV = oU(function(VV) {
        const eV = new Map;
        for (const YV of VV) {
          var xV, JV;
          const VV = [YV.output, YV.outputAmount, YV.inputAmount, null === (xV = YV.bonus) || void 0 === xV ? void 0 : xV.item, null === (JV = YV.bonus) || void 0 === JV ? void 0 : JV.chance].join("|"),
            UV = eV.get(VV);
          UV ? UV.inputs.push(YV.input) : eV.set(VV, {
            inputs: [YV.input],
            inputAmount: YV.inputAmount,
            output: YV.output,
            outputAmount: YV.outputAmount,
            bonus: YV.bonus
          })
        }
        return [...eV.values()]
      }(CU(eV, JV).filter(wx)), (VV => gU(VV.output))).filter((VV => aU(gU(VV.output), JV, iU(VV.output))));
      return (0, qU.jsx)(MU, {
        title: UV("buildAFactory2Game:recipesEach", {
          seconds: YV
        }),
        count: pV.length,
        children: pV.map((VV => {
          const eV = null !== xV && VV.inputs.includes(xV),
            YV = VV.inputs.length > 3 ? [eV ? xV : VV.inputs[0]] : VV.inputs,
            pV = gU(VV.output) > JV ? gU(VV.output) : null,
            QV = null === pV && yV.has(VV.output);
          return (0, qU.jsxs)("li", {
            className: tY()("Baf2Recipe", {
              InUse: eV,
              Locked: null !== pV,
              Far: tU(pV, JV)
            }),
            children: [QV && (0, qU.jsx)(XU, {}), YV.map(((eV, xV) => (0, qU.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [xV > 0 && (0, qU.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, qU.jsx)(TU, {
                item: eV,
                amount: VV.inputAmount
              })]
            }, eV))), YV.length < VV.inputs.length && (0, qU.jsx)(PU, {
              label: UV("buildAFactory2Game:recipeMore", {
                count: String(VV.inputs.length - YV.length)
              }),
              names: VV.inputs.filter((VV => !YV.includes(VV))).map((VV => (0, dY.e)(UV, VV)))
            }), (0, qU.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, qU.jsx)(TU, {
              item: VV.output,
              amount: VV.outputAmount
            }), (0, qU.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, dY.e)(UV, VV.output)
            }), VV.bonus && (0, qU.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [UV("buildAFactory2Game:recipeBonus", {
                percent: FU(VV.bonus.chance)
              }), (0, qU.jsx)(TU, {
                item: VV.bonus.item,
                amount: 1
              })]
            }), null !== pV && (0, qU.jsx)(AU, {
              tier: pV
            })]
          }, `${VV.output}|${VV.inputs[0]}`)
        }))
      })
    }

    function OU(VV) {
      let {
        taught: eV,
        tier: xV
      } = VV;
      const {
        t: JV
      } = (0, AY.A)(), YV = IY(), UV = oU(Object.values(se), (VV => VV.tier)).filter((VV => aU(VV.tier, xV)));
      return (0, qU.jsx)(MU, {
        title: JV("buildAFactory2Game:benchCanMake"),
        count: UV.length,
        startOpen: !1,
        children: UV.map((VV => {
          const UV = VV.tier > xV,
            yV = !UV && YV.has(VV.output);
          return (0, qU.jsxs)("li", {
            className: tY()("Baf2Recipe", {
              InUse: VV.output === eV,
              Locked: UV,
              Far: tU(UV ? VV.tier : null, xV)
            }),
            children: [yV && (0, qU.jsx)(XU, {}), (0, qU.jsx)(TU, {
              item: VV.output,
              amount: VV.outputAmount
            }), (0, qU.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, dY.e)(JV, VV.output)
            }), (0, qU.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), VV.inputs.map((VV => (0, qU.jsx)(TU, {
              item: VV.item,
              amount: VV.amount
            }, VV.item))), UV && (0, qU.jsx)(AU, {
              tier: VV.tier
            })]
          }, VV.output)
        }))
      })
    }
    var Vy, ey, xy, Jy, Yy;
    const Uy = De.Generator,
      yy = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      py = 1e3 * (null !== (Vy = Uy.powerMade) && void 0 !== Vy ? Vy : 0) / Uy.opMs,
      Qy = Math.min(...(null !== (ey = Uy.fuels) && void 0 !== ey ? ey : []).map((VV => Ux[VV]))) / 1e3,
      ny = De["Volt Engine"],
      wy = 1e3 * (null !== (xy = ny.powerMade) && void 0 !== xy ? xy : 0) / ny.opMs,
      Zy = Ux[null !== (Jy = null === (Yy = ny.fuels) || void 0 === Yy ? void 0 : Yy[0]) && void 0 !== Jy ? Jy : ""] / 1e3;

    function vy(VV) {
      let {
        item: eV,
        label: xV,
        value: JV,
        note: YV,
        dim: UV
      } = VV;
      return (0, qU.jsxs)("li", {
        className: tY()("Baf2PowerRow", {
          Dim: UV
        }),
        children: [(0, qU.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, qU.jsx)(XY.e, {
            itemName: eV,
            amount: 0
          })
        }), (0, qU.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, qU.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: xV
          }), YV && (0, qU.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: YV
          })]
        }), (0, qU.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: JV
        })]
      })
    }

    function ry(VV, eV, xV, JV) {
      var YV;
      const UV = void 0 === JV ? De[VV] : function(VV, eV) {
          if (null === eV) return VV;
          let xV = HV.get(eV);
          return xV || (xV = {
            ...VV,
            powerPerOp: KV(VV, eV),
            farmMob: eV
          }, HV.set(eV, xV)), xV
        }(De[VV], JV),
        yV = eV && UV.couplable ? Le(UV, xV) : UV;
      return 1e3 * (null !== (YV = yV.powerPerOp) && void 0 !== YV ? YV : 0) / yV.opMs
    }

    function ky(VV) {
      var eV, xV, JV, YV, UV, yV, pV, QV;
      let {
        message: nV
      } = VV;
      const {
        t: wV
      } = (0, AY.A)(), ZV = (VV, eV) => wV("buildAFactory2Game:powerPerSecond", {
        rate: vU(VV, eV)
      }), [vV, rV] = nV.baf2PowerGenerators, kV = nV.baf2PowerGeneratorFuel, bV = nV.baf2PowerSunPanels, EV = null !== (eV = nV.baf2PowerSunShare) && void 0 !== eV ? eV : 1, BV = nV.baf2PowerVaults, jV = nV.baf2PowerUsers, [qV, tV] = null !== (xV = nV.baf2PowerEngines) && void 0 !== xV ? xV : [0, 0], FV = null !== (JV = nV.baf2PowerEngineCells) && void 0 !== JV ? JV : 0, TV = null !== (YV = nV.baf2PowerPads) && void 0 !== YV ? YV : 0, PV = null !== (UV = nV.baf2PowerCharge) && void 0 !== UV ? UV : 0, [AV, NV] = null !== (yV = nV.baf2PowerReactors) && void 0 !== yV ? yV : [0, 0], [XV, MV] = null !== (pV = nV.baf2PowerBatteries) && void 0 !== pV ? pV : [0, 0];
      let zV = wV("buildAFactory2Game:powerEngineCells", {
        amount: String(FV)
      });
      FV > 0 && tV > 0 && (zV = wV("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(FV),
        time: bU(wV, FV * Zy / tV)
      }));
      let GV = wV("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(kV)
      });
      kV > 0 && rV > 0 && (GV = wV("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(kV),
        time: bU(wV, kV * Qy / rV)
      }));
      const WV = vV + qV + bV + AV;
      return (0, qU.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, qU.jsxs)("section", {
          children: [(0, qU.jsxs)("h3", {
            children: [wV("buildAFactory2Game:powerMaking"), (0, qU.jsx)("span", {
              children: ZV(nV.baf2PowerMadePerS, "+")
            })]
          }), (0, qU.jsxs)("ul", {
            children: [0 === WV && (0, qU.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: wV("buildAFactory2Game:powerNoMakers")
            }), vV > 0 && (0, qU.jsx)(vy, {
              item: "Generator",
              label: `${(0,dY.e)(wV,"Generator")} \xd7${vV}`,
              note: `${wV("buildAFactory2Game:powerRunning",{amount:String(rV)})} \xb7 ${GV}`,
              value: ZV(rV * py, "+"),
              dim: 0 === rV
            }), qV > 0 && (0, qU.jsx)(vy, {
              item: "Volt Engine",
              label: `${(0,dY.e)(wV,"Volt Engine")} \xd7${qV}`,
              note: `${wV("buildAFactory2Game:powerRunning",{amount:String(tV)})} \xb7 ${zV}`,
              value: ZV(tV * wy, "+"),
              dim: 0 === tV
            }), bV > 0 && (0, qU.jsx)(vy, {
              item: "Solar Panel",
              label: `${(0,dY.e)(wV,"Solar Panel")} \xd7${bV}`,
              note: wV(EV < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: ZV(4 * bV * EV, "+")
            }), AV > 0 && (0, qU.jsx)(vy, {
              item: "Reactor Frame",
              label: `${wV("buildAFactory2Game:powerReactors")} \xd7${AV}`,
              note: wV("buildAFactory2Game:powerRunning", {
                amount: String(NV)
              }),
              value: ZV(null !== (QV = nV.baf2PowerReactorPerS) && void 0 !== QV ? QV : 0, "+"),
              dim: 0 === NV
            })]
          })]
        }), (0, qU.jsxs)("section", {
          children: [(0, qU.jsxs)("h3", {
            children: [wV("buildAFactory2Game:powerStorage"), (0, qU.jsx)("span", {
              children: IV(nV.baf2PowerCap)
            })]
          }), (BV > 0 || XV > 0) && (0, qU.jsxs)("ul", {
            children: [BV > 0 && (0, qU.jsx)(vy, {
              item: "Charge Vault",
              label: `${(0,dY.e)(wV,"Charge Vault")} \xd7${BV}`,
              value: `+${IV(8e3*BV)}`
            }), XV > 0 && (0, qU.jsx)(vy, {
              item: "Battery Cell",
              label: `${wV("buildAFactory2Game:powerBatteries")} \xd7${XV}`,
              value: `+${IV(MV)}`
            })]
          })]
        }), (0, qU.jsxs)("section", {
          children: [(0, qU.jsxs)("h3", {
            children: [wV("buildAFactory2Game:powerUsing"), (0, qU.jsx)("span", {
              children: ZV(nV.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, qU.jsxs)("ul", {
            children: [0 === jV.length && 0 === TV && 0 === PV && (0, qU.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: wV("buildAFactory2Game:powerNoUsers")
            }), jV.map((VV => {
              let [eV, xV, JV, YV, UV = 1, yV] = VV, pV = xV ? wV(yy[UV - 1], {
                name: (0, dY.e)(wV, eV)
              }) : (0, dY.e)(wV, eV);
              return void 0 !== yV && (pV = wV("buildAFactory2Game:powerFarmName", {
                name: pV,
                mob: wV(LV(yV))
              })), (0, qU.jsx)(vy, {
                item: eV,
                label: `${pV} \xd7${JV}`,
                note: wV("buildAFactory2Game:powerRunning", {
                  amount: String(YV)
                }),
                value: YV > 0 ? ZV(YV * ry(eV, xV, UV, yV), "\u2212") : wV("buildAFactory2Game:powerIdle"),
                dim: 0 === YV
              }, `${eV}|${xV}|${UV}|${yV}`)
            })), TV > 0 && (0, qU.jsx)(vy, {
              item: "Charging Pad",
              label: `${(0,dY.e)(wV,"Charging Pad")} \xd7${TV}`,
              value: wV("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), PV > 0 && (0, qU.jsx)(vy, {
              item: "Homestead Core",
              label: wV("buildAFactory2Game:powerCharge"),
              value: ZV(PV, "\u2212")
            }), nV.baf2PowerStarved > 0 && (0, qU.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, qU.jsx)(NY.b, {
                name: "triangle-exclamation"
              }), wV("buildAFactory2Game:powerStarved", {
                amount: String(nV.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var by = xV(5011),
      Ey = xV(1551);
    class By {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(VV) {
        this.message = VV;
        for (const eV of this.listeners) eV()
      }
      get() {
        return this.message
      }
      subscribe(VV) {
        return this.listeners.add(VV), () => {
          this.listeners.delete(VV)
        }
      }
    }
    class jy extends By {}

    function qy(VV, eV) {
      const xV = () => {
          const xV = VV.get();
          if (!xV || !eV) return xV;
          const [JV, YV, UV] = xV.baf2PowerAt;
          return JV === eV[0] && YV === eV[1] && UV === eV[2] ? xV : null
        },
        [YV, UV] = (0, JV.useState)(xV);
      return (0, JV.useEffect)((() => (UV(xV()), VV.subscribe((() => {
        UV(xV())
      })))), [VV, ...null !== eV && void 0 !== eV ? eV : []]), YV
    }

    function ty(VV) {
      return {
        stored: VV.baf2PowerStored,
        cap: VV.baf2PowerCap,
        madePerS: VV.baf2PowerMadePerS,
        usedPerS: VV.baf2PowerUsedPerS
      }
    }

    function Fy(VV) {
      let {
        stored: eV,
        cap: xV
      } = VV;
      return (0, qU.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, qU.jsx)("div", {
          style: {
            width: `${Math.min(100,100*eV/Math.max(1,xV))}%`
          }
        })
      })
    }

    function Ty(VV) {
      let {
        figures: eV,
        labelled: xV = !1
      } = VV;
      const {
        t: JV
      } = (0, AY.A)(), YV = eV.madePerS - eV.usedPerS, {
        text: UV,
        draining: yV
      } = function(VV, eV) {
        let {
          stored: xV,
          cap: JV,
          madePerS: YV,
          usedPerS: UV
        } = eV;
        const yV = YV - UV;
        return xV >= JV ? {
          text: VV("buildAFactory2Game:powerFull"),
          draining: !1
        } : yV > .05 ? {
          text: VV("buildAFactory2Game:powerFullIn", {
            time: bU(VV, (JV - xV) / yV)
          }),
          draining: !1
        } : yV < -.05 ? {
          text: VV("buildAFactory2Game:powerEmptyIn", {
            time: bU(VV, xV / -yV)
          }),
          draining: !0
        } : {
          text: VV("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(JV, eV);
      return (0, qU.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, qU.jsx)(Fy, {
          stored: eV.stored,
          cap: eV.cap
        }), (0, qU.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, qU.jsx)("span", {
            children: JV(xV ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: IV(eV.stored),
              cap: IV(eV.cap)
            })
          }), (0, qU.jsxs)("span", {
            className: tY()("Baf2PowerNet", {
              Draining: yV
            }),
            children: [JV("buildAFactory2Game:powerPerSecond", {
              rate: vU(Math.abs(YV), YV < 0 ? "\u2212" : "+")
            }), " \xb7 ", UV]
          })]
        })]
      })
    }

    function Py(VV) {
      let {
        stored: eV,
        cap: xV,
        rates: JV
      } = VV;
      const {
        t: YV
      } = (0, AY.A)();
      return JV ? (0, qU.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, qU.jsx)(Ty, {
          figures: {
            stored: eV,
            cap: xV,
            madePerS: JV[0],
            usedPerS: JV[1]
          },
          labelled: !0
        })
      }) : (0, qU.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, qU.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, qU.jsx)(Fy, {
            stored: eV,
            cap: xV
          }), (0, qU.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, qU.jsx)("span", {
              children: YV("buildAFactory2Game:powerStoredLabelled", {
                stored: IV(eV),
                cap: IV(xV)
              })
            })
          })]
        })
      })
    }

    function Ay(VV) {
      let {
        store: eV,
        close: xV
      } = VV;
      const {
        t: JV
      } = (0, AY.A)(), YV = qy(eV);
      return (0, qU.jsx)(by.e, {
        close: xV,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, qU.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, qU.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, qU.jsxs)("div", {
              children: [(0, qU.jsx)("h2", {
                id: "baf2PowerTitle",
                children: JV("buildAFactory2Game:powerTitle")
              }), (0, qU.jsx)("p", {
                children: JV("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, qU.jsx)(Ey.k, {
              onClick: xV
            })]
          }), YV && (0, qU.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, qU.jsx)(Ty, {
              figures: ty(YV)
            }), (0, qU.jsx)(ky, {
              message: YV
            })]
          })]
        })
      })
    }

    function Ny(VV) {
      var eV;
      let {
        kind: xV,
        def: YV,
        ix: UV,
        power: yV,
        stored: pV,
        cap: QV
      } = VV;
      const {
        t: nV
      } = (0, AY.A)(), wV = qy(yV, UV), [ZV, vV] = (0, JV.useState)(!1);
      return (0, qU.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, qU.jsx)(IU, {
          kind: xV,
          def: YV,
          input: null,
          tier: null !== (eV = null === wV || void 0 === wV ? void 0 : wV.baf2PowerTier) && void 0 !== eV ? eV : 1
        }), (0, qU.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: nV("buildAFactory2Game:powerTitle")
        }), wV && (0, qU.jsx)(Ty, {
          figures: ty(wV)
        }), !wV && (0, qU.jsx)(Py, {
          stored: pV,
          cap: QV,
          rates: null
        }), wV && (0, qU.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            vV(!ZV)
          },
          "aria-expanded": ZV,
          children: nV(ZV ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), wV && ZV && (0, qU.jsx)(ky, {
          message: wV
        })]
      })
    }
    const Xy = 2500,
      My = 17500,
      zy = `${FV} `;
    const Gy = ["plan", "throttle"];

    function Wy(VV) {
      if (VV.startsWith(`${Xe} `)) return VV.slice(0, VV.lastIndexOf(" "));
      const eV = VV.split(" ");
      return eV[0] === we && Gy.includes(eV[4]) ? eV.slice(0, 5).join(" ") : null
    }
    class Ry {
      constructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = VV, this.now = eV, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.uUV = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = eV()
      }
      enqueue(VV) {
        this.queue(VV, this.nextTicket());
        const eV = this.uUV + this.pending.length;
        return this.flush(), eV
      }
      track(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const xV = this.nextTicket();
        if (!eV.urgent) return this.queue(VV, xV), this.flush(), xV;
        const {
          supersedes: JV
        } = eV;
        for (let UV = this.pending.length - 1; UV >= this.urgent; UV--) {
          const eV = this.pending[UV];
          (eV.command === VV || null !== JV && void 0 !== JV && JV(eV.command)) && (this.pending.splice(UV, 1), this.markLeft(eV.tickets))
        }
        const YV = this.pending.findIndex((eV => {
          let {
            command: xV
          } = eV;
          return xV === VV
        }));
        return -1 !== YV ? this.pending[YV].tickets.push(xV) : (this.pending.splice(this.urgent, 0, {
          command: VV,
          tickets: [xV]
        }), this.urgent += 1), this.flush(), xV
      }
      leftAt(VV) {
        const eV = this.leftTimes.get(VV);
        return void 0 !== eV ? eV : this.pending.some((eV => {
          let {
            tickets: xV
          } = eV;
          return xV.includes(VV)
        })) ? null : -1 / 0
      }
      holdReserve() {
        this.reserves += 1;
        let VV = !0;
        return () => {
          VV && (VV = !1, this.reserves -= 1, this.flush())
        }
      }
      isWaitingLast(VV) {
        var eV;
        return (null === (eV = this.pending.at(-1)) || void 0 === eV ? void 0 : eV.command) === VV
      }
      sent() {
        return this.uUV
      }
      clear() {
        for (const {
            tickets: VV
          }
          of this.pending) this.markLeft(VV);
        this.pending.length = 0, this.urgent = 0, null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      nextTicket() {
        return this.lastTicket += 1, this.lastTicket
      }
      markLeft(VV) {
        const eV = this.now();
        for (const xV of VV) this.leftTimes.set(xV, eV);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(VV, eV) {
        const xV = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === xV || void 0 === xV ? void 0 : xV.command) === VV) return void(! function(VV) {
          return VV === TV || VV.startsWith(`${tV} `) || VV.startsWith(`${cV} `)
        }(VV) ? xV.tickets.push(eV) : (this.pending.pop(), this.markLeft([...xV.tickets, eV])));
        const JV = void 0 === xV ? null : ne(xV.command, VV);
        if (null !== JV && void 0 !== xV) return xV.command = JV, void xV.tickets.push(eV);
        const YV = Wy(VV);
        if (null !== YV && void 0 !== xV && Wy(xV.command) === YV) return xV.command = VV, void xV.tickets.push(eV);
        if (null !== xV && void 0 !== xV && xV.command.startsWith(zy) && VV.startsWith(zy)) {
          const JV = VV.slice(zy.length);
          if (xV.command.slice(zy.length).split(",").includes(JV)) return void xV.tickets.push(eV);
          const YV = `${xV.command},${JV}`;
          if (YV.length <= 119) return xV.command = YV, void xV.tickets.push(eV)
        }
        this.pending.push({
          command: VV,
          tickets: [eV]
        })
      }
      flush() {
        const VV = this.now();
        for (this.tokens = Math.min(5, this.tokens + (VV - this.refilledAt) / Xy), this.refilledAt = VV; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.uUV += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: VV,
            tickets: eV
          } = this.pending.shift();
          this.markLeft(eV), this.send(VV)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * Xy)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class gy {
      constructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new Ry(VV, eV)
      }
      send(VV) {
        return this.queue.enqueue(VV)
      }
      sent() {
        return this.queue.sent()
      }
      track(VV, eV) {
        return this.queue.track(VV, eV)
      }
      leftAt(VV) {
        return this.queue.leftAt(VV)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(VV) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = eV, this.send(VV), this.islandEdits.count
      }
      syncIslandEdits(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: xV
        } = this, JV = eV - xV.lastAtMs < My;
        xV.count = JV ? Math.max(xV.count, VV) : VV
      }
      clear() {
        this.queue.clear()
      }
    }
    const Dy = (0, JV.createContext)(null);

    function iy() {
      const VV = (0, JV.useContext)(Dy);
      if (!VV) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return VV
    }

    function Cy(VV, eV) {
      return null !== eV && void 0 !== eV ? eV : 1 === VV
    }

    function ay(VV, eV) {
      return VV.every((VV => {
        var xV;
        let [JV, , YV] = VV;
        return !Cy(YV, null === (xV = eV.get(JV)) || void 0 === xV ? void 0 : xV.ZZ)
      }))
    }

    function oy(VV, eV, xV) {
      if (0 === VV.size) return VV;
      const JV = new Map(VV);
      for (const [YV, UV] of VV) {
        const VV = eV.find((VV => {
          let [eV] = VV;
          return eV === YV
        }));
        (!VV || UV.ZZ === (1 === VV[2]) || UV.atMs < xV) && JV.delete(YV)
      }
      return JV
    }

    function cy(VV) {
      var eV;
      let {
        ix: xV,
        input: YV,
        drops: UV,
        seconds: yV
      } = VV;
      const {
        t: pV
      } = (0, AY.A)(), QV = iy(), [nV, wV] = (0, JV.useState)(new Map);
      (0, JV.useEffect)((() => {
        UV && wV((VV => oy(VV, UV, Date.now() - My)))
      }), [UV]), (0, JV.useEffect)((() => {
        const VV = function(VV, eV) {
          let xV = null;
          for (const {
              atMs: JV
            }
            of VV.values()) xV = null === xV ? JV : Math.min(xV, JV);
          return null === xV ? null : xV + eV
        }(nV, My);
        if (null === VV || !UV) return;
        const eV = setTimeout((() => {
          wV((VV => oy(VV, UV, Date.now() - My)))
        }), Math.max(0, VV - Date.now()) + 1);
        return () => {
          clearTimeout(eV)
        }
      }), [nV, UV]);
      const ZV = fV(YV),
        vV = null !== ZV && null !== UV && ay(UV, nV),
        rV = function(VV, eV, xV) {
          return null === VV || null === eV || ay(eV, xV) ? 0 : oV[CV[VV]]
        }(ZV, UV, nV);
      return (0, qU.jsxs)(MU, {
        title: pV("buildAFactory2Game:farmDropsTitle", {
          seconds: yV
        }),
        count: null !== (eV = null === UV || void 0 === UV ? void 0 : UV.length) && void 0 !== eV ? eV : 0,
        children: [rV > 0 && (0, qU.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: pV("buildAFactory2Game:farmDropsPower", {
            power: String(rV)
          })
        }), (null === ZV || !UV) && (0, qU.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: pV("buildAFactory2Game:farmDropsEmpty")
        }), vV && (0, qU.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: pV("buildAFactory2Game:farmDropsAllVoided")
        }), null !== ZV && (null === UV || void 0 === UV ? void 0 : UV.map((VV => {
          var eV;
          let [JV, YV, UV] = VV;
          const yV = YV < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            ZV = Cy(UV, null === (eV = nV.get(JV)) || void 0 === eV ? void 0 : eV.ZZ);
          return (0, qU.jsxs)("li", {
            className: tY()("Baf2Recipe Baf2FarmDrop", {
              Voided: !ZV
            }),
            children: [(0, qU.jsx)(TU, {
              item: JV,
              amount: 1
            }), (0, qU.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, dY.e)(pV, JV)
            }), (0, qU.jsx)("span", {
              className: "Baf2FarmRate",
              children: pV(yV, {
                amount: String(YV)
              })
            }), (0, qU.jsx)("button", {
              type: "button",
              className: tY()("Baf2FarmToggle SmallTextBold", {
                Kept: ZV
              }),
              "aria-pressed": ZV,
              onClick: () => {
                wV(new Map(nV).set(JV, {
                  ZZ: !ZV,
                  atMs: Date.now()
                })), QV.send(function(VV, eV, xV, JV) {
                  return `${cV} ${VV} ${eV} ${xV} ${JV}`
                }(xV[0], xV[1], xV[2], JV))
              },
              children: pV(ZV ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, JV)
        })))]
      })
    }
    var hy;
    const ly = String(null !== (hy = De.Synthesizer.waterPerOp) && void 0 !== hy ? hy : 0);

    function Ly(VV) {
      let {
        ix: eV,
        taught: xV
      } = VV;
      const {
        t: YV
      } = (0, AY.A)(), UV = iy(), [yV, pV] = (0, JV.useState)(null);
      (0, JV.useEffect)((() => {
        null !== yV && xV === yV && pV(null)
      }), [yV, xV]);
      const QV = null !== yV && void 0 !== yV ? yV : xV;
      let nV = YV("buildAFactory2Game:synthPick");
      return null !== QV && (nV = YV("buildAFactory2Game:synthGrows", {
        name: (0, dY.e)(YV, QV),
        input: (0, dY.e)(YV, Pe),
        water: ly
      })), (0, qU.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, qU.jsx)("div", {
          className: tY()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === QV
          }),
          children: nV
        }), (0, qU.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: Ae.map(((VV, xV) => {
            const JV = (0, dY.e)(YV, VV),
              yV = VV === QV;
            return (0, qU.jsx)("li", {
              children: (0, qU.jsx)("button", {
                type: "button",
                className: tY()("Baf2SynthTile", {
                  Selected: yV
                }),
                title: JV,
                "aria-label": JV,
                "aria-pressed": yV,
                onClick: () => {
                  yV || (pV(VV), UV.send(`${Xe} ${eV[0]} ${eV[1]} ${eV[2]} ${xV}`))
                },
                children: (0, qU.jsx)(XY.e, {
                  itemName: VV,
                  amount: 0
                })
              })
            }, VV)
          }))
        })]
      })
    }
    const fy = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function my(VV) {
      let {
        kind: eV,
        tier: xV,
        coupled: JV,
        level: YV,
        slot: UV
      } = VV;
      const {
        t: yV
      } = (0, AY.A)(), QV = SV(Ce);
      if (!JV && null !== xV && xV < QV) return (0, qU.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, qU.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, qU.jsx)(NY.b, {
            name: "lock"
          })
        }), (0, qU.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: yV("buildAFactory2Game:upgradeLocked")
        }), (0, qU.jsx)("span", {
          className: "Baf2TierTag",
          children: yV("buildAFactory2Game:tierTag", {
            tier: String(QV)
          })
        })]
      });
      const nV = function(VV, eV) {
          if (pV() && "Crusher" !== VV && null !== eV) {
            if (Ky(oe, eV)) return {
              item: oe,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (Ky(ae, eV)) return {
              item: ae,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: Ce,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(eV, xV),
        wV = yV(JV ? fy[YV - 1] : nV.emptyKey),
        ZV = null !== xV ? function(VV, eV, xV, JV) {
          if (!pV() || !xV || "Crusher" === VV || eV < 10) return null;
          const YV = SV(oe);
          if (JV < 3 && YV > 1 && (2 === JV || eV >= YV)) return {
            tier: YV,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const UV = SV(ae);
          if (1 === JV && UV > 1) return {
            tier: UV,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(eV, xV, JV, YV) : null;
      return (0, qU.jsxs)("div", {
        className: tY()("Baf2UpgradeSocket", {
          Fitted: JV
        }),
        children: [(0, qU.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [JV && UV, !JV && (0, qU.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, qU.jsx)(XY.e, {
              itemName: nV.item,
              amount: 0
            })
          })]
        }), (0, qU.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, qU.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: yV("buildAFactory2Game:upgradeTitle")
          }), (0, qU.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: wV
          }), JV && YV >= 2 && "Crusher" === eV && (0, qU.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: yV("buildAFactory2Game:couplerCrusherHint")
          }), ZV && null !== xV && xV < ZV.tier && (0, qU.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, qU.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, qU.jsx)(NY.b, {
                name: "lock"
              })
            }), yV(ZV.lockedKey), (0, qU.jsx)("span", {
              className: "Baf2TierTag",
              children: yV("buildAFactory2Game:tierTag", {
                tier: String(ZV.tier)
              })
            })]
          }), ZV && null !== xV && xV >= ZV.tier && (0, qU.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: yV(ZV.nextKey)
          })]
        })]
      })
    }

    function Ky(VV, eV) {
      const xV = SV(VV);
      return xV > 1 && eV >= xV
    }
    var Hy = xV(38212);
    const uy = (0, dV.H)(De.Condenser, De.Condenser.fluidMade),
      sy = .05;
    class Sy extends By {}

    function Iy(VV) {
      return vU(VV, "")
    }

    function dy(VV, eV, xV) {
      return VV(eV ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: xV
      })
    }

    function Oy(VV, eV, xV, JV) {
      return xV <= sy && JV <= sy ? null : JV <= sy || xV <= sy ? dy(VV, eV, JV <= sy ? vU(xV, "+") : vU(JV, "\u2212")) : VV(eV ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: Iy(xV),
        used: Iy(JV)
      })
    }

    function Vp(VV, eV) {
      return Math.min(100, 100 * VV / Math.max(1, eV))
    }

    function ep(VV) {
      let {
        stored: eV,
        cap: xV,
        netPerS: JV,
        rates: YV,
        cryo: UV
      } = VV;
      const {
        t: yV
      } = (0, AY.A)(), pV = function(VV, eV, xV, JV) {
        return xV <= 0 ? VV("buildAFactory2Game:waterNoStorage") : eV >= xV ? VV("buildAFactory2Game:powerFull") : JV > sy ? VV("buildAFactory2Game:powerFullIn", {
          time: bU(VV, (xV - eV) / JV)
        }) : JV < -.05 ? eV <= 0 ? VV("buildAFactory2Game:waterEmpty") : VV("buildAFactory2Game:powerEmptyIn", {
          time: bU(VV, eV / -JV)
        }) : VV("buildAFactory2Game:powerSteady")
      }(yV, eV, xV, JV), QV = xV > 0 && eV < xV && Math.abs(JV) <= sy, nV = yV(UV ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), wV = null !== YV ? `${YV} \xb7 ${pV}` : QV ? nV : `${nV} \xb7 ${pV}`;
      return (0, qU.jsxs)(qU.Fragment, {
        children: [(0, qU.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, qU.jsx)("div", {
            style: {
              width: `${Vp(eV,xV)}%`
            }
          })
        }), (0, qU.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, qU.jsx)("span", {
            children: xV > 0 && yV("buildAFactory2Game:powerStored", {
              stored: (0, dV.T)(eV),
              cap: (0, dV.T)(xV)
            })
          }), (0, qU.jsx)("span", {
            className: tY()("Baf2WaterNet", {
              Draining: JV < -.05
            }),
            children: wV
          })]
        })]
      })
    }

    function xp(VV) {
      let {
        water: eV,
        at: xV,
        side: JV = null
      } = VV;
      const {
        t: YV
      } = (0, AY.A)(), UV = iy(), [yV, pV, QV] = eV;
      return (0, qU.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, qU.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, qU.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: YV(null === JV ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${JV}`)
          }), (0, qU.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              UV.send(`${dV.A} ${xV[0]} ${xV[1]} ${xV[2]}${"cryoOut"===JV?" cryo":""}`)
            },
            children: YV("buildAFactory2Game:waterDetails")
          })]
        }), (0, qU.jsx)(ep, {
          stored: yV,
          cap: pV,
          netPerS: QV,
          rates: dy(YV, "cryoOut" === JV, vU(Math.abs(QV), QV < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === JV
        })]
      })
    }

    function Jp(VV, eV) {
      var xV, JV, YV;
      const UV = !0 === eV.baf2WaterCryo,
        yV = null !== (xV = null === (JV = eV.baf2WaterMakers.find((VV => VV[0] === (UV ? dV.d : "Condenser")))) || void 0 === JV ? void 0 : JV[1]) && void 0 !== xV ? xV : 0,
        pV = [],
        QV = (eV, xV, JV) => {
          eV > 0 && pV.push(VV(1 === eV ? xV : JV, {
            count: String(eV)
          }))
        };
      return UV ? QV(yV, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : QV(yV, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), QV(null !== (YV = eV.baf2WaterPipes) && void 0 !== YV ? YV : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), QV(eV.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), pV.join(" \xb7 ")
    }

    function Yp(VV, eV) {
      if (!0 === eV.baf2WaterCryo) return function(VV, eV) {
        const xV = De[dV.d];
        switch (eV.baf2WaterThis) {
          case "pipe":
            return {
              text: VV("buildAFactory2Game:cryoThisPipe"), bad: !1
            };
          case "condenserFull":
            return {
              text: VV("buildAFactory2Game:cryoThisMixerFull"), bad: !1
            };
          case "condenserNoPower":
            return {
              text: VV("buildAFactory2Game:cryoThisMixerNoPower"), bad: !0
            };
          case "condenserNoOutlet":
            return {
              text: VV("buildAFactory2Game:cryoThisMixerNoOutlet"), bad: !0
            };
          case "mixerNoInput":
            return {
              text: VV("buildAFactory2Game:cryoThisMixerNoInput"), bad: !0
            };
          case "mixerBadInput":
            return {
              text: VV("buildAFactory2Game:cryoThisMixerBadInput"), bad: !0
            };
          case "mixerNoWater":
            return {
              text: VV("buildAFactory2Game:cryoThisMixerNoWater"), bad: !0
            };
          case "condenser": {
            var JV;
            const [YV, UV] = null !== (JV = eV.baf2WaterThisRates) && void 0 !== JV ? JV : [(0, dV.H)(xV, xV.cryoMade), (0, dV.H)(xV, xV.powerPerOp)];
            return !0 === eV.baf2WaterDriven ? {
              text: VV("buildAFactory2Game:cryoThisMixerDriven", {
                rate: Iy(YV)
              }),
              bad: !1
            } : {
              text: VV("buildAFactory2Game:cryoThisMixer", {
                rate: Iy(YV),
                power: Iy(UV)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: VV("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(VV, eV);
      const xV = !0 === eV.baf2WaterDriven,
        JV = De.Condenser;
      switch (eV.baf2WaterThis) {
        case "pipe":
          return {
            text: VV("buildAFactory2Game:waterThisPipe"), bad: !1
          };
        case "condenserFull":
          return {
            text: VV("buildAFactory2Game:waterThisCondenserFull"), bad: !1
          };
        case "condenserNoPower":
          return {
            text: VV("buildAFactory2Game:waterThisCondenserNoPower"), bad: !0
          };
        case "condenserNoOutlet":
          return {
            text: VV("buildAFactory2Game:waterThisCondenserNoOutlet"), bad: !0
          };
        case "tank":
          return {
            text: VV("buildAFactory2Game:waterThisTank", {
              tank: (0, dV.T)(dV.o),
              cap: (0, dV.T)(eV.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var YV;
          const [UV, yV] = null !== (YV = eV.baf2WaterThisRates) && void 0 !== YV ? YV : [uy, (0, dV.H)(JV, JV.powerPerOp)];
          return xV ? {
            text: VV("buildAFactory2Game:waterThisCondenserDriven", {
              rate: Iy(UV)
            }),
            bad: !1
          } : {
            text: VV("buildAFactory2Game:waterThisCondenser", {
              rate: Iy(UV),
              power: Iy(yV)
            }),
            bad: !1
          }
        }
        default:
          return {
            text: VV("buildAFactory2Game:waterThisUser"), bad: !1
          }
      }
    }

    function Up(VV, eV) {
      const xV = eV.baf2WaterMakers.some((VV => !0 === VV[5]));
      if (!0 === eV.baf2WaterCryo) {
        const JV = eV.baf2WaterUsedPerS - eV.baf2WaterMadePerS,
          YV = xV || JV <= sy ? 0 : (0, dV.D)(JV);
        return 0 === YV ? null : YV > 1 ? VV("buildAFactory2Game:cryoNextMixers", {
          mixers: String(YV)
        }) : VV("buildAFactory2Game:cryoNextOne")
      }
      const JV = xV ? null : function(VV, eV) {
        const xV = eV - VV;
        return xV <= sy ? null : Math.ceil(xV / uy)
      }(eV.baf2WaterMadePerS, eV.baf2WaterUsedPerS);
      return null === JV ? null : JV > 1 ? VV("buildAFactory2Game:waterNextCondensers", {
        condensers: String(JV)
      }) : VV("buildAFactory2Game:waterNextOne")
    }

    function yp(VV) {
      let {
        item: eV,
        label: xV,
        note: JV,
        value: YV,
        dim: UV,
        bad: yV
      } = VV;
      return (0, qU.jsxs)("li", {
        className: tY()("Baf2WaterRow", {
          Dim: UV,
          Bad: yV
        }),
        children: [(0, qU.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, qU.jsx)(XY.e, {
            itemName: eV,
            amount: 0
          })
        }), (0, qU.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, qU.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: xV
          }), JV && (0, qU.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: JV
          })]
        }), (0, qU.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: YV
        })]
      })
    }

    function pp(VV) {
      return Hy.k[VV] ? VV : "Reactor Port"
    }

    function Qp(VV) {
      let {
        message: eV
      } = VV;
      const {
        t: xV
      } = (0, AY.A)(), JV = !0 === eV.baf2WaterCryo, YV = (VV, eV) => dy(xV, JV, vU(VV, eV));
      return (0, qU.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, qU.jsxs)("section", {
          children: [(0, qU.jsxs)("h3", {
            children: [xV("buildAFactory2Game:waterMakes"), (0, qU.jsx)("span", {
              children: YV(eV.baf2WaterMadePerS, "+")
            })]
          }), (0, qU.jsxs)("ul", {
            children: [0 === eV.baf2WaterMakers.length && (0, qU.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: xV(JV ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), eV.baf2WaterMakers.map((VV => {
              let [eV, JV, UV, yV, pV, QV] = VV;
              const nV = xV("buildAFactory2Game:powerRunning", {
                amount: String(UV)
              });
              let wV = pV > 0 ? xV("buildAFactory2Game:waterMakerPower", {
                running: nV,
                power: Iy(pV)
              }) : nV;
              return QV && (wV = xV(0 === UV && yV <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, qU.jsx)(yp, {
                item: eV,
                label: `${(0,dY.e)(xV,eV)} \xd7${JV}`,
                note: wV,
                value: UV > 0 || QV && yV > 0 ? YV(yV, "+") : xV("buildAFactory2Game:powerIdle"),
                dim: 0 === UV && !QV,
                bad: QV
              }, eV)
            }))]
          })]
        }), (0, qU.jsxs)("section", {
          children: [(0, qU.jsxs)("h3", {
            children: [xV("buildAFactory2Game:waterUses"), (0, qU.jsx)("span", {
              children: YV(eV.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, qU.jsxs)("ul", {
            children: [0 === eV.baf2WaterUsers.length && (0, qU.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: xV(JV ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), eV.baf2WaterUsers.map((VV => {
              let [eV, JV, UV, yV] = VV;
              const pV = Hy.k[eV] ? (0, dY.e)(xV, eV) : eV;
              return (0, qU.jsx)(yp, {
                item: pp(eV),
                label: JV > 1 ? `${pV} \xd7${JV}` : pV,
                note: yV ? xV("buildAFactory2Game:waterPortFirst") : void 0,
                value: UV > 0 ? YV(UV, "\u2212") : xV("buildAFactory2Game:powerIdle"),
                dim: 0 === UV
              }, eV)
            }))]
          })]
        })]
      })
    }

    function np(VV) {
      var eV, xV, YV, UV, yV;
      let {
        store: pV,
        close: QV
      } = VV;
      const {
        t: nV
      } = (0, AY.A)(), wV = function(VV) {
        const [eV, xV] = (0, JV.useState)((() => VV.get()));
        return (0, JV.useEffect)((() => (xV(VV.get()), VV.subscribe((() => {
          xV(VV.get())
        })))), [VV]), eV
      }(pV), ZV = null !== (eV = null === wV || void 0 === wV ? void 0 : wV.baf2WaterStored) && void 0 !== eV ? eV : 0, vV = null !== (xV = null === wV || void 0 === wV ? void 0 : wV.baf2WaterCap) && void 0 !== xV ? xV : 0, rV = null !== (YV = null === wV || void 0 === wV ? void 0 : wV.baf2WaterMadePerS) && void 0 !== YV ? YV : 0, kV = null !== (UV = null === wV || void 0 === wV ? void 0 : wV.baf2WaterUsedPerS) && void 0 !== UV ? UV : 0, bV = null !== (yV = null === wV || void 0 === wV ? void 0 : wV.baf2WaterNetPerS) && void 0 !== yV ? yV : rV - kV, EV = wV && Yp(nV, wV), BV = wV && Up(nV, wV), jV = !0 === (null === wV || void 0 === wV ? void 0 : wV.baf2WaterCryo);
      return (0, qU.jsx)(by.e, {
        close: QV,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, qU.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, qU.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, qU.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== wV && vV <= 0 ? (0, qU.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, qU.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, qU.jsx)(XY.e, {
                  itemName: jV ? kx.f : dV.j,
                  amount: 0
                })
              }), (0, qU.jsxs)("div", {
                children: [(0, qU.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: nV(jV ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), wV && (0, qU.jsx)("p", {
                  children: Jp(nV, wV)
                })]
              })]
            }), (0, qU.jsx)(Ey.k, {
              onClick: QV
            })]
          }), wV && EV && (0, qU.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, qU.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, qU.jsx)(ep, {
                stored: ZV,
                cap: vV,
                netPerS: bV,
                cryo: jV,
                rates: Oy(nV, jV, rV, kV)
              })
            }), (0, qU.jsx)("div", {
              className: tY()("Baf2WaterThis", {
                Bad: EV.bad
              }),
              children: EV.text
            }), wV.baf2WaterDriven && (0, qU.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, qU.jsx)(NY.b, {
                name: "bolt"
              }), nV(jV ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), BV && (0, qU.jsx)("p", {
              className: "Baf2WaterNext",
              children: BV
            }), (0, qU.jsx)(Qp, {
              message: wV
            })]
          })]
        })
      })
    }
    class wp {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(VV, eV) {
        const xV = this.get(VV);
        xV && null === eV.opLeftMs && null === eV.fuelLeftMs && eV.status === xV.status ? eV = {
          ...eV,
          opLeftMs: xV.opLeftMs,
          fuelLeftMs: xV.fuelLeftMs,
          burning: xV.burning
        } : this.updates++, this.pos = VV, this.view = eV;
        for (const JV of this.listeners) JV()
      }
      get(VV) {
        return null !== this.pos && this.pos[0] === VV[0] && this.pos[1] === VV[1] && this.pos[2] === VV[2] ? this.view : null
      }
      forget(VV) {
        null !== this.get(VV) && (this.pos = null, this.view = null)
      }
      get updateCount() {
        return this.updates
      }
      subscribe(VV) {
        return this.listeners.add(VV), () => {
          this.listeners.delete(VV)
        }
      }
    }

    function Zp(VV, eV, xV, JV) {
      return "noFuel" === eV && JV && !Yx(De[VV]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === eV && !0 === (null === xV || void 0 === xV ? void 0 : xV.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === eV && !0 === (null === xV || void 0 === xV ? void 0 : xV.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === eV && !0 === (null === xV || void 0 === xV ? void 0 : xV.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === eV && !0 === (null === xV || void 0 === xV ? void 0 : xV.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : vp(eV, xV) ? "buildAFactory2Game:machineStatus_noInputShort" : function(VV, eV) {
        const xV = De[VV];
        if ("noFuel" === eV && void 0 !== xV.fuels) return Yx(xV) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (xV.mobFarm && ("noInput" === eV || "badInput" === eV)) return `buildAFactory2Game:machineStatus_${eV}MobFarm`;
        if ("outputFull" === eV && (void 0 !== xV.table || xV.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === eV && He(xV)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== xV.cryoMade && ("noInput" === eV || "noOutlet" === eV || "fluidFull" === eV)) return `buildAFactory2Game:machineStatus_${eV}Mixer`;
        return `buildAFactory2Game:machineStatus_${eV}`
      }(VV, eV)
    }

    function vp(VV, eV) {
      return "noInput" === VV && null !== eV && void 0 !== eV && eV.input && eV.inputShort ? {
        input: eV.input,
        short: eV.inputShort
      } : null
    }

    function rp(VV) {
      return FY(VV) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== VV.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function kp(VV) {
      const eV = (0, DV.ue)(VV);
      return `Baf2Pane Baf2Pane${eV.charAt(0).toUpperCase()}${eV.slice(1)}`
    }

    function bp(VV, eV) {
      const [xV, YV] = (0, JV.useState)((() => VV.get(eV)));
      return (0, JV.useEffect)((() => {
        YV(VV.get(eV));
        const xV = VV.subscribe((() => {
          YV(VV.get(eV))
        }));
        return () => {
          xV(), VV.forget(eV)
        }
      }), [VV, ...eV]), xV
    }

    function Ep(VV, eV, xV, JV) {
      const YV = De[VV],
        UV = eV && YV.couplable ? Le(YV, xV) : YV,
        yV = null !== JV && ex(UV) ? function(VV, eV) {
          var xV;
          return null !== (xV = null !== eV && ex(VV) ? px[eV] : void 0) && void 0 !== xV ? xV : VV.opMs
        }(UV, Qx(JV)) : UV.opMs;
      return yV === UV.opMs ? UV : {
        ...UV,
        opMs: yV
      }
    }

    function Bp(VV) {
      let {
        running: eV,
        opMs: xV,
        opLeftMs: JV,
        updateCount: YV
      } = VV;
      return (0, qU.jsx)("div", {
        className: tY()("Baf2MachineProgress", {
          Running: eV
        }),
        children: (0, qU.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: xV / 1e3 + "s",
            animationDelay: null === JV ? void 0 : (JV - xV) / 1e3 + "s"
          }
        }, YV)
      })
    }

    function jp(VV) {
      let {
        running: eV,
        leftMs: xV,
        periodMs: JV,
        updateCount: YV
      } = VV;
      const {
        t: UV
      } = (0, AY.A)(), yV = Math.min(Math.max(null !== xV && void 0 !== xV ? xV : 0, 0), JV), pV = eV && yV > 0, QV = UV("buildAFactory2Game:machineBarFuel");
      return (0, qU.jsx)("div", {
        className: tY()("Baf2FuelBurn", {
          Draining: pV
        }),
        role: "img",
        title: QV,
        "aria-label": QV,
        children: (0, qU.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: pV ? {
            animationDuration: JV / 1e3 + "s",
            animationDelay: (yV - JV) / 1e3 + "s"
          } : {
            transform: `scaleY(${yV/JV})`
          }
        }, YV)
      })
    }

    function qp(VV, eV, xV) {
      let [JV, YV] = xV;
      const UV = 1 !== JV ? PY(eV) : null;
      return {
        amount: JV,
        have: YV,
        item: VV(UV || (0, dY.c)(eV))
      }
    }

    function tp(VV) {
      return ex(VV) ? "buildAFactory2Game:machineBarMining" : xx(VV) ? "buildAFactory2Game:machineBarCutting" : void 0 !== VV.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function Fp(VV) {
      var eV, xV, JV, YV, UV, yV, pV, QV, nV, wV, ZV, vV, rV, kV, bV, EV, BV, jV, qV;
      let {
        kind: tV,
        ix: FV,
        store: TV,
        power: PV,
        renderSlot: AV
      } = VV;
      const {
        t: NV
      } = (0, AY.A)(), XV = bp(TV, FV), MV = De[tV], zV = null !== (eV = null === XV || void 0 === XV ? void 0 : XV.coupled) && void 0 !== eV && eV, GV = null !== (xV = null === XV || void 0 === XV ? void 0 : XV.couplerLevel) && void 0 !== xV ? xV : 1, WV = Ep(tV, zV, GV, null !== (JV = null === XV || void 0 === XV || null === (YV = XV.dug) || void 0 === YV ? void 0 : YV.item) && void 0 !== JV ? JV : null), RV = null !== (UV = null === XV || void 0 === XV ? void 0 : XV.status) && void 0 !== UV ? UV : null, gV = null !== (yV = null === XV || void 0 === XV ? void 0 : XV.power) && void 0 !== yV ? yV : null, DV = null !== (pV = null === XV || void 0 === XV ? void 0 : XV.opLeftMs) && void 0 !== pV ? pV : null, iV = null !== (QV = null === XV || void 0 === XV ? void 0 : XV.dug) && void 0 !== QV ? QV : null, CV = null !== iV && ex(MV) ? px[null !== (nV = Qx(iV.item)) && void 0 !== nV ? nV : ""] : void 0, aV = void 0 === CV ? null : 6e4 / CV, oV = null !== (wV = null === XV || void 0 === XV ? void 0 : XV.powerCap) && void 0 !== wV ? wV : 4e3, cV = null !== (ZV = null === XV || void 0 === XV ? void 0 : XV.tier) && void 0 !== ZV ? ZV : null, hV = void 0 !== WV.powerMade, lV = null !== MV.fuelSlot ? AV(MV.fuelSlot) : null, LV = le(MV), fV = !zV && !0 === (null === XV || void 0 === XV ? void 0 : XV.fuelFed), KV = !zV && !0 === (null === XV || void 0 === XV ? void 0 : XV.fuelFeeds), HV = null !== MV.fuelSlot && !zV, uV = null !== (vV = null === XV || void 0 === XV ? void 0 : XV.fuelLeftMs) && void 0 !== vV ? vV : null, sV = function(VV, eV, xV) {
        var JV;
        const YV = null === eV ? void 0 : Ux[eV];
        return Math.max(null !== (JV = null !== YV && void 0 !== YV ? YV : xV) && void 0 !== JV ? JV : 0, VV.opMs)
      }(WV, null !== (rV = null === XV || void 0 === XV ? void 0 : XV.burning) && void 0 !== rV ? rV : null, uV), SV = null !== (kV = null === XV || void 0 === XV ? void 0 : XV.fuelKeep) && void 0 !== kV ? kV : null, IV = null === RV ? null : Zp(tV, RV, XV, fV), dV = null === RV ? null : vp(RV, XV);
      return (0, qU.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, qU.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, qU.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: NV((0, dY.c)(tV))
          }), iV && (0, qU.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [NV("Tree Cutter" === tV ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, qU.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, qU.jsx)(XY.e, {
                itemName: iV.item,
                amount: 0
              })
            }), (0, qU.jsx)(MY.b, {
              text: iV.name
            })]
          }), null !== aV && (0, qU.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: NV("buildAFactory2Game:machineDigsFixed", {
              perMin: String(aV)
            })
          }), (null === XV || void 0 === XV ? void 0 : XV.field) && (0, qU.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, qU.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, qU.jsx)(XY.e, {
                itemName: "Wheat",
                amount: 0
              })
            }), NV("buildAFactory2Game:machineField", {
              planted: String(XV.field[0]),
              ripe: String(XV.field[1])
            })]
          }), (0, qU.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, qU.jsxs)("div", {
              className: tY()("Baf2MachineColumn", {
                Baf2Burns: HV
              }),
              children: [null !== WV.inputSlot && (0, qU.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, qU.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: NV(rp(WV))
                }), AV(WV.inputSlot)]
              }), null !== MV.fuelSlot && !zV && (0, qU.jsxs)("div", {
                className: tY()("Baf2MachineSlot", {
                  Baf2FuelFed: fV
                }),
                children: [(0, qU.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [fV && (0, qU.jsx)(NY.b, {
                    name: "fire"
                  }), NV("buildAFactory2Game:machineFuel")]
                }), (0, qU.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, qU.jsx)(jp, {
                    running: "running" === RV,
                    leftMs: uV,
                    periodMs: sV,
                    updateCount: TV.updateCount
                  }), lV]
                })]
              }), null !== MV.fuelSlot && zV && (0, qU.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, qU.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: NV("buildAFactory2Game:machineFuel")
                }), (0, qU.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: NV("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": NV("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, qU.jsx)(NY.b, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, qU.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, qU.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: NV(tp(WV))
              }), (0, qU.jsx)(Bp, {
                running: "running" === RV,
                opMs: WV.opMs,
                opLeftMs: DV,
                updateCount: TV.updateCount
              })]
            }), WV.outputSlots.length > 0 && (0, qU.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, qU.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: NV("buildAFactory2Game:machineOutput")
              }), (0, qU.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: WV.outputSlots.map((VV => (0, qU.jsx)("div", {
                  children: AV(VV)
                }, VV)))
              })]
            }), null !== gV && hV && (0, qU.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, qU.jsx)("div", {
                style: {
                  height: 100 * gV / oV + "%"
                }
              })
            })]
          }), HV && null !== SV && (0, qU.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, qU.jsx)(NY.b, {
              name: "arrows-rotate"
            }), NV(xx(WV) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(SV)
            })]
          }), (fV || KV) && (0, qU.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, qU.jsx)(NY.b, {
              name: "fire"
            }), NV(fV ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), MV.couplable && (0, qU.jsx)(my, {
            kind: tV,
            tier: cV,
            coupled: zV,
            level: GV,
            slot: LV === MV.fuelSlot ? lV : null !== LV ? AV(LV) : null
          }), null !== gV && !hV && !0 === (null === XV || void 0 === XV ? void 0 : XV.reactorPowered) && (0, qU.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: NV("buildAFactory2Game:machineReactorPowered")
          }), null !== gV && !hV && !0 !== (null === XV || void 0 === XV ? void 0 : XV.reactorPowered) && (0, qU.jsx)(Py, {
            stored: gV,
            cap: oV,
            rates: null !== (bV = null === XV || void 0 === XV ? void 0 : XV.powerRates) && void 0 !== bV ? bV : null
          }), (null === XV || void 0 === XV ? void 0 : XV.water) && (0, qU.jsx)(xp, {
            water: XV.water,
            at: FV,
            side: XV.cryo ? "waterIn" : null
          }), (null === XV || void 0 === XV ? void 0 : XV.cryo) && (0, qU.jsx)(xp, {
            water: XV.cryo,
            at: FV,
            side: "cryoOut"
          }), null !== XV && void 0 !== XV && XV.inertCoupler ? (0, qU.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: NV("buildAFactory2Game:machineStatus_couplerOff", {
              item: (0, dY.e)(NV, XV.inertCoupler)
            })
          }) : null !== IV && (0, qU.jsx)("div", {
            className: tY()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== RV
            }),
            children: NV(IV, dV ? qp(NV, dV.input, dV.short) : void 0)
          })]
        }), (0, qU.jsxs)("div", {
          className: tY()("Baf2MachineSide", {
            Baf2SynthSide: He(MV)
          }),
          children: [He(MV) && (0, qU.jsx)(Ly, {
            ix: FV,
            taught: null !== (EV = null === XV || void 0 === XV ? void 0 : XV.taught) && void 0 !== EV ? EV : null
          }, FV.join(",")), hV && (0, qU.jsx)(Ny, {
            kind: tV,
            def: WV,
            ix: FV,
            power: PV,
            stored: null !== gV && void 0 !== gV ? gV : 0,
            cap: oV
          }), mV(MV) && (0, qU.jsx)(cy, {
            ix: FV,
            input: null !== (BV = null === XV || void 0 === XV ? void 0 : XV.input) && void 0 !== BV ? BV : null,
            drops: null !== (jV = null === XV || void 0 === XV ? void 0 : XV.farm) && void 0 !== jV ? jV : null,
            seconds: String(WV.opMs / 1e3)
          }), !hV && !mV(MV) && !He(MV) && (0, qU.jsx)(IU, {
            kind: tV,
            def: WV,
            input: null !== (qV = null === XV || void 0 === XV ? void 0 : XV.input) && void 0 !== qV ? qV : null,
            tier: null !== cV && void 0 !== cV ? cV : 1,
            noSeeds: !0 === (null === XV || void 0 === XV ? void 0 : XV.noSeeds)
          })]
        })]
      })
    }

    function Tp(VV, eV, xV, JV) {
      var YV;
      const UV = De[VV],
        yV = [UV.inputSlot, UV.fuelSlot, ...null !== (YV = UV.inputSlots) && void 0 !== YV ? YV : []].filter((VV => null !== VV));
      return {
        render: YV => {
          let {
            ix: UV,
            renderSlot: yV
          } = YV;
          return (0, qU.jsx)(Dy.Provider, {
            value: JV,
            children: (0, qU.jsx)(Fp, {
              kind: VV,
              ix: UV,
              store: eV,
              power: xV,
              renderSlot: yV
            })
          })
        },
        quickMoveRange: yV.length > 0 ? [Math.min(...yV), Math.max(...yV) + 1] : [0, 0],
        className: kp(VV)
      }
    }
    const Pp = "Assembler";

    function Ap(VV) {
      var eV, xV, JV, YV, UV, yV, pV, QV, nV;
      let {
        ix: wV,
        store: ZV,
        renderSlot: vV
      } = VV;
      const {
        t: rV
      } = (0, AY.A)(), kV = bp(ZV, wV), bV = null !== (eV = null === kV || void 0 === kV ? void 0 : kV.tier) && void 0 !== eV ? eV : 1, EV = null !== (xV = null === kV || void 0 === kV ? void 0 : kV.taught) && void 0 !== xV ? xV : null, BV = Ie(Pp, {
        coupled: !1,
        taught: EV
      }), jV = null !== (JV = BV.bench) && void 0 !== JV ? JV : null, qV = null !== (YV = null === kV || void 0 === kV ? void 0 : kV.status) && void 0 !== YV ? YV : null, tV = null !== (UV = null === kV || void 0 === kV ? void 0 : kV.power) && void 0 !== UV ? UV : null, FV = null !== (yV = null === kV || void 0 === kV ? void 0 : kV.powerCap) && void 0 !== yV ? yV : 4e3;
      return (0, qU.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, qU.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, qU.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: rV((0, dY.c)(Pp))
          }), jV && (0, qU.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [rV("buildAFactory2Game:benchMakes"), (0, qU.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, qU.jsx)(XY.e, {
                itemName: jV.output,
                amount: 0
              })
            }), (null === kV || void 0 === kV ? void 0 : kV.taughtName) && (0, qU.jsx)(MY.b, {
              text: kV.taughtName
            }), jV.outputAmount > 1 && (0, qU.jsxs)("span", {
              children: ["\xd7", jV.outputAmount]
            })]
          }), !jV && (0, qU.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: rV("buildAFactory2Game:benchTeachHint")
          }), (0, qU.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, qU.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (pV = BV.inputSlots) && void 0 !== pV ? pV : []).map(((VV, eV) => {
                const xV = null === jV || void 0 === jV ? void 0 : jV.inputs[eV];
                return (0, qU.jsxs)("div", {
                  className: tY()("Baf2BenchInput", {
                    Spare: !xV
                  }),
                  children: [(0, qU.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [vV(VV), xV && (0, qU.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, qU.jsx)(XY.e, {
                        itemName: xV.item,
                        amount: 0
                      })
                    })]
                  }), (0, qU.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: xV ? `\xd7${xV.amount}` : "\xa0"
                  })]
                }, VV)
              }))
            }), (0, qU.jsx)(Bp, {
              running: "running" === qV,
              opMs: BV.opMs,
              opLeftMs: null !== (QV = null === kV || void 0 === kV ? void 0 : kV.opLeftMs) && void 0 !== QV ? QV : null,
              updateCount: ZV.updateCount
            }), (0, qU.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, qU.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: rV("buildAFactory2Game:machineOutput")
              }), (0, qU.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: BV.outputSlots.map((VV => (0, qU.jsx)("div", {
                  children: vV(VV)
                }, VV)))
              })]
            })]
          }), null !== tV && (0, qU.jsx)(Py, {
            stored: tV,
            cap: FV,
            rates: null !== (nV = null === kV || void 0 === kV ? void 0 : kV.powerRates) && void 0 !== nV ? nV : null
          }), null !== qV && (0, qU.jsx)("div", {
            className: tY()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== qV
            }),
            children: rV(Zp(Pp, qV, kV, !1))
          }), jV && jV.inputs.length > 1 && (0, qU.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: rV("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, qU.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, qU.jsx)(OU, {
            taught: EV,
            tier: bV
          }), jV && (0, qU.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: rV("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function Np(VV) {
      var eV;
      const xV = null !== (eV = De[Pp].inputSlots) && void 0 !== eV ? eV : [];
      return {
        render: eV => {
          let {
            ix: xV,
            renderSlot: JV
          } = eV;
          return (0, qU.jsx)(Ap, {
            ix: xV,
            store: VV,
            renderSlot: JV
          })
        },
        quickMoveRange: [Math.min(...xV), Math.max(...xV) + 1],
        className: kp(Pp)
      }
    }
    var Xp = xV(99),
      Mp = xV(1168),
      zp = xV(4642);
    const Gp = 600,
      Wp = .5,
      Rp = 4,
      gp = 1200,
      Dp = 140,
      ip = 100,
      Cp = 32,
      ap = 16,
      op = 100.5,
      cp = 90,
      hp = 1.5,
      lp = 50;

    function Lp(VV) {
      switch (Wx(VV)) {
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
    const fp = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function mp(VV) {
      const eV = Math.ceil(60 * VV / ip);
      return {
        fuel: Math.max(Cp, eV),
        waste: Math.max(ap, eV)
      }
    }

    function Kp(VV, eV, xV) {
      const [JV, YV, UV] = [VV - 2, eV - 2, xV - 2];
      return 2 * (JV * YV + YV * UV + UV * JV) * Dp
    }

    function Hp(VV, eV, xV) {
      return Math.max(0, VV - 2) * Math.max(0, eV - 2) * Math.max(0, xV - 2)
    }

    function sp(VV, eV) {
      const [xV, JV, YV] = VV, UV = xV * JV * YV, yV = new Float32Array(UV);
      let pV = 0,
        QV = 0,
        nV = 0,
        wV = 0,
        ZV = 0;
      const vV = (VV, UV, yV) => VV < 0 || VV >= xV || UV < 0 || UV >= JV || yV < 0 || yV >= YV ? 0 : eV[(UV * YV + yV) * xV + VV];
      for (let EV = 0; EV < JV; EV++)
        for (let VV = 0; VV < YV; VV++)
          for (let JV = 0; JV < xV; JV++) {
            const UV = (EV * YV + VV) * xV + JV,
              rV = eV[UV];
            if (1 === rV) {
              pV++;
              let eV = 0;
              for (const [xV, YV, UV] of fp) {
                const yV = vV(JV + xV, EV + YV, VV + UV);
                1 !== yV && 2 !== yV || eV++
              }
              yV[UV] = Gp * (1 + Wp * Math.min(eV, Rp)), wV += yV[UV]
            } else if (2 === rV) QV++;
            else if (3 === rV) {
              nV++;
              fp.some((eV => {
                let [xV, YV, UV] = eV;
                return 1 === vV(JV + xV, EV + YV, VV + UV)
              })) && (ZV += gp)
            }
          }
      const rV = Kp(xV + 2, JV + 2, YV + 2),
        kV = Math.min(wV, ZV, rV),
        bV = pV > 0 ? wV * ip / pV : 0;
      return {
        rods: pV,
        graphite: QV,
        channels: nV,
        fuelHeat: wV,
        cooling: ZV,
        size: rV,
        max: kV,
        vol: UV,
        powerPerUnit: bV,
        pelletsPerMin: bV > 0 ? kV / bV * 60 : 0,
        waterPerS: kV * dV.n,
        rodHeat: yV
      }
    }
    const Sp = 0,
      Ip = 1,
      dp = 6,
      Op = 7,
      VQ = 8;

    function eQ(VV, eV) {
      const [xV, JV, YV] = VV, UV = new Uint8Array(xV * JV * YV), yV = (VV, UV, yV) => VV < 0 || VV >= xV || UV < 0 || UV >= JV || yV < 0 || yV >= YV ? 0 : eV[(UV * YV + yV) * xV + VV];
      for (let pV = 0; pV < JV; pV++)
        for (let VV = 0; VV < YV; VV++)
          for (let JV = 0; JV < xV; JV++) {
            const QV = (pV * YV + VV) * xV + JV,
              nV = eV[QV];
            if (1 === nV) {
              let eV = 0;
              for (const [xV, YV, UV] of fp) {
                const QV = yV(JV + xV, pV + YV, VV + UV);
                eV += 1 === QV || 2 === QV ? 1 : 0
              }
              UV[QV] = Ip + Math.min(eV, Rp)
            } else if (3 === nV) {
              const eV = fp.some((eV => {
                let [xV, YV, UV] = eV;
                return 1 === yV(JV + xV, pV + YV, VV + UV)
              }));
              UV[QV] = eV ? dp : Op
            } else 2 === nV && (UV[QV] = VQ)
          }
      return UV
    }

    function xQ(VV) {
      return VV.fuelHeat <= VV.cooling && VV.fuelHeat <= VV.size ? "fuel" : VV.cooling <= VV.size ? "cooling" : "size"
    }
    const JQ = cp;

    function YQ(VV, eV, xV) {
      return Math.round(VV * eV * xV * 25e3 * (1 + .25 * (Math.min(VV, eV, xV) - 2)))
    }

    function UQ(VV) {
      return Math.max(0, Math.min(dV.f, VV))
    }

    function yQ(VV, eV, xV) {
      const JV = eV * UQ(xV);
      return VV <= 0 ? 0 : JV > 0 ? Math.min(200, 100 * VV / JV) : 200
    }

    function pQ(VV, eV) {
      const xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? hp : 1;
      return Math.min(VV.fuelHeat * xV, VV.cooling * UQ(eV), VV.size * xV)
    }

    function QQ(VV) {
      return 2 + VV / 10
    }
    const nQ = "buildAFactory2Game:";

    function wQ(VV) {
      var eV;
      return null !== (eV = VV.baf2RxMood) && void 0 !== eV ? eV : function(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const xV = [
          ["calm", 50],
          ["warm", JQ],
          ["hot", op]
        ];
        for (const [JV, YV] of xV)
          if (VV < YV + (JV === eV ? 3 : 0)) return JV;
        return "alarm"
      }(VV.baf2RxHeat)
    }
    const ZQ = 120;

    function vQ(VV) {
      const eV = VV.baf2RxState;
      if ("running" === eV && VV.baf2RxHeat > op) return {
        label: `${nQ}rxState_tooHot`,
        tone: "bad",
        fix: `${nQ}rxFix_tooHot`
      };
      switch (eV) {
        case "running":
          return {
            label: `${nQ}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${nQ}rxState_idle`, tone: "off", fix: `${nQ}rxFix_idle`
          };
        case "scram":
          return {
            label: `${nQ}rxState_scram`, tone: "off", fix: VV.baf2RxHeat < lp ? `${nQ}rxFix_scramCool` : `${nQ}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${nQ}rxState_${eV}`, tone: "off", fix: `${nQ}rxFix_${eV}`
          };
        case "melted":
          return {
            label: `${nQ}rxState_melted`, tone: "bad", fix: `${nQ}rxFix_melted`
          };
        default:
          return {
            label: `${nQ}rxState_${eV}`, tone: "warn", fix: `${nQ}rxFix_${eV}`
          }
      }
    }

    function rQ(VV) {
      const [eV, xV, JV] = VV.baf2RxStats;
      return {
        fuelHeat: eV,
        cooling: xV * (VV.baf2RxCryo ? Math.max(1, UQ(VV.baf2RxWater / 100)) : 1),
        size: JV
      }
    }

    function kQ(VV) {
      var eV;
      const xV = "idle" === VV.baf2RxState || "running" === VV.baf2RxState && VV.baf2RxHeat <= op || "scram" === VV.baf2RxState && VV.baf2RxHeat < lp;
      if (0 === (VV.baf2RxFlags & te) || !VV.baf2RxFormed || !xV) return null;
      const {
        fuelHeat: JV,
        cooling: YV,
        size: UV
      } = rQ(VV), yV = Math.min(JV, YV, UV), pV = xQ({
        fuelHeat: JV,
        cooling: YV,
        size: UV
      }), QV = "cooling" === pV && !0 === VV.baf2RxCryoOpen && !VV.baf2RxCryo, nV = null !== (eV = VV.baf2RxCells) && void 0 !== eV ? eV : "", wV = ("fuel" === pV || "cooling" === pV && !0 === VV.baf2RxCryo) && nV.length > 0 && !nV.includes(String(0)), ZV = QV ? "Cryo" : "scram" === VV.baf2RxState ? "Off" : "";
      return yV < 12e3 ? {
        key: `${nQ}rxGrow_${wV?"full":pV}${ZV}`,
        amount: yV
      } : null
    }

    function bQ(VV, eV) {
      return VV[0] === eV[0] && VV[1] === eV[1] && VV[2] === eV[2]
    }

    function EQ(VV) {
      return [...VV].sort(((VV, eV) => Number(eV[2] < eV[1]) - Number(VV[2] < VV[1])))
    }

    function BQ(VV, eV) {
      return eV.some((eV => {
        let [xV, JV] = eV;
        return !(JV <= 0) && ["edge", "cap", "wall", "inside"].some((eV => xV === UJ(VV, eV)))
      }))
    }

    function jQ(VV, eV, xV) {
      const JV = VV.baf2RxFuel - VV.baf2RxPu > 0 ? xV : 0;
      return {
        full: VV.baf2RxWaste > eV - 3,
        fullInS: JV > 0 ? Math.max(0, eV - VV.baf2RxWaste) / JV : null
      }
    }
    const qQ = {
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

    function tQ(VV) {
      return FQ[VV]
    }
    const FQ = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function TQ(VV) {
      let [eV, xV, JV] = VV;
      return Math.ceil(Kp(eV, xV, JV) * dV.n)
    }

    function PQ(VV, eV) {
      return "battery" === VV ? eV[0] * eV[1] * eV[2] : function(VV) {
        let [eV, xV, JV] = VV;
        return eV * xV * JV - Math.max(0, eV - 2) * Math.max(0, xV - 2) * Math.max(0, JV - 2)
      }(eV) - 1
    }

    function AQ(VV) {
      const eV = Math.max(0, VV);
      if (eV < 10) return String(Math.round(10 * eV) / 10);
      if (eV < 1e4) return Math.round(eV).toLocaleString("en-US");
      if (eV < 1e6) return `${eV<1e5?(Math.floor(eV/100)/10).toFixed(1):Math.floor(eV/1e3)}k`;
      const xV = eV / 1e6;
      return `${xV<10?(Math.floor(100*xV)/100).toFixed(2):xV<100?(Math.floor(10*xV)/10).toFixed(1):Math.floor(xV)}M`
    }

    function NQ(VV) {
      return VV <= 0 ? "0" : VV >= 10 ? String(Math.round(VV)) : VV.toFixed(VV >= 1 ? 1 : 2)
    }

    function XQ(VV) {
      const eV = dx(VV, 0),
        xV = dx(VV, ux(VV) - 1);
      return {
        lo: [Math.min(eV[0], xV[0]), Math.min(eV[1], xV[1]), Math.min(eV[2], xV[2])],
        hi: [Math.max(eV[0], xV[0]) + 1, Math.max(eV[1], xV[1]) + 1, Math.max(eV[2], xV[2]) + 1]
      }
    }

    function MQ(VV, eV, xV) {
      const JV = [eV[0] - VV[0], eV[1] - VV[1], eV[2] - VV[2]],
        YV = [(VV[0] + eV[0]) / 2, (VV[1] + eV[1]) / 2, (VV[2] + eV[2]) / 2],
        UV = [];
      for (let yV = 0; yV < 3; yV++) {
        const pV = (yV + 1) % 3,
          QV = (yV + 2) % 3;
        for (const nV of [VV[pV], eV[pV]])
          for (const wV of [VV[QV], eV[QV]]) {
            const VV = [0, 0, 0],
              eV = [xV, xV, xV];
            VV[yV] = YV[yV], eV[yV] = JV[yV] + xV, VV[pV] = nV, VV[QV] = wV, UV.push([VV, eV])
          }
      }
      return UV
    }
    const zQ = "buildAFactory2Game:",
      GQ = [`${zQ}colNorth`, `${zQ}colEast`, `${zQ}colSouth`, `${zQ}colWest`];

    function WQ(VV, eV) {
      const [xV, JV, YV] = VV.baf2ColAt;
      return `baf2col ${xV} ${JV} ${YV} ${eV}`
    }

    function RQ(VV) {
      return function(VV) {
        if (!Number.isFinite(VV)) return "";
        const eV = Math.max(1, Math.round(VV));
        if (eV < 60) return `${eV}s`;
        const xV = eV % 60;
        return 0 === xV ? eV / 60 + "m" : `${Math.floor(eV/60)}m ${xV}s`
      }(function(VV) {
        const eV = yJ.FOCUS_BY_LASERS[Math.max(0, Math.min(4, VV))];
        return eV > 0 ? yJ.NOVA_FOCUS / eV : 1 / 0
      }(VV))
    }

    function gQ(VV) {
      const eV = Math.abs(Math.round(VV));
      return eV < 1e3 ? Math.round(VV).toLocaleString("en-US") : eV < 1e6 ? `${eV<1e5?(VV/1e3).toFixed(1).replace(/\.0$/,""):Math.round(VV/1e3)}k` : `${(VV/1e6).toFixed(eV<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function DQ(VV, eV, xV) {
      if (vJ(eV) >= 0) {
        const eV = function(VV, eV) {
          return VV.find((VV => {
            let {
              focus: xV
            } = VV;
            return xV[0] === eV[0] && xV[2] === eV[2] && (eV[1] === xV[1] || eV[1] === xV[1] - 1)
          }))
        }(VV, xV);
        if (!eV) return null;
        const YV = function(VV) {
          let eV = 0,
            xV = 0;
          for (let JV = 0; JV < 4; JV++) eV += VV.laser[JV] ? 1 : 0, xV += VV.live[JV] ? 1 : 0;
          return {
            lasers: eV,
            live: xV,
            focusPerS: yJ.FOCUS_BY_LASERS[xV],
            drawPerS: yJ.LASER_DRAW * xV
          }
        }({
          laser: eV.lasers,
          live: eV.live
        });
        if (0 === YV.lasers || "noLasers" === eV.state) return {
          key: `${zQ}lookColNoLasers`
        };
        if (0 === YV.live) return {
          key: `${zQ}lookColOff_blocked`
        };
        if (!(eV.on && YV.live > 0) && ("running" !== (JV = eV.state) && "slowed" !== JV)) return {
          key: `${zQ}lookColOff_${eV.state}`
        };
        if (YV.live < YV.lasers) return {
          key: `${zQ}lookColLasersSome`,
          params: {
            lasers: String(YV.lasers),
            live: String(YV.live)
          }
        };
        const UV = eV.open.filter(Boolean).length;
        return UV < 4 ? {
          key: `${zQ}lookColLasersSpots`,
          params: {
            live: String(YV.live),
            spots: String(UV),
            time: RQ(YV.live)
          }
        } : {
          key: `${zQ}lookColLasers`,
          params: {
            live: String(YV.live),
            time: RQ(YV.live)
          }
        }
      }
      var JV;
      if (!rJ(eV)) return null;
      const YV = function(VV, eV) {
        for (const xV of VV) {
          const VV = BJ(xV.focus, [eV[0], eV[1], eV[2]]);
          if (VV && VV.Dn === yJ.LASER_D && xV.lasers[VV.dir]) return {
            entry: xV,
            dir: VV.dir
          }
        }
        return null
      }(VV, xV);
      if (!YV) return {
        key: `${zQ}lookLaserNoCollider`
      };
      const {
        entry: UV,
        dir: yV
      } = YV;
      return UV.open[yV] ? UV.live[yV] ? {
        key: UV.on ? `${zQ}lookLaserFiring` : `${zQ}lookLaserReady`
      } : {
        key: `${zQ}lookLaserBlocked`
      } : {
        key: `${zQ}lookLaserClosed`
      }
    }

    function iQ(VV, eV) {
      const xV = [];
      for (let JV = 1; JV < yJ.LASER_D; JV++) VV & 1 << eV * (yJ.LASER_D - 1) + JV - 1 && xV.push(JV);
      return xV
    }
    const CQ = {
      firing: `${zQ}colSlotFiring`,
      ready: `${zQ}colSlotReady`,
      blocked: `${zQ}colSlotBlocked`,
      empty: `${zQ}colSlotEmpty`,
      closed: `${zQ}colSlotClosed`
    };

    function aQ(VV, eV, xV, JV) {
      let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const UV = JY(VV),
        yV = JY(eV),
        pV = JY(xV),
        QV = pV.filter(Boolean).length,
        nV = UV.filter(Boolean).length,
        wV = [0, 1, 2, 3].map((VV => yV[VV] ? UV[VV] ? pV[VV] ? JV ? "firing" : "ready" : "blocked" : (VV => iQ(YV, VV).length > 0)(VV) ? "blocked" : "empty" : "closed")),
        ZV = wV.indexOf("blocked"),
        vV = ZV < 0 && nV > 0 ? wV.indexOf("empty") : -1;
      return wV.map(((VV, eV) => {
        const xV = eV === ZV ? {
          key: `${zQ}colSlotClear`
        } : eV === vV ? {
          key: `${zQ}colSlotAdd`,
          params: {
            time: RQ(Math.min(4, QV + 1))
          }
        } : null;
        return {
          dir: eV,
          tone: VV,
          title: {
            key: "blocked" !== VV || UV[eV] ? CQ[VV] : `${zQ}colSlotGap`,
            keys: {
              dir: GQ[eV]
            }
          },
          hint: xV
        }
      }))
    }

    function oQ(VV) {
      var eV;
      return "noPower" === VV.baf2ColState && VV.baf2ColRxState ? vQ({
        baf2RxState: VV.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (eV = VV.baf2ColRxHeat) && void 0 !== eV ? eV : 0
      }) : null
    }

    function cQ(VV) {
      const eV = JY(VV.baf2ColSpots).filter(Boolean).length,
        xV = JY(VV.baf2ColLive);
      let JV = 0,
        YV = 0;
      return JY(VV.baf2ColLasers).forEach(((VV, eV) => {
        VV && (JV++, YV += xV[eV] ? 0 : 1)
      })), YV > 0 ? {
        key: `${zQ}colSubSome`,
        params: {
          blocked: String(YV),
          lasers: String(JV)
        }
      } : eV < 4 ? {
        key: `${zQ}colSubSpots`,
        params: {
          lasers: String(JV),
          spots: String(eV)
        }
      } : {
        key: `${zQ}colSub`,
        params: {
          lasers: String(JV)
        }
      }
    }

    function hQ(VV) {
      const eV = oQ(VV);
      if ("idle" === VV.baf2ColRxState && eV) return {
        key: `${zQ}colState_noPowerIdle`
      };
      if (eV) return {
        key: `${zQ}colState_noPowerReactor`,
        keys: {
          state: eV.label
        }
      };
      if ("noInput" !== VV.baf2ColState) return {
        key: `${zQ}colState_${VV.baf2ColState}`
      };
      const xV = String(Math.max(0, yJ.NOVA_SA - VV.baf2ColSa)),
        JV = String(Math.max(0, yJ.NOVA_GD - VV.baf2ColGd));
      return "0" !== xV && "0" !== JV ? {
        key: `${zQ}colState_noInput`,
        params: {
          sa: xV,
          gd: JV
        }
      } : "0" !== xV ? {
        key: `${zQ}colState_noStarAlloy`,
        params: {
          sa: xV
        }
      } : "0" !== JV ? {
        key: `${zQ}colState_noGlowDust`,
        params: {
          gd: JV
        }
      } : {
        key: `${zQ}colState_running`
      }
    }

    function lQ(VV) {
      return VV.baf2ColP < 0 ? `${zQ}colNext` : function(VV) {
        const eV = VV.baf2ColState;
        return VV.baf2ColP >= 0 && ("blocked" === eV || "noLasers" === eV || "noPower" === eV)
      }(VV) ? `${zQ}colStalled` : null === LQ(VV) ? `${zQ}colMaking` : `${zQ}colNovaIn`
    }

    function LQ(VV) {
      if (VV.baf2ColP < 0 || VV.baf2ColWant <= 0) return null;
      const eV = VV.baf2ColFocusPerS * Math.min(1, VV.baf2ColDraw / VV.baf2ColWant);
      return eV > 0 ? Math.max(0, yJ.NOVA_FOCUS - VV.baf2ColP) / eV : null
    }

    function fQ(VV, eV) {
      const xV = [];
      for (let JV = 1; JV <= 3; JV++) {
        const YV = [VV[0], VV[1] - JV, VV[2]];
        if (!eV(YV)) return xV;
        xV.push(YV)
      }
      return []
    }

    function mQ(VV, eV) {
      const xV = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let JV = 0; JV < 4; JV++) {
        const YV = JV,
          UV = EJ(VV.focus, YV, yJ.LASER_D);
        if (VV.lasers[JV] || !VV.open[JV] || !eV(UV)) continue;
        const yV = [];
        for (let xV = 1; xV < yJ.LASER_D; xV++) {
          const JV = EJ(VV.focus, YV, xV);
          eV(JV) || yV.push(JV)
        }
        xV.supports.push(...fQ(UV, eV)), 0 === yV.length ? xV.free.push(UV) : (xV.blocked.push(UV), xV.gaps.push(...yV))
      }
      return xV
    }
    const KQ = yJ.LASER_D - .25,
      HQ = 4,
      uQ = 2,
      sQ = 16;
    const SQ = {
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
        blendMode: zp.g.Standard,
        soft: !0
      },
      IQ = {
        green: SQ,
        pink: {
          ...SQ,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function dQ(VV, eV) {
      const xV = {
        ...eV.params
      };
      for (const [YV, UV] of Object.entries(null !== (JV = eV.keys) && void 0 !== JV ? JV : {})) {
        var JV;
        xV[YV] = VV(UV)
      }
      return xV
    }
    const OQ = "buildAFactory2Game:",
      Vn = 2 * yJ.LASER_D + 1,
      en = yJ.LASER_D;

    function xn(VV) {
      return VV(`${OQ}colFocusTip`, {
        need: gQ(yJ.NOVA_FOCUS)
      })
    }

    function Jn(VV, eV) {
      return VV(eV.key, dQ(VV, eV))
    }

    function Yn(VV) {
      const eV = VV.getStatus();
      return {
        status: eV,
        entry: eV ? VV.entryAtRoot(eV.baf2ColAt) : void 0
      }
    }

    function Un(VV, eV) {
      return {
        left: 100 * (en + VV) / Vn + "%",
        top: 100 * (en + eV) / Vn + "%"
      }
    }

    function yn(VV) {
      let {
        status: eV,
        entry: xV
      } = VV;
      const JV = JY(eV.baf2ColLasers),
        YV = JY(eV.baf2ColSpots),
        UV = JY(eV.baf2ColLive),
        yV = !0 === (null === xV || void 0 === xV ? void 0 : xV.on),
        pV = yJ.LASER_D,
        QV = [];
      for (let rV = 0; rV < 4; rV++) {
        const [VV, , eV] = bJ[rV];
        if (UV[rV]) {
          const xV = 100 * (pV - 1) / Vn,
            JV = VV + eV > 0 ? 100 * (en + 1) / Vn : 100 * (en - (pV - 1)) / Vn,
            YV = 100 * (en + .35) / Vn,
            UV = 30 / Vn,
            nV = 0 !== VV ? {
              left: `${JV}%`,
              width: `${xV}%`,
              top: `${YV}%`,
              height: `${UV}%`
            } : {
              top: `${JV}%`,
              height: `${xV}%`,
              left: `${YV}%`,
              width: `${UV}%`
            };
          QV.push((0, qU.jsx)("i", {
            className: tY()("Baf2ColDiagramBeam", {
              Off: !yV
            }),
            style: nV
          }, `beam${rV}`))
        }
        const xV = JV[rV] ? "Baf2ColDiagramLaser" : YV[rV] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        QV.push((0, qU.jsx)("i", {
          className: xV,
          style: Un(VV * pV, eV * pV)
        }, `spot${rV}`))
      }
      for (let rV = 0; rV < 4; rV++) {
        if (JV[rV] || !YV[rV]) continue;
        const [VV, , xV] = bJ[rV];
        for (const JV of iQ(null !== (nV = eV.baf2ColGaps) && void 0 !== nV ? nV : 0, rV)) {
          var nV;
          QV.push((0, qU.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: Un(VV * JV, xV * JV)
          }, `gap${rV},${JV}`))
        }
      }
      for (const [rV, , kV] of null !== (wV = null === xV || void 0 === xV ? void 0 : xV.blockers) && void 0 !== wV ? wV : []) {
        var wV, ZV, vV;
        const VV = rV - (null !== (ZV = null === xV || void 0 === xV ? void 0 : xV.focus[0]) && void 0 !== ZV ? ZV : 0),
          eV = kV - (null !== (vV = null === xV || void 0 === xV ? void 0 : xV.focus[2]) && void 0 !== vV ? vV : 0);
        QV.push((0, qU.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: Un(VV, eV)
        }, `block${VV},${eV}`))
      }
      return (0, qU.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [QV, (0, qU.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function pn(VV) {
      let {
        status: eV
      } = VV;
      const {
        t: xV
      } = (0, AY.A)(), JV = JY(eV.baf2ColLive).filter(Boolean).length;
      return (0, qU.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, qU.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: xn(xV),
          children: xV(`${OQ}colLadder`)
        }), (0, qU.jsx)("ul", {
          children: [1, 2, 3, 4].map((VV => (0, qU.jsx)("li", {
            className: tY()({
              On: VV === JV
            }),
            children: xV(`${OQ}colLadderChip`, {
              lasers: String(VV),
              time: RQ(VV)
            })
          }, VV)))
        })]
      })
    }

    function Qn(VV) {
      let {
        item: eV,
        hn: xV,
        need: JV,
        cap: YV
      } = VV;
      const {
        t: UV
      } = (0, AY.A)(), yV = Math.min(xV, JV);
      return (0, qU.jsxs)("li", {
        className: tY()("Baf2ColTile", {
          Short: xV < JV
        }),
        children: [(0, qU.jsx)(nn, {
          item: eV
        }), (0, qU.jsx)("b", {
          className: "Baf2ColTileValue",
          children: UV(`${OQ}colOutOf`, {
            amount: String(yV),
            cap: String(JV)
          })
        }), (0, qU.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, qU.jsx)("i", {
            style: {
              width: 100 * yV / JV + "%"
            }
          })
        }), xV > JV && (0, qU.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: UV(`${OQ}colIntakeHeld`, {
            amount: String(xV),
            cap: String(YV)
          })
        })]
      })
    }

    function nn(VV) {
      let {
        item: eV
      } = VV;
      const {
        t: xV
      } = (0, AY.A)();
      return (0, qU.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, qU.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, qU.jsx)(XY.e, {
            itemName: eV,
            amount: 0
          })
        }), (0, qU.jsx)("span", {
          className: "Baf2ColTileName",
          children: (0, dY.e)(xV, eV)
        })]
      })
    }

    function wn(VV) {
      switch (VV.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function Zn(VV) {
      var eV, xV, YV;
      let {
        store: UV,
        close: yV
      } = VV;
      const {
        t: pV
      } = (0, AY.A)(), QV = iy(), {
        status: nV,
        entry: wV
      } = function(VV) {
        const [eV, xV] = (0, JV.useState)((() => Yn(VV)));
        return (0, JV.useEffect)((() => (xV(Yn(VV)), VV.subscribe((() => {
          xV(Yn(VV))
        })))), [VV]), eV
      }(UV), [ZV, vV] = (0, JV.useState)(null), rV = null === nV || void 0 === nV ? void 0 : nV.baf2ColHold;
      (0, JV.useEffect)((() => {
        vV(null)
      }), [rV]);
      const kV = (0, JV.useRef)({
          p: -1,
          n: 0
        }),
        bV = null !== (eV = null === nV || void 0 === nV ? void 0 : nV.baf2ColP) && void 0 !== eV ? eV : -1;
      bV < kV.current.p && kV.current.n++, kV.current.p = bV;
      const EV = (0, JV.useRef)(null),
        [BV] = (0, JV.useState)((() => {
          return (VV = UV.heldAtOpen()) === nJ || VV === wJ ? {
            key: `${zQ}colBeltItIn`,
            item: VV
          } : null;
          var VV
        }));
      if (!nV) return null;
      const jV = nV.baf2ColMember,
        qV = nV.baf2ColP >= 0,
        tV = function(VV, eV) {
          if (VV.baf2ColP >= 0 && VV.baf2ColDraw > 0) {
            const eV = VV.baf2ColWant > 0 ? Math.min(1, VV.baf2ColDraw / VV.baf2ColWant) : 0;
            return {
              focus: VV.baf2ColFocusPerS * eV,
              draw: VV.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === VV.baf2ColState && eV && eV.draw > 0 ? {
            ...eV,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(nV, EV.current);
      EV.current = tV.draw > 0 ? tV : null;
      const FV = "slowed" === nV.baf2ColState || "noPower" === nV.baf2ColState,
        TV = LQ(nV),
        PV = null !== ZV && void 0 !== ZV ? ZV : nV.baf2ColHold,
        AV = function(VV) {
          var eV, xV;
          return "idle" === VV.baf2ColRxState ? null : null !== (eV = null === (xV = oQ(VV)) || void 0 === xV ? void 0 : xV.fix) && void 0 !== eV ? eV : null
        }(nV),
        NV = null === AV && null === BV ? function(VV) {
          var eV;
          const xV = VV.baf2ColSentTo;
          if (!xV) return null;
          const JV = null !== (eV = VV.baf2ColSentHeld) && void 0 !== eV ? eV : null;
          return {
            key: null === JV ? `${zQ}colNovaSentToMachine` : `${zQ}colNovaSentTo`,
            target: xV,
            hn: JV
          }
        }(nV) : null,
        XV = qV ? pV(`${OQ}colFocusOf`, {
          focus: gQ(nV.baf2ColP),
          need: gQ(yJ.NOVA_FOCUS)
        }) : null;
      return (0, qU.jsx)(by.e, {
        close: yV,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, qU.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, qU.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, qU.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, qU.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, qU.jsx)(XY.e, {
                  itemName: pJ,
                  amount: 0
                })
              }), (0, qU.jsxs)("div", {
                children: [(0, qU.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: (0, dY.e)(pV, pJ)
                }), (0, qU.jsx)("p", {
                  children: Jn(pV, cQ(nV))
                })]
              })]
            }), (0, qU.jsx)(Ey.k, {
              onClick: yV
            })]
          }), (0, qU.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, qU.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, qU.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, qU.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: pV(lQ(nV), {
                    time: null === TV ? "" : bU(pV, TV)
                  })
                }), (0, qU.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, qU.jsx)("i", {
                    style: {
                      width: (qV ? 100 * nV.baf2ColP / yJ.NOVA_FOCUS : 0) + "%"
                    }
                  }, kV.current.n)
                }), (0, qU.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, qU.jsxs)("span", {
                    title: xn(pV),
                    children: [(0, qU.jsx)("b", {
                      children: gQ(tV.focus)
                    }), " ", pV(`${OQ}colFocusPerS`)]
                  }), (0, qU.jsxs)("span", {
                    className: tY()("Baf2ColDraw", {
                      Short: FV
                    }),
                    children: [(0, qU.jsx)(NY.b, {
                      name: "bolt"
                    }), FV ? pV(`${OQ}colDrawOf`, {
                      draw: gQ(nV.baf2ColDraw),
                      want: gQ(nV.baf2ColWant)
                    }) : pV(`${OQ}colPowerPerS`, {
                      rate: gQ(tV.draw)
                    })]
                  }), null !== XV && (0, qU.jsx)("span", {
                    className: "Soft",
                    children: XV
                  })]
                })]
              }), (0, qU.jsx)("p", {
                className: tY()("Baf2ColState", wn(nV)),
                children: Jn(pV, hQ(nV))
              }), null !== AV && (0, qU.jsx)("p", {
                className: "Baf2ColStateFix",
                children: pV(AV)
              }), null === AV && null !== BV && (0, qU.jsx)("p", {
                className: "Baf2ColStateFix",
                children: pV(BV.key, {
                  item: (0, dY.e)(pV, BV.item)
                })
              }), NV && (0, qU.jsx)("p", {
                className: "Baf2ColStateFix",
                children: pV(NV.key, {
                  target: (0, dY.e)(pV, NV.target),
                  amount: String(null !== (xV = NV.hn) && void 0 !== xV ? xV : 0)
                })
              }), (0, qU.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, qU.jsx)(Qn, {
                  item: nJ,
                  hn: nV.baf2ColSa,
                  need: yJ.NOVA_SA,
                  cap: yJ.SA_CAP
                }), (0, qU.jsx)(Qn, {
                  item: wJ,
                  hn: nV.baf2ColGd,
                  need: yJ.NOVA_GD,
                  cap: yJ.GD_CAP
                }), (0, qU.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, qU.jsx)(nn, {
                    item: "Nova Matter"
                  }), (0, qU.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: pV(`${OQ}colNovaHeld`, {
                      amount: String(nV.baf2ColOut),
                      cap: String(yJ.OUT_CAP)
                    })
                  }), jV && (0, qU.jsx)(Ey.m, {
                    className: "Baf2ColTake",
                    disabled: 0 === nV.baf2ColOut,
                    onClick: () => {
                      QV.send(WQ(nV, "take"))
                    },
                    children: pV(`${OQ}colTake`)
                  })]
                })]
              }), jV && (0, qU.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": PV,
                className: tY()("Baf2ColHold", {
                  On: PV
                }),
                onClick: VV => {
                  VV.detail > 0 && VV.currentTarget.blur(), vV(!PV), QV.send(WQ(nV, "hold " + (PV ? 0 : 1)))
                },
                children: [(0, qU.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, qU.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, qU.jsx)("b", {
                    children: pV(`${OQ}colHold`)
                  }), (0, qU.jsx)("span", {
                    children: pV(`${OQ}colHoldNote`)
                  })]
                })]
              })]
            }), (0, qU.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, qU.jsx)(yn, {
                status: nV,
                entry: wV
              }), (0, qU.jsx)("ul", {
                className: "Baf2ColSlots",
                children: aQ(nV.baf2ColLasers, nV.baf2ColSpots, nV.baf2ColLive, tV.beamsOn, null !== (YV = nV.baf2ColGaps) && void 0 !== YV ? YV : 0).map((VV => (0, qU.jsxs)("li", {
                  className: VV.tone,
                  children: [(0, qU.jsx)("b", {
                    children: Jn(pV, VV.title)
                  }), null !== VV.hint && (0, qU.jsx)("span", {
                    children: Jn(pV, VV.hint)
                  })]
                }, VV.dir)))
              }), (0, qU.jsx)(pn, {
                status: nV
              })]
            })]
          })]
        })
      })
    }
    const vn = "buildAFactory2Game:",
      rn = 36e5,
      kn = 864e5;

    function bn(VV, eV, xV) {
      return Math.max(0, Math.ceil((VV + eV - Math.max(xV, VV)) / 1e3))
    }

    function En(VV) {
      return VV.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function Bn(VV) {
      return "Homestead" === VV
    }

    function jn(VV) {
      return function(VV) {
        let eV = 0;
        for (const xV of VV) {
          const VV = /^Island ([1-9]\d{0,5})$/.exec(xV);
          VV && (eV = Math.max(eV, Number(VV[1])))
        }
        return `Island ${eV+1}`
      }(VV.map((VV => VV.baf2IslandName)))
    }

    function qn(VV, eV) {
      return function(VV) {
        return `${vn}islandsBlocked${VV[0].toUpperCase()}${VV.slice(1)}`
      }("degraded" === VV && 0 === eV ? "stuck" : VV)
    }

    function tn(VV) {
      return VV.filter((VV => {
        var eV;
        return !VV.baf2IslandActive && void 0 === VV.baf2IslandUnreadable && void 0 === (null === (eV = VV.baf2IslandCoop) || void 0 === eV ? void 0 : eV.baf2CoopState)
      })).length
    }

    function Fn(VV) {
      return "coopMoving" === VV || "coopUnreachable" === VV
    }

    function Tn(VV, eV) {
      const xV = eV > 0;
      return {
        change: null === VV && !xV,
        switch: (null === VV || "degraded" === VV || Fn(VV)) && !xV,
        rename: "loading" !== VV && "degraded" !== VV && "stuck" !== VV
      }
    }

    function Pn(VV, eV) {
      return void 0 === VV || "corrupt" === VV && eV
    }
    const An = My;

    function Nn(VV, eV, xV) {
      if (null !== VV && void 0 !== VV && VV.untilGone) {
        var JV;
        return !("dismiss" === VV.untilGone && void 0 === (null === (JV = eV.baf2IslandCoop) || void 0 === JV ? void 0 : JV.baf2CoopState)) && xV - VV.atMs < 32500
      }
      return void 0 !== VV && xV - VV.atMs < An && eV.baf2IslandName === VV.from
    }
    const Xn = My;

    function Mn(VV) {
      return "core" === (null === VV || void 0 === VV ? void 0 : VV.kind) ? VV.core : "islands" === (null === VV || void 0 === VV ? void 0 : VV.kind) ? VV.backToCore : void 0
    }

    function zn(VV) {
      return `\0${VV}\0`
    }

    function Gn(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const JV = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const UV of Object.keys(xV)) JV[UV] = zn(UV);
      let YV = Object.keys(JV).length > 0 ? VV(eV, JV) : VV(eV);
      for (const [UV, yV] of Object.entries(xV)) YV = YV.split(zn(UV)).join(yV);
      return YV
    }

    function Wn(VV, eV) {
      return VV ? eV ? "enabled" : "disabled" : "hidden"
    }
    const Rn = {
      removed: `${vn}islandsCoopRemoved`,
      deleted: `${vn}islandsCoopDeleted`,
      notReady: `${vn}islandsCoopNotReady`,
      gone: `${vn}islandsCoopGone`
    };

    function gn(VV) {
      var eV;
      return "member" !== (null === (eV = VV.baf2IslandCoop) || void 0 === eV ? void 0 : eV.baf2CoopRole) && "newer" !== VV.baf2IslandUnreadable
    }

    function Dn(VV, eV, xV, JV, YV, UV) {
      const yV = VV.baf2IslandActive,
        pV = VV.baf2IslandUnreadable,
        QV = VV.baf2IslandCoop,
        nV = function(VV, eV, xV) {
          return {
            switch: VV.switch && void 0 === eV,
            delete: VV.change && Pn(eV, xV)
          }
        }(eV, pV, JV),
        wV = yV && void 0 !== QV && void 0 === QV.baf2CoopState && "coopUnreachable" === UV,
        ZV = {
          switch: Wn((!yV || wV) && void 0 === pV, wV || nV.switch),
          switchLabel: wV ? "tryAgain" : "switch",
          rename: Wn(!0, eV.rename),
          delete: Wn(!yV, nV.delete),
          deleteWaits: !yV && Pn(pV, JV),
          people: Wn(void 0 !== VV.baf2IslandInvitable || YV && yV && void 0 === pV && void 0 === QV, !0),
          peopleLabel: "invite",
          leave: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        vV = !yV && nV.delete;
      if (void 0 === QV) return xV ? {
        ...ZV,
        delete: Wn(!yV, !1),
        deleteWaits: !1,
        note: vV ? {
          key: `${vn}islandsCoopKeepOwn`
        } : null
      } : ZV;
      const rV = QV.baf2CoopState,
        kV = QV.baf2CoopMembers.length > 1,
        bV = {
          ...ZV,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== rV && "member" === QV.baf2CoopRole) return {
        ...bV,
        dismiss: Wn(!0, eV.rename),
        note: {
          key: Rn[rV],
          names: {
            owner: QV.baf2CoopOwner
          }
        }
      };
      if (void 0 !== rV) {
        let VV = {
          key: `${vn}islandsCoopOwnLost`
        };
        return vV && kV ? VV = {
          key: `${vn}islandsCoopDeleteMembers`
        } : vV && xV && (VV = {
          key: `${vn}islandsCoopKeepOwn`
        }), {
          ...bV,
          delete: Wn(!yV, nV.delete && !kV && !xV),
          deleteWaits: ZV.deleteWaits && !kV && !xV,
          note: VV
        }
      }
      if ("member" === QV.baf2CoopRole) return {
        ...ZV,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        leave: Wn(!0, yV ? eV.switch : eV.rename)
      };
      const EV = QV.baf2CoopManageHere;
      let BV = null;
      var jV;
      EV || yV ? vV && kV ? BV = {
        key: `${vn}islandsCoopDeleteMembers`
      } : vV && xV && (BV = {
        key: `${vn}islandsCoopKeepOwn`
      }) : BV = {
        key: null !== (jV = QV.baf2CoopLeft) && void 0 !== jV && jV.length ? `${vn}islandsCoopManageThereClaim` : `${vn}islandsCoopManageThere`
      };
      return {
        ...ZV,
        rename: Wn(!0, eV.rename && EV),
        delete: Wn(!yV, nV.delete && !kV && !xV),
        deleteWaits: ZV.deleteWaits && !kV && !xV,
        people: "enabled",
        peopleLabel: "players",
        unshare: Wn(EV && yV && !kV, eV.change),
        remove: EV,
        note: BV
      }
    }

    function Cn(VV) {
      var eV;
      const xV = VV.baf2IslandCoop;
      if ("owner" !== (null === xV || void 0 === xV ? void 0 : xV.baf2CoopRole) || void 0 !== xV.baf2CoopState || null === (eV = xV.baf2CoopLeft) || void 0 === eV || !eV.length) return null;
      const JV = VV.baf2IslandActive && xV.baf2CoopManageHere;
      return {
        left: xV.baf2CoopLeft,
        claim: JV,
        goThere: !JV && xV.baf2CoopManageHere
      }
    }

    function an(VV) {
      return VV.baf2CoopMembers.length >= VV.baf2CoopMax
    }

    function cn(VV, eV, xV) {
      return void 0 !== VV && eV < VV.answer && xV - VV.atMs < An
    }
    const hn = "buildAFactory2Game:";

    function Ln(VV, eV) {
      return {
        onKeyDown: xV => {
          xV.stopPropagation(), xV.nativeEvent.isComposing || 229 === xV.nativeEvent.keyCode || ("Enter" === xV.key ? (xV.preventDefault(), VV()) : "Escape" === xV.key && (xV.preventDefault(), eV()))
        }
      }
    }

    function fn(VV) {
      return {
        onKeyDown: eV => {
          "Escape" !== eV.key || eV.nativeEvent.isComposing || (eV.preventDefault(), eV.stopPropagation(), VV())
        }
      }
    }

    function mn(VV) {
      VV.currentTarget.select()
    }

    function Kn(VV, eV) {
      (0, JV.useEffect)((() => {
        var xV;
        VV && (null === (xV = eV.current) || void 0 === xV || xV.scrollIntoView({
          block: "nearest"
        }))
      }), [VV, eV])
    }

    function Hn(VV) {
      const [eV, xV] = (0, JV.useState)(null);
      return (0, JV.useEffect)((() => {
        const eV = document.querySelector(".UiRequests"),
          JV = VV.current;
        if (!eV || !JV || "undefined" === typeof ResizeObserver) return;
        const YV = () => {
          const VV = eV.getBoundingClientRect(),
            YV = JV.getBoundingClientRect(),
            UV = JV.parentElement,
            yV = UV && parseFloat(getComputedStyle(UV).paddingTop) || 0,
            pV = function(VV, eV, xV, JV) {
              if (!VV || VV.height <= 0 || VV.right <= eV.left || VV.left >= eV.right) return null;
              const YV = Math.max(JV, VV.bottom + 8);
              return {
                marginTop: Math.round(YV - JV),
                maxHeight: Math.max(0, Math.floor(xV - YV - JV))
              }
            }(VV, YV, window.innerHeight, yV);
          xV((VV => (null === VV || void 0 === VV ? void 0 : VV.marginTop) === (null === pV || void 0 === pV ? void 0 : pV.marginTop) && (null === VV || void 0 === VV ? void 0 : VV.maxHeight) === (null === pV || void 0 === pV ? void 0 : pV.maxHeight) ? VV : pV))
        };
        YV();
        const UV = new ResizeObserver(YV);
        return UV.observe(eV), window.addEventListener("resize", YV), () => {
          UV.disconnect(), window.removeEventListener("resize", YV)
        }
      }), [VV]), eV
    }

    function un() {
      (0, JV.useLayoutEffect)((() => (document.documentElement.classList.add("Baf2IslandsOverlayShown"), () => {
        document.documentElement.classList.remove("Baf2IslandsOverlayShown")
      })), [])
    }

    function sn(VV) {
      (0, JV.useEffect)((() => {
        var eV;
        null === (eV = VV.current) || void 0 === eV || eV.focus()
      }), [VV])
    }

    function Sn(VV) {
      const [eV, xV] = (0, JV.useState)(Date.now);
      return (0, JV.useEffect)((() => {
        const eV = window.setInterval((() => {
          xV(Date.now())
        }), VV);
        return () => {
          window.clearInterval(eV)
        }
      }), [VV]), eV
    }

    function In(VV) {
      let {
        tier: eV,
        t: xV
      } = VV;
      const {
        kind: JV,
        short: YV
      } = EV(eV), UV = rV(eV, kV), yV = xV(`${hn}${UV.key}`, {
        ...UV.params,
        name: xV(`${hn}${BV(eV).nameKey}`)
      });
      return (0, qU.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, qU.jsx)("span", {
          className: tY()("Baf2IslandTierPip", {
            Stage: "tier" !== JV
          }),
          "aria-hidden": "true",
          children: YV
        }), yV]
      })
    }

    function dn(VV) {
      let {
        note: eV,
        className: xV,
        t: JV
      } = VV;
      return (0, qU.jsx)("p", {
        className: tY()("Baf2IslandNote", xV),
        children: Gn(JV, eV.key, eV.names, eV.params)
      })
    }
    const On = "buildAFactory2Game:";

    function Vw(VV) {
      let {
        message: eV,
        arrivedAtMs: xV,
        close: YV,
        leave: UV
      } = VV;
      const yV = iy(),
        {
          t: pV
        } = (0, AY.A)(),
        QV = Sn(1e3),
        nV = (0, JV.useRef)(null);
      un(), (0, JV.useEffect)((() => {
        var VV;
        null === (VV = nV.current) || void 0 === VV || VV.focus()
      }), []);
      const wV = bn(xV, eV.baf2TransferInMs, QV),
        ZV = xV + eV.baf2TransferInMs - 1e3,
        [vV, rV] = (0, JV.useState)(null);
      (0, JV.useEffect)((() => {
        const VV = window.setTimeout((() => {
          rV(ZV)
        }), Math.max(0, ZV - Date.now()));
        return () => {
          window.clearTimeout(VV)
        }
      }), [ZV]);
      const kV = vV === ZV || QV >= ZV,
        bV = eV.baf2TransferIsland,
        EV = eV.baf2TransferOwner;
      return (0, qU.jsx)(by.e, {
        close: YV,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, qU.jsxs)("section", {
          ref: nV,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, qU.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, qU.jsxs)("div", {
              children: [(0, qU.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === EV ? Gn(pV, `${On}islandsTransferOwn`, {
                  island: bV
                }) : Gn(pV, `${On}islandsTransfer`, {
                  island: bV,
                  owner: EV
                })
              }), (0, qU.jsx)("p", {
                children: kV ? pV(`${On}islandsTransferNow`) : pV(`${On}islandsTransferIn`, {
                  time: bU(pV, wV)
                })
              })]
            }), (0, qU.jsx)(Ey.k, {
              ariaLabel: pV(`${On}islandsClose`),
              onClick: YV
            })]
          }), !kV && (0, qU.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, qU.jsx)("p", {
              className: "Baf2TransferNote",
              children: pV(`${On}islandsTransferNote`)
            }), (0, qU.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, qU.jsx)(Ey.f, {
                onClick: () => {
                  yV.send("baf2coopstay"), UV()
                },
                children: pV(`${On}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var ew = xV(1542),
      xw = xV(1182),
      Jw = xV.n(xw);
    const Yw = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const Uw = "buildAFactory2Game:",
      yw = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function pw(VV, eV, xV) {
      return void 0 === eV ? xV : "string" === typeof eV ? eV : Array.isArray(eV) ? eV.map((eV => "string" === typeof eV ? eV : "translationKey" in eV ? VV(eV.translationKey) : "")).join("") : VV(eV.translationKey)
    }

    function Qw(VV) {
      const eV = {};
      for (const [xV, JV] of Object.entries(null !== VV && void 0 !== VV ? VV : {})) eV[xV] = JV < 0 ? kU(JV) : JV.toLocaleString("en-US");
      return eV
    }

    function nw(VV, eV) {
      const xV = eV ? "touch" : "mouse";
      return {
        use: VV(`${Uw}lookUse_${xV}`),
        Use: VV(`${Uw}lookUseStart_${xV}`)
      }
    }
    const ww = (0, JV.memo)((function(VV) {
      let {
        item: eV
      } = VV;
      return (0, qU.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, qU.jsx)(XY.e, {
          itemName: eV,
          amount: 0
        })
      })
    }));

    function Zw(VV) {
      let {
        label: eV,
        percent: xV,
        progress: JV
      } = VV;
      return (0, qU.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, qU.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${eV}: ${JV}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": xV,
          children: (0, qU.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${xV}%`
            }
          })
        }), (0, qU.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: JV
        })]
      })
    }

    function vw(VV) {
      let {
        chips: eV
      } = VV;
      return (0, qU.jsx)("span", {
        className: "Baf2QuestChips",
        children: eV.map((VV => {
          let [eV, xV, JV] = VV;
          const YV = xV >= JV;
          return (0, qU.jsxs)("span", {
            className: tY()("Baf2QuestChip", {
              Met: YV
            }),
            children: [(0, qU.jsx)(ww, {
              item: eV
            }), (0, qU.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: YV ? `\u2713${JV}` : `${xV}/${JV}`
            })]
          }, eV)
        }))
      })
    }

    function rw(VV, eV) {
      const {
        key: xV,
        params: JV
      } = rV(eV, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return VV(`${Uw}${xV}`, {
        ...JV,
        name: VV(`${Uw}${BV(eV).nameKey}`)
      })
    }

    function kw(VV) {
      let {
        core: eV,
        t: xV
      } = VV;
      const [JV, YV] = eV, UV = YV > 0 ? Math.floor(100 * JV / YV) : 100;
      return (0, qU.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": xV(`${Uw}questCoreLabel`, {
          have: String(JV),
          need: String(YV)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": UV,
        children: [(0, qU.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: xV(`${Uw}questCore`, {
            percent: String(UV)
          })
        }), (0, qU.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, qU.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${UV}%`
            }
          })
        })]
      })
    }

    function bw(VV) {
      let {
        rows: eV,
        t: xV
      } = VV;
      const JV = eV.filter((VV => VV.done)).length;
      return (0, qU.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": xV(`${Uw}questStepsProgress`, {
          done: String(JV),
          total: String(eV.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": eV.length,
        "aria-valuenow": JV,
        children: eV.map((VV => (0, qU.jsx)("span", {
          className: tY()("Baf2QuestSegment", {
            Done: VV.done,
            Current: VV.current
          })
        }, VV.id)))
      })
    }
    const Ew = (0, JV.memo)(jw, Bw);

    function Bw(VV, eV) {
      const xV = xV => VV.view.itemNames[xV] === eV.view.itemNames[xV];
      return VV.t === eV.t && VV.extra === eV.extra && (null === VV.row.item || xV(VV.row.item)) && VV.row.madeFor.every(xV) && VV.row.also.every(xV) && Jw()(VV.row, eV.row)
    }

    function jw(VV) {
      let {
        row: eV,
        view: xV,
        t: JV,
        extra: YV
      } = VV;
      const {
        isTouchScreen: UV
      } = (0, BY.l)(["isTouchScreen"]), yV = eV.item ? function(VV, eV, xV) {
        return 1 !== xV && Yw.has(VV) ? PY(eV) : null
      }(eV.key, eV.item, eV.total) : null, pV = yV ? JV(yV) : eV.item ? pw(JV, xV.itemNames[eV.item], eV.item) : "", QV = eV.also.map((VV => pw(JV, xV.itemNames[VV], VV))), nV = QV.join(", "), wV = function(VV, eV) {
        var xV;
        return eV.length < 2 ? null !== (xV = eV[0]) && void 0 !== xV ? xV : "" : VV(`${Uw}listAnd`, {
          rest: eV.slice(0, -1).join(VV(`${Uw}listComma`)),
          last: eV[eV.length - 1]
        })
      }(JV, [pV, ...QV]), ZV = JV(`${Uw}${eV.key}`, {
        ...nw(JV, UV),
        ...Qw(eV.params),
        item: pV,
        also: nV,
        itemList: wV,
        total: String(eV.total)
      }), [vV, ...rV] = ZV.split("\n"), kV = eV.total > 1 && !eV.done && !eV.away;
      return (0, qU.jsxs)("li", {
        className: tY()("Baf2QuestStep", {
          Done: eV.done,
          Current: eV.current,
          JustFinished: eV.justFinished,
          Away: eV.away
        }),
        children: [!eV.done && null !== eV.item && (0, qU.jsx)(ww, {
          item: eV.item
        }), (eV.done || null === eV.item) && (0, qU.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: eV.done ? "\u2713" : "\u25cb"
        }), (0, qU.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, qU.jsx)("strong", {
            children: vV
          }), rV.length > 0 && (0, qU.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: rV.join(" ")
          }), !eV.done && eV.madeFor.length > 0 && (0, qU.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: JV("buildAFactory2Game:questRowFor", {
              items: eV.madeFor.map((VV => pw(JV, xV.itemNames[VV], VV))).join(" \u2192 ")
            })
          }), kV && (0, qU.jsx)(Zw, {
            label: vV,
            percent: Math.round(100 * eV.amount / eV.total),
            progress: `${eV.amount.toLocaleString("en-US")}/${eV.total.toLocaleString("en-US")}`
          }), !eV.done && !eV.away && eV.chips && eV.chips.length > 0 && (0, qU.jsx)(vw, {
            chips: eV.chips
          }), YV]
        })]
      })
    }
    const qw = "buildAFactory2Game:",
      tw = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      Fw = {
        on: `${qw}tutorialButtonOn`,
        hud: `${qw}tutorialButtonHud`,
        off: `${qw}tutorialButtonOff`
      },
      Tw = {
        on: `${qw}tutorialPickedOn`,
        hud: `${qw}tutorialPickedHud`,
        off: `${qw}tutorialPickedOff`
      };
    class Pw {
      constructor(VV, eV, xV) {
        this.commands = VV, this.quests = eV, this.toasts = xV
      }
      next() {
        const VV = function(VV) {
            return RV[(RV.indexOf(VV) + 1) % RV.length]
          }(this.quests.get().tutorial),
          eV = this.quests.setTutorial(VV);
        this.commands.send(`baf2tutorial ${VV} ${eV}`), this.toasts.show({
          baf2ToastText: [(0, DV.Vd)({
            translationKey: Tw[VV]
          }, DV.E.whiteUiText)],
          baf2ToastMs: 3e3,
          baf2ToastStyle: "baf2ToastInfo"
        })
      }
    }

    function Aw(VV, eV) {
      let [xV, JV] = eV;
      return VV(`${Uw}${xV}`, Qw(JV))
    }

    function Nw(VV) {
      let [eV, xV] = VV;
      return eV + JSON.stringify(xV)
    }

    function Xw(VV) {
      let {
        goal: eV,
        t: xV
      } = VV;
      return eV ? (0, qU.jsx)("span", {
        className: "Baf2BookGoal",
        children: xV(`${Uw}${eV}`)
      }) : null
    }

    function Mw(VV) {
      let {
        view: eV,
        t: xV
      } = VV;
      if (!eV.name) return null;
      const JV = hY(eV.rows);
      return (0, qU.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, qU.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: xV(`${Uw}currentQuest`)
        }), (0, qU.jsx)("strong", {
          className: "Baf2BookTitle",
          children: Aw(xV, eV.name)
        }), (0, qU.jsx)(Xw, {
          goal: eV.goal,
          t: xV
        }), JV.length > 1 && (0, qU.jsx)(bw, {
          rows: JV,
          t: xV
        }), (0, qU.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: eV.rows.map((VV => (0, qU.jsx)(Ew, {
            row: VV,
            view: eV,
            t: xV
          }, VV.id)))
        }), eV.reward && (0, qU.jsxs)("span", {
          className: "Baf2BookReward",
          children: [xV(`${Uw}questReward`), (0, qU.jsx)(ww, {
            item: eV.reward
          }), pw(xV, eV.itemNames[eV.reward], eV.reward)]
        })]
      })
    }

    function zw(VV) {
      let {
        quest: eV,
        upcoming: xV,
        t: JV
      } = VV;
      return (0, qU.jsxs)("li", {
        className: tY()("Baf2BookQuest", {
          Done: eV[3],
          Upcoming: xV
        }),
        children: [(0, qU.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: eV[3] ? "\u2713" : "\u25cb"
        }), (0, qU.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, qU.jsx)("strong", {
            className: "Baf2BookTitle",
            children: Aw(JV, eV)
          }), (0, qU.jsx)(Xw, {
            goal: eV[2],
            t: JV
          })]
        })]
      })
    }

    function Gw(VV) {
      let {
        done: eV,
        total: xV,
        t: JV
      } = VV;
      const YV = xV > 0 ? Math.round(100 * eV / xV) : 0,
        UV = JV(`${Uw}questBookChapterProgress`, {
          done: String(eV),
          total: String(xV)
        });
      return (0, qU.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, qU.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": UV,
          "aria-valuemin": 0,
          "aria-valuemax": xV,
          "aria-valuenow": eV,
          children: (0, qU.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${YV}%`
            }
          })
        }), (0, qU.jsx)("span", {
          className: "Baf2BookProgressText",
          children: UV
        })]
      })
    }

    function Ww(VV) {
      let {
        view: eV,
        tier: xV,
        quests: JV,
        t: YV
      } = VV;
      const UV = xV === eV.tier,
        yV = (null !== JV && void 0 !== JV ? JV : []).filter((VV => !VV[4])),
        pV = (null !== JV && void 0 !== JV ? JV : []).filter((VV => VV[4])),
        QV = yV.filter((VV => VV[3])).length,
        nV = UV && eV.name ? Nw(eV.name) : null,
        wV = yV.findIndex((VV => !VV[3] && Nw(VV) === nV));
      return (0, qU.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, qU.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, qU.jsx)("h3", {
            children: rw(YV, xV)
          }), yV.length > 0 && (0, qU.jsx)(Gw, {
            done: QV,
            total: yV.length,
            t: YV
          }), UV && eV.core && (0, qU.jsx)(kw, {
            core: eV.core,
            t: YV
          })]
        }), (0, qU.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === JV && UV && (0, qU.jsx)(Mw, {
            view: eV,
            t: YV
          }), yV.map(((VV, xV) => xV === wV ? (0, qU.jsx)(Mw, {
            view: eV,
            t: YV
          }, Nw(VV)) : (0, qU.jsx)(zw, {
            quest: VV,
            upcoming: !VV[3],
            t: YV
          }, Nw(VV))))]
        }), UV && eV.side && (0, qU.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, qU.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: YV(`${Uw}questSide`)
          }), (0, qU.jsx)("strong", {
            className: "Baf2BookTitle",
            children: Aw(YV, eV.side.name)
          }), (0, qU.jsx)(Xw, {
            goal: eV.side.goal,
            t: YV
          }), (0, qU.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, qU.jsx)(Ew, {
              row: eV.side.row,
              view: eV,
              t: YV
            })
          })]
        }), pV.length > 0 && (0, qU.jsxs)(qU.Fragment, {
          children: [(0, qU.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: YV(`${Uw}questBookSidesDone`)
          }), (0, qU.jsx)("ol", {
            className: "Baf2BookQuests",
            children: pV.map((VV => (0, qU.jsx)(zw, {
              quest: VV,
              upcoming: !1,
              t: YV
            }, Nw(VV))))
          })]
        })]
      })
    }

    function Rw(VV) {
      var eV, xV, UV;
      let {
        store: yV,
        tutorial: pV,
        close: QV
      } = VV;
      const {
        t: nV
      } = (0, AY.A)(), ZV = (0, ew.j)(gY, yV.get()), vV = null !== (eV = ZV.tier) && void 0 !== eV ? eV : 1, [rV, kV] = (0, JV.useState)(null), BV = (null === rV || void 0 === rV ? void 0 : rV.at) === vV ? rV.tier : vV, jV = (0, JV.useRef)(null), qV = null !== ZV.chapters;
      (0, JV.useEffect)((() => {
        var VV;
        jV.current && (jV.current.scrollTop = 0);
        const eV = null === (VV = jV.current) || void 0 === VV ? void 0 : VV.querySelector(".Baf2BookQuest.Current");
        if (jV.current && eV) {
          const VV = eV.getBoundingClientRect().bottom - jV.current.getBoundingClientRect().bottom;
          VV > 0 && (jV.current.scrollTop += Math.min(VV, eV.getBoundingClientRect().top - jV.current.getBoundingClientRect().top))
        }
      }), [BV, qV]);
      const tV = null === (xV = ZV.chapters) || void 0 === xV ? void 0 : xV.find((VV => {
        let [eV] = VV;
        return eV === BV
      }));
      return (0, qU.jsx)(by.e, {
        close: QV,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, qU.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: yw,
          children: [(0, qU.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, qU.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: nV(`${Uw}questBookTitle`)
            }), (0, qU.jsx)(Ey.m, {
              className: "Baf2BookTutorialButton",
              disabled: !ZV.tutorialKnown,
              ariaLabel: nV(Fw[ZV.tutorial]),
              title: nV(Fw[ZV.tutorial]),
              onClick: () => {
                pV.next()
              },
              children: (0, qU.jsx)(NY.b, {
                name: tw[ZV.tutorial]
              })
            }), (0, qU.jsx)(Ey.k, {
              onClick: QV
            })]
          }), (0, qU.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": nV(`${Uw}questBookChapters`),
            "data-pad-initial-area": !0,
            children: YV.slice(0, wV()).map(((VV, eV) => {
              const xV = eV + 1,
                {
                  kind: JV,
                  short: YV
                } = EV(xV),
                UV = bV(xV, vV),
                yV = UV ? nV(`${Uw}coreAtomicHidden`) : rw(nV, xV);
              return (0, qU.jsx)("li", {
                children: (0, qU.jsx)("button", {
                  type: "button",
                  className: tY()({
                    Stage: "tier" !== JV,
                    Atomic: "atomic" === JV,
                    Current: xV === vV,
                    Selected: xV === BV
                  }),
                  disabled: xV > vV,
                  "aria-pressed": xV === BV,
                  "aria-label": yV,
                  title: UV ? void 0 : yV,
                  onClick: () => {
                    kV({
                      tier: xV,
                      at: vV
                    })
                  },
                  children: UV ? "?" : YV
                })
              }, VV.nameKey)
            }))
          }), (0, qU.jsxs)("div", {
            ref: jV,
            className: "Baf2BookBody",
            children: [oY(ZV) && BV === vV && (0, qU.jsx)("p", {
              className: "Baf2BookEmpty",
              children: nV(`${Uw}questBookAllDone`)
            }), (0, qU.jsx)(Ww, {
              view: ZV,
              tier: BV,
              quests: null !== (UV = null === tV || void 0 === tV ? void 0 : tV[1]) && void 0 !== UV ? UV : null,
              t: nV
            })]
          })]
        })
      })
    }
    const gw = "buildAFactory2Game:";

    function Dw(VV) {
      let {
        tiers: eV,
        from: xV,
        tier: JV,
        shown: YV,
        Pr: UV
      } = VV;
      const {
        t: yV
      } = (0, AY.A)(), pV = eV.map(((VV, eV) => {
        const pV = xV + eV,
          {
            kind: QV,
            short: nV
          } = EV(pV),
          wV = bV(pV, JV);
        return (0, qU.jsx)("li", {
          children: (0, qU.jsx)("button", {
            type: "button",
            className: tY()({
              Stage: "tier" !== QV,
              Silhouette: wV,
              Reached: pV <= JV,
              Current: pV === JV,
              Next: pV === JV + 1,
              Selected: pV === YV
            }),
            disabled: wV,
            "aria-pressed": pV === YV,
            "aria-label": wV ? yV(`${gw}coreAtomicHidden`) : void 0,
            title: wV ? void 0 : yV(`${gw}${VV.nameKey}`),
            onClick: () => {
              UV(pV)
            },
            children: wV ? "?" : nV
          })
        }, VV.nameKey)
      }));
      return (0, qU.jsx)(qU.Fragment, {
        children: pV
      })
    }

    function iw(VV) {
      let {
        id: eV,
        label: xV,
        tiers: JV,
        from: YV,
        ...UV
      } = VV;
      return (0, qU.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, qU.jsx)("span", {
          id: eV,
          className: "Baf2CoreLadderLabel",
          children: xV
        }), (0, qU.jsx)("ol", {
          "aria-labelledby": eV,
          children: (0, qU.jsx)(Dw, {
            ...UV,
            tiers: JV,
            from: YV
          })
        })]
      })
    }

    function Cw(VV) {
      const {
        t: eV
      } = (0, AY.A)(), xV = YV.findIndex((VV => void 0 !== VV.stage)), JV = YV.findIndex((VV => void 0 !== VV.reactorTier)), UV = xV < 0 ? YV : YV.slice(0, xV), yV = xV < 0 ? [] : YV.slice(xV, JV < 0 ? void 0 : JV), QV = JV < 0 || !pV() ? [] : YV.slice(JV);
      return (0, qU.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, qU.jsx)(iw, {
          ...VV,
          id: "baf2CoreTiersLabel",
          label: eV(`${gw}coreTiersLabel`),
          tiers: UV,
          from: 1
        }), yV.length > 0 && (0, qU.jsx)(iw, {
          ...VV,
          id: "baf2CoreStagesLabel",
          label: eV(`${gw}coreStagesLabel`),
          tiers: yV,
          from: xV + 1
        }), QV.length > 0 && (0, qU.jsx)(iw, {
          ...VV,
          id: "baf2CoreAtomicLabel",
          label: eV(`${gw}coreAtomicLabel`),
          tiers: QV,
          from: JV + 1
        })]
      })
    }
    const aw = "buildAFactory2Game:";

    function ow(VV) {
      let {
        item: eV,
        itemNames: xV,
        children: JV
      } = VV;
      return (0, qU.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, qU.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, qU.jsx)(XY.e, {
            itemName: eV,
            amount: 0
          })
        }), (0, qU.jsx)(MY.b, {
          text: xV[eV]
        }), JV]
      })
    }

    function hw(VV) {
      const eV = new Map;
      for (const {
          block: JV
        }
        of VV.newDeposits) {
        var xV;
        eV.set(JV, (null !== (xV = eV.get(JV)) && void 0 !== xV ? xV : 0) + 1)
      }
      return [...eV]
    }

    function lw(VV) {
      let {
        value: eV,
        label: xV,
        more: JV
      } = VV;
      return (0, qU.jsxs)("li", {
        children: [(0, qU.jsx)("strong", {
          children: eV
        }), (0, qU.jsx)("span", {
          children: xV
        }), JV > 0 && (0, qU.jsxs)("em", {
          children: ["+", JV]
        })]
      })
    }

    function Lw(VV) {
      let {
        items: eV,
        itemNames: xV
      } = VV;
      const {
        t: YV
      } = (0, AY.A)(), [UV, yV] = (0, JV.useState)(null), pV = null !== UV && eV.includes(UV) ? UV : null;
      return (0, qU.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, qU.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: YV(`${aw}coreRewardUnlocks`)
        }), (0, qU.jsx)("ul", {
          children: eV.map((VV => (0, qU.jsx)("li", {
            children: (0, qU.jsx)("button", {
              type: "button",
              className: tY()("Baf2PanelIcon", {
                Picked: VV === pV
              }),
              title: (0, dY.e)(YV, VV),
              "aria-label": (0, dY.e)(YV, VV),
              "aria-pressed": VV === pV,
              onClick: () => {
                yV(VV === pV ? null : VV)
              },
              children: (0, qU.jsx)(XY.e, {
                itemName: VV,
                amount: 0
              })
            })
          }, VV)))
        }), (0, qU.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== pV && (0, qU.jsxs)(qU.Fragment, {
            children: [(0, qU.jsx)(MY.b, {
              text: xV[pV]
            }), " \xb7 ", (0, qU.jsx)(MY.b, {
              text: xV[GV(pV)]
            })]
          }), null === pV && YV(`${aw}coreRecipeTap`)]
        })]
      })
    }

    function fw(VV) {
      var eV, xV;
      let {
        def: JV,
        tier: YV,
        itemNames: UV
      } = VV;
      const {
        t: yV
      } = (0, AY.A)(), pV = YV > 1 ? BV(YV - 1) : void 0, QV = Math.round(2 * JV.islandRadius), nV = pV ? Math.round(2 * pV.islandRadius) : QV, wV = YV >= 3 ? FJ(YV) : null;
      return (0, qU.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, qU.jsxs)("ul", {
          className: tY()("Baf2CoreStats", {
            Four: null !== wV
          }),
          children: [(0, qU.jsx)(lw, {
            value: `${QV}\xd7${QV}`,
            label: yV(`${aw}coreStatIsland`),
            more: QV - nV
          }), (0, qU.jsx)(lw, {
            value: String(JV.machineAllowance),
            label: yV(`${aw}coreStatMachines`),
            more: JV.machineAllowance - (null !== (eV = null === pV || void 0 === pV ? void 0 : pV.machineAllowance) && void 0 !== eV ? eV : JV.machineAllowance)
          }), (0, qU.jsx)(lw, {
            value: String(JV.beltAllowance),
            label: yV(`${aw}coreStatBelts`),
            more: JV.beltAllowance - (null !== (xV = null === pV || void 0 === pV ? void 0 : pV.beltAllowance) && void 0 !== xV ? xV : JV.beltAllowance)
          }), null !== wV && (0, qU.jsx)(lw, {
            value: String(wV),
            label: yV(`${aw}coreStatStorage`),
            more: wV - (pV ? FJ(YV - 1) : wV)
          })]
        }), JV.reward && (0, qU.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, qU.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: yV(`${aw}coreRewardItem`)
          }), (0, qU.jsx)(ow, {
            item: JV.reward,
            itemNames: UV
          })]
        }), JV.newDeposits.length > 0 && (0, qU.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, qU.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: yV(JV.newDeposits.length > 1 ? `${aw}coreRewardDeposits` : `${aw}coreRewardDeposit`)
          }), hw(JV).map((VV => {
            let [eV, xV] = VV;
            return (0, qU.jsx)(ow, {
              item: eV,
              itemNames: UV,
              children: xV > 1 && ` \xd7${xV}`
            }, eV)
          }))]
        }), JV.unlocks.length > 0 && (0, qU.jsx)(Lw, {
          items: JV.unlocks,
          itemNames: UV
        }), (0, qU.jsx)(mw, {
          tier: YV
        })]
      })
    }

    function mw(VV) {
      let {
        tier: eV
      } = VV;
      const {
        t: xV
      } = (0, AY.A)(), JV = rY[eV];
      if (!JV) return null;
      const YV = vY(eV, 0, 0).barrierMax !== vY(eV - 1, 0, 0).barrierMax;
      return (0, qU.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, qU.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, qU.jsx)(XY.e, {
            itemName: YV ? yY.Chestplate : UY,
            amount: 0
          })
        }), xV(`${aw}gearPerkLine`, {
          perk: xV(`${aw}${JV}`)
        })]
      })
    }

    function Kw(VV, eV) {
      return null === VV ? eV : VV.value
    }

    function Hw(VV, eV, xV, JV) {
      let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === VV || xV - VV.atMs >= JV ? null : YV(VV.value, eV) ? VV.armed ? null : VV : VV.armed ? VV : {
        ...VV,
        armed: !0
      }
    }

    function uw(VV, eV) {
      const xV = eV.filter((eV => {
        var xV;
        return !1 !== (null === (xV = VV.get(eV)) || void 0 === xV ? void 0 : xV.value)
      }));
      for (const [JV, YV] of VV) YV.value && !eV.includes(JV) && xV.push(JV);
      return xV
    }

    function sw(VV, eV, xV, YV) {
      const [UV, yV] = (0, JV.useState)((() => new Map)), pV = () => {
        yV((eV => function(VV, eV, xV, JV) {
          var YV;
          let UV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            yV = null;
          for (const [pV, QV] of VV) {
            const YV = Hw(QV, eV(pV), xV, JV, UV);
            YV !== QV && (yV ??= new Map(VV), null === YV ? yV.delete(pV) : yV.set(pV, YV))
          }
          return null !== (YV = yV) && void 0 !== YV ? YV : VV
        }(eV, VV, Date.now(), xV, YV)))
      };
      (0, JV.useEffect)((() => {
        pV()
      }), [eV, xV]), (0, JV.useEffect)((() => {
        if (0 === UV.size) return;
        const VV = Math.min(...[...UV.values()].map((VV => VV.atMs))),
          eV = setTimeout(pV, Math.max(0, VV + xV - Date.now()) + 1);
        return () => {
          clearTimeout(eV)
        }
      }), [UV, eV, xV]);
      return [UV, (eV, xV) => {
        yV((JV => {
          const UV = new Map(JV);
          return UV.set(eV, function(VV, eV, xV) {
            return {
              value: VV,
              atMs: xV,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(VV, eV)
            }
          }(xV, VV(eV), Date.now(), YV)), UV
        }))
      }]
    }
    const Sw = "buildAFactory2Game:";

    function Iw(VV) {
      let {
        message: eV,
        itemNames: xV
      } = VV;
      const YV = iy(),
        {
          t: UV
        } = (0, AY.A)(),
        [yV, pV] = (0, JV.useState)(!1),
        [QV, nV] = function(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : My;
          const [xV, JV] = sw((eV => VV.includes(eV)), VV, eV, Object.is);
          return [uw(xV, VV), JV]
        }(eV.baf2CoreBankPaused),
        wV = new Set(QV),
        ZV = [...eV.baf2CoreBanked];
      for (const JV of wV) ZV.some((VV => {
        let [eV] = VV;
        return eV === JV
      })) || ZV.push([JV, 0]);
      return 0 === ZV.length ? null : (0, qU.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, qU.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": yV,
          onClick: () => {
            pV(!yV)
          },
          children: [(0, qU.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: UV(`${Sw}coreBankedLater`)
          }), (0, qU.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: ZV.map((VV => {
              let [eV, xV] = VV;
              const JV = wV.has(eV);
              return (0, qU.jsxs)("span", {
                className: tY()({
                  Paused: JV
                }),
                title: JV ? UV(`${Sw}coreBankPausedTag`) : void 0,
                children: [(0, qU.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, qU.jsx)(XY.e, {
                    itemName: eV,
                    amount: 0
                  })
                }), xV, JV && (0, qU.jsx)(NY.b, {
                  name: "pause"
                })]
              }, eV)
            }))
          }), (0, qU.jsx)(NY.b, {
            name: yV ? "angle-up" : "angle-down"
          })]
        }), yV && (0, qU.jsxs)(qU.Fragment, {
          children: [(0, qU.jsx)("ul", {
            children: ZV.map((VV => {
              let [eV, JV] = VV;
              const yV = wV.has(eV);
              return (0, qU.jsxs)("li", {
                children: [(0, qU.jsxs)(ow, {
                  item: eV,
                  itemNames: xV,
                  children: [(0, qU.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: JV
                  }), yV && (0, qU.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: UV(`${Sw}coreBankPausedTag`)
                  })]
                }), (0, qU.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, qU.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === JV,
                    onClick: () => {
                      YV.send(`baf2corewithdraw ${JV} ${eV}`)
                    },
                    children: UV(`${Sw}coreTake`)
                  }), (0, qU.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      YV.send(`${tV} ${eV}`), nV(eV, !yV)
                    },
                    children: UV(yV ? `${Sw}coreBankResume` : `${Sw}coreBankStop`)
                  })]
                })]
              }, eV)
            }))
          }), (0, qU.jsx)("p", {
            className: "Baf2CoreHint",
            children: UV(`${Sw}coreBankNote`)
          })]
        })]
      })
    }
    const dw = "buildAFactory2Game:";

    function Ow(VV) {
      const eV = Math.max(0, Math.floor(VV));
      return `${Math.floor(eV/60)}:${String(eV%60).padStart(2,"0")}`
    }

    function VZ(VV) {
      let {
        item: eV
      } = VV;
      return (0, qU.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, qU.jsx)(XY.e, {
          itemName: eV,
          amount: 0
        })
      })
    }

    function eZ() {
      return (0, qU.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, qU.jsx)(NY.b, {
          name: "bolt"
        })
      })
    }

    function xZ(VV) {
      let {
        charge: eV,
        hint: xV,
        itemNames: JV
      } = VV;
      const YV = iy(),
        {
          t: UV
        } = (0, AY.A)(),
        [yV, pV, QV, nV, wV, ZV, vV] = eV,
        [rV, kV] = function(VV) {
          var eV;
          let xV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : My,
            JV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [YV, UV] = sw((() => VV), VV, xV, JV);
          return [Kw(null !== (eV = YV.get("")) && void 0 !== eV ? eV : null, VV), VV => {
            UV("", VV)
          }]
        }(vV),
        bV = rV === vV ? ZV : !rV,
        EV = nV >= wV,
        BV = yV.find((VV => {
          let [, eV, xV] = VV;
          return xV < .9 * eV
        }));
      let jV = `${dw}coreChargeWaiting`,
        qV = {};
      return EV ? jV = `${dw}coreChargeDone` : rV ? jV = `${dw}coreChargeStopped` : bV && xV ? (jV = `${dw}${xV[0]}`, qV = {
        item: (0, dY.e)(UV, xV[1])
      }) : bV && BV ? (jV = `${dw}coreChargeShort`, qV = {
        item: (0, dY.e)(UV, BV[0])
      }) : bV && pV > 0 && !QV ? jV = `${dw}coreChargePower` : bV && (jV = `${dw}coreChargeRunning`), (0, qU.jsxs)("div", {
        className: tY()("Baf2CoreCharge", {
          Waiting: !bV && !EV,
          Done: EV
        }),
        children: [(0, qU.jsxs)("h4", {
          children: [UV(`${dw}coreChargeTitle`), (0, qU.jsx)("span", {
            children: UV(`${dw}coreChargeProgress`, {
              done: Ow(nV),
              need: Ow(wV)
            })
          })]
        }), (0, qU.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, qU.jsx)("div", {
            style: {
              width: 100 * Math.min(nV, wV) / wV + "%"
            }
          })
        }), (0, qU.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [yV.map((VV => {
            var eV;
            let [xV, YV, yV] = VV;
            const pV = yV >= .9 * YV;
            return (0, qU.jsxs)("li", {
              className: tY()({
                Done: pV,
                Short: bV && !pV
              }),
              children: [(0, qU.jsx)(VZ, {
                item: xV
              }), (0, qU.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, qU.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, qU.jsx)(MY.b, {
                    text: null !== (eV = JV[xV]) && void 0 !== eV ? eV : xV
                  }), (0, qU.jsx)("span", {
                    children: UV(`${dw}coreChargeItem`, {
                      now: String(yV),
                      need: String(YV)
                    })
                  })]
                }), (0, qU.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, qU.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*yV/YV)}%`
                    }
                  })
                })]
              })]
            }, xV)
          })), pV > 0 && (0, qU.jsxs)("li", {
            className: tY()("Baf2CoreChargePower", {
              Short: bV && !QV
            }),
            children: [(0, qU.jsx)(eZ, {}), (0, qU.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, qU.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, qU.jsx)("span", {
                  children: UV(`${dw}coreChargePowerRow`, {
                    power: IV(pV)
                  })
                })
              })
            })]
          })]
        }), (0, qU.jsx)("p", {
          className: "Baf2CoreHint",
          children: UV(jV, qV)
        }), !EV && (bV || rV) && (0, qU.jsx)("button", {
          type: "button",
          className: tY()("Baf2CoreChargeToggle", {
            Stopped: rV
          }),
          onClick: () => {
            YV.send(TV), kV(!rV)
          },
          children: UV(rV ? `${dw}coreChargeRestart` : `${dw}coreChargeStop`)
        })]
      })
    }

    function JZ(VV) {
      let {
        charge: eV,
        reached: xV,
        itemNames: JV
      } = VV;
      const {
        t: YV
      } = (0, AY.A)();
      return (0, qU.jsxs)("div", {
        className: tY()("Baf2CoreCharge", {
          Done: xV
        }),
        children: [(0, qU.jsxs)("h4", {
          children: [YV(`${dw}coreChargeTitle`), (0, qU.jsx)("span", {
            children: YV(`${dw}coreChargeSpecTime`, {
              time: Ow(eV.seconds)
            })
          })]
        }), (0, qU.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [eV.items.map((VV => {
            var eV;
            let {
              item: UV,
              amount: yV
            } = VV;
            return (0, qU.jsxs)("li", {
              className: tY()({
                Done: xV
              }),
              children: [(0, qU.jsx)(VZ, {
                item: UV
              }), (0, qU.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, qU.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, qU.jsx)(MY.b, {
                    text: null !== (eV = JV[UV]) && void 0 !== eV ? eV : UV
                  }), (0, qU.jsx)("span", {
                    children: YV(`${dw}coreChargeSpecItem`, {
                      need: String(yV)
                    })
                  })]
                })
              })]
            }, UV)
          })), eV.powerPerS > 0 && (0, qU.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, qU.jsx)(eZ, {}), (0, qU.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, qU.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, qU.jsx)("span", {
                  children: YV(`${dw}coreChargePowerRow`, {
                    power: IV(eV.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const YZ = "buildAFactory2Game:";

    function UZ(VV) {
      let {
        def: eV,
        reached: xV,
        banked: JV,
        itemNames: YV
      } = VV;
      const {
        t: UV
      } = (0, AY.A)();
      return (0, qU.jsx)("ul", {
        className: "Baf2CoreCost",
        children: eV.cost.map((VV => {
          let {
            item: eV,
            amount: yV
          } = VV;
          const pV = xV ? 0 : JV(eV);
          return (0, qU.jsx)("li", {
            children: (0, qU.jsx)(ow, {
              item: eV,
              itemNames: YV,
              children: (0, qU.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: pV > 0 ? UV(`${YZ}coreBankedFor`, {
                  amount: String(pV),
                  total: String(yV)
                }) : `\xd7${yV}`
              })
            })
          }, eV)
        }))
      })
    }

    function yZ(VV, eV) {
      if (eV >= wV()) return VV(`${YZ}coreMaxTier`);
      const xV = nV[eV + 1];
      return xV && !xV.startsWith("upgradeCore") ? VV(`${YZ}coreGateQuest`, {
        quest: VV(`${YZ}quest_${xV}`)
      }) : VV(`${YZ}coreGateClosed`)
    }

    function pZ() {
      const {
        t: VV
      } = (0, AY.A)(), eV = iy(), xV = (0, JV.useRef)(null), YV = (0, JV.useRef)(Date.now());
      return Kn(!0, xV), (0, qU.jsx)("div", {
        ref: xV,
        className: "Baf2CoreGrow",
        children: (0, qU.jsx)(Ey.m, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - YV.current >= 600 && eV.send(qV)
          },
          children: VV(`${YZ}coreGrow`)
        })
      })
    }

    function QZ(VV) {
      let {
        message: eV,
        itemNames: xV,
        next: JV
      } = VV;
      const YV = iy(),
        {
          t: UV
        } = (0, AY.A)(),
        yV = eV.baf2CoreTier,
        pV = eV.baf2CoreReady,
        QV = eV.baf2CoreNeeds.filter((VV => {
          let [, eV, xV, JV] = VV;
          return JV > 0 && eV < xV
        })),
        nV = eV.baf2CoreNeeds.every((VV => {
          let [, eV, xV] = VV;
          return eV >= xV
        })),
        wV = eV.baf2CoreKeep;
      return (0, qU.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, qU.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [pV && (0, qU.jsx)(pZ, {}), (0, qU.jsx)("h3", {
            children: UV(`${YZ}coreBring`)
          }), (0, qU.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: eV.baf2CoreNeeds.map((VV => {
              let [eV, JV, yV, pV] = VV;
              return (0, qU.jsxs)("li", {
                className: tY()({
                  Done: JV >= yV
                }),
                children: [(0, qU.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, qU.jsx)(XY.e, {
                    itemName: eV,
                    amount: 0
                  })
                }), (0, qU.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, qU.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, qU.jsx)(MY.b, {
                      text: xV[eV]
                    }), (0, qU.jsxs)("span", {
                      children: [JV, "/", yV]
                    })]
                  }), (0, qU.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, qU.jsx)("div", {
                      style: {
                        width: 100 * JV / yV + "%"
                      }
                    }), pV > 0 && (0, qU.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * pV / yV + "%"
                      }
                    })]
                  })]
                }), pV > 0 && JV < yV && (0, qU.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    YV.send(`${FV} ${eV}`)
                  },
                  children: UV(`${YZ}coreDeposit`, {
                    amount: String(pV)
                  })
                })]
              }, eV)
            }))
          }), eV.baf2CoreCharge && (0, qU.jsx)(xZ, {
            charge: eV.baf2CoreCharge,
            hint: eV.baf2CoreChargeHint,
            itemNames: xV
          }), !pV && QV.length > 1 && (0, qU.jsx)(Ey.m, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              YV.send(qV)
            },
            children: UV(`${YZ}coreHandOver`)
          }), !pV && void 0 !== wV && (0, qU.jsx)("p", {
            className: "Baf2CoreHint",
            children: UV(`${YZ}coreKeepRest`, {
              item: (0, dY.e)(UV, wV)
            })
          }), !pV && !nV && 0 === QV.length && void 0 === wV && (0, qU.jsx)("p", {
            className: "Baf2CoreHint",
            children: UV(`${YZ}coreNothingHeld`)
          }), (0, qU.jsx)(Iw, {
            message: eV,
            itemNames: xV
          })]
        }), (0, qU.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, qU.jsx)("h3", {
            children: UV(`${YZ}coreRewards`)
          }), (0, qU.jsx)(fw, {
            def: JV,
            tier: yV + 1,
            itemNames: xV
          })]
        })]
      })
    }

    function nZ(VV) {
      let {
        message: eV,
        itemNames: xV,
        shown: JV
      } = VV;
      const {
        t: YV
      } = (0, AY.A)(), UV = eV.baf2CoreTier, yV = BV(JV), pV = JV <= UV, QV = new Map(eV.baf2CoreBanked), nV = !jV(UV, PV(eV)) && JV === UV;
      return (0, qU.jsxs)("div", {
        className: tY()("Baf2CoreBody", {
          Locked: !pV
        }),
        children: [(0, qU.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, qU.jsx)("h3", {
            children: YV(pV ? `${YZ}coreItTook` : `${YZ}coreItNeeds`)
          }), 0 === yV.cost.length && (0, qU.jsx)("p", {
            className: "Baf2CoreHint",
            children: YV(`${YZ}coreTierStart`)
          }), yV.cost.length > 0 && (0, qU.jsx)(UZ, {
            def: yV,
            reached: pV,
            banked: VV => {
              var eV;
              return function(VV, eV, xV, JV) {
                let YV = VV;
                for (let yV = eV + 2; yV <= xV; yV++) {
                  var UV;
                  const VV = BV(yV).cost.find((VV => VV.item === JV)),
                    eV = Math.min(YV, null !== (UV = null === VV || void 0 === VV ? void 0 : VV.amount) && void 0 !== UV ? UV : 0);
                  if (yV === xV) return eV;
                  YV -= eV
                }
                return 0
              }(null !== (eV = QV.get(VV)) && void 0 !== eV ? eV : 0, UV, JV, VV)
            },
            itemNames: xV
          }), yV.charge && (0, qU.jsx)(JZ, {
            charge: yV.charge,
            reached: pV,
            itemNames: xV
          }), nV && (0, qU.jsxs)(qU.Fragment, {
            children: [(0, qU.jsx)("p", {
              className: "Baf2CoreHint",
              children: yZ(YV, UV)
            }), (0, qU.jsx)(Iw, {
              message: eV,
              itemNames: xV
            })]
          })]
        }), (0, qU.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, qU.jsx)("h3", {
            children: YV(pV ? `${YZ}coreGave` : `${YZ}coreLockedRewards`)
          }), (0, qU.jsx)(fw, {
            def: yV,
            tier: JV,
            itemNames: xV
          })]
        })]
      })
    }

    function wZ(VV, eV) {
      const {
        key: xV,
        params: JV
      } = rV(eV - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return VV(`${YZ}${xV}`, JV)
    }
    const ZZ = "buildAFactory2Game:",
      vZ = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      rZ = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function kZ(VV) {
      let {
        view: eV,
        close: xV,
        askIslands: YV
      } = VV;
      const {
        t: UV
      } = (0, AY.A)(), [yV, pV] = (0, JV.useState)(!1);
      (0, JV.useEffect)((() => {
        if (!yV) return;
        const VV = window.setTimeout((() => {
          pV(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(VV)
        }
      }), [yV]);
      const {
        message: QV,
        itemNames: nV
      } = eV, wV = QV.baf2CoreTier, ZV = BV(wV), vV = jV(wV, PV(QV)), [bV, EV] = QV.baf2CoreMachines, [qV, tV] = QV.baf2CoreBelts, FV = QV.baf2CoreStorage, TV = QV.baf2CoreReady, [AV, NV] = (0, JV.useState)(null), XV = (null === AV || void 0 === AV ? void 0 : AV.at) === wV && AV.ready === TV ? AV.tier : vV ? wV + 1 : wV;
      let MV = "coreTierLocked";
      XV <= wV ? MV = "coreTierReached" : XV === wV + 1 && (MV = "coreTierNext");
      const zV = UV(`${ZZ}${BV(XV).nameKey}`),
        GV = XV === wV + 1 ? vV : null,
        WV = rV(XV, {
          tier: MV,
          stage: vZ[MV],
          atomic: rZ[MV]
        }),
        RV = UV(`${ZZ}${WV.key}`, {
          ...WV.params,
          name: zV
        }),
        gV = rV(wV, kV),
        DV = UV(`${ZZ}${gV.key}`, {
          ...gV.params,
          name: UV(`${ZZ}${ZV.nameKey}`)
        });
      return (0, qU.jsx)(by.e, {
        close: xV,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, qU.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, qU.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, qU.jsxs)("div", {
              children: [(0, qU.jsx)("h2", {
                id: "baf2CoreTitle",
                children: UV(`${ZZ}coreTitle`)
              }), void 0 !== QV.baf2CoreIslandName && (0, qU.jsx)("p", {
                className: "Baf2CoreIsland",
                children: QV.baf2CoreIslandName
              }), (0, qU.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, qU.jsx)("span", {
                  children: DV
                }), (0, qU.jsx)("span", {
                  className: tY()({
                    Full: bV >= EV
                  }),
                  children: UV(`${ZZ}coreMachineCount`, {
                    amount: String(bV),
                    total: String(EV)
                  })
                }), (0, qU.jsx)("span", {
                  className: tY()({
                    Full: qV >= tV
                  }),
                  children: UV(`${ZZ}coreBeltCount`, {
                    amount: String(qV),
                    total: String(tV)
                  })
                }), void 0 !== FV && (0, qU.jsx)("span", {
                  className: tY()({
                    Full: FV[0] >= FV[1]
                  }),
                  children: UV(`${ZZ}coreStorageCount`, {
                    amount: String(FV[0]),
                    total: String(FV[1])
                  })
                })]
              })]
            }), (0, qU.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [QV.baf2CoreIslands && (0, qU.jsx)(Ey.f, {
                className: "Baf2CoreIslandsButton",
                disabled: yV,
                onClick: () => {
                  pV(!0), YV()
                },
                children: UV(`${ZZ}islandsOpenButton`)
              }), (0, qU.jsx)(Ey.k, {
                onClick: xV
              })]
            })]
          }), (0, qU.jsx)(Cw, {
            tier: wV,
            shown: XV,
            Pr: VV => {
              NV({
                tier: VV,
                at: wV,
                ready: TV
              })
            }
          }), (0, qU.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [RV, XV > wV + 1 && (0, qU.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: wZ(UV, XV)
            })]
          }), 6 === XV && XV > wV && (0, qU.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: UV(`${ZZ}coreStagesNote`)
          }), 11 === XV && XV > wV && (0, qU.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: UV(`${ZZ}coreAtomicNote`)
          }), GV && (0, qU.jsx)(QZ, {
            message: QV,
            itemNames: nV,
            next: GV
          }), !GV && (0, qU.jsx)(nZ, {
            message: QV,
            itemNames: nV,
            shown: XV
          })]
        })
      })
    }
    const bZ = {
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
    const EZ = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: xU,
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

    function BZ(VV) {
      return VV.baf2DropCometOreOnly ? "dropCometOre" : VV.baf2DropCometIsotope ? "seed" === VV.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function jZ(VV) {
      let {
        message: eV,
        quests: xV,
        close: YV,
        leave: UV
      } = VV;
      const yV = iy(),
        {
          t: pV
        } = (0, AY.A)(),
        QV = (0, ew.j)(gY, xV.get()),
        nV = function(VV) {
          var eV;
          if (!gV(VV.tutorial)) return null;
          const xV = VV.rows.find((VV => VV.current)),
            JV = xV ? bZ[xV.key] : void 0;
          return null !== (eV = null !== JV && void 0 !== JV ? JV : VV.side ? bZ[VV.side.row.key] : void 0) && void 0 !== eV ? eV : null
        }(QV),
        wV = null === QV.tier || UU(QV.tier),
        ZV = wV ? EZ : EZ.filter((VV => {
          let {
            item: eV
          } = VV;
          return eV !== xU
        })),
        [vV, rV] = (0, JV.useState)(null),
        kV = null !== vV && void 0 !== vV ? vV : !eV.baf2DropFoundSalvage && wV,
        bV = eV.baf2DropRuinDistance,
        EV = eV.baf2DropComet,
        BV = eV.baf2DropOldWorks,
        jV = eV.baf2DropGrove,
        qV = function(VV) {
          return 2 + Number(void 0 !== VV.baf2DropComet) + Number(!!VV.baf2DropOwedComet || void 0 !== VV.baf2DropOwedWaitMinutes) + Number(void 0 !== VV.baf2DropDigDistance) + Number(void 0 !== VV.baf2DropOldWorks) + Number(void 0 !== VV.baf2DropGrove)
        }(eV),
        tV = VV => {
          yV.send(function(VV) {
            return `baf2drop ${VV}`
          }(VV)), UV()
        };
      let FV = pV("buildAFactory2Game:dropRuinNone");
      if (null !== bV) {
        let VV = eV.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        eV.baf2DropRuinOldWorks && (VV = "dropRuinOldWorks");
        const xV = void 0 === eV.baf2DropRuinCluster ? pV("buildAFactory2Game:dropRuinOpen") : pV("buildAFactory2Game:dropRuinCluster", {
          count: String(eV.baf2DropRuinCluster)
        });
        FV = `${pV(`buildAFactory2Game:${VV}`,{distance:String(bV)})} ${xV}`
      }
      let TV = pV("buildAFactory2Game:dropBelowDescription");
      void 0 !== eV.baf2DropBelowLook && (TV = pV("buildAFactory2Game:dropBelowLook", {
        look: pV(eV.baf2DropBelowLook)
      }));
      const PV = "buildAFactory2Game:wildsRegion_survivorGrove" === eV.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        AV = bU(pV, 60 * function(VV) {
          const [eV, xV] = (0, JV.useState)((() => Date.now())), [YV, UV] = (0, JV.useState)(eV);
          return (0, JV.useEffect)((() => {
            const VV = Date.now();
            xV(VV), UV(VV)
          }), [VV]), (0, JV.useEffect)((() => {
            const VV = window.setInterval((() => {
              UV(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(VV)
            }
          }), []), Math.max(1, VV.baf2DropRenewMinutes - Math.floor((YV - eV) / 6e4))
        }(eV)),
        NV = function(VV, eV, xV) {
          return "ruin" === VV && !xV || "owed" === VV && !eV.baf2DropOwedComet ? null : VV
        }(nV, eV, null !== bV),
        XV = function(VV) {
          for (var eV = arguments.length, xV = new Array(eV > 1 ? eV - 1 : 0), JV = 1; JV < eV; JV++) xV[JV - 1] = arguments[JV];
          return tY()("Baf2DropTile", ...xV, {
            Wanted: NV === VV
          })
        };
      return (0, qU.jsx)(by.e, {
        close: YV,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, qU.jsxs)("section", {
          className: tY()("Baf2Panel Baf2DropMap", {
            Many: qV >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, qU.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, qU.jsxs)("div", {
              children: [(0, qU.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: pV("buildAFactory2Game:dropMapTitle")
              }), (0, qU.jsx)("p", {
                children: pV("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, qU.jsx)(Ey.k, {
              onClick: YV
            })]
          }), (0, qU.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== EV && (0, qU.jsxs)(Ey.w, {
              className: XV("comet", "Baf2DropComet"),
              onClick: () => {
                tV("comet")
              },
              children: [(0, qU.jsx)("strong", {
                children: pV("buildAFactory2Game:dropComet")
              }), (0, qU.jsx)("span", {
                children: pV(`buildAFactory2Game:${BZ(eV)}`, {
                  distance: String(EV)
                })
              })]
            }), eV.baf2DropOwedComet && (0, qU.jsxs)(Ey.w, {
              className: XV("owed", "Baf2DropComet"),
              onClick: () => {
                tV("owed")
              },
              children: [(0, qU.jsx)("strong", {
                children: pV("buildAFactory2Game:dropOwedComet")
              }), (0, qU.jsx)("span", {
                children: eV.baf2DropOwedIsotope ? pV("buildAFactory2Game:dropOwedIsotopeDescription") : pV("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== eV.baf2DropOwedWaitMinutes && (0, qU.jsxs)(Ey.w, {
              className: XV("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, qU.jsx)("strong", {
                children: pV("buildAFactory2Game:dropOwedComet")
              }), (0, qU.jsx)("span", {
                children: pV("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(eV.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, qU.jsxs)(Ey.f, {
              className: XV("below"),
              onClick: () => {
                tV("below")
              },
              children: [(0, qU.jsx)("strong", {
                children: pV("buildAFactory2Game:dropBelow")
              }), (0, qU.jsx)("span", {
                children: TV
              })]
            }), void 0 !== eV.baf2DropDigDistance && (0, qU.jsxs)(Ey.q, {
              className: XV("dig"),
              onClick: () => {
                tV("dig")
              },
              children: [(0, qU.jsx)("strong", {
                children: pV("buildAFactory2Game:dropDig")
              }), (0, qU.jsx)("span", {
                children: pV("buildAFactory2Game:dropDigDescription", {
                  distance: String(eV.baf2DropDigDistance),
                  y: kU(eV.baf2DropDigY)
                })
              })]
            }), void 0 !== jV && (0, qU.jsxs)(Ey.q, {
              className: XV("grove", "Baf2DropGrove"),
              onClick: () => {
                tV("grove")
              },
              children: [(0, qU.jsx)("strong", {
                children: pV("buildAFactory2Game:dropGrove")
              }), (0, qU.jsx)("span", {
                children: pV(`buildAFactory2Game:${PV}`, {
                  distance: String(jV)
                })
              })]
            }), (0, qU.jsxs)(Ey.m, {
              className: XV("ruin"),
              disabled: null === bV,
              onClick: () => {
                tV("ruin")
              },
              children: [(0, qU.jsx)("strong", {
                children: pV("buildAFactory2Game:dropRuin")
              }), (0, qU.jsx)("span", {
                children: FV
              })]
            }), void 0 !== BV && (0, qU.jsxs)(Ey.E, {
              className: XV("works"),
              onClick: () => {
                tV("works")
              },
              children: [(0, qU.jsx)("strong", {
                children: pV("buildAFactory2Game:dropOldWorks")
              }), (0, qU.jsx)("span", {
                children: pV("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(BV)
                })
              })]
            })]
          }), (0, qU.jsx)("p", {
            className: "Baf2DropRenew",
            children: pV("buildAFactory2Game:dropRenew", {
              time: AV
            })
          }), (0, qU.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: kV,
            onToggle: VV => {
              VV.currentTarget.open !== kV && rV(VV.currentTarget.open)
            },
            children: [(0, qU.jsx)("summary", {
              children: pV("buildAFactory2Game:dropSalvageWhat")
            }), (0, qU.jsx)("p", {
              children: pV("buildAFactory2Game:dropSalvageIntro")
            }), (0, qU.jsx)("ul", {
              children: ZV.map((VV => {
                let {
                  item: eV,
                  nameKey: xV,
                  useKey: JV,
                  params: YV
                } = VV;
                return (0, qU.jsxs)("li", {
                  children: [(0, qU.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, qU.jsx)(XY.e, {
                      itemName: eV,
                      amount: 0
                    })
                  }), (0, qU.jsxs)("span", {
                    children: [(0, qU.jsx)("strong", {
                      children: pV(xV)
                    }), ": ", pV(JV, YV)]
                  })]
                }, eV)
              }))
            })]
          })]
        })
      })
    }
    const qZ = "buildAFactory2Game:";

    function tZ(VV, eV) {
      return VV.sendIslandEdit(`baf2coopleave ${eV.baf2IslandId}`)
    }

    function FZ(VV) {
      let {
        card: eV,
        canRename: xV,
        done: YV,
        t: UV
      } = VV;
      const yV = iy(),
        [pV, QV] = (0, JV.useState)(eV.baf2IslandName),
        nV = En(pV),
        wV = "" === nV || Bn(nV),
        ZV = () => {
          !wV && xV && (nV !== eV.baf2IslandName ? YV(yV.sendIslandEdit(`baf2islandrename ${eV.baf2IslandId} ${nV}`)) : YV(null))
        },
        vV = () => {
          YV(null)
        };
      return (0, qU.jsxs)("div", {
        className: "Baf2IslandForm",
        ...fn(vV),
        children: [(0, qU.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [UV(`${qZ}islandsRenameLabel`), (0, qU.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: pV,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: mn,
            onChange: VV => {
              QV(VV.target.value)
            },
            ...Ln(ZV, vV)
          })]
        }), "" === nV && (0, qU.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: UV(`${qZ}islandsRenameEmpty`)
        }), Bn(nV) && (0, qU.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: UV(`${qZ}islandsNameReserved`)
        }), (0, qU.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, qU.jsx)(Ey.q, {
            disabled: wV || !xV,
            onClick: ZV,
            children: UV(`${qZ}islandsRenameSave`)
          }), (0, qU.jsx)(Ey.f, {
            onClick: vV,
            children: UV(`${qZ}islandsCancel`)
          })]
        })]
      })
    }

    function TZ(VV) {
      let {
        card: eV,
        canDelete: xV,
        done: YV,
        t: UV
      } = VV;
      const yV = iy(),
        [pV, QV] = (0, JV.useState)(""),
        nV = function(VV, eV) {
          return En(VV).toLowerCase() === En(eV).toLowerCase()
        }(pV, eV.baf2IslandName),
        wV = () => {
          nV && xV && YV(yV.sendIslandEdit(`baf2islanddelete ${eV.baf2IslandId}`))
        },
        ZV = () => {
          YV(null)
        },
        vV = zn("name"),
        [rV, kV = ""] = UV(`${qZ}islandsDeleteConfirm`, {
          name: vV
        }).split(vV);
      return (0, qU.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...fn(ZV),
        children: [(0, qU.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, qU.jsxs)("span", {
            children: [rV, (0, qU.jsx)("strong", {
              children: eV.baf2IslandName
            }), kV]
          }), (0, qU.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: pV,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: mn,
            onChange: VV => {
              QV(VV.target.value)
            },
            ...Ln(wV, ZV)
          })]
        }), Cn(eV) && (0, qU.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: UV(`${qZ}islandsDeleteLeftBack`)
        }), (0, qU.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, qU.jsx)(Ey.E, {
            disabled: !nV || !xV,
            onClick: wV,
            children: UV(`${qZ}islandsDeleteForGood`)
          }), (0, qU.jsx)(Ey.f, {
            onClick: ZV,
            children: UV(`${qZ}islandsCancel`)
          })]
        })]
      })
    }

    function PZ(VV) {
      let {
        members: eV,
        t: xV
      } = VV;
      const JV = eV.length;
      return (0, qU.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, qU.jsxs)("span", {
          children: [1 === JV ? xV(`${qZ}islandsPlayersOne`) : xV(`${qZ}islandsPlayers`, {
            count: String(JV)
          }), " "]
        }), eV.map(((VV, eV) => (0, qU.jsxs)("span", {
          className: tY()("Baf2IslandMember", {
            Here: VV.baf2MemberHere
          }),
          title: VV.baf2MemberHere ? xV(`${qZ}islandsPlayerHere`) : void 0,
          children: [VV.baf2MemberName, eV < JV - 1 ? ", " : ""]
        }, VV.baf2MemberKey)))]
      })
    }

    function AZ(VV) {
      let {
        card: eV,
        answered: xV,
        nowMs: YV,
        t: UV
      } = VV;
      const yV = iy(),
        [pV, QV] = (0, JV.useState)(new Map),
        nV = Cn(eV);
      if (!nV) return null;
      return (0, qU.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, qU.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: UV(`${qZ}islandsLeftTitle`)
        }), (0, qU.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: nV.left.map((VV => {
            const JV = VV.baf2LeftKey,
              wV = cn(pV.get(JV), xV, YV),
              ZV = function(VV) {
                return 1 === VV ? [`${vn}islandsLeftItemsOne`] : [`${vn}islandsLeftItems`, {
                  count: String(VV)
                }]
              }(VV.baf2LeftItems);
            return (0, qU.jsx)("li", {
              className: tY()("Baf2IslandPerson", {
                Pending: wV
              }),
              children: (0, qU.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, qU.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: VV.baf2LeftName
                }), (0, qU.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: UV(ZV[0], ZV[1])
                }), nV.claim && (0, qU.jsx)(Ey.q, {
                  className: "Baf2IslandPersonButton",
                  disabled: wV,
                  onClick: () => {
                    (VV => {
                      const xV = yV.sendIslandEdit(`baf2coopclaim ${eV.baf2IslandId} ${VV}`);
                      QV((eV => new Map(eV).set(VV, {
                        atMs: Date.now(),
                        answer: xV
                      })))
                    })(JV)
                  },
                  children: UV(`${qZ}islandsClaim`)
                })]
              })
            }, JV)
          }))
        }), nV.goThere && (0, qU.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: UV(`${qZ}islandsClaimGoThere`)
        })]
      })
    }

    function NZ(VV) {
      let {
        card: eV,
        view: xV,
        blocked: YV,
        maxIslands: UV,
        answered: yV,
        nowMs: pV,
        done: QV,
        openSocial: nV,
        t: wV
      } = VV;
      const ZV = iy(),
        [vV, rV] = (0, JV.useState)(new Map),
        [kV, bV] = (0, JV.useState)(new Map),
        [EV, BV] = (0, JV.useState)(null),
        jV = (0, JV.useRef)(null);
      sn(jV);
      const qV = eV.baf2IslandId,
        tV = eV.baf2IslandCoop,
        FV = null !== tV && void 0 !== tV && tV.baf2CoopMembers.some((VV => VV.baf2MemberKey === EV)) ? EV : null,
        TV = function(VV, eV) {
          const xV = VV.baf2IslandCoop;
          return xV && an(xV) || null !== eV ? void 0 : VV.baf2IslandInvitable
        }(eV, YV),
        PV = function(VV, eV) {
          const xV = VV.baf2IslandCoop;
          return xV && an(xV) ? {
            key: `${vn}islandsCoopFull`,
            params: {
              max: String(xV.baf2CoopMax)
            }
          } : void 0 !== VV.baf2IslandInvitable && null === eV || xV && !xV.baf2CoopManageHere ? null : "degraded" === eV || "stuck" === eV ? {
            key: `${vn}islandsInviteNotLoaded`
          } : null === eV || function(VV) {
            return "notHome" === VV || "wilds" === VV || "visiting" === VV
          }(eV) || Fn(eV) ? {
            key: `${vn}islandsInviteGoThere`
          } : {
            key: `${vn}islandsInviteBusy`
          }
        }(eV, YV),
        AV = () => {
          var VV;
          BV(null), null === (VV = jV.current) || void 0 === VV || VV.focus()
        };
      return (0, qU.jsxs)("div", {
        ref: jV,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...fn(null === FV ? QV : AV),
        children: [tV && (0, qU.jsxs)(qU.Fragment, {
          children: [(0, qU.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: wV(`${qZ}islandsPlayersTitle`, {
              count: String(tV.baf2CoopMembers.length),
              max: String(tV.baf2CoopMax)
            })
          }), (0, qU.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: tV.baf2CoopMembers.map(((VV, eV) => {
              const JV = VV.baf2MemberKey,
                YV = cn(vV.get(JV), yV, pV);
              return (0, qU.jsxs)("li", {
                className: tY()("Baf2IslandPerson", {
                  Pending: YV
                }),
                children: [(0, qU.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, qU.jsx)("span", {
                    className: tY()("Baf2IslandPersonName", {
                      Here: VV.baf2MemberHere
                    }),
                    children: VV.baf2MemberName
                  }), VV.baf2MemberHere && (0, qU.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: wV(`${qZ}islandsPlayerHere`)
                  }), 0 === eV && (0, qU.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: wV(`${qZ}islandsPlayerOwner`)
                  }), xV.remove && eV > 0 && !YV && FV !== JV && (0, qU.jsx)(Ey.G, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var VV;
                      BV(JV), null === (VV = jV.current) || void 0 === VV || VV.focus()
                    },
                    children: wV(`${qZ}islandsRemove`)
                  })]
                }), FV === JV && (0, qU.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, qU.jsx)("p", {
                    children: Gn(wV, `${qZ}islandsRemoveConfirm`, {
                      player: VV.baf2MemberName
                    })
                  }), (0, qU.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, qU.jsx)(Ey.E, {
                      onClick: () => {
                        (VV => {
                          const eV = ZV.sendIslandEdit(`baf2coopremove ${qV} ${VV.baf2MemberKey}`);
                          rV((xV => new Map(xV).set(VV.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: eV
                          }))), AV()
                        })(VV)
                      },
                      children: wV(`${qZ}islandsRemoveYes`)
                    }), (0, qU.jsx)(Ey.f, {
                      onClick: AV,
                      children: wV(`${qZ}islandsCancel`)
                    })]
                  })]
                })]
              }, JV)
            }))
          })]
        }), (void 0 !== TV || null !== PV) && (0, qU.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: wV(`${qZ}islandsInviteTitle`)
        }), !tV && (void 0 !== TV || null !== PV) && (0, qU.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: wV(`${qZ}islandsInviteShareNote`)
        }), 0 === (null === TV || void 0 === TV ? void 0 : TV.length) && (0, qU.jsx)(XZ, {
          openSocial: nV,
          t: wV
        }), void 0 !== TV && TV.length > 0 && (0, qU.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: TV.map((VV => {
            const eV = !0 === VV.baf2InvitableSent || cn(kV.get(VV.baf2InvitableId), yV, pV);
            return (0, qU.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, qU.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, qU.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: VV.baf2InvitableName
                }), VV.baf2InvitableFull && !eV && (0, qU.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: wV(`${qZ}islandsInviteTheirFull`, {
                    max: String(UV)
                  })
                }), (eV || !VV.baf2InvitableFull) && (0, qU.jsx)(Ey.q, {
                  className: "Baf2IslandPersonButton",
                  disabled: eV,
                  onClick: () => {
                    (VV => {
                      const eV = ZV.sendIslandEdit(`baf2coopinvite ${qV} ${VV}`);
                      bV((xV => new Map(xV).set(VV, {
                        atMs: Date.now(),
                        answer: eV
                      })))
                    })(VV.baf2InvitableId)
                  },
                  children: wV(eV ? `${qZ}islandsInvited` : `${qZ}islandsInvite`)
                })]
              })
            }, VV.baf2InvitableId)
          }))
        }), PV && (0, qU.jsx)(dn, {
          note: PV,
          t: wV
        }), (0, qU.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, qU.jsx)(Ey.f, {
            onClick: QV,
            children: wV(`${qZ}islandsDone`)
          })
        })]
      })
    }

    function XZ(VV) {
      let {
        openSocial: eV,
        t: xV
      } = VV;
      return (0, qU.jsxs)(qU.Fragment, {
        children: [(0, qU.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: xV(eV ? `${qZ}islandsInviteNobody` : `${qZ}islandsInviteNobodyGuest`)
        }), eV && (0, qU.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, qU.jsx)(Ey.f, {
            onClick: eV,
            children: xV("socialBar:social")
          })
        })]
      })
    }

    function MZ(VV) {
      let {
        className: eV,
        text: xV,
        ConfirmButton: YV,
        confirmLabel: UV,
        canConfirm: yV,
        send: pV,
        done: QV,
        t: nV
      } = VV;
      const wV = (0, JV.useRef)(null);
      sn(wV);
      const ZV = () => {
        QV(null)
      };
      return (0, qU.jsxs)("div", {
        ref: wV,
        tabIndex: -1,
        className: tY()("Baf2IslandForm", eV),
        ...fn(ZV),
        children: [(0, qU.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: xV
        }), (0, qU.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, qU.jsx)(YV, {
            disabled: !yV,
            onClick: () => {
              yV && QV(pV())
            },
            children: UV
          }), (0, qU.jsx)(Ey.f, {
            onClick: ZV,
            children: nV(`${qZ}islandsCancel`)
          })]
        })]
      })
    }

    function zZ(VV) {
      return "hidden" !== VV
    }

    function GZ(VV) {
      var eV, xV;
      let {
        card: YV,
        keepOwn: UV,
        blocked: yV,
        maxIslands: pV,
        serverNowMs: QV,
        nowMs: nV,
        actions: wV,
        full: ZV,
        waits: vV,
        answered: rV,
        mode: kV,
        setMode: bV,
        pending: EV,
        onSent: BV,
        switchTo: jV,
        leave: qV,
        coopOn: tV,
        openSocial: FV,
        t: TV
      } = VV;
      const PV = iy(),
        AV = YV.baf2IslandActive,
        NV = AV ? null : function(VV, eV) {
          if (VV <= 0) return null;
          const xV = eV - VV;
          if (xV < wU) return [`${vn}islandsPlayedJustNow`];
          if (xV < rn) return [`${vn}islandsPlayedMinutes`, {
            minutes: String(Math.floor(xV / wU))
          }];
          if (xV < kn) return [`${vn}islandsPlayedHours`, {
            hours: String(Math.floor(xV / rn))
          }];
          const JV = Math.floor(xV / kn);
          return 1 === JV ? [`${vn}islandsPlayedDay`] : [`${vn}islandsPlayedDays`, {
            days: String(JV)
          }]
        }(YV.baf2IslandLastPlayedMs, QV),
        XV = void 0 === (MV = YV.baf2IslandItems) ? null : 0 === MV ? [`${vn}islandsItemsNone`] : 1 === MV ? [`${vn}islandsItemsOne`] : [`${vn}islandsItems`, {
          count: String(MV)
        }];
      var MV;
      const zV = function(VV) {
          return VV ? 1 === VV ? [`${vn}islandsWaitingOne`] : [`${vn}islandsWaiting`, {
            count: String(VV)
          }] : null
        }(YV.baf2IslandWaiting),
        GV = YV.baf2IslandUnreadable,
        WV = YV.baf2IslandCoop,
        RV = Dn(YV, wV, UV, ZV, tV, yV),
        gV = (0, JV.useRef)(null);
      Kn(null !== kV, gV);
      const DV = () => {
          var VV;
          bV(null), null === (VV = gV.current) || void 0 === VV || VV.focus()
        },
        iV = (VV, eV) => {
          DV(), null !== VV && BV(VV, eV)
        },
        CV = (VV, eV) => TV(`${qZ}${VV}`, {
          time: bU(TV, eV)
        });
      return (0, qU.jsxs)("li", {
        ref: gV,
        tabIndex: -1,
        className: tY()("Baf2IslandCard", {
          Active: AV,
          Pending: EV,
          Shared: void 0 !== WV
        }),
        children: [(0, qU.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, qU.jsx)("strong", {
            className: "Baf2IslandName",
            children: YV.baf2IslandName
          }), AV && (0, qU.jsx)("span", {
            className: "Baf2IslandBadge",
            children: TV(`${qZ}islandsOnThis`)
          }), WV && (0, qU.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: TV(`${qZ}islandsShared`)
          })]
        }), "member" === (null === WV || void 0 === WV ? void 0 : WV.baf2CoopRole) && (0, qU.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: Gn(TV, `${qZ}islandsSharedBy`, {
            owner: WV.baf2CoopOwner
          })
        }), void 0 !== GV && (0, qU.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: TV("newer" === GV ? `${qZ}islandsUnreadable` : `${qZ}islandsDamaged`)
        }), "corrupt" === GV && ZV && (0, qU.jsx)("p", {
          className: "Baf2IslandStats",
          children: TV(`${qZ}islandsDamagedFull`)
        }), void 0 === GV && (0, qU.jsxs)(qU.Fragment, {
          children: [(0, qU.jsx)(In, {
            tier: YV.baf2IslandTier,
            t: TV
          }), (0, qU.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, qU.jsx)("span", {
              children: 1 === YV.baf2IslandQuestsDone ? TV(`${qZ}islandsQuestsDoneOne`) : TV(`${qZ}islandsQuestsDone`, {
                count: String(YV.baf2IslandQuestsDone)
              })
            }), (0, qU.jsx)("span", {
              children: 1 === YV.baf2IslandMachines ? TV(`${qZ}islandsMachinesOne`) : TV(`${qZ}islandsMachines`, {
                count: String(YV.baf2IslandMachines)
              })
            }), XV && (0, qU.jsx)("span", {
              children: TV(XV[0], XV[1])
            }), zV && (0, qU.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: TV(zV[0], zV[1])
            }), NV && (0, qU.jsx)("span", {
              children: TV(NV[0], NV[1])
            })]
          })]
        }), WV && void 0 === WV.baf2CoopState && "people" !== kV && (0, qU.jsx)(PZ, {
          members: WV.baf2CoopMembers,
          t: TV
        }), null === kV && (0, qU.jsx)(AZ, {
          card: YV,
          answered: rV,
          nowMs: nV,
          t: TV
        }), RV.note && (0, qU.jsx)(dn, {
          note: RV.note,
          className: tY()({
            Unreachable: void 0 !== (null === WV || void 0 === WV ? void 0 : WV.baf2CoopState)
          }),
          t: TV
        }), "rename" === kV && (0, qU.jsx)(FZ, {
          card: YV,
          canRename: "enabled" === RV.rename,
          done: iV,
          t: TV
        }), "delete" === kV && (0, qU.jsx)(TZ, {
          card: YV,
          canDelete: "enabled" === RV.delete,
          done: VV => {
            iV(VV, WV ? "delete" : void 0)
          },
          t: TV
        }), "people" === kV && (0, qU.jsx)(NZ, {
          card: YV,
          view: RV,
          blocked: yV,
          maxIslands: pV,
          answered: rV,
          nowMs: nV,
          done: DV,
          openSocial: FV,
          t: TV
        }), "leave" === kV && (0, qU.jsx)(MZ, {
          className: "Leave",
          text: Gn(TV, `${qZ}islandsLeaveConfirm`, {
            island: YV.baf2IslandName,
            owner: null !== (eV = null === (xV = YV.baf2IslandCoop) || void 0 === xV ? void 0 : xV.baf2CoopOwner) && void 0 !== eV ? eV : ""
          }),
          ConfirmButton: Ey.E,
          confirmLabel: TV(`${qZ}islandsLeaveYes`),
          canConfirm: "enabled" === RV.leave,
          send: () => tZ(PV, YV),
          done: VV => {
            iV(VV, "leave"), null !== VV && AV && qV()
          },
          t: TV
        }), "unshare" === kV && (0, qU.jsx)(MZ, {
          className: "Unshare",
          text: Gn(TV, `${qZ}islandsStopSharingConfirm`, {
            island: YV.baf2IslandName
          }),
          ConfirmButton: Ey.q,
          confirmLabel: TV(`${qZ}islandsStopSharing`),
          canConfirm: "enabled" === RV.unshare,
          send: () => PV.sendIslandEdit(`baf2coopunshare ${YV.baf2IslandId}`),
          done: VV => {
            iV(VV), null !== VV && qV()
          },
          t: TV
        }), null === kV && !EV && (0, qU.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": YV.baf2IslandName,
          children: [zZ(RV.switch) && (0, qU.jsx)(Ey.q, {
            disabled: "enabled" !== RV.switch,
            onClick: jV,
            children: "tryAgain" === RV.switchLabel ? TV(`${qZ}islandsTryAgain`) : vV.switch > 0 ? CV("islandsSwitchIn", vV.switch) : TV(`${qZ}islandsSwitch`)
          }), zZ(RV.rename) && (0, qU.jsx)(Ey.f, {
            disabled: "enabled" !== RV.rename,
            onClick: () => {
              bV("rename")
            },
            children: TV(`${qZ}islandsRename`)
          }), zZ(RV.people) && (0, qU.jsx)(Ey.f, {
            disabled: "enabled" !== RV.people,
            onClick: () => {
              bV("people")
            },
            children: TV("players" === RV.peopleLabel ? `${qZ}islandsPlayersButton` : `${qZ}islandsInviteButton`)
          }), zZ(RV.unshare) && (0, qU.jsx)(Ey.f, {
            disabled: "enabled" !== RV.unshare,
            onClick: () => {
              bV("unshare")
            },
            children: TV(`${qZ}islandsStopSharing`)
          }), zZ(RV.dismiss) && (0, qU.jsx)(Ey.f, {
            disabled: "enabled" !== RV.dismiss,
            onClick: () => {
              BV(tZ(PV, YV), "dismiss"), AV && qV()
            },
            children: TV(`${qZ}islandsDismiss`)
          }), zZ(RV.leave) && (0, qU.jsx)(Ey.G, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== RV.leave,
            onClick: () => {
              bV("leave")
            },
            children: AV && vV.switch > 0 ? CV("islandsLeaveIn", vV.switch) : TV(`${qZ}islandsLeave`)
          }), zZ(RV.delete) && (0, qU.jsx)(Ey.G, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== RV.delete,
            onClick: () => {
              bV("delete")
            },
            children: vV.change > 0 && RV.deleteWaits ? CV("islandsDeleteIn", vV.change) : TV(`${qZ}islandsDelete`)
          })]
        })]
      })
    }
    const WZ = "buildAFactory2Game:";

    function RZ(VV) {
      let {
        invite: eV,
        actions: xV,
        full: YV,
        maxIslands: UV,
        waitSeconds: yV,
        focus: pV,
        focused: QV,
        join: nV,
        decline: wV,
        t: ZV
      } = VV;
      const [vV, rV] = (0, JV.useState)(!1), kV = (0, JV.useRef)(null);
      Kn(vV, kV), (0, JV.useEffect)((() => {
        var VV;
        pV && (rV(!0), null === (VV = kV.current) || void 0 === VV || VV.focus(), QV())
      }), [pV, QV]);
      const bV = function(VV, eV, xV, JV, YV) {
          return xV ? {
            join: !1,
            note: {
              key: `${vn}islandsJoinTooMany`,
              params: {
                max: String(JV)
              }
            }
          } : VV.baf2InvitePlayers >= YV ? {
            join: !1,
            note: {
              key: `${vn}islandsJoinFull`
            }
          } : {
            join: eV.switch,
            note: null
          }
        }(eV, xV, YV, UV, 10),
        EV = eV.baf2InviteIsland,
        BV = eV.baf2InvitePlayers,
        jV = () => {
          var VV;
          rV(!1), null === (VV = kV.current) || void 0 === VV || VV.focus()
        },
        qV = yV > 0 && null === bV.note ? ZV(`${WZ}islandsJoinIn`, {
          time: bU(ZV, yV)
        }) : ZV(`${WZ}islandsJoin`);
      return (0, qU.jsxs)("li", {
        ref: kV,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...vV ? fn(jV) : {},
        children: [(0, qU.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, qU.jsx)("strong", {
            className: "Baf2IslandName",
            children: EV
          })
        }), (0, qU.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: Gn(ZV, `${WZ}islandsInvitedBy`, {
            owner: eV.baf2InviteOwner
          })
        }), (0, qU.jsx)(In, {
          tier: eV.baf2InviteTier,
          t: ZV
        }), (0, qU.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, qU.jsx)("span", {
            children: 1 === BV ? ZV(`${WZ}islandsPlayersCountOne`) : ZV(`${WZ}islandsPlayersCount`, {
              count: String(BV)
            })
          })
        }), bV.note && (0, qU.jsx)(dn, {
          note: bV.note,
          t: ZV
        }), vV && (0, qU.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: Gn(ZV, `${WZ}islandsJoinConfirm`, {
            island: EV
          })
        }), !vV && (0, qU.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": EV,
          children: [(0, qU.jsx)(Ey.q, {
            disabled: !bV.join,
            onClick: () => {
              var VV;
              rV(!0), null === (VV = kV.current) || void 0 === VV || VV.focus()
            },
            children: qV
          }), (0, qU.jsx)(Ey.f, {
            onClick: wV,
            children: ZV(`${WZ}islandsDecline`)
          })]
        }), vV && (0, qU.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, qU.jsx)(Ey.q, {
            disabled: !bV.join,
            onClick: nV,
            children: ZV(`${WZ}islandsJoinYes`)
          }), (0, qU.jsx)(Ey.f, {
            onClick: jV,
            children: ZV(`${WZ}islandsCancel`)
          })]
        })]
      })
    }

    function gZ(VV) {
      let {
        invites: eV,
        actions: xV,
        full: JV,
        maxIslands: YV,
        waitSeconds: UV,
        focus: yV,
        focused: pV,
        leave: QV,
        declined: nV,
        t: wV
      } = VV;
      const ZV = iy();
      return (0, qU.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, qU.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: wV(`${WZ}islandsInvitesTitle`)
        }), (0, qU.jsx)("ul", {
          className: "Baf2IslandCards",
          children: eV.map((VV => {
            const eV = VV.baf2InviteId;
            return (0, qU.jsx)(RZ, {
              invite: VV,
              actions: xV,
              full: JV,
              maxIslands: YV,
              waitSeconds: UV,
              focus: yV === eV,
              focused: pV,
              join: () => {
                ZV.send(`baf2coopaccept ${eV}`), QV()
              },
              decline: () => {
                ZV.send(`baf2coopdecline ${eV}`), nV(eV)
              },
              t: wV
            }, eV)
          }))
        })]
      })
    }
    const DZ = "buildAFactory2Game:";

    function iZ(VV) {
      let {
        cards: eV,
        activeName: xV,
        canStart: YV,
        waitSeconds: UV,
        leave: yV,
        t: pV
      } = VV;
      const QV = iy(),
        [nV, wV] = (0, JV.useState)(!1),
        [ZV, vV] = (0, JV.useState)(""),
        rV = (0, JV.useRef)(null);
      Kn(nV, rV), (0, JV.useEffect)((() => {
        var VV;
        nV && (null === (VV = rV.current) || void 0 === VV || VV.focus())
      }), [nV]);
      const kV = jn(eV),
        bV = En(ZV),
        EV = Bn(bV),
        BV = () => {
          YV && !EV && (QV.send("" === bV || bV === kV ? sV : `${sV} ${bV}`), yV())
        },
        jV = () => {
          var VV;
          wV(!1), null === (VV = rV.current) || void 0 === VV || VV.focus()
        };
      return (0, qU.jsxs)("li", {
        ref: rV,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...nV ? fn(jV) : {},
        children: [(0, qU.jsx)("strong", {
          className: "Baf2IslandName",
          children: pV(`${DZ}islandsNewTitle`)
        }), !nV && (0, qU.jsx)("p", {
          className: "Baf2IslandStats",
          children: pV(`${DZ}islandsNewNote`)
        }), nV && (0, qU.jsxs)(qU.Fragment, {
          children: [(0, qU.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: Gn(pV, `${DZ}islandsNewConfirm`, {
              name: xV
            })
          }), (0, qU.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [pV(`${DZ}islandsNewNameLabel`), (0, qU.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: ZV,
              placeholder: kV,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: mn,
              onChange: VV => {
                vV(VV.target.value)
              },
              ...Ln(BV, jV)
            })]
          }), EV && (0, qU.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: pV(`${DZ}islandsNameReserved`)
          })]
        }), (0, qU.jsxs)("div", {
          className: tY()("Baf2IslandButtons", {
            Stacked: nV
          }),
          children: [(0, qU.jsx)(Ey.q, {
            disabled: !YV || nV && EV,
            onClick: () => {
              if (!nV) return vV(kV), void wV(!0);
              BV()
            },
            children: UV > 0 ? pV(`${DZ}islandsNewIn`, {
              time: bU(pV, UV)
            }) : pV(nV ? `${DZ}islandsNewConfirmButton` : `${DZ}islandsNew`)
          }), nV && (0, qU.jsx)(Ey.f, {
            onClick: jV,
            children: pV(`${DZ}islandsCancel`)
          })]
        })]
      })
    }

    function CZ(VV) {
      var eV, xV;
      let {
        message: YV,
        arrivedAtMs: UV,
        close: yV,
        leave: pV,
        openSocial: QV
      } = VV;
      const nV = iy(),
        {
          t: wV
        } = (0, AY.A)(),
        ZV = Sn(1e3),
        [vV, rV] = (0, JV.useState)(null),
        [kV, bV] = (0, JV.useState)(new Map),
        [EV, BV] = (0, JV.useState)(new Set),
        jV = YV.baf2IslandCards,
        qV = function(VV, eV, xV, JV) {
          return (null !== VV && void 0 !== VV ? VV : []).filter((VV => eV + VV.baf2InviteLeftMs > xV && !JV.has(VV.baf2InviteId)))
        }(YV.baf2IslandsInvites, UV, ZV, EV),
        tV = qV.map((VV => VV.baf2InviteId)).join(" "),
        FV = (0, JV.useRef)(null),
        TV = Hn(FV);
      un(), (0, JV.useEffect)((() => {
        var VV, eV;
        null !== (VV = FV.current) && void 0 !== VV && VV.contains(document.activeElement) || (null === (eV = FV.current) || void 0 === eV || eV.focus())
      }), [YV, tV]), (0, JV.useEffect)((() => {
        bV((VV => function(VV, eV, xV, JV) {
          const YV = new Map;
          for (const UV of eV) {
            const eV = VV.get(UV.baf2IslandId);
            eV && (void 0 !== eV.untilGone || JV < eV.answer) && Nn(eV, UV, xV) && YV.set(UV.baf2IslandId, eV)
          }
          return YV.size === VV.size ? VV : YV
        }(VV, YV.baf2IslandCards, Date.now(), YV.baf2IslandsAnswered)))
      }), [YV]);
      const PV = bn(UV, YV.baf2IslandsWaitMs, ZV),
        AV = YV.baf2IslandsBlocked,
        NV = Tn(AV, PV),
        XV = function(VV, eV) {
          const xV = Tn(VV, 0);
          return {
            switch: xV.switch ? eV : 0,
            change: xV.change ? eV : 0
          }
        }(AV, PV),
        MV = jV.length >= YV.baf2IslandsMax,
        zV = jV.length > 0,
        GV = function(VV, eV, xV) {
          return VV + Math.max(0, xV - eV)
        }(YV.baf2IslandsNowMs, UV, ZV),
        WV = null !== (eV = null === (xV = jV.find((VV => VV.baf2IslandActive))) || void 0 === xV ? void 0 : xV.baf2IslandName) && void 0 !== eV ? eV : "",
        RV = function(VV) {
          const eV = VV.filter(gn).length;
          return eV <= 1 && eV < VV.length
        }(jV),
        gV = !0 === YV.baf2IslandsCoop,
        DV = function(VV, eV) {
          const xV = VV.find((VV => VV.baf2IslandActive)),
            JV = null === xV || void 0 === xV ? void 0 : xV.baf2IslandCoop;
          return xV && "member" === (null === JV || void 0 === JV ? void 0 : JV.baf2CoopRole) ? {
            key: `${vn}islandsKeepOwnMember`,
            names: {
              owner: JV.baf2CoopOwner,
              island: xV.baf2IslandName
            }
          } : {
            key: eV ? `${vn}islandsKeepOwn` : `${vn}islandsKeepOwnSolo`
          }
        }(jV, gV),
        [iV, CV] = (0, JV.useState)(null);
      (0, JV.useEffect)((() => {
        void 0 !== YV.baf2IslandsFocusInvite && CV(YV.baf2IslandsFocusInvite)
      }), [YV]);
      const aV = (0, JV.useCallback)((() => {
          CV(null)
        }), []),
        oV = vV ? jV.find((VV => VV.baf2IslandId === vV.id)) : void 0,
        cV = vV && oV && "hidden" !== Dn(oV, NV, RV, MV, gV, AV)[vV.mode] ? vV : null;
      return (0, qU.jsx)(by.e, {
        close: yV,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, qU.jsxs)("section", {
          ref: FV,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: TV ? {
            marginTop: `${TV.marginTop}px`,
            maxHeight: `${TV.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, qU.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, qU.jsxs)("div", {
              children: [(0, qU.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: wV(`${DZ}islandsTitle`)
              }), zV && (0, qU.jsx)("p", {
                children: wV(`${DZ}islandsSubtitle`, {
                  count: String(jV.length),
                  max: String(YV.baf2IslandsMax)
                })
              })]
            }), (0, qU.jsx)(Ey.k, {
              ariaLabel: wV(`${DZ}islandsClose`),
              onClick: yV
            })]
          }), (0, qU.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== AV && (0, qU.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: Gn(wV, qn(AV, tn(jV)), {
                island: WV
              })
            }), zV && qV.length > 0 && (0, qU.jsx)(gZ, {
              invites: qV,
              actions: NV,
              full: MV,
              maxIslands: YV.baf2IslandsMax,
              waitSeconds: XV.switch,
              focus: iV,
              focused: aV,
              leave: pV,
              declined: VV => {
                BV((eV => new Set(eV).add(VV)))
              },
              t: wV
            }), zV && (0, qU.jsxs)(qU.Fragment, {
              children: [MV && (0, qU.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: wV(`${DZ}islandsFull`, {
                  max: String(YV.baf2IslandsMax)
                })
              }), (0, qU.jsx)("p", {
                className: "Baf2IslandsNote",
                children: Gn(wV, DV.key, DV.names)
              }), (0, qU.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [jV.map((VV => {
                  const eV = VV.baf2IslandId;
                  return (0, qU.jsx)(GZ, {
                    card: VV,
                    keepOwn: RV,
                    coopOn: gV,
                    openSocial: QV,
                    blocked: AV,
                    maxIslands: YV.baf2IslandsMax,
                    serverNowMs: GV,
                    nowMs: ZV,
                    actions: NV,
                    full: MV,
                    waits: XV,
                    answered: YV.baf2IslandsAnswered,
                    mode: (null === cV || void 0 === cV ? void 0 : cV.id) === eV ? cV.mode : null,
                    setMode: VV => {
                      rV(null === VV ? null : {
                        id: eV,
                        mode: VV
                      })
                    },
                    pending: Nn(kV.get(eV), VV, ZV),
                    onSent: (xV, JV) => {
                      bV((YV => {
                        const UV = {
                          atMs: Date.now(),
                          from: VV.baf2IslandName,
                          answer: xV
                        };
                        return new Map(YV).set(eV, JV ? {
                          ...UV,
                          untilGone: JV
                        } : UV)
                      }))
                    },
                    leave: pV,
                    switchTo: () => {
                      nV.send(`baf2islandswitch ${eV}`), pV()
                    },
                    t: wV
                  }, eV)
                })), !MV && (0, qU.jsx)(iZ, {
                  cards: jV,
                  activeName: WV,
                  canStart: NV.change,
                  waitSeconds: XV.change,
                  leave: pV,
                  t: wV
                })]
              })]
            })]
          })]
        })
      })
    }
    var aZ = xV(5529);
    const oZ = {
        all: "buildAFactory2Game:terminalChip_all",
        recent: "buildAFactory2Game:terminalChip_recent",
        TU: "buildAFactory2Game:terminalChip_ores",
        bars: "buildAFactory2Game:terminalChip_bars",
        parts: "buildAFactory2Game:terminalChip_parts",
        nuclear: "buildAFactory2Game:terminalChip_nuclear",
        farm: "buildAFactory2Game:terminalChip_farm",
        other: "buildAFactory2Game:terminalChip_other"
      },
      cZ = Object.keys(oZ),
      hZ = new Set([...Object.keys(se), ...[...De.Press.recipes, ...De["Wire Mill"].recipes].map((VV => VV.output))]),
      lZ = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      LZ = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      fZ = / Bar$|Alloy$/,
      mZ = /Porkchop|Beef|Mutton|Venison|Steak/,
      KZ = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;
    const HZ = (0, JV.memo)((function(VV) {
      let {
        item: eV,
        name: xV,
        amount: JV,
        selected: YV,
        small: UV,
        onPick: yV
      } = VV;
      return (0, qU.jsxs)("button", {
        type: "button",
        className: tY()("Baf2TermTile", {
          On: YV,
          Small: UV
        }),
        "aria-label": `${xV}: ${JV}`,
        "aria-pressed": YV,
        onClick: () => {
          yV(eV)
        },
        children: [(0, qU.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, qU.jsx)(XY.e, {
            itemName: eV,
            amount: 0
          })
        }), (0, qU.jsx)("span", {
          className: "Baf2TermCount",
          children: rU(JV, 1e4)
        }), !UV && (0, qU.jsx)("span", {
          className: "Baf2TermName",
          children: xV
        })]
      })
    }));

    function uZ(VV) {
      let {
        store: eV,
        close: xV,
        send: YV
      } = VV;
      const {
        t: UV
      } = (0, AY.A)(), {
        isTouchScreen: yV
      } = (0, BY.l)(["isTouchScreen"]);
      ! function(VV) {
        const [eV, xV] = (0, JV.useState)(VV.version);
        (0, JV.useEffect)((() => (xV(VV.version), VV.subscribe((() => {
          xV(VV.version)
        })))), [VV])
      }(eV);
      const [pV, QV] = (0, JV.useState)("all"), [nV, wV] = (0, JV.useState)(!1), [ZV, vV] = (0, JV.useState)(""), [rV, kV] = (0, JV.useState)(""), [bV, EV] = (0, JV.useState)(null), [BV, jV] = (0, JV.useState)(!1), [qV, tV, FV] = function() {
        const VV = (0, JV.useRef)(null),
          [eV, xV] = (0, JV.useState)(!1),
          YV = () => {
            const eV = VV.current;
            xV(null !== eV && eV.scrollLeft + eV.clientWidth < eV.scrollWidth - 1)
          };
        return (0, JV.useEffect)(YV), (0, JV.useEffect)((() => {
          const eV = VV.current;
          if (!eV) return;
          const xV = new ResizeObserver(YV);
          return xV.observe(eV), () => {
            xV.disconnect()
          }
        }), []), [VV, eV, YV]
      }(), TV = (0, JV.useMemo)((() => new Map), [UV]), PV = VV => {
        let eV = TV.get(VV);
        return void 0 === eV && (eV = function(VV, eV) {
          const xV = /^(.+) \((.+)\)$/.exec(VV);
          return xV ? eV(xV[2], xV[1]) : VV
        }((0, dY.e)(UV, VV), ((VV, eV) => UV("buildAFactory2Game:terminalTileKind", {
          kind: VV,
          base: eV
        }))), TV.set(VV, eV)), eV
      }, AV = eV.isReadOnly(), NV = BV && !AV, XV = eV.recent(), MV = eV.items(), zV = rV.trim().toLowerCase(), GV = NV ? eV.heldItems(bV) : ("recent" === pV ? XV : MV).filter((VV => {
        const eV = PV(VV);
        return ("all" === pV || "recent" === pV || function(VV) {
          return yU(VV) ? "farm" : lZ.test(VV) ? "nuclear" : fZ.test(VV) ? "bars" : mZ.test(VV) ? "farm" : LZ.test(VV) ? "TU" : hZ.has(VV) ? "parts" : KZ.test(VV) ? "farm" : "other"
        }(VV) === pV) && ("" === zV || eV.toLowerCase().includes(zV)) && ("" === ZV || eV.toUpperCase().startsWith(ZV))
      })), WV = new Set(MV.map((VV => PV(VV).charAt(0).toUpperCase()))), RV = VV => NV ? eV.heldAmount(VV) : eV.amount(VV), gV = !NV && "recent" !== pV && XV.length > 0, DV = function(VV, eV) {
        return null !== VV && eV.includes(VV) ? VV : null
      }(bV, gV ? [...GV, ...XV] : GV), iV = null === DV ? 0 : eV.amount(DV), CV = null === DV ? 0 : RV(DV), aV = (0, JV.useCallback)((VV => {
        EV((eV => eV === VV ? null : VV))
      }), []), oV = VV => CV > 0 || NV && null === DV && "fill" === VV && GV.length > 0, cV = NV ? [
        ["one", UV("buildAFactory2Game:terminalStoreOne")],
        ["stack", UV("buildAFactory2Game:terminalStoreStack", {
          amount: String(99)
        })],
        ["fill", UV(null === DV ? "buildAFactory2Game:terminalStoreEverything" : "buildAFactory2Game:terminalStoreAll")]
      ] : [
        ["one", UV("buildAFactory2Game:terminalTakeOne")],
        ["stack", UV("buildAFactory2Game:terminalTakeStack", {
          amount: String(99)
        })],
        ["fill", UV("buildAFactory2Game:terminalFill")]
      ], hV = NV ? UV("buildAFactory2Game:terminalStoreEmpty") : "" !== ZV ? UV("buildAFactory2Game:terminalEmptyLetter", {
        letter: ZV
      }) : "" !== zV ? UV("buildAFactory2Game:terminalEmptySearch", {
        query: rV
      }) : UV("buildAFactory2Game:terminalEmpty");
      return (0, qU.jsx)(by.e, {
        close: xV,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2TermOverlay",
        children: (0, qU.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, qU.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, qU.jsxs)("div", {
              children: [(0, qU.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: UV(eV.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, qU.jsxs)("p", {
                className: "Baf2TermSubtitle",
                children: [(0, qU.jsx)("span", {
                  className: tY()({
                    Off: NV
                  }),
                  children: UV("buildAFactory2Game:terminalSubtitle", {
                    count: String(eV.siloCount())
                  })
                }), !AV && (0, qU.jsx)("span", {
                  className: tY()({
                    Off: !NV
                  }),
                  children: UV("buildAFactory2Game:terminalStoreSubtitle")
                })]
              })]
            }), !AV && (0, qU.jsx)(aZ.b, {
              className: "Baf2TermModes",
              options: [{
                value: "take",
                label: UV("buildAFactory2Game:terminalModeTake")
              }, {
                value: "store",
                label: UV("buildAFactory2Game:terminalModeStore")
              }],
              value: NV ? "store" : "take",
              onChange: VV => {
                jV("store" === VV), EV(null)
              },
              ariaLabel: UV("buildAFactory2Game:terminalModes")
            }), (0, qU.jsx)(Ey.k, {
              onClick: xV
            })]
          }), (0, qU.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, qU.jsxs)("div", {
              className: tY()("Baf2TermTools", {
                Hidden: NV
              }),
              children: [(0, qU.jsx)("div", {
                ref: qV,
                className: tY()("Baf2TermChips", {
                  MoreRight: tV
                }),
                onScroll: FV,
                children: nV ? (0, qU.jsxs)(qU.Fragment, {
                  children: [(0, qU.jsx)("button", {
                    type: "button",
                    "aria-label": UV("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      wV(!1), vV("")
                    },
                    children: "\u2190"
                  }), [...WV].sort().map((VV => (0, qU.jsx)("button", {
                    type: "button",
                    className: tY()({
                      On: ZV === VV
                    }),
                    onClick: () => {
                      vV(ZV === VV ? "" : VV)
                    },
                    children: VV
                  }, VV)))]
                }) : (0, qU.jsxs)(qU.Fragment, {
                  children: [(0, qU.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      wV(!0)
                    },
                    children: UV("buildAFactory2Game:terminalLetters")
                  }), cZ.map((VV => (0, qU.jsx)("button", {
                    type: "button",
                    className: tY()({
                      On: pV === VV
                    }),
                    onClick: () => {
                      QV(VV)
                    },
                    children: UV(oZ[VV])
                  }, VV)))]
                })
              }), !yV && (0, qU.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: rV,
                placeholder: UV("buildAFactory2Game:terminalSearch"),
                "aria-label": UV("buildAFactory2Game:terminalSearch"),
                onChange: VV => {
                  kV(VV.target.value)
                },
                onKeyDown: VV => {
                  VV.stopPropagation()
                }
              }), (0, qU.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": UV("buildAFactory2Game:terminalResort"),
                title: UV("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  eV.resort()
                },
                children: "\u21c5"
              })]
            }), gV && (0, qU.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, qU.jsx)("span", {
                children: UV(oZ.recent)
              }), XV.map((VV => (0, qU.jsx)(HZ, {
                item: VV,
                name: PV(VV),
                amount: eV.amount(VV),
                selected: DV === VV,
                small: !0,
                onPick: aV
              }, VV)))]
            }), (0, qU.jsx)("div", {
              className: "Baf2TermTiles",
              children: GV.length > 0 ? GV.map((VV => (0, qU.jsx)(HZ, {
                item: VV,
                name: PV(VV),
                amount: RV(VV),
                selected: DV === VV,
                onPick: aV
              }, VV))) : (0, qU.jsx)("p", {
                className: "Baf2TermEmpty",
                children: hV
              })
            }), (0, qU.jsxs)("div", {
              className: tY()("Baf2TermActions", {
                Hidden: NV && 0 === GV.length
              }),
              children: [(0, qU.jsx)("span", {
                className: "Baf2TermPicked",
                children: AV ? (0, qU.jsxs)(qU.Fragment, {
                  children: [null !== DV && iV > 0 ? PV(DV) : UV("buildAFactory2Game:terminalVisiting"), (0, qU.jsx)("small", {
                    children: UV("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== DV ? (0, qU.jsxs)(qU.Fragment, {
                  children: [PV(DV), (0, qU.jsx)("small", {
                    children: UV("buildAFactory2Game:terminalStored", {
                      amount: iV.toLocaleString()
                    })
                  })]
                }) : UV(NV ? "buildAFactory2Game:terminalStorePick" : "buildAFactory2Game:terminalPick")
              }), !AV && cV.map((VV => {
                let [xV, JV] = VV;
                const UV = "fill" === xV ? Ey.m : Ey.f;
                return (0, qU.jsx)(UV, {
                  className: "Baf2TermTake",
                  disabled: !oV(xV),
                  onClick: () => {
                    (VV => {
                      oV(VV) && YV(null === DV ? eV.putAll() : NV ? eV.put(VV, DV) : eV.take(VV, DV))
                    })(xV)
                  },
                  children: JV
                }, xV)
              }))]
            })]
          })]
        })
      })
    }

    function sZ(VV) {
      let {
        kind: eV,
        icon: xV,
        label: JV,
        number: YV,
        preview: UV,
        note: yV,
        tone: pV = null,
        share: QV,
        onExplain: nV
      } = VV;
      return (0, qU.jsxs)("button", {
        type: "button",
        className: tY()("NxLane", eV, {
          Warn: "warn" === pV,
          Danger: "danger" === pV
        }),
        onClick: nV,
        children: [(0, qU.jsxs)("span", {
          className: "NxLaneHead",
          children: [xV, (0, qU.jsx)("span", {
            className: "NxLaneLabel",
            children: JV
          })]
        }), (0, qU.jsxs)("span", {
          className: "NxLaneNum",
          children: [YV, UV && (0, qU.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", UV]
          })]
        }), (0, qU.jsx)("span", {
          className: "NxLaneNote",
          children: yV
        }), void 0 !== QV && (0, qU.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, QV)) + "%"
          }
        })]
      })
    }

    function SZ(VV) {
      let {
        kind: eV,
        step: xV,
        short: JV,
        planned: YV
      } = VV;
      return (0, qU.jsx)("i", {
        className: tY()("NxPipe", eV, `Step${xV}`, {
          Short: JV,
          Planned: YV
        }),
        "aria-hidden": "true"
      })
    }

    function IZ(VV) {
      let {
        max: eV,
        bands: xV,
        ticks: JV,
        now: YV,
        settle: UV,
        settleTone: yV,
        onExplain: pV
      } = VV;
      const QV = VV => Math.max(0, Math.min(eV, VV)) / eV * 100 + "%";
      let nV = 0;
      return (0, qU.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: pV,
        children: [(0, qU.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [xV.map((VV => {
            const eV = {
              bottom: QV(nV),
              height: `calc(${QV(VV.upTo)} - ${QV(nV)})`
            };
            return nV = VV.upTo, (0, qU.jsx)("i", {
              className: tY()("NxGaugeBand", VV.kind),
              style: eV
            }, VV.kind)
          })), null !== YV && (0, qU.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: QV(YV)
            }
          }), void 0 !== UV && null !== UV && (0, qU.jsx)("i", {
            className: tY()("NxGaugeSettle", {
              Bad: "bad" === yV
            }),
            style: {
              bottom: QV(UV)
            }
          })]
        }), (0, qU.jsx)("span", {
          className: "NxGaugeTicks",
          children: JV.map((VV => (0, qU.jsx)("small", {
            style: {
              bottom: QV(VV)
            },
            children: VV
          }, VV)))
        })]
      })
    }

    function dZ(VV) {
      const [eV, xV] = (0, JV.useState)(null), [YV, UV] = (0, JV.useState)((() => {
        try {
          return null === window.localStorage.getItem(VV)
        } catch {
          return !1
        }
      })), yV = (0, JV.useRef)(null);
      (0, JV.useEffect)((() => () => {
        null !== yV.current && clearTimeout(yV.current)
      }), []);
      const pV = (0, JV.useCallback)((eV => {
          xV(eV), UV(!1);
          try {
            window.localStorage.setItem(VV, "1")
          } catch {}
          null !== yV.current && clearTimeout(yV.current), yV.current = setTimeout((() => {
            yV.current = null, xV(null)
          }), 5e3)
        }), [VV]),
        QV = (0, JV.useCallback)(((eV, xV) => {
          const JV = `${VV}:${eV}`;
          try {
            if (null !== window.localStorage.getItem(JV)) return;
            window.localStorage.setItem(JV, "1")
          } catch {
            return
          }
          pV(xV)
        }), [pV, VV]);
      return {
        explained: eV,
        hinting: YV,
        explain: pV,
        explainOnce: QV
      }
    }

    function OZ(VV) {
      let {
        text: eV,
        tone: xV,
        explained: JV
      } = VV;
      return (0, qU.jsxs)("p", {
        className: tY()("NxStatus", null === JV ? xV : "Explain"),
        "aria-live": "polite",
        children: [null !== JV && (0, qU.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== JV && void 0 !== JV ? JV : eV]
      })
    }
    const Vv = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function ev(VV, eV) {
      const xV = Number(VV[eV]);
      return 1 === xV || 2 === xV || 3 === xV ? xV : 0
    }

    function xv(VV) {
      return !!BQ("reactor", VV.baf2RxNeed) || void 0 !== VV.baf2RxLayout && VV.baf2RxNeed.some((VV => {
        let [eV, xV] = VV;
        return xV > 0 && Vv.includes(eV)
      }))
    }
    const Jv = "buildAFactory2Game:";

    function Yv(VV) {
      let {
        status: eV,
        store: xV,
        busy: JV
      } = VV;
      const {
        t: YV
      } = (0, AY.A)();
      return function(VV) {
        return 0 !== (VV.baf2RxFlags & be) && (!VV.baf2RxFormed || void 0 !== VV.baf2RxLayout)
      }(eV) ? (0, qU.jsx)(Ey.m, {
        disabled: !xv(eV) || JV,
        onClick: () => {
          xV.tap("fill", (() => {
            xV.send("fill")
          }))
        },
        children: YV(void 0 !== eV.baf2RxLayout ? `${Jv}rxFillLayout` : `${Jv}rxFill`)
      }) : null
    }

    function Uv(VV) {
      let {
        status: eV,
        store: xV,
        readOnly: YV,
        bare: UV = !1
      } = VV;
      const {
        t: yV
      } = (0, AY.A)(), pV = eV.baf2RxLayout, [QV, nV, wV] = eV.baf2RxDims, ZV = (0, JV.useMemo)((() => {
        if (void 0 === pV) return 0;
        const VV = Uint8Array.from(pV, ((VV, eV) => ev(pV, eV)));
        return sp([QV - 2, nV - 2, wV - 2], VV).max
      }), [pV, QV, nV, wV]);
      return void 0 === pV ? null : (0, qU.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!UV && (0, qU.jsx)("span", {
          className: "Baf2RxHint",
          children: yV(`${Jv}rxLayoutLine`, {
            amount: AQ(ZV)
          })
        }), !YV && (0, qU.jsx)(Ey.f, {
          onClick: () => {
            xV.send("layout", 0)
          },
          children: yV(`${Jv}rxLayoutHide`)
        })]
      })
    }
    const yv = "buildAFactory2Game:",
      pv = {
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

    function Qv(VV) {
      let {
        id: eV,
        title: xV,
        body: JV,
        bodyParams: YV,
        yes: UV,
        cancel: yV,
        confirm: pV
      } = VV;
      const {
        t: QV
      } = (0, AY.A)();
      return (0, qU.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": eV,
        children: [(0, qU.jsx)("h3", {
          id: eV,
          children: QV(xV)
        }), (0, qU.jsx)("p", {
          children: QV(JV, YV)
        }), (0, qU.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, qU.jsx)(Ey.j, {
            onClick: yV,
            children: QV(`${yv}rxCancel`)
          }), (0, qU.jsx)(Ey.E, {
            onClick: pV,
            children: QV(UV)
          })]
        })]
      })
    }

    function nv(VV) {
      const [eV, xV] = (0, JV.useState)((() => VV.get()));
      return (0, JV.useEffect)((() => (xV(VV.get()), VV.subscribe((() => {
        xV(VV.get())
      })))), [VV]), eV
    }

    function wv(VV) {
      let {
        kind: eV,
        cap: xV,
        busy: YV = !1,
        whyNot: UV = null,
        apart: yV
      } = VV;
      const {
        t: pV
      } = (0, AY.A)(), [QV, nV] = (0, JV.useState)(!1), wV = null !== UV, ZV = (0, JV.useRef)(null);
      if ((0, JV.useEffect)((() => {
          wV && nV(!1)
        }), [wV]), (0, JV.useLayoutEffect)((() => {
          var VV;
          const eV = null === (VV = ZV.current) || void 0 === VV ? void 0 : VV.firstElementChild;
          wV ? null === eV || void 0 === eV || eV.setAttribute("aria-disabled", "true") : YV || null === eV || void 0 === eV || eV.removeAttribute("aria-disabled")
        })), !QV || wV) return (0, qU.jsx)("span", {
        ref: ZV,
        className: "Baf2RxApartWrap",
        children: (0, qU.jsx)(Ey.j, {
          disabled: YV,
          className: tY()({
            Baf2RxNotYet: wV
          }),
          onClick: () => {
            UV ? UV() : nV(!0)
          },
          children: pV(`${yv}rxApart`)
        })
      });
      const vV = "battery" === eV,
        rV = void 0 === xV ? `${yv}batApartConfirmBodyPlan` : `${yv}batApartConfirmBody`;
      return (0, qU.jsx)(Qv, {
        id: `baf2ApartTitle_${eV}`,
        title: vV ? `${yv}batApartConfirmTitle` : `${yv}rxApartConfirmTitle`,
        body: vV ? rV : `${yv}rxApartConfirmBody`,
        bodyParams: void 0 === xV ? void 0 : {
          cap: xV
        },
        yes: `${yv}rxApart`,
        cancel: () => {
          nV(!1)
        },
        confirm: () => {
          nV(!1), yV()
        }
      })
    }

    function Zv(VV) {
      let {
        mood: eV,
        big: xV
      } = VV;
      const JV = pv[eV],
        YV = [];
      return JV.rows.forEach(((VV, eV) => {
        for (let xV = 0; xV < VV.length; xV++) "." !== VV[xV] && YV.push((0, qU.jsx)("rect", {
          x: xV + 1,
          y: eV + 1,
          width: 1,
          height: 1,
          fill: "w" === VV[xV] ? "#8fd3ff" : JV.colour
        }, `${xV},${eV}`))
      })), (0, qU.jsxs)("svg", {
        className: tY()("Baf2RxFace", {
          Big: xV,
          Alarm: "alarm" === eV
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, qU.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, qU.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), YV]
      })
    }

    function vv(VV) {
      return vU(VV, "+").replace("+", "")
    }

    function rv(VV) {
      let {
        kind: eV,
        dims: xV,
        cap: JV,
        disabled: YV,
        compact: UV,
        resize: yV
      } = VV;
      const {
        t: pV
      } = (0, AY.A)(), {
        min: QV,
        max: nV
      } = cx(eV), wV = Math.min(JV, nV), ZV = [`${yv}rxWide`, `${yv}rxTall`, `${yv}rxDeep`], vV = {
        w: String(xV[0]),
        h: String(xV[1]),
        d: String(xV[2]),
        blocks: String(PQ(eV, xV))
      };
      return (0, qU.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, qU.jsx)("div", {
          className: "Baf2RxSteppers",
          children: xV.map(((VV, eV) => {
            const UV = JV => {
                const YV = [xV[0], xV[1], xV[2]];
                YV[eV] = VV + JV, yV(YV)
              },
              vV = VV >= wV;
            return (0, qU.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, qU.jsx)("button", {
                type: "button",
                "aria-label": pV(`${yv}rxSmaller`),
                disabled: YV || VV <= QV,
                onClick: () => {
                  UV(-1)
                },
                children: "\u2212"
              }), (0, qU.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [VV, (0, qU.jsx)("small", {
                  children: pV(ZV[eV])
                })]
              }), (0, qU.jsx)("button", {
                type: "button",
                "aria-label": pV(`${yv}rxBigger`),
                disabled: YV || vV,
                onClick: () => {
                  UV(1)
                },
                children: vV && JV < nV ? "\ud83d\udd12" : "+"
              })]
            }, ZV[eV])
          }))
        }), !UV && (0, qU.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === eV ? pV(`${yv}rxSizeLine`, {
            ...vV,
            water: String(TQ(xV))
          }) : pV(`${yv}batSizeLine`, vV)
        })]
      })
    }

    function kv(VV) {
      let {
        on: eV,
        label: xV,
        disabled: JV,
        locked: YV,
        pending: UV,
        toggle: yV
      } = VV;
      return (0, qU.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": eV,
        disabled: JV,
        "aria-disabled": YV || void 0,
        className: tY()("Baf2RxSwitch", {
          On: eV,
          Locked: YV,
          Pending: UV
        }),
        onClick: yV,
        children: [(0, qU.jsx)("span", {
          className: "Baf2RxKnob"
        }), xV]
      })
    }
    const bv = "buildAFactory2Game:",
      Ev = .95;

    function Bv(VV, eV) {
      return 0 !== (VV.baf2RxFlags & eV)
    }

    function jv(VV) {
      return "cryo" === VV ? dV.l : dV.n
    }

    function qv(VV) {
      var eV, xV, JV, YV, UV, yV, pV, QV, nV;
      return VV.baf2RxCryo ? {
        Cr: "cryo",
        usePerS: null !== (YV = VV.baf2RxCryoUse) && void 0 !== YV ? YV : 0,
        needPerS: null !== (UV = VV.baf2RxCryoNeed) && void 0 !== UV ? UV : 0,
        inPerS: null !== (yV = VV.baf2RxCryoIn) && void 0 !== yV ? yV : 0,
        stored: null !== (pV = VV.baf2RxCryoStored) && void 0 !== pV ? pV : 0,
        makersShort: null !== (QV = VV.baf2RxMixersShort) && void 0 !== QV ? QV : 0,
        waterBeside: null !== (nV = VV.baf2RxWaterUse) && void 0 !== nV ? nV : 0,
        pct: VV.baf2RxWater
      } : {
        Cr: "water",
        usePerS: null !== (eV = VV.baf2RxWaterUse) && void 0 !== eV ? eV : 0,
        needPerS: null !== (xV = VV.baf2RxWaterNeed) && void 0 !== xV ? xV : 0,
        inPerS: VV.baf2RxWaterIn,
        stored: VV.baf2RxWaterStored,
        makersShort: null !== (JV = VV.baf2RxCondensersShort) && void 0 !== JV ? JV : 0,
        waterBeside: 0,
        pct: VV.baf2RxWater
      }
    }

    function tv(VV) {
      const eV = "running" === VV.baf2RxState || "idle" === VV.baf2RxState;
      return VV.baf2RxFormed && VV.baf2RxTarget !== VV.baf2RxThrottle && eV ? Fv(VV, VV.baf2RxTarget) : null
    }

    function Fv(VV, eV) {
      const [xV, JV, YV, , , , UV, , yV] = VV.baf2RxStats, pV = Bv(VV, re), QV = qv(VV), nV = QV.pct / 100, {
        gen: wV,
        out: ZV,
        load: vV
      } = function(VV, eV, xV, JV) {
        const YV = xV ? hp : 1,
          UV = Math.min(VV.fuelHeat * YV * Math.max(0, Math.min(1, eV)), VV.size * YV);
        return {
          gen: UV,
          out: UV,
          load: yQ(UV, VV.cooling, JV)
        }
      }({
        fuelHeat: xV,
        cooling: JV,
        size: YV
      }, eV / 100, pV, nV), rV = QQ(UV || Hp(...VV.baf2RxDims)), kV = VV.baf2RxHeat, bV = Math.abs(vV - kV), EV = function(VV, eV, xV, JV) {
        let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : dV.n;
        const UV = xV ? hp : 1,
          yV = Math.min(VV.fuelHeat * UV * eV / 100, VV.size * UV),
          pV = yV,
          QV = VV.fuelHeat * UV,
          nV = VV.cooling * UQ(JV.pct / 100),
          wV = QV > 0 && nV < VV.size * UV ? Math.floor(100 * nV / QV) : 100,
          ZV = yV * YV - JV.inPerS;
        return {
          out: pV,
          hotAbove: wV >= 100 ? null : Math.max(0, wV),
          waterSecs: JV.pct >= 100 && ZV > 1e-6 ? Math.max(0, JV.stored) / ZV : null
        }
      }({
        fuelHeat: xV,
        cooling: JV,
        size: YV
      }, eV, pV, {
        pct: QV.pct,
        inPerS: QV.inPerS,
        stored: QV.stored
      }, jv(QV.Cr));
      return {
        pct: eV,
        out: ZV,
        coolPerS: wV * jv(QV.Cr),
        pelletsPerMin: yV > 0 ? ZV / yV * 60 : 0,
        settle: vV,
        settleS: bV > 2 ? rV * Math.log(bV / 2) : 0,
        overheatS: vV > 100 && kV < 100 ? rV * Math.log((vV - kV) / (vV - 100)) : null,
        hotAbove: EV.hotAbove,
        coolantSecs: EV.waterSecs
      }
    }

    function Tv(VV) {
      return VV.baf2RxThrottle <= 0 && "running" !== VV.baf2RxState ? 0 : Fv(VV, VV.baf2RxTarget).pelletsPerMin / 60
    }

    function Pv(VV, eV) {
      if (VV <= 0 || eV <= 0) return 0;
      const xV = VV / eV;
      return xV < .25 ? 1 : xV < .5 ? 2 : xV < .8 ? 3 : 4
    }

    function Av(VV, eV) {
      const xV = {};
      for (const [JV, YV] of Object.entries(eV.params)) xV[JV] = "time" === JV ? bU(VV, YV) : "amount" === JV ? AQ(YV) : String(Math.round(YV));
      return VV(eV.key, xV)
    }

    function Nv(VV, eV) {
      return {
        key: `${bv}${VV}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: eV
      }
    }

    function Xv(VV) {
      var eV;
      const xV = Bv(VV, re),
        JV = "running" === VV.baf2RxState,
        YV = vQ(VV),
        UV = VV.baf2RxHeat;
      var yV;
      if (JV && UV > op) return {
        key: null !== (yV = YV.fix) && void 0 !== yV ? yV : `${bv}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const pV = JV ? Fv(VV, VV.baf2RxTarget).coolantSecs : null,
        QV = "cryo" === qv(VV).Cr;
      if (null !== pV && pV >= 1 && pV <= 30) return Nv(QV ? "rxWarnCryo" : "rxWarnWater", "bad");
      const nV = mp(Hp(...VV.baf2RxDims)).waste,
        wV = JV ? jQ(VV, nV, Tv(VV)).fullInS : null;
      if (null !== wV && wV <= 120 && VV.baf2RxWaste >= .5 * nV) return Nv("rxWarnWaste", "warn");
      if (null !== pV && pV >= 1) return Nv(QV ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: pV
      });
      const ZV = "noWater" === VV.baf2RxState && UV > op;
      if (VV.baf2RxDamage >= 1 && !ZV) return Nv("rxDamagedHeals", "warn", {
        pct: VV.baf2RxDamage
      });
      if (VV.baf2RxCryoCut) return Nv("rxFix_cryoCut", "warn");
      const vV = qv(VV);
      if ("noWater" === VV.baf2RxState && "cryo" === vV.Cr) return Nv("noWater" === VV.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const rV = YV.fix === `${bv}rxFix_scramCool` || "idle" === VV.baf2RxState && VV.baf2RxTarget <= 0;
      if (rV && VV.baf2RxFuel <= 0) return Nv("rxFix_noFuel", "warn");
      if (rV && VV.baf2RxWaterIn <= 0 && (null !== (eV = VV.baf2RxCryoIn) && void 0 !== eV ? eV : 0) <= 0) return Nv("rxFix_noWater", "warn");
      const kV = YV.fix === `${bv}rxFix_scramCool` ? kQ(VV) : null;
      if (null !== kV) return {
        key: kV.key,
        params: {
          amount: kV.amount
        },
        tone: "info"
      };
      if ("running" !== VV.baf2RxState && "idle" !== VV.baf2RxState && null !== YV.fix) return {
        key: YV.fix,
        params: {},
        tone: "scram" === VV.baf2RxState ? "info" : ZV ? "bad" : "warn"
      };
      var bV;
      if ("idle" === VV.baf2RxState && VV.baf2RxTarget <= 0) return {
        key: null !== (bV = YV.fix) && void 0 !== bV ? bV : `${bv}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const EV = VV.baf2RxCryoStarved;
      if ("cryo" === vV.Cr && EV && vV.needPerS > 0 && vV.usePerS < Ev * vV.needPerS) return Nv("noWater" === EV ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const BV = "cryo" === vV.Cr,
        jV = vV.needPerS > 0 && vV.usePerS < Ev * vV.needPerS;
      if (BV ? jV || vV.makersShort > 0 && vV.pct < 100 : vV.pct < 100) {
        const eV = BV && jV ? Math.floor(100 * vV.usePerS / vV.needPerS) : Math.min(100, vV.pct);
        if (vV.makersShort > 0) {
          return Nv(`${BV?"rxCryoShortLine":"rxWaterShortLine"}${1===vV.makersShort?"One":""}${!BV&&VV.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: eV,
            count: vV.makersShort
          })
        }
        return Nv(BV ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: eV
        })
      }
      const qV = function(VV) {
        const [eV, xV, JV] = VV.baf2RxStats, YV = qv(VV), UV = pQ({
          fuelHeat: eV,
          cooling: xV,
          size: JV
        }, "cryo" === YV.Cr ? dV.f : 1, !0);
        return Math.max(0, UV * jv(YV.Cr) - YV.inPerS)
      }(VV);
      if (xV && qV > 0) return Nv("cryo" === vV.Cr ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(qV)
      });
      if (UV >= JQ) return Nv("rxHotLine", "warn");
      const tV = Fv(VV, VV.baf2RxTarget);
      var FV;
      if (null !== tV.overheatS) return Nv("rxWillOverheat", "bad", {
        pct: VV.baf2RxTarget,
        time: tV.overheatS,
        safe: null !== (FV = tV.hotAbove) && void 0 !== FV ? FV : 100
      });
      if (Math.abs(tV.settle - UV) >= 3) return Nv("rxSettling", "info", {
        pct: VV.baf2RxTarget,
        heat: Math.round(tV.settle),
        time: tV.settleS
      });
      const TV = kQ(VV);
      if (null !== TV) return {
        key: TV.key,
        params: {
          amount: TV.amount
        },
        tone: "info"
      };
      const PV = function(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== eV && ("running" !== eV || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === VV.rods ? `${nQ}rxLimitNoRods` : `${nQ}rxLimit_${xQ(VV)}`
      }({
        rods: VV.baf2RxStats[3],
        ...rQ(VV)
      }, VV.baf2RxState, VV.baf2RxOut >= Ev * VV.baf2RxMaxNow, !1);
      if (PV === `${bv}rxLimit_size`) {
        const [eV, , xV, JV] = VV.baf2RxStats, YV = JV > 0 && eV > 0 ? Math.ceil(xV / (eV / JV) - 1e-9) : JV, UV = VV.baf2RxDims.every((VV => VV >= cx("reactor").max));
        if (YV < JV) return Nv(UV ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: YV,
          have: JV
        });
        if (UV) return Nv("rxLimit_sizeMax", "info")
      }
      return null !== PV ? {
        key: PV,
        params: {},
        tone: "info"
      } : Nv("rxSteady", "ok", {
        pct: VV.baf2RxTarget
      })
    }

    function Mv(VV) {
      var eV;
      if (VV.melted) return Nv("rxMeltedBody", "bad");
      if (-1 === VV.bad) return Nv("rxFix_noRoom", "warn");
      if (VV.bad > 0) return Nv(1 === VV.bad ? "rxBadOne" : "rxBad", "warn", {
        count: VV.bad
      });
      if (VV.left > 0) {
        const eV = 1 === VV.left ? "One" : "";
        return Nv(VV.canFill ? `rxPlanLeft${eV}` : `rxPlanLeftNoFill${eV}`, "info", {
          count: VV.left
        })
      }
      if (0 === VV.rods) return Nv("rxLimitNoRods", "warn");
      const xV = null !== (eV = VV.idle) && void 0 !== eV ? eV : 0;
      return xV > 0 ? Nv(1 === xV ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: xV
      }) : Nv("rxPlanReady", "ok")
    }

    function zv(VV) {
      return Math.floor(Math.max(0, VV[1] - 1) / 2)
    }

    function Gv(VV) {
      if (VV >= Ip && VV < dp) {
        const eV = VV - Ip;
        return {
          key: 0 === eV ? `${bv}rxWhy_rodAlone` : 1 === eV ? `${bv}rxWhy_rodOne` : `${bv}rxWhy_rod`,
          params: {
            count: String(eV),
            heat: String(Gp * (1 + Wp * eV))
          }
        }
      }
      return VV === dp ? {
        key: `${bv}rxWhy_channel`,
        params: {
          amount: String(gp)
        }
      } : VV === Op ? {
        key: `${bv}rxWhy_deadChannel`,
        params: {}
      } : VV === VQ ? {
        key: `${bv}rxWhy_graphite`,
        params: {}
      } : {
        key: `${bv}rxWhy_core`,
        params: {}
      }
    }
    const Wv = "buildAFactory2Game:";

    function Rv(VV, eV) {
      return 0 !== (VV.baf2RxFlags & eV)
    }

    function gv(VV) {
      let {
        status: eV,
        pending: xV,
        store: JV,
        explain: YV
      } = VV;
      const {
        t: UV
      } = (0, AY.A)(), yV = Rv(eV, ve), pV = eV.baf2RxTarget, QV = eV.baf2RxThrottle, nV = function(VV) {
        return {
          press: () => {
            VV.throttlePress()
          },
          drag: eV => {
            VV.throttleDrag(eV)
          },
          release: () => {
            VV.throttleRelease()
          }
        }
      }(JV), wV = null === (ZV = Fv(eV, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, ZV - 10),
        red: ZV
      };
      var ZV;
      return (0, qU.jsxs)("div", {
        className: tY()("Baf2RxThrottle", {
          Off: yV
        }),
        onClick: () => {
          yV && YV(`${Wv}rxWhy_startFirst`)
        },
        children: [(0, qU.jsx)("span", {
          className: "HideNarrow",
          children: UV(`${Wv}rxThrottle`)
        }), (0, qU.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, qU.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: pV,
            disabled: yV,
            style: yV ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": UV(`${Wv}rxThrottle`),
            onPointerDown: () => {
              nV.press();
              const VV = () => {
                window.removeEventListener("pointerup", VV), window.removeEventListener("pointercancel", VV), nV.release()
              };
              window.addEventListener("pointerup", VV), window.addEventListener("pointercancel", VV)
            },
            onKeyUp: nV.release,
            onChange: VV => {
              nV.drag(Number(VV.target.value))
            }
          }), (0, qU.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${wV.amber}%, #ffb020 ${wV.amber}% ${wV.red}%, #ff3b30 ${wV.red}%)`
            },
            "aria-hidden": "true"
          }), (0, qU.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${QV}% + ${8*(1-QV/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, qU.jsxs)("b", {
          children: [`${pV}%`, (0, qU.jsx)("i", {
            className: tY()("Baf2RxPendingDot", {
              On: xV
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function Dv(VV) {
      let {
        status: eV
      } = VV;
      const {
        t: xV
      } = (0, AY.A)(), JV = Fv(eV, eV.baf2RxTarget), YV = qv(eV).Cr, UV = xV("cryo" === YV ? `${Wv}rxRateCryo` : `${Wv}rxRateWater`, {
        rate: vv(JV.coolPerS)
      }), yV = xV(`${Wv}rxChain`, {
        pct: String(eV.baf2RxTarget),
        out: AQ(JV.out),
        heat: String(Math.round(JV.settle)),
        coolant: UV
      }), pV = null !== JV.coolantSecs ? JV.coolantSecs >= 1 ? xV("cryo" === YV ? `${Wv}rxThrottleCryoOut` : `${Wv}rxThrottleWaterOut`, {
        time: bU(xV, JV.coolantSecs)
      }) : xV("cryo" === YV ? `${Wv}rxThrottleCryoDry` : `${Wv}rxThrottleWaterDry`) : null;
      return (0, qU.jsxs)("p", {
        className: "Baf2RxChain",
        children: [yV, null !== pV ? (0, qU.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", pV]
        }) : (0, qU.jsxs)("span", {
          children: [" \xb7 ", xV(`${Wv}rxChainPellets`, {
            amount: NQ(JV.pelletsPerMin)
          })]
        })]
      })
    }

    function iv(VV) {
      let {
        view: eV,
        store: xV,
        explain: YV,
        explainOnce: UV
      } = VV;
      const {
        t: yV
      } = (0, AY.A)(), {
        status: pV
      } = eV, [QV, nV] = (0, JV.useState)(!1), wV = Rv(pV, ve), vV = Rv(pV, re), rV = !Rv(pV, Ee), kV = pV.baf2RxHeat > 100;
      return (0, qU.jsxs)(qU.Fragment, {
        children: [(0, qU.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, qU.jsx)(gv, {
            status: pV,
            pending: eV.throttlePending,
            store: xV,
            explain: YV
          }), (0, qU.jsx)(kv, {
            on: vV,
            label: vV ? yV(`${Wv}rxOdLeft`, {
              time: bU(yV, pV.baf2RxOdLeft)
            }) : yV(`${Wv}rxOverdrive`),
            locked: rV,
            pending: 0 !== (eV.pendingFlags & re),
            toggle: () => {
              rV ? YV(`${Wv}rxOverdriveTier`, {
                amount: String(ZV(13))
              }) : vV ? xV.setFlag(re, !1) : eV.odConfirmed ? xV.setFlag(re, !0) : nV(!0)
            }
          }), wV || eV.startGuard ? (0, qU.jsx)(Ey.q, {
            disabled: eV.busy.has("start") || eV.startGuard,
            onClick: () => {
              xV.tap("start", (() => {
                xV.setFlag(ve, !1)
              }))
            },
            children: yV(eV.startGuard ? `${Wv}rxStarting` : `${Wv}rxStart`)
          }) : (0, qU.jsx)("span", {
            className: tY()("Baf2RxScram", {
              Pulse: kV
            }),
            children: (0, qU.jsx)(Ey.E, {
              onClick: () => {
                xV.shutDown()
              },
              children: yV(`${Wv}rxScram`)
            })
          })]
        }), (0, qU.jsx)(Dv, {
          status: pV
        }), QV && (0, qU.jsx)(Qv, {
          id: "baf2RxOdTitle",
          title: `${Wv}rxOdConfirmTitle`,
          body: `${Wv}rxOdConfirmBody`,
          yes: `${Wv}rxOdConfirm`,
          cancel: () => {
            nV(!1)
          },
          confirm: () => {
            nV(!1), xV.tap("odConfirm", (() => {
              xV.confirmOverdrive(), xV.setFlag(re, !0)
            })), UV(`${Wv}rxWhy_overdrive`)
          }
        })]
      })
    }

    function Cv(VV) {
      let {
        view: eV,
        store: xV,
        keepSize: JV
      } = VV;
      const {
        t: YV
      } = (0, AY.A)(), {
        status: UV
      } = eV;
      return (0, qU.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, qU.jsx)(rv, {
          kind: "reactor",
          dims: eV.dims,
          cap: UV.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: VV => {
            xV.resize(VV)
          }
        }), JV ? (0, qU.jsx)(Ey.j, {
          onClick: JV,
          children: YV(`${Wv}rxKeepSize`)
        }) : (0, qU.jsxs)(qU.Fragment, {
          children: [(0, qU.jsx)(kv, {
            on: eV.guide,
            label: YV(`${Wv}rxGuide`),
            toggle: () => {
              xV.toggleGuide()
            }
          }), Rv(UV, je) && (0, qU.jsx)(kv, {
            on: eV.starter,
            label: YV(`${Wv}rxStarter`),
            toggle: () => {
              xV.toggleStarter()
            }
          }), (0, qU.jsx)(Yv, {
            status: UV,
            store: xV,
            busy: eV.busy.has("fill")
          })]
        })]
      })
    }

    function av(VV) {
      let {
        need: eV,
        kind: xV = "reactor",
        explain: JV
      } = VV;
      const {
        t: YV
      } = (0, AY.A)(), UV = eV.length <= 3, yV = eV.reduce(((VV, eV) => {
        let [, xV] = eV;
        return VV + xV
      }), 0);
      return (0, qU.jsxs)("div", {
        className: tY()("Baf2RxParts", {
          Compact: !UV
        }),
        onClick: () => {
          JV("battery" === xV ? `${Wv}batWhy_store` : `${Wv}rxShellHint`)
        },
        children: [yV > 0 && (0, qU.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === yV ? YV(`${Wv}rxBlocksOne`) : YV(`${Wv}rxBlocks`, {
            blocks: String(yV)
          })
        }), 0 === eV.length ? (0, qU.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: YV("battery" === xV ? `${Wv}batPartsDone` : `${Wv}rxShellDone`)
        }) : EQ(eV).map((VV => {
          let [eV, xV, JV] = VV;
          const yV = function(VV) {
            const eV = FQ[VV];
            if (void 0 === eV) return null;
            const [xV, JV, YV] = qQ[eV].colour.map((VV => Math.round(255 * VV)));
            return `rgb(${xV}, ${JV}, ${YV})`
          }(eV);
          return (0, qU.jsxs)("span", {
            className: "Baf2RxChip",
            title: (0, dY.e)(YV, eV),
            children: [(0, qU.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === yV ? {
                visibility: "hidden"
              } : {
                background: yV
              },
              title: YV(`${Wv}rxShopGhost`)
            }), (0, qU.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, qU.jsx)(XY.e, {
                itemName: eV,
                amount: 0
              })
            }), (0, qU.jsx)("span", {
              className: "Baf2RxChipName",
              children: UV ? `${xV} ${pV=(0,dY.e)(YV,eV),pV.replace(/^(Reactor|Battery) (?=\S)/,"")}` : xV
            }), JV >= xV ? (0, qU.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, qU.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: UV ? YV(`${Wv}rxShopShort`, {
                count: String(xV - JV)
              }) : "\u2212" + (xV - JV)
            })]
          }, eV);
          var pV
        }))]
      })
    }
    const ov = "buildAFactory2Game:";

    function cv(VV) {
      var eV, xV, YV, UV, yV, pV, QV;
      let {
        store: nV,
        close: wV
      } = VV;
      const {
        t: ZV
      } = (0, AY.A)(), vV = iy(), rV = nv(nV), {
        explained: kV,
        explain: bV
      } = dZ("baf2RxExplained"), EV = (0, JV.useCallback)(((VV, eV) => {
        bV(ZV(VV, eV))
      }), [bV, ZV]), BV = null === rV || void 0 === rV ? void 0 : rV.status, jV = !0 === (null === BV || void 0 === BV ? void 0 : BV.baf2BatReadOnly), qV = VV => {
        BV && vV.send(Ze(BV.baf2BatAt, VV))
      }, [tV, FV, TV] = null !== (eV = null === rV || void 0 === rV ? void 0 : rV.dims) && void 0 !== eV ? eV : [0, 0, 0], PV = AQ(null !== (xV = null === rV || void 0 === rV ? void 0 : rV.Jv) && void 0 !== xV ? xV : 0), AV = !0 === (null === BV || void 0 === BV ? void 0 : BV.baf2BatFormed), NV = null !== (YV = null === BV || void 0 === BV ? void 0 : BV.baf2BatStored) && void 0 !== YV ? YV : 0, XV = Math.max(1, null !== (UV = null === BV || void 0 === BV ? void 0 : BV.baf2BatIslandCap) && void 0 !== UV ? UV : 1), MV = Math.min(100, 100 * NV / XV), zV = null === BV || void 0 === BV ? void 0 : BV.baf2BatNetPerS, GV = function(VV, eV, xV) {
        return xV > 0 && eV >= xV ? "full" : void 0 !== VV && VV >= .05 ? "charging" : void 0 !== VV && VV <= -.05 && eV > 0 ? "draining" : "steady"
      }(zV, NV, null !== (yV = null === BV || void 0 === BV ? void 0 : BV.baf2BatIslandCap) && void 0 !== yV ? yV : 0), WV = null !== (pV = null === BV || void 0 === BV ? void 0 : BV.baf2BatMadePerS) && void 0 !== pV ? pV : 0, RV = null !== (QV = null === BV || void 0 === BV ? void 0 : BV.baf2BatUsedPerS) && void 0 !== QV ? QV : 0;
      let gV, DV = {},
        iV = "info";
      if (BV)
        if (AV) "charging" === GV ? (gV = `${ov}batLine_charging`, DV = {
          time: bU(ZV, (XV - NV) / Math.max(.05, null !== zV && void 0 !== zV ? zV : 0))
        }, iV = "ok") : "draining" === GV ? (gV = `${ov}batLine_draining`, DV = {
          time: bU(ZV, NV / Math.max(.05, -(null !== zV && void 0 !== zV ? zV : 0)))
        }, iV = "warn") : gV = "full" === GV ? `${ov}batLine_full` : NV <= 0 && RV > 0 ? `${ov}batLine_empty` : `${ov}batLine_steady`;
        else {
          var CV;
          const VV = Mv({
            left: BV.baf2BatNeed.reduce(((VV, eV) => {
              let [, xV] = eV;
              return VV + xV
            }), 0),
            bad: BV.baf2BatBad,
            rods: 1,
            canFill: !0 === BV.baf2BatCanFill,
            melted: !1
          });
          gV = VV.key, DV = {
            count: String(null !== (CV = VV.params.count) && void 0 !== CV ? CV : 0)
          }, iV = VV.tone
        }
      else gV = `${ov}batLine_steady`;
      const aV = Math.max(WV, RV, 1);
      return (0, qU.jsx)(by.e, {
        close: wV,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, qU.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, qU.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, qU.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, qU.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, qU.jsx)(XY.e, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, qU.jsxs)("div", {
                children: [(0, qU.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: ZV(`${ov}batTitle`)
                }), BV && (0, qU.jsxs)("p", {
                  className: tY()("Baf2RxSubtitle", {
                    good: AV && "charging" === GV,
                    warn: AV && "draining" === GV
                  }),
                  children: [tV, "\xd7", FV, "\xd7", TV, " \xb7 ", ZV(AV ? `${ov}batState_${GV}` : `${ov}rxSubPlanShort`)]
                })]
              })]
            }), (0, qU.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [BV && !jV && (0, qU.jsx)(wv, {
                kind: "battery",
                cap: AV ? PV : void 0,
                busy: null === rV || void 0 === rV ? void 0 : rV.busy.has("apart"),
                apart: () => {
                  nV.tap("apart", (() => {
                    qV("apart")
                  }))
                }
              }), (0, qU.jsx)(Ey.k, {
                onClick: wV
              })]
            })]
          }), rV && BV && (0, qU.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, qU.jsxs)("div", {
              className: tY()("Baf2RxFlow Baf2BatFlow", {
                Plan: !AV
              }),
              children: [(0, qU.jsx)(sZ, {
                kind: "Power",
                label: ZV(`${ov}batMade`),
                number: AV ? `\u26a1 ${AQ(WV)}/s` : "\u2014",
                note: ZV(`${ov}batMadeNote`),
                share: AV ? WV / aV : void 0,
                onExplain: () => {
                  EV(`${ov}batWhy_made`)
                }
              }), (0, qU.jsx)(SZ, {
                kind: "Power",
                step: AV ? Pv(WV, aV) : 0,
                planned: !AV
              }), (0, qU.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  EV(`${ov}batWhy_store`)
                },
                children: [(0, qU.jsx)(IZ, {
                  max: 100,
                  bands: [{
                    upTo: AV ? MV : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, qU.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, qU.jsx)("b", {
                    className: "Baf2BatStored",
                    children: AV ? ZV(`${ov}batStoredOf`, {
                      amount: AQ(NV),
                      cap: AQ(BV.baf2BatIslandCap)
                    }) : ZV(`${ov}batWillHold`, {
                      cap: PV
                    })
                  }), (0, qU.jsx)("span", {
                    children: ZV(`${ov}batAdds`, {
                      cap: PV
                    })
                  }), AV && (0, qU.jsx)("small", {
                    children: ZV(`${ov}batBreakNote`, {
                      cap: PV
                    })
                  })]
                })]
              }), (0, qU.jsx)(SZ, {
                kind: "Power",
                step: AV ? Pv(RV, aV) : 0,
                planned: !AV
              }), (0, qU.jsx)(sZ, {
                kind: "Power",
                label: ZV(`${ov}batUsed`),
                number: AV ? `\u26a1 ${AQ(RV)}/s` : "\u2014",
                note: ZV(`${ov}batUsedNote`),
                share: AV ? RV / aV : void 0,
                onExplain: () => {
                  EV(`${ov}batWhy_used`)
                }
              })]
            }), (0, qU.jsx)(OZ, {
              text: ZV(gV, DV),
              tone: iV,
              explained: kV
            }), jV ? (0, qU.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: ZV(`${ov}rxNotYours`)
            }) : !AV && (0, qU.jsxs)(qU.Fragment, {
              children: [(0, qU.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, qU.jsx)(rv, {
                  kind: "battery",
                  dims: rV.dims,
                  cap: BV.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: VV => {
                    nV.resize(VV)
                  }
                }), (0, qU.jsx)(kv, {
                  on: rV.guide,
                  label: ZV(`${ov}rxGuide`),
                  toggle: () => {
                    nV.toggleGuide()
                  }
                }), BV.baf2BatCanFill && (0, qU.jsx)(Ey.m, {
                  disabled: !BQ("battery", BV.baf2BatNeed) || rV.busy.has("fill"),
                  onClick: () => {
                    nV.tap("fill", (() => {
                      qV("fill")
                    }))
                  },
                  children: ZV(`${ov}rxFill`)
                })]
              }), (0, qU.jsx)(av, {
                need: BV.baf2BatNeed,
                kind: "battery",
                explain: EV
              })]
            })]
          })]
        })
      })
    }
    const hv = "buildAFactory2Game:",
      lv = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function Lv(VV, eV) {
      return VV === Sp ? null : eV ? "#4a4440" : VV < dp ? lv[VV - Ip] : VV === dp ? "#3fd0f0" : VV === Op ? "#2c3e4c" : "#55585e"
    }

    function fv(VV) {
      let {
        inner: eV,
        looks: xV,
        layer: JV,
        setLayer: YV,
        glow: UV,
        melted: yV,
        explain: pV
      } = VV;
      const {
        t: QV
      } = (0, AY.A)(), [nV, wV, ZV] = eV, vV = Math.max(0, Math.min(wV - 1, JV)), rV = [];
      for (let bV = 0; bV < ZV; bV++)
        for (let VV = 0; VV < nV; VV++) {
          var kV;
          const eV = null !== (kV = xV[(vV * ZV + bV) * nV + VV]) && void 0 !== kV ? kV : Sp,
            JV = Lv(eV, yV),
            YV = eV >= Ip && eV < dp;
          rV.push(null === JV ? (0, qU.jsx)("circle", {
            cx: VV + .5,
            cy: bV + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${VV},${bV}`) : (0, qU.jsx)("rect", {
            x: VV + .06,
            y: bV + .06,
            width: .88,
            height: .88,
            fill: JV,
            opacity: YV && !yV ? .5 + .5 * UV : 1,
            onClick: VV => {
              VV.stopPropagation();
              const xV = Gv(eV);
              pV(xV.key, xV.params)
            }
          }, `${VV},${bV}`))
        }
      return (0, qU.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, qU.jsx)("svg", {
          className: tY()("Baf2RxMapGrid", {
            Melted: yV
          }),
          viewBox: `0 0 ${Math.max(1,nV)} ${Math.max(1,ZV)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": QV(`${hv}rxWhy_core`),
          onClick: () => {
            pV(`${hv}rxWhy_core`, {})
          },
          children: rV
        }), wV > 1 && (0, qU.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, qU.jsx)("button", {
            type: "button",
            "aria-label": QV(`${hv}rxLayerDown`),
            disabled: vV <= 0,
            onClick: () => {
              YV(vV - 1)
            },
            children: "\u25bc"
          }), (0, qU.jsxs)("span", {
            children: [(0, qU.jsx)("span", {
              className: "HideNarrow",
              children: QV(`${hv}rxLayer`, {
                n: String(vV + 1),
                of: String(wV)
              })
            }), (0, qU.jsx)("span", {
              className: "ShowNarrow",
              children: QV(`${hv}rxLayerShort`, {
                n: String(vV + 1),
                of: String(wV)
              })
            })]
          }), (0, qU.jsx)("button", {
            type: "button",
            "aria-label": QV(`${hv}rxLayerUp`),
            disabled: vV >= wV - 1,
            onClick: () => {
              YV(vV + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const mv = "buildAFactory2Game:",
      Kv = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: cp,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: ZQ,
        kind: "red"
      }],
      Hv = [50, cp, 100];

    function uv(VV) {
      let {
        stats: eV,
        t: xV,
        explain: JV
      } = VV;
      const YV = xQ(eV),
        UV = Math.max(1, eV.fuelHeat, eV.cooling, eV.size),
        yV = [
          ["fuel", `${mv}rxBarRods`, eV.fuelHeat],
          ["cooling", `${mv}rxBarCooling`, eV.cooling],
          ["size", `${mv}rxBarSize`, eV.size]
        ];
      return (0, qU.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          JV(`${mv}rxWhy_bars`)
        },
        children: [(0, qU.jsx)("span", {
          className: "Baf2RxMostLine",
          children: xV(`${mv}rxMost`, {
            amount: AQ(Math.min(eV.fuelHeat, eV.cooling, eV.size))
          })
        }), (0, qU.jsx)("span", {
          className: "Baf2RxMostBars",
          children: yV.map((VV => {
            let [eV, JV, yV] = VV;
            return (0, qU.jsxs)("span", {
              className: tY()("Baf2RxMostBar", eV, {
                Low: eV === YV
              }),
              children: [(0, qU.jsx)("small", {
                children: xV(JV)
              }), (0, qU.jsx)("i", {
                children: (0, qU.jsx)("b", {
                  style: {
                    width: 100 * yV / UV + "%"
                  }
                })
              })]
            }, eV)
          }))
        })]
      })
    }

    function sv(VV) {
      var eV;
      let {
        view: xV,
        heat: YV,
        settle: UV,
        settleLine: yV,
        settleBad: pV,
        explain: QV
      } = VV;
      const {
        t: nV
      } = (0, AY.A)(), {
        status: wV
      } = xV, ZV = wV.baf2RxAt.join(","), [vV, rV] = (0, JV.useState)((() => zv(xV.inner)));
      (0, JV.useEffect)((() => {
        rV(zv(xV.inner))
      }), [ZV, xV.inner[1]]);
      const kV = null !== (eV = xV.plan) && void 0 !== eV ? eV : rQ(wV),
        bV = xV.plan ? xV.plan.powerPerUnit : wV.baf2RxStats[8],
        EV = null === YV ? null : "alarm" === (BV = wQ(wV)) ? "red" : "hot" === BV ? "hot" : "warm" === BV ? "warm" : "cold";
      var BV;
      const jV = !wV.baf2RxFormed && function(VV, eV) {
          return 0 !== (VV.baf2RxFlags & eV)
        }(wV, ke),
        qV = wV.baf2RxDamage,
        tV = wV.baf2RxDamageTrend;
      return (0, qU.jsxs)("div", {
        className: tY()("Baf2RxCore", null !== EV && void 0 !== EV ? EV : "plan"),
        children: [(0, qU.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, qU.jsx)(fv, {
            inner: xV.inner,
            looks: xV.looks,
            layer: vV,
            setLayer: rV,
            glow: wV.baf2RxFormed ? wV.baf2RxThrottle / 100 : 1,
            melted: jV,
            explain: QV
          }), (0, qU.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              QV(`${mv}rxWhy_heat`)
            },
            children: [null !== YV ? (0, qU.jsxs)(qU.Fragment, {
              children: [(0, qU.jsx)("b", {
                children: nV(`${mv}rxHeatPct`, {
                  pct: String(YV)
                })
              }), (0, qU.jsx)("span", {
                className: tY()("Baf2RxBand", EV),
                children: nV(`${mv}rxBand_${EV}`)
              })]
            }) : (0, qU.jsx)("b", {
              children: nV(`${mv}rxHeat`)
            }), null !== yV && (0, qU.jsx)("span", {
              className: tY()("Baf2RxSettle", {
                Bad: pV
              }),
              children: yV
            }), qV >= 1 && (0, qU.jsxs)("span", {
              className: tY()("Baf2RxDamage", tV),
              children: [nV(`${mv}rxDamageLine`, {
                pct: String(qV)
              }), " \xb7 ", nV(`${mv}rxDamage_${tV}`), (0, qU.jsx)("i", {
                children: (0, qU.jsx)("b", {
                  style: {
                    width: `${Math.min(100,qV)}%`
                  }
                })
              })]
            })]
          }), (0, qU.jsx)(IZ, {
            max: ZQ,
            bands: Kv,
            ticks: Hv,
            now: YV,
            settle: UV,
            settleTone: pV ? "bad" : null,
            onExplain: () => {
              QV(`${mv}rxWhy_heat`)
            }
          })]
        }), (0, qU.jsx)(uv, {
          stats: kV,
          t: nV,
          explain: QV
        }), bV > 0 && (0, qU.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            QV(`${mv}rxWhy_perPellet`)
          },
          children: nV(`${mv}rxPerPellet`, {
            amount: AQ(bV)
          })
        })]
      })
    }

    function Sv(VV, eV) {
      var xV;
      if (!VV.baf2RxStore) return {
        note: eV(`${mv}rxUpTo`, {
          amount: AQ(VV.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [JV, YV] = VV.baf2RxStore, UV = YV > 0 ? JV / YV : 0, yV = String(Math.floor(100 * UV)), pV = null !== (xV = VV.baf2RxStoreNetPerS) && void 0 !== xV ? xV : 0, QV = function(VV) {
        var eV, xV;
        const [JV, YV] = null !== (eV = VV.baf2RxStore) && void 0 !== eV ? eV : [0, 0], UV = null !== (xV = VV.baf2RxStoreNetPerS) && void 0 !== xV ? xV : 0;
        return YV > 0 && JV >= YV - 1 ? "running" === VV.baf2RxState ? `${bv}rxStoreFull` : `${bv}rxStoreFullOnly` : UV > .05 ? `${bv}rxStoreLine` : UV < -.05 ? "running" === VV.baf2RxState ? `${bv}rxStoreUsesMore` : `${bv}rxStoreDraining` : `${bv}rxStorePct`
      }(VV);
      return {
        note: eV(QV, QV === `${mv}rxStoreLine` ? {
          pct: yV,
          time: bU(eV, (YV - JV) / pV)
        } : {
          pct: yV
        }),
        share: UV
      }
    }

    function Iv(VV) {
      let {
        view: eV,
        explain: xV,
        preview: JV
      } = VV;
      const {
        t: YV
      } = (0, AY.A)(), {
        status: UV
      } = eV, yV = mp(Hp(...eV.dims)), pV = Tv(UV), QV = Math.min(Math.round(UV.baf2RxFuel), yV.fuel), nV = "running" === UV.baf2RxState, wV = nV ? Pv(UV.baf2RxOut, UV.baf2RxMaxNow) : 0, ZV = function(VV, eV, xV) {
        const JV = qv(VV),
          YV = "cryo" === JV.Cr,
          UV = xV ? xV.coolantSecs : JV.pct >= 100 && VV.baf2RxOut >= 1 ? Fv(VV, VV.baf2RxThrottle).coolantSecs : null;
        let yV, pV = !1;
        if (JV.pct < 100) {
          const xV = 1 === JV.makersShort,
            UV = !YV && VV.baf2RxCryoOpen ? "OrCryo" : "";
          yV = JV.makersShort > 0 ? eV(YV ? `${mv}rxCryoAddMixer${xV?"":"s"}` : `${mv}rxWaterAddCondenser${xV?"":"s"}${UV}`, {
            count: String(JV.makersShort)
          }) : eV(`${mv}rxWaterNeeds`, {
            rate: vv(JV.needPerS)
          })
        } else if (null !== UV) yV = eV(`${mv}rxWaterRunsOut`, {
          time: bU(eV, UV)
        });
        else if (JV.waterBeside > 0) yV = eV(`${mv}rxCryoPlusWater`, {
          rate: vv(JV.waterBeside)
        });
        else {
          const VV = function(VV) {
            return VV.inPerS <= 0 ? "rxWaterNoSupply" : VV.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(JV);
          pV = "rxWaterNoSupply" === VV, yV = eV(`${mv}${VV}`, {
            amount: AQ(JV.stored)
          })
        }
        return {
          kind: YV ? "Cryo" : "Water",
          label: eV(YV ? `${mv}rxCryo` : `${mv}rxWater`),
          number: `${vv(JV.usePerS)}/s`,
          preview: xV ? `${vv(xV.coolPerS)}/s` : null,
          note: yV,
          tone: "noWater" === VV.baf2RxState ? "danger" : pV ? "warn" : (QV = JV.pct, nV = UV, QV < 100 ? "danger" : null === nV ? null : nV < 300 ? "danger" : "warn"),
          share: JV.pct / 100,
          why: YV ? `${mv}rxWhy_cryo` : `${mv}rxWhy_water`,
          short: JV.pct < 100
        };
        var QV, nV
      }(UV, YV, JV), vV = jQ(UV, yV.waste, pV), rV = Sv(UV, YV), kV = Fv(UV, UV.baf2RxTarget), bV = nV && Math.abs(kV.settle - UV.baf2RxHeat) >= 3, EV = JV ? JV.pelletsPerMin / 60 : null;
      return (0, qU.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, qU.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, qU.jsx)(sZ, {
            kind: "Fuel",
            label: YV(`${mv}rxFuel`),
            number: String(QV),
            preview: null !== EV && EV > 0 && UV.baf2RxFuel > 0 ? bU(YV, UV.baf2RxFuel / EV) : null,
            note: UV.baf2RxFuel <= 0 ? YV(`${mv}rxFuelEmpty`) : pV > 0 ? YV(`${mv}rxFuelLeft`, {
              time: bU(YV, UV.baf2RxFuel / pV)
            }) : YV(1 === QV ? `${mv}rxFuelPellet` : `${mv}rxFuelPellets`),
            tone: "noFuel" === UV.baf2RxState ? "danger" : UV.baf2RxFuel < 2 ? "warn" : null,
            share: UV.baf2RxFuel / yV.fuel,
            onExplain: () => {
              xV(`${mv}rxWhy_fuel`)
            }
          }), (0, qU.jsx)(sZ, {
            kind: ZV.kind,
            label: ZV.label,
            number: ZV.number,
            preview: ZV.preview,
            note: ZV.note,
            tone: ZV.tone,
            share: ZV.share,
            onExplain: () => {
              xV(ZV.why)
            }
          })]
        }), (0, qU.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, qU.jsx)(SZ, {
            kind: "Fuel",
            step: wV,
            short: "noFuel" === UV.baf2RxState
          }), (0, qU.jsx)(SZ, {
            kind: ZV.kind,
            step: wV,
            short: ZV.short || "noWater" === UV.baf2RxState
          })]
        }), (0, qU.jsx)(sv, {
          view: eV,
          heat: UV.baf2RxHeat,
          settle: Math.min(ZQ, kV.settle),
          settleLine: bV ? YV(`${mv}rxHeatSettles`, {
            pct: String(Math.round(kV.settle)),
            time: bU(YV, kV.settleS)
          }) : null,
          settleBad: kV.settle > 100,
          explain: xV
        }), (0, qU.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, qU.jsx)(SZ, {
            kind: "Power",
            step: wV
          }), (0, qU.jsx)(SZ, {
            kind: "Waste",
            step: nV && UV.baf2RxFuel - UV.baf2RxPu > 0 ? wV : 0,
            short: vV.full
          })]
        }), (0, qU.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, qU.jsx)(sZ, {
            kind: "Power",
            label: YV(`${mv}rxPowerOut`),
            number: `\u26a1 ${AQ(UV.baf2RxOut)}/s`,
            preview: JV ? AQ(JV.out) : null,
            note: rV.note,
            share: rV.share,
            onExplain: () => {
              xV(`${mv}rxWhy_power`)
            }
          }), (0, qU.jsx)(sZ, {
            kind: "Waste",
            label: YV(`${mv}rxWaste`),
            number: `${Math.floor(UV.baf2RxWaste)}/${yV.waste}`,
            note: vV.full ? YV(`${mv}rxWasteFull`) : null !== vV.fullInS ? YV(`${mv}rxWasteFullIn`, {
              time: bU(YV, vV.fullInS)
            }) : YV(`${mv}rxWasteSpent`),
            tone: "wasteFull" === UV.baf2RxState ? "danger" : vV.full ? "warn" : null,
            share: UV.baf2RxWaste / yV.waste,
            onExplain: () => {
              xV(`${mv}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function dv(VV) {
      let {
        view: eV,
        explain: xV
      } = VV;
      const {
        t: JV
      } = (0, AY.A)(), YV = eV.plan;
      if (!YV) return null;
      const UV = YV.fuelHeat <= 0 ? null : YV.cooling > 0 ? Math.min(ZQ, 100 * YV.fuelHeat / YV.cooling) : ZQ,
        yV = JV(`${mv}rxPlanAtFull`);
      return (0, qU.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, qU.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, qU.jsx)(sZ, {
            kind: "Fuel",
            label: JV(`${mv}rxFuel`),
            number: JV(`${mv}rxPlanPerMin`, {
              amount: NQ(YV.pelletsPerMin)
            }),
            note: JV(`${mv}rxPlanPellets`),
            onExplain: () => {
              xV(`${mv}rxWhy_fuel`)
            }
          }), (0, qU.jsx)(sZ, {
            kind: "Water",
            label: JV(`${mv}rxWater`),
            number: `${vv(YV.waterPerS)}/s`,
            note: eV.status.baf2RxCryoOpen && YV.waterPerS > 0 ? JV(`${mv}rxPlanOrCryo`, {
              rate: vv(pQ(YV, dV.f) * dV.l)
            }) : yV,
            onExplain: () => {
              xV(`${mv}rxWhy_water`)
            }
          })]
        }), (0, qU.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, qU.jsx)(SZ, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, qU.jsx)(SZ, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, qU.jsx)(sv, {
          view: eV,
          heat: null,
          settle: UV,
          settleLine: null === UV ? null : JV(`${mv}rxPlanHeat`, {
            pct: String(Math.round(UV))
          }),
          settleBad: null !== UV && UV > 100,
          explain: xV
        }), (0, qU.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, qU.jsx)(SZ, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, qU.jsx)(SZ, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, qU.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, qU.jsx)(sZ, {
            kind: "Power",
            label: JV(`${mv}rxPowerOut`),
            number: `\u26a1 ${AQ(YV.max)}/s`,
            note: yV,
            onExplain: () => {
              xV(`${mv}rxWhy_power`)
            }
          }), (0, qU.jsx)(sZ, {
            kind: "Waste",
            label: JV(`${mv}rxWaste`),
            number: JV(`${mv}rxPlanPerMin`, {
              amount: NQ(YV.pelletsPerMin)
            }),
            note: JV(`${mv}rxWasteSpent`),
            onExplain: () => {
              xV(`${mv}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const Ov = "buildAFactory2Game:",
      Vr = {
        key: `${Ov}rxWaiting`,
        params: {},
        tone: "info"
      };

    function er(VV, eV) {
      return 0 !== (VV.baf2RxFlags & eV)
    }

    function xr(VV) {
      var eV, xV;
      let {
        store: YV,
        close: UV
      } = VV;
      const {
        t: yV
      } = (0, AY.A)(), pV = nv(YV), {
        explained: QV,
        hinting: nV,
        explain: wV,
        explainOnce: ZV
      } = dZ("baf2RxExplained"), vV = (0, JV.useCallback)(((VV, eV) => {
        wV(yV(VV, eV))
      }), [wV, yV]), rV = (0, JV.useCallback)(((VV, eV) => {
        ZV(VV, yV(VV, eV))
      }), [ZV, yV]), [kV, bV] = (0, JV.useState)(!1), [EV, BV] = (0, JV.useState)(!1), jV = null === pV || void 0 === pV ? void 0 : pV.status, qV = null === jV || void 0 === jV ? void 0 : jV.baf2RxAt.join(","), tV = !0 === (null === jV || void 0 === jV ? void 0 : jV.baf2RxFormed);
      (0, JV.useEffect)((() => {
        BV(!1), bV(!1)
      }), [qV, tV]), (0, JV.useEffect)((() => (YV.opened(), () => {
        YV.closed()
      })), [YV]);
      const FV = void 0 !== jV && er(jV, Be),
        TV = jV ? tV ? wQ(jV) : null !== pV && void 0 !== pV && pV.plan ? function(VV, eV) {
          if (VV <= 0) return "off";
          if (eV <= 0) return "alarm";
          const xV = 100 * VV / eV;
          return xV < 50 ? "calm" : xV < JQ ? "warm" : xV <= 100 ? "hot" : "alarm"
        }(pV.plan.fuelHeat, pV.plan.cooling) : "off" : "off",
        PV = jV ? vQ(jV) : null,
        AV = pV ? pV.waiting ? Vr : tV ? Xv(pV.status) : function(VV) {
          var eV, xV;
          const {
            status: JV
          } = VV;
          return Mv({
            left: JV.baf2RxNeed.reduce(((VV, eV) => {
              let [, xV] = eV;
              return VV + xV
            }), 0),
            bad: JV.baf2RxBad,
            rods: null !== (eV = null === (xV = VV.plan) || void 0 === xV ? void 0 : xV.rods) && void 0 !== eV ? eV : 0,
            canFill: er(JV, be),
            melted: er(JV, ke),
            idle: VV.looks.reduce(((VV, eV) => VV + (eV === Op ? 1 : 0)), 0)
          })
        }(pV) : null,
        NV = nV && null !== AV && ("ok" === AV.tone || "info" === AV.tone),
        XV = jV ? function(VV) {
          const eV = 0 !== (VV.baf2RxFlags & ve),
            xV = VV.baf2RxHeat < lp;
          return 0 !== (VV.baf2RxFlags & ke) || xV && (eV || !VV.baf2RxFormed) ? null : VV.baf2RxFormed && !eV ? {
            key: `${nQ}rxApartScram`,
            params: {}
          } : {
            key: `${nQ}rxApartCooling`,
            params: {
              pct: String(lp)
            }
          }
        }(jV) : null,
        [MV, zV, GV] = null !== (eV = null === pV || void 0 === pV ? void 0 : pV.dims) && void 0 !== eV ? eV : [0, 0, 0],
        WV = `${MV}\xd7${zV}\xd7${GV}`;
      return (0, qU.jsx)(by.e, {
        close: UV,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, qU.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, qU.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, qU.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, qU.jsx)(Zv, {
                mood: TV
              }), (0, qU.jsxs)("div", {
                children: [(0, qU.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: yV(`${Ov}rxTitle`)
                }), pV && (0, qU.jsxs)("p", {
                  className: tY()("Baf2RxSubtitle", tV && (null === PV || void 0 === PV ? void 0 : PV.tone)),
                  children: [tV && !FV ? (0, qU.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": yV(`${Ov}rxChangeSize`),
                    onClick: () => {
                      if (!jV) return;
                      const VV = er(jV, ve);
                      var eV;
                      (eV = {
                        scram: VV,
                        heat: jV.baf2RxHeat
                      }).scram && eV.heat < lp ? bV(!0) : vV(VV ? `${Ov}rxResizeCooling` : `${Ov}rxResizeHot`, {
                        pct: String(lp)
                      })
                    },
                    children: [WV, " \u270e"]
                  }) : WV, " \xb7 ", yV(tV ? null !== (xV = null === PV || void 0 === PV ? void 0 : PV.label) && void 0 !== xV ? xV : `${Ov}rxState_running` : `${Ov}rxSubPlanShort`)]
                })]
              })]
            }), (0, qU.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [pV && !FV && (0, qU.jsx)(wv, {
                kind: "reactor",
                busy: pV.busy.has("apart"),
                whyNot: XV ? () => {
                  vV(XV.key, XV.params)
                } : null,
                apart: () => {
                  YV.tap("apart", (() => {
                    YV.send("apart")
                  }))
                }
              }), (0, qU.jsx)(Ey.k, {
                onClick: UV
              })]
            })]
          }), pV && AV && (0, qU.jsxs)("div", {
            className: "Baf2RxBody",
            children: [tV ? (0, qU.jsx)(Iv, {
              view: pV,
              explain: vV,
              preview: tv(pV.status)
            }) : (0, qU.jsx)(dv, {
              view: pV,
              explain: vV
            }), (0, qU.jsx)(OZ, {
              text: NV ? `${Av(yV,AV)} ${yV(`${Ov}rxTapHint`)}` : Av(yV, AV),
              tone: AV.tone,
              explained: QV
            }), FV ? (0, qU.jsxs)(qU.Fragment, {
              children: [(0, qU.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: yV(`${Ov}rxNotYours`)
              }), (0, qU.jsx)(Uv, {
                status: pV.status,
                store: YV,
                readOnly: !0
              })]
            }) : tV && !EV ? (0, qU.jsxs)(qU.Fragment, {
              children: [(0, qU.jsx)(iv, {
                view: pV,
                store: YV,
                explain: vV,
                explainOnce: rV
              }), void 0 !== pV.status.baf2RxLayout && xv(pV.status) && (0, qU.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, qU.jsx)(Uv, {
                  status: pV.status,
                  store: YV,
                  readOnly: !1,
                  bare: !0
                }), (0, qU.jsx)(Yv, {
                  status: pV.status,
                  store: YV,
                  busy: pV.busy.has("fill")
                })]
              })]
            }) : (0, qU.jsxs)(qU.Fragment, {
              children: [(0, qU.jsx)(Cv, {
                view: pV,
                store: YV,
                keepSize: tV ? () => {
                  BV(!1)
                } : void 0
              }), bQ(pV.dims, pV.status.baf2RxDims) && (0, qU.jsx)(av, {
                need: pV.status.baf2RxNeed,
                explain: vV
              }), (0, qU.jsx)(Uv, {
                status: pV.status,
                store: YV,
                readOnly: !1
              })]
            }), kV && (0, qU.jsx)(Qv, {
              id: "baf2ResizeTitle",
              title: `${Ov}rxResizeConfirmTitle`,
              body: `${Ov}rxResizeConfirmBody`,
              yes: `${Ov}rxChangeSize`,
              cancel: () => {
                bV(!1)
              },
              confirm: () => {
                bV(!1), BV(!0)
              }
            })]
          })]
        })
      })
    }
    class Jr {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(VV) {
        this.view = VV;
        for (const eV of this.listeners) eV()
      }
      get() {
        return this.view
      }
      subscribe(VV) {
        return this.listeners.add(VV), () => {
          this.listeners.delete(VV)
        }
      }
    }

    function Yr(VV) {
      let {
        commands: eV,
        store: xV,
        power: YV,
        water: UV,
        reactor: yV,
        battery: pV,
        collider: QV,
        terminal: nV,
        quests: wV,
        tutorial: ZV,
        close: vV,
        leave: rV,
        askIslands: kV,
        showCore: bV,
        openSocial: EV
      } = VV;
      const {
        userContext: BV
      } = (0, Mp.d)(), jV = Xp.featureFlags.useSocialFeatures && BV.isLoggedIn(), [qV, tV] = (0, JV.useState)((() => xV.get()));
      (0, JV.useEffect)((() => xV.subscribe((() => {
        tV(xV.get())
      }))), [xV]);
      const FV = "islands" === (null === qV || void 0 === qV ? void 0 : qV.kind) ? qV.backToCore : void 0;
      return (0, qU.jsxs)(Dy.Provider, {
        value: eV,
        children: ["core" === (null === qV || void 0 === qV ? void 0 : qV.kind) && (0, qU.jsx)(kZ, {
          view: qV.core,
          close: vV,
          askIslands: kV
        }), "dropMap" === (null === qV || void 0 === qV ? void 0 : qV.kind) && (0, qU.jsx)(jZ, {
          message: qV.dropMap,
          quests: wV,
          close: vV,
          leave: rV
        }), "islands" === (null === qV || void 0 === qV ? void 0 : qV.kind) && (0, qU.jsx)(CZ, {
          message: qV.islands,
          arrivedAtMs: qV.arrivedAtMs,
          close: FV ? () => {
            bV(FV)
          } : vV,
          leave: rV,
          openSocial: jV ? EV : null
        }), "quests" === (null === qV || void 0 === qV ? void 0 : qV.kind) && (0, qU.jsx)(Rw, {
          store: wV,
          tutorial: ZV,
          close: vV
        }), "transfer" === (null === qV || void 0 === qV ? void 0 : qV.kind) && (0, qU.jsx)(Vw, {
          message: qV.transfer,
          arrivedAtMs: qV.arrivedAtMs,
          close: vV,
          leave: rV
        }), "power" === (null === qV || void 0 === qV ? void 0 : qV.kind) && (0, qU.jsx)(Ay, {
          store: YV,
          close: vV
        }), "water" === (null === qV || void 0 === qV ? void 0 : qV.kind) && (0, qU.jsx)(np, {
          store: UV,
          close: vV
        }), "reactor" === (null === qV || void 0 === qV ? void 0 : qV.kind) && (0, qU.jsx)(xr, {
          store: yV,
          close: vV
        }), "battery" === (null === qV || void 0 === qV ? void 0 : qV.kind) && (0, qU.jsx)(cv, {
          store: pV,
          close: vV
        }), "collider" === (null === qV || void 0 === qV ? void 0 : qV.kind) && (0, qU.jsx)(Zn, {
          store: QV,
          close: vV
        }), "terminal" === (null === qV || void 0 === qV ? void 0 : qV.kind) && (0, qU.jsx)(uZ, {
          store: nV,
          close: vV,
          send: VV => {
            eV.send(VV)
          }
        })]
      })
    }
    var Ur = xV(39648);

    function yr(VV, eV) {
      return VV.distSq - eV.distSq
    }
    class pr {
      constructor() {
        this.list = [], this.pool = []
      }
      add(VV, eV, xV, JV) {
        let YV = this.pool[this.list.length];
        YV || (YV = {
          x: 0,
          y: 0,
          distSq: 0,
          element: eV,
          liftRem: xV,
          dot: JV
        }, this.pool.push(YV)), YV.x = VV.x, YV.y = VV.y, YV.distSq = VV.distSq, YV.element = eV, YV.liftRem = xV, YV.dot = JV, this.list.push(YV)
      }
    }
    class Qr {
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = VV, this.sizes = new WeakMap, this.observer = new ResizeObserver((VV => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const eV of VV) {
            const VV = eV.borderBoxSize[0];
            "dot" !== eV.target.dataset.crowded && 0 !== VV.inlineSize && 0 !== VV.blockSize && this.sizes.set(eV.target, {
              width: VV.inlineSize,
              height: VV.blockSize
            })
          }
        })), this.remPx = 16, this.ZZ = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.hq = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.hq)
      }
      observe(VV) {
        this.observer.observe(VV)
      }
      unobserve(VV) {
        this.observer.unobserve(VV)
      }
      run(VV) {
        const eV = VV.list;
        eV.sort(yr);
        const xV = this.pxPerVw,
          JV = this.pxPerVh;
        this.ZZ.length = 0, this.hud && this.ZZ.push(...this.hud.boxes(performance.now()));
        for (const UV of eV) {
          var YV;
          const VV = this.sizes.get(UV.element);
          let eV = "no";
          if (VV && VV.width > 0) {
            const YV = UV.x * xV,
              yV = UV.y * JV - UV.liftRem * this.remPx;
            this.fit(YV, yV, VV.width, VV.height) || (eV = UV.dot && this.fit(YV, yV, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (YV = UV.element.dataset.crowded) && void 0 !== YV ? YV : "no") !== eV && ("no" === eV ? delete UV.element.dataset.crowded : UV.element.dataset.crowded = eV), "hidden" !== eV && (0, Ur.b)(UV.element, UV.x, UV.y)
        }
        eV.length = 0
      }
      fit(VV, eV, xV, JV) {
        const YV = VV - xV / 2,
          UV = VV + xV / 2,
          yV = eV - JV,
          pV = this.ZZ;
        for (let QV = 0; QV < pV.length; QV += 4)
          if (YV < pV[QV + 1] - 2 && UV > pV[QV] + 2 && yV < pV[QV + 3] - 2 && eV > pV[QV + 2] + 2) return !1;
        return pV.push(YV, UV, yV, eV), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.hq)
      }
    }
    const nr = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class wr {
      constructor() {
        this.cards = nr.map((VV => document.getElementsByClassName(VV))), this.watched = nr.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(VV) {
        VV - this.refreshedAt > 1e3 && (this.refreshedAt = VV, this.stale = !0);
        for (let xV = 0; xV < this.cards.length; xV++) {
          var eV;
          const VV = null !== (eV = this.cards[xV][0]) && void 0 !== eV ? eV : null;
          VV !== this.watched[xV] && this.watch(xV, VV)
        }
        return this.stale && (this.stale = !1, this.measure()), this.list
      }
      dispose() {
        for (let VV = 0; VV < this.watched.length; VV++) this.watch(VV, null);
        this.sizes.disconnect(), window.removeEventListener("resize", this.onChange)
      }
      measure() {
        const VV = this.list;
        VV.length = 0;
        for (const eV of this.watched) {
          if (!eV || eV.closest(".NoRoom")) continue;
          const xV = eV.getBoundingClientRect();
          let JV = xV.top,
            YV = xV.bottom;
          if (eV === this.watched[0] && this.hud) {
            const VV = this.hud.getBoundingClientRect();
            JV = Math.max(JV, VV.top), YV = Math.min(YV, VV.bottom)
          }
          xV.width > 0 && YV > JV && VV.push(xV.left, xV.right, JV, YV)
        }
      }
      watch(VV, eV) {
        const xV = this.watched[VV];
        var JV, YV;
        (xV && this.sizes.unobserve(xV), this.watched[VV] = eV, this.stale = !0, eV && this.sizes.observe(eV), 0 === VV) && (null === (JV = this.hud) || void 0 === JV || JV.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (YV = null === eV || void 0 === eV ? void 0 : eV.closest(".Baf2QuestHud")) && void 0 !== YV ? YV : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    var Zr = xV(39651);
    class vr {
      constructor(VV) {
        this.onElement = VV, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(VV) {
        const eV = [];
        for (let xV = 0; xV + 4 < VV.length; xV += 5) {
          const JV = [VV[xV], VV[xV + 1], VV[xV + 2]];
          eV.push({
            key: JV.join(","),
            pos: JV,
            status: eY[VV[xV + 3]],
            kind: Me[VV[xV + 4]]
          })
        }
        this.markers = eV, this.keys = new Set(eV.map((VV => {
          let {
            key: eV
          } = VV;
          return eV
        }))), this.notify()
      }
      covers(VV) {
        return this.keys.has(VV)
      }
      get() {
        return this.markers
      }
      subscribe(VV) {
        return this.listeners.add(VV), () => {
          this.listeners.delete(VV)
        }
      }
      bind(VV) {
        let eV = this.refs.get(VV);
        return eV || (eV = eV => {
          const xV = this.elements.get(VV);
          var JV, YV;
          xV && (null === (JV = this.onElement) || void 0 === JV || JV.call(this, xV, !1));
          eV ? (this.elements.set(VV, eV), null === (YV = this.onElement) || void 0 === YV || YV.call(this, eV, !0)) : (this.elements.delete(VV), this.refs.delete(VV))
        }, this.refs.set(VV, eV)), eV
      }
      onAfterRender(VV, eV, xV) {
        for (const JV of this.markers) {
          const YV = this.elements.get(JV.key);
          if (!YV) continue;
          const UV = (0, Zr.d)(YV, VV, eV, JV.pos, 1.05, 24);
          UV && xV.add(UV, YV, .45, !0)
        }
      }
      notify() {
        for (const VV of this.listeners) VV()
      }
    }
    const rr = {
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
    const kr = (0, JV.memo)((function(VV) {
        let {
          status: eV,
          kind: xV,
          bindRef: JV
        } = VV;
        const {
          t: YV
        } = (0, AY.A)(), UV = function(VV, eV) {
          var xV;
          if ("noFuel" === VV) {
            var JV, YV;
            const VV = null === (JV = De[eV]) || void 0 === JV || null === (YV = JV.fuels) || void 0 === YV ? void 0 : YV.find((VV => Jx.includes(VV)));
            return null !== VV && void 0 !== VV ? VV : rr.noFuel
          }
          return void 0 !== (null === (xV = De[eV]) || void 0 === xV ? void 0 : xV.cryoMade) ? "noOutlet" === VV ? "Fluid Pipe" : "noInput" === VV ? "Biomass" : rr[VV] : rr[VV]
        }(eV, xV);
        return (0, qU.jsxs)("div", {
          className: tY()("Baf2StallMarker", eV),
          ref: JV,
          hidden: !0,
          children: [UV && (0, qU.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, qU.jsx)(XY.e, {
              itemName: UV,
              amount: 0
            })
          }), (0, qU.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === eV ? "?" : "!"
          }), (0, qU.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: YV(`buildAFactory2Game:stallTag_${eV}`)
          })]
        })
      })),
      br = (0, JV.memo)((function(VV) {
        let {
          controller: eV
        } = VV;
        const [xV, YV] = (0, JV.useState)((() => eV.get()));
        return (0, JV.useEffect)((() => (YV(eV.get()), eV.subscribe((() => {
          YV(eV.get())
        })))), [eV]), (0, qU.jsx)("div", {
          className: "Baf2StallMarkers",
          children: xV.map((VV => (0, qU.jsx)(kr, {
            status: VV.status,
            kind: VV.kind,
            bindRef: eV.bind(VV.key)
          }, VV.key)))
        })
      })),
      Er = bx.h + 150;
    class Br {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(VV, eV) {
        const xV = eV - VV;
        null === this.offset || xV < this.offset ? this.offset = xV : this.offset = Math.min(xV, this.offset + .02 * (eV - this.sampledAt)), this.sampledAt = eV
      }
      toLocal(VV) {
        var eV;
        return VV + (null !== (eV = this.offset) && void 0 !== eV ? eV : 0) + Er
      }
    }
    var jr = xV(39659);
    const qr = 15 * Math.PI / 180,
      tr = Math.SQRT2,
      Fr = [4, 2];

    function Tr(VV, eV) {
      const xV = [1 / 0, 1 / 0, 1 / 0],
        JV = [-1 / 0, -1 / 0, -1 / 0];
      for (const QV of VV)
        for (let VV = 0; VV < 3; VV++) xV[VV] = Math.min(xV[VV], QV[VV]), JV[VV] = Math.max(JV[VV], QV[VV]);
      const YV = (xV[0] + JV[0]) / 2,
        UV = (xV[1] + JV[1]) / 2,
        yV = (xV[2] + JV[2]) / 2;
      let pV = 0;
      for (const QV of VV) pV = Math.max(pV, Math.hypot(QV[0] - YV, QV[1] - UV, QV[2] - yV));
      return {
        x: YV,
        y: UV,
        z: yV,
        r: pV + eV
      }
    }

    function Pr(VV, eV, xV) {
      const JV = eV.x - VV.x,
        YV = eV.y - VV.y,
        UV = eV.z - VV.z,
        yV = Math.sqrt(JV * JV + YV * YV + UV * UV);
      if (yV <= eV.r + 8) return 1;
      const pV = eV.r / yV,
        QV = Math.sqrt(1 - pV * pV),
        nV = QV < -VV.cosHalf,
        wV = (JV * VV.dx + YV * VV.dy + UV * VV.dz) / yV;
      if (!nV && wV < VV.cosHalf * QV - VV.sinHalf * pV) return 0;
      const ZV = xV * tr * VV.frameMs * VV.pxPerBlock / (yV - eV.r);
      for (let vV = 0; vV < Fr.length; vV++)
        if (ZV * Fr[vV] <= 1) return Fr[vV];
      return 1
    }

    function Ar(VV, eV) {
      return {
        name: VV,
        at: eV,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const Nr = [0, 0, 0];

    function Xr(VV, eV, xV) {
      let [, JV, YV, UV, yV, pV] = eV;
      const QV = bx.e * (null !== yV && void 0 !== yV ? yV : 1),
        nV = [];
      for (let rV = 0; rV < JV.length; rV += 3) nV.push([JV[rV] + .5, JV[rV + 1] + .65, JV[rV + 2] + .5]);
      const wV = [];
      for (let rV = 0; rV < nV.length - 1; rV++) {
        const [VV, eV] = [nV[rV], nV[rV + 1]];
        wV.push([(VV[0] + eV[0]) / 2, (VV[1] + eV[1]) / 2, (VV[2] + eV[2]) / 2])
      }
      const ZV = nV.slice(1, -1),
        vV = new Uint8Array(ZV.length);
      for (const rV of null !== pV && void 0 !== pV ? pV : []) vV[rV >> 1] |= 1 & rV ? 2 : 1;
      return {
        island: VV,
        length: ZV.length,
        loop: UV,
        cellsPerMs: QV,
        edges: wV,
        wb: ZV,
        bounds: Tr([...wV, ...ZV], .3),
        changed: !0,
        culled: !1,
        hide: vV,
        items: YV.map((VV => {
          let [eV, JV] = VV;
          return Ar(eV, (0, bx.x)(eV, JV, xV, QV).at)
        }))
      }
    }

    function Mr(VV, eV) {
      const {
        items: xV
      } = VV;
      if (0 === xV.length) return;
      const JV = VV.length / VV.cellsPerMs,
        YV = Math.floor((eV - xV[0].at) / JV) - 1;
      if (YV > 0)
        for (const UV of xV) UV.at += YV * JV
    }

    function zr(VV, eV) {
      const xV = Math.min(Math.floor(eV), VV.length - 1),
        JV = VV.hide[xV];
      return 0 !== JV && 0 !== (JV & (eV - xV < .5 ? 1 : 2))
    }

    function Gr(VV, eV) {
      const xV = Math.min(Math.floor(eV), VV.length - 1),
        JV = eV - xV,
        YV = JV < .5,
        UV = YV ? VV.edges[xV] : VV.wb[xV],
        yV = YV ? VV.wb[xV] : VV.edges[xV + 1],
        pV = YV ? 2 * JV : 2 * JV - 1;
      Nr[0] = UV[0] + (yV[0] - UV[0]) * pV, Nr[1] = UV[1] + (yV[1] - UV[1]) * pV, Nr[2] = UV[2] + (yV[2] - UV[2]) * pV
    }
    const Wr = Math.PI / 4;
    class Rr {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new Br, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.hq = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(VV) {
        const eV = performance.now();
        this.clock.sample(VV.baf2BeltLinesAt, eV), this.queue(VV.baf2BeltLinesAt, VV, 0, null, null, 0), this.applyDue(eV)
      }
      onMoves(VV) {
        const eV = performance.now(),
          xV = VV.baf2BeltMovesAt;
        this.clock.sample(xV, eV);
        for (const [JV, YV, UV, yV] of VV.baf2BeltMoveList) null === YV ? this.queue(xV - UV, null, JV, null, null, null !== yV && void 0 !== yV ? yV : 0) : this.queue(xV - UV, null, JV, YV, null !== yV && void 0 !== yV ? yV : null, 0);
        this.applyDue(eV)
      }
      start(VV) {
        this.pool = new jr.e(VV, {
          scale: .3,
          yaw: Wr
        }, 64), this.hq(), window.addEventListener("resize", this.hq)
      }
      onAfterRender(VV) {
        const {
          pool: eV
        } = this;
        if (!eV) return;
        const xV = performance.now(),
          JV = xV - this.lastRenderAt;
        this.lastRenderAt = xV, JV < 100 && (this.frameMs += .1 * (JV - this.frameMs));
        const YV = xV + this.frameMs;
        this.applyDue(YV);
        const UV = VV.cameraPosition,
          yV = eV.follow(UV);
        this.setView(VV, UV);
        const pV = this.frame++;
        for (let QV = 0; QV < this.shown.length; QV++) {
          const VV = this.shown[QV],
            xV = Pr(this.view, VV.bounds, VV.cellsPerMs),
            JV = VV.culled && 0 !== xV;
          if (VV.culled = 0 === xV, !yV && !VV.changed && !JV && (0 === xV || (pV + QV) % xV !== 0)) continue;
          VV.changed = !1, VV.loop && (Mr(VV, YV), (0, bx.s)(VV.items, VV.length, YV, VV.cellsPerMs));
          let UV = VV.length;
          for (let pV = 0; pV < VV.items.length; pV++) {
            const xV = VV.items[pV],
              JV = (0, bx.z)(xV.at, UV, YV, VV.cellsPerMs);
            if (UV = JV - bx.m, zr(VV, JV)) {
              null === xV.kind || xV.hidden || (xV.kind.hide(xV.slot), xV.hidden = !0);
              continue
            }
            let QV = xV.kind;
            if (null === QV) {
              if (QV = eV.kindOf(xV.name), null === QV) continue;
              xV.kind = QV, xV.slot = QV.take(), xV.hidden = !0, xV.drawn = NaN
            } else if (JV === xV.drawn && !xV.hidden && !yV) continue;
            Gr(VV, JV), QV.write(xV.slot, Nr[0], Nr[1], Nr[2]), xV.hidden = !1, xV.drawn = JV
          }
        }
        eV.commit()
      }
      dispose() {
        var VV;
        window.removeEventListener("resize", this.hq), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (VV = this.pool) || void 0 === VV || VV.dispose(), this.pool = null
      }
      setView(VV, eV) {
        const {
          cameraDir: xV,
          lastDir: JV
        } = this, YV = VV.cameraDirection;
        for (let wV = 0; wV < 3; wV++) JV[wV] = xV[wV], xV[wV] = YV[wV];
        const UV = xV[0] * JV[0] + xV[1] * JV[1] + xV[2] * JV[2],
          yV = Number.isNaN(UV) ? 0 : Math.acos(Math.min(1, Math.max(-1, UV))),
          {
            width: pV,
            height: QV
          } = this,
          nV = VV.tanHalfFovX;
        ! function(VV, eV, xV, JV, YV, UV, yV) {
          let pV = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          VV.x = eV[0], VV.y = eV[1], VV.z = eV[2], VV.dx = xV[0], VV.dy = xV[1], VV.dz = xV[2];
          const QV = Math.min(Math.PI, Math.atan(Math.sqrt(JV * JV + YV * YV)) + qr + pV);
          VV.cosHalf = Math.cos(QV), VV.sinHalf = Math.sin(QV), VV.pxPerBlock = UV / (2 * YV), VV.frameMs = yV
        }(this.view, eV, xV, nV, nV * QV / pV, QV * window.devicePixelRatio, this.frameMs, yV)
      }
      queue(VV, eV, xV, JV, YV, UV) {
        const yV = Math.max(this.clock.toLocal(VV), this.lastPendingAt);
        this.lastPendingAt = yV, this.pending.push({
          at: yV,
          lines: eV,
          line: xV,
          name: JV,
          pos: YV,
          idx: UV
        })
      }
      applyDue(VV) {
        const {
          pending: eV
        } = this;
        for (; this.pendingHead < eV.length && eV[this.pendingHead].at <= VV;) {
          const VV = eV[this.pendingHead++];
          if (VV.lines) this.applyLines(VV.lines, VV.at), VV.lines = null;
          else {
            const eV = this.lines.get(VV.line);
            eV && this.applyMove(eV, VV, VV.at)
          }
        }
        this.pendingHead === eV.length ? (eV.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > eV.length && (eV.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(VV, eV) {
        this.clearIsland(VV.baf2BeltIsland);
        for (const xV of VV.baf2BeltLineList) this.lines.set(xV[0], Xr(VV.baf2BeltIsland, xV, eV));
        this.shown = [...this.lines.values()]
      }
      applyMove(VV, eV, xV) {
        let {
          name: JV,
          pos: YV,
          idx: UV
        } = eV;
        VV.changed = !0, VV.loop && (Mr(VV, xV), (0, bx.s)(VV.items, VV.length, xV, VV.cellsPerMs)), null !== JV && null !== YV ? (0, bx.u)(VV.items, VV.length, Ar(JV, xV), YV, xV, VV.cellsPerMs) : null !== JV ? VV.items.push(Ar(JV, xV)) : VV.items.length > UV && this.release((0, bx.C)(VV.items, VV.length, xV, VV.cellsPerMs, UV))
      }
      clearIsland(VV) {
        for (const [eV, xV] of this.lines)
          if (xV.island === VV) {
            for (const VV of xV.items) this.release(VV);
            this.lines.delete(eV)
          }
      }
      release(VV) {
        null !== VV.kind && (VV.kind.release(VV.slot), VV.kind = null, VV.slot = -1, VV.hidden = !0, VV.drawn = NaN)
      }
    }
    var gr = xV(37756),
      Dr = xV(39665);

    function ir(VV) {
      let {
        depth: eV,
        store: xV,
        t: YV
      } = VV;
      const UV = function(VV) {
        const [eV, xV] = (0, JV.useState)(VV.lastPlayerY());
        return (0, ew.g)(DY, xV), (0, JV.useEffect)((() => {
          xV(VV.lastPlayerY())
        }), [VV]), eV
      }(xV);
      if (null === UV) return null;
      const [yV, pV] = eV, QV = UV > yV ? yV : null !== pV && UV < pV ? pV : null, nV = {
        y: kU(UV),
        target: null === QV ? "" : kU(QV)
      };
      return (0, qU.jsx)("span", {
        className: tY()("Baf2QuestDepth", {
          Reached: null === QV
        }),
        children: YV(`${Uw}${null===QV?"questDepthReached":"questDepth"}`, nV)
      })
    }

    function Cr(VV) {
      let {
        also: eV,
        view: xV,
        t: JV
      } = VV;
      return (0, qU.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, qU.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, qU.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, qU.jsx)("strong", {
            children: JV(`${Uw}questAlsoDownHere`)
          }), (0, qU.jsx)("span", {
            className: "Baf2QuestChips",
            children: eV.map((VV => {
              let [eV, YV, UV, yV] = VV;
              return (0, qU.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": JV(`${Uw}questAlsoItem`, {
                  item: pw(JV, xV.itemNames[eV], eV),
                  have: String(YV),
                  need: String(UV)
                }),
                children: [(0, qU.jsx)(ww, {
                  item: eV
                }), (0, qU.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${YV}/${UV}`
                }), null !== yV && (0, qU.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: JV(`${Uw}questAlsoDepth`, {
                    y: kU(yV)
                  })
                })]
              }, eV)
            }))
          })]
        })]
      })
    }
    var ar = xV(3848);

    function or(VV) {
      let {
        expanded: eV,
        inventoryOpen: xV,
        children: YV
      } = VV;
      const UV = (0, JV.useRef)(null);
      return (0, JV.useEffect)((() => {
        const VV = UV.current,
          eV = null === VV || void 0 === VV ? void 0 : VV.closest(".RightElements"),
          JV = null === VV || void 0 === VV ? void 0 : VV.firstElementChild;
        if (!VV || !eV || !JV) return;
        return (0, Dr.b)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [eV, JV], (() => {
          const YV = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === YV.length) return;
          const UV = Math.max(...YV.map((VV => VV.getBoundingClientRect().bottom))),
            yV = eV.getBoundingClientRect(),
            pV = xV ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (pV) {
            const eV = parseFloat(getComputedStyle(JV).marginLeft) + parseFloat(getComputedStyle(JV).marginRight),
              xV = yV.right - pV.getBoundingClientRect().right - 8 - eV;
            VV.style.setProperty("--baf2-quest-room", `${xV}px`), VV.classList.toggle("NoRoom", xV < 150)
          } else VV.style.removeProperty("--baf2-quest-room"), VV.classList.remove("NoRoom");
          const QV = UV - yV.top + 8,
            nV = function(VV, eV, xV) {
              const JV = eV.getBoundingClientRect(),
                YV = VV.getBoundingClientRect(),
                UV = (0, ar.f)(YV.left, YV.right, JV.top + xV);
              if (null !== UV && UV < JV.bottom) return UV - JV.top;
              return JV.height - (parseFloat(getComputedStyle(eV).paddingBottom) || 0)
            }(VV, eV, QV) - 8,
            wV = window.innerHeight / 2 - yV.top,
            {
              top: ZV,
              maxHeight: vV
            } = function(VV, eV, xV, JV, YV) {
              const UV = Math.min(xV, Math.max(0, eV - VV)),
                yV = YV ? VV : Math.max(VV, Math.min(JV - UV / 2, eV - UV));
              return {
                top: yV,
                maxHeight: Math.max(0, eV - yV)
              }
            }(QV, nV, function(VV) {
              const eV = VV.firstElementChild,
                xV = eV ? eV.scrollHeight - eV.clientHeight : 0;
              return VV.getBoundingClientRect().height + Math.max(0, xV)
            }(JV), wV, jU());
          VV.style.top = `${ZV}px`, VV.style.maxHeight = `${vV}px`
        }))
      }), [xV]), (0, qU.jsx)("div", {
        ref: UV,
        className: tY()("Baf2QuestHud", {
          Expanded: eV
        }),
        children: YV
      })
    }

    function cr(VV) {
      let {
        amount: eV,
        t: xV
      } = VV;
      return (0, qU.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, qU.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, qU.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: xV(`${Uw}questStepsDone`, {
            amount: String(eV)
          })
        })]
      })
    }

    function hr(VV) {
      let {
        pulse: eV
      } = VV;
      return 0 === eV ? null : (0, qU.jsx)("span", {
        className: "Baf2QuestTrackerPulse",
        "aria-hidden": "true"
      }, eV)
    }

    function lr(VV) {
      var eV;
      let {
        store: xV
      } = VV;
      const YV = (0, ew.j)(gY, xV.get()),
        [UV, yV] = (0, JV.useState)(!1),
        {
          t: pV
        } = (0, AY.A)(),
        QV = (0, EU.f)(BU),
        {
          openInGameMenuName: nV,
          openEverythingMenuName: wV
        } = (0, BY.l)(["openInGameMenuName", "openEverythingMenuName"]),
        ZV = "inventory" === nV && null === wV,
        vV = null !== nV && !ZV || null !== wV;
      if (! function(VV) {
          return null !== VV.name || null !== VV.side
        }(YV) || vV || "off" === YV.tutorial) return null;
      const rV = hY(YV.rows),
        kV = rV.filter((VV => VV.done)).length,
        bV = function(VV, eV) {
          const xV = fY(VV);
          let JV = 0;
          return VV.filter(((VV, YV) => !!VV.justFinished || !(VV.done || YV < xV || JV > eV) && (JV++, !0)))
        }(YV.rows, QV ? 0 : 2),
        EV = QV ? bV : function(VV, eV) {
          const xV = eV.filter((VV => !VV.justFinished));
          if (xV.length < 2) return [...eV];
          const JV = VV.indexOf(xV[0]),
            YV = VV.indexOf(xV[xV.length - 1]),
            UV = new Set(hY(VV));
          return VV.filter(((VV, xV) => eV.includes(VV) || VV.done && UV.has(VV) && xV > JV && xV < YV))
        }(YV.rows, bV),
        BV = UV ? YV.rows : EV,
        jV = UV || QV ? [] : function(VV, eV) {
          const xV = new Array(eV.length + 1).fill(0),
            JV = new Set(hY(VV));
          let YV = 0;
          for (const UV of VV) YV < eV.length && UV === eV[YV] ? YV++ : UV.done && JV.has(UV) && xV[YV]++;
          return xV
        }(YV.rows, EV),
        qV = UV || EV.length < YV.rows.length || null !== YV.reward,
        tV = cY(YV),
        FV = tV ? pV(`${Uw}questLineComplete`) : YV.tier ? rw(pV, YV.tier) : pV(`${Uw}currentQuest`),
        TV = function(VV) {
          var eV, xV;
          if (cY(VV)) return null;
          const JV = null === (eV = VV.chapters) || void 0 === eV ? void 0 : eV.find((eV => {
            let [xV] = eV;
            return xV === VV.tier
          }));
          if (!JV) return null;
          const YV = JV[1].filter((VV => !VV[4]));
          if (0 === YV.length) return null;
          const UV = null === (xV = VV.name) || void 0 === xV ? void 0 : xV[0],
            yV = VV => YV.findIndex((eV => eV[0] === UV && (!VV || !eV[3]))),
            pV = yV(!0),
            QV = pV >= 0 ? pV : yV(!1);
          if (QV >= 0) return [QV + 1, YV.length];
          const nV = YV.filter((VV => VV[3])).length;
          return [Math.min(nV + 1, YV.length), YV.length]
        }(YV);
      return (0, qU.jsx)(gr.e, {
        placement: "topRight",
        children: (0, qU.jsx)(or, {
          expanded: UV,
          inventoryOpen: ZV,
          children: (0, qU.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: yw,
            children: [null !== YV.name && (0, qU.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [(0, qU.jsx)(hr, {
                pulse: YV.pulse
              }), (0, qU.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, qU.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [FV, TV && (0, qU.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": pV(`${Uw}questPlaceLabel`, {
                      n: String(TV[0]),
                      total: String(TV[1])
                    }),
                    children: pV(`${Uw}questPlace`, {
                      n: String(TV[0]),
                      total: String(TV[1])
                    })
                  }), YV.tier && YV.core && !tV && (0, qU.jsx)(kw, {
                    core: YV.core,
                    t: pV
                  })]
                })
              }), (0, qU.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: pV(`${Uw}${YV.name[0]}`, Qw(YV.name[1]))
              }), (rV.length > 1 || qV) && (0, qU.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [rV.length > 1 && (0, qU.jsx)(bw, {
                  rows: rV,
                  t: pV
                }), qV && (0, qU.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": UV,
                  onClick: () => {
                    yV(!UV)
                  },
                  children: [(0, qU.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: pV(`${Uw}questStepsToggle`, {
                      done: String(kV),
                      total: String(rV.length)
                    })
                  }), (0, qU.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: UV ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, qU.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [BV.map(((VV, eV) => {
                  var UV;
                  const yV = VV.current && YV.depth;
                  return (0, qU.jsxs)(JV.Fragment, {
                    children: [(null !== (UV = jV[eV]) && void 0 !== UV ? UV : 0) > 0 && (0, qU.jsx)(cr, {
                      amount: jV[eV],
                      t: pV
                    }), (0, qU.jsx)(Ew, {
                      row: VV,
                      view: YV,
                      t: pV,
                      extra: yV && (0, qU.jsx)(ir, {
                        depth: yV,
                        store: xV,
                        t: pV
                      })
                    })]
                  }, VV.id)
                })), (null !== (eV = jV[BV.length]) && void 0 !== eV ? eV : 0) > 0 && (0, qU.jsx)(cr, {
                  amount: jV[BV.length],
                  t: pV
                }), YV.also.length > 0 && (0, qU.jsx)(Cr, {
                  also: YV.also,
                  view: YV,
                  t: pV
                })]
              }), UV && YV.reward && (0, qU.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [pV(`${Uw}questReward`), (0, qU.jsx)(ww, {
                  item: YV.reward
                }), pw(pV, YV.itemNames[YV.reward], YV.reward)]
              })]
            }), YV.side && (0, qU.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [aY(YV, Date.now()) && (0, qU.jsx)(hr, {
                pulse: YV.sideCameUpAt
              }), (0, qU.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: pV(`${Uw}questSide`)
              }), (0, qU.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: pV(`${Uw}${YV.side.name[0]}`, Qw(YV.side.name[1]))
              }), (0, qU.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, qU.jsx)(Ew, {
                  row: YV.side.row,
                  view: YV,
                  t: pV
                })
              })]
            })]
          })
        })
      })
    }
    const Lr = "baf2ToastView";
    class fr {
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = VV, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: VV,
          holdMs: eV
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const VV = this.dropCovered();
          VV && this.show(VV.message, VV.holdMs)
        }), 250));
        const xV = this.dropCovered();
        null !== xV && (xV.holdMs > 0 || "baf2ToastCelebrate" === xV.message.baf2ToastStyle) && "baf2ToastCelebrate" !== VV.baf2ToastStyle && this.show(xV.message, xV.holdMs);
        const JV = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== VV.baf2ToastStyle && JV > 0) return this.pending = {
          message: VV,
          holdMs: eV
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const VV = this.pending;
          this.pending = null, VV && this.present(VV.message, VV.holdMs)
        }), JV));
        this.present(VV, eV)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(VV, eV) {
        this.clearTimers(), this.pending = null;
        const xV = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: VV.baf2ToastText,
          style: VV.baf2ToastStyle,
          swapped: xV,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === VV.baf2ToastStyle ? 1500 : eV), this.QZ();
        const JV = Math.min(8e3, Math.max(1e3, VV.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.leave()
        }), JV)
      }
      leave() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.QZ(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.QZ()
        }), 200))
      }
      clearTimers() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), null !== this.pendingTimer && (clearTimeout(this.pendingTimer), this.pendingTimer = null)
      }
      dropCovered() {
        null !== this.coveredTimer && (clearInterval(this.coveredTimer), this.coveredTimer = null);
        const VV = this.covering;
        return this.covering = null, VV
      }
      QZ() {
        WY.h.QZ(Lr, this.view, !0)
      }
    }
    var mr = xV(78);
    const Kr = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function Hr(VV) {
      let {
        store: eV
      } = VV;
      const xV = (0, ew.j)(Lr, eV.get()),
        {
          openInGameMenuName: JV,
          openEverythingMenuName: YV
        } = (0, BY.l)(["openInGameMenuName", "openEverythingMenuName"]),
        UV = xV && (0, qU.jsxs)("div", {
          className: tY()("Baf2Toast", Kr[xV.style], {
            Swapped: xV.swapped,
            Leaving: xV.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === xV.style && (0, qU.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, qU.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, qU.jsx)(MY.b, {
              text: xV.text
            })
          })]
        }, xV.id);
      return null !== JV && null === YV ? (0, mr.createPortal)((0, qU.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: UV
      }), document.body) : (0, qU.jsx)(gr.e, {
        children: UV
      })
    }
    const ur = "baf2AreaView";
    class sr {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.hn = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.hn = null
      }
      arrive(VV, eV) {
        eV && function(VV) {
          return "home" === VV.baf2AreaPlace && void 0 !== VV.baf2AreaNameText
        }(VV) ? this.hn = VV : this.show(VV)
      }
      release() {
        const VV = this.hn;
        null !== VV && this.show(VV)
      }
      show(VV) {
        this.clearTimer(), this.hn = null;
        const eV = void 0 === VV.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: VV,
          ms: eV
        }, this.QZ(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.QZ()
        }), eV)
      }
      dispose() {
        this.clearTimer(), this.hn = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      QZ() {
        WY.h.QZ(ur, this.view, !0)
      }
    }

    function Sr(VV) {
      var eV;
      let {
        store: xV
      } = VV;
      const {
        t: JV
      } = (0, AY.A)(), YV = (0, ew.j)(ur, xV.get());
      if (!YV) return null;
      const {
        area: UV
      } = YV, yV = UV.baf2AreaResetMinutes;
      return (0, qU.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": UV.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${YV.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, qU.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), UV.baf2AreaHeading && (0, qU.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: JV(UV.baf2AreaHeading)
        }), (0, qU.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (eV = UV.baf2AreaNameText) && void 0 !== eV ? eV : JV(UV.baf2AreaName)
        }), UV.baf2AreaNote && (0, qU.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: JV(UV.baf2AreaNote)
        }), void 0 !== yV && (0, qU.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: JV("buildAFactory2Game:areaWildsReset", {
            time: bU(JV, 60 * yV)
          })
        })]
      }, YV.id)
    }
    const Ir = "baf2GearGauge";
    class dr {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      jF(VV) {
        var eV;
        if (this.clearLinger(), null === VV.gearPowerKind) return void this.set(null);
        const xV = "jetpack" === VV.gearPowerKind && (JV = VV.gearChargeState, YV = VV.gearCharge, "flying" === JV || "charging" === JV || "outOfCharge" === JV || "ceiling" === JV || "offPlot" === JV || "noPower" === JV && YV <= 0);
        var JV, YV;
        const UV = !0 === (null === (eV = this.view) || void 0 === eV ? void 0 : eV.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          yV = xV || "jetpack" === VV.gearPowerKind && UV;
        this.set({
          gauge: VV,
          jetShown: yV
        }), yV && !xV && (this.lingerTimer = setTimeout((() => {
          this.lingerTimer = null, this.view && this.set({
            ...this.view,
            jetShown: !1
          })
        }), 1500))
      }
      dispose() {
        this.clearLinger(), this.view = null
      }
      set(VV) {
        this.view = VV, WY.h.QZ(Ir, VV, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const Or = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function Vk(VV) {
      let {
        store: eV
      } = VV;
      const xV = (0, ew.j)(Ir, eV.get());
      return xV ? "jetpack" === xV.gauge.gearPowerKind ? (0, qU.jsx)(ek, {
        view: xV
      }) : (0, qU.jsx)(xk, {
        gauge: xV.gauge
      }) : null
    }

    function ek(VV) {
      let {
        view: eV
      } = VV;
      const {
        t: xV
      } = (0, AY.A)(), {
        gauge: JV
      } = eV, YV = JV.gearChargeMax > 0 ? Math.max(0, Math.min(1, JV.gearCharge / JV.gearChargeMax)) : 0, UV = Or[JV.gearChargeState], yV = UV ? xV(UV) : null;
      return (0, qU.jsxs)("div", {
        className: tY()("Baf2JetArc", {
          Shown: eV.jetShown,
          Low: YV < .2,
          Warm: YV >= .2 && YV < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - YV)
        },
        "aria-hidden": !eV.jetShown,
        children: [(0, qU.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, qU.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: Jk,
            pathLength: 100
          }), (0, qU.jsx)("path", {
            className: "Baf2JetArcFill",
            d: Jk,
            pathLength: 100
          })]
        }), (0, qU.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * YV), "%"]
        }), yV && (0, qU.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: yV
        })]
      })
    }

    function xk(VV) {
      let {
        gauge: eV
      } = VV;
      const {
        t: xV
      } = (0, AY.A)(), JV = function(VV, eV) {
        switch (eV.gearPowerKind) {
          case "skyPack":
            return VV("buildAFactory2Game:gearSkyPack", {
              charge: eV.gearCharge,
              max: eV.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return VV("buildAFactory2Game:gearIslandDraw", {
              power: IV(eV.gearIslandPower),
              cost: IV(eV.gearCostPerUse)
            });
          case "barrier":
            return VV("buildAFactory2Game:gearBarrier", {
              shield: Math.round(eV.gearCharge),
              max: eV.gearChargeMax,
              power: IV(eV.gearIslandPower)
            });
          default:
            return null
        }
      }(xV, eV);
      return null === JV ? null : (0, qU.jsx)(gr.e, {
        children: (0, qU.jsx)("div", {
          className: tY()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === eV.gearChargeState || "outOfCharge" === eV.gearChargeState
          }),
          role: "status",
          children: JV
        })
      })
    }
    const Jk = (() => {
      const VV = VV => {
        const eV = VV * Math.PI / 180;
        return `${(40*Math.cos(eV)).toFixed(2)} ${(40*Math.sin(eV)).toFixed(2)}`
      };
      return `M ${VV(160)} A 40 40 0 1 1 ${VV(380)}`
    })();
    class Yk {
      constructor(VV) {
        this.onElement = VV, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      jF(VV) {
        let eV = VV.baf2LabelsReset || VV.baf2LabelsIsland !== this.island;
        eV && (this.labels.clear(), this.island = VV.baf2LabelsIsland);
        for (const [xV, JV, YV, UV, yV] of VV.baf2LabelsList) {
          const VV = `${xV},${JV},${YV}`,
            pV = this.labels.get(VV);
          null === UV ? eV = this.labels.delete(VV) || eV : pV && pV.item === UV && (pV.count === yV || pV.count >= 0 && yV >= 0) ? pV.count !== yV && (pV.count = yV, this.writeCount(VV, yV)) : (this.labels.set(VV, {
            key: VV,
            pos: [xV, JV, YV],
            item: UV,
            count: yV
          }), this.writeCount(VV, yV), eV = !0)
        }
        if (this.changes++, eV) {
          this.snapshot = [...this.labels.values()];
          for (const VV of this.listeners) VV()
        }
      }
      bindCount(VV) {
        const eV = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${VV}`;
        let xV = this.countRefs.get(eV);
        return xV || (xV = xV => {
          var JV, YV;
          xV ? (this.countElements.set(eV, xV), this.writeCount(VV, null !== (JV = null === (YV = this.labels.get(VV)) || void 0 === YV ? void 0 : YV.count) && void 0 !== JV ? JV : -1)) : (this.countElements.delete(eV), this.countRefs.delete(eV))
        }, this.countRefs.set(eV, xV)), xV
      }
      setCountWords(VV) {
        this.countWords = VV;
        for (const [eV, xV] of this.labels) this.writePart(`words|${eV}`, VV(xV.count), xV.count)
      }
      writeCount(VV, eV) {
        this.writePart(`bare|${VV}`, rU(eV), eV), this.countElements.has(`words|${VV}`) && this.writePart(`words|${VV}`, this.countWords(eV), eV)
      }
      writePart(VV, eV, xV) {
        const JV = this.countElements.get(VV);
        if (!JV || xV < 0) return;
        const YV = JV.firstChild;
        YV && 3 === YV.nodeType && !YV.nextSibling ? YV.nodeValue !== eV && (YV.nodeValue = eV) : JV.textContent !== eV && (JV.textContent = eV)
      }
      list() {
        return this.snapshot
      }
      at(VV) {
        return this.labels.get(`${VV[0]},${VV[1]},${VV[2]}`)
      }
      version() {
        return this.changes
      }
      subscribe(VV) {
        return this.listeners.add(VV), () => {
          this.listeners.delete(VV)
        }
      }
      bind(VV) {
        let eV = this.refs.get(VV);
        return eV || (eV = eV => {
          const xV = this.elements.get(VV);
          var JV, YV;
          xV && (null === (JV = this.onElement) || void 0 === JV || JV.call(this, xV, !1));
          eV ? (this.elements.set(VV, eV), null === (YV = this.onElement) || void 0 === YV || YV.call(this, eV, !0)) : (this.elements.delete(VV), this.refs.delete(VV))
        }, this.refs.set(VV, eV)), eV
      }
      onAfterRender(VV, eV, xV, JV) {
        for (const YV of this.snapshot) {
          const UV = this.elements.get(YV.key);
          if (!UV) continue;
          if (JV(YV.key)) {
            (0, Ur.f)(UV, !0);
            continue
          }
          const yV = (0, Zr.d)(UV, VV, eV, YV.pos, 1.1, 24);
          yV && xV.add(yV, UV, 0, !1)
        }
      }
    }
    const Uk = (0, JV.memo)((function(VV) {
        let {
          item: eV
        } = VV;
        return (0, qU.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, qU.jsx)(XY.e, {
            itemName: eV,
            amount: 0
          })
        })
      })),
      yk = (0, JV.memo)((function(VV) {
        let {
          label: eV,
          bindRef: xV,
          countRef: JV,
          wordsRef: YV
        } = VV;
        return (0, qU.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: xV,
          hidden: !0,
          children: [(0, qU.jsx)(Uk, {
            item: eV.item
          }), eV.count >= 0 && (0, qU.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, qU.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: YV
            }), (0, qU.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: JV
            })]
          })]
        })
      })),
      pk = (0, JV.memo)((function(VV) {
        let {
          store: eV
        } = VV;
        const {
          t: xV
        } = (0, AY.A)(), [YV, UV] = (0, JV.useState)((() => eV.list()));
        return (0, JV.useEffect)((() => (UV(eV.list()), eV.subscribe((() => {
          UV(eV.list())
        })))), [eV]), (0, JV.useEffect)((() => {
          eV.setCountWords((VV => xV("buildAFactory2Game:labelSiloCount", {
            count: rU(VV)
          })))
        }), [eV, xV]), (0, qU.jsx)("div", {
          className: "Baf2IslandLabels",
          children: YV.map((VV => -2 === VV.count ? null : (0, qU.jsx)(yk, {
            label: VV,
            bindRef: eV.bind(VV.key),
            countRef: eV.bindCount(VV.key),
            wordsRef: eV.bindCount(VV.key, "words")
          }, VV.key)))
        })
      })),
      Qk = {
        read: () => !0,
        write: () => {}
      };

    function nk(VV) {
      return `${VV[0]},${VV[1]},${VV[2]}`
    }

    function wk(VV) {
      let [eV, xV, JV, YV, UV, yV, pV, QV, nV, wV, ZV, vV] = VV;
      const rV = void 0 === ZV || void 0 === vV ? function(VV) {
        return [Math.floor((VV - 1) / 2), 0]
      }(UV) : [ZV, vV];
      return {
        kind: 0 === QV ? "reactor" : "battery",
        box: Lx([eV, xV, JV], YV, UV, yV, pV, rV),
        formed: 1 === nV,
        level: wV
      }
    }
    class Zk {
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qk;
        this.guideSetting = VV, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = VV.read()
      }
      jF(VV) {
        var eV;
        const xV = new Map;
        for (const JV of VV.baf2RxPlanList) {
          const VV = wk(JV);
          xV.set(nk(VV.box.ctrl), VV)
        }
        this.plans = xV, this.layouts = new Map((null !== (eV = VV.baf2RxLayouts) && void 0 !== eV ? eV : []).map((VV => {
          let [eV, xV, JV, YV] = VV;
          return [nk([eV, xV, JV]), YV]
        }))), this.predicted.clear(), VV.baf2RxFormedAt && (this.formed = {
          ctrl: VV.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const JV of [...this.startersOff]) {
          const VV = xV.get(JV);
          VV && !VV.formed || this.startersOff.delete(JV)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((VV => this.planByKey(VV)))
      }
      planAt(VV) {
        return this.planByKey(nk(VV))
      }
      predictSize(VV, eV) {
        this.predicted.set(nk(VV), eV), this.changed()
      }
      unpredict(VV) {
        this.predicted.delete(nk(VV)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(VV) {
        var eV;
        const xV = nk(VV);
        return this.predicted.has(xV) ? null : null !== (eV = this.layouts.get(xV)) && void 0 !== eV ? eV : null
      }
      showsStarter(VV) {
        return !this.startersOff.has(nk(VV))
      }
      setStarter(VV, eV) {
        const xV = nk(VV);
        eV ? this.startersOff.delete(xV) : this.startersOff.add(xV), this.changed()
      }
      guideOn() {
        return this.guide
      }
      setGuide(VV) {
        this.guide = VV, this.guideSetting.write(VV), this.changed()
      }
      getVersion() {
        return this.version
      }
      subscribe(VV) {
        return this.listeners.add(VV), () => {
          this.listeners.delete(VV)
        }
      }
      dispose() {
        this.plans.clear(), this.predicted.clear(), this.startersOff.clear(), this.layouts.clear(), this.listeners.clear(), this.formed = null
      }
      planByKey(VV) {
        const eV = this.plans.get(VV);
        if (!eV) return null;
        const xV = this.predicted.get(VV);
        return xV ? {
          ...eV,
          box: mx(eV.box, eV.kind, xV[0], xV[1], xV[2])
        } : eV
      }
      changed() {
        this.version++;
        for (const VV of this.listeners) VV()
      }
    }
    var vk = xV(206);
    const rk = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function kk(VV, eV, xV, JV) {
      const YV = VV.length / 3;
      for (let UV = 0; UV < rk.length / 3; UV++) VV.push(rk[3 * UV] * JV[0] / 2 + xV[0], rk[3 * UV + 1] * JV[1] / 2 + xV[1], rk[3 * UV + 2] * JV[2] / 2 + xV[2]);
      for (let UV = YV; UV < YV + 24; UV += 4) eV.push(UV, UV + 1, UV + 2, UV, UV + 2, UV + 3)
    }

    function bk(VV, eV, xV) {
      const JV = eV[0][0],
        YV = [],
        UV = [];
      for (const [yV, pV] of eV) kk(YV, UV, [yV[0] - JV[0], yV[1] - JV[1], yV[2] - JV[2]], pV);
      return VV.createGameMesh({
        positions: YV,
        indices: UV
      }, xV, JV)
    }

    function Ek(VV, eV) {
      const xV = VV.w - 2,
        JV = VV.d - 2;
      return 1 === function(VV, eV, xV, JV) {
        const [YV, UV, yV] = VV;
        if (Number(YV <= 2) + Number(UV <= 2) + Number(yV <= 2) >= 2) return function(VV, eV, xV) {
          return (VV + eV + xV) % 2 === 0 ? 1 : 3
        }(eV, xV, JV);
        const [pV, QV] = YV >= UV && YV >= yV ? [xV, JV] : UV >= yV ? [eV, JV] : [eV, xV];
        return pV % 2 === 0 && QV % 2 === 0 ? 1 : 3
      }([xV, VV.h - 2, JV], eV % xV, Math.floor(eV / (xV * JV)), Math.floor(eV / xV) % JV) ? "rod" : "channel"
    }

    function Bk(VV, eV, xV) {
      if ("reactor" !== VV.kind || VV.formed || !eV) return !1;
      const JV = ux(VV.box);
      for (let YV = 0; YV < JV; YV++) {
        const VV = xV(YV);
        if (null !== VV && Gx(VV)) return !1
      }
      return !0
    }

    function jk(VV, eV, xV, JV, YV) {
      var UV;
      let yV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const pV = VJ(VV.box, eV),
        QV = YJ(VV.kind, pV, xV);
      if ("wrong" === QV || "blocked" === QV) return "wrong";
      if (!YV) return null;
      if ("inside" === pV && "reactor" === VV.kind && "Air" === Wx(xV)) {
        if (null !== yV) {
          var nV;
          const xV = Vv[ev(yV, eJ(VV.box, eV))];
          return xV && null !== (nV = tQ(xV)) && void 0 !== nV ? nV : null
        }
        if (JV) return Ek(VV.box, eJ(VV.box, eV))
      }
      if ("missing" !== QV) return null;
      const wV = UJ(VV.kind, pV);
      return null === wV ? null : null !== (UV = tQ(wV)) && void 0 !== UV ? UV : null
    }
    const qk = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function tk(VV, eV, xV) {
      const JV = xV => {
        const JV = eV(dx(VV.box, xV));
        return null !== JV && function(VV, eV) {
          return "reactor" !== VV.kind || eV !== Sx(VV.box) && "inside" !== VJ(VV.box, eV)
        }(VV, xV) && "ok" !== YJ(VV.kind, VJ(VV.box, xV), JV)
      };
      if (xV) {
        const UV = Ox(VV.box, [Math.floor(xV[0]), Math.floor(xV[1]), Math.floor(xV[2])]);
        if (UV >= 0 && (JV(UV) || (YV = UV, "reactor" === VV.kind && "inside" === VJ(VV.box, YV) && "Air" === eV(dx(VV.box, YV))))) return UV
      }
      var YV;
      const UV = ux(VV.box);
      for (let yV = 0; yV < UV; yV++)
        if (JV(yV)) return yV;
      return -1
    }

    function Fk(VV, eV) {
      return Math.floor(eV / (VV.w * VV.d))
    }

    function Tk(VV, eV, xV) {
      return xV >= 0 && Fk(VV, eV) > Fk(VV, xV)
    }

    function Pk(VV, eV) {
      return eV >= 0 && VV.h >= 3 && Fk(VV, eV) === VV.h - 1
    }

    function Ak(VV) {
      const eV = Wx(VV);
      return eV === jx || "Collider" === eV || "Laser" === eV || eV.startsWith("_Collider ")
    }

    function Nk(VV, eV, xV, JV) {
      if (JV(VV)) return null;
      if (!qk.every((eV => {
          let [JV, YV, UV] = eV;
          const yV = xV([VV[0] + JV, VV[1] + YV, VV[2] + UV]);
          return null !== yV && !ox("reactor", yV) && "reactor" !== Rx(yV)
        }))) return null;
      const YV = cx("reactor").min,
        UV = Lx([VV[0], VV[1], VV[2]], function(VV, eV) {
          const xV = eV[0] - (VV[0] + .5),
            JV = eV[2] - (VV[2] + .5);
          return Math.abs(xV) >= Math.abs(JV) ? xV >= 0 ? 2 : 4 : JV >= 0 ? 1 : 3
        }(VV, eV), YV, YV, YV, fx("reactor", YV)),
        yV = Sx(UV);
      let pV = !0;
      for (let QV = 0; QV < ux(UV) && pV; QV++) {
        if (QV === yV) continue;
        const VV = dx(UV, QV),
          eV = xV(VV);
        pV = !JV(VV) && (null === eV || !Ak(eV))
      }
      return {
        box: UV,
        fits: pV
      }
    }
    const Xk = qQ,
      Mk = "baf2Goal",
      zk = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      Gk = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      Wk = .4;

    function Rk(VV, eV) {
      let [xV, JV, YV] = VV;
      const UV = MQ([xV - .02, JV - .02, YV - .02], [xV + 1.02, JV + 1.02, YV + 1.02], .07);
      return eV && (UV.push([
        [xV + .5, JV + 1 + .7, YV + .5],
        [.08, 1.4, .08]
      ]), UV.push([
        [xV + .5, JV + 1 + 1.4 + .2, YV + .5],
        [Wk, Wk, Wk]
      ])), UV
    }

    function gk(VV, eV) {
      let [xV, JV, YV] = eV;
      return VV.isBlockInLoadedChunk(xV, JV, YV) ? VV.blockIdToBlockName(VV.getBlockId(xV, JV, YV)) : null
    }
    let Dk = null;
    const ik = new Set;
    let Ck = null;

    function ak(VV) {
      Dk = VV;
      for (const eV of ik) eV(VV)
    }
    class ck {
      constructor(VV) {
        var eV;
        this.plans = VV, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (eV = VV => {
          var eV, xV;
          this.setGoal(null !== (eV = null === VV || void 0 === VV ? void 0 : VV.goal) && void 0 !== eV ? eV : null, null !== (xV = null === VV || void 0 === VV ? void 0 : VV.startsBattery) && void 0 !== xV && xV)
        }, Ck ??= [WY.h.subscribe("setDirectionArrow", (VV => {
          let {
            id: eV,
            position: xV,
            text: JV
          } = VV;
          eV === Mk && ak({
            goal: [Math.floor(xV[0]), Math.floor(xV[1]), Math.floor(xV[2])],
            startsBattery: JSON.stringify(null !== JV && void 0 !== JV ? JV : null).includes("arrowStartBattery")
          })
        })), WY.h.subscribe("clearDirectionArrow", (VV => {
          let {
            id: eV
          } = VV;
          null !== eV && eV !== Mk || ak(null)
        }))], ik.add(eV), eV(Dk), () => {
          ik.delete(eV)
        })
      }
      onAfterRender(VV, eV) {
        const xV = performance.now();
        if (this.cues.length > 0) {
          const eV = .55 + .45 * Math.sin(xV / 1100 * Math.PI * 2);
          for (const xV of this.cues) VV.setGameMesh(xV, {
            visibility: eV
          })
        }
        if (xV - this.lastCheckMs < 150) return;
        this.lastCheckMs = xV;
        const JV = this.plans.all().filter((VV => {
            const [xV, JV, YV] = VV.box.ctrl;
            return (!VV.formed || null !== this.plans.layoutOf(VV.box.ctrl)) && (xV - eV[0]) ** 2 + (JV - eV[1]) ** 2 + (YV - eV[2]) ** 2 <= 2304
          })),
          YV = function(VV, eV) {
            const xV = vk.f.PZ,
              JV = new Map;
            for (const UV of eV) {
              const eV = dx(UV.box, 0),
                yV = dx(UV.box, ux(UV.box) - 1),
                pV = [Math.min(eV[0], yV[0]), Math.min(eV[1], yV[1]), Math.min(eV[2], yV[2])].map((VV => Math.floor(VV / xV))),
                QV = [Math.max(eV[0], yV[0]), Math.max(eV[1], yV[1]), Math.max(eV[2], yV[2])].map((VV => Math.floor(VV / xV)));
              for (let xV = pV[0]; xV <= QV[0]; xV++)
                for (let eV = pV[1]; eV <= QV[1]; eV++)
                  for (let UV = pV[2]; UV <= QV[2]; UV++) {
                    var YV;
                    JV.set(`${xV},${eV},${UV}`, null !== (YV = VV.getChunkVersion(xV, eV, UV)) && void 0 !== YV ? YV : -1)
                  }
            }
            return JV
          }(VV, JV);
        this.plans.getVersion() === this.storeVersion && (function(VV, eV) {
          if (VV.size !== eV.size) return !1;
          for (const [xV, JV] of VV)
            if (eV.get(xV) !== JV) return !1;
          return !0
        }(YV, this.chunkVersions) || xV - this.lastRescanMs < 600) || (this.lastRescanMs = xV, this.storeVersion = this.plans.getVersion(), this.chunkVersions = YV, this.redraw(VV, JV))
      }
      dispose(VV) {
        this.unwatch(), Dk = null, this.clearMeshes(VV), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(VV, eV) {
        var xV;
        (null === VV || void 0 === VV ? void 0 : VV.join()) === (null === (xV = this.goal) || void 0 === xV ? void 0 : xV.join()) && eV === this.startsBattery || (this.goal = VV, this.startsBattery = eV, this.storeVersion = -1)
      }
      redraw(VV, eV) {
        const xV = eV => gk(VV, eV),
          JV = new Map,
          YV = [],
          UV = this.plans.guideOn();
        for (const nV of eV) {
          const VV = UV && Bk(nV, this.plans.showsStarter(nV.box.ctrl), (VV => xV(dx(nV.box, VV)))),
            eV = "reactor" === nV.kind ? this.plans.layoutOf(nV.box.ctrl) : null,
            yV = UV && !nV.formed ? tk(nV, xV, this.goal) : -1;
          yV >= 0 && YV.push([dx(nV.box, yV), Pk(nV.box, yV)]);
          const pV = ux(nV.box);
          for (let YV = 0; YV < pV; YV++) {
            const pV = dx(nV.box, YV),
              QV = xV(pV),
              wV = null === QV ? null : jk(nV, YV, QV, VV, UV, eV);
            if (null !== wV) {
              const VV = "wrong" !== wV && Tk(nV.box, YV, yV),
                eV = VV ? `${wV}Dim` : wV;
              let xV = JV.get(eV);
              xV || (xV = {
                draw: {
                  ghost: wV,
                  dim: VV
                },
                list: []
              }, JV.set(eV, xV)), xV.list.push(pV)
            }
          }
        }
        if (UV && this.startsBattery && this.goal) {
          const [VV, eV, YV] = this.goal, UV = [];
          for (const [JV, yV, pV] of zk) {
            const QV = [VV + JV, eV + yV, YV + pV];
            "Air" === xV(QV) && UV.push(QV)
          }
          if (UV.length > 0) {
            var yV;
            const VV = null !== (yV = JV.get("cell")) && void 0 !== yV ? yV : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            VV.list.push(...UV), JV.set("cell", VV)
          }
        }
        const pV = [...JV.keys()].sort(),
          QV = [...pV.map((VV => `${VV}:${JV.get(VV).list.join(";")}`)), `cue:${YV.join(";")}`].join("|");
        if (QV !== this.shownKey) {
          this.shownKey = QV, this.clearMeshes(VV);
          for (const eV of pV) {
            const {
              draw: xV,
              list: YV
            } = JV.get(eV);
            this.meshes.push(this.build(VV, xV, YV))
          }
          for (const [eV, xV] of YV) this.cues.push(bk(VV, Rk(eV, xV), Gk))
        }
      }
      build(VV, eV, xV) {
        let {
          ghost: JV,
          dim: YV
        } = eV;
        const {
          size: UV,
          colour: yV,
          alpha: pV
        } = Xk[JV], QV = xV[0], nV = [], wV = [];
        for (const [ZV, vV, rV] of xV) kk(nV, wV, [ZV - QV[0] + .5, vV - QV[1] + .5, rV - QV[2] + .5], [UV, UV, UV]);
        return VV.createGameMesh({
          positions: nV,
          indices: wV
        }, {
          rgb: yV,
          alpha: pV * (YV ? .3 : 1)
        }, QV)
      }
      clearMeshes(VV) {
        for (const eV of [...this.meshes, ...this.cues]) VV.disposeGameMesh(eV);
        this.meshes = [], this.cues = []
      }
    }
    const hk = [.56, .83, 1],
      lk = [1, .3, .25];
    class Lk {
      constructor(VV) {
        this.plans = VV, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(VV, eV, xV) {
        var JV;
        const YV = performance.now();
        if (YV - this.lastCheckMs < 150) return;
        this.lastCheckMs = YV;
        const UV = eV => gk(VV, eV),
          yV = null === (JV = VV.bJV(eV)) || void 0 === JV ? void 0 : JV.name,
          pV = yV && "Reactor Frame" === Wx(yV) ? VV.getTargetedBlock() : null,
          QV = pV ? [pV.FE[0], pV.FE[1], pV.FE[2]] : null,
          nV = null !== QV && "Air" === UV(QV) && QV.every(((VV, eV) => Math.abs(VV + .5 - xV[eV]) <= 8)) ? Nk(QV, xV, UV, (VV => this.inPlan(VV))) : null,
          wV = nV ? `${nV.box.ctrl.join()}|${nV.box.rot}|${nV.fits}` : "";
        wV !== this.shownKey && this.show(VV, wV, nV)
      }
      dispose(VV) {
        this.clear(VV), this.shownKey = ""
      }
      inPlan(VV) {
        return this.plans.all().some((eV => Ox(eV.box, VV) >= 0))
      }
      show(VV, eV, xV) {
        if (this.clear(VV), this.shownKey = eV, !xV) return;
        const {
          box: JV,
          fits: YV
        } = xV, UV = YV ? hk : lk, {
          lo: yV,
          hi: pV
        } = XQ(JV);
        this.meshes.push(bk(VV, MQ(yV, pV, .05), {
          rgb: UV,
          alpha: 1
        }));
        const QV = [],
          nV = dx(JV, 0)[1];
        for (let wV = 0; wV < JV.w * JV.d; wV++) {
          const [VV, , eV] = dx(JV, wV);
          QV.push([
            [VV + .5, nV + .02 + .01, eV + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(bk(VV, QV, {
          rgb: UV,
          alpha: .25
        }))
      }
      clear(VV) {
        for (const eV of this.meshes) VV.disposeGameMesh(eV);
        this.meshes = []
      }
    }
    const fk = "buildAFactory2Game:";

    function mk(VV, eV, xV) {
      const JV = VV => {
          const [xV, JV, YV] = VV.box.ctrl;
          return xV === eV[0] && JV === eV[1] && YV === eV[2]
        },
        YV = VV.find((VV => JV(VV) || Ox(VV.box, eV) >= 0));
      if (!YV) return null;
      const UV = function(VV, eV, xV) {
        const {
          w: JV,
          h: YV,
          d: UV
        } = VV.box, yV = "reactor" === VV.kind ? `${fk}rxTitle` : `${fk}batTitle`;
        if (VV.formed) return {
          key: `${fk}lookPlanFormed`,
          kindKey: yV,
          w: JV,
          h: YV,
          d: UV,
          count: 0
        };
        let pV = 0,
          QV = 0;
        for (let wV = 0; wV < ux(VV.box); wV++) {
          const eV = xV(dx(VV.box, wV)),
            JV = null === eV ? "ok" : YJ(VV.kind, VJ(VV.box, wV), eV);
          pV += "missing" === JV ? 1 : 0, QV += "wrong" === JV || "blocked" === JV ? 1 : 0
        }
        const nV = function(VV, eV, xV) {
          if (eV < 0 || null === xV) return;
          const JV = VJ(VV.box, eV),
            YV = YJ(VV.kind, JV, xV);
          return "blocked" === YV ? `${fk}lookWhy_blocked` : "wrong" === YV ? "ctrl" === JV ? `${fk}lookWhy_ctrl` : `${fk}lookWhy_reactor_${JV}` : void 0
        }(VV, Ox(VV.box, eV), xV([eV[0], eV[1], eV[2]]));
        if (pV > 0) return {
          key: `${fk}lookPlanToBuild`,
          kindKey: yV,
          w: JV,
          h: YV,
          d: UV,
          count: pV,
          why: nV
        };
        if (QV > 0) return {
          key: `${fk}lookPlanTakeOut`,
          kindKey: yV,
          w: JV,
          h: YV,
          d: UV,
          count: QV,
          why: nV
        };
        return {
          key: "reactor" === VV.kind ? `${fk}lookPlanNoRods` : `${fk}lookPlanDone`,
          kindKey: yV,
          w: JV,
          h: YV,
          d: UV,
          count: 0
        }
      }(YV, eV, xV);
      return "reactor" === YV.kind && JV(YV) ? {
        ...UV,
        ctrl: !0
      } : UV
    }

    function Kk(VV, eV) {
      return VV === eV || null !== VV && null !== eV && VV.key === eV.key && VV.kindKey === eV.kindKey && VV.w === eV.w && VV.h === eV.h && VV.d === eV.d && VV.count === eV.count && VV.why === eV.why && VV.ctrl === eV.ctrl
    }

    function Hk() {
      return performance.now()
    }
    class uk {
      constructor(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Hk;
        this.ticket = VV, this.sent = eV, this.backstopMs = xV, this.now = JV, this.queuedAt = void 0, this.queuedAt = JV()
      }
      answered() {
        const VV = this.now(),
          eV = this.sent.leftAt(this.ticket);
        return null !== eV && VV - eV > 4e3 || VV - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class sk {
      constructor() {
        this.echoes = []
      }
      add(VV) {
        this.echoes = this.echoes.filter((VV => !VV.answered())), this.echoes.push(VV)
      }
      answered() {
        var VV, eV;
        return null === (VV = null === (eV = this.echoes.at(-1)) || void 0 === eV ? void 0 : eV.answered()) || void 0 === VV || VV
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((VV => VV.answered()))
      }
      age() {
        var VV, eV;
        return null !== (VV = null === (eV = this.echoes.at(-1)) || void 0 === eV ? void 0 : eV.age()) && void 0 !== VV ? VV : null
      }
      clear() {
        this.echoes = []
      }
    }
    class Sk {
      constructor(VV) {
        this.send = VV, this.value = null, this.sent = null, this.echoes = new sk, this.down = !1, this.timer = null
      }
      shown(VV) {
        return null === this.value ? VV : this.down || this.value !== this.sent ? this.value : VV === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), VV) : this.value
      }
      pendingFor(VV) {
        return null !== this.value && this.value === this.sent && VV !== this.value ? this.echoes.age() : null
      }
      assume(VV, eV) {
        this.disarm(), this.down = !1, this.value = VV, this.sent = VV, this.echoes.clear(), this.echoes.add(eV)
      }
      press() {
        this.down = !0
      }
      drag(VV) {
        this.value = VV, this.arm(this.down ? 1e3 : 400)
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
      arm(VV) {
        this.disarm(), this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), VV)
      }
      disarm() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
    class Ik {
      constructor() {
        this.pending = new Map
      }
      set(VV, eV, xV) {
        var JV;
        const YV = null !== (JV = this.pending.get(VV)) && void 0 !== JV ? JV : {
          on: eV,
          echoes: new sk
        };
        YV.on = eV, YV.echoes.add(xV), this.pending.set(VV, YV)
      }
      shown(VV) {
        let eV = VV;
        for (const [xV, {
            on: JV,
            echoes: YV
          }] of this.pending) 0 !== (VV & xV) === JV && YV.agreeCounts() || YV.answered() ? this.pending.delete(xV) : eV = JV ? eV | xV : eV & ~xV;
        return eV
      }
      pendingMask() {
        let VV = 0;
        for (const eV of this.pending.keys()) VV |= eV;
        return VV
      }
      pendingFor(VV) {
        let eV = null;
        for (const [JV, {
            on: YV,
            echoes: UV
          }] of this.pending) {
          if (void 0 !== VV && 0 !== (VV & JV) === YV) continue;
          const yV = UV.age();
          var xV;
          if (null !== yV) eV = Math.max(null !== (xV = eV) && void 0 !== xV ? xV : 0, yV)
        }
        return eV
      }
      clear() {
        this.pending.clear()
      }
    }
    class dk {
      constructor() {
        this.dims = null, this.echoes = new sk, this.unmet = null
      }
      shown(VV) {
        var eV;
        return this.dims && (Ok(this.dims, VV) && this.echoes.agreeCounts() || this.echoes.answered()) && (Ok(this.dims, VV) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (eV = this.dims) && void 0 !== eV ? eV : VV
      }
      takeUnmet() {
        const VV = this.unmet;
        return this.unmet = null, VV
      }
      set(VV, eV) {
        this.dims = VV, this.echoes.add(eV)
      }
      pendingFor(VV) {
        return null === this.dims || VV && Ok(this.dims, VV) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function Ok(VV, eV) {
      return VV[0] === eV[0] && VV[1] === eV[1] && VV[2] === eV[2]
    }
    class Vb {
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hk;
        this.now = VV, this.taps = new Map
      }
      tap(VV, eV, xV) {
        return !this.busy(VV) && (this.taps.set(VV, {
          at: this.now(),
          done: eV
        }), xV(), !0)
      }
      settle(VV) {
        for (const [eV, xV] of [...this.taps]) xV.done(VV) && this.taps.delete(eV)
      }
      busy(VV) {
        const eV = this.taps.get(VV);
        return !!eV && (!(this.now() - eV.at >= 3e3) || (this.taps.delete(VV), !1))
      }
      busyIds() {
        const VV = new Set;
        for (const eV of [...this.taps.keys()]) this.busy(eV) && VV.add(eV);
        return VV
      }
      clear() {
        this.taps.clear()
      }
    }

    function eb(VV) {
      return {
        send: eV => VV.track(eV),
        sendUrgent: (eV, xV) => VV.track(eV, {
          urgent: !0,
          supersedes: xV
        }),
        leftAt: eV => VV.leftAt(eV),
        holdReserve: () => VV.holdUrgentReserve(),
        answerMs: My
      }
    }

    function xb() {
      return performance.now()
    }

    function Jb(VV) {
      const eV = VV.baf2RxNeed.map((VV => {
        let [eV, xV] = VV;
        return [eV, xV]
      }));
      return JSON.stringify([VV.baf2RxFormed, eV, VV.baf2RxBad, VV.baf2RxCells])
    }

    function Yb(VV, eV) {
      const xV = 0 !== (eV & ve),
        JV = 0 !== (VV.baf2RxFlags & ve);
      return !xV || JV || "running" !== VV.baf2RxState && "idle" !== VV.baf2RxState ? !xV && JV && "scram" === VV.baf2RxState && VV.baf2RxFuel > 0 ? "idle" : VV.baf2RxState : "scram"
    }

    function Ub(VV) {
      return JSON.stringify([VV.baf2BatFormed, VV.baf2BatNeed, VV.baf2BatBad])
    }

    function yb(VV) {
      return VV.join(",")
    }
    class pb {
      constructor() {
        this.listeners = new Set
      }
      subscribe(VV) {
        return this.listeners.add(VV), () => {
          this.listeners.delete(VV)
        }
      }
      notify() {
        for (const VV of this.listeners) VV()
      }
      clear() {
        this.listeners.clear()
      }
    }
    class Qb {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(VV, eV) {
        this.lastAt = VV, this.lastUntil = VV + eV
      }
      answered(VV) {
        return this.lastAt >= VV || VV < this.lastUntil
      }
    }
    class nb {
      constructor(VV, eV) {
        this.link = VV, this.now = eV, this.hold = new dk, this.picked = null, this.notTaken = null
      }
      shown(VV) {
        const eV = this.hold.shown(VV);
        if (this.hold.takeUnmet() && this.picked) {
          var xV;
          const {
            plans: eV,
            ctrl: JV,
            at: YV
          } = this.picked;
          this.picked = null, eV.unpredict(JV), null === (xV = this.notTaken) || void 0 === xV || xV.call(this, VV, YV)
        }
        return eV
      }
      pendingFor(VV) {
        return this.hold.pendingFor(VV)
      }
      Pr(VV, eV, xV) {
        VV.predictSize(eV, xV), this.picked = {
          plans: VV,
          ctrl: eV,
          at: this.now()
        };
        const JV = this.link.send(Ze(eV, "plan", ...xV));
        this.hold.set(xV, new uk(JV, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class wb {
      constructor(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : xb;
        this.plans = VV, this.readInterior = eV, this.link = xV, this.now = JV, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new Ik, this.throttle = void 0, this.oneShots = void 0, this.listeners = new pb, this.redraw = null, this.releaseReserve = null, this.size = new nb(xV, JV), this.oneShots = new Vb(JV), this.throttle = new Sk((VV => this.echo(this.link.send(this.command("throttle", VV)))))
      }
      set(VV) {
        !VV.baf2RxOpen && this.raw && yb(this.raw.baf2RxAt) === yb(VV.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(VV), this.QZ(VV)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(VV) {
        this.size.notTaken = VV
      }
      resize(VV) {
        this.raw && (this.size.Pr(this.plans, this.raw.baf2RxAt, VV), this.QZ(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const VV = this.raw.baf2RxAt;
        this.plans.setStarter(VV, !this.plans.showsStarter(VV)), this.QZ(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.QZ(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.QZ(this.raw)
      }
      send(VV) {
        if (this.raw) {
          for (var eV = arguments.length, xV = new Array(eV > 1 ? eV - 1 : 0), JV = 1; JV < eV; JV++) xV[JV - 1] = arguments[JV];
          this.link.send(this.command(VV, ...xV))
        }
      }
      tap(VV, eV) {
        this.raw && this.oneShots.tap(VV, function(VV, eV) {
          if ("start" === VV) return VV => 0 === (VV.baf2RxFlags & ve);
          if ("odConfirm" === VV) return VV => 0 !== (VV.baf2RxFlags & re);
          const xV = Jb(eV);
          return VV => Jb(VV) !== xV
        }(VV, this.raw), eV) && ("start" === VV && (this.startedAt = this.now()), this.QZ(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(ve, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(VV, eV) {
        if (!this.raw) return;
        const xV = VV === ve ? this.command(eV ? "scram" : "start") : this.command("od", eV ? 1 : 0),
          JV = eV && VV === ve,
          YV = `${we} ${this.raw.baf2RxAt.join(" ")} `,
          UV = this.echo(JV ? this.link.sendUrgent(xV, (VV => {
            const eV = VV.startsWith(YV) ? VV.slice(YV.length).split(" ")[0] : null;
            return "throttle" === eV || "start" === eV
          })) : this.link.send(xV));
        this.flags.set(VV, eV, UV), JV && this.throttle.assume(0, UV), this.QZ(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(VV) {
        this.throttle.drag(VV), this.raw && this.QZ(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.QZ(this.raw)
      }
      subscribe(VV) {
        return this.listeners.subscribe(VV)
      }
      opened() {
        this.releaseReserve ??= this.link.holdReserve()
      }
      closed() {
        var VV;
        this.throttle.release(), null === (VV = this.releaseReserve) || void 0 === VV || VV.call(this), this.releaseReserve = null
      }
      dispose() {
        this.closed(), this.throttle.clear(), this.flags.clear(), this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.raw = null, this.looksOf = null, this.listeners.clear()
      }
      command(VV) {
        for (var eV = arguments.length, xV = new Array(eV > 1 ? eV - 1 : 0), JV = 1; JV < eV; JV++) xV[JV - 1] = arguments[JV];
        return Ze(this.raw.baf2RxAt, VV, ...xV)
      }
      echo(VV) {
        return new uk(VV, this.link, this.link.answerMs, this.now)
      }
      QZ(VV) {
        var eV;
        this.raw = VV;
        const xV = this.flags.shown(VV.baf2RxFlags),
          JV = {
            ...VV,
            baf2RxFlags: xV,
            baf2RxTarget: this.throttle.shown(VV.baf2RxTarget),
            baf2RxState: Yb(VV, xV)
          },
          YV = this.size.shown(JV.baf2RxDims),
          UV = this.throttle.pendingFor(),
          yV = [this.throttle.pendingFor(VV.baf2RxTarget), this.flags.pendingFor(VV.baf2RxFlags), this.size.pendingFor(VV.baf2RxDims)].filter((VV => null !== VV)),
          pV = yV.length > 0 ? Math.max(...yV) : null,
          QV = this.oneShots.busyIds(),
          nV = JV.baf2RxAt;
        let wV, ZV, vV = null,
          rV = [Math.max(0, YV[0] - 2), Math.max(0, YV[1] - 2), Math.max(0, YV[2] - 2)];
        if (JV.baf2RxFormed) {
          const [VV, eV, xV] = JV.baf2RxDims;
          rV = [Math.max(0, VV - 2), Math.max(0, eV - 2), Math.max(0, xV - 2)], wV = Array.from(JV.baf2RxCells, Number), ZV = `${rV.join(",")}:${JV.baf2RxCells}`
        } else {
          var kV;
          const VV = null === (kV = this.plans.planAt(nV)) || void 0 === kV ? void 0 : kV.box,
            eV = VV ? mx(VV, "reactor", ...YV) : Lx(nV, 1, ...YV, fx("reactor", YV[0])),
            xV = this.readInterior(eV);
          vV = sp(rV, xV), wV = xV, ZV = `${rV.join(",")}:${xV.join("")}`
        }(null === (eV = this.looksOf) || void 0 === eV ? void 0 : eV.key) !== ZV && (this.looksOf = {
          key: ZV,
          looks: eQ(rV, wV)
        }), this.view = {
          status: JV,
          dims: YV,
          plan: vV,
          inner: rV,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(nV),
          odConfirmed: this.odConfirmed || 0 !== (JV.baf2RxFlags & qe),
          guide: this.plans.guideOn(),
          throttlePending: null !== UV,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== pV && pV >= 5e3,
          busy: QV,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== pV || QV.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.QZ(this.raw)
        }), 250))
      }
    }
    class Zb {
      constructor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : xb;
        this.plans = VV, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new pb, this.redraw = null, this.size = new nb(eV, xV), this.oneShots = new Vb(xV)
      }
      set(VV) {
        !VV.baf2BatOpen && this.view && yb(this.view.status.baf2BatAt) === yb(VV.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(VV), this.QZ(VV)
      }
      tap(VV, eV) {
        if (!this.view) return;
        const xV = Ub(this.view.status);
        this.oneShots.tap(VV, (VV => Ub(VV) !== xV), eV) && this.QZ(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(VV) {
        this.size.notTaken = VV
      }
      resize(VV) {
        this.view && (this.size.Pr(this.plans, this.view.status.baf2BatAt, VV), this.QZ(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.QZ(this.view.status)
      }
      subscribe(VV) {
        return this.listeners.subscribe(VV)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      QZ(VV) {
        const eV = this.size.shown(VV.baf2BatDims),
          xV = this.oneShots.busyIds();
        this.view = {
          status: VV,
          dims: eV,
          Jv: bQ(eV, VV.baf2BatDims) ? VV.baf2BatCapacity : YQ(...eV),
          guide: this.plans.guideOn(),
          busy: xV
        }, this.listeners.notify(), xV.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.QZ(this.view.status)
        }), 250))
      }
    }
    const vb = "buildAFactory2Game:";

    function rb() {
      var VV;
      const eV = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!eV) return null;
      const xV = eV.querySelector(".ExitButton");
      return function(VV, eV) {
        const xV = eV ? eV.left - 8 : VV.right;
        return {
          left: VV.left,
          top: VV.top,
          width: Math.max(0, xV - VV.left),
          height: VV.height
        }
      }(eV.getBoundingClientRect(), null !== (VV = null === xV || void 0 === xV ? void 0 : xV.getBoundingClientRect()) && void 0 !== VV ? VV : null)
    }
    const kb = (0, JV.memo)((function(VV) {
      let {
        store: eV
      } = VV;
      const {
        t: xV
      } = (0, AY.A)(), [YV, UV] = (0, JV.useState)((() => eV.get())), [yV, pV] = (0, JV.useState)((() => performance.now()));
      (0, JV.useEffect)((() => (UV(eV.get()), eV.subscribe((() => {
        UV(eV.get()), pV(performance.now())
      })))), [eV]);
      const {
        alarm: QV,
        boomAt: nV
      } = YV, wV = null !== QV && null !== QV.secs, [ZV, vV] = (0, JV.useState)(null);
      (0, JV.useEffect)((() => {
        if (!wV) return;
        vV(rb());
        const VV = setInterval((() => {
          pV(performance.now()), vV(rb())
        }), 250);
        return () => {
          clearInterval(VV)
        }
      }), [wV]);
      const [rV, kV] = (0, JV.useState)(!1);
      return (0, JV.useEffect)((() => {
        if (nV === -1 / 0) return;
        kV(!0);
        const VV = setTimeout((() => {
          kV(!1)
        }), 1300);
        return () => {
          clearTimeout(VV)
        }
      }), [nV]), (0, qU.jsxs)(qU.Fragment, {
        children: [null !== QV && (0, qU.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: xV(QV.hot ? `${vb}rxAlarmSiren` : `${vb}rxAlarmDamaged`, {
            amount: String(QV.damage)
          })
        }), null !== QV && null !== QV.secs && (0, qU.jsx)("div", {
          className: ZV ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== ZV && void 0 !== ZV ? ZV : void 0,
          "aria-live": "assertive",
          children: xV(`${vb}rxAlarmCountdown`, {
            amount: String((bV = QV.secs, EV = yV - QV.receivedAt, Math.max(1, Math.ceil(bV - EV / 1e3))))
          })
        }), rV && (0, qU.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var bV, EV
    }));
    class bb {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      jF(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const xV = VV.baf2RxAlarmAt.join(",");
        let JV = this.snapshot.boomAt;
        if (VV.baf2RxAlarmBoom) this.byReactor.delete(xV), JV = eV;
        else if (VV.baf2RxAlarmDamage <= 0) this.byReactor.delete(xV);
        else {
          var YV;
          this.byReactor.set(xV, {
            damage: VV.baf2RxAlarmDamage,
            secs: null !== (YV = VV.baf2RxAlarmSecs) && void 0 !== YV ? YV : null,
            hot: !0 === VV.baf2RxAlarmHot,
            receivedAt: eV
          })
        }
        this.QZ(JV)
      }
      retain(VV) {
        let eV = !1;
        for (const xV of [...this.byReactor.keys()]) VV.has(xV) || (this.byReactor.delete(xV), eV = !0);
        eV && this.QZ(this.snapshot.boomAt)
      }
      has(VV) {
        return this.byReactor.has(VV)
      }
      get() {
        return this.snapshot
      }
      subscribe(VV) {
        return this.listeners.add(VV), () => {
          this.listeners.delete(VV)
        }
      }
      dispose() {
        this.listeners.clear(), this.byReactor.clear()
      }
      QZ(VV) {
        let eV = null;
        for (const xV of this.byReactor.values())(!eV || xV.damage > eV.damage) && (eV = xV);
        this.snapshot = {
          alarm: eV,
          boomAt: VV
        };
        for (const xV of this.listeners) xV()
      }
    }
    const Eb = {
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

    function Bb(VV) {
      return [VV[0], VV[1], VV[2]]
    }

    function jb(VV) {
      return `${VV[0]},${VV[1]},${VV[2]}`
    }
    class qb {
      constructor(VV) {
        if (this.plans = VV, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var VV;
            return {
              active: this.glows.flatMap((VV => {
                let {
                  record: eV
                } = VV;
                return eV ? [eV] : []
              })),
              log: [...null !== (VV = this.devLog) && void 0 !== VV ? VV : []]
            }
          }, this.devLog && "undefined" !== typeof window) {
          window.baf2Glows = this.devAccessor
        }
      }
      glowLog() {
        var VV;
        return null !== (VV = this.devLog) && void 0 !== VV ? VV : []
      }
      check(VV, eV, xV) {
        const JV = new Set(eV.map((VV => jb(VV.box.ctrl))));
        for (const yV of function(VV, eV) {
            const xV = [],
              JV = new Map(VV);
            VV.clear();
            for (const YV of eV) {
              const eV = nk(YV.box.ctrl),
                UV = YV.formed ? YV.level : 0;
              VV.set(eV, UV), UV > 0 && 0 === JV.get(eV) && xV.push(YV)
            }
            return xV
          }(this.levels, this.plans.all())) JV.has(jb(yV.box.ctrl)) && this.show(VV, yV, "on", xV);
        const YV = this.plans.lastFormed();
        if (null === YV || YV.receivedAt <= this.flashedAt) return null;
        this.flashedAt = YV.receivedAt;
        const UV = function(VV, eV) {
          var xV;
          const JV = nk(VV);
          return null !== (xV = eV.find((VV => nk(VV.box.ctrl) === JV))) && void 0 !== xV ? xV : null
        }(YV.ctrl, eV);
        return UV && this.show(VV, UV, "formed", xV), UV
      }
      fade(VV, eV) {
        0 !== this.glows.length && (this.glows = this.glows.filter((xV => {
          let {
            mesh: JV,
            glow: YV,
            startMs: UV,
            record: yV
          } = xV;
          const pV = (eV - UV) / Eb[YV].ms;
          return pV >= 1 ? (VV.disposeGameMesh(JV), yV && (yV.endMs = eV), !1) : (VV.setGameMesh(JV, {
            visibility: "formed" === YV ? 1 - pV : Math.sin(Math.PI * pV)
          }), !0)
        })))
      }
      dispose(VV) {
        for (const {
            mesh: xV
          }
          of this.glows) VV.disposeGameMesh(xV);
        this.glows = [], this.levels.clear();
        const eV = "undefined" !== typeof window ? window : null;
        (null === eV || void 0 === eV ? void 0 : eV.baf2Glows) === this.devAccessor && delete eV.baf2Glows
      }
      show(VV, eV, xV, JV) {
        const {
          lo: YV,
          hi: UV
        } = XQ(eV.box);
        let yV = null;
        this.devLog && (yV = {
          glow: xV,
          ctrl: Bb(eV.box.ctrl),
          lo: Bb(YV),
          hi: Bb(UV),
          startMs: JV,
          endMs: null
        }, this.devLog.push(yV), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(VV, xV, MQ(YV, UV, Eb[xV].thick)),
          glow: xV,
          startMs: JV,
          record: yV
        })
      }
      build(VV, eV, xV) {
        const JV = bk(VV, xV, {
          rgb: Eb[eV].colour,
          alpha: 1
        });
        return VV.setGameMesh(JV, {
          visibility: 0
        }), JV
      }
    }
    const tb = 1 / .6,
      Fb = {
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
        blendMode: zp.g.Standard,
        soft: !0
      },
      Tb = {
        ...Fb,
        size: [.25, .4],
        count: 2
      };

    function Pb(VV) {
      return {
        colours: [VV, VV],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: zp.g.Add,
        soft: !1
      }
    }
    const Ab = Pb([150, 225, 255]),
      Nb = Pb([185, 145, 255]),
      Xb = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function Mb(VV) {
      const eV = De[VV];
      return null === eV.fuelSlot || Yx(eV) ? Xb.includes(VV) ? Nb : Ab : Fb
    }
    const zb = {
        kind: "smokePuff"
      },
      Gb = [.2, .025, .2];

    function Wb(VV, eV) {
      const [
        [xV, JV, YV],
        [UV, yV, pV]
      ] = VV.colours;
      return {
        texture: VV.soft ? zb : "square_particle",
        Jv: eV,
        minLifeTime: VV.life[0] / tb,
        maxLifeTime: VV.life[1] / tb,
        minEmitPower: VV.power[0] * tb,
        maxEmitPower: VV.power[1] * tb,
        minSize: VV.size[0],
        maxSize: VV.size[1],
        emitRate: 0,
        gravity: [0, VV.lift * tb * tb, 0],
        dir1: [-VV.spread, 1, -VV.spread],
        dir2: [VV.spread, 1, VV.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [xV, JV, YV, VV.alpha],
          maxColor: [UV, yV, pV, VV.alpha]
        }, {
          timeFraction: 1,
          minColor: [xV, JV, YV, 0],
          maxColor: [UV, yV, pV, 0]
        }],
        blendMode: VV.blendMode
      }
    }
    class Rb {
      constructor(VV) {
        this.fixed = VV, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(VV, eV, xV) {
        var JV;
        if (xV === this.lastFrame) return !1;
        this.lastFrame = xV;
        const YV = this.at;
        YV[0] = eV[0] + .5, YV[1] = eV[1] + 1.025, YV[2] = eV[2] + .5;
        const UV = null !== (JV = this.fixed) && void 0 !== JV ? JV : pV() ? Tb : Fb;
        let yV = this.particles.get(UV);
        return yV || (yV = VV.createParticles(function(VV) {
          return Wb(VV, Math.ceil(12 * VV.count * VV.life[1]) + VV.count)
        }(UV), {
          pos: YV,
          half: Gb
        }), this.particles.set(UV, yV)), yV.moveTo(YV), yV.emit(UV.count), !0
      }
      dispose() {
        for (const VV of this.particles.values()) VV.stop();
        this.particles.clear()
      }
    }
    class gb {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(VV) {
        this.indexed = !0;
        for (const eV of Me) {
          const xV = Mb(eV);
          for (let JV = 1; JV <= 4; JV++) {
            const YV = VV.blockNameToBlockId(`${eV}|meta|rot${JV}|Running`, !0);
            if (null === YV) continue;
            let UV = this.pufferIndexByStyle.get(xV);
            void 0 === UV && (UV = this.pufferList.push(new Rb(xV === Fb ? null : xV)) - 1, this.pufferIndexByStyle.set(xV, UV)), this.pufferIndexById[YV] = UV + 1
          }
        }
      }
      onAfterRender(VV, eV) {
        this.indexed || this.index(VV);
        const xV = performance.now(),
          JV = 0 === this.lastMs ? 0 : Math.min(xV - this.lastMs, 250) / 1e3;
        this.lastMs = xV, this.frame++, VV.particlesEnabled() ? (this.scan(VV, eV), this.puff(VV, JV)) : this.sources = []
      }
      dispose() {
        for (const VV of this.pufferList) VV.dispose();
        this.sources = [], this.found = []
      }
      scan(VV, eV) {
        0 === this.scanRow && (this.origin = [Math.floor(eV[0]) - 12, Math.floor(eV[1]) - 6, Math.floor(eV[2]) - 12]);
        const xV = Math.min(this.scanRow + 16, 325),
          [JV, YV, UV] = this.origin,
          yV = this.hits;
        yV.length = 0;
        for (let pV = this.scanRow; pV < xV; pV++) {
          const eV = JV + pV % 25,
            xV = YV + Math.floor(pV / 25);
          VV.scanBlocks(eV, xV, UV, eV + 1, xV + 1, UV + 25, this.pufferIndexById, yV)
        }
        for (let pV = 0; pV < yV.length; pV += 4) {
          const VV = yV[pV + 3];
          this.found.push({
            pos: [yV[pV], yV[pV + 1], yV[pV + 2]],
            vp: VV,
            puffer: this.pufferList[this.pufferIndexById[VV] - 1]
          })
        }
        this.scanRow = xV, 325 === xV && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(VV, eV) {
        const xV = this.sources.length;
        if (0 !== xV) {
          this.budget = Math.min(this.budget + Math.min(xV / 1.2, 12) * eV, 2);
          for (let eV = 0; eV < xV && this.budget >= 1; eV++) {
            const eV = this.sources[this.cursor % xV];
            this.cursor = (this.cursor + 1) % xV, VV.getBlockId(eV.pos[0], eV.pos[1], eV.pos[2]) === eV.vp && (eV.puffer.puff(VV, eV.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const Db = {
        ...Pb([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      ib = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function Cb(VV) {
      return 0 === VV.spots.length ? 0 : Math.min(1 * VV.level, 4)
    }

    function ab(VV) {
      return 0 === VV.glass.length ? 0 : Math.min(.75 * VV.level, 3)
    }

    function ob(VV) {
      return `${VV.ctrl.join(",")}:${VV.rot}:${VV.cu},${VV.cv}:${VV.w},${VV.h},${VV.d}`
    }

    function cb(VV, eV) {
      const xV = eV.w - 2,
        JV = eV.h - 2,
        YV = eV.d - 2,
        UV = [];
      for (let yV = 0; yV < xV * JV * YV; yV++) {
        const pV = yV % xV,
          QV = Math.floor(yV / xV) % YV,
          nV = Math.floor(yV / (xV * YV));
        if (pV > 0 && pV < xV - 1 && QV > 0 && QV < YV - 1 && nV > 0 && nV < JV - 1) continue;
        const wV = dx(eV, xJ(eV, yV)),
          ZV = gk(VV, wV);
        if (null !== ZV && "Fuel Rod" === Wx(ZV))
          for (const eV of ib) {
            const xV = [wV[0] + eV[0], wV[1] + eV[1], wV[2] + eV[2]];
            lb(VV, xV) && UV.push(Lb(xV, eV))
          }
      }
      return UV
    }

    function hb(VV, eV) {
      const {
        lo: xV,
        hi: JV
      } = XQ(eV), YV = [];
      for (let UV = xV[0]; UV < JV[0]; UV++)
        for (let eV = xV[1]; eV < JV[1]; eV++) {
          const yV = UV === xV[0] || UV === JV[0] - 1 || eV === xV[1] || eV === JV[1] - 1 ? 1 : Math.max(1, JV[2] - 1 - xV[2]);
          for (let pV = xV[2]; pV < JV[2]; pV += yV) {
            const yV = [UV, eV, pV];
            if (!lb(VV, yV)) continue;
            const QV = UV === xV[0] ? ib[1] : UV === JV[0] - 1 ? ib[0] : pV === xV[2] ? ib[5] : pV === JV[2] - 1 ? ib[4] : eV === xV[1] ? ib[3] : ib[2];
            YV.push(Lb(yV, QV))
          }
        }
      return YV
    }

    function lb(VV, eV) {
      const xV = gk(VV, eV);
      return null !== xV && "Reactor Glass" === Wx(xV)
    }

    function Lb(VV, eV) {
      return [
        [VV[0] + .5 + .55 * eV[0], VV[1] + .5 + .55 * eV[1], VV[2] + .5 + .55 * eV[2]],
        [0 === eV[0] ? .4 : .02, 0 === eV[1] ? .4 : .02, 0 === eV[2] ? .4 : .02]
      ]
    }
    class fb {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(VV, eV, xV, JV) {
        const YV = [],
          UV = new Set;
        for (const nV of eV) {
          var yV, pV, QV;
          const {
            box: eV
          } = nV;
          if ("reactor" !== nV.kind || nV.level <= 0 || (eV.ctrl[0] - xV[0]) ** 2 + (eV.ctrl[1] - xV[1]) ** 2 + (eV.ctrl[2] - xV[2]) ** 2 > 576) continue;
          const wV = ob(eV);
          UV.add(wV);
          let ZV = this.spots.get(wV);
          if ((!ZV || JV - ZV.at > 3e3) && (ZV = {
              at: JV,
              spots: cb(VV, eV),
              glass: hb(VV, eV)
            }, this.spots.set(wV, ZV)), 0 === ZV.spots.length && 0 === ZV.glass.length) continue;
          const vV = this.sparking.find((VV => VV.key === wV));
          YV.push({
            key: wV,
            level: nV.level,
            spots: ZV.spots,
            glass: ZV.glass,
            budget: null !== (yV = null === vV || void 0 === vV ? void 0 : vV.budget) && void 0 !== yV ? yV : 0,
            cursor: null !== (pV = null === vV || void 0 === vV ? void 0 : vV.cursor) && void 0 !== pV ? pV : 0,
            glassBudget: null !== (QV = null === vV || void 0 === vV ? void 0 : vV.glassBudget) && void 0 !== QV ? QV : 0
          })
        }
        for (const nV of this.spots.keys()) UV.has(nV) || this.spots.delete(nV);
        this.sparking = YV
      }
      emit(VV, eV, xV) {
        var JV;
        if (0 === this.sparking.length || !VV.particlesEnabled() || xV === this.lastFrame) return;
        this.lastFrame = xV;
        let YV = 0,
          UV = 0;
        for (const kV of this.sparking) YV += Cb(kV), UV += ab(kV);
        const yV = YV > 8 ? 8 / YV : 1,
          pV = UV > 6 ? 6 / UV : 1;
        let QV, nV = null,
          wV = null;
        for (const kV of this.sparking) kV.budget = Math.min(kV.budget + Cb(kV) * yV * eV, 2), kV.budget >= 1 && (!nV || kV.budget > nV.budget) && (nV = kV), kV.glassBudget = Math.min(kV.glassBudget + ab(kV) * pV * eV, 2), kV.glassBudget >= 1 && (!wV || kV.glassBudget > wV.glassBudget) && (wV = kV);
        if (nV) nV.budget--, QV = nV.spots[nV.cursor++ % nV.spots.length];
        else {
          if (!wV) return;
          wV.glassBudget--, QV = wV.glass[Math.floor(Math.random() * wV.glass.length)]
        }
        const [ZV, vV] = QV, rV = null !== (JV = this.emitter) && void 0 !== JV ? JV : this.create(VV, ZV, vV);
        rV.moveTo(ZV, vV), rV.emit(Db.count)
      }
      dispose() {
        var VV;
        null === (VV = this.emitter) || void 0 === VV || VV.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(VV, eV, xV) {
        const JV = Math.ceil(14 * Db.count * Db.life[1]) + Db.count;
        return this.emitter = VV.createParticles(Wb(Db, JV), {
          pos: eV,
          half: xV
        }), this.emitter
      }
    }
    const mb = [2, 3.2],
      Kb = 1 / 3,
      Hb = 1 / .6,
      ub = {
        texture: zb,
        Jv: Math.ceil(18 * mb[1]) + 4,
        minLifeTime: mb[0] / Hb,
        maxLifeTime: mb[1] / Hb,
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
        blendMode: zp.g.Standard
      };
    class sb {
      constructor(VV) {
        this.plans = VV, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new fb, this.frame = 0, this.outline = new qb(VV)
      }
      onAfterRender(VV, eV, xV) {
        const JV = performance.now(),
          YV = 0 === this.lastMs ? 0 : Math.min(JV - this.lastMs, 250) / 1e3;
        if (this.lastMs = JV, this.outline.fade(VV, JV), this.puff(VV, YV, xV), this.sparks.emit(VV, YV, this.frame++), JV - this.lastCheckMs < 150) return;
        this.lastCheckMs = JV;
        const UV = this.plans.all().filter((VV => VV.formed && Sb(VV.box.ctrl, xV) <= 4096));
        this.plumes = UV.filter((VV => "reactor" === VV.kind && VV.level > 0)).map((VV => ({
          box: VV.box,
          level: VV.level
        }))), this.updateHums(VV, eV, UV, xV), this.sparks.update(VV, UV, xV, JV), this.chimeFormed(VV, eV, UV, JV)
      }
      dispose(VV) {
        var eV;
        this.outline.dispose(VV), null === (eV = this.steam) || void 0 === eV || eV.dispose(), this.steam = null, this.sparks.dispose();
        for (const xV of this.hums.values()) xV.stop();
        this.hums.clear()
      }
      chimeFormed(VV, eV, xV, JV) {
        const YV = this.outline.check(VV, xV, JV);
        YV && VV.playSound(eV, "exp_levelup", .6, 1, {
          cY: [YV.box.ctrl[0] + .5, YV.box.ctrl[1], YV.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(VV, eV, xV) {
        const JV = this.plumes;
        if (0 === JV.length || !VV.particlesEnabled()) return void(this.plumeBudget = 0);
        const YV = JV.reduce(((VV, eV) => VV + 3 * eV.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + YV * eV, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let UV = this.plumeCursor % (YV / 3);
        this.plumeCursor++;
        let yV = JV[0];
        for (const ZV of JV) {
          if (UV < ZV.level) {
            yV = ZV;
            break
          }
          UV -= ZV.level
        }
        const {
          lo: pV,
          hi: QV
        } = XQ(yV.box);
        if (function(VV, eV, xV) {
            const JV = Math.max(VV[0] - xV[0], 0, xV[0] - eV[0]),
              YV = Math.max(VV[2] - xV[2], 0, xV[2] - eV[2]);
            return Math.hypot(JV, xV[1] - eV[1], YV)
          }(pV, QV, xV) < 6 && Math.random() > Kb) return;
        const nV = [(pV[0] + QV[0]) / 2, QV[1] + .05, (pV[2] + QV[2]) / 2],
          wV = [(QV[0] - pV[0]) / 2 - .5, .05, (QV[2] - pV[2]) / 2 - .5];
        this.steam ??= VV.createParticles(ub, {
          pos: nV,
          half: wV
        }), this.steam.moveTo(nV, wV), this.steam.emit(1)
      }
      updateHums(VV, eV, xV, JV) {
        const YV = new Map;
        for (const yV of xV) "reactor" === yV.kind && yV.level > 0 && Sb(yV.box.ctrl, JV) <= 576 && YV.set(`${UV=yV.box.ctrl,`${UV[0]},${UV[1]},${UV[2]}`}:${yV.level}`, yV);
        var UV;
        for (const [yV, pV] of this.hums) YV.has(yV) || (pV.stop(), this.hums.delete(yV));
        for (const [yV, pV] of YV) {
          if (this.hums.has(yV)) continue;
          const {
            lo: xV,
            hi: JV
          } = XQ(pV.box), YV = [(xV[0] + JV[0]) / 2, xV[1], (xV[2] + JV[2]) / 2], UV = VV.playSound(eV, "rocketEngineLoop", .08 + .06 * pV.level, .55, {
            cY: YV,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          UV && this.hums.set(yV, UV)
        }
      }
    }

    function Sb(VV, eV) {
      return (VV[0] - eV[0]) ** 2 + (VV[1] - eV[1]) ** 2 + (VV[2] - eV[2]) ** 2
    }
    class Ib {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      jF(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const JV = [VV.baf2BombAt[0], VV.baf2BombAt[1], VV.baf2BombAt[2]],
          YV = VV.baf2BombR;
        if (VV.baf2BombBoom) {
          const VV = Math.hypot(eV[0] - JV[0], eV[1] - JV[1], eV[2] - JV[2]);
          this.QZ({
            fuse: null,
            blast: {
              at: JV,
              r: YV,
              receivedAt: xV,
              distance: VV,
              flash: VV <= 3 * YV
            }
          })
        } else this.QZ({
          ...this.snapshot,
          fuse: VV.baf2BombMs > 0 ? {
            at: JV,
            r: YV,
            endsAt: xV + VV.baf2BombMs
          } : null
        })
      }
      get() {
        return this.snapshot
      }
      subscribe(VV) {
        return this.listeners.add(VV), () => {
          this.listeners.delete(VV)
        }
      }
      dispose() {
        this.listeners.clear(), this.snapshot = {
          fuse: null,
          blast: null
        }
      }
      QZ(VV) {
        this.snapshot = VV;
        for (const eV of this.listeners) eV()
      }
    }
    const db = (0, JV.memo)((function(VV) {
      var eV;
      let {
        store: xV
      } = VV;
      const {
        t: YV
      } = (0, AY.A)(), [UV, yV] = (0, JV.useState)((() => xV.get())), [pV, QV] = (0, JV.useState)((() => performance.now()));
      (0, JV.useEffect)((() => (yV(xV.get()), xV.subscribe((() => {
        yV(xV.get()), QV(performance.now())
      })))), [xV]);
      const {
        fuse: nV,
        blast: wV
      } = UV;
      (0, JV.useEffect)((() => {
        if (!nV) return;
        const VV = setInterval((() => {
          QV(performance.now())
        }), 250);
        return () => {
          clearInterval(VV)
        }
      }), [nV]);
      const [ZV, vV] = (0, JV.useState)(!1);
      (0, JV.useEffect)((() => {
        if (null === wV || void 0 === wV || !wV.flash) return;
        vV(!0);
        const VV = setTimeout((() => {
          vV(!1)
        }), 2500);
        return () => {
          clearTimeout(VV)
        }
      }), [wV]);
      const rV = nV ? function(VV, eV) {
        return VV.endsAt <= eV ? 0 : Math.ceil((VV.endsAt - eV) / 1e3)
      }(nV, pV) : 0;
      return (0, qU.jsxs)(qU.Fragment, {
        children: [rV > 0 && (0, qU.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: YV("buildAFactory2Game:bombCountdown", {
            amount: String(rV),
            radius: String(null !== (eV = null === nV || void 0 === nV ? void 0 : nV.r) && void 0 !== eV ? eV : 0)
          })
        }), ZV && (0, qU.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function Ob(VV) {
      const eV = Math.min(4, Math.max(1, VV / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * VV / 4)),
        capSpread: Math.min(5 * VV / 8, 24 * eV),
        capThick: 6 * eV,
        stemHalfWidth: 3 * eV,
        puffScale: eV
      }
    }
    class VE {
      constructor() {
        this.hn = !1
      }
      hold(VV) {
        VV.getCameraFar() < 1e3 && (VV.setCameraFar(1e3), this.hn = !0)
      }
      release(VV) {
        this.hn && (this.hn = !1, VV.setCameraFar(null))
      }
    }
    const eE = 1 / .6,
      xE = [.2, .1, .2],
      JE = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      YE = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: zp.g.Standard,
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
      UE = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: zp.g.Standard,
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
      yE = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: zp.g.Standard,
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
      pE = {
        texture: zb,
        Jv: Math.ceil(120) + 4,
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
        blendMode: zp.g.Add
      };
    class QE {
      constructor(VV) {
        this.store = VV, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new VE, this.timers = []
      }
      onAfterRender(VV, eV) {
        const xV = performance.now(),
          JV = 0 === this.lastMs ? 0 : Math.min(xV - this.lastMs, 250) / 1e3;
        this.lastMs = xV;
        const {
          fuse: YV,
          blast: UV
        } = this.store.get();
        null !== UV && UV !== this.shownBlast && (this.shownBlast = UV, this.startBlast(VV, eV, UV, xV));
        const yV = VV.particlesEnabled();
        null !== YV && YV.endsAt > xV && yV ? this.emitBeacon(VV, YV, JV, xV) : this.beaconBudget = 0, null !== this.cloud && (xV - this.cloud.startMs > 33e3 ? this.disposeCloud(VV) : (this.far.hold(VV), yV && this.emitCloud(VV, JV, xV)))
      }
      dispose(VV) {
        var eV;
        null === (eV = this.beacon) || void 0 === eV || eV.dispose(), this.beacon = null, this.disposeCloud(VV);
        for (const xV of this.timers) clearTimeout(xV);
        this.timers.length = 0
      }
      emitBeacon(VV, eV, xV, JV) {
        const YV = eV.endsAt - JV < 5e3 ? 350 : 1e3,
          UV = .5 + .5 * Math.sin(2 * Math.PI * JV / YV);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * UV * xV, 4), this.beaconBudget < 1) return;
        const yV = Math.floor(this.beaconBudget);
        this.beaconBudget -= yV;
        const [pV, QV, nV] = eV.at, wV = [pV + .5, QV + 1.1, nV + .5];
        this.beacon ??= VV.createParticles(pE, {
          pos: wV,
          half: xE
        }), this.beacon.moveTo(wV), this.beacon.emit(yV)
      }
      startBlast(VV, eV, xV, JV) {
        var YV;
        null === (YV = this.beacon) || void 0 === YV || YV.dispose(), this.beacon = null, this.disposeCloud(VV);
        const UV = (0, Xp.isMobile)() ? .5 : 1;
        this.streams = [YE, UE, yE].map((VV => {
          const eV = Math.round(VV.count * UV);
          return {
            spec: VV,
            particles: null,
            rate: eV / ((VV.toMs - VV.fromMs) / 1e3),
            budget: 0,
            left: eV
          }
        })), this.cloud = {
          blast: xV,
          startMs: JV
        };
        const yV = Math.max(.25, 1 - xV.distance / (6 * xV.r)),
          pV = xV.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [xV, JV, YV] of JE) wE(VV, eV, xV, yV * JV, YV)
        }), pV))
      }
      emitCloud(VV, eV, xV) {
        const {
          blast: JV,
          startMs: YV
        } = this.cloud, UV = xV - YV, [yV, pV, QV] = JV.at, nV = Ob(JV.r);
        for (const wV of this.streams) {
          const {
            spec: xV
          } = wV;
          if (wV.left <= 0 || UV < xV.fromMs) continue;
          wV.budget += wV.rate * eV;
          const YV = Math.min(Math.floor(wV.budget), wV.left);
          if (YV < 1) continue;
          wV.budget -= YV, wV.left -= YV;
          const ZV = wV.particles ??= this.createStream(VV, xV, JV);
          if (xV === YE) {
            const VV = nV.stemHalfWidth;
            ZV.moveTo([yV, pV + 1, QV], [VV, 1, VV])
          } else if (xV === UE) {
            const VV = nV.capSpread * Math.min(1, (UV - xV.fromMs) / 3e3),
              eV = Math.sqrt(Math.random()),
              JV = 2 * Math.random() * Math.PI,
              YV = Math.cos(JV) * eV,
              wV = Math.sin(JV) * eV,
              vV = yV + YV * VV,
              rV = QV + wV * VV,
              kV = nV.capThick,
              bV = pV + nV.capHeight + kV * (1 - eV * eV) * 2;
            ZV.setDirections([.7 * YV, .05, .7 * wV], [YV, .2, wV]), ZV.moveTo([vV, bV, rV], [kV, kV, kV])
          } else {
            this.ringAngle += 2.39996;
            const VV = Math.cos(this.ringAngle),
              eV = Math.sin(this.ringAngle);
            ZV.setDirections([VV, .05, eV], [VV, .1, eV]), ZV.moveTo([yV + 2 * VV, pV + .5, QV + 2 * eV], [0, .5, 0])
          }
          ZV.emit(YV)
        }
      }
      createStream(VV, eV, xV) {
        const {
          r: JV
        } = xV, YV = Math.max(eV.life[0], JV / 25), UV = eV === yE ? [.9 * YV, YV] : eV.life, yV = Ob(JV), pV = eV === yE ? 1 : yV.puffScale, QV = {
          texture: zb,
          Jv: eV.count + 4,
          minLifeTime: UV[0] / eE,
          maxLifeTime: UV[1] / eE,
          minSize: eV.size[0] * pV,
          maxSize: eV.size[1] * pV,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, eV.gravity * eE * eE, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: eV.from[0],
            maxColor: eV.from[1]
          }, {
            timeFraction: .6,
            minColor: nE(eV.from[0], eV.to[0]),
            maxColor: nE(eV.from[1], eV.to[1])
          }, {
            timeFraction: 1,
            minColor: eV.to[0],
            maxColor: eV.to[1]
          }],
          blendMode: eV.blend
        };
        if (eV === YE) {
          const VV = yV.capHeight / ((UV[0] + UV[1]) / 2);
          QV.minEmitPower = .9 * VV * eE, QV.maxEmitPower = 1.05 * VV * eE, QV.dir1 = [-.1, 1, -.1], QV.dir2 = [.1, 1, .1]
        } else eV === UE ? (QV.minEmitPower = 1.2, QV.maxEmitPower = 2, QV.dir1 = [-1, .05, -1], QV.dir2 = [1, .2, 1]) : (QV.minEmitPower = 39.583333333333336, QV.maxEmitPower = 41.66666666666667, QV.dir1 = [1, 0, 0], QV.dir2 = [1, 0, 0]);
        return VV.createParticles(QV, {
          pos: xV.at
        })
      }
      disposeCloud(VV) {
        for (const xV of this.streams) {
          var eV;
          null === (eV = xV.particles) || void 0 === eV || eV.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(VV)
      }
    }

    function nE(VV, eV) {
      return [(VV[0] + eV[0]) / 2, (VV[1] + eV[1]) / 2, (VV[2] + eV[2]) / 2, .75 * VV[3]]
    }

    function wE(VV, eV, xV, JV, YV) {
      try {
        VV.playSound(eV, xV, JV, YV)
      } catch (UV) {
        console.error(UV)
      }
    }
    const ZE = {
        Jv: 720,
        perS: 100
      },
      vE = {
        Jv: 320,
        perS: 44
      };
    class rE {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(VV, eV) {
        this.zone = {
          centre: [...VV.centre],
          r: VV.r,
          band: VV.band ? [VV.band[0], VV.band[1]] : void 0
        }, this.endsAt = eV
      }
      stop() {
        this.zone = null
      }
      jF(VV, eV) {
        const {
          baf2FalloutMs: xV,
          baf2FalloutAt: JV,
          baf2FalloutR: YV,
          baf2FalloutY: UV
        } = VV;
        xV > 0 && JV && void 0 !== YV ? this.start({
          centre: JV,
          r: YV,
          band: UV
        }, eV + xV) : this.stop()
      }
      perS(VV, eV, xV) {
        const JV = this.zone;
        if (!JV) return 0;
        const YV = this.endsAt - VV;
        return YV <= 0 ? (this.zone = null, 0) : JV.band && (eV[1] < JV.band[0] || eV[1] > JV.band[1]) || Math.hypot(eV[0] - JV.centre[0], eV[2] - JV.centre[2]) > JV.r ? 0 : xV.perS * Math.min(1, YV / 5e3)
      }
    }
    const kE = [5, 7],
      bE = [24, 8, 24],
      EE = .5,
      BE = 1 / .6,
      jE = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class qE {
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Xp.isMobile)();
        this.state = new rE, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(VV) {
          return VV ? vE : ZE
        }(VV)
      }
      startFallout(VV, eV) {
        this.state.start(VV, eV)
      }
      stopFallout() {
        this.state.stop()
      }
      jF(VV) {
        this.state.jF(VV, performance.now())
      }
      onAfterRender(VV, eV) {
        var xV;
        const JV = performance.now(),
          YV = 0 === this.lastMs ? 0 : Math.min(JV - this.lastMs, 250) / 1e3;
        this.lastMs = JV;
        const UV = this.state.perS(JV, eV, this.tier);
        if (UV <= 0 || !VV.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + UV * YV, UV / 4);
        const yV = Math.floor(this.budget);
        if (yV < 1) return;
        this.budget -= yV;
        const pV = this.at;
        pV[0] = eV[0], pV[1] = eV[1] + 12, pV[2] = eV[2];
        const QV = null !== (xV = this.systems) && void 0 !== xV ? xV : this.create(VV, pV),
          nV = this.amounts;
        nV[0] = 0, nV[1] = 0;
        for (let wV = 0; wV < yV; wV++) nV[Math.random() < .3 ? 1 : 0]++;
        for (let wV = 0; wV < QV.length; wV++) nV[wV] > 0 && (QV[wV].moveTo(pV, bE), QV[wV].emit(nV[wV]))
      }
      dispose() {
        for (const eV of null !== (VV = this.systems) && void 0 !== VV ? VV : []) {
          var VV;
          eV.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(VV, eV) {
        return this.systems = jE.map((xV => {
          let {
            rgba: [JV, YV, UV, yV],
            share: pV
          } = xV;
          const QV = {
            texture: "square_particle",
            Jv: Math.ceil(this.tier.Jv * pV),
            minLifeTime: kE[0] / BE,
            maxLifeTime: kE[1] / BE,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [EE, -1, EE],
            colorGradients: [{
              timeFraction: 0,
              minColor: [JV, YV, UV, 0]
            }, {
              timeFraction: .15,
              minColor: [JV, YV, UV, yV]
            }, {
              timeFraction: .8,
              minColor: [JV, YV, UV, yV]
            }, {
              timeFraction: 1,
              minColor: [JV, YV, UV, 0]
            }],
            blendMode: zp.g.Standard
          };
          return VV.createParticles(QV, {
            pos: eV,
            half: bE
          })
        })), this.systems
      }
    }
    const tE = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function FE(VV) {
      const eV = /\|rot(\d)/.exec(VV);
      return tE[eV ? Number(eV[1]) : 1]
    }
    var TE = xV(654),
      PE = xV(39624);
    const AE = new Set(TE.k);

    function NE(VV) {
      if (-2 !== VV.count) return null;
      const eV = fV(VV.item);
      return null !== eV && AE.has(eV) ? eV : null
    }

    function XE(VV) {
      const {
        width: eV,
        height: xV
      } = (0, PE.d)(VV).hitBoxDimensions;
      return .55 / Math.max(eV, xV)
    }

    function ME(VV, eV, xV) {
      if (!xV) return !1;
      const JV = VV[0] + .5 - eV[0],
        YV = VV[1] + .5 - eV[1],
        UV = VV[2] + .5 - eV[2];
      return JV * JV + YV * YV + UV * UV <= 576
    }

    function zE(VV, eV) {
      return Math.atan2(VV[0], VV[2]) + Math.PI + eV
    }

    function GE(VV, eV) {
      const xV = 2 * Math.PI;
      return (VV + xV * eV / 1e4) % xV
    }
    class WE {
      constructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = VV, this.now = eV, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = VV.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(VV, eV) {
        if (0 === this.farms.size) return;
        const xV = this.now(),
          JV = Number.isNaN(this.frameMs) ? 0 : Math.min(xV - this.frameMs, 100);
        this.frameMs = xV, xV - this.checkedMs >= 1e3 && (this.checkedMs = xV, this.check(VV, eV));
        for (const YV of this.farms.values()) YV.shown && YV.running && null !== YV.model && JV > 0 && (YV.spin = GE(YV.spin, JV), YV.model.setPose(YV.feet, zE(YV.front, YV.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const VV of this.farms.values()) this.drop(VV);
        this.farms.clear()
      }
      sync() {
        const VV = new Set;
        for (const eV of this.labels.list()) {
          const xV = NE(eV);
          if (null === xV) continue;
          VV.add(eV.key);
          const JV = this.farms.get(eV.key);
          if ((null === JV || void 0 === JV ? void 0 : JV.mob) === xV) continue;
          JV && this.drop(JV);
          const [YV, UV, yV] = eV.pos;
          this.farms.set(eV.key, {
            pos: eV.pos,
            feet: [YV + .5, UV + 1, yV + .5],
            mob: xV,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [eV, xV] of this.farms) VV.has(eV) || (this.drop(xV), this.farms.delete(eV));
        this.checkedMs = -1 / 0
      }
      check(VV, eV) {
        for (const xV of this.farms.values()) {
          const [JV, YV, UV] = xV.pos, yV = gk(VV, xV.pos);
          null !== yV && Wx(yV) === iV && ME(xV.pos, eV, "Air" === gk(VV, [JV, YV + 1, UV])) ? (xV.running = yV.endsWith("|Running"), xV.front = FE(yV), null === xV.model && (xV.model = VV.createMobModel(xV.mob, XE(xV.mob)), null === xV.model) || (xV.model.setPose(xV.feet, zE(xV.front, xV.spin)), xV.shown || (xV.model.setVisible(!0), xV.shown = !0))) : (xV.shown && null !== xV.model && xV.model.setVisible(!1), xV.shown = !1)
        }
      }
      drop(VV) {
        var eV;
        null === (eV = VV.model) || void 0 === eV || eV.dispose(), VV.model = null, VV.shown = !1
      }
    }
    class RE {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(VV) {
        var eV;
        this.island = VV.baf2ColIsland, this.islandSite = (eV = VV.baf2ColSite) && 8 === eV.length ? {
          spawnXZ: [eV[0], eV[1]],
          coreXZ: [eV[2], eV[3]],
          minXZ: [eV[4], eV[5]],
          maxXZ: [eV[6], eV[7]]
        } : null, this.views = VV.baf2ColList.map((VV => ({
          entry: YY(VV)
        }))), this.beamsVersion++, this.emit()
      }
      onStatus(VV) {
        this.status = VV, this.emit()
      }
      onOpen(VV) {
        this.openHeld = VV
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
        return this.views.map((VV => VV.entry))
      }
      entryAtRoot(VV) {
        var eV;
        return null === (eV = this.views.find((eV => {
          let {
            entry: xV
          } = eV;
          return xV.focus[0] === VV[0] && xV.focus[1] === VV[1] + 1 && xV.focus[2] === VV[2]
        }))) || void 0 === eV ? void 0 : eV.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(VV, eV) {
        return DQ(this.entries(), VV, eV)
      }
      lookSource() {
        return {
          handles: VV => vJ(VV) >= 0 || rJ(VV),
          line: (VV, eV) => this.lookLine(VV, eV),
          version: () => this.beamsVersion
        }
      }
      subscribe(VV) {
        return this.listeners.add(VV), () => {
          this.listeners.delete(VV)
        }
      }
      dispose() {
        this.listeners.clear(), this.island = null, this.views = [], this.status = null, this.openHeld = null
      }
      emit() {
        for (const VV of this.listeners) VV()
      }
    }
    const gE = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((VV => VV / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((VV => [VV, VV + 1, VV + 2, VV, VV + 2, VV + 3]))
    };

    function DE(VV, eV, xV, JV, YV, UV, yV) {
      let pV = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const QV = Math.cos(pV),
        nV = Math.sin(pV),
        wV = VV.positions.length / 3,
        {
          positions: ZV,
          indices: vV
        } = gE;
      for (let rV = 0; rV < ZV.length; rV += 3) {
        const pV = ZV[rV] * YV,
          wV = ZV[rV + 2] * yV;
        VV.positions.push(eV + pV * QV + wV * nV, xV + ZV[rV + 1] * UV, JV - pV * nV + wV * QV)
      }
      for (const rV of vV) VV.indices.push(wV + rV)
    }

    function iE(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return eV < 1 ? {
        rgb: VV,
        alpha: eV
      } : {
        rgb: VV,
        alpha: 1,
        opaque: !0
      }
    }
    class CE {
      constructor(VV, eV) {
        this.style = VV, this.perSource = eV, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(VV) {
        this.sources = VV, 0 === VV.length && (this.budget = 0)
      }
      iZ(VV, eV, xV) {
        const JV = this.sources.length;
        if (0 !== JV) {
          var YV, UV;
          this.budget = Math.min(this.budget + (YV = JV, UV = this.perSource, Math.min(YV * UV, sQ) * eV), 2);
          for (let eV = 0; eV < JV && this.budget >= 1; eV++) {
            const eV = this.sources[this.cursor % JV];
            this.cursor = (this.cursor + 1) % JV;
            if (!(Math.max(Math.abs(eV.x - xV[0]), Math.abs(eV.y - xV[1]), Math.abs(eV.z - xV[2])) > 32)) return this.puff(VV, eV), void this.budget--
          }
        }
      }
      dispose() {
        var VV;
        null === (VV = this.particles) || void 0 === VV || VV.dispose(), this.particles = null, this.sources = []
      }
      puff(VV, eV) {
        let {
          x: xV,
          y: JV,
          z: YV,
          h: UV,
          faces: yV
        } = eV;
        const pV = function(VV, eV, xV, JV, YV) {
            const [UV, yV, pV] = YV[Math.floor(Math.random() * YV.length)], QV = .04, nV = (VV, eV, xV) => VV > 0 ? eV + xV + QV : VV < 0 ? eV - QV : eV + .1, wV = (VV, eV, xV) => VV > 0 ? eV + xV + QV : VV < 0 ? eV - QV : eV + xV - .1, ZV = [nV(UV, VV, 1), nV(yV, eV, JV), nV(pV, xV, 1)], vV = [wV(UV, VV, 1), wV(yV, eV, JV), wV(pV, xV, 1)];
            return {
              pos: [(ZV[0] + vV[0]) / 2, (ZV[1] + vV[1]) / 2, (ZV[2] + vV[2]) / 2],
              half: [(vV[0] - ZV[0]) / 2, (vV[1] - ZV[1]) / 2, (vV[2] - ZV[2]) / 2],
              out: [UV, yV, pV]
            }
          }(xV, JV, YV, UV, yV),
          {
            style: QV
          } = this,
          nV = this.particles ??= VV.createParticles(Wb(QV, Math.ceil(QV.count * sQ * QV.life[1]) + 4), pV);
        nV.moveTo(pV.pos, pV.half);
        const [wV, ZV, vV] = pV.out, rV = QV.spread;
        nV.setDirections([wV - rV, .6 + ZV, vV - rV], [wV + rV, 1 + ZV, vV + rV]), nV.emit(QV.count)
      }
    }
    const aE = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class oE {
      constructor() {
        this.green = new CE(IQ.green, HQ), this.pink = new CE(IQ.pink, uQ), this.colliders = [], this.lastMs = 0
      }
      setSources(VV) {
        this.colliders = VV;
        const eV = [],
          xV = [];
        for (const JV of VV) {
          const [VV, YV, UV] = JV.focus;
          eV.push({
            x: VV,
            y: YV - 1,
            z: UV,
            h: 2,
            faces: aE
          });
          for (let eV = 0; eV < 4; eV++) {
            if (!JV.live[eV]) continue;
            const [VV, YV, UV] = EJ(JV.focus, eV, yJ.LASER_D), [yV, , pV] = bJ[eV], QV = aE.filter((VV => VV[0] !== yV || VV[2] !== pV || 0 !== VV[1]));
            xV.push({
              x: VV,
              y: YV,
              z: UV,
              h: 1,
              faces: QV
            })
          }
        }
        this.green.setSources(eV), this.pink.setSources(xV)
      }
      onAfterRender(VV) {
        const eV = performance.now(),
          xV = 0 === this.lastMs ? 0 : Math.min(eV - this.lastMs, 250) / 1e3;
        if (this.lastMs = eV, 0 === this.colliders.length || !VV.particlesEnabled()) return;
        const JV = VV.getCameraPosition();
        this.green.iZ(VV, xV, JV), this.pink.iZ(VV, xV, JV)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const cE = 1.04,
      hE = iE([1, 120 / 255, 220 / 255]),
      lE = iE([1, .25, .25], .35);
    class LE {
      constructor(VV) {
        this.store = VV, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new oE
      }
      onAfterRender(VV) {
        this.store.version() !== this.builtVersion && this.rebuild(VV);
        const eV = performance.now();
        for (const xV of this.beams) {
          const JV = 1 + .35 * Math.sin(eV / 700 * Math.PI * 2 + xV.phase);
          VV.setGameMesh(xV.mesh, {
            scale: [xV.alongX ? 1 : JV, JV, xV.alongX ? JV : 1]
          })
        }
        this.glow.onAfterRender(VV)
      }
      dispose(VV) {
        this.clear(VV), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(VV) {
        this.clear(VV), this.builtVersion = this.store.version();
        const eV = [];
        for (const {
            entry: xV
          }
          of this.store.colliders()) xV.on && xV.live.some(Boolean) && (this.addBeams(VV, xV), eV.push(xV)), xV.blockers.length > 0 && this.addMarkers(VV, xV);
        this.glow.setSources(eV)
      }
      addBeams(VV, eV) {
        const [xV, JV, YV] = eV.focus, UV = KQ - .25, yV = (.25 + KQ) / 2;
        for (let pV = 0; pV < 4; pV++) {
          if (!eV.live[pV]) continue;
          const [QV, , nV] = bJ[pV], wV = 0 !== QV, ZV = {
            positions: [],
            indices: []
          };
          DE(ZV, 0, 0, 0, wV ? UV : .2, .2, wV ? .2 : UV);
          const vV = [xV + .5 + QV * yV, JV + .5, YV + .5 + nV * yV],
            rV = VV.createGameMesh(ZV, hE, vV);
          this.meshes.push(rV), this.beams.push({
            mesh: rV,
            alongX: wV,
            phase: pV * Math.PI / 2
          })
        }
      }
      addMarkers(VV, eV) {
        const xV = eV.blockers[0],
          JV = {
            positions: [],
            indices: []
          };
        for (const [YV, UV, yV] of eV.blockers) DE(JV, YV - xV[0] + .5, UV - xV[1] + .5, yV - xV[2] + .5, cE, cE, cE);
        this.meshes.push(VV.createGameMesh(JV, lE, xV))
      }
      clear(VV) {
        for (const eV of this.meshes) VV.disposeGameMesh(eV);
        this.meshes = [], this.beams = []
      }
    }
    const fE = [.56, .83, 1],
      mE = [1, .73, .08],
      KE = [1, .25, .25],
      HE = [.85, .85, .85],
      uE = [.3, .45, .6];

    function sE(VV, eV, xV, JV) {
      let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const yV = YV / 2,
        pV = YV + UV;
      for (const QV of [-yV, yV])
        for (const YV of [-yV, yV]) DE(VV, eV, xV + QV, JV + YV, pV, UV, UV), DE(VV, eV + QV, xV, JV + YV, UV, pV, UV), DE(VV, eV + QV, xV + YV, JV, UV, UV, pV)
    }

    function SE(VV) {
      return eV => VV.isBlockInLoadedChunk(eV[0], eV[1], eV[2]) && 0 === VV.getBlockId(eV[0], eV[1], eV[2])
    }

    function IE(VV) {
      return VV.map((VV => {
        let {
          free: eV,
          blocked: xV,
          gaps: JV,
          supports: YV
        } = VV;
        return `${eV.join(";")}|${xV.join(";")}|${JV.join(";")}|${YV.join(";")}`
      })).join("/")
    }

    function dE(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const UV = eV[0],
        yV = {
          positions: [],
          indices: []
        };
      for (const [pV, QV, nV] of eV) sE(yV, pV - UV[0] + .5, QV - UV[1] + .5, nV - UV[2] + .5, JV, YV);
      return VV.createGameMesh(yV, xV, UV)
    }
    class OE {
      constructor(VV) {
        this.store = VV, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(VV, eV, xV) {
        var JV;
        const YV = null === (JV = VV.bJV(eV)) || void 0 === JV ? void 0 : JV.name;
        if (YV !== QJ && YV !== pJ) return void("" !== this.shownKey && this.show(VV, "", []));
        const UV = performance.now();
        if (UV - this.lastCheckMs >= 200 && (this.lastCheckMs = UV, YV === QJ ? this.check(VV, xV) : this.preview(VV, xV)), this.pulses.length > 0) {
          const eV = 1 + .12 * Math.sin(UV / 1e3 * 1.25 * Math.PI * 2),
            xV = [eV, eV, eV];
          for (const JV of this.pulses) VV.setGameMesh(JV, {
            scale: xV
          })
        }
      }
      dispose(VV) {
        this.clear(VV), this.shownKey = ""
      }
      check(VV, eV) {
        const xV = SE(VV),
          JV = [];
        for (const {
            entry: UV
          }
          of this.store.colliders()) {
          UV.focus.every(((VV, xV) => Math.abs(VV + .5 - eV[xV]) <= yJ.GHOST_REACH)) && JV.push(mQ(UV, xV))
        }
        const YV = IE(JV);
        YV !== this.shownKey && this.show(VV, YV, JV)
      }
      preview(VV, eV) {
        const xV = VV.getTargetedBlock(),
          JV = xV ? [xV.FE[0], xV.FE[1], xV.FE[2]] : null,
          YV = null !== JV && JV.every(((VV, xV) => Math.abs(VV + .5 - eV[xV]) <= 8)),
          UV = this.store.site(),
          yV = YV && UV ? function(VV, eV, xV) {
            const JV = kJ(VV);
            if (!JV.every(eV)) return null;
            const YV = qJ(VV, xV);
            return {
              column: JV,
              spots: mQ({
                focus: JV[1],
                lasers: [!1, !1, !1, !1],
                open: YV,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, eV),
              fits: YV.filter(Boolean).length >= yJ.MIN_SPOTS
            }
          }(JV, SE(VV), UV) : null,
          pV = yV ? [yV.spots] : [],
          QV = yV ? `preview ${JV.join(",")}|${yV.fits}|${IE(pV)}` : "";
        var nV, wV;
        QV !== this.shownKey && this.show(VV, QV, pV, null !== (nV = null === yV || void 0 === yV ? void 0 : yV.column) && void 0 !== nV ? nV : [], null === (wV = null === yV || void 0 === yV ? void 0 : yV.fits) || void 0 === wV || wV)
      }
      show(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          YV = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(VV), this.shownKey = eV, JV.length > 0 && this.meshes.push(dE(VV, JV, iE(YV ? HE : KE)));
        for (const {
            free: UV,
            blocked: yV,
            gaps: pV,
            supports: QV
          }
          of xV) {
          for (const [eV, xV, JV] of UV) {
            const YV = {
              positions: [],
              indices: []
            };
            sE(YV, 0, 0, 0);
            const UV = VV.createGameMesh(YV, iE(fE), [eV + .5, xV + .5, JV + .5]);
            this.meshes.push(UV), this.pulses.push(UV)
          }
          yV.length > 0 && this.meshes.push(dE(VV, yV, iE(mE))), pV.length > 0 && this.meshes.push(dE(VV, pV, iE(KE), 1.06, .07)), QV.length > 0 && this.meshes.push(dE(VV, QV, iE(uE)))
        }
      }
      clear(VV) {
        for (const eV of this.meshes) VV.disposeGameMesh(eV);
        this.meshes = [], this.pulses = []
      }
    }
    class VB {
      constructor() {
        this.stored = new Map, this.hn = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(VV) {
        if (!VV.baf2TermOpen) return !1;
        VV.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [eV, xV] of VV.baf2TermItems) xV > 0 ? this.stored.set(eV, xV) : this.stored.delete(eV);
        if (VV.baf2TermHeld && (this.hn = new Map(VV.baf2TermHeld)), this.pending = this.pending.filter((eV => eV.seq > VV.baf2TermAcked)), this.silos = VV.baf2TermSilos, this.readOnly = VV.baf2TermReadOnly, this.pocket = !0 === VV.baf2TermPocket, VV.baf2TermReset) this.resort();
        else {
          const VV = new Set(this.order);
          for (const eV of this.stored.keys()) VV.has(eV) || this.order.push(eV)
        }
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((VV, eV) => this.amount(eV) - this.amount(VV) || VV.localeCompare(eV))), this.changed()
      }
      take(VV, eV) {
        const xV = pe(VV, this.amount(eV));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: eV,
          amount: xV,
          put: !1
        }), this.recents = [eV, ...this.recents.filter((VV => VV !== eV))].slice(0, 6), this.changed(), xe(this.seq, VV, eV)
      }
      put(VV, eV) {
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: eV,
          amount: pe(VV, this.heldAmount(eV)),
          put: !0
        }), this.changed(), Je(this.seq, VV, eV)
      }
      putAll() {
        this.seq++;
        for (const VV of this.heldItems()) this.pending.push({
          seq: this.seq,
          item: VV,
          amount: this.heldAmount(VV),
          put: !0
        });
        return this.changed(), Ye(this.seq)
      }
      amount(VV) {
        var eV;
        let xV = null !== (eV = this.stored.get(VV)) && void 0 !== eV ? eV : 0;
        for (const JV of this.pending) JV.item === VV && (xV += JV.put ? JV.amount : -JV.amount);
        return Math.max(0, xV)
      }
      heldAmount(VV) {
        var eV;
        let xV = null !== (eV = this.hn.get(VV)) && void 0 !== eV ? eV : 0;
        for (const JV of this.pending) JV.put && JV.item === VV && (xV -= JV.amount);
        return Math.max(0, xV)
      }
      heldItems() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return this.order.filter((eV => eV === VV || this.heldAmount(eV) > 0))
      }
      items() {
        return this.order.filter((VV => this.amount(VV) > 0))
      }
      recent() {
        return this.recents.filter((VV => this.amount(VV) > 0))
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
      subscribe(VV) {
        return this.listeners.add(VV), () => {
          this.listeners.delete(VV)
        }
      }
      changed() {
        this.version++;
        for (const VV of this.listeners) VV()
      }
    }
    var eB = xV(39568);
    const xB = {
      isBlock: VV => void 0 !== WV.k[VV],
      harvestType: VV => {
        var eV;
        return null === (eV = WV.k[VV]) || void 0 === eV ? void 0 : eV.harvestType
      },
      harvestLevel: VV => {
        var eV;
        return null === (eV = WV.k[VV]) || void 0 === eV ? void 0 : eV.harvestLevel
      },
      dropsNothing: VV => {
        var eV;
        return null === (null === (eV = WV.k[VV]) || void 0 === eV ? void 0 : eV.drops)
      },
      displayName: VV => {
        var eV;
        return null === (eV = Hy.k[VV]) || void 0 === eV ? void 0 : eV.displayName
      },
      description: VV => {
        var eV;
        return null === (eV = Hy.k[VV]) || void 0 === eV ? void 0 : eV.description
      },
      harvests: VV => {
        var eV;
        return null === (eV = Hy.k[VV]) || void 0 === eV ? void 0 : eV.harvests
      },
      level: VV => {
        var eV;
        return null === (eV = Hy.k[VV]) || void 0 === eV ? void 0 : eV.level
      }
    };

    function JB(VV, eV, xV) {
      return function(VV, eV, xV, JV) {
        var YV, UV;
        const yV = eV.split("|")[0],
          pV = VV.isBlock(eV) ? eV : VV.isBlock(yV) ? yV : null;
        if (null === pV || "rock" !== VV.harvestType(pV) || VV.dropsNothing(pV) && !CJ.has(yV)) return null;
        const QV = xV && "rock" === VV.harvests(xV) ? null !== (YV = VV.level(xV)) && void 0 !== YV ? YV : 0 : null,
          nV = null !== (UV = null !== JV && void 0 !== JV ? JV : VV.harvestLevel(pV)) && void 0 !== UV ? UV : 0;
        return (null !== QV ? nV <= QV : 0 === VV.harvestLevel(pV)) ? null : XJ(VV, nV)
      }(xB, VV, eV, xV)
    }

    function YB(VV, eV) {
      return function(VV, eV, xV) {
        if (eV === NJ[0]) return [(0, DV.Vd)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, DV.E.whiteUiText)];
        const JV = xV.split("|")[0],
          YV = VV.isBlock(JV) ? VV.displayName(JV) : void 0,
          UV = "string" === typeof YV ? YV : YV && "translationKey" in YV ? `$t(${YV.translationKey})` : JV;
        return [(0, DV.Vd)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: UV
          }
        }, DV.E.whiteUiText), (0, DV.Vd)({
          translationKey: `item:${(0,DV.ue)(eV)}`
        }, DV.E.yellowUiText)]
      }(xB, VV, eV)
    }
    const UB = "buildAFactory2Game:";
    const yB = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function pB(VV) {
      return VV.endsWith(" Ore")
    }
    const QB = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      nB = [],
      wB = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: QB,
        plan: null,
        atomic: nB
      },
      ZB = "buildAFactory2Game:",
      vB = new Set(["Splitter", "Sorting Gate"]),
      rB = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class kB {
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = VV, this.planAt = eV, this.tierOf = xV, this.vp = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.hn = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = wB, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(VV, eV, xV) {
        var JV, YV, UV;
        let yV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const pV = null !== (JV = null === (YV = VV.bJV(eV)) || void 0 === YV ? void 0 : YV.name) && void 0 !== JV ? JV : null,
          QV = VV.isPlayerCrouching(eV),
          nV = 0 === xV ? null : this.resolve(VV, xV),
          wV = null !== nV && null !== yV && vB.has(nV.rootName) && function(VV, eV) {
            return rB.some((xV => {
              let [JV, YV] = xV;
              const UV = VV.getBlockId(eV[0] + JV, eV[1], eV[2] + YV);
              return 0 !== UV && "Express Belt" === VV.getMetaInfo(UV).rootName
            }))
          }(VV, yV),
          ZV = this.updatePlan(0 === xV ? null : yV),
          vV = this.tierOf(),
          rV = null === yV ? null : (0, eB.d)(xV),
          kV = null !== rV && null !== yV && (0, eB.e)(function(VV) {
            return (eV, xV, JV) => VV.getBlockId(eV, xV, JV)
          }(VV), yV[0], yV[1], yV[2], rV),
          bV = this.readAfloat(VV, xV, yV);
        if (xV === this.vp && kV === this.missesMaker && bV === this.afloat && pV === this.hn && QV === this.crouching && wV === this.express && vV === this.tier && !ZV && (!this.targetsLive || !this.liveMoved(yV))) return;
        this.vp = xV, this.missesMaker = kV, this.afloat = bV, this.hn = pV, this.crouching = QV, this.express = wV;
        const EV = wV && nV ? function(VV) {
          if (null === VV.info) return null;
          return VV.express ??= {
            ...VV.info,
            detail: `${ZB}lookKeepsUpExpress`,
            detailItem: null
          }, VV.express
        }(nV) : null !== nV && kV && null !== rV ? this.besideMaker(nV, xV, rV) : null !== nV && bV ? this.hanging(nV) : null !== (UV = null === nV || void 0 === nV ? void 0 : nV.info) && void 0 !== UV ? UV : null;
        this.tier = vV;
        const BV = nV && EV ? function(VV, eV) {
          var xV, JV;
          const YV = WV.k[VV];
          if (!VV.endsWith(" Ore") || "rock" !== (null === YV || void 0 === YV ? void 0 : YV.harvestType) || 0 === YV.harvestLevel) return null;
          const UV = null !== (xV = YV.harvestLevel) && void 0 !== xV ? xV : 0,
            yV = eV ? Hy.k[eV] : void 0;
          if ("rock" === (null === yV || void 0 === yV ? void 0 : yV.harvests) && (null !== (JV = yV.level) && void 0 !== JV ? JV : 0) >= UV) return null;
          const pV = (QV = UV, XJ(xB, QV));
          var QV;
          if (null === pV) return null;
          const nV = (0, dY.c)(pV),
            wV = /^[AEIOU]/.test(pV) ? "An" : "";
          if ("rock" === (null === yV || void 0 === yV ? void 0 : yV.harvests) && eV) return {
            key: `${ZB}lookToolTooWeak${wV}`,
            hn: (0, dY.c)(eV),
            needed: nV
          };
          return {
            key: pV === NJ[0] ? `${ZB}lookNeedAnyPickaxe` : `${ZB}lookNeedPickaxe${wV}`,
            hn: null,
            needed: nV
          }
        }(nV.rootName, pV) : null;
        this.targetsLive = !0 === (null === nV || void 0 === nV ? void 0 : nV.live) && null !== yV;
        let jV = null;
        this.targetsLive && nV && yV && this.live && (this.livePos[0] = yV[0], this.livePos[1] = yV[1], this.livePos[2] = yV[2], this.liveVersion = this.live.version(), jV = this.live.line(nV.rootName, yV));
        const qV = null === EV ? QB : function(VV, eV, xV) {
            const JV = function(VV, eV, xV) {
              const JV = gx(VV);
              if (null === JV) return null;
              const YV = `${UB}lookPortMode_${JV}`,
                UV = cJ(eV);
              if (UV && xV) return {
                mode: null,
                detail: YV,
                next: `${UB}lookWrenchPickUp`,
                nextState: null
              };
              const yV = Dx(VV),
                pV = null === yV ? null : gx(yV);
              return null === pV ? {
                mode: null,
                detail: YV,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: YV,
                next: UV ? `${UB}lookWrenchNext` : `${UB}lookPortWrench`,
                nextState: `${UB}lookPortState_${pV}`
              }
            }(VV, eV, xV);
            if (null !== JV) return JV;
            const YV = VY(VV, eV, xV);
            return null === YV.mode && null === YV.next ? QB : YV
          }(VV.blockIdToBlockName(xV), pV, QV),
          tV = this.plan,
          FV = nV && EV ? this.rowsOf(nV.rootName, vV) : nB,
          TV = this.snapshot;
        if (!(null === EV ? !TV.visible : TV.visible && EV === TV.info && (PV = BV, AV = TV.tool, PV === AV || null !== PV && null !== AV && PV.key === AV.key && PV.hn === AV.hn && PV.needed === AV.needed) && function(VV, eV) {
            return VV === eV || null !== VV && null !== eV && VV.key === eV.key && JSON.stringify([VV.params, VV.keys]) === JSON.stringify([eV.params, eV.keys])
          }(jV, TV.live) && function(VV, eV) {
            return VV.mode === eV.mode && VV.detail === eV.detail && VV.next === eV.next && VV.nextState === eV.nextState
          }(qV, TV.wrench) && Kk(tV, TV.plan) && FV === TV.atomic)) {
          var PV, AV;
          this.snapshot = null === EV ? {
            ...TV,
            visible: !1
          } : {
            info: EV,
            visible: !0,
            tool: BV,
            live: jV,
            wrench: qV,
            plan: tV,
            atomic: FV
          };
          for (const VV of this.listeners) VV()
        }
      }
      get() {
        return this.snapshot
      }
      subscribe(VV) {
        return this.listeners.add(VV), () => {
          this.listeners.delete(VV)
        }
      }
      dispose() {
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = wB, this.vp = 0, this.hn = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(VV, eV, xV) {
        if (null === xV || 0 === eV || !pV() || !pB(this.resolve(VV, eV).rootName)) return !1;
        const JV = `${xV[0]},${xV[1]},${xV[2]},${eV}`,
          YV = performance.now();
        return JV === this.afloatKey && YV - this.afloatAt < bB ? this.afloat : (this.afloatKey = JV, this.afloatAt = YV, function(VV, eV) {
          for (const [xV, JV, YV] of yB) {
            const UV = eV(VV[0] + xV, VV[1] + JV, VV[2] + YV);
            if (void 0 === UV || null !== UV && !pB(UV)) return !1
          }
          return !0
        }(xV, ((eV, xV, JV) => function(VV, eV, xV, JV) {
          if (!VV.isBlockInLoadedChunk(eV, xV, JV)) return;
          const YV = VV.getBlockId(eV, xV, JV);
          return 0 === YV ? null : VV.getMetaInfo(YV).rootName
        }(VV, eV, xV, JV))))
      }
      liveMoved(VV) {
        var eV;
        const {
          livePos: xV
        } = this;
        return null === VV || VV[0] !== xV[0] || VV[1] !== xV[1] || VV[2] !== xV[2] || (null === (eV = this.live) || void 0 === eV ? void 0 : eV.version()) !== this.liveVersion
      }
      updatePlan(VV) {
        const eV = null === VV ? "" : VV.join(","),
          xV = performance.now();
        if (eV === this.planPos && xV - this.planMs < 250) return !1;
        this.planPos = eV, this.planMs = xV;
        const JV = null === VV ? null : this.planAt([VV[0], VV[1], VV[2]]),
          YV = !Kk(JV, this.plan);
        return this.plan = JV, YV
      }
      besideMaker(VV, eV, xV) {
        let {
          info: JV
        } = VV;
        if (null === JV) return null;
        let YV = this.besideMakerById.get(eV);
        if (void 0 === YV) {
          const VV = "cryo" === xV ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          YV = {
            ...JV,
            detail: `${ZB}${VV}`,
            detailItem: null
          }, this.besideMakerById.set(eV, YV)
        }
        return YV
      }
      hanging(VV) {
        let {
          info: eV,
          rootName: xV
        } = VV;
        if (null === eV) return null;
        let JV = this.afloatByRoot.get(xV);
        return void 0 === JV && (JV = {
          ...eV,
          detail: `${ZB}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(xV, JV)), JV
      }
      rowsOf(VV, eV) {
        if (null === eV) return nB;
        const xV = `${VV}|${eV}`;
        let JV = this.rowsByKey.get(xV);
        if (void 0 === JV) {
          const YV = function(VV, eV) {
            var xV;
            if (!(VV in De)) return [];
            const JV = null !== (xV = ie[VV]) && void 0 !== xV ? xV : [],
              YV = new Map;
            for (const yV of CU(VV, eV))
              if ((JV.includes(yV) || iU(yV.output) && gU(yV.output) > SV(VV)) && gU(yV.output) <= eV) {
                var UV;
                const VV = null !== (UV = YV.get(yV.output)) && void 0 !== UV ? UV : [];
                VV.push(yV.input), YV.set(yV.output, VV)
              } return oU([...YV], (VV => {
              let [eV] = VV;
              return -gU(eV)
            })).map((VV => {
              let [eV, xV] = VV;
              return {
                output: eV,
                inputs: xV
              }
            }))
          }(VV, eV);
          JV = YV.length > 0 ? YV : nB, this.rowsByKey.set(xV, JV)
        }
        return JV
      }
      resolve(VV, eV) {
        const {
          rootId: xV,
          rootName: JV
        } = VV.getMetaInfo(eV), YV = (0, kx.j)(JV) ? eV : xV;
        let UV = this.byRootId.get(YV);
        const yV = pV();
        if (void 0 === UV || UV.nuclear !== yV) {
          var QV;
          const xV = function(VV) {
            return DJ(xB, VV, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : VV)
          }(JV, VV.blockIdToBlockName(eV));
          UV = {
            info: xV,
            rootName: JV,
            live: null !== xV && !0 === (null === (QV = this.live) || void 0 === QV ? void 0 : QV.handles(JV)),
            nuclear: yV
          }, this.byRootId.set(YV, UV)
        }
        return UV
      }
    }
    const bB = 500;
    const EB = (0, JV.memo)((function(VV) {
      var eV, xV;
      let {
        store: YV
      } = VV;
      const {
        t: UV
      } = (0, AY.A)(), [yV, pV] = (0, JV.useState)((() => YV.get()));
      (0, JV.useEffect)((() => (pV(YV.get()), YV.subscribe((() => {
        pV(YV.get())
      })))), [YV]);
      const {
        openInGameMenuName: QV,
        openEverythingMenuName: nV,
        isTouchScreen: wV
      } = (0, BY.l)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
        info: ZV,
        tool: vV,
        live: rV,
        wrench: kV,
        atomic: bV
      } = yV, EV = yV.visible && null === QV && null === nV;
      if (null === ZV) return null;
      const BV = null !== kV.detail ? UV(kV.detail) : null !== (eV = yV.plan) && void 0 !== eV && eV.ctrl ? UV("buildAFactory2Game:lookPlanCtrl") : null !== ZV.detail ? UV(ZV.detail, null === ZV.detailItem ? void 0 : {
        item: UV(ZV.detailItem)
      }) : null;
      return (0, qU.jsxs)("div", {
        className: tY()("Baf2LookTarget", {
          Visible: EV
        }),
        "aria-hidden": !EV,
        children: [(0, qU.jsx)("div", {
          className: "Baf2LookTargetName SmallTextBold",
          children: UV(ZV.name)
        }), null !== yV.plan && (0, qU.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: UV(yV.plan.key, {
            kind: UV(yV.plan.kindKey),
            w: String(yV.plan.w),
            h: String(yV.plan.h),
            d: String(yV.plan.d),
            count: String(yV.plan.count)
          })
        }), void 0 !== (null === (xV = yV.plan) || void 0 === xV ? void 0 : xV.why) && (0, qU.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: UV(yV.plan.why)
        }), null !== kV.mode && (0, qU.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: UV(kV.mode)
        }), null !== vV ? (0, qU.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: UV(vV.key, {
            item: UV(vV.needed),
            hn: null === vV.hn ? "" : UV(vV.hn)
          })
        }) : null !== rV ? (0, qU.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: UV(rV.key, dQ(UV, rV))
        }) : null !== BV && (0, qU.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: BV
        }), bV.length > 0 && (0, qU.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: UV("buildAFactory2Game:lookAtomicRecipes", {
            list: bV.map((VV => {
              let {
                output: eV,
                inputs: xV
              } = VV;
              const JV = xV.length > 1 ? ` ${UV("buildAFactory2Game:recipeMore",{count:String(xV.length-1)})}` : "";
              return `${UV((0,dY.c)(xV[0]))}${JV} \u2192 ${UV((0,dY.c)(eV))}`
            })).join(", ")
          })
        }), null !== kV.next && (0, qU.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: UV(kV.next, {
            state: null === kV.nextState ? "" : UV(kV.nextState),
            use: UV(wV ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
          })
        })]
      })
    }));
    var BB = xV(39669);
    const jB = [],
      qB = [
        [0, -1, 0]
      ];

    function tB(VV) {
      const eV = [VV];
      for (let xV = 1; xV <= 4; xV++) xV > 1 && eV.push(`${VV}|meta|rot${xV}`), eV.push(`${VV}|meta|rot${xV}|Running`);
      return eV
    }

    function FB(VV, eV) {
      return [Math.floor(VV[0] / eV), Math.floor(VV[1] / eV), Math.floor(VV[2] / eV)]
    }

    function TB(VV, eV, xV) {
      return `${VV},${eV},${xV}`
    }

    function PB(VV) {
      const eV = VV.split("|")[0];
      if (!nx(eV)) return jB;
      const xV = De[eV];
      if (ex(xV)) return qB;
      const JV = FE(VV);
      return xx(xV) ? [
        [-JV[0], -JV[1], -JV[2]]
      ] : FY(xV) ? function(VV, eV) {
        const xV = VV[0] - 2 * eV[0],
          JV = VV[2] - 2 * eV[2],
          YV = [];
        for (let UV = -1; UV <= 1; UV++)
          for (let eV = -1; eV <= 1; eV++) YV.push([xV + UV, VV[1], JV + eV]);
        return YV
      }([0, 0, 0], JV) : jB
    }
    const AB = [.5, .5, .5],
      NB = [.2, .8, .3],
      XB = [.45, 1, .5];
    class MB {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(VV) {
        this.indexed = !0;
        for (const eV of Me)
          for (const xV of tB(eV)) {
            const eV = VV.blockNameToBlockId(xV, !0),
              JV = PB(xV);
            null !== eV && JV.length > 0 && (this.offsetsList.push(JV), this.offsetsIndexById[eV] = this.offsetsList.length)
          }
      }
      onAfterRender(VV, eV) {
        this.indexed || this.index(VV);
        const xV = performance.now();
        if (xV - this.lastCheckMs < 100) return;
        this.lastCheckMs = xV, this.checks++;
        const JV = vk.f.PZ,
          [YV, UV, yV] = FB(eV, JV);
        let pV = !1;
        const QV = [];
        let nV = 0;
        for (let wV = YV - 2; wV <= YV + 2; wV++)
          for (let eV = UV - 1; eV <= UV + 1; eV++)
            for (let YV = yV - 2; YV <= yV + 2; YV++) {
              const UV = nV++,
                yV = TB(wV, eV, YV),
                ZV = VV.getChunkVersion(wV, eV, YV);
              let vV = this.chunks.get(yV);
              null !== ZV ? (vV || (vV = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(yV, vV)), vV.seenAt = this.checks, vV.checkedVersion !== ZV && (vV.checkedVersion = ZV, pV = !0), vV.scannedVersion !== ZV && xV - vV.scannedAt >= 500 && QV.push({
                slot: UV,
                entry: vV,
                origin: [wV * JV, eV * JV, YV * JV]
              })) : (pV ||= void 0 !== vV, this.chunks.delete(yV))
            }
        this.scanDue(VV, QV) && (pV = !0);
        for (const [wV, ZV] of this.chunks) ZV.seenAt !== this.checks && (pV ||= ZV.machines.length > 0, this.chunks.delete(wV));
        for (const wV of this.chunks.values())
          for (const [eV, xV, JV] of wV.cellChunks)(Math.abs(eV - YV) > 2 || Math.abs(xV - UV) > 1 || Math.abs(JV - yV) > 2) && this.watchCellChunk(VV, eV, xV, JV) && (pV = !0);
        for (const [wV, ZV] of this.cellChunks) ZV.seenAt !== this.checks && this.cellChunks.delete(wV);
        pV && this.refresh(VV)
      }
      dispose(VV) {
        this.clearMeshes(VV), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(VV, eV) {
        const xV = Math.max(eV.findIndex((VV => {
          let {
            slot: eV
          } = VV;
          return eV >= this.scanFrom
        })), 0);
        let JV = 96;
        for (let YV = 0; YV < eV.length; YV++) {
          const {
            slot: UV,
            entry: yV,
            origin: pV
          } = eV[(xV + YV) % eV.length];
          if (JV -= this.scan(VV, yV, pV), JV <= 0) {
            this.scanFrom = UV + 1;
            break
          }
        }
        return eV.length > 0
      }
      scan(VV, eV, xV) {
        let [JV, YV, UV] = xV;
        const yV = vk.f.PZ,
          pV = this.hits;
        pV.length = 0;
        const QV = VV.scanBlocks(JV, YV, UV, JV + yV, YV + yV, UV + yV, this.offsetsIndexById, pV),
          nV = [];
        for (let wV = 0; wV < pV.length; wV += 4) nV.push({
          pos: [pV[wV], pV[wV + 1], pV[wV + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[pV[wV + 3]] - 1]
        });
        return eV.machines = nV, eV.cellChunks = function(VV, eV) {
          const xV = new Set,
            JV = [];
          for (const {
              pos: YV,
              offsets: UV
            }
            of VV)
            for (const [VV, yV, pV] of UV) {
              const UV = FB([YV[0] + VV, YV[1] + yV, YV[2] + pV], eV),
                QV = TB(...UV);
              xV.has(QV) || (xV.add(QV), JV.push(UV))
            }
          return JV
        }(nV, yV), eV.scannedVersion = eV.checkedVersion, eV.scannedAt = performance.now(), Math.max(QV, 1)
      }
      watchCellChunk(VV, eV, xV, JV) {
        const YV = TB(eV, xV, JV),
          UV = VV.getChunkVersion(eV, xV, JV),
          yV = this.cellChunks.get(YV);
        return null === UV ? this.cellChunks.delete(YV) : (null === yV || void 0 === yV ? void 0 : yV.version) === UV ? (yV.seenAt = this.checks, !1) : (this.cellChunks.set(YV, {
          version: UV,
          seenAt: this.checks
        }), !0)
      }
      refresh(VV) {
        const eV = function(VV, eV) {
            const xV = new Set,
              JV = [];
            for (const {
                pos: YV,
                offsets: UV
              }
              of VV)
              for (const [VV, yV, pV] of UV) {
                const UV = YV[0] + VV,
                  QV = YV[1] + yV,
                  nV = YV[2] + pV,
                  wV = `${UV},${QV},${nV}`;
                xV.has(wV) || (xV.add(wV), eV(UV, QV, nV) && JV.push([UV, QV, nV]))
              }
            return JV
          }([...this.chunks.values()].flatMap((VV => VV.machines)), ((eV, xV, JV) => VV.isBlockInLoadedChunk(eV, xV, JV) && 0 === VV.getBlockId(eV, xV, JV))),
          xV = eV.join(";");
        xV !== this.shownKey && (this.shownKey = xV, this.clearMeshes(VV), eV.length > 0 && (this.meshes = [this.build(VV, eV, !1), this.build(VV, eV, !0)]))
      }
      build(VV, eV, xV) {
        const JV = eV[0],
          YV = [],
          UV = [];
        for (const [yV, pV, QV] of eV)(0, BB.d)(YV, UV, [yV - JV[0] + .5, pV - JV[1] + .5, QV - JV[2] + .5], AB, xV);
        return VV.createGameMesh({
          positions: YV,
          indices: UV
        }, {
          rgb: xV ? XB : NB,
          alpha: .4
        }, JV)
      }
      clearMeshes(VV) {
        for (const eV of this.meshes) VV.disposeGameMesh(eV);
        this.meshes = []
      }
    }
    const zB = 1 / .6,
      GB = 200,
      WB = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      RB = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      gB = 2 * Math.PI / 3;
    class DB {
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WB;
        this.style = VV, this.particles = null, this.points = new Float32Array(800), this.budget = GB, this.lastMs = 0
      }
      static blade() {
        return new DB(RB)
      }
      jF(VV, eV) {
        const xV = Math.min(eV.arcStruck, eV.arcPoints.length);
        this.draw(VV, [eV.arcFrom, ...eV.arcPoints], eV.arcPoints.slice(0, xV))
      }
      onBlade(VV, eV) {
        const [xV, JV, YV] = eV.bladeCentre, [UV, yV] = eV.bladeFacing, pV = xV - 1.5 * UV, QV = YV - 1.5 * yV, nV = Math.atan2(yV, UV), wV = [];
        for (let ZV = 0; ZV <= 8; ZV++) {
          const VV = nV - gB / 2 + gB * ZV / 8;
          wV.push([pV + 2.5 * Math.cos(VV), JV, QV + 2.5 * Math.sin(VV)])
        }
        this.draw(VV, wV, eV.bladeStruck)
      }
      dispose() {
        var VV;
        null === (VV = this.particles) || void 0 === VV || VV.stop(), this.particles = null
      }
      draw(VV, eV, xV) {
        if (!VV.particlesEnabled() || eV.length < 2) return;
        const JV = performance.now();
        this.budget = Math.min(GB, this.budget + (JV - this.lastMs) / 1e3 * GB), this.lastMs = JV;
        const YV = [];
        let UV = 0,
          yV = eV[0];
        for (const BV of eV.slice(1)) {
          const VV = Math.min(48, Math.round(Math.hypot(BV[0] - yV[0], BV[1] - yV[1], BV[2] - yV[2]) * this.style.perBlock));
          YV.push([yV, BV, VV]), UV += VV, yV = BV
        }
        const pV = xV.length;
        UV += 10 * pV;
        const QV = UV > this.budget ? this.budget / UV : 1;
        if (0 === UV || QV * UV < 1) return;
        const nV = eV[0],
          [wV, ZV, vV] = nV,
          rV = this.points;
        let kV = 0;
        const bV = (VV, eV, xV, JV) => {
          const YV = 4 * kV;
          rV[YV] = VV - wV, rV[YV + 1] = eV - ZV, rV[YV + 2] = xV - vV, rV[YV + 3] = JV, kV++
        };
        YV.forEach(((VV, eV) => {
          let [xV, JV, YV] = VV;
          const UV = Math.min(Math.floor(YV * QV), GB - kV),
            yV = Math.hypot(JV[0] - xV[0], JV[1] - xV[1], JV[2] - xV[2]),
            pV = 0 === eV && yV > 0 ? Math.min(.5, .1 * yV) / yV : 0;
          for (let QV = 0; QV < UV; QV++) {
            const VV = pV + (QV + .5) / UV * (1 - pV);
            bV(xV[0] + (JV[0] - xV[0]) * VV, xV[1] + (JV[1] - xV[1]) * VV, xV[2] + (JV[2] - xV[2]) * VV, .15)
          }
        }));
        const EV = Math.floor(10 * QV);
        for (let BV = 0; BV < pV; BV++) {
          const [VV, eV, JV] = xV[BV];
          for (let xV = 0; xV < EV && kV < GB; xV++) bV(VV, eV, JV, 2.5)
        }
        this.budget -= kV, this.particles ??= VV.createParticles(function(VV) {
          const [eV, xV] = VV.colours;
          return {
            texture: "square_particle",
            Jv: 400,
            minLifeTime: VV.life[0] / zB,
            maxLifeTime: VV.life[1] / zB,
            minSize: VV.size[0],
            maxSize: VV.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [eV[0], eV[1], eV[2], 1],
              maxColor: [xV[0], xV[1], xV[2], 1]
            }, {
              timeFraction: 1,
              minColor: [eV[0], eV[1], eV[2], 0],
              maxColor: [xV[0], xV[1], xV[2], 0]
            }],
            blendMode: zp.g.Add
          }
        }(this.style), {
          pos: nV
        }), this.particles.emitPoints(nV, rV, kV)
      }
    }
    const iB = new Set(["Sky Spring"]);

    function CB(VV, eV, xV) {
      const JV = VV.split("|")[0];
      return "Air" !== eV || xV || ! function(VV) {
        const eV = VV.split("|")[0];
        return void 0 !== yx[eV] || iB.has(eV)
      }(JV) ? null : VV
    }
    class aB {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(VV) {
        const eV = VV - this.lastTapAt >= 300;
        return this.lastTapAt = VV, eV
      }
    }
    class oB {
      constructor() {
        this.presses = new aB, this.predicted = null
      }
      tap(VV, eV) {
        const xV = this.presses.isNewPress(eV);
        return xV && (this.predicted = {
          station: VV,
          at: eV
        }), xV
      }
      consumeServerOpen(VV, eV) {
        const xV = this.predicted;
        return !(null === xV || xV.station !== VV || eV - xV.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class cB {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(VV, eV) {
        return VV && (this.thrustAt = eV), eV - this.thrustAt < 200
      }
    }
    const hB = [.1, .05, .1],
      lB = {
        texture: "effect_5",
        Jv: Math.ceil(48),
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
        blendMode: zp.g.OneOne
      };
    class LB {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new cB, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      jF(VV, eV) {
        for (const [xV, JV] of eV.baf2JetFlames) VV.isLocalPlayer(xV) || (JV ? this.lit.add(xV) : this.lit.delete(xV))
      }
      onAfterRender(VV, eV) {
        const xV = performance.now(),
          JV = this.hold.lit(this.selfThrusting(VV, eV), xV);
        for (const [YV, UV] of this.flames)(YV === eV ? JV : this.lit.has(YV)) || this.setEmitting(UV, !1), YV === eV || VV.getPositionView(YV) ? !UV.emitting && xV - UV.offAt >= 1300 && (UV.particles.stop(), this.flames.delete(YV)) : (UV.particles.dispose(), this.flames.delete(YV), this.lit.delete(YV));
        JV && this.draw(VV, eV, eV);
        for (const YV of this.lit) this.draw(VV, eV, YV)
      }
      dispose() {
        for (const VV of this.flames.values()) VV.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(VV, eV) {
        var xV;
        const JV = VV.getLocalPlayerMovement();
        return !!JV && (null !== (YV = {
          option: null !== (xV = VV.getClientOption(eV, "jumpHoldThrust")) && void 0 !== xV ? xV : null,
          jumping: JV.jumpHeld,
          onGround: JV.onGround,
          alive: VV.isAlive(eV)
        }).option && YV.option.maxUpSpeed >= 0 && YV.jumping && !YV.onGround && YV.alive);
        var YV
      }
      draw(VV, eV, xV) {
        var JV, YV;
        const UV = this.pos;
        if (!VV.readDrawnPosition(xV, UV)) return;
        const yV = VV.readDrawnPosition(eV, this.camera) ? this.camera : UV;
        if (!((UV[0] - yV[0]) ** 2 + (UV[1] - yV[1]) ** 2 + (UV[2] - yV[2]) ** 2 < 1600) || !VV.particlesEnabled()) {
          const VV = this.flames.get(xV);
          return void(VV && this.setEmitting(VV, !1))
        }
        const pV = null !== (JV = this.flames.get(xV)) && void 0 !== JV ? JV : this.create(VV, xV, UV),
          QV = null !== (YV = VV.getDrawnHeading(xV)) && void 0 !== YV ? YV : 0,
          nV = this.at;
        nV[0] = UV[0] - .35 * Math.sin(QV), nV[1] = UV[1] + 1.05, nV[2] = UV[2] - .35 * Math.cos(QV), pV.particles.moveTo(nV), this.setEmitting(pV, !0)
      }
      setEmitting(VV, eV) {
        VV.emitting !== eV && (VV.emitting = eV, eV || (VV.offAt = performance.now()), VV.particles.setEmitRate(eV ? 60 : 0))
      }
      create(VV, eV, xV) {
        const JV = {
          particles: VV.createParticles(lB, {
            pos: xV,
            half: hB
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(eV, JV), JV
      }
    }

    function fB(VV) {
      return "Reactor Frame" === JJ("reactor", VV)
    }

    function mB(VV) {
      return ox("reactor", VV) && !fB(VV) && (VV.startsWith("Reactor Glass") || VV.startsWith("Reactor Port"))
    }
    const KB = "baf2Goal";
    class HB {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [WY.h.subscribe("setDirectionArrow", (VV => {
          let {
            id: eV,
            position: xV
          } = VV;
          eV === KB && (this.goal = xV, this.checkedAt = -1 / 0)
        })), WY.h.subscribe("clearDirectionArrow", (VV => {
          let {
            id: eV
          } = VV;
          null !== eV && eV !== KB || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const VV of this.subs) WY.h.unsubscribe(VV)
      }
      sideOf(VV, eV, xV, JV) {
        const YV = this.goal;
        if (!YV) return 0;
        xV - this.checkedAt > 1e3 && (this.checkedAt = xV, this.open = function(VV, eV) {
          const [xV, JV, YV] = VV.map(Math.floor);
          if (!mB(eV(xV, JV, YV))) return null;
          for (const [UV, yV] of [
              [1, 0],
              [0, 1]
            ]) {
            const VV = eV(xV + UV, JV, YV + yV),
              pV = eV(xV - UV, JV, YV - yV);
            if (fB(pV) && mB(VV)) return [UV, 0, yV];
            if (fB(VV) && mB(pV)) return [0 - UV, 0, 0 - yV]
          }
          return null
        }(YV, ((eV, xV, JV) => VV.blockIdToBlockName(VV.getBlockId(eV, xV, JV)))));
        const UV = this.open;
        if (!UV) return 0;
        const yV = JV(YV);
        if (Math.abs(yV.x - eV.x) > .05 || Math.abs(yV.y - eV.y) > .05) return 0;
        const pV = JV([YV[0] + UV[0], YV[1], YV[2] + UV[2]]).x - yV.x;
        return Math.abs(pV) < .3 ? 0 : pV > 0 ? 1 : -1
      }
    }
    class uB {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new HB, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.ik = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.hq = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((VV => {
          for (const eV of VV) eV.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(eV.target, eV.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.ik || this.clear()
        }, window.addEventListener("resize", this.hq)
      }
      onAfterRender(VV, eV) {
        var xV;
        this.api = VV, this.project = null !== (xV = null === eV || void 0 === eV ? void 0 : eV.projectWorldPosToScreenPos) && void 0 !== xV ? xV : null, this.queued || this.ik || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.ik = !0;
        for (const VV of this.moved.keys()) VV.style.transform = "";
        this.moved.clear();
        for (const VV of this.sideLabels.keys()) VV.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.hq)
      }
      clear() {
        for (const UV of this.moved.keys()) UV.isConnected || this.moved.delete(UV);
        for (const UV of this.sideLabels.keys()) UV.isConnected || this.sideLabels.delete(UV);
        if (0 === this.arrows.length) return;
        const VV = performance.now(),
          eV = VV - this.refreshedAt > 1e3;
        eV && (this.refreshedAt = VV, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const xV = this.trackerBox(),
          JV = this.barsBox(),
          YV = this.toastBox(eV);
        (xV || JV || YV) && eV && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let UV = 0; UV < this.arrows.length; UV++) {
          const eV = this.arrows[UV];
          this.labelOffsets.set(eV, this.runLabelAside(eV, VV));
          const yV = (xV ? this.shiftLeftOf(eV, xV) : 0) || this.shiftOnScreen(eV),
            pV = Math.min(JV ? this.liftAbove(eV, JV, yV) : 0, YV ? this.liftAbove(eV, YV, yV) : 0),
            QV = this.moved.get(eV);
          if (0 !== yV || 0 !== pV) {
            const VV = 0 === pV ? `translateX(${yV}px)` : `translate(${yV}px, ${pV}px)`;
            QV !== VV && (eV.style.transform = VV, this.moved.set(eV, VV))
          } else void 0 !== QV && (eV.style.transform = "", this.moved.delete(eV))
        }
      }
      trackerBox() {
        var VV, eV;
        const xV = null !== (VV = this.tracker) && void 0 !== VV && VV.isConnected ? this.tracker : null !== (eV = this.trackers[0]) && void 0 !== eV ? eV : null;
        if (xV !== this.tracker && this.watch(xV), this.boxStale && xV) {
          var JV, YV, UV;
          this.boxStale = !1;
          const VV = xV.closest(".NoRoom") ? null : xV.getBoundingClientRect(),
            eV = VV && VV.width > 0 ? null === (JV = this.hud) || void 0 === JV ? void 0 : JV.getBoundingClientRect() : void 0,
            yV = VV && eV ? Math.max(VV.top, eV.top) : null !== (YV = null === VV || void 0 === VV ? void 0 : VV.top) && void 0 !== YV ? YV : 0,
            pV = VV && eV ? Math.min(VV.bottom, eV.bottom) : null !== (UV = null === VV || void 0 === VV ? void 0 : VV.bottom) && void 0 !== UV ? UV : 0;
          this.box = VV && VV.width > 0 && pV > yV ? {
            left: VV.left,
            top: yV,
            right: VV.right,
            bottom: pV
          } : null
        }
        return xV ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var VV;
          this.barsStale = !1;
          const eV = null === (VV = this.statBars[0]) || void 0 === VV ? void 0 : VV.getBoundingClientRect();
          this.bars = eV && eV.width > 0 && eV.height > 0 ? {
            left: eV.left,
            top: eV.top,
            right: eV.right,
            bottom: eV.bottom
          } : null
        }
        return this.bars
      }
      toastBox(VV) {
        var eV;
        const xV = null !== (eV = this.toasts[0]) && void 0 !== eV ? eV : null;
        if (xV !== this.toastEl || VV && xV) {
          this.toastEl = xV;
          const VV = null === xV || void 0 === xV ? void 0 : xV.getBoundingClientRect();
          this.toast = VV && VV.width > 0 && VV.height > 0 ? {
            left: VV.left,
            top: VV.top,
            right: VV.right,
            bottom: VV.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(VV, eV, xV) {
        var JV;
        const YV = this.anchorOf(VV);
        if (!YV) return 0;
        const UV = YV.x + xV + (null !== (JV = this.labelOffsets.get(VV)) && void 0 !== JV ? JV : 0),
          {
            halfWidth: yV,
            labelled: pV
          } = this.extentOf(VV),
          QV = YV.y + this.em * (pV ? 6.2 : 3);
        return QV < eV.top - 6 || UV + yV < eV.left - 6 || UV - yV > eV.right + 6 ? 0 : eV.top - 6 - QV
      }
      watch(VV) {
        var eV, xV;
        this.tracker && this.sizes.unobserve(this.tracker), null === (eV = this.hud) || void 0 === eV || eV.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = VV, this.hud = null !== (xV = null === VV || void 0 === VV ? void 0 : VV.closest(".Baf2QuestHud")) && void 0 !== xV ? xV : null, this.box = null, this.boxStale = !0, VV && this.sizes.observe(VV), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(VV, eV) {
        var xV;
        const JV = this.anchorOf(VV);
        if (!JV) return 0;
        const {
          y: YV
        } = JV, UV = JV.x + (null !== (xV = this.labelOffsets.get(VV)) && void 0 !== xV ? xV : 0), yV = this.em, {
          halfWidth: pV,
          labelled: QV
        } = this.extentOf(VV), nV = YV - yV, wV = UV + pV;
        return YV + yV * (QV ? 6.2 : 3) < eV.top || nV > eV.bottom || wV < eV.left - 6 || UV - pV > eV.right ? 0 : Math.max(eV.left - 6 - wV, 6 - (UV - pV))
      }
      shiftOnScreen(VV) {
        var eV;
        const xV = this.anchorOf(VV);
        if (!xV) return 0;
        const {
          halfWidth: JV
        } = this.extentOf(VV), YV = xV.x + (null !== (eV = this.labelOffsets.get(VV)) && void 0 !== eV ? eV : 0), UV = YV + JV - (this.innerWidth - 6);
        return UV > 0 ? -UV : Math.max(0, 6 - (YV - JV))
      }
      runLabelAside(VV, eV) {
        var xV;
        let JV = null;
        for (let yV = 0; yV < VV.children.length; yV++) VV.children[yV].classList.contains("DirectionArrowLabel") && (JV = VV.children[yV]);
        if (!JV) return 0;
        const YV = VV.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(VV) : null,
          UV = (YV && this.api ? this.side.sideOf(this.api, {
            x: YV.x / this.innerWidth * 100,
            y: YV.y / this.innerHeight * 100
          }, eV, this.project) : 0) * this.halfWidthOf(JV);
        return UV !== (null !== (xV = this.sideLabels.get(JV)) && void 0 !== xV ? xV : 0) && (JV.style.transform = 0 === UV ? "" : `translateX(-50%) translateX(${UV}px)`, 0 === UV ? this.sideLabels.delete(JV) : this.sideLabels.set(JV, UV)), UV
      }
      extentOf(VV) {
        let eV = this.em,
          xV = !1;
        for (let JV = 0; JV < VV.children.length; JV++) {
          const YV = VV.children[JV],
            UV = YV.classList.contains("DirectionArrowLabel");
          xV ||= UV, (UV || YV.classList.contains("DirectionArrowDistance")) && (eV = Math.max(eV, this.halfWidthOf(YV)))
        }
        return {
          halfWidth: eV,
          labelled: xV
        }
      }
      halfWidthOf(VV) {
        let eV = this.halfWidths.get(VV);
        return void 0 === eV && (eV = VV.offsetWidth / 2, this.halfWidths.set(VV, eV), this.sizes.observe(VV), this.labels.add(VV)), eV
      }
      forgetGoneLabels() {
        for (const VV of this.labels) VV.isConnected || (this.sizes.unobserve(VV), this.halfWidths.delete(VV), this.labels.delete(VV))
      }
      anchorOf(VV) {
        const eV = VV.style.translate,
          xV = this.anchors.get(VV);
        if (xV && xV.translate === eV && xV.innerWidth === this.innerWidth && xV.innerHeight === this.innerHeight) return xV;
        const JV = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(eV);
        if (!JV) return null;
        const YV = {
          translate: eV,
          x: parseFloat(JV[1]) / 100 * this.innerWidth,
          y: parseFloat(JV[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(VV, YV), YV
      }
    }
    const sB = "Baf2ArrowText";

    function SB(VV, eV) {
      const xV = VV.rows.find((VV => VV.current));
      return gV(VV.tutorial) && null !== xV && void 0 !== xV && xV.item && lY(xV) && zV(xV.item).includes(eV) ? xV.item : null
    }
    const IB = new class {
      constructor(VV) {
        this.select = VV, this.picks = new Map
      }
      open(VV, eV, xV) {
        const JV = SB(eV, VV);
        null !== JV && this.Pr(VV, JV, xV)
      }
      follow(VV, eV) {
        if (pV())
          for (const [xV, {
              item: JV,
              had: YV
            }] of this.picks) {
            const UV = SB(VV, xV);
            UV !== JV && (null !== UV && eV(JV) > YV ? this.Pr(xV, UV, eV) : this.picks.delete(xV))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      Pr(VV, eV, xV) {
        this.picks.set(VV, {
          item: eV,
          had: xV(eV)
        }), this.select(VV, eV)
      }
    }(RY.n);

    function dB(VV) {
      return eV => {
        let xV = 0;
        for (const JV of VV.getInventoryItems())(null === JV || void 0 === JV ? void 0 : JV.name) === eV && (xV += null === JV.amount ? 1 : Math.max(JV.amount, 0));
        return xV
      }
    }

    function OB(VV, eV, xV, JV) {
      VV.getClientOption(eV, "canCraft") && "inventory" !== BY.b.get("openInGameMenuName") && (IB.open(xV, JV.get(), dB(VV)), WY.h.QZ("toggleMenu", `inventory|${xV}`))
    }
    let Vj = null,
      ej = !1;

    function xj(VV) {
      const eV = jU();
      VV === Vj && eV === ej || (Vj = VV, ej = eV, (0, RY.p)(function(VV, eV) {
        const xV = new Map;
        for (let JV = VV + 1; JV <= YV.length; JV++) {
          const YV = cU(JV, VV, eV);
          if (YV)
            for (const eV of BV(JV).unlocks) xV.set(eV, {
              ...YV,
              stepsAway: JV - VV
            })
        }
        return xV
      }(VV, eV)))
    }

    function Jj() {
      return VV = () => {
        null !== Vj && xj(Vj)
      }, (0, EU.g)(BU, VV);
      var VV
    }

    function Yj() {
      return (0, RY.x)(oU(Object.keys(MV), gU)), () => {
        (0, RY.x)([])
      }
    }

    function Uj(VV, eV, xV) {
      var JV, YV;
      const UV = VV.getTargetedBlock();
      if (!UV || ! function(VV, eV, xV) {
          if ("Chest" !== eV) return !1;
          const JV = VV.split("|")[0];
          if (!nx(JV) || 0 === De[JV].outputSlots.length) return !1;
          const YV = FE(VV);
          return xV[0] === YV[0] && xV[1] === YV[1] && xV[2] === YV[2]
        }(xV, null === (JV = VV.bJV(eV)) || void 0 === JV ? void 0 : JV.name, UV.normal)) return !1;
      const [yV, pV, QV] = UV.FE, nV = VV.getBlockId(yV, pV, QV);
      return 0 === nV || !0 === (null === (YV = WV.k[nV]) || void 0 === YV ? void 0 : YV.canBePlacedOver)
    }
    var yj = xV(37930);
    const pj = new Set(bx.b);
    class Qj {
      constructor(VV) {
        this.toasts = VV, this.lastAt = -1 / 0
      }
      onAltAction(VV, eV, xV) {
        const JV = VV.getTargetedBlock();
        if (!JV || function(VV) {
            const eV = VV.split("|")[0];
            return nx(eV) || null !== PJ(eV) || NV(eV) || bx.b.includes(eV)
          }(xV) && !pj.has(xV.split("|")[0])) return;
        const YV = VV.bJV(eV);
        if (!YV || !pj.has(YV.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const UV = YV.typeObj.id,
          [yV, pV, QV] = JV.FE,
          nV = VV.getBlockId(yV, pV, QV),
          wV = WV.k[nV];
        (0 === nV || null !== wV && void 0 !== wV && wV.Cr || null !== wV && void 0 !== wV && wV.canBePlacedOver) && VV.isSolidToPlayerBlockId(UV) && VV.canModifyBlockAt(yV, pV, QV) && VV.axV(yV, pV, QV, UV) && !VV.axV(yV, pV, QV, UV, eV) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, DV.Vd)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, DV.E.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class nj {
      constructor(VV) {
        this.show = VV, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(VV, eV, xV) {
        var JV;
        if (!eV) return this.started = null, void this.gatedThisHold.clear();
        if (!VV) return void(this.started = null);
        const YV = `${VV.x},${VV.y},${VV.z},${VV.hn}`;
        if (YV === this.started) return;
        this.started = YV;
        const UV = iJ(VV.y) ? JB(VV.block, VV.hn, VV.level) : null;
        if (null === UV || this.gatedThisHold.has(YV)) return;
        this.gatedThisHold.add(YV);
        const yV = VV.block.split("|")[0];
        xV - (null !== (JV = this.hintedAt.get(yV)) && void 0 !== JV ? JV : -1 / 0) < 5e3 || (this.hintedAt.set(yV, xV), this.show({
          baf2ToastText: YB(UV, VV.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var wj = xV(40);

    function Zj(VV, eV) {
      const xV = [...VV.baf2CoreBankPaused];
      for (const [YV] of VV.baf2CoreBanked) xV.push(YV);
      for (const yV of YV) {
        for (const {
            item: VV
          }
          of yV.cost) xV.push(VV);
        for (const VV of yV.newDeposits) xV.push(VV.block);
        for (const VV of yV.unlocks) xV.push(VV, GV(VV));
        yV.reward && xV.push(yV.reward);
        for (const {
            item: VV
          }
          of null !== (JV = null === (UV = yV.charge) || void 0 === UV ? void 0 : UV.items) && void 0 !== JV ? JV : []) {
          var JV, UV;
          xV.push(VV)
        }
      }
      return {
        message: VV,
        itemNames: eV([...new Set(xV)])
      }
    }
    const vj = "baf2MultiblockGuide";
    const rj = new Map;
    const kj = function(VV, eV, xV, YV) {
      let {
        localPlayerId: UV
      } = YV;
      const yV = new wp,
        pV = new Jr,
        nV = new wr,
        wV = new Qr(nV),
        ZV = (VV, eV) => {
          eV ? wV.observe(VV) : wV.unobserve(VV)
        },
        vV = new pr,
        rV = new vr(ZV),
        kV = VV => rV.covers(VV),
        bV = new Rr;
      let EV;
      const BV = new gy((VV => {
          EV.sendCommand(VV)
        })),
        jV = () => {
          BV.send("baf2questbook")
        },
        qV = VV => function(VV, eV, xV) {
          const JV = {};
          for (const YV of xV) {
            let xV = rj.get(YV);
            void 0 === xV && (xV = VV.getItemStat(eV, YV, "displayName"), rj.set(YV, xV)), JV[YV] = xV
          }
          return JV
        }(EV, UV, VV),
        tV = new CY(jV),
        FV = new fr((() => BY.b.get("loadingOverlayVisible"))),
        TV = new Pw(BV, tV, FV),
        PV = new sr,
        AV = new Qj(FV),
        XV = new nj((VV => {
          FV.show(VV, VV.baf2ToastMs)
        })),
        MV = new Yk(ZV),
        zV = new WE(MV),
        GV = new jy,
        RV = new VB,
        gV = new Sy,
        CV = new Zk({
          read: () => !1 !== wj.m.getItem(vj),
          write: VV => {
            wj.m.setItem(vj, VV)
          }
        }),
        aV = new ck(CV),
        oV = new Lk(CV),
        cV = new wb(CV, (VV => function(VV, eV) {
          const xV = Hp(eV.w, eV.h, eV.d),
            JV = new Uint8Array(xV);
          for (let YV = 0; YV < xV; YV++) {
            const xV = gk(VV, dx(eV, xJ(eV, YV)));
            JV[YV] = null === xV ? 0 : Lp(xV)
          }
          return JV
        }(EV, VV)), eb(BV)),
        hV = new Zb(CV, eb(BV)),
        lV = new Qb,
        mV = (VV, eV) => {
          let [xV, JV, YV] = VV;
          lV.answered(eV) || FV.show({
            baf2ToastText: [(0, DV.Vd)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: xV,
                h: JV,
                d: YV
              }
            }, DV.E.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      cV.onSizeNotTaken(mV), hV.onSizeNotTaken(mV);
      const KV = new bb,
        HV = new sb(CV),
        sV = new Ib,
        SV = new QE(sV),
        IV = new qE,
        OV = new RE,
        Ve = new LE(OV),
        ee = new OE(OV),
        xe = OV.lookSource(),
        Je = new kB({
          handles: VV => xe.handles(VV) || VV === iV,
          line: (VV, eV) => VV === iV ? function(VV, eV, xV) {
            var JV;
            const YV = fV(null === (JV = eV.at(xV)) || void 0 === JV ? void 0 : JV.item);
            return null === YV ? {
              key: `${ZB}lookFarmEmpty`
            } : {
              key: VV.blockIdToBlockName(VV.getBlockId(xV[0], xV[1], xV[2])).endsWith("|Running") ? `${ZB}lookFarmRunning` : `${ZB}lookFarmWaiting`,
              keys: {
                mob: LV(YV)
              }
            }
          }(EV, MV, eV) : xe.line(VV, eV),
          version: () => xe.version() + MV.version()
        }, (VV => mk(CV.all(), VV, (VV => gk(EV, VV)))), (() => tV.get().tier)),
        Ye = new gb,
        Ue = new MB,
        ye = new DB,
        pe = DB.blade(),
        Qe = new LB,
        ne = new dr,
        we = new uB,
        ve = new oB,
        re = new aB;
      let ke = -1 / 0,
        be = 0,
        Ee = -1 / 0,
        Be = -1 / 0;
      const je = () => {
          BV.send("baf2islandsclose"), Be = Date.now()
        },
        qe = [];

      function te(VV) {
        var eV, xV, JV, YV, UV, yV, QV;
        "core" === (null === (eV = pV.get()) || void 0 === eV ? void 0 : eV.kind) && "core" !== (null === VV || void 0 === VV ? void 0 : VV.kind) && BV.send("baf2coreclose"), "power" === (null === (xV = pV.get()) || void 0 === xV ? void 0 : xV.kind) && "power" !== (null === VV || void 0 === VV ? void 0 : VV.kind) && BV.send("baf2powerclose"), "water" === (null === (JV = pV.get()) || void 0 === JV ? void 0 : JV.kind) && "water" !== (null === VV || void 0 === VV ? void 0 : VV.kind) && BV.send(dV.s), "terminal" === (null === (YV = pV.get()) || void 0 === YV ? void 0 : YV.kind) && "terminal" !== (null === VV || void 0 === VV ? void 0 : VV.kind) && BV.send("baf2terminalclose"), "islands" === (null === (UV = pV.get()) || void 0 === UV ? void 0 : UV.kind) && "islands" !== (null === VV || void 0 === VV ? void 0 : VV.kind) && je();
        const nV = OV.getStatus();
        "collider" === (null === (yV = pV.get()) || void 0 === yV ? void 0 : yV.kind) && "collider" !== (null === VV || void 0 === VV ? void 0 : VV.kind) && nV && BV.send(WQ(nV, "close"));
        const wV = VV => "reactor" === VV || "battery" === VV;
        if (wV(null === (QV = pV.get()) || void 0 === QV ? void 0 : QV.kind) && !wV(null === VV || void 0 === VV ? void 0 : VV.kind)) {
          var ZV, vV, rV;
          const VV = "reactor" === (null === (ZV = pV.get()) || void 0 === ZV ? void 0 : ZV.kind) ? null === (vV = cV.get()) || void 0 === vV ? void 0 : vV.status.baf2RxAt : null === (rV = hV.get()) || void 0 === rV ? void 0 : rV.status.baf2BatAt;
          VV && BV.send(Ze(VV, "close"))
        }
        "quests" === (null === VV || void 0 === VV ? void 0 : VV.kind) && jV(), pV.set(VV), null === VV && PV.release()
      }

      function Fe() {
        (0, EY.i)(), te(null)
      }
      let Te = new Set,
        Pe = !1;
      const Ae = {
        onCreate: VV => {
          EV = VV, EV.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const eV of Me) {
            const VV = De[eV].inputSlots ? Np(yV) : Tp(eV, yV, GV, BV);
            qe.push((0, kY.f)(eV, VV))
          }
          qe.push((0, EY.z)((0, JV.createElement)(JV.Fragment, null, (0, JV.createElement)(br, {
            controller: rV
          }), (0, JV.createElement)(pk, {
            store: MV
          }), (0, JV.createElement)(EB, {
            store: Je
          }), (0, JV.createElement)(lr, {
            store: tV
          }), (0, JV.createElement)(Hr, {
            store: FV
          }), (0, JV.createElement)(Sr, {
            store: PV
          }), (0, JV.createElement)(Vk, {
            store: ne
          }), (0, JV.createElement)(kb, {
            store: KV
          }), (0, JV.createElement)(db, {
            store: sV
          })), {
            content: (0, JV.createElement)(Yr, {
              commands: BV,
              store: pV,
              power: GV,
              water: gV,
              reactor: cV,
              battery: hV,
              collider: OV,
              terminal: RV,
              quests: tV,
              tutorial: TV,
              close: EY.m,
              leave: () => {
                PV.dropHeld(), (0, EY.i)()
              },
              askIslands: () => {
                Be = -1 / 0, ke = Date.now(), be = BV.send(uV)
              },
              openSocial: () => {
                (0, EY.i)(), BY.b.set({
                  openEverythingMenuName: Zx.q.SOCIAL
                })
              },
              showCore: VV => {
                te({
                  kind: "core",
                  core: VV
                }), BV.send("baf2corereopen")
              }
            }),
            onClose: () => {
              te(null)
            }
          })), qe.push((0, bY.s)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              te({
                kind: "quests"
              }), (0, EY.r)()
            }
          })), qe.push(function(VV, eV) {
            let xV = null,
              JV = () => {};
            const YV = eV => {
              var YV;
              let {
                tutorial: UV,
                tutorialKnown: yV
              } = eV;
              (null === (YV = xV) || void 0 === YV ? void 0 : YV.tutorial) === UV && xV.tutorialKnown === yV || (xV = {
                tutorial: UV,
                tutorialKnown: yV
              }, JV = (0, bY.s)({
                id: "baf2Tutorial",
                order: -1,
                labelKey: Fw[UV],
                icon: {
                  kind: "icon",
                  name: tw[UV]
                },
                iconOnly: !0,
                disabled: !yV,
                className: "Baf2TutorialButton",
                onClick: () => {
                  VV.next()
                }
              }))
            };
            YV(eV.get());
            const UV = WY.h.subscribe(gY, YV);
            return () => {
              WY.h.unsubscribe(UV), JV()
            }
          }(TV, tV)), Pe = !1, qe.push(Jj()), qe.push(Yj()), qe.push(function() {
            const VV = WY.h.subscribe(gY, SY),
              eV = () => {
                if (sY) {
                  const VV = sY;
                  sY = null, (0, RY.t)(VV)
                }
              },
              xV = WY.h.subscribe("toggleMenu", (VV => {
                "inventory" === (null === VV || void 0 === VV ? void 0 : VV.split("|")[0]) && eV()
              })),
              JV = WY.h.subscribe("appManagerUpdated|openInGameMenuName", (VV => {
                "inventory" === VV && eV()
              }));
            return () => {
              WY.h.unsubscribe(VV), WY.h.unsubscribe(xV), WY.h.unsubscribe(JV)
            }
          }()), qe.push(function(VV) {
            const eV = dB(VV),
              xV = WY.h.subscribe(gY, (VV => {
                IB.follow(VV, eV)
              }));
            return () => {
              WY.h.unsubscribe(xV), IB.clear()
            }
          }(EV)), qe.push(function() {
            const VV = document.documentElement,
              eV = (0, Dr.b)(".InvenBodyRight", [], (() => {
                const eV = document.querySelector(".InvenBodyRight");
                eV && VV.style.setProperty("--baf2-backpack-width", `${eV.offsetWidth}px`)
              }));
            return () => {
              eV(), VV.style.removeProperty("--baf2-backpack-width")
            }
          }()), qe.push(function() {
            const VV = document.documentElement;
            return VV.classList.add(sB), () => {
              VV.classList.remove(sB)
            }
          }()), qe.push((() => {
            wV.dispose(), nV.dispose()
          })), bV.start(EV), qe.push((() => {
            bV.dispose(), Qe.dispose(), zV.dispose()
          }))
        },
        onClose: () => {
          (0, RY.t)([]), sY = null, uY = new Set, Vj = null, (0, RY.p)(new Map), rj.clear();
          for (const VV of qe) VV();
          tV.dispose(), Je.dispose(), FV.dispose(), PV.dispose(), Ye.dispose(), Ue.dispose(EV), aV.dispose(EV), oV.dispose(EV), HV.dispose(EV), SV.dispose(EV), sV.dispose(), IV.dispose(), CV.dispose(), cV.dispose(), hV.dispose(), KV.dispose(), ye.dispose(), pe.dispose(), ne.dispose(), Ve.dispose(EV), ee.dispose(EV), OV.dispose(), we.dispose(), BV.clear()
        },
        onAfterRender: (VV, eV) => {
          var xV, JV, YV;
          try {
            bV.onAfterRender(eV)
          } catch (nV) {
            console.error("Error drawing BAF2 belt items", nV)
          }
          try {
            Qe.onAfterRender(EV, UV)
          } catch (nV) {
            console.error("Error drawing BAF2 jet flames", nV)
          }
          Pe || (Pe = !0, BV.send("baf2clientready"));
          const yV = EV.getPositionView(UV);
          rV.onAfterRender(eV, yV, vV), MV.onAfterRender(eV, yV, vV, kV), wV.run(vV), Ye.onAfterRender(EV, yV), Ue.onAfterRender(EV, yV), zV.onAfterRender(EV, yV), aV.onAfterRender(EV, yV), oV.onAfterRender(EV, UV, yV), HV.onAfterRender(EV, UV, yV), SV.onAfterRender(EV, UV), IV.onAfterRender(EV, yV), tV.onPlayerY(yV[1]), Ve.onAfterRender(EV), ee.onAfterRender(EV, UV, yV);
          const QV = EV.getTargetedBlock();
          Je.onAfterRender(EV, UV, null !== (xV = null === QV || void 0 === QV ? void 0 : QV.VVV) && void 0 !== xV ? xV : 0, null !== (JV = null === QV || void 0 === QV ? void 0 : QV.position) && void 0 !== JV ? JV : null), we.onAfterRender(EV, eV), XV.onMining(function(VV, eV) {
            var xV, JV;
            const YV = VV.getMiningBlock();
            if (!YV) return null;
            const UV = (0, WV.g)(VV.getBlockId(YV[0], YV[1], YV[2])),
              yV = null !== (xV = null === (JV = VV.bJV(eV)) || void 0 === JV ? void 0 : JV.name) && void 0 !== xV ? xV : null,
              pV = VV.getItemStat(eV, UV.split("|")[0], "harvestLevel");
            return {
              block: UV,
              x: YV[0],
              y: YV[1],
              z: YV[2],
              hn: yV,
              level: pV
            }
          }(EV, UV), EV.isMining(), performance.now()), "dropMap" === (null === (YV = pV.get()) || void 0 === YV ? void 0 : YV.kind) && iJ(yV[1]) && Fe()
        },
        onPlayerChangeBlock: (VV, eV, xV, JV, YV, yV) => {
          VV === UV && function(VV, eV, xV, JV, YV, UV, yV) {
            const pV = CB(UV, yV, VV.isPlayerCrouching(eV));
            if (null === pV) return;
            if (VV.gR(xV, JV, YV, pV), !VV.getClientOption(eV, "canPickUpItems")) return;
            const QV = yx[pV.split("|")[0]];
            var nV, wV, ZV;
            void 0 !== QV && (nV = VV.getInventoryItems(), wV = QV, ZV = vk.f.maxItemStackSize, VV.getInventoryFreeSlotCount(eV) > 0 || nV.some((VV => null !== VV && VV.name === wV && null !== VV.amount && VV.amount < ZV))) && VV.playSound(eV, (0, yj.f)("pickUp"), .5, 1)
          }(EV, VV, eV, xV, JV, YV, yV)
        },
        onPlayerAltAction: (VV, eV, xV, JV, YV) => {
          var yV, pV;
          if (!EV.getClientOption(UV, "canPickUpItems")) return;
          const QV = null !== (yV = null === (pV = EV.bJV(UV)) || void 0 === pV ? void 0 : pV.name) && void 0 !== yV ? yV : null,
            nV = function(VV, eV) {
              const xV = VV.split("|")[0];
              return NV(xV) && eV !== UY && "Sky Pack" !== eV ? xV : null
            }(YV, QV);
          if (null !== nV) return void(ve.tap(nV, performance.now()) && OB(EV, UV, nV, tV));
          if (!cJ(QV)) return;
          const wV = re.isNewPress(performance.now()),
            ZV = function(VV, eV, xV) {
              return !cJ(eV) || xV ? null : sJ(VV)
            }(YV, QV, EV.isPlayerCrouching(UV));
          null !== ZV && wV && EV.gR(eV, xV, JV, ZV)
        },
        onPlayerAttemptAltAction: (VV, eV, xV, JV, YV) => {
          if (function(VV, eV, xV, JV, YV) {
              "Workbench" === JV.split("|")[0] && VV.getClientOption(xV, "canCraft") && (IB.open("Workbench", YV.get(), dB(VV)), eV.send("baf2station Workbench"))
            }(EV, BV, UV, YV, tV), Uj(EV, UV, YV)) return "preventAction";
          AV.onAltAction(EV, UV, YV)
        },
        onReceivedMessageFromServer: (VV, eV) => {
          if ("baf2MachineStatus" === VV) {
            var xV, JV, YV, nV, wV, ZV, vV, kV, jV, TV, AV, NV, XV, zV, WV, DV;
            const VV = eV,
              UV = VV.baf2MachineTaught;
            yV.set(VV.baf2MachinePos, {
              status: VV.baf2MachineStatus,
              power: null !== (xV = VV.baf2MachinePower) && void 0 !== xV ? xV : null,
              opLeftMs: null !== (JV = VV.baf2MachineOpLeftMs) && void 0 !== JV ? JV : null,
              dug: VV.baf2MachineYield ? {
                item: VV.baf2MachineYield,
                name: qV([VV.baf2MachineYield])[VV.baf2MachineYield]
              } : null,
              powerCap: null !== (YV = VV.baf2MachinePowerCap) && void 0 !== YV ? YV : null,
              powerRates: null !== (nV = VV.baf2MachinePowerRates) && void 0 !== nV ? nV : null,
              coupled: !0 === VV.baf2MachineCoupled,
              couplerLevel: null !== (wV = VV.baf2MachineCoupler) && void 0 !== wV ? wV : 1,
              taught: UV,
              taughtName: UV ? qV([UV])[UV] : null,
              tier: null !== (ZV = VV.baf2MachineTier) && void 0 !== ZV ? ZV : null,
              input: null !== (vV = VV.baf2MachineInput) && void 0 !== vV ? vV : null,
              inertCoupler: null !== (kV = VV.baf2MachineInertCoupler) && void 0 !== kV ? kV : null,
              inputShort: null !== (jV = VV.baf2MachineInputShort) && void 0 !== jV ? jV : null,
              field: null !== (TV = VV.baf2MachineField) && void 0 !== TV ? TV : null,
              noSeeds: !0 === VV.baf2MachineNoSeeds,
              fuelFed: !0 === VV.baf2MachineFuelFed,
              fuelFeeds: !0 === VV.baf2MachineFuelFeeds,
              coreFull: !0 === VV.baf2MachineCoreFull,
              waterUnpowered: !0 === VV.baf2MachineWaterUnpowered,
              powerShort: !0 === VV.baf2MachinePowerShort,
              powerWait: !0 === VV.baf2MachinePowerWait,
              reactorPowered: !0 === VV.baf2MachineReactorPowered,
              fuelLeftMs: null !== (AV = VV.baf2MachineFuelLeftMs) && void 0 !== AV ? AV : null,
              burning: null !== (NV = VV.baf2MachineBurning) && void 0 !== NV ? NV : null,
              fuelKeep: null !== (XV = VV.baf2MachineFuelKeep) && void 0 !== XV ? XV : null,
              water: null !== (zV = VV.baf2MachineWater) && void 0 !== zV ? zV : null,
              farm: null !== (WV = VV.baf2MachineFarm) && void 0 !== WV ? WV : null,
              cryo: null !== (DV = VV.baf2MachineCryo) && void 0 !== DV ? DV : null
            })
          } else if ("baf2StationOpen" === VV) {
            const VV = eV.baf2Station;
            ve.consumeServerOpen(VV, performance.now()) || OB(EV, UV, VV, tV)
          } else if ("baf2Power" === VV) {
            const VV = eV;
            GV.set(VV), VV.baf2PowerOpen && (te({
              kind: "power"
            }), (0, EY.r)())
          } else if (VV === dV.x) {
            const VV = eV;
            gV.set(VV), VV.baf2WaterOpen && (te({
              kind: "water"
            }), (0, EY.r)())
          } else if ("baf2RxPlans" === VV) {
            var iV, aV, oV;
            const VV = eV;
            CV.jF(VV);
            const xV = new Set(VV.baf2RxPlanList.map((VV => {
              let [eV, xV, JV] = VV;
              return `${eV},${xV},${JV}`
            })));
            KV.retain(xV);
            const JV = null === (iV = pV.get()) || void 0 === iV ? void 0 : iV.kind,
              YV = "reactor" === JV ? null === (aV = cV.get()) || void 0 === aV ? void 0 : aV.status.baf2RxAt : "battery" === JV ? null === (oV = hV.get()) || void 0 === oV ? void 0 : oV.status.baf2BatAt : void 0;
            YV && Te.has(YV.join(",")) && !xV.has(YV.join(",")) && Fe(), Te = xV
          } else if ("baf2RxStatus" === VV) {
            const VV = eV;
            cV.set(VV), VV.baf2RxOpen && (te({
              kind: "reactor"
            }), (0, EY.r)())
          } else if ("baf2BatStatus" === VV) {
            const VV = eV;
            hV.set(VV), VV.baf2BatOpen && (te({
              kind: "battery"
            }), (0, EY.r)())
          } else if ("baf2RxAlarm" === VV) KV.jF(eV);
          else if ("baf2Bomb" === VV) sV.jF(eV, EV.getPositionView(UV));
          else if ("baf2Fallout" === VV) IV.jF(eV);
          else if ("baf2ColBeams" === VV) OV.onBeams(eV);
          else if ("baf2ColStatus" === VV) {
            const VV = eV;
            var LV, fV;
            if (OV.onStatus(VV), VV.baf2ColOpen) OV.onOpen(null !== (LV = null === (fV = EV.bJV(UV)) || void 0 === fV ? void 0 : fV.name) && void 0 !== LV ? LV : null), te({
              kind: "collider"
            }), (0, EY.r)()
          } else if ("baf2Terminal" === VV) {
            const VV = eV;
            var mV;
            if (RV.apply(VV)) VV.baf2TermReset && (te({
              kind: "terminal"
            }), (0, EY.r)());
            else "terminal" === (null === (mV = pV.get()) || void 0 === mV ? void 0 : mV.kind) && (pV.set(null), (0, EY.i)())
          } else if ("baf2Core" === VV) {
            var HV;
            const VV = eV;
            if (QV(!0 === VV.baf2CoreNuclear), function(VV, eV) {
                return "core" === (null === VV || void 0 === VV ? void 0 : VV.kind) && eV.baf2CoreTier > VV.core.message.baf2CoreTier
              }(pV.get(), VV)) return void(0, EY.i)();
            if (VV.baf2CoreRefresh && "core" !== (null === (HV = pV.get()) || void 0 === HV ? void 0 : HV.kind)) return;
            te({
              kind: "core",
              core: Zj(VV, qV)
            }), VV.baf2CoreRefresh || (0, EY.r)()
          } else if ("baf2WrenchUndo" === VV) {
            const {
              baf2WrenchPos: VV,
              baf2WrenchBlock: xV
            } = eV;
            EV.gR(VV[0], VV[1], VV[2], xV)
          } else if ("baf2Toast" === VV) {
            const VV = eV;
            lV.heard(performance.now(), VV.baf2ToastMs), FV.show(VV)
          } else if ("baf2Area" === VV) PV.arrive(eV, null !== pV.get());
          else if ("baf2Quest" === VV) {
            const VV = eV;
            QV(!0 === VV.baf2QuestNuclear), tV.set(VV, function(VV, eV) {
              var xV, JV, YV, UV, yV;
              const pV = [];
              for (const [, , wV, , , , , , ZV, vV] of VV.baf2QuestSteps) null !== wV && pV.push(wV), pV.push(...null !== ZV && void 0 !== ZV ? ZV : [], ...null !== vV && void 0 !== vV ? vV : []);
              VV.baf2QuestReward && pV.push(VV.baf2QuestReward);
              const QV = null === (xV = VV.baf2QuestSide) || void 0 === xV ? void 0 : xV[2][2];
              QV && pV.push(QV), pV.push(...null !== (JV = null === (YV = VV.baf2QuestSide) || void 0 === YV ? void 0 : YV[2][8]) && void 0 !== JV ? JV : [], ...null !== (UV = null === (yV = VV.baf2QuestSide) || void 0 === yV ? void 0 : yV[2][9]) && void 0 !== UV ? UV : []);
              for (const [wV] of null !== (nV = VV.baf2QuestAlso) && void 0 !== nV ? nV : []) {
                var nV;
                pV.push(wV)
              }
              return eV(pV)
            }(VV, qV)), xj(VV.baf2QuestTier)
          } else if ("baf2Route" === VV) ! function(VV, eV) {
            let {
              baf2RouteCells: xV,
              baf2RouteInto: JV
            } = eV;
            0 !== xV.length && JV ? VV.setRouteChevrons({
              cells: xV.map(((VV, eV) => {
                const [YV, , UV] = function(VV, eV, xV) {
                  const JV = xV + 1 < VV.length ? VV[xV + 1] : eV;
                  return [JV[0] - VV[xV][0], 0, JV[2] - VV[xV][2]]
                }(xV, JV, eV);
                return {
                  pos: VV,
                  way: [YV, UV]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : VV.setRouteChevrons(null)
          }(EV, eV);
          else if ("baf2QuestBook" === VV) tV.setBook(eV);
          else if ("baf2Stalls" === VV) rV.set(eV.baf2StallCells);
          else if (VV === bx.i) bV.onMoves(eV);
          else if (VV === bx.f) bV.onLines(eV);
          else if ("baf2Labels" === VV) MV.jF(eV);
          else if ("baf2DropMap" === VV) te({
            kind: "dropMap",
            dropMap: eV
          }), (0, EY.r)();
          else if ("baf2Islands" === VV) {
            var SV, Ve;
            const VV = eV;
            if (BV.syncIslandEdits(VV.baf2IslandsAnswered), !VV.baf2IslandsOpen && "islands" !== (null === (SV = pV.get()) || void 0 === SV ? void 0 : SV.kind)) return;
            if (VV.baf2IslandsOpen) {
              var ee, xe;
              const eV = BY.b.get("openEverythingMenuName"),
                xV = BV.sent() >= be,
                JV = "other" !== (re = {
                  askedAtMs: ke,
                  askSent: xV,
                  reaskedAtMs: Ee,
                  nowMs: Date.now(),
                  panel: null !== (ee = null === (xe = pV.get()) || void 0 === xe ? void 0 : xe.kind) && void 0 !== ee ? ee : null,
                  inGameMenu: BY.b.get("openInGameMenuName"),
                  everythingMenu: null === eV ? null : eV === Zx.q.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== VV.baf2IslandsFocusInvite
                }).everythingMenu && (!!re.focusInvite || "islands" === re.panel && "clientGame" === re.inGameMenu || !(re.nowMs - re.reaskedAtMs < Xn) && (re.askSent && re.nowMs - re.askedAtMs < Xn ? "core" === re.panel && "clientGame" === re.inGameMenu && null === re.everythingMenu : "shop" === re.everythingMenu || null === re.inGameMenu));
              if (xV && (ke = -1 / 0), Ee = -1 / 0, !JV) return void je()
            }
            const xV = (Ye = VV.baf2IslandsOpen, Ue = "islands" === (null === (Ve = pV.get()) || void 0 === Ve ? void 0 : Ve.kind), we = Be, Ze = Date.now(), Ye && !Ue && Ze - we < Xn);
            te({
              kind: "islands",
              islands: VV,
              arrivedAtMs: Date.now(),
              backToCore: Mn(pV.get())
            }), xV && (Be = -1 / 0, Ee = Date.now(), BV.send(uV)), VV.baf2IslandsOpen && ("clientGame" !== BY.b.get("openInGameMenuName") && (0, jY.h)(), (0, EY.r)())
          } else if ("baf2CoopTransfer" === VV) {
            var Je;
            const VV = eV;
            VV.baf2TransferOn ? (te({
              kind: "transfer",
              transfer: VV,
              arrivedAtMs: Date.now()
            }), (0, EY.r)()) : "transfer" === (null === (Je = pV.get()) || void 0 === Je ? void 0 : Je.kind) && (0, EY.i)()
          } else "baf2IslandLeft" === VV ? (PV.dropHeld(), null !== pV.get() && Fe(), "inventory" === BY.b.get("openInGameMenuName") && (0, jY.h)()) : "baf2Arc" === VV ? ye.jF(EV, eV) : "baf2Blade" === VV ? pe.onBlade(EV, eV) : "baf2JetFlame" === VV ? Qe.jF(EV, eV) : "baf2GearPower" === VV && ne.jF(eV);
          var Ye, Ue, we, Ze, re
        }
      };
      return Ae
    }
  },
  39645: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => yV,
      e: () => pV
    });
    var JV = xV(375),
      YV = xV(35319),
      UV = xV(3719);

    function yV(VV) {
      const eV = (0, UV.d)(VV);
      return (0, JV.Sb)(VV, void 0 === eV ? void 0 : (0, YV.displayNameOf)(eV))
    }

    function pV(VV, eV) {
      return VV(yV(eV))
    }
  },
  39665: (VV, eV, xV) => {
    function JV(VV, eV, xV) {
      const JV = new Set,
        YV = new ResizeObserver(xV),
        UV = () => {
          const eV = new Set(document.querySelectorAll(VV));
          let UV = !1;
          for (const VV of JV) eV.has(VV) || (YV.unobserve(VV), JV.delete(VV), UV = !0);
          for (const VV of eV) JV.has(VV) || (YV.observe(VV), yV.observe(VV, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), JV.add(VV));
          UV && xV()
        },
        yV = new MutationObserver((eV => {
          eV.some((VV => "attributes" === VV.type)) && xV(), eV.some((eV => function(VV, eV, xV) {
            if ("childList" !== VV.type) return !1;
            for (const JV of VV.addedNodes)
              if (JV instanceof Element && (JV.matches(eV) || JV.querySelector(eV))) return !0;
            for (const JV of VV.removedNodes)
              if (JV instanceof Element)
                for (const VV of xV)
                  if (JV.contains(VV)) return !0;
            return !1
          }(eV, VV, JV))) && UV()
        }));
      yV.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const pV of eV) YV.observe(pV);
      return window.addEventListener("resize", xV), UV(), xV(), () => {
        YV.disconnect(), yV.disconnect(), window.removeEventListener("resize", xV)
      }
    }
    xV.d(eV, {
      b: () => JV
    })
  },
  39651: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => pV
    });
    var JV = xV(39648);
    const YV = 5,
      UV = [0, 0, 0],
      yV = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function pV(VV, eV, xV, pV, QV, nV) {
      let [wV, ZV, vV] = pV;
      const rV = (wV + .5 - xV[0]) ** 2 + (ZV - xV[1]) ** 2 + (vV + .5 - xV[2]) ** 2;
      let kV = null;
      rV <= nV ** 2 && (UV[0] = wV + .5, UV[1] = ZV + QV, UV[2] = vV + .5, kV = eV.projectWorldPosToViewport(UV));
      const bV = null !== kV && kV.x > -YV && kV.x < 100 + YV && kV.y > -YV && kV.y < 100 + YV;
      return (0, JV.f)(VV, !bV), bV ? (yV.x = kV.x, yV.y = kV.y, yV.distSq = rV, yV) : null
    }
  },
  39648: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => yV,
      f: () => UV
    });
    const JV = new WeakMap;

    function YV(VV) {
      let eV = JV.get(VV);
      return eV || (eV = {
        hidden: VV.hidden,
        x: NaN,
        y: NaN
      }, JV.set(VV, eV)), eV
    }

    function UV(VV, eV) {
      const xV = YV(VV);
      xV.hidden !== eV && (xV.hidden = eV, VV.hidden = eV)
    }

    function yV(VV, eV, xV) {
      const JV = YV(VV);
      JV.x === eV && JV.y === xV || (JV.x = eV, JV.y = xV, VV.style.translate = `${eV}vw ${xV}vh`)
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);