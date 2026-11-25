export const id = 267;
export const ids = [267];
export const modules = {
  39505: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => aM
    });
    var OM = iM(39507);
    const SM = [0, 0, 0];
    class jM {
      constructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SM;
        this.pool = MM, this.origin = rM, this.count = 0, this.free = []
      }
      take() {
        var MM;
        const rM = null !== (MM = this.free.pop()) && void 0 !== MM ? MM : this.count++;
        return rM >= this.pool.vL && this.pool.grow(Math.max(2 * this.pool.vL, rM + 1)), this.hide(rM), rM
      }
      release(MM) {
        this.hide(MM), this.free.push(MM)
      }
      write(MM, rM, iM, SM) {
        const {
          records: jM
        } = this.pool, {
          origin: aM
        } = this, PM = MM * OM.d;
        jM[PM] = rM - aM[0], jM[PM + 1] = iM - aM[1], jM[PM + 2] = SM - aM[2], jM[PM + OM.h] = 0, this.pool.markDirty(MM)
      }
      hide(MM) {
        this.pool.records[MM * OM.d + OM.h] = 1, this.pool.markDirty(MM)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class aM {
      constructor(MM, rM, iM) {
        this.api = MM, this.model = rM, this.initialCapacity = iM, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(MM) {
        let rM = this.kinds.get(MM);
        if (void 0 === rM) {
          const iM = this.api.createInstancePool({
            ...this.model,
            item: MM
          }, this.initialCapacity);
          null === iM || void 0 === iM || iM.setOrigin(this.origin[0], this.origin[1], this.origin[2]), rM = iM && new jM(iM, this.origin), this.kinds.set(MM, rM)
        }
        return rM
      }
      follow(MM) {
        const {
          origin: rM
        } = this;
        if (Math.abs(MM[0] - rM[0]) <= 512 && Math.abs(MM[1] - rM[1]) <= 512 && Math.abs(MM[2] - rM[2]) <= 512) return !1;
        rM[0] = Math.floor(MM[0]), rM[1] = Math.floor(MM[1]), rM[2] = Math.floor(MM[2]);
        for (const iM of this.kinds.values()) null === iM || void 0 === iM || iM.pool.setOrigin(rM[0], rM[1], rM[2]);
        return !0
      }
      commit() {
        for (const MM of this.kinds.values()) null === MM || void 0 === MM || MM.commit()
      }
      dispose() {
        for (const MM of this.kinds.values()) null === MM || void 0 === MM || MM.dispose();
        this.kinds.clear()
      }
    }
  },
  39511: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => aM,
      d: () => PM,
      h: () => nM
    });
    const OM = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      SM = [0, 1, 2, 0, 2, 3],
      jM = [4, 5];

    function aM(MM, rM, iM, OM, SM) {
      for (let aM = 0; aM < 6; aM++) jM.includes(aM) === SM && QM(MM, rM, iM, OM, aM)
    }

    function PM(MM, rM, iM, OM) {
      for (let SM = 0; SM < 6; SM++) QM(MM, rM, iM, OM, SM)
    }

    function nM(MM, rM, iM, jM, aM) {
      for (let PM = 0; PM < 6; PM++)
        for (const nM of [0, 1]) {
          const [QM, zM, LM] = [nM + 2, nM + 1, (nM + 3) % 4], mM = MM.length / 3;
          for (const [rM, SM] of [
              [nM, zM],
              [QM, zM],
              [QM, LM],
              [nM, LM]
            ])
            for (let nM = 0; nM < 3; nM++) {
              const QM = OM[3 * (4 * PM + rM) + nM],
                zM = OM[3 * (4 * PM + SM) + nM];
              MM.push((QM + (zM - QM) * aM) * jM / 2 + iM[nM])
            }
          for (const MM of SM) rM.push(mM + MM)
        }
    }

    function QM(MM, rM, iM, jM, aM) {
      let [PM, nM, QM] = iM, [zM, LM, mM] = jM;
      const HM = MM.length / 3;
      for (let SM = 4 * aM; SM < 4 * aM + 4; SM++) MM.push(OM[3 * SM] * zM / 2 + PM, OM[3 * SM + 1] * LM / 2 + nM, OM[3 * SM + 2] * mM / 2 + QM);
      for (const OM of SM) rM.push(HM + OM)
    }
  },
  39483: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      default: () => dl
    });
    var OM = iM(44);
    const SM = [{
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
      jM = 10;
    let aM = !0;

    function PM() {
      return aM
    }

    function nM(MM) {
      aM = MM
    }
    const QM = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function zM() {
      return aM ? SM.length : jM
    }

    function LM(MM) {
      var rM, iM;
      return null !== (rM = null === (iM = SM[MM - 1]) || void 0 === iM ? void 0 : iM.reactorTier) && void 0 !== rM ? rM : 0
    }

    function mM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : LM(MM) > 0;
      return iM && !aM ? "hidden" : MM <= rM ? "open" : iM ? rM < 5 ? "hidden" : rM < jM ? "teaser" : "locked" : "locked"
    }

    function HM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: OM,
        n: SM
      } = dM(MM);
      return {
        key: rM[OM],
        params: {
          [OM]: iM ? String(SM) : SM
        }
      }
    }
    const hM = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function JM(MM, rM) {
      return LM(MM) > 0 && rM < jM
    }

    function dM(MM) {
      const rM = LM(MM);
      if (rM > 0) return {
        kind: "atomic",
        n: rM,
        short: `A${rM}`
      };
      const iM = function(MM) {
        return MM >= 6 && MM <= 10 ? MM - 6 + 1 : 0
      }(MM);
      return iM > 0 ? {
        kind: "stage",
        n: iM,
        short: `S${iM}`
      } : {
        kind: "tier",
        n: MM,
        short: String(MM)
      }
    }

    function yM(MM) {
      return SM[Math.max(1, Math.min(MM, SM.length)) - 1]
    }

    function lM(MM, rM) {
      return MM < rM ? function(MM) {
        var rM;
        return null !== (rM = SM[MM]) && void 0 !== rM ? rM : null
      }(MM) : null
    }
    const EM = "baf2coresubmit",
      UM = "baf2corebankpause",
      GM = "baf2coredeposit",
      CM = "baf2corechargepause";

    function eM(MM) {
      var rM;
      return null !== (rM = MM.baf2CoreOpen) && void 0 !== rM ? rM : jM
    }
    const bM = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function wM(MM) {
      return bM.includes(MM)
    }
    const tM = (MM, rM) => rM.map((rM => [rM, [MM]])),
      gM = Object.fromEntries([...tM("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...tM("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...tM("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...tM("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...tM("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...tM("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...tM("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...tM("Parts Bench", ["Focus Lens"]), ...tM("Machine Bench", ["Laser", "Collider"]), ...tM("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb", "Nova Bomb"]), ...tM("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...tM("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...tM("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...tM("Tool Bench", ["Mob Cage"]), ...tM("Tool Bench", ["Pocket Terminal"]), ...tM("Tool Bench", ["Comet Beacon"]), ...tM("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function uM(MM) {
      var rM;
      return null !== (rM = gM[MM]) && void 0 !== rM ? rM : ["Workbench"]
    }

    function RM(MM) {
      return uM(MM)[0]
    }
    SM.slice(1).map(((MM, rM) => `Core Tier ${rM+2}`));
    var pM = iM(9816);
    const WM = ["on", "hud", "off"];

    function sM(MM) {
      return "on" === MM
    }
    var DM = iM(332);
    const kM = "Mob Farm",
      ZM = {
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
      oM = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      fM = {
        1: 20,
        2: 60,
        3: 120
      },
      YM = "baf2farmvoid",
      NM = "Caged ",
      AM = " Spawner Block";

    function xM(MM) {
      return `lifeform:${(0,DM.me)(MM)}`
    }

    function vM(MM) {
      if (!MM) return null;
      if (MM.startsWith(NM)) {
        const rM = MM.slice(6);
        return oM.includes(rM) ? rM : null
      }
      if (MM.endsWith(AM)) {
        const rM = MM.slice(0, -14);
        return void 0 !== ZM[rM] ? rM : null
      }
      return null
    }

    function FM(MM) {
      return !0 === MM.mobFarm
    }

    function BM(MM, rM) {
      return fM[ZM[rM]] * MM.opMs / 1e3
    }
    const XM = new Map;
    const IM = "baf2islands",
      KM = "baf2islandnew";

    function qM(MM) {
      const rM = SM.findIndex((rM => rM.unlocks.includes(MM)));
      return rM < 0 ? 1 : rM + 1
    }

    function TM(MM) {
      return Math.floor(MM).toLocaleString("en-US")
    }
    var VM = iM(39426);
    const cM = "baf2terminaltake",
      Mr = "baf2terminalput",
      rr = ["one", "stack", "fill"];

    function ir(MM, rM, iM) {
      return `${cM} ${MM} ${rM} ${iM}`
    }

    function Or(MM, rM, iM) {
      return `${Mr} ${MM} ${rM} ${iM}`
    }

    function Sr(MM) {
      return `${Mr} ${MM}`
    }
    const jr = [
      [`${cM} `, "take"],
      [`${Mr} `, "put"]
    ];

    function ar(MM) {
      const rM = jr.find((rM => {
        let [iM] = rM;
        return MM.startsWith(iM)
      }));
      if (!rM) return null;
      const [iM, OM] = rM, [SM, jM, ...aM] = MM.slice(iM.length).trim().split(" "), PM = Number(SM);
      if (!Number.isSafeInteger(PM) || PM <= 0) return null;
      if ("put" === OM && void 0 === jM) return {
        kind: "putAll",
        seq: PM
      };
      const nM = function(MM) {
        if (rr.includes(MM)) return MM;
        const rM = Number(MM);
        return /^\d+$/.test(MM) && Number.isSafeInteger(rM) && rM > 0 ? rM : null
      }(null !== jM && void 0 !== jM ? jM : "");
      return null === nM || 0 === aM.length ? null : {
        kind: OM,
        seq: PM,
        mode: nM,
        item: aM.join(" ")
      }
    }

    function Pr(MM, rM) {
      const iM = "number" === typeof MM ? MM : "one" === MM ? 1 : "stack" === MM ? 99 : rM;
      return Math.min(rM, iM)
    }

    function nr(MM, rM) {
      const iM = MM => "number" === typeof MM ? MM : "one" === MM ? 1 : 99;
      return "fill" === MM || "fill" === rM ? "fill" : iM(MM) + iM(rM)
    }

    function Qr(MM, rM) {
      const iM = ar(MM),
        OM = ar(rM),
        SM = iM && OM ? function(MM, rM) {
          return "take" === MM.kind || "take" === rM.kind ? "take" === MM.kind && "take" === rM.kind && MM.item === rM.item ? {
            ...rM,
            mode: nr(MM.mode, rM.mode)
          } : null : "putAll" === MM.kind || "putAll" === rM.kind ? {
            kind: "putAll",
            seq: rM.seq
          } : MM.item === rM.item ? {
            ...rM,
            mode: nr(MM.mode, rM.mode)
          } : null
        }(iM, OM) : null;
      return SM ? "putAll" === (jM = SM).kind ? Sr(jM.seq) : "put" === jM.kind ? Or(jM.seq, jM.mode, jM.item) : ir(jM.seq, jM.mode, jM.item) : null;
      var jM
    }
    const zr = "baf2rx";

    function Lr(MM, rM) {
      for (var iM = arguments.length, OM = new Array(iM > 2 ? iM - 2 : 0), SM = 2; SM < iM; SM++) OM[SM - 2] = arguments[SM];
      return [zr, MM[0], MM[1], MM[2], rM, ...OM].join(" ")
    }
    const mr = 2,
      Hr = 4,
      hr = 8,
      Jr = 16,
      dr = 32,
      yr = 64,
      lr = 128,
      Er = 256,
      Ur = 512,
      Gr = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      Cr = [{
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
    const er = "Biomass",
      br = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function wr(MM) {
      return {
        input: er,
        inputAmount: 1,
        output: MM,
        outputAmount: 1
      }
    }
    const tr = "baf2synth",
      gr = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      ur = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      Rr = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      pr = function(MM, rM) {
        return {
          input: MM,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: rM,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      Wr = function(MM, rM) {
        return {
          ...pr(MM, rM, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      sr = ur.map((MM => Wr(MM, "Biomass", 2))),
      Dr = {
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
          recipes: [pr("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), pr("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), pr("Raw Gold", "Gold Grit", 2), pr("Messy Stone", "Sand"), pr("Gravel", "Sand"), pr("Raw Voltite", "Voltite Dust", 2), pr("Moonstone", "Moonstone Dust", 4), pr("Wheat Seeds", "Fertiliser"), pr("Raw Uranium", "Uranium Grit", 2), Wr("Mossy Messy Stone", "Sand"), ...sr],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [pr("Iron Grit", "Iron Bar"), pr("Copper Grit", "Copper Bar"), pr("Gold Grit", "Gold Bar"), pr("Raw Iron", "Iron Bar"), pr("Raw Copper", "Copper Bar"), pr("Raw Gold", "Gold Bar"), pr("Sand", "Glass"), pr("Messy Stone", "Stone"), ...DM.Rc.map((MM => pr(MM, "Charcoal", 1, 4))), pr("Wheat", "Bread", 1, 2), ...ur.map(((MM, rM) => Wr(MM, Rr[rM])))],
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
          recipes: [pr("Iron Bar", "Iron Plate"), pr("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [pr("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [pr("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [pr("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), pr("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), pr("Raw Gold", "Gold Grit", 3), pr("Raw Voltite", "Voltite Dust", 3), pr("Messy Stone", "Sand", 2), pr("Gravel", "Sand", 2), pr("Moonstone", "Moonstone Dust", 6), pr("Raw Uranium", "Uranium Grit", 3), Wr("Mossy Messy Stone", "Sand", 2), ...sr],
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
          table: Gr
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [pr("Coal", "Diamond", 1, 24), pr("Voltite Dust", "Moonstone", 1, 12)],
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
        ...VM.k
      },
      kr = {
        Crusher: [pr("Spent Pellet", "Glow Dust"), pr("Wheat Seeds", "Biomass"), pr("Wheat", "Biomass"), pr("Dead Bush", "Biomass"), pr("Dusk Moss", "Biomass"), pr("Rotten Flesh", "Biomass"), pr("Bone", "Biomass", 2)],
        "Shatter Mill": [pr("Spent Pellet", "Glow Dust"), pr("Wheat Seeds", "Biomass"), pr("Wheat", "Biomass"), pr("Dead Bush", "Biomass"), pr("Dusk Moss", "Biomass"), pr("Rotten Flesh", "Biomass"), pr("Bone", "Biomass", 2), ...DM.Rc.map((MM => pr(MM, "Biomass")))],
        Smelter: [pr("Biomass", "Fertiliser", 2)],
        Press: [pr("Coal", "Graphite", 1, 4)]
      },
      Zr = "Power Coupler",
      or = "Advanced Coupler",
      fr = "Nova Coupler",
      Yr = [{
        item: Zr,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: or,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: fr,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const Nr = new Map;

    function Ar(MM) {
      var rM, iM;
      return null !== (rM = null !== (iM = MM.fuelSlot) && void 0 !== iM ? iM : MM.couplerSlot) && void 0 !== rM ? rM : null
    }

    function xr(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!MM.couplable) throw new Error(`${MM.kind} takes no Power Coupler`);
      let iM = Nr.get(MM);
      iM || (iM = [], Nr.set(MM, iM));
      let OM = iM[rM];
      if (!OM) {
        var SM;
        const {
          divisor: jM,
          powerPerS: aM
        } = Yr[rM - 1], PM = MM.opMs / jM, nM = void 0 !== MM.fluidMade || void 0 !== MM.cryoMade ? MM.powerPerOp : aM * PM / 1e3;
        OM = {
          ...MM,
          fuelSlot: null,
          couplerSlot: null !== (SM = Ar(MM)) && void 0 !== SM ? SM : void 0,
          opMs: PM,
          powerPerOp: nM,
          coupled: !0
        }, rM > 1 && (OM = {
          ...OM,
          couplerLevel: rM
        }), iM[rM] = OM
      }
      return OM
    }
    const vr = new Map;
    const Fr = new Map;

    function Br(MM, rM) {
      if (null === rM || (iM = rM, !br.includes(iM))) return MM;
      var iM;
      let OM = Fr.get(rM);
      return OM || (OM = {
        ...MM,
        recipes: [wr(rM)]
      }, Fr.set(rM, OM)), OM
    }

    function Xr(MM) {
      return !0 === MM.synth
    }
    const Ir = (MM, rM, iM, OM) => ({
        output: MM,
        outputAmount: rM,
        tier: iM,
        inputs: OM.map((MM => {
          let [rM, iM] = MM;
          return {
            item: rM,
            amount: iM
          }
        }))
      }),
      Kr = Object.fromEntries([Ir("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), Ir("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), Ir("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), Ir("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), Ir("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), Ir("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), Ir("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), Ir("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), Ir("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), Ir("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), Ir("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), Ir("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), Ir("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), Ir("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), Ir("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), Ir("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), Ir("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), Ir("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), Ir("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), Ir("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), Ir("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), Ir("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), Ir("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), Ir("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), Ir("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), Ir("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), Ir("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), Ir("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), Ir("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), Ir("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((MM => [MM.output, MM]))),
      qr = new Map;

    function Tr(MM, rM) {
      let iM = Dr[MM];
      if (rM.atomic && (iM = function(MM) {
          const rM = kr[MM.kind];
          if (!rM) return MM;
          let iM = vr.get(MM.kind);
          if (!iM) {
            const OM = new Set(rM.map((MM => MM.input))),
              SM = MM.recipes.filter((MM => !OM.has(MM.input)));
            iM = {
              ...MM,
              recipes: [...SM, ...rM]
            }, vr.set(MM.kind, iM)
          }
          return iM
        }(iM)), iM.synth) return Br(iM, rM.taught);
      if (rM.coupled && iM.couplable) return xr(iM, rM.level);
      const OM = iM.inputSlots && null !== rM.taught ? Kr[rM.taught] : void 0;
      if (!OM) return iM;
      const SM = `${MM}|${OM.output}`;
      let jM = qr.get(SM);
      return jM || (jM = {
        ...iM,
        bench: OM
      }, qr.set(SM, jM)), jM
    }
    const Vr = ["Diamond", "Moonstone"];

    function cr(MM) {
      return new Set(MM.flatMap((MM => MM.bonus ? [MM.output, MM.bonus.item] : [MM.output])).filter((MM => !Vr.includes(MM))))
    }
    const Mi = Object.values(Dr).flatMap((MM => MM.recipes));
    cr(Mi.filter((MM => !0 !== MM.nuclear))), cr([...Mi.filter((MM => !0 === MM.nuclear)), ...Object.values(kr).flat()]);

    function ri(MM) {
      return null === MM.inputSlot && void 0 === MM.inputSlots && void 0 === MM.powerMade && void 0 === MM.fluidMade && !MM.treeCutter && void 0 === MM.table
    }

    function ii(MM) {
      return !0 === MM.treeCutter
    }
    const Oi = ["Voltite Cell"];

    function Si(MM) {
      var rM, iM;
      return null !== (rM = null === (iM = MM.fuels) || void 0 === iM ? void 0 : iM.some((MM => Oi.includes(MM)))) && void 0 !== rM && rM
    }
    const ji = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(DM.Rc.map((MM => [MM, 8e3]))),
        ...Object.fromEntries(DM.vd.map((MM => [MM, 2e3]))),
        "Voltite Cell": 12e4
      },
      ai = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      Pi = {
        "Uranium Deposit": 4e3
      };

    function ni(MM) {
      var rM;
      return null !== (rM = Object.keys(ai).find((rM => ai[rM] === MM))) && void 0 !== rM ? rM : null
    }

    function Qi(MM) {
      return gr.includes(MM)
    }

    function zi(MM) {
      return !0 !== MM.nuclear || PM()
    }
    var Li = iM(313);
    var mi = iM(9895),
      Hi = iM(9832),
      Ji = iM(9904),
      di = iM(9890);
    const yi = "Reactor Controller",
      li = "Reactor Port",
      Ei = "Battery Cell",
      Ui = ["fuel", "water", "waste"],
      Gi = {
        fuel: li,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      Ci = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      ei = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      bi = "Reactor Frame",
      wi = "Reactor Glass",
      ti = {
        edge: [bi],
        cap: [wi, li],
        wall: [wi, li],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [yi]
      },
      gi = {
        edge: [Ei],
        cap: [Ei],
        wall: [Ei],
        inside: [Ei],
        ctrl: [Ei]
      },
      ui = ["edge", "cap", "wall", "inside"],
      Ri = ["Reactor Slag"];

    function Wi(MM) {
      return Ri.includes(si(MM))
    }

    function si(MM) {
      const rM = MM.indexOf("|");
      return rM < 0 ? MM : MM.slice(0, rM)
    }

    function Di(MM) {
      return si(MM) === yi ? "reactor" : null
    }

    function ki(MM) {
      return si(MM) !== li ? null : MM.endsWith("|Water") ? "water" : MM.endsWith("|Waste") ? "waste" : "fuel"
    }

    function Zi(MM) {
      const rM = ki(MM);
      return null === rM ? null : Yi(Gi[Ui[(Ui.indexOf(rM) + 1) % Ui.length]], function(MM) {
        return MM.includes(oi)
      }(MM))
    }
    const oi = "|meta|rot1|Formed",
      fi = new Set([bi, wi, li]);

    function Yi(MM, rM) {
      var iM;
      const OM = si(MM);
      if (!fi.has(OM)) return MM;
      if (OM !== li) return rM ? OM + oi : OM;
      const SM = null !== (iM = ki(MM)) && void 0 !== iM ? iM : "fuel";
      return rM ? "fuel" === SM ? OM + oi : `${OM}${oi}|${"water"===SM?"Water":"Waste"}` : Gi[SM]
    }

    function Ni(MM, rM) {
      const iM = jO(MM, rM);
      if ("Air" === iM) return !1;
      const OM = "reactor" === MM ? ti : gi;
      return ui.some((MM => OM[MM].includes(iM))) || "reactor" === MM && Ri.includes(iM)
    }

    function Ai(MM) {
      return ei[MM]
    }

    function xi(MM) {
      var rM;
      return null !== (rM = Ci[MM]) && void 0 !== rM ? rM : Ci[1]
    }

    function vi(MM) {
      const [rM, , iM] = xi(MM);
      return [iM, 0, -rM]
    }

    function Fi(MM, rM, iM, OM, SM, jM) {
      return {
        ctrl: [MM[0], MM[1], MM[2]],
        rot: Ci[rM] ? rM : 1,
        w: iM,
        h: OM,
        d: SM,
        cu: jM[0],
        cv: jM[1]
      }
    }

    function Bi(MM, rM) {
      return "reactor" === MM ? [Math.floor((rM - 1) / 2), 0] : [0, 0]
    }

    function Xi(MM, rM, iM, OM, SM) {
      let jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : MM.rot;
      if (iM === MM.w && OM === MM.h && SM === MM.d && jM === MM.rot) return MM;
      const [aM] = Bi(rM, MM.w);
      if (MM.cu === aM && MM.cv <= 1) return Fi(MM.ctrl, jM, iM, OM, SM, Bi(rM, iM));
      const PM = (MM, rM) => Math.max(1, Math.min(rM, MM));
      return Fi(MM.ctrl, jM, iM, OM, SM, [PM(MM.cu, iM - 2), 0 === MM.cv ? 0 : PM(MM.cv, OM - 2)])
    }
    const Ii = 11,
      Ki = 2 * Ii + 1;
    new Uint8Array(Ki * Ki * Ki);

    function qi(MM) {
      return MM.w * MM.h * MM.d
    }

    function Ti(MM) {
      const rM = vi(MM.rot);
      return [MM.ctrl[0] - rM[0] * MM.cu, MM.ctrl[1] - MM.cv, MM.ctrl[2] - rM[2] * MM.cu]
    }

    function Vi(MM) {
      return MM.cv * MM.d * MM.w + MM.cu
    }

    function ci(MM, rM) {
      const iM = rM % MM.w,
        OM = Math.floor(rM / MM.w) % MM.d;
      return [iM, Math.floor(rM / (MM.w * MM.d)), OM]
    }

    function MO(MM, rM) {
      const [iM, OM, SM] = ci(MM, rM), jM = Ti(MM), aM = xi(MM.rot), PM = vi(MM.rot);
      return [jM[0] + PM[0] * iM - aM[0] * SM, jM[1] + OM, jM[2] + PM[2] * iM - aM[2] * SM]
    }

    function rO(MM, rM) {
      const iM = Ti(MM),
        OM = xi(MM.rot),
        SM = vi(MM.rot),
        jM = rM[0] - iM[0],
        aM = rM[2] - iM[2],
        PM = jM * SM[0] + aM * SM[2],
        nM = -(jM * OM[0] + aM * OM[2]),
        QM = rM[1] - iM[1];
      return PM < 0 || PM >= MM.w || QM < 0 || QM >= MM.h || nM < 0 || nM >= MM.d ? -1 : (QM * MM.d + nM) * MM.w + PM
    }

    function iO(MM, rM) {
      if (rM === Vi(MM)) return "ctrl";
      const [iM, OM, SM] = ci(MM, rM), jM = 0 === OM || OM === MM.h - 1, aM = Number(0 === iM || iM === MM.w - 1) + Number(jM) + Number(0 === SM || SM === MM.d - 1);
      return aM >= 2 ? "edge" : 1 === aM ? jM ? "cap" : "wall" : "inside"
    }

    function OO(MM, rM) {
      const [iM, OM, SM] = ci(MM, rM);
      return 0 === iM || iM === MM.w - 1 || 0 === OM || OM === MM.h - 1 || 0 === SM || SM === MM.d - 1 ? -1 : ((OM - 1) * (MM.d - 2) + (SM - 1)) * (MM.w - 2) + (iM - 1)
    }

    function SO(MM, rM) {
      const iM = MM.w - 2,
        OM = MM.d - 2,
        SM = rM % iM + 1,
        jM = Math.floor(rM / iM) % OM + 1;
      return ((Math.floor(rM / (iM * OM)) + 1) * MM.d + jM) * MM.w + SM
    }

    function jO(MM, rM) {
      const iM = si(rM);
      return "reactor" === MM && iM === yi ? bi : iM
    }

    function aO(MM, rM, iM) {
      const OM = "ctrl" === rM ? si(iM) : jO(MM, iM);
      return ("reactor" === MM ? ti : gi)[rM].includes(OM) ? "ok" : "Air" === OM ? "missing" : Ni(MM, iM) ? "wrong" : "blocked"
    }

    function PO(MM, rM) {
      return "battery" === MM ? Ei : "inside" === rM ? null : function(MM, rM) {
        if ("inside" === rM || "ctrl" === rM || "battery" === MM) return null;
        return "edge" === rM ? bi : wi
      }(MM, rM)
    }
    const nO = {
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
      QO = "Collider",
      zO = "Laser",
      LO = "Star Alloy",
      mO = "Glow Dust",
      HO = [QO, "_Collider Focus"];

    function hO(MM) {
      return HO.indexOf(si(MM))
    }

    function JO(MM) {
      return si(MM) === zO
    }

    function dO(MM) {
      return [
        [MM[0], MM[1], MM[2]],
        [MM[0], MM[1] + 1, MM[2]]
      ]
    }
    const yO = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function lO(MM, rM, iM) {
      const OM = yO[rM];
      return [MM[0] + OM[0] * iM, MM[1], MM[2] + OM[2] * iM]
    }

    function EO(MM, rM) {
      if (rM[1] !== MM[1]) return null;
      const iM = rM[0] - MM[0],
        OM = rM[2] - MM[2];
      if (0 !== iM === (0 !== OM)) return null;
      const SM = Math.abs(iM + OM);
      if (SM > nO.LASER_D) return null;
      return {
        dir: OM < 0 ? 0 : iM > 0 ? 1 : OM > 0 ? 2 : 3,
        RQ: SM
      }
    }

    function UO(MM, rM, iM) {
      const OM = rM => Math.abs(MM[0] - rM[0]) <= 1 && Math.abs(MM[1] - rM[1]) <= 1;
      return OM(rM) || OM(iM)
    }

    function GO(MM, rM) {
      return function(MM, rM, iM, OM) {
        return [0, 1, 2, 3].map((SM => {
          for (let jM = 1; jM <= nO.LASER_D; jM++) {
            const aM = lO(MM, SM, jM);
            if (UO([aM[0], aM[2]], rM, iM) || !OM(aM)) return !1
          }
          return !0
        }))
      }(dO(MM)[1], rM.spawnXZ, rM.coreXZ, (MM => MM[1] >= mi.q && MM[1] < mi.q + mi.t && MM[0] >= rM.minXZ[0] && MM[0] <= rM.maxXZ[0] && MM[2] >= rM.minXZ[1] && MM[2] <= rM.maxXZ[1]))
    }
    const CO = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function eO(MM) {
      return Math.max(48 + 16 * MM, yM(MM).machineAllowance)
    }
    const bO = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function wO(MM) {
      const rM = MM.split("|")[0];
      return bO.includes(rM) ? "Solar Panel" : rM === Ji.e ? "Fluid Pipe" : hO(rM) >= 0 ? "Collider" : (iM = rM, CO.includes(iM) ? rM : null);
      var iM
    }
    const tO = "buildAFactory2Game:solarPanelDescription";
    const gO = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function uO(MM, rM) {
      var iM;
      return null !== (iM = gO.find((iM => {
        var OM;
        return (null !== (OM = MM.level(iM)) && void 0 !== OM ? OM : 0) >= rM
      }))) && void 0 !== iM ? iM : null
    }
    const RO = "buildAFactory2Game:";
    let pO = null;
    const WO = {
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
      sO = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      DO = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      kO = {
        "Loot Chest": `${RO}lookRuinChestName`
      };

    function ZO(MM, rM) {
      var iM, OM, SM;
      let jM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rM;
      if ("Solar Panel" === wO(rM)) return {
        name: (0, DM.se)(MM.displayName("Solar Panel")),
        detail: tO,
        detailItem: null
      };
      const aM = rM.endsWith(" Ore"),
        nM = (pO ??= new Set([...Object.keys((0, Hi.j)()), ...Object.keys((0, Ji.y)())].map((MM => MM.split("|")[0]))), pO).has(rM),
        QM = aM || nM ? null : function(MM) {
          var rM;
          return MM.endsWith(" Log") && !MM.startsWith("Barkless ") ? "lookLog" : MM.endsWith(" Sapling") ? "lookSapling" : MM.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (rM = WO[MM]) && void 0 !== rM ? rM : null
        }(rM);
      if (!MM.isBlock(rM) || !aM && !nM && null === QM) return null;
      const zM = null !== (iM = kO[rM]) && void 0 !== iM ? iM : (0, DM.Qb)(rM, null !== (OM = MM.displayName(jM)) && void 0 !== OM ? OM : MM.displayName(rM));
      if (null !== QM) return {
        name: zM,
        detail: `${RO}${QM}`,
        detailItem: null
      };
      const LM = null !== (SM = sO[rM]) && void 0 !== SM ? SM : PM() ? DO[rM] : void 0;
      if (nM && void 0 !== LM) return {
        name: zM,
        detail: `${RO}${LM}`,
        detailItem: null
      };
      const mM = ai[rM];
      if (void 0 !== mM) return {
        name: zM,
        detail: `${RO}lookDeposit`,
        detailItem: (0, DM.Qb)(mM, MM.displayName(mM))
      };
      const HM = MM.harvestLevel(rM);
      if (aM && "rock" === MM.harvestType(rM) && 0 !== HM) {
        const rM = uO(MM, null !== HM && void 0 !== HM ? HM : 0);
        if (rM === gO[0]) return {
          name: zM,
          detail: `${RO}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== rM) return {
          name: zM,
          detail: `${RO}lookPickaxe`,
          detailItem: (0, DM.Qb)(rM, MM.displayName(rM))
        }
      }
      return {
        name: zM,
        detail: (0, DM.se)(MM.description(rM)),
        detailItem: null
      }
    }

    function oO(MM) {
      return MM < mi.q - 24
    }
    const fO = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const YO = "Wrench",
      NO = "Nova Wrench";

    function AO(MM) {
      return MM === YO || MM === NO
    }
    const xO = [...mi.M, "Belt Lift", "Belt Drop"];
    const vO = ["Belt Lift", "Belt Drop"],
      FO = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function BO(MM) {
      return MM.split("|")[0]
    }

    function XO(MM) {
      const rM = /\|rot(\d)/.exec(MM);
      return rM ? Number(rM[1]) : 1
    }

    function IO(MM) {
      return MM % 4 + 1
    }

    function KO(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === rM && "" === iM ? MM : `${MM}|meta|rot${rM}${iM}`
    }

    function qO(MM) {
      return BO(MM) === mi.C ? (0, mi.T)(MM) ? "gateRight" : "gateLeft" : (0, mi.Z)(MM)
    }

    function TO(MM) {
      const rM = BO(MM),
        iM = XO(MM);
      if (mi.M.includes(rM)) return (0, mi.O)(rM, IO(iM), null);
      if (rM === mi.j) return (0, mi.bb)(IO(iM), (0, mi.V)(MM));
      if (rM === mi.F) {
        const OM = FO[(0, mi.Z)(MM)];
        return null === OM ? KO(rM, IO(iM)) : KO(rM, iM, mi.H[OM])
      }
      return rM === mi.C ? (0, mi.T)(MM) ? KO(rM, IO(iM)) : KO(rM, iM, mi.m) : di.b.includes(rM) && !vO.includes(rM) || Qi(rM) ? KO(rM, IO(iM)) : null
    }

    function VO(MM) {
      return di.b.includes(MM) || Qi(MM) || null !== wO(MM)
    }

    function cO(MM) {
      return "Solar Panel" === wO(MM)
    }
    const MS = "buildAFactory2Game:",
      rS = {
        leftFront: `${MS}lookSplitDetail_leftFront`,
        frontRight: `${MS}lookSplitDetail_frontRight`,
        gateRight: `${MS}lookGateDetail_gateRight`
      };

    function iS(MM, rM) {
      var iM;
      let OM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const SM = qO(MM),
        jM = null === SM ? null : `${MS}${SM.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${SM}`,
        aM = null === SM ? null : null !== (iM = rS[SM]) && void 0 !== iM ? iM : null;
      if (AO(rM) && OM) {
        const iM = BO(MM);
        return rM === NO && PM() && function(MM) {
          return xO.includes(BO(MM))
        }(MM) ? {
          mode: jM,
          detail: aM,
          next: `${MS}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: jM,
          detail: aM,
          next: VO(iM) && !cO(iM) ? `${MS}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const nM = AO(rM) ? TO(MM) : null;
      if (null === nM) return {
        mode: jM,
        detail: aM,
        next: null,
        nextState: null
      };
      const QM = qO(nM);
      return null === QM || XO(nM) !== XO(MM) ? {
        mode: jM,
        detail: aM,
        next: `${MS}lookWrenchTurn`,
        nextState: null
      } : {
        mode: jM,
        detail: aM,
        next: `${MS}lookWrenchNext`,
        nextState: `${MS}lookWrenchState_${QM}`
      }
    }
    const OS = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
    const SS = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function jS(MM) {
      return [0, 1, 2, 3].map((rM => 0 !== (MM & 1 << rM)))
    }

    function aS(MM) {
      const rM = [];
      for (let iM = 8; iM + 2 < MM.length; iM += 3) rM.push([MM[iM], MM[iM + 1], MM[iM + 2]]);
      return {
        focus: [MM[0], MM[1], MM[2]],
        lasers: jS(MM[3]),
        open: jS(MM[4]),
        live: jS(MM[5]),
        on: 1 === MM[6],
        state: SS[MM[7]],
        blockers: rM
      }
    }
    const PS = "Arc Caster",
      nS = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      QS = (Object.values(nS), "Jet Chestplate"),
      zS = "Nova Jet Chestplate",
      LS = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      mS = Object.values(LS);

    function HS(MM, rM, iM) {
      return Math.min(function(MM) {
        return PM() && LM(MM) >= 5 ? 20 : 10
      }(iM), Math.floor(function(MM, rM) {
        return Math.max(0, MM) + (PM() ? Math.max(0, rM) : 0)
      }(MM, rM) / 5))
    }

    function hS(MM, rM, iM) {
      const OM = HS(rM, iM, MM),
        SM = LM(MM),
        jM = (SM >= 3 ? 55 : SM >= 1 ? 50 : MM >= 8 ? 45 : 30) + OM,
        aM = Math.max(100 + OM, 2 * jM);
      return {
        arcDamage: jM,
        arcPierce: MM >= 7 ? 2 : 1,
        arcChain: MM >= 10,
        barrierMax: (SM >= 4 ? 100 : SM >= 2 ? 90 : MM >= 9 ? 80 : MM >= 6 ? 60 : 40) + 5 * OM,
        barrierRegenPerS: SM >= 5 ? 20 : MM >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * OM,
        novaShieldRegenPerS: 32,
        bladeDamage: aM,
        bladePunch: Math.round(.5 * aM),
        forgeRank: OM
      }
    }
    const JS = {
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
    var dS = iM(37776),
      yS = iM(37544),
      lS = iM(37542),
      ES = iM(19),
      US = iM(1717),
      GS = iM(1116),
      CS = iM.n(GS);

    function eS(MM) {
      return !0 === MM.field
    }
    const bS = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function wS(MM) {
      return bS.has(MM) ? `buildAFactory2Game:itemPlural_${(0,DM.me)(MM)}` : null
    }
    var tS = iM(1188),
      gS = iM(1398),
      uS = iM(2026),
      RS = iM(2006),
      pS = iM(1470),
      WS = iM(37774),
      sS = iM(22),
      DS = iM(37769);
    const kS = "baf2QuestView",
      ZS = "baf2PlayerY",
      oS = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class fS {
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
        this.requestBook = MM, this.view = {
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
      set(MM, rM) {
        var iM, OM, SM, jM, aM, PM, nM, QM;
        const zM = JSON.stringify(MM.baf2QuestName) === JSON.stringify(this.view.name),
          LM = new Set(this.view.rows.filter((MM => MM.done)).map((MM => MM.id))),
          mM = new Set(this.view.rows.filter((MM => MM.justFinished)).map((MM => MM.id))),
          HM = MM.baf2QuestSide,
          hM = null !== HM && !0 === MM.baf2QuestSideFocus;
        let JM = !1,
          dM = 0;
        const yM = MM.baf2QuestSteps.map((MM => {
            const rM = XS(MM, oS.has(MM[0]) ? MM[0] : "" + dM++),
              iM = zM && rM.done && !LM.has(rM.id);
            return rM.justFinished = iM || zM && rM.done && mM.has(rM.id), JM ||= iM, rM
          })),
          lM = BS(yM);
        lM >= 0 && !hM && (yM[lM].current = !0);
        const EM = !zM && null !== MM.baf2QuestName,
          UM = JSON.stringify(HM && [HM[0], HM[1]]),
          GM = UM === JSON.stringify(null !== (iM = null === (OM = this.view.side) || void 0 === OM ? void 0 : OM.name) && void 0 !== iM ? iM : null),
          CM = null !== HM && !this.sidesSeen.has(UM);
        CM && this.sidesSeen.add(UM), this.serverTutorial = null !== (SM = MM.baf2QuestTutorial) && void 0 !== SM ? SM : "on", (null !== (jM = MM.baf2QuestTutorialSeq) && void 0 !== jM ? jM : 0) >= this.pickSeq && this.endPick();
        const eM = !zM || !GM || MM.baf2QuestTier !== this.view.tier;
        this.view = {
          name: MM.baf2QuestName,
          rows: yM,
          reward: MM.baf2QuestReward,
          goal: MM.baf2QuestGoal,
          pulse: this.view.pulse + (JM || EM ? 1 : 0),
          itemNames: rM,
          side: HM && {
            name: [HM[0], HM[1]],
            row: {
              ...XS(HM[2], "side"),
              current: hM
            },
            goal: null !== (aM = HM[3]) && void 0 !== aM ? aM : null
          },
          sideCameUpAt: CM ? Date.now() : this.view.sideCameUpAt,
          tier: MM.baf2QuestTier,
          core: MM.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (PM = MM.baf2QuestAlso) && void 0 !== PM ? PM : [],
          depth: null !== (nM = MM.baf2QuestDepth) && void 0 !== nM ? nM : null,
          tutorial: null !== (QM = this.pickedTutorial) && void 0 !== QM ? QM : this.serverTutorial,
          tutorialKnown: !0
        }, this.Tz(), JM && this.scheduleClear(), eM && this.requestBook()
      }
      setTutorial(MM) {
        return this.endPick(), this.pickedTutorial = MM, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.Tz()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: MM
        }, this.Tz(), this.pickSeq
      }
      onPlayerY(MM) {
        const rM = Math.floor(MM);
        rM !== this.playerY && (this.playerY = rM, this.view.depth && sS.i.Tz(ZS, rM))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(MM) {
        this.view = {
          ...this.view,
          chapters: MM.baf2BookChapters
        }, this.Tz()
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
            rows: this.view.rows.map((MM => MM.justFinished ? {
              ...MM,
              justFinished: !1
            } : MM))
          }, this.Tz()
        }), 2400)
      }
      Tz() {
        sS.i.Tz(kS, this.view, !0)
      }
    }

    function YS(MM, rM) {
      return MM.sideCameUpAt > 0 && rM - MM.sideCameUpAt < 2400
    }

    function NS(MM) {
      return (null === MM.name || AS(MM)) && null === MM.side && null !== MM.chapters
    }

    function AS(MM) {
      var rM;
      return "quest_forgeOngoing" === (null === (rM = MM.name) || void 0 === rM ? void 0 : rM[0])
    }

    function xS(MM) {
      return MM.filter((MM => !oS.has(MM.key)))
    }

    function vS(MM) {
      return MM.key.startsWith("stepCraft")
    }

    function FS(MM, rM) {
      const iM = new Set,
        OM = MM.side ? [...MM.rows, MM.side.row] : MM.rows;
      for (const jM of OM)
        if (!jM.done) {
          !jM.item || rM && !vS(jM) || iM.add(jM.item);
          for (const [MM, rM, OM] of null !== (SM = jM.chips) && void 0 !== SM ? SM : []) {
            var SM;
            rM < OM && iM.add(MM)
          }
        } return iM
    }

    function BS(MM) {
      const rM = MM.findIndex((MM => !MM.done && !MM.away));
      return rM >= 0 ? rM : MM.findIndex((MM => !MM.done))
    }

    function XS(MM, rM) {
      let [iM, OM, SM, jM, aM, PM, nM, QM, zM, LM] = MM;
      return {
        id: rM,
        key: iM,
        params: OM,
        item: SM,
        amount: jM,
        total: aM,
        done: PM,
        chips: null !== nM && void 0 !== nM ? nM : null,
        current: !1,
        away: !0 === QM,
        madeFor: null !== zM && void 0 !== zM ? zM : [],
        also: null !== LM && void 0 !== LM ? LM : [],
        justFinished: !1
      }
    }
    const IS = "baf2QuestItems",
      KS = new Set;
    let qS = new Set,
      TS = null;

    function VS(MM) {
      const rM = sM(MM.tutorial),
        iM = rM ? FS(MM, !0) : KS;
      "inventory" === ES.d.get("openInGameMenuName") ? (TS = null, (0, DS.u)(iM)) : TS = iM;
      const OM = rM ? FS(MM, !1) : KS;
      (0, WS.c)(OM, qS) || (qS = OM, sS.i.Tz(IS, qS))
    }

    function cS() {
      return (0, pS.b)(IS, (() => qS))
    }
    var Mj = iM(39485);
    const rj = [{
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

    function ij(MM, rM) {
      return [`Deposit Seed (${MM})`, {
        item: ai[`${MM} Deposit`],
        amount: rM
      }]
    }
    const Oj = Object.fromEntries([ij("Coal", 8), ij("Iron", 8), ij("Copper", 8), ij("Gold", 6), ij("Voltite", 4), ij("Uranium", 4)]),
      Sj = "Relay Coil",
      jj = new Map;

    function aj(MM) {
      let rM = jj.get(MM);
      if (!rM) {
        const iM = Math.max(1, MM);
        rM = rj.filter((MM => {
          var rM;
          return iM >= MM.fromTier && iM <= (null !== (rM = MM.untilTier) && void 0 !== rM ? rM : 1 / 0)
        })).map((MM => MM.later && iM >= MM.later.tier ? {
          ...MM,
          weight: MM.later.weight
        } : MM)), jj.set(MM, rM)
      }
      return rM
    }

    function Pj(MM) {
      return aj(MM).some((MM => {
        let {
          item: rM
        } = MM;
        return rM === Sj
      }))
    }

    function nj(MM) {
      return MM.startsWith("Deposit Seed (")
    }

    function Qj(MM, rM) {
      const iM = aj(MM);
      return rM ? iM.filter((MM => rM(MM.item))) : iM
    }

    function zj(MM) {
      return MM.reduce(((MM, rM) => MM + rM.weight), 0)
    }

    function Lj(MM, rM) {
      const iM = Qj(MM, rM),
        OM = zj(iM);
      return iM.map((MM => ({
        find: MM,
        chance: MM.weight / OM
      })))
    }
    const mj = 6e4,
      Hj = new Intl.NumberFormat("en-US");

    function hj(MM, rM) {
      const iM = MM >= 10 ? Math.round(MM) : Math.round(10 * MM) / 10;
      return 0 === iM ? "0" : `${rM}${Hj.format(iM)}`
    }

    function Jj(MM) {
      return MM < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? Hj.format(MM) : MM < 1e6 ? `${MM<1e5?Math.floor(MM/100)/10:Math.floor(MM/1e3)}k` : Math.floor(MM / 1e5) / 10 + "M"
    }

    function dj(MM) {
      return MM < 0 ? "\u2212" + -MM : String(MM)
    }

    function yj(MM, rM) {
      const iM = Math.max(1, Math.round(rM));
      if (iM < 60) return MM("buildAFactory2Game:durationSeconds", {
        seconds: String(iM)
      });
      const OM = Math.round(iM / 60);
      if (OM < 60) return MM("buildAFactory2Game:durationMinutes", {
        minutes: String(OM)
      });
      const SM = String(Math.floor(OM / 60));
      return OM % 60 === 0 ? MM("buildAFactory2Game:durationWholeHours", {
        hours: SM
      }) : MM("buildAFactory2Game:durationHours", {
        hours: SM,
        minutes: String(OM % 60)
      })
    }
    var lj = iM(2686);
    const Ej = "(max-height: 420px), (max-width: 650px)";

    function Uj() {
      return (0, lj.b)(Ej)
    }
    var Gj = iM(1303);

    function Cj(MM, rM) {
      return null !== MM && MM > rM + 1
    }

    function ej(MM) {
      const rM = 100 * MM;
      return String(rM <= 0 || rM >= 1 ? Math.round(rM) : Math.max(.1, Math.round(10 * rM) / 10))
    }

    function bj(MM) {
      let {
        item: rM,
        amount: iM
      } = MM;
      return (0, Gj.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, Gj.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, Gj.jsx)(uS.b, {
            itemName: rM,
            amount: 0
          })
        }), iM > 1 && (0, Gj.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", iM]
        })]
      })
    }

    function wj(MM) {
      let {
        label: rM,
        names: iM
      } = MM;
      const [SM, jM] = (0, OM.useState)(!1), aM = iM.join(" / ");
      return (0, Gj.jsxs)(Gj.Fragment, {
        children: [(0, Gj.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: aM,
          "aria-expanded": SM,
          onClick: () => {
            jM(!SM)
          },
          children: rM
        }), SM && (0, Gj.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: aM
        })]
      })
    }

    function tj(MM) {
      let {
        tier: rM
      } = MM;
      const {
        t: iM
      } = (0, tS.A)(), {
        key: OM,
        params: SM
      } = HM(rM, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), jM = iM(`buildAFactory2Game:${OM}`, SM);
      return (0, Gj.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, Gj.jsx)(gS.b, {
          name: "lock"
        }), jM]
      })
    }
    const gj = (0, OM.createContext)(null);

    function uj() {
      const {
        t: MM
      } = (0, tS.A)(), rM = (0, OM.useContext)(gj);
      return (0, OM.useEffect)((() => null === rM || void 0 === rM ? void 0 : rM()), [rM]), (0, Gj.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: MM("buildAFactory2Game:recipeForQuest"),
        "aria-label": MM("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function Rj(MM) {
      let {
        title: rM,
        count: iM,
        children: SM,
        startOpen: jM = !0
      } = MM;
      const {
        t: aM
      } = (0, tS.A)(), [PM, nM] = (0, OM.useState)((() => jM && !Uj())), [QM, zM] = (0, OM.useState)(0), LM = (0, OM.useCallback)((() => (zM((MM => MM + 1)), () => {
        zM((MM => MM - 1))
      })), []);
      return (0, Gj.jsxs)("div", {
        className: CS()("Baf2Recipes", {
          Open: PM
        }),
        children: [(0, Gj.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            nM(!PM)
          },
          "aria-expanded": PM,
          children: [aM("buildAFactory2Game:recipesToggle", {
            title: rM,
            count: String(iM)
          }), (0, Gj.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: PM ? "\u25be" : "\u25b8"
          })]
        }), PM && (0, Gj.jsxs)(gj.Provider, {
          value: LM,
          children: [(0, Gj.jsx)("ul", {
            className: "Baf2RecipeList",
            children: SM
          }), QM > 0 && (0, Gj.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, Gj.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), aM("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const pj = "buildAFactory2Game:",
      Wj = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const sj = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      Dj = {
        "Uranium Grit": jM,
        "Raw Uranium": jM
      };

    function kj(MM) {
      var rM;
      return null !== (rM = Dj[MM]) && void 0 !== rM ? rM : Math.max(qM(MM), sj[MM] ? qM(sj[MM]) : 1, function(MM) {
        const rM = SM.findIndex((rM => rM.cost.some((rM => rM.item === MM))));
        return rM > jM ? rM : 1
      }(MM))
    }

    function Zj(MM, rM) {
      return oj(rM) ? kj(rM) : function(MM) {
        if (Wj.has(MM)) return 1;
        const rM = SM.findIndex((rM => rM.newDeposits.some((rM => {
          let {
            block: iM
          } = rM;
          return iM === MM
        }))));
        return rM < 0 ? 1 : rM + 1
      }(MM)
    }

    function oj(MM) {
      return MM in Dj || LM(kj(MM)) > 0
    }

    function fj(MM, rM) {
      return Tr(MM, {
        coupled: !1,
        taught: null,
        atomic: PM() && rM >= 11
      }).recipes
    }

    function Yj(MM, rM) {
      const iM = mM(MM, rM, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : LM(MM) > 0);
      return "open" === iM || "locked" === iM
    }

    function Nj(MM, rM) {
      return MM.map(((MM, iM) => ({
        value: MM,
        idx: iM,
        tier: rM(MM)
      }))).sort(((MM, rM) => MM.tier - rM.tier || MM.idx - rM.idx)).map((MM => {
        let {
          value: rM
        } = MM;
        return rM
      }))
    }

    function Aj(MM, rM, iM) {
      const OM = mM(MM, rM);
      if ("hidden" === OM || "open" === OM) return null;
      if ("teaser" === OM) return {
        tag: {
          translationKey: `${pj}${iM?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${pj}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const SM = HM(MM, {
          tier: iM ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        jM = HM(MM, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${pj}${SM.key}`,
          params: SM.params
        },
        reason: {
          translationKey: `${pj}${jM.key}`,
          params: jM.params
        }
      }
    }

    function xj(MM) {
      return !nj(MM)
    }

    function vj(MM) {
      let {
        seconds: rM
      } = MM;
      const {
        t: iM
      } = (0, tS.A)();
      return (0, Gj.jsx)(Rj, {
        title: iM("buildAFactory2Game:recipesCuts", {
          seconds: rM
        }),
        count: 1,
        children: (0, Gj.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, Gj.jsx)(bj, {
            item: "Maple Sapling",
            amount: 1
          }), (0, Gj.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, Gj.jsx)(bj, {
            item: "Maple Log",
            amount: 1
          }), (0, Gj.jsx)("span", {
            className: "Baf2RecipeName",
            children: iM("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function Fj(MM) {
      let {
        fertilised: rM
      } = MM;
      const {
        t: iM
      } = (0, tS.A)();
      return (0, Gj.jsxs)(Rj, {
        title: iM("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, Gj.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, Gj.jsx)(bj, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, Gj.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, Gj.jsx)(bj, {
            item: "Wheat",
            amount: 1
          }), (0, Gj.jsx)(bj, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, Gj.jsx)("span", {
            className: "Baf2RecipeName",
            children: iM("buildAFactory2Game:recipeField")
          })]
        }), (0, Gj.jsxs)("li", {
          className: CS()("Baf2Recipe", {
            InUse: rM
          }),
          children: [(0, Gj.jsx)(bj, {
            item: "Fertiliser",
            amount: 1
          }), (0, Gj.jsx)("span", {
            className: "Baf2RecipeName",
            children: iM("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function Bj(MM) {
      let {
        tier: rM,
        seconds: iM
      } = MM;
      const {
        t: OM
      } = (0, tS.A)(), SM = function(MM) {
        return MM >= 5 ? Cr : Gr
      }(rM);
      return (0, Gj.jsx)(Rj, {
        title: OM("buildAFactory2Game:recipesBringsUp", {
          seconds: iM
        }),
        count: SM.length,
        children: SM.map((MM => {
          let {
            item: rM,
            chance: iM
          } = MM;
          return (0, Gj.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, Gj.jsx)(bj, {
              item: rM,
              amount: 1
            }), (0, Gj.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, Mj.e)(OM, rM)
            }), (0, Gj.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: OM("buildAFactory2Game:recipeChance", {
                percent: ej(iM)
              })
            })]
          }, rM)
        }))
      })
    }

    function Xj(MM) {
      let {
        tier: rM,
        seconds: iM,
        noSeeds: OM
      } = MM;
      const {
        t: SM
      } = (0, tS.A)(), jM = cS(), aM = Lj(rM, OM ? xj : void 0), PM = OM && Lj(rM).length > aM.length, nM = Pj(rM);
      return (0, Gj.jsxs)(Rj, {
        title: SM("buildAFactory2Game:recipesRecycles", {
          seconds: iM
        }),
        count: aM.length,
        children: [aM.map((MM => {
          let {
            find: rM,
            chance: iM
          } = MM;
          return (0, Gj.jsxs)("li", {
            className: "Baf2Recipe",
            children: [jM.has(rM.item) && (0, Gj.jsx)(uj, {}), (0, Gj.jsx)(bj, {
              item: rM.item,
              amount: rM.amount
            }), (0, Gj.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, Mj.e)(SM, rM.item)
            }), (0, Gj.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: SM("buildAFactory2Game:recipeChance", {
                percent: ej(iM)
              })
            })]
          }, rM.item)
        })), PM && (0, Gj.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Gj.jsx)("span", {
            className: "Baf2RecipeName",
            children: SM("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), nM && (0, Gj.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Gj.jsx)("span", {
            className: "Baf2RecipeName",
            children: SM("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function Ij(MM) {
      let {
        tier: rM,
        seconds: iM
      } = MM;
      const {
        t: OM
      } = (0, tS.A)(), SM = Object.entries(Oj).filter((MM => {
        let [, {
          item: iM
        }] = MM;
        return Yj(kj(iM), rM, oj(iM))
      }));
      return (0, Gj.jsx)(Rj, {
        title: OM("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: iM
        }),
        count: SM.length,
        children: SM.map((MM => {
          let [rM, {
            item: iM,
            amount: SM
          }] = MM;
          return (0, Gj.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, Gj.jsx)(bj, {
              item: rM,
              amount: 1
            }), (0, Gj.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, Gj.jsx)(bj, {
              item: iM,
              amount: SM
            }), (0, Gj.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, Mj.e)(OM, iM)
            })]
          }, rM)
        }))
      })
    }

    function Kj(MM) {
      let {
        tier: rM,
        seconds: iM
      } = MM;
      const {
        t: OM
      } = (0, tS.A)(), SM = cS(), jM = Nj(Object.entries(ai).filter((MM => {
        let [iM, OM] = MM;
        return Yj(Zj(iM, OM), rM, oj(OM))
      })), (MM => {
        let [rM, iM] = MM;
        return Zj(rM, iM)
      }));
      return (0, Gj.jsx)(Rj, {
        title: OM("buildAFactory2Game:recipesDigs", {
          seconds: iM
        }),
        count: jM.length,
        children: jM.map((MM => {
          let [iM, jM] = MM;
          const aM = Zj(iM, jM),
            PM = aM > rM ? aM : null,
            nM = Pi[iM],
            QM = null === PM && SM.has(jM);
          return (0, Gj.jsxs)("li", {
            className: CS()("Baf2Recipe", {
              Locked: null !== PM,
              Far: Cj(PM, rM)
            }),
            children: [QM && (0, Gj.jsx)(uj, {}), (0, Gj.jsx)(bj, {
              item: iM,
              amount: 1
            }), (0, Gj.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, Gj.jsx)(bj, {
              item: jM,
              amount: 1
            }), (0, Gj.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, Mj.e)(OM, jM)
            }), void 0 !== nM && (0, Gj.jsx)("span", {
              className: "Baf2RecipeMore",
              children: OM("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / nM)
              })
            }), null !== PM && (0, Gj.jsx)(tj, {
              tier: PM
            })]
          }, iM)
        }))
      })
    }

    function qj(MM) {
      var rM;
      let {
        def: iM,
        seconds: OM
      } = MM;
      const {
        t: SM
      } = (0, tS.A)();
      return (0, Gj.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, Gj.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (rM = iM.fuels) && void 0 !== rM ? rM : []).map((MM => (0, Gj.jsx)(bj, {
            item: MM,
            amount: 1
          }, MM))), (0, Gj.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, Gj.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, Gj.jsx)(gS.b, {
              name: "bolt"
            }), SM("buildAFactory2Game:recipePower", {
              power: TM(iM.powerMade),
              seconds: OM
            })]
          })]
        })
      })
    }

    function Tj(MM) {
      let {
        def: rM
      } = MM;
      const {
        t: iM
      } = (0, tS.A)();
      return (0, Gj.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, Gj.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Gj.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, Gj.jsx)(gS.b, {
              name: "bolt"
            }), iM("buildAFactory2Game:recipeMixer", {
              cryo: hj((0, VM.P)(rM, rM.cryoMade), "")
            })]
          })
        })
      })
    }

    function Vj(MM) {
      let {
        def: rM
      } = MM;
      const {
        t: iM
      } = (0, tS.A)();
      return (0, Gj.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, Gj.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Gj.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, Gj.jsx)(gS.b, {
              name: "bolt"
            }), iM("buildAFactory2Game:recipeCondenser", {
              power: hj((0, VM.P)(rM, rM.powerPerOp), ""),
              water: hj((0, VM.P)(rM, rM.fluidMade), "")
            })]
          })
        })
      })
    }

    function cj(MM) {
      let {
        kind: rM,
        def: iM,
        input: OM,
        tier: SM,
        noSeeds: jM = !1
      } = MM;
      const aM = String(iM.opMs / 1e3);
      return ii(iM) ? (0, Gj.jsx)(vj, {
        seconds: aM
      }) : iM.field ? (0, Gj.jsx)(Fj, {
        fertilised: null !== OM
      }) : iM.table ? (0, Gj.jsx)(Bj, {
        tier: SM,
        seconds: aM
      }) : iM.recycles ? (0, Gj.jsxs)(Gj.Fragment, {
        children: [(0, Gj.jsx)(Xj, {
          tier: SM,
          seconds: aM,
          noSeeds: jM
        }), (0, Gj.jsx)(Ij, {
          tier: SM,
          seconds: aM
        })]
      }) : ri(iM) ? (0, Gj.jsx)(Kj, {
        tier: SM,
        seconds: aM
      }) : void 0 !== iM.fluidMade ? (0, Gj.jsx)(Vj, {
        def: iM
      }) : void 0 !== iM.cryoMade ? (0, Gj.jsx)(Tj, {
        def: iM
      }) : void 0 !== iM.powerMade ? (0, Gj.jsx)(qj, {
        def: iM,
        seconds: aM
      }) : (0, Gj.jsx)(Ma, {
        kind: rM,
        input: OM,
        tier: SM,
        seconds: aM
      })
    }

    function Ma(MM) {
      let {
        kind: rM,
        input: iM,
        tier: OM,
        seconds: SM
      } = MM;
      const {
        t: jM
      } = (0, tS.A)(), aM = cS(), PM = Nj(function(MM) {
        const rM = new Map;
        for (const SM of MM) {
          var iM, OM;
          const MM = [SM.output, SM.outputAmount, SM.inputAmount, null === (iM = SM.bonus) || void 0 === iM ? void 0 : iM.item, null === (OM = SM.bonus) || void 0 === OM ? void 0 : OM.chance].join("|"),
            jM = rM.get(MM);
          jM ? jM.inputs.push(SM.input) : rM.set(MM, {
            inputs: [SM.input],
            inputAmount: SM.inputAmount,
            output: SM.output,
            outputAmount: SM.outputAmount,
            bonus: SM.bonus
          })
        }
        return [...rM.values()]
      }(fj(rM, OM).filter(zi)), (MM => kj(MM.output))).filter((MM => Yj(kj(MM.output), OM, oj(MM.output))));
      return (0, Gj.jsx)(Rj, {
        title: jM("buildAFactory2Game:recipesEach", {
          seconds: SM
        }),
        count: PM.length,
        children: PM.map((MM => {
          const rM = null !== iM && MM.inputs.includes(iM),
            SM = MM.inputs.length > 3 ? [rM ? iM : MM.inputs[0]] : MM.inputs,
            PM = kj(MM.output) > OM ? kj(MM.output) : null,
            nM = null === PM && aM.has(MM.output);
          return (0, Gj.jsxs)("li", {
            className: CS()("Baf2Recipe", {
              InUse: rM,
              Locked: null !== PM,
              Far: Cj(PM, OM)
            }),
            children: [nM && (0, Gj.jsx)(uj, {}), SM.map(((rM, iM) => (0, Gj.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [iM > 0 && (0, Gj.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, Gj.jsx)(bj, {
                item: rM,
                amount: MM.inputAmount
              })]
            }, rM))), SM.length < MM.inputs.length && (0, Gj.jsx)(wj, {
              label: jM("buildAFactory2Game:recipeMore", {
                count: String(MM.inputs.length - SM.length)
              }),
              names: MM.inputs.filter((MM => !SM.includes(MM))).map((MM => (0, Mj.e)(jM, MM)))
            }), (0, Gj.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, Gj.jsx)(bj, {
              item: MM.output,
              amount: MM.outputAmount
            }), (0, Gj.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, Mj.e)(jM, MM.output)
            }), MM.bonus && (0, Gj.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [jM("buildAFactory2Game:recipeBonus", {
                percent: ej(MM.bonus.chance)
              }), (0, Gj.jsx)(bj, {
                item: MM.bonus.item,
                amount: 1
              })]
            }), null !== PM && (0, Gj.jsx)(tj, {
              tier: PM
            })]
          }, `${MM.output}|${MM.inputs[0]}`)
        }))
      })
    }

    function ra(MM) {
      let {
        taught: rM,
        tier: iM
      } = MM;
      const {
        t: OM
      } = (0, tS.A)(), SM = cS(), jM = Nj(Object.values(Kr), (MM => MM.tier)).filter((MM => Yj(MM.tier, iM)));
      return (0, Gj.jsx)(Rj, {
        title: OM("buildAFactory2Game:benchCanMake"),
        count: jM.length,
        startOpen: !1,
        children: jM.map((MM => {
          const jM = MM.tier > iM,
            aM = !jM && SM.has(MM.output);
          return (0, Gj.jsxs)("li", {
            className: CS()("Baf2Recipe", {
              InUse: MM.output === rM,
              Locked: jM,
              Far: Cj(jM ? MM.tier : null, iM)
            }),
            children: [aM && (0, Gj.jsx)(uj, {}), (0, Gj.jsx)(bj, {
              item: MM.output,
              amount: MM.outputAmount
            }), (0, Gj.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, Mj.e)(OM, MM.output)
            }), (0, Gj.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), MM.inputs.map((MM => (0, Gj.jsx)(bj, {
              item: MM.item,
              amount: MM.amount
            }, MM.item))), jM && (0, Gj.jsx)(tj, {
              tier: MM.tier
            })]
          }, MM.output)
        }))
      })
    }
    var ia, Oa, Sa, ja, aa;
    const Pa = Dr.Generator,
      na = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      Qa = 1e3 * (null !== (ia = Pa.powerMade) && void 0 !== ia ? ia : 0) / Pa.opMs,
      za = Math.min(...(null !== (Oa = Pa.fuels) && void 0 !== Oa ? Oa : []).map((MM => ji[MM]))) / 1e3,
      La = Dr["Volt Engine"],
      ma = 1e3 * (null !== (Sa = La.powerMade) && void 0 !== Sa ? Sa : 0) / La.opMs,
      Ha = ji[null !== (ja = null === (aa = La.fuels) || void 0 === aa ? void 0 : aa[0]) && void 0 !== ja ? ja : ""] / 1e3;

    function ha(MM) {
      let {
        item: rM,
        label: iM,
        value: OM,
        note: SM,
        dim: jM
      } = MM;
      return (0, Gj.jsxs)("li", {
        className: CS()("Baf2PowerRow", {
          Dim: jM
        }),
        children: [(0, Gj.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, Gj.jsx)(uS.b, {
            itemName: rM,
            amount: 0
          })
        }), (0, Gj.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, Gj.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: iM
          }), SM && (0, Gj.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: SM
          })]
        }), (0, Gj.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: OM
        })]
      })
    }

    function Ja(MM, rM, iM, OM) {
      var SM;
      const jM = void 0 === OM ? Dr[MM] : function(MM, rM) {
          if (null === rM) return MM;
          let iM = XM.get(rM);
          return iM || (iM = {
            ...MM,
            powerPerOp: BM(MM, rM),
            farmMob: rM
          }, XM.set(rM, iM)), iM
        }(Dr[MM], OM),
        aM = rM && jM.couplable ? xr(jM, iM) : jM;
      return 1e3 * (null !== (SM = aM.powerPerOp) && void 0 !== SM ? SM : 0) / aM.opMs
    }

    function da(MM) {
      var rM, iM, OM, SM, jM, aM, PM, nM;
      let {
        message: QM
      } = MM;
      const {
        t: zM
      } = (0, tS.A)(), LM = (MM, rM) => zM("buildAFactory2Game:powerPerSecond", {
        rate: hj(MM, rM)
      }), [mM, HM] = QM.baf2PowerGenerators, hM = QM.baf2PowerGeneratorFuel, JM = QM.baf2PowerSunPanels, dM = null !== (rM = QM.baf2PowerSunShare) && void 0 !== rM ? rM : 1, yM = QM.baf2PowerVaults, lM = QM.baf2PowerUsers, [EM, UM] = null !== (iM = QM.baf2PowerEngines) && void 0 !== iM ? iM : [0, 0], GM = null !== (OM = QM.baf2PowerEngineCells) && void 0 !== OM ? OM : 0, CM = null !== (SM = QM.baf2PowerPads) && void 0 !== SM ? SM : 0, eM = null !== (jM = QM.baf2PowerCharge) && void 0 !== jM ? jM : 0, [bM, wM] = null !== (aM = QM.baf2PowerReactors) && void 0 !== aM ? aM : [0, 0], [tM, gM] = null !== (PM = QM.baf2PowerBatteries) && void 0 !== PM ? PM : [0, 0];
      let uM = zM("buildAFactory2Game:powerEngineCells", {
        amount: String(GM)
      });
      GM > 0 && UM > 0 && (uM = zM("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(GM),
        time: yj(zM, GM * Ha / UM)
      }));
      let RM = zM("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(hM)
      });
      hM > 0 && HM > 0 && (RM = zM("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(hM),
        time: yj(zM, hM * za / HM)
      }));
      const pM = mM + EM + JM + bM;
      return (0, Gj.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, Gj.jsxs)("section", {
          children: [(0, Gj.jsxs)("h3", {
            children: [zM("buildAFactory2Game:powerMaking"), (0, Gj.jsx)("span", {
              children: LM(QM.baf2PowerMadePerS, "+")
            })]
          }), (0, Gj.jsxs)("ul", {
            children: [0 === pM && (0, Gj.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: zM("buildAFactory2Game:powerNoMakers")
            }), mM > 0 && (0, Gj.jsx)(ha, {
              item: "Generator",
              label: `${(0,Mj.e)(zM,"Generator")} \xd7${mM}`,
              note: `${zM("buildAFactory2Game:powerRunning",{amount:String(HM)})} \xb7 ${RM}`,
              value: LM(HM * Qa, "+"),
              dim: 0 === HM
            }), EM > 0 && (0, Gj.jsx)(ha, {
              item: "Volt Engine",
              label: `${(0,Mj.e)(zM,"Volt Engine")} \xd7${EM}`,
              note: `${zM("buildAFactory2Game:powerRunning",{amount:String(UM)})} \xb7 ${uM}`,
              value: LM(UM * ma, "+"),
              dim: 0 === UM
            }), JM > 0 && (0, Gj.jsx)(ha, {
              item: "Solar Panel",
              label: `${(0,Mj.e)(zM,"Solar Panel")} \xd7${JM}`,
              note: zM(dM < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: LM(4 * JM * dM, "+")
            }), bM > 0 && (0, Gj.jsx)(ha, {
              item: "Reactor Frame",
              label: `${zM("buildAFactory2Game:powerReactors")} \xd7${bM}`,
              note: zM("buildAFactory2Game:powerRunning", {
                amount: String(wM)
              }),
              value: LM(null !== (nM = QM.baf2PowerReactorPerS) && void 0 !== nM ? nM : 0, "+"),
              dim: 0 === wM
            })]
          })]
        }), (0, Gj.jsxs)("section", {
          children: [(0, Gj.jsxs)("h3", {
            children: [zM("buildAFactory2Game:powerStorage"), (0, Gj.jsx)("span", {
              children: TM(QM.baf2PowerCap)
            })]
          }), (yM > 0 || tM > 0) && (0, Gj.jsxs)("ul", {
            children: [yM > 0 && (0, Gj.jsx)(ha, {
              item: "Charge Vault",
              label: `${(0,Mj.e)(zM,"Charge Vault")} \xd7${yM}`,
              value: `+${TM(8e3*yM)}`
            }), tM > 0 && (0, Gj.jsx)(ha, {
              item: "Battery Cell",
              label: `${zM("buildAFactory2Game:powerBatteries")} \xd7${tM}`,
              value: `+${TM(gM)}`
            })]
          })]
        }), (0, Gj.jsxs)("section", {
          children: [(0, Gj.jsxs)("h3", {
            children: [zM("buildAFactory2Game:powerUsing"), (0, Gj.jsx)("span", {
              children: LM(QM.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, Gj.jsxs)("ul", {
            children: [0 === lM.length && 0 === CM && 0 === eM && (0, Gj.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: zM("buildAFactory2Game:powerNoUsers")
            }), lM.map((MM => {
              let [rM, iM, OM, SM, jM = 1, aM] = MM, PM = iM ? zM(na[jM - 1], {
                name: (0, Mj.e)(zM, rM)
              }) : (0, Mj.e)(zM, rM);
              return void 0 !== aM && (PM = zM("buildAFactory2Game:powerFarmName", {
                name: PM,
                mob: zM(xM(aM))
              })), (0, Gj.jsx)(ha, {
                item: rM,
                label: `${PM} \xd7${OM}`,
                note: zM("buildAFactory2Game:powerRunning", {
                  amount: String(SM)
                }),
                value: SM > 0 ? LM(SM * Ja(rM, iM, jM, aM), "\u2212") : zM("buildAFactory2Game:powerIdle"),
                dim: 0 === SM
              }, `${rM}|${iM}|${jM}|${aM}`)
            })), CM > 0 && (0, Gj.jsx)(ha, {
              item: "Charging Pad",
              label: `${(0,Mj.e)(zM,"Charging Pad")} \xd7${CM}`,
              value: zM("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), eM > 0 && (0, Gj.jsx)(ha, {
              item: "Homestead Core",
              label: zM("buildAFactory2Game:powerCharge"),
              value: LM(eM, "\u2212")
            }), QM.baf2PowerStarved > 0 && (0, Gj.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, Gj.jsx)(gS.b, {
                name: "triangle-exclamation"
              }), zM("buildAFactory2Game:powerStarved", {
                amount: String(QM.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var ya = iM(4917),
      la = iM(1520);
    class Ea {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(MM) {
        this.message = MM;
        for (const rM of this.listeners) rM()
      }
      get() {
        return this.message
      }
      subscribe(MM) {
        return this.listeners.add(MM), () => {
          this.listeners.delete(MM)
        }
      }
    }
    class Ua extends Ea {}

    function Ga(MM, rM) {
      const iM = () => {
          const iM = MM.get();
          if (!iM || !rM) return iM;
          const [OM, SM, jM] = iM.baf2PowerAt;
          return OM === rM[0] && SM === rM[1] && jM === rM[2] ? iM : null
        },
        [SM, jM] = (0, OM.useState)(iM);
      return (0, OM.useEffect)((() => (jM(iM()), MM.subscribe((() => {
        jM(iM())
      })))), [MM, ...null !== rM && void 0 !== rM ? rM : []]), SM
    }

    function Ca(MM) {
      return {
        stored: MM.baf2PowerStored,
        cap: MM.baf2PowerCap,
        madePerS: MM.baf2PowerMadePerS,
        usedPerS: MM.baf2PowerUsedPerS
      }
    }

    function ea(MM) {
      let {
        stored: rM,
        cap: iM
      } = MM;
      return (0, Gj.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, Gj.jsx)("div", {
          style: {
            width: `${Math.min(100,100*rM/Math.max(1,iM))}%`
          }
        })
      })
    }

    function ba(MM) {
      let {
        figures: rM,
        labelled: iM = !1
      } = MM;
      const {
        t: OM
      } = (0, tS.A)(), SM = rM.madePerS - rM.usedPerS, {
        text: jM,
        draining: aM
      } = function(MM, rM) {
        let {
          stored: iM,
          cap: OM,
          madePerS: SM,
          usedPerS: jM
        } = rM;
        const aM = SM - jM;
        return iM >= OM ? {
          text: MM("buildAFactory2Game:powerFull"),
          draining: !1
        } : aM > .05 ? {
          text: MM("buildAFactory2Game:powerFullIn", {
            time: yj(MM, (OM - iM) / aM)
          }),
          draining: !1
        } : aM < -.05 ? {
          text: MM("buildAFactory2Game:powerEmptyIn", {
            time: yj(MM, iM / -aM)
          }),
          draining: !0
        } : {
          text: MM("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(OM, rM);
      return (0, Gj.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, Gj.jsx)(ea, {
          stored: rM.stored,
          cap: rM.cap
        }), (0, Gj.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, Gj.jsx)("span", {
            children: OM(iM ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: TM(rM.stored),
              cap: TM(rM.cap)
            })
          }), (0, Gj.jsxs)("span", {
            className: CS()("Baf2PowerNet", {
              Draining: aM
            }),
            children: [OM("buildAFactory2Game:powerPerSecond", {
              rate: hj(Math.abs(SM), SM < 0 ? "\u2212" : "+")
            }), " \xb7 ", jM]
          })]
        })]
      })
    }

    function wa(MM) {
      let {
        stored: rM,
        cap: iM,
        rates: OM
      } = MM;
      const {
        t: SM
      } = (0, tS.A)();
      return OM ? (0, Gj.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, Gj.jsx)(ba, {
          figures: {
            stored: rM,
            cap: iM,
            madePerS: OM[0],
            usedPerS: OM[1]
          },
          labelled: !0
        })
      }) : (0, Gj.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, Gj.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, Gj.jsx)(ea, {
            stored: rM,
            cap: iM
          }), (0, Gj.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, Gj.jsx)("span", {
              children: SM("buildAFactory2Game:powerStoredLabelled", {
                stored: TM(rM),
                cap: TM(iM)
              })
            })
          })]
        })
      })
    }

    function ta(MM) {
      let {
        store: rM,
        close: iM
      } = MM;
      const {
        t: OM
      } = (0, tS.A)(), SM = Ga(rM);
      return (0, Gj.jsx)(ya.e, {
        close: iM,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Gj.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, Gj.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Gj.jsxs)("div", {
              children: [(0, Gj.jsx)("h2", {
                id: "baf2PowerTitle",
                children: OM("buildAFactory2Game:powerTitle")
              }), (0, Gj.jsx)("p", {
                children: OM("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, Gj.jsx)(la.l, {
              onClick: iM
            })]
          }), SM && (0, Gj.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, Gj.jsx)(ba, {
              figures: Ca(SM)
            }), (0, Gj.jsx)(da, {
              message: SM
            })]
          })]
        })
      })
    }

    function ga(MM) {
      var rM;
      let {
        kind: iM,
        def: SM,
        ti: jM,
        power: aM,
        stored: PM,
        cap: nM
      } = MM;
      const {
        t: QM
      } = (0, tS.A)(), zM = Ga(aM, jM), [LM, mM] = (0, OM.useState)(!1);
      return (0, Gj.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, Gj.jsx)(cj, {
          kind: iM,
          def: SM,
          input: null,
          tier: null !== (rM = null === zM || void 0 === zM ? void 0 : zM.baf2PowerTier) && void 0 !== rM ? rM : 1
        }), (0, Gj.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: QM("buildAFactory2Game:powerTitle")
        }), zM && (0, Gj.jsx)(ba, {
          figures: Ca(zM)
        }), !zM && (0, Gj.jsx)(wa, {
          stored: PM,
          cap: nM,
          rates: null
        }), zM && (0, Gj.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            mM(!LM)
          },
          "aria-expanded": LM,
          children: QM(LM ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), zM && LM && (0, Gj.jsx)(da, {
          message: zM
        })]
      })
    }
    const ua = 2500,
      Ra = 17500,
      pa = `${GM} `;
    const Wa = ["plan", "throttle"];

    function sa(MM) {
      if (MM.startsWith(`${tr} `)) return MM.slice(0, MM.lastIndexOf(" "));
      const rM = MM.split(" ");
      return rM[0] === zr && Wa.includes(rM[4]) ? rM.slice(0, 5).join(" ") : null
    }
    class Da {
      constructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = MM, this.now = rM, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.pSM = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = rM()
      }
      enqueue(MM) {
        this.queue(MM, this.nextTicket());
        const rM = this.pSM + this.pending.length;
        return this.flush(), rM
      }
      track(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const iM = this.nextTicket();
        if (!rM.urgent) return this.queue(MM, iM), this.flush(), iM;
        const {
          supersedes: OM
        } = rM;
        for (let jM = this.pending.length - 1; jM >= this.urgent; jM--) {
          const rM = this.pending[jM];
          (rM.command === MM || null !== OM && void 0 !== OM && OM(rM.command)) && (this.pending.splice(jM, 1), this.markLeft(rM.tickets))
        }
        const SM = this.pending.findIndex((rM => {
          let {
            command: iM
          } = rM;
          return iM === MM
        }));
        return -1 !== SM ? this.pending[SM].tickets.push(iM) : (this.pending.splice(this.urgent, 0, {
          command: MM,
          tickets: [iM]
        }), this.urgent += 1), this.flush(), iM
      }
      leftAt(MM) {
        const rM = this.leftTimes.get(MM);
        return void 0 !== rM ? rM : this.pending.some((rM => {
          let {
            tickets: iM
          } = rM;
          return iM.includes(MM)
        })) ? null : -1 / 0
      }
      holdReserve() {
        this.reserves += 1;
        let MM = !0;
        return () => {
          MM && (MM = !1, this.reserves -= 1, this.flush())
        }
      }
      isWaitingLast(MM) {
        var rM;
        return (null === (rM = this.pending.at(-1)) || void 0 === rM ? void 0 : rM.command) === MM
      }
      sent() {
        return this.pSM
      }
      clear() {
        for (const {
            tickets: MM
          }
          of this.pending) this.markLeft(MM);
        this.pending.length = 0, this.urgent = 0, null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      nextTicket() {
        return this.lastTicket += 1, this.lastTicket
      }
      markLeft(MM) {
        const rM = this.now();
        for (const iM of MM) this.leftTimes.set(iM, rM);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(MM, rM) {
        const iM = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === iM || void 0 === iM ? void 0 : iM.command) === MM) return void(! function(MM) {
          return MM === CM || MM.startsWith(`${UM} `) || MM.startsWith(`${YM} `)
        }(MM) ? iM.tickets.push(rM) : (this.pending.pop(), this.markLeft([...iM.tickets, rM])));
        const OM = void 0 === iM ? null : Qr(iM.command, MM);
        if (null !== OM && void 0 !== iM) return iM.command = OM, void iM.tickets.push(rM);
        const SM = sa(MM);
        if (null !== SM && void 0 !== iM && sa(iM.command) === SM) return iM.command = MM, void iM.tickets.push(rM);
        if (null !== iM && void 0 !== iM && iM.command.startsWith(pa) && MM.startsWith(pa)) {
          const OM = MM.slice(pa.length);
          if (iM.command.slice(pa.length).split(",").includes(OM)) return void iM.tickets.push(rM);
          const SM = `${iM.command},${OM}`;
          if (SM.length <= 119) return iM.command = SM, void iM.tickets.push(rM)
        }
        this.pending.push({
          command: MM,
          tickets: [rM]
        })
      }
      flush() {
        const MM = this.now();
        for (this.tokens = Math.min(5, this.tokens + (MM - this.refilledAt) / ua), this.refilledAt = MM; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.pSM += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: MM,
            tickets: rM
          } = this.pending.shift();
          this.markLeft(rM), this.send(MM)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * ua)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class ka {
      constructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new Da(MM, rM)
      }
      send(MM) {
        return this.queue.enqueue(MM)
      }
      sent() {
        return this.queue.sent()
      }
      track(MM, rM) {
        return this.queue.track(MM, rM)
      }
      leftAt(MM) {
        return this.queue.leftAt(MM)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(MM) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = rM, this.send(MM), this.islandEdits.count
      }
      syncIslandEdits(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: iM
        } = this, OM = rM - iM.lastAtMs < Ra;
        iM.count = OM ? Math.max(iM.count, MM) : MM
      }
      clear() {
        this.queue.clear()
      }
    }
    const Za = (0, OM.createContext)(null);

    function oa() {
      const MM = (0, OM.useContext)(Za);
      if (!MM) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return MM
    }

    function fa(MM, rM) {
      return null !== rM && void 0 !== rM ? rM : 1 === MM
    }

    function Ya(MM, rM) {
      return MM.every((MM => {
        var iM;
        let [OM, , SM] = MM;
        return !fa(SM, null === (iM = rM.get(OM)) || void 0 === iM ? void 0 : iM.ML)
      }))
    }

    function Na(MM, rM, iM) {
      if (0 === MM.size) return MM;
      const OM = new Map(MM);
      for (const [SM, jM] of MM) {
        const MM = rM.find((MM => {
          let [rM] = MM;
          return rM === SM
        }));
        (!MM || jM.ML === (1 === MM[2]) || jM.atMs < iM) && OM.delete(SM)
      }
      return OM
    }

    function Aa(MM) {
      var rM;
      let {
        ti: iM,
        input: SM,
        drops: jM,
        seconds: aM
      } = MM;
      const {
        t: PM
      } = (0, tS.A)(), nM = oa(), [QM, zM] = (0, OM.useState)(new Map);
      (0, OM.useEffect)((() => {
        jM && zM((MM => Na(MM, jM, Date.now() - Ra)))
      }), [jM]), (0, OM.useEffect)((() => {
        const MM = function(MM, rM) {
          let iM = null;
          for (const {
              atMs: OM
            }
            of MM.values()) iM = null === iM ? OM : Math.min(iM, OM);
          return null === iM ? null : iM + rM
        }(QM, Ra);
        if (null === MM || !jM) return;
        const rM = setTimeout((() => {
          zM((MM => Na(MM, jM, Date.now() - Ra)))
        }), Math.max(0, MM - Date.now()) + 1);
        return () => {
          clearTimeout(rM)
        }
      }), [QM, jM]);
      const LM = vM(SM),
        mM = null !== LM && null !== jM && Ya(jM, QM),
        HM = function(MM, rM, iM) {
          return null === MM || null === rM || Ya(rM, iM) ? 0 : fM[ZM[MM]]
        }(LM, jM, QM);
      return (0, Gj.jsxs)(Rj, {
        title: PM("buildAFactory2Game:farmDropsTitle", {
          seconds: aM
        }),
        count: null !== (rM = null === jM || void 0 === jM ? void 0 : jM.length) && void 0 !== rM ? rM : 0,
        children: [HM > 0 && (0, Gj.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: PM("buildAFactory2Game:farmDropsPower", {
            power: String(HM)
          })
        }), (null === LM || !jM) && (0, Gj.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: PM("buildAFactory2Game:farmDropsEmpty")
        }), mM && (0, Gj.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: PM("buildAFactory2Game:farmDropsAllVoided")
        }), null !== LM && (null === jM || void 0 === jM ? void 0 : jM.map((MM => {
          var rM;
          let [OM, SM, jM] = MM;
          const aM = SM < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            LM = fa(jM, null === (rM = QM.get(OM)) || void 0 === rM ? void 0 : rM.ML);
          return (0, Gj.jsxs)("li", {
            className: CS()("Baf2Recipe Baf2FarmDrop", {
              Voided: !LM
            }),
            children: [(0, Gj.jsx)(bj, {
              item: OM,
              amount: 1
            }), (0, Gj.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, Mj.e)(PM, OM)
            }), (0, Gj.jsx)("span", {
              className: "Baf2FarmRate",
              children: PM(aM, {
                amount: String(SM)
              })
            }), (0, Gj.jsx)("button", {
              type: "button",
              className: CS()("Baf2FarmToggle SmallTextBold", {
                Kept: LM
              }),
              "aria-pressed": LM,
              onClick: () => {
                zM(new Map(QM).set(OM, {
                  ML: !LM,
                  atMs: Date.now()
                })), nM.send(function(MM, rM, iM, OM) {
                  return `${YM} ${MM} ${rM} ${iM} ${OM}`
                }(iM[0], iM[1], iM[2], OM))
              },
              children: PM(LM ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, OM)
        })))]
      })
    }
    var xa;
    const va = String(null !== (xa = Dr.Synthesizer.waterPerOp) && void 0 !== xa ? xa : 0);

    function Fa(MM) {
      let {
        ti: rM,
        taught: iM
      } = MM;
      const {
        t: SM
      } = (0, tS.A)(), jM = oa(), [aM, PM] = (0, OM.useState)(null);
      (0, OM.useEffect)((() => {
        null !== aM && iM === aM && PM(null)
      }), [aM, iM]);
      const nM = null !== aM && void 0 !== aM ? aM : iM;
      let QM = SM("buildAFactory2Game:synthPick");
      return null !== nM && (QM = SM("buildAFactory2Game:synthGrows", {
        name: (0, Mj.e)(SM, nM),
        input: (0, Mj.e)(SM, er),
        water: va
      })), (0, Gj.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, Gj.jsx)("div", {
          className: CS()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === nM
          }),
          children: QM
        }), (0, Gj.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: br.map(((MM, iM) => {
            const OM = (0, Mj.e)(SM, MM),
              aM = MM === nM;
            return (0, Gj.jsx)("li", {
              children: (0, Gj.jsx)("button", {
                type: "button",
                className: CS()("Baf2SynthTile", {
                  Selected: aM
                }),
                title: OM,
                "aria-label": OM,
                "aria-pressed": aM,
                onClick: () => {
                  aM || (PM(MM), jM.send(`${tr} ${rM[0]} ${rM[1]} ${rM[2]} ${iM}`))
                },
                children: (0, Gj.jsx)(uS.b, {
                  itemName: MM,
                  amount: 0
                })
              })
            }, MM)
          }))
        })]
      })
    }
    const Ba = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function Xa(MM) {
      let {
        kind: rM,
        tier: iM,
        coupled: OM,
        level: SM,
        slot: jM
      } = MM;
      const {
        t: aM
      } = (0, tS.A)(), nM = qM(Zr);
      if (!OM && null !== iM && iM < nM) return (0, Gj.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, Gj.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, Gj.jsx)(gS.b, {
            name: "lock"
          })
        }), (0, Gj.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: aM("buildAFactory2Game:upgradeLocked")
        }), (0, Gj.jsx)("span", {
          className: "Baf2TierTag",
          children: aM("buildAFactory2Game:tierTag", {
            tier: String(nM)
          })
        })]
      });
      const QM = function(MM, rM) {
          if (PM() && "Crusher" !== MM && null !== rM) {
            if (Ia(fr, rM)) return {
              item: fr,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (Ia(or, rM)) return {
              item: or,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: Zr,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(rM, iM),
        zM = aM(OM ? Ba[SM - 1] : QM.emptyKey),
        LM = null !== iM ? function(MM, rM, iM, OM) {
          if (!PM() || !iM || "Crusher" === MM || rM < 10) return null;
          const SM = qM(fr);
          if (OM < 3 && SM > 1 && (2 === OM || rM >= SM)) return {
            tier: SM,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const jM = qM(or);
          if (1 === OM && jM > 1) return {
            tier: jM,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(rM, iM, OM, SM) : null;
      return (0, Gj.jsxs)("div", {
        className: CS()("Baf2UpgradeSocket", {
          Fitted: OM
        }),
        children: [(0, Gj.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [OM && jM, !OM && (0, Gj.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, Gj.jsx)(uS.b, {
              itemName: QM.item,
              amount: 0
            })
          })]
        }), (0, Gj.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, Gj.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: aM("buildAFactory2Game:upgradeTitle")
          }), (0, Gj.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: zM
          }), OM && SM >= 2 && "Crusher" === rM && (0, Gj.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: aM("buildAFactory2Game:couplerCrusherHint")
          }), LM && null !== iM && iM < LM.tier && (0, Gj.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, Gj.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, Gj.jsx)(gS.b, {
                name: "lock"
              })
            }), aM(LM.lockedKey), (0, Gj.jsx)("span", {
              className: "Baf2TierTag",
              children: aM("buildAFactory2Game:tierTag", {
                tier: String(LM.tier)
              })
            })]
          }), LM && null !== iM && iM >= LM.tier && (0, Gj.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: aM(LM.nextKey)
          })]
        })]
      })
    }

    function Ia(MM, rM) {
      const iM = qM(MM);
      return iM > 1 && rM >= iM
    }
    var Ka = iM(37975);
    const qa = (0, VM.P)(Dr.Condenser, Dr.Condenser.fluidMade),
      Ta = .05;
    class Va extends Ea {}

    function ca(MM) {
      return hj(MM, "")
    }

    function MP(MM, rM, iM) {
      return MM(rM ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: iM
      })
    }

    function rP(MM, rM, iM, OM) {
      return iM <= Ta && OM <= Ta ? null : OM <= Ta || iM <= Ta ? MP(MM, rM, OM <= Ta ? hj(iM, "+") : hj(OM, "\u2212")) : MM(rM ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: ca(iM),
        used: ca(OM)
      })
    }

    function iP(MM, rM) {
      return Math.min(100, 100 * MM / Math.max(1, rM))
    }

    function OP(MM) {
      let {
        stored: rM,
        cap: iM,
        netPerS: OM,
        rates: SM,
        cryo: jM
      } = MM;
      const {
        t: aM
      } = (0, tS.A)(), PM = function(MM, rM, iM, OM) {
        return iM <= 0 ? MM("buildAFactory2Game:waterNoStorage") : rM >= iM ? MM("buildAFactory2Game:powerFull") : OM > Ta ? MM("buildAFactory2Game:powerFullIn", {
          time: yj(MM, (iM - rM) / OM)
        }) : OM < -.05 ? rM <= 0 ? MM("buildAFactory2Game:waterEmpty") : MM("buildAFactory2Game:powerEmptyIn", {
          time: yj(MM, rM / -OM)
        }) : MM("buildAFactory2Game:powerSteady")
      }(aM, rM, iM, OM), nM = iM > 0 && rM < iM && Math.abs(OM) <= Ta, QM = aM(jM ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), zM = null !== SM ? `${SM} \xb7 ${PM}` : nM ? QM : `${QM} \xb7 ${PM}`;
      return (0, Gj.jsxs)(Gj.Fragment, {
        children: [(0, Gj.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, Gj.jsx)("div", {
            style: {
              width: `${iP(rM,iM)}%`
            }
          })
        }), (0, Gj.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, Gj.jsx)("span", {
            children: iM > 0 && aM("buildAFactory2Game:powerStored", {
              stored: (0, VM.X)(rM),
              cap: (0, VM.X)(iM)
            })
          }), (0, Gj.jsx)("span", {
            className: CS()("Baf2WaterNet", {
              Draining: OM < -.05
            }),
            children: zM
          })]
        })]
      })
    }

    function SP(MM) {
      let {
        water: rM,
        at: iM,
        side: OM = null
      } = MM;
      const {
        t: SM
      } = (0, tS.A)(), jM = oa(), [aM, PM, nM] = rM;
      return (0, Gj.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, Gj.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, Gj.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: SM(null === OM ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${OM}`)
          }), (0, Gj.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              jM.send(`${VM.J} ${iM[0]} ${iM[1]} ${iM[2]}${"cryoOut"===OM?" cryo":""}`)
            },
            children: SM("buildAFactory2Game:waterDetails")
          })]
        }), (0, Gj.jsx)(OP, {
          stored: aM,
          cap: PM,
          netPerS: nM,
          rates: MP(SM, "cryoOut" === OM, hj(Math.abs(nM), nM < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === OM
        })]
      })
    }

    function jP(MM, rM) {
      var iM, OM, SM;
      const jM = !0 === rM.baf2WaterCryo,
        aM = null !== (iM = null === (OM = rM.baf2WaterMakers.find((MM => MM[0] === (jM ? VM.d : "Condenser")))) || void 0 === OM ? void 0 : OM[1]) && void 0 !== iM ? iM : 0,
        PM = [],
        nM = (rM, iM, OM) => {
          rM > 0 && PM.push(MM(1 === rM ? iM : OM, {
            count: String(rM)
          }))
        };
      return jM ? nM(aM, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : nM(aM, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), nM(null !== (SM = rM.baf2WaterPipes) && void 0 !== SM ? SM : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), nM(rM.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), PM.join(" \xb7 ")
    }

    function aP(MM, rM) {
      if (!0 === rM.baf2WaterCryo) return function(MM, rM) {
        const iM = Dr[VM.d];
        switch (rM.baf2WaterThis) {
          case "pipe":
            return {
              text: MM("buildAFactory2Game:cryoThisPipe"), bad: !1
            };
          case "condenserFull":
            return {
              text: MM("buildAFactory2Game:cryoThisMixerFull"), bad: !1
            };
          case "condenserNoPower":
            return {
              text: MM("buildAFactory2Game:cryoThisMixerNoPower"), bad: !0
            };
          case "condenserNoOutlet":
            return {
              text: MM("buildAFactory2Game:cryoThisMixerNoOutlet"), bad: !0
            };
          case "mixerNoInput":
            return {
              text: MM("buildAFactory2Game:cryoThisMixerNoInput"), bad: !0
            };
          case "mixerBadInput":
            return {
              text: MM("buildAFactory2Game:cryoThisMixerBadInput"), bad: !0
            };
          case "mixerNoWater":
            return {
              text: MM("buildAFactory2Game:cryoThisMixerNoWater"), bad: !0
            };
          case "condenser": {
            var OM;
            const [SM, jM] = null !== (OM = rM.baf2WaterThisRates) && void 0 !== OM ? OM : [(0, VM.P)(iM, iM.cryoMade), (0, VM.P)(iM, iM.powerPerOp)];
            return !0 === rM.baf2WaterDriven ? {
              text: MM("buildAFactory2Game:cryoThisMixerDriven", {
                rate: ca(SM)
              }),
              bad: !1
            } : {
              text: MM("buildAFactory2Game:cryoThisMixer", {
                rate: ca(SM),
                power: ca(jM)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: MM("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(MM, rM);
      const iM = !0 === rM.baf2WaterDriven,
        OM = Dr.Condenser;
      switch (rM.baf2WaterThis) {
        case "pipe":
          return {
            text: MM("buildAFactory2Game:waterThisPipe"), bad: !1
          };
        case "condenserFull":
          return {
            text: MM("buildAFactory2Game:waterThisCondenserFull"), bad: !1
          };
        case "condenserNoPower":
          return {
            text: MM("buildAFactory2Game:waterThisCondenserNoPower"), bad: !0
          };
        case "condenserNoOutlet":
          return {
            text: MM("buildAFactory2Game:waterThisCondenserNoOutlet"), bad: !0
          };
        case "tank":
          return {
            text: MM("buildAFactory2Game:waterThisTank", {
              tank: (0, VM.X)(VM.y),
              cap: (0, VM.X)(rM.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var SM;
          const [jM, aM] = null !== (SM = rM.baf2WaterThisRates) && void 0 !== SM ? SM : [qa, (0, VM.P)(OM, OM.powerPerOp)];
          return iM ? {
            text: MM("buildAFactory2Game:waterThisCondenserDriven", {
              rate: ca(jM)
            }),
            bad: !1
          } : {
            text: MM("buildAFactory2Game:waterThisCondenser", {
              rate: ca(jM),
              power: ca(aM)
            }),
            bad: !1
          }
        }
        default:
          return {
            text: MM("buildAFactory2Game:waterThisUser"), bad: !1
          }
      }
    }

    function PP(MM, rM) {
      const iM = rM.baf2WaterMakers.some((MM => !0 === MM[5]));
      if (!0 === rM.baf2WaterCryo) {
        const OM = rM.baf2WaterUsedPerS - rM.baf2WaterMadePerS,
          SM = iM || OM <= Ta ? 0 : (0, VM.L)(OM);
        return 0 === SM ? null : SM > 1 ? MM("buildAFactory2Game:cryoNextMixers", {
          mixers: String(SM)
        }) : MM("buildAFactory2Game:cryoNextOne")
      }
      const OM = iM ? null : function(MM, rM) {
        const iM = rM - MM;
        return iM <= Ta ? null : Math.ceil(iM / qa)
      }(rM.baf2WaterMadePerS, rM.baf2WaterUsedPerS);
      return null === OM ? null : OM > 1 ? MM("buildAFactory2Game:waterNextCondensers", {
        condensers: String(OM)
      }) : MM("buildAFactory2Game:waterNextOne")
    }

    function nP(MM) {
      let {
        item: rM,
        label: iM,
        note: OM,
        value: SM,
        dim: jM,
        bad: aM
      } = MM;
      return (0, Gj.jsxs)("li", {
        className: CS()("Baf2WaterRow", {
          Dim: jM,
          Bad: aM
        }),
        children: [(0, Gj.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, Gj.jsx)(uS.b, {
            itemName: rM,
            amount: 0
          })
        }), (0, Gj.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, Gj.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: iM
          }), OM && (0, Gj.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: OM
          })]
        }), (0, Gj.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: SM
        })]
      })
    }

    function QP(MM) {
      return Ka.k[MM] ? MM : "Reactor Port"
    }

    function zP(MM) {
      let {
        message: rM
      } = MM;
      const {
        t: iM
      } = (0, tS.A)(), OM = !0 === rM.baf2WaterCryo, SM = (MM, rM) => MP(iM, OM, hj(MM, rM));
      return (0, Gj.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, Gj.jsxs)("section", {
          children: [(0, Gj.jsxs)("h3", {
            children: [iM("buildAFactory2Game:waterMakes"), (0, Gj.jsx)("span", {
              children: SM(rM.baf2WaterMadePerS, "+")
            })]
          }), (0, Gj.jsxs)("ul", {
            children: [0 === rM.baf2WaterMakers.length && (0, Gj.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: iM(OM ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), rM.baf2WaterMakers.map((MM => {
              let [rM, OM, jM, aM, PM, nM] = MM;
              const QM = iM("buildAFactory2Game:powerRunning", {
                amount: String(jM)
              });
              let zM = PM > 0 ? iM("buildAFactory2Game:waterMakerPower", {
                running: QM,
                power: ca(PM)
              }) : QM;
              return nM && (zM = iM(0 === jM && aM <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, Gj.jsx)(nP, {
                item: rM,
                label: `${(0,Mj.e)(iM,rM)} \xd7${OM}`,
                note: zM,
                value: jM > 0 || nM && aM > 0 ? SM(aM, "+") : iM("buildAFactory2Game:powerIdle"),
                dim: 0 === jM && !nM,
                bad: nM
              }, rM)
            }))]
          })]
        }), (0, Gj.jsxs)("section", {
          children: [(0, Gj.jsxs)("h3", {
            children: [iM("buildAFactory2Game:waterUses"), (0, Gj.jsx)("span", {
              children: SM(rM.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, Gj.jsxs)("ul", {
            children: [0 === rM.baf2WaterUsers.length && (0, Gj.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: iM(OM ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), rM.baf2WaterUsers.map((MM => {
              let [rM, OM, jM, aM] = MM;
              const PM = Ka.k[rM] ? (0, Mj.e)(iM, rM) : rM;
              return (0, Gj.jsx)(nP, {
                item: QP(rM),
                label: OM > 1 ? `${PM} \xd7${OM}` : PM,
                note: aM ? iM("buildAFactory2Game:waterPortFirst") : void 0,
                value: jM > 0 ? SM(jM, "\u2212") : iM("buildAFactory2Game:powerIdle"),
                dim: 0 === jM
              }, rM)
            }))]
          })]
        })]
      })
    }

    function LP(MM) {
      var rM, iM, SM, jM, aM;
      let {
        store: PM,
        close: nM
      } = MM;
      const {
        t: QM
      } = (0, tS.A)(), zM = function(MM) {
        const [rM, iM] = (0, OM.useState)((() => MM.get()));
        return (0, OM.useEffect)((() => (iM(MM.get()), MM.subscribe((() => {
          iM(MM.get())
        })))), [MM]), rM
      }(PM), LM = null !== (rM = null === zM || void 0 === zM ? void 0 : zM.baf2WaterStored) && void 0 !== rM ? rM : 0, mM = null !== (iM = null === zM || void 0 === zM ? void 0 : zM.baf2WaterCap) && void 0 !== iM ? iM : 0, HM = null !== (SM = null === zM || void 0 === zM ? void 0 : zM.baf2WaterMadePerS) && void 0 !== SM ? SM : 0, hM = null !== (jM = null === zM || void 0 === zM ? void 0 : zM.baf2WaterUsedPerS) && void 0 !== jM ? jM : 0, JM = null !== (aM = null === zM || void 0 === zM ? void 0 : zM.baf2WaterNetPerS) && void 0 !== aM ? aM : HM - hM, dM = zM && aP(QM, zM), yM = zM && PP(QM, zM), lM = !0 === (null === zM || void 0 === zM ? void 0 : zM.baf2WaterCryo);
      return (0, Gj.jsx)(ya.e, {
        close: nM,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Gj.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, Gj.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Gj.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== zM && mM <= 0 ? (0, Gj.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, Gj.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, Gj.jsx)(uS.b, {
                  itemName: lM ? Ji.h : VM.o,
                  amount: 0
                })
              }), (0, Gj.jsxs)("div", {
                children: [(0, Gj.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: QM(lM ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), zM && (0, Gj.jsx)("p", {
                  children: jP(QM, zM)
                })]
              })]
            }), (0, Gj.jsx)(la.l, {
              onClick: nM
            })]
          }), zM && dM && (0, Gj.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, Gj.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, Gj.jsx)(OP, {
                stored: LM,
                cap: mM,
                netPerS: JM,
                cryo: lM,
                rates: rP(QM, lM, HM, hM)
              })
            }), (0, Gj.jsx)("div", {
              className: CS()("Baf2WaterThis", {
                Bad: dM.bad
              }),
              children: dM.text
            }), zM.baf2WaterDriven && (0, Gj.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, Gj.jsx)(gS.b, {
                name: "bolt"
              }), QM(lM ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), yM && (0, Gj.jsx)("p", {
              className: "Baf2WaterNext",
              children: yM
            }), (0, Gj.jsx)(zP, {
              message: zM
            })]
          })]
        })
      })
    }
    class mP {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(MM, rM) {
        const iM = this.get(MM);
        iM && null === rM.opLeftMs && null === rM.fuelLeftMs && rM.status === iM.status ? rM = {
          ...rM,
          opLeftMs: iM.opLeftMs,
          fuelLeftMs: iM.fuelLeftMs,
          burning: iM.burning
        } : this.updates++, this.pos = MM, this.view = rM;
        for (const OM of this.listeners) OM()
      }
      get(MM) {
        return null !== this.pos && this.pos[0] === MM[0] && this.pos[1] === MM[1] && this.pos[2] === MM[2] ? this.view : null
      }
      forget(MM) {
        null !== this.get(MM) && (this.pos = null, this.view = null)
      }
      get updateCount() {
        return this.updates
      }
      subscribe(MM) {
        return this.listeners.add(MM), () => {
          this.listeners.delete(MM)
        }
      }
    }

    function HP(MM, rM, iM, OM) {
      return "noFuel" === rM && OM && !Si(Dr[MM]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === rM && !0 === (null === iM || void 0 === iM ? void 0 : iM.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === rM && !0 === (null === iM || void 0 === iM ? void 0 : iM.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === rM && !0 === (null === iM || void 0 === iM ? void 0 : iM.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === rM && !0 === (null === iM || void 0 === iM ? void 0 : iM.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : hP(rM, iM) ? "buildAFactory2Game:machineStatus_noInputShort" : function(MM, rM) {
        const iM = Dr[MM];
        if ("noFuel" === rM && void 0 !== iM.fuels) return Si(iM) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (iM.mobFarm && ("noInput" === rM || "badInput" === rM)) return `buildAFactory2Game:machineStatus_${rM}MobFarm`;
        if ("outputFull" === rM && (void 0 !== iM.table || iM.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === rM && Xr(iM)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== iM.cryoMade && ("noInput" === rM || "noOutlet" === rM || "fluidFull" === rM)) return `buildAFactory2Game:machineStatus_${rM}Mixer`;
        return `buildAFactory2Game:machineStatus_${rM}`
      }(MM, rM)
    }

    function hP(MM, rM) {
      return "noInput" === MM && null !== rM && void 0 !== rM && rM.input && rM.inputShort ? {
        input: rM.input,
        short: rM.inputShort
      } : null
    }

    function JP(MM) {
      return eS(MM) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== MM.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function dP(MM) {
      const rM = (0, DM.me)(MM);
      return `Baf2Pane Baf2Pane${rM.charAt(0).toUpperCase()}${rM.slice(1)}`
    }

    function yP(MM, rM) {
      const [iM, SM] = (0, OM.useState)((() => MM.get(rM)));
      return (0, OM.useEffect)((() => {
        SM(MM.get(rM));
        const iM = MM.subscribe((() => {
          SM(MM.get(rM))
        }));
        return () => {
          iM(), MM.forget(rM)
        }
      }), [MM, ...rM]), iM
    }

    function lP(MM, rM, iM, OM) {
      const SM = Dr[MM],
        jM = rM && SM.couplable ? xr(SM, iM) : SM,
        aM = null !== OM && ri(jM) ? function(MM, rM) {
          var iM;
          return null !== (iM = null !== rM && ri(MM) ? Pi[rM] : void 0) && void 0 !== iM ? iM : MM.opMs
        }(jM, ni(OM)) : jM.opMs;
      return aM === jM.opMs ? jM : {
        ...jM,
        opMs: aM
      }
    }

    function EP(MM) {
      let {
        running: rM,
        opMs: iM,
        opLeftMs: OM,
        updateCount: SM
      } = MM;
      return (0, Gj.jsx)("div", {
        className: CS()("Baf2MachineProgress", {
          Running: rM
        }),
        children: (0, Gj.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: iM / 1e3 + "s",
            animationDelay: null === OM ? void 0 : (OM - iM) / 1e3 + "s"
          }
        }, SM)
      })
    }

    function UP(MM) {
      let {
        running: rM,
        leftMs: iM,
        periodMs: OM,
        updateCount: SM
      } = MM;
      const {
        t: jM
      } = (0, tS.A)(), aM = Math.min(Math.max(null !== iM && void 0 !== iM ? iM : 0, 0), OM), PM = rM && aM > 0, nM = jM("buildAFactory2Game:machineBarFuel");
      return (0, Gj.jsx)("div", {
        className: CS()("Baf2FuelBurn", {
          Draining: PM
        }),
        role: "img",
        title: nM,
        "aria-label": nM,
        children: (0, Gj.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: PM ? {
            animationDuration: OM / 1e3 + "s",
            animationDelay: (aM - OM) / 1e3 + "s"
          } : {
            transform: `scaleY(${aM/OM})`
          }
        }, SM)
      })
    }

    function GP(MM, rM, iM) {
      let [OM, SM] = iM;
      const jM = 1 !== OM ? wS(rM) : null;
      return {
        amount: OM,
        have: SM,
        item: MM(jM || (0, Mj.d)(rM))
      }
    }

    function CP(MM) {
      return ri(MM) ? "buildAFactory2Game:machineBarMining" : ii(MM) ? "buildAFactory2Game:machineBarCutting" : void 0 !== MM.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function eP(MM) {
      var rM, iM, OM, SM, jM, aM, PM, nM, QM, zM, LM, mM, HM, hM, JM, dM, yM, lM, EM;
      let {
        kind: UM,
        ti: GM,
        store: CM,
        power: eM,
        renderSlot: bM
      } = MM;
      const {
        t: wM
      } = (0, tS.A)(), tM = yP(CM, GM), gM = Dr[UM], uM = null !== (rM = null === tM || void 0 === tM ? void 0 : tM.coupled) && void 0 !== rM && rM, RM = null !== (iM = null === tM || void 0 === tM ? void 0 : tM.couplerLevel) && void 0 !== iM ? iM : 1, pM = lP(UM, uM, RM, null !== (OM = null === tM || void 0 === tM || null === (SM = tM.dug) || void 0 === SM ? void 0 : SM.item) && void 0 !== OM ? OM : null), WM = null !== (jM = null === tM || void 0 === tM ? void 0 : tM.status) && void 0 !== jM ? jM : null, sM = null !== (aM = null === tM || void 0 === tM ? void 0 : tM.power) && void 0 !== aM ? aM : null, DM = null !== (PM = null === tM || void 0 === tM ? void 0 : tM.opLeftMs) && void 0 !== PM ? PM : null, kM = null !== (nM = null === tM || void 0 === tM ? void 0 : tM.dug) && void 0 !== nM ? nM : null, ZM = null !== kM && ri(gM) ? Pi[null !== (QM = ni(kM.item)) && void 0 !== QM ? QM : ""] : void 0, oM = void 0 === ZM ? null : 6e4 / ZM, fM = null !== (zM = null === tM || void 0 === tM ? void 0 : tM.powerCap) && void 0 !== zM ? zM : 4e3, YM = null !== (LM = null === tM || void 0 === tM ? void 0 : tM.tier) && void 0 !== LM ? LM : null, NM = void 0 !== pM.powerMade, AM = null !== gM.fuelSlot ? bM(gM.fuelSlot) : null, xM = Ar(gM), vM = !uM && !0 === (null === tM || void 0 === tM ? void 0 : tM.fuelFed), BM = !uM && !0 === (null === tM || void 0 === tM ? void 0 : tM.fuelFeeds), XM = null !== gM.fuelSlot && !uM, IM = null !== (mM = null === tM || void 0 === tM ? void 0 : tM.fuelLeftMs) && void 0 !== mM ? mM : null, KM = function(MM, rM, iM) {
        var OM;
        const SM = null === rM ? void 0 : ji[rM];
        return Math.max(null !== (OM = null !== SM && void 0 !== SM ? SM : iM) && void 0 !== OM ? OM : 0, MM.opMs)
      }(pM, null !== (HM = null === tM || void 0 === tM ? void 0 : tM.burning) && void 0 !== HM ? HM : null, IM), qM = null !== (hM = null === tM || void 0 === tM ? void 0 : tM.fuelKeep) && void 0 !== hM ? hM : null, TM = null === WM ? null : HP(UM, WM, tM, vM), VM = null === WM ? null : hP(WM, tM);
      return (0, Gj.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, Gj.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, Gj.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: wM((0, Mj.d)(UM))
          }), kM && (0, Gj.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [wM("Tree Cutter" === UM ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, Gj.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, Gj.jsx)(uS.b, {
                itemName: kM.item,
                amount: 0
              })
            }), (0, Gj.jsx)(RS.b, {
              text: kM.name
            })]
          }), null !== oM && (0, Gj.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: wM("buildAFactory2Game:machineDigsFixed", {
              perMin: String(oM)
            })
          }), (null === tM || void 0 === tM ? void 0 : tM.field) && (0, Gj.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, Gj.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, Gj.jsx)(uS.b, {
                itemName: "Wheat",
                amount: 0
              })
            }), wM("buildAFactory2Game:machineField", {
              planted: String(tM.field[0]),
              ripe: String(tM.field[1])
            })]
          }), (0, Gj.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, Gj.jsxs)("div", {
              className: CS()("Baf2MachineColumn", {
                Baf2Burns: XM
              }),
              children: [null !== pM.inputSlot && (0, Gj.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, Gj.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: wM(JP(pM))
                }), bM(pM.inputSlot)]
              }), null !== gM.fuelSlot && !uM && (0, Gj.jsxs)("div", {
                className: CS()("Baf2MachineSlot", {
                  Baf2FuelFed: vM
                }),
                children: [(0, Gj.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [vM && (0, Gj.jsx)(gS.b, {
                    name: "fire"
                  }), wM("buildAFactory2Game:machineFuel")]
                }), (0, Gj.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, Gj.jsx)(UP, {
                    running: "running" === WM,
                    leftMs: IM,
                    periodMs: KM,
                    updateCount: CM.updateCount
                  }), AM]
                })]
              }), null !== gM.fuelSlot && uM && (0, Gj.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, Gj.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: wM("buildAFactory2Game:machineFuel")
                }), (0, Gj.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: wM("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": wM("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, Gj.jsx)(gS.b, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, Gj.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, Gj.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: wM(CP(pM))
              }), (0, Gj.jsx)(EP, {
                running: "running" === WM,
                opMs: pM.opMs,
                opLeftMs: DM,
                updateCount: CM.updateCount
              })]
            }), pM.outputSlots.length > 0 && (0, Gj.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, Gj.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: wM("buildAFactory2Game:machineOutput")
              }), (0, Gj.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: pM.outputSlots.map((MM => (0, Gj.jsx)("div", {
                  children: bM(MM)
                }, MM)))
              })]
            }), null !== sM && NM && (0, Gj.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, Gj.jsx)("div", {
                style: {
                  height: 100 * sM / fM + "%"
                }
              })
            })]
          }), XM && null !== qM && (0, Gj.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, Gj.jsx)(gS.b, {
              name: "arrows-rotate"
            }), wM(ii(pM) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(qM)
            })]
          }), (vM || BM) && (0, Gj.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, Gj.jsx)(gS.b, {
              name: "fire"
            }), wM(vM ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), gM.couplable && (0, Gj.jsx)(Xa, {
            kind: UM,
            tier: YM,
            coupled: uM,
            level: RM,
            slot: xM === gM.fuelSlot ? AM : null !== xM ? bM(xM) : null
          }), null !== sM && !NM && !0 === (null === tM || void 0 === tM ? void 0 : tM.reactorPowered) && (0, Gj.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: wM("buildAFactory2Game:machineReactorPowered")
          }), null !== sM && !NM && !0 !== (null === tM || void 0 === tM ? void 0 : tM.reactorPowered) && (0, Gj.jsx)(wa, {
            stored: sM,
            cap: fM,
            rates: null !== (JM = null === tM || void 0 === tM ? void 0 : tM.powerRates) && void 0 !== JM ? JM : null
          }), (null === tM || void 0 === tM ? void 0 : tM.water) && (0, Gj.jsx)(SP, {
            water: tM.water,
            at: GM,
            side: tM.cryo ? "waterIn" : null
          }), (null === tM || void 0 === tM ? void 0 : tM.cryo) && (0, Gj.jsx)(SP, {
            water: tM.cryo,
            at: GM,
            side: "cryoOut"
          }), null !== tM && void 0 !== tM && tM.inertCoupler ? (0, Gj.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: wM("buildAFactory2Game:machineStatus_couplerOff", {
              item: (0, Mj.e)(wM, tM.inertCoupler)
            })
          }) : null !== TM && (0, Gj.jsx)("div", {
            className: CS()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== WM
            }),
            children: wM(TM, VM ? GP(wM, VM.input, VM.short) : void 0)
          })]
        }), (0, Gj.jsxs)("div", {
          className: CS()("Baf2MachineSide", {
            Baf2SynthSide: Xr(gM)
          }),
          children: [Xr(gM) && (0, Gj.jsx)(Fa, {
            ti: GM,
            taught: null !== (dM = null === tM || void 0 === tM ? void 0 : tM.taught) && void 0 !== dM ? dM : null
          }, GM.join(",")), NM && (0, Gj.jsx)(ga, {
            kind: UM,
            def: pM,
            ti: GM,
            power: eM,
            stored: null !== sM && void 0 !== sM ? sM : 0,
            cap: fM
          }), FM(gM) && (0, Gj.jsx)(Aa, {
            ti: GM,
            input: null !== (yM = null === tM || void 0 === tM ? void 0 : tM.input) && void 0 !== yM ? yM : null,
            drops: null !== (lM = null === tM || void 0 === tM ? void 0 : tM.farm) && void 0 !== lM ? lM : null,
            seconds: String(pM.opMs / 1e3)
          }), !NM && !FM(gM) && !Xr(gM) && (0, Gj.jsx)(cj, {
            kind: UM,
            def: pM,
            input: null !== (EM = null === tM || void 0 === tM ? void 0 : tM.input) && void 0 !== EM ? EM : null,
            tier: null !== YM && void 0 !== YM ? YM : 1,
            noSeeds: !0 === (null === tM || void 0 === tM ? void 0 : tM.noSeeds)
          })]
        })]
      })
    }

    function bP(MM, rM, iM, OM) {
      var SM;
      const jM = Dr[MM],
        aM = [jM.inputSlot, jM.fuelSlot, ...null !== (SM = jM.inputSlots) && void 0 !== SM ? SM : []].filter((MM => null !== MM));
      return {
        render: SM => {
          let {
            ti: jM,
            renderSlot: aM
          } = SM;
          return (0, Gj.jsx)(Za.Provider, {
            value: OM,
            children: (0, Gj.jsx)(eP, {
              kind: MM,
              ti: jM,
              store: rM,
              power: iM,
              renderSlot: aM
            })
          })
        },
        quickMoveRange: aM.length > 0 ? [Math.min(...aM), Math.max(...aM) + 1] : [0, 0],
        className: dP(MM)
      }
    }
    const wP = "Assembler";

    function tP(MM) {
      var rM, iM, OM, SM, jM, aM, PM, nM, QM;
      let {
        ti: zM,
        store: LM,
        renderSlot: mM
      } = MM;
      const {
        t: HM
      } = (0, tS.A)(), hM = yP(LM, zM), JM = null !== (rM = null === hM || void 0 === hM ? void 0 : hM.tier) && void 0 !== rM ? rM : 1, dM = null !== (iM = null === hM || void 0 === hM ? void 0 : hM.taught) && void 0 !== iM ? iM : null, yM = Tr(wP, {
        coupled: !1,
        taught: dM
      }), lM = null !== (OM = yM.bench) && void 0 !== OM ? OM : null, EM = null !== (SM = null === hM || void 0 === hM ? void 0 : hM.status) && void 0 !== SM ? SM : null, UM = null !== (jM = null === hM || void 0 === hM ? void 0 : hM.power) && void 0 !== jM ? jM : null, GM = null !== (aM = null === hM || void 0 === hM ? void 0 : hM.powerCap) && void 0 !== aM ? aM : 4e3;
      return (0, Gj.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, Gj.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, Gj.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: HM((0, Mj.d)(wP))
          }), lM && (0, Gj.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [HM("buildAFactory2Game:benchMakes"), (0, Gj.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, Gj.jsx)(uS.b, {
                itemName: lM.output,
                amount: 0
              })
            }), (null === hM || void 0 === hM ? void 0 : hM.taughtName) && (0, Gj.jsx)(RS.b, {
              text: hM.taughtName
            }), lM.outputAmount > 1 && (0, Gj.jsxs)("span", {
              children: ["\xd7", lM.outputAmount]
            })]
          }), !lM && (0, Gj.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: HM("buildAFactory2Game:benchTeachHint")
          }), (0, Gj.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, Gj.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (PM = yM.inputSlots) && void 0 !== PM ? PM : []).map(((MM, rM) => {
                const iM = null === lM || void 0 === lM ? void 0 : lM.inputs[rM];
                return (0, Gj.jsxs)("div", {
                  className: CS()("Baf2BenchInput", {
                    Spare: !iM
                  }),
                  children: [(0, Gj.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [mM(MM), iM && (0, Gj.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, Gj.jsx)(uS.b, {
                        itemName: iM.item,
                        amount: 0
                      })
                    })]
                  }), (0, Gj.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: iM ? `\xd7${iM.amount}` : "\xa0"
                  })]
                }, MM)
              }))
            }), (0, Gj.jsx)(EP, {
              running: "running" === EM,
              opMs: yM.opMs,
              opLeftMs: null !== (nM = null === hM || void 0 === hM ? void 0 : hM.opLeftMs) && void 0 !== nM ? nM : null,
              updateCount: LM.updateCount
            }), (0, Gj.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, Gj.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: HM("buildAFactory2Game:machineOutput")
              }), (0, Gj.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: yM.outputSlots.map((MM => (0, Gj.jsx)("div", {
                  children: mM(MM)
                }, MM)))
              })]
            })]
          }), null !== UM && (0, Gj.jsx)(wa, {
            stored: UM,
            cap: GM,
            rates: null !== (QM = null === hM || void 0 === hM ? void 0 : hM.powerRates) && void 0 !== QM ? QM : null
          }), null !== EM && (0, Gj.jsx)("div", {
            className: CS()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== EM
            }),
            children: HM(HP(wP, EM, hM, !1))
          }), lM && lM.inputs.length > 1 && (0, Gj.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: HM("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, Gj.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, Gj.jsx)(ra, {
            taught: dM,
            tier: JM
          }), lM && (0, Gj.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: HM("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function gP(MM) {
      var rM;
      const iM = null !== (rM = Dr[wP].inputSlots) && void 0 !== rM ? rM : [];
      return {
        render: rM => {
          let {
            ti: iM,
            renderSlot: OM
          } = rM;
          return (0, Gj.jsx)(tP, {
            ti: iM,
            store: MM,
            renderSlot: OM
          })
        },
        quickMoveRange: [Math.min(...iM), Math.max(...iM) + 1],
        className: dP(wP)
      }
    }
    var uP = iM(83),
      RP = iM(1142),
      pP = iM(4577);
    const WP = 600,
      sP = .5,
      DP = 4,
      kP = 1200,
      ZP = 140,
      oP = 100,
      fP = 32,
      YP = 16,
      NP = 100.5,
      AP = 90,
      xP = 1.5,
      vP = 50;

    function FP(MM) {
      switch (si(MM)) {
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
    const BP = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function XP(MM) {
      const rM = Math.ceil(60 * MM / oP);
      return {
        fuel: Math.max(fP, rM),
        waste: Math.max(YP, rM)
      }
    }

    function IP(MM, rM, iM) {
      const [OM, SM, jM] = [MM - 2, rM - 2, iM - 2];
      return 2 * (OM * SM + SM * jM + jM * OM) * ZP
    }

    function KP(MM, rM, iM) {
      return Math.max(0, MM - 2) * Math.max(0, rM - 2) * Math.max(0, iM - 2)
    }

    function qP(MM, rM) {
      const [iM, OM, SM] = MM, jM = iM * OM * SM, aM = new Float32Array(jM);
      let PM = 0,
        nM = 0,
        QM = 0,
        zM = 0,
        LM = 0;
      const mM = (MM, jM, aM) => MM < 0 || MM >= iM || jM < 0 || jM >= OM || aM < 0 || aM >= SM ? 0 : rM[(jM * SM + aM) * iM + MM];
      for (let dM = 0; dM < OM; dM++)
        for (let MM = 0; MM < SM; MM++)
          for (let OM = 0; OM < iM; OM++) {
            const jM = (dM * SM + MM) * iM + OM,
              HM = rM[jM];
            if (1 === HM) {
              PM++;
              let rM = 0;
              for (const [iM, SM, jM] of BP) {
                const aM = mM(OM + iM, dM + SM, MM + jM);
                1 !== aM && 2 !== aM || rM++
              }
              aM[jM] = WP * (1 + sP * Math.min(rM, DP)), zM += aM[jM]
            } else if (2 === HM) nM++;
            else if (3 === HM) {
              QM++;
              BP.some((rM => {
                let [iM, SM, jM] = rM;
                return 1 === mM(OM + iM, dM + SM, MM + jM)
              })) && (LM += kP)
            }
          }
      const HM = IP(iM + 2, OM + 2, SM + 2),
        hM = Math.min(zM, LM, HM),
        JM = PM > 0 ? zM * oP / PM : 0;
      return {
        rods: PM,
        graphite: nM,
        channels: QM,
        fuelHeat: zM,
        cooling: LM,
        size: HM,
        max: hM,
        vol: jM,
        powerPerUnit: JM,
        pelletsPerMin: JM > 0 ? hM / JM * 60 : 0,
        waterPerS: hM * VM.u,
        rodHeat: aM
      }
    }
    const TP = 0,
      VP = 1,
      cP = 6,
      Mn = 7,
      rn = 8;

    function On(MM, rM) {
      const [iM, OM, SM] = MM, jM = new Uint8Array(iM * OM * SM), aM = (MM, jM, aM) => MM < 0 || MM >= iM || jM < 0 || jM >= OM || aM < 0 || aM >= SM ? 0 : rM[(jM * SM + aM) * iM + MM];
      for (let PM = 0; PM < OM; PM++)
        for (let MM = 0; MM < SM; MM++)
          for (let OM = 0; OM < iM; OM++) {
            const nM = (PM * SM + MM) * iM + OM,
              QM = rM[nM];
            if (1 === QM) {
              let rM = 0;
              for (const [iM, SM, jM] of BP) {
                const nM = aM(OM + iM, PM + SM, MM + jM);
                rM += 1 === nM || 2 === nM ? 1 : 0
              }
              jM[nM] = VP + Math.min(rM, DP)
            } else if (3 === QM) {
              const rM = BP.some((rM => {
                let [iM, SM, jM] = rM;
                return 1 === aM(OM + iM, PM + SM, MM + jM)
              }));
              jM[nM] = rM ? cP : Mn
            } else 2 === QM && (jM[nM] = rn)
          }
      return jM
    }

    function Sn(MM) {
      return MM.fuelHeat <= MM.cooling && MM.fuelHeat <= MM.size ? "fuel" : MM.cooling <= MM.size ? "cooling" : "size"
    }
    const jn = AP;

    function an(MM, rM, iM) {
      return Math.round(MM * rM * iM * 25e3 * (1 + .25 * (Math.min(MM, rM, iM) - 2)))
    }

    function Pn(MM) {
      return Math.max(0, Math.min(VM.h, MM))
    }

    function nn(MM, rM, iM) {
      const OM = rM * Pn(iM);
      return MM <= 0 ? 0 : OM > 0 ? Math.min(200, 100 * MM / OM) : 200
    }

    function Qn(MM, rM) {
      const iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? xP : 1;
      return Math.min(MM.fuelHeat * iM, MM.cooling * Pn(rM), MM.size * iM)
    }

    function zn(MM) {
      return 2 + MM / 10
    }
    const Ln = "buildAFactory2Game:";

    function mn(MM) {
      var rM;
      return null !== (rM = MM.baf2RxMood) && void 0 !== rM ? rM : function(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const iM = [
          ["calm", 50],
          ["warm", jn],
          ["hot", NP]
        ];
        for (const [OM, SM] of iM)
          if (MM < SM + (OM === rM ? 3 : 0)) return OM;
        return "alarm"
      }(MM.baf2RxHeat)
    }
    const Hn = 120;

    function hn(MM) {
      const rM = MM.baf2RxState;
      if ("running" === rM && MM.baf2RxHeat > NP) return {
        label: `${Ln}rxState_tooHot`,
        tone: "bad",
        fix: `${Ln}rxFix_tooHot`
      };
      switch (rM) {
        case "running":
          return {
            label: `${Ln}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${Ln}rxState_idle`, tone: "off", fix: `${Ln}rxFix_idle`
          };
        case "scram":
          return {
            label: `${Ln}rxState_scram`, tone: "off", fix: MM.baf2RxHeat < vP ? `${Ln}rxFix_scramCool` : `${Ln}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${Ln}rxState_${rM}`, tone: "off", fix: `${Ln}rxFix_${rM}`
          };
        case "melted":
          return {
            label: `${Ln}rxState_melted`, tone: "bad", fix: `${Ln}rxFix_melted`
          };
        default:
          return {
            label: `${Ln}rxState_${rM}`, tone: "warn", fix: `${Ln}rxFix_${rM}`
          }
      }
    }

    function Jn(MM) {
      const [rM, iM, OM] = MM.baf2RxStats;
      return {
        fuelHeat: rM,
        cooling: iM * (MM.baf2RxCryo ? Math.max(1, Pn(MM.baf2RxWater / 100)) : 1),
        size: OM
      }
    }

    function dn(MM) {
      var rM;
      const iM = "idle" === MM.baf2RxState || "running" === MM.baf2RxState && MM.baf2RxHeat <= NP || "scram" === MM.baf2RxState && MM.baf2RxHeat < vP;
      if (0 === (MM.baf2RxFlags & Ur) || !MM.baf2RxFormed || !iM) return null;
      const {
        fuelHeat: OM,
        cooling: SM,
        size: jM
      } = Jn(MM), aM = Math.min(OM, SM, jM), PM = Sn({
        fuelHeat: OM,
        cooling: SM,
        size: jM
      }), nM = "cooling" === PM && !0 === MM.baf2RxCryoOpen && !MM.baf2RxCryo, QM = null !== (rM = MM.baf2RxCells) && void 0 !== rM ? rM : "", zM = ("fuel" === PM || "cooling" === PM && !0 === MM.baf2RxCryo) && QM.length > 0 && !QM.includes(String(0)), LM = nM ? "Cryo" : "scram" === MM.baf2RxState ? "Off" : "";
      return aM < 12e3 ? {
        key: `${Ln}rxGrow_${zM?"full":PM}${LM}`,
        amount: aM
      } : null
    }

    function yn(MM, rM) {
      return MM[0] === rM[0] && MM[1] === rM[1] && MM[2] === rM[2]
    }

    function En(MM) {
      return [...MM].sort(((MM, rM) => Number(rM[2] < rM[1]) - Number(MM[2] < MM[1])))
    }

    function Un(MM, rM) {
      return rM.some((rM => {
        let [iM, OM] = rM;
        return !(OM <= 0) && ["edge", "cap", "wall", "inside"].some((rM => iM === PO(MM, rM)))
      }))
    }

    function Gn(MM, rM, iM) {
      const OM = MM.baf2RxFuel - MM.baf2RxPu > 0 ? iM : 0;
      return {
        full: MM.baf2RxWaste > rM - 3,
        fullInS: OM > 0 ? Math.max(0, rM - MM.baf2RxWaste) / OM : null
      }
    }
    const Cn = {
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

    function en(MM) {
      return bn[MM]
    }
    const bn = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function wn(MM) {
      let [rM, iM, OM] = MM;
      return Math.ceil(IP(rM, iM, OM) * VM.u)
    }

    function tn(MM, rM) {
      return "battery" === MM ? rM[0] * rM[1] * rM[2] : function(MM) {
        let [rM, iM, OM] = MM;
        return rM * iM * OM - Math.max(0, rM - 2) * Math.max(0, iM - 2) * Math.max(0, OM - 2)
      }(rM) - 1
    }

    function gn(MM) {
      const rM = Math.max(0, MM);
      if (rM < 10) return String(Math.round(10 * rM) / 10);
      if (rM < 1e4) return Math.round(rM).toLocaleString("en-US");
      if (rM < 1e6) return `${rM<1e5?(Math.floor(rM/100)/10).toFixed(1):Math.floor(rM/1e3)}k`;
      const iM = rM / 1e6;
      return `${iM<10?(Math.floor(100*iM)/100).toFixed(2):iM<100?(Math.floor(10*iM)/10).toFixed(1):Math.floor(iM)}M`
    }

    function un(MM) {
      return MM <= 0 ? "0" : MM >= 10 ? String(Math.round(MM)) : MM.toFixed(MM >= 1 ? 1 : 2)
    }

    function Rn(MM) {
      const rM = MO(MM, 0),
        iM = MO(MM, qi(MM) - 1);
      return {
        lo: [Math.min(rM[0], iM[0]), Math.min(rM[1], iM[1]), Math.min(rM[2], iM[2])],
        hi: [Math.max(rM[0], iM[0]) + 1, Math.max(rM[1], iM[1]) + 1, Math.max(rM[2], iM[2]) + 1]
      }
    }

    function pn(MM, rM, iM) {
      const OM = [rM[0] - MM[0], rM[1] - MM[1], rM[2] - MM[2]],
        SM = [(MM[0] + rM[0]) / 2, (MM[1] + rM[1]) / 2, (MM[2] + rM[2]) / 2],
        jM = [];
      for (let aM = 0; aM < 3; aM++) {
        const PM = (aM + 1) % 3,
          nM = (aM + 2) % 3;
        for (const QM of [MM[PM], rM[PM]])
          for (const zM of [MM[nM], rM[nM]]) {
            const MM = [0, 0, 0],
              rM = [iM, iM, iM];
            MM[aM] = SM[aM], rM[aM] = OM[aM] + iM, MM[PM] = QM, MM[nM] = zM, jM.push([MM, rM])
          }
      }
      return jM
    }
    const Wn = "buildAFactory2Game:",
      sn = [`${Wn}colNorth`, `${Wn}colEast`, `${Wn}colSouth`, `${Wn}colWest`];

    function Dn(MM, rM) {
      const [iM, OM, SM] = MM.baf2ColAt;
      return `baf2col ${iM} ${OM} ${SM} ${rM}`
    }

    function kn(MM) {
      return function(MM) {
        if (!Number.isFinite(MM)) return "";
        const rM = Math.max(1, Math.round(MM));
        if (rM < 60) return `${rM}s`;
        const iM = rM % 60;
        return 0 === iM ? rM / 60 + "m" : `${Math.floor(rM/60)}m ${iM}s`
      }(function(MM) {
        const rM = nO.FOCUS_BY_LASERS[Math.max(0, Math.min(4, MM))];
        return rM > 0 ? nO.NOVA_FOCUS / rM : 1 / 0
      }(MM))
    }

    function Zn(MM) {
      const rM = Math.abs(Math.round(MM));
      return rM < 1e3 ? Math.round(MM).toLocaleString("en-US") : rM < 1e6 ? `${rM<1e5?(MM/1e3).toFixed(1).replace(/\.0$/,""):Math.round(MM/1e3)}k` : `${(MM/1e6).toFixed(rM<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function fn(MM, rM, iM) {
      if (hO(rM) >= 0) {
        const rM = function(MM, rM) {
          return MM.find((MM => {
            let {
              focus: iM
            } = MM;
            return iM[0] === rM[0] && iM[2] === rM[2] && (rM[1] === iM[1] || rM[1] === iM[1] - 1)
          }))
        }(MM, iM);
        if (!rM) return null;
        const SM = function(MM) {
          let rM = 0,
            iM = 0;
          for (let OM = 0; OM < 4; OM++) rM += MM.laser[OM] ? 1 : 0, iM += MM.live[OM] ? 1 : 0;
          return {
            lasers: rM,
            live: iM,
            focusPerS: nO.FOCUS_BY_LASERS[iM],
            drawPerS: nO.LASER_DRAW * iM
          }
        }({
          laser: rM.lasers,
          live: rM.live
        });
        if (0 === SM.lasers || "noLasers" === rM.state) return {
          key: `${Wn}lookColNoLasers`
        };
        if (0 === SM.live) return {
          key: `${Wn}lookColOff_blocked`
        };
        if (!(rM.on && SM.live > 0) && ("running" !== (OM = rM.state) && "slowed" !== OM)) return {
          key: `${Wn}lookColOff_${rM.state}`
        };
        if (SM.live < SM.lasers) return {
          key: `${Wn}lookColLasersSome`,
          params: {
            lasers: String(SM.lasers),
            live: String(SM.live)
          }
        };
        const jM = rM.open.filter(Boolean).length;
        return jM < 4 ? {
          key: `${Wn}lookColLasersSpots`,
          params: {
            live: String(SM.live),
            spots: String(jM),
            time: kn(SM.live)
          }
        } : {
          key: `${Wn}lookColLasers`,
          params: {
            live: String(SM.live),
            time: kn(SM.live)
          }
        }
      }
      var OM;
      if (!JO(rM)) return null;
      const SM = function(MM, rM) {
        for (const iM of MM) {
          const MM = EO(iM.focus, [rM[0], rM[1], rM[2]]);
          if (MM && MM.RQ === nO.LASER_D && iM.lasers[MM.dir]) return {
            entry: iM,
            dir: MM.dir
          }
        }
        return null
      }(MM, iM);
      if (!SM) return {
        key: `${Wn}lookLaserNoCollider`
      };
      const {
        entry: jM,
        dir: aM
      } = SM;
      return jM.open[aM] ? jM.live[aM] ? {
        key: jM.on ? `${Wn}lookLaserFiring` : `${Wn}lookLaserReady`
      } : {
        key: `${Wn}lookLaserBlocked`
      } : {
        key: `${Wn}lookLaserClosed`
      }
    }

    function Yn(MM, rM) {
      const iM = [];
      for (let OM = 1; OM < nO.LASER_D; OM++) MM & 1 << rM * (nO.LASER_D - 1) + OM - 1 && iM.push(OM);
      return iM
    }
    const Nn = {
      firing: `${Wn}colSlotFiring`,
      ready: `${Wn}colSlotReady`,
      blocked: `${Wn}colSlotBlocked`,
      empty: `${Wn}colSlotEmpty`,
      closed: `${Wn}colSlotClosed`
    };

    function An(MM, rM, iM, OM) {
      let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const jM = jS(MM),
        aM = jS(rM),
        PM = jS(iM),
        nM = PM.filter(Boolean).length,
        QM = jM.filter(Boolean).length,
        zM = [0, 1, 2, 3].map((MM => aM[MM] ? jM[MM] ? PM[MM] ? OM ? "firing" : "ready" : "blocked" : (MM => Yn(SM, MM).length > 0)(MM) ? "blocked" : "empty" : "closed")),
        LM = zM.indexOf("blocked"),
        mM = LM < 0 && QM > 0 ? zM.indexOf("empty") : -1;
      return zM.map(((MM, rM) => {
        const iM = rM === LM ? {
          key: `${Wn}colSlotClear`
        } : rM === mM ? {
          key: `${Wn}colSlotAdd`,
          params: {
            time: kn(Math.min(4, nM + 1))
          }
        } : null;
        return {
          dir: rM,
          tone: MM,
          title: {
            key: "blocked" !== MM || jM[rM] ? Nn[MM] : `${Wn}colSlotGap`,
            keys: {
              dir: sn[rM]
            }
          },
          hint: iM
        }
      }))
    }

    function xn(MM) {
      var rM;
      return "noPower" === MM.baf2ColState && MM.baf2ColRxState ? hn({
        baf2RxState: MM.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (rM = MM.baf2ColRxHeat) && void 0 !== rM ? rM : 0
      }) : null
    }

    function vn(MM) {
      const rM = jS(MM.baf2ColSpots).filter(Boolean).length,
        iM = jS(MM.baf2ColLive);
      let OM = 0,
        SM = 0;
      return jS(MM.baf2ColLasers).forEach(((MM, rM) => {
        MM && (OM++, SM += iM[rM] ? 0 : 1)
      })), SM > 0 ? {
        key: `${Wn}colSubSome`,
        params: {
          blocked: String(SM),
          lasers: String(OM)
        }
      } : rM < 4 ? {
        key: `${Wn}colSubSpots`,
        params: {
          lasers: String(OM),
          spots: String(rM)
        }
      } : {
        key: `${Wn}colSub`,
        params: {
          lasers: String(OM)
        }
      }
    }

    function Fn(MM) {
      const rM = xn(MM);
      if ("idle" === MM.baf2ColRxState && rM) return {
        key: `${Wn}colState_noPowerIdle`
      };
      if (rM) return {
        key: `${Wn}colState_noPowerReactor`,
        keys: {
          state: rM.label
        }
      };
      if ("noInput" !== MM.baf2ColState) return {
        key: `${Wn}colState_${MM.baf2ColState}`
      };
      const iM = String(Math.max(0, nO.NOVA_SA - MM.baf2ColSa)),
        OM = String(Math.max(0, nO.NOVA_GD - MM.baf2ColGd));
      return "0" !== iM && "0" !== OM ? {
        key: `${Wn}colState_noInput`,
        params: {
          sa: iM,
          gd: OM
        }
      } : "0" !== iM ? {
        key: `${Wn}colState_noStarAlloy`,
        params: {
          sa: iM
        }
      } : "0" !== OM ? {
        key: `${Wn}colState_noGlowDust`,
        params: {
          gd: OM
        }
      } : {
        key: `${Wn}colState_running`
      }
    }

    function Bn(MM) {
      return MM.baf2ColP < 0 ? `${Wn}colNext` : function(MM) {
        const rM = MM.baf2ColState;
        return MM.baf2ColP >= 0 && ("blocked" === rM || "noLasers" === rM || "noPower" === rM)
      }(MM) ? `${Wn}colStalled` : null === Xn(MM) ? `${Wn}colMaking` : `${Wn}colNovaIn`
    }

    function Xn(MM) {
      if (MM.baf2ColP < 0 || MM.baf2ColWant <= 0) return null;
      const rM = MM.baf2ColFocusPerS * Math.min(1, MM.baf2ColDraw / MM.baf2ColWant);
      return rM > 0 ? Math.max(0, nO.NOVA_FOCUS - MM.baf2ColP) / rM : null
    }

    function In(MM, rM) {
      const iM = [];
      for (let OM = 1; OM <= 3; OM++) {
        const SM = [MM[0], MM[1] - OM, MM[2]];
        if (!rM(SM)) return iM;
        iM.push(SM)
      }
      return []
    }

    function Kn(MM, rM) {
      const iM = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let OM = 0; OM < 4; OM++) {
        const SM = OM,
          jM = lO(MM.focus, SM, nO.LASER_D);
        if (MM.lasers[OM] || !MM.open[OM] || !rM(jM)) continue;
        const aM = [];
        for (let iM = 1; iM < nO.LASER_D; iM++) {
          const OM = lO(MM.focus, SM, iM);
          rM(OM) || aM.push(OM)
        }
        iM.supports.push(...In(jM, rM)), 0 === aM.length ? iM.free.push(jM) : (iM.blocked.push(jM), iM.gaps.push(...aM))
      }
      return iM
    }
    const qn = nO.LASER_D - .25,
      Tn = 4,
      Vn = 2,
      cn = 16;
    const MQ = {
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
        blendMode: pP.d.Standard,
        soft: !0
      },
      rQ = {
        green: MQ,
        pink: {
          ...MQ,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function iQ(MM, rM) {
      const iM = {
        ...rM.params
      };
      for (const [SM, jM] of Object.entries(null !== (OM = rM.keys) && void 0 !== OM ? OM : {})) {
        var OM;
        iM[SM] = MM(jM)
      }
      return iM
    }
    const OQ = "buildAFactory2Game:",
      SQ = 2 * nO.LASER_D + 1,
      jQ = nO.LASER_D;

    function aQ(MM) {
      return MM(`${OQ}colFocusTip`, {
        need: Zn(nO.NOVA_FOCUS)
      })
    }

    function PQ(MM, rM) {
      return MM(rM.key, iQ(MM, rM))
    }

    function nQ(MM) {
      const rM = MM.getStatus();
      return {
        status: rM,
        entry: rM ? MM.entryAtRoot(rM.baf2ColAt) : void 0
      }
    }

    function QQ(MM, rM) {
      return {
        left: 100 * (jQ + MM) / SQ + "%",
        top: 100 * (jQ + rM) / SQ + "%"
      }
    }

    function zQ(MM) {
      let {
        status: rM,
        entry: iM
      } = MM;
      const OM = jS(rM.baf2ColLasers),
        SM = jS(rM.baf2ColSpots),
        jM = jS(rM.baf2ColLive),
        aM = !0 === (null === iM || void 0 === iM ? void 0 : iM.on),
        PM = nO.LASER_D,
        nM = [];
      for (let HM = 0; HM < 4; HM++) {
        const [MM, , rM] = yO[HM];
        if (jM[HM]) {
          const iM = 100 * (PM - 1) / SQ,
            OM = MM + rM > 0 ? 100 * (jQ + 1) / SQ : 100 * (jQ - (PM - 1)) / SQ,
            SM = 100 * (jQ + .35) / SQ,
            jM = 30 / SQ,
            QM = 0 !== MM ? {
              left: `${OM}%`,
              width: `${iM}%`,
              top: `${SM}%`,
              height: `${jM}%`
            } : {
              top: `${OM}%`,
              height: `${iM}%`,
              left: `${SM}%`,
              width: `${jM}%`
            };
          nM.push((0, Gj.jsx)("i", {
            className: CS()("Baf2ColDiagramBeam", {
              Off: !aM
            }),
            style: QM
          }, `beam${HM}`))
        }
        const iM = OM[HM] ? "Baf2ColDiagramLaser" : SM[HM] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        nM.push((0, Gj.jsx)("i", {
          className: iM,
          style: QQ(MM * PM, rM * PM)
        }, `spot${HM}`))
      }
      for (let HM = 0; HM < 4; HM++) {
        if (OM[HM] || !SM[HM]) continue;
        const [MM, , iM] = yO[HM];
        for (const OM of Yn(null !== (QM = rM.baf2ColGaps) && void 0 !== QM ? QM : 0, HM)) {
          var QM;
          nM.push((0, Gj.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: QQ(MM * OM, iM * OM)
          }, `gap${HM},${OM}`))
        }
      }
      for (const [HM, , hM] of null !== (zM = null === iM || void 0 === iM ? void 0 : iM.blockers) && void 0 !== zM ? zM : []) {
        var zM, LM, mM;
        const MM = HM - (null !== (LM = null === iM || void 0 === iM ? void 0 : iM.focus[0]) && void 0 !== LM ? LM : 0),
          rM = hM - (null !== (mM = null === iM || void 0 === iM ? void 0 : iM.focus[2]) && void 0 !== mM ? mM : 0);
        nM.push((0, Gj.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: QQ(MM, rM)
        }, `block${MM},${rM}`))
      }
      return (0, Gj.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [nM, (0, Gj.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function LQ(MM) {
      let {
        status: rM
      } = MM;
      const {
        t: iM
      } = (0, tS.A)(), OM = jS(rM.baf2ColLive).filter(Boolean).length;
      return (0, Gj.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, Gj.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: aQ(iM),
          children: iM(`${OQ}colLadder`)
        }), (0, Gj.jsx)("ul", {
          children: [1, 2, 3, 4].map((MM => (0, Gj.jsx)("li", {
            className: CS()({
              On: MM === OM
            }),
            children: iM(`${OQ}colLadderChip`, {
              lasers: String(MM),
              time: kn(MM)
            })
          }, MM)))
        })]
      })
    }

    function mQ(MM) {
      let {
        item: rM,
        sQ: iM,
        need: OM,
        cap: SM
      } = MM;
      const {
        t: jM
      } = (0, tS.A)(), aM = Math.min(iM, OM);
      return (0, Gj.jsxs)("li", {
        className: CS()("Baf2ColTile", {
          Short: iM < OM
        }),
        children: [(0, Gj.jsx)(HQ, {
          item: rM
        }), (0, Gj.jsx)("b", {
          className: "Baf2ColTileValue",
          children: jM(`${OQ}colOutOf`, {
            amount: String(aM),
            cap: String(OM)
          })
        }), (0, Gj.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, Gj.jsx)("i", {
            style: {
              width: 100 * aM / OM + "%"
            }
          })
        }), iM > OM && (0, Gj.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: jM(`${OQ}colIntakeHeld`, {
            amount: String(iM),
            cap: String(SM)
          })
        })]
      })
    }

    function HQ(MM) {
      let {
        item: rM
      } = MM;
      const {
        t: iM
      } = (0, tS.A)();
      return (0, Gj.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, Gj.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, Gj.jsx)(uS.b, {
            itemName: rM,
            amount: 0
          })
        }), (0, Gj.jsx)("span", {
          className: "Baf2ColTileName",
          children: (0, Mj.e)(iM, rM)
        })]
      })
    }

    function hQ(MM) {
      switch (MM.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function JQ(MM) {
      var rM, iM, SM;
      let {
        store: jM,
        close: aM
      } = MM;
      const {
        t: PM
      } = (0, tS.A)(), nM = oa(), {
        status: QM,
        entry: zM
      } = function(MM) {
        const [rM, iM] = (0, OM.useState)((() => nQ(MM)));
        return (0, OM.useEffect)((() => (iM(nQ(MM)), MM.subscribe((() => {
          iM(nQ(MM))
        })))), [MM]), rM
      }(jM), [LM, mM] = (0, OM.useState)(null), HM = null === QM || void 0 === QM ? void 0 : QM.baf2ColHold;
      (0, OM.useEffect)((() => {
        mM(null)
      }), [HM]);
      const hM = (0, OM.useRef)({
          p: -1,
          n: 0
        }),
        JM = null !== (rM = null === QM || void 0 === QM ? void 0 : QM.baf2ColP) && void 0 !== rM ? rM : -1;
      JM < hM.current.p && hM.current.n++, hM.current.p = JM;
      const dM = (0, OM.useRef)(null),
        [yM] = (0, OM.useState)((() => {
          return (MM = jM.heldAtOpen()) === LO || MM === mO ? {
            key: `${Wn}colBeltItIn`,
            item: MM
          } : null;
          var MM
        }));
      if (!QM) return null;
      const lM = QM.baf2ColMember,
        EM = QM.baf2ColP >= 0,
        UM = function(MM, rM) {
          if (MM.baf2ColP >= 0 && MM.baf2ColDraw > 0) {
            const rM = MM.baf2ColWant > 0 ? Math.min(1, MM.baf2ColDraw / MM.baf2ColWant) : 0;
            return {
              focus: MM.baf2ColFocusPerS * rM,
              draw: MM.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === MM.baf2ColState && rM && rM.draw > 0 ? {
            ...rM,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(QM, dM.current);
      dM.current = UM.draw > 0 ? UM : null;
      const GM = "slowed" === QM.baf2ColState || "noPower" === QM.baf2ColState,
        CM = Xn(QM),
        eM = null !== LM && void 0 !== LM ? LM : QM.baf2ColHold,
        bM = function(MM) {
          var rM, iM;
          return "idle" === MM.baf2ColRxState ? null : null !== (rM = null === (iM = xn(MM)) || void 0 === iM ? void 0 : iM.fix) && void 0 !== rM ? rM : null
        }(QM),
        wM = null === bM && null === yM ? function(MM) {
          var rM;
          const iM = MM.baf2ColSentTo;
          if (!iM) return null;
          const OM = null !== (rM = MM.baf2ColSentHeld) && void 0 !== rM ? rM : null;
          return {
            key: null === OM ? `${Wn}colNovaSentToMachine` : `${Wn}colNovaSentTo`,
            target: iM,
            sQ: OM
          }
        }(QM) : null,
        tM = EM ? PM(`${OQ}colFocusOf`, {
          focus: Zn(QM.baf2ColP),
          need: Zn(nO.NOVA_FOCUS)
        }) : null;
      return (0, Gj.jsx)(ya.e, {
        close: aM,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, Gj.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, Gj.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Gj.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, Gj.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, Gj.jsx)(uS.b, {
                  itemName: QO,
                  amount: 0
                })
              }), (0, Gj.jsxs)("div", {
                children: [(0, Gj.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: (0, Mj.e)(PM, QO)
                }), (0, Gj.jsx)("p", {
                  children: PQ(PM, vn(QM))
                })]
              })]
            }), (0, Gj.jsx)(la.l, {
              onClick: aM
            })]
          }), (0, Gj.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, Gj.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, Gj.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, Gj.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: PM(Bn(QM), {
                    time: null === CM ? "" : yj(PM, CM)
                  })
                }), (0, Gj.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, Gj.jsx)("i", {
                    style: {
                      width: (EM ? 100 * QM.baf2ColP / nO.NOVA_FOCUS : 0) + "%"
                    }
                  }, hM.current.n)
                }), (0, Gj.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, Gj.jsxs)("span", {
                    title: aQ(PM),
                    children: [(0, Gj.jsx)("b", {
                      children: Zn(UM.focus)
                    }), " ", PM(`${OQ}colFocusPerS`)]
                  }), (0, Gj.jsxs)("span", {
                    className: CS()("Baf2ColDraw", {
                      Short: GM
                    }),
                    children: [(0, Gj.jsx)(gS.b, {
                      name: "bolt"
                    }), GM ? PM(`${OQ}colDrawOf`, {
                      draw: Zn(QM.baf2ColDraw),
                      want: Zn(QM.baf2ColWant)
                    }) : PM(`${OQ}colPowerPerS`, {
                      rate: Zn(UM.draw)
                    })]
                  }), null !== tM && (0, Gj.jsx)("span", {
                    className: "Soft",
                    children: tM
                  })]
                })]
              }), (0, Gj.jsx)("p", {
                className: CS()("Baf2ColState", hQ(QM)),
                children: PQ(PM, Fn(QM))
              }), null !== bM && (0, Gj.jsx)("p", {
                className: "Baf2ColStateFix",
                children: PM(bM)
              }), null === bM && null !== yM && (0, Gj.jsx)("p", {
                className: "Baf2ColStateFix",
                children: PM(yM.key, {
                  item: (0, Mj.e)(PM, yM.item)
                })
              }), wM && (0, Gj.jsx)("p", {
                className: "Baf2ColStateFix",
                children: PM(wM.key, {
                  target: (0, Mj.e)(PM, wM.target),
                  amount: String(null !== (iM = wM.sQ) && void 0 !== iM ? iM : 0)
                })
              }), (0, Gj.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, Gj.jsx)(mQ, {
                  item: LO,
                  sQ: QM.baf2ColSa,
                  need: nO.NOVA_SA,
                  cap: nO.SA_CAP
                }), (0, Gj.jsx)(mQ, {
                  item: mO,
                  sQ: QM.baf2ColGd,
                  need: nO.NOVA_GD,
                  cap: nO.GD_CAP
                }), (0, Gj.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, Gj.jsx)(HQ, {
                    item: "Nova Matter"
                  }), (0, Gj.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: PM(`${OQ}colNovaHeld`, {
                      amount: String(QM.baf2ColOut),
                      cap: String(nO.OUT_CAP)
                    })
                  }), lM && (0, Gj.jsx)(la.p, {
                    className: "Baf2ColTake",
                    disabled: 0 === QM.baf2ColOut,
                    onClick: () => {
                      nM.send(Dn(QM, "take"))
                    },
                    children: PM(`${OQ}colTake`)
                  })]
                })]
              }), lM && (0, Gj.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": eM,
                className: CS()("Baf2ColHold", {
                  On: eM
                }),
                onClick: MM => {
                  MM.detail > 0 && MM.currentTarget.blur(), mM(!eM), nM.send(Dn(QM, "hold " + (eM ? 0 : 1)))
                },
                children: [(0, Gj.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, Gj.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, Gj.jsx)("b", {
                    children: PM(`${OQ}colHold`)
                  }), (0, Gj.jsx)("span", {
                    children: PM(`${OQ}colHoldNote`)
                  })]
                })]
              })]
            }), (0, Gj.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, Gj.jsx)(zQ, {
                status: QM,
                entry: zM
              }), (0, Gj.jsx)("ul", {
                className: "Baf2ColSlots",
                children: An(QM.baf2ColLasers, QM.baf2ColSpots, QM.baf2ColLive, UM.beamsOn, null !== (SM = QM.baf2ColGaps) && void 0 !== SM ? SM : 0).map((MM => (0, Gj.jsxs)("li", {
                  className: MM.tone,
                  children: [(0, Gj.jsx)("b", {
                    children: PQ(PM, MM.title)
                  }), null !== MM.hint && (0, Gj.jsx)("span", {
                    children: PQ(PM, MM.hint)
                  })]
                }, MM.dir)))
              }), (0, Gj.jsx)(LQ, {
                status: QM
              })]
            })]
          })]
        })
      })
    }
    const dQ = "buildAFactory2Game:",
      yQ = 36e5,
      lQ = 864e5;

    function EQ(MM, rM, iM) {
      return Math.max(0, Math.ceil((MM + rM - Math.max(iM, MM)) / 1e3))
    }

    function UQ(MM) {
      return MM.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function GQ(MM) {
      return "Homestead" === MM
    }

    function CQ(MM) {
      return function(MM) {
        let rM = 0;
        for (const iM of MM) {
          const MM = /^Island ([1-9]\d{0,5})$/.exec(iM);
          MM && (rM = Math.max(rM, Number(MM[1])))
        }
        return `Island ${rM+1}`
      }(MM.map((MM => MM.baf2IslandName)))
    }

    function eQ(MM, rM) {
      return function(MM) {
        return `${dQ}islandsBlocked${MM[0].toUpperCase()}${MM.slice(1)}`
      }("degraded" === MM && 0 === rM ? "stuck" : MM)
    }

    function bQ(MM) {
      return MM.filter((MM => {
        var rM;
        return !MM.baf2IslandActive && void 0 === MM.baf2IslandUnreadable && void 0 === (null === (rM = MM.baf2IslandCoop) || void 0 === rM ? void 0 : rM.baf2CoopState)
      })).length
    }

    function wQ(MM) {
      return "coopMoving" === MM || "coopUnreachable" === MM
    }

    function tQ(MM, rM) {
      const iM = rM > 0;
      return {
        change: null === MM && !iM,
        switch: (null === MM || "degraded" === MM || wQ(MM)) && !iM,
        rename: "loading" !== MM && "degraded" !== MM && "stuck" !== MM
      }
    }

    function gQ(MM, rM) {
      return void 0 === MM || "corrupt" === MM && rM
    }
    const uQ = Ra;

    function RQ(MM, rM, iM) {
      if (null !== MM && void 0 !== MM && MM.untilGone) {
        var OM;
        return !("dismiss" === MM.untilGone && void 0 === (null === (OM = rM.baf2IslandCoop) || void 0 === OM ? void 0 : OM.baf2CoopState)) && iM - MM.atMs < 32500
      }
      return void 0 !== MM && iM - MM.atMs < uQ && rM.baf2IslandName === MM.from
    }
    const pQ = Ra;

    function WQ(MM) {
      return "core" === (null === MM || void 0 === MM ? void 0 : MM.kind) ? MM.core : "islands" === (null === MM || void 0 === MM ? void 0 : MM.kind) ? MM.backToCore : void 0
    }

    function sQ(MM) {
      return `\0${MM}\0`
    }

    function DQ(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const OM = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const jM of Object.keys(iM)) OM[jM] = sQ(jM);
      let SM = Object.keys(OM).length > 0 ? MM(rM, OM) : MM(rM);
      for (const [jM, aM] of Object.entries(iM)) SM = SM.split(sQ(jM)).join(aM);
      return SM
    }

    function kQ(MM, rM) {
      return MM ? rM ? "enabled" : "disabled" : "hidden"
    }
    const ZQ = {
      removed: `${dQ}islandsCoopRemoved`,
      deleted: `${dQ}islandsCoopDeleted`,
      notReady: `${dQ}islandsCoopNotReady`,
      gone: `${dQ}islandsCoopGone`
    };

    function oQ(MM) {
      var rM;
      return "member" !== (null === (rM = MM.baf2IslandCoop) || void 0 === rM ? void 0 : rM.baf2CoopRole) && "newer" !== MM.baf2IslandUnreadable
    }

    function fQ(MM, rM, iM, OM, SM, jM) {
      const aM = MM.baf2IslandActive,
        PM = MM.baf2IslandUnreadable,
        nM = MM.baf2IslandCoop,
        QM = function(MM, rM, iM) {
          return {
            switch: MM.switch && void 0 === rM,
            delete: MM.change && gQ(rM, iM)
          }
        }(rM, PM, OM),
        zM = aM && void 0 !== nM && void 0 === nM.baf2CoopState && "coopUnreachable" === jM,
        LM = {
          switch: kQ((!aM || zM) && void 0 === PM, zM || QM.switch),
          switchLabel: zM ? "tryAgain" : "switch",
          rename: kQ(!0, rM.rename),
          delete: kQ(!aM, QM.delete),
          deleteWaits: !aM && gQ(PM, OM),
          people: kQ(void 0 !== MM.baf2IslandInvitable || SM && aM && void 0 === PM && void 0 === nM, !0),
          peopleLabel: "invite",
          leave: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        mM = !aM && QM.delete;
      if (void 0 === nM) return iM ? {
        ...LM,
        delete: kQ(!aM, !1),
        deleteWaits: !1,
        note: mM ? {
          key: `${dQ}islandsCoopKeepOwn`
        } : null
      } : LM;
      const HM = nM.baf2CoopState,
        hM = nM.baf2CoopMembers.length > 1,
        JM = {
          ...LM,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== HM && "member" === nM.baf2CoopRole) return {
        ...JM,
        dismiss: kQ(!0, rM.rename),
        note: {
          key: ZQ[HM],
          names: {
            owner: nM.baf2CoopOwner
          }
        }
      };
      if (void 0 !== HM) {
        let MM = {
          key: `${dQ}islandsCoopOwnLost`
        };
        return mM && hM ? MM = {
          key: `${dQ}islandsCoopDeleteMembers`
        } : mM && iM && (MM = {
          key: `${dQ}islandsCoopKeepOwn`
        }), {
          ...JM,
          delete: kQ(!aM, QM.delete && !hM && !iM),
          deleteWaits: LM.deleteWaits && !hM && !iM,
          note: MM
        }
      }
      if ("member" === nM.baf2CoopRole) return {
        ...LM,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        leave: kQ(!0, aM ? rM.switch : rM.rename)
      };
      const dM = nM.baf2CoopManageHere;
      let yM = null;
      var lM;
      dM || aM ? mM && hM ? yM = {
        key: `${dQ}islandsCoopDeleteMembers`
      } : mM && iM && (yM = {
        key: `${dQ}islandsCoopKeepOwn`
      }) : yM = {
        key: null !== (lM = nM.baf2CoopLeft) && void 0 !== lM && lM.length ? `${dQ}islandsCoopManageThereClaim` : `${dQ}islandsCoopManageThere`
      };
      return {
        ...LM,
        rename: kQ(!0, rM.rename && dM),
        delete: kQ(!aM, QM.delete && !hM && !iM),
        deleteWaits: LM.deleteWaits && !hM && !iM,
        people: "enabled",
        peopleLabel: "players",
        unshare: kQ(dM && aM && !hM, rM.change),
        remove: dM,
        note: yM
      }
    }

    function YQ(MM) {
      var rM;
      const iM = MM.baf2IslandCoop;
      if ("owner" !== (null === iM || void 0 === iM ? void 0 : iM.baf2CoopRole) || void 0 !== iM.baf2CoopState || null === (rM = iM.baf2CoopLeft) || void 0 === rM || !rM.length) return null;
      const OM = MM.baf2IslandActive && iM.baf2CoopManageHere;
      return {
        left: iM.baf2CoopLeft,
        claim: OM,
        goThere: !OM && iM.baf2CoopManageHere
      }
    }

    function NQ(MM) {
      return MM.baf2CoopMembers.length >= MM.baf2CoopMax
    }

    function AQ(MM, rM, iM) {
      return void 0 !== MM && rM < MM.answer && iM - MM.atMs < uQ
    }
    const xQ = "buildAFactory2Game:";

    function vQ(MM, rM) {
      return {
        onKeyDown: iM => {
          iM.stopPropagation(), iM.nativeEvent.isComposing || 229 === iM.nativeEvent.keyCode || ("Enter" === iM.key ? (iM.preventDefault(), MM()) : "Escape" === iM.key && (iM.preventDefault(), rM()))
        }
      }
    }

    function FQ(MM) {
      return {
        onKeyDown: rM => {
          "Escape" !== rM.key || rM.nativeEvent.isComposing || (rM.preventDefault(), rM.stopPropagation(), MM())
        }
      }
    }

    function BQ(MM) {
      MM.currentTarget.select()
    }

    function XQ(MM, rM) {
      (0, OM.useEffect)((() => {
        var iM;
        MM && (null === (iM = rM.current) || void 0 === iM || iM.scrollIntoView({
          block: "nearest"
        }))
      }), [MM, rM])
    }

    function IQ(MM) {
      const [rM, iM] = (0, OM.useState)(null);
      return (0, OM.useEffect)((() => {
        const rM = document.querySelector(".UiRequests"),
          OM = MM.current;
        if (!rM || !OM || "undefined" === typeof ResizeObserver) return;
        const SM = () => {
          const MM = rM.getBoundingClientRect(),
            SM = OM.getBoundingClientRect(),
            jM = OM.parentElement,
            aM = jM && parseFloat(getComputedStyle(jM).paddingTop) || 0,
            PM = function(MM, rM, iM, OM) {
              if (!MM || MM.height <= 0 || MM.right <= rM.left || MM.left >= rM.right) return null;
              const SM = Math.max(OM, MM.bottom + 8);
              return {
                marginTop: Math.round(SM - OM),
                maxHeight: Math.max(0, Math.floor(iM - SM - OM))
              }
            }(MM, SM, window.innerHeight, aM);
          iM((MM => (null === MM || void 0 === MM ? void 0 : MM.marginTop) === (null === PM || void 0 === PM ? void 0 : PM.marginTop) && (null === MM || void 0 === MM ? void 0 : MM.maxHeight) === (null === PM || void 0 === PM ? void 0 : PM.maxHeight) ? MM : PM))
        };
        SM();
        const jM = new ResizeObserver(SM);
        return jM.observe(rM), window.addEventListener("resize", SM), () => {
          jM.disconnect(), window.removeEventListener("resize", SM)
        }
      }), [MM]), rM
    }

    function KQ() {
      (0, OM.useLayoutEffect)((() => (document.documentElement.classList.add("Baf2IslandsOverlayShown"), () => {
        document.documentElement.classList.remove("Baf2IslandsOverlayShown")
      })), [])
    }

    function qQ(MM) {
      (0, OM.useEffect)((() => {
        var rM;
        null === (rM = MM.current) || void 0 === rM || rM.focus()
      }), [MM])
    }

    function TQ(MM) {
      const [rM, iM] = (0, OM.useState)(Date.now);
      return (0, OM.useEffect)((() => {
        const rM = window.setInterval((() => {
          iM(Date.now())
        }), MM);
        return () => {
          window.clearInterval(rM)
        }
      }), [MM]), rM
    }

    function VQ(MM) {
      let {
        tier: rM,
        t: iM
      } = MM;
      const {
        kind: OM,
        short: SM
      } = dM(rM), jM = HM(rM, hM), aM = iM(`${xQ}${jM.key}`, {
        ...jM.params,
        name: iM(`${xQ}${yM(rM).nameKey}`)
      });
      return (0, Gj.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, Gj.jsx)("span", {
          className: CS()("Baf2IslandTierPip", {
            Stage: "tier" !== OM
          }),
          "aria-hidden": "true",
          children: SM
        }), aM]
      })
    }

    function cQ(MM) {
      let {
        note: rM,
        className: iM,
        t: OM
      } = MM;
      return (0, Gj.jsx)("p", {
        className: CS()("Baf2IslandNote", iM),
        children: DQ(OM, rM.key, rM.names, rM.params)
      })
    }
    const Mz = "buildAFactory2Game:";

    function rz(MM) {
      let {
        message: rM,
        arrivedAtMs: iM,
        close: SM,
        leave: jM
      } = MM;
      const aM = oa(),
        {
          t: PM
        } = (0, tS.A)(),
        nM = TQ(1e3),
        QM = (0, OM.useRef)(null);
      KQ(), (0, OM.useEffect)((() => {
        var MM;
        null === (MM = QM.current) || void 0 === MM || MM.focus()
      }), []);
      const zM = EQ(iM, rM.baf2TransferInMs, nM),
        LM = iM + rM.baf2TransferInMs - 1e3,
        [mM, HM] = (0, OM.useState)(null);
      (0, OM.useEffect)((() => {
        const MM = window.setTimeout((() => {
          HM(LM)
        }), Math.max(0, LM - Date.now()));
        return () => {
          window.clearTimeout(MM)
        }
      }), [LM]);
      const hM = mM === LM || nM >= LM,
        JM = rM.baf2TransferIsland,
        dM = rM.baf2TransferOwner;
      return (0, Gj.jsx)(ya.e, {
        close: SM,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, Gj.jsxs)("section", {
          ref: QM,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, Gj.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Gj.jsxs)("div", {
              children: [(0, Gj.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === dM ? DQ(PM, `${Mz}islandsTransferOwn`, {
                  island: JM
                }) : DQ(PM, `${Mz}islandsTransfer`, {
                  island: JM,
                  owner: dM
                })
              }), (0, Gj.jsx)("p", {
                children: hM ? PM(`${Mz}islandsTransferNow`) : PM(`${Mz}islandsTransferIn`, {
                  time: yj(PM, zM)
                })
              })]
            }), (0, Gj.jsx)(la.l, {
              ariaLabel: PM(`${Mz}islandsClose`),
              onClick: SM
            })]
          }), !hM && (0, Gj.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, Gj.jsx)("p", {
              className: "Baf2TransferNote",
              children: PM(`${Mz}islandsTransferNote`)
            }), (0, Gj.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, Gj.jsx)(la.e, {
                onClick: () => {
                  aM.send("baf2coopstay"), jM()
                },
                children: PM(`${Mz}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var iz = iM(1516),
      Oz = iM(1146),
      Sz = iM.n(Oz);
    const jz = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const az = "buildAFactory2Game:",
      Pz = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function nz(MM, rM, iM) {
      return void 0 === rM ? iM : "string" === typeof rM ? rM : Array.isArray(rM) ? rM.map((rM => "string" === typeof rM ? rM : "translationKey" in rM ? MM(rM.translationKey) : "")).join("") : MM(rM.translationKey)
    }

    function Qz(MM) {
      const rM = {};
      for (const [iM, OM] of Object.entries(null !== MM && void 0 !== MM ? MM : {})) rM[iM] = OM < 0 ? dj(OM) : OM.toLocaleString("en-US");
      return rM
    }

    function zz(MM, rM) {
      const iM = rM ? "touch" : "mouse";
      return {
        use: MM(`${az}lookUse_${iM}`),
        Use: MM(`${az}lookUseStart_${iM}`)
      }
    }
    const Lz = (0, OM.memo)((function(MM) {
      let {
        item: rM
      } = MM;
      return (0, Gj.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, Gj.jsx)(uS.b, {
          itemName: rM,
          amount: 0
        })
      })
    }));

    function mz(MM) {
      let {
        label: rM,
        percent: iM,
        progress: OM
      } = MM;
      return (0, Gj.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, Gj.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${rM}: ${OM}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": iM,
          children: (0, Gj.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${iM}%`
            }
          })
        }), (0, Gj.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: OM
        })]
      })
    }

    function Hz(MM) {
      let {
        chips: rM
      } = MM;
      return (0, Gj.jsx)("span", {
        className: "Baf2QuestChips",
        children: rM.map((MM => {
          let [rM, iM, OM] = MM;
          const SM = iM >= OM;
          return (0, Gj.jsxs)("span", {
            className: CS()("Baf2QuestChip", {
              Met: SM
            }),
            children: [(0, Gj.jsx)(Lz, {
              item: rM
            }), (0, Gj.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: SM ? `\u2713${OM}` : `${iM}/${OM}`
            })]
          }, rM)
        }))
      })
    }

    function hz(MM, rM) {
      const {
        key: iM,
        params: OM
      } = HM(rM, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return MM(`${az}${iM}`, {
        ...OM,
        name: MM(`${az}${yM(rM).nameKey}`)
      })
    }

    function Jz(MM) {
      let {
        core: rM,
        t: iM
      } = MM;
      const [OM, SM] = rM, jM = SM > 0 ? Math.floor(100 * OM / SM) : 100;
      return (0, Gj.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": iM(`${az}questCoreLabel`, {
          have: String(OM),
          need: String(SM)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": jM,
        children: [(0, Gj.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: iM(`${az}questCore`, {
            percent: String(jM)
          })
        }), (0, Gj.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, Gj.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${jM}%`
            }
          })
        })]
      })
    }

    function dz(MM) {
      let {
        rows: rM,
        t: iM
      } = MM;
      const OM = rM.filter((MM => MM.done)).length;
      return (0, Gj.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": iM(`${az}questStepsProgress`, {
          done: String(OM),
          total: String(rM.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": rM.length,
        "aria-valuenow": OM,
        children: rM.map((MM => (0, Gj.jsx)("span", {
          className: CS()("Baf2QuestSegment", {
            Done: MM.done,
            Current: MM.current
          })
        }, MM.id)))
      })
    }
    const yz = (0, OM.memo)(Ez, lz);

    function lz(MM, rM) {
      const iM = iM => MM.view.itemNames[iM] === rM.view.itemNames[iM];
      return MM.t === rM.t && MM.extra === rM.extra && (null === MM.row.item || iM(MM.row.item)) && MM.row.madeFor.every(iM) && MM.row.also.every(iM) && Sz()(MM.row, rM.row)
    }

    function Ez(MM) {
      let {
        row: rM,
        view: iM,
        t: OM,
        extra: SM
      } = MM;
      const {
        isTouchScreen: jM
      } = (0, ES.m)(["isTouchScreen"]), aM = rM.item ? function(MM, rM, iM) {
        return 1 !== iM && jz.has(MM) ? wS(rM) : null
      }(rM.key, rM.item, rM.total) : null, PM = aM ? OM(aM) : rM.item ? nz(OM, iM.itemNames[rM.item], rM.item) : "", nM = rM.also.map((MM => nz(OM, iM.itemNames[MM], MM))), QM = nM.join(", "), zM = function(MM, rM) {
        var iM;
        return rM.length < 2 ? null !== (iM = rM[0]) && void 0 !== iM ? iM : "" : MM(`${az}listAnd`, {
          rest: rM.slice(0, -1).join(MM(`${az}listComma`)),
          last: rM[rM.length - 1]
        })
      }(OM, [PM, ...nM]), LM = OM(`${az}${rM.key}`, {
        ...zz(OM, jM),
        ...Qz(rM.params),
        item: PM,
        also: QM,
        itemList: zM,
        total: String(rM.total)
      }), [mM, ...HM] = LM.split("\n"), hM = rM.total > 1 && !rM.done && !rM.away;
      return (0, Gj.jsxs)("li", {
        className: CS()("Baf2QuestStep", {
          Done: rM.done,
          Current: rM.current,
          JustFinished: rM.justFinished,
          Away: rM.away
        }),
        children: [!rM.done && null !== rM.item && (0, Gj.jsx)(Lz, {
          item: rM.item
        }), (rM.done || null === rM.item) && (0, Gj.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: rM.done ? "\u2713" : "\u25cb"
        }), (0, Gj.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, Gj.jsx)("strong", {
            children: mM
          }), HM.length > 0 && (0, Gj.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: HM.join(" ")
          }), !rM.done && rM.madeFor.length > 0 && (0, Gj.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: OM("buildAFactory2Game:questRowFor", {
              items: rM.madeFor.map((MM => nz(OM, iM.itemNames[MM], MM))).join(" \u2192 ")
            })
          }), hM && (0, Gj.jsx)(mz, {
            label: mM,
            percent: Math.round(100 * rM.amount / rM.total),
            progress: `${rM.amount.toLocaleString("en-US")}/${rM.total.toLocaleString("en-US")}`
          }), !rM.done && !rM.away && rM.chips && rM.chips.length > 0 && (0, Gj.jsx)(Hz, {
            chips: rM.chips
          }), SM]
        })]
      })
    }
    const Uz = "buildAFactory2Game:",
      Gz = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      Cz = {
        on: `${Uz}tutorialButtonOn`,
        hud: `${Uz}tutorialButtonHud`,
        off: `${Uz}tutorialButtonOff`
      },
      ez = {
        on: `${Uz}tutorialPickedOn`,
        hud: `${Uz}tutorialPickedHud`,
        off: `${Uz}tutorialPickedOff`
      };
    class bz {
      constructor(MM, rM, iM) {
        this.commands = MM, this.quests = rM, this.toasts = iM
      }
      next() {
        const MM = function(MM) {
            return WM[(WM.indexOf(MM) + 1) % WM.length]
          }(this.quests.get().tutorial),
          rM = this.quests.setTutorial(MM);
        this.commands.send(`baf2tutorial ${MM} ${rM}`), this.toasts.show({
          baf2ToastText: [(0, DM.Od)({
            translationKey: ez[MM]
          }, DM.L.whiteUiText)],
          baf2ToastMs: 3e3,
          baf2ToastStyle: "baf2ToastInfo"
        })
      }
    }

    function wz(MM, rM) {
      let [iM, OM] = rM;
      return MM(`${az}${iM}`, Qz(OM))
    }

    function tz(MM) {
      let [rM, iM] = MM;
      return rM + JSON.stringify(iM)
    }

    function gz(MM) {
      let {
        goal: rM,
        t: iM
      } = MM;
      return rM ? (0, Gj.jsx)("span", {
        className: "Baf2BookGoal",
        children: iM(`${az}${rM}`)
      }) : null
    }

    function uz(MM) {
      let {
        view: rM,
        t: iM
      } = MM;
      if (!rM.name) return null;
      const OM = xS(rM.rows);
      return (0, Gj.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, Gj.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: iM(`${az}currentQuest`)
        }), (0, Gj.jsx)("strong", {
          className: "Baf2BookTitle",
          children: wz(iM, rM.name)
        }), (0, Gj.jsx)(gz, {
          goal: rM.goal,
          t: iM
        }), OM.length > 1 && (0, Gj.jsx)(dz, {
          rows: OM,
          t: iM
        }), (0, Gj.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: rM.rows.map((MM => (0, Gj.jsx)(yz, {
            row: MM,
            view: rM,
            t: iM
          }, MM.id)))
        }), rM.reward && (0, Gj.jsxs)("span", {
          className: "Baf2BookReward",
          children: [iM(`${az}questReward`), (0, Gj.jsx)(Lz, {
            item: rM.reward
          }), nz(iM, rM.itemNames[rM.reward], rM.reward)]
        })]
      })
    }

    function Rz(MM) {
      let {
        quest: rM,
        upcoming: iM,
        t: OM
      } = MM;
      return (0, Gj.jsxs)("li", {
        className: CS()("Baf2BookQuest", {
          Done: rM[3],
          Upcoming: iM
        }),
        children: [(0, Gj.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: rM[3] ? "\u2713" : "\u25cb"
        }), (0, Gj.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, Gj.jsx)("strong", {
            className: "Baf2BookTitle",
            children: wz(OM, rM)
          }), (0, Gj.jsx)(gz, {
            goal: rM[2],
            t: OM
          })]
        })]
      })
    }

    function pz(MM) {
      let {
        done: rM,
        total: iM,
        t: OM
      } = MM;
      const SM = iM > 0 ? Math.round(100 * rM / iM) : 0,
        jM = OM(`${az}questBookChapterProgress`, {
          done: String(rM),
          total: String(iM)
        });
      return (0, Gj.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, Gj.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": jM,
          "aria-valuemin": 0,
          "aria-valuemax": iM,
          "aria-valuenow": rM,
          children: (0, Gj.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${SM}%`
            }
          })
        }), (0, Gj.jsx)("span", {
          className: "Baf2BookProgressText",
          children: jM
        })]
      })
    }

    function Wz(MM) {
      let {
        view: rM,
        tier: iM,
        quests: OM,
        t: SM
      } = MM;
      const jM = iM === rM.tier,
        aM = (null !== OM && void 0 !== OM ? OM : []).filter((MM => !MM[4])),
        PM = (null !== OM && void 0 !== OM ? OM : []).filter((MM => MM[4])),
        nM = aM.filter((MM => MM[3])).length,
        QM = jM && rM.name ? tz(rM.name) : null,
        zM = aM.findIndex((MM => !MM[3] && tz(MM) === QM));
      return (0, Gj.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, Gj.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, Gj.jsx)("h3", {
            children: hz(SM, iM)
          }), aM.length > 0 && (0, Gj.jsx)(pz, {
            done: nM,
            total: aM.length,
            t: SM
          }), jM && rM.core && (0, Gj.jsx)(Jz, {
            core: rM.core,
            t: SM
          })]
        }), (0, Gj.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === OM && jM && (0, Gj.jsx)(uz, {
            view: rM,
            t: SM
          }), aM.map(((MM, iM) => iM === zM ? (0, Gj.jsx)(uz, {
            view: rM,
            t: SM
          }, tz(MM)) : (0, Gj.jsx)(Rz, {
            quest: MM,
            upcoming: !MM[3],
            t: SM
          }, tz(MM))))]
        }), jM && rM.side && (0, Gj.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, Gj.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: SM(`${az}questSide`)
          }), (0, Gj.jsx)("strong", {
            className: "Baf2BookTitle",
            children: wz(SM, rM.side.name)
          }), (0, Gj.jsx)(gz, {
            goal: rM.side.goal,
            t: SM
          }), (0, Gj.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, Gj.jsx)(yz, {
              row: rM.side.row,
              view: rM,
              t: SM
            })
          })]
        }), PM.length > 0 && (0, Gj.jsxs)(Gj.Fragment, {
          children: [(0, Gj.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: SM(`${az}questBookSidesDone`)
          }), (0, Gj.jsx)("ol", {
            className: "Baf2BookQuests",
            children: PM.map((MM => (0, Gj.jsx)(Rz, {
              quest: MM,
              upcoming: !1,
              t: SM
            }, tz(MM))))
          })]
        })]
      })
    }

    function sz(MM) {
      var rM, iM, jM;
      let {
        store: aM,
        tutorial: PM,
        close: nM
      } = MM;
      const {
        t: QM
      } = (0, tS.A)(), LM = (0, iz.e)(kS, aM.get()), mM = null !== (rM = LM.tier) && void 0 !== rM ? rM : 1, [HM, hM] = (0, OM.useState)(null), yM = (null === HM || void 0 === HM ? void 0 : HM.at) === mM ? HM.tier : mM, lM = (0, OM.useRef)(null), EM = null !== LM.chapters;
      (0, OM.useEffect)((() => {
        var MM;
        lM.current && (lM.current.scrollTop = 0);
        const rM = null === (MM = lM.current) || void 0 === MM ? void 0 : MM.querySelector(".Baf2BookQuest.Current");
        if (lM.current && rM) {
          const MM = rM.getBoundingClientRect().bottom - lM.current.getBoundingClientRect().bottom;
          MM > 0 && (lM.current.scrollTop += Math.min(MM, rM.getBoundingClientRect().top - lM.current.getBoundingClientRect().top))
        }
      }), [yM, EM]);
      const UM = null === (iM = LM.chapters) || void 0 === iM ? void 0 : iM.find((MM => {
        let [rM] = MM;
        return rM === yM
      }));
      return (0, Gj.jsx)(ya.e, {
        close: nM,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Gj.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: Pz,
          children: [(0, Gj.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Gj.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: QM(`${az}questBookTitle`)
            }), (0, Gj.jsx)(la.p, {
              className: "Baf2BookTutorialButton",
              disabled: !LM.tutorialKnown,
              ariaLabel: QM(Cz[LM.tutorial]),
              title: QM(Cz[LM.tutorial]),
              onClick: () => {
                PM.next()
              },
              children: (0, Gj.jsx)(gS.b, {
                name: Gz[LM.tutorial]
              })
            }), (0, Gj.jsx)(la.l, {
              onClick: nM
            })]
          }), (0, Gj.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": QM(`${az}questBookChapters`),
            "data-pad-initial-area": !0,
            children: SM.slice(0, zM()).map(((MM, rM) => {
              const iM = rM + 1,
                {
                  kind: OM,
                  short: SM
                } = dM(iM),
                jM = JM(iM, mM),
                aM = jM ? QM(`${az}coreAtomicHidden`) : hz(QM, iM);
              return (0, Gj.jsx)("li", {
                children: (0, Gj.jsx)("button", {
                  type: "button",
                  className: CS()({
                    Stage: "tier" !== OM,
                    Atomic: "atomic" === OM,
                    Current: iM === mM,
                    Selected: iM === yM
                  }),
                  disabled: iM > mM,
                  "aria-pressed": iM === yM,
                  "aria-label": aM,
                  title: jM ? void 0 : aM,
                  onClick: () => {
                    hM({
                      tier: iM,
                      at: mM
                    })
                  },
                  children: jM ? "?" : SM
                })
              }, MM.nameKey)
            }))
          }), (0, Gj.jsxs)("div", {
            ref: lM,
            className: "Baf2BookBody",
            children: [NS(LM) && yM === mM && (0, Gj.jsx)("p", {
              className: "Baf2BookEmpty",
              children: QM(`${az}questBookAllDone`)
            }), (0, Gj.jsx)(Wz, {
              view: LM,
              tier: yM,
              quests: null !== (jM = null === UM || void 0 === UM ? void 0 : UM[1]) && void 0 !== jM ? jM : null,
              t: QM
            })]
          })]
        })
      })
    }
    const Dz = "buildAFactory2Game:";

    function kz(MM) {
      let {
        tiers: rM,
        from: iM,
        tier: OM,
        shown: SM,
        LH: jM
      } = MM;
      const {
        t: aM
      } = (0, tS.A)(), PM = rM.map(((MM, rM) => {
        const PM = iM + rM,
          {
            kind: nM,
            short: QM
          } = dM(PM),
          zM = JM(PM, OM);
        return (0, Gj.jsx)("li", {
          children: (0, Gj.jsx)("button", {
            type: "button",
            className: CS()({
              Stage: "tier" !== nM,
              Silhouette: zM,
              Reached: PM <= OM,
              Current: PM === OM,
              Next: PM === OM + 1,
              Selected: PM === SM
            }),
            disabled: zM,
            "aria-pressed": PM === SM,
            "aria-label": zM ? aM(`${Dz}coreAtomicHidden`) : void 0,
            title: zM ? void 0 : aM(`${Dz}${MM.nameKey}`),
            onClick: () => {
              jM(PM)
            },
            children: zM ? "?" : QM
          })
        }, MM.nameKey)
      }));
      return (0, Gj.jsx)(Gj.Fragment, {
        children: PM
      })
    }

    function Zz(MM) {
      let {
        id: rM,
        label: iM,
        tiers: OM,
        from: SM,
        ...jM
      } = MM;
      return (0, Gj.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, Gj.jsx)("span", {
          id: rM,
          className: "Baf2CoreLadderLabel",
          children: iM
        }), (0, Gj.jsx)("ol", {
          "aria-labelledby": rM,
          children: (0, Gj.jsx)(kz, {
            ...jM,
            tiers: OM,
            from: SM
          })
        })]
      })
    }

    function oz(MM) {
      const {
        t: rM
      } = (0, tS.A)(), iM = SM.findIndex((MM => void 0 !== MM.stage)), OM = SM.findIndex((MM => void 0 !== MM.reactorTier)), jM = iM < 0 ? SM : SM.slice(0, iM), aM = iM < 0 ? [] : SM.slice(iM, OM < 0 ? void 0 : OM), nM = OM < 0 || !PM() ? [] : SM.slice(OM);
      return (0, Gj.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, Gj.jsx)(Zz, {
          ...MM,
          id: "baf2CoreTiersLabel",
          label: rM(`${Dz}coreTiersLabel`),
          tiers: jM,
          from: 1
        }), aM.length > 0 && (0, Gj.jsx)(Zz, {
          ...MM,
          id: "baf2CoreStagesLabel",
          label: rM(`${Dz}coreStagesLabel`),
          tiers: aM,
          from: iM + 1
        }), nM.length > 0 && (0, Gj.jsx)(Zz, {
          ...MM,
          id: "baf2CoreAtomicLabel",
          label: rM(`${Dz}coreAtomicLabel`),
          tiers: nM,
          from: OM + 1
        })]
      })
    }
    const fz = "buildAFactory2Game:";

    function Yz(MM) {
      let {
        item: rM,
        itemNames: iM,
        children: OM
      } = MM;
      return (0, Gj.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, Gj.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, Gj.jsx)(uS.b, {
            itemName: rM,
            amount: 0
          })
        }), (0, Gj.jsx)(RS.b, {
          text: iM[rM]
        }), OM]
      })
    }

    function Nz(MM) {
      const rM = new Map;
      for (const {
          block: OM
        }
        of MM.newDeposits) {
        var iM;
        rM.set(OM, (null !== (iM = rM.get(OM)) && void 0 !== iM ? iM : 0) + 1)
      }
      return [...rM]
    }

    function Az(MM) {
      let {
        value: rM,
        label: iM,
        more: OM
      } = MM;
      return (0, Gj.jsxs)("li", {
        children: [(0, Gj.jsx)("strong", {
          children: rM
        }), (0, Gj.jsx)("span", {
          children: iM
        }), OM > 0 && (0, Gj.jsxs)("em", {
          children: ["+", OM]
        })]
      })
    }

    function xz(MM) {
      let {
        items: rM,
        itemNames: iM
      } = MM;
      const {
        t: SM
      } = (0, tS.A)(), [jM, aM] = (0, OM.useState)(null), PM = null !== jM && rM.includes(jM) ? jM : null;
      return (0, Gj.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, Gj.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: SM(`${fz}coreRewardUnlocks`)
        }), (0, Gj.jsx)("ul", {
          children: rM.map((MM => (0, Gj.jsx)("li", {
            children: (0, Gj.jsx)("button", {
              type: "button",
              className: CS()("Baf2PanelIcon", {
                Picked: MM === PM
              }),
              title: (0, Mj.e)(SM, MM),
              "aria-label": (0, Mj.e)(SM, MM),
              "aria-pressed": MM === PM,
              onClick: () => {
                aM(MM === PM ? null : MM)
              },
              children: (0, Gj.jsx)(uS.b, {
                itemName: MM,
                amount: 0
              })
            })
          }, MM)))
        }), (0, Gj.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== PM && (0, Gj.jsxs)(Gj.Fragment, {
            children: [(0, Gj.jsx)(RS.b, {
              text: iM[PM]
            }), " \xb7 ", (0, Gj.jsx)(RS.b, {
              text: iM[RM(PM)]
            })]
          }), null === PM && SM(`${fz}coreRecipeTap`)]
        })]
      })
    }

    function vz(MM) {
      var rM, iM;
      let {
        def: OM,
        tier: SM,
        itemNames: jM
      } = MM;
      const {
        t: aM
      } = (0, tS.A)(), PM = SM > 1 ? yM(SM - 1) : void 0, nM = Math.round(2 * OM.islandRadius), QM = PM ? Math.round(2 * PM.islandRadius) : nM, zM = SM >= 3 ? eO(SM) : null;
      return (0, Gj.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, Gj.jsxs)("ul", {
          className: CS()("Baf2CoreStats", {
            Four: null !== zM
          }),
          children: [(0, Gj.jsx)(Az, {
            value: `${nM}\xd7${nM}`,
            label: aM(`${fz}coreStatIsland`),
            more: nM - QM
          }), (0, Gj.jsx)(Az, {
            value: String(OM.machineAllowance),
            label: aM(`${fz}coreStatMachines`),
            more: OM.machineAllowance - (null !== (rM = null === PM || void 0 === PM ? void 0 : PM.machineAllowance) && void 0 !== rM ? rM : OM.machineAllowance)
          }), (0, Gj.jsx)(Az, {
            value: String(OM.beltAllowance),
            label: aM(`${fz}coreStatBelts`),
            more: OM.beltAllowance - (null !== (iM = null === PM || void 0 === PM ? void 0 : PM.beltAllowance) && void 0 !== iM ? iM : OM.beltAllowance)
          }), null !== zM && (0, Gj.jsx)(Az, {
            value: String(zM),
            label: aM(`${fz}coreStatStorage`),
            more: zM - (PM ? eO(SM - 1) : zM)
          })]
        }), OM.reward && (0, Gj.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, Gj.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: aM(`${fz}coreRewardItem`)
          }), (0, Gj.jsx)(Yz, {
            item: OM.reward,
            itemNames: jM
          })]
        }), OM.newDeposits.length > 0 && (0, Gj.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, Gj.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: aM(OM.newDeposits.length > 1 ? `${fz}coreRewardDeposits` : `${fz}coreRewardDeposit`)
          }), Nz(OM).map((MM => {
            let [rM, iM] = MM;
            return (0, Gj.jsx)(Yz, {
              item: rM,
              itemNames: jM,
              children: iM > 1 && ` \xd7${iM}`
            }, rM)
          }))]
        }), OM.unlocks.length > 0 && (0, Gj.jsx)(xz, {
          items: OM.unlocks,
          itemNames: jM
        }), (0, Gj.jsx)(Fz, {
          tier: SM
        })]
      })
    }

    function Fz(MM) {
      let {
        tier: rM
      } = MM;
      const {
        t: iM
      } = (0, tS.A)(), OM = JS[rM];
      if (!OM) return null;
      const SM = hS(rM, 0, 0).barrierMax !== hS(rM - 1, 0, 0).barrierMax;
      return (0, Gj.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, Gj.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, Gj.jsx)(uS.b, {
            itemName: SM ? nS.Chestplate : PS,
            amount: 0
          })
        }), iM(`${fz}gearPerkLine`, {
          perk: iM(`${fz}${OM}`)
        })]
      })
    }

    function Bz(MM, rM) {
      return null === MM ? rM : MM.value
    }

    function Xz(MM, rM, iM, OM) {
      let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === MM || iM - MM.atMs >= OM ? null : SM(MM.value, rM) ? MM.armed ? null : MM : MM.armed ? MM : {
        ...MM,
        armed: !0
      }
    }

    function Iz(MM, rM) {
      const iM = rM.filter((rM => {
        var iM;
        return !1 !== (null === (iM = MM.get(rM)) || void 0 === iM ? void 0 : iM.value)
      }));
      for (const [OM, SM] of MM) SM.value && !rM.includes(OM) && iM.push(OM);
      return iM
    }

    function Kz(MM, rM, iM, SM) {
      const [jM, aM] = (0, OM.useState)((() => new Map)), PM = () => {
        aM((rM => function(MM, rM, iM, OM) {
          var SM;
          let jM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            aM = null;
          for (const [PM, nM] of MM) {
            const SM = Xz(nM, rM(PM), iM, OM, jM);
            SM !== nM && (aM ??= new Map(MM), null === SM ? aM.delete(PM) : aM.set(PM, SM))
          }
          return null !== (SM = aM) && void 0 !== SM ? SM : MM
        }(rM, MM, Date.now(), iM, SM)))
      };
      (0, OM.useEffect)((() => {
        PM()
      }), [rM, iM]), (0, OM.useEffect)((() => {
        if (0 === jM.size) return;
        const MM = Math.min(...[...jM.values()].map((MM => MM.atMs))),
          rM = setTimeout(PM, Math.max(0, MM + iM - Date.now()) + 1);
        return () => {
          clearTimeout(rM)
        }
      }), [jM, rM, iM]);
      return [jM, (rM, iM) => {
        aM((OM => {
          const jM = new Map(OM);
          return jM.set(rM, function(MM, rM, iM) {
            return {
              value: MM,
              atMs: iM,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(MM, rM)
            }
          }(iM, MM(rM), Date.now(), SM)), jM
        }))
      }]
    }
    const qz = "buildAFactory2Game:";

    function Tz(MM) {
      let {
        message: rM,
        itemNames: iM
      } = MM;
      const SM = oa(),
        {
          t: jM
        } = (0, tS.A)(),
        [aM, PM] = (0, OM.useState)(!1),
        [nM, QM] = function(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ra;
          const [iM, OM] = Kz((rM => MM.includes(rM)), MM, rM, Object.is);
          return [Iz(iM, MM), OM]
        }(rM.baf2CoreBankPaused),
        zM = new Set(nM),
        LM = [...rM.baf2CoreBanked];
      for (const OM of zM) LM.some((MM => {
        let [rM] = MM;
        return rM === OM
      })) || LM.push([OM, 0]);
      return 0 === LM.length ? null : (0, Gj.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, Gj.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": aM,
          onClick: () => {
            PM(!aM)
          },
          children: [(0, Gj.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: jM(`${qz}coreBankedLater`)
          }), (0, Gj.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: LM.map((MM => {
              let [rM, iM] = MM;
              const OM = zM.has(rM);
              return (0, Gj.jsxs)("span", {
                className: CS()({
                  Paused: OM
                }),
                title: OM ? jM(`${qz}coreBankPausedTag`) : void 0,
                children: [(0, Gj.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, Gj.jsx)(uS.b, {
                    itemName: rM,
                    amount: 0
                  })
                }), iM, OM && (0, Gj.jsx)(gS.b, {
                  name: "pause"
                })]
              }, rM)
            }))
          }), (0, Gj.jsx)(gS.b, {
            name: aM ? "angle-up" : "angle-down"
          })]
        }), aM && (0, Gj.jsxs)(Gj.Fragment, {
          children: [(0, Gj.jsx)("ul", {
            children: LM.map((MM => {
              let [rM, OM] = MM;
              const aM = zM.has(rM);
              return (0, Gj.jsxs)("li", {
                children: [(0, Gj.jsxs)(Yz, {
                  item: rM,
                  itemNames: iM,
                  children: [(0, Gj.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: OM
                  }), aM && (0, Gj.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: jM(`${qz}coreBankPausedTag`)
                  })]
                }), (0, Gj.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, Gj.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === OM,
                    onClick: () => {
                      SM.send(`baf2corewithdraw ${OM} ${rM}`)
                    },
                    children: jM(`${qz}coreTake`)
                  }), (0, Gj.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      SM.send(`${UM} ${rM}`), QM(rM, !aM)
                    },
                    children: jM(aM ? `${qz}coreBankResume` : `${qz}coreBankStop`)
                  })]
                })]
              }, rM)
            }))
          }), (0, Gj.jsx)("p", {
            className: "Baf2CoreHint",
            children: jM(`${qz}coreBankNote`)
          })]
        })]
      })
    }
    const Vz = "buildAFactory2Game:";

    function cz(MM) {
      const rM = Math.max(0, Math.floor(MM));
      return `${Math.floor(rM/60)}:${String(rM%60).padStart(2,"0")}`
    }

    function ML(MM) {
      let {
        item: rM
      } = MM;
      return (0, Gj.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, Gj.jsx)(uS.b, {
          itemName: rM,
          amount: 0
        })
      })
    }

    function rL() {
      return (0, Gj.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, Gj.jsx)(gS.b, {
          name: "bolt"
        })
      })
    }

    function iL(MM) {
      let {
        charge: rM,
        hint: iM,
        itemNames: OM
      } = MM;
      const SM = oa(),
        {
          t: jM
        } = (0, tS.A)(),
        [aM, PM, nM, QM, zM, LM, mM] = rM,
        [HM, hM] = function(MM) {
          var rM;
          let iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ra,
            OM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [SM, jM] = Kz((() => MM), MM, iM, OM);
          return [Bz(null !== (rM = SM.get("")) && void 0 !== rM ? rM : null, MM), MM => {
            jM("", MM)
          }]
        }(mM),
        JM = HM === mM ? LM : !HM,
        dM = QM >= zM,
        yM = aM.find((MM => {
          let [, rM, iM] = MM;
          return iM < .9 * rM
        }));
      let lM = `${Vz}coreChargeWaiting`,
        EM = {};
      return dM ? lM = `${Vz}coreChargeDone` : HM ? lM = `${Vz}coreChargeStopped` : JM && iM ? (lM = `${Vz}${iM[0]}`, EM = {
        item: (0, Mj.e)(jM, iM[1])
      }) : JM && yM ? (lM = `${Vz}coreChargeShort`, EM = {
        item: (0, Mj.e)(jM, yM[0])
      }) : JM && PM > 0 && !nM ? lM = `${Vz}coreChargePower` : JM && (lM = `${Vz}coreChargeRunning`), (0, Gj.jsxs)("div", {
        className: CS()("Baf2CoreCharge", {
          Waiting: !JM && !dM,
          Done: dM
        }),
        children: [(0, Gj.jsxs)("h4", {
          children: [jM(`${Vz}coreChargeTitle`), (0, Gj.jsx)("span", {
            children: jM(`${Vz}coreChargeProgress`, {
              done: cz(QM),
              need: cz(zM)
            })
          })]
        }), (0, Gj.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, Gj.jsx)("div", {
            style: {
              width: 100 * Math.min(QM, zM) / zM + "%"
            }
          })
        }), (0, Gj.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [aM.map((MM => {
            var rM;
            let [iM, SM, aM] = MM;
            const PM = aM >= .9 * SM;
            return (0, Gj.jsxs)("li", {
              className: CS()({
                Done: PM,
                Short: JM && !PM
              }),
              children: [(0, Gj.jsx)(ML, {
                item: iM
              }), (0, Gj.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, Gj.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, Gj.jsx)(RS.b, {
                    text: null !== (rM = OM[iM]) && void 0 !== rM ? rM : iM
                  }), (0, Gj.jsx)("span", {
                    children: jM(`${Vz}coreChargeItem`, {
                      now: String(aM),
                      need: String(SM)
                    })
                  })]
                }), (0, Gj.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, Gj.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*aM/SM)}%`
                    }
                  })
                })]
              })]
            }, iM)
          })), PM > 0 && (0, Gj.jsxs)("li", {
            className: CS()("Baf2CoreChargePower", {
              Short: JM && !nM
            }),
            children: [(0, Gj.jsx)(rL, {}), (0, Gj.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, Gj.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, Gj.jsx)("span", {
                  children: jM(`${Vz}coreChargePowerRow`, {
                    power: TM(PM)
                  })
                })
              })
            })]
          })]
        }), (0, Gj.jsx)("p", {
          className: "Baf2CoreHint",
          children: jM(lM, EM)
        }), !dM && (JM || HM) && (0, Gj.jsx)("button", {
          type: "button",
          className: CS()("Baf2CoreChargeToggle", {
            Stopped: HM
          }),
          onClick: () => {
            SM.send(CM), hM(!HM)
          },
          children: jM(HM ? `${Vz}coreChargeRestart` : `${Vz}coreChargeStop`)
        })]
      })
    }

    function OL(MM) {
      let {
        charge: rM,
        reached: iM,
        itemNames: OM
      } = MM;
      const {
        t: SM
      } = (0, tS.A)();
      return (0, Gj.jsxs)("div", {
        className: CS()("Baf2CoreCharge", {
          Done: iM
        }),
        children: [(0, Gj.jsxs)("h4", {
          children: [SM(`${Vz}coreChargeTitle`), (0, Gj.jsx)("span", {
            children: SM(`${Vz}coreChargeSpecTime`, {
              time: cz(rM.seconds)
            })
          })]
        }), (0, Gj.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [rM.items.map((MM => {
            var rM;
            let {
              item: jM,
              amount: aM
            } = MM;
            return (0, Gj.jsxs)("li", {
              className: CS()({
                Done: iM
              }),
              children: [(0, Gj.jsx)(ML, {
                item: jM
              }), (0, Gj.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, Gj.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, Gj.jsx)(RS.b, {
                    text: null !== (rM = OM[jM]) && void 0 !== rM ? rM : jM
                  }), (0, Gj.jsx)("span", {
                    children: SM(`${Vz}coreChargeSpecItem`, {
                      need: String(aM)
                    })
                  })]
                })
              })]
            }, jM)
          })), rM.powerPerS > 0 && (0, Gj.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, Gj.jsx)(rL, {}), (0, Gj.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, Gj.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, Gj.jsx)("span", {
                  children: SM(`${Vz}coreChargePowerRow`, {
                    power: TM(rM.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const SL = "buildAFactory2Game:";

    function jL(MM) {
      let {
        def: rM,
        reached: iM,
        banked: OM,
        itemNames: SM
      } = MM;
      const {
        t: jM
      } = (0, tS.A)();
      return (0, Gj.jsx)("ul", {
        className: "Baf2CoreCost",
        children: rM.cost.map((MM => {
          let {
            item: rM,
            amount: aM
          } = MM;
          const PM = iM ? 0 : OM(rM);
          return (0, Gj.jsx)("li", {
            children: (0, Gj.jsx)(Yz, {
              item: rM,
              itemNames: SM,
              children: (0, Gj.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: PM > 0 ? jM(`${SL}coreBankedFor`, {
                  amount: String(PM),
                  total: String(aM)
                }) : `\xd7${aM}`
              })
            })
          }, rM)
        }))
      })
    }

    function aL(MM, rM) {
      if (rM >= zM()) return MM(`${SL}coreMaxTier`);
      const iM = QM[rM + 1];
      return iM && !iM.startsWith("upgradeCore") ? MM(`${SL}coreGateQuest`, {
        quest: MM(`${SL}quest_${iM}`)
      }) : MM(`${SL}coreGateClosed`)
    }

    function PL() {
      const {
        t: MM
      } = (0, tS.A)(), rM = oa(), iM = (0, OM.useRef)(null), SM = (0, OM.useRef)(Date.now());
      return XQ(!0, iM), (0, Gj.jsx)("div", {
        ref: iM,
        className: "Baf2CoreGrow",
        children: (0, Gj.jsx)(la.p, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - SM.current >= 600 && rM.send(EM)
          },
          children: MM(`${SL}coreGrow`)
        })
      })
    }

    function nL(MM) {
      let {
        message: rM,
        itemNames: iM,
        next: OM
      } = MM;
      const SM = oa(),
        {
          t: jM
        } = (0, tS.A)(),
        aM = rM.baf2CoreTier,
        PM = rM.baf2CoreReady,
        nM = rM.baf2CoreNeeds.filter((MM => {
          let [, rM, iM, OM] = MM;
          return OM > 0 && rM < iM
        })),
        QM = rM.baf2CoreNeeds.every((MM => {
          let [, rM, iM] = MM;
          return rM >= iM
        })),
        zM = rM.baf2CoreKeep;
      return (0, Gj.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, Gj.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [PM && (0, Gj.jsx)(PL, {}), (0, Gj.jsx)("h3", {
            children: jM(`${SL}coreBring`)
          }), (0, Gj.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: rM.baf2CoreNeeds.map((MM => {
              let [rM, OM, aM, PM] = MM;
              return (0, Gj.jsxs)("li", {
                className: CS()({
                  Done: OM >= aM
                }),
                children: [(0, Gj.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, Gj.jsx)(uS.b, {
                    itemName: rM,
                    amount: 0
                  })
                }), (0, Gj.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, Gj.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, Gj.jsx)(RS.b, {
                      text: iM[rM]
                    }), (0, Gj.jsxs)("span", {
                      children: [OM, "/", aM]
                    })]
                  }), (0, Gj.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, Gj.jsx)("div", {
                      style: {
                        width: 100 * OM / aM + "%"
                      }
                    }), PM > 0 && (0, Gj.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * PM / aM + "%"
                      }
                    })]
                  })]
                }), PM > 0 && OM < aM && (0, Gj.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    SM.send(`${GM} ${rM}`)
                  },
                  children: jM(`${SL}coreDeposit`, {
                    amount: String(PM)
                  })
                })]
              }, rM)
            }))
          }), rM.baf2CoreCharge && (0, Gj.jsx)(iL, {
            charge: rM.baf2CoreCharge,
            hint: rM.baf2CoreChargeHint,
            itemNames: iM
          }), !PM && nM.length > 1 && (0, Gj.jsx)(la.p, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              SM.send(EM)
            },
            children: jM(`${SL}coreHandOver`)
          }), !PM && void 0 !== zM && (0, Gj.jsx)("p", {
            className: "Baf2CoreHint",
            children: jM(`${SL}coreKeepRest`, {
              item: (0, Mj.e)(jM, zM)
            })
          }), !PM && !QM && 0 === nM.length && void 0 === zM && (0, Gj.jsx)("p", {
            className: "Baf2CoreHint",
            children: jM(`${SL}coreNothingHeld`)
          }), (0, Gj.jsx)(Tz, {
            message: rM,
            itemNames: iM
          })]
        }), (0, Gj.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, Gj.jsx)("h3", {
            children: jM(`${SL}coreRewards`)
          }), (0, Gj.jsx)(vz, {
            def: OM,
            tier: aM + 1,
            itemNames: iM
          })]
        })]
      })
    }

    function QL(MM) {
      let {
        message: rM,
        itemNames: iM,
        shown: OM
      } = MM;
      const {
        t: SM
      } = (0, tS.A)(), jM = rM.baf2CoreTier, aM = yM(OM), PM = OM <= jM, nM = new Map(rM.baf2CoreBanked), QM = !lM(jM, eM(rM)) && OM === jM;
      return (0, Gj.jsxs)("div", {
        className: CS()("Baf2CoreBody", {
          Locked: !PM
        }),
        children: [(0, Gj.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, Gj.jsx)("h3", {
            children: SM(PM ? `${SL}coreItTook` : `${SL}coreItNeeds`)
          }), 0 === aM.cost.length && (0, Gj.jsx)("p", {
            className: "Baf2CoreHint",
            children: SM(`${SL}coreTierStart`)
          }), aM.cost.length > 0 && (0, Gj.jsx)(jL, {
            def: aM,
            reached: PM,
            banked: MM => {
              var rM;
              return function(MM, rM, iM, OM) {
                let SM = MM;
                for (let aM = rM + 2; aM <= iM; aM++) {
                  var jM;
                  const MM = yM(aM).cost.find((MM => MM.item === OM)),
                    rM = Math.min(SM, null !== (jM = null === MM || void 0 === MM ? void 0 : MM.amount) && void 0 !== jM ? jM : 0);
                  if (aM === iM) return rM;
                  SM -= rM
                }
                return 0
              }(null !== (rM = nM.get(MM)) && void 0 !== rM ? rM : 0, jM, OM, MM)
            },
            itemNames: iM
          }), aM.charge && (0, Gj.jsx)(OL, {
            charge: aM.charge,
            reached: PM,
            itemNames: iM
          }), QM && (0, Gj.jsxs)(Gj.Fragment, {
            children: [(0, Gj.jsx)("p", {
              className: "Baf2CoreHint",
              children: aL(SM, jM)
            }), (0, Gj.jsx)(Tz, {
              message: rM,
              itemNames: iM
            })]
          })]
        }), (0, Gj.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, Gj.jsx)("h3", {
            children: SM(PM ? `${SL}coreGave` : `${SL}coreLockedRewards`)
          }), (0, Gj.jsx)(vz, {
            def: aM,
            tier: OM,
            itemNames: iM
          })]
        })]
      })
    }

    function zL(MM, rM) {
      const {
        key: iM,
        params: OM
      } = HM(rM - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return MM(`${SL}${iM}`, OM)
    }
    const LL = "buildAFactory2Game:",
      mL = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      HL = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function hL(MM) {
      let {
        view: rM,
        close: iM,
        askIslands: SM
      } = MM;
      const {
        t: jM
      } = (0, tS.A)(), [aM, PM] = (0, OM.useState)(!1);
      (0, OM.useEffect)((() => {
        if (!aM) return;
        const MM = window.setTimeout((() => {
          PM(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(MM)
        }
      }), [aM]);
      const {
        message: nM,
        itemNames: QM
      } = rM, zM = nM.baf2CoreTier, LM = yM(zM), mM = lM(zM, eM(nM)), [JM, dM] = nM.baf2CoreMachines, [EM, UM] = nM.baf2CoreBelts, GM = nM.baf2CoreStorage, CM = nM.baf2CoreReady, [bM, wM] = (0, OM.useState)(null), tM = (null === bM || void 0 === bM ? void 0 : bM.at) === zM && bM.ready === CM ? bM.tier : mM ? zM + 1 : zM;
      let gM = "coreTierLocked";
      tM <= zM ? gM = "coreTierReached" : tM === zM + 1 && (gM = "coreTierNext");
      const uM = jM(`${LL}${yM(tM).nameKey}`),
        RM = tM === zM + 1 ? mM : null,
        pM = HM(tM, {
          tier: gM,
          stage: mL[gM],
          atomic: HL[gM]
        }),
        WM = jM(`${LL}${pM.key}`, {
          ...pM.params,
          name: uM
        }),
        sM = HM(zM, hM),
        DM = jM(`${LL}${sM.key}`, {
          ...sM.params,
          name: jM(`${LL}${LM.nameKey}`)
        });
      return (0, Gj.jsx)(ya.e, {
        close: iM,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, Gj.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, Gj.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Gj.jsxs)("div", {
              children: [(0, Gj.jsx)("h2", {
                id: "baf2CoreTitle",
                children: jM(`${LL}coreTitle`)
              }), void 0 !== nM.baf2CoreIslandName && (0, Gj.jsx)("p", {
                className: "Baf2CoreIsland",
                children: nM.baf2CoreIslandName
              }), (0, Gj.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, Gj.jsx)("span", {
                  children: DM
                }), (0, Gj.jsx)("span", {
                  className: CS()({
                    Full: JM >= dM
                  }),
                  children: jM(`${LL}coreMachineCount`, {
                    amount: String(JM),
                    total: String(dM)
                  })
                }), (0, Gj.jsx)("span", {
                  className: CS()({
                    Full: EM >= UM
                  }),
                  children: jM(`${LL}coreBeltCount`, {
                    amount: String(EM),
                    total: String(UM)
                  })
                }), void 0 !== GM && (0, Gj.jsx)("span", {
                  className: CS()({
                    Full: GM[0] >= GM[1]
                  }),
                  children: jM(`${LL}coreStorageCount`, {
                    amount: String(GM[0]),
                    total: String(GM[1])
                  })
                })]
              })]
            }), (0, Gj.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [nM.baf2CoreIslands && (0, Gj.jsx)(la.e, {
                className: "Baf2CoreIslandsButton",
                disabled: aM,
                onClick: () => {
                  PM(!0), SM()
                },
                children: jM(`${LL}islandsOpenButton`)
              }), (0, Gj.jsx)(la.l, {
                onClick: iM
              })]
            })]
          }), (0, Gj.jsx)(oz, {
            tier: zM,
            shown: tM,
            LH: MM => {
              wM({
                tier: MM,
                at: zM,
                ready: CM
              })
            }
          }), (0, Gj.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [WM, tM > zM + 1 && (0, Gj.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: zL(jM, tM)
            })]
          }), 6 === tM && tM > zM && (0, Gj.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: jM(`${LL}coreStagesNote`)
          }), 11 === tM && tM > zM && (0, Gj.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: jM(`${LL}coreAtomicNote`)
          }), RM && (0, Gj.jsx)(nL, {
            message: nM,
            itemNames: QM,
            next: RM
          }), !RM && (0, Gj.jsx)(QL, {
            message: nM,
            itemNames: QM,
            shown: tM
          })]
        })
      })
    }
    const JL = {
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
    const dL = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: Sj,
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

    function yL(MM) {
      return MM.baf2DropCometOreOnly ? "dropCometOre" : MM.baf2DropCometIsotope ? "seed" === MM.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function lL(MM) {
      let {
        message: rM,
        quests: iM,
        close: SM,
        leave: jM
      } = MM;
      const aM = oa(),
        {
          t: PM
        } = (0, tS.A)(),
        nM = (0, iz.e)(kS, iM.get()),
        QM = function(MM) {
          var rM;
          if (!sM(MM.tutorial)) return null;
          const iM = MM.rows.find((MM => MM.current)),
            OM = iM ? JL[iM.key] : void 0;
          return null !== (rM = null !== OM && void 0 !== OM ? OM : MM.side ? JL[MM.side.row.key] : void 0) && void 0 !== rM ? rM : null
        }(nM),
        zM = null === nM.tier || Pj(nM.tier),
        LM = zM ? dL : dL.filter((MM => {
          let {
            item: rM
          } = MM;
          return rM !== Sj
        })),
        [mM, HM] = (0, OM.useState)(null),
        hM = null !== mM && void 0 !== mM ? mM : !rM.baf2DropFoundSalvage && zM,
        JM = rM.baf2DropRuinDistance,
        dM = rM.baf2DropComet,
        yM = rM.baf2DropOldWorks,
        lM = rM.baf2DropGrove,
        EM = function(MM) {
          return 2 + Number(void 0 !== MM.baf2DropComet) + Number(!!MM.baf2DropOwedComet || void 0 !== MM.baf2DropOwedWaitMinutes) + Number(void 0 !== MM.baf2DropDigDistance) + Number(void 0 !== MM.baf2DropOldWorks) + Number(void 0 !== MM.baf2DropGrove)
        }(rM),
        UM = MM => {
          aM.send(function(MM) {
            return `baf2drop ${MM}`
          }(MM)), jM()
        };
      let GM = PM("buildAFactory2Game:dropRuinNone");
      if (null !== JM) {
        let MM = rM.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        rM.baf2DropRuinOldWorks && (MM = "dropRuinOldWorks");
        const iM = void 0 === rM.baf2DropRuinCluster ? PM("buildAFactory2Game:dropRuinOpen") : PM("buildAFactory2Game:dropRuinCluster", {
          count: String(rM.baf2DropRuinCluster)
        });
        GM = `${PM(`buildAFactory2Game:${MM}`,{distance:String(JM)})} ${iM}`
      }
      let CM = PM("buildAFactory2Game:dropBelowDescription");
      void 0 !== rM.baf2DropBelowLook && (CM = PM("buildAFactory2Game:dropBelowLook", {
        look: PM(rM.baf2DropBelowLook)
      }));
      const eM = "buildAFactory2Game:wildsRegion_survivorGrove" === rM.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        bM = yj(PM, 60 * function(MM) {
          const [rM, iM] = (0, OM.useState)((() => Date.now())), [SM, jM] = (0, OM.useState)(rM);
          return (0, OM.useEffect)((() => {
            const MM = Date.now();
            iM(MM), jM(MM)
          }), [MM]), (0, OM.useEffect)((() => {
            const MM = window.setInterval((() => {
              jM(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(MM)
            }
          }), []), Math.max(1, MM.baf2DropRenewMinutes - Math.floor((SM - rM) / 6e4))
        }(rM)),
        wM = function(MM, rM, iM) {
          return "ruin" === MM && !iM || "owed" === MM && !rM.baf2DropOwedComet ? null : MM
        }(QM, rM, null !== JM),
        tM = function(MM) {
          for (var rM = arguments.length, iM = new Array(rM > 1 ? rM - 1 : 0), OM = 1; OM < rM; OM++) iM[OM - 1] = arguments[OM];
          return CS()("Baf2DropTile", ...iM, {
            Wanted: wM === MM
          })
        };
      return (0, Gj.jsx)(ya.e, {
        close: SM,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Gj.jsxs)("section", {
          className: CS()("Baf2Panel Baf2DropMap", {
            Many: EM >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, Gj.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Gj.jsxs)("div", {
              children: [(0, Gj.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: PM("buildAFactory2Game:dropMapTitle")
              }), (0, Gj.jsx)("p", {
                children: PM("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, Gj.jsx)(la.l, {
              onClick: SM
            })]
          }), (0, Gj.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== dM && (0, Gj.jsxs)(la.A, {
              className: tM("comet", "Baf2DropComet"),
              onClick: () => {
                UM("comet")
              },
              children: [(0, Gj.jsx)("strong", {
                children: PM("buildAFactory2Game:dropComet")
              }), (0, Gj.jsx)("span", {
                children: PM(`buildAFactory2Game:${yL(rM)}`, {
                  distance: String(dM)
                })
              })]
            }), rM.baf2DropOwedComet && (0, Gj.jsxs)(la.A, {
              className: tM("owed", "Baf2DropComet"),
              onClick: () => {
                UM("owed")
              },
              children: [(0, Gj.jsx)("strong", {
                children: PM("buildAFactory2Game:dropOwedComet")
              }), (0, Gj.jsx)("span", {
                children: rM.baf2DropOwedIsotope ? PM("buildAFactory2Game:dropOwedIsotopeDescription") : PM("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== rM.baf2DropOwedWaitMinutes && (0, Gj.jsxs)(la.A, {
              className: tM("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, Gj.jsx)("strong", {
                children: PM("buildAFactory2Game:dropOwedComet")
              }), (0, Gj.jsx)("span", {
                children: PM("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(rM.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, Gj.jsxs)(la.e, {
              className: tM("below"),
              onClick: () => {
                UM("below")
              },
              children: [(0, Gj.jsx)("strong", {
                children: PM("buildAFactory2Game:dropBelow")
              }), (0, Gj.jsx)("span", {
                children: CM
              })]
            }), void 0 !== rM.baf2DropDigDistance && (0, Gj.jsxs)(la.u, {
              className: tM("dig"),
              onClick: () => {
                UM("dig")
              },
              children: [(0, Gj.jsx)("strong", {
                children: PM("buildAFactory2Game:dropDig")
              }), (0, Gj.jsx)("span", {
                children: PM("buildAFactory2Game:dropDigDescription", {
                  distance: String(rM.baf2DropDigDistance),
                  y: dj(rM.baf2DropDigY)
                })
              })]
            }), void 0 !== lM && (0, Gj.jsxs)(la.u, {
              className: tM("grove", "Baf2DropGrove"),
              onClick: () => {
                UM("grove")
              },
              children: [(0, Gj.jsx)("strong", {
                children: PM("buildAFactory2Game:dropGrove")
              }), (0, Gj.jsx)("span", {
                children: PM(`buildAFactory2Game:${eM}`, {
                  distance: String(lM)
                })
              })]
            }), (0, Gj.jsxs)(la.p, {
              className: tM("ruin"),
              disabled: null === JM,
              onClick: () => {
                UM("ruin")
              },
              children: [(0, Gj.jsx)("strong", {
                children: PM("buildAFactory2Game:dropRuin")
              }), (0, Gj.jsx)("span", {
                children: GM
              })]
            }), void 0 !== yM && (0, Gj.jsxs)(la.J, {
              className: tM("works"),
              onClick: () => {
                UM("works")
              },
              children: [(0, Gj.jsx)("strong", {
                children: PM("buildAFactory2Game:dropOldWorks")
              }), (0, Gj.jsx)("span", {
                children: PM("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(yM)
                })
              })]
            })]
          }), (0, Gj.jsx)("p", {
            className: "Baf2DropRenew",
            children: PM("buildAFactory2Game:dropRenew", {
              time: bM
            })
          }), (0, Gj.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: hM,
            onToggle: MM => {
              MM.currentTarget.open !== hM && HM(MM.currentTarget.open)
            },
            children: [(0, Gj.jsx)("summary", {
              children: PM("buildAFactory2Game:dropSalvageWhat")
            }), (0, Gj.jsx)("p", {
              children: PM("buildAFactory2Game:dropSalvageIntro")
            }), (0, Gj.jsx)("ul", {
              children: LM.map((MM => {
                let {
                  item: rM,
                  nameKey: iM,
                  useKey: OM,
                  params: SM
                } = MM;
                return (0, Gj.jsxs)("li", {
                  children: [(0, Gj.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, Gj.jsx)(uS.b, {
                      itemName: rM,
                      amount: 0
                    })
                  }), (0, Gj.jsxs)("span", {
                    children: [(0, Gj.jsx)("strong", {
                      children: PM(iM)
                    }), ": ", PM(OM, SM)]
                  })]
                }, rM)
              }))
            })]
          })]
        })
      })
    }
    const EL = "buildAFactory2Game:";

    function UL(MM, rM) {
      return MM.sendIslandEdit(`baf2coopleave ${rM.baf2IslandId}`)
    }

    function GL(MM) {
      let {
        card: rM,
        canRename: iM,
        done: SM,
        t: jM
      } = MM;
      const aM = oa(),
        [PM, nM] = (0, OM.useState)(rM.baf2IslandName),
        QM = UQ(PM),
        zM = "" === QM || GQ(QM),
        LM = () => {
          !zM && iM && (QM !== rM.baf2IslandName ? SM(aM.sendIslandEdit(`baf2islandrename ${rM.baf2IslandId} ${QM}`)) : SM(null))
        },
        mM = () => {
          SM(null)
        };
      return (0, Gj.jsxs)("div", {
        className: "Baf2IslandForm",
        ...FQ(mM),
        children: [(0, Gj.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [jM(`${EL}islandsRenameLabel`), (0, Gj.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: PM,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: BQ,
            onChange: MM => {
              nM(MM.target.value)
            },
            ...vQ(LM, mM)
          })]
        }), "" === QM && (0, Gj.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: jM(`${EL}islandsRenameEmpty`)
        }), GQ(QM) && (0, Gj.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: jM(`${EL}islandsNameReserved`)
        }), (0, Gj.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, Gj.jsx)(la.u, {
            disabled: zM || !iM,
            onClick: LM,
            children: jM(`${EL}islandsRenameSave`)
          }), (0, Gj.jsx)(la.e, {
            onClick: mM,
            children: jM(`${EL}islandsCancel`)
          })]
        })]
      })
    }

    function CL(MM) {
      let {
        card: rM,
        canDelete: iM,
        done: SM,
        t: jM
      } = MM;
      const aM = oa(),
        [PM, nM] = (0, OM.useState)(""),
        QM = function(MM, rM) {
          return UQ(MM).toLowerCase() === UQ(rM).toLowerCase()
        }(PM, rM.baf2IslandName),
        zM = () => {
          QM && iM && SM(aM.sendIslandEdit(`baf2islanddelete ${rM.baf2IslandId}`))
        },
        LM = () => {
          SM(null)
        },
        mM = sQ("name"),
        [HM, hM = ""] = jM(`${EL}islandsDeleteConfirm`, {
          name: mM
        }).split(mM);
      return (0, Gj.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...FQ(LM),
        children: [(0, Gj.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, Gj.jsxs)("span", {
            children: [HM, (0, Gj.jsx)("strong", {
              children: rM.baf2IslandName
            }), hM]
          }), (0, Gj.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: PM,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: BQ,
            onChange: MM => {
              nM(MM.target.value)
            },
            ...vQ(zM, LM)
          })]
        }), YQ(rM) && (0, Gj.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: jM(`${EL}islandsDeleteLeftBack`)
        }), (0, Gj.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, Gj.jsx)(la.J, {
            disabled: !QM || !iM,
            onClick: zM,
            children: jM(`${EL}islandsDeleteForGood`)
          }), (0, Gj.jsx)(la.e, {
            onClick: LM,
            children: jM(`${EL}islandsCancel`)
          })]
        })]
      })
    }

    function eL(MM) {
      let {
        members: rM,
        t: iM
      } = MM;
      const OM = rM.length;
      return (0, Gj.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, Gj.jsxs)("span", {
          children: [1 === OM ? iM(`${EL}islandsPlayersOne`) : iM(`${EL}islandsPlayers`, {
            count: String(OM)
          }), " "]
        }), rM.map(((MM, rM) => (0, Gj.jsxs)("span", {
          className: CS()("Baf2IslandMember", {
            Here: MM.baf2MemberHere
          }),
          title: MM.baf2MemberHere ? iM(`${EL}islandsPlayerHere`) : void 0,
          children: [MM.baf2MemberName, rM < OM - 1 ? ", " : ""]
        }, MM.baf2MemberKey)))]
      })
    }

    function bL(MM) {
      let {
        card: rM,
        answered: iM,
        nowMs: SM,
        t: jM
      } = MM;
      const aM = oa(),
        [PM, nM] = (0, OM.useState)(new Map),
        QM = YQ(rM);
      if (!QM) return null;
      return (0, Gj.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, Gj.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: jM(`${EL}islandsLeftTitle`)
        }), (0, Gj.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: QM.left.map((MM => {
            const OM = MM.baf2LeftKey,
              zM = AQ(PM.get(OM), iM, SM),
              LM = function(MM) {
                return 1 === MM ? [`${dQ}islandsLeftItemsOne`] : [`${dQ}islandsLeftItems`, {
                  count: String(MM)
                }]
              }(MM.baf2LeftItems);
            return (0, Gj.jsx)("li", {
              className: CS()("Baf2IslandPerson", {
                Pending: zM
              }),
              children: (0, Gj.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, Gj.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: MM.baf2LeftName
                }), (0, Gj.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: jM(LM[0], LM[1])
                }), QM.claim && (0, Gj.jsx)(la.u, {
                  className: "Baf2IslandPersonButton",
                  disabled: zM,
                  onClick: () => {
                    (MM => {
                      const iM = aM.sendIslandEdit(`baf2coopclaim ${rM.baf2IslandId} ${MM}`);
                      nM((rM => new Map(rM).set(MM, {
                        atMs: Date.now(),
                        answer: iM
                      })))
                    })(OM)
                  },
                  children: jM(`${EL}islandsClaim`)
                })]
              })
            }, OM)
          }))
        }), QM.goThere && (0, Gj.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: jM(`${EL}islandsClaimGoThere`)
        })]
      })
    }

    function wL(MM) {
      let {
        card: rM,
        view: iM,
        blocked: SM,
        maxIslands: jM,
        answered: aM,
        nowMs: PM,
        done: nM,
        openSocial: QM,
        t: zM
      } = MM;
      const LM = oa(),
        [mM, HM] = (0, OM.useState)(new Map),
        [hM, JM] = (0, OM.useState)(new Map),
        [dM, yM] = (0, OM.useState)(null),
        lM = (0, OM.useRef)(null);
      qQ(lM);
      const EM = rM.baf2IslandId,
        UM = rM.baf2IslandCoop,
        GM = null !== UM && void 0 !== UM && UM.baf2CoopMembers.some((MM => MM.baf2MemberKey === dM)) ? dM : null,
        CM = function(MM, rM) {
          const iM = MM.baf2IslandCoop;
          return iM && NQ(iM) || null !== rM ? void 0 : MM.baf2IslandInvitable
        }(rM, SM),
        eM = function(MM, rM) {
          const iM = MM.baf2IslandCoop;
          return iM && NQ(iM) ? {
            key: `${dQ}islandsCoopFull`,
            params: {
              max: String(iM.baf2CoopMax)
            }
          } : void 0 !== MM.baf2IslandInvitable && null === rM || iM && !iM.baf2CoopManageHere ? null : "degraded" === rM || "stuck" === rM ? {
            key: `${dQ}islandsInviteNotLoaded`
          } : null === rM || function(MM) {
            return "notHome" === MM || "wilds" === MM || "visiting" === MM
          }(rM) || wQ(rM) ? {
            key: `${dQ}islandsInviteGoThere`
          } : {
            key: `${dQ}islandsInviteBusy`
          }
        }(rM, SM),
        bM = () => {
          var MM;
          yM(null), null === (MM = lM.current) || void 0 === MM || MM.focus()
        };
      return (0, Gj.jsxs)("div", {
        ref: lM,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...FQ(null === GM ? nM : bM),
        children: [UM && (0, Gj.jsxs)(Gj.Fragment, {
          children: [(0, Gj.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: zM(`${EL}islandsPlayersTitle`, {
              count: String(UM.baf2CoopMembers.length),
              max: String(UM.baf2CoopMax)
            })
          }), (0, Gj.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: UM.baf2CoopMembers.map(((MM, rM) => {
              const OM = MM.baf2MemberKey,
                SM = AQ(mM.get(OM), aM, PM);
              return (0, Gj.jsxs)("li", {
                className: CS()("Baf2IslandPerson", {
                  Pending: SM
                }),
                children: [(0, Gj.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, Gj.jsx)("span", {
                    className: CS()("Baf2IslandPersonName", {
                      Here: MM.baf2MemberHere
                    }),
                    children: MM.baf2MemberName
                  }), MM.baf2MemberHere && (0, Gj.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: zM(`${EL}islandsPlayerHere`)
                  }), 0 === rM && (0, Gj.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: zM(`${EL}islandsPlayerOwner`)
                  }), iM.remove && rM > 0 && !SM && GM !== OM && (0, Gj.jsx)(la.N, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var MM;
                      yM(OM), null === (MM = lM.current) || void 0 === MM || MM.focus()
                    },
                    children: zM(`${EL}islandsRemove`)
                  })]
                }), GM === OM && (0, Gj.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, Gj.jsx)("p", {
                    children: DQ(zM, `${EL}islandsRemoveConfirm`, {
                      player: MM.baf2MemberName
                    })
                  }), (0, Gj.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, Gj.jsx)(la.J, {
                      onClick: () => {
                        (MM => {
                          const rM = LM.sendIslandEdit(`baf2coopremove ${EM} ${MM.baf2MemberKey}`);
                          HM((iM => new Map(iM).set(MM.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: rM
                          }))), bM()
                        })(MM)
                      },
                      children: zM(`${EL}islandsRemoveYes`)
                    }), (0, Gj.jsx)(la.e, {
                      onClick: bM,
                      children: zM(`${EL}islandsCancel`)
                    })]
                  })]
                })]
              }, OM)
            }))
          })]
        }), (void 0 !== CM || null !== eM) && (0, Gj.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: zM(`${EL}islandsInviteTitle`)
        }), !UM && (void 0 !== CM || null !== eM) && (0, Gj.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: zM(`${EL}islandsInviteShareNote`)
        }), 0 === (null === CM || void 0 === CM ? void 0 : CM.length) && (0, Gj.jsx)(tL, {
          openSocial: QM,
          t: zM
        }), void 0 !== CM && CM.length > 0 && (0, Gj.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: CM.map((MM => {
            const rM = !0 === MM.baf2InvitableSent || AQ(hM.get(MM.baf2InvitableId), aM, PM);
            return (0, Gj.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, Gj.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, Gj.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: MM.baf2InvitableName
                }), MM.baf2InvitableFull && !rM && (0, Gj.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: zM(`${EL}islandsInviteTheirFull`, {
                    max: String(jM)
                  })
                }), (rM || !MM.baf2InvitableFull) && (0, Gj.jsx)(la.u, {
                  className: "Baf2IslandPersonButton",
                  disabled: rM,
                  onClick: () => {
                    (MM => {
                      const rM = LM.sendIslandEdit(`baf2coopinvite ${EM} ${MM}`);
                      JM((iM => new Map(iM).set(MM, {
                        atMs: Date.now(),
                        answer: rM
                      })))
                    })(MM.baf2InvitableId)
                  },
                  children: zM(rM ? `${EL}islandsInvited` : `${EL}islandsInvite`)
                })]
              })
            }, MM.baf2InvitableId)
          }))
        }), eM && (0, Gj.jsx)(cQ, {
          note: eM,
          t: zM
        }), (0, Gj.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, Gj.jsx)(la.e, {
            onClick: nM,
            children: zM(`${EL}islandsDone`)
          })
        })]
      })
    }

    function tL(MM) {
      let {
        openSocial: rM,
        t: iM
      } = MM;
      return (0, Gj.jsxs)(Gj.Fragment, {
        children: [(0, Gj.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: iM(rM ? `${EL}islandsInviteNobody` : `${EL}islandsInviteNobodyGuest`)
        }), rM && (0, Gj.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, Gj.jsx)(la.e, {
            onClick: rM,
            children: iM("socialBar:social")
          })
        })]
      })
    }

    function gL(MM) {
      let {
        className: rM,
        text: iM,
        ConfirmButton: SM,
        confirmLabel: jM,
        canConfirm: aM,
        send: PM,
        done: nM,
        t: QM
      } = MM;
      const zM = (0, OM.useRef)(null);
      qQ(zM);
      const LM = () => {
        nM(null)
      };
      return (0, Gj.jsxs)("div", {
        ref: zM,
        tabIndex: -1,
        className: CS()("Baf2IslandForm", rM),
        ...FQ(LM),
        children: [(0, Gj.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: iM
        }), (0, Gj.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, Gj.jsx)(SM, {
            disabled: !aM,
            onClick: () => {
              aM && nM(PM())
            },
            children: jM
          }), (0, Gj.jsx)(la.e, {
            onClick: LM,
            children: QM(`${EL}islandsCancel`)
          })]
        })]
      })
    }

    function uL(MM) {
      return "hidden" !== MM
    }

    function RL(MM) {
      var rM, iM;
      let {
        card: SM,
        keepOwn: jM,
        blocked: aM,
        maxIslands: PM,
        serverNowMs: nM,
        nowMs: QM,
        actions: zM,
        full: LM,
        waits: mM,
        answered: HM,
        mode: hM,
        setMode: JM,
        pending: dM,
        onSent: yM,
        switchTo: lM,
        leave: EM,
        coopOn: UM,
        openSocial: GM,
        t: CM
      } = MM;
      const eM = oa(),
        bM = SM.baf2IslandActive,
        wM = bM ? null : function(MM, rM) {
          if (MM <= 0) return null;
          const iM = rM - MM;
          if (iM < mj) return [`${dQ}islandsPlayedJustNow`];
          if (iM < yQ) return [`${dQ}islandsPlayedMinutes`, {
            minutes: String(Math.floor(iM / mj))
          }];
          if (iM < lQ) return [`${dQ}islandsPlayedHours`, {
            hours: String(Math.floor(iM / yQ))
          }];
          const OM = Math.floor(iM / lQ);
          return 1 === OM ? [`${dQ}islandsPlayedDay`] : [`${dQ}islandsPlayedDays`, {
            days: String(OM)
          }]
        }(SM.baf2IslandLastPlayedMs, nM),
        tM = void 0 === (gM = SM.baf2IslandItems) ? null : 0 === gM ? [`${dQ}islandsItemsNone`] : 1 === gM ? [`${dQ}islandsItemsOne`] : [`${dQ}islandsItems`, {
          count: String(gM)
        }];
      var gM;
      const uM = function(MM) {
          return MM ? 1 === MM ? [`${dQ}islandsWaitingOne`] : [`${dQ}islandsWaiting`, {
            count: String(MM)
          }] : null
        }(SM.baf2IslandWaiting),
        RM = SM.baf2IslandUnreadable,
        pM = SM.baf2IslandCoop,
        WM = fQ(SM, zM, jM, LM, UM, aM),
        sM = (0, OM.useRef)(null);
      XQ(null !== hM, sM);
      const DM = () => {
          var MM;
          JM(null), null === (MM = sM.current) || void 0 === MM || MM.focus()
        },
        kM = (MM, rM) => {
          DM(), null !== MM && yM(MM, rM)
        },
        ZM = (MM, rM) => CM(`${EL}${MM}`, {
          time: yj(CM, rM)
        });
      return (0, Gj.jsxs)("li", {
        ref: sM,
        tabIndex: -1,
        className: CS()("Baf2IslandCard", {
          Active: bM,
          Pending: dM,
          Shared: void 0 !== pM
        }),
        children: [(0, Gj.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, Gj.jsx)("strong", {
            className: "Baf2IslandName",
            children: SM.baf2IslandName
          }), bM && (0, Gj.jsx)("span", {
            className: "Baf2IslandBadge",
            children: CM(`${EL}islandsOnThis`)
          }), pM && (0, Gj.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: CM(`${EL}islandsShared`)
          })]
        }), "member" === (null === pM || void 0 === pM ? void 0 : pM.baf2CoopRole) && (0, Gj.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: DQ(CM, `${EL}islandsSharedBy`, {
            owner: pM.baf2CoopOwner
          })
        }), void 0 !== RM && (0, Gj.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: CM("newer" === RM ? `${EL}islandsUnreadable` : `${EL}islandsDamaged`)
        }), "corrupt" === RM && LM && (0, Gj.jsx)("p", {
          className: "Baf2IslandStats",
          children: CM(`${EL}islandsDamagedFull`)
        }), void 0 === RM && (0, Gj.jsxs)(Gj.Fragment, {
          children: [(0, Gj.jsx)(VQ, {
            tier: SM.baf2IslandTier,
            t: CM
          }), (0, Gj.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, Gj.jsx)("span", {
              children: 1 === SM.baf2IslandQuestsDone ? CM(`${EL}islandsQuestsDoneOne`) : CM(`${EL}islandsQuestsDone`, {
                count: String(SM.baf2IslandQuestsDone)
              })
            }), (0, Gj.jsx)("span", {
              children: 1 === SM.baf2IslandMachines ? CM(`${EL}islandsMachinesOne`) : CM(`${EL}islandsMachines`, {
                count: String(SM.baf2IslandMachines)
              })
            }), tM && (0, Gj.jsx)("span", {
              children: CM(tM[0], tM[1])
            }), uM && (0, Gj.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: CM(uM[0], uM[1])
            }), wM && (0, Gj.jsx)("span", {
              children: CM(wM[0], wM[1])
            })]
          })]
        }), pM && void 0 === pM.baf2CoopState && "people" !== hM && (0, Gj.jsx)(eL, {
          members: pM.baf2CoopMembers,
          t: CM
        }), null === hM && (0, Gj.jsx)(bL, {
          card: SM,
          answered: HM,
          nowMs: QM,
          t: CM
        }), WM.note && (0, Gj.jsx)(cQ, {
          note: WM.note,
          className: CS()({
            Unreachable: void 0 !== (null === pM || void 0 === pM ? void 0 : pM.baf2CoopState)
          }),
          t: CM
        }), "rename" === hM && (0, Gj.jsx)(GL, {
          card: SM,
          canRename: "enabled" === WM.rename,
          done: kM,
          t: CM
        }), "delete" === hM && (0, Gj.jsx)(CL, {
          card: SM,
          canDelete: "enabled" === WM.delete,
          done: MM => {
            kM(MM, pM ? "delete" : void 0)
          },
          t: CM
        }), "people" === hM && (0, Gj.jsx)(wL, {
          card: SM,
          view: WM,
          blocked: aM,
          maxIslands: PM,
          answered: HM,
          nowMs: QM,
          done: DM,
          openSocial: GM,
          t: CM
        }), "leave" === hM && (0, Gj.jsx)(gL, {
          className: "Leave",
          text: DQ(CM, `${EL}islandsLeaveConfirm`, {
            island: SM.baf2IslandName,
            owner: null !== (rM = null === (iM = SM.baf2IslandCoop) || void 0 === iM ? void 0 : iM.baf2CoopOwner) && void 0 !== rM ? rM : ""
          }),
          ConfirmButton: la.J,
          confirmLabel: CM(`${EL}islandsLeaveYes`),
          canConfirm: "enabled" === WM.leave,
          send: () => UL(eM, SM),
          done: MM => {
            kM(MM, "leave"), null !== MM && bM && EM()
          },
          t: CM
        }), "unshare" === hM && (0, Gj.jsx)(gL, {
          className: "Unshare",
          text: DQ(CM, `${EL}islandsStopSharingConfirm`, {
            island: SM.baf2IslandName
          }),
          ConfirmButton: la.u,
          confirmLabel: CM(`${EL}islandsStopSharing`),
          canConfirm: "enabled" === WM.unshare,
          send: () => eM.sendIslandEdit(`baf2coopunshare ${SM.baf2IslandId}`),
          done: MM => {
            kM(MM), null !== MM && EM()
          },
          t: CM
        }), null === hM && !dM && (0, Gj.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": SM.baf2IslandName,
          children: [uL(WM.switch) && (0, Gj.jsx)(la.u, {
            disabled: "enabled" !== WM.switch,
            onClick: lM,
            children: "tryAgain" === WM.switchLabel ? CM(`${EL}islandsTryAgain`) : mM.switch > 0 ? ZM("islandsSwitchIn", mM.switch) : CM(`${EL}islandsSwitch`)
          }), uL(WM.rename) && (0, Gj.jsx)(la.e, {
            disabled: "enabled" !== WM.rename,
            onClick: () => {
              JM("rename")
            },
            children: CM(`${EL}islandsRename`)
          }), uL(WM.people) && (0, Gj.jsx)(la.e, {
            disabled: "enabled" !== WM.people,
            onClick: () => {
              JM("people")
            },
            children: CM("players" === WM.peopleLabel ? `${EL}islandsPlayersButton` : `${EL}islandsInviteButton`)
          }), uL(WM.unshare) && (0, Gj.jsx)(la.e, {
            disabled: "enabled" !== WM.unshare,
            onClick: () => {
              JM("unshare")
            },
            children: CM(`${EL}islandsStopSharing`)
          }), uL(WM.dismiss) && (0, Gj.jsx)(la.e, {
            disabled: "enabled" !== WM.dismiss,
            onClick: () => {
              yM(UL(eM, SM), "dismiss"), bM && EM()
            },
            children: CM(`${EL}islandsDismiss`)
          }), uL(WM.leave) && (0, Gj.jsx)(la.N, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== WM.leave,
            onClick: () => {
              JM("leave")
            },
            children: bM && mM.switch > 0 ? ZM("islandsLeaveIn", mM.switch) : CM(`${EL}islandsLeave`)
          }), uL(WM.delete) && (0, Gj.jsx)(la.N, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== WM.delete,
            onClick: () => {
              JM("delete")
            },
            children: mM.change > 0 && WM.deleteWaits ? ZM("islandsDeleteIn", mM.change) : CM(`${EL}islandsDelete`)
          })]
        })]
      })
    }
    const pL = "buildAFactory2Game:";

    function WL(MM) {
      let {
        invite: rM,
        actions: iM,
        full: SM,
        maxIslands: jM,
        waitSeconds: aM,
        focus: PM,
        focused: nM,
        join: QM,
        decline: zM,
        t: LM
      } = MM;
      const [mM, HM] = (0, OM.useState)(!1), hM = (0, OM.useRef)(null);
      XQ(mM, hM), (0, OM.useEffect)((() => {
        var MM;
        PM && (HM(!0), null === (MM = hM.current) || void 0 === MM || MM.focus(), nM())
      }), [PM, nM]);
      const JM = function(MM, rM, iM, OM, SM) {
          return iM ? {
            join: !1,
            note: {
              key: `${dQ}islandsJoinTooMany`,
              params: {
                max: String(OM)
              }
            }
          } : MM.baf2InvitePlayers >= SM ? {
            join: !1,
            note: {
              key: `${dQ}islandsJoinFull`
            }
          } : {
            join: rM.switch,
            note: null
          }
        }(rM, iM, SM, jM, 10),
        dM = rM.baf2InviteIsland,
        yM = rM.baf2InvitePlayers,
        lM = () => {
          var MM;
          HM(!1), null === (MM = hM.current) || void 0 === MM || MM.focus()
        },
        EM = aM > 0 && null === JM.note ? LM(`${pL}islandsJoinIn`, {
          time: yj(LM, aM)
        }) : LM(`${pL}islandsJoin`);
      return (0, Gj.jsxs)("li", {
        ref: hM,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...mM ? FQ(lM) : {},
        children: [(0, Gj.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, Gj.jsx)("strong", {
            className: "Baf2IslandName",
            children: dM
          })
        }), (0, Gj.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: DQ(LM, `${pL}islandsInvitedBy`, {
            owner: rM.baf2InviteOwner
          })
        }), (0, Gj.jsx)(VQ, {
          tier: rM.baf2InviteTier,
          t: LM
        }), (0, Gj.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, Gj.jsx)("span", {
            children: 1 === yM ? LM(`${pL}islandsPlayersCountOne`) : LM(`${pL}islandsPlayersCount`, {
              count: String(yM)
            })
          })
        }), JM.note && (0, Gj.jsx)(cQ, {
          note: JM.note,
          t: LM
        }), mM && (0, Gj.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: DQ(LM, `${pL}islandsJoinConfirm`, {
            island: dM
          })
        }), !mM && (0, Gj.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": dM,
          children: [(0, Gj.jsx)(la.u, {
            disabled: !JM.join,
            onClick: () => {
              var MM;
              HM(!0), null === (MM = hM.current) || void 0 === MM || MM.focus()
            },
            children: EM
          }), (0, Gj.jsx)(la.e, {
            onClick: zM,
            children: LM(`${pL}islandsDecline`)
          })]
        }), mM && (0, Gj.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, Gj.jsx)(la.u, {
            disabled: !JM.join,
            onClick: QM,
            children: LM(`${pL}islandsJoinYes`)
          }), (0, Gj.jsx)(la.e, {
            onClick: lM,
            children: LM(`${pL}islandsCancel`)
          })]
        })]
      })
    }

    function sL(MM) {
      let {
        invites: rM,
        actions: iM,
        full: OM,
        maxIslands: SM,
        waitSeconds: jM,
        focus: aM,
        focused: PM,
        leave: nM,
        declined: QM,
        t: zM
      } = MM;
      const LM = oa();
      return (0, Gj.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, Gj.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: zM(`${pL}islandsInvitesTitle`)
        }), (0, Gj.jsx)("ul", {
          className: "Baf2IslandCards",
          children: rM.map((MM => {
            const rM = MM.baf2InviteId;
            return (0, Gj.jsx)(WL, {
              invite: MM,
              actions: iM,
              full: OM,
              maxIslands: SM,
              waitSeconds: jM,
              focus: aM === rM,
              focused: PM,
              join: () => {
                LM.send(`baf2coopaccept ${rM}`), nM()
              },
              decline: () => {
                LM.send(`baf2coopdecline ${rM}`), QM(rM)
              },
              t: zM
            }, rM)
          }))
        })]
      })
    }
    const DL = "buildAFactory2Game:";

    function kL(MM) {
      let {
        cards: rM,
        activeName: iM,
        canStart: SM,
        waitSeconds: jM,
        leave: aM,
        t: PM
      } = MM;
      const nM = oa(),
        [QM, zM] = (0, OM.useState)(!1),
        [LM, mM] = (0, OM.useState)(""),
        HM = (0, OM.useRef)(null);
      XQ(QM, HM), (0, OM.useEffect)((() => {
        var MM;
        QM && (null === (MM = HM.current) || void 0 === MM || MM.focus())
      }), [QM]);
      const hM = CQ(rM),
        JM = UQ(LM),
        dM = GQ(JM),
        yM = () => {
          SM && !dM && (nM.send("" === JM || JM === hM ? KM : `${KM} ${JM}`), aM())
        },
        lM = () => {
          var MM;
          zM(!1), null === (MM = HM.current) || void 0 === MM || MM.focus()
        };
      return (0, Gj.jsxs)("li", {
        ref: HM,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...QM ? FQ(lM) : {},
        children: [(0, Gj.jsx)("strong", {
          className: "Baf2IslandName",
          children: PM(`${DL}islandsNewTitle`)
        }), !QM && (0, Gj.jsx)("p", {
          className: "Baf2IslandStats",
          children: PM(`${DL}islandsNewNote`)
        }), QM && (0, Gj.jsxs)(Gj.Fragment, {
          children: [(0, Gj.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: DQ(PM, `${DL}islandsNewConfirm`, {
              name: iM
            })
          }), (0, Gj.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [PM(`${DL}islandsNewNameLabel`), (0, Gj.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: LM,
              placeholder: hM,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: BQ,
              onChange: MM => {
                mM(MM.target.value)
              },
              ...vQ(yM, lM)
            })]
          }), dM && (0, Gj.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: PM(`${DL}islandsNameReserved`)
          })]
        }), (0, Gj.jsxs)("div", {
          className: CS()("Baf2IslandButtons", {
            Stacked: QM
          }),
          children: [(0, Gj.jsx)(la.u, {
            disabled: !SM || QM && dM,
            onClick: () => {
              if (!QM) return mM(hM), void zM(!0);
              yM()
            },
            children: jM > 0 ? PM(`${DL}islandsNewIn`, {
              time: yj(PM, jM)
            }) : PM(QM ? `${DL}islandsNewConfirmButton` : `${DL}islandsNew`)
          }), QM && (0, Gj.jsx)(la.e, {
            onClick: lM,
            children: PM(`${DL}islandsCancel`)
          })]
        })]
      })
    }

    function ZL(MM) {
      var rM, iM;
      let {
        message: SM,
        arrivedAtMs: jM,
        close: aM,
        leave: PM,
        openSocial: nM
      } = MM;
      const QM = oa(),
        {
          t: zM
        } = (0, tS.A)(),
        LM = TQ(1e3),
        [mM, HM] = (0, OM.useState)(null),
        [hM, JM] = (0, OM.useState)(new Map),
        [dM, yM] = (0, OM.useState)(new Set),
        lM = SM.baf2IslandCards,
        EM = function(MM, rM, iM, OM) {
          return (null !== MM && void 0 !== MM ? MM : []).filter((MM => rM + MM.baf2InviteLeftMs > iM && !OM.has(MM.baf2InviteId)))
        }(SM.baf2IslandsInvites, jM, LM, dM),
        UM = EM.map((MM => MM.baf2InviteId)).join(" "),
        GM = (0, OM.useRef)(null),
        CM = IQ(GM);
      KQ(), (0, OM.useEffect)((() => {
        var MM, rM;
        null !== (MM = GM.current) && void 0 !== MM && MM.contains(document.activeElement) || (null === (rM = GM.current) || void 0 === rM || rM.focus())
      }), [SM, UM]), (0, OM.useEffect)((() => {
        JM((MM => function(MM, rM, iM, OM) {
          const SM = new Map;
          for (const jM of rM) {
            const rM = MM.get(jM.baf2IslandId);
            rM && (void 0 !== rM.untilGone || OM < rM.answer) && RQ(rM, jM, iM) && SM.set(jM.baf2IslandId, rM)
          }
          return SM.size === MM.size ? MM : SM
        }(MM, SM.baf2IslandCards, Date.now(), SM.baf2IslandsAnswered)))
      }), [SM]);
      const eM = EQ(jM, SM.baf2IslandsWaitMs, LM),
        bM = SM.baf2IslandsBlocked,
        wM = tQ(bM, eM),
        tM = function(MM, rM) {
          const iM = tQ(MM, 0);
          return {
            switch: iM.switch ? rM : 0,
            change: iM.change ? rM : 0
          }
        }(bM, eM),
        gM = lM.length >= SM.baf2IslandsMax,
        uM = lM.length > 0,
        RM = function(MM, rM, iM) {
          return MM + Math.max(0, iM - rM)
        }(SM.baf2IslandsNowMs, jM, LM),
        pM = null !== (rM = null === (iM = lM.find((MM => MM.baf2IslandActive))) || void 0 === iM ? void 0 : iM.baf2IslandName) && void 0 !== rM ? rM : "",
        WM = function(MM) {
          const rM = MM.filter(oQ).length;
          return rM <= 1 && rM < MM.length
        }(lM),
        sM = !0 === SM.baf2IslandsCoop,
        DM = function(MM, rM) {
          const iM = MM.find((MM => MM.baf2IslandActive)),
            OM = null === iM || void 0 === iM ? void 0 : iM.baf2IslandCoop;
          return iM && "member" === (null === OM || void 0 === OM ? void 0 : OM.baf2CoopRole) ? {
            key: `${dQ}islandsKeepOwnMember`,
            names: {
              owner: OM.baf2CoopOwner,
              island: iM.baf2IslandName
            }
          } : {
            key: rM ? `${dQ}islandsKeepOwn` : `${dQ}islandsKeepOwnSolo`
          }
        }(lM, sM),
        [kM, ZM] = (0, OM.useState)(null);
      (0, OM.useEffect)((() => {
        void 0 !== SM.baf2IslandsFocusInvite && ZM(SM.baf2IslandsFocusInvite)
      }), [SM]);
      const oM = (0, OM.useCallback)((() => {
          ZM(null)
        }), []),
        fM = mM ? lM.find((MM => MM.baf2IslandId === mM.id)) : void 0,
        YM = mM && fM && "hidden" !== fQ(fM, wM, WM, gM, sM, bM)[mM.mode] ? mM : null;
      return (0, Gj.jsx)(ya.e, {
        close: aM,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, Gj.jsxs)("section", {
          ref: GM,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: CM ? {
            marginTop: `${CM.marginTop}px`,
            maxHeight: `${CM.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, Gj.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Gj.jsxs)("div", {
              children: [(0, Gj.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: zM(`${DL}islandsTitle`)
              }), uM && (0, Gj.jsx)("p", {
                children: zM(`${DL}islandsSubtitle`, {
                  count: String(lM.length),
                  max: String(SM.baf2IslandsMax)
                })
              })]
            }), (0, Gj.jsx)(la.l, {
              ariaLabel: zM(`${DL}islandsClose`),
              onClick: aM
            })]
          }), (0, Gj.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== bM && (0, Gj.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: DQ(zM, eQ(bM, bQ(lM)), {
                island: pM
              })
            }), uM && EM.length > 0 && (0, Gj.jsx)(sL, {
              invites: EM,
              actions: wM,
              full: gM,
              maxIslands: SM.baf2IslandsMax,
              waitSeconds: tM.switch,
              focus: kM,
              focused: oM,
              leave: PM,
              declined: MM => {
                yM((rM => new Set(rM).add(MM)))
              },
              t: zM
            }), uM && (0, Gj.jsxs)(Gj.Fragment, {
              children: [gM && (0, Gj.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: zM(`${DL}islandsFull`, {
                  max: String(SM.baf2IslandsMax)
                })
              }), (0, Gj.jsx)("p", {
                className: "Baf2IslandsNote",
                children: DQ(zM, DM.key, DM.names)
              }), (0, Gj.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [lM.map((MM => {
                  const rM = MM.baf2IslandId;
                  return (0, Gj.jsx)(RL, {
                    card: MM,
                    keepOwn: WM,
                    coopOn: sM,
                    openSocial: nM,
                    blocked: bM,
                    maxIslands: SM.baf2IslandsMax,
                    serverNowMs: RM,
                    nowMs: LM,
                    actions: wM,
                    full: gM,
                    waits: tM,
                    answered: SM.baf2IslandsAnswered,
                    mode: (null === YM || void 0 === YM ? void 0 : YM.id) === rM ? YM.mode : null,
                    setMode: MM => {
                      HM(null === MM ? null : {
                        id: rM,
                        mode: MM
                      })
                    },
                    pending: RQ(hM.get(rM), MM, LM),
                    onSent: (iM, OM) => {
                      JM((SM => {
                        const jM = {
                          atMs: Date.now(),
                          from: MM.baf2IslandName,
                          answer: iM
                        };
                        return new Map(SM).set(rM, OM ? {
                          ...jM,
                          untilGone: OM
                        } : jM)
                      }))
                    },
                    leave: PM,
                    switchTo: () => {
                      QM.send(`baf2islandswitch ${rM}`), PM()
                    },
                    t: zM
                  }, rM)
                })), !gM && (0, Gj.jsx)(kL, {
                  cards: lM,
                  activeName: pM,
                  canStart: wM.change,
                  waitSeconds: tM.change,
                  leave: PM,
                  t: zM
                })]
              })]
            })]
          })]
        })
      })
    }
    var oL = iM(5417);
    const fL = {
        all: "buildAFactory2Game:terminalChip_all",
        recent: "buildAFactory2Game:terminalChip_recent",
        Gj: "buildAFactory2Game:terminalChip_ores",
        bars: "buildAFactory2Game:terminalChip_bars",
        parts: "buildAFactory2Game:terminalChip_parts",
        nuclear: "buildAFactory2Game:terminalChip_nuclear",
        farm: "buildAFactory2Game:terminalChip_farm",
        other: "buildAFactory2Game:terminalChip_other"
      },
      YL = Object.keys(fL),
      NL = new Set([...Object.keys(Kr), ...[...Dr.Press.recipes, ...Dr["Wire Mill"].recipes].map((MM => MM.output))]),
      AL = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      xL = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      vL = / Bar$|Alloy$/,
      FL = /Porkchop|Beef|Mutton|Venison|Steak/,
      BL = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;
    const XL = (0, OM.memo)((function(MM) {
      let {
        item: rM,
        name: iM,
        amount: OM,
        selected: SM,
        small: jM,
        onPick: aM
      } = MM;
      return (0, Gj.jsxs)("button", {
        type: "button",
        className: CS()("Baf2TermTile", {
          On: SM,
          Small: jM
        }),
        "aria-label": `${iM}: ${OM}`,
        "aria-pressed": SM,
        onClick: () => {
          aM(rM)
        },
        children: [(0, Gj.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, Gj.jsx)(uS.b, {
            itemName: rM,
            amount: 0
          })
        }), (0, Gj.jsx)("span", {
          className: "Baf2TermCount",
          children: Jj(OM, 1e4)
        }), !jM && (0, Gj.jsx)("span", {
          className: "Baf2TermName",
          children: iM
        })]
      })
    }));

    function IL(MM) {
      let {
        store: rM,
        close: iM,
        send: SM
      } = MM;
      const {
        t: jM
      } = (0, tS.A)(), {
        isTouchScreen: aM
      } = (0, ES.m)(["isTouchScreen"]);
      ! function(MM) {
        const [rM, iM] = (0, OM.useState)(MM.version);
        (0, OM.useEffect)((() => (iM(MM.version), MM.subscribe((() => {
          iM(MM.version)
        })))), [MM])
      }(rM);
      const [PM, nM] = (0, OM.useState)("all"), [QM, zM] = (0, OM.useState)(!1), [LM, mM] = (0, OM.useState)(""), [HM, hM] = (0, OM.useState)(""), [JM, dM] = (0, OM.useState)(null), [yM, lM] = (0, OM.useState)(!1), [EM, UM, GM] = function() {
        const MM = (0, OM.useRef)(null),
          [rM, iM] = (0, OM.useState)(!1),
          SM = () => {
            const rM = MM.current;
            iM(null !== rM && rM.scrollLeft + rM.clientWidth < rM.scrollWidth - 1)
          };
        return (0, OM.useEffect)(SM), (0, OM.useEffect)((() => {
          const rM = MM.current;
          if (!rM) return;
          const iM = new ResizeObserver(SM);
          return iM.observe(rM), () => {
            iM.disconnect()
          }
        }), []), [MM, rM, SM]
      }(), CM = (0, OM.useMemo)((() => new Map), [jM]), eM = MM => {
        let rM = CM.get(MM);
        return void 0 === rM && (rM = function(MM, rM) {
          const iM = /^(.+) \((.+)\)$/.exec(MM);
          return iM ? rM(iM[2], iM[1]) : MM
        }((0, Mj.e)(jM, MM), ((MM, rM) => jM("buildAFactory2Game:terminalTileKind", {
          kind: MM,
          base: rM
        }))), CM.set(MM, rM)), rM
      }, bM = rM.isReadOnly(), wM = yM && !bM, tM = rM.recent(), gM = rM.items(), uM = HM.trim().toLowerCase(), RM = wM ? rM.heldItems(JM) : ("recent" === PM ? tM : gM).filter((MM => {
        const rM = eM(MM);
        return ("all" === PM || "recent" === PM || function(MM) {
          return nj(MM) ? "farm" : AL.test(MM) ? "nuclear" : vL.test(MM) ? "bars" : FL.test(MM) ? "farm" : xL.test(MM) ? "Gj" : NL.has(MM) ? "parts" : BL.test(MM) ? "farm" : "other"
        }(MM) === PM) && ("" === uM || rM.toLowerCase().includes(uM)) && ("" === LM || rM.toUpperCase().startsWith(LM))
      })), pM = new Set(gM.map((MM => eM(MM).charAt(0).toUpperCase()))), WM = MM => wM ? rM.heldAmount(MM) : rM.amount(MM), sM = !wM && "recent" !== PM && tM.length > 0, DM = function(MM, rM) {
        return null !== MM && rM.includes(MM) ? MM : null
      }(JM, sM ? [...RM, ...tM] : RM), kM = null === DM ? 0 : rM.amount(DM), ZM = null === DM ? 0 : WM(DM), oM = (0, OM.useCallback)((MM => {
        dM((rM => rM === MM ? null : MM))
      }), []), fM = MM => ZM > 0 || wM && null === DM && "fill" === MM && RM.length > 0, YM = wM ? [
        ["one", jM("buildAFactory2Game:terminalStoreOne")],
        ["stack", jM("buildAFactory2Game:terminalStoreStack", {
          amount: String(99)
        })],
        ["fill", jM(null === DM ? "buildAFactory2Game:terminalStoreEverything" : "buildAFactory2Game:terminalStoreAll")]
      ] : [
        ["one", jM("buildAFactory2Game:terminalTakeOne")],
        ["stack", jM("buildAFactory2Game:terminalTakeStack", {
          amount: String(99)
        })],
        ["fill", jM("buildAFactory2Game:terminalFill")]
      ], NM = wM ? jM("buildAFactory2Game:terminalStoreEmpty") : "" !== LM ? jM("buildAFactory2Game:terminalEmptyLetter", {
        letter: LM
      }) : "" !== uM ? jM("buildAFactory2Game:terminalEmptySearch", {
        query: HM
      }) : jM("buildAFactory2Game:terminalEmpty");
      return (0, Gj.jsx)(ya.e, {
        close: iM,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2TermOverlay",
        children: (0, Gj.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, Gj.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Gj.jsxs)("div", {
              children: [(0, Gj.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: jM(rM.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, Gj.jsxs)("p", {
                className: "Baf2TermSubtitle",
                children: [(0, Gj.jsx)("span", {
                  className: CS()({
                    Off: wM
                  }),
                  children: jM("buildAFactory2Game:terminalSubtitle", {
                    count: String(rM.siloCount())
                  })
                }), !bM && (0, Gj.jsx)("span", {
                  className: CS()({
                    Off: !wM
                  }),
                  children: jM("buildAFactory2Game:terminalStoreSubtitle")
                })]
              })]
            }), !bM && (0, Gj.jsx)(oL.e, {
              className: "Baf2TermModes",
              options: [{
                value: "take",
                label: jM("buildAFactory2Game:terminalModeTake")
              }, {
                value: "store",
                label: jM("buildAFactory2Game:terminalModeStore")
              }],
              value: wM ? "store" : "take",
              onChange: MM => {
                lM("store" === MM), dM(null)
              },
              ariaLabel: jM("buildAFactory2Game:terminalModes")
            }), (0, Gj.jsx)(la.l, {
              onClick: iM
            })]
          }), (0, Gj.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, Gj.jsxs)("div", {
              className: CS()("Baf2TermTools", {
                Hidden: wM
              }),
              children: [(0, Gj.jsx)("div", {
                ref: EM,
                className: CS()("Baf2TermChips", {
                  MoreRight: UM
                }),
                onScroll: GM,
                children: QM ? (0, Gj.jsxs)(Gj.Fragment, {
                  children: [(0, Gj.jsx)("button", {
                    type: "button",
                    "aria-label": jM("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      zM(!1), mM("")
                    },
                    children: "\u2190"
                  }), [...pM].sort().map((MM => (0, Gj.jsx)("button", {
                    type: "button",
                    className: CS()({
                      On: LM === MM
                    }),
                    onClick: () => {
                      mM(LM === MM ? "" : MM)
                    },
                    children: MM
                  }, MM)))]
                }) : (0, Gj.jsxs)(Gj.Fragment, {
                  children: [(0, Gj.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      zM(!0)
                    },
                    children: jM("buildAFactory2Game:terminalLetters")
                  }), YL.map((MM => (0, Gj.jsx)("button", {
                    type: "button",
                    className: CS()({
                      On: PM === MM
                    }),
                    onClick: () => {
                      nM(MM)
                    },
                    children: jM(fL[MM])
                  }, MM)))]
                })
              }), !aM && (0, Gj.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: HM,
                placeholder: jM("buildAFactory2Game:terminalSearch"),
                "aria-label": jM("buildAFactory2Game:terminalSearch"),
                onChange: MM => {
                  hM(MM.target.value)
                },
                onKeyDown: MM => {
                  MM.stopPropagation()
                }
              }), (0, Gj.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": jM("buildAFactory2Game:terminalResort"),
                title: jM("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  rM.resort()
                },
                children: "\u21c5"
              })]
            }), sM && (0, Gj.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, Gj.jsx)("span", {
                children: jM(fL.recent)
              }), tM.map((MM => (0, Gj.jsx)(XL, {
                item: MM,
                name: eM(MM),
                amount: rM.amount(MM),
                selected: DM === MM,
                small: !0,
                onPick: oM
              }, MM)))]
            }), (0, Gj.jsx)("div", {
              className: "Baf2TermTiles",
              children: RM.length > 0 ? RM.map((MM => (0, Gj.jsx)(XL, {
                item: MM,
                name: eM(MM),
                amount: WM(MM),
                selected: DM === MM,
                onPick: oM
              }, MM))) : (0, Gj.jsx)("p", {
                className: "Baf2TermEmpty",
                children: NM
              })
            }), (0, Gj.jsxs)("div", {
              className: CS()("Baf2TermActions", {
                Hidden: wM && 0 === RM.length
              }),
              children: [(0, Gj.jsx)("span", {
                className: "Baf2TermPicked",
                children: bM ? (0, Gj.jsxs)(Gj.Fragment, {
                  children: [null !== DM && kM > 0 ? eM(DM) : jM("buildAFactory2Game:terminalVisiting"), (0, Gj.jsx)("small", {
                    children: jM("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== DM ? (0, Gj.jsxs)(Gj.Fragment, {
                  children: [eM(DM), (0, Gj.jsx)("small", {
                    children: jM("buildAFactory2Game:terminalStored", {
                      amount: kM.toLocaleString()
                    })
                  })]
                }) : jM(wM ? "buildAFactory2Game:terminalStorePick" : "buildAFactory2Game:terminalPick")
              }), !bM && YM.map((MM => {
                let [iM, OM] = MM;
                const jM = "fill" === iM ? la.p : la.e;
                return (0, Gj.jsx)(jM, {
                  className: "Baf2TermTake",
                  disabled: !fM(iM),
                  onClick: () => {
                    (MM => {
                      fM(MM) && SM(null === DM ? rM.putAll() : wM ? rM.put(MM, DM) : rM.take(MM, DM))
                    })(iM)
                  },
                  children: OM
                }, iM)
              }))]
            })]
          })]
        })
      })
    }

    function KL(MM) {
      let {
        kind: rM,
        icon: iM,
        label: OM,
        number: SM,
        preview: jM,
        note: aM,
        tone: PM = null,
        share: nM,
        onExplain: QM
      } = MM;
      return (0, Gj.jsxs)("button", {
        type: "button",
        className: CS()("NxLane", rM, {
          Warn: "warn" === PM,
          Danger: "danger" === PM
        }),
        onClick: QM,
        children: [(0, Gj.jsxs)("span", {
          className: "NxLaneHead",
          children: [iM, (0, Gj.jsx)("span", {
            className: "NxLaneLabel",
            children: OM
          })]
        }), (0, Gj.jsxs)("span", {
          className: "NxLaneNum",
          children: [SM, jM && (0, Gj.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", jM]
          })]
        }), (0, Gj.jsx)("span", {
          className: "NxLaneNote",
          children: aM
        }), void 0 !== nM && (0, Gj.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, nM)) + "%"
          }
        })]
      })
    }

    function qL(MM) {
      let {
        kind: rM,
        step: iM,
        short: OM,
        planned: SM
      } = MM;
      return (0, Gj.jsx)("i", {
        className: CS()("NxPipe", rM, `Step${iM}`, {
          Short: OM,
          Planned: SM
        }),
        "aria-hidden": "true"
      })
    }

    function TL(MM) {
      let {
        max: rM,
        bands: iM,
        ticks: OM,
        now: SM,
        settle: jM,
        settleTone: aM,
        onExplain: PM
      } = MM;
      const nM = MM => Math.max(0, Math.min(rM, MM)) / rM * 100 + "%";
      let QM = 0;
      return (0, Gj.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: PM,
        children: [(0, Gj.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [iM.map((MM => {
            const rM = {
              bottom: nM(QM),
              height: `calc(${nM(MM.upTo)} - ${nM(QM)})`
            };
            return QM = MM.upTo, (0, Gj.jsx)("i", {
              className: CS()("NxGaugeBand", MM.kind),
              style: rM
            }, MM.kind)
          })), null !== SM && (0, Gj.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: nM(SM)
            }
          }), void 0 !== jM && null !== jM && (0, Gj.jsx)("i", {
            className: CS()("NxGaugeSettle", {
              Bad: "bad" === aM
            }),
            style: {
              bottom: nM(jM)
            }
          })]
        }), (0, Gj.jsx)("span", {
          className: "NxGaugeTicks",
          children: OM.map((MM => (0, Gj.jsx)("small", {
            style: {
              bottom: nM(MM)
            },
            children: MM
          }, MM)))
        })]
      })
    }

    function VL(MM) {
      const [rM, iM] = (0, OM.useState)(null), [SM, jM] = (0, OM.useState)((() => {
        try {
          return null === window.localStorage.getItem(MM)
        } catch {
          return !1
        }
      })), aM = (0, OM.useRef)(null);
      (0, OM.useEffect)((() => () => {
        null !== aM.current && clearTimeout(aM.current)
      }), []);
      const PM = (0, OM.useCallback)((rM => {
          iM(rM), jM(!1);
          try {
            window.localStorage.setItem(MM, "1")
          } catch {}
          null !== aM.current && clearTimeout(aM.current), aM.current = setTimeout((() => {
            aM.current = null, iM(null)
          }), 5e3)
        }), [MM]),
        nM = (0, OM.useCallback)(((rM, iM) => {
          const OM = `${MM}:${rM}`;
          try {
            if (null !== window.localStorage.getItem(OM)) return;
            window.localStorage.setItem(OM, "1")
          } catch {
            return
          }
          PM(iM)
        }), [PM, MM]);
      return {
        explained: rM,
        hinting: SM,
        explain: PM,
        explainOnce: nM
      }
    }

    function cL(MM) {
      let {
        text: rM,
        tone: iM,
        explained: OM
      } = MM;
      return (0, Gj.jsxs)("p", {
        className: CS()("NxStatus", null === OM ? iM : "Explain"),
        "aria-live": "polite",
        children: [null !== OM && (0, Gj.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== OM && void 0 !== OM ? OM : rM]
      })
    }
    const Mm = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function rm(MM, rM) {
      const iM = Number(MM[rM]);
      return 1 === iM || 2 === iM || 3 === iM ? iM : 0
    }

    function im(MM) {
      return !!Un("reactor", MM.baf2RxNeed) || void 0 !== MM.baf2RxLayout && MM.baf2RxNeed.some((MM => {
        let [rM, iM] = MM;
        return iM > 0 && Mm.includes(rM)
      }))
    }
    const Om = "buildAFactory2Game:";

    function Sm(MM) {
      let {
        status: rM,
        store: iM,
        busy: OM
      } = MM;
      const {
        t: SM
      } = (0, tS.A)();
      return function(MM) {
        return 0 !== (MM.baf2RxFlags & Jr) && (!MM.baf2RxFormed || void 0 !== MM.baf2RxLayout)
      }(rM) ? (0, Gj.jsx)(la.p, {
        disabled: !im(rM) || OM,
        onClick: () => {
          iM.tap("fill", (() => {
            iM.send("fill")
          }))
        },
        children: SM(void 0 !== rM.baf2RxLayout ? `${Om}rxFillLayout` : `${Om}rxFill`)
      }) : null
    }

    function jm(MM) {
      let {
        status: rM,
        store: iM,
        readOnly: SM,
        bare: jM = !1
      } = MM;
      const {
        t: aM
      } = (0, tS.A)(), PM = rM.baf2RxLayout, [nM, QM, zM] = rM.baf2RxDims, LM = (0, OM.useMemo)((() => {
        if (void 0 === PM) return 0;
        const MM = Uint8Array.from(PM, ((MM, rM) => rm(PM, rM)));
        return qP([nM - 2, QM - 2, zM - 2], MM).max
      }), [PM, nM, QM, zM]);
      return void 0 === PM ? null : (0, Gj.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!jM && (0, Gj.jsx)("span", {
          className: "Baf2RxHint",
          children: aM(`${Om}rxLayoutLine`, {
            amount: gn(LM)
          })
        }), !SM && (0, Gj.jsx)(la.e, {
          onClick: () => {
            iM.send("layout", 0)
          },
          children: aM(`${Om}rxLayoutHide`)
        })]
      })
    }
    const am = "buildAFactory2Game:",
      Pm = {
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

    function nm(MM) {
      let {
        id: rM,
        title: iM,
        body: OM,
        bodyParams: SM,
        yes: jM,
        cancel: aM,
        confirm: PM
      } = MM;
      const {
        t: nM
      } = (0, tS.A)();
      return (0, Gj.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": rM,
        children: [(0, Gj.jsx)("h3", {
          id: rM,
          children: nM(iM)
        }), (0, Gj.jsx)("p", {
          children: nM(OM, SM)
        }), (0, Gj.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, Gj.jsx)(la.i, {
            onClick: aM,
            children: nM(`${am}rxCancel`)
          }), (0, Gj.jsx)(la.J, {
            onClick: PM,
            children: nM(jM)
          })]
        })]
      })
    }

    function Qm(MM) {
      const [rM, iM] = (0, OM.useState)((() => MM.get()));
      return (0, OM.useEffect)((() => (iM(MM.get()), MM.subscribe((() => {
        iM(MM.get())
      })))), [MM]), rM
    }

    function zm(MM) {
      let {
        kind: rM,
        cap: iM,
        busy: SM = !1,
        whyNot: jM = null,
        apart: aM
      } = MM;
      const {
        t: PM
      } = (0, tS.A)(), [nM, QM] = (0, OM.useState)(!1), zM = null !== jM, LM = (0, OM.useRef)(null);
      if ((0, OM.useEffect)((() => {
          zM && QM(!1)
        }), [zM]), (0, OM.useLayoutEffect)((() => {
          var MM;
          const rM = null === (MM = LM.current) || void 0 === MM ? void 0 : MM.firstElementChild;
          zM ? null === rM || void 0 === rM || rM.setAttribute("aria-disabled", "true") : SM || null === rM || void 0 === rM || rM.removeAttribute("aria-disabled")
        })), !nM || zM) return (0, Gj.jsx)("span", {
        ref: LM,
        className: "Baf2RxApartWrap",
        children: (0, Gj.jsx)(la.i, {
          disabled: SM,
          className: CS()({
            Baf2RxNotYet: zM
          }),
          onClick: () => {
            jM ? jM() : QM(!0)
          },
          children: PM(`${am}rxApart`)
        })
      });
      const mM = "battery" === rM,
        HM = void 0 === iM ? `${am}batApartConfirmBodyPlan` : `${am}batApartConfirmBody`;
      return (0, Gj.jsx)(nm, {
        id: `baf2ApartTitle_${rM}`,
        title: mM ? `${am}batApartConfirmTitle` : `${am}rxApartConfirmTitle`,
        body: mM ? HM : `${am}rxApartConfirmBody`,
        bodyParams: void 0 === iM ? void 0 : {
          cap: iM
        },
        yes: `${am}rxApart`,
        cancel: () => {
          QM(!1)
        },
        confirm: () => {
          QM(!1), aM()
        }
      })
    }

    function Lm(MM) {
      let {
        mood: rM,
        big: iM
      } = MM;
      const OM = Pm[rM],
        SM = [];
      return OM.rows.forEach(((MM, rM) => {
        for (let iM = 0; iM < MM.length; iM++) "." !== MM[iM] && SM.push((0, Gj.jsx)("rect", {
          x: iM + 1,
          y: rM + 1,
          width: 1,
          height: 1,
          fill: "w" === MM[iM] ? "#8fd3ff" : OM.colour
        }, `${iM},${rM}`))
      })), (0, Gj.jsxs)("svg", {
        className: CS()("Baf2RxFace", {
          Big: iM,
          Alarm: "alarm" === rM
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, Gj.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, Gj.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), SM]
      })
    }

    function mm(MM) {
      return hj(MM, "+").replace("+", "")
    }

    function Hm(MM) {
      let {
        kind: rM,
        dims: iM,
        cap: OM,
        disabled: SM,
        compact: jM,
        resize: aM
      } = MM;
      const {
        t: PM
      } = (0, tS.A)(), {
        min: nM,
        max: QM
      } = Ai(rM), zM = Math.min(OM, QM), LM = [`${am}rxWide`, `${am}rxTall`, `${am}rxDeep`], mM = {
        w: String(iM[0]),
        h: String(iM[1]),
        d: String(iM[2]),
        blocks: String(tn(rM, iM))
      };
      return (0, Gj.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, Gj.jsx)("div", {
          className: "Baf2RxSteppers",
          children: iM.map(((MM, rM) => {
            const jM = OM => {
                const SM = [iM[0], iM[1], iM[2]];
                SM[rM] = MM + OM, aM(SM)
              },
              mM = MM >= zM;
            return (0, Gj.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, Gj.jsx)("button", {
                type: "button",
                "aria-label": PM(`${am}rxSmaller`),
                disabled: SM || MM <= nM,
                onClick: () => {
                  jM(-1)
                },
                children: "\u2212"
              }), (0, Gj.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [MM, (0, Gj.jsx)("small", {
                  children: PM(LM[rM])
                })]
              }), (0, Gj.jsx)("button", {
                type: "button",
                "aria-label": PM(`${am}rxBigger`),
                disabled: SM || mM,
                onClick: () => {
                  jM(1)
                },
                children: mM && OM < QM ? "\ud83d\udd12" : "+"
              })]
            }, LM[rM])
          }))
        }), !jM && (0, Gj.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === rM ? PM(`${am}rxSizeLine`, {
            ...mM,
            water: String(wn(iM))
          }) : PM(`${am}batSizeLine`, mM)
        })]
      })
    }

    function hm(MM) {
      let {
        on: rM,
        label: iM,
        disabled: OM,
        locked: SM,
        pending: jM,
        toggle: aM
      } = MM;
      return (0, Gj.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": rM,
        disabled: OM,
        "aria-disabled": SM || void 0,
        className: CS()("Baf2RxSwitch", {
          On: rM,
          Locked: SM,
          Pending: jM
        }),
        onClick: aM,
        children: [(0, Gj.jsx)("span", {
          className: "Baf2RxKnob"
        }), iM]
      })
    }
    const Jm = "buildAFactory2Game:",
      dm = .95;

    function ym(MM, rM) {
      return 0 !== (MM.baf2RxFlags & rM)
    }

    function lm(MM) {
      return "cryo" === MM ? VM.s : VM.u
    }

    function Em(MM) {
      var rM, iM, OM, SM, jM, aM, PM, nM, QM;
      return MM.baf2RxCryo ? {
        CH: "cryo",
        usePerS: null !== (SM = MM.baf2RxCryoUse) && void 0 !== SM ? SM : 0,
        needPerS: null !== (jM = MM.baf2RxCryoNeed) && void 0 !== jM ? jM : 0,
        inPerS: null !== (aM = MM.baf2RxCryoIn) && void 0 !== aM ? aM : 0,
        stored: null !== (PM = MM.baf2RxCryoStored) && void 0 !== PM ? PM : 0,
        makersShort: null !== (nM = MM.baf2RxMixersShort) && void 0 !== nM ? nM : 0,
        waterBeside: null !== (QM = MM.baf2RxWaterUse) && void 0 !== QM ? QM : 0,
        pct: MM.baf2RxWater
      } : {
        CH: "water",
        usePerS: null !== (rM = MM.baf2RxWaterUse) && void 0 !== rM ? rM : 0,
        needPerS: null !== (iM = MM.baf2RxWaterNeed) && void 0 !== iM ? iM : 0,
        inPerS: MM.baf2RxWaterIn,
        stored: MM.baf2RxWaterStored,
        makersShort: null !== (OM = MM.baf2RxCondensersShort) && void 0 !== OM ? OM : 0,
        waterBeside: 0,
        pct: MM.baf2RxWater
      }
    }

    function Um(MM) {
      const rM = "running" === MM.baf2RxState || "idle" === MM.baf2RxState;
      return MM.baf2RxFormed && MM.baf2RxTarget !== MM.baf2RxThrottle && rM ? Gm(MM, MM.baf2RxTarget) : null
    }

    function Gm(MM, rM) {
      const [iM, OM, SM, , , , jM, , aM] = MM.baf2RxStats, PM = ym(MM, Hr), nM = Em(MM), QM = nM.pct / 100, {
        gen: zM,
        out: LM,
        load: mM
      } = function(MM, rM, iM, OM) {
        const SM = iM ? xP : 1,
          jM = Math.min(MM.fuelHeat * SM * Math.max(0, Math.min(1, rM)), MM.size * SM);
        return {
          gen: jM,
          out: jM,
          load: nn(jM, MM.cooling, OM)
        }
      }({
        fuelHeat: iM,
        cooling: OM,
        size: SM
      }, rM / 100, PM, QM), HM = zn(jM || KP(...MM.baf2RxDims)), hM = MM.baf2RxHeat, JM = Math.abs(mM - hM), dM = function(MM, rM, iM, OM) {
        let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : VM.u;
        const jM = iM ? xP : 1,
          aM = Math.min(MM.fuelHeat * jM * rM / 100, MM.size * jM),
          PM = aM,
          nM = MM.fuelHeat * jM,
          QM = MM.cooling * Pn(OM.pct / 100),
          zM = nM > 0 && QM < MM.size * jM ? Math.floor(100 * QM / nM) : 100,
          LM = aM * SM - OM.inPerS;
        return {
          out: PM,
          hotAbove: zM >= 100 ? null : Math.max(0, zM),
          waterSecs: OM.pct >= 100 && LM > 1e-6 ? Math.max(0, OM.stored) / LM : null
        }
      }({
        fuelHeat: iM,
        cooling: OM,
        size: SM
      }, rM, PM, {
        pct: nM.pct,
        inPerS: nM.inPerS,
        stored: nM.stored
      }, lm(nM.CH));
      return {
        pct: rM,
        out: LM,
        coolPerS: zM * lm(nM.CH),
        pelletsPerMin: aM > 0 ? LM / aM * 60 : 0,
        settle: mM,
        settleS: JM > 2 ? HM * Math.log(JM / 2) : 0,
        overheatS: mM > 100 && hM < 100 ? HM * Math.log((mM - hM) / (mM - 100)) : null,
        hotAbove: dM.hotAbove,
        coolantSecs: dM.waterSecs
      }
    }

    function Cm(MM) {
      return MM.baf2RxThrottle <= 0 && "running" !== MM.baf2RxState ? 0 : Gm(MM, MM.baf2RxTarget).pelletsPerMin / 60
    }

    function em(MM, rM) {
      if (MM <= 0 || rM <= 0) return 0;
      const iM = MM / rM;
      return iM < .25 ? 1 : iM < .5 ? 2 : iM < .8 ? 3 : 4
    }

    function bm(MM, rM) {
      const iM = {};
      for (const [OM, SM] of Object.entries(rM.params)) iM[OM] = "time" === OM ? yj(MM, SM) : "amount" === OM ? gn(SM) : String(Math.round(SM));
      return MM(rM.key, iM)
    }

    function wm(MM, rM) {
      return {
        key: `${Jm}${MM}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: rM
      }
    }

    function tm(MM) {
      var rM;
      const iM = ym(MM, Hr),
        OM = "running" === MM.baf2RxState,
        SM = hn(MM),
        jM = MM.baf2RxHeat;
      var aM;
      if (OM && jM > NP) return {
        key: null !== (aM = SM.fix) && void 0 !== aM ? aM : `${Jm}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const PM = OM ? Gm(MM, MM.baf2RxTarget).coolantSecs : null,
        nM = "cryo" === Em(MM).CH;
      if (null !== PM && PM >= 1 && PM <= 30) return wm(nM ? "rxWarnCryo" : "rxWarnWater", "bad");
      const QM = XP(KP(...MM.baf2RxDims)).waste,
        zM = OM ? Gn(MM, QM, Cm(MM)).fullInS : null;
      if (null !== zM && zM <= 120 && MM.baf2RxWaste >= .5 * QM) return wm("rxWarnWaste", "warn");
      if (null !== PM && PM >= 1) return wm(nM ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: PM
      });
      const LM = "noWater" === MM.baf2RxState && jM > NP;
      if (MM.baf2RxDamage >= 1 && !LM) return wm("rxDamagedHeals", "warn", {
        pct: MM.baf2RxDamage
      });
      if (MM.baf2RxCryoCut) return wm("rxFix_cryoCut", "warn");
      const mM = Em(MM);
      if ("noWater" === MM.baf2RxState && "cryo" === mM.CH) return wm("noWater" === MM.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const HM = SM.fix === `${Jm}rxFix_scramCool` || "idle" === MM.baf2RxState && MM.baf2RxTarget <= 0;
      if (HM && MM.baf2RxFuel <= 0) return wm("rxFix_noFuel", "warn");
      if (HM && MM.baf2RxWaterIn <= 0 && (null !== (rM = MM.baf2RxCryoIn) && void 0 !== rM ? rM : 0) <= 0) return wm("rxFix_noWater", "warn");
      const hM = SM.fix === `${Jm}rxFix_scramCool` ? dn(MM) : null;
      if (null !== hM) return {
        key: hM.key,
        params: {
          amount: hM.amount
        },
        tone: "info"
      };
      if ("running" !== MM.baf2RxState && "idle" !== MM.baf2RxState && null !== SM.fix) return {
        key: SM.fix,
        params: {},
        tone: "scram" === MM.baf2RxState ? "info" : LM ? "bad" : "warn"
      };
      var JM;
      if ("idle" === MM.baf2RxState && MM.baf2RxTarget <= 0) return {
        key: null !== (JM = SM.fix) && void 0 !== JM ? JM : `${Jm}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const dM = MM.baf2RxCryoStarved;
      if ("cryo" === mM.CH && dM && mM.needPerS > 0 && mM.usePerS < dm * mM.needPerS) return wm("noWater" === dM ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const yM = "cryo" === mM.CH,
        lM = mM.needPerS > 0 && mM.usePerS < dm * mM.needPerS;
      if (yM ? lM || mM.makersShort > 0 && mM.pct < 100 : mM.pct < 100) {
        const rM = yM && lM ? Math.floor(100 * mM.usePerS / mM.needPerS) : Math.min(100, mM.pct);
        if (mM.makersShort > 0) {
          return wm(`${yM?"rxCryoShortLine":"rxWaterShortLine"}${1===mM.makersShort?"One":""}${!yM&&MM.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: rM,
            count: mM.makersShort
          })
        }
        return wm(yM ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: rM
        })
      }
      const EM = function(MM) {
        const [rM, iM, OM] = MM.baf2RxStats, SM = Em(MM), jM = Qn({
          fuelHeat: rM,
          cooling: iM,
          size: OM
        }, "cryo" === SM.CH ? VM.h : 1, !0);
        return Math.max(0, jM * lm(SM.CH) - SM.inPerS)
      }(MM);
      if (iM && EM > 0) return wm("cryo" === mM.CH ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(EM)
      });
      if (jM >= jn) return wm("rxHotLine", "warn");
      const UM = Gm(MM, MM.baf2RxTarget);
      var GM;
      if (null !== UM.overheatS) return wm("rxWillOverheat", "bad", {
        pct: MM.baf2RxTarget,
        time: UM.overheatS,
        safe: null !== (GM = UM.hotAbove) && void 0 !== GM ? GM : 100
      });
      if (Math.abs(UM.settle - jM) >= 3) return wm("rxSettling", "info", {
        pct: MM.baf2RxTarget,
        heat: Math.round(UM.settle),
        time: UM.settleS
      });
      const CM = dn(MM);
      if (null !== CM) return {
        key: CM.key,
        params: {
          amount: CM.amount
        },
        tone: "info"
      };
      const eM = function(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== rM && ("running" !== rM || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === MM.rods ? `${Ln}rxLimitNoRods` : `${Ln}rxLimit_${Sn(MM)}`
      }({
        rods: MM.baf2RxStats[3],
        ...Jn(MM)
      }, MM.baf2RxState, MM.baf2RxOut >= dm * MM.baf2RxMaxNow, !1);
      if (eM === `${Jm}rxLimit_size`) {
        const [rM, , iM, OM] = MM.baf2RxStats, SM = OM > 0 && rM > 0 ? Math.ceil(iM / (rM / OM) - 1e-9) : OM, jM = MM.baf2RxDims.every((MM => MM >= Ai("reactor").max));
        if (SM < OM) return wm(jM ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: SM,
          have: OM
        });
        if (jM) return wm("rxLimit_sizeMax", "info")
      }
      return null !== eM ? {
        key: eM,
        params: {},
        tone: "info"
      } : wm("rxSteady", "ok", {
        pct: MM.baf2RxTarget
      })
    }

    function gm(MM) {
      var rM;
      if (MM.melted) return wm("rxMeltedBody", "bad");
      if (-1 === MM.bad) return wm("rxFix_noRoom", "warn");
      if (MM.bad > 0) return wm(1 === MM.bad ? "rxBadOne" : "rxBad", "warn", {
        count: MM.bad
      });
      if (MM.left > 0) {
        const rM = 1 === MM.left ? "One" : "";
        return wm(MM.canFill ? `rxPlanLeft${rM}` : `rxPlanLeftNoFill${rM}`, "info", {
          count: MM.left
        })
      }
      if (0 === MM.rods) return wm("rxLimitNoRods", "warn");
      const iM = null !== (rM = MM.idle) && void 0 !== rM ? rM : 0;
      return iM > 0 ? wm(1 === iM ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: iM
      }) : wm("rxPlanReady", "ok")
    }

    function um(MM) {
      return Math.floor(Math.max(0, MM[1] - 1) / 2)
    }

    function Rm(MM) {
      if (MM >= VP && MM < cP) {
        const rM = MM - VP;
        return {
          key: 0 === rM ? `${Jm}rxWhy_rodAlone` : 1 === rM ? `${Jm}rxWhy_rodOne` : `${Jm}rxWhy_rod`,
          params: {
            count: String(rM),
            heat: String(WP * (1 + sP * rM))
          }
        }
      }
      return MM === cP ? {
        key: `${Jm}rxWhy_channel`,
        params: {
          amount: String(kP)
        }
      } : MM === Mn ? {
        key: `${Jm}rxWhy_deadChannel`,
        params: {}
      } : MM === rn ? {
        key: `${Jm}rxWhy_graphite`,
        params: {}
      } : {
        key: `${Jm}rxWhy_core`,
        params: {}
      }
    }
    const pm = "buildAFactory2Game:";

    function Wm(MM, rM) {
      return 0 !== (MM.baf2RxFlags & rM)
    }

    function sm(MM) {
      let {
        status: rM,
        pending: iM,
        store: OM,
        explain: SM
      } = MM;
      const {
        t: jM
      } = (0, tS.A)(), aM = Wm(rM, mr), PM = rM.baf2RxTarget, nM = rM.baf2RxThrottle, QM = function(MM) {
        return {
          press: () => {
            MM.throttlePress()
          },
          drag: rM => {
            MM.throttleDrag(rM)
          },
          release: () => {
            MM.throttleRelease()
          }
        }
      }(OM), zM = null === (LM = Gm(rM, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, LM - 10),
        red: LM
      };
      var LM;
      return (0, Gj.jsxs)("div", {
        className: CS()("Baf2RxThrottle", {
          Off: aM
        }),
        onClick: () => {
          aM && SM(`${pm}rxWhy_startFirst`)
        },
        children: [(0, Gj.jsx)("span", {
          className: "HideNarrow",
          children: jM(`${pm}rxThrottle`)
        }), (0, Gj.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, Gj.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: PM,
            disabled: aM,
            style: aM ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": jM(`${pm}rxThrottle`),
            onPointerDown: () => {
              QM.press();
              const MM = () => {
                window.removeEventListener("pointerup", MM), window.removeEventListener("pointercancel", MM), QM.release()
              };
              window.addEventListener("pointerup", MM), window.addEventListener("pointercancel", MM)
            },
            onKeyUp: QM.release,
            onChange: MM => {
              QM.drag(Number(MM.target.value))
            }
          }), (0, Gj.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${zM.amber}%, #ffb020 ${zM.amber}% ${zM.red}%, #ff3b30 ${zM.red}%)`
            },
            "aria-hidden": "true"
          }), (0, Gj.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${nM}% + ${8*(1-nM/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, Gj.jsxs)("b", {
          children: [`${PM}%`, (0, Gj.jsx)("i", {
            className: CS()("Baf2RxPendingDot", {
              On: iM
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function Dm(MM) {
      let {
        status: rM
      } = MM;
      const {
        t: iM
      } = (0, tS.A)(), OM = Gm(rM, rM.baf2RxTarget), SM = Em(rM).CH, jM = iM("cryo" === SM ? `${pm}rxRateCryo` : `${pm}rxRateWater`, {
        rate: mm(OM.coolPerS)
      }), aM = iM(`${pm}rxChain`, {
        pct: String(rM.baf2RxTarget),
        out: gn(OM.out),
        heat: String(Math.round(OM.settle)),
        coolant: jM
      }), PM = null !== OM.coolantSecs ? OM.coolantSecs >= 1 ? iM("cryo" === SM ? `${pm}rxThrottleCryoOut` : `${pm}rxThrottleWaterOut`, {
        time: yj(iM, OM.coolantSecs)
      }) : iM("cryo" === SM ? `${pm}rxThrottleCryoDry` : `${pm}rxThrottleWaterDry`) : null;
      return (0, Gj.jsxs)("p", {
        className: "Baf2RxChain",
        children: [aM, null !== PM ? (0, Gj.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", PM]
        }) : (0, Gj.jsxs)("span", {
          children: [" \xb7 ", iM(`${pm}rxChainPellets`, {
            amount: un(OM.pelletsPerMin)
          })]
        })]
      })
    }

    function km(MM) {
      let {
        view: rM,
        store: iM,
        explain: SM,
        explainOnce: jM
      } = MM;
      const {
        t: aM
      } = (0, tS.A)(), {
        status: PM
      } = rM, [nM, QM] = (0, OM.useState)(!1), zM = Wm(PM, mr), mM = Wm(PM, Hr), HM = !Wm(PM, dr), hM = PM.baf2RxHeat > 100;
      return (0, Gj.jsxs)(Gj.Fragment, {
        children: [(0, Gj.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, Gj.jsx)(sm, {
            status: PM,
            pending: rM.throttlePending,
            store: iM,
            explain: SM
          }), (0, Gj.jsx)(hm, {
            on: mM,
            label: mM ? aM(`${pm}rxOdLeft`, {
              time: yj(aM, PM.baf2RxOdLeft)
            }) : aM(`${pm}rxOverdrive`),
            locked: HM,
            pending: 0 !== (rM.pendingFlags & Hr),
            toggle: () => {
              HM ? SM(`${pm}rxOverdriveTier`, {
                amount: String(LM(13))
              }) : mM ? iM.setFlag(Hr, !1) : rM.odConfirmed ? iM.setFlag(Hr, !0) : QM(!0)
            }
          }), zM || rM.startGuard ? (0, Gj.jsx)(la.u, {
            disabled: rM.busy.has("start") || rM.startGuard,
            onClick: () => {
              iM.tap("start", (() => {
                iM.setFlag(mr, !1)
              }))
            },
            children: aM(rM.startGuard ? `${pm}rxStarting` : `${pm}rxStart`)
          }) : (0, Gj.jsx)("span", {
            className: CS()("Baf2RxScram", {
              Pulse: hM
            }),
            children: (0, Gj.jsx)(la.J, {
              onClick: () => {
                iM.shutDown()
              },
              children: aM(`${pm}rxScram`)
            })
          })]
        }), (0, Gj.jsx)(Dm, {
          status: PM
        }), nM && (0, Gj.jsx)(nm, {
          id: "baf2RxOdTitle",
          title: `${pm}rxOdConfirmTitle`,
          body: `${pm}rxOdConfirmBody`,
          yes: `${pm}rxOdConfirm`,
          cancel: () => {
            QM(!1)
          },
          confirm: () => {
            QM(!1), iM.tap("odConfirm", (() => {
              iM.confirmOverdrive(), iM.setFlag(Hr, !0)
            })), jM(`${pm}rxWhy_overdrive`)
          }
        })]
      })
    }

    function Zm(MM) {
      let {
        view: rM,
        store: iM,
        keepSize: OM
      } = MM;
      const {
        t: SM
      } = (0, tS.A)(), {
        status: jM
      } = rM;
      return (0, Gj.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, Gj.jsx)(Hm, {
          kind: "reactor",
          dims: rM.dims,
          cap: jM.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: MM => {
            iM.resize(MM)
          }
        }), OM ? (0, Gj.jsx)(la.i, {
          onClick: OM,
          children: SM(`${pm}rxKeepSize`)
        }) : (0, Gj.jsxs)(Gj.Fragment, {
          children: [(0, Gj.jsx)(hm, {
            on: rM.guide,
            label: SM(`${pm}rxGuide`),
            toggle: () => {
              iM.toggleGuide()
            }
          }), Wm(jM, lr) && (0, Gj.jsx)(hm, {
            on: rM.starter,
            label: SM(`${pm}rxStarter`),
            toggle: () => {
              iM.toggleStarter()
            }
          }), (0, Gj.jsx)(Sm, {
            status: jM,
            store: iM,
            busy: rM.busy.has("fill")
          })]
        })]
      })
    }

    function om(MM) {
      let {
        need: rM,
        kind: iM = "reactor",
        explain: OM
      } = MM;
      const {
        t: SM
      } = (0, tS.A)(), jM = rM.length <= 3, aM = rM.reduce(((MM, rM) => {
        let [, iM] = rM;
        return MM + iM
      }), 0);
      return (0, Gj.jsxs)("div", {
        className: CS()("Baf2RxParts", {
          Compact: !jM
        }),
        onClick: () => {
          OM("battery" === iM ? `${pm}batWhy_store` : `${pm}rxShellHint`)
        },
        children: [aM > 0 && (0, Gj.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === aM ? SM(`${pm}rxBlocksOne`) : SM(`${pm}rxBlocks`, {
            blocks: String(aM)
          })
        }), 0 === rM.length ? (0, Gj.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: SM("battery" === iM ? `${pm}batPartsDone` : `${pm}rxShellDone`)
        }) : En(rM).map((MM => {
          let [rM, iM, OM] = MM;
          const aM = function(MM) {
            const rM = bn[MM];
            if (void 0 === rM) return null;
            const [iM, OM, SM] = Cn[rM].colour.map((MM => Math.round(255 * MM)));
            return `rgb(${iM}, ${OM}, ${SM})`
          }(rM);
          return (0, Gj.jsxs)("span", {
            className: "Baf2RxChip",
            title: (0, Mj.e)(SM, rM),
            children: [(0, Gj.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === aM ? {
                visibility: "hidden"
              } : {
                background: aM
              },
              title: SM(`${pm}rxShopGhost`)
            }), (0, Gj.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, Gj.jsx)(uS.b, {
                itemName: rM,
                amount: 0
              })
            }), (0, Gj.jsx)("span", {
              className: "Baf2RxChipName",
              children: jM ? `${iM} ${PM=(0,Mj.e)(SM,rM),PM.replace(/^(Reactor|Battery) (?=\S)/,"")}` : iM
            }), OM >= iM ? (0, Gj.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, Gj.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: jM ? SM(`${pm}rxShopShort`, {
                count: String(iM - OM)
              }) : "\u2212" + (iM - OM)
            })]
          }, rM);
          var PM
        }))]
      })
    }
    const fm = "buildAFactory2Game:";

    function Ym(MM) {
      var rM, iM, SM, jM, aM, PM, nM;
      let {
        store: QM,
        close: zM
      } = MM;
      const {
        t: LM
      } = (0, tS.A)(), mM = oa(), HM = Qm(QM), {
        explained: hM,
        explain: JM
      } = VL("baf2RxExplained"), dM = (0, OM.useCallback)(((MM, rM) => {
        JM(LM(MM, rM))
      }), [JM, LM]), yM = null === HM || void 0 === HM ? void 0 : HM.status, lM = !0 === (null === yM || void 0 === yM ? void 0 : yM.baf2BatReadOnly), EM = MM => {
        yM && mM.send(Lr(yM.baf2BatAt, MM))
      }, [UM, GM, CM] = null !== (rM = null === HM || void 0 === HM ? void 0 : HM.dims) && void 0 !== rM ? rM : [0, 0, 0], eM = gn(null !== (iM = null === HM || void 0 === HM ? void 0 : HM.vL) && void 0 !== iM ? iM : 0), bM = !0 === (null === yM || void 0 === yM ? void 0 : yM.baf2BatFormed), wM = null !== (SM = null === yM || void 0 === yM ? void 0 : yM.baf2BatStored) && void 0 !== SM ? SM : 0, tM = Math.max(1, null !== (jM = null === yM || void 0 === yM ? void 0 : yM.baf2BatIslandCap) && void 0 !== jM ? jM : 1), gM = Math.min(100, 100 * wM / tM), uM = null === yM || void 0 === yM ? void 0 : yM.baf2BatNetPerS, RM = function(MM, rM, iM) {
        return iM > 0 && rM >= iM ? "full" : void 0 !== MM && MM >= .05 ? "charging" : void 0 !== MM && MM <= -.05 && rM > 0 ? "draining" : "steady"
      }(uM, wM, null !== (aM = null === yM || void 0 === yM ? void 0 : yM.baf2BatIslandCap) && void 0 !== aM ? aM : 0), pM = null !== (PM = null === yM || void 0 === yM ? void 0 : yM.baf2BatMadePerS) && void 0 !== PM ? PM : 0, WM = null !== (nM = null === yM || void 0 === yM ? void 0 : yM.baf2BatUsedPerS) && void 0 !== nM ? nM : 0;
      let sM, DM = {},
        kM = "info";
      if (yM)
        if (bM) "charging" === RM ? (sM = `${fm}batLine_charging`, DM = {
          time: yj(LM, (tM - wM) / Math.max(.05, null !== uM && void 0 !== uM ? uM : 0))
        }, kM = "ok") : "draining" === RM ? (sM = `${fm}batLine_draining`, DM = {
          time: yj(LM, wM / Math.max(.05, -(null !== uM && void 0 !== uM ? uM : 0)))
        }, kM = "warn") : sM = "full" === RM ? `${fm}batLine_full` : wM <= 0 && WM > 0 ? `${fm}batLine_empty` : `${fm}batLine_steady`;
        else {
          var ZM;
          const MM = gm({
            left: yM.baf2BatNeed.reduce(((MM, rM) => {
              let [, iM] = rM;
              return MM + iM
            }), 0),
            bad: yM.baf2BatBad,
            rods: 1,
            canFill: !0 === yM.baf2BatCanFill,
            melted: !1
          });
          sM = MM.key, DM = {
            count: String(null !== (ZM = MM.params.count) && void 0 !== ZM ? ZM : 0)
          }, kM = MM.tone
        }
      else sM = `${fm}batLine_steady`;
      const oM = Math.max(pM, WM, 1);
      return (0, Gj.jsx)(ya.e, {
        close: zM,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, Gj.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, Gj.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Gj.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, Gj.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, Gj.jsx)(uS.b, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, Gj.jsxs)("div", {
                children: [(0, Gj.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: LM(`${fm}batTitle`)
                }), yM && (0, Gj.jsxs)("p", {
                  className: CS()("Baf2RxSubtitle", {
                    good: bM && "charging" === RM,
                    warn: bM && "draining" === RM
                  }),
                  children: [UM, "\xd7", GM, "\xd7", CM, " \xb7 ", LM(bM ? `${fm}batState_${RM}` : `${fm}rxSubPlanShort`)]
                })]
              })]
            }), (0, Gj.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [yM && !lM && (0, Gj.jsx)(zm, {
                kind: "battery",
                cap: bM ? eM : void 0,
                busy: null === HM || void 0 === HM ? void 0 : HM.busy.has("apart"),
                apart: () => {
                  QM.tap("apart", (() => {
                    EM("apart")
                  }))
                }
              }), (0, Gj.jsx)(la.l, {
                onClick: zM
              })]
            })]
          }), HM && yM && (0, Gj.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, Gj.jsxs)("div", {
              className: CS()("Baf2RxFlow Baf2BatFlow", {
                Plan: !bM
              }),
              children: [(0, Gj.jsx)(KL, {
                kind: "Power",
                label: LM(`${fm}batMade`),
                number: bM ? `\u26a1 ${gn(pM)}/s` : "\u2014",
                note: LM(`${fm}batMadeNote`),
                share: bM ? pM / oM : void 0,
                onExplain: () => {
                  dM(`${fm}batWhy_made`)
                }
              }), (0, Gj.jsx)(qL, {
                kind: "Power",
                step: bM ? em(pM, oM) : 0,
                planned: !bM
              }), (0, Gj.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  dM(`${fm}batWhy_store`)
                },
                children: [(0, Gj.jsx)(TL, {
                  max: 100,
                  bands: [{
                    upTo: bM ? gM : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, Gj.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, Gj.jsx)("b", {
                    className: "Baf2BatStored",
                    children: bM ? LM(`${fm}batStoredOf`, {
                      amount: gn(wM),
                      cap: gn(yM.baf2BatIslandCap)
                    }) : LM(`${fm}batWillHold`, {
                      cap: eM
                    })
                  }), (0, Gj.jsx)("span", {
                    children: LM(`${fm}batAdds`, {
                      cap: eM
                    })
                  }), bM && (0, Gj.jsx)("small", {
                    children: LM(`${fm}batBreakNote`, {
                      cap: eM
                    })
                  })]
                })]
              }), (0, Gj.jsx)(qL, {
                kind: "Power",
                step: bM ? em(WM, oM) : 0,
                planned: !bM
              }), (0, Gj.jsx)(KL, {
                kind: "Power",
                label: LM(`${fm}batUsed`),
                number: bM ? `\u26a1 ${gn(WM)}/s` : "\u2014",
                note: LM(`${fm}batUsedNote`),
                share: bM ? WM / oM : void 0,
                onExplain: () => {
                  dM(`${fm}batWhy_used`)
                }
              })]
            }), (0, Gj.jsx)(cL, {
              text: LM(sM, DM),
              tone: kM,
              explained: hM
            }), lM ? (0, Gj.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: LM(`${fm}rxNotYours`)
            }) : !bM && (0, Gj.jsxs)(Gj.Fragment, {
              children: [(0, Gj.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, Gj.jsx)(Hm, {
                  kind: "battery",
                  dims: HM.dims,
                  cap: yM.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: MM => {
                    QM.resize(MM)
                  }
                }), (0, Gj.jsx)(hm, {
                  on: HM.guide,
                  label: LM(`${fm}rxGuide`),
                  toggle: () => {
                    QM.toggleGuide()
                  }
                }), yM.baf2BatCanFill && (0, Gj.jsx)(la.p, {
                  disabled: !Un("battery", yM.baf2BatNeed) || HM.busy.has("fill"),
                  onClick: () => {
                    QM.tap("fill", (() => {
                      EM("fill")
                    }))
                  },
                  children: LM(`${fm}rxFill`)
                })]
              }), (0, Gj.jsx)(om, {
                need: yM.baf2BatNeed,
                kind: "battery",
                explain: dM
              })]
            })]
          })]
        })
      })
    }
    const Nm = "buildAFactory2Game:",
      Am = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function xm(MM, rM) {
      return MM === TP ? null : rM ? "#4a4440" : MM < cP ? Am[MM - VP] : MM === cP ? "#3fd0f0" : MM === Mn ? "#2c3e4c" : "#55585e"
    }

    function Fm(MM) {
      let {
        inner: rM,
        looks: iM,
        layer: OM,
        setLayer: SM,
        glow: jM,
        melted: aM,
        explain: PM
      } = MM;
      const {
        t: nM
      } = (0, tS.A)(), [QM, zM, LM] = rM, mM = Math.max(0, Math.min(zM - 1, OM)), HM = [];
      for (let JM = 0; JM < LM; JM++)
        for (let MM = 0; MM < QM; MM++) {
          var hM;
          const rM = null !== (hM = iM[(mM * LM + JM) * QM + MM]) && void 0 !== hM ? hM : TP,
            OM = xm(rM, aM),
            SM = rM >= VP && rM < cP;
          HM.push(null === OM ? (0, Gj.jsx)("circle", {
            cx: MM + .5,
            cy: JM + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${MM},${JM}`) : (0, Gj.jsx)("rect", {
            x: MM + .06,
            y: JM + .06,
            width: .88,
            height: .88,
            fill: OM,
            opacity: SM && !aM ? .5 + .5 * jM : 1,
            onClick: MM => {
              MM.stopPropagation();
              const iM = Rm(rM);
              PM(iM.key, iM.params)
            }
          }, `${MM},${JM}`))
        }
      return (0, Gj.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, Gj.jsx)("svg", {
          className: CS()("Baf2RxMapGrid", {
            Melted: aM
          }),
          viewBox: `0 0 ${Math.max(1,QM)} ${Math.max(1,LM)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": nM(`${Nm}rxWhy_core`),
          onClick: () => {
            PM(`${Nm}rxWhy_core`, {})
          },
          children: HM
        }), zM > 1 && (0, Gj.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, Gj.jsx)("button", {
            type: "button",
            "aria-label": nM(`${Nm}rxLayerDown`),
            disabled: mM <= 0,
            onClick: () => {
              SM(mM - 1)
            },
            children: "\u25bc"
          }), (0, Gj.jsxs)("span", {
            children: [(0, Gj.jsx)("span", {
              className: "HideNarrow",
              children: nM(`${Nm}rxLayer`, {
                n: String(mM + 1),
                of: String(zM)
              })
            }), (0, Gj.jsx)("span", {
              className: "ShowNarrow",
              children: nM(`${Nm}rxLayerShort`, {
                n: String(mM + 1),
                of: String(zM)
              })
            })]
          }), (0, Gj.jsx)("button", {
            type: "button",
            "aria-label": nM(`${Nm}rxLayerUp`),
            disabled: mM >= zM - 1,
            onClick: () => {
              SM(mM + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const Bm = "buildAFactory2Game:",
      Xm = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: AP,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: Hn,
        kind: "red"
      }],
      Im = [50, AP, 100];

    function Km(MM) {
      let {
        stats: rM,
        t: iM,
        explain: OM
      } = MM;
      const SM = Sn(rM),
        jM = Math.max(1, rM.fuelHeat, rM.cooling, rM.size),
        aM = [
          ["fuel", `${Bm}rxBarRods`, rM.fuelHeat],
          ["cooling", `${Bm}rxBarCooling`, rM.cooling],
          ["size", `${Bm}rxBarSize`, rM.size]
        ];
      return (0, Gj.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          OM(`${Bm}rxWhy_bars`)
        },
        children: [(0, Gj.jsx)("span", {
          className: "Baf2RxMostLine",
          children: iM(`${Bm}rxMost`, {
            amount: gn(Math.min(rM.fuelHeat, rM.cooling, rM.size))
          })
        }), (0, Gj.jsx)("span", {
          className: "Baf2RxMostBars",
          children: aM.map((MM => {
            let [rM, OM, aM] = MM;
            return (0, Gj.jsxs)("span", {
              className: CS()("Baf2RxMostBar", rM, {
                Low: rM === SM
              }),
              children: [(0, Gj.jsx)("small", {
                children: iM(OM)
              }), (0, Gj.jsx)("i", {
                children: (0, Gj.jsx)("b", {
                  style: {
                    width: 100 * aM / jM + "%"
                  }
                })
              })]
            }, rM)
          }))
        })]
      })
    }

    function qm(MM) {
      var rM;
      let {
        view: iM,
        heat: SM,
        settle: jM,
        settleLine: aM,
        settleBad: PM,
        explain: nM
      } = MM;
      const {
        t: QM
      } = (0, tS.A)(), {
        status: zM
      } = iM, LM = zM.baf2RxAt.join(","), [mM, HM] = (0, OM.useState)((() => um(iM.inner)));
      (0, OM.useEffect)((() => {
        HM(um(iM.inner))
      }), [LM, iM.inner[1]]);
      const hM = null !== (rM = iM.plan) && void 0 !== rM ? rM : Jn(zM),
        JM = iM.plan ? iM.plan.powerPerUnit : zM.baf2RxStats[8],
        dM = null === SM ? null : "alarm" === (yM = mn(zM)) ? "red" : "hot" === yM ? "hot" : "warm" === yM ? "warm" : "cold";
      var yM;
      const lM = !zM.baf2RxFormed && function(MM, rM) {
          return 0 !== (MM.baf2RxFlags & rM)
        }(zM, hr),
        EM = zM.baf2RxDamage,
        UM = zM.baf2RxDamageTrend;
      return (0, Gj.jsxs)("div", {
        className: CS()("Baf2RxCore", null !== dM && void 0 !== dM ? dM : "plan"),
        children: [(0, Gj.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, Gj.jsx)(Fm, {
            inner: iM.inner,
            looks: iM.looks,
            layer: mM,
            setLayer: HM,
            glow: zM.baf2RxFormed ? zM.baf2RxThrottle / 100 : 1,
            melted: lM,
            explain: nM
          }), (0, Gj.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              nM(`${Bm}rxWhy_heat`)
            },
            children: [null !== SM ? (0, Gj.jsxs)(Gj.Fragment, {
              children: [(0, Gj.jsx)("b", {
                children: QM(`${Bm}rxHeatPct`, {
                  pct: String(SM)
                })
              }), (0, Gj.jsx)("span", {
                className: CS()("Baf2RxBand", dM),
                children: QM(`${Bm}rxBand_${dM}`)
              })]
            }) : (0, Gj.jsx)("b", {
              children: QM(`${Bm}rxHeat`)
            }), null !== aM && (0, Gj.jsx)("span", {
              className: CS()("Baf2RxSettle", {
                Bad: PM
              }),
              children: aM
            }), EM >= 1 && (0, Gj.jsxs)("span", {
              className: CS()("Baf2RxDamage", UM),
              children: [QM(`${Bm}rxDamageLine`, {
                pct: String(EM)
              }), " \xb7 ", QM(`${Bm}rxDamage_${UM}`), (0, Gj.jsx)("i", {
                children: (0, Gj.jsx)("b", {
                  style: {
                    width: `${Math.min(100,EM)}%`
                  }
                })
              })]
            })]
          }), (0, Gj.jsx)(TL, {
            max: Hn,
            bands: Xm,
            ticks: Im,
            now: SM,
            settle: jM,
            settleTone: PM ? "bad" : null,
            onExplain: () => {
              nM(`${Bm}rxWhy_heat`)
            }
          })]
        }), (0, Gj.jsx)(Km, {
          stats: hM,
          t: QM,
          explain: nM
        }), JM > 0 && (0, Gj.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            nM(`${Bm}rxWhy_perPellet`)
          },
          children: QM(`${Bm}rxPerPellet`, {
            amount: gn(JM)
          })
        })]
      })
    }

    function Tm(MM, rM) {
      var iM;
      if (!MM.baf2RxStore) return {
        note: rM(`${Bm}rxUpTo`, {
          amount: gn(MM.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [OM, SM] = MM.baf2RxStore, jM = SM > 0 ? OM / SM : 0, aM = String(Math.floor(100 * jM)), PM = null !== (iM = MM.baf2RxStoreNetPerS) && void 0 !== iM ? iM : 0, nM = function(MM) {
        var rM, iM;
        const [OM, SM] = null !== (rM = MM.baf2RxStore) && void 0 !== rM ? rM : [0, 0], jM = null !== (iM = MM.baf2RxStoreNetPerS) && void 0 !== iM ? iM : 0;
        return SM > 0 && OM >= SM - 1 ? "running" === MM.baf2RxState ? `${Jm}rxStoreFull` : `${Jm}rxStoreFullOnly` : jM > .05 ? `${Jm}rxStoreLine` : jM < -.05 ? "running" === MM.baf2RxState ? `${Jm}rxStoreUsesMore` : `${Jm}rxStoreDraining` : `${Jm}rxStorePct`
      }(MM);
      return {
        note: rM(nM, nM === `${Bm}rxStoreLine` ? {
          pct: aM,
          time: yj(rM, (SM - OM) / PM)
        } : {
          pct: aM
        }),
        share: jM
      }
    }

    function Vm(MM) {
      let {
        view: rM,
        explain: iM,
        preview: OM
      } = MM;
      const {
        t: SM
      } = (0, tS.A)(), {
        status: jM
      } = rM, aM = XP(KP(...rM.dims)), PM = Cm(jM), nM = Math.min(Math.round(jM.baf2RxFuel), aM.fuel), QM = "running" === jM.baf2RxState, zM = QM ? em(jM.baf2RxOut, jM.baf2RxMaxNow) : 0, LM = function(MM, rM, iM) {
        const OM = Em(MM),
          SM = "cryo" === OM.CH,
          jM = iM ? iM.coolantSecs : OM.pct >= 100 && MM.baf2RxOut >= 1 ? Gm(MM, MM.baf2RxThrottle).coolantSecs : null;
        let aM, PM = !1;
        if (OM.pct < 100) {
          const iM = 1 === OM.makersShort,
            jM = !SM && MM.baf2RxCryoOpen ? "OrCryo" : "";
          aM = OM.makersShort > 0 ? rM(SM ? `${Bm}rxCryoAddMixer${iM?"":"s"}` : `${Bm}rxWaterAddCondenser${iM?"":"s"}${jM}`, {
            count: String(OM.makersShort)
          }) : rM(`${Bm}rxWaterNeeds`, {
            rate: mm(OM.needPerS)
          })
        } else if (null !== jM) aM = rM(`${Bm}rxWaterRunsOut`, {
          time: yj(rM, jM)
        });
        else if (OM.waterBeside > 0) aM = rM(`${Bm}rxCryoPlusWater`, {
          rate: mm(OM.waterBeside)
        });
        else {
          const MM = function(MM) {
            return MM.inPerS <= 0 ? "rxWaterNoSupply" : MM.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(OM);
          PM = "rxWaterNoSupply" === MM, aM = rM(`${Bm}${MM}`, {
            amount: gn(OM.stored)
          })
        }
        return {
          kind: SM ? "Cryo" : "Water",
          label: rM(SM ? `${Bm}rxCryo` : `${Bm}rxWater`),
          number: `${mm(OM.usePerS)}/s`,
          preview: iM ? `${mm(iM.coolPerS)}/s` : null,
          note: aM,
          tone: "noWater" === MM.baf2RxState ? "danger" : PM ? "warn" : (nM = OM.pct, QM = jM, nM < 100 ? "danger" : null === QM ? null : QM < 300 ? "danger" : "warn"),
          share: OM.pct / 100,
          why: SM ? `${Bm}rxWhy_cryo` : `${Bm}rxWhy_water`,
          short: OM.pct < 100
        };
        var nM, QM
      }(jM, SM, OM), mM = Gn(jM, aM.waste, PM), HM = Tm(jM, SM), hM = Gm(jM, jM.baf2RxTarget), JM = QM && Math.abs(hM.settle - jM.baf2RxHeat) >= 3, dM = OM ? OM.pelletsPerMin / 60 : null;
      return (0, Gj.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, Gj.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Gj.jsx)(KL, {
            kind: "Fuel",
            label: SM(`${Bm}rxFuel`),
            number: String(nM),
            preview: null !== dM && dM > 0 && jM.baf2RxFuel > 0 ? yj(SM, jM.baf2RxFuel / dM) : null,
            note: jM.baf2RxFuel <= 0 ? SM(`${Bm}rxFuelEmpty`) : PM > 0 ? SM(`${Bm}rxFuelLeft`, {
              time: yj(SM, jM.baf2RxFuel / PM)
            }) : SM(1 === nM ? `${Bm}rxFuelPellet` : `${Bm}rxFuelPellets`),
            tone: "noFuel" === jM.baf2RxState ? "danger" : jM.baf2RxFuel < 2 ? "warn" : null,
            share: jM.baf2RxFuel / aM.fuel,
            onExplain: () => {
              iM(`${Bm}rxWhy_fuel`)
            }
          }), (0, Gj.jsx)(KL, {
            kind: LM.kind,
            label: LM.label,
            number: LM.number,
            preview: LM.preview,
            note: LM.note,
            tone: LM.tone,
            share: LM.share,
            onExplain: () => {
              iM(LM.why)
            }
          })]
        }), (0, Gj.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Gj.jsx)(qL, {
            kind: "Fuel",
            step: zM,
            short: "noFuel" === jM.baf2RxState
          }), (0, Gj.jsx)(qL, {
            kind: LM.kind,
            step: zM,
            short: LM.short || "noWater" === jM.baf2RxState
          })]
        }), (0, Gj.jsx)(qm, {
          view: rM,
          heat: jM.baf2RxHeat,
          settle: Math.min(Hn, hM.settle),
          settleLine: JM ? SM(`${Bm}rxHeatSettles`, {
            pct: String(Math.round(hM.settle)),
            time: yj(SM, hM.settleS)
          }) : null,
          settleBad: hM.settle > 100,
          explain: iM
        }), (0, Gj.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Gj.jsx)(qL, {
            kind: "Power",
            step: zM
          }), (0, Gj.jsx)(qL, {
            kind: "Waste",
            step: QM && jM.baf2RxFuel - jM.baf2RxPu > 0 ? zM : 0,
            short: mM.full
          })]
        }), (0, Gj.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Gj.jsx)(KL, {
            kind: "Power",
            label: SM(`${Bm}rxPowerOut`),
            number: `\u26a1 ${gn(jM.baf2RxOut)}/s`,
            preview: OM ? gn(OM.out) : null,
            note: HM.note,
            share: HM.share,
            onExplain: () => {
              iM(`${Bm}rxWhy_power`)
            }
          }), (0, Gj.jsx)(KL, {
            kind: "Waste",
            label: SM(`${Bm}rxWaste`),
            number: `${Math.floor(jM.baf2RxWaste)}/${aM.waste}`,
            note: mM.full ? SM(`${Bm}rxWasteFull`) : null !== mM.fullInS ? SM(`${Bm}rxWasteFullIn`, {
              time: yj(SM, mM.fullInS)
            }) : SM(`${Bm}rxWasteSpent`),
            tone: "wasteFull" === jM.baf2RxState ? "danger" : mM.full ? "warn" : null,
            share: jM.baf2RxWaste / aM.waste,
            onExplain: () => {
              iM(`${Bm}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function cm(MM) {
      let {
        view: rM,
        explain: iM
      } = MM;
      const {
        t: OM
      } = (0, tS.A)(), SM = rM.plan;
      if (!SM) return null;
      const jM = SM.fuelHeat <= 0 ? null : SM.cooling > 0 ? Math.min(Hn, 100 * SM.fuelHeat / SM.cooling) : Hn,
        aM = OM(`${Bm}rxPlanAtFull`);
      return (0, Gj.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, Gj.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Gj.jsx)(KL, {
            kind: "Fuel",
            label: OM(`${Bm}rxFuel`),
            number: OM(`${Bm}rxPlanPerMin`, {
              amount: un(SM.pelletsPerMin)
            }),
            note: OM(`${Bm}rxPlanPellets`),
            onExplain: () => {
              iM(`${Bm}rxWhy_fuel`)
            }
          }), (0, Gj.jsx)(KL, {
            kind: "Water",
            label: OM(`${Bm}rxWater`),
            number: `${mm(SM.waterPerS)}/s`,
            note: rM.status.baf2RxCryoOpen && SM.waterPerS > 0 ? OM(`${Bm}rxPlanOrCryo`, {
              rate: mm(Qn(SM, VM.h) * VM.s)
            }) : aM,
            onExplain: () => {
              iM(`${Bm}rxWhy_water`)
            }
          })]
        }), (0, Gj.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Gj.jsx)(qL, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, Gj.jsx)(qL, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, Gj.jsx)(qm, {
          view: rM,
          heat: null,
          settle: jM,
          settleLine: null === jM ? null : OM(`${Bm}rxPlanHeat`, {
            pct: String(Math.round(jM))
          }),
          settleBad: null !== jM && jM > 100,
          explain: iM
        }), (0, Gj.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Gj.jsx)(qL, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, Gj.jsx)(qL, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, Gj.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Gj.jsx)(KL, {
            kind: "Power",
            label: OM(`${Bm}rxPowerOut`),
            number: `\u26a1 ${gn(SM.max)}/s`,
            note: aM,
            onExplain: () => {
              iM(`${Bm}rxWhy_power`)
            }
          }), (0, Gj.jsx)(KL, {
            kind: "Waste",
            label: OM(`${Bm}rxWaste`),
            number: OM(`${Bm}rxPlanPerMin`, {
              amount: un(SM.pelletsPerMin)
            }),
            note: OM(`${Bm}rxWasteSpent`),
            onExplain: () => {
              iM(`${Bm}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const MH = "buildAFactory2Game:",
      rH = {
        key: `${MH}rxWaiting`,
        params: {},
        tone: "info"
      };

    function iH(MM, rM) {
      return 0 !== (MM.baf2RxFlags & rM)
    }

    function OH(MM) {
      var rM, iM;
      let {
        store: SM,
        close: jM
      } = MM;
      const {
        t: aM
      } = (0, tS.A)(), PM = Qm(SM), {
        explained: nM,
        hinting: QM,
        explain: zM,
        explainOnce: LM
      } = VL("baf2RxExplained"), mM = (0, OM.useCallback)(((MM, rM) => {
        zM(aM(MM, rM))
      }), [zM, aM]), HM = (0, OM.useCallback)(((MM, rM) => {
        LM(MM, aM(MM, rM))
      }), [LM, aM]), [hM, JM] = (0, OM.useState)(!1), [dM, yM] = (0, OM.useState)(!1), lM = null === PM || void 0 === PM ? void 0 : PM.status, EM = null === lM || void 0 === lM ? void 0 : lM.baf2RxAt.join(","), UM = !0 === (null === lM || void 0 === lM ? void 0 : lM.baf2RxFormed);
      (0, OM.useEffect)((() => {
        yM(!1), JM(!1)
      }), [EM, UM]), (0, OM.useEffect)((() => (SM.opened(), () => {
        SM.closed()
      })), [SM]);
      const GM = void 0 !== lM && iH(lM, yr),
        CM = lM ? UM ? mn(lM) : null !== PM && void 0 !== PM && PM.plan ? function(MM, rM) {
          if (MM <= 0) return "off";
          if (rM <= 0) return "alarm";
          const iM = 100 * MM / rM;
          return iM < 50 ? "calm" : iM < jn ? "warm" : iM <= 100 ? "hot" : "alarm"
        }(PM.plan.fuelHeat, PM.plan.cooling) : "off" : "off",
        eM = lM ? hn(lM) : null,
        bM = PM ? PM.waiting ? rH : UM ? tm(PM.status) : function(MM) {
          var rM, iM;
          const {
            status: OM
          } = MM;
          return gm({
            left: OM.baf2RxNeed.reduce(((MM, rM) => {
              let [, iM] = rM;
              return MM + iM
            }), 0),
            bad: OM.baf2RxBad,
            rods: null !== (rM = null === (iM = MM.plan) || void 0 === iM ? void 0 : iM.rods) && void 0 !== rM ? rM : 0,
            canFill: iH(OM, Jr),
            melted: iH(OM, hr),
            idle: MM.looks.reduce(((MM, rM) => MM + (rM === Mn ? 1 : 0)), 0)
          })
        }(PM) : null,
        wM = QM && null !== bM && ("ok" === bM.tone || "info" === bM.tone),
        tM = lM ? function(MM) {
          const rM = 0 !== (MM.baf2RxFlags & mr),
            iM = MM.baf2RxHeat < vP;
          return 0 !== (MM.baf2RxFlags & hr) || iM && (rM || !MM.baf2RxFormed) ? null : MM.baf2RxFormed && !rM ? {
            key: `${Ln}rxApartScram`,
            params: {}
          } : {
            key: `${Ln}rxApartCooling`,
            params: {
              pct: String(vP)
            }
          }
        }(lM) : null,
        [gM, uM, RM] = null !== (rM = null === PM || void 0 === PM ? void 0 : PM.dims) && void 0 !== rM ? rM : [0, 0, 0],
        pM = `${gM}\xd7${uM}\xd7${RM}`;
      return (0, Gj.jsx)(ya.e, {
        close: jM,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, Gj.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, Gj.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Gj.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, Gj.jsx)(Lm, {
                mood: CM
              }), (0, Gj.jsxs)("div", {
                children: [(0, Gj.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: aM(`${MH}rxTitle`)
                }), PM && (0, Gj.jsxs)("p", {
                  className: CS()("Baf2RxSubtitle", UM && (null === eM || void 0 === eM ? void 0 : eM.tone)),
                  children: [UM && !GM ? (0, Gj.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": aM(`${MH}rxChangeSize`),
                    onClick: () => {
                      if (!lM) return;
                      const MM = iH(lM, mr);
                      var rM;
                      (rM = {
                        scram: MM,
                        heat: lM.baf2RxHeat
                      }).scram && rM.heat < vP ? JM(!0) : mM(MM ? `${MH}rxResizeCooling` : `${MH}rxResizeHot`, {
                        pct: String(vP)
                      })
                    },
                    children: [pM, " \u270e"]
                  }) : pM, " \xb7 ", aM(UM ? null !== (iM = null === eM || void 0 === eM ? void 0 : eM.label) && void 0 !== iM ? iM : `${MH}rxState_running` : `${MH}rxSubPlanShort`)]
                })]
              })]
            }), (0, Gj.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [PM && !GM && (0, Gj.jsx)(zm, {
                kind: "reactor",
                busy: PM.busy.has("apart"),
                whyNot: tM ? () => {
                  mM(tM.key, tM.params)
                } : null,
                apart: () => {
                  SM.tap("apart", (() => {
                    SM.send("apart")
                  }))
                }
              }), (0, Gj.jsx)(la.l, {
                onClick: jM
              })]
            })]
          }), PM && bM && (0, Gj.jsxs)("div", {
            className: "Baf2RxBody",
            children: [UM ? (0, Gj.jsx)(Vm, {
              view: PM,
              explain: mM,
              preview: Um(PM.status)
            }) : (0, Gj.jsx)(cm, {
              view: PM,
              explain: mM
            }), (0, Gj.jsx)(cL, {
              text: wM ? `${bm(aM,bM)} ${aM(`${MH}rxTapHint`)}` : bm(aM, bM),
              tone: bM.tone,
              explained: nM
            }), GM ? (0, Gj.jsxs)(Gj.Fragment, {
              children: [(0, Gj.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: aM(`${MH}rxNotYours`)
              }), (0, Gj.jsx)(jm, {
                status: PM.status,
                store: SM,
                readOnly: !0
              })]
            }) : UM && !dM ? (0, Gj.jsxs)(Gj.Fragment, {
              children: [(0, Gj.jsx)(km, {
                view: PM,
                store: SM,
                explain: mM,
                explainOnce: HM
              }), void 0 !== PM.status.baf2RxLayout && im(PM.status) && (0, Gj.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, Gj.jsx)(jm, {
                  status: PM.status,
                  store: SM,
                  readOnly: !1,
                  bare: !0
                }), (0, Gj.jsx)(Sm, {
                  status: PM.status,
                  store: SM,
                  busy: PM.busy.has("fill")
                })]
              })]
            }) : (0, Gj.jsxs)(Gj.Fragment, {
              children: [(0, Gj.jsx)(Zm, {
                view: PM,
                store: SM,
                keepSize: UM ? () => {
                  yM(!1)
                } : void 0
              }), yn(PM.dims, PM.status.baf2RxDims) && (0, Gj.jsx)(om, {
                need: PM.status.baf2RxNeed,
                explain: mM
              }), (0, Gj.jsx)(jm, {
                status: PM.status,
                store: SM,
                readOnly: !1
              })]
            }), hM && (0, Gj.jsx)(nm, {
              id: "baf2ResizeTitle",
              title: `${MH}rxResizeConfirmTitle`,
              body: `${MH}rxResizeConfirmBody`,
              yes: `${MH}rxChangeSize`,
              cancel: () => {
                JM(!1)
              },
              confirm: () => {
                JM(!1), yM(!0)
              }
            })]
          })]
        })
      })
    }
    class SH {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(MM) {
        this.view = MM;
        for (const rM of this.listeners) rM()
      }
      get() {
        return this.view
      }
      subscribe(MM) {
        return this.listeners.add(MM), () => {
          this.listeners.delete(MM)
        }
      }
    }

    function jH(MM) {
      let {
        commands: rM,
        store: iM,
        power: SM,
        water: jM,
        reactor: aM,
        battery: PM,
        collider: nM,
        terminal: QM,
        quests: zM,
        tutorial: LM,
        close: mM,
        leave: HM,
        askIslands: hM,
        showCore: JM,
        openSocial: dM
      } = MM;
      const {
        userContext: yM
      } = (0, RP.b)(), lM = uP.featureFlags.useSocialFeatures && yM.isLoggedIn(), [EM, UM] = (0, OM.useState)((() => iM.get()));
      (0, OM.useEffect)((() => iM.subscribe((() => {
        UM(iM.get())
      }))), [iM]);
      const GM = "islands" === (null === EM || void 0 === EM ? void 0 : EM.kind) ? EM.backToCore : void 0;
      return (0, Gj.jsxs)(Za.Provider, {
        value: rM,
        children: ["core" === (null === EM || void 0 === EM ? void 0 : EM.kind) && (0, Gj.jsx)(hL, {
          view: EM.core,
          close: mM,
          askIslands: hM
        }), "dropMap" === (null === EM || void 0 === EM ? void 0 : EM.kind) && (0, Gj.jsx)(lL, {
          message: EM.dropMap,
          quests: zM,
          close: mM,
          leave: HM
        }), "islands" === (null === EM || void 0 === EM ? void 0 : EM.kind) && (0, Gj.jsx)(ZL, {
          message: EM.islands,
          arrivedAtMs: EM.arrivedAtMs,
          close: GM ? () => {
            JM(GM)
          } : mM,
          leave: HM,
          openSocial: lM ? dM : null
        }), "quests" === (null === EM || void 0 === EM ? void 0 : EM.kind) && (0, Gj.jsx)(sz, {
          store: zM,
          tutorial: LM,
          close: mM
        }), "transfer" === (null === EM || void 0 === EM ? void 0 : EM.kind) && (0, Gj.jsx)(rz, {
          message: EM.transfer,
          arrivedAtMs: EM.arrivedAtMs,
          close: mM,
          leave: HM
        }), "power" === (null === EM || void 0 === EM ? void 0 : EM.kind) && (0, Gj.jsx)(ta, {
          store: SM,
          close: mM
        }), "water" === (null === EM || void 0 === EM ? void 0 : EM.kind) && (0, Gj.jsx)(LP, {
          store: jM,
          close: mM
        }), "reactor" === (null === EM || void 0 === EM ? void 0 : EM.kind) && (0, Gj.jsx)(OH, {
          store: aM,
          close: mM
        }), "battery" === (null === EM || void 0 === EM ? void 0 : EM.kind) && (0, Gj.jsx)(Ym, {
          store: PM,
          close: mM
        }), "collider" === (null === EM || void 0 === EM ? void 0 : EM.kind) && (0, Gj.jsx)(JQ, {
          store: nM,
          close: mM
        }), "terminal" === (null === EM || void 0 === EM ? void 0 : EM.kind) && (0, Gj.jsx)(IL, {
          store: QM,
          close: mM,
          send: MM => {
            rM.send(MM)
          }
        })]
      })
    }
    var aH = iM(39491);

    function PH(MM, rM) {
      return MM.distSq - rM.distSq
    }
    class nH {
      constructor() {
        this.list = [], this.pool = []
      }
      add(MM, rM, iM, OM) {
        let SM = this.pool[this.list.length];
        SM || (SM = {
          x: 0,
          y: 0,
          distSq: 0,
          element: rM,
          liftRem: iM,
          dot: OM
        }, this.pool.push(SM)), SM.x = MM.x, SM.y = MM.y, SM.distSq = MM.distSq, SM.element = rM, SM.liftRem = iM, SM.dot = OM, this.list.push(SM)
      }
    }
    class QH {
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = MM, this.sizes = new WeakMap, this.observer = new ResizeObserver((MM => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const rM of MM) {
            const MM = rM.borderBoxSize[0];
            "dot" !== rM.target.dataset.crowded && 0 !== MM.inlineSize && 0 !== MM.blockSize && this.sizes.set(rM.target, {
              width: MM.inlineSize,
              height: MM.blockSize
            })
          }
        })), this.remPx = 16, this.ML = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.pE = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.pE)
      }
      observe(MM) {
        this.observer.observe(MM)
      }
      unobserve(MM) {
        this.observer.unobserve(MM)
      }
      run(MM) {
        const rM = MM.list;
        rM.sort(PH);
        const iM = this.pxPerVw,
          OM = this.pxPerVh;
        this.ML.length = 0, this.hud && this.ML.push(...this.hud.boxes(performance.now()));
        for (const jM of rM) {
          var SM;
          const MM = this.sizes.get(jM.element);
          let rM = "no";
          if (MM && MM.width > 0) {
            const SM = jM.x * iM,
              aM = jM.y * OM - jM.liftRem * this.remPx;
            this.fit(SM, aM, MM.width, MM.height) || (rM = jM.dot && this.fit(SM, aM, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (SM = jM.element.dataset.crowded) && void 0 !== SM ? SM : "no") !== rM && ("no" === rM ? delete jM.element.dataset.crowded : jM.element.dataset.crowded = rM), "hidden" !== rM && (0, aH.b)(jM.element, jM.x, jM.y)
        }
        rM.length = 0
      }
      fit(MM, rM, iM, OM) {
        const SM = MM - iM / 2,
          jM = MM + iM / 2,
          aM = rM - OM,
          PM = this.ML;
        for (let nM = 0; nM < PM.length; nM += 4)
          if (SM < PM[nM + 1] - 2 && jM > PM[nM] + 2 && aM < PM[nM + 3] - 2 && rM > PM[nM + 2] + 2) return !1;
        return PM.push(SM, jM, aM, rM), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.pE)
      }
    }
    const zH = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class LH {
      constructor() {
        this.cards = zH.map((MM => document.getElementsByClassName(MM))), this.watched = zH.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(MM) {
        MM - this.refreshedAt > 1e3 && (this.refreshedAt = MM, this.stale = !0);
        for (let iM = 0; iM < this.cards.length; iM++) {
          var rM;
          const MM = null !== (rM = this.cards[iM][0]) && void 0 !== rM ? rM : null;
          MM !== this.watched[iM] && this.watch(iM, MM)
        }
        return this.stale && (this.stale = !1, this.measure()), this.list
      }
      dispose() {
        for (let MM = 0; MM < this.watched.length; MM++) this.watch(MM, null);
        this.sizes.disconnect(), window.removeEventListener("resize", this.onChange)
      }
      measure() {
        const MM = this.list;
        MM.length = 0;
        for (const rM of this.watched) {
          if (!rM || rM.closest(".NoRoom")) continue;
          const iM = rM.getBoundingClientRect();
          let OM = iM.top,
            SM = iM.bottom;
          if (rM === this.watched[0] && this.hud) {
            const MM = this.hud.getBoundingClientRect();
            OM = Math.max(OM, MM.top), SM = Math.min(SM, MM.bottom)
          }
          iM.width > 0 && SM > OM && MM.push(iM.left, iM.right, OM, SM)
        }
      }
      watch(MM, rM) {
        const iM = this.watched[MM];
        var OM, SM;
        (iM && this.sizes.unobserve(iM), this.watched[MM] = rM, this.stale = !0, rM && this.sizes.observe(rM), 0 === MM) && (null === (OM = this.hud) || void 0 === OM || OM.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (SM = null === rM || void 0 === rM ? void 0 : rM.closest(".Baf2QuestHud")) && void 0 !== SM ? SM : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    var mH = iM(39499);
    class HH {
      constructor(MM) {
        this.onElement = MM, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(MM) {
        const rM = [];
        for (let iM = 0; iM + 4 < MM.length; iM += 5) {
          const OM = [MM[iM], MM[iM + 1], MM[iM + 2]];
          rM.push({
            key: OM.join(","),
            pos: OM,
            status: OS[MM[iM + 3]],
            kind: gr[MM[iM + 4]]
          })
        }
        this.markers = rM, this.keys = new Set(rM.map((MM => {
          let {
            key: rM
          } = MM;
          return rM
        }))), this.notify()
      }
      covers(MM) {
        return this.keys.has(MM)
      }
      get() {
        return this.markers
      }
      subscribe(MM) {
        return this.listeners.add(MM), () => {
          this.listeners.delete(MM)
        }
      }
      bind(MM) {
        let rM = this.refs.get(MM);
        return rM || (rM = rM => {
          const iM = this.elements.get(MM);
          var OM, SM;
          iM && (null === (OM = this.onElement) || void 0 === OM || OM.call(this, iM, !1));
          rM ? (this.elements.set(MM, rM), null === (SM = this.onElement) || void 0 === SM || SM.call(this, rM, !0)) : (this.elements.delete(MM), this.refs.delete(MM))
        }, this.refs.set(MM, rM)), rM
      }
      onAfterRender(MM, rM, iM) {
        for (const OM of this.markers) {
          const SM = this.elements.get(OM.key);
          if (!SM) continue;
          const jM = (0, mH.e)(SM, MM, rM, OM.pos, 1.05, 24);
          jM && iM.add(jM, SM, .45, !0)
        }
      }
      notify() {
        for (const MM of this.listeners) MM()
      }
    }
    const hH = {
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
    const JH = (0, OM.memo)((function(MM) {
        let {
          status: rM,
          kind: iM,
          bindRef: OM
        } = MM;
        const {
          t: SM
        } = (0, tS.A)(), jM = function(MM, rM) {
          var iM;
          if ("noFuel" === MM) {
            var OM, SM;
            const MM = null === (OM = Dr[rM]) || void 0 === OM || null === (SM = OM.fuels) || void 0 === SM ? void 0 : SM.find((MM => Oi.includes(MM)));
            return null !== MM && void 0 !== MM ? MM : hH.noFuel
          }
          return void 0 !== (null === (iM = Dr[rM]) || void 0 === iM ? void 0 : iM.cryoMade) ? "noOutlet" === MM ? "Fluid Pipe" : "noInput" === MM ? "Biomass" : hH[MM] : hH[MM]
        }(rM, iM);
        return (0, Gj.jsxs)("div", {
          className: CS()("Baf2StallMarker", rM),
          ref: OM,
          hidden: !0,
          children: [jM && (0, Gj.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, Gj.jsx)(uS.b, {
              itemName: jM,
              amount: 0
            })
          }), (0, Gj.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === rM ? "?" : "!"
          }), (0, Gj.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: SM(`buildAFactory2Game:stallTag_${rM}`)
          })]
        })
      })),
      dH = (0, OM.memo)((function(MM) {
        let {
          controller: rM
        } = MM;
        const [iM, SM] = (0, OM.useState)((() => rM.get()));
        return (0, OM.useEffect)((() => (SM(rM.get()), rM.subscribe((() => {
          SM(rM.get())
        })))), [rM]), (0, Gj.jsx)("div", {
          className: "Baf2StallMarkers",
          children: iM.map((MM => (0, Gj.jsx)(JH, {
            status: MM.status,
            kind: MM.kind,
            bindRef: rM.bind(MM.key)
          }, MM.key)))
        })
      })),
      yH = di.i + 150;
    class lH {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(MM, rM) {
        const iM = rM - MM;
        null === this.offset || iM < this.offset ? this.offset = iM : this.offset = Math.min(iM, this.offset + .02 * (rM - this.sampledAt)), this.sampledAt = rM
      }
      toLocal(MM) {
        var rM;
        return MM + (null !== (rM = this.offset) && void 0 !== rM ? rM : 0) + yH
      }
    }
    var EH = iM(39505);
    const UH = 15 * Math.PI / 180,
      GH = Math.SQRT2,
      CH = [4, 2];

    function eH(MM, rM) {
      const iM = [1 / 0, 1 / 0, 1 / 0],
        OM = [-1 / 0, -1 / 0, -1 / 0];
      for (const nM of MM)
        for (let MM = 0; MM < 3; MM++) iM[MM] = Math.min(iM[MM], nM[MM]), OM[MM] = Math.max(OM[MM], nM[MM]);
      const SM = (iM[0] + OM[0]) / 2,
        jM = (iM[1] + OM[1]) / 2,
        aM = (iM[2] + OM[2]) / 2;
      let PM = 0;
      for (const nM of MM) PM = Math.max(PM, Math.hypot(nM[0] - SM, nM[1] - jM, nM[2] - aM));
      return {
        x: SM,
        y: jM,
        z: aM,
        r: PM + rM
      }
    }

    function bH(MM, rM, iM) {
      const OM = rM.x - MM.x,
        SM = rM.y - MM.y,
        jM = rM.z - MM.z,
        aM = Math.sqrt(OM * OM + SM * SM + jM * jM);
      if (aM <= rM.r + 8) return 1;
      const PM = rM.r / aM,
        nM = Math.sqrt(1 - PM * PM),
        QM = nM < -MM.cosHalf,
        zM = (OM * MM.dx + SM * MM.dy + jM * MM.dz) / aM;
      if (!QM && zM < MM.cosHalf * nM - MM.sinHalf * PM) return 0;
      const LM = iM * GH * MM.frameMs * MM.pxPerBlock / (aM - rM.r);
      for (let mM = 0; mM < CH.length; mM++)
        if (LM * CH[mM] <= 1) return CH[mM];
      return 1
    }

    function wH(MM, rM) {
      return {
        name: MM,
        at: rM,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const tH = [0, 0, 0];

    function gH(MM, rM, iM) {
      let [, OM, SM, jM, aM, PM] = rM;
      const nM = di.e * (null !== aM && void 0 !== aM ? aM : 1),
        QM = [];
      for (let HM = 0; HM < OM.length; HM += 3) QM.push([OM[HM] + .5, OM[HM + 1] + .65, OM[HM + 2] + .5]);
      const zM = [];
      for (let HM = 0; HM < QM.length - 1; HM++) {
        const [MM, rM] = [QM[HM], QM[HM + 1]];
        zM.push([(MM[0] + rM[0]) / 2, (MM[1] + rM[1]) / 2, (MM[2] + rM[2]) / 2])
      }
      const LM = QM.slice(1, -1),
        mM = new Uint8Array(LM.length);
      for (const HM of null !== PM && void 0 !== PM ? PM : []) mM[HM >> 1] |= 1 & HM ? 2 : 1;
      return {
        island: MM,
        length: LM.length,
        loop: jM,
        cellsPerMs: nM,
        edges: zM,
        Sd: LM,
        bounds: eH([...zM, ...LM], .3),
        changed: !0,
        culled: !1,
        hide: mM,
        items: SM.map((MM => {
          let [rM, OM] = MM;
          return wH(rM, (0, di.C)(rM, OM, iM, nM).at)
        }))
      }
    }

    function uH(MM, rM) {
      const {
        items: iM
      } = MM;
      if (0 === iM.length) return;
      const OM = MM.length / MM.cellsPerMs,
        SM = Math.floor((rM - iM[0].at) / OM) - 1;
      if (SM > 0)
        for (const jM of iM) jM.at += SM * OM
    }

    function RH(MM, rM) {
      const iM = Math.min(Math.floor(rM), MM.length - 1),
        OM = MM.hide[iM];
      return 0 !== OM && 0 !== (OM & (rM - iM < .5 ? 1 : 2))
    }

    function pH(MM, rM) {
      const iM = Math.min(Math.floor(rM), MM.length - 1),
        OM = rM - iM,
        SM = OM < .5,
        jM = SM ? MM.edges[iM] : MM.Sd[iM],
        aM = SM ? MM.Sd[iM] : MM.edges[iM + 1],
        PM = SM ? 2 * OM : 2 * OM - 1;
      tH[0] = jM[0] + (aM[0] - jM[0]) * PM, tH[1] = jM[1] + (aM[1] - jM[1]) * PM, tH[2] = jM[2] + (aM[2] - jM[2]) * PM
    }
    const WH = Math.PI / 4;
    class sH {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new lH, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.pE = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(MM) {
        const rM = performance.now();
        this.clock.sample(MM.baf2BeltLinesAt, rM), this.queue(MM.baf2BeltLinesAt, MM, 0, null, null, 0), this.applyDue(rM)
      }
      onMoves(MM) {
        const rM = performance.now(),
          iM = MM.baf2BeltMovesAt;
        this.clock.sample(iM, rM);
        for (const [OM, SM, jM, aM] of MM.baf2BeltMoveList) null === SM ? this.queue(iM - jM, null, OM, null, null, null !== aM && void 0 !== aM ? aM : 0) : this.queue(iM - jM, null, OM, SM, null !== aM && void 0 !== aM ? aM : null, 0);
        this.applyDue(rM)
      }
      start(MM) {
        this.pool = new EH.e(MM, {
          scale: .3,
          yaw: WH
        }, 64), this.pE(), window.addEventListener("resize", this.pE)
      }
      onAfterRender(MM) {
        const {
          pool: rM
        } = this;
        if (!rM) return;
        const iM = performance.now(),
          OM = iM - this.lastRenderAt;
        this.lastRenderAt = iM, OM < 100 && (this.frameMs += .1 * (OM - this.frameMs));
        const SM = iM + this.frameMs;
        this.applyDue(SM);
        const jM = MM.cameraPosition,
          aM = rM.follow(jM);
        this.setView(MM, jM);
        const PM = this.frame++;
        for (let nM = 0; nM < this.shown.length; nM++) {
          const MM = this.shown[nM],
            iM = bH(this.view, MM.bounds, MM.cellsPerMs),
            OM = MM.culled && 0 !== iM;
          if (MM.culled = 0 === iM, !aM && !MM.changed && !OM && (0 === iM || (PM + nM) % iM !== 0)) continue;
          MM.changed = !1, MM.loop && (uH(MM, SM), (0, di.u)(MM.items, MM.length, SM, MM.cellsPerMs));
          let jM = MM.length;
          for (let PM = 0; PM < MM.items.length; PM++) {
            const iM = MM.items[PM],
              OM = (0, di.E)(iM.at, jM, SM, MM.cellsPerMs);
            if (jM = OM - di.l, RH(MM, OM)) {
              null === iM.kind || iM.hidden || (iM.kind.hide(iM.slot), iM.hidden = !0);
              continue
            }
            let nM = iM.kind;
            if (null === nM) {
              if (nM = rM.kindOf(iM.name), null === nM) continue;
              iM.kind = nM, iM.slot = nM.take(), iM.hidden = !0, iM.drawn = NaN
            } else if (OM === iM.drawn && !iM.hidden && !aM) continue;
            pH(MM, OM), nM.write(iM.slot, tH[0], tH[1], tH[2]), iM.hidden = !1, iM.drawn = OM
          }
        }
        rM.commit()
      }
      dispose() {
        var MM;
        window.removeEventListener("resize", this.pE), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (MM = this.pool) || void 0 === MM || MM.dispose(), this.pool = null
      }
      setView(MM, rM) {
        const {
          cameraDir: iM,
          lastDir: OM
        } = this, SM = MM.cameraDirection;
        for (let zM = 0; zM < 3; zM++) OM[zM] = iM[zM], iM[zM] = SM[zM];
        const jM = iM[0] * OM[0] + iM[1] * OM[1] + iM[2] * OM[2],
          aM = Number.isNaN(jM) ? 0 : Math.acos(Math.min(1, Math.max(-1, jM))),
          {
            width: PM,
            height: nM
          } = this,
          QM = MM.tanHalfFovX;
        ! function(MM, rM, iM, OM, SM, jM, aM) {
          let PM = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          MM.x = rM[0], MM.y = rM[1], MM.z = rM[2], MM.dx = iM[0], MM.dy = iM[1], MM.dz = iM[2];
          const nM = Math.min(Math.PI, Math.atan(Math.sqrt(OM * OM + SM * SM)) + UH + PM);
          MM.cosHalf = Math.cos(nM), MM.sinHalf = Math.sin(nM), MM.pxPerBlock = jM / (2 * SM), MM.frameMs = aM
        }(this.view, rM, iM, QM, QM * nM / PM, nM * window.devicePixelRatio, this.frameMs, aM)
      }
      queue(MM, rM, iM, OM, SM, jM) {
        const aM = Math.max(this.clock.toLocal(MM), this.lastPendingAt);
        this.lastPendingAt = aM, this.pending.push({
          at: aM,
          lines: rM,
          line: iM,
          name: OM,
          pos: SM,
          idx: jM
        })
      }
      applyDue(MM) {
        const {
          pending: rM
        } = this;
        for (; this.pendingHead < rM.length && rM[this.pendingHead].at <= MM;) {
          const MM = rM[this.pendingHead++];
          if (MM.lines) this.applyLines(MM.lines, MM.at), MM.lines = null;
          else {
            const rM = this.lines.get(MM.line);
            rM && this.applyMove(rM, MM, MM.at)
          }
        }
        this.pendingHead === rM.length ? (rM.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > rM.length && (rM.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(MM, rM) {
        this.clearIsland(MM.baf2BeltIsland);
        for (const iM of MM.baf2BeltLineList) this.lines.set(iM[0], gH(MM.baf2BeltIsland, iM, rM));
        this.shown = [...this.lines.values()]
      }
      applyMove(MM, rM, iM) {
        let {
          name: OM,
          pos: SM,
          idx: jM
        } = rM;
        MM.changed = !0, MM.loop && (uH(MM, iM), (0, di.u)(MM.items, MM.length, iM, MM.cellsPerMs)), null !== OM && null !== SM ? (0, di.y)(MM.items, MM.length, wH(OM, iM), SM, iM, MM.cellsPerMs) : null !== OM ? MM.items.push(wH(OM, iM)) : MM.items.length > jM && this.release((0, di.I)(MM.items, MM.length, iM, MM.cellsPerMs, jM))
      }
      clearIsland(MM) {
        for (const [rM, iM] of this.lines)
          if (iM.island === MM) {
            for (const MM of iM.items) this.release(MM);
            this.lines.delete(rM)
          }
      }
      release(MM) {
        null !== MM.kind && (MM.kind.release(MM.slot), MM.kind = null, MM.slot = -1, MM.hidden = !0, MM.drawn = NaN)
      }
    }
    var DH = iM(37538),
      kH = iM(39509);

    function ZH(MM) {
      let {
        depth: rM,
        store: iM,
        t: SM
      } = MM;
      const jM = function(MM) {
        const [rM, iM] = (0, OM.useState)(MM.lastPlayerY());
        return (0, iz.d)(ZS, iM), (0, OM.useEffect)((() => {
          iM(MM.lastPlayerY())
        }), [MM]), rM
      }(iM);
      if (null === jM) return null;
      const [aM, PM] = rM, nM = jM > aM ? aM : null !== PM && jM < PM ? PM : null, QM = {
        y: dj(jM),
        target: null === nM ? "" : dj(nM)
      };
      return (0, Gj.jsx)("span", {
        className: CS()("Baf2QuestDepth", {
          Reached: null === nM
        }),
        children: SM(`${az}${null===nM?"questDepthReached":"questDepth"}`, QM)
      })
    }

    function oH(MM) {
      let {
        also: rM,
        view: iM,
        t: OM
      } = MM;
      return (0, Gj.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, Gj.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, Gj.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, Gj.jsx)("strong", {
            children: OM(`${az}questAlsoDownHere`)
          }), (0, Gj.jsx)("span", {
            className: "Baf2QuestChips",
            children: rM.map((MM => {
              let [rM, SM, jM, aM] = MM;
              return (0, Gj.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": OM(`${az}questAlsoItem`, {
                  item: nz(OM, iM.itemNames[rM], rM),
                  have: String(SM),
                  need: String(jM)
                }),
                children: [(0, Gj.jsx)(Lz, {
                  item: rM
                }), (0, Gj.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${SM}/${jM}`
                }), null !== aM && (0, Gj.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: OM(`${az}questAlsoDepth`, {
                    y: dj(aM)
                  })
                })]
              }, rM)
            }))
          })]
        })]
      })
    }
    var fH = iM(3815);

    function YH(MM) {
      let {
        expanded: rM,
        inventoryOpen: iM,
        children: SM
      } = MM;
      const jM = (0, OM.useRef)(null);
      return (0, OM.useEffect)((() => {
        const MM = jM.current,
          rM = null === MM || void 0 === MM ? void 0 : MM.closest(".RightElements"),
          OM = null === MM || void 0 === MM ? void 0 : MM.firstElementChild;
        if (!MM || !rM || !OM) return;
        return (0, kH.b)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [rM, OM], (() => {
          const SM = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === SM.length) return;
          const jM = Math.max(...SM.map((MM => MM.getBoundingClientRect().bottom))),
            aM = rM.getBoundingClientRect(),
            PM = iM ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (PM) {
            const rM = parseFloat(getComputedStyle(OM).marginLeft) + parseFloat(getComputedStyle(OM).marginRight),
              iM = aM.right - PM.getBoundingClientRect().right - 8 - rM;
            MM.style.setProperty("--baf2-quest-room", `${iM}px`), MM.classList.toggle("NoRoom", iM < 150)
          } else MM.style.removeProperty("--baf2-quest-room"), MM.classList.remove("NoRoom");
          const nM = jM - aM.top + 8,
            QM = function(MM, rM, iM) {
              const OM = rM.getBoundingClientRect(),
                SM = MM.getBoundingClientRect(),
                jM = (0, fH.i)(SM.left, SM.right, OM.top + iM);
              if (null !== jM && jM < OM.bottom) return jM - OM.top;
              return OM.height - (parseFloat(getComputedStyle(rM).paddingBottom) || 0)
            }(MM, rM, nM) - 8,
            zM = window.innerHeight / 2 - aM.top,
            {
              top: LM,
              maxHeight: mM
            } = function(MM, rM, iM, OM, SM) {
              const jM = Math.min(iM, Math.max(0, rM - MM)),
                aM = SM ? MM : Math.max(MM, Math.min(OM - jM / 2, rM - jM));
              return {
                top: aM,
                maxHeight: Math.max(0, rM - aM)
              }
            }(nM, QM, function(MM) {
              const rM = MM.firstElementChild,
                iM = rM ? rM.scrollHeight - rM.clientHeight : 0;
              return MM.getBoundingClientRect().height + Math.max(0, iM)
            }(OM), zM, Uj());
          MM.style.top = `${LM}px`, MM.style.maxHeight = `${mM}px`
        }))
      }), [iM]), (0, Gj.jsx)("div", {
        ref: jM,
        className: CS()("Baf2QuestHud", {
          Expanded: rM
        }),
        children: SM
      })
    }

    function NH(MM) {
      let {
        amount: rM,
        t: iM
      } = MM;
      return (0, Gj.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, Gj.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, Gj.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: iM(`${az}questStepsDone`, {
            amount: String(rM)
          })
        })]
      })
    }

    function AH(MM) {
      let {
        pulse: rM
      } = MM;
      return 0 === rM ? null : (0, Gj.jsx)("span", {
        className: "Baf2QuestTrackerPulse",
        "aria-hidden": "true"
      }, rM)
    }

    function xH(MM) {
      var rM;
      let {
        store: iM
      } = MM;
      const SM = (0, iz.e)(kS, iM.get()),
        [jM, aM] = (0, OM.useState)(!1),
        {
          t: PM
        } = (0, tS.A)(),
        nM = (0, lj.e)(Ej),
        {
          openInGameMenuName: QM,
          openEverythingMenuName: zM
        } = (0, ES.m)(["openInGameMenuName", "openEverythingMenuName"]),
        LM = "inventory" === QM && null === zM,
        mM = null !== QM && !LM || null !== zM;
      if (! function(MM) {
          return null !== MM.name || null !== MM.side
        }(SM) || mM || "off" === SM.tutorial) return null;
      const HM = xS(SM.rows),
        hM = HM.filter((MM => MM.done)).length,
        JM = function(MM, rM) {
          const iM = BS(MM);
          let OM = 0;
          return MM.filter(((MM, SM) => !!MM.justFinished || !(MM.done || SM < iM || OM > rM) && (OM++, !0)))
        }(SM.rows, nM ? 0 : 2),
        dM = nM ? JM : function(MM, rM) {
          const iM = rM.filter((MM => !MM.justFinished));
          if (iM.length < 2) return [...rM];
          const OM = MM.indexOf(iM[0]),
            SM = MM.indexOf(iM[iM.length - 1]),
            jM = new Set(xS(MM));
          return MM.filter(((MM, iM) => rM.includes(MM) || MM.done && jM.has(MM) && iM > OM && iM < SM))
        }(SM.rows, JM),
        yM = jM ? SM.rows : dM,
        lM = jM || nM ? [] : function(MM, rM) {
          const iM = new Array(rM.length + 1).fill(0),
            OM = new Set(xS(MM));
          let SM = 0;
          for (const jM of MM) SM < rM.length && jM === rM[SM] ? SM++ : jM.done && OM.has(jM) && iM[SM]++;
          return iM
        }(SM.rows, dM),
        EM = jM || dM.length < SM.rows.length || null !== SM.reward,
        UM = AS(SM),
        GM = UM ? PM(`${az}questLineComplete`) : SM.tier ? hz(PM, SM.tier) : PM(`${az}currentQuest`),
        CM = function(MM) {
          var rM, iM;
          if (AS(MM)) return null;
          const OM = null === (rM = MM.chapters) || void 0 === rM ? void 0 : rM.find((rM => {
            let [iM] = rM;
            return iM === MM.tier
          }));
          if (!OM) return null;
          const SM = OM[1].filter((MM => !MM[4]));
          if (0 === SM.length) return null;
          const jM = null === (iM = MM.name) || void 0 === iM ? void 0 : iM[0],
            aM = MM => SM.findIndex((rM => rM[0] === jM && (!MM || !rM[3]))),
            PM = aM(!0),
            nM = PM >= 0 ? PM : aM(!1);
          if (nM >= 0) return [nM + 1, SM.length];
          const QM = SM.filter((MM => MM[3])).length;
          return [Math.min(QM + 1, SM.length), SM.length]
        }(SM);
      return (0, Gj.jsx)(DH.i, {
        placement: "topRight",
        children: (0, Gj.jsx)(YH, {
          expanded: jM,
          inventoryOpen: LM,
          children: (0, Gj.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: Pz,
            children: [null !== SM.name && (0, Gj.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [(0, Gj.jsx)(AH, {
                pulse: SM.pulse
              }), (0, Gj.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, Gj.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [GM, CM && (0, Gj.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": PM(`${az}questPlaceLabel`, {
                      n: String(CM[0]),
                      total: String(CM[1])
                    }),
                    children: PM(`${az}questPlace`, {
                      n: String(CM[0]),
                      total: String(CM[1])
                    })
                  }), SM.tier && SM.core && !UM && (0, Gj.jsx)(Jz, {
                    core: SM.core,
                    t: PM
                  })]
                })
              }), (0, Gj.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: PM(`${az}${SM.name[0]}`, Qz(SM.name[1]))
              }), (HM.length > 1 || EM) && (0, Gj.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [HM.length > 1 && (0, Gj.jsx)(dz, {
                  rows: HM,
                  t: PM
                }), EM && (0, Gj.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": jM,
                  onClick: () => {
                    aM(!jM)
                  },
                  children: [(0, Gj.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: PM(`${az}questStepsToggle`, {
                      done: String(hM),
                      total: String(HM.length)
                    })
                  }), (0, Gj.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: jM ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, Gj.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [yM.map(((MM, rM) => {
                  var jM;
                  const aM = MM.current && SM.depth;
                  return (0, Gj.jsxs)(OM.Fragment, {
                    children: [(null !== (jM = lM[rM]) && void 0 !== jM ? jM : 0) > 0 && (0, Gj.jsx)(NH, {
                      amount: lM[rM],
                      t: PM
                    }), (0, Gj.jsx)(yz, {
                      row: MM,
                      view: SM,
                      t: PM,
                      extra: aM && (0, Gj.jsx)(ZH, {
                        depth: aM,
                        store: iM,
                        t: PM
                      })
                    })]
                  }, MM.id)
                })), (null !== (rM = lM[yM.length]) && void 0 !== rM ? rM : 0) > 0 && (0, Gj.jsx)(NH, {
                  amount: lM[yM.length],
                  t: PM
                }), SM.also.length > 0 && (0, Gj.jsx)(oH, {
                  also: SM.also,
                  view: SM,
                  t: PM
                })]
              }), jM && SM.reward && (0, Gj.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [PM(`${az}questReward`), (0, Gj.jsx)(Lz, {
                  item: SM.reward
                }), nz(PM, SM.itemNames[SM.reward], SM.reward)]
              })]
            }), SM.side && (0, Gj.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [YS(SM, Date.now()) && (0, Gj.jsx)(AH, {
                pulse: SM.sideCameUpAt
              }), (0, Gj.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: PM(`${az}questSide`)
              }), (0, Gj.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: PM(`${az}${SM.side.name[0]}`, Qz(SM.side.name[1]))
              }), (0, Gj.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, Gj.jsx)(yz, {
                  row: SM.side.row,
                  view: SM,
                  t: PM
                })
              })]
            })]
          })
        })
      })
    }
    const vH = "baf2ToastView";
    class FH {
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = MM, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: MM,
          holdMs: rM
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const MM = this.dropCovered();
          MM && this.show(MM.message, MM.holdMs)
        }), 250));
        const iM = this.dropCovered();
        null !== iM && (iM.holdMs > 0 || "baf2ToastCelebrate" === iM.message.baf2ToastStyle) && "baf2ToastCelebrate" !== MM.baf2ToastStyle && this.show(iM.message, iM.holdMs);
        const OM = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== MM.baf2ToastStyle && OM > 0) return this.pending = {
          message: MM,
          holdMs: rM
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const MM = this.pending;
          this.pending = null, MM && this.present(MM.message, MM.holdMs)
        }), OM));
        this.present(MM, rM)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(MM, rM) {
        this.clearTimers(), this.pending = null;
        const iM = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: MM.baf2ToastText,
          style: MM.baf2ToastStyle,
          swapped: iM,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === MM.baf2ToastStyle ? 1500 : rM), this.Tz();
        const OM = Math.min(8e3, Math.max(1e3, MM.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.leave()
        }), OM)
      }
      leave() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.Tz(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.Tz()
        }), 200))
      }
      clearTimers() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), null !== this.pendingTimer && (clearTimeout(this.pendingTimer), this.pendingTimer = null)
      }
      dropCovered() {
        null !== this.coveredTimer && (clearInterval(this.coveredTimer), this.coveredTimer = null);
        const MM = this.covering;
        return this.covering = null, MM
      }
      Tz() {
        sS.i.Tz(vH, this.view, !0)
      }
    }
    var BH = iM(65);
    const XH = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function IH(MM) {
      let {
        store: rM
      } = MM;
      const iM = (0, iz.e)(vH, rM.get()),
        {
          openInGameMenuName: OM,
          openEverythingMenuName: SM
        } = (0, ES.m)(["openInGameMenuName", "openEverythingMenuName"]),
        jM = iM && (0, Gj.jsxs)("div", {
          className: CS()("Baf2Toast", XH[iM.style], {
            Swapped: iM.swapped,
            Leaving: iM.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === iM.style && (0, Gj.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, Gj.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, Gj.jsx)(RS.b, {
              text: iM.text
            })
          })]
        }, iM.id);
      return null !== OM && null === SM ? (0, BH.createPortal)((0, Gj.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: jM
      }), document.body) : (0, Gj.jsx)(DH.i, {
        children: jM
      })
    }
    const KH = "baf2AreaView";
    class qH {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.sQ = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.sQ = null
      }
      arrive(MM, rM) {
        rM && function(MM) {
          return "home" === MM.baf2AreaPlace && void 0 !== MM.baf2AreaNameText
        }(MM) ? this.sQ = MM : this.show(MM)
      }
      release() {
        const MM = this.sQ;
        null !== MM && this.show(MM)
      }
      show(MM) {
        this.clearTimer(), this.sQ = null;
        const rM = void 0 === MM.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: MM,
          ms: rM
        }, this.Tz(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.Tz()
        }), rM)
      }
      dispose() {
        this.clearTimer(), this.sQ = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      Tz() {
        sS.i.Tz(KH, this.view, !0)
      }
    }

    function TH(MM) {
      var rM;
      let {
        store: iM
      } = MM;
      const {
        t: OM
      } = (0, tS.A)(), SM = (0, iz.e)(KH, iM.get());
      if (!SM) return null;
      const {
        area: jM
      } = SM, aM = jM.baf2AreaResetMinutes;
      return (0, Gj.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": jM.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${SM.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, Gj.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), jM.baf2AreaHeading && (0, Gj.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: OM(jM.baf2AreaHeading)
        }), (0, Gj.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (rM = jM.baf2AreaNameText) && void 0 !== rM ? rM : OM(jM.baf2AreaName)
        }), jM.baf2AreaNote && (0, Gj.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: OM(jM.baf2AreaNote)
        }), void 0 !== aM && (0, Gj.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: OM("buildAFactory2Game:areaWildsReset", {
            time: yj(OM, 60 * aM)
          })
        })]
      }, SM.id)
    }
    const VH = "baf2GearGauge";
    class cH {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      TE(MM) {
        var rM;
        if (this.clearLinger(), null === MM.gearPowerKind) return void this.set(null);
        const iM = "jetpack" === MM.gearPowerKind && (OM = MM.gearChargeState, SM = MM.gearCharge, "flying" === OM || "charging" === OM || "outOfCharge" === OM || "ceiling" === OM || "offPlot" === OM || "noPower" === OM && SM <= 0);
        var OM, SM;
        const jM = !0 === (null === (rM = this.view) || void 0 === rM ? void 0 : rM.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          aM = iM || "jetpack" === MM.gearPowerKind && jM;
        this.set({
          gauge: MM,
          jetShown: aM
        }), aM && !iM && (this.lingerTimer = setTimeout((() => {
          this.lingerTimer = null, this.view && this.set({
            ...this.view,
            jetShown: !1
          })
        }), 1500))
      }
      dispose() {
        this.clearLinger(), this.view = null
      }
      set(MM) {
        this.view = MM, sS.i.Tz(VH, MM, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const Mh = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function rh(MM) {
      let {
        store: rM
      } = MM;
      const iM = (0, iz.e)(VH, rM.get());
      return iM ? "jetpack" === iM.gauge.gearPowerKind ? (0, Gj.jsx)(ih, {
        view: iM
      }) : (0, Gj.jsx)(Oh, {
        gauge: iM.gauge
      }) : null
    }

    function ih(MM) {
      let {
        view: rM
      } = MM;
      const {
        t: iM
      } = (0, tS.A)(), {
        gauge: OM
      } = rM, SM = OM.gearChargeMax > 0 ? Math.max(0, Math.min(1, OM.gearCharge / OM.gearChargeMax)) : 0, jM = Mh[OM.gearChargeState], aM = jM ? iM(jM) : null;
      return (0, Gj.jsxs)("div", {
        className: CS()("Baf2JetArc", {
          Shown: rM.jetShown,
          Low: SM < .2,
          Warm: SM >= .2 && SM < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - SM)
        },
        "aria-hidden": !rM.jetShown,
        children: [(0, Gj.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, Gj.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: Sh,
            pathLength: 100
          }), (0, Gj.jsx)("path", {
            className: "Baf2JetArcFill",
            d: Sh,
            pathLength: 100
          })]
        }), (0, Gj.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * SM), "%"]
        }), aM && (0, Gj.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: aM
        })]
      })
    }

    function Oh(MM) {
      let {
        gauge: rM
      } = MM;
      const {
        t: iM
      } = (0, tS.A)(), OM = function(MM, rM) {
        switch (rM.gearPowerKind) {
          case "skyPack":
            return MM("buildAFactory2Game:gearSkyPack", {
              charge: rM.gearCharge,
              max: rM.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return MM("buildAFactory2Game:gearIslandDraw", {
              power: TM(rM.gearIslandPower),
              cost: TM(rM.gearCostPerUse)
            });
          case "barrier":
            return MM("buildAFactory2Game:gearBarrier", {
              shield: Math.round(rM.gearCharge),
              max: rM.gearChargeMax,
              power: TM(rM.gearIslandPower)
            });
          default:
            return null
        }
      }(iM, rM);
      return null === OM ? null : (0, Gj.jsx)(DH.i, {
        children: (0, Gj.jsx)("div", {
          className: CS()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === rM.gearChargeState || "outOfCharge" === rM.gearChargeState
          }),
          role: "status",
          children: OM
        })
      })
    }
    const Sh = (() => {
      const MM = MM => {
        const rM = MM * Math.PI / 180;
        return `${(40*Math.cos(rM)).toFixed(2)} ${(40*Math.sin(rM)).toFixed(2)}`
      };
      return `M ${MM(160)} A 40 40 0 1 1 ${MM(380)}`
    })();
    class jh {
      constructor(MM) {
        this.onElement = MM, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      TE(MM) {
        let rM = MM.baf2LabelsReset || MM.baf2LabelsIsland !== this.island;
        rM && (this.labels.clear(), this.island = MM.baf2LabelsIsland);
        for (const [iM, OM, SM, jM, aM] of MM.baf2LabelsList) {
          const MM = `${iM},${OM},${SM}`,
            PM = this.labels.get(MM);
          null === jM ? rM = this.labels.delete(MM) || rM : PM && PM.item === jM && (PM.count === aM || PM.count >= 0 && aM >= 0) ? PM.count !== aM && (PM.count = aM, this.writeCount(MM, aM)) : (this.labels.set(MM, {
            key: MM,
            pos: [iM, OM, SM],
            item: jM,
            count: aM
          }), this.writeCount(MM, aM), rM = !0)
        }
        if (this.changes++, rM) {
          this.snapshot = [...this.labels.values()];
          for (const MM of this.listeners) MM()
        }
      }
      bindCount(MM) {
        const rM = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${MM}`;
        let iM = this.countRefs.get(rM);
        return iM || (iM = iM => {
          var OM, SM;
          iM ? (this.countElements.set(rM, iM), this.writeCount(MM, null !== (OM = null === (SM = this.labels.get(MM)) || void 0 === SM ? void 0 : SM.count) && void 0 !== OM ? OM : -1)) : (this.countElements.delete(rM), this.countRefs.delete(rM))
        }, this.countRefs.set(rM, iM)), iM
      }
      setCountWords(MM) {
        this.countWords = MM;
        for (const [rM, iM] of this.labels) this.writePart(`words|${rM}`, MM(iM.count), iM.count)
      }
      writeCount(MM, rM) {
        this.writePart(`bare|${MM}`, Jj(rM), rM), this.countElements.has(`words|${MM}`) && this.writePart(`words|${MM}`, this.countWords(rM), rM)
      }
      writePart(MM, rM, iM) {
        const OM = this.countElements.get(MM);
        if (!OM || iM < 0) return;
        const SM = OM.firstChild;
        SM && 3 === SM.nodeType && !SM.nextSibling ? SM.nodeValue !== rM && (SM.nodeValue = rM) : OM.textContent !== rM && (OM.textContent = rM)
      }
      list() {
        return this.snapshot
      }
      at(MM) {
        return this.labels.get(`${MM[0]},${MM[1]},${MM[2]}`)
      }
      version() {
        return this.changes
      }
      subscribe(MM) {
        return this.listeners.add(MM), () => {
          this.listeners.delete(MM)
        }
      }
      bind(MM) {
        let rM = this.refs.get(MM);
        return rM || (rM = rM => {
          const iM = this.elements.get(MM);
          var OM, SM;
          iM && (null === (OM = this.onElement) || void 0 === OM || OM.call(this, iM, !1));
          rM ? (this.elements.set(MM, rM), null === (SM = this.onElement) || void 0 === SM || SM.call(this, rM, !0)) : (this.elements.delete(MM), this.refs.delete(MM))
        }, this.refs.set(MM, rM)), rM
      }
      onAfterRender(MM, rM, iM, OM) {
        for (const SM of this.snapshot) {
          const jM = this.elements.get(SM.key);
          if (!jM) continue;
          if (OM(SM.key)) {
            (0, aH.e)(jM, !0);
            continue
          }
          const aM = (0, mH.e)(jM, MM, rM, SM.pos, 1.1, 24);
          aM && iM.add(aM, jM, 0, !1)
        }
      }
    }
    const ah = (0, OM.memo)((function(MM) {
        let {
          item: rM
        } = MM;
        return (0, Gj.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, Gj.jsx)(uS.b, {
            itemName: rM,
            amount: 0
          })
        })
      })),
      Ph = (0, OM.memo)((function(MM) {
        let {
          label: rM,
          bindRef: iM,
          countRef: OM,
          wordsRef: SM
        } = MM;
        return (0, Gj.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: iM,
          hidden: !0,
          children: [(0, Gj.jsx)(ah, {
            item: rM.item
          }), rM.count >= 0 && (0, Gj.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, Gj.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: SM
            }), (0, Gj.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: OM
            })]
          })]
        })
      })),
      nh = (0, OM.memo)((function(MM) {
        let {
          store: rM
        } = MM;
        const {
          t: iM
        } = (0, tS.A)(), [SM, jM] = (0, OM.useState)((() => rM.list()));
        return (0, OM.useEffect)((() => (jM(rM.list()), rM.subscribe((() => {
          jM(rM.list())
        })))), [rM]), (0, OM.useEffect)((() => {
          rM.setCountWords((MM => iM("buildAFactory2Game:labelSiloCount", {
            count: Jj(MM)
          })))
        }), [rM, iM]), (0, Gj.jsx)("div", {
          className: "Baf2IslandLabels",
          children: SM.map((MM => -2 === MM.count ? null : (0, Gj.jsx)(Ph, {
            label: MM,
            bindRef: rM.bind(MM.key),
            countRef: rM.bindCount(MM.key),
            wordsRef: rM.bindCount(MM.key, "words")
          }, MM.key)))
        })
      })),
      Qh = {
        read: () => !0,
        write: () => {}
      };

    function zh(MM) {
      return `${MM[0]},${MM[1]},${MM[2]}`
    }

    function Lh(MM) {
      let [rM, iM, OM, SM, jM, aM, PM, nM, QM, zM, LM, mM] = MM;
      const HM = void 0 === LM || void 0 === mM ? function(MM) {
        return [Math.floor((MM - 1) / 2), 0]
      }(jM) : [LM, mM];
      return {
        kind: 0 === nM ? "reactor" : "battery",
        box: Fi([rM, iM, OM], SM, jM, aM, PM, HM),
        formed: 1 === QM,
        level: zM
      }
    }
    class mh {
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qh;
        this.guideSetting = MM, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = MM.read()
      }
      TE(MM) {
        var rM;
        const iM = new Map;
        for (const OM of MM.baf2RxPlanList) {
          const MM = Lh(OM);
          iM.set(zh(MM.box.ctrl), MM)
        }
        this.plans = iM, this.layouts = new Map((null !== (rM = MM.baf2RxLayouts) && void 0 !== rM ? rM : []).map((MM => {
          let [rM, iM, OM, SM] = MM;
          return [zh([rM, iM, OM]), SM]
        }))), this.predicted.clear(), MM.baf2RxFormedAt && (this.formed = {
          ctrl: MM.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const OM of [...this.startersOff]) {
          const MM = iM.get(OM);
          MM && !MM.formed || this.startersOff.delete(OM)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((MM => this.planByKey(MM)))
      }
      planAt(MM) {
        return this.planByKey(zh(MM))
      }
      predictSize(MM, rM) {
        this.predicted.set(zh(MM), rM), this.changed()
      }
      unpredict(MM) {
        this.predicted.delete(zh(MM)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(MM) {
        var rM;
        const iM = zh(MM);
        return this.predicted.has(iM) ? null : null !== (rM = this.layouts.get(iM)) && void 0 !== rM ? rM : null
      }
      showsStarter(MM) {
        return !this.startersOff.has(zh(MM))
      }
      setStarter(MM, rM) {
        const iM = zh(MM);
        rM ? this.startersOff.delete(iM) : this.startersOff.add(iM), this.changed()
      }
      guideOn() {
        return this.guide
      }
      setGuide(MM) {
        this.guide = MM, this.guideSetting.write(MM), this.changed()
      }
      getVersion() {
        return this.version
      }
      subscribe(MM) {
        return this.listeners.add(MM), () => {
          this.listeners.delete(MM)
        }
      }
      dispose() {
        this.plans.clear(), this.predicted.clear(), this.startersOff.clear(), this.layouts.clear(), this.listeners.clear(), this.formed = null
      }
      planByKey(MM) {
        const rM = this.plans.get(MM);
        if (!rM) return null;
        const iM = this.predicted.get(MM);
        return iM ? {
          ...rM,
          box: Xi(rM.box, rM.kind, iM[0], iM[1], iM[2])
        } : rM
      }
      changed() {
        this.version++;
        for (const MM of this.listeners) MM()
      }
    }
    var Hh = iM(181);
    const hh = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function Jh(MM, rM, iM, OM) {
      const SM = MM.length / 3;
      for (let jM = 0; jM < hh.length / 3; jM++) MM.push(hh[3 * jM] * OM[0] / 2 + iM[0], hh[3 * jM + 1] * OM[1] / 2 + iM[1], hh[3 * jM + 2] * OM[2] / 2 + iM[2]);
      for (let jM = SM; jM < SM + 24; jM += 4) rM.push(jM, jM + 1, jM + 2, jM, jM + 2, jM + 3)
    }

    function dh(MM, rM, iM) {
      const OM = rM[0][0],
        SM = [],
        jM = [];
      for (const [aM, PM] of rM) Jh(SM, jM, [aM[0] - OM[0], aM[1] - OM[1], aM[2] - OM[2]], PM);
      return MM.createGameMesh({
        positions: SM,
        indices: jM
      }, iM, OM)
    }

    function yh(MM, rM) {
      const iM = MM.w - 2,
        OM = MM.d - 2;
      return 1 === function(MM, rM, iM, OM) {
        const [SM, jM, aM] = MM;
        if (Number(SM <= 2) + Number(jM <= 2) + Number(aM <= 2) >= 2) return function(MM, rM, iM) {
          return (MM + rM + iM) % 2 === 0 ? 1 : 3
        }(rM, iM, OM);
        const [PM, nM] = SM >= jM && SM >= aM ? [iM, OM] : jM >= aM ? [rM, OM] : [rM, iM];
        return PM % 2 === 0 && nM % 2 === 0 ? 1 : 3
      }([iM, MM.h - 2, OM], rM % iM, Math.floor(rM / (iM * OM)), Math.floor(rM / iM) % OM) ? "rod" : "channel"
    }

    function lh(MM, rM, iM) {
      if ("reactor" !== MM.kind || MM.formed || !rM) return !1;
      const OM = qi(MM.box);
      for (let SM = 0; SM < OM; SM++) {
        const MM = iM(SM);
        if (null !== MM && Wi(MM)) return !1
      }
      return !0
    }

    function Eh(MM, rM, iM, OM, SM) {
      var jM;
      let aM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const PM = iO(MM.box, rM),
        nM = aO(MM.kind, PM, iM);
      if ("wrong" === nM || "blocked" === nM) return "wrong";
      if (!SM) return null;
      if ("inside" === PM && "reactor" === MM.kind && "Air" === si(iM)) {
        if (null !== aM) {
          var QM;
          const iM = Mm[rm(aM, OO(MM.box, rM))];
          return iM && null !== (QM = en(iM)) && void 0 !== QM ? QM : null
        }
        if (OM) return yh(MM.box, OO(MM.box, rM))
      }
      if ("missing" !== nM) return null;
      const zM = PO(MM.kind, PM);
      return null === zM ? null : null !== (jM = en(zM)) && void 0 !== jM ? jM : null
    }
    const Uh = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Gh(MM, rM, iM) {
      const OM = iM => {
        const OM = rM(MO(MM.box, iM));
        return null !== OM && function(MM, rM) {
          return "reactor" !== MM.kind || rM !== Vi(MM.box) && "inside" !== iO(MM.box, rM)
        }(MM, iM) && "ok" !== aO(MM.kind, iO(MM.box, iM), OM)
      };
      if (iM) {
        const jM = rO(MM.box, [Math.floor(iM[0]), Math.floor(iM[1]), Math.floor(iM[2])]);
        if (jM >= 0 && (OM(jM) || (SM = jM, "reactor" === MM.kind && "inside" === iO(MM.box, SM) && "Air" === rM(MO(MM.box, SM))))) return jM
      }
      var SM;
      const jM = qi(MM.box);
      for (let aM = 0; aM < jM; aM++)
        if (OM(aM)) return aM;
      return -1
    }

    function Ch(MM, rM) {
      return Math.floor(rM / (MM.w * MM.d))
    }

    function eh(MM, rM, iM) {
      return iM >= 0 && Ch(MM, rM) > Ch(MM, iM)
    }

    function bh(MM, rM) {
      return rM >= 0 && MM.h >= 3 && Ch(MM, rM) === MM.h - 1
    }

    function wh(MM) {
      const rM = si(MM);
      return rM === Ei || "Collider" === rM || "Laser" === rM || rM.startsWith("_Collider ")
    }

    function th(MM, rM, iM, OM) {
      if (OM(MM)) return null;
      if (!Uh.every((rM => {
          let [OM, SM, jM] = rM;
          const aM = iM([MM[0] + OM, MM[1] + SM, MM[2] + jM]);
          return null !== aM && !Ni("reactor", aM) && "reactor" !== Di(aM)
        }))) return null;
      const SM = Ai("reactor").min,
        jM = Fi([MM[0], MM[1], MM[2]], function(MM, rM) {
          const iM = rM[0] - (MM[0] + .5),
            OM = rM[2] - (MM[2] + .5);
          return Math.abs(iM) >= Math.abs(OM) ? iM >= 0 ? 2 : 4 : OM >= 0 ? 1 : 3
        }(MM, rM), SM, SM, SM, Bi("reactor", SM)),
        aM = Vi(jM);
      let PM = !0;
      for (let nM = 0; nM < qi(jM) && PM; nM++) {
        if (nM === aM) continue;
        const MM = MO(jM, nM),
          rM = iM(MM);
        PM = !OM(MM) && (null === rM || !wh(rM))
      }
      return {
        box: jM,
        fits: PM
      }
    }
    const gh = Cn,
      uh = "baf2Goal",
      Rh = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      ph = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      Wh = .4;

    function sh(MM, rM) {
      let [iM, OM, SM] = MM;
      const jM = pn([iM - .02, OM - .02, SM - .02], [iM + 1.02, OM + 1.02, SM + 1.02], .07);
      return rM && (jM.push([
        [iM + .5, OM + 1 + .7, SM + .5],
        [.08, 1.4, .08]
      ]), jM.push([
        [iM + .5, OM + 1 + 1.4 + .2, SM + .5],
        [Wh, Wh, Wh]
      ])), jM
    }

    function Dh(MM, rM) {
      let [iM, OM, SM] = rM;
      return MM.isBlockInLoadedChunk(iM, OM, SM) ? MM.blockIdToBlockName(MM.getBlockId(iM, OM, SM)) : null
    }
    let kh = null;
    const Zh = new Set;
    let oh = null;

    function fh(MM) {
      kh = MM;
      for (const rM of Zh) rM(MM)
    }
    class Yh {
      constructor(MM) {
        var rM;
        this.plans = MM, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (rM = MM => {
          var rM, iM;
          this.setGoal(null !== (rM = null === MM || void 0 === MM ? void 0 : MM.goal) && void 0 !== rM ? rM : null, null !== (iM = null === MM || void 0 === MM ? void 0 : MM.startsBattery) && void 0 !== iM && iM)
        }, oh ??= [sS.i.subscribe("setDirectionArrow", (MM => {
          let {
            id: rM,
            position: iM,
            text: OM
          } = MM;
          rM === uh && fh({
            goal: [Math.floor(iM[0]), Math.floor(iM[1]), Math.floor(iM[2])],
            startsBattery: JSON.stringify(null !== OM && void 0 !== OM ? OM : null).includes("arrowStartBattery")
          })
        })), sS.i.subscribe("clearDirectionArrow", (MM => {
          let {
            id: rM
          } = MM;
          null !== rM && rM !== uh || fh(null)
        }))], Zh.add(rM), rM(kh), () => {
          Zh.delete(rM)
        })
      }
      onAfterRender(MM, rM) {
        const iM = performance.now();
        if (this.cues.length > 0) {
          const rM = .55 + .45 * Math.sin(iM / 1100 * Math.PI * 2);
          for (const iM of this.cues) MM.setGameMesh(iM, {
            visibility: rM
          })
        }
        if (iM - this.lastCheckMs < 150) return;
        this.lastCheckMs = iM;
        const OM = this.plans.all().filter((MM => {
            const [iM, OM, SM] = MM.box.ctrl;
            return (!MM.formed || null !== this.plans.layoutOf(MM.box.ctrl)) && (iM - rM[0]) ** 2 + (OM - rM[1]) ** 2 + (SM - rM[2]) ** 2 <= 2304
          })),
          SM = function(MM, rM) {
            const iM = Hh.f.HL,
              OM = new Map;
            for (const jM of rM) {
              const rM = MO(jM.box, 0),
                aM = MO(jM.box, qi(jM.box) - 1),
                PM = [Math.min(rM[0], aM[0]), Math.min(rM[1], aM[1]), Math.min(rM[2], aM[2])].map((MM => Math.floor(MM / iM))),
                nM = [Math.max(rM[0], aM[0]), Math.max(rM[1], aM[1]), Math.max(rM[2], aM[2])].map((MM => Math.floor(MM / iM)));
              for (let iM = PM[0]; iM <= nM[0]; iM++)
                for (let rM = PM[1]; rM <= nM[1]; rM++)
                  for (let jM = PM[2]; jM <= nM[2]; jM++) {
                    var SM;
                    OM.set(`${iM},${rM},${jM}`, null !== (SM = MM.getChunkVersion(iM, rM, jM)) && void 0 !== SM ? SM : -1)
                  }
            }
            return OM
          }(MM, OM);
        this.plans.getVersion() === this.storeVersion && (function(MM, rM) {
          if (MM.size !== rM.size) return !1;
          for (const [iM, OM] of MM)
            if (rM.get(iM) !== OM) return !1;
          return !0
        }(SM, this.chunkVersions) || iM - this.lastRescanMs < 600) || (this.lastRescanMs = iM, this.storeVersion = this.plans.getVersion(), this.chunkVersions = SM, this.redraw(MM, OM))
      }
      dispose(MM) {
        this.unwatch(), kh = null, this.clearMeshes(MM), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(MM, rM) {
        var iM;
        (null === MM || void 0 === MM ? void 0 : MM.join()) === (null === (iM = this.goal) || void 0 === iM ? void 0 : iM.join()) && rM === this.startsBattery || (this.goal = MM, this.startsBattery = rM, this.storeVersion = -1)
      }
      redraw(MM, rM) {
        const iM = rM => Dh(MM, rM),
          OM = new Map,
          SM = [],
          jM = this.plans.guideOn();
        for (const QM of rM) {
          const MM = jM && lh(QM, this.plans.showsStarter(QM.box.ctrl), (MM => iM(MO(QM.box, MM)))),
            rM = "reactor" === QM.kind ? this.plans.layoutOf(QM.box.ctrl) : null,
            aM = jM && !QM.formed ? Gh(QM, iM, this.goal) : -1;
          aM >= 0 && SM.push([MO(QM.box, aM), bh(QM.box, aM)]);
          const PM = qi(QM.box);
          for (let SM = 0; SM < PM; SM++) {
            const PM = MO(QM.box, SM),
              nM = iM(PM),
              zM = null === nM ? null : Eh(QM, SM, nM, MM, jM, rM);
            if (null !== zM) {
              const MM = "wrong" !== zM && eh(QM.box, SM, aM),
                rM = MM ? `${zM}Dim` : zM;
              let iM = OM.get(rM);
              iM || (iM = {
                draw: {
                  ghost: zM,
                  dim: MM
                },
                list: []
              }, OM.set(rM, iM)), iM.list.push(PM)
            }
          }
        }
        if (jM && this.startsBattery && this.goal) {
          const [MM, rM, SM] = this.goal, jM = [];
          for (const [OM, aM, PM] of Rh) {
            const nM = [MM + OM, rM + aM, SM + PM];
            "Air" === iM(nM) && jM.push(nM)
          }
          if (jM.length > 0) {
            var aM;
            const MM = null !== (aM = OM.get("cell")) && void 0 !== aM ? aM : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            MM.list.push(...jM), OM.set("cell", MM)
          }
        }
        const PM = [...OM.keys()].sort(),
          nM = [...PM.map((MM => `${MM}:${OM.get(MM).list.join(";")}`)), `cue:${SM.join(";")}`].join("|");
        if (nM !== this.shownKey) {
          this.shownKey = nM, this.clearMeshes(MM);
          for (const rM of PM) {
            const {
              draw: iM,
              list: SM
            } = OM.get(rM);
            this.meshes.push(this.build(MM, iM, SM))
          }
          for (const [rM, iM] of SM) this.cues.push(dh(MM, sh(rM, iM), ph))
        }
      }
      build(MM, rM, iM) {
        let {
          ghost: OM,
          dim: SM
        } = rM;
        const {
          size: jM,
          colour: aM,
          alpha: PM
        } = gh[OM], nM = iM[0], QM = [], zM = [];
        for (const [LM, mM, HM] of iM) Jh(QM, zM, [LM - nM[0] + .5, mM - nM[1] + .5, HM - nM[2] + .5], [jM, jM, jM]);
        return MM.createGameMesh({
          positions: QM,
          indices: zM
        }, {
          rgb: aM,
          alpha: PM * (SM ? .3 : 1)
        }, nM)
      }
      clearMeshes(MM) {
        for (const rM of [...this.meshes, ...this.cues]) MM.disposeGameMesh(rM);
        this.meshes = [], this.cues = []
      }
    }
    const Nh = [.56, .83, 1],
      Ah = [1, .3, .25];
    class xh {
      constructor(MM) {
        this.plans = MM, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(MM, rM, iM) {
        var OM;
        const SM = performance.now();
        if (SM - this.lastCheckMs < 150) return;
        this.lastCheckMs = SM;
        const jM = rM => Dh(MM, rM),
          aM = null === (OM = MM.TrM(rM)) || void 0 === OM ? void 0 : OM.name,
          PM = aM && "Reactor Frame" === si(aM) ? MM.getTargetedBlock() : null,
          nM = PM ? [PM.zd[0], PM.zd[1], PM.zd[2]] : null,
          QM = null !== nM && "Air" === jM(nM) && nM.every(((MM, rM) => Math.abs(MM + .5 - iM[rM]) <= 8)) ? th(nM, iM, jM, (MM => this.inPlan(MM))) : null,
          zM = QM ? `${QM.box.ctrl.join()}|${QM.box.rot}|${QM.fits}` : "";
        zM !== this.shownKey && this.show(MM, zM, QM)
      }
      dispose(MM) {
        this.clear(MM), this.shownKey = ""
      }
      inPlan(MM) {
        return this.plans.all().some((rM => rO(rM.box, MM) >= 0))
      }
      show(MM, rM, iM) {
        if (this.clear(MM), this.shownKey = rM, !iM) return;
        const {
          box: OM,
          fits: SM
        } = iM, jM = SM ? Nh : Ah, {
          lo: aM,
          hi: PM
        } = Rn(OM);
        this.meshes.push(dh(MM, pn(aM, PM, .05), {
          rgb: jM,
          alpha: 1
        }));
        const nM = [],
          QM = MO(OM, 0)[1];
        for (let zM = 0; zM < OM.w * OM.d; zM++) {
          const [MM, , rM] = MO(OM, zM);
          nM.push([
            [MM + .5, QM + .02 + .01, rM + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(dh(MM, nM, {
          rgb: jM,
          alpha: .25
        }))
      }
      clear(MM) {
        for (const rM of this.meshes) MM.disposeGameMesh(rM);
        this.meshes = []
      }
    }
    const vh = "buildAFactory2Game:";

    function Fh(MM, rM, iM) {
      const OM = MM => {
          const [iM, OM, SM] = MM.box.ctrl;
          return iM === rM[0] && OM === rM[1] && SM === rM[2]
        },
        SM = MM.find((MM => OM(MM) || rO(MM.box, rM) >= 0));
      if (!SM) return null;
      const jM = function(MM, rM, iM) {
        const {
          w: OM,
          h: SM,
          d: jM
        } = MM.box, aM = "reactor" === MM.kind ? `${vh}rxTitle` : `${vh}batTitle`;
        if (MM.formed) return {
          key: `${vh}lookPlanFormed`,
          kindKey: aM,
          w: OM,
          h: SM,
          d: jM,
          count: 0
        };
        let PM = 0,
          nM = 0;
        for (let zM = 0; zM < qi(MM.box); zM++) {
          const rM = iM(MO(MM.box, zM)),
            OM = null === rM ? "ok" : aO(MM.kind, iO(MM.box, zM), rM);
          PM += "missing" === OM ? 1 : 0, nM += "wrong" === OM || "blocked" === OM ? 1 : 0
        }
        const QM = function(MM, rM, iM) {
          if (rM < 0 || null === iM) return;
          const OM = iO(MM.box, rM),
            SM = aO(MM.kind, OM, iM);
          return "blocked" === SM ? `${vh}lookWhy_blocked` : "wrong" === SM ? "ctrl" === OM ? `${vh}lookWhy_ctrl` : `${vh}lookWhy_reactor_${OM}` : void 0
        }(MM, rO(MM.box, rM), iM([rM[0], rM[1], rM[2]]));
        if (PM > 0) return {
          key: `${vh}lookPlanToBuild`,
          kindKey: aM,
          w: OM,
          h: SM,
          d: jM,
          count: PM,
          why: QM
        };
        if (nM > 0) return {
          key: `${vh}lookPlanTakeOut`,
          kindKey: aM,
          w: OM,
          h: SM,
          d: jM,
          count: nM,
          why: QM
        };
        return {
          key: "reactor" === MM.kind ? `${vh}lookPlanNoRods` : `${vh}lookPlanDone`,
          kindKey: aM,
          w: OM,
          h: SM,
          d: jM,
          count: 0
        }
      }(SM, rM, iM);
      return "reactor" === SM.kind && OM(SM) ? {
        ...jM,
        ctrl: !0
      } : jM
    }

    function Bh(MM, rM) {
      return MM === rM || null !== MM && null !== rM && MM.key === rM.key && MM.kindKey === rM.kindKey && MM.w === rM.w && MM.h === rM.h && MM.d === rM.d && MM.count === rM.count && MM.why === rM.why && MM.ctrl === rM.ctrl
    }

    function Xh() {
      return performance.now()
    }
    class Ih {
      constructor(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Xh;
        this.ticket = MM, this.sent = rM, this.backstopMs = iM, this.now = OM, this.queuedAt = void 0, this.queuedAt = OM()
      }
      answered() {
        const MM = this.now(),
          rM = this.sent.leftAt(this.ticket);
        return null !== rM && MM - rM > 4e3 || MM - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class Kh {
      constructor() {
        this.echoes = []
      }
      add(MM) {
        this.echoes = this.echoes.filter((MM => !MM.answered())), this.echoes.push(MM)
      }
      answered() {
        var MM, rM;
        return null === (MM = null === (rM = this.echoes.at(-1)) || void 0 === rM ? void 0 : rM.answered()) || void 0 === MM || MM
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((MM => MM.answered()))
      }
      age() {
        var MM, rM;
        return null !== (MM = null === (rM = this.echoes.at(-1)) || void 0 === rM ? void 0 : rM.age()) && void 0 !== MM ? MM : null
      }
      clear() {
        this.echoes = []
      }
    }
    class qh {
      constructor(MM) {
        this.send = MM, this.value = null, this.sent = null, this.echoes = new Kh, this.down = !1, this.timer = null
      }
      shown(MM) {
        return null === this.value ? MM : this.down || this.value !== this.sent ? this.value : MM === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), MM) : this.value
      }
      pendingFor(MM) {
        return null !== this.value && this.value === this.sent && MM !== this.value ? this.echoes.age() : null
      }
      assume(MM, rM) {
        this.disarm(), this.down = !1, this.value = MM, this.sent = MM, this.echoes.clear(), this.echoes.add(rM)
      }
      press() {
        this.down = !0
      }
      drag(MM) {
        this.value = MM, this.arm(this.down ? 1e3 : 400)
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
      arm(MM) {
        this.disarm(), this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), MM)
      }
      disarm() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
    class Th {
      constructor() {
        this.pending = new Map
      }
      set(MM, rM, iM) {
        var OM;
        const SM = null !== (OM = this.pending.get(MM)) && void 0 !== OM ? OM : {
          on: rM,
          echoes: new Kh
        };
        SM.on = rM, SM.echoes.add(iM), this.pending.set(MM, SM)
      }
      shown(MM) {
        let rM = MM;
        for (const [iM, {
            on: OM,
            echoes: SM
          }] of this.pending) 0 !== (MM & iM) === OM && SM.agreeCounts() || SM.answered() ? this.pending.delete(iM) : rM = OM ? rM | iM : rM & ~iM;
        return rM
      }
      pendingMask() {
        let MM = 0;
        for (const rM of this.pending.keys()) MM |= rM;
        return MM
      }
      pendingFor(MM) {
        let rM = null;
        for (const [OM, {
            on: SM,
            echoes: jM
          }] of this.pending) {
          if (void 0 !== MM && 0 !== (MM & OM) === SM) continue;
          const aM = jM.age();
          var iM;
          if (null !== aM) rM = Math.max(null !== (iM = rM) && void 0 !== iM ? iM : 0, aM)
        }
        return rM
      }
      clear() {
        this.pending.clear()
      }
    }
    class Vh {
      constructor() {
        this.dims = null, this.echoes = new Kh, this.unmet = null
      }
      shown(MM) {
        var rM;
        return this.dims && (ch(this.dims, MM) && this.echoes.agreeCounts() || this.echoes.answered()) && (ch(this.dims, MM) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (rM = this.dims) && void 0 !== rM ? rM : MM
      }
      takeUnmet() {
        const MM = this.unmet;
        return this.unmet = null, MM
      }
      set(MM, rM) {
        this.dims = MM, this.echoes.add(rM)
      }
      pendingFor(MM) {
        return null === this.dims || MM && ch(this.dims, MM) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function ch(MM, rM) {
      return MM[0] === rM[0] && MM[1] === rM[1] && MM[2] === rM[2]
    }
    class MJ {
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xh;
        this.now = MM, this.taps = new Map
      }
      tap(MM, rM, iM) {
        return !this.busy(MM) && (this.taps.set(MM, {
          at: this.now(),
          done: rM
        }), iM(), !0)
      }
      settle(MM) {
        for (const [rM, iM] of [...this.taps]) iM.done(MM) && this.taps.delete(rM)
      }
      busy(MM) {
        const rM = this.taps.get(MM);
        return !!rM && (!(this.now() - rM.at >= 3e3) || (this.taps.delete(MM), !1))
      }
      busyIds() {
        const MM = new Set;
        for (const rM of [...this.taps.keys()]) this.busy(rM) && MM.add(rM);
        return MM
      }
      clear() {
        this.taps.clear()
      }
    }

    function rJ(MM) {
      return {
        send: rM => MM.track(rM),
        sendUrgent: (rM, iM) => MM.track(rM, {
          urgent: !0,
          supersedes: iM
        }),
        leftAt: rM => MM.leftAt(rM),
        holdReserve: () => MM.holdUrgentReserve(),
        answerMs: Ra
      }
    }

    function iJ() {
      return performance.now()
    }

    function OJ(MM) {
      const rM = MM.baf2RxNeed.map((MM => {
        let [rM, iM] = MM;
        return [rM, iM]
      }));
      return JSON.stringify([MM.baf2RxFormed, rM, MM.baf2RxBad, MM.baf2RxCells])
    }

    function SJ(MM, rM) {
      const iM = 0 !== (rM & mr),
        OM = 0 !== (MM.baf2RxFlags & mr);
      return !iM || OM || "running" !== MM.baf2RxState && "idle" !== MM.baf2RxState ? !iM && OM && "scram" === MM.baf2RxState && MM.baf2RxFuel > 0 ? "idle" : MM.baf2RxState : "scram"
    }

    function jJ(MM) {
      return JSON.stringify([MM.baf2BatFormed, MM.baf2BatNeed, MM.baf2BatBad])
    }

    function aJ(MM) {
      return MM.join(",")
    }
    class PJ {
      constructor() {
        this.listeners = new Set
      }
      subscribe(MM) {
        return this.listeners.add(MM), () => {
          this.listeners.delete(MM)
        }
      }
      notify() {
        for (const MM of this.listeners) MM()
      }
      clear() {
        this.listeners.clear()
      }
    }
    class nJ {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(MM, rM) {
        this.lastAt = MM, this.lastUntil = MM + rM
      }
      answered(MM) {
        return this.lastAt >= MM || MM < this.lastUntil
      }
    }
    class QJ {
      constructor(MM, rM) {
        this.link = MM, this.now = rM, this.hold = new Vh, this.picked = null, this.notTaken = null
      }
      shown(MM) {
        const rM = this.hold.shown(MM);
        if (this.hold.takeUnmet() && this.picked) {
          var iM;
          const {
            plans: rM,
            ctrl: OM,
            at: SM
          } = this.picked;
          this.picked = null, rM.unpredict(OM), null === (iM = this.notTaken) || void 0 === iM || iM.call(this, MM, SM)
        }
        return rM
      }
      pendingFor(MM) {
        return this.hold.pendingFor(MM)
      }
      LH(MM, rM, iM) {
        MM.predictSize(rM, iM), this.picked = {
          plans: MM,
          ctrl: rM,
          at: this.now()
        };
        const OM = this.link.send(Lr(rM, "plan", ...iM));
        this.hold.set(iM, new Ih(OM, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class zJ {
      constructor(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : iJ;
        this.plans = MM, this.readInterior = rM, this.link = iM, this.now = OM, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new Th, this.throttle = void 0, this.oneShots = void 0, this.listeners = new PJ, this.redraw = null, this.releaseReserve = null, this.size = new QJ(iM, OM), this.oneShots = new MJ(OM), this.throttle = new qh((MM => this.echo(this.link.send(this.command("throttle", MM)))))
      }
      set(MM) {
        !MM.baf2RxOpen && this.raw && aJ(this.raw.baf2RxAt) === aJ(MM.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(MM), this.Tz(MM)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(MM) {
        this.size.notTaken = MM
      }
      resize(MM) {
        this.raw && (this.size.LH(this.plans, this.raw.baf2RxAt, MM), this.Tz(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const MM = this.raw.baf2RxAt;
        this.plans.setStarter(MM, !this.plans.showsStarter(MM)), this.Tz(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.Tz(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.Tz(this.raw)
      }
      send(MM) {
        if (this.raw) {
          for (var rM = arguments.length, iM = new Array(rM > 1 ? rM - 1 : 0), OM = 1; OM < rM; OM++) iM[OM - 1] = arguments[OM];
          this.link.send(this.command(MM, ...iM))
        }
      }
      tap(MM, rM) {
        this.raw && this.oneShots.tap(MM, function(MM, rM) {
          if ("start" === MM) return MM => 0 === (MM.baf2RxFlags & mr);
          if ("odConfirm" === MM) return MM => 0 !== (MM.baf2RxFlags & Hr);
          const iM = OJ(rM);
          return MM => OJ(MM) !== iM
        }(MM, this.raw), rM) && ("start" === MM && (this.startedAt = this.now()), this.Tz(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(mr, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(MM, rM) {
        if (!this.raw) return;
        const iM = MM === mr ? this.command(rM ? "scram" : "start") : this.command("od", rM ? 1 : 0),
          OM = rM && MM === mr,
          SM = `${zr} ${this.raw.baf2RxAt.join(" ")} `,
          jM = this.echo(OM ? this.link.sendUrgent(iM, (MM => {
            const rM = MM.startsWith(SM) ? MM.slice(SM.length).split(" ")[0] : null;
            return "throttle" === rM || "start" === rM
          })) : this.link.send(iM));
        this.flags.set(MM, rM, jM), OM && this.throttle.assume(0, jM), this.Tz(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(MM) {
        this.throttle.drag(MM), this.raw && this.Tz(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.Tz(this.raw)
      }
      subscribe(MM) {
        return this.listeners.subscribe(MM)
      }
      opened() {
        this.releaseReserve ??= this.link.holdReserve()
      }
      closed() {
        var MM;
        this.throttle.release(), null === (MM = this.releaseReserve) || void 0 === MM || MM.call(this), this.releaseReserve = null
      }
      dispose() {
        this.closed(), this.throttle.clear(), this.flags.clear(), this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.raw = null, this.looksOf = null, this.listeners.clear()
      }
      command(MM) {
        for (var rM = arguments.length, iM = new Array(rM > 1 ? rM - 1 : 0), OM = 1; OM < rM; OM++) iM[OM - 1] = arguments[OM];
        return Lr(this.raw.baf2RxAt, MM, ...iM)
      }
      echo(MM) {
        return new Ih(MM, this.link, this.link.answerMs, this.now)
      }
      Tz(MM) {
        var rM;
        this.raw = MM;
        const iM = this.flags.shown(MM.baf2RxFlags),
          OM = {
            ...MM,
            baf2RxFlags: iM,
            baf2RxTarget: this.throttle.shown(MM.baf2RxTarget),
            baf2RxState: SJ(MM, iM)
          },
          SM = this.size.shown(OM.baf2RxDims),
          jM = this.throttle.pendingFor(),
          aM = [this.throttle.pendingFor(MM.baf2RxTarget), this.flags.pendingFor(MM.baf2RxFlags), this.size.pendingFor(MM.baf2RxDims)].filter((MM => null !== MM)),
          PM = aM.length > 0 ? Math.max(...aM) : null,
          nM = this.oneShots.busyIds(),
          QM = OM.baf2RxAt;
        let zM, LM, mM = null,
          HM = [Math.max(0, SM[0] - 2), Math.max(0, SM[1] - 2), Math.max(0, SM[2] - 2)];
        if (OM.baf2RxFormed) {
          const [MM, rM, iM] = OM.baf2RxDims;
          HM = [Math.max(0, MM - 2), Math.max(0, rM - 2), Math.max(0, iM - 2)], zM = Array.from(OM.baf2RxCells, Number), LM = `${HM.join(",")}:${OM.baf2RxCells}`
        } else {
          var hM;
          const MM = null === (hM = this.plans.planAt(QM)) || void 0 === hM ? void 0 : hM.box,
            rM = MM ? Xi(MM, "reactor", ...SM) : Fi(QM, 1, ...SM, Bi("reactor", SM[0])),
            iM = this.readInterior(rM);
          mM = qP(HM, iM), zM = iM, LM = `${HM.join(",")}:${iM.join("")}`
        }(null === (rM = this.looksOf) || void 0 === rM ? void 0 : rM.key) !== LM && (this.looksOf = {
          key: LM,
          looks: On(HM, zM)
        }), this.view = {
          status: OM,
          dims: SM,
          plan: mM,
          inner: HM,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(QM),
          odConfirmed: this.odConfirmed || 0 !== (OM.baf2RxFlags & Er),
          guide: this.plans.guideOn(),
          throttlePending: null !== jM,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== PM && PM >= 5e3,
          busy: nM,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== PM || nM.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.Tz(this.raw)
        }), 250))
      }
    }
    class LJ {
      constructor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : iJ;
        this.plans = MM, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new PJ, this.redraw = null, this.size = new QJ(rM, iM), this.oneShots = new MJ(iM)
      }
      set(MM) {
        !MM.baf2BatOpen && this.view && aJ(this.view.status.baf2BatAt) === aJ(MM.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(MM), this.Tz(MM)
      }
      tap(MM, rM) {
        if (!this.view) return;
        const iM = jJ(this.view.status);
        this.oneShots.tap(MM, (MM => jJ(MM) !== iM), rM) && this.Tz(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(MM) {
        this.size.notTaken = MM
      }
      resize(MM) {
        this.view && (this.size.LH(this.plans, this.view.status.baf2BatAt, MM), this.Tz(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.Tz(this.view.status)
      }
      subscribe(MM) {
        return this.listeners.subscribe(MM)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      Tz(MM) {
        const rM = this.size.shown(MM.baf2BatDims),
          iM = this.oneShots.busyIds();
        this.view = {
          status: MM,
          dims: rM,
          vL: yn(rM, MM.baf2BatDims) ? MM.baf2BatCapacity : an(...rM),
          guide: this.plans.guideOn(),
          busy: iM
        }, this.listeners.notify(), iM.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.Tz(this.view.status)
        }), 250))
      }
    }
    const mJ = "buildAFactory2Game:";

    function HJ() {
      var MM;
      const rM = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!rM) return null;
      const iM = rM.querySelector(".ExitButton");
      return function(MM, rM) {
        const iM = rM ? rM.left - 8 : MM.right;
        return {
          left: MM.left,
          top: MM.top,
          width: Math.max(0, iM - MM.left),
          height: MM.height
        }
      }(rM.getBoundingClientRect(), null !== (MM = null === iM || void 0 === iM ? void 0 : iM.getBoundingClientRect()) && void 0 !== MM ? MM : null)
    }
    const hJ = (0, OM.memo)((function(MM) {
      let {
        store: rM
      } = MM;
      const {
        t: iM
      } = (0, tS.A)(), [SM, jM] = (0, OM.useState)((() => rM.get())), [aM, PM] = (0, OM.useState)((() => performance.now()));
      (0, OM.useEffect)((() => (jM(rM.get()), rM.subscribe((() => {
        jM(rM.get()), PM(performance.now())
      })))), [rM]);
      const {
        alarm: nM,
        boomAt: QM
      } = SM, zM = null !== nM && null !== nM.secs, [LM, mM] = (0, OM.useState)(null);
      (0, OM.useEffect)((() => {
        if (!zM) return;
        mM(HJ());
        const MM = setInterval((() => {
          PM(performance.now()), mM(HJ())
        }), 250);
        return () => {
          clearInterval(MM)
        }
      }), [zM]);
      const [HM, hM] = (0, OM.useState)(!1);
      return (0, OM.useEffect)((() => {
        if (QM === -1 / 0) return;
        hM(!0);
        const MM = setTimeout((() => {
          hM(!1)
        }), 1300);
        return () => {
          clearTimeout(MM)
        }
      }), [QM]), (0, Gj.jsxs)(Gj.Fragment, {
        children: [null !== nM && (0, Gj.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: iM(nM.hot ? `${mJ}rxAlarmSiren` : `${mJ}rxAlarmDamaged`, {
            amount: String(nM.damage)
          })
        }), null !== nM && null !== nM.secs && (0, Gj.jsx)("div", {
          className: LM ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== LM && void 0 !== LM ? LM : void 0,
          "aria-live": "assertive",
          children: iM(`${mJ}rxAlarmCountdown`, {
            amount: String((JM = nM.secs, dM = aM - nM.receivedAt, Math.max(1, Math.ceil(JM - dM / 1e3))))
          })
        }), HM && (0, Gj.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var JM, dM
    }));
    class JJ {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      TE(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const iM = MM.baf2RxAlarmAt.join(",");
        let OM = this.snapshot.boomAt;
        if (MM.baf2RxAlarmBoom) this.byReactor.delete(iM), OM = rM;
        else if (MM.baf2RxAlarmDamage <= 0) this.byReactor.delete(iM);
        else {
          var SM;
          this.byReactor.set(iM, {
            damage: MM.baf2RxAlarmDamage,
            secs: null !== (SM = MM.baf2RxAlarmSecs) && void 0 !== SM ? SM : null,
            hot: !0 === MM.baf2RxAlarmHot,
            receivedAt: rM
          })
        }
        this.Tz(OM)
      }
      retain(MM) {
        let rM = !1;
        for (const iM of [...this.byReactor.keys()]) MM.has(iM) || (this.byReactor.delete(iM), rM = !0);
        rM && this.Tz(this.snapshot.boomAt)
      }
      has(MM) {
        return this.byReactor.has(MM)
      }
      get() {
        return this.snapshot
      }
      subscribe(MM) {
        return this.listeners.add(MM), () => {
          this.listeners.delete(MM)
        }
      }
      dispose() {
        this.listeners.clear(), this.byReactor.clear()
      }
      Tz(MM) {
        let rM = null;
        for (const iM of this.byReactor.values())(!rM || iM.damage > rM.damage) && (rM = iM);
        this.snapshot = {
          alarm: rM,
          boomAt: MM
        };
        for (const iM of this.listeners) iM()
      }
    }
    const dJ = {
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

    function yJ(MM) {
      return [MM[0], MM[1], MM[2]]
    }

    function lJ(MM) {
      return `${MM[0]},${MM[1]},${MM[2]}`
    }
    class EJ {
      constructor(MM) {
        if (this.plans = MM, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var MM;
            return {
              active: this.glows.flatMap((MM => {
                let {
                  record: rM
                } = MM;
                return rM ? [rM] : []
              })),
              log: [...null !== (MM = this.devLog) && void 0 !== MM ? MM : []]
            }
          }, this.devLog && "undefined" !== typeof window) {
          window.baf2Glows = this.devAccessor
        }
      }
      glowLog() {
        var MM;
        return null !== (MM = this.devLog) && void 0 !== MM ? MM : []
      }
      check(MM, rM, iM) {
        const OM = new Set(rM.map((MM => lJ(MM.box.ctrl))));
        for (const aM of function(MM, rM) {
            const iM = [],
              OM = new Map(MM);
            MM.clear();
            for (const SM of rM) {
              const rM = zh(SM.box.ctrl),
                jM = SM.formed ? SM.level : 0;
              MM.set(rM, jM), jM > 0 && 0 === OM.get(rM) && iM.push(SM)
            }
            return iM
          }(this.levels, this.plans.all())) OM.has(lJ(aM.box.ctrl)) && this.show(MM, aM, "on", iM);
        const SM = this.plans.lastFormed();
        if (null === SM || SM.receivedAt <= this.flashedAt) return null;
        this.flashedAt = SM.receivedAt;
        const jM = function(MM, rM) {
          var iM;
          const OM = zh(MM);
          return null !== (iM = rM.find((MM => zh(MM.box.ctrl) === OM))) && void 0 !== iM ? iM : null
        }(SM.ctrl, rM);
        return jM && this.show(MM, jM, "formed", iM), jM
      }
      fade(MM, rM) {
        0 !== this.glows.length && (this.glows = this.glows.filter((iM => {
          let {
            mesh: OM,
            glow: SM,
            startMs: jM,
            record: aM
          } = iM;
          const PM = (rM - jM) / dJ[SM].ms;
          return PM >= 1 ? (MM.disposeGameMesh(OM), aM && (aM.endMs = rM), !1) : (MM.setGameMesh(OM, {
            visibility: "formed" === SM ? 1 - PM : Math.sin(Math.PI * PM)
          }), !0)
        })))
      }
      dispose(MM) {
        for (const {
            mesh: iM
          }
          of this.glows) MM.disposeGameMesh(iM);
        this.glows = [], this.levels.clear();
        const rM = "undefined" !== typeof window ? window : null;
        (null === rM || void 0 === rM ? void 0 : rM.baf2Glows) === this.devAccessor && delete rM.baf2Glows
      }
      show(MM, rM, iM, OM) {
        const {
          lo: SM,
          hi: jM
        } = Rn(rM.box);
        let aM = null;
        this.devLog && (aM = {
          glow: iM,
          ctrl: yJ(rM.box.ctrl),
          lo: yJ(SM),
          hi: yJ(jM),
          startMs: OM,
          endMs: null
        }, this.devLog.push(aM), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(MM, iM, pn(SM, jM, dJ[iM].thick)),
          glow: iM,
          startMs: OM,
          record: aM
        })
      }
      build(MM, rM, iM) {
        const OM = dh(MM, iM, {
          rgb: dJ[rM].colour,
          alpha: 1
        });
        return MM.setGameMesh(OM, {
          visibility: 0
        }), OM
      }
    }
    const UJ = 1 / .6,
      GJ = {
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
        blendMode: pP.d.Standard,
        soft: !0
      },
      CJ = {
        ...GJ,
        size: [.25, .4],
        count: 2
      };

    function eJ(MM) {
      return {
        colours: [MM, MM],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: pP.d.Add,
        soft: !1
      }
    }
    const bJ = eJ([150, 225, 255]),
      wJ = eJ([185, 145, 255]),
      tJ = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function gJ(MM) {
      const rM = Dr[MM];
      return null === rM.fuelSlot || Si(rM) ? tJ.includes(MM) ? wJ : bJ : GJ
    }
    const uJ = {
        kind: "smokePuff"
      },
      RJ = [.2, .025, .2];

    function pJ(MM, rM) {
      const [
        [iM, OM, SM],
        [jM, aM, PM]
      ] = MM.colours;
      return {
        texture: MM.soft ? uJ : "square_particle",
        vL: rM,
        minLifeTime: MM.life[0] / UJ,
        maxLifeTime: MM.life[1] / UJ,
        minEmitPower: MM.power[0] * UJ,
        maxEmitPower: MM.power[1] * UJ,
        minSize: MM.size[0],
        maxSize: MM.size[1],
        emitRate: 0,
        gravity: [0, MM.lift * UJ * UJ, 0],
        dir1: [-MM.spread, 1, -MM.spread],
        dir2: [MM.spread, 1, MM.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [iM, OM, SM, MM.alpha],
          maxColor: [jM, aM, PM, MM.alpha]
        }, {
          timeFraction: 1,
          minColor: [iM, OM, SM, 0],
          maxColor: [jM, aM, PM, 0]
        }],
        blendMode: MM.blendMode
      }
    }
    class WJ {
      constructor(MM) {
        this.fixed = MM, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(MM, rM, iM) {
        var OM;
        if (iM === this.lastFrame) return !1;
        this.lastFrame = iM;
        const SM = this.at;
        SM[0] = rM[0] + .5, SM[1] = rM[1] + 1.025, SM[2] = rM[2] + .5;
        const jM = null !== (OM = this.fixed) && void 0 !== OM ? OM : PM() ? CJ : GJ;
        let aM = this.particles.get(jM);
        return aM || (aM = MM.createParticles(function(MM) {
          return pJ(MM, Math.ceil(12 * MM.count * MM.life[1]) + MM.count)
        }(jM), {
          pos: SM,
          half: RJ
        }), this.particles.set(jM, aM)), aM.moveTo(SM), aM.emit(jM.count), !0
      }
      dispose() {
        for (const MM of this.particles.values()) MM.stop();
        this.particles.clear()
      }
    }
    class sJ {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(MM) {
        this.indexed = !0;
        for (const rM of gr) {
          const iM = gJ(rM);
          for (let OM = 1; OM <= 4; OM++) {
            const SM = MM.blockNameToBlockId(`${rM}|meta|rot${OM}|Running`, !0);
            if (null === SM) continue;
            let jM = this.pufferIndexByStyle.get(iM);
            void 0 === jM && (jM = this.pufferList.push(new WJ(iM === GJ ? null : iM)) - 1, this.pufferIndexByStyle.set(iM, jM)), this.pufferIndexById[SM] = jM + 1
          }
        }
      }
      onAfterRender(MM, rM) {
        this.indexed || this.index(MM);
        const iM = performance.now(),
          OM = 0 === this.lastMs ? 0 : Math.min(iM - this.lastMs, 250) / 1e3;
        this.lastMs = iM, this.frame++, MM.particlesEnabled() ? (this.scan(MM, rM), this.puff(MM, OM)) : this.sources = []
      }
      dispose() {
        for (const MM of this.pufferList) MM.dispose();
        this.sources = [], this.found = []
      }
      scan(MM, rM) {
        0 === this.scanRow && (this.origin = [Math.floor(rM[0]) - 12, Math.floor(rM[1]) - 6, Math.floor(rM[2]) - 12]);
        const iM = Math.min(this.scanRow + 16, 325),
          [OM, SM, jM] = this.origin,
          aM = this.hits;
        aM.length = 0;
        for (let PM = this.scanRow; PM < iM; PM++) {
          const rM = OM + PM % 25,
            iM = SM + Math.floor(PM / 25);
          MM.scanBlocks(rM, iM, jM, rM + 1, iM + 1, jM + 25, this.pufferIndexById, aM)
        }
        for (let PM = 0; PM < aM.length; PM += 4) {
          const MM = aM[PM + 3];
          this.found.push({
            pos: [aM[PM], aM[PM + 1], aM[PM + 2]],
            jP: MM,
            puffer: this.pufferList[this.pufferIndexById[MM] - 1]
          })
        }
        this.scanRow = iM, 325 === iM && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(MM, rM) {
        const iM = this.sources.length;
        if (0 !== iM) {
          this.budget = Math.min(this.budget + Math.min(iM / 1.2, 12) * rM, 2);
          for (let rM = 0; rM < iM && this.budget >= 1; rM++) {
            const rM = this.sources[this.cursor % iM];
            this.cursor = (this.cursor + 1) % iM, MM.getBlockId(rM.pos[0], rM.pos[1], rM.pos[2]) === rM.jP && (rM.puffer.puff(MM, rM.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const DJ = {
        ...eJ([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      kJ = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function ZJ(MM) {
      return 0 === MM.spots.length ? 0 : Math.min(1 * MM.level, 4)
    }

    function oJ(MM) {
      return 0 === MM.glass.length ? 0 : Math.min(.75 * MM.level, 3)
    }

    function fJ(MM) {
      return `${MM.ctrl.join(",")}:${MM.rot}:${MM.cu},${MM.cv}:${MM.w},${MM.h},${MM.d}`
    }

    function YJ(MM, rM) {
      const iM = rM.w - 2,
        OM = rM.h - 2,
        SM = rM.d - 2,
        jM = [];
      for (let aM = 0; aM < iM * OM * SM; aM++) {
        const PM = aM % iM,
          nM = Math.floor(aM / iM) % SM,
          QM = Math.floor(aM / (iM * SM));
        if (PM > 0 && PM < iM - 1 && nM > 0 && nM < SM - 1 && QM > 0 && QM < OM - 1) continue;
        const zM = MO(rM, SO(rM, aM)),
          LM = Dh(MM, zM);
        if (null !== LM && "Fuel Rod" === si(LM))
          for (const rM of kJ) {
            const iM = [zM[0] + rM[0], zM[1] + rM[1], zM[2] + rM[2]];
            AJ(MM, iM) && jM.push(xJ(iM, rM))
          }
      }
      return jM
    }

    function NJ(MM, rM) {
      const {
        lo: iM,
        hi: OM
      } = Rn(rM), SM = [];
      for (let jM = iM[0]; jM < OM[0]; jM++)
        for (let rM = iM[1]; rM < OM[1]; rM++) {
          const aM = jM === iM[0] || jM === OM[0] - 1 || rM === iM[1] || rM === OM[1] - 1 ? 1 : Math.max(1, OM[2] - 1 - iM[2]);
          for (let PM = iM[2]; PM < OM[2]; PM += aM) {
            const aM = [jM, rM, PM];
            if (!AJ(MM, aM)) continue;
            const nM = jM === iM[0] ? kJ[1] : jM === OM[0] - 1 ? kJ[0] : PM === iM[2] ? kJ[5] : PM === OM[2] - 1 ? kJ[4] : rM === iM[1] ? kJ[3] : kJ[2];
            SM.push(xJ(aM, nM))
          }
        }
      return SM
    }

    function AJ(MM, rM) {
      const iM = Dh(MM, rM);
      return null !== iM && "Reactor Glass" === si(iM)
    }

    function xJ(MM, rM) {
      return [
        [MM[0] + .5 + .55 * rM[0], MM[1] + .5 + .55 * rM[1], MM[2] + .5 + .55 * rM[2]],
        [0 === rM[0] ? .4 : .02, 0 === rM[1] ? .4 : .02, 0 === rM[2] ? .4 : .02]
      ]
    }
    class vJ {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(MM, rM, iM, OM) {
        const SM = [],
          jM = new Set;
        for (const QM of rM) {
          var aM, PM, nM;
          const {
            box: rM
          } = QM;
          if ("reactor" !== QM.kind || QM.level <= 0 || (rM.ctrl[0] - iM[0]) ** 2 + (rM.ctrl[1] - iM[1]) ** 2 + (rM.ctrl[2] - iM[2]) ** 2 > 576) continue;
          const zM = fJ(rM);
          jM.add(zM);
          let LM = this.spots.get(zM);
          if ((!LM || OM - LM.at > 3e3) && (LM = {
              at: OM,
              spots: YJ(MM, rM),
              glass: NJ(MM, rM)
            }, this.spots.set(zM, LM)), 0 === LM.spots.length && 0 === LM.glass.length) continue;
          const mM = this.sparking.find((MM => MM.key === zM));
          SM.push({
            key: zM,
            level: QM.level,
            spots: LM.spots,
            glass: LM.glass,
            budget: null !== (aM = null === mM || void 0 === mM ? void 0 : mM.budget) && void 0 !== aM ? aM : 0,
            cursor: null !== (PM = null === mM || void 0 === mM ? void 0 : mM.cursor) && void 0 !== PM ? PM : 0,
            glassBudget: null !== (nM = null === mM || void 0 === mM ? void 0 : mM.glassBudget) && void 0 !== nM ? nM : 0
          })
        }
        for (const QM of this.spots.keys()) jM.has(QM) || this.spots.delete(QM);
        this.sparking = SM
      }
      emit(MM, rM, iM) {
        var OM;
        if (0 === this.sparking.length || !MM.particlesEnabled() || iM === this.lastFrame) return;
        this.lastFrame = iM;
        let SM = 0,
          jM = 0;
        for (const hM of this.sparking) SM += ZJ(hM), jM += oJ(hM);
        const aM = SM > 8 ? 8 / SM : 1,
          PM = jM > 6 ? 6 / jM : 1;
        let nM, QM = null,
          zM = null;
        for (const hM of this.sparking) hM.budget = Math.min(hM.budget + ZJ(hM) * aM * rM, 2), hM.budget >= 1 && (!QM || hM.budget > QM.budget) && (QM = hM), hM.glassBudget = Math.min(hM.glassBudget + oJ(hM) * PM * rM, 2), hM.glassBudget >= 1 && (!zM || hM.glassBudget > zM.glassBudget) && (zM = hM);
        if (QM) QM.budget--, nM = QM.spots[QM.cursor++ % QM.spots.length];
        else {
          if (!zM) return;
          zM.glassBudget--, nM = zM.glass[Math.floor(Math.random() * zM.glass.length)]
        }
        const [LM, mM] = nM, HM = null !== (OM = this.emitter) && void 0 !== OM ? OM : this.create(MM, LM, mM);
        HM.moveTo(LM, mM), HM.emit(DJ.count)
      }
      dispose() {
        var MM;
        null === (MM = this.emitter) || void 0 === MM || MM.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(MM, rM, iM) {
        const OM = Math.ceil(14 * DJ.count * DJ.life[1]) + DJ.count;
        return this.emitter = MM.createParticles(pJ(DJ, OM), {
          pos: rM,
          half: iM
        }), this.emitter
      }
    }
    const FJ = [2, 3.2],
      BJ = 1 / 3,
      XJ = 1 / .6,
      IJ = {
        texture: uJ,
        vL: Math.ceil(18 * FJ[1]) + 4,
        minLifeTime: FJ[0] / XJ,
        maxLifeTime: FJ[1] / XJ,
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
        blendMode: pP.d.Standard
      };
    class KJ {
      constructor(MM) {
        this.plans = MM, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new vJ, this.frame = 0, this.outline = new EJ(MM)
      }
      onAfterRender(MM, rM, iM) {
        const OM = performance.now(),
          SM = 0 === this.lastMs ? 0 : Math.min(OM - this.lastMs, 250) / 1e3;
        if (this.lastMs = OM, this.outline.fade(MM, OM), this.puff(MM, SM, iM), this.sparks.emit(MM, SM, this.frame++), OM - this.lastCheckMs < 150) return;
        this.lastCheckMs = OM;
        const jM = this.plans.all().filter((MM => MM.formed && qJ(MM.box.ctrl, iM) <= 4096));
        this.plumes = jM.filter((MM => "reactor" === MM.kind && MM.level > 0)).map((MM => ({
          box: MM.box,
          level: MM.level
        }))), this.updateHums(MM, rM, jM, iM), this.sparks.update(MM, jM, iM, OM), this.chimeFormed(MM, rM, jM, OM)
      }
      dispose(MM) {
        var rM;
        this.outline.dispose(MM), null === (rM = this.steam) || void 0 === rM || rM.dispose(), this.steam = null, this.sparks.dispose();
        for (const iM of this.hums.values()) iM.stop();
        this.hums.clear()
      }
      chimeFormed(MM, rM, iM, OM) {
        const SM = this.outline.check(MM, iM, OM);
        SM && MM.playSound(rM, "exp_levelup", .6, 1, {
          kS: [SM.box.ctrl[0] + .5, SM.box.ctrl[1], SM.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(MM, rM, iM) {
        const OM = this.plumes;
        if (0 === OM.length || !MM.particlesEnabled()) return void(this.plumeBudget = 0);
        const SM = OM.reduce(((MM, rM) => MM + 3 * rM.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + SM * rM, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let jM = this.plumeCursor % (SM / 3);
        this.plumeCursor++;
        let aM = OM[0];
        for (const LM of OM) {
          if (jM < LM.level) {
            aM = LM;
            break
          }
          jM -= LM.level
        }
        const {
          lo: PM,
          hi: nM
        } = Rn(aM.box);
        if (function(MM, rM, iM) {
            const OM = Math.max(MM[0] - iM[0], 0, iM[0] - rM[0]),
              SM = Math.max(MM[2] - iM[2], 0, iM[2] - rM[2]);
            return Math.hypot(OM, iM[1] - rM[1], SM)
          }(PM, nM, iM) < 6 && Math.random() > BJ) return;
        const QM = [(PM[0] + nM[0]) / 2, nM[1] + .05, (PM[2] + nM[2]) / 2],
          zM = [(nM[0] - PM[0]) / 2 - .5, .05, (nM[2] - PM[2]) / 2 - .5];
        this.steam ??= MM.createParticles(IJ, {
          pos: QM,
          half: zM
        }), this.steam.moveTo(QM, zM), this.steam.emit(1)
      }
      updateHums(MM, rM, iM, OM) {
        const SM = new Map;
        for (const aM of iM) "reactor" === aM.kind && aM.level > 0 && qJ(aM.box.ctrl, OM) <= 576 && SM.set(`${jM=aM.box.ctrl,`${jM[0]},${jM[1]},${jM[2]}`}:${aM.level}`, aM);
        var jM;
        for (const [aM, PM] of this.hums) SM.has(aM) || (PM.stop(), this.hums.delete(aM));
        for (const [aM, PM] of SM) {
          if (this.hums.has(aM)) continue;
          const {
            lo: iM,
            hi: OM
          } = Rn(PM.box), SM = [(iM[0] + OM[0]) / 2, iM[1], (iM[2] + OM[2]) / 2], jM = MM.playSound(rM, "rocketEngineLoop", .08 + .06 * PM.level, .55, {
            kS: SM,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          jM && this.hums.set(aM, jM)
        }
      }
    }

    function qJ(MM, rM) {
      return (MM[0] - rM[0]) ** 2 + (MM[1] - rM[1]) ** 2 + (MM[2] - rM[2]) ** 2
    }
    class TJ {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      TE(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const OM = [MM.baf2BombAt[0], MM.baf2BombAt[1], MM.baf2BombAt[2]],
          SM = MM.baf2BombR;
        if (MM.baf2BombBoom) {
          const MM = Math.hypot(rM[0] - OM[0], rM[1] - OM[1], rM[2] - OM[2]);
          this.Tz({
            fuse: null,
            blast: {
              at: OM,
              r: SM,
              receivedAt: iM,
              distance: MM,
              flash: MM <= 3 * SM
            }
          })
        } else this.Tz({
          ...this.snapshot,
          fuse: MM.baf2BombMs > 0 ? {
            at: OM,
            r: SM,
            endsAt: iM + MM.baf2BombMs
          } : null
        })
      }
      get() {
        return this.snapshot
      }
      subscribe(MM) {
        return this.listeners.add(MM), () => {
          this.listeners.delete(MM)
        }
      }
      dispose() {
        this.listeners.clear(), this.snapshot = {
          fuse: null,
          blast: null
        }
      }
      Tz(MM) {
        this.snapshot = MM;
        for (const rM of this.listeners) rM()
      }
    }
    const VJ = (0, OM.memo)((function(MM) {
      var rM;
      let {
        store: iM
      } = MM;
      const {
        t: SM
      } = (0, tS.A)(), [jM, aM] = (0, OM.useState)((() => iM.get())), [PM, nM] = (0, OM.useState)((() => performance.now()));
      (0, OM.useEffect)((() => (aM(iM.get()), iM.subscribe((() => {
        aM(iM.get()), nM(performance.now())
      })))), [iM]);
      const {
        fuse: QM,
        blast: zM
      } = jM;
      (0, OM.useEffect)((() => {
        if (!QM) return;
        const MM = setInterval((() => {
          nM(performance.now())
        }), 250);
        return () => {
          clearInterval(MM)
        }
      }), [QM]);
      const [LM, mM] = (0, OM.useState)(!1);
      (0, OM.useEffect)((() => {
        if (null === zM || void 0 === zM || !zM.flash) return;
        mM(!0);
        const MM = setTimeout((() => {
          mM(!1)
        }), 2500);
        return () => {
          clearTimeout(MM)
        }
      }), [zM]);
      const HM = QM ? function(MM, rM) {
        return MM.endsAt <= rM ? 0 : Math.ceil((MM.endsAt - rM) / 1e3)
      }(QM, PM) : 0;
      return (0, Gj.jsxs)(Gj.Fragment, {
        children: [HM > 0 && (0, Gj.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: SM("buildAFactory2Game:bombCountdown", {
            amount: String(HM),
            radius: String(null !== (rM = null === QM || void 0 === QM ? void 0 : QM.r) && void 0 !== rM ? rM : 0)
          })
        }), LM && (0, Gj.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function cJ(MM) {
      const rM = Math.min(4, Math.max(1, MM / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * MM / 4)),
        capSpread: Math.min(5 * MM / 8, 24 * rM),
        capThick: 6 * rM,
        stemHalfWidth: 3 * rM,
        puffScale: rM
      }
    }
    class Md {
      constructor() {
        this.sQ = !1
      }
      hold(MM) {
        MM.getCameraFar() < 1e3 && (MM.setCameraFar(1e3), this.sQ = !0)
      }
      release(MM) {
        this.sQ && (this.sQ = !1, MM.setCameraFar(null))
      }
    }
    const rd = 1 / .6,
      Od = [.2, .1, .2],
      Sd = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      jd = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: pP.d.Standard,
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
      Pd = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: pP.d.Standard,
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
      nd = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: pP.d.Standard,
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
      Qd = {
        texture: uJ,
        vL: Math.ceil(120) + 4,
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
        blendMode: pP.d.Add
      };
    class zd {
      constructor(MM) {
        this.store = MM, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new Md, this.timers = []
      }
      onAfterRender(MM, rM) {
        const iM = performance.now(),
          OM = 0 === this.lastMs ? 0 : Math.min(iM - this.lastMs, 250) / 1e3;
        this.lastMs = iM;
        const {
          fuse: SM,
          blast: jM
        } = this.store.get();
        null !== jM && jM !== this.shownBlast && (this.shownBlast = jM, this.startBlast(MM, rM, jM, iM));
        const aM = MM.particlesEnabled();
        null !== SM && SM.endsAt > iM && aM ? this.emitBeacon(MM, SM, OM, iM) : this.beaconBudget = 0, null !== this.cloud && (iM - this.cloud.startMs > 33e3 ? this.disposeCloud(MM) : (this.far.hold(MM), aM && this.emitCloud(MM, OM, iM)))
      }
      dispose(MM) {
        var rM;
        null === (rM = this.beacon) || void 0 === rM || rM.dispose(), this.beacon = null, this.disposeCloud(MM);
        for (const iM of this.timers) clearTimeout(iM);
        this.timers.length = 0
      }
      emitBeacon(MM, rM, iM, OM) {
        const SM = rM.endsAt - OM < 5e3 ? 350 : 1e3,
          jM = .5 + .5 * Math.sin(2 * Math.PI * OM / SM);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * jM * iM, 4), this.beaconBudget < 1) return;
        const aM = Math.floor(this.beaconBudget);
        this.beaconBudget -= aM;
        const [PM, nM, QM] = rM.at, zM = [PM + .5, nM + 1.1, QM + .5];
        this.beacon ??= MM.createParticles(Qd, {
          pos: zM,
          half: Od
        }), this.beacon.moveTo(zM), this.beacon.emit(aM)
      }
      startBlast(MM, rM, iM, OM) {
        var SM;
        null === (SM = this.beacon) || void 0 === SM || SM.dispose(), this.beacon = null, this.disposeCloud(MM);
        const jM = (0, uP.isMobile)() ? .5 : 1;
        this.streams = [jd, Pd, nd].map((MM => {
          const rM = Math.round(MM.count * jM);
          return {
            spec: MM,
            particles: null,
            rate: rM / ((MM.toMs - MM.fromMs) / 1e3),
            budget: 0,
            left: rM
          }
        })), this.cloud = {
          blast: iM,
          startMs: OM
        };
        const aM = Math.max(.25, 1 - iM.distance / (6 * iM.r)),
          PM = iM.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [iM, OM, SM] of Sd) md(MM, rM, iM, aM * OM, SM)
        }), PM))
      }
      emitCloud(MM, rM, iM) {
        const {
          blast: OM,
          startMs: SM
        } = this.cloud, jM = iM - SM, [aM, PM, nM] = OM.at, QM = cJ(OM.r);
        for (const zM of this.streams) {
          const {
            spec: iM
          } = zM;
          if (zM.left <= 0 || jM < iM.fromMs) continue;
          zM.budget += zM.rate * rM;
          const SM = Math.min(Math.floor(zM.budget), zM.left);
          if (SM < 1) continue;
          zM.budget -= SM, zM.left -= SM;
          const LM = zM.particles ??= this.createStream(MM, iM, OM);
          if (iM === jd) {
            const MM = QM.stemHalfWidth;
            LM.moveTo([aM, PM + 1, nM], [MM, 1, MM])
          } else if (iM === Pd) {
            const MM = QM.capSpread * Math.min(1, (jM - iM.fromMs) / 3e3),
              rM = Math.sqrt(Math.random()),
              OM = 2 * Math.random() * Math.PI,
              SM = Math.cos(OM) * rM,
              zM = Math.sin(OM) * rM,
              mM = aM + SM * MM,
              HM = nM + zM * MM,
              hM = QM.capThick,
              JM = PM + QM.capHeight + hM * (1 - rM * rM) * 2;
            LM.setDirections([.7 * SM, .05, .7 * zM], [SM, .2, zM]), LM.moveTo([mM, JM, HM], [hM, hM, hM])
          } else {
            this.ringAngle += 2.39996;
            const MM = Math.cos(this.ringAngle),
              rM = Math.sin(this.ringAngle);
            LM.setDirections([MM, .05, rM], [MM, .1, rM]), LM.moveTo([aM + 2 * MM, PM + .5, nM + 2 * rM], [0, .5, 0])
          }
          LM.emit(SM)
        }
      }
      createStream(MM, rM, iM) {
        const {
          r: OM
        } = iM, SM = Math.max(rM.life[0], OM / 25), jM = rM === nd ? [.9 * SM, SM] : rM.life, aM = cJ(OM), PM = rM === nd ? 1 : aM.puffScale, nM = {
          texture: uJ,
          vL: rM.count + 4,
          minLifeTime: jM[0] / rd,
          maxLifeTime: jM[1] / rd,
          minSize: rM.size[0] * PM,
          maxSize: rM.size[1] * PM,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, rM.gravity * rd * rd, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: rM.from[0],
            maxColor: rM.from[1]
          }, {
            timeFraction: .6,
            minColor: Ld(rM.from[0], rM.to[0]),
            maxColor: Ld(rM.from[1], rM.to[1])
          }, {
            timeFraction: 1,
            minColor: rM.to[0],
            maxColor: rM.to[1]
          }],
          blendMode: rM.blend
        };
        if (rM === jd) {
          const MM = aM.capHeight / ((jM[0] + jM[1]) / 2);
          nM.minEmitPower = .9 * MM * rd, nM.maxEmitPower = 1.05 * MM * rd, nM.dir1 = [-.1, 1, -.1], nM.dir2 = [.1, 1, .1]
        } else rM === Pd ? (nM.minEmitPower = 1.2, nM.maxEmitPower = 2, nM.dir1 = [-1, .05, -1], nM.dir2 = [1, .2, 1]) : (nM.minEmitPower = 39.583333333333336, nM.maxEmitPower = 41.66666666666667, nM.dir1 = [1, 0, 0], nM.dir2 = [1, 0, 0]);
        return MM.createParticles(nM, {
          pos: iM.at
        })
      }
      disposeCloud(MM) {
        for (const iM of this.streams) {
          var rM;
          null === (rM = iM.particles) || void 0 === rM || rM.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(MM)
      }
    }

    function Ld(MM, rM) {
      return [(MM[0] + rM[0]) / 2, (MM[1] + rM[1]) / 2, (MM[2] + rM[2]) / 2, .75 * MM[3]]
    }

    function md(MM, rM, iM, OM, SM) {
      try {
        MM.playSound(rM, iM, OM, SM)
      } catch (jM) {
        console.error(jM)
      }
    }
    const Hd = {
        vL: 720,
        perS: 100
      },
      hd = {
        vL: 320,
        perS: 44
      };
    class Jd {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(MM, rM) {
        this.zone = {
          centre: [...MM.centre],
          r: MM.r,
          band: MM.band ? [MM.band[0], MM.band[1]] : void 0
        }, this.endsAt = rM
      }
      stop() {
        this.zone = null
      }
      TE(MM, rM) {
        const {
          baf2FalloutMs: iM,
          baf2FalloutAt: OM,
          baf2FalloutR: SM,
          baf2FalloutY: jM
        } = MM;
        iM > 0 && OM && void 0 !== SM ? this.start({
          centre: OM,
          r: SM,
          band: jM
        }, rM + iM) : this.stop()
      }
      perS(MM, rM, iM) {
        const OM = this.zone;
        if (!OM) return 0;
        const SM = this.endsAt - MM;
        return SM <= 0 ? (this.zone = null, 0) : OM.band && (rM[1] < OM.band[0] || rM[1] > OM.band[1]) || Math.hypot(rM[0] - OM.centre[0], rM[2] - OM.centre[2]) > OM.r ? 0 : iM.perS * Math.min(1, SM / 5e3)
      }
    }
    const dd = [5, 7],
      yd = [24, 8, 24],
      ld = .5,
      Ed = 1 / .6,
      Ud = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class Gd {
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, uP.isMobile)();
        this.state = new Jd, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(MM) {
          return MM ? hd : Hd
        }(MM)
      }
      startFallout(MM, rM) {
        this.state.start(MM, rM)
      }
      stopFallout() {
        this.state.stop()
      }
      TE(MM) {
        this.state.TE(MM, performance.now())
      }
      onAfterRender(MM, rM) {
        var iM;
        const OM = performance.now(),
          SM = 0 === this.lastMs ? 0 : Math.min(OM - this.lastMs, 250) / 1e3;
        this.lastMs = OM;
        const jM = this.state.perS(OM, rM, this.tier);
        if (jM <= 0 || !MM.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + jM * SM, jM / 4);
        const aM = Math.floor(this.budget);
        if (aM < 1) return;
        this.budget -= aM;
        const PM = this.at;
        PM[0] = rM[0], PM[1] = rM[1] + 12, PM[2] = rM[2];
        const nM = null !== (iM = this.systems) && void 0 !== iM ? iM : this.create(MM, PM),
          QM = this.amounts;
        QM[0] = 0, QM[1] = 0;
        for (let zM = 0; zM < aM; zM++) QM[Math.random() < .3 ? 1 : 0]++;
        for (let zM = 0; zM < nM.length; zM++) QM[zM] > 0 && (nM[zM].moveTo(PM, yd), nM[zM].emit(QM[zM]))
      }
      dispose() {
        for (const rM of null !== (MM = this.systems) && void 0 !== MM ? MM : []) {
          var MM;
          rM.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(MM, rM) {
        return this.systems = Ud.map((iM => {
          let {
            rgba: [OM, SM, jM, aM],
            share: PM
          } = iM;
          const nM = {
            texture: "square_particle",
            vL: Math.ceil(this.tier.vL * PM),
            minLifeTime: dd[0] / Ed,
            maxLifeTime: dd[1] / Ed,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [ld, -1, ld],
            colorGradients: [{
              timeFraction: 0,
              minColor: [OM, SM, jM, 0]
            }, {
              timeFraction: .15,
              minColor: [OM, SM, jM, aM]
            }, {
              timeFraction: .8,
              minColor: [OM, SM, jM, aM]
            }, {
              timeFraction: 1,
              minColor: [OM, SM, jM, 0]
            }],
            blendMode: pP.d.Standard
          };
          return MM.createParticles(nM, {
            pos: rM,
            half: yd
          })
        })), this.systems
      }
    }
    const Cd = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function ed(MM) {
      const rM = /\|rot(\d)/.exec(MM);
      return Cd[rM ? Number(rM[1]) : 1]
    }
    var bd = iM(620),
      wd = iM(39471);
    const td = new Set(bd.p);

    function gd(MM) {
      if (-2 !== MM.count) return null;
      const rM = vM(MM.item);
      return null !== rM && td.has(rM) ? rM : null
    }

    function ud(MM) {
      const {
        width: rM,
        height: iM
      } = (0, wd.d)(MM).hitBoxDimensions;
      return .55 / Math.max(rM, iM)
    }

    function Rd(MM, rM, iM) {
      if (!iM) return !1;
      const OM = MM[0] + .5 - rM[0],
        SM = MM[1] + .5 - rM[1],
        jM = MM[2] + .5 - rM[2];
      return OM * OM + SM * SM + jM * jM <= 576
    }

    function pd(MM, rM) {
      return Math.atan2(MM[0], MM[2]) + Math.PI + rM
    }

    function Wd(MM, rM) {
      const iM = 2 * Math.PI;
      return (MM + iM * rM / 1e4) % iM
    }
    class sd {
      constructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = MM, this.now = rM, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = MM.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(MM, rM) {
        if (0 === this.farms.size) return;
        const iM = this.now(),
          OM = Number.isNaN(this.frameMs) ? 0 : Math.min(iM - this.frameMs, 100);
        this.frameMs = iM, iM - this.checkedMs >= 1e3 && (this.checkedMs = iM, this.check(MM, rM));
        for (const SM of this.farms.values()) SM.shown && SM.running && null !== SM.model && OM > 0 && (SM.spin = Wd(SM.spin, OM), SM.model.setPose(SM.feet, pd(SM.front, SM.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const MM of this.farms.values()) this.drop(MM);
        this.farms.clear()
      }
      sync() {
        const MM = new Set;
        for (const rM of this.labels.list()) {
          const iM = gd(rM);
          if (null === iM) continue;
          MM.add(rM.key);
          const OM = this.farms.get(rM.key);
          if ((null === OM || void 0 === OM ? void 0 : OM.mob) === iM) continue;
          OM && this.drop(OM);
          const [SM, jM, aM] = rM.pos;
          this.farms.set(rM.key, {
            pos: rM.pos,
            feet: [SM + .5, jM + 1, aM + .5],
            mob: iM,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [rM, iM] of this.farms) MM.has(rM) || (this.drop(iM), this.farms.delete(rM));
        this.checkedMs = -1 / 0
      }
      check(MM, rM) {
        for (const iM of this.farms.values()) {
          const [OM, SM, jM] = iM.pos, aM = Dh(MM, iM.pos);
          null !== aM && si(aM) === kM && Rd(iM.pos, rM, "Air" === Dh(MM, [OM, SM + 1, jM])) ? (iM.running = aM.endsWith("|Running"), iM.front = ed(aM), null === iM.model && (iM.model = MM.createMobModel(iM.mob, ud(iM.mob)), null === iM.model) || (iM.model.setPose(iM.feet, pd(iM.front, iM.spin)), iM.shown || (iM.model.setVisible(!0), iM.shown = !0))) : (iM.shown && null !== iM.model && iM.model.setVisible(!1), iM.shown = !1)
        }
      }
      drop(MM) {
        var rM;
        null === (rM = MM.model) || void 0 === rM || rM.dispose(), MM.model = null, MM.shown = !1
      }
    }
    class Dd {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(MM) {
        var rM;
        this.island = MM.baf2ColIsland, this.islandSite = (rM = MM.baf2ColSite) && 8 === rM.length ? {
          spawnXZ: [rM[0], rM[1]],
          coreXZ: [rM[2], rM[3]],
          minXZ: [rM[4], rM[5]],
          maxXZ: [rM[6], rM[7]]
        } : null, this.views = MM.baf2ColList.map((MM => ({
          entry: aS(MM)
        }))), this.beamsVersion++, this.emit()
      }
      onStatus(MM) {
        this.status = MM, this.emit()
      }
      onOpen(MM) {
        this.openHeld = MM
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
        return this.views.map((MM => MM.entry))
      }
      entryAtRoot(MM) {
        var rM;
        return null === (rM = this.views.find((rM => {
          let {
            entry: iM
          } = rM;
          return iM.focus[0] === MM[0] && iM.focus[1] === MM[1] + 1 && iM.focus[2] === MM[2]
        }))) || void 0 === rM ? void 0 : rM.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(MM, rM) {
        return fn(this.entries(), MM, rM)
      }
      lookSource() {
        return {
          handles: MM => hO(MM) >= 0 || JO(MM),
          line: (MM, rM) => this.lookLine(MM, rM),
          version: () => this.beamsVersion
        }
      }
      subscribe(MM) {
        return this.listeners.add(MM), () => {
          this.listeners.delete(MM)
        }
      }
      dispose() {
        this.listeners.clear(), this.island = null, this.views = [], this.status = null, this.openHeld = null
      }
      emit() {
        for (const MM of this.listeners) MM()
      }
    }
    const kd = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((MM => MM / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((MM => [MM, MM + 1, MM + 2, MM, MM + 2, MM + 3]))
    };

    function Zd(MM, rM, iM, OM, SM, jM, aM) {
      let PM = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const nM = Math.cos(PM),
        QM = Math.sin(PM),
        zM = MM.positions.length / 3,
        {
          positions: LM,
          indices: mM
        } = kd;
      for (let HM = 0; HM < LM.length; HM += 3) {
        const PM = LM[HM] * SM,
          zM = LM[HM + 2] * aM;
        MM.positions.push(rM + PM * nM + zM * QM, iM + LM[HM + 1] * jM, OM - PM * QM + zM * nM)
      }
      for (const HM of mM) MM.indices.push(zM + HM)
    }

    function od(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return rM < 1 ? {
        rgb: MM,
        alpha: rM
      } : {
        rgb: MM,
        alpha: 1,
        opaque: !0
      }
    }
    class fd {
      constructor(MM, rM) {
        this.style = MM, this.perSource = rM, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(MM) {
        this.sources = MM, 0 === MM.length && (this.budget = 0)
      }
      bL(MM, rM, iM) {
        const OM = this.sources.length;
        if (0 !== OM) {
          var SM, jM;
          this.budget = Math.min(this.budget + (SM = OM, jM = this.perSource, Math.min(SM * jM, cn) * rM), 2);
          for (let rM = 0; rM < OM && this.budget >= 1; rM++) {
            const rM = this.sources[this.cursor % OM];
            this.cursor = (this.cursor + 1) % OM;
            if (!(Math.max(Math.abs(rM.x - iM[0]), Math.abs(rM.y - iM[1]), Math.abs(rM.z - iM[2])) > 32)) return this.puff(MM, rM), void this.budget--
          }
        }
      }
      dispose() {
        var MM;
        null === (MM = this.particles) || void 0 === MM || MM.dispose(), this.particles = null, this.sources = []
      }
      puff(MM, rM) {
        let {
          x: iM,
          y: OM,
          z: SM,
          h: jM,
          faces: aM
        } = rM;
        const PM = function(MM, rM, iM, OM, SM) {
            const [jM, aM, PM] = SM[Math.floor(Math.random() * SM.length)], nM = .04, QM = (MM, rM, iM) => MM > 0 ? rM + iM + nM : MM < 0 ? rM - nM : rM + .1, zM = (MM, rM, iM) => MM > 0 ? rM + iM + nM : MM < 0 ? rM - nM : rM + iM - .1, LM = [QM(jM, MM, 1), QM(aM, rM, OM), QM(PM, iM, 1)], mM = [zM(jM, MM, 1), zM(aM, rM, OM), zM(PM, iM, 1)];
            return {
              pos: [(LM[0] + mM[0]) / 2, (LM[1] + mM[1]) / 2, (LM[2] + mM[2]) / 2],
              half: [(mM[0] - LM[0]) / 2, (mM[1] - LM[1]) / 2, (mM[2] - LM[2]) / 2],
              out: [jM, aM, PM]
            }
          }(iM, OM, SM, jM, aM),
          {
            style: nM
          } = this,
          QM = this.particles ??= MM.createParticles(pJ(nM, Math.ceil(nM.count * cn * nM.life[1]) + 4), PM);
        QM.moveTo(PM.pos, PM.half);
        const [zM, LM, mM] = PM.out, HM = nM.spread;
        QM.setDirections([zM - HM, .6 + LM, mM - HM], [zM + HM, 1 + LM, mM + HM]), QM.emit(nM.count)
      }
    }
    const Yd = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class Nd {
      constructor() {
        this.green = new fd(rQ.green, Tn), this.pink = new fd(rQ.pink, Vn), this.colliders = [], this.lastMs = 0
      }
      setSources(MM) {
        this.colliders = MM;
        const rM = [],
          iM = [];
        for (const OM of MM) {
          const [MM, SM, jM] = OM.focus;
          rM.push({
            x: MM,
            y: SM - 1,
            z: jM,
            h: 2,
            faces: Yd
          });
          for (let rM = 0; rM < 4; rM++) {
            if (!OM.live[rM]) continue;
            const [MM, SM, jM] = lO(OM.focus, rM, nO.LASER_D), [aM, , PM] = yO[rM], nM = Yd.filter((MM => MM[0] !== aM || MM[2] !== PM || 0 !== MM[1]));
            iM.push({
              x: MM,
              y: SM,
              z: jM,
              h: 1,
              faces: nM
            })
          }
        }
        this.green.setSources(rM), this.pink.setSources(iM)
      }
      onAfterRender(MM) {
        const rM = performance.now(),
          iM = 0 === this.lastMs ? 0 : Math.min(rM - this.lastMs, 250) / 1e3;
        if (this.lastMs = rM, 0 === this.colliders.length || !MM.particlesEnabled()) return;
        const OM = MM.getCameraPosition();
        this.green.bL(MM, iM, OM), this.pink.bL(MM, iM, OM)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const Ad = 1.04,
      xd = od([1, 120 / 255, 220 / 255]),
      vd = od([1, .25, .25], .35);
    class Fd {
      constructor(MM) {
        this.store = MM, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new Nd
      }
      onAfterRender(MM) {
        this.store.version() !== this.builtVersion && this.rebuild(MM);
        const rM = performance.now();
        for (const iM of this.beams) {
          const OM = 1 + .35 * Math.sin(rM / 700 * Math.PI * 2 + iM.phase);
          MM.setGameMesh(iM.mesh, {
            scale: [iM.alongX ? 1 : OM, OM, iM.alongX ? OM : 1]
          })
        }
        this.glow.onAfterRender(MM)
      }
      dispose(MM) {
        this.clear(MM), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(MM) {
        this.clear(MM), this.builtVersion = this.store.version();
        const rM = [];
        for (const {
            entry: iM
          }
          of this.store.colliders()) iM.on && iM.live.some(Boolean) && (this.addBeams(MM, iM), rM.push(iM)), iM.blockers.length > 0 && this.addMarkers(MM, iM);
        this.glow.setSources(rM)
      }
      addBeams(MM, rM) {
        const [iM, OM, SM] = rM.focus, jM = qn - .25, aM = (.25 + qn) / 2;
        for (let PM = 0; PM < 4; PM++) {
          if (!rM.live[PM]) continue;
          const [nM, , QM] = yO[PM], zM = 0 !== nM, LM = {
            positions: [],
            indices: []
          };
          Zd(LM, 0, 0, 0, zM ? jM : .2, .2, zM ? .2 : jM);
          const mM = [iM + .5 + nM * aM, OM + .5, SM + .5 + QM * aM],
            HM = MM.createGameMesh(LM, xd, mM);
          this.meshes.push(HM), this.beams.push({
            mesh: HM,
            alongX: zM,
            phase: PM * Math.PI / 2
          })
        }
      }
      addMarkers(MM, rM) {
        const iM = rM.blockers[0],
          OM = {
            positions: [],
            indices: []
          };
        for (const [SM, jM, aM] of rM.blockers) Zd(OM, SM - iM[0] + .5, jM - iM[1] + .5, aM - iM[2] + .5, Ad, Ad, Ad);
        this.meshes.push(MM.createGameMesh(OM, vd, iM))
      }
      clear(MM) {
        for (const rM of this.meshes) MM.disposeGameMesh(rM);
        this.meshes = [], this.beams = []
      }
    }
    const Bd = [.56, .83, 1],
      Xd = [1, .73, .08],
      Id = [1, .25, .25],
      Kd = [.85, .85, .85],
      qd = [.3, .45, .6];

    function Td(MM, rM, iM, OM) {
      let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const aM = SM / 2,
        PM = SM + jM;
      for (const nM of [-aM, aM])
        for (const SM of [-aM, aM]) Zd(MM, rM, iM + nM, OM + SM, PM, jM, jM), Zd(MM, rM + nM, iM, OM + SM, jM, PM, jM), Zd(MM, rM + nM, iM + SM, OM, jM, jM, PM)
    }

    function Vd(MM) {
      return rM => MM.isBlockInLoadedChunk(rM[0], rM[1], rM[2]) && 0 === MM.getBlockId(rM[0], rM[1], rM[2])
    }

    function cd(MM) {
      return MM.map((MM => {
        let {
          free: rM,
          blocked: iM,
          gaps: OM,
          supports: SM
        } = MM;
        return `${rM.join(";")}|${iM.join(";")}|${OM.join(";")}|${SM.join(";")}`
      })).join("/")
    }

    function My(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const jM = rM[0],
        aM = {
          positions: [],
          indices: []
        };
      for (const [PM, nM, QM] of rM) Td(aM, PM - jM[0] + .5, nM - jM[1] + .5, QM - jM[2] + .5, OM, SM);
      return MM.createGameMesh(aM, iM, jM)
    }
    class ry {
      constructor(MM) {
        this.store = MM, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(MM, rM, iM) {
        var OM;
        const SM = null === (OM = MM.TrM(rM)) || void 0 === OM ? void 0 : OM.name;
        if (SM !== zO && SM !== QO) return void("" !== this.shownKey && this.show(MM, "", []));
        const jM = performance.now();
        if (jM - this.lastCheckMs >= 200 && (this.lastCheckMs = jM, SM === zO ? this.check(MM, iM) : this.preview(MM, iM)), this.pulses.length > 0) {
          const rM = 1 + .12 * Math.sin(jM / 1e3 * 1.25 * Math.PI * 2),
            iM = [rM, rM, rM];
          for (const OM of this.pulses) MM.setGameMesh(OM, {
            scale: iM
          })
        }
      }
      dispose(MM) {
        this.clear(MM), this.shownKey = ""
      }
      check(MM, rM) {
        const iM = Vd(MM),
          OM = [];
        for (const {
            entry: jM
          }
          of this.store.colliders()) {
          jM.focus.every(((MM, iM) => Math.abs(MM + .5 - rM[iM]) <= nO.GHOST_REACH)) && OM.push(Kn(jM, iM))
        }
        const SM = cd(OM);
        SM !== this.shownKey && this.show(MM, SM, OM)
      }
      preview(MM, rM) {
        const iM = MM.getTargetedBlock(),
          OM = iM ? [iM.zd[0], iM.zd[1], iM.zd[2]] : null,
          SM = null !== OM && OM.every(((MM, iM) => Math.abs(MM + .5 - rM[iM]) <= 8)),
          jM = this.store.site(),
          aM = SM && jM ? function(MM, rM, iM) {
            const OM = dO(MM);
            if (!OM.every(rM)) return null;
            const SM = GO(MM, iM);
            return {
              column: OM,
              spots: Kn({
                focus: OM[1],
                lasers: [!1, !1, !1, !1],
                open: SM,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, rM),
              fits: SM.filter(Boolean).length >= nO.MIN_SPOTS
            }
          }(OM, Vd(MM), jM) : null,
          PM = aM ? [aM.spots] : [],
          nM = aM ? `preview ${OM.join(",")}|${aM.fits}|${cd(PM)}` : "";
        var QM, zM;
        nM !== this.shownKey && this.show(MM, nM, PM, null !== (QM = null === aM || void 0 === aM ? void 0 : aM.column) && void 0 !== QM ? QM : [], null === (zM = null === aM || void 0 === aM ? void 0 : aM.fits) || void 0 === zM || zM)
      }
      show(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          SM = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(MM), this.shownKey = rM, OM.length > 0 && this.meshes.push(My(MM, OM, od(SM ? Kd : Id)));
        for (const {
            free: jM,
            blocked: aM,
            gaps: PM,
            supports: nM
          }
          of iM) {
          for (const [rM, iM, OM] of jM) {
            const SM = {
              positions: [],
              indices: []
            };
            Td(SM, 0, 0, 0);
            const jM = MM.createGameMesh(SM, od(Bd), [rM + .5, iM + .5, OM + .5]);
            this.meshes.push(jM), this.pulses.push(jM)
          }
          aM.length > 0 && this.meshes.push(My(MM, aM, od(Xd))), PM.length > 0 && this.meshes.push(My(MM, PM, od(Id), 1.06, .07)), nM.length > 0 && this.meshes.push(My(MM, nM, od(qd)))
        }
      }
      clear(MM) {
        for (const rM of this.meshes) MM.disposeGameMesh(rM);
        this.meshes = [], this.pulses = []
      }
    }
    class iy {
      constructor() {
        this.stored = new Map, this.sQ = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(MM) {
        if (!MM.baf2TermOpen) return !1;
        MM.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [rM, iM] of MM.baf2TermItems) iM > 0 ? this.stored.set(rM, iM) : this.stored.delete(rM);
        if (MM.baf2TermHeld && (this.sQ = new Map(MM.baf2TermHeld)), this.pending = this.pending.filter((rM => rM.seq > MM.baf2TermAcked)), this.silos = MM.baf2TermSilos, this.readOnly = MM.baf2TermReadOnly, this.pocket = !0 === MM.baf2TermPocket, MM.baf2TermReset) this.resort();
        else {
          const MM = new Set(this.order);
          for (const rM of this.stored.keys()) MM.has(rM) || this.order.push(rM)
        }
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((MM, rM) => this.amount(rM) - this.amount(MM) || MM.localeCompare(rM))), this.changed()
      }
      take(MM, rM) {
        const iM = Pr(MM, this.amount(rM));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: rM,
          amount: iM,
          put: !1
        }), this.recents = [rM, ...this.recents.filter((MM => MM !== rM))].slice(0, 6), this.changed(), ir(this.seq, MM, rM)
      }
      put(MM, rM) {
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: rM,
          amount: Pr(MM, this.heldAmount(rM)),
          put: !0
        }), this.changed(), Or(this.seq, MM, rM)
      }
      putAll() {
        this.seq++;
        for (const MM of this.heldItems()) this.pending.push({
          seq: this.seq,
          item: MM,
          amount: this.heldAmount(MM),
          put: !0
        });
        return this.changed(), Sr(this.seq)
      }
      amount(MM) {
        var rM;
        let iM = null !== (rM = this.stored.get(MM)) && void 0 !== rM ? rM : 0;
        for (const OM of this.pending) OM.item === MM && (iM += OM.put ? OM.amount : -OM.amount);
        return Math.max(0, iM)
      }
      heldAmount(MM) {
        var rM;
        let iM = null !== (rM = this.sQ.get(MM)) && void 0 !== rM ? rM : 0;
        for (const OM of this.pending) OM.put && OM.item === MM && (iM -= OM.amount);
        return Math.max(0, iM)
      }
      heldItems() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return this.order.filter((rM => rM === MM || this.heldAmount(rM) > 0))
      }
      items() {
        return this.order.filter((MM => this.amount(MM) > 0))
      }
      recent() {
        return this.recents.filter((MM => this.amount(MM) > 0))
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
      subscribe(MM) {
        return this.listeners.add(MM), () => {
          this.listeners.delete(MM)
        }
      }
      changed() {
        this.version++;
        for (const MM of this.listeners) MM()
      }
    }
    var Oy = iM(39420);
    const Sy = {
      isBlock: MM => void 0 !== pM.k[MM],
      harvestType: MM => {
        var rM;
        return null === (rM = pM.k[MM]) || void 0 === rM ? void 0 : rM.harvestType
      },
      harvestLevel: MM => {
        var rM;
        return null === (rM = pM.k[MM]) || void 0 === rM ? void 0 : rM.harvestLevel
      },
      dropsNothing: MM => {
        var rM;
        return null === (null === (rM = pM.k[MM]) || void 0 === rM ? void 0 : rM.drops)
      },
      displayName: MM => {
        var rM;
        return null === (rM = Ka.k[MM]) || void 0 === rM ? void 0 : rM.displayName
      },
      description: MM => {
        var rM;
        return null === (rM = Ka.k[MM]) || void 0 === rM ? void 0 : rM.description
      },
      harvests: MM => {
        var rM;
        return null === (rM = Ka.k[MM]) || void 0 === rM ? void 0 : rM.harvests
      },
      level: MM => {
        var rM;
        return null === (rM = Ka.k[MM]) || void 0 === rM ? void 0 : rM.level
      }
    };

    function jy(MM, rM, iM) {
      return function(MM, rM, iM, OM) {
        var SM, jM;
        const aM = rM.split("|")[0],
          PM = MM.isBlock(rM) ? rM : MM.isBlock(aM) ? aM : null;
        if (null === PM || "rock" !== MM.harvestType(PM) || MM.dropsNothing(PM) && !fO.has(aM)) return null;
        const nM = iM && "rock" === MM.harvests(iM) ? null !== (SM = MM.level(iM)) && void 0 !== SM ? SM : 0 : null,
          QM = null !== (jM = null !== OM && void 0 !== OM ? OM : MM.harvestLevel(PM)) && void 0 !== jM ? jM : 0;
        return (null !== nM ? QM <= nM : 0 === MM.harvestLevel(PM)) ? null : uO(MM, QM)
      }(Sy, MM, rM, iM)
    }

    function ay(MM, rM) {
      return function(MM, rM, iM) {
        if (rM === gO[0]) return [(0, DM.Od)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, DM.L.whiteUiText)];
        const OM = iM.split("|")[0],
          SM = MM.isBlock(OM) ? MM.displayName(OM) : void 0,
          jM = "string" === typeof SM ? SM : SM && "translationKey" in SM ? `$t(${SM.translationKey})` : OM;
        return [(0, DM.Od)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: jM
          }
        }, DM.L.whiteUiText), (0, DM.Od)({
          translationKey: `item:${(0,DM.me)(rM)}`
        }, DM.L.yellowUiText)]
      }(Sy, MM, rM)
    }
    const Py = "buildAFactory2Game:";
    const ny = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Qy(MM) {
      return MM.endsWith(" Ore")
    }
    const zy = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      Ly = [],
      my = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: zy,
        plan: null,
        atomic: Ly
      },
      Hy = "buildAFactory2Game:",
      hy = new Set(["Splitter", "Sorting Gate"]),
      Jy = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class dy {
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = MM, this.planAt = rM, this.tierOf = iM, this.jP = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.sQ = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = my, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(MM, rM, iM) {
        var OM, SM, jM;
        let aM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const PM = null !== (OM = null === (SM = MM.TrM(rM)) || void 0 === SM ? void 0 : SM.name) && void 0 !== OM ? OM : null,
          nM = MM.isPlayerCrouching(rM),
          QM = 0 === iM ? null : this.resolve(MM, iM),
          zM = null !== QM && null !== aM && hy.has(QM.rootName) && function(MM, rM) {
            return Jy.some((iM => {
              let [OM, SM] = iM;
              const jM = MM.getBlockId(rM[0] + OM, rM[1], rM[2] + SM);
              return 0 !== jM && "Express Belt" === MM.getMetaInfo(jM).rootName
            }))
          }(MM, aM),
          LM = this.updatePlan(0 === iM ? null : aM),
          mM = this.tierOf(),
          HM = null === aM ? null : (0, Oy.i)(iM),
          hM = null !== HM && null !== aM && (0, Oy.m)(function(MM) {
            return (rM, iM, OM) => MM.getBlockId(rM, iM, OM)
          }(MM), aM[0], aM[1], aM[2], HM),
          JM = this.readAfloat(MM, iM, aM);
        if (iM === this.jP && hM === this.missesMaker && JM === this.afloat && PM === this.sQ && nM === this.crouching && zM === this.express && mM === this.tier && !LM && (!this.targetsLive || !this.liveMoved(aM))) return;
        this.jP = iM, this.missesMaker = hM, this.afloat = JM, this.sQ = PM, this.crouching = nM, this.express = zM;
        const dM = zM && QM ? function(MM) {
          if (null === MM.info) return null;
          return MM.express ??= {
            ...MM.info,
            detail: `${Hy}lookKeepsUpExpress`,
            detailItem: null
          }, MM.express
        }(QM) : null !== QM && hM && null !== HM ? this.besideMaker(QM, iM, HM) : null !== QM && JM ? this.hanging(QM) : null !== (jM = null === QM || void 0 === QM ? void 0 : QM.info) && void 0 !== jM ? jM : null;
        this.tier = mM;
        const yM = QM && dM ? function(MM, rM) {
          var iM, OM;
          const SM = pM.k[MM];
          if (!MM.endsWith(" Ore") || "rock" !== (null === SM || void 0 === SM ? void 0 : SM.harvestType) || 0 === SM.harvestLevel) return null;
          const jM = null !== (iM = SM.harvestLevel) && void 0 !== iM ? iM : 0,
            aM = rM ? Ka.k[rM] : void 0;
          if ("rock" === (null === aM || void 0 === aM ? void 0 : aM.harvests) && (null !== (OM = aM.level) && void 0 !== OM ? OM : 0) >= jM) return null;
          const PM = (nM = jM, uO(Sy, nM));
          var nM;
          if (null === PM) return null;
          const QM = (0, Mj.d)(PM),
            zM = /^[AEIOU]/.test(PM) ? "An" : "";
          if ("rock" === (null === aM || void 0 === aM ? void 0 : aM.harvests) && rM) return {
            key: `${Hy}lookToolTooWeak${zM}`,
            sQ: (0, Mj.d)(rM),
            needed: QM
          };
          return {
            key: PM === gO[0] ? `${Hy}lookNeedAnyPickaxe` : `${Hy}lookNeedPickaxe${zM}`,
            sQ: null,
            needed: QM
          }
        }(QM.rootName, PM) : null;
        this.targetsLive = !0 === (null === QM || void 0 === QM ? void 0 : QM.live) && null !== aM;
        let lM = null;
        this.targetsLive && QM && aM && this.live && (this.livePos[0] = aM[0], this.livePos[1] = aM[1], this.livePos[2] = aM[2], this.liveVersion = this.live.version(), lM = this.live.line(QM.rootName, aM));
        const EM = null === dM ? zy : function(MM, rM, iM) {
            const OM = function(MM, rM, iM) {
              const OM = ki(MM);
              if (null === OM) return null;
              const SM = `${Py}lookPortMode_${OM}`,
                jM = AO(rM);
              if (jM && iM) return {
                mode: null,
                detail: SM,
                next: `${Py}lookWrenchPickUp`,
                nextState: null
              };
              const aM = Zi(MM),
                PM = null === aM ? null : ki(aM);
              return null === PM ? {
                mode: null,
                detail: SM,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: SM,
                next: jM ? `${Py}lookWrenchNext` : `${Py}lookPortWrench`,
                nextState: `${Py}lookPortState_${PM}`
              }
            }(MM, rM, iM);
            if (null !== OM) return OM;
            const SM = iS(MM, rM, iM);
            return null === SM.mode && null === SM.next ? zy : SM
          }(MM.blockIdToBlockName(iM), PM, nM),
          UM = this.plan,
          GM = QM && dM ? this.rowsOf(QM.rootName, mM) : Ly,
          CM = this.snapshot;
        if (!(null === dM ? !CM.visible : CM.visible && dM === CM.info && (eM = yM, bM = CM.tool, eM === bM || null !== eM && null !== bM && eM.key === bM.key && eM.sQ === bM.sQ && eM.needed === bM.needed) && function(MM, rM) {
            return MM === rM || null !== MM && null !== rM && MM.key === rM.key && JSON.stringify([MM.params, MM.keys]) === JSON.stringify([rM.params, rM.keys])
          }(lM, CM.live) && function(MM, rM) {
            return MM.mode === rM.mode && MM.detail === rM.detail && MM.next === rM.next && MM.nextState === rM.nextState
          }(EM, CM.wrench) && Bh(UM, CM.plan) && GM === CM.atomic)) {
          var eM, bM;
          this.snapshot = null === dM ? {
            ...CM,
            visible: !1
          } : {
            info: dM,
            visible: !0,
            tool: yM,
            live: lM,
            wrench: EM,
            plan: UM,
            atomic: GM
          };
          for (const MM of this.listeners) MM()
        }
      }
      get() {
        return this.snapshot
      }
      subscribe(MM) {
        return this.listeners.add(MM), () => {
          this.listeners.delete(MM)
        }
      }
      dispose() {
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = my, this.jP = 0, this.sQ = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(MM, rM, iM) {
        if (null === iM || 0 === rM || !PM() || !Qy(this.resolve(MM, rM).rootName)) return !1;
        const OM = `${iM[0]},${iM[1]},${iM[2]},${rM}`,
          SM = performance.now();
        return OM === this.afloatKey && SM - this.afloatAt < yy ? this.afloat : (this.afloatKey = OM, this.afloatAt = SM, function(MM, rM) {
          for (const [iM, OM, SM] of ny) {
            const jM = rM(MM[0] + iM, MM[1] + OM, MM[2] + SM);
            if (void 0 === jM || null !== jM && !Qy(jM)) return !1
          }
          return !0
        }(iM, ((rM, iM, OM) => function(MM, rM, iM, OM) {
          if (!MM.isBlockInLoadedChunk(rM, iM, OM)) return;
          const SM = MM.getBlockId(rM, iM, OM);
          return 0 === SM ? null : MM.getMetaInfo(SM).rootName
        }(MM, rM, iM, OM))))
      }
      liveMoved(MM) {
        var rM;
        const {
          livePos: iM
        } = this;
        return null === MM || MM[0] !== iM[0] || MM[1] !== iM[1] || MM[2] !== iM[2] || (null === (rM = this.live) || void 0 === rM ? void 0 : rM.version()) !== this.liveVersion
      }
      updatePlan(MM) {
        const rM = null === MM ? "" : MM.join(","),
          iM = performance.now();
        if (rM === this.planPos && iM - this.planMs < 250) return !1;
        this.planPos = rM, this.planMs = iM;
        const OM = null === MM ? null : this.planAt([MM[0], MM[1], MM[2]]),
          SM = !Bh(OM, this.plan);
        return this.plan = OM, SM
      }
      besideMaker(MM, rM, iM) {
        let {
          info: OM
        } = MM;
        if (null === OM) return null;
        let SM = this.besideMakerById.get(rM);
        if (void 0 === SM) {
          const MM = "cryo" === iM ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          SM = {
            ...OM,
            detail: `${Hy}${MM}`,
            detailItem: null
          }, this.besideMakerById.set(rM, SM)
        }
        return SM
      }
      hanging(MM) {
        let {
          info: rM,
          rootName: iM
        } = MM;
        if (null === rM) return null;
        let OM = this.afloatByRoot.get(iM);
        return void 0 === OM && (OM = {
          ...rM,
          detail: `${Hy}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(iM, OM)), OM
      }
      rowsOf(MM, rM) {
        if (null === rM) return Ly;
        const iM = `${MM}|${rM}`;
        let OM = this.rowsByKey.get(iM);
        if (void 0 === OM) {
          const SM = function(MM, rM) {
            var iM;
            if (!(MM in Dr)) return [];
            const OM = null !== (iM = kr[MM]) && void 0 !== iM ? iM : [],
              SM = new Map;
            for (const aM of fj(MM, rM))
              if ((OM.includes(aM) || oj(aM.output) && kj(aM.output) > qM(MM)) && kj(aM.output) <= rM) {
                var jM;
                const MM = null !== (jM = SM.get(aM.output)) && void 0 !== jM ? jM : [];
                MM.push(aM.input), SM.set(aM.output, MM)
              } return Nj([...SM], (MM => {
              let [rM] = MM;
              return -kj(rM)
            })).map((MM => {
              let [rM, iM] = MM;
              return {
                output: rM,
                inputs: iM
              }
            }))
          }(MM, rM);
          OM = SM.length > 0 ? SM : Ly, this.rowsByKey.set(iM, OM)
        }
        return OM
      }
      resolve(MM, rM) {
        const {
          rootId: iM,
          rootName: OM
        } = MM.getMetaInfo(rM), SM = (0, Ji.p)(OM) ? rM : iM;
        let jM = this.byRootId.get(SM);
        const aM = PM();
        if (void 0 === jM || jM.nuclear !== aM) {
          var nM;
          const iM = function(MM) {
            return ZO(Sy, MM, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : MM)
          }(OM, MM.blockIdToBlockName(rM));
          jM = {
            info: iM,
            rootName: OM,
            live: null !== iM && !0 === (null === (nM = this.live) || void 0 === nM ? void 0 : nM.handles(OM)),
            nuclear: aM
          }, this.byRootId.set(SM, jM)
        }
        return jM
      }
    }
    const yy = 500;
    const ly = (0, OM.memo)((function(MM) {
      var rM, iM;
      let {
        store: SM
      } = MM;
      const {
        t: jM
      } = (0, tS.A)(), [aM, PM] = (0, OM.useState)((() => SM.get()));
      (0, OM.useEffect)((() => (PM(SM.get()), SM.subscribe((() => {
        PM(SM.get())
      })))), [SM]);
      const {
        openInGameMenuName: nM,
        openEverythingMenuName: QM,
        isTouchScreen: zM
      } = (0, ES.m)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
        info: LM,
        tool: mM,
        live: HM,
        wrench: hM,
        atomic: JM
      } = aM, dM = aM.visible && null === nM && null === QM;
      if (null === LM) return null;
      const yM = null !== hM.detail ? jM(hM.detail) : null !== (rM = aM.plan) && void 0 !== rM && rM.ctrl ? jM("buildAFactory2Game:lookPlanCtrl") : null !== LM.detail ? jM(LM.detail, null === LM.detailItem ? void 0 : {
        item: jM(LM.detailItem)
      }) : null;
      return (0, Gj.jsxs)("div", {
        className: CS()("Baf2LookTarget", {
          Visible: dM
        }),
        "aria-hidden": !dM,
        children: [(0, Gj.jsx)("div", {
          className: "Baf2LookTargetName SmallTextBold",
          children: jM(LM.name)
        }), null !== aM.plan && (0, Gj.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: jM(aM.plan.key, {
            kind: jM(aM.plan.kindKey),
            w: String(aM.plan.w),
            h: String(aM.plan.h),
            d: String(aM.plan.d),
            count: String(aM.plan.count)
          })
        }), void 0 !== (null === (iM = aM.plan) || void 0 === iM ? void 0 : iM.why) && (0, Gj.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: jM(aM.plan.why)
        }), null !== hM.mode && (0, Gj.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: jM(hM.mode)
        }), null !== mM ? (0, Gj.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: jM(mM.key, {
            item: jM(mM.needed),
            sQ: null === mM.sQ ? "" : jM(mM.sQ)
          })
        }) : null !== HM ? (0, Gj.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: jM(HM.key, iQ(jM, HM))
        }) : null !== yM && (0, Gj.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: yM
        }), JM.length > 0 && (0, Gj.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: jM("buildAFactory2Game:lookAtomicRecipes", {
            list: JM.map((MM => {
              let {
                output: rM,
                inputs: iM
              } = MM;
              const OM = iM.length > 1 ? ` ${jM("buildAFactory2Game:recipeMore",{count:String(iM.length-1)})}` : "";
              return `${jM((0,Mj.d)(iM[0]))}${OM} \u2192 ${jM((0,Mj.d)(rM))}`
            })).join(", ")
          })
        }), null !== hM.next && (0, Gj.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: jM(hM.next, {
            state: null === hM.nextState ? "" : jM(hM.nextState),
            use: jM(zM ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
          })
        })]
      })
    }));
    var Ey = iM(39511);
    const Uy = [],
      Gy = [
        [0, -1, 0]
      ];

    function Cy(MM) {
      const rM = [MM];
      for (let iM = 1; iM <= 4; iM++) iM > 1 && rM.push(`${MM}|meta|rot${iM}`), rM.push(`${MM}|meta|rot${iM}|Running`);
      return rM
    }

    function ey(MM, rM) {
      return [Math.floor(MM[0] / rM), Math.floor(MM[1] / rM), Math.floor(MM[2] / rM)]
    }

    function by(MM, rM, iM) {
      return `${MM},${rM},${iM}`
    }

    function wy(MM) {
      const rM = MM.split("|")[0];
      if (!Qi(rM)) return Uy;
      const iM = Dr[rM];
      if (ri(iM)) return Gy;
      const OM = ed(MM);
      return ii(iM) ? [
        [-OM[0], -OM[1], -OM[2]]
      ] : eS(iM) ? function(MM, rM) {
        const iM = MM[0] - 2 * rM[0],
          OM = MM[2] - 2 * rM[2],
          SM = [];
        for (let jM = -1; jM <= 1; jM++)
          for (let rM = -1; rM <= 1; rM++) SM.push([iM + jM, MM[1], OM + rM]);
        return SM
      }([0, 0, 0], OM) : Uy
    }
    const ty = [.5, .5, .5],
      gy = [.2, .8, .3],
      uy = [.45, 1, .5];
    class Ry {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(MM) {
        this.indexed = !0;
        for (const rM of gr)
          for (const iM of Cy(rM)) {
            const rM = MM.blockNameToBlockId(iM, !0),
              OM = wy(iM);
            null !== rM && OM.length > 0 && (this.offsetsList.push(OM), this.offsetsIndexById[rM] = this.offsetsList.length)
          }
      }
      onAfterRender(MM, rM) {
        this.indexed || this.index(MM);
        const iM = performance.now();
        if (iM - this.lastCheckMs < 100) return;
        this.lastCheckMs = iM, this.checks++;
        const OM = Hh.f.HL,
          [SM, jM, aM] = ey(rM, OM);
        let PM = !1;
        const nM = [];
        let QM = 0;
        for (let zM = SM - 2; zM <= SM + 2; zM++)
          for (let rM = jM - 1; rM <= jM + 1; rM++)
            for (let SM = aM - 2; SM <= aM + 2; SM++) {
              const jM = QM++,
                aM = by(zM, rM, SM),
                LM = MM.getChunkVersion(zM, rM, SM);
              let mM = this.chunks.get(aM);
              null !== LM ? (mM || (mM = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(aM, mM)), mM.seenAt = this.checks, mM.checkedVersion !== LM && (mM.checkedVersion = LM, PM = !0), mM.scannedVersion !== LM && iM - mM.scannedAt >= 500 && nM.push({
                slot: jM,
                entry: mM,
                origin: [zM * OM, rM * OM, SM * OM]
              })) : (PM ||= void 0 !== mM, this.chunks.delete(aM))
            }
        this.scanDue(MM, nM) && (PM = !0);
        for (const [zM, LM] of this.chunks) LM.seenAt !== this.checks && (PM ||= LM.machines.length > 0, this.chunks.delete(zM));
        for (const zM of this.chunks.values())
          for (const [rM, iM, OM] of zM.cellChunks)(Math.abs(rM - SM) > 2 || Math.abs(iM - jM) > 1 || Math.abs(OM - aM) > 2) && this.watchCellChunk(MM, rM, iM, OM) && (PM = !0);
        for (const [zM, LM] of this.cellChunks) LM.seenAt !== this.checks && this.cellChunks.delete(zM);
        PM && this.refresh(MM)
      }
      dispose(MM) {
        this.clearMeshes(MM), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(MM, rM) {
        const iM = Math.max(rM.findIndex((MM => {
          let {
            slot: rM
          } = MM;
          return rM >= this.scanFrom
        })), 0);
        let OM = 96;
        for (let SM = 0; SM < rM.length; SM++) {
          const {
            slot: jM,
            entry: aM,
            origin: PM
          } = rM[(iM + SM) % rM.length];
          if (OM -= this.scan(MM, aM, PM), OM <= 0) {
            this.scanFrom = jM + 1;
            break
          }
        }
        return rM.length > 0
      }
      scan(MM, rM, iM) {
        let [OM, SM, jM] = iM;
        const aM = Hh.f.HL,
          PM = this.hits;
        PM.length = 0;
        const nM = MM.scanBlocks(OM, SM, jM, OM + aM, SM + aM, jM + aM, this.offsetsIndexById, PM),
          QM = [];
        for (let zM = 0; zM < PM.length; zM += 4) QM.push({
          pos: [PM[zM], PM[zM + 1], PM[zM + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[PM[zM + 3]] - 1]
        });
        return rM.machines = QM, rM.cellChunks = function(MM, rM) {
          const iM = new Set,
            OM = [];
          for (const {
              pos: SM,
              offsets: jM
            }
            of MM)
            for (const [MM, aM, PM] of jM) {
              const jM = ey([SM[0] + MM, SM[1] + aM, SM[2] + PM], rM),
                nM = by(...jM);
              iM.has(nM) || (iM.add(nM), OM.push(jM))
            }
          return OM
        }(QM, aM), rM.scannedVersion = rM.checkedVersion, rM.scannedAt = performance.now(), Math.max(nM, 1)
      }
      watchCellChunk(MM, rM, iM, OM) {
        const SM = by(rM, iM, OM),
          jM = MM.getChunkVersion(rM, iM, OM),
          aM = this.cellChunks.get(SM);
        return null === jM ? this.cellChunks.delete(SM) : (null === aM || void 0 === aM ? void 0 : aM.version) === jM ? (aM.seenAt = this.checks, !1) : (this.cellChunks.set(SM, {
          version: jM,
          seenAt: this.checks
        }), !0)
      }
      refresh(MM) {
        const rM = function(MM, rM) {
            const iM = new Set,
              OM = [];
            for (const {
                pos: SM,
                offsets: jM
              }
              of MM)
              for (const [MM, aM, PM] of jM) {
                const jM = SM[0] + MM,
                  nM = SM[1] + aM,
                  QM = SM[2] + PM,
                  zM = `${jM},${nM},${QM}`;
                iM.has(zM) || (iM.add(zM), rM(jM, nM, QM) && OM.push([jM, nM, QM]))
              }
            return OM
          }([...this.chunks.values()].flatMap((MM => MM.machines)), ((rM, iM, OM) => MM.isBlockInLoadedChunk(rM, iM, OM) && 0 === MM.getBlockId(rM, iM, OM))),
          iM = rM.join(";");
        iM !== this.shownKey && (this.shownKey = iM, this.clearMeshes(MM), rM.length > 0 && (this.meshes = [this.build(MM, rM, !1), this.build(MM, rM, !0)]))
      }
      build(MM, rM, iM) {
        const OM = rM[0],
          SM = [],
          jM = [];
        for (const [aM, PM, nM] of rM)(0, Ey.c)(SM, jM, [aM - OM[0] + .5, PM - OM[1] + .5, nM - OM[2] + .5], ty, iM);
        return MM.createGameMesh({
          positions: SM,
          indices: jM
        }, {
          rgb: iM ? uy : gy,
          alpha: .4
        }, OM)
      }
      clearMeshes(MM) {
        for (const rM of this.meshes) MM.disposeGameMesh(rM);
        this.meshes = []
      }
    }
    const py = 1 / .6,
      Wy = 200,
      sy = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      Dy = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      ky = 2 * Math.PI / 3;
    class Zy {
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sy;
        this.style = MM, this.particles = null, this.points = new Float32Array(800), this.budget = Wy, this.lastMs = 0
      }
      static blade() {
        return new Zy(Dy)
      }
      TE(MM, rM) {
        const iM = Math.min(rM.arcStruck, rM.arcPoints.length);
        this.draw(MM, [rM.arcFrom, ...rM.arcPoints], rM.arcPoints.slice(0, iM))
      }
      onBlade(MM, rM) {
        const [iM, OM, SM] = rM.bladeCentre, [jM, aM] = rM.bladeFacing, PM = iM - 1.5 * jM, nM = SM - 1.5 * aM, QM = Math.atan2(aM, jM), zM = [];
        for (let LM = 0; LM <= 8; LM++) {
          const MM = QM - ky / 2 + ky * LM / 8;
          zM.push([PM + 2.5 * Math.cos(MM), OM, nM + 2.5 * Math.sin(MM)])
        }
        this.draw(MM, zM, rM.bladeStruck)
      }
      dispose() {
        var MM;
        null === (MM = this.particles) || void 0 === MM || MM.stop(), this.particles = null
      }
      draw(MM, rM, iM) {
        if (!MM.particlesEnabled() || rM.length < 2) return;
        const OM = performance.now();
        this.budget = Math.min(Wy, this.budget + (OM - this.lastMs) / 1e3 * Wy), this.lastMs = OM;
        const SM = [];
        let jM = 0,
          aM = rM[0];
        for (const yM of rM.slice(1)) {
          const MM = Math.min(48, Math.round(Math.hypot(yM[0] - aM[0], yM[1] - aM[1], yM[2] - aM[2]) * this.style.perBlock));
          SM.push([aM, yM, MM]), jM += MM, aM = yM
        }
        const PM = iM.length;
        jM += 10 * PM;
        const nM = jM > this.budget ? this.budget / jM : 1;
        if (0 === jM || nM * jM < 1) return;
        const QM = rM[0],
          [zM, LM, mM] = QM,
          HM = this.points;
        let hM = 0;
        const JM = (MM, rM, iM, OM) => {
          const SM = 4 * hM;
          HM[SM] = MM - zM, HM[SM + 1] = rM - LM, HM[SM + 2] = iM - mM, HM[SM + 3] = OM, hM++
        };
        SM.forEach(((MM, rM) => {
          let [iM, OM, SM] = MM;
          const jM = Math.min(Math.floor(SM * nM), Wy - hM),
            aM = Math.hypot(OM[0] - iM[0], OM[1] - iM[1], OM[2] - iM[2]),
            PM = 0 === rM && aM > 0 ? Math.min(.5, .1 * aM) / aM : 0;
          for (let nM = 0; nM < jM; nM++) {
            const MM = PM + (nM + .5) / jM * (1 - PM);
            JM(iM[0] + (OM[0] - iM[0]) * MM, iM[1] + (OM[1] - iM[1]) * MM, iM[2] + (OM[2] - iM[2]) * MM, .15)
          }
        }));
        const dM = Math.floor(10 * nM);
        for (let yM = 0; yM < PM; yM++) {
          const [MM, rM, OM] = iM[yM];
          for (let iM = 0; iM < dM && hM < Wy; iM++) JM(MM, rM, OM, 2.5)
        }
        this.budget -= hM, this.particles ??= MM.createParticles(function(MM) {
          const [rM, iM] = MM.colours;
          return {
            texture: "square_particle",
            vL: 400,
            minLifeTime: MM.life[0] / py,
            maxLifeTime: MM.life[1] / py,
            minSize: MM.size[0],
            maxSize: MM.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [rM[0], rM[1], rM[2], 1],
              maxColor: [iM[0], iM[1], iM[2], 1]
            }, {
              timeFraction: 1,
              minColor: [rM[0], rM[1], rM[2], 0],
              maxColor: [iM[0], iM[1], iM[2], 0]
            }],
            blendMode: pP.d.Add
          }
        }(this.style), {
          pos: QM
        }), this.particles.emitPoints(QM, HM, hM)
      }
    }
    const oy = new Set(["Sky Spring"]);

    function fy(MM, rM, iM) {
      const OM = MM.split("|")[0];
      return "Air" !== rM || iM || ! function(MM) {
        const rM = MM.split("|")[0];
        return void 0 !== ai[rM] || oy.has(rM)
      }(OM) ? null : MM
    }
    class Yy {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(MM) {
        const rM = MM - this.lastTapAt >= 300;
        return this.lastTapAt = MM, rM
      }
    }
    class Ny {
      constructor() {
        this.presses = new Yy, this.predicted = null
      }
      tap(MM, rM) {
        const iM = this.presses.isNewPress(rM);
        return iM && (this.predicted = {
          station: MM,
          at: rM
        }), iM
      }
      consumeServerOpen(MM, rM) {
        const iM = this.predicted;
        return !(null === iM || iM.station !== MM || rM - iM.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class Ay {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(MM, rM) {
        return MM && (this.thrustAt = rM), rM - this.thrustAt < 200
      }
    }
    const xy = [.1, .05, .1],
      vy = {
        texture: "effect_5",
        vL: Math.ceil(48),
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
        blendMode: pP.d.OneOne
      };
    class Fy {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new Ay, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      TE(MM, rM) {
        for (const [iM, OM] of rM.baf2JetFlames) MM.isLocalPlayer(iM) || (OM ? this.lit.add(iM) : this.lit.delete(iM))
      }
      onAfterRender(MM, rM) {
        const iM = performance.now(),
          OM = this.hold.lit(this.selfThrusting(MM, rM), iM);
        for (const [SM, jM] of this.flames)(SM === rM ? OM : this.lit.has(SM)) || this.setEmitting(jM, !1), SM === rM || MM.getPositionView(SM) ? !jM.emitting && iM - jM.offAt >= 1300 && (jM.particles.stop(), this.flames.delete(SM)) : (jM.particles.dispose(), this.flames.delete(SM), this.lit.delete(SM));
        OM && this.draw(MM, rM, rM);
        for (const SM of this.lit) this.draw(MM, rM, SM)
      }
      dispose() {
        for (const MM of this.flames.values()) MM.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(MM, rM) {
        var iM;
        const OM = MM.getLocalPlayerMovement();
        return !!OM && (null !== (SM = {
          option: null !== (iM = MM.getClientOption(rM, "jumpHoldThrust")) && void 0 !== iM ? iM : null,
          jumping: OM.jumpHeld,
          onGround: OM.onGround,
          alive: MM.isAlive(rM)
        }).option && SM.option.maxUpSpeed >= 0 && SM.jumping && !SM.onGround && SM.alive);
        var SM
      }
      draw(MM, rM, iM) {
        var OM, SM;
        const jM = this.pos;
        if (!MM.readDrawnPosition(iM, jM)) return;
        const aM = MM.readDrawnPosition(rM, this.camera) ? this.camera : jM;
        if (!((jM[0] - aM[0]) ** 2 + (jM[1] - aM[1]) ** 2 + (jM[2] - aM[2]) ** 2 < 1600) || !MM.particlesEnabled()) {
          const MM = this.flames.get(iM);
          return void(MM && this.setEmitting(MM, !1))
        }
        const PM = null !== (OM = this.flames.get(iM)) && void 0 !== OM ? OM : this.create(MM, iM, jM),
          nM = null !== (SM = MM.getDrawnHeading(iM)) && void 0 !== SM ? SM : 0,
          QM = this.at;
        QM[0] = jM[0] - .35 * Math.sin(nM), QM[1] = jM[1] + 1.05, QM[2] = jM[2] - .35 * Math.cos(nM), PM.particles.moveTo(QM), this.setEmitting(PM, !0)
      }
      setEmitting(MM, rM) {
        MM.emitting !== rM && (MM.emitting = rM, rM || (MM.offAt = performance.now()), MM.particles.setEmitRate(rM ? 60 : 0))
      }
      create(MM, rM, iM) {
        const OM = {
          particles: MM.createParticles(vy, {
            pos: iM,
            half: xy
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(rM, OM), OM
      }
    }

    function By(MM) {
      return "Reactor Frame" === jO("reactor", MM)
    }

    function Xy(MM) {
      return Ni("reactor", MM) && !By(MM) && (MM.startsWith("Reactor Glass") || MM.startsWith("Reactor Port"))
    }
    const Iy = "baf2Goal";
    class Ky {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [sS.i.subscribe("setDirectionArrow", (MM => {
          let {
            id: rM,
            position: iM
          } = MM;
          rM === Iy && (this.goal = iM, this.checkedAt = -1 / 0)
        })), sS.i.subscribe("clearDirectionArrow", (MM => {
          let {
            id: rM
          } = MM;
          null !== rM && rM !== Iy || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const MM of this.subs) sS.i.unsubscribe(MM)
      }
      sideOf(MM, rM, iM, OM) {
        const SM = this.goal;
        if (!SM) return 0;
        iM - this.checkedAt > 1e3 && (this.checkedAt = iM, this.open = function(MM, rM) {
          const [iM, OM, SM] = MM.map(Math.floor);
          if (!Xy(rM(iM, OM, SM))) return null;
          for (const [jM, aM] of [
              [1, 0],
              [0, 1]
            ]) {
            const MM = rM(iM + jM, OM, SM + aM),
              PM = rM(iM - jM, OM, SM - aM);
            if (By(PM) && Xy(MM)) return [jM, 0, aM];
            if (By(MM) && Xy(PM)) return [0 - jM, 0, 0 - aM]
          }
          return null
        }(SM, ((rM, iM, OM) => MM.blockIdToBlockName(MM.getBlockId(rM, iM, OM)))));
        const jM = this.open;
        if (!jM) return 0;
        const aM = OM(SM);
        if (Math.abs(aM.x - rM.x) > .05 || Math.abs(aM.y - rM.y) > .05) return 0;
        const PM = OM([SM[0] + jM[0], SM[1], SM[2] + jM[2]]).x - aM.x;
        return Math.abs(PM) < .3 ? 0 : PM > 0 ? 1 : -1
      }
    }
    class qy {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new Ky, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.dh = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.pE = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((MM => {
          for (const rM of MM) rM.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(rM.target, rM.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.dh || this.clear()
        }, window.addEventListener("resize", this.pE)
      }
      onAfterRender(MM, rM) {
        var iM;
        this.api = MM, this.project = null !== (iM = null === rM || void 0 === rM ? void 0 : rM.projectWorldPosToScreenPos) && void 0 !== iM ? iM : null, this.queued || this.dh || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.dh = !0;
        for (const MM of this.moved.keys()) MM.style.transform = "";
        this.moved.clear();
        for (const MM of this.sideLabels.keys()) MM.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.pE)
      }
      clear() {
        for (const jM of this.moved.keys()) jM.isConnected || this.moved.delete(jM);
        for (const jM of this.sideLabels.keys()) jM.isConnected || this.sideLabels.delete(jM);
        if (0 === this.arrows.length) return;
        const MM = performance.now(),
          rM = MM - this.refreshedAt > 1e3;
        rM && (this.refreshedAt = MM, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const iM = this.trackerBox(),
          OM = this.barsBox(),
          SM = this.toastBox(rM);
        (iM || OM || SM) && rM && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let jM = 0; jM < this.arrows.length; jM++) {
          const rM = this.arrows[jM];
          this.labelOffsets.set(rM, this.runLabelAside(rM, MM));
          const aM = (iM ? this.shiftLeftOf(rM, iM) : 0) || this.shiftOnScreen(rM),
            PM = Math.min(OM ? this.liftAbove(rM, OM, aM) : 0, SM ? this.liftAbove(rM, SM, aM) : 0),
            nM = this.moved.get(rM);
          if (0 !== aM || 0 !== PM) {
            const MM = 0 === PM ? `translateX(${aM}px)` : `translate(${aM}px, ${PM}px)`;
            nM !== MM && (rM.style.transform = MM, this.moved.set(rM, MM))
          } else void 0 !== nM && (rM.style.transform = "", this.moved.delete(rM))
        }
      }
      trackerBox() {
        var MM, rM;
        const iM = null !== (MM = this.tracker) && void 0 !== MM && MM.isConnected ? this.tracker : null !== (rM = this.trackers[0]) && void 0 !== rM ? rM : null;
        if (iM !== this.tracker && this.watch(iM), this.boxStale && iM) {
          var OM, SM, jM;
          this.boxStale = !1;
          const MM = iM.closest(".NoRoom") ? null : iM.getBoundingClientRect(),
            rM = MM && MM.width > 0 ? null === (OM = this.hud) || void 0 === OM ? void 0 : OM.getBoundingClientRect() : void 0,
            aM = MM && rM ? Math.max(MM.top, rM.top) : null !== (SM = null === MM || void 0 === MM ? void 0 : MM.top) && void 0 !== SM ? SM : 0,
            PM = MM && rM ? Math.min(MM.bottom, rM.bottom) : null !== (jM = null === MM || void 0 === MM ? void 0 : MM.bottom) && void 0 !== jM ? jM : 0;
          this.box = MM && MM.width > 0 && PM > aM ? {
            left: MM.left,
            top: aM,
            right: MM.right,
            bottom: PM
          } : null
        }
        return iM ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var MM;
          this.barsStale = !1;
          const rM = null === (MM = this.statBars[0]) || void 0 === MM ? void 0 : MM.getBoundingClientRect();
          this.bars = rM && rM.width > 0 && rM.height > 0 ? {
            left: rM.left,
            top: rM.top,
            right: rM.right,
            bottom: rM.bottom
          } : null
        }
        return this.bars
      }
      toastBox(MM) {
        var rM;
        const iM = null !== (rM = this.toasts[0]) && void 0 !== rM ? rM : null;
        if (iM !== this.toastEl || MM && iM) {
          this.toastEl = iM;
          const MM = null === iM || void 0 === iM ? void 0 : iM.getBoundingClientRect();
          this.toast = MM && MM.width > 0 && MM.height > 0 ? {
            left: MM.left,
            top: MM.top,
            right: MM.right,
            bottom: MM.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(MM, rM, iM) {
        var OM;
        const SM = this.anchorOf(MM);
        if (!SM) return 0;
        const jM = SM.x + iM + (null !== (OM = this.labelOffsets.get(MM)) && void 0 !== OM ? OM : 0),
          {
            halfWidth: aM,
            labelled: PM
          } = this.extentOf(MM),
          nM = SM.y + this.em * (PM ? 6.2 : 3);
        return nM < rM.top - 6 || jM + aM < rM.left - 6 || jM - aM > rM.right + 6 ? 0 : rM.top - 6 - nM
      }
      watch(MM) {
        var rM, iM;
        this.tracker && this.sizes.unobserve(this.tracker), null === (rM = this.hud) || void 0 === rM || rM.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = MM, this.hud = null !== (iM = null === MM || void 0 === MM ? void 0 : MM.closest(".Baf2QuestHud")) && void 0 !== iM ? iM : null, this.box = null, this.boxStale = !0, MM && this.sizes.observe(MM), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(MM, rM) {
        var iM;
        const OM = this.anchorOf(MM);
        if (!OM) return 0;
        const {
          y: SM
        } = OM, jM = OM.x + (null !== (iM = this.labelOffsets.get(MM)) && void 0 !== iM ? iM : 0), aM = this.em, {
          halfWidth: PM,
          labelled: nM
        } = this.extentOf(MM), QM = SM - aM, zM = jM + PM;
        return SM + aM * (nM ? 6.2 : 3) < rM.top || QM > rM.bottom || zM < rM.left - 6 || jM - PM > rM.right ? 0 : Math.max(rM.left - 6 - zM, 6 - (jM - PM))
      }
      shiftOnScreen(MM) {
        var rM;
        const iM = this.anchorOf(MM);
        if (!iM) return 0;
        const {
          halfWidth: OM
        } = this.extentOf(MM), SM = iM.x + (null !== (rM = this.labelOffsets.get(MM)) && void 0 !== rM ? rM : 0), jM = SM + OM - (this.innerWidth - 6);
        return jM > 0 ? -jM : Math.max(0, 6 - (SM - OM))
      }
      runLabelAside(MM, rM) {
        var iM;
        let OM = null;
        for (let aM = 0; aM < MM.children.length; aM++) MM.children[aM].classList.contains("DirectionArrowLabel") && (OM = MM.children[aM]);
        if (!OM) return 0;
        const SM = MM.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(MM) : null,
          jM = (SM && this.api ? this.side.sideOf(this.api, {
            x: SM.x / this.innerWidth * 100,
            y: SM.y / this.innerHeight * 100
          }, rM, this.project) : 0) * this.halfWidthOf(OM);
        return jM !== (null !== (iM = this.sideLabels.get(OM)) && void 0 !== iM ? iM : 0) && (OM.style.transform = 0 === jM ? "" : `translateX(-50%) translateX(${jM}px)`, 0 === jM ? this.sideLabels.delete(OM) : this.sideLabels.set(OM, jM)), jM
      }
      extentOf(MM) {
        let rM = this.em,
          iM = !1;
        for (let OM = 0; OM < MM.children.length; OM++) {
          const SM = MM.children[OM],
            jM = SM.classList.contains("DirectionArrowLabel");
          iM ||= jM, (jM || SM.classList.contains("DirectionArrowDistance")) && (rM = Math.max(rM, this.halfWidthOf(SM)))
        }
        return {
          halfWidth: rM,
          labelled: iM
        }
      }
      halfWidthOf(MM) {
        let rM = this.halfWidths.get(MM);
        return void 0 === rM && (rM = MM.offsetWidth / 2, this.halfWidths.set(MM, rM), this.sizes.observe(MM), this.labels.add(MM)), rM
      }
      forgetGoneLabels() {
        for (const MM of this.labels) MM.isConnected || (this.sizes.unobserve(MM), this.halfWidths.delete(MM), this.labels.delete(MM))
      }
      anchorOf(MM) {
        const rM = MM.style.translate,
          iM = this.anchors.get(MM);
        if (iM && iM.translate === rM && iM.innerWidth === this.innerWidth && iM.innerHeight === this.innerHeight) return iM;
        const OM = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(rM);
        if (!OM) return null;
        const SM = {
          translate: rM,
          x: parseFloat(OM[1]) / 100 * this.innerWidth,
          y: parseFloat(OM[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(MM, SM), SM
      }
    }
    const Ty = "Baf2ArrowText";

    function Vy(MM, rM) {
      const iM = MM.rows.find((MM => MM.current));
      return sM(MM.tutorial) && null !== iM && void 0 !== iM && iM.item && vS(iM) && uM(iM.item).includes(rM) ? iM.item : null
    }
    const cy = new class {
      constructor(MM) {
        this.select = MM, this.picks = new Map
      }
      open(MM, rM, iM) {
        const OM = Vy(rM, MM);
        null !== OM && this.LH(MM, OM, iM)
      }
      follow(MM, rM) {
        if (PM())
          for (const [iM, {
              item: OM,
              had: SM
            }] of this.picks) {
            const jM = Vy(MM, iM);
            jM !== OM && (null !== jM && rM(OM) > SM ? this.LH(iM, jM, rM) : this.picks.delete(iM))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      LH(MM, rM, iM) {
        this.picks.set(MM, {
          item: rM,
          had: iM(rM)
        }), this.select(MM, rM)
      }
    }(DS.q);

    function Ml(MM) {
      return rM => {
        let iM = 0;
        for (const OM of MM.getInventoryItems())(null === OM || void 0 === OM ? void 0 : OM.name) === rM && (iM += null === OM.amount ? 1 : Math.max(OM.amount, 0));
        return iM
      }
    }

    function rl(MM, rM, iM, OM) {
      MM.getClientOption(rM, "canCraft") && "inventory" !== ES.d.get("openInGameMenuName") && (cy.open(iM, OM.get(), Ml(MM)), sS.i.Tz("toggleMenu", `inventory|${iM}`))
    }
    let il = null,
      Ol = !1;

    function Sl(MM) {
      const rM = Uj();
      MM === il && rM === Ol || (il = MM, Ol = rM, (0, DS.t)(function(MM, rM) {
        const iM = new Map;
        for (let OM = MM + 1; OM <= SM.length; OM++) {
          const SM = Aj(OM, MM, rM);
          if (SM)
            for (const rM of yM(OM).unlocks) iM.set(rM, {
              ...SM,
              stepsAway: OM - MM
            })
        }
        return iM
      }(MM, rM)))
    }

    function jl() {
      return MM = () => {
        null !== il && Sl(il)
      }, (0, lj.i)(Ej, MM);
      var MM
    }

    function al() {
      return (0, DS.v)(Nj(Object.keys(gM), kj)), () => {
        (0, DS.v)([])
      }
    }

    function Pl(MM, rM, iM) {
      var OM, SM;
      const jM = MM.getTargetedBlock();
      if (!jM || ! function(MM, rM, iM) {
          if ("Chest" !== rM) return !1;
          const OM = MM.split("|")[0];
          if (!Qi(OM) || 0 === Dr[OM].outputSlots.length) return !1;
          const SM = ed(MM);
          return iM[0] === SM[0] && iM[1] === SM[1] && iM[2] === SM[2]
        }(iM, null === (OM = MM.TrM(rM)) || void 0 === OM ? void 0 : OM.name, jM.normal)) return !1;
      const [aM, PM, nM] = jM.zd, QM = MM.getBlockId(aM, PM, nM);
      return 0 === QM || !0 === (null === (SM = pM.k[QM]) || void 0 === SM ? void 0 : SM.canBePlacedOver)
    }
    var nl = iM(37705);
    const Ql = new Set(di.b);
    class zl {
      constructor(MM) {
        this.toasts = MM, this.lastAt = -1 / 0
      }
      onAltAction(MM, rM, iM) {
        const OM = MM.getTargetedBlock();
        if (!OM || function(MM) {
            const rM = MM.split("|")[0];
            return Qi(rM) || null !== wO(rM) || wM(rM) || di.b.includes(rM)
          }(iM) && !Ql.has(iM.split("|")[0])) return;
        const SM = MM.TrM(rM);
        if (!SM || !Ql.has(SM.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const jM = SM.typeObj.id,
          [aM, PM, nM] = OM.zd,
          QM = MM.getBlockId(aM, PM, nM),
          zM = pM.k[QM];
        (0 === QM || null !== zM && void 0 !== zM && zM.CH || null !== zM && void 0 !== zM && zM.canBePlacedOver) && MM.isSolidToPlayerBlockId(jM) && MM.canModifyBlockAt(aM, PM, nM) && MM.lrM(aM, PM, nM, jM) && !MM.lrM(aM, PM, nM, jM, rM) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, DM.Od)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, DM.L.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class Ll {
      constructor(MM) {
        this.show = MM, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(MM, rM, iM) {
        var OM;
        if (!rM) return this.started = null, void this.gatedThisHold.clear();
        if (!MM) return void(this.started = null);
        const SM = `${MM.x},${MM.y},${MM.z},${MM.sQ}`;
        if (SM === this.started) return;
        this.started = SM;
        const jM = oO(MM.y) ? jy(MM.block, MM.sQ, MM.level) : null;
        if (null === jM || this.gatedThisHold.has(SM)) return;
        this.gatedThisHold.add(SM);
        const aM = MM.block.split("|")[0];
        iM - (null !== (OM = this.hintedAt.get(aM)) && void 0 !== OM ? OM : -1 / 0) < 5e3 || (this.hintedAt.set(aM, iM), this.show({
          baf2ToastText: ay(jM, MM.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var ml = iM(30);

    function Hl(MM, rM) {
      const iM = [...MM.baf2CoreBankPaused];
      for (const [SM] of MM.baf2CoreBanked) iM.push(SM);
      for (const aM of SM) {
        for (const {
            item: MM
          }
          of aM.cost) iM.push(MM);
        for (const MM of aM.newDeposits) iM.push(MM.block);
        for (const MM of aM.unlocks) iM.push(MM, RM(MM));
        aM.reward && iM.push(aM.reward);
        for (const {
            item: MM
          }
          of null !== (OM = null === (jM = aM.charge) || void 0 === jM ? void 0 : jM.items) && void 0 !== OM ? OM : []) {
          var OM, jM;
          iM.push(MM)
        }
      }
      return {
        message: MM,
        itemNames: rM([...new Set(iM)])
      }
    }
    const hl = "baf2MultiblockGuide";
    const Jl = new Map;
    const dl = function(MM, rM, iM, SM) {
      let {
        localPlayerId: jM
      } = SM;
      const aM = new mP,
        PM = new SH,
        QM = new LH,
        zM = new QH(QM),
        LM = (MM, rM) => {
          rM ? zM.observe(MM) : zM.unobserve(MM)
        },
        mM = new nH,
        HM = new HH(LM),
        hM = MM => HM.covers(MM),
        JM = new sH;
      let dM;
      const yM = new ka((MM => {
          dM.sendCommand(MM)
        })),
        lM = () => {
          yM.send("baf2questbook")
        },
        EM = MM => function(MM, rM, iM) {
          const OM = {};
          for (const SM of iM) {
            let iM = Jl.get(SM);
            void 0 === iM && (iM = MM.getItemStat(rM, SM, "displayName"), Jl.set(SM, iM)), OM[SM] = iM
          }
          return OM
        }(dM, jM, MM),
        UM = new fS(lM),
        GM = new FH((() => ES.d.get("loadingOverlayVisible"))),
        CM = new bz(yM, UM, GM),
        eM = new qH,
        bM = new zl(GM),
        tM = new Ll((MM => {
          GM.show(MM, MM.baf2ToastMs)
        })),
        gM = new jh(LM),
        uM = new sd(gM),
        RM = new Ua,
        WM = new iy,
        sM = new Va,
        ZM = new mh({
          read: () => !1 !== ml.g.getItem(hl),
          write: MM => {
            ml.g.setItem(hl, MM)
          }
        }),
        oM = new Yh(ZM),
        fM = new xh(ZM),
        YM = new zJ(ZM, (MM => function(MM, rM) {
          const iM = KP(rM.w, rM.h, rM.d),
            OM = new Uint8Array(iM);
          for (let SM = 0; SM < iM; SM++) {
            const iM = Dh(MM, MO(rM, SO(rM, SM)));
            OM[SM] = null === iM ? 0 : FP(iM)
          }
          return OM
        }(dM, MM)), rJ(yM)),
        NM = new LJ(ZM, rJ(yM)),
        AM = new nJ,
        FM = (MM, rM) => {
          let [iM, OM, SM] = MM;
          AM.answered(rM) || GM.show({
            baf2ToastText: [(0, DM.Od)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: iM,
                h: OM,
                d: SM
              }
            }, DM.L.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      YM.onSizeNotTaken(FM), NM.onSizeNotTaken(FM);
      const BM = new JJ,
        XM = new KJ(ZM),
        KM = new TJ,
        qM = new zd(KM),
        TM = new Gd,
        cM = new Dd,
        Mr = new Fd(cM),
        rr = new ry(cM),
        ir = cM.lookSource(),
        Or = new dy({
          handles: MM => ir.handles(MM) || MM === kM,
          line: (MM, rM) => MM === kM ? function(MM, rM, iM) {
            var OM;
            const SM = vM(null === (OM = rM.at(iM)) || void 0 === OM ? void 0 : OM.item);
            return null === SM ? {
              key: `${Hy}lookFarmEmpty`
            } : {
              key: MM.blockIdToBlockName(MM.getBlockId(iM[0], iM[1], iM[2])).endsWith("|Running") ? `${Hy}lookFarmRunning` : `${Hy}lookFarmWaiting`,
              keys: {
                mob: xM(SM)
              }
            }
          }(dM, gM, rM) : ir.line(MM, rM),
          version: () => ir.version() + gM.version()
        }, (MM => Fh(ZM.all(), MM, (MM => Dh(dM, MM)))), (() => UM.get().tier)),
        Sr = new sJ,
        jr = new Ry,
        ar = new Zy,
        Pr = Zy.blade(),
        nr = new Fy,
        Qr = new cH,
        zr = new qy,
        mr = new Ny,
        Hr = new Yy;
      let hr = -1 / 0,
        Jr = 0,
        dr = -1 / 0,
        yr = -1 / 0;
      const lr = () => {
          yM.send("baf2islandsclose"), yr = Date.now()
        },
        Er = [];

      function Ur(MM) {
        var rM, iM, OM, SM, jM, aM, nM;
        "core" === (null === (rM = PM.get()) || void 0 === rM ? void 0 : rM.kind) && "core" !== (null === MM || void 0 === MM ? void 0 : MM.kind) && yM.send("baf2coreclose"), "power" === (null === (iM = PM.get()) || void 0 === iM ? void 0 : iM.kind) && "power" !== (null === MM || void 0 === MM ? void 0 : MM.kind) && yM.send("baf2powerclose"), "water" === (null === (OM = PM.get()) || void 0 === OM ? void 0 : OM.kind) && "water" !== (null === MM || void 0 === MM ? void 0 : MM.kind) && yM.send(VM.C), "terminal" === (null === (SM = PM.get()) || void 0 === SM ? void 0 : SM.kind) && "terminal" !== (null === MM || void 0 === MM ? void 0 : MM.kind) && yM.send("baf2terminalclose"), "islands" === (null === (jM = PM.get()) || void 0 === jM ? void 0 : jM.kind) && "islands" !== (null === MM || void 0 === MM ? void 0 : MM.kind) && lr();
        const QM = cM.getStatus();
        "collider" === (null === (aM = PM.get()) || void 0 === aM ? void 0 : aM.kind) && "collider" !== (null === MM || void 0 === MM ? void 0 : MM.kind) && QM && yM.send(Dn(QM, "close"));
        const zM = MM => "reactor" === MM || "battery" === MM;
        if (zM(null === (nM = PM.get()) || void 0 === nM ? void 0 : nM.kind) && !zM(null === MM || void 0 === MM ? void 0 : MM.kind)) {
          var LM, mM, HM;
          const MM = "reactor" === (null === (LM = PM.get()) || void 0 === LM ? void 0 : LM.kind) ? null === (mM = YM.get()) || void 0 === mM ? void 0 : mM.status.baf2RxAt : null === (HM = NM.get()) || void 0 === HM ? void 0 : HM.status.baf2BatAt;
          MM && yM.send(Lr(MM, "close"))
        }
        "quests" === (null === MM || void 0 === MM ? void 0 : MM.kind) && lM(), PM.set(MM), null === MM && eM.release()
      }

      function Gr() {
        (0, lS.k)(), Ur(null)
      }
      let Cr = new Set,
        er = !1;
      const br = {
        onCreate: MM => {
          dM = MM, dM.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const rM of gr) {
            const MM = Dr[rM].inputSlots ? gP(aM) : bP(rM, aM, RM, yM);
            Er.push((0, dS.e)(rM, MM))
          }
          Er.push((0, lS.C)((0, OM.createElement)(OM.Fragment, null, (0, OM.createElement)(dH, {
            controller: HM
          }), (0, OM.createElement)(nh, {
            store: gM
          }), (0, OM.createElement)(ly, {
            store: Or
          }), (0, OM.createElement)(xH, {
            store: UM
          }), (0, OM.createElement)(IH, {
            store: GM
          }), (0, OM.createElement)(TH, {
            store: eM
          }), (0, OM.createElement)(rh, {
            store: Qr
          }), (0, OM.createElement)(hJ, {
            store: BM
          }), (0, OM.createElement)(VJ, {
            store: KM
          })), {
            content: (0, OM.createElement)(jH, {
              commands: yM,
              store: PM,
              power: RM,
              water: sM,
              reactor: YM,
              battery: NM,
              collider: cM,
              terminal: WM,
              quests: UM,
              tutorial: CM,
              close: lS.n,
              leave: () => {
                eM.dropHeld(), (0, lS.k)()
              },
              askIslands: () => {
                yr = -1 / 0, hr = Date.now(), Jr = yM.send(IM)
              },
              openSocial: () => {
                (0, lS.k)(), ES.d.set({
                  openEverythingMenuName: Li.m.SOCIAL
                })
              },
              showCore: MM => {
                Ur({
                  kind: "core",
                  core: MM
                }), yM.send("baf2corereopen")
              }
            }),
            onClose: () => {
              Ur(null)
            }
          })), Er.push((0, yS.x)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              Ur({
                kind: "quests"
              }), (0, lS.w)()
            }
          })), Er.push(function(MM, rM) {
            let iM = null,
              OM = () => {};
            const SM = rM => {
              var SM;
              let {
                tutorial: jM,
                tutorialKnown: aM
              } = rM;
              (null === (SM = iM) || void 0 === SM ? void 0 : SM.tutorial) === jM && iM.tutorialKnown === aM || (iM = {
                tutorial: jM,
                tutorialKnown: aM
              }, OM = (0, yS.x)({
                id: "baf2Tutorial",
                order: -1,
                labelKey: Cz[jM],
                icon: {
                  kind: "icon",
                  name: Gz[jM]
                },
                iconOnly: !0,
                disabled: !aM,
                className: "Baf2TutorialButton",
                onClick: () => {
                  MM.next()
                }
              }))
            };
            SM(rM.get());
            const jM = sS.i.subscribe(kS, SM);
            return () => {
              sS.i.unsubscribe(jM), OM()
            }
          }(CM, UM)), er = !1, Er.push(jl()), Er.push(al()), Er.push(function() {
            const MM = sS.i.subscribe(kS, VS),
              rM = () => {
                if (TS) {
                  const MM = TS;
                  TS = null, (0, DS.u)(MM)
                }
              },
              iM = sS.i.subscribe("toggleMenu", (MM => {
                "inventory" === (null === MM || void 0 === MM ? void 0 : MM.split("|")[0]) && rM()
              })),
              OM = sS.i.subscribe("appManagerUpdated|openInGameMenuName", (MM => {
                "inventory" === MM && rM()
              }));
            return () => {
              sS.i.unsubscribe(MM), sS.i.unsubscribe(iM), sS.i.unsubscribe(OM)
            }
          }()), Er.push(function(MM) {
            const rM = Ml(MM),
              iM = sS.i.subscribe(kS, (MM => {
                cy.follow(MM, rM)
              }));
            return () => {
              sS.i.unsubscribe(iM), cy.clear()
            }
          }(dM)), Er.push(function() {
            const MM = document.documentElement,
              rM = (0, kH.b)(".InvenBodyRight", [], (() => {
                const rM = document.querySelector(".InvenBodyRight");
                rM && MM.style.setProperty("--baf2-backpack-width", `${rM.offsetWidth}px`)
              }));
            return () => {
              rM(), MM.style.removeProperty("--baf2-backpack-width")
            }
          }()), Er.push(function() {
            const MM = document.documentElement;
            return MM.classList.add(Ty), () => {
              MM.classList.remove(Ty)
            }
          }()), Er.push((() => {
            zM.dispose(), QM.dispose()
          })), JM.start(dM), Er.push((() => {
            JM.dispose(), nr.dispose(), uM.dispose()
          }))
        },
        onClose: () => {
          (0, DS.u)([]), TS = null, qS = new Set, il = null, (0, DS.t)(new Map), Jl.clear();
          for (const MM of Er) MM();
          UM.dispose(), Or.dispose(), GM.dispose(), eM.dispose(), Sr.dispose(), jr.dispose(dM), oM.dispose(dM), fM.dispose(dM), XM.dispose(dM), qM.dispose(dM), KM.dispose(), TM.dispose(), ZM.dispose(), YM.dispose(), NM.dispose(), BM.dispose(), ar.dispose(), Pr.dispose(), Qr.dispose(), Mr.dispose(dM), rr.dispose(dM), cM.dispose(), zr.dispose(), yM.clear()
        },
        onAfterRender: (MM, rM) => {
          var iM, OM, SM;
          try {
            JM.onAfterRender(rM)
          } catch (QM) {
            console.error("Error drawing BAF2 belt items", QM)
          }
          try {
            nr.onAfterRender(dM, jM)
          } catch (QM) {
            console.error("Error drawing BAF2 jet flames", QM)
          }
          er || (er = !0, yM.send("baf2clientready"));
          const aM = dM.getPositionView(jM);
          HM.onAfterRender(rM, aM, mM), gM.onAfterRender(rM, aM, mM, hM), zM.run(mM), Sr.onAfterRender(dM, aM), jr.onAfterRender(dM, aM), uM.onAfterRender(dM, aM), oM.onAfterRender(dM, aM), fM.onAfterRender(dM, jM, aM), XM.onAfterRender(dM, jM, aM), qM.onAfterRender(dM, jM), TM.onAfterRender(dM, aM), UM.onPlayerY(aM[1]), Mr.onAfterRender(dM), rr.onAfterRender(dM, jM, aM);
          const nM = dM.getTargetedBlock();
          Or.onAfterRender(dM, jM, null !== (iM = null === nM || void 0 === nM ? void 0 : nM.VV) && void 0 !== iM ? iM : 0, null !== (OM = null === nM || void 0 === nM ? void 0 : nM.position) && void 0 !== OM ? OM : null), zr.onAfterRender(dM, rM), tM.onMining(function(MM, rM) {
            var iM, OM;
            const SM = MM.getMiningBlock();
            if (!SM) return null;
            const jM = (0, pM.g)(MM.getBlockId(SM[0], SM[1], SM[2])),
              aM = null !== (iM = null === (OM = MM.TrM(rM)) || void 0 === OM ? void 0 : OM.name) && void 0 !== iM ? iM : null,
              PM = MM.getItemStat(rM, jM.split("|")[0], "harvestLevel");
            return {
              block: jM,
              x: SM[0],
              y: SM[1],
              z: SM[2],
              sQ: aM,
              level: PM
            }
          }(dM, jM), dM.isMining(), performance.now()), "dropMap" === (null === (SM = PM.get()) || void 0 === SM ? void 0 : SM.kind) && oO(aM[1]) && Gr()
        },
        onPlayerChangeBlock: (MM, rM, iM, OM, SM, aM) => {
          MM === jM && function(MM, rM, iM, OM, SM, jM, aM) {
            const PM = fy(jM, aM, MM.isPlayerCrouching(rM));
            if (null === PM) return;
            if (MM.cW(iM, OM, SM, PM), !MM.getClientOption(rM, "canPickUpItems")) return;
            const nM = ai[PM.split("|")[0]];
            var QM, zM, LM;
            void 0 !== nM && (QM = MM.getInventoryItems(), zM = nM, LM = Hh.f.maxItemStackSize, MM.getInventoryFreeSlotCount(rM) > 0 || QM.some((MM => null !== MM && MM.name === zM && null !== MM.amount && MM.amount < LM))) && MM.playSound(rM, (0, nl.f)("pickUp"), .5, 1)
          }(dM, MM, rM, iM, OM, SM, aM)
        },
        onPlayerAltAction: (MM, rM, iM, OM, SM) => {
          var aM, PM;
          if (!dM.getClientOption(jM, "canPickUpItems")) return;
          const nM = null !== (aM = null === (PM = dM.TrM(jM)) || void 0 === PM ? void 0 : PM.name) && void 0 !== aM ? aM : null,
            QM = function(MM, rM) {
              const iM = MM.split("|")[0];
              return wM(iM) && rM !== PS && "Sky Pack" !== rM ? iM : null
            }(SM, nM);
          if (null !== QM) return void(mr.tap(QM, performance.now()) && rl(dM, jM, QM, UM));
          if (!AO(nM)) return;
          const zM = Hr.isNewPress(performance.now()),
            LM = function(MM, rM, iM) {
              return !AO(rM) || iM ? null : TO(MM)
            }(SM, nM, dM.isPlayerCrouching(jM));
          null !== LM && zM && dM.cW(rM, iM, OM, LM)
        },
        onPlayerAttemptAltAction: (MM, rM, iM, OM, SM) => {
          if (function(MM, rM, iM, OM, SM) {
              "Workbench" === OM.split("|")[0] && MM.getClientOption(iM, "canCraft") && (cy.open("Workbench", SM.get(), Ml(MM)), rM.send("baf2station Workbench"))
            }(dM, yM, jM, SM, UM), Pl(dM, jM, SM)) return "preventAction";
          bM.onAltAction(dM, jM, SM)
        },
        onReceivedMessageFromServer: (MM, rM) => {
          if ("baf2MachineStatus" === MM) {
            var iM, OM, SM, QM, zM, LM, mM, hM, lM, CM, bM, wM, tM, uM, pM, DM;
            const MM = rM,
              jM = MM.baf2MachineTaught;
            aM.set(MM.baf2MachinePos, {
              status: MM.baf2MachineStatus,
              power: null !== (iM = MM.baf2MachinePower) && void 0 !== iM ? iM : null,
              opLeftMs: null !== (OM = MM.baf2MachineOpLeftMs) && void 0 !== OM ? OM : null,
              dug: MM.baf2MachineYield ? {
                item: MM.baf2MachineYield,
                name: EM([MM.baf2MachineYield])[MM.baf2MachineYield]
              } : null,
              powerCap: null !== (SM = MM.baf2MachinePowerCap) && void 0 !== SM ? SM : null,
              powerRates: null !== (QM = MM.baf2MachinePowerRates) && void 0 !== QM ? QM : null,
              coupled: !0 === MM.baf2MachineCoupled,
              couplerLevel: null !== (zM = MM.baf2MachineCoupler) && void 0 !== zM ? zM : 1,
              taught: jM,
              taughtName: jM ? EM([jM])[jM] : null,
              tier: null !== (LM = MM.baf2MachineTier) && void 0 !== LM ? LM : null,
              input: null !== (mM = MM.baf2MachineInput) && void 0 !== mM ? mM : null,
              inertCoupler: null !== (hM = MM.baf2MachineInertCoupler) && void 0 !== hM ? hM : null,
              inputShort: null !== (lM = MM.baf2MachineInputShort) && void 0 !== lM ? lM : null,
              field: null !== (CM = MM.baf2MachineField) && void 0 !== CM ? CM : null,
              noSeeds: !0 === MM.baf2MachineNoSeeds,
              fuelFed: !0 === MM.baf2MachineFuelFed,
              fuelFeeds: !0 === MM.baf2MachineFuelFeeds,
              coreFull: !0 === MM.baf2MachineCoreFull,
              waterUnpowered: !0 === MM.baf2MachineWaterUnpowered,
              powerShort: !0 === MM.baf2MachinePowerShort,
              powerWait: !0 === MM.baf2MachinePowerWait,
              reactorPowered: !0 === MM.baf2MachineReactorPowered,
              fuelLeftMs: null !== (bM = MM.baf2MachineFuelLeftMs) && void 0 !== bM ? bM : null,
              burning: null !== (wM = MM.baf2MachineBurning) && void 0 !== wM ? wM : null,
              fuelKeep: null !== (tM = MM.baf2MachineFuelKeep) && void 0 !== tM ? tM : null,
              water: null !== (uM = MM.baf2MachineWater) && void 0 !== uM ? uM : null,
              farm: null !== (pM = MM.baf2MachineFarm) && void 0 !== pM ? pM : null,
              cryo: null !== (DM = MM.baf2MachineCryo) && void 0 !== DM ? DM : null
            })
          } else if ("baf2StationOpen" === MM) {
            const MM = rM.baf2Station;
            mr.consumeServerOpen(MM, performance.now()) || rl(dM, jM, MM, UM)
          } else if ("baf2Power" === MM) {
            const MM = rM;
            RM.set(MM), MM.baf2PowerOpen && (Ur({
              kind: "power"
            }), (0, lS.w)())
          } else if (MM === VM.F) {
            const MM = rM;
            sM.set(MM), MM.baf2WaterOpen && (Ur({
              kind: "water"
            }), (0, lS.w)())
          } else if ("baf2RxPlans" === MM) {
            var kM, oM, fM;
            const MM = rM;
            ZM.TE(MM);
            const iM = new Set(MM.baf2RxPlanList.map((MM => {
              let [rM, iM, OM] = MM;
              return `${rM},${iM},${OM}`
            })));
            BM.retain(iM);
            const OM = null === (kM = PM.get()) || void 0 === kM ? void 0 : kM.kind,
              SM = "reactor" === OM ? null === (oM = YM.get()) || void 0 === oM ? void 0 : oM.status.baf2RxAt : "battery" === OM ? null === (fM = NM.get()) || void 0 === fM ? void 0 : fM.status.baf2BatAt : void 0;
            SM && Cr.has(SM.join(",")) && !iM.has(SM.join(",")) && Gr(), Cr = iM
          } else if ("baf2RxStatus" === MM) {
            const MM = rM;
            YM.set(MM), MM.baf2RxOpen && (Ur({
              kind: "reactor"
            }), (0, lS.w)())
          } else if ("baf2BatStatus" === MM) {
            const MM = rM;
            NM.set(MM), MM.baf2BatOpen && (Ur({
              kind: "battery"
            }), (0, lS.w)())
          } else if ("baf2RxAlarm" === MM) BM.TE(rM);
          else if ("baf2Bomb" === MM) KM.TE(rM, dM.getPositionView(jM));
          else if ("baf2Fallout" === MM) TM.TE(rM);
          else if ("baf2ColBeams" === MM) cM.onBeams(rM);
          else if ("baf2ColStatus" === MM) {
            const MM = rM;
            var xM, vM;
            if (cM.onStatus(MM), MM.baf2ColOpen) cM.onOpen(null !== (xM = null === (vM = dM.TrM(jM)) || void 0 === vM ? void 0 : vM.name) && void 0 !== xM ? xM : null), Ur({
              kind: "collider"
            }), (0, lS.w)()
          } else if ("baf2Terminal" === MM) {
            const MM = rM;
            var FM;
            if (WM.apply(MM)) MM.baf2TermReset && (Ur({
              kind: "terminal"
            }), (0, lS.w)());
            else "terminal" === (null === (FM = PM.get()) || void 0 === FM ? void 0 : FM.kind) && (PM.set(null), (0, lS.k)())
          } else if ("baf2Core" === MM) {
            var XM;
            const MM = rM;
            if (nM(!0 === MM.baf2CoreNuclear), function(MM, rM) {
                return "core" === (null === MM || void 0 === MM ? void 0 : MM.kind) && rM.baf2CoreTier > MM.core.message.baf2CoreTier
              }(PM.get(), MM)) return void(0, lS.k)();
            if (MM.baf2CoreRefresh && "core" !== (null === (XM = PM.get()) || void 0 === XM ? void 0 : XM.kind)) return;
            Ur({
              kind: "core",
              core: Hl(MM, EM)
            }), MM.baf2CoreRefresh || (0, lS.w)()
          } else if ("baf2WrenchUndo" === MM) {
            const {
              baf2WrenchPos: MM,
              baf2WrenchBlock: iM
            } = rM;
            dM.cW(MM[0], MM[1], MM[2], iM)
          } else if ("baf2Toast" === MM) {
            const MM = rM;
            AM.heard(performance.now(), MM.baf2ToastMs), GM.show(MM)
          } else if ("baf2Area" === MM) eM.arrive(rM, null !== PM.get());
          else if ("baf2Quest" === MM) {
            const MM = rM;
            nM(!0 === MM.baf2QuestNuclear), UM.set(MM, function(MM, rM) {
              var iM, OM, SM, jM, aM;
              const PM = [];
              for (const [, , zM, , , , , , LM, mM] of MM.baf2QuestSteps) null !== zM && PM.push(zM), PM.push(...null !== LM && void 0 !== LM ? LM : [], ...null !== mM && void 0 !== mM ? mM : []);
              MM.baf2QuestReward && PM.push(MM.baf2QuestReward);
              const nM = null === (iM = MM.baf2QuestSide) || void 0 === iM ? void 0 : iM[2][2];
              nM && PM.push(nM), PM.push(...null !== (OM = null === (SM = MM.baf2QuestSide) || void 0 === SM ? void 0 : SM[2][8]) && void 0 !== OM ? OM : [], ...null !== (jM = null === (aM = MM.baf2QuestSide) || void 0 === aM ? void 0 : aM[2][9]) && void 0 !== jM ? jM : []);
              for (const [zM] of null !== (QM = MM.baf2QuestAlso) && void 0 !== QM ? QM : []) {
                var QM;
                PM.push(zM)
              }
              return rM(PM)
            }(MM, EM)), Sl(MM.baf2QuestTier)
          } else if ("baf2Route" === MM) ! function(MM, rM) {
            let {
              baf2RouteCells: iM,
              baf2RouteInto: OM
            } = rM;
            0 !== iM.length && OM ? MM.setRouteChevrons({
              cells: iM.map(((MM, rM) => {
                const [SM, , jM] = function(MM, rM, iM) {
                  const OM = iM + 1 < MM.length ? MM[iM + 1] : rM;
                  return [OM[0] - MM[iM][0], 0, OM[2] - MM[iM][2]]
                }(iM, OM, rM);
                return {
                  pos: MM,
                  way: [SM, jM]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : MM.setRouteChevrons(null)
          }(dM, rM);
          else if ("baf2QuestBook" === MM) UM.setBook(rM);
          else if ("baf2Stalls" === MM) HM.set(rM.baf2StallCells);
          else if (MM === di.k) JM.onMoves(rM);
          else if (MM === di.g) JM.onLines(rM);
          else if ("baf2Labels" === MM) gM.TE(rM);
          else if ("baf2DropMap" === MM) Ur({
            kind: "dropMap",
            dropMap: rM
          }), (0, lS.w)();
          else if ("baf2Islands" === MM) {
            var qM, Mr;
            const MM = rM;
            if (yM.syncIslandEdits(MM.baf2IslandsAnswered), !MM.baf2IslandsOpen && "islands" !== (null === (qM = PM.get()) || void 0 === qM ? void 0 : qM.kind)) return;
            if (MM.baf2IslandsOpen) {
              var rr, ir;
              const rM = ES.d.get("openEverythingMenuName"),
                iM = yM.sent() >= Jr,
                OM = "other" !== (Hr = {
                  askedAtMs: hr,
                  askSent: iM,
                  reaskedAtMs: dr,
                  nowMs: Date.now(),
                  panel: null !== (rr = null === (ir = PM.get()) || void 0 === ir ? void 0 : ir.kind) && void 0 !== rr ? rr : null,
                  inGameMenu: ES.d.get("openInGameMenuName"),
                  everythingMenu: null === rM ? null : rM === Li.m.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== MM.baf2IslandsFocusInvite
                }).everythingMenu && (!!Hr.focusInvite || "islands" === Hr.panel && "clientGame" === Hr.inGameMenu || !(Hr.nowMs - Hr.reaskedAtMs < pQ) && (Hr.askSent && Hr.nowMs - Hr.askedAtMs < pQ ? "core" === Hr.panel && "clientGame" === Hr.inGameMenu && null === Hr.everythingMenu : "shop" === Hr.everythingMenu || null === Hr.inGameMenu));
              if (iM && (hr = -1 / 0), dr = -1 / 0, !OM) return void lr()
            }
            const iM = (Sr = MM.baf2IslandsOpen, jr = "islands" === (null === (Mr = PM.get()) || void 0 === Mr ? void 0 : Mr.kind), zr = yr, Lr = Date.now(), Sr && !jr && Lr - zr < pQ);
            Ur({
              kind: "islands",
              islands: MM,
              arrivedAtMs: Date.now(),
              backToCore: WQ(PM.get())
            }), iM && (yr = -1 / 0, dr = Date.now(), yM.send(IM)), MM.baf2IslandsOpen && ("clientGame" !== ES.d.get("openInGameMenuName") && (0, US.i)(), (0, lS.w)())
          } else if ("baf2CoopTransfer" === MM) {
            var Or;
            const MM = rM;
            MM.baf2TransferOn ? (Ur({
              kind: "transfer",
              transfer: MM,
              arrivedAtMs: Date.now()
            }), (0, lS.w)()) : "transfer" === (null === (Or = PM.get()) || void 0 === Or ? void 0 : Or.kind) && (0, lS.k)()
          } else "baf2IslandLeft" === MM ? (eM.dropHeld(), null !== PM.get() && Gr(), "inventory" === ES.d.get("openInGameMenuName") && (0, US.i)()) : "baf2Arc" === MM ? ar.TE(dM, rM) : "baf2Blade" === MM ? Pr.onBlade(dM, rM) : "baf2JetFlame" === MM ? nr.TE(dM, rM) : "baf2GearPower" === MM && Qr.TE(rM);
          var Sr, jr, zr, Lr, Hr
        }
      };
      return br
    }
  },
  39485: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => aM,
      e: () => PM
    });
    var OM = iM(332),
      SM = iM(35037),
      jM = iM(3693);

    function aM(MM) {
      const rM = (0, jM.d)(MM);
      return (0, OM.Qb)(MM, void 0 === rM ? void 0 : (0, SM.displayNameOf)(rM))
    }

    function PM(MM, rM) {
      return MM(aM(rM))
    }
  },
  39509: (MM, rM, iM) => {
    function OM(MM, rM, iM) {
      const OM = new Set,
        SM = new ResizeObserver(iM),
        jM = () => {
          const rM = new Set(document.querySelectorAll(MM));
          let jM = !1;
          for (const MM of OM) rM.has(MM) || (SM.unobserve(MM), OM.delete(MM), jM = !0);
          for (const MM of rM) OM.has(MM) || (SM.observe(MM), aM.observe(MM, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), OM.add(MM));
          jM && iM()
        },
        aM = new MutationObserver((rM => {
          rM.some((MM => "attributes" === MM.type)) && iM(), rM.some((rM => function(MM, rM, iM) {
            if ("childList" !== MM.type) return !1;
            for (const OM of MM.addedNodes)
              if (OM instanceof Element && (OM.matches(rM) || OM.querySelector(rM))) return !0;
            for (const OM of MM.removedNodes)
              if (OM instanceof Element)
                for (const MM of iM)
                  if (OM.contains(MM)) return !0;
            return !1
          }(rM, MM, OM))) && jM()
        }));
      aM.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const PM of rM) SM.observe(PM);
      return window.addEventListener("resize", iM), jM(), iM(), () => {
        SM.disconnect(), aM.disconnect(), window.removeEventListener("resize", iM)
      }
    }
    iM.d(rM, {
      b: () => OM
    })
  },
  39499: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => PM
    });
    var OM = iM(39491);
    const SM = 5,
      jM = [0, 0, 0],
      aM = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function PM(MM, rM, iM, PM, nM, QM) {
      let [zM, LM, mM] = PM;
      const HM = (zM + .5 - iM[0]) ** 2 + (LM - iM[1]) ** 2 + (mM + .5 - iM[2]) ** 2;
      let hM = null;
      HM <= QM ** 2 && (jM[0] = zM + .5, jM[1] = LM + nM, jM[2] = mM + .5, hM = rM.projectWorldPosToViewport(jM));
      const JM = null !== hM && hM.x > -SM && hM.x < 100 + SM && hM.y > -SM && hM.y < 100 + SM;
      return (0, OM.e)(MM, !JM), JM ? (aM.x = hM.x, aM.y = hM.y, aM.distSq = HM, aM) : null
    }
  },
  39491: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => aM,
      e: () => jM
    });
    const OM = new WeakMap;

    function SM(MM) {
      let rM = OM.get(MM);
      return rM || (rM = {
        hidden: MM.hidden,
        x: NaN,
        y: NaN
      }, OM.set(MM, rM)), rM
    }

    function jM(MM, rM) {
      const iM = SM(MM);
      iM.hidden !== rM && (iM.hidden = rM, MM.hidden = rM)
    }

    function aM(MM, rM, iM) {
      const OM = SM(MM);
      OM.x === rM && OM.y === iM || (OM.x = rM, OM.y = iM, MM.style.translate = `${rM}vw ${iM}vh`)
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);